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
function Qu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, ua = [], On = () => {
}, wg = () => false, Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ku = (e) => e.startsWith("onUpdate:"), zt = Object.assign, Wu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sg = Object.prototype.hasOwnProperty, st = (e, t) => Sg.call(e, t), je = Array.isArray, Ga = (e) => kr(e) === "[object Map]", xg = (e) => kr(e) === "[object Set]", Cg = (e) => kr(e) === "[object RegExp]", Qe = (e) => typeof e == "function", Rt = (e) => typeof e == "string", ka = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", Cf = (e) => (Et(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), kg = Object.prototype.toString, kr = (e) => kg.call(e), qg = (e) => kr(e).slice(8, -1), Tg = (e) => kr(e) === "[object Object]", Yu = (e) => Rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mg = /-(\w)/g, bn = Ho((e) => e.replace(Mg, (t, n) => n ? n.toUpperCase() : "")), Eg = /\B([A-Z])/g, Ul = Ho((e) => e.replace(Eg, "-$1").toLowerCase()), No = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), bi = Ho((e) => e ? `on${No(e)}` : ""), ml = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, kf = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, $g = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ag = (e) => {
  const t = Rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const qr = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gu(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = Rt(l) ? Bg(l) : Gu(l);
      if (a) for (const r in a) t[r] = a[r];
    }
    return t;
  } else if (Rt(e) || Et(e)) return e;
}
const Rg = /;(?![^(]*\))/g, Pg = /:([^]+)/, Lg = /\/\*[^]*?\*\//g;
function Bg(e) {
  const t = {};
  return e.replace(Lg, "").split(Rg).forEach((n) => {
    if (n) {
      const l = n.split(Pg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function Xu(e) {
  let t = "";
  if (Rt(e)) t = e;
  else if (je(e)) for (let n = 0; n < e.length; n++) {
    const l = Xu(e[n]);
    l && (t += l + " ");
  }
  else if (Et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Og = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fg = /* @__PURE__ */ Qu(Og);
function qf(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class Vg {
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
function zg() {
  return an;
}
let bt;
const yi = /* @__PURE__ */ new WeakSet();
class Tf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, yi.has(this) && (yi.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ef(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Zs(this), $f(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      Af(this), bt = t, qn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) es(t);
      this.deps = this.depsTail = void 0, Zs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? yi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    uu(this) && this.run();
  }
  get dirty() {
    return uu(this);
  }
}
let Mf = 0, Ja, er;
function Ef(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = er, er = e;
    return;
  }
  e.next = Ja, Ja = e;
}
function Zu() {
  Mf++;
}
function Ju() {
  if (--Mf > 0) return;
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
function $f(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Af(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), es(l), Ig(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function uu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Rf(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Rf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dr)) return;
  e.globalVersion = dr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !uu(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = qn;
  bt = e, qn = true;
  try {
    $f(e);
    const a = e.fn(e._value);
    (t.version === 0 || ml(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, qn = l, Af(e), e.flags &= -3;
  }
}
function es(e, t = false) {
  const { dep: n, prevSub: l, nextSub: a } = e;
  if (l && (l.nextSub = a, e.prevSub = void 0), a && (a.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) es(r, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ig(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qn = true;
const Pf = [];
function yl() {
  Pf.push(qn), qn = false;
}
function pl() {
  const e = Pf.pop();
  qn = e === void 0 ? true : e;
}
function Zs(e) {
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
class Dg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ts {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!bt || !qn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new Dg(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Lf(n);
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
    Zu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ju();
    }
  }
}
function Lf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Lf(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const su = /* @__PURE__ */ new WeakMap(), Ol = Symbol(""), cu = Symbol(""), fr = Symbol("");
function Kt(e, t, n) {
  if (qn && bt) {
    let l = su.get(e);
    l || su.set(e, l = /* @__PURE__ */ new Map());
    let a = l.get(n);
    a || (l.set(n, a = new ts()), a.map = l, a.key = n), a.track();
  }
}
function Kn(e, t, n, l, a, r) {
  const o = su.get(e);
  if (!o) {
    dr++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (Zu(), t === "clear") o.forEach(i);
  else {
    const u = je(e), c = u && Yu(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((f, h) => {
        (h === "length" || h === fr || !ka(h) && h >= s) && i(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(fr)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Ol)), Ga(e) && i(o.get(cu)));
        break;
      case "delete":
        u || (i(o.get(Ol)), Ga(e) && i(o.get(cu)));
        break;
      case "set":
        Ga(e) && i(o.get(Ol));
        break;
    }
  }
  Ju();
}
function Yl(e) {
  const t = Ye(e);
  return t === e ? t : (Kt(t, "iterate", fr), Tn(e) ? t : t.map(Gt));
}
function ns(e) {
  return Kt(e = Ye(e), "iterate", fr), e;
}
const Hg = { __proto__: null, [Symbol.iterator]() {
  return pi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Yl(this).concat(...e.map((t) => je(t) ? Yl(t) : t));
}, entries() {
  return pi(this, "entries", (e) => (e[1] = Gt(e[1]), e));
}, every(e, t) {
  return In(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return In(this, "filter", e, t, (n) => n.map(Gt), arguments);
}, find(e, t) {
  return In(this, "find", e, t, Gt, arguments);
}, findIndex(e, t) {
  return In(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return In(this, "findLast", e, t, Gt, arguments);
}, findLastIndex(e, t) {
  return In(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return In(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return _i(this, "includes", e);
}, indexOf(...e) {
  return _i(this, "indexOf", e);
}, join(e) {
  return Yl(this).join(e);
}, lastIndexOf(...e) {
  return _i(this, "lastIndexOf", e);
}, map(e, t) {
  return In(this, "map", e, t, void 0, arguments);
}, pop() {
  return Pa(this, "pop");
}, push(...e) {
  return Pa(this, "push", e);
}, reduce(e, ...t) {
  return Js(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Js(this, "reduceRight", e, t);
}, shift() {
  return Pa(this, "shift");
}, some(e, t) {
  return In(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Pa(this, "splice", e);
}, toReversed() {
  return Yl(this).toReversed();
}, toSorted(e) {
  return Yl(this).toSorted(e);
}, toSpliced(...e) {
  return Yl(this).toSpliced(...e);
}, unshift(...e) {
  return Pa(this, "unshift", e);
}, values() {
  return pi(this, "values", Gt);
} };
function pi(e, t, n) {
  const l = ns(e), a = l[t]();
  return l !== e && !Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.value && (r.value = n(r.value)), r;
  }), a;
}
const Ng = Array.prototype;
function In(e, t, n, l, a, r) {
  const o = ns(e), i = o !== e && !Tn(e), u = o[t];
  if (u !== Ng[t]) {
    const f = u.apply(e, r);
    return i ? Gt(f) : f;
  }
  let c = n;
  o !== e && (i ? c = function(f, h) {
    return n.call(this, Gt(f), h, e);
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const s = u.call(o, c, l);
  return i && a ? a(s) : s;
}
function Js(e, t, n, l) {
  const a = ns(e);
  let r = n;
  return a !== e && (Tn(e) ? n.length > 3 && (r = function(o, i, u) {
    return n.call(this, o, i, u, e);
  }) : r = function(o, i, u) {
    return n.call(this, o, Gt(i), u, e);
  }), a[t](r, ...l);
}
function _i(e, t, n) {
  const l = Ye(e);
  Kt(l, "iterate", fr);
  const a = l[t](...n);
  return (a === -1 || a === false) && os(n[0]) ? (n[0] = Ye(n[0]), l[t](...n)) : a;
}
function Pa(e, t, n = []) {
  yl(), Zu();
  const l = Ye(e)[t].apply(e, n);
  return Ju(), pl(), l;
}
const jg = /* @__PURE__ */ Qu("__proto__,__v_isRef,__isVue"), Bf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ka));
function Ug(e) {
  ka(e) || (e = String(e));
  const t = Ye(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Of {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !a;
    if (n === "__v_isReadonly") return a;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return l === (a ? r ? t0 : If : r ? zf : Vf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = je(t);
    if (!a) {
      let u;
      if (o && (u = Hg[n])) return u;
      if (n === "hasOwnProperty") return Ug;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (ka(n) ? Bf.has(n) : jg(n)) || (a || Kt(t, "get", n), r) ? i : pt(i) ? o && Yu(n) ? i : i.value : Et(i) ? a ? Df(i) : Bn(i) : i;
  }
}
class Ff extends Of {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, a) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Dl(r);
      if (!Tn(l) && !Dl(l) && (r = Ye(r), l = Ye(l)), !je(t) && pt(r) && !pt(l)) return u ? false : (r.value = l, true);
    }
    const o = je(t) && Yu(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : a);
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
    return (!ka(n) || !Bf.has(n)) && Kt(t, "has", n), l;
  }
  ownKeys(t) {
    return Kt(t, "iterate", je(t) ? "length" : Ol), Reflect.ownKeys(t);
  }
}
class Qg extends Of {
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
const Kg = new Ff(), Wg = new Qg(), Yg = new Ff(true);
const du = (e) => e, Lr = (e) => Reflect.getPrototypeOf(e);
function Gg(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, r = Ye(a), o = Ga(r), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = a[e](...l), s = n ? du : t ? fu : Gt;
    return !t && Kt(r, "iterate", u ? cu : Ol), { next() {
      const { value: f, done: h } = c.next();
      return h ? { value: f, done: h } : { value: i ? [s(f[0]), s(f[1])] : s(f), done: h };
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
function Xg(e, t) {
  const n = { get(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    e || (ml(a, i) && Kt(o, "get", a), Kt(o, "get", i));
    const { has: u } = Lr(o), c = t ? du : e ? fu : Gt;
    if (u.call(o, a)) return c(r.get(a));
    if (u.call(o, i)) return c(r.get(i));
    r !== o && r.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Kt(Ye(a), "iterate", Ol), Reflect.get(a, "size", a);
  }, has(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    return e || (ml(a, i) && Kt(o, "has", a), Kt(o, "has", i)), a === i ? r.has(a) : r.has(a) || r.has(i);
  }, forEach(a, r) {
    const o = this, i = o.__v_raw, u = Ye(i), c = t ? du : e ? fu : Gt;
    return !e && Kt(u, "iterate", Ol), i.forEach((s, f) => a.call(r, c(s), c(f), o));
  } };
  return zt(n, e ? { add: Br("add"), set: Br("set"), delete: Br("delete"), clear: Br("clear") } : { add(a) {
    !t && !Tn(a) && !Dl(a) && (a = Ye(a));
    const r = Ye(this);
    return Lr(r).has.call(r, a) || (r.add(a), Kn(r, "add", a, a)), this;
  }, set(a, r) {
    !t && !Tn(r) && !Dl(r) && (r = Ye(r));
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
    n[a] = Gg(a, e, t);
  }), n;
}
function ls(e, t) {
  const n = Xg(e, t);
  return (l, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(st(n, a) && a in l ? n : l, a, r);
}
const Zg = { get: ls(false, false) }, Jg = { get: ls(false, true) }, e0 = { get: ls(true, false) };
const Vf = /* @__PURE__ */ new WeakMap(), zf = /* @__PURE__ */ new WeakMap(), If = /* @__PURE__ */ new WeakMap(), t0 = /* @__PURE__ */ new WeakMap();
function n0(e) {
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
function l0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : n0(qg(e));
}
function Bn(e) {
  return Dl(e) ? e : rs(e, false, Kg, Zg, Vf);
}
function as(e) {
  return rs(e, false, Yg, Jg, zf);
}
function Df(e) {
  return rs(e, true, Wg, e0, If);
}
function rs(e, t, n, l, a) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const r = a.get(e);
  if (r) return r;
  const o = l0(e);
  if (o === 0) return e;
  const i = new Proxy(e, o === 2 ? l : n);
  return a.set(e, i), i;
}
function tr(e) {
  return Dl(e) ? tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dl(e) {
  return !!(e && e.__v_isReadonly);
}
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
function os(e) {
  return e ? !!e.__v_raw : false;
}
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? Ye(t) : e;
}
function jo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && kf(e, "__v_skip", true), e;
}
const Gt = (e) => Et(e) ? Bn(e) : e, fu = (e) => Et(e) ? Df(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function U(e) {
  return Hf(e, false);
}
function a0(e) {
  return Hf(e, true);
}
function Hf(e, t) {
  return pt(e) ? e : new r0(e, t);
}
class r0 {
  constructor(t, n) {
    this.dep = new ts(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ye(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Tn(t) || Dl(t);
    t = l ? t : Ye(t), ml(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function De(e) {
  return pt(e) ? e.value : e;
}
const o0 = { get: (e, t, n) => t === "__v_raw" ? e : De(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return pt(a) && !pt(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Nf(e) {
  return tr(e) ? e : new Proxy(e, o0);
}
class i0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ts(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Ef(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Rf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function u0(e, t, n = false) {
  let l, a;
  return Qe(e) ? l = e : (l = e.get, a = e.set), new i0(l, a, n);
}
const Or = {}, vo = /* @__PURE__ */ new WeakMap();
let $l;
function s0(e, t = false, n = $l) {
  if (n) {
    let l = vo.get(n);
    l || vo.set(n, l = []), l.push(e);
  }
}
function c0(e, t, n = mt) {
  const { immediate: l, deep: a, once: r, scheduler: o, augmentJob: i, call: u } = n, c = (b) => a ? b : Tn(b) || a === false || a === 0 ? Wn(b, 1) : Wn(b);
  let s, f, h, m, g = false, _ = false;
  if (pt(e) ? (f = () => e.value, g = Tn(e)) : tr(e) ? (f = () => c(e), g = true) : je(e) ? (_ = true, g = e.some((b) => tr(b) || Tn(b)), f = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (tr(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      yl();
      try {
        h();
      } finally {
        pl();
      }
    }
    const b = $l;
    $l = s;
    try {
      return u ? u(e, 3, [m]) : e(m);
    } finally {
      $l = b;
    }
  } : f = On, t && a) {
    const b = f, x = a === true ? 1 / 0 : a;
    f = () => Wn(b(), x);
  }
  const w = zg(), S = () => {
    s.stop(), w && w.active && Wu(w.effects, s);
  };
  if (r && t) {
    const b = t;
    t = (...x) => {
      b(...x), S();
    };
  }
  let p = _ ? new Array(e.length).fill(Or) : Or;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const x = s.run();
      if (a || g || (_ ? x.some((A, k) => ml(A, p[k])) : ml(x, p))) {
        h && h();
        const A = $l;
        $l = s;
        try {
          const k = [x, p === Or ? void 0 : _ && p[0] === Or ? [] : p, m];
          u ? u(t, 3, k) : t(...k), p = x;
        } finally {
          $l = A;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Tf(f), s.scheduler = o ? () => o(y, false) : y, m = (b) => s0(b, false, s), h = s.onStop = () => {
    const b = vo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const x of b) x();
      vo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), S.pause = s.pause.bind(s), S.resume = s.resume.bind(s), S.stop = S, S;
}
function Wn(e, t = 1 / 0, n) {
  if (t <= 0 || !Et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, pt(e)) Wn(e.value, t, n);
  else if (je(e)) for (let l = 0; l < e.length; l++) Wn(e[l], t, n);
  else if (xg(e) || Ga(e)) e.forEach((l) => {
    Wn(l, t, n);
  });
  else if (Tg(e)) {
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
    Uo(a, t, n);
  }
}
function En(e, t, n, l) {
  if (Qe(e)) {
    const a = Tr(e, t, n, l);
    return a && Cf(a) && a.catch((r) => {
      Uo(r, t, n);
    }), a;
  }
  if (je(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++) a.push(En(e[r], t, n, l));
    return a;
  }
}
function Uo(e, t, n, l = true) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || mt;
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
    if (r) {
      yl(), Tr(r, null, 10, [e, u, c]), pl();
      return;
    }
  }
  d0(e, n, a, l, o);
}
function d0(e, t, n, l = true, a = false) {
  if (a) throw e;
  console.error(e);
}
const Xt = [];
let Pn = -1;
const sa = [];
let ul = null, aa = 0;
const jf = Promise.resolve();
let mo = null;
function Xe(e) {
  const t = mo || jf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function f0(e) {
  let t = Pn + 1, n = Xt.length;
  for (; t < n; ) {
    const l = t + n >>> 1, a = Xt[l], r = vr(a);
    r < e || r === e && a.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function is(e) {
  if (!(e.flags & 1)) {
    const t = vr(e), n = Xt[Xt.length - 1];
    !n || !(e.flags & 2) && t >= vr(n) ? Xt.push(e) : Xt.splice(f0(t), 0, e), e.flags |= 1, Uf();
  }
}
function Uf() {
  mo || (mo = jf.then(Kf));
}
function v0(e) {
  je(e) ? sa.push(...e) : ul && e.id === -1 ? ul.splice(aa + 1, 0, e) : e.flags & 1 || (sa.push(e), e.flags |= 1), Uf();
}
function ec(e, t, n = Pn + 1) {
  for (; n < Xt.length; n++) {
    const l = Xt[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue;
      Xt.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Qf(e) {
  if (sa.length) {
    const t = [...new Set(sa)].sort((n, l) => vr(n) - vr(l));
    if (sa.length = 0, ul) {
      ul.push(...t);
      return;
    }
    for (ul = t, aa = 0; aa < ul.length; aa++) {
      const n = ul[aa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ul = null, aa = 0;
  }
}
const vr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Kf(e) {
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
    Pn = -1, Xt.length = 0, Qf(), mo = null, (Xt.length || sa.length) && Kf();
  }
}
let tn = null, Wf = null;
function ho(e) {
  const t = tn;
  return tn = e, Wf = e && e.type.__scopeId || null, t;
}
function Lt(e, t = tn, n) {
  if (!t || e._n) return e;
  const l = (...a) => {
    l._d && vc(-1);
    const r = ho(t);
    let o;
    try {
      o = e(...a);
    } finally {
      ho(r), l._d && vc(1);
    }
    return o;
  };
  return l._n = true, l._c = true, l._d = true, l;
}
function sn(e, t) {
  if (tn === null) return e;
  const n = Jo(tn), l = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, i, u = mt] = t[a];
    r && (Qe(r) && (r = { mounted: r, updated: r }), r.deep && Wn(o), l.push({ dir: r, instance: n, value: o, oldValue: void 0, arg: i, modifiers: u }));
  }
  return e;
}
function xl(e, t, n, l) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const i = a[o];
    r && (i.oldValue = r[o].value);
    let u = i.dir[l];
    u && (yl(), En(u, n, 8, [e.el, i, e, t]), pl());
  }
}
const Yf = Symbol("_vte"), Gf = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), tc = (e) => e && (e.defer || e.defer === ""), nc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, lc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, vu = (e, t) => {
  const n = e && e.to;
  return Rt(n) ? t ? t(n) : null : n;
}, Xf = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, r, o, i, u, c) {
  const { mc: s, pc: f, pbc: h, o: { insert: m, querySelector: g, createText: _, createComment: w } } = c, S = nr(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const x = t.el = _(""), A = t.anchor = _("");
    m(x, n, l), m(A, n, l);
    const k = (P, L) => {
      p & 16 && (a && a.isCE && (a.ce._teleportTarget = P), s(y, P, L, a, r, o, i, u));
    }, O = () => {
      const P = t.target = vu(t.props, g), L = Zf(P, t, _, m);
      P && (o !== "svg" && nc(P) ? o = "svg" : o !== "mathml" && lc(P) && (o = "mathml"), S || (k(P, L), to(t, false)));
    };
    S && (k(n, A), to(t, true)), tc(t.props) ? Bt(() => {
      O(), t.el.__isMounted = true;
    }, r) : O();
  } else {
    if (tc(t.props) && !e.el.__isMounted) {
      Bt(() => {
        Xf.process(e, t, n, l, a, r, o, i, u, c), delete e.el.__isMounted;
      }, r);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, A = t.target = e.target, k = t.targetAnchor = e.targetAnchor, O = nr(e.props), P = O ? n : A, L = O ? x : k;
    if (o === "svg" || nc(A) ? o = "svg" : (o === "mathml" || lc(A)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, P, a, r, o, i), ds(e, t, true)) : u || f(e, t, P, L, a, r, o, i, false), S) O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Fr(t, n, x, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const I = t.target = vu(t.props, g);
      I && Fr(t, I, null, c, 0);
    } else O && Fr(t, A, k, c, 1);
    to(t, S);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, r) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: f, props: h } = e;
  if (f && (a(c), a(s)), r && a(u), o & 16) {
    const m = r || !nr(h);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      l(_, t, n, m, !!_.dynamicChildren);
    }
  }
}, move: Fr, hydrate: m0 };
function Fr(e, t, n, { o: { insert: l }, m: a }, r = 2) {
  r === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, f = r === 2;
  if (f && l(o, t, n), (!f || nr(s)) && u & 16) for (let h = 0; h < c.length; h++) a(c[h], t, n, 2);
  f && l(i, t, n);
}
function m0(e, t, n, l, a, r, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, f) {
  const h = t.target = vu(t.props, u);
  if (h) {
    const m = nr(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = f(o(e), t, i(e), n, l, a, r), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || Zf(h, t, s, c), f(g && o(g), t, h, n, l, a, r);
    }
    to(t, m);
  }
  return t.anchor && o(t.anchor);
}
const h0 = Xf;
function to(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, a;
    for (t ? (l = e.el, a = e.anchor) : (l = e.targetStart, a = e.targetAnchor); l && l !== a; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function Zf(e, t, n, l) {
  const a = t.targetStart = n(""), r = t.targetAnchor = n("");
  return a[Yf] = r, e && (l(a, e), l(r, e)), r;
}
const sl = Symbol("_leaveCb"), Vr = Symbol("_enterCb");
function Jf() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return ft(() => {
    e.isMounted = true;
  }), Ke(() => {
    e.isUnmounting = true;
  }), e;
}
const dn = [Function, Array], ev = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: dn, onEnter: dn, onAfterEnter: dn, onEnterCancelled: dn, onBeforeLeave: dn, onLeave: dn, onAfterLeave: dn, onLeaveCancelled: dn, onBeforeAppear: dn, onAppear: dn, onAfterAppear: dn, onAppearCancelled: dn }, tv = (e) => {
  const t = e.subTree;
  return t.component ? tv(t.component) : t;
}, g0 = { name: "BaseTransition", props: ev, setup(e, { slots: t }) {
  const n = Se(), l = Jf();
  return () => {
    const a = t.default && us(t.default(), true);
    if (!a || !a.length) return;
    const r = nv(a), o = Ye(e), { mode: i } = o;
    if (l.isLeaving) return wi(r);
    const u = ac(r);
    if (!u) return wi(r);
    let c = mr(u, o, l, n, (f) => c = f);
    u.type !== Zt && bl(u, c);
    let s = n.subTree && ac(n.subTree);
    if (s && s.type !== Zt && !fl(u, s) && tv(n).type !== Zt) {
      let f = mr(s, o, l, n);
      if (bl(s, f), i === "out-in" && u.type !== Zt) return l.isLeaving = true, f.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, s = void 0;
      }, wi(r);
      i === "in-out" && u.type !== Zt ? f.delayLeave = (h, m, g) => {
        const _ = lv(l, s);
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
function nv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Zt) {
      t = n;
      break;
    }
  }
  return t;
}
const b0 = g0;
function lv(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function mr(e, t, n, l, a) {
  const { appear: r, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: S, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), x = lv(n, e), A = (P, L) => {
    P && En(P, l, 9, L);
  }, k = (P, L) => {
    const I = L[1];
    A(P, L), je(P) ? P.every((T) => T.length <= 1) && I() : P.length <= 1 && I();
  }, O = { mode: o, persisted: i, beforeEnter(P) {
    let L = u;
    if (!n.isMounted) if (r) L = w || u;
    else return;
    P[sl] && P[sl](true);
    const I = x[b];
    I && fl(e, I) && I.el[sl] && I.el[sl](), A(L, [P]);
  }, enter(P) {
    let L = c, I = s, T = f;
    if (!n.isMounted) if (r) L = S || c, I = p || s, T = y || f;
    else return;
    let $ = false;
    const q = P[Vr] = (D) => {
      $ || ($ = true, D ? A(T, [P]) : A(I, [P]), O.delayedLeave && O.delayedLeave(), P[Vr] = void 0);
    };
    L ? k(L, [P, q]) : q();
  }, leave(P, L) {
    const I = String(e.key);
    if (P[Vr] && P[Vr](true), n.isUnmounting) return L();
    A(h, [P]);
    let T = false;
    const $ = P[sl] = (q) => {
      T || (T = true, L(), q ? A(_, [P]) : A(g, [P]), P[sl] = void 0, x[I] === e && delete x[I]);
    };
    x[I] = e, m ? k(m, [P, $]) : $();
  }, clone(P) {
    const L = mr(P, t, n, l, a);
    return a && a(L), L;
  } };
  return O;
}
function wi(e) {
  if (Qo(e)) return e = Gn(e), e.children = null, e;
}
function ac(e) {
  if (!Qo(e)) return Gf(e.type) && e.children ? nv(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Qe(n.default)) return n.default();
  }
}
function bl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function us(e, t = false, n) {
  let l = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === rn ? (o.patchFlag & 128 && a++, l = l.concat(us(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (a > 1) for (let r = 0; r < l.length; r++) l[r].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
  return Qe(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
function av(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function go(e, t, n, l, a = false) {
  if (je(e)) {
    e.forEach((g, _) => go(g, t && (je(t) ? t[_] : t), n, l, a));
    return;
  }
  if (ca(l) && !a) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && go(e, t, n, l.component.subTree);
    return;
  }
  const r = l.shapeFlag & 4 ? Jo(l.component) : l.el, o = a ? null : r, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, f = i.setupState, h = Ye(f), m = f === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && (Rt(c) ? (s[c] = null, m(c) && (f[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Tr(u, i, 12, [o, s]);
  else {
    const g = Rt(u), _ = pt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const S = g ? m(u) ? f[u] : s[u] : u.value;
          a ? je(S) && Wu(S, r) : je(S) ? S.includes(r) || S.push(r) : g ? (s[u] = [r], m(u) && (f[u] = s[u])) : (u.value = [r], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (f[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
      };
      o ? (w.id = -1, Bt(w, n)) : w();
    }
  }
}
qr().requestIdleCallback;
qr().cancelIdleCallback;
const ca = (e) => !!e.type.__asyncLoader, Qo = (e) => e.type.__isKeepAlive, y0 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = Se(), l = n.ctx;
  if (!l.renderer) return () => {
    const p = t.default && t.default();
    return p && p.length === 1 ? p[0] : p;
  };
  const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  let o = null;
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: f } } } = l, h = f("div");
  l.activate = (p, y, b, x, A) => {
    const k = p.component;
    c(p, y, b, 0, i), u(k.vnode, p, y, b, k, i, x, p.slotScopeIds, A), Bt(() => {
      k.isDeactivated = false, k.a && Za(k.a);
      const O = p.props && p.props.onVnodeMounted;
      O && vn(O, k.parent, p);
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
    Si(p), s(p, n, i, true);
  }
  function g(p) {
    a.forEach((y, b) => {
      const x = pu(y.type);
      x && !p(x) && _(b);
    });
  }
  function _(p) {
    const y = a.get(p);
    y && (!o || !fl(y, o)) ? m(y) : o && Si(o), a.delete(p), r.delete(p);
  }
  he(() => [e.include, e.exclude], ([p, y]) => {
    p && g((b) => ja(p, b)), y && g((b) => !ja(y, b));
  }, { flush: "post", deep: true });
  let w = null;
  const S = () => {
    w != null && (po(n.subTree.type) ? Bt(() => {
      a.set(w, zr(n.subTree));
    }, n.subTree.suspense) : a.set(w, zr(n.subTree)));
  };
  return ft(S), Yo(S), Ke(() => {
    a.forEach((p) => {
      const { subTree: y, suspense: b } = n, x = zr(y);
      if (p.type === x.type && p.key === x.key) {
        Si(x);
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
    let b = zr(y);
    if (b.type === Zt) return o = null, b;
    const x = b.type, A = pu(ca(b) ? b.type.__asyncResolved || {} : x), { include: k, exclude: O, max: P } = e;
    if (k && (!A || !ja(k, A)) || O && A && ja(O, A)) return b.shapeFlag &= -257, o = b, y;
    const L = b.key == null ? x : b.key, I = a.get(L);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), w = L, I ? (b.el = I.el, b.component = I.component, b.transition && bl(b, b.transition), b.shapeFlag |= 512, r.delete(L), r.add(L)) : (r.add(L), P && r.size > parseInt(P, 10) && _(r.values().next().value)), b.shapeFlag |= 256, o = b, po(y.type) ? y : b;
  };
} }, rv = y0;
function ja(e, t) {
  return je(e) ? e.some((n) => ja(n, t)) : Rt(e) ? e.split(",").includes(t) : Cg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function _l(e, t) {
  ov(e, "a", t);
}
function Fn(e, t) {
  ov(e, "da", t);
}
function ov(e, t, n = Nt) {
  const l = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated) return;
      a = a.parent;
    }
    return e();
  });
  if (Ko(t, l, n), n) {
    let a = n.parent;
    for (; a && a.parent; ) Qo(a.parent.vnode) && p0(l, t, n, a), a = a.parent;
  }
}
function p0(e, t, n, l) {
  const a = Ko(t, e, l, true);
  Go(() => {
    Wu(l[t], a);
  }, n);
}
function Si(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function zr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ko(e, t, n = Nt, l = false) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      yl();
      const i = Mr(n), u = En(t, n, e, o);
      return i(), pl(), u;
    });
    return l ? a.unshift(r) : a.push(r), r;
  }
}
const Zn = (e) => (t, n = Nt) => {
  (!br || e === "sp") && Ko(e, (...l) => t(...l), n);
}, Wo = Zn("bm"), ft = Zn("m"), Ta = Zn("bu"), Yo = Zn("u"), Ke = Zn("bum"), Go = Zn("um"), _0 = Zn("sp"), w0 = Zn("rtg"), S0 = Zn("rtc");
function x0(e, t = Nt) {
  Ko("ec", e, t);
}
const iv = "components", C0 = "directives";
function ss(e, t) {
  return uv(iv, e, true, t) || e;
}
const k0 = Symbol.for("v-ndc");
function q0(e) {
  return uv(C0, e);
}
function uv(e, t, n = true, l = false) {
  const a = tn || Nt;
  if (a) {
    const r = a.type;
    if (e === iv) {
      const i = pu(r, false);
      if (i && (i === t || i === bn(t) || i === No(bn(t)))) return r;
    }
    const o = rc(a[e] || r[e], t) || rc(a.appContext[e], t);
    return !o && l ? r : o;
  }
}
function rc(e, t) {
  return e && (e[t] || e[bn(t)] || e[No(bn(t))]);
}
const mu = (e) => e ? Mv(e) ? Jo(e) : mu(e.parent) : null, lr = zt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => mu(e.parent), $root: (e) => mu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => cv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  is(e.update);
}), $nextTick: (e) => e.n || (e.n = Xe.bind(e.proxy)), $watch: (e) => W0.bind(e) }), xi = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), T0 = { get({ _: e }, t) {
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
      if (xi(l, t)) return o[t] = 1, l[t];
      if (a !== mt && st(a, t)) return o[t] = 2, a[t];
      if ((c = e.propsOptions[0]) && st(c, t)) return o[t] = 3, r[t];
      if (n !== mt && st(n, t)) return o[t] = 4, n[t];
      hu && (o[t] = 0);
    }
  }
  const s = lr[t];
  let f, h;
  if (s) return t === "$attrs" && Kt(e.attrs, "get", ""), s(e);
  if ((f = i.__cssModules) && (f = f[t])) return f;
  if (n !== mt && st(n, t)) return o[t] = 4, n[t];
  if (h = u.config.globalProperties, st(h, t)) return h[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: a, ctx: r } = e;
  return xi(a, t) ? (a[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (r[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: r } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || xi(t, o) || (i = r[0]) && st(i, o) || st(l, o) || st(lr, o) || st(a.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function oc(e) {
  return je(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let hu = true;
function M0(e) {
  const t = cv(e), n = e.proxy, l = e.ctx;
  hu = false, t.beforeCreate && ic(t.beforeCreate, e, "bc");
  const { data: a, computed: r, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: f, mounted: h, beforeUpdate: m, updated: g, activated: _, deactivated: w, beforeDestroy: S, beforeUnmount: p, destroyed: y, unmounted: b, render: x, renderTracked: A, renderTriggered: k, errorCaptured: O, serverPrefetch: P, expose: L, inheritAttrs: I, components: T, directives: $, filters: q } = t;
  if (c && E0(c, l, null), o) for (const j in o) {
    const Y = o[j];
    Qe(Y) && (l[j] = Y.bind(n));
  }
  if (a) {
    const j = a.call(n, n);
    Et(j) && (e.data = Bn(j));
  }
  if (hu = true, r) for (const j in r) {
    const Y = r[j], le = Qe(Y) ? Y.bind(n, n) : Qe(Y.get) ? Y.get.bind(n, n) : On, pe = !Qe(Y) && Qe(Y.set) ? Y.set.bind(n) : On, W = v({ get: le, set: pe });
    Object.defineProperty(l, j, { enumerable: true, configurable: true, get: () => W.value, set: (M) => W.value = M });
  }
  if (i) for (const j in i) sv(i[j], l, n, j);
  if (u) {
    const j = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((Y) => {
      hn(Y, j[Y]);
    });
  }
  s && ic(s, e, "c");
  function N(j, Y) {
    je(Y) ? Y.forEach((le) => j(le.bind(n))) : Y && j(Y.bind(n));
  }
  if (N(Wo, f), N(ft, h), N(Ta, m), N(Yo, g), N(_l, _), N(Fn, w), N(x0, O), N(S0, A), N(w0, k), N(Ke, p), N(Go, b), N(_0, P), je(L)) if (L.length) {
    const j = e.exposed || (e.exposed = {});
    L.forEach((Y) => {
      Object.defineProperty(j, Y, { get: () => n[Y], set: (le) => n[Y] = le });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === On && (e.render = x), I != null && (e.inheritAttrs = I), T && (e.components = T), $ && (e.directives = $), P && av(e);
}
function E0(e, t, n = On) {
  je(e) && (e = gu(e));
  for (const l in e) {
    const a = e[l];
    let r;
    Et(a) ? "default" in a ? r = qt(a.from || l, a.default, true) : r = qt(a.from || l) : r = qt(a), pt(r) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : t[l] = r;
  }
}
function ic(e, t, n) {
  En(je(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function sv(e, t, n, l) {
  let a = l.includes(".") ? xv(n, l) : () => n[l];
  if (Rt(e)) {
    const r = t[e];
    Qe(r) && he(a, r);
  } else if (Qe(e)) he(a, e.bind(n));
  else if (Et(e)) if (je(e)) e.forEach((r) => sv(r, t, n, l));
  else {
    const r = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Qe(r) && he(a, r, e);
  }
}
function cv(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: a, optionsCache: r, config: { optionMergeStrategies: o } } = e.appContext, i = r.get(t);
  let u;
  return i ? u = i : !a.length && !n && !l ? u = t : (u = {}, a.length && a.forEach((c) => bo(u, c, o, true)), bo(u, t, o)), Et(t) && r.set(t, u), u;
}
function bo(e, t, n, l = false) {
  const { mixins: a, extends: r } = t;
  r && bo(e, r, n, true), a && a.forEach((o) => bo(e, o, n, true));
  for (const o in t) if (!(l && o === "expose")) {
    const i = $0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const $0 = { data: uc, props: sc, emits: sc, methods: Ua, computed: Ua, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Ua, directives: Ua, watch: R0, provide: uc, inject: A0 };
function uc(e, t) {
  return t ? e ? function() {
    return zt(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function A0(e, t) {
  return Ua(gu(e), gu(t));
}
function gu(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ua(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function sc(e, t) {
  return e ? je(e) && je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(/* @__PURE__ */ Object.create(null), oc(e), oc(t ?? {})) : t;
}
function R0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function dv() {
  return { app: null, config: { isNativeTag: wg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let P0 = 0;
function L0(e, t) {
  return function(l, a = null) {
    Qe(l) || (l = zt({}, l)), a != null && !Et(a) && (a = null);
    const r = dv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = r.app = { _uid: P0++, _component: l, _props: a, _container: null, _context: r, _instance: null, version: hb, get config() {
      return r.config;
    }, set config(s) {
    }, use(s, ...f) {
      return o.has(s) || (s && Qe(s.install) ? (o.add(s), s.install(c, ...f)) : Qe(s) && (o.add(s), s(c, ...f))), c;
    }, mixin(s) {
      return r.mixins.includes(s) || r.mixins.push(s), c;
    }, component(s, f) {
      return f ? (r.components[s] = f, c) : r.components[s];
    }, directive(s, f) {
      return f ? (r.directives[s] = f, c) : r.directives[s];
    }, mount(s, f, h) {
      if (!u) {
        const m = c._ceVNode || Je(l, a);
        return m.appContext = r, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, Jo(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (En(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, f) {
      return r.provides[s] = f, c;
    }, runWithContext(s) {
      const f = da;
      da = c;
      try {
        return s();
      } finally {
        da = f;
      }
    } };
    return c;
  };
}
let da = null;
function hn(e, t) {
  if (Nt) {
    let n = Nt.provides;
    const l = Nt.parent && Nt.parent.provides;
    l === n && (n = Nt.provides = Object.create(l)), n[e] = t;
  }
}
function qt(e, t, n = false) {
  const l = Nt || tn;
  if (l || da) {
    const a = da ? da._context.provides : l ? l.parent == null ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (a && e in a) return a[e];
    if (arguments.length > 1) return n && Qe(t) ? t.call(l && l.proxy) : t;
  }
}
const fv = {}, vv = () => Object.create(fv), mv = (e) => Object.getPrototypeOf(e) === fv;
function B0(e, t, n, l = false) {
  const a = {}, r = vv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hv(e, t, a, r);
  for (const o in e.propsOptions[0]) o in a || (a[o] = void 0);
  n ? e.props = l ? a : as(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function O0(e, t, n, l) {
  const { props: a, attrs: r, vnode: { patchFlag: o } } = e, i = Ye(a), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let h = s[f];
        if (Xo(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(r, h)) m !== r[h] && (r[h] = m, c = true);
        else {
          const g = bn(h);
          a[g] = bu(u, i, g, m, e, false);
        }
        else m !== r[h] && (r[h] = m, c = true);
      }
    }
  } else {
    hv(e, t, a, r) && (c = true);
    let s;
    for (const f in i) (!t || !st(t, f) && ((s = Ul(f)) === f || !st(t, s))) && (u ? n && (n[f] !== void 0 || n[s] !== void 0) && (a[f] = bu(u, i, f, void 0, e, true)) : delete a[f]);
    if (r !== i) for (const f in r) (!t || !st(t, f)) && (delete r[f], c = true);
  }
  c && Kn(e.attrs, "set", "");
}
function hv(e, t, n, l) {
  const [a, r] = e.propsOptions;
  let o = false, i;
  if (t) for (let u in t) {
    if (Xa(u)) continue;
    const c = t[u];
    let s;
    a && st(a, s = bn(u)) ? !r || !r.includes(s) ? n[s] = c : (i || (i = {}))[s] = c : Xo(e.emitsOptions, u) || (!(u in l) || c !== l[u]) && (l[u] = c, o = true);
  }
  if (r) {
    const u = Ye(n), c = i || mt;
    for (let s = 0; s < r.length; s++) {
      const f = r[s];
      n[f] = bu(a, u, f, c[f], e, !st(c, f));
    }
  }
  return o;
}
function bu(e, t, n, l, a, r) {
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
    o[0] && (r && !i ? l = false : o[1] && (l === "" || l === Ul(n)) && (l = true));
  }
  return l;
}
const F0 = /* @__PURE__ */ new WeakMap();
function gv(e, t, n = false) {
  const l = n ? F0 : t.propsCache, a = l.get(e);
  if (a) return a;
  const r = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (f) => {
      u = true;
      const [h, m] = gv(f, t, true);
      zt(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!r && !u) return Et(e) && l.set(e, ua), ua;
  if (je(r)) for (let s = 0; s < r.length; s++) {
    const f = bn(r[s]);
    cc(f) && (o[f] = mt);
  }
  else if (r) for (const s in r) {
    const f = bn(s);
    if (cc(f)) {
      const h = r[s], m = o[f] = je(h) || Qe(h) ? { type: h } : zt({}, h), g = m.type;
      let _ = false, w = true;
      if (je(g)) for (let S = 0; S < g.length; ++S) {
        const p = g[S], y = Qe(p) && p.name;
        if (y === "Boolean") {
          _ = true;
          break;
        } else y === "String" && (w = false);
      }
      else _ = Qe(g) && g.name === "Boolean";
      m[0] = _, m[1] = w, (_ || st(m, "default")) && i.push(f);
    }
  }
  const c = [o, i];
  return Et(e) && l.set(e, c), c;
}
function cc(e) {
  return e[0] !== "$" && !Xa(e);
}
const bv = (e) => e[0] === "_" || e === "$stable", cs = (e) => je(e) ? e.map(Ln) : [Ln(e)], V0 = (e, t, n) => {
  if (t._n) return t;
  const l = Lt((...a) => cs(t(...a)), n);
  return l._c = false, l;
}, yv = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (bv(a)) continue;
    const r = e[a];
    if (Qe(r)) t[a] = V0(a, r, l);
    else if (r != null) {
      const o = cs(r);
      t[a] = () => o;
    }
  }
}, pv = (e, t) => {
  const n = cs(t);
  e.slots.default = () => n;
}, _v = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, z0 = (e, t, n) => {
  const l = e.slots = vv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (_v(l, t, n), n && kf(l, "_", a, true)) : yv(t, l);
  } else t && pv(e, t);
}, I0 = (e, t, n) => {
  const { vnode: l, slots: a } = e;
  let r = true, o = mt;
  if (l.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? r = false : _v(a, t, n) : (r = !t.$stable, yv(t, a)), o = t;
  } else t && (pv(e, t), o = { default: 1 });
  if (r) for (const i in a) !bv(i) && o[i] == null && delete a[i];
};
function D0() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (qr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
const Bt = tb;
function H0(e) {
  return N0(e);
}
function N0(e, t) {
  D0();
  const n = qr();
  n.__VUE__ = true;
  const { insert: l, remove: a, patchProp: r, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: f, nextSibling: h, setScopeId: m = On, insertStaticContent: g } = e, _ = (C, E, z, Z = null, te = null, Q = null, de = void 0, me = null, fe = !!E.dynamicChildren) => {
    if (C === E) return;
    C && !fl(C, E) && (Z = R(C), M(C, te, Q, true), C = null), E.patchFlag === -2 && (fe = false, E.dynamicChildren = null);
    const { type: ce, ref: ne, shapeFlag: H } = E;
    switch (ce) {
      case Zo:
        w(C, E, z, Z);
        break;
      case Zt:
        S(C, E, z, Z);
        break;
      case ki:
        C == null && p(E, z, Z, de);
        break;
      case rn:
        T(C, E, z, Z, te, Q, de, me, fe);
        break;
      default:
        H & 1 ? x(C, E, z, Z, te, Q, de, me, fe) : H & 6 ? $(C, E, z, Z, te, Q, de, me, fe) : (H & 64 || H & 128) && ce.process(C, E, z, Z, te, Q, de, me, fe, re);
    }
    ne != null && te && go(ne, C && C.ref, Q, E || C, !E);
  }, w = (C, E, z, Z) => {
    if (C == null) l(E.el = i(E.children), z, Z);
    else {
      const te = E.el = C.el;
      E.children !== C.children && c(te, E.children);
    }
  }, S = (C, E, z, Z) => {
    C == null ? l(E.el = u(E.children || ""), z, Z) : E.el = C.el;
  }, p = (C, E, z, Z) => {
    [C.el, C.anchor] = g(C.children, E, z, Z, C.el, C.anchor);
  }, y = ({ el: C, anchor: E }, z, Z) => {
    let te;
    for (; C && C !== E; ) te = h(C), l(C, z, Z), C = te;
    l(E, z, Z);
  }, b = ({ el: C, anchor: E }) => {
    let z;
    for (; C && C !== E; ) z = h(C), a(C), C = z;
    a(E);
  }, x = (C, E, z, Z, te, Q, de, me, fe) => {
    E.type === "svg" ? de = "svg" : E.type === "math" && (de = "mathml"), C == null ? A(E, z, Z, te, Q, de, me, fe) : P(C, E, te, Q, de, me, fe);
  }, A = (C, E, z, Z, te, Q, de, me) => {
    let fe, ce;
    const { props: ne, shapeFlag: H, transition: oe, dirs: _e } = C;
    if (fe = C.el = o(C.type, Q, ne && ne.is, ne), H & 8 ? s(fe, C.children) : H & 16 && O(C.children, fe, null, Z, te, Ci(C, Q), de, me), _e && xl(C, null, Z, "created"), k(fe, C, C.scopeId, de, Z), ne) {
      for (const qe in ne) qe !== "value" && !Xa(qe) && r(fe, qe, null, ne[qe], Q, Z);
      "value" in ne && r(fe, "value", null, ne.value, Q), (ce = ne.onVnodeBeforeMount) && vn(ce, Z, C);
    }
    _e && xl(C, null, Z, "beforeMount");
    const ke = j0(te, oe);
    ke && oe.beforeEnter(fe), l(fe, E, z), ((ce = ne && ne.onVnodeMounted) || ke || _e) && Bt(() => {
      ce && vn(ce, Z, C), ke && oe.enter(fe), _e && xl(C, null, Z, "mounted");
    }, te);
  }, k = (C, E, z, Z, te) => {
    if (z && m(C, z), Z) for (let Q = 0; Q < Z.length; Q++) m(C, Z[Q]);
    if (te) {
      let Q = te.subTree;
      if (E === Q || po(Q.type) && (Q.ssContent === E || Q.ssFallback === E)) {
        const de = te.vnode;
        k(C, de, de.scopeId, de.slotScopeIds, te.parent);
      }
    }
  }, O = (C, E, z, Z, te, Q, de, me, fe = 0) => {
    for (let ce = fe; ce < C.length; ce++) {
      const ne = C[ce] = me ? cl(C[ce]) : Ln(C[ce]);
      _(null, ne, E, z, Z, te, Q, de, me);
    }
  }, P = (C, E, z, Z, te, Q, de) => {
    const me = E.el = C.el;
    let { patchFlag: fe, dynamicChildren: ce, dirs: ne } = E;
    fe |= C.patchFlag & 16;
    const H = C.props || mt, oe = E.props || mt;
    let _e;
    if (z && Cl(z, false), (_e = oe.onVnodeBeforeUpdate) && vn(_e, z, E, C), ne && xl(E, C, z, "beforeUpdate"), z && Cl(z, true), (H.innerHTML && oe.innerHTML == null || H.textContent && oe.textContent == null) && s(me, ""), ce ? L(C.dynamicChildren, ce, me, z, Z, Ci(E, te), Q) : de || Y(C, E, me, null, z, Z, Ci(E, te), Q, false), fe > 0) {
      if (fe & 16) I(me, H, oe, z, te);
      else if (fe & 2 && H.class !== oe.class && r(me, "class", null, oe.class, te), fe & 4 && r(me, "style", H.style, oe.style, te), fe & 8) {
        const ke = E.dynamicProps;
        for (let qe = 0; qe < ke.length; qe++) {
          const Me = ke[qe], He = H[Me], Ve = oe[Me];
          (Ve !== He || Me === "value") && r(me, Me, He, Ve, te, z);
        }
      }
      fe & 1 && C.children !== E.children && s(me, E.children);
    } else !de && ce == null && I(me, H, oe, z, te);
    ((_e = oe.onVnodeUpdated) || ne) && Bt(() => {
      _e && vn(_e, z, E, C), ne && xl(E, C, z, "updated");
    }, Z);
  }, L = (C, E, z, Z, te, Q, de) => {
    for (let me = 0; me < E.length; me++) {
      const fe = C[me], ce = E[me], ne = fe.el && (fe.type === rn || !fl(fe, ce) || fe.shapeFlag & 70) ? f(fe.el) : z;
      _(fe, ce, ne, null, Z, te, Q, de, true);
    }
  }, I = (C, E, z, Z, te) => {
    if (E !== z) {
      if (E !== mt) for (const Q in E) !Xa(Q) && !(Q in z) && r(C, Q, E[Q], null, te, Z);
      for (const Q in z) {
        if (Xa(Q)) continue;
        const de = z[Q], me = E[Q];
        de !== me && Q !== "value" && r(C, Q, me, de, te, Z);
      }
      "value" in z && r(C, "value", E.value, z.value, te);
    }
  }, T = (C, E, z, Z, te, Q, de, me, fe) => {
    const ce = E.el = C ? C.el : i(""), ne = E.anchor = C ? C.anchor : i("");
    let { patchFlag: H, dynamicChildren: oe, slotScopeIds: _e } = E;
    _e && (me = me ? me.concat(_e) : _e), C == null ? (l(ce, z, Z), l(ne, z, Z), O(E.children || [], z, ne, te, Q, de, me, fe)) : H > 0 && H & 64 && oe && C.dynamicChildren ? (L(C.dynamicChildren, oe, z, te, Q, de, me), (E.key != null || te && E === te.subTree) && ds(C, E, true)) : Y(C, E, z, ne, te, Q, de, me, fe);
  }, $ = (C, E, z, Z, te, Q, de, me, fe) => {
    E.slotScopeIds = me, C == null ? E.shapeFlag & 512 ? te.ctx.activate(E, z, Z, de, fe) : q(E, z, Z, te, Q, de, fe) : D(C, E, fe);
  }, q = (C, E, z, Z, te, Q, de) => {
    const me = C.component = ub(C, Z, te);
    if (Qo(C) && (me.ctx.renderer = re), sb(me, false, de), me.asyncDep) {
      if (te && te.registerDep(me, N, de), !C.el) {
        const fe = me.subTree = Je(Zt);
        S(null, fe, E, z);
      }
    } else N(me, C, E, z, te, Q, de);
  }, D = (C, E, z) => {
    const Z = E.component = C.component;
    if (J0(C, E, z)) if (Z.asyncDep && !Z.asyncResolved) {
      j(Z, E, z);
      return;
    } else Z.next = E, Z.update();
    else E.el = C.el, Z.vnode = E;
  }, N = (C, E, z, Z, te, Q, de) => {
    const me = () => {
      if (C.isMounted) {
        let { next: H, bu: oe, u: _e, parent: ke, vnode: qe } = C;
        {
          const ge = wv(C);
          if (ge) {
            H && (H.el = qe.el, j(C, H, de)), ge.asyncDep.then(() => {
              C.isUnmounted || me();
            });
            return;
          }
        }
        let Me = H, He;
        Cl(C, false), H ? (H.el = qe.el, j(C, H, de)) : H = qe, oe && Za(oe), (He = H.props && H.props.onVnodeBeforeUpdate) && vn(He, ke, H, qe), Cl(C, true);
        const Ve = dc(C), ie = C.subTree;
        C.subTree = Ve, _(ie, Ve, f(ie.el), R(ie), C, te, Q), H.el = Ve.el, Me === null && eb(C, Ve.el), _e && Bt(_e, te), (He = H.props && H.props.onVnodeUpdated) && Bt(() => vn(He, ke, H, qe), te);
      } else {
        let H;
        const { el: oe, props: _e } = E, { bm: ke, m: qe, parent: Me, root: He, type: Ve } = C, ie = ca(E);
        Cl(C, false), ke && Za(ke), !ie && (H = _e && _e.onVnodeBeforeMount) && vn(H, Me, E), Cl(C, true);
        {
          He.ce && He.ce._injectChildStyle(Ve);
          const ge = C.subTree = dc(C);
          _(null, ge, z, Z, C, te, Q), E.el = ge.el;
        }
        if (qe && Bt(qe, te), !ie && (H = _e && _e.onVnodeMounted)) {
          const ge = E;
          Bt(() => vn(H, Me, ge), te);
        }
        (E.shapeFlag & 256 || Me && ca(Me.vnode) && Me.vnode.shapeFlag & 256) && C.a && Bt(C.a, te), C.isMounted = true, E = z = Z = null;
      }
    };
    C.scope.on();
    const fe = C.effect = new Tf(me);
    C.scope.off();
    const ce = C.update = fe.run.bind(fe), ne = C.job = fe.runIfDirty.bind(fe);
    ne.i = C, ne.id = C.uid, fe.scheduler = () => is(ne), Cl(C, true), ce();
  }, j = (C, E, z) => {
    E.component = C;
    const Z = C.vnode.props;
    C.vnode = E, C.next = null, O0(C, E.props, Z, z), I0(C, E.children, z), yl(), ec(C), pl();
  }, Y = (C, E, z, Z, te, Q, de, me, fe = false) => {
    const ce = C && C.children, ne = C ? C.shapeFlag : 0, H = E.children, { patchFlag: oe, shapeFlag: _e } = E;
    if (oe > 0) {
      if (oe & 128) {
        pe(ce, H, z, Z, te, Q, de, me, fe);
        return;
      } else if (oe & 256) {
        le(ce, H, z, Z, te, Q, de, me, fe);
        return;
      }
    }
    _e & 8 ? (ne & 16 && B(ce, te, Q), H !== ce && s(z, H)) : ne & 16 ? _e & 16 ? pe(ce, H, z, Z, te, Q, de, me, fe) : B(ce, te, Q, true) : (ne & 8 && s(z, ""), _e & 16 && O(H, z, Z, te, Q, de, me, fe));
  }, le = (C, E, z, Z, te, Q, de, me, fe) => {
    C = C || ua, E = E || ua;
    const ce = C.length, ne = E.length, H = Math.min(ce, ne);
    let oe;
    for (oe = 0; oe < H; oe++) {
      const _e = E[oe] = fe ? cl(E[oe]) : Ln(E[oe]);
      _(C[oe], _e, z, null, te, Q, de, me, fe);
    }
    ce > ne ? B(C, te, Q, true, false, H) : O(E, z, Z, te, Q, de, me, fe, H);
  }, pe = (C, E, z, Z, te, Q, de, me, fe) => {
    let ce = 0;
    const ne = E.length;
    let H = C.length - 1, oe = ne - 1;
    for (; ce <= H && ce <= oe; ) {
      const _e = C[ce], ke = E[ce] = fe ? cl(E[ce]) : Ln(E[ce]);
      if (fl(_e, ke)) _(_e, ke, z, null, te, Q, de, me, fe);
      else break;
      ce++;
    }
    for (; ce <= H && ce <= oe; ) {
      const _e = C[H], ke = E[oe] = fe ? cl(E[oe]) : Ln(E[oe]);
      if (fl(_e, ke)) _(_e, ke, z, null, te, Q, de, me, fe);
      else break;
      H--, oe--;
    }
    if (ce > H) {
      if (ce <= oe) {
        const _e = oe + 1, ke = _e < ne ? E[_e].el : Z;
        for (; ce <= oe; ) _(null, E[ce] = fe ? cl(E[ce]) : Ln(E[ce]), z, ke, te, Q, de, me, fe), ce++;
      }
    } else if (ce > oe) for (; ce <= H; ) M(C[ce], te, Q, true), ce++;
    else {
      const _e = ce, ke = ce, qe = /* @__PURE__ */ new Map();
      for (ce = ke; ce <= oe; ce++) {
        const Ce = E[ce] = fe ? cl(E[ce]) : Ln(E[ce]);
        Ce.key != null && qe.set(Ce.key, ce);
      }
      let Me, He = 0;
      const Ve = oe - ke + 1;
      let ie = false, ge = 0;
      const ae = new Array(Ve);
      for (ce = 0; ce < Ve; ce++) ae[ce] = 0;
      for (ce = _e; ce <= H; ce++) {
        const Ce = C[ce];
        if (He >= Ve) {
          M(Ce, te, Q, true);
          continue;
        }
        let Fe;
        if (Ce.key != null) Fe = qe.get(Ce.key);
        else for (Me = ke; Me <= oe; Me++) if (ae[Me - ke] === 0 && fl(Ce, E[Me])) {
          Fe = Me;
          break;
        }
        Fe === void 0 ? M(Ce, te, Q, true) : (ae[Fe - ke] = ce + 1, Fe >= ge ? ge = Fe : ie = true, _(Ce, E[Fe], z, null, te, Q, de, me, fe), He++);
      }
      const ye = ie ? U0(ae) : ua;
      for (Me = ye.length - 1, ce = Ve - 1; ce >= 0; ce--) {
        const Ce = ke + ce, Fe = E[Ce], $e = Ce + 1 < ne ? E[Ce + 1].el : Z;
        ae[ce] === 0 ? _(null, Fe, z, $e, te, Q, de, me, fe) : ie && (Me < 0 || ce !== ye[Me] ? W(Fe, z, $e, 2) : Me--);
      }
    }
  }, W = (C, E, z, Z, te = null) => {
    const { el: Q, type: de, transition: me, children: fe, shapeFlag: ce } = C;
    if (ce & 6) {
      W(C.component.subTree, E, z, Z);
      return;
    }
    if (ce & 128) {
      C.suspense.move(E, z, Z);
      return;
    }
    if (ce & 64) {
      de.move(C, E, z, re);
      return;
    }
    if (de === rn) {
      l(Q, E, z);
      for (let H = 0; H < fe.length; H++) W(fe[H], E, z, Z);
      l(C.anchor, E, z);
      return;
    }
    if (de === ki) {
      y(C, E, z);
      return;
    }
    if (Z !== 2 && ce & 1 && me) if (Z === 0) me.beforeEnter(Q), l(Q, E, z), Bt(() => me.enter(Q), te);
    else {
      const { leave: H, delayLeave: oe, afterLeave: _e } = me, ke = () => l(Q, E, z), qe = () => {
        H(Q, () => {
          ke(), _e && _e();
        });
      };
      oe ? oe(Q, ke, qe) : qe();
    }
    else l(Q, E, z);
  }, M = (C, E, z, Z = false, te = false) => {
    const { type: Q, props: de, ref: me, children: fe, dynamicChildren: ce, shapeFlag: ne, patchFlag: H, dirs: oe, cacheIndex: _e } = C;
    if (H === -2 && (te = false), me != null && go(me, null, z, C, true), _e != null && (E.renderCache[_e] = void 0), ne & 256) {
      E.ctx.deactivate(C);
      return;
    }
    const ke = ne & 1 && oe, qe = !ca(C);
    let Me;
    if (qe && (Me = de && de.onVnodeBeforeUnmount) && vn(Me, E, C), ne & 6) be(C.component, z, Z);
    else {
      if (ne & 128) {
        C.suspense.unmount(z, Z);
        return;
      }
      ke && xl(C, null, E, "beforeUnmount"), ne & 64 ? C.type.remove(C, E, z, re, Z) : ce && !ce.hasOnce && (Q !== rn || H > 0 && H & 64) ? B(ce, E, z, false, true) : (Q === rn && H & 384 || !te && ne & 16) && B(fe, E, z), Z && ee(C);
    }
    (qe && (Me = de && de.onVnodeUnmounted) || ke) && Bt(() => {
      Me && vn(Me, E, C), ke && xl(C, null, E, "unmounted");
    }, z);
  }, ee = (C) => {
    const { type: E, el: z, anchor: Z, transition: te } = C;
    if (E === rn) {
      X(z, Z);
      return;
    }
    if (E === ki) {
      b(C);
      return;
    }
    const Q = () => {
      a(z), te && !te.persisted && te.afterLeave && te.afterLeave();
    };
    if (C.shapeFlag & 1 && te && !te.persisted) {
      const { leave: de, delayLeave: me } = te, fe = () => de(z, Q);
      me ? me(C.el, Q, fe) : fe();
    } else Q();
  }, X = (C, E) => {
    let z;
    for (; C !== E; ) z = h(C), a(C), C = z;
    a(E);
  }, be = (C, E, z) => {
    const { bum: Z, scope: te, job: Q, subTree: de, um: me, m: fe, a: ce } = C;
    yo(fe), yo(ce), Z && Za(Z), te.stop(), Q && (Q.flags |= 8, M(de, C, E, z)), me && Bt(me, E), Bt(() => {
      C.isUnmounted = true;
    }, E), E && E.pendingBranch && !E.isUnmounted && C.asyncDep && !C.asyncResolved && C.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve());
  }, B = (C, E, z, Z = false, te = false, Q = 0) => {
    for (let de = Q; de < C.length; de++) M(C[de], E, z, Z, te);
  }, R = (C) => {
    if (C.shapeFlag & 6) return R(C.component.subTree);
    if (C.shapeFlag & 128) return C.suspense.next();
    const E = h(C.anchor || C.el), z = E && E[Yf];
    return z ? h(z) : E;
  };
  let J = false;
  const F = (C, E, z) => {
    C == null ? E._vnode && M(E._vnode, null, null, true) : _(E._vnode || null, C, E, null, null, null, z), E._vnode = C, J || (J = true, ec(), Qf(), J = false);
  }, re = { p: _, um: M, m: W, r: ee, mt: q, mc: O, pc: Y, pbc: L, n: R, o: e };
  return { render: F, hydrate: void 0, createApp: L0(F) };
}
function Ci({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Cl({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function j0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ds(e, t, n = false) {
  const l = e.children, a = t.children;
  if (je(l) && je(a)) for (let r = 0; r < l.length; r++) {
    const o = l[r];
    let i = a[r];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[r] = cl(a[r]), i.el = o.el), !n && i.patchFlag !== -2 && ds(o, i)), i.type === Zo && (i.el = o.el);
  }
}
function U0(e) {
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
function wv(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : wv(t);
}
function yo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Q0 = Symbol.for("v-scx"), K0 = () => qt(Q0);
function he(e, t, n) {
  return Sv(e, t, n);
}
function Sv(e, t, n = mt) {
  const { immediate: l, deep: a, flush: r, once: o } = n, i = zt({}, n), u = t && l || !t && r !== "post";
  let c;
  if (br) {
    if (r === "sync") {
      const m = K0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = On, m.resume = On, m.pause = On, m;
    }
  }
  const s = Nt;
  i.call = (m, g, _) => En(m, s, g, _);
  let f = false;
  r === "post" ? i.scheduler = (m) => {
    Bt(m, s && s.suspense);
  } : r !== "sync" && (f = true, i.scheduler = (m, g) => {
    g ? m() : is(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = c0(e, t, i);
  return br && (c ? c.push(h) : u && h()), h;
}
function W0(e, t, n) {
  const l = this.proxy, a = Rt(e) ? e.includes(".") ? xv(l, e) : () => l[e] : e.bind(l, l);
  let r;
  Qe(t) ? r = t : (r = t.handler, n = t);
  const o = Mr(this), i = Sv(a, r.bind(l), n);
  return o(), i;
}
function xv(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let a = 0; a < n.length && l; a++) l = l[n[a]];
    return l;
  };
}
const Y0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bn(t)}Modifiers`] || e[`${Ul(t)}Modifiers`];
function G0(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || mt;
  let a = n;
  const r = t.startsWith("update:"), o = r && Y0(l, t.slice(7));
  o && (o.trim && (a = n.map((s) => Rt(s) ? s.trim() : s)), o.number && (a = n.map($g)));
  let i, u = l[i = bi(t)] || l[i = bi(bn(t))];
  !u && r && (u = l[i = bi(Ul(t))]), u && En(u, e, 6, a);
  const c = l[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    e.emitted[i] = true, En(c, e, 6, a);
  }
}
function Cv(e, t, n = false) {
  const l = t.emitsCache, a = l.get(e);
  if (a !== void 0) return a;
  const r = e.emits;
  let o = {}, i = false;
  if (!Qe(e)) {
    const u = (c) => {
      const s = Cv(c, t, true);
      s && (i = true, zt(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !i ? (Et(e) && l.set(e, null), null) : (je(r) ? r.forEach((u) => o[u] = null) : zt(o, r), Et(e) && l.set(e, o), o);
}
function Xo(e, t) {
  return !e || !Do(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Ul(t)) || st(e, t));
}
function dc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [r], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: f, data: h, setupState: m, ctx: g, inheritAttrs: _ } = e, w = ho(e);
  let S, p;
  try {
    if (n.shapeFlag & 4) {
      const b = a || l, x = b;
      S = Ln(c.call(x, b, s, f, m, h, g)), p = i;
    } else {
      const b = t;
      S = Ln(b.length > 1 ? b(f, { attrs: i, slots: o, emit: u }) : b(f, null)), p = t.props ? i : X0(i);
    }
  } catch (b) {
    ar.length = 0, Uo(b, e, 1), S = Je(Zt);
  }
  let y = S;
  if (p && _ !== false) {
    const b = Object.keys(p), { shapeFlag: x } = y;
    b.length && x & 7 && (r && b.some(Ku) && (p = Z0(p, r)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && bl(y, n.transition), S = y, ho(w), S;
}
const X0 = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Z0 = (e, t) => {
  const n = {};
  for (const l in e) (!Ku(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function J0(e, t, n) {
  const { props: l, children: a, component: r } = e, { props: o, children: i, patchFlag: u } = t, c = r.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? fc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (o[h] !== l[h] && !Xo(c, h)) return true;
      }
    }
  } else return (a || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? fc(l, o, c) : true : !!o;
  return false;
}
function fc(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length) return true;
  for (let a = 0; a < l.length; a++) {
    const r = l[a];
    if (t[r] !== e[r] && !Xo(n, r)) return true;
  }
  return false;
}
function eb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const po = (e) => e.__isSuspense;
function tb(e, t) {
  t && t.pendingBranch ? je(e) ? t.effects.push(...e) : t.effects.push(e) : v0(e);
}
const rn = Symbol.for("v-fgt"), Zo = Symbol.for("v-txt"), Zt = Symbol.for("v-cmt"), ki = Symbol.for("v-stc"), ar = [];
let un = null;
function Yn(e = false) {
  ar.push(un = e ? null : []);
}
function nb() {
  ar.pop(), un = ar[ar.length - 1] || null;
}
let hr = 1;
function vc(e, t = false) {
  hr += e, e < 0 && un && t && (un.hasOnce = true);
}
function kv(e) {
  return e.dynamicChildren = hr > 0 ? un || ua : null, nb(), hr > 0 && un && un.push(e), e;
}
function qv(e, t, n, l, a, r) {
  return kv(fa(e, t, n, l, a, r, true));
}
function Rl(e, t, n, l, a) {
  return kv(Je(e, t, n, l, a, true));
}
function gr(e) {
  return e ? e.__v_isVNode === true : false;
}
function fl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Tv = ({ key: e }) => e ?? null, no = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Rt(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function fa(e, t = null, n = null, l = 0, a = null, r = e === rn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Tv(t), ref: t && no(t), scopeId: Wf, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (fs(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= Rt(n) ? 8 : 16), hr > 0 && !o && un && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = lb;
function lb(e, t = null, n = null, l = 0, a = null, r = false) {
  if ((!e || e === k0) && (e = Zt), gr(e)) {
    const i = Gn(e, t, true);
    return n && fs(i, n), hr > 0 && !r && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (mb(e) && (e = e.__vccOpts), t) {
    t = ab(t);
    let { class: i, style: u } = t;
    i && !Rt(i) && (t.class = Xu(i)), Et(u) && (os(u) && !je(u) && (u = zt({}, u)), t.style = Gu(u));
  }
  const o = Rt(e) ? 1 : po(e) ? 128 : Gf(e) ? 64 : Et(e) ? 4 : Qe(e) ? 2 : 0;
  return fa(e, t, n, l, a, o, r, true);
}
function ab(e) {
  return e ? os(e) || mv(e) ? zt({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: a, ref: r, patchFlag: o, children: i, transition: u } = e, c = t ? rb(a || {}, t) : a, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Tv(c), ref: t && t.ref ? n && r ? je(r) ? r.concat(no(t)) : [r, no(t)] : no(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && bl(s, u.clone(s)), s;
}
function oa(e = " ", t = 0) {
  return Je(Zo, null, e, t);
}
function mc(e = "", t = false) {
  return t ? (Yn(), Rl(Zt, null, e)) : Je(Zt, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : je(e) ? Je(rn, null, e.slice()) : gr(e) ? cl(e) : Je(Zo, null, String(e));
}
function cl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function fs(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (je(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const a = t.default;
    a && (a._c && (a._d = false), fs(e, a()), a._c && (a._d = true));
    return;
  } else {
    n = 32;
    const a = t._;
    !a && !mv(t) ? t._ctx = tn : a === 3 && tn && (tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Qe(t) ? (t = { default: t, _ctx: tn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [oa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rb(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = Xu([t.class, l.class]));
    else if (a === "style") t.style = Gu([t.style, l.style]);
    else if (Do(a)) {
      const r = t[a], o = l[a];
      o && r !== o && !(je(r) && r.includes(o)) && (t[a] = r ? [].concat(r, o) : o);
    } else a !== "" && (t[a] = l[a]);
  }
  return t;
}
function vn(e, t, n, l = null) {
  En(e, t, 7, [n, l]);
}
const ob = dv();
let ib = 0;
function ub(e, t, n) {
  const l = e.type, a = (t ? t.appContext : e.appContext) || ob, r = { uid: ib++, vnode: e, type: l, parent: t, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Vg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(a.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: gv(l, a), emitsOptions: Cv(l, a), emit: null, emitted: null, propsDefaults: mt, inheritAttrs: l.inheritAttrs, ctx: mt, data: mt, props: mt, attrs: mt, slots: mt, refs: mt, setupState: mt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = G0.bind(null, r), e.ce && e.ce(r), r;
}
let Nt = null;
const Se = () => Nt || tn;
let _o, yu;
{
  const e = qr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  _o = t("__VUE_INSTANCE_SETTERS__", (n) => Nt = n), yu = t("__VUE_SSR_SETTERS__", (n) => br = n);
}
const Mr = (e) => {
  const t = Nt;
  return _o(e), e.scope.on(), () => {
    e.scope.off(), _o(t);
  };
}, hc = () => {
  Nt && Nt.scope.off(), _o(null);
};
function Mv(e) {
  return e.vnode.shapeFlag & 4;
}
let br = false;
function sb(e, t = false, n = false) {
  t && yu(t);
  const { props: l, children: a } = e.vnode, r = Mv(e);
  B0(e, l, r, t), z0(e, a, n);
  const o = r ? db(e, t) : void 0;
  return t && yu(false), o;
}
function db(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, T0);
  const { setup: l } = n;
  if (l) {
    yl();
    const a = e.setupContext = l.length > 1 ? vb(e) : null, r = Mr(e), o = Tr(l, e, 0, [e.props, a]), i = Cf(o);
    if (pl(), r(), (i || e.sp) && !ca(e) && av(e), i) {
      if (o.then(hc, hc), t) return o.then((u) => {
        gc(e, u);
      }).catch((u) => {
        Uo(u, e, 0);
      });
      e.asyncDep = o;
    } else gc(e, o);
  } else Ev(e);
}
function gc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = Nf(t)), Ev(e);
}
function Ev(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || On);
  {
    const a = Mr(e);
    yl();
    try {
      M0(e);
    } finally {
      pl(), a();
    }
  }
}
const fb = { get(e, t) {
  return Kt(e, "get", ""), e[t];
} };
function vb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, fb), slots: e.slots, emit: e.emit, expose: t };
}
function Jo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nf(jo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in lr) return lr[n](e);
  }, has(t, n) {
    return n in t || n in lr;
  } })) : e.proxy;
}
function pu(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const v = (e, t) => u0(e, t, br);
function d(e, t, n) {
  const l = arguments.length;
  return l === 2 ? Et(t) && !je(t) ? gr(t) ? Je(e, null, [t]) : Je(e, t) : Je(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && gr(n) && (n = [n]), Je(e, t, n));
}
const hb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _u;
const bc = typeof window < "u" && window.trustedTypes;
if (bc) try {
  _u = bc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const $v = _u ? (e) => _u.createHTML(e) : (e) => e, gb = "http://www.w3.org/2000/svg", bb = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, yc = Qn && Qn.createElement("template"), yb = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const a = t === "svg" ? Qn.createElementNS(gb, e) : t === "mathml" ? Qn.createElementNS(bb, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
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
    yc.innerHTML = $v(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = yc.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, nl = "transition", La = "animation", pa = Symbol("_vtc"), Av = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Rv = zt({}, ev, Av), pb = (e) => (e.displayName = "Transition", e.props = Rv, e), Ot = pb((e, { slots: t }) => d(b0, Pv(e), t)), kl = (e, t = []) => {
  je(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, pc = (e) => e ? je(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Pv(e) {
  const t = {};
  for (const T in e) T in Av || (t[T] = e[T]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = r, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = _b(a), _ = g && g[0], w = g && g[1], { onBeforeEnter: S, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: x, onBeforeAppear: A = S, onAppear: k = p, onAppearCancelled: O = y } = t, P = (T, $, q, D) => {
    T._enterCancelled = D, ol(T, $ ? s : i), ol(T, $ ? c : o), q && q();
  }, L = (T, $) => {
    T._isLeaving = false, ol(T, f), ol(T, m), ol(T, h), $ && $();
  }, I = (T) => ($, q) => {
    const D = T ? k : p, N = () => P($, T, q);
    kl(D, [$, N]), _c(() => {
      ol($, T ? u : r), Rn($, T ? s : i), pc(D) || wc($, l, _, N);
    });
  };
  return zt(t, { onBeforeEnter(T) {
    kl(S, [T]), Rn(T, r), Rn(T, o);
  }, onBeforeAppear(T) {
    kl(A, [T]), Rn(T, u), Rn(T, c);
  }, onEnter: I(false), onAppear: I(true), onLeave(T, $) {
    T._isLeaving = true;
    const q = () => L(T, $);
    Rn(T, f), T._enterCancelled ? (Rn(T, h), wu()) : (wu(), Rn(T, h)), _c(() => {
      T._isLeaving && (ol(T, f), Rn(T, m), pc(b) || wc(T, l, w, q));
    }), kl(b, [T, q]);
  }, onEnterCancelled(T) {
    P(T, false, void 0, true), kl(y, [T]);
  }, onAppearCancelled(T) {
    P(T, true, void 0, true), kl(O, [T]);
  }, onLeaveCancelled(T) {
    L(T), kl(x, [T]);
  } });
}
function _b(e) {
  if (e == null) return null;
  if (Et(e)) return [qi(e.enter), qi(e.leave)];
  {
    const t = qi(e);
    return [t, t];
  }
}
function qi(e) {
  return Ag(e);
}
function Rn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[pa] || (e[pa] = /* @__PURE__ */ new Set())).add(t);
}
function ol(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[pa];
  n && (n.delete(t), n.size || (e[pa] = void 0));
}
function _c(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wb = 0;
function wc(e, t, n, l) {
  const a = e._endId = ++wb, r = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: i, propCount: u } = Lv(e, t);
  if (!o) return l();
  const c = o + "end";
  let s = 0;
  const f = () => {
    e.removeEventListener(c, h), r();
  }, h = (m) => {
    m.target === e && ++s >= u && f();
  };
  setTimeout(() => {
    s < u && f();
  }, i + 1), e.addEventListener(c, h);
}
function Lv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), a = l(`${nl}Delay`), r = l(`${nl}Duration`), o = Sc(a, r), i = l(`${La}Delay`), u = l(`${La}Duration`), c = Sc(i, u);
  let s = null, f = 0, h = 0;
  t === nl ? o > 0 && (s = nl, f = o, h = r.length) : t === La ? c > 0 && (s = La, f = c, h = u.length) : (f = Math.max(o, c), s = f > 0 ? o > c ? nl : La : null, h = s ? s === nl ? r.length : u.length : 0);
  const m = s === nl && /\b(transform|all)(,|$)/.test(l(`${nl}Property`).toString());
  return { type: s, timeout: f, propCount: h, hasTransform: m };
}
function Sc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => xc(n) + xc(e[l])));
}
function xc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wu() {
  return document.body.offsetHeight;
}
function Sb(e, t, n) {
  const l = e[pa];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wo = Symbol("_vod"), Bv = Symbol("_vsh"), Ov = { beforeMount(e, { value: t }, { transition: n }) {
  e[wo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ba(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: l }) {
  !t != !n && (l ? t ? (l.beforeEnter(e), Ba(e, true), l.enter(e)) : l.leave(e, () => {
    Ba(e, false);
  }) : Ba(e, t));
}, beforeUnmount(e, { value: t }) {
  Ba(e, t);
} };
function Ba(e, t) {
  e.style.display = t ? e[wo] : "none", e[Bv] = !t;
}
const xb = Symbol(""), Cb = /(^|;)\s*display\s*:/;
function kb(e, t, n) {
  const l = e.style, a = Rt(n);
  let r = false;
  if (n && !a) {
    if (t) if (Rt(t)) for (const o of t.split(";")) {
      const i = o.slice(0, o.indexOf(":")).trim();
      n[i] == null && lo(l, i, "");
    }
    else for (const o in t) n[o] == null && lo(l, o, "");
    for (const o in n) o === "display" && (r = true), lo(l, o, n[o]);
  } else if (a) {
    if (t !== n) {
      const o = l[xb];
      o && (n += ";" + o), l.cssText = n, r = Cb.test(n);
    }
  } else t && e.removeAttribute("style");
  wo in e && (e[wo] = r ? l.display : "", e[Bv] && (l.display = "none"));
}
const Cc = /\s*!important$/;
function lo(e, t, n) {
  if (je(n)) n.forEach((l) => lo(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = qb(e, t);
    Cc.test(n) ? e.setProperty(Ul(l), n.replace(Cc, ""), "important") : e[l] = n;
  }
}
const kc = ["Webkit", "Moz", "ms"], Ti = {};
function qb(e, t) {
  const n = Ti[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Ti[t] = l;
  l = No(l);
  for (let a = 0; a < kc.length; a++) {
    const r = kc[a] + l;
    if (r in e) return Ti[t] = r;
  }
  return t;
}
const qc = "http://www.w3.org/1999/xlink";
function Tc(e, t, n, l, a, r = Fg(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qc, t.slice(6, t.length)) : e.setAttributeNS(qc, t, n) : n == null || r && !qf(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : ka(n) ? String(n) : n);
}
function Mc(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $v(n) : n);
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
    i === "boolean" ? n = qf(n) : n == null && i === "string" ? (n = "", o = true) : i === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Tb(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Mb(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Ec = Symbol("_vei");
function Eb(e, t, n, l, a = null) {
  const r = e[Ec] || (e[Ec] = {}), o = r[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = $b(t);
    if (l) {
      const c = r[t] = Pb(l, a);
      Tb(e, i, c, u);
    } else o && (Mb(e, i, o, u), r[t] = void 0);
  }
}
const $c = /(?:Once|Passive|Capture)$/;
function $b(e) {
  let t;
  if ($c.test(e)) {
    t = {};
    let l;
    for (; l = e.match($c); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Ul(e.slice(2)), t];
}
let Mi = 0;
const Ab = Promise.resolve(), Rb = () => Mi || (Ab.then(() => Mi = 0), Mi = Date.now());
function Pb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(Lb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = Rb(), n;
}
function Lb(e, t) {
  if (je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const Ac = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bb = (e, t, n, l, a, r) => {
  const o = a === "svg";
  t === "class" ? Sb(e, l, o) : t === "style" ? kb(e, n, l) : Do(t) ? Ku(t) || Eb(e, t, n, l, r) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Ob(e, t, l, o)) ? (Mc(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Tc(e, t, l, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Rt(l)) ? Mc(e, bn(t), l, r, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Tc(e, t, l, o));
};
function Ob(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Ac(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return Ac(t) && Rt(n) ? false : t in e;
}
const Fv = /* @__PURE__ */ new WeakMap(), Vv = /* @__PURE__ */ new WeakMap(), So = Symbol("_moveCb"), Rc = Symbol("_enterCb"), Fb = (e) => (delete e.props.mode, e), Vb = Fb({ name: "TransitionGroup", props: zt({}, Rv, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Se(), l = Jf();
  let a, r;
  return Yo(() => {
    if (!a.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Nb(a[0].el, n.vnode.el, o)) return;
    a.forEach(Ib), a.forEach(Db);
    const i = a.filter(Hb);
    wu(), i.forEach((u) => {
      const c = u.el, s = c.style;
      Rn(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const f = c[So] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", f), c[So] = null, ol(c, o));
      };
      c.addEventListener("transitionend", f);
    });
  }), () => {
    const o = Ye(e), i = Pv(o);
    let u = o.tag || rn;
    if (a = [], r) for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.el && s.el instanceof Element && (a.push(s), bl(s, mr(s, i, l, n)), Fv.set(s, s.el.getBoundingClientRect()));
    }
    r = t.default ? us(t.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.key != null && bl(s, mr(s, i, l, n));
    }
    return Je(u, null, r);
  };
} }), zb = Vb;
function Ib(e) {
  const t = e.el;
  t[So] && t[So](), t[Rc] && t[Rc]();
}
function Db(e) {
  Vv.set(e, e.el.getBoundingClientRect());
}
function Hb(e) {
  const t = Fv.get(e), n = Vv.get(e), l = t.left - n.left, a = t.top - n.top;
  if (l || a) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${l}px,${a}px)`, r.transitionDuration = "0s", e;
  }
}
function Nb(e, t, n) {
  const l = e.cloneNode(), a = e[pa];
  a && a.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(l);
  const { hasTransform: o } = Lv(l);
  return r.removeChild(l), o;
}
const jb = zt({ patchProp: Bb }, yb);
let Pc;
function Ub() {
  return Pc || (Pc = H0(jb));
}
const zv = (...e) => {
  const t = Ub().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const a = Kb(l);
    if (!a) return;
    const r = t._component;
    !Qe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, false, Qb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
};
function Qb(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Kb(e) {
  return Rt(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ei = null;
function vs() {
  return Ei !== null ? Ei : Ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (vs().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (vs().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (vs().__QUASAR_SSR_PWA__ = false);
function Ft(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function Iv(e, t) {
  for (const n in t) Ft(e, n, t[n]);
  return e;
}
var nn = U(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), Su;
function Wb(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || "" };
}
function Yb(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var Dv = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Gb(e) {
  const t = e.toLowerCase(), n = Yb(t), l = Wb(t, n), a = { mobile: false, desktop: false, cordova: false, capacitor: false, nativeMobile: false, electron: false, bex: false, linux: false, mac: false, win: false, cros: false, chrome: false, firefox: false, opera: false, safari: false, vivaldi: false, edge: false, edgeChromium: false, ie: false, webkit: false, android: false, ios: false, ipad: false, iphone: false, ipod: false, kindle: false, winphone: false, blackberry: false, playbook: false, silk: false };
  l.browser && (a[l.browser] = true, a.version = l.version, a.versionNumber = parseInt(l.version, 10)), l.platform && (a[l.platform] = true);
  const r = a.android || a.ios || a.bb || a.blackberry || a.ipad || a.iphone || a.ipod || a.kindle || a.playbook || a.silk || a["windows phone"];
  if (r === true || t.indexOf("mobile") !== -1 ? a.mobile = true : a.desktop = true, a["windows phone"] && (a.winphone = true, delete a["windows phone"]), a.edga || a.edgios || a.edg ? (a.edge = true, l.browser = "edge") : a.crios ? (a.chrome = true, l.browser = "chrome") : a.fxios && (a.firefox = true, l.browser = "firefox"), (a.ipod || a.ipad || a.iphone) && (a.ios = true), a.vivaldi && (l.browser = "vivaldi", a.vivaldi = true), (a.chrome || a.opr || a.safari || a.vivaldi || a.mobile === true && a.ios !== true && r !== true) && (a.webkit = true), a.opr && (l.browser = "opera", a.opera = true), a.safari && (a.blackberry || a.bb ? (l.browser = "blackberry", a.blackberry = true) : a.playbook ? (l.browser = "playbook", a.playbook = true) : a.android ? (l.browser = "android", a.android = true) : a.kindle ? (l.browser = "kindle", a.kindle = true) : a.silk && (l.browser = "silk", a.silk = true)), a.name = l.browser, a.platform = l.platform, t.indexOf("electron") !== -1) a.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1) a.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), nn.value === true && (Su = { is: { ...a } }), Dv === true && a.mac === true && (a.desktop === true && a.safari === true || a.nativeMobile === true && a.android !== true && a.ios !== true && a.ipad !== true)) {
      delete a.mac, delete a.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(a, { mobile: true, ios: true, platform: o, [o]: true });
    }
    a.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete a.desktop, a.mobile = true);
  }
  return a;
}
var Lc = navigator.userAgent || navigator.vendor || window.opera, Xb = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Lc, is: Gb(Lc), has: { touch: Dv }, within: { iframe: window.self !== window.top } }, xu = { install(e) {
  const { $q: t } = e;
  nn.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, ze), nn.value = false;
  }), t.platform = Bn(this)) : t.platform = this;
} };
{
  let e;
  Ft(ze.has, "webStorage", () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(xu, ze), nn.value === true && (Object.assign(xu, Su, Xb), Su = null);
}
var Hv = xu;
function ve(e) {
  return jo(/* @__PURE__ */ qa(e));
}
function An(e) {
  return jo(e);
}
var wl = (e, t) => {
  const n = Bn(e);
  for (const l in e) Ft(t, l, () => n[l], (a) => {
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
function ei(e) {
  return e.button === 0;
}
function en(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function Zb(e) {
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
function Ne(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function va(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true) return;
  const n = t === true ? (l) => {
    l.__dragPrevented = true, l.addEventListener("dragstart", Vt, dt.notPassiveCapture);
  } : (l) => {
    delete l.__dragPrevented, l.removeEventListener("dragstart", Vt, dt.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function Ct(e, t, n) {
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
function Ma(e, t = 250, n) {
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
var $i = ["sm", "md", "lg", "xl"], { passive: Bc } = dt, Jb = wl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
  var _a2;
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  const { visualViewport: n } = window, l = n || window, a = document.scrollingElement || document.documentElement, r = n === void 0 || ze.is.mobile === true ? () => [Math.max(window.innerWidth, a.clientWidth), Math.max(window.innerHeight, a.clientHeight)] : () => [n.width * n.scale + window.innerWidth - a.clientWidth, n.height * n.scale + window.innerHeight - a.clientHeight], o = ((_a2 = e.config.screen) == null ? void 0 : _a2.bodyClasses) === true;
  this.__update = (f) => {
    const [h, m] = r();
    if (m !== this.height && (this.height = m), h !== this.width) this.width = h;
    else if (f !== true) return;
    let g = this.sizes;
    this.gt.xs = h >= g.sm, this.gt.sm = h >= g.md, this.gt.md = h >= g.lg, this.gt.lg = h >= g.xl, this.lt.sm = h < g.sm, this.lt.md = h < g.md, this.lt.lg = h < g.lg, this.lt.xl = h < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, g = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", g !== this.name && (o === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g);
  };
  let i, u = {}, c = 16;
  this.setSizes = (f) => {
    $i.forEach((h) => {
      f[h] !== void 0 && (u[h] = f[h]);
    });
  }, this.setDebounce = (f) => {
    c = f;
  };
  const s = () => {
    const f = getComputedStyle(document.body);
    f.getPropertyValue("--q-size-sm") && $i.forEach((h) => {
      this.sizes[h] = parseInt(f.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      $i.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && l.removeEventListener("resize", i, Bc), i = h > 0 ? Ma(this.__update, h) : this.__update, l.addEventListener("resize", i, Bc);
    }, this.setDebounce(c), Object.keys(u).length !== 0 ? (this.setSizes(u), u = void 0) : this.__update(), o === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  nn.value === true ? t.push(s) : s();
} }), Ut = wl({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Ut.mode = e, e === "auto" ? (Ut.__media === void 0 && (Ut.__media = window.matchMedia("(prefers-color-scheme: dark)"), Ut.__updateMedia = () => {
    Ut.set("auto");
  }, Ut.__media.addListener(Ut.__updateMedia)), e = Ut.__media.matches) : Ut.__media !== void 0 && (Ut.__media.removeListener(Ut.__updateMedia), Ut.__media = void 0), Ut.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Ut.set(Ut.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  const { dark: n } = e.config;
  e.dark = this, this.__installed !== true && this.set(n !== void 0 ? n : false);
} }), Nv = Ut;
function ey(e, t, n = document.body) {
  if (typeof e != "string") throw new TypeError("Expected a string as propName");
  if (typeof t != "string") throw new TypeError("Expected a string as value");
  if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
  n.style.setProperty(`--q-${e}`, t);
}
var jv = false;
function ty(e) {
  jv = e.isComposing === true;
}
function Ql(e) {
  return jv === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function yn(e, t) {
  return Ql(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function Uv(e) {
  if (e.ios === true) return "ios";
  if (e.android === true) return "android";
}
function ny({ is: e, has: t, within: n }, l) {
  const a = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    const r = Uv(e);
    r !== void 0 && a.push("platform-" + r);
  }
  if (e.nativeMobile === true) {
    const r = e.nativeMobileWrapper;
    a.push(r), a.push("native-mobile"), e.ios === true && (l[r] === void 0 || l[r].iosStatusBarPadding !== false) && a.push("q-ios-padding");
  } else e.electron === true ? a.push("electron") : e.bex === true && a.push("bex");
  return n.iframe === true && a.push("within-iframe"), a;
}
function ly() {
  const { is: e } = ze, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop");
    else if (e.mobile === true) {
      n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
      const a = Uv(e);
      a !== void 0 && n.add(`platform-${a}`);
    }
  }
  ze.has.touch === true && (n.delete("no-touch"), n.add("touch")), ze.within.iframe === true && n.add("within-iframe");
  const l = Array.from(n).join(" ");
  t !== l && (document.body.className = l);
}
function ay(e) {
  for (const t in e) ey(t, e[t]);
}
var ry = { install(e) {
  if (this.__installed !== true) {
    if (nn.value === true) ly();
    else {
      const { $q: t } = e;
      t.config.brand !== void 0 && ay(t.config.brand);
      const n = ny(ze, t.config);
      document.body.classList.add.apply(document.body.classList, n);
    }
    ze.is.ios === true && document.body.addEventListener("touchstart", St), window.addEventListener("keydown", ty, true);
  }
} }, Qv = () => true;
function oy(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function iy(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function uy(e) {
  if (e.backButtonExit === false) return () => false;
  if (e.backButtonExit === "*") return Qv;
  const t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(oy).map(iy)), () => t.includes(window.location.hash);
}
var yr = { __history: [], add: St, remove: St, install({ $q: e }) {
  if (this.__installed === true) return;
  const { cordova: t, capacitor: n } = ze.is;
  if (t !== true && n !== true) return;
  const l = e.config[t === true ? "cordova" : "capacitor"];
  if ((l == null ? void 0 : l.backButton) === false || n === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
  this.add = (o) => {
    o.condition === void 0 && (o.condition = Qv), this.__history.push(o);
  }, this.remove = (o) => {
    const i = this.__history.indexOf(o);
    i >= 0 && this.__history.splice(i, 1);
  };
  const a = uy(Object.assign({ backButtonExit: true }, l)), r = () => {
    if (this.__history.length) {
      const o = this.__history[this.__history.length - 1];
      o.condition() === true && (this.__history.pop(), o.handler());
    } else a() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", r, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", r);
} }, Cu = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Oc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Al = wl({ __qLang: {} }, { getLocale: Oc, set(e = Cu, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Oc };
  {
    if (n.set = Al.set, Al.__langConfig === void 0 || Al.__langConfig.noHtmlAttrs !== true) {
      const l = document.documentElement;
      l.setAttribute("dir", n.rtl === true ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
    }
    Object.assign(Al.__qLang, n);
  }
}, install({ $q: e, lang: t, ssrContext: n }) {
  e.lang = Al.__qLang, Al.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set" && a !== "getLocale");
  } }), this.set(t || Cu));
} }), ti = Al, sy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, ku = wl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = ku.set, Object.assign(ku.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ft(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set");
  } }), this.set(t || sy));
} }), Kv = ku, Wv = "_q_", Yv = "_q_t_", Gv = "_q_s_", Kl = "_q_l_", Xv = "_q_pc_", Zv = "_q_f_", Jv = "_q_fo_", em = "_q_tabs_", tm = "_q_u_";
function ot() {
}
var xo = {}, nm = false;
function cy() {
  nm = true;
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
function At(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function qu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function dy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function pr(e) {
  return typeof e == "number" && isFinite(e);
}
var Fc = [Hv, ry, Nv, Jb, yr, ti, Kv];
function ni(e, t) {
  const n = zv(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...a } = t._context;
  return Object.assign(n._context, a), n;
}
function Vc(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function fy(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(Wv, n.$q), Vc(n, Fc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    At(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    At(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && Vc(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && Fc.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
    n.onSSRHydrated.forEach((l) => {
      l();
    }), n.$q.onSSRHydrated = () => {
    };
  });
}
var vy = function(e, t = {}) {
  const n = { version: "2.18.1" };
  nm === false ? (t.config !== void 0 && Object.assign(xo, t.config), n.config = { ...xo }, cy()) : n.config = t.config || {}, fy(e, t, { parentApp: e, $q: n, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
}, zc = ["B", "KB", "MB", "GB", "TB", "PB"];
function Tu(e, t = 1) {
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
var ms = XMLHttpRequest, lm = ms.prototype.open, my = ["top", "right", "bottom", "left"], ko = [], rr = 0;
function hy({ p: e, pos: t, active: n, horiz: l, reverse: a, dir: r }) {
  let o = 1, i = 1;
  return l === true ? (a === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (a === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function gy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function by(e) {
  rr++, ko.push(e), !(rr > 1) && (ms.prototype.open = function(t, n) {
    const l = [], a = () => {
      ko.forEach((o) => {
        (o.hijackFilter.value === null || o.hijackFilter.value(n) === true) && (o.start(), l.push(o.stop));
      });
    }, r = () => {
      l.forEach((o) => {
        o();
      });
    };
    this.addEventListener("loadstart", a, { once: true }), this.addEventListener("loadend", r, { once: true }), lm.apply(this, arguments);
  });
}
function yy(e) {
  ko = ko.filter((t) => t.start !== e), rr = Math.max(0, rr - 1), rr === 0 && (ms.prototype.open = lm);
}
var py = ve({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => my.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = U(0), a = U(false), r = U(true);
  let o = 0, i = null, u;
  const c = v(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === true ? "" : " no-transition")), s = v(() => e.position === "top" || e.position === "bottom"), f = v(() => s.value === true ? "height" : "width"), h = v(() => {
    const y = a.value, b = hy({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[f.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = v(() => a.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? S() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, r.value = true, y > 0 && S();
    }, a._value === true ? 500 : 1), a._value !== true && (a.value = true, r.value = false), o);
  }
  function _(y) {
    return o > 0 && (l.value = gy(l.value, y)), o;
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
  function S() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, _(), S();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, by({ start: g, stop: w, hijackFilter: v(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && yy(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Mu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, Jn = { size: String };
function el(e, t = Mu) {
  return v(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
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
function kt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function hs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, a, r) {
  t.key = l + a;
  const o = d(e, t, n);
  return a === true ? sn(o, r()) : o;
}
var Ic = "0 0 24 24", Ai = (e) => e, Ri = (e) => `ionicons ${e}`, am = { "mdi-": (e) => `mdi ${e}`, "icon-": Ai, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": Ri, "ion-ios": Ri, "ion-logo": Ri, "iconfont ": Ai, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Ai }, rm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, om = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, _y = new RegExp("^(" + Object.keys(am).join("|") + ")"), wy = new RegExp("^(" + Object.keys(rm).join("|") + ")"), Dc = new RegExp("^(" + Object.keys(om).join("|") + ")"), Sy = /^[Mm]\s?[-+]?\.?\d/, xy = /^img:/, Cy = /^svguse:/, ky = /^ion-/, qy = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = ve({ name: "QIcon", props: { ...Jn, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = v(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), r = v(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Sy.test(i) === true) {
      const [s, f = Ic] = i.split("|");
      return { svg: true, viewBox: f, nodes: s.split("&&").map((h) => {
        const [m, g, _] = h.split("@@");
        return d("path", { style: g, d: m, transform: _ });
      }) };
    }
    if (xy.test(i) === true) return { img: true, src: i.substring(4) };
    if (Cy.test(i) === true) {
      const [s, f = Ic] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: f };
    }
    let u = " ";
    const c = i.match(_y);
    if (c !== null) o = am[c[1]](i);
    else if (qy.test(i) === true) o = i;
    else if (ky.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Dc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Dc);
      s !== null && (i = i.substring(6), o += om[s[1]]), u = i;
    } else {
      o = "notranslate material-icons";
      const s = i.match(wy);
      s !== null && (i = i.substring(2), o += rm[s[1]]), u = i;
    }
    return { cls: o, content: u };
  });
  return () => {
    const o = { class: a.value, style: l.value, "aria-hidden": "true" };
    return r.value.none === true ? d(e.tag, o, Pe(t.default)) : r.value.img === true ? d(e.tag, o, kt(t.default, [d("img", { src: r.value.src })])) : r.value.svg === true ? d(e.tag, o, kt(t.default, [d("svg", { viewBox: r.value.viewBox || "0 0 24 24" }, r.value.nodes)])) : r.value.svguse === true ? d(e.tag, o, kt(t.default, [d("svg", { viewBox: r.value.viewBox }, [d("use", { "xlink:href": r.value.src })])])) : (r.value.cls !== void 0 && (o.class += " " + r.value.cls), d(e.tag, o, kt(t.default, [r.value.content])));
  };
} }), im = ve({ name: "QAvatar", props: { ...Jn, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const n = el(e), l = v(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), a = v(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const r = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, hs(t.default, r))]);
  };
} }), Ty = ["top", "middle", "bottom"];
ve({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Ty.includes(e) } }, setup(e, { slots: t }) {
  const n = v(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = v(() => {
    const a = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (a !== void 0 ? ` text-${a}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: l.value, style: n.value, role: "status", "aria-label": e.label }, kt(t.default, e.label !== void 0 ? [e.label] : []));
} });
var nt = { dark: { type: Boolean, default: null } };
function lt(e, t) {
  return v(() => e.dark === null ? t.dark.isActive : e.dark);
}
ve({ name: "QBanner", props: { ...nt, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (l.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), r = v(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    const o = [d("div", { class: "q-banner__avatar col-auto row items-center self-start" }, Pe(t.avatar)), d("div", { class: "q-banner__content col text-body2" }, Pe(t.default))], i = Pe(t.action);
    return i !== void 0 && o.push(d("div", { class: r.value }, i)), d("div", { class: a.value + (e.inlineActions === false && i !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, o);
  };
} });
ve({ name: "QBar", props: { ...nt, dense: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${l.value === true ? "dark" : "light"}`);
  return () => d("div", { class: a.value, role: "toolbar" }, Pe(t.default));
} });
var um = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, My = Object.keys(um), gs = { align: { type: String, validator: (e) => My.includes(e) } };
function bs(e) {
  return v(() => {
    const t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${um[t]}`;
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
function sm(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((n) => {
    sm(e, n);
  }) : e.add(t);
}
function ys(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    sm(t, n);
  }), Array.from(t);
}
function ps(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function hl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Ey = ["", true];
ve({ name: "QBreadcrumbs", props: { ...gs, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = bs(e), l = v(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), a = v(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = v(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = ys(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((f) => {
      var _a2;
      return ((_a2 = f.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((f) => {
      var _a2;
      if (((_a2 = f.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl") {
        const h = i < c, m = f.props !== null && Ey.includes(f.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? r.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [f])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + a.value }, s()));
      } else u.push(f);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function Hc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function Nc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function $y(e, t) {
  for (const n in t) {
    const l = t[n], a = e[n];
    if (typeof l == "string") {
      if (l !== a) return false;
    } else if (Array.isArray(a) === false || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function jc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Ay(e, t) {
  return Array.isArray(e) === true ? jc(e, t) : Array.isArray(t) === true ? jc(t, e) : e === t;
}
function Ry(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Ay(e[n], t[n]) === false) return false;
  return true;
}
var cm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, $r = { ...cm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function li({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se(), { props: l, proxy: a, emit: r } = n, o = ps(n), i = v(() => l.disable !== true && l.href !== void 0), u = v(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = v(() => u.value === true ? p(l.to) : null), s = v(() => c.value !== null), f = v(() => i.value === true || s.value === true), h = v(() => l.type === "a" || f.value === true ? "a" : l.tag || e || "div"), m = v(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = v(() => {
    if (s.value === false) return -1;
    const { matched: x } = c.value, { length: A } = x, k = x[A - 1];
    if (k === void 0) return -1;
    const O = a.$route.matched;
    if (O.length === 0) return -1;
    const P = O.findIndex(Nc.bind(null, k));
    if (P !== -1) return P;
    const L = Hc(x[A - 2]);
    return A > 1 && Hc(k) === L && O[O.length - 1].path !== L ? O.findIndex(Nc.bind(null, x[A - 2])) : P;
  }), _ = v(() => s.value === true && g.value !== -1 && $y(a.$route.params, c.value.params)), w = v(() => _.value === true && g.value === a.$route.matched.length - 1 && Ry(a.$route.params, c.value.params)), S = v(() => s.value === true ? w.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : _.value === true ? ` ${l.activeClass}` : "" : "");
  function p(x) {
    try {
      return a.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function y(x, { returnRouterError: A, to: k = l.to, replace: O = l.replace } = {}) {
    if (l.disable === true) return x.preventDefault(), Promise.resolve(false);
    if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    x.preventDefault();
    const P = a.$router[O === true ? "replace" : "push"](k);
    return A === true ? P : P.then(() => {
    }).catch(() => {
    });
  }
  function b(x) {
    if (s.value === true) {
      const A = (k) => y(x, k);
      r("click", x, A), x.defaultPrevented !== true && A();
    } else r("click", x);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: f, linkTag: h, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: S, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
ve({ name: "QBreadcrumbsEl", props: { ...$r, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: a, navigateOnClick: r } = li(), o = v(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + a.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: r })), i = v(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, kt(t.default, u));
  };
} });
var Tt = { size: { type: [String, Number], default: "1em" }, color: String };
function Mt(e) {
  return { cSize: v(() => e.size in Mu ? `${Mu[e.size]}px` : e.size), classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var _n = ve({ name: "QSpinner", props: { ...Tt, thickness: { type: Number, default: 5 } }, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [d("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function qo(e) {
  if (e === window) return { top: 0, left: 0 };
  const { top: t, left: n } = e.getBoundingClientRect();
  return { top: t, left: n };
}
function _a(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Eu(e, t) {
  const n = e.style;
  for (const l in t) n[l] = t[l];
}
function Py(e) {
  if (e == null) return;
  if (typeof e == "string") try {
    return document.querySelector(e) || void 0;
  } catch {
    return;
  }
  const t = De(e);
  if (t) return t.$el || t;
}
function dm(e, t) {
  if (e == null || e.contains(t) === true) return true;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return true;
  return false;
}
function fm(e, t = 250) {
  let n = false, l;
  return function() {
    return n === false && (n = true, setTimeout(() => {
      n = false;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Uc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const a = n.modifiers.color;
  let r = n.modifiers.center;
  r = r === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: f, height: h } = t.getBoundingClientRect(), m = Math.sqrt(f * f + h * h), g = m / 2, _ = `${(f - m) / 2}px`, w = r ? _ : `${u.left - c - g}px`, S = `${(h - m) / 2}px`, p = r ? S : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Eu(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${w},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${a ? " text-" + a : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${S},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Qc(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: a.early === true, stop: a.stop === true, center: a.center === true, color: a.color || l, keyCodes: [].concat(a.keyCodes || 13) };
}
var ai = An({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(a) {
    l.enabled === true && a.qSkipRipple !== true && a.type === (l.modifiers.early === true ? "pointerdown" : "click") && Uc(a, e, l, a.qKeyEvent === true);
  }, keystart: fm((a) => {
    l.enabled === true && a.qSkipRipple !== true && yn(a, l.modifiers.keyCodes) === true && a.type === `key${l.modifiers.early === true ? "down" : "up"}` && Uc(a, e, l, true);
  }, 300) };
  Qc(l, t), e.__qripple = l, Ct(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Qc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Wt(t, "main"), delete e._qripple);
} }), To = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Ly = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, By = ["button", "submit", "reset"], Oy = /[^\s]\/[^\s]/, vm = ["flat", "outline", "push", "unelevated"];
function _s(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function mm(e) {
  const t = _s(e);
  return t !== void 0 ? { [t]: true } : {};
}
var ws = { ...Jn, ...cm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...vm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...gs.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Fy = { ...ws, round: Boolean };
function Vy(e) {
  const t = el(e, Ly), n = bs(e), { hasRouterLink: l, hasLink: a, linkTag: r, linkAttrs: o, navigateOnClick: i } = li({ fallbackTag: "button" }), u = v(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((S) => S in To ? To[S] + "px" : S).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = v(() => e.rounded === true || e.fab === true || e.fabMini === true), s = v(() => e.disable !== true && e.loading !== true), f = v(() => s.value === true ? e.tabindex || 0 : -1), h = v(() => _s(e, "standard")), m = v(() => {
    const w = { tabindex: f.value };
    return a.value === true ? Object.assign(w, o.value) : By.includes(e.type) === true && (w.type = e.type), r.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), l.value !== true && Oy.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = v(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const S = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${S}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = v(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: m, hasLink: a, linkTag: r, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Gl = null, Xl = null, Zl = null, Ze = ve({ name: "QBtn", props: { ...Fy, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { classes: a, style: r, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: f } = Vy(e), h = U(null), m = U(null);
  let g = null, _, w = null;
  const S = v(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = v(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = v(() => ({ center: e.round })), b = v(() => {
    const q = Math.max(0, Math.min(100, e.percentage));
    return q > 0 ? { transition: "transform 0.6s", transform: `translateX(${q - 100}%)` } : {};
  }), x = v(() => {
    if (e.loading === true) return { onMousedown: $, onTouchstart: $, onClick: $, onKeydown: $, onKeyup: $ };
    if (f.value === true) {
      const q = { onClick: k, onKeydown: O, onMousedown: L };
      if (l.$q.platform.has.touch === true) {
        const D = e.onTouchstart !== void 0 ? "" : "Passive";
        q[`onTouchstart${D}`] = P;
      }
      return q;
    }
    return { onClick: Ne };
  }), A = v(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: r.value, ...i.value, ...x.value }));
  function k(q) {
    if (h.value !== null) {
      if (q !== void 0) {
        if (q.defaultPrevented === true) return;
        const D = document.activeElement;
        if (e.type === "submit" && D !== document.body && h.value.contains(D) === false && D.contains(h.value) === false) {
          q.qAvoidFocus !== true && h.value.focus();
          const N = () => {
            var _a2;
            document.removeEventListener("keydown", Ne, true), document.removeEventListener("keyup", N, fn), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", N, fn);
          };
          document.addEventListener("keydown", Ne, true), document.addEventListener("keyup", N, fn), h.value.addEventListener("blur", N, fn);
        }
      }
      s(q);
    }
  }
  function O(q) {
    h.value !== null && (n("keydown", q), yn(q, [13, 32]) === true && Xl !== h.value && (Xl !== null && T(), q.defaultPrevented !== true && (q.qAvoidFocus !== true && h.value.focus(), Xl = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", I, true), h.value.addEventListener("blur", I, fn)), Ne(q)));
  }
  function P(q) {
    h.value !== null && (n("touchstart", q), q.defaultPrevented !== true && (Gl !== h.value && (Gl !== null && T(), Gl = h.value, g = q.target, g.addEventListener("touchcancel", I, fn), g.addEventListener("touchend", I, fn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function L(q) {
    h.value !== null && (q.qSkipRipple = _ === true, n("mousedown", q), q.defaultPrevented !== true && Zl !== h.value && (Zl !== null && T(), Zl = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", I, fn)));
  }
  function I(q) {
    if (h.value !== null && !((q == null ? void 0 : q.type) === "blur" && document.activeElement === h.value)) {
      if ((q == null ? void 0 : q.type) === "keyup") {
        if (Xl === h.value && yn(q, [13, 32]) === true) {
          const D = new MouseEvent("click", q);
          D.qKeyEvent = true, q.defaultPrevented === true && Vt(D), q.cancelBubble === true && wt(D), h.value.dispatchEvent(D), Ne(q), q.qKeyEvent = true;
        }
        n("keyup", q);
      }
      T();
    }
  }
  function T(q) {
    var _a2, _b2;
    const D = m.value;
    q !== true && (Gl === h.value || Zl === h.value) && D !== null && D !== document.activeElement && (D.setAttribute("tabindex", -1), D.focus()), Gl === h.value && (g !== null && (g.removeEventListener("touchcancel", I, fn), g.removeEventListener("touchend", I, fn)), Gl = g = null), Zl === h.value && (document.removeEventListener("mouseup", I, fn), Zl = null), Xl === h.value && (document.removeEventListener("keyup", I, true), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", I, fn), Xl = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function $(q) {
    Ne(q), q.qSkipRipple = true;
  }
  return Ke(() => {
    T(true);
  }), Object.assign(l, { click: (q) => {
    f.value === true && k(q);
  } }), () => {
    let q = [];
    e.icon !== void 0 && q.push(d(et, { name: e.icon, left: e.stack !== true && S.value === true, role: "img" })), S.value === true && q.push(d("span", { class: "block" }, [e.label])), q = kt(t.default, q), e.iconRight !== void 0 && e.round === false && q.push(d(et, { name: e.iconRight, right: e.stack !== true && S.value === true, role: "img" }));
    const D = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && D.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), D.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, q)), e.loading !== null && D.push(d(Ot, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, A.value, D), [[ai, p.value, void 0, y.value]]);
  };
} }), hm = ve({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = v(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((a) => e[a] === true).map((a) => `q-btn-group--${a}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Mn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Hv.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var gm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, bm = { ...gm, contextMenu: Boolean };
function Ss({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
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
    a.hide(m), Vt(m), Xe(() => {
      a.show(m), m.qAnchorHandled = true;
    });
  }, prevent: Vt, mobileTouch(m) {
    if (c.mobileCleanup(m), u(m) !== true) return;
    a.hide(m), o.value.classList.add("non-selectable");
    const g = m.target;
    Ct(c, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [o.value, "contextmenu", "prevent", "notPassive"]]), i = setTimeout(() => {
      i = null, a.show(m), m.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(m) {
    o.value.classList.remove("non-selectable"), i !== null && (clearTimeout(i), i = null), e.value === true && m !== void 0 && Mn();
  } }), n = function(m = l.contextMenu) {
    if (l.noParentEvent === true || o.value === null) return;
    let g;
    m === true ? a.$q.platform.is.mobile === true ? g = [[o.value, "touchstart", "mobileTouch", "passive"]] : g = [[o.value, "mousedown", "hide", "passive"], [o.value, "contextmenu", "contextClick", "notPassive"]] : g = [[o.value, "click", "toggle", "passive"], [o.value, "keyup", "toggleKey", "passive"]], Ct(c, "anchor", g);
  });
  function s() {
    Wt(c, "anchor");
  }
  function f(m) {
    for (o.value = m; o.value.classList.contains("q-anchor--skip"); ) o.value = o.value.parentNode;
    n();
  }
  function h() {
    if (l.target === false || l.target === "" || a.$el.parentNode === null) o.value = null;
    else if (l.target === true) f(a.$el.parentNode);
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
function ym(e, t) {
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
var Ea = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, $a = ["beforeShow", "show", "beforeHide", "hide"];
function Aa({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: l, handleHide: a, processOnMount: r }) {
  const o = Se(), { props: i, emit: u, proxy: c } = o;
  let s;
  function f(p) {
    e.value === true ? g(p) : h(p);
  }
  function h(p) {
    if (i.disable === true || (p == null ? void 0 : p.qAnchorHandled) === true || t !== void 0 && t(p) !== true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", true), s = p, Xe(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && m(p);
  }
  function m(p) {
    e.value !== true && (e.value = true, u("beforeShow", p), l !== void 0 ? l(p) : u("show", p));
  }
  function g(p) {
    if (i.disable === true) return;
    const y = i["onUpdate:modelValue"] !== void 0;
    y === true && (u("update:modelValue", false), s = p, Xe(() => {
      s === p && (s = void 0);
    })), (i.modelValue === null || y === false) && _(p);
  }
  function _(p) {
    e.value !== false && (e.value = false, u("beforeHide", p), a !== void 0 ? a(p) : u("hide", p));
  }
  function w(p) {
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? m : _)(s);
  }
  he(() => i.modelValue, w), n !== void 0 && ps(o) === true && he(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), r === true && ft(() => {
    w(i.modelValue);
  });
  const S = { show: h, hide: g, toggle: f };
  return Object.assign(c, S), S;
}
var Ll = [], _r = [];
function pm(e) {
  _r = _r.filter((t) => t !== e);
}
function zy(e) {
  pm(e), _r.push(e);
}
function Kc(e) {
  pm(e), _r.length === 0 && Ll.length !== 0 && (Ll[Ll.length - 1](), Ll = []);
}
function Ra(e) {
  _r.length === 0 ? e() : Ll.push(e);
}
function Iy(e) {
  Ll = Ll.filter((t) => t !== e);
}
var ma = [], or = [], Dy = 1, il = document.body;
function Ar(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Dy++}` : e, xo.globalNodes !== void 0) {
    const l = xo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return il.appendChild(n), ma.push(n), or.push(t), n;
}
function xs(e) {
  const t = ma.indexOf(e);
  ma.splice(t, 1), or.splice(t, 1), e.remove();
}
function Hy(e) {
  if (e === il) return;
  if (il = e, il === document.body || or.reduce((n, l) => l === "dialog" ? n + 1 : n, 0) < 2) {
    ma.forEach((n) => {
      n.contains(il) === false && il.appendChild(n);
    });
    return;
  }
  const t = or.lastIndexOf("dialog");
  for (let n = 0; n < ma.length; n++) {
    const l = ma[n];
    (n === t || or[n] !== "dialog") && l.contains(il) === false && il.appendChild(l);
  }
}
var ha = [];
function Ny(e) {
  return ha.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function _m(e, t) {
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
function jy(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (n--, e.$options.name === "QMenu") {
        e = _m(e, t);
        continue;
      }
      e.hide(t);
    }
    e = ao(e);
  }
}
var Uy = ve({ name: "QPortal", setup(e, { slots: t }) {
  return () => t.default();
} });
function Qy(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return false;
    e = e.parent;
  }
  return false;
}
function Cs(e, t, n, l) {
  const a = U(false), r = U(false);
  let o = null;
  const i = {}, u = l === "dialog" && Qy(e);
  function c(f) {
    if (f === true) {
      Kc(i), r.value = true;
      return;
    }
    r.value = false, a.value === false && (u === false && o === null && (o = Ar(false, l)), a.value = true, ha.push(e.proxy), zy(i));
  }
  function s(f) {
    if (r.value = false, f !== true) return;
    Kc(i), a.value = false;
    const h = ha.indexOf(e.proxy);
    h !== -1 && ha.splice(h, 1), o !== null && (xs(o), o = null);
  }
  return Go(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ft(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: a, portalIsAccessible: r, renderPortal: () => u === true ? n() : a.value === true ? [d(h0, { to: o }, d(Uy, n))] : void 0 };
}
var Fl = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function ri(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: v(() => {
    const l = `q-transition--${e.transitionShow || t()}`, a = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${a}-leave-from`, leaveActiveClass: `${a}-leave-active`, leaveToClass: `${a}-leave-to` };
  }), transitionStyle: v(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function ga() {
  let e;
  const t = Se();
  function n() {
    e = void 0;
  }
  return Fn(n), Ke(n), { removeTick: n, registerTick(l) {
    e = l, Xe(() => {
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
  return Fn(n), Ke(n), { removeTimeout: n, registerTimeout(l, a) {
    n(), hl(t) === false && (e = setTimeout(() => {
      e = null, l();
    }, a));
  } };
}
var Wl = [Element, String], Ky = [null, document, document.body, document.scrollingElement, document.documentElement];
function Vn(e, t) {
  let n = Py(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Ky.includes(n) ? window : n;
}
function Ir(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function gl(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function oi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function wm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = gl(e);
  if (n <= 0) {
    a !== t && $u(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    $u(e, i), i !== t && wm(e, t, n - o, r);
  });
}
function Sm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = oi(e);
  if (n <= 0) {
    a !== t && Au(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Au(e, i), i !== t && Sm(e, t, n - o, r);
  });
}
function $u(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function Au(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function ba(e, t, n) {
  if (n) {
    wm(e, t, n);
    return;
  }
  $u(e, t);
}
function Pi(e, t, n) {
  if (n) {
    Sm(e, t, n);
    return;
  }
  Au(e, t);
}
var Dr;
function ro() {
  if (Dr !== void 0) return Dr;
  const e = document.createElement("p"), t = document.createElement("div");
  Eu(e, { width: "100%", height: "200px" }), Eu(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), Dr = n - l, Dr;
}
function Wy(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var Vl = [], wa;
function Yy(e) {
  wa = e.keyCode === 27;
}
function Gy() {
  wa === true && (wa = false);
}
function Xy(e) {
  wa === true && (wa = false, yn(e, 27) === true && Vl[Vl.length - 1](e));
}
function xm(e) {
  window[e]("keydown", Yy), window[e]("blur", Gy), window[e]("keyup", Xy), wa = false;
}
function Cm(e) {
  ze.is.desktop === true && (Vl.push(e), Vl.length === 1 && xm("addEventListener"));
}
function Mo(e) {
  const t = Vl.indexOf(e);
  t !== -1 && (Vl.splice(t, 1), Vl.length === 0 && xm("removeEventListener"));
}
var zl = [];
function km(e) {
  zl[zl.length - 1](e);
}
function qm(e) {
  ze.is.desktop === true && (zl.push(e), zl.length === 1 && document.body.addEventListener("focusin", km));
}
function Ru(e) {
  const t = zl.indexOf(e);
  t !== -1 && (zl.splice(t, 1), zl.length === 0 && document.body.removeEventListener("focusin", km));
}
var { notPassiveCapture: Eo } = dt, Il = [];
function $o(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true) return;
  let n = ha.length - 1;
  for (; n >= 0; ) {
    const l = ha[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog") break;
    if (l.props.seamless !== true) return;
    n--;
  }
  for (let l = Il.length - 1; l >= 0; l--) {
    const a = Il[l];
    if ((a.anchorEl.value === null || a.anchorEl.value.contains(t) === false) && (t === document.body || a.innerRef.value !== null && a.innerRef.value.contains(t) === false)) e.qClickOutside = true, a.onClickOutside(e);
    else return;
  }
}
function Tm(e) {
  Il.push(e), Il.length === 1 && (document.addEventListener("mousedown", $o, Eo), document.addEventListener("touchstart", $o, Eo));
}
function Ao(e) {
  const t = Il.findIndex((n) => n === e);
  t !== -1 && (Il.splice(t, 1), Il.length === 0 && (document.removeEventListener("mousedown", $o, Eo), document.removeEventListener("touchstart", $o, Eo)));
}
var Wc, Yc;
function Ro(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Mm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Pu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Pu[`${e}#ltr`] = e, Pu[`${e}#rtl`] = e;
});
function Po(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Pu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function Zy(e, t) {
  let { top: n, left: l, right: a, bottom: r, width: o, height: i } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], r += t[1], a += t[0], o += t[0], i += t[1]), { top: n, bottom: r, height: i, left: l, right: a, width: o, middle: l + (a - l) / 2, center: n + (r - n) / 2 };
}
function Jy(e, t, n) {
  let { top: l, left: a } = e.getBoundingClientRect();
  return l += t.top, a += t.left, n !== void 0 && (l += n[1], a += n[0]), { top: l, bottom: l + 1, height: 1, left: a, right: a + 1, width: 1, middle: a, center: l };
}
function ep(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Gc(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function ks(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      ks(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: a, anchorOrigin: r, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: f } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const A = document.body.style, { offsetLeft: k, offsetTop: O } = window.visualViewport;
    k !== Wc && (A.setProperty("--q-pe-left", k + "px"), Wc = k), O !== Yc && (A.setProperty("--q-pe-top", O + "px"), Yc = O);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? Zy(a, c === true ? [0, 0] : l) : Jy(a, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: f, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: S, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let y = { maxWidth: f, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = ep(S, p);
  let x = Gc(g, b, r, o);
  if (i === void 0 || l === void 0) Li(x, g, b, r, o);
  else {
    const { top: A, left: k } = x;
    Li(x, g, b, r, o);
    let O = false;
    if (x.top !== A) {
      O = true;
      const P = 2 * l[1];
      g.center = g.top -= P, g.bottom -= P + 2;
    }
    if (x.left !== k) {
      O = true;
      const P = 2 * l[0];
      g.middle = g.left -= P, g.right -= P + 2;
    }
    O === true && (x = Gc(g, b, r, o), Li(x, g, b, r, o));
  }
  y = { top: x.top + "px", left: x.left + "px" }, x.maxHeight !== void 0 && (y.maxHeight = x.maxHeight + "px", g.height > x.maxHeight && (y.minHeight = y.maxHeight)), x.maxWidth !== void 0 && (y.maxWidth = x.maxWidth + "px", g.width > x.maxWidth && (y.minWidth = y.maxWidth)), Object.assign(n.style, y), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== h && (n.scrollLeft = h);
}
function Li(e, t, n, l, a) {
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
var ii = ve({ name: "QMenu", inheritAttrs: false, props: { ...bm, ...Ea, ...nt, ...Fl, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Ro }, self: { type: String, validator: Ro }, offset: { type: Array, validator: Mm }, scrollTarget: Wl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...$a, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let a = null, r, o, i;
  const u = Se(), { proxy: c } = u, { $q: s } = c, f = U(null), h = U(false), m = v(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = ga(), { registerTimeout: S } = Xn(), { transitionProps: p, transitionStyle: y } = ri(e), { localScrollTarget: b, changeScrollEvent: x, unconfigureScrollTarget: A } = ym(e, ee), { anchorEl: k, canShow: O } = Ss({ showing: h }), { hide: P } = Aa({ showing: h, canShow: O, handleShow: pe, handleHide: W, hideOnRouteChange: m, processOnMount: true }), { showPortal: L, hidePortal: I, renderPortal: T } = Cs(u, f, J, "menu"), $ = { anchorEl: k, innerRef: f, onClickOutside(F) {
    if (e.persistent !== true && h.value === true) return P(F), (F.type === "touchstart" || F.target.classList.contains("q-dialog__backdrop")) && Ne(F), true;
  } }, q = v(() => Po(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), D = v(() => e.cover === true ? q.value : Po(e.self || "top start", s.lang.rtl)), N = v(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), j = v(() => e.autoClose === true ? { onClick: X } : {}), Y = v(() => h.value === true && e.persistent !== true);
  he(Y, (F) => {
    F === true ? (Cm(B), Tm($)) : (Mo(B), Ao($));
  });
  function le() {
    Ra(() => {
      let F = f.value;
      F && F.contains(document.activeElement) !== true && (F = F.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || F.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || F.querySelector("[autofocus], [data-autofocus]") || F, F.focus({ preventScroll: true }));
    });
  }
  function pe(F) {
    if (a = e.noRefocus === false ? document.activeElement : null, qm(be), L(), ee(), r = void 0, F !== void 0 && (e.touchPosition || e.contextMenu)) {
      const re = en(F);
      if (re.left !== void 0) {
        const { top: we, left: C } = k.value.getBoundingClientRect();
        r = { left: re.left - C, top: re.top - we };
      }
    }
    o === void 0 && (o = he(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, R)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      R(), e.noFocus !== true && le();
    }), S(() => {
      s.platform.is.ios === true && (i = e.autoClose, f.value.click()), R(), L(true), n("show", F);
    }, e.transitionDuration);
  }
  function W(F) {
    w(), I(), M(true), a !== null && (F === void 0 || F.qClickOutside !== true) && ((((F == null ? void 0 : F.type.indexOf("key")) === 0 ? a.closest('[tabindex]:not([tabindex^="-"])') : void 0) || a).focus(), a = null), S(() => {
      I(true), n("hide", F);
    }, e.transitionDuration);
  }
  function M(F) {
    r = void 0, o !== void 0 && (o(), o = void 0), (F === true || h.value === true) && (Ru(be), A(), Ao($), Mo(B)), F !== true && (a = null);
  }
  function ee() {
    (k.value !== null || e.scrollTarget !== void 0) && (b.value = Vn(k.value, e.scrollTarget), x(b.value, R));
  }
  function X(F) {
    i !== true ? (_m(c, F), n("click", F)) : i = false;
  }
  function be(F) {
    Y.value === true && e.noFocus !== true && dm(f.value, F.target) !== true && le();
  }
  function B(F) {
    e.noEscDismiss !== true && (n("escapeKey"), P(F));
  }
  function R() {
    ks({ targetEl: f.value, offset: e.offset, anchorEl: k.value, anchorOrigin: q.value, selfOrigin: D.value, absoluteOffset: r, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function J() {
    return d(Ot, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: f, tabindex: -1, class: ["q-menu q-position-engine scroll" + N.value, l.class], style: [l.style, y.value], ...j.value }, Pe(t.default)) : null);
  }
  return Ke(M), Object.assign(c, { focus: le, updatePosition: R }), T;
} }), Bi, Hr = 0, Ht = new Array(256);
for (let e = 0; e < 256; e++) Ht[e] = (e + 256).toString(16).substring(1);
var tp = (() => {
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
})(), Xc = 4096;
function wr() {
  (Bi === void 0 || Hr + 16 > Xc) && (Hr = 0, Bi = tp(Xc));
  const e = Array.prototype.slice.call(Bi, Hr, Hr += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Ht[e[0]] + Ht[e[1]] + Ht[e[2]] + Ht[e[3]] + "-" + Ht[e[4]] + Ht[e[5]] + "-" + Ht[e[6]] + Ht[e[7]] + "-" + Ht[e[8]] + Ht[e[9]] + "-" + Ht[e[10]] + Ht[e[11]] + Ht[e[12]] + Ht[e[13]] + Ht[e[14]] + Ht[e[15]];
}
function np(e) {
  return e ?? null;
}
function Zc(e, t) {
  return e ?? (t === true ? `f_${wr()}` : null);
}
function ui({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = U(e !== void 0 ? np(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${wr()}`;
    }), e !== void 0 && he(e, (l) => {
      n.value = Zc(l, t);
    }), n;
  }
  return e !== void 0 ? v(() => Zc(e(), t)) : U(`f_${wr()}`);
}
var lp = Object.keys(ws);
function ap(e) {
  return lp.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var rp = ve({ name: "QBtnDropdown", props: { ...ws, ...Fl, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = U(e.modelValue), r = U(null), o = ui(), i = v(() => {
    const b = { "aria-expanded": a.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[a.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = v(() => "q-btn-dropdown__arrow" + (a.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = v(() => mm(e)), s = v(() => ap(e));
  he(() => e.modelValue, (b) => {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2[b ? "show" : "hide"]();
  }), he(() => e.split, y);
  function f(b) {
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
  function S(b) {
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
  return Object.assign(l, { show: p, hide: y, toggle: S }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(ii, { ref: r, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: f, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(hm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), wn = { name: String };
function Rr(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Sl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function qs(e) {
  return v(() => e.name || e.for);
}
ve({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = v(() => e.options.find((h) => h.value === e.modelValue) !== void 0), a = v(() => ({ type: "hidden", name: e.name, value: e.modelValue })), r = Sl(a), o = v(() => mm(e)), i = v(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = v(() => e.options.map((h, m) => {
    const { attrs: g, value: _, slot: w, ...S } = h;
    return { slot: w, props: { key: m, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...S, ...i.value, disable: e.disable === true || S.disable === true, color: _ === e.modelValue ? s(S, "toggleColor") : s(S, "color"), textColor: _ === e.modelValue ? s(S, "toggleTextColor") : s(S, "textColor"), noCaps: s(S, "noCaps") === true, noWrap: s(S, "noWrap") === true, size: s(S, "size"), padding: s(S, "padding"), ripple: s(S, "ripple"), stack: s(S, "stack") === true, stretch: s(S, "stretch") === true, onClick(p) {
      c(_, h, p);
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
    return e.name !== void 0 && e.disable !== true && l.value === true && r(h, "push"), kt(t.default, h);
  }
  return () => d(hm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, f);
} });
var Em = ve({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = v(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: a.value }, Pe(t.default));
} }), Pl = ve({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), op = ve({ name: "QCardActions", props: { ...gs, vertical: Boolean }, setup(e, { slots: t }) {
  const n = bs(e), l = v(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, Pe(t.default));
} }), Ts = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, ip = Object.keys(Ts);
Ts.all = true;
function Lo(e) {
  const t = {};
  for (const n of ip) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Ts : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var up = ["INPUT", "TEXTAREA"];
function Bo(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && up.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function sp(e) {
  const t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((n, l) => {
    const a = parseFloat(n);
    a && (t[l] = a);
  }), t;
}
var cp = An({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
  if (l.mouse !== true && ze.has.touch !== true) return;
  const a = l.mouseCapture === true ? "Capture" : "", r = { handler: t, sensitivity: sp(n), direction: Lo(l), noop: St, mouseStart(o) {
    Bo(o, r) && ei(o) && (Ct(r, "temp", [[document, "mousemove", "move", `notPassive${a}`], [document, "mouseup", "end", "notPassiveCapture"]]), r.start(o, true));
  }, touchStart(o) {
    if (Bo(o, r)) {
      const i = o.target;
      Ct(r, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), r.start(o);
    }
  }, start(o, i) {
    ze.is.firefox === true && va(e, true);
    const u = en(o);
    r.event = { x: u.left, y: u.top, time: Date.now(), mouse: i === true, dir: false };
  }, move(o) {
    if (r.event === void 0) return;
    if (r.event.dir !== false) {
      Ne(o);
      return;
    }
    const i = Date.now() - r.event.time;
    if (i === 0) return;
    const u = en(o), c = u.left - r.event.x, s = Math.abs(c), f = u.top - r.event.y, h = Math.abs(f);
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
    r.direction.vertical === true && s < h && s < 100 && g > r.sensitivity[0] && (r.event.dir = f < 0 ? "up" : "down"), r.direction.horizontal === true && s > h && h < 100 && m > r.sensitivity[0] && (r.event.dir = c < 0 ? "left" : "right"), r.direction.up === true && s < h && f < 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === true && s < h && f > 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === true && s > h && c < 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === true && s > h && c > 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== false ? (Ne(o), r.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (_) => {
      r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), r.handler({ evt: o, touch: r.event.mouse !== true, mouse: r.event.mouse, direction: r.event.dir, duration: i, distance: { x: s, y: h } })) : r.end(o);
  }, end(o) {
    var _a2;
    r.event !== void 0 && (Wt(r, "temp"), ze.is.firefox === true && va(e, false), (_a2 = r.styleCleanup) == null ? void 0 : _a2.call(r, true), o !== void 0 && r.event.dir !== false && Ne(o), r.event = void 0);
  } };
  if (e.__qtouchswipe = r, l.mouse === true) {
    const o = l.mouseCapture === true || l.mousecapture === true ? "Capture" : "";
    Ct(r, "main", [[e, "mousedown", "mouseStart", `passive${o}`]]);
  }
  ze.has.touch === true && Ct(r, "main", [[e, "touchstart", "touchStart", `passive${l.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchswipe;
  n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchswipe;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), ze.is.firefox === true && va(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchswipe);
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
var Ms = { name: { required: true }, disable: Boolean }, Jc = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, Es = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, $s = ["update:modelValue", "beforeTransition", "transition"];
function As() {
  const { props: e, emit: t, proxy: n } = Se(), { getCache: l } = Pr(), { registerTimeout: a } = Xn();
  let r, o;
  const i = U(null), u = { value: null };
  function c(q) {
    const D = e.vertical === true ? "up" : "left";
    O((n.$q.lang.rtl === true ? -1 : 1) * (q.direction === D ? 1 : -1));
  }
  const s = v(() => [[cp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), f = v(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = v(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = v(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = v(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = v(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = v(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  he(() => e.modelValue, (q, D) => {
    const N = b(q) === true ? x(q) : -1;
    o !== true && k(N === -1 ? 0 : N < x(D) ? -1 : 1), u.value !== N && (u.value = N, t("beforeTransition", q, D), a(() => {
      t("transition", q, D);
    }, e.transitionDuration));
  });
  function S() {
    O(1);
  }
  function p() {
    O(-1);
  }
  function y(q) {
    t("update:modelValue", q);
  }
  function b(q) {
    return q != null && q !== "";
  }
  function x(q) {
    return r.findIndex((D) => D.props.name === q && D.props.disable !== "" && D.props.disable !== true);
  }
  function A() {
    return r.filter((q) => q.props.disable !== "" && q.props.disable !== true);
  }
  function k(q) {
    const D = q !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (q === -1 ? f.value : h.value) : null;
    i.value !== D && (i.value = D);
  }
  function O(q, D = u.value) {
    let N = D + q;
    for (; N !== -1 && N < r.length; ) {
      const j = r[N];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== true) {
        k(q), o = true, t("update:modelValue", j.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      N += q;
    }
    e.infinite === true && r.length !== 0 && D !== -1 && D !== r.length && O(q, q === -1 ? r.length : -1);
  }
  function P() {
    const q = x(e.modelValue);
    return u.value !== q && (u.value = q), true;
  }
  function L() {
    const q = b(e.modelValue) === true && P() && r[u.value];
    return e.keepAlive === true ? [d(rv, _.value, [d(w.value === true ? l(g.value, () => ({ ...Jc, name: g.value })) : Jc, { key: g.value, style: m.value }, () => q)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [q])];
  }
  function I() {
    if (r.length !== 0) return e.animated === true ? [d(Ot, { name: i.value }, L)] : L();
  }
  function T(q) {
    return r = ys(Pe(q.default, [])).filter((D) => D.props !== null && D.props.slot === void 0 && b(D.props.name) === true), r.length;
  }
  function $() {
    return r;
  }
  return Object.assign(n, { next: S, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: T, updatePanelIndex: P, getPanelContent: I, getEnabledPanels: A, getPanels: $, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: O, goToPanel: y, nextPanel: S, previousPanel: p };
}
var Oa = 0, Rs = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ps = ["update:fullscreen", "fullscreen"];
function Ls() {
  const e = Se(), { props: t, emit: n, proxy: l } = e;
  let a, r, o;
  const i = U(false);
  ps(e) === true && he(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && s();
  }), he(() => t.fullscreen, (f) => {
    i.value !== f && u();
  }), he(i, (f) => {
    n("update:fullscreen", f), n("fullscreen", f);
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
  return Wo(() => {
    r = document.createElement("span");
  }), ft(() => {
    t.fullscreen === true && c();
  }), Ke(s), Object.assign(l, { toggleFullscreen: u, setFullscreen: c, exitFullscreen: s }), { inFullscreen: i, toggleFullscreen: u };
}
var dp = ["top", "right", "bottom", "left"], fp = ["regular", "flat", "outline", "push", "unelevated"];
ve({ name: "QCarousel", props: { ...nt, ...Es, ...Rs, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => fp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => dp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ps, ...$s], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n);
  let a = null, r;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: f, getEnabledPanels: h, panelIndex: m } = As(), { inFullscreen: g } = Ls(), _ = v(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = v(() => e.vertical === true ? "vertical" : "horizontal"), S = v(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = v(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${S.value}` : "")), y = v(() => {
    const L = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? L.reverse() : L;
  }), b = v(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), x = v(() => e.navigationActiveIcon || b.value), A = v(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  he(() => e.modelValue, () => {
    e.autoplay && k();
  }), he(() => e.autoplay, (L) => {
    L ? k() : a !== null && (clearTimeout(a), a = null);
  });
  function k() {
    const L = pr(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, L >= 0 ? f() : s();
    }, L);
  }
  ft(() => {
    e.autoplay && k();
  }), Ke(() => {
    a !== null && clearTimeout(a);
  });
  function O(L, I) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${L} q-carousel__navigation--${S.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(I))]);
  }
  function P() {
    const L = [];
    if (e.navigation === true) {
      const I = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : ($) => d(Ze, { key: "nav" + $.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${$.active === true ? "" : "in"}active`, ...$.btnProps, onClick: $.onClick }), T = r - 1;
      L.push(O("buttons", ($, q) => {
        const D = $.props.name, N = m.value === q;
        return I({ index: q, maxIndex: T, name: D, active: N, btnProps: { icon: N === true ? x.value : b.value, size: "sm", ...A.value }, onClick: () => {
          c(D);
        } });
      }));
    } else if (e.thumbnails === true) {
      const I = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      L.push(O("thumbnails", (T) => {
        const $ = T.props;
        return d("img", { key: "tmb#" + $.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${$.name === e.modelValue ? "" : "in"}active` + I, src: $.imgSrc || $["img-src"], onClick: () => {
          c($.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && L.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...A.value, onClick: s })])), (e.infinite === true || m.value < r - 1) && L.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...A.value, onClick: f })]))), kt(t.control, L);
  }
  return () => (r = o(t), d("div", { class: p.value, style: _.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(P())));
} });
ve({ name: "QCarouselSlide", props: { ...Ms, imgSrc: String }, setup(e, { slots: t }) {
  const n = v(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => d("div", { class: "q-carousel__slide", style: n.value }, Pe(t.default));
} });
ve({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  const n = v(() => `q-carousel__control absolute absolute-${e.position}`), l = v(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => d("div", { class: n.value, style: l.value }, Pe(t.default));
} });
ve({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  const n = v(() => e.sent === true ? "sent" : "received"), l = v(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), a = v(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), r = v(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), o = v(() => e.size !== void 0 ? `col-${e.size}` : ""), i = v(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function u(s) {
    return t.stamp !== void 0 ? [s, d("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [s, d("div", { class: "q-message-stamp", [i.value.stamp]: e.stamp })] : [s];
  }
  function c(s, f) {
    const h = f === true ? s.length > 1 ? (m) => m : (m) => d("div", [m]) : (m) => d("div", { [i.value.msg]: m });
    return s.map((m, g) => d("div", { key: g, class: a.value }, [d("div", { class: l.value }, u(h(m)))]));
  }
  return () => {
    const s = [];
    t.avatar !== void 0 ? s.push(t.avatar()) : e.avatar !== void 0 && s.push(d("img", { class: `q-message-avatar q-message-avatar--${n.value}`, src: e.avatar, "aria-hidden": "true" }));
    const f = [];
    t.name !== void 0 ? f.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && f.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? f.push(c(ys(t.default()), true)) : e.text !== void 0 && f.push(c(e.text)), s.push(d("div", { class: o.value }, f));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: r.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function $m(e, t) {
  const n = U(null), l = v(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function a(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== true && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: a };
}
var Am = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, Rm = { ...nt, ...Jn, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Pm = ["update:modelValue"];
function Lm(e, t) {
  const { props: n, slots: l, emit: a, proxy: r } = Se(), { $q: o } = r, i = lt(n, o), u = U(null), { refocusTargetEl: c, refocusTarget: s } = $m(n, u), f = el(n, Am), h = v(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = v(() => {
    const T = Ye(n.val);
    return h.value === true ? n.modelValue.findIndex(($) => Ye($) === T) : -1;
  }), g = v(() => h.value === true ? m.value !== -1 : Ye(n.modelValue) === Ye(n.trueValue)), _ = v(() => h.value === true ? m.value === -1 : Ye(n.modelValue) === Ye(n.falseValue)), w = v(() => g.value === false && _.value === false), S = v(() => n.disable === true ? -1 : n.tabindex || 0), p = v(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = v(() => {
    const T = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", $ = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${T}${$}`;
  }), b = v(() => {
    const T = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(T, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), T;
  }), x = Sl(b), A = v(() => {
    const T = { tabindex: S.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (T["aria-disabled"] = "true"), T;
  });
  function k(T) {
    T !== void 0 && (Ne(T), s(T)), n.disable !== true && a("update:modelValue", O(), T);
  }
  function O() {
    if (h.value === true) {
      if (g.value === true) {
        const T = n.modelValue.slice();
        return T.splice(m.value, 1), T;
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
  function P(T) {
    (T.keyCode === 13 || T.keyCode === 32) && Ne(T);
  }
  function L(T) {
    (T.keyCode === 13 || T.keyCode === 32) && k(T);
  }
  const I = t(g, w);
  return Object.assign(r, { toggle: k }), () => {
    const T = I();
    n.disable !== true && x(T, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const $ = [d("div", { class: y.value, style: f.value, "aria-hidden": "true" }, T)];
    c.value !== null && $.push(c.value);
    const q = n.label !== void 0 ? kt(l.default, [n.label]) : Pe(l.default);
    return q !== void 0 && $.push(d("div", { class: `q-${e}__label q-anchor--skip` }, q)), d("div", { ref: u, class: p.value, ...A.value, onClick: k, onKeydown: P, onKeyup: L }, $);
  };
}
var vp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ir = ve({ name: "QCheckbox", props: Rm, emits: Pm, setup(e) {
  const t = vp();
  function n(l, a) {
    const r = v(() => (l.value === true ? e.checkedIcon : a.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: r.value })])] : [t];
  }
  return Lm("checkbox", n);
} }), mp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Bm = ve({ name: "QChip", props: { ...nt, ...Jn, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = el(e, mp), o = v(() => e.selected === true || e.icon !== void 0), i = v(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = v(() => e.iconRemove || l.iconSet.chip.remove), c = v(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = v(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (a.value === true ? " q-chip--dark q-dark" : "");
  }), f = v(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, S = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: w, remove: S };
  });
  function h(w) {
    w.keyCode === 13 && m(w);
  }
  function m(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (Ne(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function _() {
    const w = [];
    c.value === true && w.push(d("div", { class: "q-focus-helper" })), o.value === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const S = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, hs(t.default, S))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...f.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: r.value };
    return c.value === true && Object.assign(w, f.value.chip, { onClick: m, onKeyup: h }), pn("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[ai, e.ripple]]);
  };
} }), Bs = { ...Jn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Lu = 50, Om = 2 * Lu, Fm = Om * Math.PI, hp = Math.round(Fm * 1e3) / 1e3, Vm = ve({ name: "QCircularProgress", props: { ...Bs, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = v(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), r = v(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = v(() => Om / (1 - e.thickness / 2)), i = v(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = v(() => ct(e.value, e.min, e.max)), c = v(() => e.max - e.min), s = v(() => e.thickness / 2 * o.value), f = v(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Fm * m + g;
  });
  function h({ thickness: m, offset: g, color: _, cls: w, rounded: S }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: r.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": hp, "stroke-dashoffset": g, "stroke-linecap": S, cx: o.value, cy: o.value, r: Lu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Lu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: f.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, hs(t.internal, g));
  };
} });
function Oi(e, t, n) {
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
var gp = 0, gn = An({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function l(r, o) {
    n.mouse === true && o === true ? Ne(r) : (n.stop === true && wt(r), n.prevent === true && Vt(r));
  }
  const a = { uid: "qvtp_" + gp++, handler: t, modifiers: n, direction: Lo(n), noop: St, mouseStart(r) {
    Bo(r, a) && ei(r) && (Ct(a, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), a.start(r, true));
  }, touchStart(r) {
    if (Bo(r, a)) {
      const o = r.target;
      Ct(a, "temp", [[o, "touchmove", "move", "notPassiveCapture"], [o, "touchcancel", "end", "passiveCapture"], [o, "touchend", "end", "passiveCapture"]]), a.start(r);
    }
  }, start(r, o) {
    if (ze.is.firefox === true && va(e, true), a.lastEvt = r, o === true || n.stop === true) {
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
      const { payload: m, synthetic: g } = Oi(r, a, false);
      m !== void 0 && (a.handler(m) === false ? a.end(r) : (a.styleCleanup === void 0 && a.event.isFirst === true && s(), a.event.lastX = m.position.left, a.event.lastY = m.position.top, a.event.lastDir = g === true ? void 0 : m.direction, a.event.isFirst = false));
      return;
    }
    if (a.direction.all === true || c === true && (a.modifiers.mouseAllDir === true || a.modifiers.mousealldir === true)) {
      s(), a.event.detected = true, a.move(r);
      return;
    }
    const f = Math.abs(i), h = Math.abs(u);
    f !== h && (a.direction.horizontal === true && f > h || a.direction.vertical === true && f < h || a.direction.up === true && f < h && u < 0 || a.direction.down === true && f < h && u > 0 || a.direction.left === true && f > h && i < 0 || a.direction.right === true && f > h && i > 0 ? (a.event.detected = true, a.move(r)) : a.end(r, true));
  }, end(r, o) {
    var _a2;
    if (a.event !== void 0) {
      if (Wt(a, "temp"), ze.is.firefox === true && va(e, false), o === true) (_a2 = a.styleCleanup) == null ? void 0 : _a2.call(a), a.event.detected !== true && a.initialEvent !== void 0 && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
      else if (a.event.detected === true) {
        a.event.isFirst === true && a.handler(Oi(r === void 0 ? a.lastEvt : r, a).payload);
        const { payload: i } = Oi(r === void 0 ? a.lastEvt : r, a, true), u = () => {
          a.handler(i);
        };
        a.styleCleanup !== void 0 ? a.styleCleanup(u) : u();
      }
      a.event = void 0, a.initialEvent = void 0, a.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = a, n.mouse === true) {
    const r = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Ct(a, "main", [[e, "mousedown", "mouseStart", `passive${r}`]]);
  }
  ze.has.touch === true && Ct(a, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchpan;
  n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Lo(t.modifiers));
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Wt(t, "main"), Wt(t, "temp"), ze.is.firefox === true && va(e, false), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchpan);
} }), ed = "q-slider__marker-labels", bp = (e) => ({ value: e }), yp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Os = [34, 37, 40, 33, 39, 38], zm = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, Im = ["pan", "update:modelValue", "change"];
function Dm({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: a, emit: r, slots: o, proxy: { $q: i } } = Se(), u = lt(a, i), c = Sl(l), s = U(false), f = U(false), h = U(false), m = U(false), g = v(() => a.vertical === true ? "--v" : "--h"), _ = v(() => "-" + (a.switchLabelSide === true ? "switched" : "standard")), w = v(() => a.vertical === true ? a.reverse === true : a.reverse !== (i.lang.rtl === true)), S = v(() => isNaN(a.innerMin) === true || a.innerMin < a.min ? a.min : a.innerMin), p = v(() => isNaN(a.innerMax) === true || a.innerMax > a.max ? a.max : a.innerMax), y = v(() => a.disable !== true && a.readonly !== true && S.value < p.value), b = v(() => {
    if (a.step === 0) return (ye) => ye;
    const ae = (String(a.step).trim().split(".")[1] || "").length;
    return (ye) => parseFloat(ye.toFixed(ae));
  }), x = v(() => a.step === 0 ? 1 : a.step), A = v(() => y.value === true ? a.tabindex || 0 : -1), k = v(() => a.max - a.min), O = v(() => p.value - S.value), P = v(() => we(S.value)), L = v(() => we(p.value)), I = v(() => a.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), T = v(() => a.vertical === true ? "height" : "width"), $ = v(() => a.vertical === true ? "width" : "height"), q = v(() => a.vertical === true ? "vertical" : "horizontal"), D = v(() => {
    const ae = { role: "slider", "aria-valuemin": S.value, "aria-valuemax": p.value, "aria-orientation": q.value, "data-step": a.step };
    return a.disable === true ? ae["aria-disabled"] = "true" : a.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), N = v(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (a.vertical === true ? "row" : "column") + (a.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (a.label || a.labelAlways === true ? " q-slider--label" : "") + (a.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (a.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function j(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value} ${ye}${g.value}${_.value}`;
  }
  function Y(ae) {
    const ye = "q-slider__" + ae;
    return `${ye} ${ye}${g.value}`;
  }
  const le = v(() => {
    const ae = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), pe = v(() => Y("markers") + " absolute overflow-hidden"), W = v(() => Y("track-container")), M = v(() => j("pin")), ee = v(() => j("label")), X = v(() => j("text-container")), be = v(() => j("marker-labels-container") + (a.markerLabelsClass !== void 0 ? ` ${a.markerLabelsClass}` : "")), B = v(() => "q-slider__track relative-position no-outline" + (a.trackColor !== void 0 ? ` bg-${a.trackColor}` : "")), R = v(() => {
    const ae = { [$.value]: a.trackSize };
    return a.trackImg !== void 0 && (ae.backgroundImage = `url(${a.trackImg}) !important`), ae;
  }), J = v(() => "q-slider__inner absolute" + (a.innerTrackColor !== void 0 ? ` bg-${a.innerTrackColor}` : "")), F = v(() => {
    const ae = L.value - P.value, ye = { [I.value]: `${100 * P.value}%`, [T.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return a.innerTrackImg !== void 0 && (ye.backgroundImage = `url(${a.innerTrackImg}) !important`), ye;
  });
  function re(ae) {
    const { min: ye, max: Ce, step: Fe } = a;
    let $e = ye + ae * (Ce - ye);
    if (Fe > 0) {
      const We = ($e - S.value) % Fe;
      $e += (Math.abs(We) >= Fe / 2 ? (We < 0 ? -1 : 1) * Fe : 0) - We;
    }
    return $e = b.value($e), ct($e, S.value, p.value);
  }
  function we(ae) {
    return k.value === 0 ? 0 : (ae - a.min) / k.value;
  }
  function C(ae, ye) {
    const Ce = en(ae), Fe = a.vertical === true ? ct((Ce.top - ye.top) / ye.height, 0, 1) : ct((Ce.left - ye.left) / ye.width, 0, 1);
    return ct(w.value === true ? 1 - Fe : Fe, P.value, L.value);
  }
  const E = v(() => pr(a.markers) === true ? a.markers : x.value), z = v(() => {
    const ae = [], ye = E.value, Ce = a.max;
    let Fe = a.min;
    do
      ae.push(Fe), Fe += ye;
    while (Fe < Ce);
    return ae.push(Ce), ae;
  }), Z = v(() => {
    const ae = ` ${ed}${g.value}-`;
    return ed + `${ae}${a.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), te = v(() => a.markerLabels === false ? null : me(a.markerLabels).map((ae, ye) => ({ index: ye, value: ae.value, label: ae.label || ae.value, classes: Z.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...fe(ae.value), ...ae.style || {} } }))), Q = v(() => ({ markerList: te.value, markerMap: ce.value, classes: Z.value, getStyle: fe })), de = v(() => {
    const ae = O.value === 0 ? "2px" : 100 * E.value / O.value;
    return { ...F.value, backgroundSize: a.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function me(ae) {
    if (ae === false) return null;
    if (ae === true) return z.value.map(bp);
    if (typeof ae == "function") return z.value.map((Ce) => {
      const Fe = ae(Ce);
      return At(Fe) === true ? { ...Fe, value: Ce } : { value: Ce, label: Fe };
    });
    const ye = ({ value: Ce }) => Ce >= a.min && Ce <= a.max;
    return Array.isArray(ae) === true ? ae.map((Ce) => At(Ce) === true ? Ce : { value: Ce }).filter(ye) : Object.keys(ae).map((Ce) => {
      const Fe = ae[Ce], $e = Number(Ce);
      return At(Fe) === true ? { ...Fe, value: $e } : { value: $e, label: Fe };
    }).filter(ye);
  }
  function fe(ae) {
    return { [I.value]: `${100 * (ae - a.min) / k.value}%` };
  }
  const ce = v(() => {
    if (a.markerLabels === false) return null;
    const ae = {};
    return te.value.forEach((ye) => {
      ae[ye.value] = ye;
    }), ae;
  });
  function ne() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](Q.value);
    const ae = o["marker-label"] || yp;
    return te.value.map((ye) => ae({ marker: ye, ...Q.value }));
  }
  const H = v(() => [[gn, oe, void 0, { [q.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function oe(ae) {
    ae.isFinal === true ? (m.value !== void 0 && (t(ae.evt), ae.touch === true && e(true), m.value = void 0, r("pan", "end")), s.value = false, h.value = false) : ae.isFirst === true ? (m.value = n(ae.evt), t(ae.evt), e(), s.value = true, r("pan", "start")) : (t(ae.evt), e());
  }
  function _e() {
    h.value = false;
  }
  function ke(ae) {
    t(ae, n(ae)), e(), f.value = true, s.value = true, document.addEventListener("mouseup", qe, true);
  }
  function qe() {
    f.value = false, s.value = false, e(true), _e(), document.removeEventListener("mouseup", qe, true);
  }
  function Me(ae) {
    t(ae, n(ae)), e(true);
  }
  function He(ae) {
    Os.includes(ae.keyCode) && e(true);
  }
  function Ve(ae) {
    if (a.vertical === true) return null;
    const ye = i.lang.rtl !== a.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * ye - 1} * ${a.thumbSize} / 2 + ${50 - 100 * ye}%))` };
  }
  function ie(ae) {
    const ye = v(() => f.value === false && (h.value === ae.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = v(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + ye.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Fe = v(() => ({ width: a.thumbSize, height: a.thumbSize, [I.value]: `${100 * ae.ratio.value}%`, zIndex: h.value === ae.focusValue ? 2 : void 0 })), $e = v(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), We = v(() => Ve(ae.ratio.value)), it = v(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const xt = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: a.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (a.label === true || a.labelAlways === true) && (xt.push(d("div", { class: M.value + " absolute fit no-pointer-events" + $e.value }, [d("div", { class: ee.value, style: { minWidth: a.thumbSize } }, [d("div", { class: X.value, style: We.value }, [d("span", { class: it.value }, ae.label.value)])])])), a.name !== void 0 && a.disable !== true && c(xt, "push")), d("div", { class: Ce.value, style: Fe.value, ...ae.getNodeData() }, xt);
    };
  }
  function ge(ae, ye, Ce, Fe) {
    const $e = [];
    a.innerTrackColor !== "transparent" && $e.push(d("div", { key: "inner", class: J.value, style: F.value })), a.selectionColor !== "transparent" && $e.push(d("div", { key: "selection", class: le.value, style: ae.value })), a.markers !== false && $e.push(d("div", { key: "marker", class: pe.value, style: de.value })), Fe($e);
    const We = [pn("div", { key: "trackC", class: W.value, tabindex: ye.value, ...Ce.value }, [d("div", { class: B.value, style: R.value }, $e)], "slide", y.value, () => H.value)];
    if (a.markerLabels !== false) {
      const it = a.switchMarkerLabelsSide === true ? "unshift" : "push";
      We[it](d("div", { key: "markerL", class: be.value }, ne()));
    }
    return We;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", qe, true);
  }), { state: { active: s, focus: h, preventFocus: f, dragging: m, editable: y, classes: N, tabindex: A, attributes: D, roundValueFn: b, keyStep: x, trackLen: k, innerMin: S, innerMinRatio: P, innerMax: p, innerMaxRatio: L, positionProp: I, sizeProp: T, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: _e, onKeyup: He, getContent: ge, getThumbRenderFn: ie, convertRatioToModel: re, convertModelToRatio: we, getDraggingRatio: C } };
}
var pp = () => ({}), Jl = ve({ name: "QSlider", props: { ...zm, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: Im, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Dm({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: Rr(e) }), r = U(null), o = U(0), i = U(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = v(() => a.convertModelToRatio(i.value)), s = v(() => l.active.value === true ? o.value : c.value), f = v(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = a.getThumbRenderFn({ focusValue: true, getNodeData: pp, ratio: s, label: v(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: v(() => e.thumbColor || e.color), labelColor: v(() => e.labelColor), labelTextColor: v(() => e.labelTextColor) }), m = v(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: S, onBlur: a.onBlur, onKeydown: p, onKeyup: a.onKeyup });
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
  function S() {
    l.focus.value = true;
  }
  function p(y) {
    if (Os.includes(y.keyCode) === false) return;
    Ne(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, x = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + x), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = a.getContent(f, l.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: r, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function Hm() {
  const e = U(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var Nm = typeof ResizeObserver < "u", td = Nm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Hl = ve({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
  if (i.trigger = r, Nm === true) {
    let u;
    const c = (s) => {
      l = i.$el.parentNode, l ? (u = new ResizeObserver(r), u.observe(l), o()) : s !== true && Xe(() => {
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
      n !== null && (clearTimeout(n), n = null), f !== void 0 && (f.removeEventListener !== void 0 && f.removeEventListener("resize", r, dt.passive), f = void 0);
    }, c = function() {
      u(), (l == null ? void 0 : l.contentDocument) && (f = l.contentDocument.defaultView, f.addEventListener("resize", r, dt.passive), o());
    };
    const { isHydrated: s } = Hm();
    let f;
    return ft(() => {
      Xe(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: td.style, tabindex: -1, type: "text/html", data: td.url, "aria-hidden": "true", onLoad: c });
    };
  }
} }), Sr = false;
if (!__QUASAR_SSR__) {
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Sr = e.scrollLeft >= 0, e.remove();
}
function _p(e, t, n) {
  const l = n === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? l[0] : l[1]}${e ? ` text-${e}` : ""}`;
}
var wp = ["left", "center", "right", "justify"], Bu = ve({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => wp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, { registerTick: r } = ga(), { registerTick: o } = ga(), { registerTick: i } = ga(), { registerTimeout: u, removeTimeout: c } = Xn(), { registerTimeout: s, removeTimeout: f } = Xn(), h = U(null), m = U(null), g = U(e.modelValue), _ = U(false), w = U(true), S = U(false), p = U(false), y = [], b = U(0), x = U(false);
  let A = null, k = null, O;
  const P = v(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: _p(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), L = v(() => {
    const ne = b.value, H = g.value;
    for (let oe = 0; oe < ne; oe++) if (y[oe].name.value === H) return true;
    return false;
  }), I = v(() => `q-tabs__content--align-${_.value === true ? "left" : p.value === true ? "justify" : e.align}`), T = v(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), $ = v(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + I.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), q = v(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), D = v(() => e.vertical !== true && a.lang.rtl === true), N = v(() => Sr === false && D.value === true);
  he(D, M), he(() => e.modelValue, (ne) => {
    j({ name: ne, setCurrent: true, skipEmit: true });
  }), he(() => e.outsideArrows, Y);
  function j({ name: ne, setCurrent: H, skipEmit: oe }) {
    g.value !== ne && (oe !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", ne), (H === true || e["onUpdate:modelValue"] === void 0) && (pe(g.value, ne), g.value = ne));
  }
  function Y() {
    r(() => {
      h.value && le({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function le(ne) {
    if (q.value === void 0 || m.value === null) return;
    const H = ne[q.value.container], oe = Math.min(m.value[q.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, qe) => ke + (qe[q.value.content] || 0), 0)), _e = H > 0 && oe > H;
    _.value = _e, _e === true && o(M), p.value = H < parseInt(e.breakpoint, 10);
  }
  function pe(ne, H) {
    const oe = ne != null && ne !== "" ? y.find((ke) => ke.name.value === ne) : null, _e = H != null && H !== "" ? y.find((ke) => ke.name.value === H) : null;
    if (ce === true) ce = false;
    else if (oe && _e) {
      const ke = oe.tabIndicatorRef.value, qe = _e.tabIndicatorRef.value;
      A !== null && (clearTimeout(A), A = null), ke.style.transition = "none", ke.style.transform = "none", qe.style.transition = "none", qe.style.transform = "none";
      const Me = ke.getBoundingClientRect(), He = qe.getBoundingClientRect();
      qe.style.transform = e.vertical === true ? `translate3d(0,${Me.top - He.top}px,0) scale3d(1,${He.height ? Me.height / He.height : 1},1)` : `translate3d(${Me.left - He.left}px,0,0) scale3d(${He.width ? Me.width / He.width : 1},1,1)`, i(() => {
        A = setTimeout(() => {
          A = null, qe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", qe.style.transform = "none";
        }, 70);
      });
    }
    _e && _.value === true && W(_e.rootRef.value);
  }
  function W(ne) {
    const { left: H, width: oe, top: _e, height: ke } = m.value.getBoundingClientRect(), qe = ne.getBoundingClientRect();
    let Me = e.vertical === true ? qe.top - _e : qe.left - H;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), M();
      return;
    }
    Me += e.vertical === true ? qe.height - ke : qe.width - oe, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), M());
  }
  function M() {
    const ne = m.value;
    if (ne === null) return;
    const H = ne.getBoundingClientRect(), oe = e.vertical === true ? ne.scrollTop : Math.abs(ne.scrollLeft);
    D.value === true ? (w.value = Math.ceil(oe + H.width) < ne.scrollWidth - 1, S.value = oe > 0) : (w.value = oe > 0, S.value = e.vertical === true ? Math.ceil(oe + H.height) < ne.scrollHeight : Math.ceil(oe + H.width) < ne.scrollWidth);
  }
  function ee(ne) {
    k !== null && clearInterval(k), k = setInterval(() => {
      F(ne) === true && B();
    }, 5);
  }
  function X() {
    ee(N.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function be() {
    ee(N.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function B() {
    k !== null && (clearInterval(k), k = null);
  }
  function R(ne, H) {
    const oe = Array.prototype.filter.call(m.value.children, (He) => He === H || He.matches && He.matches(".q-tab.q-focusable") === true), _e = oe.length;
    if (_e === 0) return;
    if (ne === 36) return W(oe[0]), oe[0].focus(), true;
    if (ne === 35) return W(oe[_e - 1]), oe[_e - 1].focus(), true;
    const ke = ne === (e.vertical === true ? 38 : 37), qe = ne === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : qe === true ? 1 : void 0;
    if (Me !== void 0) {
      const He = D.value === true ? -1 : 1, Ve = oe.indexOf(H) + Me * He;
      return Ve >= 0 && Ve < _e && (W(oe[Ve]), oe[Ve].focus({ preventScroll: true })), true;
    }
  }
  const J = v(() => N.value === true ? { get: (ne) => Math.abs(ne.scrollLeft), set: (ne, H) => {
    ne.scrollLeft = -H;
  } } : e.vertical === true ? { get: (ne) => ne.scrollTop, set: (ne, H) => {
    ne.scrollTop = H;
  } } : { get: (ne) => ne.scrollLeft, set: (ne, H) => {
    ne.scrollLeft = H;
  } });
  function F(ne) {
    const H = m.value, { get: oe, set: _e } = J.value;
    let ke = false, qe = oe(H);
    const Me = ne < qe ? -1 : 1;
    return qe += Me * 5, qe < 0 ? (ke = true, qe = 0) : (Me === -1 && qe <= ne || Me === 1 && qe >= ne) && (ke = true, qe = ne), _e(H, qe), M(), ke;
  }
  function re(ne, H) {
    for (const oe in ne) if (ne[oe] !== H[oe]) return false;
    return true;
  }
  function we() {
    let ne = null, H = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
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
        ne = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== _e || ye !== 0 && re(ie, ke) === false) continue;
      const Ce = { matchedLen: ge.length, queryDiff: qe - ye, hrefLen: ae.length - Ve.length };
      if (Ce.matchedLen > H.matchedLen) {
        ne = Me.name.value, H = Ce;
        continue;
      } else if (Ce.matchedLen !== H.matchedLen) continue;
      if (Ce.queryDiff < H.queryDiff) ne = Me.name.value, H = Ce;
      else if (Ce.queryDiff !== H.queryDiff) continue;
      Ce.hrefLen > H.hrefLen && (ne = Me.name.value, H = Ce);
    }
    if (ne === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    j({ name: ne, setCurrent: true });
  }
  function C(ne) {
    if (c(), x.value !== true && h.value !== null && ne.target && typeof ne.target.closest == "function") {
      const H = ne.target.closest(".q-tab");
      H && h.value.contains(H) === true && (x.value = true, _.value === true && W(H));
    }
  }
  function E() {
    u(() => {
      x.value = false;
    }, 30);
  }
  function z() {
    de.avoidRouteWatcher === false ? s(we) : f();
  }
  function Z() {
    if (O === void 0) {
      const ne = he(() => l.$route.fullPath, z);
      O = () => {
        ne(), O = void 0;
      };
    }
  }
  function te(ne) {
    y.push(ne), b.value++, Y(), ne.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (_.value === true) {
        const H = g.value, oe = H != null && H !== "" ? y.find((_e) => _e.name.value === H) : null;
        oe && W(oe.rootRef.value);
      }
    }) : (Z(), ne.routeData.hasRouterLink.value === true && z());
  }
  function Q(ne) {
    y.splice(y.indexOf(ne), 1), b.value--, Y(), O !== void 0 && ne.routeData !== void 0 && (y.every((H) => H.routeData === void 0) === true && O(), z());
  }
  const de = { currentModel: g, tabProps: P, hasFocus: x, hasActiveTab: L, registerTab: te, unregisterTab: Q, verifyRouteModel: z, updateModel: j, onKbdNavigate: R, avoidRouteWatcher: false };
  hn(em, de);
  function me() {
    A !== null && clearTimeout(A), B(), O == null ? void 0 : O();
  }
  let fe, ce;
  return Ke(me), Fn(() => {
    fe = O !== void 0, me();
  }), _l(() => {
    fe === true && (Z(), ce = true, z()), Y();
  }), () => d("div", { ref: h, class: T.value, role: "tablist", onFocusin: C, onFocusout: E }, [d(Hl, { onResize: le }), d("div", { ref: m, class: $.value, onScroll: M }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: X, onTouchstartPassive: X, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (S.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: be, onTouchstartPassive: be, onMouseupPassive: B, onMouseleavePassive: B, onTouchendPassive: B })]);
} }), Sp = 0, jm = ["click", "keydown"], Um = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Sp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function Qm(e, t, n, l) {
  const a = qt(em, ot);
  if (a === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: r } = Se(), o = U(null), i = U(null), u = U(null), c = v(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = v(() => a.currentModel.value === e.name), f = v(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && a.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || a.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), h = v(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = v(() => e.disable === true || a.hasFocus.value === true || s.value === false && a.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(y, b) {
    var _a2;
    if (b !== true && (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), e.disable === true) {
      (l == null ? void 0 : l.hasRouterLink.value) === true && Ne(y);
      return;
    }
    if (l === void 0) {
      a.updateModel({ name: e.name }), n("click", y);
      return;
    }
    if (l.hasRouterLink.value === true) {
      const x = (A = {}) => {
        let k;
        const O = A.to === void 0 || kn(A.to, e.to) === true ? a.avoidRouteWatcher = wr() : null;
        return l.navigateToRouterLink(y, { ...A, returnRouterError: true }).catch((P) => {
          k = P;
        }).then((P) => {
          var _a3;
          if (O === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, k === void 0 && (P === void 0 || ((_a3 = P.message) == null ? void 0 : _a3.startsWith("Avoided redundant navigation")) === true) && a.updateModel({ name: e.name })), A.returnRouterError === true) return k !== void 0 ? Promise.reject(k) : P;
        });
      };
      n("click", y, x), y.defaultPrevented !== true && x();
      return;
    }
    n("click", y);
  }
  function _(y) {
    yn(y, [13, 32]) ? g(y, true) : Ql(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && a.onKbdNavigate(y.keyCode, r.$el) === true && Ne(y), n("keydown", y);
  }
  function w() {
    const y = a.tabProps.value.narrowIndicator, b = [], x = d("div", { ref: u, class: ["q-tab__indicator", a.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), y === true && b.push(x);
    const A = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, kt(t.default, b))];
    return y === false && A.push(x), A;
  }
  const S = { name: v(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    a.unregisterTab(S);
  }), ft(() => {
    a.registerTab(S);
  });
  function p(y, b) {
    const x = { ref: i, class: f.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return sn(d(y, x, w()), [[ai, c.value]]);
  }
  return { renderTab: p, $tabs: a };
}
var Fa = ve({ name: "QTab", props: Um, emits: jm, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = Qm(e, t, n);
  return () => l("div");
} }), xp = ve({ name: "QTabPanels", props: { ...Es, ...nt }, emits: $s, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, getPanelContent: r, panelDirectives: o } = As(), i = v(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (a(t), pn("div", { class: i.value }, r(), "pan", e.swipeable, () => o.value));
} }), Fi = ve({ name: "QTabPanel", props: Ms, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), nd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, ld = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, ad = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Nr = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, jr = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, oo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => nd.test(e), hexaColor: (e) => ld.test(e), hexOrHexaColor: (e) => ad.test(e), rgbColor: (e) => Nr.test(e), rgbaColor: (e) => jr.test(e), rgbOrRgbaColor: (e) => Nr.test(e) || jr.test(e), hexOrRgbColor: (e) => nd.test(e) || Nr.test(e), hexaOrRgbaColor: (e) => ld.test(e) || jr.test(e), anyColor: (e) => ad.test(e) || Nr.test(e) || jr.test(e) }, Cp = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function rd({ r: e, g: t, b: n, a: l }) {
  const a = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || a && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = a ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function od({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function Km(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function id({ h: e, s: t, v: n, a: l }) {
  let a, r, o;
  t = t / 100, n = n / 100, e = e / 360;
  const i = Math.floor(e * 6), u = e * 6 - i, c = n * (1 - t), s = n * (1 - u * t), f = n * (1 - (1 - u) * t);
  switch (i % 6) {
    case 0:
      a = n, r = f, o = c;
      break;
    case 1:
      a = s, r = n, o = c;
      break;
    case 2:
      a = c, r = n, o = f;
      break;
    case 3:
      a = c, r = s, o = n;
      break;
    case 4:
      a = f, r = c, o = n;
      break;
    case 5:
      a = n, r = c, o = s;
      break;
  }
  return { r: Math.round(a * 255), g: Math.round(r * 255), b: Math.round(o * 255), a: l };
}
function Vi({ r: e, g: t, b: n, a: l }) {
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
function Wm(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  const t = e.replace(/ /g, ""), n = Cp.exec(t);
  if (n === null) return Km(t);
  const l = { r: Math.min(255, parseInt(n[2], 10)), g: Math.min(255, parseInt(n[3], 10)), b: Math.min(255, parseInt(n[4], 10)) };
  if (n[1]) {
    const a = parseFloat(n[5]);
    l.a = Math.min(1, isNaN(a) === true ? 1 : a) * 100;
  }
  return l;
}
function kp(e) {
  if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
  const t = typeof e == "string" ? Wm(e) : e, n = t.r / 255, l = t.g / 255, a = t.b / 255, r = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4), i = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
var qp = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], ud = "M5 5 h10 v10 h-10 v-10 z", Tp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
ve({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), { getCache: r } = Pr(), o = U(null), i = U(null), u = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = v(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = U(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), f = U(e.defaultView), h = U(T(e.modelValue || e.defaultValue)), m = v(() => e.disable !== true && e.readonly !== true), g = v(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = v(() => u.value !== null ? u.value : g.value), w = v(() => ({ type: "hidden", name: e.name, value: h.value[_.value === true ? "hex" : "rgb"] })), S = Sl(w), p = v(() => c.value !== null ? c.value : h.value.a !== void 0), y = v(() => ({ backgroundColor: h.value.rgb || "#000" })), b = v(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : kp(h.value) > 0.4) ? "light" : "dark"}`), x = v(() => ({ background: `hsl(${h.value.h},100%,50%)` })), A = v(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), k = v(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : qp), O = v(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-color-picker--dark q-dark" : "")), P = v(() => e.disable === true ? { "aria-disabled": "true" } : {}), L = v(() => [[gn, le, void 0, { prevent: true, stop: true, mouse: true }]]);
  he(() => e.modelValue, (C) => {
    const E = T(C || e.defaultValue);
    E.hex !== h.value.hex && (h.value = E);
  }), he(() => e.defaultValue, (C) => {
    if (!e.modelValue && C) {
      const E = T(C);
      E.hex !== h.value.hex && (h.value = E);
    }
  });
  function I(C, E) {
    h.value.hex = rd(C), h.value.rgb = od(C), h.value.r = C.r, h.value.g = C.g, h.value.b = C.b, h.value.a = C.a;
    const z = h.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", z), E === true && t("change", z);
  }
  function T(C) {
    const E = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof C != "string" || C.length === 0 || oo.anyColor(C.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: E === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const z = Wm(C);
    return E === true && z.a === void 0 && (z.a = 100), z.hex = rd(z), z.rgb = od(z), Object.assign(z, Vi(z));
  }
  function $(C, E, z) {
    const Z = o.value;
    if (Z === null) return;
    const te = Z.clientWidth, Q = Z.clientHeight, de = Z.getBoundingClientRect();
    let me = Math.min(te, Math.max(0, C - de.left));
    l.lang.rtl === true && (me = te - me);
    const fe = Math.min(Q, Math.max(0, E - de.top)), ce = Math.round(100 * me / te), ne = Math.round(100 * Math.max(0, Math.min(1, -(fe / Q) + 1))), H = id({ h: h.value.h, s: ce, v: ne, a: p.value === true ? h.value.a : void 0 });
    h.value.s = ce, h.value.v = ne, I(H, z);
  }
  function q(C, E) {
    const z = Math.round(C), Z = id({ h: z, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = z, I(Z, E);
  }
  function D(C) {
    q(C, true);
  }
  function N(C, E, z, Z, te) {
    if (Z !== void 0 && wt(Z), !/^[0-9]+$/.test(C)) {
      te === true && n.$forceUpdate();
      return;
    }
    const Q = Math.floor(Number(C));
    if (Q < 0 || Q > z) {
      te === true && n.$forceUpdate();
      return;
    }
    const de = { r: E === "r" ? Q : h.value.r, g: E === "g" ? Q : h.value.g, b: E === "b" ? Q : h.value.b, a: p.value === true ? E === "a" ? Q : h.value.a : void 0 };
    if (E !== "a") {
      const me = Vi(de);
      h.value.h = me.h, h.value.s = me.s, h.value.v = me.v;
    }
    if (I(de, te), te !== true && (Z == null ? void 0 : Z.target.selectionEnd) !== void 0) {
      const me = Z.target.selectionEnd;
      Xe(() => {
        Z.target.setSelectionRange(me, me);
      });
    }
  }
  function j(C, E) {
    let z;
    const Z = C.target.value;
    if (wt(C), s.value === "hex") {
      if (Z.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(Z)) return true;
      z = Km(Z);
    } else {
      let Q;
      if (Z.endsWith(")")) if (p.value !== true && Z.startsWith("rgb(")) {
        if (Q = Z.substring(4, Z.length - 1).split(",").map((de) => parseInt(de, 10)), Q.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(Z)) return true;
      } else if (p.value === true && Z.startsWith("rgba(")) {
        if (Q = Z.substring(5, Z.length - 1).split(","), Q.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(Z)) return true;
        for (let me = 0; me < 3; me++) {
          const fe = parseInt(Q[me], 10);
          if (fe < 0 || fe > 255) return true;
          Q[me] = fe;
        }
        const de = parseFloat(Q[3]);
        if (de < 0 || de > 1) return true;
        Q[3] = de;
      } else return true;
      else return true;
      if (Q[0] < 0 || Q[0] > 255 || Q[1] < 0 || Q[1] > 255 || Q[2] < 0 || Q[2] > 255 || p.value === true && (Q[3] < 0 || Q[3] > 1)) return true;
      z = { r: Q[0], g: Q[1], b: Q[2], a: p.value === true ? Q[3] * 100 : void 0 };
    }
    const te = Vi(z);
    if (h.value.h = te.h, h.value.s = te.s, h.value.v = te.v, I(z, E), E !== true) {
      const Q = C.target.selectionEnd;
      Xe(() => {
        C.target.setSelectionRange(Q, Q);
      });
    }
  }
  function Y(C) {
    const E = T(C), z = { r: E.r, g: E.g, b: E.b, a: E.a };
    z.a === void 0 && (z.a = h.value.a), h.value.h = E.h, h.value.s = E.s, h.value.v = E.v, I(z, true);
  }
  function le(C) {
    C.isFinal ? $(C.position.left, C.position.top, true) : pe(C);
  }
  const pe = fm((C) => {
    $(C.position.left, C.position.top);
  }, 20);
  function W(C) {
    $(C.pageX - window.pageXOffset, C.pageY - window.pageYOffset, true);
  }
  function M(C) {
    $(C.pageX - window.pageXOffset, C.pageY - window.pageYOffset);
  }
  function ee(C) {
    i.value !== null && (i.value.$el.style.opacity = C ? 1 : 0);
  }
  function X(C) {
    s.value = C;
  }
  function be() {
    const C = [];
    return e.noHeaderTabs !== true && C.push(d(Bu, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": X }, () => [d(Fa, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Fa, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), C.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...r("topIn", { onInput: (E) => {
      ee(j(E) === true);
    }, onChange: wt, onBlur: (E) => {
      j(E, true) === true && n.$forceUpdate(), ee(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, C)]);
  }
  function B() {
    return d(xp, { modelValue: f.value, animated: true }, () => [d(Fi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, F), d(Fi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, re), d(Fi, { class: "q-color-picker__palette-tab", name: "palette" }, we)]);
  }
  function R(C) {
    f.value = C;
  }
  function J() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(Bu, { class: "absolute-full", modelValue: f.value, dense: true, align: "justify", "onUpdate:modelValue": R }, () => [d(Fa, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Fa, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Fa, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function F() {
    const C = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: x.value, ...m.value === true ? { onClick: W, onMousedown: M } : {} }, E = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: A.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], z = [d(Jl, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: ud, "onUpdate:modelValue": q, onChange: D })];
    return p.value === true && z.push(d(Jl, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Tp, readonly: m.value !== true, hideSelection: true, thumbPath: ud, ...r("alphaSlide", { "onUpdate:modelValue": (Z) => N(Z, "a", 100), onChange: (Z) => N(Z, "a", 100, void 0, true) }) })), [pn("div", C, E, "spec", m.value, () => L.value), d("div", { class: "q-color-picker__sliders" }, z)];
  }
  function re() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(Jl, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: m.value !== true, ...r("rSlide", { "onUpdate:modelValue": (C) => N(C, "r", 255), onChange: (C) => N(C, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("rIn", { onInput: (C) => N(C.target.value, "r", 255, C), onBlur: (C) => N(C.target.value, "r", 255, C, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(Jl, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: m.value !== true, ...r("gSlide", { "onUpdate:modelValue": (C) => N(C, "g", 255), onChange: (C) => N(C, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("gIn", { onInput: (C) => N(C.target.value, "g", 255, C), onBlur: (C) => N(C.target.value, "g", 255, C, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(Jl, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: a.value, ...r("bSlide", { "onUpdate:modelValue": (C) => N(C, "b", 255), onChange: (C) => N(C, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("bIn", { onInput: (C) => N(C.target.value, "b", 255, C), onBlur: (C) => N(C.target.value, "b", 255, C, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(Jl, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: a.value, ...r("aSlide", { "onUpdate:modelValue": (C) => N(C, "a", 100), onChange: (C) => N(C, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("aIn", { onInput: (C) => N(C.target.value, "a", 100, C), onBlur: (C) => N(C.target.value, "a", 100, C, true) }) })]) : null];
  }
  function we() {
    const C = (E) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: E }, ...m.value === true ? r("palette#" + E, { onClick: () => {
      Y(E);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, k.value.map(C))];
  }
  return () => {
    const C = [B()];
    return e.name !== void 0 && e.disable !== true && S(C, "push"), e.noHeader !== true && C.unshift(be()), e.noFooter !== true && C.push(J()), d("div", { class: O.value, ...P.value }, C);
  };
} });
var vl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Mp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), Rp(Fs(e, t, n));
}
function sd(e, t, n) {
  return Gm(Ap(e, t, n));
}
function Ep(e) {
  return $p(e) === 0;
}
function io(e, t) {
  return t <= 6 ? 31 : t <= 11 || Ep(e) ? 30 : 29;
}
function $p(e) {
  const t = vl.length;
  let n = vl[0], l, a, r, o, i;
  if (e < n || e >= vl[t - 1]) throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < t && (l = vl[i], a = l - n, !(e < l)); i += 1) n = l;
  return o = e - n, a - o < 6 && (o = o - a + _t(a + 4, 33) * 33), r = on(on(o + 1, 33) - 1, 4), r === -1 && (r = 4), r;
}
function Ym(e, t) {
  const n = vl.length, l = e + 621;
  let a = -14, r = vl[0], o, i, u, c, s;
  if (e < r || e >= vl[n - 1]) throw new Error("Invalid Jalaali year " + e);
  for (s = 1; s < n && (o = vl[s], i = o - r, !(e < o)); s += 1) a = a + _t(i, 33) * 8 + _t(on(i, 33), 4), r = o;
  c = e - r, a = a + _t(c, 33) * 8 + _t(on(c, 33) + 3, 4), on(i, 33) === 4 && i - c === 4 && (a += 1);
  const f = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + a - f;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function Ap(e, t, n) {
  const l = Ym(e, true);
  return Fs(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function Rp(e) {
  const t = Gm(e).gy;
  let n = t - 621, l, a, r;
  const o = Ym(n, false), i = Fs(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185) return a = 1 + _t(r, 31), l = on(r, 31) + 1, { jy: n, jm: a, jd: l };
    r -= 186;
  } else n -= 1, r += 179, o.leap === 1 && (r += 1);
  return a = 7 + _t(r, 30), l = on(r, 30) + 1, { jy: n, jm: a, jd: l };
}
function Fs(e, t, n) {
  let l = _t((e + _t(t - 8, 6) + 100100) * 1461, 4) + _t(153 * on(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - _t(_t(e + 100100 + _t(t - 8, 6), 100) * 3, 4) + 752, l;
}
function Gm(e) {
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
var Pp = ["gregorian", "persian"], Oo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Pp.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, Xm = ["update:modelValue"];
function jn(e) {
  return e.year + "/" + rt(e.month) + "/" + rt(e.day);
}
function Zm(e, t) {
  const n = v(() => e.disable !== true && e.readonly !== true), l = v(() => n.value === true ? 0 : -1), a = v(() => {
    const i = [];
    return e.color !== void 0 && i.push(`bg-${e.color}`), e.textColor !== void 0 && i.push(`text-${e.textColor}`), i.join(" ");
  });
  function r() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function o(i) {
    const u = /* @__PURE__ */ new Date(), c = i === true ? null : 0;
    if (e.calendar === "persian") {
      const s = Mp(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: a, getLocale: r, getCurrentDate: o };
}
var Jm = 864e5, Lp = 36e5, Ou = 6e4, eh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Bp = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Op = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, zi = {};
function Fp(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (zi[l] !== void 0) return zi[l];
  const a = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Op, (f) => {
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
        return u--, f[0] === "[" && (f = f.substring(1, f.length - 1)), f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), s = { map: i, regex: new RegExp("^" + c) };
  return zi[l] = s, s;
}
function th(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : Cu.date;
}
function cd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), a = Math.floor(l / 60), r = l % 60;
  return n + rt(a) + t + rt(r);
}
function Qa(e, t, n, l, a) {
  const r = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (a !== void 0 && Object.assign(r, a), e == null || e === "" || typeof e != "string") return r;
  t === void 0 && (t = eh);
  const o = th(n, ti.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Fp(t, o), f = e.match(c);
  if (f === null) return r;
  let h = "";
  if (s.X !== void 0 || s.x !== void 0) {
    const m = parseInt(f[s.X !== void 0 ? s.X : s.x], 10);
    if (isNaN(m) === true || m < 0) return r;
    const g = new Date(m * (s.X !== void 0 ? 1e3 : 1));
    r.year = g.getFullYear(), r.month = g.getMonth() + 1, r.day = g.getDate(), r.hour = g.getHours(), r.minute = g.getMinutes(), r.second = g.getSeconds(), r.millisecond = g.getMilliseconds();
  } else {
    if (s.YYYY !== void 0) r.year = parseInt(f[s.YYYY], 10);
    else if (s.YY !== void 0) {
      const m = parseInt(f[s.YY], 10);
      r.year = m < 0 ? m : 2e3 + m;
    }
    if (s.M !== void 0) {
      if (r.month = parseInt(f[s.M], 10), r.month < 1 || r.month > 12) return r;
    } else s.MMM !== void 0 ? r.month = u.indexOf(f[s.MMM]) + 1 : s.MMMM !== void 0 && (r.month = i.indexOf(f[s.MMMM]) + 1);
    if (s.D !== void 0) {
      if (r.day = parseInt(f[s.D], 10), r.year === null || r.month === null || r.day < 1) return r;
      const m = l !== "persian" ? new Date(r.year, r.month, 0).getDate() : io(r.year, r.month);
      if (r.day > m) return r;
    }
    s.H !== void 0 ? r.hour = parseInt(f[s.H], 10) % 24 : s.h !== void 0 && (r.hour = parseInt(f[s.h], 10) % 12, (s.A && f[s.A] === "PM" || s.a && f[s.a] === "pm" || s.aa && f[s.aa] === "p.m.") && (r.hour += 12), r.hour = r.hour % 24), s.m !== void 0 && (r.minute = parseInt(f[s.m], 10) % 60), s.s !== void 0 && (r.second = parseInt(f[s.s], 10) % 60), s.S !== void 0 && (r.millisecond = parseInt(f[s.S], 10) * 10 ** (3 - f[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? f[s.Z].replace(":", "") : f[s.ZZ], r.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return r.dateHash = rt(r.year, 6) + "/" + rt(r.month) + "/" + rt(r.day), r.timeHash = rt(r.hour) + ":" + rt(r.minute) + ":" + rt(r.second) + h, r;
}
function Ii(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const l = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - l);
  const a = (t - n) / (Jm * 7);
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
  return (e.getTime() - e.getTimezoneOffset() * Ou - (t.getTime() - t.getTimezoneOffset() * Ou)) / n;
}
function nh(e, t, n = "days") {
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
      return Ur(Un(l, "day"), Un(a, "day"), Jm);
    case "hours":
    case "hour":
      return Ur(Un(l, "hour"), Un(a, "hour"), Lp);
    case "minutes":
    case "minute":
      return Ur(Un(l, "minute"), Un(a, "minute"), Ou);
    case "seconds":
    case "second":
      return Ur(Un(l, "second"), Un(a, "second"), 1e3);
  }
}
function Di(e) {
  return nh(e, Un(e, "year"), "days") + 1;
}
function ea(e) {
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
var dd = { YY(e, t, n) {
  const l = this.YYYY(e, t, n) % 100;
  return l >= 0 ? rt(l) : "-" + rt(Math.abs(l));
}, YYYY(e, t, n) {
  return n ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, Mo(e) {
  return ea(e.getMonth() + 1);
}, MM(e) {
  return rt(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return ea(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return ea(e.getDate());
}, DD(e) {
  return rt(e.getDate());
}, DDD(e) {
  return Di(e);
}, DDDo(e) {
  return ea(Di(e));
}, DDDD(e) {
  return rt(Di(e), 3);
}, d(e) {
  return e.getDay();
}, do(e) {
  return ea(e.getDay());
}, dd(e, t) {
  return t.days[e.getDay()].slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ii(e);
}, wo(e) {
  return ea(Ii(e));
}, ww(e) {
  return rt(Ii(e));
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
  return cd(a, ":");
}, ZZ(e, t, n, l) {
  const a = l ?? e.getTimezoneOffset();
  return cd(a);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function lh(e, t, n, l, a) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
  const r = new Date(e);
  if (isNaN(r)) return;
  t === void 0 && (t = eh);
  const o = th(n, ti.props);
  return t.replace(Bp, (i, u) => i in dd ? dd[i](r, o, l, a) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Dn = 20, Vp = ["Calendar", "Years", "Months"], fd = (e) => Vp.includes(e), Hi = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), ta = " \u2014 ";
function ll(e) {
  return e.year + "/" + rt(e.month);
}
ve({ name: "QDate", props: { ...Oo, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Oo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Hi }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Hi }, navigationMaxYearMonth: { type: String, validator: Hi }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: fd } }, emits: [...Xm, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = Zm(e, a);
  let f;
  const h = Rr(e), m = Sl(h), g = U(null), _ = U(He()), w = U(c()), S = v(() => He()), p = v(() => c()), y = v(() => s()), b = U(ie(_.value, w.value)), x = U(e.defaultView), A = v(() => a.lang.rtl === true ? "right" : "left"), k = U(A.value), O = U(A.value), P = b.value.year, L = U(P - P % Dn - (P < 0 ? Dn : 0)), I = U(null), T = v(() => {
    const V = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${V} q-date--${V}-${e.minimal === true ? "minimal" : "standard"}` + (r.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), $ = v(() => e.color || "primary"), q = v(() => e.textColor || "white"), D = v(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), N = v(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), j = v(() => N.value.filter((V) => typeof V == "string").map((V) => Ve(V, _.value, w.value)).filter((V) => V.dateHash !== null && V.day !== null && V.month !== null && V.year !== null)), Y = v(() => {
    const V = (K) => Ve(K, _.value, w.value);
    return N.value.filter((K) => At(K) === true && K.from !== void 0 && K.to !== void 0).map((K) => ({ from: V(K.from), to: V(K.to) })).filter((K) => K.from.dateHash !== null && K.to.dateHash !== null && K.from.dateHash < K.to.dateHash);
  }), le = v(() => e.calendar !== "persian" ? (V) => new Date(V.year, V.month - 1, V.day) : (V) => {
    const K = sd(V.year, V.month, V.day);
    return new Date(K.gy, K.gm - 1, K.gd);
  }), pe = v(() => e.calendar === "persian" ? jn : (V, K, se) => lh(new Date(V.year, V.month - 1, V.day, V.hour, V.minute, V.second, V.millisecond), K === void 0 ? _.value : K, se === void 0 ? w.value : se, V.year, V.timezoneOffset)), W = v(() => j.value.length + Y.value.reduce((V, K) => V + 1 + nh(le.value(K.to), le.value(K.from)), 0)), M = v(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (I.value !== null) {
      const se = I.value.init, Te = le.value(se);
      return w.value.daysShort[Te.getDay()] + ", " + w.value.monthsShort[se.month - 1] + " " + se.day + ta + "?";
    }
    if (W.value === 0) return ta;
    if (W.value > 1) return `${W.value} ${w.value.pluralDay}`;
    const V = j.value[0], K = le.value(V);
    return isNaN(K.valueOf()) === true ? ta : w.value.headerTitle !== void 0 ? w.value.headerTitle(K, V) : w.value.daysShort[K.getDay()] + ", " + w.value.monthsShort[V.month - 1] + " " + V.day;
  }), ee = v(() => j.value.concat(Y.value.map((K) => K.from)).sort((K, se) => K.year - se.year || K.month - se.month)[0]), X = v(() => j.value.concat(Y.value.map((K) => K.to)).sort((K, se) => se.year - K.year || se.month - K.month)[0]), be = v(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (W.value === 0) return ta;
    if (W.value > 1) {
      const V = ee.value, K = X.value, se = w.value.monthsShort;
      return se[V.month - 1] + (V.year !== K.year ? " " + V.year + ta + se[K.month - 1] + " " : V.month !== K.month ? ta + se[K.month - 1] : "") + " " + K.year;
    }
    return j.value[0].year;
  }), B = v(() => {
    const V = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return a.lang.rtl === true ? V.reverse() : V;
  }), R = v(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), J = v(() => {
    const V = w.value.daysShort, K = R.value;
    return K > 0 ? V.slice(K, 7).concat(V.slice(0, K)) : V;
  }), F = v(() => {
    const V = b.value;
    return e.calendar !== "persian" ? new Date(V.year, V.month, 0).getDate() : io(V.year, V.month);
  }), re = v(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), we = v(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const V = e.navigationMinYearMonth.split("/");
    return { year: parseInt(V[0], 10), month: parseInt(V[1], 10) };
  }), C = v(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const V = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(V[0], 10), month: parseInt(V[1], 10) };
  }), E = v(() => {
    const V = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return we.value !== null && we.value.year >= b.value.year && (V.year.prev = false, we.value.year === b.value.year && we.value.month >= b.value.month && (V.month.prev = false)), C.value !== null && C.value.year <= b.value.year && (V.year.next = false, C.value.year === b.value.year && C.value.month <= b.value.month && (V.month.next = false)), V;
  }), z = v(() => {
    const V = {};
    return j.value.forEach((K) => {
      const se = ll(K);
      V[se] === void 0 && (V[se] = []), V[se].push(K.day);
    }), V;
  }), Z = v(() => {
    const V = {};
    return Y.value.forEach((K) => {
      const se = ll(K.from), Te = ll(K.to);
      if (V[se] === void 0 && (V[se] = []), V[se].push({ from: K.from.day, to: se === Te ? K.to.day : void 0, range: K }), se < Te) {
        let Ee;
        const { year: Ge, month: Le } = K.from, Ie = Le < 12 ? { year: Ge, month: Le + 1 } : { year: Ge + 1, month: 1 };
        for (; (Ee = ll(Ie)) <= Te; ) V[Ee] === void 0 && (V[Ee] = []), V[Ee].push({ from: void 0, to: Ee === Te ? K.to.day : void 0, range: K }), Ie.month++, Ie.month > 12 && (Ie.year++, Ie.month = 1);
      }
    }), V;
  }), te = v(() => {
    if (I.value === null) return;
    const { init: V, initHash: K, final: se, finalHash: Te } = I.value, [Ee, Ge] = K <= Te ? [V, se] : [se, V], Le = ll(Ee), Ie = ll(Ge);
    if (Le !== Q.value && Ie !== Q.value) return;
    const at = {};
    return Le === Q.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, Ie === Q.value ? (at.to = Ge.day, at.includeTo = true) : at.to = F.value, at;
  }), Q = v(() => ll(b.value)), de = v(() => {
    const V = {};
    if (e.options === void 0) {
      for (let se = 1; se <= F.value; se++) V[se] = true;
      return V;
    }
    const K = typeof e.options == "function" ? e.options : (se) => e.options.includes(se);
    for (let se = 1; se <= F.value; se++) {
      const Te = Q.value + "/" + rt(se);
      V[se] = K(Te);
    }
    return V;
  }), me = v(() => {
    const V = {};
    if (e.events === void 0) for (let K = 1; K <= F.value; K++) V[K] = false;
    else {
      const K = typeof e.events == "function" ? e.events : (se) => e.events.includes(se);
      for (let se = 1; se <= F.value; se++) {
        const Te = Q.value + "/" + rt(se);
        V[se] = K(Te) === true && re.value(Te);
      }
    }
    return V;
  }), fe = v(() => {
    let V, K;
    const { year: se, month: Te } = b.value;
    if (e.calendar !== "persian") V = new Date(se, Te - 1, 1), K = new Date(se, Te - 1, 0).getDate();
    else {
      const Ee = sd(se, Te, 1);
      V = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Ge = Te - 1, Le = se;
      Ge === 0 && (Ge = 12, Le--), K = io(Le, Ge);
    }
    return { days: V.getDay() - R.value - 1, endDay: K };
  }), ce = v(() => {
    const V = [], { days: K, endDay: se } = fe.value, Te = K < 0 ? K + 7 : K;
    if (Te < 6) for (let Le = se - Te; Le <= se; Le++) V.push({ i: Le, fill: true });
    const Ee = V.length;
    for (let Le = 1; Le <= F.value; Le++) {
      const Ie = { i: Le, event: me.value[Le], classes: [] };
      de.value[Le] === true && (Ie.in = true, Ie.flat = true), V.push(Ie);
    }
    if (z.value[Q.value] !== void 0 && z.value[Q.value].forEach((Le) => {
      const Ie = Ee + Le - 1;
      Object.assign(V[Ie], { selected: true, unelevated: true, flat: false, color: $.value, textColor: q.value });
    }), Z.value[Q.value] !== void 0 && Z.value[Q.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const Ie = Ee + Le.from - 1, at = Ee + (Le.to || F.value) - 1;
        for (let cn = Ie; cn <= at; cn++) Object.assign(V[cn], { range: Le.range, unelevated: true, color: $.value, textColor: q.value });
        Object.assign(V[Ie], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(V[at], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const Ie = Ee + Le.to - 1;
        for (let at = Ee; at <= Ie; at++) Object.assign(V[at], { range: Le.range, unelevated: true, color: $.value, textColor: q.value });
        Object.assign(V[Ie], { flat: false, rangeTo: true });
      } else {
        const Ie = Ee + F.value - 1;
        for (let at = Ee; at <= Ie; at++) Object.assign(V[at], { range: Le.range, unelevated: true, color: $.value, textColor: q.value });
      }
    }), te.value !== void 0) {
      const Le = Ee + te.value.from - 1, Ie = Ee + te.value.to - 1;
      for (let at = Le; at <= Ie; at++) V[at].color = $.value, V[at].editRange = true;
      te.value.includeFrom === true && (V[Le].editRangeFrom = true), te.value.includeTo === true && (V[Ie].editRangeTo = true);
    }
    b.value.year === y.value.year && b.value.month === y.value.month && (V[Ee + y.value.day - 1].today = true);
    const Ge = V.length % 7;
    if (Ge > 0) {
      const Le = 7 - Ge;
      for (let Ie = 1; Ie <= Le; Ie++) V.push({ i: Ie, fill: true });
    }
    return V.forEach((Le) => {
      let Ie = "q-date__calendar-item ";
      Le.fill === true ? Ie += "q-date__calendar-item--fill" : (Ie += `q-date__calendar-item--${Le.in === true ? "in" : "out"}`, Le.range !== void 0 && (Ie += ` q-date__range${Le.rangeTo === true ? "-to" : Le.rangeFrom === true ? "-from" : ""}`), Le.editRange === true && (Ie += ` q-date__edit-range${Le.editRangeFrom === true ? "-from" : ""}${Le.editRangeTo === true ? "-to" : ""}`), (Le.range !== void 0 || Le.editRange === true) && (Ie += ` text-${Le.color}`)), Le.classes = Ie;
    }), V;
  }), ne = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  he(() => e.modelValue, (V) => {
    if (f === JSON.stringify(V)) f = 0;
    else {
      const K = ie(_.value, w.value);
      it(K.year, K.month, K);
    }
  }), he(x, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), he(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), he(S, (V) => {
    xe(V, w.value, "mask"), _.value = V;
  }), he(p, (V) => {
    xe(_.value, V, "locale"), w.value = V;
  });
  function H(V) {
    f = JSON.stringify(V);
  }
  function oe() {
    const { year: V, month: K, day: se } = y.value, Te = { ...b.value, year: V, month: K, day: se }, Ee = z.value[ll(Te)];
    (Ee === void 0 || Ee.includes(Te.day) === false) && zn(Te), qe(Te.year, Te.month);
  }
  function _e(V) {
    fd(V) === true && (x.value = V);
  }
  function ke(V, K) {
    ["month", "year"].includes(V) && (V === "month" ? ae : ye)(K === true ? -1 : 1);
  }
  function qe(V, K) {
    x.value = "Calendar", it(V, K);
  }
  function Me(V, K) {
    if (e.range === false || !V) {
      I.value = null;
      return;
    }
    const se = Object.assign({ ...b.value }, V), Te = K !== void 0 ? Object.assign({ ...b.value }, K) : se;
    I.value = { init: se, initHash: jn(se), final: Te, finalHash: jn(Te) }, qe(se.year, se.month);
  }
  function He() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(V, K, se) {
    return Qa(V, K, se, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ie(V, K) {
    const se = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (se.length === 0) return ge();
    const Te = se[se.length - 1], Ee = Ve(Te.from !== void 0 ? Te.from : Te, V, K);
    return Ee.dateHash === null ? ge() : Ee;
  }
  function ge() {
    let V, K;
    if (e.defaultYearMonth !== void 0) {
      const se = e.defaultYearMonth.split("/");
      V = parseInt(se[0], 10), K = parseInt(se[1], 10);
    } else {
      const se = y.value !== void 0 ? y.value : s();
      V = se.year, K = se.month;
    }
    return { year: V, month: K, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: V + "/" + rt(K) + "/01" };
  }
  function ae(V) {
    let K = b.value.year, se = Number(b.value.month) + V;
    se === 13 ? (se = 1, K++) : se === 0 && (se = 12, K--), it(K, se), D.value === true && jt("month");
  }
  function ye(V) {
    const K = Number(b.value.year) + V;
    it(K, b.value.month), D.value === true && jt("year");
  }
  function Ce(V) {
    it(V, b.value.month), x.value = e.defaultView === "Years" ? "Months" : "Calendar", D.value === true && jt("year");
  }
  function Fe(V) {
    it(b.value.year, V), x.value = "Calendar", D.value === true && jt("month");
  }
  function $e(V, K) {
    var _a2;
    (((_a2 = z.value[K]) == null ? void 0 : _a2.includes(V.day)) === true ? ue : zn)(V);
  }
  function We(V) {
    return { year: V.year, month: V.month, day: V.day };
  }
  function it(V, K, se) {
    if (we.value !== null && V <= we.value.year && ((K < we.value.month || V < we.value.year) && (K = we.value.month), V = we.value.year), C.value !== null && V >= C.value.year && ((K > C.value.month || V > C.value.year) && (K = C.value.month), V = C.value.year), se !== void 0) {
      const { hour: Ee, minute: Ge, second: Le, millisecond: Ie, timezoneOffset: at, timeHash: cn } = se;
      Object.assign(b.value, { hour: Ee, minute: Ge, second: Le, millisecond: Ie, timezoneOffset: at, timeHash: cn });
    }
    const Te = V + "/" + rt(K) + "/01";
    Te !== b.value.dateHash && (k.value = b.value.dateHash < Te == (a.lang.rtl !== true) ? "left" : "right", V !== b.value.year && (O.value = k.value), Xe(() => {
      L.value = V - V % Dn - (V < 0 ? Dn : 0), Object.assign(b.value, { year: V, month: K, day: 1, dateHash: Te });
    }));
  }
  function xt(V, K, se) {
    const Te = V !== null && V.length === 1 && e.multiple === false ? V[0] : V, { reason: Ee, details: Ge } = tl(K, se);
    H(Te), n("update:modelValue", Te, Ee, Ge);
  }
  function jt(V) {
    const K = j.value[0] !== void 0 && j.value[0].dateHash !== null ? { ...j.value[0] } : { ...b.value };
    Xe(() => {
      K.year = b.value.year, K.month = b.value.month;
      const se = e.calendar !== "persian" ? new Date(K.year, K.month, 0).getDate() : io(K.year, K.month);
      K.day = Math.min(Math.max(1, K.day), se);
      const Te = ln(K), { details: Ee } = tl("", K);
      H(Te), n("update:modelValue", Te, V, Ee);
    });
  }
  function tl(V, K) {
    return K.from !== void 0 ? { reason: `${V}-range`, details: { ...We(K.target), from: We(K.from), to: We(K.to) } } : { reason: `${V}-day`, details: We(K) };
  }
  function ln(V, K, se) {
    return V.from !== void 0 ? { from: pe.value(V.from, K, se), to: pe.value(V.to, K, se) } : pe.value(V, K, se);
  }
  function zn(V) {
    let K;
    if (e.multiple === true) if (V.from !== void 0) {
      const se = jn(V.from), Te = jn(V.to), Ee = j.value.filter((Le) => Le.dateHash < se || Le.dateHash > Te), Ge = Y.value.filter(({ from: Le, to: Ie }) => Ie.dateHash < se || Le.dateHash > Te);
      K = Ee.concat(Ge).concat(V).map((Le) => ln(Le));
    } else {
      const se = N.value.slice();
      se.push(ln(V)), K = se;
    }
    else K = ln(V);
    xt(K, "add", V);
  }
  function ue(V) {
    if (e.noUnset === true) return;
    let K = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const se = ln(V);
      V.from !== void 0 ? K = e.modelValue.filter((Te) => Te.from !== void 0 ? Te.from !== se.from && Te.to !== se.to : true) : K = e.modelValue.filter((Te) => Te !== se), K.length === 0 && (K = null);
    }
    xt(K, "remove", V);
  }
  function xe(V, K, se) {
    const Te = j.value.concat(Y.value).map((Ge) => ln(Ge, V, K)).filter((Ge) => Ge.from !== void 0 ? Ge.from.dateHash !== null && Ge.to.dateHash !== null : Ge.dateHash !== null), Ee = (e.multiple === true ? Te : Te[0]) || null;
    H(Ee), n("update:modelValue", Ee, se);
  }
  function Oe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + be.value, class: "q-date__header-subtitle q-date__header-link " + (x.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      x.value = "Years";
    }, onKeyup(V) {
      V.keyCode === 13 && (x.value = "Years");
    } }) }, [be.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ot, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + M.value, class: "q-date__header-title-label q-date__header-link " + (x.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      x.value = "Calendar";
    }, onKeyup(V) {
      V.keyCode === 13 && (x.value = "Calendar");
    } }) }, [M.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, ariaLabel: a.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: oe }) : null])]);
  }
  function Be({ label: V, type: K, key: se, dir: Te, goTo: Ee, boundaries: Ge, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[0], ariaLabel: K === "Years" ? a.lang.date.prevYear : a.lang.date.prevMonth, tabindex: i.value, disable: Ge.prev === false, ...o("go-#" + K, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ot, { name: "q-transition--jump-" + Te }, () => d("div", { key: se }, [d(Ze, { flat: true, dense: true, noCaps: true, label: V, tabindex: i.value, ...o("view#" + K, { onClick: () => {
      x.value = K;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: B.value[1], ariaLabel: K === "Years" ? a.lang.date.nextYear : a.lang.date.nextMonth, tabindex: i.value, disable: Ge.next === false, ...o("go+#" + K, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: k.value, goTo: ae, boundaries: E.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: O.value, goTo: ye, boundaries: E.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, J.value.map((V) => d("div", { class: "q-date__calendar-item" }, [d("div", V)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ot, { name: "q-transition--slide-" + k.value }, () => d("div", { key: Q.value, class: "q-date__calendar-days fit" }, ce.value.map((V) => d("div", { class: V.classes }, [V.in === true ? d(Ze, { class: V.today === true ? "q-date__today" : "", dense: true, flat: V.flat, unelevated: V.unelevated, color: V.color, textColor: V.textColor, label: V.i, tabindex: i.value, ...o("day#" + V.i, { onClick: () => {
    yt(V.i);
  }, onMouseover: () => {
    ht(V.i);
  } }) }, V.event !== false ? () => d("div", { class: "q-date__event bg-" + V.event }) : null) : d("div", "" + V.i)]))))])])], Months() {
    const V = b.value.year === y.value.year, K = (Te) => we.value !== null && b.value.year === we.value.year && we.value.month > Te || C.value !== null && b.value.year === C.value.year && C.value.month < Te, se = w.value.monthsShort.map((Te, Ee) => {
      const Ge = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: V === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Ge !== true, label: Te, unelevated: Ge, color: Ge === true ? $.value : null, textColor: Ge === true ? q.value : null, tabindex: i.value, disable: K(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Fe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && se.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: O.value, goTo: ye, boundaries: E.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, se);
  }, Years() {
    const V = L.value, K = V + Dn, se = [], Te = (Ee) => we.value !== null && we.value.year > Ee || C.value !== null && C.value.year < Ee;
    for (let Ee = V; Ee <= K; Ee++) {
      const Ge = b.value.year === Ee;
      se.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Ge, label: Ee, dense: true, unelevated: Ge, color: Ge === true ? $.value : null, textColor: Ge === true ? q.value : null, tabindex: i.value, disable: Te(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[0], ariaLabel: a.lang.date.prevRangeYears(Dn), tabindex: i.value, disable: Te(V), ...o("y-", { onClick: () => {
      L.value -= Dn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, se), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: B.value[1], ariaLabel: a.lang.date.nextRangeYears(Dn), tabindex: i.value, disable: Te(K), ...o("y+", { onClick: () => {
      L.value += Dn;
    } }) })])]);
  } };
  function yt(V) {
    const K = { ...b.value, day: V };
    if (e.range === false) {
      $e(K, Q.value);
      return;
    }
    if (I.value === null) {
      const se = ce.value.find((Ee) => Ee.fill !== true && Ee.i === V);
      if (e.noUnset !== true && se.range !== void 0) {
        ue({ target: K, from: se.range.from, to: se.range.to });
        return;
      }
      if (se.selected === true) {
        ue(K);
        return;
      }
      const Te = jn(K);
      I.value = { init: K, initHash: Te, final: K, finalHash: Te }, n("rangeStart", We(K));
    } else {
      const se = I.value.initHash, Te = jn(K), Ee = se <= Te ? { from: I.value.init, to: K } : { from: K, to: I.value.init };
      I.value = null, zn(se === Te ? K : { target: K, ...Ee }), n("rangeEnd", { from: We(Ee.from), to: We(Ee.to) });
    }
  }
  function ht(V) {
    if (I.value !== null) {
      const K = { ...b.value, day: V };
      Object.assign(I.value, { final: K, finalHash: jn(K) });
    }
  }
  return Object.assign(l, { setToday: oe, setView: _e, offsetCalendar: ke, setCalendarTo: qe, setEditingRange: Me }), () => {
    const V = [d("div", { class: "q-date__content col relative-position" }, [d(Ot, { name: "q-transition--fade" }, Ue[x.value])])], K = Pe(t.default);
    return K !== void 0 && V.push(d("div", { class: "q-date__actions" }, K)), e.name !== void 0 && e.disable !== true && m(V, "push"), d("div", { class: T.value, ...ne.value }, [Oe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, V)]);
  };
} });
function ah(e, t, n) {
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
var Va = 0, Ni, ji, Ka, Ui = false, vd, md, hd, ql = null;
function zp(e) {
  Ip(e) && Ne(e);
}
function Ip(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = Zb(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), a = n || l ? e.deltaY : e.deltaX;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Wy(o, l)) return l ? a < 0 && o.scrollTop === 0 ? true : a > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : a < 0 && o.scrollLeft === 0 ? true : a > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function gd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Qr(e) {
  Ui !== true && (Ui = true, requestAnimationFrame(() => {
    Ui = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Ka === void 0 || t !== window.innerHeight) && (Ka = n - t, document.scrollingElement.scrollTop = l), l > Ka && (document.scrollingElement.scrollTop -= Math.ceil((l - Ka) / 8));
  }));
}
function bd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: a } = window.getComputedStyle(t);
    Ni = oi(window), ji = gl(window), vd = t.style.left, md = t.style.top, hd = window.location.href, t.style.left = `-${Ni}px`, t.style.top = `-${ji}px`, a !== "hidden" && (a === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Qr, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", gd, dt.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", zp, dt.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Qr, dt.passiveCapture)) : window.removeEventListener("scroll", gd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = vd, t.style.top = md, window.location.href === hd && window.scrollTo(Ni, ji), Ka = void 0);
}
function Fu(e) {
  let t = "add";
  if (e === true) {
    if (Va++, ql !== null) {
      clearTimeout(ql), ql = null;
      return;
    }
    if (Va > 1) return;
  } else {
    if (Va === 0 || (Va--, Va > 0)) return;
    if (t = "remove", ze.is.ios === true && ze.is.nativeMobile === true) {
      ql !== null && clearTimeout(ql), ql = setTimeout(() => {
        bd(t), ql = null;
      }, 100);
      return;
    }
  }
  bd(t);
}
function rh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Fu(t));
  } };
}
var Kr = 0, Dp = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, yd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, si = ve({ name: "QDialog", inheritAttrs: false, props: { ...Ea, ...Fl, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...$a, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), r = U(null), o = U(false), i = U(false);
  let u = null, c = null, s, f;
  const h = v(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = rh(), { registerTimeout: g } = Xn(), { registerTick: _, removeTick: w } = ga(), { transitionProps: S, transitionStyle: p } = ri(e, () => yd[e.position][0], () => yd[e.position][1]), y = v(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: x, portalIsAccessible: A, renderPortal: k } = Cs(a, r, be, "dialog"), { hide: O } = Aa({ showing: o, hideOnRouteChange: h, handleShow: D, handleHide: N, processOnMount: true }), { addToHistory: P, removeFromHistory: L } = ah(o, O, h), I = v(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Dp[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), T = v(() => o.value === true && e.seamless !== true), $ = v(() => e.autoClose === true ? { onClick: M } : {}), q = v(() => [`q-dialog fullscreen no-pointer-events q-dialog--${T.value === true ? "modal" : "seamless"}`, l.class]);
  he(() => e.maximized, (B) => {
    o.value === true && W(B);
  }), he(T, (B) => {
    m(B), B === true ? (qm(X), Cm(le)) : (Ru(X), Mo(le));
  });
  function D(B) {
    var _a2;
    P(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, W(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a2 = document.activeElement) == null ? void 0 : _a2.blur(), _(j)) : w(), g(() => {
      if (a.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: R, bottom: J } = document.activeElement.getBoundingClientRect(), { innerHeight: F } = window, re = window.visualViewport !== void 0 ? window.visualViewport.height : F;
          R > 0 && J > re / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - re, J >= F ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + J - re / 2))), document.activeElement.scrollIntoView();
        }
        f = true, r.value.click(), f = false;
      }
      b(true), i.value = false, n("show", B);
    }, e.transitionDuration);
  }
  function N(B) {
    w(), L(), pe(true), i.value = true, x(), c !== null && ((((B == null ? void 0 : B.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      x(true), i.value = false, n("hide", B);
    }, e.transitionDuration);
  }
  function j(B) {
    Ra(() => {
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
  function Y(B) {
    B && typeof B.focus == "function" ? B.focus({ preventScroll: true }) : j(), n("shake");
    const R = r.value;
    R !== null && (R.classList.remove("q-animate--scale"), R.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value !== null && (R.classList.remove("q-animate--scale"), j());
    }, 170));
  }
  function le() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && Y() : (n("escapeKey"), O()));
  }
  function pe(B) {
    u !== null && (clearTimeout(u), u = null), (B === true || o.value === true) && (W(false), e.seamless !== true && (m(false), Ru(X), Mo(le))), B !== true && (c = null);
  }
  function W(B) {
    B === true ? s !== true && (Kr < 1 && document.body.classList.add("q-body--dialog"), Kr++, s = true) : s === true && (Kr < 2 && document.body.classList.remove("q-body--dialog"), Kr--, s = false);
  }
  function M(B) {
    f !== true && (O(B), n("click", B));
  }
  function ee(B) {
    e.persistent !== true && e.noBackdropDismiss !== true ? O(B) : e.noShake !== true && Y();
  }
  function X(B) {
    e.allowFocusOutside !== true && A.value === true && dm(r.value, B.target) !== true && j('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(a.proxy, { focus: j, shake: Y, __updateRefocusTarget(B) {
    c = B || null;
  } }), Ke(pe);
  function be() {
    return d("div", { role: "dialog", "aria-modal": T.value === true ? "true" : "false", ...l, class: q.value }, [d(Ot, { name: "q-transition--fade", appear: true }, () => T.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: ee }) : null), d(Ot, S.value, () => o.value === true ? d("div", { ref: r, class: I.value, style: p.value, tabindex: -1, ...$.value }, Pe(t.default)) : null)]);
  }
  return k;
} }), pd = 150, _d = ve({ name: "QDrawer", inheritAttrs: false, props: { ...Ea, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...$a, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), { proxy: { $q: r } } = a, o = lt(e, r), { preventBodyScroll: i } = rh(), { registerTimeout: u, removeTimeout: c } = Xn(), s = qt(Kl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let f, h = null, m;
  const g = U(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = v(() => e.mini === true && g.value !== true), w = v(() => _.value === true ? e.miniWidth : e.width), S = U(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = v(() => e.persistent !== true && (g.value === true || pe.value === true));
  function y(H, oe) {
    if (k(), H !== false && s.animate(), E(0), g.value === true) {
      const _e = s.instances[N.value];
      (_e == null ? void 0 : _e.belowBreakpoint) === true && _e.hide(false), z(1), s.isContainer.value !== true && i(true);
    } else z(0), H !== false && Z(false);
    u(() => {
      H !== false && Z(true), oe !== true && n("show", H);
    }, pd);
  }
  function b(H, oe) {
    O(), H !== false && s.animate(), z(0), E(I.value * w.value), me(), oe !== true ? u(() => {
      n("hide", H);
    }, pd) : c();
  }
  const { show: x, hide: A } = Aa({ showing: S, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: k, removeFromHistory: O } = ah(S, A, p), P = { belowBreakpoint: g, hide: A }, L = v(() => e.side === "right"), I = v(() => (r.lang.rtl === true ? -1 : 1) * (L.value === true ? 1 : -1)), T = U(0), $ = U(false), q = U(false), D = U(w.value * I.value), N = v(() => L.value === true ? "left" : "right"), j = v(() => S.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), Y = v(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(L.value ? "R" : "L") !== -1 || r.platform.is.ios === true && s.isContainer.value === true), le = v(() => e.overlay === false && S.value === true && g.value === false), pe = v(() => e.overlay === true && S.value === true && g.value === false), W = v(() => "fullscreen q-drawer__backdrop" + (S.value === false && $.value === false ? " hidden" : "")), M = v(() => ({ backgroundColor: `rgba(0,0,0,${T.value * 0.4})` })), ee = v(() => L.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), X = v(() => L.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), be = v(() => {
    const H = {};
    return s.header.space === true && ee.value === false && (Y.value === true ? H.top = `${s.header.offset}px` : s.header.space === true && (H.top = `${s.header.size}px`)), s.footer.space === true && X.value === false && (Y.value === true ? H.bottom = `${s.footer.offset}px` : s.footer.space === true && (H.bottom = `${s.footer.size}px`)), H;
  }), B = v(() => {
    const H = { width: `${w.value}px`, transform: `translateX(${D.value}px)` };
    return g.value === true ? H : Object.assign(H, be.value);
  }), R = v(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), J = v(() => `q-drawer q-drawer--${e.side}` + (q.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + ($.value === true ? " no-transition" : S.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (Y.value === true || le.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (ee.value === true ? " q-drawer--top-padding" : ""))), F = v(() => {
    const H = r.lang.rtl === true ? e.side : N.value;
    return [[gn, Q, void 0, { [H]: true, mouse: true }]];
  }), re = v(() => {
    const H = r.lang.rtl === true ? N.value : e.side;
    return [[gn, de, void 0, { [H]: true, mouse: true }]];
  }), we = v(() => {
    const H = r.lang.rtl === true ? N.value : e.side;
    return [[gn, de, void 0, { [H]: true, mouse: true, mouseAllDir: true }]];
  });
  function C() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  he(g, (H) => {
    H === true ? (f = S.value, S.value === true && A(false)) : e.overlay === false && e.behavior !== "mobile" && f !== false && (S.value === true ? (E(0), z(0), me()) : x(false));
  }), he(() => e.side, (H, oe) => {
    s.instances[oe] === P && (s.instances[oe] = void 0, s[oe].space = false, s[oe].offset = 0), s.instances[H] = P, s[H].size = w.value, s[H].space = le.value, s[H].offset = j.value;
  }), he(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && C();
  }), he(() => e.behavior + e.breakpoint, C), he(s.isContainer, (H) => {
    S.value === true && i(H !== true), H === true && C();
  }), he(s.scrollbarWidth, () => {
    E(S.value === true ? 0 : void 0);
  }), he(j, (H) => {
    fe("offset", H);
  }), he(le, (H) => {
    n("onLayout", H), fe("space", H);
  }), he(L, () => {
    E();
  }), he(w, (H) => {
    E(), ne(e.miniToOverlay, H);
  }), he(() => e.miniToOverlay, (H) => {
    ne(H, w.value);
  }), he(() => r.lang.rtl, () => {
    E();
  }), he(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (te(), s.animate());
  }), he(_, (H) => {
    n("miniState", H);
  });
  function E(H) {
    H === void 0 ? Xe(() => {
      H = S.value === true ? 0 : w.value, E(I.value * H);
    }) : (s.isContainer.value === true && L.value === true && (g.value === true || Math.abs(H) === w.value) && (H += I.value * s.scrollbarWidth.value), D.value = H);
  }
  function z(H) {
    T.value = H;
  }
  function Z(H) {
    const oe = H === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    oe !== "" && document.body.classList[oe]("q-body--drawer-toggle");
  }
  function te() {
    h !== null && clearTimeout(h), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), q.value = true, h = setTimeout(() => {
      var _a2, _b2;
      h = null, q.value = false, (_b2 = (_a2 = a == null ? void 0 : a.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function Q(H) {
    if (S.value !== false) return;
    const oe = w.value, _e = ct(H.distance.x, 0, oe);
    if (H.isFinal === true) {
      _e >= Math.min(75, oe) === true ? x() : (s.animate(), z(0), E(I.value * oe)), $.value = false;
      return;
    }
    E((r.lang.rtl === true ? L.value !== true : L.value) ? Math.max(oe - _e, 0) : Math.min(0, _e - oe)), z(ct(_e / oe, 0, 1)), H.isFirst === true && ($.value = true);
  }
  function de(H) {
    if (S.value !== true) return;
    const oe = w.value, _e = H.direction === e.side, ke = (r.lang.rtl === true ? _e !== true : _e) ? ct(H.distance.x, 0, oe) : 0;
    if (H.isFinal === true) {
      Math.abs(ke) < Math.min(75, oe) === true ? (s.animate(), z(1), E(0)) : A(), $.value = false;
      return;
    }
    E(I.value * ke), z(ct(1 - ke / oe, 0, 1)), H.isFirst === true && ($.value = true);
  }
  function me() {
    i(false), Z(true);
  }
  function fe(H, oe) {
    s.update(e.side, H, oe);
  }
  function ce(H, oe) {
    H.value !== oe && (H.value = oe);
  }
  function ne(H, oe) {
    fe("size", H === true ? e.miniWidth : oe);
  }
  return s.instances[e.side] = P, ne(e.miniToOverlay, w.value), fe("space", le.value), fe("offset", j.value), e.showIfAbove === true && e.modelValue !== true && S.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", le.value), n("miniState", _.value), f = e.showIfAbove === true;
    const H = () => {
      (S.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      Xe(H);
      return;
    }
    m = he(s.totalWidth, () => {
      m(), m = void 0, S.value === false && e.showIfAbove === true && g.value === false ? x(false) : H();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), S.value === true && me(), s.instances[e.side] === P && (s.instances[e.side] = void 0, fe("size", 0), fe("offset", 0), fe("space", false));
  }), () => {
    const H = [];
    g.value === true && (e.noSwipeOpen === false && H.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), F.value)), H.push(pn("div", { ref: "backdrop", class: W.value, style: M.value, "aria-hidden": "true", onClick: A }, void 0, "backdrop", e.noSwipeBackdrop !== true && S.value === true, () => we.value)));
    const oe = _.value === true && t.mini !== void 0, _e = [d("div", { ...l, key: "" + oe, class: [R.value, l.class] }, oe === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && S.value === true && _e.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), H.push(pn("aside", { ref: "content", class: J.value, style: B.value }, _e, "contentclose", e.noSwipeClose !== true && g.value === true, () => re.value)), d("div", { class: "q-drawer-container" }, H);
  };
} });
function oh(e, t) {
  if (t && e === t) return null;
  const n = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(n) === true) return e;
  const l = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, a = l.display;
  return a === "block" || a === "table" ? e : oh(e.parentNode);
}
function Qi(e, t, n) {
  return !e || e === document.body ? false : n === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function ih(e, t, n) {
  if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count);
  else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0);
  else for (let l = 0; t.count !== 0 && l < e.childNodes.length; l++) n = ih(e.childNodes[l], t, n);
  return n;
}
var Hp = /^https?:\/\//, Np = class {
  constructor(e, t) {
    this.el = e, this.eVm = t, this._range = null;
  }
  get selection() {
    if (this.el) {
      const e = document.getSelection();
      if (Qi(e.anchorNode, this.el, true) && Qi(e.focusNode, this.el, true)) return e;
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
    return e !== null ? oh(e, this.el) : null;
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
    if (n.focusNode && Qi(n.focusNode, l)) for (t = n.focusNode, e = n.focusOffset; t && t !== l; ) t !== this.el && t.previousSibling ? (t = t.previousSibling, e += t.textContent.length) : t = t.parentNode;
    this.savedPos = e;
  }
  restorePosition(e = 0) {
    if (this.savedPos > 0 && this.savedPos < e) {
      const t = window.getSelection(), n = ih(this.el, { count: this.savedPos });
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
        this.eVm.editLinkUrl.value = Hp.test(r) ? r : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(a.getRangeAt(0));
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
}, jp = ve({ name: "QTooltip", inheritAttrs: false, props: { ...gm, ...Ea, ...Fl, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Fl.transitionShow, default: "jump-down" }, transitionHide: { ...Fl.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Ro }, self: { type: String, default: "top middle", validator: Ro }, offset: { type: Array, default: () => [14, 14], validator: Mm }, scrollTarget: Wl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...$a], setup(e, { slots: t, emit: n, attrs: l }) {
  let a, r;
  const o = Se(), { proxy: { $q: i } } = o, u = U(null), c = U(false), s = v(() => Po(e.anchor, i.lang.rtl)), f = v(() => Po(e.self, i.lang.rtl)), h = v(() => e.persistent !== true), { registerTick: m, removeTick: g } = ga(), { registerTimeout: _ } = Xn(), { transitionProps: w, transitionStyle: S } = ri(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = ym(e, pe), { anchorEl: x, canShow: A, anchorEvents: k } = Ss({ showing: c, configureAnchorEl: le }), { show: O, hide: P } = Aa({ showing: c, canShow: A, handleShow: $, handleHide: q, hideOnRouteChange: h, processOnMount: true });
  Object.assign(k, { delayShow: j, delayHide: Y });
  const { showPortal: L, hidePortal: I, renderPortal: T } = Cs(o, u, M, "tooltip");
  if (i.platform.is.mobile === true) {
    const ee = { anchorEl: x, innerRef: u, onClickOutside(be) {
      return P(be), be.target.classList.contains("q-dialog__backdrop") && Ne(be), true;
    } }, X = v(() => e.modelValue === null && e.persistent !== true && c.value === true);
    he(X, (be) => {
      (be === true ? Tm : Ao)(ee);
    }), Ke(() => {
      Ao(ee);
    });
  }
  function $(ee) {
    L(), m(() => {
      r = new MutationObserver(() => N()), r.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), N(), pe();
    }), a === void 0 && (a = he(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, N)), _(() => {
      L(true), n("show", ee);
    }, e.transitionDuration);
  }
  function q(ee) {
    g(), I(), D(), _(() => {
      I(true), n("hide", ee);
    }, e.transitionDuration);
  }
  function D() {
    r !== void 0 && (r.disconnect(), r = void 0), a !== void 0 && (a(), a = void 0), b(), Wt(k, "tooltipTemp");
  }
  function N() {
    ks({ targetEl: u.value, offset: e.offset, anchorEl: x.value, anchorOrigin: s.value, selfOrigin: f.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function j(ee) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const X = x.value, be = ["touchmove", "touchcancel", "touchend", "click"].map((B) => [X, B, "delayHide", "passiveCapture"]);
      Ct(k, "tooltipTemp", be);
    }
    _(() => {
      O(ee);
    }, e.delay);
  }
  function Y(ee) {
    i.platform.is.mobile === true && (Wt(k, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      P(ee);
    }, e.hideDelay);
  }
  function le() {
    if (e.noParentEvent === true || x.value === null) return;
    const ee = i.platform.is.mobile === true ? [[x.value, "touchstart", "delayShow", "passive"]] : [[x.value, "mouseenter", "delayShow", "passive"], [x.value, "mouseleave", "delayHide", "passive"]];
    Ct(k, "anchor", ee);
  }
  function pe() {
    if (x.value !== null || e.scrollTarget !== void 0) {
      p.value = Vn(x.value, e.scrollTarget);
      const ee = e.noParentEvent === true ? N : P;
      y(p.value, ee);
    }
  }
  function W() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, S.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function M() {
    return d(Ot, w.value, W);
  }
  return Ke(D), Object.assign(o.proxy, { updatePosition: N }), T;
} }), Sa = ve({ name: "QItem", props: { ...nt, ...$r, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = li(), s = U(null), f = U(null), h = v(() => e.clickable === true || r.value === true || e.tag === "label"), m = v(() => e.disable !== true && h.value === true), g = v(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (a.value === true ? " q-item--dark" : "") + (r.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = v(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(y) {
    m.value === true && (f.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? f.value.focus() : document.activeElement === f.value && s.value.focus()), c(y));
  }
  function S(y) {
    if (m.value === true && yn(y, [13, 32]) === true) {
      Ne(y), y.qKeyEvent = true;
      const b = new MouseEvent("click", y);
      b.qKeyEvent = true, s.value.dispatchEvent(b);
    }
    n("keyup", y);
  }
  function p() {
    const y = Er(t.default, []);
    return m.value === true && y.unshift(d("div", { class: "q-focus-helper", tabindex: -1, ref: f })), y;
  }
  return () => {
    const y = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: S };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = ve({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = v(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function uh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Vs(e) {
  return d("div", { class: "q-editor__toolbar-group" }, e);
}
function sh(e, t, n, l = false) {
  const a = l || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), r = [];
  if (t.tip && e.$q.platform.is.desktop) {
    const o = t.key ? d("div", [d("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    r.push(d(jp, { delay: 1e3 }, () => [d("div", { innerHTML: t.tip }), o]));
  }
  return d(Ze, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: a ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: a && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(o) {
    n == null ? void 0 : n(), uh(o, t, e);
  } }, () => r);
}
function Up(e, t) {
  const n = t.list === "only-icons";
  let l = t.label, a = t.icon !== null ? t.icon : void 0, r, o;
  function i() {
    c.component.proxy.hide();
  }
  if (n) o = t.options.map((s) => {
    const f = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return f && (l = s.tip, a = s.icon !== null ? s.icon : void 0), sh(e, s, i, f);
  }), r = e.toolbarBackgroundClass.value, o = [Vs(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, f = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, _ = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      _ && (l = m.tip, a = m.icon !== null ? m.icon : void 0);
      const w = m.htmlTip;
      return d(Sa, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(S) {
        var _a2;
        i(), (S == null ? void 0 : S.qAvoidFocus) !== true && ((_a2 = e.contentRef.value) == null ? void 0 : _a2.focus()), e.caret.restore(), uh(S, m, e);
      } }, () => [h === true ? null : d(mn, { class: _ ? s : f, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(mn, w ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), r = [e.toolbarBackgroundClass.value, f];
  }
  const u = t.highlight && l !== t.label, c = d(rp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : a, contentClass: r, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function Qp(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Vs(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? Up(e, n) : sh(e, n))));
}
function Kp(e, t, n, l = {}) {
  const a = Object.keys(l);
  if (a.length === 0) return {};
  const r = { default_font: { cmd: "fontName", param: e, icon: n, tip: t } };
  return a.forEach((o) => {
    const i = l[o];
    r[o] = { cmd: "fontName", param: i, icon: n, tip: i, htmlTip: `<font face="${i}">${i}</font>` };
  }), r;
}
function Wp(e) {
  if (e.caret) {
    const t = e.props.toolbarColor || e.props.toolbarTextColor;
    let n = e.editLinkUrl.value;
    const l = () => {
      e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", false, n === "" ? " " : n), e.editLinkUrl.value = null;
    };
    return [d("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), d("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: n, onInput: (a) => {
      wt(a), n = a.target.value;
    }, onKeydown: (a) => {
      if (Ql(a) !== true) switch (a.keyCode) {
        case 13:
          return Vt(a), l();
        case 27:
          Vt(a), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
          break;
      }
    } }), Vs([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var wd = /^on[A-Z]/;
function ch() {
  const { attrs: e, vnode: t } = Se(), n = { listeners: U({}), attributes: U({}) };
  function l() {
    const a = {}, r = {};
    for (const o in e) o !== "class" && o !== "style" && wd.test(o) === false && (a[o] = e[o]);
    for (const o in t.props) wd.test(o) === true && (r[o] = t.props[o]);
    n.attributes.value = a, n.listeners.value = r;
  }
  return Ta(l), l(), n;
}
var Yp = Object.prototype.toString, Ki = Object.prototype.hasOwnProperty, Gp = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function Sd(e) {
  if (e !== Object(e) || Gp.has(Yp.call(e)) === true || e.constructor && Ki.call(e, "constructor") === false && Ki.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Ki.call(e, t);
}
function dh() {
  let e, t, n, l, a, r, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((a = Array.isArray(l)) || Sd(l) === true) ? (a === true ? r = Array.isArray(n) === true ? n : [] : r = Sd(n) === true ? n : {}, o[t] = dh(u, r, l)) : l !== void 0 && (o[t] = l));
  return o;
}
ve({ name: "QEditor", props: { ...nt, ...Rs, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ps, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Ls(), u = ch(), c = U(null), s = U(null), f = U(null), h = U(false), m = v(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const S = v(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = v(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = v(() => {
    const B = a.lang.editor, R = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: R.bold, tip: B.bold, key: 66 }, italic: { cmd: "italic", icon: R.italic, tip: B.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: R.strikethrough, tip: B.strikethrough, key: 83 }, underline: { cmd: "underline", icon: R.underline, tip: B.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: R.unorderedList, tip: B.unorderedList }, ordered: { cmd: "insertOrderedList", icon: R.orderedList, tip: B.orderedList }, subscript: { cmd: "subscript", icon: R.subscript, tip: B.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: R.superscript, tip: B.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (J) => J.caret && !J.caret.can("link"), icon: R.hyperlink, tip: B.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: R.toggleFullscreen, tip: B.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: R.viewSource, tip: B.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: R.quote, tip: B.quote, key: 81 }, left: { cmd: "justifyLeft", icon: R.left, tip: B.left }, center: { cmd: "justifyCenter", icon: R.center, tip: B.center }, right: { cmd: "justifyRight", icon: R.right, tip: B.right }, justify: { cmd: "justifyFull", icon: R.justify, tip: B.justify }, print: { type: "no-state", cmd: "print", icon: R.print, tip: B.print, key: 80 }, outdent: { type: "no-state", disable: (J) => J.caret && !J.caret.can("outdent"), cmd: "outdent", icon: R.outdent, tip: B.outdent }, indent: { type: "no-state", disable: (J) => J.caret && !J.caret.can("indent"), cmd: "indent", icon: R.indent, tip: B.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: R.removeFormat, tip: B.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: R.hr, tip: B.hr }, undo: { type: "no-state", cmd: "undo", icon: R.undo, tip: B.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: R.redo, tip: B.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: R.heading1 || R.heading, tip: B.heading1, htmlTip: `<h1 class="q-ma-none">${B.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: R.heading2 || R.heading, tip: B.heading2, htmlTip: `<h2 class="q-ma-none">${B.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: R.heading3 || R.heading, tip: B.heading3, htmlTip: `<h3 class="q-ma-none">${B.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: R.heading4 || R.heading, tip: B.heading4, htmlTip: `<h4 class="q-ma-none">${B.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: R.heading5 || R.heading, tip: B.heading5, htmlTip: `<h5 class="q-ma-none">${B.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: R.heading6 || R.heading, tip: B.heading6, htmlTip: `<h6 class="q-ma-none">${B.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: R.heading, tip: B.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: R.code, htmlTip: `<code>${B.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: R.size1 || R.size, tip: B.size1, htmlTip: `<font size="1">${B.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: R.size2 || R.size, tip: B.size2, htmlTip: `<font size="2">${B.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: R.size3 || R.size, tip: B.size3, htmlTip: `<font size="3">${B.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: R.size4 || R.size, tip: B.size4, htmlTip: `<font size="4">${B.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: R.size5 || R.size, tip: B.size5, htmlTip: `<font size="5">${B.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: R.size6 || R.size, tip: B.size6, htmlTip: `<font size="6">${B.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: R.size7 || R.size, tip: B.size7, htmlTip: `<font size="7">${B.size7}</font>` } };
  }), b = v(() => {
    const B = e.definitions || {}, R = e.definitions || e.fonts ? dh(true, {}, y.value, B, Kp(g, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((J) => J.map((F) => {
      if (F.options) return { type: "dropdown", icon: F.icon, label: F.label, size: "sm", dense: true, fixedLabel: F.fixedLabel, fixedIcon: F.fixedIcon, highlight: F.highlight, list: F.list, options: F.options.map((we) => R[we]) };
      const re = R[F];
      return re ? re.type === "no-state" || B[F] && (re.cmd === void 0 || y.value[re.cmd] && y.value[re.cmd].type === "no-state") ? re : Object.assign({ type: "toggle" }, re) : { type: "slot", slot: F };
    }));
  }), x = { $q: a, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: M, isViewingSource: h, editLinkUrl: f, toolbarBackgroundClass: S, buttonProps: p, contentRef: s, buttons: b, setContent: W };
  he(() => e.modelValue, (B) => {
    w !== B && (w = B, W(B, true));
  }), he(f, (B) => {
    n(`link${B ? "Show" : "Hide"}`);
  });
  const A = v(() => e.toolbar && e.toolbar.length !== 0), k = v(() => {
    const B = {}, R = (J) => {
      J.key && (B[J.key] = { cmd: J.cmd, param: J.param });
    };
    return b.value.forEach((J) => {
      J.forEach((F) => {
        F.options ? F.options.forEach(R) : R(F);
      });
    }), B;
  }), O = v(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), P = v(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (r.value === true ? " q-editor--dark q-dark" : "")), L = v(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), I = v(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function T() {
    if (s.value !== null) {
      const B = `inner${h.value === true ? "Text" : "HTML"}`, R = s.value[B];
      R !== e.modelValue && (w = R, n("update:modelValue", R));
    }
  }
  function $(B) {
    if (n("keydown", B), B.ctrlKey !== true || Ql(B) === true) {
      ee();
      return;
    }
    const R = B.keyCode, J = k.value[R];
    if (J !== void 0) {
      const { cmd: F, param: re } = J;
      Ne(B), M(F, re, false);
    }
  }
  function q(B) {
    ee(), n("click", B);
  }
  function D(B) {
    if (s.value !== null) {
      const { scrollTop: R, scrollHeight: J } = s.value;
      _ = J - R;
    }
    x.caret.save(), n("blur", B);
  }
  function N(B) {
    Xe(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", B);
  }
  function j(B) {
    const R = c.value;
    if (R !== null && R.contains(B.target) === true && (B.relatedTarget === null || R.contains(B.relatedTarget) !== true)) {
      const J = `inner${h.value === true ? "Text" : "HTML"}`;
      x.caret.restorePosition(s.value[J].length), ee();
    }
  }
  function Y(B) {
    const R = c.value;
    R !== null && R.contains(B.target) === true && (B.relatedTarget === null || R.contains(B.relatedTarget) !== true) && (x.caret.savePosition(), ee());
  }
  function le() {
    _ = void 0;
  }
  function pe(B) {
    x.caret.save();
  }
  function W(B, R) {
    if (s.value !== null) {
      R === true && x.caret.savePosition();
      const J = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[J] = B, R === true && (x.caret.restorePosition(s.value[J].length), ee());
    }
  }
  function M(B, R, J = true) {
    X(), x.caret.restore(), x.caret.apply(B, R, () => {
      X(), x.caret.save(), J && ee();
    });
  }
  function ee() {
    setTimeout(() => {
      f.value = null, l.$forceUpdate();
    }, 1);
  }
  function X() {
    Ra(() => {
      var _a2;
      (_a2 = s.value) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  function be() {
    return s.value;
  }
  return ft(() => {
    x.caret = l.caret = new Np(s.value, x), W(e.modelValue), ee(), document.addEventListener("selectionchange", pe);
  }), Ke(() => {
    document.removeEventListener("selectionchange", pe);
  }), Object.assign(l, { runCmd: M, refreshToolbar: ee, focus: X, getContentEl: be }), () => {
    let B;
    if (A.value) {
      const R = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + S.value }, Qp(x))];
      f.value !== null && R.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + S.value }, Wp(x))), B = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, R);
    }
    return d("div", { ref: c, class: P.value, style: { height: o.value === true ? "100%" : null }, ...I.value, onFocusin: j, onFocusout: Y }, [B, d("div", { ref: s, style: O.value, class: L.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: T, onKeydown: $, onClick: q, onBlur: D, onFocus: N, onMousedown: le, onTouchstartPassive: le })]);
  };
} });
var Vu = ve({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = v(() => parseInt(e.lines, 10)), l = v(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = v(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: a.value, class: l.value }, Pe(t.default));
} }), zs = ve({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, a, r, o = null, i = null, u, c;
  function s() {
    a == null ? void 0 : a(), a = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null ? void 0 : r.removeEventListener("transitionend", u), u = null;
  }
  function f(_, w, S) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, a = S;
  }
  function h(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function m(_, w) {
    let S = 0;
    r = _, l === true ? (s(), S = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), f(_, S, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let S;
    r = _, l === true ? s() : (c = "show", _.style.overflowY = "hidden", S = _.scrollHeight), f(_, S, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ot, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), Xp = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Wi = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Nl = ve({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = Se(), n = lt(e, t.proxy.$q), l = v(() => e.vertical === true ? "vertical" : "horizontal"), a = v(() => ` q-separator--${l.value}`), r = v(() => e.inset !== false ? `${a.value}-${Xp[e.inset]}` : ""), o = v(() => `q-separator${a.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = v(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Wi.md}px` : e.spaced in Wi ? `${Wi[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), Tl = as({}), Zp = Object.keys($r);
ve({ name: "QExpansionItem", props: { ...$r, ...Ea, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...$a, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = U(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = U(null), i = ui(), { show: u, hide: c, toggle: s } = Aa({ showing: r });
  let f, h;
  const m = v(() => `q-expansion-item q-item-type q-expansion-item--${r.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = v(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = v(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = v(() => {
    const j = {};
    return Zp.forEach((Y) => {
      j[Y] = e[Y];
    }), j;
  }), S = v(() => _.value === true || e.expandIconToggle !== true), p = v(() => e.expandedIcon !== void 0 && r.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = v(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = v(() => ({ expanded: r.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), x = v(() => {
    const j = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[r.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": j };
  });
  he(() => e.group, (j) => {
    h == null ? void 0 : h(), j !== void 0 && I();
  });
  function A(j) {
    _.value !== true && s(j), n("click", j);
  }
  function k(j) {
    j.keyCode === 13 && O(j, true);
  }
  function O(j, Y) {
    var _a2;
    Y !== true && j.qAvoidFocus !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), s(j), Ne(j);
  }
  function P() {
    n("afterShow");
  }
  function L() {
    n("afterHide");
  }
  function I() {
    f === void 0 && (f = wr()), r.value === true && (Tl[e.group] = f);
    const j = he(r, (le) => {
      le === true ? Tl[e.group] = f : Tl[e.group] === f && delete Tl[e.group];
    }), Y = he(() => Tl[e.group], (le, pe) => {
      pe === f && le !== void 0 && le !== f && c();
    });
    h = () => {
      j(), Y(), Tl[e.group] === f && delete Tl[e.group], h = void 0;
    };
  }
  function T() {
    const j = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, Y = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign(j, { tabindex: 0, ...x.value, onClick: O, onKeyup: k }), Y.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, j, () => Y);
  }
  function $() {
    let j;
    return t.header !== void 0 ? j = [].concat(t.header(b.value)) : (j = [d(mn, () => [d(Vu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Vu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && j[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && j[e.switchToggleSide === true ? "unshift" : "push"](T()), j;
  }
  function q() {
    const j = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return S.value === true && (j.clickable = true, j.onClick = A, Object.assign(j, _.value === true ? w.value : x.value)), d(Sa, j, $);
  }
  function D() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Ov, r.value]]);
  }
  function N() {
    const j = [q(), d(zs, { duration: e.duration, onShow: P, onHide: L }, D)];
    return e.expandSeparator === true && j.push(d(Nl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), d(Nl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), j;
  }
  return e.group !== void 0 && I(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, N())]);
} });
var Jp = ["top", "right", "bottom", "left"], zu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => Jp.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function fh(e, t) {
  return { formClass: v(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: v(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: v(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var e1 = ["up", "right", "down", "left"], t1 = ["left", "center", "right"];
ve({ name: "QFab", props: { ...zu, ...Ea, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...zu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => e1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => t1.includes(e) } }, emits: $a, setup(e, { slots: t }) {
  const n = U(null), l = U(e.modelValue === true), a = ui(), { proxy: { $q: r } } = Se(), { formClass: o, labelProps: i } = fh(e, l), u = v(() => e.persistent !== true), { hide: c, toggle: s } = Aa({ showing: l, hideOnRouteChange: u }), f = v(() => ({ opened: l.value })), h = v(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = v(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = v(() => {
    const p = { id: a.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), _ = v(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function w(p, y) {
    const b = t[p], x = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: x, name: e[y] || r.iconSet.fab[y] }) : d("div", { class: x }, b(f.value));
  }
  function S() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(f.value) : [e.label])), kt(t.tooltip, p);
  }
  return hn(Zv, { showing: l, onChildClick(p) {
    var _a2;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a2 = n.value) == null ? void 0 : _a2.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, onClick: s }, S), d("div", { class: m.value, ...g.value }, Pe(t.default))]);
} });
var vh = { start: "self-end", center: "self-center", end: "self-start" }, n1 = Object.keys(vh);
ve({ name: "QFabAction", props: { ...zu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => n1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = qt(Zv, () => ({ showing: { value: true }, onChildClick: St })), { formClass: a, labelProps: r } = fh(e, l.showing), o = v(() => {
    const f = vh[e.anchor];
    return a.value + (f !== void 0 ? ` ${f}` : "");
  }), i = v(() => e.disable === true || l.showing.value !== true);
  function u(f) {
    l.onChildClick(f), n("click", f);
  }
  function c() {
    const f = [];
    return t.icon !== void 0 ? f.push(t.icon()) : e.icon !== "" && f.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && f[r.value.action](d("div", r.value.data, t.label !== void 0 ? t.label() : [e.label])), kt(t.default, f);
  }
  const s = Se();
  return Object.assign(s.proxy, { click: u }), () => d(Ze, { class: o.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: i.value, onClick: u }, c);
} });
function l1({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = qt(Jv, false);
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
var a1 = [true, false, "ondemand"], r1 = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => a1.includes(e) } };
function o1(e, t) {
  const { props: n, proxy: l } = Se(), a = U(false), r = U(null), o = U(false);
  l1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = v(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = v(() => n.disable !== true && c.value === true && t.value === false), f = v(() => n.error === true || a.value === true), h = v(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  he(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  he(() => n.reactiveRules, (S) => {
    S === true ? u === void 0 && (u = he(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), he(() => n.lazyRules, m), he(e, (S) => {
    S === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, a.value = false, r.value = null, w.cancel();
  }
  function _(S = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (A, k) => {
      A === true && y(), a.value = A, r.value = k || null, t.value = false;
    }, x = [];
    for (let A = 0; A < n.rules.length; A++) {
      const k = n.rules[A];
      let O;
      if (typeof k == "function" ? O = k(S, oo) : typeof k == "string" && oo[k] !== void 0 && (O = oo[k](S)), O === false || typeof O == "string") return b(true, O), false;
      O !== true && O !== void 0 && x.push(O);
    }
    return x.length === 0 ? (b(false), true) : (t.value = true, Promise.all(x).then((A) => {
      if (A === void 0 || Array.isArray(A) === false || A.length === 0) return p === i && b(false), true;
      const k = A.find((O) => O === false || typeof O == "string");
      return p === i && b(k !== void 0, k), k === void 0;
    }, (A) => (p === i && (console.error(A), b(true)), false)));
  }
  const w = Ma(_, 0);
  return Ke(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(l, { resetValidation: g, validate: _ }), Ft(l, "hasError", () => f.value), { isDirtyModel: o, hasRules: c, hasError: f, errorMessage: h, validate: _, resetValidation: g };
}
function jl(e) {
  return e != null && ("" + e).length !== 0;
}
var mh = { ...nt, ...r1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, ci = { ...mh, maxlength: [Number, String] }, di = ["update:modelValue", "clear", "focus", "blur"];
function fi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: a } = Se(), r = lt(l, a.$q), o = ui({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? v(() => l.tag) : { value: "label" }, isDark: r, editable: v(() => l.disable !== true && l.readonly !== true), innerLoading: U(false), focused: U(false), hasPopupOpen: false, splitAttrs: ch(), targetUid: o, rootRef: U(null), targetRef: U(null), controlRef: U(null) };
}
function vi(e) {
  const { props: t, emit: n, slots: l, attrs: a, proxy: r } = Se(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = v(() => jl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (Y) => {
    n("update:modelValue", Y);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: P, onFocusout: L }), Object.assign(e, { clearValue: I, onControlFocusin: P, onControlFocusout: L, focus: k }), e.computedCounter === void 0 && (e.computedCounter = v(() => {
    if (t.counter !== false) {
      const Y = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, le = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return Y + (le !== void 0 ? " / " + le : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: f, resetValidation: h } = o1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? v(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : v(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = v(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = v(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = v(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), S = v(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = v(() => t.labelSlot === true || t.label !== void 0), y = v(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = v(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), x = v(() => {
    const Y = {};
    return e.targetUid.value && (Y.for = e.targetUid.value), t.disable === true && (Y["aria-disabled"] = "true"), Y;
  });
  function A() {
    var _a2;
    const Y = document.activeElement;
    let le = (_a2 = e.targetRef) == null ? void 0 : _a2.value;
    le && (Y === null || Y.id !== e.targetUid.value) && (le.hasAttribute("tabindex") === true || (le = le.querySelector("[tabindex]")), le !== Y && (le == null ? void 0 : le.focus({ preventScroll: true })));
  }
  function k() {
    Ra(A);
  }
  function O() {
    Iy(A);
    const Y = document.activeElement;
    Y !== null && e.rootRef.value.contains(Y) && Y.blur();
  }
  function P(Y) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", Y));
  }
  function L(Y, le) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", Y)), le == null ? void 0 : le());
    });
  }
  function I(Y) {
    var _a2;
    Ne(Y), o.platform.is.mobile !== true ? (((_a2 = e.targetRef) == null ? void 0 : _a2.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Xe(() => {
      const le = u.value;
      h(), u.value = le;
    });
  }
  function T(Y) {
    [13, 32].includes(Y.keyCode) && I(Y);
  }
  function $() {
    const Y = [];
    return l.prepend !== void 0 && Y.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), Y.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, q())), s.value === true && t.noErrorIcon === false && Y.push(N("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? Y.push(N("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && Y.push(N("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: T, onClick: I })])), l.append !== void 0 && Y.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && Y.push(N("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && Y.push(e.getControlChild()), Y;
  }
  function q() {
    const Y = [];
    return t.prefix !== void 0 && t.prefix !== null && Y.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && Y.push(e.getShadowControl()), e.getControl !== void 0 ? Y.push(e.getControl()) : l.rawControl !== void 0 ? Y.push(l.rawControl()) : l.control !== void 0 && Y.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && Y.push(d("div", { class: y.value }, Pe(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && Y.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), Y.concat(Pe(l.default));
  }
  function D() {
    let Y, le;
    s.value === true ? f.value !== null ? (Y = [d("div", { role: "alert" }, f.value)], le = `q--slot-error-${f.value}`) : (Y = Pe(l.error), le = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (Y = [d("div", t.hint)], le = `q--slot-hint-${t.hint}`) : (Y = Pe(l.hint), le = "q--slot-hint"));
    const pe = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && pe === false && Y === void 0) return;
    const W = d("div", { key: le, class: "q-field__messages col" }, Y);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? W : d(Ot, { name: "q-transition--field-message" }, () => W), pe === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function N(Y, le) {
    return le === null ? null : d("div", { key: Y, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, le);
  }
  let j = false;
  return Fn(() => {
    j = true;
  }), _l(() => {
    j === true && t.autofocus === true && r.focus();
  }), t.autofocus === true && ft(() => {
    r.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: k, blur: O }), function() {
    const le = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...x.value } : x.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, a.class], style: a.style, ...le }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: S.value, tabindex: -1, ...e.controlEvents }, $()), g.value === true ? D() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
  };
}
var i1 = ve({ name: "QField", inheritAttrs: false, props: { ...ci, tag: { type: String, default: "label" } }, emits: di, setup() {
  return vi(fi({ tagProp: true }));
} });
function na(e, t, n, l) {
  const a = [];
  return e.forEach((r) => {
    l(r) === true ? a.push(r) : t.push({ failedPropValidation: n, file: r });
  }), a;
}
function Wr(e) {
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), Ne(e);
}
var hh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, gh = ["rejected"];
function bh({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
  const { props: a, emit: r, proxy: o } = Se(), i = U(null), u = v(() => a.accept !== void 0 ? a.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = v(() => parseInt(a.maxFiles, 10)), s = v(() => parseInt(a.maxTotalSize, 10));
  function f(p) {
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
    const k = [], O = () => {
      k.length !== 0 && r("rejected", k);
    };
    if (a.accept !== void 0 && u.value.indexOf("*/") === -1 && (A = na(A, k, "accept", (P) => u.value.some((L) => P.type.toUpperCase().startsWith(L) || P.name.toUpperCase().endsWith(L))), A.length === 0)) return O();
    if (a.maxFileSize !== void 0) {
      const P = parseInt(a.maxFileSize, 10);
      if (A = na(A, k, "max-file-size", (L) => L.size <= P), A.length === 0) return O();
    }
    if (a.multiple !== true && A.length !== 0 && (A = [A[0]]), A.forEach((P) => {
      P.__key = P.webkitRelativePath + P.lastModified + P.name + P.size;
    }), x === true) {
      const P = b.map((L) => L.__key);
      A = na(A, k, "duplicate", (L) => P.includes(L.__key) === false);
    }
    if (A.length === 0) return O();
    if (a.maxTotalSize !== void 0) {
      let P = x === true ? b.reduce((L, I) => L + I.size, 0) : 0;
      if (A = na(A, k, "max-total-size", (L) => (P += L.size, P <= s.value)), A.length === 0) return O();
    }
    if (typeof a.filter == "function") {
      const P = a.filter(A);
      A = na(A, k, "filter", (L) => P.includes(L));
    }
    if (a.maxFiles !== void 0) {
      let P = x === true ? b.length : 0;
      if (A = na(A, k, "max-files", () => (P++, P <= c.value)), A.length === 0) return O();
    }
    if (O(), A.length !== 0) return A;
  }
  function g(p) {
    Wr(p), t.value !== true && (t.value = true);
  }
  function _(p) {
    Ne(p), (p.relatedTarget !== null || ze.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(p) {
    Wr(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function S(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Wr, onDragover: Wr, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: f, addFiles: h }), { pickFiles: f, addFiles: h, onDragover: g, onDragleave: _, processFiles: m, getDndNode: S, maxFilesNumber: c, maxTotalSizeNumber: s };
}
function yh(e, t) {
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
  return v(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
ve({ name: "QFile", inheritAttrs: false, props: { ...mh, ...wn, ...hh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...di, ...gh], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), r = fi(), o = U(null), i = U(false), u = qs(e), { pickFiles: c, onDragover: s, onDragleave: f, processFiles: h, getDndNode: m } = bh({ editable: r.editable, dnd: i, getFileInput: T, addFilesToQueue: $ }), g = yh(e), _ = v(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = v(() => jl(_.value)), S = v(() => _.value.map((j) => j.name).join(", ")), p = v(() => Tu(_.value.reduce((j, Y) => j + Y.size, 0))), y = v(() => ({ totalSize: p.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = v(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: r.targetUid.value, disabled: r.editable.value !== true })), x = v(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), A = v(() => e.multiple === true && e.append === true);
  function k(j) {
    const Y = _.value.slice();
    Y.splice(j, 1), P(Y);
  }
  function O(j) {
    const Y = _.value.indexOf(j);
    Y !== -1 && k(Y);
  }
  function P(j) {
    n("update:modelValue", e.multiple === true ? j : j[0]);
  }
  function L(j) {
    j.keyCode === 13 && Vt(j);
  }
  function I(j) {
    (j.keyCode === 13 || j.keyCode === 32) && c(j);
  }
  function T() {
    return o.value;
  }
  function $(j, Y) {
    const le = h(j, Y, _.value, A.value), pe = T();
    pe != null && (pe.value = ""), le !== void 0 && ((e.multiple === true ? e.modelValue && le.every((W) => _.value.includes(W)) : e.modelValue === le[0]) || P(A.value === true ? _.value.concat(le) : le));
  }
  function q() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function D() {
    if (t.file !== void 0) return _.value.length === 0 ? q() : _.value.map((Y, le) => t.file({ index: le, file: Y, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? q() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? q() : _.value.map((Y, le) => d(Bm, { key: "file-" + le, removable: r.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      k(le);
    } }, () => d("span", { class: "ellipsis", textContent: Y.name })));
    const j = e.displayValue !== void 0 ? e.displayValue : S.value;
    return j.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: j })] : q();
  }
  function N() {
    const j = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: $ };
    return e.multiple === true && (j.multiple = true), d("input", j);
  }
  return Object.assign(r, { fieldClass: x, emitValue: P, hasValue: w, inputRef: o, innerValue: _, floatingLabel: v(() => w.value === true || jl(e.displayValue)), computedCounter: v(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const j = e.maxFiles;
    return `${_.value.length}${j !== void 0 ? " / " + j : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const j = { ref: r.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return r.editable.value === true && Object.assign(j, { onDragover: s, onDragleave: f, onKeydown: L, onKeyup: I }), d("div", j, [N()].concat(D()));
  } }), Object.assign(a, { removeAtIndex: k, removeFile: O, getNativeElement: () => o.value }), Ft(a, "nativeEl", () => o.value), vi(r);
} });
ve({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Kl, ot);
  if (a === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const r = U(parseInt(e.heightHint, 10)), o = U(true), i = U(nn.value === true || a.isContainer.value === true ? 0 : window.innerHeight), u = v(() => e.reveal === true || a.view.value.indexOf("F") !== -1 || l.platform.is.ios && a.isContainer.value === true), c = v(() => a.isContainer.value === true ? a.containerHeight.value : i.value), s = v(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? r.value : 0;
    const x = a.scroll.value.position + c.value + r.value - a.height.value;
    return x > 0 ? x : 0;
  }), f = v(() => e.modelValue !== true || u.value === true && o.value !== true), h = v(() => e.modelValue === true && f.value === true && e.reveal === true), m = v(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (f.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = v(() => {
    const x = a.rows.value.bottom, A = {};
    return x[0] === "l" && a.left.space === true && (A[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), x[2] === "r" && a.right.space === true && (A[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), A;
  });
  function _(x, A) {
    a.update("footer", x, A);
  }
  function w(x, A) {
    x.value !== A && (x.value = A);
  }
  function S({ height: x }) {
    w(r, x), _("size", x);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: x, position: A, inflectionPoint: k } = a.scroll.value;
    w(o, x === "up" || A - k < 100 || a.height.value - c.value - A - r.value < 300);
  }
  function y(x) {
    h.value === true && w(o, true), n("focusin", x);
  }
  he(() => e.modelValue, (x) => {
    _("space", x), w(o, true), a.animate();
  }), he(s, (x) => {
    _("offset", x);
  }), he(() => e.reveal, (x) => {
    x === false && w(o, e.modelValue);
  }), he(o, (x) => {
    a.animate(), n("reveal", x);
  }), he([r, a.scroll, a.height], p), he(() => l.screen.height, (x) => {
    a.isContainer.value !== true && w(i, x);
  });
  const b = {};
  return a.instances.footer = b, e.modelValue === true && _("size", r.value), _("space", e.modelValue), _("offset", s.value), Ke(() => {
    a.instances.footer === b && (a.instances.footer = void 0, _("size", 0), _("offset", 0), _("space", false));
  }), () => {
    const x = kt(t.default, [d(Hl, { debounce: 0, onResize: S })]);
    return e.elevated === true && x.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: y }, x);
  };
} });
ve({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = Se(), a = U(null);
  let r = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, _ = ++r, w = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, S = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((x) => ({ valid: x, comp: y }), (x) => ({ valid: false, comp: y, err: x })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(S)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => S(b).then((x) => {
      if (x.valid === false) return Promise.reject(x);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return _ === r && w(true), true;
      if (_ === r) {
        const { comp: b, err: x } = y[0];
        if (x !== void 0 && console.error(x), w(false, b), g === true) {
          const A = y.find(({ comp: k }) => typeof k.focus == "function" && hl(k.$) === false);
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
    m !== void 0 && Ne(m);
    const g = r + 1;
    i().then((_) => {
      g === r && _ === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && Ne(m), n("reset"), Xe(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && f();
    });
  }
  function f() {
    Ra(() => {
      var _a2;
      if (a.value === null) return;
      (_a2 = a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || a.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex !== -1)) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  hn(Jv, { bindComponent(m) {
    o.push(m);
  }, unbindComponent(m) {
    const g = o.indexOf(m);
    g !== -1 && o.splice(g, 1);
  } });
  let h = false;
  return Fn(() => {
    h = true;
  }), _l(() => {
    h === true && e.autofocus === true && f();
  }), ft(() => {
    e.autofocus === true && f();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: f, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: a, onSubmit: c, onReset: s }, Pe(t.default));
} });
var u1 = ve({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Kl, ot);
  if (a === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const r = U(parseInt(e.heightHint, 10)), o = U(true), i = v(() => e.reveal === true || a.view.value.indexOf("H") !== -1 || l.platform.is.ios && a.isContainer.value === true), u = v(() => {
    if (e.modelValue !== true) return 0;
    if (i.value === true) return o.value === true ? r.value : 0;
    const p = r.value - a.scroll.value.position;
    return p > 0 ? p : 0;
  }), c = v(() => e.modelValue !== true || i.value === true && o.value !== true), s = v(() => e.modelValue === true && c.value === true && e.reveal === true), f = v(() => "q-header q-layout__section--marginal " + (i.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), h = v(() => {
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
  const S = {};
  return a.instances.header = S, e.modelValue === true && m("size", r.value), m("space", e.modelValue), m("offset", u.value), Ke(() => {
    a.instances.header === S && (a.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const p = Er(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Hl, { debounce: 0, onResize: _ })), d("header", { class: f.value, style: h.value, onFocusin: w }, p);
  };
} }), Is = { ratio: [String, Number] };
function Ds(e, t) {
  return v(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var s1 = 1.7778;
ve({ name: "QImg", props: { ...Is, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: s1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = U(e.initialRatio), a = Ds(e, l), r = Se(), { registerTimeout: o, removeTimeout: i } = Xn(), { registerTimeout: u, removeTimeout: c } = Xn(), s = v(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), f = v(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [U(null), U(s.value)], m = U(0), g = U(false), _ = U(false), w = v(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), S = v(() => ({ width: e.width, height: e.height })), p = v(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = v(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
  function A({ target: T }) {
    hl(r) === false && (i(), l.value = T.naturalHeight === 0 ? 0.5 : T.naturalWidth / T.naturalHeight, k(T, 1));
  }
  function k(T, $) {
    $ === 1e3 || hl(r) === true || (T.complete === true ? O(T) : o(() => {
      k(T, $ + 1);
    }, 50));
  }
  function O(T) {
    hl(r) !== true && (m.value = m.value ^ 1, h[m.value].value = null, x(), T.getAttribute("__qerror") !== "true" && (_.value = false), n("load", T.currentSrc || T.src));
  }
  function P(T) {
    i(), x(), _.value = true, h[m.value].value = f.value, h[m.value ^ 1].value = s.value, n("error", T);
  }
  function L(T) {
    const $ = h[T].value, q = { key: "img_" + T, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...$ };
    return m.value === T ? Object.assign(q, { class: q.class + "current", onLoad: A, onError: P }) : q.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + T }, d("img", q));
  }
  function I() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let T = function() {
      he(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, ($) => {
        i(), _.value = false, $ === null ? (x(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = $;
      }, { immediate: true });
    };
    nn.value === true ? ft(T) : T();
  }
  return () => {
    const T = [];
    return a.value !== null && T.push(d("div", { key: "filler", style: a.value })), h[0].value !== null && T.push(L(0)), h[1].value !== null && T.push(L(1)), T.push(d(Ot, { name: "q-transition--fade" }, I)), d("div", { key: "main", class: w.value, style: S.value, role: "img", "aria-label": e.alt }, T);
  };
} });
var { passive: Ml } = dt;
ve({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Wl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = U(false), a = U(true), r = U(null), o = U(null);
  let i = e.initialIndex, u, c;
  const s = v(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function f() {
    if (e.disable === true || l.value === true || a.value === false) return;
    const k = Ir(u), O = gl(u), P = _a(u);
    e.reverse === false ? Math.round(O + P + e.offset) >= Math.round(k) && h() : Math.round(O) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || a.value === false) return;
    i++, l.value = true;
    const k = Ir(u);
    n("load", i, (O) => {
      a.value === true && (l.value = false, Xe(() => {
        if (e.reverse === true) {
          const P = Ir(u), L = gl(u), I = P - k;
          ba(u, L + I);
        }
        O === true ? _() : r.value && r.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    a.value === false && (a.value = true, u.addEventListener("scroll", c, Ml)), f();
  }
  function _() {
    var _a2;
    a.value === true && (a.value = false, l.value = false, u.removeEventListener("scroll", c, Ml), (_a2 = c == null ? void 0 : c.cancel) == null ? void 0 : _a2.call(c));
  }
  function w() {
    if (u && a.value === true && u.removeEventListener("scroll", c, Ml), u = Vn(r.value, e.scrollTarget), a.value === true) {
      if (u.addEventListener("scroll", c, Ml), e.reverse === true) {
        const k = Ir(u), O = _a(u);
        ba(u, k - O);
      }
      f();
    }
  }
  function S(k) {
    i = k;
  }
  function p(k) {
    k = parseInt(k, 10);
    const O = c;
    c = k <= 0 ? f : Ma(f, isNaN(k) === true ? 100 : k), u && a.value === true && (O !== void 0 && u.removeEventListener("scroll", O, Ml), u.addEventListener("scroll", c, Ml));
  }
  function y(k) {
    if (b.value === true) {
      if (o.value === null) {
        k !== true && Xe(() => {
          y(true);
        });
        return;
      }
      const O = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((P) => {
        P[O]();
      });
    }
  }
  const b = v(() => e.disable !== true && a.value === true);
  he([l, b], () => {
    y();
  }), he(() => e.disable, (k) => {
    k === true ? _() : g();
  }), he(() => e.reverse, () => {
    l.value === false && a.value === true && f();
  }), he(() => e.scrollTarget, w), he(() => e.debounce, p);
  let x = false;
  _l(() => {
    x !== false && u && ba(u, x);
  }), Fn(() => {
    x = u ? gl(u) : false;
  }), Ke(() => {
    a.value === true && u.removeEventListener("scroll", c, Ml);
  }), ft(() => {
    p(e.debounce), w(), l.value === false && y();
  });
  const A = Se();
  return Object.assign(A.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: _, reset: m, resume: g, setIndex: S, updateScrollTarget: w }), () => {
    const k = Er(t.default, []);
    return b.value === true && k[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: r }, k);
  };
} });
ve({ name: "QInnerLoading", props: { ...nt, ...Fl, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { transitionProps: a, transitionStyle: r } = ri(e), o = v(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = v(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(_n, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: r.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ot, a.value, c);
} });
var xd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Fo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, ph = Object.keys(Fo);
ph.forEach((e) => {
  Fo[e].regex = new RegExp(Fo[e].pattern);
});
var c1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + ph.join("") + "])|(.)", "g"), Cd = /[.*+?^${}()|[\]\\]/g, Pt = "", d1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function f1(e, t, n, l) {
  let a, r, o, i, u, c;
  const s = U(null), f = U(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  he(() => e.type + e.autogrow, _), he(() => e.mask, (P) => {
    if (P !== void 0) w(f.value, true);
    else {
      const L = k(f.value);
      _(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), he(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(f.value, true);
  }), he(() => e.unmaskedValue, () => {
    s.value === true && w(f.value);
  });
  function m() {
    if (_(), s.value === true) {
      const P = x(k(e.modelValue));
      return e.fillMask !== false ? O(P) : P;
    }
    return e.modelValue;
  }
  function g(P) {
    if (P < a.length) return a.slice(-P);
    let L = "", I = a;
    const T = I.indexOf(Pt);
    if (T !== -1) {
      for (let $ = P - I.length; $ > 0; $--) L += Pt;
      I = I.slice(0, T) + L + I.slice(T);
    }
    return I;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, a = "", r = "";
      return;
    }
    const P = xd[e.mask] === void 0 ? e.mask : xd[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", I = L.replace(Cd, "\\$&"), T = [], $ = [], q = [];
    let D = e.reverseFillMask === true, N = "", j = "";
    P.replace(c1, (W, M, ee, X, be) => {
      if (X !== void 0) {
        const B = Fo[X];
        q.push(B), j = B.negate, D === true && ($.push("(?:" + j + "+)?(" + B.pattern + "+)?(?:" + j + "+)?(" + B.pattern + "+)?"), D = false), $.push("(?:" + j + "+)?(" + B.pattern + ")?");
      } else if (ee !== void 0) N = "\\" + (ee === "\\" ? "" : ee), q.push(ee), T.push("([^" + N + "]+)?" + N + "?");
      else {
        const B = M !== void 0 ? M : be;
        N = B === "\\" ? "\\\\\\\\" : B.replace(Cd, "\\\\$&"), q.push(B), T.push("([^" + N + "]+)?" + N + "?");
      }
    });
    const Y = new RegExp("^" + T.join("") + "(" + (N === "" ? "." : "[^" + N + "]") + "+)?" + (N === "" ? "" : "[" + N + "]*") + "$"), le = $.length - 1, pe = $.map((W, M) => M === 0 && e.reverseFillMask === true ? new RegExp("^" + I + "*" + W) : M === le ? new RegExp("^" + W + "(" + (j === "" ? "." : j) + "+)?" + (e.reverseFillMask === true ? "$" : I + "*")) : new RegExp("^" + W));
    o = q, i = (W) => {
      const M = Y.exec(e.reverseFillMask === true ? W : W.slice(0, q.length + 1));
      M !== null && (W = M.slice(1).join(""));
      const ee = [], X = pe.length;
      for (let be = 0, B = W; be < X; be++) {
        const R = pe[be].exec(B);
        if (R === null) break;
        B = B.slice(R.shift().length), ee.push(...R);
      }
      return ee.length !== 0 ? ee.join("") : W;
    }, a = q.map((W) => typeof W == "string" ? W : Pt).join(""), r = a.split(Pt).join(L);
  }
  function w(P, L, I) {
    const T = l.value, $ = T.selectionEnd, q = T.value.length - $, D = k(P);
    L === true && _();
    const N = x(D), j = e.fillMask !== false ? O(N) : N, Y = f.value !== j;
    T.value !== j && (T.value = j), Y === true && (f.value = j), document.activeElement === T && Xe(() => {
      if (j === r) {
        const pe = e.reverseFillMask === true ? r.length : 0;
        T.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (I === "insertFromPaste" && e.reverseFillMask !== true) {
        const pe = T.selectionEnd;
        let W = $ - 1;
        for (let M = u; M <= W && M < pe; M++) a[M] !== Pt && W++;
        p.right(T, W);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(I) !== -1) {
        const pe = e.reverseFillMask === true ? $ === 0 ? j.length > N.length ? 1 : 0 : Math.max(0, j.length - (j === r ? 0 : Math.min(N.length, q) + 1)) + 1 : $;
        T.setSelectionRange(pe, pe, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (Y === true) {
        const pe = Math.max(0, j.length - (j === r ? 0 : Math.min(N.length, q + 1)));
        pe === 1 && $ === 1 ? T.setSelectionRange(pe, pe, "forward") : p.rightReverse(T, pe);
      } else {
        const pe = j.length - q;
        T.setSelectionRange(pe, pe, "backward");
      }
      else if (Y === true) {
        const pe = Math.max(0, a.indexOf(Pt), Math.min(N.length, $) - 1);
        p.right(T, pe);
      } else {
        const pe = $ - 1;
        p.right(T, pe);
      }
    });
    const le = e.unmaskedValue === true ? k(j) : j;
    String(e.modelValue) !== le && (e.modelValue !== null || le !== "") && n(le, true);
  }
  function S(P, L, I) {
    const T = x(k(P.value));
    L = Math.max(0, a.indexOf(Pt), Math.min(T.length, L)), u = L, P.setSelectionRange(L, I, "forward");
  }
  const p = { left(P, L) {
    const I = a.slice(L - 1).indexOf(Pt) === -1;
    let T = Math.max(0, L - 1);
    for (; T >= 0; T--) if (a[T] === Pt) {
      L = T, I === true && L++;
      break;
    }
    if (T < 0 && a[L] !== void 0 && a[L] !== Pt) return p.right(P, 0);
    L >= 0 && P.setSelectionRange(L, L, "backward");
  }, right(P, L) {
    const I = P.value.length;
    let T = Math.min(I, L + 1);
    for (; T <= I; T++) if (a[T] === Pt) {
      L = T;
      break;
    } else a[T - 1] === Pt && (L = T);
    if (T > I && a[L - 1] !== void 0 && a[L - 1] !== Pt) return p.left(P, I);
    P.setSelectionRange(L, L, "forward");
  }, leftReverse(P, L) {
    const I = g(P.value.length);
    let T = Math.max(0, L - 1);
    for (; T >= 0; T--) if (I[T - 1] === Pt) {
      L = T;
      break;
    } else if (I[T] === Pt && (L = T, T === 0)) break;
    if (T < 0 && I[L] !== void 0 && I[L] !== Pt) return p.rightReverse(P, 0);
    L >= 0 && P.setSelectionRange(L, L, "backward");
  }, rightReverse(P, L) {
    const I = P.value.length, T = g(I), $ = T.slice(0, L + 1).indexOf(Pt) === -1;
    let q = Math.min(I, L + 1);
    for (; q <= I; q++) if (T[q - 1] === Pt) {
      L = q, L > 0 && $ === true && L--;
      break;
    }
    if (q > I && T[L - 1] !== void 0 && T[L - 1] !== Pt) return p.leftReverse(P, I);
    P.setSelectionRange(L, L, "forward");
  } };
  function y(P) {
    t("click", P), c = void 0;
  }
  function b(P) {
    if (t("keydown", P), Ql(P) === true || P.altKey === true) return;
    const L = l.value, I = L.selectionStart, T = L.selectionEnd;
    if (P.shiftKey || (c = void 0), P.keyCode === 37 || P.keyCode === 39) {
      P.shiftKey && c === void 0 && (c = L.selectionDirection === "forward" ? I : T);
      const $ = p[(P.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (P.preventDefault(), $(L, c === I ? T : I), P.shiftKey) {
        const q = L.selectionStart;
        L.setSelectionRange(Math.min(c, q), Math.max(c, q), "forward");
      }
    } else P.keyCode === 8 && e.reverseFillMask !== true && I === T ? (p.left(L, I), L.setSelectionRange(L.selectionStart, T, "backward")) : P.keyCode === 46 && e.reverseFillMask === true && I === T && (p.rightReverse(L, T), L.setSelectionRange(I, L.selectionEnd, "forward"));
  }
  function x(P) {
    if (P == null || P === "") return "";
    if (e.reverseFillMask === true) return A(P);
    const L = o;
    let I = 0, T = "";
    for (let $ = 0; $ < L.length; $++) {
      const q = P[I], D = L[$];
      if (typeof D == "string") T += D, q === D && I++;
      else if (q !== void 0 && D.regex.test(q)) T += D.transform !== void 0 ? D.transform(q) : q, I++;
      else return T;
    }
    return T;
  }
  function A(P) {
    const L = o, I = a.indexOf(Pt);
    let T = P.length - 1, $ = "";
    for (let q = L.length - 1; q >= 0 && T !== -1; q--) {
      const D = L[q];
      let N = P[T];
      if (typeof D == "string") $ = D + $, N === D && T--;
      else if (N !== void 0 && D.regex.test(N)) do
        $ = (D.transform !== void 0 ? D.transform(N) : N) + $, T--, N = P[T];
      while (I === q && N !== void 0 && D.regex.test(N));
      else return $;
    }
    return $;
  }
  function k(P) {
    return typeof P != "string" || i === void 0 ? typeof P == "number" ? i("" + P) : P : i(P);
  }
  function O(P) {
    return r.length - P.length <= 0 ? P : e.reverseFillMask === true && P.length !== 0 ? r.slice(0, -P.length) + P : P + r.slice(P.length);
  }
  return { innerValue: f, hasMask: s, moveCursorForPaste: S, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: y };
}
var v1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, m1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, h1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, g1 = /[a-z0-9_ -]$/i;
function _h(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) return;
      n.target.qComposing = false, e(n);
    } else n.type === "compositionupdate" && n.target.qComposing !== true && typeof n.data == "string" && (ze.is.firefox === true ? g1.test(n.data) === false : v1.test(n.data) === true || m1.test(n.data) === true || h1.test(n.data) === true) === true && (n.target.qComposing = true);
  };
}
var wh = ve({ name: "QInput", inheritAttrs: false, props: { ...ci, ...d1, ...wn, modelValue: [String, Number, FileList], shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...di, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = {};
  let o = NaN, i, u, c = null, s;
  const f = U(null), h = qs(e), { innerValue: m, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: S, onMaskedClick: p } = f1(e, t, N, f), y = yh(e, true), b = v(() => jl(m.value)), x = _h(q), A = fi({ changeEvent: true }), k = v(() => e.type === "textarea" || e.autogrow === true), O = v(() => k.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), P = v(() => {
    const M = { ...A.splitAttrs.listeners.value, onInput: q, onPaste: $, onChange: Y, onBlur: le, onFocus: wt };
    return M.onCompositionstart = M.onCompositionupdate = M.onCompositionend = x, g.value === true && (M.onKeydown = S, M.onClick = p), e.autogrow === true && (M.onAnimationend = D), M;
  }), L = v(() => {
    const M = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...A.splitAttrs.attributes.value, id: A.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return k.value === false && (M.type = e.type), e.autogrow === true && (M.rows = 1), M;
  });
  he(() => e.type, () => {
    f.value && (f.value.value = e.modelValue);
  }), he(() => e.modelValue, (M) => {
    if (g.value === true) {
      if (u === true && (u = false, String(M) === o)) return;
      w(M);
    } else m.value !== M && (m.value = M, e.type === "number" && r.hasOwnProperty("value") === true && (i === true ? i = false : delete r.value));
    e.autogrow === true && Xe(j);
  }), he(() => e.autogrow, (M) => {
    M === true ? Xe(j) : f.value !== null && n.rows > 0 && (f.value.style.height = "auto");
  }), he(() => e.dense, () => {
    e.autogrow === true && Xe(j);
  });
  function I() {
    Ra(() => {
      const M = document.activeElement;
      f.value !== null && f.value !== M && (M === null || M.id !== A.targetUid.value) && f.value.focus({ preventScroll: true });
    });
  }
  function T() {
    var _a2;
    (_a2 = f.value) == null ? void 0 : _a2.select();
  }
  function $(M) {
    if (g.value === true && e.reverseFillMask !== true) {
      const ee = M.target;
      _(ee, ee.selectionStart, ee.selectionEnd);
    }
    t("paste", M);
  }
  function q(M) {
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
    if (g.value === true) w(ee, false, M.inputType);
    else if (N(ee), O.value === true && M.target === document.activeElement) {
      const { selectionStart: X, selectionEnd: be } = M.target;
      X !== void 0 && be !== void 0 && Xe(() => {
        M.target === document.activeElement && ee.indexOf(M.target.value) === 0 && M.target.setSelectionRange(X, be);
      });
    }
    e.autogrow === true && j();
  }
  function D(M) {
    t("animationend", M), j();
  }
  function N(M, ee) {
    s = () => {
      c = null, e.type !== "number" && r.hasOwnProperty("value") === true && delete r.value, e.modelValue !== M && o !== M && (o = M, ee === true && (u = true), t("update:modelValue", M), Xe(() => {
        o === M && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, r.value = M), e.debounce !== void 0 ? (c !== null && clearTimeout(c), r.value = M, c = setTimeout(s, e.debounce)) : s();
  }
  function j() {
    requestAnimationFrame(() => {
      const M = f.value;
      if (M !== null) {
        const ee = M.parentNode.style, { scrollTop: X } = M, { overflowY: be, maxHeight: B } = a.platform.is.firefox === true ? {} : window.getComputedStyle(M), R = be !== void 0 && be !== "scroll";
        R === true && (M.style.overflowY = "hidden"), ee.marginBottom = M.scrollHeight - 1 + "px", M.style.height = "1px", M.style.height = M.scrollHeight + "px", R === true && (M.style.overflowY = parseInt(B, 10) < M.scrollHeight ? "auto" : "hidden"), ee.marginBottom = "", M.scrollTop = X;
      }
    });
  }
  function Y(M) {
    x(M), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", M.target.value);
  }
  function le(M) {
    M !== void 0 && wt(M), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete r.value, e.type !== "file" && setTimeout(() => {
      f.value !== null && (f.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function pe() {
    return r.hasOwnProperty("value") === true ? r.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    le();
  }), ft(() => {
    e.autogrow === true && j();
  }), Object.assign(A, { innerValue: m, fieldClass: v(() => `q-${k.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: v(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: f, emitValue: N, hasValue: b, floatingLabel: v(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || jl(e.displayValue)), getControl: () => d(k.value === true ? "textarea" : "input", { ref: f, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...L.value, ...P.value, ...e.type !== "file" ? { value: pe() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (k.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, pe()), d("span", e.shadowText)]) });
  const W = vi(A);
  return Object.assign(l, { focus: I, select: T, getNativeElement: () => f.value }), Ft(l, "nativeEl", () => f.value), W;
} }), kd = { threshold: 0, root: null, rootMargin: "0px" };
function qd(e, t, n) {
  var _a2;
  let l, a, r;
  typeof n == "function" ? (l = n, a = kd, r = t.cfg === void 0) : (l = n.handler, a = Object.assign({}, kd, n.cfg), r = t.cfg === void 0 || kn(t.cfg, a) === false), t.handler !== l && (t.handler = l), r === true && (t.cfg = a, (_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
    if (typeof t.handler == "function") {
      if (o.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(o, t.observer) === false || t.once === true && o.isIntersecting === true) && Sh(e);
    }
  }, a), t.observer.observe(e));
}
function Sh(e) {
  var _a2;
  const t = e.__qvisible;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), delete e.__qvisible);
}
var b1 = An({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  qd(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && qd(e, n, t.value);
}, beforeUnmount: Sh });
ve({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(nn.value === true ? e.ssrPrerender : false), a = v(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), r = v(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = v(() => [[b1, a.value, void 0, { once: e.once }]]), i = v(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function u(s) {
    l.value !== s.isIntersecting && (l.value = s.isIntersecting, e.onVisibility !== void 0 && n("visibility", l.value));
  }
  function c() {
    if (l.value === true) return [d("div", { key: "content", style: i.value }, Pe(t.default))];
    if (t.hidden !== void 0) return [d("div", { key: "hidden", style: i.value }, t.hidden())];
  }
  return () => {
    const s = e.transition ? [d(Ot, { name: "q-transition--" + e.transition }, c)] : c();
    return pn(e.tag, { class: "q-intersection" }, s, "main", r.value, () => o.value);
  };
} });
var y1 = ["ul", "ol"], xh = ve({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => y1.includes(e.tag) ? null : "list"), r = v(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: r.value, role: a.value }, Pe(t.default));
} }), Td = [34, 37, 40, 33, 39, 38], p1 = Object.keys(Bs);
ve({ name: "QKnob", props: { ...wn, ...Bs, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U(e.modelValue), o = U(false), i = v(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = v(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    r.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), I(true);
  }
  he(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const f = v(() => e.disable === false && e.readonly === false), h = v(() => "q-knob non-selectable" + (f.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = v(() => (String(e.step).trim().split(".")[1] || "").length), g = v(() => e.step === 0 ? 1 : e.step), _ = v(() => e.instantFeedback === true || o.value === true), w = a.platform.is.mobile === true ? v(() => f.value === true ? { onClick: k } : {}) : v(() => f.value === true ? { onMousedown: A, onClick: k, onKeydown: O, onKeyup: L } : {}), S = v(() => f.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = v(() => {
    const q = {};
    return p1.forEach((D) => {
      q[D] = e[D];
    }), q;
  });
  function y(q) {
    q.isFinal ? (P(q.evt, true), o.value = false) : (q.isFirst && (x(), o.value = true), P(q.evt));
  }
  const b = v(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function x() {
    const { top: q, left: D, width: N, height: j } = l.$el.getBoundingClientRect();
    c = { top: q + j / 2, left: D + N / 2 };
  }
  function A(q) {
    x(), P(q);
  }
  function k(q) {
    x(), P(q, true);
  }
  function O(q) {
    if (Td.includes(q.keyCode) === false) return;
    Ne(q);
    const D = ([34, 33].includes(q.keyCode) ? 10 : 1) * g.value, N = [34, 37, 40].includes(q.keyCode) ? -D : D;
    r.value = ct(parseFloat((r.value + N).toFixed(m.value)), i.value, u.value), I();
  }
  function P(q, D) {
    const N = en(q), j = Math.abs(N.top - c.top), Y = Math.sqrt(j ** 2 + Math.abs(N.left - c.left) ** 2);
    let le = Math.asin(j / Y) * (180 / Math.PI);
    N.top < c.top ? le = c.left < N.left ? 90 - le : 270 + le : le = c.left < N.left ? le + 90 : 270 - le, a.lang.rtl === true ? le = Co(-le - e.angle, 0, 360) : e.angle && (le = Co(le - e.angle, 0, 360)), e.reverse === true && (le = 360 - le);
    let pe = e.min + le / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const W = pe % g.value;
      pe = pe - W + (Math.abs(W) >= g.value / 2 ? (W < 0 ? -1 : 1) * g.value : 0), pe = parseFloat(pe.toFixed(m.value));
    }
    pe = ct(pe, i.value, u.value), n("dragValue", pe), r.value !== pe && (r.value = pe), I(D);
  }
  function L(q) {
    Td.includes(q.keyCode) && I(true);
  }
  function I(q) {
    e.modelValue !== r.value && n("update:modelValue", r.value), q === true && n("change", r.value);
  }
  const T = Rr(e);
  function $() {
    return d("input", T.value);
  }
  return () => {
    const q = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...S.value, ...p.value, value: r.value, instantFeedback: _.value, ...w.value }, D = { default: t.default };
    return f.value === true && e.name !== void 0 && (D.internal = $), pn(Vm, q, D, "knob", f.value, () => b.value);
  };
} });
var { passive: Md } = dt, _1 = ["both", "horizontal", "vertical"], Ch = ve({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => _1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Wl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, a, r;
  he(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const f = Math.max(0, gl(a)), h = oi(a), m = { top: f - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: f, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    a = Vn(r, e.scrollTarget), a.addEventListener("scroll", c, Md), c(true);
  }
  function u() {
    a !== void 0 && (a.removeEventListener("scroll", c, Md), a = void 0);
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
  const { proxy: s } = Se();
  return he(() => s.$q.lang.rtl, o), ft(() => {
    r = s.$el.parentNode, i();
  }), Ke(() => {
    l == null ? void 0 : l(), u();
  }), Object.assign(s, { trigger: c, getPosition: () => n }), St;
} }), w1 = ve({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = U(null), r = U(l.screen.height), o = U(e.container === true ? 0 : l.screen.width), i = U({ position: 0, direction: "down", inflectionPoint: 0 }), u = U(0), c = U(nn.value === true ? 0 : ro()), s = v(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), f = v(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = v(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const x = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = x, e.onScroll !== void 0 && n("scroll", x);
    }
  }
  function _(b) {
    const { height: x, width: A } = b;
    let k = false;
    r.value !== x && (k = true, r.value = x, e.onScrollHeight !== void 0 && n("scrollHeight", x), S()), o.value !== A && (k = true, o.value = A), k === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, S());
  }
  function S() {
    if (e.container === true) {
      const b = r.value > u.value ? ro() : 0;
      c.value !== b && (c.value = b);
    }
  }
  let p = null;
  const y = { instances: {}, view: v(() => e.view), isContainer: v(() => e.container), rootRef: a, height: r, containerHeight: u, scrollbarWidth: c, totalWidth: v(() => o.value + c.value), rows: v(() => {
    const b = e.view.toLowerCase().split(" ");
    return { top: b[0].split(""), middle: b[1].split(""), bottom: b[2].split("") };
  }), header: Bn({ size: 0, offset: 0, space: false }), right: Bn({ size: 300, offset: 0, space: false }), footer: Bn({ size: 0, offset: 0, space: false }), left: Bn({ size: 300, offset: 0, space: false }), scroll: i, animate() {
    p !== null ? clearTimeout(p) : document.body.classList.add("q-body--layout-animate"), p = setTimeout(() => {
      p = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(b, x, A) {
    y[b][x] = A;
  } };
  if (hn(Kl, y), ro() > 0) {
    let b = function() {
      k = null, O.classList.remove("hide-scrollbar");
    }, x = function() {
      if (k === null) {
        if (O.scrollHeight > l.screen.height) return;
        O.classList.add("hide-scrollbar");
      } else clearTimeout(k);
      k = setTimeout(b, 300);
    }, A = function(P) {
      k !== null && P === "remove" && (clearTimeout(k), b()), window[`${P}EventListener`]("resize", x);
    }, k = null;
    const O = document.body;
    he(() => e.container !== true ? "add" : "remove", A), e.container !== true && A("add"), Go(() => {
      A("remove");
    });
  }
  return () => {
    const b = kt(t.default, [d(Ch, { onScroll: g }), d(Hl, { onResize: _ })]), x = d("div", { class: s.value, style: f.value, ref: e.container === true ? void 0 : a, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: a }, [d(Hl, { onResize: w }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [x])])]) : x;
  };
} }), S1 = ["horizontal", "vertical", "cell", "none"], x1 = ve({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => S1.includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: a.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
ve({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = Hm();
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
var C1 = () => d("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [d("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), d("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]), k1 = ve({ name: "QRadio", props: { ...nt, ...Jn, ...wn, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = lt(e, l.$q), r = el(e, Am), o = U(null), { refocusTargetEl: i, refocusTarget: u } = $m(e, o), c = v(() => Ye(e.modelValue) === Ye(e.val)), s = v(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), f = v(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = v(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = v(() => e.disable === true ? -1 : e.tabindex || 0), g = v(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = Sl(g);
  function w(b) {
    b !== void 0 && (Ne(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function S(b) {
    (b.keyCode === 13 || b.keyCode === 32) && Ne(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(l, { set: w });
  const y = C1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const x = [d("div", { class: f.value, style: r.value, "aria-hidden": "true" }, b)];
    i.value !== null && x.push(i.value);
    const A = e.label !== void 0 ? kt(t.default, [e.label]) : Pe(t.default);
    return A !== void 0 && x.push(d("div", { class: "q-radio__label q-anchor--skip" }, A)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: S, onKeyup: p }, x);
  };
} }), q1 = ve({ name: "QToggle", props: { ...Rm, icon: String, iconColor: String }, emits: Pm, setup(e) {
  function t(n, l) {
    const a = v(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), r = v(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, a.value !== void 0 ? [d(et, { name: a.value, color: r.value })] : void 0)];
  }
  return Lm("toggle", t);
} }), kh = { radio: k1, checkbox: ir, toggle: q1 }, T1 = Object.keys(kh);
function Yi(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var M1 = ve({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(At), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => T1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = Se(), a = Array.isArray(e.modelValue);
  e.type === "radio" ? a === true && console.error("q-option-group: model should not be array") : a === false && console.error("q-option-group: model should be array in your case");
  const r = lt(e, l), o = v(() => kh[e.type]), i = v(() => Yi(e.optionValue, "value")), u = v(() => Yi(e.optionLabel, "label")), c = v(() => Yi(e.optionDisable, "disable")), s = v(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? r.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), f = v(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = v(() => {
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
ve({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = qt(Kl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (qt(Xv, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
  const r = v(() => {
    const i = (l.header.space === true ? l.header.size : 0) + (l.footer.space === true ? l.footer.size : 0);
    if (typeof e.styleFn == "function") {
      const u = l.isContainer.value === true ? l.containerHeight.value : n.screen.height;
      return e.styleFn(i, u);
    }
    return { minHeight: l.isContainer.value === true ? l.containerHeight.value - i + "px" : n.screen.height === 0 ? i !== 0 ? `calc(100vh - ${i}px)` : "100vh" : n.screen.height - i + "px" };
  }), o = v(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => d("main", { class: o.value, style: r.value }, Pe(t.default));
} });
var E1 = ve({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = qt(Kl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(Xv, true);
  const a = v(() => {
    const r = {};
    return l.header.space === true && (r.paddingTop = `${l.header.size}px`), l.right.space === true && (r[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (r.paddingBottom = `${l.footer.size}px`), l.left.space === true && (r[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), r;
  });
  return () => d("div", { class: "q-page-container", style: a.value }, Pe(t.default));
} }), Iu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function qh() {
  const { props: e, proxy: { $q: t } } = Se(), n = qt(Kl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = v(() => {
    const f = e.position;
    return { top: f.indexOf("top") !== -1, right: f.indexOf("right") !== -1, bottom: f.indexOf("bottom") !== -1, left: f.indexOf("left") !== -1, vertical: f === "top" || f === "bottom", horizontal: f === "left" || f === "right" };
  }), a = v(() => n.header.offset), r = v(() => n.right.offset), o = v(() => n.footer.offset), i = v(() => n.left.offset), u = v(() => {
    let f = 0, h = 0;
    const m = l.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && a.value !== 0 ? h = `${a.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? f = `${g * i.value}px` : m.right === true && r.value !== 0 && (f = `${-g * r.value}px`);
    const _ = { transform: `translate(${f}, ${h})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${r.value}px`)) : m.horizontal === true && (a.value !== 0 && (_.top = `${a.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = v(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(f) {
    const h = Pe(f.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
ve({ name: "QPageScroller", props: { ...Iu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Iu.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), { $layout: a, getStickyContent: r } = qh(), o = U(null);
  let i;
  const u = v(() => a.height.value - (a.isContainer.value === true ? a.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const s = U(c());
  function f() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = he(u, f)) : m();
  }
  he(a.scroll, f), he(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const S = Vn(a.isContainer.value === true ? o.value : a.rootRef.value);
    ba(S, e.reverse === true ? a.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, r(t)) : null;
  }
  return h(), Ke(m), () => d(Ot, { name: "q-transition--fade" }, _);
} });
ve({ name: "QPageSticky", props: Iu, setup(e, { slots: t }) {
  const { getStickyContent: n } = qh();
  return () => n(t);
} });
function Yr(e, t) {
  return [true, false].includes(e) ? e : t;
}
ve({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || vm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = v(() => parseInt(e.min, 10)), o = v(() => parseInt(e.max, 10)), i = v(() => parseInt(e.maxPages, 10)), u = v(() => g.value + " / " + o.value), c = v(() => Yr(e.boundaryLinks, e.input)), s = v(() => Yr(e.boundaryNumbers, !e.input)), f = v(() => Yr(e.directionLinks, e.input)), h = v(() => Yr(e.ellipses, !e.input)), m = U(null), g = v({ get: () => e.modelValue, set: ($) => {
    if ($ = parseInt($, 10), e.disable || isNaN($)) return;
    const q = ct($, r.value, o.value);
    e.modelValue !== q && t("update:modelValue", q);
  } });
  he(() => `${r.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = v(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = v(() => e.gutter in To ? `${To[e.gutter]}px` : e.gutter || null), S = v(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), p = v(() => {
    const $ = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? $.reverse() : $;
  }), y = v(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = v(() => _s(e, "flat")), x = v(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), A = v(() => {
    const $ = { [b.value]: false };
    return e.activeDesign !== "" && ($[e.activeDesign] = true), $;
  }), k = v(() => ({ ...A.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), O = v(() => {
    let $ = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const q = { pgFrom: r.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && $ < o.value - r.value + 1 && ($ = 1 + Math.floor($ / 2) * 2, q.pgFrom = Math.max(r.value, Math.min(o.value - $ + 1, e.modelValue - Math.floor($ / 2))), q.pgTo = Math.min(o.value, q.pgFrom + $ - 1), s.value && (q.boundaryStart = true, q.pgFrom++), h.value && q.pgFrom > r.value + (s.value ? 1 : 0) && (q.ellipsesStart = true, q.pgFrom++), s.value && (q.boundaryEnd = true, q.pgTo--), h.value && q.pgTo < o.value - (s.value ? 1 : 0) && (q.ellipsesEnd = true, q.pgTo--)), q;
  });
  function P($) {
    g.value = $;
  }
  function L($) {
    g.value = g.value + $;
  }
  const I = v(() => {
    function $() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (q) => {
      m.value = q;
    }, onKeyup: (q) => {
      yn(q, 13) === true && $();
    }, onBlur: $ };
  });
  function T($, q, D) {
    const N = { "aria-label": q, "aria-current": "false", ...x.value, ...$ };
    return D === true && Object.assign(N, { "aria-current": "true", ...k.value }), q !== void 0 && (e.toFn !== void 0 ? N.to = e.toFn(q) : N.onClick = () => {
      P(q);
    }), d(Ze, N);
  }
  return Object.assign(n, { set: P, setByOffset: L }), () => {
    const $ = [], q = [];
    let D;
    if (c.value === true && ($.push(T({ key: "bls", disable: e.disable || e.modelValue <= r.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, r.value)), q.unshift(T({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), f.value === true && ($.push(T({ key: "bdp", disable: e.disable || e.modelValue <= r.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), q.unshift(T({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      D = [];
      const { pgFrom: N, pgTo: j, marginalStyle: Y } = O.value;
      if (O.value.boundaryStart === true) {
        const le = r.value === e.modelValue;
        $.push(T({ key: "bns", style: Y, disable: e.disable, label: r.value }, r.value, le));
      }
      if (O.value.boundaryEnd === true) {
        const le = o.value === e.modelValue;
        q.unshift(T({ key: "bne", style: Y, disable: e.disable, label: o.value }, o.value, le));
      }
      O.value.ellipsesStart === true && $.push(T({ key: "bes", style: Y, disable: e.disable, label: "\u2026", ripple: false }, N - 1)), O.value.ellipsesEnd === true && q.unshift(T({ key: "bee", style: Y, disable: e.disable, label: "\u2026", ripple: false }, j + 1));
      for (let le = N; le <= j; le++) D.push(T({ key: `bpg${le}`, style: Y, disable: e.disable, label: le }, le, le === e.modelValue));
    }
    return d("div", { class: _.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: S.value }, [...$, e.input === true ? d(wh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: r.value, max: o.value, ...I.value }) : d("div", { class: "q-pagination__middle row justify-center" }, D), ...q])]);
  };
} });
function Gi(e) {
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
ve({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: Wl, onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(0), a = U(null), r = U(null), o = U(null);
  let i, u, c, s, f, h;
  he(() => e.height, () => {
    i === true && g();
  }), he(() => e.scrollTarget, () => {
    i === true && (p(), S());
  });
  let m = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, x;
    h === window ? (y = 0, x = b = window.innerHeight) : (y = qo(h).top, b = _a(h), x = y + b);
    const A = qo(a.value).top, k = A + e.height;
    if (f !== void 0 || k > y && A < x) {
      const O = (x - A) / (e.height + b);
      _((c - e.height) * O * e.speed), m(O);
    }
  }
  let _ = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || _a(u), i === true && g();
  }
  function S() {
    i = true, h = Vn(a.value, e.scrollTarget), h.addEventListener("scroll", g, Gr), window.addEventListener("resize", s, Gr), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Gr), window.removeEventListener("resize", s, Gr), h = void 0, _.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    _ = Gi(_), m = Gi(m), s = Gi(w), u = t.media !== void 0 ? r.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (f = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? S : p)();
    }), f.observe(a.value)) : S();
  }), Ke(() => {
    p(), f == null ? void 0 : f.disconnect(), u.onload = u.onloadstart = u.loadedmetadata = null;
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
  const c = v(() => Ft({ initialValue: o.value, validate: e.validate, set: s, cancel: f, updatePosition: h }, "value", () => i.value, (b) => {
    i.value = b;
  }));
  function s() {
    e.validate(i.value) !== false && (m() === true && (n("save", i.value, o.value), n("update:modelValue", i.value)), g());
  }
  function f() {
    m() === true && n("cancel", i.value, o.value), g();
  }
  function h() {
    Xe(() => {
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
  function S() {
    u === false && m() === true && (e.autoSave === true && e.validate(i.value) === true ? (n("save", i.value, o.value), n("update:modelValue", i.value)) : n("cancel", i.value, o.value)), n("beforeHide");
  }
  function p() {
    n("hide");
  }
  function y() {
    const b = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && b.unshift(d("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && b.push(d("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [d(Ze, { flat: true, color: e.color, label: e.labelCancel || a.lang.label.cancel, onClick: f }), d(Ze, { flat: true, color: e.color, label: e.labelSet || a.lang.label.set, onClick: s })])), b;
  }
  return Object.assign(l, { set: s, cancel: f, show(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.show(b);
  }, hide(b) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.hide(b);
  }, updatePosition: h }), () => {
    if (e.disable !== true) return d(ii, { ref: r, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: S, onHide: p, onEscapeKey: f }, y);
  };
} });
ve({ name: "QPopupProxy", props: { ...bm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), { $q: r } = a, o = U(false), i = U(null), u = v(() => parseInt(e.breakpoint, 10)), { canShow: c } = Ss({ showing: o });
  function s() {
    return r.screen.width < u.value || r.screen.height < u.value ? "dialog" : "menu";
  }
  const f = U(s()), h = v(() => f.value === "menu" ? { maxHeight: "99vh" } : {});
  he(() => s(), (_) => {
    o.value !== true && (f.value = _);
  });
  function m(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, f.value = s(), n("hide", _);
  }
  return Object.assign(a, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Ft(a, "currentComponent", () => ({ type: f.value, ref: i.value })), () => {
    const _ = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let w;
    return f.value === "dialog" ? w = si : (w = ii, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var $1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Ed(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var A1 = ve({ name: "QLinearProgress", props: { ...nt, ...Jn, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = el(e, $1), r = v(() => e.indeterminate === true || e.query === true), o = v(() => e.reverse !== e.query), i = v(() => ({ ...a.value !== null ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = v(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = v(() => Ed(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = v(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), f = v(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = v(() => Ed(r.value === true ? 1 : e.value, o.value, n.$q)), m = v(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value === true ? "in" : ""}determinate`), g = v(() => ({ width: `${e.value * 100}%` })), _ = v(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: f.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && r.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, kt(t.default, w));
  };
} }), $d = 40, Xi = 20;
ve({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Wl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U("pull"), o = U(0), i = U(false), u = U(-40), c = U(false), s = U({}), f = v(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = v(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(x) {
    if (x.isFinal === true) {
      i.value === true && (i.value = false, r.value === "pulled" ? (r.value = "refreshing", y({ pos: Xi }), w()) : r.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || r.value === "refreshing") return false;
    if (x.isFirst === true) {
      if (gl(S) !== 0 || x.direction !== "down") return i.value === true && (i.value = false, r.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: O, left: P } = l.$el.getBoundingClientRect();
      s.value = { top: O + "px", left: P + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(x.evt);
    const A = Math.min(140, Math.max(0, x.distance.y));
    u.value = A - $d, o.value = ct(A / (Xi + $d), 0, 1);
    const k = u.value > Xi ? "pulled" : "pull";
    r.value !== k && (r.value = k);
  }
  const g = v(() => {
    const x = { down: true };
    return e.noMouse !== true && (x.mouse = true), [[gn, m, void 0, x]];
  }), _ = v(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        r.value = "pull";
      });
    });
  }
  let S, p = null;
  function y({ pos: x, ratio: A }, k) {
    c.value = true, u.value = x, A !== void 0 && (o.value = A), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, k == null ? void 0 : k();
    }, 300);
  }
  function b() {
    S = Vn(l.$el, e.scrollTarget);
  }
  return he(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: w, updateScrollTarget: b }), () => {
    const x = [d("div", { class: _.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: f.value }, [r.value !== "refreshing" ? d(et, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, x, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
ve({ name: "QRange", props: { ...zm, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: Im, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Dm({ updateValue: O, updatePosition: L, getDragging: P, formAttrs: v(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), r = U(null), o = U(0), i = U(0), u = U({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = v(() => a.convertModelToRatio(u.value.min)), f = v(() => a.convertModelToRatio(u.value.max)), h = v(() => l.active.value === true ? o.value : s.value), m = v(() => l.active.value === true ? i.value : f.value), g = v(() => {
    const T = { [l.positionProp.value]: `${100 * h.value}%`, [l.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (T.backgroundImage = `url(${e.selectionImg}) !important`), T;
  }), _ = v(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: a.onMobileClick };
    const T = { onMousedown: a.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(T, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: I, onKeyup: a.onKeyup }), T;
  });
  function w(T) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = T;
    }, onBlur: a.onBlur, onKeydown: I, onKeyup: a.onKeyup } : {};
  }
  const S = v(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = v(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = U(null), b = v(() => w("min")), x = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: S.value }), ratio: h, label: v(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: v(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: v(() => e.leftLabelColor || e.labelColor), labelTextColor: v(() => e.leftLabelTextColor || e.labelTextColor) }), A = v(() => w("max")), k = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...A.value, key: "tmax", tabindex: S.value }), ratio: m, label: v(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: v(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: v(() => e.rightLabelColor || e.labelColor), labelTextColor: v(() => e.rightLabelTextColor || e.labelTextColor) });
  function O(T) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), T === true && t("change", { ...u.value });
  }
  function P(T) {
    const { left: $, top: q, width: D, height: N } = r.value.getBoundingClientRect(), j = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * N) : y.value.offsetWidth / (2 * D), Y = { left: $, top: q, width: D, height: N, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: f.value }, le = a.getDraggingRatio(T, Y);
    return e.dragOnlyRange !== true && le < Y.ratioMin + j ? Y.type = al.MIN : e.dragOnlyRange === true || le < Y.ratioMax - j ? e.dragRange === true || e.dragOnlyRange === true ? (Y.type = al.RANGE, Object.assign(Y, { offsetRatio: le, offsetModel: a.convertRatioToModel(le), rangeValue: Y.valueMax - Y.valueMin, rangeRatio: Y.ratioMax - Y.ratioMin })) : Y.type = Y.ratioMax - le < le - Y.ratioMin ? al.MAX : al.MIN : Y.type = al.MAX, Y;
  }
  function L(T, $ = l.dragging.value) {
    let q;
    const D = a.getDraggingRatio(T, $), N = a.convertRatioToModel(D);
    switch ($.type) {
      case al.MIN:
        D <= $.ratioMax ? (q = { minR: D, maxR: $.ratioMax, min: N, max: $.valueMax }, l.focus.value = "min") : (q = { minR: $.ratioMax, maxR: D, min: $.valueMax, max: N }, l.focus.value = "max");
        break;
      case al.MAX:
        D >= $.ratioMin ? (q = { minR: $.ratioMin, maxR: D, min: $.valueMin, max: N }, l.focus.value = "max") : (q = { minR: D, maxR: $.ratioMin, min: N, max: $.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const j = D - $.offsetRatio, Y = ct($.ratioMin + j, l.innerMinRatio.value, l.innerMaxRatio.value - $.rangeRatio), le = N - $.offsetModel, pe = ct($.valueMin + le, l.innerMin.value, l.innerMax.value - $.rangeValue);
        q = { minR: Y, maxR: Y + $.rangeRatio, min: l.roundValueFn.value(pe), max: l.roundValueFn.value(pe + $.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: q.min || e.min, max: q.max || e.max } : { min: q.min, max: q.max }, e.snap !== true || e.step === 0 ? (o.value = q.minR, i.value = q.maxR) : (o.value = a.convertModelToRatio(u.value.min), i.value = a.convertModelToRatio(u.value.max));
  }
  function I(T) {
    if (Os.includes(T.keyCode) === false) return;
    Ne(T);
    const $ = ([34, 33].includes(T.keyCode) ? 10 : 1) * l.keyStep.value, q = ([34, 37, 40].includes(T.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * $;
    if (l.focus.value === "both") {
      const D = u.value.max - u.value.min, N = ct(l.roundValueFn.value(u.value.min + q), l.innerMin.value, l.innerMax.value - D);
      u.value = { min: N, max: l.roundValueFn.value(N + D) };
    } else {
      if (l.focus.value === false) return;
      {
        const D = l.focus.value;
        u.value = { ...u.value, [D]: ct(l.roundValueFn.value(u.value[D] + q), D === "min" ? l.innerMin.value : u.value.min, D === "max" ? l.innerMax.value : u.value.max) };
      }
    }
    O();
  }
  return () => {
    const T = a.getContent(g, p, _, ($) => {
      $.push(x(), k());
    });
    return d("div", { ref: r, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, T);
  };
} });
ve({ name: "QRating", props: { ...Jn, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = el(e), r = Rr(e), o = Sl(r), i = U(0);
  let u = {};
  const c = v(() => e.readonly !== true && e.disable !== true), s = v(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), f = v(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, x = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, A = Array.isArray(e.color) === true ? e.color.length : 0, k = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, O = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: x, halfIcon: x > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: A, color: A > 0 ? e.color[A - 1] : e.color, selColorLen: k, selColor: k > 0 ? e.colorSelected[k - 1] : e.colorSelected, halfColorLen: O, halfColor: O > 0 ? e.colorHalf[O - 1] : e.colorHalf };
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
    const y = [], b = f.value, x = Math.ceil(e.modelValue), A = c.value === true ? 0 : null, k = e.iconHalf === void 0 || x === e.modelValue ? -1 : x;
    for (let O = 1; O <= e.max; O++) {
      const P = i.value === 0 && e.modelValue >= O || i.value > 0 && i.value >= O, L = k === O && i.value < O, I = i.value > 0 && (L === true ? x : e.modelValue) >= O && i.value < O, T = L === true ? O <= b.halfColorLen ? e.colorHalf[O - 1] : b.halfColor : b.selColor !== void 0 && P === true ? O <= b.selColorLen ? e.colorSelected[O - 1] : b.selColor : O <= b.colorLen ? e.color[O - 1] : b.color, $ = (L === true ? O <= b.halfIconLen ? e.iconHalf[O - 1] : b.halfIcon : b.selIcon !== void 0 && (P === true || I === true) ? O <= b.selIconLen ? e.iconSelected[O - 1] : b.selIcon : O <= b.iconLen ? e.icon[O - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (L === true ? O <= b.halfIconLen ? e.iconHalf[O - 1] : b.halfIcon : b.selIcon !== void 0 && (P === true || I === true) ? O <= b.selIconLen ? e.iconSelected[O - 1] : b.selIcon : O <= b.iconLen ? e.icon[O - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: A, role: "radio", "aria-checked": e.modelValue === O ? "true" : "false", "aria-label": h.value(O, $) }, iconClass: "q-rating__icon" + (P === true || L === true ? " q-rating__icon--active" : "") + (I === true ? " q-rating__icon--exselected" : "") + (i.value === O ? " q-rating__icon--hovered" : "") + (T !== void 0 ? ` text-${T}` : "") });
    }
    return y;
  }), g = v(() => {
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
  function S(y, b) {
    switch (y.keyCode) {
      case 13:
      case 32:
        return _(b), Ne(y);
      case 37:
      case 40:
        return u[`rt${b - 1}`] && u[`rt${b - 1}`].focus(), Ne(y);
      case 39:
      case 38:
        return u[`rt${b + 1}`] && u[`rt${b + 1}`].focus(), Ne(y);
    }
  }
  function p() {
    i.value = 0;
  }
  return Ta(() => {
    u = {};
  }), () => {
    const y = [];
    return m.value.forEach(({ iconClass: b, name: x, attrs: A }, k) => {
      const O = k + 1;
      y.push(d("div", { key: O, ref: (P) => {
        u[`rt${O}`] = P;
      }, class: "q-rating__icon-container flex flex-center", ...A, onClick() {
        _(O);
      }, onMouseover() {
        w(O);
      }, onMouseout: p, onFocus() {
        w(O);
      }, onBlur: p, onKeyup(P) {
        S(P, O);
      } }, kt(t[`tip-${O}`], [d(et, { class: b, name: x })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: a.value, ...g.value }, y);
  };
} });
ve({ name: "QResponsive", props: Is, setup(e, { slots: t }) {
  const n = Ds(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var R1 = ve({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), Ad = ["vertical", "horizontal"], Zi = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Rd = { prevent: true, mouse: true, mouseAllDir: true }, Pd = (e) => e >= 250 ? 50 : Math.ceil(e / 5), P1 = ve({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = U(false), a = U(false), r = U(false), o = { vertical: U(0), horizontal: U(0) }, i = { vertical: { ref: U(null), position: U(0), size: U(0) }, horizontal: { ref: U(null), position: U(0), size: U(0) } }, { proxy: u } = Se(), c = lt(e, u.$q);
  let s = null, f;
  const h = U(null), m = v(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: v(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: v(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = v(() => {
    const q = i.vertical.size.value - o.vertical.value;
    if (q <= 0) return 0;
    const D = ct(i.vertical.position.value / q, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.vertical.thumbHidden = v(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = v(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = v(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Pd(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = v(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = v(() => {
    const q = i.horizontal.size.value - o.horizontal.value;
    if (q <= 0) return 0;
    const D = ct(Math.abs(i.horizontal.position.value) / q, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = v(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = v(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = v(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Pd(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = v(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = v(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = v(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = v(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const q = {};
    return Ad.forEach((D) => {
      const N = i[D];
      Object.assign(q, { [D + "Position"]: N.position.value, [D + "Percentage"]: N.percentage.value, [D + "Size"]: N.size.value, [D + "ContainerSize"]: o[D].value, [D + "ContainerInnerSize"]: o[D + "Inner"].value });
    }), q;
  }
  const w = Ma(() => {
    const q = _();
    q.ref = u, n("scroll", q);
  }, 0);
  function S(q, D, N) {
    if (Ad.includes(q) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (q === "vertical" ? ba : Pi)(h.value, D, N);
  }
  function p({ height: q, width: D }) {
    let N = false;
    o.vertical.value !== q && (o.vertical.value = q, N = true), o.horizontal.value !== D && (o.horizontal.value = D, N = true), N === true && k();
  }
  function y({ position: q }) {
    let D = false;
    i.vertical.position.value !== q.top && (i.vertical.position.value = q.top, D = true), i.horizontal.position.value !== q.left && (i.horizontal.position.value = q.left, D = true), D === true && k();
  }
  function b({ height: q, width: D }) {
    i.horizontal.size.value !== D && (i.horizontal.size.value = D, k()), i.vertical.size.value !== q && (i.vertical.size.value = q, k());
  }
  function x(q, D) {
    const N = i[D];
    if (q.isFirst === true) {
      if (N.thumbHidden.value === true) return;
      f = N.position.value, a.value = true;
    } else if (a.value !== true) return;
    q.isFinal === true && (a.value = false);
    const j = Zi[D], Y = (N.size.value - o[D].value) / (o[D + "Inner"].value - N.thumbSize.value), le = q.distance[j.dist], pe = f + (q.direction === j.dir ? 1 : -1) * le * Y;
    O(pe, D);
  }
  function A(q, D) {
    const N = i[D];
    if (N.thumbHidden.value !== true) {
      const j = D === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], Y = q[Zi[D].offset] - j, le = N.thumbStart.value - j;
      if (Y < le || Y > le + N.thumbSize.value) {
        const pe = Y - N.thumbSize.value / 2, W = ct(pe / (o[D + "Inner"].value - N.thumbSize.value), 0, 1);
        O(W * Math.max(0, N.size.value - o[D].value), D);
      }
      N.ref.value !== null && N.ref.value.dispatchEvent(new MouseEvent(q.type, q));
    }
  }
  function k() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function O(q, D) {
    h.value[Zi[D].scroll] = q;
  }
  let P = null;
  function L() {
    P !== null && clearTimeout(P), P = setTimeout(() => {
      P = null, r.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function I() {
    P !== null && (clearTimeout(P), P = null), r.value = false;
  }
  let T = null;
  he(() => u.$q.lang.rtl, (q) => {
    h.value !== null && Pi(h.value, Math.abs(i.horizontal.position.value) * (q === true ? -1 : 1));
  }), Fn(() => {
    T = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), _l(() => {
    if (T === null) return;
    const q = h.value;
    q !== null && (Pi(q, T.left), ba(q, T.top));
  }), Ke(w.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: S, setScrollPercentage(q, D, N) {
    S(q, D * (i[q].size.value - o[q].value) * (q === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), N);
  } });
  const $ = { scroll: i, thumbVertDir: [[gn, (q) => {
    x(q, "vertical");
  }, void 0, { vertical: true, ...Rd }]], thumbHorizDir: [[gn, (q) => {
    x(q, "horizontal");
  }, void 0, { horizontal: true, ...Rd }]], onVerticalMousedown(q) {
    A(q, "vertical");
  }, onHorizontalMousedown(q) {
    A(q, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: L, onMouseleave: I }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, kt(t.default, [d(Hl, { debounce: 0, onResize: b })])), d(Ch, { axis: "both", onScroll: y })]), d(Hl, { debounce: 0, onResize: p }), d(R1, { store: $, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
} }), Cn = 1e3, L1 = ["start", "center", "end", "start-force", "center-force", "end-force"], Th = Array.prototype.filter, B1 = __QUASAR_SSR__ || window.getComputedStyle(document.body).overflowAnchor === void 0 ? St : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null) return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Th.call(n, (a) => a.dataset && a.dataset.qVsAnchor !== void 0).forEach((a) => {
      delete a.dataset.qVsAnchor;
    });
    const l = n[t];
    (l == null ? void 0 : l.dataset) && (l.dataset.qVsAnchor = "");
  }));
};
function ya(e, t) {
  return e + t;
}
function Ji(e, t, n, l, a, r, o, i) {
  const u = e === window ? document.scrollingElement || document.documentElement : e, c = a === true ? "offsetWidth" : "offsetHeight", s = { scrollStart: 0, scrollViewSize: -o - i, scrollMaxSize: 0, offsetStart: -o, offsetEnd: -i };
  if (a === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, r === true && (s.scrollStart = (Sr === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let f = n.previousElementSibling; f !== null; f = f.previousElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += f[c]);
  if (l !== null) for (let f = l.nextElementSibling; f !== null; f = f.nextElementSibling) f.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += f[c]);
  if (t !== e) {
    const f = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    a === true ? (s.offsetStart += h.left - f.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - f.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Ld(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (Sr === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (Sr === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function za(e, t, n, l) {
  if (n >= l) return 0;
  const a = t.length, r = Math.floor(n / Cn), o = Math.floor((l - 1) / Cn) + 1;
  let i = e.slice(r, o).reduce(ya, 0);
  return n % Cn !== 0 && (i -= t.slice(r * Cn, n).reduce(ya, 0)), l % Cn !== 0 && l !== a && (i -= t.slice(l, o * Cn).reduce(ya, 0)), i;
}
var Mh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Eh = Object.keys(Mh), Du = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Mh };
function $h({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const a = Se(), { props: r, emit: o, proxy: i } = a, { $q: u } = i;
  let c, s, f, h = [], m;
  const g = U(0), _ = U(0), w = U({}), S = U(null), p = U(null), y = U(null), b = U({ from: 0, to: 0 }), x = v(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  l === void 0 && (l = v(() => r.virtualScrollItemSize));
  const A = v(() => l.value + ";" + r.virtualScrollHorizontal), k = v(() => A.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter);
  he(k, () => {
    N();
  }), he(A, O);
  function O() {
    D(s, true);
  }
  function P(W) {
    D(W === void 0 ? s : W);
  }
  function L(W, M) {
    const ee = t();
    if (ee == null || ee.nodeType === 8) return;
    const X = Ji(ee, n(), S.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd);
    f !== X.scrollViewSize && N(X.scrollViewSize), T(ee, X, Math.min(e.value - 1, Math.max(0, parseInt(W, 10) || 0)), 0, L1.indexOf(M) !== -1 ? M : s !== -1 && W > s ? "end" : "start");
  }
  function I() {
    const W = t();
    if (W == null || W.nodeType === 8) return;
    const M = Ji(W, n(), S.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd), ee = e.value - 1, X = M.scrollMaxSize - M.offsetStart - M.offsetEnd - _.value;
    if (c === M.scrollStart) return;
    if (M.scrollMaxSize <= 0) {
      T(W, M, 0, 0);
      return;
    }
    f !== M.scrollViewSize && N(M.scrollViewSize), $(b.value.from);
    const be = Math.floor(M.scrollMaxSize - Math.max(M.scrollViewSize, M.offsetEnd) - Math.min(m[ee], M.scrollViewSize / 2));
    if (be > 0 && Math.ceil(M.scrollStart) >= be) {
      T(W, M, ee, M.scrollMaxSize - M.offsetEnd - h.reduce(ya, 0));
      return;
    }
    let B = 0, R = M.scrollStart - M.offsetStart, J = R;
    if (R <= X && R + M.scrollViewSize >= g.value) R -= g.value, B = b.value.from, J = R;
    else for (let F = 0; R >= h[F] && B < ee; F++) R -= h[F], B += Cn;
    for (; R > 0 && B < ee; ) R -= m[B], R > -M.scrollViewSize ? (B++, J = R) : J = m[B] + R;
    T(W, M, B, J);
  }
  function T(W, M, ee, X, be) {
    const B = typeof be == "string" && be.indexOf("-force") !== -1, R = B === true ? be.replace("-force", "") : be, J = R !== void 0 ? R : "start";
    let F = Math.max(0, ee - w.value[J]), re = F + w.value.total;
    re > e.value && (re = e.value, F = Math.max(0, re - w.value.total)), c = M.scrollStart;
    const we = F !== b.value.from || re !== b.value.to;
    if (we === false && R === void 0) {
      Y(ee);
      return;
    }
    const { activeElement: C } = document, E = y.value;
    we === true && E !== null && E !== C && E.contains(C) === true && (E.addEventListener("focusout", q), setTimeout(() => {
      E == null ? void 0 : E.removeEventListener("focusout", q);
    })), B1(E, ee - F);
    const z = R !== void 0 ? m.slice(F, ee).reduce(ya, 0) : 0;
    if (we === true) {
      const Z = re >= b.value.from && F <= b.value.to ? b.value.to : re;
      b.value = { from: F, to: Z }, g.value = za(h, m, 0, F), _.value = za(h, m, re, e.value), requestAnimationFrame(() => {
        b.value.to !== re && c === M.scrollStart && (b.value = { from: b.value.from, to: re }, _.value = za(h, m, re, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== M.scrollStart) return;
      we === true && $(F);
      const Z = m.slice(F, ee).reduce(ya, 0), te = Z + M.offsetStart + g.value, Q = te + m[ee];
      let de = te + X;
      if (R !== void 0) {
        const me = Z - z, fe = M.scrollStart + me;
        de = B !== true && fe < te && Q < fe + M.scrollViewSize ? fe : R === "end" ? Q - M.scrollViewSize : te - (R === "start" ? 0 : Math.round((M.scrollViewSize - m[ee]) / 2));
      }
      c = de, Ld(W, de, r.virtualScrollHorizontal, u.lang.rtl), Y(ee);
    });
  }
  function $(W) {
    const M = y.value;
    if (M) {
      const ee = Th.call(M.children, (F) => F.classList && F.classList.contains("q-virtual-scroll--skip") === false), X = ee.length, be = r.virtualScrollHorizontal === true ? (F) => F.getBoundingClientRect().width : (F) => F.offsetHeight;
      let B = W, R, J;
      for (let F = 0; F < X; ) {
        for (R = be(ee[F]), F++; F < X && ee[F].classList.contains("q-virtual-scroll--with-prev") === true; ) R += be(ee[F]), F++;
        J = R - m[B], J !== 0 && (m[B] += J, h[Math.floor(B / Cn)] += J), B++;
      }
    }
  }
  function q() {
    var _a2;
    (_a2 = y.value) == null ? void 0 : _a2.focus();
  }
  function D(W, M) {
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
      for (let F = B * Cn; F < J; F++) R += m[F];
      h.push(R);
    }
    s = -1, c = void 0, g.value = za(h, m, 0, b.value.from), _.value = za(h, m, b.value.to, e.value), W >= 0 ? ($(b.value.from), Xe(() => {
      L(W);
    })) : le();
  }
  function N(W) {
    if (W === void 0 && typeof window < "u") {
      const R = t();
      R != null && R.nodeType !== 8 && (W = Ji(R, n(), S.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd).scrollViewSize);
    }
    f = W;
    const M = parseFloat(r.virtualScrollSliceRatioBefore) || 0, ee = parseFloat(r.virtualScrollSliceRatioAfter) || 0, X = 1 + M + ee, be = W === void 0 || W <= 0 ? 1 : Math.ceil(W / l.value), B = Math.max(1, be, Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / X));
    w.value = { total: Math.ceil(B * X), start: Math.ceil(B * M), center: Math.ceil(B * (0.5 + M)), end: Math.ceil(B * (1 + M)), view: be };
  }
  function j(W, M) {
    const ee = r.virtualScrollHorizontal === true ? "width" : "height", X = { ["--q-virtual-scroll-item-" + ee]: l.value + "px" };
    return [W === "tbody" ? d(W, { class: "q-virtual-scroll__padding", key: "before", ref: S }, [d("tr", [d("td", { style: { [ee]: `${g.value}px`, ...X }, colspan: x.value })])]) : d(W, { class: "q-virtual-scroll__padding", key: "before", ref: S, style: { [ee]: `${g.value}px`, ...X } }), d(W, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, M.flat()), W === "tbody" ? d(W, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [ee]: `${_.value}px`, ...X }, colspan: x.value })])]) : d(W, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [ee]: `${_.value}px`, ...X } })];
  }
  function Y(W) {
    s !== W && (r.onVirtualScroll !== void 0 && o("virtualScroll", { index: W, from: b.value.from, to: b.value.to - 1, direction: W < s ? "decrease" : "increase", ref: i }), s = W);
  }
  N();
  const le = Ma(I, u.platform.is.ios === true ? 120 : 35);
  Wo(() => {
    N();
  });
  let pe = false;
  return Fn(() => {
    pe = true;
  }), _l(() => {
    if (pe !== true) return;
    const W = t();
    c !== void 0 && W !== void 0 && W !== null && W.nodeType !== 8 ? Ld(W, c, r.virtualScrollHorizontal, u.lang.rtl) : L(s);
  }), __QUASAR_SSR__ || Ke(() => {
    le.cancel();
  }), Object.assign(i, { scrollTo: L, reset: O, refresh: P }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: N, onVirtualScrollEvt: le, localResetVirtualScroll: D, padVirtualScroll: j, scrollTo: L, reset: O, refresh: P };
}
var Bd = (e) => ["add", "add-unique", "toggle"].includes(e), O1 = ".*+?^${}()|[]\\", F1 = Object.keys(ci);
function eu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var V1 = ve({ name: "QSelect", inheritAttrs: false, props: { ...Du, ...wn, ...ci, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Bd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Du.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...di, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = U(false), o = U(false), i = U(-1), u = U(""), c = U(false), s = U(false);
  let f = null, h = null, m, g, _, w = null, S, p, y, b;
  const x = U(null), A = U(null), k = U(null), O = U(null), P = U(null), L = qs(e), I = _h(ue), T = v(() => Array.isArray(e.options) ? e.options.length : 0), $ = v(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: q, virtualScrollSliceSizeComputed: D, localResetVirtualScroll: N, padVirtualScroll: j, onVirtualScrollEvt: Y, scrollTo: le, setVirtualScrollSize: pe } = $h({ virtualScrollLength: T, getVirtualScrollTarget: jt, getVirtualScrollEl: xt, virtualScrollItemSizeComputed: $ }), W = fi(), M = v(() => {
    const G = e.mapOptions === true && e.multiple !== true, Ae = e.modelValue !== void 0 && (e.modelValue !== null || G === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const Re = e.mapOptions === true && m !== void 0 ? m : [], tt = Ae.map((gt) => ae(gt, Re));
      return e.modelValue === null && G === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Ae;
  }), ee = v(() => {
    const G = {};
    return F1.forEach((Ae) => {
      const Re = e[Ae];
      Re !== void 0 && (G[Ae] = Re);
    }), G;
  }), X = v(() => e.optionsDark === null ? W.isDark.value : e.optionsDark), be = v(() => jl(M.value)), B = v(() => {
    let G = "q-field__input q-placeholder col";
    return e.hideSelected === true || M.value.length === 0 ? [G, e.inputClass] : (G += " q-field__input--padding", e.inputClass === void 0 ? G : [G, e.inputClass]);
  }), R = v(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), J = v(() => T.value === 0), F = v(() => M.value.map((G) => ne.value(G)).join(", ")), re = v(() => e.displayValue !== void 0 ? e.displayValue : F.value), we = v(() => e.optionsHtml === true ? () => true : (G) => (G == null ? void 0 : G.html) === true), C = v(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || M.value.some(we.value))), E = v(() => W.focused.value === true ? e.tabindex : -1), z = v(() => {
    const G = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": `${W.targetUid.value}_lb` };
    return i.value >= 0 && (G["aria-activedescendant"] = `${W.targetUid.value}_${i.value}`), G;
  }), Z = v(() => ({ id: `${W.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), te = v(() => M.value.map((G, Ae) => ({ index: Ae, opt: G, html: we.value(G), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: E.value }))), Q = v(() => {
    if (T.value === 0) return [];
    const { from: G, to: Ae } = q.value;
    return e.options.slice(G, Ae).map((Re, tt) => {
      const gt = H.value(Re) === true, vt = ye(Re) === true, Dt = G + tt, $t = { clickable: true, active: vt, activeClass: fe.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: X.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${W.targetUid.value}_${Dt}`, onClick: () => {
        Ve(Re);
      } };
      return gt !== true && (i.value === Dt && ($t.focused = true), a.platform.is.desktop === true && ($t.onMousemove = () => {
        r.value === true && ie(Dt);
      })), { index: Dt, opt: Re, html: we.value(Re), label: ne.value(Re), selected: $t.active, focused: $t.focused, toggleOption: Ve, setOptionIndex: ie, itemProps: $t };
    });
  }), de = v(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown), me = v(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), fe = v(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = v(() => eu(e.optionValue, "value")), ne = v(() => eu(e.optionLabel, "label")), H = v(() => eu(e.optionDisable, "disable")), oe = v(() => M.value.map(ce.value)), _e = v(() => {
    const G = { onInput: ue, onChange: I, onKeydown: it, onKeyup: $e, onKeypress: We, onFocus: Ce, onClick(Ae) {
      g === true && wt(Ae);
    } };
    return G.onCompositionstart = G.onCompositionupdate = G.onCompositionend = I, G;
  });
  he(M, (G) => {
    m = G, e.useInput === true && e.fillInput === true && e.multiple !== true && W.innerLoading.value !== true && (o.value !== true && r.value !== true || be.value !== true) && (_ !== true && cn(), (o.value === true || r.value === true) && Be(""));
  }, { immediate: true }), he(() => e.fillInput, cn), he(r, hi), he(T, _g);
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
    qe(G), W.focus();
  }
  function He(G, Ae) {
    const Re = ke(G);
    if (e.multiple !== true) {
      e.fillInput === true && Oe(ne.value(G), true, true), n("update:modelValue", Re);
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
    if (W.editable.value !== true || G === void 0 || H.value(G) === true) return;
    const Re = ce.value(G);
    if (e.multiple !== true) {
      Ae !== true && (Oe(e.fillInput === true ? ne.value(G) : "", true, true), at()), (_a2 = A.value) == null ? void 0 : _a2.focus(), (M.value.length === 0 || kn(ce.value(M.value[0]), Re) !== true) && n("update:modelValue", e.emitValue === true ? Re : G);
      return;
    }
    if ((g !== true || c.value === true) && W.focus(), Ce(), M.value.length === 0) {
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
        Re = Co(Re + G, -1, T.value - 1);
      while (Re !== -1 && Re !== i.value && H.value(e.options[Re]) === true);
      i.value !== Re && (ie(Re), le(Re), Ae !== true && e.useInput === true && e.fillInput === true && xe(Re >= 0 ? ne.value(e.options[Re]) : S, true));
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
    e.useInput === true && A.value !== null && (G === void 0 || A.value === G.target && G.target.value === F.value) && A.value.select();
  }
  function Fe(G) {
    yn(G, 27) === true && r.value === true && (wt(G), at(), cn()), n("keyup", G);
  }
  function $e(G) {
    const { value: Ae } = G.target;
    if (G.keyCode !== void 0) {
      Fe(G);
      return;
    }
    if (G.target.value = "", f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), cn(), typeof Ae == "string" && Ae.length !== 0) {
      const Re = Ae.toLocaleLowerCase(), tt = (vt) => {
        const Dt = e.options.find(($t) => String(vt.value($t)).toLocaleLowerCase() === Re);
        return Dt === void 0 ? false : (M.value.indexOf(Dt) === -1 ? Ve(Dt) : at(), true);
      }, gt = (vt) => {
        tt(ce) !== true && vt !== true && tt(ne) !== true && Be(Ae, true, () => gt(true));
      };
      gt();
    } else W.clearValue(G);
  }
  function We(G) {
    n("keypress", G);
  }
  function it(G) {
    if (n("keydown", G), Ql(G) === true) return;
    const Ae = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), Re = G.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Ae === true);
    if (G.keyCode === 27) {
      Vt(G);
      return;
    }
    if (G.keyCode === 9 && Re === false) {
      Le();
      return;
    }
    if (G.target === void 0 || G.target.id !== W.targetUid.value || W.editable.value !== true) return;
    if (G.keyCode === 40 && W.innerLoading.value !== true && r.value === false) {
      Ne(G), Ie();
      return;
    }
    if (G.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? qe(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (G.keyCode === 35 || G.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (Ne(G), i.value = -1, ge(G.keyCode === 36 ? 1 : -1, e.multiple)), (G.keyCode === 33 || G.keyCode === 34) && D.value !== void 0 && (Ne(G), i.value = Math.max(-1, Math.min(T.value, i.value + (G.keyCode === 33 ? -1 : 1) * D.value.view)), ge(G.keyCode === 33 ? 1 : -1, e.multiple)), (G.keyCode === 38 || G.keyCode === 40) && (Ne(G), ge(G.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = T.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && G.key !== void 0 && G.key.length === 1 && G.altKey === false && G.ctrlKey === false && G.metaKey === false && (G.keyCode !== 32 || y.length !== 0)) {
      r.value !== true && Ie(G);
      const gt = G.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (Ne(G), y += gt);
      const Dt = new RegExp("^" + y.split("").map((gi) => O1.indexOf(gi) !== -1 ? "\\" + gi : gi).join(".*"), "i");
      let $t = i.value;
      if (vt === true || $t < 0 || Dt.test(ne.value(e.options[$t])) !== true) do
        $t = Co($t + 1, -1, tt - 1);
      while ($t !== i.value && (H.value(e.options[$t]) === true || Dt.test(ne.value(e.options[$t])) !== true));
      i.value !== $t && Xe(() => {
        ie($t), le($t), $t >= 0 && e.useInput === true && e.fillInput === true && xe(ne.value(e.options[$t]), true);
      });
      return;
    }
    if (!(G.keyCode !== 13 && (G.keyCode !== 32 || e.useInput === true || y !== "") && (G.keyCode !== 9 || Re === false))) {
      if (G.keyCode !== 9 && Ne(G), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Ae === true) {
        const gt = (vt, Dt) => {
          var _a2;
          if (Dt) {
            if (Bd(Dt) !== true) return;
          } else Dt = e.newValueMode;
          if (Oe("", e.multiple !== true, true), vt == null) return;
          (Dt === "toggle" ? Ve : He)(vt, Dt === "add-unique"), e.multiple !== true && ((_a2 = A.value) == null ? void 0 : _a2.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      r.value === true ? Le() : W.innerLoading.value !== true && Ie();
    }
  }
  function xt() {
    return g === true ? P.value : k.value !== null && k.value.contentEl !== null ? k.value.contentEl : void 0;
  }
  function jt() {
    return xt();
  }
  function tl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? te.value.map((G) => t["selected-item"](G)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? te.value.map((G, Ae) => d(Bm, { key: "option-" + Ae, removable: W.editable.value === true && H.value(G.opt) !== true, dense: true, textColor: e.color, tabindex: E.value, onRemove() {
      G.removeAtIndex(Ae);
    } }, () => d("span", { class: "ellipsis", [G.html === true ? "innerHTML" : "textContent"]: ne.value(G.opt) }))) : [d("span", { class: "ellipsis", [C.value === true ? "innerHTML" : "textContent"]: re.value })];
  }
  function ln() {
    if (J.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const G = t.option !== void 0 ? t.option : (Re) => d(Sa, { key: Re.index, ...Re.itemProps }, () => d(mn, () => d(Vu, () => d("span", { [Re.html === true ? "innerHTML" : "textContent"]: Re.label }))));
    let Ae = j("div", Q.value.map(G));
    return t["before-options"] !== void 0 && (Ae = t["before-options"]().concat(Ae)), kt(t["after-options"], Ae);
  }
  function zn(G, Ae) {
    const Re = Ae === true ? { ...z.value, ...W.splitAttrs.attributes.value } : void 0, tt = { ref: Ae === true ? A : void 0, key: "i_t", class: B.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...Re, id: Ae === true ? W.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": G === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ..._e.value };
    return G !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function ue(G) {
    f !== null && (clearTimeout(f), f = null), h !== null && (clearTimeout(h), h = null), !(G && G.target && G.target.qComposing === true) && (xe(G.target.value || ""), _ = true, S = u.value, W.focused.value !== true && (g !== true || c.value === true) && W.focus(), e.onFilter !== void 0 && (f = setTimeout(() => {
      f = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function xe(G, Ae) {
    u.value !== G && (u.value = G, Ae === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", G) : h = setTimeout(() => {
      h = null, n("inputValue", G);
    }, e.inputDebounce));
  }
  function Oe(G, Ae, Re) {
    _ = Re !== true, e.useInput === true && (xe(G, true), (Ae === true || Re !== true) && (S = G), Ae !== true && Be(G));
  }
  function Be(G, Ae, Re) {
    if (e.onFilter === void 0 || Ae !== true && W.focused.value !== true) return;
    W.innerLoading.value === true ? n("filterAbort") : (W.innerLoading.value = true, s.value = true), G !== "" && e.multiple !== true && M.value.length !== 0 && _ !== true && G === ne.value(M.value[0]) && (G = "");
    const tt = setTimeout(() => {
      r.value === true && (r.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", G, (gt, vt) => {
      (Ae === true || W.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, Xe(() => {
        W.innerLoading.value = false, W.editable.value === true && (Ae === true ? r.value === true && at() : r.value === true ? hi(true) : r.value = true), typeof vt == "function" && Xe(() => {
          vt(l);
        }), typeof Re == "function" && Xe(() => {
          Re(l);
        });
      }));
    }, () => {
      W.focused.value === true && w === tt && (clearTimeout(w), W.innerLoading.value = false, s.value = false), r.value === true && (r.value = false);
    });
  }
  function Ue() {
    return d(ii, { ref: k, class: R.value, style: e.popupContentStyle, modelValue: r.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && J.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: X.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: me.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Z.value, onScrollPassive: Y, onBeforeShow: Ws, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(G) {
    Ys(G), Le();
  }
  function ht() {
    pe();
  }
  function V(G) {
    var _a2;
    wt(G), (_a2 = A.value) == null ? void 0 : _a2.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function K(G) {
    wt(G), Xe(() => {
      c.value = false;
    });
  }
  function se() {
    const G = [d(i1, { class: `col-auto ${W.fieldClass.value}`, ...ee.value, for: W.targetUid.value, dark: X.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...W.splitAttrs.listeners.value, onFocus: V, onBlur: K }, { ...t, rawControl: () => W.getControl(true), before: void 0, after: void 0 })];
    return r.value === true && G.push(d("div", { ref: P, class: R.value + " scroll", style: e.popupContentStyle, ...Z.value, onClick: Vt, onScrollPassive: Y }, ln())), d(si, { ref: O, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Ws, onBeforeHide: Te, onHide: Ee, onShow: Ge }, () => d("div", { class: "q-select__dialog" + (X.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, G));
  }
  function Te(G) {
    Ys(G), O.value !== null && O.value.__updateRefocusTarget(W.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), W.focused.value = false;
  }
  function Ee(G) {
    at(), W.focused.value === false && n("blur", G), cn();
  }
  function Ge() {
    const G = document.activeElement;
    (G === null || G.id !== W.targetUid.value) && A.value !== null && A.value !== G && A.value.focus(), pe();
  }
  function Le() {
    o.value !== true && (i.value = -1, r.value === true && (r.value = false), W.focused.value === false && (w !== null && (clearTimeout(w), w = null), W.innerLoading.value === true && (n("filterAbort"), W.innerLoading.value = false, s.value = false)));
  }
  function Ie(G) {
    W.editable.value === true && (g === true ? (W.onControlFocusin(G), o.value = true, Xe(() => {
      W.focus();
    })) : W.focus(), e.onFilter !== void 0 ? Be(u.value) : (J.value !== true || t["no-option"] !== void 0) && (r.value = true));
  }
  function at() {
    o.value = false, Le();
  }
  function cn() {
    e.useInput === true && Oe(e.multiple !== true && e.fillInput === true && M.value.length !== 0 && ne.value(M.value[0]) || "", true, true);
  }
  function hi(G) {
    let Ae = -1;
    if (G === true) {
      if (M.value.length !== 0) {
        const Re = ce.value(M.value[0]);
        Ae = e.options.findIndex((tt) => kn(ce.value(tt), Re));
      }
      N(Ae);
    }
    ie(Ae);
  }
  function _g(G, Ae) {
    r.value === true && W.innerLoading.value === false && (N(-1, true), Xe(() => {
      r.value === true && W.innerLoading.value === false && (G > Ae ? N() : hi(true));
    }));
  }
  function Ks() {
    o.value === false && k.value !== null && k.value.updatePosition();
  }
  function Ws(G) {
    G !== void 0 && wt(G), n("popupShow", G), W.hasPopupOpen = true, W.onControlFocusin(G);
  }
  function Ys(G) {
    G !== void 0 && wt(G), n("popupHide", G), W.hasPopupOpen = false, W.onControlFocusout(G);
  }
  function Gs() {
    g = a.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || J.value === false : true), p = a.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Ta(Gs), Yo(Ks), Gs(), Ke(() => {
    f !== null && clearTimeout(f), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: Ie, hidePopup: at, removeAtIndex: qe, add: He, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ie, moveOptionSelection: ge, filter: Be, updateMenuPosition: Ks, updateInputValue: Oe, isOptionSelected: ye, getEmittingOptionValue: ke, isOptionDisabled: (...G) => H.value.apply(null, G) === true, getOptionValue: (...G) => ce.value.apply(null, G), getOptionLabel: (...G) => ne.value.apply(null, G) }), Object.assign(W, { innerValue: M, fieldClass: v(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: x, targetRef: A, hasValue: be, showPopup: Ie, floatingLabel: v(() => e.hideSelected !== true && be.value === true || typeof u.value == "number" || u.value.length !== 0 || jl(e.displayValue)), getControlChild: () => {
    if (W.editable.value !== false && (o.value === true || J.value !== true || t["no-option"] !== void 0)) return g === true ? se() : Ue();
    W.hasPopupOpen === true && (W.hasPopupOpen = false);
  }, controlEvents: { onFocusin(G) {
    W.onControlFocusin(G);
  }, onFocusout(G) {
    W.onControlFocusout(G, () => {
      cn(), Le();
    });
  }, onClick(G) {
    var _a2;
    if (Vt(G), g !== true && r.value === true) {
      Le(), (_a2 = A.value) == null ? void 0 : _a2.focus();
      return;
    }
    Ie(G);
  } }, getControl: (G) => {
    const Ae = tl(), Re = G === true || o.value !== true || g !== true;
    if (e.useInput === true) Ae.push(zn(G, Re));
    else if (W.editable.value === true) {
      const gt = Re === true ? z.value : void 0;
      Ae.push(d("input", { ref: Re === true ? A : void 0, key: "d_t", class: "q-select__focus-target", id: Re === true ? W.targetUid.value : void 0, value: re.value, readonly: true, "data-autofocus": G === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Fe, onKeypress: We })), Re === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Ae.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: $e }));
    }
    if (L.value !== void 0 && e.disable !== true && oe.value.length !== 0) {
      const gt = oe.value.map((vt) => d("option", { value: vt, selected: true }));
      Ae.push(d("select", { class: "hidden", name: L.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || Re !== true ? void 0 : W.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...W.splitAttrs.listeners.value }, Ae);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (r.value === true ? " rotate-180" : ""), name: de.value })] : null }), vi(W);
} }), z1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], I1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
ve({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => z1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => I1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = v(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), r = v(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: r.value, style: a.value }, Pe(t.default));
} });
var Od = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
ve({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), i = U(null);
  let u = null, c = {}, s = {}, f = {};
  const h = v(() => a.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = v(() => "q-slide-item q-item-type overflow-hidden" + (r.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(S, p, y) {
    e.onSlide !== void 0 && n("slide", { side: S, ratio: p, isReset: y });
  }
  function w(S) {
    const p = i.value;
    if (S.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), Od.forEach((A) => {
      if (t[A[0]] !== void 0) {
        const k = f[A[0]];
        k.style.transform = "scale(1)", c.size[A[0]] = k.getBoundingClientRect()[A[3]];
      }
    }), c.axis = S.direction === "up" || S.direction === "down" ? "Y" : "X";
    else if (S.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else S.direction = c.axis === "X" ? S.offset.x < 0 ? "left" : "right" : S.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && S.direction === h.value.right || t.right === void 0 && S.direction === h.value.left || t.top === void 0 && S.direction === "down" || t.bottom === void 0 && S.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, x;
    c.axis === "X" ? (b = S.direction === "left" ? -1 : 1, y = b === 1 ? h.value.left : h.value.right, x = S.distance.x) : (b = S.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", x = S.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((A) => {
      s[A] && (s[A].style.visibility = y === A ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (x - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${x * b / Math.abs(b)}px)`, f[y].style.transform = `scale(${c.scale})`, _(y, c.scale, false));
  }
  return Ta(() => {
    s = {}, f = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const S = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((x) => p[x] === true);
    Od.forEach((x) => {
      const A = x[0];
      t[A] !== void 0 && S.push(d("div", { key: A, ref: (k) => {
        s[A] = k;
      }, class: `q-slide-item__${A} absolute-full row no-wrap items-${x[1]} justify-${x[2]}` + (e[A + "Color"] !== void 0 ? ` bg-${e[A + "Color"]}` : "") }, [d("div", { ref: (k) => {
        f[A] = k;
      } }, t[A]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return y.length === 0 ? S.push(b) : S.push(sn(b, o("dir#" + y.join(""), () => {
      const x = { prevent: true, stop: true, mouse: true };
      return y.forEach((A) => {
        x[A] = true;
      }), [[gn, w, void 0, x]];
    }))), d("div", { class: m.value }, S);
  };
} });
ve({ name: "QSpace", setup() {
  const e = d("div", { class: "q-space" });
  return () => e;
} });
var D1 = '<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>';
ve({ name: "QSpinnerAudio", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", innerHTML: D1 });
} });
var H1 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerBall", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: H1 });
} });
var N1 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
ve({ name: "QSpinnerBars", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: N1 });
} });
var j1 = '<rect x="25" y="25" width="50" height="50" fill="none" stroke-width="4" stroke="currentColor"><animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform></rect><rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>';
ve({ name: "QSpinnerBox", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: j1 });
} });
var U1 = '<circle cx="50" cy="50" r="48" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="currentColor"></circle><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="85" y2="50.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"></animateTransform></line><line stroke-linecap="round" stroke-width="4" stroke-miterlimit="10" stroke="currentColor" x1="50" y1="50" x2="49.5" y2="74"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite"></animateTransform></line>';
ve({ name: "QSpinnerClock", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: U1 });
} });
var Q1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerComment", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: Q1 });
} });
var K1 = '<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>';
ve({ name: "QSpinnerCube", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: K1 });
} });
var W1 = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerDots", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", innerHTML: W1 });
} });
var Y1 = '<g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g>';
ve({ name: "QSpinnerFacebook", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", innerHTML: Y1 });
} });
var G1 = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ve({ name: "QSpinnerGears", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: G1 });
} });
var X1 = '<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
ve({ name: "QSpinnerGrid", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg", innerHTML: X1 });
} });
var Z1 = '<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';
ve({ name: "QSpinnerHearts", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", innerHTML: Z1 });
} });
var J1 = '<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';
ve({ name: "QSpinnerHourglass", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: J1 });
} });
var e_ = '<path d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" fill="none" stroke="currentColor" stroke-width="8" stroke-dasharray="10.691205342610678 10.691205342610678" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate></path>';
ve({ name: "QSpinnerInfinity", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", innerHTML: e_ });
} });
var t_ = '<g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g>';
ve({ name: "QSpinnerIos", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64", innerHTML: t_ });
} });
var n_ = '<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>';
ve({ name: "QSpinnerOrbit", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: n_ });
} });
var l_ = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>';
ve({ name: "QSpinnerOval", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: l_ });
} });
var a_ = '<path d="M0 50A50 50 0 0 1 50 0L50 50L0 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="0.8s" repeatCount="indefinite"></animateTransform></path><path d="M50 0A50 50 0 0 1 100 50L50 50L50 0" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.6s" repeatCount="indefinite"></animateTransform></path><path d="M100 50A50 50 0 0 1 50 100L50 50L100 50" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.4s" repeatCount="indefinite"></animateTransform></path><path d="M50 100A50 50 0 0 1 0 50L50 50L50 100" fill="currentColor" opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="3.2s" repeatCount="indefinite"></animateTransform></path>';
ve({ name: "QSpinnerPie", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: a_ });
} });
var r_ = '<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerPuff", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", innerHTML: r_ });
} });
var o_ = '<g transform="scale(0.55)"><circle cx="30" cy="150" r="30" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></circle><path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path><path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor"><animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate></path></g>';
ve({ name: "QSpinnerRadio", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg", innerHTML: o_ });
} });
var i_ = '<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerRings", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", innerHTML: i_ });
} });
var u_ = '<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>';
ve({ name: "QSpinnerTail", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", innerHTML: u_ });
} });
ve({ name: "QSplitter", props: { ...nt, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = U(null), o = { before: U(null), after: U(null) }, i = v(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (a.value === true ? " q-splitter--dark" : "")), u = v(() => e.horizontal === true ? "height" : "width"), c = v(() => e.reverse !== true ? "before" : "after"), s = v(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function f(x) {
    return (e.unit === "%" ? x : Math.round(x)) + e.unit;
  }
  const h = v(() => ({ [c.value]: { [u.value]: f(e.modelValue) } }));
  let m, g, _, w, S;
  function p(x) {
    if (x.isFirst === true) {
      const k = r.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : k, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? k === 0 ? 0 : 100 / k : 1), r.value.classList.add("q-splitter--active");
      return;
    }
    if (x.isFinal === true) {
      S !== e.modelValue && n("update:modelValue", S), r.value.classList.remove("q-splitter--active");
      return;
    }
    const A = _ + w * (x.direction === m ? -1 : 1) * x.distance[e.horizontal === true ? "y" : "x"];
    S = Math.min(g, s.value[1], Math.max(s.value[0], A)), o[c.value].value.style[u.value] = f(S), e.emitImmediately === true && e.modelValue !== S && n("update:modelValue", S);
  }
  const y = v(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(x, A) {
    x < A[0] ? n("update:modelValue", A[0]) : x > A[1] && n("update:modelValue", A[1]);
  }
  return he(() => e.modelValue, (x) => {
    b(x, s.value);
  }), he(() => e.limits, () => {
    Xe(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const x = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: r }, kt(t.default, x));
  };
} });
var Ah = ve({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = Se(), l = U(null), a = v(() => e.stepper.modelValue === e.step.name), r = v(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = v(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = v(() => {
    const w = e.step.done;
    return r.value === false && (w === true || w === "");
  }), u = v(() => {
    const w = e.step.headerNav, S = w === true || w === "" || w === void 0;
    return r.value === false && e.stepper.headerNav && S;
  }), c = v(() => e.step.prefix && (a.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = v(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (a.value === true) {
      const S = e.step.activeIcon || e.stepper.activeIcon;
      return S === "none" ? w : S || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const S = e.step.errorIcon || e.stepper.errorIcon;
      return S === "none" ? w : S || n.iconSet.stepper.error;
    }
    if (r.value === false && i.value === true) {
      const S = e.step.doneIcon || e.stepper.doneIcon;
      return S === "none" ? w : S || n.iconSet.stepper.done;
    }
    return w;
  }), f = v(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (a.value === true) {
      const S = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return S !== void 0 ? S : w;
    }
    return w !== void 0 ? w : r.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = v(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (f.value !== void 0 ? ` text-${f.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (a.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === true ? " q-stepper__tab--disabled" : "")), m = v(() => e.stepper.headerNav !== true ? false : u.value);
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
    const S = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), S.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", w, S), [[ai, m.value]]);
  };
} });
function Rh(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Fd = { setup(e, { slots: t }) {
  return () => Rh(t);
} };
ve({ name: "QStep", props: { ...Ms, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Gv, ot);
  if (a === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: r } = Pr(), o = U(null), i = v(() => a.value.modelValue === e.name), u = v(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || a.value.vertical !== true ? {} : { onScroll(f) {
    const { target: h } = f;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", f);
  } }), c = v(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const f = a.value.vertical;
    return f === true && a.value.keepAlive === true ? d(rv, a.value.keepAliveProps.value, i.value === true ? [d(a.value.needsUniqueKeepAliveWrapper.value === true ? r(c.value, () => ({ ...Fd, name: c.value })) : Fd, { key: c.value }, t.default)] : void 0) : f !== true || i.value === true ? Rh(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, a.value.vertical === true ? [d(Ah, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), a.value.animated === true ? d(zs, s) : s()] : [s()]);
} });
var s_ = /(-\w)/g;
function c_(e) {
  const t = {};
  for (const n in e) {
    const l = n.replace(s_, (a) => a[1].toUpperCase());
    t[l] = e[n];
  }
  return t;
}
ve({ name: "QStepper", props: { ...nt, ...Es, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: $s, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, isValidPanelName: r, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h } = As();
  hn(Gv, v(() => ({ goToPanel: s, keepAliveProps: f, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = v(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = v(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      r(e.modelValue) && o();
      const S = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [S] : w.concat(S);
    }
    return [d("div", { class: g.value }, u().map((S) => {
      const p = c_(S.props);
      return d(Ah, { key: p.name, stepper: e, step: p, goToPanel: s });
    })), w, pn("div", { class: "q-stepper__content q-panel-parent" }, i(), "cont", e.swipeable, () => c.value)];
  }
  return () => (a(t), d("div", { class: m.value }, kt(t.navigation, _())));
} });
ve({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => d("div", { class: "q-stepper__nav" }, Pe(t.default));
} });
var d_ = ve({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
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
function Ph(e, t) {
  return d("div", e, [d("table", { class: "q-table" }, t)]);
}
var f_ = { list: xh, table: x1 }, v_ = ["list", "table", "__qtable"], m_ = ve({ name: "QVirtualScroll", props: { ...Du, type: { type: String, default: "list", validator: (e) => v_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Wl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const a = U(null), r = v(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = $h({ virtualScrollLength: r, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = v(() => {
    if (r.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), f = v(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = v(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  he(r, () => {
    i();
  }), he(() => e.scrollTarget, () => {
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
  function S() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), kt(t.after, p);
  }
  return Wo(() => {
    i();
  }), ft(() => {
    _();
  }), _l(() => {
    _();
  }), Fn(() => {
    w();
  }), Ke(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Ph({ ref: a, class: "q-table__middle " + f.value }, S()) : d(f_[e.type], { ...n, ref: a, class: [n.class, f.value], ...h.value }, S);
  };
} });
function h_(e, t) {
  return new Date(e) - new Date(t);
}
var g_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function b_(e, t, n, l) {
  const a = v(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), r = v(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const f = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let _ = h(m), w = h(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, m, g) * f : _ == null ? -1 * f : w == null ? 1 * f : s.sort !== void 0 ? s.sort(_, w, m, g) * f : pr(_) === true && pr(w) === true ? (_ - w) * f : qu(_) === true && qu(w) === true ? h_(_, w) * f : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * f : ([_, w] = [_, w].map((S) => (S + "").toLocaleString().toLowerCase()), _ < w ? -1 * f : _ === w ? 0 : f);
    });
  });
  function o(i) {
    let u = e.columnSortOrder;
    if (At(i) === true) i.sortOrder && (u = i.sortOrder), i = i.name;
    else {
      const f = n.value.find((h) => h.name === i);
      (f == null ? void 0 : f.sortOrder) && (u = f.sortOrder);
    }
    let { sortBy: c, descending: s } = t.value;
    c !== i ? (c = i, s = u === "da") : e.binaryStateSort === true ? s = !s : s === true ? u === "ad" ? c = null : s = false : u === "ad" ? s = true : c = null, l({ sortBy: c, descending: s, page: 1 });
  }
  return { columnToSort: a, computedSortMethod: r, sort: o };
}
var y_ = { filter: [String, Object], filterMethod: Function };
function p_(e, t) {
  const n = v(() => e.filterMethod !== void 0 ? e.filterMethod : (l, a, r, o) => {
    const i = a ? a.toLowerCase() : "";
    return l.filter((u) => r.some((c) => {
      const s = o(c, u) + "";
      return (s === "undefined" || s === "null" ? "" : s.toLowerCase()).indexOf(i) !== -1;
    }));
  });
  return he(() => e.filter, () => {
    Xe(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: n };
}
function __(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Vd(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var w_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function S_(e, t) {
  const { props: n, emit: l } = e, a = U(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), r = v(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...a.value, ...n.pagination } : a.value;
    return Vd(s);
  }), o = v(() => r.value.rowsNumber !== void 0);
  function i(s) {
    u({ pagination: s, filter: n.filter });
  }
  function u(s = {}) {
    Xe(() => {
      l("request", { pagination: s.pagination || r.value, filter: s.filter || n.filter, getCellValue: t });
    });
  }
  function c(s, f) {
    const h = Vd({ ...r.value, ...s });
    if (__(r.value, h) === true) {
      o.value === true && f === true && i(h);
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
function x_(e, t, n, l, a, r) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = v(() => l.value === true ? n.value.rowsNumber || 0 : r.value), s = v(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return (b - 1) * x;
  }), f = v(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return b * x;
  }), h = v(() => n.value.page === 1), m = v(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = v(() => f.value === 0 ? true : n.value.page >= m.value), _ = v(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((x) => ({ label: x === 0 ? u.lang.table.allRows : "" + x, value: x })));
  he(m, (b, x) => {
    if (b === x) return;
    const A = n.value.page;
    b && !A ? a({ page: 1 }) : b < A && a({ page: b });
  });
  function w() {
    a({ page: 1 });
  }
  function S() {
    const { page: b } = n.value;
    b > 1 && a({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: x } = n.value;
    f.value > 0 && b * x < c.value && a({ page: b + 1 });
  }
  function y() {
    a({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: f, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: S, nextPage: p, lastPage: y };
}
var C_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, k_ = ["update:selected", "selection"];
function q_(e, t, n, l) {
  const a = v(() => {
    const g = {};
    return e.selected.map(l.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), r = v(() => e.selection !== "none"), o = v(() => e.selection === "single"), i = v(() => e.selection === "multiple"), u = v(() => n.value.length !== 0 && n.value.every((g) => a.value[l.value(g)] === true)), c = v(() => u.value !== true && n.value.some((g) => a.value[l.value(g)] === true)), s = v(() => e.selected.length);
  function f(g) {
    return a.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, _, w, S) {
    t("selection", { rows: _, added: w, keys: g, evt: S });
    const p = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: r, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: f, clearSelection: h, updateSelection: m };
}
function zd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var T_ = { expanded: Array }, M_ = ["update:expanded"];
function E_(e, t) {
  const n = U(zd(e.expanded));
  he(() => e.expanded, (o) => {
    n.value = zd(o);
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
var $_ = { visibleColumns: Array };
function A_(e, t, n) {
  const l = v(() => {
    if (e.columns !== void 0) return e.columns;
    const i = e.rows[0];
    return i !== void 0 ? Object.keys(i).map((u) => ({ name: u, label: u.toUpperCase(), field: u, align: pr(i[u]) ? "right" : "left", sortable: true })) : [];
  }), a = v(() => {
    const { sortBy: i, descending: u } = t.value;
    return (e.visibleColumns !== void 0 ? l.value.filter((s) => s.required === true || e.visibleColumns.includes(s.name) === true) : l.value).map((s) => {
      const f = s.align || "right", h = `text-${f}`;
      return { ...s, align: f, __iconClass: `q-table__sort-icon q-table__sort-icon--${f}`, __thClass: h + (s.headerClasses !== void 0 ? " " + s.headerClasses : "") + (s.sortable === true ? " sortable" : "") + (s.name === i ? ` sorted ${u === true ? "sort-desc" : ""}` : ""), __tdStyle: s.style !== void 0 ? typeof s.style != "function" ? () => s.style : s.style : () => null, __tdClass: s.classes !== void 0 ? typeof s.classes != "function" ? () => h + " " + s.classes : (m) => h + " " + s.classes(m) : () => h };
    });
  }), r = v(() => {
    const i = {};
    return a.value.forEach((u) => {
      i[u.name] = u;
    }), i;
  }), o = v(() => e.tableColspan !== void 0 ? e.tableColspan : a.value.length + (n.value === true ? 1 : 0));
  return { colList: l, computedCols: a, computedColsMap: r, computedColspan: o };
}
var Xr = "q-table__bottom row items-center", Lh = {};
Eh.forEach((e) => {
  Lh[e] = {};
});
ve({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Lh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Rs, ...$_, ...y_, ...w_, ...T_, ...C_, ...g_ }, emits: ["request", "virtualScroll", ...Ps, ...M_, ...k_], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Ls(), u = v(() => typeof e.rowKey == "function" ? e.rowKey : (ue) => ue[e.rowKey]), c = U(null), s = U(null), f = v(() => e.grid !== true && e.virtualScroll === true), h = v(() => " q-table__card" + (r.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = v(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (r.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = v(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  he(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a2;
    f.value === true && ((_a2 = s.value) == null ? void 0 : _a2.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: S, requestServerInteraction: p, setPagination: y } = S_(l, ie), { computedFilterMethod: b } = p_(e, y), { isRowExpanded: x, setExpanded: A, updateExpanded: k } = E_(e, n), O = v(() => {
    let ue = e.rows;
    if (S.value === true || ue.length === 0) return ue;
    const { sortBy: xe, descending: Oe } = w.value;
    return e.filter && (ue = b.value(ue, e.filter, W.value, ie)), X.value !== null && (ue = be.value(e.rows === ue ? ue.slice() : ue, xe, Oe)), ue;
  }), P = v(() => O.value.length), L = v(() => {
    let ue = O.value;
    if (S.value === true) return ue;
    const { rowsPerPage: xe } = w.value;
    return xe !== 0 && (R.value === 0 && e.rows !== ue ? ue.length > J.value && (ue = ue.slice(0, J.value)) : ue = ue.slice(R.value, J.value)), ue;
  }), { hasSelectionMode: I, singleSelection: T, multipleSelection: $, allRowsSelected: q, someRowsSelected: D, rowsSelectedNumber: N, isRowSelected: j, clearSelection: Y, updateSelection: le } = q_(e, n, L, u), { colList: pe, computedCols: W, computedColsMap: M, computedColspan: ee } = A_(e, w, I), { columnToSort: X, computedSortMethod: be, sort: B } = b_(e, w, pe, y), { firstRowIndex: R, lastRowIndex: J, isFirstPage: F, isLastPage: re, pagesNumber: we, computedRowsPerPageOptions: C, computedRowsNumber: E, firstPage: z, prevPage: Z, nextPage: te, lastPage: Q } = x_(l, _, w, S, y, P), de = v(() => L.value.length === 0), me = v(() => {
    const ue = {};
    return Eh.forEach((xe) => {
      ue[xe] = e[xe];
    }), ue.virtualScrollItemSize === void 0 && (ue.virtualScrollItemSize = e.dense === true ? 28 : 48), ue;
  });
  function fe() {
    f.value === true && s.value.reset();
  }
  function ce() {
    if (e.grid === true) return zn();
    const ue = e.hideHeader !== true ? Ce : null;
    if (f.value === true) {
      const Oe = t["top-row"], Be = t["bottom-row"], Ue = { default: (yt) => _e(yt.item, t.body, yt.index) };
      if (Oe !== void 0) {
        const yt = d("tbody", Oe({ cols: W.value }));
        Ue.before = ue === null ? () => yt : () => [ue()].concat(yt);
      } else ue !== null && (Ue.before = ue);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: W.value }))), d(m_, { ref: s, class: e.tableClass, style: e.tableStyle, ...me.value, scrollTarget: e.virtualScrollTarget, items: L.value, type: "__qtable", tableColspan: ee.value, onVirtualScroll: H }, Ue);
    }
    const xe = [ke()];
    return ue !== null && xe.unshift(ue()), Ph({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, xe);
  }
  function ne(ue, xe) {
    if (s.value !== null) {
      s.value.scrollTo(ue, xe);
      return;
    }
    ue = parseInt(ue, 10);
    const Oe = c.value.querySelector(`tbody tr:nth-of-type(${ue + 1})`);
    if (Oe !== null) {
      const Be = c.value.querySelector(".q-table__middle.scroll"), Ue = Oe.offsetTop - e.virtualScrollStickySizeStart, yt = Ue < Be.scrollTop ? "decrease" : "increase";
      Be.scrollTop = Ue, n("virtualScroll", { index: ue, from: 0, to: _.value.rowsPerPage - 1, direction: yt });
    }
  }
  function H(ue) {
    n("virtualScroll", ue);
  }
  function oe() {
    return [d(A1, { class: "q-table__linear-progress", color: e.color, dark: r.value, indeterminate: true, trackColor: "transparent" })];
  }
  function _e(ue, xe, Oe) {
    const Be = u.value(ue), Ue = j(Be);
    if (xe !== void 0) {
      const K = { key: Be, row: ue, pageIndex: Oe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (K.__trStyle = e.tableRowStyleFn(ue)), e.tableRowClassFn !== void 0) {
        const se = e.tableRowClassFn(ue);
        se && (K.__trClass = `${se} ${K.__trClass}`);
      }
      return xe(qe(K));
    }
    const yt = t["body-cell"], ht = W.value.map((K) => {
      const se = t[`body-cell-${K.name}`], Te = se !== void 0 ? se : yt;
      return Te !== void 0 ? Te(Me({ key: Be, row: ue, pageIndex: Oe, col: K })) : d("td", { class: K.__tdClass(ue), style: K.__tdStyle(ue) }, ie(K, ue));
    });
    if (I.value === true) {
      const K = t["body-selection"], se = K !== void 0 ? K(He({ key: Be, row: ue, pageIndex: Oe })) : [d(ir, { modelValue: Ue, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (Te, Ee) => {
        le([Be], [ue], Te, Ee);
      } })];
      ht.unshift(d("td", { class: "q-table--col-auto-width" }, se));
    }
    const V = { key: Be, class: { selected: Ue } };
    if (e.onRowClick !== void 0 && (V.class["cursor-pointer"] = true, V.onClick = (K) => {
      n("rowClick", K, ue, Oe);
    }), e.onRowDblclick !== void 0 && (V.class["cursor-pointer"] = true, V.onDblclick = (K) => {
      n("rowDblclick", K, ue, Oe);
    }), e.onRowContextmenu !== void 0 && (V.class["cursor-pointer"] = true, V.onContextmenu = (K) => {
      n("rowContextmenu", K, ue, Oe);
    }), e.tableRowStyleFn !== void 0 && (V.style = e.tableRowStyleFn(ue)), e.tableRowClassFn !== void 0) {
      const K = e.tableRowClassFn(ue);
      K && (V.class[K] = true);
    }
    return d("tr", V, ht);
  }
  function ke() {
    const ue = t.body, xe = t["top-row"], Oe = t["bottom-row"];
    let Be = L.value.map((Ue, yt) => _e(Ue, ue, yt));
    return xe !== void 0 && (Be = xe({ cols: W.value }).concat(Be)), Oe !== void 0 && (Be = Be.concat(Oe({ cols: W.value }))), d("tbody", Be);
  }
  function qe(ue) {
    return Ve(ue), ue.cols = ue.cols.map((xe) => Ft({ ...xe }, "value", () => ie(xe, ue.row))), ue;
  }
  function Me(ue) {
    return Ve(ue), Ft(ue, "value", () => ie(ue.col, ue.row)), ue;
  }
  function He(ue) {
    return Ve(ue), ue;
  }
  function Ve(ue) {
    Object.assign(ue, { cols: W.value, colsMap: M.value, sort: B, rowIndex: R.value + ue.pageIndex, color: e.color, dark: r.value, dense: e.dense }), I.value === true && Ft(ue, "selected", () => j(ue.key), (xe, Oe) => {
      le([ue.key], [ue.row], xe, Oe);
    }), Ft(ue, "expand", () => x(ue.key), (xe) => {
      k(ue.key, xe);
    });
  }
  function ie(ue, xe) {
    const Oe = typeof ue.field == "function" ? ue.field(xe) : xe[ue.field];
    return ue.format !== void 0 ? ue.format(Oe, xe) : Oe;
  }
  const ge = v(() => ({ pagination: w.value, pagesNumber: we.value, isFirstPage: F.value, isLastPage: re.value, firstPage: z, prevPage: Z, nextPage: te, lastPage: Q, inFullscreen: o.value, toggleFullscreen: i }));
  function ae() {
    const ue = t.top, xe = t["top-left"], Oe = t["top-right"], Be = t["top-selection"], Ue = I.value === true && Be !== void 0 && N.value > 0, yt = "q-table__top relative-position row items-center";
    if (ue !== void 0) return d("div", { class: yt }, [ue(ge.value)]);
    let ht;
    if (Ue === true ? ht = Be(ge.value).slice() : (ht = [], xe !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [xe(ge.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Oe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Oe(ge.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const ye = v(() => D.value === true ? null : q.value);
  function Ce() {
    const ue = Fe();
    return e.loading === true && t.loading === void 0 && ue.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: ee.value }, oe())])), d("thead", ue);
  }
  function Fe() {
    const ue = t.header, xe = t["header-cell"];
    if (ue !== void 0) return ue($e({ header: true })).slice();
    const Oe = W.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : xe, ht = $e({ col: Be });
      return yt !== void 0 ? yt(ht) : d(d_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (T.value === true && e.grid !== true) Oe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if ($.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be($e({})) : [d(ir, { color: e.color, modelValue: ye.value, dark: r.value, dense: e.dense, "onUpdate:modelValue": We })];
      Oe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Oe)];
  }
  function $e(ue) {
    return Object.assign(ue, { cols: W.value, sort: B, colsMap: M.value, color: e.color, dark: r.value, dense: e.dense }), $.value === true && Ft(ue, "selected", () => ye.value, We), ue;
  }
  function We(ue) {
    D.value === true && (ue = false), le(L.value.map(u.value), L.value, ue);
  }
  const it = v(() => {
    const ue = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return a.lang.rtl === true ? ue.reverse() : ue;
  });
  function xt() {
    if (e.hideBottom === true) return;
    if (de.value === true) {
      if (e.hideNoData === true) return;
      const Oe = e.loading === true ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Oe, icon: a.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), Oe];
      return d("div", { class: Xr + " q-table__bottom--nodata" }, Ue);
    }
    const ue = t.bottom;
    if (ue !== void 0) return d("div", { class: Xr }, [ue(ge.value)]);
    const xe = e.hideSelectedBanner !== true && I.value === true && N.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(N.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Xr + " justify-end" }, tl(xe));
    if (xe.length !== 0) return d("div", { class: Xr }, xe);
  }
  function jt(ue) {
    y({ page: 1, rowsPerPage: ue.value });
  }
  function tl(ue) {
    let xe;
    const { rowsPerPage: Oe } = w.value, Be = e.paginationLabel || a.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (ue.push(d("div", { class: "q-table__separator col" })), yt === true && ue.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), d(V1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Oe, options: C.value, displayValue: Oe === 0 ? a.lang.table.allRows : Oe, dark: r.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) xe = Ue(ge.value);
    else if (xe = [d("span", Oe !== 0 ? { class: "q-table__bottom-item" } : {}, [Oe ? Be(R.value + 1, Math.min(J.value, E.value), E.value) : Be(1, P.value, E.value)])], Oe !== 0 && we.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), we.value > 2 && xe.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: F.value, ariaLabel: a.lang.pagination.first, onClick: z })), xe.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: F.value, ariaLabel: a.lang.pagination.prev, onClick: Z }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: re.value, ariaLabel: a.lang.pagination.next, onClick: te })), we.value > 2 && xe.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: re.value, ariaLabel: a.lang.pagination.last, onClick: Q }));
    }
    return ue.push(d("div", { class: "q-table__control" }, xe)), ue;
  }
  function ln() {
    const ue = e.gridHeader === true ? [d("table", { class: "q-table" }, [Ce()])] : e.loading === true && t.loading === void 0 ? oe() : void 0;
    return d("div", { class: "q-table__middle" }, ue);
  }
  function zn() {
    const ue = t.item !== void 0 ? t.item : (xe) => {
      const Oe = xe.cols.map((Ue) => d("div", { class: "q-table__grid-item-row" }, [d("div", { class: "q-table__grid-item-title" }, [Ue.label]), d("div", { class: "q-table__grid-item-value" }, [Ue.value])]));
      if (I.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(xe) : [d(ir, { modelValue: xe.selected, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (ht, V) => {
          le([xe.key], [xe.row], ht, V);
        } })];
        Oe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Nl, { dark: r.value }));
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
      })), d("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (xe.selected === true ? " q-table__grid-item--selected" : "") }, [d("div", Be, Oe)]);
    };
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, L.value.map((xe, Oe) => ue(qe({ key: u.value(xe), row: xe, pageIndex: Oe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: z, prevPage: Z, nextPage: te, lastPage: Q, isRowSelected: j, clearSelection: Y, isRowExpanded: x, setExpanded: A, sort: B, resetVirtualScroll: fe, scrollTo: ne, getCellValue: ie }), Iv(l.proxy, { filteredSortedRows: () => O.value, computedRows: () => L.value, computedRowsNumber: () => E.value }), () => {
    const ue = [ae()], xe = { ref: c, class: g.value };
    return e.grid === true ? ue.push(ln()) : Object.assign(xe, { class: [xe.class, e.cardClass], style: e.cardStyle }), ue.push(ce(), xt()), e.loading === true && t.loading !== void 0 && ue.push(t.loading()), d("div", xe, ue);
  };
} });
ve({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => {
    var _a2;
    return d("tr", { style: (_a2 = e.props) == null ? void 0 : _a2.__trStyle, class: n.value }, Pe(t.default));
  };
} });
ve({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  const n = Se(), l = v(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0) return d("td", { class: l.value }, Pe(t.default));
    const a = n.vnode.key, r = (e.props.colsMap !== void 0 ? e.props.colsMap[a] : null) || e.props.col;
    if (r === void 0) return;
    const { row: o } = e.props;
    return d("td", { class: l.value + r.__tdClass(o), style: r.__tdStyle(o) }, Pe(t.default));
  };
} });
var tu = ve({ name: "QRouteTab", props: { ...$r, ...Um }, emits: jm, setup(e, { slots: t, emit: n }) {
  const l = li({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: r } = Qm(e, t, n, { exact: v(() => e.exact), ...l });
  return he(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, r.verifyRouteModel), () => a(l.linkTag.value, l.linkAttrs.value);
} });
function R_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function P_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
ve({ name: "QTime", props: { ...nt, ...wn, ...Oo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Oo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: Xm, setup(e, { slots: t, emit: n }) {
  const l = Se(), { $q: a } = l.proxy, r = lt(e, a), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = Zm(e, a), s = Rr(e), f = Sl(s);
  let h, m;
  const g = U(null), _ = v(() => be()), w = v(() => u()), S = v(() => B()), p = Qa(e.modelValue, _.value, w.value, e.calendar, S.value), y = U(R_(p)), b = U(p), x = U(p.hour === null || p.hour < 12), A = v(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (r.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), k = v(() => {
    const ie = b.value;
    return { hour: ie.hour === null ? "--" : O.value === true ? rt(ie.hour) : String(x.value === true ? ie.hour === 0 ? 12 : ie.hour : ie.hour > 12 ? ie.hour - 12 : ie.hour), minute: ie.minute === null ? "--" : rt(ie.minute), second: ie.second === null ? "--" : rt(ie.second) };
  }), O = v(() => e.format24h !== null ? e.format24h : a.lang.date.format24h), P = v(() => {
    const ie = y.value === "hour", ge = ie === true ? 12 : 60, ae = b.value[y.value];
    let Ce = `rotate(${Math.round(ae * (360 / ge)) - 180}deg) translateX(-50%)`;
    return ie === true && O.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), L = v(() => b.value.hour !== null), I = v(() => L.value === true && b.value.minute !== null), T = v(() => e.hourOptions !== void 0 ? (ie) => e.hourOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(ie, null, null) : null), $ = v(() => e.minuteOptions !== void 0 ? (ie) => e.minuteOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, ie, null) : null), q = v(() => e.secondOptions !== void 0 ? (ie) => e.secondOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, b.value.minute, ie) : null), D = v(() => {
    if (T.value === null) return null;
    const ie = M(0, 11, T.value), ge = M(12, 11, T.value);
    return { am: ie, pm: ge, values: ie.values.concat(ge.values) };
  }), N = v(() => $.value !== null ? M(0, 59, $.value) : null), j = v(() => q.value !== null ? M(0, 59, q.value) : null), Y = v(() => {
    switch (y.value) {
      case "hour":
        return D.value;
      case "minute":
        return N.value;
      case "second":
        return j.value;
    }
  }), le = v(() => {
    let ie, ge, ae = 0, ye = 1;
    const Ce = Y.value !== null ? Y.value.values : void 0;
    y.value === "hour" ? O.value === true ? (ie = 0, ge = 23) : (ie = 0, ge = 11, x.value === false && (ae = 12)) : (ie = 0, ge = 55, ye = 5);
    const Fe = [];
    for (let $e = ie, We = ie; $e <= ge; $e += ye, We++) {
      const it = $e + ae, xt = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && $e === 0 ? O.value === true ? "00" : "12" : $e;
      Fe.push({ val: it, index: We, disable: xt, label: jt });
    }
    return Fe;
  }), pe = v(() => [[gn, F, void 0, { stop: true, prevent: true, mouse: true }]]);
  he(() => e.modelValue, (ie) => {
    const ge = Qa(ie, _.value, w.value, e.calendar, S.value);
    (ge.dateHash !== b.value.dateHash || ge.timeHash !== b.value.timeHash) && (b.value = ge, ge.hour === null ? y.value = "hour" : x.value = ge.hour < 12);
  }), he([_, w], () => {
    Xe(() => {
      Me();
    });
  });
  function W() {
    const ie = { ...c(), ...P_() };
    Me(ie), Object.assign(b.value, ie), y.value = "hour";
  }
  function M(ie, ge, ae) {
    const ye = Array.apply(null, { length: ge + 1 }).map((Ce, Fe) => {
      const $e = Fe + ie;
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
    const Fe = ye.findIndex((it) => ie <= it), $e = ye[Fe - 1], We = ye[Fe];
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
    return Qa(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function R() {
    return hl(l) === true || Y.value !== null && (Y.value.values.length === 0 || y.value === "hour" && O.value !== true && D.value[x.value === true ? "am" : "pm"].values.length === 0);
  }
  function J() {
    const ie = g.value, { top: ge, left: ae, width: ye } = ie.getBoundingClientRect(), Ce = ye / 2;
    return { top: ge + Ce, left: ae + Ce, dist: Ce * 0.7 };
  }
  function F(ie) {
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
    const ye = en(ie), Ce = Math.abs(ye.top - ge.top), Fe = Math.sqrt(Math.pow(Math.abs(ye.top - ge.top), 2) + Math.pow(Math.abs(ye.left - ge.left), 2));
    let $e, We = Math.asin(Ce / Fe) * (180 / Math.PI);
    if (ye.top < ge.top ? We = ge.left < ye.left ? 90 - We : 270 + We : We = ge.left < ye.left ? We + 90 : 270 - We, y.value === "hour") {
      if ($e = We / 30, D.value !== null) {
        const it = O.value !== true ? x.value === true : D.value.am.values.length !== 0 && D.value.pm.values.length !== 0 ? Fe >= ge.dist : D.value.am.values.length !== 0;
        $e = X($e + (it === true ? 0 : 12), D.value[it === true ? "am" : "pm"]);
      } else $e = Math.round($e), O.value === true ? Fe < ge.dist ? $e < 12 && ($e += 12) : $e === 12 && ($e = 0) : x.value === true && $e === 12 ? $e = 0 : x.value === false && $e !== 12 && ($e += 12);
      O.value === true && (x.value = $e < 12);
    } else $e = Math.round(We / 6) % 60, y.value === "minute" && N.value !== null ? $e = X($e, N.value) : y.value === "second" && j.value !== null && ($e = X($e, j.value));
    return ae !== $e && H[y.value]($e), $e;
  }
  const C = { hour() {
    y.value = "hour";
  }, minute() {
    y.value = "minute";
  }, second() {
    y.value = "second";
  } };
  function E(ie) {
    ie.keyCode === 13 && oe();
  }
  function z(ie) {
    ie.keyCode === 13 && _e();
  }
  function Z(ie) {
    R() !== true && (a.platform.is.desktop !== true && we(ie, J()), re());
  }
  function te(ie) {
    R() !== true && we(ie, J());
  }
  function Q(ie) {
    if (ie.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ie.keyCode)) {
      const ge = ie.keyCode === 37 ? -1 : 1;
      if (D.value !== null) {
        const ae = O.value === true ? D.value.values : D.value[x.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) fe(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.hour) + ge) % ae.length;
          fe(ae[ye]);
        }
      } else {
        const ae = O.value === true ? 24 : 12, ye = O.value !== true && x.value === false ? 12 : 0, Ce = b.value.hour === null ? -ge : b.value.hour;
        fe(ye + (24 + Ce + ge) % ae);
      }
    }
  }
  function de(ie) {
    if (ie.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ie.keyCode)) {
      const ge = ie.keyCode === 37 ? -1 : 1;
      if (N.value !== null) {
        const ae = N.value.values;
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
        if (b.value.seconds === null) ne(ae[0]);
        else {
          const ye = (ae.length + ae.indexOf(b.value.second) + ge) % ae.length;
          ne(ae[ye]);
        }
      } else {
        const ae = b.value.second === null ? -ge : b.value.second;
        ne((60 + ae + ge) % 60);
      }
    }
  }
  function fe(ie) {
    b.value.hour !== ie && (b.value.hour = ie, qe());
  }
  function ce(ie) {
    b.value.minute !== ie && (b.value.minute = ie, qe());
  }
  function ne(ie) {
    b.value.second !== ie && (b.value.second = ie, qe());
  }
  const H = { hour: fe, minute: ce, second: ne };
  function oe() {
    x.value === false && (x.value = true, b.value.hour !== null && (b.value.hour -= 12, qe()));
  }
  function _e() {
    x.value === true && (x.value = false, b.value.hour !== null && (b.value.hour += 12, qe()));
  }
  function ke(ie) {
    const ge = e.modelValue;
    y.value !== ie && ge !== void 0 && ge !== null && ge !== "" && typeof ge != "string" && (y.value = ie);
  }
  function qe() {
    if (T.value !== null && T.value(b.value.hour) !== true) {
      b.value = Qa(), ke("hour");
      return;
    }
    if ($.value !== null && $.value(b.value.minute) !== true) {
      b.value.minute = null, b.value.second = null, ke("minute");
      return;
    }
    if (e.withSeconds === true && q.value !== null && q.value(b.value.second) !== true) {
      b.value.second = null, ke("second");
      return;
    }
    b.value.hour === null || b.value.minute === null || e.withSeconds === true && b.value.second === null || Me();
  }
  function Me(ie) {
    const ge = Object.assign({ ...b.value }, ie), ae = e.calendar === "persian" ? rt(ge.hour) + ":" + rt(ge.minute) + (e.withSeconds === true ? ":" + rt(ge.second) : "") : lh(new Date(ge.year, ge.month === null ? null : ge.month - 1, ge.day, ge.hour, ge.minute, ge.second, ge.millisecond), _.value, w.value, ge.year, ge.timezoneOffset);
    ge.changed = ae !== e.modelValue, n("update:modelValue", ae, ge);
  }
  function He() {
    const ie = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: C.hour, onKeyup: Q }, k.value.hour), d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: de, onClick: C.minute } : { class: "q-time__link" }, k.value.minute)];
    e.withSeconds === true && ie.push(d("div", ":"), d("div", I.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: me, onClick: C.second } : { class: "q-time__link" }, k.value.second));
    const ge = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ie)];
    return O.value === false && ge.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (x.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: oe, onKeyup: E }, "AM"), d("div", { class: "q-time__link " + (x.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: _e, onKeyup: z }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, ge);
  }
  function Ve() {
    const ie = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ot, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: te }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: P.value }), le.value.map((ge) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${ge.index}` + (ge.val === ie ? " q-time__clock-position--active " + i.value : ge.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", ge.label)]))])]), pe.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: W }) : null]);
  }
  return l.proxy.setNow = W, () => {
    const ie = [Ve()], ge = Pe(t.default);
    return ge !== void 0 && ie.push(d("div", { class: "q-time__actions" }, ge)), e.name !== void 0 && e.disable !== true && f(ie, "push"), d("div", { class: A.value, tabindex: -1 }, [He(), d("div", { class: "q-time__main col overflow-auto" }, ie)]);
  };
} });
ve({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q);
  hn(Yv, e);
  const a = v(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: a.value }, Pe(t.default));
} });
ve({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = qt(Yv, ot);
  if (n === ot) return console.error("QTimelineEntry needs to be child of QTimeline"), ot;
  const l = v(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), a = v(() => `q-timeline__dot text-${e.color || n.color}`), r = v(() => n.layout === "comfortable" && n.side === "left");
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
var L_ = ve({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), B_ = ve({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = v(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), O_ = ["none", "strict", "leaf", "leaf-filtered"];
ve({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => O_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), o = U({}), i = U(e.ticked || []), u = U(e.expanded || []);
  let c = {};
  Ta(() => {
    c = {};
  });
  const s = v(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (r.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), f = v(() => e.selected !== void 0), h = v(() => e.icon || a.iconSet.tree.icon), m = v(() => e.controlColor || e.color), g = v(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = v(() => {
    const M = e.selectedColor || e.color;
    return M ? ` text-${M}` : "";
  }), w = v(() => e.filterMethod !== void 0 ? e.filterMethod : (M, ee) => {
    const X = ee.toLowerCase();
    return M[e.labelKey] && M[e.labelKey].toLowerCase().indexOf(X) !== -1;
  }), S = v(() => {
    const M = {}, ee = (X, be) => {
      const B = X.tickStrategy || (be ? be.tickStrategy : e.tickStrategy), R = X[e.nodeKey], J = X[e.childrenKey] && Array.isArray(X[e.childrenKey]) && X[e.childrenKey].length !== 0, F = X.disabled !== true && f.value === true && X.selectable !== false, re = X.disabled !== true && X.expandable !== false, we = B !== "none", C = B === "strict", E = B === "leaf-filtered", z = B === "leaf" || B === "leaf-filtered";
      let Z = X.disabled !== true && X.tickable !== false;
      z === true && Z === true && be && be.tickable !== true && (Z = false);
      let te = X.lazy;
      te === true && o.value[R] !== void 0 && Array.isArray(X[e.childrenKey]) === true && (te = o.value[R]);
      const Q = { key: R, parent: be, isParent: J, lazy: te, disabled: X.disabled, link: X.disabled !== true && (F === true || re === true && (J === true || te === true)), children: [], matchesFilter: e.filter ? w.value(X, e.filter) : true, selected: R === e.selected && F === true, selectable: F, expanded: J === true ? u.value.includes(R) : false, expandable: re, noTick: X.noTick === true || C !== true && te && te !== "loaded", tickable: Z, tickStrategy: B, hasTicking: we, strictTicking: C, leafFilteredTicking: E, leafTicking: z, ticked: C === true ? i.value.includes(R) : J === true ? false : i.value.includes(R) };
      if (M[R] = Q, J === true && (Q.children = X[e.childrenKey].map((de) => ee(de, Q)), e.filter && (Q.matchesFilter !== true ? Q.matchesFilter = Q.children.some((de) => de.matchesFilter) : Q.noTick !== true && Q.disabled !== true && Q.tickable === true && E === true && Q.children.every((de) => de.matchesFilter !== true || de.noTick === true || de.tickable !== true) === true && (Q.tickable = false)), Q.matchesFilter === true && (Q.noTick !== true && C !== true && Q.children.every((de) => de.noTick) === true && (Q.noTick = true), z))) {
        if (Q.ticked = false, Q.indeterminate = Q.children.some((de) => de.indeterminate === true), Q.tickable = Q.tickable === true && Q.children.some((de) => de.tickable), Q.indeterminate !== true) {
          const de = Q.children.reduce((me, fe) => fe.ticked === true ? me + 1 : me, 0);
          de === Q.children.length ? Q.ticked = true : de > 0 && (Q.indeterminate = true);
        }
        Q.indeterminate === true && (Q.indeterminateNextState = Q.children.every((de) => de.tickable !== true || de.ticked !== true));
      }
      return Q;
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
  function x(M) {
    return M && S.value[M] ? S.value[M].expanded : false;
  }
  function A() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function k() {
    const M = [], ee = (X) => {
      X[e.childrenKey] && X[e.childrenKey].length !== 0 && X.expandable !== false && X.disabled !== true && (M.push(X[e.nodeKey]), X[e.childrenKey].forEach(ee));
    };
    e.nodes.forEach(ee), e.expanded !== void 0 ? n("update:expanded", M) : u.value = M;
  }
  function O(M, ee, X = p(M), be = S.value[M]) {
    if (be.lazy && be.lazy !== "loaded") {
      if (be.lazy === "loading") return;
      o.value[M] = "loading", Array.isArray(X[e.childrenKey]) !== true && (X[e.childrenKey] = []), n("lazyLoad", { node: X, key: M, done: (B) => {
        o.value[M] = "loaded", X[e.childrenKey] = Array.isArray(B) === true ? B : [], Xe(() => {
          var _a2;
          ((_a2 = S.value[M]) == null ? void 0 : _a2.isParent) === true && P(M, true);
        });
      }, fail: () => {
        delete o.value[M], X[e.childrenKey].length === 0 && delete X[e.childrenKey];
      } });
    } else be.isParent === true && be.expandable === true && P(M, ee);
  }
  function P(M, ee) {
    let X = u.value;
    const be = e.expanded !== void 0;
    if (be === true && (X = X.slice()), ee) {
      if (e.accordion && S.value[M]) {
        const B = [];
        S.value[M].parent ? S.value[M].parent.children.forEach((R) => {
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
  function L(M) {
    return M && S.value[M] ? S.value[M].ticked : false;
  }
  function I(M, ee) {
    let X = i.value;
    const be = e.ticked !== void 0;
    be === true && (X = X.slice()), ee ? X = X.concat(M).filter((B, R, J) => J.indexOf(B) === R) : X = X.filter((B) => M.includes(B) === false), be === true && n("update:ticked", X);
  }
  function T(M, ee, X) {
    const be = { tree: l, node: M, key: X, color: e.color, dark: r.value };
    return Ft(be, "expanded", () => ee.expanded, (B) => {
      B !== ee.expanded && O(X, B);
    }), Ft(be, "ticked", () => ee.ticked, (B) => {
      B !== ee.ticked && I([X], B);
    }), be;
  }
  function $(M) {
    return (e.filter ? M.filter((ee) => S.value[ee[e.nodeKey]].matchesFilter) : M).map((ee) => j(ee));
  }
  function q(M) {
    if (M.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: M.icon, color: M.iconColor });
    const ee = M.img || M.avatar;
    if (ee) return d("img", { class: `q-tree__${M.img ? "img" : "avatar"} q-mr-sm`, src: ee });
  }
  function D() {
    n("afterShow");
  }
  function N() {
    n("afterHide");
  }
  function j(M) {
    const ee = M[e.nodeKey], X = S.value[ee], be = M.header && t[`header-${M.header}`] || t["default-header"], B = X.isParent === true ? $(M[e.childrenKey]) : [], R = B.length !== 0 || X.lazy && X.lazy !== "loaded";
    let J = M.body && t[`body-${M.body}`] || t["default-body"];
    const F = be !== void 0 || J !== void 0 ? T(M, X, ee) : null;
    return J !== void 0 && (J = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [J(F)])])), d("div", { key: ee, class: `q-tree__node relative-position q-tree__node--${R === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (X.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (X.selected === true ? " q-tree__node--selected" : "") + (X.disabled === true ? " q-tree__node--disabled" : ""), tabindex: X.link === true ? 0 : -1, ariaExpanded: B.length > 0 ? X.expanded : null, role: "treeitem", onClick: (re) => {
      le(M, X, re);
    }, onKeypress(re) {
      Ql(re) !== true && (re.keyCode === 13 ? le(M, X, re, true) : re.keyCode === 32 && pe(M, X, re, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (re) => {
      c[X.key] = re;
    } }), X.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: m.value }) : R === true ? d(et, { class: "q-tree__arrow" + (X.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(re) {
      pe(M, X, re);
    } }) : null, X.hasTicking === true && X.noTick !== true ? d(ir, { class: "q-tree__tickbox", modelValue: X.indeterminate === true ? null : X.ticked, color: m.value, dark: r.value, dense: true, keepColor: true, disable: X.tickable !== true, onKeydown: Ne, "onUpdate:modelValue": (re) => {
      W(X, re);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (X.selected === true ? _.value : g.value) }, [be ? be(F) : [q(M), d("div", M[e.labelKey])]])]), R === true ? e.noTransition === true ? X.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [J, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]) : null : d(zs, { duration: e.duration, onShow: D, onHide: N }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${ee}__q` }, [J, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, B)]), [[Ov, X.expanded]])) : J]);
  }
  function Y(M) {
    var _a2;
    (_a2 = c[M]) == null ? void 0 : _a2.focus();
  }
  function le(M, ee, X, be) {
    be !== true && ee.selectable !== false && Y(ee.key), f.value && ee.selectable ? e.noSelectionUnset === false ? n("update:selected", ee.key !== e.selected ? ee.key : null) : ee.key !== e.selected && n("update:selected", ee.key === void 0 ? null : ee.key) : pe(M, ee, X, be), typeof M.handler == "function" && M.handler(M);
  }
  function pe(M, ee, X, be) {
    X !== void 0 && Ne(X), be !== true && ee.selectable !== false && Y(ee.key), O(ee.key, !ee.expanded, M, ee);
  }
  function W(M, ee) {
    if (M.indeterminate === true && (ee = M.indeterminateNextState), M.strictTicking) I([M.key], ee);
    else if (M.leafTicking) {
      const X = [], be = (B) => {
        B.isParent ? (ee !== true && B.noTick !== true && B.tickable === true && X.push(B.key), B.leafTicking === true && B.children.forEach(be)) : B.noTick !== true && B.tickable === true && (B.leafFilteredTicking !== true || B.matchesFilter === true) && X.push(B.key);
      };
      be(M), I(X, ee);
    }
  }
  return e.defaultExpandAll === true && k(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: x, collapseAll: A, expandAll: k, setExpanded: O, isTicked: L, setTicked: I }), () => {
    const M = $(e.nodes);
    return d("div", { class: s.value, role: "tree" }, M.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : M);
  };
} });
function Id(e) {
  return (e * 100).toFixed(2) + "%";
}
var F_ = { ...nt, ...hh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Bh = [...gh, "start", "finish", "added", "removed"];
function V_(e, t) {
  const n = Se(), { props: l, slots: a, emit: r, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(F, re, we) {
    if (F.__status = re, re === "idle") {
      F.__uploaded = 0, F.__progress = 0, F.__sizeLabel = Tu(F.size), F.__progressLabel = "0.00%";
      return;
    }
    if (re === "failed") {
      o.$forceUpdate();
      return;
    }
    F.__uploaded = re === "uploaded" ? F.size : we, F.__progress = re === "uploaded" ? 1 : Math.min(0.9999, F.__uploaded / F.size), F.__progressLabel = Id(F.__progress), o.$forceUpdate();
  }
  const s = v(() => l.disable !== true && l.readonly !== true), f = U(false), h = U(null), m = U(null), g = { files: U([]), queuedFiles: U([]), uploadedFiles: U([]), uploadedSize: U(0), updateFileStatus: c, isAlive: () => hl(n) === false }, { pickFiles: _, addFiles: w, onDragover: S, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: x, maxTotalSizeNumber: A } = bh({ editable: s, dnd: f, getFileInput: W, addFilesToQueue: M });
  Object.assign(g, e({ props: l, slots: a, emit: r, helpers: g, exposeApi: (F) => {
    Object.assign(g, F);
  } })), g.isBusy === void 0 && (g.isBusy = U(false));
  const k = U(0), O = v(() => k.value === 0 ? 0 : g.uploadedSize.value / k.value), P = v(() => Id(O.value)), L = v(() => Tu(k.value)), I = v(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < x.value) && (l.maxTotalSize === void 0 || k.value < A.value)), T = v(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(tm, be);
  const $ = v(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (f.value === true ? " q-uploader--dnd" : "")), q = v(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  he(g.isUploading, (F, re) => {
    re === false && F === true ? r("start") : re === true && F === false && r("finish");
  });
  function D() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, k.value = 0, pe(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function N() {
    l.disable === false && Y(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function j() {
    Y(["idle", "failed"], ({ size: F }) => {
      k.value -= F, g.queuedFiles.value = [];
    });
  }
  function Y(F, re) {
    if (l.disable === true) return;
    const we = { files: [], size: 0 }, C = g.files.value.filter((E) => F.indexOf(E.__status) === -1 ? true : (we.size += E.size, we.files.push(E), E.__img !== void 0 && window.URL.revokeObjectURL(E.__img.src), false));
    we.files.length !== 0 && (g.files.value = C, re(we), r("removed", we.files));
  }
  function le(F) {
    l.disable || (F.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((re) => re.__key !== F.__key) : F.__status === "uploading" ? F.__abort() : k.value -= F.size, g.files.value = g.files.value.filter((re) => re.__key !== F.__key ? true : (re.__img !== void 0 && window.URL.revokeObjectURL(re.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((re) => re.__key !== F.__key), r("removed", [F]));
  }
  function pe() {
    g.files.value.forEach((F) => {
      F.__img !== void 0 && window.URL.revokeObjectURL(F.__img.src);
    });
  }
  function W() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function M(F, re) {
    const we = y(F, re, g.files.value, true), C = W();
    C != null && (C.value = ""), we !== void 0 && (we.forEach((E) => {
      if (g.updateFileStatus(E, "idle"), k.value += E.size, l.noThumbnails !== true && E.type.toUpperCase().startsWith("IMAGE")) {
        const z = new Image();
        z.src = window.URL.createObjectURL(E), E.__img = z;
      }
    }), g.files.value = g.files.value.concat(we), g.queuedFiles.value = g.queuedFiles.value.concat(we), r("added", we), l.autoUpload === true && g.upload());
  }
  function ee() {
    T.value === true && g.upload();
  }
  function X(F, re, we) {
    if (F === true) {
      const C = { type: "a", key: re, icon: i.iconSet.uploader[re], flat: true, dense: true };
      let E;
      return re === "add" ? (C.onClick = _, E = be) : C.onClick = we, d(Ze, C, E);
    }
  }
  function be() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: _, onChange: M });
  }
  function B() {
    return a.header !== void 0 ? a.header(J) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [X(g.queuedFiles.value.length !== 0, "removeQueue", j), X(g.uploadedFiles.value.length !== 0, "removeUploaded", N), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [L.value + " / " + P.value])]), X(I.value, "add"), X(l.hideUploadBtn === false && T.value === true, "upload", g.upload), X(g.isUploading.value, "clear", g.abort)])])];
  }
  function R() {
    return a.list !== void 0 ? a.list(J) : g.files.value.map((F) => d("div", { key: F.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && F.__img !== void 0 ? " q-uploader__file--img" : "") + (F.__status === "failed" ? " q-uploader__file--failed" : F.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && F.__img !== void 0 ? { backgroundImage: 'url("' + F.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [F.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [F.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [F.__sizeLabel + " / " + F.__progressLabel])]), F.__status === "uploading" ? d(Vm, { value: F.__progress, min: 0, max: 1, indeterminate: F.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[F.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      le(F);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && pe();
  });
  const J = {};
  for (const F in g) pt(g[F]) === true ? Ft(J, F, () => g[F].value) : J[F] = g[F];
  return Object.assign(J, { upload: ee, reset: D, removeUploadedFiles: N, removeQueuedFiles: j, removeFile: le, pickFiles: _, addFiles: w }), Iv(J, { canAddFiles: () => I.value, canUpload: () => T.value, uploadSizeLabel: () => L.value, uploadProgressLabel: () => P.value }), t({ ...g, upload: ee, reset: D, removeUploadedFiles: N, removeQueuedFiles: j, removeFile: le, pickFiles: _, addFiles: w, canAddFiles: I, canUpload: T, uploadSizeLabel: L, uploadProgressLabel: P }), () => {
    const F = [d("div", { class: q.value }, B()), d("div", { class: "q-uploader__list scroll" }, R()), b("uploader")];
    g.isBusy.value === true && F.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const re = { ref: h, class: $.value };
    return I.value === true && Object.assign(re, { onDragover: S, onDragleave: p }), d("div", re, F);
  };
}
var z_ = () => true;
function Oh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = z_;
  }), t;
}
var I_ = Oh(Bh), D_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => ve({ name: e, props: { ...F_, ...t }, emits: At(n) === true ? { ...I_, ...n } : [...Bh, ...n], setup(a, { expose: r }) {
  return V_(l, r);
} });
function Hn(e) {
  return typeof e == "function" ? e : () => e;
}
var H_ = "QUploader", N_ = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, j_ = ["factoryFailed", "uploaded", "failed", "uploading"];
function U_({ props: e, emit: t, helpers: n }) {
  const l = U([]), a = U([]), r = U(0), o = v(() => ({ url: Hn(e.url), method: Hn(e.method), headers: Hn(e.headers), formFields: Hn(e.formFields), fieldName: Hn(e.fieldName), withCredentials: Hn(e.withCredentials), sendRaw: Hn(e.sendRaw), batch: Hn(e.batch) })), i = v(() => r.value > 0), u = v(() => a.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), a.value.length !== 0 && (c = true);
  }
  function f() {
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
      const w = (S) => {
        n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), a.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", S, g), r.value--);
      };
      _.then((S) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), m(g, S));
      }).catch(w);
    } else m(g, _ || {});
  }
  function m(g, _) {
    const w = new FormData(), S = new XMLHttpRequest(), p = (T, $) => _[T] !== void 0 ? Hn(_[T])($) : o.value[T]($), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((T) => {
      w.append(T.name, T.value);
    });
    let x = 0, A = 0, k = 0, O = 0, P;
    S.upload.addEventListener("progress", (T) => {
      if (P === true) return;
      const $ = Math.min(O, T.loaded);
      n.uploadedSize.value += $ - k, k = $;
      let q = k - A;
      for (let D = x; q > 0 && D < g.length; D++) {
        const N = g[D];
        if (q > N.size) q -= N.size, x++, A += N.size, n.updateFileStatus(N, "uploading", N.size);
        else {
          n.updateFileStatus(N, "uploading", q);
          return;
        }
      }
    }, false), S.onreadystatechange = () => {
      S.readyState < 4 || (S.status && S.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((T) => {
        n.updateFileStatus(T, "uploaded");
      }), t("uploaded", { files: g, xhr: S })) : (P = true, n.uploadedSize.value -= k, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((T) => {
        n.updateFileStatus(T, "failed");
      }), t("failed", { files: g, xhr: S })), r.value--, l.value = l.value.filter((T) => T !== S));
    }, S.open(p("method", g), y), p("withCredentials", g) === true && (S.withCredentials = true);
    const L = p("headers", g);
    L !== void 0 && L.forEach((T) => {
      S.setRequestHeader(T.name, T.value);
    });
    const I = p("sendRaw", g);
    g.forEach((T) => {
      n.updateFileStatus(T, "uploading", 0), I !== true && w.append(p("fieldName", T), T, T.name), T.xhr = S, T.__abort = () => {
        S.abort();
      }, O += T.size;
    }), t("uploading", { files: g, xhr: S }), l.value.push(S), I === true ? S.send(new Blob(g)) : S.send(w);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: f };
}
var Q_ = { name: H_, props: N_, emits: j_, injectPlugin: U_ };
D_(Q_);
ve({ name: "QUploaderAddTrigger", setup() {
  const e = qt(tm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
ve({ name: "QVideo", props: { ...Is, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Ds(e), n = v(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Dd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
An({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Dd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const a = Ny(e);
      a !== void 0 && jy(a, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Dd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var K_ = 0, Ia = void 0;
function Hd(e, t) {
  Ia === void 0 && (Ia = document.createElement("div"), Ia.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(Ia));
  const n = e.getBoundingClientRect(), l = Ia.getBoundingClientRect(), { marginLeft: a, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(a, 10) + parseInt(r, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function Zr(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var Nd = ["Top", "Right", "Bottom", "Left"], jd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], W_ = /-block|-inline|block-|inline-/, Y_ = /(-block|-inline|block-|inline-).*:/;
function Ud(e, t) {
  const n = window.getComputedStyle(e), l = {};
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (n[r] === "") if (r === "cssText") {
      const o = n.length;
      let i = "";
      for (let u = 0; u < o; u++) W_.test(n[u]) !== true && (i += n[u] + ": " + n[n[u]] + "; ");
      l[r] = i;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(r) !== -1) {
      const o = r.replace("border", "");
      let i = "";
      for (let u = 0; u < Nd.length; u++) {
        const c = "border" + Nd[u] + o;
        i += n[c] + " ";
      }
      l[r] = i;
    } else if (r === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < jd.length; u++) {
        const c = n[jd[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[r] = o + "/ " + i;
    } else l[r] = n[r];
    else r === "cssText" ? l[r] = n[r].split(";").filter((o) => Y_.test(o) !== true).join(";") : l[r] = n[r];
  }
  return l;
}
var G_ = ["absolute", "fixed", "relative", "sticky"];
function Qd(e) {
  let t = e, n = 0;
  for (; t !== null && t !== document; ) {
    const { position: l, zIndex: a } = window.getComputedStyle(t), r = Number(a);
    r > n && (t === e || G_.includes(l) === true) && (n = r), t = t.parentNode;
  }
  return n;
}
function X_(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function Z_(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function Kd(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Wd(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function J_(e) {
  let t = () => false, n = false, l = true;
  const a = X_(e), r = Z_(e), o = Kd(a.from);
  if (Wd(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const f = o.parentNode, h = o.nextElementSibling, m = Hd(o, r.resize), { width: g, height: _ } = Zr(f), { borderWidth: w, borderStyle: S, borderColor: p, borderRadius: y, backgroundColor: b, transform: x, position: A, cssText: k } = Ud(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), O = o.classList.toString(), P = o.style.cssText, L = o.cloneNode(true), I = r.tween === true ? o.cloneNode(true) : void 0;
  I !== void 0 && (I.className = I.classList.toString().split(" ").filter(($) => /^bg-/.test($) === false).join(" ")), r.hideFromClone === true && L.classList.add("q-morph--internal"), L.setAttribute("aria-hidden", "true"), L.style.transition = "none", L.style.animation = "none", L.style.pointerEvents = "none", f.insertBefore(L, h), o.qMorphCancel = () => {
    n = true, L.remove(), I == null ? void 0 : I.remove(), r.hideFromClone === true && L.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const T = () => {
    const $ = Kd(a.to);
    if (n === true || Wd($) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== $ && typeof $.qMorphCancel == "function" && $.qMorphCancel(), r.keepToClone !== true && $.classList.add("q-morph--internal"), L.classList.add("q-morph--internal");
    const { width: q, height: D } = Zr(f), { width: N, height: j } = Zr($.parentNode);
    r.hideFromClone !== true && L.classList.remove("q-morph--internal"), $.qMorphCancel = () => {
      n = true, L.remove(), I == null ? void 0 : I.remove(), r.hideFromClone === true && L.classList.remove("q-morph--internal"), r.keepToClone !== true && $.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, $.qMorphCancel = void 0;
    };
    const Y = () => {
      if (n === true) {
        typeof $.qMorphCancel == "function" && $.qMorphCancel();
        return;
      }
      r.hideFromClone !== true && (L.classList.add("q-morph--internal"), L.innerHTML = "", L.style.left = 0, L.style.right = "unset", L.style.top = 0, L.style.bottom = "unset", L.style.transform = "none"), r.keepToClone !== true && $.classList.remove("q-morph--internal");
      const le = $.parentNode, { width: pe, height: W } = Zr(le), M = $.cloneNode(r.keepToClone);
      M.setAttribute("aria-hidden", "true"), r.keepToClone !== true && (M.style.left = 0, M.style.right = "unset", M.style.top = 0, M.style.bottom = "unset", M.style.transform = "none", M.style.pointerEvents = "none"), M.classList.add("q-morph--internal");
      const ee = $ === o && f === le ? L : $.nextElementSibling;
      le.insertBefore(M, ee);
      const { borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, backgroundColor: J, transform: F, position: re, cssText: we } = Ud($, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), C = $.classList.toString(), E = $.style.cssText;
      $.style.cssText = we, $.style.transform = "none", $.style.animation = "none", $.style.transition = "none", $.className = C.split(" ").filter((ye) => /^bg-/.test(ye) === false).join(" ");
      const z = Hd($, r.resize), Z = m.left - z.left, te = m.top - z.top, Q = m.width / (z.width > 0 ? z.width : 10), de = m.height / (z.height > 0 ? z.height : 100), me = g - q, fe = _ - D, ce = pe - N, ne = W - j, H = Math.max(m.widthM, me), oe = Math.max(m.heightM, fe), _e = Math.max(z.widthM, ce), ke = Math.max(z.heightM, ne), qe = o === $ && ["absolute", "fixed"].includes(re) === false && ["absolute", "fixed"].includes(A) === false;
      let Me = re === "fixed", He = le;
      for (; Me !== true && He !== document; ) Me = window.getComputedStyle(He).position === "fixed", He = He.parentNode;
      if (r.hideFromClone !== true && (L.style.display = "block", L.style.flex = "0 0 auto", L.style.opacity = 0, L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.classList.remove("q-morph--internal")), r.keepToClone !== true && (M.style.display = "block", M.style.flex = "0 0 auto", M.style.opacity = 0, M.style.minWidth = "unset", M.style.maxWidth = "unset", M.style.minHeight = "unset", M.style.maxHeight = "unset"), M.classList.remove("q-morph--internal"), typeof r.classes == "string" && ($.className += " " + r.classes), typeof r.style == "string") $.style.cssText += " " + r.style;
      else if (At(r.style) === true) for (const ye in r.style) $.style[ye] = r.style[ye];
      const Ve = Qd(L), ie = Qd($), ge = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      $.style.position = Me === true ? "fixed" : "absolute", $.style.left = `${z.left - ge.scrollLeft}px`, $.style.right = "unset", $.style.top = `${z.top - ge.scrollTop}px`, $.style.margin = 0, r.resize === true && ($.style.minWidth = "unset", $.style.maxWidth = "unset", $.style.minHeight = "unset", $.style.maxHeight = "unset", $.style.overflow = "hidden", $.style.overflowX = "hidden", $.style.overflowY = "hidden"), document.body.appendChild($), I !== void 0 && (I.style.cssText = k, I.style.transform = "none", I.style.animation = "none", I.style.transition = "none", I.style.position = $.style.position, I.style.left = `${m.left - ge.scrollLeft}px`, I.style.right = "unset", I.style.top = `${m.top - ge.scrollTop}px`, I.style.margin = 0, I.style.pointerEvents = "none", r.resize === true && (I.style.minWidth = "unset", I.style.maxWidth = "unset", I.style.minHeight = "unset", I.style.maxHeight = "unset", I.style.overflow = "hidden", I.style.overflowX = "hidden", I.style.overflowY = "hidden"), document.body.appendChild(I));
      const ae = (ye) => {
        o === $ && l !== true ? ($.style.cssText = P, $.className = O) : ($.style.cssText = E, $.className = C), M.parentNode === le && le.insertBefore($, M), L.remove(), M.remove(), I == null ? void 0 : I.remove(), t = () => false, o.qMorphCancel = void 0, $.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(l === true ? "to" : "from", ye === true);
      };
      if (r.useCSS !== true && typeof $.animate == "function") {
        const ye = r.resize === true ? { transform: `translate(${Z}px, ${te}px)`, width: `${H}px`, height: `${oe}px` } : { transform: `translate(${Z}px, ${te}px) scale(${Q}, ${de})` }, Ce = r.resize === true ? { width: `${_e}px`, height: `${ke}px` } : {}, Fe = r.resize === true ? { width: `${H}px`, height: `${oe}px` } : {}, $e = r.resize === true ? { transform: `translate(${-1 * Z}px, ${-1 * te}px)`, width: `${_e}px`, height: `${ke}px` } : { transform: `translate(${-1 * Z}px, ${-1 * te}px) scale(${1 / Q}, ${1 / de})` }, We = I !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: b }, it = I !== void 0 ? { opacity: 1 } : { backgroundColor: J };
        s = $.animate([{ margin: 0, borderWidth: w, borderStyle: S, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ...ye, ...We }, { margin: 0, borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, zIndex: ie, transformOrigin: "0 0", transform: F, ...Ce, ...it }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), u = I === void 0 ? void 0 : I.animate([{ opacity: r.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: S, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: x, ...Fe }, { opacity: 0, margin: 0, borderWidth: X, borderStyle: be, borderColor: B, borderRadius: R, zIndex: ie, transformOrigin: "0 0", ...$e }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), i = r.hideFromClone === true || qe === true ? void 0 : L.animate([{ margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${H + m.marginH}px`, height: `${oe + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), c = r.keepToClone === true ? void 0 : M.animate([qe === true ? { margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${H + m.marginH}px`, height: `${oe + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${ne < 0 ? ne / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${_e + z.marginH}px`, height: `${ke + z.marginV}px` }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay });
        const xt = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", xt), s.removeEventListener("cancel", xt), ae(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, xt();
        }, $.qMorphCancel = () => {
          $.qMorphCancel = void 0, n = true, xt();
        }, s.addEventListener("finish", xt), s.addEventListener("cancel", xt), t = (jt) => n === true || s === void 0 ? false : jt === true ? (xt(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const ye = `q-morph-anim-${++K_}`, Ce = document.createElement("style"), Fe = r.resize === true ? `
            transform: translate(${Z}px, ${te}px);
            width: ${H}px;
            height: ${oe}px;
          ` : `transform: translate(${Z}px, ${te}px) scale(${Q}, ${de});`, $e = r.resize === true ? `
            width: ${_e}px;
            height: ${ke}px;
          ` : "", We = r.resize === true ? `
            width: ${H}px;
            height: ${oe}px;
          ` : "", it = r.resize === true ? `
            transform: translate(${-1 * Z}px, ${-1 * te}px);
            width: ${_e}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * Z}px, ${-1 * te}px) scale(${1 / Q}, ${1 / de});`, xt = I !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${b};`, jt = I !== void 0 ? "opacity: 1;" : `background-color: ${J};`, tl = I === void 0 ? "" : `
            @keyframes ${ye}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${S};
                border-color: ${p};
                border-radius: ${y};
                z-index: ${Ve};
                transform-origin: 0 0;
                transform: ${x};
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
                width: ${H + m.marginH}px;
                height: ${oe + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, zn = qe === true ? `
            margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
            width: ${H + m.marginH}px;
            height: ${oe + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ue = r.keepToClone === true ? "" : `
            @keyframes ${ye}-to {
              0% {
                ${zn}
              }

              100% {
                margin: ${ne < 0 ? ne / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px;
                width: ${_e + z.marginH}px;
                height: ${ke + z.marginV}px;
              }
            }
          `;
        Ce.innerHTML = `
          @keyframes ${ye} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${S};
              border-color: ${p};
              border-radius: ${y};
              background-color: ${b};
              z-index: ${Ve};
              transform-origin: 0 0;
              ${Fe}
              ${xt}
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
              transform: ${F};
              ${$e}
              ${jt}
            }
          }

          ${ln}

          ${tl}

          ${ue}
        `, document.head.appendChild(Ce);
        let xe = "normal";
        L.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-from`, I !== void 0 && (I.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-from-tween`), M.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}-to`, $.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${ye}`;
        const Oe = (Be) => {
          Be === Object(Be) && Be.animationName !== ye || ($.removeEventListener("animationend", Oe), $.removeEventListener("animationcancel", Oe), ae(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Oe();
        }, $.qMorphCancel = () => {
          $.qMorphCancel = void 0, n = true, Oe();
        }, $.addEventListener("animationend", Oe), $.addEventListener("animationcancel", Oe), t = (Be) => n === true || !$ || !L || !M ? false : Be === true ? (Oe(), true) : (l = l !== true, xe = xe === "normal" ? "reverse" : "normal", L.style.animationDirection = xe, I.style.animationDirection = xe, M.style.animationDirection = xe, $.style.animationDirection = xe, true);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((pe) => setTimeout(pe, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((pe) => {
      const W = () => {
        M !== null && (clearTimeout(M), M = null), $ && ($.removeEventListener("transitionend", W), $.removeEventListener("transitioncancel", W)), pe();
      };
      let M = setTimeout(W, 400);
      $.addEventListener("transitionend", W), $.addEventListener("transitioncancel", W);
    }) : r.waitFor).then(Y).catch(() => {
      typeof $.qMorphCancel == "function" && $.qMorphCancel();
    }) : Y();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(T), ($) => t($);
}
var Vo = {}, ew = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], tw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function ia(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Fh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, ia(t, "remove"), ia(n, "remove");
  const l = J_({ from: t.el, to: n.el, onToggle() {
    ia(t, "add"), ia(n, "remove");
  }, ...n.opts, onEnd(a, r) {
    var _a2, _b2;
    (_b2 = (_a2 = n.opts).onEnd) == null ? void 0 : _b2.call(_a2, a, r), r !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Fh(e));
  } });
  e.cancel = () => {
    l(true), e.cancel = void 0;
  };
}
function Vh(e, t) {
  const n = t.opts;
  tw.forEach((l) => {
    n[l] = e[l] === true;
  });
}
function nw(e, t) {
  const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = n[0], t.group = n[1], Object.assign(t.opts, { duration: isNaN(n[2]) === true ? 300 : parseFloat(n[2]), waitFor: n[3] });
}
function lw(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  const n = t.opts;
  ew.forEach((l) => {
    e[l] !== void 0 && (n[l] = e[l]);
  });
}
function aw(e, t) {
  if (t.name === e) {
    const n = Vo[t.group];
    n === void 0 ? (Vo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, ia(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Fh(n));
    return;
  }
  t.animating === false && ia(t, "add");
}
function Yd(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, lw(t, e), Vh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, aw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
An({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Vh(t.modifiers, n), nw(t.arg, n), Yd(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  Yd(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qmorph, n = Vo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((a) => a !== t), n.queue.length === 0 && ((_a2 = n.cancel) == null ? void 0 : _a2.call(n), delete Vo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var rw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function Gd(e, t, n) {
  var _a2;
  t.handler = n, (_a2 = t.observer) == null ? void 0 : _a2.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && zh(e);
  }), t.observer.observe(e, t.opts);
}
function zh(e) {
  var _a2;
  const t = e.__qmutation;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.disconnect(), delete e.__qmutation);
}
An({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const a = { once: t, opts: Object.keys(n).length === 0 ? rw : n };
  Gd(e, a, l), e.__qmutation = a;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && Gd(e, l, n);
}, beforeUnmount: zh });
var { passive: zo } = dt;
function Xd(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, zo);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, zo), e.scroll());
}
An({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll: Ma(() => {
    let l, a;
    n.scrollTarget === window ? (a = e.getBoundingClientRect().bottom, l = window.innerHeight) : (a = qo(e).top + _a(e), l = qo(n.scrollTarget).top + _a(n.scrollTarget)), a > 0 && a < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, zo), n.handler(e));
  }, 25) };
  Xd(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && Xd(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, zo), t.scroll.cancel(), delete e.__qscrollfire;
} });
function Zd(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
An({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll() {
    n.handler(gl(n.scrollTarget), oi(n.scrollTarget));
  } };
  Zd(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && Zd(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
An({ name: "touch-hold", beforeMount(e, t) {
  const { modifiers: n } = t;
  if (n.mouse !== true && ze.has.touch !== true) return;
  const l = { handler: t.value, noop: St, mouseStart(r) {
    typeof l.handler == "function" && ei(r) === true && (Ct(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(r, true));
  }, touchStart(r) {
    if (r.target !== void 0 && typeof l.handler == "function") {
      const o = r.target;
      Ct(l, "temp", [[o, "touchmove", "move", "passiveCapture"], [o, "touchcancel", "end", "notPassiveCapture"], [o, "touchend", "end", "notPassiveCapture"]]), l.start(r);
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
    Wt(l, "temp"), (_a2 = l.styleCleanup) == null ? void 0 : _a2.call(l, l.triggered), l.triggered === true ? r !== void 0 && Ne(r) : l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0);
  } }, a = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((r, o) => {
    const i = parseInt(r, 10);
    i && (a[o] = i);
  }), [l.duration, l.touchSensitivity, l.mouseSensitivity] = a, e.__qtouchhold = l, n.mouse === true) {
    const r = n.mouseCapture === true || n.mousecapture === true ? "Capture" : "";
    Ct(l, "main", [[e, "mousedown", "mouseStart", `passive${r}`]]);
  }
  ze.has.touch === true && Ct(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  const n = e.__qtouchhold;
  n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchhold;
  t !== void 0 && (Wt(t, "main"), Wt(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchhold);
} });
var Ih = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, ow = new RegExp(`^([\\d+]+|${Object.keys(Ih).join("|")})$`, "i");
function iw(e, t) {
  const { top: n, left: l } = en(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
An({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.keys(t).reduce((u, c) => {
    if (ow.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? Ih[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && a.length === 0) return;
  const r = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = r.length - 1, i = { keyboard: a, handler: n, noop: St, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && ei(u) === true && (Ct(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && yn(u, a) === true) {
      if ((r[0] === 0 || i.event !== void 0) && (Ne(u), e.focus(), i.event !== void 0)) return;
      Ct(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      Ct(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
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
    ze.is.mobile === true && (document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f), i.event = { touch: c !== true && s !== true, mouse: c === true, keyboard: s === true, startTime: Date.now(), repeatCount: 0 };
    const h = () => {
      if (i.timer = void 0, i.event === void 0) return;
      i.event.repeatCount === 0 && (i.event.evt = u, s === true ? i.event.keyCode = u.keyCode : i.event.position = en(u), ze.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Mn(), i.styleCleanup = f)), i.event.duration = Date.now() - i.event.startTime, i.event.repeatCount += 1, i.handler(i.event);
      const m = o < i.event.repeatCount ? o : i.event.repeatCount;
      i.timer = setTimeout(h, r[m]);
    };
    r[0] === 0 ? h() : i.timer = setTimeout(h, r[0]);
  }, move(u) {
    i.event !== void 0 && i.timer !== void 0 && iw(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a2;
    i.event !== void 0 && ((_a2 = i.styleCleanup) == null ? void 0 : _a2.call(i, true), u !== void 0 && i.event.repeatCount > 0 && Ne(u), Wt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
  } };
  if (e.__qtouchrepeat = i, t.mouse === true) {
    const u = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    Ct(i, "main", [[e, "mousedown", "mouseStart", `passive${u}`]]);
  }
  if (ze.has.touch === true && Ct(i, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), a.length !== 0) {
    const u = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    Ct(i, "main", [[e, "keydown", "keyboardStart", `notPassive${u}`]]);
  }
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qtouchrepeat;
  l !== void 0 && t !== n && (typeof n != "function" && l.end(), l.handler = n);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Wt(t, "main"), Wt(t, "temp"), (_a2 = t.styleCleanup) == null ? void 0 : _a2.call(t), delete e.__qtouchrepeat);
} });
function uw(e, t = document.body) {
  if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var Jr;
function sw() {
  return ze.is.winphone ? "msapplication-navbutton-color" : ze.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function cw(e) {
  const t = document.getElementsByTagName("META");
  for (const n in t) if (t[n].name === e) return t[n];
}
function dw(e) {
  Jr === void 0 && (Jr = sw());
  let t = cw(Jr);
  const n = t === void 0;
  n && (t = document.createElement("meta"), t.setAttribute("name", Jr)), t.setAttribute("content", e), n && document.head.appendChild(t);
}
ze.is.mobile === true && (ze.is.nativeMobile === true || ze.is.winphone === true || ze.is.safari === true || ze.is.webkit === true || ze.is.vivaldi);
var Da = {};
function fw(e) {
  Object.assign(Qt, { request: e, exit: e, toggle: e });
}
function Dh() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function Hh() {
  const e = Qt.activeEl = Qt.isActive === false ? null : Dh();
  Hy(e === null || e === document.documentElement ? document.body : e);
}
function vw() {
  Qt.isActive = Qt.isActive === false, Hh();
}
function Jd(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
var Qt = wl({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
Da.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Qt.isCapable = Da.request !== void 0, Qt.isCapable === false ? fw(() => Promise.reject("Not capable")) : (Object.assign(Qt, { request(e) {
  const t = e || document.documentElement, { activeEl: n } = Qt;
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => Jd(t, Da.request));
}, exit() {
  return Qt.isActive === true ? Jd(document, Da.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Da.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!Dh(), Qt.isActive === true && Hh(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = vw;
}));
var mw = wl({ appVisible: true }, { install({ $q: e }) {
  Ft(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    const n = () => {
      mw.appVisible = !document[e];
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
      return m.label === void 0 ? d(Nl, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(_) {
        _.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Nl, { spaced: true, dark: l.value }) : d(Sa, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(mn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => m.label)]);
    });
  }
  function f() {
    const m = [];
    return e.title && m.push(d(Pl, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Pl, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Em, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, f)];
  }
  return Object.assign(n, { show: r, hide: o }), () => d(si, { ref: a, position: "bottom", onHide: u }, h);
} });
function Nh(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, Nh(e[n], t[n])) : e[n] = t[n];
}
function hw(e, t, n) {
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
    const c = U(null), s = Ar(false, "dialog"), f = (p) => {
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
      return f("hide"), g;
    }, update(p) {
      if (i !== null) {
        if (o === true) Object.assign(r, p);
        else {
          const { class: y, style: b, ...x } = p;
          y !== void 0 && (x.cardClass = y), b !== void 0 && (x.cardStyle = b), Nh(r, x);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (p) => {
      u = true, h.forEach((y) => {
        y(p);
      });
    }, w = () => {
      S.unmount(s), xs(s), S = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let S = ni({ name: "QGlobalDialog", setup: () => () => d(a, { ...r, ref: c, onOk: _, onHide: w, onVnodeMounted(...p) {
      typeof r.onVnodeMounted == "function" && r.onVnodeMounted(...p), Xe(() => f("show"));
    } }) }, n);
    return i = S.mount(s), g;
  };
}
function jh(e) {
  return encodeURIComponent(e);
}
function Uh(e) {
  return decodeURIComponent(e);
}
function gw(e) {
  return jh(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function bw(e) {
  if (e === "") return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = Uh(e.replace(/\+/g, " "));
  try {
    const t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function Qh(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function yw(e) {
  let t = 0;
  const n = e.match(/(\d+)d/), l = e.match(/(\d+)h/), a = e.match(/(\d+)m/), r = e.match(/(\d+)s/);
  return n && (t += n[1] * 864e5), l && (t += l[1] * 36e5), a && (t += a[1] * 6e4), r && (t += r[1] * 1e3), t === 0 ? e : Qh(t);
}
function Kh(e, t, n = {}, l) {
  let a, r;
  n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? a = n.expires.toUTCString() : typeof n.expires == "string" ? a = yw(n.expires) : (r = parseFloat(n.expires), a = isNaN(r) === false ? Qh(r * 864e5) : n.expires));
  const o = `${jh(e)}=${gw(t)}`, i = [o, a !== void 0 ? "; Expires=" + a : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
  if (l) {
    l.req.qCookies ? l.req.qCookies.push(i) : l.req.qCookies = [i], l.res.setHeader("Set-Cookie", l.req.qCookies);
    let u = l.req.headers.cookie || "";
    if (a !== void 0 && r < 0) {
      const c = Io(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function Io(e, t) {
  const n = t ? t.req.headers : document, l = n.cookie ? n.cookie.split("; ") : [], a = l.length;
  let r = e ? null : {}, o = 0, i, u, c;
  for (; o < a; o++) if (i = l[o].split("="), u = Uh(i.shift()), c = i.join("="), !e) r[u] = c;
  else if (e === u) {
    r = bw(c);
    break;
  }
  return r;
}
function pw(e, t, n) {
  Kh(e, "", { expires: -1, ...t }, n);
}
function _w(e, t) {
  return Io(e, t) !== null;
}
function Wh(e) {
  return { get: (t) => Io(t, e), set: (t, n, l) => Kh(t, n, l, e), has: (t) => _w(t, e), remove: (t, n) => pw(t, n, e), getAll: () => Io(null, e) };
}
var Hs = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Hs.parseSSR = (e) => {
  if (e !== void 0) return Wh(e);
});
Object.assign(Hs, Wh());
var ww = Hs, Sw = ve({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = U(null), o = U(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = v(() => "q-dialog-plugin" + (a.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = v(() => e.color || (a.value === true ? "amber" : "primary")), c = v(() => e.progress === false ? null : At(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = v(() => e.prompt !== void 0 || e.options !== void 0), f = v(() => {
    if (s.value !== true) return {};
    const { model: q, isValid: D, items: N, ...j } = e.prompt !== void 0 ? e.prompt : e.options;
    return j;
  }), h = v(() => At(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), m = v(() => At(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = v(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = v(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...At(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), w = v(() => ({ color: u.value, label: m.value, ripple: false, ...At(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  he(() => e.prompt && e.prompt.model, A), he(() => e.options && e.options.model, A);
  function S() {
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
  function x() {
    t("hide");
  }
  function A(q) {
    o.value = q;
  }
  function k(q) {
    g.value !== true && e.prompt.type !== "textarea" && yn(q, 13) === true && y();
  }
  function O(q, D) {
    return e.html === true ? d(Pl, { class: q, innerHTML: D }) : d(Pl, { class: q }, () => D);
  }
  function P() {
    return [d(wh, { color: u.value, dense: true, autofocus: true, dark: a.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": A, onKeyup: k })];
  }
  function L() {
    return [d(M1, { color: u.value, options: e.options.items, dark: a.value, ...f.value, modelValue: o.value, "onUpdate:modelValue": A })];
  }
  function I() {
    const q = [];
    return e.cancel && q.push(d(Ze, w.value)), e.ok && q.push(d(Ze, _.value)), d(op, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => q);
  }
  function T() {
    const q = [];
    return e.title && q.push(O("q-dialog__title", e.title)), e.progress !== false && q.push(d(Pl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && q.push(O("q-dialog__message", e.message)), e.prompt !== void 0 ? q.push(d(Pl, { class: "scroll q-dialog-plugin__form" }, P)) : e.options !== void 0 && q.push(d(Nl, { dark: a.value }), d(Pl, { class: "scroll q-dialog-plugin__form" }, L), d(Nl, { dark: a.value })), (e.ok || e.cancel) && q.push(I()), q;
  }
  function $() {
    return [d(Em, { class: [i.value, e.cardClass], style: e.cardStyle, dark: a.value }, T)];
  }
  return Object.assign(n, { show: S, hide: p }), () => d(si, { ref: r, onHide: x }, $);
} }), xw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = hw(Sw, true, t);
} }, la, nu, ef = 0, El = null, It = {}, Bl = {}, Yh = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, Gh = { ...Yh };
function Cw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Bl[e.group] !== void 0) return Object.assign(Bl[e.group], e);
  const t = At(e) === true && e.ignoreDefaults === true ? { ...Yh, ...e } : { ...Gh, ...e };
  return Bl[t.group] = t, t;
}
var Sn = wl({ isActive: false }, { show(e) {
  It = Cw(e);
  const { group: t } = It;
  return Sn.isActive = true, la !== void 0 ? (It.uid = ef, nu.$forceUpdate()) : (It.uid = ++ef, El !== null && clearTimeout(El), El = setTimeout(() => {
    El = null;
    const n = Ar("q-loading");
    la = ni({ name: "QLoading", setup() {
      ft(() => {
        Fu(true);
      });
      function l() {
        Sn.isActive !== true && la !== void 0 && (Fu(false), la.unmount(n), xs(n), la = void 0, nu = void 0);
      }
      function a() {
        if (Sn.isActive !== true) return null;
        const r = [d(It.spinner, { class: "q-loading__spinner", color: It.spinnerColor, size: It.spinnerSize })];
        return It.message && r.push(d("div", { class: "q-loading__message" + (It.messageColor ? ` text-${It.messageColor}` : ""), [It.html === true ? "innerHTML" : "textContent"]: It.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + It.customClass.trim(), key: It.uid }, [d("div", { class: "q-loading__backdrop" + (It.backgroundColor ? ` bg-${It.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + It.boxClass }, r)]);
      }
      return () => d(Ot, { name: "q-transition--fade", appear: true, onAfterLeave: l }, a);
    } }, Sn.__parentApp), nu = la.mount(n);
  }, It.delay)), (n) => {
    if (n === void 0 || Object(n) !== n) {
      Sn.hide(t);
      return;
    }
    Sn.show({ ...n, group: t });
  };
}, hide(e) {
  if (Sn.isActive === true) {
    if (e === void 0) Bl = {};
    else {
      if (Bl[e] === void 0) return;
      {
        delete Bl[e];
        const t = Object.keys(Bl);
        if (t.length !== 0) {
          const n = t[t.length - 1];
          Sn.show({ group: n });
          return;
        }
      }
    }
    El !== null && (clearTimeout(El), El = null), Sn.isActive = false;
  }
}, setDefaults(e) {
  At(e) === true && Object.assign(Gh, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), kw = Sn, eo = U(null), tf = wl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = U(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    tf.isActive = true;
  }
  function a() {
    tf.isActive = false;
  }
  const r = Ar("q-loading-bar");
  ni({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(py, { ...n.value, onStart: l, onStop: a, ref: eo }) }, t).mount(r), Object.assign(this, { start(o) {
    eo.value.start(o);
  }, stop() {
    eo.value.stop();
  }, increment() {
    eo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    At(o) === true && Object.assign(n.value, o);
  } });
} }), qw = 0, uo = {}, so = {}, xn = {}, Xh = {}, Tw = /^\s*$/, Zh = [], Mw = [void 0, null, true, false, ""], Ns = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Ew = ["top-left", "top-right", "bottom-left", "bottom-right"], Wa = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function Jh(e, t, n) {
  var _a2;
  if (!e) return Ha("parameter required");
  let l;
  const a = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(a, uo), At(e) === false && (a.type && Object.assign(a, Wa[a.type]), e = { message: e }), Object.assign(a, Wa[e.type || a.type], e), typeof a.icon == "function" && (a.icon = a.icon(t)), a.spinner ? (a.spinner === true && (a.spinner = _n), a.spinner = jo(a.spinner)) : a.spinner = false, a.meta = { hasMedia: !!(a.spinner !== false || a.icon || a.avatar), hasText: nf(a.message) || nf(a.caption) }, a.position) {
    if (Ns.includes(a.position) === false) return Ha("wrong position", e);
  } else a.position = "bottom";
  if (Mw.includes(a.timeout) === true) a.timeout = 5e3;
  else {
    const u = Number(a.timeout);
    if (isNaN(u) || u < 0) return Ha("wrong timeout", e);
    a.timeout = Number.isFinite(u) ? u : 0;
  }
  a.timeout === 0 ? a.progress = false : a.progress === true && (a.meta.progressClass = "q-notification__progress" + (a.progressClass ? ` ${a.progressClass}` : ""), a.meta.progressStyle = { animationDuration: `${a.timeout + 1e3}ms` });
  const r = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(uo.actions) === true ? uo.actions : []).concat(Array.isArray((_a2 = Wa[e.type]) == null ? void 0 : _a2.actions) === true ? Wa[e.type].actions : []), { closeBtn: o } = a;
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
      if (a.meta.uid = qw++, a.meta.badge = 1, ["left", "right", "center"].indexOf(a.position) !== -1) xn[a.position].value.splice(Math.floor(xn[a.position].value.length / 2), 0, a);
      else {
        const c = a.position.indexOf("top") !== -1 ? "unshift" : "push";
        xn[a.position].value[c](a);
      }
      a.group !== void 0 && (so[a.meta.group] = a);
    } else {
      if (u.meta.timer && (clearTimeout(u.meta.timer), u.meta.timer = void 0), a.badgePosition !== void 0) {
        if (Ew.includes(a.badgePosition) === false) return Ha("wrong badgePosition", e);
      } else a.badgePosition = `top-${a.position.indexOf("left") !== -1 ? "right" : "left"}`;
      a.meta.uid = u.meta.uid, a.meta.badge = u.meta.badge + 1, a.meta.badgeClass = `q-notification__badge q-notification__badge--${a.badgePosition}` + (a.badgeColor !== void 0 ? ` bg-${a.badgeColor}` : "") + (a.badgeTextColor !== void 0 ? ` text-${a.badgeTextColor}` : "") + (a.badgeClass ? ` ${a.badgeClass}` : "");
      const c = xn[a.position].value.indexOf(u);
      xn[a.position].value[c] = so[a.meta.group] = a;
    }
  }
  const i = () => {
    $w(a), l = void 0;
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
      Jh(c, t, l);
    }
  };
}
function $w(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  const t = xn[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete so[e.meta.group];
    const n = Zh["" + e.meta.uid];
    if (n) {
      const { width: l, height: a } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`, n.style.width = l, n.style.height = a;
    }
    xn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function nf(e) {
  return e != null && Tw.test(e) !== true;
}
function Ha(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Aw() {
  return ve({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, Ns.map((e) => d(zb, { key: e, class: Xh[e], tag: "div", name: `q-notification--${e}` }, () => xn[e].value.map((t) => {
      const n = t.meta, l = [];
      if (n.hasMedia === true && (t.spinner !== false ? l.push(d(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + n.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? l.push(d(et, { class: "q-notification__icon q-notification__icon--" + n.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && l.push(d(im, { class: "q-notification__avatar q-notification__avatar--" + n.leftClass }, () => d("img", { src: t.avatar, "aria-hidden": "true" })))), n.hasText === true) {
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
        Zh["" + n.uid] = r;
      }, key: n.uid, class: n.class, ...n.attrs }, [d("div", { class: n.wrapperClass }, a)]);
    }))));
  } });
}
var Rw = { setDefaults(e) {
  At(e) === true && Object.assign(uo, e);
}, registerType(e, t) {
  At(t) === true && (Wa[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => Jh(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Ns.forEach((l) => {
      xn[l] = U([]);
      const a = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", r = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${r}`;
      Xh[l] = `q-notifications__list q-notifications__list--${a} fixed column no-wrap ${o}`;
    });
    const n = Ar("q-notify");
    ni(Aw(), t).mount(n);
  }
} };
function Pw(e) {
  return qu(e) === true ? "__q_date|" + e.getTime() : dy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Lw(e) {
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
function eg() {
  const e = () => null;
  return { has: () => false, hasItem: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: St, setItem: St, remove: St, removeItem: St, clear: St, isEmpty: () => true };
}
function tg(e) {
  const t = window[e + "Storage"], n = (o) => {
    const i = t.getItem(o);
    return i ? Lw(i) : null;
  }, l = (o) => t.getItem(o) !== null, a = (o, i) => {
    t.setItem(o, Pw(i));
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
var ng = ze.has.webStorage === false ? eg() : tg("local"), Bw = { install({ $q: e }) {
  e.localStorage = ng;
} };
Object.assign(Bw, ng);
var lg = ze.has.webStorage === false ? eg() : tg("session"), Ow = { install({ $q: e }) {
  e.sessionStorage = lg;
} };
Object.assign(Ow, lg);
var Fw = ["ok", "hide"];
Oh(Fw);
function Vw() {
  return qt(Wv);
}
var zw = { version: "2.18.1", install: vy, lang: ti, iconSet: Kv };
function Iw(e, t) {
  const n = ss("router-view");
  return Yn(), Rl(n, { class: "view" });
}
const ag = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, Dw = {}, Hw = ag(Dw, [["render", Iw]]), Nw = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", jw = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", Uw = /* @__PURE__ */ qa({ __name: "Quasar", setup(e) {
  const t = Vw();
  let n = U(false), l = U(false), a = U(true);
  return (r, o) => {
    const i = ss("router-view"), u = q0("ripple");
    return Yn(), Rl(De(w1), { class: "fullscreen", view: "hHh LpR fFf" }, { default: Lt(() => [Je(De(u1), { class: "bg-primary text-white", elevated: "" }, { default: Lt(() => [Je(De(L_), null, { default: Lt(() => [Je(De(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[0] || (o[0] = (c) => pt(n) ? n.value = !De(n) : n = !De(n)) }), Je(De(B_), null, { default: Lt(() => [Je(De(im), null, { default: Lt(() => o[10] || (o[10] = [fa("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), o[11] || (o[11] = oa("\xA0Title"))]), _: 1 }), De(t).dark.isActive ? (Yn(), Rl(De(Ze), { key: 0, dense: "", flat: "", round: "", icon: De(jw), onClick: o[1] || (o[1] = (c) => De(t).dark.set(false)) }, null, 8, ["icon"])) : mc("", true), De(t).dark.isActive ? mc("", true) : (Yn(), Rl(De(Ze), { key: 1, dense: "", flat: "", round: "", icon: De(Nw), onClick: o[2] || (o[2] = (c) => De(t).dark.set(true)) }, null, 8, ["icon"])), Je(De(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[3] || (o[3] = (c) => pt(l) ? l.value = !De(l) : l = !De(l)) })]), _: 1 }), Je(De(Bu), { align: "left" }, { default: Lt(() => [Je(De(tu), { to: "/page1", label: "Page One" }), Je(De(tu), { to: "/page2", label: "Page Two" }), Je(De(tu), { to: "/page3", label: "Page Three" })]), _: 1 })]), _: 1 }), Je(De(_d), { modelValue: De(n), "onUpdate:modelValue": o[8] || (o[8] = (c) => pt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: De(a), overlay: "" }, { default: Lt(() => [Je(De(P1), { class: "fit" }, { default: Lt(() => [Je(De(xh), { class: "menu-list padding" }, { default: Lt(() => [sn((Yn(), Rl(De(Sa), { clickable: "", onMouseover: o[4] || (o[4] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[5] || (o[5] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(De(mn), { avatar: "" }, { default: Lt(() => [Je(De(et), { name: "inbox" })]), _: 1 }), Je(De(mn), null, { default: Lt(() => o[12] || (o[12] = [oa("inbox")])), _: 1 })]), _: 1 })), [[u]]), sn((Yn(), Rl(De(Sa), { clickable: "", onMouseover: o[6] || (o[6] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[7] || (o[7] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(De(mn), { avatar: "" }, { default: Lt(() => [Je(De(et), { name: "login" })]), _: 1 }), Je(De(mn), null, { default: Lt(() => o[13] || (o[13] = [oa("login")])), _: 1 })]), _: 1 })), [[u]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(De(_d), { modelValue: De(l), "onUpdate:modelValue": o[9] || (o[9] = (c) => pt(l) ? l.value = c : l = c), side: "right", bordered: "", overlay: "" }, { default: Lt(() => o[14] || (o[14] = [oa("right")])), _: 1 }, 8, ["modelValue"]), Je(De(E1), { class: "fit", style: { "background-color": "navy" } }, { default: Lt(() => [Je(i)]), _: 1 })]), _: 1 });
  };
} });
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const ra = typeof document < "u";
function rg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Qw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && rg(e.default);
}
const ut = Object.assign;
function lu(e, t) {
  const n = {};
  for (const l in t) {
    const a = t[l];
    n[l] = $n(a) ? a.map(e) : e(a);
  }
  return n;
}
const sr = () => {
}, $n = Array.isArray, og = /#/g, Kw = /&/g, Ww = /\//g, Yw = /=/g, Gw = /\?/g, ig = /\+/g, Xw = /%5B/g, Zw = /%5D/g, ug = /%5E/g, Jw = /%60/g, sg = /%7B/g, eS = /%7C/g, cg = /%7D/g, tS = /%20/g;
function js(e) {
  return encodeURI("" + e).replace(eS, "|").replace(Xw, "[").replace(Zw, "]");
}
function nS(e) {
  return js(e).replace(sg, "{").replace(cg, "}").replace(ug, "^");
}
function Hu(e) {
  return js(e).replace(ig, "%2B").replace(tS, "+").replace(og, "%23").replace(Kw, "%26").replace(Jw, "`").replace(sg, "{").replace(cg, "}").replace(ug, "^");
}
function lS(e) {
  return Hu(e).replace(Yw, "%3D");
}
function aS(e) {
  return js(e).replace(og, "%23").replace(Gw, "%3F");
}
function rS(e) {
  return e == null ? "" : aS(e).replace(Ww, "%2F");
}
function xr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const oS = /\/$/, iS = (e) => e.replace(oS, "");
function au(e, t, n = "/") {
  let l, a = {}, r = "", o = "";
  const i = t.indexOf("#");
  let u = t.indexOf("?");
  return i < u && i >= 0 && (u = -1), u > -1 && (l = t.slice(0, u), r = t.slice(u + 1, i > -1 ? i : t.length), a = e(r)), i > -1 && (l = l || t.slice(0, i), o = t.slice(i, t.length)), l = dS(l ?? t, n), { fullPath: l + (r && "?") + r + o, path: l, query: a, hash: xr(o) };
}
function uS(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function lf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function sS(e, t, n) {
  const l = t.matched.length - 1, a = n.matched.length - 1;
  return l > -1 && l === a && xa(t.matched[l], n.matched[a]) && dg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function xa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!cS(e[n], t[n])) return false;
  return true;
}
function cS(e, t) {
  return $n(e) ? af(e, t) : $n(t) ? af(t, e) : e === t;
}
function af(e, t) {
  return $n(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function dS(e, t) {
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
function fS(e) {
  if (!e) if (ra) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), iS(e);
}
const vS = /^[^#]+#/;
function mS(e, t) {
  return e.replace(vS, "#") + t;
}
function hS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), l = e.getBoundingClientRect();
  return { behavior: t.behavior, left: l.left - n.left - (t.left || 0), top: l.top - n.top - (t.top || 0) };
}
const mi = () => ({ left: window.scrollX, top: window.scrollY });
function gS(e) {
  let t;
  if ("el" in e) {
    const n = e.el, l = typeof n == "string" && n.startsWith("#"), a = typeof n == "string" ? l ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!a) return;
    t = hS(a, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function rf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Nu = /* @__PURE__ */ new Map();
function bS(e, t) {
  Nu.set(e, t);
}
function yS(e) {
  const t = Nu.get(e);
  return Nu.delete(e), t;
}
let pS = () => location.protocol + "//" + location.host;
function fg(e, t) {
  const { pathname: n, search: l, hash: a } = t, r = e.indexOf("#");
  if (r > -1) {
    let i = a.includes(e.slice(r)) ? e.slice(r).length : 1, u = a.slice(i);
    return u[0] !== "/" && (u = "/" + u), lf(u, "");
  }
  return lf(n, e) + l + a;
}
function _S(e, t, n, l) {
  let a = [], r = [], o = null;
  const i = ({ state: h }) => {
    const m = fg(e, location), g = n.value, _ = t.value;
    let w = 0;
    if (h) {
      if (n.value = m, t.value = h, o && o === g) {
        o = null;
        return;
      }
      w = _ ? h.position - _.position : 0;
    } else l(m);
    a.forEach((S) => {
      S(n.value, g, { delta: w, type: Cr.pop, direction: w ? w > 0 ? cr.forward : cr.back : cr.unknown });
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
    h.state && h.replaceState(ut({}, h.state, { scroll: mi() }), "");
  }
  function f() {
    for (const h of r) h();
    r = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: f };
}
function of(e, t, n, l = false, a = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: a ? mi() : null };
}
function wS(e) {
  const { history: t, location: n } = window, l = { value: fg(e, n) }, a = { value: t.state };
  a.value || r(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function r(u, c, s) {
    const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + u : pS() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), a.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, of(a.value.back, u, a.value.forward, true), c, { position: a.value.position });
    r(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, a.value, t.state, { forward: u, scroll: mi() });
    r(s.current, s, true);
    const f = ut({}, of(l.value, u, null), { position: s.position + 1 }, c);
    r(u, f, false), l.value = u;
  }
  return { location: l, state: a, push: i, replace: o };
}
function SS(e) {
  e = fS(e);
  const t = wS(e), n = _S(e, t.state, t.location, t.replace);
  function l(r, o = true) {
    o || n.pauseListeners(), history.go(r);
  }
  const a = ut({ location: "", base: e, go: l, createHref: mS.bind(null, e) }, t, n);
  return Object.defineProperty(a, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(a, "state", { enumerable: true, get: () => t.state.value }), a;
}
function xS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), SS(e);
}
function CS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const mg = Symbol("");
var uf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(uf || (uf = {}));
function Ca(e, t) {
  return ut(new Error(), { type: e, [mg]: true }, t);
}
function Nn(e, t) {
  return e instanceof Error && mg in e && (t == null || !!(e.type & t));
}
const sf = "[^/]+?", kS = { sensitive: false, strict: false, start: true, end: true }, qS = /[.+*?^${}()[\]/\\]/g;
function TS(e, t) {
  const n = ut({}, kS, t), l = [];
  let a = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (a += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) f || (a += "/"), a += h.value.replace(qS, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: S } = h;
        r.push({ name: g, repeatable: _, optional: w });
        const p = S || sf;
        if (p !== sf) {
          m += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = _ ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        f || (y = w && c.length < 2 ? `(?:/${y})` : "/" + y), w && (y += "?"), a += y, m += 20, w && (m += -8), _ && (m += -20), p === ".*" && (m += -50);
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
    const s = c.match(o), f = {};
    if (!s) return null;
    for (let h = 1; h < s.length; h++) {
      const m = s[h] || "", g = r[h - 1];
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
        const { value: g, repeatable: _, optional: w } = m, S = g in c ? c[g] : "";
        if ($n(S) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = $n(S) ? S.join("/") : S;
        if (!p) if (w) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${g}"`);
        s += p;
      }
    }
    return s || "/";
  }
  return { re: o, score: l, keys: r, parse: i, stringify: u };
}
function MS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const l = t[n] - e[n];
    if (l) return l;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function hg(e, t) {
  let n = 0;
  const l = e.score, a = t.score;
  for (; n < l.length && n < a.length; ) {
    const r = MS(l[n], a[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(a.length - l.length) === 1) {
    if (cf(l)) return 1;
    if (cf(a)) return -1;
  }
  return a.length - l.length;
}
function cf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ES = { type: 0, value: "" }, $S = /[a-zA-Z0-9_]/;
function AS(e) {
  if (!e) return [[]];
  if (e === "/") return [[ES]];
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
  function f() {
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
        u === "/" ? (c && f(), o()) : u === ":" ? (f(), n = 1) : h();
        break;
      case 4:
        h(), n = l;
        break;
      case 1:
        u === "(" ? n = 2 : $S.test(u) ? h() : (f(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), a;
}
function RS(e, t, n) {
  const l = TS(AS(e.path), n), a = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function PS(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = mf({ strict: false, end: true, sensitive: false }, t);
  function a(f) {
    return l.get(f);
  }
  function r(f, h, m) {
    const g = !m, _ = ff(f);
    _.aliasOf = m && m.record;
    const w = mf(t, f), S = [_];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of b) S.push(ff(ut({}, _, { components: m ? m.record.components : _.components, path: x, aliasOf: m ? m.record : _ })));
    }
    let p, y;
    for (const b of S) {
      const { path: x } = b;
      if (h && x[0] !== "/") {
        const A = h.record.path, k = A[A.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (x && k + x);
      }
      if (p = RS(b, h, w), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && f.name && !vf(p) && o(f.name)), gg(p) && u(p), _.children) {
        const A = _.children;
        for (let k = 0; k < A.length; k++) r(A[k], p, m && m.children[k]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : sr;
  }
  function o(f) {
    if (vg(f)) {
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
    const h = OS(f, n);
    n.splice(h, 0, f), f.record.name && !vf(f) && l.set(f.record.name, f);
  }
  function c(f, h) {
    let m, g = {}, _, w;
    if ("name" in f && f.name) {
      if (m = l.get(f.name), !m) throw Ca(1, { location: f });
      w = m.record.name, g = ut(df(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), f.params && df(f.params, m.keys.map((y) => y.name))), _ = m.stringify(g);
    } else if (f.path != null) _ = f.path, m = n.find((y) => y.re.test(_)), m && (g = m.parse(_), w = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw Ca(1, { location: f, currentLocation: h });
      w = m.record.name, g = ut({}, h.params, f.params), _ = m.stringify(g);
    }
    const S = [];
    let p = m;
    for (; p; ) S.unshift(p.record), p = p.parent;
    return { name: w, path: _, params: g, matched: S, meta: BS(S) };
  }
  e.forEach((f) => r(f));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: r, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: a };
}
function df(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function ff(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: LS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function LS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function vf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function BS(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function mf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function OS(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const r = n + l >> 1;
    hg(e, t[r]) < 0 ? l = r : n = r + 1;
  }
  const a = FS(e);
  return a && (l = t.lastIndexOf(a, l - 1)), l;
}
function FS(e) {
  let t = e;
  for (; t = t.parent; ) if (gg(t) && hg(e, t) === 0) return t;
}
function gg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function VS(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const l = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let a = 0; a < l.length; ++a) {
    const r = l[a].replace(ig, " "), o = r.indexOf("="), i = xr(o < 0 ? r : r.slice(0, o)), u = o < 0 ? null : xr(r.slice(o + 1));
    if (i in t) {
      let c = t[i];
      $n(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function hf(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = lS(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($n(l) ? l.map((r) => r && Hu(r)) : [l && Hu(l)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function zS(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = $n(l) ? l.map((a) => a == null ? null : "" + a) : l == null ? l : "" + l);
  }
  return t;
}
const IS = Symbol(""), gf = Symbol(""), Us = Symbol(""), bg = Symbol(""), ju = Symbol("");
function Na() {
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
      h === false ? u(Ca(4, { from: n, to: t })) : h instanceof Error ? u(h) : CS(h) ? u(Ca(2, { from: t, to: h })) : (o && l.enterCallbacks[a] === o && typeof h == "function" && o.push(h), i());
    }, s = r(() => e.call(l && l.instances[a], t, n, c));
    let f = Promise.resolve(s);
    e.length < 3 && (f = f.then(c)), f.catch((h) => u(h));
  });
}
function ru(e, t, n, l, a = (r) => r()) {
  const r = [];
  for (const o of e) for (const i in o.components) {
    let u = o.components[i];
    if (!(t !== "beforeRouteEnter" && !o.instances[i])) if (rg(u)) {
      const s = (u.__vccOpts || u)[t];
      s && r.push(dl(s, n, l, o, i, a));
    } else {
      let c = u();
      r.push(() => c.then((s) => {
        if (!s) throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);
        const f = Qw(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = f;
        const m = (f.__vccOpts || f)[t];
        return m && dl(m, n, l, o, i, a)();
      }));
    }
  }
  return r;
}
function bf(e) {
  const t = qt(Us), n = qt(bg), l = v(() => {
    const u = De(e.to);
    return t.resolve(u);
  }), a = v(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], f = n.matched;
    if (!s || !f.length) return -1;
    const h = f.findIndex(xa.bind(null, s));
    if (h > -1) return h;
    const m = yf(u[c - 2]);
    return c > 1 && yf(s) === m && f[f.length - 1].path !== m ? f.findIndex(xa.bind(null, u[c - 2])) : h;
  }), r = v(() => a.value > -1 && US(n.params, l.value.params)), o = v(() => a.value > -1 && a.value === n.matched.length - 1 && dg(n.params, l.value.params));
  function i(u = {}) {
    if (jS(u)) {
      const c = t[De(e.replace) ? "replace" : "push"](De(e.to)).catch(sr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: v(() => l.value.href), isActive: r, isExactActive: o, navigate: i };
}
function DS(e) {
  return e.length === 1 ? e[0] : e;
}
const HS = /* @__PURE__ */ qa({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: bf, setup(e, { slots: t }) {
  const n = Bn(bf(e)), { options: l } = qt(Us), a = v(() => ({ [pf(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [pf(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const r = t.default && DS(t.default(n));
    return e.custom ? r : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: a.value }, r);
  };
} }), NS = HS;
function jS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function US(e, t) {
  for (const n in t) {
    const l = t[n], a = e[n];
    if (typeof l == "string") {
      if (l !== a) return false;
    } else if (!$n(a) || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function yf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const pf = (e, t, n) => e ?? t ?? n, QS = /* @__PURE__ */ qa({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = qt(ju), a = v(() => e.route || l.value), r = qt(gf, 0), o = v(() => {
    let c = De(r);
    const { matched: s } = a.value;
    let f;
    for (; (f = s[c]) && !f.components; ) c++;
    return c;
  }), i = v(() => a.value.matched[o.value]);
  hn(gf, v(() => o.value + 1)), hn(IS, i), hn(ju, a);
  const u = U();
  return he(() => [u.value, i.value, e.name], ([c, s, f], [h, m, g]) => {
    s && (s.instances[f] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !xa(s, m) || !h) && (s.enterCallbacks[f] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = a.value, s = e.name, f = i.value, h = f && f.components[s];
    if (!h) return _f(n.default, { Component: h, route: c });
    const m = f.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, w = d(h, ut({}, g, t, { onVnodeUnmounted: (S) => {
      S.component.isUnmounted && (f.instances[s] = null);
    }, ref: u }));
    return _f(n.default, { Component: w, route: c }) || w;
  };
} });
function _f(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const KS = QS;
function WS(e) {
  const t = PS(e.routes, e), n = e.parseQuery || VS, l = e.stringifyQuery || hf, a = e.history, r = Na(), o = Na(), i = Na(), u = a0(rl);
  let c = rl;
  ra && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = lu.bind(null, (R) => "" + R), f = lu.bind(null, rS), h = lu.bind(null, xr);
  function m(R, J) {
    let F, re;
    return vg(R) ? (F = t.getRecordMatcher(R), re = J) : re = R, t.addRoute(re, F);
  }
  function g(R) {
    const J = t.getRecordMatcher(R);
    J && t.removeRoute(J);
  }
  function _() {
    return t.getRoutes().map((R) => R.record);
  }
  function w(R) {
    return !!t.getRecordMatcher(R);
  }
  function S(R, J) {
    if (J = ut({}, J || u.value), typeof R == "string") {
      const z = au(n, R, J.path), Z = t.resolve({ path: z.path }, J), te = a.createHref(z.fullPath);
      return ut(z, Z, { params: h(Z.params), hash: xr(z.hash), redirectedFrom: void 0, href: te });
    }
    let F;
    if (R.path != null) F = ut({}, R, { path: au(n, R.path, J.path).path });
    else {
      const z = ut({}, R.params);
      for (const Z in z) z[Z] == null && delete z[Z];
      F = ut({}, R, { params: f(z) }), J.params = f(J.params);
    }
    const re = t.resolve(F, J), we = R.hash || "";
    re.params = s(h(re.params));
    const C = uS(l, ut({}, R, { hash: nS(we), path: re.path })), E = a.createHref(C);
    return ut({ fullPath: C, hash: we, query: l === hf ? zS(R.query) : R.query || {} }, re, { redirectedFrom: void 0, href: E });
  }
  function p(R) {
    return typeof R == "string" ? au(n, R, u.value.path) : ut({}, R);
  }
  function y(R, J) {
    if (c !== R) return Ca(8, { from: J, to: R });
  }
  function b(R) {
    return k(R);
  }
  function x(R) {
    return b(ut(p(R), { replace: true }));
  }
  function A(R) {
    const J = R.matched[R.matched.length - 1];
    if (J && J.redirect) {
      const { redirect: F } = J;
      let re = typeof F == "function" ? F(R) : F;
      return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = p(re) : { path: re }, re.params = {}), ut({ query: R.query, hash: R.hash, params: re.path != null ? {} : R.params }, re);
    }
  }
  function k(R, J) {
    const F = c = S(R), re = u.value, we = R.state, C = R.force, E = R.replace === true, z = A(F);
    if (z) return k(ut(p(z), { state: typeof z == "object" ? ut({}, we, z.state) : we, force: C, replace: E }), J || F);
    const Z = F;
    Z.redirectedFrom = J;
    let te;
    return !C && sS(l, re, F) && (te = Ca(16, { to: Z, from: re }), W(re, re, true, false)), (te ? Promise.resolve(te) : L(Z, re)).catch((Q) => Nn(Q) ? Nn(Q, 2) ? Q : pe(Q) : Y(Q, Z, re)).then((Q) => {
      if (Q) {
        if (Nn(Q, 2)) return k(ut({ replace: E }, p(Q.to), { state: typeof Q.to == "object" ? ut({}, we, Q.to.state) : we, force: C }), J || Z);
      } else Q = T(Z, re, true, E, we);
      return I(Z, re, Q), Q;
    });
  }
  function O(R, J) {
    const F = y(R, J);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function P(R) {
    const J = X.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(R) : R();
  }
  function L(R, J) {
    let F;
    const [re, we, C] = YS(R, J);
    F = ru(re.reverse(), "beforeRouteLeave", R, J);
    for (const z of re) z.leaveGuards.forEach((Z) => {
      F.push(dl(Z, R, J));
    });
    const E = O.bind(null, R, J);
    return F.push(E), B(F).then(() => {
      F = [];
      for (const z of r.list()) F.push(dl(z, R, J));
      return F.push(E), B(F);
    }).then(() => {
      F = ru(we, "beforeRouteUpdate", R, J);
      for (const z of we) z.updateGuards.forEach((Z) => {
        F.push(dl(Z, R, J));
      });
      return F.push(E), B(F);
    }).then(() => {
      F = [];
      for (const z of C) if (z.beforeEnter) if ($n(z.beforeEnter)) for (const Z of z.beforeEnter) F.push(dl(Z, R, J));
      else F.push(dl(z.beforeEnter, R, J));
      return F.push(E), B(F);
    }).then(() => (R.matched.forEach((z) => z.enterCallbacks = {}), F = ru(C, "beforeRouteEnter", R, J, P), F.push(E), B(F))).then(() => {
      F = [];
      for (const z of o.list()) F.push(dl(z, R, J));
      return F.push(E), B(F);
    }).catch((z) => Nn(z, 8) ? z : Promise.reject(z));
  }
  function I(R, J, F) {
    i.list().forEach((re) => P(() => re(R, J, F)));
  }
  function T(R, J, F, re, we) {
    const C = y(R, J);
    if (C) return C;
    const E = J === rl, z = ra ? history.state : {};
    F && (re || E ? a.replace(R.fullPath, ut({ scroll: E && z && z.scroll }, we)) : a.push(R.fullPath, we)), u.value = R, W(R, J, F, E), pe();
  }
  let $;
  function q() {
    $ || ($ = a.listen((R, J, F) => {
      if (!be.listening) return;
      const re = S(R), we = A(re);
      if (we) {
        k(ut(we, { replace: true, force: true }), re).catch(sr);
        return;
      }
      c = re;
      const C = u.value;
      ra && bS(rf(C.fullPath, F.delta), mi()), L(re, C).catch((E) => Nn(E, 12) ? E : Nn(E, 2) ? (k(ut(p(E.to), { force: true }), re).then((z) => {
        Nn(z, 20) && !F.delta && F.type === Cr.pop && a.go(-1, false);
      }).catch(sr), Promise.reject()) : (F.delta && a.go(-F.delta, false), Y(E, re, C))).then((E) => {
        E = E || T(re, C, false), E && (F.delta && !Nn(E, 8) ? a.go(-F.delta, false) : F.type === Cr.pop && Nn(E, 20) && a.go(-1, false)), I(re, C, E);
      }).catch(sr);
    }));
  }
  let D = Na(), N = Na(), j;
  function Y(R, J, F) {
    pe(R);
    const re = N.list();
    return re.length ? re.forEach((we) => we(R, J, F)) : console.error(R), Promise.reject(R);
  }
  function le() {
    return j && u.value !== rl ? Promise.resolve() : new Promise((R, J) => {
      D.add([R, J]);
    });
  }
  function pe(R) {
    return j || (j = !R, q(), D.list().forEach(([J, F]) => R ? F(R) : J()), D.reset()), R;
  }
  function W(R, J, F, re) {
    const { scrollBehavior: we } = e;
    if (!ra || !we) return Promise.resolve();
    const C = !F && yS(rf(R.fullPath, 0)) || (re || !F) && history.state && history.state.scroll || null;
    return Xe().then(() => we(R, J, C)).then((E) => E && gS(E)).catch((E) => Y(E, R, J));
  }
  const M = (R) => a.go(R);
  let ee;
  const X = /* @__PURE__ */ new Set(), be = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: S, options: e, push: b, replace: x, go: M, back: () => M(-1), forward: () => M(1), beforeEach: r.add, beforeResolve: o.add, afterEach: i.add, onError: N.add, isReady: le, install(R) {
    const J = this;
    R.component("RouterLink", NS), R.component("RouterView", KS), R.config.globalProperties.$router = J, Object.defineProperty(R.config.globalProperties, "$route", { enumerable: true, get: () => De(u) }), ra && !ee && u.value === rl && (ee = true, b(a.location).catch((we) => {
    }));
    const F = {};
    for (const we in rl) Object.defineProperty(F, we, { get: () => u.value[we], enumerable: true });
    R.provide(Us, J), R.provide(bg, as(F)), R.provide(ju, u);
    const re = R.unmount;
    X.add(R), R.unmount = function() {
      X.delete(R), X.size < 1 && (c = rl, $ && $(), $ = null, u.value = rl, ee = false, j = false), re();
    };
  } };
  function B(R) {
    return R.reduce((J, F) => J.then(() => P(F)), Promise.resolve());
  }
  return be;
}
function YS(e, t) {
  const n = [], l = [], a = [], r = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < r; o++) {
    const i = t.matched[o];
    i && (e.matched.find((c) => xa(c, i)) ? l.push(i) : n.push(i));
    const u = e.matched[o];
    u && (t.matched.find((c) => xa(c, u)) || a.push(u));
  }
  return [n, l, a];
}
let Jt;
const yg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && yg.decode();
let Ya = null;
function co() {
  return (Ya === null || Ya.byteLength === 0) && (Ya = new Uint8Array(Jt.memory.buffer)), Ya;
}
function ou(e, t) {
  return e = e >>> 0, yg.decode(co().subarray(e, e + t));
}
function GS(e) {
  const t = Jt.__externref_table_alloc();
  return Jt.__wbindgen_export_2.set(t, e), t;
}
function XS(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const l = GS(n);
    Jt.__wbindgen_exn_store(l);
  }
}
function ZS(e, t) {
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
let Uu = 0;
const fo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, JS = typeof fo.encodeInto == "function" ? function(e, t) {
  return fo.encodeInto(e, t);
} : function(e, t) {
  const n = fo.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function ex(e, t, n) {
  if (typeof e != "string") throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    const i = fo.encode(e), u = t(i.length, 1) >>> 0;
    return co().subarray(u, u + i.length).set(i), Uu = i.length, u;
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
    const i = co().subarray(a + o, a + l), u = JS(e, i);
    if (u.read !== e.length) throw new Error("failed to pass whole string");
    o += u.written, a = n(a, l, o, 1) >>> 0;
  }
  return Uu = o, a;
}
function tx(e) {
  const t = Jt.__wbindgen_export_2.get(e);
  return Jt.__externref_table_dealloc(e), t;
}
function nx(e) {
  const t = ex(e, Jt.__wbindgen_malloc, Jt.__wbindgen_realloc), n = Uu, l = Jt.mtg(t, n);
  if (l[1]) throw tx(l[0]);
}
async function lx(e, t) {
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
function ax() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_cb_d0b9dcdfbbb21123 = function() {
    return XS(function(t, n) {
      cb(ou(t, n));
    }, arguments);
  }, e.wbg.__wbg_log_6eff8ac810e5dae1 = function() {
    return ZS(function(t, n) {
      log(ou(t, n));
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = Jt.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(ou(t, n));
  }, e;
}
function rx(e, t) {
  return Jt = e.exports, pg.__wbindgen_wasm_module = t, Ya = null, Jt.__wbindgen_start(), Jt;
}
async function pg(e) {
  if (Jt !== void 0) return Jt;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("wasm_rust_mtg_bg-DocDiN2i.wasm", import.meta.url).href, import.meta.url));
  const t = ax();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: l } = await lx(await e, t);
  return rx(n, l);
}
const ox = /* @__PURE__ */ qa({ __name: "HelloWorld", setup(e) {
  const t = () => {
    nx("test");
  };
  return (n, l) => {
    const a = ss("router-view");
    return Yn(), qv(rn, null, [Je(De(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Lt(() => l[0] || (l[0] = [oa("test")])), _: 1 }), Je(a)], 64);
  };
} }), ix = ag(ox, [["__scopeId", "data-v-17fee452"]]);
var ux = 1e-6, wf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function Sf() {
  var e = new wf(16);
  return wf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function xf(e, t, n) {
  var l = n[0], a = n[1], r = n[2], o, i, u, c, s, f, h, m, g, _, w, S;
  return t === e ? (e[12] = t[0] * l + t[4] * a + t[8] * r + t[12], e[13] = t[1] * l + t[5] * a + t[9] * r + t[13], e[14] = t[2] * l + t[6] * a + t[10] * r + t[14], e[15] = t[3] * l + t[7] * a + t[11] * r + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], f = t[5], h = t[6], m = t[7], g = t[8], _ = t[9], w = t[10], S = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = f, e[6] = h, e[7] = m, e[8] = g, e[9] = _, e[10] = w, e[11] = S, e[12] = o * l + s * a + g * r + t[12], e[13] = i * l + f * a + _ * r + t[13], e[14] = u * l + h * a + w * r + t[14], e[15] = c * l + m * a + S * r + t[15]), e;
}
function iu(e, t, n, l) {
  var a = l[0], r = l[1], o = l[2], i = Math.hypot(a, r, o), u, c, s, f, h, m, g, _, w, S, p, y, b, x, A, k, O, P, L, I, T, $, q, D;
  return i < ux ? null : (i = 1 / i, a *= i, r *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, f = t[0], h = t[1], m = t[2], g = t[3], _ = t[4], w = t[5], S = t[6], p = t[7], y = t[8], b = t[9], x = t[10], A = t[11], k = a * a * s + c, O = r * a * s + o * u, P = o * a * s - r * u, L = a * r * s - o * u, I = r * r * s + c, T = o * r * s + a * u, $ = a * o * s + r * u, q = r * o * s - a * u, D = o * o * s + c, e[0] = f * k + _ * O + y * P, e[1] = h * k + w * O + b * P, e[2] = m * k + S * O + x * P, e[3] = g * k + p * O + A * P, e[4] = f * L + _ * I + y * T, e[5] = h * L + w * I + b * T, e[6] = m * L + S * I + x * T, e[7] = g * L + p * I + A * T, e[8] = f * $ + _ * q + y * D, e[9] = h * $ + w * q + b * D, e[10] = m * $ + S * q + x * D, e[11] = g * $ + p * q + A * D, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function sx(e, t, n, l, a) {
  var r = 1 / Math.tan(t / 2), o;
  return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0 ? (o = 1 / (l - a), e[10] = (a + l) * o, e[14] = 2 * a * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var cx = sx;
const dx = /* @__PURE__ */ qa({ __name: "WebGL", setup(e) {
  const t = U();
  let n = null;
  const l = () => {
    if (n === null) throw new Error("no WebGL context");
    const _ = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, _);
    let w = [0, 0, 0];
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      w = w.concat([1 * Math.cos(O), 1 * Math.sin(O), 0]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      w = w.concat([1 * Math.cos(O), 1 * Math.sin(O), 0.4]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      w = w.concat([1.2 * Math.cos(O), 1.2 * Math.sin(O), 0.4]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      w = w.concat([1.2 * Math.cos(O), 1.2 * Math.sin(O), -1]);
    }
    n.bufferData(n.ARRAY_BUFFER, new Float32Array(w), n.STATIC_DRAW);
    let S = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let k = 0; k < 6; ++k) S = S.concat([1, 1, 1, 1]);
    for (let k = 0; k < 6; ++k) S = S.concat([1, 1, 1, 1]);
    for (let k = 0; k < 6; ++k) S = S.concat([0.75, 0.75, 0.75, 1]);
    for (let k = 0; k < 6; ++k) S = S.concat([0.5, 0.5, 0.5, 1]);
    const p = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, p), n.bufferData(n.ARRAY_BUFFER, new Float32Array(S), n.STATIC_DRAW);
    const y = n.createBuffer();
    let b = [0.5, 0.5];
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      b = b.concat([0.5 + 0.5 * Math.cos(O), 0.5 + 0.5 * Math.sin(O)]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      b = b.concat([0.5 + 0.4 * Math.cos(O), 0.5 + 0.4 * Math.sin(O)]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      b = b.concat([0.5 + 0.5 * Math.cos(O), 0.5 + 0.5 * Math.sin(O)]);
    }
    for (let k = 0; k < 6; ++k) {
      const O = 3.141 * k * 60 / 180;
      b = b.concat([0.5 + 0.5 * Math.cos(O + 1), 0.5 + 0.5 * Math.sin(O + 1)]);
    }
    n.bindBuffer(n.ARRAY_BUFFER, y), n.bufferData(n.ARRAY_BUFFER, new Float32Array(b), n.STATIC_DRAW);
    const x = n.createBuffer();
    let A = [];
    for (let k = 1; k < 7; ++k) A = A.concat([0, k, 1 + k % 6]);
    for (let k = 1; k < 7; ++k) A = A.concat([k, 1 + k % 6, k + 6]);
    for (let k = 1; k < 7; ++k) A = A.concat([6 + k, 7 + k % 6, k % 6 + 1]);
    for (let k = 1; k < 7; ++k) A = A.concat([6 + k, 7 + k % 6, 6 + k + 6]);
    for (let k = 1; k < 7; ++k) A = A.concat([12 + k, 13 + k % 6, 6 + k % 6 + 1]);
    for (let k = 1; k < 7; ++k) A = A.concat([12 + k, 13 + k % 6, 12 + k + 6]);
    for (let k = 1; k < 7; ++k) A = A.concat([18 + k, 19 + k % 6, 12 + k % 6 + 1]);
    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, x), n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(A), n.STATIC_DRAW), [_, p, y, x];
  }, a = (_, w) => {
    if (n === null || t.value === void 0) throw new Error("no WebGL context");
    n.clearColor(0, 0.5, 0.5, 1), n.clearDepth(1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const S = 45 * Math.PI / 180, p = t.value.clientWidth / t.value.clientHeight, y = 0.1, b = 100, x = Sf();
    cx(x, S, p, y, b);
    const A = Math.cos(w) * 1.767;
    xf(x, x, [Math.sin(A * 0.3) * 1, Math.cos(A * 0.4) * 1, Math.cos(0.6 * A) * 1]);
    const k = Sf();
    xf(k, k, [0, 0, -6]), iu(k, k, Math.sin(w) * 3.141 / 6 / 3, [0, 1, 0]), iu(k, k, Math.sin(w * 1.15) * 3.141 / 4 / 3, [1, 0, 0]), iu(k, k, Math.sin(w * 1.33) * 3.141 / 5 / 3, [1, 0, 0]), r(_), o(_), i(_), n.useProgram(_.prog), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, _.bufs.index), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(_.locs.sampler, 0), n.uniform1f(_.locs.time, w), n.uniformMatrix4fv(_.locs.proj, false, x), n.uniformMatrix4fv(_.locs.view, false, k), n.uniform1f(_.locs.mode, 0), n.bindTexture(n.TEXTURE_2D, f), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniform1f(_.locs.mode, 1), n.bindTexture(n.TEXTURE_2D, h), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6);
  }, r = (_) => {
    if (n === null) throw new Error("setPos - no ctx");
    const w = 3, S = n.FLOAT, p = false, y = 0, b = 0;
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.pos), n.vertexAttribPointer(_.attr.vertex_pos, w, S, p, y, b), n.enableVertexAttribArray(_.attr.vertex_pos);
  }, o = (_) => {
    if (n === null) throw new Error("setColor - no ctx");
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.color), n.vertexAttribPointer(_.attr.color_pos, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(_.attr.color_pos);
  }, i = (_) => {
    if (n === null) throw new Error("setTex crash");
    n.bindBuffer(n.ARRAY_BUFFER, _.bufs.tex), n.vertexAttribPointer(_.attr.tex_pos, 2, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(_.attr.tex_pos);
  }, u = () => {
    if (console.log(t.value), t.value === void 0 || (n = t.value.getContext("webgl2", {}), n === null)) return;
    const S = c(`
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

            // vec4 v = vec4(0.0, 0.0, 0.0, 0.0);

            // float d = sqrt(b[0] * b[0] + b[1] * b[1]) / 10.0;

            // v[1] += 1.0 * sin(d) - 0.5;
            // v[0] += 1.0 * cos(d) - 0.5;

            // b += v;

            gl_Position = uProjectionMatrix * uModelViewMatrix * b;

            // vec4 v = vec4(0.0, 0.0, 0.0, 0.0);

            // float px = aVertexPosition[0] / 1.0;
            // float py = aVertexPosition[1] / 1.0;

            // v[0] = 2.0 * sin(py / 1.0) - 1.0;

            // gl_Position += v;

            vColor = aVertexColor;
            vTextureCoord = aTextureCoord;

            fT = fTime;

            fKind = fMode;

            // iMode = 0;
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

            // lowp float f1 = float(int(fT * 100.0)) / 10.0;

            lowp float f1 = fT;

            if(fKind == 0.0) {
                t[0] += (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
                t[1] += (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            }

            // lowp float l = cos(exp(-fDist * 1000.0));

            gl_FragColor = texture2D(uSampler, t) * vColor;

            // gl_FragColor = vec4(l, l, l, 0.0);
        }
    `), p = l(), y = n.getUniformLocation(S, "uProjectionMatrix"), b = n.getUniformLocation(S, "uModelViewMatrix"), x = n.getUniformLocation(S, "uSampler"), A = n.getUniformLocation(S, "fTime"), k = n.getUniformLocation(S, "fMode");
    if (y === null) throw new Error("no proj loc");
    if (b === null) throw new Error("no view loc");
    if (x === null) throw new Error("no sampler loc");
    if (A === null) throw new Error("no time loc");
    if (k === null) throw new Error("no mode loc");
    const O = { prog: S, attr: { vertex_pos: n.getAttribLocation(S, "aVertexPosition"), color_pos: n.getAttribLocation(S, "aVertexColor"), tex_pos: n.getAttribLocation(S, "aTextureCoord") }, locs: { proj: y, view: b, sampler: x, time: A, mode: k }, bufs: { pos: p[0], color: p[1], tex: p[2], index: p[3] } };
    m(), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, true), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR);
    let P = 0, L = false;
    setInterval(() => {
      L ? (P -= 0.033, P < 0 && (P = 0, L = false)) : (P += 0.033, P > 7.5 && (P = 7.5, L = true)), a(O, P);
    }, 25);
  }, c = (_, w) => {
    if (n === null) throw new Error("no webgl");
    const S = s(n.VERTEX_SHADER, _), p = s(n.FRAGMENT_SHADER, w), y = n.createProgram();
    return n.attachShader(y, S), n.attachShader(y, p), n.linkProgram(y), y;
  }, s = (_, w) => {
    if (n === null) throw new Error("no webgl");
    const S = n.createShader(_);
    if (S === null) throw new Error("bad shader");
    return n.shaderSource(S, w), n.compileShader(S), S;
  };
  let f = null, h = null;
  const m = () => {
    if (n === null) throw new Error("loadTexture no context");
    f = n.createTexture(), n.bindTexture(n.TEXTURE_2D, f), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0])), h = n.createTexture(), n.bindTexture(n.TEXTURE_2D, h), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0]));
  }, g = (_, w) => {
    if (f === null || n === null) return;
    const S = w.target;
    _ === "base" && n.bindTexture(n.TEXTURE_2D, f), _ === "body" && n.bindTexture(n.TEXTURE_2D, h), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, S), n.generateMipmap(n.TEXTURE_2D);
  };
  return ft(u), (_, w) => (Yn(), qv(rn, null, [fa("canvas", { id: "canvas", ref_key: "canvas", ref: t }, null, 512), fa("img", { src: "img/tex.jpg", onLoad: w[0] || (w[0] = (S) => g("base", S)), style: { display: "none" } }, null, 32), fa("img", { src: "img/wood.jpg", onLoad: w[1] || (w[1] = (S) => g("body", S)), style: { display: "none" } }, null, 32)], 64));
} }), fx = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Qs = zv(Hw);
console.log(fx);
const vx = [{ name: "layout", path: "/", component: Uw, children: [{ name: "root", path: "", component: ix }, { name: "webgl", path: "webgl", component: dx }] }], mx = WS({ history: xS(), routes: vx });
Qs.use(mx);
Qs.use(zw, { plugins: { Dialog: xw, Dark: Nv, Loading: kw, Cookies: ww, Notify: Rw }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
pg({}).then(() => {
  Qs.mount("#q-app");
});
