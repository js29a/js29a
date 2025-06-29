var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _i2, _e, _r2, _t, _a2, _o2, _iT_instances, l_fn;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const i = n(o);
    fetch(o.href, i);
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
const gt = {}, Ao = [], Ln = () => {
}, ab = () => false, El = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ju = (e) => e.startsWith("onUpdate:"), zt = Object.assign, Uu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, lb = Object.prototype.hasOwnProperty, ft = (e, t) => lb.call(e, t), je = Array.isArray, Lo = (e) => oa(e) === "[object Map]", Uv = (e) => oa(e) === "[object Set]", sb = (e) => oa(e) === "[object RegExp]", Ge = (e) => typeof e == "function", Pt = (e) => typeof e == "string", Br = (e) => typeof e == "symbol", kt = (e) => e !== null && typeof e == "object", Qv = (e) => (kt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), Kv = Object.prototype.toString, oa = (e) => Kv.call(e), ub = (e) => oa(e).slice(8, -1), Wv = (e) => oa(e) === "[object Object]", Qu = (e) => Pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ei = /* @__PURE__ */ Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Al = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, db = /-(\w)/g, xn = Al((e) => e.replace(db, (t, n) => n ? n.toUpperCase() : "")), fb = /\B([A-Z])/g, co = Al((e) => e.replace(fb, "-$1").toLowerCase()), Ll = Al((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = Al((e) => e ? `on${Ll(e)}` : ""), qr = (e, t) => !Object.is(e, t), Ai = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Yv = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, vb = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hb = (e) => {
  const t = Pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zc;
const ia = () => Zc || (Zc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function aa(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Pt(r) ? pb(r) : aa(r);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else if (Pt(e) || kt(e)) return e;
}
const mb = /;(?![^(]*\))/g, gb = /:([^]+)/, bb = /\/\*[^]*?\*\//g;
function pb(e) {
  const t = {};
  return e.replace(bb, "").split(mb).forEach((n) => {
    if (n) {
      const r = n.split(gb);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ku(e) {
  let t = "";
  if (Pt(e)) t = e;
  else if (je(e)) for (let n = 0; n < e.length; n++) {
    const r = Ku(e[n]);
    r && (t += r + " ");
  }
  else if (kt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const yb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _b = /* @__PURE__ */ Hu(yb);
function Gv(e) {
  return !!e || e === "";
}
const Xv = (e) => !!(e && e.__v_isRef === true), jt = (e) => Pt(e) ? e : e == null ? "" : je(e) || kt(e) && (e.toString === Kv || !Ge(e.toString)) ? Xv(e) ? jt(e.value) : JSON.stringify(e, Jv, 2) : String(e), Jv = (e, t) => Xv(t) ? Jv(e, t.value) : Lo(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o], i) => (n[ls(r, i) + " =>"] = o, n), {}) } : Uv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => ls(n)) } : Br(t) ? ls(t) : kt(t) && !je(t) && !Wv(t) ? String(t) : t, ls = (e, t = "") => {
  var n;
  return Br(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class wb {
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function xb() {
  return dn;
}
let yt;
const ss = /* @__PURE__ */ new WeakSet();
class Zv {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || th(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ed(this), nh(this);
    const t = yt, n = Bn;
    yt = this, Bn = true;
    try {
      return this.fn();
    } finally {
      rh(this), yt = t, Bn = n, this.flags &= -3;
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
let eh = 0, Li, Bi;
function th(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Bi, Bi = e;
    return;
  }
  e.next = Li, Li = e;
}
function Wu() {
  eh++;
}
function Yu() {
  if (--eh > 0) return;
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
      } catch (r) {
        e || (e = r);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function nh(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function rh(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Gu(r), Cb(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
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
  const n = yt, r = Bn;
  yt = e, Bn = true;
  try {
    nh(e);
    const o = e.fn(e._value);
    (t.version === 0 || qr(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    yt = n, Bn = r, rh(e), e.flags &= -3;
  }
}
function Gu(e, t = false) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Gu(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Bn = true;
const ih = [];
function Rr() {
  ih.push(Bn), Bn = false;
}
function Pr() {
  const e = ih.pop();
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
class Sb {
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
    if (n === void 0 || n.sub !== yt) n = this.activeLink = new Sb(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, ah(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = r);
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
function ah(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) ah(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ru = /* @__PURE__ */ new WeakMap(), eo = Symbol(""), ou = Symbol(""), Ui = Symbol("");
function Jt(e, t, n) {
  if (Bn && yt) {
    let r = ru.get(e);
    r || ru.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Xu()), o.map = r, o.key = n), o.track();
  }
}
function nr(e, t, n, r, o, i) {
  const a = ru.get(e);
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
      const c = Number(r);
      a.forEach((f, v) => {
        (v === "length" || v === Ui || !Br(v) && v >= c) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), d && l(a.get(Ui)), t) {
      case "add":
        s ? d && l(a.get("length")) : (l(a.get(eo)), Lo(e) && l(a.get(ou)));
        break;
      case "delete":
        s || (l(a.get(eo)), Lo(e) && l(a.get(ou)));
        break;
      case "set":
        Lo(e) && l(a.get(eo));
        break;
    }
  }
  Yu();
}
function bo(e) {
  const t = Je(e);
  return t === e ? t : (Jt(t, "iterate", Ui), Rn(e) ? t : t.map(tn));
}
function Ju(e) {
  return Jt(e = Je(e), "iterate", Ui), e;
}
const Tb = { __proto__: null, [Symbol.iterator]() {
  return us(this, Symbol.iterator, tn);
}, concat(...e) {
  return bo(this).concat(...e.map((t) => je(t) ? bo(t) : t));
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
  return bo(this).join(e);
}, lastIndexOf(...e) {
  return cs(this, "lastIndexOf", e);
}, map(e, t) {
  return Qn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Jo(this, "pop");
}, push(...e) {
  return Jo(this, "push", e);
}, reduce(e, ...t) {
  return td(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return td(this, "reduceRight", e, t);
}, shift() {
  return Jo(this, "shift");
}, some(e, t) {
  return Qn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Jo(this, "splice", e);
}, toReversed() {
  return bo(this).toReversed();
}, toSorted(e) {
  return bo(this).toSorted(e);
}, toSpliced(...e) {
  return bo(this).toSpliced(...e);
}, unshift(...e) {
  return Jo(this, "unshift", e);
}, values() {
  return us(this, "values", tn);
} };
function us(e, t, n) {
  const r = Ju(e), o = r[t]();
  return r !== e && !Rn(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const kb = Array.prototype;
function Qn(e, t, n, r, o, i) {
  const a = Ju(e), l = a !== e && !Rn(e), s = a[t];
  if (s !== kb[t]) {
    const f = s.apply(e, i);
    return l ? tn(f) : f;
  }
  let d = n;
  a !== e && (l ? d = function(f, v) {
    return n.call(this, tn(f), v, e);
  } : n.length > 2 && (d = function(f, v) {
    return n.call(this, f, v, e);
  }));
  const c = s.call(a, d, r);
  return l && o ? o(c) : c;
}
function td(e, t, n, r) {
  const o = Ju(e);
  let i = n;
  return o !== e && (Rn(e) ? n.length > 3 && (i = function(a, l, s) {
    return n.call(this, a, l, s, e);
  }) : i = function(a, l, s) {
    return n.call(this, a, tn(l), s, e);
  }), o[t](i, ...r);
}
function cs(e, t, n) {
  const r = Je(e);
  Jt(r, "iterate", Ui);
  const o = r[t](...n);
  return (o === -1 || o === false) && nc(n[0]) ? (n[0] = Je(n[0]), r[t](...n)) : o;
}
function Jo(e, t, n = []) {
  Rr(), Wu();
  const r = Je(e)[t].apply(e, n);
  return Yu(), Pr(), r;
}
const Mb = /* @__PURE__ */ Hu("__proto__,__v_isRef,__isVue"), lh = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Br));
function qb(e) {
  Br(e) || (e = String(e));
  const t = Je(this);
  return Jt(t, "has", e), t.hasOwnProperty(e);
}
class sh {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return r === (o ? i ? Fb : fh : i ? dh : ch).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = je(t);
    if (!o) {
      let s;
      if (a && (s = Tb[n])) return s;
      if (n === "hasOwnProperty") return qb;
    }
    const l = Reflect.get(t, n, wt(t) ? t : r);
    return (Br(n) ? lh.has(n) : Mb(n)) || (o || Jt(t, "get", n), i) ? l : wt(l) ? a && Qu(n) ? l : l.value : kt(l) ? o ? vh(l) : Nn(l) : l;
  }
}
class uh extends sh {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const s = io(i);
      if (!Rn(r) && !io(r) && (i = Je(i), r = Je(r)), !je(t) && wt(i) && !wt(r)) return s ? false : (i.value = r, true);
    }
    const a = je(t) && Qu(n) ? Number(n) < t.length : ft(t, n), l = Reflect.set(t, n, r, wt(t) ? t : o);
    return t === Je(o) && (a ? qr(r, i) && nr(t, "set", n, r) : nr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ft(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && nr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Br(n) || !lh.has(n)) && Jt(t, "has", n), r;
  }
  ownKeys(t) {
    return Jt(t, "iterate", je(t) ? "length" : eo), Reflect.ownKeys(t);
  }
}
class Eb extends sh {
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
const Ab = new uh(), Lb = new Eb(), Bb = new uh(true);
const iu = (e) => e, ga = (e) => Reflect.getPrototypeOf(e);
function Rb(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = Je(o), a = Lo(i), l = e === "entries" || e === Symbol.iterator && a, s = e === "keys" && a, d = o[e](...r), c = n ? iu : t ? au : tn;
    return !t && Jt(i, "iterate", s ? ou : eo), { next() {
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
function Pb(e, t) {
  const n = { get(o) {
    const i = this.__v_raw, a = Je(i), l = Je(o);
    e || (qr(o, l) && Jt(a, "get", o), Jt(a, "get", l));
    const { has: s } = ga(a), d = t ? iu : e ? au : tn;
    if (s.call(a, o)) return d(i.get(o));
    if (s.call(a, l)) return d(i.get(l));
    i !== a && i.get(o);
  }, get size() {
    const o = this.__v_raw;
    return !e && Jt(Je(o), "iterate", eo), Reflect.get(o, "size", o);
  }, has(o) {
    const i = this.__v_raw, a = Je(i), l = Je(o);
    return e || (qr(o, l) && Jt(a, "has", o), Jt(a, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
  }, forEach(o, i) {
    const a = this, l = a.__v_raw, s = Je(l), d = t ? iu : e ? au : tn;
    return !e && Jt(s, "iterate", eo), l.forEach((c, f) => o.call(i, d(c), d(f), a));
  } };
  return zt(n, e ? { add: ba("add"), set: ba("set"), delete: ba("delete"), clear: ba("clear") } : { add(o) {
    !t && !Rn(o) && !io(o) && (o = Je(o));
    const i = Je(this);
    return ga(i).has.call(i, o) || (i.add(o), nr(i, "add", o, o)), this;
  }, set(o, i) {
    !t && !Rn(i) && !io(i) && (i = Je(i));
    const a = Je(this), { has: l, get: s } = ga(a);
    let d = l.call(a, o);
    d || (o = Je(o), d = l.call(a, o));
    const c = s.call(a, o);
    return a.set(o, i), d ? qr(i, c) && nr(a, "set", o, i) : nr(a, "add", o, i), this;
  }, delete(o) {
    const i = Je(this), { has: a, get: l } = ga(i);
    let s = a.call(i, o);
    s || (o = Je(o), s = a.call(i, o)), l && l.call(i, o);
    const d = i.delete(o);
    return s && nr(i, "delete", o, void 0), d;
  }, clear() {
    const o = Je(this), i = o.size !== 0, a = o.clear();
    return i && nr(o, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    n[o] = Rb(o, e, t);
  }), n;
}
function Zu(e, t) {
  const n = Pb(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ft(n, o) && o in r ? n : r, o, i);
}
const Db = { get: Zu(false, false) }, Ob = { get: Zu(false, true) }, Vb = { get: Zu(true, false) };
const ch = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), fh = /* @__PURE__ */ new WeakMap(), Fb = /* @__PURE__ */ new WeakMap();
function $b(e) {
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
function Ib(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $b(ub(e));
}
function Nn(e) {
  return io(e) ? e : tc(e, false, Ab, Db, ch);
}
function ec(e) {
  return tc(e, false, Bb, Ob, dh);
}
function vh(e) {
  return tc(e, true, Lb, Vb, fh);
}
function tc(e, t, n, r, o) {
  if (!kt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = o.get(e);
  if (i) return i;
  const a = Ib(e);
  if (a === 0) return e;
  const l = new Proxy(e, a === 2 ? r : n);
  return o.set(e, l), l;
}
function Ri(e) {
  return io(e) ? Ri(e.__v_raw) : !!(e && e.__v_isReactive);
}
function io(e) {
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
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Yv(e, "__v_skip", true), e;
}
const tn = (e) => kt(e) ? Nn(e) : e, au = (e) => kt(e) ? vh(e) : e;
function wt(e) {
  return e ? e.__v_isRef === true : false;
}
function H(e) {
  return hh(e, false);
}
function Nb(e) {
  return hh(e, true);
}
function hh(e, t) {
  return wt(e) ? e : new zb(e, t);
}
class zb {
  constructor(t, n) {
    this.dep = new Xu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Je(t), this._value = n ? t : tn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Rn(t) || io(t);
    t = r ? t : Je(t), qr(t, n) && (this._rawValue = t, this._value = r ? t : tn(t), this.dep.trigger());
  }
}
function Re(e) {
  return wt(e) ? e.value : e;
}
const Hb = { get: (e, t, n) => t === "__v_raw" ? e : Re(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const o = e[t];
  return wt(o) && !wt(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
} };
function mh(e) {
  return Ri(e) ? e : new Proxy(e, Hb);
}
class jb {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ji - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && yt !== this) return th(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return oh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ub(e, t, n = false) {
  let r, o;
  return Ge(e) ? r = e : (r = e.get, o = e.set), new jb(r, o, n);
}
const pa = {}, el = /* @__PURE__ */ new WeakMap();
let Wr;
function Qb(e, t = false, n = Wr) {
  if (n) {
    let r = el.get(n);
    r || el.set(n, r = []), r.push(e);
  }
}
function Kb(e, t, n = gt) {
  const { immediate: r, deep: o, once: i, scheduler: a, augmentJob: l, call: s } = n, d = (b) => o ? b : Rn(b) || o === false || o === 0 ? rr(b, 1) : rr(b);
  let c, f, v, u, g = false, y = false;
  if (wt(e) ? (f = () => e.value, g = Rn(e)) : Ri(e) ? (f = () => d(e), g = true) : je(e) ? (y = true, g = e.some((b) => Ri(b) || Rn(b)), f = () => e.map((b) => {
    if (wt(b)) return b.value;
    if (Ri(b)) return d(b);
    if (Ge(b)) return s ? s(b, 2) : b();
  })) : Ge(e) ? t ? f = s ? () => s(e, 2) : e : f = () => {
    if (v) {
      Rr();
      try {
        v();
      } finally {
        Pr();
      }
    }
    const b = Wr;
    Wr = c;
    try {
      return s ? s(e, 3, [u]) : e(u);
    } finally {
      Wr = b;
    }
  } : f = Ln, t && o) {
    const b = f, C = o === true ? 1 / 0 : o;
    f = () => rr(b(), C);
  }
  const w = xb(), x = () => {
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
      if (o || g || (y ? C.some((q, B) => qr(q, _[B])) : qr(C, _))) {
        v && v();
        const q = Wr;
        Wr = c;
        try {
          const B = [C, _ === pa ? void 0 : y && _[0] === pa ? [] : _, u];
          s ? s(t, 3, B) : t(...B), _ = C;
        } finally {
          Wr = q;
        }
      }
    } else c.run();
  };
  return l && l(p), c = new Zv(f), c.scheduler = a ? () => a(p, false) : p, u = (b) => Qb(b, false, c), v = c.onStop = () => {
    const b = el.get(c);
    if (b) {
      if (s) s(b, 4);
      else for (const C of b) C();
      el.delete(c);
    }
  }, t ? r ? p(true) : _ = c.run() : a ? a(p.bind(null, true), true) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x;
}
function rr(e, t = 1 / 0, n) {
  if (t <= 0 || !kt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, wt(e)) rr(e.value, t, n);
  else if (je(e)) for (let r = 0; r < e.length; r++) rr(e[r], t, n);
  else if (Uv(e) || Lo(e)) e.forEach((r) => {
    rr(r, t, n);
  });
  else if (Wv(e)) {
    for (const r in e) rr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && rr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function la(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Rl(o, t, n);
  }
}
function Dn(e, t, n, r) {
  if (Ge(e)) {
    const o = la(e, t, n, r);
    return o && Qv(o) && o.catch((i) => {
      Rl(i, t, n);
    }), o;
  }
  if (je(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++) o.push(Dn(e[i], t, n, r));
    return o;
  }
}
function Rl(e, t, n, r = true) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: a } = t && t.appContext.config || gt;
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
      Rr(), la(i, null, 10, [e, s, d]), Pr();
      return;
    }
  }
  Wb(e, n, o, r, a);
}
function Wb(e, t, n, r = true, o = false) {
  if (o) throw e;
  console.error(e);
}
const nn = [];
let $n = -1;
const Bo = [];
let wr = null, To = 0;
const gh = Promise.resolve();
let tl = null;
function Qe(e) {
  const t = tl || gh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yb(e) {
  let t = $n + 1, n = nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = nn[r], i = Qi(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function rc(e) {
  if (!(e.flags & 1)) {
    const t = Qi(e), n = nn[nn.length - 1];
    !n || !(e.flags & 2) && t >= Qi(n) ? nn.push(e) : nn.splice(Yb(t), 0, e), e.flags |= 1, bh();
  }
}
function bh() {
  tl || (tl = gh.then(_h));
}
function ph(e) {
  je(e) ? Bo.push(...e) : wr && e.id === -1 ? wr.splice(To + 1, 0, e) : e.flags & 1 || (Bo.push(e), e.flags |= 1), bh();
}
function nd(e, t, n = $n + 1) {
  for (; n < nn.length; n++) {
    const r = nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function yh(e) {
  if (Bo.length) {
    const t = [...new Set(Bo)].sort((n, r) => Qi(n) - Qi(r));
    if (Bo.length = 0, wr) {
      wr.push(...t);
      return;
    }
    for (wr = t, To = 0; To < wr.length; To++) {
      const n = wr[To];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    wr = null, To = 0;
  }
}
const Qi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _h(e) {
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
    $n = -1, nn.length = 0, yh(), tl = null, (nn.length || Bo.length) && _h();
  }
}
let sn = null, wh = null;
function nl(e) {
  const t = sn;
  return sn = e, wh = e && e.type.__scopeId || null, t;
}
function qt(e, t = sn, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && md(-1);
    const i = nl(t);
    let a;
    try {
      a = e(...o);
    } finally {
      nl(i), r._d && md(1);
    }
    return a;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function hn(e, t) {
  if (sn === null) return e;
  const n = Il(sn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, a, l, s = gt] = t[o];
    i && (Ge(i) && (i = { mounted: i, updated: i }), i.deep && rr(a), r.push({ dir: i, instance: n, value: a, oldValue: void 0, arg: l, modifiers: s }));
  }
  return e;
}
function Fr(e, t, n, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    i && (l.oldValue = i[a].value);
    let s = l.dir[r];
    s && (Rr(), Dn(s, n, 8, [e.el, l, e, t]), Pr());
  }
}
const xh = Symbol("_vte"), Ch = (e) => e.__isTeleport, Pi = (e) => e && (e.disabled || e.disabled === ""), rd = (e) => e && (e.defer || e.defer === ""), od = (e) => typeof SVGElement < "u" && e instanceof SVGElement, id = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lu = (e, t) => {
  const n = e && e.to;
  return Pt(n) ? t ? t(n) : null : n;
}, Sh = { name: "Teleport", __isTeleport: true, process(e, t, n, r, o, i, a, l, s, d) {
  const { mc: c, pc: f, pbc: v, o: { insert: u, querySelector: g, createText: y, createComment: w } } = d, x = Pi(t.props);
  let { shapeFlag: _, children: p, dynamicChildren: b } = t;
  if (e == null) {
    const C = t.el = y(""), q = t.anchor = y("");
    u(C, n, r), u(q, n, r);
    const B = (R, D) => {
      _ & 16 && (o && o.isCE && (o.ce._teleportTarget = R), c(p, R, D, o, i, a, l, s));
    }, V = () => {
      const R = t.target = lu(t.props, g), D = Th(R, t, y, u);
      R && (a !== "svg" && od(R) ? a = "svg" : a !== "mathml" && id(R) && (a = "mathml"), x || (B(R, D), $a(t, false)));
    };
    x && (B(n, q), $a(t, true)), rd(t.props) ? Ft(() => {
      V(), t.el.__isMounted = true;
    }, i) : V();
  } else {
    if (rd(t.props) && !e.el.__isMounted) {
      Ft(() => {
        Sh.process(e, t, n, r, o, i, a, l, s, d), delete e.el.__isMounted;
      }, i);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, q = t.target = e.target, B = t.targetAnchor = e.targetAnchor, V = Pi(e.props), R = V ? n : q, D = V ? C : B;
    if (a === "svg" || od(q) ? a = "svg" : (a === "mathml" || id(q)) && (a = "mathml"), b ? (v(e.dynamicChildren, b, R, o, i, a, l), lc(e, t, true)) : s || f(e, t, R, D, o, i, a, l, false), x) V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ya(t, n, C, d, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const $ = t.target = lu(t.props, g);
      $ && ya(t, $, null, d, 0);
    } else V && ya(t, q, B, d, 1);
    $a(t, x);
  }
}, remove(e, t, n, { um: r, o: { remove: o } }, i) {
  const { shapeFlag: a, children: l, anchor: s, targetStart: d, targetAnchor: c, target: f, props: v } = e;
  if (f && (o(d), o(c)), i && o(s), a & 16) {
    const u = i || !Pi(v);
    for (let g = 0; g < l.length; g++) {
      const y = l[g];
      r(y, t, n, u, !!y.dynamicChildren);
    }
  }
}, move: ya, hydrate: Gb };
function ya(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: l, shapeFlag: s, children: d, props: c } = e, f = i === 2;
  if (f && r(a, t, n), (!f || Pi(c)) && s & 16) for (let v = 0; v < d.length; v++) o(d[v], t, n, 2);
  f && r(l, t, n);
}
function Gb(e, t, n, r, o, i, { o: { nextSibling: a, parentNode: l, querySelector: s, insert: d, createText: c } }, f) {
  const v = t.target = lu(t.props, s);
  if (v) {
    const u = Pi(t.props), g = v._lpa || v.firstChild;
    if (t.shapeFlag & 16) if (u) t.anchor = f(a(e), t, l(e), n, r, o, i), t.targetStart = g, t.targetAnchor = g && a(g);
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
      t.targetAnchor || Th(v, t, c, d), f(g && a(g), t, v, n, r, o, i);
    }
    $a(t, u);
  }
  return t.anchor && a(t.anchor);
}
const Xb = Sh;
function $a(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Th(e, t, n, r) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[xh] = i, e && (r(o, e), r(i, e)), i;
}
const xr = Symbol("_leaveCb"), _a = Symbol("_enterCb");
function kh() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return st(() => {
    e.isMounted = true;
  }), We(() => {
    e.isUnmounting = true;
  }), e;
}
const gn = [Function, Array], Mh = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: gn, onEnter: gn, onAfterEnter: gn, onEnterCancelled: gn, onBeforeLeave: gn, onLeave: gn, onAfterLeave: gn, onLeaveCancelled: gn, onBeforeAppear: gn, onAppear: gn, onAfterAppear: gn, onAppearCancelled: gn }, qh = (e) => {
  const t = e.subTree;
  return t.component ? qh(t.component) : t;
}, Jb = { name: "BaseTransition", props: Mh, setup(e, { slots: t }) {
  const n = xe(), r = kh();
  return () => {
    const o = t.default && oc(t.default(), true);
    if (!o || !o.length) return;
    const i = Eh(o), a = Je(e), { mode: l } = a;
    if (r.isLeaving) return ds(i);
    const s = ad(i);
    if (!s) return ds(i);
    let d = Ki(s, a, r, n, (f) => d = f);
    s.type !== on && Lr(s, d);
    let c = n.subTree && ad(n.subTree);
    if (c && c.type !== on && !Tr(s, c) && qh(n).type !== on) {
      let f = Ki(c, a, r, n);
      if (Lr(c, f), l === "out-in" && s.type !== on) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, ds(i);
      l === "in-out" && s.type !== on ? f.delayLeave = (v, u, g) => {
        const y = Ah(r, c);
        y[String(c.key)] = c, v[xr] = () => {
          u(), v[xr] = void 0, delete d.delayedLeave, c = void 0;
        }, d.delayedLeave = () => {
          g(), delete d.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return i;
  };
} };
function Eh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== on) {
      t = n;
      break;
    }
  }
  return t;
}
const Zb = Jb;
function Ah(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ki(e, t, n, r, o) {
  const { appear: i, mode: a, persisted: l = false, onBeforeEnter: s, onEnter: d, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: v, onLeave: u, onAfterLeave: g, onLeaveCancelled: y, onBeforeAppear: w, onAppear: x, onAfterAppear: _, onAppearCancelled: p } = t, b = String(e.key), C = Ah(n, e), q = (R, D) => {
    R && Dn(R, r, 9, D);
  }, B = (R, D) => {
    const $ = D[1];
    q(R, D), je(R) ? R.every((M) => M.length <= 1) && $() : R.length <= 1 && $();
  }, V = { mode: a, persisted: l, beforeEnter(R) {
    let D = s;
    if (!n.isMounted) if (i) D = w || s;
    else return;
    R[xr] && R[xr](true);
    const $ = C[b];
    $ && Tr(e, $) && $.el[xr] && $.el[xr](), q(D, [R]);
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
    const A = R[xr] = (T) => {
      M || (M = true, D(), T ? q(y, [R]) : q(g, [R]), R[xr] = void 0, C[$] === e && delete C[$]);
    };
    C[$] = e, u ? B(u, [R, A]) : A();
  }, clone(R) {
    const D = Ki(R, t, n, r, o);
    return o && o(D), D;
  } };
  return V;
}
function ds(e) {
  if (Pl(e)) return e = ir(e), e.children = null, e;
}
function ad(e) {
  if (!Pl(e)) return Ch(e.type) && e.children ? Eh(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ge(n.default)) return n.default();
  }
}
function Lr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Lr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function oc(e, t = false, n) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === rn ? (a.patchFlag & 128 && o++, r = r.concat(oc(a.children, t, l))) : (t || a.type !== on) && r.push(l != null ? ir(a, { key: l }) : a);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
  return Ge(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
function Lh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function rl(e, t, n, r, o = false) {
  if (je(e)) {
    e.forEach((g, y) => rl(g, t && (je(t) ? t[y] : t), n, r, o));
    return;
  }
  if (Ro(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && rl(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Il(r.component) : r.el, a = o ? null : i, { i: l, r: s } = e, d = t && t.r, c = l.refs === gt ? l.refs = {} : l.refs, f = l.setupState, v = Je(f), u = f === gt ? () => false : (g) => ft(v, g);
  if (d != null && d !== s && (Pt(d) ? (c[d] = null, u(d) && (f[d] = null)) : wt(d) && (d.value = null)), Ge(s)) la(s, l, 12, [a, c]);
  else {
    const g = Pt(s), y = wt(s);
    if (g || y) {
      const w = () => {
        if (e.f) {
          const x = g ? u(s) ? f[s] : c[s] : s.value;
          o ? je(x) && Uu(x, i) : je(x) ? x.includes(i) || x.push(i) : g ? (c[s] = [i], u(s) && (f[s] = c[s])) : (s.value = [i], e.k && (c[e.k] = s.value));
        } else g ? (c[s] = a, u(s) && (f[s] = a)) : y && (s.value = a, e.k && (c[e.k] = a));
      };
      a ? (w.id = -1, Ft(w, n)) : w();
    }
  }
}
ia().requestIdleCallback;
ia().cancelIdleCallback;
const Ro = (e) => !!e.type.__asyncLoader, Pl = (e) => e.type.__isKeepAlive, ep = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = xe(), r = n.ctx;
  if (!r.renderer) return () => {
    const _ = t.default && t.default();
    return _ && _.length === 1 ? _[0] : _;
  };
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
  let a = null;
  const l = n.suspense, { renderer: { p: s, m: d, um: c, o: { createElement: f } } } = r, v = f("div");
  r.activate = (_, p, b, C, q) => {
    const B = _.component;
    d(_, p, b, 0, l), s(B.vnode, _, p, b, B, l, C, _.slotScopeIds, q), Ft(() => {
      B.isDeactivated = false, B.a && Ai(B.a);
      const V = _.props && _.props.onVnodeMounted;
      V && pn(V, B.parent, _);
    }, l);
  }, r.deactivate = (_) => {
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
    o.forEach((p, b) => {
      const C = hu(p.type);
      C && !_(C) && y(b);
    });
  }
  function y(_) {
    const p = o.get(_);
    p && (!a || !Tr(p, a)) ? u(p) : a && fs(a), o.delete(_), i.delete(_);
  }
  me(() => [e.include, e.exclude], ([_, p]) => {
    _ && g((b) => wi(_, b)), p && g((b) => !wi(p, b));
  }, { flush: "post", deep: true });
  let w = null;
  const x = () => {
    w != null && (al(n.subTree.type) ? Ft(() => {
      o.set(w, wa(n.subTree));
    }, n.subTree.suspense) : o.set(w, wa(n.subTree)));
  };
  return st(x), Vl(x), We(() => {
    o.forEach((_) => {
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
    if (b.type === on) return a = null, b;
    const C = b.type, q = hu(Ro(b) ? b.type.__asyncResolved || {} : C), { include: B, exclude: V, max: R } = e;
    if (B && (!q || !wi(B, q)) || V && q && wi(V, q)) return b.shapeFlag &= -257, a = b, p;
    const D = b.key == null ? C : b.key, $ = o.get(D);
    return b.el && (b = ir(b), p.shapeFlag & 128 && (p.ssContent = b)), w = D, $ ? (b.el = $.el, b.component = $.component, b.transition && Lr(b, b.transition), b.shapeFlag |= 512, i.delete(D), i.add(D)) : (i.add(D), R && i.size > parseInt(R, 10) && y(i.values().next().value)), b.shapeFlag |= 256, a = b, al(p.type) ? p : b;
  };
} }, Bh = ep;
function wi(e, t) {
  return je(e) ? e.some((n) => wi(n, t)) : Pt(e) ? e.split(",").includes(t) : sb(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function Dr(e, t) {
  Rh(e, "a", t);
}
function Hn(e, t) {
  Rh(e, "da", t);
}
function Rh(e, t, n = Kt) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated) return;
      o = o.parent;
    }
    return e();
  });
  if (Dl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; ) Pl(o.parent.vnode) && tp(r, t, n, o), o = o.parent;
  }
}
function tp(e, t, n, r) {
  const o = Dl(t, e, r, true);
  sa(() => {
    Uu(r[t], o);
  }, n);
}
function fs(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function wa(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Dl(e, t, n = Kt, r = false) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      Rr();
      const l = ua(n), s = Dn(t, n, e, a);
      return l(), Pr(), s;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const lr = (e) => (t, n = Kt) => {
  (!Gi || e === "sp") && Dl(e, (...r) => t(...r), n);
}, Ol = lr("bm"), st = lr("m"), fo = lr("bu"), Vl = lr("u"), We = lr("bum"), sa = lr("um"), np = lr("sp"), rp = lr("rtg"), op = lr("rtc");
function ip(e, t = Kt) {
  Dl("ec", e, t);
}
const Ph = "components", ap = "directives";
function ic(e, t) {
  return Dh(Ph, e, true, t) || e;
}
const lp = Symbol.for("v-ndc");
function sp(e) {
  return Dh(ap, e);
}
function Dh(e, t, n = true, r = false) {
  const o = sn || Kt;
  if (o) {
    const i = o.type;
    if (e === Ph) {
      const l = hu(i, false);
      if (l && (l === t || l === xn(t) || l === Ll(xn(t)))) return i;
    }
    const a = ld(o[e] || i[e], t) || ld(o.appContext[e], t);
    return !a && r ? i : a;
  }
}
function ld(e, t) {
  return e && (e[t] || e[xn(t)] || e[Ll(xn(t))]);
}
const su = (e) => e ? em(e) ? Il(e) : su(e.parent) : null, Di = zt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => su(e.parent), $root: (e) => su(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Vh(e), $forceUpdate: (e) => e.f || (e.f = () => {
  rc(e.update);
}), $nextTick: (e) => e.n || (e.n = Qe.bind(e.proxy)), $watch: (e) => Ap.bind(e) }), vs = (e, t) => e !== gt && !e.__isScriptSetup && ft(e, t), up = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: o, props: i, accessCache: a, type: l, appContext: s } = e;
  let d;
  if (t[0] !== "$") {
    const u = a[t];
    if (u !== void 0) switch (u) {
      case 1:
        return r[t];
      case 2:
        return o[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (vs(r, t)) return a[t] = 1, r[t];
      if (o !== gt && ft(o, t)) return a[t] = 2, o[t];
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
  const { data: r, setupState: o, ctx: i } = e;
  return vs(o, t) ? (o[t] = n, true) : r !== gt && ft(r, t) ? (r[t] = n, true) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i } }, a) {
  let l;
  return !!n[a] || e !== gt && ft(e, a) || vs(t, a) || (l = i[0]) && ft(l, a) || ft(r, a) || ft(Di, a) || ft(o.config.globalProperties, a);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function sd(e) {
  return je(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let uu = true;
function cp(e) {
  const t = Vh(e), n = e.proxy, r = e.ctx;
  uu = false, t.beforeCreate && ud(t.beforeCreate, e, "bc");
  const { data: o, computed: i, methods: a, watch: l, provide: s, inject: d, created: c, beforeMount: f, mounted: v, beforeUpdate: u, updated: g, activated: y, deactivated: w, beforeDestroy: x, beforeUnmount: _, destroyed: p, unmounted: b, render: C, renderTracked: q, renderTriggered: B, errorCaptured: V, serverPrefetch: R, expose: D, inheritAttrs: $, components: M, directives: A, filters: T } = t;
  if (d && dp(d, r, null), a) for (const j in a) {
    const K = a[j];
    Ge(K) && (r[j] = K.bind(n));
  }
  if (o) {
    const j = o.call(n, n);
    kt(j) && (e.data = Nn(j));
  }
  if (uu = true, i) for (const j in i) {
    const K = i[j], ie = Ge(K) ? K.bind(n, n) : Ge(K.get) ? K.get.bind(n, n) : Ln, ye = !Ge(K) && Ge(K.set) ? K.set.bind(n) : Ln, Y = m({ get: ie, set: ye });
    Object.defineProperty(r, j, { enumerable: true, configurable: true, get: () => Y.value, set: (L) => Y.value = L });
  }
  if (l) for (const j in l) Oh(l[j], r, n, j);
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
  if (U(Ol, f), U(st, v), U(fo, u), U(Vl, g), U(Dr, y), U(Hn, w), U(ip, V), U(op, q), U(rp, B), U(We, _), U(sa, b), U(np, R), je(D)) if (D.length) {
    const j = e.exposed || (e.exposed = {});
    D.forEach((K) => {
      Object.defineProperty(j, K, { get: () => n[K], set: (ie) => n[K] = ie });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Ln && (e.render = C), $ != null && (e.inheritAttrs = $), M && (e.components = M), A && (e.directives = A), R && Lh(e);
}
function dp(e, t, n = Ln) {
  je(e) && (e = cu(e));
  for (const r in e) {
    const o = e[r];
    let i;
    kt(o) ? "default" in o ? i = Lt(o.from || r, o.default, true) : i = Lt(o.from || r) : i = Lt(o), wt(i) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => i.value, set: (a) => i.value = a }) : t[r] = i;
  }
}
function ud(e, t, n) {
  Dn(je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Oh(e, t, n, r) {
  let o = r.includes(".") ? Gh(n, r) : () => n[r];
  if (Pt(e)) {
    const i = t[e];
    Ge(i) && me(o, i);
  } else if (Ge(e)) me(o, e.bind(n));
  else if (kt(e)) if (je(e)) e.forEach((i) => Oh(i, t, n, r));
  else {
    const i = Ge(e.handler) ? e.handler.bind(n) : t[e.handler];
    Ge(i) && me(o, i, e);
  }
}
function Vh(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: a } } = e.appContext, l = i.get(t);
  let s;
  return l ? s = l : !o.length && !n && !r ? s = t : (s = {}, o.length && o.forEach((d) => ol(s, d, a, true)), ol(s, t, a)), kt(t) && i.set(t, s), s;
}
function ol(e, t, n, r = false) {
  const { mixins: o, extends: i } = t;
  i && ol(e, i, n, true), o && o.forEach((a) => ol(e, a, n, true));
  for (const a in t) if (!(r && a === "expose")) {
    const l = fp[a] || n && n[a];
    e[a] = l ? l(e[a], t[a]) : t[a];
  }
  return e;
}
const fp = { data: cd, props: dd, emits: dd, methods: xi, computed: xi, beforeCreate: en, created: en, beforeMount: en, mounted: en, beforeUpdate: en, updated: en, beforeDestroy: en, beforeUnmount: en, destroyed: en, unmounted: en, activated: en, deactivated: en, errorCaptured: en, serverPrefetch: en, components: xi, directives: xi, watch: hp, provide: cd, inject: vp };
function cd(e, t) {
  return t ? e ? function() {
    return zt(Ge(e) ? e.call(this, this) : e, Ge(t) ? t.call(this, this) : t);
  } : t : e;
}
function vp(e, t) {
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
function hp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = en(e[r], t[r]);
  return n;
}
function Fh() {
  return { app: null, config: { isNativeTag: ab, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let mp = 0;
function gp(e, t) {
  return function(r, o = null) {
    Ge(r) || (r = zt({}, r)), o != null && !kt(o) && (o = null);
    const i = Fh(), a = /* @__PURE__ */ new WeakSet(), l = [];
    let s = false;
    const d = i.app = { _uid: mp++, _component: r, _props: o, _container: null, _context: i, _instance: null, version: Gp, get config() {
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
        const u = d._ceVNode || Ue(r, o);
        return u.appContext = i, v === true ? v = "svg" : v === false && (v = void 0), e(u, c, v), s = true, d._container = c, c.__vue_app__ = d, Il(u.component);
      }
    }, onUnmount(c) {
      l.push(c);
    }, unmount() {
      s && (Dn(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(c, f) {
      return i.provides[c] = f, d;
    }, runWithContext(c) {
      const f = Po;
      Po = d;
      try {
        return c();
      } finally {
        Po = f;
      }
    } };
    return d;
  };
}
let Po = null;
function _n(e, t) {
  if (Kt) {
    let n = Kt.provides;
    const r = Kt.parent && Kt.parent.provides;
    r === n && (n = Kt.provides = Object.create(r)), n[e] = t;
  }
}
function Lt(e, t, n = false) {
  const r = Kt || sn;
  if (r || Po) {
    const o = Po ? Po._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Ge(t) ? t.call(r && r.proxy) : t;
  }
}
const $h = {}, Ih = () => Object.create($h), Nh = (e) => Object.getPrototypeOf(e) === $h;
function bp(e, t, n, r = false) {
  const o = {}, i = Ih();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zh(e, t, o, i);
  for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
  n ? e.props = r ? o : ec(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function pp(e, t, n, r) {
  const { props: o, attrs: i, vnode: { patchFlag: a } } = e, l = Je(o), [s] = e.propsOptions;
  let d = false;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let v = c[f];
        if (Fl(e.emitsOptions, v)) continue;
        const u = t[v];
        if (s) if (ft(i, v)) u !== i[v] && (i[v] = u, d = true);
        else {
          const g = xn(v);
          o[g] = du(s, l, g, u, e, false);
        }
        else u !== i[v] && (i[v] = u, d = true);
      }
    }
  } else {
    zh(e, t, o, i) && (d = true);
    let c;
    for (const f in l) (!t || !ft(t, f) && ((c = co(f)) === f || !ft(t, c))) && (s ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = du(s, l, f, void 0, e, true)) : delete o[f]);
    if (i !== l) for (const f in i) (!t || !ft(t, f)) && (delete i[f], d = true);
  }
  d && nr(e.attrs, "set", "");
}
function zh(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let a = false, l;
  if (t) for (let s in t) {
    if (Ei(s)) continue;
    const d = t[s];
    let c;
    o && ft(o, c = xn(s)) ? !i || !i.includes(c) ? n[c] = d : (l || (l = {}))[c] = d : Fl(e.emitsOptions, s) || (!(s in r) || d !== r[s]) && (r[s] = d, a = true);
  }
  if (i) {
    const s = Je(n), d = l || gt;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = du(o, s, f, d[f], e, !ft(d, f));
    }
  }
  return a;
}
function du(e, t, n, r, o, i) {
  const a = e[n];
  if (a != null) {
    const l = ft(a, "default");
    if (l && r === void 0) {
      const s = a.default;
      if (a.type !== Function && !a.skipFactory && Ge(s)) {
        const { propsDefaults: d } = o;
        if (n in d) r = d[n];
        else {
          const c = ua(o);
          r = d[n] = s.call(null, t), c();
        }
      } else r = s;
      o.ce && o.ce._setProp(n, r);
    }
    a[0] && (i && !l ? r = false : a[1] && (r === "" || r === co(n)) && (r = true));
  }
  return r;
}
const yp = /* @__PURE__ */ new WeakMap();
function Hh(e, t, n = false) {
  const r = n ? yp : t.propsCache, o = r.get(e);
  if (o) return o;
  const i = e.props, a = {}, l = [];
  let s = false;
  if (!Ge(e)) {
    const c = (f) => {
      s = true;
      const [v, u] = Hh(f, t, true);
      zt(a, v), u && l.push(...u);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s) return kt(e) && r.set(e, Ao), Ao;
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
  return kt(e) && r.set(e, d), d;
}
function fd(e) {
  return e[0] !== "$" && !Ei(e);
}
const jh = (e) => e[0] === "_" || e === "$stable", ac = (e) => je(e) ? e.map(In) : [In(e)], _p = (e, t, n) => {
  if (t._n) return t;
  const r = qt((...o) => ac(t(...o)), n);
  return r._c = false, r;
}, Uh = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (jh(o)) continue;
    const i = e[o];
    if (Ge(i)) t[o] = _p(o, i, r);
    else if (i != null) {
      const a = ac(i);
      t[o] = () => a;
    }
  }
}, Qh = (e, t) => {
  const n = ac(t);
  e.slots.default = () => n;
}, Kh = (e, t, n) => {
  for (const r in t) (n || r !== "_") && (e[r] = t[r]);
}, wp = (e, t, n) => {
  const r = e.slots = Ih();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Kh(r, t, n), n && Yv(r, "_", o, true)) : Uh(t, r);
  } else t && Qh(e, t);
}, xp = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let i = true, a = gt;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = false : Kh(o, t, n) : (i = !t.$stable, Uh(t, o)), a = t;
  } else t && (Qh(e, t), a = { default: 1 });
  if (i) for (const l in o) !jh(l) && a[l] == null && delete o[l];
};
function Cp() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (ia().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Ft = Vp;
function Sp(e) {
  return Tp(e);
}
function Tp(e, t) {
  Cp();
  const n = ia();
  n.__VUE__ = true;
  const { insert: r, remove: o, patchProp: i, createElement: a, createText: l, createComment: s, setText: d, setElementText: c, parentNode: f, nextSibling: v, setScopeId: u = Ln, insertStaticContent: g } = e, y = (S, E, I, Z = null, re = null, W = null, fe = void 0, ve = null, ue = !!E.dynamicChildren) => {
    if (S === E) return;
    S && !Tr(S, E) && (Z = P(S), L(S, re, W, true), S = null), E.patchFlag === -2 && (ue = false, E.dynamicChildren = null);
    const { type: ce, ref: oe, shapeFlag: Q } = E;
    switch (ce) {
      case $l:
        w(S, E, I, Z);
        break;
      case on:
        x(S, E, I, Z);
        break;
      case Ia:
        S == null && _(E, I, Z, fe);
        break;
      case rn:
        M(S, E, I, Z, re, W, fe, ve, ue);
        break;
      default:
        Q & 1 ? C(S, E, I, Z, re, W, fe, ve, ue) : Q & 6 ? A(S, E, I, Z, re, W, fe, ve, ue) : (Q & 64 || Q & 128) && ce.process(S, E, I, Z, re, W, fe, ve, ue, F);
    }
    oe != null && re && rl(oe, S && S.ref, W, E || S, !E);
  }, w = (S, E, I, Z) => {
    if (S == null) r(E.el = l(E.children), I, Z);
    else {
      const re = E.el = S.el;
      E.children !== S.children && d(re, E.children);
    }
  }, x = (S, E, I, Z) => {
    S == null ? r(E.el = s(E.children || ""), I, Z) : E.el = S.el;
  }, _ = (S, E, I, Z) => {
    [S.el, S.anchor] = g(S.children, E, I, Z, S.el, S.anchor);
  }, p = ({ el: S, anchor: E }, I, Z) => {
    let re;
    for (; S && S !== E; ) re = v(S), r(S, I, Z), S = re;
    r(E, I, Z);
  }, b = ({ el: S, anchor: E }) => {
    let I;
    for (; S && S !== E; ) I = v(S), o(S), S = I;
    o(E);
  }, C = (S, E, I, Z, re, W, fe, ve, ue) => {
    E.type === "svg" ? fe = "svg" : E.type === "math" && (fe = "mathml"), S == null ? q(E, I, Z, re, W, fe, ve, ue) : R(S, E, re, W, fe, ve, ue);
  }, q = (S, E, I, Z, re, W, fe, ve) => {
    let ue, ce;
    const { props: oe, shapeFlag: Q, transition: le, dirs: we } = S;
    if (ue = S.el = a(S.type, W, oe && oe.is, oe), Q & 8 ? c(ue, S.children) : Q & 16 && V(S.children, ue, null, Z, re, hs(S, W), fe, ve), we && Fr(S, null, Z, "created"), B(ue, S, S.scopeId, fe, Z), oe) {
      for (const Te in oe) Te !== "value" && !Ei(Te) && i(ue, Te, null, oe[Te], W, Z);
      "value" in oe && i(ue, "value", null, oe.value, W), (ce = oe.onVnodeBeforeMount) && pn(ce, Z, S);
    }
    we && Fr(S, null, Z, "beforeMount");
    const Ce = kp(re, le);
    Ce && le.beforeEnter(ue), r(ue, E, I), ((ce = oe && oe.onVnodeMounted) || Ce || we) && Ft(() => {
      ce && pn(ce, Z, S), Ce && le.enter(ue), we && Fr(S, null, Z, "mounted");
    }, re);
  }, B = (S, E, I, Z, re) => {
    if (I && u(S, I), Z) for (let W = 0; W < Z.length; W++) u(S, Z[W]);
    if (re) {
      let W = re.subTree;
      if (E === W || al(W.type) && (W.ssContent === E || W.ssFallback === E)) {
        const fe = re.vnode;
        B(S, fe, fe.scopeId, fe.slotScopeIds, re.parent);
      }
    }
  }, V = (S, E, I, Z, re, W, fe, ve, ue = 0) => {
    for (let ce = ue; ce < S.length; ce++) {
      const oe = S[ce] = ve ? Cr(S[ce]) : In(S[ce]);
      y(null, oe, E, I, Z, re, W, fe, ve);
    }
  }, R = (S, E, I, Z, re, W, fe) => {
    const ve = E.el = S.el;
    let { patchFlag: ue, dynamicChildren: ce, dirs: oe } = E;
    ue |= S.patchFlag & 16;
    const Q = S.props || gt, le = E.props || gt;
    let we;
    if (I && $r(I, false), (we = le.onVnodeBeforeUpdate) && pn(we, I, E, S), oe && Fr(E, S, I, "beforeUpdate"), I && $r(I, true), (Q.innerHTML && le.innerHTML == null || Q.textContent && le.textContent == null) && c(ve, ""), ce ? D(S.dynamicChildren, ce, ve, I, Z, hs(E, re), W) : fe || K(S, E, ve, null, I, Z, hs(E, re), W, false), ue > 0) {
      if (ue & 16) $(ve, Q, le, I, re);
      else if (ue & 2 && Q.class !== le.class && i(ve, "class", null, le.class, re), ue & 4 && i(ve, "style", Q.style, le.style, re), ue & 8) {
        const Ce = E.dynamicProps;
        for (let Te = 0; Te < Ce.length; Te++) {
          const Me = Ce[Te], Ie = Q[Me], Ne = le[Me];
          (Ne !== Ie || Me === "value") && i(ve, Me, Ie, Ne, re, I);
        }
      }
      ue & 1 && S.children !== E.children && c(ve, E.children);
    } else !fe && ce == null && $(ve, Q, le, I, re);
    ((we = le.onVnodeUpdated) || oe) && Ft(() => {
      we && pn(we, I, E, S), oe && Fr(E, S, I, "updated");
    }, Z);
  }, D = (S, E, I, Z, re, W, fe) => {
    for (let ve = 0; ve < E.length; ve++) {
      const ue = S[ve], ce = E[ve], oe = ue.el && (ue.type === rn || !Tr(ue, ce) || ue.shapeFlag & 70) ? f(ue.el) : I;
      y(ue, ce, oe, null, Z, re, W, fe, true);
    }
  }, $ = (S, E, I, Z, re) => {
    if (E !== I) {
      if (E !== gt) for (const W in E) !Ei(W) && !(W in I) && i(S, W, E[W], null, re, Z);
      for (const W in I) {
        if (Ei(W)) continue;
        const fe = I[W], ve = E[W];
        fe !== ve && W !== "value" && i(S, W, ve, fe, re, Z);
      }
      "value" in I && i(S, "value", E.value, I.value, re);
    }
  }, M = (S, E, I, Z, re, W, fe, ve, ue) => {
    const ce = E.el = S ? S.el : l(""), oe = E.anchor = S ? S.anchor : l("");
    let { patchFlag: Q, dynamicChildren: le, slotScopeIds: we } = E;
    we && (ve = ve ? ve.concat(we) : we), S == null ? (r(ce, I, Z), r(oe, I, Z), V(E.children || [], I, oe, re, W, fe, ve, ue)) : Q > 0 && Q & 64 && le && S.dynamicChildren ? (D(S.dynamicChildren, le, I, re, W, fe, ve), (E.key != null || re && E === re.subTree) && lc(S, E, true)) : K(S, E, I, oe, re, W, fe, ve, ue);
  }, A = (S, E, I, Z, re, W, fe, ve, ue) => {
    E.slotScopeIds = ve, S == null ? E.shapeFlag & 512 ? re.ctx.activate(E, I, Z, fe, ue) : T(E, I, Z, re, W, fe, ue) : z(S, E, ue);
  }, T = (S, E, I, Z, re, W, fe) => {
    const ve = S.component = jp(S, Z, re);
    if (Pl(S) && (ve.ctx.renderer = F), Up(ve, false, fe), ve.asyncDep) {
      if (re && re.registerDep(ve, U, fe), !S.el) {
        const ue = ve.subTree = Ue(on);
        x(null, ue, E, I);
      }
    } else U(ve, S, E, I, re, W, fe);
  }, z = (S, E, I) => {
    const Z = E.component = S.component;
    if (Dp(S, E, I)) if (Z.asyncDep && !Z.asyncResolved) {
      j(Z, E, I);
      return;
    } else Z.next = E, Z.update();
    else E.el = S.el, Z.vnode = E;
  }, U = (S, E, I, Z, re, W, fe) => {
    const ve = () => {
      if (S.isMounted) {
        let { next: Q, bu: le, u: we, parent: Ce, vnode: Te } = S;
        {
          const pe = Wh(S);
          if (pe) {
            Q && (Q.el = Te.el, j(S, Q, fe)), pe.asyncDep.then(() => {
              S.isUnmounted || ve();
            });
            return;
          }
        }
        let Me = Q, Ie;
        $r(S, false), Q ? (Q.el = Te.el, j(S, Q, fe)) : Q = Te, le && Ai(le), (Ie = Q.props && Q.props.onVnodeBeforeUpdate) && pn(Ie, Ce, Q, Te), $r(S, true);
        const Ne = vd(S), se = S.subTree;
        S.subTree = Ne, y(se, Ne, f(se.el), P(se), S, re, W), Q.el = Ne.el, Me === null && Op(S, Ne.el), we && Ft(we, re), (Ie = Q.props && Q.props.onVnodeUpdated) && Ft(() => pn(Ie, Ce, Q, Te), re);
      } else {
        let Q;
        const { el: le, props: we } = E, { bm: Ce, m: Te, parent: Me, root: Ie, type: Ne } = S, se = Ro(E);
        $r(S, false), Ce && Ai(Ce), !se && (Q = we && we.onVnodeBeforeMount) && pn(Q, Me, E), $r(S, true);
        {
          Ie.ce && Ie.ce._injectChildStyle(Ne);
          const pe = S.subTree = vd(S);
          y(null, pe, I, Z, S, re, W), E.el = pe.el;
        }
        if (Te && Ft(Te, re), !se && (Q = we && we.onVnodeMounted)) {
          const pe = E;
          Ft(() => pn(Q, Me, pe), re);
        }
        (E.shapeFlag & 256 || Me && Ro(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Ft(S.a, re), S.isMounted = true, E = I = Z = null;
      }
    };
    S.scope.on();
    const ue = S.effect = new Zv(ve);
    S.scope.off();
    const ce = S.update = ue.run.bind(ue), oe = S.job = ue.runIfDirty.bind(ue);
    oe.i = S, oe.id = S.uid, ue.scheduler = () => rc(oe), $r(S, true), ce();
  }, j = (S, E, I) => {
    E.component = S;
    const Z = S.vnode.props;
    S.vnode = E, S.next = null, pp(S, E.props, Z, I), xp(S, E.children, I), Rr(), nd(S), Pr();
  }, K = (S, E, I, Z, re, W, fe, ve, ue = false) => {
    const ce = S && S.children, oe = S ? S.shapeFlag : 0, Q = E.children, { patchFlag: le, shapeFlag: we } = E;
    if (le > 0) {
      if (le & 128) {
        ye(ce, Q, I, Z, re, W, fe, ve, ue);
        return;
      } else if (le & 256) {
        ie(ce, Q, I, Z, re, W, fe, ve, ue);
        return;
      }
    }
    we & 8 ? (oe & 16 && O(ce, re, W), Q !== ce && c(I, Q)) : oe & 16 ? we & 16 ? ye(ce, Q, I, Z, re, W, fe, ve, ue) : O(ce, re, W, true) : (oe & 8 && c(I, ""), we & 16 && V(Q, I, Z, re, W, fe, ve, ue));
  }, ie = (S, E, I, Z, re, W, fe, ve, ue) => {
    S = S || Ao, E = E || Ao;
    const ce = S.length, oe = E.length, Q = Math.min(ce, oe);
    let le;
    for (le = 0; le < Q; le++) {
      const we = E[le] = ue ? Cr(E[le]) : In(E[le]);
      y(S[le], we, I, null, re, W, fe, ve, ue);
    }
    ce > oe ? O(S, re, W, true, false, Q) : V(E, I, Z, re, W, fe, ve, ue, Q);
  }, ye = (S, E, I, Z, re, W, fe, ve, ue) => {
    let ce = 0;
    const oe = E.length;
    let Q = S.length - 1, le = oe - 1;
    for (; ce <= Q && ce <= le; ) {
      const we = S[ce], Ce = E[ce] = ue ? Cr(E[ce]) : In(E[ce]);
      if (Tr(we, Ce)) y(we, Ce, I, null, re, W, fe, ve, ue);
      else break;
      ce++;
    }
    for (; ce <= Q && ce <= le; ) {
      const we = S[Q], Ce = E[le] = ue ? Cr(E[le]) : In(E[le]);
      if (Tr(we, Ce)) y(we, Ce, I, null, re, W, fe, ve, ue);
      else break;
      Q--, le--;
    }
    if (ce > Q) {
      if (ce <= le) {
        const we = le + 1, Ce = we < oe ? E[we].el : Z;
        for (; ce <= le; ) y(null, E[ce] = ue ? Cr(E[ce]) : In(E[ce]), I, Ce, re, W, fe, ve, ue), ce++;
      }
    } else if (ce > le) for (; ce <= Q; ) L(S[ce], re, W, true), ce++;
    else {
      const we = ce, Ce = ce, Te = /* @__PURE__ */ new Map();
      for (ce = Ce; ce <= le; ce++) {
        const ke = E[ce] = ue ? Cr(E[ce]) : In(E[ce]);
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
          L(ke, re, W, true);
          continue;
        }
        let Fe;
        if (ke.key != null) Fe = Te.get(ke.key);
        else for (Me = Ce; Me <= le; Me++) if (ae[Me - Ce] === 0 && Tr(ke, E[Me])) {
          Fe = Me;
          break;
        }
        Fe === void 0 ? L(ke, re, W, true) : (ae[Fe - Ce] = ce + 1, Fe >= pe ? pe = Fe : se = true, y(ke, E[Fe], I, null, re, W, fe, ve, ue), Ie++);
      }
      const _e2 = se ? Mp(ae) : Ao;
      for (Me = _e2.length - 1, ce = Ne - 1; ce >= 0; ce--) {
        const ke = Ce + ce, Fe = E[ke], Ae = ke + 1 < oe ? E[ke + 1].el : Z;
        ae[ce] === 0 ? y(null, Fe, I, Ae, re, W, fe, ve, ue) : se && (Me < 0 || ce !== _e2[Me] ? Y(Fe, I, Ae, 2) : Me--);
      }
    }
  }, Y = (S, E, I, Z, re = null) => {
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
    if (fe === rn) {
      r(W, E, I);
      for (let Q = 0; Q < ue.length; Q++) Y(ue[Q], E, I, Z);
      r(S.anchor, E, I);
      return;
    }
    if (fe === Ia) {
      p(S, E, I);
      return;
    }
    if (Z !== 2 && ce & 1 && ve) if (Z === 0) ve.beforeEnter(W), r(W, E, I), Ft(() => ve.enter(W), re);
    else {
      const { leave: Q, delayLeave: le, afterLeave: we } = ve, Ce = () => r(W, E, I), Te = () => {
        Q(W, () => {
          Ce(), we && we();
        });
      };
      le ? le(W, Ce, Te) : Te();
    }
    else r(W, E, I);
  }, L = (S, E, I, Z = false, re = false) => {
    const { type: W, props: fe, ref: ve, children: ue, dynamicChildren: ce, shapeFlag: oe, patchFlag: Q, dirs: le, cacheIndex: we } = S;
    if (Q === -2 && (re = false), ve != null && rl(ve, null, I, S, true), we != null && (E.renderCache[we] = void 0), oe & 256) {
      E.ctx.deactivate(S);
      return;
    }
    const Ce = oe & 1 && le, Te = !Ro(S);
    let Me;
    if (Te && (Me = fe && fe.onVnodeBeforeUnmount) && pn(Me, E, S), oe & 6) be(S.component, I, Z);
    else {
      if (oe & 128) {
        S.suspense.unmount(I, Z);
        return;
      }
      Ce && Fr(S, null, E, "beforeUnmount"), oe & 64 ? S.type.remove(S, E, I, F, Z) : ce && !ce.hasOnce && (W !== rn || Q > 0 && Q & 64) ? O(ce, E, I, false, true) : (W === rn && Q & 384 || !re && oe & 16) && O(ue, E, I), Z && ne(S);
    }
    (Te && (Me = fe && fe.onVnodeUnmounted) || Ce) && Ft(() => {
      Me && pn(Me, E, S), Ce && Fr(S, null, E, "unmounted");
    }, I);
  }, ne = (S) => {
    const { type: E, el: I, anchor: Z, transition: re } = S;
    if (E === rn) {
      G(I, Z);
      return;
    }
    if (E === Ia) {
      b(S);
      return;
    }
    const W = () => {
      o(I), re && !re.persisted && re.afterLeave && re.afterLeave();
    };
    if (S.shapeFlag & 1 && re && !re.persisted) {
      const { leave: fe, delayLeave: ve } = re, ue = () => fe(I, W);
      ve ? ve(S.el, W, ue) : ue();
    } else W();
  }, G = (S, E) => {
    let I;
    for (; S !== E; ) I = v(S), o(S), S = I;
    o(E);
  }, be = (S, E, I) => {
    const { bum: Z, scope: re, job: W, subTree: fe, um: ve, m: ue, a: ce } = S;
    il(ue), il(ce), Z && Ai(Z), re.stop(), W && (W.flags |= 8, L(fe, S, E, I)), ve && Ft(ve, E), Ft(() => {
      S.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, O = (S, E, I, Z = false, re = false, W = 0) => {
    for (let fe = W; fe < S.length; fe++) L(S[fe], E, I, Z, re);
  }, P = (S) => {
    if (S.shapeFlag & 6) return P(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const E = v(S.anchor || S.el), I = E && E[xh];
    return I ? v(I) : E;
  };
  let te = false;
  const k = (S, E, I) => {
    S == null ? E._vnode && L(E._vnode, null, null, true) : y(E._vnode || null, S, E, null, null, null, I), E._vnode = S, te || (te = true, nd(), yh(), te = false);
  }, F = { p: y, um: L, m: Y, r: ne, mt: T, mc: V, pc: K, pbc: D, n: P, o: e };
  return { render: k, hydrate: void 0, createApp: gp(k) };
}
function hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $r({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lc(e, t, n = false) {
  const r = e.children, o = t.children;
  if (je(r) && je(o)) for (let i = 0; i < r.length; i++) {
    const a = r[i];
    let l = o[i];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Cr(o[i]), l.el = a.el), !n && l.patchFlag !== -2 && lc(a, l)), l.type === $l && (l.el = a.el);
  }
}
function Mp(e) {
  const t = e.slice(), n = [0];
  let r, o, i, a, l;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const d = e[r];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[r] = o, n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; ) l = i + a >> 1, e[n[l]] < d ? i = l + 1 : a = l;
      d < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) n[i] = a, a = t[a];
  return n;
}
function Wh(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Wh(t);
}
function il(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const qp = Symbol.for("v-scx"), Ep = () => Lt(qp);
function me(e, t, n) {
  return Yh(e, t, n);
}
function Yh(e, t, n = gt) {
  const { immediate: r, deep: o, flush: i, once: a } = n, l = zt({}, n), s = t && r || !t && i !== "post";
  let d;
  if (Gi) {
    if (i === "sync") {
      const u = Ep();
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
    g ? u() : rc(u);
  }), l.augmentJob = (u) => {
    t && (u.flags |= 4), f && (u.flags |= 2, c && (u.id = c.uid, u.i = c));
  };
  const v = Kb(e, t, l);
  return Gi && (d ? d.push(v) : s && v()), v;
}
function Ap(e, t, n) {
  const r = this.proxy, o = Pt(e) ? e.includes(".") ? Gh(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Ge(t) ? i = t : (i = t.handler, n = t);
  const a = ua(this), l = Yh(o, i.bind(r), n);
  return a(), l;
}
function Gh(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
const Lp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${co(t)}Modifiers`];
function Bp(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || gt;
  let o = n;
  const i = t.startsWith("update:"), a = i && Lp(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => Pt(c) ? c.trim() : c)), a.number && (o = n.map(vb)));
  let l, s = r[l = as(t)] || r[l = as(xn(t))];
  !s && i && (s = r[l = as(co(t))]), s && Dn(s, e, 6, o);
  const d = r[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = true, Dn(d, e, 6, o);
  }
}
function Xh(e, t, n = false) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let a = {}, l = false;
  if (!Ge(e)) {
    const s = (d) => {
      const c = Xh(d, t, true);
      c && (l = true, zt(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !l ? (kt(e) && r.set(e, null), null) : (je(i) ? i.forEach((s) => a[s] = null) : zt(a, i), kt(e) && r.set(e, a), a);
}
function Fl(e, t) {
  return !e || !El(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, co(t)) || ft(e, t));
}
function vd(e) {
  const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [i], slots: a, attrs: l, emit: s, render: d, renderCache: c, props: f, data: v, setupState: u, ctx: g, inheritAttrs: y } = e, w = nl(e);
  let x, _;
  try {
    if (n.shapeFlag & 4) {
      const b = o || r, C = b;
      x = In(d.call(C, b, c, f, u, v, g)), _ = l;
    } else {
      const b = t;
      x = In(b.length > 1 ? b(f, { attrs: l, slots: a, emit: s }) : b(f, null)), _ = t.props ? l : Rp(l);
    }
  } catch (b) {
    Oi.length = 0, Rl(b, e, 1), x = Ue(on);
  }
  let p = x;
  if (_ && y !== false) {
    const b = Object.keys(_), { shapeFlag: C } = p;
    b.length && C & 7 && (i && b.some(ju) && (_ = Pp(_, i)), p = ir(p, _, false, true));
  }
  return n.dirs && (p = ir(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && Lr(p, n.transition), x = p, nl(w), x;
}
const Rp = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || El(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Pp = (e, t) => {
  const n = {};
  for (const r in e) (!ju(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Dp(e, t, n) {
  const { props: r, children: o, component: i } = e, { props: a, children: l, patchFlag: s } = t, d = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return r ? hd(r, a, d) : !!a;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const v = c[f];
        if (a[v] !== r[v] && !Fl(d, v)) return true;
      }
    }
  } else return (o || l) && (!l || !l.$stable) ? true : r === a ? false : r ? a ? hd(r, a, d) : true : !!a;
  return false;
}
function hd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Fl(n, i)) return true;
  }
  return false;
}
function Op({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const al = (e) => e.__isSuspense;
function Vp(e, t) {
  t && t.pendingBranch ? je(e) ? t.effects.push(...e) : t.effects.push(e) : ph(e);
}
const rn = Symbol.for("v-fgt"), $l = Symbol.for("v-txt"), on = Symbol.for("v-cmt"), Ia = Symbol.for("v-stc"), Oi = [];
let vn = null;
function ln(e = false) {
  Oi.push(vn = e ? null : []);
}
function Fp() {
  Oi.pop(), vn = Oi[Oi.length - 1] || null;
}
let Wi = 1;
function md(e, t = false) {
  Wi += e, e < 0 && vn && t && (vn.hasOnce = true);
}
function Jh(e) {
  return e.dynamicChildren = Wi > 0 ? vn || Ao : null, Fp(), Wi > 0 && vn && vn.push(e), e;
}
function ao(e, t, n, r, o, i) {
  return Jh($e(e, t, n, r, o, i, true));
}
function Gr(e, t, n, r, o) {
  return Jh(Ue(e, t, n, r, o, true));
}
function Yi(e) {
  return e ? e.__v_isVNode === true : false;
}
function Tr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zh = ({ key: e }) => e ?? null, Na = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pt(e) || wt(e) || Ge(e) ? { i: sn, r: e, k: t, f: !!n } : e : null);
function $e(e, t = null, n = null, r = 0, o = null, i = e === rn ? 0 : 1, a = false, l = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Zh(t), ref: t && Na(t), scopeId: wh, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: r, dynamicProps: o, dynamicChildren: null, appContext: null, ctx: sn };
  return l ? (sc(s, n), i & 128 && e.normalize(s)) : n && (s.shapeFlag |= Pt(n) ? 8 : 16), Wi > 0 && !a && vn && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && vn.push(s), s;
}
const Ue = $p;
function $p(e, t = null, n = null, r = 0, o = null, i = false) {
  if ((!e || e === lp) && (e = on), Yi(e)) {
    const l = ir(e, t, true);
    return n && sc(l, n), Wi > 0 && !i && vn && (l.shapeFlag & 6 ? vn[vn.indexOf(e)] = l : vn.push(l)), l.patchFlag = -2, l;
  }
  if (Yp(e) && (e = e.__vccOpts), t) {
    t = Ip(t);
    let { class: l, style: s } = t;
    l && !Pt(l) && (t.class = Ku(l)), kt(s) && (nc(s) && !je(s) && (s = zt({}, s)), t.style = aa(s));
  }
  const a = Pt(e) ? 1 : al(e) ? 128 : Ch(e) ? 64 : kt(e) ? 4 : Ge(e) ? 2 : 0;
  return $e(e, t, n, r, o, a, i, true);
}
function Ip(e) {
  return e ? nc(e) || Nh(e) ? zt({}, e) : e : null;
}
function ir(e, t, n = false, r = false) {
  const { props: o, ref: i, patchFlag: a, children: l, transition: s } = e, d = t ? Np(o || {}, t) : o, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && Zh(d), ref: t && t.ref ? n && i ? je(i) ? i.concat(Na(t)) : [i, Na(t)] : Na(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? a === -1 ? 16 : a | 16 : a, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ir(e.ssContent), ssFallback: e.ssFallback && ir(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && r && Lr(c, s.clone(c)), c;
}
function kr(e = " ", t = 0) {
  return Ue($l, null, e, t);
}
function fu(e = "", t = false) {
  return t ? (ln(), Gr(on, null, e)) : Ue(on, null, e);
}
function In(e) {
  return e == null || typeof e == "boolean" ? Ue(on) : je(e) ? Ue(rn, null, e.slice()) : Yi(e) ? Cr(e) : Ue($l, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ir(e);
}
function sc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (je(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const o = t.default;
    o && (o._c && (o._d = false), sc(e, o()), o._c && (o._d = true));
    return;
  } else {
    n = 32;
    const o = t._;
    !o && !Nh(t) ? t._ctx = sn : o === 3 && sn && (sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Ge(t) ? (t = { default: t, _ctx: sn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [kr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Np(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r) if (o === "class") t.class !== r.class && (t.class = Ku([t.class, r.class]));
    else if (o === "style") t.style = aa([t.style, r.style]);
    else if (El(o)) {
      const i = t[o], a = r[o];
      a && i !== a && !(je(i) && i.includes(a)) && (t[o] = i ? [].concat(i, a) : a);
    } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function pn(e, t, n, r = null) {
  Dn(e, t, 7, [n, r]);
}
const zp = Fh();
let Hp = 0;
function jp(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || zp, i = { uid: Hp++, vnode: e, type: r, parent: t, appContext: o, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new wb(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(o.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Hh(r, o), emitsOptions: Xh(r, o), emit: null, emitted: null, propsDefaults: gt, inheritAttrs: r.inheritAttrs, ctx: gt, data: gt, props: gt, attrs: gt, slots: gt, refs: gt, setupState: gt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Bp.bind(null, i), e.ce && e.ce(i), i;
}
let Kt = null;
const xe = () => Kt || sn;
let ll, vu;
{
  const e = ia(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((a) => a(i)) : o[0](i);
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
function em(e) {
  return e.vnode.shapeFlag & 4;
}
let Gi = false;
function Up(e, t = false, n = false) {
  t && vu(t);
  const { props: r, children: o } = e.vnode, i = em(e);
  bp(e, r, i, t), wp(e, o, n);
  const a = i ? Qp(e, t) : void 0;
  return t && vu(false), a;
}
function Qp(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, up);
  const { setup: r } = n;
  if (r) {
    Rr();
    const o = e.setupContext = r.length > 1 ? Wp(e) : null, i = ua(e), a = la(r, e, 0, [e.props, o]), l = Qv(a);
    if (Pr(), i(), (l || e.sp) && !Ro(e) && Lh(e), l) {
      if (a.then(gd, gd), t) return a.then((s) => {
        bd(e, s);
      }).catch((s) => {
        Rl(s, e, 0);
      });
      e.asyncDep = a;
    } else bd(e, a);
  } else tm(e);
}
function bd(e, t, n) {
  Ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : kt(t) && (e.setupState = mh(t)), tm(e);
}
function tm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ln);
  {
    const o = ua(e);
    Rr();
    try {
      cp(e);
    } finally {
      Pr(), o();
    }
  }
}
const Kp = { get(e, t) {
  return Jt(e, "get", ""), e[t];
} };
function Wp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Kp), slots: e.slots, emit: e.emit, expose: t };
}
function Il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(Bl(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Di) return Di[n](e);
  }, has(t, n) {
    return n in t || n in Di;
  } })) : e.proxy;
}
function hu(e, t = true) {
  return Ge(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yp(e) {
  return Ge(e) && "__vccOpts" in e;
}
const m = (e, t) => Ub(e, t, Gi);
function h(e, t, n) {
  const r = arguments.length;
  return r === 2 ? kt(t) && !je(t) ? Yi(t) ? Ue(e, null, [t]) : Ue(e, t) : Ue(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Yi(n) && (n = [n]), Ue(e, t, n));
}
const Gp = "3.5.13";
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
const nm = mu ? (e) => mu.createHTML(e) : (e) => e, Xp = "http://www.w3.org/2000/svg", Jp = "http://www.w3.org/1998/Math/MathML", Zn = typeof document < "u" ? document : null, yd = Zn && Zn.createElement("template"), Zp = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const o = t === "svg" ? Zn.createElementNS(Xp, e) : t === "mathml" ? Zn.createElementNS(Jp, e) : n ? Zn.createElement(e, { is: n }) : Zn.createElement(e);
  return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
}, createText: (e) => Zn.createTextNode(e), createComment: (e) => Zn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Zn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, o, i) {
  const a = n ? n.previousSibling : t.lastChild;
  if (o && (o === i || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === i || !(o = o.nextSibling)); ) ;
  else {
    yd.innerHTML = nm(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const l = yd.content;
    if (r === "svg" || r === "mathml") {
      const s = l.firstChild;
      for (; s.firstChild; ) l.appendChild(s.firstChild);
      l.removeChild(s);
    }
    t.insertBefore(l, n);
  }
  return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, fr = "transition", Zo = "animation", No = Symbol("_vtc"), rm = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, om = zt({}, Mh, rm), ey = (e) => (e.displayName = "Transition", e.props = om, e), $t = ey((e, { slots: t }) => h(Zb, im(e), t)), Ir = (e, t = []) => {
  je(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _d = (e) => e ? je(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function im(e) {
  const t = {};
  for (const M in e) M in rm || (t[M] = e[M]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: o, enterFromClass: i = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: s = i, appearActiveClass: d = a, appearToClass: c = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: v = `${n}-leave-active`, leaveToClass: u = `${n}-leave-to` } = e, g = ty(o), y = g && g[0], w = g && g[1], { onBeforeEnter: x, onEnter: _, onEnterCancelled: p, onLeave: b, onLeaveCancelled: C, onBeforeAppear: q = x, onAppear: B = _, onAppearCancelled: V = p } = t, R = (M, A, T, z) => {
    M._enterCancelled = z, yr(M, A ? c : l), yr(M, A ? d : a), T && T();
  }, D = (M, A) => {
    M._isLeaving = false, yr(M, f), yr(M, u), yr(M, v), A && A();
  }, $ = (M) => (A, T) => {
    const z = M ? B : _, U = () => R(A, M, T);
    Ir(z, [A, U]), wd(() => {
      yr(A, M ? s : i), Fn(A, M ? c : l), _d(z) || xd(A, r, y, U);
    });
  };
  return zt(t, { onBeforeEnter(M) {
    Ir(x, [M]), Fn(M, i), Fn(M, a);
  }, onBeforeAppear(M) {
    Ir(q, [M]), Fn(M, s), Fn(M, d);
  }, onEnter: $(false), onAppear: $(true), onLeave(M, A) {
    M._isLeaving = true;
    const T = () => D(M, A);
    Fn(M, f), M._enterCancelled ? (Fn(M, v), gu()) : (gu(), Fn(M, v)), wd(() => {
      M._isLeaving && (yr(M, f), Fn(M, u), _d(b) || xd(M, r, w, T));
    }), Ir(b, [M, T]);
  }, onEnterCancelled(M) {
    R(M, false, void 0, true), Ir(p, [M]);
  }, onAppearCancelled(M) {
    R(M, true, void 0, true), Ir(V, [M]);
  }, onLeaveCancelled(M) {
    D(M), Ir(C, [M]);
  } });
}
function ty(e) {
  if (e == null) return null;
  if (kt(e)) return [ms(e.enter), ms(e.leave)];
  {
    const t = ms(e);
    return [t, t];
  }
}
function ms(e) {
  return hb(e);
}
function Fn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[No] || (e[No] = /* @__PURE__ */ new Set())).add(t);
}
function yr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[No];
  n && (n.delete(t), n.size || (e[No] = void 0));
}
function wd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ny = 0;
function xd(e, t, n, r) {
  const o = e._endId = ++ny, i = () => {
    o === e._endId && r();
  };
  if (n != null) return setTimeout(i, n);
  const { type: a, timeout: l, propCount: s } = am(e, t);
  if (!a) return r();
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
function am(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), o = r(`${fr}Delay`), i = r(`${fr}Duration`), a = Cd(o, i), l = r(`${Zo}Delay`), s = r(`${Zo}Duration`), d = Cd(l, s);
  let c = null, f = 0, v = 0;
  t === fr ? a > 0 && (c = fr, f = a, v = i.length) : t === Zo ? d > 0 && (c = Zo, f = d, v = s.length) : (f = Math.max(a, d), c = f > 0 ? a > d ? fr : Zo : null, v = c ? c === fr ? i.length : s.length : 0);
  const u = c === fr && /\b(transform|all)(,|$)/.test(r(`${fr}Property`).toString());
  return { type: c, timeout: f, propCount: v, hasTransform: u };
}
function Cd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Sd(n) + Sd(e[r])));
}
function Sd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function gu() {
  return document.body.offsetHeight;
}
function ry(e, t, n) {
  const r = e[No];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sl = Symbol("_vod"), lm = Symbol("_vsh"), sm = { beforeMount(e, { value: t }, { transition: n }) {
  e[sl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ei(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), ei(e, true), r.enter(e)) : r.leave(e, () => {
    ei(e, false);
  }) : ei(e, t));
}, beforeUnmount(e, { value: t }) {
  ei(e, t);
} };
function ei(e, t) {
  e.style.display = t ? e[sl] : "none", e[lm] = !t;
}
const um = Symbol("");
function uc(e) {
  const t = xe();
  if (!t) return;
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => ul(i, o));
  }, r = () => {
    const o = e(t.proxy);
    t.ce ? ul(t.ce, o) : bu(t.subTree, o), n(o);
  };
  fo(() => {
    ph(r);
  }), st(() => {
    me(r, Ln, { flush: "post" });
    const o = new MutationObserver(r);
    o.observe(t.subTree.el.parentNode, { childList: true }), sa(() => o.disconnect());
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
  else if (e.type === rn) e.children.forEach((n) => bu(n, t));
  else if (e.type === Ia) {
    let { el: n, anchor: r } = e;
    for (; n && (ul(n, t), n !== r); ) n = n.nextSibling;
  }
}
function ul(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const o in t) n.setProperty(`--${o}`, t[o]), r += `--${o}: ${t[o]};`;
    n[um] = r;
  }
}
const oy = /(^|;)\s*display\s*:/;
function iy(e, t, n) {
  const r = e.style, o = Pt(n);
  let i = false;
  if (n && !o) {
    if (t) if (Pt(t)) for (const a of t.split(";")) {
      const l = a.slice(0, a.indexOf(":")).trim();
      n[l] == null && za(r, l, "");
    }
    else for (const a in t) n[a] == null && za(r, a, "");
    for (const a in n) a === "display" && (i = true), za(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[um];
      a && (n += ";" + a), r.cssText = n, i = oy.test(n);
    }
  } else t && e.removeAttribute("style");
  sl in e && (e[sl] = i ? r.display : "", e[lm] && (r.display = "none"));
}
const Td = /\s*!important$/;
function za(e, t, n) {
  if (je(n)) n.forEach((r) => za(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = ay(e, t);
    Td.test(n) ? e.setProperty(co(r), n.replace(Td, ""), "important") : e[r] = n;
  }
}
const kd = ["Webkit", "Moz", "ms"], gs = {};
function ay(e, t) {
  const n = gs[t];
  if (n) return n;
  let r = xn(t);
  if (r !== "filter" && r in e) return gs[t] = r;
  r = Ll(r);
  for (let o = 0; o < kd.length; o++) {
    const i = kd[o] + r;
    if (i in e) return gs[t] = i;
  }
  return t;
}
const Md = "http://www.w3.org/1999/xlink";
function qd(e, t, n, r, o, i = _b(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Md, t.slice(6, t.length)) : e.setAttributeNS(Md, t, n) : n == null || i && !Gv(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Br(n) ? String(n) : n);
}
function Ed(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nm(n) : n);
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
    l === "boolean" ? n = Gv(n) : n == null && l === "string" ? (n = "", a = true) : l === "number" && (n = 0, a = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function ly(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function sy(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ad = Symbol("_vei");
function uy(e, t, n, r, o = null) {
  const i = e[Ad] || (e[Ad] = {}), a = i[t];
  if (r && a) a.value = r;
  else {
    const [l, s] = cy(t);
    if (r) {
      const d = i[t] = vy(r, o);
      ly(e, l, d, s);
    } else a && (sy(e, l, a, s), i[t] = void 0);
  }
}
const Ld = /(?:Once|Passive|Capture)$/;
function cy(e) {
  let t;
  if (Ld.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ld); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : co(e.slice(2)), t];
}
let bs = 0;
const dy = Promise.resolve(), fy = () => bs || (dy.then(() => bs = 0), bs = Date.now());
function vy(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Dn(hy(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = fy(), n;
}
function hy(e, t) {
  if (je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else return t;
}
const Bd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, my = (e, t, n, r, o, i) => {
  const a = o === "svg";
  t === "class" ? ry(e, r, a) : t === "style" ? iy(e, n, r) : El(t) ? ju(t) || uy(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : gy(e, t, r, a)) ? (Ed(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qd(e, t, r, a, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pt(r)) ? Ed(e, xn(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), qd(e, t, r, a));
};
function gy(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Bd(t) && Ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
  }
  return Bd(t) && Pt(n) ? false : t in e;
}
const cm = /* @__PURE__ */ new WeakMap(), dm = /* @__PURE__ */ new WeakMap(), cl = Symbol("_moveCb"), Rd = Symbol("_enterCb"), by = (e) => (delete e.props.mode, e), py = by({ name: "TransitionGroup", props: zt({}, om, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = xe(), r = kh();
  let o, i;
  return Vl(() => {
    if (!o.length) return;
    const a = e.moveClass || `${e.name || "v"}-move`;
    if (!Cy(o[0].el, n.vnode.el, a)) return;
    o.forEach(_y), o.forEach(wy);
    const l = o.filter(xy);
    gu(), l.forEach((s) => {
      const d = s.el, c = d.style;
      Fn(d, a), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = d[cl] = (v) => {
        v && v.target !== d || (!v || /transform$/.test(v.propertyName)) && (d.removeEventListener("transitionend", f), d[cl] = null, yr(d, a));
      };
      d.addEventListener("transitionend", f);
    });
  }), () => {
    const a = Je(e), l = im(a);
    let s = a.tag || rn;
    if (o = [], i) for (let d = 0; d < i.length; d++) {
      const c = i[d];
      c.el && c.el instanceof Element && (o.push(c), Lr(c, Ki(c, l, r, n)), cm.set(c, c.el.getBoundingClientRect()));
    }
    i = t.default ? oc(t.default()) : [];
    for (let d = 0; d < i.length; d++) {
      const c = i[d];
      c.key != null && Lr(c, Ki(c, l, r, n));
    }
    return Ue(s, null, i);
  };
} }), yy = py;
function _y(e) {
  const t = e.el;
  t[cl] && t[cl](), t[Rd] && t[Rd]();
}
function wy(e) {
  dm.set(e, e.el.getBoundingClientRect());
}
function xy(e) {
  const t = cm.get(e), n = dm.get(e), r = t.left - n.left, o = t.top - n.top;
  if (r || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Cy(e, t, n) {
  const r = e.cloneNode(), o = e[No];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((s) => s && r.classList.remove(s));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: a } = am(r);
  return i.removeChild(r), a;
}
const Sy = zt({ patchProp: my }, Zp);
let Pd;
function Ty() {
  return Pd || (Pd = Sp(Sy));
}
const fm = (...e) => {
  const t = Ty().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = My(r);
    if (!o) return;
    const i = t._component;
    !Ge(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, false, ky(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
};
function ky(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function My(e) {
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
function It(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: true }), e;
}
function vm(e, t) {
  for (const n in t) It(e, n, t[n]);
  return e;
}
var un = H(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), pu;
function qy(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function Ey(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var hm = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ay(e) {
  const t = e.toLowerCase(), n = Ey(t), r = qy(t, n), o = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  r.browser && (o[r.browser] = true, o.version = r.version, o.versionNumber = parseInt(r.version, 10)), r.platform && (o[r.platform] = true);
  const i = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  if (i === true || t.indexOf("mobile") !== -1 ? o.mobile = true : o.desktop = true, o["windows phone"] && (o.winphone = true, delete o["windows phone"]), o.edga || o.edgios || o.edg ? (o.edge = true, r.browser = "edge") : o.crios ? (o.chrome = true, r.browser = "chrome") : o.fxios && (o.firefox = true, r.browser = "firefox"), (o.ipod || o.ipad || o.iphone) && (o.ios = true), o.vivaldi && (r.browser = "vivaldi", o.vivaldi = true), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === true && o.ios !== true && i !== true) && (o.webkit = true), o.opr && (r.browser = "opera", o.opera = true), o.safari && (o.blackberry || o.bb ? (r.browser = "blackberry", o.blackberry = true) : o.playbook ? (r.browser = "playbook", o.playbook = true) : o.android ? (r.browser = "android", o.android = true) : o.kindle ? (r.browser = "kindle", o.kindle = true) : o.silk && (r.browser = "silk", o.silk = true)), o.name = r.browser, o.platform = r.platform, t.indexOf("electron") !== -1) o.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) o.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (o.capacitor = true, o.nativeMobile = true, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = true, o.nativeMobile = true, o.nativeMobileWrapper = "cordova"), un.value === true && (pu = { is: { ...o } }), hm === true && o.mac === true && (o.desktop === true && o.safari === true || o.nativeMobile === true && o.android !== true && o.ios !== true && o.ipad !== true)) {
      delete o.mac, delete o.desktop;
      const a = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(o, { mobile: true, ios: true, platform: a, [a]: true });
    }
    o.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete o.desktop, o.mobile = true);
  }
  return o;
}
var Dd = navigator.userAgent || navigator.vendor || window.opera, Ly = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Dd, is: Ay(Dd), has: { touch: hm }, within: { iframe: window.self !== window.top } }, yu = { install(e) {
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
  }), Object.assign(yu, ze), un.value === true && (Object.assign(yu, pu, Ly), pu = null);
}
var mm = yu;
function ge(e) {
  return Bl(/* @__PURE__ */ zn(e));
}
function Vn(e) {
  return Bl(e);
}
var Or = (e, t) => {
  const n = Nn(e);
  for (const r in e) It(t, r, () => n[r], (o) => {
    n[r] = o;
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
function By(e) {
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
function Do(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (r) => {
    r.__dragPrevented = true, r.addEventListener("dragstart", Nt, ht.notPassiveCapture);
  } : (r) => {
    delete r.__dragPrevented, r.removeEventListener("dragstart", Nt, ht.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function Et(e, t, n) {
  const r = `__q_${t}_evt`;
  e[r] = e[r] !== void 0 ? e[r].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], ht[o[3]]);
  });
}
function Zt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((r) => {
    r[0].removeEventListener(r[1], e[r[2]], ht[r[3]]);
  }), e[n] = void 0);
}
function Ko(e, t = 250, n) {
  let r = null;
  function o() {
    const i = arguments, a = () => {
      r = null, e.apply(this, i);
    };
    r !== null && clearTimeout(r), r = setTimeout(a, t);
  }
  return o.cancel = () => {
    r !== null && clearTimeout(r);
  }, o;
}
var ys = ["sm", "md", "lg", "xl"], { passive: Od } = ht, Ry = Or({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: Tt, setDebounce: Tt, install({ $q: e, onSSRHydrated: t }) {
  var _a3;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, r = n || window, o = document.scrollingElement || document.documentElement, i = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, o.clientWidth), Math.max(window.innerHeight, o.clientHeight)] : () => [n.width * n.scale + window.innerWidth - o.clientWidth, n.height * n.scale + window.innerHeight - o.clientHeight], a = ((_a3 = e.config.screen) == null ? void 0 : _a3.bodyClasses) === true;
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
      l !== void 0 && r.removeEventListener("resize", l, Od), l = v > 0 ? Ko(this.__update, v) : this.__update, r.addEventListener("resize", l, Od);
    }, this.setDebounce(d), Object.keys(s).length !== 0 ? (this.setSizes(s), s = void 0) : this.__update(), a === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  un.value === true ? t.push(c) : c();
} }), Gt = Or({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Gt.mode = e, e === "auto" ? (Gt.__media === void 0 && (Gt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Gt.__updateMedia = () => {
    Gt.set("auto");
  }, Gt.__media.addListener(Gt.__updateMedia)), e = Gt.__media.matches) : Gt.__media !== void 0 && (Gt.__media.removeListener(Gt.__updateMedia), Gt.__media = void 0), Gt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Gt.set(Gt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), gm = Gt;
function Py(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var bm = false;
function Dy(e) {
  bm = e.isComposing === true;
}
function vo(e) {
  return bm === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function Cn(e, t) {
  return vo(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function pm(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function Oy({ is: e, has: t, within: n }, r) {
  const o = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const i = pm(e);
    i !== void 0 && o.push("platform-" + i);
  }
  if (e.nativeMobile === true) {
    const i = e.nativeMobileWrapper;
    o.push(i), o.push("native-mobile"), e.ios === true && (r[i] === void 0 || r[i].iosStatusBarPadding !== false) && o.push("q-ios-padding");
  } else e.electron === true ? o.push("electron") : e.bex === true && o.push("bex");
  return n.iframe === true && o.push("within-iframe"), o;
}
function Vy() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const o = pm(e);
      o !== void 0 && n.add(`platform-${o}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const r = Array.from(n).join(" ");
  t !== r && (document.body.className = r);
}
function Fy(e) {
  for (const t in e) Py(t, e[t]);
}
var $y = { install(e) {
  if (this.__installed !== true) {
    if (un.value === true) Vy();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && Fy(t.config.brand);
      const n = Oy(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", Tt), window.addEventListener("keydown", Dy, true);
  }
} }, ym = () => true;
function Iy(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Ny(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function zy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return ym;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(Iy).map(Ny)), () => t.includes(window.location.hash);
}
var Xi = { __history: [], add: Tt, remove: Tt, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const r = e.config[t === true ? "cordova" : "capacitor"];
  if ((r == null ? void 0 : r.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (a) => {
    a.condition === void 0 && (a.condition = ym), this.__history.push(a);
  }, this.remove = (a) => {
    const l = this.__history.indexOf(a);
    l >= 0 && this.__history.splice(l, 1);
  };
  const o = zy(Object.assign({ backButtonExit: true }, r)), i = () => {
    if (this.__history.length) {
      const a = this.__history[this.__history.length - 1];
      a.condition() === true && (this.__history.pop(), a.handler());
    } else o() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", i, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", i);
} }, _u = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Vd() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Yr = Or({ __qLang: {} }, { getLocale: Vd, set(e = _u, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Vd };
  {
    if (n.set = Yr.set, Yr.__langConfig === void 0 || Yr.__langConfig.noHtmlAttrs !== true) {
      const r = document.documentElement;
      r.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), r.setAttribute("lang", n.isoName);
    }
    Object.assign(Yr.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Yr.__qLang, Yr.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((o) => o !== "set" && o !== "getLocale");
  } }), this.set(t || _u));
} }), zl = Yr, Hy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, wu = Or({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = wu.set, Object.assign(wu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, It(e, "iconMapFn", () => this.iconMapFn, (r) => {
    this.iconMapFn = r;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(r) {
    return Reflect.ownKeys(r).filter((o) => o !== "set");
  } }), this.set(t || Hy));
} }), _m = wu, wm = "_q_", xm = "_q_t_", Cm = "_q_s_", ho = "_q_l_", Sm = "_q_pc_", Tm = "_q_f_", km = "_q_fo_", Mm = "_q_tabs_", qm = "_q_u_";
function ut() {
}
var dl = {}, Em = false;
function jy() {
  Em = true;
}
function An(e, t) {
  if (e === t) return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return false;
    let n, r;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (An(e[r], t[r]) !== true) return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return false;
      let i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) return false;
        r = i.next();
      }
      for (i = e.entries(), r = i.next(); r.done !== true; ) {
        if (An(r.value[1], t.get(r.value[0])) !== true) return false;
        r = i.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return false;
      const i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) return false;
        r = i.next();
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
    const o = Object.keys(e).filter((i) => e[i] !== void 0);
    if (n = o.length, n !== Object.keys(t).filter((i) => t[i] !== void 0).length) return false;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
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
function Uy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Ji(e) {
  return typeof e == "number" && isFinite(e);
}
var Fd = [mm, $y, gm, Ry, Xi, zl, _m];
function Hl(e, t) {
  const n = fm(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...o } = t._context;
  return Object.assign(n._context, o), n;
}
function $d(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function Qy(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(wm, n.$q), $d(n, Fd), t.components !== void 0 && Object.values(t.components).forEach((r) => {
    Ot(r) === true && r.name !== void 0 && e.component(r.name, r);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((r) => {
    Ot(r) === true && r.name !== void 0 && e.directive(r.name, r);
  }), t.plugins !== void 0 && $d(n, Object.values(t.plugins).filter((r) => typeof r.install == "function" && Fd.includes(r) === false)), un.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((r) => {
      r();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var Ky = function(e, t = {}) {
  const n = { version: "2.18.1" };
  Em === false ? (t.config !== void 0 && Object.assign(dl, t.config), n.config = { ...dl }, jy()) : n.config = t.config || {}, Qy(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
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
  const r = n - t + 1;
  let o = t + (e - t) % r;
  return o < t && (o = r + o), o === 0 ? 0 : o;
}
function lt(e, t = 2, n = "0") {
  if (e == null) return e;
  const r = "" + e;
  return r.length >= t ? r : new Array(t - r.length + 1).join(n) + r;
}
var dc = XMLHttpRequest, Am = dc.prototype.open, Wy = ["top", "right", "bottom", "left"], vl = [], Vi = 0;
function Yy({ p: e, pos: t, active: n, horiz: r, reverse: o, dir: i }) {
  let a = 1, l = 1;
  return r === true ? (o === true && (a = -1), t === "bottom" && (l = -1), { transform: `translate3d(${a * (e - 100)}%,${n ? 0 : l * -200}%,0)` }) : (o === true && (l = -1), t === "right" && (a = -1), { transform: `translate3d(${n ? 0 : i * a * -200}%,${l * (e - 100)}%,0)` });
}
function Gy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), vt(e + t, 0, 100);
}
function Xy(e) {
  Vi++, vl.push(e), !(Vi > 1) && (dc.prototype.open = function(t, n) {
    const r = [], o = () => {
      vl.forEach((a) => {
        (a.hijackFilter.value === null || a.hijackFilter.value(n) === true) && (a.start(), r.push(a.stop));
      });
    }, i = () => {
      r.forEach((a) => {
        a();
      });
    };
    this.addEventListener("loadstart", o, { once: true }), this.addEventListener("loadend", i, { once: true }), Am.apply(this, arguments);
  });
}
function Jy(e) {
  vl = vl.filter((t) => t.start !== e), Vi = Math.max(0, Vi - 1), Vi === 0 && (dc.prototype.open = Am);
}
var Zy = ge({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => Wy.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = H(0), o = H(false), i = H(true);
  let a = 0, l = null, s;
  const d = m(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (i.value === true ? "" : " no-transition")), c = m(() => e.position === "top" || e.position === "bottom"), f = m(() => c.value === true ? "height" : "width"), v = m(() => {
    const p = o.value, b = Yy({ p: r.value, pos: e.position, active: p, horiz: c.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = p ? 1 : 0, b;
  }), u = m(() => o.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.value } : { "aria-hidden": "true" });
  function g(p = 300) {
    const b = s;
    return s = Math.max(0, p) || 0, a++, a > 1 ? (b === 0 && p > 0 ? x() : l !== null && b > 0 && p <= 0 && (clearTimeout(l), l = null), a) : (l !== null && clearTimeout(l), t("start"), r.value = 0, l = setTimeout(() => {
      l = null, i.value = true, p > 0 && x();
    }, o._value === true ? 500 : 1), o._value !== true && (o.value = true, i.value = false), a);
  }
  function y(p) {
    return a > 0 && (r.value = Gy(r.value, p)), a;
  }
  function w() {
    if (a = Math.max(0, a - 1), a > 0) return a;
    l !== null && (clearTimeout(l), l = null), t("stop");
    const p = () => {
      i.value = true, r.value = 100, l = setTimeout(() => {
        l = null, o.value = false;
      }, 1e3);
    };
    return r.value === 0 ? l = setTimeout(p, 1) : p(), a;
  }
  function x() {
    r.value < 100 && (l = setTimeout(() => {
      l = null, y(), x();
    }, s));
  }
  let _;
  return st(() => {
    e.skipHijack !== true && (_ = true, Xy({ start: g, stop: w, hijackFilter: m(() => e.hijackFilter || null) }));
  }), We(() => {
    l !== null && clearTimeout(l), _ === true && Jy(g);
  }), Object.assign(n, { start: g, stop: w, increment: y }), () => h("div", { class: d.value, style: v.value, ...u.value });
} }), Su = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, sr = { size: String };
function ur(e, t = Su) {
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
function Sn(e, t, n, r, o, i) {
  t.key = r + o;
  const a = h(e, t, n);
  return o === true ? hn(a, i()) : a;
}
var Nd = "0 0 24 24", _s = (e) => e, ws = (e) => `ionicons ${e}`, Lm = { "mdi-": (e) => `mdi ${e}`, "icon-": _s, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": ws, "ion-ios": ws, "ion-logo": ws, "iconfont ": _s, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": _s }, Bm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, Rm = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, e1 = new RegExp("^(" + Object.keys(Lm).join("|") + ")"), t1 = new RegExp("^(" + Object.keys(Bm).join("|") + ")"), zd = new RegExp("^(" + Object.keys(Rm).join("|") + ")"), n1 = /^[Mm]\s?[-+]?\.?\d/, r1 = /^img:/, o1 = /^svguse:/, i1 = /^ion-/, a1 = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, tt = ge({ name: "QIcon", props: { ...sr, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ur(e), o = m(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), i = m(() => {
    let a, l = e.name;
    if (l === "none" || !l) return { none: true };
    if (n.iconMapFn !== null) {
      const c = n.iconMapFn(l);
      if (c !== void 0) if (c.icon !== void 0) {
        if (l = c.icon, l === "none" || !l) return { none: true };
      } else return { cls: c.cls, content: c.content !== void 0 ? c.content : " " };
    }
    if (n1.test(l) === true) {
      const [c, f = Nd] = l.split("|");
      return { svg: true, viewBox: f, nodes: c.split("&&").map((v) => {
        const [u, g, y] = v.split("@@");
        return h("path", { style: g, d: u, transform: y });
      }) };
    }
    if (r1.test(l) === true) return { img: true, src: l.substring(4) };
    if (o1.test(l) === true) {
      const [c, f = Nd] = l.split("|");
      return { svguse: true, src: c.substring(7), viewBox: f };
    }
    let s = " ";
    const d = l.match(e1);
    if (d !== null) a = Lm[d[1]](l);
    else if (a1.test(l) === true) a = l;
    else if (i1.test(l) === true) a = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${l.substring(3)}`;
    else if (zd.test(l) === true) {
      a = "notranslate material-symbols";
      const c = l.match(zd);
      c !== null && (l = l.substring(6), a += Rm[c[1]]), s = l;
    } else {
      a = "notranslate material-icons";
      const c = l.match(t1);
      c !== null && (l = l.substring(2), a += Bm[c[1]]), s = l;
    }
    return { cls: a, content: s };
  });
  return () => {
    const a = { class: o.value, style: r.value, "aria-hidden": "true" };
    return i.value.none === true ? h(e.tag, a, Pe(t.default)) : i.value.img === true ? h(e.tag, a, At(t.default, [h("img", { src: i.value.src })])) : i.value.svg === true ? h(e.tag, a, At(t.default, [h("svg", { viewBox: i.value.viewBox || "0 0 24 24" }, i.value.nodes)])) : i.value.svguse === true ? h(e.tag, a, At(t.default, [h("svg", { viewBox: i.value.viewBox }, [h("use", { "xlink:href": i.value.src })])])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), h(e.tag, a, At(t.default, [i.value.content])));
  };
} }), Tu = ge({ name: "QAvatar", props: { ...sr, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = ur(e), r = m(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), o = m(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const i = e.icon !== void 0 ? [h(tt, { name: e.icon })] : void 0;
    return h("div", { class: r.value, style: n.value }, [h("div", { class: "q-avatar__content row flex-center overflow-hidden", style: o.value }, fc(t.default, i))]);
  };
} }), l1 = ["top", "middle", "bottom"];
ge({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => l1.includes(e) } }, setup(e, { slots: t }) {
  const n = m(() => e.align !== void 0 ? { verticalAlign: e.align } : null), r = m(() => {
    const o = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (o !== void 0 ? ` text-${o}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => h("div", { class: r.value, style: n.value, role: "status", "aria-label": e.label }, At(t.default, e.label !== void 0 ? [e.label] : []));
} });
var rt = { dark: { type: Boolean, default: null } };
function ot(e, t) {
  return m(() => e.dark === null ? t.dark.isActive : e.dark);
}
ge({ name: "QBanner", props: { ...rt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ot(e, n), o = m(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (r.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), i = m(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const a = [h("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), h("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], l = Pe(t.action);
    return l !== void 0 && a.push(h("div", { class: i.value }, l)), h("div", { class: o.value + (e.inlineActions === false && l !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, a);
  };
} });
ge({ name: "QBar", props: { ...rt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ot(e, n), o = m(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${r.value === true ? "dark" : "light"}`);
  return () => h("div", { class: o.value, role: "toolbar" }, Pe(t.default));
} });
var Pm = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, s1 = Object.keys(Pm), vc = { align: { type: String, validator: (e) => s1.includes(e) } };
function hc(e) {
  return m(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${Pm[t]}`;
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
function Dm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    Dm(e, n);
  }) : e.add(t);
}
function mc(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    Dm(t, n);
  }), Array.from(t);
}
function gc(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Er(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var u1 = ["", true];
ge({ name: "QBreadcrumbs", props: { ...vc, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = hc(e), r = m(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), o = m(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), i = m(() => ` text-${e.activeColor}`);
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
        const v = l < d, u = f.props !== null && u1.includes(f.props.disable), g = (v === true ? "" : " q-breadcrumbs--last") + (u !== true && v === true ? i.value : "");
        l++, s.push(h("div", { class: `flex items-center${g}` }, [f])), v === true && s.push(h("div", { class: "q-breadcrumbs__separator" + o.value }, c()));
      } else s.push(f);
    }), h("div", { class: "q-breadcrumbs" }, [h("div", { class: r.value }, s)]);
  };
} });
function Hd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function jd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function c1(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return false;
    } else if (Array.isArray(o) === false || o.length !== r.length || r.some((i, a) => i !== o[a])) return false;
  }
  return true;
}
function Ud(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function d1(e, t) {
  return Array.isArray(e) === true ? Ud(e, t) : Array.isArray(t) === true ? Ud(t, e) : e === t;
}
function f1(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (d1(e[n], t[n]) === false) return false;
  return true;
}
var Om = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, da = { ...Om, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function jl({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = xe(), { props: r, proxy: o, emit: i } = n, a = gc(n), l = m(() => r.disable !== true && r.href !== void 0), s = m(t === true ? () => a === true && r.disable !== true && l.value !== true && r.to !== void 0 && r.to !== null && r.to !== "" : () => a === true && l.value !== true && r.to !== void 0 && r.to !== null && r.to !== ""), d = m(() => s.value === true ? _(r.to) : null), c = m(() => d.value !== null), f = m(() => l.value === true || c.value === true), v = m(() => r.type === "a" || f.value === true ? "a" : r.tag || e || "div"), u = m(() => l.value === true ? { href: r.href, target: r.target } : c.value === true ? { href: d.value.href, target: r.target } : {}), g = m(() => {
    if (c.value === false) return -1;
    const { matched: C } = d.value, { length: q } = C, B = C[q - 1];
    if (B === void 0) return -1;
    const V = o.$route.matched;
    if (V.length === 0) return -1;
    const R = V.findIndex(jd.bind(null, B));
    if (R !== -1) return R;
    const D = Hd(C[q - 2]);
    return q > 1 && Hd(B) === D && V[V.length - 1].path !== D ? V.findIndex(jd.bind(null, C[q - 2])) : R;
  }), y = m(() => c.value === true && g.value !== -1 && c1(o.$route.params, d.value.params)), w = m(() => y.value === true && g.value === o.$route.matched.length - 1 && f1(o.$route.params, d.value.params)), x = m(() => c.value === true ? w.value === true ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === true ? "" : y.value === true ? ` ${r.activeClass}` : "" : "");
  function _(C) {
    try {
      return o.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function p(C, { returnRouterError: q, to: B = r.to, replace: V = r.replace } = {}) {
    if (r.disable === true) return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || r.target === "_blank") return Promise.resolve(false);
    C.preventDefault();
    const R = o.$router[V === true ? "replace" : "push"](B);
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
  const { linkTag: n, linkAttrs: r, linkClass: o, navigateOnClick: i } = jl(), a = m(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + o.value : "q-breadcrumbs__el--disable"), ...r.value, onClick: i })), l = m(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
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
function zo(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function ku(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function v1(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = Re(e);
  if (t) return t.$el || t;
}
function Vm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function Fm(e, t = 250) {
  let n = false, r;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), r = e.apply(this, arguments)), r;
  };
}
function Qd(e, t, n, r) {
  n.modifiers.stop === true && St(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === true || r === true;
  const a = document.createElement("span"), l = document.createElement("span"), s = an(e), { left: d, top: c, width: f, height: v } = t.getBoundingClientRect(), u = Math.sqrt(f * f + v * v), g = u / 2, y = `${(f - u) / 2}px`, w = i ? y : `${s.left - d - g}px`, x = `${(v - u) / 2}px`, _ = i ? x : `${s.top - c - g}px`;
  l.className = "q-ripple__inner", ku(l, { height: `${u}px`, width: `${u}px`, transform: `translate3d(${w},${_},0) scale3d(.2,.2,1)`, opacity: 0 }), a.className = `q-ripple${o ? " text-" + o : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(l), t.appendChild(a);
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
function Kd(e, { modifiers: t, value: n, arg: r }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: o.early === true, stop: o.stop === true, center: o.center === true, color: o.color || r, keyCodes: [].concat(o.keyCodes || 13) };
}
var Ul = Vn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const r = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(o) {
    r.enabled === true && o.qSkipRipple !== true && o.type === (r.modifiers.early === true ? "pointerdown" : "click") && Qd(o, e, r, o.qKeyEvent === true);
  }, keystart: Fm((o) => {
    r.enabled === true && o.qSkipRipple !== true && Cn(o, r.modifiers.keyCodes) === true && o.type === `key${r.modifiers.early === true ? "down" : "up"}` && Qd(o, e, r, true);
  }, 300) };
  Kd(r, t), e.__qripple = r, Et(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
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
} }), ml = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, h1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, m1 = ["button", "submit", "reset"], g1 = /[^\s]\/[^\s]/, $m = ["flat", "outline", "push", "unelevated"];
function bc(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function Im(e) {
  const t = bc(e);
  return t !== void 0 ? { [t]: true } : {};
}
var pc = { ...sr, ...Om, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...$m.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...vc.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, b1 = { ...pc, round: Boolean };
function p1(e) {
  const t = ur(e, h1), n = hc(e), { hasRouterLink: r, hasLink: o, linkTag: i, linkAttrs: a, navigateOnClick: l } = jl({ fallbackTag: "button" }), s = m(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((x) => x in ml ? ml[x] + "px" : x).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), d = m(() => e.rounded === true || e.fab === true || e.fabMini === true), c = m(() => e.disable !== true && e.loading !== true), f = m(() => c.value === true ? e.tabindex || 0 : -1), v = m(() => bc(e, "standard")), u = m(() => {
    const w = { tabindex: f.value };
    return o.value === true ? Object.assign(w, a.value) : m1.includes(e.type) === true && (w.type = e.type), i.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), r.value !== true && g1.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = m(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const x = e.round === true ? "round" : `rectangle${d.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${v.value} q-btn--${x}` + (w !== void 0 ? " " + w : "") + (c.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), y = m(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: s, innerClasses: y, attributes: u, hasLink: o, linkTag: i, navigateOnClick: l, isActionable: c };
}
var { passiveCapture: bn } = ht, po = null, yo = null, _o = null, et = ge({ name: "QBtn", props: { ...b1, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { classes: o, style: i, innerClasses: a, attributes: l, hasLink: s, linkTag: d, navigateOnClick: c, isActionable: f } = p1(e), v = H(null), u = H(null);
  let g = null, y, w = null;
  const x = m(() => e.label !== void 0 && e.label !== null && e.label !== ""), _ = m(() => e.disable === true || e.ripple === false ? false : { keyCodes: s.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), p = m(() => ({ center: e.round })), b = m(() => {
    const T = Math.max(0, Math.min(100, e.percentage));
    return T > 0 ? { transition: "transform 0.6s", transform: `translateX(${T - 100}%)` } : {};
  }), C = m(() => {
    if (e.loading === true) return { onMousedown: A, onTouchstart: A, onClick: A, onKeydown: A, onKeyup: A };
    if (f.value === true) {
      const T = { onClick: B, onKeydown: V, onMousedown: D };
      if (r.$q.platform.has.touch === true) {
        const z = e.onTouchstart !== void 0 ? "" : "Passive";
        T[`onTouchstart${z}`] = R;
      }
      return T;
    }
    return { onClick: Ke };
  }), q = m(() => ({ ref: v, class: "q-btn q-btn-item non-selectable no-outline " + o.value, style: i.value, ...l.value, ...C.value }));
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
    v.value !== null && (n("keydown", T), Cn(T, [13, 32]) === true && yo !== v.value && (yo !== null && M(), T.defaultPrevented !== true && (T.qAvoidFocus !== true && v.value.focus(), yo = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", $, true), v.value.addEventListener("blur", $, bn)), Ke(T)));
  }
  function R(T) {
    v.value !== null && (n("touchstart", T), T.defaultPrevented !== true && (po !== v.value && (po !== null && M(), po = v.value, g = T.target, g.addEventListener("touchcancel", $, bn), g.addEventListener("touchend", $, bn)), y = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, y = false;
    }, 200)));
  }
  function D(T) {
    v.value !== null && (T.qSkipRipple = y === true, n("mousedown", T), T.defaultPrevented !== true && _o !== v.value && (_o !== null && M(), _o = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", $, bn)));
  }
  function $(T) {
    if (v.value !== null && !((T == null ? void 0 : T.type) === "blur" && document.activeElement === v.value)) {
      if ((T == null ? void 0 : T.type) === "keyup") {
        if (yo === v.value && Cn(T, [13, 32]) === true) {
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
    T !== true && (po === v.value || _o === v.value) && z !== null && z !== document.activeElement && (z.setAttribute("tabindex", -1), z.focus()), po === v.value && (g !== null && (g.removeEventListener("touchcancel", $, bn), g.removeEventListener("touchend", $, bn)), po = g = null), _o === v.value && (document.removeEventListener("mouseup", $, bn), _o = null), yo === v.value && (document.removeEventListener("keyup", $, true), (_a3 = v.value) == null ? void 0 : _a3.removeEventListener("blur", $, bn), yo = null), (_b2 = v.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function A(T) {
    Ke(T), T.qSkipRipple = true;
  }
  return We(() => {
    M(true);
  }), Object.assign(r, { click: (T) => {
    f.value === true && B(T);
  } }), () => {
    let T = [];
    e.icon !== void 0 && T.push(h(tt, { name: e.icon, left: e.stack !== true && x.value === true, role: "img" })), x.value === true && T.push(h("span", { class: "block" }, [e.label])), T = At(t.default, T), e.iconRight !== void 0 && e.round === false && T.push(h(tt, { name: e.iconRight, right: e.stack !== true && x.value === true, role: "img" }));
    const z = [h("span", { class: "q-focus-helper", ref: u })];
    return e.loading === true && e.percentage !== void 0 && z.push(h("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [h("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), z.push(h("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + a.value }, T)), e.loading !== null && z.push(h($t, { name: "q-transition--fade" }, () => e.loading === true ? [h("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [h(Tn)])] : null)), hn(h(d.value, q.value, z), [[Ul, _.value, void 0, p.value]]);
  };
} }), Nm = ge({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = m(() => {
    const r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((o) => e[o] === true).map((o) => `q-btn-group--${o}`).join(" ");
    return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => h("div", { class: n.value }, Pe(t.default));
} });
function Pn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), mm.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var zm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, Hm = { ...zm, contextMenu: Boolean };
function yc({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: r, proxy: o, emit: i } = xe(), a = H(null);
  let l = null;
  function s(u) {
    return a.value === null ? false : u === void 0 || u.touches === void 0 || u.touches.length <= 1;
  }
  const d = {};
  n === void 0 && (Object.assign(d, { hide(u) {
    o.hide(u);
  }, toggle(u) {
    o.toggle(u), u.qAnchorHandled = true;
  }, toggleKey(u) {
    Cn(u, 13) === true && d.toggle(u);
  }, contextClick(u) {
    o.hide(u), Nt(u), Qe(() => {
      o.show(u), u.qAnchorHandled = true;
    });
  }, prevent: Nt, mobileTouch(u) {
    if (d.mobileCleanup(u), s(u) !== true) return;
    o.hide(u), a.value.classList.add("non-selectable");
    const g = u.target;
    Et(d, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [a.value, "contextmenu", "prevent", "notPassive"]]), l = setTimeout(() => {
      l = null, o.show(u), u.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(u) {
    a.value.classList.remove("non-selectable"), l !== null && (clearTimeout(l), l = null), e.value === true && u !== void 0 && Pn();
  } }), n = function(u = r.contextMenu) {
    if (r.noParentEvent === true || a.value === null) return;
    let g;
    u === true ? o.$q.platform.is.mobile === true ? g = [[a.value, "touchstart", "mobileTouch", "passive"]] : g = [[a.value, "mousedown", "hide", "passive"], [a.value, "contextmenu", "contextClick", "notPassive"]] : g = [[a.value, "click", "toggle", "passive"], [a.value, "keyup", "toggleKey", "passive"]], Et(d, "anchor", g);
  });
  function c() {
    Zt(d, "anchor");
  }
  function f(u) {
    for (a.value = u; a.value.classList.contains("q-anchor--skip"); ) a.value = a.value.parentNode;
    n();
  }
  function v() {
    if (r.target === false || r.target === "" || o.$el.parentNode === null) a.value = null;
    else if (r.target === true) f(o.$el.parentNode);
    else {
      let u = r.target;
      if (typeof r.target == "string") try {
        u = document.querySelector(r.target);
      } catch {
        u = void 0;
      }
      u != null ? (a.value = u.$el || u, n()) : (a.value = null, console.error(`Anchor: target "${r.target}" not found`));
    }
  }
  return me(() => r.contextMenu, (u) => {
    a.value !== null && (c(), n(u));
  }), me(() => r.target, () => {
    a.value !== null && c(), v();
  }), me(() => r.noParentEvent, (u) => {
    a.value !== null && (u === true ? c() : n());
  }), st(() => {
    v(), t !== true && r.modelValue === true && a.value === null && i("update:modelValue", false);
  }), We(() => {
    l !== null && clearTimeout(l), c();
  }), { anchorEl: a, canShow: s, anchorEvents: d };
}
function jm(e, t) {
  const n = H(null);
  let r;
  function o(l, s) {
    const d = `${s !== void 0 ? "add" : "remove"}EventListener`, c = s !== void 0 ? s : r;
    l !== window && l[d]("scroll", c, ht.passive), window[d]("scroll", c, ht.passive), r = s;
  }
  function i() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const a = me(() => e.noParentEvent, () => {
    n.value !== null && (i(), t());
  });
  return We(a), { localScrollTarget: n, unconfigureScrollTarget: i, changeScrollEvent: o };
}
var Wo = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Yo = ["beforeShow", "show", "beforeHide", "hide"];
function Go({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: r, handleHide: o, processOnMount: i }) {
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
    e.value !== true && (e.value = true, s("beforeShow", _), r !== void 0 ? r(_) : s("show", _));
  }
  function g(_) {
    if (l.disable === true) return;
    const p = l["onUpdate:modelValue"] !== void 0;
    p === true && (s("update:modelValue", false), c = _, Qe(() => {
      c === _ && (c = void 0);
    })), (l.modelValue === null || p === false) && y(_);
  }
  function y(_) {
    e.value !== false && (e.value = false, s("beforeHide", _), o !== void 0 ? o(_) : s("hide", _));
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
var Jr = [], Zi = [];
function Um(e) {
  Zi = Zi.filter((t) => t !== e);
}
function y1(e) {
  Um(e), Zi.push(e);
}
function Wd(e) {
  Um(e), Zi.length === 0 && Jr.length !== 0 && (Jr[Jr.length - 1](), Jr = []);
}
function Xo(e) {
  Zi.length === 0 ? e() : Jr.push(e);
}
function _1(e) {
  Jr = Jr.filter((t) => t !== e);
}
var Oo = [], Fi = [], w1 = 1, _r = document.body;
function fa(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${w1++}` : e, dl.globalNodes !== void 0) {
    const r = dl.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return _r.appendChild(n), Oo.push(n), Fi.push(t), n;
}
function _c(e) {
  const t = Oo.indexOf(e);
  Oo.splice(t, 1), Fi.splice(t, 1), e.remove();
}
function x1(e) {
  if (e === _r) return;
  if (_r = e, _r === document.body || Fi.reduce((n, r) => r === "dialog" ? n + 1 : n, 0) < 2) {
    Oo.forEach((n) => {
      n.contains(_r) === false && _r.appendChild(n);
    });
    return;
  }
  const t = Fi.lastIndexOf("dialog");
  for (let n = 0; n < Oo.length; n++) {
    const r = Oo[n];
    (n === t || Fi[n] !== "dialog") && r.contains(_r) === false && _r.appendChild(r);
  }
}
var Vo = [];
function C1(e) {
  return Vo.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Qm(e, t) {
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
function S1(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = Qm(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Ha(e);
  }
}
var T1 = ge({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function k1(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function wc(e, t, n, r) {
  const o = H(false), i = H(false);
  let a = null;
  const l = {}, s = r === "dialog" && k1(e);
  function d(f) {
    if (f === true) {
      Wd(l), i.value = true;
      return;
    }
    i.value = false, o.value === false && (s === false && a === null && (a = fa(false, r)), o.value = true, Vo.push(e.proxy), y1(l));
  }
  function c(f) {
    if (i.value = false, f !== true) return;
    Wd(l), o.value = false;
    const v = Vo.indexOf(e.proxy);
    v !== -1 && Vo.splice(v, 1), a !== null && (_c(a), a = null);
  }
  return sa(() => {
    c(true);
  }), e.proxy.__qPortal = true, It(e.proxy, "contentEl", () => t.value), { showPortal: d, hidePortal: c, portalIsActive: o, portalIsAccessible: i, renderPortal: () => s === true ? n() : o.value === true ? [h(Xb, { to: a }, h(T1, n))] : void 0 };
}
var to = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function Ql(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: m(() => {
    const r = `q-transition--${e.transitionShow || t()}`, o = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${r}-enter-from`, enterActiveClass: `${r}-enter-active`, enterToClass: `${r}-enter-to`, leaveFromClass: `${o}-leave-from`, leaveActiveClass: `${o}-leave-active`, leaveToClass: `${o}-leave-to` };
  }), transitionStyle: m(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function Fo() {
  let e;
  const t = xe();
  function n() {
    e = void 0;
  }
  return Hn(n), We(n), { removeTick: n, registerTick(r) {
    e = r, Qe(() => {
      e === r && (Er(t) === false && e(), e = void 0);
    });
  } };
}
function ar() {
  let e = null;
  const t = xe();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Hn(n), We(n), { removeTimeout: n, registerTimeout(r, o) {
    n(), Er(t) === false && (e = setTimeout(() => {
      e = null, r();
    }, o));
  } };
}
var mo = [Element, String], M1 = [null, document, document.body, document.scrollingElement, document.documentElement];
function jn(e, t) {
  let n = v1(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return M1.includes(n) ? window : n;
}
function xa(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function Ar(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Kl(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function Km(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], o = Ar(e);
  if (n <= 0) {
    o !== t && Mu(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const a = i - r, l = o + (t - o) / Math.max(a, n) * a;
    Mu(e, l), l !== t && Km(e, t, n - a, i);
  });
}
function Wm(e, t, n = 0) {
  const r = arguments[3] === void 0 ? performance.now() : arguments[3], o = Kl(e);
  if (n <= 0) {
    o !== t && qu(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    const a = i - r, l = o + (t - o) / Math.max(a, n) * a;
    qu(e, l), l !== t && Wm(e, t, n - a, i);
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
function $o(e, t, n) {
  if (n) {
    Km(e, t, n);
    return;
  }
  Mu(e, t);
}
function xs(e, t, n) {
  if (n) {
    Wm(e, t, n);
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
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), Ca = n - r, Ca;
}
function q1(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var no = [], Ho;
function E1(e) {
  Ho = e.keyCode === 27;
}
function A1() {
  Ho === true && (Ho = false);
}
function L1(e) {
  Ho === true && (Ho = false, Cn(e, 27) === true && no[no.length - 1](e));
}
function Ym(e) {
  window[e]("keydown", E1), window[e]("blur", A1), window[e]("keyup", L1), Ho = false;
}
function Gm(e) {
  ze.is.desktop === true && (no.push(e), no.length === 1 && Ym("addEventListener"));
}
function gl(e) {
  const t = no.indexOf(e);
  t !== -1 && (no.splice(t, 1), no.length === 0 && Ym("removeEventListener"));
}
var ro = [];
function Xm(e) {
  ro[ro.length - 1](e);
}
function Jm(e) {
  ze.is.desktop === true && (ro.push(e), ro.length === 1 && document.body.addEventListener("focusin", Xm));
}
function Eu(e) {
  const t = ro.indexOf(e);
  t !== -1 && (ro.splice(t, 1), ro.length === 0 && document.body.removeEventListener("focusin", Xm));
}
var { notPassiveCapture: bl } = ht, oo = [];
function pl(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = Vo.length - 1;
  for (; n >= 0; ) {
    const r = Vo[n].$;
    if (r.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (r.type.name !== "QDialog") break;
    if (r.props.seamless !== true) return;
    n--;
  }
  for (let r = oo.length - 1; r >= 0; r--) {
    const o = oo[r];
    if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === false) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === false)) e.qClickOutside = true, o.onClickOutside(e);
    else return;
  }
}
function Zm(e) {
  oo.push(e), oo.length === 1 && (document.addEventListener("mousedown", pl, bl), document.addEventListener("touchstart", pl, bl));
}
function yl(e) {
  const t = oo.findIndex((n) => n === e);
  t !== -1 && (oo.splice(t, 1), oo.length === 0 && (document.removeEventListener("mousedown", pl, bl), document.removeEventListener("touchstart", pl, bl)));
}
var Yd, Gd;
function _l(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function eg(e) {
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
function B1(e, t) {
  let { top: n, left: r, right: o, bottom: i, width: a, height: l } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], r -= t[0], i += t[1], o += t[0], a += t[0], l += t[1]), { top: n, bottom: i, height: l, left: r, right: o, width: a, middle: r + (o - r) / 2, center: n + (i - n) / 2 };
}
function R1(e, t, n) {
  let { top: r, left: o } = e.getBoundingClientRect();
  return r += t.top, o += t.left, n !== void 0 && (r += n[1], o += n[0]), { top: r, bottom: r + 1, height: 1, left: o, right: o + 1, width: 1, middle: o, center: r };
}
function P1(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Xd(e, t, n, r) {
  return { top: e[n.vertical] - t[r.vertical], left: e[n.horizontal] - t[r.horizontal] };
}
function xc(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      xc(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: r, anchorEl: o, anchorOrigin: i, selfOrigin: a, absoluteOffset: l, fit: s, cover: d, maxHeight: c, maxWidth: f } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const q = document.body.style, { offsetLeft: B, offsetTop: V } = window.visualViewport;
    B !== Yd && (q.setProperty("--q-pe-left", B + "px"), Yd = B), V !== Gd && (q.setProperty("--q-pe-top", V + "px"), Gd = V);
  }
  const { scrollLeft: v, scrollTop: u } = n, g = l === void 0 ? B1(o, d === true ? [0, 0] : r) : R1(o, l, r);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: c, visibility: "visible" });
  const { offsetWidth: y, offsetHeight: w } = n, { elWidth: x, elHeight: _ } = s === true || d === true ? { elWidth: Math.max(g.width, y), elHeight: d === true ? Math.max(g.height, w) : w } : { elWidth: y, elHeight: w };
  let p = { maxWidth: f, maxHeight: c };
  (s === true || d === true) && (p.minWidth = g.width + "px", d === true && (p.minHeight = g.height + "px")), Object.assign(n.style, p);
  const b = P1(x, _);
  let C = Xd(g, b, i, a);
  if (l === void 0 || r === void 0) Cs(C, g, b, i, a);
  else {
    const { top: q, left: B } = C;
    Cs(C, g, b, i, a);
    let V = false;
    if (C.top !== q) {
      V = true;
      const R = 2 * r[1];
      g.center = g.top -= R, g.bottom -= R + 2;
    }
    if (C.left !== B) {
      V = true;
      const R = 2 * r[0];
      g.middle = g.left -= R, g.right -= R + 2;
    }
    V === true && (C = Xd(g, b, i, a), Cs(C, g, b, i, a));
  }
  p = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (p.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (p.minHeight = p.maxHeight)), C.maxWidth !== void 0 && (p.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== u && (n.scrollTop = u), n.scrollLeft !== v && (n.scrollLeft = v);
}
function Cs(e, t, n, r, o) {
  const i = n.bottom, a = n.right, l = ja(), s = window.innerHeight - l, d = document.body.clientWidth;
  if (e.top < 0 || e.top + i > s) if (o.vertical === "center") e.top = t[r.vertical] > s / 2 ? Math.max(0, s - i) : 0, e.maxHeight = Math.min(i, s);
  else if (t[r.vertical] > s / 2) {
    const c = Math.min(s, r.vertical === "center" ? t.center : r.vertical === o.vertical ? t.bottom : t.top);
    e.maxHeight = Math.min(i, c), e.top = Math.max(0, c - i);
  } else e.top = Math.max(0, r.vertical === "center" ? t.center : r.vertical === o.vertical ? t.top : t.bottom), e.maxHeight = Math.min(i, s - e.top);
  if (e.left < 0 || e.left + a > d) if (e.maxWidth = Math.min(a, d), o.horizontal === "middle") e.left = t[r.horizontal] > d / 2 ? Math.max(0, d - a) : 0;
  else if (t[r.horizontal] > d / 2) {
    const c = Math.min(d, r.horizontal === "middle" ? t.middle : r.horizontal === o.horizontal ? t.right : t.left);
    e.maxWidth = Math.min(a, c), e.left = Math.max(0, c - e.maxWidth);
  } else e.left = Math.max(0, r.horizontal === "middle" ? t.middle : r.horizontal === o.horizontal ? t.left : t.right), e.maxWidth = Math.min(a, d - e.left);
}
var Wl = ge({ name: "QMenu", inheritAttrs: false, props: { ...Hm, ...Wo, ...rt, ...to, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: _l }, self: { type: String, validator: _l }, offset: { type: Array, validator: eg }, scrollTarget: mo, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Yo, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  let o = null, i, a, l;
  const s = xe(), { proxy: d } = s, { $q: c } = d, f = H(null), v = H(false), u = m(() => e.persistent !== true && e.noRouteDismiss !== true), g = ot(e, c), { registerTick: y, removeTick: w } = Fo(), { registerTimeout: x } = ar(), { transitionProps: _, transitionStyle: p } = Ql(e), { localScrollTarget: b, changeScrollEvent: C, unconfigureScrollTarget: q } = jm(e, ne), { anchorEl: B, canShow: V } = yc({ showing: v }), { hide: R } = Go({ showing: v, canShow: V, handleShow: ye, handleHide: Y, hideOnRouteChange: u, processOnMount: true }), { showPortal: D, hidePortal: $, renderPortal: M } = wc(s, f, te, "menu"), A = { anchorEl: B, innerRef: f, onClickOutside(k) {
    if (e.persistent !== true && v.value === true) return R(k), (k.type === "touchstart" || k.target.classList.contains("q-dialog__backdrop")) && Ke(k), true;
  } }, T = m(() => wl(e.anchor || (e.cover === true ? "center middle" : "bottom start"), c.lang.rtl)), z = m(() => e.cover === true ? T.value : wl(e.self || "top start", c.lang.rtl)), U = m(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), j = m(() => e.autoClose === true ? { onClick: G } : {}), K = m(() => v.value === true && e.persistent !== true);
  me(K, (k) => {
    k === true ? (Gm(O), Zm(A)) : (gl(O), yl(A));
  });
  function ie() {
    Xo(() => {
      let k = f.value;
      k && k.contains(document.activeElement) !== true && (k = k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || k.querySelector("[autofocus], [data-autofocus]") || k, k.focus({ preventScroll: true }));
    });
  }
  function ye(k) {
    if (o = e.noRefocus === false ? document.activeElement : null, Jm(be), D(), ne(), i = void 0, k !== void 0 && (e.touchPosition || e.contextMenu)) {
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
    w(), $(), L(true), o !== null && (k === void 0 || k.qClickOutside !== true) && ((((k == null ? void 0 : k.type.indexOf("key")) === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), x(() => {
      $(true), n("hide", k);
    }, e.transitionDuration);
  }
  function L(k) {
    i = void 0, a !== void 0 && (a(), a = void 0), (k === true || v.value === true) && (Eu(be), q(), yl(A), gl(O)), k !== true && (o = null);
  }
  function ne() {
    (B.value !== null || e.scrollTarget !== void 0) && (b.value = jn(B.value, e.scrollTarget), C(b.value, P));
  }
  function G(k) {
    l !== true ? (Qm(d, k), n("click", k)) : l = false;
  }
  function be(k) {
    K.value === true && e.noFocus !== true && Vm(f.value, k.target) !== true && ie();
  }
  function O(k) {
    e.noEscDismiss !== true && (n("escapeKey"), R(k));
  }
  function P() {
    xc({ targetEl: f.value, offset: e.offset, anchorEl: B.value, anchorOrigin: T.value, selfOrigin: z.value, absoluteOffset: i, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function te() {
    return h($t, _.value, () => v.value === true ? h("div", { role: "menu", ...r, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + U.value, r.class], style: [r.style, p.value], ...j.value }, Pe(t.default)) : null);
  }
  return We(L), Object.assign(d, { focus: ie, updatePosition: P }), M;
} }), Ss, Sa = 0, Qt = new Array(256);
for (let e = 0; e < 256; e++) Qt[e] = (e + 256).toString(16).substring(1);
var D1 = (() => {
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
})(), Jd = 4096;
function ea() {
  (Ss === void 0 || Sa + 16 > Jd) && (Sa = 0, Ss = D1(Jd));
  const e = Array.prototype.slice.call(Ss, Sa, Sa += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Qt[e[0]] + Qt[e[1]] + Qt[e[2]] + Qt[e[3]] + "-" + Qt[e[4]] + Qt[e[5]] + "-" + Qt[e[6]] + Qt[e[7]] + "-" + Qt[e[8]] + Qt[e[9]] + "-" + Qt[e[10]] + Qt[e[11]] + Qt[e[12]] + Qt[e[13]] + Qt[e[14]] + Qt[e[15]];
}
function O1(e) {
  return e ?? null;
}
function Zd(e, t) {
  return e ?? (t === true ? `f_${ea()}` : null);
}
function Yl({ getValue: e, required: t = true } = {}) {
  if (un.value === true) {
    const n = H(e !== void 0 ? O1(e()) : null);
    return t === true && n.value === null && st(() => {
      n.value = `f_${ea()}`;
    }), e !== void 0 && me(e, (r) => {
      n.value = Zd(r, t);
    }), n;
  }
  return e !== void 0 ? m(() => Zd(e(), t)) : H(`f_${ea()}`);
}
var V1 = Object.keys(pc);
function F1(e) {
  return V1.reduce((t, n) => {
    const r = e[n];
    return r !== void 0 && (t[n] = r), t;
  }, {});
}
var $1 = ge({ name: "QBtnDropdown", props: { ...pc, ...to, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), o = H(e.modelValue), i = H(null), a = Yl(), l = m(() => {
    const b = { "aria-expanded": o.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, "aria-label": e.toggleAriaLabel || r.$q.lang.label[o.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), s = m(() => "q-btn-dropdown__arrow" + (o.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), d = m(() => Im(e)), c = m(() => F1(e));
  me(() => e.modelValue, (b) => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3[b ? "show" : "hide"]();
  }), me(() => e.split, p);
  function f(b) {
    o.value = true, n("beforeShow", b);
  }
  function v(b) {
    n("show", b), n("update:modelValue", true);
  }
  function u(b) {
    o.value = false, n("beforeHide", b);
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
  return Object.assign(r, { show: _, hide: p, toggle: x }), st(() => {
    e.modelValue === true && _();
  }), () => {
    const b = [h(tt, { class: s.value, name: e.dropdownIcon || r.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(h(Wl, { ref: i, id: a.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: v, onBeforeHide: u, onHide: g }, t.default)), e.split === false ? h(et, { class: "q-btn-dropdown q-btn-dropdown--simple", ...c.value, ...l.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: y }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : h(Nm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...d.value, glossy: e.glossy, stretch: e.stretch }, () => [h(et, { class: "q-btn-dropdown--current", ...c.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), h(et, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...l.value, ...d.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), kn = { name: String };
function va(e) {
  return m(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Vr(e = {}) {
  return (t, n, r) => {
    t[n](h("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function Cc(e) {
  return m(() => e.name || e.for);
}
ge({ name: "QBtnToggle", props: { ...kn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const r = m(() => e.options.find((v) => v.value === e.modelValue) !== void 0), o = m(() => ({ type: "hidden", name: e.name, value: e.modelValue })), i = Vr(o), a = m(() => Im(e)), l = m(() => ({ rounded: e.rounded, dense: e.dense, ...a.value })), s = m(() => e.options.map((v, u) => {
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
    return e.name !== void 0 && e.disable !== true && r.value === true && i(v, "push"), At(t.default, v);
  }
  return () => h(Nm, { class: "q-btn-toggle", ...a.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var tg = ge({ name: "QCard", props: { ...rt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ot(e, n), o = m(() => "q-card" + (r.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => h(e.tag, { class: o.value }, Pe(t.default));
} }), Xr = ge({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = m(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => h(e.tag, { class: n.value }, Pe(t.default));
} }), I1 = ge({ name: "QCardActions", props: { ...vc, vertical: Boolean }, setup(e, { slots: t }) {
  const n = hc(e), r = m(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => h("div", { class: r.value }, Pe(t.default));
} }), Sc = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, N1 = Object.keys(Sc);
Sc.all = true;
function xl(e) {
  const t = {};
  for (const n of N1) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Sc : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var z1 = ["INPUT", "TEXTAREA"];
function Cl(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && z1.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function H1(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, r) => {
    const o = parseFloat(n);
    o && (t[r] = o);
  }), t;
}
var j1 = Vn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: r }) {
  if (r.mouse !== true && ze.has.touch !== true) return;
  const o = r.mouseCapture === true ? "Capture" : "", i = { handler: t, sensitivity: H1(n), direction: xl(r), noop: Tt, mouseStart(a) {
    Cl(a, i) && Nl(a) && (Et(i, "temp", [[document, "mousemove", "move", `notPassive${o}`], [document, "mouseup", "end", "notPassiveCapture"]]), i.start(a, true));
  }, touchStart(a) {
    if (Cl(a, i)) {
      const l = a.target;
      Et(i, "temp", [[l, "touchmove", "move", "notPassiveCapture"], [l, "touchcancel", "end", "notPassiveCapture"], [l, "touchend", "end", "notPassiveCapture"]]), i.start(a);
    }
  }, start(a, l) {
    ze.is.firefox === true && Do(e, true);
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
    i.event !== void 0 && (Zt(i, "temp"), ze.is.firefox === true && Do(e, false), (_a3 = i.styleCleanup) == null ? void 0 : _a3.call(i, true), a !== void 0 && i.event.dir !== false && Ke(a), i.event = void 0);
  } };
  if (e.__qtouchswipe = i, r.mouse === true) {
    const a = r.mouseCapture === true || r.mousecapture === true ? "Capture" : "";
    Et(i, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  ze.has.touch === true && Et(i, "main", [[e, "touchstart", "touchStart", `passive${r.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = xl(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchswipe;
  t !== void 0 && (Zt(t, "main"), Zt(t, "temp"), ze.is.firefox === true && Do(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchswipe);
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
  const { props: e, emit: t, proxy: n } = xe(), { getCache: r } = ha(), { registerTimeout: o } = ar();
  let i, a;
  const l = H(null), s = { value: null };
  function d(T) {
    const z = e.vertical === true ? "up" : "left";
    V((n.$q.lang.rtl === true ? -1 : 1) * (T.direction === z ? 1 : -1));
  }
  const c = m(() => [[j1, d, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = m(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), v = m(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), u = m(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = m(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), y = m(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = m(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  me(() => e.modelValue, (T, z) => {
    const U = b(T) === true ? C(T) : -1;
    a !== true && B(U === -1 ? 0 : U < C(z) ? -1 : 1), s.value !== U && (s.value = U, t("beforeTransition", T, z), o(() => {
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
    return e.keepAlive === true ? [h(Bh, y.value, [h(w.value === true ? r(g.value, () => ({ ...ef, name: g.value })) : ef, { key: g.value, style: u.value }, () => T)])] : [h("div", { class: "q-panel scroll", style: u.value, key: g.value, role: "tabpanel" }, [T])];
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
  const e = xe(), { props: t, emit: n, proxy: r } = e;
  let o, i, a;
  const l = H(false);
  gc(e) === true && me(() => r.$route.fullPath, () => {
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
    l.value !== true && (l.value = true, a = r.$el.parentNode, a.replaceChild(i, r.$el), document.body.appendChild(r.$el), ti++, ti === 1 && document.body.classList.add("q-body--fullscreen-mixin"), o = { handler: c }, Xi.add(o));
  }
  function c() {
    l.value === true && (o !== void 0 && (Xi.remove(o), o = void 0), a.replaceChild(r.$el, i), l.value = false, ti = Math.max(0, ti - 1), ti === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), r.$el.scrollIntoView !== void 0 && setTimeout(() => {
      r.$el.scrollIntoView();
    })));
  }
  return Ol(() => {
    i = document.createElement("span");
  }), st(() => {
    t.fullscreen === true && d();
  }), We(c), Object.assign(r, { toggleFullscreen: s, setFullscreen: d, exitFullscreen: c }), { inFullscreen: l, toggleFullscreen: s };
}
var U1 = ["top", "right", "bottom", "left"], Q1 = ["regular", "flat", "outline", "push", "unelevated"];
ge({ name: "QCarousel", props: { ...rt, ...kc, ...Ec, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Q1.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => U1.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ac, ...Mc], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ot(e, n);
  let o = null, i;
  const { updatePanelsList: a, getPanelContent: l, panelDirectives: s, goToPanel: d, previousPanel: c, nextPanel: f, getEnabledPanels: v, panelIndex: u } = qc(), { inFullscreen: g } = Lc(), y = m(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = m(() => e.vertical === true ? "vertical" : "horizontal"), x = m(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), _ = m(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (r.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${x.value}` : "")), p = m(() => {
    const D = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? D.reverse() : D;
  }), b = m(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), C = m(() => e.navigationActiveIcon || b.value), q = m(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  me(() => e.modelValue, () => {
    e.autoplay && B();
  }), me(() => e.autoplay, (D) => {
    D ? B() : o !== null && (clearTimeout(o), o = null);
  });
  function B() {
    const D = Ji(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    o !== null && clearTimeout(o), o = setTimeout(() => {
      o = null, D >= 0 ? f() : c();
    }, D);
  }
  st(() => {
    e.autoplay && B();
  }), We(() => {
    o !== null && clearTimeout(o);
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
  const n = m(() => `q-carousel__control absolute absolute-${e.position}`), r = m(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => h("div", { class: n.value, style: r.value }, Pe(t.default));
} });
ge({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = m(() => e.sent === true ? "sent" : "received"), r = m(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), o = m(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), i = m(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), a = m(() => e.size !== void 0 ? `col-${e.size}` : ""), l = m(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function s(c) {
    return t.stamp !== void 0 ? [c, h("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [c, h("div", { class: "q-message-stamp", [l.value.stamp]: e.stamp })] : [c];
  }
  function d(c, f) {
    const v = f === true ? c.length > 1 ? (u) => u : (u) => h("div", [u]) : (u) => h("div", { [l.value.msg]: u });
    return c.map((u, g) => h("div", { key: g, class: o.value }, [h("div", { class: r.value }, s(v(u)))]));
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
function ng(e, t) {
  const n = H(null), r = m(() => e.disable === true ? null : h("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function o(i) {
    const a = t.value;
    (i == null ? void 0 : i.qAvoidFocus) !== true && ((i == null ? void 0 : i.type.indexOf("key")) === 0 ? document.activeElement !== a && (a == null ? void 0 : a.contains(document.activeElement)) === true && a.focus() : n.value !== null && (i === void 0 || (a == null ? void 0 : a.contains(i.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: r, refocusTarget: o };
}
var rg = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, og = { ...rt, ...sr, ...kn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, ig = ["update:modelValue"];
function ag(e, t) {
  const { props: n, slots: r, emit: o, proxy: i } = xe(), { $q: a } = i, l = ot(n, a), s = H(null), { refocusTargetEl: d, refocusTarget: c } = ng(n, s), f = ur(n, rg), v = m(() => n.val !== void 0 && Array.isArray(n.modelValue)), u = m(() => {
    const M = Je(n.val);
    return v.value === true ? n.modelValue.findIndex((A) => Je(A) === M) : -1;
  }), g = m(() => v.value === true ? u.value !== -1 : Je(n.modelValue) === Je(n.trueValue)), y = m(() => v.value === true ? u.value === -1 : Je(n.modelValue) === Je(n.falseValue)), w = m(() => g.value === false && y.value === false), x = m(() => n.disable === true ? -1 : n.tabindex || 0), _ = m(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (l.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), p = m(() => {
    const M = g.value === true ? "truthy" : y.value === true ? "falsy" : "indet", A = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : y.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${M}${A}`;
  }), b = m(() => {
    const M = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(M, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: v.value === true ? n.val : n.trueValue }), M;
  }), C = Vr(b), q = m(() => {
    const M = { tabindex: x.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (M["aria-disabled"] = "true"), M;
  });
  function B(M) {
    M !== void 0 && (Ke(M), c(M)), n.disable !== true && o("update:modelValue", V(), M);
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
    const T = n.label !== void 0 ? At(r.default, [n.label]) : Pe(r.default);
    return T !== void 0 && A.push(h("div", { class: `q-${e}__label q-anchor--skip` }, T)), h("div", { ref: s, class: _.value, ...q.value, onClick: B, onKeydown: R, onKeyup: D }, A);
  };
}
var K1 = () => h("div", { key: "svg", class: "q-checkbox__bg absolute" }, [h("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [h("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), h("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), $i = ge({ name: "QCheckbox", props: og, emits: ig, setup(e) {
  const t = K1();
  function n(r, o) {
    const i = m(() => (r.value === true ? e.checkedIcon : o.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => i.value !== null ? [h("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [h(tt, { class: "q-checkbox__icon", name: i.value })])] : [t];
  }
  return ag("checkbox", n);
} }), W1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, lg = ge({ name: "QChip", props: { ...rt, ...sr, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = ot(e, r), i = ur(e, W1), a = m(() => e.selected === true || e.icon !== void 0), l = m(() => e.selected === true ? e.iconSelected || r.iconSet.chip.selected : e.icon), s = m(() => e.iconRemove || r.iconSet.chip.remove), d = m(() => e.disable === false && (e.clickable === true || e.selected !== null)), c = m(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (d.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (o.value === true ? " q-chip--dark q-dark" : "");
  }), f = m(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, x = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || r.lang.label.remove };
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
} }), Bc = { ...sr, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Lu = 50, sg = 2 * Lu, ug = sg * Math.PI, Y1 = Math.round(ug * 1e3) / 1e3, cg = ge({ name: "QCircularProgress", props: { ...Bc, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = ur(e), o = m(() => {
    const u = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - u}deg)` : `rotate3d(0, 0, 1, ${u - 90}deg)` };
  }), i = m(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), a = m(() => sg / (1 - e.thickness / 2)), l = m(() => `${a.value / 2} ${a.value / 2} ${a.value} ${a.value}`), s = m(() => vt(e.value, e.min, e.max)), d = m(() => e.max - e.min), c = m(() => e.thickness / 2 * a.value), f = m(() => {
    const u = (e.max - s.value) / d.value, g = e.rounded === true && s.value < e.max && u < 0.25 ? c.value / 2 * (1 - u / 0.25) : 0;
    return ug * u + g;
  });
  function v({ thickness: u, offset: g, color: y, cls: w, rounded: x }) {
    return h("circle", { class: "q-circular-progress__" + w + (y !== void 0 ? ` text-${y}` : ""), style: i.value, fill: "transparent", stroke: "currentColor", "stroke-width": u, "stroke-dasharray": Y1, "stroke-dashoffset": g, "stroke-linecap": x, cx: a.value, cy: a.value, r: Lu });
  }
  return () => {
    const u = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && u.push(h("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Lu - c.value / 2, cx: a.value, cy: a.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && u.push(v({ cls: "track", thickness: c.value, offset: 0, color: e.trackColor })), u.push(v({ cls: "circle", thickness: c.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [h("svg", { class: "q-circular-progress__svg", style: o.value, viewBox: l.value, "aria-hidden": "true" }, u)];
    return e.showValue === true && g.push(h("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [h("div", s.value)])), h("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: r.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : s.value }, fc(t.internal, g));
  };
} });
function Ts(e, t, n) {
  const r = an(e);
  let o, i = r.left - t.event.x, a = r.top - t.event.y, l = Math.abs(i), s = Math.abs(a);
  const d = t.direction;
  d.horizontal === true && d.vertical !== true ? o = i < 0 ? "left" : "right" : d.horizontal !== true && d.vertical === true ? o = a < 0 ? "up" : "down" : d.up === true && a < 0 ? (o = "up", l > s && (d.left === true && i < 0 ? o = "left" : d.right === true && i > 0 && (o = "right"))) : d.down === true && a > 0 ? (o = "down", l > s && (d.left === true && i < 0 ? o = "left" : d.right === true && i > 0 && (o = "right"))) : d.left === true && i < 0 ? (o = "left", l < s && (d.up === true && a < 0 ? o = "up" : d.down === true && a > 0 && (o = "down"))) : d.right === true && i > 0 && (o = "right", l < s && (d.up === true && a < 0 ? o = "up" : d.down === true && a > 0 && (o = "down")));
  let c = false;
  if (o === void 0 && n === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0) return {};
    o = t.event.lastDir, c = true, o === "left" || o === "right" ? (r.left -= i, l = 0, i = 0) : (r.top -= a, s = 0, a = 0);
  }
  return { synthetic: c, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: r, direction: o, isFirst: t.event.isFirst, isFinal: n === true, duration: Date.now() - t.event.time, distance: { x: l, y: s }, offset: { x: i, y: a }, delta: { x: r.left - t.event.lastX, y: r.top - t.event.lastY } } };
}
var G1 = 0, wn = Vn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function r(i, a) {
    n.mouse === true && a === true ? Ke(i) : (n.stop === true && St(i), n.prevent === true && Nt(i));
  }
  const o = { uid: "qvtp_" + G1++, handler: t, modifiers: n, direction: xl(n), noop: Tt, mouseStart(i) {
    Cl(i, o) && Nl(i) && (Et(o, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), o.start(i, true));
  }, touchStart(i) {
    if (Cl(i, o)) {
      const a = i.target;
      Et(o, "temp", [[a, "touchmove", "move", "notPassiveCapture"], [a, "touchcancel", "end", "passiveCapture"], [a, "touchend", "end", "passiveCapture"]]), o.start(i);
    }
  }, start(i, a) {
    if (ze.is.firefox === true && Do(e, true), o.lastEvt = i, a === true || n.stop === true) {
      if (o.direction.all !== true && (a !== true || o.modifiers.mouseAllDir !== true && o.modifiers.mousealldir !== true)) {
        const d = i.type.indexOf("mouse") !== -1 ? new MouseEvent(i.type, i) : new TouchEvent(i.type, i);
        i.defaultPrevented === true && Nt(d), i.cancelBubble === true && St(d), Object.assign(d, { qKeyEvent: i.qKeyEvent, qClickOutside: i.qClickOutside, qAnchorHandled: i.qAnchorHandled, qClonedBy: i.qClonedBy === void 0 ? [o.uid] : i.qClonedBy.concat(o.uid) }), o.initialEvent = { target: i.target, event: d };
      }
      St(i);
    }
    const { left: l, top: s } = an(i);
    o.event = { x: l, y: s, time: Date.now(), mouse: a === true, detected: false, isFirst: true, isFinal: false, lastX: l, lastY: s };
  }, move(i) {
    if (o.event === void 0) return;
    const a = an(i), l = a.left - o.event.x, s = a.top - o.event.y;
    if (l === 0 && s === 0) return;
    o.lastEvt = i;
    const d = o.event.mouse === true, c = () => {
      r(i, d);
      let u;
      n.preserveCursor !== true && n.preservecursor !== true && (u = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), d === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Pn(), o.styleCleanup = (g) => {
        if (o.styleCleanup = void 0, u !== void 0 && (document.documentElement.style.cursor = u), document.body.classList.remove("non-selectable"), d === true) {
          const y = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          g !== void 0 ? setTimeout(() => {
            y(), g();
          }, 50) : y();
        } else g !== void 0 && g();
      };
    };
    if (o.event.detected === true) {
      o.event.isFirst !== true && r(i, o.event.mouse);
      const { payload: u, synthetic: g } = Ts(i, o, false);
      u !== void 0 && (o.handler(u) === false ? o.end(i) : (o.styleCleanup === void 0 && o.event.isFirst === true && c(), o.event.lastX = u.position.left, o.event.lastY = u.position.top, o.event.lastDir = g === true ? void 0 : u.direction, o.event.isFirst = false));
      return;
    }
    if (o.direction.all === true || d === true && (o.modifiers.mouseAllDir === true || o.modifiers.mousealldir === true)) {
      c(), o.event.detected = true, o.move(i);
      return;
    }
    const f = Math.abs(l), v = Math.abs(s);
    f !== v && (o.direction.horizontal === true && f > v || o.direction.vertical === true && f < v || o.direction.up === true && f < v && s < 0 || o.direction.down === true && f < v && s > 0 || o.direction.left === true && f > v && l < 0 || o.direction.right === true && f > v && l > 0 ? (o.event.detected = true, o.move(i)) : o.end(i, true));
  }, end(i, a) {
    var _a3;
    if (o.event !== void 0) {
      if (Zt(o, "temp"), ze.is.firefox === true && Do(e, false), a === true) (_a3 = o.styleCleanup) == null ? void 0 : _a3.call(o), o.event.detected !== true && o.initialEvent !== void 0 && o.initialEvent.target.dispatchEvent(o.initialEvent.event);
      else if (o.event.detected === true) {
        o.event.isFirst === true && o.handler(Ts(i === void 0 ? o.lastEvt : i, o).payload);
        const { payload: l } = Ts(i === void 0 ? o.lastEvt : i, o, true), s = () => {
          o.handler(l);
        };
        o.styleCleanup !== void 0 ? o.styleCleanup(s) : s();
      }
      o.event = void 0, o.initialEvent = void 0, o.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = o, n.mouse === true) {
    const i = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(o, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  ze.has.touch === true && Et(o, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = xl(t.modifiers));
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Zt(t, "main"), Zt(t, "temp"), ze.is.firefox === true && Do(e, false), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchpan);
} }), tf = "q-slider__marker-labels", X1 = (e) => ({ value: e }), J1 = ({ marker: e }) => h("div", { key: e.value, style: e.style, class: e.classes }, e.label), Rc = [34, 37, 40, 33, 39, 38], dg = { ...rt, ...kn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, fg = ["pan", "update:modelValue", "change"];
function vg({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: r }) {
  const { props: o, emit: i, slots: a, proxy: { $q: l } } = xe(), s = ot(o, l), d = Vr(r), c = H(false), f = H(false), v = H(false), u = H(false), g = m(() => o.vertical === true ? "--v" : "--h"), y = m(() => "-" + (o.switchLabelSide === true ? "switched" : "standard")), w = m(() => o.vertical === true ? o.reverse === true : o.reverse !== (l.lang.rtl === true)), x = m(() => isNaN(o.innerMin) === true || o.innerMin < o.min ? o.min : o.innerMin), _ = m(() => isNaN(o.innerMax) === true || o.innerMax > o.max ? o.max : o.innerMax), p = m(() => o.disable !== true && o.readonly !== true && x.value < _.value), b = m(() => {
    if (o.step === 0) return (_e2) => _e2;
    const ae = (String(o.step).trim().split(".")[1] || "").length;
    return (_e2) => parseFloat(_e2.toFixed(ae));
  }), C = m(() => o.step === 0 ? 1 : o.step), q = m(() => p.value === true ? o.tabindex || 0 : -1), B = m(() => o.max - o.min), V = m(() => _.value - x.value), R = m(() => ee(x.value)), D = m(() => ee(_.value)), $ = m(() => o.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), M = m(() => o.vertical === true ? "height" : "width"), A = m(() => o.vertical === true ? "width" : "height"), T = m(() => o.vertical === true ? "vertical" : "horizontal"), z = m(() => {
    const ae = { role: "slider", "aria-valuemin": x.value, "aria-valuemax": _.value, "aria-orientation": T.value, "data-step": o.step };
    return o.disable === true ? ae["aria-disabled"] = "true" : o.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), U = m(() => `q-slider q-slider${g.value} q-slider--${c.value === true ? "" : "in"}active inline no-wrap ` + (o.vertical === true ? "row" : "column") + (o.disable === true ? " disabled" : " q-slider--enabled" + (p.value === true ? " q-slider--editable" : "")) + (v.value === "both" ? " q-slider--focus" : "") + (o.label || o.labelAlways === true ? " q-slider--label" : "") + (o.labelAlways === true ? " q-slider--label-always" : "") + (s.value === true ? " q-slider--dark" : "") + (o.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function j(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value} ${_e2}${g.value}${y.value}`;
  }
  function K(ae) {
    const _e2 = "q-slider__" + ae;
    return `${_e2} ${_e2}${g.value}`;
  }
  const ie = m(() => {
    const ae = o.selectionColor || o.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), ye = m(() => K("markers") + " absolute overflow-hidden"), Y = m(() => K("track-container")), L = m(() => j("pin")), ne = m(() => j("label")), G = m(() => j("text-container")), be = m(() => j("marker-labels-container") + (o.markerLabelsClass !== void 0 ? ` ${o.markerLabelsClass}` : "")), O = m(() => "q-slider__track relative-position no-outline" + (o.trackColor !== void 0 ? ` bg-${o.trackColor}` : "")), P = m(() => {
    const ae = { [A.value]: o.trackSize };
    return o.trackImg !== void 0 && (ae.backgroundImage = `url(${o.trackImg}) !important`), ae;
  }), te = m(() => "q-slider__inner absolute" + (o.innerTrackColor !== void 0 ? ` bg-${o.innerTrackColor}` : "")), k = m(() => {
    const ae = D.value - R.value, _e2 = { [$.value]: `${100 * R.value}%`, [M.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return o.innerTrackImg !== void 0 && (_e2.backgroundImage = `url(${o.innerTrackImg}) !important`), _e2;
  });
  function F(ae) {
    const { min: _e2, max: ke, step: Fe } = o;
    let Ae = _e2 + ae * (ke - _e2);
    if (Fe > 0) {
      const Xe = (Ae - x.value) % Fe;
      Ae += (Math.abs(Xe) >= Fe / 2 ? (Xe < 0 ? -1 : 1) * Fe : 0) - Xe;
    }
    return Ae = b.value(Ae), vt(Ae, x.value, _.value);
  }
  function ee(ae) {
    return B.value === 0 ? 0 : (ae - o.min) / B.value;
  }
  function S(ae, _e2) {
    const ke = an(ae), Fe = o.vertical === true ? vt((ke.top - _e2.top) / _e2.height, 0, 1) : vt((ke.left - _e2.left) / _e2.width, 0, 1);
    return vt(w.value === true ? 1 - Fe : Fe, R.value, D.value);
  }
  const E = m(() => Ji(o.markers) === true ? o.markers : C.value), I = m(() => {
    const ae = [], _e2 = E.value, ke = o.max;
    let Fe = o.min;
    do
      ae.push(Fe), Fe += _e2;
    while (Fe < ke);
    return ae.push(ke), ae;
  }), Z = m(() => {
    const ae = ` ${tf}${g.value}-`;
    return tf + `${ae}${o.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), re = m(() => o.markerLabels === false ? null : ve(o.markerLabels).map((ae, _e2) => ({ index: _e2, value: ae.value, label: ae.label || ae.value, classes: Z.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...ue(ae.value), ...ae.style || {} } }))), W = m(() => ({ markerList: re.value, markerMap: ce.value, classes: Z.value, getStyle: ue })), fe = m(() => {
    const ae = V.value === 0 ? "2px" : 100 * E.value / V.value;
    return { ...k.value, backgroundSize: o.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function ve(ae) {
    if (ae === false) return null;
    if (ae === true) return I.value.map(X1);
    if (typeof ae == "function") return I.value.map((ke) => {
      const Fe = ae(ke);
      return Ot(Fe) === true ? { ...Fe, value: ke } : { value: ke, label: Fe };
    });
    const _e2 = ({ value: ke }) => ke >= o.min && ke <= o.max;
    return Array.isArray(ae) === true ? ae.map((ke) => Ot(ke) === true ? ke : { value: ke }).filter(_e2) : Object.keys(ae).map((ke) => {
      const Fe = ae[ke], Ae = Number(ke);
      return Ot(Fe) === true ? { ...Fe, value: Ae } : { value: Ae, label: Fe };
    }).filter(_e2);
  }
  function ue(ae) {
    return { [$.value]: `${100 * (ae - o.min) / B.value}%` };
  }
  const ce = m(() => {
    if (o.markerLabels === false) return null;
    const ae = {};
    return re.value.forEach((_e2) => {
      ae[_e2.value] = _e2;
    }), ae;
  });
  function oe() {
    if (a["marker-label-group"] !== void 0) return a["marker-label-group"](W.value);
    const ae = a["marker-label"] || J1;
    return re.value.map((_e2) => ae({ marker: _e2, ...W.value }));
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
    if (o.vertical === true) return null;
    const _e2 = l.lang.rtl !== o.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * _e2 - 1} * ${o.thumbSize} / 2 + ${50 - 100 * _e2}%))` };
  }
  function se(ae) {
    const _e2 = m(() => f.value === false && (v.value === ae.focusValue || v.value === "both") ? " q-slider--focus" : ""), ke = m(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + _e2.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Fe = m(() => ({ width: o.thumbSize, height: o.thumbSize, [$.value]: `${100 * ae.ratio.value}%`, zIndex: v.value === ae.focusValue ? 2 : void 0 })), Ae = m(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), Xe = m(() => Ne(ae.ratio.value)), ct = m(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const Mt = [h("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [h("path", { d: o.thumbPath })]), h("div", { class: "q-slider__focus-ring fit" })];
      return (o.label === true || o.labelAlways === true) && (Mt.push(h("div", { class: L.value + " absolute fit no-pointer-events" + Ae.value }, [h("div", { class: ne.value, style: { minWidth: o.thumbSize } }, [h("div", { class: G.value, style: Xe.value }, [h("span", { class: ct.value }, ae.label.value)])])])), o.name !== void 0 && o.disable !== true && d(Mt, "push")), h("div", { class: ke.value, style: Fe.value, ...ae.getNodeData() }, Mt);
    };
  }
  function pe(ae, _e2, ke, Fe) {
    const Ae = [];
    o.innerTrackColor !== "transparent" && Ae.push(h("div", { key: "inner", class: te.value, style: k.value })), o.selectionColor !== "transparent" && Ae.push(h("div", { key: "selection", class: ie.value, style: ae.value })), o.markers !== false && Ae.push(h("div", { key: "marker", class: ye.value, style: fe.value })), Fe(Ae);
    const Xe = [Sn("div", { key: "trackC", class: Y.value, tabindex: _e2.value, ...ke.value }, [h("div", { class: O.value, style: P.value }, Ae)], "slide", p.value, () => Q.value)];
    if (o.markerLabels !== false) {
      const ct = o.switchMarkerLabelsSide === true ? "unshift" : "push";
      Xe[ct](h("div", { key: "markerL", class: be.value }, oe()));
    }
    return Xe;
  }
  return We(() => {
    document.removeEventListener("mouseup", Te, true);
  }), { state: { active: c, focus: v, preventFocus: f, dragging: u, editable: p, classes: U, tabindex: q, attributes: z, roundValueFn: b, keyStep: C, trackLen: B, innerMin: x, innerMinRatio: R, innerMax: _, innerMaxRatio: D, positionProp: $, sizeProp: M, isReversed: w }, methods: { onActivate: Ce, onMobileClick: Me, onBlur: we, onKeyup: Ie, getContent: pe, getThumbRenderFn: se, convertRatioToModel: F, convertModelToRatio: ee, getDraggingRatio: S } };
}
var Z1 = () => ({}), er = ge({ name: "QSlider", props: { ...dg, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: fg, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: o } = vg({ updateValue: g, updatePosition: w, getDragging: y, formAttrs: va(e) }), i = H(null), a = H(0), l = H(0);
  function s() {
    l.value = e.modelValue === null ? r.innerMin.value : vt(e.modelValue, r.innerMin.value, r.innerMax.value);
  }
  me(() => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, s), s();
  const d = m(() => o.convertModelToRatio(l.value)), c = m(() => r.active.value === true ? a.value : d.value), f = m(() => {
    const p = { [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`, [r.sizeProp.value]: `${100 * (c.value - r.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (p.backgroundImage = `url(${e.selectionImg}) !important`), p;
  }), v = o.getThumbRenderFn({ focusValue: true, getNodeData: Z1, ratio: c, label: m(() => e.labelValue !== void 0 ? e.labelValue : l.value), thumbColor: m(() => e.thumbColor || e.color), labelColor: m(() => e.labelColor), labelTextColor: m(() => e.labelTextColor) }), u = m(() => r.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: o.onMobileClick } : { onMousedown: o.onActivate, onFocus: x, onBlur: o.onBlur, onKeydown: _, onKeyup: o.onKeyup });
  function g(p) {
    l.value !== e.modelValue && t("update:modelValue", l.value), p === true && t("change", l.value);
  }
  function y() {
    return i.value.getBoundingClientRect();
  }
  function w(p, b = r.dragging.value) {
    const C = o.getDraggingRatio(p, b);
    l.value = o.convertRatioToModel(C), a.value = e.snap !== true || e.step === 0 ? C : o.convertModelToRatio(l.value);
  }
  function x() {
    r.focus.value = true;
  }
  function _(p) {
    if (Rc.includes(p.keyCode) === false) return;
    Ke(p);
    const b = ([34, 33].includes(p.keyCode) ? 10 : 1) * r.keyStep.value, C = ([34, 37, 40].includes(p.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    l.value = vt(r.roundValueFn.value(l.value + C), r.innerMin.value, r.innerMax.value), g();
  }
  return () => {
    const p = o.getContent(f, r.tabindex, u, (b) => {
      b.push(v());
    });
    return h("div", { ref: i, class: r.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue }, p);
  };
} });
function hg() {
  const e = H(!un.value);
  return e.value === false && st(() => {
    e.value = true;
  }), { isHydrated: e };
}
var mg = typeof ResizeObserver < "u", nf = mg === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, lo = ge({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let n = null, r, o = { width: -1, height: -1 };
  function i(s) {
    s === true || e.debounce === 0 || e.debounce === "0" ? a() : n === null && (n = setTimeout(a, e.debounce));
  }
  function a() {
    if (n !== null && (clearTimeout(n), n = null), r) {
      const { offsetWidth: s, offsetHeight: d } = r;
      (s !== o.width || d !== o.height) && (o = { width: s, height: d }, t("resize", o));
    }
  }
  const { proxy: l } = xe();
  if (l.trigger = i, mg === true) {
    let s;
    const d = (c) => {
      r = l.$el.parentNode, r ? (s = new ResizeObserver(i), s.observe(r), a()) : c !== true && Qe(() => {
        d(true);
      });
    };
    return st(() => {
      d();
    }), We(() => {
      n !== null && clearTimeout(n), s !== void 0 && (s.disconnect !== void 0 ? s.disconnect() : r && s.unobserve(r));
    }), Tt;
  } else {
    let s = function() {
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", i, ht.passive), f = void 0);
    }, d = function() {
      s(), (r == null ? void 0 : r.contentDocument) && (f = r.contentDocument.defaultView, f.addEventListener("resize", i, ht.passive), a());
    };
    const { isHydrated: c } = hg();
    let f;
    return st(() => {
      Qe(() => {
        r = l.$el, r && d();
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
function e_(e, t, n) {
  const r = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
var t_ = ["left", "center", "right", "justify"], rf = ge({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => t_.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, { registerTick: i } = Fo(), { registerTick: a } = Fo(), { registerTick: l } = Fo(), { registerTimeout: s, removeTimeout: d } = ar(), { registerTimeout: c, removeTimeout: f } = ar(), v = H(null), u = H(null), g = H(e.modelValue), y = H(false), w = H(true), x = H(false), _ = H(false), p = [], b = H(0), C = H(false);
  let q = null, B = null, V;
  const R = m(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: e_(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), D = m(() => {
    const oe = b.value, Q = g.value;
    for (let le = 0; le < oe; le++) if (p[le].name.value === Q) return true;
    return false;
  }), $ = m(() => `q-tabs__content--align-${y.value === true ? "left" : _.value === true ? "justify" : e.align}`), M = m(() => `q-tabs row no-wrap items-center q-tabs--${y.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), A = m(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + $.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), T = m(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), z = m(() => e.vertical !== true && o.lang.rtl === true), U = m(() => ta === false && z.value === true);
  me(z, L), me(() => e.modelValue, (oe) => {
    j({ name: oe, setCurrent: true, skipEmit: true });
  }), me(() => e.outsideArrows, K);
  function j({ name: oe, setCurrent: Q, skipEmit: le }) {
    g.value !== oe && (le !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", oe), (Q === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, oe), g.value = oe));
  }
  function K() {
    i(() => {
      v.value && ie({ width: v.value.offsetWidth, height: v.value.offsetHeight });
    });
  }
  function ie(oe) {
    if (T.value === void 0 || u.value === null) return;
    const Q = oe[T.value.container], le = Math.min(u.value[T.value.scroll], Array.prototype.reduce.call(u.value.children, (Ce, Te) => Ce + (Te[T.value.content] || 0), 0)), we = Q > 0 && le > Q;
    y.value = we, we === true && a(L), _.value = Q < parseInt(e.breakpoint, 10);
  }
  function ye(oe, Q) {
    const le = oe != null && oe !== "" ? p.find((Ce) => Ce.name.value === oe) : null, we = Q != null && Q !== "" ? p.find((Ce) => Ce.name.value === Q) : null;
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
  function Y(oe) {
    const { left: Q, width: le, top: we, height: Ce } = u.value.getBoundingClientRect(), Te = oe.getBoundingClientRect();
    let Me = e.vertical === true ? Te.top - we : Te.left - Q;
    if (Me < 0) {
      u.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), L();
      return;
    }
    Me += e.vertical === true ? Te.height - Ce : Te.width - le, Me > 0 && (u.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), L());
  }
  function L() {
    const oe = u.value;
    if (oe === null) return;
    const Q = oe.getBoundingClientRect(), le = e.vertical === true ? oe.scrollTop : Math.abs(oe.scrollLeft);
    z.value === true ? (w.value = Math.ceil(le + Q.width) < oe.scrollWidth - 1, x.value = le > 0) : (w.value = le > 0, x.value = e.vertical === true ? Math.ceil(le + Q.height) < oe.scrollHeight : Math.ceil(le + Q.width) < oe.scrollWidth);
  }
  function ne(oe) {
    B !== null && clearInterval(B), B = setInterval(() => {
      k(oe) === true && O();
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
  function P(oe, Q) {
    const le = Array.prototype.filter.call(u.value.children, (Ie) => Ie === Q || Ie.matches && Ie.matches(".q-tab.q-focusable") === true), we = le.length;
    if (we === 0) return;
    if (oe === 36) return Y(le[0]), le[0].focus(), true;
    if (oe === 35) return Y(le[we - 1]), le[we - 1].focus(), true;
    const Ce = oe === (e.vertical === true ? 38 : 37), Te = oe === (e.vertical === true ? 40 : 39), Me = Ce === true ? -1 : Te === true ? 1 : void 0;
    if (Me !== void 0) {
      const Ie = z.value === true ? -1 : 1, Ne = le.indexOf(Q) + Me * Ie;
      return Ne >= 0 && Ne < we && (Y(le[Ne]), le[Ne].focus({ preventScroll: true })), true;
    }
  }
  const te = m(() => U.value === true ? { get: (oe) => Math.abs(oe.scrollLeft), set: (oe, Q) => {
    oe.scrollLeft = -Q;
  } } : e.vertical === true ? { get: (oe) => oe.scrollTop, set: (oe, Q) => {
    oe.scrollTop = Q;
  } } : { get: (oe) => oe.scrollLeft, set: (oe, Q) => {
    oe.scrollLeft = Q;
  } });
  function k(oe) {
    const Q = u.value, { get: le, set: we } = te.value;
    let Ce = false, Te = le(Q);
    const Me = oe < Te ? -1 : 1;
    return Te += Me * 5, Te < 0 ? (Ce = true, Te = 0) : (Me === -1 && Te <= oe || Me === 1 && Te >= oe) && (Ce = true, Te = oe), we(Q, Te), L(), Ce;
  }
  function F(oe, Q) {
    for (const le in oe) if (oe[le] !== Q[le]) return false;
    return true;
  }
  function ee() {
    let oe = null, Q = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const le = p.filter((Me) => {
      var _a3;
      return ((_a3 = Me.routeData) == null ? void 0 : _a3.hasRouterLink.value) === true;
    }), { hash: we, query: Ce } = r.$route, Te = Object.keys(Ce).length;
    for (const Me of le) {
      const Ie = Me.routeData.exact.value === true;
      if (Me.routeData[Ie === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ne, query: se, matched: pe, href: ae } = Me.routeData.resolvedLink.value, _e2 = Object.keys(se).length;
      if (Ie === true) {
        if (Ne !== we || _e2 !== Te || F(Ce, se) === false) continue;
        oe = Me.name.value;
        break;
      }
      if (Ne !== "" && Ne !== we || _e2 !== 0 && F(se, Ce) === false) continue;
      const ke = { matchedLen: pe.length, queryDiff: Te - _e2, hrefLen: ae.length - Ne.length };
      if (ke.matchedLen > Q.matchedLen) {
        oe = Me.name.value, Q = ke;
        continue;
      } else if (ke.matchedLen !== Q.matchedLen) continue;
      if (ke.queryDiff < Q.queryDiff) oe = Me.name.value, Q = ke;
      else if (ke.queryDiff !== Q.queryDiff) continue;
      ke.hrefLen > Q.hrefLen && (oe = Me.name.value, Q = ke);
    }
    if (oe === null && p.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    j({ name: oe, setCurrent: true });
  }
  function S(oe) {
    if (d(), C.value !== true && v.value !== null && oe.target && typeof oe.target.closest == "function") {
      const Q = oe.target.closest(".q-tab");
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
      const oe = me(() => r.$route.fullPath, I);
      V = () => {
        oe(), V = void 0;
      };
    }
  }
  function re(oe) {
    p.push(oe), b.value++, K(), oe.routeData === void 0 || r.$route === void 0 ? c(() => {
      if (y.value === true) {
        const Q = g.value, le = Q != null && Q !== "" ? p.find((we) => we.name.value === Q) : null;
        le && Y(le.rootRef.value);
      }
    }) : (Z(), oe.routeData.hasRouterLink.value === true && I());
  }
  function W(oe) {
    p.splice(p.indexOf(oe), 1), b.value--, K(), V !== void 0 && oe.routeData !== void 0 && (p.every((Q) => Q.routeData === void 0) === true && V(), I());
  }
  const fe = { currentModel: g, tabProps: R, hasFocus: C, hasActiveTab: D, registerTab: re, unregisterTab: W, verifyRouteModel: I, updateModel: j, onKbdNavigate: P, avoidRouteWatcher: false };
  _n(Mm, fe);
  function ve() {
    q !== null && clearTimeout(q), O(), V == null ? void 0 : V();
  }
  let ue, ce;
  return We(ve), Hn(() => {
    ue = V !== void 0, ve();
  }), Dr(() => {
    ue === true && (Z(), ce = true, I()), K();
  }), () => h("div", { ref: v, class: M.value, role: "tablist", onFocusin: S, onFocusout: E }, [h(lo, { onResize: ie }), h("div", { ref: u, class: A.value, onScroll: L }, Pe(t.default)), h(tt, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || o.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: G, onTouchstartPassive: G, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O }), h(tt, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (x.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || o.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: be, onTouchstartPassive: be, onMouseupPassive: O, onMouseleavePassive: O, onTouchendPassive: O })]);
} }), n_ = 0, gg = ["click", "keydown"], bg = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${n_++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function pg(e, t, n, r) {
  const o = Lt(Mm, ut);
  if (o === ut) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ut;
  const { proxy: i } = xe(), a = H(null), l = H(null), s = H(null), d = m(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), c = m(() => o.currentModel.value === e.name), f = m(() => "q-tab relative-position self-stretch flex flex-center text-center" + (c.value === true ? " q-tab--active" + (o.tabProps.value.activeClass ? " " + o.tabProps.value.activeClass : "") + (o.tabProps.value.activeColor ? ` text-${o.tabProps.value.activeColor}` : "") + (o.tabProps.value.activeBgColor ? ` bg-${o.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && o.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || o.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (r !== void 0 ? r.linkClass.value : "")), v = m(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (o.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), u = m(() => e.disable === true || o.hasFocus.value === true || c.value === false && o.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(p, b) {
    var _a3;
    if (b !== true && (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a3 = a.value) == null ? void 0 : _a3.focus()), e.disable === true) {
      (r == null ? void 0 : r.hasRouterLink.value) === true && Ke(p);
      return;
    }
    if (r === void 0) {
      o.updateModel({ name: e.name }), n("click", p);
      return;
    }
    if (r.hasRouterLink.value === true) {
      const C = (q = {}) => {
        let B;
        const V = q.to === void 0 || An(q.to, e.to) === true ? o.avoidRouteWatcher = ea() : null;
        return r.navigateToRouterLink(p, { ...q, returnRouterError: true }).catch((R) => {
          B = R;
        }).then((R) => {
          var _a4;
          if (V === o.avoidRouteWatcher && (o.avoidRouteWatcher = false, B === void 0 && (R === void 0 || ((_a4 = R.message) == null ? void 0 : _a4.startsWith("Avoided redundant navigation")) === true) && o.updateModel({ name: e.name })), q.returnRouterError === true) return B !== void 0 ? Promise.reject(B) : R;
        });
      };
      n("click", p, C), p.defaultPrevented !== true && C();
      return;
    }
    n("click", p);
  }
  function y(p) {
    Cn(p, [13, 32]) ? g(p, true) : vo(p) !== true && p.keyCode >= 35 && p.keyCode <= 40 && p.altKey !== true && p.metaKey !== true && o.onKbdNavigate(p.keyCode, i.$el) === true && Ke(p), n("keydown", p);
  }
  function w() {
    const p = o.tabProps.value.narrowIndicator, b = [], C = h("div", { ref: s, class: ["q-tab__indicator", o.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(h(tt, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(h("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? h(tt, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : h("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), p === true && b.push(C);
    const q = [h("div", { class: "q-focus-helper", tabindex: -1, ref: a }), h("div", { class: v.value }, At(t.default, b))];
    return p === false && q.push(C), q;
  }
  const x = { name: m(() => e.name), rootRef: l, tabIndicatorRef: s, routeData: r };
  We(() => {
    o.unregisterTab(x);
  }), st(() => {
    o.registerTab(x);
  });
  function _(p, b) {
    const C = { ref: l, class: f.value, tabindex: u.value, role: "tab", "aria-selected": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: y, ...b };
    return hn(h(p, C, w()), [[Ul, d.value]]);
  }
  return { renderTab: _, $tabs: o };
}
var ni = ge({ name: "QTab", props: bg, emits: gg, setup(e, { slots: t, emit: n }) {
  const { renderTab: r } = pg(e, t, n);
  return () => r("div");
} }), r_ = ge({ name: "QTabPanels", props: { ...kc, ...rt }, emits: Mc, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), { updatePanelsList: o, getPanelContent: i, panelDirectives: a } = qc(), l = m(() => "q-tab-panels q-panel-parent" + (r.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (o(t), Sn("div", { class: l.value }, i(), "pan", e.swipeable, () => a.value));
} }), ks = ge({ name: "QTabPanel", props: Tc, setup(e, { slots: t }) {
  return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), of = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, af = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, lf = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ta = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, ka = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, Ua = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => of.test(e), hexaColor: (e) => af.test(e), hexOrHexaColor: (e) => lf.test(e), rgbColor: (e) => Ta.test(e), rgbaColor: (e) => ka.test(e), rgbOrRgbaColor: (e) => Ta.test(e) || ka.test(e), hexOrRgbColor: (e) => of.test(e) || Ta.test(e), hexaOrRgbaColor: (e) => af.test(e) || ka.test(e), anyColor: (e) => lf.test(e) || Ta.test(e) || ka.test(e) }, o_ = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function sf({ r: e, g: t, b: n, a: r }) {
  const o = r !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || o && r > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return r = o ? (Math.round(255 * r / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
}
function uf({ r: e, g: t, b: n, a: r }) {
  return `rgb${r !== void 0 ? "a" : ""}(${e},${t},${n}${r !== void 0 ? "," + r / 100 : ""})`;
}
function yg(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function cf({ h: e, s: t, v: n, a: r }) {
  let o, i, a;
  t = t / 100, n = n / 100, e = e / 360;
  const l = Math.floor(e * 6), s = e * 6 - l, d = n * (1 - t), c = n * (1 - s * t), f = n * (1 - (1 - s) * t);
  switch (l % 6) {
    case 0:
      o = n, i = f, a = d;
      break;
    case 1:
      o = c, i = n, a = d;
      break;
    case 2:
      o = d, i = n, a = f;
      break;
    case 3:
      o = d, i = c, a = n;
      break;
    case 4:
      o = f, i = d, a = n;
      break;
    case 5:
      o = n, i = d, a = c;
      break;
  }
  return { r: Math.round(o * 255), g: Math.round(i * 255), b: Math.round(a * 255), a: r };
}
function Ms({ r: e, g: t, b: n, a: r }) {
  const o = Math.max(e, t, n), i = Math.min(e, t, n), a = o - i, l = o === 0 ? 0 : a / o, s = o / 255;
  let d;
  switch (o) {
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
  return { h: Math.round(d * 360), s: Math.round(l * 100), v: Math.round(s * 100), a: r };
}
function _g(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = o_.exec(t);
  if (n === null) return yg(t);
  const r = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const o = parseFloat(n[5]);
    r.a = Math.min(1, isNaN(o) === true ? 1 : o) * 100;
  }
  return r;
}
function i_(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? _g(e) : e, n = t.r / 255, r = t.g / 255, o = t.b / 255, i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), a = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), l = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
  return 0.2126 * i + 0.7152 * a + 0.0722 * l;
}
var a_ = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], df = "M5 5 h10 v10 h-10 v-10 z", l_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
ge({ name: "QColor", props: { ...rt, ...kn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, o = ot(e, r), { getCache: i } = ha(), a = H(null), l = H(null), s = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), d = m(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), c = H(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = H(e.defaultView), v = H(M(e.modelValue || e.defaultValue)), u = m(() => e.disable !== true && e.readonly !== true), g = m(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), y = m(() => s.value !== null ? s.value : g.value), w = m(() => ({ type: "hidden", name: e.name, value: v.value[y.value === true ? "hex" : "rgb"] })), x = Vr(w), _ = m(() => d.value !== null ? d.value : v.value.a !== void 0), p = m(() => ({ backgroundColor: v.value.rgb || "#000" })), b = m(() => `q-color-picker__header-content q-color-picker__header-content--${(v.value.a !== void 0 && v.value.a < 65 ? true : i_(v.value) > 0.4) ? "light" : "dark"}`), C = m(() => ({ background: `hsl(${v.value.h},100%,50%)` })), q = m(() => ({ top: `${100 - v.value.v}%`, [r.lang.rtl === true ? "right" : "left"]: `${v.value.s}%` })), B = m(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : a_), V = m(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (o.value === true ? " q-color-picker--dark q-dark" : "")), R = m(() => e.disable === true ? { "aria-disabled": "true" } : {}), D = m(() => [[wn, ie, void 0, { prevent: true, stop: true, mouse: true }]]);
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
    const I = _g(S);
    return E === true && I.a === void 0 && (I.a = 100), I.hex = sf(I), I.rgb = uf(I), Object.assign(I, Ms(I));
  }
  function A(S, E, I) {
    const Z = a.value;
    if (Z === null) return;
    const re = Z.clientWidth, W = Z.clientHeight, fe = Z.getBoundingClientRect();
    let ve = Math.min(re, Math.max(0, S - fe.left));
    r.lang.rtl === true && (ve = re - ve);
    const ue = Math.min(W, Math.max(0, E - fe.top)), ce = Math.round(100 * ve / re), oe = Math.round(100 * Math.max(0, Math.min(1, -(ue / W) + 1))), Q = cf({ h: v.value.h, s: ce, v: oe, a: _.value === true ? v.value.a : void 0 });
    v.value.s = ce, v.value.v = oe, $(Q, I);
  }
  function T(S, E) {
    const I = Math.round(S), Z = cf({ h: I, s: v.value.s, v: v.value.v, a: _.value === true ? v.value.a : void 0 });
    v.value.h = I, $(Z, E);
  }
  function z(S) {
    T(S, true);
  }
  function U(S, E, I, Z, re) {
    if (Z !== void 0 && St(Z), !/^[0-9]+$/.test(S)) {
      re === true && n.$forceUpdate();
      return;
    }
    const W = Math.floor(Number(S));
    if (W < 0 || W > I) {
      re === true && n.$forceUpdate();
      return;
    }
    const fe = { r: E === "r" ? W : v.value.r, g: E === "g" ? W : v.value.g, b: E === "b" ? W : v.value.b, a: _.value === true ? E === "a" ? W : v.value.a : void 0 };
    if (E !== "a") {
      const ve = Ms(fe);
      v.value.h = ve.h, v.value.s = ve.s, v.value.v = ve.v;
    }
    if ($(fe, re), re !== true && (Z == null ? void 0 : Z.target.selectionEnd) !== void 0) {
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
      I = yg(Z);
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
    const re = Ms(I);
    if (v.value.h = re.h, v.value.s = re.s, v.value.v = re.v, $(I, E), E !== true) {
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
  const ye = Fm((S) => {
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
    return e.noHeaderTabs !== true && S.push(h(rf, { class: "q-color-picker__header-tabs", modelValue: c.value, dense: true, align: "justify", "onUpdate:modelValue": G }, () => [h(ni, { label: "HEX" + (_.value === true ? "A" : ""), name: "hex", ripple: false }), h(ni, { label: "RGB" + (_.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(h("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [h("input", { class: "fit", value: v.value[c.value], ...u.value !== true ? { readonly: true } : {}, ...i("topIn", { onInput: (E) => {
      ne(j(E) === true);
    }, onChange: St, onBlur: (E) => {
      j(E, true) === true && n.$forceUpdate(), ne(false);
    } }) }), h(tt, { ref: l, class: "q-color-picker__error-icon absolute no-pointer-events", name: r.iconSet.type.negative })])), h("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [h("div", { class: "q-color-picker__header-bg absolute-full" }), h("div", { class: b.value, style: p.value }, S)]);
  }
  function O() {
    return h(r_, { modelValue: f.value, animated: true }, () => [h(ks, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, k), h(ks, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, F), h(ks, { class: "q-color-picker__palette-tab", name: "palette" }, ee)]);
  }
  function P(S) {
    f.value = S;
  }
  function te() {
    return h("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [h(rf, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": P }, () => [h(ni, { icon: r.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), h(ni, { icon: r.iconSet.colorPicker.tune, name: "tune", ripple: false }), h(ni, { icon: r.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function k() {
    const S = { ref: a, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (u.value !== true ? " readonly" : ""), style: C.value, ...u.value === true ? { onClick: Y, onMousedown: L } : {} }, E = [h("div", { style: { paddingBottom: "100%" } }), h("div", { class: "q-color-picker__spectrum-white absolute-full" }), h("div", { class: "q-color-picker__spectrum-black absolute-full" }), h("div", { class: "absolute", style: q.value }, [v.value.hex !== void 0 ? h("div", { class: "q-color-picker__spectrum-circle" }) : null])], I = [h(er, { class: "q-color-picker__hue non-selectable", modelValue: v.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: u.value !== true, thumbPath: df, "onUpdate:modelValue": T, onChange: z })];
    return _.value === true && I.push(h(er, { class: "q-color-picker__alpha non-selectable", modelValue: v.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: l_, readonly: u.value !== true, hideSelection: true, thumbPath: df, ...i("alphaSlide", { "onUpdate:modelValue": (Z) => U(Z, "a", 100), onChange: (Z) => U(Z, "a", 100, void 0, true) }) })), [Sn("div", S, E, "spec", u.value, () => D.value), h("div", { class: "q-color-picker__sliders" }, I)];
  }
  function F() {
    return [h("div", { class: "row items-center no-wrap" }, [h("div", "R"), h(er, { modelValue: v.value.r, min: 0, max: 255, color: "red", dark: o.value, readonly: u.value !== true, ...i("rSlide", { "onUpdate:modelValue": (S) => U(S, "r", 255), onChange: (S) => U(S, "r", 255, void 0, true) }) }), h("input", { value: v.value.r, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("rIn", { onInput: (S) => U(S.target.value, "r", 255, S), onBlur: (S) => U(S.target.value, "r", 255, S, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "G"), h(er, { modelValue: v.value.g, min: 0, max: 255, color: "green", dark: o.value, readonly: u.value !== true, ...i("gSlide", { "onUpdate:modelValue": (S) => U(S, "g", 255), onChange: (S) => U(S, "g", 255, void 0, true) }) }), h("input", { value: v.value.g, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("gIn", { onInput: (S) => U(S.target.value, "g", 255, S), onBlur: (S) => U(S.target.value, "g", 255, S, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "B"), h(er, { modelValue: v.value.b, min: 0, max: 255, color: "blue", readonly: u.value !== true, dark: o.value, ...i("bSlide", { "onUpdate:modelValue": (S) => U(S, "b", 255), onChange: (S) => U(S, "b", 255, void 0, true) }) }), h("input", { value: v.value.b, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("bIn", { onInput: (S) => U(S.target.value, "b", 255, S), onBlur: (S) => U(S.target.value, "b", 255, S, true) }) })]), _.value === true ? h("div", { class: "row items-center no-wrap" }, [h("div", "A"), h(er, { modelValue: v.value.a, color: "grey", readonly: u.value !== true, dark: o.value, ...i("aSlide", { "onUpdate:modelValue": (S) => U(S, "a", 100), onChange: (S) => U(S, "a", 100, void 0, true) }) }), h("input", { value: v.value.a, maxlength: 3, readonly: u.value !== true, onChange: St, ...i("aIn", { onInput: (S) => U(S.target.value, "a", 100, S), onBlur: (S) => U(S.target.value, "a", 100, S, true) }) })]) : null];
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
var Mr = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function s_(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), f_(Pc(e, t, n));
}
function ff(e, t, n) {
  return xg(d_(e, t, n));
}
function u_(e) {
  return c_(e) === 0;
}
function Qa(e, t) {
  return t <= 6 ? 31 : t <= 11 || u_(e) ? 30 : 29;
}
function c_(e) {
  const t = Mr.length;
  let n = Mr[0], r, o, i, a, l;
  if (e < n || e >= Mr[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (l = 1; l < t && (r = Mr[l], o = r - n, !(e < r)); l += 1) n = r;
  return a = e - n, o - a < 6 && (a = a - o + xt(o + 4, 33) * 33), i = fn(fn(a + 1, 33) - 1, 4), i === -1 && (i = 4), i;
}
function wg(e, t) {
  const n = Mr.length, r = e + 621;
  let o = -14, i = Mr[0], a, l, s, d, c;
  if (e < i || e >= Mr[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (c = 1; c < n && (a = Mr[c], l = a - i, !(e < a)); c += 1) o = o + xt(l, 33) * 8 + xt(fn(l, 33), 4), i = a;
  d = e - i, o = o + xt(d, 33) * 8 + xt(fn(d, 33) + 3, 4), fn(l, 33) === 4 && l - d === 4 && (o += 1);
  const f = xt(r, 4) - xt((xt(r, 100) + 1) * 3, 4) - 150, v = 20 + o - f;
  return t || (l - d < 6 && (d = d - l + xt(l + 4, 33) * 33), s = fn(fn(d + 1, 33) - 1, 4), s === -1 && (s = 4)), { leap: s, gy: r, march: v };
}
function d_(e, t, n) {
  const r = wg(e, true);
  return Pc(r.gy, 3, r.march) + (t - 1) * 31 - xt(t, 7) * (t - 7) + n - 1;
}
function f_(e) {
  const t = xg(e).gy;
  let n = t - 621, r, o, i;
  const a = wg(n, false), l = Pc(t, 3, a.march);
  if (i = e - l, i >= 0) {
    if (i <= 185) return o = 1 + xt(i, 31), r = fn(i, 31) + 1, { jy: n, jm: o, jd: r };
    i -= 186;
  } else n -= 1, i += 179, a.leap === 1 && (i += 1);
  return o = 7 + xt(i, 30), r = fn(i, 30) + 1, { jy: n, jm: o, jd: r };
}
function Pc(e, t, n) {
  let r = xt((e + xt(t - 8, 6) + 100100) * 1461, 4) + xt(153 * fn(t + 9, 12) + 2, 5) + n - 34840408;
  return r = r - xt(xt(e + 100100 + xt(t - 8, 6), 100) * 3, 4) + 752, r;
}
function xg(e) {
  let t = 4 * e + 139361631;
  t = t + xt(xt(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = xt(fn(t, 1461), 4) * 5 + 308, r = xt(fn(n, 153), 5) + 1, o = fn(xt(n, 153), 12) + 1;
  return { gy: xt(t, 1461) - 100100 + xt(8 - o, 6), gm: o, gd: r };
}
function xt(e, t) {
  return ~~(e / t);
}
function fn(e, t) {
  return e - ~~(e / t) * t;
}
var v_ = ["gregorian", "persian"], Sl = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => v_.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, Cg = ["update:modelValue"];
function Xn(e) {
  return e.year + "/" + lt(e.month) + "/" + lt(e.day);
}
function Sg(e, t) {
  const n = m(() => e.disable !== true && e.readonly !== true), r = m(() => n.value === true ? 0 : -1), o = m(() => {
    const l = [];
    return e.color !== void 0 && l.push(`bg-${e.color}`), e.textColor !== void 0 && l.push(`text-${e.textColor}`), l.join(" ");
  });
  function i() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function a(l) {
    const s = /* @__PURE__ */ new Date(), d = l === true ? null : 0;
    if (e.calendar === "persian") {
      const c = s_(s);
      return { year: c.jy, month: c.jm, day: c.jd };
    }
    return { year: s.getFullYear(), month: s.getMonth() + 1, day: s.getDate(), hour: d, minute: d, second: d, millisecond: d };
  }
  return { editable: n, tabindex: r, headerClass: o, getLocale: i, getCurrentDate: a };
}
var Tg = 864e5, h_ = 36e5, Bu = 6e4, kg = "YYYY-MM-DDTHH:mm:ss.SSSZ", m_ = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, g_ = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, qs = {};
function b_(e, t) {
  const n = "(" + t.days.join("|") + ")", r = e + n;
  if (qs[r] !== void 0) return qs[r];
  const o = "(" + t.daysShort.join("|") + ")", i = "(" + t.months.join("|") + ")", a = "(" + t.monthsShort.join("|") + ")", l = {};
  let s = 0;
  const d = e.replace(g_, (f) => {
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
        return o;
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
  return qs[r] = c, c;
}
function Mg(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : _u.date;
}
function vf(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  return n + lt(o) + t + lt(i);
}
function Ci(e, t, n, r, o) {
  const i = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (o !== void 0 && Object.assign(i, o), e == null || e === "" || typeof e != "string") return i;
  t === void 0 && (t = kg);
  const a = Mg(n, zl.props), l = a.months, s = a.monthsShort, { regex: d, map: c } = b_(t, a), f = e.match(d);
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
      const u = r !== "persian" ? new Date(i.year, i.month, 0).getDate() : Qa(i.year, i.month);
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
  const r = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - r);
  const o = (t - n) / (Tg * 7);
  return 1 + Math.floor(o);
}
function Jn(e, t, n) {
  const r = new Date(e), o = `set${n === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      r[`${o}Month`](0);
    case "month":
    case "months":
      r[`${o}Date`](1);
    case "day":
    case "days":
    case "date":
      r[`${o}Hours`](0);
    case "hour":
    case "hours":
      r[`${o}Minutes`](0);
    case "minute":
    case "minutes":
      r[`${o}Seconds`](0);
    case "second":
    case "seconds":
      r[`${o}Milliseconds`](0);
  }
  return r;
}
function Ma(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * Bu - (t.getTime() - t.getTimezoneOffset() * Bu)) / n;
}
function qg(e, t, n = "days") {
  const r = new Date(e), o = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return r.getFullYear() - o.getFullYear();
    case "months":
    case "month":
      return (r.getFullYear() - o.getFullYear()) * 12 + r.getMonth() - o.getMonth();
    case "days":
    case "day":
    case "date":
      return Ma(Jn(r, "day"), Jn(o, "day"), Tg);
    case "hours":
    case "hour":
      return Ma(Jn(r, "hour"), Jn(o, "hour"), h_);
    case "minutes":
    case "minute":
      return Ma(Jn(r, "minute"), Jn(o, "minute"), Bu);
    case "seconds":
    case "second":
      return Ma(Jn(r, "second"), Jn(o, "second"), 1e3);
  }
}
function As(e) {
  return qg(e, Jn(e, "year"), "days") + 1;
}
function wo(e) {
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
  const r = this.YYYY(e, t, n) % 100;
  return r >= 0 ? lt(r) : "-" + lt(Math.abs(r));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return wo(e.getMonth() + 1);
}, MM(e) {
  return lt(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return wo(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return wo(e.getDate());
}, DD(e) {
  return lt(e.getDate());
}, DDD(e) {
  return As(e);
}, DDDo(e) {
  return wo(As(e));
}, DDDD(e) {
  return lt(As(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return wo(e.getDay());
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
  return wo(Es(e));
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
}, Z(e, t, n, r) {
  const o = r ?? e.getTimezoneOffset();
  return vf(o, ":");
}, ZZ(e, t, n, r) {
  const o = r ?? e.getTimezoneOffset();
  return vf(o);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function Eg(e, t, n, r, o) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const i = new Date(e);
  if (isNaN(i)) return;
  t === void 0 && (t = kg);
  const a = Mg(n, zl.props);
  return t.replace(m_, (l, s) => l in hf ? hf[l](i, a, r, o) : s === void 0 ? l : s.split("\\]").join("]"));
}
var Kn = 20, p_ = ["Calendar", "Years", "Months"], mf = (e) => p_.includes(e), Ls = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), xo = " \u2014 ";
function vr(e) {
  return e.year + "/" + lt(e.month);
}
ge({ name: "QDate", props: { ...Sl, ...kn, ...rt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Sl.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Ls }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Ls }, navigationMaxYearMonth: { type: String, validator: Ls }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: mf } }, emits: [...Cg, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = ot(e, o), { getCache: a } = ha(), { tabindex: l, headerClass: s, getLocale: d, getCurrentDate: c } = Sg(e, o);
  let f;
  const v = va(e), u = Vr(v), g = H(null), y = H(Ie()), w = H(d()), x = m(() => Ie()), _ = m(() => d()), p = m(() => c()), b = H(se(y.value, w.value)), C = H(e.defaultView), q = m(() => o.lang.rtl === true ? "right" : "left"), B = H(q.value), V = H(q.value), R = b.value.year, D = H(R - R % Kn - (R < 0 ? Kn : 0)), $ = H(null), M = m(() => {
    const N = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${N} q-date--${N}-${e.minimal === true ? "minimal" : "standard"}` + (i.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), A = m(() => e.color || "primary"), T = m(() => e.textColor || "white"), z = m(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), U = m(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), j = m(() => U.value.filter((N) => typeof N == "string").map((N) => Ne(N, y.value, w.value)).filter((N) => N.dateHash !== null && N.day !== null && N.month !== null && N.year !== null)), K = m(() => {
    const N = (X) => Ne(X, y.value, w.value);
    return U.value.filter((X) => Ot(X) === true && X.from !== void 0 && X.to !== void 0).map((X) => ({ from: N(X.from), to: N(X.to) })).filter((X) => X.from.dateHash !== null && X.to.dateHash !== null && X.from.dateHash < X.to.dateHash);
  }), ie = m(() => e.calendar !== "persian" ? (N) => new Date(N.year, N.month - 1, N.day) : (N) => {
    const X = ff(N.year, N.month, N.day);
    return new Date(X.gy, X.gm - 1, X.gd);
  }), ye = m(() => e.calendar === "persian" ? Xn : (N, X, he) => Eg(new Date(N.year, N.month - 1, N.day, N.hour, N.minute, N.second, N.millisecond), X === void 0 ? y.value : X, he === void 0 ? w.value : he, N.year, N.timezoneOffset)), Y = m(() => j.value.length + K.value.reduce((N, X) => N + 1 + qg(ie.value(X.to), ie.value(X.from)), 0)), L = m(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if ($.value !== null) {
      const he = $.value.init, qe = ie.value(he);
      return w.value.daysShort[qe.getDay()] + ", " + w.value.monthsShort[he.month - 1] + " " + he.day + xo + "?";
    }
    if (Y.value === 0) return xo;
    if (Y.value > 1) return `${Y.value} ${w.value.pluralDay}`;
    const N = j.value[0], X = ie.value(N);
    return isNaN(X.valueOf()) === true ? xo : w.value.headerTitle !== void 0 ? w.value.headerTitle(X, N) : w.value.daysShort[X.getDay()] + ", " + w.value.monthsShort[N.month - 1] + " " + N.day;
  }), ne = m(() => j.value.concat(K.value.map((X) => X.from)).sort((X, he) => X.year - he.year || X.month - he.month)[0]), G = m(() => j.value.concat(K.value.map((X) => X.to)).sort((X, he) => he.year - X.year || he.month - X.month)[0]), be = m(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (Y.value === 0) return xo;
    if (Y.value > 1) {
      const N = ne.value, X = G.value, he = w.value.monthsShort;
      return he[N.month - 1] + (N.year !== X.year ? " " + N.year + xo + he[X.month - 1] + " " : N.month !== X.month ? xo + he[X.month - 1] : "") + " " + X.year;
    }
    return j.value[0].year;
  }), O = m(() => {
    const N = [o.iconSet.datetime.arrowLeft, o.iconSet.datetime.arrowRight];
    return o.lang.rtl === true ? N.reverse() : N;
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
      const he = vr(X);
      N[he] === void 0 && (N[he] = []), N[he].push(X.day);
    }), N;
  }), Z = m(() => {
    const N = {};
    return K.value.forEach((X) => {
      const he = vr(X.from), qe = vr(X.to);
      if (N[he] === void 0 && (N[he] = []), N[he].push({ from: X.from.day, to: he === qe ? X.to.day : void 0, range: X }), he < qe) {
        let Ee;
        const { year: Ze, month: De } = X.from, He = De < 12 ? { year: Ze, month: De + 1 } : { year: Ze + 1, month: 1 };
        for (; (Ee = vr(He)) <= qe; ) N[Ee] === void 0 && (N[Ee] = []), N[Ee].push({ from: void 0, to: Ee === qe ? X.to.day : void 0, range: X }), He.month++, He.month > 12 && (He.year++, He.month = 1);
      }
    }), N;
  }), re = m(() => {
    if ($.value === null) return;
    const { init: N, initHash: X, final: he, finalHash: qe } = $.value, [Ee, Ze] = X <= qe ? [N, he] : [he, N], De = vr(Ee), He = vr(Ze);
    if (De !== W.value && He !== W.value) return;
    const at = {};
    return De === W.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, He === W.value ? (at.to = Ze.day, at.includeTo = true) : at.to = k.value, at;
  }), W = m(() => vr(b.value)), fe = m(() => {
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
    }), re.value !== void 0) {
      const De = Ee + re.value.from - 1, He = Ee + re.value.to - 1;
      for (let at = De; at <= He; at++) N[at].color = A.value, N[at].editRange = true;
      re.value.includeFrom === true && (N[De].editRangeFrom = true), re.value.includeTo === true && (N[He].editRangeTo = true);
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
  }), oe = m(() => e.disable === true ? { "aria-disabled": "true" } : {});
  me(() => e.modelValue, (N) => {
    if (f === JSON.stringify(N)) f = 0;
    else {
      const X = se(y.value, w.value);
      ct(X.year, X.month, X);
    }
  }), me(C, () => {
    g.value !== null && r.$el.contains(document.activeElement) === true && g.value.focus();
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
    const { year: N, month: X, day: he } = p.value, qe = { ...b.value, year: N, month: X, day: he }, Ee = I.value[vr(qe)];
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
    qe !== b.value.dateHash && (B.value = b.value.dateHash < qe == (o.lang.rtl !== true) ? "left" : "right", N !== b.value.year && (V.value = B.value), Qe(() => {
      D.value = N - N % Kn - (N < 0 ? Kn : 0), Object.assign(b.value, { year: N, month: X, day: 1, dateHash: qe });
    }));
  }
  function Mt(N, X, he) {
    const qe = N !== null && N.length === 1 && e.multiple === false ? N[0] : N, { reason: Ee, details: Ze } = dr(X, he);
    Q(qe), n("update:modelValue", qe, Ee, Ze);
  }
  function Yt(N) {
    const X = j.value[0] !== void 0 && j.value[0].dateHash !== null ? { ...j.value[0] } : { ...b.value };
    Qe(() => {
      X.year = b.value.year, X.month = b.value.month;
      const he = e.calendar !== "persian" ? new Date(X.year, X.month, 0).getDate() : Qa(X.year, X.month);
      X.day = Math.min(Math.max(1, X.day), he);
      const qe = cn(X), { details: Ee } = dr("", X);
      Q(qe), n("update:modelValue", qe, N, Ee);
    });
  }
  function dr(N, X) {
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
    } }) }, [L.value]))]), e.todayBtn === true ? h(et, { class: "q-date__header-today self-start", icon: o.iconSet.datetime.today, ariaLabel: o.lang.date.today, flat: true, size: "sm", round: true, tabindex: l.value, onClick: le }) : null])]);
  }
  function Oe({ label: N, type: X, key: he, dir: qe, goTo: Ee, boundaries: Ze, cls: De }) {
    return [h("div", { class: "row items-center q-date__arrow" }, [h(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[0], ariaLabel: X === "Years" ? o.lang.date.prevYear : o.lang.date.prevMonth, tabindex: l.value, disable: Ze.prev === false, ...a("go-#" + X, { onClick() {
      Ee(-1);
    } }) })]), h("div", { class: "relative-position overflow-hidden flex flex-center" + De }, [h($t, { name: "q-transition--jump-" + qe }, () => h("div", { key: he }, [h(et, { flat: true, dense: true, noCaps: true, label: N, tabindex: l.value, ...a("view#" + X, { onClick: () => {
      C.value = X;
    } }) })]))]), h("div", { class: "row items-center q-date__arrow" }, [h(et, { round: true, dense: true, size: "sm", flat: true, icon: O.value[1], ariaLabel: X === "Years" ? o.lang.date.nextYear : o.lang.date.nextMonth, tabindex: l.value, disable: Ze.next === false, ...a("go+#" + X, { onClick() {
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
    return h("div", { class: "q-date__view q-date__years flex flex-center" }, [h("div", { class: "col-auto" }, [h(et, { round: true, dense: true, flat: true, icon: O.value[0], ariaLabel: o.lang.date.prevRangeYears(Kn), tabindex: l.value, disable: qe(N), ...a("y-", { onClick: () => {
      D.value -= Kn;
    } }) })]), h("div", { class: "q-date__years-content col self-stretch row items-center" }, he), h("div", { class: "col-auto" }, [h(et, { round: true, dense: true, flat: true, icon: O.value[1], ariaLabel: o.lang.date.nextRangeYears(Kn), tabindex: l.value, disable: qe(X), ...a("y+", { onClick: () => {
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
  return Object.assign(r, { setToday: le, setView: we, offsetCalendar: Ce, setCalendarTo: Te, setEditingRange: Me }), () => {
    const N = [h("div", { class: "q-date__content col relative-position" }, [h($t, { name: "q-transition--fade" }, Ye[C.value])])], X = Pe(t.default);
    return X !== void 0 && N.push(h("div", { class: "q-date__actions" }, X)), e.name !== void 0 && e.disable !== true && u(N, "push"), h("div", { class: M.value, ...oe.value }, [Ve(), h("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, N)]);
  };
} });
function Ag(e, t, n) {
  let r;
  function o() {
    r !== void 0 && (Xi.remove(r), r = void 0);
  }
  return We(() => {
    e.value === true && o();
  }), { removeFromHistory: o, addToHistory() {
    r = { condition: () => n.value === true, handler: t }, Xi.add(r);
  } };
}
var ri = 0, Bs, Rs, Si, Ps = false, gf, bf, pf, Nr = null;
function y_(e) {
  __(e) && Ke(e);
}
function __(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = By(e), n = e.shiftKey && !e.deltaX, r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (q1(a, r)) return r ? o < 0 && a.scrollTop === 0 ? true : o > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : o < 0 && a.scrollLeft === 0 ? true : o > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return true;
}
function yf(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function qa(e) {
  Ps !== true && (Ps = true, requestAnimationFrame(() => {
    Ps = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: r } = document.scrollingElement;
    (Si === void 0 || t !== window.innerHeight) && (Si = n - t, document.scrollingElement.scrollTop = r), r > Si && (document.scrollingElement.scrollTop -= Math.ceil((r - Si) / 8));
  }));
}
function _f(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: r, overflowX: o } = window.getComputedStyle(t);
    Bs = Kl(window), Rs = Ar(window), gf = t.style.left, bf = t.style.top, pf = window.location.href, t.style.left = `-${Bs}px`, t.style.top = `-${Rs}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", qa, ht.passiveCapture), window.visualViewport.addEventListener("scroll", qa, ht.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", yf, ht.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", y_, ht.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", qa, ht.passiveCapture), window.visualViewport.removeEventListener("scroll", qa, ht.passiveCapture)) : window.removeEventListener("scroll", yf, ht.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = gf, t.style.top = bf, window.location.href === pf && window.scrollTo(Bs, Rs), Si = void 0);
}
function Ru(e) {
  let t = "add";
  if (e === true) {
    if (ri++, Nr !== null) {
      clearTimeout(Nr), Nr = null;
      return;
    }
    if (ri > 1) return;
  } else {
    if (ri === 0 || (ri--, ri > 0)) return;
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      Nr !== null && clearTimeout(Nr), Nr = setTimeout(() => {
        _f(t), Nr = null;
      }, 100);
      return;
    }
  }
  _f(t);
}
function Lg() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Ru(t));
  } };
}
var Ea = 0, w_ = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, wf = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, Gl = ge({ name: "QDialog", inheritAttrs: false, props: { ...Wo, ...to, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Yo, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: r }) {
  const o = xe(), i = H(null), a = H(false), l = H(false);
  let s = null, d = null, c, f;
  const v = m(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: u } = Lg(), { registerTimeout: g } = ar(), { registerTick: y, removeTick: w } = Fo(), { transitionProps: x, transitionStyle: _ } = Ql(e, () => wf[e.position][0], () => wf[e.position][1]), p = m(() => _.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: C, portalIsAccessible: q, renderPortal: B } = wc(o, i, be, "dialog"), { hide: V } = Go({ showing: a, hideOnRouteChange: v, handleShow: z, handleHide: U, processOnMount: true }), { addToHistory: R, removeFromHistory: D } = Ag(a, V, v), $ = m(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${w_[e.position]}` + (l.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), M = m(() => a.value === true && e.seamless !== true), A = m(() => e.autoClose === true ? { onClick: L } : {}), T = m(() => [`q-dialog fullscreen no-pointer-events q-dialog--${M.value === true ? "modal" : "seamless"}`, r.class]);
  me(() => e.maximized, (O) => {
    a.value === true && Y(O);
  }), me(M, (O) => {
    u(O), O === true ? (Jm(G), Gm(ie)) : (Eu(G), gl(ie));
  });
  function z(O) {
    var _a3;
    R(), d = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, Y(e.maximized), b(), l.value = true, e.noFocus !== true ? ((_a3 = document.activeElement) == null ? void 0 : _a3.blur(), y(j)) : w(), g(() => {
      if (o.proxy.$q.platform.is.ios === true) {
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
    Xo(() => {
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
    e.allowFocusOutside !== true && q.value === true && Vm(i.value, O.target) !== true && j('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(o.proxy, { focus: j, shake: K, __updateRefocusTarget(O) {
    d = O || null;
  } }), We(ye);
  function be() {
    return h("div", { role: "dialog", "aria-modal": M.value === true ? "true" : "false", ...r, class: T.value }, [h($t, { name: "q-transition--fade", appear: true }, () => M.value === true ? h("div", { class: "q-dialog__backdrop fixed-full", style: p.value, "aria-hidden": "true", tabindex: -1, onClick: ne }) : null), h($t, x.value, () => a.value === true ? h("div", { ref: i, class: $.value, style: _.value, tabindex: -1, ...A.value }, Pe(t.default)) : null)]);
  }
  return B;
} }), xf = 150, Cf = ge({ name: "QDrawer", inheritAttrs: false, props: { ...Wo, ...rt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Yo, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: r }) {
  const o = xe(), { proxy: { $q: i } } = o, a = ot(e, i), { preventBodyScroll: l } = Lg(), { registerTimeout: s, removeTimeout: d } = ar(), c = Lt(ho, ut);
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
  const { show: C, hide: q } = Go({ showing: x, hideOnRouteChange: _, handleShow: p, handleHide: b }), { addToHistory: B, removeFromHistory: V } = Ag(x, q, _), R = { belowBreakpoint: g, hide: q }, D = m(() => e.side === "right"), $ = m(() => (i.lang.rtl === true ? -1 : 1) * (D.value === true ? 1 : -1)), M = H(0), A = H(false), T = H(false), z = H(w.value * $.value), U = m(() => D.value === true ? "left" : "right"), j = m(() => x.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), K = m(() => e.overlay === true || e.miniToOverlay === true || c.view.value.indexOf(D.value ? "R" : "L") !== -1 || i.platform.is.ios === true && c.isContainer.value === true), ie = m(() => e.overlay === false && x.value === true && g.value === false), ye = m(() => e.overlay === true && x.value === true && g.value === false), Y = m(() => "fullscreen q-drawer__backdrop" + (x.value === false && A.value === false ? " hidden" : "")), L = m(() => ({ backgroundColor: `rgba(0,0,0,${M.value * 0.4})` })), ne = m(() => D.value === true ? c.rows.value.top[2] === "r" : c.rows.value.top[0] === "l"), G = m(() => D.value === true ? c.rows.value.bottom[2] === "r" : c.rows.value.bottom[0] === "l"), be = m(() => {
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
    E(), oe(e.miniToOverlay, Q);
  }), me(() => e.miniToOverlay, (Q) => {
    oe(Q, w.value);
  }), me(() => i.lang.rtl, () => {
    E();
  }), me(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (re(), c.animate());
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
  function re() {
    v !== null && clearTimeout(v), o.proxy && o.proxy.$el && o.proxy.$el.classList.add("q-drawer--mini-animate"), T.value = true, v = setTimeout(() => {
      var _a3, _b2;
      v = null, T.value = false, (_b2 = (_a3 = o == null ? void 0 : o.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
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
  function oe(Q, le) {
    ue("size", Q === true ? e.miniWidth : le);
  }
  return c.instances[e.side] = R, oe(e.miniToOverlay, w.value), ue("space", ie.value), ue("offset", j.value), e.showIfAbove === true && e.modelValue !== true && x.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), st(() => {
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
    const le = y.value === true && t.mini !== void 0, we = [h("div", { ...r, key: "" + le, class: [P.value, r.class] }, le === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && x.value === true && we.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), Q.push(Sn("aside", { ref: "content", class: te.value, style: O.value }, we, "contentclose", e.noSwipeClose !== true && g.value === true, () => F.value)), h("div", { class: "q-drawer-container" }, Q);
  };
} });
function Bg(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, o = r.display;
  return o === "block" || o === "table" ? e : Bg(e.parentNode);
}
function Ds(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function Rg(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let r = 0; t.count !== 0 && r < e.childNodes.length; r++) n = Rg(e.childNodes[r], t, n);
  return n;
}
var x_ = /^https?:\/\//, C_ = class {
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
    return e !== null ? Bg(e, this.el) : null;
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
    if (n.focusNode && Ds(n.focusNode, r)) for (t = n.focusNode, e = n.focusOffset; t && t !== r; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = Rg(this.el, { count: this.savedPos });
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
  apply(e, t, n = Tt) {
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
        const o = this.selectWord(this.selection), i = o ? o.toString() : "";
        if (!i.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = x_.test(i) ? i : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(o.getRangeAt(0));
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
    const r = e.focusNode, o = e.focusOffset;
    return e.collapse(e.anchorNode, e.anchorOffset), e.modify("move", n[0], "character"), e.modify("move", n[1], "word"), e.extend(r, o), e.modify("extend", n[1], "character"), e.modify("extend", n[0], "word"), e;
  }
}, S_ = ge({ name: "QTooltip", inheritAttrs: false, props: { ...zm, ...Wo, ...to, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...to.transitionShow, default: "jump-down" }, transitionHide: { ...to.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: _l }, self: { type: String, default: "top middle", validator: _l }, offset: { type: Array, default: () => [14, 14], validator: eg }, scrollTarget: mo, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Yo], setup(e, { slots: t, emit: n, attrs: r }) {
  let o, i;
  const a = xe(), { proxy: { $q: l } } = a, s = H(null), d = H(false), c = m(() => wl(e.anchor, l.lang.rtl)), f = m(() => wl(e.self, l.lang.rtl)), v = m(() => e.persistent !== true), { registerTick: u, removeTick: g } = Fo(), { registerTimeout: y } = ar(), { transitionProps: w, transitionStyle: x } = Ql(e), { localScrollTarget: _, changeScrollEvent: p, unconfigureScrollTarget: b } = jm(e, ye), { anchorEl: C, canShow: q, anchorEvents: B } = yc({ showing: d, configureAnchorEl: ie }), { show: V, hide: R } = Go({ showing: d, canShow: q, handleShow: A, handleHide: T, hideOnRouteChange: v, processOnMount: true });
  Object.assign(B, { delayShow: j, delayHide: K });
  const { showPortal: D, hidePortal: $, renderPortal: M } = wc(a, s, L, "tooltip");
  if (l.platform.is.mobile === true) {
    const ne = { anchorEl: C, innerRef: s, onClickOutside(be) {
      return R(be), be.target.classList.contains("q-dialog__backdrop") && Ke(be), true;
    } }, G = m(() => e.modelValue === null && e.persistent !== true && d.value === true);
    me(G, (be) => {
      (be === true ? Zm : yl)(ne);
    }), We(() => {
      yl(ne);
    });
  }
  function A(ne) {
    D(), u(() => {
      i = new MutationObserver(() => U()), i.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), U(), ye();
    }), o === void 0 && (o = me(() => l.screen.width + "|" + l.screen.height + "|" + e.self + "|" + e.anchor + "|" + l.lang.rtl, U)), y(() => {
      D(true), n("show", ne);
    }, e.transitionDuration);
  }
  function T(ne) {
    g(), $(), z(), y(() => {
      $(true), n("hide", ne);
    }, e.transitionDuration);
  }
  function z() {
    i !== void 0 && (i.disconnect(), i = void 0), o !== void 0 && (o(), o = void 0), b(), Zt(B, "tooltipTemp");
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
    return d.value === true ? h("div", { ...r, ref: s, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", r.class], style: [r.style, x.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function L() {
    return h($t, w.value, Y);
  }
  return We(z), Object.assign(a.proxy, { updatePosition: U }), M;
} }), jo = ge({ name: "QItem", props: { ...rt, ...da, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = ot(e, r), { hasLink: i, linkAttrs: a, linkClass: l, linkTag: s, navigateOnClick: d } = jl(), c = H(null), f = H(null), v = m(() => e.clickable === true || i.value === true || e.tag === "label"), u = m(() => e.disable !== true && v.value === true), g = m(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (o.value === true ? " q-item--dark" : "") + (i.value === true && e.active === null ? l.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (u.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), y = m(() => e.insetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
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
function Pg(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Dc(e) {
  return h("div", { class: "q-editor__toolbar-group" }, e);
}
function Dg(e, t, n, r = false) {
  const o = r || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), i = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const a = t.key ? h("div", [h("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    i.push(h(S_, { delay: 1e3 }, () => [h("div", { innerHTML: t.tip }), a]));
  }
  return h(et, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: o ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: o && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(a) {
    n == null ? void 0 : n(), Pg(a, t, e);
  } }, () => i);
}
function T_(e, t) {
  const n = t.list === "only-icons";
  let r = t.label, o = t.icon !== null ? t.icon : void 0, i, a;
  function l() {
    d.component.proxy.hide();
  }
  if (n) a = t.options.map((c) => {
    const f = c.type === void 0 ? e.caret.is(c.cmd, c.param) : false;
    return f && (r = c.tip, o = c.icon !== null ? c.icon : void 0), Dg(e, c, l, f);
  }), i = e.toolbarBackgroundClass.value, a = [Dc(a)];
  else {
    const c = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, v = t.list === "no-icons";
    a = t.options.map((u) => {
      const g = u.disable ? u.disable(e) : false, y = u.type === void 0 ? e.caret.is(u.cmd, u.param) : false;
      y && (r = u.tip, o = u.icon !== null ? u.icon : void 0);
      const w = u.htmlTip;
      return h(jo, { active: y, activeClass: c, clickable: true, disable: g, dense: true, onClick(x) {
        var _a3;
        l(), (x == null ? void 0 : x.qAvoidFocus) !== true && ((_a3 = e.contentRef.value) == null ? void 0 : _a3.focus()), e.caret.restore(), Pg(x, u, e);
      } }, () => [v === true ? null : h(yn, { class: y ? c : f, side: true }, () => h(tt, { name: u.icon !== null ? u.icon : void 0 })), h(yn, w ? () => h("div", { class: "text-no-wrap", innerHTML: u.htmlTip }) : u.tip ? () => h("div", { class: "text-no-wrap" }, u.tip) : void 0)]);
    }), i = [e.toolbarBackgroundClass.value, f];
  }
  const s = t.highlight && r !== t.label, d = h($1, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : r, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : o, contentClass: i, onShow: (c) => e.emit("dropdownShow", c), onHide: (c) => e.emit("dropdownHide", c), onBeforeShow: (c) => e.emit("dropdownBeforeShow", c), onBeforeHide: (c) => e.emit("dropdownBeforeHide", c) }, () => a);
  return d;
}
function k_(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Dc(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? T_(e, n) : Dg(e, n))));
}
function M_(e, t, n, r = {}) {
  const o = Object.keys(r);
  if (o.length === 0) return {};
  const i = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return o.forEach((a) => {
    const l = r[a];
    i[a] = { cmd: "fontName", param: l, icon: n, tip: l, htmlTip: `<font face="${l}">${l}</font>` };
  }), i;
}
function q_(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const r = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [h("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), h("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (o) => {
      St(o), n = o.target.value;
    }, onKeydown: (o) => {
      if (vo(o) !== true) switch (o.keyCode) {
        case 13:
          return Nt(o), r();
        case 27:
          Nt(o), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Dc([h(et, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), h(et, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: r })])];
  }
}
var Sf = /^on[A-Z]/;
function Og() {
  const { attrs: e, vnode: t } = xe(), n = { listeners: H({}), attributes: H({}) };
  function r() {
    const o = {}, i = {};
    for (const a in e) a !== "class" && a !== "style" && Sf.test(a) === false && (o[a] = e[a]);
    for (const a in t.props) Sf.test(a) === true && (i[a] = t.props[a]);
    n.attributes.value = o, n.listeners.value = i;
  }
  return fo(r), r(), n;
}
var E_ = Object.prototype.toString, Os = Object.prototype.hasOwnProperty, A_ = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Tf(e) {
  if (e !== Object(e) || A_.has(E_.call(e)) === true || e.constructor && Os.call(e, "constructor") === false && Os.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Os.call(e, t);
}
function Vg() {
  let e, t, n, r, o, i, a = arguments[0] || {}, l = 1, s = false;
  const d = arguments.length;
  for (typeof a == "boolean" && (s = a, a = arguments[1] || {}, l = 2), Object(a) !== a && typeof a != "function" && (a = {}), d === l && (a = this, l--); l < d; l++) if ((e = arguments[l]) !== null) for (t in e) n = a[t], r = e[t], a !== r && (s === true && r && ((o = Array.isArray(r)) || Tf(r) === true) ? (o === true ? i = Array.isArray(n) === true ? n : [] : i = Tf(n) === true ? n : {}, a[t] = Vg(s, i, r)) : r !== void 0 && (a[t] = r));
  return a;
}
ge({ name: "QEditor", props: { ...rt, ...Ec, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ac, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = ot(e, o), { inFullscreen: a, toggleFullscreen: l } = Lc(), s = Og(), d = H(null), c = H(null), f = H(null), v = H(false), u = m(() => !e.readonly && !e.disable);
  let g, y, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const x = m(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), _ = m(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !u.value, size: "sm" })), p = m(() => {
    const O = o.lang.editor, P = o.iconSet.editor;
    return { bold: { cmd: "bold", icon: P.bold, tip: O.bold, key: 66 }, italic: { cmd: "italic", icon: P.italic, tip: O.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: P.strikethrough, tip: O.strikethrough, key: 83 }, underline: { cmd: "underline", icon: P.underline, tip: O.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: P.unorderedList, tip: O.unorderedList }, ordered: { cmd: "insertOrderedList", icon: P.orderedList, tip: O.orderedList }, subscript: { cmd: "subscript", icon: P.subscript, tip: O.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: P.superscript, tip: O.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (te) => te.caret && !te.caret.can("link"), icon: P.hyperlink, tip: O.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: P.toggleFullscreen, tip: O.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: P.viewSource, tip: O.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: P.quote, tip: O.quote, key: 81 }, left: { cmd: "justifyLeft", icon: P.left, tip: O.left }, center: { cmd: "justifyCenter", icon: P.center, tip: O.center }, right: { cmd: "justifyRight", icon: P.right, tip: O.right }, justify: { cmd: "justifyFull", icon: P.justify, tip: O.justify }, print: { type: "no-state", cmd: "print", icon: P.print, tip: O.print, key: 80 }, outdent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("outdent"), cmd: "outdent", icon: P.outdent, tip: O.outdent }, indent: { type: "no-state", disable: (te) => te.caret && !te.caret.can("indent"), cmd: "indent", icon: P.indent, tip: O.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: P.removeFormat, tip: O.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: P.hr, tip: O.hr }, undo: { type: "no-state", cmd: "undo", icon: P.undo, tip: O.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: P.redo, tip: O.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: P.heading1 || P.heading, tip: O.heading1, htmlTip: `<h1 class="q-ma-none">${O.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: P.heading2 || P.heading, tip: O.heading2, htmlTip: `<h2 class="q-ma-none">${O.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: P.heading3 || P.heading, tip: O.heading3, htmlTip: `<h3 class="q-ma-none">${O.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: P.heading4 || P.heading, tip: O.heading4, htmlTip: `<h4 class="q-ma-none">${O.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: P.heading5 || P.heading, tip: O.heading5, htmlTip: `<h5 class="q-ma-none">${O.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: P.heading6 || P.heading, tip: O.heading6, htmlTip: `<h6 class="q-ma-none">${O.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: P.heading, tip: O.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: P.code, htmlTip: `<code>${O.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: P.size1 || P.size, tip: O.size1, htmlTip: `<font size="1">${O.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: P.size2 || P.size, tip: O.size2, htmlTip: `<font size="2">${O.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: P.size3 || P.size, tip: O.size3, htmlTip: `<font size="3">${O.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: P.size4 || P.size, tip: O.size4, htmlTip: `<font size="4">${O.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: P.size5 || P.size, tip: O.size5, htmlTip: `<font size="5">${O.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: P.size6 || P.size, tip: O.size6, htmlTip: `<font size="6">${O.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: P.size7 || P.size, tip: O.size7, htmlTip: `<font size="7">${O.size7}</font>` } };
  }), b = m(() => {
    const O = e.definitions || {}, P = e.definitions || e.fonts ? Vg(true, {}, p.value, O, M_(g, o.lang.editor.defaultFont, o.iconSet.editor.font, e.fonts)) : p.value;
    return e.toolbar.map((te) => te.map((k) => {
      if (k.options) return { type: "dropdown", icon: k.icon, label: k.label, size: "sm", dense: true, fixedLabel: k.fixedLabel, fixedIcon: k.fixedIcon, highlight: k.highlight, list: k.list, options: k.options.map((ee) => P[ee]) };
      const F = P[k];
      return F ? F.type === "no-state" || O[k] && (F.cmd === void 0 || p.value[F.cmd] && p.value[F.cmd].type === "no-state") ? F : Object.assign({ type: "toggle" }, F) : { type: "slot", slot: k };
    }));
  }), C = { $q: o, props: e, slots: t, emit: n, inFullscreen: a, toggleFullscreen: l, runCmd: L, isViewingSource: v, editLinkUrl: f, toolbarBackgroundClass: x, buttonProps: _, contentRef: c, buttons: b, setContent: Y };
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
    if (n("keydown", O), O.ctrlKey !== true || vo(O) === true) {
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
      f.value = null, r.$forceUpdate();
    }, 1);
  }
  function G() {
    Xo(() => {
      var _a3;
      (_a3 = c.value) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  function be() {
    return c.value;
  }
  return st(() => {
    C.caret = r.caret = new C_(c.value, C), Y(e.modelValue), ne(), document.addEventListener("selectionchange", ye);
  }), We(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(r, { runCmd: L, refreshToolbar: ne, focus: G, getContentEl: be }), () => {
    let O;
    if (q.value) {
      const P = [h("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + x.value }, k_(C))];
      f.value !== null && P.push(h("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + x.value }, q_(C))), O = h("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, P);
    }
    return h("div", { ref: d, class: R.value, style: { height: a.value === true ? "100%" : null }, ...$.value, onFocusin: j, onFocusout: K }, [O, h("div", { ref: c, style: V.value, class: D.value, contenteditable: u.value, placeholder: e.placeholder, ...s.listeners.value, onInput: M, onKeydown: A, onClick: T, onBlur: z, onFocus: U, onMousedown: ie, onTouchstartPassive: ie })]);
  };
} });
var Pu = ge({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = m(() => parseInt(e.lines, 10)), r = m(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), o = m(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => h("div", { style: o.value, class: r.value }, Pe(t.default));
} }), Oc = ge({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let r = false, o, i, a = null, l = null, s, d;
  function c() {
    o == null ? void 0 : o(), o = null, r = false, a !== null && (clearTimeout(a), a = null), l !== null && (clearTimeout(l), l = null), i == null ? void 0 : i.removeEventListener("transitionend", s), s = null;
  }
  function f(y, w, x) {
    w !== void 0 && (y.style.height = `${w}px`), y.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, o = x;
  }
  function v(y, w) {
    y.style.overflowY = null, y.style.height = null, y.style.transition = null, c(), w !== d && n(w);
  }
  function u(y, w) {
    let x = 0;
    i = y, r === true ? (c(), x = y.offsetHeight === y.scrollHeight ? 0 : void 0) : (d = "hide", y.style.overflowY = "hidden"), f(y, x, w), a = setTimeout(() => {
      a = null, y.style.height = `${y.scrollHeight}px`, s = (_) => {
        l = null, (Object(_) !== _ || _.target === y) && v(y, "show");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  function g(y, w) {
    let x;
    i = y, r === true ? c() : (d = "show", y.style.overflowY = "hidden", x = y.scrollHeight), f(y, x, w), a = setTimeout(() => {
      a = null, y.style.height = 0, s = (_) => {
        l = null, (Object(_) !== _ || _.target === y) && v(y, "hide");
      }, y.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  return We(() => {
    r === true && c();
  }), () => h($t, { css: false, appear: e.appear, onEnter: u, onLeave: g }, t.default);
} }), L_ = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Vs = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, so = ge({ name: "QSeparator", props: { ...rt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = xe(), n = ot(e, t.proxy.$q), r = m(() => e.vertical === true ? "vertical" : "horizontal"), o = m(() => ` q-separator--${r.value}`), i = m(() => e.inset !== false ? `${o.value}-${L_[e.inset]}` : ""), a = m(() => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), l = m(() => {
    const s = {};
    if (e.size !== void 0 && (s[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const d = e.spaced === true ? `${Vs.md}px` : e.spaced in Vs ? `${Vs[e.spaced]}px` : e.spaced, c = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      s[`margin${c[0]}`] = s[`margin${c[1]}`] = d;
    }
    return s;
  });
  return () => h("hr", { class: a.value, style: l.value, "aria-orientation": r.value });
} }), zr = ec({}), B_ = Object.keys(da);
ge({ name: "QExpansionItem", props: { ...da, ...Wo, ...rt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Yo, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = ot(e, r), i = H(e.modelValue !== null ? e.modelValue : e.defaultOpened), a = H(null), l = Yl(), { show: s, hide: d, toggle: c } = Go({ showing: i });
  let f, v;
  const u = m(() => `q-expansion-item q-item-type q-expansion-item--${i.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = m(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), y = m(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = m(() => {
    const j = {};
    return B_.forEach((K) => {
      j[K] = e[K];
    }), j;
  }), x = m(() => y.value === true || e.expandIconToggle !== true), _ = m(() => e.expandedIcon !== void 0 && i.value === true ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), p = m(() => e.disable !== true && (y.value === true || e.expandIconToggle === true)), b = m(() => ({ expanded: i.value === true, detailsId: l.value, toggle: c, show: s, hide: d })), C = m(() => {
    const j = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[i.value === true ? "collapse" : "expand"](e.label);
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
    f === void 0 && (f = ea()), i.value === true && (zr[e.group] = f);
    const j = me(i, (ie) => {
      ie === true ? zr[e.group] = f : zr[e.group] === f && delete zr[e.group];
    }), K = me(() => zr[e.group], (ie, ye) => {
      ye === f && ie !== void 0 && ie !== f && d();
    });
    v = () => {
      j(), K(), zr[e.group] === f && delete zr[e.group], v = void 0;
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
    const j = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: o.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return x.value === true && (j.clickable = true, j.onClick = q, Object.assign(j, y.value === true ? w.value : C.value)), h(jo, j, A);
  }
  function z() {
    return hn(h("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: l.value }, Pe(t.default)), [[sm, i.value]]);
  }
  function U() {
    const j = [T(), h(Oc, { duration: e.duration, onShow: R, onHide: D }, z)];
    return e.expandSeparator === true && j.push(h(so, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: o.value }), h(so, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: o.value })), j;
  }
  return e.group !== void 0 && $(), We(() => {
    v == null ? void 0 : v();
  }), () => h("div", { class: u.value }, [h("div", { class: "q-expansion-item__container relative-position" }, U())]);
} });
var R_ = ["top", "right", "bottom", "left"], Du = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => R_.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function Fg(e, t) {
  return { formClass: m(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: m(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: m(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var P_ = ["up", "right", "down", "left"], D_ = ["left", "center", "right"];
ge({ name: "QFab", props: { ...Du, ...Wo, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...Du.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => P_.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => D_.includes(e) } }, emits: Yo, setup(e, { slots: t }) {
  const n = H(null), r = H(e.modelValue === true), o = Yl(), { proxy: { $q: i } } = xe(), { formClass: a, labelProps: l } = Fg(e, r), s = m(() => e.persistent !== true), { hide: d, toggle: c } = Go({ showing: r, hideOnRouteChange: s }), f = m(() => ({ opened: r.value })), v = m(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${a.value}` + (r.value === true ? " q-fab--opened" : " q-fab--closed")), u = m(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${r.value === true ? "opened" : "closed"}`), g = m(() => {
    const _ = { id: o.value, role: "menu" };
    return r.value !== true && (_["aria-hidden"] = "true"), _;
  }), y = m(() => `q-fab__icon-holder  q-fab__icon-holder--${r.value === true ? "opened" : "closed"}`);
  function w(_, p) {
    const b = t[_], C = `q-fab__${_} absolute-full`;
    return b === void 0 ? h(tt, { class: C, name: e[p] || i.iconSet.fab[p] }) : h("div", { class: C }, b(f.value));
  }
  function x() {
    const _ = [];
    return e.hideIcon !== true && _.push(h("div", { class: y.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && _[l.value.action](h("div", l.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), At(t.tooltip, _);
  }
  return _n(Tm, { showing: r, onChildClick(_) {
    var _a3;
    d(_), (_ == null ? void 0 : _.qAvoidFocus) !== true && ((_a3 = n.value) == null ? void 0 : _a3.$el.focus());
  } }), () => h("div", { class: v.value }, [h(et, { ref: n, class: a.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, onClick: c }, x), h("div", { class: u.value, ...g.value }, Pe(t.default))]);
} });
var $g = { start: "self-end", center: "self-center", end: "self-start" }, O_ = Object.keys($g);
ge({ name: "QFabAction", props: { ...Du, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => O_.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = Lt(Tm, () => ({ showing: { value: true }, onChildClick: Tt })), { formClass: o, labelProps: i } = Fg(e, r.showing), a = m(() => {
    const f = $g[e.anchor];
    return o.value + (f !== void 0 ? ` ${f}` : "");
  }), l = m(() => e.disable === true || r.showing.value !== true);
  function s(f) {
    r.onChildClick(f), n("click", f);
  }
  function d() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(h(tt, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[i.value.action](h("div", i.value.data, t.label !== void 0 ? t.label() : [e.label])), At(t.default, f);
  }
  const c = xe();
  return Object.assign(c.proxy, { click: s }), () => h(et, { class: a.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: l.value, onClick: s }, d);
} });
function V_({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = Lt(km, false);
  if (r !== false) {
    const { props: o, proxy: i } = xe();
    Object.assign(i, { validate: e, resetValidation: t }), me(() => o.disable, (a) => {
      a === true ? (typeof t == "function" && t(), r.unbindComponent(i)) : r.bindComponent(i);
    }), st(() => {
      o.disable !== true && r.bindComponent(i);
    }), We(() => {
      o.disable !== true && r.unbindComponent(i);
    });
  } else n === true && console.error("Parent QForm not found on useFormChild()!");
}
var F_ = [true, false, "ondemand"], $_ = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => F_.includes(e) } };
function I_(e, t) {
  const { props: n, proxy: r } = xe(), o = H(false), i = H(null), a = H(false);
  V_({ validate: y, resetValidation: g });
  let l = 0, s;
  const d = m(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), c = m(() => n.disable !== true && d.value === true && t.value === false), f = m(() => n.error === true || o.value === true), v = m(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
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
    l++, t.value = false, a.value = false, o.value = false, i.value = null, w.cancel();
  }
  function y(x = n.modelValue) {
    if (n.disable === true || d.value === false) return true;
    const _ = ++l, p = t.value !== true ? () => {
      a.value = true;
    } : () => {
    }, b = (q, B) => {
      q === true && p(), o.value = q, i.value = B || null, t.value = false;
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
  const w = Ko(y, 0);
  return We(() => {
    s == null ? void 0 : s(), w.cancel();
  }), Object.assign(r, { resetValidation: g, validate: y }), It(r, "hasError", () => f.value), { isDirtyModel: a, hasRules: d, hasError: f, errorMessage: v, validate: y, resetValidation: g };
}
function uo(e) {
  return e != null && ("" + e).length !== 0;
}
var Ig = { ...rt, ...$_, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, Xl = { ...Ig, maxlength: [Number, String] }, Jl = ["update:modelValue", "clear", "focus", "blur"];
function Zl({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: r, proxy: o } = xe(), i = ot(r, o.$q), a = Yl({ required: e, getValue: () => r.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? m(() => r.tag) : { value: "label" }, isDark: i, editable: m(() => r.disable !== true && r.readonly !== true), innerLoading: H(false), focused: H(false), hasPopupOpen: false, splitAttrs: Og(), targetUid: a, rootRef: H(null), targetRef: H(null), controlRef: H(null) };
}
function es(e) {
  const { props: t, emit: n, slots: r, attrs: o, proxy: i } = xe(), { $q: a } = i;
  let l = null;
  e.hasValue === void 0 && (e.hasValue = m(() => uo(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (K) => {
    n("update:modelValue", K);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: R, onFocusout: D }), Object.assign(e, { clearValue: $, onControlFocusin: R, onControlFocusout: D, focus: B }), e.computedCounter === void 0 && (e.computedCounter = m(() => {
    if (t.counter !== false) {
      const K = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, ie = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return K + (ie !== void 0 ? " / " + ie : "");
    }
  }));
  const { isDirtyModel: s, hasRules: d, hasError: c, errorMessage: f, resetValidation: v } = I_(e.focused, e.innerLoading), u = e.floatingLabel !== void 0 ? m(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : m(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = m(() => t.bottomSlots === true || t.hint !== void 0 || d.value === true || t.counter === true || t.error !== null), y = m(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = m(() => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (u.value === true ? " q-field--float" : "") + (_.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (c.value === true ? " q-field--error" : "") + (c.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), x = m(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), _ = m(() => t.labelSlot === true || t.label !== void 0), p = m(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== true ? ` text-${t.labelColor}` : "")), b = m(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: u.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = m(() => {
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
    Xo(q);
  }
  function V() {
    _1(q);
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
    return r.prepend !== void 0 && K.push(h("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Nt }, r.prepend())), K.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, T())), c.value === true && t.noErrorIcon === false && K.push(U("error", [h(tt, { name: a.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? K.push(U("inner-loading-append", r.loading !== void 0 ? r.loading() : [h(Tn, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && K.push(U("inner-clearable-append", [h(tt, { class: "q-field__focusable-action", name: t.clearIcon || a.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": a.lang.label.clear, onKeyup: M, onClick: $ })])), r.append !== void 0 && K.push(h("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Nt }, r.append())), e.getInnerAppend !== void 0 && K.push(U("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && K.push(e.getControlChild()), K;
  }
  function T() {
    const K = [];
    return t.prefix !== void 0 && t.prefix !== null && K.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && K.push(e.getShadowControl()), e.getControl !== void 0 ? K.push(e.getControl()) : r.rawControl !== void 0 ? K.push(r.rawControl()) : r.control !== void 0 && K.push(h("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, r.control(b.value))), _.value === true && K.push(h("div", { class: p.value }, Pe(r.label, t.label))), t.suffix !== void 0 && t.suffix !== null && K.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), K.concat(Pe(r.default));
  }
  function z() {
    let K, ie;
    c.value === true ? f.value !== null ? (K = [h("div", { role: "alert" }, f.value)], ie = `q--slot-error-${f.value}`) : (K = Pe(r.error), ie = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (K = [h("div", t.hint)], ie = `q--slot-hint-${t.hint}`) : (K = Pe(r.hint), ie = "q--slot-hint"));
    const ye = t.counter === true || r.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && K === void 0) return;
    const Y = h("div", { key: ie, class: "q-field__messages col" }, K);
    return h("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Nt }, [t.hideBottomSpace === true ? Y : h($t, { name: "q-transition--field-message" }, () => Y), ye === true ? h("div", { class: "q-field__counter" }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null]);
  }
  function U(K, ie) {
    return ie === null ? null : h("div", { key: K, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, ie);
  }
  let j = false;
  return Hn(() => {
    j = true;
  }), Dr(() => {
    j === true && t.autofocus === true && i.focus();
  }), t.autofocus === true && st(() => {
    i.focus();
  }), We(() => {
    l !== null && clearTimeout(l);
  }), Object.assign(i, { focus: B, blur: V }), function() {
    const ie = e.getControl === void 0 && r.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return h(e.tag.value, { ref: e.rootRef, class: [w.value, o.class], style: o.style, ...ie }, [r.before !== void 0 ? h("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Nt }, r.before()) : null, h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", { ref: e.controlRef, class: x.value, tabindex: -1, ...e.controlEvents }, A()), g.value === true ? z() : null]), r.after !== void 0 ? h("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Nt }, r.after()) : null]);
  };
}
var N_ = ge({ name: "QField", inheritAttrs: false, props: { ...Xl, tag: { type: String, default: "label" } }, emits: Jl, setup() {
  return es(Zl({ tagProp: true }));
} });
function Co(e, t, n, r) {
  const o = [];
  return e.forEach((i) => {
    r(i) === true ? o.push(i) : t.push({ failedPropValidation: n, file: i });
  }), o;
}
function Aa(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), Ke(e);
}
var Ng = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, zg = ["rejected"];
function Hg({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: r }) {
  const { props: o, emit: i, proxy: a } = xe(), l = H(null), s = m(() => o.accept !== void 0 ? o.accept.split(",").map((_) => (_ = _.trim(), _ === "*" ? "*/" : (_.endsWith("/*") && (_ = _.slice(0, _.length - 1)), _.toUpperCase()))) : null), d = m(() => parseInt(o.maxFiles, 10)), c = m(() => parseInt(o.maxTotalSize, 10));
  function f(_) {
    var _a3;
    if (e.value) if (_ !== Object(_) && (_ = { target: null }), ((_a3 = _.target) == null ? void 0 : _a3.matches('input[type="file"]')) === true) _.clientX === 0 && _.clientY === 0 && St(_);
    else {
      const p = n();
      p !== _.target && (p == null ? void 0 : p.click(_));
    }
  }
  function v(_) {
    e.value && _ && r(null, _);
  }
  function u(_, p, b, C) {
    let q = Array.from(p || _.target.files);
    const B = [], V = () => {
      B.length !== 0 && i("rejected", B);
    };
    if (o.accept !== void 0 && s.value.indexOf("*/") === -1 && (q = Co(q, B, "accept", (R) => s.value.some((D) => R.type.toUpperCase().startsWith(D) || R.name.toUpperCase().endsWith(D))), q.length === 0)) return V();
    if (o.maxFileSize !== void 0) {
      const R = parseInt(o.maxFileSize, 10);
      if (q = Co(q, B, "max-file-size", (D) => D.size <= R), q.length === 0) return V();
    }
    if (o.multiple !== true && q.length !== 0 && (q = [q[0]]), q.forEach((R) => {
      R.__key = R.webkitRelativePath + R.lastModified + R.name + R.size;
    }), C === true) {
      const R = b.map((D) => D.__key);
      q = Co(q, B, "duplicate", (D) => R.includes(D.__key) === false);
    }
    if (q.length === 0) return V();
    if (o.maxTotalSize !== void 0) {
      let R = C === true ? b.reduce((D, $) => D + $.size, 0) : 0;
      if (q = Co(q, B, "max-total-size", (D) => (R += D.size, R <= c.value)), q.length === 0) return V();
    }
    if (typeof o.filter == "function") {
      const R = o.filter(q);
      q = Co(q, B, "filter", (D) => R.includes(D));
    }
    if (o.maxFiles !== void 0) {
      let R = C === true ? b.length : 0;
      if (q = Co(q, B, "max-files", () => (R++, R <= d.value)), q.length === 0) return V();
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
    p.length !== 0 && r(null, p), t.value = false;
  }
  function x(_) {
    if (t.value === true) return h("div", { ref: l, class: `q-${_}__dnd absolute-full`, onDragenter: Aa, onDragover: Aa, onDragleave: y, onDrop: w });
  }
  return Object.assign(a, { pickFiles: f, addFiles: v }), { pickFiles: f, addFiles: v, onDragover: g, onDragleave: y, processFiles: u, getDndNode: x, maxFilesNumber: d, maxTotalSizeNumber: c };
}
function jg(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const o = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(r) === r && ("length" in r ? Array.from(r) : [r]).forEach((i) => {
        o.items.add(i);
      }), { files: o.files };
    } catch {
      return { files: void 0 };
    }
  }
  return m(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
ge({ name: "QFile", inheritAttrs: false, props: { ...Ig, ...kn, ...Ng, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Jl, ...zg], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: o } = xe(), i = Zl(), a = H(null), l = H(false), s = Cc(e), { pickFiles: d, onDragover: c, onDragleave: f, processFiles: v, getDndNode: u } = Hg({ editable: i.editable, dnd: l, getFileInput: M, addFilesToQueue: A }), g = jg(e), y = m(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = m(() => uo(y.value)), x = m(() => y.value.map((j) => j.name).join(", ")), _ = m(() => Cu(y.value.reduce((j, K) => j + K.size, 0))), p = m(() => ({ totalSize: _.value, filesNumber: y.value.length, maxFiles: e.maxFiles })), b = m(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...r, id: i.targetUid.value, disabled: i.editable.value !== true })), C = m(() => "q-file q-field--auto-height" + (l.value === true ? " q-file--dnd" : "")), q = m(() => e.multiple === true && e.append === true);
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
    if (e.useChips === true) return y.value.length === 0 ? T() : y.value.map((K, ie) => h(lg, { key: "file-" + ie, removable: i.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      B(ie);
    } }, () => h("span", { class: "ellipsis", textContent: K.name })));
    const j = e.displayValue !== void 0 ? e.displayValue : x.value;
    return j.length !== 0 ? [h("div", { class: e.inputClass, style: e.inputStyle, textContent: j })] : T();
  }
  function U() {
    const j = { ref: a, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: A };
    return e.multiple === true && (j.multiple = true), h("input", j);
  }
  return Object.assign(i, { fieldClass: C, emitValue: R, hasValue: w, inputRef: a, innerValue: y, floatingLabel: m(() => w.value === true || uo(e.displayValue)), computedCounter: m(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(p.value);
    const j = e.maxFiles;
    return `${y.value.length}${j !== void 0 ? " / " + j : ""} (${_.value})`;
  }), getControlChild: () => u("file"), getControl: () => {
    const j = { ref: i.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return i.editable.value === true && Object.assign(j, { onDragover: c, onDragleave: f, onKeydown: D, onKeyup: $ }), h("div", j, [U()].concat(z()));
  } }), Object.assign(o, { removeAtIndex: B, removeFile: V, getNativeElement: () => a.value }), It(o, "nativeEl", () => a.value), es(i);
} });
var z_ = ge({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = Lt(ho, ut);
  if (o === ut) return console.error("QFooter needs to be child of QLayout"), ut;
  const i = H(parseInt(e.heightHint, 10)), a = H(true), l = H(un.value === true || o.isContainer.value === true ? 0 : window.innerHeight), s = m(() => e.reveal === true || o.view.value.indexOf("F") !== -1 || r.platform.is.ios && o.isContainer.value === true), d = m(() => o.isContainer.value === true ? o.containerHeight.value : l.value), c = m(() => {
    if (e.modelValue !== true) return 0;
    if (s.value === true) return a.value === true ? i.value : 0;
    const C = o.scroll.value.position + d.value + i.value - o.height.value;
    return C > 0 ? C : 0;
  }), f = m(() => e.modelValue !== true || s.value === true && a.value !== true), v = m(() => e.modelValue === true && f.value === true && e.reveal === true), u = m(() => "q-footer q-layout__section--marginal " + (s.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (s.value !== true ? " hidden" : "") : "")), g = m(() => {
    const C = o.rows.value.bottom, q = {};
    return C[0] === "l" && o.left.space === true && (q[r.lang.rtl === true ? "right" : "left"] = `${o.left.size}px`), C[2] === "r" && o.right.space === true && (q[r.lang.rtl === true ? "left" : "right"] = `${o.right.size}px`), q;
  });
  function y(C, q) {
    o.update("footer", C, q);
  }
  function w(C, q) {
    C.value !== q && (C.value = q);
  }
  function x({ height: C }) {
    w(i, C), y("size", C);
  }
  function _() {
    if (e.reveal !== true) return;
    const { direction: C, position: q, inflectionPoint: B } = o.scroll.value;
    w(a, C === "up" || q - B < 100 || o.height.value - d.value - q - i.value < 300);
  }
  function p(C) {
    v.value === true && w(a, true), n("focusin", C);
  }
  me(() => e.modelValue, (C) => {
    y("space", C), w(a, true), o.animate();
  }), me(c, (C) => {
    y("offset", C);
  }), me(() => e.reveal, (C) => {
    C === false && w(a, e.modelValue);
  }), me(a, (C) => {
    o.animate(), n("reveal", C);
  }), me([i, o.scroll, o.height], _), me(() => r.screen.height, (C) => {
    o.isContainer.value !== true && w(l, C);
  });
  const b = {};
  return o.instances.footer = b, e.modelValue === true && y("size", i.value), y("space", e.modelValue), y("offset", c.value), We(() => {
    o.instances.footer === b && (o.instances.footer = void 0, y("size", 0), y("offset", 0), y("space", false));
  }), () => {
    const C = At(t.default, [h(lo, { debounce: 0, onResize: x })]);
    return e.elevated === true && C.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), h("footer", { class: u.value, style: g.value, onFocusin: p }, C);
  };
} });
ge({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const r = xe(), o = H(null);
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
          const q = p.find(({ comp: B }) => typeof B.focus == "function" && Er(B.$) === false);
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
    Xo(() => {
      var _a3;
      if (o.value === null) return;
      (_a3 = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a3.focus({ preventScroll: true });
    });
  }
  _n(km, { bindComponent(u) {
    a.push(u);
  }, unbindComponent(u) {
    const g = a.indexOf(u);
    g !== -1 && a.splice(g, 1);
  } });
  let v = false;
  return Hn(() => {
    v = true;
  }), Dr(() => {
    v === true && e.autofocus === true && f();
  }), st(() => {
    e.autofocus === true && f();
  }), Object.assign(r.proxy, { validate: l, resetValidation: s, submit: d, reset: c, focus: f, getValidationComponents: () => a }), () => h("form", { class: "q-form", ref: o, onSubmit: d, onReset: c }, Pe(t.default));
} });
var H_ = ge({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = Lt(ho, ut);
  if (o === ut) return console.error("QHeader needs to be child of QLayout"), ut;
  const i = H(parseInt(e.heightHint, 10)), a = H(true), l = m(() => e.reveal === true || o.view.value.indexOf("H") !== -1 || r.platform.is.ios && o.isContainer.value === true), s = m(() => {
    if (e.modelValue !== true) return 0;
    if (l.value === true) return a.value === true ? i.value : 0;
    const _ = i.value - o.scroll.value.position;
    return _ > 0 ? _ : 0;
  }), d = m(() => e.modelValue !== true || l.value === true && a.value !== true), c = m(() => e.modelValue === true && d.value === true && e.reveal === true), f = m(() => "q-header q-layout__section--marginal " + (l.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (d.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), v = m(() => {
    const _ = o.rows.value.top, p = {};
    return _[0] === "l" && o.left.space === true && (p[r.lang.rtl === true ? "right" : "left"] = `${o.left.size}px`), _[2] === "r" && o.right.space === true && (p[r.lang.rtl === true ? "left" : "right"] = `${o.right.size}px`), p;
  });
  function u(_, p) {
    o.update("header", _, p);
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
    u("space", _), g(a, true), o.animate();
  }), me(s, (_) => {
    u("offset", _);
  }), me(() => e.reveal, (_) => {
    _ === false && g(a, e.modelValue);
  }), me(a, (_) => {
    o.animate(), n("reveal", _);
  }), me(o.scroll, (_) => {
    e.reveal === true && g(a, _.direction === "up" || _.position <= e.revealOffset || _.position - _.inflectionPoint < 100);
  });
  const x = {};
  return o.instances.header = x, e.modelValue === true && u("size", i.value), u("space", e.modelValue), u("offset", s.value), We(() => {
    o.instances.header === x && (o.instances.header = void 0, u("size", 0), u("offset", 0), u("space", false));
  }), () => {
    const _ = ca(t.default, []);
    return e.elevated === true && _.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), _.push(h(lo, { debounce: 0, onResize: y })), h("header", { class: f.value, style: v.value, onFocusin: w }, _);
  };
} }), Vc = { ratio: [String, Number] };
function Fc(e, t) {
  return m(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var j_ = 1.7778;
ge({ name: "QImg", props: { ...Vc, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: j_ }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const r = H(e.initialRatio), o = Fc(e, r), i = xe(), { registerTimeout: a, removeTimeout: l } = ar(), { registerTimeout: s, removeTimeout: d } = ar(), c = m(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = m(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), v = [H(null), H(c.value)], u = H(0), g = H(false), y = H(false), w = m(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), x = m(() => ({ width: e.width, height: e.height })), _ = m(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), p = m(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
    Er(i) === false && (l(), r.value = M.naturalHeight === 0 ? 0.5 : M.naturalWidth / M.naturalHeight, B(M, 1));
  }
  function B(M, A) {
    A === 1e3 || Er(i) === true || (M.complete === true ? V(M) : a(() => {
      B(M, A + 1);
    }, 50));
  }
  function V(M) {
    Er(i) !== true && (u.value = u.value ^ 1, v[u.value].value = null, C(), M.getAttribute("__qerror") !== "true" && (y.value = false), n("load", M.currentSrc || M.src));
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
    return o.value !== null && M.push(h("div", { key: "filler", style: o.value })), v[0].value !== null && M.push(D(0)), v[1].value !== null && M.push(D(1)), M.push(h($t, { name: "q-transition--fade" }, $)), h("div", { key: "main", class: w.value, style: x.value, role: "img", "aria-label": e.alt }, M);
  };
} });
var { passive: Hr } = ht;
ge({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: mo, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const r = H(false), o = H(true), i = H(null), a = H(null);
  let l = e.initialIndex, s, d;
  const c = m(() => "q-infinite-scroll__loading" + (r.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || r.value === true || o.value === false) return;
    const B = xa(s), V = Ar(s), R = zo(s);
    e.reverse === false ? Math.round(V + R + e.offset) >= Math.round(B) && v() : Math.round(V) <= e.offset && v();
  }
  function v() {
    if (e.disable === true || r.value === true || o.value === false) return;
    l++, r.value = true;
    const B = xa(s);
    n("load", l, (V) => {
      o.value === true && (r.value = false, Qe(() => {
        if (e.reverse === true) {
          const R = xa(s), D = Ar(s), $ = R - B;
          $o(s, D + $);
        }
        V === true ? y() : i.value && i.value.closest("body") && d();
      }));
    });
  }
  function u() {
    l = 0;
  }
  function g() {
    o.value === false && (o.value = true, s.addEventListener("scroll", d, Hr)), f();
  }
  function y() {
    var _a3;
    o.value === true && (o.value = false, r.value = false, s.removeEventListener("scroll", d, Hr), (_a3 = d == null ? void 0 : d.cancel) == null ? void 0 : _a3.call(d));
  }
  function w() {
    if (s && o.value === true && s.removeEventListener("scroll", d, Hr), s = jn(i.value, e.scrollTarget), o.value === true) {
      if (s.addEventListener("scroll", d, Hr), e.reverse === true) {
        const B = xa(s), V = zo(s);
        $o(s, B - V);
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
    d = B <= 0 ? f : Ko(f, isNaN(B) === true ? 100 : B), s && o.value === true && (V !== void 0 && s.removeEventListener("scroll", V, Hr), s.addEventListener("scroll", d, Hr));
  }
  function p(B) {
    if (b.value === true) {
      if (a.value === null) {
        B !== true && Qe(() => {
          p(true);
        });
        return;
      }
      const V = `${r.value === true ? "un" : ""}pauseAnimations`;
      Array.from(a.value.getElementsByTagName("svg")).forEach((R) => {
        R[V]();
      });
    }
  }
  const b = m(() => e.disable !== true && o.value === true);
  me([r, b], () => {
    p();
  }), me(() => e.disable, (B) => {
    B === true ? y() : g();
  }), me(() => e.reverse, () => {
    r.value === false && o.value === true && f();
  }), me(() => e.scrollTarget, w), me(() => e.debounce, _);
  let C = false;
  Dr(() => {
    C !== false && s && $o(s, C);
  }), Hn(() => {
    C = s ? Ar(s) : false;
  }), We(() => {
    o.value === true && s.removeEventListener("scroll", d, Hr);
  }), st(() => {
    _(e.debounce), w(), r.value === false && p();
  });
  const q = xe();
  return Object.assign(q.proxy, { poll: () => {
    d == null ? void 0 : d();
  }, trigger: v, stop: y, reset: u, resume: g, setIndex: x, updateScrollTarget: w }), () => {
    const B = ca(t.default, []);
    return b.value === true && B[e.reverse === false ? "push" : "unshift"](h("div", { ref: a, class: c.value }, Pe(t.loading))), h("div", { class: "q-infinite-scroll", ref: i }, B);
  };
} });
ge({ name: "QInnerLoading", props: { ...rt, ...to, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), { transitionProps: o, transitionStyle: i } = Ql(e), a = m(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (r.value === true ? " q-inner-loading--dark" : "")), l = m(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function s() {
    const c = [h(Tn, { size: e.size, color: e.color })];
    return e.label !== void 0 && c.push(h("div", { class: l.value, style: e.labelStyle }, [e.label])), c;
  }
  function d() {
    return e.showing === true ? h("div", { class: a.value, style: i.value }, t.default !== void 0 ? t.default() : s()) : null;
  }
  return () => h($t, o.value, d);
} });
var kf = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Tl = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, Ug = Object.keys(Tl);
Ug.forEach((e) => {
  Tl[e].regex = new RegExp(Tl[e].pattern);
});
var U_ = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Ug.join("") + "])|(.)", "g"), Mf = /[.*+?^${}()|[\]\\]/g, Vt = "", Q_ = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function K_(e, t, n, r) {
  let o, i, a, l, s, d;
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
    if (R < o.length) return o.slice(-R);
    let D = "", $ = o;
    const M = $.indexOf(Vt);
    if (M !== -1) {
      for (let A = R - $.length; A > 0; A--) D += Vt;
      $ = $.slice(0, M) + D + $.slice(M);
    }
    return $;
  }
  function y() {
    if (c.value = e.mask !== void 0 && e.mask.length !== 0 && v(), c.value === false) {
      l = void 0, o = "", i = "";
      return;
    }
    const R = kf[e.mask] === void 0 ? e.mask : kf[e.mask], D = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", $ = D.replace(Mf, "\\$&"), M = [], A = [], T = [];
    let z = e.reverseFillMask === true, U = "", j = "";
    R.replace(U_, (Y, L, ne, G, be) => {
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
    }, o = T.map((Y) => typeof Y == "string" ? Y : Vt).join(""), i = o.split(Vt).join(D);
  }
  function w(R, D, $) {
    const M = r.value, A = M.selectionEnd, T = M.value.length - A, z = B(R);
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
        for (let L = s; L <= Y && L < ye; L++) o[L] !== Vt && Y++;
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
        const ye = Math.max(0, o.indexOf(Vt), Math.min(U.length, A) - 1);
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
    D = Math.max(0, o.indexOf(Vt), Math.min(M.length, D)), s = D, R.setSelectionRange(D, $, "forward");
  }
  const _ = { left(R, D) {
    const $ = o.slice(D - 1).indexOf(Vt) === -1;
    let M = Math.max(0, D - 1);
    for (; M >= 0; M--) if (o[M] === Vt) {
      D = M, $ === true && D++;
      break;
    }
    if (M < 0 && o[D] !== void 0 && o[D] !== Vt) return _.right(R, 0);
    D >= 0 && R.setSelectionRange(D, D, "backward");
  }, right(R, D) {
    const $ = R.value.length;
    let M = Math.min($, D + 1);
    for (; M <= $; M++) if (o[M] === Vt) {
      D = M;
      break;
    } else o[M - 1] === Vt && (D = M);
    if (M > $ && o[D - 1] !== void 0 && o[D - 1] !== Vt) return _.left(R, $);
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
    if (t("keydown", R), vo(R) === true || R.altKey === true) return;
    const D = r.value, $ = D.selectionStart, M = D.selectionEnd;
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
    const D = a, $ = o.indexOf(Vt);
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
var W_ = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Y_ = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, G_ = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, X_ = /[a-z0-9_ -]$/i;
function Qg(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? X_.test(n.data) === false : W_.test(n.data) === true || Y_.test(n.data) === true || G_.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var Kg = ge({ name: "QInput", inheritAttrs: false, props: { ...Xl, ...Q_, ...kn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...Jl, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = {};
  let a = NaN, l, s, d = null, c;
  const f = H(null), v = Cc(e), { innerValue: u, hasMask: g, moveCursorForPaste: y, updateMaskValue: w, onMaskedKeydown: x, onMaskedClick: _ } = K_(e, t, U, f), p = jg(e, true), b = m(() => uo(u.value)), C = Qg(T), q = Zl({ changeEvent: true }), B = m(() => e.type === "textarea" || e.autogrow === true), V = m(() => B.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), R = m(() => {
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
    Xo(() => {
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
        const ne = L.parentNode.style, { scrollTop: G } = L, { overflowY: be, maxHeight: O } = o.platform.is.firefox === true ? {} : window.getComputedStyle(L), P = be !== void 0 && be !== "scroll";
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
  }), Object.assign(q, { innerValue: u, fieldClass: m(() => `q-${B.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: m(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: U, hasValue: b, floatingLabel: m(() => b.value === true && (e.type !== "number" || isNaN(u.value) === false) || uo(e.displayValue)), getControl: () => h(B.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...D.value, ...R.value, ...e.type !== "file" ? { value: ye() } : p.value }), getShadowControl: () => h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (B.value === true ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, ye()), h("span", e.shadowText)]) });
  const Y = es(q);
  return Object.assign(r, { focus: $, select: M, getNativeElement: () => f.value }), It(r, "nativeEl", () => f.value), Y;
} }), qf = { threshold: 0, root: null, rootMargin: "0px" };
function Ef(e, t, n) {
  var _a3;
  let r, o, i;
  typeof n == "function" ? (r = n, o = qf, i = t.cfg === void 0) : (r = n.handler, o = Object.assign({}, qf, n.cfg), i = t.cfg === void 0 || An(t.cfg, o) === false), t.handler !== r && (t.handler = r), i === true && (t.cfg = o, (_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), t.observer = new IntersectionObserver(([a]) => {
    if (typeof t.handler == "function") {
      if (a.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(a, t.observer) === false || t.once === true && a.isIntersecting === true) && Wg(e);
    }
  }, o), t.observer.observe(e));
}
function Wg(e) {
  var _a3;
  const t = e.__qvisible;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.unobserve(e), delete e.__qvisible);
}
var J_ = Vn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const r = { once: t.once === true };
  Ef(e, r, n), e.__qvisible = r;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Ef(e, n, t.value);
}, beforeUnmount: Wg });
ge({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const r = H(un.value === true ? e.ssrPrerender : false), o = m(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), i = m(() => e.disable !== true && (un.value !== true || e.once !== true || e.ssrPrerender !== true)), a = m(() => [[J_, o.value, void 0, { once: e.once }]]), l = m(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(c) {
    r.value !== c.isIntersecting && (r.value = c.isIntersecting, e.onVisibility !== void 0 && n("visibility", r.value));
  }
  function d() {
    if (r.value === true) return [h("div", { key: "content", style: l.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [h("div", { key: "hidden", style: l.value }, t.hidden())];
  }
  return () => {
    const c = e.transition ? [h($t, { name: "q-transition--" + e.transition }, d)] : d();
    return Sn(e.tag, { class: "q-intersection" }, c, "main", i.value, () => a.value);
  };
} });
var Z_ = ["ul", "ol"], Yg = ge({ name: "QList", props: { ...rt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), o = m(() => Z_.includes(e.tag) ? null : "list"), i = m(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (r.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => h(e.tag, { class: i.value, role: o.value }, Pe(t.default));
} }), Af = [34, 37, 40, 33, 39, 38], ew = Object.keys(Bc);
ge({ name: "QKnob", props: { ...kn, ...Bc, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = H(e.modelValue), a = H(false), l = m(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), s = m(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let d;
  function c() {
    i.value = e.modelValue === null ? l.value : vt(e.modelValue, l.value, s.value), $(true);
  }
  me(() => `${e.modelValue}|${l.value}|${s.value}`, c), c();
  const f = m(() => e.disable === false && e.readonly === false), v = m(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), u = m(() => (String(e.step).trim().split(".")[1] || "").length), g = m(() => e.step === 0 ? 1 : e.step), y = m(() => e.instantFeedback === true || a.value === true), w = o.platform.is.mobile === true ? m(() => f.value === true ? { onClick: B } : {}) : m(() => f.value === true ? { onMousedown: q, onClick: B, onKeydown: V, onKeyup: D } : {}), x = m(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), _ = m(() => {
    const T = {};
    return ew.forEach((z) => {
      T[z] = e[z];
    }), T;
  });
  function p(T) {
    T.isFinal ? (R(T.evt, true), a.value = false) : (T.isFirst && (C(), a.value = true), R(T.evt));
  }
  const b = m(() => [[wn, p, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    const { top: T, left: z, width: U, height: j } = r.$el.getBoundingClientRect();
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
    U.top < d.top ? ie = d.left < U.left ? 90 - ie : 270 + ie : ie = d.left < U.left ? ie + 90 : 270 - ie, o.lang.rtl === true ? ie = fl(-ie - e.angle, 0, 360) : e.angle && (ie = fl(ie - e.angle, 0, 360)), e.reverse === true && (ie = 360 - ie);
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
    return f.value === true && e.name !== void 0 && (z.internal = A), Sn(cg, T, z, "knob", f.value, () => b.value);
  };
} });
var { passive: Lf } = ht, tw = ["both", "horizontal", "vertical"], Gg = ge({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => tw.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: mo }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let r = null, o, i;
  me(() => e.scrollTarget, () => {
    s(), l();
  });
  function a() {
    r == null ? void 0 : r();
    const f = Math.max(0, Ar(o)), v = Kl(o), u = { top: f - n.position.top, left: v - n.position.left };
    if (e.axis === "vertical" && u.top === 0 || e.axis === "horizontal" && u.left === 0) return;
    const g = Math.abs(u.top) >= Math.abs(u.left) ? u.top < 0 ? "up" : "down" : u.left < 0 ? "left" : "right";
    n.position = { top: f, left: v }, n.directionChanged = n.direction !== g, n.delta = u, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function l() {
    o = jn(i, e.scrollTarget), o.addEventListener("scroll", d, Lf), d(true);
  }
  function s() {
    o !== void 0 && (o.removeEventListener("scroll", d, Lf), o = void 0);
  }
  function d(f) {
    if (f === true || e.debounce === 0 || e.debounce === "0") a();
    else if (r === null) {
      const [v, u] = e.debounce ? [setTimeout(a, e.debounce), clearTimeout] : [requestAnimationFrame(a), cancelAnimationFrame];
      r = () => {
        u(v), r = null;
      };
    }
  }
  const { proxy: c } = xe();
  return me(() => c.$q.lang.rtl, a), st(() => {
    i = c.$el.parentNode, l();
  }), We(() => {
    r == null ? void 0 : r(), s();
  }), Object.assign(c, { trigger: d, getPosition: () => n }), Tt;
} }), nw = ge({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = H(null), i = H(r.screen.height), a = H(e.container === true ? 0 : r.screen.width), l = H({ position: 0, direction: "down", inflectionPoint: 0 }), s = H(0), d = H(un.value === true ? 0 : ja()), c = m(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = m(() => e.container === false ? { minHeight: r.screen.height + "px" } : null), v = m(() => d.value !== 0 ? { [r.lang.rtl === true ? "left" : "right"]: `${d.value}px` } : null), u = m(() => d.value !== 0 ? { [r.lang.rtl === true ? "right" : "left"]: 0, [r.lang.rtl === true ? "left" : "right"]: `-${d.value}px`, width: `calc(100% + ${d.value}px)` } : null);
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
  const p = { instances: {}, view: m(() => e.view), isContainer: m(() => e.container), rootRef: o, height: i, containerHeight: s, scrollbarWidth: d, totalWidth: m(() => a.value + d.value), rows: m(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Nn({ size: 0, offset: 0, space: false }), right: Nn({ size: 300, offset: 0, space: false }), footer: Nn({ size: 0, offset: 0, space: false }), left: Nn({ size: 300, offset: 0, space: false }), scroll: l, animate() {
    _ !== null ? clearTimeout(_) : document.body.classList.add("q-body--layout-animate"), _ = setTimeout(() => {
      _ = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, C, q) {
    p[b][C] = q;
  } };
  if (_n(ho, p), ja() > 0) {
    let b = function() {
      B = null, V.classList.remove("hide-scrollbar");
    }, C = function() {
      if (B === null) {
        if (V.scrollHeight > r.screen.height) return;
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
    const b = At(t.default, [h(Gg, { onScroll: g }), h(lo, { onResize: y })]), C = h("div", { class: c.value, style: f.value, ref: e.container === true ? void 0 : o, tabindex: -1 }, b);
    return e.container === true ? h("div", { class: "q-layout-container overflow-hidden", ref: o }, [h(lo, { onResize: w }), h("div", { class: "absolute-full", style: v.value }, [h("div", { class: "scroll", style: u.value }, [C])])]) : C;
  };
} }), rw = ["horizontal", "vertical", "cell", "none"], ow = ge({ name: "QMarkupTable", props: { ...rt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => rw.includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), o = m(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (r.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => h("div", { class: o.value }, [h("table", { class: "q-table" }, Pe(t.default))]);
} });
ge({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = hg();
  return () => {
    if (n.value === true) {
      const i = Pe(t.default);
      return i === void 0 ? i : i.length > 1 ? h(e.tag, {}, i) : i[0];
    }
    const r = { class: "q-no-ssr-placeholder" }, o = Pe(t.placeholder);
    if (o !== void 0) return o.length > 1 ? h(e.tag, r, o) : o[0];
    if (e.placeholder !== void 0) return h(e.tag, r, e.placeholder);
  };
} });
var iw = () => h("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [h("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), h("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), aw = ge({ name: "QRadio", props: { ...rt, ...sr, ...kn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), o = ot(e, r.$q), i = ur(e, rg), a = H(null), { refocusTargetEl: l, refocusTarget: s } = ng(e, a), d = m(() => Je(e.modelValue) === Je(e.val)), c = m(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (o.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = m(() => {
    const b = e.color !== void 0 && (e.keepColor === true || d.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${d.value === true ? "truthy" : "falsy"}${b}`;
  }), v = m(() => (d.value === true ? e.checkedIcon : e.uncheckedIcon) || null), u = m(() => e.disable === true ? -1 : e.tabindex || 0), g = m(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": d.value === true, "^checked": d.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), y = Vr(g);
  function w(b) {
    b !== void 0 && (Ke(b), s(b)), e.disable !== true && d.value !== true && n("update:modelValue", e.val, b);
  }
  function x(b) {
    (b.keyCode === 13 || b.keyCode === 32) && Ke(b);
  }
  function _(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(r, { set: w });
  const p = iw();
  return () => {
    const b = v.value !== null ? [h("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [h(tt, { class: "q-radio__icon", name: v.value })])] : [p];
    e.disable !== true && y(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const C = [h("div", { class: f.value, style: i.value, "aria-hidden": "true" }, b)];
    l.value !== null && C.push(l.value);
    const q = e.label !== void 0 ? At(t.default, [e.label]) : Pe(t.default);
    return q !== void 0 && C.push(h("div", { class: "q-radio__label q-anchor--skip" }, q)), h("div", { ref: a, class: c.value, tabindex: u.value, role: "radio", "aria-label": e.label, "aria-checked": d.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: x, onKeyup: _ }, C);
  };
} }), lw = ge({ name: "QToggle", props: { ...og, icon: String, iconColor: String }, emits: ig, setup(e) {
  function t(n, r) {
    const o = m(() => (n.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), i = m(() => n.value === true ? e.iconColor : null);
    return () => [h("div", { class: "q-toggle__track" }), h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, o.value !== void 0 ? [h(tt, { name: o.value, color: i.value })] : void 0)];
  }
  return ag("toggle", t);
} }), Xg = { radio: aw, checkbox: $i, toggle: lw }, sw = Object.keys(Xg);
function Fs(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r[n];
}
var uw = ge({ name: "QOptionGroup", props: { ...rt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Ot), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => sw.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: r } } = xe(), o = Array.isArray(e.modelValue);
  e.type === "radio" ? o === true && console.error("q-option-group: model should not be array") : o === false && console.error("q-option-group: model should be array in your case");
  const i = ot(e, r), a = m(() => Xg[e.type]), l = m(() => Fs(e.optionValue, "value")), s = m(() => Fs(e.optionLabel, "label")), d = m(() => Fs(e.optionDisable, "disable")), c = m(() => e.options.map((g) => ({ val: l.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || d.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? i.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = m(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), v = m(() => {
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
  const { proxy: { $q: n } } = xe(), r = Lt(ho, ut);
  if (r === ut) return console.error("QPage needs to be a deep child of QLayout"), ut;
  if (Lt(Sm, ut) === ut) return console.error("QPage needs to be child of QPageContainer"), ut;
  const i = m(() => {
    const l = (r.header.space === true ? r.header.size : 0) + (r.footer.space === true ? r.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const s = r.isContainer.value === true ? r.containerHeight.value : n.screen.height;
      return e.styleFn(l, s);
    }
    return { minHeight: r.isContainer.value === true ? r.containerHeight.value - l + "px" : n.screen.height === 0 ? l !== 0 ? `calc(100vh - ${l}px)` : "100vh" : n.screen.height - l + "px" };
  }), a = m(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => h("main", { class: a.value, style: i.value }, Pe(t.default));
} });
var cw = ge({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = xe(), r = Lt(ho, ut);
  if (r === ut) return console.error("QPageContainer needs to be child of QLayout"), ut;
  _n(Sm, true);
  const o = m(() => {
    const i = {};
    return r.header.space === true && (i.paddingTop = `${r.header.size}px`), r.right.space === true && (i[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${r.right.size}px`), r.footer.space === true && (i.paddingBottom = `${r.footer.size}px`), r.left.space === true && (i[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${r.left.size}px`), i;
  });
  return () => h("div", { class: "q-page-container", style: o.value }, Pe(t.default));
} }), Ou = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Jg() {
  const { props: e, proxy: { $q: t } } = xe(), n = Lt(ho, ut);
  if (n === ut) return console.error("QPageSticky needs to be child of QLayout"), ut;
  const r = m(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), o = m(() => n.header.offset), i = m(() => n.right.offset), a = m(() => n.footer.offset), l = m(() => n.left.offset), s = m(() => {
    let f = 0, v = 0;
    const u = r.value, g = t.lang.rtl === true ? -1 : 1;
    u.top === true && o.value !== 0 ? v = `${o.value}px` : u.bottom === true && a.value !== 0 && (v = `${-a.value}px`), u.left === true && l.value !== 0 ? f = `${g * l.value}px` : u.right === true && i.value !== 0 && (f = `${-g * i.value}px`);
    const y = { transform: `translate(${f}, ${v})` };
    return e.offset && (y.margin = `${e.offset[1]}px ${e.offset[0]}px`), u.vertical === true ? (l.value !== 0 && (y[t.lang.rtl === true ? "right" : "left"] = `${l.value}px`), i.value !== 0 && (y[t.lang.rtl === true ? "left" : "right"] = `${i.value}px`)) : u.horizontal === true && (o.value !== 0 && (y.top = `${o.value}px`), a.value !== 0 && (y.bottom = `${a.value}px`)), y;
  }), d = m(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function c(f) {
    const v = Pe(f.default);
    return h("div", { class: d.value, style: s.value }, e.expand === true ? v : [h("div", v)]);
  }
  return { $layout: n, getStickyContent: c };
}
ge({ name: "QPageScroller", props: { ...Ou, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Ou.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), { $layout: o, getStickyContent: i } = Jg(), a = H(null);
  let l;
  const s = m(() => o.height.value - (o.isContainer.value === true ? o.containerHeight.value : r.screen.height));
  function d() {
    return e.reverse === true ? s.value - o.scroll.value.position > e.scrollOffset : o.scroll.value.position > e.scrollOffset;
  }
  const c = H(d());
  function f() {
    const w = d();
    c.value !== w && (c.value = w);
  }
  function v() {
    e.reverse === true ? l === void 0 && (l = me(s, f)) : u();
  }
  me(o.scroll, f), me(() => e.reverse, v);
  function u() {
    l !== void 0 && (l(), l = void 0);
  }
  function g(w) {
    const x = jn(o.isContainer.value === true ? a.value : o.rootRef.value);
    $o(x, e.reverse === true ? o.height.value : 0, e.duration), n("click", w);
  }
  function y() {
    return c.value === true ? h("div", { ref: a, class: "q-page-scroller", onClick: g }, i(t)) : null;
  }
  return v(), We(u), () => h($t, { name: "q-transition--fade" }, y);
} });
ge({ name: "QPageSticky", props: Ou, setup(e, { slots: t }) {
  const { getStickyContent: n } = Jg();
  return () => n(t);
} });
function La(e, t) {
  return [true, false].includes(e) ? e : t;
}
ge({ name: "QPagination", props: { ...rt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || $m.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, o = ot(e, r), i = m(() => parseInt(e.min, 10)), a = m(() => parseInt(e.max, 10)), l = m(() => parseInt(e.maxPages, 10)), s = m(() => g.value + " / " + a.value), d = m(() => La(e.boundaryLinks, e.input)), c = m(() => La(e.boundaryNumbers, !e.input)), f = m(() => La(e.directionLinks, e.input)), v = m(() => La(e.ellipses, !e.input)), u = H(null), g = m({ get: () => e.modelValue, set: (A) => {
    if (A = parseInt(A, 10), e.disable || isNaN(A)) return;
    const T = vt(A, i.value, a.value);
    e.modelValue !== T && t("update:modelValue", T);
  } });
  me(() => `${i.value}|${a.value}`, () => {
    g.value = e.modelValue;
  });
  const y = m(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = m(() => e.gutter in ml ? `${ml[e.gutter]}px` : e.gutter || null), x = m(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), _ = m(() => {
    const A = [e.iconFirst || r.iconSet.pagination.first, e.iconPrev || r.iconSet.pagination.prev, e.iconNext || r.iconSet.pagination.next, e.iconLast || r.iconSet.pagination.last];
    return r.lang.rtl === true ? A.reverse() : A;
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
    if (d.value === true && (A.push(M({ key: "bls", disable: e.disable || e.modelValue <= i.value, icon: _.value[0], "aria-label": r.lang.pagination.first }, i.value)), T.unshift(M({ key: "ble", disable: e.disable || e.modelValue >= a.value, icon: _.value[3], "aria-label": r.lang.pagination.last }, a.value))), f.value === true && (A.push(M({ key: "bdp", disable: e.disable || e.modelValue <= i.value, icon: _.value[1], "aria-label": r.lang.pagination.prev }, e.modelValue - 1)), T.unshift(M({ key: "bdn", disable: e.disable || e.modelValue >= a.value, icon: _.value[2], "aria-label": r.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
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
    return h("div", { class: y.value, ...p.value }, [h("div", { class: "q-pagination__content row no-wrap items-center", style: x.value }, [...A, e.input === true ? h(Kg, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: u.value, disable: e.disable, dark: o.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: i.value, max: a.value, ...$.value }) : h("div", { class: "q-pagination__middle row justify-center" }, z), ...T])]);
  };
} });
function $s(e) {
  let t = false, n, r;
  function o() {
    r = arguments, t !== true && (t = true, n = window.requestAnimationFrame(() => {
      e.apply(this, r), r = void 0, t = false;
    }));
  }
  return o.cancel = () => {
    window.cancelAnimationFrame(n), t = false;
  }, o;
}
var { passive: Ba } = ht;
ge({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: mo, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = H(0), o = H(null), i = H(null), a = H(null);
  let l, s, d, c, f, v;
  me(() => e.height, () => {
    l === true && g();
  }), me(() => e.scrollTarget, () => {
    l === true && (_(), x());
  });
  let u = (p) => {
    r.value = p, e.onScroll !== void 0 && n("scroll", p);
  };
  function g() {
    let p, b, C;
    v === window ? (p = 0, C = b = window.innerHeight) : (p = hl(v).top, b = zo(v), C = p + b);
    const q = hl(o.value).top, B = q + e.height;
    if (f !== void 0 || B > p && q < C) {
      const V = (C - q) / (e.height + b);
      y((d - e.height) * V * e.speed), u(V);
    }
  }
  let y = (p) => {
    s.style.transform = `translate3d(-50%,${Math.round(p)}px,0)`;
  };
  function w() {
    d = s.naturalHeight || s.videoHeight || zo(s), l === true && g();
  }
  function x() {
    l = true, v = jn(o.value, e.scrollTarget), v.addEventListener("scroll", g, Ba), window.addEventListener("resize", c, Ba), g();
  }
  function _() {
    l === true && (l = false, v.removeEventListener("scroll", g, Ba), window.removeEventListener("resize", c, Ba), v = void 0, y.cancel(), u.cancel(), c.cancel());
  }
  return st(() => {
    y = $s(y), u = $s(u), c = $s(w), s = t.media !== void 0 ? i.value.children[0] : a.value, s.onload = s.onloadstart = s.loadedmetadata = w, w(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((p) => {
      (p[0].isIntersecting === true ? x : _)();
    }), f.observe(o.value)) : x();
  }), We(() => {
    _(), f == null ? void 0 : f.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => h("div", { ref: o, class: "q-parallax", style: { height: `${e.height}px` } }, [h("div", { ref: i, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [h("img", { ref: a, src: e.src })]), h("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: r.value }) : Pe(t.default))]);
} });
function Ii(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (t.has(e)) return t.get(e);
  const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    const r = e.valueOf();
    if (Object(r) !== r) {
      const o = new e.constructor(r);
      return t.set(e, o), o;
    }
  }
  return t.set(e, n), e instanceof Set ? e.forEach((r) => {
    n.add(Ii(r, t));
  }) : e instanceof Map && e.forEach((r, o) => {
    n.set(o, Ii(r, t));
  }), Object.assign(n, ...Object.keys(e).map((r) => ({ [r]: Ii(e[r], t) })));
}
ge({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = H(null), a = H(""), l = H("");
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
    return e.title && b.unshift(h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [h(et, { flat: true, color: e.color, label: e.labelCancel || o.lang.label.cancel, onClick: f }), h(et, { flat: true, color: e.color, label: e.labelSet || o.lang.label.set, onClick: c })])), b;
  }
  return Object.assign(r, { set: c, cancel: f, show(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.show(b);
  }, hide(b) {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.hide(b);
  }, updatePosition: v }), () => {
    if (e.disable !== true) return h(Wl, { ref: i, class: "q-popup-edit", cover: e.cover, onBeforeShow: y, onShow: w, onBeforeHide: x, onHide: _, onEscapeKey: f }, p);
  };
} });
ge({ name: "QPopupProxy", props: { ...Hm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: r }) {
  const { proxy: o } = xe(), { $q: i } = o, a = H(false), l = H(null), s = m(() => parseInt(e.breakpoint, 10)), { canShow: d } = yc({ showing: a });
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
  return Object.assign(o, { show(y) {
    d(y) === true && l.value.show(y);
  }, hide(y) {
    l.value.hide(y);
  }, toggle(y) {
    l.value.toggle(y);
  } }), It(o, "currentComponent", () => ({ type: f.value, ref: l.value })), () => {
    const y = { ref: l, ...v.value, ...r, onShow: u, onHide: g };
    let w;
    return f.value === "dialog" ? w = Gl : (w = Wl, Object.assign(y, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), h(w, y, t.default);
  };
} });
var dw = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Bf(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var fw = ge({ name: "QLinearProgress", props: { ...rt, ...sr, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = xe(), r = ot(e, n.$q), o = ur(e, dw), i = m(() => e.indeterminate === true || e.query === true), a = m(() => e.reverse !== e.query), l = m(() => ({ ...o.value !== null ? o.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = m(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), d = m(() => Bf(e.buffer !== void 0 ? e.buffer : 1, a.value, n.$q)), c = m(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = m(() => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${r.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), v = m(() => Bf(i.value === true ? 1 : e.value, a.value, n.$q)), u = m(() => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${i.value === true ? "in" : ""}determinate`), g = m(() => ({ width: `${e.value * 100}%` })), y = m(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${c.value}`);
  return () => {
    const w = [h("div", { class: f.value, style: d.value }), h("div", { class: u.value, style: v.value })];
    return e.stripe === true && i.value === false && w.push(h("div", { class: y.value, style: g.value })), h("div", { class: s.value, style: l.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, At(t.default, w));
  };
} }), Rf = 40, Is = 20;
ge({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: mo }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = H("pull"), a = H(0), l = H(false), s = H(-40), d = H(false), c = H({}), f = m(() => ({ opacity: a.value, transform: `translateY(${s.value}px) rotate(${a.value * 360}deg)` })), v = m(() => "q-pull-to-refresh__puller row flex-center" + (d.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function u(C) {
    if (C.isFinal === true) {
      l.value === true && (l.value = false, i.value === "pulled" ? (i.value = "refreshing", p({ pos: Is }), w()) : i.value === "pull" && p({ pos: -40, ratio: 0 }));
      return;
    }
    if (d.value === true || i.value === "refreshing") return false;
    if (C.isFirst === true) {
      if (Ar(x) !== 0 || C.direction !== "down") return l.value === true && (l.value = false, i.value = "pull", p({ pos: -40, ratio: 0 })), false;
      l.value = true;
      const { top: V, left: R } = r.$el.getBoundingClientRect();
      c.value = { top: V + "px", left: R + "px", width: window.getComputedStyle(r.$el).getPropertyValue("width") };
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
    x = jn(r.$el, e.scrollTarget);
  }
  return me(() => e.scrollTarget, b), st(b), We(() => {
    _ !== null && clearTimeout(_);
  }), Object.assign(r, { trigger: w, updateScrollTarget: b }), () => {
    const C = [h("div", { class: y.value }, Pe(t.default)), h("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: c.value }, [h("div", { class: v.value, style: f.value }, [i.value !== "refreshing" ? h(tt, { name: e.icon || o.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : h(Tn, { size: "24px", color: e.color })])])];
    return Sn("div", { class: "q-pull-to-refresh" }, C, "main", e.disable === false, () => g.value);
  };
} });
var hr = { MIN: 0, RANGE: 1, MAX: 2 };
ge({ name: "QRange", props: { ...dg, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: fg, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = xe(), { state: r, methods: o } = vg({ updateValue: V, updatePosition: D, getDragging: R, formAttrs: m(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), i = H(null), a = H(0), l = H(0), s = H({ min: 0, max: 0 });
  function d() {
    s.value.min = e.modelValue.min === null ? r.innerMin.value : vt(e.modelValue.min, r.innerMin.value, r.innerMax.value), s.value.max = e.modelValue.max === null ? r.innerMax.value : vt(e.modelValue.max, r.innerMin.value, r.innerMax.value);
  }
  me(() => `${e.modelValue.min}|${e.modelValue.max}|${r.innerMin.value}|${r.innerMax.value}`, d), d();
  const c = m(() => o.convertModelToRatio(s.value.min)), f = m(() => o.convertModelToRatio(s.value.max)), v = m(() => r.active.value === true ? a.value : c.value), u = m(() => r.active.value === true ? l.value : f.value), g = m(() => {
    const M = { [r.positionProp.value]: `${100 * v.value}%`, [r.sizeProp.value]: `${100 * (u.value - v.value)}%` };
    return e.selectionImg !== void 0 && (M.backgroundImage = `url(${e.selectionImg}) !important`), M;
  }), y = m(() => {
    if (r.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: o.onMobileClick };
    const M = { onMousedown: o.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(M, { onFocus: () => {
      r.focus.value = "both";
    }, onBlur: o.onBlur, onKeydown: $, onKeyup: o.onKeyup }), M;
  });
  function w(M) {
    return n.platform.is.mobile !== true && r.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      r.focus.value = M;
    }, onBlur: o.onBlur, onKeydown: $, onKeyup: o.onKeyup } : {};
  }
  const x = m(() => e.dragOnlyRange !== true ? r.tabindex.value : null), _ = m(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? r.tabindex.value : null), p = H(null), b = m(() => w("min")), C = o.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: p, key: "tmin", ...b.value, tabindex: x.value }), ratio: v, label: m(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min), thumbColor: m(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: m(() => e.leftLabelColor || e.labelColor), labelTextColor: m(() => e.leftLabelTextColor || e.labelTextColor) }), q = m(() => w("max")), B = o.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...q.value, key: "tmax", tabindex: x.value }), ratio: u, label: m(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max), thumbColor: m(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: m(() => e.rightLabelColor || e.labelColor), labelTextColor: m(() => e.rightLabelTextColor || e.labelTextColor) });
  function V(M) {
    (s.value.min !== e.modelValue.min || s.value.max !== e.modelValue.max) && t("update:modelValue", { ...s.value }), M === true && t("change", { ...s.value });
  }
  function R(M) {
    const { left: A, top: T, width: z, height: U } = i.value.getBoundingClientRect(), j = e.dragOnlyRange === true ? 0 : e.vertical === true ? p.value.offsetHeight / (2 * U) : p.value.offsetWidth / (2 * z), K = { left: A, top: T, width: z, height: U, valueMin: s.value.min, valueMax: s.value.max, ratioMin: c.value, ratioMax: f.value }, ie = o.getDraggingRatio(M, K);
    return e.dragOnlyRange !== true && ie < K.ratioMin + j ? K.type = hr.MIN : e.dragOnlyRange === true || ie < K.ratioMax - j ? e.dragRange === true || e.dragOnlyRange === true ? (K.type = hr.RANGE, Object.assign(K, { offsetRatio: ie, offsetModel: o.convertRatioToModel(ie), rangeValue: K.valueMax - K.valueMin, rangeRatio: K.ratioMax - K.ratioMin })) : K.type = K.ratioMax - ie < ie - K.ratioMin ? hr.MAX : hr.MIN : K.type = hr.MAX, K;
  }
  function D(M, A = r.dragging.value) {
    let T;
    const z = o.getDraggingRatio(M, A), U = o.convertRatioToModel(z);
    switch (A.type) {
      case hr.MIN:
        z <= A.ratioMax ? (T = { minR: z, maxR: A.ratioMax, min: U, max: A.valueMax }, r.focus.value = "min") : (T = { minR: A.ratioMax, maxR: z, min: A.valueMax, max: U }, r.focus.value = "max");
        break;
      case hr.MAX:
        z >= A.ratioMin ? (T = { minR: A.ratioMin, maxR: z, min: A.valueMin, max: U }, r.focus.value = "max") : (T = { minR: z, maxR: A.ratioMin, min: U, max: A.valueMin }, r.focus.value = "min");
        break;
      case hr.RANGE:
        const j = z - A.offsetRatio, K = vt(A.ratioMin + j, r.innerMinRatio.value, r.innerMaxRatio.value - A.rangeRatio), ie = U - A.offsetModel, ye = vt(A.valueMin + ie, r.innerMin.value, r.innerMax.value - A.rangeValue);
        T = { minR: K, maxR: K + A.rangeRatio, min: r.roundValueFn.value(ye), max: r.roundValueFn.value(ye + A.rangeValue) }, r.focus.value = "both";
        break;
    }
    s.value = s.value.min === null || s.value.max === null ? { min: T.min || e.min, max: T.max || e.max } : { min: T.min, max: T.max }, e.snap !== true || e.step === 0 ? (a.value = T.minR, l.value = T.maxR) : (a.value = o.convertModelToRatio(s.value.min), l.value = o.convertModelToRatio(s.value.max));
  }
  function $(M) {
    if (Rc.includes(M.keyCode) === false) return;
    Ke(M);
    const A = ([34, 33].includes(M.keyCode) ? 10 : 1) * r.keyStep.value, T = ([34, 37, 40].includes(M.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * A;
    if (r.focus.value === "both") {
      const z = s.value.max - s.value.min, U = vt(r.roundValueFn.value(s.value.min + T), r.innerMin.value, r.innerMax.value - z);
      s.value = { min: U, max: r.roundValueFn.value(U + z) };
    } else {
      if (r.focus.value === false) return;
      {
        const z = r.focus.value;
        s.value = { ...s.value, [z]: vt(r.roundValueFn.value(s.value[z] + T), z === "min" ? r.innerMin.value : s.value.min, z === "max" ? r.innerMax.value : s.value.max) };
      }
    }
    V();
  }
  return () => {
    const M = o.getContent(g, _, y, (A) => {
      A.push(C(), B());
    });
    return h("div", { ref: i, class: "q-range " + r.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, M);
  };
} });
ge({ name: "QRating", props: { ...sr, ...kn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = ur(e), i = va(e), a = Vr(i), l = H(0);
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
      const R = l.value === 0 && e.modelValue >= V || l.value > 0 && l.value >= V, D = B === V && l.value < V, $ = l.value > 0 && (D === true ? C : e.modelValue) >= V && l.value < V, M = D === true ? V <= b.halfColorLen ? e.colorHalf[V - 1] : b.halfColor : b.selColor !== void 0 && R === true ? V <= b.selColorLen ? e.colorSelected[V - 1] : b.selColor : V <= b.colorLen ? e.color[V - 1] : b.color, A = (D === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (R === true || $ === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || r.iconSet.rating.icon;
      p.push({ name: (D === true ? V <= b.halfIconLen ? e.iconHalf[V - 1] : b.halfIcon : b.selIcon !== void 0 && (R === true || $ === true) ? V <= b.selIconLen ? e.iconSelected[V - 1] : b.selIcon : V <= b.iconLen ? e.icon[V - 1] : b.icon) || r.iconSet.rating.icon, attrs: { tabindex: q, role: "radio", "aria-checked": e.modelValue === V ? "true" : "false", "aria-label": v.value(V, A) }, iconClass: "q-rating__icon" + (R === true || D === true ? " q-rating__icon--active" : "") + ($ === true ? " q-rating__icon--exselected" : "") + (l.value === V ? " q-rating__icon--hovered" : "") + (M !== void 0 ? ` text-${M}` : "") });
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
  return fo(() => {
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
    }), e.name !== void 0 && e.disable !== true && a(p, "push"), h("div", { class: c.value, style: o.value, ...g.value }, p);
  };
} });
ge({ name: "QResponsive", props: Vc, setup(e, { slots: t }) {
  const n = Fc(e);
  return () => h("div", { class: "q-responsive" }, [h("div", { class: "q-responsive__filler overflow-hidden" }, [h("div", { style: n.value })]), h("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var vw = ge({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [h("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), h("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), hn(h("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), hn(h("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Pf = ["vertical", "horizontal"], Ns = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Df = { prevent: true, mouse: true, mouseAllDir: true }, Of = (e) => e >= 250 ? 50 : Math.ceil(e / 5), hw = ge({ name: "QScrollArea", props: { ...rt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const r = H(false), o = H(false), i = H(false), a = { vertical: H(0), horizontal: H(0) }, l = { vertical: { ref: H(null), position: H(0), size: H(0) }, horizontal: { ref: H(null), position: H(0), size: H(0) } }, { proxy: s } = xe(), d = ot(e, s.$q);
  let c = null, f;
  const v = H(null), u = m(() => "q-scrollarea" + (d.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(a, { verticalInner: m(() => a.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: m(() => a.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), l.vertical.percentage = m(() => {
    const T = l.vertical.size.value - a.vertical.value;
    if (T <= 0) return 0;
    const z = vt(l.vertical.position.value / T, 0, 1);
    return Math.round(z * 1e4) / 1e4;
  }), l.vertical.thumbHidden = m(() => (e.visible === null ? i.value : e.visible) !== true && r.value === false && o.value === false || l.vertical.size.value <= a.vertical.value + 1), l.vertical.thumbStart = m(() => e.verticalOffset[0] + l.vertical.percentage.value * (a.verticalInner.value - l.vertical.thumbSize.value)), l.vertical.thumbSize = m(() => Math.round(vt(a.verticalInner.value * a.verticalInner.value / l.vertical.size.value, Of(a.verticalInner.value), a.verticalInner.value))), l.vertical.style = m(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${l.vertical.thumbStart.value}px`, height: `${l.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), l.vertical.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.vertical.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), l.horizontal.percentage = m(() => {
    const T = l.horizontal.size.value - a.horizontal.value;
    if (T <= 0) return 0;
    const z = vt(Math.abs(l.horizontal.position.value) / T, 0, 1);
    return Math.round(z * 1e4) / 1e4;
  }), l.horizontal.thumbHidden = m(() => (e.visible === null ? i.value : e.visible) !== true && r.value === false && o.value === false || l.horizontal.size.value <= a.horizontal.value + 1), l.horizontal.thumbStart = m(() => e.horizontalOffset[0] + l.horizontal.percentage.value * (a.horizontalInner.value - l.horizontal.thumbSize.value)), l.horizontal.thumbSize = m(() => Math.round(vt(a.horizontalInner.value * a.horizontalInner.value / l.horizontal.size.value, Of(a.horizontalInner.value), a.horizontalInner.value))), l.horizontal.style = m(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [s.$q.lang.rtl === true ? "right" : "left"]: `${l.horizontal.thumbStart.value}px`, width: `${l.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), l.horizontal.thumbClass = m(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.horizontal.barClass = m(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = m(() => l.vertical.thumbHidden.value === true && l.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function y() {
    const T = {};
    return Pf.forEach((z) => {
      const U = l[z];
      Object.assign(T, { [z + "Position"]: U.position.value, [z + "Percentage"]: U.percentage.value, [z + "Size"]: U.size.value, [z + "ContainerSize"]: a[z].value, [z + "ContainerInnerSize"]: a[z + "Inner"].value });
    }), T;
  }
  const w = Ko(() => {
    const T = y();
    T.ref = s, n("scroll", T);
  }, 0);
  function x(T, z, U) {
    if (Pf.includes(T) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (T === "vertical" ? $o : xs)(v.value, z, U);
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
      f = U.position.value, o.value = true;
    } else if (o.value !== true) return;
    T.isFinal === true && (o.value = false);
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
    r.value = true, c !== null && clearTimeout(c), c = setTimeout(() => {
      c = null, r.value = false;
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
  }), Dr(() => {
    if (M === null) return;
    const T = v.value;
    T !== null && (xs(T, M.left), $o(T, M.top));
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
  return () => h("div", { class: u.value, onMouseenter: D, onMouseleave: $ }, [h("div", { ref: v, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [h("div", { class: "q-scrollarea__content absolute", style: g.value }, At(t.default, [h(lo, { debounce: 0, onResize: b })])), h(Gg, { axis: "both", onScroll: p })]), h(lo, { debounce: 0, onResize: _ }), h(vw, { store: A, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), En = 1e3, mw = ["start", "center", "end", "start-force", "center-force", "end-force"], Zg = Array.prototype.filter, gw = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? Tt : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Zg.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const r = n[t];
    (r == null ? void 0 : r.dataset) && (r.dataset.qVsAnchor = "");
  }));
};
function Io(e, t) {
  return e + t;
}
function zs(e, t, n, r, o, i, a, l) {
  const s = e === window ? document.scrollingElement || document.documentElement : e, d = o === true ? "offsetWidth" : "offsetHeight", c = { scrollStart: 0, scrollViewSize: -a - l, scrollMaxSize: 0, offsetStart: -a, offsetEnd: -l };
  if (o === true ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft, c.scrollViewSize += s.clientWidth), c.scrollMaxSize = s.scrollWidth, i === true && (c.scrollStart = (ta === true ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop, c.scrollViewSize += s.clientHeight), c.scrollMaxSize = s.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (c.offsetStart += f[d]);
  if (r !== null) for (let f = r.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (c.offsetEnd += f[d]);
  if (t !== e) {
    const f = s.getBoundingClientRect(), v = t.getBoundingClientRect();
    o === true ? (c.offsetStart += v.left - f.left, c.offsetEnd -= v.width) : (c.offsetStart += v.top - f.top, c.offsetEnd -= v.height), e !== window && (c.offsetStart += c.scrollStart), c.offsetEnd += c.scrollMaxSize - c.offsetStart;
  }
  return c;
}
function Vf(e, t, n, r) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (r === true && (t = (ta === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (r === true && (t = (ta === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function oi(e, t, n, r) {
  if (n >= r) return 0;
  const o = t.length, i = Math.floor(n / En), a = Math.floor((r - 1) / En) + 1;
  let l = e.slice(i, a).reduce(Io, 0);
  return n % En !== 0 && (l -= t.slice(i * En, n).reduce(Io, 0)), r % En !== 0 && r !== o && (l -= t.slice(r, a * En).reduce(Io, 0)), l;
}
var e0 = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, t0 = Object.keys(e0), Vu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...e0 };
function n0({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: r }) {
  const o = xe(), { props: i, emit: a, proxy: l } = o, { $q: s } = l;
  let d, c, f, v = [], u;
  const g = H(0), y = H(0), w = H({}), x = H(null), _ = H(null), p = H(null), b = H({ from: 0, to: 0 }), C = m(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  r === void 0 && (r = m(() => i.virtualScrollItemSize));
  const q = m(() => r.value + ";" + i.virtualScrollHorizontal), B = m(() => q.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter);
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
    f !== G.scrollViewSize && U(G.scrollViewSize), M(ne, G, Math.min(e.value - 1, Math.max(0, parseInt(Y, 10) || 0)), 0, mw.indexOf(L) !== -1 ? L : c !== -1 && Y > c ? "end" : "start");
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
      M(Y, L, ne, L.scrollMaxSize - L.offsetEnd - v.reduce(Io, 0));
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
    })), gw(E, ne - k);
    const I = P !== void 0 ? u.slice(k, ne).reduce(Io, 0) : 0;
    if (ee === true) {
      const Z = F >= b.value.from && k <= b.value.to ? b.value.to : F;
      b.value = { from: k, to: Z }, g.value = oi(v, u, 0, k), y.value = oi(v, u, F, e.value), requestAnimationFrame(() => {
        b.value.to !== F && d === L.scrollStart && (b.value = { from: b.value.from, to: F }, y.value = oi(v, u, F, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (d !== L.scrollStart) return;
      ee === true && A(k);
      const Z = u.slice(k, ne).reduce(Io, 0), re = Z + L.offsetStart + g.value, W = re + u[ne];
      let fe = re + G;
      if (P !== void 0) {
        const ve = Z - I, ue = L.scrollStart + ve;
        fe = O !== true && ue < re && W < ue + L.scrollViewSize ? ue : P === "end" ? W - L.scrollViewSize : re - (P === "start" ? 0 : Math.round((L.scrollViewSize - u[ne]) / 2));
      }
      d = fe, Vf(Y, fe, i.virtualScrollHorizontal, s.lang.rtl), K(ne);
    });
  }
  function A(Y) {
    const L = p.value;
    if (L) {
      const ne = Zg.call(L.children, (k) => k.classList && k.classList.contains("q-virtual-scroll--skip") === false), G = ne.length, be = i.virtualScrollHorizontal === true ? (k) => k.getBoundingClientRect().width : (k) => k.offsetHeight;
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
    const ne = 1 * r.value;
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
    c = -1, d = void 0, g.value = oi(v, u, 0, b.value.from), y.value = oi(v, u, b.value.to, e.value), Y >= 0 ? (A(b.value.from), Qe(() => {
      D(Y);
    })) : ie();
  }
  function U(Y) {
    if (Y === void 0 && typeof window < "u") {
      const P = t();
      P != null && P.nodeType !== 8 && (Y = zs(P, n(), x.value, _.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = Y;
    const L = parseFloat(i.virtualScrollSliceRatioBefore) || 0, ne = parseFloat(i.virtualScrollSliceRatioAfter) || 0, G = 1 + L + ne, be = Y === void 0 || Y <= 0 ? 1 : Math.ceil(Y / r.value), O = Math.max(1, be, Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / G));
    w.value = { total: Math.ceil(O * G), start: Math.ceil(O * L), center: Math.ceil(O * (0.5 + L)), end: Math.ceil(O * (1 + L)), view: be };
  }
  function j(Y, L) {
    const ne = i.virtualScrollHorizontal === true ? "width" : "height", G = { ["--q-virtual-scroll-item-" + ne]: r.value + "px" };
    return [Y === "tbody" ? h(Y, { class: "q-virtual-scroll__padding", key: "before", ref: x }, [h("tr", [h("td", { style: { [ne]: `${g.value}px`, ...G }, colspan: C.value })])]) : h(Y, { class: "q-virtual-scroll__padding", key: "before", ref: x, style: { [ne]: `${g.value}px`, ...G } }), h(Y, { class: "q-virtual-scroll__content", key: "content", ref: p, tabindex: -1 }, L.flat()), Y === "tbody" ? h(Y, { class: "q-virtual-scroll__padding", key: "after", ref: _ }, [h("tr", [h("td", { style: { [ne]: `${y.value}px`, ...G }, colspan: C.value })])]) : h(Y, { class: "q-virtual-scroll__padding", key: "after", ref: _, style: { [ne]: `${y.value}px`, ...G } })];
  }
  function K(Y) {
    c !== Y && (i.onVirtualScroll !== void 0 && a("virtualScroll", { index: Y, from: b.value.from, to: b.value.to - 1, direction: Y < c ? "decrease" : "increase", ref: l }), c = Y);
  }
  U();
  const ie = Ko($, s.platform.is.ios === true ? 120 : 35);
  Ol(() => {
    U();
  });
  let ye = false;
  return Hn(() => {
    ye = true;
  }), Dr(() => {
    if (ye !== true) return;
    const Y = t();
    d !== void 0 && Y !== void 0 && Y !== null && Y.nodeType !== 8 ? Vf(Y, d, i.virtualScrollHorizontal, s.lang.rtl) : D(c);
  }), __QUASAR_SSR__ || We(() => {
    ie.cancel();
  }), Object.assign(l, { scrollTo: D, reset: V, refresh: R }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: U, onVirtualScrollEvt: ie, localResetVirtualScroll: z, padVirtualScroll: j, scrollTo: D, reset: V, refresh: R };
}
var Ff = (e) => ["add", "add-unique", "toggle"].includes(e), bw = ".*+?^${}()|[]\\", pw = Object.keys(Xl);
function Hs(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (r) => r !== null && typeof r == "object" && n in r ? r[n] : r;
}
var yw = ge({ name: "QSelect", inheritAttrs: false, props: { ...Vu, ...kn, ...Xl, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Ff }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Vu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...Jl, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = H(false), a = H(false), l = H(-1), s = H(""), d = H(false), c = H(false);
  let f = null, v = null, u, g, y, w = null, x, _, p, b;
  const C = H(null), q = H(null), B = H(null), V = H(null), R = H(null), D = Cc(e), $ = Qg(de), M = m(() => Array.isArray(e.options) ? e.options.length : 0), A = m(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: T, virtualScrollSliceSizeComputed: z, localResetVirtualScroll: U, padVirtualScroll: j, onVirtualScrollEvt: K, scrollTo: ie, setVirtualScrollSize: ye } = n0({ virtualScrollLength: M, getVirtualScrollTarget: Yt, getVirtualScrollEl: Mt, virtualScrollItemSizeComputed: A }), Y = Zl(), L = m(() => {
    const J = e.mapOptions === true && e.multiple !== true, Le = e.modelValue !== void 0 && (e.modelValue !== null || J === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Be = e.mapOptions === true && u !== void 0 ? u : [], nt = Le.map((pt) => ae(pt, Be));
      return e.modelValue === null && J === true ? nt.filter((pt) => pt !== null) : nt;
    }
    return Le;
  }), ne = m(() => {
    const J = {};
    return pw.forEach((Le) => {
      const Be = e[Le];
      Be !== void 0 && (J[Le] = Be);
    }), J;
  }), G = m(() => e.optionsDark === null ? Y.isDark.value : e.optionsDark), be = m(() => uo(L.value)), O = m(() => {
    let J = "q-field__input q-placeholder col";
    return e.hideSelected === true || L.value.length === 0 ? [J, e.inputClass] : (J += " q-field__input--padding", e.inputClass === void 0 ? J : [J, e.inputClass]);
  }), P = m(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), te = m(() => M.value === 0), k = m(() => L.value.map((J) => oe.value(J)).join(", ")), F = m(() => e.displayValue !== void 0 ? e.displayValue : k.value), ee = m(() => e.optionsHtml === true ? () => true : (J) => (J == null ? void 0 : J.html) === true), S = m(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || L.value.some(ee.value))), E = m(() => Y.focused.value === true ? e.tabindex : -1), I = m(() => {
    const J = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": `${Y.targetUid.value}_lb` };
    return l.value >= 0 && (J["aria-activedescendant"] = `${Y.targetUid.value}_${l.value}`), J;
  }), Z = m(() => ({ id: `${Y.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), re = m(() => L.value.map((J, Le) => ({ index: Le, opt: J, html: ee.value(J), selected: true, removeAtIndex: Me, toggleOption: Ne, tabindex: E.value }))), W = m(() => {
    if (M.value === 0) return [];
    const { from: J, to: Le } = T.value;
    return e.options.slice(J, Le).map((Be, nt) => {
      const pt = Q.value(Be) === true, mt = _e2(Be) === true, Ut = J + nt, Dt = { clickable: true, active: mt, activeClass: ue.value, manualFocus: true, focused: false, disable: pt, tabindex: -1, dense: e.optionsDense, dark: G.value, role: "option", "aria-selected": mt === true ? "true" : "false", id: `${Y.targetUid.value}_${Ut}`, onClick: () => {
        Ne(Be);
      } };
      return pt !== true && (l.value === Ut && (Dt.focused = true), o.platform.is.desktop === true && (Dt.onMousemove = () => {
        i.value === true && se(Ut);
      })), { index: Ut, opt: Be, html: ee.value(Be), label: oe.value(Be), selected: Dt.active, focused: Dt.focused, toggleOption: Ne, setOptionIndex: se, itemProps: Dt };
    });
  }), fe = m(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), ve = m(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), ue = m(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = m(() => Hs(e.optionValue, "value")), oe = m(() => Hs(e.optionLabel, "label")), Q = m(() => Hs(e.optionDisable, "disable")), le = m(() => L.value.map(ce.value)), we = m(() => {
    const J = { onInput: de, onChange: $, onKeydown: ct, onKeyup: Ae, onKeypress: Xe, onFocus: ke, onClick(Le) {
      g === true && St(Le);
    } };
    return J.onCompositionstart = J.onCompositionupdate = J.onCompositionend = $, J;
  });
  me(L, (J) => {
    u = J, e.useInput === true && e.fillInput === true && e.multiple !== true && Y.innerLoading.value !== true && (a.value !== true && i.value !== true || be.value !== true) && (y !== true && mn(), (a.value === true || i.value === true) && Oe(""));
  }, { immediate: true }), me(() => e.fillInput, mn), me(i, os), me(M, ib);
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
      e.fillInput === true && Ve(oe.value(J), true, true), n("update:modelValue", Be);
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
      Le !== true && (Ve(e.fillInput === true ? oe.value(J) : "", true, true), at()), (_a3 = q.value) == null ? void 0 : _a3.focus(), (L.value.length === 0 || An(ce.value(L.value[0]), Be) !== true) && n("update:modelValue", e.emitValue === true ? Be : J);
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
    if (o.platform.is.desktop !== true) return;
    const Le = J !== -1 && J < M.value ? J : -1;
    l.value !== Le && (l.value = Le);
  }
  function pe(J = 1, Le) {
    if (i.value === true) {
      let Be = l.value;
      do
        Be = fl(Be + J, -1, M.value - 1);
      while (Be !== -1 && Be !== l.value && Q.value(e.options[Be]) === true);
      l.value !== Be && (se(Be), ie(Be), Le !== true && e.useInput === true && e.fillInput === true && Se(Be >= 0 ? oe.value(e.options[Be]) : x, true));
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
        nt(ce) !== true && mt !== true && nt(oe) !== true && Oe(Le, true, () => pt(true));
      };
      pt();
    } else Y.clearValue(J);
  }
  function Xe(J) {
    n("keypress", J);
  }
  function ct(J) {
    if (n("keydown", J), vo(J) === true) return;
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
      const Ut = new RegExp("^" + p.split("").map((is) => bw.indexOf(is) !== -1 ? "\\" + is : is).join(".*"), "i");
      let Dt = l.value;
      if (mt === true || Dt < 0 || Ut.test(oe.value(e.options[Dt])) !== true) do
        Dt = fl(Dt + 1, -1, nt - 1);
      while (Dt !== l.value && (Q.value(e.options[Dt]) === true || Ut.test(oe.value(e.options[Dt])) !== true));
      l.value !== Dt && Qe(() => {
        se(Dt), ie(Dt), Dt >= 0 && e.useInput === true && e.fillInput === true && Se(oe.value(e.options[Dt]), true);
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
  function dr() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? re.value.map((J) => t["selected-item"](J)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? re.value.map((J, Le) => h(lg, { key: "option-" + Le, removable: Y.editable.value === true && Q.value(J.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      J.removeAtIndex(Le);
    } }, () => h("span", { class: "ellipsis", [J.html === true ? "innerHTML" : "textContent"]: oe.value(J.opt) }))) : [h("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: F.value })];
  }
  function cn() {
    if (te.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: s.value }) : void 0;
    const J = t.option !== void 0 ? t.option : (Be) => h(jo, { key: Be.index, ...Be.itemProps }, () => h(yn, () => h(Pu, () => h("span", { [Be.html === true ? "innerHTML" : "textContent"]: Be.label }))));
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
    Y.innerLoading.value === true ? n("filterAbort") : (Y.innerLoading.value = true, c.value = true), J !== "" && e.multiple !== true && L.value.length !== 0 && y !== true && J === oe.value(L.value[0]) && (J = "");
    const nt = setTimeout(() => {
      i.value === true && (i.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = nt, n("filter", J, (pt, mt) => {
      (Le === true || Y.focused.value === true) && w === nt && (clearTimeout(w), typeof pt == "function" && pt(), c.value = false, Qe(() => {
        Y.innerLoading.value = false, Y.editable.value === true && (Le === true ? i.value === true && at() : i.value === true ? os(true) : i.value = true), typeof mt == "function" && Qe(() => {
          mt(r);
        }), typeof Be == "function" && Qe(() => {
          Be(r);
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
    const J = [h(N_, { class: `col-auto ${Y.fieldClass.value}`, ...ne.value, for: Y.targetUid.value, dark: G.value, square: true, loading: c.value, itemAligned: false, filled: true, stackLabel: s.value.length !== 0, ...Y.splitAttrs.listeners.value, onFocus: N, onBlur: X }, { ...t, rawControl: () => Y.getControl(true), before: void 0, after: void 0 })];
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
    e.useInput === true && Ve(e.multiple !== true && e.fillInput === true && L.value.length !== 0 && oe.value(L.value[0]) || "", true, true);
  }
  function os(J) {
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
  function ib(J, Le) {
    i.value === true && Y.innerLoading.value === false && (U(-1, true), Qe(() => {
      i.value === true && Y.innerLoading.value === false && (J > Le ? U() : os(true));
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
    g = o.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || te.value === false : true), _ = o.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return fo(Jc), Vl(Yc), Jc(), We(() => {
    f !== null && clearTimeout(f), v !== null && clearTimeout(v);
  }), Object.assign(r, { showPopup: He, hidePopup: at, removeAtIndex: Te, add: Ie, toggleOption: Ne, getOptionIndex: () => l.value, setOptionIndex: se, moveOptionSelection: pe, filter: Oe, updateMenuPosition: Yc, updateInputValue: Ve, isOptionSelected: _e2, getEmittingOptionValue: Ce, isOptionDisabled: (...J) => Q.value.apply(null, J) === true, getOptionValue: (...J) => ce.value.apply(null, J), getOptionLabel: (...J) => oe.value.apply(null, J) }), Object.assign(Y, { innerValue: L, fieldClass: m(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: q, hasValue: be, showPopup: He, floatingLabel: m(() => e.hideSelected !== true && be.value === true || typeof s.value == "number" || s.value.length !== 0 || uo(e.displayValue)), getControlChild: () => {
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
    const Le = dr(), Be = J === true || a.value !== true || g !== true;
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
} }), _w = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], ww = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
ge({ name: "QSkeleton", props: { ...rt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => _w.includes(e), default: "rect" }, animation: { type: String, validator: (e) => ww.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), o = m(() => {
    const a = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: a[0], height: a[1] };
  }), i = m(() => `q-skeleton q-skeleton--${r.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => h(e.tag, { class: i.value, style: o.value }, Pe(t.default));
} });
var $f = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
ge({ name: "QSlideItem", props: { ...rt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = ot(e, o), { getCache: a } = ha(), l = H(null);
  let s = null, d = {}, c = {}, f = {};
  const v = m(() => o.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), u = m(() => "q-slide-item q-item-type overflow-hidden" + (i.value === true ? " q-slide-item--dark q-dark" : ""));
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
  return fo(() => {
    c = {}, f = {};
  }), We(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(r, { reset: g }), () => {
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
var xw = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
ge({ name: "QSpinnerAudio", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: xw });
} });
var Cw = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerBall", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: Cw });
} });
var Sw = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
ge({ name: "QSpinnerBars", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: Sw });
} });
var Tw = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
ge({ name: "QSpinnerBox", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Tw });
} });
var kw = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
ge({ name: "QSpinnerClock", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: kw });
} });
var Mw = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerComment", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Mw });
} });
var qw = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
ge({ name: "QSpinnerCube", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: qw });
} });
var Ew = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerDots", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: Ew });
} });
var Aw = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
ge({ name: "QSpinnerFacebook", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: Aw });
} });
var Lw = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ge({ name: "QSpinnerGears", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Lw });
} });
var Bw = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ge({ name: "QSpinnerGrid", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: Bw });
} });
var Rw = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
ge({ name: "QSpinnerHearts", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: Rw });
} });
var Pw = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
ge({ name: "QSpinnerHourglass", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Pw });
} });
var Dw = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
ge({ name: "QSpinnerInfinity", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Dw });
} });
var Ow = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
ge({ name: "QSpinnerIos", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: Ow });
} });
var Vw = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
ge({ name: "QSpinnerOrbit", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Vw });
} });
var Fw = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ge({ name: "QSpinnerOval", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: Fw });
} });
var $w = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
ge({ name: "QSpinnerPie", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: $w });
} });
var Iw = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerPuff", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: Iw });
} });
var Nw = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
ge({ name: "QSpinnerRadio", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: Nw });
} });
var zw = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ge({ name: "QSpinnerRings", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: zw });
} });
var Hw = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
ge({ name: "QSpinnerTail", props: Bt, setup(e) {
  const { cSize: t, classes: n } = Rt(e);
  return () => h("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: Hw });
} });
ge({ name: "QSplitter", props: { ...rt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: r } } = xe(), o = ot(e, r), i = H(null), a = { before: H(null), after: H(null) }, l = m(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (o.value === true ? " q-splitter--dark" : "")), s = m(() => e.horizontal === true ? "height" : "width"), d = m(() => e.reverse !== true ? "before" : "after"), c = m(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  const v = m(() => ({ [d.value]: { [s.value]: f(e.modelValue) } }));
  let u, g, y, w, x;
  function _(C) {
    if (C.isFirst === true) {
      const B = i.value.getBoundingClientRect()[s.value];
      u = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : B, y = Math.min(g, c.value[1], Math.max(c.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : r.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? B === 0 ? 0 : 100 / B : 1), i.value.classList.add("q-splitter--active");
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
var r0 = ge({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = xe(), r = H(null), o = m(() => e.stepper.modelValue === e.step.name), i = m(() => {
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
  }), d = m(() => e.step.prefix && (o.value === false || e.stepper.activeIcon === "none") && (a.value === false || e.stepper.errorIcon === "none") && (l.value === false || e.stepper.doneIcon === "none")), c = m(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (o.value === true) {
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
    if (o.value === true) {
      const x = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return x !== void 0 ? x : w;
    }
    return w !== void 0 ? w : i.value === false && l.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), v = m(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (a.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (d.value === true ? "prefix" : "icon") : "") + (o.value === true ? " q-stepper__tab--active" : "") + (l.value === true ? " q-stepper__tab--done" : "") + (s.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (i.value === true ? " q-stepper__tab--disabled" : "")), u = m(() => e.stepper.headerNav !== true ? false : s.value);
  function g() {
    var _a3;
    (_a3 = r.value) == null ? void 0 : _a3.focus(), o.value === false && e.goToPanel(e.step.name);
  }
  function y(w) {
    w.keyCode === 13 && o.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    const w = { class: v.value };
    s.value === true && (w.onClick = g, w.onKeyup = y, Object.assign(w, i.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    const x = [h("div", { class: "q-focus-helper", tabindex: -1, ref: r }), h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [h("span", { class: "row flex-center" }, [d.value === true ? e.step.prefix : h(tt, { name: c.value })])])];
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
  const { proxy: { $q: r } } = xe(), o = Lt(Cm, ut);
  if (o === ut) return console.error("QStep needs to be a child of QStepper"), ut;
  const { getCache: i } = ha(), a = H(null), l = m(() => o.value.modelValue === e.name), s = m(() => r.platform.is.ios !== true && r.platform.is.chrome === true || l.value !== true || o.value.vertical !== true ? {} : { onScroll(f) {
    const { target: v } = f;
    v.scrollTop > 0 && (v.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), d = m(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function c() {
    const f = o.value.vertical;
    return f === true && o.value.keepAlive === true ? h(Bh, o.value.keepAliveProps.value, l.value === true ? [h(o.value.needsUniqueKeepAliveWrapper.value === true ? i(d.value, () => ({ ...If, name: d.value })) : If, { key: d.value }, t.default)] : void 0) : f !== true || l.value === true ? o0(t) : void 0;
  }
  return () => h("div", { ref: a, class: "q-stepper__step", role: "tabpanel", ...s.value }, o.value.vertical === true ? [h(r0, { stepper: o.value, step: e, goToPanel: o.value.goToPanel }), o.value.animated === true ? h(Oc, c) : c()] : [c()]);
} });
var jw = /(-\w)/g;
function Uw(e) {
  const t = {};
  for (const n in e) {
    const r = n.replace(jw, (o) => o[1].toUpperCase());
    t[r] = e[n];
  }
  return t;
}
ge({ name: "QStepper", props: { ...rt, ...kc, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Mc, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q), { updatePanelsList: o, isValidPanelName: i, updatePanelIndex: a, getPanelContent: l, getPanels: s, panelDirectives: d, goToPanel: c, keepAliveProps: f, needsUniqueKeepAliveWrapper: v } = qc();
  _n(Cm, m(() => ({ goToPanel: c, keepAliveProps: f, needsUniqueKeepAliveWrapper: v, ...e })));
  const u = m(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (r.value === true ? " q-stepper--dark q-dark" : "")), g = m(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function y() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      i(e.modelValue) && a();
      const x = h("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [x] : w.concat(x);
    }
    return [h("div", { class: g.value }, s().map((x) => {
      const _ = Uw(x.props);
      return h(r0, { key: _.name, stepper: e, step: _, goToPanel: c });
    })), w, Sn("div", { class: "q-stepper__content q-panel-parent" }, l(), "cont", e.swipeable, () => d.value)];
  }
  return () => (o(t), h("div", { class: u.value }, At(t.navigation, y())));
} });
ge({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => h("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var Qw = ge({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: o } } = r, i = (a) => {
    n("click", a);
  };
  return () => {
    if (e.props === void 0) return h("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: i }, Pe(t.default));
    let a, l;
    const s = r.vnode.key;
    if (s) {
      if (a = e.props.colsMap[s], a === void 0) return;
    } else a = e.props.col;
    if (a.sortable === true) {
      const c = a.align === "right" ? "unshift" : "push";
      l = ca(t.default, []), l[c](h(tt, { class: a.__iconClass, name: o.iconSet.table.arrowUp }));
    } else l = Pe(t.default);
    const d = { class: a.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: a.headerStyle, onClick: (c) => {
      a.sortable === true && e.props.sort(a), i(c);
    } };
    return h("th", d, l);
  };
} });
function i0(e, t) {
  return h("div", e, [h("table", { class: "q-table" }, t)]);
}
var Kw = { list: Yg, table: ow }, Ww = ["list", "table", "__qtable"], Yw = ge({ name: "QVirtualScroll", props: { ...Vu, type: { type: String, default: "list", validator: (e) => Ww.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: mo }, setup(e, { slots: t, attrs: n }) {
  let r;
  const o = H(null), i = m(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: a, localResetVirtualScroll: l, padVirtualScroll: s, onVirtualScrollEvt: d } = n0({ virtualScrollLength: i, getVirtualScrollTarget: g, getVirtualScrollEl: u }), c = m(() => {
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
    return o.value.$el || o.value;
  }
  function g() {
    return r;
  }
  function y() {
    r = jn(u(), e.scrollTarget), r.addEventListener("scroll", d, ht.passive);
  }
  function w() {
    r !== void 0 && (r.removeEventListener("scroll", d, ht.passive), r = void 0);
  }
  function x() {
    let _ = s(e.type === "list" ? "div" : "tbody", c.value.map(t.default));
    return t.before !== void 0 && (_ = t.before().concat(_)), At(t.after, _);
  }
  return Ol(() => {
    l();
  }), st(() => {
    y();
  }), Dr(() => {
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
    return e.type === "__qtable" ? i0({ ref: o, class: "q-table__middle " + f.value }, x()) : h(Kw[e.type], { ...n, ref: o, class: [n.class, f.value], ...v.value }, x);
  };
} });
function Gw(e, t) {
  return new Date(e) - new Date(t);
}
var Xw = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function Jw(e, t, n, r) {
  const o = m(() => {
    const { sortBy: l } = t.value;
    return l && n.value.find((s) => s.name === l) || null;
  }), i = m(() => e.sortMethod !== void 0 ? e.sortMethod : (l, s, d) => {
    const c = n.value.find((u) => u.name === s);
    if (c === void 0 || c.field === void 0) return l;
    const f = d === true ? -1 : 1, v = typeof c.field == "function" ? (u) => c.field(u) : (u) => u[c.field];
    return l.sort((u, g) => {
      let y = v(u), w = v(g);
      return c.rawSort !== void 0 ? c.rawSort(y, w, u, g) * f : y == null ? -1 * f : w == null ? 1 * f : c.sort !== void 0 ? c.sort(y, w, u, g) * f : Ji(y) === true && Ji(w) === true ? (y - w) * f : xu(y) === true && xu(w) === true ? Gw(y, w) * f : typeof y == "boolean" && typeof w == "boolean" ? (y - w) * f : ([y, w] = [y, w].map((x) => (x + "").toLocaleString().toLowerCase()), y < w ? -1 * f : y === w ? 0 : f);
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
    d !== l ? (d = l, c = s === "da") : e.binaryStateSort === true ? c = !c : c === true ? s === "ad" ? d = null : c = false : s === "ad" ? c = true : d = null, r({ sortBy: d, descending: c, page: 1 });
  }
  return { columnToSort: o, computedSortMethod: i, sort: a };
}
var Zw = { filter: [String, Object], filterMethod: Function };
function ex(e, t) {
  const n = m(() => e.filterMethod !== void 0 ? e.filterMethod : (r, o, i, a) => {
    const l = o ? o.toLowerCase() : "";
    return r.filter((s) => i.some((d) => {
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
function tx(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Nf(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var nx = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function rx(e, t) {
  const { props: n, emit: r } = e, o = H(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), i = m(() => {
    const c = n["onUpdate:pagination"] !== void 0 ? { ...o.value, ...n.pagination } : o.value;
    return Nf(c);
  }), a = m(() => i.value.rowsNumber !== void 0);
  function l(c) {
    s({ pagination: c, filter: n.filter });
  }
  function s(c = {}) {
    Qe(() => {
      r("request", { pagination: c.pagination || i.value, filter: c.filter || n.filter, getCellValue: t });
    });
  }
  function d(c, f) {
    const v = Nf({ ...i.value, ...c });
    if (tx(i.value, v) === true) {
      a.value === true && f === true && l(v);
      return;
    }
    if (a.value === true) {
      l(v);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? r("update:pagination", v) : o.value = v;
  }
  return { innerPagination: o, computedPagination: i, isServerSide: a, requestServerInteraction: s, setPagination: d };
}
function ox(e, t, n, r, o, i) {
  const { props: a, emit: l, proxy: { $q: s } } = e, d = m(() => r.value === true ? n.value.rowsNumber || 0 : i.value), c = m(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return (b - 1) * C;
  }), f = m(() => {
    const { page: b, rowsPerPage: C } = n.value;
    return b * C;
  }), v = m(() => n.value.page === 1), u = m(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(d.value / n.value.rowsPerPage))), g = m(() => f.value === 0 ? true : n.value.page >= u.value), y = m(() => (a.rowsPerPageOptions.includes(t.value.rowsPerPage) ? a.rowsPerPageOptions : [t.value.rowsPerPage].concat(a.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? s.lang.table.allRows : "" + C, value: C })));
  me(u, (b, C) => {
    if (b === C) return;
    const q = n.value.page;
    b && !q ? o({ page: 1 }) : b < q && o({ page: b });
  });
  function w() {
    o({ page: 1 });
  }
  function x() {
    const { page: b } = n.value;
    b > 1 && o({ page: b - 1 });
  }
  function _() {
    const { page: b, rowsPerPage: C } = n.value;
    f.value > 0 && b * C < d.value && o({ page: b + 1 });
  }
  function p() {
    o({ page: u.value });
  }
  return a["onUpdate:pagination"] !== void 0 && l("update:pagination", { ...n.value }), { firstRowIndex: c, lastRowIndex: f, isFirstPage: v, isLastPage: g, pagesNumber: u, computedRowsPerPageOptions: y, computedRowsNumber: d, firstPage: w, prevPage: x, nextPage: _, lastPage: p };
}
var ix = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, ax = ["update:selected", "selection"];
function lx(e, t, n, r) {
  const o = m(() => {
    const g = {};
    return e.selected.map(r.value).forEach((y) => {
      g[y] = true;
    }), g;
  }), i = m(() => e.selection !== "none"), a = m(() => e.selection === "single"), l = m(() => e.selection === "multiple"), s = m(() => n.value.length !== 0 && n.value.every((g) => o.value[r.value(g)] === true)), d = m(() => s.value !== true && n.value.some((g) => o.value[r.value(g)] === true)), c = m(() => e.selected.length);
  function f(g) {
    return o.value[g] === true;
  }
  function v() {
    t("update:selected", []);
  }
  function u(g, y, w, x) {
    t("selection", { rows: y, added: w, keys: g, evt: x });
    const _ = a.value === true ? w === true ? y : [] : w === true ? e.selected.concat(y) : e.selected.filter((p) => g.includes(r.value(p)) === false);
    t("update:selected", _);
  }
  return { hasSelectionMode: i, singleSelection: a, multipleSelection: l, allRowsSelected: s, someRowsSelected: d, rowsSelectedNumber: c, isRowSelected: f, clearSelection: v, updateSelection: u };
}
function zf(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var sx = { expanded: Array }, ux = ["update:expanded"];
function cx(e, t) {
  const n = H(zf(e.expanded));
  me(() => e.expanded, (a) => {
    n.value = zf(a);
  });
  function r(a) {
    return n.value.includes(a);
  }
  function o(a) {
    e.expanded !== void 0 ? t("update:expanded", a) : n.value = a;
  }
  function i(a, l) {
    const s = n.value.slice(), d = s.indexOf(a);
    l === true ? d === -1 && (s.push(a), o(s)) : d !== -1 && (s.splice(d, 1), o(s));
  }
  return { isRowExpanded: r, setExpanded: o, updateExpanded: i };
}
var dx = { visibleColumns: Array };
function fx(e, t, n) {
  const r = m(() => {
    if (e.columns !== void 0) return e.columns;
    const l = e.rows[0];
    return l !== void 0 ? Object.keys(l).map((s) => ({ name: s, label: s.toUpperCase(), field: s, align: Ji(l[s]) ? "right" : "left", sortable: true })) : [];
  }), o = m(() => {
    const { sortBy: l, descending: s } = t.value;
    return (e.visibleColumns !== void 0 ? r.value.filter((c) => c.required === true || e.visibleColumns.includes(c.name) === true) : r.value).map((c) => {
      const f = c.align || "right", v = `text-${f}`;
      return { ...c, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: v + (c.headerClasses !== void 0 ? " " + c.headerClasses : "") + (c.sortable === true ? " sortable" : "") + (c.name === l ? ` sorted ${s === true ? "sort-desc" : ""}` : ""), __tdStyle: c.style !== void 0 ? typeof c.style != "function" ? () => c.style : c.style : () => null, __tdClass: c.classes !== void 0 ? typeof c.classes != "function" ? () => v + " " + c.classes : (u) => v + " " + c.classes(u) : () => v };
    });
  }), i = m(() => {
    const l = {};
    return o.value.forEach((s) => {
      l[s.name] = s;
    }), l;
  }), a = m(() => e.tableColspan !== void 0 ? e.tableColspan : o.value.length + (n.value === true ? 1 : 0));
  return { colList: r, computedCols: o, computedColsMap: i, computedColspan: a };
}
var Ra = "q-table__bottom row items-center", a0 = {};
t0.forEach((e) => {
  a0[e] = {};
});
ge({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...a0, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...rt, ...Ec, ...dx, ...Zw, ...nx, ...sx, ...ix, ...Xw }, emits: ["request", "virtualScroll", ...Ac, ...ux, ...ax], setup(e, { slots: t, emit: n }) {
  const r = xe(), { proxy: { $q: o } } = r, i = ot(e, o), { inFullscreen: a, toggleFullscreen: l } = Lc(), s = m(() => typeof e.rowKey == "function" ? e.rowKey : (de) => de[e.rowKey]), d = H(null), c = H(null), f = m(() => e.grid !== true && e.virtualScroll === true), v = m(() => " q-table__card" + (i.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), u = m(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : v.value) + (i.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (a.value === true ? " fullscreen scroll" : "")), g = m(() => u.value + (e.loading === true ? " q-table--loading" : ""));
  me(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + u.value, () => {
    var _a3;
    f.value === true && ((_a3 = c.value) == null ? void 0 : _a3.reset());
  });
  const { innerPagination: y, computedPagination: w, isServerSide: x, requestServerInteraction: _, setPagination: p } = rx(r, se), { computedFilterMethod: b } = ex(e, p), { isRowExpanded: C, setExpanded: q, updateExpanded: B } = cx(e, n), V = m(() => {
    let de = e.rows;
    if (x.value === true || de.length === 0) return de;
    const { sortBy: Se, descending: Ve } = w.value;
    return e.filter && (de = b.value(de, e.filter, Y.value, se)), G.value !== null && (de = be.value(e.rows === de ? de.slice() : de, Se, Ve)), de;
  }), R = m(() => V.value.length), D = m(() => {
    let de = V.value;
    if (x.value === true) return de;
    const { rowsPerPage: Se } = w.value;
    return Se !== 0 && (P.value === 0 && e.rows !== de ? de.length > te.value && (de = de.slice(0, te.value)) : de = de.slice(P.value, te.value)), de;
  }), { hasSelectionMode: $, singleSelection: M, multipleSelection: A, allRowsSelected: T, someRowsSelected: z, rowsSelectedNumber: U, isRowSelected: j, clearSelection: K, updateSelection: ie } = lx(e, n, D, s), { colList: ye, computedCols: Y, computedColsMap: L, computedColspan: ne } = fx(e, w, $), { columnToSort: G, computedSortMethod: be, sort: O } = Jw(e, w, ye, p), { firstRowIndex: P, lastRowIndex: te, isFirstPage: k, isLastPage: F, pagesNumber: ee, computedRowsPerPageOptions: S, computedRowsNumber: E, firstPage: I, prevPage: Z, nextPage: re, lastPage: W } = ox(r, y, w, x, p, R), fe = m(() => D.value.length === 0), ve = m(() => {
    const de = {};
    return t0.forEach((Se) => {
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
      return Oe !== void 0 && (Ye.after = () => h("tbody", Oe({ cols: Y.value }))), h(Yw, { ref: c, class: e.tableClass, style: e.tableStyle, ...ve.value, scrollTarget: e.virtualScrollTarget, items: D.value, type: "__qtable", tableColspan: ne.value, onVirtualScroll: Q }, Ye);
    }
    const Se = [Ce()];
    return de !== null && Se.unshift(de()), i0({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, Se);
  }
  function oe(de, Se) {
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
    return [h(fw, { class: "q-table__linear-progress", color: e.color, dark: i.value, indeterminate: true, trackColor: "transparent" })];
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
  const pe = m(() => ({ pagination: w.value, pagesNumber: ee.value, isFirstPage: k.value, isLastPage: F.value, firstPage: I, prevPage: Z, nextPage: re, lastPage: W, inFullscreen: a.value, toggleFullscreen: l }));
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
      return _t2 !== void 0 ? _t2(bt) : h(Qw, { key: Oe.name, props: bt }, () => Oe.label);
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
    const de = [e.iconFirstPage || o.iconSet.table.firstPage, e.iconPrevPage || o.iconSet.table.prevPage, e.iconNextPage || o.iconSet.table.nextPage, e.iconLastPage || o.iconSet.table.lastPage];
    return o.lang.rtl === true ? de.reverse() : de;
  });
  function Mt() {
    if (e.hideBottom === true) return;
    if (fe.value === true) {
      if (e.hideNoData === true) return;
      const Ve = e.loading === true ? e.loadingLabel || o.lang.table.loading : e.filter ? e.noResultsLabel || o.lang.table.noResults : e.noDataLabel || o.lang.table.noData, Oe = t["no-data"], Ye = Oe !== void 0 ? [Oe({ message: Ve, icon: o.iconSet.table.warning, filter: e.filter })] : [h(tt, { class: "q-table__bottom-nodata-icon", name: o.iconSet.table.warning }), Ve];
      return h("div", { class: Ra + " q-table__bottom--nodata" }, Ye);
    }
    const de = t.bottom;
    if (de !== void 0) return h("div", { class: Ra }, [de(pe.value)]);
    const Se = e.hideSelectedBanner !== true && $.value === true && U.value > 0 ? [h("div", { class: "q-table__control" }, [h("div", [(e.selectedRowsLabel || o.lang.table.selectedRecords)(U.value)])])] : [];
    if (e.hidePagination !== true) return h("div", { class: Ra + " justify-end" }, dr(Se));
    if (Se.length !== 0) return h("div", { class: Ra }, Se);
  }
  function Yt(de) {
    p({ page: 1, rowsPerPage: de.value });
  }
  function dr(de) {
    let Se;
    const { rowsPerPage: Ve } = w.value, Oe = e.paginationLabel || o.lang.table.pagination, Ye = t.pagination, _t2 = e.rowsPerPageOptions.length > 1;
    if (de.push(h("div", { class: "q-table__separator col" })), _t2 === true && de.push(h("div", { class: "q-table__control" }, [h("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || o.lang.table.recordsPerPage]), h(yw, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Ve, options: S.value, displayValue: Ve === 0 ? o.lang.table.allRows : Ve, dark: i.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": Yt })])), Ye !== void 0) Se = Ye(pe.value);
    else if (Se = [h("span", Ve !== 0 ? { class: "q-table__bottom-item" } : {}, [Ve ? Oe(P.value + 1, Math.min(te.value, E.value), E.value) : Oe(1, R.value, E.value)])], Ve !== 0 && ee.value > 1) {
      const bt = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (bt.size = "sm"), ee.value > 2 && Se.push(h(et, { key: "pgFirst", ...bt, icon: ct.value[0], disable: k.value, ariaLabel: o.lang.pagination.first, onClick: I })), Se.push(h(et, { key: "pgPrev", ...bt, icon: ct.value[1], disable: k.value, ariaLabel: o.lang.pagination.prev, onClick: Z }), h(et, { key: "pgNext", ...bt, icon: ct.value[2], disable: F.value, ariaLabel: o.lang.pagination.next, onClick: re })), ee.value > 2 && Se.push(h(et, { key: "pgLast", ...bt, icon: ct.value[3], disable: F.value, ariaLabel: o.lang.pagination.last, onClick: W }));
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
        Ve.unshift(h("div", { class: "q-table__grid-item-row" }, _t2), h(so, { dark: i.value }));
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
  return Object.assign(r.proxy, { requestServerInteraction: _, setPagination: p, firstPage: I, prevPage: Z, nextPage: re, lastPage: W, isRowSelected: j, clearSelection: K, isRowExpanded: C, setExpanded: q, sort: O, resetVirtualScroll: ue, scrollTo: oe, getCellValue: se }), vm(r.proxy, { filteredSortedRows: () => V.value, computedRows: () => D.value, computedRowsNumber: () => E.value }), () => {
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
  const n = xe(), r = m(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return h("td", { class: r.value }, Pe(t.default));
    const o = n.vnode.key, i = (e.props.colsMap !== void 0 ? e.props.colsMap[o] : null) || e.props.col;
    if (i === void 0) return;
    const { row: a } = e.props;
    return h("td", { class: r.value + i.__tdClass(a), style: i.__tdStyle(a) }, Pe(t.default));
  };
} });
ge({ name: "QRouteTab", props: { ...da, ...bg }, emits: gg, setup(e, { slots: t, emit: n }) {
  const r = jl({ useDisableForRouterLinkProps: false }), { renderTab: o, $tabs: i } = pg(e, t, n, { exact: m(() => e.exact), ...r });
  return me(() => `${e.name} | ${e.exact} | ${(r.resolvedLink.value || {}).href}`, i.verifyRouteModel), () => o(r.linkTag.value, r.linkAttrs.value);
} });
function vx(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function hx() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
ge({ name: "QTime", props: { ...rt, ...kn, ...Sl, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Sl.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: Cg, setup(e, { slots: t, emit: n }) {
  const r = xe(), { $q: o } = r.proxy, i = ot(e, o), { tabindex: a, headerClass: l, getLocale: s, getCurrentDate: d } = Sg(e, o), c = va(e), f = Vr(c);
  let v, u;
  const g = H(null), y = m(() => be()), w = m(() => s()), x = m(() => O()), _ = Ci(e.modelValue, y.value, w.value, e.calendar, x.value), p = H(vx(_)), b = H(_), C = H(_.hour === null || _.hour < 12), q = m(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (i.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), B = m(() => {
    const se = b.value;
    return { hour: se.hour === null ? "--" : V.value === true ? lt(se.hour) : String(C.value === true ? se.hour === 0 ? 12 : se.hour : se.hour > 12 ? se.hour - 12 : se.hour), minute: se.minute === null ? "--" : lt(se.minute), second: se.second === null ? "--" : lt(se.second) };
  }), V = m(() => e.format24h !== null ? e.format24h : o.lang.date.format24h), R = m(() => {
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
    const se = { ...d(), ...hx() };
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
    return Er(r) === true || K.value !== null && (K.value.values.length === 0 || p.value === "hour" && V.value !== true && z.value[C.value === true ? "am" : "pm"].values.length === 0);
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
    P() !== true && (o.platform.is.desktop !== true && ee(se, te()), F());
  }
  function re(se) {
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
        if (b.value.seconds === null) oe(ae[0]);
        else {
          const _e2 = (ae.length + ae.indexOf(b.value.second) + pe) % ae.length;
          oe(ae[_e2]);
        }
      } else {
        const ae = b.value.second === null ? -pe : b.value.second;
        oe((60 + ae + pe) % 60);
      }
    }
  }
  function ue(se) {
    b.value.hour !== se && (b.value.hour = se, Te());
  }
  function ce(se) {
    b.value.minute !== se && (b.value.minute = se, Te());
  }
  function oe(se) {
    b.value.second !== se && (b.value.second = se, Te());
  }
  const Q = { hour: ue, minute: ce, second: oe };
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
    const pe = Object.assign({ ...b.value }, se), ae = e.calendar === "persian" ? lt(pe.hour) + ":" + lt(pe.minute) + (e.withSeconds === true ? ":" + lt(pe.second) : "") : Eg(new Date(pe.year, pe.month === null ? null : pe.month - 1, pe.day, pe.hour, pe.minute, pe.second, pe.millisecond), y.value, w.value, pe.year, pe.timezoneOffset);
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
    return h("div", { class: "q-time__content col relative-position" }, [h($t, { name: "q-transition--scale" }, () => h("div", { key: "clock" + p.value, class: "q-time__container-parent absolute-full" }, [h("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [hn(h("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: re }, [h("div", { class: "q-time__clock-circle fit" }, [h("div", { class: "q-time__clock-pointer" + (b.value[p.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: R.value }), ie.value.map((pe) => h("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${pe.index}` + (pe.val === se ? " q-time__clock-position--active " + l.value : pe.disable === true ? " q-time__clock-position--disable" : "") }, [h("span", pe.label)]))])]), ye.value)])])), e.nowBtn === true ? h(et, { class: "q-time__now-button absolute", icon: o.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: a.value, onClick: Y }) : null]);
  }
  return r.proxy.setNow = Y, () => {
    const se = [Ne()], pe = Pe(t.default);
    return pe !== void 0 && se.push(h("div", { class: "q-time__actions" }, pe)), e.name !== void 0 && e.disable !== true && f(se, "push"), h("div", { class: q.value, tabindex: -1 }, [Ie(), h("div", { class: "q-time__main col overflow-auto" }, se)]);
  };
} });
ge({ name: "QTimeline", props: { ...rt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = xe(), r = ot(e, n.proxy.$q);
  _n(xm, e);
  const o = m(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === true ? " q-timeline--dark" : ""));
  return () => h("ul", { class: o.value }, Pe(t.default));
} });
ge({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = Lt(xm, ut);
  if (n === ut) return console.error("QTimelineEntry needs to be child of QTimeline"), ut;
  const r = m(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), o = m(() => `q-timeline__dot text-${e.color || n.color}`), i = m(() => n.layout === "comfortable" && n.side === "left");
  return () => {
    const a = ca(t.default, []);
    if (e.body !== void 0 && a.unshift(e.body), e.heading === true) {
      const d = [h("div"), h("div"), h(e.tag, { class: "q-timeline__heading-title" }, a)];
      return h("div", { class: "q-timeline__heading" }, i.value === true ? d.reverse() : d);
    }
    let l;
    e.icon !== void 0 ? l = [h(tt, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (l = [h("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    const s = [h("div", { class: "q-timeline__subtitle" }, [h("span", {}, Pe(t.subtitle, [e.subtitle]))]), h("div", { class: o.value }, l), h("div", { class: "q-timeline__content" }, [h("h6", { class: "q-timeline__title" }, Pe(t.title, [e.title]))].concat(a))];
    return h("li", { class: r.value }, i.value === true ? s.reverse() : s);
  };
} });
var Hf = ge({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => h("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), jf = ge({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = m(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => h("div", { class: n.value }, Pe(t.default));
} }), mx = ["none", "strict", "leaf", "leaf-filtered"];
ge({ name: "QTree", props: { ...rt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => mx.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: r } = xe(), { $q: o } = r, i = ot(e, o), a = H({}), l = H(e.ticked || []), s = H(e.expanded || []);
  let d = {};
  fo(() => {
    d = {};
  });
  const c = m(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (i.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = m(() => e.selected !== void 0), v = m(() => e.icon || o.iconSet.tree.icon), u = m(() => e.controlColor || e.color), g = m(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), y = m(() => {
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
      let re = G.lazy;
      re === true && a.value[P] !== void 0 && Array.isArray(G[e.childrenKey]) === true && (re = a.value[P]);
      const W = { key: P, parent: be, isParent: te, lazy: re, disabled: G.disabled, link: G.disabled !== true && (k === true || F === true && (te === true || re === true)), children: [], matchesFilter: e.filter ? w.value(G, e.filter) : true, selected: P === e.selected && k === true, selectable: k, expanded: te === true ? s.value.includes(P) : false, expandable: F, noTick: G.noTick === true || S !== true && re && re !== "loaded", tickable: Z, tickStrategy: O, hasTicking: ee, strictTicking: S, leafFilteredTicking: E, leafTicking: I, ticked: S === true ? l.value.includes(P) : te === true ? false : l.value.includes(P) };
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
    const be = { tree: r, node: L, key: G, color: e.color, dark: i.value };
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
      vo(F) !== true && (F.keyCode === 13 ? ie(L, G, F, true) : F.keyCode === 32 && ye(L, G, F, true));
    } }, [h("div", { class: "q-focus-helper", tabindex: -1, ref: (F) => {
      d[G.key] = F;
    } }), G.lazy === "loading" ? h(Tn, { class: "q-tree__spinner", color: u.value }) : P === true ? h(tt, { class: "q-tree__arrow" + (G.expanded === true ? " q-tree__arrow--rotate" : ""), name: v.value, onClick(F) {
      ye(L, G, F);
    } }) : null, G.hasTicking === true && G.noTick !== true ? h($i, { class: "q-tree__tickbox", modelValue: G.indeterminate === true ? null : G.ticked, color: u.value, dark: i.value, dense: true, keepColor: true, disable: G.tickable !== true, onKeydown: Ke, "onUpdate:modelValue": (F) => {
      Y(G, F);
    } }) : null, h("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (G.selected === true ? y.value : g.value) }, [be ? be(k) : [T(L), h("div", L[e.labelKey])]])]), P === true ? e.noTransition === true ? G.expanded === true ? h("div", { class: "q-tree__node-collapsible" + g.value, key: `${ne}__q` }, [te, h("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]) : null : h(Oc, { duration: e.duration, onShow: z, onHide: U }, () => hn(h("div", { class: "q-tree__node-collapsible" + g.value, key: `${ne}__q` }, [te, h("div", { class: "q-tree__children" + (G.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, O)]), [[sm, G.expanded]])) : te]);
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
  return e.defaultExpandAll === true && B(), Object.assign(r, { getNodeByKey: _, getTickedNodes: p, getExpandedNodes: b, isExpanded: C, collapseAll: q, expandAll: B, setExpanded: V, isTicked: D, setTicked: $ }), () => {
    const L = A(e.nodes);
    return h("div", { class: c.value, role: "tree" }, L.length === 0 ? e.filter ? e.noResultsLabel || o.lang.tree.noResults : e.noNodesLabel || o.lang.tree.noNodes : L);
  };
} });
function Uf(e) {
  return (e * 100).toFixed(2) + "%";
}
var gx = { ...rt, ...Ng, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, l0 = [...zg, "start", "finish", "added", "removed"];
function bx(e, t) {
  const n = xe(), { props: r, slots: o, emit: i, proxy: a } = n, { $q: l } = a, s = ot(r, l);
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
  const c = m(() => r.disable !== true && r.readonly !== true), f = H(false), v = H(null), u = H(null), g = { files: H([]), queuedFiles: H([]), uploadedFiles: H([]), uploadedSize: H(0), updateFileStatus: d, isAlive: () => Er(n) === false }, { pickFiles: y, addFiles: w, onDragover: x, onDragleave: _, processFiles: p, getDndNode: b, maxFilesNumber: C, maxTotalSizeNumber: q } = Hg({ editable: c, dnd: f, getFileInput: Y, addFilesToQueue: L });
  Object.assign(g, e({ props: r, slots: o, emit: i, helpers: g, exposeApi: (k) => {
    Object.assign(g, k);
  } })), g.isBusy === void 0 && (g.isBusy = H(false));
  const B = H(0), V = m(() => B.value === 0 ? 0 : g.uploadedSize.value / B.value), R = m(() => Uf(V.value)), D = m(() => Cu(B.value)), $ = m(() => c.value === true && g.isUploading.value !== true && (r.multiple === true || g.queuedFiles.value.length === 0) && (r.maxFiles === void 0 || g.files.value.length < C.value) && (r.maxTotalSize === void 0 || B.value < q.value)), M = m(() => c.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  _n(qm, be);
  const A = m(() => "q-uploader column no-wrap" + (s.value === true ? " q-uploader--dark q-dark" : "") + (r.bordered === true ? " q-uploader--bordered" : "") + (r.square === true ? " q-uploader--square no-border-radius" : "") + (r.flat === true ? " q-uploader--flat no-shadow" : "") + (r.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), T = m(() => "q-uploader__header" + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : ""));
  me(g.isUploading, (k, F) => {
    F === false && k === true ? i("start") : F === true && k === false && i("finish");
  });
  function z() {
    r.disable === false && (g.abort(), g.uploadedSize.value = 0, B.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function U() {
    r.disable === false && K(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function j() {
    K(["idle", "failed"], ({ size: k }) => {
      B.value -= k, g.queuedFiles.value = [];
    });
  }
  function K(k, F) {
    if (r.disable === true) return;
    const ee = { files: [], size: 0 }, S = g.files.value.filter((E) => k.indexOf(E.__status) === -1 ? true : (ee.size += E.size, ee.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    ee.files.length !== 0 && (g.files.value = S, F(ee), i("removed", ee.files));
  }
  function ie(k) {
    r.disable || (k.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((F) => F.__key !== k.__key) : k.__status === "uploading" ? k.__abort() : B.value -= k.size, g.files.value = g.files.value.filter((F) => F.__key !== k.__key ? true : (F.__img !== void 0 && window.URL.revokeObjectURL(F.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((F) => F.__key !== k.__key), i("removed", [k]));
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
      if (g.updateFileStatus(E, "idle"), B.value += E.size, r.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const I = new Image();
        I.src = window.URL.createObjectURL(E), E.__img = I;
      }
    }), g.files.value = g.files.value.concat(ee), g.queuedFiles.value = g.queuedFiles.value.concat(ee), i("added", ee), r.autoUpload === true && g.upload());
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
    return h("input", { ref: u, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: r.accept, multiple: r.multiple === true ? "multiple" : void 0, capture: r.capture, onMousedown: St, onClick: y, onChange: L });
  }
  function O() {
    return o.header !== void 0 ? o.header(te) : [h("div", { class: "q-uploader__header-content column" }, [h("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [G(g.queuedFiles.value.length !== 0, "removeQueue", j), G(g.uploadedFiles.value.length !== 0, "removeUploaded", U), g.isUploading.value === true ? h(Tn, { class: "q-uploader__spinner" }) : null, h("div", { class: "col column justify-center" }, [r.label !== void 0 ? h("div", { class: "q-uploader__title" }, [r.label]) : null, h("div", { class: "q-uploader__subtitle" }, [D.value + " / " + R.value])]), G($.value, "add"), G(r.hideUploadBtn === false && M.value === true, "upload", g.upload), G(g.isUploading.value, "clear", g.abort)])])];
  }
  function P() {
    return o.list !== void 0 ? o.list(te) : g.files.value.map((k) => h("div", { key: k.__key, class: "q-uploader__file relative-position" + (r.noThumbnails !== true && k.__img !== void 0 ? " q-uploader__file--img" : "") + (k.__status === "failed" ? " q-uploader__file--failed" : k.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: r.noThumbnails !== true && k.__img !== void 0 ? { backgroundImage: 'url("' + k.__img.src + '")', backgroundSize: r.thumbnailFit } : null }, [h("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [k.__status === "failed" ? h(tt, { class: "q-uploader__file-status", name: l.iconSet.type.negative, color: "negative" }) : null, h("div", { class: "q-uploader__file-header-content col" }, [h("div", { class: "q-uploader__title" }, [k.name]), h("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [k.__sizeLabel + " / " + k.__progressLabel])]), k.__status === "uploading" ? h(cg, { value: k.__progress, min: 0, max: 1, indeterminate: k.__progress === 0 }) : h(et, { round: true, dense: true, flat: true, icon: l.iconSet.uploader[k.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      ie(k);
    } })])]));
  }
  We(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const te = {};
  for (const k in g) wt(g[k]) === true ? It(te, k, () => g[k].value) : te[k] = g[k];
  return Object.assign(te, { upload: ne, reset: z, removeUploadedFiles: U, removeQueuedFiles: j, removeFile: ie, pickFiles: y, addFiles: w }), vm(te, { canAddFiles: () => $.value, canUpload: () => M.value, uploadSizeLabel: () => D.value, uploadProgressLabel: () => R.value }), t({ ...g, upload: ne, reset: z, removeUploadedFiles: U, removeQueuedFiles: j, removeFile: ie, pickFiles: y, addFiles: w, canAddFiles: $, canUpload: M, uploadSizeLabel: D, uploadProgressLabel: R }), () => {
    const k = [h("div", { class: T.value }, O()), h("div", { class: "q-uploader__list scroll" }, P()), b("uploader")];
    g.isBusy.value === true && k.push(h("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [h(Tn)]));
    const F = { ref: v, class: A.value };
    return $.value === true && Object.assign(F, { onDragover: x, onDragleave: _ }), h("div", F, k);
  };
}
var px = () => true;
function s0(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = px;
  }), t;
}
var yx = s0(l0), _x = ({ name: e, props: t, emits: n, injectPlugin: r }) => ge({ name: e, props: { ...gx, ...t }, emits: Ot(n) === true ? { ...yx, ...n } : [...l0, ...n], setup(o, { expose: i }) {
  return bx(r, i);
} });
function Wn(e) {
  return typeof e == "function" ? e : () => e;
}
var wx = "QUploader", xx = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, Cx = ["factoryFailed", "uploaded", "failed", "uploading"];
function Sx({ props: e, emit: t, helpers: n }) {
  const r = H([]), o = H([]), i = H(0), a = m(() => ({ url: Wn(e.url), method: Wn(e.method), headers: Wn(e.headers), formFields: Wn(e.formFields), fieldName: Wn(e.fieldName), withCredentials: Wn(e.withCredentials), sendRaw: Wn(e.sendRaw), batch: Wn(e.batch) })), l = m(() => i.value > 0), s = m(() => o.value.length !== 0);
  let d;
  function c() {
    r.value.forEach((g) => {
      g.abort();
    }), o.value.length !== 0 && (d = true);
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
      o.value.push(y);
      const w = (x) => {
        n.isAlive() === true && (o.value = o.value.filter((_) => _ !== y), o.value.length === 0 && (d = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((_) => {
          n.updateFileStatus(_, "failed");
        }), t("factoryFailed", x, g), i.value--);
      };
      y.then((x) => {
        d === true ? w(new Error("Aborted")) : n.isAlive() === true && (o.value = o.value.filter((_) => _ !== y), u(g, x));
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
      }), t("failed", { files: g, xhr: x })), i.value--, r.value = r.value.filter((M) => M !== x));
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
    }), t("uploading", { files: g, xhr: x }), r.value.push(x), $ === true ? x.send(new Blob(g)) : x.send(w);
  }
  return { isUploading: l, isBusy: s, abort: c, upload: f };
}
var Tx = { name: wx, props: xx, emits: Cx, injectPlugin: Sx };
_x(Tx);
ge({ name: "QUploaderAddTrigger", setup() {
  const e = Lt(qm, ut);
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
  const n = { depth: Qf(t), handler(r) {
    n.depth !== 0 && setTimeout(() => {
      const o = C1(e);
      o !== void 0 && S1(o, r, n.depth);
    });
  }, handlerKey(r) {
    Cn(r, 13) === true && n.handler(r);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Qf(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var kx = 0, ii = void 0;
function Kf(e, t) {
  ii === void 0 && (ii = document.createElement("div"), ii.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(ii));
  const n = e.getBoundingClientRect(), r = ii.getBoundingClientRect(), { marginLeft: o, marginRight: i, marginTop: a, marginBottom: l } = window.getComputedStyle(e), s = parseInt(o, 10) + parseInt(i, 10), d = parseInt(a, 10) + parseInt(l, 10);
  return { left: n.left - r.left, top: n.top - r.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : s), heightM: n.bottom - n.top + (t === true ? 0 : d), marginH: t === true ? s : 0, marginV: t === true ? d : 0 };
}
function Pa(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Wf = ["Top", "Right", "Bottom", "Left"], Yf = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], Mx = /-block|-inline|block-|inline-/, qx = /(-block|-inline|block-|inline-).*:/;
function Gf(e, t) {
  const n = window.getComputedStyle(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (n[i] === "") if (i === "cssText") {
      const a = n.length;
      let l = "";
      for (let s = 0; s < a; s++) Mx.test(n[s]) !== true && (l += n[s] + ": " + n[n[s]] + "; ");
      r[i] = l;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(i) !== -1) {
      const a = i.replace("border", "");
      let l = "";
      for (let s = 0; s < Wf.length; s++) {
        const d = "border" + Wf[s] + a;
        l += n[d] + " ";
      }
      r[i] = l;
    } else if (i === "borderRadius") {
      let a = "", l = "";
      for (let s = 0; s < Yf.length; s++) {
        const d = n[Yf[s]].split(" ");
        a += d[0] + " ", l += (d[1] === void 0 ? d[0] : d[1]) + " ";
      }
      r[i] = a + "/ " + l;
    } else r[i] = n[i];
    else i === "cssText" ? r[i] = n[i].split(";").filter((a) => qx.test(a) !== true).join(";") : r[i] = n[i];
  }
  return r;
}
var Ex = ["absolute", "fixed", "relative", "sticky"];
function Xf(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: r, zIndex: o } = window.getComputedStyle(t), i = Number(o);
    i > n && (t === e || Ex.includes(r) === true) && (n = i), t = t.parentNode;
  }
  return n;
}
function Ax(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function Lx(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function Jf(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Zf(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function Bx(e) {
  let t = () => false, n = false, r = true;
  const o = Ax(e), i = Lx(e), a = Jf(o.from);
  if (Zf(a) !== true) return t;
  typeof a.qMorphCancel == "function" && a.qMorphCancel();
  let l, s, d, c;
  const f = a.parentNode, v = a.nextElementSibling, u = Kf(a, i.resize), { width: g, height: y } = Pa(f), { borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, backgroundColor: b, transform: C, position: q, cssText: B } = Gf(a, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), V = a.classList.toString(), R = a.style.cssText, D = a.cloneNode(true), $ = i.tween === true ? a.cloneNode(true) : void 0;
  $ !== void 0 && ($.className = $.classList.toString().split(" ").filter((A) => /^bg-/.test(A) === false).join(" ")), i.hideFromClone === true && D.classList.add("q-morph--internal"), D.setAttribute("aria-hidden", "true"), D.style.transition = "none", D.style.animation = "none", D.style.pointerEvents = "none", f.insertBefore(D, v), a.qMorphCancel = () => {
    n = true, D.remove(), $ == null ? void 0 : $.remove(), i.hideFromClone === true && D.classList.remove("q-morph--internal"), a.qMorphCancel = void 0;
  };
  const M = () => {
    const A = Jf(o.to);
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
      const I = Kf(A, i.resize), Z = u.left - I.left, re = u.top - I.top, W = u.width / (I.width > 0 ? I.width : 10), fe = u.height / (I.height > 0 ? I.height : 100), ve = g - T, ue = y - z, ce = ye - U, oe = Y - j, Q = Math.max(u.widthM, ve), le = Math.max(u.heightM, ue), we = Math.max(I.widthM, ce), Ce = Math.max(I.heightM, oe), Te = a === A && ["absolute", "fixed"].includes(F) === false && ["absolute", "fixed"].includes(q) === false;
      let Me = F === "fixed", Ie = ie;
      for (; Me !== true && Ie !== document; ) Me = window.getComputedStyle(Ie).position === "fixed", Ie = Ie.parentNode;
      if (i.hideFromClone !== true && (D.style.display = "block", D.style.flex = "0 0 auto", D.style.opacity = 0, D.style.minWidth = "unset", D.style.maxWidth = "unset", D.style.minHeight = "unset", D.style.maxHeight = "unset", D.classList.remove("q-morph--internal")), i.keepToClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset"), L.classList.remove("q-morph--internal"), typeof i.classes == "string" && (A.className += " " + i.classes), typeof i.style == "string") A.style.cssText += " " + i.style;
      else if (Ot(i.style) === true) for (const _e2 in i.style) A.style[_e2] = i.style[_e2];
      const Ne = Xf(D), se = Xf(A), pe = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      A.style.position = Me === true ? "fixed" : "absolute", A.style.left = `${I.left - pe.scrollLeft}px`, A.style.right = "unset", A.style.top = `${I.top - pe.scrollTop}px`, A.style.margin = 0, i.resize === true && (A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset", A.style.overflow = "hidden", A.style.overflowX = "hidden", A.style.overflowY = "hidden"), document.body.appendChild(A), $ !== void 0 && ($.style.cssText = B, $.style.transform = "none", $.style.animation = "none", $.style.transition = "none", $.style.position = A.style.position, $.style.left = `${u.left - pe.scrollLeft}px`, $.style.right = "unset", $.style.top = `${u.top - pe.scrollTop}px`, $.style.margin = 0, $.style.pointerEvents = "none", i.resize === true && ($.style.minWidth = "unset", $.style.maxWidth = "unset", $.style.minHeight = "unset", $.style.maxHeight = "unset", $.style.overflow = "hidden", $.style.overflowX = "hidden", $.style.overflowY = "hidden"), document.body.appendChild($));
      const ae = (_e2) => {
        a === A && r !== true ? (A.style.cssText = R, A.className = V) : (A.style.cssText = E, A.className = S), L.parentNode === ie && ie.insertBefore(A, L), D.remove(), L.remove(), $ == null ? void 0 : $.remove(), t = () => false, a.qMorphCancel = void 0, A.qMorphCancel = void 0, typeof i.onEnd == "function" && i.onEnd(r === true ? "to" : "from", _e2 === true);
      };
      if (i.useCSS !== true && typeof A.animate == "function") {
        const _e2 = i.resize === true ? { transform: `translate(${Z}px, ${re}px)`, width: `${Q}px`, height: `${le}px` } : { transform: `translate(${Z}px, ${re}px) scale(${W}, ${fe})` }, ke = i.resize === true ? { width: `${we}px`, height: `${Ce}px` } : {}, Fe = i.resize === true ? { width: `${Q}px`, height: `${le}px` } : {}, Ae = i.resize === true ? { transform: `translate(${-1 * Z}px, ${-1 * re}px)`, width: `${we}px`, height: `${Ce}px` } : { transform: `translate(${-1 * Z}px, ${-1 * re}px) scale(${1 / W}, ${1 / fe})` }, Xe = $ !== void 0 ? { opacity: i.tweenToOpacity } : { backgroundColor: b }, ct = $ !== void 0 ? { opacity: 1 } : { backgroundColor: te };
        c = A.animate([{ margin: 0, borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, zIndex: Ne, transformOrigin: "0 0", ..._e2, ...Xe }, { margin: 0, borderWidth: G, borderStyle: be, borderColor: O, borderRadius: P, zIndex: se, transformOrigin: "0 0", transform: k, ...ke, ...ct }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), s = $ === void 0 ? void 0 : $.animate([{ opacity: i.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: x, borderColor: _, borderRadius: p, zIndex: Ne, transformOrigin: "0 0", transform: C, ...Fe }, { opacity: 0, margin: 0, borderWidth: G, borderStyle: be, borderColor: O, borderRadius: P, zIndex: se, transformOrigin: "0 0", ...Ae }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), l = i.hideFromClone === true || Te === true ? void 0 : D.animate([{ margin: `${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px`, width: `${Q + u.marginH}px`, height: `${le + u.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), d = i.keepToClone === true ? void 0 : L.animate([Te === true ? { margin: `${ue < 0 ? ue / 2 : 0}px ${ve < 0 ? ve / 2 : 0}px`, width: `${Q + u.marginH}px`, height: `${le + u.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${oe < 0 ? oe / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${we + I.marginH}px`, height: `${Ce + I.marginV}px` }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay });
        const Mt = (Yt) => {
          l == null ? void 0 : l.cancel(), s == null ? void 0 : s.cancel(), d == null ? void 0 : d.cancel(), c.cancel(), c.removeEventListener("finish", Mt), c.removeEventListener("cancel", Mt), ae(Yt), l = void 0, s = void 0, d = void 0, c = void 0;
        };
        a.qMorphCancel = () => {
          a.qMorphCancel = void 0, n = true, Mt();
        }, A.qMorphCancel = () => {
          A.qMorphCancel = void 0, n = true, Mt();
        }, c.addEventListener("finish", Mt), c.addEventListener("cancel", Mt), t = (Yt) => n === true || c === void 0 ? false : Yt === true ? (Mt(true), true) : (r = r !== true, l == null ? void 0 : l.reverse(), s == null ? void 0 : s.reverse(), d == null ? void 0 : d.reverse(), c.reverse(), true);
      } else {
        const _e2 = `q-morph-anim-${++kx}`, ke = document.createElement("style"), Fe = i.resize === true ? `
            transform: translate(${Z}px, ${re}px);
            width: ${Q}px;
            height: ${le}px;
          ` : `transform: translate(${Z}px, ${re}px) scale(${W}, ${fe});`, Ae = i.resize === true ? `
            width: ${we}px;
            height: ${Ce}px;
          ` : "", Xe = i.resize === true ? `
            width: ${Q}px;
            height: ${le}px;
          ` : "", ct = i.resize === true ? `
            transform: translate(${-1 * Z}px, ${-1 * re}px);
            width: ${we}px;
            height: ${Ce}px;
          ` : `transform: translate(${-1 * Z}px, ${-1 * re}px) scale(${1 / W}, ${1 / fe});`, Mt = $ !== void 0 ? `opacity: ${i.tweenToOpacity};` : `background-color: ${b};`, Yt = $ !== void 0 ? "opacity: 1;" : `background-color: ${te};`, dr = $ === void 0 ? "" : `
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
                margin: ${oe < 0 ? oe / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
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

          ${dr}

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
        }, A.addEventListener("animationend", Ve), A.addEventListener("animationcancel", Ve), t = (Oe) => n === true || !A || !D || !L ? false : Oe === true ? (Ve(), true) : (r = r !== true, Se = Se === "normal" ? "reverse" : "normal", D.style.animationDirection = Se, $.style.animationDirection = Se, L.style.animationDirection = Se, A.style.animationDirection = Se, true);
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
var kl = {}, Rx = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], Px = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function qo(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function u0(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, qo(t, "remove"), qo(n, "remove");
  const r = Bx({ from: t.el, to: n.el, onToggle() {
    qo(t, "add"), qo(n, "remove");
  }, ...n.opts, onEnd(o, i) {
    var _a3, _b2;
    (_b2 = (_a3 = n.opts).onEnd) == null ? void 0 : _b2.call(_a3, o, i), i !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), u0(e));
  } });
  e.cancel = () => {
    r(true), e.cancel = void 0;
  };
}
function c0(e, t) {
  const n = t.opts;
  Px.forEach((r) => {
    n[r] = e[r] === true;
  });
}
function Dx(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function Ox(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  Rx.forEach((r) => {
    e[r] !== void 0 && (n[r] = e[r]);
  });
}
function Vx(e, t) {
  if (t.name === e) {
    const n = kl[t.group];
    n === void 0 ? (kl[t.group] = { name: t.group, model: e, queue: [t], animating: false }, qo(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && u0(n));
    return;
  }
  t.animating === false && qo(t, "add");
}
function ev(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, Ox(t, e), c0(t, e)) : n = "" + t, n !== e.model ? (e.model = n, Vx(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Vn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  c0(t.modifiers, n), Dx(t.arg, n), ev(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  ev(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qmorph, n = kl[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((o) => o !== t), n.queue.length === 0 && ((_a3 = n.cancel) == null ? void 0 : _a3.call(n), delete kl[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var Fx = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function tv(e, t, n) {
  var _a3;
  t.handler = n, (_a3 = t.observer) == null ? void 0 : _a3.disconnect(), t.observer = new MutationObserver((r) => {
    typeof t.handler == "function" && (t.handler(r) === false || t.once === true) && d0(e);
  }), t.observer.observe(e, t.opts);
}
function d0(e) {
  var _a3;
  const t = e.__qmutation;
  t !== void 0 && ((_a3 = t.observer) == null ? void 0 : _a3.disconnect(), delete e.__qmutation);
}
Vn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: r }) {
  const o = { once: t, opts: Object.keys(n).length === 0 ? Fx : n };
  tv(e, o, r), e.__qmutation = o;
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qmutation;
  r !== void 0 && t !== n && tv(e, r, n);
}, beforeUnmount: d0 });
var { passive: Ml } = ht;
function nv(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Ml);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Ml), e.scroll());
}
Vn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: jn(e), scroll: Ko(() => {
    let r, o;
    n.scrollTarget === window ? (o = e.getBoundingClientRect().bottom, r = window.innerHeight) : (o = hl(e).top + zo(e), r = hl(n.scrollTarget).top + zo(n.scrollTarget)), o > 0 && o < r && (n.scrollTarget.removeEventListener("scroll", n.scroll, Ml), n.handler(e));
  }, 25) };
  nv(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && nv(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Ml), t.scroll.cancel(), delete e.__qscrollfire;
} });
function rv(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, ht.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, ht.passive);
}
Vn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: jn(e), scroll() {
    n.handler(Ar(n.scrollTarget), Kl(n.scrollTarget));
  } };
  rv(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && rv(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, ht.passive), delete e.__qscroll;
} });
Vn({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && ze.has.touch !== true) return;
  const r = { handler: t.value, noop: Tt, mouseStart(i) {
    typeof r.handler == "function" && Nl(i) === true && (Et(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(i, true));
  }, touchStart(i) {
    if (i.target !== void 0 && typeof r.handler == "function") {
      const a = i.target;
      Et(r, "temp", [[a, "touchmove", "move", "passiveCapture"], [a, "touchcancel", "end", "notPassiveCapture"], [a, "touchend", "end", "notPassiveCapture"]]), r.start(i);
    }
  }, start(i, a) {
    r.origin = an(i);
    const l = Date.now();
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Pn(), r.styleCleanup = (s) => {
      r.styleCleanup = void 0;
      const d = () => {
        document.body.classList.remove("non-selectable");
      };
      s === true ? (Pn(), setTimeout(d, 10)) : d();
    }), r.triggered = false, r.sensitivity = a === true ? r.mouseSensitivity : r.touchSensitivity, r.timer = setTimeout(() => {
      r.timer = void 0, Pn(), r.triggered = true, r.handler({ evt: i, touch: a !== true, mouse: a === true, position: r.origin, duration: Date.now() - l });
    }, r.duration);
  }, move(i) {
    const { top: a, left: l } = an(i);
    r.timer !== void 0 && (Math.abs(l - r.origin.left) >= r.sensitivity || Math.abs(a - r.origin.top) >= r.sensitivity) && (clearTimeout(r.timer), r.timer = void 0);
  }, end(i) {
    var _a3;
    Zt(r, "temp"), (_a3 = r.styleCleanup) == null ? void 0 : _a3.call(r, r.triggered), r.triggered === true ? i !== void 0 && Ke(i) : r.timer !== void 0 && (clearTimeout(r.timer), r.timer = void 0);
  } }, o = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((i, a) => {
    const l = parseInt(i, 10);
    l && (o[a] = l);
  }), [r.duration, r.touchSensitivity, r.mouseSensitivity] = o, e.__qtouchhold = r, n.mouse === true) {
    const i = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Et(r, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  ze.has.touch === true && Et(r, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchhold;
  t !== void 0 && (Zt(t, "main"), Zt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchhold);
} });
var f0 = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, $x = new RegExp(`^([\\d+]+|${Object.keys(f0).join("|")})$`, "i");
function Ix(e, t) {
  const { top: n, left: r } = an(e);
  return Math.abs(r - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Vn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: r }) {
  const o = Object.keys(t).reduce((s, d) => {
    if ($x.test(d) === true) {
      const c = isNaN(parseInt(d, 10)) ? f0[d.toLowerCase()] : parseInt(d, 10);
      c >= 0 && s.push(c);
    }
    return s;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && o.length === 0) return;
  const i = typeof r == "string" && r.length !== 0 ? r.split(":").map((s) => parseInt(s, 10)) : [0, 600, 300], a = i.length - 1, l = { keyboard: o, handler: n, noop: Tt, mouseStart(s) {
    l.event === void 0 && typeof l.handler == "function" && Nl(s) === true && (Et(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(s, true));
  }, keyboardStart(s) {
    if (typeof l.handler == "function" && Cn(s, o) === true) {
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
    l.event !== void 0 && l.timer !== void 0 && Ix(s, l.origin) === true && (clearTimeout(l.timer), l.timer = void 0);
  }, end(s) {
    var _a3;
    l.event !== void 0 && ((_a3 = l.styleCleanup) == null ? void 0 : _a3.call(l, true), s !== void 0 && l.event.repeatCount > 0 && Ke(s), Zt(l, "temp"), l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0), l.event = void 0);
  } };
  if (e.__qtouchrepeat = l, t.mouse === true) {
    const s = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    Et(l, "main", [[e, "mousedown", "mouseStart", `passive${s}`]]);
  }
  if (ze.has.touch === true && Et(l, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), o.length !== 0) {
    const s = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    Et(l, "main", [[e, "keydown", "keyboardStart", `notPassive${s}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const r = e.__qtouchrepeat;
  r !== void 0 && t !== n && (typeof n != "function" && r.end(), r.handler = n);
}, beforeUnmount(e) {
  var _a3;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Zt(t, "main"), Zt(t, "temp"), (_a3 = t.styleCleanup) == null ? void 0 : _a3.call(t), delete e.__qtouchrepeat);
} });
function Nx(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var Da;
function zx() {
  return ze.is.winphone ? "msapplication-navbutton-color" : ze.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function Hx(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function jx(e) {
  Da === void 0 && (Da = zx());
  let t = Hx(Da);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", Da)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
ze.is.mobile === true && (ze.is.nativeMobile === true || ze.is.winphone === true || ze.is.safari === true || ze.is.webkit === true || ze.is.vivaldi);
var ai = {};
function Ux(e) {
  Object.assign(Xt, { request: e, exit: e, toggle: e });
}
function v0() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function h0() {
  const e = Xt.activeEl = Xt.isActive === false ? null : v0();
  x1(e === null || e === document.documentElement ? document.body : e);
}
function Qx() {
  Xt.isActive = Xt.isActive === false, h0();
}
function ov(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Xt = Or({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
ai.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Xt.isCapable = ai.request !== void 0, Xt.isCapable === false ? Ux(() => Promise.reject("Not capable")) : (Object.assign(Xt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Xt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Xt.exit() : Promise.resolve()).finally(() => ov(t, ai.request));
}, exit() {
  return Xt.isActive === true ? ov(document, ai.exit) : Promise.resolve();
}, toggle(e) {
  return Xt.isActive === true ? Xt.exit() : Xt.request(e);
} }), ai.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Xt.isActive = !!v0(), Xt.isActive === true && h0(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = Qx;
}));
var Kx = Or({ appVisible: true }, { install({ $q: e }) {
  It(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      Kx.appVisible = !document[e];
    };
    document.addEventListener(t, n, false);
  }
}
ge({ name: "BottomSheetComponent", props: { ...rt, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), r = ot(e, n.$q), o = H(null);
  function i() {
    o.value.show();
  }
  function a() {
    o.value.hide();
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
      return u.label === void 0 ? h(so, { class: "col-all", dark: r.value }) : h("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", u.class], style: u.style, tabindex: 0, role: "listitem", onClick() {
        l(u);
      }, onKeyup(y) {
        y.keyCode === 13 && l(u);
      } }, [h("div", { class: "q-focus-helper" }), u.icon ? h(tt, { name: u.icon, color: u.color }) : g ? h("img", { class: u.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : h("div", { class: "q-bottom-sheet__empty-icon" }), h("div", u.label)]);
    });
  }
  function c() {
    return e.actions.map((u) => {
      const g = u.avatar || u.img;
      return u.label === void 0 ? h(so, { spaced: true, dark: r.value }) : h(jo, { class: ["q-bottom-sheet__item", u.classes], style: u.style, tabindex: 0, clickable: true, dark: r.value, onClick() {
        l(u);
      } }, () => [h(yn, { avatar: true }, () => u.icon ? h(tt, { name: u.icon, color: u.color }) : g ? h("img", { class: u.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), h(yn, () => u.label)]);
    });
  }
  function f() {
    const u = [];
    return e.title && u.push(h(Xr, { class: "q-dialog__title" }, () => e.title)), e.message && u.push(h(Xr, { class: "q-dialog__message" }, () => e.message)), u.push(e.grid === true ? h("div", { class: "row items-stretch justify-start", role: "list" }, d()) : h("div", { role: "list" }, c())), u;
  }
  function v() {
    return [h(tg, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (r.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: i, hide: a }), () => h(Gl, { ref: o, position: "bottom", onHide: s }, v);
} });
function m0(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, m0(e[n], t[n])) : e[n] = t[n];
}
function Wx(e, t, n) {
  return (r) => {
    let o, i;
    const a = r.component !== void 0;
    if (a === true) {
      const { component: _, componentProps: p } = r;
      o = typeof _ == "string" ? n.component(_) : _, i = p || {};
    } else {
      const { class: _, style: p, ...b } = r;
      o = e, i = b, _ !== void 0 && (b.cardClass = _), p !== void 0 && (b.cardStyle = p);
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
          p !== void 0 && (C.cardClass = p), b !== void 0 && (C.cardStyle = b), m0(i, C);
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
    let x = Hl({ name: "QGlobalDialog", setup: () => () => h(o, { ...i, ref: d, onOk: y, onHide: w, onVnodeMounted(..._) {
      typeof i.onVnodeMounted == "function" && i.onVnodeMounted(..._), Qe(() => f("show"));
    } }) }, n);
    return l = x.mount(c), g;
  };
}
function g0(e) {
  return encodeURIComponent(e);
}
function b0(e) {
  return decodeURIComponent(e);
}
function Yx(e) {
  return g0(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function Gx(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = b0(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function p0(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function Xx(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), r = e.match(/(\d+)h/), o = e.match(/(\d+)m/), i = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), r && (t += r[1] * 36e5), o && (t += o[1] * 6e4), i && (t += i[1] * 1e3), t === 0 ? e : p0(t);
}
function y0(e, t, n = {}, r) {
  let o, i;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? o = n.expires.toUTCString() : typeof n.expires == "string" ? o = Xx(n.expires) : (i = parseFloat(n.expires), o = isNaN(i) === false ? p0(i * 864e5) : n.expires));
  const a = `${g0(e)}=${Yx(t)}`, l = [a, o !== void 0 ? "; Expires=" + o : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (r) {
    r.req.qCookies ? r.req.qCookies.push(l) : r.req.qCookies = [l], r.res.setHeader("Set-Cookie", r.req.qCookies);
    let s = r.req.headers.cookie || "";
    if (o !== void 0 && i < 0) {
      const d = ql(e, r);
      d !== void 0 && (s = s.replace(`${e}=${d}; `, "").replace(`; ${e}=${d}`, "").replace(`${e}=${d}`, ""));
    } else s = s ? `${a}; ${s}` : l;
    r.req.headers.cookie = s;
  } else document.cookie = l;
}
function ql(e, t) {
  const n = t ? t.req.headers : document, r = n.cookie ? n.cookie.split("; ") : [], o = r.length;
  let i = e ? null : {}, a = 0, l, s, d;
  for (; a < o; a++) if (l = r[a].split("="), s = b0(l.shift()), d = l.join("="), !e) i[s] = d;
  else if (e === s) {
    i = Gx(d);
    break;
  }
  return i;
}
function Jx(e, t, n) {
  y0(e, "", { expires: -1, ...t }, n);
}
function Zx(e, t) {
  return ql(e, t) !== null;
}
function _0(e) {
  return { get: (t) => ql(t, e), set: (t, n, r) => y0(t, n, r, e), has: (t) => Zx(t, e), remove: (t, n) => Jx(t, n, e), getAll: () => ql(null, e) };
}
var $c = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && ($c.parseSSR = (e) => {
  if (e !== void 0) return _0(e);
});
Object.assign($c, _0());
var eC = $c, tC = ge({ name: "DialogPluginComponent", props: { ...rt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = xe(), { $q: r } = n, o = ot(e, r), i = H(null), a = H(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), l = m(() => "q-dialog-plugin" + (o.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), s = m(() => e.color || (o.value === true ? "amber" : "primary")), d = m(() => e.progress === false ? null : Ot(e.progress) === true ? { component: e.progress.spinner || Tn, props: { color: e.progress.color || s.value } } : { component: Tn, props: { color: s.value } }), c = m(() => e.prompt !== void 0 || e.options !== void 0), f = m(() => {
    if (c.value !== true) return {};
    const { model: T, isValid: z, items: U, ...j } = e.prompt !== void 0 ? e.prompt : e.options;
    return j;
  }), v = m(() => Ot(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok), u = m(() => Ot(e.cancel) === true || e.cancel === true ? r.lang.label.cancel : e.cancel), g = m(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(a.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(a.value) !== true : false), y = m(() => ({ color: s.value, label: v.value, ripple: false, disable: g.value, ...Ot(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && c.value !== true || void 0, onClick: p })), w = m(() => ({ color: s.value, label: u.value, ripple: false, ...Ot(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && c.value !== true || void 0, onClick: b }));
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
    return e.html === true ? h(Xr, { class: T, innerHTML: z }) : h(Xr, { class: T }, () => z);
  }
  function R() {
    return [h(Kg, { color: s.value, dense: true, autofocus: true, dark: o.value, ...f.value, modelValue: a.value, "onUpdate:modelValue": q, onKeyup: B })];
  }
  function D() {
    return [h(uw, { color: s.value, options: e.options.items, dark: o.value, ...f.value, modelValue: a.value, "onUpdate:modelValue": q })];
  }
  function $() {
    const T = [];
    return e.cancel && T.push(h(et, w.value)), e.ok && T.push(h(et, y.value)), h(I1, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => T);
  }
  function M() {
    const T = [];
    return e.title && T.push(V("q-dialog__title", e.title)), e.progress !== false && T.push(h(Xr, { class: "q-dialog__progress" }, () => h(d.value.component, d.value.props))), e.message && T.push(V("q-dialog__message", e.message)), e.prompt !== void 0 ? T.push(h(Xr, { class: "scroll q-dialog-plugin__form" }, R)) : e.options !== void 0 && T.push(h(so, { dark: o.value }), h(Xr, { class: "scroll q-dialog-plugin__form" }, D), h(so, { dark: o.value })), (e.ok || e.cancel) && T.push($()), T;
  }
  function A() {
    return [h(tg, { class: [l.value, e.cardClass], style: e.cardStyle, dark: o.value }, M)];
  }
  return Object.assign(n, { show: x, hide: _ }), () => h(Gl, { ref: i, onHide: C }, A);
} }), nC = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = Wx(tC, true, t);
} }, So, js, iv = 0, jr = null, Ht = {}, Zr = {}, w0 = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: Tn, customClass: "" }, x0 = { ...w0 };
function rC(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Zr[e.group] !== void 0) return Object.assign(Zr[e.group], e);
  const t = Ot(e) === true && e.ignoreDefaults === true ? { ...w0, ...e } : { ...x0, ...e };
  return Zr[t.group] = t, t;
}
var Mn = Or({ isActive: false }, { show(e) {
  Ht = rC(e);
  const { group: t } = Ht;
  return Mn.isActive = true, So !== void 0 ? (Ht.uid = iv, js.$forceUpdate()) : (Ht.uid = ++iv, jr !== null && clearTimeout(jr), jr = setTimeout(() => {
    jr = null;
    const n = fa("q-loading");
    So = Hl({ name: "QLoading", setup() {
      st(() => {
        Ru(true);
      });
      function r() {
        Mn.isActive !== true && So !== void 0 && (Ru(false), So.unmount(n), _c(n), So = void 0, js = void 0);
      }
      function o() {
        if (Mn.isActive !== true) return null;
        const i = [h(Ht.spinner, { class: "q-loading__spinner", color: Ht.spinnerColor, size: Ht.spinnerSize })];
        return Ht.message && i.push(h("div", { class: "q-loading__message" + (Ht.messageColor ? ` text-${Ht.messageColor}` : ""), [Ht.html === true ? "innerHTML" : "textContent"]: Ht.message })), h("div", { class: "q-loading fullscreen flex flex-center z-max " + Ht.customClass.trim(), key: Ht.uid }, [h("div", { class: "q-loading__backdrop" + (Ht.backgroundColor ? ` bg-${Ht.backgroundColor}` : "") }), h("div", { class: "q-loading__box column items-center " + Ht.boxClass }, i)]);
      }
      return () => h($t, { name: "q-transition--fade", appear: true, onAfterLeave: r }, o);
    } }, Mn.__parentApp), js = So.mount(n);
  }, Ht.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Mn.hide(t);
      return;
    }
    Mn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Mn.isActive === true) {
    if (e === void 0) Zr = {};
    else {
      if (Zr[e] === void 0) return;
      {
        delete Zr[e];
        const t = Object.keys(Zr);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Mn.show({ group: n });
          return;
        }
      }
    }
    jr !== null && (clearTimeout(jr), jr = null), Mn.isActive = false;
  }
}, setDefaults(e) {
  Ot(e) === true && Object.assign(x0, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Mn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), oC = Mn, Oa = H(null), av = Or({ isActive: false }, { start: Tt, stop: Tt, increment: Tt, setDefaults: Tt, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = H(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function r() {
    av.isActive = true;
  }
  function o() {
    av.isActive = false;
  }
  const i = fa("q-loading-bar");
  Hl({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => h(Zy, { ...n.value, onStart: r, onStop: o, ref: Oa }) }, t).mount(i), Object.assign(this, { start(a) {
    Oa.value.start(a);
  }, stop() {
    Oa.value.stop();
  }, increment() {
    Oa.value.increment.apply(null, arguments);
  }, setDefaults(a) {
    Ot(a) === true && Object.assign(n.value, a);
  } });
} }), iC = 0, Ka = {}, Wa = {}, qn = {}, C0 = {}, aC = /^\s*$/, S0 = [], lC = [void 0, null, true, false, ""], Ic = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], sC = ["top-left", "top-right", "bottom-left", "bottom-right"], Ti = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function T0(e, t, n) {
  var _a3;
  if (!e) return li("parameter required");
  let r;
  const o = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(o, Ka), Ot(e) === false && (o.type && Object.assign(o, Ti[o.type]), e = { message: e }), Object.assign(o, Ti[e.type || o.type], e), typeof o.icon == "function" && (o.icon = o.icon(t)), o.spinner ? (o.spinner === true && (o.spinner = Tn), o.spinner = Bl(o.spinner)) : o.spinner = false, o.meta = { hasMedia: !!(o.spinner !== false || o.icon || o.avatar), hasText: lv(o.message) || lv(o.caption) }, o.position) {
    if (Ic.includes(o.position) === false) return li("wrong position", e);
  } else o.position = "bottom";
  if (lC.includes(o.timeout) === true) o.timeout = 5e3;
  else {
    const s = Number(o.timeout);
    if (isNaN(s) || s < 0) return li("wrong timeout", e);
    o.timeout = Number.isFinite(s) ? s : 0;
  }
  o.timeout === 0 ? o.progress = false : o.progress === true && (o.meta.progressClass = "q-notification__progress" + (o.progressClass ? ` ${o.progressClass}` : ""), o.meta.progressStyle = { animationDuration: `${o.timeout + 1e3}ms` });
  const i = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(Ka.actions) === true ? Ka.actions : []).concat(Array.isArray((_a3 = Ti[e.type]) == null ? void 0 : _a3.actions) === true ? Ti[e.type].actions : []), { closeBtn: a } = o;
  if (a && i.push({ label: typeof a == "string" ? a : t.lang.label.close }), o.actions = i.map(({ handler: s, noDismiss: d, ...c }) => ({ flat: true, ...c, onClick: typeof s == "function" ? () => {
    s(), d !== true && l();
  } : () => {
    l();
  } })), o.multiLine === void 0 && (o.multiLine = o.actions.length > 1), Object.assign(o.meta, { class: `q-notification row items-stretch q-notification--${o.multiLine === true ? "multi-line" : "standard"}` + (o.color !== void 0 ? ` bg-${o.color}` : "") + (o.textColor !== void 0 ? ` text-${o.textColor}` : "") + (o.classes !== void 0 ? ` ${o.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (o.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (o.multiLine === true ? "" : " col"), leftClass: o.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...o.attrs } }), o.group === false ? (o.group = void 0, o.meta.group = void 0) : ((o.group === void 0 || o.group === true) && (o.group = [o.message, o.caption, o.multiline].concat(o.actions.map((s) => `${s.label}*${s.icon}`)).join("|")), o.meta.group = o.group + "|" + o.position), o.actions.length === 0 ? o.actions = void 0 : o.meta.actionsClass = "q-notification__actions row items-center " + (o.multiLine === true ? "justify-end" : "col-auto") + (o.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), n !== void 0) {
    n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), o.meta.uid = n.notif.meta.uid;
    const s = qn[o.position].value.indexOf(n.notif);
    qn[o.position].value[s] = o;
  } else {
    const s = Wa[o.meta.group];
    if (s === void 0) {
      if (o.meta.uid = iC++, o.meta.badge = 1, ["left", "right", "center"].indexOf(o.position) !== -1) qn[o.position].value.splice(Math.floor(qn[o.position].value.length / 2), 0, o);
      else {
        const d = o.position.indexOf("top") !== -1 ? "unshift" : "push";
        qn[o.position].value[d](o);
      }
      o.group !== void 0 && (Wa[o.meta.group] = o);
    } else {
      if (s.meta.timer && (clearTimeout(s.meta.timer), s.meta.timer = void 0), o.badgePosition !== void 0) {
        if (sC.includes(o.badgePosition) === false) return li("wrong badgePosition", e);
      } else o.badgePosition = `top-${o.position.indexOf("left") !== -1 ? "right" : "left"}`;
      o.meta.uid = s.meta.uid, o.meta.badge = s.meta.badge + 1, o.meta.badgeClass = `q-notification__badge q-notification__badge--${o.badgePosition}` + (o.badgeColor !== void 0 ? ` bg-${o.badgeColor}` : "") + (o.badgeTextColor !== void 0 ? ` text-${o.badgeTextColor}` : "") + (o.badgeClass ? ` ${o.badgeClass}` : "");
      const d = qn[o.position].value.indexOf(s);
      qn[o.position].value[d] = Wa[o.meta.group] = o;
    }
  }
  const l = () => {
    uC(o), r = void 0;
  };
  if (o.timeout > 0 && (o.meta.timer = setTimeout(() => {
    o.meta.timer = void 0, l();
  }, o.timeout + 1e3)), o.group !== void 0) return (s) => {
    s !== void 0 ? li("trying to update a grouped one which is forbidden", e) : l();
  };
  if (r = { dismiss: l, config: e, notif: o }, n !== void 0) {
    Object.assign(n, r);
    return;
  }
  return (s) => {
    if (r !== void 0) if (s === void 0) r.dismiss();
    else {
      const d = Object.assign({}, r.config, s, { group: false, position: o.position });
      T0(d, t, r);
    }
  };
}
function uC(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = qn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Wa[e.meta.group];
    const n = S0["" + e.meta.uid];
    if (n) {
      const { width: r, height: o } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = r, n.style.height = o;
    }
    qn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function lv(e) {
  return e != null && aC.test(e) !== true;
}
function li(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function cC() {
  return ge({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => h("div", { class: "q-notifications" }, Ic.map((e) => h(yy, { key: e, class: C0[e], tag: "div", name: `q-notification--${e}` }, () => qn[e].value.map((t) => {
      const n = t.meta, r = [];
      if (n.hasMedia === true && (t.spinner !== false ? r.push(h(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? r.push(h(tt, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && r.push(h(Tu, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => h("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
        let i;
        const a = { class: "q-notification__message col" };
        if (t.html === true) a.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          const l = [t.message];
          i = t.caption ? [h("div", l), h("div", { class: "q-notification__caption" }, [t.caption])] : l;
        }
        r.push(h("div", a, i));
      }
      const o = [h("div", { class: n.contentClass }, r)];
      return t.progress === true && o.push(h("div", { key: `${n.uid}|p|${n.badge}`, class: n.progressClass, style: n.progressStyle })), t.actions !== void 0 && o.push(h("div", { class: n.actionsClass }, t.actions.map((i) => h(et, i)))), n.badge > 1 && o.push(h("div", { key: `${n.uid}|${n.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [n.badge])), h("div", { ref: (i) => {
        S0["" + n.uid] = i;
      }, key: n.uid, class: n.class, ...n.attrs }, [h("div", { class: n.wrapperClass }, o)]);
    }))));
  } });
}
var dC = { setDefaults(e) {
  Ot(e) === true && Object.assign(Ka, e);
}, registerType(e, t) {
  Ot(t) === true && (Ti[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => T0(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Ic.forEach((r) => {
      qn[r] = H([]);
      const o = ["left", "center", "right"].includes(r) === true ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom", i = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center", a = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${i}`;
      C0[r] = `q-notifications__list q-notifications__list--${o} fixed column no-wrap ${a}`;
    });
    const n = fa("q-notify");
    Hl(cC(), t).mount(n);
  }
} };
function fC(e) {
  return xu(e) === true ? "__q_date|" + e.getTime() : Uy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function vC(e) {
  if (e.length < 9) return e;
  const n = e.substring(0, 8), r = e.substring(9);
  switch (n) {
    case "__q_date":
      const o = Number(r);
      return new Date(Number.isNaN(o) === true ? r : o);
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
function k0() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: Tt, setItem: Tt, remove: Tt, removeItem: Tt, clear: Tt, isEmpty: () => true };
}
function M0(e) {
  const t = window[e + "Storage"], n = (a) => {
    const l = t.getItem(a);
    return l ? vC(l) : null;
  }, r = (a) => t.getItem(a) !== null, o = (a, l) => {
    t.setItem(a, fC(l));
  }, i = (a) => {
    t.removeItem(a);
  };
  return { has: r, hasItem: r, getLength: () => t.length, getItem: n, getIndex: (a) => a < t.length ? n(t.key(a)) : null, getKey: (a) => a < t.length ? t.key(a) : null, getAll: () => {
    let a;
    const l = {}, s = t.length;
    for (let d = 0; d < s; d++) a = t.key(d), l[a] = n(a);
    return l;
  }, getAllKeys: () => {
    const a = [], l = t.length;
    for (let s = 0; s < l; s++) a.push(t.key(s));
    return a;
  }, set: o, setItem: o, remove: i, removeItem: i, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var q0 = ze.has.webStorage === false ? k0() : M0("local"), hC = { install({ $q: e }) {
  e.localStorage = q0;
} };
Object.assign(hC, q0);
var E0 = ze.has.webStorage === false ? k0() : M0("session"), mC = { install({ $q: e }) {
  e.sessionStorage = E0;
} };
Object.assign(mC, E0);
var gC = ["ok", "hide"];
s0(gC);
function Nc() {
  return Lt(wm);
}
var bC = { version: "2.18.1", install: Ky, lang: zl, iconSet: _m };
function pC(e, t) {
  const n = ic("router-view");
  return ln(), Gr(n, { class: "view" });
}
const ma = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
}, yC = {}, _C = ma(yC, [["render", pC]]), wC = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", xC = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", CC = /* @__PURE__ */ zn({ __name: "Quasar", setup(e) {
  const t = Nc();
  let n = H(false), r = H(false), o = H(true);
  const i = "production";
  return (a, l) => {
    const s = ic("router-view"), d = sp("ripple");
    return ln(), Gr(Re(nw), { view: "hHh LpR fFf" }, { default: qt(() => [Ue(Re(H_), { class: "bg-primary text-white", elevated: "", id: "header" }, { default: qt(() => [Ue(Re(Hf), null, { default: qt(() => [Ue(Re(et), { dense: "", flat: "", round: "", icon: "menu", onClick: l[0] || (l[0] = (c) => wt(n) ? n.value = !Re(n) : n = !Re(n)) }), Ue(Re(jf), null, { default: qt(() => [Ue(Re(Tu), null, { default: qt(() => l[10] || (l[10] = [$e("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), l[11] || (l[11] = kr("\xA0WebGL mtg"))]), _: 1 }), Re(t).dark.isActive ? (ln(), Gr(Re(et), { key: 0, dense: "", flat: "", round: "", icon: Re(xC), onClick: l[1] || (l[1] = (c) => Re(t).dark.set(false)) }, null, 8, ["icon"])) : fu("", true), Re(t).dark.isActive ? fu("", true) : (ln(), Gr(Re(et), { key: 1, dense: "", flat: "", round: "", icon: Re(wC), onClick: l[2] || (l[2] = (c) => Re(t).dark.set(true)) }, null, 8, ["icon"])), Ue(Re(et), { dense: "", flat: "", round: "", icon: "menu", onClick: l[3] || (l[3] = (c) => wt(r) ? r.value = !Re(r) : r = !Re(r)) })]), _: 1 })]), _: 1 }), Ue(Re(Cf), { modelValue: Re(n), "onUpdate:modelValue": l[8] || (l[8] = (c) => wt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: Re(o), overlay: "" }, { default: qt(() => [Ue(Re(hw), { class: "fit" }, { default: qt(() => [Ue(Re(Yg), { class: "menu-list padding" }, { default: qt(() => [hn((ln(), Gr(Re(jo), { clickable: "", onMouseover: l[4] || (l[4] = (c) => wt(o) ? o.value = false : o = false), onMouseout: l[5] || (l[5] = (c) => wt(o) ? o.value = true : o = true) }, { default: qt(() => [Ue(Re(yn), { avatar: "" }, { default: qt(() => [Ue(Re(tt), { name: "inbox" })]), _: 1 }), Ue(Re(yn), null, { default: qt(() => l[12] || (l[12] = [kr("inbox")])), _: 1 })]), _: 1 })), [[d]]), hn((ln(), Gr(Re(jo), { clickable: "", onMouseover: l[6] || (l[6] = (c) => wt(o) ? o.value = false : o = false), onMouseout: l[7] || (l[7] = (c) => wt(o) ? o.value = true : o = true) }, { default: qt(() => [Ue(Re(yn), { avatar: "" }, { default: qt(() => [Ue(Re(tt), { name: "login" })]), _: 1 }), Ue(Re(yn), null, { default: qt(() => l[13] || (l[13] = [kr("login")])), _: 1 })]), _: 1 })), [[d]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Ue(Re(Cf), { modelValue: Re(r), "onUpdate:modelValue": l[9] || (l[9] = (c) => wt(r) ? r.value = c : r = c), side: "right", bordered: "", overlay: "" }, { default: qt(() => l[14] || (l[14] = [kr("right")])), _: 1 }, 8, ["modelValue"]), Ue(Re(cw), null, { default: qt(() => [Ue(s)]), _: 1 }), Ue(Re(z_), { class: "bg-grey-8 text-orange", elevated: "", id: "footer" }, { default: qt(() => [Ue(Re(Hf), null, { default: qt(() => [Ue(Re(jf), { style: { "font-size": "1.0em" } }, { default: qt(() => [Ue(Re(Tu), { class: "q-mr-sm", size: "sm" }, { default: qt(() => l[15] || (l[15] = [$e("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), kr("\xA0vite / vue / quasar / wasm / webgl mtg \xA0mode: " + jt(Re(i)), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const ko = typeof document < "u";
function A0(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function SC(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && A0(e.default);
}
const dt = Object.assign;
function Us(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = On(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ni = () => {
}, On = Array.isArray, L0 = /#/g, TC = /&/g, kC = /\//g, MC = /=/g, qC = /\?/g, B0 = /\+/g, EC = /%5B/g, AC = /%5D/g, R0 = /%5E/g, LC = /%60/g, P0 = /%7B/g, BC = /%7C/g, D0 = /%7D/g, RC = /%20/g;
function zc(e) {
  return encodeURI("" + e).replace(BC, "|").replace(EC, "[").replace(AC, "]");
}
function PC(e) {
  return zc(e).replace(P0, "{").replace(D0, "}").replace(R0, "^");
}
function Fu(e) {
  return zc(e).replace(B0, "%2B").replace(RC, "+").replace(L0, "%23").replace(TC, "%26").replace(LC, "`").replace(P0, "{").replace(D0, "}").replace(R0, "^");
}
function DC(e) {
  return Fu(e).replace(MC, "%3D");
}
function OC(e) {
  return zc(e).replace(L0, "%23").replace(qC, "%3F");
}
function VC(e) {
  return e == null ? "" : OC(e).replace(kC, "%2F");
}
function na(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const FC = /\/$/, $C = (e) => e.replace(FC, "");
function Qs(e, t, n = "/") {
  let r, o = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return l < s && l >= 0 && (s = -1), s > -1 && (r = t.slice(0, s), i = t.slice(s + 1, l > -1 ? l : t.length), o = e(i)), l > -1 && (r = r || t.slice(0, l), a = t.slice(l, t.length)), r = HC(r ?? t, n), { fullPath: r + (i && "?") + i + a, path: r, query: o, hash: na(a) };
}
function IC(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sv(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function NC(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && Uo(t.matched[r], n.matched[o]) && O0(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Uo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function O0(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!zC(e[n], t[n])) return false;
  return true;
}
function zC(e, t) {
  return On(e) ? uv(e, t) : On(t) ? uv(t, e) : e === t;
}
function uv(e, t) {
  return On(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function HC(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let i = n.length - 1, a, l;
  for (a = 0; a < r.length; a++) if (l = r[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return n.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const mr = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var ra;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ra || (ra = {}));
var zi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(zi || (zi = {}));
function jC(e) {
  if (!e) if (ko) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), $C(e);
}
const UC = /^[^#]+#/;
function QC(e, t) {
  return e.replace(UC, "#") + t;
}
function KC(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const ts = () => ({ left: window.scrollX, top: window.scrollY });
function WC(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) return;
    t = KC(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function cv(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $u = /* @__PURE__ */ new Map();
function YC(e, t) {
  $u.set(e, t);
}
function GC(e) {
  const t = $u.get(e);
  return $u.delete(e), t;
}
let XC = () => location.protocol + "//" + location.host;
function V0(e, t) {
  const { pathname: n, search: r, hash: o } = t, i = e.indexOf("#");
  if (i > -1) {
    let l = o.includes(e.slice(i)) ? e.slice(i).length : 1, s = o.slice(l);
    return s[0] !== "/" && (s = "/" + s), sv(s, "");
  }
  return sv(n, e) + r + o;
}
function JC(e, t, n, r) {
  let o = [], i = [], a = null;
  const l = ({ state: v }) => {
    const u = V0(e, location), g = n.value, y = t.value;
    let w = 0;
    if (v) {
      if (n.value = u, t.value = v, a && a === g) {
        a = null;
        return;
      }
      w = y ? v.position - y.position : 0;
    } else r(u);
    o.forEach((x) => {
      x(n.value, g, { delta: w, type: ra.pop, direction: w ? w > 0 ? zi.forward : zi.back : zi.unknown });
    });
  };
  function s() {
    a = n.value;
  }
  function d(v) {
    o.push(v);
    const u = () => {
      const g = o.indexOf(v);
      g > -1 && o.splice(g, 1);
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
function dv(e, t, n, r = false, o = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o ? ts() : null };
}
function ZC(e) {
  const { history: t, location: n } = window, r = { value: V0(e, n) }, o = { value: t.state };
  o.value || i(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function i(s, d, c) {
    const f = e.indexOf("#"), v = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + s : XC() + e + s;
    try {
      t[c ? "replaceState" : "pushState"](d, "", v), o.value = d;
    } catch (u) {
      console.error(u), n[c ? "replace" : "assign"](v);
    }
  }
  function a(s, d) {
    const c = dt({}, t.state, dv(o.value.back, s, o.value.forward, true), d, { position: o.value.position });
    i(s, c, true), r.value = s;
  }
  function l(s, d) {
    const c = dt({}, o.value, t.state, { forward: s, scroll: ts() });
    i(c.current, c, true);
    const f = dt({}, dv(r.value, s, null), { position: c.position + 1 }, d);
    i(s, f, false), r.value = s;
  }
  return { location: r, state: o, push: l, replace: a };
}
function eS(e) {
  e = jC(e);
  const t = ZC(e), n = JC(e, t.state, t.location, t.replace);
  function r(i, a = true) {
    a || n.pauseListeners(), history.go(i);
  }
  const o = dt({ location: "", base: e, go: r, createHref: QC.bind(null, e) }, t, n);
  return Object.defineProperty(o, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(o, "state", { enumerable: true, get: () => t.state.value }), o;
}
function tS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), eS(e);
}
function nS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function F0(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const $0 = Symbol("");
var fv;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(fv || (fv = {}));
function Qo(e, t) {
  return dt(new Error(), { type: e, [$0]: true }, t);
}
function Yn(e, t) {
  return e instanceof Error && $0 in e && (t == null || !!(e.type & t));
}
const vv = "[^/]+?", rS = { sensitive: false, strict: false, start: true, end: true }, oS = /[.+*?^${}()[\]/\\]/g;
function iS(e, t) {
  const n = dt({}, rS, t), r = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const d of e) {
    const c = d.length ? [] : [90];
    n.strict && !d.length && (o += "/");
    for (let f = 0; f < d.length; f++) {
      const v = d[f];
      let u = 40 + (n.sensitive ? 0.25 : 0);
      if (v.type === 0) f || (o += "/"), o += v.value.replace(oS, "\\$&"), u += 40;
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
        f || (p = w && d.length < 2 ? `(?:/${p})` : "/" + p), w && (p += "?"), o += p, u += 20, w && (u += -8), y && (u += -20), _ === ".*" && (u += -50);
      }
      c.push(u);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const a = new RegExp(o, n.sensitive ? "" : "i");
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
  return { re: a, score: r, keys: i, parse: l, stringify: s };
}
function aS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function I0(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = aS(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (hv(r)) return 1;
    if (hv(o)) return -1;
  }
  return o.length - r.length;
}
function hv(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const lS = { type: 0, value: "" }, sS = /[a-zA-Z0-9_]/;
function uS(e) {
  if (!e) return [[]];
  if (e === "/") return [[lS]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(u) {
    throw new Error(`ERR (${n})/"${d}": ${u}`);
  }
  let n = 0, r = n;
  const o = [];
  let i;
  function a() {
    i && o.push(i), i = [];
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
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (d && f(), a()) : s === ":" ? (f(), n = 1) : v();
        break;
      case 4:
        v(), n = r;
        break;
      case 1:
        s === "(" ? n = 2 : sS.test(s) ? v() : (f(), n = 0, s !== "*" && s !== "?" && s !== "+" && l--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), f(), a(), o;
}
function cS(e, t, n) {
  const r = iS(uS(e.path), n), o = dt(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function dS(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = pv({ strict: false, end: true, sensitive: false }, t);
  function o(f) {
    return r.get(f);
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
      if (_ = cS(b, v, w), u ? u.alias.push(_) : (p = p || _, p !== _ && p.alias.push(_), g && f.name && !bv(_) && a(f.name)), N0(_) && s(_), y.children) {
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
    if (F0(f)) {
      const v = r.get(f);
      v && (r.delete(f), n.splice(n.indexOf(v), 1), v.children.forEach(a), v.alias.forEach(a));
    } else {
      const v = n.indexOf(f);
      v > -1 && (n.splice(v, 1), f.record.name && r.delete(f.record.name), f.children.forEach(a), f.alias.forEach(a));
    }
  }
  function l() {
    return n;
  }
  function s(f) {
    const v = hS(f, n);
    n.splice(v, 0, f), f.record.name && !bv(f) && r.set(f.record.name, f);
  }
  function d(f, v) {
    let u, g = {}, y, w;
    if ("name" in f && f.name) {
      if (u = r.get(f.name), !u) throw Qo(1, { location: f });
      w = u.record.name, g = dt(mv(v.params, u.keys.filter((p) => !p.optional).concat(u.parent ? u.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && mv(f.params, u.keys.map((p) => p.name))), y = u.stringify(g);
    } else if (f.path != null) y = f.path, u = n.find((p) => p.re.test(y)), u && (g = u.parse(y), w = u.record.name);
    else {
      if (u = v.name ? r.get(v.name) : n.find((p) => p.re.test(v.path)), !u) throw Qo(1, { location: f, currentLocation: v });
      w = u.record.name, g = dt({}, v.params, f.params), y = u.stringify(g);
    }
    const x = [];
    let _ = u;
    for (; _; ) x.unshift(_.record), _ = _.parent;
    return { name: w, path: y, params: g, matched: x, meta: vS(x) };
  }
  e.forEach((f) => i(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: i, resolve: d, removeRoute: a, clearRoutes: c, getRoutes: l, getRecordMatcher: o };
}
function mv(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function gv(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: fS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function fS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function bv(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function vS(e) {
  return e.reduce((t, n) => dt(t, n.meta), {});
}
function pv(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function hS(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const i = n + r >> 1;
    I0(e, t[i]) < 0 ? r = i : n = i + 1;
  }
  const o = mS(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function mS(e) {
  let t = e;
  for (; t = t.parent; ) if (N0(t) && I0(e, t) === 0) return t;
}
function N0({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function gS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const i = r[o].replace(B0, " "), a = i.indexOf("="), l = na(a < 0 ? i : i.slice(0, a)), s = a < 0 ? null : na(i.slice(a + 1));
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
    const r = e[n];
    if (n = DC(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (On(r) ? r.map((i) => i && Fu(i)) : [r && Fu(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function bS(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = On(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
const pS = Symbol(""), _v = Symbol(""), Hc = Symbol(""), z0 = Symbol(""), Iu = Symbol("");
function si() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Sr(e, t, n, r, o, i = (a) => a()) {
  const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((l, s) => {
    const d = (v) => {
      v === false ? s(Qo(4, { from: n, to: t })) : v instanceof Error ? s(v) : nS(v) ? s(Qo(2, { from: t, to: v })) : (a && r.enterCallbacks[o] === a && typeof v == "function" && a.push(v), l());
    }, c = i(() => e.call(r && r.instances[o], t, n, d));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(d)), f.catch((v) => s(v));
  });
}
function Ks(e, t, n, r, o = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (A0(s)) {
      const c = (s.__vccOpts || s)[t];
      c && i.push(Sr(c, n, r, a, l, o));
    } else {
      let d = s();
      i.push(() => d.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const f = SC(c) ? c.default : c;
        a.mods[l] = c, a.components[l] = f;
        const u = (f.__vccOpts || f)[t];
        return u && Sr(u, n, r, a, l, o)();
      }));
    }
  }
  return i;
}
function wv(e) {
  const t = Lt(Hc), n = Lt(z0), r = m(() => {
    const s = Re(e.to);
    return t.resolve(s);
  }), o = m(() => {
    const { matched: s } = r.value, { length: d } = s, c = s[d - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const v = f.findIndex(Uo.bind(null, c));
    if (v > -1) return v;
    const u = xv(s[d - 2]);
    return d > 1 && xv(c) === u && f[f.length - 1].path !== u ? f.findIndex(Uo.bind(null, s[d - 2])) : v;
  }), i = m(() => o.value > -1 && CS(n.params, r.value.params)), a = m(() => o.value > -1 && o.value === n.matched.length - 1 && O0(n.params, r.value.params));
  function l(s = {}) {
    if (xS(s)) {
      const d = t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(Ni);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  return { route: r, href: m(() => r.value.href), isActive: i, isExactActive: a, navigate: l };
}
function yS(e) {
  return e.length === 1 ? e[0] : e;
}
const _S = /* @__PURE__ */ zn({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: wv, setup(e, { slots: t }) {
  const n = Nn(wv(e)), { options: r } = Lt(Hc), o = m(() => ({ [Cv(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Cv(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const i = t.default && yS(t.default(n));
    return e.custom ? i : h("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: o.value }, i);
  };
} }), wS = _S;
function xS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function CS(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return false;
    } else if (!On(o) || o.length !== r.length || r.some((i, a) => i !== o[a])) return false;
  }
  return true;
}
function xv(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Cv = (e, t, n) => e ?? t ?? n, SS = /* @__PURE__ */ zn({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Lt(Iu), o = m(() => e.route || r.value), i = Lt(_v, 0), a = m(() => {
    let d = Re(i);
    const { matched: c } = o.value;
    let f;
    for (; (f = c[d]) && !f.components; ) d++;
    return d;
  }), l = m(() => o.value.matched[a.value]);
  _n(_v, m(() => a.value + 1)), _n(pS, l), _n(Iu, o);
  const s = H();
  return me(() => [s.value, l.value, e.name], ([d, c, f], [v, u, g]) => {
    c && (c.instances[f] = d, u && u !== c && d && d === v && (c.leaveGuards.size || (c.leaveGuards = u.leaveGuards), c.updateGuards.size || (c.updateGuards = u.updateGuards))), d && c && (!u || !Uo(c, u) || !v) && (c.enterCallbacks[f] || []).forEach((y) => y(d));
  }, { flush: "post" }), () => {
    const d = o.value, c = e.name, f = l.value, v = f && f.components[c];
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
const TS = SS;
function kS(e) {
  const t = dS(e.routes, e), n = e.parseQuery || gS, r = e.stringifyQuery || yv, o = e.history, i = si(), a = si(), l = si(), s = Nb(mr);
  let d = mr;
  ko && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Us.bind(null, (P) => "" + P), f = Us.bind(null, VC), v = Us.bind(null, na);
  function u(P, te) {
    let k, F;
    return F0(P) ? (k = t.getRecordMatcher(P), F = te) : F = P, t.addRoute(F, k);
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
      const I = Qs(n, P, te.path), Z = t.resolve({ path: I.path }, te), re = o.createHref(I.fullPath);
      return dt(I, Z, { params: v(Z.params), hash: na(I.hash), redirectedFrom: void 0, href: re });
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
    const S = IC(r, dt({}, P, { hash: PC(ee), path: F.path })), E = o.createHref(S);
    return dt({ fullPath: S, hash: ee, query: r === yv ? bS(P.query) : P.query || {} }, F, { redirectedFrom: void 0, href: E });
  }
  function _(P) {
    return typeof P == "string" ? Qs(n, P, s.value.path) : dt({}, P);
  }
  function p(P, te) {
    if (d !== P) return Qo(8, { from: te, to: P });
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
    let re;
    return !S && NC(r, F, k) && (re = Qo(16, { to: Z, from: F }), Y(F, F, true, false)), (re ? Promise.resolve(re) : D(Z, F)).catch((W) => Yn(W) ? Yn(W, 2) ? W : ye(W) : K(W, Z, F)).then((W) => {
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
    const [F, ee, S] = MS(P, te);
    k = Ks(F.reverse(), "beforeRouteLeave", P, te);
    for (const I of F) I.leaveGuards.forEach((Z) => {
      k.push(Sr(Z, P, te));
    });
    const E = V.bind(null, P, te);
    return k.push(E), O(k).then(() => {
      k = [];
      for (const I of i.list()) k.push(Sr(I, P, te));
      return k.push(E), O(k);
    }).then(() => {
      k = Ks(ee, "beforeRouteUpdate", P, te);
      for (const I of ee) I.updateGuards.forEach((Z) => {
        k.push(Sr(Z, P, te));
      });
      return k.push(E), O(k);
    }).then(() => {
      k = [];
      for (const I of S) if (I.beforeEnter) if (On(I.beforeEnter)) for (const Z of I.beforeEnter) k.push(Sr(Z, P, te));
      else k.push(Sr(I.beforeEnter, P, te));
      return k.push(E), O(k);
    }).then(() => (P.matched.forEach((I) => I.enterCallbacks = {}), k = Ks(S, "beforeRouteEnter", P, te, R), k.push(E), O(k))).then(() => {
      k = [];
      for (const I of a.list()) k.push(Sr(I, P, te));
      return k.push(E), O(k);
    }).catch((I) => Yn(I, 8) ? I : Promise.reject(I));
  }
  function $(P, te, k) {
    l.list().forEach((F) => R(() => F(P, te, k)));
  }
  function M(P, te, k, F, ee) {
    const S = p(P, te);
    if (S) return S;
    const E = te === mr, I = ko ? history.state : {};
    k && (F || E ? o.replace(P.fullPath, dt({ scroll: E && I && I.scroll }, ee)) : o.push(P.fullPath, ee)), s.value = P, Y(P, te, k, E), ye();
  }
  let A;
  function T() {
    A || (A = o.listen((P, te, k) => {
      if (!be.listening) return;
      const F = x(P), ee = q(F);
      if (ee) {
        B(dt(ee, { replace: true, force: true }), F).catch(Ni);
        return;
      }
      d = F;
      const S = s.value;
      ko && YC(cv(S.fullPath, k.delta), ts()), D(F, S).catch((E) => Yn(E, 12) ? E : Yn(E, 2) ? (B(dt(_(E.to), { force: true }), F).then((I) => {
        Yn(I, 20) && !k.delta && k.type === ra.pop && o.go(-1, false);
      }).catch(Ni), Promise.reject()) : (k.delta && o.go(-k.delta, false), K(E, F, S))).then((E) => {
        E = E || M(F, S, false), E && (k.delta && !Yn(E, 8) ? o.go(-k.delta, false) : k.type === ra.pop && Yn(E, 20) && o.go(-1, false)), $(F, S, E);
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
    return j && s.value !== mr ? Promise.resolve() : new Promise((P, te) => {
      z.add([P, te]);
    });
  }
  function ye(P) {
    return j || (j = !P, T(), z.list().forEach(([te, k]) => P ? k(P) : te()), z.reset()), P;
  }
  function Y(P, te, k, F) {
    const { scrollBehavior: ee } = e;
    if (!ko || !ee) return Promise.resolve();
    const S = !k && GC(cv(P.fullPath, 0)) || (F || !k) && history.state && history.state.scroll || null;
    return Qe().then(() => ee(P, te, S)).then((E) => E && WC(E)).catch((E) => K(E, P, te));
  }
  const L = (P) => o.go(P);
  let ne;
  const G = /* @__PURE__ */ new Set(), be = { currentRoute: s, listening: true, addRoute: u, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: y, resolve: x, options: e, push: b, replace: C, go: L, back: () => L(-1), forward: () => L(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: U.add, isReady: ie, install(P) {
    const te = this;
    P.component("RouterLink", wS), P.component("RouterView", TS), P.config.globalProperties.$router = te, Object.defineProperty(P.config.globalProperties, "$route", { enumerable: true, get: () => Re(s) }), ko && !ne && s.value === mr && (ne = true, b(o.location).catch((ee) => {
    }));
    const k = {};
    for (const ee in mr) Object.defineProperty(k, ee, { get: () => s.value[ee], enumerable: true });
    P.provide(Hc, te), P.provide(z0, ec(k)), P.provide(Iu, s);
    const F = P.unmount;
    G.add(P), P.unmount = function() {
      G.delete(P), G.size < 1 && (d = mr, A && A(), A = null, s.value = mr, ne = false, j = false), F();
    };
  } };
  function O(P) {
    return P.reduce((te, k) => te.then(() => R(k)), Promise.resolve());
  }
  return be;
}
function MS(e, t) {
  const n = [], r = [], o = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((d) => Uo(d, l)) ? r.push(l) : n.push(l));
    const s = e.matched[a];
    s && (t.matched.find((d) => Uo(d, s)) || o.push(s));
  }
  return [n, r, o];
}
let it;
const H0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && H0.decode();
let ki = null;
function Ya() {
  return (ki === null || ki.byteLength === 0) && (ki = new Uint8Array(it.memory.buffer)), ki;
}
function Ws(e, t) {
  return e = e >>> 0, H0.decode(Ya().subarray(e, e + t));
}
function qS(e) {
  const t = it.__externref_table_alloc();
  return it.__wbindgen_export_2.set(t, e), t;
}
function ES(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const r = qS(n);
    it.__wbindgen_exn_store(r);
  }
}
function AS(e, t) {
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
function Ur(e) {
  if (typeof e != "number") throw new Error(`expected a number argument, found ${typeof e}`);
}
let Mi = null;
function LS() {
  return (Mi === null || Mi.byteLength === 0) && (Mi = new Float32Array(it.memory.buffer)), Mi;
}
function Va(e, t) {
  return e = e >>> 0, LS().subarray(e / 4, e / 4 + t);
}
let qi = null;
function BS() {
  return (qi === null || qi.byteLength === 0) && (qi = new Uint32Array(it.memory.buffer)), qi;
}
function Ys(e, t) {
  return e = e >>> 0, BS().subarray(e / 4, e / 4 + t);
}
let Nu = 0;
const Ga = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, RS = typeof Ga.encodeInto == "function" ? function(e, t) {
  return Ga.encodeInto(e, t);
} : function(e, t) {
  const n = Ga.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function PS(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const l = Ga.encode(e), s = t(l.length, 1) >>> 0;
    return Ya().subarray(s, s + l.length).set(l), Nu = l.length, s;
  }
  let r = e.length, o = t(r, 1) >>> 0;
  const i = Ya();
  let a = 0;
  for (; a < r; a++) {
    const l = e.charCodeAt(a);
    if (l > 127) break;
    i[o + a] = l;
  }
  if (a !== r) {
    a !== 0 && (e = e.slice(a)), o = n(o, r, r = a + e.length * 3, 1) >>> 0;
    const l = Ya().subarray(o + a, o + r), s = RS(e, l);
    if (s.read !== e.length) throw new Error("failed to pass whole string");
    a += s.written, o = n(o, r, a, 1) >>> 0;
  }
  return Nu = a, o;
}
function DS(e) {
  const t = it.__wbindgen_export_2.get(e);
  return it.__externref_table_dealloc(e), t;
}
function OS(e) {
  const t = PS(e, it.__wbindgen_malloc, it.__wbindgen_realloc), n = Nu, r = it.mtg(t, n);
  if (r[1]) throw DS(r[0]);
}
function VS() {
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
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_pos(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_color() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_color(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_tex() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_tex(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_norm() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_norm(this.__wbg_ptr);
    var n = Va(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_ndx() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_ndx(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_offset() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_offset(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get_len() {
    if (this.__wbg_ptr == 0) throw new Error("Attempt to use a moved value");
    Ur(this.__wbg_ptr);
    const t = it.meshobj_get_len(this.__wbg_ptr);
    var n = Ys(t[0], t[1]).slice();
    return it.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
}
async function FS(e, t) {
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
function $S() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return ES(function(t, n) {
      cb(Ws(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return AS(function(t, n) {
      log(Ws(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = it.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(Ws(t, n));
  }, e;
}
function IS(e, t) {
  return it = e.exports, j0.__wbindgen_wasm_module = t, Mi = null, qi = null, ki = null, it.__wbindgen_start(), it;
}
async function j0(e) {
  if (it !== void 0) return it;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-BvPRyJ6K.wasm", import.meta.url).href, import.meta.url));
  const t = $S();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await FS(await e, t);
  return IS(n, r);
}
const NS = /* @__PURE__ */ zn({ __name: "HelloWorld", setup(e) {
  const t = () => {
    OS("test");
  };
  return (n, r) => {
    const o = ic("router-view");
    return ln(), ao(rn, null, [Ue(Re(et), { class: "q-ma-lg", color: "primary", onClick: t }, { default: qt(() => r[0] || (r[0] = [kr("test")])), _: 1 }), Ue(o)], 64);
  };
} }), zS = ma(NS, [["__scopeId", "data-v-17fee452"]]);
var HS = 1e-6, kv = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function tr() {
  var e = new kv(16);
  return kv != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function jS(e, t, n, r, o, i, a, l, s, d, c, f, v, u, g, y, w) {
  return e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = i, e[5] = a, e[6] = l, e[7] = s, e[8] = d, e[9] = c, e[10] = f, e[11] = v, e[12] = u, e[13] = g, e[14] = y, e[15] = w, e;
}
function Mv(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function U0(e, t) {
  if (e === t) {
    var n = t[1], r = t[2], o = t[3], i = t[6], a = t[7], l = t[11];
    e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = i, e[11] = t[14], e[12] = o, e[13] = a, e[14] = l;
  } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
  return e;
}
function Q0(e, t) {
  var n = t[0], r = t[1], o = t[2], i = t[3], a = t[4], l = t[5], s = t[6], d = t[7], c = t[8], f = t[9], v = t[10], u = t[11], g = t[12], y = t[13], w = t[14], x = t[15], _ = n * l - r * a, p = n * s - o * a, b = n * d - i * a, C = r * s - o * l, q = r * d - i * l, B = o * d - i * s, V = c * y - f * g, R = c * w - v * g, D = c * x - u * g, $ = f * w - v * y, M = f * x - u * y, A = v * x - u * w, T = _ * A - p * M + b * $ + C * D - q * R + B * V;
  return T ? (T = 1 / T, e[0] = (l * A - s * M + d * $) * T, e[1] = (o * M - r * A - i * $) * T, e[2] = (y * B - w * q + x * C) * T, e[3] = (v * q - f * B - u * C) * T, e[4] = (s * D - a * A - d * R) * T, e[5] = (n * A - o * D + i * R) * T, e[6] = (w * b - g * B - x * p) * T, e[7] = (c * B - v * b + u * p) * T, e[8] = (a * M - l * D + d * V) * T, e[9] = (r * D - n * M - i * V) * T, e[10] = (g * q - y * b + x * _) * T, e[11] = (f * b - c * q - u * _) * T, e[12] = (l * R - a * $ - s * V) * T, e[13] = (n * $ - r * R + o * V) * T, e[14] = (y * p - g * C - w * _) * T, e[15] = (c * C - f * p + v * _) * T, e) : null;
}
function US(e, t, n) {
  var r = t[0], o = t[1], i = t[2], a = t[3], l = t[4], s = t[5], d = t[6], c = t[7], f = t[8], v = t[9], u = t[10], g = t[11], y = t[12], w = t[13], x = t[14], _ = t[15], p = n[0], b = n[1], C = n[2], q = n[3];
  return e[0] = p * r + b * l + C * f + q * y, e[1] = p * o + b * s + C * v + q * w, e[2] = p * i + b * d + C * u + q * x, e[3] = p * a + b * c + C * g + q * _, p = n[4], b = n[5], C = n[6], q = n[7], e[4] = p * r + b * l + C * f + q * y, e[5] = p * o + b * s + C * v + q * w, e[6] = p * i + b * d + C * u + q * x, e[7] = p * a + b * c + C * g + q * _, p = n[8], b = n[9], C = n[10], q = n[11], e[8] = p * r + b * l + C * f + q * y, e[9] = p * o + b * s + C * v + q * w, e[10] = p * i + b * d + C * u + q * x, e[11] = p * a + b * c + C * g + q * _, p = n[12], b = n[13], C = n[14], q = n[15], e[12] = p * r + b * l + C * f + q * y, e[13] = p * o + b * s + C * v + q * w, e[14] = p * i + b * d + C * u + q * x, e[15] = p * a + b * c + C * g + q * _, e;
}
function Xa(e, t, n) {
  var r = n[0], o = n[1], i = n[2], a, l, s, d, c, f, v, u, g, y, w, x;
  return t === e ? (e[12] = t[0] * r + t[4] * o + t[8] * i + t[12], e[13] = t[1] * r + t[5] * o + t[9] * i + t[13], e[14] = t[2] * r + t[6] * o + t[10] * i + t[14], e[15] = t[3] * r + t[7] * o + t[11] * i + t[15]) : (a = t[0], l = t[1], s = t[2], d = t[3], c = t[4], f = t[5], v = t[6], u = t[7], g = t[8], y = t[9], w = t[10], x = t[11], e[0] = a, e[1] = l, e[2] = s, e[3] = d, e[4] = c, e[5] = f, e[6] = v, e[7] = u, e[8] = g, e[9] = y, e[10] = w, e[11] = x, e[12] = a * r + c * o + g * i + t[12], e[13] = l * r + f * o + y * i + t[13], e[14] = s * r + v * o + w * i + t[14], e[15] = d * r + u * o + x * i + t[15]), e;
}
function QS(e, t, n) {
  var r = n[0], o = n[1], i = n[2];
  return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * o, e[5] = t[5] * o, e[6] = t[6] * o, e[7] = t[7] * o, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Gs(e, t, n, r) {
  var o = r[0], i = r[1], a = r[2], l = Math.hypot(o, i, a), s, d, c, f, v, u, g, y, w, x, _, p, b, C, q, B, V, R, D, $, M, A, T, z;
  return l < HS ? null : (l = 1 / l, o *= l, i *= l, a *= l, s = Math.sin(n), d = Math.cos(n), c = 1 - d, f = t[0], v = t[1], u = t[2], g = t[3], y = t[4], w = t[5], x = t[6], _ = t[7], p = t[8], b = t[9], C = t[10], q = t[11], B = o * o * c + d, V = i * o * c + a * s, R = a * o * c - i * s, D = o * i * c - a * s, $ = i * i * c + d, M = a * i * c + o * s, A = o * a * c + i * s, T = i * a * c - o * s, z = a * a * c + d, e[0] = f * B + y * V + p * R, e[1] = v * B + w * V + b * R, e[2] = u * B + x * V + C * R, e[3] = g * B + _ * V + q * R, e[4] = f * D + y * $ + p * M, e[5] = v * D + w * $ + b * M, e[6] = u * D + x * $ + C * M, e[7] = g * D + _ * $ + q * M, e[8] = f * A + y * T + p * z, e[9] = v * A + w * T + b * z, e[10] = u * A + x * T + C * z, e[11] = g * A + _ * T + q * z, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function KS(e, t, n) {
  var r = Math.sin(n), o = Math.cos(n), i = t[4], a = t[5], l = t[6], s = t[7], d = t[8], c = t[9], f = t[10], v = t[11];
  return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = i * o + d * r, e[5] = a * o + c * r, e[6] = l * o + f * r, e[7] = s * o + v * r, e[8] = d * o - i * r, e[9] = c * o - a * r, e[10] = f * o - l * r, e[11] = v * o - s * r, e;
}
function WS(e, t, n) {
  var r = Math.sin(n), o = Math.cos(n), i = t[0], a = t[1], l = t[2], s = t[3], d = t[8], c = t[9], f = t[10], v = t[11];
  return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * o - d * r, e[1] = a * o - c * r, e[2] = l * o - f * r, e[3] = s * o - v * r, e[8] = i * r + d * o, e[9] = a * r + c * o, e[10] = l * r + f * o, e[11] = s * r + v * o, e;
}
function YS(e, t, n) {
  var r = Math.sin(n), o = Math.cos(n), i = t[0], a = t[1], l = t[2], s = t[3], d = t[4], c = t[5], f = t[6], v = t[7];
  return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = i * o + d * r, e[1] = a * o + c * r, e[2] = l * o + f * r, e[3] = s * o + v * r, e[4] = d * o - i * r, e[5] = c * o - a * r, e[6] = f * o - l * r, e[7] = v * o - s * r, e;
}
function GS(e, t) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function XS(e, t, n, r, o) {
  var i = 1 / Math.tan(t / 2), a;
  return e[0] = i / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, o != null && o !== 1 / 0 ? (a = 1 / (r - o), e[10] = (o + r) * a, e[14] = 2 * o * r * a) : (e[10] = -1, e[14] = -2 * r), e;
}
var K0 = XS, Xs = US;
function Mo(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
}
function Hi(e) {
  return function t(n) {
    return arguments.length === 0 || Mo(n) ? t : e.apply(this, arguments);
  };
}
function JS(e) {
  return function t(n, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Mo(n) ? t : Hi(function(o) {
          return e(n, o);
        });
      default:
        return Mo(n) && Mo(r) ? t : Mo(n) ? Hi(function(o) {
          return e(o, r);
        }) : Mo(r) ? Hi(function(o) {
          return e(n, o);
        }) : e(n, r);
    }
  };
}
const ZS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
var eT = Hi(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function tT(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function W0(e, t, n) {
  if (n || (n = new rT()), nT(e)) return e;
  var r = function(i) {
    var a = n.get(e);
    if (a) return a;
    n.set(e, i);
    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (i[l] = W0(e[l], true, n));
    return i;
  };
  switch (eT(e)) {
    case "Object":
      return r(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return r(Array(e.length));
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return tT(e);
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
function nT(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var rT = function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, n) {
    var r = this.hash(t), o = this.map[r];
    o || (this.map[r] = o = []), o.push([t, n]), this.length += 1;
  }, e.prototype.hash = function(t) {
    var n = [];
    for (var r in t) n.push(Object.prototype.toString.call(t[r]));
    return n.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (var n in this.map) for (var a = this.map[n], r = 0; r < a.length; r += 1) {
        var o = a[r];
        if (o[0] === t) return o[1];
      }
      return;
    }
    var i = this.hash(t), a = this.map[i];
    if (a) for (var r = 0; r < a.length; r += 1) {
      var o = a[r];
      if (o[0] === t) return o[1];
    }
  }, e;
}(), Eo = Hi(function(t) {
  return t != null && typeof t.clone == "function" ? t.clone() : W0(t);
});
function oT(e, t) {
  return function() {
    var n = arguments.length;
    if (n === 0) return t();
    var r = arguments[n - 1];
    return ZS(r) || typeof r[e] != "function" ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
  };
}
var Js = JS(oT("forEach", function(t, n) {
  for (var r = n.length, o = 0; o < r; ) t(n[o]), o += 1;
  return n;
}));
function gr(e, t, n, r) {
  e /= 360, t /= 100, n /= 100;
  let o = (1 - Math.abs(2 * n - 1)) * t, i = o * (1 - Math.abs(e * 6 % 2 - 1)), a = n - o / 2, l, s, d;
  0 <= e && e < 1 / 6 ? (l = o, s = i, d = 0) : 1 / 6 <= e && e < 2 / 6 ? (l = i, s = o, d = 0) : 2 / 6 <= e && e < 3 / 6 ? (l = 0, s = o, d = i) : 3 / 6 <= e && e < 4 / 6 ? (l = 0, s = i, d = o) : 4 / 6 <= e && e < 5 / 6 ? (l = i, s = 0, d = o) : 5 / 6 <= e && e < 1 && (l = o, s = 0, d = i);
  let c = l + a, f = s + a, v = d + a;
  return [c, f, v, r];
}
const Y0 = { zero: [{ pos: [0, 0], color: [0.35, 0.35, 0.35, 1], tex: "home", hover: 0, hot: 1, action: { kind: "home" }, no_fade: true, disb: true }, { pos: [0, -1], color: gr(30, 100, 50, 1), tex: "game", hover: 0, hot: 2, action: { kind: "show", page: "page beta" }, hint: "hint for beta" }, { pos: [0, 1], color: gr(90, 100, 50, 1), tex: "numbers", hover: 0, hot: 3, action: { kind: "show", page: "page gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: gr(150, 100, 50, 1), tex: "quote", hover: 0, hot: 4, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }, { pos: [-1, 0.5], color: gr(210, 100, 50, 1), tex: "cards", hover: 0, hot: 5, action: { kind: "sub", hexes: "s1" }, hint: "call submenu" }], s1: [{ pos: [0, 0], color: [0, 1, 0, 1], tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "home" }, hint: "go home" }, { pos: [0, 1], color: gr(0, 100, 50, 1), tex: "italic", hover: 0, hot: 2, action: { kind: "show", page: "one" }, hint: "hint for one" }, { pos: [0, -1], color: gr(180, 100, 50, 1), tex: "happy", hover: 0, hot: 3, action: { kind: "sub", hexes: "s2" }, hint: "launch sub-sub menu" }], s2: [{ pos: [0, 0], color: gr(90, 100, 50, 1), tex: "home", hover: 0, hot: 1, no_fade: true, action: { kind: "sub", hexes: "s1" }, hint: "go home" }, { pos: [-1, 0.5], color: gr(270, 100, 50, 1), tex: "one", hover: 0, hot: 2, action: { kind: "show", page: "gamma" }, hint: "hint for gamma" }, { pos: [1, -0.5], color: [1, 1, 1, 1], tex: "two", hover: 0, hot: 3, action: { kind: "show", page: "delta" }, hint: "hint for delta" }] }, Ja = Y0.zero;
class iT {
  constructor(t, n) {
    __privateAdd(this, _iT_instances);
    __privateAdd(this, _n2, Eo(Ja));
    __privateAdd(this, _i2, null);
    __privateAdd(this, _e, 1);
    __privateAdd(this, _r2, Eo(Ja));
    __privateAdd(this, _t, "in");
    __privateAdd(this, _a2);
    __privateAdd(this, _o2);
    __privateSet(this, _a2, t), __privateSet(this, _o2, n);
  }
  draw(t) {
    Js((n) => t(n.pos, n.color, n.tex, n.hot, n.no_fade ? 0 : __privateGet(this, _e), n.hover))(__privateGet(this, _n2));
  }
  step(t) {
    if (__privateGet(this, _t) == "in") __privateGet(this, _e) > 0 && (__privateSet(this, _e, __privateGet(this, _e) - t / 750), __privateSet(this, _e, Math.max(__privateGet(this, _e), 0))), __privateGet(this, _e) == 0 && __privateSet(this, _t, "idle");
    else if (__privateGet(this, _t) == "out") __privateGet(this, _e) < 1 && (__privateSet(this, _e, __privateGet(this, _e) + t / 750), __privateSet(this, _e, Math.min(__privateGet(this, _e), 1))), __privateGet(this, _e) == 1 && (__privateSet(this, _n2, __privateGet(this, _r2)), __privateSet(this, _t, "in"));
    else for (const n of __privateGet(this, _n2)) n.hot == __privateGet(this, _i2) && !n.disb ? n.hover < 1 ? n.hover += 0.1 * t / 30 : n.hover = Math.min(n.hover, 1) : n.hover > 0 ? n.hover -= 0.1 * t / 30 : n.hover = Math.max(n.hover, 0);
  }
  hover(t) {
    __privateSet(this, _i2, t), t == 0 ? __privateGet(this, _o2).call(this, null) : Js((n) => {
      n.hot == t && __privateGet(this, _o2).call(this, n.hint || null);
    })(__privateGet(this, _n2));
  }
  activate(t) {
    __privateGet(this, _t) == "idle" && Js((n) => {
      n.hot == t && __privateMethod(this, _iT_instances, l_fn).call(this, n);
    })(__privateGet(this, _n2));
  }
}
_n2 = new WeakMap();
_i2 = new WeakMap();
_e = new WeakMap();
_r2 = new WeakMap();
_t = new WeakMap();
_a2 = new WeakMap();
_o2 = new WeakMap();
_iT_instances = new WeakSet();
l_fn = function(t) {
  if (!t.disb && t.action) switch (t.action.kind) {
    case "show":
      __privateGet(this, _a2).call(this, t.action.page);
      break;
    case "home":
      __privateSet(this, _r2, Eo(Ja)), __privateSet(this, _t, "out");
      break;
    case "sub":
      __privateSet(this, _r2, Eo(Y0[t.action.hexes])), __privateSet(this, _t, "out");
      break;
  }
};
console.log(Ja);
const aT = "" + new URL("wood-g1YLw-8C.jpg", import.meta.url).href, lT = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACAAIADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUDBAYBAgf/xAA6EAABAwIEAwQHBwMFAAAAAAABAAIDBBEFEiExBhNBIlFhcRQyU5GSoeEVI0JSYrHRFoHBBzNEY/H/xAAbAQABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADERAAEDAgUCAwYHAQAAAAAAAAEAAgMEEQUSITFBE1EGcYEiYZGhwfAUMkJSsdHh8f/aAAwDAQACEQMRAD8AtoQhJJC44hrS5xs0C5PcupRj9Vy4hTsPafq7wCfGwvcGhDVlS2lhdKeP5VGfF6h0zzE4Njv2RYbLx9rVntB8IVBCtOkzssKa+pJv1D8StThNZ6XT3eRzWGzvHuKvLJYbVGkqmv8AwHRw8FqefF7VnxBV9RHkdcbFa3B638TDlcfabv8AQqRCj58XtWfEF7BBFwbhQK2XUIQkkhCEJJIXN911CSSEIQkkhKsepebAJ2Dtx7+Lfomq4QCCCLg6EJ8byxwcENV0zamJ0Tuf5WJQrNbAyGrljY9pa12nh4KDKPzN+atgbi689ewscWnhQVMwghc87jYd5WaMkkkpcXWa/Y23KYY9K/mNiAOTQXHj1/wl8hJjI5bm22OmnzVbUSZ327La4PSCngDju7X+lx/NaQGPDnHWxHRb3gvExVUfosh+8iF233LfosBTyue0yOifmOltNPDdXMJrZKHEmSxtcMvaIJGveP7qBWy+sISEcU4dbeX4F3+qcN/NL8CSSeoXiKRs0TJIzmY8BwPeF7SSQhCEkkIQqNTiEcM4i0zHQXNrnrZda0u2QtVWw0jQ6Y2uryq4lVCkpXP/ABnRo8VC7EA1pc5gAAuSSlmMyuqBDMD91awA6H6/4U8UJLxmVRVY7A6Fwp3Xd5FLCSSSdSVxCFZLJKnilMJ6cm3aaPeFny8OIjeQCPWv1/8AVr4Y3SytYwXc42C9ycN0bnuPMktfuCEmp3Pddi0WGYxFTRdOoNgNuVjnyMjfnzDK7Q2PXopYmlrSXes7UrVf01Se0k9w/hI8Vo3UNW6IkllrsceoQ0kD4xdwV5SYpTVjyyF1z5EKmhCFCrBbHgrEc8bqGV3ab2o793ULVL5lgjZXYnAYDlc12Yu7gN1vvT/+v5pzWF2yAq8TpqNwZM6xPqr6FRFfqLx6eaugggEG4OoKTmlu6dSYjT1hIhde3oo6mXkxFw9Y6N81l64trHNgiljDswu5x0B23WhxSnE9Mc1yALEAkXCSU/D7cRrDEwlsZb2iXXyjZA4pMYKQvabC4ufcs3iUc1XiTYLEnTKBz3P32WSq6HFafEZII4qgva4tLWguBHl1C2VHDUHD4mV9PJA57MpEjSLEbFbCjwd0GHMoqurnfBlDWSRyFklv1EbpDCY8HqpqVtTNXYfn1ZVOzWJ3IKt4fFNLjMYhaLyMA9oAi4237/Y5V14jwVtHFG9xsSQBySfLss1Ix0cjmPFnNNivKq8TVctNxBW08T3CNkrmsuAbAbC6WvxCoaLmQ72AsFJ+LHZVQ8PSn9YWwwyHJE6Z3rPGVvgOp/x714pKcBoy2hkjHLcWWObbXUKDh+vNVTGOV15Yvm1XqN2dskgBDXuzNuLXFgjInB7Q4LN10UlPM6J/H3814qIQIy+Z7pWxguyOAsdPJUsTw4z4XZrWiaIue0N7iScvu/ZM6ppdTStaLktIA/soKyuZT0DqgXuLtaCLdra3yXZWtLSHbLlBNMydjodXX+x/Kw6F6c8ucSbXJvsEZj4e5Ua9RWpwCj9GpOY8feS6+TeiaKnhdWKyjY/8Y7Lh4q4jGABosvMMTklkqnmbQ3/4hMMPlzMMbjq3UeSXq3h0RdIZDs3bxK5IBl1UuDSSsrGdLc6Hy5/tMfPUJPPSSx18csLngR3y5et7JwhDA6EEXBW5r8OZWZTmLXN2I3S3EKjEq2mMTqido6EN+izHEVa6nkipycpaQ95tbyW5Wb4yw7n0oq4m/eQjtW6t+iZGyOJuWJoaPcLKGLCiJ2zzyukLds2qT8Y0cjsUlrmRl9JUESMlbq0kgE6jrdZ8gEgkajZX8Oxmrww5IJM0T9HQyDMx3m06K87GcMmLfTsFhGY2L6Z5j+WoXVbpTh1aKarZLG69vWA6jqtZFJQWY51TE8BuVoke3shL24VhmLRkYNLNHWN/49S4dsfpO1/ApVU4TV0UbJq6lqIonOLWuc21yFNDUmK4tdVGJYVFXOa4uLSOQtO+TDyWls9PG5puHMc0FZ3G6ps04hheXQxkkOvfMSbkpau7hPlqXSDLayjoMEjopOrmLjxfhcQhCGV2mOB1ZpqwNP8AtyWaR49Cthy3/lPuWZ4ZoudUGoeOxH6vi76LUqwpoC5lysF4lkiNUAwe0Br9PkvLYnucAGm50TaJgijaxuw+aVpnBJzYg7rsfNcqoSxoI2UvhiSITua78xGn1UiEIQC3CFxzQ9pa4XaRYjvXVHNJyoy7rsPNOY0vIaFDUTsp43Sv2CxNZwzI2rl5M0OQE5c17gd2yhPDdQRYzQEeZ/hak6nVCtBRRrCu8TVhJItbyWHraOagnax+41a5p0PkvofFGN8PYjTULKyaprZII22hprtBOQAh7jpob6gdUg4go/SqIvYLyxdoeI6hY8EjYqunhMTy3hazC60V0Ak52Pn/AKtHxXhAi4olo8IpZHRPbG+KKMF5s5gPmd14xHhPE8Ow9lVVMiF5BE6Jrw58ZINswG17dVPW8aYpNSxwUpjow2JsT5YG2lkDRbtP36bJl/prFLXV1XRTvvFiETozndazhq1+vUH9ymNbmNkfNKImZj6efCy/2W/20fz/AIR9lv8AbR/P+E7qaaSjrX09VGWPY4tcD0KhY3mFxZbINj3rQNwGR0YkHPF9VNH4f8QyUgq2tbqLhv6rb7bel7+qcUdM2kpo4WWLWjcfi8VMquGzcyExOPbj1Hi36K0mMsBYcLyWqzGUufudUKzQucJrD1SNVWTGkj5cVz6ztT5KGpeGxm/KOwSmknq2ZDbLqT7v92UyEIVMvS0KpXh3YP4dvIq2vL2h7Cx2x+Smgk6bw4quxWkNZSuibvuPMJUhde0tcWu3BsuK7XmBBBsV1ozOACTTYHROle5vNDSSQA4afJOXnJH+p37KFA1BD3W7Iymq56QHoutfdKfsGk75viH8L1ND6G9ghLmsABYQdR9bpoo6iLnQlg9Yat8+5RxAMN0QcRqKizJnkj6qSHinn0joOIKGGvzN5fOccshb3Ejfz3S7E8To6mKnpsOw6PD4oARlY8uL79STqVRlhbIQTcEIELc+Y6lFxOfFIJWOIIWhpfE+IUrR0pCHDY7m3bW4t6Jhg8b5K6IM0tq4+HVaT0WLuPvVXBaX0elzuH3kmp8B0CYoCepcXnKUdQ4XFJF1apoc52uvF1CKaIH1T71MdUIQ75HP/Mbq0p6OCmv0Wht+yEIQmIlCEISSXlzGuNy0E+IXOWz8jfcvaE7M7uojBETctHwVDEIbZZGjTYhUk6e0PYWu2IsUqdTytcRkJsdwFPG+4sVicdwt8U/Uhbdruw2PKiU9HFzZhf1W6leORL7N3uTKli5UIB9Y6lde8AaIbCsLkqKgCVpDRqbj5eqDSwEkmGO5/SFz0Wn9jH8IU6ENmPdb/ox/tHwQhCFxSoQhCSS//9k=", sT = "" + new URL("clock-2v_wOLgh.jpg", import.meta.url).href, uT = "" + new URL("tv-C36knqqO.jpg", import.meta.url).href, cT = "" + new URL("phone-Dcs8lpjE.jpg", import.meta.url).href, dT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTIgNS42OUwxNyAxMC4xOVYxOEgxNVYxMkg5VjE4SDdWMTAuMTlMMTIgNS42OU0xMiAzTDIgMTJINVYyMEgxMVYxNEgxM1YyMEgxOVYxMkgyMiIgLz48L3N2Zz4=", fT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTQsMTdIMTdMMTksMTNWN0gxM1YxM0gxNk02LDE3SDlMMTEsMTNWN0g1VjEzSDhMNiwxN1oiIC8+PC9zdmc+", vT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNNiw5SDhWMTFIMTBWMTNIOFYxNUg2VjEzSDRWMTFINlY5TTE4LjUsOUExLjUsMS41IDAgMCwxIDIwLDEwLjVBMS41LDEuNSAwIDAsMSAxOC41LDEyQTEuNSwxLjUgMCAwLDEgMTcsMTAuNUExLjUsMS41IDAgMCwxIDE4LjUsOU0xNS41LDEyQTEuNSwxLjUgMCAwLDEgMTcsMTMuNUExLjUsMS41IDAgMCwxIDE1LjUsMTVBMS41LDEuNSAwIDAsMSAxNCwxMy41QTEuNSwxLjUgMCAwLDEgMTUuNSwxMk0xNyw1QTcsNyAwIDAsMSAyNCwxMkE3LDcgMCAwLDEgMTcsMTlDMTUuMDQsMTkgMTMuMjcsMTguMiAxMiwxNi45QzEwLjczLDE4LjIgOC45NiwxOSA3LDE5QTcsNyAwIDAsMSAwLDEyQTcsNyAwIDAsMSA3LDVIMTdNNyw3QTUsNSAwIDAsMCAyLDEyQTUsNSAwIDAsMCA3LDE3QzguNjQsMTcgMTAuMDksMTYuMjEgMTEsMTVIMTNDMTMuOTEsMTYuMjEgMTUuMzYsMTcgMTcsMTdBNSw1IDAgMCwwIDIyLDEyQTUsNSAwIDAsMCAxNyw3SDdaIiAvPjwvc3ZnPg==", hT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNNCwxN1Y5SDJWN0g2VjE3SDRNMjIsMTVDMjIsMTYuMTEgMjEuMSwxNyAyMCwxN0gxNlYxNUgyMFYxM0gxOFYxMUgyMFY5SDE2VjdIMjBBMiwyIDAgMCwxIDIyLDlWMTAuNUExLjUsMS41IDAgMCwxIDIwLjUsMTJBMS41LDEuNSAwIDAsMSAyMiwxMy41VjE1TTE0LDE1VjE3SDhWMTNDOCwxMS44OSA4LjksMTEgMTAsMTFIMTJWOUg4VjdIMTJBMiwyIDAgMCwxIDE0LDlWMTFDMTQsMTIuMTEgMTMuMSwxMyAxMiwxM0gxMFYxNUgxNFoiIC8+PC9zdmc+", mT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyAgZD0iTTExLjE5LDIuMjVDMTAuOTMsMi4yNSAxMC42NywyLjMxIDEwLjQyLDIuNEwzLjA2LDUuNDVDMi4wNCw1Ljg3IDEuNTUsNy4wNCAxLjk3LDguMDVMNi45MywyMEM3LjI0LDIwLjc3IDcuOTcsMjEuMjMgOC43NCwyMS4yNUM5LDIxLjI1IDkuMjcsMjEuMjIgOS41MywyMS4xTDE2LjksMTguMDVDMTcuNjUsMTcuNzQgMTguMTEsMTcgMTguMTMsMTYuMjVDMTguMTQsMTYgMTguMDksMTUuNzEgMTgsMTUuNDVMMTMsMy41QzEyLjcxLDIuNzMgMTEuOTcsMi4yNiAxMS4xOSwyLjI1TTE0LjY3LDIuMjVMMTguMTIsMTAuNlY0LjI1QTIsMiAwIDAsMCAxNi4xMiwyLjI1TTIwLjEzLDMuNzlWMTIuODJMMjIuNTYsNi45NkMyMi45Nyw1Ljk0IDIyLjUsNC43OCAyMS40Nyw0LjM2TTExLjE5LDQuMjJMMTYuMTcsMTYuMjRMOC43OCwxOS4zTDMuOCw3LjI5IiAvPjwvc3ZnPg==", gT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMjAsMTJBOCw4IDAgMCwwIDEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQTgsOCAwIDAsMCAyMCwxMk0yMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJBMTAsMTAgMCAwLDEgMjIsMTJNMTAsOS41QzEwLDEwLjMgOS4zLDExIDguNSwxMUM3LjcsMTEgNywxMC4zIDcsOS41QzcsOC43IDcuNyw4IDguNSw4QzkuMyw4IDEwLDguNyAxMCw5LjVNMTcsOS41QzE3LDEwLjMgMTYuMywxMSAxNS41LDExQzE0LjcsMTEgMTQsMTAuMyAxNCw5LjVDMTQsOC43IDE0LjcsOCAxNS41LDhDMTYuMyw4IDE3LDguNyAxNyw5LjVNMTIsMTcuMjNDMTAuMjUsMTcuMjMgOC43MSwxNi41IDcuODEsMTUuNDJMOS4yMywxNEM5LjY4LDE0LjcyIDEwLjc1LDE1LjIzIDEyLDE1LjIzQzEzLjI1LDE1LjIzIDE0LjMyLDE0LjcyIDE0Ljc3LDE0TDE2LjE5LDE1LjQyQzE1LjI5LDE2LjUgMTMuNzUsMTcuMjMgMTIsMTcuMjNaIiAvPjwvc3ZnPg==", bT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTAsNFY3SDEyLjIxTDguNzksMTVINlYxOEgxNFYxNUgxMS43OUwxNS4yMSw3SDE4VjRIMTBaIiAvPjwvc3ZnPg==", Zs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0nI2ZmZicgc3Ryb2tlPScjZmZmJyBkPSJNMTAsN1Y5SDEyVjE3SDE0VjdIMTBaIiAvPjwvc3ZnPg==", pT = ["width", "height"], yT = ["src"], _T = ["src"], wT = ["src"], xT = ["src"], CT = ["src"], ST = ["src"], TT = ["src"], kT = ["src"], MT = ["src"], qT = ["src"], ET = ["src"], AT = ["src"], LT = ["src"], BT = ["src"], RT = ["src"], PT = { key: 0, class: "q-mb-xl", style: { clear: "both", height: "100%" } }, DT = { class: "insp q-mt-md" }, G0 = /* @__PURE__ */ zn({ __name: "WebGLMenu", props: { width: {}, height: {} }, emits: ["hover", "activate", "updateTime", "fps", "scale"], setup(e, { emit: t }) {
  Nc();
  const n = t, r = H(), o = e, i = H(false);
  let a = 0, l = Date.now();
  const s = H(false);
  let d = [0.1, 0.2, 0.5, 1, 2, 5, 10], c = 3;
  const f = H(d[c]), v = H([0, 0, 0]);
  me(() => f.value, (k, F) => n("scale", k));
  let u = null;
  const g = { front_0: null, front_1: null, front_2: null, front_3: null, game: null, home: null, numbers: null, quote: null, cards: null, happy: null, italic: null, one: null, two: null, three: null, body: null };
  let y = null;
  const w = new iT((k) => n("activate", k), (k) => n("hover", k)), x = H([0, 0]), _ = H(""), p = H(0), b = H(0), C = H(null), q = H(1), B = H(-1), V = () => {
    if (u === null) throw new Error("initBufs no WebGL context");
    if (y === null) throw new Error("initBufs no prog");
    const k = VS(), F = (S) => {
      const E = u.createBuffer();
      return u.bindBuffer(u.ARRAY_BUFFER, E), u.bufferData(u.ARRAY_BUFFER, S, u.STATIC_DRAW), u.bindBuffer(u.ARRAY_BUFFER, null), E;
    }, ee = u.createBuffer();
    u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, ee), u.bufferData(u.ELEMENT_ARRAY_BUFFER, k.get_ndx(), u.STATIC_DRAW), console.log("faces per object", k.get_ndx().length), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), y.model = { pos: F(k.get_pos()), color: F(k.get_color()), tex: F(k.get_tex()), norm: F(k.get_norm()), index: ee, offset: k.get_offset(), len: k.get_len() }, k.free();
  }, R = () => {
    if (u === null) throw new Error("initCopyBuf no ctx");
    const k = u.createBuffer();
    return u.bindBuffer(u.ARRAY_BUFFER, k), u.bufferData(u.ARRAY_BUFFER, new Float32Array([-1, -1, 0.1, 1, -1, -0.1, 1, 1, 0.1, -1, 1, -0.1]), u.STATIC_DRAW), k;
  }, D = (k, F) => {
    const ee = tr();
    return Xa(ee, ee, [0, 0, -6]), Gs(ee, ee, 1.3 * Math.sin(F) * 3.141 / 6 / 3, [0, 1, 0]), Gs(ee, ee, 1.2 * Math.sin(F * 1.15 + 1) * 3.141 / 4 / 3, [1, 0, 0]), Gs(ee, ee, 1.1 * Math.sin(F * 1.33 + 2) * 3.141 / 5 / 3, [0, 0, 1]), Xa(ee, ee, [k[0], k[1], k[2]]), ee;
  }, $ = (k) => {
    u === null || k.model === null || (u.uniform1i(k.unif.sampler, 1), u.uniform1i(k.unif.mode_int, 0), u.drawElements(u.TRIANGLES, k.model.len[1], u.UNSIGNED_INT, 4 * k.model.offset[1]), u.uniform1i(k.unif.sampler, 0), u.uniform1i(k.unif.mode_int, 1), u.drawElements(u.TRIANGLES, k.model.len[0], u.UNSIGNED_INT, k.model.offset[0]));
  }, M = (k, F) => {
    if (u === null || r.value === void 0) throw new Error("no WebGL context");
    if (k.model === null) return;
    u.viewport(0, 0, o.width, o.height), u.enable(u.BLEND), u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA), u.enable(u.DEPTH_TEST), u.depthFunc(u.LEQUAL), u.bindRenderbuffer(u.RENDERBUFFER, null), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindTexture(u.TEXTURE_2D, k.bufs.double), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), u.bindRenderbuffer(u.RENDERBUFFER, k.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, o.width, o.height), u.bindFramebuffer(u.FRAMEBUFFER, k.bufs.frame), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.bufs.depth), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, o.width, o.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.bufs.double, 0), u.bindFramebuffer(u.FRAMEBUFFER, k.bufs.frame), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.bufs.double, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.bufs.depth), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT);
    const ee = 45 * Math.PI / 180, S = o.width / o.height, E = 0.1, I = 100, Z = tr();
    K0(Z, ee, S, E, I);
    const re = F;
    Xa(Z, Z, [Math.sin(re * 0.3) * 1, Math.cos(re * 0.4) * 1, Math.cos(0.6 * re) * 1]), u.useProgram(k.prog_draw), A(k, false), T(k), z(k), U(k), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, k.model.index), u.uniform1f(k.unif.time, F), u.uniform2f(k.unif.viewport, o.width, o.height), u.uniformMatrix4fv(k.unif.proj, false, Z), u.activeTexture(u.TEXTURE0 + 1), u.bindTexture(u.TEXTURE_2D, g.body), u.activeTexture(u.TEXTURE0), u.uniform3fv(k.unif.debug_ambient, v.value);
    const W = (ue, ce, oe, Q, le, we) => {
      if (u === null) return;
      const Ce = [ue[0] * 2, ue[1] * 2.2, we * 0.5 + Math.pow(le, 1.5) * 5], Te = D(Ce, F);
      switch (u.uniformMatrix4fv(k.unif.model, false, Te), u.uniform1f(k.unif.hover, we), u.uniform1f(k.unif.alpha, Math.pow(1 - le, 0.1)), u.activeTexture(u.TEXTURE0), oe) {
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
          const Ie = g[oe];
          Ie != null ? u.bindTexture(u.TEXTURE_2D, Ie) : u.bindTexture(u.TEXTURE_2D, g.front_0);
          break;
      }
      u.activeTexture(u.TEXTURE0);
      const Me = tr();
      Q0(Me, Te), U0(Me, Me), u.uniformMatrix4fv(k.unif.normal, false, Me), u.uniform4fv(k.unif.front_color, ce), $(k);
    };
    w.draw(W), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, null, 0), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, null), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray(k.attr.pos_model), u.bindFramebuffer(u.FRAMEBUFFER, null), u.bindRenderbuffer(u.RENDERBUFFER, null), u.disable(u.BLEND), u.useProgram(k.prog_copy), u.disable(u.DEPTH_TEST), u.uniform1i(k.unif.copy_tex, 0), u.bindTexture(u.TEXTURE_2D, k.bufs.double), u.bindBuffer(u.ARRAY_BUFFER, k.bufs.copy_pos), C.value != null ? (u.uniform2fv(k.unif.ripple_pos, C.value), u.uniform1f(k.unif.ripple_time, q.value), u.uniform1f(k.unif.aspect, o.width / o.height)) : u.uniform1f(k.unif.ripple_time, 1), u.vertexAttribPointer(k.attr.pos_copy, 3, u.FLOAT, false, 0, 0), u.enableVertexAttribArray(k.attr.pos_copy), u.drawArrays(u.TRIANGLE_FAN, 0, 4), u.disableVertexAttribArray(k.attr.pos_copy), u.useProgram(k.prog_pick), u.enable(u.DEPTH_TEST), u.bindTexture(u.TEXTURE_2D, k.pick.tex), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.bindRenderbuffer(u.RENDERBUFFER, k.pick.rb), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, o.width, o.height), u.bindFramebuffer(u.FRAMEBUFFER, k.pick.fb), u.framebufferRenderbuffer(u.FRAMEBUFFER, u.DEPTH_ATTACHMENT, u.RENDERBUFFER, k.pick.rb), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, o.width, o.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, k.pick.tex, 0), u.uniformMatrix4fv(k.unif.proj_pick, false, Z), u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, k.model.index), u.enableVertexAttribArray(k.attr.pos_pick), A(k, true);
    const fe = (ue, ce, oe, Q, le, we) => {
      if (u === null || k.model === null) return;
      const Ce = [ue[0] * 2, ue[1] * 2.2, we * 0.5 + 10 * le];
      D(Ce, F), u.uniformMatrix4fv(k.unif.model_pick, false, D(Ce, F)), u.uniform4f(k.unif.id_pick, Q / 255, 0, 0, 0), u.drawElements(u.TRIANGLES, k.model.len[0], u.UNSIGNED_INT, k.model.offset[0]);
    };
    w.draw(fe), u.flush(), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.disableVertexAttribArray(k.attr.pos_pick);
    let ve = new Uint8Array(4);
    u.readPixels(x.value[0], o.height - x.value[1], 1, 1, u.RGBA, u.UNSIGNED_BYTE, ve), ve.length && (_.value = ve.toString(), w.hover(ve[0]), p.value = ve[0]);
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
    const ve = u.createRenderbuffer(), ue = u.createFramebuffer(), ce = R(), oe = { prog_draw: ee, prog_pick: I, prog_copy: W, attr: { pos_model: u.getAttribLocation(ee, "aVertexPosition"), norm: u.getAttribLocation(ee, "aVertexNormal"), color: u.getAttribLocation(ee, "aVertexColor"), texture: u.getAttribLocation(ee, "aTextureCoord"), pos_pick: u.getAttribLocation(I, "aVertexPosition"), pos_copy: u.getAttribLocation(W, "aVertexPosition") }, unif: { proj: u.getUniformLocation(ee, "uProjectionMatrix"), model: u.getUniformLocation(ee, "uModelViewMatrix"), sampler: u.getUniformLocation(ee, "uSampler"), normal: u.getUniformLocation(ee, "uNormalMatrix"), time: u.getUniformLocation(ee, "uTime"), alpha: u.getUniformLocation(ee, "uAlpha"), hover: u.getUniformLocation(ee, "uFade"), mode_int: u.getUniformLocation(ee, "uMode"), front_color: u.getUniformLocation(ee, "uFrontColor"), proj_pick: u.getUniformLocation(I, "uProjectionMatrix"), model_pick: u.getUniformLocation(I, "uModelViewMatrix"), id_pick: u.getUniformLocation(I, "uId"), viewport: u.getUniformLocation(ee, "uViewPort"), copy_tex: u.getUniformLocation(W, "uTexture"), ripple_time: u.getUniformLocation(W, "uRippleTime"), ripple_pos: u.getUniformLocation(W, "uRipplePos"), aspect: u.getUniformLocation(W, "uAspect"), debug_ambient: u.getUniformLocation(ee, "uDebugAmbient") }, bufs: { frame: ue, depth: ve, double: fe, copy_pos: ce }, model: null, pick: { fb: u.createFramebuffer(), rb: u.createRenderbuffer(), tex: u.createTexture() } };
    for (const Q in g) g[Q] = ne();
    u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL, true), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR), y = oe, V();
  }, ye = () => {
    if (r.value === void 0 || (u === null && (u = r.value.getContext("webgl2", {})), u === null)) return;
    y === null && ie(), u.bindRenderbuffer(u.RENDERBUFFER, y.bufs.depth), u.renderbufferStorage(u.RENDERBUFFER, u.DEPTH_COMPONENT16, o.width, o.height), u.bindRenderbuffer(u.RENDERBUFFER, null);
    const k = u.createTexture();
    u.bindTexture(u.TEXTURE_2D, k), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, o.width, o.height, 0, u.RGBA, u.UNSIGNED_BYTE, null), y.bufs.double = k, u.bindTexture(u.TEXTURE_2D, null), u.viewport(0, 0, o.width, o.height);
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
    if (u === null || r.value === void 0) return;
    const F = k, ee = F.offsetX, S = F.offsetY;
    x.value = [ee, S];
  }, O = (k) => {
    var _a3;
    const F = k, ee = (_a3 = r.value) == null ? void 0 : _a3.getBoundingClientRect();
    ee !== void 0 && (x.value = [F.touches.item(0).clientX - ee.x, F.touches.item(0).clientY - ee.y], k.stopPropagation(), k.preventDefault());
  }, P = () => {
    j != 0 && clearInterval(j), K != 0 && clearInterval(K), console.log("resize", o.width, o.height), Qe(() => {
      ye();
    });
  }, te = (k) => {
    b.value = p.value, C.value = [x.value[0] / o.width, 1 - x.value[1] / o.height], q.value = 0;
  };
  return st(() => {
    P(), me(() => [o.width, o.height], (k, F) => Qe(P));
  }), We(() => {
    clearInterval(j);
  }), (k, F) => (ln(), ao(rn, null, [$e("canvas", { ref_key: "canvas", ref: r, onMousemove: F[0] || (F[0] = (ee) => be(ee)), onTouchstart: F[1] || (F[1] = (ee) => O(ee)), onTouchmove: F[2] || (F[2] = (ee) => O(ee)), onTouchend: F[3] || (F[3] = (ee) => te()), onMouseup: F[4] || (F[4] = (ee) => te()), width: o.width, height: o.height }, null, 40, pT), $e("img", { src: Re(aT), onLoad: F[5] || (F[5] = (ee) => G("body", ee)), style: { display: "none" } }, null, 40, yT), $e("img", { src: Re(lT), onLoad: F[6] || (F[6] = (ee) => G("front_0", ee)), style: { display: "none" } }, null, 40, _T), $e("img", { src: Re(sT), onLoad: F[7] || (F[7] = (ee) => G("front_1", ee)), style: { display: "none" } }, null, 40, wT), $e("img", { src: Re(uT), onLoad: F[8] || (F[8] = (ee) => G("front_2", ee)), style: { display: "none" } }, null, 40, xT), $e("img", { src: Re(cT), onLoad: F[9] || (F[9] = (ee) => G("front_3", ee)), style: { display: "none" } }, null, 40, CT), $e("img", { src: Re(dT), onLoad: F[10] || (F[10] = (ee) => G("home", ee)), style: { display: "none" }, width: "1024", height: "1024" }, null, 40, ST), $e("img", { src: Re(fT), onLoad: F[11] || (F[11] = (ee) => G("quote", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, TT), $e("img", { src: Re(vT), onLoad: F[12] || (F[12] = (ee) => G("game", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, kT), $e("img", { src: Re(hT), onLoad: F[13] || (F[13] = (ee) => G("numbers", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, MT), $e("img", { src: Re(mT), onLoad: F[14] || (F[14] = (ee) => G("cards", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, qT), $e("img", { src: Re(gT), onLoad: F[15] || (F[15] = (ee) => G("happy", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, ET), $e("img", { src: Re(bT), onLoad: F[16] || (F[16] = (ee) => G("italic", ee)), style: { display: "none" }, width: "2048", height: "2048" }, null, 40, AT), $e("img", { src: Re(Zs), onLoad: F[17] || (F[17] = (ee) => G("one", ee)), style: { display: "none" } }, null, 40, LT), $e("img", { src: Re(Zs), onLoad: F[18] || (F[18] = (ee) => G("two", ee)), style: { display: "none" } }, null, 40, BT), $e("img", { src: Re(Zs), onLoad: F[19] || (F[19] = (ee) => G("three", ee)), style: { display: "none" } }, null, 40, RT), s.value ? (ln(), ao("div", PT, [Ue(Re(et), { onClick: F[20] || (F[20] = (ee) => s.value = false) }, { default: qt(() => F[21] || (F[21] = [kr("close")])), _: 1 }), $e("table", DT, [$e("tr", null, [F[22] || (F[22] = $e("th", null, "cur_step", -1)), $e("td", null, jt(f.value), 1)]), $e("tr", null, [F[23] || (F[23] = $e("th", null, "hot", -1)), $e("td", null, jt(x.value), 1)]), $e("tr", null, [F[24] || (F[24] = $e("th", null, "active", -1)), $e("td", null, jt(_.value), 1)]), $e("tr", null, [F[25] || (F[25] = $e("th", null, "click", -1)), $e("td", null, jt(p.value), 1)]), $e("tr", null, [F[26] || (F[26] = $e("th", null, "shadow_click", -1)), $e("td", null, jt(b.value), 1)]), $e("tr", null, [F[27] || (F[27] = $e("th", null, "ripple", -1)), $e("td", null, jt(C.value), 1)]), $e("tr", null, [F[28] || (F[28] = $e("th", null, "ripple_time", -1)), $e("td", null, jt(q.value), 1)]), $e("tr", null, [F[29] || (F[29] = $e("th", null, "hover", -1)), $e("td", null, jt(B.value), 1)]), $e("tr", null, [F[30] || (F[30] = $e("th", null, "ambient", -1)), $e("td", null, jt(v.value), 1)])])])) : fu("", true)], 64));
} }), Uc = "" + new URL("bkgnd-CXiwSpF_.jpg", import.meta.url).href, OT = { class: "sliders q-ma-lg" }, VT = { class: "feedback" }, FT = /* @__PURE__ */ zn({ __name: "Sized", setup(e) {
  uc((s) => ({ "1179e1fe": l.value }));
  const t = H(320), n = H(240), r = H(0), o = H(0), i = H("no events yet ..."), a = H(1);
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
  return (s, d) => (ln(), ao(rn, null, [$e("div", OT, [$e("b", null, jt(t.value) + " x " + jt(n.value) + " @ " + jt(o.value.toFixed(2)) + " / " + jt((r.value * 100).toFixed(1)) + "% / " + jt((r.value * 7.5).toFixed(2)) + "s x" + jt(a.value), 1), Ue(Re(er), { modelValue: t.value, "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ue(Re(er), { modelValue: n.value, "onUpdate:modelValue": d[1] || (d[1] = (c) => n.value = c), min: 1, max: 1920 }, null, 8, ["modelValue"]), Ue(Re(er), { "model-value": r.value, min: 0, max: 1, color: "green", readonly: "" }, null, 8, ["model-value"]), $e("div", VT, jt(i.value), 1)]), $e("div", { class: "menu", id: "wgl-menu", style: aa({ width: t.value + "px", height: n.value + "px" }) }, [Ue(G0, { width: t.value, height: n.value, onActivate: d[2] || (d[2] = (c) => s.$q.notify({ message: c })), onHover: d[3] || (d[3] = (c) => i.value = "hover: " + c), onUpdateTime: d[4] || (d[4] = (c) => r.value = c), onFps: d[5] || (d[5] = (c) => o.value = c), onScale: d[6] || (d[6] = (c) => a.value = c) }, null, 8, ["width", "height"])], 4)], 64));
} }), $T = ma(FT, [["__scopeId", "data-v-197c70f6"]]), IT = { id: "menu" }, NT = /* @__PURE__ */ zn({ __name: "MaxSized", setup(e) {
  uc((a) => ({ "249b3650": i.value })), Nc();
  const t = H(256), n = H(192), r = H(100), o = () => {
    const a = document.getElementById("header");
    a !== null && (r.value = a.getBoundingClientRect().bottom);
    let l = 0;
    document.getElementById("footer"), a !== null && (l = a.getBoundingClientRect().height), Qe(() => {
      t.value = window.innerWidth, n.value = window.innerHeight - r.value - l;
    });
  };
  st(() => {
    window.addEventListener("resize", o), o();
  }), We(() => {
    window.removeEventListener("resize", o);
  });
  const i = H(`url(${Uc})`);
  return (a, l) => (ln(), ao("div", IT, [Ue(G0, { width: t.value, height: n.value }, null, 8, ["width", "height"])]));
} }), zT = ma(NT, [["__scopeId", "data-v-46e2e87c"]]);
/* @license twgl.js 6.1.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let Wt = Float32Array;
function HT(e) {
  const t = Wt;
  return Wt = e, t;
}
function or(e, t, n) {
  const r = new Wt(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function jT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function X0(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function UT(e, t, n, r) {
  return r = r || new Wt(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function QT(e, t, n, r) {
  return r = r || new Wt(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function KT(e, t, n) {
  return n = n || new Wt(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function WT(e, t, n) {
  return n = n || new Wt(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function YT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function GT(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function zu(e, t, n) {
  n = n || new Wt(3);
  const r = e[2] * t[0] - e[0] * t[2], o = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = o, n;
}
function XT(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function JT(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function ZT(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function e2(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], o = e[2] - t[2];
  return Math.sqrt(n * n + r * r + o * o);
}
function t2(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], o = e[2] - t[2];
  return n * n + r * r + o * o;
}
function Za(e, t) {
  t = t || new Wt(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function n2(e, t) {
  return t = t || new Wt(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function r2(e, t) {
  return t = t || new Wt(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function o2(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function i2(e, t, n) {
  return n = n || new Wt(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var Fa = Object.freeze({ __proto__: null, add: jT, copy: r2, create: or, cross: zu, distance: e2, distanceSq: t2, divide: i2, divScalar: GT, dot: XT, lerp: UT, lerpV: QT, length: JT, lengthSq: ZT, max: KT, min: WT, mulScalar: YT, multiply: o2, negate: n2, normalize: Za, setDefaultType: HT, subtract: X0 });
let Ct = Float32Array;
function a2(e) {
  const t = Ct;
  return Ct = e, t;
}
function l2(e, t) {
  return t = t || new Ct(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function s2() {
  return new Ct(16).fill(0);
}
function J0(e, t) {
  return t = t || new Ct(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function Z0(e) {
  return e = e || new Ct(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function u2(e, t) {
  if (t = t || new Ct(16), t === e) {
    let _;
    return _ = e[1], e[1] = e[4], e[4] = _, _ = e[2], e[2] = e[8], e[8] = _, _ = e[3], e[3] = e[12], e[12] = _, _ = e[6], e[6] = e[9], e[9] = _, _ = e[7], e[7] = e[13], e[13] = _, _ = e[11], e[11] = e[14], e[14] = _, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], o = e[0 * 4 + 2], i = e[0 * 4 + 3], a = e[1 * 4 + 0], l = e[1 * 4 + 1], s = e[1 * 4 + 2], d = e[1 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], v = e[2 * 4 + 2], u = e[2 * 4 + 3], g = e[3 * 4 + 0], y = e[3 * 4 + 1], w = e[3 * 4 + 2], x = e[3 * 4 + 3];
  return t[0] = n, t[1] = a, t[2] = c, t[3] = g, t[4] = r, t[5] = l, t[6] = f, t[7] = y, t[8] = o, t[9] = s, t[10] = v, t[11] = w, t[12] = i, t[13] = d, t[14] = u, t[15] = x, t;
}
function eb(e, t) {
  t = t || new Ct(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], o = e[0 * 4 + 2], i = e[0 * 4 + 3], a = e[1 * 4 + 0], l = e[1 * 4 + 1], s = e[1 * 4 + 2], d = e[1 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], v = e[2 * 4 + 2], u = e[2 * 4 + 3], g = e[3 * 4 + 0], y = e[3 * 4 + 1], w = e[3 * 4 + 2], x = e[3 * 4 + 3], _ = v * x, p = w * u, b = s * x, C = w * d, q = s * u, B = v * d, V = o * x, R = w * i, D = o * u, $ = v * i, M = o * d, A = s * i, T = c * y, z = g * f, U = a * y, j = g * l, K = a * f, ie = c * l, ye = n * y, Y = g * r, L = n * f, ne = c * r, G = n * l, be = a * r, O = _ * l + C * f + q * y - (p * l + b * f + B * y), P = p * r + V * f + $ * y - (_ * r + R * f + D * y), te = b * r + R * l + M * y - (C * r + V * l + A * y), k = B * r + D * l + A * f - (q * r + $ * l + M * f), F = 1 / (n * O + a * P + c * te + g * k);
  return t[0] = F * O, t[1] = F * P, t[2] = F * te, t[3] = F * k, t[4] = F * (p * a + b * c + B * g - (_ * a + C * c + q * g)), t[5] = F * (_ * n + R * c + D * g - (p * n + V * c + $ * g)), t[6] = F * (C * n + V * a + A * g - (b * n + R * a + M * g)), t[7] = F * (q * n + $ * a + M * c - (B * n + D * a + A * c)), t[8] = F * (T * d + j * u + K * x - (z * d + U * u + ie * x)), t[9] = F * (z * i + ye * u + ne * x - (T * i + Y * u + L * x)), t[10] = F * (U * i + Y * d + G * x - (j * i + ye * d + be * x)), t[11] = F * (ie * i + L * d + be * u - (K * i + ne * d + G * u)), t[12] = F * (U * v + ie * w + z * s - (K * w + T * s + j * v)), t[13] = F * (L * w + T * o + Y * v - (ye * v + ne * w + z * o)), t[14] = F * (ye * s + be * w + j * o - (G * w + U * o + Y * s)), t[15] = F * (G * v + K * o + ne * s - (L * s + be * v + ie * o)), t;
}
function c2(e, t, n) {
  n = n || new Ct(16);
  const r = e[0], o = e[1], i = e[2], a = e[3], l = e[4], s = e[5], d = e[6], c = e[7], f = e[8], v = e[9], u = e[10], g = e[11], y = e[12], w = e[13], x = e[14], _ = e[15], p = t[0], b = t[1], C = t[2], q = t[3], B = t[4], V = t[5], R = t[6], D = t[7], $ = t[8], M = t[9], A = t[10], T = t[11], z = t[12], U = t[13], j = t[14], K = t[15];
  return n[0] = r * p + l * b + f * C + y * q, n[1] = o * p + s * b + v * C + w * q, n[2] = i * p + d * b + u * C + x * q, n[3] = a * p + c * b + g * C + _ * q, n[4] = r * B + l * V + f * R + y * D, n[5] = o * B + s * V + v * R + w * D, n[6] = i * B + d * V + u * R + x * D, n[7] = a * B + c * V + g * R + _ * D, n[8] = r * $ + l * M + f * A + y * T, n[9] = o * $ + s * M + v * A + w * T, n[10] = i * $ + d * M + u * A + x * T, n[11] = a * $ + c * M + g * A + _ * T, n[12] = r * z + l * U + f * j + y * K, n[13] = o * z + s * U + v * j + w * K, n[14] = i * z + d * U + u * j + x * K, n[15] = a * z + c * U + g * j + _ * K, n;
}
function d2(e, t, n) {
  return n = n || Z0(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function f2(e, t) {
  return t = t || or(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function v2(e, t, n) {
  n = n || or();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function h2(e, t, n, r) {
  r !== e && (r = J0(e, r));
  const o = n * 4;
  return r[o + 0] = t[0], r[o + 1] = t[1], r[o + 2] = t[2], r;
}
function m2(e, t, n, r, o) {
  o = o || new Ct(16);
  const i = Math.tan(Math.PI * 0.5 - 0.5 * e), a = 1 / (n - r);
  return o[0] = i / t, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = i, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (n + r) * a, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = n * r * a * 2, o[15] = 0, o;
}
function g2(e, t, n, r, o, i, a) {
  return a = a || new Ct(16), a[0] = 2 / (t - e), a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / (r - n), a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 / (o - i), a[11] = 0, a[12] = (t + e) / (e - t), a[13] = (r + n) / (n - r), a[14] = (i + o) / (o - i), a[15] = 1, a;
}
function b2(e, t, n, r, o, i, a) {
  a = a || new Ct(16);
  const l = t - e, s = r - n, d = o - i;
  return a[0] = 2 * o / l, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * o / s, a[6] = 0, a[7] = 0, a[8] = (e + t) / l, a[9] = (r + n) / s, a[10] = i / d, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = o * i / d, a[15] = 0, a;
}
let br, Qr, Gn;
function p2(e, t, n, r) {
  return r = r || new Ct(16), br = br || or(), Qr = Qr || or(), Gn = Gn || or(), Za(X0(e, t, Gn), Gn), Za(zu(n, Gn, br), br), Za(zu(Gn, br, Qr), Qr), r[0] = br[0], r[1] = br[1], r[2] = br[2], r[3] = 0, r[4] = Qr[0], r[5] = Qr[1], r[6] = Qr[2], r[7] = 0, r[8] = Gn[0], r[9] = Gn[1], r[10] = Gn[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function y2(e, t) {
  return t = t || new Ct(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function _2(e, t, n) {
  n = n || new Ct(16);
  const r = t[0], o = t[1], i = t[2], a = e[0], l = e[1], s = e[2], d = e[3], c = e[1 * 4 + 0], f = e[1 * 4 + 1], v = e[1 * 4 + 2], u = e[1 * 4 + 3], g = e[2 * 4 + 0], y = e[2 * 4 + 1], w = e[2 * 4 + 2], x = e[2 * 4 + 3], _ = e[3 * 4 + 0], p = e[3 * 4 + 1], b = e[3 * 4 + 2], C = e[3 * 4 + 3];
  return e !== n && (n[0] = a, n[1] = l, n[2] = s, n[3] = d, n[4] = c, n[5] = f, n[6] = v, n[7] = u, n[8] = g, n[9] = y, n[10] = w, n[11] = x), n[12] = a * r + c * o + g * i + _, n[13] = l * r + f * o + y * i + p, n[14] = s * r + v * o + w * i + b, n[15] = d * r + u * o + x * i + C, n;
}
function w2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function x2(e, t, n) {
  n = n || new Ct(16);
  const r = e[4], o = e[5], i = e[6], a = e[7], l = e[8], s = e[9], d = e[10], c = e[11], f = Math.cos(t), v = Math.sin(t);
  return n[4] = f * r + v * l, n[5] = f * o + v * s, n[6] = f * i + v * d, n[7] = f * a + v * c, n[8] = f * l - v * r, n[9] = f * s - v * o, n[10] = f * d - v * i, n[11] = f * c - v * a, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function C2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function S2(e, t, n) {
  n = n || new Ct(16);
  const r = e[0 * 4 + 0], o = e[0 * 4 + 1], i = e[0 * 4 + 2], a = e[0 * 4 + 3], l = e[2 * 4 + 0], s = e[2 * 4 + 1], d = e[2 * 4 + 2], c = e[2 * 4 + 3], f = Math.cos(t), v = Math.sin(t);
  return n[0] = f * r - v * l, n[1] = f * o - v * s, n[2] = f * i - v * d, n[3] = f * a - v * c, n[8] = f * l + v * r, n[9] = f * s + v * o, n[10] = f * d + v * i, n[11] = f * c + v * a, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function T2(e, t) {
  t = t || new Ct(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function k2(e, t, n) {
  n = n || new Ct(16);
  const r = e[0 * 4 + 0], o = e[0 * 4 + 1], i = e[0 * 4 + 2], a = e[0 * 4 + 3], l = e[1 * 4 + 0], s = e[1 * 4 + 1], d = e[1 * 4 + 2], c = e[1 * 4 + 3], f = Math.cos(t), v = Math.sin(t);
  return n[0] = f * r + v * l, n[1] = f * o + v * s, n[2] = f * i + v * d, n[3] = f * a + v * c, n[4] = f * l - v * r, n[5] = f * s - v * o, n[6] = f * d - v * i, n[7] = f * c - v * a, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function M2(e, t, n) {
  n = n || new Ct(16);
  let r = e[0], o = e[1], i = e[2];
  const a = Math.sqrt(r * r + o * o + i * i);
  r /= a, o /= a, i /= a;
  const l = r * r, s = o * o, d = i * i, c = Math.cos(t), f = Math.sin(t), v = 1 - c;
  return n[0] = l + (1 - l) * c, n[1] = r * o * v + i * f, n[2] = r * i * v - o * f, n[3] = 0, n[4] = r * o * v - i * f, n[5] = s + (1 - s) * c, n[6] = o * i * v + r * f, n[7] = 0, n[8] = r * i * v + o * f, n[9] = o * i * v - r * f, n[10] = d + (1 - d) * c, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function q2(e, t, n, r) {
  r = r || new Ct(16);
  let o = t[0], i = t[1], a = t[2];
  const l = Math.sqrt(o * o + i * i + a * a);
  o /= l, i /= l, a /= l;
  const s = o * o, d = i * i, c = a * a, f = Math.cos(n), v = Math.sin(n), u = 1 - f, g = s + (1 - s) * f, y = o * i * u + a * v, w = o * a * u - i * v, x = o * i * u - a * v, _ = d + (1 - d) * f, p = i * a * u + o * v, b = o * a * u + i * v, C = i * a * u - o * v, q = c + (1 - c) * f, B = e[0], V = e[1], R = e[2], D = e[3], $ = e[4], M = e[5], A = e[6], T = e[7], z = e[8], U = e[9], j = e[10], K = e[11];
  return r[0] = g * B + y * $ + w * z, r[1] = g * V + y * M + w * U, r[2] = g * R + y * A + w * j, r[3] = g * D + y * T + w * K, r[4] = x * B + _ * $ + p * z, r[5] = x * V + _ * M + p * U, r[6] = x * R + _ * A + p * j, r[7] = x * D + _ * T + p * K, r[8] = b * B + C * $ + q * z, r[9] = b * V + C * M + q * U, r[10] = b * R + C * A + q * j, r[11] = b * D + C * T + q * K, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function E2(e, t) {
  return t = t || new Ct(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function A2(e, t, n) {
  n = n || new Ct(16);
  const r = t[0], o = t[1], i = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = o * e[1 * 4 + 0], n[5] = o * e[1 * 4 + 1], n[6] = o * e[1 * 4 + 2], n[7] = o * e[1 * 4 + 3], n[8] = i * e[2 * 4 + 0], n[9] = i * e[2 * 4 + 1], n[10] = i * e[2 * 4 + 2], n[11] = i * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function L2(e, t, n) {
  n = n || or();
  const r = t[0], o = t[1], i = t[2], a = r * e[0 * 4 + 3] + o * e[1 * 4 + 3] + i * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + o * e[1 * 4 + 0] + i * e[2 * 4 + 0] + e[3 * 4 + 0]) / a, n[1] = (r * e[0 * 4 + 1] + o * e[1 * 4 + 1] + i * e[2 * 4 + 1] + e[3 * 4 + 1]) / a, n[2] = (r * e[0 * 4 + 2] + o * e[1 * 4 + 2] + i * e[2 * 4 + 2] + e[3 * 4 + 2]) / a, n;
}
function B2(e, t, n) {
  n = n || or();
  const r = t[0], o = t[1], i = t[2];
  return n[0] = r * e[0 * 4 + 0] + o * e[1 * 4 + 0] + i * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + o * e[1 * 4 + 1] + i * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + o * e[1 * 4 + 2] + i * e[2 * 4 + 2], n;
}
function R2(e, t, n) {
  n = n || or();
  const r = eb(e), o = t[0], i = t[1], a = t[2];
  return n[0] = o * r[0 * 4 + 0] + i * r[0 * 4 + 1] + a * r[0 * 4 + 2], n[1] = o * r[1 * 4 + 0] + i * r[1 * 4 + 1] + a * r[1 * 4 + 2], n[2] = o * r[2 * 4 + 0] + i * r[2 * 4 + 1] + a * r[2 * 4 + 2], n;
}
var P2 = Object.freeze({ __proto__: null, axisRotate: q2, axisRotation: M2, copy: J0, create: s2, frustum: b2, getAxis: v2, getTranslation: f2, identity: Z0, inverse: eb, lookAt: p2, multiply: c2, negate: l2, ortho: g2, perspective: m2, rotateX: x2, rotateY: S2, rotateZ: k2, rotationX: w2, rotationY: C2, rotationZ: T2, scale: A2, scaling: E2, setAxis: h2, setDefaultType: a2, setTranslation: d2, transformDirection: B2, transformNormal: R2, transformPoint: L2, translate: _2, translation: y2, transpose: u2 }), Kr = {}, qv = {}, Ev;
function D2() {
  return Ev || (Ev = 1, Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52)), Math.sign === void 0 && (Math.sign = function(e) {
    return e < 0 ? -1 : e > 0 ? 1 : +e;
  }), Function.prototype.name === void 0 && Object.defineProperty(Function.prototype, "name", { get: function() {
    return this.toString().match(/^\s*function\s*([^(\s]*)/)[1];
  } }), Object.assign === void 0 && function() {
    Object.assign = function(e) {
      if (e == null) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (r != null) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
      }
      return t;
    };
  }()), qv;
}
var eu = {}, ui = {}, Av;
function ns() {
  if (Av) return ui;
  Av = 1, Object.defineProperty(ui, "__esModule", { value: true }), ui.Tools = void 0;
  var e = { error: function(t) {
    console.error(t);
  } };
  return ui.Tools = e, ui;
}
var ci = {}, Lv;
function go() {
  if (Lv) return ci;
  Lv = 1, Object.defineProperty(ci, "__esModule", { value: true }), ci.V3 = void 0;
  var e = function() {
    function t(n, r, o) {
      this.x = n || 0, this.y = r || 0, this.z = o || 0;
    }
    return t.prototype.set = function(n, r, o) {
      return this.x = n || 0, this.y = r || 0, this.z = o || 0, this;
    }, t.prototype.distanceTo = function(n) {
      return Math.sqrt(this.distanceToSquared(n));
    }, t.prototype.distanceToSquared = function(n) {
      var r = this.x - n.x, o = this.y - n.y, i = this.z - n.z;
      return r * r + o * o + i * i;
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
    }, t.prototype.crossVectors = function(n, r) {
      var o = n.x, i = n.y, a = n.z, l = r.x, s = r.y, d = r.z;
      return this.x = i * d - a * s, this.y = a * l - o * d, this.z = o * s - i * l, this;
    }, t.prototype.negate = function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, t.prototype.negated = function() {
      return new t(-this.x, -this.y, -this.z);
    }, t.prototype.clone = function() {
      return new t(this.x, this.y, this.z);
    }, t.prototype.copy = function(n) {
      return this.x = n.x, this.y = n.y, this.z = n.z, this;
    }, t.prototype.approximatelyEquals = function(n, r) {
      if (r < 0) return false;
      var o = Math.abs(this.x - n.x), i = Math.abs(this.y - n.y), a = Math.abs(this.z - n.z);
      return o < r && i < r && a < r;
    }, t.prototype.zero = function() {
      return this.x = 0, this.y = 0, this.z = 0, this;
    }, t.prototype.rotate = function(n, r) {
      var o = Math.cos(n), i = Math.sin(n), a, l, s;
      switch (r) {
        case "X":
          a = this.x, l = this.y * o - this.z * i, s = this.y * i + this.z * o;
          break;
        case "Y":
          a = this.z * i + this.x * o, l = this.y, s = this.z * o - this.x * i;
          break;
        case "Z":
          a = this.x * o - this.y * i, l = this.x * i + this.y * o, s = this.z;
          break;
      }
      return this.x = a, this.y = l, this.z = s, this;
    }, t.prototype.projectOnVector = function(n) {
      var r = n.dot(this) / n.lengthSq();
      return this.copy(n).multiplyScalar(r);
    }, Object.defineProperty(t.prototype, "projectOnPlane", { get: function() {
      var n = this, r = new t();
      return function(o) {
        return r.copy(n).projectOnVector(o.normalised()), n.min(r).normalize();
      };
    }, enumerable: false, configurable: true }), t.prototype.applyM3 = function(n) {
      var r = this.x, o = this.y, i = this.z, a = n.elements;
      return this.x = a[0] * r + a[1] * o + a[2] * i, this.y = a[3] * r + a[4] * o + a[5] * i, this.z = a[6] * r + a[7] * o + a[8] * i, this.normalize();
    }, t.prototype.applyMatrix3 = function(n) {
      var r = this.x, o = this.y, i = this.z, a = n.elements;
      return this.x = a[0] * r + a[3] * o + a[6] * i, this.y = a[1] * r + a[4] * o + a[7] * i, this.z = a[2] * r + a[5] * o + a[8] * i, this;
    }, t.prototype.applyQuaternion = function(n) {
      var r = this.x, o = this.y, i = this.z, a = n.x, l = n.y, s = n.z, d = n.w, c = d * r + l * i - s * o, f = d * o + s * r - a * i, v = d * i + a * o - l * r, u = -a * r - l * o - s * i;
      return this.x = c * d + u * -a + f * -s - v * -l, this.y = f * d + u * -l + v * -a - c * -s, this.z = v * d + u * -s + c * -l - f * -a, this;
    }, t.prototype.sign = function(n, r) {
      var o = this.cross(n).dot(r);
      return o >= 0 ? 1 : -1;
    }, t.prototype.angleTo = function(n) {
      var r = this.dot(n) / Math.sqrt(this.lengthSq() * n.lengthSq());
      return r <= -1 ? Math.PI : r >= 1 ? 0 : Math.acos(r);
    }, t.prototype.getSignedAngle = function(n, r) {
      var o = this.angleTo(n), i = this.sign(n, r);
      return i === 1 ? o : -o;
    }, t.prototype.constrainedUV = function(n, r, o, i, a) {
      var l = n.getSignedAngle(this, r);
      return l > a && this.copy(o.rotateAboutAxis(n, a, r)), l < i && this.copy(o.rotateAboutAxis(n, i, r)), this;
    }, t.prototype.limitAngle = function(n, r, o) {
      var i = n.angleTo(this);
      if (i > o) {
        var a = n.normalised().cross(this).normalize();
        this.copy(r.rotateAboutAxis(n, o, a));
      }
      return this;
    }, t.isVector3 = true, t;
  }();
  return ci.V3 = e, ci;
}
var Bv;
function Qc() {
  return Bv || (Bv = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e._Math = void 0;
    var t = ns(), n = go();
    e._Math = { toRad: Math.PI / 180, toDeg: 180 / Math.PI, pi90: Math.PI * 0.5, findAngle: function(r, o) {
      var i = r.end.minus(o.end).lengthSq(), a = r.end.minus(r.start).lengthSq(), l = o.end.minus(r.start).lengthSq(), s, d = (i + a - l) / Math.sqrt(4 * i * a);
      d <= -1 ? s = Math.PI : d >= 1 ? s = 0 : s = Math.acos(d);
      var c = r.end.x * o.end.y - r.end.y * o.end.x;
      return c >= 0 ? s : -s;
    }, clamp: function(r, o, i) {
      return r = r < o ? o : r, r = r > i ? i : r, r;
    }, lerp: function(r, o, i) {
      return (1 - i) * r + i * o;
    }, rand: function(r, o) {
      return r + Math.random() * (o - r);
    }, randInt: function(r, o) {
      return r + Math.floor(Math.random() * (o - r + 1));
    }, nearEquals: function(r, o, i) {
      return Math.abs(r - o) <= i;
    }, perpendicular: function(r, o) {
      return !!e._Math.nearEquals(r.dot(o), 0, 0.01);
    }, genPerpendicularVectorQuick: function(r) {
      var o = r.clone();
      return Math.abs(r.y) < 0.99 ? o.set(-r.z, 0, r.x).normalize() : o.set(0, r.z, -r.y).normalize();
    }, genPerpendicularVectorFrisvad: function(r) {
      var o = r.clone();
      if (r.z < -0.9999999) return o.set(0, -1, 0);
      var i = 1 / (1 + r.z);
      return o.set(1 - r.x * r.x * i, -r.x * r.y * i, -r.x).normalize();
    }, rotateXDegs: function(r, o) {
      return r.clone().rotate(o * e._Math.toRad, "X");
    }, rotateYDegs: function(r, o) {
      return r.clone().rotate(o * e._Math.toRad, "Y");
    }, rotateZDegs: function(r, o) {
      return r.clone().rotate(o * e._Math.toRad, "Z");
    }, withinManhattanDistance: function(r, o, i) {
      return !(Math.abs(o.x - r.x) > i || Math.abs(o.y - r.y) > i || Math.abs(o.z - r.z) > i);
    }, manhattanDistanceBetween: function(r, o) {
      return Math.abs(o.x - r.x) + Math.abs(o.x - r.x) + Math.abs(o.x - r.x);
    }, distanceBetween: function(r, o) {
      var i = o.x - r.x, a = o.y - r.y, l = r instanceof n.V3 && o instanceof n.V3 ? o.z - r.z : 0;
      return Math.sqrt(i * i + a * a + l * l);
    }, rotateDegs: function(r, o) {
      return r.clone().rotate(o * e._Math.toRad);
    }, validateDirectionUV: function(r) {
      r.length() < 0 && t.Tools.error("vector direction unit vector cannot be zero.");
    }, validateLength: function(r) {
      r < 0 && t.Tools.error("Length must be a greater than or equal to zero.");
    } };
  }(eu)), eu;
}
var di = {}, Rv;
function rs() {
  if (Rv) return di;
  Rv = 1, Object.defineProperty(di, "__esModule", { value: true }), di.V2 = void 0;
  var e = function() {
    function t(n, r) {
      this.x = n || 0, this.y = r || 0;
    }
    return t.prototype.set = function(n, r) {
      return this.x = n || 0, this.y = r || 0, this;
    }, t.prototype.distanceTo = function(n) {
      return Math.sqrt(this.distanceToSquared(n));
    }, t.prototype.distanceToSquared = function(n) {
      var r = this.x - n.x, o = this.y - n.y;
      return r * r + o * o;
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
      var r = this.cross(n);
      return r >= 0 ? 1 : -1;
    }, t.prototype.approximatelyEquals = function(n, r) {
      if (r < 0) return false;
      var o = Math.abs(this.x - n.x), i = Math.abs(this.y - n.y);
      return o < r && i < r;
    }, t.prototype.rotate = function(n) {
      var r = Math.cos(n), o = Math.sin(n), i = this.x * r - this.y * o, a = this.x * o + this.y * r;
      return this.x = i, this.y = a, this;
    }, t.prototype.angleTo = function(n) {
      var r = this.dot(n) / Math.sqrt(this.lengthSq() * n.lengthSq());
      return r <= -1 ? Math.PI : r >= 1 ? 0 : Math.acos(r);
    }, t.prototype.getSignedAngle = function(n) {
      var r = this.angleTo(n), o = this.sign(n);
      return o === 1 ? r : -r;
    }, t.prototype.constrainedUV = function(n, r, o) {
      var i = n.getSignedAngle(this);
      return i > o && this.copy(n).rotate(o), i < r && this.copy(n).rotate(r), this;
    }, t.isVector2 = true, t;
  }();
  return di.V2 = e, di;
}
var fi = {}, Pv;
function Kc() {
  if (Pv) return fi;
  Pv = 1, Object.defineProperty(fi, "__esModule", { value: true }), fi.M3 = void 0;
  var e = go(), t = function() {
    function n() {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("M3: the constructor no longer reads arguments. use .set() instead.");
    }
    return n.prototype.set = function(r, o, i, a, l, s, d, c, f) {
      var v = this.elements;
      return v[0] = r, v[1] = a, v[2] = d, v[3] = o, v[4] = l, v[5] = c, v[6] = i, v[7] = s, v[8] = f, this;
    }, n.prototype.identity = function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }, n.prototype.setV3 = function(r, o, i) {
      var a = this.elements;
      return a[0] = r.x, a[3] = r.y, a[6] = r.z, a[1] = o.x, a[4] = o.y, a[7] = o.z, a[2] = i.x, a[5] = i.y, a[8] = i.z, this;
    }, n.prototype.transpose = function() {
      var r, o = this.elements;
      return r = o[1], o[1] = o[3], o[3] = r, r = o[2], o[2] = o[6], o[6] = r, r = o[5], o[5] = o[7], o[7] = r, this;
    }, n.prototype.createRotationMatrix = function(r) {
      var o = r, i = new e.V3(1, 0, 0), a = new e.V3(0, 1, 0);
      if (r.z < -0.9999999) i.set(1, 0, 0), a.set(0, 1, 0);
      else {
        var l = 1 / (1 + o.z), s = -o.x * o.y * l;
        i.set(1 - o.x * o.x * l, s, -o.x).normalize(), a.set(s, 1 - o.y * o.y * l, -o.y).normalize();
      }
      return this.setV3(i, a, o);
    }, n.prototype.rotateAboutAxis = function(r, o, i) {
      var a = Math.sin(o), l = Math.cos(o), s = 1 - l, d = i.x * i.y * s, c = i.x * i.z * s, f = i.y * i.z * s, v = this.elements;
      return v[0] = i.x * i.x * s + l, v[3] = d + i.z * a, v[6] = c - i.y * a, v[1] = d - i.z * a, v[4] = i.y * i.y * s + l, v[7] = f + i.x * a, v[2] = c + i.y * a, v[5] = f - i.x * a, v[8] = i.z * i.z * s + l, r.clone().applyM3(this);
    }, n.isMatrix3 = true, n;
  }();
  return fi.M3 = t, fi;
}
var vi = {}, tu = {}, Dv;
function cr() {
  return Dv || (Dv = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.RIGHT = e.LEFT = e.DOWN = e.UP = e.Z_NEG = e.Y_NEG = e.X_NEG = e.Z_AXE = e.Y_AXE = e.X_AXE = e.ConnectionType = e.JointType = e.BaseboneConstraintType = e.TODEG = e.TORAD = e.PI = e.MAX_VALUE = e.PRECISION_DEG = e.PRECISION = e.REVISION = void 0;
    var t = go(), n = rs();
    e.REVISION = "1.3.3", e.PRECISION = 1e-3, e.PRECISION_DEG = 0.01, e.MAX_VALUE = 1 / 0, e.PI = Math.PI, e.TORAD = Math.PI / 180, e.TODEG = 180 / Math.PI, function(r) {
      r[r.NONE = 1] = "NONE", r[r.GLOBAL_ROTOR = 2] = "GLOBAL_ROTOR", r[r.GLOBAL_HINGE = 3] = "GLOBAL_HINGE", r[r.LOCAL_ROTOR = 4] = "LOCAL_ROTOR", r[r.LOCAL_HINGE = 5] = "LOCAL_HINGE", r[r.GLOBAL_ABSOLUTE = 6] = "GLOBAL_ABSOLUTE", r[r.LOCAL_RELATIVE = 7] = "LOCAL_RELATIVE", r[r.LOCAL_ABSOLUTE = 8] = "LOCAL_ABSOLUTE";
    }(e.BaseboneConstraintType || (e.BaseboneConstraintType = {})), function(r) {
      r[r.J_BALL = 10] = "J_BALL", r[r.J_LOCAL = 11] = "J_LOCAL", r[r.J_GLOBAL = 12] = "J_GLOBAL";
    }(e.JointType || (e.JointType = {})), function(r) {
      r[r.START = 20] = "START", r[r.END = 21] = "END";
    }(e.ConnectionType || (e.ConnectionType = {})), e.X_AXE = new t.V3(1, 0, 0), e.Y_AXE = new t.V3(0, 1, 0), e.Z_AXE = new t.V3(0, 0, 1), e.X_NEG = new t.V3(-1, 0, 0), e.Y_NEG = new t.V3(0, -1, 0), e.Z_NEG = new t.V3(0, 0, -1), e.UP = new n.V2(0, 1), e.DOWN = new n.V2(0, -1), e.LEFT = new n.V2(-1, 0), e.RIGHT = new n.V2(1, 0);
  }(tu)), tu;
}
var Ov;
function tb() {
  if (Ov) return vi;
  Ov = 1, Object.defineProperty(vi, "__esModule", { value: true }), vi.Joint3D = void 0;
  var e = go(), t = cr(), n = function() {
    function r() {
      this.rotor = t.PI, this.min = -t.PI, this.max = t.PI, this.freeHinge = true, this.rotationAxisUV = new e.V3(), this.referenceAxisUV = new e.V3(), this.type = t.JointType.J_BALL;
    }
    return r.prototype.clone = function() {
      var o = new r();
      return o.type = this.type, o.rotor = this.rotor, o.max = this.max, o.min = this.min, o.freeHinge = this.freeHinge, o.rotationAxisUV.copy(this.rotationAxisUV), o.referenceAxisUV.copy(this.referenceAxisUV), o;
    }, r.prototype.testAngle = function() {
      this.max === t.PI && this.min === -t.PI ? this.freeHinge = true : this.freeHinge = false;
    }, r.prototype.validateAngle = function(o) {
      return o = o < 0 ? 0 : o, o = o > 180 ? 180 : o, o;
    }, r.prototype.setAsBallJoint = function(o) {
      this.rotor = this.validateAngle(o) * t.TORAD, this.type = t.JointType.J_BALL;
    }, r.prototype.setHinge = function(o, i, a, l, s) {
      this.type = o, a < 0 && (a *= -1), this.min = -this.validateAngle(a) * t.TORAD, this.max = this.validateAngle(l) * t.TORAD, this.testAngle(), this.rotationAxisUV.copy(i).normalize(), this.referenceAxisUV.copy(s).normalize();
    }, r.prototype.getHingeReferenceAxis = function() {
      return this.referenceAxisUV;
    }, r.prototype.getHingeRotationAxis = function() {
      return this.rotationAxisUV;
    }, r.prototype.setBallJointConstraintDegs = function(o) {
      this.rotor = this.validateAngle(o) * t.TORAD;
    }, r.prototype.setHingeClockwise = function(o) {
      o < 0 && (o *= -1), this.min = -this.validateAngle(o) * t.TORAD, this.testAngle();
    }, r.prototype.setHingeAnticlockwise = function(o) {
      this.max = this.validateAngle(o) * t.TORAD, this.testAngle();
    }, r.isJoint3D = true, r;
  }();
  return vi.Joint3D = n, vi;
}
var hi = {}, Vv;
function nb() {
  if (Vv) return hi;
  Vv = 1, Object.defineProperty(hi, "__esModule", { value: true }), hi.Bone3D = void 0;
  var e = cr(), t = tb(), n = go(), r = function() {
    function o(i, a, l, s) {
      this.joint = new t.Joint3D(), this.start = new n.V3(), this.end = new n.V3(), this.boneConnectionPoint = e.ConnectionType.END, this.length = 0, this.name = "", this.init(i, a, l, s);
    }
    return o.prototype.init = function(i, a, l, s) {
      this.setStartLocation(i), a ? (this.setEndLocation(a), this.length = this.getLength()) : s && l && (this.setLength(s), this.setEndLocation(this.start.plus(l.normalised().multiplyScalar(s))));
    }, o.prototype.clone = function() {
      var i = new o(this.start, this.end);
      return i.joint = this.joint.clone(), i;
    }, o.prototype.setBoneConnectionPoint = function(i) {
      this.boneConnectionPoint = i;
    }, o.prototype.setHingeClockwise = function(i) {
      this.joint.setHingeClockwise(i);
    }, o.prototype.setHingeAnticlockwise = function(i) {
      this.joint.setHingeAnticlockwise(i);
    }, o.prototype.setBallJointConstraintDegs = function(i) {
      this.joint.setBallJointConstraintDegs(i);
    }, o.prototype.setStartLocation = function(i) {
      this.start.copy(i);
    }, o.prototype.setEndLocation = function(i) {
      this.end.copy(i);
    }, o.prototype.setLength = function(i) {
      i > 0 && (this.length = i);
    }, o.prototype.setJoint = function(i) {
      this.joint = i;
    }, o.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, o.prototype.getDirectionUV = function() {
      return this.end.minus(this.start).normalize();
    }, o.prototype.getLength = function() {
      return this.start.distanceTo(this.end);
    }, o.isBone3D = true, o;
  }();
  return hi.Bone3D = r, hi;
}
var mi = {}, Fv;
function O2() {
  if (Fv) return mi;
  Fv = 1, Object.defineProperty(mi, "__esModule", { value: true }), mi.Chain3D = void 0;
  var e = cr(), t = Qc(), n = go(), r = Kc(), o = nb(), i = ns(), a = function() {
    function l() {
      this.tmpTarget = new n.V3(), this.tmpMtx = new r.M3(), this.bones = [], this.name = "", this.solveDistanceThreshold = 1, this.minIterationChange = 0.01, this.maxIteration = 20, this.precision = 1e-3, this.chainLength = 0, this.numBones = 0, this.baseLocation = new n.V3(), this.fixedBaseMode = true, this.baseboneConstraintType = e.BaseboneConstraintType.NONE, this.baseboneConstraintUV = new n.V3(), this.baseboneRelativeConstraintUV = new n.V3(), this.baseboneRelativeReferenceConstraintUV = new n.V3(), this.lastTargetLocation = new n.V3(e.MAX_VALUE, e.MAX_VALUE, e.MAX_VALUE), this.lastBaseLocation = new n.V3(e.MAX_VALUE, e.MAX_VALUE, e.MAX_VALUE), this.currentSolveDistance = e.MAX_VALUE, this.connectedChainNumber = -1, this.connectedBoneNumber = -1, this.boneConnectionPoint = e.ConnectionType.END, this.isFullForward = false, this.embeddedTarget = new n.V3(), this.useEmbeddedTarget = false;
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
      this.numBones > 0 && this.addBone(new o.Bone3D(this.bones[this.numBones - 1].end, void 0, s.normalised(), d));
    }, l.prototype.addConsecutiveFreelyRotatingHingedBone = function(s, d, c, f) {
      this.addConsecutiveHingedBone(s, d, c, f, 180, 180, t._Math.genPerpendicularVectorQuick(f));
    }, l.prototype.addConsecutiveHingedBone = function(s, d, c, f, v, u, g) {
      if (this.numBones !== 0) {
        var y = s.normalised(), w = f.normalised(), x = new o.Bone3D(this.bones[this.numBones - 1].end, void 0, y, d);
        c = c || "global", x.joint.setHinge(c === "global" ? e.JointType.J_GLOBAL : e.JointType.J_LOCAL, w, v, u, g), this.addBone(x);
      }
    }, l.prototype.addConsecutiveRotorConstrainedBone = function(s, d, c) {
      if (this.numBones !== 0) {
        s = s.normalised();
        var f = new o.Bone3D(this.bones[this.numBones - 1].end, void 0, s, d);
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
var gi = {}, $v;
function V2() {
  if ($v) return gi;
  $v = 1, Object.defineProperty(gi, "__esModule", { value: true }), gi.Structure3D = void 0;
  var e = cr(), t = Kc(), n = function() {
    function r() {
      this.fixedBaseMode = true, this.chains = [], this.targets = [], this.numChains = 0, this.tmpMtx = new t.M3();
    }
    return r.prototype.update = function() {
      for (var o, i, a, l, s, d, c = 0; c < this.numChains; c++) {
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
              this.tmpMtx.createRotationMatrix(s.getDirectionUV()), f = (o = i.getBaseboneConstraintUV()) === null || o === void 0 ? void 0 : o.clone().applyM3(this.tmpMtx), i.setBaseboneRelativeConstraintUV(f), d === e.BaseboneConstraintType.LOCAL_HINGE && i.setBaseboneRelativeReferenceConstraintUV(i.bones[0].joint.getHingeReferenceAxis().clone().applyM3(this.tmpMtx));
              break;
          }
        }
        i.useEmbeddedTarget ? i.solveForEmbeddedTarget() : i.solveForTarget(a);
      }
    }, r.prototype.clear = function() {
      var o;
      for (o = this.numChains; o--; ) this.remove(o);
      this.chains = [], this.targets = [];
    }, r.prototype.add = function(o, i) {
      this.chains.push(o), this.targets.push(i), this.numChains++;
    }, r.prototype.remove = function(o) {
      this.chains[o].clear(), this.chains.splice(o, 1), this.targets.splice(o, 1), this.numChains--;
    }, r.prototype.setFixedBaseMode = function(o) {
      this.fixedBaseMode = o;
      for (var i = this.numChains, a; i--; ) a = this.chains[i].getConnectedChainNumber(), a === -1 && this.chains[i].setFixedBaseMode(this.fixedBaseMode);
    }, r.prototype.getNumChains = function() {
      return this.numChains;
    }, r.prototype.getChain = function(o) {
      return this.chains[o];
    }, r.prototype.connectChain = function(o, i, a, l, s) {
      var d = i, c = a;
      if (!(i > this.numChains) && !(a > this.chains[i].numBones)) {
        var f = o.clone();
        f.setBoneConnectionPoint(l === "end" ? e.ConnectionType.END : e.ConnectionType.START), f.setConnectedChainNumber(d), f.setConnectedBoneNumber(c);
        var v = l === "end" ? this.chains[d].bones[c].end : this.chains[d].bones[c].start;
        f.setBaseLocation(v), f.setFixedBaseMode(true);
        for (var u = 0; u < f.numBones; u++) f.bones[u].start.add(v), f.bones[u].end.add(v);
        this.add(f, s);
      }
    }, r;
  }();
  return gi.Structure3D = n, gi;
}
var bi = {}, Iv;
function rb() {
  if (Iv) return bi;
  Iv = 1, Object.defineProperty(bi, "__esModule", { value: true }), bi.Joint2D = void 0;
  var e = cr(), t = function() {
    function n(r, o, i) {
      r === void 0 && (r = 0), this.isJoint2D = true, this.coordinateSystem = i || e.JointType.J_LOCAL, r < 0 && (r *= -1), this.min = r !== void 0 ? -r * e.TORAD : -e.PI, this.max = o !== void 0 ? o * e.TORAD : e.PI;
    }
    return n.prototype.clone = function() {
      var r = new n();
      return r.coordinateSystem = this.coordinateSystem, r.max = this.max, r.min = this.min, r;
    }, n.prototype.validateAngle = function(r) {
      return r = r < 0 ? 0 : r, r = r > 180 ? 180 : r, r;
    }, n.prototype.set = function(r) {
      this.max = r.max, this.min = r.min, this.coordinateSystem = r.coordinateSystem;
    }, n.prototype.setClockwiseConstraintDegs = function(r) {
      r < 0 && (r *= -1), this.min = -(this.validateAngle(r) * e.TORAD);
    }, n.prototype.setAnticlockwiseConstraintDegs = function(r) {
      this.max = this.validateAngle(r) * e.TORAD;
    }, n.prototype.setConstraintCoordinateSystem = function(r) {
      this.coordinateSystem = r;
    }, n.prototype.getConstraintCoordinateSystem = function() {
      return this.coordinateSystem;
    }, n;
  }();
  return bi.Joint2D = t, bi;
}
var pi = {}, Nv;
function ob() {
  if (Nv) return pi;
  Nv = 1, Object.defineProperty(pi, "__esModule", { value: true }), pi.Bone2D = void 0;
  var e = cr(), t = rb(), n = rs(), r = function() {
    function o(i, a, l, s, d, c) {
      this.isBone2D = true, this.globalConstraintUV = new n.V2(1, 0), this.boneConnectionPoint = e.ConnectionType.END, this.start = new n.V2(), this.end = new n.V2(), this.length = s || 0, this.joint = new t.Joint2D(d, c), this.name = "", this.setStartLocation(i), a ? (this.setEndLocation(a), this.length === 0 && (this.length = this.getLength())) : l && this.setEndLocation(this.start.plus(l.normalised().multiplyScalar(this.length)));
    }
    return o.prototype.clone = function() {
      var i = new o(this.start, this.end);
      return i.length = this.length, i.globalConstraintUV = this.globalConstraintUV, i.boneConnectionPoint = this.boneConnectionPoint, i.joint = this.joint.clone(), i.name = this.name, i;
    }, o.prototype.setName = function(i) {
      this.name = i;
    }, o.prototype.setBoneConnectionPoint = function(i) {
      this.boneConnectionPoint = i;
    }, o.prototype.setStartLocation = function(i) {
      this.start.copy(i);
    }, o.prototype.setEndLocation = function(i) {
      this.end.copy(i);
    }, o.prototype.setLength = function(i) {
      i > 0 && (this.length = i);
    }, o.prototype.setGlobalConstraintUV = function(i) {
      this.globalConstraintUV = i;
    }, o.prototype.setJoint = function(i) {
      this.joint = i;
    }, o.prototype.setClockwiseConstraintDegs = function(i) {
      this.joint.setClockwiseConstraintDegs(i);
    }, o.prototype.setAnticlockwiseConstraintDegs = function(i) {
      this.joint.setAnticlockwiseConstraintDegs(i);
    }, o.prototype.setJointConstraintCoordinateSystem = function(i) {
      this.joint.setConstraintCoordinateSystem(i);
    }, o.prototype.getGlobalConstraintUV = function() {
      return this.globalConstraintUV;
    }, o.prototype.getBoneConnectionPoint = function() {
      return this.boneConnectionPoint;
    }, o.prototype.getDirectionUV = function() {
      return this.end.minus(this.start).normalize();
    }, o.prototype.getLength = function() {
      return this.start.distanceTo(this.end);
    }, o;
  }();
  return pi.Bone2D = r, pi;
}
var yi = {}, zv;
function F2() {
  if (zv) return yi;
  zv = 1, Object.defineProperty(yi, "__esModule", { value: true }), yi.Chain2D = void 0;
  var e = cr(), t = Qc(), n = rs(), r = ob(), o = ns(), i = function() {
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
        o.Tools.error("Chain is empty ! need first bone");
        return;
      }
      if (l instanceof r.Bone2D) {
        var f = l, v = f.getDirectionUV();
        t._Math.validateDirectionUV(v);
        var u = f.length;
        t._Math.validateLength(u);
        var g = this.bones[this.numBones - 1].end;
        f.setStartLocation(g), f.setEndLocation(g.plus(v.multiplyScalar(u))), this.addBone(f);
      } else if (l instanceof n.V2) {
        t._Math.validateDirectionUV(l), t._Math.validateLength(s);
        var g = this.bones[this.numBones - 1].end;
        this.addBone(new r.Bone2D(g, void 0, l.normalised(), s, d, c));
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
var _i = {}, Hv;
function $2() {
  if (Hv) return _i;
  Hv = 1, Object.defineProperty(_i, "__esModule", { value: true }), _i.Structure2D = void 0;
  var e = cr(), t = ns(), n = function() {
    function r() {
      this.fixedBaseMode = true, this.chains = [], this.targets = [], this.numChains = 0;
    }
    return r.prototype.update = function() {
      for (var o, i, a, l, s, d = 0; d < this.numChains; d++) {
        if (i = this.chains[d], a = this.targets[d] || null, l = i.getConnectedChainNumber(), s = i.getBaseboneConstraintType(), l !== -1 && s !== e.BaseboneConstraintType.GLOBAL_ABSOLUTE) {
          var c = this.chains[l].bones[i.getConnectedBoneNumber()];
          i.setBaseLocation(i.getBoneConnectionPoint() === e.ConnectionType.START ? c.start : c.end);
          var f = c.getDirectionUV();
          if (s === e.BaseboneConstraintType.LOCAL_RELATIVE) i.setBaseboneConstraintUV(f);
          else if (s === e.BaseboneConstraintType.LOCAL_ABSOLUTE) {
            var v = e.UP.getSignedAngle(f), u = (o = i.getBaseboneConstraintUV()) === null || o === void 0 ? void 0 : o.clone().rotate(v);
            i.setBaseboneRelativeConstraintUV(u);
          }
        }
        i.useEmbeddedTarget ? console.log("embed", i.solveForEmbeddedTarget()) : i.solveForTarget(a);
      }
    }, r.prototype.setFixedBaseMode = function(o) {
      this.fixedBaseMode = o;
      for (var i = this.numChains, a; i--; ) a = this.chains[i].getConnectedChainNumber(), a === -1 && this.chains[i].setFixedBaseMode(this.fixedBaseMode);
    }, r.prototype.clear = function() {
      var o;
      for (o = this.numChains; o--; ) this.remove(o);
      this.chains = [], this.targets = [];
    }, r.prototype.add = function(o, i) {
      this.chains.push(o), this.numChains++, i && this.targets.push(i);
    }, r.prototype.remove = function(o) {
      this.chains[o].clear(), this.chains.splice(o, 1), this.targets.splice(o, 1), this.numChains--;
    }, r.prototype.getNumChains = function() {
      return this.numChains;
    }, r.prototype.getChain = function(o) {
      return this.chains[o];
    }, r.prototype.connectChain = function(o, i, a, l) {
      var s = i, d = a;
      if (l = l || "end", s > this.numChains) {
        t.Tools.error("Chain does not exist!");
        return;
      }
      if (d > this.chains[s].numBones) {
        t.Tools.error("Bone does not exist!");
        return;
      }
      var c = o.clone();
      c.setBoneConnectionPoint(l === "end" ? e.ConnectionType.END : e.ConnectionType.START), c.setConnectedChainNumber(s), c.setConnectedBoneNumber(d);
      var f = l === "end" ? this.chains[s].bones[d].end : this.chains[s].bones[d].start;
      c.setBaseLocation(f), c.setFixedBaseMode(true);
      for (var v = 0; v < c.numBones; v++) c.bones[v].start.add(f), c.bones[v].end.add(f);
    }, r.isStructure2D = true, r;
  }();
  return _i.Structure2D = n, _i;
}
var jv;
function I2() {
  return jv || (jv = 1, function(e) {
    var t = Kr && Kr.__createBinding || (Object.create ? function(y, w, x, _) {
      _ === void 0 && (_ = x);
      var p = Object.getOwnPropertyDescriptor(w, x);
      (!p || ("get" in p ? !w.__esModule : p.writable || p.configurable)) && (p = { enumerable: true, get: function() {
        return w[x];
      } }), Object.defineProperty(y, _, p);
    } : function(y, w, x, _) {
      _ === void 0 && (_ = x), y[_] = w[x];
    }), n = Kr && Kr.__exportStar || function(y, w) {
      for (var x in y) x !== "default" && !Object.prototype.hasOwnProperty.call(w, x) && t(w, y, x);
    };
    Object.defineProperty(e, "__esModule", { value: true }), e.Structure2D = e.Chain2D = e.Bone2D = e.Joint2D = e.Structure3D = e.Chain3D = e.Bone3D = e.Joint3D = e.M3 = e.V3 = e.V2 = e._Math = void 0, D2();
    var r = Qc();
    Object.defineProperty(e, "_Math", { enumerable: true, get: function() {
      return r._Math;
    } });
    var o = rs();
    Object.defineProperty(e, "V2", { enumerable: true, get: function() {
      return o.V2;
    } });
    var i = go();
    Object.defineProperty(e, "V3", { enumerable: true, get: function() {
      return i.V3;
    } });
    var a = Kc();
    Object.defineProperty(e, "M3", { enumerable: true, get: function() {
      return a.M3;
    } });
    var l = tb();
    Object.defineProperty(e, "Joint3D", { enumerable: true, get: function() {
      return l.Joint3D;
    } });
    var s = nb();
    Object.defineProperty(e, "Bone3D", { enumerable: true, get: function() {
      return s.Bone3D;
    } });
    var d = O2();
    Object.defineProperty(e, "Chain3D", { enumerable: true, get: function() {
      return d.Chain3D;
    } });
    var c = V2();
    Object.defineProperty(e, "Structure3D", { enumerable: true, get: function() {
      return c.Structure3D;
    } });
    var f = rb();
    Object.defineProperty(e, "Joint2D", { enumerable: true, get: function() {
      return f.Joint2D;
    } });
    var v = ob();
    Object.defineProperty(e, "Bone2D", { enumerable: true, get: function() {
      return v.Bone2D;
    } });
    var u = F2();
    Object.defineProperty(e, "Chain2D", { enumerable: true, get: function() {
      return u.Chain2D;
    } });
    var g = $2();
    Object.defineProperty(e, "Structure2D", { enumerable: true, get: function() {
      return g.Structure2D;
    } }), n(cr(), e);
  }(Kr)), Kr;
}
var pr = I2();
const N2 = ["width", "height"], z2 = /* @__PURE__ */ zn({ __name: "IKMtg", props: { width: {}, height: {} }, setup(e) {
  const t = H();
  let n = null;
  const r = e;
  let o;
  const i = tr(), a = tr();
  let l = [];
  const s = () => {
    if (t.value !== void 0 && (n = t.value.getContext("webgl2", {})), n === null) return;
    const x = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, x), n.bufferData(n.ARRAY_BUFFER, new Float32Array([-0.15, 0.5, 0, 1, 0.15, 0.5, 0, 1, 0.15, -0.5, 0, 1, -0.15, -0.5, 0, 1]), n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null);
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
    o = { prog_draw: b, buf: { plane: x, points: n.createBuffer() }, attr: { pos: n.getAttribLocation(b, "aVertexPosition") }, unif: { proj: n.getUniformLocation(b, "uProjectionMatrix"), model: n.getUniformLocation(b, "uModelViewMatrix"), color: n.getUniformLocation(b, "uColor") } }, console.log(o);
  }, d = (x, _) => {
    if (n === null) throw new Error("no webgl");
    const p = c(n.VERTEX_SHADER, x), b = c(n.FRAGMENT_SHADER, _), C = n.createProgram();
    return n.attachShader(C, p), n.attachShader(C, b), n.linkProgram(C), C;
  }, c = (x, _) => {
    if (n === null) throw new Error("no webgl");
    const p = n.createShader(x);
    if (p === null) throw new Error("bad shader");
    return n.shaderSource(p, _), n.compileShader(p), p;
  }, f = new pr.Chain3D(), v = new pr.Bone3D(new pr.V3(0, 0, -9.1), void 0, new pr.V3(0, 0.1, -9.1), 3);
  f.addBone(v), f.addConsecutiveRotorConstrainedBone(new pr.V3(0, 2.5, -9.1), 6, 270), f.addConsecutiveRotorConstrainedBone(new pr.V3(1.5, 2.5, -9.1), 6, 270);
  const u = () => {
    if (o === null || n === null) return;
    n.useProgram(o.prog_draw), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.viewport(0, 0, r.width, r.height), n.clearColor(1, 1, 1, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const x = 45 * Math.PI / 180, _ = r.width / r.height, p = 0.1, b = 100;
    Mv(a), K0(a, x, _, p, b), KS(a, a, 0.05), WS(a, a, 0.15), YS(a, a, 0.175), n.uniformMatrix4fv(o.unif.proj, false, a), U0(i, i), Q0(i, i), g(0, [1, 0, 0]), g(1, [0, 1, 0]), g(2, [1, 0, 1]), n.flush(), n.disableVertexAttribArray(o.attr.pos);
  }, g = (x, _) => {
    if (o === null || n === null || x >= l.length / 2) return;
    let p = Eo(l[x * 2]), b = Eo(l[x * 2 + 1]);
    const C = [b[0] - p[0], b[1] - p[1], b[2] - p[2]];
    let q = tr();
    const B = Fa.normalize(C), V = Fa.normalize([0, 0, 1]), R = Fa.normalize(Fa.cross(B, V)), D = tr();
    jS(D, R[0], B[0], V[0], 0, R[1], B[1], V[1], 0, R[2], B[2], V[2], 0, 0, 0, 0, 1);
    const $ = tr();
    GS($, p);
    const M = tr();
    Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]) / 3, QS(M, M, [0.2, 0.2, 0.2]), Xs(q, q, $), Xs(q, q, D), Xs(q, q, M), n.bindBuffer(n.ARRAY_BUFFER, o.buf.plane), n.vertexAttribPointer(o.attr.pos, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(o.attr.pos), n.uniformMatrix4fv(o.unif.model, false, q), n.uniform3fv(o.unif.color, _), n.bindBuffer(n.ARRAY_BUFFER, o.buf.points), n.vertexAttribPointer(o.attr.pos, 3, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(o.attr.pos), n.bufferData(n.ARRAY_BUFFER, new Float32Array([p[0], p[1], p[2], b[0], b[1], b[2]]), n.STATIC_DRAW), Mv(q), Xa(q, q, [0, 0, -30]), n.uniformMatrix4fv(o.unif.model, false, q), n.drawArrays(n.LINES, 0, 2), n.bindBuffer(n.ARRAY_BUFFER, null);
  }, y = (x) => {
    r.width / r.height;
    const _ = t.value.getBoundingClientRect(), p = [(x.clientX - _.left) / r.width - 0, (-_.top + x.clientY) / r.height * r.width / r.height / 1 / 1 - 0, 0];
    let b = P2.transformPoint(i, p);
    b[0] = b[0] * 2 - 1, b[1] = -b[1] * 2 + 1, b[2] = -9.1, b[0] *= 20, b[1] *= 20;
    const C = new pr.V3(b[0], b[1], b[2]), q = new pr.Structure3D();
    q.add(f, C), q.update(), l = [];
    for (let B = 0; B < f.bones.length; ++B) l.push([f.bones[B].start.x, f.bones[B].start.y, f.bones[B].start.z]), l.push([f.bones[B].end.x, f.bones[B].end.y, f.bones[B].end.z]);
  }, w = (x) => {
    x.buttons == 1 && y(x);
  };
  return st(() => {
    Qe(s), setInterval(u, 25);
  }), We(() => {
  }), (x, _) => (ln(), ao("canvas", { width: x.width, height: x.height, ref_key: "canvas", ref: t, onClick: _[0] || (_[0] = (p) => y(p)), onMousemove: _[1] || (_[1] = (p) => w(p)) }, null, 40, N2));
} }), H2 = ma(z2, [["__scopeId", "data-v-810859f4"]]), j2 = { class: "q-ma-lg", style: { display: "inline-block" } }, U2 = /* @__PURE__ */ zn({ __name: "IKMtg", setup(e) {
  uc((o) => ({ "4b8e4e3a": r.value }));
  const t = H(640), n = H(480);
  H(0), H(0), H("no events yet ..."), H(1), st(() => {
  });
  const r = H(`url(${Uc})`);
  return (o, i) => (ln(), ao("div", j2, [$e("div", { id: "ik-mtg", style: aa({ width: t.value + "px", height: n.value + "px" }) }, [Ue(H2, { width: t.value, height: n.value }, null, 8, ["width", "height"])], 4)]));
} }), Q2 = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Wc = fm(_C);
console.log(Q2);
const K2 = [{ name: "layout", path: "/", component: CC, children: [{ name: "root", path: "", component: zS }, { name: "webgl", path: "webgl", component: zT }, { name: "sized", path: "sized", component: $T }, { name: "ik", path: "ik", component: U2 }] }], W2 = kS({ history: tS(), routes: K2 });
Wc.use(W2);
Wc.use(bC, { plugins: { Dialog: nC, Dark: gm, Loading: oC, Cookies: eC, Notify: dC }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
j0({}).then(() => {
  Wc.mount("#q-app");
});
