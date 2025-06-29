var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _i2, _e, _o2, _t, _a2, _r2, _rT_instances, l_fn;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function o(r) {
    if (r.ep) return;
    r.ep = true;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const gt = {}, Ar = [], Ln = () => {
}, ib = () => false, El = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ju = (e) => e.startsWith("onUpdate:"), zt = Object.assign, Uu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ab = Object.prototype.hasOwnProperty, ft = (e, t) => ab.call(e, t), je = Array.isArray, Lr = (e) => ra(e) === "[object Map]", jv = (e) => ra(e) === "[object Set]", lb = (e) => ra(e) === "[object RegExp]", Ge = (e) => typeof e == "function", Pt = (e) => typeof e == "string", Ro = (e) => typeof e == "symbol", kt = (e) => e !== null && typeof e == "object", Uv = (e) => (kt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), Qv = Object.prototype.toString, ra = (e) => Qv.call(e), sb = (e) => ra(e).slice(8, -1), Kv = (e) => ra(e) === "[object Object]", Qu = (e) => Pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ei = /* @__PURE__ */ Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Al = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ub = /-(\w)/g, xn = Al((e) => e.replace(ub, (t, n) => n ? n.toUpperCase() : "")), db = /\B([A-Z])/g, dr = Al((e) => e.replace(db, "-$1").toLowerCase()), Ll = Al((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = Al((e) => e ? `on${Ll(e)}` : ""), Eo = (e, t) => !Object.is(e, t), Ai = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Wv = (e, t, n, o = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: o, value: n });
}, fb = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vb = (e) => {
  const t = Pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zc;
const ia = () => Zc || (Zc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function aa(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Pt(o) ? bb(o) : aa(o);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (Pt(e) || kt(e)) return e;
}
const hb = /;(?![^(]*\))/g, mb = /:([^]+)/, gb = /\/\*[^]*?\*\//g;
function bb(e) {
  const t = {};
  return e.replace(gb, "").split(hb).forEach((n) => {
    if (n) {
      const o = n.split(mb);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ku(e) {
  let t = "";
  if (Pt(e)) t = e;
  else if (je(e)) for (let n = 0; n < e.length; n++) {
    const o = Ku(e[n]);
    o && (t += o + " ");
  }
  else if (kt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const pb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yb = /* @__PURE__ */ Hu(pb);
function Yv(e) {
  return !!e || e === "";
}
const Gv = (e) => !!(e && e.__v_isRef === true), jt = (e) => Pt(e) ? e : e == null ? "" : je(e) || kt(e) && (e.toString === Qv || !Ge(e.toString)) ? Gv(e) ? jt(e.value) : JSON.stringify(e, Xv, 2) : String(e), Xv = (e, t) => Gv(t) ? Xv(e, t.value) : Lr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r], i) => (n[ls(o, i) + " =>"] = r, n), {}) } : jv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => ls(n)) } : Ro(t) ? ls(t) : kt(t) && !je(t) && !Kv(t) ? String(t) : t, ls = (e, t = "") => {
  var n;
  return Ro(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class _b {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = dn, !t && dn && (this.index = (dn.scopes || (dn.scopes = [])).push(this) - 1);
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
      const n = dn;
      try {
        return dn = this, t();
      } finally {
        dn = n;
      }
    }
  }
  on() {
    dn = this;
  }
  off() {
    dn = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(true);
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
function wb() {
  return dn;
}
let yt;
const ss = /* @__PURE__ */ new WeakSet();
class Jv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ss.has(this) && (ss.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || eh(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ed(this), th(this);
    const t = yt, n = Bn;
    yt = this, Bn = true;
    try {
      return this.fn();
    } finally {
      nh(this), yt = t, Bn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Gu(t);
      this.deps = this.depsTail = void 0, ed(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    nu(this) && this.run();
  }
  get dirty() {
    return nu(this);
  }
}
let Zv = 0, Li, Bi;
function eh(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Bi, Bi = e;
    return;
  }
  e.next = Li, Li = e;
}
function Wu() {
  Zv++;
}
function Yu() {
  if (--Zv > 0) return;
  if (Bi) {
    let t = Bi;
    for (Bi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Li; ) {
    let t = Li;
    for (Li = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (o) {
        e || (e = o);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function th(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nh(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), Gu(o), xb(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function nu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (oh(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function oh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ji)) return;
  e.globalVersion = ji;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !nu(e)) {
    e.flags &= -3;
    return;
  }
  const n = yt, o = Bn;
  yt = e, Bn = true;
  try {
    th(e);
    const r = e.fn(e._value);
    (t.version === 0 || Eo(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    yt = n, Bn = o, nh(e), e.flags &= -3;
  }
}
function Gu(e, t = false) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Gu(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Bn = true;
const rh = [];
function Po() {
  rh.push(Bn), Bn = false;
}
function Do() {
  const e = rh.pop();
  Bn = e === void 0 ? true : e;
}
function ed(e) {
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
let ji = 0;
class Cb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!yt || !Bn || yt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt) n = this.activeLink = new Cb(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, ih(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, ji++, this.notify(t);
  }
  notify(t) {
    Wu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Yu();
    }
  }
}
function ih(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep) ih(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ou = /* @__PURE__ */ new WeakMap(), tr = Symbol(""), ru = Symbol(""), Ui = Symbol("");
function Jt(e, t, n) {
  if (Bn && yt) {
    let o = ou.get(e);
    o || ou.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Xu()), r.map = o, r.key = n), r.track();
  }
}
function to(e, t, n, o, r, i) {
  const a = ou.get(e);
  if (!a) {
    ji++;
    return;
  }
  const l = (s) => {
    s && s.trigger();
  };
  if (Wu(), t === "clear") a.forEach(l);
  else {
    const s = je(e), d = s && Qu(n);
    if (s && n === "length") {
      const c = Number(o);
      a.forEach((f, v) => {
        (v === "length" || v === Ui || !Ro(v) && v >= c) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), d && l(a.get(Ui)), t) {
      case "add":
        s ? d && l(a.get("length")) : (l(a.get(tr)), Lr(e) && l(a.get(ru)));
        break;
      case "delete":
        s || (l(a.get(tr)), Lr(e) && l(a.get(ru)));
        break;
      case "set":
        Lr(e) && l(a.get(tr));
        break;
    }
  }
  Yu();
}
function br(e) {
  const t = Je(e);
  return t === e ? t : (Jt(t, "iterate", Ui), Rn(e) ? t : t.map(tn));
}
function Ju(e) {
  return Jt(e = Je(e), "iterate", Ui), e;
}
const Sb = { __proto__: null, [Symbol.iterator]() {
  return us(this, Symbol.iterator, tn);
}, concat(...e) {
  return br(this).concat(...e.map((t) => je(t) ? br(t) : t));
}, entries() {
  return us(this, "entries", (e) => (e[1] = tn(e[1]), e));
}, every(e, t) {
  return Qn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Qn(this, "filter", e, t, (n) => n.map(tn), arguments);
}, find(e, t) {
  return Qn(this, "find", e, t, tn, arguments);
}, findIndex(e, t) {
  return Qn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Qn(this, "findLast", e, t, tn, arguments);
}, findLastIndex(e, t) {
  return Qn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Qn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return cs(this, "includes", e);
}, indexOf(...e) {
  return cs(this, "indexOf", e);
}, join(e) {
  return br(this).join(e);
}, lastIndexOf(...e) {
  return cs(this, "lastIndexOf", e);
}, map(e, t) {
  return Qn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Jr(this, "pop");
}, push(...e) {
  return Jr(this, "push", e);
}, reduce(e, ...t) {
  return td(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return td(this, "reduceRight", e, t);
}, shift() {
  return Jr(this, "shift");
}, some(e, t) {
  return Qn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Jr(this, "splice", e);
}, toReversed() {
  return br(this).toReversed();
}, toSorted(e) {
  return br(this).toSorted(e);
}, toSpliced(...e) {
  return br(this).toSpliced(...e);
}, unshift(...e) {
  return Jr(this, "unshift", e);
}, values() {
  return us(this, "values", tn);
} };
function us(e, t, n) {
  const o = Ju(e), r = o[t]();
  return o !== e && !Rn(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Tb = Array.prototype;
function Qn(e, t, n, o, r, i) {
  const a = Ju(e), l = a !== e && !Rn(e), s = a[t];
  if (s !== Tb[t]) {
    const f = s.apply(e, i);
    return l ? tn(f) : f;
  }
  let d = n;
  a !== e && (l ? d = function(f, v) {
    return n.call(this, tn(f), v, e);
  } : n.length > 2 && (d = function(f, v) {
    return n.call(this, f, v, e);
  }));
  const c = s.call(a, d, o);
  return l && r ? r(c) : c;
}
function td(e, t, n, o) {
  const r = Ju(e);
  let i = n;
  return r !== e && (Rn(e) ? n.length > 3 && (i = function(a, l, s) {
    return n.call(this, a, l, s, e);
  }) : i = function(a, l, s) {
    return n.call(this, a, tn(l), s, e);
  }), r[t](i, ...o);
}
function cs(e, t, n) {
  const o = Je(e);
  Jt(o, "iterate", Ui);
  const r = o[t](...n);
  return (r === -1 || r === false) && nc(n[0]) ? (n[0] = Je(n[0]), o[t](...n)) : r;
}
function Jr(e, t, n = []) {
  Po(), Wu();
  const o = Je(e)[t].apply(e, n);
  return Yu(), Do(), o;
}
const kb = /* @__PURE__ */ Hu("__proto__,__v_isRef,__isVue"), ah = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ro));
function Mb(e) {
  Ro(e) || (e = String(e));
  const t = Je(this);
  return Jt(t, "has", e), t.hasOwnProperty(e);
}
class lh {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return o === (r ? i ? Vb : dh : i ? ch : uh).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const a = je(t);
    if (!r) {
      let s;
      if (a && (s = Sb[n])) return s;
      if (n === "hasOwnProperty") return Mb;
    }
    const l = Reflect.get(t, n, wt(t) ? t : o);
    return (Ro(n) ? ah.has(n) : kb(n)) || (r || Jt(t, "get", n), i) ? l : wt(l) ? a && Qu(n) ? l : l.value : kt(l) ? r ? fh(l) : Nn(l) : l;
  }
}
class sh extends lh {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const s = ar(i);
      if (!Rn(o) && !ar(o) && (i = Je(i), o = Je(o)), !je(t) && wt(i) && !wt(o)) return s ? false : (i.value = o, true);
    }
    const a = je(t) && Qu(n) ? Number(n) < t.length : ft(t, n), l = Reflect.set(t, n, o, wt(t) ? t : r);
    return t === Je(r) && (a ? Eo(o, i) && to(t, "set", n, o) : to(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = ft(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && to(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ro(n) || !ah.has(n)) && Jt(t, "has", n), o;
  }
  ownKeys(t) {
    return Jt(t, "iterate", je(t) ? "length" : tr), Reflect.ownKeys(t);
  }
}
class qb extends lh {
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
const Eb = new sh(), Ab = new qb(), Lb = new sh(true);
const iu = (e) => e, ga = (e) => Reflect.getPrototypeOf(e);
function Bb(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = Je(r), a = Lr(i), l = e === "entries" || e === Symbol.iterator && a, s = e === "keys" && a, d = r[e](...o), c = n ? iu : t ? au : tn;
    return !t && Jt(i, "iterate", s ? ru : tr), { next() {
      const { value: f, done: v } = d.next();
      return v ? { value: f, done: v } : { value: l ? [c(f[0]), c(f[1])] : c(f), done: v };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function ba(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Rb(e, t) {
  const n = { get(r) {
    const i = this.__v_raw, a = Je(i), l = Je(r);
    e || (Eo(r, l) && Jt(a, "get", r), Jt(a, "get", l));
    const { has: s } = ga(a), d = t ? iu : e ? au : tn;
    if (s.call(a, r)) return d(i.get(r));
    if (s.call(a, l)) return d(i.get(l));
    i !== a && i.get(r);
  }, get size() {
    const r = this.__v_raw;
    return !e && Jt(Je(r), "iterate", tr), Reflect.get(r, "size", r);
  }, has(r) {
    const i = this.__v_raw, a = Je(i), l = Je(r);
    return e || (Eo(r, l) && Jt(a, "has", r), Jt(a, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
  }, forEach(r, i) {
    const a = this, l = a.__v_raw, s = Je(l), d = t ? iu : e ? au : tn;
    return !e && Jt(s, "iterate", tr), l.forEach((c, f) => r.call(i, d(c), d(f), a));
  } };
  return zt(n, e ? { add: ba("add"), set: ba("set"), delete: ba("delete"), clear: ba("clear") } : { add(r) {
    !t && !Rn(r) && !ar(r) && (r = Je(r));
    const i = Je(this);
    return ga(i).has.call(i, r) || (i.add(r), to(i, "add", r, r)), this;
  }, set(r, i) {
    !t && !Rn(i) && !ar(i) && (i = Je(i));
    const a = Je(this), { has: l, get: s } = ga(a);
    let d = l.call(a, r);
    d || (r = Je(r), d = l.call(a, r));
    const c = s.call(a, r);
    return a.set(r, i), d ? Eo(i, c) && to(a, "set", r, i) : to(a, "add", r, i), this;
  }, delete(r) {
    const i = Je(this), { has: a, get: l } = ga(i);
    let s = a.call(i, r);
    s || (r = Je(r), s = a.call(i, r)), l && l.call(i, r);
    const d = i.delete(r);
    return s && to(i, "delete", r, void 0), d;
  }, clear() {
    const r = Je(this), i = r.size !== 0, a = r.clear();
    return i && to(r, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    n[r] = Bb(r, e, t);
  }), n;
}
function Zu(e, t) {
  const n = Rb(e, t);
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(ft(n, r) && r in o ? n : o, r, i);
}
const Pb = { get: Zu(false, false) }, Db = { get: Zu(false, true) }, Ob = { get: Zu(true, false) };
const uh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), Vb = /* @__PURE__ */ new WeakMap();
function Fb(e) {
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
function $b(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fb(sb(e));
}
function Nn(e) {
  return ar(e) ? e : tc(e, false, Eb, Pb, uh);
}
function ec(e) {
  return tc(e, false, Lb, Db, ch);
}
function fh(e) {
  return tc(e, true, Ab, Ob, dh);
}
function tc(e, t, n, o, r) {
  if (!kt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = r.get(e);
  if (i) return i;
  const a = $b(e);
  if (a === 0) return e;
  const l = new Proxy(e, a === 2 ? o : n);
  return r.set(e, l), l;
}
function Ri(e) {
  return ar(e) ? Ri(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ar(e) {
  return !!(e && e.__v_isReadonly);
}
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function nc(e) {
  return e ? !!e.__v_raw : false;
}
function Je(e) {
  const t = e && e.__v_raw;
  return t ? Je(t) : e;
}
function Bl(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Wv(e, "__v_skip", true), e;
}
const tn = (e) => kt(e) ? Nn(e) : e, au = (e) => kt(e) ? fh(e) : e;
function wt(e) {
  return e ? e.__v_isRef === true : false;
}
function H(e) {
  return vh(e, false);
}
function Ib(e) {
  return vh(e, true);
}
function vh(e, t) {
  return wt(e) ? e : new Nb(e, t);
}
class Nb {
  constructor(t, n) {
    this.dep = new Xu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Je(t), this._value = n ? t : tn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Rn(t) || ar(t);
    t = o ? t : Je(t), Eo(t, n) && (this._rawValue = t, this._value = o ? t : tn(t), this.dep.trigger());
  }
}
function Re(e) {
  return wt(e) ? e.value : e;
}
const zb = { get: (e, t, n) => t === "__v_raw" ? e : Re(Reflect.get(e, t, n)), set: (e, t, n, o) => {
  const r = e[t];
  return wt(r) && !wt(n) ? (r.value = n, true) : Reflect.set(e, t, n, o);
} };
function hh(e) {
  return Ri(e) ? e : new Proxy(e, zb);
}
class Hb {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ji - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && yt !== this) return eh(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return oh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function jb(e, t, n = false) {
  let o, r;
  return Ge(e) ? o = e : (o = e.get, r = e.set), new Hb(o, r, n);
}
const pa = {}, el = /* @__PURE__ */ new WeakMap();
let Yo;
function Ub(e, t = false, n = Yo) {
  if (n) {
    let o = el.get(n);
    o || el.set(n, o = []), o.push(e);
  }
}
function Qb(e, t, n = gt) {
  const { immediate: o, deep: r, once: i, scheduler: a, augmentJob: l, call: s } = n, d = (b) => r ? b : Rn(b) || r === false || r === 0 ? no(b, 1) : no(b);
  let c, f, v, u, g = false, y = false;
  if (wt(e) ? (f = () => e.value, g = Rn(e)) : Ri(e) ? (f = () => d(e), g = true) : je(e) ? (y = true, g = e.some((b) => Ri(b) || Rn(b)), f = () => e.map((b) => {
    if (wt(b)) return b.value;
    if (Ri(b)) return d(b);
    if (Ge(b)) return s ? s(b, 2) : b();
  })) : Ge(e) ? t ? f = s ? () => s(e, 2) : e : f = () => {
    if (v) {
      Po();
      try {
        v();
      } finally {
        Do();
      }
    }
    const b = Yo;
    Yo = c;
    try {
      return s ? s(e, 3, [u]) : e(u);
    } finally {
      Yo = b;
    }
  } : f = Ln, t && r) {
    const b = f, C = r === true ? 1 / 0 : r;
    f = () => no(b(), C);
  }
  const w = wb(), x = () => {
    c.stop(), w && w.active && Uu(w.effects, c);
  };
  if (i && t) {
    const b = t;
    t = (...C) => {
      b(...C), x();
    };
  }
  let _ = y ? new Array(e.length).fill(pa) : pa;
  const p = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b)) if (t) {
      const C = c.run();
      if (r || g || (y ? C.some((q, B) => Eo(q, _[B])) : Eo(C, _))) {
        v && v();
        const q = Yo;
        Yo = c;
        try {
          const B = [C, _ === pa ? void 0 : y && _[0] === pa ? [] : _, u];
          s ? s(t, 3, B) : t(...B), _ = C;
        } finally {
          Yo = q;
        }
      }
    } else c.run();
  };
  return l && l(p), c = new Jv(f), c.scheduler = a ? () => a(p, false) : p, u = (b) => Ub(b, false, c), v = c.onStop = () => {
    const b = el.get(c);
    if (b) {
      if (s) s(b, 4);
      else for (const C of b) C();
      el.delete(c);
    }
  }, t ? o ? p(true) : _ = c.run() : a ? a(p.bind(null, true), true) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x;
}
function no(e, t = 1 / 0, n) {
  if (t <= 0 || !kt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, wt(e)) no(e.value, t, n);
  else if (je(e)) for (let o = 0; o < e.length; o++) no(e[o], t, n);
  else if (jv(e) || Lr(e)) e.forEach((o) => {
    no(o, t, n);
  });
  else if (Kv(e)) {
    for (const o in e) no(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && no(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function la(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Rl(r, t, n);
  }
}
function Dn(e, t, n, o) {
  if (Ge(e)) {
    const r = la(e, t, n, o);
    return r && Uv(r) && r.catch((i) => {
      Rl(i, t, n);
    }), r;
  }
  if (je(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Dn(e[i], t, n, o));
    return r;
  }
}
function Rl(e, t, n, o = true) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: a } = t && t.appContext.config || gt;
  if (t) {
    let l = t.parent;
    const s = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, s, d) === false) return;
      }
      l = l.parent;
    }
    if (i) {
      Po(), la(i, null, 10, [e, s, d]), Do();
      return;
    }
  }
  Kb(e, n, r, o, a);
}
function Kb(e, t, n, o = true, r = false) {
  if (r) throw e;
  console.error(e);
}
const nn = [];
let $n = -1;
const Br = [];
let wo = null, Tr = 0;
const mh = Promise.resolve();
let tl = null;
function Qe(e) {
  const t = tl || mh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wb(e) {
  let t = $n + 1, n = nn.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = nn[o], i = Qi(r);
    i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function oc(e) {
  if (!(e.flags & 1)) {
    const t = Qi(e), n = nn[nn.length - 1];
    !n || !(e.flags & 2) && t >= Qi(n) ? nn.push(e) : nn.splice(Wb(t), 0, e), e.flags |= 1, gh();
  }
}
function gh() {
  tl || (tl = mh.then(yh));
}
function bh(e) {
  je(e) ? Br.push(...e) : wo && e.id === -1 ? wo.splice(Tr + 1, 0, e) : e.flags & 1 || (Br.push(e), e.flags |= 1), gh();
}
function nd(e, t, n = $n + 1) {
  for (; n < nn.length; n++) {
    const o = nn[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid) continue;
      nn.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ph(e) {
  if (Br.length) {
    const t = [...new Set(Br)].sort((n, o) => Qi(n) - Qi(o));
    if (Br.length = 0, wo) {
      wo.push(...t);
      return;
    }
    for (wo = t, Tr = 0; Tr < wo.length; Tr++) {
      const n = wo[Tr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    wo = null, Tr = 0;
  }
}
const Qi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yh(e) {
  try {
    for ($n = 0; $n < nn.length; $n++) {
      const t = nn[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), la(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < nn.length; $n++) {
      const t = nn[$n];
      t && (t.flags &= -2);
    }
    $n = -1, nn.length = 0, ph(), tl = null, (nn.length || Br.length) && yh();
  }
}
let sn = null, _h = null;
function nl(e) {
  const t = sn;
  return sn = e, _h = e && e.type.__scopeId || null, t;
}
function qt(e, t = sn, n) {
  if (!t || e._n) return e;
  const o = (...r) => {
    o._d && md(-1);
    const i = nl(t);
    let a;
    try {
      a = e(...r);
    } finally {
      nl(i), o._d && md(1);
    }
    return a;
  };
  return o._n = true, o._c = true, o._d = true, o;
}
function hn(e, t) {
  if (sn === null) return e;
  const n = Il(sn), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, a, l, s = gt] = t[r];
    i && (Ge(i) && (i = { mounted: i, updated: i }), i.deep && no(a), o.push({ dir: i, instance: n, value: a, oldValue: void 0, arg: l, modifiers: s }));
  }
  return e;
}
function $o(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const l = r[a];
    i && (l.oldValue = i[a].value);
    let s = l.dir[o];
    s && (Po(), Dn(s, n, 8, [e.el, l, e, t]), Do());
  }
}
const wh = Symbol("_vte"), xh = (e) => e.__isTeleport, Pi = (e) => e && (e.disabled || e.disabled === ""), od = (e) => e && (e.defer || e.defer === ""), rd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, id = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lu = (e, t) => {
  const n = e && e.to;
  return Pt(n) ? t ? t(n) : null : n;
}, Ch = { name: "Teleport", __isTeleport: true, process(e, t, n, o, r, i, a, l, s, d) {
  const { mc: c, pc: f, pbc: v, o: { insert: u, querySelector: g, createText: y, createComment: w } } = d, x = Pi(t.props);
  let { shapeFlag: _, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = y(""), q = t.anchor = y("");
    u(C, n, o), u(q, n, o);
    const B = (R, D) => {
      _ & 16 && (r && r.isCE && (r.ce._teleportTarget = R), c(p, R, D, r, i, a, l, s));
    }, V = () => {
      const R = t.target = lu(t.props, g), D = Sh(R, t, y, u);
      R && (a !== "svg" && rd(R) ? a = "svg" : a !== "mathml" && id(R) && (a = "mathml"), x || (B(R, D), $a(t, false)));
    };
    x && (B(n, q), $a(t, true)), od(t.props) ? Ft(() => {
      V(), t.el.__isMounted = true;
    }, i) : V();
  } else {
    if (od(t.props) && !e.el.__isMounted) {
      Ft(() => {
        Ch.process(e, t, n, o, r, i, a, l, s, d), delete e.el.__isMounted;
      }, i);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, q = t.target = e.target, B = t.targetAnchor = e.targetAnchor, V = Pi(e.props), R = V ? n : q, D = V ? C : B;
    if (a === "svg" || rd(q) ? a = "svg" : (a === "mathml" || id(q)) && (a = "mathml"), b ? (v(e.dynamicChildren, b, R, r, i, a, l), lc(e, t, true)) : s || f(e, t, R, D, r, i, a, l, false), x) V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ya(t, n, C, d, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const $ = t.target = lu(t.props, g);
      $ && ya(t, $, null, d, 0);
    } else V && ya(t, q, B, d, 1);
    $a(t, x);
  }
}, remove(e, t, n, { um: o, o: { remove: r } }, i) {
  const { shapeFlag: a, children: l, anchor: s, targetStart: d, targetAnchor: c, target: f, props: v } = e;
  if (f && (r(d), r(c)), i && r(s), a & 16) {
    const u = i || !Pi(v);
    for (let g = 0; g < l.length; g++) {
      const y = l[g];
      o(y, t, n, u, !!y.dynamicChildren);
    }
  }
}, move: ya, hydrate: Yb };
function ya(e, t, n, { o: { insert: o }, m: r }, i = 2) {
  i === 0 && o(e.targetAnchor, t, n);
  const { el: a, anchor: l, shapeFlag: s, children: d, props: c } = e, f = i === 2;
  if (f && o(a, t, n), (!f || Pi(c)) && s & 16) for (let v = 0; v < d.length; v++) r(d[v], t, n, 2);
  f && o(l, t, n);
}
function Yb(e, t, n, o, r, i, { o: { nextSibling: a, parentNode: l, querySelector: s, insert: d, createText: c } }, f) {
  const v = t.target = lu(t.props, s);
  if (v) {
    const u = Pi(t.props), g = v._lpa || v.firstChild;
    if (t.shapeFlag & 16) if (u) t.anchor = f(a(e), t, l(e), n, o, r, i), t.targetStart = g, t.targetAnchor = g && a(g);
    else {
      t.anchor = a(e);
      let y = g;
      for (; y; ) {
        if (y && y.nodeType === 8) {
          if (y.data === "teleport start anchor") t.targetStart = y;
          else if (y.data === "teleport anchor") {
            t.targetAnchor = y, v._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        }
        y = a(y);
      }
      t.targetAnchor || Sh(v, t, c, d), f(g && a(g), t, v, n, o, r, i);
    }
    $a(t, u);
  }
  return t.anchor && a(t.anchor);
}
const Gb = Ch;
function $a(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let o, r;
    for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; ) o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
    n.ut();
  }
}
function Sh(e, t, n, o) {
  const r = t.targetStart = n(""), i = t.targetAnchor = n("");
  return r[wh] = i, e && (o(r, e), o(i, e)), i;
}
const xo = Symbol("_leaveCb"), _a = Symbol("_enterCb");
function Th() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return st(() => {
    e.isMounted = true;
  }), We(() => {
    e.isUnmounting = true;
  }), e;
}
const gn = [Function, Array], kh = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: gn, onEnter: gn, onAfterEnter: gn, onEnterCancelled: gn, onBeforeLeave: gn, onLeave: gn, onAfterLeave: gn, onLeaveCancelled: gn, onBeforeAppear: gn, onAppear: gn, onAfterAppear: gn, onAppearCancelled: gn }, Mh = (e) => {
  const t = e.subTree;
  return t.component ? Mh(t.component) : t;
}, Xb = { name: "BaseTransition", props: kh, setup(e, { slots: t }) {
  const n = xe(), o = Th();
  return () => {
    const r = t.default && rc(t.default(), true);
    if (!r || !r.length) return;
    const i = qh(r), a = Je(e), { mode: l } = a;
    if (o.isLeaving) return ds(i);
    const s = ad(i);
    if (!s) return ds(i);
    let d = Ki(s, a, o, n, (f) => d = f);
    s.type !== rn && Bo(s, d);
    let c = n.subTree && ad(n.subTree);
    if (c && c.type !== rn && !To(s, c) && Mh(n).type !== rn) {
      let f = Ki(c, a, o, n);
      if (Bo(c, f), l === "out-in" && s.type !== rn) return o.isLeaving = true, f.afterLeave = () => {
        o.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, ds(i);
      l === "in-out" && s.type !== rn ? f.delayLeave = (v, u, g) => {
        const y = Eh(o, c);
        y[String(c.key)] = c, v[xo] = () => {
          u(), v[xo] = void 0, delete d.delayedLeave, c = void 0;
        }, d.delayedLeave = () => {
          g(), delete d.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return i;
  };
} };
function qh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== rn) {
      t = n;
      break;
    }
  }
  return t;
}
const Jb = Xb;
function Eh(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Ki(e, t, n, o, r) {
  const { appear: i, mode: a, persisted: l = false, onBeforeEnter: s, onEnter: d, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: v, onLeave: u, onAfterLeave: g, onLeaveCancelled: y, onBeforeAppear: w, onAppear: x, onAfterAppear: _, onAppearCancelled: p } = t, b = String(e.key), C = Eh(n, e), q = (R, D) => {
    R && Dn(R, o, 9, D);
  }, B = (R, D) => {
    const $ = D[1];
    q(R, D), je(R) ? R.every((M) => M.length <= 1) && $() : R.length <= 1 && $();
  }, V = { mode: a, persisted: l, beforeEnter(R) {
    let D = s;
    if (!n.isMounted) if (i) D = w || s;
    else return;
    R[xo] && R[xo](true);
    const $ = C[b];
    $ && To(e, $) && $.el[xo] && $.el[xo](), q(D, [R]);
  }, enter(R) {
    let D = d, $ = c, M = f;
    if (!n.isMounted) if (i) D = x || d, $ = _ || c, M = p || f;
    else return;
    let A = false;
    const T = R[_a] = (z) => {
      A || (A = true, z ? q(M, [R]) : q($, [R]), V.delayedLeave && V.delayedLeave(), R[_a] = void 0);
    };
    D ? B(D, [R, T]) : T();
  }, leave(R, D) {
    const $ = String(e.key);
    if (R[_a] && R[_a](true), n.isUnmounting) return D();
    q(v, [R]);
    let M = false;
    const A = R[xo] = (T) => {
      M || (M = true, D(), T ? q(y, [R]) : q(g, [R]), R[xo] = void 0, C[$] === e && delete C[$]);
    };
    C[$] = e, u ? B(u, [R, A]) : A();
  }, clone(R) {
    const D = Ki(R, t, n, o, r);
    return r && r(D), D;
  } };
  return V;
}
function ds(e) {
  if (Pl(e)) return e = ro(e), e.children = null, e;
}
function ad(e) {
  if (!Pl(e)) return xh(e.type) && e.children ? qh(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ge(n.default)) return n.default();
  }
}
function Bo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rc(e, t = false, n) {
  let o = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === on ? (a.patchFlag & 128 && r++, o = o.concat(rc(a.children, t, l))) : (t || a.type !== rn) && o.push(l != null ? ro(a, { key: l }) : a);
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
  return Ge(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
function Ah(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ol(e, t, n, o, r = false) {
  if (je(e)) {
    e.forEach((g, y) => ol(g, t && (je(t) ? t[y] : t), n, o, r));
    return;
  }
  if (Rr(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && ol(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Il(o.component) : o.el, a = r ? null : i, { i: l, r: s } = e, d = t && t.r, c = l.refs === gt ? l.refs = {} : l.refs, f = l.setupState, v = Je(f), u = f === gt ? () => false : (g) => ft(v, g);
  if (d != null && d !== s && (Pt(d) ? (c[d] = null, u(d) && (f[d] = null)) : wt(d) && (d.value = null)), Ge(s)) la(s, l, 12, [a, c]);
  else {
    const g = Pt(s), y = wt(s);
    if (g || y) {
      const w = () => {
        if (e.f) {
          const x = g ? u(s) ? f[s] : c[s] : s.value;
          r ? je(x) && Uu(x, i) : je(x) ? x.includes(i) || x.push(i) : g ? (c[s] = [i], u(s) && (f[s] = c[s])) : (s.value = [i], e.k && (c[e.k] = s.value));
        } else g ? (c[s] = a, u(s) && (f[s] = a)) : y && (s.value = a, e.k && (c[e.k] = a));
      };
      a ? (w.id = -1, Ft(w, n)) : w();
    }
  }
}
ia().requestIdleCallback;
ia().cancelIdleCallback;
const Rr = (e) => !!e.type.__asyncLoader, Pl = (e) => e.type.__isKeepAlive, Zb = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), o = n.ctx;
  if (!o.renderer) return () => {
    const _ = t.default && t.default();
    return _ && _.length === 1 ? _[0] : _;
  };
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
  let a = null;
  const l = n.suspense, { renderer: { p: s, m: d, um: c, o: { createElement: f } } } = o, v = f("div");
  o.activate = (_, p, b, C, q) => {
    const B = _.component;
    d(_, p, b, 0, l), s(B.vnode, _, p, b, B, l, C, _.slotScopeIds, q), Ft(() => {
      B.isDeactivated = false, B.a && Ai(B.a);
      const V = _.props && _.props.onVnodeMounted;
      V && pn(V, B.parent, _);
    }, l);
  }, o.deactivate = (_) => {
    const p = _.component;
    il(p.m), il(p.a), d(_, v, null, 1, l), Ft(() => {
      p.da && Ai(p.da);
      const b = _.props && _.props.onVnodeUnmounted;
      b && pn(b, p.parent, _), p.isDeactivated = true;
    }, l);
  };
  function u(_) {
    fs(_), c(_, n, l, true);
  }
  function g(_) {
    r.forEach((p, b) => {
      const C = hu(p.type);
      C && !_(C) && y(b);
    });
  }
  function y(_) {
    const p = r.get(_);
    p && (!a || !To(p, a)) ? u(p) : a && fs(a), r.delete(_), i.delete(_);
  }
  me(() => [e.include, e.exclude], ([_, p]) => {
    _ && g((b) => wi(_, b)), p && g((b) => !wi(p, b));
  }, { flush: "post", deep: true });
  let w = null;
  const x = () => {
    w != null && (al(n.subTree.type) ? Ft(() => {
      r.set(w, wa(n.subTree));
    }, n.subTree.suspense) : r.set(w, wa(n.subTree)));
  };
  return st(x), Vl(x), We(() => {
    r.forEach((_) => {
      const { subTree: p, suspense: b } = n, C = wa(p);
      if (_.type === C.type && _.key === C.key) {
        fs(C);
        const q = C.component.da;
        q && Ft(q, b);
        return;
      }
      u(_);
    });
  }), () => {
    if (w = null, !t.default) return a = null;
    const _ = t.default(), p = _[0];
    if (_.length > 1) return a = null, _;
    if (!Yi(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return a = null, p;
    let b = wa(p);
    if (b.type === rn) return a = null, b;
    const C = b.type, q = hu(Rr(b) ? b.type.__asyncResolved || {} : C), { include: B, exclude: V, max: R } = e;
    if (B && (!q || !wi(B, q)) || V && q && wi(V, q)) return b.shapeFlag &= -257, a = b, p;
    const D = b.key == null ? C : b.key, $ = r.get(D);
    return b.el && (b = ro(b), p.shapeFlag & 128 && (p.ssContent = b)), w = D, $ ? (b.el = $.el, b.component = $.component, b.transition && Bo(b, b.transition), b.shapeFlag |= 512, i.delete(D), i.add(D)) : (i.add(D), R && i.size > parseInt(R, 10) && y(i.values().next().value)), b.shapeFlag |= 256, a = b, al(p.type) ? p : b;
  };
} }, Lh = Zb;
function wi(e, t) {
  return je(e) ? e.some((n) => wi(n, t)) : Pt(e) ? e.split(",").includes(t) : lb(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function Oo(e, t) {
  Bh(e, "a", t);
}
function Hn(e, t) {
  Bh(e, "da", t);
}
function Bh(e, t, n = Kt) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (Dl(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; ) Pl(r.parent.vnode) && ep(o, t, n, r), r = r.parent;
  }
}
function ep(e, t, n, o) {
  const r = Dl(t, e, o, true);
  sa(() => {
    Uu(o[t], r);
  }, n);
}
function fs(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function wa(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Dl(e, t, n = Kt, o = false) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      Po();
      const l = ua(n), s = Dn(t, n, e, a);
      return l(), Do(), s;
    });
    return o ? r.unshift(i) : r.push(i), i;
  }
}
const ao = (e) => (t, n = Kt) => {
  (!Gi || e === "sp") && Dl(e, (...o) => t(...o), n);
}, Ol = ao("bm"), st = ao("m"), fr = ao("bu"), Vl = ao("u"), We = ao("bum"), sa = ao("um"), tp = ao("sp"), np = ao("rtg"), op = ao("rtc");
function rp(e, t = Kt) {
  Dl("ec", e, t);
}
const Rh = "components", ip = "directives";
function ic(e, t) {
  return Ph(Rh, e, true, t) || e;
}
const ap = Symbol.for("v-ndc");
function lp(e) {
  return Ph(ip, e);
}
function Ph(e, t, n = true, o = false) {
  const r = sn || Kt;
  if (r) {
    const i = r.type;
    if (e === Rh) {
      const l = hu(i, false);
      if (l && (l === t || l === xn(t) || l === Ll(xn(t)))) return i;
    }
    const a = ld(r[e] || i[e], t) || ld(r.appContext[e], t);
    return !a && o ? i : a;
  }
}
function ld(e, t) {
  return e && (e[t] || e[xn(t)] || e[Ll(xn(t))]);
}
const su = (e) => e ? Zh(e) ? Il(e) : su(e.parent) : null, Di = zt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => su(e.parent), $root: (e) => su(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Oh(e), $forceUpdate: (e) => e.f || (e.f = () => {
  oc(e.update);
}), $nextTick: (e) => e.n || (e.n = Qe.bind(e.proxy)), $watch: (e) => Ep.bind(e) }), vs = (e, t) => e !== gt && !e.__isScriptSetup && ft(e, t), sp = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: o, data: r, props: i, accessCache: a, type: l, appContext: s } = e;
  let d;
  if (t[0] !== "$") {
    const u = a[t];
    if (u !== void 0) switch (u) {
      case 1:
        return o[t];
      case 2:
        return r[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (vs(o, t)) return a[t] = 1, o[t];
      if (r !== gt && ft(r, t)) return a[t] = 2, r[t];
      if ((d = e.propsOptions[0]) && ft(d, t)) return a[t] = 3, i[t];
      if (n !== gt && ft(n, t)) return a[t] = 4, n[t];
      uu && (a[t] = 0);
    }
  }
  const c = Di[t];
  let f, v;
  if (c) return t === "$attrs" && Jt(e.attrs, "get", ""), c(e);
  if ((f = l.__cssModules) && (f = f[t])) return f;
  if (n !== gt && ft(n, t)) return a[t] = 4, n[t];
  if (v = s.config.globalProperties, ft(v, t)) return v[t];
}, set({ _: e }, t, n) {
  const { data: o, setupState: r, ctx: i } = e;
  return vs(r, t) ? (r[t] = n, true) : o !== gt && ft(o, t) ? (o[t] = n, true) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i } }, a) {
  let l;
  return !!n[a] || e !== gt && ft(e, a) || vs(t, a) || (l = i[0]) && ft(l, a) || ft(o, a) || ft(Di, a) || ft(r.config.globalProperties, a);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function sd(e) {
  return je(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let uu = true;
function up(e) {
  const t = Oh(e), n = e.proxy, o = e.ctx;
  uu = false, t.beforeCreate && ud(t.beforeCreate, e, "bc");
  const { data: r, computed: i, methods: a, watch: l, provide: s, inject: d, created: c, beforeMount: f, mounted: v, beforeUpdate: u, updated: g, activated: y, deactivated: w, beforeDestroy: x, beforeUnmount: _, destroyed: p, unmounted: b, render: C, renderTracked: q, renderTriggered: B, errorCaptured: V, serverPrefetch: R, expose: D, inheritAttrs: $, components: M, directives: A, filters: T } = t;
  if (d && cp(d, o, null), a) for (const j in a) {
    const K = a[j];
    Ge(K) && (o[j] = K.bind(n));
  }
  if (r) {
    const j = r.call(n, n);
    kt(j) && (e.data = Nn(j));
  }
  if (uu = true, i) for (const j in i) {
    const K = i[j], ie = Ge(K) ? K.bind(n, n) : Ge(K.get) ? K.get.bind(n, n) : Ln, ye = !Ge(K) && Ge(K.set) ? K.set.bind(n) : Ln, Y = m({ get: ie, set: ye });
    Object.defineProperty(o, j, { enumerable: true, configurable: true, get: () => Y.value, set: (L) => Y.value = L });
  }
  if (l) for (const j in l) Dh(l[j], o, n, j);
  if (s) {
    const j = Ge(s) ? s.call(n) : s;
    Reflect.ownKeys(j).forEach((K) => {
      _n(K, j[K]);
    });
  }
  c && ud(c, e, "c");
  function U(j, K) {
    je(K) ? K.forEach((ie) => j(ie.bind(n))) : K && j(K.bind(n));
  }
  if (U(Ol, f), U(st, v), U(fr, u), U(Vl, g), U(Oo, y), U(Hn, w), U(rp, V), U(op, q), U(np, B), U(We, _), U(sa, b), U(tp, R), je(D)) if (D.length) {
    const j = e.exposed || (e.exposed = {});
    D.forEach((K) => {
      Object.defineProperty(j, K, { get: () => n[K], set: (ie) => n[K] = ie });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Ln && (e.render = C), $ != null && (e.inheritAttrs = $), M && (e.components = M), A && (e.directives = A), R && Ah(e);
}
function cp(e, t, n = Ln) {
  je(e) && (e = cu(e));
  for (const o in e) {
    const r = e[o];
    let i;
    kt(r) ? "default" in r ? i = Lt(r.from || o, r.default, true) : i = Lt(r.from || o) : i = Lt(r), wt(i) ? Object.defineProperty(t, o, { enumerable: true, configurable: true, get: () => i.value, set: (a) => i.value = a }) : t[o] = i;
  }
}
function ud(e, t, n) {
  Dn(je(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Dh(e, t, n, o) {
  let r = o.includes(".") ? Yh(n, o) : () => n[o];
  if (Pt(e)) {
    const i = t[e];
    Ge(i) && me(r, i);
  } else if (Ge(e)) me(r, e.bind(n));
  else if (kt(e)) if (je(e)) e.forEach((i) => Dh(i, t, n, o));
  else {
    const i = Ge(e.handler) ? e.handler.bind(n) : t[e.handler];
    Ge(i) && me(r, i, e);
  }
}
function Oh(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: a } } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !r.length && !n && !o ? s = t : (s = {}, r.length && r.forEach((d) => rl(s, d, a, true)), rl(s, t, a)), kt(t) && i.set(t, s), s;
}
function rl(e, t, n, o = false) {
  const { mixins: r, extends: i } = t;
  i && rl(e, i, n, true), r && r.forEach((a) => rl(e, a, n, true));
  for (const a in t) if (!(o && a === "expose")) {
    const l = dp[a] || n && n[a];
    e[a] = l ? l(e[a], t[a]) : t[a];
  }
  return e;
}
const dp = { data: cd, props: dd, emits: dd, methods: xi, computed: xi, beforeCreate: en, created: en, beforeMount: en, mounted: en, beforeUpdate: en, updated: en, beforeDestroy: en, beforeUnmount: en, destroyed: en, unmounted: en, activated: en, deactivated: en, errorCaptured: en, serverPrefetch: en, components: xi, directives: xi, watch: vp, provide: cd, inject: fp };
function cd(e, t) {
  return t ? e ? function() {
    return zt(Ge(e) ? e.call(this, this) : e, Ge(t) ? t.call(this, this) : t);
  } : t : e;
}
function fp(e, t) {
  return xi(cu(e), cu(t));
}
function cu(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function en(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xi(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dd(e, t) {
  return e ? je(e) && je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(/* @__PURE__ */ Object.create(null), sd(e), sd(t ?? {})) : t;
}
function vp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const o in t) n[o] = en(e[o], t[o]);
  return n;
}
function Vh() {
  return { app: null, config: { isNativeTag: ib, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let hp = 0;
function mp(e, t) {
  return function(o, r = null) {
    Ge(o) || (o = zt({}, o)), r != null && !kt(r) && (r = null);
    const i = Vh(), a = /* @__PURE__ */ new WeakSet(), l = [];
    let s = false;
    const d = i.app = { _uid: hp++, _component: o, _props: r, _container: null, _context: i, _instance: null, version: Yp, get config() {
      return i.config;
    }, set config(c) {
    }, use(c, ...f) {
      return a.has(c) || (c && Ge(c.install) ? (a.add(c), c.install(d, ...f)) : Ge(c) && (a.add(c), c(d, ...f))), d;
    }, mixin(c) {
      return i.mixins.includes(c) || i.mixins.push(c), d;
    }, component(c, f) {
      return f ? (i.components[c] = f, d) : i.components[c];
    }, directive(c, f) {
      return f ? (i.directives[c] = f, d) : i.directives[c];
    }, mount(c, f, v) {
      if (!s) {
        const u = d._ceVNode || Ue(o, r);
        return u.appContext = i, v === true ? v = "svg" : v === false && (v = void 0), e(u, c, v), s = true, d._container = c, c.__vue_app__ = d, Il(u.component);
      }
    }, onUnmount(c) {
      l.push(c);
    }, unmount() {
      s && (Dn(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(c, f) {
      return i.provides[c] = f, d;
    }, runWithContext(c) {
      const f = Pr;
      Pr = d;
      try {
        return c();
      } finally {
        Pr = f;
      }
    } };
    return d;
  };
}
let Pr = null;
function _n(e, t) {
  if (Kt) {
    let n = Kt.provides;
    const o = Kt.parent && Kt.parent.provides;
    o === n && (n = Kt.provides = Object.create(o)), n[e] = t;
  }
}
function Lt(e, t, n = false) {
  const o = Kt || sn;
  if (o || Pr) {
    const r = Pr ? Pr._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && Ge(t) ? t.call(o && o.proxy) : t;
  }
}
const Fh = {}, $h = () => Object.create(Fh), Ih = (e) => Object.getPrototypeOf(e) === Fh;
function gp(e, t, n, o = false) {
  const r = {}, i = $h();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nh(e, t, r, i);
  for (const a in e.propsOptions[0]) a in r || (r[a] = void 0);
  n ? e.props = o ? r : ec(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function bp(e, t, n, o) {
  const { props: r, attrs: i, vnode: { patchFlag: a } } = e, l = Je(r), [s] = e.propsOptions;
  let d = false;
  if ((o || a > 0) && !(a & 16)) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let v = c[f];
        if (Fl(e.emitsOptions, v)) continue;
        const u = t[v];
        if (s) if (ft(i, v)) u !== i[v] && (i[v] = u, d = true);
        else {
          const g = xn(v);
          r[g] = du(s, l, g, u, e, false);
        }
        else u !== i[v] && (i[v] = u, d = true);
      }
    }
  } else {
    Nh(e, t, r, i) && (d = true);
    let c;
    for (const f in l) (!t || !ft(t, f) && ((c = dr(f)) === f || !ft(t, c))) && (s ? n && (n[f] !== void 0 || n[c] !== void 0) && (r[f] = du(s, l, f, void 0, e, true)) : delete r[f]);
    if (i !== l) for (const f in i) (!t || !ft(t, f)) && (delete i[f], d = true);
  }
  d && to(e.attrs, "set", "");
}
function Nh(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let a = false, l;
  if (t) for (let s in t) {
    if (Ei(s)) continue;
    const d = t[s];
    let c;
    r && ft(r, c = xn(s)) ? !i || !i.includes(c) ? n[c] = d : (l || (l = {}))[c] = d : Fl(e.emitsOptions, s) || (!(s in o) || d !== o[s]) && (o[s] = d, a = true);
  }
  if (i) {
    const s = Je(n), d = l || gt;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = du(r, s, f, d[f], e, !ft(d, f));
    }
  }
  return a;
}
function du(e, t, n, o, r, i) {
  const a = e[n];
  if (a != null) {
    const l = ft(a, "default");
    if (l && o === void 0) {
      const s = a.default;
      if (a.type !== Function && !a.skipFactory && Ge(s)) {
        const { propsDefaults: d } = r;
        if (n in d) o = d[n];
        else {
          const c = ua(r);
          o = d[n] = s.call(null, t), c();
        }
      } else o = s;
      r.ce && r.ce._setProp(n, o);
    }
    a[0] && (i && !l ? o = false : a[1] && (o === "" || o === dr(n)) && (o = true));
  }
  return o;
}
const pp = /* @__PURE__ */ new WeakMap();
function zh(e, t, n = false) {
  const o = n ? pp : t.propsCache, r = o.get(e);
  if (r) return r;
  const i = e.props, a = {}, l = [];
  let s = false;
  if (!Ge(e)) {
    const c = (f) => {
      s = true;
      const [v, u] = zh(f, t, true);
      zt(a, v), u && l.push(...u);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s) return kt(e) && o.set(e, Ar), Ar;
  if (je(i)) for (let c = 0; c < i.length; c++) {
    const f = xn(i[c]);
    fd(f) && (a[f] = gt);
  }
  else if (i) for (const c in i) {
    const f = xn(c);
    if (fd(f)) {
      const v = i[c], u = a[f] = je(v) || Ge(v) ? { type: v } : zt({}, v), g = u.type;
      let y = false, w = true;
      if (je(g)) for (let x = 0; x < g.length; ++x) {
        const _ = g[x], p = Ge(_) && _.name;
        if (p === "Boolean") {
          y = true;
          break;
        } else p === "String" && (w = false);
      }
      else y = Ge(g) && g.name === "Boolean";
      u[0] = y, u[1] = w, (y || ft(u, "default")) && l.push(f);
    }
  }
  const d = [a, l];
  return kt(e) && o.set(e, d), d;
}
function fd(e) {
  return e[0] !== "$" && !Ei(e);
}
const Hh = (e) => e[0] === "_" || e === "$stable", ac = (e) => je(e) ? e.map(In) : [In(e)], yp = (e, t, n) => {
  if (t._n) return t;
  const o = qt((...r) => ac(t(...r)), n);
  return o._c = false, o;
}, jh = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Hh(r)) continue;
    const i = e[r];
    if (Ge(i)) t[r] = yp(r, i, o);
    else if (i != null) {
      const a = ac(i);
      t[r] = () => a;
    }
  }
}, Uh = (e, t) => {
  const n = ac(t);
  e.slots.default = () => n;
}, Qh = (e, t, n) => {
  for (const o in t) (n || o !== "_") && (e[o] = t[o]);
}, _p = (e, t, n) => {
  const o = e.slots = $h();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Qh(o, t, n), n && Wv(o, "_", r, true)) : jh(t, o);
  } else t && Uh(e, t);
}, wp = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = true, a = gt;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = false : Qh(r, t, n) : (i = !t.$stable, jh(t, r)), a = t;
  } else t && (Uh(e, t), a = { default: 1 });
  if (i) for (const l in r) !Hh(l) && a[l] == null && delete r[l];
};
function xp() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (ia().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ft = Op;
function Cp(e) {
  return Sp(e);
}
function Sp(e, t) {
  xp();
  const n = ia();
  n.__VUE__ = true;
  const { insert: o, remove: r, patchProp: i, createElement: a, createText: l, createComment: s, setText: d, setElementText: c, parentNode: f, nextSibling: v, setScopeId: u = Ln, insertStaticContent: g } = e, y = (S, E, I, Z = null, oe = null, W = null, fe = void 0, ve = null, ue = !!E.dynamicChildren) => {
    if (S === E) return;
    S && !To(S, E) && (Z = P(S), L(S, oe, W, true), S = null), E.patchFlag === -2 && (ue = false, E.dynamicChildren = null);
    const { type: ce, ref: re, shapeFlag: Q } = E;
    switch (ce) {
      case $l:
        w(S, E, I, Z);
        break;
      case rn:
        x(S, E, I, Z);
        break;
      case Ia:
        S == null && _(E, I, Z, fe);
        break;
      case on:
        M(S, E, I, Z, oe, W, fe, ve, ue);
        break;
      default:
        Q & 1 ? C(S, E, I, Z, oe, W, fe, ve, ue) : Q & 6 ? A(S, E, I, Z, oe, W, fe, ve, ue) : (Q & 64 || Q & 128) && ce.process(S, E, I, Z, oe, W, fe, ve, ue, F);
    }
    re != null && oe && ol(re, S && S.ref, W, E || S, !E);
  }, w = (S, E, I, Z) => {
    if (S == null) o(E.el = l(E.children), I, Z);
    else {
      const oe = E.el = S.el;
      E.children !== S.children && d(oe, E.children);
    }
  }, x = (S, E, I, Z) => {
    S == null ? o(E.el = s(E.children || ""), I, Z) : E.el = S.el;
  }, _ = (S, E, I, Z) => {
    [S.el, S.anchor] = g(S.children, E, I, Z, S.el, S.anchor);
  }, p = ({ el: S, anchor: E }, I, Z) => {
    let oe;
    for (; S && S !== E; ) oe = v(S), o(S, I, Z), S = oe;
    o(E, I, Z);
  }, b = ({ el: S, anchor: E }) => {
    let I;
    for (; S && S !== E; ) I = v(S), r(S), S = I;
    r(E);
  }, C = (S, E, I, Z, oe, W, fe, ve, ue) => {
    E.type === "svg" ? fe = "svg" : E.type === "math" && (fe = "mathml"), S == null ? q(E, I, Z, oe, W, fe, ve, ue) : R(S, E, oe, W, fe, ve, ue);
  }, q = (S, E, I, Z, oe, W, fe, ve) => {
    let ue, ce;
    const { props: re, shapeFlag: Q, transition: le, dirs: we } = S;
    if (ue = S.el = a(S.type, W, re && re.is, re), Q & 8 ? c(ue, S.children) : Q & 16 && V(S.children, ue, null, Z, oe, hs(S, W), fe, ve), we && $o(S, null, Z, "created"), B(ue, S, S.scopeId, fe, Z), re) {
      for (const Te in re) Te !== "value" && !Ei(Te) && i(ue, Te, null, re[Te], W, Z);
      "value" in re && i(ue, "value", null, re.value, W), (ce = re.onVnodeBeforeMount) && pn(ce, Z, S);
    }
    we && $o(S, null, Z, "beforeMount");
    const Ce = Tp(oe, le);
    Ce && le.beforeEnter(ue), o(ue, E, I), ((ce = re && re.onVnodeMounted) || Ce || we) && Ft(() => {
      ce && pn(ce, Z, S), Ce && le.enter(ue), we && $o(S, null, Z, "mounted");
    }, oe);
  }, B = (S, E, I, Z, oe) => {
    if (I && u(S, I), Z) for (let W = 0; W < Z.length; W++) u(S, Z[W]);
    if (oe) {
      let W = oe.subTree;
      if (E === W || al(W.type) && (W.ssContent === E || W.ssFallback === E)) {
        const fe = oe.vnode;
        B(S, fe, fe.scopeId, fe.slotScopeIds, oe.parent);
      }
    }
  }, V = (S, E, I, Z, oe, W, fe, ve, ue = 0) => {
    for (let ce = ue; ce < S.length; ce++) {
      const re = S[ce] = ve ? Co(S[ce]) : In(S[ce]);
      y(null, re, E, I, Z, oe, W, fe, ve);
    }
  }, R = (S, E, I, Z, oe, W, fe) => {
    const ve = E.el = S.el;
    let { patchFlag: ue, dynamicChildren: ce, dirs: re } = E;
    ue |= S.patchFlag & 16;
    const Q = S.props || gt, le = E.props || gt;
    let we;
    if (I && Io(I, false), (we = le.onVnodeBeforeUpdate) && pn(we, I, E, S), re && $o(E, S, I, "beforeUpdate"), I && Io(I, true), (Q.innerHTML && le.innerHTML == null || Q.textContent && le.textContent == null) && c(ve, ""), ce ? D(S.dynamicChildren, ce, ve, I, Z, hs(E, oe), W) : fe || K(S, E, ve, null, I, Z, hs(E, oe), W, false), ue > 0) {
      if (ue & 16) $(ve, Q, le, I, oe);
      else if (ue & 2 && Q.class !== le.class && i(ve, "class", null, le.class, oe), ue & 4 && i(ve, "style", Q.style, le.style, oe), ue & 8) {
        const Ce = E.dynamicProps;
        for (let Te = 0; Te < Ce.length; Te++) {
          const Me = Ce[Te], Ie = Q[Me], Ne = le[Me];
          (Ne !== Ie || Me === "value") && i(ve, Me, Ie, Ne, oe, I);
        }
      }
      ue & 1 && S.children !== E.children && c(ve, E.children);
    } else !fe && ce == null && $(ve, Q, le, I, oe);
    ((we = le.onVnodeUpdated) || re) && Ft(() => {
      we && pn(we, I, E, S), re && $o(E, S, I, "updated");
    }, Z);
  }, D = (S, E, I, Z, oe, W, fe) => {
    for (let ve = 0; ve < E.length; ve++) {
      const ue = S[ve], ce = E[ve], re = ue.el && (ue.type === on || !To(ue, ce) || ue.shapeFlag & 70) ? f(ue.el) : I;
      y(ue, ce, re, null, Z, oe, W, fe, true);
    }
  }, $ = (S, E, I, Z, oe) => {
    if (E !== I) {
      if (E !== gt) for (const W in E) !Ei(W) && !(W in I) && i(S, W, E[W], null, oe, Z);
      for (const W in I) {
        if (Ei(W)) continue;
        const fe = I[W], ve = E[W];
        fe !== ve && W !== "value" && i(S, W, ve, fe, oe, Z);
      }
      "value" in I && i(S, "value", E.value, I.value, oe);
    }
  }, M = (S, E, I, Z, oe, W, fe, ve, ue) => {
    const ce = E.el = S ? S.el : l(""), re = E.anchor = S ? S.anchor : l("");
    let { patchFlag: Q, dynamicChildren: le, slotScopeIds: we } = E;
    we && (ve = ve ? ve.concat(we) : we), S == null ? (o(ce, I, Z), o(re, I, Z), V(E.children || [], I, re, oe, W, fe, ve, ue)) : Q > 0 && Q & 64 && le && S.dynamicChildren ? (D(S.dynamicChildren, le, I, oe, W, fe, ve), (E.key != null || oe && E === oe.subTree) && lc(S, E, true)) : K(S, E, I, re, oe, W, fe, ve, ue);
  }, A = (S, E, I, Z, oe, W, fe, ve, ue) => {
    E.slotScopeIds = ve, S == null ? E.shapeFlag & 512 ? oe.ctx.activate(E, I, Z, fe, ue) : T(E, I, Z, oe, W, fe, ue) : z(S, E, ue);
  }, T = (S, E, I, Z, oe, W, fe) => {
    const ve = S.component = Hp(S, Z, oe);
    if (Pl(S) && (ve.ctx.renderer = F), jp(ve, false, fe), ve.asyncDep) {
      if (oe && oe.registerDep(ve, U, fe), !S.el) {
        const ue = ve.subTree = Ue(rn);
        x(null, ue, E, I);
      }
    } else U(ve, S, E, I, oe, W, fe);
  }, z = (S, E, I) => {
    const Z = E.component = S.component;
    if (Pp(S, E, I)) if (Z.asyncDep && !Z.asyncResolved) {
      j(Z, E, I);
      return;
    } else Z.next = E, Z.update();
    else E.el = S.el, Z.vnode = E;
  }, U = (S, E, I, Z, oe, W, fe) => {
    const ve = () => {
      if (S.isMounted) {
        let { next: Q, bu: le, u: we, parent: Ce, vnode: Te } = S;
        {
          const pe = Kh(S);
          if (pe) {
            Q && (Q.el = Te.el, j(S, Q, fe)), pe.asyncDep.then(() => {
              S.isUnmounted || ve();
            });
            return;
          }
        }
        let Me = Q, Ie;
        Io(S, false), Q ? (Q.el = Te.el, j(S, Q, fe)) : Q = Te, le && Ai(le), (Ie = Q.props && Q.props.onVnodeBeforeUpdate) && pn(Ie, Ce, Q, Te), Io(S, true);
        const Ne = vd(S), se = S.subTree;
        S.subTree = Ne, y(se, Ne, f(se.el), P(se), S, oe, W), Q.el = Ne.el, Me === null && Dp(S, Ne.el), we && Ft(we, oe), (Ie = Q.props && Q.props.onVnodeUpdated) && Ft(() => pn(Ie, Ce, Q, Te), oe);
      } else {
        let Q;
        const { el: le, props: we } = E, { bm: Ce, m: Te, parent: Me, root: Ie, type: Ne } = S, se = Rr(E);
        Io(S, false), Ce && Ai(Ce), !se && (Q = we && we.onVnodeBeforeMount) && pn(Q, Me, E), Io(S, true);
        {
          Ie.ce && Ie.ce._injectChildStyle(Ne);
          const pe = S.subTree = vd(S);
          y(null, pe, I, Z, S, oe, W), E.el = pe.el;
        }
        if (Te && Ft(Te, oe), !se && (Q = we && we.onVnodeMounted)) {
          const pe = E;
          Ft(() => pn(Q, Me, pe), oe);
        }
        (E.shapeFlag & 256 || Me && Rr(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Ft(S.a, oe), S.isMounted = true, E = I = Z = null;
      }
    };
    S.scope.on();
    const ue = S.effect = new Jv(ve);
    S.scope.off();
    const ce = S.update = ue.run.bind(ue), re = S.job = ue.runIfDirty.bind(ue);
    re.i = S, re.id = S.uid, ue.scheduler = () => oc(re), Io(S, true), ce();
  }, j = (S, E, I) => {
    E.component = S;
    const Z = S.vnode.props;
    S.vnode = E, S.next = null, bp(S, E.props, Z, I), wp(S, E.children, I), Po(), nd(S), Do();
  }, K = (S, E, I, Z, oe, W, fe, ve, ue = false) => {
    const ce = S && S.children, re = S ? S.shapeFlag : 0, Q = E.children, { patchFlag: le, shapeFlag: we } = E;
    if (le > 0) {
      if (le & 128) {
        ye(ce, Q, I, Z, oe, W, fe, ve, ue);
        return;
      } else if (le & 256) {
        ie(ce, Q, I, Z, oe, W, fe, ve, ue);
        return;
      }
    }
    we & 8 ? (re & 16 && O(ce, oe, W), Q !== ce && c(I, Q)) : re & 16 ? we & 16 ? ye(ce, Q, I, Z, oe, W, fe, ve, ue) : O(ce, oe, W, true) : (re & 8 && c(I, ""), we & 16 && V(Q, I, Z, oe, W, fe, ve, ue));
  }, ie = (S, E, I, Z, oe, W, fe, ve, ue) => {
    S = S || Ar, E = E || Ar;
    const ce = S.length, re = E.length, Q = Math.min(ce, re);
    let le;
    for (le = 0; le < Q; le++) {
      const we = E[le] = ue ? Co(E[le]) : In(E[le]);
      y(S[le], we, I, null, oe, W, fe, ve, ue);
    }
    ce > re ? O(S, oe, W, true, false, Q) : V(E, I, Z, oe, W, fe, ve, ue, Q);
  }, ye = (S, E, I, Z, oe, W, fe, ve, ue) => {
    let ce = 0;
    const re = E.length;
    let Q = S.length - 1, le = re - 1;
    for (; ce <= Q && ce <= le; ) {
      const we = S[ce], Ce = E[ce] = ue ? Co(E[ce]) : In(E[ce]);
      if (To(we, Ce)) y(we, Ce, I, null, oe, W, fe, ve, ue);
      else break;
      ce++;
    }
    for (; ce <= Q && ce <= le; ) {
      const we = S[Q], Ce = E[le] = ue ? Co(E[le]) : In(E[le]);
      if (To(we, Ce)) y(we, Ce, I, null, oe, W, fe, ve, ue);
      else break;
      Q--, le--;
    }
    if (ce > Q) {
      if (ce <= le) {
        const we = le + 1, Ce = we < re ? E[we].el : Z;
        for (; ce <= le; ) y(null, E[ce] = ue ? Co(E[ce]) : In(E[ce]), I, Ce, oe, W, fe, ve, ue), ce++;
      }
    } else if (ce > le) for (; ce <= Q; ) L(S[ce], oe, W, true), ce++;
    else {
      const we = ce, Ce = ce, Te = /* @__PURE__ */ new Map();
      for (ce = Ce; ce <= le; ce++) {
        const ke = E[ce] = ue ? Co(E[ce]) : In(E[ce]);
        ke.key != null && Te.set(ke.key, ce);
      }
      let Me, Ie = 0;
      const Ne = le - Ce + 1;
      let se = false, pe = 0;
      const ae = new Array(Ne);
      for (ce = 0; ce < Ne; ce++) ae[ce] = 0;
      for (ce = we; ce <= Q; ce++) {
        const ke = S[ce];
        if (Ie >= Ne) {
          L(ke, oe, W, true);
          continue;
        }
        let Fe;
        if (ke.key != null) Fe = Te.get(ke.key);
        else for (Me = Ce; Me <= le; Me++) if (ae[Me - Ce] === 0 && To(ke, E[Me])) {
          Fe = Me;
          break;
        }
        Fe === void 0 ? L(ke, oe, W, true) : (ae[Fe - Ce] = ce + 1, Fe >= pe ? pe = Fe : se = true, y(ke, E[Fe], I, null, oe, W, fe, ve, ue), Ie++);
      }
      const _e2 = se ? kp(ae) : Ar;
      for (Me = _e2.length - 1, ce = Ne - 1; ce >= 0; ce--) {
        const ke = Ce + ce, Fe = E[ke], Ae = ke + 1 < re ? E[ke + 1].el : Z;
        ae[ce] === 0 ? y(null, Fe, I, Ae, oe, W, fe, ve, ue) : se && (Me < 0 || ce !== _e2[Me] ? Y(Fe, I, Ae, 2) : Me--);
      }
    }
  }, Y = (S, E, I, Z, oe = null) => {
    const { el: W, type: fe, transition: ve, children: ue, shapeFlag: ce } = S;
    if (ce & 6) {
      Y(S.component.subTree, E, I, Z);
      return;
    }
    if (ce & 128) {
      S.suspense.move(E, I, Z);
      return;
    }
    if (ce & 64) {
      fe.move(S, E, I, F);
      return;
    }
    if (fe === on) {
      o(W, E, I);
      for (let Q = 0; Q < ue.length; Q++) Y(ue[Q], E, I, Z);
      o(S.anchor, E, I);
      return;
    }
    if (fe === Ia) {
      p(S, E, I);
      return;
    }
    if (Z !== 2 && ce & 1 && ve) if (Z === 0) ve.beforeEnter(W), o(W, E, I), Ft(() => ve.enter(W), oe);
    else {
      const { leave: Q, delayLeave: le, afterLeave: we } = ve, Ce = () => o(W, E, I), Te = () => {
        Q(W, () => {
          Ce(), we && we();
        });
      };
      le ? le(W, Ce, Te) : Te();
    }
    else o(W, E, I);
  }, L = (S, E, I, Z = false, oe = false) => {
    const { type: W, props: fe, ref: ve, children: ue, dynamicChildren: ce, shapeFlag: re, patchFlag: Q, dirs: le, cacheIndex: we } = S;
    if (Q === -2 && (oe = false), ve != null && ol(ve, null, I, S, true), we != null && (E.renderCache[we] = void 0), re & 256) {
      E.ctx.deactivate(S);
      return;
    }
    const Ce = re & 1 && le, Te = !Rr(S);
    let Me;
    if (Te && (Me = fe && fe.onVnodeBeforeUnmount) && pn(Me, E, S), re & 6) be(S.component, I, Z);
    else {
      if (re & 128) {
        S.suspense.unmount(I, Z);
        return;
      }
      Ce && $o(S, null, E, "beforeUnmount"), re & 64 ? S.type.remove(S, E, I, F, Z) : ce && !ce.hasOnce && (W !== on || Q > 0 && Q & 64) ? O(ce, E, I, false, true) : (W === on && Q & 384 || !oe && re & 16) && O(ue, E, I), Z && ne(S);
    }
    (Te && (Me = fe && fe.onVnodeUnmounted) || Ce) && Ft(() => {
      Me && pn(Me, E, S), Ce && $o(S, null, E, "unmounted");
    }, I);
  }, ne = (S) => {
    const { type: E, el: I, anchor: Z, transition: oe } = S;
    if (E === on) {
      G(I, Z);
      return;
    }
    if (E === Ia) {
      b(S);
      return;
    }
    const W = () => {
      r(I), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (S.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: fe, delayLeave: ve } = oe, ue = () => fe(I, W);
      ve ? ve(S.el, W, ue) : ue();
    } else W();
  }, G = (S, E) => {
    let I;
    for (; S !== E; ) I = v(S), r(S), S = I;
    r(E);
  }, be = (S, E, I) => {
    const { bum: Z, scope: oe, job: W, subTree: fe, um: ve, m: ue, a: ce } = S;
    il(ue), il(ce), Z && Ai(Z), oe.stop(), W && (W.flags |= 8, L(fe, S, E, I)), ve && Ft(ve, E), Ft(() => {
      S.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, O = (S, E, I, Z = false, oe = false, W = 0) => {
    for (let fe = W; fe < S.length; fe++) L(S[fe], E, I, Z, oe);
  }, P = (S) => {
    if (S.shapeFlag & 6) return P(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const E = v(S.anchor || S.el), I = E && E[wh];
    return I ? v(I) : E;
  };
  let te = false;
  const k = (S, E, I) => {
    S == null ? E._vnode && L(E._vnode, null, null, true) : y(E._vnode || null, S, E, null, null, null, I), E._vnode = S, te || (te = true, nd(), ph(), te = false);
  }, F = { p: y, um: L, m: Y, r: ne, mt: T, mc: V, pc: K, pbc: D, n: P, o: e };
  return { render: k, hydrate: void 0, createApp: mp(k) };
}
function hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Io({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lc(e, t, n = false) {
  const o = e.children, r = t.children;
  if (je(o) && je(r)) for (let i = 0; i < o.length; i++) {
    const a = o[i];
    let l = r[i];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Co(r[i]), l.el = a.el), !n && l.patchFlag !== -2 && lc(a, l)), l.type === $l && (l.el = a.el);
  }
}
function kp(e) {
  const t = e.slice(), n = [0];
  let o, r, i, a, l;
  const s = e.length;
  for (o = 0; o < s; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; ) l = i + a >> 1, e[n[l]] < d ? i = l + 1 : a = l;
      d < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) n[i] = a, a = t[a];
  return n;
}
function Kh(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Kh(t);
}
function il(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Mp = Symbol.for("v-scx"), qp = () => Lt(Mp);
function me(e, t, n) {
  return Wh(e, t, n);
}
function Wh(e, t, n = gt) {
  const { immediate: o, deep: r, flush: i, once: a } = n, l = zt({}, n), s = t && o || !t && i !== "post";
  let d;
  if (Gi) {
    if (i === "sync") {
      const u = qp();
      d = u.__watcherHandles || (u.__watcherHandles = []);
    } else if (!s) {
      const u = () => {
      };
      return u.stop = Ln, u.resume = Ln, u.pause = Ln, u;
    }
  }
  const c = Kt;
  l.call = (u, g, y) => Dn(u, c, g, y);
  let f = false;
  i === "post" ? l.scheduler = (u) => {
    Ft(u, c && c.suspense);
  } : i !== "sync" && (f = true, l.scheduler = (u, g) => {
    g ? u() : oc(u);
  }), l.augmentJob = (u) => {
    t && (u.flags |= 4), f && (u.flags |= 2, c && (u.id = c.uid, u.i = c));
  };
  const v = Qb(e, t, l);
  return Gi && (d ? d.push(v) : s && v()), v;
}
function Ep(e, t, n) {
  const o = this.proxy, r = Pt(e) ? e.includes(".") ? Yh(o, e) : () => o[e] : e.bind(o, o);
  let i;
  Ge(t) ? i = t : (i = t.handler, n = t);
  const a = ua(this), l = Wh(r, i.bind(o), n);
  return a(), l;
}
function Yh(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
const Ap = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${dr(t)}Modifiers`];
function Lp(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || gt;
  let r = n;
  const i = t.startsWith("update:"), a = i && Ap(o, t.slice(7));
  a && (a.trim && (r = n.map((c) => Pt(c) ? c.trim() : c)), a.number && (r = n.map(fb)));
  let l, s = o[l = as(t)] || o[l = as(xn(t))];
  !s && i && (s = o[l = as(dr(t))]), s && Dn(s, e, 6, r);
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = true, Dn(d, e, 6, r);
  }
}
function Gh(e, t, n = false) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let a = {}, l = false;
  if (!Ge(e)) {
    const s = (d) => {
      const c = Gh(d, t, true);
      c && (l = true, zt(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? (kt(e) && o.set(e, null), null) : (je(i) ? i.forEach((s) => a[s] = null) : zt(a, i), kt(e) && o.set(e, a), a);
}
function Fl(e, t) {
  return !e || !El(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, dr(t)) || ft(e, t));
}
function vd(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, propsOptions: [i], slots: a, attrs: l, emit: s, render: d, renderCache: c, props: f, data: v, setupState: u, ctx: g, inheritAttrs: y } = e, w = nl(e);
  let x, _;
  try {
    if (n.shapeFlag & 4) {
      const b = r || o, C = b;
      x = In(d.call(C, b, c, f, u, v, g)), _ = l;
    } else {
      const b = t;
      x = In(b.length > 1 ? b(f, { attrs: l, slots: a, emit: s }) : b(f, null)), _ = t.props ? l : Bp(l);
    }
  } catch (b) {
    Oi.length = 0, Rl(b, e, 1), x = Ue(rn);
  }
  let p = x;
  if (_ && y !== false) {
    const b = Object.keys(_), { shapeFlag: C } = p;
    b.length && C & 7 && (i && b.some(ju) && (_ = Rp(_, i)), p = ro(p, _, false, true));
  }
  return n.dirs && (p = ro(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && Bo(p, n.transition), x = p, nl(w), x;
}
const Bp = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || El(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rp = (e, t) => {
  const n = {};
  for (const o in e) (!ju(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function Pp(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: a, children: l, patchFlag: s } = t, d = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return o ? hd(o, a, d) : !!a;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const v = c[f];
        if (a[v] !== o[v] && !Fl(d, v)) return true;
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? true : o === a ? false : o ? a ? hd(o, a, d) : true : !!a;
  return false;
}
function hd(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return true;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Fl(n, i)) return true;
  }
  return false;
}
function Dp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const al = (e) => e.__isSuspense;
function Op(e, t) {
  t && t.pendingBranch ? je(e) ? t.effects.push(...e) : t.effects.push(e) : bh(e);
}
const on = Symbol.for("v-fgt"), $l = Symbol.for("v-txt"), rn = Symbol.for("v-cmt"), Ia = Symbol.for("v-stc"), Oi = [];
let vn = null;
function ln(e = false) {
  Oi.push(vn = e ? null : []);
}
function Vp() {
  Oi.pop(), vn = Oi[Oi.length - 1] || null;
}
let Wi = 1;
function md(e, t = false) {
  Wi += e, e < 0 && vn && t && (vn.hasOnce = true);
}
function Xh(e) {
  return e.dynamicChildren = Wi > 0 ? vn || Ar : null, Vp(), Wi > 0 && vn && vn.push(e), e;
}
function lr(e, t, n, o, r, i) {
  return Xh($e(e, t, n, o, r, i, true));
}
function Xo(e, t, n, o, r) {
  return Xh(Ue(e, t, n, o, r, true));
}
function Yi(e) {
  return e ? e.__v_isVNode === true : false;
}
function To(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jh = ({ key: e }) => e ?? null, Na = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pt(e) || wt(e) || Ge(e) ? { i: sn, r: e, k: t, f: !!n } : e : null);
function $e(e, t = null, n = null, o = 0, r = null, i = e === on ? 0 : 1, a = false, l = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Jh(t), ref: t && Na(t), scopeId: _h, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: o, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: sn };
  return l ? (sc(s, n), i & 128 && e.normalize(s)) : n && (s.shapeFlag |= Pt(n) ? 8 : 16), Wi > 0 && !a && vn && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && vn.push(s), s;
}
const Ue = Fp;
function Fp(e, t = null, n = null, o = 0, r = null, i = false) {
  if ((!e || e === ap) && (e = rn), Yi(e)) {
    const l = ro(e, t, true);
    return n && sc(l, n), Wi > 0 && !i && vn && (l.shapeFlag & 6 ? vn[vn.indexOf(e)] = l : vn.push(l)), l.patchFlag = -2, l;
  }
  if (Wp(e) && (e = e.__vccOpts), t) {
    t = $p(t);
    let { class: l, style: s } = t;
    l && !Pt(l) && (t.class = Ku(l)), kt(s) && (nc(s) && !je(s) && (s = zt({}, s)), t.style = aa(s));
  }
  const a = Pt(e) ? 1 : al(e) ? 128 : xh(e) ? 64 : kt(e) ? 4 : Ge(e) ? 2 : 0;
  return $e(e, t, n, o, r, a, i, true);
}
function $p(e) {
  return e ? nc(e) || Ih(e) ? zt({}, e) : e : null;
}
function ro(e, t, n = false, o = false) {
  const { props: r, ref: i, patchFlag: a, children: l, transition: s } = e, d = t ? Ip(r || {}, t) : r, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && Jh(d), ref: t && t.ref ? n && i ? je(i) ? i.concat(Na(t)) : [i, Na(t)] : Na(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== on ? a === -1 ? 16 : a | 16 : a, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ro(e.ssContent), ssFallback: e.ssFallback && ro(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && o && Bo(c, s.clone(c)), c;
}
function ko(e = " ", t = 0) {
  return Ue($l, null, e, t);
}
function fu(e = "", t = false) {
  return t ? (ln(), Xo(rn, null, e)) : Ue(rn, null, e);
}
function In(e) {
  return e == null || typeof e == "boolean" ? Ue(rn) : je(e) ? Ue(on, null, e.slice()) : Yi(e) ? Co(e) : Ue($l, null, String(e));
}
function Co(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ro(e);
}
function sc(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (je(t)) n = 16;
  else if (typeof t == "object") if (o & 65) {
    const r = t.default;
    r && (r._c && (r._d = false), sc(e, r()), r._c && (r._d = true));
    return;
  } else {
    n = 32;
    const r = t._;
    !r && !Ih(t) ? t._ctx = sn : r === 3 && sn && (sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Ge(t) ? (t = { default: t, _ctx: sn }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ip(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o) if (r === "class") t.class !== o.class && (t.class = Ku([t.class, o.class]));
    else if (r === "style") t.style = aa([t.style, o.style]);
    else if (El(r)) {
      const i = t[r], a = o[r];
      a && i !== a && !(je(i) && i.includes(a)) && (t[r] = i ? [].concat(i, a) : a);
    } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function pn(e, t, n, o = null) {
  Dn(e, t, 7, [n, o]);
}
const Np = Vh();
let zp = 0;
function Hp(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Np, i = { uid: zp++, vnode: e, type: o, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new _b(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: zh(o, r), emitsOptions: Gh(o, r), emit: null, emitted: null, propsDefaults: gt, inheritAttrs: o.inheritAttrs, ctx: gt, data: gt, props: gt, attrs: gt, slots: gt, refs: gt, setupState: gt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Lp.bind(null, i), e.ce && e.ce(i), i;
}
let Kt = null;
const xe = () => Kt || sn;
let ll, vu;
{
  const e = ia(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((a) => a(i)) : r[0](i);
    };
  };
  ll = t("__VUE_INSTANCE_SETTERS__", (n) => Kt = n), vu = t("__VUE_SSR_SETTERS__", (n) => Gi = n);
}
const ua = (e) => {
  const t = Kt;
  return ll(e), e.scope.on(), () => {
    e.scope.off(), ll(t);
  };
}, gd = () => {
  Kt && Kt.scope.off(), ll(null);
};
function Zh(e) {
  return e.vnode.shapeFlag & 4;
}
let Gi = false;
function jp(e, t = false, n = false) {
  t && vu(t);
  const { props: o, children: r } = e.vnode, i = Zh(e);
  gp(e, o, i, t), _p(e, r, n);
  const a = i ? Up(e, t) : void 0;
  return t && vu(false), a;
}
function Up(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sp);
  const { setup: o } = n;
  if (o) {
    Po();
    const r = e.setupContext = o.length > 1 ? Kp(e) : null, i = ua(e), a = la(o, e, 0, [e.props, r]), l = Uv(a);
    if (Do(), i(), (l || e.sp) && !Rr(e) && Ah(e), l) {
      if (a.then(gd, gd), t) return a.then((s) => {
        bd(e, s);
      }).catch((s) => {
        Rl(s, e, 0);
      });
      e.asyncDep = a;
    } else bd(e, a);
  } else em(e);
}
function bd(e, t, n) {
  Ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : kt(t) && (e.setupState = hh(t)), em(e);
}
function em(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Ln);
  {
    const r = ua(e);
    Po();
    try {
      up(e);
    } finally {
      Do(), r();
    }
  }
}
const Qp = { get(e, t) {
  return Jt(e, "get", ""), e[t];
} };
function Kp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Qp), slots: e.slots, emit: e.emit, expose: t };
}
function Il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hh(Bl(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Di) return Di[n](e);
  }, has(t, n) {
    return n in t || n in Di;
  } })) : e.proxy;
}
function hu(e, t = true) {
  return Ge(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wp(e) {
  return Ge(e) && "__vccOpts" in e;
}
const m = (e, t) => jb(e, t, Gi);
function h(e, t, n) {
  const o = arguments.length;
  return o === 2 ? kt(t) && !je(t) ? Yi(t) ? Ue(e, null, [t]) : Ue(e, t) : Ue(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Yi(n) && (n = [n]), Ue(e, t, n));
}
const Yp = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mu;
const pd = typeof window < "u" && window.trustedTypes;
if (pd) try {
  mu = pd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const tm = mu ? (e) => mu.createHTML(e) : (e) => e, Gp = "http://www.w3.org/2000/svg", Xp = "http://www.w3.org/1998/Math/MathML", Zn = typeof document < "u" ? document : null, yd = Zn && Zn.createElement("template"), Jp = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, o) => {
  const r = t === "svg" ? Zn.createElementNS(Gp, e) : t === "mathml" ? Zn.createElementNS(Xp, e) : n ? Zn.createElement(e, { is: n }) : Zn.createElement(e);
  return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
}, createText: (e) => Zn.createTextNode(e), createComment: (e) => Zn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Zn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, o, r, i) {
  const a = n ? n.previousSibling : t.lastChild;
  if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
  else {
    yd.innerHTML = tm(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
    const l = yd.content;
    if (o === "svg" || o === "mathml") {
      const s = l.firstChild;
      for (; s.firstChild; ) l.appendChild(s.firstChild);
      l.removeChild(s);
    }
    t.insertBefore(l, n);
  }
  return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, fo = "transition", Zr = "animation", Nr = Symbol("_vtc"), nm = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, om = zt({}, kh, nm), Zp = (e) => (e.displayName = "Transition", e.props = om, e), $t = Zp((e, { slots: t }) => h(Jb, rm(e), t)), No = (e, t = []) => {
  je(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _d = (e) => e ? je(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function rm(e) {
  const t = {};
  for (const M in e) M in nm || (t[M] = e[M]);
  if (e.css === false) return t;
  const { name: n = "v", type: o, duration: r, enterFromClass: i = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: s = i, appearActiveClass: d = a, appearToClass: c = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: v = `${n}-leave-active`, leaveToClass: u = `${n}-leave-to` } = e, g = ey(r), y = g && g[0], w = g && g[1], { onBeforeEnter: x, onEnter: _, onEnterCancelled: p, onLeave: b, onLeaveCancelled: C, onBeforeAppear: q = x, onAppear: B = _, onAppearCancelled: V = p } = t, R = (M, A, T, z) => {
    M._enterCancelled = z, yo(M, A ? c : l), yo(M, A ? d : a), T && T();
  }, D = (M, A) => {
    M._isLeaving = false, yo(M, f), yo(M, u), yo(M, v), A && A();
  }, $ = (M) => (A, T) => {
    const z = M ? B : _, U = () => R(A, M, T);
    No(z, [A, U]), wd(() => {
      yo(A, M ? s : i), Fn(A, M ? c : l), _d(z) || xd(A, o, y, U);
    });
  };
  return zt(t, { onBeforeEnter(M) {
    No(x, [M]), Fn(M, i), Fn(M, a);
  }, onBeforeAppear(M) {
    No(q, [M]), Fn(M, s), Fn(M, d);
  }, onEnter: $(false), onAppear: $(true), onLeave(M, A) {
    M._isLeaving = true;
    const T = () => D(M, A);
    Fn(M, f), M._enterCancelled ? (Fn(M, v), gu()) : (gu(), Fn(M, v)), wd(() => {
      M._isLeaving && (yo(M, f), Fn(M, u), _d(b) || xd(M, o, w, T));
    }), No(b, [M, T]);
  }, onEnterCancelled(M) {
    R(M, false, void 0, true), No(p, [M]);
  }, onAppearCancelled(M) {
    R(M, true, void 0, true), No(V, [M]);
  }, onLeaveCancelled(M) {
    D(M), No(C, [M]);
  } });
}
function ey(e) {
  if (e == null) return null;
  if (kt(e)) return [ms(e.enter), ms(e.leave)];
  {
    const t = ms(e);
    return [t, t];
  }
}
function ms(e) {
  return vb(e);
}
function Fn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Nr] || (e[Nr] = /* @__PURE__ */ new Set())).add(t);
}
function yo(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Nr];
  n && (n.delete(t), n.size || (e[Nr] = void 0));
}
function wd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ty = 0;
function xd(e, t, n, o) {
  const r = e._endId = ++ty, i = () => {
    r === e._endId && o();
  };
  if (n != null) return setTimeout(i, n);
  const { type: a, timeout: l, propCount: s } = im(e, t);
  if (!a) return o();
  const d = a + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(d, v), i();
  }, v = (u) => {
    u.target === e && ++c >= s && f();
  };
  setTimeout(() => {
    c < s && f();
  }, l + 1), e.addEventListener(d, v);
}
function im(e, t) {
  const n = window.getComputedStyle(e), o = (g) => (n[g] || "").split(", "), r = o(`${fo}Delay`), i = o(`${fo}Duration`), a = Cd(r, i), l = o(`${Zr}Delay`), s = o(`${Zr}Duration`), d = Cd(l, s);
  let c = null, f = 0, v = 0;
  t === fo ? a > 0 && (c = fo, f = a, v = i.length) : t === Zr ? d > 0 && (c = Zr, f = d, v = s.length) : (f = Math.max(a, d), c = f > 0 ? a > d ? fo : Zr : null, v = c ? c === fo ? i.length : s.length : 0);
  const u = c === fo && /\b(transform|all)(,|$)/.test(o(`${fo}Property`).toString());
  return { type: c, timeout: f, propCount: v, hasTransform: u };
}
function Cd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, o) => Sd(n) + Sd(e[o])));
}
function Sd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function gu() {
  return document.body.offsetHeight;
}
function ny(e, t, n) {
  const o = e[Nr];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sl = Symbol("_vod"), am = Symbol("_vsh"), lm = { beforeMount(e, { value: t }, { transition: n }) {
  e[sl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ei(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: o }) {
  !t != !n && (o ? t ? (o.beforeEnter(e), ei(e, true), o.enter(e)) : o.leave(e, () => {
    ei(e, false);
  }) : ei(e, t));
}, beforeUnmount(e, { value: t }) {
  ei(e, t);
} };
function ei(e, t) {
  e.style.display = t ? e[sl] : "none", e[am] = !t;
}
const sm = Symbol("");
function uc(e) {
  const t = xe();
  if (!t) return;
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => ul(i, r));
  }, o = () => {
    const r = e(t.proxy);
    t.ce ? ul(t.ce, r) : bu(t.subTree, r), n(r);
  };
  fr(() => {
    bh(o);
  }), st(() => {
    me(o, Ln, { flush: "post" });
    const r = new MutationObserver(o);
    r.observe(t.subTree.el.parentNode, { childList: true }), sa(() => r.disconnect());
  });
}
function bu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      bu(n.activeBranch, t);
    });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) ul(e.el, t);
  else if (e.type === on) e.children.forEach((n) => bu(n, t));
  else if (e.type === Ia) {
    let { el: n, anchor: o } = e;
    for (; n && (ul(n, t), n !== o); ) n = n.nextSibling;
  }
}
function ul(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let o = "";
    for (const r in t) n.setProperty(`--${r}`, t[r]), o += `--${r}: ${t[r]};`;
    n[sm] = o;
  }
}
const oy = /(^|;)\s*display\s*:/;
function ry(e, t, n) {
  const o = e.style, r = Pt(n);
  let i = false;
  if (n && !r) {
    if (t) if (Pt(t)) for (const a of t.split(";")) {
      const l = a.slice(0, a.indexOf(":")).trim();
      n[l] == null && za(o, l, "");
    }
    else for (const a in t) n[a] == null && za(o, a, "");
    for (const a in n) a === "display" && (i = true), za(o, a, n[a]);
  } else if (r) {
    if (t !== n) {
      const a = o[sm];
      a && (n += ";" + a), o.cssText = n, i = oy.test(n);
    }
  } else t && e.removeAttribute("style");
  sl in e && (e[sl] = i ? o.display : "", e[am] && (o.display = "none"));
}
const Td = /\s*!important$/;
function za(e, t, n) {
  if (je(n)) n.forEach((o) => za(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const o = iy(e, t);
    Td.test(n) ? e.setProperty(dr(o), n.replace(Td, ""), "important") : e[o] = n;
  }
}
const kd = ["Webkit", "Moz", "ms"], gs = {};
function iy(e, t) {
  const n = gs[t];
  if (n) return n;
  let o = xn(t);
  if (o !== "filter" && o in e) return gs[t] = o;
  o = Ll(o);
  for (let r = 0; r < kd.length; r++) {
    const i = kd[r] + o;
    if (i in e) return gs[t] = i;
  }
  return t;
}
const Md = "http://www.w3.org/1999/xlink";
function qd(e, t, n, o, r, i = yb(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Md, t.slice(6, t.length)) : e.setAttributeNS(Md, t, n) : n == null || i && !Yv(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ro(n) ? String(n) : n);
}
function Ed(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tm(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = false;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yv(n) : n == null && l === "string" ? (n = "", a = true) : l === "number" && (n = 0, a = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(r || t);
}
function ay(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ly(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ad = Symbol("_vei");
function sy(e, t, n, o, r = null) {
  const i = e[Ad] || (e[Ad] = {}), a = i[t];
  if (o && a) a.value = o;
  else {
    const [l, s] = uy(t);
    if (o) {
      const d = i[t] = fy(o, r);
      ay(e, l, d, s);
    } else a && (ly(e, l, a, s), i[t] = void 0);
  }
}
const Ld = /(?:Once|Passive|Capture)$/;
function uy(e) {
  let t;
  if (Ld.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ld); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : dr(e.slice(2)), t];
}
let bs = 0;
const cy = Promise.resolve(), dy = () => bs || (cy.then(() => bs = 0), bs = Date.now());
function fy(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    Dn(vy(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = dy(), n;
}
function vy(e, t) {
  if (je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else return t;
}
const Bd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hy = (e, t, n, o, r, i) => {
  const a = r === "svg";
  t === "class" ? ny(e, o, a) : t === "style" ? ry(e, n, o) : El(t) ? ju(t) || sy(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : my(e, t, o, a)) ? (Ed(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qd(e, t, o, a, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pt(o)) ? Ed(e, xn(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), qd(e, t, o, a));
};
function my(e, t, n, o) {
  if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Bd(t) && Ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
  }
  return Bd(t) && Pt(n) ? false : t in e;
}
const um = /* @__PURE__ */ new WeakMap(), cm = /* @__PURE__ */ new WeakMap(), cl = Symbol("_moveCb"), Rd = Symbol("_enterCb"), gy = (e) => (delete e.props.mode, e), by = gy({ name: "TransitionGroup", props: zt({}, om, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), o = Th();
  let r, i;
  return Vl(() => {
    if (!r.length) return;
    const a = e.moveClass || `${e.name || "v"}-move`;
    if (!xy(r[0].el, n.vnode.el, a)) return;
    r.forEach(yy), r.forEach(_y);
    const l = r.filter(wy);
    gu(), l.forEach((s) => {
      const d = s.el, c = d.style;
      Fn(d, a), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = d[cl] = (v) => {
        v && v.target !== d || (!v || /transform$/.test(v.propertyName)) && (d.removeEventListener("transitionend", f), d[cl] = null, yo(d, a));
      };
      d.addEventListener("transitionend", f);
    });
  }), () => {
    const a = Je(e), l = rm(a);
    let s = a.tag || on;
    if (r = [], i) for (let d = 0; d < i.length; d++) {
      const c = i[d];
      c.el && c.el instanceof Element && (r.push(c), Bo(c, Ki(c, l, o, n)), um.set(c, c.el.getBoundingClientRect()));
    }
    i = t.default ? rc(t.default()) : [];
    for (let d = 0; d < i.length; d++) {
      const c = i[d];
      c.key != null && Bo(c, Ki(c, l, o, n));
    }
    return Ue(s, null, i);
  };
} }), py = by;
function yy(e) {
  const t = e.el;
  t[cl] && t[cl](), t[Rd] && t[Rd]();
}
function _y(e) {
  cm.set(e, e.el.getBoundingClientRect());
}
function wy(e) {
  const t = um.get(e), n = cm.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${o}px,${r}px)`, i.transitionDuration = "0s", e;
  }
}
function xy(e, t, n) {
  const o = e.cloneNode(), r = e[Nr];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((s) => s && o.classList.remove(s));
  }), n.split(/\s+/).forEach((l) => l && o.classList.add(l)), o.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(o);
  const { hasTransform: a } = im(o);
  return i.removeChild(o), a;
}
const Cy = zt({ patchProp: hy }, Jp);
let Pd;
function Sy() {
  return Pd || (Pd = Cp(Cy));
}
const dm = (...e) => {
  const t = Sy().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = ky(o);
    if (!r) return;
    const i = t._component;
    !Ge(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const a = n(r, false, Ty(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
  }, t;
};
function Ty(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ky(e) {
  return Pt(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var ps = null;
function cc() {
  return ps !== null ? ps : ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (cc().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (cc().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (cc().__QUASAR_SSR_PWA__ = false);
function It(e, t, n, o) {
  return Object.defineProperty(e, t, { get: n, set: o, enumerable: true }), e;
}
function fm(e, t) {
  for (const n in t) It(e, n, t[n]);
  return e;
}
var un = H(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), pu;
function My(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function qy(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var vm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ey(e) {
  const t = e.toLowerCase(), n = qy(t), o = My(t, n), r = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  o.browser && (r[o.browser] = true, r.version = o.version, r.versionNumber = parseInt(o.version, 10)), o.platform && (r[o.platform] = true);
  const i = r.android || r.ios || r.bb || r.blackberry || r.ipad || r.iphone || r.ipod || r.kindle || r.playbook || r.silk || r["windows phone"];
  if (i === true || t.indexOf("mobile") !== -1 ? r.mobile = true : r.desktop = true, r["windows phone"] && (r.winphone = true, delete r["windows phone"]), r.edga || r.edgios || r.edg ? (r.edge = true, o.browser = "edge") : r.crios ? (r.chrome = true, o.browser = "chrome") : r.fxios && (r.firefox = true, o.browser = "firefox"), (r.ipod || r.ipad || r.iphone) && (r.ios = true), r.vivaldi && (o.browser = "vivaldi", r.vivaldi = true), (r.chrome || r.opr || r.safari || r.vivaldi || r.mobile === true && r.ios !== true && i !== true) && (r.webkit = true), r.opr && (o.browser = "opera", r.opera = true), r.safari && (r.blackberry || r.bb ? (o.browser = "blackberry", r.blackberry = true) : r.playbook ? (o.browser = "playbook", r.playbook = true) : r.android ? (o.browser = "android", r.android = true) : r.kindle ? (o.browser = "kindle", r.kindle = true) : r.silk && (o.browser = "silk", r.silk = true)), r.name = o.browser, r.platform = o.platform, t.indexOf("electron") !== -1) r.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) r.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (r.capacitor = true, r.nativeMobile = true, r.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (r.cordova = true, r.nativeMobile = true, r.nativeMobileWrapper = "cordova"), un.value === true && (pu = { is: { ...r } }), vm === true && r.mac === true && (r.desktop === true && r.safari === true || r.nativeMobile === true && r.android !== true && r.ios !== true && r.ipad !== true)) {
      delete r.mac, delete r.desktop;
      const a = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(r, { mobile: true, ios: true, platform: a, [a]: true });
    }
    r.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete r.desktop, r.mobile = true);
  }
  return r;
}
var Dd = navigator.userAgent || navigator.vendor || window.opera, Ay = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Dd, is: Ey(Dd), has: { touch: vm }, within: { iframe: window.self !== window.top } }, yu = { install(e) {
  const { $q: t } = e;
  un.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, ze), un.value = false;
  }), t.platform = Nn(this)) : t.platform = this;
} };
{
  let e;
  It(ze.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(yu, ze), un.value === true && (Object.assign(yu, pu, Ay), pu = null);
}
var hm = yu;
function ge(e) {
  return Bl(/* @__PURE__ */ zn(e));
}
function Vn(e) {
  return Bl(e);
}
var Vo = (e, t) => {
  const n = Nn(e);
  for (const o in e) It(t, o, () => n[o], (r) => {
    n[o] = r;
  });
  return t;
}, ht = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  const e = Object.defineProperty({}, "passive", { get() {
    Object.assign(ht, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function Tt() {
}
function Nl(e) {
  return e.button === 0;
}
function an(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function Ly(e) {
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
function Nt(e) {
  e.cancelable !== false && e.preventDefault();
}
function Ke(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function Dr(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (o) => {
    o.__dragPrevented = true, o.addEventListener("dragstart", Nt, ht.notPassiveCapture);
  } : (o) => {
    delete o.__dragPrevented, o.removeEventListener("dragstart", Nt, ht.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function Et(e, t, n) {
  const o = `__q_${t}_evt`;
  e[o] = e[o] !== void 0 ? e[o].concat(n) : n, n.forEach((r) => {
    r[0].addEventListener(r[1], e[r[2]], ht[r[3]]);
  });
}
function Zt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((o) => {
    o[0].removeEventListener(o[1], e[o[2]], ht[o[3]]);
  }), e[n] = void 0);
}
function Kr(e, t = 250, n) {
  let o = null;
  function r() {
    const i = arguments, a = () => {
      o = null, e.apply(this, i);
    };
    o !== null && clearTimeout(o), o = setTimeout(a, t);
  }
  return r.cancel = () => {
    o !== null && clearTimeout(o);
  }, r;
}
var ys = ["sm", "md", "lg", "xl"], { passive: Od } = ht, By = Vo({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: Tt, setDebounce: Tt, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, o = n || window, r = document.scrollingElement || document.documentElement, i = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, r.clientWidth), Math.max(window.innerHeight, r.clientHeight)] : () => [n.width * n.scale + window.innerWidth - r.clientWidth, n.height * n.scale + window.innerHeight - r.clientHeight], a = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
  this.__update = (f) => {
    const [v, u] = i();
    if (u !== this.height && (this.height = u), v !== this.width) this.width = v;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = v >= g.sm, this.gt.sm = v >= g.md, this.gt.md = v >= g.lg, this.gt.lg = v >= g.xl, this.lt.sm = v < g.sm, this.lt.md = v < g.md, this.lt.lg = v < g.lg, this.lt.xl = v < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (a === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let l, s = {}, d = 16;
  this.setSizes = (f) => {
    ys.forEach((v) => {
      f[v] !== void 0 && (s[v] = f[v]);
    });
  }, this.setDebounce = (f) => {
    d = f;
  };
  const c = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && ys.forEach((v) => {
      this.sizes[v] = parseInt(f.getPropertyValue(`--q-size-${v}`), 10);
    }), this.setSizes = (v) => {
      ys.forEach((u) => {
        v[u] && (this.sizes[u] = v[u]);
      }), this.__update(true);
    }, this.setDebounce = (v) => {
      l !== void 0 && o.removeEventListener("resize", l, Od), l = v > 0 ? Kr(this.__update, v) : this.__update, o.addEventListener("resize", l, Od);
    }, this.setDebounce(d), Object.keys(s).length !== 0 ? (this.setSizes(s), s = void 0) : this.__update(), a === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  un.value === true ? t.push(c) : c();
} }), Gt = Vo({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Gt.mode = e, e === "auto" ? (Gt.__media === void 0 && (Gt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Gt.__updateMedia = () => {
    Gt.set("auto");
  }, Gt.__media.addListener(Gt.__updateMedia)), e = Gt.__media.matches) : Gt.__media !== void 0 && (Gt.__media.removeListener(Gt.__updateMedia), Gt.__media = void 0), Gt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Gt.set(Gt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), mm = Gt;
function Ry(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var gm = false;
function Py(e) {
  gm = e.isComposing === true;
}
function vr(e) {
  return gm === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function Cn(e, t) {
  return vr(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function bm(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function Dy({ is: e, has: t, within: n }, o) {
  const r = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const i = bm(e);
    i !== void 0 && r.push("platform-" + i);
  }
  if (e.nativeMobile === true) {
    const i = e.nativeMobileWrapper;
    r.push(i), r.push("native-mobile"), e.ios === true && (o[i] === void 0 || o[i].iosStatusBarPadding !== false) && r.push("q-ios-padding");
  } else e.electron === true ? r.push("electron") : e.bex === true && r.push("bex");
  return n.iframe === true && r.push("within-iframe"), r;
}
function Oy() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const r = bm(e);
      r !== void 0 && n.add(`platform-${r}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const o = Array.from(n).join(" ");
  t !== o && (document.body.className = o);
}
function Vy(e) {
  for (const t in e) Ry(t, e[t]);
}
var Fy = { install(e) {
  if (this.__installed !== true) {
    if (un.value === true) Oy();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && Vy(t.config.brand);
      const n = Dy(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", Tt), window.addEventListener("keydown", Py, true);
  }
} }, pm = () => true;
function $y(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Iy(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function Ny(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return pm;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter($y).map(Iy)), () => t.includes(window.location.hash);
}
var Xi = { __history: [], add: Tt, remove: Tt, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const o = e.config[t === true ? "cordova" : "capacitor"];
  if ((o == null ? void 0 : o.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (a) => {
    a.condition === void 0 && (a.condition = pm), this.__history.push(a);
  }, this.remove = (a) => {
    const l = this.__history.indexOf(a);
    l >= 0 && this.__history.splice(l, 1);
  };
  const r = Ny(Object.assign({ backButtonExit: true }, o)), i = () => {
    if (this.__history.length) {
      const a = this.__history[this.__history.length - 1];
      a.condition() === true && (this.__history.pop(), a.handler());
    } else r() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", i, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", i);
} }, _u = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Vd() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Go = Vo({ __qLang: {} }, { getLocale: Vd, set(e = _u, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Vd };
  {
    if (n.set = Go.set, Go.__langConfig === void 0 || Go.__langConfig.noHtmlAttrs !== true) {
      const o = document.documentElement;
      o.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), o.setAttribute("lang", n.isoName);
    }
    Object.assign(Go.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Go.__qLang, Go.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(o) {
    return Reflect.ownKeys(o).filter((r) => r !== "set" && r !== "getLocale");
  } }), this.set(t || _u));
} }), zl = Go, zy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, wu = Vo({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = wu.set, Object.assign(wu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, It(e, "iconMapFn", () => this.iconMapFn, (o) => {
    this.iconMapFn = o;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(o) {
    return Reflect.ownKeys(o).filter((r) => r !== "set");
  } }), this.set(t || zy));
} }), ym = wu, _m = "_q_", wm = "_q_t_", xm = "_q_s_", hr = "_q_l_", Cm = "_q_pc_", Sm = "_q_f_", Tm = "_q_fo_", km = "_q_tabs_", Mm = "_q_u_";
function ut() {
}
var dl = {}, qm = false;
function Hy() {
  qm = true;
}
function An(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, o;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (o = n; o-- !== 0; ) if (An(e[o], t[o]) !== true) return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return false;
      let i = e.entries();
      for (o = i.next(); o.done !== true; ) {
        if (t.has(o.value[0]) !== true) return false;
        o = i.next();
      }
      for (i = e.entries(), o = i.next(); o.done !== true; ) {
        if (An(o.value[1], t.get(o.value[0])) !== true) return false;
        o = i.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return false;
      const i = e.entries();
      for (o = i.next(); o.done !== true; ) {
        if (t.has(o.value[0]) !== true) return false;
        o = i.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length) return false;
      for (o = n; o-- !== 0; ) if (e[o] !== t[o]) return false;
      return true;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    const r = Object.keys(e).filter((i) => e[i] !== void 0);
    if (n = r.length, n !== Object.keys(t).filter((i) => t[i] !== void 0).length) return false;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (An(e[i], t[i]) !== true) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Ot(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function xu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function jy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Ji(e) {
  return typeof e == "number" && isFinite(e);
}
var Fd = [hm, Fy, mm, By, Xi, zl, ym];
function Hl(e, t) {
  const n = dm(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: o, ...r } = t._context;
  return Object.assign(n._context, r), n;
}
function $d(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function Uy(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(_m, n.$q), $d(n, Fd), t.components !== void 0 && Object.values(t.components).forEach((o) => {
    Ot(o) === true && o.name !== void 0 && e.component(o.name, o);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((o) => {
    Ot(o) === true && o.name !== void 0 && e.directive(o.name, o);
  }), t.plugins !== void 0 && $d(n, Object.values(t.plugins).filter((o) => typeof o.install == "function" && Fd.includes(o) === false)), un.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((o) => {
      o();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Qy = function(e, t = {}) {
  const n = { version: "2.18.1" };
  qm === false ? (t.config !== void 0 && Object.assign(dl, t.config), n.config = { ...dl }, Hy()) : n.config = t.config || {}, Uy(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, Id = ["B", "KB", "MB", "GB", "TB", "PB"];
function Cu(e, t = 1) {
  let n = 0;
  for (; parseInt(e, 10) >= 1024 && n < Id.length - 1; ) e /= 1024, ++n;
  return `${e.toFixed(t)}${Id[n]}`;
}
function vt(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function fl(e, t, n) {
  if (n <= t) return t;
  const o = n - t + 1;
  let r = t + (e - t) % o;
  return r < t && (r = o + r), r === 0 ? 0 : r;
}
function lt(e, t = 2, n = "0") {
  if (e == null) return e;
  const o = "" + e;
  return o.length >= t ? o : new Array(t - o.length + 1).join(n) + o;
}
var dc = XMLHttpRequest, Em = dc.prototype.open, Ky = ["top", "right", "bottom", "left"], vl = [], Vi = 0;
function Wy({ p: e, pos: t, active: n, horiz: o, reverse: r, dir: i }) {
  let a = 1, l = 1;
  return o === true ? (r === true && (a = -1), t === "bottom" && (l = -1), { transform: `translate3d(${a * (e - 100)}%,${n ? 0 : l * -200}%,0)` }) : (r === true && (l = -1), t === "right" && (a = -1), { transform: `translate3d(${n ? 0 : i * a * -200}%,${l * (e - 100)}%,0)` });
}
function Yy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), vt(e + t, 0, 100);
}
function Gy(e) {
  Vi++, vl.push(e), !(Vi > 1) && (dc.prototype.open = function(t, n) {
    const o = [], r = () => {
      vl.forEach((a) => {
        (a.hijackFilter.value === null || a.hijackFilter.value(n) === true) && (a.start(), o.push(a.stop));
      });
    }, i = () => {
      o.forEach((a) => {
        a();
      });
    };
    this.addEventListener("loadstart", r, { once: true }), this.addEventListener("loadend", i, { once: true }), Em.apply(this, arguments);
  });
}
function Xy(e) {
  vl = vl.filter((t) => t.start !== e), Vi = Math.max(0, Vi - 1), Vi === 0 && (dc.prototype.open = Em);
}
var Jy = ge({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Ky.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), o = H(0), r = H(false), i = H(true);
  let a = 0, l = null, s;
  const d = m(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (i.value === true ? "" : " no-transition")), c = m(() => e.position === "top" || e.position === "bottom"), f = m(() => c.value === true ? "height" : "width"), v = m(() => {
    const p = r.value, b = Wy({ p: o.value, pos: e.position, active: p, horiz: c.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), u = m(() => r.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": o.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = s;
    return s = Math.max(0, p) || 0, a++, a > 1 ? (b === 0 && p > 0 ? x() : l !== null && b > 0 && p <= 0 && (clearTimeout(l), l = null), a) : (l !== null && clearTimeout(l), t("start"), o.value = 0, l = setTimeout(() => {
      l = null, i.value = true, p > 0 && x();
    }, r._value === true ? 500 : 1), r._value !== true && (r.value = true, i.value = false), a);
  }
  function y(p) {
    return a > 0 && (o.value = Yy(o.value, p)), a;
  }
  function w() {
    if (a = Math.max(0, a - 1), a > 0) return a;
    l !== null && (clearTimeout(l), l = null), t("stop");
    const p = () => {
      i.value = true, o.value = 100, l = setTimeout(() => {
        l = null, r.value = false;
      }, 1e3);
    };
    return o.value === 0 ? l = setTimeout(p, 1) : p(), a;
  }
  function x() {
    o.value < 100 && (l = setTimeout(() => {
      l = null, y(), x();
    }, s));
  }
  let _;
  return st(() => {
    e.skipHijack !== true && (_ = true, Gy({ start: g, stop: w, hijackFilter: m(() => e.hijackFilter || null) }));
  }), We(() => {
    l !== null && clearTimeout(l), _ === true && Xy(g);
  }), Object.assign(n, { start: g, stop: w, increment: y }), () => h("div", { class: d.value, style: v.value, ...u.value });
} }), Su = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, lo = { size: String };
function so(e, t = Su) {
  return m(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function Pe(e, t) {
  return e !== void 0 && e() || t;
}
function ca(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function At(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function fc(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Sn(e, t, n, o, r, i) {
  t.key = o + r;
  const a = h(e, t, n);
  return r === true ? hn(a, i()) : a;
}
var Nd = "0 0 24 24", _s = (e) => e, ws = (e) => `ionicons ${e}`, Am = { "mdi-": (e) => `mdi ${e}`, "icon-": _s, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": ws, "ion-ios": ws, "ion-logo": ws, "iconfont ": _s, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": _s }, Lm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, Bm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, Zy = new RegExp("^(" + Object.keys(Am).join("|") + ")"), e1 = new RegExp("^(" + Object.keys(Lm).join("|") + ")"), zd = new RegExp("^(" + Object.keys(Bm).join("|") + ")"), t1 = /^[Mm]\s?[-+]?\.?\d/, n1 = /^img:/, o1 = /^svguse:/, r1 = /^ion-/, i1 = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, tt = ge({ name: "QIcon", props: { ...lo, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = so(e), r = m(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), i = m(() => {
    let a, l = e.name;
    if (l === "none" || !l) return { none: true };
    if (n.iconMapFn !== null) {
      const c = n.iconMapFn(l);
      if (c !== void 0) if (c.icon !== void 0) {
        if (l = c.icon, l === "none" || !l) return { none: true };
      } else return { cls: c.cls, content: c.content !== void 0 ? c.content : " " };
    }
    if (t1.test(l) === true) {
      const [c, f = Nd] = l.split("|");
      return { svg: true, viewBox: f, nodes: c.split("&&").map((v) => {
        const [u, g, y] = v.split("@@");
        return h("path", { style: g, d: u, transform: y });
      }) };
    }
    if (n1.test(l) === true) return { img: true, src: l.substring(4) };
    if (o1.test(l) === true) {
      const [c, f = Nd] = l.split("|");
      return { svguse: true, src: c.substring(7), viewBox: f };
    }
    let s = " ";
    const d = l.match(Zy);
    if (d !== null) a = Am[d[1]](l);
    else if (i1.test(l) === true) a = l;
    else if (r1.test(l) === true) a = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${l.substring(3)}`;
    else if (zd.test(l) === true) {
      a = "notranslate material-symbols";
      const c = l.match(zd);
      c !== null && (l = l.substring(6), a += Bm[c[1]]), s = l;
    } else {
      a = "notranslate material-icons";
      const c = l.match(e1);
      c !== null && (l = l.substring(2), a += Lm[c[1]]), s = l;
    }
    return { cls: a, content: s };
  });
  return () => {
    const a = { class: r.value, style: o.value, "aria-hidden": "true" };
    return i.value.none === true ? h(e.tag, a, Pe(t.default)) : i.value.img === true ? h(e.tag, a, At(t.default, [h("img", { src: i.value.src })])) : i.value.svg === true ? h(e.tag, a, At(t.default, [h("svg", { viewBox: i.value.viewBox || "0 0 24 24" }, i.value.nodes)])) : i.value.svguse === true ? h(e.tag, a, At(t.default, [h("svg", { viewBox: i.value.viewBox }, [h("use", { "xlink:href": i.value.src })])])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), h(e.tag, a, At(t.default, [i.value.content])));
  };
} }), Tu = ge({ name: "QAvatar", props: { ...lo, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = so(e), o = m(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), r = m(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const i = e.icon !== void 0 ? [h(tt, { name: e.icon })] : void 0;
    return h("div", { class: o.value, style: n.value }, [h("div", { class: "q-avatar__content row flex-center overflow-hidden", style: r.value }, fc(t.default, i))]);
  };
} }), a1 = ["top", "middle", "bottom"];
ge({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => a1.includes(e) } }, setup(e, { slots: t }) {
  const n = m(() => e.align !== void 0 ? { verticalAlign: e.align } : null), o = m(() => {
    const r = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (r !== void 0 ? ` text-${r}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => h("div", { class: o.value, style: n.value, role: "status", "aria-label": e.label }, At(t.default, e.label !== void 0 ? [e.label] : []));
} });
var ot = { dark: { type: Boolean, default: null } };
function rt(e, t) {
  return m(() => e.dark === null ? t.dark.isActive : e.dark);
}
ge({ name: "QBanner", props: { ...ot, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = rt(e, n), r = m(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (o.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), i = m(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const a = [h("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), h("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], l = Pe(t.action);
    return l !== void 0 && a.push(h("div", { class: i.value }, l)), h("div", { class: r.value + (e.inlineActions === false && l !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, a);
  };
} });
ge({ name: "QBar", props: { ...ot, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = rt(e, n), r = m(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${o.value === true ? "dark" : "light"}`);
  return () => h("div", { class: r.value, role: "toolbar" }, Pe(t.default));
} });
var Rm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, l1 = Object.keys(Rm), vc = { align: { type: String, validator: (e) => l1.includes(e) } };
function hc(e) {
  return m(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${Rm[t]}`;
  });
}
function Ha(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Pm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    Pm(e, n);
  }) : e.add(t);
}
function mc(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Pm(t, n);
  }), Array.from(t);
}
function gc(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Ao(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var s1 = ["", true];
ge({ name: "QBreadcrumbs", props: { ...vc, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = hc(e), o = m(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), r = m(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), i = m(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const a = mc(Pe(t.default));
    if (a.length === 0) return;
    let l = 1;
    const s = [], d = a.filter((f) => {
      var _a3;
      return ((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl";
    }).length, c = t.separator !== void 0 ? t.separator : () => e.separator;
    return a.forEach((f) => {
      var _a3;
      if (((_a3 = f.type) == null ? void 0 : _a3.name) === "QBreadcrumbsEl") {
        const v = l < d, u = f.props !== null && s1.includes(f.props.disable), g = (v === true ? "" : " q-breadcrumbs--last") + (u !== true && v === true ? i.value : "");
        l++, s.push(h("div", { class: `flex items-center${g}` }, [f])), v === true && s.push(h("div", { class: "q-breadcrumbs__separator" + r.value }, c()));
      } else s.push(f);
    }), h("div", { class: "q-breadcrumbs" }, [h("div", { class: o.value }, s)]);
  };
} });
function Hd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function jd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function u1(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r) return false;
    } else if (Array.isArray(r) === false || r.length !== o.length || o.some((i, a) => i !== r[a])) return false;
  }
  return true;
}
function Ud(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function c1(e, t) {
  return Array.isArray(e) === true ? Ud(e, t) : Array.isArray(t) === true ? Ud(t, e) : e === t;
}
function d1(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (c1(e[n], t[n]) === false) return false;
  return true;
}
var Dm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, da = { ...Dm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function jl({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: o, proxy: r, emit: i } = n, a = gc(n), l = m(() => o.disable !== true && o.href !== void 0), s = m(t === true ? () => a === true && o.disable !== true && l.value !== true && o.to !== void 0 && o.to !== null && o.to !== "" : () => a === true && l.value !== true && o.to !== void 0 && o.to !== null && o.to !== ""), d = m(() => s.value === true ? _(o.to) : null), c = m(() => d.value !== null), f = m(() => l.value === true || c.value === true), v = m(() => o.type === "a" || f.value === true ? "a" : o.tag || e || "div"), u = m(() => l.value === true ? { href: o.href, target: o.target } : c.value === true ? { href: d.value.href, target: o.target } : {}), g = m(() => {
    if (c.value === false) return -1;
    const { matched: C } = d.value, { length: q } = C, B = C[q - 1];
    if (B === void 0) return -1;
    const V = r.$route.matched;
    if (V.length === 0) return -1;
    const R = V.findIndex(jd.bind(null, B));
    if (R !== -1) return R;
    const D = Hd(C[q - 2]);
    return q > 1 && Hd(B) === D && V[V.length - 1].path !== D ? V.findIndex(jd.bind(null, C[q - 2])) : R;
  }), y = m(() => c.value === true && g.value !== -1 && u1(r.$route.params, d.value.params)), w = m(() => y.value === true && g.value === r.$route.matched.length - 1 && d1(r.$route.params, d.value.params)), x = m(() => c.value === true ? w.value === true ? ` ${o.exactActiveClass} ${o.activeClass}` : o.exact === true ? "" : y.value === true ? ` ${o.activeClass}` : "" : "");
  function _(C) {
    try {
      return r.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function p(C, { returnRouterError: q, to: B = o.to, replace: V = o.replace } = {}) {
    if (o.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || o.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const R = r.$router[V === true ? "replace" : "push"](B);
    return q === true ? R : R.then(() => {
    }).catch(() => {
    });
  }
  function b(C) {
    if (c.value === true) {
      const q = (B) => p(C, B);
      i("click", C, q), C.defaultPrevented !== true && q();
    } else i("click", C);
  }
  return { hasRouterLink: c, hasHrefLink: l, hasLink: f, linkTag: v, resolvedLink: d, linkIsActive: y, linkIsExactActive: w, linkClass: x, linkAttrs: u, getLink: _, navigateToRouterLink: p, navigateOnClick: b };
}
ge({ name: "QBreadcrumbsEl", props: { ...da, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: o, linkClass: r, navigateOnClick: i } = jl(), a = m(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + r.value : "q-breadcrumbs__el--disable"), ...o.value, onClick: i })), l = m(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const s = [];
    return e.icon !== void 0 && s.push(h(tt, { class: l.value, name: e.icon })), e.label !== void 0 && s.push(e.label), h(n.value, { ...a.value }, At(t.default, s));
  };
} });
var Bt = { size: { type: [String, Number], default: "1em" }, color: String };
function Rt(e) {
  return { cSize: m(() => e.size in Su ? `${Su[e.size]}px` : e.size), classes: m(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var Tn = ge({ name: "QSpinner", props: { ...Bt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [h("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function hl(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function zr(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function ku(e, t) {
  const n = e.style;
  for (const o in t) n[o] = t[o];
}
function f1(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Re(e);
  if (t) return t.$el || t;
}
function Om(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function Vm(e, t = 250) {
  let n = false, o;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), o = e.apply(this, arguments)), o;
  };
}
function Qd(e, t, n, o) {
  n.modifiers.stop === true && St(e);
  const r = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === true || o === true;
  const a = document.createElement("span"), l = document.createElement("span"), s = an(e), { left: d, top: c, width: f, height: v } = t.getBoundingClientRect(), u = Math.sqrt(f * f + v * v), g = u / 2, y = `${(f - u) / 2}px`, w = i ? y : `${s.left - d - g}px`, x = `${(v - u) / 2}px`, _ = i ? x : `${s.top - c - g}px`;
  l.className = "q-ripple__inner", ku(l, { height: `${u}px`, width: `${u}px`, transform: `translate3d(${w},${_},0) scale3d(.2,.2,1)`, opacity: 0 }), a.className = `q-ripple${r ? " text-" + r : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(l), t.appendChild(a);
  const p = () => {
    a.remove(), clearTimeout(b);
  };
  n.abort.push(p);
  let b = setTimeout(() => {
    l.classList.add("q-ripple__inner--enter"), l.style.transform = `translate3d(${y},${x},0) scale3d(1,1,1)`, l.style.opacity = 0.2, b = setTimeout(() => {
      l.classList.remove("q-ripple__inner--enter"), l.classList.add("q-ripple__inner--leave"), l.style.opacity = 0, b = setTimeout(() => {
        a.remove(), n.abort.splice(n.abort.indexOf(p), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Kd(e, { modifiers: t, value: n, arg: o }) {
  const r = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: r.early === true, stop: r.stop === true, center: r.center === true, color: r.color || o, keyCodes: [].concat(r.keyCodes || 13) };
}
var Ul = Vn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const o = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(r) {
    o.enabled === true && r.qSkipRipple !== true && r.type === (o.modifiers.early === true ? "pointerdown" : "click") && Qd(r, e, o, r.qKeyEvent === true);
  }, keystart: Vm((r) => {
    o.enabled === true && r.qSkipRipple !== true && Cn(r, o.modifiers.keyCodes) === true && r.type === `key${o.modifiers.early === true ? "down" : "up"}` && Qd(r, e, o, true);
  }, 300) };
  Kd(o, t), e.__qripple = o, Et(o, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Kd(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Zt(t, "main"), delete e._qripple);
} }), ml = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, v1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, h1 = ["button", "submit", "reset"], m1 = /[^\s]\/[^\s]/, Fm = ["flat", "outline", "push", "unelevated"];
function bc(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function $m(e) {
  const t = bc(e);
  return t !== void 0 ? { [t]: true } : {};
}
var pc = { ...lo, ...Dm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...Fm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...vc.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, g1 = { ...pc, round: Boolean };
function b1(e) {
  const t = so(e, v1), n = hc(e), { hasRouterLink: o, hasLink: r, linkTag: i, linkAttrs: a, navigateOnClick: l } = jl({ fallbackTag: "button" }), s = m(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((x) => x in ml ? ml[x] + "px" : x).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), d = m(() => e.rounded === true || e.fab === true || e.fabMini === true), c = m(() => e.disable !== true && e.loading !== true), f = m(() => c.value === true ? e.tabindex || 0 : -1), v = m(() => bc(e, "standard")), u = m(() => {
    const w = { tabindex: f.value };
    return r.value === true ? Object.assign(w, a.value) : h1.includes(e.type) === true && (w.type = e.type), i.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), o.value !== true && m1.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = m(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const x = e.round === true ? "round" : `rectangle${d.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${v.value} q-btn--${x}` + (w !== void 0 ? " " + w : "") + (c.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), y = m(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: s, innerClasses: y, attributes: u, hasLink: r, linkTag: i, navigateOnClick: l, isActionable: c };
}
var { passiveCapture: bn } = ht, pr = null, yr = null, _r = null, et = ge({ name: "QBtn", props: { ...g1, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { classes: r, style: i, innerClasses: a, attributes: l, hasLink: s, linkTag: d, navigateOnClick: c, isActionable: f } = b1(e), v = H(null), u = H(null);
  let g = null, y, w = null;
  const x = m(() => e.label !== void 0 && e.label !== null && e.label !== ""), _ = m(() => e.disable === true || e.ripple === false ? false : { keyCodes: s.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = m(() => ({ center: e.round })), b = m(() => {
    const T = Math.max(0, Math.min(100, e.percentage));
    return T > 0 ? { transition: "transform 0.6s", transform: `translateX(${T - 100}%)` } : {};
  }), C = m(() => {
    if (e.loading === true) return { onMousedown: A, onTouchstart: A, onClick: A, onKeydown: A, onKeyup: A };
    if (f.value === true) {
      const T = { onClick: B, onKeydown: V, onMousedown: D };
      if (o.$q.platform.has.touch === true) {
        const z = e.onTouchstart !== void 0 ? "" : "Passive";
        T[`onTouchstart${z}`] = R;
      }
      return T;
    }
    return { onClick: Ke };
  }), q = m(() => ({ ref: v, class: "q-btn q-btn-item non-selectable no-outline " + r.value, style: i.value, ...l.value, ...C.value }));
  function B(T) {
    if (v.value !== null) {
      if (T !== void 0) {
        if (T.defaultPrevented === true) return;
        const z = document.activeElement;
        if (e.type === "submit" && z !== document.body && v.value.contains(z) === false && z.contains(v.value) === false) {
          T.qAvoidFocus !== true && v.value.focus();
          const U = () => {
            var _a3;
            document.removeEventListener("keydown", Ke, true), document.removeEventListener("keyup", U, bn), (_a3 = v.value) == null ? void 0 : _a3.removeEventListener("blur", U, bn);
          };
          document.addEventListener("keydown", Ke, true), document.addEventListener("keyup", U, bn), v.value.addEventListener("blur", U, bn);
        }
      }
      c(T);
    }
  }
  function V(T) {
    v.value !== null && (n("keydown", T), Cn(T, [13, 32]) === true && yr !== v.value && (yr !== null && M(), T.defaultPrevented !== true && (T.qAvoidFocus !== true && v.value.focus(), yr = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", $, true), v.value.addEventListener("blur", $, bn)), Ke(T)));
  }
  function R(T) {
    v.value !== null && (n("touchstart", T), T.defaultPrevented !== true && (pr !== v.value && (pr !== null && M(), pr = v.value, g = T.target, g.addEventListener("touchcancel", $, bn), g.addEventListener("touchend", $, bn)), y = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, y = false;
    }, 200)));
  }
  function D(T) {
    v.value !== null && (T.qSkipRipple = y === true, n("mousedown", T), T.defaultPrevented !== true && _r !== v.value && (_r !== null && M(), _r = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", $, bn)));
  }
  function $(T) {
    if (v.value !== null && !((T == null ? void 0 : T.type) === "blur" && document.activeElement === v.value)) {
      if ((T == null ? void 0 : T.type) === "keyup") {
        if (yr === v.value && Cn(T, [13, 32]) === true) {
          const z = new MouseEvent("click", T);
          z.qKeyEvent = true, T.defaultPrevented === true && Nt(z), T.cancelBubble === true && St(z), v.value.dispatchEvent(z), Ke(T), T.qKeyEvent = true;
        }
        n("keyup", T);
      }
      M();
    }
  }
  function M(T) {
    var _a3, _b2;
    const z = u.value;
    T !== true && (pr === v.value || _r === v.value) && z !== null && z !== document.activeElement && (z.setAttribute("tabindex", -1), z.focus()), pr === v.value && (g !== null && (g.removeEventListener("touchcancel", $, bn), g.removeEventListener("touchend", $, bn)), pr = g = null), _r === v.value && (document.removeEventListener("mouseup", $, bn), _r = null), yr === v.value && (document.removeEventListener("keyup", $, true), (_a3 = v.value) == null ? void 0 : _a3.removeEventListener("blur", $, bn), yr = null), (_b2 = v.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function A(T) {
    Ke(T), T.qSkipRipple = true;
  }
  return We(() => {
    M(true);
  }), Object.assign(o, { click: (T) => {
    f.value === true && B(T);
  } }), () => {
    let T = [];
    e.icon !== void 0 && T.push(h(tt, { name: e.icon, left: e.stack !== true && x.value === true, role: "img" })), x.value === true && T.push(h("span", { class: "block" }, [e.label])), T = At(t.default, T), e.iconRight !== void 0 && e.round === false && T.push(h(tt, { name: e.iconRight, right: e.stack !== true && x.value === true, role: "img" }));
    const z = [h("span", { class: "q-focus-helper", ref: u })];
    return e.loading === true && e.percentage !== void 0 && z.push(h("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [h("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), z.push(h("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + a.value }, T)), e.loading !== null && z.push(h($t, { name: "q-transition--fade" }, () => e.loading === true ? [h("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [h(Tn)])] : null)), hn(h(d.value, q.value, z), [[Ul, _.value, void 0, p.value]]);
  };
} }), Im = ge({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = m(() => {
    const o = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((r) => e[r] === true).map((r) => `q-btn-group--${r}`).join(" ");
    return `q-btn-group row no-wrap${o.length !== 0 ? " " + o : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => h("div", { class: n.value }, Pe(t.default));
} });
function Pn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), hm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var Nm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, zm = { ...Nm, contextMenu: Boolean };
function yc({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: o, proxy: r, emit: i } = xe(), a = H(null);
  let l = null;
  function s(u) {
    return a.value === null ? false : u === void 0 || u.touches === void 0 || u.touches.length <= 1;
  }
  const d = {};
  n === void 0 && (Object.assign(d, { hide(u) {
    r.hide(u);
  }, toggle(u) {
    r.toggle(u), u.qAnchorHandled = true;
  }, toggleKey(u) {
    Cn(u, 13) === true && d.toggle(u);
  }, contextClick(u) {
    r.hide(u), Nt(u), Qe(() => {
      r.show(u), u.qAnchorHandled = true;
    });
  }, prevent: Nt, mobileTouch(u) {
    if (d.mobileCleanup(u), s(u) !== true) return;
    r.hide(u), a.value.classList.add("non-selectable");
    const g = u.target;
    Et(d, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [a.value, "contextmenu", "prevent", "notPassive"]]), l = setTimeout(() => {
      l = null, r.show(u), u.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(u) {
    a.value.classList.remove("non-selectable"), l !== null && (clearTimeout(l), l = null), e.value === true && u !== void 0 && Pn();
  } }), n = function(u = o.contextMenu) {
    if (o.noParentEvent === true || a.value === null) return;
    let g;
    u === true ? r.$q.platform.is.mobile === true ? g = [[a.value, "touchstart", "mobileTouch", "passive"]] : g = [[a.value, "mousedown", "hide", "passive"], [a.value, "contextmenu", "contextClick", "notPassive"]] : g = [[a.value, "click", "toggle", "passive"], [a.value, "keyup", "toggleKey", "passive"]], Et(d, "anchor", g);
  });
  function c() {
    Zt(d, "anchor");
  }
  function f(u) {
    for (a.value = u; a.value.classList.contains("q-anchor--skip"); ) a.value = a.value.parentNode;
    n();
  }
  function v() {
    if (o.target === false || o.target === "" || r.$el.parentNode === null) a.value = null;
    else if (o.target === true) f(r.$el.parentNode);
    else {
      let u = o.target;
      if (typeof o.target == "string") try {
        u = document.querySelector(o.target);
      } catch {
        u = void 0;
      }
      u != null ? (a.value = u.$el || u, n()) : (a.value = null, console.error(`Anchor: target "${o.target}" not found`));
    }
  }
  return me(() => o.contextMenu, (u) => {
    a.value !== null && (c(), n(u));
  }), me(() => o.target, () => {
    a.value !== null && c(), v();
  }), me(() => o.noParentEvent, (u) => {
    a.value !== null && (u === true ? c() : n());
  }), st(() => {
    v(), t !== true && o.modelValue === true && a.value === null && i("update:modelValue", false);
  }), We(() => {
    l !== null && clearTimeout(l), c();
  }), { anchorEl: a, canShow: s, anchorEvents: d };
}
function Hm(e, t) {
  const n = H(null);
  let o;
  function r(l, s) {
    const d = `${s !== void 0 ? "add" : "remove"}EventListener`, c = s !== void 0 ? s : o;
    l !== window && l[d]("scroll", c, ht.passive), window[d]("scroll", c, ht.passive), o = s;
  }
  function i() {
    n.value !== null && (r(n.value), n.value = null);
  }
  const a = me(() => e.noParentEvent, () => {
    n.value !== null && (i(), t());
  });
  return We(a), { localScrollTarget: n, unconfigureScrollTarget: i, changeScrollEvent: r };
}
var Wr = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Yr = ["beforeShow", "show", "beforeHide", "hide"];
function Gr({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: o, handleHide: r, processOnMount: i }) {
  const a = xe(), { props: l, emit: s, proxy: d } = a;
  let c;
  function f(_) {
    e.value === true ? g(_) : v(_);
  }
  function v(_) {
    if (l.disable === true || (_ == null ? void 0 : _.qAnchorHandled) === true || t !== void 0 && t(_) !== true) return;
    const p = l["onUpdate:modelValue"] !== void 0;
    p === true && (s("update:modelValue", true), c = _, Qe(() => {
      c === _ && (c = void 0);
    })), (l.modelValue === null || p === false) && u(_);
  }
  function u(_) {
    e.value !== true && (e.value = true, s("beforeShow", _), o !== void 0 ? o(_) : s("show", _));
  }
  function g(_) {
    if (l.disable === true) return;
    const p = l["onUpdate:modelValue"] !== void 0;
    p === true && (s("update:modelValue", false), c = _, Qe(() => {
      c === _ && (c = void 0);
    })), (l.modelValue === null || p === false) && y(_);
  }
  function y(_) {
    e.value !== false && (e.value = false, s("beforeHide", _), r !== void 0 ? r(_) : s("hide", _));
  }
  function w(_) {
    l.disable === true && _ === true ? l["onUpdate:modelValue"] !== void 0 && s("update:modelValue", false) : _ === true !== e.value && (_ === true ? u : y)(c);
  }
  me(() => l.modelValue, w), n !== void 0 && gc(a) === true && me(() => d.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), i === true && st(() => {
    w(l.modelValue);
  });
  const x = { show: v, hide: g, toggle: f };
  return Object.assign(d, x), x;
}
var Zo = [], Zi = [];
function jm(e) {
  Zi = Zi.filter((t) => t !== e);
}
function p1(e) {
  jm(e), Zi.push(e);
}
function Wd(e) {
  jm(e), Zi.length === 0 && Zo.length !== 0 && (Zo[Zo.length - 1](), Zo = []);
}
function Xr(e) {
  Zi.length === 0 ? e() : Zo.push(e);
}
function y1(e) {
  Zo = Zo.filter((t) => t !== e);
}
var Or = [], Fi = [], _1 = 1, _o = document.body;
function fa(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${_1++}` : e, dl.globalNodes !== void 0) {
    const o = dl.globalNodes.class;
    o !== void 0 && (n.className = o);
  }
  return _o.appendChild(n), Or.push(n), Fi.push(t), n;
}
function _c(e) {
  const t = Or.indexOf(e);
  Or.splice(t, 1), Fi.splice(t, 1), e.remove();
}
function w1(e) {
  if (e === _o) return;
  if (_o = e, _o === document.body || Fi.reduce((n, o) => o === "dialog" ? n + 1 : n, 0) < 2) {
    Or.forEach((n) => {
      n.contains(_o) === false && _o.appendChild(n);
    });
    return;
  }
  const t = Fi.lastIndexOf("dialog");
  for (let n = 0; n < Or.length; n++) {
    const o = Or[n];
    (n === t || Fi[n] !== "dialog") && o.contains(_o) === false && _o.appendChild(o);
  }
}
var Vr = [];
function x1(e) {
  return Vr.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Um(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true) return Ha(e);
    } else if (e.__qPortal === true) {
      const n = Ha(e);
      return (n == null ? void 0 : n.$options.name) === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Ha(e);
  } while (e != null);
}
function C1(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Um(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Ha(e);
  }
}
var S1 = ge({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function T1(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function wc(e, t, n, o) {
  const r = H(false), i = H(false);
  let a = null;
  const l = {}, s = o === "dialog" && T1(e);
  function d(f) {
    if (f === true) {
      Wd(l), i.value = true;
      return;
    }
    i.value = false, r.value === false && (s === false && a === null && (a = fa(false, o)), r.value = true, Vr.push(e.proxy), p1(l));
  }
  function c(f) {
    if (i.value = false, f !== true) return;
    Wd(l), r.value = false;
    const v = Vr.indexOf(e.proxy);
    v !== -1 && Vr.splice(v, 1), a !== null && (_c(a), a = null);
  }
  return sa(() => {
    c(true);
  }), e.proxy.__qPortal = true, It(e.proxy, "contentEl", () => t.value), { showPortal: d, hidePortal: c, portalIsActive: r, portalIsAccessible: i, renderPortal: () => s === true ? n() : r.value === true ? [h(Gb, { to: a }, h(S1, n))] : void 0 };
}
var nr = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function Ql(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: m(() => {
    const o = `q-transition--${e.transitionShow || t()}`, r = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${o}-enter-from`, enterActiveClass: `${o}-enter-active`, enterToClass: `${o}-enter-to`, leaveFromClass: `${r}-leave-from`, leaveActiveClass: `${r}-leave-active`, leaveToClass: `${r}-leave-to` };
  }), transitionStyle: m(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function Fr() {
  let e;
  const t = xe();
  function n() {
    e = void 0;
  }
  return Hn(n), We(n), { removeTick: n, registerTick(o) {
    e = o, Qe(() => {
      e === o && (Ao(t) === false && e(), e = void 0);
    });
  } };
}
function io() {
  let e = null;
  const t = xe();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Hn(n), We(n), { removeTimeout: n, registerTimeout(o, r) {
    n(), Ao(t) === false && (e = setTimeout(() => {
      e = null, o();
    }, r));
  } };
}
var mr = [Element, String], k1 = [null, document, document.body, document.scrollingElement, document.documentElement];
function jn(e, t) {
  let n = f1(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return k1.includes(n) ? window : n;
}
function xa(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function Lo(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Kl(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Qm(e, t, n = 0) {
  const o = arguments[3] === void 0 ? performance.now() : arguments[3], r = Lo(e);
  if (n <= 0) {
    r !== t && Mu(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const a = i - o, l = r + (t - r) / Math.max(a, n) * a;
    Mu(e, l), l !== t && Qm(e, t, n - a, i);
  });
}
function Km(e, t, n = 0) {
  const o = arguments[3] === void 0 ? performance.now() : arguments[3], r = Kl(e);
  if (n <= 0) {
    r !== t && qu(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const a = i - o, l = r + (t - r) / Math.max(a, n) * a;
    qu(e, l), l !== t && Km(e, t, n - a, i);
  });
}
function Mu(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function qu(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function $r(e, t, n) {
  if (n) {
    Qm(e, t, n);
    return;
  }
  Mu(e, t);
}
function xs(e, t, n) {
  if (n) {
    Km(e, t, n);
    return;
  }
  qu(e, t);
}
var Ca;
function ja() {
  if (Ca !== void 0) return Ca;
  const e = document.createElement("p"), t = document.createElement("div");
  ku(e, { width: "100%", height: "200px" }), ku(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let o = e.offsetWidth;
  return n === o && (o = t.clientWidth), t.remove(), Ca = n - o, Ca;
}
function M1(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var or = [], Hr;
function q1(e) {
  Hr = e.keyCode === 27;
}
function E1() {
  Hr === true && (Hr = false);
}
function A1(e) {
  Hr === true && (Hr = false, Cn(e, 27) === true && or[or.length - 1](e));
}
function Wm(e) {
  window[e]("keydown", q1), window[e]("blur", E1), window[e]("keyup", A1), Hr = false;
}
function Ym(e) {
  ze.is.desktop === true && (or.push(e), or.length === 1 && Wm("addEventListener"));
}
function gl(e) {
  const t = or.indexOf(e);
  t !== -1 && (or.splice(t, 1), or.length === 0 && Wm("removeEventListener"));
}
var rr = [];
function Gm(e) {
  rr[rr.length - 1](e);
}
function Xm(e) {
  ze.is.desktop === true && (rr.push(e), rr.length === 1 && document.body.addEventListener("focusin", Gm));
}
function Eu(e) {
  const t = rr.indexOf(e);
  t !== -1 && (rr.splice(t, 1), rr.length === 0 && document.body.removeEventListener("focusin", Gm));
}
var { notPassiveCapture: bl } = ht, ir = [];
function pl(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = Vr.length - 1;
  for (; n >= 0; ) {
    const o = Vr[n].$;
    if (o.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (o.type.name !== "QDialog") break;
    if (o.props.seamless !== true) return;
    n--;
  }
  for (let o = ir.length - 1; o >= 0; o--) {
    const r = ir[o];
    if ((r.anchorEl.value === null || r.anchorEl.value.contains(t) === false) && (t === document.body || r.innerRef.value !== null && r.innerRef.value.contains(t) === false)) e.qClickOutside = true, r.onClickOutside(e);
    else return;
  }
}
function Jm(e) {
  ir.push(e), ir.length === 1 && (document.addEventListener("mousedown", pl, bl), document.addEventListener("touchstart", pl, bl));
}
function yl(e) {
  const t = ir.findIndex((n) => n === e);
  t !== -1 && (ir.splice(t, 1), ir.length === 0 && (document.removeEventListener("mousedown", pl, bl), document.removeEventListener("touchstart", pl, bl)));
}
var Yd, Gd;
function _l(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Zm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Au = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Au[`${e}#ltr`] = e, Au[`${e}#rtl`] = e;
});
function wl(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Au[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function L1(e, t) {
  let { top: n, left: o, right: r, bottom: i, width: a, height: l } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], o -= t[0], i += t[1], r += t[0], a += t[0], l += t[1]), { top: n, bottom: i, height: l, left: o, right: r, width: a, middle: o + (r - o) / 2, center: n + (i - n) / 2 };
}
function B1(e, t, n) {
  let { top: o, left: r } = e.getBoundingClientRect();
  return o += t.top, r += t.left, n !== void 0 && (o += n[1], r += n[0]), { top: o, bottom: o + 1, height: 1, left: r, right: r + 1, width: 1, middle: r, center: o };
}
function R1(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Xd(e, t, n, o) {
  return { top: e[n.vertical] - t[o.vertical], left: e[n.horizontal] - t[o.horizontal] };
}
function xc(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      xc(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: o, anchorEl: r, anchorOrigin: i, selfOrigin: a, absoluteOffset: l, fit: s, cover: d, maxHeight: c, maxWidth: f } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const q = document.body.style, { offsetLeft: B, offsetTop: V } = window.visualViewport;
    B !== Yd && (q.setProperty("--q-pe-left", B + "px"), Yd = B), V !== Gd && (q.setProperty("--q-pe-top", V + "px"), Gd = V);
  }
  const { scrollLeft: v, scrollTop: u } = n, g = l === void 0 ? L1(r, d === true ? [0, 0] : o) : B1(r, l, o);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: c, visibility: "visible" });
  const { offsetWidth: y, offsetHeight: w } = n, { elWidth: x, elHeight: _ } = s === true || d === true ? { elWidth: Math.max(g.width, y), elHeight: d === true ? Math.max(g.height, w) : w } : { elWidth: y, elHeight: w };
  let p = { maxWidth: f, maxHeight: c };
  (s === true || d === true) && (p.minWidth = g.width + "px", d === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = R1(x, _);
  let C = Xd(g, b, i, a);
  if (l === void 0 || o === void 0) Cs(C, g, b, i, a);
  else {
    const { top: q, left: B } = C;
    Cs(C, g, b, i, a);
    let V = false;
    if (C.top !== q) {
      V = true;
      const R = 2 * o[1];
      g.center = g.top -= R, g.bottom -= R + 2;
    }
    if (C.left !== B) {
      V = true;
      const R = 2 * o[0];
      g.middle = g.left -= R, g.right -= R + 2;
    }
    V === true && (C = Xd(g, b, i, a), Cs(C, g, b, i, a));
  }
  p = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (p.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (p.minHeight = p.maxHeight)), C.maxWidth !== void 0 && (p.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== u && (n.scrollTop = u), n.scrollLeft !== v && (n.scrollLeft = v);
}
function Cs(e, t, n, o, r) {
  const i = n.bottom, a = n.right, l = ja(), s = window.innerHeight - l, d = document.body.clientWidth;
  if (e.top < 0 || e.top + i > s) if (r.vertical === "center") e.top = t[o.vertical] > s / 2 ? Math.max(0, s - i) : 0, e.maxHeight = Math.min(i, s);
  else if (t[o.vertical] > s / 2) {
    const c = Math.min(s, o.vertical === "center" ? t.center : o.vertical === r.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(i, c), e.top = Math.max(0, c - i);
  } else e.top = Math.max(0, o.vertical === "center" ? t.center : o.vertical === r.vertical ? t.top : t.bottom), e.maxHeight = Math.min(i, s - e.top);
  if (e.left < 0 || e.left + a > d) if (e.maxWidth = Math.min(a, d), r.horizontal === "middle") e.left = t[o.horizontal] > d / 2 ? Math.max(0, d - a) : 0;
  else if (t[o.horizontal] > d / 2) {
    const c = Math.min(d, o.horizontal === "middle" ? t.middle : o.horizontal === r.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(a, c), e.left = Math.max(0, c - e.maxWidth);
  } else e.left = Math.max(0, o.horizontal === "middle" ? t.middle : o.horizontal === r.horizontal ? t.left : t.right), e.maxWidth = Math.min(a, d - e.left);
}
var Wl = ge({ name: "QMenu", inheritAttrs: false, props: { ...zm, ...Wr, ...ot, ...nr, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: _l }, self: { type: String, validator: _l }, offset: { type: Array, validator: Zm }, scrollTarget: mr, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Yr, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: o }) {
  let r = null, i, a, l;
  const s = xe(), { proxy: d } = s, { $q: c } = d, f = H(null), v = H(false), u = m(() => e.persistent !== true && e.noRouteDismiss !== true), g = rt(e, c), { registerTick: y, removeTick: w } = Fr(), { registerTimeout: x } = io(), { transitionProps: _, transitionStyle: p } = Ql(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: q } = Hm(e, ne), { anchorEl: B, canShow: V } = yc({ showing: v }), { hide: R } = Gr({ showing: v, canShow: V, handleShow: ye, handleHide: Y, hideOnRouteChange: u, processOnMount: true }), { showPortal: D, hidePortal: $, renderPortal: M } = wc(s, f, te, "menu"), A = { anchorEl: B, innerRef: f, onClickOutside(k) {
    if (e.persistent !== true && v.value === true) return R(k), (k.type === "touchstart" || k.target.classList.contains("q-dialog__backdrop")) && Ke(k), true;
  } }, T = m(() => wl(e.anchor || (e.cover === true ? "center middle" : "bottom start"), c.lang.rtl)), z = m(() => e.cover === true ? T.value : wl(e.self || "top start", c.lang.rtl)), U = m(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), j = m(() => e.autoClose === true ? { onClick: G } : {}), K = m(() => v.value === true && e.persistent !== true);
  me(K, (k) => {
    k === true ? (Ym(O), Jm(A)) : (gl(O), yl(A));
  });
  function ie() {
    Xr(() => {
      let k = f.value;
      k && k.contains(document.activeElement) !== true && (k = k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || k.querySelector("[autofocus], [data-autofocus]") || k, k.focus({ preventScroll: true }));
    });
  }
  function ye(k) {
    if (r = e.noRefocus === false ? document.activeElement : null, Xm(be), D(), ne(), i = void 0, k !== void 0 && (e.touchPosition || e.contextMenu)) {
      const F = an(k);
      if (F.left !== void 0) {
        const { top: ee, left: S } = B.value.getBoundingClientRect();
        i = { left: F.left - S, top: F.top - ee };
      }
    }
    a === void 0 && (a = me(() => c.screen.width + "|" + c.screen.height + "|" + e.self + "|" + e.anchor + "|" + c.lang.rtl, P)), e.noFocus !== true && document.activeElement.blur(), y(() => {
      P(), e.noFocus !== true && ie();
    }), x(() => {
      c.platform.is.ios === true && (l = e.autoClose, f.value.click()), P(), D(true), n("show", k);
    }, e.transitionDuration);
  }
  function Y(k) {
    w(), $(), L(true), r !== null && (k === void 0 || k.qClickOutside !== true) && ((((k == null ? void 0 : k.type.indexOf("key")) === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), x(() => {
      $(true), n("hide", k);
    }, e.transitionDuration);
  }
  function L(k) {
    i = void 0, a !== void 0 && (a(), a = void 0), (k === true || v.value === true) && (Eu(be), q(), yl(A), gl(O)), k !== true && (r = null);
  }
  function ne() {
    (B.value !== null || e.scrollTarget !== void 0) && (b.value = jn(B.value, e.scrollTarget), C(b.value, P));
  }
  function G(k) {
    l !== true ? (Um(d, k), n("click", k)) : l = false;
  }
  function be(k) {
    K.value === true && e.noFocus !== true && Om(f.value, k.target) !== true && ie();
  }
  function O(k) {
    e.noEscDismiss !== true && (n("escapeKey"), R(k));
  }
  function P() {
    xc({ targetEl: f.value, offset: e.offset, anchorEl: B.value, anchorOrigin: T.value, selfOrigin: z.value, absoluteOffset: i, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function te() {
    return h($t, _.value, () => v.value === true ? h("div", { role: "menu", ...o, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + U.value, o.class], style: [o.style, p.value], ...j.value }, Pe(t.default)) : null);
  }
  return We(L), Object.assign(d, { focus: ie, updatePosition: P }), M;
} }), Ss, Sa = 0, Qt = new Array(256);
for (let e = 0; e < 256; e++) Qt[e] = (e + 256).toString(16).substring(1);
var P1 = (() => {
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
    for (let o = t; o > 0; o--) n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), Jd = 4096;
function ea() {
  (Ss === void 0 || Sa + 16 > Jd) && (Sa = 0, Ss = P1(Jd));
  const e = Array.prototype.slice.call(Ss, Sa, Sa += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Qt[e[0]] + Qt[e[1]] + Qt[e[2]] + Qt[e[3]] + "-" + Qt[e[4]] + Qt[e[5]] + "-" + Qt[e[6]] + Qt[e[7]] + "-" + Qt[e[8]] + Qt[e[9]] + "-" + Qt[e[10]] + Qt[e[11]] + Qt[e[12]] + Qt[e[13]] + Qt[e[14]] + Qt[e[15]];
}
function D1(e) {
  return e ?? null;
}
function Zd(e, t) {
  return e ?? (t === true ? `f_${ea()}` : null);
}
function Yl({ getValue: e, required: t = true } = {}) {
  if (un.value === true) {
    const n = H(e !== void 0 ? D1(e()) : null);
    return t === true && n.value === null && st(() => {
      n.value = `f_${ea()}`;
    }), e !== void 0 && me(e, (o) => {
      n.value = Zd(o, t);
    }), n;
  }
  return e !== void 0 ? m(() => Zd(e(), t)) : H(`f_${ea()}`);
}
var O1 = Object.keys(pc);
function V1(e) {
  return O1.reduce((t, n) => {
    const o = e[n];
    return o !== void 0 && (t[n] = o), t;
  }, {});
}
var F1 = ge({ name: "QBtnDropdown", props: { ...pc, ...nr, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), r = H(e.modelValue), i = H(null), a = Yl(), l = m(() => {
    const b = { "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, "aria-label": e.toggleAriaLabel || o.$q.lang.label[r.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), s = m(() => "q-btn-dropdown__arrow" + (r.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), d = m(() => $m(e)), c = m(() => V1(e));
  me(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), me(() => e.split, p);
  function f(b) {
    r.value = true, n("beforeShow", b);
  }
  function v(b) {
    n("show", b), n("update:modelValue", true);
  }
  function u(b) {
    r.value = false, n("beforeHide", b);
  }
  function g(b) {
    n("hide", b), n("update:modelValue", false);
  }
  function y(b) {
    n("click", b);
  }
  function w(b) {
    St(b), p(), n("click", b);
  }
  function x(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.toggle(b);
  }
  function _(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.show(b);
  }
  function p(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.hide(b);
  }
  return Object.assign(o, { show: _, hide: p, toggle: x }), st(() => {
    e.modelValue === true && _();
  }), () => {
    const b = [h(tt, { class: s.value, name: e.dropdownIcon || o.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(h(Wl, { ref: i, id: a.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: v, onBeforeHide: u, onHide: g }, t.default)), e.split === false ? h(et, { class: "q-btn-dropdown q-btn-dropdown--simple", ...c.value, ...l.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: y }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : h(Im, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...d.value, glossy: e.glossy, stretch: e.stretch }, () => [h(et, { class: "q-btn-dropdown--current", ...c.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), h(et, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...l.value, ...d.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), kn = { name: String };
function va(e) {
  return m(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Fo(e = {}) {
  return (t, n, o) => {
    t[n](h("input", { class: "hidden" + (o || ""), ...e.value }));
  };
}
function Cc(e) {
  return m(() => e.name || e.for);
}
ge({ name: "QBtnToggle", props: { ...kn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const o = m(() => e.options.find((v) => v.value === e.modelValue) !== void 0), r = m(() => ({ type: "hidden", name: e.name, value: e.modelValue })), i = Fo(r), a = m(() => $m(e)), l = m(() => ({ rounded: e.rounded, dense: e.dense, ...a.value })), s = m(() => e.options.map((v, u) => {
    const { attrs: g, value: y, slot: w, ...x } = v;
    return { slot: w, props: { key: u, "aria-pressed": y === e.modelValue ? "true" : "false", ...g, ...x, ...l.value, disable: e.disable === true || x.disable === true, color: y === e.modelValue ? c(x, "toggleColor") : c(x, "color"), textColor: y === e.modelValue ? c(x, "toggleTextColor") : c(x, "textColor"), noCaps: c(x, "noCaps") === true, noWrap: c(x, "noWrap") === true, size: c(x, "size"), padding: c(x, "padding"), ripple: c(x, "ripple"), stack: c(x, "stack") === true, stretch: c(x, "stretch") === true, onClick(_) {
      d(y, v, _);
    } } };
  }));
  function d(v, u, g) {
    e.readonly !== true && (e.modelValue === v ? e.clearable === true && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", v, u), n("click", g));
  }
  function c(v, u) {
    return v[u] === void 0 ? e[u] : v[u];
  }
  function f() {
    const v = s.value.map((u) => h(et, u.props, u.slot !== void 0 ? t[u.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && o.value === true && i(v, "push"), At(t.default, v);
  }
  return () => h(Im, { class: "q-btn-toggle", ...a.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var eg = ge({ name: "QCard", props: { ...ot, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = rt(e, n), r = m(() => "q-card" + (o.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => h(e.tag, { class: r.value }, Pe(t.default));
} }), Jo = ge({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = m(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => h(e.tag, { class: n.value }, Pe(t.default));
} }), $1 = ge({ name: "QCardActions", props: { ...vc, vertical: Boolean }, setup(e, { slots: t }) {
  const n = hc(e), o = m(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => h("div", { class: o.value }, Pe(t.default));
} }), Sc = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, I1 = Object.keys(Sc);
Sc.all = true;
function xl(e) {
  const t = {};
  for (const n of I1) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Sc : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var N1 = ["INPUT", "TEXTAREA"];
function Cl(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && N1.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function z1(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, o) => {
    const r = parseFloat(n);
    r && (t[o] = r);
  }), t;
}
var H1 = Vn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: o }) {
  if (o.mouse !== true && ze.has.touch !== true) return;
  const r = o.mouseCapture === true ? "Capture" : "", i = { handler: t, sensitivity: z1(n), direction: xl(o), noop: Tt, mouseStart(a) {
    Cl(a, i) && Nl(a) && (Et(i, "temp", [[document, "mousemove", "move", `notPassive${r}`], [document, "mouseup", "end", "notPassiveCapture"]]), i.start(a, true));
  }, touchStart(a) {
    if (Cl(a, i)) {
      const l = a.target;
      Et(i, "temp", [[l, "touchmove", "move", "notPassiveCapture"], [l, "touchcancel", "end", "notPassiveCapture"], [l, "touchend", "end", "notPassiveCapture"]]), i.start(a);
    }
  }, start(a, l) {
    ze.is.firefox === true && Dr(e, true);
    const s = an(a);
    i.event = { x: s.left, y: s.top, time: Date.now(), mouse: l === true, dir: false };
  }, move(a) {
    if (i.event === void 0) return;
    if (i.event.dir !== false) {
      Ke(a);
      return;
    }
    const l = Date.now() - i.event.time;
    if (l === 0) return;
    const s = an(a), d = s.left - i.event.x, c = Math.abs(d), f = s.top - i.event.y, v = Math.abs(f);
    if (i.event.mouse !== true) {
      if (c < i.sensitivity[1] && v < i.sensitivity[1]) {
        i.end(a);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      i.end(a);
      return;
    } else if (c < i.sensitivity[2] && v < i.sensitivity[2]) return;
    const u = c / l, g = v / l;
    i.direction.vertical === true && c < v && c < 100 && g > i.sensitivity[0] && (i.event.dir = f < 0 ? "up" : "down"), i.direction.horizontal === true && c > v && v < 100 && u > i.sensitivity[0] && (i.event.dir = d < 0 ? "left" : "right"), i.direction.up === true && c < v && f < 0 && c < 100 && g > i.sensitivity[0] && (i.event.dir = "up"), i.direction.down === true && c < v && f > 0 && c < 100 && g > i.sensitivity[0] && (i.event.dir = "down"), i.direction.left === true && c > v && d < 0 && v < 100 && u > i.sensitivity[0] && (i.event.dir = "left"), i.direction.right === true && c > v && d > 0 && v < 100 && u > i.sensitivity[0] && (i.event.dir = "right"), i.event.dir !== false ? (Ke(a), i.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Pn(), i.styleCleanup = (y) => {
      i.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      y === true ? setTimeout(w, 50) : w();
    }), i.handler({ evt: a, touch: i.event.mouse !== true, mouse: i.event.mouse, direction: i.event.dir, duration: l, distance: { x: c, y: v } })) : i.end(a);
  }, end(a) {
    var _a3;
    i.event !== void 0 && (Zt(i, "temp"), ze.is.firefox === true && Dr(e, false), (_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), a !== void 0 && i.event.dir !== false && Ke(a), i.event = void 0);
  } };
  if (e.__qtouchswipe = i, o.mouse === true) {
    const a = o.mouseCapture === true || o.mousecapture === true ? "Capture" : "";
    Et(i, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  ze.has.touch === true && Et(i, "main", [[e, "touchstart", "touchStart", `passive${o.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = xl(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Zt(t, "main"), Zt(t, "temp"), ze.is.firefox === true && Dr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
} });
function ha() {
  let e = /* @__PURE__ */ Object.create(null);
  return { getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t], setCache(t, n) {
    e[t] = n;
  }, hasCache(t) {
    return Object.hasOwnProperty.call(e, t);
  }, clearCache(t) {
    t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
  } };
}
var Tc = { name: { required: true }, disable: Boolean }, ef = { setup(e, { slots: t }) {
  return () => h("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, kc = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Mc = ["update:modelValue", "beforeTransition", "transition"];
function qc() {
  const { props: e, emit: t, proxy: n } = xe(), { getCache: o } = ha(), { registerTimeout: r } = io();
  let i, a;
  const l = H(null), s = { value: null };
  function d(T) {
    const z = e.vertical === true ? "up" : "left";
    V((n.$q.lang.rtl === true ? -1 : 1) * (T.direction === z ? 1 : -1));
  }
  const c = m(() => [[H1, d, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = m(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), v = m(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), u = m(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = m(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), y = m(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = m(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  me(() => e.modelValue, (T, z) => {
    const U = b(T) === true ? C(T) : -1;
    a !== true && B(U === -1 ? 0 : U < C(z) ? -1 : 1), s.value !== U && (s.value = U, t("beforeTransition", T, z), r(() => {
      t("transition", T, z);
    }, e.transitionDuration));
  });
  function x() {
    V(1);
  }
  function _() {
    V(-1);
  }
  function p(T) {
    t("update:modelValue", T);
  }
  function b(T) {
    return T != null && T !== "";
  }
  function C(T) {
    return i.findIndex((z) => z.props.name === T && z.props.disable !== "" && z.props.disable !== true);
  }
  function q() {
    return i.filter((T) => T.props.disable !== "" && T.props.disable !== true);
  }
  function B(T) {
    const z = T !== 0 && e.animated === true && s.value !== -1 ? "q-transition--" + (T === -1 ? f.value : v.value) : null;
    l.value !== z && (l.value = z);
  }
  function V(T, z = s.value) {
    let U = z + T;
    for (; U !== -1 && U < i.length; ) {
      const j = i[U];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== true) {
        B(T), a = true, t("update:modelValue", j.props.name), setTimeout(() => {
          a = false;
        });
        return;
      }
      U += T;
    }
    e.infinite === true && i.length !== 0 && z !== -1 && z !== i.length && V(T, T === -1 ? i.length : -1);
  }
  function R() {
    const T = C(e.modelValue);
    return s.value !== T && (s.value = T), true;
  }
  function D() {
    const T = b(e.modelValue) === true && R() && i[s.value];
    return e.keepAlive === true ? [h(Lh, y.value, [h(w.value === true ? o(g.value, () => ({ ...ef, name: g.value })) : ef, { key: g.value, style: u.value }, () => T)])] : [h("div", { class: "q-panel scroll", style: u.value, key: g.value, role: "tabpanel" }, [T])];
  }
  function $() {
    if (i.length !== 0) return e.animated === true ? [h($t, { name: l.value }, D)] : D();
  }
  function M(T) {
    return i = mc(Pe(T.default, [])).filter((z) => z.props !== null && z.props.slot === void 0 && b(z.props.name) === true), i.length;
  }
  function A() {
    return i;
  }
  return Object.assign(n, { next: x, previous: _, goTo: p }), { panelIndex: s, panelDirectives: c, updatePanelsList: M, updatePanelIndex: R, getPanelContent: $, getEnabledPanels: q, getPanels: A, isValidPanelName: b, keepAliveProps: y, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: V, goToPanel: p, nextPanel: x, previousPanel: _ };
}
var ti = 0, Ec = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ac = ["update:fullscreen", "fullscreen"];
function Lc() {
  const e = xe(), { props: t, emit: n, proxy: o } = e;
  let r, i, a;
  const l = H(false);
  gc(e) === true && me(() => o.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && c();
  }), me(() => t.fullscreen, (f) => {
    l.value !== f && s();
  }), me(l, (f) => {
    n("update:fullscreen", f), n("fullscreen", f);
  });
  function s() {
    l.value === true ? c() : d();
  }
  function d() {
    l.value !== true && (l.value = true, a = o.$el.parentNode, a.replaceChild(i, o.$el), document.body.appendChild(o.$el), ti++, ti === 1 && document.body.classList.add("q-body--fullscreen-mixin"), r = { handler: c }, Xi.add(r));
  }
  function c() {
    l.value === true && (r !== void 0 && (Xi.remove(r), r = void 0), a.replaceChild(o.$el, i), l.value = false, ti = Math.max(0, ti - 1), ti === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), o.$el.scrollIntoView !== void 0 && setTimeout(() => {
      o.$el.scrollIntoView();
    })));
  }
  return Ol(() => {
    i = document.createElement("span");
  }), st(() => {
    t.fullscreen === true && d();
  }), We(c), Object.assign(o, { toggleFullscreen: s, setFullscreen: d, exitFullscreen: c }), { inFullscreen: l, toggleFullscreen: s };
}
var j1 = ["top", "right", "bottom", "left"], U1 = ["regular", "flat", "outline", "push", "unelevated"];
ge({ name: "QCarousel", props: { ...ot, ...kc, ...Ec, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => U1.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => j1.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ac, ...Mc], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = rt(e, n);
  let r = null, i;
  const { updatePanelsList: a, getPanelContent: l, panelDirectives: s, goToPanel: d, previousPanel: c, nextPanel: f, getEnabledPanels: v, panelIndex: u } = qc(), { inFullscreen: g } = Lc(), y = m(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = m(() => e.vertical === true ? "vertical" : "horizontal"), x = m(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), _ = m(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (o.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${x.value}` : "")), p = m(() => {
    const D = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? D.reverse() : D;
  }), b = m(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = m(() => e.navigationActiveIcon || b.value), q = m(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  me(() => e.modelValue, () => {
    e.autoplay && B();
  }), me(() => e.autoplay, (D) => {
    D ? B() : r !== null && (clearTimeout(r), r = null);
  });
  function B() {
    const D = Ji(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, D >= 0 ? f() : c();
    }, D);
  }
  st(() => {
    e.autoplay && B();
  }), We(() => {
    r !== null && clearTimeout(r);
  });
  function V(D, $) {
    return h("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${D} q-carousel__navigation--${x.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [h("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, v().map($))]);
  }
  function R() {
    const D = [];
    if (e.navigation === true) {
      const $ = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (A) => h(et, { key: "nav" + A.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${A.active === true ? "" : "in"}active`, ...A.btnProps, onClick: A.onClick }), M = i - 1;
      D.push(V("buttons", (A, T) => {
        const z = A.props.name, U = u.value === T;
        return $({ index: T, maxIndex: M, name: z, active: U, btnProps: { icon: U === true ? C.value : b.value, size: "sm", ...q.value }, onClick: () => {
          d(z);
        } });
      }));
    } else if (e.thumbnails === true) {
      const $ = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      D.push(V("thumbnails", (M) => {
        const A = M.props;
        return h("img", { key: "tmb#" + A.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${A.name === e.modelValue ? "" : "in"}active` + $, src: A.imgSrc || A["img-src"], onClick: () => {
          d(A.name);
        } });
      }));
    }
    return e.arrows === true && u.value >= 0 && ((e.infinite === true || u.value > 0) && D.push(h("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [h(et, { icon: p.value[0], ...q.value, onClick: c })])), (e.infinite === true || u.value < i - 1) && D.push(h("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [h(et, { icon: p.value[1], ...q.value, onClick: f })]))), At(t.control, D);
  }
  return () => (i = a(t), h("div", { class: _.value, style: y.value }, [Sn("div", { class: "q-carousel__slides-container" }, l(), "sl-cont", e.swipeable, () => s.value)].concat(R())));
} });
ge({ name: "QCarouselSlide", props: { ...Tc, imgSrc: String }, setup(e, { slots: t }) {
  const n = m(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => h("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
ge({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = m(() => `q-carousel__control absolute absolute-${e.position}`), o = m(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => h("div", { class: n.value, style: o.value }, Pe(t.default));
} });
ge({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = m(() => e.sent === true ? "sent" : "received"), o = m(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), r = m(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), i = m(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), a = m(() => e.size !== void 0 ? `col-${e.size}` : ""), l = m(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function s(c) {
    return t.stamp !== void 0 ? [c, h("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [c, h("div", { class: "q-message-stamp", [l.value.stamp]: e.stamp })] : [c];
  }
  function d(c, f) {
    const v = f === true ? c.length > 1 ? (u) => u : (u) => h("div", [u]) : (u) => h("div", { [l.value.msg]: u });
    return c.map((u, g) => h("div", { key: g, class: r.value }, [h("div", { class: o.value }, s(v(u)))]));
  }
  return () => {
    const c = [];
    t.avatar !== void 0 ? c.push(t.avatar()) : e.avatar !== void 0 && c.push(h("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(h("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(h("div", { class: `q-message-name q-message-name--${n.value}`, [l.value.name]: e.name })), t.default !== void 0 ? f.push(d(mc(t.default()), true)) : e.text !== void 0 && f.push(d(e.text)), c.push(h("div", { class: a.value }, f));
    const v = [];
    return t.label !== void 0 ? v.push(h("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && v.push(h("div", { class: "q-message-label", [l.value.label]: e.label })), v.push(h("div", { class: i.value }, c)), h("div", { class: `q-message q-message-${n.value}` }, v);
  };
} });
function tg(e, t) {
  const n = H(null), o = m(() => e.disable === true ? null : h("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function r(i) {
    const a = t.value;
    (i == null ? void 0 : i.qAvoidFocus) !== true && ((i == null ? void 0 : i.type.indexOf("key")) === 0 ? document.activeElement !== a && (a == null ? void 0 : a.contains(document.activeElement)) === true && a.focus() : n.value !== null && (i === void 0 || (a == null ? void 0 : a.contains(i.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: o, refocusTarget: r };
}
var ng = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, og = { ...ot, ...lo, ...kn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, rg = ["update:modelValue"];
function ig(e, t) {
  const { props: n, slots: o, emit: r, proxy: i } = xe(), { $q: a } = i, l = rt(n, a), s = H(null), { refocusTargetEl: d, refocusTarget: c } = tg(n, s), f = so(n, ng), v = m(() => n.val !== void 0 && Array.isArray(n.modelValue)), u = m(() => {
    const M = Je(n.val);
    return v.value === true ? n.modelValue.findIndex((A) => Je(A) === M) : -1;
  }), g = m(() => v.value === true ? u.value !== -1 : Je(n.modelValue) === Je(n.trueValue)), y = m(() => v.value === true ? u.value === -1 : Je(n.modelValue) === Je(n.falseValue)), w = m(() => g.value === false && y.value === false), x = m(() => n.disable === true ? -1 : n.tabindex || 0), _ = m(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (l.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = m(() => {
    const M = g.value === true ? "truthy" : y.value === true ? "falsy" : "indet", A = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : y.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${M}${A}`;
  }), b = m(() => {
    const M = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(M, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: v.value === true ? n.val : n.trueValue }), M;
  }), C = Fo(b), q = m(() => {
    const M = { tabindex: x.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (M["aria-disabled"] = "true"), M;
  });
  function B(M) {
    M !== void 0 && (Ke(M), c(M)), n.disable !== true && r("update:modelValue", V(), M);
  }
  function V() {
    if (v.value === true) {
      if (g.value === true) {
        const M = n.modelValue.slice();
        return M.splice(u.value, 1), M;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === true) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === false) return n.falseValue;
    } else if (y.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function R(M) {
    (M.keyCode === 13 || M.keyCode === 32) && Ke(M);
  }
  function D(M) {
    (M.keyCode === 13 || M.keyCode === 32) && B(M);
  }
  const $ = t(g, w);
  return Object.assign(i, { toggle: B }), () => {
    const M = $();
    n.disable !== true && C(M, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const A = [h("div", { class: p.value, style: f.value, "aria-hidden": "true" }, M)];
    d.value !== null && A.push(d.value);
    const T = n.label !== void 0 ? At(o.default, [n.label]) : Pe(o.default);
    return T !== void 0 && A.push(h("div", { class: `q-${e}__label q-anchor--skip` }, T)), h("div", { ref: s, class: _.value, ...q.value, onClick: B, onKeydown: R, onKeyup: D }, A);
  };
}
var Q1 = () => h("div", { key: "svg", class: "q-checkbox__bg absolute" }, [h("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [h("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), h("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), $i = ge({ name: "QCheckbox", props: og, emits: rg, setup(e) {
  const t = Q1();
  function n(o, r) {
    const i = m(() => (o.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => i.value !== null ? [h("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [h(tt, { class: "q-checkbox__icon", name: i.value })])] : [t];
  }
  return ig("checkbox", n);
} }), K1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, ag = ge({ name: "QChip", props: { ...ot, ...lo, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = rt(e, o), i = so(e, K1), a = m(() => e.selected === true || e.icon !== void 0), l = m(() => e.selected === true ? e.iconSelected || o.iconSet.chip.selected : e.icon), s = m(() => e.iconRemove || o.iconSet.chip.remove), d = m(() => e.disable === false && (e.clickable === true || e.selected !== null)), c = m(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (d.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (r.value === true ? " q-chip--dark q-dark" : "");
  }), f = m(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, x = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || o.lang.label.remove };
    return { chip: w, remove: x };
  });
  function v(w) {
    w.keyCode === 13 && u(w);
  }
  function u(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (Ke(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function y() {
    const w = [];
    d.value === true && w.push(h("div", { class: "q-focus-helper" })), a.value === true && w.push(h(tt, { class: "q-chip__icon q-chip__icon--left", name: l.value }));
    const x = e.label !== void 0 ? [h("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, fc(t.default, x))), e.iconRight && w.push(h(tt, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(h(tt, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: s.value, ...f.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: c.value, style: i.value };
    return d.value === true && Object.assign(w, f.value.chip, { onClick: u, onKeyup: v }), Sn("div", w, y(), "ripple", e.ripple !== false && e.disable !== true, () => [[Ul, e.ripple]]);
  };
} }), Bc = { ...lo, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Lu = 50, lg = 2 * Lu, sg = lg * Math.PI, W1 = Math.round(sg * 1e3) / 1e3, ug = ge({ name: "QCircularProgress", props: { ...Bc, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = so(e), r = m(() => {
    const u = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - u}deg)` : `rotate3d(0, 0, 1, ${u - 90}deg)` };
  }), i = m(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), a = m(() => lg / (1 - e.thickness / 2)), l = m(() => `${a.value / 2} ${a.value / 2} ${a.value} ${a.value}`), s = m(() => vt(e.value, e.min, e.max)), d = m(() => e.max - e.min), c = m(() => e.thickness / 2 * a.value), f = m(() => {
    const u = (e.max - s.value) / d.value, g = e.rounded === true && s.value < e.max && u < 0.25 ? c.value / 2 * (1 - u / 0.25) : 0;
    return sg * u + g;
  });
  function v({ thickness: u, offset: g, color: y, cls: w, rounded: x }) {
    return h("circle", { class: "q-circular-progress__" + w + (y !== void 0 ? ` text-${y}` : ""), style: i.value, fill: "transparent", stroke: "currentColor", "stroke-width": u, "stroke-dasharray": W1, "stroke-dashoffset": g, "stroke-linecap": x, cx: a.value, cy: a.value, r: Lu });
  }
  return () => {
    const u = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && u.push(h("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Lu - c.value / 2, cx: a.value, cy: a.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && u.push(v({ cls: "track", thickness: c.value, offset: 0, color: e.trackColor })), u.push(v({ cls: "circle", thickness: c.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [h("svg", { class: "q-circular-progress__svg", style: r.value, viewBox: l.value, "aria-hidden": "true" }, u)];
    return e.showValue === true && g.push(h("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [h("div", s.value)])), h("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: o.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : s.value }, fc(t.internal, g));
  };
} });
function Ts(e, t, n) {
  const o = an(e);
  let r, i = o.left - t.event.x, a = o.top - t.event.y, l = Math.abs(i), s = Math.abs(a);
  const d = t.direction;
  d.horizontal === true && d.vertical !== true ? r = i < 0 ? "left" : "right" : d.horizontal !== true && d.vertical === true ? r = a < 0 ? "up" : "down" : d.up === true && a < 0 ? (r = "up", l > s && (d.left === true && i < 0 ? r = "left" : d.right === true && i > 0 && (r = "right"))) : d.down === true && a > 0 ? (r = "down", l > s && (d.left === true && i < 0 ? r = "left" : d.right === true && i > 0 && (r = "right"))) : d.left === true && i < 0 ? (r = "left", l < s && (d.up === true && a < 0 ? r = "up" : d.down === true && a > 0 && (r = "down"))) : d.right === true && i > 0 && (r = "right", l < s && (d.up === true && a < 0 ? r = "up" : d.down === true && a > 0 && (r = "down")));
  let c = false;
  if (r === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    r = t.event.lastDir, c = true, r === "left" || r === "right" ? (o.left -= i, l = 0, i = 0) : (o.top -= a, s = 0, a = 0);
  }
  return { synthetic: c, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: o, direction: r, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: l, y: s }, offset: { x: i, y: a }, delta: { x: o.left - t.event.lastX, y: o.top - t.event.lastY } } };
}
var Y1 = 0, wn = Vn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function o(i, a) {
    n.mouse === true && a === true ? Ke(i) : (n.stop === true && St(i), n.prevent === true && Nt(i));
  }
  const r = { uid: "qvtp_" + Y1++, handler: t, modifiers: n, direction: xl(n), noop: Tt, mouseStart(i) {
    Cl(i, r) && Nl(i) && (Et(r, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), r.start(i, true));
  }, touchStart(i) {
    if (Cl(i, r)) {
      const a = i.target;
      Et(r, "temp", [[a, "touchmove", "move", "notPassiveCapture"], [a, "touchcancel", "end", "passiveCapture"], [a, "touchend", "end", "passiveCapture"]]), r.start(i);
    }
  }, start(i, a) {
    if (ze.is.firefox === true && Dr(e, true), r.lastEvt = i, a === true || n.stop === true) {
      if (r.direction.all !== true && (a !== true || r.modifiers.mouseAllDir !== true && r.modifiers.mousealldir !== true)) {
        const d = i.type.indexOf("mouse") !== -1 ? new MouseEvent(i.type, i) : new TouchEvent(i.type, i);
        i.defaultPrevented === true && Nt(d), i.cancelBubble === true && St(d), Object.assign(d, { qKeyEvent: i.qKeyEvent, qClickOutside: i.qClickOutside, qAnchorHandled: i.qAnchorHandled, qClonedBy: i.qClonedBy === void 0 ? [r.uid] : i.qClonedBy.concat(r.uid) }), r.initialEvent = { target: i.target, event: d };
      }
      St(i);
    }
    const { left: l, top: s } = an(i);
    r.event = { x: l, y: s, time: Date.now(), mouse: a === true, detected: false, isFirst: true, isFinal: false, lastX: l, lastY: s };
  }, move(i) {
    if (r.event === void 0) return;
    const a = an(i), l = a.left - r.event.x, s = a.top - r.event.y;
    if (l === 0 && s === 0) return;
    r.lastEvt = i;
    const d = r.event.mouse === true, c = () => {
      o(i, d);
      let u;
      n.preserveCursor !== true && n.preservecursor !== true && (u = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), d === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Pn(), r.styleCleanup = (g) => {
        if (r.styleCleanup = void 0, u !== void 0 && (document.documentElement.style.cursor = u), document.body.classList.remove("non-selectable"), d === true) {
          const y = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            y(), g();
          }, 50) : y();
        } else g !== void 0 && g();
      };
    };
    if (r.event.detected === true) {
      r.event.isFirst !== true && o(i, r.event.mouse);
      const { payload: u, synthetic: g } = Ts(i, r, false);
      u !== void 0 && (r.handler(u) === false ? r.end(i) : (r.styleCleanup === void 0 && r.event.isFirst === true && c(), r.event.lastX = u.position.left, r.event.lastY = u.position.top, r.event.lastDir = g === true ? void 0 : u.direction, r.event.isFirst = false));
      return;
    }
    if (r.direction.all === true || d === true && (r.modifiers.mouseAllDir === true || r.modifiers.mousealldir === true)) {
      c(), r.event.detected = true, r.move(i);
      return;
    }
    const f = Math.abs(l), v = Math.abs(s);
    f !== v && (r.direction.horizontal === true && f > v || r.direction.vertical === true && f < v || r.direction.up === true && f < v && s < 0 || r.direction.down === true && f < v && s > 0 || r.direction.left === true && f > v && l < 0 || r.direction.right === true && f > v && l > 0 ? (r.event.detected = true, r.move(i)) : r.end(i, true));
  }, end(i, a) {
    var _a3;
    if (r.event !== void 0) {
      if (Zt(r, "temp"), ze.is.firefox === true && Dr(e, false), a === true) (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r), r.event.detected !== true && r.initialEvent !== void 0 && r.initialEvent.target.dispatchEvent(r.initialEvent.event);
      else if (r.event.detected === true) {
        r.event.isFirst === true && r.handler(Ts(i === void 0 ? r.lastEvt : i, r).payload);
        const { payload: l } = Ts(i === void 0 ? r.lastEvt : i, r, true), s = () => {
          r.handler(l);
        };
        r.styleCleanup !== void 0 ? r.styleCleanup(s) : s();
      }
      r.event = void 0, r.initialEvent = void 0, r.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = r, n.mouse === true) {
    const i = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(r, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  ze.has.touch === true && Et(r, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = xl(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Zt(t, "main"), Zt(t, "temp"), ze.is.firefox === true && Dr(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), tf = "q-slider__marker-labels", G1 = (e) => ({ value: e }), X1 = ({ marker: e }) => h("div", { key: e.value, style: e.style, class: e.classes }, e.label), Rc = [34, 37, 40, 33, 39, 38], cg = { ...ot, ...kn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, dg = ["pan", "update:modelValue", "change"];
function fg({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: o }) {
  const { props: r, emit: i, slots: a, proxy: { $q: l } } = xe(), s = rt(r, l), d = Fo(o), c = H(false), f = H(false), v = H(false), u = H(false), g = m(() => r.vertical === true ? "--v" : "--h"), y = m(() => "-" + (r.switchLabelSide === true ? "switched" : "standard")), w = m(() => r.vertical === true ? r.reverse === true : r.reverse !== (l.lang.rtl === true)), x = m(() => isNaN(r.innerMin) === true || r.innerMin < r.min ? r.min : r.innerMin), _ = m(() => isNaN(r.innerMax) === true || r.innerMax > r.max ? r.max : r.innerMax), p = m(() => r.disable !== true && r.readonly !== true && x.value < _.value), b = m(() => {
    if (r.step === 0) return (_e2) => _e2;
    const ae = (String(r.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(ae));
  }), C = m(() => r.step === 0 ? 1 : r.step), q = m(() => p.value === true ? r.tabindex || 0 : -1), B = m(() => r.max - r.min), V = m(() => _.value - x.value), R = m(() => ee(x.value)), D = m(() => ee(_.value)), $ = m(() => r.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), M = m(() => r.vertical === true ? "height" : "width"), A = m(() => r.vertical === true ? "width" : "height"), T = m(() => r.vertical === true ? "vertical" : "horizontal"), z = m(() => {
    const ae = { role: "slider", "aria-valuemin": x.value, "aria-valuemax": _.value, "aria-orientation": T.value, "data-step": r.step };
    return r.disable === true ? ae["aria-disabled"] = "true" : r.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), U = m(() => `q-slider q-slider${g.value} q-slider--${c.value === true ? "" : "in"}active inline no-wrap ` + (r.vertical === true ? "row" : "column") + (r.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (v.value === "both" ? " q-slider--focus" : "") + (r.label || r.labelAlways === true ? " q-slider--label" : "") + (r.labelAlways === true ? " q-slider--label-always" : "") + (s.value === true ? " q-slider--dark" : "") + (r.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function j(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${y.value}`;
  }
  function K(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value}`;
  }
  const ie = m(() => {
    const ae = r.selectionColor || r.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), ye = m(() => K("markers") + " absolute overflow-hidden"), Y = m(() => K("track-container")), L = m(() => j("pin")), ne = m(() => j("label")), G = m(() => j("text-container")), be = m(() => j("marker-labels-container") + (r.markerLabelsClass !== void 0 ? ` ${r.markerLabelsClass}` : "")), O = m(() => "q-slider__track relative-position no-outline" + (r.trackColor !== void 0 ? ` bg-${r.trackColor}` : "")), P = m(() => {
    const ae = { [A.value]: r.trackSize };
    return r.trackImg !== void 0 && (ae.backgroundImage = `url(${r.trackImg}) !important`), ae;
  }), te = m(() => "q-slider__inner absolute" + (r.innerTrackColor !== void 0 ? ` bg-${r.innerTrackColor}` : "")), k = m(() => {
    const ae = D.value - R.value, _e2 = { [$.value]: `${100 * R.value}%`, [M.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return r.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${r.innerTrackImg}) !important`), _e2;
  });
  function F(ae) {
    const { min: _e2, max: ke, step: Fe } = r;
    let Ae = _e2 + ae * (ke - _e2);
    if (Fe > 0) {
      const Xe = (Ae - x.value) % Fe;
      Ae += (Math.abs(Xe) >= Fe / 2 ? (Xe < 0 ? -1 : 1) * Fe : 0) - Xe;
    }
    return Ae = b.value(Ae), vt(Ae, x.value, _.value);
  }
  function ee(ae) {
    return B.value === 0 ? 0 : (ae - r.min) / B.value;
  }
  function S(ae, _e2) {
    const ke = an(ae), Fe = r.vertical === true ? vt((ke.top - _e2.top) / _e2.height, 0, 1) : vt((ke.left - _e2.left) / _e2.width, 0, 1);
    return vt(w.value === true ? 1 - Fe : Fe, R.value, D.value);
  }
  const E = m(() => Ji(r.markers) === true ? r.markers : C.value), I = m(() => {
    const ae = [], _e2 = E.value, ke = r.max;
    let Fe = r.min;
    do
      ae.push(Fe), Fe += _e2;
    while (Fe < ke);
    return ae.push(ke), ae;
  }), Z = m(() => {
    const ae = ` ${tf}${g.value}-`;
    return tf + `${ae}${r.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), oe = m(() => r.markerLabels === false ? null : ve(r.markerLabels).map((ae, _e2) => ({ index: _e2, value: ae.value, label: ae.label || ae.value, classes: Z.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...ue(ae.value), ...ae.style || {} } }))), W = m(() => ({ markerList: oe.value, markerMap: ce.value, classes: Z.value, getStyle: ue })), fe = m(() => {
    const ae = V.value === 0 ? "2px" : 100 * E.value / V.value;
    return { ...k.value, backgroundSize: r.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function ve(ae) {
    if (ae === false) return null;
    if (ae === true) return I.value.map(G1);
    if (typeof ae == "function") return I.value.map((ke) => {
      const Fe = ae(ke);
      return Ot(Fe) === true ? { ...Fe, value: ke } : { value: ke, label: Fe };
    });
    const _e2 = ({ value: ke }) => ke >= r.min && ke <= r.max;
    return Array.isArray(ae) === true ? ae.map((ke) => Ot(ke) === true ? ke : { value: ke }).filter(_e2) : Object.keys(ae).map((ke) => {
      const Fe = ae[ke], Ae = Number(ke);
      return Ot(Fe) === true ? { ...Fe, value: Ae } : { value: Ae, label: Fe };
    }).filter(_e2);
  }
  function ue(ae) {
    return { [$.value]: `${100 * (ae - r.min) / B.value}%` };
  }
  const ce = m(() => {
    if (r.markerLabels === false) return null;
    const ae = {};
    return oe.value.forEach((_e2) => {
      ae[_e2.value] = _e2;
    }), ae;
  });
  function re() {
    if (a["marker-label-group"] !== void 0) return a["marker-label-group"](W.value);
    const ae = a["marker-label"] || X1;
    return oe.value.map((_e2) => ae({ marker: _e2, ...W.value }));
  }
  const Q = m(() => [[wn, le, void 0, { [T.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function le(ae) {
    ae.isFinal === true ? (u.value !== void 0 && (t(ae.evt), ae.touch === true && e(true), u.value = void 0, i("pan", "end")), c.value = false, v.value = false) : ae.isFirst === true ? (u.value = n(ae.evt), t(ae.evt), e(), c.value = true, i("pan", "start")) : (t(ae.evt), e());
  }
  function we() {
    v.value = false;
  }
  function Ce(ae) {
    t(ae, n(ae)), e(), f.value = true, c.value = true, document.addEventListener("mouseup", Te, true);
  }
  function Te() {
    f.value = false, c.value = false, e(true), we(), document.removeEventListener("mouseup", Te, true);
  }
  function Me(ae) {
    t(ae, n(ae)), e(true);
  }
  function Ie(ae) {
    Rc.includes(ae.keyCode) && e(true);
  }
  function Ne(ae) {
    if (r.vertical === true) return null;
    const _e2 = l.lang.rtl !== r.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${r.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function se(ae) {
    const _e2 = m(() => f.value === false && (v.value === ae.focusValue || v.value === "both") ? " q-slider--focus" : ""), ke = m(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Fe = m(() => ({ width: r.thumbSize, height: r.thumbSize, [$.value]: `${100 * ae.ratio.value}%`, zIndex: v.value === ae.focusValue ? 2 : void 0 })), Ae = m(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), Xe = m(() => Ne(ae.ratio.value)), ct = m(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const Mt = [h("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [h("path", { d: r.thumbPath })]), h("div", { class: "q-slider__focus-ring fit" })];
      return (r.label === true || r.labelAlways === true) && (Mt.push(h("div", { class: L.value + " absolute fit no-pointer-events" + Ae.value }, [h("div", { class: ne.value, style: { minWidth: r.thumbSize } }, [h("div", { class: G.value, style: Xe.value }, [h("span", { class: ct.value }, ae.label.value)])])])), r.name !== void 0 && r.disable !== true && d(Mt, "push")), h("div", { class: ke.value, style: Fe.value, ...ae.getNodeData() }, Mt);
    };
  }
  function pe(ae, _e2, ke, Fe) {
    const Ae = [];
    r.innerTrackColor !== "transparent" && Ae.push(h("div", { key: "inner", class: te.value, style: k.value })), r.selectionColor !== "transparent" && Ae.push(h("div", { key: "selection", class: ie.value, style: ae.value })), r.markers !== false && Ae.push(h("div", { key: "marker", class: ye.value, style: fe.value })), Fe(Ae);
    const Xe = [Sn("div", { key: "trackC", class: Y.value, tabindex: _e2.value, ...ke.value }, [h("div", { class: O.value, style: P.value }, Ae)], "slide", p.value, () => Q.value)];
    if (r.markerLabels !== false) {
      const ct = r.switchMarkerLabelsSide === true ? "unshift" : "push";
      Xe[ct](h("div", { key: "markerL", class: be.value }, re()));
    }
    return Xe;
  }
  return We(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: c, focus: v, preventFocus: f, dragging: u, editable: p, classes: U, tabindex: q, attributes: z, roundValueFn: b, keyStep: C, trackLen: B, innerMin: x, innerMinRatio: R, innerMax: _, innerMaxRatio: D, positionProp: $, sizeProp: M, isReversed: w }, methods: { onActivate: Ce, onMobileClick: Me, onBlur: we, onKeyup: Ie, getContent: pe, getThumbRenderFn: se, convertRatioToModel: F, convertModelToRatio: ee, getDraggingRatio: S } };
}
var J1 = () => ({}), eo = ge({ name: "QSlider", props: { ...cg, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: dg, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: o, methods: r } = fg({ updateValue: g, updatePosition: w, getDragging: y, formAttrs: va(e) }), i = H(null), a = H(0), l = H(0);
  function s() {
    l.value = e.modelValue === null ? o.innerMin.value : vt(e.modelValue, o.innerMin.value, o.innerMax.value);
  }
  me(() => `${e.modelValue}|${o.innerMin.value}|${o.innerMax.value}`, s), s();
  const d = m(() => r.convertModelToRatio(l.value)), c = m(() => o.active.value === true ? a.value : d.value), f = m(() => {
    const p = { [o.positionProp.value]: `${100 * o.innerMinRatio.value}%`, [o.sizeProp.value]: `${100 * (c.value - o.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), v = r.getThumbRenderFn({ focusValue: true, getNodeData: J1, ratio: c, label: m(() => e.labelValue !== void 0 ? e.labelValue : l.value), thumbColor: m(() => e.thumbColor || e.color), labelColor: m(() => e.labelColor), labelTextColor: m(() => e.labelTextColor) }), u = m(() => o.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: r.onMobileClick } : { onMousedown: r.onActivate, onFocus: x, onBlur: r.onBlur, onKeydown: _, onKeyup: r.onKeyup });
  function g(p) {
    l.value !== e.modelValue && t("update:modelValue", l.value), p === true && t("change", l.value);
  }
  function y() {
    return i.value.getBoundingClientRect();
  }
  function w(p, b = o.dragging.value) {
    const C = r.getDraggingRatio(p, b);
    l.value = r.convertRatioToModel(C), a.value = e.snap !== true || e.step === 0 ? C : r.convertModelToRatio(l.value);
  }
  function x() {
    o.focus.value = true;
  }
  function _(p) {
    if (Rc.includes(p.keyCode) === false) return;
    Ke(p);
    const b = ([34, 33].includes(p.keyCode) ? 10 : 1) * o.keyStep.value, C = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (o.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    l.value = vt(o.roundValueFn.value(l.value + C), o.innerMin.value, o.innerMax.value), g();
  }
  return () => {
    const p = r.getContent(f, o.tabindex, u, (b) => {
      b.push(v());
    });
    return h("div", { ref: i, class: o.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...o.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function vg() {
  const e = H(!un.value);
  return e.value === false && st(() => {
    e.value = true;
  }), { isHydrated: e };
}
var hg = typeof ResizeObserver < "u", nf = hg === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, sr = ge({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, o, r = { width: -1, height: -1 };
  function i(s) {
    s === true || e.debounce === 0 || e.debounce === "0" ? a() : n === null && (n = setTimeout(a, e.debounce));
  }
  function a() {
    if (n !== null && (clearTimeout(n), n = null), o) {
      const { offsetWidth: s, offsetHeight: d } = o;
      (s !== r.width || d !== r.height) && (r = { width: s, height: d }, t("resize", r));
    }
  }
  const { proxy: l } = xe();
  if (l.trigger = i, hg === true) {
    let s;
    const d = (c) => {
      o = l.$el.parentNode, o ? (s = new ResizeObserver(i), s.observe(o), a()) : c !== true && Qe(() => {
        d(true);
      });
    };
    return st(() => {
      d();
    }), We(() => {
      n !== null && clearTimeout(n), s !== void 0 && (s.disconnect !== void 0 ? s.disconnect() : o && s.unobserve(o));
    }), Tt;
  } else {
    let s = function() {
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", i, ht.passive), f = void 0);
    }, d = function() {
      s(), (o == null ? void 0 : o.contentDocument) && (f = o.contentDocument.defaultView, f.addEventListener("resize", i, ht.passive), a());
    };
    const { isHydrated: c } = vg();
    let f;
    return st(() => {
      Qe(() => {
        o = l.$el, o && d();
      });
    }), We(s), () => {
      if (c.value === true) return h("object", { class: "q--avoid-card-border", style: nf.style, tabindex: -1, type: "text/html", data: nf.url, "aria-hidden": "true", onLoad: d });
    };
  }
} }), ta = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, ta = e.scrollLeft >= 0, e.remove();
}
function Z1(e, t, n) {
  const o = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? o[0] : o[1]}${e ? ` text-${e}` : ""}`;
}
var e_ = ["left", "center", "right", "justify"], of = ge({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => e_.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, { registerTick: i } = Fr(), { registerTick: a } = Fr(), { registerTick: l } = Fr(), { registerTimeout: s, removeTimeout: d } = io(), { registerTimeout: c, removeTimeout: f } = io(), v = H(null), u = H(null), g = H(e.modelValue), y = H(false), w = H(true), x = H(false), _ = H(false), p = [], b = H(0), C = H(false);
  let q = null, B = null, V;
  const R = m(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: Z1(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), D = m(() => {
    const re = b.value, Q = g.value;
    for (let le = 0; le < re; le++) if (p[le].name.value === Q) return true;
    return false;
  }), $ = m(() => `q-tabs__content--align-${y.value === true ? "left" : _.value === true ? "justify" : e.align}`), M = m(() => `q-tabs row no-wrap items-center q-tabs--${y.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), A = m(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + $.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), T = m(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), z = m(() => e.vertical !== true && r.lang.rtl === true), U = m(() => ta === false && z.value === true);
  me(z, L), me(() => e.modelValue, (re) => {
    j({ name: re, setCurrent: true, skipEmit: true });
  }), me(() => e.outsideArrows, K);
  function j({ name: re, setCurrent: Q, skipEmit: le }) {
    g.value !== re && (le !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", re), (Q === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, re), g.value = re));
  }
  function K() {
    i(() => {
      v.value && ie({ width: v.value.offsetWidth, height: v.value.offsetHeight });
    });
  }
  function ie(re) {
    if (T.value === void 0 || u.value === null) return;
    const Q = re[T.value.container], le = Math.min(u.value[T.value.scroll], Array.prototype.reduce.call(u.value.children, (Ce, Te) => Ce + (Te[T.value.content] || 0), 0)), we = Q > 0 && le > Q;
    y.value = we, we === true && a(L), _.value = Q < parseInt(e.breakpoint, 10);
  }
  function ye(re, Q) {
    const le = re != null && re !== "" ? p.find((Ce) => Ce.name.value === re) : null, we = Q != null && Q !== "" ? p.find((Ce) => Ce.name.value === Q) : null;
    if (ce === true) ce = false;
    else if (le && we) {
      const Ce = le.tabIndicatorRef.value, Te = we.tabIndicatorRef.value;
      q !== null && (clearTimeout(q), q = null), Ce.style.transition = "none", Ce.style.transform = "none", Te.style.transition = "none", Te.style.transform = "none";
      const Me = Ce.getBoundingClientRect(), Ie = Te.getBoundingClientRect();
      Te.style.transform = e.vertical === true ? `translate3d(0,${Me.top - Ie.top}px,0) scale3d(1,${Ie.height ? Me.height / Ie.height : 1},1)` : `translate3d(${Me.left - Ie.left}px,0,0) scale3d(${Ie.width ? Me.width / Ie.width : 1},1,1)`, l(() => {
        q = setTimeout(() => {
          q = null, Te.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Te.style.transform = "none";
        }, 70);
      });
    }
    we && y.value === true && Y(we.rootRef.value);
  }
  function Y(re) {
    const { left: Q, width: le, top: we, height: Ce } = u.value.getBoundingClientRect(), Te = re.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - Q;
    if (Me < 0) {
      u.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), L();
      return;
    }
    Me += e.vertical === true ? Te.height - Ce : Te.width - le, Me > 0 && (u.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), L());
  }
  function L() {
    const re = u.value;
    if (re === null) return;
    const Q = re.getBoundingClientRect(), le = e.vertical === true ? re.scrollTop : Math.abs(re.scrollLeft);
    z.value === true ? (w.value = Math.ceil(le + Q.width) < re.scrollWidth - 1, x.value = le > 0) : (w.value = le > 0, x.value = e.vertical === true ? Math.ceil(le + Q.height) < re.scrollHeight : Math.ceil(le + Q.width) < re.scrollWidth);
  }
  function ne(re) {
    B !== null && clearInterval(B), B = setInterval(() => {
      k(re) === true && O();
    }, 5);
  }
  function G() {
    ne(U.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function be() {
    ne(U.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function O() {
    B !== null && (clearInterval(B), B = null);
  }
  function P(re, Q) {
    const le = Array.prototype.filter.call(u.value.children, (Ie) => Ie === Q || Ie.matches && Ie.matches(".q-tab.q-focusable") === true), we = le.length;
    if (we === 0) return;
    if (re === 36) return Y(le[0]), le[0].focus(), true;
    if (re === 35) return Y(le[we - 1]), le[we - 1].focus(), true;
    const Ce = re === (e.vertical === true ? 38 : 37), Te = re === (e.vertical === true ? 40 : 39), Me = Ce === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const Ie = z.value === true ? -1 : 1, Ne = le.indexOf(Q) + Me * Ie;
      return Ne >= 0 && Ne < we && (Y(le[Ne]), le[Ne].focus({ preventScroll: true })), true;
    }
  }
  const te = m(() => U.value === true ? { get: (re) => Math.abs(re.scrollLeft), set: (re, Q) => {
    re.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (re) => re.scrollTop, set: (re, Q) => {
    re.scrollTop = Q;
  } } : { get: (re) => re.scrollLeft, set: (re, Q) => {
    re.scrollLeft = Q;
  } });
  function k(re) {
    const Q = u.value, { get: le, set: we } = te.value;
    let Ce = false, Te = le(Q);
    const Me = re < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (Ce = true, Te = 0) : (Me === -1 && Te <= re || Me === 1 && Te >= re) && (Ce = true, Te = re), we(Q, Te), L(), Ce;
  }
  function F(re, Q) {
    for (const le in re) if (re[le] !== Q[le]) return false;
    return true;
  }
  function ee() {
    let re = null, Q = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const le = p.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: Ce } = o.$route, Te = Object.keys(Ce).length;
    for (const Me of le) {
      const Ie = Me.routeData.exact.value === true;
      if (Me.routeData[Ie === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ne, query: se, matched: pe, href: ae } = Me.routeData.resolvedLink.value, _e2 = Object.keys(se).length;
      if (Ie === true) {
        if (Ne !== we || _e2 !== Te || F(Ce, se) === false) continue;
        re = Me.name.value;
        break;
      }
      if (Ne !== "" && Ne !== we || _e2 !== 0 && F(se, Ce) === false) continue;
      const ke = { matchedLen: pe.length, queryDiff: Te - _e2, hrefLen: ae.length - Ne.length };
      if (ke.matchedLen > Q.matchedLen) {
        re = Me.name.value, Q = ke;
        continue;
      } else if (ke.matchedLen !== Q.matchedLen) continue;
      if (ke.queryDiff < Q.queryDiff) re = Me.name.value, Q = ke;
      else if (ke.queryDiff !== Q.queryDiff) continue;
      ke.hrefLen > Q.hrefLen && (re = Me.name.value, Q = ke);
    }
    if (re === null && p.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    j({ name: re, setCurrent: true });
  }
  function S(re) {
    if (d(), C.value !== true && v.value !== null && re.target && typeof re.target.closest == "function") {
      const Q = re.target.closest(".q-tab");
      Q && v.value.contains(Q) === true && (C.value = true, y.value === true && Y(Q));
    }
  }
  function E() {
    s(() => {
      C.value = false;
    }, 30);
  }
  function I() {
    fe.avoidRouteWatcher === false ? c(ee) : f();
  }
  function Z() {
    if (V === void 0) {
      const re = me(() => o.$route.fullPath, I);
      V = () => {
        re(), V = void 0;
      };
    }
  }
  function oe(re) {
    p.push(re), b.value++, K(), re.routeData === void 0 || o.$route === void 0 ? c(() => {
      if (y.value === true) {
        const Q = g.value, le = Q != null && Q !== "" ? p.find((we) => we.name.value === Q) : null;
        le && Y(le.rootRef.value);
      }
    }) : (Z(), re.routeData.hasRouterLink.value === true && I());
  }
  function W(re) {
    p.splice(p.indexOf(re), 1), b.value--, K(), V !== void 0 && re.routeData !== void 0 && (p.every((Q) => Q.routeData === void 0) === true && V(), I());
  }
  const fe = { currentModel: g, tabProps: R, hasFocus: C, hasActiveTab: D, registerTab: oe, unregisterTab: W, verifyRouteModel: I, updateModel: j, onKbdNavigate: P, avoidRouteWatcher: false };
  _n(km, fe);
  function ve() {
    q !== null && clearTimeout(q), O(), V == null ? void 0 : V();
  }
  let ue, ce;
  return We(ve), Hn(() => {
    ue = V !== void 0, ve();
  }), Oo(() => {
    ue === true && (Z(), ce = true, I()), K();
  }), () => h("div", { ref: v, class: M.value, role: "tablist", onFocusin: S, onFocusout: E }, [h(sr, { onResize: ie }), h("div", { ref: u, class: A.value, onScroll: L }, Pe(t.default)), h(tt, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || r.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: G, onTouchstartPassive: G, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O }), h(tt, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (x.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || r.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: be, onTouchstartPassive: be, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O })]);
} }), t_ = 0, mg = ["click", "keydown"], gg = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${t_++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function bg(e, t, n, o) {
  const r = Lt(km, ut);
  if (r === ut) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ut;
  const { proxy: i } = xe(), a = H(null), l = H(null), s = H(null), d = m(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), c = m(() => r.currentModel.value === e.name), f = m(() => "q-tab relative-position self-stretch flex flex-center text-center" + (c.value === true ? " q-tab--active" + (r.tabProps.value.activeClass ? " " + r.tabProps.value.activeClass : "") + (r.tabProps.value.activeColor ? ` text-${r.tabProps.value.activeColor}` : "") + (r.tabProps.value.activeBgColor ? ` bg-${r.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && r.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || r.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (o !== void 0 ? o.linkClass.value : "")), v = m(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (r.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), u = m(() => e.disable === true || r.hasFocus.value === true || c.value === false && r.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(p, b) {
    var _a3;
    if (b !== true && (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = a.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (o == null ? void 0 : o.hasRouterLink.value) === true && Ke(p);
      return;
    }
    if (o === void 0) {
      r.updateModel({ name: e.name }), n("click", p);
      return;
    }
    if (o.hasRouterLink.value === true) {
      const C = (q = {}) => {
        let B;
        const V = q.to === void 0 || An(q.to, e.to) === true ? r.avoidRouteWatcher = ea() : null;
        return o.navigateToRouterLink(p, { ...q, returnRouterError: true }).catch((R) => {
          B = R;
        }).then((R) => {
          var _a4;
          if (V === r.avoidRouteWatcher && (r.avoidRouteWatcher = false, B === void 0 && (R === void 0 || ((_a4 = R.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && r.updateModel({ name: e.name })), q.returnRouterError === true) return B !== void 0 ? Promise.reject(B) : R;
        });
      };
      n("click", p, C), p.defaultPrevented !== true && C();
      return;
    }
    n("click", p);
  }
  function y(p) {
    Cn(p, [13, 32]) ? g(p, true) : vr(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && r.onKbdNavigate(p.keyCode, i.$el) === true && Ke(p), n("keydown", p);
  }
  function w() {
    const p = r.tabProps.value.narrowIndicator, b = [], C = h("div", { ref: s, class: ["q-tab__indicator", r.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(h(tt, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(h("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? h(tt, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : h("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(C);
    const q = [h("div", { class: "q-focus-helper", tabindex: -1, ref: a }), h("div", { class: v.value }, At(t.default, b))];
    return p === false && q.push(C), q;
  }
  const x = { name: m(() => e.name), rootRef: l, tabIndicatorRef: s, routeData: o };
  We(() => {
    r.unregisterTab(x);
  }), st(() => {
    r.registerTab(x);
  });
  function _(p, b) {
    const C = { ref: l, class: f.value, tabindex: u.value, role: "tab", "aria-selected": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: y, ...b };
    return hn(h(p, C, w()), [[Ul, d.value]]);
  }
  return { renderTab: _, $tabs: r };
}
var ni = ge({ name: "QTab", props: gg, emits: mg, setup(e, { slots: t, emit: n }) {
  const { renderTab: o } = bg(e, t, n);
  return () => o("div");
} }), n_ = ge({ name: "QTabPanels", props: { ...kc, ...ot }, emits: Mc, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), { updatePanelsList: r, getPanelContent: i, panelDirectives: a } = qc(), l = m(() => "q-tab-panels q-panel-parent" + (o.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (r(t), Sn("div", { class: l.value }, i(), "pan", e.swipeable, () => a.value));
} }), ks = ge({ name: "QTabPanel", props: Tc, setup(e, { slots: t }) {
  return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), rf = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, af = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, lf = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ta = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, ka = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, Ua = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => rf.test(e), hexaColor: (e) => af.test(e), hexOrHexaColor: (e) => lf.test(e), rgbColor: (e) => Ta.test(e), rgbaColor: (e) => ka.test(e), rgbOrRgbaColor: (e) => Ta.test(e) || ka.test(e), hexOrRgbColor: (e) => rf.test(e) || Ta.test(e), hexaOrRgbaColor: (e) => af.test(e) || ka.test(e), anyColor: (e) => lf.test(e) || Ta.test(e) || ka.test(e) }, o_ = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function sf({ r: e, g: t, b: n, a: o }) {
  const r = o !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || r && o > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return o = r ? (Math.round(255 * o / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + o;
}
function uf({ r: e, g: t, b: n, a: o }) {
  return `rgb${o !== void 0 ? "a" : ""}(${e},${t},${n}${o !== void 0 ? "," + o / 100 : ""})`;
}
function pg(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function cf({ h: e, s: t, v: n, a: o }) {
  let r, i, a;
  t = t / 100, n = n / 100, e = e / 360;
  const l = Math.floor(e * 6), s = e * 6 - l, d = n * (1 - t), c = n * (1 - s * t), f = n * (1 - (1 - s) * t);
  switch (l % 6) {
    case 0:
      r = n, i = f, a = d;
      break;
    case 1:
      r = c, i = n, a = d;
      break;
    case 2:
      r = d, i = n, a = f;
      break;
    case 3:
      r = d, i = c, a = n;
      break;
    case 4:
      r = f, i = d, a = n;
      break;
    case 5:
      r = n, i = d, a = c;
      break;
  }
  return { r: Math.round(r * 255), g: Math.round(i * 255), b: Math.round(a * 255), a: o };
}
function Ms({ r: e, g: t, b: n, a: o }) {
  const r = Math.max(e, t, n), i = Math.min(e, t, n), a = r - i, l = r === 0 ? 0 : a / r, s = r / 255;
  let d;
  switch (r) {
    case i:
      d = 0;
      break;
    case e:
      d = t - n + a * (t < n ? 6 : 0), d /= 6 * a;
      break;
    case t:
      d = n - e + a * 2, d /= 6 * a;
      break;
    case n:
      d = e - t + a * 4, d /= 6 * a;
      break;
  }
  return { h: Math.round(d * 360), s: Math.round(l * 100), v: Math.round(s * 100), a: o };
}
function yg(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = o_.exec(t);
  if (n === null) return pg(t);
  const o = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const r = parseFloat(n[5]);
    o.a = Math.min(1, isNaN(r) === true ? 1 : r) * 100;
  }
  return o;
}
function r_(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? yg(e) : e, n = t.r / 255, o = t.g / 255, r = t.b / 255, i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), a = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4), l = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  return 0.2126 * i + 0.7152 * a + 0.0722 * l;
}
var i_ = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], df = "M5 5 h10 v10 h-10 v-10 z", a_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
ge({ name: "QColor", props: { ...ot, ...kn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: o } = n, r = rt(e, o), { getCache: i } = ha(), a = H(null), l = H(null), s = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), d = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), c = H(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = H(e.defaultView), v = H(M(e.modelValue || e.defaultValue)), u = m(() => e.disable !== true && e.readonly !== true), g = m(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), y = m(() => s.value !== null ? s.value : g.value), w = m(() => ({ type: "hidden", name: e.name, value: v.value[y.value === true ? "hex" : "rgb"] })), x = Fo(w), _ = m(() => d.value !== null ? d.value : v.value.a !== void 0), p = m(() => ({ backgroundColor: v.value.rgb || "#000" })), b = m(() => `q-color-picker__header-content q-color-picker__header-content--${(v.value.a !== void 0 && v.value.a < 65 ? true : r_(v.value) > 0.4) ? "light" : "dark"}`), C = m(() => ({ background: `hsl(${v.value.h},100%,50%)` })), q = m(() => ({ top: `${100 - v.value.v}%`, [o.lang.rtl === true ? "right" : "left"]: `${v.value.s}%` })), B = m(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : i_), V = m(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-color-picker--dark q-dark" : "")), R = m(() => e.disable === true ? { "aria-disabled": "true" } : {}), D = m(() => [[wn, ie, void 0, { prevent: true, stop: true, mouse: true }]]);
  me(() => e.modelValue, (S) => {
    const E = M(S || e.defaultValue);
    E.hex !== v.value.hex && (v.value = E);
  }), me(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const E = M(S);
      E.hex !== v.value.hex && (v.value = E);
    }
  });
  function $(S, E) {
    v.value.hex = sf(S), v.value.rgb = uf(S), v.value.r = S.r, v.value.g = S.g, v.value.b = S.b, v.value.a = S.a;
    const I = v.value[y.value === true ? "hex" : "rgb"];
    t("update:modelValue", I), E === true && t("change", I);
  }
  function M(S) {
    const E = d.value !== void 0 ? d.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || Ua.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: E === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const I = yg(S);
    return E === true && I.a === void 0 && (I.a = 100), I.hex = sf(I), I.rgb = uf(I), Object.assign(I, Ms(I));
  }
  function A(S, E, I) {
    const Z = a.value;
    if (Z === null) return;
    const oe = Z.clientWidth, W = Z.clientHeight, fe = Z.getBoundingClientRect();
    let ve = Math.min(oe, Math.max(0, S - fe.left));
    o.lang.rtl === true && (ve = oe - ve);
    const ue = Math.min(W, Math.max(0, E - fe.top)), ce = Math.round(100 * ve / oe), re = Math.round(100 * Math.max(0, Math.min(1, -(ue / W) + 1))), Q = cf({ h: v.value.h, s: ce, v: re, a: _.value === true ? v.value.a : void 0 });
    v.value.s = ce, v.value.v = re, $(Q, I);
  }
  function T(S, E) {
    const I = Math.round(S), Z = cf({ h: I, s: v.value.s, v: v.value.v, a: _.value === true ? v.value.a : void 0 });
    v.value.h = I, $(Z, E);
  }
  function z(S) {
    T(S, true);
  }
  function U(S, E, I, Z, oe) {
    if (Z !== void 0 && St(Z), !/^[0-9]+$/.test(S)) {
      oe === true && n.$forceUpdate();
      return;
    }
    const W = Math.floor(Number(S));
    if (W < 0 || W > I) {
      oe === true && n.$forceUpdate();
      return;
    }
    const fe = { r: E === "r" ? W : v.value.r, g: E === "g" ? W : v.value.g, b: E === "b" ? W : v.value.b, a: _.value === true ? E === "a" ? W : v.value.a : void 0 };
    if (E !== "a") {
      const ve = Ms(fe);
      v.value.h = ve.h, v.value.s = ve.s, v.value.v = ve.v;
    }
    if ($(fe, oe), oe !== true && (Z == null ? void 0 : Z.target.selectionEnd) !== void 0) {
      const ve = Z.target.selectionEnd;
      Qe(() => {
        Z.target.setSelectionRange(ve, ve);
      });
    }
  }
  function j(S, E) {
    let I;
    const Z = S.target.value;
    if (St(S), c.value === "hex") {
      if (Z.length !== (_.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(Z)) return true;
      I = pg(Z);
    } else {
      let W;
      if (Z.endsWith(")")) if (_.value !== true && Z.startsWith("rgb(")) {
        if (W = Z.substring(4, Z.length - 1).split(",").map((fe) => parseInt(fe, 10)), W.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(Z)) return true;
      } else if (_.value === true && Z.startsWith("rgba(")) {
        if (W = Z.substring(5, Z.length - 1).split(","), W.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(Z)) return true;
        for (let ve = 0; ve < 3; ve++) {
          const ue = parseInt(W[ve], 10);
          if (ue < 0 || ue > 255) return true;
          W[ve] = ue;
        }
        const fe = parseFloat(W[3]);
        if (fe < 0 || fe > 1) return true;
        W[3] = fe;
      } else return true;
      else return true;
      if (W[0] < 0 || W[0] > 255 || W[1] < 0 || W[1] > 255 || W[2] < 0 || W[2] > 255 || _.value === true && (W[3] < 0 || W[3] > 1)) return true;
      I = { r: W[0], g: W[1], b: W[2], a: _.value === true ? W[3] * 100 : void 0 };
    }
    const oe = Ms(I);
    if (v.value.h = oe.h, v.value.s = oe.s, v.value.v = oe.v, $(I, E), E !== true) {
      const W = S.target.selectionEnd;
      Qe(() => {
        S.target.setSelectionRange(W, W);
      });
    }
  }
  function K(S) {
    const E = M(S), I = { r: E.r, g: E.g, b: E.b, a: E.a };
    I.a === void 0 && (I.a = v.value.a), v.value.h = E.h, v.value.s = E.s, v.value.v = E.v, $(I, true);
  }
  function ie(S) {
    S.isFinal ? A(S.position.left, S.position.top, true) : ye(S);
  }
  const ye = Vm((S) => {
    A(S.position.left, S.position.top);
  }, 20);
  function Y(S) {
    A(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function L(S) {
    A(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function ne(S) {
    l.value !== null && (l.value.$el.style.opacity = S ? 1 : 0);
  }
  function G(S) {
    c.value = S;
  }
  function be() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(h(of, { class: "q-color-picker__header-tabs", modelValue: c.value, dense: true, align: "justify", "onUpdate:modelValue": G }, () => [h(ni, { label: "HEX" + (_.value === true ? "A" : ""), name: "hex", ripple: false }), h(ni, { label: "RGB" + (_.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(h("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [h("input", { class: "fit", value: v.value[c.value], ...u.value !== true ? { readonly: true } : {}, ...i("topIn", { onInput: (E) => {
      ne(j(E) === true);
    }, onChange: St, onBlur: (E) => {
      j(E, true) === true && n.$forceUpdate(), ne(false);
    } }) }), h(tt, { ref: l, class: "q-color-picker__error-icon absolute no-pointer-events", name: o.iconSet.type.negative })])), h("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [h("div", { class: "q-color-picker__header-bg absolute-full" }), h("div", { class: b.value, style: p.value }, S)]);
  }
  function O() {
    return h(n_, { modelValue: f.value, animated: true }, () => [h(ks, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, k), h(ks, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, F), h(ks, { class: "q-color-picker__palette-tab", name: "palette" }, ee)]);
  }
  function P(S) {
    f.value = S;
  }
  function te() {
    return h("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [h(of, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": P }, () => [h(ni, { icon: o.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), h(ni, { icon: o.iconSet.colorPicker.tune, name: "tune", ripple: false }), h(ni, { icon: o.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function k() {
    const S = { ref: a, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (u.value !== true ? " readonly" : ""), style: C.value, ...u.value === true ? { onClick: Y, onMousedown: L } : {} }, E = [h("div", { style: { paddingBottom: "100%" } }), h("div", { class: "q-color-picker__spectrum-white absolute-full" }), h("div", { class: "q-color-picker__spectrum-black absolute-full" }), h("div", { class: "absolute", style: q.value }, [v.value.hex !== void 0 ? h("div", { class: "q-color-picker__spectrum-circle" }) : null])], I = [h(eo, { class: "q-color-picker__hue non-selectable", modelValue: v.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: u.value !== true, thumbPath: df, "onUpdate:modelValue": T, onChange: z })];
    return _.value === true && I.push(h(eo, { class: "q-color-picker__alpha non-selectable", modelValue: v.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: a_, readonly: u.value !== true, hideSelection: true, thumbPath: df, ...i("alphaSlide", { "onUpdate:modelValue": (Z) => U(Z, "a", 100), onChange: (Z) => U(Z, "a", 100, void 0, true) }) })), [Sn("div", S, E, "spec", u.value, () => D.value), h("div", { class: "q-color-picker__sliders" }, I)];
  }
  function F() {
    return [h("div", { class: "row items-center no-wrap" }, [h("div", "R"), h(eo, { modelValue: v.value.r, min: 0, max: 255, color: "red", dark: r.value, readonly: u.value !== true, ...i("rSlide", { "onUpdate:modelValue": (S) => U(S, "r", 255), onChange: (S) => U(S, "r", 255, void 0, true) }) }), h("input", { value: v.value.r, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("rIn", { onInput: (S) => U(S.target.value, "r", 255, S), onBlur: (S) => U(S.target.value, "r", 255, S, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "G"), h(eo, { modelValue: v.value.g, min: 0, max: 255, color: "green", dark: r.value, readonly: u.value !== true, ...i("gSlide", { "onUpdate:modelValue": (S) => U(S, "g", 255), onChange: (S) => U(S, "g", 255, void 0, true) }) }), h("input", { value: v.value.g, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("gIn", { onInput: (S) => U(S.target.value, "g", 255, S), onBlur: (S) => U(S.target.value, "g", 255, S, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "B"), h(eo, { modelValue: v.value.b, min: 0, max: 255, color: "blue", readonly: u.value !== true, dark: r.value, ...i("bSlide", { "onUpdate:modelValue": (S) => U(S, "b", 255), onChange: (S) => U(S, "b", 255, void 0, true) }) }), h("input", { value: v.value.b, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("bIn", { onInput: (S) => U(S.target.value, "b", 255, S), onBlur: (S) => U(S.target.value, "b", 255, S, true) }) })]), _.value === true ? h("div", { class: "row items-center no-wrap" }, [h("div", "A"), h(eo, { modelValue: v.value.a, color: "grey", readonly: u.value !== true, dark: r.value, ...i("aSlide", { "onUpdate:modelValue": (S) => U(S, "a", 100), onChange: (S) => U(S, "a", 100, void 0, true) }) }), h("input", { value: v.value.a, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("aIn", { onInput: (S) => U(S.target.value, "a", 100, S), onBlur: (S) => U(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function ee() {
    const S = (E) => h("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: E }, ...u.value === true ? i("palette#" + E, { onClick: () => {
      K(E);
    } }) : {} });
    return [h("div", { class: "row items-center q-color-picker__palette-rows" + (u.value === true ? " q-color-picker__palette-rows--editable" : "") }, B.value.map(S))];
  }
  return () => {
    const S = [O()];
    return e.name !== void 0 && e.disable !== true && x(S, "push"), e.noHeader !== true && S.unshift(be()), e.noFooter !== true && S.push(te()), h("div", { class: V.value, ...R.value }, S);
  };
} });
var qo = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function l_(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), d_(Pc(e, t, n));
}
function ff(e, t, n) {
  return wg(c_(e, t, n));
}
function s_(e) {
  return u_(e) === 0;
}
function Qa(e, t) {
  return t <= 6 ? 31 : t <= 11 || s_(e) ? 30 : 29;
}
function u_(e) {
  const t = qo.length;
  let n = qo[0], o, r, i, a, l;
  if (e < n || e >= qo[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (l = 1; l < t && (o = qo[l], r = o - n, !(e < o)); l += 1) n = o;
  return a = e - n, r - a < 6 && (a = a - r + xt(r + 4, 33) * 33), i = fn(fn(a + 1, 33) - 1, 4), i === -1 && (i = 4), i;
}
function _g(e, t) {
  const n = qo.length, o = e + 621;
  let r = -14, i = qo[0], a, l, s, d, c;
  if (e < i || e >= qo[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (c = 1; c < n && (a = qo[c], l = a - i, !(e < a)); c += 1) r = r + xt(l, 33) * 8 + xt(fn(l, 33), 4), i = a;
  d = e - i, r = r + xt(d, 33) * 8 + xt(fn(d, 33) + 3, 4), fn(l, 33) === 4 && l - d === 4 && (r += 1);
  const f = xt(o, 4) - xt((xt(o, 100) + 1) * 3, 4) - 150, v = 20 + r - f;
  return t || (l - d < 6 && (d = d - l + xt(l + 4, 33) * 33), s = fn(fn(d + 1, 33) - 1, 4), s === -1 && (s = 4)), { leap: s, gy: o, march: v };
}
function c_(e, t, n) {
  const o = _g(e, true);
  return Pc(o.gy, 3, o.march) + (t - 1) * 31 - xt(t, 7) * (t - 7) + n - 1;
}
function d_(e) {
  const t = wg(e).gy;
  let n = t - 621, o, r, i;
  const a = _g(n, false), l = Pc(t, 3, a.march);
  if (i = e - l, i >= 0) {
    if (i <= 185) return r = 1 + xt(i, 31), o = fn(i, 31) + 1, { jy: n, jm: r, jd: o };
    i -= 186;
  } else n -= 1, i += 179, a.leap === 1 && (i += 1);
  return r = 7 + xt(i, 30), o = fn(i, 30) + 1, { jy: n, jm: r, jd: o };
}
function Pc(e, t, n) {
  let o = xt((e + xt(t - 8, 6) + 100100) * 1461, 4) + xt(153 * fn(t + 9, 12) + 2, 5) + n - 34840408;
  return o = o - xt(xt(e + 100100 + xt(t - 8, 6), 100) * 3, 4) + 752, o;
}
function wg(e) {
  let t = 4 * e + 139361631;
  t = t + xt(xt(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = xt(fn(t, 1461), 4) * 5 + 308, o = xt(fn(n, 153), 5) + 1, r = fn(xt(n, 153), 12) + 1;
  return { gy: xt(t, 1461) - 100100 + xt(8 - r, 6), gm: r, gd: o };
}
function xt(e, t) {
  return ~~(e / t);
}
function fn(e, t) {
  return e - ~~(e / t) * t;
}
var f_ = ["gregorian", "persian"], Sl = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => f_.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, xg = ["update:modelValue"];
function Xn(e) {
  return e.year + "/" + lt(e.month) + "/" + lt(e.day);
}
function Cg(e, t) {
  const n = m(() => e.disable !== true && e.readonly !== true), o = m(() => n.value === true ? 0 : -1), r = m(() => {
    const l = [];
    return e.color !== void 0 && l.push(`bg-${e.color}`), e.textColor !== void 0 && l.push(`text-${e.textColor}`), l.join(" ");
  });
  function i() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function a(l) {
    const s = /* @__PURE__ */ new Date(), d = l === true ? null : 0;
    if (e.calendar === "persian") {
      const c = l_(s);
      return { year: c.jy, month: c.jm, day: c.jd };
    }
    return { year: s.getFullYear(), month: s.getMonth() + 1, day: s.getDate(), hour: d, minute: d, second: d, millisecond: d };
  }
  return { editable: n, tabindex: o, headerClass: r, getLocale: i, getCurrentDate: a };
}
var Sg = 864e5, v_ = 36e5, Bu = 6e4, Tg = "YYYY-MM-DDTHH:mm:ss.SSSZ", h_ = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, m_ = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, qs = {};
function g_(e, t) {
  const n = "(" + t.days.join("|") + ")", o = e + n;
  if (qs[o] !== void 0) return qs[o];
  const r = "(" + t.daysShort.join("|") + ")", i = "(" + t.months.join("|") + ")", a = "(" + t.monthsShort.join("|") + ")", l = {};
  let s = 0;
  const d = e.replace(m_, (f) => {
    switch (s++, f) {
      case "YY":
        return l.YY = s, "(-?\\d{1,2})";
      case "YYYY":
        return l.YYYY = s, "(-?\\d{1,4})";
      case "M":
        return l.M = s, "(\\d{1,2})";
      case "Mo":
        return l.M = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        return l.M = s, "(\\d{2})";
      case "MMM":
        return l.MMM = s, a;
      case "MMMM":
        return l.MMMM = s, i;
      case "D":
        return l.D = s, "(\\d{1,2})";
      case "Do":
        return l.D = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return l.D = s, "(\\d{2})";
      case "H":
        return l.H = s, "(\\d{1,2})";
      case "HH":
        return l.H = s, "(\\d{2})";
      case "h":
        return l.h = s, "(\\d{1,2})";
      case "hh":
        return l.h = s, "(\\d{2})";
      case "m":
        return l.m = s, "(\\d{1,2})";
      case "mm":
        return l.m = s, "(\\d{2})";
      case "s":
        return l.s = s, "(\\d{1,2})";
      case "ss":
        return l.s = s, "(\\d{2})";
      case "S":
        return l.S = s, "(\\d{1})";
      case "SS":
        return l.S = s, "(\\d{2})";
      case "SSS":
        return l.S = s, "(\\d{3})";
      case "A":
        return l.A = s, "(AM|PM)";
      case "a":
        return l.a = s, "(am|pm)";
      case "aa":
        return l.aa = s, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return r;
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
        return l.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return l.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return l.X = s, "(-?\\d+)";
      case "x":
        return l.x = s, "(-?\\d{4,})";
      default:
        return s--, f[0] === "[" && (f = f.substring(1, f.length - 1)), f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), c = { map: l, regex: new RegExp("^" + d) };
  return qs[o] = c, c;
}
function kg(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : _u.date;
}
function vf(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), r = Math.floor(o / 60), i = o % 60;
  return n + lt(r) + t + lt(i);
}
function Ci(e, t, n, o, r) {
  const i = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (r !== void 0 && Object.assign(i, r), e == null || e === "" || typeof e != "string") return i;
  t === void 0 && (t = Tg);
  const a = kg(n, zl.props), l = a.months, s = a.monthsShort, { regex: d, map: c } = g_(t, a), f = e.match(d);
  if (f === null) return i;
  let v = "";
  if (c.X !== void 0 || c.x !== void 0) {
    const u = parseInt(f[c.X !== void 0 ? c.X : c.x], 10);
    if (isNaN(u) === true || u < 0) return i;
    const g = new Date(u * (c.X !== void 0 ? 1e3 : 1));
    i.year = g.getFullYear(), i.month = g.getMonth() + 1, i.day = g.getDate(), i.hour = g.getHours(), i.minute = g.getMinutes(), i.second = g.getSeconds(), i.millisecond = g.getMilliseconds();
  } else {
    if (c.YYYY !== void 0) i.year = parseInt(f[c.YYYY], 10);
    else if (c.YY !== void 0) {
      const u = parseInt(f[c.YY], 10);
      i.year = u < 0 ? u : 2e3 + u;
    }
    if (c.M !== void 0) {
      if (i.month = parseInt(f[c.M], 10), i.month < 1 || i.month > 12) return i;
    } else c.MMM !== void 0 ? i.month = s.indexOf(f[c.MMM]) + 1 : c.MMMM !== void 0 && (i.month = l.indexOf(f[c.MMMM]) + 1);
    if (c.D !== void 0) {
      if (i.day = parseInt(f[c.D], 10), i.year === null || i.month === null || i.day < 1) return i;
      const u = o !== "persian" ? new Date(i.year, i.month, 0).getDate() : Qa(i.year, i.month);
      if (i.day > u) return i;
    }
    c.H !== void 0 ? i.hour = parseInt(f[c.H], 10) % 24 : c.h !== void 0 && (i.hour = parseInt(f[c.h], 10) % 12, (c.A && f[c.A] === "PM" || c.a && f[c.a] === "pm" || c.aa && f[c.aa] === "p.m.") && (i.hour += 12), i.hour = i.hour % 24), c.m !== void 0 && (i.minute = parseInt(f[c.m], 10) % 60), c.s !== void 0 && (i.second = parseInt(f[c.s], 10) % 60), c.S !== void 0 && (i.millisecond = parseInt(f[c.S], 10) * 10 ** (3 - f[c.S].length)), (c.Z !== void 0 || c.ZZ !== void 0) && (v = c.Z !== void 0 ? f[c.Z].replace(":", "") : f[c.ZZ], i.timezoneOffset = (v[0] === "+" ? -1 : 1) * (60 * v.slice(1, 3) + 1 * v.slice(3, 5)));
  }
  return i.dateHash = lt(i.year, 6) + "/" + lt(i.month) + "/" + lt(i.day), i.timeHash = lt(i.hour) + ":" + lt(i.minute) + ":" + lt(i.second) + v, i;
}
function Es(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const o = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - o);
  const r = (t - n) / (Sg * 7);
  return 1 + Math.floor(r);
}
function Jn(e, t, n) {
  const o = new Date(e), r = `set${n === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      o[`${r}Month`](0);
    case "month":
    case "months":
      o[`${r}Date`](1);
    case "day":
    case "days":
    case "date":
      o[`${r}Hours`](0);
    case "hour":
    case "hours":
      o[`${r}Minutes`](0);
    case "minute":
    case "minutes":
      o[`${r}Seconds`](0);
    case "second":
    case "seconds":
      o[`${r}Milliseconds`](0);
  }
  return o;
}
function Ma(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Bu - (t.getTime() - t.getTimezoneOffset() * Bu)) / n;
}
function Mg(e, t, n = "days") {
  const o = new Date(e), r = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return o.getFullYear() - r.getFullYear();
    case "months":
    case "month":
      return (o.getFullYear() - r.getFullYear()) * 12 + o.getMonth() - r.getMonth();
    case "days":
    case "day":
    case "date":
      return Ma(Jn(o, "day"), Jn(r, "day"), Sg);
    case "hours":
    case "hour":
      return Ma(Jn(o, "hour"), Jn(r, "hour"), v_);
    case "minutes":
    case "minute":
      return Ma(Jn(o, "minute"), Jn(r, "minute"), Bu);
    case "seconds":
    case "second":
      return Ma(Jn(o, "second"), Jn(r, "second"), 1e3);
  }
}
function As(e) {
  return Mg(e, Jn(e, "year"), "days") + 1;
}
function wr(e) {
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
var hf = { YY(e, t, n) {
  const o = this.YYYY(e, t, n) % 100;
  return o >= 0 ? lt(o) : "-" + lt(Math.abs(o));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return wr(e.getMonth() + 1);
}, MM(e) {
  return lt(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return wr(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return wr(e.getDate());
}, DD(e) {
  return lt(e.getDate());
}, DDD(e) {
  return As(e);
}, DDDo(e) {
  return wr(As(e));
}, DDDD(e) {
  return lt(As(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return wr(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Es(e);
}, wo(e) {
  return wr(Es(e));
}, ww(e) {
  return lt(Es(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return lt(e.getHours());
}, h(e) {
  const t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return lt(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return lt(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return lt(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return lt(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return lt(e.getMilliseconds(), 3);
}, A(e) {
  return e.getHours() < 12 ? "AM" : "PM";
}, a(e) {
  return e.getHours() < 12 ? "am" : "pm";
}, aa(e) {
  return e.getHours() < 12 ? "a.m." : "p.m.";
}, Z(e, t, n, o) {
  const r = o ?? e.getTimezoneOffset();
  return vf(r, ":");
}, ZZ(e, t, n, o) {
  const r = o ?? e.getTimezoneOffset();
  return vf(r);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function qg(e, t, n, o, r) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const i = new Date(e);
  if (isNaN(i)) return;
  t === void 0 && (t = Tg);
  const a = kg(n, zl.props);
  return t.replace(h_, (l, s) => l in hf ? hf[l](i, a, o, r) : s === void 0 ? l : s.split("\\]").join("]"));
}
var Kn = 20, b_ = ["Calendar", "Years", "Months"], mf = (e) => b_.includes(e), Ls = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), xr = " \u2014 ";
function vo(e) {
  return e.year + "/" + lt(e.month);
}
ge({ name: "QDate", props: { ...Sl, ...kn, ...ot, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Sl.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Ls }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Ls }, navigationMaxYearMonth: { type: String, validator: Ls }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: mf } }, emits: [...xg, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = rt(e, r), { getCache: a } = ha(), { tabindex: l, headerClass: s, getLocale: d, getCurrentDate: c } = Cg(e, r);
  let f;
  const v = va(e), u = Fo(v), g = H(null), y = H(Ie()), w = H(d()), x = m(() => Ie()), _ = m(() => d()), p = m(() => c()), b = H(se(y.value, w.value)), C = H(e.defaultView), q = m(() => r.lang.rtl === true ? "right" : "left"), B = H(q.value), V = H(q.value), R = b.value.year, D = H(R - R % Kn - (R < 0 ? Kn : 0)), $ = H(null), M = m(() => {
    const N = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${N} q-date--${N}-${e.minimal === true ? "minimal" : "standard"}` + (i.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), A = m(() => e.color || "primary"), T = m(() => e.textColor || "white"), z = m(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), U = m(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), j = m(() => U.value.filter((N) => typeof N == "string").map((N) => Ne(N, y.value, w.value)).filter((N) => N.dateHash !== null && N.day !== null && N.month !== null && N.year !== null)), K = m(() => {
    const N = (X) => Ne(X, y.value, w.value);
    return U.value.filter((X) => Ot(X) === true && X.from !== void 0 && X.to !== void 0).map((X) => ({ from: N(X.from), to: N(X.to) })).filter((X) => X.from.dateHash !== null && X.to.dateHash !== null && X.from.dateHash < X.to.dateHash);
  }), ie = m(() => e.calendar !== "persian" ? (N) => new Date(N.year, N.month - 1, N.day) : (N) => {
    const X = ff(N.year, N.month, N.day);
    return new Date(X.gy, X.gm - 1, X.gd);
  }), ye = m(() => e.calendar === "persian" ? Xn : (N, X, he) => qg(new Date(N.year, N.month - 1, N.day, N.hour, N.minute, N.second, N.millisecond), X === void 0 ? y.value : X, he === void 0 ? w.value : he, N.year, N.timezoneOffset)), Y = m(() => j.value.length + K.value.reduce((N, X) => N + 1 + Mg(ie.value(X.to), ie.value(X.from)), 0)), L = m(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if ($.value !== null) {
      const he = $.value.init, qe = ie.value(he);
      return w.value.daysShort[qe.getDay()] + ", " + w.value.monthsShort[he.month - 1] + " " + he.day + xr + "?";
    }
    if (Y.value === 0) return xr;
    if (Y.value > 1) return `${Y.value} ${w.value.pluralDay}`;
    const N = j.value[0], X = ie.value(N);
    return isNaN(X.valueOf()) === true ? xr : w.value.headerTitle !== void 0 ? w.value.headerTitle(X, N) : w.value.daysShort[X.getDay()] + ", " + w.value.monthsShort[N.month - 1] + " " + N.day;
  }), ne = m(() => j.value.concat(K.value.map((X) => X.from)).sort((X, he) => X.year - he.year || X.month - he.month)[0]), G = m(() => j.value.concat(K.value.map((X) => X.to)).sort((X, he) => he.year - X.year || he.month - X.month)[0]), be = m(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Y.value === 0) return xr;
    if (Y.value > 1) {
      const N = ne.value, X = G.value, he = w.value.monthsShort;
      return he[N.month - 1] + (N.year !== X.year ? " " + N.year + xr + he[X.month - 1] + " " : N.month !== X.month ? xr + he[X.month - 1] : "") + " " + X.year;
    }
    return j.value[0].year;
  }), O = m(() => {
    const N = [r.iconSet.datetime.arrowLeft, r.iconSet.datetime.arrowRight];
    return r.lang.rtl === true ? N.reverse() : N;
  }), P = m(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), te = m(() => {
    const N = w.value.daysShort, X = P.value;
    return X > 0 ? N.slice(X, 7).concat(N.slice(0, X)) : N;
  }), k = m(() => {
    const N = b.value;
    return e.calendar !== "persian" ? new Date(N.year, N.month, 0).getDate() : Qa(N.year, N.month);
  }), F = m(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), ee = m(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const N = e.navigationMinYearMonth.split("/");
    return { year: parseInt(N[0], 10), month: parseInt(N[1], 10) };
  }), S = m(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const N = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(N[0], 10), month: parseInt(N[1], 10) };
  }), E = m(() => {
    const N = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return ee.value !== null && ee.value.year >= b.value.year && (N.year.prev = false, ee.value.year === b.value.year && ee.value.month >= b.value.month && (N.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (N.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (N.month.next = false)), N;
  }), I = m(() => {
    const N = {};
    return j.value.forEach((X) => {
      const he = vo(X);
      N[he] === void 0 && (N[he] = []), N[he].push(X.day);
    }), N;
  }), Z = m(() => {
    const N = {};
    return K.value.forEach((X) => {
      const he = vo(X.from), qe = vo(X.to);
      if (N[he] === void 0 && (N[he] = []), N[he].push({ from: X.from.day, to: he === qe ? X.to.day : void 0, range: X }), he < qe) {
        let Ee;
        const { year: Ze, month: De } = X.from, He = De < 12 ? { year: Ze, month: De + 1 } : { year: Ze + 1, month: 1 };
        for (; (Ee = vo(He)) <= qe; ) N[Ee] === void 0 && (N[Ee] = []), N[Ee].push({ from: void 0, to: Ee === qe ? X.to.day : void 0, range: X }), He.month++, He.month > 12 && (He.year++, He.month = 1);
      }
    }), N;
  }), oe = m(() => {
    if ($.value === null) return;
    const { init: N, initHash: X, final: he, finalHash: qe } = $.value, [Ee, Ze] = X <= qe ? [N, he] : [he, N], De = vo(Ee), He = vo(Ze);
    if (De !== W.value && He !== W.value) return;
    const at = {};
    return De === W.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, He === W.value ? (at.to = Ze.day, at.includeTo = true) : at.to = k.value, at;
  }), W = m(() => vo(b.value)), fe = m(() => {
    const N = {};
    if (e.options === void 0) {
      for (let he = 1; he <= k.value; he++) N[he] = true;
      return N;
    }
    const X = typeof e.options == "function" ? e.options : (he) => e.options.includes(he);
    for (let he = 1; he <= k.value; he++) {
      const qe = W.value + "/" + lt(he);
      N[he] = X(qe);
    }
    return N;
  }), ve = m(() => {
    const N = {};
    if (e.events === void 0) for (let X = 1; X <= k.value; X++) N[X] = false;
    else {
      const X = typeof e.events == "function" ? e.events : (he) => e.events.includes(he);
      for (let he = 1; he <= k.value; he++) {
        const qe = W.value + "/" + lt(he);
        N[he] = X(qe) === true && F.value(qe);
      }
    }
    return N;
  }), ue = m(() => {
    let N, X;
    const { year: he, month: qe } = b.value;
    if (e.calendar !== "persian") N = new Date(he, qe - 1, 1), X = new Date(he, qe - 1, 0).getDate();
    else {
      const Ee = ff(he, qe, 1);
      N = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ze = qe - 1, De = he;
      Ze === 0 && (Ze = 12, De--), X = Qa(De, Ze);
    }
    return { days: N.getDay() - P.value - 1, endDay: X };
  }), ce = m(() => {
    const N = [], { days: X, endDay: he } = ue.value, qe = X < 0 ? X + 7 : X;
    if (qe < 6) for (let De = he - qe; De <= he; De++) N.push({ i: De, fill: true });
    const Ee = N.length;
    for (let De = 1; De <= k.value; De++) {
      const He = { i: De, event: ve.value[De], classes: [] };
      fe.value[De] === true && (He.in = true, He.flat = true), N.push(He);
    }
    if (I.value[W.value] !== void 0 && I.value[W.value].forEach((De) => {
      const He = Ee + De - 1;
      Object.assign(N[He], { selected: true, unelevated: true, flat: false, color: A.value, textColor: T.value });
    }), Z.value[W.value] !== void 0 && Z.value[W.value].forEach((De) => {
      if (De.from !== void 0) {
        const He = Ee + De.from - 1, at = Ee + (De.to || k.value) - 1;
        for (let mn = He; mn <= at; mn++) Object.assign(N[mn], { range: De.range, unelevated: true, color: A.value, textColor: T.value });
        Object.assign(N[He], { rangeFrom: true, flat: false }), De.to !== void 0 && Object.assign(N[at], { rangeTo: true, flat: false });
      } else if (De.to !== void 0) {
        const He = Ee + De.to - 1;
        for (let at = Ee; at <= He; at++) Object.assign(N[at], { range: De.range, unelevated: true, color: A.value, textColor: T.value });
        Object.assign(N[He], { flat: false, rangeTo: true });
      } else {
        const He = Ee + k.value - 1;
        for (let at = Ee; at <= He; at++) Object.assign(N[at], { range: De.range, unelevated: true, color: A.value, textColor: T.value });
      }
    }), oe.value !== void 0) {
      const De = Ee + oe.value.from - 1, He = Ee + oe.value.to - 1;
      for (let at = De; at <= He; at++) N[at].color = A.value, N[at].editRange = true;
      oe.value.includeFrom === true && (N[De].editRangeFrom = true), oe.value.includeTo === true && (N[He].editRangeTo = true);
    }
    b.value.year === p.value.year && b.value.month === p.value.month && (N[Ee + p.value.day - 1].today = true);
    const Ze = N.length % 7;
    if (Ze > 0) {
      const De = 7 - Ze;
      for (let He = 1; He <= De; He++) N.push({ i: He, fill: true });
    }
    return N.forEach((De) => {
      let He = "q-date__calendar-item ";
      De.fill === true ? He += "q-date__calendar-item--fill" : (He += `q-date__calendar-item--${De.in === true ? "in" : "out"}`, De.range !== void 0 && (He += ` q-date__range${De.rangeTo === true ? "-to" : De.rangeFrom === true ? "-from" : ""}`), De.editRange === true && (He += ` q-date__edit-range${De.editRangeFrom === true ? "-from" : ""}${De.editRangeTo === true ? "-to" : ""}`), (De.range !== void 0 || De.editRange === true) && (He += ` text-${De.color}`)), De.classes = He;
    }), N;
  }), re = m(() => e.disable === true ? { "aria-disabled": "true" } : {});
  me(() => e.modelValue, (N) => {
    if (f === JSON.stringify(N)) f = 0;
    else {
      const X = se(y.value, w.value);
      ct(X.year, X.month, X);
    }
  }), me(C, () => {
    g.value !== null && o.$el.contains(document.activeElement) === true && g.value.focus();
  }), me(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), me(x, (N) => {
    Se(N, w.value, "mask"), y.value = N;
  }), me(_, (N) => {
    Se(y.value, N, "locale"), w.value = N;
  });
  function Q(N) {
    f = JSON.stringify(N);
  }
  function le() {
    const { year: N, month: X, day: he } = p.value, qe = { ...b.value, year: N, month: X, day: he }, Ee = I.value[vo(qe)];
    (Ee === void 0 || Ee.includes(qe.day) === false) && Un(qe), Te(qe.year, qe.month);
  }
  function we(N) {
    mf(N) === true && (C.value = N);
  }
  function Ce(N, X) {
    ["month", "year"].includes(N) && (N === "month" ? ae : _e2)(X === true ? -1 : 1);
  }
  function Te(N, X) {
    C.value = "Calendar", ct(N, X);
  }
  function Me(N, X) {
    if (e.range === false || !N) {
      $.value = null;
      return;
    }
    const he = Object.assign({ ...b.value }, N), qe = X !== void 0 ? Object.assign({ ...b.value }, X) : he;
    $.value = { init: he, initHash: Xn(he), final: qe, finalHash: Xn(qe) }, Te(he.year, he.month);
  }
  function Ie() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ne(N, X, he) {
    return Ci(N, X, he, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function se(N, X) {
    const he = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (he.length === 0) return pe();
    const qe = he[he.length - 1], Ee = Ne(qe.from !== void 0 ? qe.from : qe, N, X);
    return Ee.dateHash === null ? pe() : Ee;
  }
  function pe() {
    let N, X;
    if (e.defaultYearMonth !== void 0) {
      const he = e.defaultYearMonth.split("/");
      N = parseInt(he[0], 10), X = parseInt(he[1], 10);
    } else {
      const he = p.value !== void 0 ? p.value : c();
      N = he.year, X = he.month;
    }
    return { year: N, month: X, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: N + "/" + lt(X) + "/01" };
  }
  function ae(N) {
    let X = b.value.year, he = Number(b.value.month) + N;
    he === 13 ? (he = 1, X++) : he === 0 && (he = 12, X--), ct(X, he), z.value === true && Yt("month");
  }
  function _e2(N) {
    const X = Number(b.value.year) + N;
    ct(X, b.value.month), z.value === true && Yt("year");
  }
  function ke(N) {
    ct(N, b.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", z.value === true && Yt("year");
  }
  function Fe(N) {
    ct(b.value.year, N), C.value = "Calendar", z.value === true && Yt("month");
  }
  function Ae(N, X) {
    var _a3;
    (((_a3 = I.value[X]) == null ? void 0 : _a3.includes(N.day)) === true ? de : Un)(N);
  }
  function Xe(N) {
    return { year: N.year, month: N.month, day: N.day };
  }
  function ct(N, X, he) {
    if (ee.value !== null && N <= ee.value.year && ((X < ee.value.month || N < ee.value.year) && (X = ee.value.month), N = ee.value.year), S.value !== null && N >= S.value.year && ((X > S.value.month || N > S.value.year) && (X = S.value.month), N = S.value.year), he !== void 0) {
      const { hour: Ee, minute: Ze, second: De, millisecond: He, timezoneOffset: at, timeHash: mn } = he;
      Object.assign(b.value, { hour: Ee, minute: Ze, second: De, millisecond: He, timezoneOffset: at, timeHash: mn });
    }
    const qe = N + "/" + lt(X) + "/01";
    qe !== b.value.dateHash && (B.value = b.value.dateHash < qe == (r.lang.rtl !== true) ? "left" : "right", N !== b.value.year && (V.value = B.value), Qe(() => {
      D.value = N - N % Kn - (N < 0 ? Kn : 0), Object.assign(b.value, { year: N, month: X, day: 1, dateHash: qe });
    }));
  }
  function Mt(N, X, he) {
    const qe = N !== null && N.length === 1 && e.multiple === false ? N[0] : N, { reason: Ee, details: Ze } = co(X, he);
    Q(qe), n("update:modelValue", qe, Ee, Ze);
  }
  function Yt(N) {
    const X = j.value[0] !== void 0 && j.value[0].dateHash !== null ? { ...j.value[0] } : { ...b.value };
    Qe(() => {
      X.year = b.value.year, X.month = b.value.month;
      const he = e.calendar !== "persian" ? new Date(X.year, X.month, 0).getDate() : Qa(X.year, X.month);
      X.day = Math.min(Math.max(1, X.day), he);
      const qe = cn(X), { details: Ee } = co("", X);
      Q(qe), n("update:modelValue", qe, N, Ee);
    });
  }
  function co(N, X) {
    return X.from !== void 0 ? { reason: `${N}-range`, details: { ...Xe(X.target), from: Xe(X.from), to: Xe(X.to) } } : { reason: `${N}-day`, details: Xe(X) };
  }
  function cn(N, X, he) {
    return N.from !== void 0 ? { from: ye.value(N.from, X, he), to: ye.value(N.to, X, he) } : ye.value(N, X, he);
  }
  function Un(N) {
    let X;
    if (e.multiple === true) if (N.from !== void 0) {
      const he = Xn(N.from), qe = Xn(N.to), Ee = j.value.filter((De) => De.dateHash < he || De.dateHash > qe), Ze = K.value.filter(({ from: De, to: He }) => He.dateHash < he || De.dateHash > qe);
      X = Ee.concat(Ze).concat(N).map((De) => cn(De));
    } else {
      const he = U.value.slice();
      he.push(cn(N)), X = he;
    }
    else X = cn(N);
    Mt(X, "add", N);
  }
  function de(N) {
    if (e.noUnset === true) return;
    let X = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const he = cn(N);
      N.from !== void 0 ? X = e.modelValue.filter((qe) => qe.from !== void 0 ? qe.from !== he.from && qe.to !== he.to : true) : X = e.modelValue.filter((qe) => qe !== he), X.length === 0 && (X = null);
    }
    Mt(X, "remove", N);
  }
  function Se(N, X, he) {
    const qe = j.value.concat(K.value).map((Ze) => cn(Ze, N, X)).filter((Ze) => Ze.from !== void 0 ? Ze.from.dateHash !== null && Ze.to.dateHash !== null : Ze.dateHash !== null), Ee = (e.multiple === true ? qe : qe[0]) || null;
    Q(Ee), n("update:modelValue", Ee, he);
  }
  function Ve() {
    if (e.minimal !== true) return h("div", { class: "q-date__header " + s.value }, [h("div", { class: "relative-position" }, [h($t, { name: "q-transition--fade" }, () => h("div", { key: "h-yr-" + be.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vY", { onClick() {
      C.value = "Years";
    }, onKeyup(N) {
      N.keyCode === 13 && (C.value = "Years");
    } }) }, [be.value]))]), h("div", { class: "q-date__header-title relative-position flex no-wrap" }, [h("div", { class: "relative-position col" }, [h($t, { name: "q-transition--fade" }, () => h("div", { key: "h-sub" + L.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vC", { onClick() {
      C.value = "Calendar";
    }, onKeyup(N) {
      N.keyCode === 13 && (C.value = "Calendar");
    } }) }, [L.value]))]), e.todayBtn === true ? h(et, { class: "q-date__header-today self-start", icon: r.iconSet.datetime.today, ariaLabel: r.lang.date.today, flat: true, size: "sm", round: true, tabindex: l.value, onClick: le }) : null])]);
  }
  function Oe({ label: N, type: X, key: he, dir: qe, goTo: Ee, boundaries: Ze, cls: De }) {
    return [h("div", { class: "row items-center q-date__arrow" }, [h(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[0], ariaLabel: X === "Years" ? r.lang.date.prevYear : r.lang.date.prevMonth, tabindex: l.value, disable: Ze.prev === false, ...a("go-#" + X, { onClick() {
      Ee(-1);
    } }) })]), h("div", { class: "relative-position overflow-hidden flex flex-center" + De }, [h($t, { name: "q-transition--jump-" + qe }, () => h("div", { key: he }, [h(et, { flat: true, dense: true, noCaps: true, label: N, tabindex: l.value, ...a("view#" + X, { onClick: () => {
      C.value = X;
    } }) })]))]), h("div", { class: "row items-center q-date__arrow" }, [h(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[1], ariaLabel: X === "Years" ? r.lang.date.nextYear : r.lang.date.nextMonth, tabindex: l.value, disable: Ze.next === false, ...a("go+#" + X, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ye = { Calendar: () => [h("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [h("div", { class: "q-date__navigation row items-center no-wrap" }, Oe({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: B.value, goTo: ae, boundaries: E.value.month, cls: " col" }).concat(Oe({ label: b.value.year, type: "Years", key: b.value.year, dir: V.value, goTo: _e2, boundaries: E.value.year, cls: "" }))), h("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, te.value.map((N) => h("div", { class: "q-date__calendar-item" }, [h("div", N)]))), h("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [h($t, { name: "q-transition--slide-" + B.value }, () => h("div", { key: W.value, class: "q-date__calendar-days fit" }, ce.value.map((N) => h("div", { class: N.classes }, [N.in === true ? h(et, { class: N.today === true ? "q-date__today" : "", dense: true, flat: N.flat, unelevated: N.unelevated, color: N.color, textColor: N.textColor, label: N.i, tabindex: l.value, ...a("day#" + N.i, { onClick: () => {
    _t2(N.i);
  }, onMouseover: () => {
    bt(N.i);
  } }) }, N.event !== false ? () => h("div", { class: "q-date__event bg-" + N.event }) : null) : h("div", "" + N.i)]))))])])], Months() {
    const N = b.value.year === p.value.year, X = (qe) => ee.value !== null && b.value.year === ee.value.year && ee.value.month > qe || S.value !== null && b.value.year === S.value.year && S.value.month < qe, he = w.value.monthsShort.map((qe, Ee) => {
      const Ze = b.value.month === Ee + 1;
      return h("div", { class: "q-date__months-item flex flex-center" }, [h(et, { class: N === true && p.value.month === Ee + 1 ? "q-date__today" : null, flat: Ze !== true, label: qe, unelevated: Ze, color: Ze === true ? A.value : null, textColor: Ze === true ? T.value : null, tabindex: l.value, disable: X(Ee + 1), ...a("month#" + Ee, { onClick: () => {
        Fe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && he.unshift(h("div", { class: "row no-wrap full-width" }, [Oe({ label: b.value.year, type: "Years", key: b.value.year, dir: V.value, goTo: _e2, boundaries: E.value.year, cls: " col" })])), h("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, he);
  }, Years() {
    const N = D.value, X = N + Kn, he = [], qe = (Ee) => ee.value !== null && ee.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = N; Ee <= X; Ee++) {
      const Ze = b.value.year === Ee;
      he.push(h("div", { class: "q-date__years-item flex flex-center" }, [h(et, { key: "yr" + Ee, class: p.value.year === Ee ? "q-date__today" : null, flat: !Ze, label: Ee, dense: true, unelevated: Ze, color: Ze === true ? A.value : null, textColor: Ze === true ? T.value : null, tabindex: l.value, disable: qe(Ee), ...a("yr#" + Ee, { onClick: () => {
        ke(Ee);
      } }) })]));
    }
    return h("div", { class: "q-date__view q-date__years flex flex-center" }, [h("div", { class: "col-auto" }, [h(et, { round: true, dense: true, flat: true, icon: O.value[0], ariaLabel: r.lang.date.prevRangeYears(Kn), tabindex: l.value, disable: qe(N), ...a("y-", { onClick: () => {
      D.value -= Kn;
    } }) })]), h("div", { class: "q-date__years-content col self-stretch row items-center" }, he), h("div", { class: "col-auto" }, [h(et, { round: true, dense: true, flat: true, icon: O.value[1], ariaLabel: r.lang.date.nextRangeYears(Kn), tabindex: l.value, disable: qe(X), ...a("y+", { onClick: () => {
      D.value += Kn;
    } }) })])]);
  } };
  function _t2(N) {
    const X = { ...b.value, day: N };
    if (e.range === false) {
      Ae(X, W.value);
      return;
    }
    if ($.value === null) {
      const he = ce.value.find((Ee) => Ee.fill !== true && Ee.i === N);
      if (e.noUnset !== true && he.range !== void 0) {
        de({ target: X, from: he.range.from, to: he.range.to });
        return;
      }
      if (he.selected === true) {
        de(X);
        return;
      }
      const qe = Xn(X);
      $.value = { init: X, initHash: qe, final: X, finalHash: qe }, n("rangeStart", Xe(X));
    } else {
      const he = $.value.initHash, qe = Xn(X), Ee = he <= qe ? { from: $.value.init, to: X } : { from: X, to: $.value.init };
      $.value = null, Un(he === qe ? X : { target: X, ...Ee }), n("rangeEnd", { from: Xe(Ee.from), to: Xe(Ee.to) });
    }
  }
  function bt(N) {
    if ($.value !== null) {
      const X = { ...b.value, day: N };
      Object.assign($.value, { final: X, finalHash: Xn(X) });
    }
  }
  return Object.assign(o, { setToday: le, setView: we, offsetCalendar: Ce, setCalendarTo: Te, setEditingRange: Me }), () => {
    const N = [h("div", { class: "q-date__content col relative-position" }, [h($t, { name: "q-transition--fade" }, Ye[C.value])])], X = Pe(t.default);
    return X !== void 0 && N.push(h("div", { class: "q-date__actions" }, X)), e.name !== void 0 && e.disable !== true && u(N, "push"), h("div", { class: M.value, ...re.value }, [Ve(), h("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, N)]);
  };
} });
function Eg(e, t, n) {
  let o;
  function r() {
    o !== void 0 && (Xi.remove(o), o = void 0);
  }
  return We(() => {
    e.value === true && r();
  }), { removeFromHistory: r, addToHistory() {
    o = { condition: () => n.value === true, handler: t }, Xi.add(o);
  } };
}
var oi = 0, Bs, Rs, Si, Ps = false, gf, bf, pf, zo = null;
function p_(e) {
  y_(e) && Ke(e);
}
function y_(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = Ly(e), n = e.shiftKey && !e.deltaX, o = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), r = n || o ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (M1(a, o)) return o ? r < 0 && a.scrollTop === 0 ? true : r > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : r < 0 && a.scrollLeft === 0 ? true : r > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return true;
}
function yf(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function qa(e) {
  Ps !== true && (Ps = true, requestAnimationFrame(() => {
    Ps = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: o } = document.scrollingElement;
    (Si === void 0 || t !== window.innerHeight) && (Si = n - t, document.scrollingElement.scrollTop = o), o > Si && (document.scrollingElement.scrollTop -= Math.ceil((o - Si) / 8));
  }));
}
function _f(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: o, overflowX: r } = window.getComputedStyle(t);
    Bs = Kl(window), Rs = Lo(window), gf = t.style.left, bf = t.style.top, pf = window.location.href, t.style.left = `-${Bs}px`, t.style.top = `-${Rs}px`, r !== "hidden" && (r === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), o !== "hidden" && (o === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", qa, ht.passiveCapture), window.visualViewport.addEventListener("scroll", qa, ht.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", yf, ht.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", p_, ht.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", qa, ht.passiveCapture), window.visualViewport.removeEventListener("scroll", qa, ht.passiveCapture)) : window.removeEventListener("scroll", yf, ht.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = gf, t.style.top = bf, window.location.href === pf && window.scrollTo(Bs, Rs), Si = void 0);
}
function Ru(e) {
  let t = "add";
  if (e === true) {
    if (oi++, zo !== null) {
      clearTimeout(zo), zo = null;
      return;
    }
    if (oi > 1) return;
  } else {
    if (oi === 0 || (oi--, oi > 0)) return;
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      zo !== null && clearTimeout(zo), zo = setTimeout(() => {
        _f(t), zo = null;
      }, 100);
      return;
    }
  }
  _f(t);
}
function Ag() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Ru(t));
  } };
}
var Ea = 0, __ = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, wf = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, Gl = ge({ name: "QDialog", inheritAttrs: false, props: { ...Wr, ...nr, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Yr, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: o }) {
  const r = xe(), i = H(null), a = H(false), l = H(false);
  let s = null, d = null, c, f;
  const v = m(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: u } = Ag(), { registerTimeout: g } = io(), { registerTick: y, removeTick: w } = Fr(), { transitionProps: x, transitionStyle: _ } = Ql(e, () => wf[e.position][0], () => wf[e.position][1]), p = m(() => _.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: q, renderPortal: B } = wc(r, i, be, "dialog"), { hide: V } = Gr({ showing: a, hideOnRouteChange: v, handleShow: z, handleHide: U, processOnMount: true }), { addToHistory: R, removeFromHistory: D } = Eg(a, V, v), $ = m(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${__[e.position]}` + (l.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), M = m(() => a.value === true && e.seamless !== true), A = m(() => e.autoClose === true ? { onClick: L } : {}), T = m(() => [`q-dialog fullscreen no-pointer-events q-dialog--${M.value === true ? "modal" : "seamless"}`, o.class]);
  me(() => e.maximized, (O) => {
    a.value === true && Y(O);
  }), me(M, (O) => {
    u(O), O === true ? (Xm(G), Ym(ie)) : (Eu(G), gl(ie));
  });
  function z(O) {
    var _a3;
    R(), d = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Y(e.maximized), b(), l.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), y(j)) : w(), g(() => {
      if (r.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: P, bottom: te } = document.activeElement.getBoundingClientRect(), { innerHeight: k } = window, F = window.visualViewport !== void 0 ? window.visualViewport.height : k;
          P > 0 && te > F / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - F, te >= k ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + te - F / 2))), document.activeElement.scrollIntoView();
        }
        f = true, i.value.click(), f = false;
      }
      b(true), l.value = false, n("show", O);
    }, e.transitionDuration);
  }
  function U(O) {
    w(), D(), ye(true), l.value = true, C(), d !== null && ((((O == null ? void 0 : O.type.indexOf("key")) === 0 ? d.closest('[tabindex]:not([tabindex^="-"])') : void 0) || d).focus(), d = null), g(() => {
      C(true), l.value = false, n("hide", O);
    }, e.transitionDuration);
  }
  function j(O) {
    Xr(() => {
      let P = i.value;
      if (P !== null) {
        if (O !== void 0) {
          const te = P.querySelector(O);
          if (te !== null) {
            te.focus({ preventScroll: true });
            return;
          }
        }
        P.contains(document.activeElement) !== true && (P = P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || P.querySelector("[autofocus], [data-autofocus]") || P, P.focus({ preventScroll: true }));
      }
    });
  }
  function K(O) {
    O && typeof O.focus == "function" ? O.focus({ preventScroll: true }) : j(), n("shake");
    const P = i.value;
    P !== null && (P.classList.remove("q-animate--scale"), P.classList.add("q-animate--scale"), s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, i.value !== null && (P.classList.remove("q-animate--scale"), j());
    }, 170));
  }
  function ie() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && K() : (n("escapeKey"), V()));
  }
  function ye(O) {
    s !== null && (clearTimeout(s), s = null), (O === true || a.value === true) && (Y(false), e.seamless !== true && (u(false), Eu(G), gl(ie))), O !== true && (d = null);
  }
  function Y(O) {
    O === true ? c !== true && (Ea < 1 && document.body.classList.add("q-body--dialog"), Ea++, c = true) : c === true && (Ea < 2 && document.body.classList.remove("q-body--dialog"), Ea--, c = false);
  }
  function L(O) {
    f !== true && (V(O), n("click", O));
  }
  function ne(O) {
    e.persistent !== true && e.noBackdropDismiss !== true ? V(O) : e.noShake !== true && K();
  }
  function G(O) {
    e.allowFocusOutside !== true && q.value === true && Om(i.value, O.target) !== true && j('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(r.proxy, { focus: j, shake: K, __updateRefocusTarget(O) {
    d = O || null;
  } }), We(ye);
  function be() {
    return h("div", { role: "dialog", "aria-modal": M.value === true ? "true" : "false", ...o, class: T.value }, [h($t, { name: "q-transition--fade", appear: true }, () => M.value === true ? h("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: ne }) : null), h($t, x.value, () => a.value === true ? h("div", { ref: i, class: $.value, style: _.value, tabindex: -1, ...A.value }, Pe(t.default)) : null)]);
  }
  return B;
} }), xf = 150, Cf = ge({ name: "QDrawer", inheritAttrs: false, props: { ...Wr, ...ot, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Yr, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: o }) {
  const r = xe(), { proxy: { $q: i } } = r, a = rt(e, i), { preventBodyScroll: l } = Ag(), { registerTimeout: s, removeTimeout: d } = io(), c = Lt(hr, ut);
  if (c === ut) return console.error("QDrawer needs to be child of QLayout"), ut;
  let f, v = null, u;
  const g = H(e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint), y = m(() => e.mini === true && g.value !== true), w = m(() => y.value === true ? e.miniWidth : e.width), x = H(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), _ = m(() => e.persistent !== true && (g.value === true || ye.value === true));
  function p(Q, le) {
    if (B(), Q !== false && c.animate(), E(0), g.value === true) {
      const we = c.instances[U.value];
      (we == null ? void 0 : we.belowBreakpoint) === true && we.hide(false), I(1), c.isContainer.value !== true && l(true);
    } else I(0), Q !== false && Z(false);
    s(() => {
      Q !== false && Z(true), le !== true && n("show", Q);
    }, xf);
  }
  function b(Q, le) {
    V(), Q !== false && c.animate(), I(0), E($.value * w.value), ve(), le !== true ? s(() => {
      n("hide", Q);
    }, xf) : d();
  }
  const { show: C, hide: q } = Gr({ showing: x, hideOnRouteChange: _, handleShow: p, handleHide: b }), { addToHistory: B, removeFromHistory: V } = Eg(x, q, _), R = { belowBreakpoint: g, hide: q }, D = m(() => e.side === "right"), $ = m(() => (i.lang.rtl === true ? -1 : 1) * (D.value === true ? 1 : -1)), M = H(0), A = H(false), T = H(false), z = H(w.value * $.value), U = m(() => D.value === true ? "left" : "right"), j = m(() => x.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), K = m(() => e.overlay === true || e.miniToOverlay === true || c.view.value.indexOf(D.value ? "R" : "L") !== -1 || i.platform.is.ios === true && c.isContainer.value === true), ie = m(() => e.overlay === false && x.value === true && g.value === false), ye = m(() => e.overlay === true && x.value === true && g.value === false), Y = m(() => "fullscreen q-drawer__backdrop" + (x.value === false && A.value === false ? " hidden" : "")), L = m(() => ({ backgroundColor: `rgba(0,0,0,${M.value * 0.4})` })), ne = m(() => D.value === true ? c.rows.value.top[2] === "r" : c.rows.value.top[0] === "l"), G = m(() => D.value === true ? c.rows.value.bottom[2] === "r" : c.rows.value.bottom[0] === "l"), be = m(() => {
    const Q = {};
    return c.header.space === true && ne.value === false && (K.value === true ? Q.top = `${c.header.offset}px` : c.header.space === true && (Q.top = `${c.header.size}px`)), c.footer.space === true && G.value === false && (K.value === true ? Q.bottom = `${c.footer.offset}px` : c.footer.space === true && (Q.bottom = `${c.footer.size}px`)), Q;
  }), O = m(() => {
    const Q = { width: `${w.value}px`, transform: `translateX(${z.value}px)` };
    return g.value === true ? Q : Object.assign(Q, be.value);
  }), P = m(() => "q-drawer__content fit " + (c.isContainer.value !== true ? "scroll" : "overflow-auto")), te = m(() => `q-drawer q-drawer--${e.side}` + (T.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (a.value === true ? " q-drawer--dark q-dark" : "") + (A.value === true ? " no-transition" : x.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${y.value === true ? "mini" : "standard"}` + (K.value === true || ie.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (ne.value === true ? " q-drawer--top-padding" : ""))), k = m(() => {
    const Q = i.lang.rtl === true ? e.side : U.value;
    return [[wn, W, void 0, { [Q]: true, mouse: true }]];
  }), F = m(() => {
    const Q = i.lang.rtl === true ? U.value : e.side;
    return [[wn, fe, void 0, { [Q]: true, mouse: true }]];
  }), ee = m(() => {
    const Q = i.lang.rtl === true ? U.value : e.side;
    return [[wn, fe, void 0, { [Q]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint);
  }
  me(g, (Q) => {
    Q === true ? (f = x.value, x.value === true && q(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (x.value === true ? (E(0), I(0), ve()) : C(false));
  }), me(() => e.side, (Q, le) => {
    c.instances[le] === R && (c.instances[le] = void 0, c[le].space = false, c[le].offset = 0), c.instances[Q] = R, c[Q].size = w.value, c[Q].space = ie.value, c[Q].offset = j.value;
  }), me(c.totalWidth, () => {
    (c.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), me(() => e.behavior + e.breakpoint, S), me(c.isContainer, (Q) => {
    x.value === true && l(Q !== true), Q === true && S();
  }), me(c.scrollbarWidth, () => {
    E(x.value === true ? 0 : void 0);
  }), me(j, (Q) => {
    ue("offset", Q);
  }), me(ie, (Q) => {
    n("onLayout", Q), ue("space", Q);
  }), me(D, () => {
    E();
  }), me(w, (Q) => {
    E(), re(e.miniToOverlay, Q);
  }), me(() => e.miniToOverlay, (Q) => {
    re(Q, w.value);
  }), me(() => i.lang.rtl, () => {
    E();
  }), me(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (oe(), c.animate());
  }), me(y, (Q) => {
    n("miniState", Q);
  });
  function E(Q) {
    Q === void 0 ? Qe(() => {
      Q = x.value === true ? 0 : w.value, E($.value * Q);
    }) : (c.isContainer.value === true && D.value === true && (g.value === true || Math.abs(Q) === w.value) && (Q += $.value * c.scrollbarWidth.value), z.value = Q);
  }
  function I(Q) {
    M.value = Q;
  }
  function Z(Q) {
    const le = Q === true ? "remove" : c.isContainer.value !== true ? "add" : "";
    le !== "" && document.body.classList[le]("q-body--drawer-toggle");
  }
  function oe() {
    v !== null && clearTimeout(v), r.proxy && r.proxy.$el && r.proxy.$el.classList.add("q-drawer--mini-animate"), T.value = true, v = setTimeout(() => {
      var _a3, _b2;
      v = null, T.value = false, (_b2 = (_a3 = r == null ? void 0 : r.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function W(Q) {
    if (x.value !== false) return;
    const le = w.value, we = vt(Q.distance.x, 0, le);
    if (Q.isFinal === true) {
      we >= Math.min(75, le) === true ? C() : (c.animate(), I(0), E($.value * le)), A.value = false;
      return;
    }
    E((i.lang.rtl === true ? D.value !== true : D.value) ? Math.max(le - we, 0) : Math.min(0, we - le)), I(vt(we / le, 0, 1)), Q.isFirst === true && (A.value = true);
  }
  function fe(Q) {
    if (x.value !== true) return;
    const le = w.value, we = Q.direction === e.side, Ce = (i.lang.rtl === true ? we !== true : we) ? vt(Q.distance.x, 0, le) : 0;
    if (Q.isFinal === true) {
      Math.abs(Ce) < Math.min(75, le) === true ? (c.animate(), I(1), E(0)) : q(), A.value = false;
      return;
    }
    E($.value * Ce), I(vt(1 - Ce / le, 0, 1)), Q.isFirst === true && (A.value = true);
  }
  function ve() {
    l(false), Z(true);
  }
  function ue(Q, le) {
    c.update(e.side, Q, le);
  }
  function ce(Q, le) {
    Q.value !== le && (Q.value = le);
  }
  function re(Q, le) {
    ue("size", Q === true ? e.miniWidth : le);
  }
  return c.instances[e.side] = R, re(e.miniToOverlay, w.value), ue("space", ie.value), ue("offset", j.value), e.showIfAbove === true && e.modelValue !== true && x.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), st(() => {
    n("onLayout", ie.value), n("miniState", y.value), f = e.showIfAbove === true;
    const Q = () => {
      (x.value === true ? p : b)(false, true);
    };
    if (c.totalWidth.value !== 0) {
      Qe(Q);
      return;
    }
    u = me(c.totalWidth, () => {
      u(), u = void 0, x.value === false && e.showIfAbove === true && g.value === false ? C(false) : Q();
    });
  }), We(() => {
    u == null ? void 0 : u(), v !== null && (clearTimeout(v), v = null), x.value === true && ve(), c.instances[e.side] === R && (c.instances[e.side] = void 0, ue("size", 0), ue("offset", 0), ue("space", false));
  }), () => {
    const Q = [];
    g.value === true && (e.noSwipeOpen === false && Q.push(hn(h("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), k.value)), Q.push(Sn("div", { ref: "backdrop", class: Y.value, style: L.value, "aria-hidden": "true", onClick: q }, void 0, "backdrop", e.noSwipeBackdrop !== true && x.value === true, () => ee.value)));
    const le = y.value === true && t.mini !== void 0, we = [h("div", { ...o, key: "" + le, class: [P.value, o.class] }, le === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && x.value === true && we.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(Sn("aside", { ref: "content", class: te.value, style: O.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => F.value)), h("div", { class: "q-drawer-container" }, Q);
  };
} });
function Lg(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const o = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, r = o.display;
  return r === "block" || r === "table" ? e : Lg(e.parentNode);
}
function Ds(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function Bg(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let o = 0; t.count !== 0 && o < e.childNodes.length; o++) n = Bg(e.childNodes[o], t, n);
  return n;
}
var w_ = /^https?:\/\//, x_ = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (Ds(e.anchorNode, this.el, true) && Ds(e.focusNode, this.el, true)) return e;
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
    return e !== null ? Lg(e, this.el) : null;
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
    const n = document.getSelection(), o = this.el.parentNode;
    if (n.focusNode && Ds(n.focusNode, o)) for (t = n.focusNode, e = n.focusOffset; t && t !== o; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = Bg(this.el, { count: this.savedPos });
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
        const o = document.queryCommandState(e);
        return t !== void 0 ? o === t : o;
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
  apply(e, t, n = Tt) {
    if (e === "formatBlock") ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(t) && this.is(e, t) && (e = "outdent", t = null), t === "PRE" && this.is(e, "PRE") && (t = "P");
    else if (e === "print") {
      n();
      const o = window.open();
      o.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), o.print(), o.close();
      return;
    } else if (e === "link") {
      const o = this.getParentAttribute("href");
      if (o === null) {
        const r = this.selectWord(this.selection), i = r ? r.toString() : "";
        if (!i.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = w_.test(i) ? i : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(r.getRangeAt(0));
      } else this.eVm.editLinkUrl.value = o, this.range.selectNodeContents(this.parent), this.save();
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
    const o = e.focusNode, r = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(o, r), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, C_ = ge({ name: "QTooltip", inheritAttrs: false, props: { ...Nm, ...Wr, ...nr, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...nr.transitionShow, default: "jump-down" }, transitionHide: { ...nr.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: _l }, self: { type: String, default: "top middle", validator: _l }, offset: { type: Array, default: () => [14, 14], validator: Zm }, scrollTarget: mr, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Yr], setup(e, { slots: t, emit: n, attrs: o }) {
  let r, i;
  const a = xe(), { proxy: { $q: l } } = a, s = H(null), d = H(false), c = m(() => wl(e.anchor, l.lang.rtl)), f = m(() => wl(e.self, l.lang.rtl)), v = m(() => e.persistent !== true), { registerTick: u, removeTick: g } = Fr(), { registerTimeout: y } = io(), { transitionProps: w, transitionStyle: x } = Ql(e), { localScrollTarget: _, changeScrollEvent: p, unconfigureScrollTarget: b } = Hm(e, ye), { anchorEl: C, canShow: q, anchorEvents: B } = yc({ showing: d, configureAnchorEl: ie }), { show: V, hide: R } = Gr({ showing: d, canShow: q, handleShow: A, handleHide: T, hideOnRouteChange: v, processOnMount: true });
  Object.assign(B, { delayShow: j, delayHide: K });
  const { showPortal: D, hidePortal: $, renderPortal: M } = wc(a, s, L, "tooltip");
  if (l.platform.is.mobile === true) {
    const ne = { anchorEl: C, innerRef: s, onClickOutside(be) {
      return R(be), be.target.classList.contains("q-dialog__backdrop") && Ke(be), true;
    } }, G = m(() => e.modelValue === null && e.persistent !== true && d.value === true);
    me(G, (be) => {
      (be === true ? Jm : yl)(ne);
    }), We(() => {
      yl(ne);
    });
  }
  function A(ne) {
    D(), u(() => {
      i = new MutationObserver(() => U()), i.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), U(), ye();
    }), r === void 0 && (r = me(() => l.screen.width + "|" + l.screen.height + "|" + e.self + "|" + e.anchor + "|" + l.lang.rtl, U)), y(() => {
      D(true), n("show", ne);
    }, e.transitionDuration);
  }
  function T(ne) {
    g(), $(), z(), y(() => {
      $(true), n("hide", ne);
    }, e.transitionDuration);
  }
  function z() {
    i !== void 0 && (i.disconnect(), i = void 0), r !== void 0 && (r(), r = void 0), b(), Zt(B, "tooltipTemp");
  }
  function U() {
    xc({ targetEl: s.value, offset: e.offset, anchorEl: C.value, anchorOrigin: c.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function j(ne) {
    if (l.platform.is.mobile === true) {
      Pn(), document.body.classList.add("non-selectable");
      const G = C.value, be = ["touchmove", "touchcancel", "touchend", "click"].map((O) => [G, O, "delayHide", "passiveCapture"]);
      Et(B, "tooltipTemp", be);
    }
    y(() => {
      V(ne);
    }, e.delay);
  }
  function K(ne) {
    l.platform.is.mobile === true && (Zt(B, "tooltipTemp"), Pn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), y(() => {
      R(ne);
    }, e.hideDelay);
  }
  function ie() {
    if (e.noParentEvent === true || C.value === null) return;
    const ne = l.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    Et(B, "anchor", ne);
  }
  function ye() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      _.value = jn(C.value, e.scrollTarget);
      const ne = e.noParentEvent === true ? U : R;
      p(_.value, ne);
    }
  }
  function Y() {
    return d.value === true ? h("div", { ...o, ref: s, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", o.class], style: [o.style, x.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function L() {
    return h($t, w.value, Y);
  }
  return We(z), Object.assign(a.proxy, { updatePosition: U }), M;
} }), jr = ge({ name: "QItem", props: { ...ot, ...da, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = rt(e, o), { hasLink: i, linkAttrs: a, linkClass: l, linkTag: s, navigateOnClick: d } = jl(), c = H(null), f = H(null), v = m(() => e.clickable === true || i.value === true || e.tag === "label"), u = m(() => e.disable !== true && v.value === true), g = m(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (r.value === true ? " q-item--dark" : "") + (i.value === true && e.active === null ? l.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (u.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), y = m(() => e.insetLevel === void 0 ? null : { ["padding" + (o.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(p) {
    u.value === true && (f.value !== null && p.qAvoidFocus !== true && (p.qKeyEvent !== true && document.activeElement === c.value ? f.value.focus() : document.activeElement === f.value && c.value.focus()), d(p));
  }
  function x(p) {
    if (u.value === true && Cn(p, [13, 32]) === true) {
      Ke(p), p.qKeyEvent = true;
      const b = new MouseEvent("click", p);
      b.qKeyEvent = true, c.value.dispatchEvent(b);
    }
    n("keyup", p);
  }
  function _() {
    const p = ca(t.default, []);
    return u.value === true && p.unshift(h("div", { class: "q-focus-helper", tabindex: -1, ref: f })), p;
  }
  return () => {
    const p = { ref: c, class: g.value, style: y.value, role: "listitem", onClick: w, onKeyup: x };
    return u.value === true ? (p.tabindex = e.tabindex || "0", Object.assign(p, a.value)) : v.value === true && (p["aria-disabled"] = "true"), h(s.value, p, _());
  };
} }), yn = ge({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = m(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => h("div", { class: n.value }, Pe(t.default));
} });
function Rg(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Dc(e) {
  return h("div", { class: "q-editor__toolbar-group" }, e);
}
function Pg(e, t, n, o = false) {
  const r = o || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), i = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const a = t.key ? h("div", [h("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    i.push(h(C_, { delay: 1e3 }, () => [h("div", { innerHTML: t.tip }), a]));
  }
  return h(et, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: r ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: r && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(a) {
    n == null ? void 0 : n(), Rg(a, t, e);
  } }, () => i);
}
function S_(e, t) {
  const n = t.list === "only-icons";
  let o = t.label, r = t.icon !== null ? t.icon : void 0, i, a;
  function l() {
    d.component.proxy.hide();
  }
  if (n) a = t.options.map((c) => {
    const f = c.type === void 0 ? e.caret.is(c.cmd, c.param) : false;
    return f && (o = c.tip, r = c.icon !== null ? c.icon : void 0), Pg(e, c, l, f);
  }), i = e.toolbarBackgroundClass.value, a = [Dc(a)];
  else {
    const c = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, v = t.list === "no-icons";
    a = t.options.map((u) => {
      const g = u.disable ? u.disable(e) : false, y = u.type === void 0 ? e.caret.is(u.cmd, u.param) : false;
      y && (o = u.tip, r = u.icon !== null ? u.icon : void 0);
      const w = u.htmlTip;
      return h(jr, { active: y, activeClass: c, clickable: true, disable: g, dense: true, onClick(x) {
        var _a3;
        l(), (x == null ? void 0 : x.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), Rg(x, u, e);
      } }, () => [v === true ? null : h(yn, { class: y ? c : f, side: true }, () => h(tt, { name: u.icon !== null ? u.icon : void 0 })), h(yn, w ? () => h("div", { class: "text-no-wrap", innerHTML: u.htmlTip }) : u.tip ? () => h("div", { class: "text-no-wrap" }, u.tip) : void 0)]);
    }), i = [e.toolbarBackgroundClass.value, f];
  }
  const s = t.highlight && o !== t.label, d = h(F1, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : o, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : r, contentClass: i, onShow: (c) => e.emit("dropdownShow", c), onHide: (c) => e.emit("dropdownHide", c), onBeforeShow: (c) => e.emit("dropdownBeforeShow", c), onBeforeHide: (c) => e.emit("dropdownBeforeHide", c) }, () => a);
  return d;
}
function T_(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Dc(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? S_(e, n) : Pg(e, n))));
}
function k_(e, t, n, o = {}) {
  const r = Object.keys(o);
  if (r.length === 0) return {};
  const i = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return r.forEach((a) => {
    const l = o[a];
    i[a] = { cmd: "fontName", param: l, icon: n, tip: l, htmlTip: `<font face="${l}">${l}</font>` };
  }), i;
}
function M_(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const o = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [h("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), h("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (r) => {
      St(r), n = r.target.value;
    }, onKeydown: (r) => {
      if (vr(r) !== true) switch (r.keyCode) {
        case 13:
          return Nt(r), o();
        case 27:
          Nt(r), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Dc([h(et, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), h(et, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: o })])];
  }
}
var Sf = /^on[A-Z]/;
function Dg() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: H({}), attributes: H({}) };
  function o() {
    const r = {}, i = {};
    for (const a in e) a !== "class" && a !== "style" && Sf.test(a) === false && (r[a] = e[a]);
    for (const a in t.props) Sf.test(a) === true && (i[a] = t.props[a]);
    n.attributes.value = r, n.listeners.value = i;
  }
  return fr(o), o(), n;
}
var q_ = Object.prototype.toString, Os = Object.prototype.hasOwnProperty, E_ = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Tf(e) {
  if (e !== Object(e) || E_.has(q_.call(e)) === true || e.constructor && Os.call(e, "constructor") === false && Os.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Os.call(e, t);
}
function Og() {
  let e, t, n, o, r, i, a = arguments[0] || {}, l = 1, s = false;
  const d = arguments.length;
  for (typeof a == "boolean" && (s = a, a = arguments[1] || {}, l = 2), Object(a) !== a && typeof a != "function" && (a = {}), d === l && (a = this, l--); l < d; l++) if ((e = arguments[l]) !== null) for (t in e) n = a[t], o = e[t], a !== o && (s === true && o && ((r = Array.isArray(o)) || Tf(o) === true) ? (r === true ? i = Array.isArray(n) === true ? n : [] : i = Tf(n) === true ? n : {}, a[t] = Og(s, i, o)) : o !== void 0 && (a[t] = o));
  return a;
}
ge({ name: "QEditor", props: { ...ot, ...Ec, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ac, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = rt(e, r), { inFullscreen: a, toggleFullscreen: l } = Lc(), s = Dg(), d = H(null), c = H(null), f = H(null), v = H(false), u = m(() => !e.readonly && !e.disable);
  let g, y, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const x = m(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), _ = m(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !u.value, size: "sm" })), p = m(() => {
    const O = r.lang.editor, P = r.iconSet.editor;
    return { bold: { cmd: "bold", icon: P.bold, tip: O.bold, key: 66 }, italic: { cmd: "italic", icon: P.italic, tip: O.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: P.strikethrough, tip: O.strikethrough, key: 83 }, underline: { cmd: "underline", icon: P.underline, tip: O.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: P.unorderedList, tip: O.unorderedList }, ordered: { cmd: "insertOrderedList", icon: P.orderedList, tip: O.orderedList }, subscript: { cmd: "subscript", icon: P.subscript, tip: O.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: P.superscript, tip: O.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (te) => te.caret && !te.caret.can("link"), icon: P.hyperlink, tip: O.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: P.toggleFullscreen, tip: O.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: P.viewSource, tip: O.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: P.quote, tip: O.quote, key: 81 }, left: { cmd: "justifyLeft", icon: P.left, tip: O.left }, center: { cmd: "justifyCenter", icon: P.center, tip: O.center }, right: { cmd: "justifyRight", icon: P.right, tip: O.right }, justify: { cmd: "justifyFull", icon: P.justify, tip: O.justify }, print: { type: "no-state", cmd: "print", icon: P.print, tip: O.print, key: 80 }, outdent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("outdent"), cmd: "outdent", icon: P.outdent, tip: O.outdent }, indent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("indent"), cmd: "indent", icon: P.indent, tip: O.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: P.removeFormat, tip: O.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: P.hr, tip: O.hr }, undo: { type: "no-state", cmd: "undo", icon: P.undo, tip: O.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: P.redo, tip: O.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: P.heading1 || P.heading, tip: O.heading1, htmlTip: `<h1 class="q-ma-none">${O.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: P.heading2 || P.heading, tip: O.heading2, htmlTip: `<h2 class="q-ma-none">${O.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: P.heading3 || P.heading, tip: O.heading3, htmlTip: `<h3 class="q-ma-none">${O.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: P.heading4 || P.heading, tip: O.heading4, htmlTip: `<h4 class="q-ma-none">${O.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: P.heading5 || P.heading, tip: O.heading5, htmlTip: `<h5 class="q-ma-none">${O.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: P.heading6 || P.heading, tip: O.heading6, htmlTip: `<h6 class="q-ma-none">${O.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: P.heading, tip: O.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: P.code, htmlTip: `<code>${O.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: P.size1 || P.size, tip: O.size1, htmlTip: `<font size="1">${O.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: P.size2 || P.size, tip: O.size2, htmlTip: `<font size="2">${O.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: P.size3 || P.size, tip: O.size3, htmlTip: `<font size="3">${O.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: P.size4 || P.size, tip: O.size4, htmlTip: `<font size="4">${O.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: P.size5 || P.size, tip: O.size5, htmlTip: `<font size="5">${O.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: P.size6 || P.size, tip: O.size6, htmlTip: `<font size="6">${O.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: P.size7 || P.size, tip: O.size7, htmlTip: `<font size="7">${O.size7}</font>` } };
  }), b = m(() => {
    const O = e.definitions || {}, P = e.definitions || e.fonts ? Og(true, {}, p.value, O, k_(g, r.lang.editor.defaultFont, r.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((te) => te.map((k) => {
      if (k.options) return { type: "dropdown", icon: k.icon, label: k.label, size: "sm", dense: true, fixedLabel: k.fixedLabel, fixedIcon: k.fixedIcon, highlight: k.highlight, list: k.list, options: k.options.map((ee) => P[ee]) };
      const F = P[k];
      return F ? F.type === "no-state" || O[k] && (F.cmd === void 0 || p.value[F.cmd] && p.value[F.cmd].type === "no-state") ? F : Object.assign({ type: "toggle" }, F) : { type: "slot", slot: k };
    }));
  }), C = { $q: r, props: e, slots: t, emit: n, inFullscreen: a, toggleFullscreen: l, runCmd: L, isViewingSource: v, editLinkUrl: f, toolbarBackgroundClass: x, buttonProps: _, contentRef: c, buttons: b, setContent: Y };
  me(() => e.modelValue, (O) => {
    w !== O && (w = O, Y(O, true));
  }), me(f, (O) => {
    n(`link${O ? "Show" : "Hide"}`);
  });
  const q = m(() => e.toolbar && e.toolbar.length !== 0), B = m(() => {
    const O = {}, P = (te) => {
      te.key && (O[te.key] = { cmd: te.cmd, param: te.param });
    };
    return b.value.forEach((te) => {
      te.forEach((k) => {
        k.options ? k.options.forEach(P) : P(k);
      });
    }), O;
  }), V = m(() => a.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), R = m(() => `q-editor q-editor--${v.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (a.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (i.value === true ? " q-editor--dark q-dark" : "")), D = m(() => [e.contentClass, "q-editor__content", { col: a.value, "overflow-auto": a.value || e.maxHeight }]), $ = m(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function M() {
    if (c.value !== null) {
      const O = `inner${v.value === true ? "Text" : "HTML"}`, P = c.value[O];
      P !== e.modelValue && (w = P, n("update:modelValue", P));
    }
  }
  function A(O) {
    if (n("keydown", O), O.ctrlKey !== true || vr(O) === true) {
      ne();
      return;
    }
    const P = O.keyCode, te = B.value[P];
    if (te !== void 0) {
      const { cmd: k, param: F } = te;
      Ke(O), L(k, F, false);
    }
  }
  function T(O) {
    ne(), n("click", O);
  }
  function z(O) {
    if (c.value !== null) {
      const { scrollTop: P, scrollHeight: te } = c.value;
      y = te - P;
    }
    C.caret.save(), n("blur", O);
  }
  function U(O) {
    Qe(() => {
      c.value !== null && y !== void 0 && (c.value.scrollTop = c.value.scrollHeight - y);
    }), n("focus", O);
  }
  function j(O) {
    const P = d.value;
    if (P !== null && P.contains(O.target) === true && (O.relatedTarget === null || P.contains(O.relatedTarget) !== true)) {
      const te = `inner${v.value === true ? "Text" : "HTML"}`;
      C.caret.restorePosition(c.value[te].length), ne();
    }
  }
  function K(O) {
    const P = d.value;
    P !== null && P.contains(O.target) === true && (O.relatedTarget === null || P.contains(O.relatedTarget) !== true) && (C.caret.savePosition(), ne());
  }
  function ie() {
    y = void 0;
  }
  function ye(O) {
    C.caret.save();
  }
  function Y(O, P) {
    if (c.value !== null) {
      P === true && C.caret.savePosition();
      const te = `inner${v.value === true ? "Text" : "HTML"}`;
      c.value[te] = O, P === true && (C.caret.restorePosition(c.value[te].length), ne());
    }
  }
  function L(O, P, te = true) {
    G(), C.caret.restore(), C.caret.apply(O, P, () => {
      G(), C.caret.save(), te && ne();
    });
  }
  function ne() {
    setTimeout(() => {
      f.value = null, o.$forceUpdate();
    }, 1);
  }
  function G() {
    Xr(() => {
      var _a3;
      (_a3 = c.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function be() {
    return c.value;
  }
  return st(() => {
    C.caret = o.caret = new x_(c.value, C), Y(e.modelValue), ne(), document.addEventListener("selectionchange", ye);
  }), We(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(o, { runCmd: L, refreshToolbar: ne, focus: G, getContentEl: be }), () => {
    let O;
    if (q.value) {
      const P = [h("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + x.value }, T_(C))];
      f.value !== null && P.push(h("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + x.value }, M_(C))), O = h("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, P);
    }
    return h("div", { ref: d, class: R.value, style: { height: a.value === true ? "100%" : null }, ...$.value, onFocusin: j, onFocusout: K }, [O, h("div", { ref: c, style: V.value, class: D.value, contenteditable: u.value, placeholder: e.placeholder, ...s.listeners.value, onInput: M, onKeydown: A, onClick: T, onBlur: z, onFocus: U, onMousedown: ie, onTouchstartPassive: ie })]);
  };
} });
var Pu = ge({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = m(() => parseInt(e.lines, 10)), o = m(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), r = m(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => h("div", { style: r.value, class: o.value }, Pe(t.default));
} }), Oc = ge({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let o = false, r, i, a = null, l = null, s, d;
  function c() {
    r == null ? void 0 : r(), r = null, o = false, a !== null && (clearTimeout(a), a = null), l !== null && (clearTimeout(l), l = null), i == null ? void 0 : i.removeEventListener("transitionend", s), s = null;
  }
  function f(y, w, x) {
    w !== void 0 && (y.style.height = `${w}px`), y.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, o = true, r = x;
  }
  function v(y, w) {
    y.style.overflowY = null, y.style.height = null, y.style.transition = null, c(), w !== d && n(w);
  }
  function u(y, w) {
    let x = 0;
    i = y, o === true ? (c(), x = y.offsetHeight === y.scrollHeight ? 0 : void 0) : (d = "hide", y.style.overflowY = "hidden"), f(y, x, w), a = setTimeout(() => {
      a = null, y.style.height = `${y.scrollHeight}px`, s = (_) => {
        l = null, (Object(_) !== _ || _.target === y) && v(y, "show");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  function g(y, w) {
    let x;
    i = y, o === true ? c() : (d = "show", y.style.overflowY = "hidden", x = y.scrollHeight), f(y, x, w), a = setTimeout(() => {
      a = null, y.style.height = 0, s = (_) => {
        l = null, (Object(_) !== _ || _.target === y) && v(y, "hide");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  return We(() => {
    o === true && c();
  }), () => h($t, { css: false, appear: e.appear, onEnter: u, onLeave: g }, t.default);
} }), A_ = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Vs = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, ur = ge({ name: "QSeparator", props: { ...ot, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = rt(e, t.proxy.$q), o = m(() => e.vertical === true ? "vertical" : "horizontal"), r = m(() => ` q-separator--${o.value}`), i = m(() => e.inset !== false ? `${r.value}-${A_[e.inset]}` : ""), a = m(() => `q-separator${r.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), l = m(() => {
    const s = {};
    if (e.size !== void 0 && (s[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const d = e.spaced === true ? `${Vs.md}px` : e.spaced in Vs ? `${Vs[e.spaced]}px` : e.spaced, c = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      s[`margin${c[0]}`] = s[`margin${c[1]}`] = d;
    }
    return s;
  });
  return () => h("hr", { class: a.value, style: l.value, "aria-orientation": o.value });
} }), Ho = ec({}), L_ = Object.keys(da);
ge({ name: "QExpansionItem", props: { ...da, ...Wr, ...ot, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Yr, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = rt(e, o), i = H(e.modelValue !== null ? e.modelValue : e.defaultOpened), a = H(null), l = Yl(), { show: s, hide: d, toggle: c } = Gr({ showing: i });
  let f, v;
  const u = m(() => `q-expansion-item q-item-type q-expansion-item--${i.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = m(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (o.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), y = m(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = m(() => {
    const j = {};
    return L_.forEach((K) => {
      j[K] = e[K];
    }), j;
  }), x = m(() => y.value === true || e.expandIconToggle !== true), _ = m(() => e.expandedIcon !== void 0 && i.value === true ? e.expandedIcon : e.expandIcon || o.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = m(() => e.disable !== true && (y.value === true || e.expandIconToggle === true)), b = m(() => ({ expanded: i.value === true, detailsId: l.value, toggle: c, show: s, hide: d })), C = m(() => {
    const j = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : o.lang.label[i.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": l.value, "aria-label": j };
  });
  me(() => e.group, (j) => {
    v == null ? void 0 : v(), j !== void 0 && $();
  });
  function q(j) {
    y.value !== true && c(j), n("click", j);
  }
  function B(j) {
    j.keyCode === 13 && V(j, true);
  }
  function V(j, K) {
    var _a3;
    K !== true && j.qAvoidFocus !== true && ((_a3 = a.value) == null ? void 0 : _a3.focus()), c(j), Ke(j);
  }
  function R() {
    n("afterShow");
  }
  function D() {
    n("afterHide");
  }
  function $() {
    f === void 0 && (f = ea()), i.value === true && (Ho[e.group] = f);
    const j = me(i, (ie) => {
      ie === true ? Ho[e.group] = f : Ho[e.group] === f && delete Ho[e.group];
    }), K = me(() => Ho[e.group], (ie, ye) => {
      ye === f && ie !== void 0 && ie !== f && d();
    });
    v = () => {
      j(), K(), Ho[e.group] === f && delete Ho[e.group], v = void 0;
    };
  }
  function M() {
    const j = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, K = [h(tt, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && i.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: _.value })];
    return p.value === true && (Object.assign(j, { tabindex: 0, ...C.value, onClick: V, onKeyup: B }), K.unshift(h("div", { ref: a, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), h(yn, j, () => K);
  }
  function A() {
    let j;
    return t.header !== void 0 ? j = [].concat(t.header(b.value)) : (j = [h(yn, () => [h(Pu, { lines: e.labelLines }, () => e.label || ""), e.caption ? h(Pu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && j[e.switchToggleSide === true ? "push" : "unshift"](h(yn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => h(tt, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && j[e.switchToggleSide === true ? "unshift" : "push"](M()), j;
  }
  function T() {
    const j = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: r.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return x.value === true && (j.clickable = true, j.onClick = q, Object.assign(j, y.value === true ? w.value : C.value)), h(jr, j, A);
  }
  function z() {
    return hn(h("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: l.value }, Pe(t.default)), [[lm, i.value]]);
  }
  function U() {
    const j = [T(), h(Oc, { duration: e.duration, onShow: R, onHide: D }, z)];
    return e.expandSeparator === true && j.push(h(ur, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: r.value }), h(ur, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: r.value })), j;
  }
  return e.group !== void 0 && $(), We(() => {
    v == null ? void 0 : v();
  }), () => h("div", { class: u.value }, [h("div", { class: "q-expansion-item__container relative-position" }, U())]);
} });
var B_ = ["top", "right", "bottom", "left"], Du = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => B_.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function Vg(e, t) {
  return { formClass: m(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: m(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: m(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var R_ = ["up", "right", "down", "left"], P_ = ["left", "center", "right"];
ge({ name: "QFab", props: { ...Du, ...Wr, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Du.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => R_.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => P_.includes(e) } }, emits: Yr, setup(e, { slots: t }) {
  const n = H(null), o = H(e.modelValue === true), r = Yl(), { proxy: { $q: i } } = xe(), { formClass: a, labelProps: l } = Vg(e, o), s = m(() => e.persistent !== true), { hide: d, toggle: c } = Gr({ showing: o, hideOnRouteChange: s }), f = m(() => ({ opened: o.value })), v = m(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${a.value}` + (o.value === true ? " q-fab--opened" : " q-fab--closed")), u = m(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${o.value === true ? "opened" : "closed"}`), g = m(() => {
    const _ = { id: r.value, role: "menu" };
    return o.value !== true && (_["aria-hidden"] = "true"), _;
  }), y = m(() => `q-fab__icon-holder  q-fab__icon-holder--${o.value === true ? "opened" : "closed"}`);
  function w(_, p) {
    const b = t[_], C = `q-fab__${_} absolute-full`;
    return b === void 0 ? h(tt, { class: C, name: e[p] || i.iconSet.fab[p] }) : h("div", { class: C }, b(f.value));
  }
  function x() {
    const _ = [];
    return e.hideIcon !== true && _.push(h("div", { class: y.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && _[l.value.action](h("div", l.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), At(t.tooltip, _);
  }
  return _n(Sm, { showing: o, onChildClick(_) {
    var _a3;
    d(_), (_ == null ? void 0 : _.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => h("div", { class: v.value }, [h(et, { ref: n, class: a.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": o.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": r.value, onClick: c }, x), h("div", { class: u.value, ...g.value }, Pe(t.default))]);
} });
var Fg = { start: "self-end", center: "self-center", end: "self-start" }, D_ = Object.keys(Fg);
ge({ name: "QFabAction", props: { ...Du, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => D_.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const o = Lt(Sm, () => ({ showing: { value: true }, onChildClick: Tt })), { formClass: r, labelProps: i } = Vg(e, o.showing), a = m(() => {
    const f = Fg[e.anchor];
    return r.value + (f !== void 0 ? ` ${f}` : "");
  }), l = m(() => e.disable === true || o.showing.value !== true);
  function s(f) {
    o.onChildClick(f), n("click", f);
  }
  function d() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(h(tt, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[i.value.action](h("div", i.value.data, t.label !== void 0 ? t.label() : [e.label])), At(t.default, f);
  }
  const c = xe();
  return Object.assign(c.proxy, { click: s }), () => h(et, { class: a.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: l.value, onClick: s }, d);
} });
function O_({ validate: e, resetValidation: t, requiresQForm: n }) {
  const o = Lt(Tm, false);
  if (o !== false) {
    const { props: r, proxy: i } = xe();
    Object.assign(i, { validate: e, resetValidation: t }), me(() => r.disable, (a) => {
      a === true ? (typeof t == "function" && t(), o.unbindComponent(i)) : o.bindComponent(i);
    }), st(() => {
      r.disable !== true && o.bindComponent(i);
    }), We(() => {
      r.disable !== true && o.unbindComponent(i);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var V_ = [true, false, "ondemand"], F_ = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => V_.includes(e) } };
function $_(e, t) {
  const { props: n, proxy: o } = xe(), r = H(false), i = H(null), a = H(false);
  O_({ validate: y, resetValidation: g });
  let l = 0, s;
  const d = m(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), c = m(() => n.disable !== true && d.value === true && t.value === false), f = m(() => n.error === true || r.value === true), v = m(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
  me(() => n.modelValue, () => {
    a.value = true, c.value === true && n.lazyRules === false && w();
  });
  function u() {
    n.lazyRules !== "ondemand" && c.value === true && a.value === true && w();
  }
  me(() => n.reactiveRules, (x) => {
    x === true ? s === void 0 && (s = me(() => n.rules, u, { immediate: true, deep: true })) : s !== void 0 && (s(), s = void 0);
  }, { immediate: true }), me(() => n.lazyRules, u), me(e, (x) => {
    x === true ? a.value = true : c.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    l++, t.value = false, a.value = false, r.value = false, i.value = null, w.cancel();
  }
  function y(x = n.modelValue) {
    if (n.disable === true || d.value === false) return true;
    const _ = ++l, p = t.value !== true ? () => {
      a.value = true;
    } : () => {
    }, b = (q, B) => {
      q === true && p(), r.value = q, i.value = B || null, t.value = false;
    }, C = [];
    for (let q = 0; q < n.rules.length; q++) {
      const B = n.rules[q];
      let V;
      if (typeof B == "function" ? V = B(x, Ua) : typeof B == "string" && Ua[B] !== void 0 && (V = Ua[B](x)), V === false || typeof V == "string") return b(true, V), false;
      V !== true && V !== void 0 && C.push(V);
    }
    return C.length === 0 ? (b(false), true) : (t.value = true, Promise.all(C).then((q) => {
      if (q === void 0 || Array.isArray(q) === false || q.length === 0) return _ === l && b(false), true;
      const B = q.find((V) => V === false || typeof V == "string");
      return _ === l && b(B !== void 0, B), B === void 0;
    }, (q) => (_ === l && (console.error(q), b(true)), false)));
  }
  const w = Kr(y, 0);
  return We(() => {
    s == null ? void 0 : s(), w.cancel();
  }), Object.assign(o, { resetValidation: g, validate: y }), It(o, "hasError", () => f.value), { isDirtyModel: a, hasRules: d, hasError: f, errorMessage: v, validate: y, resetValidation: g };
}
function cr(e) {
  return e != null && ("" + e).length !== 0;
}
var $g = { ...ot, ...F_, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, Xl = { ...$g, maxlength: [Number, String] }, Jl = ["update:modelValue", "clear", "focus", "blur"];
function Zl({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: o, proxy: r } = xe(), i = rt(o, r.$q), a = Yl({ required: e, getValue: () => o.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? m(() => o.tag) : { value: "label" }, isDark: i, editable: m(() => o.disable !== true && o.readonly !== true), innerLoading: H(false), focused: H(false), hasPopupOpen: false, splitAttrs: Dg(), targetUid: a, rootRef: H(null), targetRef: H(null), controlRef: H(null) };
}
function es(e) {
  const { props: t, emit: n, slots: o, attrs: r, proxy: i } = xe(), { $q: a } = i;
  let l = null;
  e.hasValue === void 0 && (e.hasValue = m(() => cr(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (K) => {
    n("update:modelValue", K);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: R, onFocusout: D }), Object.assign(e, { clearValue: $, onControlFocusin: R, onControlFocusout: D, focus: B }), e.computedCounter === void 0 && (e.computedCounter = m(() => {
    if (t.counter !== false) {
      const K = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, ie = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return K + (ie !== void 0 ? " / " + ie : "");
    }
  }));
  const { isDirtyModel: s, hasRules: d, hasError: c, errorMessage: f, resetValidation: v } = $_(e.focused, e.innerLoading), u = e.floatingLabel !== void 0 ? m(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : m(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = m(() => t.bottomSlots === true || t.hint !== void 0 || d.value === true || t.counter === true || t.error !== null), y = m(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = m(() => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (u.value === true ? " q-field--float" : "") + (_.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (c.value === true ? " q-field--error" : "") + (c.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), x = m(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), _ = m(() => t.labelSlot === true || t.label !== void 0), p = m(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== true ? ` text-${t.labelColor}` : "")), b = m(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: u.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = m(() => {
    const K = {};
    return e.targetUid.value && (K.for = e.targetUid.value), t.disable === true && (K["aria-disabled"] = "true"), K;
  });
  function q() {
    var _a3;
    const K = document.activeElement;
    let ie = (_a3 = e.targetRef) == null ? void 0 : _a3.value;
    ie && (K === null || K.id !== e.targetUid.value) && (ie.hasAttribute("tabindex") === true || (ie = ie.querySelector("[tabindex]")), ie !== K && (ie == null ? void 0 : ie.focus({ preventScroll: true })));
  }
  function B() {
    Xr(q);
  }
  function V() {
    y1(q);
    const K = document.activeElement;
    K !== null && e.rootRef.value.contains(K) && K.blur();
  }
  function R(K) {
    l !== null && (clearTimeout(l), l = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", K));
  }
  function D(K, ie) {
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", K)), ie == null ? void 0 : ie());
    });
  }
  function $(K) {
    var _a3;
    Ke(K), a.platform.is.mobile !== true ? (((_a3 = e.targetRef) == null ? void 0 : _a3.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Qe(() => {
      const ie = s.value;
      v(), s.value = ie;
    });
  }
  function M(K) {
    [13, 32].includes(K.keyCode) && $(K);
  }
  function A() {
    const K = [];
    return o.prepend !== void 0 && K.push(h("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Nt }, o.prepend())), K.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, T())), c.value === true && t.noErrorIcon === false && K.push(U("error", [h(tt, { name: a.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? K.push(U("inner-loading-append", o.loading !== void 0 ? o.loading() : [h(Tn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && K.push(U("inner-clearable-append", [h(tt, { class: "q-field__focusable-action", name: t.clearIcon || a.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": a.lang.label.clear, onKeyup: M, onClick: $ })])), o.append !== void 0 && K.push(h("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Nt }, o.append())), e.getInnerAppend !== void 0 && K.push(U("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && K.push(e.getControlChild()), K;
  }
  function T() {
    const K = [];
    return t.prefix !== void 0 && t.prefix !== null && K.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && K.push(e.getShadowControl()), e.getControl !== void 0 ? K.push(e.getControl()) : o.rawControl !== void 0 ? K.push(o.rawControl()) : o.control !== void 0 && K.push(h("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, o.control(b.value))), _.value === true && K.push(h("div", { class: p.value }, Pe(o.label, t.label))), t.suffix !== void 0 && t.suffix !== null && K.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), K.concat(Pe(o.default));
  }
  function z() {
    let K, ie;
    c.value === true ? f.value !== null ? (K = [h("div", { role: "alert" }, f.value)], ie = `q--slot-error-${f.value}`) : (K = Pe(o.error), ie = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (K = [h("div", t.hint)], ie = `q--slot-hint-${t.hint}`) : (K = Pe(o.hint), ie = "q--slot-hint"));
    const ye = t.counter === true || o.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && K === void 0) return;
    const Y = h("div", { key: ie, class: "q-field__messages col" }, K);
    return h("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Nt }, [t.hideBottomSpace === true ? Y : h($t, { name: "q-transition--field-message" }, () => Y), ye === true ? h("div", { class: "q-field__counter" }, o.counter !== void 0 ? o.counter() : e.computedCounter.value) : null]);
  }
  function U(K, ie) {
    return ie === null ? null : h("div", { key: K, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, ie);
  }
  let j = false;
  return Hn(() => {
    j = true;
  }), Oo(() => {
    j === true && t.autofocus === true && i.focus();
  }), t.autofocus === true && st(() => {
    i.focus();
  }), We(() => {
    l !== null && clearTimeout(l);
  }), Object.assign(i, { focus: B, blur: V }), function() {
    const ie = e.getControl === void 0 && o.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return h(e.tag.value, { ref: e.rootRef, class: [w.value, r.class], style: r.style, ...ie }, [o.before !== void 0 ? h("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Nt }, o.before()) : null, h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", { ref: e.controlRef, class: x.value, tabindex: -1, ...e.controlEvents }, A()), g.value === true ? z() : null]), o.after !== void 0 ? h("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Nt }, o.after()) : null]);
  };
}
var I_ = ge({ name: "QField", inheritAttrs: false, props: { ...Xl, tag: { type: String, default: "label" } }, emits: Jl, setup() {
  return es(Zl({ tagProp: true }));
} });
function Cr(e, t, n, o) {
  const r = [];
  return e.forEach((i) => {
    o(i) === true ? r.push(i) : t.push({ failedPropValidation: n, file: i });
  }), r;
}
function Aa(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), Ke(e);
}
var Ig = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, Ng = ["rejected"];
function zg({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: o }) {
  const { props: r, emit: i, proxy: a } = xe(), l = H(null), s = m(() => r.accept !== void 0 ? r.accept.split(",").map((_) => (_ = _.trim(), _ === "*" ? "*/" : (_.endsWith("/*") && (_ = _.slice(0, _.length - 1)), _.toUpperCase()))) : null), d = m(() => parseInt(r.maxFiles, 10)), c = m(() => parseInt(r.maxTotalSize, 10));
  function f(_) {
    var _a3;
    if (e.value) if (_ !== Object(_) && (_ = { target: null }), ((_a3 = _.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) _.clientX === 0 && _.clientY === 0 && St(_);
    else {
      const p = n();
      p !== _.target && (p == null ? void 0 : p.click(_));
    }
  }
  function v(_) {
    e.value && _ && o(null, _);
  }
  function u(_, p, b, C) {
    let q = Array.from(p || _.target.files);
    const B = [], V = () => {
      B.length !== 0 && i("rejected", B);
    };
    if (r.accept !== void 0 && s.value.indexOf("*/") === -1 && (q = Cr(q, B, "accept", (R) => s.value.some((D) => R.type.toUpperCase().startsWith(D) || R.name.toUpperCase().endsWith(D))), q.length === 0)) return V();
    if (r.maxFileSize !== void 0) {
      const R = parseInt(r.maxFileSize, 10);
      if (q = Cr(q, B, "max-file-size", (D) => D.size <= R), q.length === 0) return V();
    }
    if (r.multiple !== true && q.length !== 0 && (q = [q[0]]), q.forEach((R) => {
      R.__key = R.webkitRelativePath + R.lastModified + R.name + R.size;
    }), C === true) {
      const R = b.map((D) => D.__key);
      q = Cr(q, B, "duplicate", (D) => R.includes(D.__key) === false);
    }
    if (q.length === 0) return V();
    if (r.maxTotalSize !== void 0) {
      let R = C === true ? b.reduce((D, $) => D + $.size, 0) : 0;
      if (q = Cr(q, B, "max-total-size", (D) => (R += D.size, R <= c.value)), q.length === 0) return V();
    }
    if (typeof r.filter == "function") {
      const R = r.filter(q);
      q = Cr(q, B, "filter", (D) => R.includes(D));
    }
    if (r.maxFiles !== void 0) {
      let R = C === true ? b.length : 0;
      if (q = Cr(q, B, "max-files", () => (R++, R <= d.value)), q.length === 0) return V();
    }
    if (V(), q.length !== 0) return q;
  }
  function g(_) {
    Aa(_), t.value !== true && (t.value = true);
  }
  function y(_) {
    Ke(_), (_.relatedTarget !== null || ze.is.safari !== true ? _.relatedTarget !== l.value : document.elementsFromPoint(_.clientX, _.clientY).includes(l.value) === false) === true && (t.value = false);
  }
  function w(_) {
    Aa(_);
    const p = _.dataTransfer.files;
    p.length !== 0 && o(null, p), t.value = false;
  }
  function x(_) {
    if (t.value === true) return h("div", { ref: l, class: `q-${_}__dnd absolute-full`, onDragenter: Aa, onDragover: Aa, onDragleave: y, onDrop: w });
  }
  return Object.assign(a, { pickFiles: f, addFiles: v }), { pickFiles: f, addFiles: v, onDragover: g, onDragleave: y, processFiles: u, getDndNode: x, maxFilesNumber: d, maxTotalSizeNumber: c };
}
function Hg(e, t) {
  function n() {
    const o = e.modelValue;
    try {
      const r = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(o) === o && ("length" in o ? Array.from(o) : [o]).forEach((i) => {
        r.items.add(i);
      }), { files: r.files };
    } catch {
      return { files: void 0 };
    }
  }
  return m(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
ge({ name: "QFile", inheritAttrs: false, props: { ...$g, ...kn, ...Ig, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Jl, ...Ng], setup(e, { slots: t, emit: n, attrs: o }) {
  const { proxy: r } = xe(), i = Zl(), a = H(null), l = H(false), s = Cc(e), { pickFiles: d, onDragover: c, onDragleave: f, processFiles: v, getDndNode: u } = zg({ editable: i.editable, dnd: l, getFileInput: M, addFilesToQueue: A }), g = Hg(e), y = m(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = m(() => cr(y.value)), x = m(() => y.value.map((j) => j.name).join(", ")), _ = m(() => Cu(y.value.reduce((j, K) => j + K.size, 0))), p = m(() => ({ totalSize: _.value, filesNumber: y.value.length, maxFiles: e.maxFiles })), b = m(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...o, id: i.targetUid.value, disabled: i.editable.value !== true })), C = m(() => "q-file q-field--auto-height" + (l.value === true ? " q-file--dnd" : "")), q = m(() => e.multiple === true && e.append === true);
  function B(j) {
    const K = y.value.slice();
    K.splice(j, 1), R(K);
  }
  function V(j) {
    const K = y.value.indexOf(j);
    K !== -1 && B(K);
  }
  function R(j) {
    n("update:modelValue", e.multiple === true ? j : j[0]);
  }
  function D(j) {
    j.keyCode === 13 && Nt(j);
  }
  function $(j) {
    (j.keyCode === 13 || j.keyCode === 32) && d(j);
  }
  function M() {
    return a.value;
  }
  function A(j, K) {
    const ie = v(j, K, y.value, q.value), ye = M();
    ye != null && (ye.value = ""), ie !== void 0 && ((e.multiple === true ? e.modelValue && ie.every((Y) => y.value.includes(Y)) : e.modelValue === ie[0]) || R(q.value === true ? y.value.concat(ie) : ie));
  }
  function T() {
    return [h("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function z() {
    if (t.file !== void 0) return y.value.length === 0 ? T() : y.value.map((K, ie) => t.file({ index: ie, file: K, ref: this }));
    if (t.selected !== void 0) return y.value.length === 0 ? T() : t.selected({ files: y.value, ref: this });
    if (e.useChips === true) return y.value.length === 0 ? T() : y.value.map((K, ie) => h(ag, { key: "file-" + ie, removable: i.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      B(ie);
    } }, () => h("span", { class: "ellipsis", textContent: K.name })));
    const j = e.displayValue !== void 0 ? e.displayValue : x.value;
    return j.length !== 0 ? [h("div", { class: e.inputClass, style: e.inputStyle, textContent: j })] : T();
  }
  function U() {
    const j = { ref: a, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: A };
    return e.multiple === true && (j.multiple = true), h("input", j);
  }
  return Object.assign(i, { fieldClass: C, emitValue: R, hasValue: w, inputRef: a, innerValue: y, floatingLabel: m(() => w.value === true || cr(e.displayValue)), computedCounter: m(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const j = e.maxFiles;
    return `${y.value.length}${j !== void 0 ? " / " + j : ""} (${_.value})`;
  }), getControlChild: () => u("file"), getControl: () => {
    const j = { ref: i.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return i.editable.value === true && Object.assign(j, { onDragover: c, onDragleave: f, onKeydown: D, onKeyup: $ }), h("div", j, [U()].concat(z()));
  } }), Object.assign(r, { removeAtIndex: B, removeFile: V, getNativeElement: () => a.value }), It(r, "nativeEl", () => a.value), es(i);
} });
var N_ = ge({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = Lt(hr, ut);
  if (r === ut) return console.error("QFooter needs to be child of QLayout"), ut;
  const i = H(parseInt(e.heightHint, 10)), a = H(true), l = H(un.value === true || r.isContainer.value === true ? 0 : window.innerHeight), s = m(() => e.reveal === true || r.view.value.indexOf("F") !== -1 || o.platform.is.ios && r.isContainer.value === true), d = m(() => r.isContainer.value === true ? r.containerHeight.value : l.value), c = m(() => {
    if (e.modelValue !== true) return 0;
    if (s.value === true) return a.value === true ? i.value : 0;
    const C = r.scroll.value.position + d.value + i.value - r.height.value;
    return C > 0 ? C : 0;
  }), f = m(() => e.modelValue !== true || s.value === true && a.value !== true), v = m(() => e.modelValue === true && f.value === true && e.reveal === true), u = m(() => "q-footer q-layout__section--marginal " + (s.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (s.value !== true ? " hidden" : "") : "")), g = m(() => {
    const C = r.rows.value.bottom, q = {};
    return C[0] === "l" && r.left.space === true && (q[o.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), C[2] === "r" && r.right.space === true && (q[o.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), q;
  });
  function y(C, q) {
    r.update("footer", C, q);
  }
  function w(C, q) {
    C.value !== q && (C.value = q);
  }
  function x({ height: C }) {
    w(i, C), y("size", C);
  }
  function _() {
    if (e.reveal !== true) return;
    const { direction: C, position: q, inflectionPoint: B } = r.scroll.value;
    w(a, C === "up" || q - B < 100 || r.height.value - d.value - q - i.value < 300);
  }
  function p(C) {
    v.value === true && w(a, true), n("focusin", C);
  }
  me(() => e.modelValue, (C) => {
    y("space", C), w(a, true), r.animate();
  }), me(c, (C) => {
    y("offset", C);
  }), me(() => e.reveal, (C) => {
    C === false && w(a, e.modelValue);
  }), me(a, (C) => {
    r.animate(), n("reveal", C);
  }), me([i, r.scroll, r.height], _), me(() => o.screen.height, (C) => {
    r.isContainer.value !== true && w(l, C);
  });
  const b = {};
  return r.instances.footer = b, e.modelValue === true && y("size", i.value), y("space", e.modelValue), y("offset", c.value), We(() => {
    r.instances.footer === b && (r.instances.footer = void 0, y("size", 0), y("offset", 0), y("space", false));
  }), () => {
    const C = At(t.default, [h(sr, { debounce: 0, onResize: x })]);
    return e.elevated === true && C.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), h("footer", { class: u.value, style: g.value, onFocusin: p }, C);
  };
} });
ge({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const o = xe(), r = H(null);
  let i = 0;
  const a = [];
  function l(u) {
    const g = typeof u == "boolean" ? u : e.noErrorFocus !== true, y = ++i, w = (p, b) => {
      n(`validation${p === true ? "Success" : "Error"}`, b);
    }, x = (p) => {
      const b = p.validate();
      return typeof b.then == "function" ? b.then((C) => ({ valid: C, comp: p }), (C) => ({ valid: false, comp: p, err: C })) : Promise.resolve({ valid: b, comp: p });
    };
    return (e.greedy === true ? Promise.all(a.map(x)).then((p) => p.filter((b) => b.valid !== true)) : a.reduce((p, b) => p.then(() => x(b).then((C) => {
      if (C.valid === false) return Promise.reject(C);
    })), Promise.resolve()).catch((p) => [p])).then((p) => {
      if (p === void 0 || p.length === 0) return y === i && w(true), true;
      if (y === i) {
        const { comp: b, err: C } = p[0];
        if (C !== void 0 && console.error(C), w(false, b), g === true) {
          const q = p.find(({ comp: B }) => typeof B.focus == "function" && Ao(B.$) === false);
          q !== void 0 && q.comp.focus();
        }
      }
      return false;
    });
  }
  function s() {
    i++, a.forEach((u) => {
      typeof u.resetValidation == "function" && u.resetValidation();
    });
  }
  function d(u) {
    u !== void 0 && Ke(u);
    const g = i + 1;
    l().then((y) => {
      g === i && y === true && (e.onSubmit !== void 0 ? n("submit", u) : (u == null ? void 0 : u.target) !== void 0 && typeof u.target.submit == "function" && u.target.submit());
    });
  }
  function c(u) {
    u !== void 0 && Ke(u), n("reset"), Qe(() => {
      s(), e.autofocus === true && e.noResetFocus !== true && f();
    });
  }
  function f() {
    Xr(() => {
      var _a3;
      if (r.value === null) return;
      (_a3 = r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || r.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  _n(Tm, { bindComponent(u) {
    a.push(u);
  }, unbindComponent(u) {
    const g = a.indexOf(u);
    g !== -1 && a.splice(g, 1);
  } });
  let v = false;
  return Hn(() => {
    v = true;
  }), Oo(() => {
    v === true && e.autofocus === true && f();
  }), st(() => {
    e.autofocus === true && f();
  }), Object.assign(o.proxy, { validate: l, resetValidation: s, submit: d, reset: c, focus: f, getValidationComponents: () => a }), () => h("form", { class: "q-form", ref: r, onSubmit: d, onReset: c }, Pe(t.default));
} });
var z_ = ge({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = Lt(hr, ut);
  if (r === ut) return console.error("QHeader needs to be child of QLayout"), ut;
  const i = H(parseInt(e.heightHint, 10)), a = H(true), l = m(() => e.reveal === true || r.view.value.indexOf("H") !== -1 || o.platform.is.ios && r.isContainer.value === true), s = m(() => {
    if (e.modelValue !== true) return 0;
    if (l.value === true) return a.value === true ? i.value : 0;
    const _ = i.value - r.scroll.value.position;
    return _ > 0 ? _ : 0;
  }), d = m(() => e.modelValue !== true || l.value === true && a.value !== true), c = m(() => e.modelValue === true && d.value === true && e.reveal === true), f = m(() => "q-header q-layout__section--marginal " + (l.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (d.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), v = m(() => {
    const _ = r.rows.value.top, p = {};
    return _[0] === "l" && r.left.space === true && (p[o.lang.rtl === true ? "right" : "left"] = `${r.left.size}px`), _[2] === "r" && r.right.space === true && (p[o.lang.rtl === true ? "left" : "right"] = `${r.right.size}px`), p;
  });
  function u(_, p) {
    r.update("header", _, p);
  }
  function g(_, p) {
    _.value !== p && (_.value = p);
  }
  function y({ height: _ }) {
    g(i, _), u("size", _);
  }
  function w(_) {
    c.value === true && g(a, true), n("focusin", _);
  }
  me(() => e.modelValue, (_) => {
    u("space", _), g(a, true), r.animate();
  }), me(s, (_) => {
    u("offset", _);
  }), me(() => e.reveal, (_) => {
    _ === false && g(a, e.modelValue);
  }), me(a, (_) => {
    r.animate(), n("reveal", _);
  }), me(r.scroll, (_) => {
    e.reveal === true && g(a, _.direction === "up" || _.position <= e.revealOffset || _.position - _.inflectionPoint < 100);
  });
  const x = {};
  return r.instances.header = x, e.modelValue === true && u("size", i.value), u("space", e.modelValue), u("offset", s.value), We(() => {
    r.instances.header === x && (r.instances.header = void 0, u("size", 0), u("offset", 0), u("space", false));
  }), () => {
    const _ = ca(t.default, []);
    return e.elevated === true && _.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), _.push(h(sr, { debounce: 0, onResize: y })), h("header", { class: f.value, style: v.value, onFocusin: w }, _);
  };
} }), Vc = { ratio: [String, Number] };
function Fc(e, t) {
  return m(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var H_ = 1.7778;
ge({ name: "QImg", props: { ...Vc, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: H_ }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const o = H(e.initialRatio), r = Fc(e, o), i = xe(), { registerTimeout: a, removeTimeout: l } = io(), { registerTimeout: s, removeTimeout: d } = io(), c = m(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = m(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), v = [H(null), H(c.value)], u = H(0), g = H(false), y = H(false), w = m(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), x = m(() => ({ width: e.width, height: e.height })), _ = m(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = m(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  function b() {
    if (d(), e.loadingShowDelay === 0) {
      g.value = true;
      return;
    }
    s(() => {
      g.value = true;
    }, e.loadingShowDelay);
  }
  function C() {
    d(), g.value = false;
  }
  function q({ target: M }) {
    Ao(i) === false && (l(), o.value = M.naturalHeight === 0 ? 0.5 : M.naturalWidth / M.naturalHeight, B(M, 1));
  }
  function B(M, A) {
    A === 1e3 || Ao(i) === true || (M.complete === true ? V(M) : a(() => {
      B(M, A + 1);
    }, 50));
  }
  function V(M) {
    Ao(i) !== true && (u.value = u.value ^ 1, v[u.value].value = null, C(), M.getAttribute("__qerror") !== "true" && (y.value = false), n("load", M.currentSrc || M.src));
  }
  function R(M) {
    l(), C(), y.value = true, v[u.value].value = f.value, v[u.value ^ 1].value = c.value, n("error", M);
  }
  function D(M) {
    const A = v[M].value, T = { key: "img_" + M, class: _.value, style: p.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...A };
    return u.value === M ? Object.assign(T, { class: T.class + "current", onLoad: q, onError: R }) : T.class += "loaded", h("div", { class: "q-img__container absolute-full", key: "img" + M }, h("img", T));
  }
  function $() {
    return g.value === false ? h("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[y.value === true ? "error" : "default"])) : h("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [h(Tn, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let M = function() {
      me(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (A) => {
        l(), y.value = false, A === null ? (C(), v[u.value ^ 1].value = c.value) : b(), v[u.value].value = A;
      }, { immediate: true });
    };
    un.value === true ? st(M) : M();
  }
  return () => {
    const M = [];
    return r.value !== null && M.push(h("div", { key: "filler", style: r.value })), v[0].value !== null && M.push(D(0)), v[1].value !== null && M.push(D(1)), M.push(h($t, { name: "q-transition--fade" }, $)), h("div", { key: "main", class: w.value, style: x.value, role: "img", "aria-label": e.alt }, M);
  };
} });
var { passive: jo } = ht;
ge({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: mr, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const o = H(false), r = H(true), i = H(null), a = H(null);
  let l = e.initialIndex, s, d;
  const c = m(() => "q-infinite-scroll__loading" + (o.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || o.value === true || r.value === false) return;
    const B = xa(s), V = Lo(s), R = zr(s);
    e.reverse === false ? Math.round(V + R + e.offset) >= Math.round(B) && v() : Math.round(V) <= e.offset && v();
  }
  function v() {
    if (e.disable === true || o.value === true || r.value === false) return;
    l++, o.value = true;
    const B = xa(s);
    n("load", l, (V) => {
      r.value === true && (o.value = false, Qe(() => {
        if (e.reverse === true) {
          const R = xa(s), D = Lo(s), $ = R - B;
          $r(s, D + $);
        }
        V === true ? y() : i.value && i.value.closest("body") && d();
      }));
    });
  }
  function u() {
    l = 0;
  }
  function g() {
    r.value === false && (r.value = true, s.addEventListener("scroll", d, jo)), f();
  }
  function y() {
    var _a3;
    r.value === true && (r.value = false, o.value = false, s.removeEventListener("scroll", d, jo), (_a3 = d == null ? void 0 : d.cancel) == null ? void 0 : _a3.call(d));
  }
  function w() {
    if (s && r.value === true && s.removeEventListener("scroll", d, jo), s = jn(i.value, e.scrollTarget), r.value === true) {
      if (s.addEventListener("scroll", d, jo), e.reverse === true) {
        const B = xa(s), V = zr(s);
        $r(s, B - V);
      }
      f();
    }
  }
  function x(B) {
    l = B;
  }
  function _(B) {
    B = parseInt(B, 10);
    const V = d;
    d = B <= 0 ? f : Kr(f, isNaN(B) === true ? 100 : B), s && r.value === true && (V !== void 0 && s.removeEventListener("scroll", V, jo), s.addEventListener("scroll", d, jo));
  }
  function p(B) {
    if (b.value === true) {
      if (a.value === null) {
        B !== true && Qe(() => {
          p(true);
        });
        return;
      }
      const V = `${o.value === true ? "un" : ""}pauseAnimations`;
      Array.from(a.value.getElementsByTagName("svg")).forEach((R) => {
        R[V]();
      });
    }
  }
  const b = m(() => e.disable !== true && r.value === true);
  me([o, b], () => {
    p();
  }), me(() => e.disable, (B) => {
    B === true ? y() : g();
  }), me(() => e.reverse, () => {
    o.value === false && r.value === true && f();
  }), me(() => e.scrollTarget, w), me(() => e.debounce, _);
  let C = false;
  Oo(() => {
    C !== false && s && $r(s, C);
  }), Hn(() => {
    C = s ? Lo(s) : false;
  }), We(() => {
    r.value === true && s.removeEventListener("scroll", d, jo);
  }), st(() => {
    _(e.debounce), w(), o.value === false && p();
  });
  const q = xe();
  return Object.assign(q.proxy, { poll: () => {
    d == null ? void 0 : d();
  }, trigger: v, stop: y, reset: u, resume: g, setIndex: x, updateScrollTarget: w }), () => {
    const B = ca(t.default, []);
    return b.value === true && B[e.reverse === false ? "push" : "unshift"](h("div", { ref: a, class: c.value }, Pe(t.loading))), h("div", { class: "q-infinite-scroll", ref: i }, B);
  };
} });
ge({ name: "QInnerLoading", props: { ...ot, ...nr, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), { transitionProps: r, transitionStyle: i } = Ql(e), a = m(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (o.value === true ? " q-inner-loading--dark" : "")), l = m(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function s() {
    const c = [h(Tn, { size: e.size, color: e.color })];
    return e.label !== void 0 && c.push(h("div", { class: l.value, style: e.labelStyle }, [e.label])), c;
  }
  function d() {
    return e.showing === true ? h("div", { class: a.value, style: i.value }, t.default !== void 0 ? t.default() : s()) : null;
  }
  return () => h($t, r.value, d);
} });
var kf = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Tl = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, jg = Object.keys(Tl);
jg.forEach((e) => {
  Tl[e].regex = new RegExp(Tl[e].pattern);
});
var j_ = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + jg.join("") + "])|(.)", "g"), Mf = /[.*+?^${}()|[\]\\]/g, Vt = "", U_ = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function Q_(e, t, n, o) {
  let r, i, a, l, s, d;
  const c = H(null), f = H(u());
  function v() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  me(() => e.type + e.autogrow, y), me(() => e.mask, (R) => {
    if (R !== void 0) w(f.value, true);
    else {
      const D = B(f.value);
      y(), e.modelValue !== D && t("update:modelValue", D);
    }
  }), me(() => e.fillMask + e.reverseFillMask, () => {
    c.value === true && w(f.value, true);
  }), me(() => e.unmaskedValue, () => {
    c.value === true && w(f.value);
  });
  function u() {
    if (y(), c.value === true) {
      const R = C(B(e.modelValue));
      return e.fillMask !== false ? V(R) : R;
    }
    return e.modelValue;
  }
  function g(R) {
    if (R < r.length) return r.slice(-R);
    let D = "", $ = r;
    const M = $.indexOf(Vt);
    if (M !== -1) {
      for (let A = R - $.length; A > 0; A--) D += Vt;
      $ = $.slice(0, M) + D + $.slice(M);
    }
    return $;
  }
  function y() {
    if (c.value = e.mask !== void 0 && e.mask.length !== 0 && v(), c.value === false) {
      l = void 0, r = "", i = "";
      return;
    }
    const R = kf[e.mask] === void 0 ? e.mask : kf[e.mask], D = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", $ = D.replace(Mf, "\\$&"), M = [], A = [], T = [];
    let z = e.reverseFillMask === true, U = "", j = "";
    R.replace(j_, (Y, L, ne, G, be) => {
      if (G !== void 0) {
        const O = Tl[G];
        T.push(O), j = O.negate, z === true && (A.push("(?:" + j + "+)?(" + O.pattern + "+)?(?:" + j + "+)?(" + O.pattern + "+)?"), z = false), A.push("(?:" + j + "+)?(" + O.pattern + ")?");
      } else if (ne !== void 0) U = "\\" + (ne === "\\" ? "" : ne), T.push(ne), M.push("([^" + U + "]+)?" + U + "?");
      else {
        const O = L !== void 0 ? L : be;
        U = O === "\\" ? "\\\\\\\\" : O.replace(Mf, "\\\\$&"), T.push(O), M.push("([^" + U + "]+)?" + U + "?");
      }
    });
    const K = new RegExp("^" + M.join("") + "(" + (U === "" ? "." : "[^" + U + "]") + "+)?" + (U === "" ? "" : "[" + U + "]*") + "$"), ie = A.length - 1, ye = A.map((Y, L) => L === 0 && e.reverseFillMask === true ? new RegExp("^" + $ + "*" + Y) : L === ie ? new RegExp("^" + Y + "(" + (j === "" ? "." : j) + "+)?" + (e.reverseFillMask === true ? "$" : $ + "*")) : new RegExp("^" + Y));
    a = T, l = (Y) => {
      const L = K.exec(e.reverseFillMask === true ? Y : Y.slice(0, T.length + 1));
      L !== null && (Y = L.slice(1).join(""));
      const ne = [], G = ye.length;
      for (let be = 0, O = Y; be < G; be++) {
        const P = ye[be].exec(O);
        if (P === null) break;
        O = O.slice(P.shift().length), ne.push(...P);
      }
      return ne.length !== 0 ? ne.join("") : Y;
    }, r = T.map((Y) => typeof Y == "string" ? Y : Vt).join(""), i = r.split(Vt).join(D);
  }
  function w(R, D, $) {
    const M = o.value, A = M.selectionEnd, T = M.value.length - A, z = B(R);
    D === true && y();
    const U = C(z), j = e.fillMask !== false ? V(U) : U, K = f.value !== j;
    M.value !== j && (M.value = j), K === true && (f.value = j), document.activeElement === M && Qe(() => {
      if (j === i) {
        const ye = e.reverseFillMask === true ? i.length : 0;
        M.setSelectionRange(ye, ye, "forward");
        return;
      }
      if ($ === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = M.selectionEnd;
        let Y = A - 1;
        for (let L = s; L <= Y && L < ye; L++) r[L] !== Vt && Y++;
        _.right(M, Y);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf($) !== -1) {
        const ye = e.reverseFillMask === true ? A === 0 ? j.length > U.length ? 1 : 0 : Math.max(0, j.length - (j === i ? 0 : Math.min(U.length, T) + 1)) + 1 : A;
        M.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (K === true) {
        const ye = Math.max(0, j.length - (j === i ? 0 : Math.min(U.length, T + 1)));
        ye === 1 && A === 1 ? M.setSelectionRange(ye, ye, "forward") : _.rightReverse(M, ye);
      } else {
        const ye = j.length - T;
        M.setSelectionRange(ye, ye, "backward");
      }
      else if (K === true) {
        const ye = Math.max(0, r.indexOf(Vt), Math.min(U.length, A) - 1);
        _.right(M, ye);
      } else {
        const ye = A - 1;
        _.right(M, ye);
      }
    });
    const ie = e.unmaskedValue === true ? B(j) : j;
    String(e.modelValue) !== ie && (e.modelValue !== null || ie !== "") && n(ie, true);
  }
  function x(R, D, $) {
    const M = C(B(R.value));
    D = Math.max(0, r.indexOf(Vt), Math.min(M.length, D)), s = D, R.setSelectionRange(D, $, "forward");
  }
  const _ = { left(R, D) {
    const $ = r.slice(D - 1).indexOf(Vt) === -1;
    let M = Math.max(0, D - 1);
    for (; M >= 0; M--) if (r[M] === Vt) {
      D = M, $ === true && D++;
      break;
    }
    if (M < 0 && r[D] !== void 0 && r[D] !== Vt) return _.right(R, 0);
    D >= 0 && R.setSelectionRange(D, D, "backward");
  }, right(R, D) {
    const $ = R.value.length;
    let M = Math.min($, D + 1);
    for (; M <= $; M++) if (r[M] === Vt) {
      D = M;
      break;
    } else r[M - 1] === Vt && (D = M);
    if (M > $ && r[D - 1] !== void 0 && r[D - 1] !== Vt) return _.left(R, $);
    R.setSelectionRange(D, D, "forward");
  }, leftReverse(R, D) {
    const $ = g(R.value.length);
    let M = Math.max(0, D - 1);
    for (; M >= 0; M--) if ($[M - 1] === Vt) {
      D = M;
      break;
    } else if ($[M] === Vt && (D = M, M === 0)) break;
    if (M < 0 && $[D] !== void 0 && $[D] !== Vt) return _.rightReverse(R, 0);
    D >= 0 && R.setSelectionRange(D, D, "backward");
  }, rightReverse(R, D) {
    const $ = R.value.length, M = g($), A = M.slice(0, D + 1).indexOf(Vt) === -1;
    let T = Math.min($, D + 1);
    for (; T <= $; T++) if (M[T - 1] === Vt) {
      D = T, D > 0 && A === true && D--;
      break;
    }
    if (T > $ && M[D - 1] !== void 0 && M[D - 1] !== Vt) return _.leftReverse(R, $);
    R.setSelectionRange(D, D, "forward");
  } };
  function p(R) {
    t("click", R), d = void 0;
  }
  function b(R) {
    if (t("keydown", R), vr(R) === true || R.altKey === true) return;
    const D = o.value, $ = D.selectionStart, M = D.selectionEnd;
    if (R.shiftKey || (d = void 0), R.keyCode === 37 || R.keyCode === 39) {
      R.shiftKey && d === void 0 && (d = D.selectionDirection === "forward" ? $ : M);
      const A = _[(R.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (R.preventDefault(), A(D, d === $ ? M : $), R.shiftKey) {
        const T = D.selectionStart;
        D.setSelectionRange(Math.min(d, T), Math.max(d, T), "forward");
      }
    } else R.keyCode === 8 && e.reverseFillMask !== true && $ === M ? (_.left(D, $), D.setSelectionRange(D.selectionStart, M, "backward")) : R.keyCode === 46 && e.reverseFillMask === true && $ === M && (_.rightReverse(D, M), D.setSelectionRange($, D.selectionEnd, "forward"));
  }
  function C(R) {
    if (R == null || R === "") return "";
    if (e.reverseFillMask === true) return q(R);
    const D = a;
    let $ = 0, M = "";
    for (let A = 0; A < D.length; A++) {
      const T = R[$], z = D[A];
      if (typeof z == "string") M += z, T === z && $++;
      else if (T !== void 0 && z.regex.test(T)) M += z.transform !== void 0 ? z.transform(T) : T, $++;
      else return M;
    }
    return M;
  }
  function q(R) {
    const D = a, $ = r.indexOf(Vt);
    let M = R.length - 1, A = "";
    for (let T = D.length - 1; T >= 0 && M !== -1; T--) {
      const z = D[T];
      let U = R[M];
      if (typeof z == "string") A = z + A, U === z && M--;
      else if (U !== void 0 && z.regex.test(U)) do
        A = (z.transform !== void 0 ? z.transform(U) : U) + A, M--, U = R[M];
      while ($ === T && U !== void 0 && z.regex.test(U));
      else return A;
    }
    return A;
  }
  function B(R) {
    return typeof R != "string" || l === void 0 ? typeof R == "number" ? l("" + R) : R : l(R);
  }
  function V(R) {
    return i.length - R.length <= 0 ? R : e.reverseFillMask === true && R.length !== 0 ? i.slice(0, -R.length) + R : R + i.slice(R.length);
  }
  return { innerValue: f, hasMask: c, moveCursorForPaste: x, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: p };
}
var K_ = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, W_ = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Y_ = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, G_ = /[a-z0-9_ -]$/i;
function Ug(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? G_.test(n.data) === false : K_.test(n.data) === true || W_.test(n.data) === true || Y_.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Qg = ge({ name: "QInput", inheritAttrs: false, props: { ...Xl, ...U_, ...kn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Jl, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = {};
  let a = NaN, l, s, d = null, c;
  const f = H(null), v = Cc(e), { innerValue: u, hasMask: g, moveCursorForPaste: y, updateMaskValue: w, onMaskedKeydown: x, onMaskedClick: _ } = Q_(e, t, U, f), p = Hg(e, true), b = m(() => cr(u.value)), C = Ug(T), q = Zl({ changeEvent: true }), B = m(() => e.type === "textarea" || e.autogrow === true), V = m(() => B.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), R = m(() => {
    const L = { ...q.splitAttrs.listeners.value, onInput: T, onPaste: A, onChange: K, onBlur: ie, onFocus: St };
    return L.onCompositionstart = L.onCompositionupdate = L.onCompositionend = C, g.value === true && (L.onKeydown = x, L.onClick = _), e.autogrow === true && (L.onAnimationend = z), L;
  }), D = m(() => {
    const L = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: v.value, ...q.splitAttrs.attributes.value, id: q.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return B.value === false && (L.type = e.type), e.autogrow === true && (L.rows = 1), L;
  });
  me(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), me(() => e.modelValue, (L) => {
    if (g.value === true) {
      if (s === true && (s = false, String(L) === a)) return;
      w(L);
    } else u.value !== L && (u.value = L, e.type === "number" && i.hasOwnProperty("value") === true && (l === true ? l = false : delete i.value));
    e.autogrow === true && Qe(j);
  }), me(() => e.autogrow, (L) => {
    L === true ? Qe(j) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), me(() => e.dense, () => {
    e.autogrow === true && Qe(j);
  });
  function $() {
    Xr(() => {
      const L = document.activeElement;
      f.value !== null && f.value !== L && (L === null || L.id !== q.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function M() {
    var _a3;
    (_a3 = f.value) == null ? void 0 : _a3.select();
  }
  function A(L) {
    if (g.value === true && e.reverseFillMask !== true) {
      const ne = L.target;
      y(ne, ne.selectionStart, ne.selectionEnd);
    }
    t("paste", L);
  }
  function T(L) {
    if (!L || !L.target) return;
    if (e.type === "file") {
      t("update:modelValue", L.target.files);
      return;
    }
    const ne = L.target.value;
    if (L.target.qComposing === true) {
      i.value = ne;
      return;
    }
    if (g.value === true) w(ne, false, L.inputType);
    else if (U(ne), V.value === true && L.target === document.activeElement) {
      const { selectionStart: G, selectionEnd: be } = L.target;
      G !== void 0 && be !== void 0 && Qe(() => {
        L.target === document.activeElement && ne.indexOf(L.target.value) === 0 && L.target.setSelectionRange(G, be);
      });
    }
    e.autogrow === true && j();
  }
  function z(L) {
    t("animationend", L), j();
  }
  function U(L, ne) {
    c = () => {
      d = null, e.type !== "number" && i.hasOwnProperty("value") === true && delete i.value, e.modelValue !== L && a !== L && (a = L, ne === true && (s = true), t("update:modelValue", L), Qe(() => {
        a === L && (a = NaN);
      })), c = void 0;
    }, e.type === "number" && (l = true, i.value = L), e.debounce !== void 0 ? (d !== null && clearTimeout(d), i.value = L, d = setTimeout(c, e.debounce)) : c();
  }
  function j() {
    requestAnimationFrame(() => {
      const L = f.value;
      if (L !== null) {
        const ne = L.parentNode.style, { scrollTop: G } = L, { overflowY: be, maxHeight: O } = r.platform.is.firefox === true ? {} : window.getComputedStyle(L), P = be !== void 0 && be !== "scroll";
        P === true && (L.style.overflowY = "hidden"), ne.marginBottom = L.scrollHeight - 1 + "px", L.style.height = "1px", L.style.height = L.scrollHeight + "px", P === true && (L.style.overflowY = parseInt(O, 10) < L.scrollHeight ? "auto" : "hidden"), ne.marginBottom = "", L.scrollTop = G;
      }
    });
  }
  function K(L) {
    C(L), d !== null && (clearTimeout(d), d = null), c == null ? void 0 : c(), t("change", L.target.value);
  }
  function ie(L) {
    L !== void 0 && St(L), d !== null && (clearTimeout(d), d = null), c == null ? void 0 : c(), l = false, s = false, delete i.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = u.value !== void 0 ? u.value : "");
    });
  }
  function ye() {
    return i.hasOwnProperty("value") === true ? i.value : u.value !== void 0 ? u.value : "";
  }
  We(() => {
    ie();
  }), st(() => {
    e.autogrow === true && j();
  }), Object.assign(q, { innerValue: u, fieldClass: m(() => `q-${B.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: m(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: U, hasValue: b, floatingLabel: m(() => b.value === true && (e.type !== "number" || isNaN(u.value) === false) || cr(e.displayValue)), getControl: () => h(B.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...D.value, ...R.value, ...e.type !== "file" ? { value: ye() } : p.value }), getShadowControl: () => h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (B.value === true ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, ye()), h("span", e.shadowText)]) });
  const Y = es(q);
  return Object.assign(o, { focus: $, select: M, getNativeElement: () => f.value }), It(o, "nativeEl", () => f.value), Y;
} }), qf = { threshold: 0, root: null, rootMargin: "0px" };
function Ef(e, t, n) {
  var _a3;
  let o, r, i;
  typeof n == "function" ? (o = n, r = qf, i = t.cfg === void 0) : (o = n.handler, r = Object.assign({}, qf, n.cfg), i = t.cfg === void 0 || An(t.cfg, r) === false), t.handler !== o && (t.handler = o), i === true && (t.cfg = r, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([a]) => {
    if (typeof t.handler == "function") {
      if (a.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(a, t.observer) === false || t.once === true && a.isIntersecting === true) && Kg(e);
    }
  }, r), t.observer.observe(e));
}
function Kg(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var X_ = Vn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const o = { once: t.once === true };
  Ef(e, o, n), e.__qvisible = o;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Ef(e, n, t.value);
}, beforeUnmount: Kg });
ge({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const o = H(un.value === true ? e.ssrPrerender : false), r = m(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), i = m(() => e.disable !== true && (un.value !== true || e.once !== true || e.ssrPrerender !== true)), a = m(() => [[X_, r.value, void 0, { once: e.once }]]), l = m(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(c) {
    o.value !== c.isIntersecting && (o.value = c.isIntersecting, e.onVisibility !== void 0 && n("visibility", o.value));
  }
  function d() {
    if (o.value === true) return [h("div", { key: "content", style: l.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [h("div", { key: "hidden", style: l.value }, t.hidden())];
  }
  return () => {
    const c = e.transition ? [h($t, { name: "q-transition--" + e.transition }, d)] : d();
    return Sn(e.tag, { class: "q-intersection" }, c, "main", i.value, () => a.value);
  };
} });
var J_ = ["ul", "ol"], Wg = ge({ name: "QList", props: { ...ot, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), r = m(() => J_.includes(e.tag) ? null : "list"), i = m(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (o.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => h(e.tag, { class: i.value, role: r.value }, Pe(t.default));
} }), Af = [34, 37, 40, 33, 39, 38], Z_ = Object.keys(Bc);
ge({ name: "QKnob", props: { ...kn, ...Bc, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = H(e.modelValue), a = H(false), l = m(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), s = m(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let d;
  function c() {
    i.value = e.modelValue === null ? l.value : vt(e.modelValue, l.value, s.value), $(true);
  }
  me(() => `${e.modelValue}|${l.value}|${s.value}`, c), c();
  const f = m(() => e.disable === false && e.readonly === false), v = m(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), u = m(() => (String(e.step).trim().split(".")[1] || "").length), g = m(() => e.step === 0 ? 1 : e.step), y = m(() => e.instantFeedback === true || a.value === true), w = r.platform.is.mobile === true ? m(() => f.value === true ? { onClick: B } : {}) : m(() => f.value === true ? { onMousedown: q, onClick: B, onKeydown: V, onKeyup: D } : {}), x = m(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), _ = m(() => {
    const T = {};
    return Z_.forEach((z) => {
      T[z] = e[z];
    }), T;
  });
  function p(T) {
    T.isFinal ? (R(T.evt, true), a.value = false) : (T.isFirst && (C(), a.value = true), R(T.evt));
  }
  const b = m(() => [[wn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: T, left: z, width: U, height: j } = o.$el.getBoundingClientRect();
    d = { top: T + j / 2, left: z + U / 2 };
  }
  function q(T) {
    C(), R(T);
  }
  function B(T) {
    C(), R(T, true);
  }
  function V(T) {
    if (Af.includes(T.keyCode) === false) return;
    Ke(T);
    const z = ([34, 33].includes(T.keyCode) ? 10 : 1) * g.value, U = [34, 37, 40].includes(T.keyCode) ? -z : z;
    i.value = vt(parseFloat((i.value + U).toFixed(u.value)), l.value, s.value), $();
  }
  function R(T, z) {
    const U = an(T), j = Math.abs(U.top - d.top), K = Math.sqrt(j ** 2 + Math.abs(U.left - d.left) ** 2);
    let ie = Math.asin(j / K) * (180 / Math.PI);
    U.top < d.top ? ie = d.left < U.left ? 90 - ie : 270 + ie : ie = d.left < U.left ? ie + 90 : 270 - ie, r.lang.rtl === true ? ie = fl(-ie - e.angle, 0, 360) : e.angle && (ie = fl(ie - e.angle, 0, 360)), e.reverse === true && (ie = 360 - ie);
    let ye = e.min + ie / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const Y = ye % g.value;
      ye = ye - Y + (Math.abs(Y) >= g.value / 2 ? (Y < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(u.value));
    }
    ye = vt(ye, l.value, s.value), n("dragValue", ye), i.value !== ye && (i.value = ye), $(z);
  }
  function D(T) {
    Af.includes(T.keyCode) && $(true);
  }
  function $(T) {
    e.modelValue !== i.value && n("update:modelValue", i.value), T === true && n("change", i.value);
  }
  const M = va(e);
  function A() {
    return h("input", M.value);
  }
  return () => {
    const T = { class: v.value, role: "slider", "aria-valuemin": l.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, ...x.value, ..._.value, value: i.value, instantFeedback: y.value, ...w.value }, z = { default: t.default };
    return f.value === true && e.name !== void 0 && (z.internal = A), Sn(ug, T, z, "knob", f.value, () => b.value);
  };
} });
var { passive: Lf } = ht, ew = ["both", "horizontal", "vertical"], Yg = ge({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => ew.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: mr }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let o = null, r, i;
  me(() => e.scrollTarget, () => {
    s(), l();
  });
  function a() {
    o == null ? void 0 : o();
    const f = Math.max(0, Lo(r)), v = Kl(r), u = { top: f - n.position.top, left: v - n.position.left };
    if (e.axis === "vertical" && u.top === 0 || e.axis === "horizontal" && u.left === 0) return;
    const g = Math.abs(u.top) >= Math.abs(u.left) ? u.top < 0 ? "up" : "down" : u.left < 0 ? "left" : "right";
    n.position = { top: f, left: v }, n.directionChanged = n.direction !== g, n.delta = u, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function l() {
    r = jn(i, e.scrollTarget), r.addEventListener("scroll", d, Lf), d(true);
  }
  function s() {
    r !== void 0 && (r.removeEventListener("scroll", d, Lf), r = void 0);
  }
  function d(f) {
    if (f === true || e.debounce === 0 || e.debounce === "0") a();
    else if (o === null) {
      const [v, u] = e.debounce ? [setTimeout(a, e.debounce), clearTimeout] : [requestAnimationFrame(a), cancelAnimationFrame];
      o = () => {
        u(v), o = null;
      };
    }
  }
  const { proxy: c } = xe();
  return me(() => c.$q.lang.rtl, a), st(() => {
    i = c.$el.parentNode, l();
  }), We(() => {
    o == null ? void 0 : o(), s();
  }), Object.assign(c, { trigger: d, getPosition: () => n }), Tt;
} }), tw = ge({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = H(null), i = H(o.screen.height), a = H(e.container === true ? 0 : o.screen.width), l = H({ position: 0, direction: "down", inflectionPoint: 0 }), s = H(0), d = H(un.value === true ? 0 : ja()), c = m(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = m(() => e.container === false ? { minHeight: o.screen.height + "px" } : null), v = m(() => d.value !== 0 ? { [o.lang.rtl === true ? "left" : "right"]: `${d.value}px` } : null), u = m(() => d.value !== 0 ? { [o.lang.rtl === true ? "right" : "left"]: 0, [o.lang.rtl === true ? "left" : "right"]: `-${d.value}px`, width: `calc(100% + ${d.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const C = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      l.value = C, e.onScroll !== void 0 && n("scroll", C);
    }
  }
  function y(b) {
    const { height: C, width: q } = b;
    let B = false;
    i.value !== C && (B = true, i.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), x()), a.value !== q && (B = true, a.value = q), B === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    s.value !== b && (s.value = b, x());
  }
  function x() {
    if (e.container === true) {
      const b = i.value > s.value ? ja() : 0;
      d.value !== b && (d.value = b);
    }
  }
  let _ = null;
  const p = { instances: {}, view: m(() => e.view), isContainer: m(() => e.container), rootRef: r, height: i, containerHeight: s, scrollbarWidth: d, totalWidth: m(() => a.value + d.value), rows: m(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Nn({ size: 0, offset: 0, space: false }), right: Nn({ size: 300, offset: 0, space: false }), footer: Nn({ size: 0, offset: 0, space: false }), left: Nn({ size: 300, offset: 0, space: false }), scroll: l, animate() {
    _ !== null ? clearTimeout(_) : document.body.classList.add("q-body--layout-animate"), _ = setTimeout(() => {
      _ = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, C, q) {
    p[b][C] = q;
  } };
  if (_n(hr, p), ja() > 0) {
    let b = function() {
      B = null, V.classList.remove("hide-scrollbar");
    }, C = function() {
      if (B === null) {
        if (V.scrollHeight > o.screen.height) return;
        V.classList.add("hide-scrollbar");
      } else clearTimeout(B);
      B = setTimeout(b, 300);
    }, q = function(R) {
      B !== null && R === "remove" && (clearTimeout(B), b()), window[`${R}EventListener`]("resize", C);
    }, B = null;
    const V = document.body;
    me(() => e.container !== true ? "add" : "remove", q), e.container !== true && q("add"), sa(() => {
      q("remove");
    });
  }
  return () => {
    const b = At(t.default, [h(Yg, { onScroll: g }), h(sr, { onResize: y })]), C = h("div", { class: c.value, style: f.value, ref: e.container === true ? void 0 : r, tabindex: -1 }, b);
    return e.container === true ? h("div", { class: "q-layout-container overflow-hidden", ref: r }, [h(sr, { onResize: w }), h("div", { class: "absolute-full", style: v.value }, [h("div", { class: "scroll", style: u.value }, [C])])]) : C;
  };
} }), nw = ["horizontal", "vertical", "cell", "none"], ow = ge({ name: "QMarkupTable", props: { ...ot, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => nw.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), r = m(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (o.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => h("div", { class: r.value }, [h("table", { class: "q-table" }, Pe(t.default))]);
} });
ge({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = vg();
  return () => {
    if (n.value === true) {
      const i = Pe(t.default);
      return i === void 0 ? i : i.length > 1 ? h(e.tag, {}, i) : i[0];
    }
    const o = { class: "q-no-ssr-placeholder" }, r = Pe(t.placeholder);
    if (r !== void 0) return r.length > 1 ? h(e.tag, o, r) : r[0];
    if (e.placeholder !== void 0) return h(e.tag, o, e.placeholder);
  };
} });
var rw = () => h("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [h("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), h("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), iw = ge({ name: "QRadio", props: { ...ot, ...lo, ...kn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), r = rt(e, o.$q), i = so(e, ng), a = H(null), { refocusTargetEl: l, refocusTarget: s } = tg(e, a), d = m(() => Je(e.modelValue) === Je(e.val)), c = m(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (r.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = m(() => {
    const b = e.color !== void 0 && (e.keepColor === true || d.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${d.value === true ? "truthy" : "falsy"}${b}`;
  }), v = m(() => (d.value === true ? e.checkedIcon : e.uncheckedIcon) || null), u = m(() => e.disable === true ? -1 : e.tabindex || 0), g = m(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": d.value === true, "^checked": d.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), y = Fo(g);
  function w(b) {
    b !== void 0 && (Ke(b), s(b)), e.disable !== true && d.value !== true && n("update:modelValue", e.val, b);
  }
  function x(b) {
    (b.keyCode === 13 || b.keyCode === 32) && Ke(b);
  }
  function _(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(o, { set: w });
  const p = rw();
  return () => {
    const b = v.value !== null ? [h("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [h(tt, { class: "q-radio__icon", name: v.value })])] : [p];
    e.disable !== true && y(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [h("div", { class: f.value, style: i.value, "aria-hidden": "true" }, b)];
    l.value !== null && C.push(l.value);
    const q = e.label !== void 0 ? At(t.default, [e.label]) : Pe(t.default);
    return q !== void 0 && C.push(h("div", { class: "q-radio__label q-anchor--skip" }, q)), h("div", { ref: a, class: c.value, tabindex: u.value, role: "radio", "aria-label": e.label, "aria-checked": d.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: x, onKeyup: _ }, C);
  };
} }), aw = ge({ name: "QToggle", props: { ...og, icon: String, iconColor: String }, emits: rg, setup(e) {
  function t(n, o) {
    const r = m(() => (n.value === true ? e.checkedIcon : o.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), i = m(() => n.value === true ? e.iconColor : null);
    return () => [h("div", { class: "q-toggle__track" }), h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, r.value !== void 0 ? [h(tt, { name: r.value, color: i.value })] : void 0)];
  }
  return ig("toggle", t);
} }), Gg = { radio: iw, checkbox: $i, toggle: aw }, lw = Object.keys(Gg);
function Fs(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (o) => o[n];
}
var sw = ge({ name: "QOptionGroup", props: { ...ot, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Ot), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => lw.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: o } } = xe(), r = Array.isArray(e.modelValue);
  e.type === "radio" ? r === true && console.error("q-option-group: model should not be array") : r === false && console.error("q-option-group: model should be array in your case");
  const i = rt(e, o), a = m(() => Gg[e.type]), l = m(() => Fs(e.optionValue, "value")), s = m(() => Fs(e.optionLabel, "label")), d = m(() => Fs(e.optionDisable, "disable")), c = m(() => e.options.map((g) => ({ val: l.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || d.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? i.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = m(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), v = m(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function u(g) {
    t("update:modelValue", g);
  }
  return () => h("div", { class: f.value, ...v.value }, e.options.map((g, y) => {
    const w = n["label-" + y] !== void 0 ? () => n["label-" + y](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return h("div", [h(a.value, { label: w === void 0 ? s.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": u, ...c.value[y] }, w)]);
  }));
} });
ge({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = Lt(hr, ut);
  if (o === ut) return console.error("QPage needs to be a deep child of QLayout"), ut;
  if (Lt(Cm, ut) === ut) return console.error("QPage needs to be child of QPageContainer"), ut;
  const i = m(() => {
    const l = (o.header.space === true ? o.header.size : 0) + (o.footer.space === true ? o.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const s = o.isContainer.value === true ? o.containerHeight.value : n.screen.height;
      return e.styleFn(l, s);
    }
    return { minHeight: o.isContainer.value === true ? o.containerHeight.value - l + "px" : n.screen.height === 0 ? l !== 0 ? `calc(100vh - ${l}px)` : "100vh" : n.screen.height - l + "px" };
  }), a = m(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => h("main", { class: a.value, style: i.value }, Pe(t.default));
} });
var uw = ge({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), o = Lt(hr, ut);
  if (o === ut) return console.error("QPageContainer needs to be child of QLayout"), ut;
  _n(Cm, true);
  const r = m(() => {
    const i = {};
    return o.header.space === true && (i.paddingTop = `${o.header.size}px`), o.right.space === true && (i[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${o.right.size}px`), o.footer.space === true && (i.paddingBottom = `${o.footer.size}px`), o.left.space === true && (i[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${o.left.size}px`), i;
  });
  return () => h("div", { class: "q-page-container", style: r.value }, Pe(t.default));
} }), Ou = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Xg() {
  const { props: e, proxy: { $q: t } } = xe(), n = Lt(hr, ut);
  if (n === ut) return console.error("QPageSticky needs to be child of QLayout"), ut;
  const o = m(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), r = m(() => n.header.offset), i = m(() => n.right.offset), a = m(() => n.footer.offset), l = m(() => n.left.offset), s = m(() => {
    let f = 0, v = 0;
    const u = o.value, g = t.lang.rtl === true ? -1 : 1;
    u.top === true && r.value !== 0 ? v = `${r.value}px` : u.bottom === true && a.value !== 0 && (v = `${-a.value}px`), u.left === true && l.value !== 0 ? f = `${g * l.value}px` : u.right === true && i.value !== 0 && (f = `${-g * i.value}px`);
    const y = { transform: `translate(${f}, ${v})` };
    return e.offset && (y.margin = `${e.offset[1]}px ${e.offset[0]}px`), u.vertical === true ? (l.value !== 0 && (y[t.lang.rtl === true ? "right" : "left"] = `${l.value}px`), i.value !== 0 && (y[t.lang.rtl === true ? "left" : "right"] = `${i.value}px`)) : u.horizontal === true && (r.value !== 0 && (y.top = `${r.value}px`), a.value !== 0 && (y.bottom = `${a.value}px`)), y;
  }), d = m(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function c(f) {
    const v = Pe(f.default);
    return h("div", { class: d.value, style: s.value }, e.expand === true ? v : [h("div", v)]);
  }
  return { $layout: n, getStickyContent: c };
}
ge({ name: "QPageScroller", props: { ...Ou, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Ou.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), { $layout: r, getStickyContent: i } = Xg(), a = H(null);
  let l;
  const s = m(() => r.height.value - (r.isContainer.value === true ? r.containerHeight.value : o.screen.height));
  function d() {
    return e.reverse === true ? s.value - r.scroll.value.position > e.scrollOffset : r.scroll.value.position > e.scrollOffset;
  }
  const c = H(d());
  function f() {
    const w = d();
    c.value !== w && (c.value = w);
  }
  function v() {
    e.reverse === true ? l === void 0 && (l = me(s, f)) : u();
  }
  me(r.scroll, f), me(() => e.reverse, v);
  function u() {
    l !== void 0 && (l(), l = void 0);
  }
  function g(w) {
    const x = jn(r.isContainer.value === true ? a.value : r.rootRef.value);
    $r(x, e.reverse === true ? r.height.value : 0, e.duration), n("click", w);
  }
  function y() {
    return c.value === true ? h("div", { ref: a, class: "q-page-scroller", onClick: g }, i(t)) : null;
  }
  return v(), We(u), () => h($t, { name: "q-transition--fade" }, y);
} });
ge({ name: "QPageSticky", props: Ou, setup(e, { slots: t }) {
  const { getStickyContent: n } = Xg();
  return () => n(t);
} });
function La(e, t) {
  return [true, false].includes(e) ? e : t;
}
ge({ name: "QPagination", props: { ...ot, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || Fm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: o } = n, r = rt(e, o), i = m(() => parseInt(e.min, 10)), a = m(() => parseInt(e.max, 10)), l = m(() => parseInt(e.maxPages, 10)), s = m(() => g.value + " / " + a.value), d = m(() => La(e.boundaryLinks, e.input)), c = m(() => La(e.boundaryNumbers, !e.input)), f = m(() => La(e.directionLinks, e.input)), v = m(() => La(e.ellipses, !e.input)), u = H(null), g = m({ get: () => e.modelValue, set: (A) => {
    if (A = parseInt(A, 10), e.disable || isNaN(A)) return;
    const T = vt(A, i.value, a.value);
    e.modelValue !== T && t("update:modelValue", T);
  } });
  me(() => `${i.value}|${a.value}`, () => {
    g.value = e.modelValue;
  });
  const y = m(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = m(() => e.gutter in ml ? `${ml[e.gutter]}px` : e.gutter || null), x = m(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), _ = m(() => {
    const A = [e.iconFirst || o.iconSet.pagination.first, e.iconPrev || o.iconSet.pagination.prev, e.iconNext || o.iconSet.pagination.next, e.iconLast || o.iconSet.pagination.last];
    return o.lang.rtl === true ? A.reverse() : A;
  }), p = m(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = m(() => bc(e, "flat")), C = m(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), q = m(() => {
    const A = { [b.value]: false };
    return e.activeDesign !== "" && (A[e.activeDesign] = true), A;
  }), B = m(() => ({ ...q.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), V = m(() => {
    let A = Math.max(l.value, 1 + (v.value ? 2 : 0) + (c.value ? 2 : 0));
    const T = { pgFrom: i.value, pgTo: a.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(a.value).length)}em` } };
    return l.value && A < a.value - i.value + 1 && (A = 1 + Math.floor(A / 2) * 2, T.pgFrom = Math.max(i.value, Math.min(a.value - A + 1, e.modelValue - Math.floor(A / 2))), T.pgTo = Math.min(a.value, T.pgFrom + A - 1), c.value && (T.boundaryStart = true, T.pgFrom++), v.value && T.pgFrom > i.value + (c.value ? 1 : 0) && (T.ellipsesStart = true, T.pgFrom++), c.value && (T.boundaryEnd = true, T.pgTo--), v.value && T.pgTo < a.value - (c.value ? 1 : 0) && (T.ellipsesEnd = true, T.pgTo--)), T;
  });
  function R(A) {
    g.value = A;
  }
  function D(A) {
    g.value = g.value + A;
  }
  const $ = m(() => {
    function A() {
      g.value = u.value, u.value = null;
    }
    return { "onUpdate:modelValue": (T) => {
      u.value = T;
    }, onKeyup: (T) => {
      Cn(T, 13) === true && A();
    }, onBlur: A };
  });
  function M(A, T, z) {
    const U = { "aria-label": T, "aria-current": "false", ...C.value, ...A };
    return z === true && Object.assign(U, { "aria-current": "true", ...B.value }), T !== void 0 && (e.toFn !== void 0 ? U.to = e.toFn(T) : U.onClick = () => {
      R(T);
    }), h(et, U);
  }
  return Object.assign(n, { set: R, setByOffset: D }), () => {
    const A = [], T = [];
    let z;
    if (d.value === true && (A.push(M({ key: "bls", disable: e.disable || e.modelValue <= i.value, icon: _.value[0], "aria-label": o.lang.pagination.first }, i.value)), T.unshift(M({ key: "ble", disable: e.disable || e.modelValue >= a.value, icon: _.value[3], "aria-label": o.lang.pagination.last }, a.value))), f.value === true && (A.push(M({ key: "bdp", disable: e.disable || e.modelValue <= i.value, icon: _.value[1], "aria-label": o.lang.pagination.prev }, e.modelValue - 1)), T.unshift(M({ key: "bdn", disable: e.disable || e.modelValue >= a.value, icon: _.value[2], "aria-label": o.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      z = [];
      const { pgFrom: U, pgTo: j, marginalStyle: K } = V.value;
      if (V.value.boundaryStart === true) {
        const ie = i.value === e.modelValue;
        A.push(M({ key: "bns", style: K, disable: e.disable, label: i.value }, i.value, ie));
      }
      if (V.value.boundaryEnd === true) {
        const ie = a.value === e.modelValue;
        T.unshift(M({ key: "bne", style: K, disable: e.disable, label: a.value }, a.value, ie));
      }
      V.value.ellipsesStart === true && A.push(M({ key: "bes", style: K, disable: e.disable, label: "\u2026", ripple: false }, U - 1)), V.value.ellipsesEnd === true && T.unshift(M({ key: "bee", style: K, disable: e.disable, label: "\u2026", ripple: false }, j + 1));
      for (let ie = U; ie <= j; ie++) z.push(M({ key: `bpg${ie}`, style: K, disable: e.disable, label: ie }, ie, ie === e.modelValue));
    }
    return h("div", { class: y.value, ...p.value }, [h("div", { class: "q-pagination__content row no-wrap items-center", style: x.value }, [...A, e.input === true ? h(Qg, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: u.value, disable: e.disable, dark: r.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: i.value, max: a.value, ...$.value }) : h("div", { class: "q-pagination__middle row justify-center" }, z), ...T])]);
  };
} });
function $s(e) {
  let t = false, n, o;
  function r() {
    o = arguments, t !== true && (t = true, n = window.requestAnimationFrame(() => {
      e.apply(this, o), o = void 0, t = false;
    }));
  }
  return r.cancel = () => {
    window.cancelAnimationFrame(n), t = false;
  }, r;
}
var { passive: Ba } = ht;
ge({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: mr, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const o = H(0), r = H(null), i = H(null), a = H(null);
  let l, s, d, c, f, v;
  me(() => e.height, () => {
    l === true && g();
  }), me(() => e.scrollTarget, () => {
    l === true && (_(), x());
  });
  let u = (p) => {
    o.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, C;
    v === window ? (p = 0, C = b = window.innerHeight) : (p = hl(v).top, b = zr(v), C = p + b);
    const q = hl(r.value).top, B = q + e.height;
    if (f !== void 0 || B > p && q < C) {
      const V = (C - q) / (e.height + b);
      y((d - e.height) * V * e.speed), u(V);
    }
  }
  let y = (p) => {
    s.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function w() {
    d = s.naturalHeight || s.videoHeight || zr(s), l === true && g();
  }
  function x() {
    l = true, v = jn(r.value, e.scrollTarget), v.addEventListener("scroll", g, Ba), window.addEventListener("resize", c, Ba), g();
  }
  function _() {
    l === true && (l = false, v.removeEventListener("scroll", g, Ba), window.removeEventListener("resize", c, Ba), v = void 0, y.cancel(), u.cancel(), c.cancel());
  }
  return st(() => {
    y = $s(y), u = $s(u), c = $s(w), s = t.media !== void 0 ? i.value.children[0] : a.value, s.onload = s.onloadstart = s.loadedmetadata = w, w(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? x : _)();
    }), f.observe(r.value)) : x();
  }), We(() => {
    _(), f == null ? void 0 : f.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => h("div", { ref: r, class: "q-parallax", style: { height: `${e.height}px` } }, [h("div", { ref: i, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [h("img", { ref: a, src: e.src })]), h("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: o.value }) : Pe(t.default))]);
} });
function Ii(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const o = e.valueOf();
    if (Object(o) !== o) {
      const r = new e.constructor(o);
      return t.set(e, r), r;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((o) => {
    n.add(Ii(o, t));
  }) : e instanceof Map && e.forEach((o, r) => {
    n.set(r, Ii(o, t));
  }), Object.assign(n, ...Object.keys(e).map((o) => ({ [o]: Ii(e[o], t) })));
}
ge({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = H(null), a = H(""), l = H("");
  let s = false;
  const d = m(() => It({ initialValue: a.value, validate: e.validate, set: c, cancel: f, updatePosition: v }, "value", () => l.value, (b) => {
    l.value = b;
  }));
  function c() {
    e.validate(l.value) !== false && (u() === true && (n("save", l.value, a.value), n("update:modelValue", l.value)), g());
  }
  function f() {
    u() === true && n("cancel", l.value, a.value), g();
  }
  function v() {
    Qe(() => {
      i.value.updatePosition();
    });
  }
  function u() {
    return An(l.value, a.value) === false;
  }
  function g() {
    s = true, i.value.hide();
  }
  function y() {
    s = false, a.value = Ii(e.modelValue), l.value = Ii(e.modelValue), n("beforeShow");
  }
  function w() {
    n("show");
  }
  function x() {
    s === false && u() === true && (e.autoSave === true && e.validate(l.value) === true ? (n("save", l.value, a.value), n("update:modelValue", l.value)) : n("cancel", l.value, a.value)), n("beforeHide");
  }
  function _() {
    n("hide");
  }
  function p() {
    const b = t.default !== void 0 ? [].concat(t.default(d.value)) : [];
    return e.title && b.unshift(h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [h(et, { flat: true, color: e.color, label: e.labelCancel || r.lang.label.cancel, onClick: f }), h(et, { flat: true, color: e.color, label: e.labelSet || r.lang.label.set, onClick: c })])), b;
  }
  return Object.assign(o, { set: c, cancel: f, show(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: v }), () => {
    if (e.disable !== true) return h(Wl, { ref: i, class: "q-popup-edit", cover: e.cover, onBeforeShow: y, onShow: w, onBeforeHide: x, onHide: _, onEscapeKey: f }, p);
  };
} });
ge({ name: "QPopupProxy", props: { ...zm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: o }) {
  const { proxy: r } = xe(), { $q: i } = r, a = H(false), l = H(null), s = m(() => parseInt(e.breakpoint, 10)), { canShow: d } = yc({ showing: a });
  function c() {
    return i.screen.width < s.value || i.screen.height < s.value ? "dialog" : "menu";
  }
  const f = H(c()), v = m(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  me(() => c(), (y) => {
    a.value !== true && (f.value = y);
  });
  function u(y) {
    a.value = true, n("show", y);
  }
  function g(y) {
    a.value = false, f.value = c(), n("hide", y);
  }
  return Object.assign(r, { show(y) {
    d(y) === true && l.value.show(y);
  }, hide(y) {
    l.value.hide(y);
  }, toggle(y) {
    l.value.toggle(y);
  } }), It(r, "currentComponent", () => ({ type: f.value, ref: l.value })), () => {
    const y = { ref: l, ...v.value, ...o, onShow: u, onHide: g };
    let w;
    return f.value === "dialog" ? w = Gl : (w = Wl, Object.assign(y, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), h(w, y, t.default);
  };
} });
var cw = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Bf(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var dw = ge({ name: "QLinearProgress", props: { ...ot, ...lo, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), o = rt(e, n.$q), r = so(e, cw), i = m(() => e.indeterminate === true || e.query === true), a = m(() => e.reverse !== e.query), l = m(() => ({ ...r.value !== null ? r.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = m(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), d = m(() => Bf(e.buffer !== void 0 ? e.buffer : 1, a.value, n.$q)), c = m(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = m(() => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${o.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), v = m(() => Bf(i.value === true ? 1 : e.value, a.value, n.$q)), u = m(() => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${i.value === true ? "in" : ""}determinate`), g = m(() => ({ width: `${e.value * 100}%` })), y = m(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${c.value}`);
  return () => {
    const w = [h("div", { class: f.value, style: d.value }), h("div", { class: u.value, style: v.value })];
    return e.stripe === true && i.value === false && w.push(h("div", { class: y.value, style: g.value })), h("div", { class: s.value, style: l.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, At(t.default, w));
  };
} }), Rf = 40, Is = 20;
ge({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: mr }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = H("pull"), a = H(0), l = H(false), s = H(-40), d = H(false), c = H({}), f = m(() => ({ opacity: a.value, transform: `translateY(${s.value}px) rotate(${a.value * 360}deg)` })), v = m(() => "q-pull-to-refresh__puller row flex-center" + (d.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function u(C) {
    if (C.isFinal === true) {
      l.value === true && (l.value = false, i.value === "pulled" ? (i.value = "refreshing", p({ pos: Is }), w()) : i.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (d.value === true || i.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (Lo(x) !== 0 || C.direction !== "down") return l.value === true && (l.value = false, i.value = "pull", p({ pos: -40, ratio: 0 })), false;
      l.value = true;
      const { top: V, left: R } = o.$el.getBoundingClientRect();
      c.value = { top: V + "px", left: R + "px", width: window.getComputedStyle(o.$el).getPropertyValue("width") };
    }
    Nt(C.evt);
    const q = Math.min(140, Math.max(0, C.distance.y));
    s.value = q - Rf, a.value = vt(q / (Is + Rf), 0, 1);
    const B = s.value > Is ? "pulled" : "pull";
    i.value !== B && (i.value = B);
  }
  const g = m(() => {
    const C = { down: true };
    return e.noMouse !== true && (C.mouse = true), [[wn, u, void 0, C]];
  }), y = m(() => `q-pull-to-refresh__content${l.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      p({ pos: -40, ratio: 0 }, () => {
        i.value = "pull";
      });
    });
  }
  let x, _ = null;
  function p({ pos: C, ratio: q }, B) {
    d.value = true, s.value = C, q !== void 0 && (a.value = q), _ !== null && clearTimeout(_), _ = setTimeout(() => {
      _ = null, d.value = false, B == null ? void 0 : B();
    }, 300);
  }
  function b() {
    x = jn(o.$el, e.scrollTarget);
  }
  return me(() => e.scrollTarget, b), st(b), We(() => {
    _ !== null && clearTimeout(_);
  }), Object.assign(o, { trigger: w, updateScrollTarget: b }), () => {
    const C = [h("div", { class: y.value }, Pe(t.default)), h("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: c.value }, [h("div", { class: v.value, style: f.value }, [i.value !== "refreshing" ? h(tt, { name: e.icon || r.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : h(Tn, { size: "24px", color: e.color })])])];
    return Sn("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var ho = { MIN: 0, RANGE: 1, MAX: 2 };
ge({ name: "QRange", props: { ...cg, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: dg, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: o, methods: r } = fg({ updateValue: V, updatePosition: D, getDragging: R, formAttrs: m(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), i = H(null), a = H(0), l = H(0), s = H({ min: 0, max: 0 });
  function d() {
    s.value.min = e.modelValue.min === null ? o.innerMin.value : vt(e.modelValue.min, o.innerMin.value, o.innerMax.value), s.value.max = e.modelValue.max === null ? o.innerMax.value : vt(e.modelValue.max, o.innerMin.value, o.innerMax.value);
  }
  me(() => `${e.modelValue.min}|${e.modelValue.max}|${o.innerMin.value}|${o.innerMax.value}`, d), d();
  const c = m(() => r.convertModelToRatio(s.value.min)), f = m(() => r.convertModelToRatio(s.value.max)), v = m(() => o.active.value === true ? a.value : c.value), u = m(() => o.active.value === true ? l.value : f.value), g = m(() => {
    const M = { [o.positionProp.value]: `${100 * v.value}%`, [o.sizeProp.value]: `${100 * (u.value - v.value)}%` };
    return e.selectionImg !== void 0 && (M.backgroundImage = `url(${e.selectionImg}) !important`), M;
  }), y = m(() => {
    if (o.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: r.onMobileClick };
    const M = { onMousedown: r.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(M, { onFocus: () => {
      o.focus.value = "both";
    }, onBlur: r.onBlur, onKeydown: $, onKeyup: r.onKeyup }), M;
  });
  function w(M) {
    return n.platform.is.mobile !== true && o.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      o.focus.value = M;
    }, onBlur: r.onBlur, onKeydown: $, onKeyup: r.onKeyup } : {};
  }
  const x = m(() => e.dragOnlyRange !== true ? o.tabindex.value : null), _ = m(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? o.tabindex.value : null), p = H(null), b = m(() => w("min")), C = r.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: x.value }), ratio: v, label: m(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min), thumbColor: m(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: m(() => e.leftLabelColor || e.labelColor), labelTextColor: m(() => e.leftLabelTextColor || e.labelTextColor) }), q = m(() => w("max")), B = r.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...q.value, key: "tmax", tabindex: x.value }), ratio: u, label: m(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max), thumbColor: m(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: m(() => e.rightLabelColor || e.labelColor), labelTextColor: m(() => e.rightLabelTextColor || e.labelTextColor) });
  function V(M) {
    (s.value.min !== e.modelValue.min || s.value.max !== e.modelValue.max) && t("update:modelValue", { ...s.value }), M === true && t("change", { ...s.value });
  }
  function R(M) {
    const { left: A, top: T, width: z, height: U } = i.value.getBoundingClientRect(), j = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * U) : p.value.offsetWidth / (2 * z), K = { left: A, top: T, width: z, height: U, valueMin: s.value.min, valueMax: s.value.max, ratioMin: c.value, ratioMax: f.value }, ie = r.getDraggingRatio(M, K);
    return e.dragOnlyRange !== true && ie < K.ratioMin + j ? K.type = ho.MIN : e.dragOnlyRange === true || ie < K.ratioMax - j ? e.dragRange === true || e.dragOnlyRange === true ? (K.type = ho.RANGE, Object.assign(K, { offsetRatio: ie, offsetModel: r.convertRatioToModel(ie), rangeValue: K.valueMax - K.valueMin, rangeRatio: K.ratioMax - K.ratioMin })) : K.type = K.ratioMax - ie < ie - K.ratioMin ? ho.MAX : ho.MIN : K.type = ho.MAX, K;
  }
  function D(M, A = o.dragging.value) {
    let T;
    const z = r.getDraggingRatio(M, A), U = r.convertRatioToModel(z);
    switch (A.type) {
      case ho.MIN:
        z <= A.ratioMax ? (T = { minR: z, maxR: A.ratioMax, min: U, max: A.valueMax }, o.focus.value = "min") : (T = { minR: A.ratioMax, maxR: z, min: A.valueMax, max: U }, o.focus.value = "max");
        break;
      case ho.MAX:
        z >= A.ratioMin ? (T = { minR: A.ratioMin, maxR: z, min: A.valueMin, max: U }, o.focus.value = "max") : (T = { minR: z, maxR: A.ratioMin, min: U, max: A.valueMin }, o.focus.value = "min");
        break;
      case ho.RANGE:
        const j = z - A.offsetRatio, K = vt(A.ratioMin + j, o.innerMinRatio.value, o.innerMaxRatio.value - A.rangeRatio), ie = U - A.offsetModel, ye = vt(A.valueMin + ie, o.innerMin.value, o.innerMax.value - A.rangeValue);
        T = { minR: K, maxR: K + A.rangeRatio, min: o.roundValueFn.value(ye), max: o.roundValueFn.value(ye + A.rangeValue) }, o.focus.value = "both";
        break;
    }
    s.value = s.value.min === null || s.value.max === null ? { min: T.min || e.min, max: T.max || e.max } : { min: T.min, max: T.max }, e.snap !== true || e.step === 0 ? (a.value = T.minR, l.value = T.maxR) : (a.value = r.convertModelToRatio(s.value.min), l.value = r.convertModelToRatio(s.value.max));
  }
  function $(M) {
    if (Rc.includes(M.keyCode) === false) return;
    Ke(M);
    const A = ([34, 33].includes(M.keyCode) ? 10 : 1) * o.keyStep.value, T = ([34, 37, 40].includes(M.keyCode) ? -1 : 1) * (o.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * A;
    if (o.focus.value === "both") {
      const z = s.value.max - s.value.min, U = vt(o.roundValueFn.value(s.value.min + T), o.innerMin.value, o.innerMax.value - z);
      s.value = { min: U, max: o.roundValueFn.value(U + z) };
    } else {
      if (o.focus.value === false) return;
      {
        const z = o.focus.value;
        s.value = { ...s.value, [z]: vt(o.roundValueFn.value(s.value[z] + T), z === "min" ? o.innerMin.value : s.value.min, z === "max" ? o.innerMax.value : s.value.max) };
      }
    }
    V();
  }
  return () => {
    const M = r.getContent(g, _, y, (A) => {
      A.push(C(), B());
    });
    return h("div", { ref: i, class: "q-range " + o.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...o.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, M);
  };
} });
ge({ name: "QRating", props: { ...lo, ...kn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = so(e), i = va(e), a = Fo(i), l = H(0);
  let s = {};
  const d = m(() => e.readonly !== true && e.disable !== true), c = m(() => `q-rating row inline items-center q-rating--${d.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = m(() => {
    const p = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, q = Array.isArray(e.color) === true ? e.color.length : 0, B = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, V = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: p, icon: p > 0 ? e.icon[p - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: q, color: q > 0 ? e.color[q - 1] : e.color, selColorLen: B, selColor: B > 0 ? e.colorSelected[B - 1] : e.colorSelected, halfColorLen: V, halfColor: V > 0 ? e.colorHalf[V - 1] : e.colorHalf };
  }), v = m(() => {
    if (typeof e.iconAriaLabel == "string") {
      const p = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (b) => `${p}${b}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      const p = e.iconAriaLabel.length;
      if (p > 0) return (b) => e.iconAriaLabel[Math.min(b, p) - 1];
    }
    return (p, b) => `${b} ${p}`;
  }), u = m(() => {
    const p = [], b = f.value, C = Math.ceil(e.modelValue), q = d.value === true ? 0 : null, B = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let V = 1; V <= e.max; V++) {
      const R = l.value === 0 && e.modelValue >= V || l.value > 0 && l.value >= V, D = B === V && l.value < V, $ = l.value > 0 && (D === true ? C : e.modelValue) >= V && l.value < V, M = D === true ? V <= b.halfColorLen ? e.colorHalf[V - 1] : b.halfColor : b.selColor !== void 0 && R === true ? V <= b.selColorLen ? e.colorSelected[V - 1] : b.selColor : V <= b.colorLen ? e.color[V - 1] : b.color, A = (D === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (R === true || $ === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || o.iconSet.rating.icon;
      p.push({ name: (D === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (R === true || $ === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || o.iconSet.rating.icon, attrs: { tabindex: q, role: "radio", "aria-checked": e.modelValue === V ? "true" : "false", "aria-label": v.value(V, A) }, iconClass: "q-rating__icon" + (R === true || D === true ? " q-rating__icon--active" : "") + ($ === true ? " q-rating__icon--exselected" : "") + (l.value === V ? " q-rating__icon--hovered" : "") + (M !== void 0 ? ` text-${M}` : "") });
    }
    return p;
  }), g = m(() => {
    const p = { role: "radiogroup" };
    return e.disable === true && (p["aria-disabled"] = "true"), e.readonly === true && (p["aria-readonly"] = "true"), p;
  });
  function y(p) {
    if (d.value === true) {
      const b = vt(parseInt(p, 10), 1, parseInt(e.max, 10)), C = e.noReset !== true && e.modelValue === b ? 0 : b;
      C !== e.modelValue && n("update:modelValue", C), l.value = 0;
    }
  }
  function w(p) {
    d.value === true && (l.value = p);
  }
  function x(p, b) {
    switch (p.keyCode) {
      case 13:
      case 32:
        return y(b), Ke(p);
      case 37:
      case 40:
        return s[`rt${b - 1}`] && s[`rt${b - 1}`].focus(), Ke(p);
      case 39:
      case 38:
        return s[`rt${b + 1}`] && s[`rt${b + 1}`].focus(), Ke(p);
    }
  }
  function _() {
    l.value = 0;
  }
  return fr(() => {
    s = {};
  }), () => {
    const p = [];
    return u.value.forEach(({ iconClass: b, name: C, attrs: q }, B) => {
      const V = B + 1;
      p.push(h("div", { key: V, ref: (R) => {
        s[`rt${V}`] = R;
      }, class: "q-rating__icon-container flex flex-center", ...q, onClick() {
        y(V);
      }, onMouseover() {
        w(V);
      }, onMouseout: _, onFocus() {
        w(V);
      }, onBlur: _, onKeyup(R) {
        x(R, V);
      } }, At(t[`tip-${V}`], [h(tt, { class: b, name: C })])));
    }), e.name !== void 0 && e.disable !== true && a(p, "push"), h("div", { class: c.value, style: r.value, ...g.value }, p);
  };
} });
ge({ name: "QResponsive", props: Vc, setup(e, { slots: t }) {
  const n = Fc(e);
  return () => h("div", { class: "q-responsive" }, [h("div", { class: "q-responsive__filler overflow-hidden" }, [h("div", { style: n.value })]), h("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var fw = ge({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [h("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), h("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), hn(h("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), hn(h("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Pf = ["vertical", "horizontal"], Ns = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Df = { prevent: true, mouse: true, mouseAllDir: true }, Of = (e) => e >= 250 ? 50 : Math.ceil(e / 5), vw = ge({ name: "QScrollArea", props: { ...ot, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const o = H(false), r = H(false), i = H(false), a = { vertical: H(0), horizontal: H(0) }, l = { vertical: { ref: H(null), position: H(0), size: H(0) }, horizontal: { ref: H(null), position: H(0), size: H(0) } }, { proxy: s } = xe(), d = rt(e, s.$q);
  let c = null, f;
  const v = H(null), u = m(() => "q-scrollarea" + (d.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(a, { verticalInner: m(() => a.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: m(() => a.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), l.vertical.percentage = m(() => {
    const T = l.vertical.size.value - a.vertical.value;
    if (T <= 0) return 0;
    const z = vt(l.vertical.position.value / T, 0, 1);
    return Math.round(z * 1e4) / 1e4;
  }), l.vertical.thumbHidden = m(() => (e.visible === null ? i.value : e.visible) !== true && o.value === false && r.value === false || l.vertical.size.value <= a.vertical.value + 1), l.vertical.thumbStart = m(() => e.verticalOffset[0] + l.vertical.percentage.value * (a.verticalInner.value - l.vertical.thumbSize.value)), l.vertical.thumbSize = m(() => Math.round(vt(a.verticalInner.value * a.verticalInner.value / l.vertical.size.value, Of(a.verticalInner.value), a.verticalInner.value))), l.vertical.style = m(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${l.vertical.thumbStart.value}px`, height: `${l.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), l.vertical.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.vertical.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), l.horizontal.percentage = m(() => {
    const T = l.horizontal.size.value - a.horizontal.value;
    if (T <= 0) return 0;
    const z = vt(Math.abs(l.horizontal.position.value) / T, 0, 1);
    return Math.round(z * 1e4) / 1e4;
  }), l.horizontal.thumbHidden = m(() => (e.visible === null ? i.value : e.visible) !== true && o.value === false && r.value === false || l.horizontal.size.value <= a.horizontal.value + 1), l.horizontal.thumbStart = m(() => e.horizontalOffset[0] + l.horizontal.percentage.value * (a.horizontalInner.value - l.horizontal.thumbSize.value)), l.horizontal.thumbSize = m(() => Math.round(vt(a.horizontalInner.value * a.horizontalInner.value / l.horizontal.size.value, Of(a.horizontalInner.value), a.horizontalInner.value))), l.horizontal.style = m(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [s.$q.lang.rtl === true ? "right" : "left"]: `${l.horizontal.thumbStart.value}px`, width: `${l.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), l.horizontal.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.horizontal.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = m(() => l.vertical.thumbHidden.value === true && l.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function y() {
    const T = {};
    return Pf.forEach((z) => {
      const U = l[z];
      Object.assign(T, { [z + "Position"]: U.position.value, [z + "Percentage"]: U.percentage.value, [z + "Size"]: U.size.value, [z + "ContainerSize"]: a[z].value, [z + "ContainerInnerSize"]: a[z + "Inner"].value });
    }), T;
  }
  const w = Kr(() => {
    const T = y();
    T.ref = s, n("scroll", T);
  }, 0);
  function x(T, z, U) {
    if (Pf.includes(T) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (T === "vertical" ? $r : xs)(v.value, z, U);
  }
  function _({ height: T, width: z }) {
    let U = false;
    a.vertical.value !== T && (a.vertical.value = T, U = true), a.horizontal.value !== z && (a.horizontal.value = z, U = true), U === true && B();
  }
  function p({ position: T }) {
    let z = false;
    l.vertical.position.value !== T.top && (l.vertical.position.value = T.top, z = true), l.horizontal.position.value !== T.left && (l.horizontal.position.value = T.left, z = true), z === true && B();
  }
  function b({ height: T, width: z }) {
    l.horizontal.size.value !== z && (l.horizontal.size.value = z, B()), l.vertical.size.value !== T && (l.vertical.size.value = T, B());
  }
  function C(T, z) {
    const U = l[z];
    if (T.isFirst === true) {
      if (U.thumbHidden.value === true) return;
      f = U.position.value, r.value = true;
    } else if (r.value !== true) return;
    T.isFinal === true && (r.value = false);
    const j = Ns[z], K = (U.size.value - a[z].value) / (a[z + "Inner"].value - U.thumbSize.value), ie = T.distance[j.dist], ye = f + (T.direction === j.dir ? 1 : -1) * ie * K;
    V(ye, z);
  }
  function q(T, z) {
    const U = l[z];
    if (U.thumbHidden.value !== true) {
      const j = z === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], K = T[Ns[z].offset] - j, ie = U.thumbStart.value - j;
      if (K < ie || K > ie + U.thumbSize.value) {
        const ye = K - U.thumbSize.value / 2, Y = vt(ye / (a[z + "Inner"].value - U.thumbSize.value), 0, 1);
        V(Y * Math.max(0, U.size.value - a[z].value), z);
      }
      U.ref.value !== null && U.ref.value.dispatchEvent(new MouseEvent(T.type, T));
    }
  }
  function B() {
    o.value = true, c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, o.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function V(T, z) {
    v.value[Ns[z].scroll] = T;
  }
  let R = null;
  function D() {
    R !== null && clearTimeout(R), R = setTimeout(() => {
      R = null, i.value = true;
    }, s.$q.platform.is.ios ? 50 : 0);
  }
  function $() {
    R !== null && (clearTimeout(R), R = null), i.value = false;
  }
  let M = null;
  me(() => s.$q.lang.rtl, (T) => {
    v.value !== null && xs(v.value, Math.abs(l.horizontal.position.value) * (T === true ? -1 : 1));
  }), Hn(() => {
    M = { top: l.vertical.position.value, left: l.horizontal.position.value };
  }), Oo(() => {
    if (M === null) return;
    const T = v.value;
    T !== null && (xs(T, M.left), $r(T, M.top));
  }), We(w.cancel), Object.assign(s, { getScrollTarget: () => v.value, getScroll: y, getScrollPosition: () => ({ top: l.vertical.position.value, left: l.horizontal.position.value }), getScrollPercentage: () => ({ top: l.vertical.percentage.value, left: l.horizontal.percentage.value }), setScrollPosition: x, setScrollPercentage(T, z, U) {
    x(T, z * (l[T].size.value - a[T].value) * (T === "horizontal" && s.$q.lang.rtl === true ? -1 : 1), U);
  } });
  const A = { scroll: l, thumbVertDir: [[wn, (T) => {
    C(T, "vertical");
  }, void 0, { vertical: true, ...Df }]], thumbHorizDir: [[wn, (T) => {
    C(T, "horizontal");
  }, void 0, { horizontal: true, ...Df }]], onVerticalMousedown(T) {
    q(T, "vertical");
  }, onHorizontalMousedown(T) {
    q(T, "horizontal");
  } };
  return () => h("div", { class: u.value, onMouseenter: D, onMouseleave: $ }, [h("div", { ref: v, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [h("div", { class: "q-scrollarea__content absolute", style: g.value }, At(t.default, [h(sr, { debounce: 0, onResize: b })])), h(Yg, { axis: "both", onScroll: p })]), h(sr, { debounce: 0, onResize: _ }), h(fw, { store: A, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), En = 1e3, hw = ["start", "center", "end", "start-force", "center-force", "end-force"], Jg = Array.prototype.filter, mw = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? Tt : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Jg.call(n, (r) => r.dataset && r.dataset.qVsAnchor !== void 0).forEach((r) => {
      delete r.dataset.qVsAnchor;
    });
    const o = n[t];
    (o == null ? void 0 : o.dataset) && (o.dataset.qVsAnchor = "");
  }));
};
function Ir(e, t) {
  return e + t;
}
function zs(e, t, n, o, r, i, a, l) {
  const s = e === window ? document.scrollingElement || document.documentElement : e, d = r === true ? "offsetWidth" : "offsetHeight", c = { scrollStart: 0, scrollViewSize: -a - l, scrollMaxSize: 0, offsetStart: -a, offsetEnd: -l };
  if (r === true ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft, c.scrollViewSize += s.clientWidth), c.scrollMaxSize = s.scrollWidth, i === true && (c.scrollStart = (ta === true ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop, c.scrollViewSize += s.clientHeight), c.scrollMaxSize = s.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (c.offsetStart += f[d]);
  if (o !== null) for (let f = o.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (c.offsetEnd += f[d]);
  if (t !== e) {
    const f = s.getBoundingClientRect(), v = t.getBoundingClientRect();
    r === true ? (c.offsetStart += v.left - f.left, c.offsetEnd -= v.width) : (c.offsetStart += v.top - f.top, c.offsetEnd -= v.height), e !== window && (c.offsetStart += c.scrollStart), c.offsetEnd += c.scrollMaxSize - c.offsetStart;
  }
  return c;
}
function Vf(e, t, n, o) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (o === true && (t = (ta === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (o === true && (t = (ta === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function ri(e, t, n, o) {
  if (n >= o) return 0;
  const r = t.length, i = Math.floor(n / En), a = Math.floor((o - 1) / En) + 1;
  let l = e.slice(i, a).reduce(Ir, 0);
  return n % En !== 0 && (l -= t.slice(i * En, n).reduce(Ir, 0)), o % En !== 0 && o !== r && (l -= t.slice(o, a * En).reduce(Ir, 0)), l;
}
var Zg = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, e0 = Object.keys(Zg), Vu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Zg };
function t0({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: o }) {
  const r = xe(), { props: i, emit: a, proxy: l } = r, { $q: s } = l;
  let d, c, f, v = [], u;
  const g = H(0), y = H(0), w = H({}), x = H(null), _ = H(null), p = H(null), b = H({ from: 0, to: 0 }), C = m(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  o === void 0 && (o = m(() => i.virtualScrollItemSize));
  const q = m(() => o.value + ";" + i.virtualScrollHorizontal), B = m(() => q.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter);
  me(B, () => {
    U();
  }), me(q, V);
  function V() {
    z(c, true);
  }
  function R(Y) {
    z(Y === void 0 ? c : Y);
  }
  function D(Y, L) {
    const ne = t();
    if (ne == null || ne.nodeType === 8) return;
    const G = zs(ne, n(), x.value, _.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd);
    f !== G.scrollViewSize && U(G.scrollViewSize), M(ne, G, Math.min(e.value - 1, Math.max(0, parseInt(Y, 10) || 0)), 0, hw.indexOf(L) !== -1 ? L : c !== -1 && Y > c ? "end" : "start");
  }
  function $() {
    const Y = t();
    if (Y == null || Y.nodeType === 8) return;
    const L = zs(Y, n(), x.value, _.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd), ne = e.value - 1, G = L.scrollMaxSize - L.offsetStart - L.offsetEnd - y.value;
    if (d === L.scrollStart) return;
    if (L.scrollMaxSize <= 0) {
      M(Y, L, 0, 0);
      return;
    }
    f !== L.scrollViewSize && U(L.scrollViewSize), A(b.value.from);
    const be = Math.floor(L.scrollMaxSize - Math.max(L.scrollViewSize, L.offsetEnd) - Math.min(u[ne], L.scrollViewSize / 2));
    if (be > 0 && Math.ceil(L.scrollStart) >= be) {
      M(Y, L, ne, L.scrollMaxSize - L.offsetEnd - v.reduce(Ir, 0));
      return;
    }
    let O = 0, P = L.scrollStart - L.offsetStart, te = P;
    if (P <= G && P + L.scrollViewSize >= g.value) P -= g.value, O = b.value.from, te = P;
    else for (let k = 0; P >= v[k] && O < ne; k++) P -= v[k], O += En;
    for (; P > 0 && O < ne; ) P -= u[O], P > -L.scrollViewSize ? (O++, te = P) : te = u[O] + P;
    M(Y, L, O, te);
  }
  function M(Y, L, ne, G, be) {
    const O = typeof be == "string" && be.indexOf("-force") !== -1, P = O === true ? be.replace("-force", "") : be, te = P !== void 0 ? P : "start";
    let k = Math.max(0, ne - w.value[te]), F = k + w.value.total;
    F > e.value && (F = e.value, k = Math.max(0, F - w.value.total)), d = L.scrollStart;
    const ee = k !== b.value.from || F !== b.value.to;
    if (ee === false && P === void 0) {
      K(ne);
      return;
    }
    const { activeElement: S } = document, E = p.value;
    ee === true && E !== null && E !== S && E.contains(S) === true && (E.addEventListener("focusout", T), setTimeout(() => {
      E == null ? void 0 : E.removeEventListener("focusout", T);
    })), mw(E, ne - k);
    const I = P !== void 0 ? u.slice(k, ne).reduce(Ir, 0) : 0;
    if (ee === true) {
      const Z = F >= b.value.from && k <= b.value.to ? b.value.to : F;
      b.value = { from: k, to: Z }, g.value = ri(v, u, 0, k), y.value = ri(v, u, F, e.value), requestAnimationFrame(() => {
        b.value.to !== F && d === L.scrollStart && (b.value = { from: b.value.from, to: F }, y.value = ri(v, u, F, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (d !== L.scrollStart) return;
      ee === true && A(k);
      const Z = u.slice(k, ne).reduce(Ir, 0), oe = Z + L.offsetStart + g.value, W = oe + u[ne];
      let fe = oe + G;
      if (P !== void 0) {
        const ve = Z - I, ue = L.scrollStart + ve;
        fe = O !== true && ue < oe && W < ue + L.scrollViewSize ? ue : P === "end" ? W - L.scrollViewSize : oe - (P === "start" ? 0 : Math.round((L.scrollViewSize - u[ne]) / 2));
      }
      d = fe, Vf(Y, fe, i.virtualScrollHorizontal, s.lang.rtl), K(ne);
    });
  }
  function A(Y) {
    const L = p.value;
    if (L) {
      const ne = Jg.call(L.children, (k) => k.classList && k.classList.contains("q-virtual-scroll--skip") === false), G = ne.length, be = i.virtualScrollHorizontal === true ? (k) => k.getBoundingClientRect().width : (k) => k.offsetHeight;
      let O = Y, P, te;
      for (let k = 0; k < G; ) {
        for (P = be(ne[k]), k++; k < G && ne[k].classList.contains("q-virtual-scroll--with-prev") === true; ) P += be(ne[k]), k++;
        te = P - u[O], te !== 0 && (u[O] += te, v[Math.floor(O / En)] += te), O++;
      }
    }
  }
  function T() {
    var _a3;
    (_a3 = p.value) == null ? void 0 : _a3.focus();
  }
  function z(Y, L) {
    const ne = 1 * o.value;
    (L === true || Array.isArray(u) === false) && (u = []);
    const G = u.length;
    u.length = e.value;
    for (let O = e.value - 1; O >= G; O--) u[O] = ne;
    const be = Math.floor((e.value - 1) / En);
    v = [];
    for (let O = 0; O <= be; O++) {
      let P = 0;
      const te = Math.min((O + 1) * En, e.value);
      for (let k = O * En; k < te; k++) P += u[k];
      v.push(P);
    }
    c = -1, d = void 0, g.value = ri(v, u, 0, b.value.from), y.value = ri(v, u, b.value.to, e.value), Y >= 0 ? (A(b.value.from), Qe(() => {
      D(Y);
    })) : ie();
  }
  function U(Y) {
    if (Y === void 0 && typeof window < "u") {
      const P = t();
      P != null && P.nodeType !== 8 && (Y = zs(P, n(), x.value, _.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = Y;
    const L = parseFloat(i.virtualScrollSliceRatioBefore) || 0, ne = parseFloat(i.virtualScrollSliceRatioAfter) || 0, G = 1 + L + ne, be = Y === void 0 || Y <= 0 ? 1 : Math.ceil(Y / o.value), O = Math.max(1, be, Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / G));
    w.value = { total: Math.ceil(O * G), start: Math.ceil(O * L), center: Math.ceil(O * (0.5 + L)), end: Math.ceil(O * (1 + L)), view: be };
  }
  function j(Y, L) {
    const ne = i.virtualScrollHorizontal === true ? "width" : "height", G = { ["--q-virtual-scroll-item-" + ne]: o.value + "px" };
    return [Y === "tbody" ? h(Y, { class: "q-virtual-scroll__padding", key: "before", ref: x }, [h("tr", [h("td", { style: { [ne]: `${g.value}px`, ...G }, colspan: C.value })])]) : h(Y, { class: "q-virtual-scroll__padding", key: "before", ref: x, style: { [ne]: `${g.value}px`, ...G } }), h(Y, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, L.flat()), Y === "tbody" ? h(Y, { class: "q-virtual-scroll__padding", key: "after", ref: _ }, [h("tr", [h("td", { style: { [ne]: `${y.value}px`, ...G }, colspan: C.value })])]) : h(Y, { class: "q-virtual-scroll__padding", key: "after", ref: _, style: { [ne]: `${y.value}px`, ...G } })];
  }
  function K(Y) {
    c !== Y && (i.onVirtualScroll !== void 0 && a("virtualScroll", { index: Y, from: b.value.from, to: b.value.to - 1, direction: Y < c ? "decrease" : "increase", ref: l }), c = Y);
  }
  U();
  const ie = Kr($, s.platform.is.ios === true ? 120 : 35);
  Ol(() => {
    U();
  });
  let ye = false;
  return Hn(() => {
    ye = true;
  }), Oo(() => {
    if (ye !== true) return;
    const Y = t();
    d !== void 0 && Y !== void 0 && Y !== null && Y.nodeType !== 8 ? Vf(Y, d, i.virtualScrollHorizontal, s.lang.rtl) : D(c);
  }), __QUASAR_SSR__ || We(() => {
    ie.cancel();
  }), Object.assign(l, { scrollTo: D, reset: V, refresh: R }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: U, onVirtualScrollEvt: ie, localResetVirtualScroll: z, padVirtualScroll: j, scrollTo: D, reset: V, refresh: R };
}
var Ff = (e) => ["add", "add-unique", "toggle"].includes(e), gw = ".*+?^${}()|[]\\", bw = Object.keys(Xl);
function Hs(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (o) => o !== null && typeof o == "object" && n in o ? o[n] : o;
}
var pw = ge({ name: "QSelect", inheritAttrs: false, props: { ...Vu, ...kn, ...Xl, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Ff }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Vu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...Jl, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = H(false), a = H(false), l = H(-1), s = H(""), d = H(false), c = H(false);
  let f = null, v = null, u, g, y, w = null, x, _, p, b;
  const C = H(null), q = H(null), B = H(null), V = H(null), R = H(null), D = Cc(e), $ = Ug(de), M = m(() => Array.isArray(e.options) ? e.options.length : 0), A = m(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: T, virtualScrollSliceSizeComputed: z, localResetVirtualScroll: U, padVirtualScroll: j, onVirtualScrollEvt: K, scrollTo: ie, setVirtualScrollSize: ye } = t0({ virtualScrollLength: M, getVirtualScrollTarget: Yt, getVirtualScrollEl: Mt, virtualScrollItemSizeComputed: A }), Y = Zl(), L = m(() => {
    const J = e.mapOptions === true && e.multiple !== true, Le = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Be = e.mapOptions === true && u !== void 0 ? u : [], nt = Le.map((pt) => ae(pt, Be));
      return e.modelValue === null && J === true ? nt.filter((pt) => pt !== null) : nt;
    }
    return Le;
  }), ne = m(() => {
    const J = {};
    return bw.forEach((Le) => {
      const Be = e[Le];
      Be !== void 0 && (J[Le] = Be);
    }), J;
  }), G = m(() => e.optionsDark === null ? Y.isDark.value : e.optionsDark), be = m(() => cr(L.value)), O = m(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || L.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), P = m(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), te = m(() => M.value === 0), k = m(() => L.value.map((J) => re.value(J)).join(", ")), F = m(() => e.displayValue !== void 0 ? e.displayValue : k.value), ee = m(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = m(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || L.value.some(ee.value))), E = m(() => Y.focused.value === true ? e.tabindex : -1), I = m(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": `${Y.targetUid.value}_lb` };
    return l.value >= 0 && (J["aria-activedescendant"] = `${Y.targetUid.value}_${l.value}`), J;
  }), Z = m(() => ({ id: `${Y.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), oe = m(() => L.value.map((J, Le) => ({ index: Le, opt: J, html: ee.value(J), selected: true, removeAtIndex: Me, toggleOption: Ne, tabindex: E.value }))), W = m(() => {
    if (M.value === 0) return [];
    const { from: J, to: Le } = T.value;
    return e.options.slice(J, Le).map((Be, nt) => {
      const pt = Q.value(Be) === true, mt = _e2(Be) === true, Ut = J + nt, Dt = { clickable: true, active: mt, activeClass: ue.value, manualFocus: true, focused: false, disable: pt, tabindex: -1, dense: e.optionsDense, dark: G.value, role: "option", "aria-selected": mt === true ? "true" : "false", id: `${Y.targetUid.value}_${Ut}`, onClick: () => {
        Ne(Be);
      } };
      return pt !== true && (l.value === Ut && (Dt.focused = true), r.platform.is.desktop === true && (Dt.onMousemove = () => {
        i.value === true && se(Ut);
      })), { index: Ut, opt: Be, html: ee.value(Be), label: re.value(Be), selected: Dt.active, focused: Dt.focused, toggleOption: Ne, setOptionIndex: se, itemProps: Dt };
    });
  }), fe = m(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : r.iconSet.arrow.dropdown), ve = m(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), ue = m(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = m(() => Hs(e.optionValue, "value")), re = m(() => Hs(e.optionLabel, "label")), Q = m(() => Hs(e.optionDisable, "disable")), le = m(() => L.value.map(ce.value)), we = m(() => {
    const J = { onInput: de, onChange: $, onKeydown: ct, onKeyup: Ae, onKeypress: Xe, onFocus: ke, onClick(Le) {
      g === true && St(Le);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = $, J;
  });
  me(L, (J) => {
    u = J, e.useInput === true && e.fillInput === true && e.multiple !== true && Y.innerLoading.value !== true && (a.value !== true && i.value !== true || be.value !== true) && (y !== true && mn(), (a.value === true || i.value === true) && Oe(""));
  }, { immediate: true }), me(() => e.fillInput, mn), me(i, rs), me(M, rb);
  function Ce(J) {
    return e.emitValue === true ? ce.value(J) : J;
  }
  function Te(J) {
    if (J !== -1 && J < L.value.length) if (e.multiple === true) {
      const Le = e.modelValue.slice();
      n("remove", { index: J, value: Le.splice(J, 1)[0] }), n("update:modelValue", Le);
    } else n("update:modelValue", null);
  }
  function Me(J) {
    Te(J), Y.focus();
  }
  function Ie(J, Le) {
    const Be = Ce(J);
    if (e.multiple !== true) {
      e.fillInput === true && Ve(re.value(J), true, true), n("update:modelValue", Be);
      return;
    }
    if (L.value.length === 0) {
      n("add", { index: 0, value: Be }), n("update:modelValue", e.multiple === true ? [Be] : Be);
      return;
    }
    if (Le === true && _e2(J) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const nt = e.modelValue.slice();
    n("add", { index: nt.length, value: Be }), nt.push(Be), n("update:modelValue", nt);
  }
  function Ne(J, Le) {
    var _a3;
    if (Y.editable.value !== true || J === void 0 || Q.value(J) === true) return;
    const Be = ce.value(J);
    if (e.multiple !== true) {
      Le !== true && (Ve(e.fillInput === true ? re.value(J) : "", true, true), at()), (_a3 = q.value) == null ? void 0 : _a3.focus(), (L.value.length === 0 || An(ce.value(L.value[0]), Be) !== true) && n("update:modelValue", e.emitValue === true ? Be : J);
      return;
    }
    if ((g !== true || d.value === true) && Y.focus(), ke(), L.value.length === 0) {
      const mt = e.emitValue === true ? Be : J;
      n("add", { index: 0, value: mt }), n("update:modelValue", e.multiple === true ? [mt] : mt);
      return;
    }
    const nt = e.modelValue.slice(), pt = le.value.findIndex((mt) => An(mt, Be));
    if (pt !== -1) n("remove", { index: pt, value: nt.splice(pt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && nt.length >= e.maxValues) return;
      const mt = e.emitValue === true ? Be : J;
      n("add", { index: nt.length, value: mt }), nt.push(mt);
    }
    n("update:modelValue", nt);
  }
  function se(J) {
    if (r.platform.is.desktop !== true) return;
    const Le = J !== -1 && J < M.value ? J : -1;
    l.value !== Le && (l.value = Le);
  }
  function pe(J = 1, Le) {
    if (i.value === true) {
      let Be = l.value;
      do
        Be = fl(Be + J, -1, M.value - 1);
      while (Be !== -1 && Be !== l.value && Q.value(e.options[Be]) === true);
      l.value !== Be && (se(Be), ie(Be), Le !== true && e.useInput === true && e.fillInput === true && Se(Be >= 0 ? re.value(e.options[Be]) : x, true));
    }
  }
  function ae(J, Le) {
    const Be = (nt) => An(ce.value(nt), J);
    return e.options.find(Be) || Le.find(Be) || J;
  }
  function _e2(J) {
    const Le = ce.value(J);
    return le.value.find((Be) => An(Be, Le)) !== void 0;
  }
  function ke(J) {
    e.useInput === true && q.value !== null && (J === void 0 || q.value === J.target && J.target.value === k.value) && q.value.select();
  }
  function Fe(J) {
    Cn(J, 27) === true && i.value === true && (St(J), at(), mn()), n("keyup", J);
  }
  function Ae(J) {
    const { value: Le } = J.target;
    if (J.keyCode !== void 0) {
      Fe(J);
      return;
    }
    if (J.target.value = "", f !== null && (clearTimeout(f), f = null), v !== null && (clearTimeout(v), v = null), mn(), typeof Le == "string" && Le.length !== 0) {
      const Be = Le.toLocaleLowerCase(), nt = (mt) => {
        const Ut = e.options.find((Dt) => String(mt.value(Dt)).toLocaleLowerCase() === Be);
        return Ut === void 0 ? false : (L.value.indexOf(Ut) === -1 ? Ne(Ut) : at(), true);
      }, pt = (mt) => {
        nt(ce) !== true && mt !== true && nt(re) !== true && Oe(Le, true, () => pt(true));
      };
      pt();
    } else Y.clearValue(J);
  }
  function Xe(J) {
    n("keypress", J);
  }
  function ct(J) {
    if (n("keydown", J), vr(J) === true) return;
    const Le = s.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Be = J.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (l.value !== -1 || Le === true);
    if (J.keyCode === 27) {
      Nt(J);
      return;
    }
    if (J.keyCode === 9 && Be === false) {
      De();
      return;
    }
    if (J.target === void 0 || J.target.id !== Y.targetUid.value || Y.editable.value !== true) return;
    if (J.keyCode === 40 && Y.innerLoading.value !== true && i.value === false) {
      Ke(J), He();
      return;
    }
    if (J.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && s.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Te(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (J.keyCode === 35 || J.keyCode === 36) && (typeof s.value != "string" || s.value.length === 0) && (Ke(J), l.value = -1, pe(J.keyCode === 36 ? 1 : -1, e.multiple)), (J.keyCode === 33 || J.keyCode === 34) && z.value !== void 0 && (Ke(J), l.value = Math.max(-1, Math.min(M.value, l.value + (J.keyCode === 33 ? -1 : 1) * z.value.view)), pe(J.keyCode === 33 ? 1 : -1, e.multiple)), (J.keyCode === 38 || J.keyCode === 40) && (Ke(J), pe(J.keyCode === 38 ? -1 : 1, e.multiple));
    const nt = M.value;
    if ((p === void 0 || b < Date.now()) && (p = ""), nt > 0 && e.useInput !== true && J.key !== void 0 && J.key.length === 1 && J.altKey === false && J.ctrlKey === false && J.metaKey === false && (J.keyCode !== 32 || p.length !== 0)) {
      i.value !== true && He(J);
      const pt = J.key.toLocaleLowerCase(), mt = p.length === 1 && p[0] === pt;
      b = Date.now() + 1500, mt === false && (Ke(J), p += pt);
      const Ut = new RegExp("^" + p.split("").map((is) => gw.indexOf(is) !== -1 ? "\\" + is : is).join(".*"), "i");
      let Dt = l.value;
      if (mt === true || Dt < 0 || Ut.test(re.value(e.options[Dt])) !== true) do
        Dt = fl(Dt + 1, -1, nt - 1);
      while (Dt !== l.value && (Q.value(e.options[Dt]) === true || Ut.test(re.value(e.options[Dt])) !== true));
      l.value !== Dt && Qe(() => {
        se(Dt), ie(Dt), Dt >= 0 && e.useInput === true && e.fillInput === true && Se(re.value(e.options[Dt]), true);
      });
      return;
    }
    if (!(J.keyCode !== 13 && (J.keyCode !== 32 || e.useInput === true || p !== "") && (J.keyCode !== 9 || Be === false))) {
      if (J.keyCode !== 9 && Ke(J), l.value !== -1 && l.value < nt) {
        Ne(e.options[l.value]);
        return;
      }
      if (Le === true) {
        const pt = (mt, Ut) => {
          var _a3;
          if (Ut) {
            if (Ff(Ut) !== true) return;
          } else Ut = e.newValueMode;
          if (Ve("", e.multiple !== true, true), mt == null) return;
          (Ut === "toggle" ? Ne : Ie)(mt, Ut === "add-unique"), e.multiple !== true && ((_a3 = q.value) == null ? void 0 : _a3.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", s.value, pt) : pt(s.value), e.multiple !== true) return;
      }
      i.value === true ? De() : Y.innerLoading.value !== true && He();
    }
  }
  function Mt() {
    return g === true ? R.value : B.value !== null && B.value.contentEl !== null ? B.value.contentEl : void 0;
  }
  function Yt() {
    return Mt();
  }
  function co() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? oe.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? oe.value.map((J, Le) => h(ag, { key: "option-" + Le, removable: Y.editable.value === true && Q.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      J.removeAtIndex(Le);
    } }, () => h("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: re.value(J.opt) }))) : [h("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: F.value })];
  }
  function cn() {
    if (te.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: s.value }) : void 0;
    const J = t.option !== void 0 ? t.option : (Be) => h(jr, { key: Be.index, ...Be.itemProps }, () => h(yn, () => h(Pu, () => h("span", { [Be.html === true ? "innerHTML" : "textContent"]: Be.label }))));
    let Le = j("div", W.value.map(J));
    return t["before-options"] !== void 0 && (Le = t["before-options"]().concat(Le)), At(t["after-options"], Le);
  }
  function Un(J, Le) {
    const Be = Le === true ? { ...I.value, ...Y.splitAttrs.attributes.value } : void 0, nt = { ref: Le === true ? q : void 0, key: "i_t", class: O.value, style: e.inputStyle, value: s.value !== void 0 ? s.value : "", type: "search", ...Be, id: Le === true ? Y.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": J === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...we.value };
    return J !== true && g === true && (Array.isArray(nt.class) === true ? nt.class = [...nt.class, "no-pointer-events"] : nt.class += " no-pointer-events"), h("input", nt);
  }
  function de(J) {
    f !== null && (clearTimeout(f), f = null), v !== null && (clearTimeout(v), v = null), !(J && J.target && J.target.qComposing === true) && (Se(J.target.value || ""), y = true, x = s.value, Y.focused.value !== true && (g !== true || d.value === true) && Y.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Oe(s.value);
    }, e.inputDebounce)));
  }
  function Se(J, Le) {
    s.value !== J && (s.value = J, Le === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", J) : v = setTimeout(() => {
      v = null, n("inputValue", J);
    }, e.inputDebounce));
  }
  function Ve(J, Le, Be) {
    y = Be !== true, e.useInput === true && (Se(J, true), (Le === true || Be !== true) && (x = J), Le !== true && Oe(J));
  }
  function Oe(J, Le, Be) {
    if (e.onFilter === void 0 || Le !== true && Y.focused.value !== true) return;
    Y.innerLoading.value === true ? n("filterAbort") : (Y.innerLoading.value = true, c.value = true), J !== "" && e.multiple !== true && L.value.length !== 0 && y !== true && J === re.value(L.value[0]) && (J = "");
    const nt = setTimeout(() => {
      i.value === true && (i.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = nt, n("filter", J, (pt, mt) => {
      (Le === true || Y.focused.value === true) && w === nt && (clearTimeout(w), typeof pt == "function" && pt(), c.value = false, Qe(() => {
        Y.innerLoading.value = false, Y.editable.value === true && (Le === true ? i.value === true && at() : i.value === true ? rs(true) : i.value = true), typeof mt == "function" && Qe(() => {
          mt(o);
        }), typeof Be == "function" && Qe(() => {
          Be(o);
        });
      }));
    }, () => {
      Y.focused.value === true && w === nt && (clearTimeout(w), Y.innerLoading.value = false, c.value = false), i.value === true && (i.value = false);
    });
  }
  function Ye() {
    return h(Wl, { ref: B, class: P.value, style: e.popupContentStyle, modelValue: i.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && te.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: G.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: ve.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Z.value, onScrollPassive: K, onBeforeShow: Gc, onBeforeHide: _t2, onShow: bt }, cn);
  }
  function _t2(J) {
    Xc(J), De();
  }
  function bt() {
    ye();
  }
  function N(J) {
    var _a3;
    St(J), (_a3 = q.value) == null ? void 0 : _a3.focus(), d.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function X(J) {
    St(J), Qe(() => {
      d.value = false;
    });
  }
  function he() {
    const J = [h(I_, { class: `col-auto ${Y.fieldClass.value}`, ...ne.value, for: Y.targetUid.value, dark: G.value, square: true, loading: c.value, itemAligned: false, filled: true, stackLabel: s.value.length !== 0, ...Y.splitAttrs.listeners.value, onFocus: N, onBlur: X }, { ...t, rawControl: () => Y.getControl(true), before: void 0, after: void 0 })];
    return i.value === true && J.push(h("div", { ref: R, class: P.value + " scroll", style: e.popupContentStyle, ...Z.value, onClick: Nt, onScrollPassive: K }, cn())), h(Gl, { ref: V, modelValue: a.value, position: e.useInput === true ? "top" : void 0, transitionShow: _, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Gc, onBeforeHide: qe, onHide: Ee, onShow: Ze }, () => h("div", { class: "q-select__dialog" + (G.value === true ? " q-select__dialog--dark q-dark" : "") + (d.value === true ? " q-select__dialog--focused" : "") }, J));
  }
  function qe(J) {
    Xc(J), V.value !== null && V.value.__updateRefocusTarget(Y.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), Y.focused.value = false;
  }
  function Ee(J) {
    at(), Y.focused.value === false && n("blur", J), mn();
  }
  function Ze() {
    const J = document.activeElement;
    (J === null || J.id !== Y.targetUid.value) && q.value !== null && q.value !== J && q.value.focus(), ye();
  }
  function De() {
    a.value !== true && (l.value = -1, i.value === true && (i.value = false), Y.focused.value === false && (w !== null && (clearTimeout(w), w = null), Y.innerLoading.value === true && (n("filterAbort"), Y.innerLoading.value = false, c.value = false)));
  }
  function He(J) {
    Y.editable.value === true && (g === true ? (Y.onControlFocusin(J), a.value = true, Qe(() => {
      Y.focus();
    })) : Y.focus(), e.onFilter !== void 0 ? Oe(s.value) : (te.value !== true || t["no-option"] !== void 0) && (i.value = true));
  }
  function at() {
    a.value = false, De();
  }
  function mn() {
    e.useInput === true && Ve(e.multiple !== true && e.fillInput === true && L.value.length !== 0 && re.value(L.value[0]) || "", true, true);
  }
  function rs(J) {
    let Le = -1;
    if (J === true) {
      if (L.value.length !== 0) {
        const Be = ce.value(L.value[0]);
        Le = e.options.findIndex((nt) => An(ce.value(nt), Be));
      }
      U(Le);
    }
    se(Le);
  }
  function rb(J, Le) {
    i.value === true && Y.innerLoading.value === false && (U(-1, true), Qe(() => {
      i.value === true && Y.innerLoading.value === false && (J > Le ? U() : rs(true));
    }));
  }
  function Yc() {
    a.value === false && B.value !== null && B.value.updatePosition();
  }
  function Gc(J) {
    J !== void 0 && St(J), n("popupShow", J), Y.hasPopupOpen = true, Y.onControlFocusin(J);
  }
  function Xc(J) {
    J !== void 0 && St(J), n("popupHide", J), Y.hasPopupOpen = false, Y.onControlFocusout(J);
  }
  function Jc() {
    g = r.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || te.value === false : true), _ = r.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return fr(Jc), Vl(Yc), Jc(), We(() => {
    f !== null && clearTimeout(f), v !== null && clearTimeout(v);
  }), Object.assign(o, { showPopup: He, hidePopup: at, removeAtIndex: Te, add: Ie, toggleOption: Ne, getOptionIndex: () => l.value, setOptionIndex: se, moveOptionSelection: pe, filter: Oe, updateMenuPosition: Yc, updateInputValue: Ve, isOptionSelected: _e2, getEmittingOptionValue: Ce, isOptionDisabled: (...J) => Q.value.apply(null, J) === true, getOptionValue: (...J) => ce.value.apply(null, J), getOptionLabel: (...J) => re.value.apply(null, J) }), Object.assign(Y, { innerValue: L, fieldClass: m(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: q, hasValue: be, showPopup: He, floatingLabel: m(() => e.hideSelected !== true && be.value === true || typeof s.value == "number" || s.value.length !== 0 || cr(e.displayValue)), getControlChild: () => {
    if (Y.editable.value !== false && (a.value === true || te.value !== true || t["no-option"] !== void 0)) return g === true ? he() : Ye();
    Y.hasPopupOpen === true && (Y.hasPopupOpen = false);
  }, controlEvents: { onFocusin(J) {
    Y.onControlFocusin(J);
  }, onFocusout(J) {
    Y.onControlFocusout(J, () => {
      mn(), De();
    });
  }, onClick(J) {
    var _a3;
    if (Nt(J), g !== true && i.value === true) {
      De(), (_a3 = q.value) == null ? void 0 : _a3.focus();
      return;
    }
    He(J);
  } }, getControl: (J) => {
    const Le = co(), Be = J === true || a.value !== true || g !== true;
    if (e.useInput === true) Le.push(Un(J, Be));
    else if (Y.editable.value === true) {
      const pt = Be === true ? I.value : void 0;
      Le.push(h("input", { ref: Be === true ? q : void 0, key: "d_t", class: "q-select__focus-target", id: Be === true ? Y.targetUid.value : void 0, value: F.value, readonly: true, "data-autofocus": J === true || e.autofocus === true || void 0, ...pt, onKeydown: ct, onKeyup: Fe, onKeypress: Xe })), Be === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Le.push(h("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Ae }));
    }
    if (D.value !== void 0 && e.disable !== true && le.value.length !== 0) {
      const pt = le.value.map((mt) => h("option", { value: mt, selected: true }));
      Le.push(h("select", { class: "hidden", name: D.value, multiple: e.multiple }, pt));
    }
    const nt = e.useInput === true || Be !== true ? void 0 : Y.splitAttrs.attributes.value;
    return h("div", { class: "q-field__native row items-center", ...nt, ...Y.splitAttrs.listeners.value }, Le);
  }, getInnerAppend: () => e.loading !== true && c.value !== true && e.hideDropdownIcon !== true ? [h(tt, { class: "q-select__dropdown-icon" + (i.value === true ? " rotate-180" : ""), name: fe.value })] : null }), es(Y);
} }), yw = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], _w = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
ge({ name: "QSkeleton", props: { ...ot, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => yw.includes(e), default: "rect" }, animation: { type: String, validator: (e) => _w.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), r = m(() => {
    const a = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: a[0], height: a[1] };
  }), i = m(() => `q-skeleton q-skeleton--${o.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => h(e.tag, { class: i.value, style: r.value }, Pe(t.default));
} });
var $f = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
ge({ name: "QSlideItem", props: { ...ot, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = rt(e, r), { getCache: a } = ha(), l = H(null);
  let s = null, d = {}, c = {}, f = {};
  const v = m(() => r.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), u = m(() => "q-slide-item q-item-type overflow-hidden" + (i.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    l.value.style.transform = "translate(0,0)";
  }
  function y(x, _, p) {
    e.onSlide !== void 0 && n("slide", { side: x, ratio: _, isReset: p });
  }
  function w(x) {
    const _ = l.value;
    if (x.isFirst) d = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, _.classList.add("no-transition"), $f.forEach((q) => {
      if (t[q[0]] !== void 0) {
        const B = f[q[0]];
        B.style.transform = "scale(1)", d.size[q[0]] = B.getBoundingClientRect()[q[3]];
      }
    }), d.axis = x.direction === "up" || x.direction === "down" ? "Y" : "X";
    else if (x.isFinal) {
      _.classList.remove("no-transition"), d.scale === 1 ? (_.style.transform = `translate${d.axis}(${d.dir * 100}%)`, s !== null && clearTimeout(s), s = setTimeout(() => {
        s = null, n(d.showing, { reset: g }), n("action", { side: d.showing, reset: g });
      }, 230)) : (_.style.transform = "translate(0,0)", y(d.showing, 0, true));
      return;
    } else x.direction = d.axis === "X" ? x.offset.x < 0 ? "left" : "right" : x.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && x.direction === v.value.right || t.right === void 0 && x.direction === v.value.left || t.top === void 0 && x.direction === "down" || t.bottom === void 0 && x.direction === "up") {
      _.style.transform = "translate(0,0)";
      return;
    }
    let p, b, C;
    d.axis === "X" ? (b = x.direction === "left" ? -1 : 1, p = b === 1 ? v.value.left : v.value.right, C = x.distance.x) : (b = x.direction === "up" ? -2 : 2, p = b === 2 ? "top" : "bottom", C = x.distance.y), !(d.dir !== null && Math.abs(b) !== Math.abs(d.dir)) && (d.dir !== b && (["left", "right", "top", "bottom"].forEach((q) => {
      c[q] && (c[q].style.visibility = p === q ? "visible" : "hidden");
    }), d.showing = p, d.dir = b), d.scale = Math.max(0, Math.min(1, (C - 40) / d.size[p])), _.style.transform = `translate${d.axis}(${C * b / Math.abs(b)}px)`, f[p].style.transform = `scale(${d.scale})`, y(p, d.scale, false));
  }
  return fr(() => {
    c = {}, f = {};
  }), We(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(o, { reset: g }), () => {
    const x = [], _ = { left: t[v.value.right] !== void 0, right: t[v.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, p = Object.keys(_).filter((C) => _[C] === true);
    $f.forEach((C) => {
      const q = C[0];
      t[q] !== void 0 && x.push(h("div", { key: q, ref: (B) => {
        c[q] = B;
      }, class: `q-slide-item__${q} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[q + "Color"] !== void 0 ? ` bg-${e[q + "Color"]}` : "") }, [h("div", { ref: (B) => {
        f[q] = B;
      } }, t[q]())]));
    });
    const b = h("div", { key: `${p.length === 0 ? "only-" : ""} content`, ref: l, class: "q-slide-item__content" }, Pe(t.default));
    return p.length === 0 ? x.push(b) : x.push(hn(b, a("dir#" + p.join(""), () => {
      const C = { prevent: true, stop: true, mouse: true };
      return p.forEach((q) => {
        C[q] = true;
      }), [[wn, w, void 0, C]];
    }))), h("div", { class: u.value }, x);
  };
} });
ge({ name: "QSpace", setup() {
  const e = h("div", { class: "q-space" });
  return () => e;
} });
var ww = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
ge({ name: "QSpinnerAudio", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: ww });
} });
var xw = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerBall", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: xw });
} });
var Cw = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
ge({ name: "QSpinnerBars", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: Cw });
} });
var Sw = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
ge({ name: "QSpinnerBox", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Sw });
} });
var Tw = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
ge({ name: "QSpinnerClock", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Tw });
} });
var kw = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerComment", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: kw });
} });
var Mw = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
ge({ name: "QSpinnerCube", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Mw });
} });
var qw = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerDots", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: qw });
} });
var Ew = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
ge({ name: "QSpinnerFacebook", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: Ew });
} });
var Aw = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ge({ name: "QSpinnerGears", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Aw });
} });
var Lw = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerGrid", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: Lw });
} });
var Bw = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
ge({ name: "QSpinnerHearts", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: Bw });
} });
var Rw = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
ge({ name: "QSpinnerHourglass", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Rw });
} });
var Pw = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
ge({ name: "QSpinnerInfinity", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Pw });
} });
var Dw = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
ge({ name: "QSpinnerIos", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: Dw });
} });
var Ow = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
ge({ name: "QSpinnerOrbit", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Ow });
} });
var Vw = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ge({ name: "QSpinnerOval", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: Vw });
} });
var Fw = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
ge({ name: "QSpinnerPie", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Fw });
} });
var $w = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerPuff", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: $w });
} });
var Iw = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
ge({ name: "QSpinnerRadio", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Iw });
} });
var Nw = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerRings", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: Nw });
} });
var zw = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
ge({ name: "QSpinnerTail", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: zw });
} });
ge({ name: "QSplitter", props: { ...ot, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = rt(e, o), i = H(null), a = { before: H(null), after: H(null) }, l = m(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (r.value === true ? " q-splitter--dark" : "")), s = m(() => e.horizontal === true ? "height" : "width"), d = m(() => e.reverse !== true ? "before" : "after"), c = m(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  const v = m(() => ({ [d.value]: { [s.value]: f(e.modelValue) } }));
  let u, g, y, w, x;
  function _(C) {
    if (C.isFirst === true) {
      const B = i.value.getBoundingClientRect()[s.value];
      u = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : B, y = Math.min(g, c.value[1], Math.max(c.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : o.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? B === 0 ? 0 : 100 / B : 1), i.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      x !== e.modelValue && n("update:modelValue", x), i.value.classList.remove("q-splitter--active");
      return;
    }
    const q = y + w * (C.direction === u ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    x = Math.min(g, c.value[1], Math.max(c.value[0], q)), a[d.value].value.style[s.value] = f(x), e.emitImmediately === true && e.modelValue !== x && n("update:modelValue", x);
  }
  const p = m(() => [[wn, _, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(C, q) {
    C < q[0] ? n("update:modelValue", q[0]) : C > q[1] && n("update:modelValue", q[1]);
  }
  return me(() => e.modelValue, (C) => {
    b(C, c.value);
  }), me(() => e.limits, () => {
    Qe(() => {
      b(e.modelValue, c.value);
    });
  }), () => {
    const C = [h("div", { ref: a.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: v.value.before }, Pe(t.before)), h("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [Sn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => p.value)]), h("div", { ref: a.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: v.value.after }, Pe(t.after))];
    return h("div", { class: l.value, ref: i }, At(t.default, C));
  };
} });
var n0 = ge({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), o = H(null), r = m(() => e.stepper.modelValue === e.step.name), i = m(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), a = m(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), l = m(() => {
    const w = e.step.done;
    return i.value === false && (w === true || w === "");
  }), s = m(() => {
    const w = e.step.headerNav, x = w === true || w === "" || w === void 0;
    return i.value === false && e.stepper.headerNav && x;
  }), d = m(() => e.step.prefix && (r.value === false || e.stepper.activeIcon === "none") && (a.value === false || e.stepper.errorIcon === "none") && (l.value === false || e.stepper.doneIcon === "none")), c = m(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (r.value === true) {
      const x = e.step.activeIcon || e.stepper.activeIcon;
      return x === "none" ? w : x || n.iconSet.stepper.active;
    }
    if (a.value === true) {
      const x = e.step.errorIcon || e.stepper.errorIcon;
      return x === "none" ? w : x || n.iconSet.stepper.error;
    }
    if (i.value === false && l.value === true) {
      const x = e.step.doneIcon || e.stepper.doneIcon;
      return x === "none" ? w : x || n.iconSet.stepper.done;
    }
    return w;
  }), f = m(() => {
    const w = a.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (r.value === true) {
      const x = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return x !== void 0 ? x : w;
    }
    return w !== void 0 ? w : i.value === false && l.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), v = m(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (a.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (d.value === true ? "prefix" : "icon") : "") + (r.value === true ? " q-stepper__tab--active" : "") + (l.value === true ? " q-stepper__tab--done" : "") + (s.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (i.value === true ? " q-stepper__tab--disabled" : "")), u = m(() => e.stepper.headerNav !== true ? false : s.value);
  function g() {
    var _a3;
    (_a3 = o.value) == null ? void 0 : _a3.focus(), r.value === false && e.goToPanel(e.step.name);
  }
  function y(w) {
    w.keyCode === 13 && r.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: v.value };
    s.value === true && (w.onClick = g, w.onKeyup = y, Object.assign(w, i.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const x = [h("div", { class: "q-focus-helper", tabindex: -1, ref: o }), h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [h("span", { class: "row flex-center" }, [d.value === true ? e.step.prefix : h(tt, { name: c.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const _ = [h("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && _.push(h("div", { class: "q-stepper__caption" }, e.step.caption)), x.push(h("div", { class: "q-stepper__label q-stepper__line relative-position" }, _));
    }
    return hn(h("div", w, x), [[Ul, u.value]]);
  };
} });
function o0(e) {
  return h("div", { class: "q-stepper__step-content" }, [h("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var If = { setup(e, { slots: t }) {
  return () => o0(t);
} };
ge({ name: "QStep", props: { ...Tc, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: o } } = xe(), r = Lt(xm, ut);
  if (r === ut) return console.error("QStep needs to be a child of QStepper"), ut;
  const { getCache: i } = ha(), a = H(null), l = m(() => r.value.modelValue === e.name), s = m(() => o.platform.is.ios !== true && o.platform.is.chrome === true || l.value !== true || r.value.vertical !== true ? {} : { onScroll(f) {
    const { target: v } = f;
    v.scrollTop > 0 && (v.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), d = m(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function c() {
    const f = r.value.vertical;
    return f === true && r.value.keepAlive === true ? h(Lh, r.value.keepAliveProps.value, l.value === true ? [h(r.value.needsUniqueKeepAliveWrapper.value === true ? i(d.value, () => ({ ...If, name: d.value })) : If, { key: d.value }, t.default)] : void 0) : f !== true || l.value === true ? o0(t) : void 0;
  }
  return () => h("div", { ref: a, class: "q-stepper__step", role: "tabpanel", ...s.value }, r.value.vertical === true ? [h(n0, { stepper: r.value, step: e, goToPanel: r.value.goToPanel }), r.value.animated === true ? h(Oc, c) : c()] : [c()]);
} });
var Hw = /(-\w)/g;
function jw(e) {
  const t = {};
  for (const n in e) {
    const o = n.replace(Hw, (r) => r[1].toUpperCase());
    t[o] = e[n];
  }
  return t;
}
ge({ name: "QStepper", props: { ...ot, ...kc, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Mc, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q), { updatePanelsList: r, isValidPanelName: i, updatePanelIndex: a, getPanelContent: l, getPanels: s, panelDirectives: d, goToPanel: c, keepAliveProps: f, needsUniqueKeepAliveWrapper: v } = qc();
  _n(xm, m(() => ({ goToPanel: c, keepAliveProps: f, needsUniqueKeepAliveWrapper: v, ...e })));
  const u = m(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (o.value === true ? " q-stepper--dark q-dark" : "")), g = m(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function y() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      i(e.modelValue) && a();
      const x = h("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [x] : w.concat(x);
    }
    return [h("div", { class: g.value }, s().map((x) => {
      const _ = jw(x.props);
      return h(n0, { key: _.name, stepper: e, step: _, goToPanel: c });
    })), w, Sn("div", { class: "q-stepper__content q-panel-parent" }, l(), "cont", e.swipeable, () => d.value)];
  }
  return () => (r(t), h("div", { class: u.value }, At(t.navigation, y())));
} });
ge({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => h("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var Uw = ge({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const o = xe(), { proxy: { $q: r } } = o, i = (a) => {
    n("click", a);
  };
  return () => {
    if (e.props === void 0) return h("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: i }, Pe(t.default));
    let a, l;
    const s = o.vnode.key;
    if (s) {
      if (a = e.props.colsMap[s], a === void 0) return;
    } else a = e.props.col;
    if (a.sortable === true) {
      const c = a.align === "right" ? "unshift" : "push";
      l = ca(t.default, []), l[c](h(tt, { class: a.__iconClass, name: r.iconSet.table.arrowUp }));
    } else l = Pe(t.default);
    const d = { class: a.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: a.headerStyle, onClick: (c) => {
      a.sortable === true && e.props.sort(a), i(c);
    } };
    return h("th", d, l);
  };
} });
function r0(e, t) {
  return h("div", e, [h("table", { class: "q-table" }, t)]);
}
var Qw = { list: Wg, table: ow }, Kw = ["list", "table", "__qtable"], Ww = ge({ name: "QVirtualScroll", props: { ...Vu, type: { type: String, default: "list", validator: (e) => Kw.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: mr }, setup(e, { slots: t, attrs: n }) {
  let o;
  const r = H(null), i = m(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: a, localResetVirtualScroll: l, padVirtualScroll: s, onVirtualScrollEvt: d } = t0({ virtualScrollLength: i, getVirtualScrollTarget: g, getVirtualScrollEl: u }), c = m(() => {
    if (i.value === 0) return [];
    const _ = (p, b) => ({ index: a.value.from + b, item: p });
    return e.itemsFn === void 0 ? e.items.slice(a.value.from, a.value.to).map(_) : e.itemsFn(a.value.from, a.value.to - a.value.from).map(_);
  }), f = m(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), v = m(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  me(i, () => {
    l();
  }), me(() => e.scrollTarget, () => {
    w(), y();
  });
  function u() {
    return r.value.$el || r.value;
  }
  function g() {
    return o;
  }
  function y() {
    o = jn(u(), e.scrollTarget), o.addEventListener("scroll", d, ht.passive);
  }
  function w() {
    o !== void 0 && (o.removeEventListener("scroll", d, ht.passive), o = void 0);
  }
  function x() {
    let _ = s(e.type === "list" ? "div" : "tbody", c.value.map(t.default));
    return t.before !== void 0 && (_ = t.before().concat(_)), At(t.after, _);
  }
  return Ol(() => {
    l();
  }), st(() => {
    y();
  }), Oo(() => {
    y();
  }), Hn(() => {
    w();
  }), We(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? r0({ ref: r, class: "q-table__middle " + f.value }, x()) : h(Qw[e.type], { ...n, ref: r, class: [n.class, f.value], ...v.value }, x);
  };
} });
function Yw(e, t) {
  return new Date(e) - new Date(t);
}
var Gw = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function Xw(e, t, n, o) {
  const r = m(() => {
    const { sortBy: l } = t.value;
    return l && n.value.find((s) => s.name === l) || null;
  }), i = m(() => e.sortMethod !== void 0 ? e.sortMethod : (l, s, d) => {
    const c = n.value.find((u) => u.name === s);
    if (c === void 0 || c.field === void 0) return l;
    const f = d === true ? -1 : 1, v = typeof c.field == "function" ? (u) => c.field(u) : (u) => u[c.field];
    return l.sort((u, g) => {
      let y = v(u), w = v(g);
      return c.rawSort !== void 0 ? c.rawSort(y, w, u, g) * f : y == null ? -1 * f : w == null ? 1 * f : c.sort !== void 0 ? c.sort(y, w, u, g) * f : Ji(y) === true && Ji(w) === true ? (y - w) * f : xu(y) === true && xu(w) === true ? Yw(y, w) * f : typeof y == "boolean" && typeof w == "boolean" ? (y - w) * f : ([y, w] = [y, w].map((x) => (x + "").toLocaleString().toLowerCase()), y < w ? -1 * f : y === w ? 0 : f);
    });
  });
  function a(l) {
    let s = e.columnSortOrder;
    if (Ot(l) === true) l.sortOrder && (s = l.sortOrder), l = l.name;
    else {
      const f = n.value.find((v) => v.name === l);
      (f == null ? void 0 : f.sortOrder) && (s = f.sortOrder);
    }
    let { sortBy: d, descending: c } = t.value;
    d !== l ? (d = l, c = s === "da") : e.binaryStateSort === true ? c = !c : c === true ? s === "ad" ? d = null : c = false : s === "ad" ? c = true : d = null, o({ sortBy: d, descending: c, page: 1 });
  }
  return { columnToSort: r, computedSortMethod: i, sort: a };
}
var Jw = { filter: [String, Object], filterMethod: Function };
function Zw(e, t) {
  const n = m(() => e.filterMethod !== void 0 ? e.filterMethod : (o, r, i, a) => {
    const l = r ? r.toLowerCase() : "";
    return o.filter((s) => i.some((d) => {
      const c = a(d, s) + "";
      return (c === "undefined" || c === "null" ? "" : c.toLowerCase()).indexOf(l) !== -1;
    }));
  });
  return me(() => e.filter, () => {
    Qe(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function ex(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Nf(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var tx = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function nx(e, t) {
  const { props: n, emit: o } = e, r = H(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), i = m(() => {
    const c = n["onUpdate:pagination"] !== void 0 ? { ...r.value, ...n.pagination } : r.value;
    return Nf(c);
  }), a = m(() => i.value.rowsNumber !== void 0);
  function l(c) {
    s({ pagination: c, filter: n.filter });
  }
  function s(c = {}) {
    Qe(() => {
      o("request", { pagination: c.pagination || i.value, filter: c.filter || n.filter, getCellValue: t });
    });
  }
  function d(c, f) {
    const v = Nf({ ...i.value, ...c });
    if (ex(i.value, v) === true) {
      a.value === true && f === true && l(v);
      return;
    }
    if (a.value === true) {
      l(v);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? o("update:pagination", v) : r.value = v;
  }
  return { innerPagination: r, computedPagination: i, isServerSide: a, requestServerInteraction: s, setPagination: d };
}
function ox(e, t, n, o, r, i) {
  const { props: a, emit: l, proxy: { $q: s } } = e, d = m(() => o.value === true ? n.value.rowsNumber || 0 : i.value), c = m(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return (b - 1) * C;
  }), f = m(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return b * C;
  }), v = m(() => n.value.page === 1), u = m(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(d.value / n.value.rowsPerPage))), g = m(() => f.value === 0 ? true : n.value.page >= u.value), y = m(() => (a.rowsPerPageOptions.includes(t.value.rowsPerPage) ? a.rowsPerPageOptions : [t.value.rowsPerPage].concat(a.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? s.lang.table.allRows : "" + C, value: C })));
  me(u, (b, C) => {
    if (b === C) return;
    const q = n.value.page;
    b && !q ? r({ page: 1 }) : b < q && r({ page: b });
  });
  function w() {
    r({ page: 1 });
  }
  function x() {
    const { page: b } = n.value;
    b > 1 && r({ page: b - 1 });
  }
  function _() {
    const { page: b, rowsPerPage: C } = n.value;
    f.value > 0 && b * C < d.value && r({ page: b + 1 });
  }
  function p() {
    r({ page: u.value });
  }
  return a["onUpdate:pagination"] !== void 0 && l("update:pagination", { ...n.value }), { firstRowIndex: c, lastRowIndex: f, isFirstPage: v, isLastPage: g, pagesNumber: u, computedRowsPerPageOptions: y, computedRowsNumber: d, firstPage: w, prevPage: x, nextPage: _, lastPage: p };
}
var rx = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, ix = ["update:selected", "selection"];
function ax(e, t, n, o) {
  const r = m(() => {
    const g = {};
    return e.selected.map(o.value).forEach((y) => {
      g[y] = true;
    }), g;
  }), i = m(() => e.selection !== "none"), a = m(() => e.selection === "single"), l = m(() => e.selection === "multiple"), s = m(() => n.value.length !== 0 && n.value.every((g) => r.value[o.value(g)] === true)), d = m(() => s.value !== true && n.value.some((g) => r.value[o.value(g)] === true)), c = m(() => e.selected.length);
  function f(g) {
    return r.value[g] === true;
  }
  function v() {
    t("update:selected", []);
  }
  function u(g, y, w, x) {
    t("selection", { rows: y, added: w, keys: g, evt: x });
    const _ = a.value === true ? w === true ? y : [] : w === true ? e.selected.concat(y) : e.selected.filter((p) => g.includes(o.value(p)) === false);
    t("update:selected", _);
  }
  return { hasSelectionMode: i, singleSelection: a, multipleSelection: l, allRowsSelected: s, someRowsSelected: d, rowsSelectedNumber: c, isRowSelected: f, clearSelection: v, updateSelection: u };
}
function zf(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var lx = { expanded: Array }, sx = ["update:expanded"];
function ux(e, t) {
  const n = H(zf(e.expanded));
  me(() => e.expanded, (a) => {
    n.value = zf(a);
  });
  function o(a) {
    return n.value.includes(a);
  }
  function r(a) {
    e.expanded !== void 0 ? t("update:expanded", a) : n.value = a;
  }
  function i(a, l) {
    const s = n.value.slice(), d = s.indexOf(a);
    l === true ? d === -1 && (s.push(a), r(s)) : d !== -1 && (s.splice(d, 1), r(s));
  }
  return { isRowExpanded: o, setExpanded: r, updateExpanded: i };
}
var cx = { visibleColumns: Array };
function dx(e, t, n) {
  const o = m(() => {
    if (e.columns !== void 0) return e.columns;
    const l = e.rows[0];
    return l !== void 0 ? Object.keys(l).map((s) => ({ name: s, label: s.toUpperCase(), field: s, align: Ji(l[s]) ? "right" : "left", sortable: true })) : [];
  }), r = m(() => {
    const { sortBy: l, descending: s } = t.value;
    return (e.visibleColumns !== void 0 ? o.value.filter((c) => c.required === true || e.visibleColumns.includes(c.name) === true) : o.value).map((c) => {
      const f = c.align || "right", v = `text-${f}`;
      return { ...c, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: v + (c.headerClasses !== void 0 ? " " + c.headerClasses : "") + (c.sortable === true ? " sortable" : "") + (c.name === l ? ` sorted ${s === true ? "sort-desc" : ""}` : ""), __tdStyle: c.style !== void 0 ? typeof c.style != "function" ? () => c.style : c.style : () => null, __tdClass: c.classes !== void 0 ? typeof c.classes != "function" ? () => v + " " + c.classes : (u) => v + " " + c.classes(u) : () => v };
    });
  }), i = m(() => {
    const l = {};
    return r.value.forEach((s) => {
      l[s.name] = s;
    }), l;
  }), a = m(() => e.tableColspan !== void 0 ? e.tableColspan : r.value.length + (n.value === true ? 1 : 0));
  return { colList: o, computedCols: r, computedColsMap: i, computedColspan: a };
}
var Ra = "q-table__bottom row items-center", i0 = {};
e0.forEach((e) => {
  i0[e] = {};
});
ge({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...i0, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...ot, ...Ec, ...cx, ...Jw, ...tx, ...lx, ...rx, ...Gw }, emits: ["request", "virtualScroll", ...Ac, ...sx, ...ix], setup(e, { slots: t, emit: n }) {
  const o = xe(), { proxy: { $q: r } } = o, i = rt(e, r), { inFullscreen: a, toggleFullscreen: l } = Lc(), s = m(() => typeof e.rowKey == "function" ? e.rowKey : (de) => de[e.rowKey]), d = H(null), c = H(null), f = m(() => e.grid !== true && e.virtualScroll === true), v = m(() => " q-table__card" + (i.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), u = m(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : v.value) + (i.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (a.value === true ? " fullscreen scroll" : "")), g = m(() => u.value + (e.loading === true ? " q-table--loading" : ""));
  me(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + u.value, () => {
    var _a3;
    f.value === true && ((_a3 = c.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: y, computedPagination: w, isServerSide: x, requestServerInteraction: _, setPagination: p } = nx(o, se), { computedFilterMethod: b } = Zw(e, p), { isRowExpanded: C, setExpanded: q, updateExpanded: B } = ux(e, n), V = m(() => {
    let de = e.rows;
    if (x.value === true || de.length === 0) return de;
    const { sortBy: Se, descending: Ve } = w.value;
    return e.filter && (de = b.value(de, e.filter, Y.value, se)), G.value !== null && (de = be.value(e.rows === de ? de.slice() : de, Se, Ve)), de;
  }), R = m(() => V.value.length), D = m(() => {
    let de = V.value;
    if (x.value === true) return de;
    const { rowsPerPage: Se } = w.value;
    return Se !== 0 && (P.value === 0 && e.rows !== de ? de.length > te.value && (de = de.slice(0, te.value)) : de = de.slice(P.value, te.value)), de;
  }), { hasSelectionMode: $, singleSelection: M, multipleSelection: A, allRowsSelected: T, someRowsSelected: z, rowsSelectedNumber: U, isRowSelected: j, clearSelection: K, updateSelection: ie } = ax(e, n, D, s), { colList: ye, computedCols: Y, computedColsMap: L, computedColspan: ne } = dx(e, w, $), { columnToSort: G, computedSortMethod: be, sort: O } = Xw(e, w, ye, p), { firstRowIndex: P, lastRowIndex: te, isFirstPage: k, isLastPage: F, pagesNumber: ee, computedRowsPerPageOptions: S, computedRowsNumber: E, firstPage: I, prevPage: Z, nextPage: oe, lastPage: W } = ox(o, y, w, x, p, R), fe = m(() => D.value.length === 0), ve = m(() => {
    const de = {};
    return e0.forEach((Se) => {
      de[Se] = e[Se];
    }), de.virtualScrollItemSize === void 0 && (de.virtualScrollItemSize = e.dense === true ? 28 : 48), de;
  });
  function ue() {
    f.value === true && c.value.reset();
  }
  function ce() {
    if (e.grid === true) return Un();
    const de = e.hideHeader !== true ? ke : null;
    if (f.value === true) {
      const Ve = t["top-row"], Oe = t["bottom-row"], Ye = { default: (_t2) => we(_t2.item, t.body, _t2.index) };
      if (Ve !== void 0) {
        const _t2 = h("tbody", Ve({ cols: Y.value }));
        Ye.before = de === null ? () => _t2 : () => [de()].concat(_t2);
      } else de !== null && (Ye.before = de);
      return Oe !== void 0 && (Ye.after = () => h("tbody", Oe({ cols: Y.value }))), h(Ww, { ref: c, class: e.tableClass, style: e.tableStyle, ...ve.value, scrollTarget: e.virtualScrollTarget, items: D.value, type: "__qtable", tableColspan: ne.value, onVirtualScroll: Q }, Ye);
    }
    const Se = [Ce()];
    return de !== null && Se.unshift(de()), r0({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function re(de, Se) {
    if (c.value !== null) {
      c.value.scrollTo(de, Se);
      return;
    }
    de = parseInt(de, 10);
    const Ve = d.value.querySelector(`tbody tr:nth-of-type(${de + 1})`);
    if (Ve !== null) {
      const Oe = d.value.querySelector(".q-table__middle.scroll"), Ye = Ve.offsetTop - e.virtualScrollStickySizeStart, _t2 = Ye < Oe.scrollTop ? "decrease" : "increase";
      Oe.scrollTop = Ye, n("virtualScroll", { index: de, from: 0, to: y.value.rowsPerPage - 1, direction: _t2 });
    }
  }
  function Q(de) {
    n("virtualScroll", de);
  }
  function le() {
    return [h(dw, { class: "q-table__linear-progress", color: e.color, dark: i.value, indeterminate: true, trackColor: "transparent" })];
  }
  function we(de, Se, Ve) {
    const Oe = s.value(de), Ye = j(Oe);
    if (Se !== void 0) {
      const X = { key: Oe, row: de, pageIndex: Ve, __trClass: Ye ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (X.__trStyle = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
        const he = e.tableRowClassFn(de);
        he && (X.__trClass = `${he} ${X.__trClass}`);
      }
      return Se(Te(X));
    }
    const _t2 = t["body-cell"], bt = Y.value.map((X) => {
      const he = t[`body-cell-${X.name}`], qe = he !== void 0 ? he : _t2;
      return qe !== void 0 ? qe(Me({ key: Oe, row: de, pageIndex: Ve, col: X })) : h("td", { class: X.__tdClass(de), style: X.__tdStyle(de) }, se(X, de));
    });
    if ($.value === true) {
      const X = t["body-selection"], he = X !== void 0 ? X(Ie({ key: Oe, row: de, pageIndex: Ve })) : [h($i, { modelValue: Ye, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (qe, Ee) => {
        ie([Oe], [de], qe, Ee);
      } })];
      bt.unshift(h("td", { class: "q-table--col-auto-width" }, he));
    }
    const N = { key: Oe, class: { selected: Ye } };
    if (e.onRowClick !== void 0 && (N.class["cursor-pointer"] = true, N.onClick = (X) => {
      n("rowClick", X, de, Ve);
    }), e.onRowDblclick !== void 0 && (N.class["cursor-pointer"] = true, N.onDblclick = (X) => {
      n("rowDblclick", X, de, Ve);
    }), e.onRowContextmenu !== void 0 && (N.class["cursor-pointer"] = true, N.onContextmenu = (X) => {
      n("rowContextmenu", X, de, Ve);
    }), e.tableRowStyleFn !== void 0 && (N.style = e.tableRowStyleFn(de)), e.tableRowClassFn !== void 0) {
      const X = e.tableRowClassFn(de);
      X && (N.class[X] = true);
    }
    return h("tr", N, bt);
  }
  function Ce() {
    const de = t.body, Se = t["top-row"], Ve = t["bottom-row"];
    let Oe = D.value.map((Ye, _t2) => we(Ye, de, _t2));
    return Se !== void 0 && (Oe = Se({ cols: Y.value }).concat(Oe)), Ve !== void 0 && (Oe = Oe.concat(Ve({ cols: Y.value }))), h("tbody", Oe);
  }
  function Te(de) {
    return Ne(de), de.cols = de.cols.map((Se) => It({ ...Se }, "value", () => se(Se, de.row))), de;
  }
  function Me(de) {
    return Ne(de), It(de, "value", () => se(de.col, de.row)), de;
  }
  function Ie(de) {
    return Ne(de), de;
  }
  function Ne(de) {
    Object.assign(de, { cols: Y.value, colsMap: L.value, sort: O, rowIndex: P.value + de.pageIndex, color: e.color, dark: i.value, dense: e.dense }), $.value === true && It(de, "selected", () => j(de.key), (Se, Ve) => {
      ie([de.key], [de.row], Se, Ve);
    }), It(de, "expand", () => C(de.key), (Se) => {
      B(de.key, Se);
    });
  }
  function se(de, Se) {
    const Ve = typeof de.field == "function" ? de.field(Se) : Se[de.field];
    return de.format !== void 0 ? de.format(Ve, Se) : Ve;
  }
  const pe = m(() => ({ pagination: w.value, pagesNumber: ee.value, isFirstPage: k.value, isLastPage: F.value, firstPage: I, prevPage: Z, nextPage: oe, lastPage: W, inFullscreen: a.value, toggleFullscreen: l }));
  function ae() {
    const de = t.top, Se = t["top-left"], Ve = t["top-right"], Oe = t["top-selection"], Ye = $.value === true && Oe !== void 0 && U.value > 0, _t2 = "q-table__top relative-position row items-center";
    if (de !== void 0) return h("div", { class: _t2 }, [de(pe.value)]);
    let bt;
    if (Ye === true ? bt = Oe(pe.value).slice() : (bt = [], Se !== void 0 ? bt.push(h("div", { class: "q-table__control" }, [Se(pe.value)])) : e.title && bt.push(h("div", { class: "q-table__control" }, [h("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Ve !== void 0 && (bt.push(h("div", { class: "q-table__separator col" })), bt.push(h("div", { class: "q-table__control" }, [Ve(pe.value)]))), bt.length !== 0) return h("div", { class: _t2 }, bt);
  }
  const _e2 = m(() => z.value === true ? null : T.value);
  function ke() {
    const de = Fe();
    return e.loading === true && t.loading === void 0 && de.push(h("tr", { class: "q-table__progress" }, [h("th", { class: "relative-position", colspan: ne.value }, le())])), h("thead", de);
  }
  function Fe() {
    const de = t.header, Se = t["header-cell"];
    if (de !== void 0) return de(Ae({ header: true })).slice();
    const Ve = Y.value.map((Oe) => {
      const Ye = t[`header-cell-${Oe.name}`], _t2 = Ye !== void 0 ? Ye : Se, bt = Ae({ col: Oe });
      return _t2 !== void 0 ? _t2(bt) : h(Uw, { key: Oe.name, props: bt }, () => Oe.label);
    });
    if (M.value === true && e.grid !== true) Ve.unshift(h("th", { class: "q-table--col-auto-width" }, " "));
    else if (A.value === true) {
      const Oe = t["header-selection"], Ye = Oe !== void 0 ? Oe(Ae({})) : [h($i, { color: e.color, modelValue: _e2.value, dark: i.value, dense: e.dense, "onUpdate:modelValue": Xe })];
      Ve.unshift(h("th", { class: "q-table--col-auto-width" }, Ye));
    }
    return [h("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Ve)];
  }
  function Ae(de) {
    return Object.assign(de, { cols: Y.value, sort: O, colsMap: L.value, color: e.color, dark: i.value, dense: e.dense }), A.value === true && It(de, "selected", () => _e2.value, Xe), de;
  }
  function Xe(de) {
    z.value === true && (de = false), ie(D.value.map(s.value), D.value, de);
  }
  const ct = m(() => {
    const de = [e.iconFirstPage || r.iconSet.table.firstPage, e.iconPrevPage || r.iconSet.table.prevPage, e.iconNextPage || r.iconSet.table.nextPage, e.iconLastPage || r.iconSet.table.lastPage];
    return r.lang.rtl === true ? de.reverse() : de;
  });
  function Mt() {
    if (e.hideBottom === true) return;
    if (fe.value === true) {
      if (e.hideNoData === true) return;
      const Ve = e.loading === true ? e.loadingLabel || r.lang.table.loading : e.filter ? e.noResultsLabel || r.lang.table.noResults : e.noDataLabel || r.lang.table.noData, Oe = t["no-data"], Ye = Oe !== void 0 ? [Oe({ message: Ve, icon: r.iconSet.table.warning, filter: e.filter })] : [h(tt, { class: "q-table__bottom-nodata-icon", name: r.iconSet.table.warning }), Ve];
      return h("div", { class: Ra + " q-table__bottom--nodata" }, Ye);
    }
    const de = t.bottom;
    if (de !== void 0) return h("div", { class: Ra }, [de(pe.value)]);
    const Se = e.hideSelectedBanner !== true && $.value === true && U.value > 0 ? [h("div", { class: "q-table__control" }, [h("div", [(e.selectedRowsLabel || r.lang.table.selectedRecords)(U.value)])])] : [];
    if (e.hidePagination !== true) return h("div", { class: Ra + " justify-end" }, co(Se));
    if (Se.length !== 0) return h("div", { class: Ra }, Se);
  }
  function Yt(de) {
    p({ page: 1, rowsPerPage: de.value });
  }
  function co(de) {
    let Se;
    const { rowsPerPage: Ve } = w.value, Oe = e.paginationLabel || r.lang.table.pagination, Ye = t.pagination, _t2 = e.rowsPerPageOptions.length > 1;
    if (de.push(h("div", { class: "q-table__separator col" })), _t2 === true && de.push(h("div", { class: "q-table__control" }, [h("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || r.lang.table.recordsPerPage]), h(pw, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Ve, options: S.value, displayValue: Ve === 0 ? r.lang.table.allRows : Ve, dark: i.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Yt })])), Ye !== void 0) Se = Ye(pe.value);
    else if (Se = [h("span", Ve !== 0 ? { class: "q-table__bottom-item" } : {}, [Ve ? Oe(P.value + 1, Math.min(te.value, E.value), E.value) : Oe(1, R.value, E.value)])], Ve !== 0 && ee.value > 1) {
      const bt = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (bt.size = "sm"), ee.value > 2 && Se.push(h(et, { key: "pgFirst", ...bt, icon: ct.value[0], disable: k.value, ariaLabel: r.lang.pagination.first, onClick: I })), Se.push(h(et, { key: "pgPrev", ...bt, icon: ct.value[1], disable: k.value, ariaLabel: r.lang.pagination.prev, onClick: Z }), h(et, { key: "pgNext", ...bt, icon: ct.value[2], disable: F.value, ariaLabel: r.lang.pagination.next, onClick: oe })), ee.value > 2 && Se.push(h(et, { key: "pgLast", ...bt, icon: ct.value[3], disable: F.value, ariaLabel: r.lang.pagination.last, onClick: W }));
    }
    return de.push(h("div", { class: "q-table__control" }, Se)), de;
  }
  function cn() {
    const de = e.gridHeader === true ? [h("table", { class: "q-table" }, [ke()])] : e.loading === true && t.loading === void 0 ? le() : void 0;
    return h("div", { class: "q-table__middle" }, de);
  }
  function Un() {
    const de = t.item !== void 0 ? t.item : (Se) => {
      const Ve = Se.cols.map((Ye) => h("div", { class: "q-table__grid-item-row" }, [h("div", { class: "q-table__grid-item-title" }, [Ye.label]), h("div", { class: "q-table__grid-item-value" }, [Ye.value])]));
      if ($.value === true) {
        const Ye = t["body-selection"], _t2 = Ye !== void 0 ? Ye(Se) : [h($i, { modelValue: Se.selected, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (bt, N) => {
          ie([Se.key], [Se.row], bt, N);
        } })];
        Ve.unshift(h("div", { class: "q-table__grid-item-row" }, _t2), h(ur, { dark: i.value }));
      }
      const Oe = { class: ["q-table__grid-item-card" + v.value, e.cardClass], style: e.cardStyle };
      if (e.cardStyleFn !== void 0 && (Oe.style = [Oe.style, e.cardStyleFn(Se.row)]), e.cardClassFn !== void 0) {
        const Ye = e.cardClassFn(Se.row);
        Ye && (Oe.class[0] += ` ${Ye}`);
      }
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0 || e.onRowContextmenu !== void 0) && (Oe.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Oe.onClick = (Ye) => {
        n("RowClick", Ye, Se.row, Se.pageIndex);
      }), e.onRowDblclick !== void 0 && (Oe.onDblclick = (Ye) => {
        n("RowDblclick", Ye, Se.row, Se.pageIndex);
      }), e.onRowContextmenu !== void 0 && (Oe.onContextmenu = (Ye) => {
        n("rowContextmenu", Ye, Se.row, Se.pageIndex);
      })), h("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (Se.selected === true ? " q-table__grid-item--selected" : "") }, [h("div", Oe, Ve)]);
    };
    return h("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, D.value.map((Se, Ve) => de(Te({ key: s.value(Se), row: Se, pageIndex: Ve }))));
  }
  return Object.assign(o.proxy, { requestServerInteraction: _, setPagination: p, firstPage: I, prevPage: Z, nextPage: oe, lastPage: W, isRowSelected: j, clearSelection: K, isRowExpanded: C, setExpanded: q, sort: O, resetVirtualScroll: ue, scrollTo: re, getCellValue: se }), fm(o.proxy, { filteredSortedRows: () => V.value, computedRows: () => D.value, computedRowsNumber: () => E.value }), () => {
    const de = [ae()], Se = { ref: d, class: g.value };
    return e.grid === true ? de.push(cn()) : Object.assign(Se, { class: [Se.class, e.cardClass], style: e.cardStyle }), de.push(ce(), Mt()), e.loading === true && t.loading !== void 0 && de.push(t.loading()), h("div", Se, de);
  };
} });
ge({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a3;
    return h("tr", { style: (_a3 = e.props) == null ? void 0 : _a3.__trStyle, class: n.value }, Pe(t.default));
  };
} });
ge({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = xe(), o = m(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return h("td", { class: o.value }, Pe(t.default));
    const r = n.vnode.key, i = (e.props.colsMap !== void 0 ? e.props.colsMap[r] : null) || e.props.col;
    if (i === void 0) return;
    const { row: a } = e.props;
    return h("td", { class: o.value + i.__tdClass(a), style: i.__tdStyle(a) }, Pe(t.default));
  };
} });
ge({ name: "QRouteTab", props: { ...da, ...gg }, emits: mg, setup(e, { slots: t, emit: n }) {
  const o = jl({ useDisableForRouterLinkProps: false }), { renderTab: r, $tabs: i } = bg(e, t, n, { exact: m(() => e.exact), ...o });
  return me(() => `${e.name} | ${e.exact} | ${(o.resolvedLink.value || {}).href}`, i.verifyRouteModel), () => r(o.linkTag.value, o.linkAttrs.value);
} });
function fx(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function vx() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
ge({ name: "QTime", props: { ...ot, ...kn, ...Sl, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Sl.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: xg, setup(e, { slots: t, emit: n }) {
  const o = xe(), { $q: r } = o.proxy, i = rt(e, r), { tabindex: a, headerClass: l, getLocale: s, getCurrentDate: d } = Cg(e, r), c = va(e), f = Fo(c);
  let v, u;
  const g = H(null), y = m(() => be()), w = m(() => s()), x = m(() => O()), _ = Ci(e.modelValue, y.value, w.value, e.calendar, x.value), p = H(fx(_)), b = H(_), C = H(_.hour === null || _.hour < 12), q = m(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (i.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), B = m(() => {
    const se = b.value;
    return { hour: se.hour === null ? "--" : V.value === true ? lt(se.hour) : String(C.value === true ? se.hour === 0 ? 12 : se.hour : se.hour > 12 ? se.hour - 12 : se.hour), minute: se.minute === null ? "--" : lt(se.minute), second: se.second === null ? "--" : lt(se.second) };
  }), V = m(() => e.format24h !== null ? e.format24h : r.lang.date.format24h), R = m(() => {
    const se = p.value === "hour", pe = se === true ? 12 : 60, ae = b.value[p.value];
    let ke = `rotate(${Math.round(ae * (360 / pe)) - 180}deg) translateX(-50%)`;
    return se === true && V.value === true && b.value.hour >= 12 && (ke += " scale(.7)"), { transform: ke };
  }), D = m(() => b.value.hour !== null), $ = m(() => D.value === true && b.value.minute !== null), M = m(() => e.hourOptions !== void 0 ? (se) => e.hourOptions.includes(se) : e.options !== void 0 ? (se) => e.options(se, null, null) : null), A = m(() => e.minuteOptions !== void 0 ? (se) => e.minuteOptions.includes(se) : e.options !== void 0 ? (se) => e.options(b.value.hour, se, null) : null), T = m(() => e.secondOptions !== void 0 ? (se) => e.secondOptions.includes(se) : e.options !== void 0 ? (se) => e.options(b.value.hour, b.value.minute, se) : null), z = m(() => {
    if (M.value === null) return null;
    const se = L(0, 11, M.value), pe = L(12, 11, M.value);
    return { am: se, pm: pe, values: se.values.concat(pe.values) };
  }), U = m(() => A.value !== null ? L(0, 59, A.value) : null), j = m(() => T.value !== null ? L(0, 59, T.value) : null), K = m(() => {
    switch (p.value) {
      case "hour":
        return z.value;
      case "minute":
        return U.value;
      case "second":
        return j.value;
    }
  }), ie = m(() => {
    let se, pe, ae = 0, _e2 = 1;
    const ke = K.value !== null ? K.value.values : void 0;
    p.value === "hour" ? V.value === true ? (se = 0, pe = 23) : (se = 0, pe = 11, C.value === false && (ae = 12)) : (se = 0, pe = 55, _e2 = 5);
    const Fe = [];
    for (let Ae = se, Xe = se; Ae <= pe; Ae += _e2, Xe++) {
      const ct = Ae + ae, Mt = (ke == null ? void 0 : ke.includes(ct)) === false, Yt = p.value === "hour" && Ae === 0 ? V.value === true ? "00" : "12" : Ae;
      Fe.push({ val: ct, index: Xe, disable: Mt, label: Yt });
    }
    return Fe;
  }), ye = m(() => [[wn, k, void 0, { stop: true, prevent: true, mouse: true }]]);
  me(() => e.modelValue, (se) => {
    const pe = Ci(se, y.value, w.value, e.calendar, x.value);
    (pe.dateHash !== b.value.dateHash || pe.timeHash !== b.value.timeHash) && (b.value = pe, pe.hour === null ? p.value = "hour" : C.value = pe.hour < 12);
  }), me([y, w], () => {
    Qe(() => {
      Me();
    });
  });
  function Y() {
    const se = { ...d(), ...vx() };
    Me(se), Object.assign(b.value, se), p.value = "hour";
  }
  function L(se, pe, ae) {
    const _e2 = Array.apply(null, { length: pe + 1 }).map((ke, Fe) => {
      const Ae = Fe + se;
      return { index: Ae, val: ae(Ae) === true };
    }).filter((ke) => ke.val === true).map((ke) => ke.index);
    return { min: _e2[0], max: _e2[_e2.length - 1], values: _e2, threshold: pe + 1 };
  }
  function ne(se, pe, ae) {
    const _e2 = Math.abs(se - pe);
    return Math.min(_e2, ae - _e2);
  }
  function G(se, { min: pe, max: ae, values: _e2, threshold: ke }) {
    if (se === pe) return pe;
    if (se < pe || se > ae) return ne(se, pe, ke) <= ne(se, ae, ke) ? pe : ae;
    const Fe = _e2.findIndex((ct) => se <= ct), Ae = _e2[Fe - 1], Xe = _e2[Fe];
    return se - Ae <= Xe - se ? Ae : Xe;
  }
  function be() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function O() {
    if (typeof e.defaultDate != "string") {
      const se = d(true);
      return se.dateHash = Xn(se), se;
    }
    return Ci(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function P() {
    return Ao(o) === true || K.value !== null && (K.value.values.length === 0 || p.value === "hour" && V.value !== true && z.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function te() {
    const se = g.value, { top: pe, left: ae, width: _e2 } = se.getBoundingClientRect(), ke = _e2 / 2;
    return { top: pe + ke, left: ae + ke, dist: ke * 0.7 };
  }
  function k(se) {
    if (P() !== true) {
      if (se.isFirst === true) {
        v = te(), u = ee(se.evt, v);
        return;
      }
      u = ee(se.evt, v, u), se.isFinal === true && (v = false, u = null, F());
    }
  }
  function F() {
    p.value === "hour" ? p.value = "minute" : e.withSeconds && p.value === "minute" && (p.value = "second");
  }
  function ee(se, pe, ae) {
    const _e2 = an(se), ke = Math.abs(_e2.top - pe.top), Fe = Math.sqrt(Math.pow(Math.abs(_e2.top - pe.top), 2) + Math.pow(Math.abs(_e2.left - pe.left), 2));
    let Ae, Xe = Math.asin(ke / Fe) * (180 / Math.PI);
    if (_e2.top < pe.top ? Xe = pe.left < _e2.left ? 90 - Xe : 270 + Xe : Xe = pe.left < _e2.left ? Xe + 90 : 270 - Xe, p.value === "hour") {
      if (Ae = Xe / 30, z.value !== null) {
        const ct = V.value !== true ? C.value === true : z.value.am.values.length !== 0 && z.value.pm.values.length !== 0 ? Fe >= pe.dist : z.value.am.values.length !== 0;
        Ae = G(Ae + (ct === true ? 0 : 12), z.value[ct === true ? "am" : "pm"]);
      } else Ae = Math.round(Ae), V.value === true ? Fe < pe.dist ? Ae < 12 && (Ae += 12) : Ae === 12 && (Ae = 0) : C.value === true && Ae === 12 ? Ae = 0 : C.value === false && Ae !== 12 && (Ae += 12);
      V.value === true && (C.value = Ae < 12);
    } else Ae = Math.round(Xe / 6) % 60, p.value === "minute" && U.value !== null ? Ae = G(Ae, U.value) : p.value === "second" && j.value !== null && (Ae = G(Ae, j.value));
    return ae !== Ae && Q[p.value](Ae), Ae;
  }
  const S = { hour() {
    p.value = "hour";
  }, minute() {
    p.value = "minute";
  }, second() {
    p.value = "second";
  } };
  function E(se) {
    se.keyCode === 13 && le();
  }
  function I(se) {
    se.keyCode === 13 && we();
  }
  function Z(se) {
    P() !== true && (r.platform.is.desktop !== true && ee(se, te()), F());
  }
  function oe(se) {
    P() !== true && ee(se, te());
  }
  function W(se) {
    if (se.keyCode === 13) p.value = "hour";
    else if ([37, 39].includes(se.keyCode)) {
      const pe = se.keyCode === 37 ? -1 : 1;
      if (z.value !== null) {
        const ae = V.value === true ? z.value.values : z.value[C.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) ue(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.hour) + pe) % ae.length;
          ue(ae[_e2]);
        }
      } else {
        const ae = V.value === true ? 24 : 12, _e2 = V.value !== true && C.value === false ? 12 : 0, ke = b.value.hour === null ? -pe : b.value.hour;
        ue(_e2 + (24 + ke + pe) % ae);
      }
    }
  }
  function fe(se) {
    if (se.keyCode === 13) p.value = "minute";
    else if ([37, 39].includes(se.keyCode)) {
      const pe = se.keyCode === 37 ? -1 : 1;
      if (U.value !== null) {
        const ae = U.value.values;
        if (ae.length === 0) return;
        if (b.value.minute === null) ce(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.minute) + pe) % ae.length;
          ce(ae[_e2]);
        }
      } else {
        const ae = b.value.minute === null ? -pe : b.value.minute;
        ce((60 + ae + pe) % 60);
      }
    }
  }
  function ve(se) {
    if (se.keyCode === 13) p.value = "second";
    else if ([37, 39].includes(se.keyCode)) {
      const pe = se.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        const ae = j.value.values;
        if (ae.length === 0) return;
        if (b.value.seconds === null) re(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.second) + pe) % ae.length;
          re(ae[_e2]);
        }
      } else {
        const ae = b.value.second === null ? -pe : b.value.second;
        re((60 + ae + pe) % 60);
      }
    }
  }
  function ue(se) {
    b.value.hour !== se && (b.value.hour = se, Te());
  }
  function ce(se) {
    b.value.minute !== se && (b.value.minute = se, Te());
  }
  function re(se) {
    b.value.second !== se && (b.value.second = se, Te());
  }
  const Q = { hour: ue, minute: ce, second: re };
  function le() {
    C.value === false && (C.value = true, b.value.hour !== null && (b.value.hour -= 12, Te()));
  }
  function we() {
    C.value === true && (C.value = false, b.value.hour !== null && (b.value.hour += 12, Te()));
  }
  function Ce(se) {
    const pe = e.modelValue;
    p.value !== se && pe !== void 0 && pe !== null && pe !== "" && typeof pe != "string" && (p.value = se);
  }
  function Te() {
    if (M.value !== null && M.value(b.value.hour) !== true) {
      b.value = Ci(), Ce("hour");
      return;
    }
    if (A.value !== null && A.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, Ce("minute");
      return;
    }
    if (e.withSeconds === true && T.value !== null && T.value(b.value.second) !== true) {
      b.value.second = null, Ce("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(se) {
    const pe = Object.assign({ ...b.value }, se), ae = e.calendar === "persian" ? lt(pe.hour) + ":" + lt(pe.minute) + (e.withSeconds === true ? ":" + lt(pe.second) : "") : qg(new Date(pe.year, pe.month === null ? null : pe.month - 1, pe.day, pe.hour, pe.minute, pe.second, pe.millisecond), y.value, w.value, pe.year, pe.timezoneOffset);
    pe.changed = ae !== e.modelValue, n("update:modelValue", ae, pe);
  }
  function Ie() {
    const se = [h("div", { class: "q-time__link " + (p.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: S.hour, onKeyup: W }, B.value.hour), h("div", ":"), h("div", D.value === true ? { class: "q-time__link " + (p.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: fe, onClick: S.minute } : { class: "q-time__link" }, B.value.minute)];
    e.withSeconds === true && se.push(h("div", ":"), h("div", $.value === true ? { class: "q-time__link " + (p.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: ve, onClick: S.second } : { class: "q-time__link" }, B.value.second));
    const pe = [h("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, se)];
    return V.value === false && pe.push(h("div", { class: "q-time__header-ampm column items-between no-wrap" }, [h("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: le, onKeyup: E }, "AM"), h("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: we, onKeyup: I }, "PM")])), h("div", { class: "q-time__header flex flex-center no-wrap " + l.value }, pe);
  }
  function Ne() {
    const se = b.value[p.value];
    return h("div", { class: "q-time__content col relative-position" }, [h($t, { name: "q-transition--scale" }, () => h("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [h("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [hn(h("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: oe }, [h("div", { class: "q-time__clock-circle fit" }, [h("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: R.value }), ie.value.map((pe) => h("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${pe.index}` + (pe.val === se ? " q-time__clock-position--active " + l.value : pe.disable === true ? " q-time__clock-position--disable" : "") }, [h("span", pe.label)]))])]), ye.value)])])), e.nowBtn === true ? h(et, { class: "q-time__now-button absolute", icon: r.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: a.value, onClick: Y }) : null]);
  }
  return o.proxy.setNow = Y, () => {
    const se = [Ne()], pe = Pe(t.default);
    return pe !== void 0 && se.push(h("div", { class: "q-time__actions" }, pe)), e.name !== void 0 && e.disable !== true && f(se, "push"), h("div", { class: q.value, tabindex: -1 }, [Ie(), h("div", { class: "q-time__main col overflow-auto" }, se)]);
  };
} });
ge({ name: "QTimeline", props: { ...ot, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), o = rt(e, n.proxy.$q);
  _n(wm, e);
  const r = m(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (o.value === true ? " q-timeline--dark" : ""));
  return () => h("ul", { class: r.value }, Pe(t.default));
} });
ge({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Lt(wm, ut);
  if (n === ut) return console.error("QTimelineEntry needs to be child of QTimeline"), ut;
  const o = m(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), r = m(() => `q-timeline__dot text-${e.color || n.color}`), i = m(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const a = ca(t.default, []);
    if (e.body !== void 0 && a.unshift(e.body), e.heading === true) {
      const d = [h("div"), h("div"), h(e.tag, { class: "q-timeline__heading-title" }, a)];
      return h("div", { class: "q-timeline__heading" }, i.value === true ? d.reverse() : d);
    }
    let l;
    e.icon !== void 0 ? l = [h(tt, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (l = [h("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const s = [h("div", { class: "q-timeline__subtitle" }, [h("span", {}, Pe(t.subtitle, [e.subtitle]))]), h("div", { class: r.value }, l), h("div", { class: "q-timeline__content" }, [h("h6", { class: "q-timeline__title" }, Pe(t.title, [e.title]))].concat(a))];
    return h("li", { class: o.value }, i.value === true ? s.reverse() : s);
  };
} });
var Hf = ge({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => h("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), jf = ge({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => h("div", { class: n.value }, Pe(t.default));
} }), hx = ["none", "strict", "leaf", "leaf-filtered"];
ge({ name: "QTree", props: { ...ot, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => hx.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: o } = xe(), { $q: r } = o, i = rt(e, r), a = H({}), l = H(e.ticked || []), s = H(e.expanded || []);
  let d = {};
  fr(() => {
    d = {};
  });
  const c = m(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (i.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = m(() => e.selected !== void 0), v = m(() => e.icon || r.iconSet.tree.icon), u = m(() => e.controlColor || e.color), g = m(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), y = m(() => {
    const L = e.selectedColor || e.color;
    return L ? ` text-${L}` : "";
  }), w = m(() => e.filterMethod !== void 0 ? e.filterMethod : (L, ne) => {
    const G = ne.toLowerCase();
    return L[e.labelKey] && L[e.labelKey].toLowerCase().indexOf(G) !== -1;
  }), x = m(() => {
    const L = {}, ne = (G, be) => {
      const O = G.tickStrategy || (be ? be.tickStrategy : e.tickStrategy), P = G[e.nodeKey], te = G[e.childrenKey] && Array.isArray(G[e.childrenKey]) && G[e.childrenKey].length !== 0, k = G.disabled !== true && f.value === true && G.selectable !== false, F = G.disabled !== true && G.expandable !== false, ee = O !== "none", S = O === "strict", E = O === "leaf-filtered", I = O === "leaf" || O === "leaf-filtered";
      let Z = G.disabled !== true && G.tickable !== false;
      I === true && Z === true && be && be.tickable !== true && (Z = false);
      let oe = G.lazy;
      oe === true && a.value[P] !== void 0 && Array.isArray(G[e.childrenKey]) === true && (oe = a.value[P]);
      const W = { key: P, parent: be, isParent: te, lazy: oe, disabled: G.disabled, link: G.disabled !== true && (k === true || F === true && (te === true || oe === true)), children: [], matchesFilter: e.filter ? w.value(G, e.filter) : true, selected: P === e.selected && k === true, selectable: k, expanded: te === true ? s.value.includes(P) : false, expandable: F, noTick: G.noTick === true || S !== true && oe && oe !== "loaded", tickable: Z, tickStrategy: O, hasTicking: ee, strictTicking: S, leafFilteredTicking: E, leafTicking: I, ticked: S === true ? l.value.includes(P) : te === true ? false : l.value.includes(P) };
      if (L[P] = W, te === true && (W.children = G[e.childrenKey].map((fe) => ne(fe, W)), e.filter && (W.matchesFilter !== true ? W.matchesFilter = W.children.some((fe) => fe.matchesFilter) : W.noTick !== true && W.disabled !== true && W.tickable === true && E === true && W.children.every((fe) => fe.matchesFilter !== true || fe.noTick === true || fe.tickable !== true) === true && (W.tickable = false)), W.matchesFilter === true && (W.noTick !== true && S !== true && W.children.every((fe) => fe.noTick) === true && (W.noTick = true), I))) {
        if (W.ticked = false, W.indeterminate = W.children.some((fe) => fe.indeterminate === true), W.tickable = W.tickable === true && W.children.some((fe) => fe.tickable), W.indeterminate !== true) {
          const fe = W.children.reduce((ve, ue) => ue.ticked === true ? ve + 1 : ve, 0);
          fe === W.children.length ? W.ticked = true : fe > 0 && (W.indeterminate = true);
        }
        W.indeterminate === true && (W.indeterminateNextState = W.children.every((fe) => fe.tickable !== true || fe.ticked !== true));
      }
      return W;
    };
    return e.nodes.forEach((G) => ne(G, null)), L;
  });
  me(() => e.ticked, (L) => {
    l.value = L;
  }), me(() => e.expanded, (L) => {
    s.value = L;
  });
  function _(L) {
    const ne = [].reduce, G = (be, O) => {
      if (be || !O) return be;
      if (Array.isArray(O) === true) return ne.call(Object(O), G, be);
      if (O[e.nodeKey] === L) return O;
      if (O[e.childrenKey]) return G(null, O[e.childrenKey]);
    };
    return G(null, e.nodes);
  }
  function p() {
    return l.value.map((L) => _(L));
  }
  function b() {
    return s.value.map((L) => _(L));
  }
  function C(L) {
    return L && x.value[L] ? x.value[L].expanded : false;
  }
  function q() {
    e.expanded !== void 0 ? n("update:expanded", []) : s.value = [];
  }
  function B() {
    const L = [], ne = (G) => {
      G[e.childrenKey] && G[e.childrenKey].length !== 0 && G.expandable !== false && G.disabled !== true && (L.push(G[e.nodeKey]), G[e.childrenKey].forEach(ne));
    };
    e.nodes.forEach(ne), e.expanded !== void 0 ? n("update:expanded", L) : s.value = L;
  }
  function V(L, ne, G = _(L), be = x.value[L]) {
    if (be.lazy && be.lazy !== "loaded") {
      if (be.lazy === "loading") return;
      a.value[L] = "loading", Array.isArray(G[e.childrenKey]) !== true && (G[e.childrenKey] = []), n("lazyLoad", { node: G, key: L, done: (O) => {
        a.value[L] = "loaded", G[e.childrenKey] = Array.isArray(O) === true ? O : [], Qe(() => {
          var _a3;
          ((_a3 = x.value[L]) == null ? void 0 : _a3.isParent) === true && R(L, true);
        });
      }, fail: () => {
        delete a.value[L], G[e.childrenKey].length === 0 && delete G[e.childrenKey];
      } });
    } else be.isParent === true && be.expandable === true && R(L, ne);
  }
  function R(L, ne) {
    let G = s.value;
    const be = e.expanded !== void 0;
    if (be === true && (G = G.slice()), ne) {
      if (e.accordion && x.value[L]) {
        const O = [];
        x.value[L].parent ? x.value[L].parent.children.forEach((P) => {
          P.key !== L && P.expandable === true && O.push(P.key);
        }) : e.nodes.forEach((P) => {
          const te = P[e.nodeKey];
          te !== L && O.push(te);
        }), O.length !== 0 && (G = G.filter((P) => O.includes(P) === false));
      }
      G = G.concat([L]).filter((O, P, te) => te.indexOf(O) === P);
    } else G = G.filter((O) => O !== L);
    be === true ? n("update:expanded", G) : s.value = G;
  }
  function D(L) {
    return L && x.value[L] ? x.value[L].ticked : false;
  }
  function $(L, ne) {
    let G = l.value;
    const be = e.ticked !== void 0;
    be === true && (G = G.slice()), ne ? G = G.concat(L).filter((O, P, te) => te.indexOf(O) === P) : G = G.filter((O) => L.includes(O) === false), be === true && n("update:ticked", G);
  }
  function M(L, ne, G) {
    const be = { tree: o, node: L, key: G, color: e.color, dark: i.value };
    return It(be, "expanded", () => ne.expanded, (O) => {
      O !== ne.expanded && V(G, O);
    }), It(be, "ticked", () => ne.ticked, (O) => {
      O !== ne.ticked && $([G], O);
    }), be;
  }
  function A(L) {
    return (e.filter ? L.filter((ne) => x.value[ne[e.nodeKey]].matchesFilter) : L).map((ne) => j(ne));
  }
  function T(L) {
    if (L.icon !== void 0) return h(tt, { class: "q-tree__icon q-mr-sm", name: L.icon, color: L.iconColor });
    const ne = L.img || L.avatar;
    if (ne) return h("img", { class: `q-tree__${L.img ? "img" : "avatar"} q-mr-sm`, src: ne });
  }
  function z() {
    n("afterShow");
  }
  function U() {
    n("afterHide");
  }
  function j(L) {
    const ne = L[e.nodeKey], G = x.value[ne], be = L.header && t[`header-${L.header}`] || t["default-header"], O = G.isParent === true ? A(L[e.childrenKey]) : [], P = O.length !== 0 || G.lazy && G.lazy !== "loaded";
    let te = L.body && t[`body-${L.body}`] || t["default-body"];
    const k = be !== void 0 || te !== void 0 ? M(L, G, ne) : null;
    return te !== void 0 && (te = h("div", { class: "q-tree__node-body relative-position" }, [h("div", { class: g.value }, [te(k)])])), h("div", { key: ne, class: `q-tree__node relative-position q-tree__node--${P === true ? "parent" : "child"}` }, [h("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (G.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (G.selected === true ? " q-tree__node--selected" : "") + (G.disabled === true ? " q-tree__node--disabled" : ""), tabindex: G.link === true ? 0 : -1, ariaExpanded: O.length > 0 ? G.expanded : null, role: "treeitem", onClick: (F) => {
      ie(L, G, F);
    }, onKeypress(F) {
      vr(F) !== true && (F.keyCode === 13 ? ie(L, G, F, true) : F.keyCode === 32 && ye(L, G, F, true));
    } }, [h("div", { class: "q-focus-helper", tabindex: -1, ref: (F) => {
      d[G.key] = F;
    } }), G.lazy === "loading" ? h(Tn, { class: "q-tree__spinner", color: u.value }) : P === true ? h(tt, { class: "q-tree__arrow" + (G.expanded === true ? " q-tree__arrow--rotate" : ""), name: v.value, onClick(F) {
      ye(L, G, F);
    } }) : null, G.hasTicking === true && G.noTick !== true ? h($i, { class: "q-tree__tickbox", modelValue: G.indeterminate === true ? null : G.ticked, color: u.value, dark: i.value, dense: true, keepColor: true, disable: G.tickable !== true, onKeydown: Ke, "onUpdate:modelValue": (F) => {
      Y(G, F);
    } }) : null, h("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (G.selected === true ? y.value : g.value) }, [be ? be(k) : [T(L), h("div", L[e.labelKey])]])]), P === true ? e.noTransition === true ? G.expanded === true ? h("div", { class: "q-tree__node-collapsible" + g.value, key: `${ne}__q` }, [te, h("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]) : null : h(Oc, { duration: e.duration, onShow: z, onHide: U }, () => hn(h("div", { class: "q-tree__node-collapsible" + g.value, key: `${ne}__q` }, [te, h("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]), [[lm, G.expanded]])) : te]);
  }
  function K(L) {
    var _a3;
    (_a3 = d[L]) == null ? void 0 : _a3.focus();
  }
  function ie(L, ne, G, be) {
    be !== true && ne.selectable !== false && K(ne.key), f.value && ne.selectable ? e.noSelectionUnset === false ? n("update:selected", ne.key !== e.selected ? ne.key : null) : ne.key !== e.selected && n("update:selected", ne.key === void 0 ? null : ne.key) : ye(L, ne, G, be), typeof L.handler == "function" && L.handler(L);
  }
  function ye(L, ne, G, be) {
    G !== void 0 && Ke(G), be !== true && ne.selectable !== false && K(ne.key), V(ne.key, !ne.expanded, L, ne);
  }
  function Y(L, ne) {
    if (L.indeterminate === true && (ne = L.indeterminateNextState), L.strictTicking) $([L.key], ne);
    else if (L.leafTicking) {
      const G = [], be = (O) => {
        O.isParent ? (ne !== true && O.noTick !== true && O.tickable === true && G.push(O.key), O.leafTicking === true && O.children.forEach(be)) : O.noTick !== true && O.tickable === true && (O.leafFilteredTicking !== true || O.matchesFilter === true) && G.push(O.key);
      };
      be(L), $(G, ne);
    }
  }
  return e.defaultExpandAll === true && B(), Object.assign(o, { getNodeByKey: _, getTickedNodes: p, getExpandedNodes: b, isExpanded: C, collapseAll: q, expandAll: B, setExpanded: V, isTicked: D, setTicked: $ }), () => {
    const L = A(e.nodes);
    return h("div", { class: c.value, role: "tree" }, L.length === 0 ? e.filter ? e.noResultsLabel || r.lang.tree.noResults : e.noNodesLabel || r.lang.tree.noNodes : L);
  };
} });
function Uf(e) {
  return (e * 100).toFixed(2) + "%";
}
var mx = { ...ot, ...Ig, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, a0 = [...Ng, "start", "finish", "added", "removed"];
function gx(e, t) {
  const n = xe(), { props: o, slots: r, emit: i, proxy: a } = n, { $q: l } = a, s = rt(o, l);
  function d(k, F, ee) {
    if (k.__status = F, F === "idle") {
      k.__uploaded = 0, k.__progress = 0, k.__sizeLabel = Cu(k.size), k.__progressLabel = "0.00%";
      return;
    }
    if (F === "failed") {
      a.$forceUpdate();
      return;
    }
    k.__uploaded = F === "uploaded" ? k.size : ee, k.__progress = F === "uploaded" ? 1 : Math.min(0.9999, k.__uploaded / k.size), k.__progressLabel = Uf(k.__progress), a.$forceUpdate();
  }
  const c = m(() => o.disable !== true && o.readonly !== true), f = H(false), v = H(null), u = H(null), g = { files: H([]), queuedFiles: H([]), uploadedFiles: H([]), uploadedSize: H(0), updateFileStatus: d, isAlive: () => Ao(n) === false }, { pickFiles: y, addFiles: w, onDragover: x, onDragleave: _, processFiles: p, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: q } = zg({ editable: c, dnd: f, getFileInput: Y, addFilesToQueue: L });
  Object.assign(g, e({ props: o, slots: r, emit: i, helpers: g, exposeApi: (k) => {
    Object.assign(g, k);
  } })), g.isBusy === void 0 && (g.isBusy = H(false));
  const B = H(0), V = m(() => B.value === 0 ? 0 : g.uploadedSize.value / B.value), R = m(() => Uf(V.value)), D = m(() => Cu(B.value)), $ = m(() => c.value === true && g.isUploading.value !== true && (o.multiple === true || g.queuedFiles.value.length === 0) && (o.maxFiles === void 0 || g.files.value.length < C.value) && (o.maxTotalSize === void 0 || B.value < q.value)), M = m(() => c.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  _n(Mm, be);
  const A = m(() => "q-uploader column no-wrap" + (s.value === true ? " q-uploader--dark q-dark" : "") + (o.bordered === true ? " q-uploader--bordered" : "") + (o.square === true ? " q-uploader--square no-border-radius" : "") + (o.flat === true ? " q-uploader--flat no-shadow" : "") + (o.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), T = m(() => "q-uploader__header" + (o.color !== void 0 ? ` bg-${o.color}` : "") + (o.textColor !== void 0 ? ` text-${o.textColor}` : ""));
  me(g.isUploading, (k, F) => {
    F === false && k === true ? i("start") : F === true && k === false && i("finish");
  });
  function z() {
    o.disable === false && (g.abort(), g.uploadedSize.value = 0, B.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function U() {
    o.disable === false && K(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function j() {
    K(["idle", "failed"], ({ size: k }) => {
      B.value -= k, g.queuedFiles.value = [];
    });
  }
  function K(k, F) {
    if (o.disable === true) return;
    const ee = { files: [], size: 0 }, S = g.files.value.filter((E) => k.indexOf(E.__status) === -1 ? true : (ee.size += E.size, ee.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    ee.files.length !== 0 && (g.files.value = S, F(ee), i("removed", ee.files));
  }
  function ie(k) {
    o.disable || (k.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((F) => F.__key !== k.__key) : k.__status === "uploading" ? k.__abort() : B.value -= k.size, g.files.value = g.files.value.filter((F) => F.__key !== k.__key ? true : (F.__img !== void 0 && window.URL.revokeObjectURL(F.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((F) => F.__key !== k.__key), i("removed", [k]));
  }
  function ye() {
    g.files.value.forEach((k) => {
      k.__img !== void 0 && window.URL.revokeObjectURL(k.__img.src);
    });
  }
  function Y() {
    return u.value || v.value.getElementsByClassName("q-uploader__input")[0];
  }
  function L(k, F) {
    const ee = p(k, F, g.files.value, true), S = Y();
    S != null && (S.value = ""), ee !== void 0 && (ee.forEach((E) => {
      if (g.updateFileStatus(E, "idle"), B.value += E.size, o.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const I = new Image();
        I.src = window.URL.createObjectURL(E), E.__img = I;
      }
    }), g.files.value = g.files.value.concat(ee), g.queuedFiles.value = g.queuedFiles.value.concat(ee), i("added", ee), o.autoUpload === true && g.upload());
  }
  function ne() {
    M.value === true && g.upload();
  }
  function G(k, F, ee) {
    if (k === true) {
      const S = { type: "a", key: F, icon: l.iconSet.uploader[F], flat: true, dense: true };
      let E;
      return F === "add" ? (S.onClick = y, E = be) : S.onClick = ee, h(et, S, E);
    }
  }
  function be() {
    return h("input", { ref: u, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: o.accept, multiple: o.multiple === true ? "multiple" : void 0, capture: o.capture, onMousedown: St, onClick: y, onChange: L });
  }
  function O() {
    return r.header !== void 0 ? r.header(te) : [h("div", { class: "q-uploader__header-content column" }, [h("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [G(g.queuedFiles.value.length !== 0, "removeQueue", j), G(g.uploadedFiles.value.length !== 0, "removeUploaded", U), g.isUploading.value === true ? h(Tn, { class: "q-uploader__spinner" }) : null, h("div", { class: "col column justify-center" }, [o.label !== void 0 ? h("div", { class: "q-uploader__title" }, [o.label]) : null, h("div", { class: "q-uploader__subtitle" }, [D.value + " / " + R.value])]), G($.value, "add"), G(o.hideUploadBtn === false && M.value === true, "upload", g.upload), G(g.isUploading.value, "clear", g.abort)])])];
  }
  function P() {
    return r.list !== void 0 ? r.list(te) : g.files.value.map((k) => h("div", { key: k.__key, class: "q-uploader__file relative-position" + (o.noThumbnails !== true && k.__img !== void 0 ? " q-uploader__file--img" : "") + (k.__status === "failed" ? " q-uploader__file--failed" : k.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: o.noThumbnails !== true && k.__img !== void 0 ? { backgroundImage: 'url("' + k.__img.src + '")', backgroundSize: o.thumbnailFit } : null }, [h("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [k.__status === "failed" ? h(tt, { class: "q-uploader__file-status", name: l.iconSet.type.negative, color: "negative" }) : null, h("div", { class: "q-uploader__file-header-content col" }, [h("div", { class: "q-uploader__title" }, [k.name]), h("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [k.__sizeLabel + " / " + k.__progressLabel])]), k.__status === "uploading" ? h(ug, { value: k.__progress, min: 0, max: 1, indeterminate: k.__progress === 0 }) : h(et, { round: true, dense: true, flat: true, icon: l.iconSet.uploader[k.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      ie(k);
    } })])]));
  }
  We(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const te = {};
  for (const k in g) wt(g[k]) === true ? It(te, k, () => g[k].value) : te[k] = g[k];
  return Object.assign(te, { upload: ne, reset: z, removeUploadedFiles: U, removeQueuedFiles: j, removeFile: ie, pickFiles: y, addFiles: w }), fm(te, { canAddFiles: () => $.value, canUpload: () => M.value, uploadSizeLabel: () => D.value, uploadProgressLabel: () => R.value }), t({ ...g, upload: ne, reset: z, removeUploadedFiles: U, removeQueuedFiles: j, removeFile: ie, pickFiles: y, addFiles: w, canAddFiles: $, canUpload: M, uploadSizeLabel: D, uploadProgressLabel: R }), () => {
    const k = [h("div", { class: T.value }, O()), h("div", { class: "q-uploader__list scroll" }, P()), b("uploader")];
    g.isBusy.value === true && k.push(h("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [h(Tn)]));
    const F = { ref: v, class: A.value };
    return $.value === true && Object.assign(F, { onDragover: x, onDragleave: _ }), h("div", F, k);
  };
}
var bx = () => true;
function l0(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = bx;
  }), t;
}
var px = l0(a0), yx = ({ name: e, props: t, emits: n, injectPlugin: o }) => ge({ name: e, props: { ...mx, ...t }, emits: Ot(n) === true ? { ...px, ...n } : [...a0, ...n], setup(r, { expose: i }) {
  return gx(o, i);
} });
function Wn(e) {
  return typeof e == "function" ? e : () => e;
}
var _x = "QUploader", wx = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, xx = ["factoryFailed", "uploaded", "failed", "uploading"];
function Cx({ props: e, emit: t, helpers: n }) {
  const o = H([]), r = H([]), i = H(0), a = m(() => ({ url: Wn(e.url), method: Wn(e.method), headers: Wn(e.headers), formFields: Wn(e.formFields), fieldName: Wn(e.fieldName), withCredentials: Wn(e.withCredentials), sendRaw: Wn(e.sendRaw), batch: Wn(e.batch) })), l = m(() => i.value > 0), s = m(() => r.value.length !== 0);
  let d;
  function c() {
    o.value.forEach((g) => {
      g.abort();
    }), r.value.length !== 0 && (d = true);
  }
  function f() {
    const g = n.queuedFiles.value.slice(0);
    n.queuedFiles.value = [], a.value.batch(g) ? v(g) : g.forEach((y) => {
      v([y]);
    });
  }
  function v(g) {
    if (i.value++, typeof e.factory != "function") {
      u(g, {});
      return;
    }
    const y = e.factory(g);
    if (!y) t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), i.value--;
    else if (typeof y.catch == "function" && typeof y.then == "function") {
      r.value.push(y);
      const w = (x) => {
        n.isAlive() === true && (r.value = r.value.filter((_) => _ !== y), r.value.length === 0 && (d = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((_) => {
          n.updateFileStatus(_, "failed");
        }), t("factoryFailed", x, g), i.value--);
      };
      y.then((x) => {
        d === true ? w(new Error("Aborted")) : n.isAlive() === true && (r.value = r.value.filter((_) => _ !== y), u(g, x));
      }).catch(w);
    } else u(g, y || {});
  }
  function u(g, y) {
    const w = new FormData(), x = new XMLHttpRequest(), _ = (M, A) => y[M] !== void 0 ? Wn(y[M])(A) : a.value[M](A), p = _("url", g);
    if (!p) {
      console.error("q-uploader: invalid or no URL specified"), i.value--;
      return;
    }
    const b = _("formFields", g);
    b !== void 0 && b.forEach((M) => {
      w.append(M.name, M.value);
    });
    let C = 0, q = 0, B = 0, V = 0, R;
    x.upload.addEventListener("progress", (M) => {
      if (R === true) return;
      const A = Math.min(V, M.loaded);
      n.uploadedSize.value += A - B, B = A;
      let T = B - q;
      for (let z = C; T > 0 && z < g.length; z++) {
        const U = g[z];
        if (T > U.size) T -= U.size, C++, q += U.size, n.updateFileStatus(U, "uploading", U.size);
        else {
          n.updateFileStatus(U, "uploading", T);
          return;
        }
      }
    }, false), x.onreadystatechange = () => {
      x.readyState < 4 || (x.status && x.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((M) => {
        n.updateFileStatus(M, "uploaded");
      }), t("uploaded", { files: g, xhr: x })) : (R = true, n.uploadedSize.value -= B, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((M) => {
        n.updateFileStatus(M, "failed");
      }), t("failed", { files: g, xhr: x })), i.value--, o.value = o.value.filter((M) => M !== x));
    }, x.open(_("method", g), p), _("withCredentials", g) === true && (x.withCredentials = true);
    const D = _("headers", g);
    D !== void 0 && D.forEach((M) => {
      x.setRequestHeader(M.name, M.value);
    });
    const $ = _("sendRaw", g);
    g.forEach((M) => {
      n.updateFileStatus(M, "uploading", 0), $ !== true && w.append(_("fieldName", M), M, M.name), M.xhr = x, M.__abort = () => {
        x.abort();
      }, V += M.size;
    }), t("uploading", { files: g, xhr: x }), o.value.push(x), $ === true ? x.send(new Blob(g)) : x.send(w);
  }
  return { isUploading: l, isBusy: s, abort: c, upload: f };
}
var Sx = { name: _x, props: wx, emits: xx, injectPlugin: Cx };
yx(Sx);
ge({ name: "QUploaderAddTrigger", setup() {
  const e = Lt(Mm, ut);
  return e === ut && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
ge({ name: "QVideo", props: { ...Vc, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Fc(e), n = m(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => h("div", { class: n.value, style: t.value }, [h("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Qf(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Vn({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Qf(t), handler(o) {
    n.depth !== 0 && setTimeout(() => {
      const r = x1(e);
      r !== void 0 && C1(r, o, n.depth);
    });
  }, handlerKey(o) {
    Cn(o, 13) === true && n.handler(o);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Qf(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var Tx = 0, ii = void 0;
function Kf(e, t) {
  ii === void 0 && (ii = document.createElement("div"), ii.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(ii));
  const n = e.getBoundingClientRect(), o = ii.getBoundingClientRect(), { marginLeft: r, marginRight: i, marginTop: a, marginBottom: l } = window.getComputedStyle(e), s = parseInt(r, 10) + parseInt(i, 10), d = parseInt(a, 10) + parseInt(l, 10);
  return { left: n.left - o.left, top: n.top - o.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : s), heightM: n.bottom - n.top + (t === true ? 0 : d), marginH: t === true ? s : 0, marginV: t === true ? d : 0 };
}
function Pa(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Wf = ["Top", "Right", "Bottom", "Left"], Yf = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], kx = /-block|-inline|block-|inline-/, Mx = /(-block|-inline|block-|inline-).*:/;
function Gf(e, t) {
  const n = window.getComputedStyle(e), o = {};
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (n[i] === "") if (i === "cssText") {
      const a = n.length;
      let l = "";
      for (let s = 0; s < a; s++) kx.test(n[s]) !== true && (l += n[s] + ": " + n[n[s]] + "; ");
      o[i] = l;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(i) !== -1) {
      const a = i.replace("border", "");
      let l = "";
      for (let s = 0; s < Wf.length; s++) {
        const d = "border" + Wf[s] + a;
        l += n[d] + " ";
      }
      o[i] = l;
    } else if (i === "borderRadius") {
      let a = "", l = "";
      for (let s = 0; s < Yf.length; s++) {
        const d = n[Yf[s]].split(" ");
        a += d[0] + " ", l += (d[1] === void 0 ? d[0] : d[1]) + " ";
      }
      o[i] = a + "/ " + l;
    } else o[i] = n[i];
    else i === "cssText" ? o[i] = n[i].split(";").filter((a) => Mx.test(a) !== true).join(";") : o[i] = n[i];
  }
  return o;
}
var qx = ["absolute", "fixed", "relative", "sticky"];
function Xf(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: o, zIndex: r } = window.getComputedStyle(t), i = Number(r);
    i > n && (t === e || qx.includes(o) === true) && (n = i), t = t.parentNode;
  }
  return n;
}
function Ex(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function Ax(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function Jf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Zf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function Lx(e) {
  let t = () => false, n = false, o = true;
  const r = Ex(e), i = Ax(e), a = Jf(r.from);
  if (Zf(a) !== true) return t;
  typeof a.qMorphCancel == "function" && a.qMorphCancel();
  let l, s, d, c;
  const f = a.parentNode, v = a.nextElementSibling, u = Kf(a, i.resize), { width: g, height: y } = Pa(f), { borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, backgroundColor: b, transform: C, position: q, cssText: B } = Gf(a, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), V = a.classList.toString(), R = a.style.cssText, D = a.cloneNode(true), $ = i.tween === true ? a.cloneNode(true) : void 0;
  $ !== void 0 && ($.className = $.classList.toString().split(" ").filter((A) => /^bg-/.test(A) === false).join(" ")), i.hideFromClone === true && D.classList.add("q-morph--internal"), D.setAttribute("aria-hidden", "true"), D.style.transition = "none", D.style.animation = "none", D.style.pointerEvents = "none", f.insertBefore(D, v), a.qMorphCancel = () => {
    n = true, D.remove(), $ == null ? void 0 : $.remove(), i.hideFromClone === true && D.classList.remove("q-morph--internal"), a.qMorphCancel = void 0;
  };
  const M = () => {
    const A = Jf(r.to);
    if (n === true || Zf(A) !== true) {
      typeof a.qMorphCancel == "function" && a.qMorphCancel();
      return;
    }
    a !== A && typeof A.qMorphCancel == "function" && A.qMorphCancel(), i.keepToClone !== true && A.classList.add("q-morph--internal"), D.classList.add("q-morph--internal");
    const { width: T, height: z } = Pa(f), { width: U, height: j } = Pa(A.parentNode);
    i.hideFromClone !== true && D.classList.remove("q-morph--internal"), A.qMorphCancel = () => {
      n = true, D.remove(), $ == null ? void 0 : $.remove(), i.hideFromClone === true && D.classList.remove("q-morph--internal"), i.keepToClone !== true && A.classList.remove("q-morph--internal"), a.qMorphCancel = void 0, A.qMorphCancel = void 0;
    };
    const K = () => {
      if (n === true) {
        typeof A.qMorphCancel == "function" && A.qMorphCancel();
        return;
      }
      i.hideFromClone !== true && (D.classList.add("q-morph--internal"), D.innerHTML = "", D.style.left = 0, D.style.right = "unset", D.style.top = 0, D.style.bottom = "unset", D.style.transform = "none"), i.keepToClone !== true && A.classList.remove("q-morph--internal");
      const ie = A.parentNode, { width: ye, height: Y } = Pa(ie), L = A.cloneNode(i.keepToClone);
      L.setAttribute("aria-hidden", "true"), i.keepToClone !== true && (L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none", L.style.pointerEvents = "none"), L.classList.add("q-morph--internal");
      const ne = A === a && f === ie ? D : A.nextElementSibling;
      ie.insertBefore(L, ne);
      const { borderWidth: G, borderStyle: be, borderColor: O, borderRadius: P, backgroundColor: te, transform: k, position: F, cssText: ee } = Gf(A, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = A.classList.toString(), E = A.style.cssText;
      A.style.cssText = ee, A.style.transform = "none", A.style.animation = "none", A.style.transition = "none", A.className = S.split(" ").filter((_e2) => /^bg-/.test(_e2) === false).join(" ");
      const I = Kf(A, i.resize), Z = u.left - I.left, oe = u.top - I.top, W = u.width / (I.width > 0 ? I.width : 10), fe = u.height / (I.height > 0 ? I.height : 100), ve = g - T, ue = y - z, ce = ye - U, re = Y - j, Q = Math.max(u.widthM, ve), le = Math.max(u.heightM, ue), we = Math.max(I.widthM, ce), Ce = Math.max(I.heightM, re), Te = a === A && ["absolute", "fixed"].includes(F) === false && ["absolute", "fixed"].includes(q) === false;
      let Me = F === "fixed", Ie = ie;
      for (; Me !== true && Ie !== document; ) Me = window.getComputedStyle(Ie).position === "fixed", Ie = Ie.parentNode;
      if (i.hideFromClone !== true && (D.style.display = "block", D.style.flex = "0 0 auto", D.style.opacity = 0, D.style.minWidth = "unset", D.style.maxWidth = "unset", D.style.minHeight = "unset", D.style.maxHeight = "unset", D.classList.remove("q-morph--internal")), i.keepToClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset"), L.classList.remove("q-morph--internal"), typeof i.classes == "string" && (A.className += " " + i.classes), typeof i.style == "string") A.style.cssText += " " + i.style;
      else if (Ot(i.style) === true) for (const _e2 in i.style) A.style[_e2] = i.style[_e2];
      const Ne = Xf(D), se = Xf(A), pe = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      A.style.position = Me === true ? "fixed" : "absolute", A.style.left = `${I.left - pe.scrollLeft}px`, A.style.right = "unset", A.style.top = `${I.top - pe.scrollTop}px`, A.style.margin = 0, i.resize === true && (A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset", A.style.overflow = "hidden", A.style.overflowX = "hidden", A.style.overflowY = "hidden"), document.body.appendChild(A), $ !== void 0 && ($.style.cssText = B, $.style.transform = "none", $.style.animation = "none", $.style.transition = "none", $.style.position = A.style.position, $.style.left = `${u.left - pe.scrollLeft}px`, $.style.right = "unset", $.style.top = `${u.top - pe.scrollTop}px`, $.style.margin = 0, $.style.pointerEvents = "none", i.resize === true && ($.style.minWidth = "unset", $.style.maxWidth = "unset", $.style.minHeight = "unset", $.style.maxHeight = "unset", $.style.overflow = "hidden", $.style.overflowX = "hidden", $.style.overflowY = "hidden"), document.body.appendChild($));
      const ae = (_e2) => {
        a === A && o !== true ? (A.style.cssText = R, A.className = V) : (A.style.cssText = E, A.className = S), L.parentNode === ie && ie.insertBefore(A, L), D.remove(), L.remove(), $ == null ? void 0 : $.remove(), t = () => false, a.qMorphCancel = void 0, A.qMorphCancel = void 0, typeof i.onEnd == "function" && i.onEnd(o === true ? "to" : "from", _e2 === true);
      };
      if (i.useCSS !== true && typeof A.animate == "function") {
        const _e2 = i.resize === true ? { transform: `translate(${Z}px, ${oe}px)`, width: `${Q}px`, height: `${le}px` } : { transform: `translate(${Z}px, ${oe}px) scale(${W}, ${fe})` }, ke = i.resize === true ? { width: `${we}px`, height: `${Ce}px` } : {}, Fe = i.resize === true ? { width: `${Q}px`, height: `${le}px` } : {}, Ae = i.resize === true ? { transform: `translate(${-1 * Z}px, ${-1 * oe}px)`, width: `${we}px`, height: `${Ce}px` } : { transform: `translate(${-1 * Z}px, ${-1 * oe}px) scale(${1 / W}, ${1 / fe})` }, Xe = $ !== void 0 ? { opacity: i.tweenToOpacity } : { backgroundColor: b }, ct = $ !== void 0 ? { opacity: 1 } : { backgroundColor: te };
        c = A.animate([{ margin: 0, borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, zIndex: Ne, transformOrigin: "0 0", ..._e2, ...Xe }, { margin: 0, borderWidth: G, borderStyle: be, borderColor: O, borderRadius: P, zIndex: se, transformOrigin: "0 0", transform: k, ...ke, ...ct }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), s = $ === void 0 ? void 0 : $.animate([{ opacity: i.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, zIndex: Ne, transformOrigin: "0 0", transform: C, ...Fe }, { opacity: 0, margin: 0, borderWidth: G, borderStyle: be, borderColor: O, borderRadius: P, zIndex: se, transformOrigin: "0 0", ...Ae }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), l = i.hideFromClone === true || Te === true ? void 0 : D.animate([{ margin: `${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px`, width: `${Q + u.marginH}px`, height: `${le + u.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), d = i.keepToClone === true ? void 0 : L.animate([Te === true ? { margin: `${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px`, width: `${Q + u.marginH}px`, height: `${le + u.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${re < 0 ? re / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${we + I.marginH}px`, height: `${Ce + I.marginV}px` }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay });
        const Mt = (Yt) => {
          l == null ? void 0 : l.cancel(), s == null ? void 0 : s.cancel(), d == null ? void 0 : d.cancel(), c.cancel(), c.removeEventListener("finish", Mt), c.removeEventListener("cancel", Mt), ae(Yt), l = void 0, s = void 0, d = void 0, c = void 0;
        };
        a.qMorphCancel = () => {
          a.qMorphCancel = void 0, n = true, Mt();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Mt();
        }, c.addEventListener("finish", Mt), c.addEventListener("cancel", Mt), t = (Yt) => n === true || c === void 0 ? false : Yt === true ? (Mt(true), true) : (o = o !== true, l == null ? void 0 : l.reverse(), s == null ? void 0 : s.reverse(), d == null ? void 0 : d.reverse(), c.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++Tx}`, ke = document.createElement("style"), Fe = i.resize === true ? `
            transform: translate(${Z}px, ${oe}px);
            width: ${Q}px;
            height: ${le}px;
          ` : `transform: translate(${Z}px, ${oe}px) scale(${W}, ${fe});`, Ae = i.resize === true ? `
            width: ${we}px;
            height: ${Ce}px;
          ` : "", Xe = i.resize === true ? `
            width: ${Q}px;
            height: ${le}px;
          ` : "", ct = i.resize === true ? `
            transform: translate(${-1 * Z}px, ${-1 * oe}px);
            width: ${we}px;
            height: ${Ce}px;
          ` : `transform: translate(${-1 * Z}px, ${-1 * oe}px) scale(${1 / W}, ${1 / fe});`, Mt = $ !== void 0 ? `opacity: ${i.tweenToOpacity};` : `background-color: ${b};`, Yt = $ !== void 0 ? "opacity: 1;" : `background-color: ${te};`, co = $ === void 0 ? "" : `
            @keyframes ${_e2}-from-tween {
              0% {
                opacity: ${i.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${x};
                border-color: ${_};
                border-radius: ${p};
                z-index: ${Ne};
                transform-origin: 0 0;
                transform: ${C};
                ${Xe}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${G};
                border-style: ${be};
                border-color: ${O};
                border-radius: ${P};
                z-index: ${se};
                transform-origin: 0 0;
                ${ct}
              }
            }
          `, cn = i.hideFromClone === true || Te === true ? "" : `
            @keyframes ${_e2}-from {
              0% {
                margin: ${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px;
                width: ${Q + u.marginH}px;
                height: ${le + u.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, Un = Te === true ? `
            margin: ${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px;
            width: ${Q + u.marginH}px;
            height: ${le + u.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, de = i.keepToClone === true ? "" : `
            @keyframes ${_e2}-to {
              0% {
                ${Un}
              }

              100% {
                margin: ${re < 0 ? re / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
                width: ${we + I.marginH}px;
                height: ${Ce + I.marginV}px;
              }
            }
          `;
        ke.innerHTML = `
          @keyframes ${_e2} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${x};
              border-color: ${_};
              border-radius: ${p};
              background-color: ${b};
              z-index: ${Ne};
              transform-origin: 0 0;
              ${Fe}
              ${Mt}
            }

            100% {
              margin: 0;
              border-width: ${G};
              border-style: ${be};
              border-color: ${O};
              border-radius: ${P};
              background-color: ${te};
              z-index: ${se};
              transform-origin: 0 0;
              transform: ${k};
              ${Ae}
              ${Yt}
            }
          }

          ${cn}

          ${co}

          ${de}
        `, document.head.appendChild(ke);
        let Se = "normal";
        D.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${Se} ${i.fill} ${_e2}-from`, $ !== void 0 && ($.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${Se} ${i.fill} ${_e2}-from-tween`), L.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${Se} ${i.fill} ${_e2}-to`, A.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${Se} ${i.fill} ${_e2}`;
        const Ve = (Oe) => {
          Oe === Object(Oe) && Oe.animationName !== _e2 || (A.removeEventListener("animationend", Ve), A.removeEventListener("animationcancel", Ve), ae(), ke.remove());
        };
        a.qMorphCancel = () => {
          a.qMorphCancel = void 0, n = true, Ve();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Ve();
        }, A.addEventListener("animationend", Ve), A.addEventListener("animationcancel", Ve), t = (Oe) => n === true || !A || !D || !L ? false : Oe === true ? (Ve(), true) : (o = o !== true, Se = Se === "normal" ? "reverse" : "normal", D.style.animationDirection = Se, $.style.animationDirection = Se, L.style.animationDirection = Se, A.style.animationDirection = Se, true);
      }
    };
    i.waitFor > 0 || i.waitFor === "transitionend" || i.waitFor === Object(i.waitFor) && typeof i.waitFor.then == "function" ? (i.waitFor > 0 ? new Promise((ye) => setTimeout(ye, i.waitFor)) : i.waitFor === "transitionend" ? new Promise((ye) => {
      const Y = () => {
        L !== null && (clearTimeout(L), L = null), A && (A.removeEventListener("transitionend", Y), A.removeEventListener("transitioncancel", Y)), ye();
      };
      let L = setTimeout(Y, 400);
      A.addEventListener("transitionend", Y), A.addEventListener("transitioncancel", Y);
    }) : i.waitFor).then(K).catch(() => {
      typeof A.qMorphCancel == "function" && A.qMorphCancel();
    }) : K();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(M), (A) => t(A);
}
var kl = {}, Bx = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], Rx = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function qr(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function s0(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, qr(t, "remove"), qr(n, "remove");
  const o = Lx({ from: t.el, to: n.el, onToggle() {
    qr(t, "add"), qr(n, "remove");
  }, ...n.opts, onEnd(r, i) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, r, i), i !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), s0(e));
  } });
  e.cancel = () => {
    o(true), e.cancel = void 0;
  };
}
function u0(e, t) {
  const n = t.opts;
  Rx.forEach((o) => {
    n[o] = e[o] === true;
  });
}
function Px(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function Dx(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  Bx.forEach((o) => {
    e[o] !== void 0 && (n[o] = e[o]);
  });
}
function Ox(e, t) {
  if (t.name === e) {
    const n = kl[t.group];
    n === void 0 ? (kl[t.group] = { name: t.group, model: e, queue: [t], animating: false }, qr(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && s0(n));
    return;
  }
  t.animating === false && qr(t, "add");
}
function ev(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, Dx(t, e), u0(t, e)) : n = "" + t, n !== e.model ? (e.model = n, Ox(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Vn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  u0(t.modifiers, n), Px(t.arg, n), ev(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  ev(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = kl[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((r) => r !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete kl[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var Vx = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function tv(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((o) => {
    typeof t.handler == "function" && (t.handler(o) === false || t.once === true) && c0(e);
  }), t.observer.observe(e, t.opts);
}
function c0(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
Vn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: o }) {
  const r = { once: t, opts: Object.keys(n).length === 0 ? Vx : n };
  tv(e, r, o), e.__qmutation = r;
}, updated(e, { oldValue: t, value: n }) {
  const o = e.__qmutation;
  o !== void 0 && t !== n && tv(e, o, n);
}, beforeUnmount: c0 });
var { passive: Ml } = ht;
function nv(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Ml);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Ml), e.scroll());
}
Vn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: jn(e), scroll: Kr(() => {
    let o, r;
    n.scrollTarget === window ? (r = e.getBoundingClientRect().bottom, o = window.innerHeight) : (r = hl(e).top + zr(e), o = hl(n.scrollTarget).top + zr(n.scrollTarget)), r > 0 && r < o && (n.scrollTarget.removeEventListener("scroll", n.scroll, Ml), n.handler(e));
  }, 25) };
  nv(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && nv(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Ml), t.scroll.cancel(), delete e.__qscrollfire;
} });
function ov(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, ht.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, ht.passive);
}
Vn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: jn(e), scroll() {
    n.handler(Lo(n.scrollTarget), Kl(n.scrollTarget));
  } };
  ov(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && ov(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, ht.passive), delete e.__qscroll;
} });
Vn({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && ze.has.touch !== true) return;
  const o = { handler: t.value, noop: Tt, mouseStart(i) {
    typeof o.handler == "function" && Nl(i) === true && (Et(o, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), o.start(i, true));
  }, touchStart(i) {
    if (i.target !== void 0 && typeof o.handler == "function") {
      const a = i.target;
      Et(o, "temp", [[a, "touchmove", "move", "passiveCapture"], [a, "touchcancel", "end", "notPassiveCapture"], [a, "touchend", "end", "notPassiveCapture"]]), o.start(i);
    }
  }, start(i, a) {
    o.origin = an(i);
    const l = Date.now();
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Pn(), o.styleCleanup = (s) => {
      o.styleCleanup = void 0;
      const d = () => {
        document.body.classList.remove("non-selectable");
      };
      s === true ? (Pn(), setTimeout(d, 10)) : d();
    }), o.triggered = false, o.sensitivity = a === true ? o.mouseSensitivity : o.touchSensitivity, o.timer = setTimeout(() => {
      o.timer = void 0, Pn(), o.triggered = true, o.handler({ evt: i, touch: a !== true, mouse: a === true, position: o.origin, duration: Date.now() - l });
    }, o.duration);
  }, move(i) {
    const { top: a, left: l } = an(i);
    o.timer !== void 0 && (Math.abs(l - o.origin.left) >= o.sensitivity || Math.abs(a - o.origin.top) >= o.sensitivity) && (clearTimeout(o.timer), o.timer = void 0);
  }, end(i) {
    var _a3;
    Zt(o, "temp"), (_a3 = o.styleCleanup) == null ? void 0 : _a3.call(o, o.triggered), o.triggered === true ? i !== void 0 && Ke(i) : o.timer !== void 0 && (clearTimeout(o.timer), o.timer = void 0);
  } }, r = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((i, a) => {
    const l = parseInt(i, 10);
    l && (r[a] = l);
  }), [o.duration, o.touchSensitivity, o.mouseSensitivity] = r, e.__qtouchhold = o, n.mouse === true) {
    const i = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(o, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  ze.has.touch === true && Et(o, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchhold;
  t !== void 0 && (Zt(t, "main"), Zt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var d0 = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, Fx = new RegExp(`^([\\d+]+|${Object.keys(d0).join("|")})$`, "i");
function $x(e, t) {
  const { top: n, left: o } = an(e);
  return Math.abs(o - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Vn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: o }) {
  const r = Object.keys(t).reduce((s, d) => {
    if (Fx.test(d) === true) {
      const c = isNaN(parseInt(d, 10)) ? d0[d.toLowerCase()] : parseInt(d, 10);
      c >= 0 && s.push(c);
    }
    return s;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && r.length === 0) return;
  const i = typeof o == "string" && o.length !== 0 ? o.split(":").map((s) => parseInt(s, 10)) : [0, 600, 300], a = i.length - 1, l = { keyboard: r, handler: n, noop: Tt, mouseStart(s) {
    l.event === void 0 && typeof l.handler == "function" && Nl(s) === true && (Et(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(s, true));
  }, keyboardStart(s) {
    if (typeof l.handler == "function" && Cn(s, r) === true) {
      if ((i[0] === 0 || l.event !== void 0) && (Ke(s), e.focus(), l.event !== void 0)) return;
      Et(l, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(s, false, true);
    }
  }, touchStart(s) {
    if (s.target !== void 0 && typeof l.handler == "function") {
      const d = s.target;
      Et(l, "temp", [[d, "touchmove", "move", "passiveCapture"], [d, "touchcancel", "end", "notPassiveCapture"], [d, "touchend", "end", "notPassiveCapture"]]), l.start(s);
    }
  }, start(s, d, c) {
    c !== true && (l.origin = an(s));
    function f(u) {
      l.styleCleanup = void 0, document.documentElement.style.cursor = "";
      const g = () => {
        document.body.classList.remove("non-selectable");
      };
      u === true ? (Pn(), setTimeout(g, 10)) : g();
    }
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Pn(), l.styleCleanup = f), l.event = { touch: d !== true && c !== true, mouse: d === true, keyboard: c === true, startTime: Date.now(), repeatCount: 0 };
    const v = () => {
      if (l.timer = void 0, l.event === void 0) return;
      l.event.repeatCount === 0 && (l.event.evt = s, c === true ? l.event.keyCode = s.keyCode : l.event.position = an(s), ze.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Pn(), l.styleCleanup = f)), l.event.duration = Date.now() - l.event.startTime, l.event.repeatCount += 1, l.handler(l.event);
      const u = a < l.event.repeatCount ? a : l.event.repeatCount;
      l.timer = setTimeout(v, i[u]);
    };
    i[0] === 0 ? v() : l.timer = setTimeout(v, i[0]);
  }, move(s) {
    l.event !== void 0 && l.timer !== void 0 && $x(s, l.origin) === true && (clearTimeout(l.timer), l.timer = void 0);
  }, end(s) {
    var _a3;
    l.event !== void 0 && ((_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l, true), s !== void 0 && l.event.repeatCount > 0 && Ke(s), Zt(l, "temp"), l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0), l.event = void 0);
  } };
  if (e.__qtouchrepeat = l, t.mouse === true) {
    const s = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    Et(l, "main", [[e, "mousedown", "mouseStart", `passive${s}`]]);
  }
  if (ze.has.touch === true && Et(l, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), r.length !== 0) {
    const s = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    Et(l, "main", [[e, "keydown", "keyboardStart", `notPassive${s}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const o = e.__qtouchrepeat;
  o !== void 0 && t !== n && (typeof n != "function" && o.end(), o.handler = n);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Zt(t, "main"), Zt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function Ix(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var Da;
function Nx() {
  return ze.is.winphone ? "msapplication-navbutton-color" : ze.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function zx(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function Hx(e) {
  Da === void 0 && (Da = Nx());
  let t = zx(Da);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", Da)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
ze.is.mobile === true && (ze.is.nativeMobile === true || ze.is.winphone === true || ze.is.safari === true || ze.is.webkit === true || ze.is.vivaldi);
var ai = {};
function jx(e) {
  Object.assign(Xt, { request: e, exit: e, toggle: e });
}
function f0() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function v0() {
  const e = Xt.activeEl = Xt.isActive === false ? null : f0();
  w1(e === null || e === document.documentElement ? document.body : e);
}
function Ux() {
  Xt.isActive = Xt.isActive === false, v0();
}
function rv(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Xt = Vo({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
ai.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Xt.isCapable = ai.request !== void 0, Xt.isCapable === false ? jx(() => Promise.reject("Not capable")) : (Object.assign(Xt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Xt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Xt.exit() : Promise.resolve()).finally(() => rv(t, ai.request));
}, exit() {
  return Xt.isActive === true ? rv(document, ai.exit) : Promise.resolve();
}, toggle(e) {
  return Xt.isActive === true ? Xt.exit() : Xt.request(e);
} }), ai.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Xt.isActive = !!f0(), Xt.isActive === true && v0(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = Ux;
}));
var Qx = Vo({ appVisible: true }, { install({ $q: e }) {
  It(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Qx.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
ge({ name: "BottomSheetComponent", props: { ...ot, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), o = rt(e, n.$q), r = H(null);
  function i() {
    r.value.show();
  }
  function a() {
    r.value.hide();
  }
  function l(u) {
    t("ok", u), a();
  }
  function s() {
    t("hide");
  }
  function d() {
    return e.actions.map((u) => {
      const g = u.avatar || u.img;
      return u.label === void 0 ? h(ur, { class: "col-all", dark: o.value }) : h("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", u.class], style: u.style, tabindex: 0, role: "listitem", onClick() {
        l(u);
      }, onKeyup(y) {
        y.keyCode === 13 && l(u);
      } }, [h("div", { class: "q-focus-helper" }), u.icon ? h(tt, { name: u.icon, color: u.color }) : g ? h("img", { class: u.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : h("div", { class: "q-bottom-sheet__empty-icon" }), h("div", u.label)]);
    });
  }
  function c() {
    return e.actions.map((u) => {
      const g = u.avatar || u.img;
      return u.label === void 0 ? h(ur, { spaced: true, dark: o.value }) : h(jr, { class: ["q-bottom-sheet__item", u.classes], style: u.style, tabindex: 0, clickable: true, dark: o.value, onClick() {
        l(u);
      } }, () => [h(yn, { avatar: true }, () => u.icon ? h(tt, { name: u.icon, color: u.color }) : g ? h("img", { class: u.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), h(yn, () => u.label)]);
    });
  }
  function f() {
    const u = [];
    return e.title && u.push(h(Jo, { class: "q-dialog__title" }, () => e.title)), e.message && u.push(h(Jo, { class: "q-dialog__message" }, () => e.message)), u.push(e.grid === true ? h("div", { class: "row items-stretch justify-start", role: "list" }, d()) : h("div", { role: "list" }, c())), u;
  }
  function v() {
    return [h(eg, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (o.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: i, hide: a }), () => h(Gl, { ref: r, position: "bottom", onHide: s }, v);
} });
function h0(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, h0(e[n], t[n])) : e[n] = t[n];
}
function Kx(e, t, n) {
  return (o) => {
    let r, i;
    const a = o.component !== void 0;
    if (a === true) {
      const { component: _, componentProps: p } = o;
      r = typeof _ == "string" ? n.component(_) : _, i = p || {};
    } else {
      const { class: _, style: p, ...b } = o;
      r = e, i = b, _ !== void 0 && (b.cardClass = _), p !== void 0 && (b.cardStyle = p);
    }
    let l, s = false;
    const d = H(null), c = fa(false, "dialog"), f = (_) => {
      var _a3;
      if (((_a3 = d.value) == null ? void 0 : _a3[_]) !== void 0) {
        d.value[_]();
        return;
      }
      const p = l.$.subTree;
      if (p == null ? void 0 : p.component) {
        if (p.component.proxy && p.component.proxy[_]) {
          p.component.proxy[_]();
          return;
        }
        if (p.component.subTree && p.component.subTree.component && p.component.subTree.component.proxy && p.component.subTree.component.proxy[_]) {
          p.component.subTree.component.proxy[_]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, v = [], u = [], g = { onOk(_) {
      return v.push(_), g;
    }, onCancel(_) {
      return u.push(_), g;
    }, onDismiss(_) {
      return v.push(_), u.push(_), g;
    }, hide() {
      return f("hide"), g;
    }, update(_) {
      if (l !== null) {
        if (a === true) Object.assign(i, _);
        else {
          const { class: p, style: b, ...C } = _;
          p !== void 0 && (C.cardClass = p), b !== void 0 && (C.cardStyle = b), h0(i, C);
        }
        l.$forceUpdate();
      }
      return g;
    } }, y = (_) => {
      s = true, v.forEach((p) => {
        p(_);
      });
    }, w = () => {
      x.unmount(c), _c(c), x = null, l = null, s !== true && u.forEach((_) => {
        _();
      });
    };
    let x = Hl({ name: "QGlobalDialog", setup: () => () => h(r, { ...i, ref: d, onOk: y, onHide: w, onVnodeMounted(..._) {
      typeof i.onVnodeMounted == "function" && i.onVnodeMounted(..._), Qe(() => f("show"));
    } }) }, n);
    return l = x.mount(c), g;
  };
}
function m0(e) {
  return encodeURIComponent(e);
}
function g0(e) {
  return decodeURIComponent(e);
}
function Wx(e) {
  return m0(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Yx(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = g0(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function b0(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Gx(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), o = e.match(/(\d+)h/), r = e.match(/(\d+)m/), i = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), o && (t += o[1] * 36e5), r && (t += r[1] * 6e4), i && (t += i[1] * 1e3), t === 0 ? e : b0(t);
}
function p0(e, t, n = {}, o) {
  let r, i;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? r = n.expires.toUTCString() : typeof n.expires == "string" ? r = Gx(n.expires) : (i = parseFloat(n.expires), r = isNaN(i) === false ? b0(i * 864e5) : n.expires));
  const a = `${m0(e)}=${Wx(t)}`, l = [a, r !== void 0 ? "; Expires=" + r : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (o) {
    o.req.qCookies ? o.req.qCookies.push(l) : o.req.qCookies = [l], o.res.setHeader("Set-Cookie", o.req.qCookies);
    let s = o.req.headers.cookie || "";
    if (r !== void 0 && i < 0) {
      const d = ql(e, o);
      d !== void 0 && (s = s.replace(`${e}=${d}; `, "").replace(`; ${e}=${d}`, "").replace(`${e}=${d}`, ""));
    } else s = s ? `${a}; ${s}` : l;
    o.req.headers.cookie = s;
  } else document.cookie = l;
}
function ql(e, t) {
  const n = t ? t.req.headers : document, o = n.cookie ? n.cookie.split("; ") : [], r = o.length;
  let i = e ? null : {}, a = 0, l, s, d;
  for (; a < r; a++) if (l = o[a].split("="), s = g0(l.shift()), d = l.join("="), !e) i[s] = d;
  else if (e === s) {
    i = Yx(d);
    break;
  }
  return i;
}
function Xx(e, t, n) {
  p0(e, "", { expires: -1, ...t }, n);
}
function Jx(e, t) {
  return ql(e, t) !== null;
}
function y0(e) {
  return { get: (t) => ql(t, e), set: (t, n, o) => p0(t, n, o, e), has: (t) => Jx(t, e), remove: (t, n) => Xx(t, n, e), getAll: () => ql(null, e) };
}
var $c = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && ($c.parseSSR = (e) => {
  if (e !== void 0) return y0(e);
});
Object.assign($c, y0());
var Zx = $c, eC = ge({ name: "DialogPluginComponent", props: { ...ot, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: o } = n, r = rt(e, o), i = H(null), a = H(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), l = m(() => "q-dialog-plugin" + (r.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), s = m(() => e.color || (r.value === true ? "amber" : "primary")), d = m(() => e.progress === false ? null : Ot(e.progress) === true ? { component: e.progress.spinner || Tn, props: { color: e.progress.color || s.value } } : { component: Tn, props: { color: s.value } }), c = m(() => e.prompt !== void 0 || e.options !== void 0), f = m(() => {
    if (c.value !== true) return {};
    const { model: T, isValid: z, items: U, ...j } = e.prompt !== void 0 ? e.prompt : e.options;
    return j;
  }), v = m(() => Ot(e.ok) === true || e.ok === true ? o.lang.label.ok : e.ok), u = m(() => Ot(e.cancel) === true || e.cancel === true ? o.lang.label.cancel : e.cancel), g = m(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(a.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(a.value) !== true : false), y = m(() => ({ color: s.value, label: v.value, ripple: false, disable: g.value, ...Ot(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && c.value !== true || void 0, onClick: p })), w = m(() => ({ color: s.value, label: u.value, ripple: false, ...Ot(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && c.value !== true || void 0, onClick: b }));
  me(() => e.prompt && e.prompt.model, q), me(() => e.options && e.options.model, q);
  function x() {
    i.value.show();
  }
  function _() {
    i.value.hide();
  }
  function p() {
    t("ok", Je(a.value)), _();
  }
  function b() {
    _();
  }
  function C() {
    t("hide");
  }
  function q(T) {
    a.value = T;
  }
  function B(T) {
    g.value !== true && e.prompt.type !== "textarea" && Cn(T, 13) === true && p();
  }
  function V(T, z) {
    return e.html === true ? h(Jo, { class: T, innerHTML: z }) : h(Jo, { class: T }, () => z);
  }
  function R() {
    return [h(Qg, { color: s.value, dense: true, autofocus: true, dark: r.value, ...f.value, modelValue: a.value, "onUpdate:modelValue": q, onKeyup: B })];
  }
  function D() {
    return [h(sw, { color: s.value, options: e.options.items, dark: r.value, ...f.value, modelValue: a.value, "onUpdate:modelValue": q })];
  }
  function $() {
    const T = [];
    return e.cancel && T.push(h(et, w.value)), e.ok && T.push(h(et, y.value)), h($1, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => T);
  }
  function M() {
    const T = [];
    return e.title && T.push(V("q-dialog__title", e.title)), e.progress !== false && T.push(h(Jo, { class: "q-dialog__progress" }, () => h(d.value.component, d.value.props))), e.message && T.push(V("q-dialog__message", e.message)), e.prompt !== void 0 ? T.push(h(Jo, { class: "scroll q-dialog-plugin__form" }, R)) : e.options !== void 0 && T.push(h(ur, { dark: r.value }), h(Jo, { class: "scroll q-dialog-plugin__form" }, D), h(ur, { dark: r.value })), (e.ok || e.cancel) && T.push($()), T;
  }
  function A() {
    return [h(eg, { class: [l.value, e.cardClass], style: e.cardStyle, dark: r.value }, M)];
  }
  return Object.assign(n, { show: x, hide: _ }), () => h(Gl, { ref: i, onHide: C }, A);
} }), tC = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Kx(eC, true, t);
} }, Sr, js, iv = 0, Uo = null, Ht = {}, er = {}, _0 = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: Tn, customClass: "" }, w0 = { ..._0 };
function nC(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && er[e.group] !== void 0) return Object.assign(er[e.group], e);
  const t = Ot(e) === true && e.ignoreDefaults === true ? { ..._0, ...e } : { ...w0, ...e };
  return er[t.group] = t, t;
}
var Mn = Vo({ isActive: false }, { show(e) {
  Ht = nC(e);
  const { group: t } = Ht;
  return Mn.isActive = true, Sr !== void 0 ? (Ht.uid = iv, js.$forceUpdate()) : (Ht.uid = ++iv, Uo !== null && clearTimeout(Uo), Uo = setTimeout(() => {
    Uo = null;
    const n = fa("q-loading");
    Sr = Hl({ name: "QLoading", setup() {
      st(() => {
        Ru(true);
      });
      function o() {
        Mn.isActive !== true && Sr !== void 0 && (Ru(false), Sr.unmount(n), _c(n), Sr = void 0, js = void 0);
      }
      function r() {
        if (Mn.isActive !== true) return null;
        const i = [h(Ht.spinner, { class: "q-loading__spinner", color: Ht.spinnerColor, size: Ht.spinnerSize })];
        return Ht.message && i.push(h("div", { class: "q-loading__message" + (Ht.messageColor ? ` text-${Ht.messageColor}` : ""), [Ht.html === true ? "innerHTML" : "textContent"]: Ht.message })), h("div", { class: "q-loading fullscreen flex flex-center z-max " + Ht.customClass.trim(), key: Ht.uid }, [h("div", { class: "q-loading__backdrop" + (Ht.backgroundColor ? ` bg-${Ht.backgroundColor}` : "") }), h("div", { class: "q-loading__box column items-center " + Ht.boxClass }, i)]);
      }
      return () => h($t, { name: "q-transition--fade", appear: true, onAfterLeave: o }, r);
    } }, Mn.__parentApp), js = Sr.mount(n);
  }, Ht.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Mn.hide(t);
      return;
    }
    Mn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Mn.isActive === true) {
    if (e === void 0) er = {};
    else {
      if (er[e] === void 0) return;
      {
        delete er[e];
        const t = Object.keys(er);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Mn.show({ group: n });
          return;
        }
      }
    }
    Uo !== null && (clearTimeout(Uo), Uo = null), Mn.isActive = false;
  }
}, setDefaults(e) {
  Ot(e) === true && Object.assign(w0, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Mn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), oC = Mn, Oa = H(null), av = Vo({ isActive: false }, { start: Tt, stop: Tt, increment: Tt, setDefaults: Tt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = H(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function o() {
    av.isActive = true;
  }
  function r() {
    av.isActive = false;
  }
  const i = fa("q-loading-bar");
  Hl({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => h(Jy, { ...n.value, onStart: o, onStop: r, ref: Oa }) }, t).mount(i), Object.assign(this, { start(a) {
    Oa.value.start(a);
  }, stop() {
    Oa.value.stop();
  }, increment() {
    Oa.value.increment.apply(null, arguments);
  }, setDefaults(a) {
    Ot(a) === true && Object.assign(n.value, a);
  } });
} }), rC = 0, Ka = {}, Wa = {}, qn = {}, x0 = {}, iC = /^\s*$/, C0 = [], aC = [void 0, null, true, false, ""], Ic = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], lC = ["top-left", "top-right", "bottom-left", "bottom-right"], Ti = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function S0(e, t, n) {
  var _a3;
  if (!e) return li("parameter required");
  let o;
  const r = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(r, Ka), Ot(e) === false && (r.type && Object.assign(r, Ti[r.type]), e = { message: e }), Object.assign(r, Ti[e.type || r.type], e), typeof r.icon == "function" && (r.icon = r.icon(t)), r.spinner ? (r.spinner === true && (r.spinner = Tn), r.spinner = Bl(r.spinner)) : r.spinner = false, r.meta = { hasMedia: !!(r.spinner !== false || r.icon || r.avatar), hasText: lv(r.message) || lv(r.caption) }, r.position) {
    if (Ic.includes(r.position) === false) return li("wrong position", e);
  } else r.position = "bottom";
  if (aC.includes(r.timeout) === true) r.timeout = 5e3;
  else {
    const s = Number(r.timeout);
    if (isNaN(s) || s < 0) return li("wrong timeout", e);
    r.timeout = Number.isFinite(s) ? s : 0;
  }
  r.timeout === 0 ? r.progress = false : r.progress === true && (r.meta.progressClass = "q-notification__progress" + (r.progressClass ? ` ${r.progressClass}` : ""), r.meta.progressStyle = { animationDuration: `${r.timeout + 1e3}ms` });
  const i = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(Ka.actions) === true ? Ka.actions : []).concat(Array.isArray((_a3 = Ti[e.type]) == null ? void 0 : _a3.actions) === true ? Ti[e.type].actions : []), { closeBtn: a } = r;
  if (a && i.push({ label: typeof a == "string" ? a : t.lang.label.close }), r.actions = i.map(({ handler: s, noDismiss: d, ...c }) => ({ flat: true, ...c, onClick: typeof s == "function" ? () => {
    s(), d !== true && l();
  } : () => {
    l();
  } })), r.multiLine === void 0 && (r.multiLine = r.actions.length > 1), Object.assign(r.meta, { class: `q-notification row items-stretch q-notification--${r.multiLine === true ? "multi-line" : "standard"}` + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : "") + (r.classes !== void 0 ? ` ${r.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (r.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (r.multiLine === true ? "" : " col"), leftClass: r.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...r.attrs } }), r.group === false ? (r.group = void 0, r.meta.group = void 0) : ((r.group === void 0 || r.group === true) && (r.group = [r.message, r.caption, r.multiline].concat(r.actions.map((s) => `${s.label}*${s.icon}`)).join("|")), r.meta.group = r.group + "|" + r.position), r.actions.length === 0 ? r.actions = void 0 : r.meta.actionsClass = "q-notification__actions row items-center " + (r.multiLine === true ? "justify-end" : "col-auto") + (r.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), r.meta.uid = n.notif.meta.uid;
    const s = qn[r.position].value.indexOf(n.notif);
    qn[r.position].value[s] = r;
  } else {
    const s = Wa[r.meta.group];
    if (s === void 0) {
      if (r.meta.uid = rC++, r.meta.badge = 1, ["left", "right", "center"].indexOf(r.position) !== -1) qn[r.position].value.splice(Math.floor(qn[r.position].value.length / 2), 0, r);
      else {
        const d = r.position.indexOf("top") !== -1 ? "unshift" : "push";
        qn[r.position].value[d](r);
      }
      r.group !== void 0 && (Wa[r.meta.group] = r);
    } else {
      if (s.meta.timer && (clearTimeout(s.meta.timer), s.meta.timer = void 0), r.badgePosition !== void 0) {
        if (lC.includes(r.badgePosition) === false) return li("wrong badgePosition", e);
      } else r.badgePosition = `top-${r.position.indexOf("left") !== -1 ? "right" : "left"}`;
      r.meta.uid = s.meta.uid, r.meta.badge = s.meta.badge + 1, r.meta.badgeClass = `q-notification__badge q-notification__badge--${r.badgePosition}` + (r.badgeColor !== void 0 ? ` bg-${r.badgeColor}` : "") + (r.badgeTextColor !== void 0 ? ` text-${r.badgeTextColor}` : "") + (r.badgeClass ? ` ${r.badgeClass}` : "");
      const d = qn[r.position].value.indexOf(s);
      qn[r.position].value[d] = Wa[r.meta.group] = r;
    }
  }
  const l = () => {
    sC(r), o = void 0;
  };
  if (r.timeout > 0 && (r.meta.timer = setTimeout(() => {
    r.meta.timer = void 0, l();
  }, r.timeout + 1e3)), r.group !== void 0) return (s) => {
    s !== void 0 ? li("trying to update a grouped one which is forbidden", e) : l();
  };
  if (o = { dismiss: l, config: e, notif: r }, n !== void 0) {
    Object.assign(n, o);
    return;
  }
  return (s) => {
    if (o !== void 0) if (s === void 0) o.dismiss();
    else {
      const d = Object.assign({}, o.config, s, { group: false, position: r.position });
      S0(d, t, o);
    }
  };
}
function sC(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = qn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Wa[e.meta.group];
    const n = C0["" + e.meta.uid];
    if (n) {
      const { width: o, height: r } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = o, n.style.height = r;
    }
    qn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function lv(e) {
  return e != null && iC.test(e) !== true;
}
function li(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function uC() {
  return ge({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => h("div", { class: "q-notifications" }, Ic.map((e) => h(py, { key: e, class: x0[e], tag: "div", name: `q-notification--${e}` }, () => qn[e].value.map((t) => {
      const n = t.meta, o = [];
      if (n.hasMedia === true && (t.spinner !== false ? o.push(h(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? o.push(h(tt, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && o.push(h(Tu, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => h("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let i;
        const a = { class: "q-notification__message col" };
        if (t.html === true) a.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const l = [t.message];
          i = t.caption ? [h("div", l), h("div", { class: "q-notification__caption" }, [t.caption])] : l;
        }
        o.push(h("div", a, i));
      }
      const r = [h("div", { class: n.contentClass }, o)];
      return t.progress === true && r.push(h("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && r.push(h("div", { class: n.actionsClass }, t.actions.map((i) => h(et, i)))), n.badge > 1 && r.push(h("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), h("div", { ref: (i) => {
        C0["" + n.uid] = i;
      }, key: n.uid, class: n.class, ...n.attrs }, [h("div", { class: n.wrapperClass }, r)]);
    }))));
  } });
}
var cC = { setDefaults(e) {
  Ot(e) === true && Object.assign(Ka, e);
}, registerType(e, t) {
  Ot(t) === true && (Ti[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => S0(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Ic.forEach((o) => {
      qn[o] = H([]);
      const r = ["left", "center", "right"].includes(o) === true ? "center" : o.indexOf("top") !== -1 ? "top" : "bottom", i = o.indexOf("left") !== -1 ? "start" : o.indexOf("right") !== -1 ? "end" : "center", a = ["left", "right"].includes(o) ? `items-${o === "left" ? "start" : "end"} justify-center` : o === "center" ? "flex-center" : `items-${i}`;
      x0[o] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${a}`;
    });
    const n = fa("q-notify");
    Hl(uC(), t).mount(n);
  }
} };
function dC(e) {
  return xu(e) === true ? "__q_date|" + e.getTime() : jy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function fC(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8), o = e.substring(9);
  switch (n) {
    case "__q_date":
      const r = Number(o);
      return new Date(Number.isNaN(r) === true ? o : r);
    case "__q_expr":
      return new RegExp(o);
    case "__q_numb":
      return Number(o);
    case "__q_bool":
      return o === "1";
    case "__q_strn":
      return "" + o;
    case "__q_objt":
      return JSON.parse(o);
    default:
      return e;
  }
}
function T0() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: Tt, setItem: Tt, remove: Tt, removeItem: Tt, clear: Tt, isEmpty: () => true };
}
function k0(e) {
  const t = window[e + "Storage"], n = (a) => {
    const l = t.getItem(a);
    return l ? fC(l) : null;
  }, o = (a) => t.getItem(a) !== null, r = (a, l) => {
    t.setItem(a, dC(l));
  }, i = (a) => {
    t.removeItem(a);
  };
  return { has: o, hasItem: o, getLength: () => t.length, getItem: n, getIndex: (a) => a < t.length ? n(t.key(a)) : null, getKey: (a) => a < t.length ? t.key(a) : null, getAll: () => {
    let a;
    const l = {}, s = t.length;
    for (let d = 0; d < s; d++) a = t.key(d), l[a] = n(a);
    return l;
  }, getAllKeys: () => {
    const a = [], l = t.length;
    for (let s = 0; s < l; s++) a.push(t.key(s));
    return a;
  }, set: r, setItem: r, remove: i, removeItem: i, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var M0 = ze.has.webStorage === false ? T0() : k0("local"), vC = { install({ $q: e }) {
  e.localStorage = M0;
} };
Object.assign(vC, M0);
var q0 = ze.has.webStorage === false ? T0() : k0("session"), hC = { install({ $q: e }) {
  e.sessionStorage = q0;
} };
Object.assign(hC, q0);
var mC = ["ok", "hide"];
l0(mC);
function Nc() {
  return Lt(_m);
}
var gC = { version: "2.18.1", install: Qy, lang: zl, iconSet: ym };
function bC(e, t) {
  const n = ic("router-view");
  return ln(), Xo(n, { class: "view" });
}
const ma = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t) n[o] = r;
  return n;
}, pC = {}, yC = ma(pC, [["render", bC]]), _C = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", wC = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", xC = /* @__PURE__ */ zn({ __name: "Quasar", setup(e) {
  const t = Nc();
  let n = H(false), o = H(false), r = H(true);
  const i = "production";
  return (a, l) => {
    const s = ic("router-view"), d = lp("ripple");
    return ln(), Xo(Re(tw), { view: "hHh LpR fFf" }, { default: qt(() => [Ue(Re(z_), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: qt(() => [Ue(Re(Hf), null, { default: qt(() => [Ue(Re(et), { dense: "", flat: "", round: "", icon: "menu", onClick: l[0] || (l[0] = (c) => wt(n) ? n.value = !Re(n) : n = !Re(n)) }), Ue(Re(jf), null, { default: qt(() => [Ue(Re(Tu), null, { default: qt(() => l[10] || (l[10] = [$e("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), l[11] || (l[11] = ko("\xA0WebGL mtg"))]), _: 1 }), Re(t).dark.isActive ? (ln(), Xo(Re(et), { key: 0, dense: "", flat: "", round: "", icon: Re(wC), onClick: l[1] || (l[1] = (c) => Re(t).dark.set(false)) }, null, 8, ["icon"])) : fu("", true), Re(t).dark.isActive ? fu("", true) : (ln(), Xo(Re(et), { key: 1, dense: "", flat: "", round: "", icon: Re(_C), onClick: l[2] || (l[2] = (c) => Re(t).dark.set(true)) }, null, 8, ["icon"])), Ue(Re(et), { dense: "", flat: "", round: "", icon: "menu", onClick: l[3] || (l[3] = (c) => wt(o) ? o.value = !Re(o) : o = !Re(o)) })]), _: 1 })]), _: 1 }), Ue(Re(Cf), { modelValue: Re(n), "onUpdate:modelValue": l[8] || (l[8] = (c) => wt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: Re(r), overlay: "" }, { default: qt(() => [Ue(Re(vw), { class: "fit" }, { default: qt(() => [Ue(Re(Wg), { class: "menu-list padding" }, { default: qt(() => [hn((ln(), Xo(Re(jr), { clickable: "", onMouseover: l[4] || (l[4] = (c) => wt(r) ? r.value = false : r = false), onMouseout: l[5] || (l[5] = (c) => wt(r) ? r.value = true : r = true) }, { default: qt(() => [Ue(Re(yn), { avatar: "" }, { default: qt(() => [Ue(Re(tt), { name: "inbox" })]), _: 1 }), Ue(Re(yn), null, { default: qt(() => l[12] || (l[12] = [ko("inbox")])), _: 1 })]), _: 1 })), [[d]]), hn((ln(), Xo(Re(jr), { clickable: "", onMouseover: l[6] || (l[6] = (c) => wt(r) ? r.value = false : r = false), onMouseout: l[7] || (l[7] = (c) => wt(r) ? r.value = true : r = true) }, { default: qt(() => [Ue(Re(yn), { avatar: "" }, { default: qt(() => [Ue(Re(tt), { name: "login" })]), _: 1 }), Ue(Re(yn), null, { default: qt(() => l[13] || (l[13] = [ko("login")])), _: 1 })]), _: 1 })), [[d]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Ue(Re(Cf), { modelValue: Re(o), "onUpdate:modelValue": l[9] || (l[9] = (c) => wt(o) ? o.value = c : o = c), side: "right", bordered: "", overlay: "" }, { default: qt(() => l[14] || (l[14] = [ko("right")])), _: 1 }, 8, ["modelValue"]), Ue(Re(uw), null, { default: qt(() => [Ue(s)]), _: 1 }), Ue(Re(N_), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: qt(() => [Ue(Re(Hf), null, { default: qt(() => [Ue(Re(jf), { style: { "font-size": "1.0em" } }, { default: qt(() => [Ue(Re(Tu), { class: "q-mr-sm", size: "sm" }, { default: qt(() => l[15] || (l[15] = [$e("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), ko("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + jt(Re(i)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const kr = typeof document < "u";
function E0(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function CC(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && E0(e.default);
}
const dt = Object.assign;
function Us(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = On(r) ? r.map(e) : e(r);
  }
  return n;
}
const Ni = () => {
}, On = Array.isArray, A0 = /#/g, SC = /&/g, TC = /\//g, kC = /=/g, MC = /\?/g, L0 = /\+/g, qC = /%5B/g, EC = /%5D/g, B0 = /%5E/g, AC = /%60/g, R0 = /%7B/g, LC = /%7C/g, P0 = /%7D/g, BC = /%20/g;
function zc(e) {
  return encodeURI("" + e).replace(LC, "|").replace(qC, "[").replace(EC, "]");
}
function RC(e) {
  return zc(e).replace(R0, "{").replace(P0, "}").replace(B0, "^");
}
function Fu(e) {
  return zc(e).replace(L0, "%2B").replace(BC, "+").replace(A0, "%23").replace(SC, "%26").replace(AC, "`").replace(R0, "{").replace(P0, "}").replace(B0, "^");
}
function PC(e) {
  return Fu(e).replace(kC, "%3D");
}
function DC(e) {
  return zc(e).replace(A0, "%23").replace(MC, "%3F");
}
function OC(e) {
  return e == null ? "" : DC(e).replace(TC, "%2F");
}
function na(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const VC = /\/$/, FC = (e) => e.replace(VC, "");
function Qs(e, t, n = "/") {
  let o, r = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return l < s && l >= 0 && (s = -1), s > -1 && (o = t.slice(0, s), i = t.slice(s + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (o = o || t.slice(0, l), a = t.slice(l, t.length)), o = zC(o ?? t, n), { fullPath: o + (i && "?") + i + a, path: o, query: r, hash: na(a) };
}
function $C(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sv(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function IC(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Ur(t.matched[o], n.matched[r]) && D0(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Ur(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function D0(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!NC(e[n], t[n])) return false;
  return true;
}
function NC(e, t) {
  return On(e) ? uv(e, t) : On(t) ? uv(t, e) : e === t;
}
function uv(e, t) {
  return On(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function zC(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let i = n.length - 1, a, l;
  for (a = 0; a < o.length; a++) if (l = o[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return n.slice(0, i).join("/") + "/" + o.slice(a).join("/");
}
const mo = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var oa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(oa || (oa = {}));
var zi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(zi || (zi = {}));
function HC(e) {
  if (!e) if (kr) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), FC(e);
}
const jC = /^[^#]+#/;
function UC(e, t) {
  return e.replace(jC, "#") + t;
}
function QC(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return { behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0) };
}
const ts = () => ({ left: window.scrollX, top: window.scrollY });
function KC(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) return;
    t = QC(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function cv(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $u = /* @__PURE__ */ new Map();
function WC(e, t) {
  $u.set(e, t);
}
function YC(e) {
  const t = $u.get(e);
  return $u.delete(e), t;
}
let GC = () => location.protocol + "//" + location.host;
function O0(e, t) {
  const { pathname: n, search: o, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1, s = r.slice(l);
    return s[0] !== "/" && (s = "/" + s), sv(s, "");
  }
  return sv(n, e) + o + r;
}
function XC(e, t, n, o) {
  let r = [], i = [], a = null;
  const l = ({ state: v }) => {
    const u = O0(e, location), g = n.value, y = t.value;
    let w = 0;
    if (v) {
      if (n.value = u, t.value = v, a && a === g) {
        a = null;
        return;
      }
      w = y ? v.position - y.position : 0;
    } else o(u);
    r.forEach((x) => {
      x(n.value, g, { delta: w, type: oa.pop, direction: w ? w > 0 ? zi.forward : zi.back : zi.unknown });
    });
  };
  function s() {
    a = n.value;
  }
  function d(v) {
    r.push(v);
    const u = () => {
      const g = r.indexOf(v);
      g > -1 && r.splice(g, 1);
    };
    return i.push(u), u;
  }
  function c() {
    const { history: v } = window;
    v.state && v.replaceState(dt({}, v.state, { scroll: ts() }), "");
  }
  function f() {
    for (const v of i) v();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", c, { passive: true }), { pauseListeners: s, listen: d, destroy: f };
}
function dv(e, t, n, o = false, r = false) {
  return { back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: r ? ts() : null };
}
function JC(e) {
  const { history: t, location: n } = window, o = { value: O0(e, n) }, r = { value: t.state };
  r.value || i(o.value, { back: null, current: o.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function i(s, d, c) {
    const f = e.indexOf("#"), v = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + s : GC() + e + s;
    try {
      t[c ? "replaceState" : "pushState"](d, "", v), r.value = d;
    } catch (u) {
      console.error(u), n[c ? "replace" : "assign"](v);
    }
  }
  function a(s, d) {
    const c = dt({}, t.state, dv(r.value.back, s, r.value.forward, true), d, { position: r.value.position });
    i(s, c, true), o.value = s;
  }
  function l(s, d) {
    const c = dt({}, r.value, t.state, { forward: s, scroll: ts() });
    i(c.current, c, true);
    const f = dt({}, dv(o.value, s, null), { position: c.position + 1 }, d);
    i(s, f, false), o.value = s;
  }
  return { location: o, state: r, push: l, replace: a };
}
function ZC(e) {
  e = HC(e);
  const t = JC(e), n = XC(e, t.state, t.location, t.replace);
  function o(i, a = true) {
    a || n.pauseListeners(), history.go(i);
  }
  const r = dt({ location: "", base: e, go: o, createHref: UC.bind(null, e) }, t, n);
  return Object.defineProperty(r, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(r, "state", { enumerable: true, get: () => t.state.value }), r;
}
function eS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), ZC(e);
}
function tS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function V0(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const F0 = Symbol("");
var fv;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(fv || (fv = {}));
function Qr(e, t) {
  return dt(new Error(), { type: e, [F0]: true }, t);
}
function Yn(e, t) {
  return e instanceof Error && F0 in e && (t == null || !!(e.type & t));
}
const vv = "[^/]+?", nS = { sensitive: false, strict: false, start: true, end: true }, oS = /[.+*?^${}()[\]/\\]/g;
function rS(e, t) {
  const n = dt({}, nS, t), o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const d of e) {
    const c = d.length ? [] : [90];
    n.strict && !d.length && (r += "/");
    for (let f = 0; f < d.length; f++) {
      const v = d[f];
      let u = 40 + (n.sensitive ? 0.25 : 0);
      if (v.type === 0) f || (r += "/"), r += v.value.replace(oS, "\\$&"), u += 40;
      else if (v.type === 1) {
        const { value: g, repeatable: y, optional: w, regexp: x } = v;
        i.push({ name: g, repeatable: y, optional: w });
        const _ = x || vv;
        if (_ !== vv) {
          u += 10;
          try {
            new RegExp(`(${_})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${_}): ` + b.message);
          }
        }
        let p = y ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        f || (p = w && d.length < 2 ? `(?:/${p})` : "/" + p), w && (p += "?"), r += p, u += 20, w && (u += -8), y && (u += -20), _ === ".*" && (u += -50);
      }
      c.push(u);
    }
    o.push(c);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const a = new RegExp(r, n.sensitive ? "" : "i");
  function l(d) {
    const c = d.match(a), f = {};
    if (!c) return null;
    for (let v = 1; v < c.length; v++) {
      const u = c[v] || "", g = i[v - 1];
      f[g.name] = u && g.repeatable ? u.split("/") : u;
    }
    return f;
  }
  function s(d) {
    let c = "", f = false;
    for (const v of e) {
      (!f || !c.endsWith("/")) && (c += "/"), f = false;
      for (const u of v) if (u.type === 0) c += u.value;
      else if (u.type === 1) {
        const { value: g, repeatable: y, optional: w } = u, x = g in d ? d[g] : "";
        if (On(x) && !y) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const _ = On(x) ? x.join("/") : x;
        if (!_) if (w) v.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        c += _;
      }
    }
    return c || "/";
  }
  return { re: a, score: o, keys: i, parse: l, stringify: s };
}
function iS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function $0(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = iS(o[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (hv(o)) return 1;
    if (hv(r)) return -1;
  }
  return r.length - o.length;
}
function hv(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const aS = { type: 0, value: "" }, lS = /[a-zA-Z0-9_]/;
function sS(e) {
  if (!e) return [[]];
  if (e === "/") return [[aS]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(u) {
    throw new Error(`ERR (${n})/"${d}": ${u}`);
  }
  let n = 0, o = n;
  const r = [];
  let i;
  function a() {
    i && r.push(i), i = [];
  }
  let l = 0, s, d = "", c = "";
  function f() {
    d && (n === 0 ? i.push({ type: 0, value: d }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: 1, value: d, regexp: c, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), d = "");
  }
  function v() {
    d += s;
  }
  for (; l < e.length; ) {
    if (s = e[l++], s === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (d && f(), a()) : s === ":" ? (f(), n = 1) : v();
        break;
      case 4:
        v(), n = o;
        break;
      case 1:
        s === "(" ? n = 2 : lS.test(s) ? v() : (f(), n = 0, s !== "*" && s !== "?" && s !== "+" && l--);
        break;
      case 2:
        s === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + s : n = 3 : c += s;
        break;
      case 3:
        f(), n = 0, s !== "*" && s !== "?" && s !== "+" && l--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), f(), a(), r;
}
function uS(e, t, n) {
  const o = rS(sS(e.path), n), r = dt(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function cS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = pv({ strict: false, end: true, sensitive: false }, t);
  function r(f) {
    return o.get(f);
  }
  function i(f, v, u) {
    const g = !u, y = gv(f);
    y.aliasOf = u && u.record;
    const w = pv(t, f), x = [y];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of b) x.push(gv(dt({}, y, { components: u ? u.record.components : y.components, path: C, aliasOf: u ? u.record : y })));
    }
    let _, p;
    for (const b of x) {
      const { path: C } = b;
      if (v && C[0] !== "/") {
        const q = v.record.path, B = q[q.length - 1] === "/" ? "" : "/";
        b.path = v.record.path + (C && B + C);
      }
      if (_ = uS(b, v, w), u ? u.alias.push(_) : (p = p || _, p !== _ && p.alias.push(_), g && f.name && !bv(_) && a(f.name)), I0(_) && s(_), y.children) {
        const q = y.children;
        for (let B = 0; B < q.length; B++) i(q[B], _, u && u.children[B]);
      }
      u = u || _;
    }
    return p ? () => {
      a(p);
    } : Ni;
  }
  function a(f) {
    if (V0(f)) {
      const v = o.get(f);
      v && (o.delete(f), n.splice(n.indexOf(v), 1), v.children.forEach(a), v.alias.forEach(a));
    } else {
      const v = n.indexOf(f);
      v > -1 && (n.splice(v, 1), f.record.name && o.delete(f.record.name), f.children.forEach(a), f.alias.forEach(a));
    }
  }
  function l() {
    return n;
  }
  function s(f) {
    const v = vS(f, n);
    n.splice(v, 0, f), f.record.name && !bv(f) && o.set(f.record.name, f);
  }
  function d(f, v) {
    let u, g = {}, y, w;
    if ("name" in f && f.name) {
      if (u = o.get(f.name), !u) throw Qr(1, { location: f });
      w = u.record.name, g = dt(mv(v.params, u.keys.filter((p) => !p.optional).concat(u.parent ? u.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && mv(f.params, u.keys.map((p) => p.name))), y = u.stringify(g);
    } else if (f.path != null) y = f.path, u = n.find((p) => p.re.test(y)), u && (g = u.parse(y), w = u.record.name);
    else {
      if (u = v.name ? o.get(v.name) : n.find((p) => p.re.test(v.path)), !u) throw Qr(1, { location: f, currentLocation: v });
      w = u.record.name, g = dt({}, v.params, f.params), y = u.stringify(g);
    }
    const x = [];
    let _ = u;
    for (; _; ) x.unshift(_.record), _ = _.parent;
    return { name: w, path: y, params: g, matched: x, meta: fS(x) };
  }
  e.forEach((f) => i(f));
  function c() {
    n.length = 0, o.clear();
  }
  return { addRoute: i, resolve: d, removeRoute: a, clearRoutes: c, getRoutes: l, getRecordMatcher: r };
}
function mv(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function gv(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: dS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function dS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function bv(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function fS(e) {
  return e.reduce((t, n) => dt(t, n.meta), {});
}
function pv(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function vS(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const i = n + o >> 1;
    $0(e, t[i]) < 0 ? o = i : n = i + 1;
  }
  const r = hS(e);
  return r && (o = t.lastIndexOf(r, o - 1)), o;
}
function hS(e) {
  let t = e;
  for (; t = t.parent; ) if (I0(t) && $0(e, t) === 0) return t;
}
function I0({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function mS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(L0, " "), a = i.indexOf("="), l = na(a < 0 ? i : i.slice(0, a)), s = a < 0 ? null : na(i.slice(a + 1));
    if (l in t) {
      let d = t[l];
      On(d) || (d = t[l] = [d]), d.push(s);
    } else t[l] = s;
  }
  return t;
}
function yv(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = PC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (On(o) ? o.map((i) => i && Fu(i)) : [o && Fu(o)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function gS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = On(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const bS = Symbol(""), _v = Symbol(""), Hc = Symbol(""), N0 = Symbol(""), Iu = Symbol("");
function si() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function So(e, t, n, o, r, i = (a) => a()) {
  const a = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((l, s) => {
    const d = (v) => {
      v === false ? s(Qr(4, { from: n, to: t })) : v instanceof Error ? s(v) : tS(v) ? s(Qr(2, { from: t, to: v })) : (a && o.enterCallbacks[r] === a && typeof v == "function" && a.push(v), l());
    }, c = i(() => e.call(o && o.instances[r], t, n, d));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(d)), f.catch((v) => s(v));
  });
}
function Ks(e, t, n, o, r = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (E0(s)) {
      const c = (s.__vccOpts || s)[t];
      c && i.push(So(c, n, o, a, l, r));
    } else {
      let d = s();
      i.push(() => d.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const f = CC(c) ? c.default : c;
        a.mods[l] = c, a.components[l] = f;
        const u = (f.__vccOpts || f)[t];
        return u && So(u, n, o, a, l, r)();
      }));
    }
  }
  return i;
}
function wv(e) {
  const t = Lt(Hc), n = Lt(N0), o = m(() => {
    const s = Re(e.to);
    return t.resolve(s);
  }), r = m(() => {
    const { matched: s } = o.value, { length: d } = s, c = s[d - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const v = f.findIndex(Ur.bind(null, c));
    if (v > -1) return v;
    const u = xv(s[d - 2]);
    return d > 1 && xv(c) === u && f[f.length - 1].path !== u ? f.findIndex(Ur.bind(null, s[d - 2])) : v;
  }), i = m(() => r.value > -1 && xS(n.params, o.value.params)), a = m(() => r.value > -1 && r.value === n.matched.length - 1 && D0(n.params, o.value.params));
  function l(s = {}) {
    if (wS(s)) {
      const d = t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(Ni);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  return { route: o, href: m(() => o.value.href), isActive: i, isExactActive: a, navigate: l };
}
function pS(e) {
  return e.length === 1 ? e[0] : e;
}
const yS = /* @__PURE__ */ zn({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: wv, setup(e, { slots: t }) {
  const n = Nn(wv(e)), { options: o } = Lt(Hc), r = m(() => ({ [Cv(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive, [Cv(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const i = t.default && pS(t.default(n));
    return e.custom ? i : h("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: r.value }, i);
  };
} }), _S = yS;
function wS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function xS(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r) return false;
    } else if (!On(r) || r.length !== o.length || o.some((i, a) => i !== r[a])) return false;
  }
  return true;
}
function xv(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Cv = (e, t, n) => e ?? t ?? n, CS = /* @__PURE__ */ zn({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const o = Lt(Iu), r = m(() => e.route || o.value), i = Lt(_v, 0), a = m(() => {
    let d = Re(i);
    const { matched: c } = r.value;
    let f;
    for (; (f = c[d]) && !f.components; ) d++;
    return d;
  }), l = m(() => r.value.matched[a.value]);
  _n(_v, m(() => a.value + 1)), _n(bS, l), _n(Iu, r);
  const s = H();
  return me(() => [s.value, l.value, e.name], ([d, c, f], [v, u, g]) => {
    c && (c.instances[f] = d, u && u !== c && d && d === v && (c.leaveGuards.size || (c.leaveGuards = u.leaveGuards), c.updateGuards.size || (c.updateGuards = u.updateGuards))), d && c && (!u || !Ur(c, u) || !v) && (c.enterCallbacks[f] || []).forEach((y) => y(d));
  }, { flush: "post" }), () => {
    const d = r.value, c = e.name, f = l.value, v = f && f.components[c];
    if (!v) return Sv(n.default, { Component: v, route: d });
    const u = f.props[c], g = u ? u === true ? d.params : typeof u == "function" ? u(d) : u : null, w = h(v, dt({}, g, t, { onVnodeUnmounted: (x) => {
      x.component.isUnmounted && (f.instances[c] = null);
    }, ref: s }));
    return Sv(n.default, { Component: w, route: d }) || w;
  };
} });
function Sv(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const SS = CS;
function TS(e) {
  const t = cS(e.routes, e), n = e.parseQuery || mS, o = e.stringifyQuery || yv, r = e.history, i = si(), a = si(), l = si(), s = Ib(mo);
  let d = mo;
  kr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Us.bind(null, (P) => "" + P), f = Us.bind(null, OC), v = Us.bind(null, na);
  function u(P, te) {
    let k, F;
    return V0(P) ? (k = t.getRecordMatcher(P), F = te) : F = P, t.addRoute(F, k);
  }
  function g(P) {
    const te = t.getRecordMatcher(P);
    te && t.removeRoute(te);
  }
  function y() {
    return t.getRoutes().map((P) => P.record);
  }
  function w(P) {
    return !!t.getRecordMatcher(P);
  }
  function x(P, te) {
    if (te = dt({}, te || s.value), typeof P == "string") {
      const I = Qs(n, P, te.path), Z = t.resolve({ path: I.path }, te), oe = r.createHref(I.fullPath);
      return dt(I, Z, { params: v(Z.params), hash: na(I.hash), redirectedFrom: void 0, href: oe });
    }
    let k;
    if (P.path != null) k = dt({}, P, { path: Qs(n, P.path, te.path).path });
    else {
      const I = dt({}, P.params);
      for (const Z in I) I[Z] == null && delete I[Z];
      k = dt({}, P, { params: f(I) }), te.params = f(te.params);
    }
    const F = t.resolve(k, te), ee = P.hash || "";
    F.params = c(v(F.params));
    const S = $C(o, dt({}, P, { hash: RC(ee), path: F.path })), E = r.createHref(S);
    return dt({ fullPath: S, hash: ee, query: o === yv ? gS(P.query) : P.query || {} }, F, { redirectedFrom: void 0, href: E });
  }
  function _(P) {
    return typeof P == "string" ? Qs(n, P, s.value.path) : dt({}, P);
  }
  function p(P, te) {
    if (d !== P) return Qr(8, { from: te, to: P });
  }
  function b(P) {
    return B(P);
  }
  function C(P) {
    return b(dt(_(P), { replace: true }));
  }
  function q(P) {
    const te = P.matched[P.matched.length - 1];
    if (te && te.redirect) {
      const { redirect: k } = te;
      let F = typeof k == "function" ? k(P) : k;
      return typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = _(F) : { path: F }, F.params = {}), dt({ query: P.query, hash: P.hash, params: F.path != null ? {} : P.params }, F);
    }
  }
  function B(P, te) {
    const k = d = x(P), F = s.value, ee = P.state, S = P.force, E = P.replace === true, I = q(k);
    if (I) return B(dt(_(I), { state: typeof I == "object" ? dt({}, ee, I.state) : ee, force: S, replace: E }), te || k);
    const Z = k;
    Z.redirectedFrom = te;
    let oe;
    return !S && IC(o, F, k) && (oe = Qr(16, { to: Z, from: F }), Y(F, F, true, false)), (oe ? Promise.resolve(oe) : D(Z, F)).catch((W) => Yn(W) ? Yn(W, 2) ? W : ye(W) : K(W, Z, F)).then((W) => {
      if (W) {
        if (Yn(W, 2)) return B(dt({ replace: E }, _(W.to), { state: typeof W.to == "object" ? dt({}, ee, W.to.state) : ee, force: S }), te || Z);
      } else W = M(Z, F, true, E, ee);
      return $(Z, F, W), W;
    });
  }
  function V(P, te) {
    const k = p(P, te);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function R(P) {
    const te = G.values().next().value;
    return te && typeof te.runWithContext == "function" ? te.runWithContext(P) : P();
  }
  function D(P, te) {
    let k;
    const [F, ee, S] = kS(P, te);
    k = Ks(F.reverse(), "beforeRouteLeave", P, te);
    for (const I of F) I.leaveGuards.forEach((Z) => {
      k.push(So(Z, P, te));
    });
    const E = V.bind(null, P, te);
    return k.push(E), O(k).then(() => {
      k = [];
      for (const I of i.list()) k.push(So(I, P, te));
      return k.push(E), O(k);
    }).then(() => {
      k = Ks(ee, "beforeRouteUpdate", P, te);
      for (const I of ee) I.updateGuards.forEach((Z) => {
        k.push(So(Z, P, te));
      });
      return k.push(E), O(k);
    }).then(() => {
      k = [];
      for (const I of S) if (I.beforeEnter) if (On(I.beforeEnter)) for (const Z of I.beforeEnter) k.push(So(Z, P, te));
      else k.push(So(I.beforeEnter, P, te));
      return k.push(E), O(k);
    }).then(() => (P.matched.forEach((I) => I.enterCallbacks = {}), k = Ks(S, "beforeRouteEnter", P, te, R), k.push(E), O(k))).then(() => {
      k = [];
      for (const I of a.list()) k.push(So(I, P, te));
      return k.push(E), O(k);
    }).catch((I) => Yn(I, 8) ? I : Promise.reject(I));
  }
  function $(P, te, k) {
    l.list().forEach((F) => R(() => F(P, te, k)));
  }
  function M(P, te, k, F, ee) {
    const S = p(P, te);
    if (S) return S;
    const E = te === mo, I = kr ? history.state : {};
    k && (F || E ? r.replace(P.fullPath, dt({ scroll: E && I && I.scroll }, ee)) : r.push(P.fullPath, ee)), s.value = P, Y(P, te, k, E), ye();
  }
  let A;
  function T() {
    A || (A = r.listen((P, te, k) => {
      if (!be.listening) return;
      const F = x(P), ee = q(F);
      if (ee) {
        B(dt(ee, { replace: true, force: true }), F).catch(Ni);
        return;
      }
      d = F;
      const S = s.value;
      kr && WC(cv(S.fullPath, k.delta), ts()), D(F, S).catch((E) => Yn(E, 12) ? E : Yn(E, 2) ? (B(dt(_(E.to), { force: true }), F).then((I) => {
        Yn(I, 20) && !k.delta && k.type === oa.pop && r.go(-1, false);
      }).catch(Ni), Promise.reject()) : (k.delta && r.go(-k.delta, false), K(E, F, S))).then((E) => {
        E = E || M(F, S, false), E && (k.delta && !Yn(E, 8) ? r.go(-k.delta, false) : k.type === oa.pop && Yn(E, 20) && r.go(-1, false)), $(F, S, E);
      }).catch(Ni);
    }));
  }
  let z = si(), U = si(), j;
  function K(P, te, k) {
    ye(P);
    const F = U.list();
    return F.length ? F.forEach((ee) => ee(P, te, k)) : console.error(P), Promise.reject(P);
  }
  function ie() {
    return j && s.value !== mo ? Promise.resolve() : new Promise((P, te) => {
      z.add([P, te]);
    });
  }
  function ye(P) {
    return j || (j = !P, T(), z.list().forEach(([te, k]) => P ? k(P) : te()), z.reset()), P;
  }
  function Y(P, te, k, F) {
    const { scrollBehavior: ee } = e;
    if (!kr || !ee) return Promise.resolve();
    const S = !k && YC(cv(P.fullPath, 0)) || (F || !k) && history.state && history.state.scroll || null;
    return Qe().then(() => ee(P, te, S)).then((E) => E && KC(E)).catch((E) => K(E, P, te));
  }
  const L = (P) => r.go(P);
  let ne;
  const G = /* @__PURE__ */ new Set(), be = { currentRoute: s, listening: true, addRoute: u, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: y, resolve: x, options: e, push: b, replace: C, go: L, back: () => L(-1), forward: () => L(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: U.add, isReady: ie, install(P) {
    const te = this;
    P.component("RouterLink", _S), P.component("RouterView", SS), P.config.globalProperties.$router = te, Object.defineProperty(P.config.globalProperties, "$route", { enumerable: true, get: () => Re(s) }), kr && !ne && s.value === mo && (ne = true, b(r.location).catch((ee) => {
    }));
    const k = {};
    for (const ee in mo) Object.defineProperty(k, ee, { get: () => s.value[ee], enumerable: true });
    P.provide(Hc, te), P.provide(N0, ec(k)), P.provide(Iu, s);
    const F = P.unmount;
    G.add(P), P.unmount = function() {
      G.delete(P), G.size < 1 && (d = mo, A && A(), A = null, s.value = mo, ne = false, j = false), F();
    };
  } };
  function O(P) {
    return P.reduce((te, k) => te.then(() => R(k)), Promise.resolve());
  }
  return be;
}
function kS(e, t) {
  const n = [], o = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((d) => Ur(d, l)) ? o.push(l) : n.push(l));
    const s = e.matched[a];
    s && (t.matched.find((d) => Ur(d, s)) || r.push(s));
  }
  return [n, o, r];
}
let it;
const z0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && z0.decode();
let ki = null;
function Ya() {
  return (ki === null || ki.byteLength === 0) && (ki = new Uint8Array(it.memory.buffer)), ki;
}
function Ws(e, t) {
  return e = e >>> 0, z0.decode(Ya().subarray(e, e + t));
}
function MS(e) {
  const t = it.__externref_table_alloc();
  return it.__wbindgen_export_2.set(t, e), t;
}
function qS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const o = MS(n);
    it.__wbindgen_exn_store(o);
  }
}
function ES(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let o = function() {
      try {
        return n instanceof Error ? `${n.message}

Stack:
${n.stack}` : n.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", o), n;
  }
}
function Qo(e) {
  if (typeof e != "number") throw new Error(`expected a number argument, found ${typeof e}`);
}
let Mi = null;
function AS() {
  return (Mi === null || Mi.byteLength === 0) && (Mi = new Float32Array(it.memory.buffer)), Mi;
}
function Va(e, t) {
  return e = e >>> 0, AS().subarray(e / 4, e / 4 + t);
}
let qi = null;
function LS() {
  return (qi === null || qi.byteLength === 0) && (qi = new Uint32Array(it.memory.buffer)), qi;
}
function Ys(e, t) {
  return e = e >>> 0, LS().subarray(e / 4, e / 4 + t);
}
let Nu = 0;
const Ga = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, BS = typeof Ga.encodeInto == "function" ? function(e, t) {
  return Ga.encodeInto(e, t);
} : function(e, t) {
  const n = Ga.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function RS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const l = Ga.encode(e), s = t(l.length, 1) >>> 0;
    return Ya().subarray(s, s + l.length).set(l), Nu = l.length, s;
  }
  let o = e.length, r = t(o, 1) >>> 0;
  const i = Ya();
  let a = 0;
  for (; a < o; a++) {
    const l = e.charCodeAt(a);
    if (l > 127) break;
    i[r + a] = l;
  }
  if (a !== o) {
    a !== 0 && (e = e.slice(a)), r = n(r, o, o = a + e.length * 3, 1) >>> 0;
    const l = Ya().subarray(r + a, r + o), s = BS(e, l);
    if (s.read !== e.length) throw new Error("failed to pass whole string");
    a += s.written, r = n(r, o, a, 1) >>> 0;
  }
  return Nu = a, r;
}
function PS(e) {
  const t = it.__wbindgen_export_2.get(e);
  return it.__externref_table_dealloc(e), t;
}
function DS(e) {
  const t = RS(e, it.__wbindgen_malloc, it.__wbindgen_realloc), n = Nu, o = it.mtg(t, n);
  if (o[1]) throw PS(o[0]);
}
function OS() {
  const e = it.hex_mesh();
  return jc.__wrap(e);
}
const Tv = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => it.__wbg_meshobj_free(e >>> 0, 1));
class jc {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(jc.prototype);
    return n.__wbg_ptr = t, Tv.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Tv.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    it.__wbg_meshobj_free(t, 0);
  }
  get_pos() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_pos(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_color() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_color(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_tex() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_tex(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_norm() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_norm(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_ndx() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_ndx(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_offset() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_offset(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_len() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Qo(this.__wbg_ptr);
    const t = it.meshobj_get_len(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
}
async function VS(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (o) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function FS() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return qS(function(t, n) {
      cb(Ws(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return ES(function(t, n) {
      log(Ws(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = it.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(Ws(t, n));
  }, e;
}
function $S(e, t) {
  return it = e.exports, H0.__wbindgen_wasm_module = t, Mi = null, qi = null, ki = null, it.__wbindgen_start(), it;
}
async function H0(e) {
  if (it !== void 0) return it;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BvPRyJ6K.wasm", import.meta.url).href, import.meta.url));
  const t = FS();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: o } = await VS(await e, t);
  return $S(n, o);
}
const IS = /* @__PURE__ */ zn({ __name: "HelloWorld", setup(e) {
  const t = () => {
    DS("test");
  };
  return (n, o) => {
    const r = ic("router-view");
    return ln(), lr(on, null, [Ue(Re(et), { class: "q-ma-lg", color: "primary", onClick: t }, { default: qt(() => o[0] || (o[0] = [ko("test")])), _: 1 }), Ue(r)], 64);
  };
} }), NS = ma(IS, [["__scopeId", "data-v-17fee452"]]);
var zS = 1e-6, kv = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function Mo() {
  var e = new kv(16);
  return kv != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function HS(e, t, n, o, r, i, a, l, s, d, c, f, v, u, g, y, w) {
  return e[0] = t, e[1] = n, e[2] = o, e[3] = r, e[4] = i, e[5] = a, e[6] = l, e[7] = s, e[8] = d, e[9] = c, e[10] = f, e[11] = v, e[12] = u, e[13] = g, e[14] = y, e[15] = w, e;
}
function Gs(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function j0(e, t) {
  if (e === t) {
    var n = t[1], o = t[2], r = t[3], i = t[6], a = t[7], l = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = o, e[9] = i, e[11] = t[14], e[12] = r, e[13] = a, e[14] = l;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function U0(e, t) {
  var n = t[0], o = t[1], r = t[2], i = t[3], a = t[4], l = t[5], s = t[6], d = t[7], c = t[8], f = t[9], v = t[10], u = t[11], g = t[12], y = t[13], w = t[14], x = t[15], _ = n * l - o * a, p = n * s - r * a, b = n * d - i * a, C = o * s - r * l, q = o * d - i * l, B = r * d - i * s, V = c * y - f * g, R = c * w - v * g, D = c * x - u * g, $ = f * w - v * y, M = f * x - u * y, A = v * x - u * w, T = _ * A - p * M + b * $ + C * D - q * R + B * V;
  return T ? (T = 1 / T, e[0] = (l * A - s * M + d * $) * T, e[1] = (r * M - o * A - i * $) * T, e[2] = (y * B - w * q + x * C) * T, e[3] = (v * q - f * B - u * C) * T, e[4] = (s * D - a * A - d * R) * T, e[5] = (n * A - r * D + i * R) * T, e[6] = (w * b - g * B - x * p) * T, e[7] = (c * B - v * b + u * p) * T, e[8] = (a * M - l * D + d * V) * T, e[9] = (o * D - n * M - i * V) * T, e[10] = (g * q - y * b + x * _) * T, e[11] = (f * b - c * q - u * _) * T, e[12] = (l * R - a * $ - s * V) * T, e[13] = (n * $ - o * R + r * V) * T, e[14] = (y * p - g * C - w * _) * T, e[15] = (c * C - f * p + v * _) * T, e) : null;
}
function jS(e, t, n) {
  var o = t[0], r = t[1], i = t[2], a = t[3], l = t[4], s = t[5], d = t[6], c = t[7], f = t[8], v = t[9], u = t[10], g = t[11], y = t[12], w = t[13], x = t[14], _ = t[15], p = n[0], b = n[1], C = n[2], q = n[3];
  return e[0] = p * o + b * l + C * f + q * y, e[1] = p * r + b * s + C * v + q * w, e[2] = p * i + b * d + C * u + q * x, e[3] = p * a + b * c + C * g + q * _, p = n[4], b = n[5], C = n[6], q = n[7], e[4] = p * o + b * l + C * f + q * y, e[5] = p * r + b * s + C * v + q * w, e[6] = p * i + b * d + C * u + q * x, e[7] = p * a + b * c + C * g + q * _, p = n[8], b = n[9], C = n[10], q = n[11], e[8] = p * o + b * l + C * f + q * y, e[9] = p * r + b * s + C * v + q * w, e[10] = p * i + b * d + C * u + q * x, e[11] = p * a + b * c + C * g + q * _, p = n[12], b = n[13], C = n[14], q = n[15], e[12] = p * o + b * l + C * f + q * y, e[13] = p * r + b * s + C * v + q * w, e[14] = p * i + b * d + C * u + q * x, e[15] = p * a + b * c + C * g + q * _, e;
}
function Xa(e, t, n) {
  var o = n[0], r = n[1], i = n[2], a, l, s, d, c, f, v, u, g, y, w, x;
  return t === e ? (e[12] = t[0] * o + t[4] * r + t[8] * i + t[12], e[13] = t[1] * o + t[5] * r + t[9] * i + t[13], e[14] = t[2] * o + t[6] * r + t[10] * i + t[14], e[15] = t[3] * o + t[7] * r + t[11] * i + t[15]) : (a = t[0], l = t[1], s = t[2], d = t[3], c = t[4], f = t[5], v = t[6], u = t[7], g = t[8], y = t[9], w = t[10], x = t[11], e[0] = a, e[1] = l, e[2] = s, e[3] = d, e[4] = c, e[5] = f, e[6] = v, e[7] = u, e[8] = g, e[9] = y, e[10] = w, e[11] = x, e[12] = a * o + c * r + g * i + t[12], e[13] = l * o + f * r + y * i + t[13], e[14] = s * o + v * r + w * i + t[14], e[15] = d * o + u * r + x * i + t[15]), e;
}
function US(e, t, n) {
  var o = n[0], r = n[1], i = n[2];
  return e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o, e[3] = t[3] * o, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Xs(e, t, n, o) {
  var r = o[0], i = o[1], a = o[2], l = Math.hypot(r, i, a), s, d, c, f, v, u, g, y, w, x, _, p, b, C, q, B, V, R, D, $, M, A, T, z;
  return l < zS ? null : (l = 1 / l, r *= l, i *= l, a *= l, s = Math.sin(n), d = Math.cos(n), c = 1 - d, f = t[0], v = t[1], u = t[2], g = t[3], y = t[4], w = t[5], x = t[6], _ = t[7], p = t[8], b = t[9], C = t[10], q = t[11], B = r * r * c + d, V = i * r * c + a * s, R = a * r * c - i * s, D = r * i * c - a * s, $ = i * i * c + d, M = a * i * c + r * s, A = r * a * c + i * s, T = i * a * c - r * s, z = a * a * c + d, e[0] = f * B + y * V + p * R, e[1] = v * B + w * V + b * R, e[2] = u * B + x * V + C * R, e[3] = g * B + _ * V + q * R, e[4] = f * D + y * $ + p * M, e[5] = v * D + w * $ + b * M, e[6] = u * D + x * $ + C * M, e[7] = g * D + _ * $ + q * M, e[8] = f * A + y * T + p * z, e[9] = v * A + w * T + b * z, e[10] = u * A + x * T + C * z, e[11] = g * A + _ * T + q * z, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function QS(e, t, n) {
  var o = Math.sin(n), r = Math.cos(n), i = t[4], a = t[5], l = t[6], s = t[7], d = t[8], c = t[9], f = t[10], v = t[11];
  return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = i * r + d * o, e[5] = a * r + c * o, e[6] = l * r + f * o, e[7] = s * r + v * o, e[8] = d * r - i * o, e[9] = c * r - a * o, e[10] = f * r - l * o, e[11] = v * r - s * o, e;
}
function KS(e, t, n) {
  var o = Math.sin(n), r = Math.cos(n), i = t[0], a = t[1], l = t[2], s = t[3], d = t[8], c = t[9], f = t[10], v = t[11];
  return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r - d * o, e[1] = a * r - c * o, e[2] = l * r - f * o, e[3] = s * r - v * o, e[8] = i * o + d * r, e[9] = a * o + c * r, e[10] = l * o + f * r, e[11] = s * o + v * r, e;
}
function WS(e, t, n) {
  var o = Math.sin(n), r = Math.cos(n), i = t[0], a = t[1], l = t[2], s = t[3], d = t[4], c = t[5], f = t[6], v = t[7];
  return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * r + d * o, e[1] = a * r + c * o, e[2] = l * r + f * o, e[3] = s * r + v * o, e[4] = d * r - i * o, e[5] = c * r - a * o, e[6] = f * r - l * o, e[7] = v * r - s * o, e;
}
function YS(e, t, n, o, r) {
  var i = 1 / Math.tan(t / 2), a;
  return e[0] = i / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, r != null && r !== 1 / 0 ? (a = 1 / (o - r), e[10] = (r + o) * a, e[14] = 2 * r * o * a) : (e[10] = -1, e[14] = -2 * o), e;
}
var Q0 = YS, GS = jS;
function Mr(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function Hi(e) {
  return function t(n) {
    return arguments.length === 0 || Mr(n) ? t : e.apply(this, arguments);
  };
}
function XS(e) {
  return function t(n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Mr(n) ? t : Hi(function(r) {
          return e(n, r);
        });
      default:
        return Mr(n) && Mr(o) ? t : Mr(n) ? Hi(function(r) {
          return e(r, o);
        }) : Mr(o) ? Hi(function(r) {
          return e(n, r);
        }) : e(n, o);
    }
  };
}
const JS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var ZS = Hi(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function eT(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function K0(e, t, n) {
  if (n || (n = new nT()), tT(e)) return e;
  var o = function(i) {
    var a = n.get(e);
    if (a) return a;
    n.set(e, i);
    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (i[l] = K0(e[l], true, n));
    return i;
  };
  switch (ZS(e)) {
    case "Object":
      return o(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return o(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return eT(e);
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
function tT(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var nT = function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, n) {
    var o = this.hash(t), r = this.map[o];
    r || (this.map[o] = r = []), r.push([t, n]), this.length += 1;
  }, e.prototype.hash = function(t) {
    var n = [];
    for (var o in t) n.push(Object.prototype.toString.call(t[o]));
    return n.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (var n in this.map) for (var a = this.map[n], o = 0; o < a.length; o += 1) {
        var r = a[o];
        if (r[0] === t) return r[1];
      }
      return;
    }
    var i = this.hash(t), a = this.map[i];
    if (a) for (var o = 0; o < a.length; o += 1) {
      var r = a[o];
      if (r[0] === t) return r[1];
    }
  }, e;
}(), Er = Hi(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : K0(t);
});
function oT(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var o = arguments[n - 1];
    return JS(o) || typeof o[e] != "function" ? t.apply(this, arguments) : o[e].apply(o, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Js = XS(oT("forEach", function(t, n) {
  for (var o = n.length, r = 0; r < o; ) t(n[r]), r += 1;
  return n;
}));
function go(e, t, n, o) {
  e /= 360, t /= 100, n /= 100;
  let r = (1 - Math.abs(2 * n - 1)) * t, i = r * (1 - Math.abs(e * 6 % 2 - 1)), a = n - r / 2, l, s, d;
  0 <= e && e < 1 / 6 ? (l = r, s = i, d = 0) : 1 / 6 <= e && e < 2 / 6 ? (l = i, s = r, d = 0) : 2 / 6 <= e && e < 3 / 6 ? (l = 0, s = r, d = i) : 3 / 6 <= e && e < 4 / 6 ? (l = 0, s = i, d = r) : 4 / 6 <= e && e < 5 / 6 ? (l = i, s = 0, d = r) : 5 / 6 <= e && e < 1 && (l = r, s = 0, d = i);
  let c = l + a, f = s + a, v = d + a;
  return [c, f, v, o];
}
const W0 = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: go(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" }, hint: "hint for beta" }, { pos: [0, 1], color: go(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: go(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }, { pos: [-1, 0.5], color: go(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" }, hint: "go home" }, { pos: [0, 1], color: go(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" }, hint: "hint for one" }, { pos: [0, -1], color: go(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" }, hint: "launch sub-sub menu" }], s2: [{ pos: [0, 0], color: go(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" }, hint: "go home" }, { pos: [-1, 0.5], color: go(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" }, hint: "hint for delta" }] }, Ja = W0.zero;
class rT {
  constructor(t, n) {
    __privateAdd(this, _rT_instances);
    __privateAdd(this, _n2, Er(Ja));
    __privateAdd(this, _i2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _o2, Er(Ja));
    __privateAdd(this, _t, "in");
    __privateAdd(this, _a2);
    __privateAdd(this, _r2);
    __privateSet(this, _a2, t), __privateSet(this, _r2, n);
  }
  draw(t) {
    Js((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t, "idle");
    else if (__privateGet(this, _t) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _o2)), __privateSet(this, _t, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _i2) && !n.disb ? n.hover < 1 ? n.hover += 0.1 * t / 30 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 * t / 30 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _i2, t), t == 0 ? __privateGet(this, _r2).call(this, null) : Js((n) => {
      n.hot == t && __privateGet(this, _r2).call(this, n.hint || null);
    })(__privateGet(this, _n2));
  }
  activate(t) {
    __privateGet(this, _t) == "idle" && Js((n) => {
      n.hot == t && __privateMethod(this, _rT_instances, l_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_i2 = new WeakMap();
_e = new WeakMap();
_o2 = new WeakMap();
_t = new WeakMap();
_a2 = new WeakMap();
_r2 = new WeakMap();
_rT_instances = new WeakSet();
l_fn = function(t) {
  if (!t.disb && t.action) switch (t.action.kind) {
    case "show":
      __privateGet(this, _a2).call(this, t.action.page);
      break;
    case "home":
      __privateSet(this, _o2, Er(Ja)), __privateSet(this, _t, "out");
      break;
    case "sub":
      __privateSet(this, _o2, Er(W0[t.action.hexes])), __privateSet(this, _t, "out");
      break;
  }
};
console.log(Ja);
const iT = "" + new URL("wood-g1YLw-8C.jpg", import.meta.url).href, aT = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACAAIADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUDBAYBAgf/xAA6EAABAwIEAwQHBwMFAAAAAAABAAIDBBEFEiExBhNBIlFhcRQyU5GSoeEVI0JSYrHRFoHBBzNEY/H/xAAbAQABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADERAAEDAgUCAwYHAQAAAAAAAAEAAgMEEQUSITFBE1EGcYEiYZGhwfAUMkJSsdHh8f/aAAwDAQACEQMRAD8AtoQhJJC44hrS5xs0C5PcupRj9Vy4hTsPafq7wCfGwvcGhDVlS2lhdKeP5VGfF6h0zzE4Njv2RYbLx9rVntB8IVBCtOkzssKa+pJv1D8StThNZ6XT3eRzWGzvHuKvLJYbVGkqmv8AwHRw8FqefF7VnxBV9RHkdcbFa3B638TDlcfabv8AQqRCj58XtWfEF7BBFwbhQK2XUIQkkhCEJJIXN911CSSEIQkkhKsepebAJ2Dtx7+Lfomq4QCCCLg6EJ8byxwcENV0zamJ0Tuf5WJQrNbAyGrljY9pa12nh4KDKPzN+atgbi689ewscWnhQVMwghc87jYd5WaMkkkpcXWa/Y23KYY9K/mNiAOTQXHj1/wl8hJjI5bm22OmnzVbUSZ327La4PSCngDju7X+lx/NaQGPDnHWxHRb3gvExVUfosh+8iF233LfosBTyue0yOifmOltNPDdXMJrZKHEmSxtcMvaIJGveP7qBWy+sISEcU4dbeX4F3+qcN/NL8CSSeoXiKRs0TJIzmY8BwPeF7SSQhCEkkIQqNTiEcM4i0zHQXNrnrZda0u2QtVWw0jQ6Y2uryq4lVCkpXP/ABnRo8VC7EA1pc5gAAuSSlmMyuqBDMD91awA6H6/4U8UJLxmVRVY7A6Fwp3Xd5FLCSSSdSVxCFZLJKnilMJ6cm3aaPeFny8OIjeQCPWv1/8AVr4Y3SytYwXc42C9ycN0bnuPMktfuCEmp3Pddi0WGYxFTRdOoNgNuVjnyMjfnzDK7Q2PXopYmlrSXes7UrVf01Se0k9w/hI8Vo3UNW6IkllrsceoQ0kD4xdwV5SYpTVjyyF1z5EKmhCFCrBbHgrEc8bqGV3ab2o793ULVL5lgjZXYnAYDlc12Yu7gN1vvT/+v5pzWF2yAq8TpqNwZM6xPqr6FRFfqLx6eaugggEG4OoKTmlu6dSYjT1hIhde3oo6mXkxFw9Y6N81l64trHNgiljDswu5x0B23WhxSnE9Mc1yALEAkXCSU/D7cRrDEwlsZb2iXXyjZA4pMYKQvabC4ufcs3iUc1XiTYLEnTKBz3P32WSq6HFafEZII4qgva4tLWguBHl1C2VHDUHD4mV9PJA57MpEjSLEbFbCjwd0GHMoqurnfBlDWSRyFklv1EbpDCY8HqpqVtTNXYfn1ZVOzWJ3IKt4fFNLjMYhaLyMA9oAi4237/Y5V14jwVtHFG9xsSQBySfLss1Ix0cjmPFnNNivKq8TVctNxBW08T3CNkrmsuAbAbC6WvxCoaLmQ72AsFJ+LHZVQ8PSn9YWwwyHJE6Z3rPGVvgOp/x714pKcBoy2hkjHLcWWObbXUKDh+vNVTGOV15Yvm1XqN2dskgBDXuzNuLXFgjInB7Q4LN10UlPM6J/H3814qIQIy+Z7pWxguyOAsdPJUsTw4z4XZrWiaIue0N7iScvu/ZM6ppdTStaLktIA/soKyuZT0DqgXuLtaCLdra3yXZWtLSHbLlBNMydjodXX+x/Kw6F6c8ucSbXJvsEZj4e5Ua9RWpwCj9GpOY8feS6+TeiaKnhdWKyjY/8Y7Lh4q4jGABosvMMTklkqnmbQ3/4hMMPlzMMbjq3UeSXq3h0RdIZDs3bxK5IBl1UuDSSsrGdLc6Hy5/tMfPUJPPSSx18csLngR3y5et7JwhDA6EEXBW5r8OZWZTmLXN2I3S3EKjEq2mMTqido6EN+izHEVa6nkipycpaQ95tbyW5Wb4yw7n0oq4m/eQjtW6t+iZGyOJuWJoaPcLKGLCiJ2zzyukLds2qT8Y0cjsUlrmRl9JUESMlbq0kgE6jrdZ8gEgkajZX8Oxmrww5IJM0T9HQyDMx3m06K87GcMmLfTsFhGY2L6Z5j+WoXVbpTh1aKarZLG69vWA6jqtZFJQWY51TE8BuVoke3shL24VhmLRkYNLNHWN/49S4dsfpO1/ApVU4TV0UbJq6lqIonOLWuc21yFNDUmK4tdVGJYVFXOa4uLSOQtO+TDyWls9PG5puHMc0FZ3G6ps04hheXQxkkOvfMSbkpau7hPlqXSDLayjoMEjopOrmLjxfhcQhCGV2mOB1ZpqwNP8AtyWaR49Cthy3/lPuWZ4ZoudUGoeOxH6vi76LUqwpoC5lysF4lkiNUAwe0Br9PkvLYnucAGm50TaJgijaxuw+aVpnBJzYg7rsfNcqoSxoI2UvhiSITua78xGn1UiEIQC3CFxzQ9pa4XaRYjvXVHNJyoy7rsPNOY0vIaFDUTsp43Sv2CxNZwzI2rl5M0OQE5c17gd2yhPDdQRYzQEeZ/hak6nVCtBRRrCu8TVhJItbyWHraOagnax+41a5p0PkvofFGN8PYjTULKyaprZII22hprtBOQAh7jpob6gdUg4go/SqIvYLyxdoeI6hY8EjYqunhMTy3hazC60V0Ak52Pn/AKtHxXhAi4olo8IpZHRPbG+KKMF5s5gPmd14xHhPE8Ow9lVVMiF5BE6Jrw58ZINswG17dVPW8aYpNSxwUpjow2JsT5YG2lkDRbtP36bJl/prFLXV1XRTvvFiETozndazhq1+vUH9ymNbmNkfNKImZj6efCy/2W/20fz/AIR9lv8AbR/P+E7qaaSjrX09VGWPY4tcD0KhY3mFxZbINj3rQNwGR0YkHPF9VNH4f8QyUgq2tbqLhv6rb7bel7+qcUdM2kpo4WWLWjcfi8VMquGzcyExOPbj1Hi36K0mMsBYcLyWqzGUufudUKzQucJrD1SNVWTGkj5cVz6ztT5KGpeGxm/KOwSmknq2ZDbLqT7v92UyEIVMvS0KpXh3YP4dvIq2vL2h7Cx2x+Smgk6bw4quxWkNZSuibvuPMJUhde0tcWu3BsuK7XmBBBsV1ozOACTTYHROle5vNDSSQA4afJOXnJH+p37KFA1BD3W7Iymq56QHoutfdKfsGk75viH8L1ND6G9ghLmsABYQdR9bpoo6iLnQlg9Yat8+5RxAMN0QcRqKizJnkj6qSHinn0joOIKGGvzN5fOccshb3Ejfz3S7E8To6mKnpsOw6PD4oARlY8uL79STqVRlhbIQTcEIELc+Y6lFxOfFIJWOIIWhpfE+IUrR0pCHDY7m3bW4t6Jhg8b5K6IM0tq4+HVaT0WLuPvVXBaX0elzuH3kmp8B0CYoCepcXnKUdQ4XFJF1apoc52uvF1CKaIH1T71MdUIQ75HP/Mbq0p6OCmv0Wht+yEIQmIlCEISSXlzGuNy0E+IXOWz8jfcvaE7M7uojBETctHwVDEIbZZGjTYhUk6e0PYWu2IsUqdTytcRkJsdwFPG+4sVicdwt8U/Uhbdruw2PKiU9HFzZhf1W6leORL7N3uTKli5UIB9Y6lde8AaIbCsLkqKgCVpDRqbj5eqDSwEkmGO5/SFz0Wn9jH8IU6ENmPdb/ox/tHwQhCFxSoQhCSS//9k=", lT = "" + new URL("clock-2v_wOLgh.jpg", import.meta.url).href, sT = "" + new URL("tv-C36knqqO.jpg", import.meta.url).href, uT = "" + new URL("phone-Dcs8lpjE.jpg", import.meta.url).href, cT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTIgNS42OUwxNyAxMC4xOVYxOEgxNVYxMkg5VjE4SDdWMTAuMTlMMTIgNS42OU0xMiAzTDIgMTJINVYyMEgxMVYxNEgxM1YyMEgxOVYxMkgyMiIgLz48L3N2Zz4=", dT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTQsMTdIMTdMMTksMTNWN0gxM1YxM0gxNk02LDE3SDlMMTEsMTNWN0g1VjEzSDhMNiwxN1oiIC8+PC9zdmc+", fT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNNiw5SDhWMTFIMTBWMTNIOFYxNUg2VjEzSDRWMTFINlY5TTE4LjUsOUExLjUsMS41IDAgMCwxIDIwLDEwLjVBMS41LDEuNSAwIDAsMSAxOC41LDEyQTEuNSwxLjUgMCAwLDEgMTcsMTAuNUExLjUsMS41IDAgMCwxIDE4LjUsOU0xNS41LDEyQTEuNSwxLjUgMCAwLDEgMTcsMTMuNUExLjUsMS41IDAgMCwxIDE1LjUsMTVBMS41LDEuNSAwIDAsMSAxNCwxMy41QTEuNSwxLjUgMCAwLDEgMTUuNSwxMk0xNyw1QTcsNyAwIDAsMSAyNCwxMkE3LDcgMCAwLDEgMTcsMTlDMTUuMDQsMTkgMTMuMjcsMTguMiAxMiwxNi45QzEwLjczLDE4LjIgOC45NiwxOSA3LDE5QTcsNyAwIDAsMSAwLDEyQTcsNyAwIDAsMSA3LDVIMTdNNyw3QTUsNSAwIDAsMCAyLDEyQTUsNSAwIDAsMCA3LDE3QzguNjQsMTcgMTAuMDksMTYuMjEgMTEsMTVIMTNDMTMuOTEsMTYuMjEgMTUuMzYsMTcgMTcsMTdBNSw1IDAgMCwwIDIyLDEyQTUsNSAwIDAsMCAxNyw3SDdaIiAvPjwvc3ZnPg==", vT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNNCwxN1Y5SDJWN0g2VjE3SDRNMjIsMTVDMjIsMTYuMTEgMjEuMSwxNyAyMCwxN0gxNlYxNUgyMFYxM0gxOFYxMUgyMFY5SDE2VjdIMjBBMiwyIDAgMCwxIDIyLDlWMTAuNUExLjUsMS41IDAgMCwxIDIwLjUsMTJBMS41LDEuNSAwIDAsMSAyMiwxMy41VjE1TTE0LDE1VjE3SDhWMTNDOCwxMS44OSA4LjksMTEgMTAsMTFIMTJWOUg4VjdIMTJBMiwyIDAgMCwxIDE0LDlWMTFDMTQsMTIuMTEgMTMuMSwxMyAxMiwxM0gxMFYxNUgxNFoiIC8+PC9zdmc+", hT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyAgZD0iTTExLjE5LDIuMjVDMTAuOTMsMi4yNSAxMC42NywyLjMxIDEwLjQyLDIuNEwzLjA2LDUuNDVDMi4wNCw1Ljg3IDEuNTUsNy4wNCAxLjk3LDguMDVMNi45MywyMEM3LjI0LDIwLjc3IDcuOTcsMjEuMjMgOC43NCwyMS4yNUM5LDIxLjI1IDkuMjcsMjEuMjIgOS41MywyMS4xTDE2LjksMTguMDVDMTcuNjUsMTcuNzQgMTguMTEsMTcgMTguMTMsMTYuMjVDMTguMTQsMTYgMTguMDksMTUuNzEgMTgsMTUuNDVMMTMsMy41QzEyLjcxLDIuNzMgMTEuOTcsMi4yNiAxMS4xOSwyLjI1TTE0LjY3LDIuMjVMMTguMTIsMTAuNlY0LjI1QTIsMiAwIDAsMCAxNi4xMiwyLjI1TTIwLjEzLDMuNzlWMTIuODJMMjIuNTYsNi45NkMyMi45Nyw1Ljk0IDIyLjUsNC43OCAyMS40Nyw0LjM2TTExLjE5LDQuMjJMMTYuMTcsMTYuMjRMOC43OCwxOS4zTDMuOCw3LjI5IiAvPjwvc3ZnPg==", mT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMjAsMTJBOCw4IDAgMCwwIDEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQTgsOCAwIDAsMCAyMCwxMk0yMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJBMTAsMTAgMCAwLDEgMjIsMTJNMTAsOS41QzEwLDEwLjMgOS4zLDExIDguNSwxMUM3LjcsMTEgNywxMC4zIDcsOS41QzcsOC43IDcuNyw4IDguNSw4QzkuMyw4IDEwLDguNyAxMCw5LjVNMTcsOS41QzE3LDEwLjMgMTYuMywxMSAxNS41LDExQzE0LjcsMTEgMTQsMTAuMyAxNCw5LjVDMTQsOC43IDE0LjcsOCAxNS41LDhDMTYuMyw4IDE3LDguNyAxNyw5LjVNMTIsMTcuMjNDMTAuMjUsMTcuMjMgOC43MSwxNi41IDcuODEsMTUuNDJMOS4yMywxNEM5LjY4LDE0LjcyIDEwLjc1LDE1LjIzIDEyLDE1LjIzQzEzLjI1LDE1LjIzIDE0LjMyLDE0LjcyIDE0Ljc3LDE0TDE2LjE5LDE1LjQyQzE1LjI5LDE2LjUgMTMuNzUsMTcuMjMgMTIsMTcuMjNaIiAvPjwvc3ZnPg==", gT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTAsNFY3SDEyLjIxTDguNzksMTVINlYxOEgxNFYxNUgxMS43OUwxNS4yMSw3SDE4VjRIMTBaIiAvPjwvc3ZnPg==", Zs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTAsN1Y5SDEyVjE3SDE0VjdIMTBaIiAvPjwvc3ZnPg==", bT = ["width", "height"], pT = ["src"], yT = ["src"], _T = ["src"], wT = ["src"], xT = ["src"], CT = ["src"], ST = ["src"], TT = ["src"], kT = ["src"], MT = ["src"], qT = ["src"], ET = ["src"], AT = ["src"], LT = ["src"], BT = ["src"], RT = { key: 0, class: "q-mb-xl", style: { clear: "both", height: "100%" } }, PT = { class: "insp q-mt-md" }, Y0 = /* @__PURE__ */ zn({ __name: "WebGLMenu", props: { width: {}, height: {} }, emits: ["hover", "activate", "updateTime", "fps", "scale"], setup(e, { emit: t }) {
  Nc();
  const n = t, o = H(), r = e, i = H(false);
  let a = 0, l = Date.now();
  const s = H(false);
  let d = [0.1, 0.2, 0.5, 1, 2, 5, 10], c = 3;
  const f = H(d[c]), v = H([0, 0, 0]);
  me(() => f.value, (k, F) => n("scale", k));
  let u = null;
  const g = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let y = null;
  const w = new rT((k) => n("activate", k), (k) => n("hover", k)), x = H([0, 0]), _ = H(""), p = H(0), b = H(0), C = H(null), q = H(1), B = H(-1), V = () => {
    if (u === null) throw new Error("initBufs no WebGL context");
    if (y === null) throw new Error("initBufs no prog");
    const k = OS(), F = (S) => {
      const E = u.createBuffer();
      return u.bindBuffer(u.ARRAY_BUFFER, E), u.bufferData(u.ARRAY_BUFFER, S, u.STATIC_DRAW), u.bindBuffer(u.ARRAY_BUFFER, null), E;
    }, ee = u.createBuffer();
    u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, ee), u.bufferData(u.ELEMENT_ARRAY_BUFFER, k.get_ndx(), u.STATIC_DRAW), console.log("faces per object", k.get_ndx().length), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), y.model = { pos: F(k.get_pos()), color: F(k.get_color()), tex: F(k.get_tex()), norm: F(k.get_norm()), index: ee, offset: k.get_offset(), len: k.get_len() }, k.free();
  }, R = () => {
    if (u === null) throw new Error("initCopyBuf no ctx");
    const k = u.createBuffer();
    return u.bindBuffer(u.ARRAY_BUFFER, k), u.bufferData(u.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), u.STATIC_DRAW), k;
  }, D = (k, F) => {
    const ee = Mo();
    return Xa(ee, ee, [0, 0, -6]), Xs(ee, ee, 1.3 * Math.sin(F) * 3.141 / 6 / 3, [0, 1, 0]), Xs(ee, ee, 1.2 * Math.sin(F * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), Xs(ee, ee, 1.1 * Math.sin(F * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), Xa(ee, ee, [k[0], k[1], k[2]]), ee;
  }, $ = (k) => {
    u === null || k.model === null || (u.uniform1i(k.unif.sampler, 1), u.uniform1i(k.unif.mode_int, 0), u.drawElements(u.TRIANGLES, k.model.len[1], u.UNSIGNED_INT, 4 * k.model.offset[1]), u.uniform1i(k.unif.sampler, 0), u.uniform1i(k.unif.mode_int, 1), u.drawElements(u.TRIANGLES, k.model.len[0], u.UNSIGNED_INT, k.model.offset[0]));
  }, M = (k, F) => {
    if (u === null || o.value === void 0) throw new Error("no WebGL context");
    if (k.model === null) return;
    u.viewport(0, 0, r.width, r.height), u.enable(u.BLEND), u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA), u.enable(u.DEPTH_TEST), u.depthFunc(u.LEQUAL), u.bindRenderbuffer(u.RENDERBUFFER, null), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindTexture(u.TEXTURE_2D, k.bufs.double), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), u.bindRenderbuffer(u.RENDERBUFFER, k.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, r.width, r.height), u.bindFramebuffer(u.FRAMEBUFFER, k.bufs.frame), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.bufs.depth), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r.width, r.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.bufs.double, 0), u.bindFramebuffer(u.FRAMEBUFFER, k.bufs.frame), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.bufs.double, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.bufs.depth), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT);
    const ee = 45 * Math.PI / 180, S = r.width / r.height, E = 0.1, I = 100, Z = Mo();
    Q0(Z, ee, S, E, I);
    const oe = F;
    Xa(Z, Z, [Math.sin(oe * 0.3) * 1, Math.cos(oe * 0.4) * 1, Math.cos(0.6 * oe) * 1]), u.useProgram(k.prog_draw), A(k, false), T(k), z(k), U(k), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, k.model.index), u.uniform1f(k.unif.time, F), u.uniform2f(k.unif.viewport, r.width, r.height), u.uniformMatrix4fv(k.unif.proj, false, Z), u.activeTexture(u.TEXTURE0 + 1), u.bindTexture(u.TEXTURE_2D, g.body), u.activeTexture(u.TEXTURE0), u.uniform3fv(k.unif.debug_ambient, v.value);
    const W = (ue, ce, re, Q, le, we) => {
      if (u === null) return;
      const Ce = [ue[0] * 2, ue[1] * 2.2, we * 0.5 + Math.pow(le, 1.5) * 5], Te = D(Ce, F);
      switch (u.uniformMatrix4fv(k.unif.model, false, Te), u.uniform1f(k.unif.hover, we), u.uniform1f(k.unif.alpha, Math.pow(1 - le, 0.1)), u.activeTexture(u.TEXTURE0), re) {
        case "clock":
          u.bindTexture(u.TEXTURE_2D, g.front_1);
          break;
        case "tv":
          u.bindTexture(u.TEXTURE_2D, g.front_2);
          break;
        case "phone":
          u.bindTexture(u.TEXTURE_2D, g.front_3);
          break;
        default:
          const Ie = g[re];
          Ie != null ? u.bindTexture(u.TEXTURE_2D, Ie) : u.bindTexture(u.TEXTURE_2D, g.front_0);
          break;
      }
      u.activeTexture(u.TEXTURE0);
      const Me = Mo();
      U0(Me, Te), j0(Me, Me), u.uniformMatrix4fv(k.unif.normal, false, Me), u.uniform4fv(k.unif.front_color, ce), $(k);
    };
    w.draw(W), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, null, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, null), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray(k.attr.pos_model), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindRenderbuffer(u.RENDERBUFFER, null), u.disable(u.BLEND), u.useProgram(k.prog_copy), u.disable(u.DEPTH_TEST), u.uniform1i(k.unif.copy_tex, 0), u.bindTexture(u.TEXTURE_2D, k.bufs.double), u.bindBuffer(u.ARRAY_BUFFER, k.bufs.copy_pos), C.value != null ? (u.uniform2fv(k.unif.ripple_pos, C.value), u.uniform1f(k.unif.ripple_time, q.value), u.uniform1f(k.unif.aspect, r.width / r.height)) : u.uniform1f(k.unif.ripple_time, 1), u.vertexAttribPointer(k.attr.pos_copy, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(k.attr.pos_copy), u.drawArrays(u.TRIANGLE_FAN, 0, 4), u.disableVertexAttribArray(k.attr.pos_copy), u.useProgram(k.prog_pick), u.enable(u.DEPTH_TEST), u.bindTexture(u.TEXTURE_2D, k.pick.tex), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.bindRenderbuffer(u.RENDERBUFFER, k.pick.rb), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, r.width, r.height), u.bindFramebuffer(u.FRAMEBUFFER, k.pick.fb), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.pick.rb), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r.width, r.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.pick.tex, 0), u.uniformMatrix4fv(k.unif.proj_pick, false, Z), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, k.model.index), u.enableVertexAttribArray(k.attr.pos_pick), A(k, true);
    const fe = (ue, ce, re, Q, le, we) => {
      if (u === null || k.model === null) return;
      const Ce = [ue[0] * 2, ue[1] * 2.2, we * 0.5 + 10 * le];
      D(Ce, F), u.uniformMatrix4fv(k.unif.model_pick, false, D(Ce, F)), u.uniform4f(k.unif.id_pick, Q / 255, 0, 0, 0), u.drawElements(u.TRIANGLES, k.model.len[0], u.UNSIGNED_INT, k.model.offset[0]);
    };
    w.draw(fe), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray(k.attr.pos_pick);
    let ve = new Uint8Array(4);
    u.readPixels(x.value[0], r.height - x.value[1], 1, 1, u.RGBA, u.UNSIGNED_BYTE, ve), ve.length && (_.value = ve.toString(), w.hover(ve[0]), p.value = ve[0]);
  }, A = (k, F) => {
    if (u === null) throw new Error("setPos - no ctx");
    if (k.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, k.model.pos), u.vertexAttribPointer(F ? k.attr.pos_pick : k.attr.pos_model, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(F ? k.attr.pos_pick : k.attr.pos_model);
  }, T = (k) => {
    if (u === null) throw new Error("setColor - no ctx");
    if (k.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, k.model.color), u.vertexAttribPointer(k.attr.color, 4, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(k.attr.color);
  }, z = (k) => {
    if (u === null) throw new Error("setTex crash");
    if (k.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, k.model.tex), u.vertexAttribPointer(k.attr.texture, 2, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(k.attr.texture);
  }, U = (k) => {
    if (u === null) throw new Error("setNorm crash");
    if (k.model === null) throw new Error("setPos - no buf");
    u.bindBuffer(u.ARRAY_BUFFER, k.model.norm), u.vertexAttribPointer(k.attr.norm, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(k.attr.norm);
  };
  let j = 0, K = 0;
  const ie = () => {
    if (u === null) return;
    const ee = Y(`
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

        uniform mediump vec3 uDebugAmbient;

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

            fragColor.rgb += uDebugAmbient;

            // fragColor.a = 1.0;
            gl_FragColor = fragColor;

            // gl_FragColor = vec4(vLighting, 1.0);
        }
    `), I = Y(`
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
    `), W = Y(`
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
    `), fe = u.createTexture();
    u.bindTexture(u.TEXTURE_2D, fe), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE), u.bindTexture(u.TEXTURE_2D, null);
    const ve = u.createRenderbuffer(), ue = u.createFramebuffer(), ce = R(), re = { prog_draw: ee, prog_pick: I, prog_copy: W, attr: { pos_model: u.getAttribLocation(ee, "aVertexPosition"), norm: u.getAttribLocation(ee, "aVertexNormal"), color: u.getAttribLocation(ee, "aVertexColor"), texture: u.getAttribLocation(ee, "aTextureCoord"), pos_pick: u.getAttribLocation(I, "aVertexPosition"), pos_copy: u.getAttribLocation(W, "aVertexPosition") }, unif: { proj: u.getUniformLocation(ee, "uProjectionMatrix"), model: u.getUniformLocation(ee, "uModelViewMatrix"), sampler: u.getUniformLocation(ee, "uSampler"), normal: u.getUniformLocation(ee, "uNormalMatrix"), time: u.getUniformLocation(ee, "uTime"), alpha: u.getUniformLocation(ee, "uAlpha"), hover: u.getUniformLocation(ee, "uFade"), mode_int: u.getUniformLocation(ee, "uMode"), front_color: u.getUniformLocation(ee, "uFrontColor"), proj_pick: u.getUniformLocation(I, "uProjectionMatrix"), model_pick: u.getUniformLocation(I, "uModelViewMatrix"), id_pick: u.getUniformLocation(I, "uId"), viewport: u.getUniformLocation(ee, "uViewPort"), copy_tex: u.getUniformLocation(W, "uTexture"), ripple_time: u.getUniformLocation(W, "uRippleTime"), ripple_pos: u.getUniformLocation(W, "uRipplePos"), aspect: u.getUniformLocation(W, "uAspect"), debug_ambient: u.getUniformLocation(ee, "uDebugAmbient") }, bufs: { frame: ue, depth: ve, double: fe, copy_pos: ce }, model: null, pick: { fb: u.createFramebuffer(), rb: u.createRenderbuffer(), tex: u.createTexture() } };
    for (const Q in g) g[Q] = ne();
    u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, true), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), y = re, V();
  }, ye = () => {
    if (o.value === void 0 || (u === null && (u = o.value.getContext("webgl2", {})), u === null)) return;
    y === null && ie(), u.bindRenderbuffer(u.RENDERBUFFER, y.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, r.width, r.height), u.bindRenderbuffer(u.RENDERBUFFER, null);
    const k = u.createTexture();
    u.bindTexture(u.TEXTURE_2D, k), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r.width, r.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), y.bufs.double = k, u.bindTexture(u.TEXTURE_2D, null), u.viewport(0, 0, r.width, r.height);
    let F = 0, ee = false, S = Date.now();
    K = setInterval(() => {
      const E = Date.now();
      n("fps", a * 1e3 / (E - l)), a = 0, l = E;
    }, 1e3), j = setInterval(() => {
      const E = Date.now(), I = (E - S) / 750;
      a += 1, i.value || (ee ? (F -= I * d[c], F < 0 && (F = 0, ee = false)) : (F += I * d[c], F > 7.5 && (F = 7.5, ee = true))), n("updateTime", F / 7.5), i.value || w.step((E - S) * d[c]), b.value > 0 && (w.activate(b.value), b.value = 0), S = E, y !== null && M(y, F), u !== null && y !== null && C.value != null && (i.value || q.value < 1 && (q.value += 0.1 * d[c]), q.value = Math.min(q.value, 1));
    }, 25);
  }, Y = (k, F) => {
    if (u === null) throw new Error("no webgl");
    const ee = L(u.VERTEX_SHADER, k), S = L(u.FRAGMENT_SHADER, F), E = u.createProgram();
    return u.attachShader(E, ee), u.attachShader(E, S), u.linkProgram(E), E;
  }, L = (k, F) => {
    if (u === null) throw new Error("no webgl");
    const ee = u.createShader(k);
    if (ee === null) throw new Error("bad shader");
    return u.shaderSource(ee, F), u.compileShader(ee), ee;
  }, ne = () => {
    if (u === null) return null;
    const k = u.createTexture();
    return u.bindTexture(u.TEXTURE_2D, k), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, 1, 1, 0, u.RGBA, u.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), k;
  }, G = (k, F) => {
    Qe(() => {
      if (u === null) return;
      const ee = F.target;
      u.bindTexture(u.TEXTURE_2D, g[k]), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, u.RGBA, u.UNSIGNED_BYTE, ee), u.hint(u.GENERATE_MIPMAP_HINT, u.NICEST), u.generateMipmap(u.TEXTURE_2D);
    });
  }, be = (k) => {
    if (u === null || o.value === void 0) return;
    const F = k, ee = F.offsetX, S = F.offsetY;
    x.value = [ee, S];
  }, O = (k) => {
    var _a3;
    const F = k, ee = (_a3 = o.value) == null ? void 0 : _a3.getBoundingClientRect();
    ee !== void 0 && (x.value = [F.touches.item(0).clientX - ee.x, F.touches.item(0).clientY - ee.y], k.stopPropagation(), k.preventDefault());
  }, P = () => {
    j != 0 && clearInterval(j), K != 0 && clearInterval(K), console.log("resize", r.width, r.height), Qe(() => {
      ye();
    });
  }, te = (k) => {
    b.value = p.value, C.value = [x.value[0] / r.width, 1 - x.value[1] / r.height], q.value = 0;
  };
  return st(() => {
    P(), me(() => [r.width, r.height], (k, F) => Qe(P));
  }), We(() => {
    clearInterval(j);
  }), (k, F) => (ln(), lr(on, null, [$e("canvas", { ref_key: "canvas", ref: o, onMousemove: F[0] || (F[0] = (ee) => be(ee)), onTouchstart: F[1] || (F[1] = (ee) => O(ee)), onTouchmove: F[2] || (F[2] = (ee) => O(ee)), onTouchend: F[3] || (F[3] = (ee) => te()), onMouseup: F[4] || (F[4] = (ee) => te()), width: r.width, height: r.height }, null, 40, bT), $e("img", { src: Re(iT), onLoad: F[5] || (F[5] = (ee) => G("body", ee)), style: { display: "none" } }, null, 40, pT), $e("img", { src: Re(aT), onLoad: F[6] || (F[6] = (ee) => G("front_0", ee)), style: { display: "none" } }, null, 40, yT), $e("img", { src: Re(lT), onLoad: F[7] || (F[7] = (ee) => G("front_1", ee)), style: { display: "none" } }, null, 40, _T), $e("img", { src: Re(sT), onLoad: F[8] || (F[8] = (ee) => G("front_2", ee)), style: { display: "none" } }, null, 40, wT), $e("img", { src: Re(uT), onLoad: F[9] || (F[9] = (ee) => G("front_3", ee)), style: { display: "none" } }, null, 40, xT), $e("img", { src: Re(cT), onLoad: F[10] || (F[10] = (ee) => G("home", ee)), style: { display: "none" }, width: "1024", height: "1024" }, null, 40, CT), $e("img", { src: Re(dT), onLoad: F[11] || (F[11] = (ee) => G("quote", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, ST), $e("img", { src: Re(fT), onLoad: F[12] || (F[12] = (ee) => G("game", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, TT), $e("img", { src: Re(vT), onLoad: F[13] || (F[13] = (ee) => G("numbers", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, kT), $e("img", { src: Re(hT), onLoad: F[14] || (F[14] = (ee) => G("cards", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, MT), $e("img", { src: Re(mT), onLoad: F[15] || (F[15] = (ee) => G("happy", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, qT), $e("img", { src: Re(gT), onLoad: F[16] || (F[16] = (ee) => G("italic", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, ET), $e("img", { src: Re(Zs), onLoad: F[17] || (F[17] = (ee) => G("one", ee)), style: { display: "none" } }, null, 40, AT), $e("img", { src: Re(Zs), onLoad: F[18] || (F[18] = (ee) => G("two", ee)), style: { display: "none" } }, null, 40, LT), $e("img", { src: Re(Zs), onLoad: F[19] || (F[19] = (ee) => G("three", ee)), style: { display: "none" } }, null, 40, BT), s.value ? (ln(), lr("div", RT, [Ue(Re(et), { onClick: F[20] || (F[20] = (ee) => s.value = false) }, { default: qt(() => F[21] || (F[21] = [ko("close")])), _: 1 }), $e("table", PT, [$e("tr", null, [F[22] || (F[22] = $e("th", null, "cur_step", -1)), $e("td", null, jt(f.value), 1)]), $e("tr", null, [F[23] || (F[23] = $e("th", null, "hot", -1)), $e("td", null, jt(x.value), 1)]), $e("tr", null, [F[24] || (F[24] = $e("th", null, "active", -1)), $e("td", null, jt(_.value), 1)]), $e("tr", null, [F[25] || (F[25] = $e("th", null, "click", -1)), $e("td", null, jt(p.value), 1)]), $e("tr", null, [F[26] || (F[26] = $e("th", null, "shadow_click", -1)), $e("td", null, jt(b.value), 1)]), $e("tr", null, [F[27] || (F[27] = $e("th", null, "ripple", -1)), $e("td", null, jt(C.value), 1)]), $e("tr", null, [F[28] || (F[28] = $e("th", null, "ripple_time", -1)), $e("td", null, jt(q.value), 1)]), $e("tr", null, [F[29] || (F[29] = $e("th", null, "hover", -1)), $e("td", null, jt(B.value), 1)]), $e("tr", null, [F[30] || (F[30] = $e("th", null, "ambient", -1)), $e("td", null, jt(v.value), 1)])])])) : fu("", true)], 64));
} }), Uc = "" + new URL("bkgnd-CXiwSpF_.jpg", import.meta.url).href, DT = { class: "sliders q-ma-lg" }, OT = { class: "feedback" }, VT = /* @__PURE__ */ zn({ __name: "Sized", setup(e) {
  uc((s) => ({ "1179e1fe": l.value }));
  const t = H(320), n = H(240), o = H(0), r = H(0), i = H("no events yet ..."), a = H(1);
  st(() => {
    t.value = document.body.getBoundingClientRect().width;
    const s = document.getElementById("footer");
    let d = 100;
    s && (d = s.getBoundingClientRect().y);
    const c = document.getElementById("wgl-menu");
    let f = 200;
    c && (f = c.getBoundingClientRect().y), n.value = d - f;
  });
  const l = H(`url(${Uc})`);
  return (s, d) => (ln(), lr(on, null, [$e("div", DT, [$e("b", null, jt(t.value) + " x " + jt(n.value) + " @ " + jt(r.value.toFixed(2)) + " / " + jt((o.value * 100).toFixed(1)) + "% / " + jt((o.value * 7.5).toFixed(2)) + "s x" + jt(a.value), 1), Ue(Re(eo), { modelValue: t.value, "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ue(Re(eo), { modelValue: n.value, "onUpdate:modelValue": d[1] || (d[1] = (c) => n.value = c), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ue(Re(eo), { "model-value": o.value, min: 0, max: 1, color: "green", readonly: "" }, null, 8, ["model-value"]), $e("div", OT, jt(i.value), 1)]), $e("div", { class: "menu", id: "wgl-menu", style: aa({ width: t.value + "px", height: n.value + "px" }) }, [Ue(Y0, { width: t.value, height: n.value, onActivate: d[2] || (d[2] = (c) => s.$q.notify({ message: c })), onHover: d[3] || (d[3] = (c) => i.value = "hover: " + c), onUpdateTime: d[4] || (d[4] = (c) => o.value = c), onFps: d[5] || (d[5] = (c) => r.value = c), onScale: d[6] || (d[6] = (c) => a.value = c) }, null, 8, ["width", "height"])], 4)], 64));
} }), FT = ma(VT, [["__scopeId", "data-v-197c70f6"]]), $T = { id: "menu" }, IT = /* @__PURE__ */ zn({ __name: "MaxSized", setup(e) {
  uc((a) => ({ "249b3650": i.value })), Nc();
  const t = H(256), n = H(192), o = H(100), r = () => {
    const a = document.getElementById("header");
    a !== null && (o.value = a.getBoundingClientRect().bottom);
    let l = 0;
    document.getElementById("footer"), a !== null && (l = a.getBoundingClientRect().height), Qe(() => {
      t.value = window.innerWidth, n.value = window.innerHeight - o.value - l;
    });
  };
  st(() => {
    window.addEventListener("resize", r), r();
  }), We(() => {
    window.removeEventListener("resize", r);
  });
  const i = H(`url(${Uc})`);
  return (a, l) => (ln(), lr("div", $T, [Ue(Y0, { width: t.value, height: n.value }, null, 8, ["width", "height"])]));
} }), NT = ma(IT, [["__scopeId", "data-v-46e2e87c"]]);
/* @license twgl.js 6.1.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let Wt = Float32Array;
function zT(e) {
  const t = Wt;
  return Wt = e, t;
}
function oo(e, t, n) {
  const o = new Wt(3);
  return e && (o[0] = e), t && (o[1] = t), n && (o[2] = n), o;
}
function HT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function G0(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function jT(e, t, n, o) {
  return o = o || new Wt(3), o[0] = e[0] + n * (t[0] - e[0]), o[1] = e[1] + n * (t[1] - e[1]), o[2] = e[2] + n * (t[2] - e[2]), o;
}
function UT(e, t, n, o) {
  return o = o || new Wt(3), o[0] = e[0] + n[0] * (t[0] - e[0]), o[1] = e[1] + n[1] * (t[1] - e[1]), o[2] = e[2] + n[2] * (t[2] - e[2]), o;
}
function QT(e, t, n) {
  return n = n || new Wt(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function KT(e, t, n) {
  return n = n || new Wt(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function WT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function YT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function zu(e, t, n) {
  n = n || new Wt(3);
  const o = e[2] * t[0] - e[0] * t[2], r = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = o, n[2] = r, n;
}
function GT(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function XT(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function JT(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function ZT(e, t) {
  const n = e[0] - t[0], o = e[1] - t[1], r = e[2] - t[2];
  return Math.sqrt(n * n + o * o + r * r);
}
function e2(e, t) {
  const n = e[0] - t[0], o = e[1] - t[1], r = e[2] - t[2];
  return n * n + o * o + r * r;
}
function Za(e, t) {
  t = t || new Wt(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], o = Math.sqrt(n);
  return o > 1e-5 ? (t[0] = e[0] / o, t[1] = e[1] / o, t[2] = e[2] / o) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function t2(e, t) {
  return t = t || new Wt(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function n2(e, t) {
  return t = t || new Wt(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function o2(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function r2(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var Fa = Object.freeze({ __proto__: null, add: HT, copy: n2, create: oo, cross: zu, distance: ZT, distanceSq: e2, divide: r2, divScalar: YT, dot: GT, lerp: jT, lerpV: UT, length: XT, lengthSq: JT, max: QT, min: KT, mulScalar: WT, multiply: o2, negate: t2, normalize: Za, setDefaultType: zT, subtract: G0 });
let Ct = Float32Array;
function i2(e) {
  const t = Ct;
  return Ct = e, t;
}
function a2(e, t) {
  return t = t || new Ct(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function l2() {
  return new Ct(16).fill(0);
}
function X0(e, t) {
  return t = t || new Ct(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function J0(e) {
  return e = e || new Ct(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function s2(e, t) {
  if (t = t || new Ct(16), t === e) {
    let _;
    return _ = e[1], e[1] = e[4], e[4] = _, _ = e[2], e[2] = e[8], e[8] = _, _ = e[3], e[3] = e[12], e[12] = _, _ = e[6], e[6] = e[9], e[9] = _, _ = e[7], e[7] = e[13], e[13] = _, _ = e[11], e[11] = e[14], e[14] = _, t;
  }
  const n = e[0 * 4 + 0], o = e[0 * 4 + 1], r = e[0 * 4 + 2], i = e[0 * 4 + 3], a = e[1 * 4 + 0], l = e[1 * 4 + 1], s = e[1 * 4 + 2], d = e[1 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], v = e[2 * 4 + 2], u = e[2 * 4 + 3], g = e[3 * 4 + 0], y = e[3 * 4 + 1], w = e[3 * 4 + 2], x = e[3 * 4 + 3];
  return t[0] = n, t[1] = a, t[2] = c, t[3] = g, t[4] = o, t[5] = l, t[6] = f, t[7] = y, t[8] = r, t[9] = s, t[10] = v, t[11] = w, t[12] = i, t[13] = d, t[14] = u, t[15] = x, t;
}
function Z0(e, t) {
  t = t || new Ct(16);
  const n = e[0 * 4 + 0], o = e[0 * 4 + 1], r = e[0 * 4 + 2], i = e[0 * 4 + 3], a = e[1 * 4 + 0], l = e[1 * 4 + 1], s = e[1 * 4 + 2], d = e[1 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], v = e[2 * 4 + 2], u = e[2 * 4 + 3], g = e[3 * 4 + 0], y = e[3 * 4 + 1], w = e[3 * 4 + 2], x = e[3 * 4 + 3], _ = v * x, p = w * u, b = s * x, C = w * d, q = s * u, B = v * d, V = r * x, R = w * i, D = r * u, $ = v * i, M = r * d, A = s * i, T = c * y, z = g * f, U = a * y, j = g * l, K = a * f, ie = c * l, ye = n * y, Y = g * o, L = n * f, ne = c * o, G = n * l, be = a * o, O = _ * l + C * f + q * y - (p * l + b * f + B * y), P = p * o + V * f + $ * y - (_ * o + R * f + D * y), te = b * o + R * l + M * y - (C * o + V * l + A * y), k = B * o + D * l + A * f - (q * o + $ * l + M * f), F = 1 / (n * O + a * P + c * te + g * k);
  return t[0] = F * O, t[1] = F * P, t[2] = F * te, t[3] = F * k, t[4] = F * (p * a + b * c + B * g - (_ * a + C * c + q * g)), t[5] = F * (_ * n + R * c + D * g - (p * n + V * c + $ * g)), t[6] = F * (C * n + V * a + A * g - (b * n + R * a + M * g)), t[7] = F * (q * n + $ * a + M * c - (B * n + D * a + A * c)), t[8] = F * (T * d + j * u + K * x - (z * d + U * u + ie * x)), t[9] = F * (z * i + ye * u + ne * x - (T * i + Y * u + L * x)), t[10] = F * (U * i + Y * d + G * x - (j * i + ye * d + be * x)), t[11] = F * (ie * i + L * d + be * u - (K * i + ne * d + G * u)), t[12] = F * (U * v + ie * w + z * s - (K * w + T * s + j * v)), t[13] = F * (L * w + T * r + Y * v - (ye * v + ne * w + z * r)), t[14] = F * (ye * s + be * w + j * r - (G * w + U * r + Y * s)), t[15] = F * (G * v + K * r + ne * s - (L * s + be * v + ie * r)), t;
}
function u2(e, t, n) {
  n = n || new Ct(16);
  const o = e[0], r = e[1], i = e[2], a = e[3], l = e[4], s = e[5], d = e[6], c = e[7], f = e[8], v = e[9], u = e[10], g = e[11], y = e[12], w = e[13], x = e[14], _ = e[15], p = t[0], b = t[1], C = t[2], q = t[3], B = t[4], V = t[5], R = t[6], D = t[7], $ = t[8], M = t[9], A = t[10], T = t[11], z = t[12], U = t[13], j = t[14], K = t[15];
  return n[0] = o * p + l * b + f * C + y * q, n[1] = r * p + s * b + v * C + w * q, n[2] = i * p + d * b + u * C + x * q, n[3] = a * p + c * b + g * C + _ * q, n[4] = o * B + l * V + f * R + y * D, n[5] = r * B + s * V + v * R + w * D, n[6] = i * B + d * V + u * R + x * D, n[7] = a * B + c * V + g * R + _ * D, n[8] = o * $ + l * M + f * A + y * T, n[9] = r * $ + s * M + v * A + w * T, n[10] = i * $ + d * M + u * A + x * T, n[11] = a * $ + c * M + g * A + _ * T, n[12] = o * z + l * U + f * j + y * K, n[13] = r * z + s * U + v * j + w * K, n[14] = i * z + d * U + u * j + x * K, n[15] = a * z + c * U + g * j + _ * K, n;
}
function c2(e, t, n) {
  return n = n || J0(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function d2(e, t) {
  return t = t || oo(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function f2(e, t, n) {
  n = n || oo();
  const o = t * 4;
  return n[0] = e[o + 0], n[1] = e[o + 1], n[2] = e[o + 2], n;
}
function v2(e, t, n, o) {
  o !== e && (o = X0(e, o));
  const r = n * 4;
  return o[r + 0] = t[0], o[r + 1] = t[1], o[r + 2] = t[2], o;
}
function h2(e, t, n, o, r) {
  r = r || new Ct(16);
  const i = Math.tan(Math.PI * 0.5 - 0.5 * e), a = 1 / (n - o);
  return r[0] = i / t, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = i, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (n + o) * a, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = n * o * a * 2, r[15] = 0, r;
}
function m2(e, t, n, o, r, i, a) {
  return a = a || new Ct(16), a[0] = 2 / (t - e), a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / (o - n), a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 / (r - i), a[11] = 0, a[12] = (t + e) / (e - t), a[13] = (o + n) / (n - o), a[14] = (i + r) / (r - i), a[15] = 1, a;
}
function g2(e, t, n, o, r, i, a) {
  a = a || new Ct(16);
  const l = t - e, s = o - n, d = r - i;
  return a[0] = 2 * r / l, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * r / s, a[6] = 0, a[7] = 0, a[8] = (e + t) / l, a[9] = (o + n) / s, a[10] = i / d, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = r * i / d, a[15] = 0, a;
}
let bo, Ko, Gn;
function b2(e, t, n, o) {
  return o = o || new Ct(16), bo = bo || oo(), Ko = Ko || oo(), Gn = Gn || oo(), Za(G0(e, t, Gn), Gn), Za(zu(n, Gn, bo), bo), Za(zu(Gn, bo, Ko), Ko), o[0] = bo[0], o[1] = bo[1], o[2] = bo[2], o[3] = 0, o[4] = Ko[0], o[5] = Ko[1], o[6] = Ko[2], o[7] = 0, o[8] = Gn[0], o[9] = Gn[1], o[10] = Gn[2], o[11] = 0, o[12] = e[0], o[13] = e[1], o[14] = e[2], o[15] = 1, o;
}
function p2(e, t) {
  return t = t || new Ct(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function y2(e, t, n) {
  n = n || new Ct(16);
  const o = t[0], r = t[1], i = t[2], a = e[0], l = e[1], s = e[2], d = e[3], c = e[1 * 4 + 0], f = e[1 * 4 + 1], v = e[1 * 4 + 2], u = e[1 * 4 + 3], g = e[2 * 4 + 0], y = e[2 * 4 + 1], w = e[2 * 4 + 2], x = e[2 * 4 + 3], _ = e[3 * 4 + 0], p = e[3 * 4 + 1], b = e[3 * 4 + 2], C = e[3 * 4 + 3];
  return e !== n && (n[0] = a, n[1] = l, n[2] = s, n[3] = d, n[4] = c, n[5] = f, n[6] = v, n[7] = u, n[8] = g, n[9] = y, n[10] = w, n[11] = x), n[12] = a * o + c * r + g * i + _, n[13] = l * o + f * r + y * i + p, n[14] = s * o + v * r + w * i + b, n[15] = d * o + u * r + x * i + C, n;
}
function _2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), o = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = o, t[7] = 0, t[8] = 0, t[9] = -o, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function w2(e, t, n) {
  n = n || new Ct(16);
  const o = e[4], r = e[5], i = e[6], a = e[7], l = e[8], s = e[9], d = e[10], c = e[11], f = Math.cos(t), v = Math.sin(t);
  return n[4] = f * o + v * l, n[5] = f * r + v * s, n[6] = f * i + v * d, n[7] = f * a + v * c, n[8] = f * l - v * o, n[9] = f * s - v * r, n[10] = f * d - v * i, n[11] = f * c - v * a, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function x2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), o = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -o, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = o, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function C2(e, t, n) {
  n = n || new Ct(16);
  const o = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], a = e[0 * 4 + 3], l = e[2 * 4 + 0], s = e[2 * 4 + 1], d = e[2 * 4 + 2], c = e[2 * 4 + 3], f = Math.cos(t), v = Math.sin(t);
  return n[0] = f * o - v * l, n[1] = f * r - v * s, n[2] = f * i - v * d, n[3] = f * a - v * c, n[8] = f * l + v * o, n[9] = f * s + v * r, n[10] = f * d + v * i, n[11] = f * c + v * a, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function S2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), o = Math.sin(e);
  return t[0] = n, t[1] = o, t[2] = 0, t[3] = 0, t[4] = -o, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function T2(e, t, n) {
  n = n || new Ct(16);
  const o = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], a = e[0 * 4 + 3], l = e[1 * 4 + 0], s = e[1 * 4 + 1], d = e[1 * 4 + 2], c = e[1 * 4 + 3], f = Math.cos(t), v = Math.sin(t);
  return n[0] = f * o + v * l, n[1] = f * r + v * s, n[2] = f * i + v * d, n[3] = f * a + v * c, n[4] = f * l - v * o, n[5] = f * s - v * r, n[6] = f * d - v * i, n[7] = f * c - v * a, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function k2(e, t, n) {
  n = n || new Ct(16);
  let o = e[0], r = e[1], i = e[2];
  const a = Math.sqrt(o * o + r * r + i * i);
  o /= a, r /= a, i /= a;
  const l = o * o, s = r * r, d = i * i, c = Math.cos(t), f = Math.sin(t), v = 1 - c;
  return n[0] = l + (1 - l) * c, n[1] = o * r * v + i * f, n[2] = o * i * v - r * f, n[3] = 0, n[4] = o * r * v - i * f, n[5] = s + (1 - s) * c, n[6] = r * i * v + o * f, n[7] = 0, n[8] = o * i * v + r * f, n[9] = r * i * v - o * f, n[10] = d + (1 - d) * c, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function M2(e, t, n, o) {
  o = o || new Ct(16);
  let r = t[0], i = t[1], a = t[2];
  const l = Math.sqrt(r * r + i * i + a * a);
  r /= l, i /= l, a /= l;
  const s = r * r, d = i * i, c = a * a, f = Math.cos(n), v = Math.sin(n), u = 1 - f, g = s + (1 - s) * f, y = r * i * u + a * v, w = r * a * u - i * v, x = r * i * u - a * v, _ = d + (1 - d) * f, p = i * a * u + r * v, b = r * a * u + i * v, C = i * a * u - r * v, q = c + (1 - c) * f, B = e[0], V = e[1], R = e[2], D = e[3], $ = e[4], M = e[5], A = e[6], T = e[7], z = e[8], U = e[9], j = e[10], K = e[11];
  return o[0] = g * B + y * $ + w * z, o[1] = g * V + y * M + w * U, o[2] = g * R + y * A + w * j, o[3] = g * D + y * T + w * K, o[4] = x * B + _ * $ + p * z, o[5] = x * V + _ * M + p * U, o[6] = x * R + _ * A + p * j, o[7] = x * D + _ * T + p * K, o[8] = b * B + C * $ + q * z, o[9] = b * V + C * M + q * U, o[10] = b * R + C * A + q * j, o[11] = b * D + C * T + q * K, e !== o && (o[12] = e[12], o[13] = e[13], o[14] = e[14], o[15] = e[15]), o;
}
function q2(e, t) {
  return t = t || new Ct(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function E2(e, t, n) {
  n = n || new Ct(16);
  const o = t[0], r = t[1], i = t[2];
  return n[0] = o * e[0 * 4 + 0], n[1] = o * e[0 * 4 + 1], n[2] = o * e[0 * 4 + 2], n[3] = o * e[0 * 4 + 3], n[4] = r * e[1 * 4 + 0], n[5] = r * e[1 * 4 + 1], n[6] = r * e[1 * 4 + 2], n[7] = r * e[1 * 4 + 3], n[8] = i * e[2 * 4 + 0], n[9] = i * e[2 * 4 + 1], n[10] = i * e[2 * 4 + 2], n[11] = i * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function A2(e, t, n) {
  n = n || oo();
  const o = t[0], r = t[1], i = t[2], a = o * e[0 * 4 + 3] + r * e[1 * 4 + 3] + i * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (o * e[0 * 4 + 0] + r * e[1 * 4 + 0] + i * e[2 * 4 + 0] + e[3 * 4 + 0]) / a, n[1] = (o * e[0 * 4 + 1] + r * e[1 * 4 + 1] + i * e[2 * 4 + 1] + e[3 * 4 + 1]) / a, n[2] = (o * e[0 * 4 + 2] + r * e[1 * 4 + 2] + i * e[2 * 4 + 2] + e[3 * 4 + 2]) / a, n;
}
function L2(e, t, n) {
  n = n || oo();
  const o = t[0], r = t[1], i = t[2];
  return n[0] = o * e[0 * 4 + 0] + r * e[1 * 4 + 0] + i * e[2 * 4 + 0], n[1] = o * e[0 * 4 + 1] + r * e[1 * 4 + 1] + i * e[2 * 4 + 1], n[2] = o * e[0 * 4 + 2] + r * e[1 * 4 + 2] + i * e[2 * 4 + 2], n;
}
function B2(e, t, n) {
  n = n || oo();
  const o = Z0(e), r = t[0], i = t[1], a = t[2];
  return n[0] = r * o[0 * 4 + 0] + i * o[0 * 4 + 1] + a * o[0 * 4 + 2], n[1] = r * o[1 * 4 + 0] + i * o[1 * 4 + 1] + a * o[1 * 4 + 2], n[2] = r * o[2 * 4 + 0] + i * o[2 * 4 + 1] + a * o[2 * 4 + 2], n;
}
var R2 = Object.freeze({ __proto__: null, axisRotate: M2, axisRotation: k2, copy: X0, create: l2, frustum: g2, getAxis: f2, getTranslation: d2, identity: J0, inverse: Z0, lookAt: b2, multiply: u2, negate: a2, ortho: m2, perspective: h2, rotateX: w2, rotateY: C2, rotateZ: T2, rotationX: _2, rotationY: x2, rotationZ: S2, scale: E2, scaling: q2, setAxis: v2, setDefaultType: i2, setTranslation: c2, transformDirection: L2, transformNormal: B2, transformPoint: A2, translate: y2, translation: p2, transpose: s2 }), Wo = {}, Mv = {}, qv;
function P2() {
  return qv || (qv = 1, Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52)), Math.sign === void 0 && (Math.sign = function(e) {
    return e < 0 ? -1 : e > 0 ? 1 : +e;
  }), Function.prototype.name === void 0 && Object.defineProperty(Function.prototype, "name", { get: function() {
    return this.toString().match(/^\s*function\s*([^(\s]*)/)[1];
  } }), Object.assign === void 0 && function() {
    Object.assign = function(e) {
      if (e == null) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        if (o != null) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
      }
      return t;
    };
  }()), Mv;
}
var eu = {}, ui = {}, Ev;
function ns() {
  if (Ev) return ui;
  Ev = 1, Object.defineProperty(ui, "__esModule", { value: true }), ui.Tools = void 0;
  var e = { error: function(t) {
    console.error(t);
  } };
  return ui.Tools = e, ui;
}
var ci = {}, Av;
function gr() {
  if (Av) return ci;
  Av = 1, Object.defineProperty(ci, "__esModule", { value: true }), ci.V3 = void 0;
  var e = function() {
    function t(n, o, r) {
      this.x = n || 0, this.y = o || 0, this.z = r || 0;
    }
    return t.prototype.set = function(n, o, r) {
      return this.x = n || 0, this.y = o || 0, this.z = r || 0, this;
    }, t.prototype.distanceTo = function(n) {
      return Math.sqrt(this.distanceToSquared(n));
    }, t.prototype.distanceToSquared = function(n) {
      var o = this.x - n.x, r = this.y - n.y, i = this.z - n.z;
      return o * o + r * r + i * i;
    }, t.prototype.abs = function() {
      return new t(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y, this.z < 0 ? -this.z : this.z);
    }, t.prototype.dot = function(n) {
      return this.x * n.x + this.y * n.y + this.z * n.z;
    }, t.prototype.length = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }, t.prototype.lengthSq = function() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }, t.prototype.normalize = function() {
      return this.divideScalar(this.length() || 1);
    }, t.prototype.normalised = function() {
      return new t(this.x, this.y, this.z).normalize();
    }, t.prototype.add = function(n) {
      return this.x += n.x, this.y += n.y, this.z += n.z, this;
    }, t.prototype.min = function(n) {
      return this.x -= n.x, this.y -= n.y, this.z -= n.z, this;
    }, t.prototype.plus = function(n) {
      return new t(this.x + n.x, this.y + n.y, this.z + n.z);
    }, t.prototype.minus = function(n) {
      return new t(this.x - n.x, this.y - n.y, this.z - n.z);
    }, t.prototype.divideBy = function(n) {
      return new t(this.x / n, this.y / n, this.z / n);
    }, t.prototype.multiply = function(n) {
      return new t(this.x * n, this.y * n, this.z * n);
    }, t.prototype.multiplyScalar = function(n) {
      return this.x *= n, this.y *= n, this.z *= n, this;
    }, t.prototype.divideScalar = function(n) {
      return this.multiplyScalar(1 / n);
    }, t.prototype.cross = function(n) {
      return new t(this.y * n.z - this.z * n.y, this.z * n.x - this.x * n.z, this.x * n.y - this.y * n.x);
    }, t.prototype.crossVectors = function(n, o) {
      var r = n.x, i = n.y, a = n.z, l = o.x, s = o.y, d = o.z;
      return this.x = i * d - a * s, this.y = a * l - r * d, this.z = r * s - i * l, this;
    }, t.prototype.negate = function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, t.prototype.negated = function() {
      return new t(-this.x, -this.y, -this.z);
    }, t.prototype.clone = function() {
      return new t(this.x, this.y, this.z);
    }, t.prototype.copy = function(n) {
      return this.x = n.x, this.y = n.y, this.z = n.z, this;
    }, t.prototype.approximatelyEquals = function(n, o) {
      if (o < 0) return false;
      var r = Math.abs(this.x - n.x), i = Math.abs(this.y - n.y), a = Math.abs(this.z - n.z);
      return r < o && i < o && a < o;
    }, t.prototype.zero = function() {
      return this.x = 0, this.y = 0, this.z = 0, this;
    }, t.prototype.rotate = function(n, o) {
      var r = Math.cos(n), i = Math.sin(n), a, l, s;
      switch (o) {
        case "X":
          a = this.x, l = this.y * r - this.z * i, s = this.y * i + this.z * r;
          break;
        case "Y":
          a = this.z * i + this.x * r, l = this.y, s = this.z * r - this.x * i;
          break;
        case "Z":
          a = this.x * r - this.y * i, l = this.x * i + this.y * r, s = this.z;
          break;
      }
      return this.x = a, this.y = l, this.z = s, this;
    }, t.prototype.projectOnVector = function(n) {
      var o = n.dot(this) / n.lengthSq();
      return this.copy(n).multiplyScalar(o);
    }, Object.defineProperty(t.prototype, "projectOnPlane", { get: function() {
      var n = this, o = new t();
      return function(r) {
        return o.copy(n).projectOnVector(r.normalised()), n.min(o).normalize();
      };
    }, enumerable: false, configurable: true }), t.prototype.applyM3 = function(n) {
      var o = this.x, r = this.y, i = this.z, a = n.elements;
      return this.x = a[0] * o + a[1] * r + a[2] * i, this.y = a[3] * o + a[4] * r + a[5] * i, this.z = a[6] * o + a[7] * r + a[8] * i, this.normalize();
    }, t.prototype.applyMatrix3 = function(n) {
      var o = this.x, r = this.y, i = this.z, a = n.elements;
      return this.x = a[0] * o + a[3] * r + a[6] * i, this.y = a[1] * o + a[4] * r + a[7] * i, this.z = a[2] * o + a[5] * r + a[8] * i, this;
    }, t.prototype.applyQuaternion = function(n) {
      var o = this.x, r = this.y, i = this.z, a = n.x, l = n.y, s = n.z, d = n.w, c = d * o + l * i - s * r, f = d * r + s * o - a * i, v = d * i + a * r - l * o, u = -a * o - l * r - s * i;
      return this.x = c * d + u * -a + f * -s - v * -l, this.y = f * d + u * -l + v * -a - c * -s, this.z = v * d + u * -s + c * -l - f * -a, this;
    }, t.prototype.sign = function(n, o) {
      var r = this.cross(n).dot(o);
      return r >= 0 ? 1 : -1;
    }, t.prototype.angleTo = function(n) {
      var o = this.dot(n) / Math.sqrt(this.lengthSq() * n.lengthSq());
      return o <= -1 ? Math.PI : o >= 1 ? 0 : Math.acos(o);
    }, t.prototype.getSignedAngle = function(n, o) {
      var r = this.angleTo(n), i = this.sign(n, o);
      return i === 1 ? r : -r;
    }, t.prototype.constrainedUV = function(n, o, r, i, a) {
      var l = n.getSignedAngle(this, o);
      return l > a && this.copy(r.rotateAboutAxis(n, a, o)), l < i && this.copy(r.rotateAboutAxis(n, i, o)), this;
    }, t.prototype.limitAngle = function(n, o, r) {
      var i = n.angleTo(this);
      if (i > r) {
        var a = n.normalised().cross(this).normalize();
        this.copy(o.rotateAboutAxis(n, r, a));
      }
      return this;
    }, t.isVector3 = true, t;
  }();
  return ci.V3 = e, ci;
}
var Lv;
function Qc() {
  return Lv || (Lv = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e._Math = void 0;
    var t = ns(), n = gr();
    e._Math = { toRad: Math.PI / 180, toDeg: 180 / Math.PI, pi90: Math.PI * 0.5, findAngle: function(o, r) {
      var i = o.end.minus(r.end).lengthSq(), a = o.end.minus(o.start).lengthSq(), l = r.end.minus(o.start).lengthSq(), s, d = (i + a - l) / Math.sqrt(4 * i * a);
      d <= -1 ? s = Math.PI : d >= 1 ? s = 0 : s = Math.acos(d);
      var c = o.end.x * r.end.y - o.end.y * r.end.x;
      return c >= 0 ? s : -s;
    }, clamp: function(o, r, i) {
      return o = o < r ? r : o, o = o > i ? i : o, o;
    }, lerp: function(o, r, i) {
      return (1 - i) * o + i * r;
    }, rand: function(o, r) {
      return o + Math.random() * (r - o);
    }, randInt: function(o, r) {
      return o + Math.floor(Math.random() * (r - o + 1));
    }, nearEquals: function(o, r, i) {
      return Math.abs(o - r) <= i;
    }, perpendicular: function(o, r) {
      return !!e._Math.nearEquals(o.dot(r), 0, 0.01);
    }, genPerpendicularVectorQuick: function(o) {
      var r = o.clone();
      return Math.abs(o.y) < 0.99 ? r.set(-o.z, 0, o.x).normalize() : r.set(0, o.z, -o.y).normalize();
    }, genPerpendicularVectorFrisvad: function(o) {
      var r = o.clone();
      if (o.z < -0.9999999) return r.set(0, -1, 0);
      var i = 1 / (1 + o.z);
      return r.set(1 - o.x * o.x * i, -o.x * o.y * i, -o.x).normalize();
    }, rotateXDegs: function(o, r) {
      return o.clone().rotate(r * e._Math.toRad, "X");
    }, rotateYDegs: function(o, r) {
      return o.clone().rotate(r * e._Math.toRad, "Y");
    }, rotateZDegs: function(o, r) {
      return o.clone().rotate(r * e._Math.toRad, "Z");
    }, withinManhattanDistance: function(o, r, i) {
      return !(Math.abs(r.x - o.x) > i || Math.abs(r.y - o.y) > i || Math.abs(r.z - o.z) > i);
    }, manhattanDistanceBetween: function(o, r) {
      return Math.abs(r.x - o.x) + Math.abs(r.x - o.x) + Math.abs(r.x - o.x);
    }, distanceBetween: function(o, r) {
      var i = r.x - o.x, a = r.y - o.y, l = o instanceof n.V3 && r instanceof n.V3 ? r.z - o.z : 0;
      return Math.sqrt(i * i + a * a + l * l);
    }, rotateDegs: function(o, r) {
      return o.clone().rotate(r * e._Math.toRad);
    }, validateDirectionUV: function(o) {
      o.length() < 0 && t.Tools.error("vector direction unit vector cannot be zero.");
    }, validateLength: function(o) {
      o < 0 && t.Tools.error("Length must be a greater than or equal to zero.");
    } };
  }(eu)), eu;
}
var di = {}, Bv;
function os() {
  if (Bv) return di;
  Bv = 1, Object.defineProperty(di, "__esModule", { value: true }), di.V2 = void 0;
  var e = function() {
    function t(n, o) {
      this.x = n || 0, this.y = o || 0;
    }
    return t.prototype.set = function(n, o) {
      return this.x = n || 0, this.y = o || 0, this;
    }, t.prototype.distanceTo = function(n) {
      return Math.sqrt(this.distanceToSquared(n));
    }, t.prototype.distanceToSquared = function(n) {
      var o = this.x - n.x, r = this.y - n.y;
      return o * o + r * r;
    }, t.prototype.multiplyScalar = function(n) {
      return this.x *= n, this.y *= n, this;
    }, t.prototype.divideScalar = function(n) {
      return this.multiplyScalar(1 / n);
    }, t.prototype.length = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }, t.prototype.normalize = function() {
      return this.divideScalar(this.length() || 1);
    }, t.prototype.normalised = function() {
      return new t(this.x, this.y).normalize();
    }, t.prototype.lengthSq = function() {
      return this.x * this.x + this.y * this.y;
    }, t.prototype.add = function(n) {
      return this.x += n.x, this.y += n.y, this;
    }, t.prototype.plus = function(n) {
      return new t(this.x + n.x, this.y + n.y);
    }, t.prototype.min = function(n) {
      return this.x -= n.x, this.y -= n.y, this;
    }, t.prototype.minus = function(n) {
      return new t(this.x - n.x, this.y - n.y);
    }, t.prototype.divideBy = function(n) {
      return new t(this.x, this.y).divideScalar(n);
    }, t.prototype.dot = function(n) {
      return this.x * n.x + this.y * n.y;
    }, t.prototype.negate = function() {
      return this.x = -this.x, this.y = -this.y, this;
    }, t.prototype.negated = function() {
      return new t(-this.x, -this.y);
    }, t.prototype.clone = function() {
      return new t(this.x, this.y);
    }, t.prototype.copy = function(n) {
      return this.x = n.x, this.y = n.y, this;
    }, t.prototype.cross = function(n) {
      return this.x * n.y - this.y * n.x;
    }, t.prototype.sign = function(n) {
      var o = this.cross(n);
      return o >= 0 ? 1 : -1;
    }, t.prototype.approximatelyEquals = function(n, o) {
      if (o < 0) return false;
      var r = Math.abs(this.x - n.x), i = Math.abs(this.y - n.y);
      return r < o && i < o;
    }, t.prototype.rotate = function(n) {
      var o = Math.cos(n), r = Math.sin(n), i = this.x * o - this.y * r, a = this.x * r + this.y * o;
      return this.x = i, this.y = a, this;
    }, t.prototype.angleTo = function(n) {
      var o = this.dot(n) / Math.sqrt(this.lengthSq() * n.lengthSq());
      return o <= -1 ? Math.PI : o >= 1 ? 0 : Math.acos(o);
    }, t.prototype.getSignedAngle = function(n) {
      var o = this.angleTo(n), r = this.sign(n);
      return r === 1 ? o : -o;
    }, t.prototype.constrainedUV = function(n, o, r) {
      var i = n.getSignedAngle(this);
      return i > r && this.copy(n).rotate(r), i < o && this.copy(n).rotate(o), this;
    }, t.isVector2 = true, t;
  }();
  return di.V2 = e, di;
}
var fi = {}, Rv;
function Kc() {
  if (Rv) return fi;
  Rv = 1, Object.defineProperty(fi, "__esModule", { value: true }), fi.M3 = void 0;
  var e = gr(), t = function() {
    function n() {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("M3: the constructor no longer reads arguments. use .set() instead.");
    }
    return n.prototype.set = function(o, r, i, a, l, s, d, c, f) {
      var v = this.elements;
      return v[0] = o, v[1] = a, v[2] = d, v[3] = r, v[4] = l, v[5] = c, v[6] = i, v[7] = s, v[8] = f, this;
    }, n.prototype.identity = function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }, n.prototype.setV3 = function(o, r, i) {
      var a = this.elements;
      return a[0] = o.x, a[3] = o.y, a[6] = o.z, a[1] = r.x, a[4] = r.y, a[7] = r.z, a[2] = i.x, a[5] = i.y, a[8] = i.z, this;
    }, n.prototype.transpose = function() {
      var o, r = this.elements;
      return o = r[1], r[1] = r[3], r[3] = o, o = r[2], r[2] = r[6], r[6] = o, o = r[5], r[5] = r[7], r[7] = o, this;
    }, n.prototype.createRotationMatrix = function(o) {
      var r = o, i = new e.V3(1, 0, 0), a = new e.V3(0, 1, 0);
      if (o.z < -0.9999999) i.set(1, 0, 0), a.set(0, 1, 0);
      else {
        var l = 1 / (1 + r.z), s = -r.x * r.y * l;
        i.set(1 - r.x * r.x * l, s, -r.x).normalize(), a.set(s, 1 - r.y * r.y * l, -r.y).normalize();
      }
      return this.setV3(i, a, r);
    }, n.prototype.rotateAboutAxis = function(o, r, i) {
      var a = Math.sin(r), l = Math.cos(r), s = 1 - l, d = i.x * i.y * s, c = i.x * i.z * s, f = i.y * i.z * s, v = this.elements;
      return v[0] = i.x * i.x * s + l, v[3] = d + i.z * a, v[6] = c - i.y * a, v[1] = d - i.z * a, v[4] = i.y * i.y * s + l, v[7] = f + i.x * a, v[2] = c + i.y * a, v[5] = f - i.x * a, v[8] = i.z * i.z * s + l, o.clone().applyM3(this);
    }, n.isMatrix3 = true, n;
  }();
  return fi.M3 = t, fi;
}
var vi = {}, tu = {}, Pv;
function uo() {
  return Pv || (Pv = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.RIGHT = e.LEFT = e.DOWN = e.UP = e.Z_NEG = e.Y_NEG = e.X_NEG = e.Z_AXE = e.Y_AXE = e.X_AXE = e.ConnectionType = e.JointType = e.BaseboneConstraintType = e.TODEG = e.TORAD = e.PI = e.MAX_VALUE = e.PRECISION_DEG = e.PRECISION = e.REVISION = void 0;
    var t = gr(), n = os();
    e.REVISION = "1.3.3", e.PRECISION = 1e-3, e.PRECISION_DEG = 0.01, e.MAX_VALUE = 1 / 0, e.PI = Math.PI, e.TORAD = Math.PI / 180, e.TODEG = 180 / Math.PI, function(o) {
      o[o.NONE = 1] = "NONE", o[o.GLOBAL_ROTOR = 2] = "GLOBAL_ROTOR", o[o.GLOBAL_HINGE = 3] = "GLOBAL_HINGE", o[o.LOCAL_ROTOR = 4] = "LOCAL_ROTOR", o[o.LOCAL_HINGE = 5] = "LOCAL_HINGE", o[o.GLOBAL_ABSOLUTE = 6] = "GLOBAL_ABSOLUTE", o[o.LOCAL_RELATIVE = 7] = "LOCAL_RELATIVE", o[o.LOCAL_ABSOLUTE = 8] = "LOCAL_ABSOLUTE";
    }(e.BaseboneConstraintType || (e.BaseboneConstraintType = {})), function(o) {
      o[o.J_BALL = 10] = "J_BALL", o[o.J_LOCAL = 11] = "J_LOCAL", o[o.J_GLOBAL = 12] = "J_GLOBAL";
    }(e.JointType || (e.JointType = {})), function(o) {
      o[o.START = 20] = "START", o[o.END = 21] = "END";
    }(e.ConnectionType || (e.ConnectionType = {})), e.X_AXE = new t.V3(1, 0, 0), e.Y_AXE = new t.V3(0, 1, 0), e.Z_AXE = new t.V3(0, 0, 1), e.X_NEG = new t.V3(-1, 0, 0), e.Y_NEG = new t.V3(0, -1, 0), e.Z_NEG = new t.V3(0, 0, -1), e.UP = new n.V2(0, 1), e.DOWN = new n.V2(0, -1), e.LEFT = new n.V2(-1, 0), e.RIGHT = new n.V2(1, 0);
  }(tu)), tu;
}
var Dv;
function eb() {
  if (Dv) return vi;
  Dv = 1, Object.defineProperty(vi, "__esModule", { value: true }), vi.Joint3D = void 0;
  var e = gr(), t = uo(), n = function() {
    function o() {
      this.rotor = t.PI, this.min = -t.PI, this.max = t.PI, this.freeHinge = true, this.rotationAxisUV = new e.V3(), this.referenceAxisUV = new e.V3(), this.type = t.JointType.J_BALL;
    }
    return o.prototype.clone = function() {
      var r = new o();
      return r.type = this.type, r.rotor = this.rotor, r.max = this.max, r.min = this.min, r.freeHinge = this.freeHinge, r.rotationAxisUV.copy(this.rotationAxisUV), r.referenceAxisUV.copy(this.referenceAxisUV), r;
    }, o.prototype.testAngle = function() {
      this.max === t.PI && this.min === -t.PI ? this.freeHinge = true : this.freeHinge = false;
    }, o.prototype.validateAngle = function(r) {
      return r = r < 0 ? 0 : r, r = r > 180 ? 180 : r, r;
    }, o.prototype.setAsBallJoint = function(r) {
      this.rotor = this.validateAngle(r) * t.TORAD, this.type = t.JointType.J_BALL;
    }, o.prototype.setHinge = function(r, i, a, l, s) {
      this.type = r, a < 0 && (a *= -1), this.min = -this.validateAngle(a) * t.TORAD, this.max = this.validateAngle(l) * t.TORAD, this.testAngle(), this.rotationAxisUV.copy(i).normalize(), this.referenceAxisUV.copy(s).normalize();
    }, o.prototype.getHingeReferenceAxis = function() {
      return this.referenceAxisUV;
    }, o.prototype.getHingeRotationAxis = function() {
      return this.rotationAxisUV;
    }, o.prototype.setBallJointConstraintDegs = function(r) {
      this.rotor = this.validateAngle(r) * t.TORAD;
    }, o.prototype.setHingeClockwise = function(r) {
      r < 0 && (r *= -1), this.min = -this.validateAngle(r) * t.TORAD, this.testAngle();
    }, o.prototype.setHingeAnticlockwise = function(r) {
      this.max = this.validateAngle(r) * t.TORAD, this.testAngle();
    }, o.isJoint3D = true, o;
  }();
  return vi.Joint3D = n, vi;
}
var hi = {}, Ov;
function tb() {
  if (Ov) return hi;
  Ov = 1, Object.defineProperty(hi, "__esModule", { value: true }), hi.Bone3D = void 0;
  var e = uo(), t = eb(), n = gr(), o = function() {
    function r(i, a, l, s) {
      this.joint = new t.Joint3D(), this.start = new n.V3(), this.end = new n.V3(), this.boneConnectionPoint = e.ConnectionType.END, this.length = 0, this.name = "", this.init(i, a, l, s);
    }
    return r.prototype.init = function(i, a, l, s) {
      this.setStartLocation(i), a ? (this.setEndLocation(a), this.length = this.getLength()) : s && l && (this.setLength(s), this.setEndLocation(this.start.plus(l.normalised().multiplyScalar(s))));
    }, r.prototype.clone = function() {
      var i = new r(this.start, this.end);
      return i.joint = this.joint.clone(), i;
    }, r.prototype.setBoneConnectionPoint = function(i) {
      this.boneConnectionPoint = i;
    }, r.prototype.setHingeClockwise = function(i) {
      this.joint.setHingeClockwise(i);
    }, r.prototype.setHingeAnticlockwise = function(i) {
      this.joint.setHingeAnticlockwise(i);
    }, r.prototype.setBallJointConstraintDegs = function(i) {
      this.joint.setBallJointConstraintDegs(i);
    }, r.prototype.setStartLocation = function(i) {
      this.start.copy(i);
    }, r.prototype.setEndLocation = function(i) {
      this.end.copy(i);
    }, r.prototype.setLength = function(i) {
      i > 0 && (this.length = i);
    }, r.prototype.setJoint = function(i) {
      this.joint = i;
    }, r.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, r.prototype.getDirectionUV = function() {
      return this.end.minus(this.start).normalize();
    }, r.prototype.getLength = function() {
      return this.start.distanceTo(this.end);
    }, r.isBone3D = true, r;
  }();
  return hi.Bone3D = o, hi;
}
var mi = {}, Vv;
function D2() {
  if (Vv) return mi;
  Vv = 1, Object.defineProperty(mi, "__esModule", { value: true }), mi.Chain3D = void 0;
  var e = uo(), t = Qc(), n = gr(), o = Kc(), r = tb(), i = ns(), a = function() {
    function l() {
      this.tmpTarget = new n.V3(), this.tmpMtx = new o.M3(), this.bones = [], this.name = "", this.solveDistanceThreshold = 1, this.minIterationChange = 0.01, this.maxIteration = 20, this.precision = 1e-3, this.chainLength = 0, this.numBones = 0, this.baseLocation = new n.V3(), this.fixedBaseMode = true, this.baseboneConstraintType = e.BaseboneConstraintType.NONE, this.baseboneConstraintUV = new n.V3(), this.baseboneRelativeConstraintUV = new n.V3(), this.baseboneRelativeReferenceConstraintUV = new n.V3(), this.lastTargetLocation = new n.V3(e.MAX_VALUE, e.MAX_VALUE, e.MAX_VALUE), this.lastBaseLocation = new n.V3(e.MAX_VALUE, e.MAX_VALUE, e.MAX_VALUE), this.currentSolveDistance = e.MAX_VALUE, this.connectedChainNumber = -1, this.connectedBoneNumber = -1, this.boneConnectionPoint = e.ConnectionType.END, this.isFullForward = false, this.embeddedTarget = new n.V3(), this.useEmbeddedTarget = false;
    }
    return l.prototype.clone = function() {
      var s = new l();
      return s.solveDistanceThreshold = this.solveDistanceThreshold, s.minIterationChange = this.minIterationChange, s.maxIteration = this.maxIteration, s.precision = this.precision, s.bones = this.cloneBones(), s.baseLocation.copy(this.baseLocation), s.lastTargetLocation.copy(this.lastTargetLocation), s.lastBaseLocation.copy(this.lastBaseLocation), this.baseboneConstraintType !== e.BaseboneConstraintType.NONE && (s.baseboneConstraintUV.copy(this.baseboneConstraintUV), s.baseboneRelativeConstraintUV.copy(this.baseboneRelativeConstraintUV)), s.fixedBaseMode = this.fixedBaseMode, s.chainLength = this.chainLength, s.numBones = this.numBones, s.currentSolveDistance = this.currentSolveDistance, s.boneConnectionPoint = this.boneConnectionPoint, s.connectedChainNumber = this.connectedChainNumber, s.connectedBoneNumber = this.connectedBoneNumber, s.baseboneConstraintType = this.baseboneConstraintType, s.embeddedTarget = this.embeddedTarget.clone(), s.useEmbeddedTarget = this.useEmbeddedTarget, s;
    }, l.prototype.clear = function() {
      for (var s = this.numBones; s--; ) this.removeBone(s);
      this.numBones = 0;
    }, l.prototype.addBone = function(s) {
      this.bones.push(s), this.numBones++, this.numBones === 1 && (this.baseLocation.copy(s.start), this.baseboneConstraintUV.copy(s.getDirectionUV())), this.updateChainLength();
    }, l.prototype.removeBone = function(s) {
      s < this.numBones && (this.bones.splice(s, 1), this.numBones--, this.updateChainLength());
    }, l.prototype.addConsecutiveBone = function(s, d) {
      this.numBones > 0 && this.addBone(new r.Bone3D(this.bones[this.numBones - 1].end, void 0, s.normalised(), d));
    }, l.prototype.addConsecutiveFreelyRotatingHingedBone = function(s, d, c, f) {
      this.addConsecutiveHingedBone(s, d, c, f, 180, 180, t._Math.genPerpendicularVectorQuick(f));
    }, l.prototype.addConsecutiveHingedBone = function(s, d, c, f, v, u, g) {
      if (this.numBones !== 0) {
        var y = s.normalised(), w = f.normalised(), x = new r.Bone3D(this.bones[this.numBones - 1].end, void 0, y, d);
        c = c || "global", x.joint.setHinge(c === "global" ? e.JointType.J_GLOBAL : e.JointType.J_LOCAL, w, v, u, g), this.addBone(x);
      }
    }, l.prototype.addConsecutiveRotorConstrainedBone = function(s, d, c) {
      if (this.numBones !== 0) {
        s = s.normalised();
        var f = new r.Bone3D(this.bones[this.numBones - 1].end, void 0, s, d);
        f.joint.setAsBallJoint(c), this.addBone(f);
      }
    }, l.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, l.prototype.getConnectedBoneNumber = function() {
      return this.connectedBoneNumber;
    }, l.prototype.getConnectedChainNumber = function() {
      return this.connectedChainNumber;
    }, l.prototype.getBaseboneConstraintType = function() {
      return this.baseboneConstraintType;
    }, l.prototype.getBaseboneConstraintUV = function() {
      if (this.baseboneConstraintType !== e.BaseboneConstraintType.NONE) return this.baseboneConstraintUV;
    }, l.prototype.getBaseLocation = function() {
      return this.bones[0].start;
    }, l.prototype.getEffectorLocation = function() {
      return this.bones[this.numBones - 1].end;
    }, l.prototype.getLastTargetLocation = function() {
      return this.lastTargetLocation;
    }, l.prototype.getLiveChainLength = function() {
      for (var s = 0, d = this.numBones; d--; ) s += this.bones[d].getLength();
      return s;
    }, l.prototype.getBaseboneRelativeReferenceConstraintUV = function() {
      return this.baseboneRelativeReferenceConstraintUV;
    }, l.prototype.setConnectedBoneNumber = function(s) {
      this.connectedBoneNumber = s;
    }, l.prototype.setConnectedChainNumber = function(s) {
      this.connectedChainNumber = s;
    }, l.prototype.setBoneConnectionPoint = function(s) {
      this.boneConnectionPoint = s;
    }, l.prototype.setBaseboneRelativeConstraintUV = function(s) {
      s && (this.baseboneRelativeConstraintUV = s.normalised());
    }, l.prototype.setBaseboneRelativeReferenceConstraintUV = function(s) {
      this.baseboneRelativeReferenceConstraintUV = s.normalised();
    }, l.prototype.setBaseboneConstraintUV = function(s) {
      this.baseboneConstraintUV = s.normalised();
    }, l.prototype.setRotorBaseboneConstraint = function(s, d, c) {
      if (this.numBones === 0) {
        i.Tools.error("Chain must contain a basebone before we can specify the basebone constraint type.");
        return;
      }
      if (!(d.length() > 0)) {
        i.Tools.error("Constraint axis cannot be zero.");
        return;
      }
      s = s || "global", this.baseboneConstraintType = s === "global" ? e.BaseboneConstraintType.GLOBAL_ROTOR : e.BaseboneConstraintType.LOCAL_ROTOR, this.baseboneConstraintUV = d.normalised(), this.baseboneRelativeConstraintUV.copy(this.baseboneConstraintUV), this.bones[0].joint.setAsBallJoint(c);
    }, l.prototype.setHingeBaseboneConstraint = function(s, d, c, f, v) {
      if (this.numBones === 0) {
        i.Tools.error("Chain must contain a basebone before we can specify the basebone constraint type.");
        return;
      }
      if (d.length() <= 0) {
        i.Tools.error("Hinge rotation axis cannot be zero.");
        return;
      }
      if (v.length() <= 0) {
        i.Tools.error("Hinge reference axis cannot be zero.");
        return;
      }
      if (!t._Math.perpendicular(d, v)) {
        i.Tools.error("The hinge reference axis must be in the plane of the hinge rotation axis, that is, they must be perpendicular.");
        return;
      }
      s = s || "global", this.baseboneConstraintType = s === "global" ? e.BaseboneConstraintType.GLOBAL_HINGE : e.BaseboneConstraintType.LOCAL_HINGE, this.baseboneConstraintUV = d.normalised(), this.bones[0].joint.setHinge(s === "global" ? e.JointType.J_GLOBAL : e.JointType.J_LOCAL, d, c, f, v);
    }, l.prototype.setFreelyRotatingGlobalHingedBasebone = function(s) {
      this.setHingeBaseboneConstraint("global", s, 180, 180, t._Math.genPerpendicularVectorQuick(s));
    }, l.prototype.setGlobalHingedBasebone = function(s, d, c, f) {
      this.setHingeBaseboneConstraint("global", s, d, c, f);
    }, l.prototype.setFreelyRotatingLocalHingedBasebone = function(s) {
      this.setHingeBaseboneConstraint("local", s, 180, 180, t._Math.genPerpendicularVectorQuick(s));
    }, l.prototype.setLocalHingedBasebone = function(s, d, c, f) {
      this.setHingeBaseboneConstraint("local", s, d, c, f);
    }, l.prototype.setBaseLocation = function(s) {
      this.baseLocation.copy(s);
    }, l.prototype.setFixedBaseMode = function(s) {
      !s && this.connectedChainNumber !== -1 || this.baseboneConstraintType === e.BaseboneConstraintType.GLOBAL_ROTOR && !s || (this.fixedBaseMode = s);
    }, l.prototype.setMaxIterationAttempts = function(s) {
      s < 1 || (this.maxIteration = s);
    }, l.prototype.setMinIterationChange = function(s) {
      s < 0 || (this.minIterationChange = s);
    }, l.prototype.setSolveDistanceThreshold = function(s) {
      s < 0 || (this.solveDistanceThreshold = s);
    }, l.prototype.solveForEmbeddedTarget = function() {
      if (this.useEmbeddedTarget) return this.solveForTarget(this.embeddedTarget);
    }, l.prototype.resetTarget = function() {
      this.lastBaseLocation = new n.V3(e.MAX_VALUE, e.MAX_VALUE, e.MAX_VALUE), this.currentSolveDistance = e.MAX_VALUE;
    }, l.prototype.solveForTarget = function(s) {
      this.tmpTarget.set(s.x, s.y, s.z);
      var d = this.precision, c = this.lastBaseLocation.approximatelyEquals(this.baseLocation, d);
      if (this.lastTargetLocation.approximatelyEquals(this.tmpTarget, d) && c) return this.currentSolveDistance;
      var f, v = null;
      c ? (f = this.bones[this.numBones - 1].end.distanceTo(this.tmpTarget), v = this.cloneBones()) : f = e.MAX_VALUE;
      for (var u = [], g = e.MAX_VALUE, y = e.MAX_VALUE, w, x = this.maxIteration; x--; ) {
        if (w = this.solveIK(this.tmpTarget), w !== void 0 && w < g) {
          if (g = w, u = this.cloneBones(), w <= this.solveDistanceThreshold) break;
        } else if (w === void 0 || Math.abs(w - y) < this.minIterationChange) break;
        y = w;
      }
      return g < f ? (this.currentSolveDistance = g, this.bones = u) : (this.currentSolveDistance = f, this.bones = v || this.bones), this.lastBaseLocation.copy(this.baseLocation), this.lastTargetLocation.copy(this.tmpTarget), this.currentSolveDistance;
    }, l.prototype.solveIK = function(s) {
      if (this.numBones !== 0) {
        for (var d, c, f, v, u, g, y = this.tmpMtx, w = this.numBones; w--; ) if (d = this.bones[w], c = d.length, f = d.joint, v = f.type, w !== this.numBones - 1) {
          u = this.bones[w + 1];
          var x = u.getDirectionUV().negate(), _ = d.getDirectionUV().negate();
          switch (v) {
            case e.JointType.J_BALL:
              _.limitAngle(x, y, f.rotor);
              break;
            case e.JointType.J_GLOBAL:
              g = f.getHingeRotationAxis(), _.projectOnPlane(g);
              break;
            case e.JointType.J_LOCAL:
              w > 0 ? (y.createRotationMatrix(this.bones[w - 1].getDirectionUV()), g = f.getHingeRotationAxis().clone().applyM3(y)) : g = this.baseboneRelativeConstraintUV, _.projectOnPlane(g);
              break;
          }
          var p = d.end.plus(_.multiplyScalar(c));
          d.setStartLocation(p), w > 0 && this.bones[w - 1].setEndLocation(p);
        } else {
          d.setEndLocation(s);
          var _ = d.getDirectionUV().negated();
          switch (v) {
            case e.JointType.J_BALL:
              break;
            case e.JointType.J_GLOBAL:
              g = f.getHingeRotationAxis(), _.projectOnPlane(g);
              break;
            case e.JointType.J_LOCAL:
              y.createRotationMatrix(this.bones[w - 1].getDirectionUV()), g = f.getHingeRotationAxis().clone().applyM3(y), _.projectOnPlane(g);
              break;
          }
          var p = s.plus(_.multiplyScalar(c));
          d.setStartLocation(p), w > 0 && this.bones[w - 1].setEndLocation(p);
        }
        for (w = 0; w < this.numBones; w++) if (d = this.bones[w], c = d.length, f = d.joint, v = f.type, w !== 0) {
          var b = d.getDirectionUV(), C = this.bones[w - 1].getDirectionUV(), q = void 0, B = void 0;
          switch (v) {
            case e.JointType.J_BALL:
              b.limitAngle(C, y, f.rotor);
              break;
            case e.JointType.J_GLOBAL:
              q = f.getHingeRotationAxis(), B = f.getHingeReferenceAxis(), b.projectOnPlane(q), f.freeHinge || b.constrainedUV(B, q, y, f.min, f.max);
              break;
            case e.JointType.J_LOCAL:
              y.createRotationMatrix(C), q = f.getHingeRotationAxis().clone().applyM3(y), B = f.getHingeReferenceAxis().clone().applyM3(y), b.projectOnPlane(q), f.freeHinge || b.constrainedUV(B, q, y, f.min, f.max);
              break;
          }
          var V = d.start.plus(b.multiplyScalar(c));
          d.setEndLocation(V), w < this.numBones - 1 && this.bones[w + 1].setStartLocation(V);
        } else {
          this.fixedBaseMode ? d.setStartLocation(this.baseLocation) : d.setStartLocation(d.end.minus(d.getDirectionUV().multiplyScalar(c)));
          var b = d.getDirectionUV(), R = void 0, B = void 0;
          switch (this.baseboneConstraintType) {
            case e.BaseboneConstraintType.NONE:
              break;
            case e.BaseboneConstraintType.GLOBAL_ROTOR:
              b.limitAngle(this.baseboneConstraintUV, y, f.rotor);
              break;
            case e.BaseboneConstraintType.LOCAL_ROTOR:
              b.limitAngle(this.baseboneRelativeConstraintUV, y, f.rotor);
              break;
            case e.BaseboneConstraintType.GLOBAL_HINGE:
              R = f.getHingeRotationAxis(), B = f.getHingeReferenceAxis(), b.projectOnPlane(R), f.freeHinge || b.constrainedUV(B, R, y, f.min, f.max);
              break;
            case e.BaseboneConstraintType.LOCAL_HINGE:
              R = this.baseboneRelativeConstraintUV, B = this.baseboneRelativeReferenceConstraintUV, b.projectOnPlane(R), f.freeHinge || b.constrainedUV(B, R, y, f.min, f.max);
              break;
          }
          var V = d.start.plus(b.multiplyScalar(c));
          d.setEndLocation(V), this.numBones > 1 && this.bones[1].setStartLocation(V);
        }
        return this.lastTargetLocation.copy(s), this.bones[this.numBones - 1].end.distanceTo(s);
      }
    }, l.prototype.updateChainLength = function() {
      this.chainLength = 0;
      for (var s = this.numBones; s--; ) this.chainLength += this.bones[s].length;
    }, l.prototype.cloneBones = function() {
      for (var s = [], d = 0, c = this.bones.length; d < c; d++) s.push(this.bones[d].clone());
      return s;
    }, l.isChain3D = true, l;
  }();
  return mi.Chain3D = a, mi;
}
var gi = {}, Fv;
function O2() {
  if (Fv) return gi;
  Fv = 1, Object.defineProperty(gi, "__esModule", { value: true }), gi.Structure3D = void 0;
  var e = uo(), t = Kc(), n = function() {
    function o() {
      this.fixedBaseMode = true, this.chains = [], this.targets = [], this.numChains = 0, this.tmpMtx = new t.M3();
    }
    return o.prototype.update = function() {
      for (var r, i, a, l, s, d, c = 0; c < this.numChains; c++) {
        if (i = this.chains[c], a = this.targets[c], l = i.getConnectedChainNumber(), l !== -1) {
          s = this.chains[l].bones[i.getConnectedBoneNumber()], i.setBaseLocation(i.getBoneConnectionPoint() === e.ConnectionType.START ? s.start : s.end), d = i.getBaseboneConstraintType();
          var f = void 0;
          switch (d) {
            case e.BaseboneConstraintType.NONE:
            case e.BaseboneConstraintType.GLOBAL_ROTOR:
            case e.BaseboneConstraintType.GLOBAL_HINGE:
              break;
            case e.BaseboneConstraintType.LOCAL_ROTOR:
            case e.BaseboneConstraintType.LOCAL_HINGE:
              this.tmpMtx.createRotationMatrix(s.getDirectionUV()), f = (r = i.getBaseboneConstraintUV()) === null || r === void 0 ? void 0 : r.clone().applyM3(this.tmpMtx), i.setBaseboneRelativeConstraintUV(f), d === e.BaseboneConstraintType.LOCAL_HINGE && i.setBaseboneRelativeReferenceConstraintUV(i.bones[0].joint.getHingeReferenceAxis().clone().applyM3(this.tmpMtx));
              break;
          }
        }
        i.useEmbeddedTarget ? i.solveForEmbeddedTarget() : i.solveForTarget(a);
      }
    }, o.prototype.clear = function() {
      var r;
      for (r = this.numChains; r--; ) this.remove(r);
      this.chains = [], this.targets = [];
    }, o.prototype.add = function(r, i) {
      this.chains.push(r), this.targets.push(i), this.numChains++;
    }, o.prototype.remove = function(r) {
      this.chains[r].clear(), this.chains.splice(r, 1), this.targets.splice(r, 1), this.numChains--;
    }, o.prototype.setFixedBaseMode = function(r) {
      this.fixedBaseMode = r;
      for (var i = this.numChains, a; i--; ) a = this.chains[i].getConnectedChainNumber(), a === -1 && this.chains[i].setFixedBaseMode(this.fixedBaseMode);
    }, o.prototype.getNumChains = function() {
      return this.numChains;
    }, o.prototype.getChain = function(r) {
      return this.chains[r];
    }, o.prototype.connectChain = function(r, i, a, l, s) {
      var d = i, c = a;
      if (!(i > this.numChains) && !(a > this.chains[i].numBones)) {
        var f = r.clone();
        f.setBoneConnectionPoint(l === "end" ? e.ConnectionType.END : e.ConnectionType.START), f.setConnectedChainNumber(d), f.setConnectedBoneNumber(c);
        var v = l === "end" ? this.chains[d].bones[c].end : this.chains[d].bones[c].start;
        f.setBaseLocation(v), f.setFixedBaseMode(true);
        for (var u = 0; u < f.numBones; u++) f.bones[u].start.add(v), f.bones[u].end.add(v);
        this.add(f, s);
      }
    }, o;
  }();
  return gi.Structure3D = n, gi;
}
var bi = {}, $v;
function nb() {
  if ($v) return bi;
  $v = 1, Object.defineProperty(bi, "__esModule", { value: true }), bi.Joint2D = void 0;
  var e = uo(), t = function() {
    function n(o, r, i) {
      o === void 0 && (o = 0), this.isJoint2D = true, this.coordinateSystem = i || e.JointType.J_LOCAL, o < 0 && (o *= -1), this.min = o !== void 0 ? -o * e.TORAD : -e.PI, this.max = r !== void 0 ? r * e.TORAD : e.PI;
    }
    return n.prototype.clone = function() {
      var o = new n();
      return o.coordinateSystem = this.coordinateSystem, o.max = this.max, o.min = this.min, o;
    }, n.prototype.validateAngle = function(o) {
      return o = o < 0 ? 0 : o, o = o > 180 ? 180 : o, o;
    }, n.prototype.set = function(o) {
      this.max = o.max, this.min = o.min, this.coordinateSystem = o.coordinateSystem;
    }, n.prototype.setClockwiseConstraintDegs = function(o) {
      o < 0 && (o *= -1), this.min = -(this.validateAngle(o) * e.TORAD);
    }, n.prototype.setAnticlockwiseConstraintDegs = function(o) {
      this.max = this.validateAngle(o) * e.TORAD;
    }, n.prototype.setConstraintCoordinateSystem = function(o) {
      this.coordinateSystem = o;
    }, n.prototype.getConstraintCoordinateSystem = function() {
      return this.coordinateSystem;
    }, n;
  }();
  return bi.Joint2D = t, bi;
}
var pi = {}, Iv;
function ob() {
  if (Iv) return pi;
  Iv = 1, Object.defineProperty(pi, "__esModule", { value: true }), pi.Bone2D = void 0;
  var e = uo(), t = nb(), n = os(), o = function() {
    function r(i, a, l, s, d, c) {
      this.isBone2D = true, this.globalConstraintUV = new n.V2(1, 0), this.boneConnectionPoint = e.ConnectionType.END, this.start = new n.V2(), this.end = new n.V2(), this.length = s || 0, this.joint = new t.Joint2D(d, c), this.name = "", this.setStartLocation(i), a ? (this.setEndLocation(a), this.length === 0 && (this.length = this.getLength())) : l && this.setEndLocation(this.start.plus(l.normalised().multiplyScalar(this.length)));
    }
    return r.prototype.clone = function() {
      var i = new r(this.start, this.end);
      return i.length = this.length, i.globalConstraintUV = this.globalConstraintUV, i.boneConnectionPoint = this.boneConnectionPoint, i.joint = this.joint.clone(), i.name = this.name, i;
    }, r.prototype.setName = function(i) {
      this.name = i;
    }, r.prototype.setBoneConnectionPoint = function(i) {
      this.boneConnectionPoint = i;
    }, r.prototype.setStartLocation = function(i) {
      this.start.copy(i);
    }, r.prototype.setEndLocation = function(i) {
      this.end.copy(i);
    }, r.prototype.setLength = function(i) {
      i > 0 && (this.length = i);
    }, r.prototype.setGlobalConstraintUV = function(i) {
      this.globalConstraintUV = i;
    }, r.prototype.setJoint = function(i) {
      this.joint = i;
    }, r.prototype.setClockwiseConstraintDegs = function(i) {
      this.joint.setClockwiseConstraintDegs(i);
    }, r.prototype.setAnticlockwiseConstraintDegs = function(i) {
      this.joint.setAnticlockwiseConstraintDegs(i);
    }, r.prototype.setJointConstraintCoordinateSystem = function(i) {
      this.joint.setConstraintCoordinateSystem(i);
    }, r.prototype.getGlobalConstraintUV = function() {
      return this.globalConstraintUV;
    }, r.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, r.prototype.getDirectionUV = function() {
      return this.end.minus(this.start).normalize();
    }, r.prototype.getLength = function() {
      return this.start.distanceTo(this.end);
    }, r;
  }();
  return pi.Bone2D = o, pi;
}
var yi = {}, Nv;
function V2() {
  if (Nv) return yi;
  Nv = 1, Object.defineProperty(yi, "__esModule", { value: true }), yi.Chain2D = void 0;
  var e = uo(), t = Qc(), n = os(), o = ob(), r = ns(), i = function() {
    function a() {
      this.tmpTarget = new n.V2(), this.bones = [], this.name = "", this.solveDistanceThreshold = 1, this.minIterationChange = 0.01, this.maxIteration = 15, this.precision = 1e-3, this.chainLength = 0, this.numBones = 0, this.baseLocation = new n.V2(), this.fixedBaseMode = true, this.baseboneConstraintType = e.BaseboneConstraintType.NONE, this.baseboneConstraintUV = new n.V2(), this.baseboneRelativeConstraintUV = new n.V2(), this.lastTargetLocation = new n.V2(e.MAX_VALUE, e.MAX_VALUE), this.lastBaseLocation = new n.V2(e.MAX_VALUE, e.MAX_VALUE), this.boneConnectionPoint = e.ConnectionType.END, this.currentSolveDistance = e.MAX_VALUE, this.connectedChainNumber = -1, this.connectedBoneNumber = -1, this.embeddedTarget = new n.V2(), this.useEmbeddedTarget = false;
    }
    return a.prototype.clone = function() {
      var l = new a();
      return l.solveDistanceThreshold = this.solveDistanceThreshold, l.minIterationChange = this.minIterationChange, l.maxIteration = this.maxIteration, l.precision = this.precision, l.bones = this.cloneBones(), l.baseLocation.copy(this.baseLocation), l.lastTargetLocation.copy(this.lastTargetLocation), l.lastBaseLocation.copy(this.lastBaseLocation), this.baseboneConstraintType !== e.BaseboneConstraintType.NONE && (l.baseboneConstraintUV.copy(this.baseboneConstraintUV), l.baseboneRelativeConstraintUV.copy(this.baseboneRelativeConstraintUV)), l.fixedBaseMode = this.fixedBaseMode, l.chainLength = this.chainLength, l.numBones = this.numBones, l.currentSolveDistance = this.currentSolveDistance, l.boneConnectionPoint = this.boneConnectionPoint, l.connectedChainNumber = this.connectedChainNumber, l.connectedBoneNumber = this.connectedBoneNumber, l.baseboneConstraintType = this.baseboneConstraintType, l.embeddedTarget = this.embeddedTarget.clone(), l.useEmbeddedTarget = this.useEmbeddedTarget, l;
    }, a.prototype.clear = function() {
      for (var l = this.numBones; l--; ) this.removeBone(l);
    }, a.prototype.addBone = function(l) {
      this.bones.push(l), this.numBones === 0 && (this.baseLocation.copy(l.start), this.baseboneConstraintUV.copy(l.getDirectionUV())), this.numBones++, this.updateChainLength();
    }, a.prototype.removeBone = function(l) {
      l < this.numBones && (this.bones.splice(l, 1), this.numBones--, this.updateChainLength());
    }, a.prototype.addConsecutiveBone = function(l, s, d, c) {
      if (this.numBones === 0) {
        r.Tools.error("Chain is empty ! need first bone");
        return;
      }
      if (l instanceof o.Bone2D) {
        var f = l, v = f.getDirectionUV();
        t._Math.validateDirectionUV(v);
        var u = f.length;
        t._Math.validateLength(u);
        var g = this.bones[this.numBones - 1].end;
        f.setStartLocation(g), f.setEndLocation(g.plus(v.multiplyScalar(u))), this.addBone(f);
      } else if (l instanceof n.V2) {
        t._Math.validateDirectionUV(l), t._Math.validateLength(s);
        var g = this.bones[this.numBones - 1].end;
        this.addBone(new o.Bone2D(g, void 0, l.normalised(), s, d, c));
      }
    }, a.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, a.prototype.getConnectedBoneNumber = function() {
      return this.connectedBoneNumber;
    }, a.prototype.getConnectedChainNumber = function() {
      return this.connectedChainNumber;
    }, a.prototype.getEmbeddedTarget = function() {
      return this.embeddedTarget;
    }, a.prototype.getBaseboneConstraintType = function() {
      return this.baseboneConstraintType;
    }, a.prototype.getBaseboneConstraintUV = function() {
      if (this.baseboneConstraintType !== e.BaseboneConstraintType.NONE) return this.baseboneConstraintUV;
    }, a.prototype.getBaseLocation = function() {
      return this.bones[0].start;
    }, a.prototype.getEffectorLocation = function() {
      return this.bones[this.numBones - 1].end;
    }, a.prototype.getLastTargetLocation = function() {
      return this.lastTargetLocation;
    }, a.prototype.getLiveChainLength = function() {
      for (var l = 0, s = this.numBones; s--; ) l += this.bones[s].getLength();
      return l;
    }, a.prototype.setBaseboneRelativeConstraintUV = function(l) {
      l && (this.baseboneRelativeConstraintUV = l);
    }, a.prototype.setConnectedBoneNumber = function(l) {
      this.connectedBoneNumber = l;
    }, a.prototype.setConnectedChainNumber = function(l) {
      this.connectedChainNumber = l;
    }, a.prototype.setBoneConnectionPoint = function(l) {
      this.boneConnectionPoint = l;
    }, a.prototype.setBaseboneConstraintUV = function(l) {
      t._Math.validateDirectionUV(l), this.baseboneConstraintUV.copy(l.normalised());
    }, a.prototype.setBaseLocation = function(l) {
      this.baseLocation.copy(l);
    }, a.prototype.setBaseboneConstraintType = function(l) {
      this.baseboneConstraintType = l;
    }, a.prototype.setFixedBaseMode = function(l) {
      !l && this.connectedChainNumber !== -1 || this.baseboneConstraintType === e.BaseboneConstraintType.GLOBAL_ABSOLUTE && !l || (this.fixedBaseMode = l);
    }, a.prototype.setMaxIterationAttempts = function(l) {
      l < 1 || (this.maxIteration = l);
    }, a.prototype.setMinIterationChange = function(l) {
      l < 0 || (this.minIterationChange = l);
    }, a.prototype.setSolveDistanceThreshold = function(l) {
      l < 0 || (this.solveDistanceThreshold = l);
    }, a.prototype.solveForEmbeddedTarget = function() {
      if (this.useEmbeddedTarget) return this.solveForTarget(this.embeddedTarget);
    }, a.prototype.resetTarget = function() {
      this.lastBaseLocation = new n.V2(e.MAX_VALUE, e.MAX_VALUE), this.currentSolveDistance = e.MAX_VALUE;
    }, a.prototype.solveForTarget = function(l) {
      this.tmpTarget.set(l.x, l.y);
      var s = this.precision, d = this.lastBaseLocation.approximatelyEquals(this.baseLocation, s);
      if (this.lastTargetLocation.approximatelyEquals(this.tmpTarget, s) && d) return this.currentSolveDistance;
      var c, f = null;
      d ? (c = this.bones[this.numBones - 1].end.distanceTo(this.tmpTarget), f = this.cloneBones()) : c = e.MAX_VALUE;
      for (var v = [], u = e.MAX_VALUE, g = e.MAX_VALUE, y, w = this.maxIteration; w--; ) {
        if (y = this.solveIK(this.tmpTarget), y !== void 0 && y < u) {
          if (u = y, v = this.cloneBones(), y <= this.solveDistanceThreshold) break;
        } else if (y === void 0 || Math.abs(y - g) < this.minIterationChange) break;
        g = y;
      }
      return u < c ? (this.currentSolveDistance = u, this.bones = v) : (this.currentSolveDistance = c, this.bones = f || this.bones), this.lastBaseLocation.copy(this.baseLocation), this.lastTargetLocation.copy(this.tmpTarget), this.currentSolveDistance;
    }, a.prototype.solveIK = function(l) {
      if (this.numBones !== 0) {
        for (var s, d, c, f, v, u, g, y = this.numBones; y--; ) s = this.bones[y], d = s.length, y !== this.numBones - 1 ? (c = this.bones[y + 1], u = s.getDirectionUV().negate(), g = s.joint.coordinateSystem === e.JointType.J_LOCAL ? c.getDirectionUV().negate() : s.getGlobalConstraintUV().negated(), u.constrainedUV(g, c.joint.min, c.joint.max), f = s.end.plus(u.multiplyScalar(d)), s.setStartLocation(f), y > 0 && this.bones[y - 1].setEndLocation(f)) : (s.setEndLocation(l), u = s.getDirectionUV().negate(), y > 0 ? (g = s.joint.coordinateSystem === e.JointType.J_LOCAL ? this.bones[y - 1].getDirectionUV().negate() : s.getGlobalConstraintUV().negated(), u.constrainedUV(g, s.joint.min, s.joint.max)) : s.joint.coordinateSystem !== e.JointType.J_LOCAL && (g = s.getGlobalConstraintUV().negated(), u.constrainedUV(g, s.joint.min, s.joint.max)), f = s.end.plus(u.multiplyScalar(d)), s.setStartLocation(f), y > 0 && this.bones[y - 1].setEndLocation(f));
        for (y = 0; y < this.numBones; y++) s = this.bones[y], d = s.length, y !== 0 ? (u = s.getDirectionUV(), g = s.joint.coordinateSystem === e.JointType.J_LOCAL ? this.bones[y - 1].getDirectionUV() : s.getGlobalConstraintUV(), u.constrainedUV(g, s.joint.min, s.joint.max), v = s.start.plus(u.multiplyScalar(d)), s.setEndLocation(v), y < this.numBones - 1 && this.bones[y + 1].setStartLocation(v)) : (this.fixedBaseMode ? s.setStartLocation(this.baseLocation) : (f = s.end.minus(s.getDirectionUV().multiplyScalar(d)), s.setStartLocation(f)), u = s.getDirectionUV(), this.baseboneConstraintType === e.BaseboneConstraintType.NONE ? (v = s.start.plus(u.multiplyScalar(d)), s.setEndLocation(v), this.numBones > 1 && this.bones[1].setStartLocation(v)) : (g = this.baseboneConstraintType === e.BaseboneConstraintType.LOCAL_ABSOLUTE ? this.baseboneRelativeConstraintUV : this.baseboneConstraintUV, u.constrainedUV(g, s.joint.min, s.joint.max), v = s.start.plus(u.multiplyScalar(d)), s.setEndLocation(v), y < this.numBones - 1 && this.bones[y + 1].setStartLocation(v)));
        return this.lastTargetLocation.copy(l), this.bones[this.numBones - 1].end.distanceTo(l);
      }
    }, a.prototype.updateChainLength = function() {
      this.chainLength = 0;
      for (var l = this.numBones; l--; ) this.chainLength += this.bones[l].length;
    }, a.prototype.cloneBones = function() {
      for (var l = [], s = 0, d = this.bones.length; s < d; s++) l.push(this.bones[s].clone());
      return l;
    }, a.isChain2D = true, a;
  }();
  return yi.Chain2D = i, yi;
}
var _i = {}, zv;
function F2() {
  if (zv) return _i;
  zv = 1, Object.defineProperty(_i, "__esModule", { value: true }), _i.Structure2D = void 0;
  var e = uo(), t = ns(), n = function() {
    function o() {
      this.fixedBaseMode = true, this.chains = [], this.targets = [], this.numChains = 0;
    }
    return o.prototype.update = function() {
      for (var r, i, a, l, s, d = 0; d < this.numChains; d++) {
        if (i = this.chains[d], a = this.targets[d] || null, l = i.getConnectedChainNumber(), s = i.getBaseboneConstraintType(), l !== -1 && s !== e.BaseboneConstraintType.GLOBAL_ABSOLUTE) {
          var c = this.chains[l].bones[i.getConnectedBoneNumber()];
          i.setBaseLocation(i.getBoneConnectionPoint() === e.ConnectionType.START ? c.start : c.end);
          var f = c.getDirectionUV();
          if (s === e.BaseboneConstraintType.LOCAL_RELATIVE) i.setBaseboneConstraintUV(f);
          else if (s === e.BaseboneConstraintType.LOCAL_ABSOLUTE) {
            var v = e.UP.getSignedAngle(f), u = (r = i.getBaseboneConstraintUV()) === null || r === void 0 ? void 0 : r.clone().rotate(v);
            i.setBaseboneRelativeConstraintUV(u);
          }
        }
        i.useEmbeddedTarget ? console.log("embed", i.solveForEmbeddedTarget()) : i.solveForTarget(a);
      }
    }, o.prototype.setFixedBaseMode = function(r) {
      this.fixedBaseMode = r;
      for (var i = this.numChains, a; i--; ) a = this.chains[i].getConnectedChainNumber(), a === -1 && this.chains[i].setFixedBaseMode(this.fixedBaseMode);
    }, o.prototype.clear = function() {
      var r;
      for (r = this.numChains; r--; ) this.remove(r);
      this.chains = [], this.targets = [];
    }, o.prototype.add = function(r, i) {
      this.chains.push(r), this.numChains++, i && this.targets.push(i);
    }, o.prototype.remove = function(r) {
      this.chains[r].clear(), this.chains.splice(r, 1), this.targets.splice(r, 1), this.numChains--;
    }, o.prototype.getNumChains = function() {
      return this.numChains;
    }, o.prototype.getChain = function(r) {
      return this.chains[r];
    }, o.prototype.connectChain = function(r, i, a, l) {
      var s = i, d = a;
      if (l = l || "end", s > this.numChains) {
        t.Tools.error("Chain does not exist!");
        return;
      }
      if (d > this.chains[s].numBones) {
        t.Tools.error("Bone does not exist!");
        return;
      }
      var c = r.clone();
      c.setBoneConnectionPoint(l === "end" ? e.ConnectionType.END : e.ConnectionType.START), c.setConnectedChainNumber(s), c.setConnectedBoneNumber(d);
      var f = l === "end" ? this.chains[s].bones[d].end : this.chains[s].bones[d].start;
      c.setBaseLocation(f), c.setFixedBaseMode(true);
      for (var v = 0; v < c.numBones; v++) c.bones[v].start.add(f), c.bones[v].end.add(f);
    }, o.isStructure2D = true, o;
  }();
  return _i.Structure2D = n, _i;
}
var Hv;
function $2() {
  return Hv || (Hv = 1, function(e) {
    var t = Wo && Wo.__createBinding || (Object.create ? function(y, w, x, _) {
      _ === void 0 && (_ = x);
      var p = Object.getOwnPropertyDescriptor(w, x);
      (!p || ("get" in p ? !w.__esModule : p.writable || p.configurable)) && (p = { enumerable: true, get: function() {
        return w[x];
      } }), Object.defineProperty(y, _, p);
    } : function(y, w, x, _) {
      _ === void 0 && (_ = x), y[_] = w[x];
    }), n = Wo && Wo.__exportStar || function(y, w) {
      for (var x in y) x !== "default" && !Object.prototype.hasOwnProperty.call(w, x) && t(w, y, x);
    };
    Object.defineProperty(e, "__esModule", { value: true }), e.Structure2D = e.Chain2D = e.Bone2D = e.Joint2D = e.Structure3D = e.Chain3D = e.Bone3D = e.Joint3D = e.M3 = e.V3 = e.V2 = e._Math = void 0, P2();
    var o = Qc();
    Object.defineProperty(e, "_Math", { enumerable: true, get: function() {
      return o._Math;
    } });
    var r = os();
    Object.defineProperty(e, "V2", { enumerable: true, get: function() {
      return r.V2;
    } });
    var i = gr();
    Object.defineProperty(e, "V3", { enumerable: true, get: function() {
      return i.V3;
    } });
    var a = Kc();
    Object.defineProperty(e, "M3", { enumerable: true, get: function() {
      return a.M3;
    } });
    var l = eb();
    Object.defineProperty(e, "Joint3D", { enumerable: true, get: function() {
      return l.Joint3D;
    } });
    var s = tb();
    Object.defineProperty(e, "Bone3D", { enumerable: true, get: function() {
      return s.Bone3D;
    } });
    var d = D2();
    Object.defineProperty(e, "Chain3D", { enumerable: true, get: function() {
      return d.Chain3D;
    } });
    var c = O2();
    Object.defineProperty(e, "Structure3D", { enumerable: true, get: function() {
      return c.Structure3D;
    } });
    var f = nb();
    Object.defineProperty(e, "Joint2D", { enumerable: true, get: function() {
      return f.Joint2D;
    } });
    var v = ob();
    Object.defineProperty(e, "Bone2D", { enumerable: true, get: function() {
      return v.Bone2D;
    } });
    var u = V2();
    Object.defineProperty(e, "Chain2D", { enumerable: true, get: function() {
      return u.Chain2D;
    } });
    var g = F2();
    Object.defineProperty(e, "Structure2D", { enumerable: true, get: function() {
      return g.Structure2D;
    } }), n(uo(), e);
  }(Wo)), Wo;
}
var po = $2();
const I2 = ["width", "height"], N2 = /* @__PURE__ */ zn({ __name: "IKMtg", props: { width: {}, height: {} }, setup(e) {
  const t = H();
  let n = null;
  const o = e;
  let r;
  const i = Mo(), a = Mo();
  let l = [];
  const s = () => {
    if (t.value !== void 0 && (n = t.value.getContext("webgl2", {})), n === null) return;
    const x = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, x), n.bufferData(n.ARRAY_BUFFER, new Float32Array([-0.25, 0, 0, 1, 0.25, 0, 0, 1, 0.05, -1, 0, 1, -0.05, -1, 0, 1]), n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null);
    const b = d(`
        attribute vec4 aVertexPosition;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            // gl_Position = vec4(0.0, 0.0, 0.1, 1.0);
        }
    `, `
        uniform mediump vec3 uColor;

        void main() {
            gl_FragColor = vec4(uColor, 1.0);
        }
    `);
    r = { prog_draw: b, buf: { plane: x, points: n.createBuffer() }, attr: { pos: n.getAttribLocation(b, "aVertexPosition") }, unif: { proj: n.getUniformLocation(b, "uProjectionMatrix"), model: n.getUniformLocation(b, "uModelViewMatrix"), color: n.getUniformLocation(b, "uColor") } }, console.log(r);
  }, d = (x, _) => {
    if (n === null) throw new Error("no webgl");
    const p = c(n.VERTEX_SHADER, x), b = c(n.FRAGMENT_SHADER, _), C = n.createProgram();
    return n.attachShader(C, p), n.attachShader(C, b), n.linkProgram(C), C;
  }, c = (x, _) => {
    if (n === null) throw new Error("no webgl");
    const p = n.createShader(x);
    if (p === null) throw new Error("bad shader");
    return n.shaderSource(p, _), n.compileShader(p), p;
  }, f = new po.Chain3D(), v = new po.Bone3D(new po.V3(0, 0, -9.1), void 0, new po.V3(0, 0.1, -9.1), 3);
  f.addBone(v), f.addConsecutiveRotorConstrainedBone(new po.V3(0, 2.5, -9.1), 6, 270), f.addConsecutiveRotorConstrainedBone(new po.V3(1.5, 2.5, -9.1), 6, 270);
  const u = () => {
    if (r === null || n === null) return;
    n.useProgram(r.prog_draw), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.viewport(0, 0, o.width, o.height), n.clearColor(1, 1, 1, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const x = 45 * Math.PI / 180, _ = o.width / o.height, p = 0.1, b = 100;
    Gs(a), Q0(a, x, _, p, b), QS(a, a, 0.05), KS(a, a, 0.15), WS(a, a, 0.175), n.uniformMatrix4fv(r.unif.proj, false, a), j0(i, i), U0(i, i), g(0, [1, 0, 0]), g(1, [0, 1, 0]), g(2, [1, 0, 1]), n.flush(), n.disableVertexAttribArray(r.attr.pos);
  }, g = (x, _) => {
    if (r === null || n === null || x >= l.length / 2) return;
    let p = Er(l[x * 2]), b = Er(l[x * 2 + 1]);
    const C = [b[0] - p[0], b[1] - p[1], b[2] - p[2]];
    C[0] *= -1, C[1] *= -1, C[2] *= -1;
    let q = Mo();
    const B = Fa.normalize(C), V = Fa.normalize([0, 0, 1]), R = Fa.normalize(Fa.cross(V, B)), D = Mo();
    HS(D, R[0], B[0], V[0], 0, R[1], B[1], V[1], 0, R[2], B[2], V[2], 0, p[0], p[1], p[2] - 30, 1), Mo();
    const $ = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
    Gs(q), GS(q, q, D), US(q, q, [$, $, $]), n.bindBuffer(n.ARRAY_BUFFER, r.buf.plane), n.vertexAttribPointer(r.attr.pos, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(r.attr.pos), n.uniformMatrix4fv(r.unif.model, false, q), n.uniform3fv(r.unif.color, _), n.drawArrays(n.TRIANGLE_FAN, 0, 4), n.bindBuffer(n.ARRAY_BUFFER, r.buf.points), n.vertexAttribPointer(r.attr.pos, 3, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(r.attr.pos), n.bufferData(n.ARRAY_BUFFER, new Float32Array([p[0], p[1], p[2], b[0], b[1], b[2]]), n.STATIC_DRAW), Gs(q), Xa(q, q, [0, 0, -30]), n.uniformMatrix4fv(r.unif.model, false, q), n.drawArrays(n.LINES, 0, 2), n.bindBuffer(n.ARRAY_BUFFER, null);
  }, y = (x) => {
    o.width / o.height;
    const _ = t.value.getBoundingClientRect(), p = [(x.clientX - _.left) / o.width - 0, (-_.top + x.clientY) / o.height * o.width / o.height / 1 / 1 - 0, 0];
    let b = R2.transformPoint(i, p);
    b[0] = b[0] * 2 - 1, b[1] = -b[1] * 2 + 1, b[2] = -9.1, b[0] *= 20, b[1] *= 20;
    const C = new po.V3(b[0], b[1], b[2]), q = new po.Structure3D();
    q.add(f, C), q.update(), l = [];
    for (let B = 0; B < f.bones.length; ++B) l.push([f.bones[B].start.x, f.bones[B].start.y, f.bones[B].start.z]), l.push([f.bones[B].end.x, f.bones[B].end.y, f.bones[B].end.z]);
  }, w = (x) => {
    x.buttons == 1 && y(x);
  };
  return st(() => {
    Qe(s), setInterval(u, 25);
  }), We(() => {
  }), (x, _) => (ln(), lr("canvas", { width: x.width, height: x.height, ref_key: "canvas", ref: t, onClick: _[0] || (_[0] = (p) => y(p)), onMousemove: _[1] || (_[1] = (p) => w(p)) }, null, 40, I2));
} }), z2 = ma(N2, [["__scopeId", "data-v-7e533c91"]]), H2 = { class: "q-ma-lg", style: { display: "inline-block" } }, j2 = /* @__PURE__ */ zn({ __name: "IKMtg", setup(e) {
  uc((r) => ({ "4b8e4e3a": o.value }));
  const t = H(640), n = H(480);
  H(0), H(0), H("no events yet ..."), H(1), st(() => {
  });
  const o = H(`url(${Uc})`);
  return (r, i) => (ln(), lr("div", H2, [$e("div", { id: "ik-mtg", style: aa({ width: t.value + "px", height: n.value + "px" }) }, [Ue(z2, { width: t.value, height: n.value }, null, 8, ["width", "height"])], 4)]));
} }), U2 = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Wc = dm(yC);
console.log(U2);
const Q2 = [{ name: "layout", path: "/", component: xC, children: [{ name: "root", path: "", component: NS }, { name: "webgl", path: "webgl", component: NT }, { name: "sized", path: "sized", component: FT }, { name: "ik", path: "ik", component: j2 }] }], K2 = TS({ history: eS(), routes: Q2 });
Wc.use(K2);
Wc.use(gC, { plugins: { Dialog: tC, Dark: mm, Loading: oC, Cookies: Zx, Notify: cC }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
H0({}).then(() => {
  Wc.mount("#q-app");
});
