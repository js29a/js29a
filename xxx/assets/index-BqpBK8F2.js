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
function Ku(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, ua = [], Fn = () => {
}, wg = () => false, Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wu = (e) => e.startsWith("onUpdate:"), It = Object.assign, Yu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sg = Object.prototype.hasOwnProperty, st = (e, t) => Sg.call(e, t), je = Array.isArray, Ga = (e) => kr(e) === "[object Map]", xg = (e) => kr(e) === "[object Set]", Cg = (e) => kr(e) === "[object RegExp]", Qe = (e) => typeof e == "function", $t = (e) => typeof e == "string", ka = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", Cf = (e) => (Et(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), kg = Object.prototype.toString, kr = (e) => kg.call(e), qg = (e) => kr(e).slice(8, -1), Tg = (e) => kr(e) === "[object Object]", Gu = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xa = /* @__PURE__ */ Ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), No = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mg = /-(\w)/g, bn = No((e) => e.replace(Mg, (t, n) => n ? n.toUpperCase() : "")), Eg = /\B([A-Z])/g, Ul = No((e) => e.replace(Eg, "-$1").toLowerCase()), Ho = No((e) => e.charAt(0).toUpperCase() + e.slice(1)), bi = No((e) => e ? `on${Ho(e)}` : ""), ml = (e, t) => !Object.is(e, t), Za = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, kf = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, Ag = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Rg = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zs;
const qr = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xu(e) {
  if (je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = $t(l) ? Bg(l) : Xu(l);
      if (a) for (const r in a) t[r] = a[r];
    }
    return t;
  } else if ($t(e) || Et(e)) return e;
}
const $g = /;(?![^(]*\))/g, Pg = /:([^]+)/, Lg = /\/\*[^]*?\*\//g;
function Bg(e) {
  const t = {};
  return e.replace(Lg, "").split($g).forEach((n) => {
    if (n) {
      const l = n.split(Pg);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function Zu(e) {
  let t = "";
  if ($t(e)) t = e;
  else if (je(e)) for (let n = 0; n < e.length; n++) {
    const l = Zu(e[n]);
    l && (t += l + " ");
  }
  else if (Et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Fg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Og = /* @__PURE__ */ Ku(Fg);
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
function Ig() {
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
    this.flags |= 2, Js(this), Af(this);
    const t = bt, n = qn;
    bt = this, qn = true;
    try {
      return this.fn();
    } finally {
      Rf(this), bt = t, qn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ts(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? yi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    su(this) && this.run();
  }
  get dirty() {
    return su(this);
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
function Ju() {
  Mf++;
}
function es() {
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
function Af(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rf(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), ts(l), zg(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function su(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && ($f(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function $f(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dr)) return;
  e.globalVersion = dr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !su(e)) {
    e.flags &= -3;
    return;
  }
  const n = bt, l = qn;
  bt = e, qn = true;
  try {
    Af(e);
    const a = e.fn(e._value);
    (t.version === 0 || ml(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, qn = l, Rf(e), e.flags &= -3;
  }
}
function ts(e, t = false) {
  const { dep: n, prevSub: l, nextSub: a } = e;
  if (l && (l.nextSub = a, e.prevSub = void 0), a && (a.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) ts(r, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zg(e) {
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
function Js(e) {
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
class ns {
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
    Ju();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      es();
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
const cu = /* @__PURE__ */ new WeakMap(), Fl = Symbol(""), du = Symbol(""), fr = Symbol("");
function Kt(e, t, n) {
  if (qn && bt) {
    let l = cu.get(e);
    l || cu.set(e, l = /* @__PURE__ */ new Map());
    let a = l.get(n);
    a || (l.set(n, a = new ns()), a.map = l, a.key = n), a.track();
  }
}
function Kn(e, t, n, l, a, r) {
  const o = cu.get(e);
  if (!o) {
    dr++;
    return;
  }
  const i = (u) => {
    u && u.trigger();
  };
  if (Ju(), t === "clear") o.forEach(i);
  else {
    const u = je(e), c = u && Gu(n);
    if (u && n === "length") {
      const s = Number(l);
      o.forEach((v, h) => {
        (h === "length" || h === fr || !ka(h) && h >= s) && i(v);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(fr)), t) {
      case "add":
        u ? c && i(o.get("length")) : (i(o.get(Fl)), Ga(e) && i(o.get(du)));
        break;
      case "delete":
        u || (i(o.get(Fl)), Ga(e) && i(o.get(du)));
        break;
      case "set":
        Ga(e) && i(o.get(Fl));
        break;
    }
  }
  es();
}
function Yl(e) {
  const t = Ye(e);
  return t === e ? t : (Kt(t, "iterate", fr), Tn(e) ? t : t.map(Gt));
}
function ls(e) {
  return Kt(e = Ye(e), "iterate", fr), e;
}
const Ng = { __proto__: null, [Symbol.iterator]() {
  return pi(this, Symbol.iterator, Gt);
}, concat(...e) {
  return Yl(this).concat(...e.map((t) => je(t) ? Yl(t) : t));
}, entries() {
  return pi(this, "entries", (e) => (e[1] = Gt(e[1]), e));
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
  return _i(this, "includes", e);
}, indexOf(...e) {
  return _i(this, "indexOf", e);
}, join(e) {
  return Yl(this).join(e);
}, lastIndexOf(...e) {
  return _i(this, "lastIndexOf", e);
}, map(e, t) {
  return zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return Pa(this, "pop");
}, push(...e) {
  return Pa(this, "push", e);
}, reduce(e, ...t) {
  return ec(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return ec(this, "reduceRight", e, t);
}, shift() {
  return Pa(this, "shift");
}, some(e, t) {
  return zn(this, "some", e, t, void 0, arguments);
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
  const l = ls(e), a = l[t]();
  return l !== e && !Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.value && (r.value = n(r.value)), r;
  }), a;
}
const Hg = Array.prototype;
function zn(e, t, n, l, a, r) {
  const o = ls(e), i = o !== e && !Tn(e), u = o[t];
  if (u !== Hg[t]) {
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
function ec(e, t, n, l) {
  const a = ls(e);
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
  return (a === -1 || a === false) && is(n[0]) ? (n[0] = Ye(n[0]), l[t](...n)) : a;
}
function Pa(e, t, n = []) {
  yl(), Ju();
  const l = Ye(e)[t].apply(e, n);
  return es(), pl(), l;
}
const jg = /* @__PURE__ */ Ku("__proto__,__v_isRef,__isVue"), Bf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ka));
function Ug(e) {
  ka(e) || (e = String(e));
  const t = Ye(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
}
class Ff {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !a;
    if (n === "__v_isReadonly") return a;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return l === (a ? r ? t0 : zf : r ? If : Vf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const o = je(t);
    if (!a) {
      let u;
      if (o && (u = Ng[n])) return u;
      if (n === "hasOwnProperty") return Ug;
    }
    const i = Reflect.get(t, n, pt(t) ? t : l);
    return (ka(n) ? Bf.has(n) : jg(n)) || (a || Kt(t, "get", n), r) ? i : pt(i) ? o && Gu(n) ? i : i.value : Et(i) ? a ? Df(i) : Bn(i) : i;
  }
}
class Of extends Ff {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, a) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Dl(r);
      if (!Tn(l) && !Dl(l) && (r = Ye(r), l = Ye(l)), !je(t) && pt(r) && !pt(l)) return u ? false : (r.value = l, true);
    }
    const o = je(t) && Gu(n) ? Number(n) < t.length : st(t, n), i = Reflect.set(t, n, l, pt(t) ? t : a);
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
    return Kt(t, "iterate", je(t) ? "length" : Fl), Reflect.ownKeys(t);
  }
}
class Qg extends Ff {
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
const Kg = new Of(), Wg = new Qg(), Yg = new Of(true);
const fu = (e) => e, Lr = (e) => Reflect.getPrototypeOf(e);
function Gg(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, r = Ye(a), o = Ga(r), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, c = a[e](...l), s = n ? fu : t ? vu : Gt;
    return !t && Kt(r, "iterate", u ? du : Fl), { next() {
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
function Xg(e, t) {
  const n = { get(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    e || (ml(a, i) && Kt(o, "get", a), Kt(o, "get", i));
    const { has: u } = Lr(o), c = t ? fu : e ? vu : Gt;
    if (u.call(o, a)) return c(r.get(a));
    if (u.call(o, i)) return c(r.get(i));
    r !== o && r.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Kt(Ye(a), "iterate", Fl), Reflect.get(a, "size", a);
  }, has(a) {
    const r = this.__v_raw, o = Ye(r), i = Ye(a);
    return e || (ml(a, i) && Kt(o, "has", a), Kt(o, "has", i)), a === i ? r.has(a) : r.has(a) || r.has(i);
  }, forEach(a, r) {
    const o = this, i = o.__v_raw, u = Ye(i), c = t ? fu : e ? vu : Gt;
    return !e && Kt(u, "iterate", Fl), i.forEach((s, v) => a.call(r, c(s), c(v), o));
  } };
  return It(n, e ? { add: Br("add"), set: Br("set"), delete: Br("delete"), clear: Br("clear") } : { add(a) {
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
function as(e, t) {
  const n = Xg(e, t);
  return (l, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(st(n, a) && a in l ? n : l, a, r);
}
const Zg = { get: as(false, false) }, Jg = { get: as(false, true) }, e0 = { get: as(true, false) };
const Vf = /* @__PURE__ */ new WeakMap(), If = /* @__PURE__ */ new WeakMap(), zf = /* @__PURE__ */ new WeakMap(), t0 = /* @__PURE__ */ new WeakMap();
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
  return Dl(e) ? e : os(e, false, Kg, Zg, Vf);
}
function rs(e) {
  return os(e, false, Yg, Jg, If);
}
function Df(e) {
  return os(e, true, Wg, e0, zf);
}
function os(e, t, n, l, a) {
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
function is(e) {
  return e ? !!e.__v_raw : false;
}
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? Ye(t) : e;
}
function jo(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && kf(e, "__v_skip", true), e;
}
const Gt = (e) => Et(e) ? Bn(e) : e, vu = (e) => Et(e) ? Df(e) : e;
function pt(e) {
  return e ? e.__v_isRef === true : false;
}
function Q(e) {
  return Nf(e, false);
}
function a0(e) {
  return Nf(e, true);
}
function Nf(e, t) {
  return pt(e) ? e : new r0(e, t);
}
class r0 {
  constructor(t, n) {
    this.dep = new ns(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ye(t), this._value = n ? t : Gt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || Tn(t) || Dl(t);
    t = l ? t : Ye(t), ml(t, n) && (this._rawValue = t, this._value = l ? t : Gt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return pt(e) ? e.value : e;
}
const o0 = { get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return pt(a) && !pt(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Hf(e) {
  return tr(e) ? e : new Proxy(e, o0);
}
class i0 {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ns(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Ef(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return $f(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function u0(e, t, n = false) {
  let l, a;
  return Qe(e) ? l = e : (l = e.get, a = e.set), new i0(l, a, n);
}
const Fr = {}, vo = /* @__PURE__ */ new WeakMap();
let Al;
function s0(e, t = false, n = Al) {
  if (n) {
    let l = vo.get(n);
    l || vo.set(n, l = []), l.push(e);
  }
}
function c0(e, t, n = mt) {
  const { immediate: l, deep: a, once: r, scheduler: o, augmentJob: i, call: u } = n, c = (b) => a ? b : Tn(b) || a === false || a === 0 ? Wn(b, 1) : Wn(b);
  let s, v, h, m, g = false, _ = false;
  if (pt(e) ? (v = () => e.value, g = Tn(e)) : tr(e) ? (v = () => c(e), g = true) : je(e) ? (_ = true, g = e.some((b) => tr(b) || Tn(b)), v = () => e.map((b) => {
    if (pt(b)) return b.value;
    if (tr(b)) return c(b);
    if (Qe(b)) return u ? u(b, 2) : b();
  })) : Qe(e) ? t ? v = u ? () => u(e, 2) : e : v = () => {
    if (h) {
      yl();
      try {
        h();
      } finally {
        pl();
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
    const b = v, x = a === true ? 1 / 0 : a;
    v = () => Wn(b(), x);
  }
  const w = Ig(), k = () => {
    s.stop(), w && w.active && Yu(w.effects, s);
  };
  if (r && t) {
    const b = t;
    t = (...x) => {
      b(...x), k();
    };
  }
  let p = _ ? new Array(e.length).fill(Fr) : Fr;
  const y = (b) => {
    if (!(!(s.flags & 1) || !s.dirty && !b)) if (t) {
      const x = s.run();
      if (a || g || (_ ? x.some((B, O) => ml(B, p[O])) : ml(x, p))) {
        h && h();
        const B = Al;
        Al = s;
        try {
          const O = [x, p === Fr ? void 0 : _ && p[0] === Fr ? [] : p, m];
          u ? u(t, 3, O) : t(...O), p = x;
        } finally {
          Al = B;
        }
      }
    } else s.run();
  };
  return i && i(y), s = new Tf(v), s.scheduler = o ? () => o(y, false) : y, m = (b) => s0(b, false, s), h = s.onStop = () => {
    const b = vo.get(s);
    if (b) {
      if (u) u(b, 4);
      else for (const x of b) x();
      vo.delete(s);
    }
  }, t ? l ? y(true) : p = s.run() : o ? o(y.bind(null, true), true) : s.run(), k.pause = s.pause.bind(s), k.resume = s.resume.bind(s), k.stop = k, k;
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
        for (let v = 0; v < s.length; v++) if (s[v](e, u, c) === false) return;
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
function Ge(e) {
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
function us(e) {
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
function tc(e, t, n = Pn + 1) {
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
    l._d && mc(-1);
    const r = ho(t);
    let o;
    try {
      o = e(...a);
    } finally {
      ho(r), l._d && mc(1);
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
const Yf = Symbol("_vte"), Gf = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), nc = (e) => e && (e.defer || e.defer === ""), lc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ac = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, mu = (e, t) => {
  const n = e && e.to;
  return $t(n) ? t ? t(n) : null : n;
}, Xf = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, r, o, i, u, c) {
  const { mc: s, pc: v, pbc: h, o: { insert: m, querySelector: g, createText: _, createComment: w } } = c, k = nr(t.props);
  let { shapeFlag: p, children: y, dynamicChildren: b } = t;
  if (e == null) {
    const x = t.el = _(""), B = t.anchor = _("");
    m(x, n, l), m(B, n, l);
    const O = (T, M) => {
      p & 16 && (a && a.isCE && (a.ce._teleportTarget = T), s(y, T, M, a, r, o, i, u));
    }, N = () => {
      const T = t.target = mu(t.props, g), M = Zf(T, t, _, m);
      T && (o !== "svg" && lc(T) ? o = "svg" : o !== "mathml" && ac(T) && (o = "mathml"), k || (O(T, M), to(t, false)));
    };
    k && (O(n, B), to(t, true)), nc(t.props) ? Bt(() => {
      N(), t.el.__isMounted = true;
    }, r) : N();
  } else {
    if (nc(t.props) && !e.el.__isMounted) {
      Bt(() => {
        Xf.process(e, t, n, l, a, r, o, i, u, c), delete e.el.__isMounted;
      }, r);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, B = t.target = e.target, O = t.targetAnchor = e.targetAnchor, N = nr(e.props), T = N ? n : B, M = N ? x : O;
    if (o === "svg" || lc(B) ? o = "svg" : (o === "mathml" || ac(B)) && (o = "mathml"), b ? (h(e.dynamicChildren, b, T, a, r, o, i), fs(e, t, true)) : u || v(e, t, T, M, a, r, o, i, false), k) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Or(t, n, x, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const L = t.target = mu(t.props, g);
      L && Or(t, L, null, c, 0);
    } else N && Or(t, B, O, c, 1);
    to(t, k);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, r) {
  const { shapeFlag: o, children: i, anchor: u, targetStart: c, targetAnchor: s, target: v, props: h } = e;
  if (v && (a(c), a(s)), r && a(u), o & 16) {
    const m = r || !nr(h);
    for (let g = 0; g < i.length; g++) {
      const _ = i[g];
      l(_, t, n, m, !!_.dynamicChildren);
    }
  }
}, move: Or, hydrate: m0 };
function Or(e, t, n, { o: { insert: l }, m: a }, r = 2) {
  r === 0 && l(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: c, props: s } = e, v = r === 2;
  if (v && l(o, t, n), (!v || nr(s)) && u & 16) for (let h = 0; h < c.length; h++) a(c[h], t, n, 2);
  v && l(i, t, n);
}
function m0(e, t, n, l, a, r, { o: { nextSibling: o, parentNode: i, querySelector: u, insert: c, createText: s } }, v) {
  const h = t.target = mu(t.props, u);
  if (h) {
    const m = nr(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16) if (m) t.anchor = v(o(e), t, i(e), n, l, a, r), t.targetStart = g, t.targetAnchor = g && o(g);
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
      t.targetAnchor || Zf(h, t, s, c), v(g && o(g), t, h, n, l, a, r);
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
    const a = t.default && ss(t.default(), true);
    if (!a || !a.length) return;
    const r = nv(a), o = Ye(e), { mode: i } = o;
    if (l.isLeaving) return wi(r);
    const u = rc(r);
    if (!u) return wi(r);
    let c = mr(u, o, l, n, (v) => c = v);
    u.type !== Zt && bl(u, c);
    let s = n.subTree && rc(n.subTree);
    if (s && s.type !== Zt && !fl(u, s) && tv(n).type !== Zt) {
      let v = mr(s, o, l, n);
      if (bl(s, v), i === "out-in" && u.type !== Zt) return l.isLeaving = true, v.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete v.afterLeave, s = void 0;
      }, wi(r);
      i === "in-out" && u.type !== Zt ? v.delayLeave = (h, m, g) => {
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
  const { appear: r, mode: o, persisted: i = false, onBeforeEnter: u, onEnter: c, onAfterEnter: s, onEnterCancelled: v, onBeforeLeave: h, onLeave: m, onAfterLeave: g, onLeaveCancelled: _, onBeforeAppear: w, onAppear: k, onAfterAppear: p, onAppearCancelled: y } = t, b = String(e.key), x = lv(n, e), B = (T, M) => {
    T && En(T, l, 9, M);
  }, O = (T, M) => {
    const L = M[1];
    B(T, M), je(T) ? T.every((q) => q.length <= 1) && L() : T.length <= 1 && L();
  }, N = { mode: o, persisted: i, beforeEnter(T) {
    let M = u;
    if (!n.isMounted) if (r) M = w || u;
    else return;
    T[sl] && T[sl](true);
    const L = x[b];
    L && fl(e, L) && L.el[sl] && L.el[sl](), B(M, [T]);
  }, enter(T) {
    let M = c, L = s, q = v;
    if (!n.isMounted) if (r) M = k || c, L = p || s, q = y || v;
    else return;
    let E = false;
    const C = T[Vr] = (D) => {
      E || (E = true, D ? B(q, [T]) : B(L, [T]), N.delayedLeave && N.delayedLeave(), T[Vr] = void 0);
    };
    M ? O(M, [T, C]) : C();
  }, leave(T, M) {
    const L = String(e.key);
    if (T[Vr] && T[Vr](true), n.isUnmounting) return M();
    B(h, [T]);
    let q = false;
    const E = T[sl] = (C) => {
      q || (q = true, M(), C ? B(_, [T]) : B(g, [T]), T[sl] = void 0, x[L] === e && delete x[L]);
    };
    x[L] = e, m ? O(m, [T, E]) : E();
  }, clone(T) {
    const M = mr(T, t, n, l, a);
    return a && a(M), M;
  } };
  return N;
}
function wi(e) {
  if (Qo(e)) return e = Gn(e), e.children = null, e;
}
function rc(e) {
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
function ss(e, t = false, n) {
  let l = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === rn ? (o.patchFlag & 128 && a++, l = l.concat(ss(o.children, t, i))) : (t || o.type !== Zt) && l.push(i != null ? Gn(o, { key: i }) : o);
  }
  if (a > 1) for (let r = 0; r < l.length; r++) l[r].patchFlag = -2;
  return l;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
  return Qe(e) ? It({ name: e.name }, t, { setup: e }) : e;
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
  const r = l.shapeFlag & 4 ? Jo(l.component) : l.el, o = a ? null : r, { i, r: u } = e, c = t && t.r, s = i.refs === mt ? i.refs = {} : i.refs, v = i.setupState, h = Ye(v), m = v === mt ? () => false : (g) => st(h, g);
  if (c != null && c !== u && ($t(c) ? (s[c] = null, m(c) && (v[c] = null)) : pt(c) && (c.value = null)), Qe(u)) Tr(u, i, 12, [o, s]);
  else {
    const g = $t(u), _ = pt(u);
    if (g || _) {
      const w = () => {
        if (e.f) {
          const k = g ? m(u) ? v[u] : s[u] : u.value;
          a ? je(k) && Yu(k, r) : je(k) ? k.includes(r) || k.push(r) : g ? (s[u] = [r], m(u) && (v[u] = s[u])) : (u.value = [r], e.k && (s[e.k] = u.value));
        } else g ? (s[u] = o, m(u) && (v[u] = o)) : _ && (u.value = o, e.k && (s[e.k] = o));
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
  const i = n.suspense, { renderer: { p: u, m: c, um: s, o: { createElement: v } } } = l, h = v("div");
  l.activate = (p, y, b, x, B) => {
    const O = p.component;
    c(p, y, b, 0, i), u(O.vnode, p, y, b, O, i, x, p.slotScopeIds, B), Bt(() => {
      O.isDeactivated = false, O.a && Za(O.a);
      const N = p.props && p.props.onVnodeMounted;
      N && vn(N, O.parent, p);
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
      const x = _u(y.type);
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
  const k = () => {
    w != null && (po(n.subTree.type) ? Bt(() => {
      a.set(w, Ir(n.subTree));
    }, n.subTree.suspense) : a.set(w, Ir(n.subTree)));
  };
  return ft(k), Yo(k), Ke(() => {
    a.forEach((p) => {
      const { subTree: y, suspense: b } = n, x = Ir(y);
      if (p.type === x.type && p.key === x.key) {
        Si(x);
        const B = x.component.da;
        B && Bt(B, b);
        return;
      }
      m(p);
    });
  }), () => {
    if (w = null, !t.default) return o = null;
    const p = t.default(), y = p[0];
    if (p.length > 1) return o = null, p;
    if (!gr(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return o = null, y;
    let b = Ir(y);
    if (b.type === Zt) return o = null, b;
    const x = b.type, B = _u(ca(b) ? b.type.__asyncResolved || {} : x), { include: O, exclude: N, max: T } = e;
    if (O && (!B || !ja(O, B)) || N && B && ja(N, B)) return b.shapeFlag &= -257, o = b, y;
    const M = b.key == null ? x : b.key, L = a.get(M);
    return b.el && (b = Gn(b), y.shapeFlag & 128 && (y.ssContent = b)), w = M, L ? (b.el = L.el, b.component = L.component, b.transition && bl(b, b.transition), b.shapeFlag |= 512, r.delete(M), r.add(M)) : (r.add(M), T && r.size > parseInt(T, 10) && _(r.values().next().value)), b.shapeFlag |= 256, o = b, po(y.type) ? y : b;
  };
} }, rv = y0;
function ja(e, t) {
  return je(e) ? e.some((n) => ja(n, t)) : $t(e) ? e.split(",").includes(t) : Cg(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function _l(e, t) {
  ov(e, "a", t);
}
function On(e, t) {
  ov(e, "da", t);
}
function ov(e, t, n = Ht) {
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
    Yu(l[t], a);
  }, n);
}
function Si(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ir(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ko(e, t, n = Ht, l = false) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      yl();
      const i = Mr(n), u = En(t, n, e, o);
      return i(), pl(), u;
    });
    return l ? a.unshift(r) : a.push(r), r;
  }
}
const Zn = (e) => (t, n = Ht) => {
  (!br || e === "sp") && Ko(e, (...l) => t(...l), n);
}, Wo = Zn("bm"), ft = Zn("m"), Ta = Zn("bu"), Yo = Zn("u"), Ke = Zn("bum"), Go = Zn("um"), _0 = Zn("sp"), w0 = Zn("rtg"), S0 = Zn("rtc");
function x0(e, t = Ht) {
  Ko("ec", e, t);
}
const iv = "components", C0 = "directives";
function cs(e, t) {
  return uv(iv, e, true, t) || e;
}
const k0 = Symbol.for("v-ndc");
function q0(e) {
  return uv(C0, e);
}
function uv(e, t, n = true, l = false) {
  const a = tn || Ht;
  if (a) {
    const r = a.type;
    if (e === iv) {
      const i = _u(r, false);
      if (i && (i === t || i === bn(t) || i === Ho(bn(t)))) return r;
    }
    const o = oc(a[e] || r[e], t) || oc(a.appContext[e], t);
    return !o && l ? r : o;
  }
}
function oc(e, t) {
  return e && (e[t] || e[bn(t)] || e[Ho(bn(t))]);
}
const hu = (e) => e ? Mv(e) ? Jo(e) : hu(e.parent) : null, lr = It(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => hu(e.parent), $root: (e) => hu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => cv(e), $forceUpdate: (e) => e.f || (e.f = () => {
  us(e.update);
}), $nextTick: (e) => e.n || (e.n = Ge.bind(e.proxy)), $watch: (e) => W0.bind(e) }), xi = (e, t) => e !== mt && !e.__isScriptSetup && st(e, t), T0 = { get({ _: e }, t) {
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
      gu && (o[t] = 0);
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
  return xi(a, t) ? (a[t] = n, true) : l !== mt && st(l, t) ? (l[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (r[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, propsOptions: r } }, o) {
  let i;
  return !!n[o] || e !== mt && st(e, o) || xi(t, o) || (i = r[0]) && st(i, o) || st(l, o) || st(lr, o) || st(a.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function ic(e) {
  return je(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let gu = true;
function M0(e) {
  const t = cv(e), n = e.proxy, l = e.ctx;
  gu = false, t.beforeCreate && uc(t.beforeCreate, e, "bc");
  const { data: a, computed: r, methods: o, watch: i, provide: u, inject: c, created: s, beforeMount: v, mounted: h, beforeUpdate: m, updated: g, activated: _, deactivated: w, beforeDestroy: k, beforeUnmount: p, destroyed: y, unmounted: b, render: x, renderTracked: B, renderTriggered: O, errorCaptured: N, serverPrefetch: T, expose: M, inheritAttrs: L, components: q, directives: E, filters: C } = t;
  if (c && E0(c, l, null), o) for (const $ in o) {
    const j = o[$];
    Qe(j) && (l[$] = j.bind(n));
  }
  if (a) {
    const $ = a.call(n, n);
    Et($) && (e.data = Bn($));
  }
  if (gu = true, r) for (const $ in r) {
    const j = r[$], te = Qe(j) ? j.bind(n, n) : Qe(j.get) ? j.get.bind(n, n) : Fn, ye = !Qe(j) && Qe(j.set) ? j.set.bind(n) : Fn, K = f({ get: te, set: ye });
    Object.defineProperty(l, $, { enumerable: true, configurable: true, get: () => K.value, set: (A) => K.value = A });
  }
  if (i) for (const $ in i) sv(i[$], l, n, $);
  if (u) {
    const $ = Qe(u) ? u.call(n) : u;
    Reflect.ownKeys($).forEach((j) => {
      hn(j, $[j]);
    });
  }
  s && uc(s, e, "c");
  function H($, j) {
    je(j) ? j.forEach((te) => $(te.bind(n))) : j && $(j.bind(n));
  }
  if (H(Wo, v), H(ft, h), H(Ta, m), H(Yo, g), H(_l, _), H(On, w), H(x0, N), H(S0, B), H(w0, O), H(Ke, p), H(Go, b), H(_0, T), je(M)) if (M.length) {
    const $ = e.exposed || (e.exposed = {});
    M.forEach((j) => {
      Object.defineProperty($, j, { get: () => n[j], set: (te) => n[j] = te });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === Fn && (e.render = x), L != null && (e.inheritAttrs = L), q && (e.components = q), E && (e.directives = E), T && av(e);
}
function E0(e, t, n = Fn) {
  je(e) && (e = bu(e));
  for (const l in e) {
    const a = e[l];
    let r;
    Et(a) ? "default" in a ? r = qt(a.from || l, a.default, true) : r = qt(a.from || l) : r = qt(a), pt(r) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => r.value, set: (o) => r.value = o }) : t[l] = r;
  }
}
function uc(e, t, n) {
  En(je(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function sv(e, t, n, l) {
  let a = l.includes(".") ? xv(n, l) : () => n[l];
  if ($t(e)) {
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
    const i = A0[o] || n && n[o];
    e[o] = i ? i(e[o], t[o]) : t[o];
  }
  return e;
}
const A0 = { data: sc, props: cc, emits: cc, methods: Ua, computed: Ua, beforeCreate: Yt, created: Yt, beforeMount: Yt, mounted: Yt, beforeUpdate: Yt, updated: Yt, beforeDestroy: Yt, beforeUnmount: Yt, destroyed: Yt, unmounted: Yt, activated: Yt, deactivated: Yt, errorCaptured: Yt, serverPrefetch: Yt, components: Ua, directives: Ua, watch: $0, provide: sc, inject: R0 };
function sc(e, t) {
  return t ? e ? function() {
    return It(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function R0(e, t) {
  return Ua(bu(e), bu(t));
}
function bu(e) {
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
  return e ? It(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function cc(e, t) {
  return e ? je(e) && je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : It(/* @__PURE__ */ Object.create(null), ic(e), ic(t ?? {})) : t;
}
function $0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = Yt(e[l], t[l]);
  return n;
}
function dv() {
  return { app: null, config: { isNativeTag: wg, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let P0 = 0;
function L0(e, t) {
  return function(l, a = null) {
    Qe(l) || (l = It({}, l)), a != null && !Et(a) && (a = null);
    const r = dv(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let u = false;
    const c = r.app = { _uid: P0++, _component: l, _props: a, _container: null, _context: r, _instance: null, version: hb, get config() {
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
        return m.appContext = r, h === true ? h = "svg" : h === false && (h = void 0), e(m, s, h), u = true, c._container = s, s.__vue_app__ = c, Jo(m.component);
      }
    }, onUnmount(s) {
      i.push(s);
    }, unmount() {
      u && (En(i, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(s, v) {
      return r.provides[s] = v, c;
    }, runWithContext(s) {
      const v = da;
      da = c;
      try {
        return s();
      } finally {
        da = v;
      }
    } };
    return c;
  };
}
let da = null;
function hn(e, t) {
  if (Ht) {
    let n = Ht.provides;
    const l = Ht.parent && Ht.parent.provides;
    l === n && (n = Ht.provides = Object.create(l)), n[e] = t;
  }
}
function qt(e, t, n = false) {
  const l = Ht || tn;
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
  n ? e.props = l ? a : rs(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function F0(e, t, n, l) {
  const { props: a, attrs: r, vnode: { patchFlag: o } } = e, i = Ye(a), [u] = e.propsOptions;
  let c = false;
  if ((l || o > 0) && !(o & 16)) {
    if (o & 8) {
      const s = e.vnode.dynamicProps;
      for (let v = 0; v < s.length; v++) {
        let h = s[v];
        if (Xo(e.emitsOptions, h)) continue;
        const m = t[h];
        if (u) if (st(r, h)) m !== r[h] && (r[h] = m, c = true);
        else {
          const g = bn(h);
          a[g] = yu(u, i, g, m, e, false);
        }
        else m !== r[h] && (r[h] = m, c = true);
      }
    }
  } else {
    hv(e, t, a, r) && (c = true);
    let s;
    for (const v in i) (!t || !st(t, v) && ((s = Ul(v)) === v || !st(t, s))) && (u ? n && (n[v] !== void 0 || n[s] !== void 0) && (a[v] = yu(u, i, v, void 0, e, true)) : delete a[v]);
    if (r !== i) for (const v in r) (!t || !st(t, v)) && (delete r[v], c = true);
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
      const v = r[s];
      n[v] = yu(a, u, v, c[v], e, !st(c, v));
    }
  }
  return o;
}
function yu(e, t, n, l, a, r) {
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
const O0 = /* @__PURE__ */ new WeakMap();
function gv(e, t, n = false) {
  const l = n ? O0 : t.propsCache, a = l.get(e);
  if (a) return a;
  const r = e.props, o = {}, i = [];
  let u = false;
  if (!Qe(e)) {
    const s = (v) => {
      u = true;
      const [h, m] = gv(v, t, true);
      It(o, h), m && i.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!r && !u) return Et(e) && l.set(e, ua), ua;
  if (je(r)) for (let s = 0; s < r.length; s++) {
    const v = bn(r[s]);
    dc(v) && (o[v] = mt);
  }
  else if (r) for (const s in r) {
    const v = bn(s);
    if (dc(v)) {
      const h = r[s], m = o[v] = je(h) || Qe(h) ? { type: h } : It({}, h), g = m.type;
      let _ = false, w = true;
      if (je(g)) for (let k = 0; k < g.length; ++k) {
        const p = g[k], y = Qe(p) && p.name;
        if (y === "Boolean") {
          _ = true;
          break;
        } else y === "String" && (w = false);
      }
      else _ = Qe(g) && g.name === "Boolean";
      m[0] = _, m[1] = w, (_ || st(m, "default")) && i.push(v);
    }
  }
  const c = [o, i];
  return Et(e) && l.set(e, c), c;
}
function dc(e) {
  return e[0] !== "$" && !Xa(e);
}
const bv = (e) => e[0] === "_" || e === "$stable", ds = (e) => je(e) ? e.map(Ln) : [Ln(e)], V0 = (e, t, n) => {
  if (t._n) return t;
  const l = Lt((...a) => ds(t(...a)), n);
  return l._c = false, l;
}, yv = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (bv(a)) continue;
    const r = e[a];
    if (Qe(r)) t[a] = V0(a, r, l);
    else if (r != null) {
      const o = ds(r);
      t[a] = () => o;
    }
  }
}, pv = (e, t) => {
  const n = ds(t);
  e.slots.default = () => n;
}, _v = (e, t, n) => {
  for (const l in t) (n || l !== "_") && (e[l] = t[l]);
}, I0 = (e, t, n) => {
  const l = e.slots = vv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (_v(l, t, n), n && kf(l, "_", a, true)) : yv(t, l);
  } else t && pv(e, t);
}, z0 = (e, t, n) => {
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
function N0(e) {
  return H0(e);
}
function H0(e, t) {
  D0();
  const n = qr();
  n.__VUE__ = true;
  const { insert: l, remove: a, patchProp: r, createElement: o, createText: i, createComment: u, setText: c, setElementText: s, parentNode: v, nextSibling: h, setScopeId: m = Fn, insertStaticContent: g } = e, _ = (S, R, z, Z = null, ne = null, W = null, de = void 0, me = null, fe = !!R.dynamicChildren) => {
    if (S === R) return;
    S && !fl(S, R) && (Z = P(S), A(S, ne, W, true), S = null), R.patchFlag === -2 && (fe = false, R.dynamicChildren = null);
    const { type: ce, ref: le, shapeFlag: U } = R;
    switch (ce) {
      case Zo:
        w(S, R, z, Z);
        break;
      case Zt:
        k(S, R, z, Z);
        break;
      case ki:
        S == null && p(R, z, Z, de);
        break;
      case rn:
        q(S, R, z, Z, ne, W, de, me, fe);
        break;
      default:
        U & 1 ? x(S, R, z, Z, ne, W, de, me, fe) : U & 6 ? E(S, R, z, Z, ne, W, de, me, fe) : (U & 64 || U & 128) && ce.process(S, R, z, Z, ne, W, de, me, fe, re);
    }
    le != null && ne && go(le, S && S.ref, W, R || S, !R);
  }, w = (S, R, z, Z) => {
    if (S == null) l(R.el = i(R.children), z, Z);
    else {
      const ne = R.el = S.el;
      R.children !== S.children && c(ne, R.children);
    }
  }, k = (S, R, z, Z) => {
    S == null ? l(R.el = u(R.children || ""), z, Z) : R.el = S.el;
  }, p = (S, R, z, Z) => {
    [S.el, S.anchor] = g(S.children, R, z, Z, S.el, S.anchor);
  }, y = ({ el: S, anchor: R }, z, Z) => {
    let ne;
    for (; S && S !== R; ) ne = h(S), l(S, z, Z), S = ne;
    l(R, z, Z);
  }, b = ({ el: S, anchor: R }) => {
    let z;
    for (; S && S !== R; ) z = h(S), a(S), S = z;
    a(R);
  }, x = (S, R, z, Z, ne, W, de, me, fe) => {
    R.type === "svg" ? de = "svg" : R.type === "math" && (de = "mathml"), S == null ? B(R, z, Z, ne, W, de, me, fe) : T(S, R, ne, W, de, me, fe);
  }, B = (S, R, z, Z, ne, W, de, me) => {
    let fe, ce;
    const { props: le, shapeFlag: U, transition: oe, dirs: _e } = S;
    if (fe = S.el = o(S.type, W, le && le.is, le), U & 8 ? s(fe, S.children) : U & 16 && N(S.children, fe, null, Z, ne, Ci(S, W), de, me), _e && xl(S, null, Z, "created"), O(fe, S, S.scopeId, de, Z), le) {
      for (const qe in le) qe !== "value" && !Xa(qe) && r(fe, qe, null, le[qe], W, Z);
      "value" in le && r(fe, "value", null, le.value, W), (ce = le.onVnodeBeforeMount) && vn(ce, Z, S);
    }
    _e && xl(S, null, Z, "beforeMount");
    const ke = j0(ne, oe);
    ke && oe.beforeEnter(fe), l(fe, R, z), ((ce = le && le.onVnodeMounted) || ke || _e) && Bt(() => {
      ce && vn(ce, Z, S), ke && oe.enter(fe), _e && xl(S, null, Z, "mounted");
    }, ne);
  }, O = (S, R, z, Z, ne) => {
    if (z && m(S, z), Z) for (let W = 0; W < Z.length; W++) m(S, Z[W]);
    if (ne) {
      let W = ne.subTree;
      if (R === W || po(W.type) && (W.ssContent === R || W.ssFallback === R)) {
        const de = ne.vnode;
        O(S, de, de.scopeId, de.slotScopeIds, ne.parent);
      }
    }
  }, N = (S, R, z, Z, ne, W, de, me, fe = 0) => {
    for (let ce = fe; ce < S.length; ce++) {
      const le = S[ce] = me ? cl(S[ce]) : Ln(S[ce]);
      _(null, le, R, z, Z, ne, W, de, me);
    }
  }, T = (S, R, z, Z, ne, W, de) => {
    const me = R.el = S.el;
    let { patchFlag: fe, dynamicChildren: ce, dirs: le } = R;
    fe |= S.patchFlag & 16;
    const U = S.props || mt, oe = R.props || mt;
    let _e;
    if (z && Cl(z, false), (_e = oe.onVnodeBeforeUpdate) && vn(_e, z, R, S), le && xl(R, S, z, "beforeUpdate"), z && Cl(z, true), (U.innerHTML && oe.innerHTML == null || U.textContent && oe.textContent == null) && s(me, ""), ce ? M(S.dynamicChildren, ce, me, z, Z, Ci(R, ne), W) : de || j(S, R, me, null, z, Z, Ci(R, ne), W, false), fe > 0) {
      if (fe & 16) L(me, U, oe, z, ne);
      else if (fe & 2 && U.class !== oe.class && r(me, "class", null, oe.class, ne), fe & 4 && r(me, "style", U.style, oe.style, ne), fe & 8) {
        const ke = R.dynamicProps;
        for (let qe = 0; qe < ke.length; qe++) {
          const Me = ke[qe], Ne = U[Me], Ve = oe[Me];
          (Ve !== Ne || Me === "value") && r(me, Me, Ne, Ve, ne, z);
        }
      }
      fe & 1 && S.children !== R.children && s(me, R.children);
    } else !de && ce == null && L(me, U, oe, z, ne);
    ((_e = oe.onVnodeUpdated) || le) && Bt(() => {
      _e && vn(_e, z, R, S), le && xl(R, S, z, "updated");
    }, Z);
  }, M = (S, R, z, Z, ne, W, de) => {
    for (let me = 0; me < R.length; me++) {
      const fe = S[me], ce = R[me], le = fe.el && (fe.type === rn || !fl(fe, ce) || fe.shapeFlag & 70) ? v(fe.el) : z;
      _(fe, ce, le, null, Z, ne, W, de, true);
    }
  }, L = (S, R, z, Z, ne) => {
    if (R !== z) {
      if (R !== mt) for (const W in R) !Xa(W) && !(W in z) && r(S, W, R[W], null, ne, Z);
      for (const W in z) {
        if (Xa(W)) continue;
        const de = z[W], me = R[W];
        de !== me && W !== "value" && r(S, W, me, de, ne, Z);
      }
      "value" in z && r(S, "value", R.value, z.value, ne);
    }
  }, q = (S, R, z, Z, ne, W, de, me, fe) => {
    const ce = R.el = S ? S.el : i(""), le = R.anchor = S ? S.anchor : i("");
    let { patchFlag: U, dynamicChildren: oe, slotScopeIds: _e } = R;
    _e && (me = me ? me.concat(_e) : _e), S == null ? (l(ce, z, Z), l(le, z, Z), N(R.children || [], z, le, ne, W, de, me, fe)) : U > 0 && U & 64 && oe && S.dynamicChildren ? (M(S.dynamicChildren, oe, z, ne, W, de, me), (R.key != null || ne && R === ne.subTree) && fs(S, R, true)) : j(S, R, z, le, ne, W, de, me, fe);
  }, E = (S, R, z, Z, ne, W, de, me, fe) => {
    R.slotScopeIds = me, S == null ? R.shapeFlag & 512 ? ne.ctx.activate(R, z, Z, de, fe) : C(R, z, Z, ne, W, de, fe) : D(S, R, fe);
  }, C = (S, R, z, Z, ne, W, de) => {
    const me = S.component = ub(S, Z, ne);
    if (Qo(S) && (me.ctx.renderer = re), sb(me, false, de), me.asyncDep) {
      if (ne && ne.registerDep(me, H, de), !S.el) {
        const fe = me.subTree = Je(Zt);
        k(null, fe, R, z);
      }
    } else H(me, S, R, z, ne, W, de);
  }, D = (S, R, z) => {
    const Z = R.component = S.component;
    if (J0(S, R, z)) if (Z.asyncDep && !Z.asyncResolved) {
      $(Z, R, z);
      return;
    } else Z.next = R, Z.update();
    else R.el = S.el, Z.vnode = R;
  }, H = (S, R, z, Z, ne, W, de) => {
    const me = () => {
      if (S.isMounted) {
        let { next: U, bu: oe, u: _e, parent: ke, vnode: qe } = S;
        {
          const be = wv(S);
          if (be) {
            U && (U.el = qe.el, $(S, U, de)), be.asyncDep.then(() => {
              S.isUnmounted || me();
            });
            return;
          }
        }
        let Me = U, Ne;
        Cl(S, false), U ? (U.el = qe.el, $(S, U, de)) : U = qe, oe && Za(oe), (Ne = U.props && U.props.onVnodeBeforeUpdate) && vn(Ne, ke, U, qe), Cl(S, true);
        const Ve = fc(S), ie = S.subTree;
        S.subTree = Ve, _(ie, Ve, v(ie.el), P(ie), S, ne, W), U.el = Ve.el, Me === null && eb(S, Ve.el), _e && Bt(_e, ne), (Ne = U.props && U.props.onVnodeUpdated) && Bt(() => vn(Ne, ke, U, qe), ne);
      } else {
        let U;
        const { el: oe, props: _e } = R, { bm: ke, m: qe, parent: Me, root: Ne, type: Ve } = S, ie = ca(R);
        Cl(S, false), ke && Za(ke), !ie && (U = _e && _e.onVnodeBeforeMount) && vn(U, Me, R), Cl(S, true);
        {
          Ne.ce && Ne.ce._injectChildStyle(Ve);
          const be = S.subTree = fc(S);
          _(null, be, z, Z, S, ne, W), R.el = be.el;
        }
        if (qe && Bt(qe, ne), !ie && (U = _e && _e.onVnodeMounted)) {
          const be = R;
          Bt(() => vn(U, Me, be), ne);
        }
        (R.shapeFlag & 256 || Me && ca(Me.vnode) && Me.vnode.shapeFlag & 256) && S.a && Bt(S.a, ne), S.isMounted = true, R = z = Z = null;
      }
    };
    S.scope.on();
    const fe = S.effect = new Tf(me);
    S.scope.off();
    const ce = S.update = fe.run.bind(fe), le = S.job = fe.runIfDirty.bind(fe);
    le.i = S, le.id = S.uid, fe.scheduler = () => us(le), Cl(S, true), ce();
  }, $ = (S, R, z) => {
    R.component = S;
    const Z = S.vnode.props;
    S.vnode = R, S.next = null, F0(S, R.props, Z, z), z0(S, R.children, z), yl(), tc(S), pl();
  }, j = (S, R, z, Z, ne, W, de, me, fe = false) => {
    const ce = S && S.children, le = S ? S.shapeFlag : 0, U = R.children, { patchFlag: oe, shapeFlag: _e } = R;
    if (oe > 0) {
      if (oe & 128) {
        ye(ce, U, z, Z, ne, W, de, me, fe);
        return;
      } else if (oe & 256) {
        te(ce, U, z, Z, ne, W, de, me, fe);
        return;
      }
    }
    _e & 8 ? (le & 16 && F(ce, ne, W), U !== ce && s(z, U)) : le & 16 ? _e & 16 ? ye(ce, U, z, Z, ne, W, de, me, fe) : F(ce, ne, W, true) : (le & 8 && s(z, ""), _e & 16 && N(U, z, Z, ne, W, de, me, fe));
  }, te = (S, R, z, Z, ne, W, de, me, fe) => {
    S = S || ua, R = R || ua;
    const ce = S.length, le = R.length, U = Math.min(ce, le);
    let oe;
    for (oe = 0; oe < U; oe++) {
      const _e = R[oe] = fe ? cl(R[oe]) : Ln(R[oe]);
      _(S[oe], _e, z, null, ne, W, de, me, fe);
    }
    ce > le ? F(S, ne, W, true, false, U) : N(R, z, Z, ne, W, de, me, fe, U);
  }, ye = (S, R, z, Z, ne, W, de, me, fe) => {
    let ce = 0;
    const le = R.length;
    let U = S.length - 1, oe = le - 1;
    for (; ce <= U && ce <= oe; ) {
      const _e = S[ce], ke = R[ce] = fe ? cl(R[ce]) : Ln(R[ce]);
      if (fl(_e, ke)) _(_e, ke, z, null, ne, W, de, me, fe);
      else break;
      ce++;
    }
    for (; ce <= U && ce <= oe; ) {
      const _e = S[U], ke = R[oe] = fe ? cl(R[oe]) : Ln(R[oe]);
      if (fl(_e, ke)) _(_e, ke, z, null, ne, W, de, me, fe);
      else break;
      U--, oe--;
    }
    if (ce > U) {
      if (ce <= oe) {
        const _e = oe + 1, ke = _e < le ? R[_e].el : Z;
        for (; ce <= oe; ) _(null, R[ce] = fe ? cl(R[ce]) : Ln(R[ce]), z, ke, ne, W, de, me, fe), ce++;
      }
    } else if (ce > oe) for (; ce <= U; ) A(S[ce], ne, W, true), ce++;
    else {
      const _e = ce, ke = ce, qe = /* @__PURE__ */ new Map();
      for (ce = ke; ce <= oe; ce++) {
        const Ce = R[ce] = fe ? cl(R[ce]) : Ln(R[ce]);
        Ce.key != null && qe.set(Ce.key, ce);
      }
      let Me, Ne = 0;
      const Ve = oe - ke + 1;
      let ie = false, be = 0;
      const ae = new Array(Ve);
      for (ce = 0; ce < Ve; ce++) ae[ce] = 0;
      for (ce = _e; ce <= U; ce++) {
        const Ce = S[ce];
        if (Ne >= Ve) {
          A(Ce, ne, W, true);
          continue;
        }
        let Oe;
        if (Ce.key != null) Oe = qe.get(Ce.key);
        else for (Me = ke; Me <= oe; Me++) if (ae[Me - ke] === 0 && fl(Ce, R[Me])) {
          Oe = Me;
          break;
        }
        Oe === void 0 ? A(Ce, ne, W, true) : (ae[Oe - ke] = ce + 1, Oe >= be ? be = Oe : ie = true, _(Ce, R[Oe], z, null, ne, W, de, me, fe), Ne++);
      }
      const pe = ie ? U0(ae) : ua;
      for (Me = pe.length - 1, ce = Ve - 1; ce >= 0; ce--) {
        const Ce = ke + ce, Oe = R[Ce], Ae = Ce + 1 < le ? R[Ce + 1].el : Z;
        ae[ce] === 0 ? _(null, Oe, z, Ae, ne, W, de, me, fe) : ie && (Me < 0 || ce !== pe[Me] ? K(Oe, z, Ae, 2) : Me--);
      }
    }
  }, K = (S, R, z, Z, ne = null) => {
    const { el: W, type: de, transition: me, children: fe, shapeFlag: ce } = S;
    if (ce & 6) {
      K(S.component.subTree, R, z, Z);
      return;
    }
    if (ce & 128) {
      S.suspense.move(R, z, Z);
      return;
    }
    if (ce & 64) {
      de.move(S, R, z, re);
      return;
    }
    if (de === rn) {
      l(W, R, z);
      for (let U = 0; U < fe.length; U++) K(fe[U], R, z, Z);
      l(S.anchor, R, z);
      return;
    }
    if (de === ki) {
      y(S, R, z);
      return;
    }
    if (Z !== 2 && ce & 1 && me) if (Z === 0) me.beforeEnter(W), l(W, R, z), Bt(() => me.enter(W), ne);
    else {
      const { leave: U, delayLeave: oe, afterLeave: _e } = me, ke = () => l(W, R, z), qe = () => {
        U(W, () => {
          ke(), _e && _e();
        });
      };
      oe ? oe(W, ke, qe) : qe();
    }
    else l(W, R, z);
  }, A = (S, R, z, Z = false, ne = false) => {
    const { type: W, props: de, ref: me, children: fe, dynamicChildren: ce, shapeFlag: le, patchFlag: U, dirs: oe, cacheIndex: _e } = S;
    if (U === -2 && (ne = false), me != null && go(me, null, z, S, true), _e != null && (R.renderCache[_e] = void 0), le & 256) {
      R.ctx.deactivate(S);
      return;
    }
    const ke = le & 1 && oe, qe = !ca(S);
    let Me;
    if (qe && (Me = de && de.onVnodeBeforeUnmount) && vn(Me, R, S), le & 6) ge(S.component, z, Z);
    else {
      if (le & 128) {
        S.suspense.unmount(z, Z);
        return;
      }
      ke && xl(S, null, R, "beforeUnmount"), le & 64 ? S.type.remove(S, R, z, re, Z) : ce && !ce.hasOnce && (W !== rn || U > 0 && U & 64) ? F(ce, R, z, false, true) : (W === rn && U & 384 || !ne && le & 16) && F(fe, R, z), Z && J(S);
    }
    (qe && (Me = de && de.onVnodeUnmounted) || ke) && Bt(() => {
      Me && vn(Me, R, S), ke && xl(S, null, R, "unmounted");
    }, z);
  }, J = (S) => {
    const { type: R, el: z, anchor: Z, transition: ne } = S;
    if (R === rn) {
      X(z, Z);
      return;
    }
    if (R === ki) {
      b(S);
      return;
    }
    const W = () => {
      a(z), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (S.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: de, delayLeave: me } = ne, fe = () => de(z, W);
      me ? me(S.el, W, fe) : fe();
    } else W();
  }, X = (S, R) => {
    let z;
    for (; S !== R; ) z = h(S), a(S), S = z;
    a(R);
  }, ge = (S, R, z) => {
    const { bum: Z, scope: ne, job: W, subTree: de, um: me, m: fe, a: ce } = S;
    yo(fe), yo(ce), Z && Za(Z), ne.stop(), W && (W.flags |= 8, A(de, S, R, z)), me && Bt(me, R), Bt(() => {
      S.isUnmounted = true;
    }, R), R && R.pendingBranch && !R.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === R.pendingId && (R.deps--, R.deps === 0 && R.resolve());
  }, F = (S, R, z, Z = false, ne = false, W = 0) => {
    for (let de = W; de < S.length; de++) A(S[de], R, z, Z, ne);
  }, P = (S) => {
    if (S.shapeFlag & 6) return P(S.component.subTree);
    if (S.shapeFlag & 128) return S.suspense.next();
    const R = h(S.anchor || S.el), z = R && R[Yf];
    return z ? h(z) : R;
  };
  let ee = false;
  const V = (S, R, z) => {
    S == null ? R._vnode && A(R._vnode, null, null, true) : _(R._vnode || null, S, R, null, null, null, z), R._vnode = S, ee || (ee = true, tc(), Qf(), ee = false);
  }, re = { p: _, um: A, m: K, r: J, mt: C, mc: N, pc: j, pbc: M, n: P, o: e };
  return { render: V, hydrate: void 0, createApp: L0(V) };
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
function fs(e, t, n = false) {
  const l = e.children, a = t.children;
  if (je(l) && je(a)) for (let r = 0; r < l.length; r++) {
    const o = l[r];
    let i = a[r];
    i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = a[r] = cl(a[r]), i.el = o.el), !n && i.patchFlag !== -2 && fs(o, i)), i.type === Zo && (i.el = o.el);
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
  const { immediate: l, deep: a, flush: r, once: o } = n, i = It({}, n), u = t && l || !t && r !== "post";
  let c;
  if (br) {
    if (r === "sync") {
      const m = K0();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {
      };
      return m.stop = Fn, m.resume = Fn, m.pause = Fn, m;
    }
  }
  const s = Ht;
  i.call = (m, g, _) => En(m, s, g, _);
  let v = false;
  r === "post" ? i.scheduler = (m) => {
    Bt(m, s && s.suspense);
  } : r !== "sync" && (v = true, i.scheduler = (m, g) => {
    g ? m() : us(m);
  }), i.augmentJob = (m) => {
    t && (m.flags |= 4), v && (m.flags |= 2, s && (m.id = s.uid, m.i = s));
  };
  const h = c0(e, t, i);
  return br && (c ? c.push(h) : u && h()), h;
}
function W0(e, t, n) {
  const l = this.proxy, a = $t(e) ? e.includes(".") ? xv(l, e) : () => l[e] : e.bind(l, l);
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
  o && (o.trim && (a = n.map((s) => $t(s) ? s.trim() : s)), o.number && (a = n.map(Ag)));
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
      s && (i = true, It(o, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !i ? (Et(e) && l.set(e, null), null) : (je(r) ? r.forEach((u) => o[u] = null) : It(o, r), Et(e) && l.set(e, o), o);
}
function Xo(e, t) {
  return !e || !Do(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, Ul(t)) || st(e, t));
}
function fc(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [r], slots: o, attrs: i, emit: u, render: c, renderCache: s, props: v, data: h, setupState: m, ctx: g, inheritAttrs: _ } = e, w = ho(e);
  let k, p;
  try {
    if (n.shapeFlag & 4) {
      const b = a || l, x = b;
      k = Ln(c.call(x, b, s, v, m, h, g)), p = i;
    } else {
      const b = t;
      k = Ln(b.length > 1 ? b(v, { attrs: i, slots: o, emit: u }) : b(v, null)), p = t.props ? i : X0(i);
    }
  } catch (b) {
    ar.length = 0, Uo(b, e, 1), k = Je(Zt);
  }
  let y = k;
  if (p && _ !== false) {
    const b = Object.keys(p), { shapeFlag: x } = y;
    b.length && x & 7 && (r && b.some(Wu) && (p = Z0(p, r)), y = Gn(y, p, false, true));
  }
  return n.dirs && (y = Gn(y, null, false, true), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && bl(y, n.transition), k = y, ho(w), k;
}
const X0 = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Z0 = (e, t) => {
  const n = {};
  for (const l in e) (!Wu(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function J0(e, t, n) {
  const { props: l, children: a, component: r } = e, { props: o, children: i, patchFlag: u } = t, c = r.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && u >= 0) {
    if (u & 1024) return true;
    if (u & 16) return l ? vc(l, o, c) : !!o;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let v = 0; v < s.length; v++) {
        const h = s[v];
        if (o[h] !== l[h] && !Xo(c, h)) return true;
      }
    }
  } else return (a || i) && (!i || !i.$stable) ? true : l === o ? false : l ? o ? vc(l, o, c) : true : !!o;
  return false;
}
function vc(e, t, n) {
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
function mc(e, t = false) {
  hr += e, e < 0 && un && t && (un.hasOnce = true);
}
function kv(e) {
  return e.dynamicChildren = hr > 0 ? un || ua : null, nb(), hr > 0 && un && un.push(e), e;
}
function qv(e, t, n, l, a, r) {
  return kv(fa(e, t, n, l, a, r, true));
}
function $l(e, t, n, l, a) {
  return kv(Je(e, t, n, l, a, true));
}
function gr(e) {
  return e ? e.__v_isVNode === true : false;
}
function fl(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Tv = ({ key: e }) => e ?? null, no = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || pt(e) || Qe(e) ? { i: tn, r: e, k: t, f: !!n } : e : null);
function fa(e, t = null, n = null, l = 0, a = null, r = e === rn ? 0 : 1, o = false, i = false) {
  const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Tv(t), ref: t && no(t), scopeId: Wf, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: tn };
  return i ? (vs(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= $t(n) ? 8 : 16), hr > 0 && !o && un && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && un.push(u), u;
}
const Je = lb;
function lb(e, t = null, n = null, l = 0, a = null, r = false) {
  if ((!e || e === k0) && (e = Zt), gr(e)) {
    const i = Gn(e, t, true);
    return n && vs(i, n), hr > 0 && !r && un && (i.shapeFlag & 6 ? un[un.indexOf(e)] = i : un.push(i)), i.patchFlag = -2, i;
  }
  if (mb(e) && (e = e.__vccOpts), t) {
    t = ab(t);
    let { class: i, style: u } = t;
    i && !$t(i) && (t.class = Zu(i)), Et(u) && (is(u) && !je(u) && (u = It({}, u)), t.style = Xu(u));
  }
  const o = $t(e) ? 1 : po(e) ? 128 : Gf(e) ? 64 : Et(e) ? 4 : Qe(e) ? 2 : 0;
  return fa(e, t, n, l, a, o, r, true);
}
function ab(e) {
  return e ? is(e) || mv(e) ? It({}, e) : e : null;
}
function Gn(e, t, n = false, l = false) {
  const { props: a, ref: r, patchFlag: o, children: i, transition: u } = e, c = t ? rb(a || {}, t) : a, s = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Tv(c), ref: t && t.ref ? n && r ? je(r) ? r.concat(no(t)) : [r, no(t)] : no(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== rn ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Gn(e.ssContent), ssFallback: e.ssFallback && Gn(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u && l && bl(s, u.clone(s)), s;
}
function oa(e = " ", t = 0) {
  return Je(Zo, null, e, t);
}
function hc(e = "", t = false) {
  return t ? (Yn(), $l(Zt, null, e)) : Je(Zt, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Je(Zt) : je(e) ? Je(rn, null, e.slice()) : gr(e) ? cl(e) : Je(Zo, null, String(e));
}
function cl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function vs(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (je(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const a = t.default;
    a && (a._c && (a._d = false), vs(e, a()), a._c && (a._d = true));
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
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = Zu([t.class, l.class]));
    else if (a === "style") t.style = Xu([t.style, l.style]);
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
let Ht = null;
const Se = () => Ht || tn;
let _o, pu;
{
  const e = qr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  _o = t("__VUE_INSTANCE_SETTERS__", (n) => Ht = n), pu = t("__VUE_SSR_SETTERS__", (n) => br = n);
}
const Mr = (e) => {
  const t = Ht;
  return _o(e), e.scope.on(), () => {
    e.scope.off(), _o(t);
  };
}, gc = () => {
  Ht && Ht.scope.off(), _o(null);
};
function Mv(e) {
  return e.vnode.shapeFlag & 4;
}
let br = false;
function sb(e, t = false, n = false) {
  t && pu(t);
  const { props: l, children: a } = e.vnode, r = Mv(e);
  B0(e, l, r, t), I0(e, a, n);
  const o = r ? db(e, t) : void 0;
  return t && pu(false), o;
}
function db(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, T0);
  const { setup: l } = n;
  if (l) {
    yl();
    const a = e.setupContext = l.length > 1 ? vb(e) : null, r = Mr(e), o = Tr(l, e, 0, [e.props, a]), i = Cf(o);
    if (pl(), r(), (i || e.sp) && !ca(e) && av(e), i) {
      if (o.then(gc, gc), t) return o.then((u) => {
        bc(e, u);
      }).catch((u) => {
        Uo(u, e, 0);
      });
      e.asyncDep = o;
    } else bc(e, o);
  } else Ev(e);
}
function bc(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = Hf(t)), Ev(e);
}
function Ev(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || Fn);
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hf(jo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in lr) return lr[n](e);
  }, has(t, n) {
    return n in t || n in lr;
  } })) : e.proxy;
}
function _u(e, t = true) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mb(e) {
  return Qe(e) && "__vccOpts" in e;
}
const f = (e, t) => u0(e, t, br);
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
let wu;
const yc = typeof window < "u" && window.trustedTypes;
if (yc) try {
  wu = yc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Av = wu ? (e) => wu.createHTML(e) : (e) => e, gb = "http://www.w3.org/2000/svg", bb = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, pc = Qn && Qn.createElement("template"), yb = { insert: (e, t, n) => {
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
    pc.innerHTML = Av(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const i = pc.content;
    if (l === "svg" || l === "mathml") {
      const u = i.firstChild;
      for (; u.firstChild; ) i.appendChild(u.firstChild);
      i.removeChild(u);
    }
    t.insertBefore(i, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, nl = "transition", La = "animation", pa = Symbol("_vtc"), Rv = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, $v = It({}, ev, Rv), pb = (e) => (e.displayName = "Transition", e.props = $v, e), Ft = pb((e, { slots: t }) => d(b0, Pv(e), t)), kl = (e, t = []) => {
  je(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _c = (e) => e ? je(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Pv(e) {
  const t = {};
  for (const q in e) q in Rv || (t[q] = e[q]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: u = r, appearActiveClass: c = o, appearToClass: s = i, leaveFromClass: v = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = _b(a), _ = g && g[0], w = g && g[1], { onBeforeEnter: k, onEnter: p, onEnterCancelled: y, onLeave: b, onLeaveCancelled: x, onBeforeAppear: B = k, onAppear: O = p, onAppearCancelled: N = y } = t, T = (q, E, C, D) => {
    q._enterCancelled = D, ol(q, E ? s : i), ol(q, E ? c : o), C && C();
  }, M = (q, E) => {
    q._isLeaving = false, ol(q, v), ol(q, m), ol(q, h), E && E();
  }, L = (q) => (E, C) => {
    const D = q ? O : p, H = () => T(E, q, C);
    kl(D, [E, H]), wc(() => {
      ol(E, q ? u : r), $n(E, q ? s : i), _c(D) || Sc(E, l, _, H);
    });
  };
  return It(t, { onBeforeEnter(q) {
    kl(k, [q]), $n(q, r), $n(q, o);
  }, onBeforeAppear(q) {
    kl(B, [q]), $n(q, u), $n(q, c);
  }, onEnter: L(false), onAppear: L(true), onLeave(q, E) {
    q._isLeaving = true;
    const C = () => M(q, E);
    $n(q, v), q._enterCancelled ? ($n(q, h), Su()) : (Su(), $n(q, h)), wc(() => {
      q._isLeaving && (ol(q, v), $n(q, m), _c(b) || Sc(q, l, w, C));
    }), kl(b, [q, C]);
  }, onEnterCancelled(q) {
    T(q, false, void 0, true), kl(y, [q]);
  }, onAppearCancelled(q) {
    T(q, true, void 0, true), kl(N, [q]);
  }, onLeaveCancelled(q) {
    M(q), kl(x, [q]);
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
  return Rg(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[pa] || (e[pa] = /* @__PURE__ */ new Set())).add(t);
}
function ol(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[pa];
  n && (n.delete(t), n.size || (e[pa] = void 0));
}
function wc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wb = 0;
function Sc(e, t, n, l) {
  const a = e._endId = ++wb, r = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: i, propCount: u } = Lv(e, t);
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
function Lv(e, t) {
  const n = window.getComputedStyle(e), l = (g) => (n[g] || "").split(", "), a = l(`${nl}Delay`), r = l(`${nl}Duration`), o = xc(a, r), i = l(`${La}Delay`), u = l(`${La}Duration`), c = xc(i, u);
  let s = null, v = 0, h = 0;
  t === nl ? o > 0 && (s = nl, v = o, h = r.length) : t === La ? c > 0 && (s = La, v = c, h = u.length) : (v = Math.max(o, c), s = v > 0 ? o > c ? nl : La : null, h = s ? s === nl ? r.length : u.length : 0);
  const m = s === nl && /\b(transform|all)(,|$)/.test(l(`${nl}Property`).toString());
  return { type: s, timeout: v, propCount: h, hasTransform: m };
}
function xc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => Cc(n) + Cc(e[l])));
}
function Cc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Su() {
  return document.body.offsetHeight;
}
function Sb(e, t, n) {
  const l = e[pa];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wo = Symbol("_vod"), Bv = Symbol("_vsh"), Fv = { beforeMount(e, { value: t }, { transition: n }) {
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
  const l = e.style, a = $t(n);
  let r = false;
  if (n && !a) {
    if (t) if ($t(t)) for (const o of t.split(";")) {
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
const kc = /\s*!important$/;
function lo(e, t, n) {
  if (je(n)) n.forEach((l) => lo(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = qb(e, t);
    kc.test(n) ? e.setProperty(Ul(l), n.replace(kc, ""), "important") : e[l] = n;
  }
}
const qc = ["Webkit", "Moz", "ms"], Ti = {};
function qb(e, t) {
  const n = Ti[t];
  if (n) return n;
  let l = bn(t);
  if (l !== "filter" && l in e) return Ti[t] = l;
  l = Ho(l);
  for (let a = 0; a < qc.length; a++) {
    const r = qc[a] + l;
    if (r in e) return Ti[t] = r;
  }
  return t;
}
const Tc = "http://www.w3.org/1999/xlink";
function Mc(e, t, n, l, a, r = Og(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Tc, t.slice(6, t.length)) : e.setAttributeNS(Tc, t, n) : n == null || r && !qf(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : ka(n) ? String(n) : n);
}
function Ec(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Av(n) : n);
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
const Ac = Symbol("_vei");
function Eb(e, t, n, l, a = null) {
  const r = e[Ac] || (e[Ac] = {}), o = r[t];
  if (l && o) o.value = l;
  else {
    const [i, u] = Ab(t);
    if (l) {
      const c = r[t] = Pb(l, a);
      Tb(e, i, c, u);
    } else o && (Mb(e, i, o, u), r[t] = void 0);
  }
}
const Rc = /(?:Once|Passive|Capture)$/;
function Ab(e) {
  let t;
  if (Rc.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Rc); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Ul(e.slice(2)), t];
}
let Mi = 0;
const Rb = Promise.resolve(), $b = () => Mi || (Rb.then(() => Mi = 0), Mi = Date.now());
function Pb(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    En(Lb(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = $b(), n;
}
function Lb(e, t) {
  if (je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const $c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bb = (e, t, n, l, a, r) => {
  const o = a === "svg";
  t === "class" ? Sb(e, l, o) : t === "style" ? kb(e, n, l) : Do(t) ? Wu(t) || Eb(e, t, n, l, r) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Fb(e, t, l, o)) ? (Ec(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mc(e, t, l, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !$t(l)) ? Ec(e, bn(t), l, r, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Mc(e, t, l, o));
};
function Fb(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && $c(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return $c(t) && $t(n) ? false : t in e;
}
const Ov = /* @__PURE__ */ new WeakMap(), Vv = /* @__PURE__ */ new WeakMap(), So = Symbol("_moveCb"), Pc = Symbol("_enterCb"), Ob = (e) => (delete e.props.mode, e), Vb = Ob({ name: "TransitionGroup", props: It({}, $v, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Se(), l = Jf();
  let a, r;
  return Yo(() => {
    if (!a.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Hb(a[0].el, n.vnode.el, o)) return;
    a.forEach(zb), a.forEach(Db);
    const i = a.filter(Nb);
    Su(), i.forEach((u) => {
      const c = u.el, s = c.style;
      $n(c, o), s.transform = s.webkitTransform = s.transitionDuration = "";
      const v = c[So] = (h) => {
        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", v), c[So] = null, ol(c, o));
      };
      c.addEventListener("transitionend", v);
    });
  }), () => {
    const o = Ye(e), i = Pv(o);
    let u = o.tag || rn;
    if (a = [], r) for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.el && s.el instanceof Element && (a.push(s), bl(s, mr(s, i, l, n)), Ov.set(s, s.el.getBoundingClientRect()));
    }
    r = t.default ? ss(t.default()) : [];
    for (let c = 0; c < r.length; c++) {
      const s = r[c];
      s.key != null && bl(s, mr(s, i, l, n));
    }
    return Je(u, null, r);
  };
} }), Ib = Vb;
function zb(e) {
  const t = e.el;
  t[So] && t[So](), t[Pc] && t[Pc]();
}
function Db(e) {
  Vv.set(e, e.el.getBoundingClientRect());
}
function Nb(e) {
  const t = Ov.get(e), n = Vv.get(e), l = t.left - n.left, a = t.top - n.top;
  if (l || a) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${l}px,${a}px)`, r.transitionDuration = "0s", e;
  }
}
function Hb(e, t, n) {
  const l = e.cloneNode(), a = e[pa];
  a && a.forEach((i) => {
    i.split(/\s+/).forEach((u) => u && l.classList.remove(u));
  }), n.split(/\s+/).forEach((i) => i && l.classList.add(i)), l.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(l);
  const { hasTransform: o } = Lv(l);
  return r.removeChild(l), o;
}
const jb = It({ patchProp: Bb }, yb);
let Lc;
function Ub() {
  return Lc || (Lc = N0(jb));
}
const Iv = (...e) => {
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
  return $t(e) ? document.querySelector(e) : e;
}
/*!
* Quasar Framework v2.18.1
* (c) 2015-present Razvan Stoenescu
* Released under the MIT License.
*/
var Ei = null;
function ms() {
  return Ei !== null ? Ei : Ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
typeof __QUASAR_SSR__ != "boolean" && (ms().__QUASAR_SSR__ = false);
typeof __QUASAR_SSR_CLIENT__ != "boolean" && (ms().__QUASAR_SSR_CLIENT__ = false);
typeof __QUASAR_SSR_PWA__ != "boolean" && (ms().__QUASAR_SSR_PWA__ = false);
function Ot(e, t, n, l) {
  return Object.defineProperty(e, t, { get: n, set: l, enumerable: true }), e;
}
function zv(e, t) {
  for (const n in t) Ot(e, n, t[n]);
  return e;
}
var nn = Q(__QUASAR_SSR_CLIENT__ && (__QUASAR_SSR_PWA__ ? document.body.getAttribute("data-server-rendered") !== null : true)), xu;
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
    if (window.Capacitor !== void 0 ? (a.capacitor = true, a.nativeMobile = true, a.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (a.cordova = true, a.nativeMobile = true, a.nativeMobileWrapper = "cordova"), nn.value === true && (xu = { is: { ...a } }), Dv === true && a.mac === true && (a.desktop === true && a.safari === true || a.nativeMobile === true && a.android !== true && a.ios !== true && a.ipad !== true)) {
      delete a.mac, delete a.desktop;
      const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(a, { mobile: true, ios: true, platform: o, [o]: true });
    }
    a.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete a.desktop, a.mobile = true);
  }
  return a;
}
var Bc = navigator.userAgent || navigator.vendor || window.opera, Xb = { has: { touch: false, webStorage: false }, within: { iframe: false } }, ze = { userAgent: Bc, is: Gb(Bc), has: { touch: Dv }, within: { iframe: window.self !== window.top } }, Cu = { install(e) {
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
  }), Object.assign(Cu, ze), nn.value === true && (Object.assign(Cu, xu, Xb), xu = null);
}
var Nv = Cu;
function ve(e) {
  return jo(/* @__PURE__ */ qa(e));
}
function Rn(e) {
  return jo(e);
}
var wl = (e, t) => {
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
function He(e) {
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
var Ai = ["sm", "md", "lg", "xl"], { passive: Fc } = dt, Jb = wl({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: St, setDebounce: St, install({ $q: e, onSSRHydrated: t }) {
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
    Ai.forEach((h) => {
      v[h] !== void 0 && (u[h] = v[h]);
    });
  }, this.setDebounce = (v) => {
    c = v;
  };
  const s = () => {
    const v = getComputedStyle(document.body);
    v.getPropertyValue("--q-size-sm") && Ai.forEach((h) => {
      this.sizes[h] = parseInt(v.getPropertyValue(`--q-size-${h}`), 10);
    }), this.setSizes = (h) => {
      Ai.forEach((m) => {
        h[m] && (this.sizes[m] = h[m]);
      }), this.__update(true);
    }, this.setDebounce = (h) => {
      i !== void 0 && l.removeEventListener("resize", i, Fc), i = h > 0 ? Ma(this.__update, h) : this.__update, l.addEventListener("resize", i, Fc);
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
} }), Hv = Ut;
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
} }, ku = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days", prevMonth: "Previous month", nextMonth: "Next month", prevYear: "Previous year", nextYear: "Next year", today: "Today", prevRangeYears: (e) => `Previous ${e} years`, nextRangeYears: (e) => `Next ${e} years` }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, n) => e + "-" + t + " of " + n, columns: "Columns" }, pagination: { first: "First page", prev: "Previous page", next: "Next page", last: "Last page" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
function Oc() {
  const e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Rl = wl({ __qLang: {} }, { getLocale: Oc, set(e = ku, t) {
  const n = { ...e, rtl: e.rtl === true, getLocale: Oc };
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
  } }), this.set(t || ku));
} }), ti = Rl, sy = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } }, qu = wl({ iconMapFn: null, __qIconSet: {} }, { set(e, t) {
  const n = { ...e };
  n.set = qu.set, Object.assign(qu.__qIconSet, n);
}, install({ $q: e, iconSet: t, ssrContext: n }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Ot(e, "iconMapFn", () => this.iconMapFn, (l) => {
    this.iconMapFn = l;
  }), this.__installed === true ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, { get() {
    return Reflect.get(...arguments);
  }, ownKeys(l) {
    return Reflect.ownKeys(l).filter((a) => a !== "set");
  } }), this.set(t || sy));
} }), Kv = qu, Wv = "_q_", Yv = "_q_t_", Gv = "_q_s_", Kl = "_q_l_", Xv = "_q_pc_", Zv = "_q_f_", Jv = "_q_fo_", em = "_q_tabs_", tm = "_q_u_";
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
function Rt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function Tu(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function dy(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function pr(e) {
  return typeof e == "number" && isFinite(e);
}
var Vc = [Nv, ry, Hv, Jb, yr, ti, Kv];
function ni(e, t) {
  const n = Iv(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...a } = t._context;
  return Object.assign(n._context, a), n;
}
function Ic(e, t) {
  t.forEach((n) => {
    n.install(e), n.__installed = true;
  });
}
function fy(e, t, n) {
  e.config.globalProperties.$q = n.$q, e.provide(Wv, n.$q), Ic(n, Vc), t.components !== void 0 && Object.values(t.components).forEach((l) => {
    Rt(l) === true && l.name !== void 0 && e.component(l.name, l);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((l) => {
    Rt(l) === true && l.name !== void 0 && e.directive(l.name, l);
  }), t.plugins !== void 0 && Ic(n, Object.values(t.plugins).filter((l) => typeof l.install == "function" && Vc.includes(l) === false)), nn.value === true && (n.$q.onSSRHydrated = () => {
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
function Mu(e, t = 1) {
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
var hs = XMLHttpRequest, lm = hs.prototype.open, my = ["top", "right", "bottom", "left"], ko = [], rr = 0;
function hy({ p: e, pos: t, active: n, horiz: l, reverse: a, dir: r }) {
  let o = 1, i = 1;
  return l === true ? (a === true && (o = -1), t === "bottom" && (i = -1), { transform: `translate3d(${o * (e - 100)}%,${n ? 0 : i * -200}%,0)` }) : (a === true && (i = -1), t === "right" && (o = -1), { transform: `translate3d(${n ? 0 : r * o * -200}%,${i * (e - 100)}%,0)` });
}
function gy(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), ct(e + t, 0, 100);
}
function by(e) {
  rr++, ko.push(e), !(rr > 1) && (hs.prototype.open = function(t, n) {
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
  ko = ko.filter((t) => t.start !== e), rr = Math.max(0, rr - 1), rr === 0 && (hs.prototype.open = lm);
}
var py = ve({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => my.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), l = Q(0), a = Q(false), r = Q(true);
  let o = 0, i = null, u;
  const c = f(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (r.value === true ? "" : " no-transition")), s = f(() => e.position === "top" || e.position === "bottom"), v = f(() => s.value === true ? "height" : "width"), h = f(() => {
    const y = a.value, b = hy({ p: l.value, pos: e.position, active: y, horiz: s.value, reverse: n.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: n.$q.lang.rtl === true ? -1 : 1 });
    return b[v.value] = e.size, b.opacity = y ? 1 : 0, b;
  }), m = f(() => a.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": l.value } : { "aria-hidden": "true" });
  function g(y = 300) {
    const b = u;
    return u = Math.max(0, y) || 0, o++, o > 1 ? (b === 0 && y > 0 ? k() : i !== null && b > 0 && y <= 0 && (clearTimeout(i), i = null), o) : (i !== null && clearTimeout(i), t("start"), l.value = 0, i = setTimeout(() => {
      i = null, r.value = true, y > 0 && k();
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
  function k() {
    l.value < 100 && (i = setTimeout(() => {
      i = null, _(), k();
    }, u));
  }
  let p;
  return ft(() => {
    e.skipHijack !== true && (p = true, by({ start: g, stop: w, hijackFilter: f(() => e.hijackFilter || null) }));
  }), Ke(() => {
    i !== null && clearTimeout(i), p === true && yy(g);
  }), Object.assign(n, { start: g, stop: w, increment: _ }), () => d("div", { class: c.value, style: h.value, ...m.value });
} }), Eu = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 }, Jn = { size: String };
function el(e, t = Eu) {
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
function kt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function gs(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function pn(e, t, n, l, a, r) {
  t.key = l + a;
  const o = d(e, t, n);
  return a === true ? sn(o, r()) : o;
}
var Dc = "0 0 24 24", Ri = (e) => e, $i = (e) => `ionicons ${e}`, am = { "mdi-": (e) => `mdi ${e}`, "icon-": Ri, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": $i, "ion-ios": $i, "ion-logo": $i, "iconfont ": Ri, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}`, "i-": Ri }, rm = { o_: "-outlined", r_: "-round", s_: "-sharp" }, om = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" }, _y = new RegExp("^(" + Object.keys(am).join("|") + ")"), wy = new RegExp("^(" + Object.keys(rm).join("|") + ")"), Nc = new RegExp("^(" + Object.keys(om).join("|") + ")"), Sy = /^[Mm]\s?[-+]?\.?\d/, xy = /^img:/, Cy = /^svguse:/, ky = /^ion-/, qy = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, et = ve({ name: "QIcon", props: { ...Jn, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), r = f(() => {
    let o, i = e.name;
    if (i === "none" || !i) return { none: true };
    if (n.iconMapFn !== null) {
      const s = n.iconMapFn(i);
      if (s !== void 0) if (s.icon !== void 0) {
        if (i = s.icon, i === "none" || !i) return { none: true };
      } else return { cls: s.cls, content: s.content !== void 0 ? s.content : " " };
    }
    if (Sy.test(i) === true) {
      const [s, v = Dc] = i.split("|");
      return { svg: true, viewBox: v, nodes: s.split("&&").map((h) => {
        const [m, g, _] = h.split("@@");
        return d("path", { style: g, d: m, transform: _ });
      }) };
    }
    if (xy.test(i) === true) return { img: true, src: i.substring(4) };
    if (Cy.test(i) === true) {
      const [s, v = Dc] = i.split("|");
      return { svguse: true, src: s.substring(7), viewBox: v };
    }
    let u = " ";
    const c = i.match(_y);
    if (c !== null) o = am[c[1]](i);
    else if (qy.test(i) === true) o = i;
    else if (ky.test(i) === true) o = `ionicons ion-${n.platform.is.ios === true ? "ios" : "md"}${i.substring(3)}`;
    else if (Nc.test(i) === true) {
      o = "notranslate material-symbols";
      const s = i.match(Nc);
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
  const n = el(e), l = f(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), a = f(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    const r = e.icon !== void 0 ? [d(et, { name: e.icon })] : void 0;
    return d("div", { class: l.value, style: n.value }, [d("div", { class: "q-avatar__content row flex-center overflow-hidden", style: a.value }, gs(t.default, r))]);
  };
} }), Ty = ["top", "middle", "bottom"];
ve({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => Ty.includes(e) } }, setup(e, { slots: t }) {
  const n = f(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = f(() => {
    const a = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (a !== void 0 ? ` text-${a}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => d("div", { class: l.value, style: n.value, role: "status", "aria-label": e.label }, kt(t.default, e.label !== void 0 ? [e.label] : []));
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
var um = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" }, My = Object.keys(um), bs = { align: { type: String, validator: (e) => My.includes(e) } };
function ys(e) {
  return f(() => {
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
function ps(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    sm(t, n);
  }), Array.from(t);
}
function _s(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function hl(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var Ey = ["", true];
ve({ name: "QBreadcrumbs", props: { ...bs, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  const n = ys(e), l = f(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), a = f(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), r = f(() => ` text-${e.activeColor}`);
  return () => {
    if (t.default === void 0) return;
    const o = ps(Pe(t.default));
    if (o.length === 0) return;
    let i = 1;
    const u = [], c = o.filter((v) => {
      var _a2;
      return ((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl";
    }).length, s = t.separator !== void 0 ? t.separator : () => e.separator;
    return o.forEach((v) => {
      var _a2;
      if (((_a2 = v.type) == null ? void 0 : _a2.name) === "QBreadcrumbsEl") {
        const h = i < c, m = v.props !== null && Ey.includes(v.props.disable), g = (h === true ? "" : " q-breadcrumbs--last") + (m !== true && h === true ? r.value : "");
        i++, u.push(d("div", { class: `flex items-center${g}` }, [v])), h === true && u.push(d("div", { class: "q-breadcrumbs__separator" + a.value }, s()));
      } else u.push(v);
    }), d("div", { class: "q-breadcrumbs" }, [d("div", { class: l.value }, u)]);
  };
} });
function Hc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function jc(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ay(e, t) {
  for (const n in t) {
    const l = t[n], a = e[n];
    if (typeof l == "string") {
      if (l !== a) return false;
    } else if (Array.isArray(a) === false || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function Uc(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Ry(e, t) {
  return Array.isArray(e) === true ? Uc(e, t) : Array.isArray(t) === true ? Uc(t, e) : e === t;
}
function $y(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (Ry(e[n], t[n]) === false) return false;
  return true;
}
var cm = { to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean }, Ar = { ...cm, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" } };
function li({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se(), { props: l, proxy: a, emit: r } = n, o = _s(n), i = f(() => l.disable !== true && l.href !== void 0), u = f(t === true ? () => o === true && l.disable !== true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== "" : () => o === true && i.value !== true && l.to !== void 0 && l.to !== null && l.to !== ""), c = f(() => u.value === true ? p(l.to) : null), s = f(() => c.value !== null), v = f(() => i.value === true || s.value === true), h = f(() => l.type === "a" || v.value === true ? "a" : l.tag || e || "div"), m = f(() => i.value === true ? { href: l.href, target: l.target } : s.value === true ? { href: c.value.href, target: l.target } : {}), g = f(() => {
    if (s.value === false) return -1;
    const { matched: x } = c.value, { length: B } = x, O = x[B - 1];
    if (O === void 0) return -1;
    const N = a.$route.matched;
    if (N.length === 0) return -1;
    const T = N.findIndex(jc.bind(null, O));
    if (T !== -1) return T;
    const M = Hc(x[B - 2]);
    return B > 1 && Hc(O) === M && N[N.length - 1].path !== M ? N.findIndex(jc.bind(null, x[B - 2])) : T;
  }), _ = f(() => s.value === true && g.value !== -1 && Ay(a.$route.params, c.value.params)), w = f(() => _.value === true && g.value === a.$route.matched.length - 1 && $y(a.$route.params, c.value.params)), k = f(() => s.value === true ? w.value === true ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === true ? "" : _.value === true ? ` ${l.activeClass}` : "" : "");
  function p(x) {
    try {
      return a.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function y(x, { returnRouterError: B, to: O = l.to, replace: N = l.replace } = {}) {
    if (l.disable === true) return x.preventDefault(), Promise.resolve(false);
    if (x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || l.target === "_blank") return Promise.resolve(false);
    x.preventDefault();
    const T = a.$router[N === true ? "replace" : "push"](O);
    return B === true ? T : T.then(() => {
    }).catch(() => {
    });
  }
  function b(x) {
    if (s.value === true) {
      const B = (O) => y(x, O);
      r("click", x, B), x.defaultPrevented !== true && B();
    } else r("click", x);
  }
  return { hasRouterLink: s, hasHrefLink: i, hasLink: v, linkTag: h, resolvedLink: c, linkIsActive: _, linkIsExactActive: w, linkClass: k, linkAttrs: m, getLink: p, navigateToRouterLink: y, navigateOnClick: b };
}
ve({ name: "QBreadcrumbsEl", props: { ...Ar, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  const { linkTag: n, linkAttrs: l, linkClass: a, navigateOnClick: r } = li(), o = f(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + a.value : "q-breadcrumbs__el--disable"), ...l.value, onClick: r })), i = f(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    const u = [];
    return e.icon !== void 0 && u.push(d(et, { class: i.value, name: e.icon })), e.label !== void 0 && u.push(e.label), d(n.value, { ...o.value }, kt(t.default, u));
  };
} });
var Tt = { size: { type: [String, Number], default: "1em" }, color: String };
function Mt(e) {
  return { cSize: f(() => e.size in Eu ? `${Eu[e.size]}px` : e.size), classes: f(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
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
function Au(e, t) {
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
  const t = Ie(e);
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
function Qc(e, t, n, l) {
  n.modifiers.stop === true && wt(e);
  const a = n.modifiers.color;
  let r = n.modifiers.center;
  r = r === true || l === true;
  const o = document.createElement("span"), i = document.createElement("span"), u = en(e), { left: c, top: s, width: v, height: h } = t.getBoundingClientRect(), m = Math.sqrt(v * v + h * h), g = m / 2, _ = `${(v - m) / 2}px`, w = r ? _ : `${u.left - c - g}px`, k = `${(h - m) / 2}px`, p = r ? k : `${u.top - s - g}px`;
  i.className = "q-ripple__inner", Au(i, { height: `${m}px`, width: `${m}px`, transform: `translate3d(${w},${p},0) scale3d(.2,.2,1)`, opacity: 0 }), o.className = `q-ripple${a ? " text-" + a : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(i), t.appendChild(o);
  const y = () => {
    o.remove(), clearTimeout(b);
  };
  n.abort.push(y);
  let b = setTimeout(() => {
    i.classList.add("q-ripple__inner--enter"), i.style.transform = `translate3d(${_},${k},0) scale3d(1,1,1)`, i.style.opacity = 0.2, b = setTimeout(() => {
      i.classList.remove("q-ripple__inner--enter"), i.classList.add("q-ripple__inner--leave"), i.style.opacity = 0, b = setTimeout(() => {
        o.remove(), n.abort.splice(n.abort.indexOf(y), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Kc(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = { early: a.early === true, stop: a.stop === true, center: a.center === true, color: a.color || l, keyCodes: [].concat(a.keyCodes || 13) };
}
var ai = Rn({ name: "ripple", beforeMount(e, t) {
  const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (n.ripple === false) return;
  const l = { cfg: n, enabled: t.value !== false, modifiers: {}, abort: [], start(a) {
    l.enabled === true && a.qSkipRipple !== true && a.type === (l.modifiers.early === true ? "pointerdown" : "click") && Qc(a, e, l, a.qKeyEvent === true);
  }, keystart: fm((a) => {
    l.enabled === true && a.qSkipRipple !== true && yn(a, l.modifiers.keyCodes) === true && a.type === `key${l.modifiers.early === true ? "down" : "up"}` && Qc(a, e, l, true);
  }, 300) };
  Kc(l, t), e.__qripple = l, Ct(l, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    const n = e.__qripple;
    n !== void 0 && (n.enabled = t.value !== false, n.enabled === true && Object(t.value) === t.value && Kc(n, t));
  }
}, beforeUnmount(e) {
  const t = e.__qripple;
  t !== void 0 && (t.abort.forEach((n) => {
    n();
  }), Wt(t, "main"), delete e._qripple);
} }), To = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }, Ly = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, By = ["button", "submit", "reset"], Fy = /[^\s]\/[^\s]/, vm = ["flat", "outline", "push", "unelevated"];
function ws(e, t) {
  return e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
}
function mm(e) {
  const t = ws(e);
  return t !== void 0 ? { [t]: true } : {};
}
var Ss = { ...Jn, ...cm, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...vm.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...bs.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean }, Oy = { ...Ss, round: Boolean };
function Vy(e) {
  const t = el(e, Ly), n = ys(e), { hasRouterLink: l, hasLink: a, linkTag: r, linkAttrs: o, navigateOnClick: i } = li({ fallbackTag: "button" }), u = f(() => {
    const w = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, w, { padding: e.padding.split(/\s+/).map((k) => k in To ? To[k] + "px" : k).join(" "), minWidth: "0", minHeight: "0" }) : w;
  }), c = f(() => e.rounded === true || e.fab === true || e.fabMini === true), s = f(() => e.disable !== true && e.loading !== true), v = f(() => s.value === true ? e.tabindex || 0 : -1), h = f(() => ws(e, "standard")), m = f(() => {
    const w = { tabindex: v.value };
    return a.value === true ? Object.assign(w, o.value) : By.includes(e.type) === true && (w.type = e.type), r.value === "a" ? (e.disable === true ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), l.value !== true && Fy.test(e.type) === true && (w.type = e.type)) : e.disable === true && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(w, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), w;
  }), g = f(() => {
    let w;
    e.color !== void 0 ? e.flat === true || e.outline === true ? w = `text-${e.textColor || e.color}` : w = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
    const k = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${h.value} q-btn--${k}` + (w !== void 0 ? " " + w : "") + (s.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = f(() => n.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: g, style: u, innerClasses: _, attributes: m, hasLink: a, linkTag: r, navigateOnClick: i, isActionable: s };
}
var { passiveCapture: fn } = dt, Gl = null, Xl = null, Zl = null, Ze = ve({ name: "QBtn", props: { ...Oy, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { classes: a, style: r, innerClasses: o, attributes: i, hasLink: u, linkTag: c, navigateOnClick: s, isActionable: v } = Vy(e), h = Q(null), m = Q(null);
  let g = null, _, w = null;
  const k = f(() => e.label !== void 0 && e.label !== null && e.label !== ""), p = f(() => e.disable === true || e.ripple === false ? false : { keyCodes: u.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), y = f(() => ({ center: e.round })), b = f(() => {
    const C = Math.max(0, Math.min(100, e.percentage));
    return C > 0 ? { transition: "transform 0.6s", transform: `translateX(${C - 100}%)` } : {};
  }), x = f(() => {
    if (e.loading === true) return { onMousedown: E, onTouchstart: E, onClick: E, onKeydown: E, onKeyup: E };
    if (v.value === true) {
      const C = { onClick: O, onKeydown: N, onMousedown: M };
      if (l.$q.platform.has.touch === true) {
        const D = e.onTouchstart !== void 0 ? "" : "Passive";
        C[`onTouchstart${D}`] = T;
      }
      return C;
    }
    return { onClick: He };
  }), B = f(() => ({ ref: h, class: "q-btn q-btn-item non-selectable no-outline " + a.value, style: r.value, ...i.value, ...x.value }));
  function O(C) {
    if (h.value !== null) {
      if (C !== void 0) {
        if (C.defaultPrevented === true) return;
        const D = document.activeElement;
        if (e.type === "submit" && D !== document.body && h.value.contains(D) === false && D.contains(h.value) === false) {
          C.qAvoidFocus !== true && h.value.focus();
          const H = () => {
            var _a2;
            document.removeEventListener("keydown", He, true), document.removeEventListener("keyup", H, fn), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", H, fn);
          };
          document.addEventListener("keydown", He, true), document.addEventListener("keyup", H, fn), h.value.addEventListener("blur", H, fn);
        }
      }
      s(C);
    }
  }
  function N(C) {
    h.value !== null && (n("keydown", C), yn(C, [13, 32]) === true && Xl !== h.value && (Xl !== null && q(), C.defaultPrevented !== true && (C.qAvoidFocus !== true && h.value.focus(), Xl = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", L, true), h.value.addEventListener("blur", L, fn)), He(C)));
  }
  function T(C) {
    h.value !== null && (n("touchstart", C), C.defaultPrevented !== true && (Gl !== h.value && (Gl !== null && q(), Gl = h.value, g = C.target, g.addEventListener("touchcancel", L, fn), g.addEventListener("touchend", L, fn)), _ = true, w !== null && clearTimeout(w), w = setTimeout(() => {
      w = null, _ = false;
    }, 200)));
  }
  function M(C) {
    h.value !== null && (C.qSkipRipple = _ === true, n("mousedown", C), C.defaultPrevented !== true && Zl !== h.value && (Zl !== null && q(), Zl = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", L, fn)));
  }
  function L(C) {
    if (h.value !== null && !((C == null ? void 0 : C.type) === "blur" && document.activeElement === h.value)) {
      if ((C == null ? void 0 : C.type) === "keyup") {
        if (Xl === h.value && yn(C, [13, 32]) === true) {
          const D = new MouseEvent("click", C);
          D.qKeyEvent = true, C.defaultPrevented === true && Vt(D), C.cancelBubble === true && wt(D), h.value.dispatchEvent(D), He(C), C.qKeyEvent = true;
        }
        n("keyup", C);
      }
      q();
    }
  }
  function q(C) {
    var _a2, _b2;
    const D = m.value;
    C !== true && (Gl === h.value || Zl === h.value) && D !== null && D !== document.activeElement && (D.setAttribute("tabindex", -1), D.focus()), Gl === h.value && (g !== null && (g.removeEventListener("touchcancel", L, fn), g.removeEventListener("touchend", L, fn)), Gl = g = null), Zl === h.value && (document.removeEventListener("mouseup", L, fn), Zl = null), Xl === h.value && (document.removeEventListener("keyup", L, true), (_a2 = h.value) == null ? void 0 : _a2.removeEventListener("blur", L, fn), Xl = null), (_b2 = h.value) == null ? void 0 : _b2.classList.remove("q-btn--active");
  }
  function E(C) {
    He(C), C.qSkipRipple = true;
  }
  return Ke(() => {
    q(true);
  }), Object.assign(l, { click: (C) => {
    v.value === true && O(C);
  } }), () => {
    let C = [];
    e.icon !== void 0 && C.push(d(et, { name: e.icon, left: e.stack !== true && k.value === true, role: "img" })), k.value === true && C.push(d("span", { class: "block" }, [e.label])), C = kt(t.default, C), e.iconRight !== void 0 && e.round === false && C.push(d(et, { name: e.iconRight, right: e.stack !== true && k.value === true, role: "img" }));
    const D = [d("span", { class: "q-focus-helper", ref: m })];
    return e.loading === true && e.percentage !== void 0 && D.push(d("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [d("span", { class: "q-btn__progress-indicator fit block", style: b.value })])), D.push(d("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + o.value }, C)), e.loading !== null && D.push(d(Ft, { name: "q-transition--fade" }, () => e.loading === true ? [d("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [d(_n)])] : null)), sn(d(c.value, B.value, D), [[ai, p.value, void 0, y.value]]);
  };
} }), hm = ve({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  const n = f(() => {
    const l = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((a) => e[a] === true).map((a) => `q-btn-group--${a}`).join(" ");
    return `q-btn-group row no-wrap${l.length !== 0 ? " " + l : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function Mn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Nv.is.mobile !== true && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
var gm = { target: { type: [Boolean, String, Element], default: true }, noParentEvent: Boolean }, bm = { ...gm, contextMenu: Boolean };
function xs({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: l, proxy: a, emit: r } = Se(), o = Q(null);
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
function ym(e, t) {
  const n = Q(null);
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
var Ea = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] }, Aa = ["beforeShow", "show", "beforeHide", "hide"];
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
    })), (i.modelValue === null || y === false) && _(p);
  }
  function _(p) {
    e.value !== false && (e.value = false, u("beforeHide", p), a !== void 0 ? a(p) : u("hide", p));
  }
  function w(p) {
    i.disable === true && p === true ? i["onUpdate:modelValue"] !== void 0 && u("update:modelValue", false) : p === true !== e.value && (p === true ? m : _)(s);
  }
  he(() => i.modelValue, w), n !== void 0 && _s(o) === true && he(() => c.$route.fullPath, () => {
    n.value === true && e.value === true && g();
  }), r === true && ft(() => {
    w(i.modelValue);
  });
  const k = { show: h, hide: g, toggle: v };
  return Object.assign(c, k), k;
}
var Ll = [], _r = [];
function pm(e) {
  _r = _r.filter((t) => t !== e);
}
function Iy(e) {
  pm(e), _r.push(e);
}
function Wc(e) {
  pm(e), _r.length === 0 && Ll.length !== 0 && (Ll[Ll.length - 1](), Ll = []);
}
function $a(e) {
  _r.length === 0 ? e() : Ll.push(e);
}
function zy(e) {
  Ll = Ll.filter((t) => t !== e);
}
var ma = [], or = [], Dy = 1, il = document.body;
function Rr(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Dy++}` : e, xo.globalNodes !== void 0) {
    const l = xo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return il.appendChild(n), ma.push(n), or.push(t), n;
}
function Cs(e) {
  const t = ma.indexOf(e);
  ma.splice(t, 1), or.splice(t, 1), e.remove();
}
function Ny(e) {
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
function Hy(e) {
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
function ks(e, t, n, l) {
  const a = Q(false), r = Q(false);
  let o = null;
  const i = {}, u = l === "dialog" && Qy(e);
  function c(v) {
    if (v === true) {
      Wc(i), r.value = true;
      return;
    }
    r.value = false, a.value === false && (u === false && o === null && (o = Rr(false, l)), a.value = true, ha.push(e.proxy), Iy(i));
  }
  function s(v) {
    if (r.value = false, v !== true) return;
    Wc(i), a.value = false;
    const h = ha.indexOf(e.proxy);
    h !== -1 && ha.splice(h, 1), o !== null && (Cs(o), o = null);
  }
  return Go(() => {
    s(true);
  }), e.proxy.__qPortal = true, Ot(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: s, portalIsActive: a, portalIsAccessible: r, renderPortal: () => u === true ? n() : a.value === true ? [d(h0, { to: o }, d(Uy, n))] : void 0 };
}
var Ol = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function ri(e, t = () => {
}, n = () => {
}) {
  return { transitionProps: f(() => {
    const l = `q-transition--${e.transitionShow || t()}`, a = `q-transition--${e.transitionHide || n()}`;
    return { appear: true, enterFromClass: `${l}-enter-from`, enterActiveClass: `${l}-enter-active`, enterToClass: `${l}-enter-to`, leaveFromClass: `${a}-leave-from`, leaveActiveClass: `${a}-leave-active`, leaveToClass: `${a}-leave-to` };
  }), transitionStyle: f(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function ga() {
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
var Wl = [Element, String], Ky = [null, document, document.body, document.scrollingElement, document.documentElement];
function Vn(e, t) {
  let n = Py(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Ky.includes(n) ? window : n;
}
function zr(e) {
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
    a !== t && Ru(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    Ru(e, i), i !== t && wm(e, t, n - o, r);
  });
}
function Sm(e, t, n = 0) {
  const l = arguments[3] === void 0 ? performance.now() : arguments[3], a = oi(e);
  if (n <= 0) {
    a !== t && $u(e, t);
    return;
  }
  requestAnimationFrame((r) => {
    const o = r - l, i = a + (t - a) / Math.max(o, n) * o;
    $u(e, i), i !== t && Sm(e, t, n - o, r);
  });
}
function Ru(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function $u(e, t) {
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
  Ru(e, t);
}
function Pi(e, t, n) {
  if (n) {
    Sm(e, t, n);
    return;
  }
  $u(e, t);
}
var Dr;
function ro() {
  if (Dr !== void 0) return Dr;
  const e = document.createElement("p"), t = document.createElement("div");
  Au(e, { width: "100%", height: "200px" }), Au(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
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
var Il = [];
function km(e) {
  Il[Il.length - 1](e);
}
function qm(e) {
  ze.is.desktop === true && (Il.push(e), Il.length === 1 && document.body.addEventListener("focusin", km));
}
function Pu(e) {
  const t = Il.indexOf(e);
  t !== -1 && (Il.splice(t, 1), Il.length === 0 && document.body.removeEventListener("focusin", km));
}
var { notPassiveCapture: Eo } = dt, zl = [];
function Ao(e) {
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
  for (let l = zl.length - 1; l >= 0; l--) {
    const a = zl[l];
    if ((a.anchorEl.value === null || a.anchorEl.value.contains(t) === false) && (t === document.body || a.innerRef.value !== null && a.innerRef.value.contains(t) === false)) e.qClickOutside = true, a.onClickOutside(e);
    else return;
  }
}
function Tm(e) {
  zl.push(e), zl.length === 1 && (document.addEventListener("mousedown", Ao, Eo), document.addEventListener("touchstart", Ao, Eo));
}
function Ro(e) {
  const t = zl.findIndex((n) => n === e);
  t !== -1 && (zl.splice(t, 1), zl.length === 0 && (document.removeEventListener("mousedown", Ao, Eo), document.removeEventListener("touchstart", Ao, Eo)));
}
var Yc, Gc;
function $o(e) {
  const t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Mm(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var Lu = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  Lu[`${e}#ltr`] = e, Lu[`${e}#rtl`] = e;
});
function Po(e, t) {
  const n = e.split(" ");
  return { vertical: n[0], horizontal: Lu[`${n[1]}#${t === true ? "rtl" : "ltr"}`] };
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
function Xc(e, t, n, l) {
  return { top: e[n.vertical] - t[l.vertical], left: e[n.horizontal] - t[l.horizontal] };
}
function qs(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      qs(e, t + 1);
    }, 10);
    return;
  }
  const { targetEl: n, offset: l, anchorEl: a, anchorOrigin: r, selfOrigin: o, absoluteOffset: i, fit: u, cover: c, maxHeight: s, maxWidth: v } = e;
  if (ze.is.ios === true && window.visualViewport !== void 0) {
    const B = document.body.style, { offsetLeft: O, offsetTop: N } = window.visualViewport;
    O !== Yc && (B.setProperty("--q-pe-left", O + "px"), Yc = O), N !== Gc && (B.setProperty("--q-pe-top", N + "px"), Gc = N);
  }
  const { scrollLeft: h, scrollTop: m } = n, g = i === void 0 ? Zy(a, c === true ? [0, 0] : l) : Jy(a, i, l);
  Object.assign(n.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: v, maxHeight: s, visibility: "visible" });
  const { offsetWidth: _, offsetHeight: w } = n, { elWidth: k, elHeight: p } = u === true || c === true ? { elWidth: Math.max(g.width, _), elHeight: c === true ? Math.max(g.height, w) : w } : { elWidth: _, elHeight: w };
  let y = { maxWidth: v, maxHeight: s };
  (u === true || c === true) && (y.minWidth = g.width + "px", c === true && (y.minHeight = g.height + "px")), Object.assign(n.style, y);
  const b = ep(k, p);
  let x = Xc(g, b, r, o);
  if (i === void 0 || l === void 0) Li(x, g, b, r, o);
  else {
    const { top: B, left: O } = x;
    Li(x, g, b, r, o);
    let N = false;
    if (x.top !== B) {
      N = true;
      const T = 2 * l[1];
      g.center = g.top -= T, g.bottom -= T + 2;
    }
    if (x.left !== O) {
      N = true;
      const T = 2 * l[0];
      g.middle = g.left -= T, g.right -= T + 2;
    }
    N === true && (x = Xc(g, b, r, o), Li(x, g, b, r, o));
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
var ii = ve({ name: "QMenu", inheritAttrs: false, props: { ...bm, ...Ea, ...nt, ...Ol, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: $o }, self: { type: String, validator: $o }, offset: { type: Array, validator: Mm }, scrollTarget: Wl, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...Aa, "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  let a = null, r, o, i;
  const u = Se(), { proxy: c } = u, { $q: s } = c, v = Q(null), h = Q(false), m = f(() => e.persistent !== true && e.noRouteDismiss !== true), g = lt(e, s), { registerTick: _, removeTick: w } = ga(), { registerTimeout: k } = Xn(), { transitionProps: p, transitionStyle: y } = ri(e), { localScrollTarget: b, changeScrollEvent: x, unconfigureScrollTarget: B } = ym(e, J), { anchorEl: O, canShow: N } = xs({ showing: h }), { hide: T } = Ra({ showing: h, canShow: N, handleShow: ye, handleHide: K, hideOnRouteChange: m, processOnMount: true }), { showPortal: M, hidePortal: L, renderPortal: q } = ks(u, v, ee, "menu"), E = { anchorEl: O, innerRef: v, onClickOutside(V) {
    if (e.persistent !== true && h.value === true) return T(V), (V.type === "touchstart" || V.target.classList.contains("q-dialog__backdrop")) && He(V), true;
  } }, C = f(() => Po(e.anchor || (e.cover === true ? "center middle" : "bottom start"), s.lang.rtl)), D = f(() => e.cover === true ? C.value : Po(e.self || "top start", s.lang.rtl)), H = f(() => (e.square === true ? " q-menu--square" : "") + (g.value === true ? " q-menu--dark q-dark" : "")), $ = f(() => e.autoClose === true ? { onClick: X } : {}), j = f(() => h.value === true && e.persistent !== true);
  he(j, (V) => {
    V === true ? (Cm(F), Tm(E)) : (Mo(F), Ro(E));
  });
  function te() {
    $a(() => {
      let V = v.value;
      V && V.contains(document.activeElement) !== true && (V = V.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || V.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || V.querySelector("[autofocus], [data-autofocus]") || V, V.focus({ preventScroll: true }));
    });
  }
  function ye(V) {
    if (a = e.noRefocus === false ? document.activeElement : null, qm(ge), M(), J(), r = void 0, V !== void 0 && (e.touchPosition || e.contextMenu)) {
      const re = en(V);
      if (re.left !== void 0) {
        const { top: we, left: S } = O.value.getBoundingClientRect();
        r = { left: re.left - S, top: re.top - we };
      }
    }
    o === void 0 && (o = he(() => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl, P)), e.noFocus !== true && document.activeElement.blur(), _(() => {
      P(), e.noFocus !== true && te();
    }), k(() => {
      s.platform.is.ios === true && (i = e.autoClose, v.value.click()), P(), M(true), n("show", V);
    }, e.transitionDuration);
  }
  function K(V) {
    w(), L(), A(true), a !== null && (V === void 0 || V.qClickOutside !== true) && ((((V == null ? void 0 : V.type.indexOf("key")) === 0 ? a.closest('[tabindex]:not([tabindex^="-"])') : void 0) || a).focus(), a = null), k(() => {
      L(true), n("hide", V);
    }, e.transitionDuration);
  }
  function A(V) {
    r = void 0, o !== void 0 && (o(), o = void 0), (V === true || h.value === true) && (Pu(ge), B(), Ro(E), Mo(F)), V !== true && (a = null);
  }
  function J() {
    (O.value !== null || e.scrollTarget !== void 0) && (b.value = Vn(O.value, e.scrollTarget), x(b.value, P));
  }
  function X(V) {
    i !== true ? (_m(c, V), n("click", V)) : i = false;
  }
  function ge(V) {
    j.value === true && e.noFocus !== true && dm(v.value, V.target) !== true && te();
  }
  function F(V) {
    e.noEscDismiss !== true && (n("escapeKey"), T(V));
  }
  function P() {
    qs({ targetEl: v.value, offset: e.offset, anchorEl: O.value, anchorOrigin: C.value, selfOrigin: D.value, absoluteOffset: r, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function ee() {
    return d(Ft, p.value, () => h.value === true ? d("div", { role: "menu", ...l, ref: v, tabindex: -1, class: ["q-menu q-position-engine scroll" + H.value, l.class], style: [l.style, y.value], ...$.value }, Pe(t.default)) : null);
  }
  return Ke(A), Object.assign(c, { focus: te, updatePosition: P }), q;
} }), Bi, Nr = 0, Nt = new Array(256);
for (let e = 0; e < 256; e++) Nt[e] = (e + 256).toString(16).substring(1);
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
})(), Zc = 4096;
function wr() {
  (Bi === void 0 || Nr + 16 > Zc) && (Nr = 0, Bi = tp(Zc));
  const e = Array.prototype.slice.call(Bi, Nr, Nr += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Nt[e[0]] + Nt[e[1]] + Nt[e[2]] + Nt[e[3]] + "-" + Nt[e[4]] + Nt[e[5]] + "-" + Nt[e[6]] + Nt[e[7]] + "-" + Nt[e[8]] + Nt[e[9]] + "-" + Nt[e[10]] + Nt[e[11]] + Nt[e[12]] + Nt[e[13]] + Nt[e[14]] + Nt[e[15]];
}
function np(e) {
  return e ?? null;
}
function Jc(e, t) {
  return e ?? (t === true ? `f_${wr()}` : null);
}
function ui({ getValue: e, required: t = true } = {}) {
  if (nn.value === true) {
    const n = Q(e !== void 0 ? np(e()) : null);
    return t === true && n.value === null && ft(() => {
      n.value = `f_${wr()}`;
    }), e !== void 0 && he(e, (l) => {
      n.value = Jc(l, t);
    }), n;
  }
  return e !== void 0 ? f(() => Jc(e(), t)) : Q(`f_${wr()}`);
}
var lp = Object.keys(Ss);
function ap(e) {
  return lp.reduce((t, n) => {
    const l = e[n];
    return l !== void 0 && (t[n] = l), t;
  }, {});
}
var rp = ve({ name: "QBtnDropdown", props: { ...Ss, ...Ol, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noEscDismiss: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, noRefocus: Boolean, noFocus: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), a = Q(e.modelValue), r = Q(null), o = ui(), i = f(() => {
    const b = { "aria-expanded": a.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": o.value, "aria-label": e.toggleAriaLabel || l.$q.lang.label[a.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (b["aria-disabled"] = "true"), b;
  }), u = f(() => "q-btn-dropdown__arrow" + (a.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = f(() => mm(e)), s = f(() => ap(e));
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
  function _(b) {
    n("click", b);
  }
  function w(b) {
    wt(b), y(), n("click", b);
  }
  function k(b) {
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
  return Object.assign(l, { show: p, hide: y, toggle: k }), ft(() => {
    e.modelValue === true && p();
  }), () => {
    const b = [d(et, { class: u.value, name: e.dropdownIcon || l.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && b.push(d(ii, { ref: r, id: o.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noEscDismiss: e.noEscDismiss, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, noFocus: e.noFocus, noRefocus: e.noRefocus, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: v, onShow: h, onBeforeHide: m, onHide: g }, t.default)), e.split === false ? d(Ze, { class: "q-btn-dropdown q-btn-dropdown--simple", ...s.value, ...i.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: _ }, { default: () => Pe(t.label, []).concat(b), loading: t.loading }) : d(hm, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [d(Ze, { class: "q-btn-dropdown--current", ...s.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: w }, { default: t.label, loading: t.loading }), d(Ze, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...i.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => b)]);
  };
} }), wn = { name: String };
function $r(e) {
  return f(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Sl(e = {}) {
  return (t, n, l) => {
    t[n](d("input", { class: "hidden" + (l || ""), ...e.value }));
  };
}
function Ts(e) {
  return f(() => e.name || e.for);
}
ve({ name: "QBtnToggle", props: { ...wn, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: n }) {
  const l = f(() => e.options.find((h) => h.value === e.modelValue) !== void 0), a = f(() => ({ type: "hidden", name: e.name, value: e.modelValue })), r = Sl(a), o = f(() => mm(e)), i = f(() => ({ rounded: e.rounded, dense: e.dense, ...o.value })), u = f(() => e.options.map((h, m) => {
    const { attrs: g, value: _, slot: w, ...k } = h;
    return { slot: w, props: { key: m, "aria-pressed": _ === e.modelValue ? "true" : "false", ...g, ...k, ...i.value, disable: e.disable === true || k.disable === true, color: _ === e.modelValue ? s(k, "toggleColor") : s(k, "color"), textColor: _ === e.modelValue ? s(k, "toggleTextColor") : s(k, "textColor"), noCaps: s(k, "noCaps") === true, noWrap: s(k, "noWrap") === true, size: s(k, "size"), padding: s(k, "padding"), ripple: s(k, "ripple"), stack: s(k, "stack") === true, stretch: s(k, "stretch") === true, onClick(p) {
      c(_, h, p);
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
    return e.name !== void 0 && e.disable !== true && l.value === true && r(h, "push"), kt(t.default, h);
  }
  return () => d(hm, { class: "q-btn-toggle", ...o.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, v);
} });
var Em = ve({ name: "QCard", props: { ...nt, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n), a = f(() => "q-card" + (l.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => d(e.tag, { class: a.value }, Pe(t.default));
} }), Pl = ve({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => d(e.tag, { class: n.value }, Pe(t.default));
} }), op = ve({ name: "QCardActions", props: { ...bs, vertical: Boolean }, setup(e, { slots: t }) {
  const n = ys(e), l = f(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => d("div", { class: l.value }, Pe(t.default));
} }), Ms = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true }, ip = Object.keys(Ms);
Ms.all = true;
function Lo(e) {
  const t = {};
  for (const n of ip) e[n] === true && (t[n] = true);
  return Object.keys(t).length === 0 ? Ms : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
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
var cp = Rn({ name: "touch-swipe", beforeMount(e, { value: t, arg: n, modifiers: l }) {
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
      He(o);
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
    r.direction.vertical === true && s < h && s < 100 && g > r.sensitivity[0] && (r.event.dir = v < 0 ? "up" : "down"), r.direction.horizontal === true && s > h && h < 100 && m > r.sensitivity[0] && (r.event.dir = c < 0 ? "left" : "right"), r.direction.up === true && s < h && v < 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "up"), r.direction.down === true && s < h && v > 0 && s < 100 && g > r.sensitivity[0] && (r.event.dir = "down"), r.direction.left === true && s > h && c < 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "left"), r.direction.right === true && s > h && c > 0 && h < 100 && m > r.sensitivity[0] && (r.event.dir = "right"), r.event.dir !== false ? (He(o), r.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Mn(), r.styleCleanup = (_) => {
      r.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      const w = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      _ === true ? setTimeout(w, 50) : w();
    }), r.handler({ evt: o, touch: r.event.mouse !== true, mouse: r.event.mouse, direction: r.event.dir, duration: i, distance: { x: s, y: h } })) : r.end(o);
  }, end(o) {
    var _a2;
    r.event !== void 0 && (Wt(r, "temp"), ze.is.firefox === true && va(e, false), (_a2 = r.styleCleanup) == null ? void 0 : _a2.call(r, true), o !== void 0 && r.event.dir !== false && He(o), r.event = void 0);
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
var Es = { name: { required: true }, disable: Boolean }, ed = { setup(e, { slots: t }) {
  return () => d("div", { class: "q-panel scroll", role: "tabpanel" }, Pe(t.default));
} }, As = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number }, Rs = ["update:modelValue", "beforeTransition", "transition"];
function $s() {
  const { props: e, emit: t, proxy: n } = Se(), { getCache: l } = Pr(), { registerTimeout: a } = Xn();
  let r, o;
  const i = Q(null), u = { value: null };
  function c(C) {
    const D = e.vertical === true ? "up" : "left";
    N((n.$q.lang.rtl === true ? -1 : 1) * (C.direction === D ? 1 : -1));
  }
  const s = f(() => [[cp, c, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), v = f(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), h = f(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), m = f(() => `--q-transition-duration: ${e.transitionDuration}ms`), g = f(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), _ = f(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), w = f(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  he(() => e.modelValue, (C, D) => {
    const H = b(C) === true ? x(C) : -1;
    o !== true && O(H === -1 ? 0 : H < x(D) ? -1 : 1), u.value !== H && (u.value = H, t("beforeTransition", C, D), a(() => {
      t("transition", C, D);
    }, e.transitionDuration));
  });
  function k() {
    N(1);
  }
  function p() {
    N(-1);
  }
  function y(C) {
    t("update:modelValue", C);
  }
  function b(C) {
    return C != null && C !== "";
  }
  function x(C) {
    return r.findIndex((D) => D.props.name === C && D.props.disable !== "" && D.props.disable !== true);
  }
  function B() {
    return r.filter((C) => C.props.disable !== "" && C.props.disable !== true);
  }
  function O(C) {
    const D = C !== 0 && e.animated === true && u.value !== -1 ? "q-transition--" + (C === -1 ? v.value : h.value) : null;
    i.value !== D && (i.value = D);
  }
  function N(C, D = u.value) {
    let H = D + C;
    for (; H !== -1 && H < r.length; ) {
      const $ = r[H];
      if ($ !== void 0 && $.props.disable !== "" && $.props.disable !== true) {
        O(C), o = true, t("update:modelValue", $.props.name), setTimeout(() => {
          o = false;
        });
        return;
      }
      H += C;
    }
    e.infinite === true && r.length !== 0 && D !== -1 && D !== r.length && N(C, C === -1 ? r.length : -1);
  }
  function T() {
    const C = x(e.modelValue);
    return u.value !== C && (u.value = C), true;
  }
  function M() {
    const C = b(e.modelValue) === true && T() && r[u.value];
    return e.keepAlive === true ? [d(rv, _.value, [d(w.value === true ? l(g.value, () => ({ ...ed, name: g.value })) : ed, { key: g.value, style: m.value }, () => C)])] : [d("div", { class: "q-panel scroll", style: m.value, key: g.value, role: "tabpanel" }, [C])];
  }
  function L() {
    if (r.length !== 0) return e.animated === true ? [d(Ft, { name: i.value }, M)] : M();
  }
  function q(C) {
    return r = ps(Pe(C.default, [])).filter((D) => D.props !== null && D.props.slot === void 0 && b(D.props.name) === true), r.length;
  }
  function E() {
    return r;
  }
  return Object.assign(n, { next: k, previous: p, goTo: y }), { panelIndex: u, panelDirectives: s, updatePanelsList: q, updatePanelIndex: T, getPanelContent: L, getEnabledPanels: B, getPanels: E, isValidPanelName: b, keepAliveProps: _, needsUniqueKeepAliveWrapper: w, goToPanelByOffset: N, goToPanel: y, nextPanel: k, previousPanel: p };
}
var Fa = 0, Ps = { fullscreen: Boolean, noRouteFullscreenExit: Boolean }, Ls = ["update:fullscreen", "fullscreen"];
function Bs() {
  const e = Se(), { props: t, emit: n, proxy: l } = e;
  let a, r, o;
  const i = Q(false);
  _s(e) === true && he(() => l.$route.fullPath, () => {
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
    i.value !== true && (i.value = true, o = l.$el.parentNode, o.replaceChild(r, l.$el), document.body.appendChild(l.$el), Fa++, Fa === 1 && document.body.classList.add("q-body--fullscreen-mixin"), a = { handler: s }, yr.add(a));
  }
  function s() {
    i.value === true && (a !== void 0 && (yr.remove(a), a = void 0), o.replaceChild(l.$el, r), i.value = false, Fa = Math.max(0, Fa - 1), Fa === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), l.$el.scrollIntoView !== void 0 && setTimeout(() => {
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
ve({ name: "QCarousel", props: { ...nt, ...As, ...Ps, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => fp.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => dp.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Ls, ...Rs], setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = lt(e, n);
  let a = null, r;
  const { updatePanelsList: o, getPanelContent: i, panelDirectives: u, goToPanel: c, previousPanel: s, nextPanel: v, getEnabledPanels: h, panelIndex: m } = $s(), { inFullscreen: g } = Bs(), _ = f(() => g.value !== true && e.height !== void 0 ? { height: e.height } : {}), w = f(() => e.vertical === true ? "vertical" : "horizontal"), k = f(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), p = f(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (g.value === true ? " fullscreen" : "") + (l.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${k.value}` : "")), y = f(() => {
    const M = [e.prevIcon || n.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && n.lang.rtl === true ? M.reverse() : M;
  }), b = f(() => e.navigationIcon || n.iconSet.carousel.navigationIcon), x = f(() => e.navigationActiveIcon || b.value), B = f(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  he(() => e.modelValue, () => {
    e.autoplay && O();
  }), he(() => e.autoplay, (M) => {
    M ? O() : a !== null && (clearTimeout(a), a = null);
  });
  function O() {
    const M = pr(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    a !== null && clearTimeout(a), a = setTimeout(() => {
      a = null, M >= 0 ? v() : s();
    }, M);
  }
  ft(() => {
    e.autoplay && O();
  }), Ke(() => {
    a !== null && clearTimeout(a);
  });
  function N(M, L) {
    return d("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${M} q-carousel__navigation--${k.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [d("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, h().map(L))]);
  }
  function T() {
    const M = [];
    if (e.navigation === true) {
      const L = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (E) => d(Ze, { key: "nav" + E.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${E.active === true ? "" : "in"}active`, ...E.btnProps, onClick: E.onClick }), q = r - 1;
      M.push(N("buttons", (E, C) => {
        const D = E.props.name, H = m.value === C;
        return L({ index: C, maxIndex: q, name: D, active: H, btnProps: { icon: H === true ? x.value : b.value, size: "sm", ...B.value }, onClick: () => {
          c(D);
        } });
      }));
    } else if (e.thumbnails === true) {
      const L = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      M.push(N("thumbnails", (q) => {
        const E = q.props;
        return d("img", { key: "tmb#" + E.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${E.name === e.modelValue ? "" : "in"}active` + L, src: E.imgSrc || E["img-src"], onClick: () => {
          c(E.name);
        } });
      }));
    }
    return e.arrows === true && m.value >= 0 && ((e.infinite === true || m.value > 0) && M.push(d("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[0], ...B.value, onClick: s })])), (e.infinite === true || m.value < r - 1) && M.push(d("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center` }, [d(Ze, { icon: y.value[1], ...B.value, onClick: v })]))), kt(t.control, M);
  }
  return () => (r = o(t), d("div", { class: p.value, style: _.value }, [pn("div", { class: "q-carousel__slides-container" }, i(), "sl-cont", e.swipeable, () => u.value)].concat(T())));
} });
ve({ name: "QCarouselSlide", props: { ...Es, imgSrc: String }, setup(e, { slots: t }) {
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
    t.name !== void 0 ? v.push(d("div", { class: `q-message-name q-message-name--${n.value}` }, t.name())) : e.name !== void 0 && v.push(d("div", { class: `q-message-name q-message-name--${n.value}`, [i.value.name]: e.name })), t.default !== void 0 ? v.push(c(ps(t.default()), true)) : e.text !== void 0 && v.push(c(e.text)), s.push(d("div", { class: o.value }, v));
    const h = [];
    return t.label !== void 0 ? h.push(d("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && h.push(d("div", { class: "q-message-label", [i.value.label]: e.label })), h.push(d("div", { class: r.value }, s)), d("div", { class: `q-message q-message-${n.value}` }, h);
  };
} });
function Am(e, t) {
  const n = Q(null), l = f(() => e.disable === true ? null : d("span", { ref: n, class: "no-outline", tabindex: -1 }));
  function a(r) {
    const o = t.value;
    (r == null ? void 0 : r.qAvoidFocus) !== true && ((r == null ? void 0 : r.type.indexOf("key")) === 0 ? document.activeElement !== o && (o == null ? void 0 : o.contains(document.activeElement)) === true && o.focus() : n.value !== null && (r === void 0 || (o == null ? void 0 : o.contains(r.target)) === true) && n.value.focus());
  }
  return { refocusTargetEl: l, refocusTarget: a };
}
var Rm = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 }, $m = { ...nt, ...Jn, ...wn, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, Pm = ["update:modelValue"];
function Lm(e, t) {
  const { props: n, slots: l, emit: a, proxy: r } = Se(), { $q: o } = r, i = lt(n, o), u = Q(null), { refocusTargetEl: c, refocusTarget: s } = Am(n, u), v = el(n, Rm), h = f(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = f(() => {
    const q = Ye(n.val);
    return h.value === true ? n.modelValue.findIndex((E) => Ye(E) === q) : -1;
  }), g = f(() => h.value === true ? m.value !== -1 : Ye(n.modelValue) === Ye(n.trueValue)), _ = f(() => h.value === true ? m.value === -1 : Ye(n.modelValue) === Ye(n.falseValue)), w = f(() => g.value === false && _.value === false), k = f(() => n.disable === true ? -1 : n.tabindex || 0), p = f(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === true ? " disabled" : "") + (i.value === true ? ` q-${e}--dark` : "") + (n.dense === true ? ` q-${e}--dense` : "") + (n.leftLabel === true ? " reverse" : "")), y = f(() => {
    const q = g.value === true ? "truthy" : _.value === true ? "falsy" : "indet", E = n.color !== void 0 && (n.keepColor === true || (e === "toggle" ? g.value === true : _.value !== true)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${E}`;
  }), b = f(() => {
    const q = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(q, { ".checked": g.value, "^checked": g.value === true ? "checked" : void 0, name: n.name, value: h.value === true ? n.val : n.trueValue }), q;
  }), x = Sl(b), B = f(() => {
    const q = { tabindex: k.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": n.label, "aria-checked": w.value === true ? "mixed" : g.value === true ? "true" : "false" };
    return n.disable === true && (q["aria-disabled"] = "true"), q;
  });
  function O(q) {
    q !== void 0 && (He(q), s(q)), n.disable !== true && a("update:modelValue", N(), q);
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
    } else if (_.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) return n.trueValue;
    } else return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function T(q) {
    (q.keyCode === 13 || q.keyCode === 32) && He(q);
  }
  function M(q) {
    (q.keyCode === 13 || q.keyCode === 32) && O(q);
  }
  const L = t(g, w);
  return Object.assign(r, { toggle: O }), () => {
    const q = L();
    n.disable !== true && x(q, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    const E = [d("div", { class: y.value, style: v.value, "aria-hidden": "true" }, q)];
    c.value !== null && E.push(c.value);
    const C = n.label !== void 0 ? kt(l.default, [n.label]) : Pe(l.default);
    return C !== void 0 && E.push(d("div", { class: `q-${e}__label q-anchor--skip` }, C)), d("div", { ref: u, class: p.value, ...B.value, onClick: O, onKeydown: T, onKeyup: M }, E);
  };
}
var vp = () => d("div", { key: "svg", class: "q-checkbox__bg absolute" }, [d("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [d("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), d("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]), ir = ve({ name: "QCheckbox", props: $m, emits: Pm, setup(e) {
  const t = vp();
  function n(l, a) {
    const r = f(() => (l.value === true ? e.checkedIcon : a.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => r.value !== null ? [d("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-checkbox__icon", name: r.value })])] : [t];
  }
  return Lm("checkbox", n);
} }), mp = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 }, Bm = ve({ name: "QChip", props: { ...nt, ...Jn, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = el(e, mp), o = f(() => e.selected === true || e.icon !== void 0), i = f(() => e.selected === true ? e.iconSelected || l.iconSet.chip.selected : e.icon), u = f(() => e.iconRemove || l.iconSet.chip.remove), c = f(() => e.disable === false && (e.clickable === true || e.selected !== null)), s = f(() => {
    const w = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (a.value === true ? " q-chip--dark q-dark" : "");
  }), v = f(() => {
    const w = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, k = { ...w, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || l.lang.label.remove };
    return { chip: w, remove: k };
  });
  function h(w) {
    w.keyCode === 13 && m(w);
  }
  function m(w) {
    e.disable || (n("update:selected", !e.selected), n("click", w));
  }
  function g(w) {
    (w.keyCode === void 0 || w.keyCode === 13) && (He(w), e.disable === false && (n("update:modelValue", false), n("remove")));
  }
  function _() {
    const w = [];
    c.value === true && w.push(d("div", { class: "q-focus-helper" })), o.value === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--left", name: i.value }));
    const k = e.label !== void 0 ? [d("div", { class: "ellipsis" }, [e.label])] : void 0;
    return w.push(d("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, gs(t.default, k))), e.iconRight && w.push(d(et, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && w.push(d(et, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: u.value, ...v.value.remove, onClick: g, onKeyup: g })), w;
  }
  return () => {
    if (e.modelValue === false) return;
    const w = { class: s.value, style: r.value };
    return c.value === true && Object.assign(w, v.value.chip, { onClick: m, onKeyup: h }), pn("div", w, _(), "ripple", e.ripple !== false && e.disable !== true, () => [[ai, e.ripple]]);
  };
} }), Fs = { ...Jn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean }, Bu = 50, Fm = 2 * Bu, Om = Fm * Math.PI, hp = Math.round(Om * 1e3) / 1e3, Vm = ve({ name: "QCircularProgress", props: { ...Fs, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = el(e), a = f(() => {
    const m = (n.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (n.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - m}deg)` : `rotate3d(0, 0, 1, ${m - 90}deg)` };
  }), r = f(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), o = f(() => Fm / (1 - e.thickness / 2)), i = f(() => `${o.value / 2} ${o.value / 2} ${o.value} ${o.value}`), u = f(() => ct(e.value, e.min, e.max)), c = f(() => e.max - e.min), s = f(() => e.thickness / 2 * o.value), v = f(() => {
    const m = (e.max - u.value) / c.value, g = e.rounded === true && u.value < e.max && m < 0.25 ? s.value / 2 * (1 - m / 0.25) : 0;
    return Om * m + g;
  });
  function h({ thickness: m, offset: g, color: _, cls: w, rounded: k }) {
    return d("circle", { class: "q-circular-progress__" + w + (_ !== void 0 ? ` text-${_}` : ""), style: r.value, fill: "transparent", stroke: "currentColor", "stroke-width": m, "stroke-dasharray": hp, "stroke-dashoffset": g, "stroke-linecap": k, cx: o.value, cy: o.value, r: Bu });
  }
  return () => {
    const m = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && m.push(d("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: Bu - s.value / 2, cx: o.value, cy: o.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && m.push(h({ cls: "track", thickness: s.value, offset: 0, color: e.trackColor })), m.push(h({ cls: "circle", thickness: s.value, offset: v.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    const g = [d("svg", { class: "q-circular-progress__svg", style: a.value, viewBox: i.value, "aria-hidden": "true" }, m)];
    return e.showValue === true && g.push(d("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [d("div", u.value)])), d("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: l.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : u.value }, gs(t.internal, g));
  };
} });
function Fi(e, t, n) {
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
var gp = 0, gn = Rn({ name: "touch-pan", beforeMount(e, { value: t, modifiers: n }) {
  if (n.mouse !== true && ze.has.touch !== true) return;
  function l(r, o) {
    n.mouse === true && o === true ? He(r) : (n.stop === true && wt(r), n.prevent === true && Vt(r));
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
      const { payload: m, synthetic: g } = Fi(r, a, false);
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
      if (Wt(a, "temp"), ze.is.firefox === true && va(e, false), o === true) (_a2 = a.styleCleanup) == null ? void 0 : _a2.call(a), a.event.detected !== true && a.initialEvent !== void 0 && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
      else if (a.event.detected === true) {
        a.event.isFirst === true && a.handler(Fi(r === void 0 ? a.lastEvt : r, a).payload);
        const { payload: i } = Fi(r === void 0 ? a.lastEvt : r, a, true), u = () => {
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
} }), td = "q-slider__marker-labels", bp = (e) => ({ value: e }), yp = ({ marker: e }) => d("div", { key: e.value, style: e.style, class: e.classes }, e.label), Os = [34, 37, 40, 33, 39, 38], Im = { ...nt, ...wn, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } }, zm = ["pan", "update:modelValue", "change"];
function Dm({ updateValue: e, updatePosition: t, getDragging: n, formAttrs: l }) {
  const { props: a, emit: r, slots: o, proxy: { $q: i } } = Se(), u = lt(a, i), c = Sl(l), s = Q(false), v = Q(false), h = Q(false), m = Q(false), g = f(() => a.vertical === true ? "--v" : "--h"), _ = f(() => "-" + (a.switchLabelSide === true ? "switched" : "standard")), w = f(() => a.vertical === true ? a.reverse === true : a.reverse !== (i.lang.rtl === true)), k = f(() => isNaN(a.innerMin) === true || a.innerMin < a.min ? a.min : a.innerMin), p = f(() => isNaN(a.innerMax) === true || a.innerMax > a.max ? a.max : a.innerMax), y = f(() => a.disable !== true && a.readonly !== true && k.value < p.value), b = f(() => {
    if (a.step === 0) return (pe) => pe;
    const ae = (String(a.step).trim().split(".")[1] || "").length;
    return (pe) => parseFloat(pe.toFixed(ae));
  }), x = f(() => a.step === 0 ? 1 : a.step), B = f(() => y.value === true ? a.tabindex || 0 : -1), O = f(() => a.max - a.min), N = f(() => p.value - k.value), T = f(() => we(k.value)), M = f(() => we(p.value)), L = f(() => a.vertical === true ? w.value === true ? "bottom" : "top" : w.value === true ? "right" : "left"), q = f(() => a.vertical === true ? "height" : "width"), E = f(() => a.vertical === true ? "width" : "height"), C = f(() => a.vertical === true ? "vertical" : "horizontal"), D = f(() => {
    const ae = { role: "slider", "aria-valuemin": k.value, "aria-valuemax": p.value, "aria-orientation": C.value, "data-step": a.step };
    return a.disable === true ? ae["aria-disabled"] = "true" : a.readonly === true && (ae["aria-readonly"] = "true"), ae;
  }), H = f(() => `q-slider q-slider${g.value} q-slider--${s.value === true ? "" : "in"}active inline no-wrap ` + (a.vertical === true ? "row" : "column") + (a.disable === true ? " disabled" : " q-slider--enabled" + (y.value === true ? " q-slider--editable" : "")) + (h.value === "both" ? " q-slider--focus" : "") + (a.label || a.labelAlways === true ? " q-slider--label" : "") + (a.labelAlways === true ? " q-slider--label-always" : "") + (u.value === true ? " q-slider--dark" : "") + (a.dense === true ? " q-slider--dense q-slider--dense" + g.value : ""));
  function $(ae) {
    const pe = "q-slider__" + ae;
    return `${pe} ${pe}${g.value} ${pe}${g.value}${_.value}`;
  }
  function j(ae) {
    const pe = "q-slider__" + ae;
    return `${pe} ${pe}${g.value}`;
  }
  const te = f(() => {
    const ae = a.selectionColor || a.color;
    return "q-slider__selection absolute" + (ae !== void 0 ? ` text-${ae}` : "");
  }), ye = f(() => j("markers") + " absolute overflow-hidden"), K = f(() => j("track-container")), A = f(() => $("pin")), J = f(() => $("label")), X = f(() => $("text-container")), ge = f(() => $("marker-labels-container") + (a.markerLabelsClass !== void 0 ? ` ${a.markerLabelsClass}` : "")), F = f(() => "q-slider__track relative-position no-outline" + (a.trackColor !== void 0 ? ` bg-${a.trackColor}` : "")), P = f(() => {
    const ae = { [E.value]: a.trackSize };
    return a.trackImg !== void 0 && (ae.backgroundImage = `url(${a.trackImg}) !important`), ae;
  }), ee = f(() => "q-slider__inner absolute" + (a.innerTrackColor !== void 0 ? ` bg-${a.innerTrackColor}` : "")), V = f(() => {
    const ae = M.value - T.value, pe = { [L.value]: `${100 * T.value}%`, [q.value]: ae === 0 ? "2px" : `${100 * ae}%` };
    return a.innerTrackImg !== void 0 && (pe.backgroundImage = `url(${a.innerTrackImg}) !important`), pe;
  });
  function re(ae) {
    const { min: pe, max: Ce, step: Oe } = a;
    let Ae = pe + ae * (Ce - pe);
    if (Oe > 0) {
      const We = (Ae - k.value) % Oe;
      Ae += (Math.abs(We) >= Oe / 2 ? (We < 0 ? -1 : 1) * Oe : 0) - We;
    }
    return Ae = b.value(Ae), ct(Ae, k.value, p.value);
  }
  function we(ae) {
    return O.value === 0 ? 0 : (ae - a.min) / O.value;
  }
  function S(ae, pe) {
    const Ce = en(ae), Oe = a.vertical === true ? ct((Ce.top - pe.top) / pe.height, 0, 1) : ct((Ce.left - pe.left) / pe.width, 0, 1);
    return ct(w.value === true ? 1 - Oe : Oe, T.value, M.value);
  }
  const R = f(() => pr(a.markers) === true ? a.markers : x.value), z = f(() => {
    const ae = [], pe = R.value, Ce = a.max;
    let Oe = a.min;
    do
      ae.push(Oe), Oe += pe;
    while (Oe < Ce);
    return ae.push(Ce), ae;
  }), Z = f(() => {
    const ae = ` ${td}${g.value}-`;
    return td + `${ae}${a.switchMarkerLabelsSide === true ? "switched" : "standard"}${ae}${w.value === true ? "rtl" : "ltr"}`;
  }), ne = f(() => a.markerLabels === false ? null : me(a.markerLabels).map((ae, pe) => ({ index: pe, value: ae.value, label: ae.label || ae.value, classes: Z.value + (ae.classes !== void 0 ? " " + ae.classes : ""), style: { ...fe(ae.value), ...ae.style || {} } }))), W = f(() => ({ markerList: ne.value, markerMap: ce.value, classes: Z.value, getStyle: fe })), de = f(() => {
    const ae = N.value === 0 ? "2px" : 100 * R.value / N.value;
    return { ...V.value, backgroundSize: a.vertical === true ? `2px ${ae}%` : `${ae}% 2px` };
  });
  function me(ae) {
    if (ae === false) return null;
    if (ae === true) return z.value.map(bp);
    if (typeof ae == "function") return z.value.map((Ce) => {
      const Oe = ae(Ce);
      return Rt(Oe) === true ? { ...Oe, value: Ce } : { value: Ce, label: Oe };
    });
    const pe = ({ value: Ce }) => Ce >= a.min && Ce <= a.max;
    return Array.isArray(ae) === true ? ae.map((Ce) => Rt(Ce) === true ? Ce : { value: Ce }).filter(pe) : Object.keys(ae).map((Ce) => {
      const Oe = ae[Ce], Ae = Number(Ce);
      return Rt(Oe) === true ? { ...Oe, value: Ae } : { value: Ae, label: Oe };
    }).filter(pe);
  }
  function fe(ae) {
    return { [L.value]: `${100 * (ae - a.min) / O.value}%` };
  }
  const ce = f(() => {
    if (a.markerLabels === false) return null;
    const ae = {};
    return ne.value.forEach((pe) => {
      ae[pe.value] = pe;
    }), ae;
  });
  function le() {
    if (o["marker-label-group"] !== void 0) return o["marker-label-group"](W.value);
    const ae = o["marker-label"] || yp;
    return ne.value.map((pe) => ae({ marker: pe, ...W.value }));
  }
  const U = f(() => [[gn, oe, void 0, { [C.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
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
  function Ne(ae) {
    Os.includes(ae.keyCode) && e(true);
  }
  function Ve(ae) {
    if (a.vertical === true) return null;
    const pe = i.lang.rtl !== a.reverse ? 1 - ae : ae;
    return { transform: `translateX(calc(${2 * pe - 1} * ${a.thumbSize} / 2 + ${50 - 100 * pe}%))` };
  }
  function ie(ae) {
    const pe = f(() => v.value === false && (h.value === ae.focusValue || h.value === "both") ? " q-slider--focus" : ""), Ce = f(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === true ? "rtl" : "ltr"} absolute non-selectable` + pe.value + (ae.thumbColor.value !== void 0 ? ` text-${ae.thumbColor.value}` : "")), Oe = f(() => ({ width: a.thumbSize, height: a.thumbSize, [L.value]: `${100 * ae.ratio.value}%`, zIndex: h.value === ae.focusValue ? 2 : void 0 })), Ae = f(() => ae.labelColor.value !== void 0 ? ` text-${ae.labelColor.value}` : ""), We = f(() => Ve(ae.ratio.value)), it = f(() => "q-slider__text" + (ae.labelTextColor.value !== void 0 ? ` text-${ae.labelTextColor.value}` : ""));
    return () => {
      const xt = [d("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [d("path", { d: a.thumbPath })]), d("div", { class: "q-slider__focus-ring fit" })];
      return (a.label === true || a.labelAlways === true) && (xt.push(d("div", { class: A.value + " absolute fit no-pointer-events" + Ae.value }, [d("div", { class: J.value, style: { minWidth: a.thumbSize } }, [d("div", { class: X.value, style: We.value }, [d("span", { class: it.value }, ae.label.value)])])])), a.name !== void 0 && a.disable !== true && c(xt, "push")), d("div", { class: Ce.value, style: Oe.value, ...ae.getNodeData() }, xt);
    };
  }
  function be(ae, pe, Ce, Oe) {
    const Ae = [];
    a.innerTrackColor !== "transparent" && Ae.push(d("div", { key: "inner", class: ee.value, style: V.value })), a.selectionColor !== "transparent" && Ae.push(d("div", { key: "selection", class: te.value, style: ae.value })), a.markers !== false && Ae.push(d("div", { key: "marker", class: ye.value, style: de.value })), Oe(Ae);
    const We = [pn("div", { key: "trackC", class: K.value, tabindex: pe.value, ...Ce.value }, [d("div", { class: F.value, style: P.value }, Ae)], "slide", y.value, () => U.value)];
    if (a.markerLabels !== false) {
      const it = a.switchMarkerLabelsSide === true ? "unshift" : "push";
      We[it](d("div", { key: "markerL", class: ge.value }, le()));
    }
    return We;
  }
  return Ke(() => {
    document.removeEventListener("mouseup", qe, true);
  }), { state: { active: s, focus: h, preventFocus: v, dragging: m, editable: y, classes: H, tabindex: B, attributes: D, roundValueFn: b, keyStep: x, trackLen: O, innerMin: k, innerMinRatio: T, innerMax: p, innerMaxRatio: M, positionProp: L, sizeProp: q, isReversed: w }, methods: { onActivate: ke, onMobileClick: Me, onBlur: _e, onKeyup: Ne, getContent: be, getThumbRenderFn: ie, convertRatioToModel: re, convertModelToRatio: we, getDraggingRatio: S } };
}
var pp = () => ({}), Jl = ve({ name: "QSlider", props: { ...Im, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: zm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Dm({ updateValue: g, updatePosition: w, getDragging: _, formAttrs: $r(e) }), r = Q(null), o = Q(0), i = Q(0);
  function u() {
    i.value = e.modelValue === null ? l.innerMin.value : ct(e.modelValue, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, u), u();
  const c = f(() => a.convertModelToRatio(i.value)), s = f(() => l.active.value === true ? o.value : c.value), v = f(() => {
    const y = { [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`, [l.sizeProp.value]: `${100 * (s.value - l.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (y.backgroundImage = `url(${e.selectionImg}) !important`), y;
  }), h = a.getThumbRenderFn({ focusValue: true, getNodeData: pp, ratio: s, label: f(() => e.labelValue !== void 0 ? e.labelValue : i.value), thumbColor: f(() => e.thumbColor || e.color), labelColor: f(() => e.labelColor), labelTextColor: f(() => e.labelTextColor) }), m = f(() => l.editable.value !== true ? {} : n.platform.is.mobile === true ? { onClick: a.onMobileClick } : { onMousedown: a.onActivate, onFocus: k, onBlur: a.onBlur, onKeydown: p, onKeyup: a.onKeyup });
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
  function k() {
    l.focus.value = true;
  }
  function p(y) {
    if (Os.includes(y.keyCode) === false) return;
    He(y);
    const b = ([34, 33].includes(y.keyCode) ? 10 : 1) * l.keyStep.value, x = ([34, 37, 40].includes(y.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * b;
    i.value = ct(l.roundValueFn.value(i.value + x), l.innerMin.value, l.innerMax.value), g();
  }
  return () => {
    const y = a.getContent(v, l.tabindex, m, (b) => {
      b.push(h());
    });
    return d("div", { ref: r, class: l.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue }, y);
  };
} });
function Nm() {
  const e = Q(!nn.value);
  return e.value === false && ft(() => {
    e.value = true;
  }), { isHydrated: e };
}
var Hm = typeof ResizeObserver < "u", nd = Hm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" }, Nl = ve({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
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
  if (i.trigger = r, Hm === true) {
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
    const { isHydrated: s } = Nm();
    let v;
    return ft(() => {
      Ge(() => {
        l = i.$el, l && c();
      });
    }), Ke(u), () => {
      if (s.value === true) return d("object", { class: "q--avoid-card-border", style: nd.style, tabindex: -1, type: "text/html", data: nd.url, "aria-hidden": "true", onLoad: c });
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
var wp = ["left", "center", "right", "justify"], Fu = ve({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => wp.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, { registerTick: r } = ga(), { registerTick: o } = ga(), { registerTick: i } = ga(), { registerTimeout: u, removeTimeout: c } = Xn(), { registerTimeout: s, removeTimeout: v } = Xn(), h = Q(null), m = Q(null), g = Q(e.modelValue), _ = Q(false), w = Q(true), k = Q(false), p = Q(false), y = [], b = Q(0), x = Q(false);
  let B = null, O = null, N;
  const T = f(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: _p(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), M = f(() => {
    const le = b.value, U = g.value;
    for (let oe = 0; oe < le; oe++) if (y[oe].name.value === U) return true;
    return false;
  }), L = f(() => `q-tabs__content--align-${_.value === true ? "left" : p.value === true ? "justify" : e.align}`), q = f(() => `q-tabs row no-wrap items-center q-tabs--${_.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), E = f(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + L.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), C = f(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), D = f(() => e.vertical !== true && a.lang.rtl === true), H = f(() => Sr === false && D.value === true);
  he(D, A), he(() => e.modelValue, (le) => {
    $({ name: le, setCurrent: true, skipEmit: true });
  }), he(() => e.outsideArrows, j);
  function $({ name: le, setCurrent: U, skipEmit: oe }) {
    g.value !== le && (oe !== true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", le), (U === true || e["onUpdate:modelValue"] === void 0) && (ye(g.value, le), g.value = le));
  }
  function j() {
    r(() => {
      h.value && te({ width: h.value.offsetWidth, height: h.value.offsetHeight });
    });
  }
  function te(le) {
    if (C.value === void 0 || m.value === null) return;
    const U = le[C.value.container], oe = Math.min(m.value[C.value.scroll], Array.prototype.reduce.call(m.value.children, (ke, qe) => ke + (qe[C.value.content] || 0), 0)), _e = U > 0 && oe > U;
    _.value = _e, _e === true && o(A), p.value = U < parseInt(e.breakpoint, 10);
  }
  function ye(le, U) {
    const oe = le != null && le !== "" ? y.find((ke) => ke.name.value === le) : null, _e = U != null && U !== "" ? y.find((ke) => ke.name.value === U) : null;
    if (ce === true) ce = false;
    else if (oe && _e) {
      const ke = oe.tabIndicatorRef.value, qe = _e.tabIndicatorRef.value;
      B !== null && (clearTimeout(B), B = null), ke.style.transition = "none", ke.style.transform = "none", qe.style.transition = "none", qe.style.transform = "none";
      const Me = ke.getBoundingClientRect(), Ne = qe.getBoundingClientRect();
      qe.style.transform = e.vertical === true ? `translate3d(0,${Me.top - Ne.top}px,0) scale3d(1,${Ne.height ? Me.height / Ne.height : 1},1)` : `translate3d(${Me.left - Ne.left}px,0,0) scale3d(${Ne.width ? Me.width / Ne.width : 1},1,1)`, i(() => {
        B = setTimeout(() => {
          B = null, qe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", qe.style.transform = "none";
        }, 70);
      });
    }
    _e && _.value === true && K(_e.rootRef.value);
  }
  function K(le) {
    const { left: U, width: oe, top: _e, height: ke } = m.value.getBoundingClientRect(), qe = le.getBoundingClientRect();
    let Me = e.vertical === true ? qe.top - _e : qe.left - U;
    if (Me < 0) {
      m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Me), A();
      return;
    }
    Me += e.vertical === true ? qe.height - ke : qe.width - oe, Me > 0 && (m.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Me), A());
  }
  function A() {
    const le = m.value;
    if (le === null) return;
    const U = le.getBoundingClientRect(), oe = e.vertical === true ? le.scrollTop : Math.abs(le.scrollLeft);
    D.value === true ? (w.value = Math.ceil(oe + U.width) < le.scrollWidth - 1, k.value = oe > 0) : (w.value = oe > 0, k.value = e.vertical === true ? Math.ceil(oe + U.height) < le.scrollHeight : Math.ceil(oe + U.width) < le.scrollWidth);
  }
  function J(le) {
    O !== null && clearInterval(O), O = setInterval(() => {
      V(le) === true && F();
    }, 5);
  }
  function X() {
    J(H.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function ge() {
    J(H.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function F() {
    O !== null && (clearInterval(O), O = null);
  }
  function P(le, U) {
    const oe = Array.prototype.filter.call(m.value.children, (Ne) => Ne === U || Ne.matches && Ne.matches(".q-tab.q-focusable") === true), _e = oe.length;
    if (_e === 0) return;
    if (le === 36) return K(oe[0]), oe[0].focus(), true;
    if (le === 35) return K(oe[_e - 1]), oe[_e - 1].focus(), true;
    const ke = le === (e.vertical === true ? 38 : 37), qe = le === (e.vertical === true ? 40 : 39), Me = ke === true ? -1 : qe === true ? 1 : void 0;
    if (Me !== void 0) {
      const Ne = D.value === true ? -1 : 1, Ve = oe.indexOf(U) + Me * Ne;
      return Ve >= 0 && Ve < _e && (K(oe[Ve]), oe[Ve].focus({ preventScroll: true })), true;
    }
  }
  const ee = f(() => H.value === true ? { get: (le) => Math.abs(le.scrollLeft), set: (le, U) => {
    le.scrollLeft = -U;
  } } : e.vertical === true ? { get: (le) => le.scrollTop, set: (le, U) => {
    le.scrollTop = U;
  } } : { get: (le) => le.scrollLeft, set: (le, U) => {
    le.scrollLeft = U;
  } });
  function V(le) {
    const U = m.value, { get: oe, set: _e } = ee.value;
    let ke = false, qe = oe(U);
    const Me = le < qe ? -1 : 1;
    return qe += Me * 5, qe < 0 ? (ke = true, qe = 0) : (Me === -1 && qe <= le || Me === 1 && qe >= le) && (ke = true, qe = le), _e(U, qe), A(), ke;
  }
  function re(le, U) {
    for (const oe in le) if (le[oe] !== U[oe]) return false;
    return true;
  }
  function we() {
    let le = null, U = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
    const oe = y.filter((Me) => {
      var _a2;
      return ((_a2 = Me.routeData) == null ? void 0 : _a2.hasRouterLink.value) === true;
    }), { hash: _e, query: ke } = l.$route, qe = Object.keys(ke).length;
    for (const Me of oe) {
      const Ne = Me.routeData.exact.value === true;
      if (Me.routeData[Ne === true ? "linkIsExactActive" : "linkIsActive"].value !== true) continue;
      const { hash: Ve, query: ie, matched: be, href: ae } = Me.routeData.resolvedLink.value, pe = Object.keys(ie).length;
      if (Ne === true) {
        if (Ve !== _e || pe !== qe || re(ke, ie) === false) continue;
        le = Me.name.value;
        break;
      }
      if (Ve !== "" && Ve !== _e || pe !== 0 && re(ie, ke) === false) continue;
      const Ce = { matchedLen: be.length, queryDiff: qe - pe, hrefLen: ae.length - Ve.length };
      if (Ce.matchedLen > U.matchedLen) {
        le = Me.name.value, U = Ce;
        continue;
      } else if (Ce.matchedLen !== U.matchedLen) continue;
      if (Ce.queryDiff < U.queryDiff) le = Me.name.value, U = Ce;
      else if (Ce.queryDiff !== U.queryDiff) continue;
      Ce.hrefLen > U.hrefLen && (le = Me.name.value, U = Ce);
    }
    if (le === null && y.some((Me) => Me.routeData === void 0 && Me.name.value === g.value) === true) {
      ce = false;
      return;
    }
    $({ name: le, setCurrent: true });
  }
  function S(le) {
    if (c(), x.value !== true && h.value !== null && le.target && typeof le.target.closest == "function") {
      const U = le.target.closest(".q-tab");
      U && h.value.contains(U) === true && (x.value = true, _.value === true && K(U));
    }
  }
  function R() {
    u(() => {
      x.value = false;
    }, 30);
  }
  function z() {
    de.avoidRouteWatcher === false ? s(we) : v();
  }
  function Z() {
    if (N === void 0) {
      const le = he(() => l.$route.fullPath, z);
      N = () => {
        le(), N = void 0;
      };
    }
  }
  function ne(le) {
    y.push(le), b.value++, j(), le.routeData === void 0 || l.$route === void 0 ? s(() => {
      if (_.value === true) {
        const U = g.value, oe = U != null && U !== "" ? y.find((_e) => _e.name.value === U) : null;
        oe && K(oe.rootRef.value);
      }
    }) : (Z(), le.routeData.hasRouterLink.value === true && z());
  }
  function W(le) {
    y.splice(y.indexOf(le), 1), b.value--, j(), N !== void 0 && le.routeData !== void 0 && (y.every((U) => U.routeData === void 0) === true && N(), z());
  }
  const de = { currentModel: g, tabProps: T, hasFocus: x, hasActiveTab: M, registerTab: ne, unregisterTab: W, verifyRouteModel: z, updateModel: $, onKbdNavigate: P, avoidRouteWatcher: false };
  hn(em, de);
  function me() {
    B !== null && clearTimeout(B), F(), N == null ? void 0 : N();
  }
  let fe, ce;
  return Ke(me), On(() => {
    fe = N !== void 0, me();
  }), _l(() => {
    fe === true && (Z(), ce = true, z()), j();
  }), () => d("div", { ref: h, class: q.value, role: "tablist", onFocusin: S, onFocusout: R }, [d(Nl, { onResize: te }), d("div", { ref: m, class: E.value, onScroll: A }, Pe(t.default)), d(et, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || a.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: X, onTouchstartPassive: X, onMouseupPassive: F, onMouseleavePassive: F, onTouchendPassive: F }), d(et, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (k.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || a.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: ge, onTouchstartPassive: ge, onMouseupPassive: F, onMouseleavePassive: F, onTouchendPassive: F })]);
} }), Sp = 0, jm = ["click", "keydown"], Um = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${Sp++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function Qm(e, t, n, l) {
  const a = qt(em, ot);
  if (a === ot) return console.error("QTab/QRouteTab component needs to be child of QTabs"), ot;
  const { proxy: r } = Se(), o = Q(null), i = Q(null), u = Q(null), c = f(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), s = f(() => a.currentModel.value === e.name), v = f(() => "q-tab relative-position self-stretch flex flex-center text-center" + (s.value === true ? " q-tab--active" + (a.tabProps.value.activeClass ? " " + a.tabProps.value.activeClass : "") + (a.tabProps.value.activeColor ? ` text-${a.tabProps.value.activeColor}` : "") + (a.tabProps.value.activeBgColor ? ` bg-${a.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && a.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || a.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (l !== void 0 ? l.linkClass.value : "")), h = f(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (a.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), m = f(() => e.disable === true || a.hasFocus.value === true || s.value === false && a.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function g(y, b) {
    var _a2;
    if (b !== true && (y == null ? void 0 : y.qAvoidFocus) !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), e.disable === true) {
      (l == null ? void 0 : l.hasRouterLink.value) === true && He(y);
      return;
    }
    if (l === void 0) {
      a.updateModel({ name: e.name }), n("click", y);
      return;
    }
    if (l.hasRouterLink.value === true) {
      const x = (B = {}) => {
        let O;
        const N = B.to === void 0 || kn(B.to, e.to) === true ? a.avoidRouteWatcher = wr() : null;
        return l.navigateToRouterLink(y, { ...B, returnRouterError: true }).catch((T) => {
          O = T;
        }).then((T) => {
          var _a3;
          if (N === a.avoidRouteWatcher && (a.avoidRouteWatcher = false, O === void 0 && (T === void 0 || ((_a3 = T.message) == null ? void 0 : _a3.startsWith("Avoided redundant navigation")) === true) && a.updateModel({ name: e.name })), B.returnRouterError === true) return O !== void 0 ? Promise.reject(O) : T;
        });
      };
      n("click", y, x), y.defaultPrevented !== true && x();
      return;
    }
    n("click", y);
  }
  function _(y) {
    yn(y, [13, 32]) ? g(y, true) : Ql(y) !== true && y.keyCode >= 35 && y.keyCode <= 40 && y.altKey !== true && y.metaKey !== true && a.onKbdNavigate(y.keyCode, r.$el) === true && He(y), n("keydown", y);
  }
  function w() {
    const y = a.tabProps.value.narrowIndicator, b = [], x = d("div", { ref: u, class: ["q-tab__indicator", a.tabProps.value.indicatorClass] });
    e.icon !== void 0 && b.push(d(et, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && b.push(d("div", { class: "q-tab__label" }, e.label)), e.alert !== false && b.push(e.alertIcon !== void 0 ? d(et, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : d("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), y === true && b.push(x);
    const B = [d("div", { class: "q-focus-helper", tabindex: -1, ref: o }), d("div", { class: h.value }, kt(t.default, b))];
    return y === false && B.push(x), B;
  }
  const k = { name: f(() => e.name), rootRef: i, tabIndicatorRef: u, routeData: l };
  Ke(() => {
    a.unregisterTab(k);
  }), ft(() => {
    a.registerTab(k);
  });
  function p(y, b) {
    const x = { ref: i, class: v.value, tabindex: m.value, role: "tab", "aria-selected": s.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: g, onKeydown: _, ...b };
    return sn(d(y, x, w()), [[ai, c.value]]);
  }
  return { renderTab: p, $tabs: a };
}
var Oa = ve({ name: "QTab", props: Um, emits: jm, setup(e, { slots: t, emit: n }) {
  const { renderTab: l } = Qm(e, t, n);
  return () => l("div");
} }), xp = ve({ name: "QTabPanels", props: { ...As, ...nt }, emits: Rs, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, getPanelContent: r, panelDirectives: o } = $s(), i = f(() => "q-tab-panels q-panel-parent" + (l.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (a(t), pn("div", { class: i.value }, r(), "pan", e.swipeable, () => o.value));
} }), Oi = ve({ name: "QTabPanel", props: Es, setup(e, { slots: t }) {
  return () => d("div", { class: "q-tab-panel", role: "tabpanel" }, Pe(t.default));
} }), ld = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, ad = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, rd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Hr = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, jr = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, oo = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => ld.test(e), hexaColor: (e) => ad.test(e), hexOrHexaColor: (e) => rd.test(e), rgbColor: (e) => Hr.test(e), rgbaColor: (e) => jr.test(e), rgbOrRgbaColor: (e) => Hr.test(e) || jr.test(e), hexOrRgbColor: (e) => ld.test(e) || Hr.test(e), hexaOrRgbaColor: (e) => ad.test(e) || jr.test(e), anyColor: (e) => rd.test(e) || Hr.test(e) || jr.test(e) }, Cp = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function od({ r: e, g: t, b: n, a: l }) {
  const a = l !== void 0;
  if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || a && l > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return l = a ? (Math.round(255 * l / 100) | 256).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + l;
}
function id({ r: e, g: t, b: n, a: l }) {
  return `rgb${l !== void 0 ? "a" : ""}(${e},${t},${n}${l !== void 0 ? "," + l / 100 : ""})`;
}
function Km(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function ud({ h: e, s: t, v: n, a: l }) {
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
var qp = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"], sd = "M5 5 h10 v10 h-10 v-10 z", Tp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
ve({ name: "QColor", props: { ...nt, ...wn, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), { getCache: r } = Pr(), o = Q(null), i = Q(null), u = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), s = Q(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), v = Q(e.defaultView), h = Q(q(e.modelValue || e.defaultValue)), m = f(() => e.disable !== true && e.readonly !== true), g = f(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), _ = f(() => u.value !== null ? u.value : g.value), w = f(() => ({ type: "hidden", name: e.name, value: h.value[_.value === true ? "hex" : "rgb"] })), k = Sl(w), p = f(() => c.value !== null ? c.value : h.value.a !== void 0), y = f(() => ({ backgroundColor: h.value.rgb || "#000" })), b = f(() => `q-color-picker__header-content q-color-picker__header-content--${(h.value.a !== void 0 && h.value.a < 65 ? true : kp(h.value) > 0.4) ? "light" : "dark"}`), x = f(() => ({ background: `hsl(${h.value.h},100%,50%)` })), B = f(() => ({ top: `${100 - h.value.v}%`, [l.lang.rtl === true ? "right" : "left"]: `${h.value.s}%` })), O = f(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : qp), N = f(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-color-picker--dark q-dark" : "")), T = f(() => e.disable === true ? { "aria-disabled": "true" } : {}), M = f(() => [[gn, te, void 0, { prevent: true, stop: true, mouse: true }]]);
  he(() => e.modelValue, (S) => {
    const R = q(S || e.defaultValue);
    R.hex !== h.value.hex && (h.value = R);
  }), he(() => e.defaultValue, (S) => {
    if (!e.modelValue && S) {
      const R = q(S);
      R.hex !== h.value.hex && (h.value = R);
    }
  });
  function L(S, R) {
    h.value.hex = od(S), h.value.rgb = id(S), h.value.r = S.r, h.value.g = S.g, h.value.b = S.b, h.value.a = S.a;
    const z = h.value[_.value === true ? "hex" : "rgb"];
    t("update:modelValue", z), R === true && t("change", z);
  }
  function q(S) {
    const R = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof S != "string" || S.length === 0 || oo.anyColor(S.replace(/ /g, "")) !== true) return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: R === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    const z = Wm(S);
    return R === true && z.a === void 0 && (z.a = 100), z.hex = od(z), z.rgb = id(z), Object.assign(z, Vi(z));
  }
  function E(S, R, z) {
    const Z = o.value;
    if (Z === null) return;
    const ne = Z.clientWidth, W = Z.clientHeight, de = Z.getBoundingClientRect();
    let me = Math.min(ne, Math.max(0, S - de.left));
    l.lang.rtl === true && (me = ne - me);
    const fe = Math.min(W, Math.max(0, R - de.top)), ce = Math.round(100 * me / ne), le = Math.round(100 * Math.max(0, Math.min(1, -(fe / W) + 1))), U = ud({ h: h.value.h, s: ce, v: le, a: p.value === true ? h.value.a : void 0 });
    h.value.s = ce, h.value.v = le, L(U, z);
  }
  function C(S, R) {
    const z = Math.round(S), Z = ud({ h: z, s: h.value.s, v: h.value.v, a: p.value === true ? h.value.a : void 0 });
    h.value.h = z, L(Z, R);
  }
  function D(S) {
    C(S, true);
  }
  function H(S, R, z, Z, ne) {
    if (Z !== void 0 && wt(Z), !/^[0-9]+$/.test(S)) {
      ne === true && n.$forceUpdate();
      return;
    }
    const W = Math.floor(Number(S));
    if (W < 0 || W > z) {
      ne === true && n.$forceUpdate();
      return;
    }
    const de = { r: R === "r" ? W : h.value.r, g: R === "g" ? W : h.value.g, b: R === "b" ? W : h.value.b, a: p.value === true ? R === "a" ? W : h.value.a : void 0 };
    if (R !== "a") {
      const me = Vi(de);
      h.value.h = me.h, h.value.s = me.s, h.value.v = me.v;
    }
    if (L(de, ne), ne !== true && (Z == null ? void 0 : Z.target.selectionEnd) !== void 0) {
      const me = Z.target.selectionEnd;
      Ge(() => {
        Z.target.setSelectionRange(me, me);
      });
    }
  }
  function $(S, R) {
    let z;
    const Z = S.target.value;
    if (wt(S), s.value === "hex") {
      if (Z.length !== (p.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(Z)) return true;
      z = Km(Z);
    } else {
      let W;
      if (Z.endsWith(")")) if (p.value !== true && Z.startsWith("rgb(")) {
        if (W = Z.substring(4, Z.length - 1).split(",").map((de) => parseInt(de, 10)), W.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(Z)) return true;
      } else if (p.value === true && Z.startsWith("rgba(")) {
        if (W = Z.substring(5, Z.length - 1).split(","), W.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(Z)) return true;
        for (let me = 0; me < 3; me++) {
          const fe = parseInt(W[me], 10);
          if (fe < 0 || fe > 255) return true;
          W[me] = fe;
        }
        const de = parseFloat(W[3]);
        if (de < 0 || de > 1) return true;
        W[3] = de;
      } else return true;
      else return true;
      if (W[0] < 0 || W[0] > 255 || W[1] < 0 || W[1] > 255 || W[2] < 0 || W[2] > 255 || p.value === true && (W[3] < 0 || W[3] > 1)) return true;
      z = { r: W[0], g: W[1], b: W[2], a: p.value === true ? W[3] * 100 : void 0 };
    }
    const ne = Vi(z);
    if (h.value.h = ne.h, h.value.s = ne.s, h.value.v = ne.v, L(z, R), R !== true) {
      const W = S.target.selectionEnd;
      Ge(() => {
        S.target.setSelectionRange(W, W);
      });
    }
  }
  function j(S) {
    const R = q(S), z = { r: R.r, g: R.g, b: R.b, a: R.a };
    z.a === void 0 && (z.a = h.value.a), h.value.h = R.h, h.value.s = R.s, h.value.v = R.v, L(z, true);
  }
  function te(S) {
    S.isFinal ? E(S.position.left, S.position.top, true) : ye(S);
  }
  const ye = fm((S) => {
    E(S.position.left, S.position.top);
  }, 20);
  function K(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset, true);
  }
  function A(S) {
    E(S.pageX - window.pageXOffset, S.pageY - window.pageYOffset);
  }
  function J(S) {
    i.value !== null && (i.value.$el.style.opacity = S ? 1 : 0);
  }
  function X(S) {
    s.value = S;
  }
  function ge() {
    const S = [];
    return e.noHeaderTabs !== true && S.push(d(Fu, { class: "q-color-picker__header-tabs", modelValue: s.value, dense: true, align: "justify", "onUpdate:modelValue": X }, () => [d(Oa, { label: "HEX" + (p.value === true ? "A" : ""), name: "hex", ripple: false }), d(Oa, { label: "RGB" + (p.value === true ? "A" : ""), name: "rgb", ripple: false })])), S.push(d("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [d("input", { class: "fit", value: h.value[s.value], ...m.value !== true ? { readonly: true } : {}, ...r("topIn", { onInput: (R) => {
      J($(R) === true);
    }, onChange: wt, onBlur: (R) => {
      $(R, true) === true && n.$forceUpdate(), J(false);
    } }) }), d(et, { ref: i, class: "q-color-picker__error-icon absolute no-pointer-events", name: l.iconSet.type.negative })])), d("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [d("div", { class: "q-color-picker__header-bg absolute-full" }), d("div", { class: b.value, style: y.value }, S)]);
  }
  function F() {
    return d(xp, { modelValue: v.value, animated: true }, () => [d(Oi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, V), d(Oi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, re), d(Oi, { class: "q-color-picker__palette-tab", name: "palette" }, we)]);
  }
  function P(S) {
    v.value = S;
  }
  function ee() {
    return d("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [d(Fu, { class: "absolute-full", modelValue: v.value, dense: true, align: "justify", "onUpdate:modelValue": P }, () => [d(Oa, { icon: l.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), d(Oa, { icon: l.iconSet.colorPicker.tune, name: "tune", ripple: false }), d(Oa, { icon: l.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function V() {
    const S = { ref: o, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== true ? " readonly" : ""), style: x.value, ...m.value === true ? { onClick: K, onMousedown: A } : {} }, R = [d("div", { style: { paddingBottom: "100%" } }), d("div", { class: "q-color-picker__spectrum-white absolute-full" }), d("div", { class: "q-color-picker__spectrum-black absolute-full" }), d("div", { class: "absolute", style: B.value }, [h.value.hex !== void 0 ? d("div", { class: "q-color-picker__spectrum-circle" }) : null])], z = [d(Jl, { class: "q-color-picker__hue non-selectable", modelValue: h.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: m.value !== true, thumbPath: sd, "onUpdate:modelValue": C, onChange: D })];
    return p.value === true && z.push(d(Jl, { class: "q-color-picker__alpha non-selectable", modelValue: h.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: Tp, readonly: m.value !== true, hideSelection: true, thumbPath: sd, ...r("alphaSlide", { "onUpdate:modelValue": (Z) => H(Z, "a", 100), onChange: (Z) => H(Z, "a", 100, void 0, true) }) })), [pn("div", S, R, "spec", m.value, () => M.value), d("div", { class: "q-color-picker__sliders" }, z)];
  }
  function re() {
    return [d("div", { class: "row items-center no-wrap" }, [d("div", "R"), d(Jl, { modelValue: h.value.r, min: 0, max: 255, color: "red", dark: a.value, readonly: m.value !== true, ...r("rSlide", { "onUpdate:modelValue": (S) => H(S, "r", 255), onChange: (S) => H(S, "r", 255, void 0, true) }) }), d("input", { value: h.value.r, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("rIn", { onInput: (S) => H(S.target.value, "r", 255, S), onBlur: (S) => H(S.target.value, "r", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "G"), d(Jl, { modelValue: h.value.g, min: 0, max: 255, color: "green", dark: a.value, readonly: m.value !== true, ...r("gSlide", { "onUpdate:modelValue": (S) => H(S, "g", 255), onChange: (S) => H(S, "g", 255, void 0, true) }) }), d("input", { value: h.value.g, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("gIn", { onInput: (S) => H(S.target.value, "g", 255, S), onBlur: (S) => H(S.target.value, "g", 255, S, true) }) })]), d("div", { class: "row items-center no-wrap" }, [d("div", "B"), d(Jl, { modelValue: h.value.b, min: 0, max: 255, color: "blue", readonly: m.value !== true, dark: a.value, ...r("bSlide", { "onUpdate:modelValue": (S) => H(S, "b", 255), onChange: (S) => H(S, "b", 255, void 0, true) }) }), d("input", { value: h.value.b, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("bIn", { onInput: (S) => H(S.target.value, "b", 255, S), onBlur: (S) => H(S.target.value, "b", 255, S, true) }) })]), p.value === true ? d("div", { class: "row items-center no-wrap" }, [d("div", "A"), d(Jl, { modelValue: h.value.a, color: "grey", readonly: m.value !== true, dark: a.value, ...r("aSlide", { "onUpdate:modelValue": (S) => H(S, "a", 100), onChange: (S) => H(S, "a", 100, void 0, true) }) }), d("input", { value: h.value.a, maxlength: 3, readonly: m.value !== true, onChange: wt, ...r("aIn", { onInput: (S) => H(S.target.value, "a", 100, S), onBlur: (S) => H(S.target.value, "a", 100, S, true) }) })]) : null];
  }
  function we() {
    const S = (R) => d("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: R }, ...m.value === true ? r("palette#" + R, { onClick: () => {
      j(R);
    } }) : {} });
    return [d("div", { class: "row items-center q-color-picker__palette-rows" + (m.value === true ? " q-color-picker__palette-rows--editable" : "") }, O.value.map(S))];
  }
  return () => {
    const S = [F()];
    return e.name !== void 0 && e.disable !== true && k(S, "push"), e.noHeader !== true && S.unshift(ge()), e.noFooter !== true && S.push(ee()), d("div", { class: N.value, ...T.value }, S);
  };
} });
var vl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Mp(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), $p(Vs(e, t, n));
}
function cd(e, t, n) {
  return Gm(Rp(e, t, n));
}
function Ep(e) {
  return Ap(e) === 0;
}
function io(e, t) {
  return t <= 6 ? 31 : t <= 11 || Ep(e) ? 30 : 29;
}
function Ap(e) {
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
  const v = _t(l, 4) - _t((_t(l, 100) + 1) * 3, 4) - 150, h = 20 + a - v;
  return t || (i - c < 6 && (c = c - i + _t(i + 4, 33) * 33), u = on(on(c + 1, 33) - 1, 4), u === -1 && (u = 4)), { leap: u, gy: l, march: h };
}
function Rp(e, t, n) {
  const l = Ym(e, true);
  return Vs(l.gy, 3, l.march) + (t - 1) * 31 - _t(t, 7) * (t - 7) + n - 1;
}
function $p(e) {
  const t = Gm(e).gy;
  let n = t - 621, l, a, r;
  const o = Ym(n, false), i = Vs(t, 3, o.march);
  if (r = e - i, r >= 0) {
    if (r <= 185) return a = 1 + _t(r, 31), l = on(r, 31) + 1, { jy: n, jm: a, jd: l };
    r -= 186;
  } else n -= 1, r += 179, o.leap === 1 && (r += 1);
  return a = 7 + _t(r, 30), l = on(r, 30) + 1, { jy: n, jm: a, jd: l };
}
function Vs(e, t, n) {
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
var Pp = ["gregorian", "persian"], Fo = { mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => Pp.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean }, Xm = ["update:modelValue"];
function jn(e) {
  return e.year + "/" + rt(e.month) + "/" + rt(e.day);
}
function Zm(e, t) {
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
      const s = Mp(u);
      return { year: s.jy, month: s.jm, day: s.jd };
    }
    return { year: u.getFullYear(), month: u.getMonth() + 1, day: u.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: n, tabindex: l, headerClass: a, getLocale: r, getCurrentDate: o };
}
var Jm = 864e5, Lp = 36e5, Ou = 6e4, eh = "YYYY-MM-DDTHH:mm:ss.SSSZ", Bp = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, Fp = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, Ii = {};
function Op(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (Ii[l] !== void 0) return Ii[l];
  const a = "(" + t.daysShort.join("|") + ")", r = "(" + t.months.join("|") + ")", o = "(" + t.monthsShort.join("|") + ")", i = {};
  let u = 0;
  const c = e.replace(Fp, (v) => {
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
  return Ii[l] = s, s;
}
function th(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : ku.date;
}
function dd(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), a = Math.floor(l / 60), r = l % 60;
  return n + rt(a) + t + rt(r);
}
function Qa(e, t, n, l, a) {
  const r = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (a !== void 0 && Object.assign(r, a), e == null || e === "" || typeof e != "string") return r;
  t === void 0 && (t = eh);
  const o = th(n, ti.props), i = o.months, u = o.monthsShort, { regex: c, map: s } = Op(t, o), v = e.match(c);
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
      const m = l !== "persian" ? new Date(r.year, r.month, 0).getDate() : io(r.year, r.month);
      if (r.day > m) return r;
    }
    s.H !== void 0 ? r.hour = parseInt(v[s.H], 10) % 24 : s.h !== void 0 && (r.hour = parseInt(v[s.h], 10) % 12, (s.A && v[s.A] === "PM" || s.a && v[s.a] === "pm" || s.aa && v[s.aa] === "p.m.") && (r.hour += 12), r.hour = r.hour % 24), s.m !== void 0 && (r.minute = parseInt(v[s.m], 10) % 60), s.s !== void 0 && (r.second = parseInt(v[s.s], 10) % 60), s.S !== void 0 && (r.millisecond = parseInt(v[s.S], 10) * 10 ** (3 - v[s.S].length)), (s.Z !== void 0 || s.ZZ !== void 0) && (h = s.Z !== void 0 ? v[s.Z].replace(":", "") : v[s.ZZ], r.timezoneOffset = (h[0] === "+" ? -1 : 1) * (60 * h.slice(1, 3) + 1 * h.slice(3, 5)));
  }
  return r.dateHash = rt(r.year, 6) + "/" + rt(r.month) + "/" + rt(r.day), r.timeHash = rt(r.hour) + ":" + rt(r.minute) + ":" + rt(r.second) + h, r;
}
function zi(e) {
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
var fd = { YY(e, t, n) {
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
  return zi(e);
}, wo(e) {
  return ea(zi(e));
}, ww(e) {
  return rt(zi(e));
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
  return dd(a, ":");
}, ZZ(e, t, n, l) {
  const a = l ?? e.getTimezoneOffset();
  return dd(a);
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
  return t.replace(Bp, (i, u) => i in fd ? fd[i](r, o, l, a) : u === void 0 ? i : u.split("\\]").join("]"));
}
var Dn = 20, Vp = ["Calendar", "Years", "Months"], vd = (e) => Vp.includes(e), Ni = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), ta = " \u2014 ";
function ll(e) {
  return e.year + "/" + rt(e.month);
}
ve({ name: "QDate", props: { ...Fo, ...wn, ...nt, modelValue: { required: true, validator: (e) => typeof e == "string" || Array.isArray(e) === true || Object(e) === e || e === null }, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { ...Fo.mask, default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Ni }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Ni }, navigationMaxYearMonth: { type: String, validator: Ni }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: vd } }, emits: [...Xm, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), { tabindex: i, headerClass: u, getLocale: c, getCurrentDate: s } = Zm(e, a);
  let v;
  const h = $r(e), m = Sl(h), g = Q(null), _ = Q(Ne()), w = Q(c()), k = f(() => Ne()), p = f(() => c()), y = f(() => s()), b = Q(ie(_.value, w.value)), x = Q(e.defaultView), B = f(() => a.lang.rtl === true ? "right" : "left"), O = Q(B.value), N = Q(B.value), T = b.value.year, M = Q(T - T % Dn - (T < 0 ? Dn : 0)), L = Q(null), q = f(() => {
    const I = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${I} q-date--${I}-${e.minimal === true ? "minimal" : "standard"}` + (r.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), E = f(() => e.color || "primary"), C = f(() => e.textColor || "white"), D = f(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), H = f(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), $ = f(() => H.value.filter((I) => typeof I == "string").map((I) => Ve(I, _.value, w.value)).filter((I) => I.dateHash !== null && I.day !== null && I.month !== null && I.year !== null)), j = f(() => {
    const I = (Y) => Ve(Y, _.value, w.value);
    return H.value.filter((Y) => Rt(Y) === true && Y.from !== void 0 && Y.to !== void 0).map((Y) => ({ from: I(Y.from), to: I(Y.to) })).filter((Y) => Y.from.dateHash !== null && Y.to.dateHash !== null && Y.from.dateHash < Y.to.dateHash);
  }), te = f(() => e.calendar !== "persian" ? (I) => new Date(I.year, I.month - 1, I.day) : (I) => {
    const Y = cd(I.year, I.month, I.day);
    return new Date(Y.gy, Y.gm - 1, Y.gd);
  }), ye = f(() => e.calendar === "persian" ? jn : (I, Y, se) => lh(new Date(I.year, I.month - 1, I.day, I.hour, I.minute, I.second, I.millisecond), Y === void 0 ? _.value : Y, se === void 0 ? w.value : se, I.year, I.timezoneOffset)), K = f(() => $.value.length + j.value.reduce((I, Y) => I + 1 + nh(te.value(Y.to), te.value(Y.from)), 0)), A = f(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
    if (L.value !== null) {
      const se = L.value.init, Te = te.value(se);
      return w.value.daysShort[Te.getDay()] + ", " + w.value.monthsShort[se.month - 1] + " " + se.day + ta + "?";
    }
    if (K.value === 0) return ta;
    if (K.value > 1) return `${K.value} ${w.value.pluralDay}`;
    const I = $.value[0], Y = te.value(I);
    return isNaN(Y.valueOf()) === true ? ta : w.value.headerTitle !== void 0 ? w.value.headerTitle(Y, I) : w.value.daysShort[Y.getDay()] + ", " + w.value.monthsShort[I.month - 1] + " " + I.day;
  }), J = f(() => $.value.concat(j.value.map((Y) => Y.from)).sort((Y, se) => Y.year - se.year || Y.month - se.month)[0]), X = f(() => $.value.concat(j.value.map((Y) => Y.to)).sort((Y, se) => se.year - Y.year || se.month - Y.month)[0]), ge = f(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
    if (K.value === 0) return ta;
    if (K.value > 1) {
      const I = J.value, Y = X.value, se = w.value.monthsShort;
      return se[I.month - 1] + (I.year !== Y.year ? " " + I.year + ta + se[Y.month - 1] + " " : I.month !== Y.month ? ta + se[Y.month - 1] : "") + " " + Y.year;
    }
    return $.value[0].year;
  }), F = f(() => {
    const I = [a.iconSet.datetime.arrowLeft, a.iconSet.datetime.arrowRight];
    return a.lang.rtl === true ? I.reverse() : I;
  }), P = f(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), ee = f(() => {
    const I = w.value.daysShort, Y = P.value;
    return Y > 0 ? I.slice(Y, 7).concat(I.slice(0, Y)) : I;
  }), V = f(() => {
    const I = b.value;
    return e.calendar !== "persian" ? new Date(I.year, I.month, 0).getDate() : io(I.year, I.month);
  }), re = f(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), we = f(() => {
    if (e.navigationMinYearMonth === void 0) return null;
    const I = e.navigationMinYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), S = f(() => {
    if (e.navigationMaxYearMonth === void 0) return null;
    const I = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(I[0], 10), month: parseInt(I[1], 10) };
  }), R = f(() => {
    const I = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return we.value !== null && we.value.year >= b.value.year && (I.year.prev = false, we.value.year === b.value.year && we.value.month >= b.value.month && (I.month.prev = false)), S.value !== null && S.value.year <= b.value.year && (I.year.next = false, S.value.year === b.value.year && S.value.month <= b.value.month && (I.month.next = false)), I;
  }), z = f(() => {
    const I = {};
    return $.value.forEach((Y) => {
      const se = ll(Y);
      I[se] === void 0 && (I[se] = []), I[se].push(Y.day);
    }), I;
  }), Z = f(() => {
    const I = {};
    return j.value.forEach((Y) => {
      const se = ll(Y.from), Te = ll(Y.to);
      if (I[se] === void 0 && (I[se] = []), I[se].push({ from: Y.from.day, to: se === Te ? Y.to.day : void 0, range: Y }), se < Te) {
        let Ee;
        const { year: Xe, month: Le } = Y.from, De = Le < 12 ? { year: Xe, month: Le + 1 } : { year: Xe + 1, month: 1 };
        for (; (Ee = ll(De)) <= Te; ) I[Ee] === void 0 && (I[Ee] = []), I[Ee].push({ from: void 0, to: Ee === Te ? Y.to.day : void 0, range: Y }), De.month++, De.month > 12 && (De.year++, De.month = 1);
      }
    }), I;
  }), ne = f(() => {
    if (L.value === null) return;
    const { init: I, initHash: Y, final: se, finalHash: Te } = L.value, [Ee, Xe] = Y <= Te ? [I, se] : [se, I], Le = ll(Ee), De = ll(Xe);
    if (Le !== W.value && De !== W.value) return;
    const at = {};
    return Le === W.value ? (at.from = Ee.day, at.includeFrom = true) : at.from = 1, De === W.value ? (at.to = Xe.day, at.includeTo = true) : at.to = V.value, at;
  }), W = f(() => ll(b.value)), de = f(() => {
    const I = {};
    if (e.options === void 0) {
      for (let se = 1; se <= V.value; se++) I[se] = true;
      return I;
    }
    const Y = typeof e.options == "function" ? e.options : (se) => e.options.includes(se);
    for (let se = 1; se <= V.value; se++) {
      const Te = W.value + "/" + rt(se);
      I[se] = Y(Te);
    }
    return I;
  }), me = f(() => {
    const I = {};
    if (e.events === void 0) for (let Y = 1; Y <= V.value; Y++) I[Y] = false;
    else {
      const Y = typeof e.events == "function" ? e.events : (se) => e.events.includes(se);
      for (let se = 1; se <= V.value; se++) {
        const Te = W.value + "/" + rt(se);
        I[se] = Y(Te) === true && re.value(Te);
      }
    }
    return I;
  }), fe = f(() => {
    let I, Y;
    const { year: se, month: Te } = b.value;
    if (e.calendar !== "persian") I = new Date(se, Te - 1, 1), Y = new Date(se, Te - 1, 0).getDate();
    else {
      const Ee = cd(se, Te, 1);
      I = new Date(Ee.gy, Ee.gm - 1, Ee.gd);
      let Xe = Te - 1, Le = se;
      Xe === 0 && (Xe = 12, Le--), Y = io(Le, Xe);
    }
    return { days: I.getDay() - P.value - 1, endDay: Y };
  }), ce = f(() => {
    const I = [], { days: Y, endDay: se } = fe.value, Te = Y < 0 ? Y + 7 : Y;
    if (Te < 6) for (let Le = se - Te; Le <= se; Le++) I.push({ i: Le, fill: true });
    const Ee = I.length;
    for (let Le = 1; Le <= V.value; Le++) {
      const De = { i: Le, event: me.value[Le], classes: [] };
      de.value[Le] === true && (De.in = true, De.flat = true), I.push(De);
    }
    if (z.value[W.value] !== void 0 && z.value[W.value].forEach((Le) => {
      const De = Ee + Le - 1;
      Object.assign(I[De], { selected: true, unelevated: true, flat: false, color: E.value, textColor: C.value });
    }), Z.value[W.value] !== void 0 && Z.value[W.value].forEach((Le) => {
      if (Le.from !== void 0) {
        const De = Ee + Le.from - 1, at = Ee + (Le.to || V.value) - 1;
        for (let cn = De; cn <= at; cn++) Object.assign(I[cn], { range: Le.range, unelevated: true, color: E.value, textColor: C.value });
        Object.assign(I[De], { rangeFrom: true, flat: false }), Le.to !== void 0 && Object.assign(I[at], { rangeTo: true, flat: false });
      } else if (Le.to !== void 0) {
        const De = Ee + Le.to - 1;
        for (let at = Ee; at <= De; at++) Object.assign(I[at], { range: Le.range, unelevated: true, color: E.value, textColor: C.value });
        Object.assign(I[De], { flat: false, rangeTo: true });
      } else {
        const De = Ee + V.value - 1;
        for (let at = Ee; at <= De; at++) Object.assign(I[at], { range: Le.range, unelevated: true, color: E.value, textColor: C.value });
      }
    }), ne.value !== void 0) {
      const Le = Ee + ne.value.from - 1, De = Ee + ne.value.to - 1;
      for (let at = Le; at <= De; at++) I[at].color = E.value, I[at].editRange = true;
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
      const Y = ie(_.value, w.value);
      it(Y.year, Y.month, Y);
    }
  }), he(x, () => {
    g.value !== null && l.$el.contains(document.activeElement) === true && g.value.focus();
  }), he(() => b.value.year + "|" + b.value.month, () => {
    n("navigation", { year: b.value.year, month: b.value.month });
  }), he(k, (I) => {
    xe(I, w.value, "mask"), _.value = I;
  }), he(p, (I) => {
    xe(_.value, I, "locale"), w.value = I;
  });
  function U(I) {
    v = JSON.stringify(I);
  }
  function oe() {
    const { year: I, month: Y, day: se } = y.value, Te = { ...b.value, year: I, month: Y, day: se }, Ee = z.value[ll(Te)];
    (Ee === void 0 || Ee.includes(Te.day) === false) && In(Te), qe(Te.year, Te.month);
  }
  function _e(I) {
    vd(I) === true && (x.value = I);
  }
  function ke(I, Y) {
    ["month", "year"].includes(I) && (I === "month" ? ae : pe)(Y === true ? -1 : 1);
  }
  function qe(I, Y) {
    x.value = "Calendar", it(I, Y);
  }
  function Me(I, Y) {
    if (e.range === false || !I) {
      L.value = null;
      return;
    }
    const se = Object.assign({ ...b.value }, I), Te = Y !== void 0 ? Object.assign({ ...b.value }, Y) : se;
    L.value = { init: se, initHash: jn(se), final: Te, finalHash: jn(Te) }, qe(se.year, se.month);
  }
  function Ne() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function Ve(I, Y, se) {
    return Qa(I, Y, se, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function ie(I, Y) {
    const se = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (se.length === 0) return be();
    const Te = se[se.length - 1], Ee = Ve(Te.from !== void 0 ? Te.from : Te, I, Y);
    return Ee.dateHash === null ? be() : Ee;
  }
  function be() {
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
  function pe(I) {
    const Y = Number(b.value.year) + I;
    it(Y, b.value.month), D.value === true && jt("year");
  }
  function Ce(I) {
    it(I, b.value.month), x.value = e.defaultView === "Years" ? "Months" : "Calendar", D.value === true && jt("year");
  }
  function Oe(I) {
    it(b.value.year, I), x.value = "Calendar", D.value === true && jt("month");
  }
  function Ae(I, Y) {
    var _a2;
    (((_a2 = z.value[Y]) == null ? void 0 : _a2.includes(I.day)) === true ? ue : In)(I);
  }
  function We(I) {
    return { year: I.year, month: I.month, day: I.day };
  }
  function it(I, Y, se) {
    if (we.value !== null && I <= we.value.year && ((Y < we.value.month || I < we.value.year) && (Y = we.value.month), I = we.value.year), S.value !== null && I >= S.value.year && ((Y > S.value.month || I > S.value.year) && (Y = S.value.month), I = S.value.year), se !== void 0) {
      const { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn } = se;
      Object.assign(b.value, { hour: Ee, minute: Xe, second: Le, millisecond: De, timezoneOffset: at, timeHash: cn });
    }
    const Te = I + "/" + rt(Y) + "/01";
    Te !== b.value.dateHash && (O.value = b.value.dateHash < Te == (a.lang.rtl !== true) ? "left" : "right", I !== b.value.year && (N.value = O.value), Ge(() => {
      M.value = I - I % Dn - (I < 0 ? Dn : 0), Object.assign(b.value, { year: I, month: Y, day: 1, dateHash: Te });
    }));
  }
  function xt(I, Y, se) {
    const Te = I !== null && I.length === 1 && e.multiple === false ? I[0] : I, { reason: Ee, details: Xe } = tl(Y, se);
    U(Te), n("update:modelValue", Te, Ee, Xe);
  }
  function jt(I) {
    const Y = $.value[0] !== void 0 && $.value[0].dateHash !== null ? { ...$.value[0] } : { ...b.value };
    Ge(() => {
      Y.year = b.value.year, Y.month = b.value.month;
      const se = e.calendar !== "persian" ? new Date(Y.year, Y.month, 0).getDate() : io(Y.year, Y.month);
      Y.day = Math.min(Math.max(1, Y.day), se);
      const Te = ln(Y), { details: Ee } = tl("", Y);
      U(Te), n("update:modelValue", Te, I, Ee);
    });
  }
  function tl(I, Y) {
    return Y.from !== void 0 ? { reason: `${I}-range`, details: { ...We(Y.target), from: We(Y.from), to: We(Y.to) } } : { reason: `${I}-day`, details: We(Y) };
  }
  function ln(I, Y, se) {
    return I.from !== void 0 ? { from: ye.value(I.from, Y, se), to: ye.value(I.to, Y, se) } : ye.value(I, Y, se);
  }
  function In(I) {
    let Y;
    if (e.multiple === true) if (I.from !== void 0) {
      const se = jn(I.from), Te = jn(I.to), Ee = $.value.filter((Le) => Le.dateHash < se || Le.dateHash > Te), Xe = j.value.filter(({ from: Le, to: De }) => De.dateHash < se || Le.dateHash > Te);
      Y = Ee.concat(Xe).concat(I).map((Le) => ln(Le));
    } else {
      const se = H.value.slice();
      se.push(ln(I)), Y = se;
    }
    else Y = ln(I);
    xt(Y, "add", I);
  }
  function ue(I) {
    if (e.noUnset === true) return;
    let Y = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      const se = ln(I);
      I.from !== void 0 ? Y = e.modelValue.filter((Te) => Te.from !== void 0 ? Te.from !== se.from && Te.to !== se.to : true) : Y = e.modelValue.filter((Te) => Te !== se), Y.length === 0 && (Y = null);
    }
    xt(Y, "remove", I);
  }
  function xe(I, Y, se) {
    const Te = $.value.concat(j.value).map((Xe) => ln(Xe, I, Y)).filter((Xe) => Xe.from !== void 0 ? Xe.from.dateHash !== null && Xe.to.dateHash !== null : Xe.dateHash !== null), Ee = (e.multiple === true ? Te : Te[0]) || null;
    U(Ee), n("update:modelValue", Ee, se);
  }
  function Fe() {
    if (e.minimal !== true) return d("div", { class: "q-date__header " + u.value }, [d("div", { class: "relative-position" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-yr-" + ge.value, class: "q-date__header-subtitle q-date__header-link " + (x.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vY", { onClick() {
      x.value = "Years";
    }, onKeyup(I) {
      I.keyCode === 13 && (x.value = "Years");
    } }) }, [ge.value]))]), d("div", { class: "q-date__header-title relative-position flex no-wrap" }, [d("div", { class: "relative-position col" }, [d(Ft, { name: "q-transition--fade" }, () => d("div", { key: "h-sub" + A.value, class: "q-date__header-title-label q-date__header-link " + (x.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: i.value, ...o("vC", { onClick() {
      x.value = "Calendar";
    }, onKeyup(I) {
      I.keyCode === 13 && (x.value = "Calendar");
    } }) }, [A.value]))]), e.todayBtn === true ? d(Ze, { class: "q-date__header-today self-start", icon: a.iconSet.datetime.today, ariaLabel: a.lang.date.today, flat: true, size: "sm", round: true, tabindex: i.value, onClick: oe }) : null])]);
  }
  function Be({ label: I, type: Y, key: se, dir: Te, goTo: Ee, boundaries: Xe, cls: Le }) {
    return [d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: F.value[0], ariaLabel: Y === "Years" ? a.lang.date.prevYear : a.lang.date.prevMonth, tabindex: i.value, disable: Xe.prev === false, ...o("go-#" + Y, { onClick() {
      Ee(-1);
    } }) })]), d("div", { class: "relative-position overflow-hidden flex flex-center" + Le }, [d(Ft, { name: "q-transition--jump-" + Te }, () => d("div", { key: se }, [d(Ze, { flat: true, dense: true, noCaps: true, label: I, tabindex: i.value, ...o("view#" + Y, { onClick: () => {
      x.value = Y;
    } }) })]))]), d("div", { class: "row items-center q-date__arrow" }, [d(Ze, { round: true, dense: true, size: "sm", flat: true, icon: F.value[1], ariaLabel: Y === "Years" ? a.lang.date.nextYear : a.lang.date.nextMonth, tabindex: i.value, disable: Xe.next === false, ...o("go+#" + Y, { onClick() {
      Ee(1);
    } }) })])];
  }
  const Ue = { Calendar: () => [d("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [d("div", { class: "q-date__navigation row items-center no-wrap" }, Be({ label: w.value.months[b.value.month - 1], type: "Months", key: b.value.month, dir: O.value, goTo: ae, boundaries: R.value.month, cls: " col" }).concat(Be({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: pe, boundaries: R.value.year, cls: "" }))), d("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, ee.value.map((I) => d("div", { class: "q-date__calendar-item" }, [d("div", I)]))), d("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [d(Ft, { name: "q-transition--slide-" + O.value }, () => d("div", { key: W.value, class: "q-date__calendar-days fit" }, ce.value.map((I) => d("div", { class: I.classes }, [I.in === true ? d(Ze, { class: I.today === true ? "q-date__today" : "", dense: true, flat: I.flat, unelevated: I.unelevated, color: I.color, textColor: I.textColor, label: I.i, tabindex: i.value, ...o("day#" + I.i, { onClick: () => {
    yt(I.i);
  }, onMouseover: () => {
    ht(I.i);
  } }) }, I.event !== false ? () => d("div", { class: "q-date__event bg-" + I.event }) : null) : d("div", "" + I.i)]))))])])], Months() {
    const I = b.value.year === y.value.year, Y = (Te) => we.value !== null && b.value.year === we.value.year && we.value.month > Te || S.value !== null && b.value.year === S.value.year && S.value.month < Te, se = w.value.monthsShort.map((Te, Ee) => {
      const Xe = b.value.month === Ee + 1;
      return d("div", { class: "q-date__months-item flex flex-center" }, [d(Ze, { class: I === true && y.value.month === Ee + 1 ? "q-date__today" : null, flat: Xe !== true, label: Te, unelevated: Xe, color: Xe === true ? E.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Y(Ee + 1), ...o("month#" + Ee, { onClick: () => {
        Oe(Ee + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && se.unshift(d("div", { class: "row no-wrap full-width" }, [Be({ label: b.value.year, type: "Years", key: b.value.year, dir: N.value, goTo: pe, boundaries: R.value.year, cls: " col" })])), d("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, se);
  }, Years() {
    const I = M.value, Y = I + Dn, se = [], Te = (Ee) => we.value !== null && we.value.year > Ee || S.value !== null && S.value.year < Ee;
    for (let Ee = I; Ee <= Y; Ee++) {
      const Xe = b.value.year === Ee;
      se.push(d("div", { class: "q-date__years-item flex flex-center" }, [d(Ze, { key: "yr" + Ee, class: y.value.year === Ee ? "q-date__today" : null, flat: !Xe, label: Ee, dense: true, unelevated: Xe, color: Xe === true ? E.value : null, textColor: Xe === true ? C.value : null, tabindex: i.value, disable: Te(Ee), ...o("yr#" + Ee, { onClick: () => {
        Ce(Ee);
      } }) })]));
    }
    return d("div", { class: "q-date__view q-date__years flex flex-center" }, [d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: F.value[0], ariaLabel: a.lang.date.prevRangeYears(Dn), tabindex: i.value, disable: Te(I), ...o("y-", { onClick: () => {
      M.value -= Dn;
    } }) })]), d("div", { class: "q-date__years-content col self-stretch row items-center" }, se), d("div", { class: "col-auto" }, [d(Ze, { round: true, dense: true, flat: true, icon: F.value[1], ariaLabel: a.lang.date.nextRangeYears(Dn), tabindex: i.value, disable: Te(Y), ...o("y+", { onClick: () => {
      M.value += Dn;
    } }) })])]);
  } };
  function yt(I) {
    const Y = { ...b.value, day: I };
    if (e.range === false) {
      Ae(Y, W.value);
      return;
    }
    if (L.value === null) {
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
      L.value = { init: Y, initHash: Te, final: Y, finalHash: Te }, n("rangeStart", We(Y));
    } else {
      const se = L.value.initHash, Te = jn(Y), Ee = se <= Te ? { from: L.value.init, to: Y } : { from: Y, to: L.value.init };
      L.value = null, In(se === Te ? Y : { target: Y, ...Ee }), n("rangeEnd", { from: We(Ee.from), to: We(Ee.to) });
    }
  }
  function ht(I) {
    if (L.value !== null) {
      const Y = { ...b.value, day: I };
      Object.assign(L.value, { final: Y, finalHash: jn(Y) });
    }
  }
  return Object.assign(l, { setToday: oe, setView: _e, offsetCalendar: ke, setCalendarTo: qe, setEditingRange: Me }), () => {
    const I = [d("div", { class: "q-date__content col relative-position" }, [d(Ft, { name: "q-transition--fade" }, Ue[x.value])])], Y = Pe(t.default);
    return Y !== void 0 && I.push(d("div", { class: "q-date__actions" }, Y)), e.name !== void 0 && e.disable !== true && m(I, "push"), d("div", { class: q.value, ...le.value }, [Fe(), d("div", { ref: g, class: "q-date__main col column", tabindex: -1 }, I)]);
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
var Va = 0, Hi, ji, Ka, Ui = false, md, hd, gd, ql = null;
function Ip(e) {
  zp(e) && He(e);
}
function zp(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
  const t = Zb(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), a = n || l ? e.deltaY : e.deltaX;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Wy(o, l)) return l ? a < 0 && o.scrollTop === 0 ? true : a > 0 && o.scrollTop + o.clientHeight === o.scrollHeight : a < 0 && o.scrollLeft === 0 ? true : a > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return true;
}
function bd(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Qr(e) {
  Ui !== true && (Ui = true, requestAnimationFrame(() => {
    Ui = false;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (Ka === void 0 || t !== window.innerHeight) && (Ka = n - t, document.scrollingElement.scrollTop = l), l > Ka && (document.scrollingElement.scrollTop -= Math.ceil((l - Ka) / 8));
  }));
}
function yd(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: a } = window.getComputedStyle(t);
    Hi = oi(window), ji = gl(window), md = t.style.left, hd = t.style.top, gd = window.location.href, t.style.left = `-${Hi}px`, t.style.top = `-${ji}px`, a !== "hidden" && (a === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, ze.is.ios === true && (n === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.addEventListener("scroll", Qr, dt.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", bd, dt.passiveCapture));
  }
  ze.is.desktop === true && ze.is.mac === true && window[`${e}EventListener`]("wheel", Ip, dt.notPassive), e === "remove" && (ze.is.ios === true && (n === true ? (window.visualViewport.removeEventListener("resize", Qr, dt.passiveCapture), window.visualViewport.removeEventListener("scroll", Qr, dt.passiveCapture)) : window.removeEventListener("scroll", bd, dt.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = md, t.style.top = hd, window.location.href === gd && window.scrollTo(Hi, ji), Ka = void 0);
}
function Vu(e) {
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
        yd(t), ql = null;
      }, 100);
      return;
    }
  }
  yd(t);
}
function rh() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Vu(t));
  } };
}
var Kr = 0, Dp = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" }, pd = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] }, si = ve({ name: "QDialog", inheritAttrs: false, props: { ...Ea, ...Ol, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, backdropFilter: String, position: { type: String, default: "standard", validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e) } }, emits: [...Aa, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), r = Q(null), o = Q(false), i = Q(false);
  let u = null, c = null, s, v;
  const h = f(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: m } = rh(), { registerTimeout: g } = Xn(), { registerTick: _, removeTick: w } = ga(), { transitionProps: k, transitionStyle: p } = ri(e, () => pd[e.position][0], () => pd[e.position][1]), y = f(() => p.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: b, hidePortal: x, portalIsAccessible: B, renderPortal: O } = ks(a, r, ge, "dialog"), { hide: N } = Ra({ showing: o, hideOnRouteChange: h, handleShow: D, handleHide: H, processOnMount: true }), { addToHistory: T, removeFromHistory: M } = ah(o, N, h), L = f(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Dp[e.position]}` + (i.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), q = f(() => o.value === true && e.seamless !== true), E = f(() => e.autoClose === true ? { onClick: A } : {}), C = f(() => [`q-dialog fullscreen no-pointer-events q-dialog--${q.value === true ? "modal" : "seamless"}`, l.class]);
  he(() => e.maximized, (F) => {
    o.value === true && K(F);
  }), he(q, (F) => {
    m(F), F === true ? (qm(X), Cm(te)) : (Pu(X), Mo(te));
  });
  function D(F) {
    var _a2;
    T(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, K(e.maximized), b(), i.value = true, e.noFocus !== true ? ((_a2 = document.activeElement) == null ? void 0 : _a2.blur(), _($)) : w(), g(() => {
      if (a.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          const { top: P, bottom: ee } = document.activeElement.getBoundingClientRect(), { innerHeight: V } = window, re = window.visualViewport !== void 0 ? window.visualViewport.height : V;
          P > 0 && ee > re / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - re, ee >= V ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + ee - re / 2))), document.activeElement.scrollIntoView();
        }
        v = true, r.value.click(), v = false;
      }
      b(true), i.value = false, n("show", F);
    }, e.transitionDuration);
  }
  function H(F) {
    w(), M(), ye(true), i.value = true, x(), c !== null && ((((F == null ? void 0 : F.type.indexOf("key")) === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), g(() => {
      x(true), i.value = false, n("hide", F);
    }, e.transitionDuration);
  }
  function $(F) {
    $a(() => {
      let P = r.value;
      if (P !== null) {
        if (F !== void 0) {
          const ee = P.querySelector(F);
          if (ee !== null) {
            ee.focus({ preventScroll: true });
            return;
          }
        }
        P.contains(document.activeElement) !== true && (P = P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || P.querySelector("[autofocus], [data-autofocus]") || P, P.focus({ preventScroll: true }));
      }
    });
  }
  function j(F) {
    F && typeof F.focus == "function" ? F.focus({ preventScroll: true }) : $(), n("shake");
    const P = r.value;
    P !== null && (P.classList.remove("q-animate--scale"), P.classList.add("q-animate--scale"), u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value !== null && (P.classList.remove("q-animate--scale"), $());
    }, 170));
  }
  function te() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && j() : (n("escapeKey"), N()));
  }
  function ye(F) {
    u !== null && (clearTimeout(u), u = null), (F === true || o.value === true) && (K(false), e.seamless !== true && (m(false), Pu(X), Mo(te))), F !== true && (c = null);
  }
  function K(F) {
    F === true ? s !== true && (Kr < 1 && document.body.classList.add("q-body--dialog"), Kr++, s = true) : s === true && (Kr < 2 && document.body.classList.remove("q-body--dialog"), Kr--, s = false);
  }
  function A(F) {
    v !== true && (N(F), n("click", F));
  }
  function J(F) {
    e.persistent !== true && e.noBackdropDismiss !== true ? N(F) : e.noShake !== true && j();
  }
  function X(F) {
    e.allowFocusOutside !== true && B.value === true && dm(r.value, F.target) !== true && $('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(a.proxy, { focus: $, shake: j, __updateRefocusTarget(F) {
    c = F || null;
  } }), Ke(ye);
  function ge() {
    return d("div", { role: "dialog", "aria-modal": q.value === true ? "true" : "false", ...l, class: C.value }, [d(Ft, { name: "q-transition--fade", appear: true }, () => q.value === true ? d("div", { class: "q-dialog__backdrop fixed-full", style: y.value, "aria-hidden": "true", tabindex: -1, onClick: J }) : null), d(Ft, k.value, () => o.value === true ? d("div", { ref: r, class: L.value, style: p.value, tabindex: -1, ...E.value }, Pe(t.default)) : null)]);
  }
  return O;
} }), _d = 150, wd = ve({ name: "QDrawer", inheritAttrs: false, props: { ...Ea, ...nt, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...Aa, "onLayout", "miniState"], setup(e, { slots: t, emit: n, attrs: l }) {
  const a = Se(), { proxy: { $q: r } } = a, o = lt(e, r), { preventBodyScroll: i } = rh(), { registerTimeout: u, removeTimeout: c } = Xn(), s = qt(Kl, ot);
  if (s === ot) return console.error("QDrawer needs to be child of QLayout"), ot;
  let v, h = null, m;
  const g = Q(e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint), _ = f(() => e.mini === true && g.value !== true), w = f(() => _.value === true ? e.miniWidth : e.width), k = Q(e.showIfAbove === true && g.value === false ? true : e.modelValue === true), p = f(() => e.persistent !== true && (g.value === true || ye.value === true));
  function y(U, oe) {
    if (O(), U !== false && s.animate(), R(0), g.value === true) {
      const _e = s.instances[H.value];
      (_e == null ? void 0 : _e.belowBreakpoint) === true && _e.hide(false), z(1), s.isContainer.value !== true && i(true);
    } else z(0), U !== false && Z(false);
    u(() => {
      U !== false && Z(true), oe !== true && n("show", U);
    }, _d);
  }
  function b(U, oe) {
    N(), U !== false && s.animate(), z(0), R(L.value * w.value), me(), oe !== true ? u(() => {
      n("hide", U);
    }, _d) : c();
  }
  const { show: x, hide: B } = Ra({ showing: k, hideOnRouteChange: p, handleShow: y, handleHide: b }), { addToHistory: O, removeFromHistory: N } = ah(k, B, p), T = { belowBreakpoint: g, hide: B }, M = f(() => e.side === "right"), L = f(() => (r.lang.rtl === true ? -1 : 1) * (M.value === true ? 1 : -1)), q = Q(0), E = Q(false), C = Q(false), D = Q(w.value * L.value), H = f(() => M.value === true ? "left" : "right"), $ = f(() => k.value === true && g.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : w.value : 0), j = f(() => e.overlay === true || e.miniToOverlay === true || s.view.value.indexOf(M.value ? "R" : "L") !== -1 || r.platform.is.ios === true && s.isContainer.value === true), te = f(() => e.overlay === false && k.value === true && g.value === false), ye = f(() => e.overlay === true && k.value === true && g.value === false), K = f(() => "fullscreen q-drawer__backdrop" + (k.value === false && E.value === false ? " hidden" : "")), A = f(() => ({ backgroundColor: `rgba(0,0,0,${q.value * 0.4})` })), J = f(() => M.value === true ? s.rows.value.top[2] === "r" : s.rows.value.top[0] === "l"), X = f(() => M.value === true ? s.rows.value.bottom[2] === "r" : s.rows.value.bottom[0] === "l"), ge = f(() => {
    const U = {};
    return s.header.space === true && J.value === false && (j.value === true ? U.top = `${s.header.offset}px` : s.header.space === true && (U.top = `${s.header.size}px`)), s.footer.space === true && X.value === false && (j.value === true ? U.bottom = `${s.footer.offset}px` : s.footer.space === true && (U.bottom = `${s.footer.size}px`)), U;
  }), F = f(() => {
    const U = { width: `${w.value}px`, transform: `translateX(${D.value}px)` };
    return g.value === true ? U : Object.assign(U, ge.value);
  }), P = f(() => "q-drawer__content fit " + (s.isContainer.value !== true ? "scroll" : "overflow-auto")), ee = f(() => `q-drawer q-drawer--${e.side}` + (C.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (o.value === true ? " q-drawer--dark q-dark" : "") + (E.value === true ? " no-transition" : k.value === true ? "" : " q-layout--prevent-focus") + (g.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${_.value === true ? "mini" : "standard"}` + (j.value === true || te.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (J.value === true ? " q-drawer--top-padding" : ""))), V = f(() => {
    const U = r.lang.rtl === true ? e.side : H.value;
    return [[gn, W, void 0, { [U]: true, mouse: true }]];
  }), re = f(() => {
    const U = r.lang.rtl === true ? H.value : e.side;
    return [[gn, de, void 0, { [U]: true, mouse: true }]];
  }), we = f(() => {
    const U = r.lang.rtl === true ? H.value : e.side;
    return [[gn, de, void 0, { [U]: true, mouse: true, mouseAllDir: true }]];
  });
  function S() {
    ce(g, e.behavior === "mobile" || e.behavior !== "desktop" && s.totalWidth.value <= e.breakpoint);
  }
  he(g, (U) => {
    U === true ? (v = k.value, k.value === true && B(false)) : e.overlay === false && e.behavior !== "mobile" && v !== false && (k.value === true ? (R(0), z(0), me()) : x(false));
  }), he(() => e.side, (U, oe) => {
    s.instances[oe] === T && (s.instances[oe] = void 0, s[oe].space = false, s[oe].offset = 0), s.instances[U] = T, s[U].size = w.value, s[U].space = te.value, s[U].offset = $.value;
  }), he(s.totalWidth, () => {
    (s.isContainer.value === true || document.qScrollPrevented !== true) && S();
  }), he(() => e.behavior + e.breakpoint, S), he(s.isContainer, (U) => {
    k.value === true && i(U !== true), U === true && S();
  }), he(s.scrollbarWidth, () => {
    R(k.value === true ? 0 : void 0);
  }), he($, (U) => {
    fe("offset", U);
  }), he(te, (U) => {
    n("onLayout", U), fe("space", U);
  }), he(M, () => {
    R();
  }), he(w, (U) => {
    R(), le(e.miniToOverlay, U);
  }), he(() => e.miniToOverlay, (U) => {
    le(U, w.value);
  }), he(() => r.lang.rtl, () => {
    R();
  }), he(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (ne(), s.animate());
  }), he(_, (U) => {
    n("miniState", U);
  });
  function R(U) {
    U === void 0 ? Ge(() => {
      U = k.value === true ? 0 : w.value, R(L.value * U);
    }) : (s.isContainer.value === true && M.value === true && (g.value === true || Math.abs(U) === w.value) && (U += L.value * s.scrollbarWidth.value), D.value = U);
  }
  function z(U) {
    q.value = U;
  }
  function Z(U) {
    const oe = U === true ? "remove" : s.isContainer.value !== true ? "add" : "";
    oe !== "" && document.body.classList[oe]("q-body--drawer-toggle");
  }
  function ne() {
    h !== null && clearTimeout(h), a.proxy && a.proxy.$el && a.proxy.$el.classList.add("q-drawer--mini-animate"), C.value = true, h = setTimeout(() => {
      var _a2, _b2;
      h = null, C.value = false, (_b2 = (_a2 = a == null ? void 0 : a.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function W(U) {
    if (k.value !== false) return;
    const oe = w.value, _e = ct(U.distance.x, 0, oe);
    if (U.isFinal === true) {
      _e >= Math.min(75, oe) === true ? x() : (s.animate(), z(0), R(L.value * oe)), E.value = false;
      return;
    }
    R((r.lang.rtl === true ? M.value !== true : M.value) ? Math.max(oe - _e, 0) : Math.min(0, _e - oe)), z(ct(_e / oe, 0, 1)), U.isFirst === true && (E.value = true);
  }
  function de(U) {
    if (k.value !== true) return;
    const oe = w.value, _e = U.direction === e.side, ke = (r.lang.rtl === true ? _e !== true : _e) ? ct(U.distance.x, 0, oe) : 0;
    if (U.isFinal === true) {
      Math.abs(ke) < Math.min(75, oe) === true ? (s.animate(), z(1), R(0)) : B(), E.value = false;
      return;
    }
    R(L.value * ke), z(ct(1 - ke / oe, 0, 1)), U.isFirst === true && (E.value = true);
  }
  function me() {
    i(false), Z(true);
  }
  function fe(U, oe) {
    s.update(e.side, U, oe);
  }
  function ce(U, oe) {
    U.value !== oe && (U.value = oe);
  }
  function le(U, oe) {
    fe("size", U === true ? e.miniWidth : oe);
  }
  return s.instances[e.side] = T, le(e.miniToOverlay, w.value), fe("space", te.value), fe("offset", $.value), e.showIfAbove === true && e.modelValue !== true && k.value === true && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", true), ft(() => {
    n("onLayout", te.value), n("miniState", _.value), v = e.showIfAbove === true;
    const U = () => {
      (k.value === true ? y : b)(false, true);
    };
    if (s.totalWidth.value !== 0) {
      Ge(U);
      return;
    }
    m = he(s.totalWidth, () => {
      m(), m = void 0, k.value === false && e.showIfAbove === true && g.value === false ? x(false) : U();
    });
  }), Ke(() => {
    m == null ? void 0 : m(), h !== null && (clearTimeout(h), h = null), k.value === true && me(), s.instances[e.side] === T && (s.instances[e.side] = void 0, fe("size", 0), fe("offset", 0), fe("space", false));
  }), () => {
    const U = [];
    g.value === true && (e.noSwipeOpen === false && U.push(sn(d("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), V.value)), U.push(pn("div", { ref: "backdrop", class: K.value, style: A.value, "aria-hidden": "true", onClick: B }, void 0, "backdrop", e.noSwipeBackdrop !== true && k.value === true, () => we.value)));
    const oe = _.value === true && t.mini !== void 0, _e = [d("div", { ...l, key: "" + oe, class: [P.value, l.class] }, oe === true ? t.mini() : Pe(t.default))];
    return e.elevated === true && k.value === true && _e.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), U.push(pn("aside", { ref: "content", class: ee.value, style: F.value }, _e, "contentclose", e.noSwipeClose !== true && g.value === true, () => re.value)), d("div", { class: "q-drawer-container" }, U);
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
var Np = /^https?:\/\//, Hp = class {
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
        this.eVm.editLinkUrl.value = Np.test(r) ? r : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(a.getRangeAt(0));
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
}, jp = ve({ name: "QTooltip", inheritAttrs: false, props: { ...gm, ...Ea, ...Ol, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { ...Ol.transitionShow, default: "jump-down" }, transitionHide: { ...Ol.transitionHide, default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: $o }, self: { type: String, default: "top middle", validator: $o }, offset: { type: Array, default: () => [14, 14], validator: Mm }, scrollTarget: Wl, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...Aa], setup(e, { slots: t, emit: n, attrs: l }) {
  let a, r;
  const o = Se(), { proxy: { $q: i } } = o, u = Q(null), c = Q(false), s = f(() => Po(e.anchor, i.lang.rtl)), v = f(() => Po(e.self, i.lang.rtl)), h = f(() => e.persistent !== true), { registerTick: m, removeTick: g } = ga(), { registerTimeout: _ } = Xn(), { transitionProps: w, transitionStyle: k } = ri(e), { localScrollTarget: p, changeScrollEvent: y, unconfigureScrollTarget: b } = ym(e, ye), { anchorEl: x, canShow: B, anchorEvents: O } = xs({ showing: c, configureAnchorEl: te }), { show: N, hide: T } = Ra({ showing: c, canShow: B, handleShow: E, handleHide: C, hideOnRouteChange: h, processOnMount: true });
  Object.assign(O, { delayShow: $, delayHide: j });
  const { showPortal: M, hidePortal: L, renderPortal: q } = ks(o, u, A, "tooltip");
  if (i.platform.is.mobile === true) {
    const J = { anchorEl: x, innerRef: u, onClickOutside(ge) {
      return T(ge), ge.target.classList.contains("q-dialog__backdrop") && He(ge), true;
    } }, X = f(() => e.modelValue === null && e.persistent !== true && c.value === true);
    he(X, (ge) => {
      (ge === true ? Tm : Ro)(J);
    }), Ke(() => {
      Ro(J);
    });
  }
  function E(J) {
    M(), m(() => {
      r = new MutationObserver(() => H()), r.observe(u.value, { attributes: false, childList: true, characterData: true, subtree: true }), H(), ye();
    }), a === void 0 && (a = he(() => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl, H)), _(() => {
      M(true), n("show", J);
    }, e.transitionDuration);
  }
  function C(J) {
    g(), L(), D(), _(() => {
      L(true), n("hide", J);
    }, e.transitionDuration);
  }
  function D() {
    r !== void 0 && (r.disconnect(), r = void 0), a !== void 0 && (a(), a = void 0), b(), Wt(O, "tooltipTemp");
  }
  function H() {
    qs({ targetEl: u.value, offset: e.offset, anchorEl: x.value, anchorOrigin: s.value, selfOrigin: v.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function $(J) {
    if (i.platform.is.mobile === true) {
      Mn(), document.body.classList.add("non-selectable");
      const X = x.value, ge = ["touchmove", "touchcancel", "touchend", "click"].map((F) => [X, F, "delayHide", "passiveCapture"]);
      Ct(O, "tooltipTemp", ge);
    }
    _(() => {
      N(J);
    }, e.delay);
  }
  function j(J) {
    i.platform.is.mobile === true && (Wt(O, "tooltipTemp"), Mn(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), _(() => {
      T(J);
    }, e.hideDelay);
  }
  function te() {
    if (e.noParentEvent === true || x.value === null) return;
    const J = i.platform.is.mobile === true ? [[x.value, "touchstart", "delayShow", "passive"]] : [[x.value, "mouseenter", "delayShow", "passive"], [x.value, "mouseleave", "delayHide", "passive"]];
    Ct(O, "anchor", J);
  }
  function ye() {
    if (x.value !== null || e.scrollTarget !== void 0) {
      p.value = Vn(x.value, e.scrollTarget);
      const J = e.noParentEvent === true ? H : T;
      y(p.value, J);
    }
  }
  function K() {
    return c.value === true ? d("div", { ...l, ref: u, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", l.class], style: [l.style, k.value], role: "tooltip" }, Pe(t.default)) : null;
  }
  function A() {
    return d(Ft, w.value, K);
  }
  return Ke(D), Object.assign(o.proxy, { updatePosition: H }), q;
} }), Sa = ve({ name: "QItem", props: { ...nt, ...Ar, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), { hasLink: r, linkAttrs: o, linkClass: i, linkTag: u, navigateOnClick: c } = li(), s = Q(null), v = Q(null), h = f(() => e.clickable === true || r.value === true || e.tag === "label"), m = f(() => e.disable !== true && h.value === true), g = f(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (a.value === true ? " q-item--dark" : "") + (r.value === true && e.active === null ? i.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (m.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), _ = f(() => e.insetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function w(y) {
    m.value === true && (v.value !== null && y.qAvoidFocus !== true && (y.qKeyEvent !== true && document.activeElement === s.value ? v.value.focus() : document.activeElement === v.value && s.value.focus()), c(y));
  }
  function k(y) {
    if (m.value === true && yn(y, [13, 32]) === true) {
      He(y), y.qKeyEvent = true;
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
    const y = { ref: s, class: g.value, style: _.value, role: "listitem", onClick: w, onKeyup: k };
    return m.value === true ? (y.tabindex = e.tabindex || "0", Object.assign(y, o.value)) : h.value === true && (y["aria-disabled"] = "true"), d(u.value, y, p());
  };
} }), mn = ve({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  const n = f(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} });
function uh(e, t, n) {
  t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param);
}
function Is(e) {
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
    const v = s.type === void 0 ? e.caret.is(s.cmd, s.param) : false;
    return v && (l = s.tip, a = s.icon !== null ? s.icon : void 0), sh(e, s, i, v);
  }), r = e.toolbarBackgroundClass.value, o = [Is(o)];
  else {
    const s = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, v = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, h = t.list === "no-icons";
    o = t.options.map((m) => {
      const g = m.disable ? m.disable(e) : false, _ = m.type === void 0 ? e.caret.is(m.cmd, m.param) : false;
      _ && (l = m.tip, a = m.icon !== null ? m.icon : void 0);
      const w = m.htmlTip;
      return d(Sa, { active: _, activeClass: s, clickable: true, disable: g, dense: true, onClick(k) {
        var _a2;
        i(), (k == null ? void 0 : k.qAvoidFocus) !== true && ((_a2 = e.contentRef.value) == null ? void 0 : _a2.focus()), e.caret.restore(), uh(k, m, e);
      } }, () => [h === true ? null : d(mn, { class: _ ? s : v, side: true }, () => d(et, { name: m.icon !== null ? m.icon : void 0 })), d(mn, w ? () => d("div", { class: "text-no-wrap", innerHTML: m.htmlTip }) : m.tip ? () => d("div", { class: "text-no-wrap" }, m.tip) : void 0)]);
    }), r = [e.toolbarBackgroundClass.value, v];
  }
  const u = t.highlight && l !== t.label, c = d(rp, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: u ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: u && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : l, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : a, contentClass: r, onShow: (s) => e.emit("dropdownShow", s), onHide: (s) => e.emit("dropdownHide", s), onBeforeShow: (s) => e.emit("dropdownBeforeShow", s), onBeforeHide: (s) => e.emit("dropdownBeforeHide", s) }, () => o);
  return c;
}
function Qp(e) {
  if (e.caret) return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((n) => n.cmd === "viewsource")).map((t) => Is(t.map((n) => e.isViewingSource.value && n.cmd !== "viewsource" ? false : n.type === "slot" ? Pe(e.slots[n.slot]) : n.type === "dropdown" ? Up(e, n) : sh(e, n))));
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
    } }), Is([d(Ze, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), d(Ze, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: l })])];
  }
}
var Sd = /^on[A-Z]/;
function ch() {
  const { attrs: e, vnode: t } = Se(), n = { listeners: Q({}), attributes: Q({}) };
  function l() {
    const a = {}, r = {};
    for (const o in e) o !== "class" && o !== "style" && Sd.test(o) === false && (a[o] = e[o]);
    for (const o in t.props) Sd.test(o) === true && (r[o] = t.props[o]);
    n.attributes.value = a, n.listeners.value = r;
  }
  return Ta(l), l(), n;
}
var Yp = Object.prototype.toString, Ki = Object.prototype.hasOwnProperty, Gp = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function xd(e) {
  if (e !== Object(e) || Gp.has(Yp.call(e)) === true || e.constructor && Ki.call(e, "constructor") === false && Ki.call(e.constructor.prototype, "isPrototypeOf") === false) return false;
  let t;
  for (t in e) ;
  return t === void 0 || Ki.call(e, t);
}
function dh() {
  let e, t, n, l, a, r, o = arguments[0] || {}, i = 1, u = false;
  const c = arguments.length;
  for (typeof o == "boolean" && (u = o, o = arguments[1] || {}, i = 2), Object(o) !== o && typeof o != "function" && (o = {}), c === i && (o = this, i--); i < c; i++) if ((e = arguments[i]) !== null) for (t in e) n = o[t], l = e[t], o !== l && (u === true && l && ((a = Array.isArray(l)) || xd(l) === true) ? (a === true ? r = Array.isArray(n) === true ? n : [] : r = xd(n) === true ? n : {}, o[t] = dh(u, r, l)) : l !== void 0 && (o[t] = l));
  return o;
}
ve({ name: "QEditor", props: { ...nt, ...Ps, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]] }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Ls, "update:modelValue", "keydown", "click", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Bs(), u = ch(), c = Q(null), s = Q(null), v = Q(null), h = Q(false), m = f(() => !e.readonly && !e.disable);
  let g, _, w = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), g = window.getComputedStyle(document.body).fontFamily;
  const k = f(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), p = f(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !m.value, size: "sm" })), y = f(() => {
    const F = a.lang.editor, P = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: P.bold, tip: F.bold, key: 66 }, italic: { cmd: "italic", icon: P.italic, tip: F.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: P.strikethrough, tip: F.strikethrough, key: 83 }, underline: { cmd: "underline", icon: P.underline, tip: F.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: P.unorderedList, tip: F.unorderedList }, ordered: { cmd: "insertOrderedList", icon: P.orderedList, tip: F.orderedList }, subscript: { cmd: "subscript", icon: P.subscript, tip: F.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: P.superscript, tip: F.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (ee) => ee.caret && !ee.caret.can("link"), icon: P.hyperlink, tip: F.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: P.toggleFullscreen, tip: F.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: P.viewSource, tip: F.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: P.quote, tip: F.quote, key: 81 }, left: { cmd: "justifyLeft", icon: P.left, tip: F.left }, center: { cmd: "justifyCenter", icon: P.center, tip: F.center }, right: { cmd: "justifyRight", icon: P.right, tip: F.right }, justify: { cmd: "justifyFull", icon: P.justify, tip: F.justify }, print: { type: "no-state", cmd: "print", icon: P.print, tip: F.print, key: 80 }, outdent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("outdent"), cmd: "outdent", icon: P.outdent, tip: F.outdent }, indent: { type: "no-state", disable: (ee) => ee.caret && !ee.caret.can("indent"), cmd: "indent", icon: P.indent, tip: F.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: P.removeFormat, tip: F.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: P.hr, tip: F.hr }, undo: { type: "no-state", cmd: "undo", icon: P.undo, tip: F.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: P.redo, tip: F.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: P.heading1 || P.heading, tip: F.heading1, htmlTip: `<h1 class="q-ma-none">${F.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: P.heading2 || P.heading, tip: F.heading2, htmlTip: `<h2 class="q-ma-none">${F.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: P.heading3 || P.heading, tip: F.heading3, htmlTip: `<h3 class="q-ma-none">${F.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: P.heading4 || P.heading, tip: F.heading4, htmlTip: `<h4 class="q-ma-none">${F.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: P.heading5 || P.heading, tip: F.heading5, htmlTip: `<h5 class="q-ma-none">${F.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: P.heading6 || P.heading, tip: F.heading6, htmlTip: `<h6 class="q-ma-none">${F.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: P.heading, tip: F.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: P.code, htmlTip: `<code>${F.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: P.size1 || P.size, tip: F.size1, htmlTip: `<font size="1">${F.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: P.size2 || P.size, tip: F.size2, htmlTip: `<font size="2">${F.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: P.size3 || P.size, tip: F.size3, htmlTip: `<font size="3">${F.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: P.size4 || P.size, tip: F.size4, htmlTip: `<font size="4">${F.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: P.size5 || P.size, tip: F.size5, htmlTip: `<font size="5">${F.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: P.size6 || P.size, tip: F.size6, htmlTip: `<font size="6">${F.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: P.size7 || P.size, tip: F.size7, htmlTip: `<font size="7">${F.size7}</font>` } };
  }), b = f(() => {
    const F = e.definitions || {}, P = e.definitions || e.fonts ? dh(true, {}, y.value, F, Kp(g, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : y.value;
    return e.toolbar.map((ee) => ee.map((V) => {
      if (V.options) return { type: "dropdown", icon: V.icon, label: V.label, size: "sm", dense: true, fixedLabel: V.fixedLabel, fixedIcon: V.fixedIcon, highlight: V.highlight, list: V.list, options: V.options.map((we) => P[we]) };
      const re = P[V];
      return re ? re.type === "no-state" || F[V] && (re.cmd === void 0 || y.value[re.cmd] && y.value[re.cmd].type === "no-state") ? re : Object.assign({ type: "toggle" }, re) : { type: "slot", slot: V };
    }));
  }), x = { $q: a, props: e, slots: t, emit: n, inFullscreen: o, toggleFullscreen: i, runCmd: A, isViewingSource: h, editLinkUrl: v, toolbarBackgroundClass: k, buttonProps: p, contentRef: s, buttons: b, setContent: K };
  he(() => e.modelValue, (F) => {
    w !== F && (w = F, K(F, true));
  }), he(v, (F) => {
    n(`link${F ? "Show" : "Hide"}`);
  });
  const B = f(() => e.toolbar && e.toolbar.length !== 0), O = f(() => {
    const F = {}, P = (ee) => {
      ee.key && (F[ee.key] = { cmd: ee.cmd, param: ee.param });
    };
    return b.value.forEach((ee) => {
      ee.forEach((V) => {
        V.options ? V.options.forEach(P) : P(V);
      });
    }), F;
  }), N = f(() => o.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), T = f(() => `q-editor q-editor--${h.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (o.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (r.value === true ? " q-editor--dark q-dark" : "")), M = f(() => [e.contentClass, "q-editor__content", { col: o.value, "overflow-auto": o.value || e.maxHeight }]), L = f(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (s.value !== null) {
      const F = `inner${h.value === true ? "Text" : "HTML"}`, P = s.value[F];
      P !== e.modelValue && (w = P, n("update:modelValue", P));
    }
  }
  function E(F) {
    if (n("keydown", F), F.ctrlKey !== true || Ql(F) === true) {
      J();
      return;
    }
    const P = F.keyCode, ee = O.value[P];
    if (ee !== void 0) {
      const { cmd: V, param: re } = ee;
      He(F), A(V, re, false);
    }
  }
  function C(F) {
    J(), n("click", F);
  }
  function D(F) {
    if (s.value !== null) {
      const { scrollTop: P, scrollHeight: ee } = s.value;
      _ = ee - P;
    }
    x.caret.save(), n("blur", F);
  }
  function H(F) {
    Ge(() => {
      s.value !== null && _ !== void 0 && (s.value.scrollTop = s.value.scrollHeight - _);
    }), n("focus", F);
  }
  function $(F) {
    const P = c.value;
    if (P !== null && P.contains(F.target) === true && (F.relatedTarget === null || P.contains(F.relatedTarget) !== true)) {
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      x.caret.restorePosition(s.value[ee].length), J();
    }
  }
  function j(F) {
    const P = c.value;
    P !== null && P.contains(F.target) === true && (F.relatedTarget === null || P.contains(F.relatedTarget) !== true) && (x.caret.savePosition(), J());
  }
  function te() {
    _ = void 0;
  }
  function ye(F) {
    x.caret.save();
  }
  function K(F, P) {
    if (s.value !== null) {
      P === true && x.caret.savePosition();
      const ee = `inner${h.value === true ? "Text" : "HTML"}`;
      s.value[ee] = F, P === true && (x.caret.restorePosition(s.value[ee].length), J());
    }
  }
  function A(F, P, ee = true) {
    X(), x.caret.restore(), x.caret.apply(F, P, () => {
      X(), x.caret.save(), ee && J();
    });
  }
  function J() {
    setTimeout(() => {
      v.value = null, l.$forceUpdate();
    }, 1);
  }
  function X() {
    $a(() => {
      var _a2;
      (_a2 = s.value) == null ? void 0 : _a2.focus({ preventScroll: true });
    });
  }
  function ge() {
    return s.value;
  }
  return ft(() => {
    x.caret = l.caret = new Hp(s.value, x), K(e.modelValue), J(), document.addEventListener("selectionchange", ye);
  }), Ke(() => {
    document.removeEventListener("selectionchange", ye);
  }), Object.assign(l, { runCmd: A, refreshToolbar: J, focus: X, getContentEl: ge }), () => {
    let F;
    if (B.value) {
      const P = [d("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + k.value }, Qp(x))];
      v.value !== null && P.push(d("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + k.value }, Wp(x))), F = d("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, P);
    }
    return d("div", { ref: c, class: T.value, style: { height: o.value === true ? "100%" : null }, ...L.value, onFocusin: $, onFocusout: j }, [F, d("div", { ref: s, style: N.value, class: M.value, contenteditable: m.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: E, onClick: C, onBlur: D, onFocus: H, onMousedown: te, onTouchstartPassive: te })]);
  };
} });
var Iu = ve({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  const n = f(() => parseInt(e.lines, 10)), l = f(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")), a = f(() => e.lines !== void 0 && n.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": n.value } : null);
  return () => d("div", { style: a.value, class: l.value }, Pe(t.default));
} }), zs = ve({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n }) {
  let l = false, a, r, o = null, i = null, u, c;
  function s() {
    a == null ? void 0 : a(), a = null, l = false, o !== null && (clearTimeout(o), o = null), i !== null && (clearTimeout(i), i = null), r == null ? void 0 : r.removeEventListener("transitionend", u), u = null;
  }
  function v(_, w, k) {
    w !== void 0 && (_.style.height = `${w}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = true, a = k;
  }
  function h(_, w) {
    _.style.overflowY = null, _.style.height = null, _.style.transition = null, s(), w !== c && n(w);
  }
  function m(_, w) {
    let k = 0;
    r = _, l === true ? (s(), k = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (c = "hide", _.style.overflowY = "hidden"), v(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = `${_.scrollHeight}px`, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "show");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  function g(_, w) {
    let k;
    r = _, l === true ? s() : (c = "show", _.style.overflowY = "hidden", k = _.scrollHeight), v(_, k, w), o = setTimeout(() => {
      o = null, _.style.height = 0, u = (p) => {
        i = null, (Object(p) !== p || p.target === _) && h(_, "hide");
      }, _.addEventListener("transitionend", u), i = setTimeout(u, e.duration * 1.1);
    }, 100);
  }
  return Ke(() => {
    l === true && s();
  }), () => d(Ft, { css: false, appear: e.appear, onEnter: m, onLeave: g }, t.default);
} }), Xp = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" }, Wi = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 }, Hl = ve({ name: "QSeparator", props: { ...nt, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  const t = Se(), n = lt(e, t.proxy.$q), l = f(() => e.vertical === true ? "vertical" : "horizontal"), a = f(() => ` q-separator--${l.value}`), r = f(() => e.inset !== false ? `${a.value}-${Xp[e.inset]}` : ""), o = f(() => `q-separator${a.value}${r.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === true ? " q-separator--dark" : "")), i = f(() => {
    const u = {};
    if (e.size !== void 0 && (u[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      const c = e.spaced === true ? `${Wi.md}px` : e.spaced in Wi ? `${Wi[e.spaced]}px` : e.spaced, s = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      u[`margin${s[0]}`] = u[`margin${s[1]}`] = c;
    }
    return u;
  });
  return () => d("hr", { class: o.value, style: i.value, "aria-orientation": l.value });
} }), Tl = rs({}), Zp = Object.keys(Ar);
ve({ name: "QExpansionItem", props: { ...Ar, ...Ea, ...nt, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: {}, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...Aa, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = Q(e.modelValue !== null ? e.modelValue : e.defaultOpened), o = Q(null), i = ui(), { show: u, hide: c, toggle: s } = Ra({ showing: r });
  let v, h;
  const m = f(() => `q-expansion-item q-item-type q-expansion-item--${r.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), g = f(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (l.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), _ = f(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), w = f(() => {
    const $ = {};
    return Zp.forEach((j) => {
      $[j] = e[j];
    }), $;
  }), k = f(() => _.value === true || e.expandIconToggle !== true), p = f(() => e.expandedIcon !== void 0 && r.value === true ? e.expandedIcon : e.expandIcon || l.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), y = f(() => e.disable !== true && (_.value === true || e.expandIconToggle === true)), b = f(() => ({ expanded: r.value === true, detailsId: i.value, toggle: s, show: u, hide: c })), x = f(() => {
    const $ = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : l.lang.label[r.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": i.value, "aria-label": $ };
  });
  he(() => e.group, ($) => {
    h == null ? void 0 : h(), $ !== void 0 && L();
  });
  function B($) {
    _.value !== true && s($), n("click", $);
  }
  function O($) {
    $.keyCode === 13 && N($, true);
  }
  function N($, j) {
    var _a2;
    j !== true && $.qAvoidFocus !== true && ((_a2 = o.value) == null ? void 0 : _a2.focus()), s($), He($);
  }
  function T() {
    n("afterShow");
  }
  function M() {
    n("afterHide");
  }
  function L() {
    v === void 0 && (v = wr()), r.value === true && (Tl[e.group] = v);
    const $ = he(r, (te) => {
      te === true ? Tl[e.group] = v : Tl[e.group] === v && delete Tl[e.group];
    }), j = he(() => Tl[e.group], (te, ye) => {
      ye === v && te !== void 0 && te !== v && c();
    });
    h = () => {
      $(), j(), Tl[e.group] === v && delete Tl[e.group], h = void 0;
    };
  }
  function q() {
    const $ = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, j = [d(et, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && r.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: p.value })];
    return y.value === true && (Object.assign($, { tabindex: 0, ...x.value, onClick: N, onKeyup: O }), j.unshift(d("div", { ref: o, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), d(mn, $, () => j);
  }
  function E() {
    let $;
    return t.header !== void 0 ? $ = [].concat(t.header(b.value)) : ($ = [d(mn, () => [d(Iu, { lines: e.labelLines }, () => e.label || ""), e.caption ? d(Iu, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && $[e.switchToggleSide === true ? "push" : "unshift"](d(mn, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => d(et, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && $[e.switchToggleSide === true ? "unshift" : "push"](q()), $;
  }
  function C() {
    const $ = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: a.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return k.value === true && ($.clickable = true, $.onClick = B, Object.assign($, _.value === true ? w.value : x.value)), d(Sa, $, E);
  }
  function D() {
    return sn(d("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: g.value, id: i.value }, Pe(t.default)), [[Fv, r.value]]);
  }
  function H() {
    const $ = [C(), d(zs, { duration: e.duration, onShow: T, onHide: M }, D)];
    return e.expandSeparator === true && $.push(d(Hl, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: a.value }), d(Hl, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: a.value })), $;
  }
  return e.group !== void 0 && L(), Ke(() => {
    h == null ? void 0 : h();
  }), () => d("div", { class: m.value }, [d("div", { class: "q-expansion-item__container relative-position" }, H())]);
} });
var Jp = ["top", "right", "bottom", "left"], zu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => Jp.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function fh(e, t) {
  return { formClass: f(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: f(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: f(() => {
    if (e.externalLabel === true) {
      const n = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var e1 = ["up", "right", "down", "left"], t1 = ["left", "center", "right"];
ve({ name: "QFab", props: { ...zu, ...Ea, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { ...zu.hideLabel, default: null }, direction: { type: String, default: "right", validator: (e) => e1.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => t1.includes(e) } }, emits: Aa, setup(e, { slots: t }) {
  const n = Q(null), l = Q(e.modelValue === true), a = ui(), { proxy: { $q: r } } = Se(), { formClass: o, labelProps: i } = fh(e, l), u = f(() => e.persistent !== true), { hide: c, toggle: s } = Ra({ showing: l, hideOnRouteChange: u }), v = f(() => ({ opened: l.value })), h = f(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${o.value}` + (l.value === true ? " q-fab--opened" : " q-fab--closed")), m = f(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value === true ? "opened" : "closed"}`), g = f(() => {
    const p = { id: a.value, role: "menu" };
    return l.value !== true && (p["aria-hidden"] = "true"), p;
  }), _ = f(() => `q-fab__icon-holder  q-fab__icon-holder--${l.value === true ? "opened" : "closed"}`);
  function w(p, y) {
    const b = t[p], x = `q-fab__${p} absolute-full`;
    return b === void 0 ? d(et, { class: x, name: e[y] || r.iconSet.fab[y] }) : d("div", { class: x }, b(v.value));
  }
  function k() {
    const p = [];
    return e.hideIcon !== true && p.push(d("div", { class: _.value }, [w("icon", "icon"), w("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && p[i.value.action](d("div", i.value.data, t.label !== void 0 ? t.label(v.value) : [e.label])), kt(t.tooltip, p);
  }
  return hn(Zv, { showing: l, onChildClick(p) {
    var _a2;
    c(p), (p == null ? void 0 : p.qAvoidFocus) !== true && ((_a2 = n.value) == null ? void 0 : _a2.$el.focus());
  } }), () => d("div", { class: h.value }, [d(Ze, { ref: n, class: o.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": l.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, onClick: s }, k), d("div", { class: m.value, ...g.value }, Pe(t.default))]);
} });
var vh = { start: "self-end", center: "self-center", end: "self-start" }, n1 = Object.keys(vh);
ve({ name: "QFabAction", props: { ...zu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => n1.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const l = qt(Zv, () => ({ showing: { value: true }, onChildClick: St })), { formClass: a, labelProps: r } = fh(e, l.showing), o = f(() => {
    const v = vh[e.anchor];
    return a.value + (v !== void 0 ? ` ${v}` : "");
  }), i = f(() => e.disable === true || l.showing.value !== true);
  function u(v) {
    l.onChildClick(v), n("click", v);
  }
  function c() {
    const v = [];
    return t.icon !== void 0 ? v.push(t.icon()) : e.icon !== "" && v.push(d(et, { name: e.icon })), (e.label !== "" || t.label !== void 0) && v[r.value.action](d("div", r.value.data, t.label !== void 0 ? t.label() : [e.label])), kt(t.default, v);
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
  const { props: n, proxy: l } = Se(), a = Q(false), r = Q(null), o = Q(false);
  l1({ validate: _, resetValidation: g });
  let i = 0, u;
  const c = f(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0), s = f(() => n.disable !== true && c.value === true && t.value === false), v = f(() => n.error === true || a.value === true), h = f(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : r.value);
  he(() => n.modelValue, () => {
    o.value = true, s.value === true && n.lazyRules === false && w();
  });
  function m() {
    n.lazyRules !== "ondemand" && s.value === true && o.value === true && w();
  }
  he(() => n.reactiveRules, (k) => {
    k === true ? u === void 0 && (u = he(() => n.rules, m, { immediate: true, deep: true })) : u !== void 0 && (u(), u = void 0);
  }, { immediate: true }), he(() => n.lazyRules, m), he(e, (k) => {
    k === true ? o.value = true : s.value === true && n.lazyRules !== "ondemand" && w();
  });
  function g() {
    i++, t.value = false, o.value = false, a.value = false, r.value = null, w.cancel();
  }
  function _(k = n.modelValue) {
    if (n.disable === true || c.value === false) return true;
    const p = ++i, y = t.value !== true ? () => {
      o.value = true;
    } : () => {
    }, b = (B, O) => {
      B === true && y(), a.value = B, r.value = O || null, t.value = false;
    }, x = [];
    for (let B = 0; B < n.rules.length; B++) {
      const O = n.rules[B];
      let N;
      if (typeof O == "function" ? N = O(k, oo) : typeof O == "string" && oo[O] !== void 0 && (N = oo[O](k)), N === false || typeof N == "string") return b(true, N), false;
      N !== true && N !== void 0 && x.push(N);
    }
    return x.length === 0 ? (b(false), true) : (t.value = true, Promise.all(x).then((B) => {
      if (B === void 0 || Array.isArray(B) === false || B.length === 0) return p === i && b(false), true;
      const O = B.find((N) => N === false || typeof N == "string");
      return p === i && b(O !== void 0, O), O === void 0;
    }, (B) => (p === i && (console.error(B), b(true)), false)));
  }
  const w = Ma(_, 0);
  return Ke(() => {
    u == null ? void 0 : u(), w.cancel();
  }), Object.assign(l, { resetValidation: g, validate: _ }), Ot(l, "hasError", () => v.value), { isDirtyModel: o, hasRules: c, hasError: v, errorMessage: h, validate: _, resetValidation: g };
}
function jl(e) {
  return e != null && ("" + e).length !== 0;
}
var mh = { ...nt, ...r1, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String }, ci = { ...mh, maxlength: [Number, String] }, di = ["update:modelValue", "clear", "focus", "blur"];
function fi({ requiredForAttr: e = true, tagProp: t, changeEvent: n = false } = {}) {
  const { props: l, proxy: a } = Se(), r = lt(l, a.$q), o = ui({ required: e, getValue: () => l.for });
  return { requiredForAttr: e, changeEvent: n, tag: t === true ? f(() => l.tag) : { value: "label" }, isDark: r, editable: f(() => l.disable !== true && l.readonly !== true), innerLoading: Q(false), focused: Q(false), hasPopupOpen: false, splitAttrs: ch(), targetUid: o, rootRef: Q(null), targetRef: Q(null), controlRef: Q(null) };
}
function vi(e) {
  const { props: t, emit: n, slots: l, attrs: a, proxy: r } = Se(), { $q: o } = r;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = f(() => jl(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (j) => {
    n("update:modelValue", j);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: T, onFocusout: M }), Object.assign(e, { clearValue: L, onControlFocusin: T, onControlFocusout: M, focus: O }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
    if (t.counter !== false) {
      const j = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, te = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return j + (te !== void 0 ? " / " + te : "");
    }
  }));
  const { isDirtyModel: u, hasRules: c, hasError: s, errorMessage: v, resetValidation: h } = o1(e.focused, e.innerLoading), m = e.floatingLabel !== void 0 ? f(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : f(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), g = f(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), _ = f(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), w = f(() => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (m.value === true ? " q-field--float" : "") + (p.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (s.value === true ? " q-field--error" : "") + (s.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && g.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), k = f(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), p = f(() => t.labelSlot === true || t.label !== void 0), y = f(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== true ? ` text-${t.labelColor}` : "")), b = f(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: m.value, modelValue: t.modelValue, emitValue: e.emitValue })), x = f(() => {
    const j = {};
    return e.targetUid.value && (j.for = e.targetUid.value), t.disable === true && (j["aria-disabled"] = "true"), j;
  });
  function B() {
    var _a2;
    const j = document.activeElement;
    let te = (_a2 = e.targetRef) == null ? void 0 : _a2.value;
    te && (j === null || j.id !== e.targetUid.value) && (te.hasAttribute("tabindex") === true || (te = te.querySelector("[tabindex]")), te !== j && (te == null ? void 0 : te.focus({ preventScroll: true })));
  }
  function O() {
    $a(B);
  }
  function N() {
    zy(B);
    const j = document.activeElement;
    j !== null && e.rootRef.value.contains(j) && j.blur();
  }
  function T(j) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, n("focus", j));
  }
  function M(j, te) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, n("blur", j)), te == null ? void 0 : te());
    });
  }
  function L(j) {
    var _a2;
    He(j), o.platform.is.mobile !== true ? (((_a2 = e.targetRef) == null ? void 0 : _a2.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === true && n("change", null), n("clear", t.modelValue), Ge(() => {
      const te = u.value;
      h(), u.value = te;
    });
  }
  function q(j) {
    [13, 32].includes(j.keyCode) && L(j);
  }
  function E() {
    const j = [];
    return l.prepend !== void 0 && j.push(d("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: Vt }, l.prepend())), j.push(d("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, C())), s.value === true && t.noErrorIcon === false && j.push(H("error", [d(et, { name: o.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? j.push(H("inner-loading-append", l.loading !== void 0 ? l.loading() : [d(_n, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && j.push(H("inner-clearable-append", [d(et, { class: "q-field__focusable-action", name: t.clearIcon || o.iconSet.field.clear, tabindex: 0, role: "button", "aria-hidden": "false", "aria-label": o.lang.label.clear, onKeyup: q, onClick: L })])), l.append !== void 0 && j.push(d("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: Vt }, l.append())), e.getInnerAppend !== void 0 && j.push(H("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && j.push(e.getControlChild()), j;
  }
  function C() {
    const j = [];
    return t.prefix !== void 0 && t.prefix !== null && j.push(d("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && j.push(e.getShadowControl()), e.getControl !== void 0 ? j.push(e.getControl()) : l.rawControl !== void 0 ? j.push(l.rawControl()) : l.control !== void 0 && j.push(d("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, l.control(b.value))), p.value === true && j.push(d("div", { class: y.value }, Pe(l.label, t.label))), t.suffix !== void 0 && t.suffix !== null && j.push(d("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), j.concat(Pe(l.default));
  }
  function D() {
    let j, te;
    s.value === true ? v.value !== null ? (j = [d("div", { role: "alert" }, v.value)], te = `q--slot-error-${v.value}`) : (j = Pe(l.error), te = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (j = [d("div", t.hint)], te = `q--slot-hint-${t.hint}`) : (j = Pe(l.hint), te = "q--slot-hint"));
    const ye = t.counter === true || l.counter !== void 0;
    if (t.hideBottomSpace === true && ye === false && j === void 0) return;
    const K = d("div", { key: te, class: "q-field__messages col" }, j);
    return d("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: Vt }, [t.hideBottomSpace === true ? K : d(Ft, { name: "q-transition--field-message" }, () => K), ye === true ? d("div", { class: "q-field__counter" }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null]);
  }
  function H(j, te) {
    return te === null ? null : d("div", { key: j, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, te);
  }
  let $ = false;
  return On(() => {
    $ = true;
  }), _l(() => {
    $ === true && t.autofocus === true && r.focus();
  }), t.autofocus === true && ft(() => {
    r.focus();
  }), Ke(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(r, { focus: O, blur: N }), function() {
    const te = e.getControl === void 0 && l.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...x.value } : x.value;
    return d(e.tag.value, { ref: e.rootRef, class: [w.value, a.class], style: a.style, ...te }, [l.before !== void 0 ? d("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: Vt }, l.before()) : null, d("div", { class: "q-field__inner relative-position col self-stretch" }, [d("div", { ref: e.controlRef, class: k.value, tabindex: -1, ...e.controlEvents }, E()), g.value === true ? D() : null]), l.after !== void 0 ? d("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: Vt }, l.after()) : null]);
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
  (e == null ? void 0 : e.dataTransfer) && (e.dataTransfer.dropEffect = "copy"), He(e);
}
var hh = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function }, gh = ["rejected"];
function bh({ editable: e, dnd: t, getFileInput: n, addFilesToQueue: l }) {
  const { props: a, emit: r, proxy: o } = Se(), i = Q(null), u = f(() => a.accept !== void 0 ? a.accept.split(",").map((p) => (p = p.trim(), p === "*" ? "*/" : (p.endsWith("/*") && (p = p.slice(0, p.length - 1)), p.toUpperCase()))) : null), c = f(() => parseInt(a.maxFiles, 10)), s = f(() => parseInt(a.maxTotalSize, 10));
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
  function m(p, y, b, x) {
    let B = Array.from(y || p.target.files);
    const O = [], N = () => {
      O.length !== 0 && r("rejected", O);
    };
    if (a.accept !== void 0 && u.value.indexOf("*/") === -1 && (B = na(B, O, "accept", (T) => u.value.some((M) => T.type.toUpperCase().startsWith(M) || T.name.toUpperCase().endsWith(M))), B.length === 0)) return N();
    if (a.maxFileSize !== void 0) {
      const T = parseInt(a.maxFileSize, 10);
      if (B = na(B, O, "max-file-size", (M) => M.size <= T), B.length === 0) return N();
    }
    if (a.multiple !== true && B.length !== 0 && (B = [B[0]]), B.forEach((T) => {
      T.__key = T.webkitRelativePath + T.lastModified + T.name + T.size;
    }), x === true) {
      const T = b.map((M) => M.__key);
      B = na(B, O, "duplicate", (M) => T.includes(M.__key) === false);
    }
    if (B.length === 0) return N();
    if (a.maxTotalSize !== void 0) {
      let T = x === true ? b.reduce((M, L) => M + L.size, 0) : 0;
      if (B = na(B, O, "max-total-size", (M) => (T += M.size, T <= s.value)), B.length === 0) return N();
    }
    if (typeof a.filter == "function") {
      const T = a.filter(B);
      B = na(B, O, "filter", (M) => T.includes(M));
    }
    if (a.maxFiles !== void 0) {
      let T = x === true ? b.length : 0;
      if (B = na(B, O, "max-files", () => (T++, T <= c.value)), B.length === 0) return N();
    }
    if (N(), B.length !== 0) return B;
  }
  function g(p) {
    Wr(p), t.value !== true && (t.value = true);
  }
  function _(p) {
    He(p), (p.relatedTarget !== null || ze.is.safari !== true ? p.relatedTarget !== i.value : document.elementsFromPoint(p.clientX, p.clientY).includes(i.value) === false) === true && (t.value = false);
  }
  function w(p) {
    Wr(p);
    const y = p.dataTransfer.files;
    y.length !== 0 && l(null, y), t.value = false;
  }
  function k(p) {
    if (t.value === true) return d("div", { ref: i, class: `q-${p}__dnd absolute-full`, onDragenter: Wr, onDragover: Wr, onDragleave: _, onDrop: w });
  }
  return Object.assign(o, { pickFiles: v, addFiles: h }), { pickFiles: v, addFiles: h, onDragover: g, onDragleave: _, processFiles: m, getDndNode: k, maxFilesNumber: c, maxTotalSizeNumber: s };
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
  return f(t === true ? () => {
    if (e.type === "file") return n();
  } : n);
}
ve({ name: "QFile", inheritAttrs: false, props: { ...mh, ...wn, ...hh, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...di, ...gh], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), r = fi(), o = Q(null), i = Q(false), u = Ts(e), { pickFiles: c, onDragover: s, onDragleave: v, processFiles: h, getDndNode: m } = bh({ editable: r.editable, dnd: i, getFileInput: q, addFilesToQueue: E }), g = yh(e), _ = f(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), w = f(() => jl(_.value)), k = f(() => _.value.map(($) => $.name).join(", ")), p = f(() => Mu(_.value.reduce(($, j) => $ + j.size, 0))), y = f(() => ({ totalSize: p.value, filesNumber: _.value.length, maxFiles: e.maxFiles })), b = f(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: u.value, ...l, id: r.targetUid.value, disabled: r.editable.value !== true })), x = f(() => "q-file q-field--auto-height" + (i.value === true ? " q-file--dnd" : "")), B = f(() => e.multiple === true && e.append === true);
  function O($) {
    const j = _.value.slice();
    j.splice($, 1), T(j);
  }
  function N($) {
    const j = _.value.indexOf($);
    j !== -1 && O(j);
  }
  function T($) {
    n("update:modelValue", e.multiple === true ? $ : $[0]);
  }
  function M($) {
    $.keyCode === 13 && Vt($);
  }
  function L($) {
    ($.keyCode === 13 || $.keyCode === 32) && c($);
  }
  function q() {
    return o.value;
  }
  function E($, j) {
    const te = h($, j, _.value, B.value), ye = q();
    ye != null && (ye.value = ""), te !== void 0 && ((e.multiple === true ? e.modelValue && te.every((K) => _.value.includes(K)) : e.modelValue === te[0]) || T(B.value === true ? _.value.concat(te) : te));
  }
  function C() {
    return [d("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function D() {
    if (t.file !== void 0) return _.value.length === 0 ? C() : _.value.map((j, te) => t.file({ index: te, file: j, ref: this }));
    if (t.selected !== void 0) return _.value.length === 0 ? C() : t.selected({ files: _.value, ref: this });
    if (e.useChips === true) return _.value.length === 0 ? C() : _.value.map((j, te) => d(Bm, { key: "file-" + te, removable: r.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
      O(te);
    } }, () => d("span", { class: "ellipsis", textContent: j.name })));
    const $ = e.displayValue !== void 0 ? e.displayValue : k.value;
    return $.length !== 0 ? [d("div", { class: e.inputClass, style: e.inputStyle, textContent: $ })] : C();
  }
  function H() {
    const $ = { ref: o, ...b.value, ...g.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: E };
    return e.multiple === true && ($.multiple = true), d("input", $);
  }
  return Object.assign(r, { fieldClass: x, emitValue: T, hasValue: w, inputRef: o, innerValue: _, floatingLabel: f(() => w.value === true || jl(e.displayValue)), computedCounter: f(() => {
    if (e.counterLabel !== void 0) return e.counterLabel(y.value);
    const $ = e.maxFiles;
    return `${_.value.length}${$ !== void 0 ? " / " + $ : ""} (${p.value})`;
  }), getControlChild: () => m("file"), getControl: () => {
    const $ = { ref: r.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return r.editable.value === true && Object.assign($, { onDragover: s, onDragleave: v, onKeydown: M, onKeyup: L }), d("div", $, [H()].concat(D()));
  } }), Object.assign(a, { removeAtIndex: O, removeFile: N, getNativeElement: () => o.value }), Ot(a, "nativeEl", () => o.value), vi(r);
} });
ve({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Kl, ot);
  if (a === ot) return console.error("QFooter needs to be child of QLayout"), ot;
  const r = Q(parseInt(e.heightHint, 10)), o = Q(true), i = Q(nn.value === true || a.isContainer.value === true ? 0 : window.innerHeight), u = f(() => e.reveal === true || a.view.value.indexOf("F") !== -1 || l.platform.is.ios && a.isContainer.value === true), c = f(() => a.isContainer.value === true ? a.containerHeight.value : i.value), s = f(() => {
    if (e.modelValue !== true) return 0;
    if (u.value === true) return o.value === true ? r.value : 0;
    const x = a.scroll.value.position + c.value + r.value - a.height.value;
    return x > 0 ? x : 0;
  }), v = f(() => e.modelValue !== true || u.value === true && o.value !== true), h = f(() => e.modelValue === true && v.value === true && e.reveal === true), m = f(() => "q-footer q-layout__section--marginal " + (u.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (v.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (u.value !== true ? " hidden" : "") : "")), g = f(() => {
    const x = a.rows.value.bottom, B = {};
    return x[0] === "l" && a.left.space === true && (B[l.lang.rtl === true ? "right" : "left"] = `${a.left.size}px`), x[2] === "r" && a.right.space === true && (B[l.lang.rtl === true ? "left" : "right"] = `${a.right.size}px`), B;
  });
  function _(x, B) {
    a.update("footer", x, B);
  }
  function w(x, B) {
    x.value !== B && (x.value = B);
  }
  function k({ height: x }) {
    w(r, x), _("size", x);
  }
  function p() {
    if (e.reveal !== true) return;
    const { direction: x, position: B, inflectionPoint: O } = a.scroll.value;
    w(o, x === "up" || B - O < 100 || a.height.value - c.value - B - r.value < 300);
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
    const x = kt(t.default, [d(Nl, { debounce: 0, onResize: k })]);
    return e.elevated === true && x.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), d("footer", { class: m.value, style: g.value, onFocusin: y }, x);
  };
} });
ve({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: n }) {
  const l = Se(), a = Q(null);
  let r = 0;
  const o = [];
  function i(m) {
    const g = typeof m == "boolean" ? m : e.noErrorFocus !== true, _ = ++r, w = (y, b) => {
      n(`validation${y === true ? "Success" : "Error"}`, b);
    }, k = (y) => {
      const b = y.validate();
      return typeof b.then == "function" ? b.then((x) => ({ valid: x, comp: y }), (x) => ({ valid: false, comp: y, err: x })) : Promise.resolve({ valid: b, comp: y });
    };
    return (e.greedy === true ? Promise.all(o.map(k)).then((y) => y.filter((b) => b.valid !== true)) : o.reduce((y, b) => y.then(() => k(b).then((x) => {
      if (x.valid === false) return Promise.reject(x);
    })), Promise.resolve()).catch((y) => [y])).then((y) => {
      if (y === void 0 || y.length === 0) return _ === r && w(true), true;
      if (_ === r) {
        const { comp: b, err: x } = y[0];
        if (x !== void 0 && console.error(x), w(false, b), g === true) {
          const B = y.find(({ comp: O }) => typeof O.focus == "function" && hl(O.$) === false);
          B !== void 0 && B.comp.focus();
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
    m !== void 0 && He(m);
    const g = r + 1;
    i().then((_) => {
      g === r && _ === true && (e.onSubmit !== void 0 ? n("submit", m) : (m == null ? void 0 : m.target) !== void 0 && typeof m.target.submit == "function" && m.target.submit());
    });
  }
  function s(m) {
    m !== void 0 && He(m), n("reset"), Ge(() => {
      u(), e.autofocus === true && e.noResetFocus !== true && v();
    });
  }
  function v() {
    $a(() => {
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
  return On(() => {
    h = true;
  }), _l(() => {
    h === true && e.autofocus === true && v();
  }), ft(() => {
    e.autofocus === true && v();
  }), Object.assign(l.proxy, { validate: i, resetValidation: u, submit: c, reset: s, focus: v, getValidationComponents: () => o }), () => d("form", { class: "q-form", ref: a, onSubmit: c, onReset: s }, Pe(t.default));
} });
var u1 = ve({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Kl, ot);
  if (a === ot) return console.error("QHeader needs to be child of QLayout"), ot;
  const r = Q(parseInt(e.heightHint, 10)), o = Q(true), i = f(() => e.reveal === true || a.view.value.indexOf("H") !== -1 || l.platform.is.ios && a.isContainer.value === true), u = f(() => {
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
  const k = {};
  return a.instances.header = k, e.modelValue === true && m("size", r.value), m("space", e.modelValue), m("offset", u.value), Ke(() => {
    a.instances.header === k && (a.instances.header = void 0, m("size", 0), m("offset", 0), m("space", false));
  }), () => {
    const p = Er(t.default, []);
    return e.elevated === true && p.push(d("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), p.push(d(Nl, { debounce: 0, onResize: _ })), d("header", { class: v.value, style: h.value, onFocusin: w }, p);
  };
} }), Ds = { ratio: [String, Number] };
function Ns(e, t) {
  return f(() => {
    const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(n) !== true && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
var s1 = 1.7778;
ve({ name: "QImg", props: { ...Ds, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: s1 }, placeholderSrc: String, errorSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: n }) {
  const l = Q(e.initialRatio), a = Ns(e, l), r = Se(), { registerTimeout: o, removeTimeout: i } = Xn(), { registerTimeout: u, removeTimeout: c } = Xn(), s = f(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), v = f(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: true } : null), h = [Q(null), Q(s.value)], m = Q(0), g = Q(false), _ = Q(false), w = f(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), k = f(() => ({ width: e.width, height: e.height })), p = f(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition q-img__image--`), y = f(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
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
  function B({ target: q }) {
    hl(r) === false && (i(), l.value = q.naturalHeight === 0 ? 0.5 : q.naturalWidth / q.naturalHeight, O(q, 1));
  }
  function O(q, E) {
    E === 1e3 || hl(r) === true || (q.complete === true ? N(q) : o(() => {
      O(q, E + 1);
    }, 50));
  }
  function N(q) {
    hl(r) !== true && (m.value = m.value ^ 1, h[m.value].value = null, x(), q.getAttribute("__qerror") !== "true" && (_.value = false), n("load", q.currentSrc || q.src));
  }
  function T(q) {
    i(), x(), _.value = true, h[m.value].value = v.value, h[m.value ^ 1].value = s.value, n("error", q);
  }
  function M(q) {
    const E = h[q].value, C = { key: "img_" + q, class: p.value, style: y.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...E };
    return m.value === q ? Object.assign(C, { class: C.class + "current", onLoad: B, onError: T }) : C.class += "loaded", d("div", { class: "q-img__container absolute-full", key: "img" + q }, d("img", C));
  }
  function L() {
    return g.value === false ? d("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, Pe(t[_.value === true ? "error" : "default"])) : d("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [d(_n, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  {
    let q = function() {
      he(() => e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null, (E) => {
        i(), _.value = false, E === null ? (x(), h[m.value ^ 1].value = s.value) : b(), h[m.value].value = E;
      }, { immediate: true });
    };
    nn.value === true ? ft(q) : q();
  }
  return () => {
    const q = [];
    return a.value !== null && q.push(d("div", { key: "filler", style: a.value })), h[0].value !== null && q.push(M(0)), h[1].value !== null && q.push(M(1)), q.push(d(Ft, { name: "q-transition--fade" }, L)), d("div", { key: "main", class: w.value, style: k.value, role: "img", "aria-label": e.alt }, q);
  };
} });
var { passive: Ml } = dt;
ve({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: Wl, initialIndex: { type: Number, default: 0 }, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: n }) {
  const l = Q(false), a = Q(true), r = Q(null), o = Q(null);
  let i = e.initialIndex, u, c;
  const s = f(() => "q-infinite-scroll__loading" + (l.value === true ? "" : " invisible"));
  function v() {
    if (e.disable === true || l.value === true || a.value === false) return;
    const O = zr(u), N = gl(u), T = _a(u);
    e.reverse === false ? Math.round(N + T + e.offset) >= Math.round(O) && h() : Math.round(N) <= e.offset && h();
  }
  function h() {
    if (e.disable === true || l.value === true || a.value === false) return;
    i++, l.value = true;
    const O = zr(u);
    n("load", i, (N) => {
      a.value === true && (l.value = false, Ge(() => {
        if (e.reverse === true) {
          const T = zr(u), M = gl(u), L = T - O;
          ba(u, M + L);
        }
        N === true ? _() : r.value && r.value.closest("body") && c();
      }));
    });
  }
  function m() {
    i = 0;
  }
  function g() {
    a.value === false && (a.value = true, u.addEventListener("scroll", c, Ml)), v();
  }
  function _() {
    var _a2;
    a.value === true && (a.value = false, l.value = false, u.removeEventListener("scroll", c, Ml), (_a2 = c == null ? void 0 : c.cancel) == null ? void 0 : _a2.call(c));
  }
  function w() {
    if (u && a.value === true && u.removeEventListener("scroll", c, Ml), u = Vn(r.value, e.scrollTarget), a.value === true) {
      if (u.addEventListener("scroll", c, Ml), e.reverse === true) {
        const O = zr(u), N = _a(u);
        ba(u, O - N);
      }
      v();
    }
  }
  function k(O) {
    i = O;
  }
  function p(O) {
    O = parseInt(O, 10);
    const N = c;
    c = O <= 0 ? v : Ma(v, isNaN(O) === true ? 100 : O), u && a.value === true && (N !== void 0 && u.removeEventListener("scroll", N, Ml), u.addEventListener("scroll", c, Ml));
  }
  function y(O) {
    if (b.value === true) {
      if (o.value === null) {
        O !== true && Ge(() => {
          y(true);
        });
        return;
      }
      const N = `${l.value === true ? "un" : ""}pauseAnimations`;
      Array.from(o.value.getElementsByTagName("svg")).forEach((T) => {
        T[N]();
      });
    }
  }
  const b = f(() => e.disable !== true && a.value === true);
  he([l, b], () => {
    y();
  }), he(() => e.disable, (O) => {
    O === true ? _() : g();
  }), he(() => e.reverse, () => {
    l.value === false && a.value === true && v();
  }), he(() => e.scrollTarget, w), he(() => e.debounce, p);
  let x = false;
  _l(() => {
    x !== false && u && ba(u, x);
  }), On(() => {
    x = u ? gl(u) : false;
  }), Ke(() => {
    a.value === true && u.removeEventListener("scroll", c, Ml);
  }), ft(() => {
    p(e.debounce), w(), l.value === false && y();
  });
  const B = Se();
  return Object.assign(B.proxy, { poll: () => {
    c == null ? void 0 : c();
  }, trigger: h, stop: _, reset: m, resume: g, setIndex: k, updateScrollTarget: w }), () => {
    const O = Er(t.default, []);
    return b.value === true && O[e.reverse === false ? "push" : "unshift"](d("div", { ref: o, class: s.value }, Pe(t.loading))), d("div", { class: "q-infinite-scroll", ref: r }, O);
  };
} });
ve({ name: "QInnerLoading", props: { ...nt, ...Ol, showing: Boolean, color: String, size: { type: [String, Number], default: "42px" }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { transitionProps: a, transitionStyle: r } = ri(e), o = f(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (l.value === true ? " q-inner-loading--dark" : "")), i = f(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function u() {
    const s = [d(_n, { size: e.size, color: e.color })];
    return e.label !== void 0 && s.push(d("div", { class: i.value, style: e.labelStyle }, [e.label])), s;
  }
  function c() {
    return e.showing === true ? d("div", { class: o.value, style: r.value }, t.default !== void 0 ? t.default() : u()) : null;
  }
  return () => d(Ft, a.value, c);
} });
var Cd = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" }, Oo = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } }, ph = Object.keys(Oo);
ph.forEach((e) => {
  Oo[e].regex = new RegExp(Oo[e].pattern);
});
var c1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + ph.join("") + "])|(.)", "g"), kd = /[.*+?^${}()|[\]\\]/g, Pt = "", d1 = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function f1(e, t, n, l) {
  let a, r, o, i, u, c;
  const s = Q(null), v = Q(m());
  function h() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  he(() => e.type + e.autogrow, _), he(() => e.mask, (T) => {
    if (T !== void 0) w(v.value, true);
    else {
      const M = O(v.value);
      _(), e.modelValue !== M && t("update:modelValue", M);
    }
  }), he(() => e.fillMask + e.reverseFillMask, () => {
    s.value === true && w(v.value, true);
  }), he(() => e.unmaskedValue, () => {
    s.value === true && w(v.value);
  });
  function m() {
    if (_(), s.value === true) {
      const T = x(O(e.modelValue));
      return e.fillMask !== false ? N(T) : T;
    }
    return e.modelValue;
  }
  function g(T) {
    if (T < a.length) return a.slice(-T);
    let M = "", L = a;
    const q = L.indexOf(Pt);
    if (q !== -1) {
      for (let E = T - L.length; E > 0; E--) M += Pt;
      L = L.slice(0, q) + M + L.slice(q);
    }
    return L;
  }
  function _() {
    if (s.value = e.mask !== void 0 && e.mask.length !== 0 && h(), s.value === false) {
      i = void 0, a = "", r = "";
      return;
    }
    const T = Cd[e.mask] === void 0 ? e.mask : Cd[e.mask], M = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", L = M.replace(kd, "\\$&"), q = [], E = [], C = [];
    let D = e.reverseFillMask === true, H = "", $ = "";
    T.replace(c1, (K, A, J, X, ge) => {
      if (X !== void 0) {
        const F = Oo[X];
        C.push(F), $ = F.negate, D === true && (E.push("(?:" + $ + "+)?(" + F.pattern + "+)?(?:" + $ + "+)?(" + F.pattern + "+)?"), D = false), E.push("(?:" + $ + "+)?(" + F.pattern + ")?");
      } else if (J !== void 0) H = "\\" + (J === "\\" ? "" : J), C.push(J), q.push("([^" + H + "]+)?" + H + "?");
      else {
        const F = A !== void 0 ? A : ge;
        H = F === "\\" ? "\\\\\\\\" : F.replace(kd, "\\\\$&"), C.push(F), q.push("([^" + H + "]+)?" + H + "?");
      }
    });
    const j = new RegExp("^" + q.join("") + "(" + (H === "" ? "." : "[^" + H + "]") + "+)?" + (H === "" ? "" : "[" + H + "]*") + "$"), te = E.length - 1, ye = E.map((K, A) => A === 0 && e.reverseFillMask === true ? new RegExp("^" + L + "*" + K) : A === te ? new RegExp("^" + K + "(" + ($ === "" ? "." : $) + "+)?" + (e.reverseFillMask === true ? "$" : L + "*")) : new RegExp("^" + K));
    o = C, i = (K) => {
      const A = j.exec(e.reverseFillMask === true ? K : K.slice(0, C.length + 1));
      A !== null && (K = A.slice(1).join(""));
      const J = [], X = ye.length;
      for (let ge = 0, F = K; ge < X; ge++) {
        const P = ye[ge].exec(F);
        if (P === null) break;
        F = F.slice(P.shift().length), J.push(...P);
      }
      return J.length !== 0 ? J.join("") : K;
    }, a = C.map((K) => typeof K == "string" ? K : Pt).join(""), r = a.split(Pt).join(M);
  }
  function w(T, M, L) {
    const q = l.value, E = q.selectionEnd, C = q.value.length - E, D = O(T);
    M === true && _();
    const H = x(D), $ = e.fillMask !== false ? N(H) : H, j = v.value !== $;
    q.value !== $ && (q.value = $), j === true && (v.value = $), document.activeElement === q && Ge(() => {
      if ($ === r) {
        const ye = e.reverseFillMask === true ? r.length : 0;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (L === "insertFromPaste" && e.reverseFillMask !== true) {
        const ye = q.selectionEnd;
        let K = E - 1;
        for (let A = u; A <= K && A < ye; A++) a[A] !== Pt && K++;
        p.right(q, K);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(L) !== -1) {
        const ye = e.reverseFillMask === true ? E === 0 ? $.length > H.length ? 1 : 0 : Math.max(0, $.length - ($ === r ? 0 : Math.min(H.length, C) + 1)) + 1 : E;
        q.setSelectionRange(ye, ye, "forward");
        return;
      }
      if (e.reverseFillMask === true) if (j === true) {
        const ye = Math.max(0, $.length - ($ === r ? 0 : Math.min(H.length, C + 1)));
        ye === 1 && E === 1 ? q.setSelectionRange(ye, ye, "forward") : p.rightReverse(q, ye);
      } else {
        const ye = $.length - C;
        q.setSelectionRange(ye, ye, "backward");
      }
      else if (j === true) {
        const ye = Math.max(0, a.indexOf(Pt), Math.min(H.length, E) - 1);
        p.right(q, ye);
      } else {
        const ye = E - 1;
        p.right(q, ye);
      }
    });
    const te = e.unmaskedValue === true ? O($) : $;
    String(e.modelValue) !== te && (e.modelValue !== null || te !== "") && n(te, true);
  }
  function k(T, M, L) {
    const q = x(O(T.value));
    M = Math.max(0, a.indexOf(Pt), Math.min(q.length, M)), u = M, T.setSelectionRange(M, L, "forward");
  }
  const p = { left(T, M) {
    const L = a.slice(M - 1).indexOf(Pt) === -1;
    let q = Math.max(0, M - 1);
    for (; q >= 0; q--) if (a[q] === Pt) {
      M = q, L === true && M++;
      break;
    }
    if (q < 0 && a[M] !== void 0 && a[M] !== Pt) return p.right(T, 0);
    M >= 0 && T.setSelectionRange(M, M, "backward");
  }, right(T, M) {
    const L = T.value.length;
    let q = Math.min(L, M + 1);
    for (; q <= L; q++) if (a[q] === Pt) {
      M = q;
      break;
    } else a[q - 1] === Pt && (M = q);
    if (q > L && a[M - 1] !== void 0 && a[M - 1] !== Pt) return p.left(T, L);
    T.setSelectionRange(M, M, "forward");
  }, leftReverse(T, M) {
    const L = g(T.value.length);
    let q = Math.max(0, M - 1);
    for (; q >= 0; q--) if (L[q - 1] === Pt) {
      M = q;
      break;
    } else if (L[q] === Pt && (M = q, q === 0)) break;
    if (q < 0 && L[M] !== void 0 && L[M] !== Pt) return p.rightReverse(T, 0);
    M >= 0 && T.setSelectionRange(M, M, "backward");
  }, rightReverse(T, M) {
    const L = T.value.length, q = g(L), E = q.slice(0, M + 1).indexOf(Pt) === -1;
    let C = Math.min(L, M + 1);
    for (; C <= L; C++) if (q[C - 1] === Pt) {
      M = C, M > 0 && E === true && M--;
      break;
    }
    if (C > L && q[M - 1] !== void 0 && q[M - 1] !== Pt) return p.leftReverse(T, L);
    T.setSelectionRange(M, M, "forward");
  } };
  function y(T) {
    t("click", T), c = void 0;
  }
  function b(T) {
    if (t("keydown", T), Ql(T) === true || T.altKey === true) return;
    const M = l.value, L = M.selectionStart, q = M.selectionEnd;
    if (T.shiftKey || (c = void 0), T.keyCode === 37 || T.keyCode === 39) {
      T.shiftKey && c === void 0 && (c = M.selectionDirection === "forward" ? L : q);
      const E = p[(T.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (T.preventDefault(), E(M, c === L ? q : L), T.shiftKey) {
        const C = M.selectionStart;
        M.setSelectionRange(Math.min(c, C), Math.max(c, C), "forward");
      }
    } else T.keyCode === 8 && e.reverseFillMask !== true && L === q ? (p.left(M, L), M.setSelectionRange(M.selectionStart, q, "backward")) : T.keyCode === 46 && e.reverseFillMask === true && L === q && (p.rightReverse(M, q), M.setSelectionRange(L, M.selectionEnd, "forward"));
  }
  function x(T) {
    if (T == null || T === "") return "";
    if (e.reverseFillMask === true) return B(T);
    const M = o;
    let L = 0, q = "";
    for (let E = 0; E < M.length; E++) {
      const C = T[L], D = M[E];
      if (typeof D == "string") q += D, C === D && L++;
      else if (C !== void 0 && D.regex.test(C)) q += D.transform !== void 0 ? D.transform(C) : C, L++;
      else return q;
    }
    return q;
  }
  function B(T) {
    const M = o, L = a.indexOf(Pt);
    let q = T.length - 1, E = "";
    for (let C = M.length - 1; C >= 0 && q !== -1; C--) {
      const D = M[C];
      let H = T[q];
      if (typeof D == "string") E = D + E, H === D && q--;
      else if (H !== void 0 && D.regex.test(H)) do
        E = (D.transform !== void 0 ? D.transform(H) : H) + E, q--, H = T[q];
      while (L === C && H !== void 0 && D.regex.test(H));
      else return E;
    }
    return E;
  }
  function O(T) {
    return typeof T != "string" || i === void 0 ? typeof T == "number" ? i("" + T) : T : i(T);
  }
  function N(T) {
    return r.length - T.length <= 0 ? T : e.reverseFillMask === true && T.length !== 0 ? r.slice(0, -T.length) + T : T + r.slice(T.length);
  }
  return { innerValue: v, hasMask: s, moveCursorForPaste: k, updateMaskValue: w, onMaskedKeydown: b, onMaskedClick: y };
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
  const v = Q(null), h = Ts(e), { innerValue: m, hasMask: g, moveCursorForPaste: _, updateMaskValue: w, onMaskedKeydown: k, onMaskedClick: p } = f1(e, t, H, v), y = yh(e, true), b = f(() => jl(m.value)), x = _h(C), B = fi({ changeEvent: true }), O = f(() => e.type === "textarea" || e.autogrow === true), N = f(() => O.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), T = f(() => {
    const A = { ...B.splitAttrs.listeners.value, onInput: C, onPaste: E, onChange: j, onBlur: te, onFocus: wt };
    return A.onCompositionstart = A.onCompositionupdate = A.onCompositionend = x, g.value === true && (A.onKeydown = k, A.onClick = p), e.autogrow === true && (A.onAnimationend = D), A;
  }), M = f(() => {
    const A = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: h.value, ...B.splitAttrs.attributes.value, id: B.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return O.value === false && (A.type = e.type), e.autogrow === true && (A.rows = 1), A;
  });
  he(() => e.type, () => {
    v.value && (v.value.value = e.modelValue);
  }), he(() => e.modelValue, (A) => {
    if (g.value === true) {
      if (u === true && (u = false, String(A) === o)) return;
      w(A);
    } else m.value !== A && (m.value = A, e.type === "number" && r.hasOwnProperty("value") === true && (i === true ? i = false : delete r.value));
    e.autogrow === true && Ge($);
  }), he(() => e.autogrow, (A) => {
    A === true ? Ge($) : v.value !== null && n.rows > 0 && (v.value.style.height = "auto");
  }), he(() => e.dense, () => {
    e.autogrow === true && Ge($);
  });
  function L() {
    $a(() => {
      const A = document.activeElement;
      v.value !== null && v.value !== A && (A === null || A.id !== B.targetUid.value) && v.value.focus({ preventScroll: true });
    });
  }
  function q() {
    var _a2;
    (_a2 = v.value) == null ? void 0 : _a2.select();
  }
  function E(A) {
    if (g.value === true && e.reverseFillMask !== true) {
      const J = A.target;
      _(J, J.selectionStart, J.selectionEnd);
    }
    t("paste", A);
  }
  function C(A) {
    if (!A || !A.target) return;
    if (e.type === "file") {
      t("update:modelValue", A.target.files);
      return;
    }
    const J = A.target.value;
    if (A.target.qComposing === true) {
      r.value = J;
      return;
    }
    if (g.value === true) w(J, false, A.inputType);
    else if (H(J), N.value === true && A.target === document.activeElement) {
      const { selectionStart: X, selectionEnd: ge } = A.target;
      X !== void 0 && ge !== void 0 && Ge(() => {
        A.target === document.activeElement && J.indexOf(A.target.value) === 0 && A.target.setSelectionRange(X, ge);
      });
    }
    e.autogrow === true && $();
  }
  function D(A) {
    t("animationend", A), $();
  }
  function H(A, J) {
    s = () => {
      c = null, e.type !== "number" && r.hasOwnProperty("value") === true && delete r.value, e.modelValue !== A && o !== A && (o = A, J === true && (u = true), t("update:modelValue", A), Ge(() => {
        o === A && (o = NaN);
      })), s = void 0;
    }, e.type === "number" && (i = true, r.value = A), e.debounce !== void 0 ? (c !== null && clearTimeout(c), r.value = A, c = setTimeout(s, e.debounce)) : s();
  }
  function $() {
    requestAnimationFrame(() => {
      const A = v.value;
      if (A !== null) {
        const J = A.parentNode.style, { scrollTop: X } = A, { overflowY: ge, maxHeight: F } = a.platform.is.firefox === true ? {} : window.getComputedStyle(A), P = ge !== void 0 && ge !== "scroll";
        P === true && (A.style.overflowY = "hidden"), J.marginBottom = A.scrollHeight - 1 + "px", A.style.height = "1px", A.style.height = A.scrollHeight + "px", P === true && (A.style.overflowY = parseInt(F, 10) < A.scrollHeight ? "auto" : "hidden"), J.marginBottom = "", A.scrollTop = X;
      }
    });
  }
  function j(A) {
    x(A), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), t("change", A.target.value);
  }
  function te(A) {
    A !== void 0 && wt(A), c !== null && (clearTimeout(c), c = null), s == null ? void 0 : s(), i = false, u = false, delete r.value, e.type !== "file" && setTimeout(() => {
      v.value !== null && (v.value.value = m.value !== void 0 ? m.value : "");
    });
  }
  function ye() {
    return r.hasOwnProperty("value") === true ? r.value : m.value !== void 0 ? m.value : "";
  }
  Ke(() => {
    te();
  }), ft(() => {
    e.autogrow === true && $();
  }), Object.assign(B, { innerValue: m, fieldClass: f(() => `q-${O.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: f(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: v, emitValue: H, hasValue: b, floatingLabel: f(() => b.value === true && (e.type !== "number" || isNaN(m.value) === false) || jl(e.displayValue)), getControl: () => d(O.value === true ? "textarea" : "input", { ref: v, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...M.value, ...T.value, ...e.type !== "file" ? { value: ye() } : y.value }), getShadowControl: () => d("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (O.value === true ? "" : " text-no-wrap") }, [d("span", { class: "invisible" }, ye()), d("span", e.shadowText)]) });
  const K = vi(B);
  return Object.assign(l, { focus: L, select: q, getNativeElement: () => v.value }), Ot(l, "nativeEl", () => v.value), K;
} }), qd = { threshold: 0, root: null, rootMargin: "0px" };
function Td(e, t, n) {
  var _a2;
  let l, a, r;
  typeof n == "function" ? (l = n, a = qd, r = t.cfg === void 0) : (l = n.handler, a = Object.assign({}, qd, n.cfg), r = t.cfg === void 0 || kn(t.cfg, a) === false), t.handler !== l && (t.handler = l), r === true && (t.cfg = a, (_a2 = t.observer) == null ? void 0 : _a2.unobserve(e), t.observer = new IntersectionObserver(([o]) => {
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
var b1 = Rn({ name: "intersection", mounted(e, { modifiers: t, value: n }) {
  const l = { once: t.once === true };
  Td(e, l, n), e.__qvisible = l;
}, updated(e, t) {
  const n = e.__qvisible;
  n !== void 0 && Td(e, n, t.value);
}, beforeUnmount: Sh });
ve({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: n }) {
  const l = Q(nn.value === true ? e.ssrPrerender : false), a = f(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: u, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : u), r = f(() => e.disable !== true && (nn.value !== true || e.once !== true || e.ssrPrerender !== true)), o = f(() => [[b1, a.value, void 0, { once: e.once }]]), i = f(() => `--q-transition-duration: ${e.transitionDuration}ms`);
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
var y1 = ["ul", "ol"], xh = ve({ name: "QList", props: { ...nt, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => y1.includes(e.tag) ? null : "list"), r = f(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (l.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => d(e.tag, { class: r.value, role: a.value }, Pe(t.default));
} }), Md = [34, 37, 40, 33, 39, 38], p1 = Object.keys(Fs);
ve({ name: "QKnob", props: { ...wn, ...Fs, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = Q(e.modelValue), o = Q(false), i = f(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), u = f(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax);
  let c;
  function s() {
    r.value = e.modelValue === null ? i.value : ct(e.modelValue, i.value, u.value), L(true);
  }
  he(() => `${e.modelValue}|${i.value}|${u.value}`, s), s();
  const v = f(() => e.disable === false && e.readonly === false), h = f(() => "q-knob non-selectable" + (v.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), m = f(() => (String(e.step).trim().split(".")[1] || "").length), g = f(() => e.step === 0 ? 1 : e.step), _ = f(() => e.instantFeedback === true || o.value === true), w = a.platform.is.mobile === true ? f(() => v.value === true ? { onClick: O } : {}) : f(() => v.value === true ? { onMousedown: B, onClick: O, onKeydown: N, onKeyup: M } : {}), k = f(() => v.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), p = f(() => {
    const C = {};
    return p1.forEach((D) => {
      C[D] = e[D];
    }), C;
  });
  function y(C) {
    C.isFinal ? (T(C.evt, true), o.value = false) : (C.isFirst && (x(), o.value = true), T(C.evt));
  }
  const b = f(() => [[gn, y, void 0, { prevent: true, stop: true, mouse: true }]]);
  function x() {
    const { top: C, left: D, width: H, height: $ } = l.$el.getBoundingClientRect();
    c = { top: C + $ / 2, left: D + H / 2 };
  }
  function B(C) {
    x(), T(C);
  }
  function O(C) {
    x(), T(C, true);
  }
  function N(C) {
    if (Md.includes(C.keyCode) === false) return;
    He(C);
    const D = ([34, 33].includes(C.keyCode) ? 10 : 1) * g.value, H = [34, 37, 40].includes(C.keyCode) ? -D : D;
    r.value = ct(parseFloat((r.value + H).toFixed(m.value)), i.value, u.value), L();
  }
  function T(C, D) {
    const H = en(C), $ = Math.abs(H.top - c.top), j = Math.sqrt($ ** 2 + Math.abs(H.left - c.left) ** 2);
    let te = Math.asin($ / j) * (180 / Math.PI);
    H.top < c.top ? te = c.left < H.left ? 90 - te : 270 + te : te = c.left < H.left ? te + 90 : 270 - te, a.lang.rtl === true ? te = Co(-te - e.angle, 0, 360) : e.angle && (te = Co(te - e.angle, 0, 360)), e.reverse === true && (te = 360 - te);
    let ye = e.min + te / 360 * (e.max - e.min);
    if (g.value !== 0) {
      const K = ye % g.value;
      ye = ye - K + (Math.abs(K) >= g.value / 2 ? (K < 0 ? -1 : 1) * g.value : 0), ye = parseFloat(ye.toFixed(m.value));
    }
    ye = ct(ye, i.value, u.value), n("dragValue", ye), r.value !== ye && (r.value = ye), L(D);
  }
  function M(C) {
    Md.includes(C.keyCode) && L(true);
  }
  function L(C) {
    e.modelValue !== r.value && n("update:modelValue", r.value), C === true && n("change", r.value);
  }
  const q = $r(e);
  function E() {
    return d("input", q.value);
  }
  return () => {
    const C = { class: h.value, role: "slider", "aria-valuemin": i.value, "aria-valuemax": u.value, "aria-valuenow": e.modelValue, ...k.value, ...p.value, value: r.value, instantFeedback: _.value, ...w.value }, D = { default: t.default };
    return v.value === true && e.name !== void 0 && (D.internal = E), pn(Vm, C, D, "knob", v.value, () => b.value);
  };
} });
var { passive: Ed } = dt, _1 = ["both", "horizontal", "vertical"], Ch = ve({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => _1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: Wl }, emits: ["scroll"], setup(e, { emit: t }) {
  const n = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } };
  let l = null, a, r;
  he(() => e.scrollTarget, () => {
    u(), i();
  });
  function o() {
    l == null ? void 0 : l();
    const v = Math.max(0, gl(a)), h = oi(a), m = { top: v - n.position.top, left: h - n.position.left };
    if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
    const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
    n.position = { top: v, left: h }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === true && (n.direction = g, n.inflectionPoint = n.position), t("scroll", { ...n });
  }
  function i() {
    a = Vn(r, e.scrollTarget), a.addEventListener("scroll", c, Ed), c(true);
  }
  function u() {
    a !== void 0 && (a.removeEventListener("scroll", c, Ed), a = void 0);
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
} }), w1 = ve({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = Q(null), r = Q(l.screen.height), o = Q(e.container === true ? 0 : l.screen.width), i = Q({ position: 0, direction: "down", inflectionPoint: 0 }), u = Q(0), c = Q(nn.value === true ? 0 : ro()), s = f(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), v = f(() => e.container === false ? { minHeight: l.screen.height + "px" } : null), h = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), m = f(() => c.value !== 0 ? { [l.lang.rtl === true ? "right" : "left"]: 0, [l.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function g(b) {
    if (e.container === true || document.qScrollPrevented !== true) {
      const x = { position: b.position.top, direction: b.direction, directionChanged: b.directionChanged, inflectionPoint: b.inflectionPoint.top, delta: b.delta.top };
      i.value = x, e.onScroll !== void 0 && n("scroll", x);
    }
  }
  function _(b) {
    const { height: x, width: B } = b;
    let O = false;
    r.value !== x && (O = true, r.value = x, e.onScrollHeight !== void 0 && n("scrollHeight", x), k()), o.value !== B && (O = true, o.value = B), O === true && e.onResize !== void 0 && n("resize", b);
  }
  function w({ height: b }) {
    u.value !== b && (u.value = b, k());
  }
  function k() {
    if (e.container === true) {
      const b = r.value > u.value ? ro() : 0;
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
  }, update(b, x, B) {
    y[b][x] = B;
  } };
  if (hn(Kl, y), ro() > 0) {
    let b = function() {
      O = null, N.classList.remove("hide-scrollbar");
    }, x = function() {
      if (O === null) {
        if (N.scrollHeight > l.screen.height) return;
        N.classList.add("hide-scrollbar");
      } else clearTimeout(O);
      O = setTimeout(b, 300);
    }, B = function(T) {
      O !== null && T === "remove" && (clearTimeout(O), b()), window[`${T}EventListener`]("resize", x);
    }, O = null;
    const N = document.body;
    he(() => e.container !== true ? "add" : "remove", B), e.container !== true && B("add"), Go(() => {
      B("remove");
    });
  }
  return () => {
    const b = kt(t.default, [d(Ch, { onScroll: g }), d(Nl, { onResize: _ })]), x = d("div", { class: s.value, style: v.value, ref: e.container === true ? void 0 : a, tabindex: -1 }, b);
    return e.container === true ? d("div", { class: "q-layout-container overflow-hidden", ref: a }, [d(Nl, { onResize: w }), d("div", { class: "absolute-full", style: h.value }, [d("div", { class: "scroll", style: m.value }, [x])])]) : x;
  };
} }), S1 = ["horizontal", "vertical", "cell", "none"], x1 = ve({ name: "QMarkupTable", props: { ...nt, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => S1.includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => d("div", { class: a.value }, [d("table", { class: "q-table" }, Pe(t.default))]);
} });
ve({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  const { isHydrated: n } = Nm();
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
  const { proxy: l } = Se(), a = lt(e, l.$q), r = el(e, Rm), o = Q(null), { refocusTargetEl: i, refocusTarget: u } = Am(e, o), c = f(() => Ye(e.modelValue) === Ye(e.val)), s = f(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (a.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), v = f(() => {
    const b = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${b}`;
  }), h = f(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), m = f(() => e.disable === true ? -1 : e.tabindex || 0), g = f(() => {
    const b = { type: "radio" };
    return e.name !== void 0 && Object.assign(b, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), b;
  }), _ = Sl(g);
  function w(b) {
    b !== void 0 && (He(b), u(b)), e.disable !== true && c.value !== true && n("update:modelValue", e.val, b);
  }
  function k(b) {
    (b.keyCode === 13 || b.keyCode === 32) && He(b);
  }
  function p(b) {
    (b.keyCode === 13 || b.keyCode === 32) && w(b);
  }
  Object.assign(l, { set: w });
  const y = C1();
  return () => {
    const b = h.value !== null ? [d("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [d(et, { class: "q-radio__icon", name: h.value })])] : [y];
    e.disable !== true && _(b, "unshift", " q-radio__native q-ma-none q-pa-none");
    const x = [d("div", { class: v.value, style: r.value, "aria-hidden": "true" }, b)];
    i.value !== null && x.push(i.value);
    const B = e.label !== void 0 ? kt(t.default, [e.label]) : Pe(t.default);
    return B !== void 0 && x.push(d("div", { class: "q-radio__label q-anchor--skip" }, B)), d("div", { ref: o, class: s.value, tabindex: m.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: w, onKeydown: k, onKeyup: p }, x);
  };
} }), q1 = ve({ name: "QToggle", props: { ...$m, icon: String, iconColor: String }, emits: Pm, setup(e) {
  function t(n, l) {
    const a = f(() => (n.value === true ? e.checkedIcon : l.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), r = f(() => n.value === true ? e.iconColor : null);
    return () => [d("div", { class: "q-toggle__track" }), d("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, a.value !== void 0 ? [d(et, { name: a.value, color: r.value })] : void 0)];
  }
  return Lm("toggle", t);
} }), kh = { radio: k1, checkbox: ir, toggle: q1 }, T1 = Object.keys(kh);
function Yi(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l[n];
}
var M1 = ve({ name: "QOptionGroup", props: { ...nt, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every(Rt), default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], name: String, type: { type: String, default: "radio", validator: (e) => T1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: n }) {
  const { proxy: { $q: l } } = Se(), a = Array.isArray(e.modelValue);
  e.type === "radio" ? a === true && console.error("q-option-group: model should not be array") : a === false && console.error("q-option-group: model should be array in your case");
  const r = lt(e, l), o = f(() => kh[e.type]), i = f(() => Yi(e.optionValue, "value")), u = f(() => Yi(e.optionLabel, "label")), c = f(() => Yi(e.optionDisable, "disable")), s = f(() => e.options.map((g) => ({ val: i.value(g), name: g.name === void 0 ? e.name : g.name, disable: e.disable || c.value(g), leftLabel: g.leftLabel === void 0 ? e.leftLabel : g.leftLabel, color: g.color === void 0 ? e.color : g.color, checkedIcon: g.checkedIcon, uncheckedIcon: g.uncheckedIcon, dark: g.dark === void 0 ? r.value : g.dark, size: g.size === void 0 ? e.size : g.size, dense: e.dense, keepColor: g.keepColor === void 0 ? e.keepColor : g.keepColor }))), v = f(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), h = f(() => {
    const g = { role: "group" };
    return e.type === "radio" && (g.role = "radiogroup", e.disable === true && (g["aria-disabled"] = "true")), g;
  });
  function m(g) {
    t("update:modelValue", g);
  }
  return () => d("div", { class: v.value, ...h.value }, e.options.map((g, _) => {
    const w = n["label-" + _] !== void 0 ? () => n["label-" + _](g) : n.label !== void 0 ? () => n.label(g) : void 0;
    return d("div", [d(o.value, { label: w === void 0 ? u.value(g) : null, modelValue: e.modelValue, "onUpdate:modelValue": m, ...s.value[_] }, w)]);
  }));
} });
ve({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = qt(Kl, ot);
  if (l === ot) return console.error("QPage needs to be a deep child of QLayout"), ot;
  if (qt(Xv, ot) === ot) return console.error("QPage needs to be child of QPageContainer"), ot;
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
var E1 = ve({ name: "QPageContainer", setup(e, { slots: t }) {
  const { proxy: { $q: n } } = Se(), l = qt(Kl, ot);
  if (l === ot) return console.error("QPageContainer needs to be child of QLayout"), ot;
  hn(Xv, true);
  const a = f(() => {
    const r = {};
    return l.header.space === true && (r.paddingTop = `${l.header.size}px`), l.right.space === true && (r[`padding${n.lang.rtl === true ? "Left" : "Right"}`] = `${l.right.size}px`), l.footer.space === true && (r.paddingBottom = `${l.footer.size}px`), l.left.space === true && (r[`padding${n.lang.rtl === true ? "Right" : "Left"}`] = `${l.left.size}px`), r;
  });
  return () => d("div", { class: "q-page-container", style: a.value }, Pe(t.default));
} }), Du = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function qh() {
  const { props: e, proxy: { $q: t } } = Se(), n = qt(Kl, ot);
  if (n === ot) return console.error("QPageSticky needs to be child of QLayout"), ot;
  const l = f(() => {
    const v = e.position;
    return { top: v.indexOf("top") !== -1, right: v.indexOf("right") !== -1, bottom: v.indexOf("bottom") !== -1, left: v.indexOf("left") !== -1, vertical: v === "top" || v === "bottom", horizontal: v === "left" || v === "right" };
  }), a = f(() => n.header.offset), r = f(() => n.right.offset), o = f(() => n.footer.offset), i = f(() => n.left.offset), u = f(() => {
    let v = 0, h = 0;
    const m = l.value, g = t.lang.rtl === true ? -1 : 1;
    m.top === true && a.value !== 0 ? h = `${a.value}px` : m.bottom === true && o.value !== 0 && (h = `${-o.value}px`), m.left === true && i.value !== 0 ? v = `${g * i.value}px` : m.right === true && r.value !== 0 && (v = `${-g * r.value}px`);
    const _ = { transform: `translate(${v}, ${h})` };
    return e.offset && (_.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === true ? (i.value !== 0 && (_[t.lang.rtl === true ? "right" : "left"] = `${i.value}px`), r.value !== 0 && (_[t.lang.rtl === true ? "left" : "right"] = `${r.value}px`)) : m.horizontal === true && (a.value !== 0 && (_.top = `${a.value}px`), o.value !== 0 && (_.bottom = `${o.value}px`)), _;
  }), c = f(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function s(v) {
    const h = Pe(v.default);
    return d("div", { class: c.value, style: u.value }, e.expand === true ? h : [d("div", h)]);
  }
  return { $layout: n, getStickyContent: s };
}
ve({ name: "QPageScroller", props: { ...Du, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { ...Du.offset, default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), { $layout: a, getStickyContent: r } = qh(), o = Q(null);
  let i;
  const u = f(() => a.height.value - (a.isContainer.value === true ? a.containerHeight.value : l.screen.height));
  function c() {
    return e.reverse === true ? u.value - a.scroll.value.position > e.scrollOffset : a.scroll.value.position > e.scrollOffset;
  }
  const s = Q(c());
  function v() {
    const w = c();
    s.value !== w && (s.value = w);
  }
  function h() {
    e.reverse === true ? i === void 0 && (i = he(u, v)) : m();
  }
  he(a.scroll, v), he(() => e.reverse, h);
  function m() {
    i !== void 0 && (i(), i = void 0);
  }
  function g(w) {
    const k = Vn(a.isContainer.value === true ? o.value : a.rootRef.value);
    ba(k, e.reverse === true ? a.height.value : 0, e.duration), n("click", w);
  }
  function _() {
    return s.value === true ? d("div", { ref: o, class: "q-page-scroller", onClick: g }, r(t)) : null;
  }
  return h(), Ke(m), () => d(Ft, { name: "q-transition--fade" }, _);
} });
ve({ name: "QPageSticky", props: Du, setup(e, { slots: t }) {
  const { getStickyContent: n } = qh();
  return () => n(t);
} });
function Yr(e, t) {
  return [true, false].includes(e) ? e : t;
}
ve({ name: "QPagination", props: { ...nt, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || vm.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = f(() => parseInt(e.min, 10)), o = f(() => parseInt(e.max, 10)), i = f(() => parseInt(e.maxPages, 10)), u = f(() => g.value + " / " + o.value), c = f(() => Yr(e.boundaryLinks, e.input)), s = f(() => Yr(e.boundaryNumbers, !e.input)), v = f(() => Yr(e.directionLinks, e.input)), h = f(() => Yr(e.ellipses, !e.input)), m = Q(null), g = f({ get: () => e.modelValue, set: (E) => {
    if (E = parseInt(E, 10), e.disable || isNaN(E)) return;
    const C = ct(E, r.value, o.value);
    e.modelValue !== C && t("update:modelValue", C);
  } });
  he(() => `${r.value}|${o.value}`, () => {
    g.value = e.modelValue;
  });
  const _ = f(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), w = f(() => e.gutter in To ? `${To[e.gutter]}px` : e.gutter || null), k = f(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null), p = f(() => {
    const E = [e.iconFirst || l.iconSet.pagination.first, e.iconPrev || l.iconSet.pagination.prev, e.iconNext || l.iconSet.pagination.next, e.iconLast || l.iconSet.pagination.last];
    return l.lang.rtl === true ? E.reverse() : E;
  }), y = f(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), b = f(() => ws(e, "flat")), x = f(() => ({ [b.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), B = f(() => {
    const E = { [b.value]: false };
    return e.activeDesign !== "" && (E[e.activeDesign] = true), E;
  }), O = f(() => ({ ...B.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), N = f(() => {
    let E = Math.max(i.value, 1 + (h.value ? 2 : 0) + (s.value ? 2 : 0));
    const C = { pgFrom: r.value, pgTo: o.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(o.value).length)}em` } };
    return i.value && E < o.value - r.value + 1 && (E = 1 + Math.floor(E / 2) * 2, C.pgFrom = Math.max(r.value, Math.min(o.value - E + 1, e.modelValue - Math.floor(E / 2))), C.pgTo = Math.min(o.value, C.pgFrom + E - 1), s.value && (C.boundaryStart = true, C.pgFrom++), h.value && C.pgFrom > r.value + (s.value ? 1 : 0) && (C.ellipsesStart = true, C.pgFrom++), s.value && (C.boundaryEnd = true, C.pgTo--), h.value && C.pgTo < o.value - (s.value ? 1 : 0) && (C.ellipsesEnd = true, C.pgTo--)), C;
  });
  function T(E) {
    g.value = E;
  }
  function M(E) {
    g.value = g.value + E;
  }
  const L = f(() => {
    function E() {
      g.value = m.value, m.value = null;
    }
    return { "onUpdate:modelValue": (C) => {
      m.value = C;
    }, onKeyup: (C) => {
      yn(C, 13) === true && E();
    }, onBlur: E };
  });
  function q(E, C, D) {
    const H = { "aria-label": C, "aria-current": "false", ...x.value, ...E };
    return D === true && Object.assign(H, { "aria-current": "true", ...O.value }), C !== void 0 && (e.toFn !== void 0 ? H.to = e.toFn(C) : H.onClick = () => {
      T(C);
    }), d(Ze, H);
  }
  return Object.assign(n, { set: T, setByOffset: M }), () => {
    const E = [], C = [];
    let D;
    if (c.value === true && (E.push(q({ key: "bls", disable: e.disable || e.modelValue <= r.value, icon: p.value[0], "aria-label": l.lang.pagination.first }, r.value)), C.unshift(q({ key: "ble", disable: e.disable || e.modelValue >= o.value, icon: p.value[3], "aria-label": l.lang.pagination.last }, o.value))), v.value === true && (E.push(q({ key: "bdp", disable: e.disable || e.modelValue <= r.value, icon: p.value[1], "aria-label": l.lang.pagination.prev }, e.modelValue - 1)), C.unshift(q({ key: "bdn", disable: e.disable || e.modelValue >= o.value, icon: p.value[2], "aria-label": l.lang.pagination.next }, e.modelValue + 1))), e.input !== true) {
      D = [];
      const { pgFrom: H, pgTo: $, marginalStyle: j } = N.value;
      if (N.value.boundaryStart === true) {
        const te = r.value === e.modelValue;
        E.push(q({ key: "bns", style: j, disable: e.disable, label: r.value }, r.value, te));
      }
      if (N.value.boundaryEnd === true) {
        const te = o.value === e.modelValue;
        C.unshift(q({ key: "bne", style: j, disable: e.disable, label: o.value }, o.value, te));
      }
      N.value.ellipsesStart === true && E.push(q({ key: "bes", style: j, disable: e.disable, label: "\u2026", ripple: false }, H - 1)), N.value.ellipsesEnd === true && C.unshift(q({ key: "bee", style: j, disable: e.disable, label: "\u2026", ripple: false }, $ + 1));
      for (let te = H; te <= $; te++) D.push(q({ key: `bpg${te}`, style: j, disable: e.disable, label: te }, te, te === e.modelValue));
    }
    return d("div", { class: _.value, ...y.value }, [d("div", { class: "q-pagination__content row no-wrap items-center", style: k.value }, [...E, e.input === true ? d(wh, { class: "inline", style: { width: `${u.value.length / 1.5}em` }, type: "number", dense: true, value: m.value, disable: e.disable, dark: a.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: u.value, min: r.value, max: o.value, ...L.value }) : d("div", { class: "q-pagination__middle row justify-center" }, D), ...C])]);
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
  const l = Q(0), a = Q(null), r = Q(null), o = Q(null);
  let i, u, c, s, v, h;
  he(() => e.height, () => {
    i === true && g();
  }), he(() => e.scrollTarget, () => {
    i === true && (p(), k());
  });
  let m = (y) => {
    l.value = y, e.onScroll !== void 0 && n("scroll", y);
  };
  function g() {
    let y, b, x;
    h === window ? (y = 0, x = b = window.innerHeight) : (y = qo(h).top, b = _a(h), x = y + b);
    const B = qo(a.value).top, O = B + e.height;
    if (v !== void 0 || O > y && B < x) {
      const N = (x - B) / (e.height + b);
      _((c - e.height) * N * e.speed), m(N);
    }
  }
  let _ = (y) => {
    u.style.transform = `translate3d(-50%,${Math.round(y)}px,0)`;
  };
  function w() {
    c = u.naturalHeight || u.videoHeight || _a(u), i === true && g();
  }
  function k() {
    i = true, h = Vn(a.value, e.scrollTarget), h.addEventListener("scroll", g, Gr), window.addEventListener("resize", s, Gr), g();
  }
  function p() {
    i === true && (i = false, h.removeEventListener("scroll", g, Gr), window.removeEventListener("resize", s, Gr), h = void 0, _.cancel(), m.cancel(), s.cancel());
  }
  return ft(() => {
    _ = Gi(_), m = Gi(m), s = Gi(w), u = t.media !== void 0 ? r.value.children[0] : o.value, u.onload = u.onloadstart = u.loadedmetadata = w, w(), u.style.display = "initial", window.IntersectionObserver !== void 0 ? (v = new IntersectionObserver((y) => {
      (y[0].isIntersecting === true ? k : p)();
    }), v.observe(a.value)) : k();
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
  const { proxy: l } = Se(), { $q: a } = l, r = Q(null), o = Q(""), i = Q("");
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
  function _() {
    u = false, o.value = ur(e.modelValue), i.value = ur(e.modelValue), n("beforeShow");
  }
  function w() {
    n("show");
  }
  function k() {
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
    if (e.disable !== true) return d(ii, { ref: r, class: "q-popup-edit", cover: e.cover, onBeforeShow: _, onShow: w, onBeforeHide: k, onHide: p, onEscapeKey: v }, y);
  };
} });
ve({ name: "QPopupProxy", props: { ...bm, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: n, attrs: l }) {
  const { proxy: a } = Se(), { $q: r } = a, o = Q(false), i = Q(null), u = f(() => parseInt(e.breakpoint, 10)), { canShow: c } = xs({ showing: o });
  function s() {
    return r.screen.width < u.value || r.screen.height < u.value ? "dialog" : "menu";
  }
  const v = Q(s()), h = f(() => v.value === "menu" ? { maxHeight: "99vh" } : {});
  he(() => s(), (_) => {
    o.value !== true && (v.value = _);
  });
  function m(_) {
    o.value = true, n("show", _);
  }
  function g(_) {
    o.value = false, v.value = s(), n("hide", _);
  }
  return Object.assign(a, { show(_) {
    c(_) === true && i.value.show(_);
  }, hide(_) {
    i.value.hide(_);
  }, toggle(_) {
    i.value.toggle(_);
  } }), Ot(a, "currentComponent", () => ({ type: v.value, ref: i.value })), () => {
    const _ = { ref: i, ...h.value, ...l, onShow: m, onHide: g };
    let w;
    return v.value === "dialog" ? w = si : (w = ii, Object.assign(_, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), d(w, _, t.default);
  };
} });
var A1 = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Ad(e, t, n) {
  return { transform: t === true ? `translateX(${n.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var R1 = ve({ name: "QLinearProgress", props: { ...nt, ...Jn, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  const { proxy: n } = Se(), l = lt(e, n.$q), a = el(e, A1), r = f(() => e.indeterminate === true || e.query === true), o = f(() => e.reverse !== e.query), i = f(() => ({ ...a.value !== null ? a.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), u = f(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = f(() => Ad(e.buffer !== void 0 ? e.buffer : 1, o.value, n.$q)), s = f(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), v = f(() => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), h = f(() => Ad(r.value === true ? 1 : e.value, o.value, n.$q)), m = f(() => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value === true ? "in" : ""}determinate`), g = f(() => ({ width: `${e.value * 100}%` })), _ = f(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${s.value}`);
  return () => {
    const w = [d("div", { class: v.value, style: c.value }), d("div", { class: m.value, style: h.value })];
    return e.stripe === true && r.value === false && w.push(d("div", { class: _.value, style: g.value })), d("div", { class: u.value, style: i.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, kt(t.default, w));
  };
} }), Rd = 40, Xi = 20;
ve({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: Wl }, emits: ["refresh"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = Q("pull"), o = Q(0), i = Q(false), u = Q(-40), c = Q(false), s = Q({}), v = f(() => ({ opacity: o.value, transform: `translateY(${u.value}px) rotate(${o.value * 360}deg)` })), h = f(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function m(x) {
    if (x.isFinal === true) {
      i.value === true && (i.value = false, r.value === "pulled" ? (r.value = "refreshing", y({ pos: Xi }), w()) : r.value === "pull" && y({ pos: -40, ratio: 0 }));
      return;
    }
    if (c.value === true || r.value === "refreshing") return false;
    if (x.isFirst === true) {
      if (gl(k) !== 0 || x.direction !== "down") return i.value === true && (i.value = false, r.value = "pull", y({ pos: -40, ratio: 0 })), false;
      i.value = true;
      const { top: N, left: T } = l.$el.getBoundingClientRect();
      s.value = { top: N + "px", left: T + "px", width: window.getComputedStyle(l.$el).getPropertyValue("width") };
    }
    Vt(x.evt);
    const B = Math.min(140, Math.max(0, x.distance.y));
    u.value = B - Rd, o.value = ct(B / (Xi + Rd), 0, 1);
    const O = u.value > Xi ? "pulled" : "pull";
    r.value !== O && (r.value = O);
  }
  const g = f(() => {
    const x = { down: true };
    return e.noMouse !== true && (x.mouse = true), [[gn, m, void 0, x]];
  }), _ = f(() => `q-pull-to-refresh__content${i.value === true ? " no-pointer-events" : ""}`);
  function w() {
    n("refresh", () => {
      y({ pos: -40, ratio: 0 }, () => {
        r.value = "pull";
      });
    });
  }
  let k, p = null;
  function y({ pos: x, ratio: B }, O) {
    c.value = true, u.value = x, B !== void 0 && (o.value = B), p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, c.value = false, O == null ? void 0 : O();
    }, 300);
  }
  function b() {
    k = Vn(l.$el, e.scrollTarget);
  }
  return he(() => e.scrollTarget, b), ft(b), Ke(() => {
    p !== null && clearTimeout(p);
  }), Object.assign(l, { trigger: w, updateScrollTarget: b }), () => {
    const x = [d("div", { class: _.value }, Pe(t.default)), d("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: s.value }, [d("div", { class: h.value, style: v.value }, [r.value !== "refreshing" ? d(et, { name: e.icon || a.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : d(_n, { size: "24px", color: e.color })])])];
    return pn("div", { class: "q-pull-to-refresh" }, x, "main", e.disable === false, () => g.value);
  };
} });
var al = { MIN: 0, RANGE: 1, MAX: 2 };
ve({ name: "QRange", props: { ...Im, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: zm, setup(e, { emit: t }) {
  const { proxy: { $q: n } } = Se(), { state: l, methods: a } = Dm({ updateValue: N, updatePosition: M, getDragging: T, formAttrs: f(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), r = Q(null), o = Q(0), i = Q(0), u = Q({ min: 0, max: 0 });
  function c() {
    u.value.min = e.modelValue.min === null ? l.innerMin.value : ct(e.modelValue.min, l.innerMin.value, l.innerMax.value), u.value.max = e.modelValue.max === null ? l.innerMax.value : ct(e.modelValue.max, l.innerMin.value, l.innerMax.value);
  }
  he(() => `${e.modelValue.min}|${e.modelValue.max}|${l.innerMin.value}|${l.innerMax.value}`, c), c();
  const s = f(() => a.convertModelToRatio(u.value.min)), v = f(() => a.convertModelToRatio(u.value.max)), h = f(() => l.active.value === true ? o.value : s.value), m = f(() => l.active.value === true ? i.value : v.value), g = f(() => {
    const q = { [l.positionProp.value]: `${100 * h.value}%`, [l.sizeProp.value]: `${100 * (m.value - h.value)}%` };
    return e.selectionImg !== void 0 && (q.backgroundImage = `url(${e.selectionImg}) !important`), q;
  }), _ = f(() => {
    if (l.editable.value !== true) return {};
    if (n.platform.is.mobile === true) return { onClick: a.onMobileClick };
    const q = { onMousedown: a.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(q, { onFocus: () => {
      l.focus.value = "both";
    }, onBlur: a.onBlur, onKeydown: L, onKeyup: a.onKeyup }), q;
  });
  function w(q) {
    return n.platform.is.mobile !== true && l.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      l.focus.value = q;
    }, onBlur: a.onBlur, onKeydown: L, onKeyup: a.onKeyup } : {};
  }
  const k = f(() => e.dragOnlyRange !== true ? l.tabindex.value : null), p = f(() => n.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? l.tabindex.value : null), y = Q(null), b = f(() => w("min")), x = a.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: y, key: "tmin", ...b.value, tabindex: k.value }), ratio: h, label: f(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : u.value.min), thumbColor: f(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: f(() => e.leftLabelColor || e.labelColor), labelTextColor: f(() => e.leftLabelTextColor || e.labelTextColor) }), B = f(() => w("max")), O = a.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...B.value, key: "tmax", tabindex: k.value }), ratio: m, label: f(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : u.value.max), thumbColor: f(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: f(() => e.rightLabelColor || e.labelColor), labelTextColor: f(() => e.rightLabelTextColor || e.labelTextColor) });
  function N(q) {
    (u.value.min !== e.modelValue.min || u.value.max !== e.modelValue.max) && t("update:modelValue", { ...u.value }), q === true && t("change", { ...u.value });
  }
  function T(q) {
    const { left: E, top: C, width: D, height: H } = r.value.getBoundingClientRect(), $ = e.dragOnlyRange === true ? 0 : e.vertical === true ? y.value.offsetHeight / (2 * H) : y.value.offsetWidth / (2 * D), j = { left: E, top: C, width: D, height: H, valueMin: u.value.min, valueMax: u.value.max, ratioMin: s.value, ratioMax: v.value }, te = a.getDraggingRatio(q, j);
    return e.dragOnlyRange !== true && te < j.ratioMin + $ ? j.type = al.MIN : e.dragOnlyRange === true || te < j.ratioMax - $ ? e.dragRange === true || e.dragOnlyRange === true ? (j.type = al.RANGE, Object.assign(j, { offsetRatio: te, offsetModel: a.convertRatioToModel(te), rangeValue: j.valueMax - j.valueMin, rangeRatio: j.ratioMax - j.ratioMin })) : j.type = j.ratioMax - te < te - j.ratioMin ? al.MAX : al.MIN : j.type = al.MAX, j;
  }
  function M(q, E = l.dragging.value) {
    let C;
    const D = a.getDraggingRatio(q, E), H = a.convertRatioToModel(D);
    switch (E.type) {
      case al.MIN:
        D <= E.ratioMax ? (C = { minR: D, maxR: E.ratioMax, min: H, max: E.valueMax }, l.focus.value = "min") : (C = { minR: E.ratioMax, maxR: D, min: E.valueMax, max: H }, l.focus.value = "max");
        break;
      case al.MAX:
        D >= E.ratioMin ? (C = { minR: E.ratioMin, maxR: D, min: E.valueMin, max: H }, l.focus.value = "max") : (C = { minR: D, maxR: E.ratioMin, min: H, max: E.valueMin }, l.focus.value = "min");
        break;
      case al.RANGE:
        const $ = D - E.offsetRatio, j = ct(E.ratioMin + $, l.innerMinRatio.value, l.innerMaxRatio.value - E.rangeRatio), te = H - E.offsetModel, ye = ct(E.valueMin + te, l.innerMin.value, l.innerMax.value - E.rangeValue);
        C = { minR: j, maxR: j + E.rangeRatio, min: l.roundValueFn.value(ye), max: l.roundValueFn.value(ye + E.rangeValue) }, l.focus.value = "both";
        break;
    }
    u.value = u.value.min === null || u.value.max === null ? { min: C.min || e.min, max: C.max || e.max } : { min: C.min, max: C.max }, e.snap !== true || e.step === 0 ? (o.value = C.minR, i.value = C.maxR) : (o.value = a.convertModelToRatio(u.value.min), i.value = a.convertModelToRatio(u.value.max));
  }
  function L(q) {
    if (Os.includes(q.keyCode) === false) return;
    He(q);
    const E = ([34, 33].includes(q.keyCode) ? 10 : 1) * l.keyStep.value, C = ([34, 37, 40].includes(q.keyCode) ? -1 : 1) * (l.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * E;
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
    N();
  }
  return () => {
    const q = a.getContent(g, p, _, (E) => {
      E.push(x(), O());
    });
    return d("div", { ref: r, class: "q-range " + l.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...l.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, q);
  };
} });
ve({ name: "QRating", props: { ...Jn, ...wn, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = el(e), r = $r(e), o = Sl(r), i = Q(0);
  let u = {};
  const c = f(() => e.readonly !== true && e.disable !== true), s = f(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), v = f(() => {
    const y = Array.isArray(e.icon) === true ? e.icon.length : 0, b = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, x = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, B = Array.isArray(e.color) === true ? e.color.length : 0, O = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, N = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: y, icon: y > 0 ? e.icon[y - 1] : e.icon, selIconLen: b, selIcon: b > 0 ? e.iconSelected[b - 1] : e.iconSelected, halfIconLen: x, halfIcon: x > 0 ? e.iconHalf[b - 1] : e.iconHalf, colorLen: B, color: B > 0 ? e.color[B - 1] : e.color, selColorLen: O, selColor: O > 0 ? e.colorSelected[O - 1] : e.colorSelected, halfColorLen: N, halfColor: N > 0 ? e.colorHalf[N - 1] : e.colorHalf };
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
    const y = [], b = v.value, x = Math.ceil(e.modelValue), B = c.value === true ? 0 : null, O = e.iconHalf === void 0 || x === e.modelValue ? -1 : x;
    for (let N = 1; N <= e.max; N++) {
      const T = i.value === 0 && e.modelValue >= N || i.value > 0 && i.value >= N, M = O === N && i.value < N, L = i.value > 0 && (M === true ? x : e.modelValue) >= N && i.value < N, q = M === true ? N <= b.halfColorLen ? e.colorHalf[N - 1] : b.halfColor : b.selColor !== void 0 && T === true ? N <= b.selColorLen ? e.colorSelected[N - 1] : b.selColor : N <= b.colorLen ? e.color[N - 1] : b.color, E = (M === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (T === true || L === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon;
      y.push({ name: (M === true ? N <= b.halfIconLen ? e.iconHalf[N - 1] : b.halfIcon : b.selIcon !== void 0 && (T === true || L === true) ? N <= b.selIconLen ? e.iconSelected[N - 1] : b.selIcon : N <= b.iconLen ? e.icon[N - 1] : b.icon) || l.iconSet.rating.icon, attrs: { tabindex: B, role: "radio", "aria-checked": e.modelValue === N ? "true" : "false", "aria-label": h.value(N, E) }, iconClass: "q-rating__icon" + (T === true || M === true ? " q-rating__icon--active" : "") + (L === true ? " q-rating__icon--exselected" : "") + (i.value === N ? " q-rating__icon--hovered" : "") + (q !== void 0 ? ` text-${q}` : "") });
    }
    return y;
  }), g = f(() => {
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
  function k(y, b) {
    switch (y.keyCode) {
      case 13:
      case 32:
        return _(b), He(y);
      case 37:
      case 40:
        return u[`rt${b - 1}`] && u[`rt${b - 1}`].focus(), He(y);
      case 39:
      case 38:
        return u[`rt${b + 1}`] && u[`rt${b + 1}`].focus(), He(y);
    }
  }
  function p() {
    i.value = 0;
  }
  return Ta(() => {
    u = {};
  }), () => {
    const y = [];
    return m.value.forEach(({ iconClass: b, name: x, attrs: B }, O) => {
      const N = O + 1;
      y.push(d("div", { key: N, ref: (T) => {
        u[`rt${N}`] = T;
      }, class: "q-rating__icon-container flex flex-center", ...B, onClick() {
        _(N);
      }, onMouseover() {
        w(N);
      }, onMouseout: p, onFocus() {
        w(N);
      }, onBlur: p, onKeyup(T) {
        k(T, N);
      } }, kt(t[`tip-${N}`], [d(et, { class: b, name: x })])));
    }), e.name !== void 0 && e.disable !== true && o(y, "push"), d("div", { class: s.value, style: a.value, ...g.value }, y);
  };
} });
ve({ name: "QResponsive", props: Ds, setup(e, { slots: t }) {
  const n = Ns(e);
  return () => d("div", { class: "q-responsive" }, [d("div", { class: "q-responsive__filler overflow-hidden" }, [d("div", { style: n.value })]), d("div", { class: "q-responsive__content absolute-full fit" }, Pe(t.default))]);
} });
var $1 = ve({ props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
  return () => [d("div", { class: e.store.scroll.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: e.store.onVerticalMousedown }), d("div", { class: e.store.scroll.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: e.store.onHorizontalMousedown }), sn(d("div", { ref: e.store.scroll.vertical.ref, class: e.store.scroll.vertical.thumbClass.value, style: e.store.scroll.vertical.style.value, "aria-hidden": "true" }), e.store.thumbVertDir), sn(d("div", { ref: e.store.scroll.horizontal.ref, class: e.store.scroll.horizontal.thumbClass.value, style: e.store.scroll.horizontal.style.value, "aria-hidden": "true" }), e.store.thumbHorizDir)];
} }), $d = ["vertical", "horizontal"], Zi = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } }, Pd = { prevent: true, mouse: true, mouseAllDir: true }, Ld = (e) => e >= 250 ? 50 : Math.ceil(e / 5), P1 = ve({ name: "QScrollArea", props: { ...nt, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], verticalOffset: { type: Array, default: [0, 0] }, horizontalOffset: { type: Array, default: [0, 0] }, contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: n }) {
  const l = Q(false), a = Q(false), r = Q(false), o = { vertical: Q(0), horizontal: Q(0) }, i = { vertical: { ref: Q(null), position: Q(0), size: Q(0) }, horizontal: { ref: Q(null), position: Q(0), size: Q(0) } }, { proxy: u } = Se(), c = lt(e, u.$q);
  let s = null, v;
  const h = Q(null), m = f(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  Object.assign(o, { verticalInner: f(() => o.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]), horizontalInner: f(() => o.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1]) }), i.vertical.percentage = f(() => {
    const C = i.vertical.size.value - o.vertical.value;
    if (C <= 0) return 0;
    const D = ct(i.vertical.position.value / C, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.vertical.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.vertical.size.value <= o.vertical.value + 1), i.vertical.thumbStart = f(() => e.verticalOffset[0] + i.vertical.percentage.value * (o.verticalInner.value - i.vertical.thumbSize.value)), i.vertical.thumbSize = f(() => Math.round(ct(o.verticalInner.value * o.verticalInner.value / i.vertical.size.value, Ld(o.verticalInner.value), o.verticalInner.value))), i.vertical.style = f(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${i.vertical.thumbStart.value}px`, height: `${i.vertical.thumbSize.value}px`, right: `${e.horizontalOffset[1]}px` })), i.vertical.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.vertical.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (i.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), i.horizontal.percentage = f(() => {
    const C = i.horizontal.size.value - o.horizontal.value;
    if (C <= 0) return 0;
    const D = ct(Math.abs(i.horizontal.position.value) / C, 0, 1);
    return Math.round(D * 1e4) / 1e4;
  }), i.horizontal.thumbHidden = f(() => (e.visible === null ? r.value : e.visible) !== true && l.value === false && a.value === false || i.horizontal.size.value <= o.horizontal.value + 1), i.horizontal.thumbStart = f(() => e.horizontalOffset[0] + i.horizontal.percentage.value * (o.horizontalInner.value - i.horizontal.thumbSize.value)), i.horizontal.thumbSize = f(() => Math.round(ct(o.horizontalInner.value * o.horizontalInner.value / i.horizontal.size.value, Ld(o.horizontalInner.value), o.horizontalInner.value))), i.horizontal.style = f(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [u.$q.lang.rtl === true ? "right" : "left"]: `${i.horizontal.thumbStart.value}px`, width: `${i.horizontal.thumbSize.value}px`, bottom: `${e.verticalOffset[1]}px` })), i.horizontal.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), i.horizontal.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (i.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  const g = f(() => i.vertical.thumbHidden.value === true && i.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle);
  function _() {
    const C = {};
    return $d.forEach((D) => {
      const H = i[D];
      Object.assign(C, { [D + "Position"]: H.position.value, [D + "Percentage"]: H.percentage.value, [D + "Size"]: H.size.value, [D + "ContainerSize"]: o[D].value, [D + "ContainerInnerSize"]: o[D + "Inner"].value });
    }), C;
  }
  const w = Ma(() => {
    const C = _();
    C.ref = u, n("scroll", C);
  }, 0);
  function k(C, D, H) {
    if ($d.includes(C) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (C === "vertical" ? ba : Pi)(h.value, D, H);
  }
  function p({ height: C, width: D }) {
    let H = false;
    o.vertical.value !== C && (o.vertical.value = C, H = true), o.horizontal.value !== D && (o.horizontal.value = D, H = true), H === true && O();
  }
  function y({ position: C }) {
    let D = false;
    i.vertical.position.value !== C.top && (i.vertical.position.value = C.top, D = true), i.horizontal.position.value !== C.left && (i.horizontal.position.value = C.left, D = true), D === true && O();
  }
  function b({ height: C, width: D }) {
    i.horizontal.size.value !== D && (i.horizontal.size.value = D, O()), i.vertical.size.value !== C && (i.vertical.size.value = C, O());
  }
  function x(C, D) {
    const H = i[D];
    if (C.isFirst === true) {
      if (H.thumbHidden.value === true) return;
      v = H.position.value, a.value = true;
    } else if (a.value !== true) return;
    C.isFinal === true && (a.value = false);
    const $ = Zi[D], j = (H.size.value - o[D].value) / (o[D + "Inner"].value - H.thumbSize.value), te = C.distance[$.dist], ye = v + (C.direction === $.dir ? 1 : -1) * te * j;
    N(ye, D);
  }
  function B(C, D) {
    const H = i[D];
    if (H.thumbHidden.value !== true) {
      const $ = D === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], j = C[Zi[D].offset] - $, te = H.thumbStart.value - $;
      if (j < te || j > te + H.thumbSize.value) {
        const ye = j - H.thumbSize.value / 2, K = ct(ye / (o[D + "Inner"].value - H.thumbSize.value), 0, 1);
        N(K * Math.max(0, H.size.value - o[D].value), D);
      }
      H.ref.value !== null && H.ref.value.dispatchEvent(new MouseEvent(C.type, C));
    }
  }
  function O() {
    l.value = true, s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, l.value = false;
    }, e.delay), e.onScroll !== void 0 && w();
  }
  function N(C, D) {
    h.value[Zi[D].scroll] = C;
  }
  let T = null;
  function M() {
    T !== null && clearTimeout(T), T = setTimeout(() => {
      T = null, r.value = true;
    }, u.$q.platform.is.ios ? 50 : 0);
  }
  function L() {
    T !== null && (clearTimeout(T), T = null), r.value = false;
  }
  let q = null;
  he(() => u.$q.lang.rtl, (C) => {
    h.value !== null && Pi(h.value, Math.abs(i.horizontal.position.value) * (C === true ? -1 : 1));
  }), On(() => {
    q = { top: i.vertical.position.value, left: i.horizontal.position.value };
  }), _l(() => {
    if (q === null) return;
    const C = h.value;
    C !== null && (Pi(C, q.left), ba(C, q.top));
  }), Ke(w.cancel), Object.assign(u, { getScrollTarget: () => h.value, getScroll: _, getScrollPosition: () => ({ top: i.vertical.position.value, left: i.horizontal.position.value }), getScrollPercentage: () => ({ top: i.vertical.percentage.value, left: i.horizontal.percentage.value }), setScrollPosition: k, setScrollPercentage(C, D, H) {
    k(C, D * (i[C].size.value - o[C].value) * (C === "horizontal" && u.$q.lang.rtl === true ? -1 : 1), H);
  } });
  const E = { scroll: i, thumbVertDir: [[gn, (C) => {
    x(C, "vertical");
  }, void 0, { vertical: true, ...Pd }]], thumbHorizDir: [[gn, (C) => {
    x(C, "horizontal");
  }, void 0, { horizontal: true, ...Pd }]], onVerticalMousedown(C) {
    B(C, "vertical");
  }, onHorizontalMousedown(C) {
    B(C, "horizontal");
  } };
  return () => d("div", { class: m.value, onMouseenter: M, onMouseleave: L }, [d("div", { ref: h, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [d("div", { class: "q-scrollarea__content absolute", style: g.value }, kt(t.default, [d(Nl, { debounce: 0, onResize: b })])), d(Ch, { axis: "both", onScroll: y })]), d(Nl, { debounce: 0, onResize: p }), d($1, { store: E, barStyle: e.barStyle, verticalBarStyle: e.verticalBarStyle, horizontalBarStyle: e.horizontalBarStyle })]);
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
  if (a === true ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = u.scrollLeft, s.scrollViewSize += u.clientWidth), s.scrollMaxSize = u.scrollWidth, r === true && (s.scrollStart = (Sr === true ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = u.scrollTop, s.scrollViewSize += u.clientHeight), s.scrollMaxSize = u.scrollHeight), n !== null) for (let v = n.previousElementSibling; v !== null; v = v.previousElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (s.offsetStart += v[c]);
  if (l !== null) for (let v = l.nextElementSibling; v !== null; v = v.nextElementSibling) v.classList.contains("q-virtual-scroll--skip") === false && (s.offsetEnd += v[c]);
  if (t !== e) {
    const v = u.getBoundingClientRect(), h = t.getBoundingClientRect();
    a === true ? (s.offsetStart += h.left - v.left, s.offsetEnd -= h.width) : (s.offsetStart += h.top - v.top, s.offsetEnd -= h.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Bd(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === true ? "scrollWidth" : "scrollHeight"]), e === window ? n === true ? (l === true && (t = (Sr === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === true ? (l === true && (t = (Sr === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Ia(e, t, n, l) {
  if (n >= l) return 0;
  const a = t.length, r = Math.floor(n / Cn), o = Math.floor((l - 1) / Cn) + 1;
  let i = e.slice(r, o).reduce(ya, 0);
  return n % Cn !== 0 && (i -= t.slice(r * Cn, n).reduce(ya, 0)), l % Cn !== 0 && l !== a && (i -= t.slice(l, o * Cn).reduce(ya, 0)), i;
}
var Mh = { virtualScrollSliceSize: { type: [Number, String], default: 10 }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] }, Eh = Object.keys(Mh), Nu = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Mh };
function Ah({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: n, virtualScrollItemSizeComputed: l }) {
  const a = Se(), { props: r, emit: o, proxy: i } = a, { $q: u } = i;
  let c, s, v, h = [], m;
  const g = Q(0), _ = Q(0), w = Q({}), k = Q(null), p = Q(null), y = Q(null), b = Q({ from: 0, to: 0 }), x = f(() => r.tableColspan !== void 0 ? r.tableColspan : 100);
  l === void 0 && (l = f(() => r.virtualScrollItemSize));
  const B = f(() => l.value + ";" + r.virtualScrollHorizontal), O = f(() => B.value + ";" + r.virtualScrollSliceRatioBefore + ";" + r.virtualScrollSliceRatioAfter);
  he(O, () => {
    H();
  }), he(B, N);
  function N() {
    D(s, true);
  }
  function T(K) {
    D(K === void 0 ? s : K);
  }
  function M(K, A) {
    const J = t();
    if (J == null || J.nodeType === 8) return;
    const X = Ji(J, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd);
    v !== X.scrollViewSize && H(X.scrollViewSize), q(J, X, Math.min(e.value - 1, Math.max(0, parseInt(K, 10) || 0)), 0, L1.indexOf(A) !== -1 ? A : s !== -1 && K > s ? "end" : "start");
  }
  function L() {
    const K = t();
    if (K == null || K.nodeType === 8) return;
    const A = Ji(K, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd), J = e.value - 1, X = A.scrollMaxSize - A.offsetStart - A.offsetEnd - _.value;
    if (c === A.scrollStart) return;
    if (A.scrollMaxSize <= 0) {
      q(K, A, 0, 0);
      return;
    }
    v !== A.scrollViewSize && H(A.scrollViewSize), E(b.value.from);
    const ge = Math.floor(A.scrollMaxSize - Math.max(A.scrollViewSize, A.offsetEnd) - Math.min(m[J], A.scrollViewSize / 2));
    if (ge > 0 && Math.ceil(A.scrollStart) >= ge) {
      q(K, A, J, A.scrollMaxSize - A.offsetEnd - h.reduce(ya, 0));
      return;
    }
    let F = 0, P = A.scrollStart - A.offsetStart, ee = P;
    if (P <= X && P + A.scrollViewSize >= g.value) P -= g.value, F = b.value.from, ee = P;
    else for (let V = 0; P >= h[V] && F < J; V++) P -= h[V], F += Cn;
    for (; P > 0 && F < J; ) P -= m[F], P > -A.scrollViewSize ? (F++, ee = P) : ee = m[F] + P;
    q(K, A, F, ee);
  }
  function q(K, A, J, X, ge) {
    const F = typeof ge == "string" && ge.indexOf("-force") !== -1, P = F === true ? ge.replace("-force", "") : ge, ee = P !== void 0 ? P : "start";
    let V = Math.max(0, J - w.value[ee]), re = V + w.value.total;
    re > e.value && (re = e.value, V = Math.max(0, re - w.value.total)), c = A.scrollStart;
    const we = V !== b.value.from || re !== b.value.to;
    if (we === false && P === void 0) {
      j(J);
      return;
    }
    const { activeElement: S } = document, R = y.value;
    we === true && R !== null && R !== S && R.contains(S) === true && (R.addEventListener("focusout", C), setTimeout(() => {
      R == null ? void 0 : R.removeEventListener("focusout", C);
    })), B1(R, J - V);
    const z = P !== void 0 ? m.slice(V, J).reduce(ya, 0) : 0;
    if (we === true) {
      const Z = re >= b.value.from && V <= b.value.to ? b.value.to : re;
      b.value = { from: V, to: Z }, g.value = Ia(h, m, 0, V), _.value = Ia(h, m, re, e.value), requestAnimationFrame(() => {
        b.value.to !== re && c === A.scrollStart && (b.value = { from: b.value.from, to: re }, _.value = Ia(h, m, re, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== A.scrollStart) return;
      we === true && E(V);
      const Z = m.slice(V, J).reduce(ya, 0), ne = Z + A.offsetStart + g.value, W = ne + m[J];
      let de = ne + X;
      if (P !== void 0) {
        const me = Z - z, fe = A.scrollStart + me;
        de = F !== true && fe < ne && W < fe + A.scrollViewSize ? fe : P === "end" ? W - A.scrollViewSize : ne - (P === "start" ? 0 : Math.round((A.scrollViewSize - m[J]) / 2));
      }
      c = de, Bd(K, de, r.virtualScrollHorizontal, u.lang.rtl), j(J);
    });
  }
  function E(K) {
    const A = y.value;
    if (A) {
      const J = Th.call(A.children, (V) => V.classList && V.classList.contains("q-virtual-scroll--skip") === false), X = J.length, ge = r.virtualScrollHorizontal === true ? (V) => V.getBoundingClientRect().width : (V) => V.offsetHeight;
      let F = K, P, ee;
      for (let V = 0; V < X; ) {
        for (P = ge(J[V]), V++; V < X && J[V].classList.contains("q-virtual-scroll--with-prev") === true; ) P += ge(J[V]), V++;
        ee = P - m[F], ee !== 0 && (m[F] += ee, h[Math.floor(F / Cn)] += ee), F++;
      }
    }
  }
  function C() {
    var _a2;
    (_a2 = y.value) == null ? void 0 : _a2.focus();
  }
  function D(K, A) {
    const J = 1 * l.value;
    (A === true || Array.isArray(m) === false) && (m = []);
    const X = m.length;
    m.length = e.value;
    for (let F = e.value - 1; F >= X; F--) m[F] = J;
    const ge = Math.floor((e.value - 1) / Cn);
    h = [];
    for (let F = 0; F <= ge; F++) {
      let P = 0;
      const ee = Math.min((F + 1) * Cn, e.value);
      for (let V = F * Cn; V < ee; V++) P += m[V];
      h.push(P);
    }
    s = -1, c = void 0, g.value = Ia(h, m, 0, b.value.from), _.value = Ia(h, m, b.value.to, e.value), K >= 0 ? (E(b.value.from), Ge(() => {
      M(K);
    })) : te();
  }
  function H(K) {
    if (K === void 0 && typeof window < "u") {
      const P = t();
      P != null && P.nodeType !== 8 && (K = Ji(P, n(), k.value, p.value, r.virtualScrollHorizontal, u.lang.rtl, r.virtualScrollStickySizeStart, r.virtualScrollStickySizeEnd).scrollViewSize);
    }
    v = K;
    const A = parseFloat(r.virtualScrollSliceRatioBefore) || 0, J = parseFloat(r.virtualScrollSliceRatioAfter) || 0, X = 1 + A + J, ge = K === void 0 || K <= 0 ? 1 : Math.ceil(K / l.value), F = Math.max(1, ge, Math.ceil((r.virtualScrollSliceSize > 0 ? r.virtualScrollSliceSize : 10) / X));
    w.value = { total: Math.ceil(F * X), start: Math.ceil(F * A), center: Math.ceil(F * (0.5 + A)), end: Math.ceil(F * (1 + A)), view: ge };
  }
  function $(K, A) {
    const J = r.virtualScrollHorizontal === true ? "width" : "height", X = { ["--q-virtual-scroll-item-" + J]: l.value + "px" };
    return [K === "tbody" ? d(K, { class: "q-virtual-scroll__padding", key: "before", ref: k }, [d("tr", [d("td", { style: { [J]: `${g.value}px`, ...X }, colspan: x.value })])]) : d(K, { class: "q-virtual-scroll__padding", key: "before", ref: k, style: { [J]: `${g.value}px`, ...X } }), d(K, { class: "q-virtual-scroll__content", key: "content", ref: y, tabindex: -1 }, A.flat()), K === "tbody" ? d(K, { class: "q-virtual-scroll__padding", key: "after", ref: p }, [d("tr", [d("td", { style: { [J]: `${_.value}px`, ...X }, colspan: x.value })])]) : d(K, { class: "q-virtual-scroll__padding", key: "after", ref: p, style: { [J]: `${_.value}px`, ...X } })];
  }
  function j(K) {
    s !== K && (r.onVirtualScroll !== void 0 && o("virtualScroll", { index: K, from: b.value.from, to: b.value.to - 1, direction: K < s ? "decrease" : "increase", ref: i }), s = K);
  }
  H();
  const te = Ma(L, u.platform.is.ios === true ? 120 : 35);
  Wo(() => {
    H();
  });
  let ye = false;
  return On(() => {
    ye = true;
  }), _l(() => {
    if (ye !== true) return;
    const K = t();
    c !== void 0 && K !== void 0 && K !== null && K.nodeType !== 8 ? Bd(K, c, r.virtualScrollHorizontal, u.lang.rtl) : M(s);
  }), __QUASAR_SSR__ || Ke(() => {
    te.cancel();
  }), Object.assign(i, { scrollTo: M, reset: N, refresh: T }), { virtualScrollSliceRange: b, virtualScrollSliceSizeComputed: w, setVirtualScrollSize: H, onVirtualScrollEvt: te, localResetVirtualScroll: D, padVirtualScroll: $, scrollTo: M, reset: N, refresh: T };
}
var Fd = (e) => ["add", "add-unique", "toggle"].includes(e), F1 = ".*+?^${}()|[]\\", O1 = Object.keys(ci);
function eu(e, t) {
  if (typeof e == "function") return e;
  const n = e !== void 0 ? e : t;
  return (l) => l !== null && typeof l == "object" && n in l ? l[n] : l;
}
var V1 = ve({ name: "QSelect", inheritAttrs: false, props: { ...Nu, ...wn, ...ci, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], popupNoRouteDismiss: Boolean, useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Fd }, mapOptions: Boolean, emitValue: Boolean, disableTabSelection: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: {}, transitionHide: {}, transitionDuration: {}, behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: Nu.virtualScrollItemSize.type, onNewValue: Function, onFilter: Function }, emits: [...di, "add", "remove", "inputValue", "keyup", "keypress", "keydown", "popupShow", "popupHide", "filterAbort"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = Q(false), o = Q(false), i = Q(-1), u = Q(""), c = Q(false), s = Q(false);
  let v = null, h = null, m, g, _, w = null, k, p, y, b;
  const x = Q(null), B = Q(null), O = Q(null), N = Q(null), T = Q(null), M = Ts(e), L = _h(ue), q = f(() => Array.isArray(e.options) ? e.options.length : 0), E = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: C, virtualScrollSliceSizeComputed: D, localResetVirtualScroll: H, padVirtualScroll: $, onVirtualScrollEvt: j, scrollTo: te, setVirtualScrollSize: ye } = Ah({ virtualScrollLength: q, getVirtualScrollTarget: jt, getVirtualScrollEl: xt, virtualScrollItemSizeComputed: E }), K = fi(), A = f(() => {
    const G = e.mapOptions === true && e.multiple !== true, Re = e.modelValue !== void 0 && (e.modelValue !== null || G === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      const $e = e.mapOptions === true && m !== void 0 ? m : [], tt = Re.map((gt) => ae(gt, $e));
      return e.modelValue === null && G === true ? tt.filter((gt) => gt !== null) : tt;
    }
    return Re;
  }), J = f(() => {
    const G = {};
    return O1.forEach((Re) => {
      const $e = e[Re];
      $e !== void 0 && (G[Re] = $e);
    }), G;
  }), X = f(() => e.optionsDark === null ? K.isDark.value : e.optionsDark), ge = f(() => jl(A.value)), F = f(() => {
    let G = "q-field__input q-placeholder col";
    return e.hideSelected === true || A.value.length === 0 ? [G, e.inputClass] : (G += " q-field__input--padding", e.inputClass === void 0 ? G : [G, e.inputClass]);
  }), P = f(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), ee = f(() => q.value === 0), V = f(() => A.value.map((G) => le.value(G)).join(", ")), re = f(() => e.displayValue !== void 0 ? e.displayValue : V.value), we = f(() => e.optionsHtml === true ? () => true : (G) => (G == null ? void 0 : G.html) === true), S = f(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || A.value.some(we.value))), R = f(() => K.focused.value === true ? e.tabindex : -1), z = f(() => {
    const G = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": r.value === true ? "true" : "false", "aria-controls": `${K.targetUid.value}_lb` };
    return i.value >= 0 && (G["aria-activedescendant"] = `${K.targetUid.value}_${i.value}`), G;
  }), Z = f(() => ({ id: `${K.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), ne = f(() => A.value.map((G, Re) => ({ index: Re, opt: G, html: we.value(G), selected: true, removeAtIndex: Me, toggleOption: Ve, tabindex: R.value }))), W = f(() => {
    if (q.value === 0) return [];
    const { from: G, to: Re } = C.value;
    return e.options.slice(G, Re).map(($e, tt) => {
      const gt = U.value($e) === true, vt = pe($e) === true, Dt = G + tt, At = { clickable: true, active: vt, activeClass: fe.value, manualFocus: true, focused: false, disable: gt, tabindex: -1, dense: e.optionsDense, dark: X.value, role: "option", "aria-selected": vt === true ? "true" : "false", id: `${K.targetUid.value}_${Dt}`, onClick: () => {
        Ve($e);
      } };
      return gt !== true && (i.value === Dt && (At.focused = true), a.platform.is.desktop === true && (At.onMousemove = () => {
        r.value === true && ie(Dt);
      })), { index: Dt, opt: $e, html: we.value($e), label: le.value($e), selected: At.active, focused: At.focused, toggleOption: Ve, setOptionIndex: ie, itemProps: At };
    });
  }), de = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown), me = f(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), fe = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ce = f(() => eu(e.optionValue, "value")), le = f(() => eu(e.optionLabel, "label")), U = f(() => eu(e.optionDisable, "disable")), oe = f(() => A.value.map(ce.value)), _e = f(() => {
    const G = { onInput: ue, onChange: L, onKeydown: it, onKeyup: Ae, onKeypress: We, onFocus: Ce, onClick(Re) {
      g === true && wt(Re);
    } };
    return G.onCompositionstart = G.onCompositionupdate = G.onCompositionend = L, G;
  });
  he(A, (G) => {
    m = G, e.useInput === true && e.fillInput === true && e.multiple !== true && K.innerLoading.value !== true && (o.value !== true && r.value !== true || ge.value !== true) && (_ !== true && cn(), (o.value === true || r.value === true) && Be(""));
  }, { immediate: true }), he(() => e.fillInput, cn), he(r, hi), he(q, _g);
  function ke(G) {
    return e.emitValue === true ? ce.value(G) : G;
  }
  function qe(G) {
    if (G !== -1 && G < A.value.length) if (e.multiple === true) {
      const Re = e.modelValue.slice();
      n("remove", { index: G, value: Re.splice(G, 1)[0] }), n("update:modelValue", Re);
    } else n("update:modelValue", null);
  }
  function Me(G) {
    qe(G), K.focus();
  }
  function Ne(G, Re) {
    const $e = ke(G);
    if (e.multiple !== true) {
      e.fillInput === true && Fe(le.value(G), true, true), n("update:modelValue", $e);
      return;
    }
    if (A.value.length === 0) {
      n("add", { index: 0, value: $e }), n("update:modelValue", e.multiple === true ? [$e] : $e);
      return;
    }
    if (Re === true && pe(G) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
    const tt = e.modelValue.slice();
    n("add", { index: tt.length, value: $e }), tt.push($e), n("update:modelValue", tt);
  }
  function Ve(G, Re) {
    var _a2;
    if (K.editable.value !== true || G === void 0 || U.value(G) === true) return;
    const $e = ce.value(G);
    if (e.multiple !== true) {
      Re !== true && (Fe(e.fillInput === true ? le.value(G) : "", true, true), at()), (_a2 = B.value) == null ? void 0 : _a2.focus(), (A.value.length === 0 || kn(ce.value(A.value[0]), $e) !== true) && n("update:modelValue", e.emitValue === true ? $e : G);
      return;
    }
    if ((g !== true || c.value === true) && K.focus(), Ce(), A.value.length === 0) {
      const vt = e.emitValue === true ? $e : G;
      n("add", { index: 0, value: vt }), n("update:modelValue", e.multiple === true ? [vt] : vt);
      return;
    }
    const tt = e.modelValue.slice(), gt = oe.value.findIndex((vt) => kn(vt, $e));
    if (gt !== -1) n("remove", { index: gt, value: tt.splice(gt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && tt.length >= e.maxValues) return;
      const vt = e.emitValue === true ? $e : G;
      n("add", { index: tt.length, value: vt }), tt.push(vt);
    }
    n("update:modelValue", tt);
  }
  function ie(G) {
    if (a.platform.is.desktop !== true) return;
    const Re = G !== -1 && G < q.value ? G : -1;
    i.value !== Re && (i.value = Re);
  }
  function be(G = 1, Re) {
    if (r.value === true) {
      let $e = i.value;
      do
        $e = Co($e + G, -1, q.value - 1);
      while ($e !== -1 && $e !== i.value && U.value(e.options[$e]) === true);
      i.value !== $e && (ie($e), te($e), Re !== true && e.useInput === true && e.fillInput === true && xe($e >= 0 ? le.value(e.options[$e]) : k, true));
    }
  }
  function ae(G, Re) {
    const $e = (tt) => kn(ce.value(tt), G);
    return e.options.find($e) || Re.find($e) || G;
  }
  function pe(G) {
    const Re = ce.value(G);
    return oe.value.find(($e) => kn($e, Re)) !== void 0;
  }
  function Ce(G) {
    e.useInput === true && B.value !== null && (G === void 0 || B.value === G.target && G.target.value === V.value) && B.value.select();
  }
  function Oe(G) {
    yn(G, 27) === true && r.value === true && (wt(G), at(), cn()), n("keyup", G);
  }
  function Ae(G) {
    const { value: Re } = G.target;
    if (G.keyCode !== void 0) {
      Oe(G);
      return;
    }
    if (G.target.value = "", v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), cn(), typeof Re == "string" && Re.length !== 0) {
      const $e = Re.toLocaleLowerCase(), tt = (vt) => {
        const Dt = e.options.find((At) => String(vt.value(At)).toLocaleLowerCase() === $e);
        return Dt === void 0 ? false : (A.value.indexOf(Dt) === -1 ? Ve(Dt) : at(), true);
      }, gt = (vt) => {
        tt(ce) !== true && vt !== true && tt(le) !== true && Be(Re, true, () => gt(true));
      };
      gt();
    } else K.clearValue(G);
  }
  function We(G) {
    n("keypress", G);
  }
  function it(G) {
    if (n("keydown", G), Ql(G) === true) return;
    const Re = u.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), $e = G.shiftKey !== true && e.disableTabSelection !== true && e.multiple !== true && (i.value !== -1 || Re === true);
    if (G.keyCode === 27) {
      Vt(G);
      return;
    }
    if (G.keyCode === 9 && $e === false) {
      Le();
      return;
    }
    if (G.target === void 0 || G.target.id !== K.targetUid.value || K.editable.value !== true) return;
    if (G.keyCode === 40 && K.innerLoading.value !== true && r.value === false) {
      He(G), De();
      return;
    }
    if (G.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && u.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? qe(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && n("update:modelValue", null);
      return;
    }
    (G.keyCode === 35 || G.keyCode === 36) && (typeof u.value != "string" || u.value.length === 0) && (He(G), i.value = -1, be(G.keyCode === 36 ? 1 : -1, e.multiple)), (G.keyCode === 33 || G.keyCode === 34) && D.value !== void 0 && (He(G), i.value = Math.max(-1, Math.min(q.value, i.value + (G.keyCode === 33 ? -1 : 1) * D.value.view)), be(G.keyCode === 33 ? 1 : -1, e.multiple)), (G.keyCode === 38 || G.keyCode === 40) && (He(G), be(G.keyCode === 38 ? -1 : 1, e.multiple));
    const tt = q.value;
    if ((y === void 0 || b < Date.now()) && (y = ""), tt > 0 && e.useInput !== true && G.key !== void 0 && G.key.length === 1 && G.altKey === false && G.ctrlKey === false && G.metaKey === false && (G.keyCode !== 32 || y.length !== 0)) {
      r.value !== true && De(G);
      const gt = G.key.toLocaleLowerCase(), vt = y.length === 1 && y[0] === gt;
      b = Date.now() + 1500, vt === false && (He(G), y += gt);
      const Dt = new RegExp("^" + y.split("").map((gi) => F1.indexOf(gi) !== -1 ? "\\" + gi : gi).join(".*"), "i");
      let At = i.value;
      if (vt === true || At < 0 || Dt.test(le.value(e.options[At])) !== true) do
        At = Co(At + 1, -1, tt - 1);
      while (At !== i.value && (U.value(e.options[At]) === true || Dt.test(le.value(e.options[At])) !== true));
      i.value !== At && Ge(() => {
        ie(At), te(At), At >= 0 && e.useInput === true && e.fillInput === true && xe(le.value(e.options[At]), true);
      });
      return;
    }
    if (!(G.keyCode !== 13 && (G.keyCode !== 32 || e.useInput === true || y !== "") && (G.keyCode !== 9 || $e === false))) {
      if (G.keyCode !== 9 && He(G), i.value !== -1 && i.value < tt) {
        Ve(e.options[i.value]);
        return;
      }
      if (Re === true) {
        const gt = (vt, Dt) => {
          var _a2;
          if (Dt) {
            if (Fd(Dt) !== true) return;
          } else Dt = e.newValueMode;
          if (Fe("", e.multiple !== true, true), vt == null) return;
          (Dt === "toggle" ? Ve : Ne)(vt, Dt === "add-unique"), e.multiple !== true && ((_a2 = B.value) == null ? void 0 : _a2.focus(), at());
        };
        if (e.onNewValue !== void 0 ? n("newValue", u.value, gt) : gt(u.value), e.multiple !== true) return;
      }
      r.value === true ? Le() : K.innerLoading.value !== true && De();
    }
  }
  function xt() {
    return g === true ? T.value : O.value !== null && O.value.contentEl !== null ? O.value.contentEl : void 0;
  }
  function jt() {
    return xt();
  }
  function tl() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? ne.value.map((G) => t["selected-item"](G)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? ne.value.map((G, Re) => d(Bm, { key: "option-" + Re, removable: K.editable.value === true && U.value(G.opt) !== true, dense: true, textColor: e.color, tabindex: R.value, onRemove() {
      G.removeAtIndex(Re);
    } }, () => d("span", { class: "ellipsis", [G.html === true ? "innerHTML" : "textContent"]: le.value(G.opt) }))) : [d("span", { class: "ellipsis", [S.value === true ? "innerHTML" : "textContent"]: re.value })];
  }
  function ln() {
    if (ee.value === true) return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: u.value }) : void 0;
    const G = t.option !== void 0 ? t.option : ($e) => d(Sa, { key: $e.index, ...$e.itemProps }, () => d(mn, () => d(Iu, () => d("span", { [$e.html === true ? "innerHTML" : "textContent"]: $e.label }))));
    let Re = $("div", W.value.map(G));
    return t["before-options"] !== void 0 && (Re = t["before-options"]().concat(Re)), kt(t["after-options"], Re);
  }
  function In(G, Re) {
    const $e = Re === true ? { ...z.value, ...K.splitAttrs.attributes.value } : void 0, tt = { ref: Re === true ? B : void 0, key: "i_t", class: F.value, style: e.inputStyle, value: u.value !== void 0 ? u.value : "", type: "search", ...$e, id: Re === true ? K.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": G === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ..._e.value };
    return G !== true && g === true && (Array.isArray(tt.class) === true ? tt.class = [...tt.class, "no-pointer-events"] : tt.class += " no-pointer-events"), d("input", tt);
  }
  function ue(G) {
    v !== null && (clearTimeout(v), v = null), h !== null && (clearTimeout(h), h = null), !(G && G.target && G.target.qComposing === true) && (xe(G.target.value || ""), _ = true, k = u.value, K.focused.value !== true && (g !== true || c.value === true) && K.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
      v = null, Be(u.value);
    }, e.inputDebounce)));
  }
  function xe(G, Re) {
    u.value !== G && (u.value = G, Re === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", G) : h = setTimeout(() => {
      h = null, n("inputValue", G);
    }, e.inputDebounce));
  }
  function Fe(G, Re, $e) {
    _ = $e !== true, e.useInput === true && (xe(G, true), (Re === true || $e !== true) && (k = G), Re !== true && Be(G));
  }
  function Be(G, Re, $e) {
    if (e.onFilter === void 0 || Re !== true && K.focused.value !== true) return;
    K.innerLoading.value === true ? n("filterAbort") : (K.innerLoading.value = true, s.value = true), G !== "" && e.multiple !== true && A.value.length !== 0 && _ !== true && G === le.value(A.value[0]) && (G = "");
    const tt = setTimeout(() => {
      r.value === true && (r.value = false);
    }, 10);
    w !== null && clearTimeout(w), w = tt, n("filter", G, (gt, vt) => {
      (Re === true || K.focused.value === true) && w === tt && (clearTimeout(w), typeof gt == "function" && gt(), s.value = false, Ge(() => {
        K.innerLoading.value = false, K.editable.value === true && (Re === true ? r.value === true && at() : r.value === true ? hi(true) : r.value = true), typeof vt == "function" && Ge(() => {
          vt(l);
        }), typeof $e == "function" && Ge(() => {
          $e(l);
        });
      }));
    }, () => {
      K.focused.value === true && w === tt && (clearTimeout(w), K.innerLoading.value = false, s.value = false), r.value === true && (r.value = false);
    });
  }
  function Ue() {
    return d(ii, { ref: O, class: P.value, style: e.popupContentStyle, modelValue: r.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && ee.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: X.value, noParentEvent: true, noRefocus: true, noFocus: true, noRouteDismiss: e.popupNoRouteDismiss, square: me.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Z.value, onScrollPassive: j, onBeforeShow: Ys, onBeforeHide: yt, onShow: ht }, ln);
  }
  function yt(G) {
    Gs(G), Le();
  }
  function ht() {
    ye();
  }
  function I(G) {
    var _a2;
    wt(G), (_a2 = B.value) == null ? void 0 : _a2.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function Y(G) {
    wt(G), Ge(() => {
      c.value = false;
    });
  }
  function se() {
    const G = [d(i1, { class: `col-auto ${K.fieldClass.value}`, ...J.value, for: K.targetUid.value, dark: X.value, square: true, loading: s.value, itemAligned: false, filled: true, stackLabel: u.value.length !== 0, ...K.splitAttrs.listeners.value, onFocus: I, onBlur: Y }, { ...t, rawControl: () => K.getControl(true), before: void 0, after: void 0 })];
    return r.value === true && G.push(d("div", { ref: T, class: P.value + " scroll", style: e.popupContentStyle, ...Z.value, onClick: Vt, onScrollPassive: j }, ln())), d(si, { ref: N, modelValue: o.value, position: e.useInput === true ? "top" : void 0, transitionShow: p, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, noRouteDismiss: e.popupNoRouteDismiss, onBeforeShow: Ys, onBeforeHide: Te, onHide: Ee, onShow: Xe }, () => d("div", { class: "q-select__dialog" + (X.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, G));
  }
  function Te(G) {
    Gs(G), N.value !== null && N.value.__updateRefocusTarget(K.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), K.focused.value = false;
  }
  function Ee(G) {
    at(), K.focused.value === false && n("blur", G), cn();
  }
  function Xe() {
    const G = document.activeElement;
    (G === null || G.id !== K.targetUid.value) && B.value !== null && B.value !== G && B.value.focus(), ye();
  }
  function Le() {
    o.value !== true && (i.value = -1, r.value === true && (r.value = false), K.focused.value === false && (w !== null && (clearTimeout(w), w = null), K.innerLoading.value === true && (n("filterAbort"), K.innerLoading.value = false, s.value = false)));
  }
  function De(G) {
    K.editable.value === true && (g === true ? (K.onControlFocusin(G), o.value = true, Ge(() => {
      K.focus();
    })) : K.focus(), e.onFilter !== void 0 ? Be(u.value) : (ee.value !== true || t["no-option"] !== void 0) && (r.value = true));
  }
  function at() {
    o.value = false, Le();
  }
  function cn() {
    e.useInput === true && Fe(e.multiple !== true && e.fillInput === true && A.value.length !== 0 && le.value(A.value[0]) || "", true, true);
  }
  function hi(G) {
    let Re = -1;
    if (G === true) {
      if (A.value.length !== 0) {
        const $e = ce.value(A.value[0]);
        Re = e.options.findIndex((tt) => kn(ce.value(tt), $e));
      }
      H(Re);
    }
    ie(Re);
  }
  function _g(G, Re) {
    r.value === true && K.innerLoading.value === false && (H(-1, true), Ge(() => {
      r.value === true && K.innerLoading.value === false && (G > Re ? H() : hi(true));
    }));
  }
  function Ws() {
    o.value === false && O.value !== null && O.value.updatePosition();
  }
  function Ys(G) {
    G !== void 0 && wt(G), n("popupShow", G), K.hasPopupOpen = true, K.onControlFocusin(G);
  }
  function Gs(G) {
    G !== void 0 && wt(G), n("popupHide", G), K.hasPopupOpen = false, K.onControlFocusout(G);
  }
  function Xs() {
    g = a.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || ee.value === false : true), p = a.platform.is.ios === true && g === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return Ta(Xs), Yo(Ws), Xs(), Ke(() => {
    v !== null && clearTimeout(v), h !== null && clearTimeout(h);
  }), Object.assign(l, { showPopup: De, hidePopup: at, removeAtIndex: qe, add: Ne, toggleOption: Ve, getOptionIndex: () => i.value, setOptionIndex: ie, moveOptionSelection: be, filter: Be, updateMenuPosition: Ws, updateInputValue: Fe, isOptionSelected: pe, getEmittingOptionValue: ke, isOptionDisabled: (...G) => U.value.apply(null, G) === true, getOptionValue: (...G) => ce.value.apply(null, G), getOptionLabel: (...G) => le.value.apply(null, G) }), Object.assign(K, { innerValue: A, fieldClass: f(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: x, targetRef: B, hasValue: ge, showPopup: De, floatingLabel: f(() => e.hideSelected !== true && ge.value === true || typeof u.value == "number" || u.value.length !== 0 || jl(e.displayValue)), getControlChild: () => {
    if (K.editable.value !== false && (o.value === true || ee.value !== true || t["no-option"] !== void 0)) return g === true ? se() : Ue();
    K.hasPopupOpen === true && (K.hasPopupOpen = false);
  }, controlEvents: { onFocusin(G) {
    K.onControlFocusin(G);
  }, onFocusout(G) {
    K.onControlFocusout(G, () => {
      cn(), Le();
    });
  }, onClick(G) {
    var _a2;
    if (Vt(G), g !== true && r.value === true) {
      Le(), (_a2 = B.value) == null ? void 0 : _a2.focus();
      return;
    }
    De(G);
  } }, getControl: (G) => {
    const Re = tl(), $e = G === true || o.value !== true || g !== true;
    if (e.useInput === true) Re.push(In(G, $e));
    else if (K.editable.value === true) {
      const gt = $e === true ? z.value : void 0;
      Re.push(d("input", { ref: $e === true ? B : void 0, key: "d_t", class: "q-select__focus-target", id: $e === true ? K.targetUid.value : void 0, value: re.value, readonly: true, "data-autofocus": G === true || e.autofocus === true || void 0, ...gt, onKeydown: it, onKeyup: Oe, onKeypress: We })), $e === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Re.push(d("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Ae }));
    }
    if (M.value !== void 0 && e.disable !== true && oe.value.length !== 0) {
      const gt = oe.value.map((vt) => d("option", { value: vt, selected: true }));
      Re.push(d("select", { class: "hidden", name: M.value, multiple: e.multiple }, gt));
    }
    const tt = e.useInput === true || $e !== true ? void 0 : K.splitAttrs.attributes.value;
    return d("div", { class: "q-field__native row items-center", ...tt, ...K.splitAttrs.listeners.value }, Re);
  }, getInnerAppend: () => e.loading !== true && s.value !== true && e.hideDropdownIcon !== true ? [d(et, { class: "q-select__dropdown-icon" + (r.value === true ? " rotate-180" : ""), name: de.value })] : null }), vi(K);
} }), I1 = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"], z1 = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
ve({ name: "QSkeleton", props: { ...nt, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => I1.includes(e), default: "rect" }, animation: { type: String, validator: (e) => z1.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), a = f(() => {
    const o = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: o[0], height: o[1] };
  }), r = f(() => `q-skeleton q-skeleton--${l.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => d(e.tag, { class: r.value, style: a.value }, Pe(t.default));
} });
var Od = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
ve({ name: "QSlideItem", props: { ...nt, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), { getCache: o } = Pr(), i = Q(null);
  let u = null, c = {}, s = {}, v = {};
  const h = f(() => a.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), m = f(() => "q-slide-item q-item-type overflow-hidden" + (r.value === true ? " q-slide-item--dark q-dark" : ""));
  function g() {
    i.value.style.transform = "translate(0,0)";
  }
  function _(k, p, y) {
    e.onSlide !== void 0 && n("slide", { side: k, ratio: p, isReset: y });
  }
  function w(k) {
    const p = i.value;
    if (k.isFirst) c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, p.classList.add("no-transition"), Od.forEach((B) => {
      if (t[B[0]] !== void 0) {
        const O = v[B[0]];
        O.style.transform = "scale(1)", c.size[B[0]] = O.getBoundingClientRect()[B[3]];
      }
    }), c.axis = k.direction === "up" || k.direction === "down" ? "Y" : "X";
    else if (k.isFinal) {
      p.classList.remove("no-transition"), c.scale === 1 ? (p.style.transform = `translate${c.axis}(${c.dir * 100}%)`, u !== null && clearTimeout(u), u = setTimeout(() => {
        u = null, n(c.showing, { reset: g }), n("action", { side: c.showing, reset: g });
      }, 230)) : (p.style.transform = "translate(0,0)", _(c.showing, 0, true));
      return;
    } else k.direction = c.axis === "X" ? k.offset.x < 0 ? "left" : "right" : k.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && k.direction === h.value.right || t.right === void 0 && k.direction === h.value.left || t.top === void 0 && k.direction === "down" || t.bottom === void 0 && k.direction === "up") {
      p.style.transform = "translate(0,0)";
      return;
    }
    let y, b, x;
    c.axis === "X" ? (b = k.direction === "left" ? -1 : 1, y = b === 1 ? h.value.left : h.value.right, x = k.distance.x) : (b = k.direction === "up" ? -2 : 2, y = b === 2 ? "top" : "bottom", x = k.distance.y), !(c.dir !== null && Math.abs(b) !== Math.abs(c.dir)) && (c.dir !== b && (["left", "right", "top", "bottom"].forEach((B) => {
      s[B] && (s[B].style.visibility = y === B ? "visible" : "hidden");
    }), c.showing = y, c.dir = b), c.scale = Math.max(0, Math.min(1, (x - 40) / c.size[y])), p.style.transform = `translate${c.axis}(${x * b / Math.abs(b)}px)`, v[y].style.transform = `scale(${c.scale})`, _(y, c.scale, false));
  }
  return Ta(() => {
    s = {}, v = {};
  }), Ke(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(l, { reset: g }), () => {
    const k = [], p = { left: t[h.value.right] !== void 0, right: t[h.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, y = Object.keys(p).filter((x) => p[x] === true);
    Od.forEach((x) => {
      const B = x[0];
      t[B] !== void 0 && k.push(d("div", { key: B, ref: (O) => {
        s[B] = O;
      }, class: `q-slide-item__${B} absolute-full row no-wrap items-${x[1]} justify-${x[2]}` + (e[B + "Color"] !== void 0 ? ` bg-${e[B + "Color"]}` : "") }, [d("div", { ref: (O) => {
        v[B] = O;
      } }, t[B]())]));
    });
    const b = d("div", { key: `${y.length === 0 ? "only-" : ""} content`, ref: i, class: "q-slide-item__content" }, Pe(t.default));
    return y.length === 0 ? k.push(b) : k.push(sn(b, o("dir#" + y.join(""), () => {
      const x = { prevent: true, stop: true, mouse: true };
      return y.forEach((B) => {
        x[B] = true;
      }), [[gn, w, void 0, x]];
    }))), d("div", { class: m.value }, k);
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
var N1 = '<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>';
ve({ name: "QSpinnerBall", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", innerHTML: N1 });
} });
var H1 = '<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>';
ve({ name: "QSpinnerBars", props: Tt, setup(e) {
  const { cSize: t, classes: n } = Mt(e);
  return () => d("svg", { class: n.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", innerHTML: H1 });
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
  const { proxy: { $q: l } } = Se(), a = lt(e, l), r = Q(null), o = { before: Q(null), after: Q(null) }, i = f(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (a.value === true ? " q-splitter--dark" : "")), u = f(() => e.horizontal === true ? "height" : "width"), c = f(() => e.reverse !== true ? "before" : "after"), s = f(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function v(x) {
    return (e.unit === "%" ? x : Math.round(x)) + e.unit;
  }
  const h = f(() => ({ [c.value]: { [u.value]: v(e.modelValue) } }));
  let m, g, _, w, k;
  function p(x) {
    if (x.isFirst === true) {
      const O = r.value.getBoundingClientRect()[u.value];
      m = e.horizontal === true ? "up" : "left", g = e.unit === "%" ? 100 : O, _ = Math.min(g, s.value[1], Math.max(s.value[0], e.modelValue)), w = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : l.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? O === 0 ? 0 : 100 / O : 1), r.value.classList.add("q-splitter--active");
      return;
    }
    if (x.isFinal === true) {
      k !== e.modelValue && n("update:modelValue", k), r.value.classList.remove("q-splitter--active");
      return;
    }
    const B = _ + w * (x.direction === m ? -1 : 1) * x.distance[e.horizontal === true ? "y" : "x"];
    k = Math.min(g, s.value[1], Math.max(s.value[0], B)), o[c.value].value.style[u.value] = v(k), e.emitImmediately === true && e.modelValue !== k && n("update:modelValue", k);
  }
  const y = f(() => [[gn, p, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function b(x, B) {
    x < B[0] ? n("update:modelValue", B[0]) : x > B[1] && n("update:modelValue", B[1]);
  }
  return he(() => e.modelValue, (x) => {
    b(x, s.value);
  }), he(() => e.limits, () => {
    Ge(() => {
      b(e.modelValue, s.value);
    });
  }), () => {
    const x = [d("div", { ref: o.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: h.value.before }, Pe(t.before)), d("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [pn("div", { class: "q-splitter__separator-area absolute-full" }, Pe(t.separator), "sep", e.disable !== true, () => y.value)]), d("div", { ref: o.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: h.value.after }, Pe(t.after))];
    return d("div", { class: i.value, ref: r }, kt(t.default, x));
  };
} });
var Rh = ve({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  const { proxy: { $q: n } } = Se(), l = Q(null), a = f(() => e.stepper.modelValue === e.step.name), r = f(() => {
    const w = e.step.disable;
    return w === true || w === "";
  }), o = f(() => {
    const w = e.step.error;
    return w === true || w === "";
  }), i = f(() => {
    const w = e.step.done;
    return r.value === false && (w === true || w === "");
  }), u = f(() => {
    const w = e.step.headerNav, k = w === true || w === "" || w === void 0;
    return r.value === false && e.stepper.headerNav && k;
  }), c = f(() => e.step.prefix && (a.value === false || e.stepper.activeIcon === "none") && (o.value === false || e.stepper.errorIcon === "none") && (i.value === false || e.stepper.doneIcon === "none")), s = f(() => {
    const w = e.step.icon || e.stepper.inactiveIcon;
    if (a.value === true) {
      const k = e.step.activeIcon || e.stepper.activeIcon;
      return k === "none" ? w : k || n.iconSet.stepper.active;
    }
    if (o.value === true) {
      const k = e.step.errorIcon || e.stepper.errorIcon;
      return k === "none" ? w : k || n.iconSet.stepper.error;
    }
    if (r.value === false && i.value === true) {
      const k = e.step.doneIcon || e.stepper.doneIcon;
      return k === "none" ? w : k || n.iconSet.stepper.done;
    }
    return w;
  }), v = f(() => {
    const w = o.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (a.value === true) {
      const k = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return k !== void 0 ? k : w;
    }
    return w !== void 0 ? w : r.value === false && i.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), h = f(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (v.value !== void 0 ? ` text-${v.value}` : "") + (o.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (a.value === true ? " q-stepper__tab--active" : "") + (i.value === true ? " q-stepper__tab--done" : "") + (u.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (r.value === true ? " q-stepper__tab--disabled" : "")), m = f(() => e.stepper.headerNav !== true ? false : u.value);
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
    const k = [d("div", { class: "q-focus-helper", tabindex: -1, ref: l }), d("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [d("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : d(et, { name: s.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      const p = [d("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && p.push(d("div", { class: "q-stepper__caption" }, e.step.caption)), k.push(d("div", { class: "q-stepper__label q-stepper__line relative-position" }, p));
    }
    return sn(d("div", w, k), [[ai, m.value]]);
  };
} });
function $h(e) {
  return d("div", { class: "q-stepper__step-content" }, [d("div", { class: "q-stepper__step-inner" }, Pe(e.default))]);
}
var Vd = { setup(e, { slots: t }) {
  return () => $h(t);
} };
ve({ name: "QStep", props: { ...Es, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: n }) {
  const { proxy: { $q: l } } = Se(), a = qt(Gv, ot);
  if (a === ot) return console.error("QStep needs to be a child of QStepper"), ot;
  const { getCache: r } = Pr(), o = Q(null), i = f(() => a.value.modelValue === e.name), u = f(() => l.platform.is.ios !== true && l.platform.is.chrome === true || i.value !== true || a.value.vertical !== true ? {} : { onScroll(v) {
    const { target: h } = v;
    h.scrollTop > 0 && (h.scrollTop = 0), e.onScroll !== void 0 && n("scroll", v);
  } }), c = f(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function s() {
    const v = a.value.vertical;
    return v === true && a.value.keepAlive === true ? d(rv, a.value.keepAliveProps.value, i.value === true ? [d(a.value.needsUniqueKeepAliveWrapper.value === true ? r(c.value, () => ({ ...Vd, name: c.value })) : Vd, { key: c.value }, t.default)] : void 0) : v !== true || i.value === true ? $h(t) : void 0;
  }
  return () => d("div", { ref: o, class: "q-stepper__step", role: "tabpanel", ...u.value }, a.value.vertical === true ? [d(Rh, { stepper: a.value, step: e, goToPanel: a.value.goToPanel }), a.value.animated === true ? d(zs, s) : s()] : [s()]);
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
ve({ name: "QStepper", props: { ...nt, ...As, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Rs, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q), { updatePanelsList: a, isValidPanelName: r, updatePanelIndex: o, getPanelContent: i, getPanels: u, panelDirectives: c, goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h } = $s();
  hn(Gv, f(() => ({ goToPanel: s, keepAliveProps: v, needsUniqueKeepAliveWrapper: h, ...e })));
  const m = f(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (l.value === true ? " q-stepper--dark q-dark" : "")), g = f(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function _() {
    const w = Pe(t.message, []);
    if (e.vertical === true) {
      r(e.modelValue) && o();
      const k = d("div", { class: "q-stepper__content" }, Pe(t.default));
      return w === void 0 ? [k] : w.concat(k);
    }
    return [d("div", { class: g.value }, u().map((k) => {
      const p = c_(k.props);
      return d(Rh, { key: p.name, stepper: e, step: p, goToPanel: s });
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
var f_ = { list: xh, table: x1 }, v_ = ["list", "table", "__qtable"], m_ = ve({ name: "QVirtualScroll", props: { ...Nu, type: { type: String, default: "list", validator: (e) => v_.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: Wl }, setup(e, { slots: t, attrs: n }) {
  let l;
  const a = Q(null), r = f(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: o, localResetVirtualScroll: i, padVirtualScroll: u, onVirtualScrollEvt: c } = Ah({ virtualScrollLength: r, getVirtualScrollTarget: g, getVirtualScrollEl: m }), s = f(() => {
    if (r.value === 0) return [];
    const p = (y, b) => ({ index: o.value.from + b, item: y });
    return e.itemsFn === void 0 ? e.items.slice(o.value.from, o.value.to).map(p) : e.itemsFn(o.value.from, o.value.to - o.value.from).map(p);
  }), v = f(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), h = f(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
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
  function k() {
    let p = u(e.type === "list" ? "div" : "tbody", s.value.map(t.default));
    return t.before !== void 0 && (p = t.before().concat(p)), kt(t.after, p);
  }
  return Wo(() => {
    i();
  }), ft(() => {
    _();
  }), _l(() => {
    _();
  }), On(() => {
    w();
  }), Ke(() => {
    w();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? Ph({ ref: a, class: "q-table__middle " + v.value }, k()) : d(f_[e.type], { ...n, ref: a, class: [n.class, v.value], ...h.value }, k);
  };
} });
function h_(e, t) {
  return new Date(e) - new Date(t);
}
var g_ = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function b_(e, t, n, l) {
  const a = f(() => {
    const { sortBy: i } = t.value;
    return i && n.value.find((u) => u.name === i) || null;
  }), r = f(() => e.sortMethod !== void 0 ? e.sortMethod : (i, u, c) => {
    const s = n.value.find((m) => m.name === u);
    if (s === void 0 || s.field === void 0) return i;
    const v = c === true ? -1 : 1, h = typeof s.field == "function" ? (m) => s.field(m) : (m) => m[s.field];
    return i.sort((m, g) => {
      let _ = h(m), w = h(g);
      return s.rawSort !== void 0 ? s.rawSort(_, w, m, g) * v : _ == null ? -1 * v : w == null ? 1 * v : s.sort !== void 0 ? s.sort(_, w, m, g) * v : pr(_) === true && pr(w) === true ? (_ - w) * v : Tu(_) === true && Tu(w) === true ? h_(_, w) * v : typeof _ == "boolean" && typeof w == "boolean" ? (_ - w) * v : ([_, w] = [_, w].map((k) => (k + "").toLocaleString().toLowerCase()), _ < w ? -1 * v : _ === w ? 0 : v);
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
var y_ = { filter: [String, Object], filterMethod: Function };
function p_(e, t) {
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
function __(e, t) {
  for (const n in t) if (t[n] !== e[n]) return false;
  return true;
}
function Id(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var w_ = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function S_(e, t) {
  const { props: n, emit: l } = e, a = Q(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5 }, n.pagination)), r = f(() => {
    const s = n["onUpdate:pagination"] !== void 0 ? { ...a.value, ...n.pagination } : a.value;
    return Id(s);
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
    const h = Id({ ...r.value, ...s });
    if (__(r.value, h) === true) {
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
function x_(e, t, n, l, a, r) {
  const { props: o, emit: i, proxy: { $q: u } } = e, c = f(() => l.value === true ? n.value.rowsNumber || 0 : r.value), s = f(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return (b - 1) * x;
  }), v = f(() => {
    const { page: b, rowsPerPage: x } = n.value;
    return b * x;
  }), h = f(() => n.value.page === 1), m = f(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage))), g = f(() => v.value === 0 ? true : n.value.page >= m.value), _ = f(() => (o.rowsPerPageOptions.includes(t.value.rowsPerPage) ? o.rowsPerPageOptions : [t.value.rowsPerPage].concat(o.rowsPerPageOptions)).map((x) => ({ label: x === 0 ? u.lang.table.allRows : "" + x, value: x })));
  he(m, (b, x) => {
    if (b === x) return;
    const B = n.value.page;
    b && !B ? a({ page: 1 }) : b < B && a({ page: b });
  });
  function w() {
    a({ page: 1 });
  }
  function k() {
    const { page: b } = n.value;
    b > 1 && a({ page: b - 1 });
  }
  function p() {
    const { page: b, rowsPerPage: x } = n.value;
    v.value > 0 && b * x < c.value && a({ page: b + 1 });
  }
  function y() {
    a({ page: m.value });
  }
  return o["onUpdate:pagination"] !== void 0 && i("update:pagination", { ...n.value }), { firstRowIndex: s, lastRowIndex: v, isFirstPage: h, isLastPage: g, pagesNumber: m, computedRowsPerPageOptions: _, computedRowsNumber: c, firstPage: w, prevPage: k, nextPage: p, lastPage: y };
}
var C_ = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } }, k_ = ["update:selected", "selection"];
function q_(e, t, n, l) {
  const a = f(() => {
    const g = {};
    return e.selected.map(l.value).forEach((_) => {
      g[_] = true;
    }), g;
  }), r = f(() => e.selection !== "none"), o = f(() => e.selection === "single"), i = f(() => e.selection === "multiple"), u = f(() => n.value.length !== 0 && n.value.every((g) => a.value[l.value(g)] === true)), c = f(() => u.value !== true && n.value.some((g) => a.value[l.value(g)] === true)), s = f(() => e.selected.length);
  function v(g) {
    return a.value[g] === true;
  }
  function h() {
    t("update:selected", []);
  }
  function m(g, _, w, k) {
    t("selection", { rows: _, added: w, keys: g, evt: k });
    const p = o.value === true ? w === true ? _ : [] : w === true ? e.selected.concat(_) : e.selected.filter((y) => g.includes(l.value(y)) === false);
    t("update:selected", p);
  }
  return { hasSelectionMode: r, singleSelection: o, multipleSelection: i, allRowsSelected: u, someRowsSelected: c, rowsSelectedNumber: s, isRowSelected: v, clearSelection: h, updateSelection: m };
}
function zd(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var T_ = { expanded: Array }, M_ = ["update:expanded"];
function E_(e, t) {
  const n = Q(zd(e.expanded));
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
var A_ = { visibleColumns: Array };
function R_(e, t, n) {
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
var Xr = "q-table__bottom row items-center", Lh = {};
Eh.forEach((e) => {
  Lh[e] = {};
});
ve({ name: "QTable", props: { rows: { type: Array, required: true }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: {}, ...Lh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], tableRowStyleFn: Function, tableRowClassFn: Function, cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], cardStyleFn: Function, cardClassFn: Function, hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...nt, ...Ps, ...A_, ...y_, ...w_, ...T_, ...C_, ...g_ }, emits: ["request", "virtualScroll", ...Ls, ...M_, ...k_], setup(e, { slots: t, emit: n }) {
  const l = Se(), { proxy: { $q: a } } = l, r = lt(e, a), { inFullscreen: o, toggleFullscreen: i } = Bs(), u = f(() => typeof e.rowKey == "function" ? e.rowKey : (ue) => ue[e.rowKey]), c = Q(null), s = Q(null), v = f(() => e.grid !== true && e.virtualScroll === true), h = f(() => " q-table__card" + (r.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), m = f(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : h.value) + (r.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (o.value === true ? " fullscreen scroll" : "")), g = f(() => m.value + (e.loading === true ? " q-table--loading" : ""));
  he(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
    var _a2;
    v.value === true && ((_a2 = s.value) == null ? void 0 : _a2.reset());
  });
  const { innerPagination: _, computedPagination: w, isServerSide: k, requestServerInteraction: p, setPagination: y } = S_(l, ie), { computedFilterMethod: b } = p_(e, y), { isRowExpanded: x, setExpanded: B, updateExpanded: O } = E_(e, n), N = f(() => {
    let ue = e.rows;
    if (k.value === true || ue.length === 0) return ue;
    const { sortBy: xe, descending: Fe } = w.value;
    return e.filter && (ue = b.value(ue, e.filter, K.value, ie)), X.value !== null && (ue = ge.value(e.rows === ue ? ue.slice() : ue, xe, Fe)), ue;
  }), T = f(() => N.value.length), M = f(() => {
    let ue = N.value;
    if (k.value === true) return ue;
    const { rowsPerPage: xe } = w.value;
    return xe !== 0 && (P.value === 0 && e.rows !== ue ? ue.length > ee.value && (ue = ue.slice(0, ee.value)) : ue = ue.slice(P.value, ee.value)), ue;
  }), { hasSelectionMode: L, singleSelection: q, multipleSelection: E, allRowsSelected: C, someRowsSelected: D, rowsSelectedNumber: H, isRowSelected: $, clearSelection: j, updateSelection: te } = q_(e, n, M, u), { colList: ye, computedCols: K, computedColsMap: A, computedColspan: J } = R_(e, w, L), { columnToSort: X, computedSortMethod: ge, sort: F } = b_(e, w, ye, y), { firstRowIndex: P, lastRowIndex: ee, isFirstPage: V, isLastPage: re, pagesNumber: we, computedRowsPerPageOptions: S, computedRowsNumber: R, firstPage: z, prevPage: Z, nextPage: ne, lastPage: W } = x_(l, _, w, k, y, T), de = f(() => M.value.length === 0), me = f(() => {
    const ue = {};
    return Eh.forEach((xe) => {
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
        const yt = d("tbody", Fe({ cols: K.value }));
        Ue.before = ue === null ? () => yt : () => [ue()].concat(yt);
      } else ue !== null && (Ue.before = ue);
      return Be !== void 0 && (Ue.after = () => d("tbody", Be({ cols: K.value }))), d(m_, { ref: s, class: e.tableClass, style: e.tableStyle, ...me.value, scrollTarget: e.virtualScrollTarget, items: M.value, type: "__qtable", tableColspan: J.value, onVirtualScroll: U }, Ue);
    }
    const xe = [ke()];
    return ue !== null && xe.unshift(ue()), Ph({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, xe);
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
      Be.scrollTop = Ue, n("virtualScroll", { index: ue, from: 0, to: _.value.rowsPerPage - 1, direction: yt });
    }
  }
  function U(ue) {
    n("virtualScroll", ue);
  }
  function oe() {
    return [d(R1, { class: "q-table__linear-progress", color: e.color, dark: r.value, indeterminate: true, trackColor: "transparent" })];
  }
  function _e(ue, xe, Fe) {
    const Be = u.value(ue), Ue = $(Be);
    if (xe !== void 0) {
      const Y = { key: Be, row: ue, pageIndex: Fe, __trClass: Ue ? "selected" : "" };
      if (e.tableRowStyleFn !== void 0 && (Y.__trStyle = e.tableRowStyleFn(ue)), e.tableRowClassFn !== void 0) {
        const se = e.tableRowClassFn(ue);
        se && (Y.__trClass = `${se} ${Y.__trClass}`);
      }
      return xe(qe(Y));
    }
    const yt = t["body-cell"], ht = K.value.map((Y) => {
      const se = t[`body-cell-${Y.name}`], Te = se !== void 0 ? se : yt;
      return Te !== void 0 ? Te(Me({ key: Be, row: ue, pageIndex: Fe, col: Y })) : d("td", { class: Y.__tdClass(ue), style: Y.__tdStyle(ue) }, ie(Y, ue));
    });
    if (L.value === true) {
      const Y = t["body-selection"], se = Y !== void 0 ? Y(Ne({ key: Be, row: ue, pageIndex: Fe })) : [d(ir, { modelValue: Ue, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (Te, Ee) => {
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
    let Be = M.value.map((Ue, yt) => _e(Ue, ue, yt));
    return xe !== void 0 && (Be = xe({ cols: K.value }).concat(Be)), Fe !== void 0 && (Be = Be.concat(Fe({ cols: K.value }))), d("tbody", Be);
  }
  function qe(ue) {
    return Ve(ue), ue.cols = ue.cols.map((xe) => Ot({ ...xe }, "value", () => ie(xe, ue.row))), ue;
  }
  function Me(ue) {
    return Ve(ue), Ot(ue, "value", () => ie(ue.col, ue.row)), ue;
  }
  function Ne(ue) {
    return Ve(ue), ue;
  }
  function Ve(ue) {
    Object.assign(ue, { cols: K.value, colsMap: A.value, sort: F, rowIndex: P.value + ue.pageIndex, color: e.color, dark: r.value, dense: e.dense }), L.value === true && Ot(ue, "selected", () => $(ue.key), (xe, Fe) => {
      te([ue.key], [ue.row], xe, Fe);
    }), Ot(ue, "expand", () => x(ue.key), (xe) => {
      O(ue.key, xe);
    });
  }
  function ie(ue, xe) {
    const Fe = typeof ue.field == "function" ? ue.field(xe) : xe[ue.field];
    return ue.format !== void 0 ? ue.format(Fe, xe) : Fe;
  }
  const be = f(() => ({ pagination: w.value, pagesNumber: we.value, isFirstPage: V.value, isLastPage: re.value, firstPage: z, prevPage: Z, nextPage: ne, lastPage: W, inFullscreen: o.value, toggleFullscreen: i }));
  function ae() {
    const ue = t.top, xe = t["top-left"], Fe = t["top-right"], Be = t["top-selection"], Ue = L.value === true && Be !== void 0 && H.value > 0, yt = "q-table__top relative-position row items-center";
    if (ue !== void 0) return d("div", { class: yt }, [ue(be.value)]);
    let ht;
    if (Ue === true ? ht = Be(be.value).slice() : (ht = [], xe !== void 0 ? ht.push(d("div", { class: "q-table__control" }, [xe(be.value)])) : e.title && ht.push(d("div", { class: "q-table__control" }, [d("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), Fe !== void 0 && (ht.push(d("div", { class: "q-table__separator col" })), ht.push(d("div", { class: "q-table__control" }, [Fe(be.value)]))), ht.length !== 0) return d("div", { class: yt }, ht);
  }
  const pe = f(() => D.value === true ? null : C.value);
  function Ce() {
    const ue = Oe();
    return e.loading === true && t.loading === void 0 && ue.push(d("tr", { class: "q-table__progress" }, [d("th", { class: "relative-position", colspan: J.value }, oe())])), d("thead", ue);
  }
  function Oe() {
    const ue = t.header, xe = t["header-cell"];
    if (ue !== void 0) return ue(Ae({ header: true })).slice();
    const Fe = K.value.map((Be) => {
      const Ue = t[`header-cell-${Be.name}`], yt = Ue !== void 0 ? Ue : xe, ht = Ae({ col: Be });
      return yt !== void 0 ? yt(ht) : d(d_, { key: Be.name, props: ht }, () => Be.label);
    });
    if (q.value === true && e.grid !== true) Fe.unshift(d("th", { class: "q-table--col-auto-width" }, " "));
    else if (E.value === true) {
      const Be = t["header-selection"], Ue = Be !== void 0 ? Be(Ae({})) : [d(ir, { color: e.color, modelValue: pe.value, dark: r.value, dense: e.dense, "onUpdate:modelValue": We })];
      Fe.unshift(d("th", { class: "q-table--col-auto-width" }, Ue));
    }
    return [d("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, Fe)];
  }
  function Ae(ue) {
    return Object.assign(ue, { cols: K.value, sort: F, colsMap: A.value, color: e.color, dark: r.value, dense: e.dense }), E.value === true && Ot(ue, "selected", () => pe.value, We), ue;
  }
  function We(ue) {
    D.value === true && (ue = false), te(M.value.map(u.value), M.value, ue);
  }
  const it = f(() => {
    const ue = [e.iconFirstPage || a.iconSet.table.firstPage, e.iconPrevPage || a.iconSet.table.prevPage, e.iconNextPage || a.iconSet.table.nextPage, e.iconLastPage || a.iconSet.table.lastPage];
    return a.lang.rtl === true ? ue.reverse() : ue;
  });
  function xt() {
    if (e.hideBottom === true) return;
    if (de.value === true) {
      if (e.hideNoData === true) return;
      const Fe = e.loading === true ? e.loadingLabel || a.lang.table.loading : e.filter ? e.noResultsLabel || a.lang.table.noResults : e.noDataLabel || a.lang.table.noData, Be = t["no-data"], Ue = Be !== void 0 ? [Be({ message: Fe, icon: a.iconSet.table.warning, filter: e.filter })] : [d(et, { class: "q-table__bottom-nodata-icon", name: a.iconSet.table.warning }), Fe];
      return d("div", { class: Xr + " q-table__bottom--nodata" }, Ue);
    }
    const ue = t.bottom;
    if (ue !== void 0) return d("div", { class: Xr }, [ue(be.value)]);
    const xe = e.hideSelectedBanner !== true && L.value === true && H.value > 0 ? [d("div", { class: "q-table__control" }, [d("div", [(e.selectedRowsLabel || a.lang.table.selectedRecords)(H.value)])])] : [];
    if (e.hidePagination !== true) return d("div", { class: Xr + " justify-end" }, tl(xe));
    if (xe.length !== 0) return d("div", { class: Xr }, xe);
  }
  function jt(ue) {
    y({ page: 1, rowsPerPage: ue.value });
  }
  function tl(ue) {
    let xe;
    const { rowsPerPage: Fe } = w.value, Be = e.paginationLabel || a.lang.table.pagination, Ue = t.pagination, yt = e.rowsPerPageOptions.length > 1;
    if (ue.push(d("div", { class: "q-table__separator col" })), yt === true && ue.push(d("div", { class: "q-table__control" }, [d("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || a.lang.table.recordsPerPage]), d(V1, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: Fe, options: S.value, displayValue: Fe === 0 ? a.lang.table.allRows : Fe, dark: r.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": jt })])), Ue !== void 0) xe = Ue(be.value);
    else if (xe = [d("span", Fe !== 0 ? { class: "q-table__bottom-item" } : {}, [Fe ? Be(P.value + 1, Math.min(ee.value, R.value), R.value) : Be(1, T.value, R.value)])], Fe !== 0 && we.value > 1) {
      const ht = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (ht.size = "sm"), we.value > 2 && xe.push(d(Ze, { key: "pgFirst", ...ht, icon: it.value[0], disable: V.value, ariaLabel: a.lang.pagination.first, onClick: z })), xe.push(d(Ze, { key: "pgPrev", ...ht, icon: it.value[1], disable: V.value, ariaLabel: a.lang.pagination.prev, onClick: Z }), d(Ze, { key: "pgNext", ...ht, icon: it.value[2], disable: re.value, ariaLabel: a.lang.pagination.next, onClick: ne })), we.value > 2 && xe.push(d(Ze, { key: "pgLast", ...ht, icon: it.value[3], disable: re.value, ariaLabel: a.lang.pagination.last, onClick: W }));
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
      if (L.value === true) {
        const Ue = t["body-selection"], yt = Ue !== void 0 ? Ue(xe) : [d(ir, { modelValue: xe.selected, color: e.color, dark: r.value, dense: e.dense, "onUpdate:modelValue": (ht, I) => {
          te([xe.key], [xe.row], ht, I);
        } })];
        Fe.unshift(d("div", { class: "q-table__grid-item-row" }, yt), d(Hl, { dark: r.value }));
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
    return d("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, M.value.map((xe, Fe) => ue(qe({ key: u.value(xe), row: xe, pageIndex: Fe }))));
  }
  return Object.assign(l.proxy, { requestServerInteraction: p, setPagination: y, firstPage: z, prevPage: Z, nextPage: ne, lastPage: W, isRowSelected: $, clearSelection: j, isRowExpanded: x, setExpanded: B, sort: F, resetVirtualScroll: fe, scrollTo: le, getCellValue: ie }), zv(l.proxy, { filteredSortedRows: () => N.value, computedRows: () => M.value, computedRowsNumber: () => R.value }), () => {
    const ue = [ae()], xe = { ref: c, class: g.value };
    return e.grid === true ? ue.push(ln()) : Object.assign(xe, { class: [xe.class, e.cardClass], style: e.cardStyle }), ue.push(ce(), xt()), e.loading === true && t.loading !== void 0 && ue.push(t.loading()), d("div", xe, ue);
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
var tu = ve({ name: "QRouteTab", props: { ...Ar, ...Um }, emits: jm, setup(e, { slots: t, emit: n }) {
  const l = li({ useDisableForRouterLinkProps: false }), { renderTab: a, $tabs: r } = Qm(e, t, n, { exact: f(() => e.exact), ...l });
  return he(() => `${e.name} | ${e.exact} | ${(l.resolvedLink.value || {}).href}`, r.verifyRouteModel), () => a(l.linkTag.value, l.linkAttrs.value);
} });
function $_(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function P_() {
  const e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
ve({ name: "QTime", props: { ...nt, ...wn, ...Fo, modelValue: { required: true, validator: (e) => typeof e == "string" || e === null }, mask: { ...Fo.mask, default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: Xm, setup(e, { slots: t, emit: n }) {
  const l = Se(), { $q: a } = l.proxy, r = lt(e, a), { tabindex: o, headerClass: i, getLocale: u, getCurrentDate: c } = Zm(e, a), s = $r(e), v = Sl(s);
  let h, m;
  const g = Q(null), _ = f(() => ge()), w = f(() => u()), k = f(() => F()), p = Qa(e.modelValue, _.value, w.value, e.calendar, k.value), y = Q($_(p)), b = Q(p), x = Q(p.hour === null || p.hour < 12), B = f(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (r.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), O = f(() => {
    const ie = b.value;
    return { hour: ie.hour === null ? "--" : N.value === true ? rt(ie.hour) : String(x.value === true ? ie.hour === 0 ? 12 : ie.hour : ie.hour > 12 ? ie.hour - 12 : ie.hour), minute: ie.minute === null ? "--" : rt(ie.minute), second: ie.second === null ? "--" : rt(ie.second) };
  }), N = f(() => e.format24h !== null ? e.format24h : a.lang.date.format24h), T = f(() => {
    const ie = y.value === "hour", be = ie === true ? 12 : 60, ae = b.value[y.value];
    let Ce = `rotate(${Math.round(ae * (360 / be)) - 180}deg) translateX(-50%)`;
    return ie === true && N.value === true && b.value.hour >= 12 && (Ce += " scale(.7)"), { transform: Ce };
  }), M = f(() => b.value.hour !== null), L = f(() => M.value === true && b.value.minute !== null), q = f(() => e.hourOptions !== void 0 ? (ie) => e.hourOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(ie, null, null) : null), E = f(() => e.minuteOptions !== void 0 ? (ie) => e.minuteOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, ie, null) : null), C = f(() => e.secondOptions !== void 0 ? (ie) => e.secondOptions.includes(ie) : e.options !== void 0 ? (ie) => e.options(b.value.hour, b.value.minute, ie) : null), D = f(() => {
    if (q.value === null) return null;
    const ie = A(0, 11, q.value), be = A(12, 11, q.value);
    return { am: ie, pm: be, values: ie.values.concat(be.values) };
  }), H = f(() => E.value !== null ? A(0, 59, E.value) : null), $ = f(() => C.value !== null ? A(0, 59, C.value) : null), j = f(() => {
    switch (y.value) {
      case "hour":
        return D.value;
      case "minute":
        return H.value;
      case "second":
        return $.value;
    }
  }), te = f(() => {
    let ie, be, ae = 0, pe = 1;
    const Ce = j.value !== null ? j.value.values : void 0;
    y.value === "hour" ? N.value === true ? (ie = 0, be = 23) : (ie = 0, be = 11, x.value === false && (ae = 12)) : (ie = 0, be = 55, pe = 5);
    const Oe = [];
    for (let Ae = ie, We = ie; Ae <= be; Ae += pe, We++) {
      const it = Ae + ae, xt = (Ce == null ? void 0 : Ce.includes(it)) === false, jt = y.value === "hour" && Ae === 0 ? N.value === true ? "00" : "12" : Ae;
      Oe.push({ val: it, index: We, disable: xt, label: jt });
    }
    return Oe;
  }), ye = f(() => [[gn, V, void 0, { stop: true, prevent: true, mouse: true }]]);
  he(() => e.modelValue, (ie) => {
    const be = Qa(ie, _.value, w.value, e.calendar, k.value);
    (be.dateHash !== b.value.dateHash || be.timeHash !== b.value.timeHash) && (b.value = be, be.hour === null ? y.value = "hour" : x.value = be.hour < 12);
  }), he([_, w], () => {
    Ge(() => {
      Me();
    });
  });
  function K() {
    const ie = { ...c(), ...P_() };
    Me(ie), Object.assign(b.value, ie), y.value = "hour";
  }
  function A(ie, be, ae) {
    const pe = Array.apply(null, { length: be + 1 }).map((Ce, Oe) => {
      const Ae = Oe + ie;
      return { index: Ae, val: ae(Ae) === true };
    }).filter((Ce) => Ce.val === true).map((Ce) => Ce.index);
    return { min: pe[0], max: pe[pe.length - 1], values: pe, threshold: be + 1 };
  }
  function J(ie, be, ae) {
    const pe = Math.abs(ie - be);
    return Math.min(pe, ae - pe);
  }
  function X(ie, { min: be, max: ae, values: pe, threshold: Ce }) {
    if (ie === be) return be;
    if (ie < be || ie > ae) return J(ie, be, Ce) <= J(ie, ae, Ce) ? be : ae;
    const Oe = pe.findIndex((it) => ie <= it), Ae = pe[Oe - 1], We = pe[Oe];
    return ie - Ae <= We - ie ? Ae : We;
  }
  function ge() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function F() {
    if (typeof e.defaultDate != "string") {
      const ie = c(true);
      return ie.dateHash = jn(ie), ie;
    }
    return Qa(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function P() {
    return hl(l) === true || j.value !== null && (j.value.values.length === 0 || y.value === "hour" && N.value !== true && D.value[x.value === true ? "am" : "pm"].values.length === 0);
  }
  function ee() {
    const ie = g.value, { top: be, left: ae, width: pe } = ie.getBoundingClientRect(), Ce = pe / 2;
    return { top: be + Ce, left: ae + Ce, dist: Ce * 0.7 };
  }
  function V(ie) {
    if (P() !== true) {
      if (ie.isFirst === true) {
        h = ee(), m = we(ie.evt, h);
        return;
      }
      m = we(ie.evt, h, m), ie.isFinal === true && (h = false, m = null, re());
    }
  }
  function re() {
    y.value === "hour" ? y.value = "minute" : e.withSeconds && y.value === "minute" && (y.value = "second");
  }
  function we(ie, be, ae) {
    const pe = en(ie), Ce = Math.abs(pe.top - be.top), Oe = Math.sqrt(Math.pow(Math.abs(pe.top - be.top), 2) + Math.pow(Math.abs(pe.left - be.left), 2));
    let Ae, We = Math.asin(Ce / Oe) * (180 / Math.PI);
    if (pe.top < be.top ? We = be.left < pe.left ? 90 - We : 270 + We : We = be.left < pe.left ? We + 90 : 270 - We, y.value === "hour") {
      if (Ae = We / 30, D.value !== null) {
        const it = N.value !== true ? x.value === true : D.value.am.values.length !== 0 && D.value.pm.values.length !== 0 ? Oe >= be.dist : D.value.am.values.length !== 0;
        Ae = X(Ae + (it === true ? 0 : 12), D.value[it === true ? "am" : "pm"]);
      } else Ae = Math.round(Ae), N.value === true ? Oe < be.dist ? Ae < 12 && (Ae += 12) : Ae === 12 && (Ae = 0) : x.value === true && Ae === 12 ? Ae = 0 : x.value === false && Ae !== 12 && (Ae += 12);
      N.value === true && (x.value = Ae < 12);
    } else Ae = Math.round(We / 6) % 60, y.value === "minute" && H.value !== null ? Ae = X(Ae, H.value) : y.value === "second" && $.value !== null && (Ae = X(Ae, $.value));
    return ae !== Ae && U[y.value](Ae), Ae;
  }
  const S = { hour() {
    y.value = "hour";
  }, minute() {
    y.value = "minute";
  }, second() {
    y.value = "second";
  } };
  function R(ie) {
    ie.keyCode === 13 && oe();
  }
  function z(ie) {
    ie.keyCode === 13 && _e();
  }
  function Z(ie) {
    P() !== true && (a.platform.is.desktop !== true && we(ie, ee()), re());
  }
  function ne(ie) {
    P() !== true && we(ie, ee());
  }
  function W(ie) {
    if (ie.keyCode === 13) y.value = "hour";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if (D.value !== null) {
        const ae = N.value === true ? D.value.values : D.value[x.value === true ? "am" : "pm"].values;
        if (ae.length === 0) return;
        if (b.value.hour === null) fe(ae[0]);
        else {
          const pe = (ae.length + ae.indexOf(b.value.hour) + be) % ae.length;
          fe(ae[pe]);
        }
      } else {
        const ae = N.value === true ? 24 : 12, pe = N.value !== true && x.value === false ? 12 : 0, Ce = b.value.hour === null ? -be : b.value.hour;
        fe(pe + (24 + Ce + be) % ae);
      }
    }
  }
  function de(ie) {
    if (ie.keyCode === 13) y.value = "minute";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if (H.value !== null) {
        const ae = H.value.values;
        if (ae.length === 0) return;
        if (b.value.minute === null) ce(ae[0]);
        else {
          const pe = (ae.length + ae.indexOf(b.value.minute) + be) % ae.length;
          ce(ae[pe]);
        }
      } else {
        const ae = b.value.minute === null ? -be : b.value.minute;
        ce((60 + ae + be) % 60);
      }
    }
  }
  function me(ie) {
    if (ie.keyCode === 13) y.value = "second";
    else if ([37, 39].includes(ie.keyCode)) {
      const be = ie.keyCode === 37 ? -1 : 1;
      if ($.value !== null) {
        const ae = $.value.values;
        if (ae.length === 0) return;
        if (b.value.seconds === null) le(ae[0]);
        else {
          const pe = (ae.length + ae.indexOf(b.value.second) + be) % ae.length;
          le(ae[pe]);
        }
      } else {
        const ae = b.value.second === null ? -be : b.value.second;
        le((60 + ae + be) % 60);
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
  const U = { hour: fe, minute: ce, second: le };
  function oe() {
    x.value === false && (x.value = true, b.value.hour !== null && (b.value.hour -= 12, qe()));
  }
  function _e() {
    x.value === true && (x.value = false, b.value.hour !== null && (b.value.hour += 12, qe()));
  }
  function ke(ie) {
    const be = e.modelValue;
    y.value !== ie && be !== void 0 && be !== null && be !== "" && typeof be != "string" && (y.value = ie);
  }
  function qe() {
    if (q.value !== null && q.value(b.value.hour) !== true) {
      b.value = Qa(), ke("hour");
      return;
    }
    if (E.value !== null && E.value(b.value.minute) !== true) {
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
    const be = Object.assign({ ...b.value }, ie), ae = e.calendar === "persian" ? rt(be.hour) + ":" + rt(be.minute) + (e.withSeconds === true ? ":" + rt(be.second) : "") : lh(new Date(be.year, be.month === null ? null : be.month - 1, be.day, be.hour, be.minute, be.second, be.millisecond), _.value, w.value, be.year, be.timezoneOffset);
    be.changed = ae !== e.modelValue, n("update:modelValue", ae, be);
  }
  function Ne() {
    const ie = [d("div", { class: "q-time__link " + (y.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: S.hour, onKeyup: W }, O.value.hour), d("div", ":"), d("div", M.value === true ? { class: "q-time__link " + (y.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: de, onClick: S.minute } : { class: "q-time__link" }, O.value.minute)];
    e.withSeconds === true && ie.push(d("div", ":"), d("div", L.value === true ? { class: "q-time__link " + (y.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onKeyup: me, onClick: S.second } : { class: "q-time__link" }, O.value.second));
    const be = [d("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, ie)];
    return N.value === false && be.push(d("div", { class: "q-time__header-ampm column items-between no-wrap" }, [d("div", { class: "q-time__link " + (x.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: oe, onKeyup: R }, "AM"), d("div", { class: "q-time__link " + (x.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: o.value, onClick: _e, onKeyup: z }, "PM")])), d("div", { class: "q-time__header flex flex-center no-wrap " + i.value }, be);
  }
  function Ve() {
    const ie = b.value[y.value];
    return d("div", { class: "q-time__content col relative-position" }, [d(Ft, { name: "q-transition--scale" }, () => d("div", { key: "clock" + y.value, class: "q-time__container-parent absolute-full" }, [d("div", { ref: g, class: "q-time__container-child fit overflow-hidden" }, [sn(d("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Z, onMousedown: ne }, [d("div", { class: "q-time__clock-circle fit" }, [d("div", { class: "q-time__clock-pointer" + (b.value[y.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: T.value }), te.value.map((be) => d("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${be.index}` + (be.val === ie ? " q-time__clock-position--active " + i.value : be.disable === true ? " q-time__clock-position--disable" : "") }, [d("span", be.label)]))])]), ye.value)])])), e.nowBtn === true ? d(Ze, { class: "q-time__now-button absolute", icon: a.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: o.value, onClick: K }) : null]);
  }
  return l.proxy.setNow = K, () => {
    const ie = [Ve()], be = Pe(t.default);
    return be !== void 0 && ie.push(d("div", { class: "q-time__actions" }, be)), e.name !== void 0 && e.disable !== true && v(ie, "push"), d("div", { class: B.value, tabindex: -1 }, [Ne(), d("div", { class: "q-time__main col overflow-auto" }, ie)]);
  };
} });
ve({ name: "QTimeline", props: { ...nt, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  const n = Se(), l = lt(e, n.proxy.$q);
  hn(Yv, e);
  const a = f(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (l.value === true ? " q-timeline--dark" : ""));
  return () => d("ul", { class: a.value }, Pe(t.default));
} });
ve({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  const n = qt(Yv, ot);
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
var L_ = ve({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => d("div", { class: n.value, role: "toolbar" }, Pe(t.default));
} }), B_ = ve({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  const n = f(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => d("div", { class: n.value }, Pe(t.default));
} }), F_ = ["none", "strict", "leaf", "leaf-filtered"];
ve({ name: "QTree", props: { ...nt, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => F_.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: {}, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: n }) {
  const { proxy: l } = Se(), { $q: a } = l, r = lt(e, a), o = Q({}), i = Q(e.ticked || []), u = Q(e.expanded || []);
  let c = {};
  Ta(() => {
    c = {};
  });
  const s = f(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (r.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), v = f(() => e.selected !== void 0), h = f(() => e.icon || a.iconSet.tree.icon), m = f(() => e.controlColor || e.color), g = f(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), _ = f(() => {
    const A = e.selectedColor || e.color;
    return A ? ` text-${A}` : "";
  }), w = f(() => e.filterMethod !== void 0 ? e.filterMethod : (A, J) => {
    const X = J.toLowerCase();
    return A[e.labelKey] && A[e.labelKey].toLowerCase().indexOf(X) !== -1;
  }), k = f(() => {
    const A = {}, J = (X, ge) => {
      const F = X.tickStrategy || (ge ? ge.tickStrategy : e.tickStrategy), P = X[e.nodeKey], ee = X[e.childrenKey] && Array.isArray(X[e.childrenKey]) && X[e.childrenKey].length !== 0, V = X.disabled !== true && v.value === true && X.selectable !== false, re = X.disabled !== true && X.expandable !== false, we = F !== "none", S = F === "strict", R = F === "leaf-filtered", z = F === "leaf" || F === "leaf-filtered";
      let Z = X.disabled !== true && X.tickable !== false;
      z === true && Z === true && ge && ge.tickable !== true && (Z = false);
      let ne = X.lazy;
      ne === true && o.value[P] !== void 0 && Array.isArray(X[e.childrenKey]) === true && (ne = o.value[P]);
      const W = { key: P, parent: ge, isParent: ee, lazy: ne, disabled: X.disabled, link: X.disabled !== true && (V === true || re === true && (ee === true || ne === true)), children: [], matchesFilter: e.filter ? w.value(X, e.filter) : true, selected: P === e.selected && V === true, selectable: V, expanded: ee === true ? u.value.includes(P) : false, expandable: re, noTick: X.noTick === true || S !== true && ne && ne !== "loaded", tickable: Z, tickStrategy: F, hasTicking: we, strictTicking: S, leafFilteredTicking: R, leafTicking: z, ticked: S === true ? i.value.includes(P) : ee === true ? false : i.value.includes(P) };
      if (A[P] = W, ee === true && (W.children = X[e.childrenKey].map((de) => J(de, W)), e.filter && (W.matchesFilter !== true ? W.matchesFilter = W.children.some((de) => de.matchesFilter) : W.noTick !== true && W.disabled !== true && W.tickable === true && R === true && W.children.every((de) => de.matchesFilter !== true || de.noTick === true || de.tickable !== true) === true && (W.tickable = false)), W.matchesFilter === true && (W.noTick !== true && S !== true && W.children.every((de) => de.noTick) === true && (W.noTick = true), z))) {
        if (W.ticked = false, W.indeterminate = W.children.some((de) => de.indeterminate === true), W.tickable = W.tickable === true && W.children.some((de) => de.tickable), W.indeterminate !== true) {
          const de = W.children.reduce((me, fe) => fe.ticked === true ? me + 1 : me, 0);
          de === W.children.length ? W.ticked = true : de > 0 && (W.indeterminate = true);
        }
        W.indeterminate === true && (W.indeterminateNextState = W.children.every((de) => de.tickable !== true || de.ticked !== true));
      }
      return W;
    };
    return e.nodes.forEach((X) => J(X, null)), A;
  });
  he(() => e.ticked, (A) => {
    i.value = A;
  }), he(() => e.expanded, (A) => {
    u.value = A;
  });
  function p(A) {
    const J = [].reduce, X = (ge, F) => {
      if (ge || !F) return ge;
      if (Array.isArray(F) === true) return J.call(Object(F), X, ge);
      if (F[e.nodeKey] === A) return F;
      if (F[e.childrenKey]) return X(null, F[e.childrenKey]);
    };
    return X(null, e.nodes);
  }
  function y() {
    return i.value.map((A) => p(A));
  }
  function b() {
    return u.value.map((A) => p(A));
  }
  function x(A) {
    return A && k.value[A] ? k.value[A].expanded : false;
  }
  function B() {
    e.expanded !== void 0 ? n("update:expanded", []) : u.value = [];
  }
  function O() {
    const A = [], J = (X) => {
      X[e.childrenKey] && X[e.childrenKey].length !== 0 && X.expandable !== false && X.disabled !== true && (A.push(X[e.nodeKey]), X[e.childrenKey].forEach(J));
    };
    e.nodes.forEach(J), e.expanded !== void 0 ? n("update:expanded", A) : u.value = A;
  }
  function N(A, J, X = p(A), ge = k.value[A]) {
    if (ge.lazy && ge.lazy !== "loaded") {
      if (ge.lazy === "loading") return;
      o.value[A] = "loading", Array.isArray(X[e.childrenKey]) !== true && (X[e.childrenKey] = []), n("lazyLoad", { node: X, key: A, done: (F) => {
        o.value[A] = "loaded", X[e.childrenKey] = Array.isArray(F) === true ? F : [], Ge(() => {
          var _a2;
          ((_a2 = k.value[A]) == null ? void 0 : _a2.isParent) === true && T(A, true);
        });
      }, fail: () => {
        delete o.value[A], X[e.childrenKey].length === 0 && delete X[e.childrenKey];
      } });
    } else ge.isParent === true && ge.expandable === true && T(A, J);
  }
  function T(A, J) {
    let X = u.value;
    const ge = e.expanded !== void 0;
    if (ge === true && (X = X.slice()), J) {
      if (e.accordion && k.value[A]) {
        const F = [];
        k.value[A].parent ? k.value[A].parent.children.forEach((P) => {
          P.key !== A && P.expandable === true && F.push(P.key);
        }) : e.nodes.forEach((P) => {
          const ee = P[e.nodeKey];
          ee !== A && F.push(ee);
        }), F.length !== 0 && (X = X.filter((P) => F.includes(P) === false));
      }
      X = X.concat([A]).filter((F, P, ee) => ee.indexOf(F) === P);
    } else X = X.filter((F) => F !== A);
    ge === true ? n("update:expanded", X) : u.value = X;
  }
  function M(A) {
    return A && k.value[A] ? k.value[A].ticked : false;
  }
  function L(A, J) {
    let X = i.value;
    const ge = e.ticked !== void 0;
    ge === true && (X = X.slice()), J ? X = X.concat(A).filter((F, P, ee) => ee.indexOf(F) === P) : X = X.filter((F) => A.includes(F) === false), ge === true && n("update:ticked", X);
  }
  function q(A, J, X) {
    const ge = { tree: l, node: A, key: X, color: e.color, dark: r.value };
    return Ot(ge, "expanded", () => J.expanded, (F) => {
      F !== J.expanded && N(X, F);
    }), Ot(ge, "ticked", () => J.ticked, (F) => {
      F !== J.ticked && L([X], F);
    }), ge;
  }
  function E(A) {
    return (e.filter ? A.filter((J) => k.value[J[e.nodeKey]].matchesFilter) : A).map((J) => $(J));
  }
  function C(A) {
    if (A.icon !== void 0) return d(et, { class: "q-tree__icon q-mr-sm", name: A.icon, color: A.iconColor });
    const J = A.img || A.avatar;
    if (J) return d("img", { class: `q-tree__${A.img ? "img" : "avatar"} q-mr-sm`, src: J });
  }
  function D() {
    n("afterShow");
  }
  function H() {
    n("afterHide");
  }
  function $(A) {
    const J = A[e.nodeKey], X = k.value[J], ge = A.header && t[`header-${A.header}`] || t["default-header"], F = X.isParent === true ? E(A[e.childrenKey]) : [], P = F.length !== 0 || X.lazy && X.lazy !== "loaded";
    let ee = A.body && t[`body-${A.body}`] || t["default-body"];
    const V = ge !== void 0 || ee !== void 0 ? q(A, X, J) : null;
    return ee !== void 0 && (ee = d("div", { class: "q-tree__node-body relative-position" }, [d("div", { class: g.value }, [ee(V)])])), d("div", { key: J, class: `q-tree__node relative-position q-tree__node--${P === true ? "parent" : "child"}` }, [d("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (X.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (X.selected === true ? " q-tree__node--selected" : "") + (X.disabled === true ? " q-tree__node--disabled" : ""), tabindex: X.link === true ? 0 : -1, ariaExpanded: F.length > 0 ? X.expanded : null, role: "treeitem", onClick: (re) => {
      te(A, X, re);
    }, onKeypress(re) {
      Ql(re) !== true && (re.keyCode === 13 ? te(A, X, re, true) : re.keyCode === 32 && ye(A, X, re, true));
    } }, [d("div", { class: "q-focus-helper", tabindex: -1, ref: (re) => {
      c[X.key] = re;
    } }), X.lazy === "loading" ? d(_n, { class: "q-tree__spinner", color: m.value }) : P === true ? d(et, { class: "q-tree__arrow" + (X.expanded === true ? " q-tree__arrow--rotate" : ""), name: h.value, onClick(re) {
      ye(A, X, re);
    } }) : null, X.hasTicking === true && X.noTick !== true ? d(ir, { class: "q-tree__tickbox", modelValue: X.indeterminate === true ? null : X.ticked, color: m.value, dark: r.value, dense: true, keepColor: true, disable: X.tickable !== true, onKeydown: He, "onUpdate:modelValue": (re) => {
      K(X, re);
    } }) : null, d("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (X.selected === true ? _.value : g.value) }, [ge ? ge(V) : [C(A), d("div", A[e.labelKey])]])]), P === true ? e.noTransition === true ? X.expanded === true ? d("div", { class: "q-tree__node-collapsible" + g.value, key: `${J}__q` }, [ee, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, F)]) : null : d(zs, { duration: e.duration, onShow: D, onHide: H }, () => sn(d("div", { class: "q-tree__node-collapsible" + g.value, key: `${J}__q` }, [ee, d("div", { class: "q-tree__children" + (X.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, F)]), [[Fv, X.expanded]])) : ee]);
  }
  function j(A) {
    var _a2;
    (_a2 = c[A]) == null ? void 0 : _a2.focus();
  }
  function te(A, J, X, ge) {
    ge !== true && J.selectable !== false && j(J.key), v.value && J.selectable ? e.noSelectionUnset === false ? n("update:selected", J.key !== e.selected ? J.key : null) : J.key !== e.selected && n("update:selected", J.key === void 0 ? null : J.key) : ye(A, J, X, ge), typeof A.handler == "function" && A.handler(A);
  }
  function ye(A, J, X, ge) {
    X !== void 0 && He(X), ge !== true && J.selectable !== false && j(J.key), N(J.key, !J.expanded, A, J);
  }
  function K(A, J) {
    if (A.indeterminate === true && (J = A.indeterminateNextState), A.strictTicking) L([A.key], J);
    else if (A.leafTicking) {
      const X = [], ge = (F) => {
        F.isParent ? (J !== true && F.noTick !== true && F.tickable === true && X.push(F.key), F.leafTicking === true && F.children.forEach(ge)) : F.noTick !== true && F.tickable === true && (F.leafFilteredTicking !== true || F.matchesFilter === true) && X.push(F.key);
      };
      ge(A), L(X, J);
    }
  }
  return e.defaultExpandAll === true && O(), Object.assign(l, { getNodeByKey: p, getTickedNodes: y, getExpandedNodes: b, isExpanded: x, collapseAll: B, expandAll: O, setExpanded: N, isTicked: M, setTicked: L }), () => {
    const A = E(e.nodes);
    return d("div", { class: s.value, role: "tree" }, A.length === 0 ? e.filter ? e.noResultsLabel || a.lang.tree.noResults : e.noNodesLabel || a.lang.tree.noNodes : A);
  };
} });
function Dd(e) {
  return (e * 100).toFixed(2) + "%";
}
var O_ = { ...nt, ...hh, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, thumbnailFit: { type: String, default: "cover" }, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean }, Bh = [...gh, "start", "finish", "added", "removed"];
function V_(e, t) {
  const n = Se(), { props: l, slots: a, emit: r, proxy: o } = n, { $q: i } = o, u = lt(l, i);
  function c(V, re, we) {
    if (V.__status = re, re === "idle") {
      V.__uploaded = 0, V.__progress = 0, V.__sizeLabel = Mu(V.size), V.__progressLabel = "0.00%";
      return;
    }
    if (re === "failed") {
      o.$forceUpdate();
      return;
    }
    V.__uploaded = re === "uploaded" ? V.size : we, V.__progress = re === "uploaded" ? 1 : Math.min(0.9999, V.__uploaded / V.size), V.__progressLabel = Dd(V.__progress), o.$forceUpdate();
  }
  const s = f(() => l.disable !== true && l.readonly !== true), v = Q(false), h = Q(null), m = Q(null), g = { files: Q([]), queuedFiles: Q([]), uploadedFiles: Q([]), uploadedSize: Q(0), updateFileStatus: c, isAlive: () => hl(n) === false }, { pickFiles: _, addFiles: w, onDragover: k, onDragleave: p, processFiles: y, getDndNode: b, maxFilesNumber: x, maxTotalSizeNumber: B } = bh({ editable: s, dnd: v, getFileInput: K, addFilesToQueue: A });
  Object.assign(g, e({ props: l, slots: a, emit: r, helpers: g, exposeApi: (V) => {
    Object.assign(g, V);
  } })), g.isBusy === void 0 && (g.isBusy = Q(false));
  const O = Q(0), N = f(() => O.value === 0 ? 0 : g.uploadedSize.value / O.value), T = f(() => Dd(N.value)), M = f(() => Mu(O.value)), L = f(() => s.value === true && g.isUploading.value !== true && (l.multiple === true || g.queuedFiles.value.length === 0) && (l.maxFiles === void 0 || g.files.value.length < x.value) && (l.maxTotalSize === void 0 || O.value < B.value)), q = f(() => s.value === true && g.isBusy.value !== true && g.isUploading.value !== true && g.queuedFiles.value.length !== 0);
  hn(tm, ge);
  const E = f(() => "q-uploader column no-wrap" + (u.value === true ? " q-uploader--dark q-dark" : "") + (l.bordered === true ? " q-uploader--bordered" : "") + (l.square === true ? " q-uploader--square no-border-radius" : "") + (l.flat === true ? " q-uploader--flat no-shadow" : "") + (l.disable === true ? " disabled q-uploader--disable" : "") + (v.value === true ? " q-uploader--dnd" : "")), C = f(() => "q-uploader__header" + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : ""));
  he(g.isUploading, (V, re) => {
    re === false && V === true ? r("start") : re === true && V === false && r("finish");
  });
  function D() {
    l.disable === false && (g.abort(), g.uploadedSize.value = 0, O.value = 0, ye(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = []);
  }
  function H() {
    l.disable === false && j(["uploaded"], () => {
      g.uploadedFiles.value = [];
    });
  }
  function $() {
    j(["idle", "failed"], ({ size: V }) => {
      O.value -= V, g.queuedFiles.value = [];
    });
  }
  function j(V, re) {
    if (l.disable === true) return;
    const we = { files: [], size: 0 }, S = g.files.value.filter((R) => V.indexOf(R.__status) === -1 ? true : (we.size += R.size, we.files.push(R), R.__img !== void 0 && window.URL.revokeObjectURL(R.__img.src), false));
    we.files.length !== 0 && (g.files.value = S, re(we), r("removed", we.files));
  }
  function te(V) {
    l.disable || (V.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter((re) => re.__key !== V.__key) : V.__status === "uploading" ? V.__abort() : O.value -= V.size, g.files.value = g.files.value.filter((re) => re.__key !== V.__key ? true : (re.__img !== void 0 && window.URL.revokeObjectURL(re.__img.src), false)), g.queuedFiles.value = g.queuedFiles.value.filter((re) => re.__key !== V.__key), r("removed", [V]));
  }
  function ye() {
    g.files.value.forEach((V) => {
      V.__img !== void 0 && window.URL.revokeObjectURL(V.__img.src);
    });
  }
  function K() {
    return m.value || h.value.getElementsByClassName("q-uploader__input")[0];
  }
  function A(V, re) {
    const we = y(V, re, g.files.value, true), S = K();
    S != null && (S.value = ""), we !== void 0 && (we.forEach((R) => {
      if (g.updateFileStatus(R, "idle"), O.value += R.size, l.noThumbnails !== true && R.type.toUpperCase().startsWith("IMAGE")) {
        const z = new Image();
        z.src = window.URL.createObjectURL(R), R.__img = z;
      }
    }), g.files.value = g.files.value.concat(we), g.queuedFiles.value = g.queuedFiles.value.concat(we), r("added", we), l.autoUpload === true && g.upload());
  }
  function J() {
    q.value === true && g.upload();
  }
  function X(V, re, we) {
    if (V === true) {
      const S = { type: "a", key: re, icon: i.iconSet.uploader[re], flat: true, dense: true };
      let R;
      return re === "add" ? (S.onClick = _, R = ge) : S.onClick = we, d(Ze, S, R);
    }
  }
  function ge() {
    return d("input", { ref: m, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: l.accept, multiple: l.multiple === true ? "multiple" : void 0, capture: l.capture, onMousedown: wt, onClick: _, onChange: A });
  }
  function F() {
    return a.header !== void 0 ? a.header(ee) : [d("div", { class: "q-uploader__header-content column" }, [d("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [X(g.queuedFiles.value.length !== 0, "removeQueue", $), X(g.uploadedFiles.value.length !== 0, "removeUploaded", H), g.isUploading.value === true ? d(_n, { class: "q-uploader__spinner" }) : null, d("div", { class: "col column justify-center" }, [l.label !== void 0 ? d("div", { class: "q-uploader__title" }, [l.label]) : null, d("div", { class: "q-uploader__subtitle" }, [M.value + " / " + T.value])]), X(L.value, "add"), X(l.hideUploadBtn === false && q.value === true, "upload", g.upload), X(g.isUploading.value, "clear", g.abort)])])];
  }
  function P() {
    return a.list !== void 0 ? a.list(ee) : g.files.value.map((V) => d("div", { key: V.__key, class: "q-uploader__file relative-position" + (l.noThumbnails !== true && V.__img !== void 0 ? " q-uploader__file--img" : "") + (V.__status === "failed" ? " q-uploader__file--failed" : V.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: l.noThumbnails !== true && V.__img !== void 0 ? { backgroundImage: 'url("' + V.__img.src + '")', backgroundSize: l.thumbnailFit } : null }, [d("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [V.__status === "failed" ? d(et, { class: "q-uploader__file-status", name: i.iconSet.type.negative, color: "negative" }) : null, d("div", { class: "q-uploader__file-header-content col" }, [d("div", { class: "q-uploader__title" }, [V.name]), d("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [V.__sizeLabel + " / " + V.__progressLabel])]), V.__status === "uploading" ? d(Vm, { value: V.__progress, min: 0, max: 1, indeterminate: V.__progress === 0 }) : d(Ze, { round: true, dense: true, flat: true, icon: i.iconSet.uploader[V.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      te(V);
    } })])]));
  }
  Ke(() => {
    g.isUploading.value === true && g.abort(), g.files.value.length !== 0 && ye();
  });
  const ee = {};
  for (const V in g) pt(g[V]) === true ? Ot(ee, V, () => g[V].value) : ee[V] = g[V];
  return Object.assign(ee, { upload: J, reset: D, removeUploadedFiles: H, removeQueuedFiles: $, removeFile: te, pickFiles: _, addFiles: w }), zv(ee, { canAddFiles: () => L.value, canUpload: () => q.value, uploadSizeLabel: () => M.value, uploadProgressLabel: () => T.value }), t({ ...g, upload: J, reset: D, removeUploadedFiles: H, removeQueuedFiles: $, removeFile: te, pickFiles: _, addFiles: w, canAddFiles: L, canUpload: q, uploadSizeLabel: M, uploadProgressLabel: T }), () => {
    const V = [d("div", { class: C.value }, F()), d("div", { class: "q-uploader__list scroll" }, P()), b("uploader")];
    g.isBusy.value === true && V.push(d("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [d(_n)]));
    const re = { ref: h, class: E.value };
    return L.value === true && Object.assign(re, { onDragover: k, onDragleave: p }), d("div", re, V);
  };
}
var I_ = () => true;
function Fh(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = I_;
  }), t;
}
var z_ = Fh(Bh), D_ = ({ name: e, props: t, emits: n, injectPlugin: l }) => ve({ name: e, props: { ...O_, ...t }, emits: Rt(n) === true ? { ...z_, ...n } : [...Bh, ...n], setup(a, { expose: r }) {
  return V_(l, r);
} });
function Nn(e) {
  return typeof e == "function" ? e : () => e;
}
var N_ = "QUploader", H_ = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function }, j_ = ["factoryFailed", "uploaded", "failed", "uploading"];
function U_({ props: e, emit: t, helpers: n }) {
  const l = Q([]), a = Q([]), r = Q(0), o = f(() => ({ url: Nn(e.url), method: Nn(e.method), headers: Nn(e.headers), formFields: Nn(e.formFields), fieldName: Nn(e.fieldName), withCredentials: Nn(e.withCredentials), sendRaw: Nn(e.sendRaw), batch: Nn(e.batch) })), i = f(() => r.value > 0), u = f(() => a.value.length !== 0);
  let c;
  function s() {
    l.value.forEach((g) => {
      g.abort();
    }), a.value.length !== 0 && (c = true);
  }
  function v() {
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
      const w = (k) => {
        n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), a.value.length === 0 && (c = false), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((p) => {
          n.updateFileStatus(p, "failed");
        }), t("factoryFailed", k, g), r.value--);
      };
      _.then((k) => {
        c === true ? w(new Error("Aborted")) : n.isAlive() === true && (a.value = a.value.filter((p) => p !== _), m(g, k));
      }).catch(w);
    } else m(g, _ || {});
  }
  function m(g, _) {
    const w = new FormData(), k = new XMLHttpRequest(), p = (q, E) => _[q] !== void 0 ? Nn(_[q])(E) : o.value[q](E), y = p("url", g);
    if (!y) {
      console.error("q-uploader: invalid or no URL specified"), r.value--;
      return;
    }
    const b = p("formFields", g);
    b !== void 0 && b.forEach((q) => {
      w.append(q.name, q.value);
    });
    let x = 0, B = 0, O = 0, N = 0, T;
    k.upload.addEventListener("progress", (q) => {
      if (T === true) return;
      const E = Math.min(N, q.loaded);
      n.uploadedSize.value += E - O, O = E;
      let C = O - B;
      for (let D = x; C > 0 && D < g.length; D++) {
        const H = g[D];
        if (C > H.size) C -= H.size, x++, B += H.size, n.updateFileStatus(H, "uploading", H.size);
        else {
          n.updateFileStatus(H, "uploading", C);
          return;
        }
      }
    }, false), k.onreadystatechange = () => {
      k.readyState < 4 || (k.status && k.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "uploaded");
      }), t("uploaded", { files: g, xhr: k })) : (T = true, n.uploadedSize.value -= O, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach((q) => {
        n.updateFileStatus(q, "failed");
      }), t("failed", { files: g, xhr: k })), r.value--, l.value = l.value.filter((q) => q !== k));
    }, k.open(p("method", g), y), p("withCredentials", g) === true && (k.withCredentials = true);
    const M = p("headers", g);
    M !== void 0 && M.forEach((q) => {
      k.setRequestHeader(q.name, q.value);
    });
    const L = p("sendRaw", g);
    g.forEach((q) => {
      n.updateFileStatus(q, "uploading", 0), L !== true && w.append(p("fieldName", q), q, q.name), q.xhr = k, q.__abort = () => {
        k.abort();
      }, N += q.size;
    }), t("uploading", { files: g, xhr: k }), l.value.push(k), L === true ? k.send(new Blob(g)) : k.send(w);
  }
  return { isUploading: i, isBusy: u, abort: s, upload: v };
}
var Q_ = { name: N_, props: H_, emits: j_, injectPlugin: U_ };
D_(Q_);
ve({ name: "QUploaderAddTrigger", setup() {
  const e = qt(tm, ot);
  return e === ot && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
ve({ name: "QVideo", props: { ...Ds, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  const t = Ns(e), n = f(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => d("div", { class: n.value, style: t.value }, [d("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
function Nd(e) {
  if (e === false) return 0;
  if (e === true || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
Rn({ name: "close-popup", beforeMount(e, { value: t }) {
  const n = { depth: Nd(t), handler(l) {
    n.depth !== 0 && setTimeout(() => {
      const a = Hy(e);
      a !== void 0 && jy(a, l, n.depth);
    });
  }, handlerKey(l) {
    yn(l, 13) === true && n.handler(l);
  } };
  e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
}, updated(e, { value: t, oldValue: n }) {
  t !== n && (e.__qclosepopup.depth = Nd(t));
}, beforeUnmount(e) {
  const t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var K_ = 0, za = void 0;
function Hd(e, t) {
  za === void 0 && (za = document.createElement("div"), za.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(za));
  const n = e.getBoundingClientRect(), l = za.getBoundingClientRect(), { marginLeft: a, marginRight: r, marginTop: o, marginBottom: i } = window.getComputedStyle(e), u = parseInt(a, 10) + parseInt(r, 10), c = parseInt(o, 10) + parseInt(i, 10);
  return { left: n.left - l.left, top: n.top - l.top, width: n.right - n.left, height: n.bottom - n.top, widthM: n.right - n.left + (t === true ? 0 : u), heightM: n.bottom - n.top + (t === true ? 0 : c), marginH: t === true ? u : 0, marginV: t === true ? c : 0 };
}
function Zr(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var jd = ["Top", "Right", "Bottom", "Left"], Ud = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], W_ = /-block|-inline|block-|inline-/, Y_ = /(-block|-inline|block-|inline-).*:/;
function Qd(e, t) {
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
      for (let u = 0; u < jd.length; u++) {
        const c = "border" + jd[u] + o;
        i += n[c] + " ";
      }
      l[r] = i;
    } else if (r === "borderRadius") {
      let o = "", i = "";
      for (let u = 0; u < Ud.length; u++) {
        const c = n[Ud[u]].split(" ");
        o += c[0] + " ", i += (c[1] === void 0 ? c[0] : c[1]) + " ";
      }
      l[r] = o + "/ " + i;
    } else l[r] = n[r];
    else r === "cssText" ? l[r] = n[r].split(";").filter((o) => Y_.test(o) !== true).join(";") : l[r] = n[r];
  }
  return l;
}
var G_ = ["absolute", "fixed", "relative", "sticky"];
function Kd(e) {
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
function Wd(e) {
  const t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function Yd(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function J_(e) {
  let t = () => false, n = false, l = true;
  const a = X_(e), r = Z_(e), o = Wd(a.from);
  if (Yd(o) !== true) return t;
  typeof o.qMorphCancel == "function" && o.qMorphCancel();
  let i, u, c, s;
  const v = o.parentNode, h = o.nextElementSibling, m = Hd(o, r.resize), { width: g, height: _ } = Zr(v), { borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, backgroundColor: b, transform: x, position: B, cssText: O } = Qd(o, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), N = o.classList.toString(), T = o.style.cssText, M = o.cloneNode(true), L = r.tween === true ? o.cloneNode(true) : void 0;
  L !== void 0 && (L.className = L.classList.toString().split(" ").filter((E) => /^bg-/.test(E) === false).join(" ")), r.hideFromClone === true && M.classList.add("q-morph--internal"), M.setAttribute("aria-hidden", "true"), M.style.transition = "none", M.style.animation = "none", M.style.pointerEvents = "none", v.insertBefore(M, h), o.qMorphCancel = () => {
    n = true, M.remove(), L == null ? void 0 : L.remove(), r.hideFromClone === true && M.classList.remove("q-morph--internal"), o.qMorphCancel = void 0;
  };
  const q = () => {
    const E = Wd(a.to);
    if (n === true || Yd(E) !== true) {
      typeof o.qMorphCancel == "function" && o.qMorphCancel();
      return;
    }
    o !== E && typeof E.qMorphCancel == "function" && E.qMorphCancel(), r.keepToClone !== true && E.classList.add("q-morph--internal"), M.classList.add("q-morph--internal");
    const { width: C, height: D } = Zr(v), { width: H, height: $ } = Zr(E.parentNode);
    r.hideFromClone !== true && M.classList.remove("q-morph--internal"), E.qMorphCancel = () => {
      n = true, M.remove(), L == null ? void 0 : L.remove(), r.hideFromClone === true && M.classList.remove("q-morph--internal"), r.keepToClone !== true && E.classList.remove("q-morph--internal"), o.qMorphCancel = void 0, E.qMorphCancel = void 0;
    };
    const j = () => {
      if (n === true) {
        typeof E.qMorphCancel == "function" && E.qMorphCancel();
        return;
      }
      r.hideFromClone !== true && (M.classList.add("q-morph--internal"), M.innerHTML = "", M.style.left = 0, M.style.right = "unset", M.style.top = 0, M.style.bottom = "unset", M.style.transform = "none"), r.keepToClone !== true && E.classList.remove("q-morph--internal");
      const te = E.parentNode, { width: ye, height: K } = Zr(te), A = E.cloneNode(r.keepToClone);
      A.setAttribute("aria-hidden", "true"), r.keepToClone !== true && (A.style.left = 0, A.style.right = "unset", A.style.top = 0, A.style.bottom = "unset", A.style.transform = "none", A.style.pointerEvents = "none"), A.classList.add("q-morph--internal");
      const J = E === o && v === te ? M : E.nextElementSibling;
      te.insertBefore(A, J);
      const { borderWidth: X, borderStyle: ge, borderColor: F, borderRadius: P, backgroundColor: ee, transform: V, position: re, cssText: we } = Qd(E, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), S = E.classList.toString(), R = E.style.cssText;
      E.style.cssText = we, E.style.transform = "none", E.style.animation = "none", E.style.transition = "none", E.className = S.split(" ").filter((pe) => /^bg-/.test(pe) === false).join(" ");
      const z = Hd(E, r.resize), Z = m.left - z.left, ne = m.top - z.top, W = m.width / (z.width > 0 ? z.width : 10), de = m.height / (z.height > 0 ? z.height : 100), me = g - C, fe = _ - D, ce = ye - H, le = K - $, U = Math.max(m.widthM, me), oe = Math.max(m.heightM, fe), _e = Math.max(z.widthM, ce), ke = Math.max(z.heightM, le), qe = o === E && ["absolute", "fixed"].includes(re) === false && ["absolute", "fixed"].includes(B) === false;
      let Me = re === "fixed", Ne = te;
      for (; Me !== true && Ne !== document; ) Me = window.getComputedStyle(Ne).position === "fixed", Ne = Ne.parentNode;
      if (r.hideFromClone !== true && (M.style.display = "block", M.style.flex = "0 0 auto", M.style.opacity = 0, M.style.minWidth = "unset", M.style.maxWidth = "unset", M.style.minHeight = "unset", M.style.maxHeight = "unset", M.classList.remove("q-morph--internal")), r.keepToClone !== true && (A.style.display = "block", A.style.flex = "0 0 auto", A.style.opacity = 0, A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset"), A.classList.remove("q-morph--internal"), typeof r.classes == "string" && (E.className += " " + r.classes), typeof r.style == "string") E.style.cssText += " " + r.style;
      else if (Rt(r.style) === true) for (const pe in r.style) E.style[pe] = r.style[pe];
      const Ve = Kd(M), ie = Kd(E), be = Me === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      E.style.position = Me === true ? "fixed" : "absolute", E.style.left = `${z.left - be.scrollLeft}px`, E.style.right = "unset", E.style.top = `${z.top - be.scrollTop}px`, E.style.margin = 0, r.resize === true && (E.style.minWidth = "unset", E.style.maxWidth = "unset", E.style.minHeight = "unset", E.style.maxHeight = "unset", E.style.overflow = "hidden", E.style.overflowX = "hidden", E.style.overflowY = "hidden"), document.body.appendChild(E), L !== void 0 && (L.style.cssText = O, L.style.transform = "none", L.style.animation = "none", L.style.transition = "none", L.style.position = E.style.position, L.style.left = `${m.left - be.scrollLeft}px`, L.style.right = "unset", L.style.top = `${m.top - be.scrollTop}px`, L.style.margin = 0, L.style.pointerEvents = "none", r.resize === true && (L.style.minWidth = "unset", L.style.maxWidth = "unset", L.style.minHeight = "unset", L.style.maxHeight = "unset", L.style.overflow = "hidden", L.style.overflowX = "hidden", L.style.overflowY = "hidden"), document.body.appendChild(L));
      const ae = (pe) => {
        o === E && l !== true ? (E.style.cssText = T, E.className = N) : (E.style.cssText = R, E.className = S), A.parentNode === te && te.insertBefore(E, A), M.remove(), A.remove(), L == null ? void 0 : L.remove(), t = () => false, o.qMorphCancel = void 0, E.qMorphCancel = void 0, typeof r.onEnd == "function" && r.onEnd(l === true ? "to" : "from", pe === true);
      };
      if (r.useCSS !== true && typeof E.animate == "function") {
        const pe = r.resize === true ? { transform: `translate(${Z}px, ${ne}px)`, width: `${U}px`, height: `${oe}px` } : { transform: `translate(${Z}px, ${ne}px) scale(${W}, ${de})` }, Ce = r.resize === true ? { width: `${_e}px`, height: `${ke}px` } : {}, Oe = r.resize === true ? { width: `${U}px`, height: `${oe}px` } : {}, Ae = r.resize === true ? { transform: `translate(${-1 * Z}px, ${-1 * ne}px)`, width: `${_e}px`, height: `${ke}px` } : { transform: `translate(${-1 * Z}px, ${-1 * ne}px) scale(${1 / W}, ${1 / de})` }, We = L !== void 0 ? { opacity: r.tweenToOpacity } : { backgroundColor: b }, it = L !== void 0 ? { opacity: 1 } : { backgroundColor: ee };
        s = E.animate([{ margin: 0, borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", ...pe, ...We }, { margin: 0, borderWidth: X, borderStyle: ge, borderColor: F, borderRadius: P, zIndex: ie, transformOrigin: "0 0", transform: V, ...Ce, ...it }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), u = L === void 0 ? void 0 : L.animate([{ opacity: r.tweenFromOpacity, margin: 0, borderWidth: w, borderStyle: k, borderColor: p, borderRadius: y, zIndex: Ve, transformOrigin: "0 0", transform: x, ...Oe }, { opacity: 0, margin: 0, borderWidth: X, borderStyle: ge, borderColor: F, borderRadius: P, zIndex: ie, transformOrigin: "0 0", ...Ae }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), i = r.hideFromClone === true || qe === true ? void 0 : M.animate([{ margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${U + m.marginH}px`, height: `${oe + m.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay }), c = r.keepToClone === true ? void 0 : A.animate([qe === true ? { margin: `${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px`, width: `${U + m.marginH}px`, height: `${oe + m.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${le < 0 ? le / 2 : 0}px ${ce < 0 ? ce / 2 : 0}px`, width: `${_e + z.marginH}px`, height: `${ke + z.marginV}px` }], { duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay });
        const xt = (jt) => {
          i == null ? void 0 : i.cancel(), u == null ? void 0 : u.cancel(), c == null ? void 0 : c.cancel(), s.cancel(), s.removeEventListener("finish", xt), s.removeEventListener("cancel", xt), ae(jt), i = void 0, u = void 0, c = void 0, s = void 0;
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, xt();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, xt();
        }, s.addEventListener("finish", xt), s.addEventListener("cancel", xt), t = (jt) => n === true || s === void 0 ? false : jt === true ? (xt(true), true) : (l = l !== true, i == null ? void 0 : i.reverse(), u == null ? void 0 : u.reverse(), c == null ? void 0 : c.reverse(), s.reverse(), true);
      } else {
        const pe = `q-morph-anim-${++K_}`, Ce = document.createElement("style"), Oe = r.resize === true ? `
            transform: translate(${Z}px, ${ne}px);
            width: ${U}px;
            height: ${oe}px;
          ` : `transform: translate(${Z}px, ${ne}px) scale(${W}, ${de});`, Ae = r.resize === true ? `
            width: ${_e}px;
            height: ${ke}px;
          ` : "", We = r.resize === true ? `
            width: ${U}px;
            height: ${oe}px;
          ` : "", it = r.resize === true ? `
            transform: translate(${-1 * Z}px, ${-1 * ne}px);
            width: ${_e}px;
            height: ${ke}px;
          ` : `transform: translate(${-1 * Z}px, ${-1 * ne}px) scale(${1 / W}, ${1 / de});`, xt = L !== void 0 ? `opacity: ${r.tweenToOpacity};` : `background-color: ${b};`, jt = L !== void 0 ? "opacity: 1;" : `background-color: ${ee};`, tl = L === void 0 ? "" : `
            @keyframes ${pe}-from-tween {
              0% {
                opacity: ${r.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${k};
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
                border-style: ${ge};
                border-color: ${F};
                border-radius: ${P};
                z-index: ${ie};
                transform-origin: 0 0;
                ${it}
              }
            }
          `, ln = r.hideFromClone === true || qe === true ? "" : `
            @keyframes ${pe}-from {
              0% {
                margin: ${fe < 0 ? fe / 2 : 0}px ${me < 0 ? me / 2 : 0}px;
                width: ${U + m.marginH}px;
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
            width: ${U + m.marginH}px;
            height: ${oe + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, ue = r.keepToClone === true ? "" : `
            @keyframes ${pe}-to {
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
          @keyframes ${pe} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${k};
              border-color: ${p};
              border-radius: ${y};
              background-color: ${b};
              z-index: ${Ve};
              transform-origin: 0 0;
              ${Oe}
              ${xt}
            }

            100% {
              margin: 0;
              border-width: ${X};
              border-style: ${ge};
              border-color: ${F};
              border-radius: ${P};
              background-color: ${ee};
              z-index: ${ie};
              transform-origin: 0 0;
              transform: ${V};
              ${Ae}
              ${jt}
            }
          }

          ${ln}

          ${tl}

          ${ue}
        `, document.head.appendChild(Ce);
        let xe = "normal";
        M.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-from`, L !== void 0 && (L.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-from-tween`), A.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}-to`, E.style.animation = `${r.duration}ms ${r.easing} ${r.delay}ms ${xe} ${r.fill} ${pe}`;
        const Fe = (Be) => {
          Be === Object(Be) && Be.animationName !== pe || (E.removeEventListener("animationend", Fe), E.removeEventListener("animationcancel", Fe), ae(), Ce.remove());
        };
        o.qMorphCancel = () => {
          o.qMorphCancel = void 0, n = true, Fe();
        }, E.qMorphCancel = () => {
          E.qMorphCancel = void 0, n = true, Fe();
        }, E.addEventListener("animationend", Fe), E.addEventListener("animationcancel", Fe), t = (Be) => n === true || !E || !M || !A ? false : Be === true ? (Fe(), true) : (l = l !== true, xe = xe === "normal" ? "reverse" : "normal", M.style.animationDirection = xe, L.style.animationDirection = xe, A.style.animationDirection = xe, E.style.animationDirection = xe, true);
      }
    };
    r.waitFor > 0 || r.waitFor === "transitionend" || r.waitFor === Object(r.waitFor) && typeof r.waitFor.then == "function" ? (r.waitFor > 0 ? new Promise((ye) => setTimeout(ye, r.waitFor)) : r.waitFor === "transitionend" ? new Promise((ye) => {
      const K = () => {
        A !== null && (clearTimeout(A), A = null), E && (E.removeEventListener("transitionend", K), E.removeEventListener("transitioncancel", K)), ye();
      };
      let A = setTimeout(K, 400);
      E.addEventListener("transitionend", K), E.addEventListener("transitioncancel", K);
    }) : r.waitFor).then(j).catch(() => {
      typeof E.qMorphCancel == "function" && E.qMorphCancel();
    }) : j();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(q), (E) => t(E);
}
var Vo = {}, ew = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"], tw = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function ia(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Oh(e) {
  if (e.animating === true || e.queue.length < 2) return;
  const [t, n] = e.queue;
  e.animating = true, t.animating = true, n.animating = true, ia(t, "remove"), ia(n, "remove");
  const l = J_({ from: t.el, to: n.el, onToggle() {
    ia(t, "add"), ia(n, "remove");
  }, ...n.opts, onEnd(a, r) {
    var _a2, _b2;
    (_b2 = (_a2 = n.opts).onEnd) == null ? void 0 : _b2.call(_a2, a, r), r !== true && (t.animating = false, n.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Oh(e));
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
    n === void 0 ? (Vo[t.group] = { name: t.group, model: e, queue: [t], animating: false }, ia(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === false && n.queue.length === 2 && Oh(n));
    return;
  }
  t.animating === false && ia(t, "add");
}
function Gd(e, t) {
  let n;
  Object(t) === t ? (n = "" + t.model, lw(t, e), Vh(t, e)) : n = "" + t, n !== e.model ? (e.model = n, aw(n, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
Rn({ name: "morph", mounted(e, t) {
  const n = { el: e, animating: false, opts: {} };
  Vh(t.modifiers, n), nw(t.arg, n), Gd(n, t.value), e.__qmorph = n;
}, updated(e, t) {
  Gd(e.__qmorph, t.value);
}, beforeUnmount(e) {
  var _a2;
  const t = e.__qmorph, n = Vo[t.group];
  n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter((a) => a !== t), n.queue.length === 0 && ((_a2 = n.cancel) == null ? void 0 : _a2.call(n), delete Vo[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var rw = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function Xd(e, t, n) {
  var _a2;
  t.handler = n, (_a2 = t.observer) == null ? void 0 : _a2.disconnect(), t.observer = new MutationObserver((l) => {
    typeof t.handler == "function" && (t.handler(l) === false || t.once === true) && Ih(e);
  }), t.observer.observe(e, t.opts);
}
function Ih(e) {
  var _a2;
  const t = e.__qmutation;
  t !== void 0 && ((_a2 = t.observer) == null ? void 0 : _a2.disconnect(), delete e.__qmutation);
}
Rn({ name: "mutation", mounted(e, { modifiers: { once: t, ...n }, value: l }) {
  const a = { once: t, opts: Object.keys(n).length === 0 ? rw : n };
  Xd(e, a, l), e.__qmutation = a;
}, updated(e, { oldValue: t, value: n }) {
  const l = e.__qmutation;
  l !== void 0 && t !== n && Xd(e, l, n);
}, beforeUnmount: Ih });
var { passive: Io } = dt;
function Zd(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Io);
    return;
  }
  e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Io), e.scroll());
}
Rn({ name: "scroll-fire", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll: Ma(() => {
    let l, a;
    n.scrollTarget === window ? (a = e.getBoundingClientRect().bottom, l = window.innerHeight) : (a = qo(e).top + _a(e), l = qo(n.scrollTarget).top + _a(n.scrollTarget)), a > 0 && a < l && (n.scrollTarget.removeEventListener("scroll", n.scroll, Io), n.handler(e));
  }, 25) };
  Zd(n, t), e.__qscrollfire = n;
}, updated(e, t) {
  t.value !== t.oldValue && Zd(e.__qscrollfire, t);
}, beforeUnmount(e) {
  const t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Io), t.scroll.cancel(), delete e.__qscrollfire;
} });
function Jd(e, { value: t, oldValue: n }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, dt.passive);
    return;
  }
  e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, dt.passive);
}
Rn({ name: "scroll", mounted(e, t) {
  const n = { scrollTarget: Vn(e), scroll() {
    n.handler(gl(n.scrollTarget), oi(n.scrollTarget));
  } };
  Jd(n, t), e.__qscroll = n;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && Jd(e.__qscroll, t);
}, beforeUnmount(e) {
  const t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, dt.passive), delete e.__qscroll;
} });
Rn({ name: "touch-hold", beforeMount(e, t) {
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
    Wt(l, "temp"), (_a2 = l.styleCleanup) == null ? void 0 : _a2.call(l, l.triggered), l.triggered === true ? r !== void 0 && He(r) : l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0);
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
var zh = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] }, ow = new RegExp(`^([\\d+]+|${Object.keys(zh).join("|")})$`, "i");
function iw(e, t) {
  const { top: n, left: l } = en(e);
  return Math.abs(l - t.left) >= 7 || Math.abs(n - t.top) >= 7;
}
Rn({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: n, arg: l }) {
  const a = Object.keys(t).reduce((u, c) => {
    if (ow.test(c) === true) {
      const s = isNaN(parseInt(c, 10)) ? zh[c.toLowerCase()] : parseInt(c, 10);
      s >= 0 && u.push(s);
    }
    return u;
  }, []);
  if (t.mouse !== true && ze.has.touch !== true && a.length === 0) return;
  const r = typeof l == "string" && l.length !== 0 ? l.split(":").map((u) => parseInt(u, 10)) : [0, 600, 300], o = r.length - 1, i = { keyboard: a, handler: n, noop: St, mouseStart(u) {
    i.event === void 0 && typeof i.handler == "function" && ei(u) === true && (Ct(i, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, true));
  }, keyboardStart(u) {
    if (typeof i.handler == "function" && yn(u, a) === true) {
      if ((r[0] === 0 || i.event !== void 0) && (He(u), e.focus(), i.event !== void 0)) return;
      Ct(i, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), i.start(u, false, true);
    }
  }, touchStart(u) {
    if (u.target !== void 0 && typeof i.handler == "function") {
      const c = u.target;
      Ct(i, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), i.start(u);
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
    i.event !== void 0 && i.timer !== void 0 && iw(u, i.origin) === true && (clearTimeout(i.timer), i.timer = void 0);
  }, end(u) {
    var _a2;
    i.event !== void 0 && ((_a2 = i.styleCleanup) == null ? void 0 : _a2.call(i, true), u !== void 0 && i.event.repeatCount > 0 && He(u), Wt(i, "temp"), i.timer !== void 0 && (clearTimeout(i.timer), i.timer = void 0), i.event = void 0);
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
function Nh() {
  const e = Qt.activeEl = Qt.isActive === false ? null : Dh();
  Ny(e === null || e === document.documentElement ? document.body : e);
}
function vw() {
  Qt.isActive = Qt.isActive === false, Nh();
}
function ef(e, t) {
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
  return t === n ? Promise.resolve() : (n !== null && t.contains(n) === true ? Qt.exit() : Promise.resolve()).finally(() => ef(t, Da.request));
}, exit() {
  return Qt.isActive === true ? ef(document, Da.exit) : Promise.resolve();
}, toggle(e) {
  return Qt.isActive === true ? Qt.exit() : Qt.request(e);
} }), Da.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Qt.isActive = !!Dh(), Qt.isActive === true && Nh(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = vw;
}));
var mw = wl({ appVisible: true }, { install({ $q: e }) {
  Ot(e, "appVisible", () => this.appVisible);
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
  const { proxy: n } = Se(), l = lt(e, n.$q), a = Q(null);
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
      return m.label === void 0 ? d(Hl, { class: "col-all", dark: l.value }) : d("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class], style: m.style, tabindex: 0, role: "listitem", onClick() {
        i(m);
      }, onKeyup(_) {
        _.keyCode === 13 && i(m);
      } }, [d("div", { class: "q-focus-helper" }), m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : d("div", { class: "q-bottom-sheet__empty-icon" }), d("div", m.label)]);
    });
  }
  function s() {
    return e.actions.map((m) => {
      const g = m.avatar || m.img;
      return m.label === void 0 ? d(Hl, { spaced: true, dark: l.value }) : d(Sa, { class: ["q-bottom-sheet__item", m.classes], style: m.style, tabindex: 0, clickable: true, dark: l.value, onClick() {
        i(m);
      } }, () => [d(mn, { avatar: true }, () => m.icon ? d(et, { name: m.icon, color: m.color }) : g ? d("img", { class: m.avatar ? "q-bottom-sheet__avatar" : "", src: g }) : null), d(mn, () => m.label)]);
    });
  }
  function v() {
    const m = [];
    return e.title && m.push(d(Pl, { class: "q-dialog__title" }, () => e.title)), e.message && m.push(d(Pl, { class: "q-dialog__message" }, () => e.message)), m.push(e.grid === true ? d("div", { class: "row items-stretch justify-start", role: "list" }, c()) : d("div", { role: "list" }, s())), m;
  }
  function h() {
    return [d(Em, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (l.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, v)];
  }
  return Object.assign(n, { show: r, hide: o }), () => d(si, { ref: a, position: "bottom", onHide: u }, h);
} });
function Hh(e, t) {
  for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, Hh(e[n], t[n])) : e[n] = t[n];
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
    const c = Q(null), s = Rr(false, "dialog"), v = (p) => {
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
          const { class: y, style: b, ...x } = p;
          y !== void 0 && (x.cardClass = y), b !== void 0 && (x.cardStyle = b), Hh(r, x);
        }
        i.$forceUpdate();
      }
      return g;
    } }, _ = (p) => {
      u = true, h.forEach((y) => {
        y(p);
      });
    }, w = () => {
      k.unmount(s), Cs(s), k = null, i = null, u !== true && m.forEach((p) => {
        p();
      });
    };
    let k = ni({ name: "QGlobalDialog", setup: () => () => d(a, { ...r, ref: c, onOk: _, onHide: w, onVnodeMounted(...p) {
      typeof r.onVnodeMounted == "function" && r.onVnodeMounted(...p), Ge(() => v("show"));
    } }) }, n);
    return i = k.mount(s), g;
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
      const c = zo(e, l);
      c !== void 0 && (u = u.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else u = u ? `${o}; ${u}` : i;
    l.req.headers.cookie = u;
  } else document.cookie = i;
}
function zo(e, t) {
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
  return zo(e, t) !== null;
}
function Wh(e) {
  return { get: (t) => zo(t, e), set: (t, n, l) => Kh(t, n, l, e), has: (t) => _w(t, e), remove: (t, n) => pw(t, n, e), getAll: () => zo(null, e) };
}
var Hs = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
__QUASAR_SSR__ && (Hs.parseSSR = (e) => {
  if (e !== void 0) return Wh(e);
});
Object.assign(Hs, Wh());
var ww = Hs, Sw = ve({ name: "DialogPluginComponent", props: { ...nt, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  const { proxy: n } = Se(), { $q: l } = n, a = lt(e, l), r = Q(null), o = Q(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), i = f(() => "q-dialog-plugin" + (a.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), u = f(() => e.color || (a.value === true ? "amber" : "primary")), c = f(() => e.progress === false ? null : Rt(e.progress) === true ? { component: e.progress.spinner || _n, props: { color: e.progress.color || u.value } } : { component: _n, props: { color: u.value } }), s = f(() => e.prompt !== void 0 || e.options !== void 0), v = f(() => {
    if (s.value !== true) return {};
    const { model: C, isValid: D, items: H, ...$ } = e.prompt !== void 0 ? e.prompt : e.options;
    return $;
  }), h = f(() => Rt(e.ok) === true || e.ok === true ? l.lang.label.ok : e.ok), m = f(() => Rt(e.cancel) === true || e.cancel === true ? l.lang.label.cancel : e.cancel), g = f(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(o.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(o.value) !== true : false), _ = f(() => ({ color: u.value, label: h.value, ripple: false, disable: g.value, ...Rt(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && s.value !== true || void 0, onClick: y })), w = f(() => ({ color: u.value, label: m.value, ripple: false, ...Rt(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && s.value !== true || void 0, onClick: b }));
  he(() => e.prompt && e.prompt.model, B), he(() => e.options && e.options.model, B);
  function k() {
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
  function B(C) {
    o.value = C;
  }
  function O(C) {
    g.value !== true && e.prompt.type !== "textarea" && yn(C, 13) === true && y();
  }
  function N(C, D) {
    return e.html === true ? d(Pl, { class: C, innerHTML: D }) : d(Pl, { class: C }, () => D);
  }
  function T() {
    return [d(wh, { color: u.value, dense: true, autofocus: true, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": B, onKeyup: O })];
  }
  function M() {
    return [d(M1, { color: u.value, options: e.options.items, dark: a.value, ...v.value, modelValue: o.value, "onUpdate:modelValue": B })];
  }
  function L() {
    const C = [];
    return e.cancel && C.push(d(Ze, w.value)), e.ok && C.push(d(Ze, _.value)), d(op, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => C);
  }
  function q() {
    const C = [];
    return e.title && C.push(N("q-dialog__title", e.title)), e.progress !== false && C.push(d(Pl, { class: "q-dialog__progress" }, () => d(c.value.component, c.value.props))), e.message && C.push(N("q-dialog__message", e.message)), e.prompt !== void 0 ? C.push(d(Pl, { class: "scroll q-dialog-plugin__form" }, T)) : e.options !== void 0 && C.push(d(Hl, { dark: a.value }), d(Pl, { class: "scroll q-dialog-plugin__form" }, M), d(Hl, { dark: a.value })), (e.ok || e.cancel) && C.push(L()), C;
  }
  function E() {
    return [d(Em, { class: [i.value, e.cardClass], style: e.cardStyle, dark: a.value }, q)];
  }
  return Object.assign(n, { show: k, hide: p }), () => d(si, { ref: r, onHide: x }, E);
} }), xw = { install({ $q: e, parentApp: t }) {
  e.dialog = this.create = hw(Sw, true, t);
} }, la, nu, tf = 0, El = null, zt = {}, Bl = {}, Yh = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: _n, customClass: "" }, Gh = { ...Yh };
function Cw(e) {
  if ((e == null ? void 0 : e.group) !== void 0 && Bl[e.group] !== void 0) return Object.assign(Bl[e.group], e);
  const t = Rt(e) === true && e.ignoreDefaults === true ? { ...Yh, ...e } : { ...Gh, ...e };
  return Bl[t.group] = t, t;
}
var Sn = wl({ isActive: false }, { show(e) {
  zt = Cw(e);
  const { group: t } = zt;
  return Sn.isActive = true, la !== void 0 ? (zt.uid = tf, nu.$forceUpdate()) : (zt.uid = ++tf, El !== null && clearTimeout(El), El = setTimeout(() => {
    El = null;
    const n = Rr("q-loading");
    la = ni({ name: "QLoading", setup() {
      ft(() => {
        Vu(true);
      });
      function l() {
        Sn.isActive !== true && la !== void 0 && (Vu(false), la.unmount(n), Cs(n), la = void 0, nu = void 0);
      }
      function a() {
        if (Sn.isActive !== true) return null;
        const r = [d(zt.spinner, { class: "q-loading__spinner", color: zt.spinnerColor, size: zt.spinnerSize })];
        return zt.message && r.push(d("div", { class: "q-loading__message" + (zt.messageColor ? ` text-${zt.messageColor}` : ""), [zt.html === true ? "innerHTML" : "textContent"]: zt.message })), d("div", { class: "q-loading fullscreen flex flex-center z-max " + zt.customClass.trim(), key: zt.uid }, [d("div", { class: "q-loading__backdrop" + (zt.backgroundColor ? ` bg-${zt.backgroundColor}` : "") }), d("div", { class: "q-loading__box column items-center " + zt.boxClass }, r)]);
      }
      return () => d(Ft, { name: "q-transition--fade", appear: true, onAfterLeave: l }, a);
    } }, Sn.__parentApp), nu = la.mount(n);
  }, zt.delay)), (n) => {
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
  Rt(e) === true && Object.assign(Gh, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Sn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} }), kw = Sn, eo = Q(null), nf = wl({ isActive: false }, { start: St, stop: St, increment: St, setDefaults: St, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  const n = Q(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function l() {
    nf.isActive = true;
  }
  function a() {
    nf.isActive = false;
  }
  const r = Rr("q-loading-bar");
  ni({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => d(py, { ...n.value, onStart: l, onStop: a, ref: eo }) }, t).mount(r), Object.assign(this, { start(o) {
    eo.value.start(o);
  }, stop() {
    eo.value.stop();
  }, increment() {
    eo.value.increment.apply(null, arguments);
  }, setDefaults(o) {
    Rt(o) === true && Object.assign(n.value, o);
  } });
} }), qw = 0, uo = {}, so = {}, xn = {}, Xh = {}, Tw = /^\s*$/, Zh = [], Mw = [void 0, null, true, false, ""], js = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"], Ew = ["top-left", "top-right", "bottom-left", "bottom-right"], Wa = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function Jh(e, t, n) {
  var _a2;
  if (!e) return Na("parameter required");
  let l;
  const a = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(a, uo), Rt(e) === false && (a.type && Object.assign(a, Wa[a.type]), e = { message: e }), Object.assign(a, Wa[e.type || a.type], e), typeof a.icon == "function" && (a.icon = a.icon(t)), a.spinner ? (a.spinner === true && (a.spinner = _n), a.spinner = jo(a.spinner)) : a.spinner = false, a.meta = { hasMedia: !!(a.spinner !== false || a.icon || a.avatar), hasText: lf(a.message) || lf(a.caption) }, a.position) {
    if (js.includes(a.position) === false) return Na("wrong position", e);
  } else a.position = "bottom";
  if (Mw.includes(a.timeout) === true) a.timeout = 5e3;
  else {
    const u = Number(a.timeout);
    if (isNaN(u) || u < 0) return Na("wrong timeout", e);
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
        if (Ew.includes(a.badgePosition) === false) return Na("wrong badgePosition", e);
      } else a.badgePosition = `top-${a.position.indexOf("left") !== -1 ? "right" : "left"}`;
      a.meta.uid = u.meta.uid, a.meta.badge = u.meta.badge + 1, a.meta.badgeClass = `q-notification__badge q-notification__badge--${a.badgePosition}` + (a.badgeColor !== void 0 ? ` bg-${a.badgeColor}` : "") + (a.badgeTextColor !== void 0 ? ` text-${a.badgeTextColor}` : "") + (a.badgeClass ? ` ${a.badgeClass}` : "");
      const c = xn[a.position].value.indexOf(u);
      xn[a.position].value[c] = so[a.meta.group] = a;
    }
  }
  const i = () => {
    Aw(a), l = void 0;
  };
  if (a.timeout > 0 && (a.meta.timer = setTimeout(() => {
    a.meta.timer = void 0, i();
  }, a.timeout + 1e3)), a.group !== void 0) return (u) => {
    u !== void 0 ? Na("trying to update a grouped one which is forbidden", e) : i();
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
function Aw(e) {
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
function lf(e) {
  return e != null && Tw.test(e) !== true;
}
function Na(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Rw() {
  return ve({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => d("div", { class: "q-notifications" }, js.map((e) => d(Ib, { key: e, class: Xh[e], tag: "div", name: `q-notification--${e}` }, () => xn[e].value.map((t) => {
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
var $w = { setDefaults(e) {
  Rt(e) === true && Object.assign(uo, e);
}, registerType(e, t) {
  Rt(t) === true && (Wa[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (n) => Jh(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    js.forEach((l) => {
      xn[l] = Q([]);
      const a = ["left", "center", "right"].includes(l) === true ? "center" : l.indexOf("top") !== -1 ? "top" : "bottom", r = l.indexOf("left") !== -1 ? "start" : l.indexOf("right") !== -1 ? "end" : "center", o = ["left", "right"].includes(l) ? `items-${l === "left" ? "start" : "end"} justify-center` : l === "center" ? "flex-center" : `items-${r}`;
      Xh[l] = `q-notifications__list q-notifications__list--${a} fixed column no-wrap ${o}`;
    });
    const n = Rr("q-notify");
    ni(Rw(), t).mount(n);
  }
} };
function Pw(e) {
  return Tu(e) === true ? "__q_date|" + e.getTime() : dy(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
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
var lg = ze.has.webStorage === false ? eg() : tg("session"), Fw = { install({ $q: e }) {
  e.sessionStorage = lg;
} };
Object.assign(Fw, lg);
var Ow = ["ok", "hide"];
Fh(Ow);
function Vw() {
  return qt(Wv);
}
var Iw = { version: "2.18.1", install: vy, lang: ti, iconSet: Kv };
function zw(e, t) {
  const n = cs("router-view");
  return Yn(), $l(n, { class: "view" });
}
const ag = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, Dw = {}, Nw = ag(Dw, [["render", zw]]), Hw = "M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z", jw = "M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z", Uw = /* @__PURE__ */ qa({ __name: "Quasar", setup(e) {
  const t = Vw();
  let n = Q(false), l = Q(false), a = Q(true);
  return (r, o) => {
    const i = cs("router-view"), u = q0("ripple");
    return Yn(), $l(Ie(w1), { view: "hHh LpR fFf" }, { default: Lt(() => [Je(Ie(u1), { class: "bg-primary text-white", elevated: "" }, { default: Lt(() => [Je(Ie(L_), null, { default: Lt(() => [Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[0] || (o[0] = (c) => pt(n) ? n.value = !Ie(n) : n = !Ie(n)) }), Je(Ie(B_), null, { default: Lt(() => [Je(Ie(im), null, { default: Lt(() => o[10] || (o[10] = [fa("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" }, null, -1)])), _: 1 }), o[11] || (o[11] = oa("\xA0Title"))]), _: 1 }), Ie(t).dark.isActive ? (Yn(), $l(Ie(Ze), { key: 0, dense: "", flat: "", round: "", icon: Ie(jw), onClick: o[1] || (o[1] = (c) => Ie(t).dark.set(false)) }, null, 8, ["icon"])) : hc("", true), Ie(t).dark.isActive ? hc("", true) : (Yn(), $l(Ie(Ze), { key: 1, dense: "", flat: "", round: "", icon: Ie(Hw), onClick: o[2] || (o[2] = (c) => Ie(t).dark.set(true)) }, null, 8, ["icon"])), Je(Ie(Ze), { dense: "", flat: "", round: "", icon: "menu", onClick: o[3] || (o[3] = (c) => pt(l) ? l.value = !Ie(l) : l = !Ie(l)) })]), _: 1 }), Je(Ie(Fu), { align: "left" }, { default: Lt(() => [Je(Ie(tu), { to: "/page1", label: "Page One" }), Je(Ie(tu), { to: "/page2", label: "Page Two" }), Je(Ie(tu), { to: "/page3", label: "Page Three" })]), _: 1 })]), _: 1 }), Je(Ie(wd), { modelValue: Ie(n), "onUpdate:modelValue": o[8] || (o[8] = (c) => pt(n) ? n.value = c : n = c), side: "left", bordered: "", mini: Ie(a), overlay: "" }, { default: Lt(() => [Je(Ie(P1), { class: "fit" }, { default: Lt(() => [Je(Ie(xh), { class: "menu-list padding" }, { default: Lt(() => [sn((Yn(), $l(Ie(Sa), { clickable: "", onMouseover: o[4] || (o[4] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[5] || (o[5] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(Ie(mn), { avatar: "" }, { default: Lt(() => [Je(Ie(et), { name: "inbox" })]), _: 1 }), Je(Ie(mn), null, { default: Lt(() => o[12] || (o[12] = [oa("inbox")])), _: 1 })]), _: 1 })), [[u]]), sn((Yn(), $l(Ie(Sa), { clickable: "", onMouseover: o[6] || (o[6] = (c) => pt(a) ? a.value = false : a = false), onMouseout: o[7] || (o[7] = (c) => pt(a) ? a.value = true : a = true) }, { default: Lt(() => [Je(Ie(mn), { avatar: "" }, { default: Lt(() => [Je(Ie(et), { name: "login" })]), _: 1 }), Je(Ie(mn), null, { default: Lt(() => o[13] || (o[13] = [oa("login")])), _: 1 })]), _: 1 })), [[u]])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "mini"]), Je(Ie(wd), { modelValue: Ie(l), "onUpdate:modelValue": o[9] || (o[9] = (c) => pt(l) ? l.value = c : l = c), side: "right", bordered: "", overlay: "" }, { default: Lt(() => o[14] || (o[14] = [oa("right")])), _: 1 }, 8, ["modelValue"]), Je(Ie(E1), { class: "fit" }, { default: Lt(() => [Je(i)]), _: 1 })]), _: 1 });
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
    n[l] = An(a) ? a.map(e) : e(a);
  }
  return n;
}
const sr = () => {
}, An = Array.isArray, og = /#/g, Kw = /&/g, Ww = /\//g, Yw = /=/g, Gw = /\?/g, ig = /\+/g, Xw = /%5B/g, Zw = /%5D/g, ug = /%5E/g, Jw = /%60/g, sg = /%7B/g, eS = /%7C/g, cg = /%7D/g, tS = /%20/g;
function Us(e) {
  return encodeURI("" + e).replace(eS, "|").replace(Xw, "[").replace(Zw, "]");
}
function nS(e) {
  return Us(e).replace(sg, "{").replace(cg, "}").replace(ug, "^");
}
function Hu(e) {
  return Us(e).replace(ig, "%2B").replace(tS, "+").replace(og, "%23").replace(Kw, "%26").replace(Jw, "`").replace(sg, "{").replace(cg, "}").replace(ug, "^");
}
function lS(e) {
  return Hu(e).replace(Yw, "%3D");
}
function aS(e) {
  return Us(e).replace(og, "%23").replace(Gw, "%3F");
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
function af(e, t) {
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
  return An(e) ? rf(e, t) : An(t) ? rf(t, e) : e === t;
}
function rf(e, t) {
  return An(t) ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
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
function of(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ju = /* @__PURE__ */ new Map();
function bS(e, t) {
  ju.set(e, t);
}
function yS(e) {
  const t = ju.get(e);
  return ju.delete(e), t;
}
let pS = () => location.protocol + "//" + location.host;
function fg(e, t) {
  const { pathname: n, search: l, hash: a } = t, r = e.indexOf("#");
  if (r > -1) {
    let i = a.includes(e.slice(r)) ? e.slice(r).length : 1, u = a.slice(i);
    return u[0] !== "/" && (u = "/" + u), af(u, "");
  }
  return af(n, e) + l + a;
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
    a.forEach((k) => {
      k(n.value, g, { delta: w, type: Cr.pop, direction: w ? w > 0 ? cr.forward : cr.back : cr.unknown });
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
  function v() {
    for (const h of r) h();
    r = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s);
  }
  return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, { passive: true }), { pauseListeners: u, listen: c, destroy: v };
}
function uf(e, t, n, l = false, a = false) {
  return { back: e, current: t, forward: n, replaced: l, position: window.history.length, scroll: a ? mi() : null };
}
function wS(e) {
  const { history: t, location: n } = window, l = { value: fg(e, n) }, a = { value: t.state };
  a.value || r(l.value, { back: null, current: l.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function r(u, c, s) {
    const v = e.indexOf("#"), h = v > -1 ? (n.host && document.querySelector("base") ? e : e.slice(v)) + u : pS() + e + u;
    try {
      t[s ? "replaceState" : "pushState"](c, "", h), a.value = c;
    } catch (m) {
      console.error(m), n[s ? "replace" : "assign"](h);
    }
  }
  function o(u, c) {
    const s = ut({}, t.state, uf(a.value.back, u, a.value.forward, true), c, { position: a.value.position });
    r(u, s, true), l.value = u;
  }
  function i(u, c) {
    const s = ut({}, a.value, t.state, { forward: u, scroll: mi() });
    r(s.current, s, true);
    const v = ut({}, uf(l.value, u, null), { position: s.position + 1 }, c);
    r(u, v, false), l.value = u;
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
var sf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(sf || (sf = {}));
function Ca(e, t) {
  return ut(new Error(), { type: e, [mg]: true }, t);
}
function Hn(e, t) {
  return e instanceof Error && mg in e && (t == null || !!(e.type & t));
}
const cf = "[^/]+?", kS = { sensitive: false, strict: false, start: true, end: true }, qS = /[.+*?^${}()[\]/\\]/g;
function TS(e, t) {
  const n = ut({}, kS, t), l = [];
  let a = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const s = c.length ? [] : [90];
    n.strict && !c.length && (a += "/");
    for (let v = 0; v < c.length; v++) {
      const h = c[v];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) v || (a += "/"), a += h.value.replace(qS, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: _, optional: w, regexp: k } = h;
        r.push({ name: g, repeatable: _, optional: w });
        const p = k || cf;
        if (p !== cf) {
          m += 10;
          try {
            new RegExp(`(${p})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${p}): ` + b.message);
          }
        }
        let y = _ ? `((?:${p})(?:/(?:${p}))*)` : `(${p})`;
        v || (y = w && c.length < 2 ? `(?:/${y})` : "/" + y), w && (y += "?"), a += y, m += 20, w && (m += -8), _ && (m += -20), p === ".*" && (m += -50);
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
        const { value: g, repeatable: _, optional: w } = m, k = g in c ? c[g] : "";
        if (An(k) && !_) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const p = An(k) ? k.join("/") : k;
        if (!p) if (w) h.length < 2 && (s.endsWith("/") ? s = s.slice(0, -1) : v = true);
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
    if (df(l)) return 1;
    if (df(a)) return -1;
  }
  return a.length - l.length;
}
function df(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ES = { type: 0, value: "" }, AS = /[a-zA-Z0-9_]/;
function RS(e) {
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
        u === "(" ? n = 2 : AS.test(u) ? h() : (v(), n = 0, u !== "*" && u !== "?" && u !== "+" && i--);
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
function $S(e, t, n) {
  const l = TS(RS(e.path), n), a = ut(l, { record: e, parent: t, children: [], alias: [] });
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function PS(e, t) {
  const n = [], l = /* @__PURE__ */ new Map();
  t = hf({ strict: false, end: true, sensitive: false }, t);
  function a(v) {
    return l.get(v);
  }
  function r(v, h, m) {
    const g = !m, _ = vf(v);
    _.aliasOf = m && m.record;
    const w = hf(t, v), k = [_];
    if ("alias" in v) {
      const b = typeof v.alias == "string" ? [v.alias] : v.alias;
      for (const x of b) k.push(vf(ut({}, _, { components: m ? m.record.components : _.components, path: x, aliasOf: m ? m.record : _ })));
    }
    let p, y;
    for (const b of k) {
      const { path: x } = b;
      if (h && x[0] !== "/") {
        const B = h.record.path, O = B[B.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (x && O + x);
      }
      if (p = $S(b, h, w), m ? m.alias.push(p) : (y = y || p, y !== p && y.alias.push(p), g && v.name && !mf(p) && o(v.name)), gg(p) && u(p), _.children) {
        const B = _.children;
        for (let O = 0; O < B.length; O++) r(B[O], p, m && m.children[O]);
      }
      m = m || p;
    }
    return y ? () => {
      o(y);
    } : sr;
  }
  function o(v) {
    if (vg(v)) {
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
    const h = FS(v, n);
    n.splice(h, 0, v), v.record.name && !mf(v) && l.set(v.record.name, v);
  }
  function c(v, h) {
    let m, g = {}, _, w;
    if ("name" in v && v.name) {
      if (m = l.get(v.name), !m) throw Ca(1, { location: v });
      w = m.record.name, g = ut(ff(h.params, m.keys.filter((y) => !y.optional).concat(m.parent ? m.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)), v.params && ff(v.params, m.keys.map((y) => y.name))), _ = m.stringify(g);
    } else if (v.path != null) _ = v.path, m = n.find((y) => y.re.test(_)), m && (g = m.parse(_), w = m.record.name);
    else {
      if (m = h.name ? l.get(h.name) : n.find((y) => y.re.test(h.path)), !m) throw Ca(1, { location: v, currentLocation: h });
      w = m.record.name, g = ut({}, h.params, v.params), _ = m.stringify(g);
    }
    const k = [];
    let p = m;
    for (; p; ) k.unshift(p.record), p = p.parent;
    return { name: w, path: _, params: g, matched: k, meta: BS(k) };
  }
  e.forEach((v) => r(v));
  function s() {
    n.length = 0, l.clear();
  }
  return { addRoute: r, resolve: c, removeRoute: o, clearRoutes: s, getRoutes: i, getRecordMatcher: a };
}
function ff(e, t) {
  const n = {};
  for (const l of t) l in e && (n[l] = e[l]);
  return n;
}
function vf(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: LS(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function LS(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const l in e.components) t[l] = typeof n == "object" ? n[l] : n;
  return t;
}
function mf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function BS(e) {
  return e.reduce((t, n) => ut(t, n.meta), {});
}
function hf(e, t) {
  const n = {};
  for (const l in e) n[l] = l in t ? t[l] : e[l];
  return n;
}
function FS(e, t) {
  let n = 0, l = t.length;
  for (; n !== l; ) {
    const r = n + l >> 1;
    hg(e, t[r]) < 0 ? l = r : n = r + 1;
  }
  const a = OS(e);
  return a && (l = t.lastIndexOf(a, l - 1)), l;
}
function OS(e) {
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
      An(c) || (c = t[i] = [c]), c.push(u);
    } else t[i] = u;
  }
  return t;
}
function gf(e) {
  let t = "";
  for (let n in e) {
    const l = e[n];
    if (n = lS(n), l == null) {
      l !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (An(l) ? l.map((r) => r && Hu(r)) : [l && Hu(l)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function IS(e) {
  const t = {};
  for (const n in e) {
    const l = e[n];
    l !== void 0 && (t[n] = An(l) ? l.map((a) => a == null ? null : "" + a) : l == null ? l : "" + l);
  }
  return t;
}
const zS = Symbol(""), bf = Symbol(""), Qs = Symbol(""), bg = Symbol(""), Uu = Symbol("");
function Ha() {
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
    let v = Promise.resolve(s);
    e.length < 3 && (v = v.then(c)), v.catch((h) => u(h));
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
        const v = Qw(s) ? s.default : s;
        o.mods[i] = s, o.components[i] = v;
        const m = (v.__vccOpts || v)[t];
        return m && dl(m, n, l, o, i, a)();
      }));
    }
  }
  return r;
}
function yf(e) {
  const t = qt(Qs), n = qt(bg), l = f(() => {
    const u = Ie(e.to);
    return t.resolve(u);
  }), a = f(() => {
    const { matched: u } = l.value, { length: c } = u, s = u[c - 1], v = n.matched;
    if (!s || !v.length) return -1;
    const h = v.findIndex(xa.bind(null, s));
    if (h > -1) return h;
    const m = pf(u[c - 2]);
    return c > 1 && pf(s) === m && v[v.length - 1].path !== m ? v.findIndex(xa.bind(null, u[c - 2])) : h;
  }), r = f(() => a.value > -1 && US(n.params, l.value.params)), o = f(() => a.value > -1 && a.value === n.matched.length - 1 && dg(n.params, l.value.params));
  function i(u = {}) {
    if (jS(u)) {
      const c = t[Ie(e.replace) ? "replace" : "push"](Ie(e.to)).catch(sr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: l, href: f(() => l.value.href), isActive: r, isExactActive: o, navigate: i };
}
function DS(e) {
  return e.length === 1 ? e[0] : e;
}
const NS = /* @__PURE__ */ qa({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: yf, setup(e, { slots: t }) {
  const n = Bn(yf(e)), { options: l } = qt(Qs), a = f(() => ({ [_f(e.activeClass, l.linkActiveClass, "router-link-active")]: n.isActive, [_f(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const r = t.default && DS(t.default(n));
    return e.custom ? r : d("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: a.value }, r);
  };
} }), HS = NS;
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
    } else if (!An(a) || a.length !== l.length || l.some((r, o) => r !== a[o])) return false;
  }
  return true;
}
function pf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const _f = (e, t, n) => e ?? t ?? n, QS = /* @__PURE__ */ qa({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const l = qt(Uu), a = f(() => e.route || l.value), r = qt(bf, 0), o = f(() => {
    let c = Ie(r);
    const { matched: s } = a.value;
    let v;
    for (; (v = s[c]) && !v.components; ) c++;
    return c;
  }), i = f(() => a.value.matched[o.value]);
  hn(bf, f(() => o.value + 1)), hn(zS, i), hn(Uu, a);
  const u = Q();
  return he(() => [u.value, i.value, e.name], ([c, s, v], [h, m, g]) => {
    s && (s.instances[v] = c, m && m !== s && c && c === h && (s.leaveGuards.size || (s.leaveGuards = m.leaveGuards), s.updateGuards.size || (s.updateGuards = m.updateGuards))), c && s && (!m || !xa(s, m) || !h) && (s.enterCallbacks[v] || []).forEach((_) => _(c));
  }, { flush: "post" }), () => {
    const c = a.value, s = e.name, v = i.value, h = v && v.components[s];
    if (!h) return wf(n.default, { Component: h, route: c });
    const m = v.props[s], g = m ? m === true ? c.params : typeof m == "function" ? m(c) : m : null, w = d(h, ut({}, g, t, { onVnodeUnmounted: (k) => {
      k.component.isUnmounted && (v.instances[s] = null);
    }, ref: u }));
    return wf(n.default, { Component: w, route: c }) || w;
  };
} });
function wf(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const KS = QS;
function WS(e) {
  const t = PS(e.routes, e), n = e.parseQuery || VS, l = e.stringifyQuery || gf, a = e.history, r = Ha(), o = Ha(), i = Ha(), u = a0(rl);
  let c = rl;
  ra && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const s = lu.bind(null, (P) => "" + P), v = lu.bind(null, rS), h = lu.bind(null, xr);
  function m(P, ee) {
    let V, re;
    return vg(P) ? (V = t.getRecordMatcher(P), re = ee) : re = P, t.addRoute(re, V);
  }
  function g(P) {
    const ee = t.getRecordMatcher(P);
    ee && t.removeRoute(ee);
  }
  function _() {
    return t.getRoutes().map((P) => P.record);
  }
  function w(P) {
    return !!t.getRecordMatcher(P);
  }
  function k(P, ee) {
    if (ee = ut({}, ee || u.value), typeof P == "string") {
      const z = au(n, P, ee.path), Z = t.resolve({ path: z.path }, ee), ne = a.createHref(z.fullPath);
      return ut(z, Z, { params: h(Z.params), hash: xr(z.hash), redirectedFrom: void 0, href: ne });
    }
    let V;
    if (P.path != null) V = ut({}, P, { path: au(n, P.path, ee.path).path });
    else {
      const z = ut({}, P.params);
      for (const Z in z) z[Z] == null && delete z[Z];
      V = ut({}, P, { params: v(z) }), ee.params = v(ee.params);
    }
    const re = t.resolve(V, ee), we = P.hash || "";
    re.params = s(h(re.params));
    const S = uS(l, ut({}, P, { hash: nS(we), path: re.path })), R = a.createHref(S);
    return ut({ fullPath: S, hash: we, query: l === gf ? IS(P.query) : P.query || {} }, re, { redirectedFrom: void 0, href: R });
  }
  function p(P) {
    return typeof P == "string" ? au(n, P, u.value.path) : ut({}, P);
  }
  function y(P, ee) {
    if (c !== P) return Ca(8, { from: ee, to: P });
  }
  function b(P) {
    return O(P);
  }
  function x(P) {
    return b(ut(p(P), { replace: true }));
  }
  function B(P) {
    const ee = P.matched[P.matched.length - 1];
    if (ee && ee.redirect) {
      const { redirect: V } = ee;
      let re = typeof V == "function" ? V(P) : V;
      return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = p(re) : { path: re }, re.params = {}), ut({ query: P.query, hash: P.hash, params: re.path != null ? {} : P.params }, re);
    }
  }
  function O(P, ee) {
    const V = c = k(P), re = u.value, we = P.state, S = P.force, R = P.replace === true, z = B(V);
    if (z) return O(ut(p(z), { state: typeof z == "object" ? ut({}, we, z.state) : we, force: S, replace: R }), ee || V);
    const Z = V;
    Z.redirectedFrom = ee;
    let ne;
    return !S && sS(l, re, V) && (ne = Ca(16, { to: Z, from: re }), K(re, re, true, false)), (ne ? Promise.resolve(ne) : M(Z, re)).catch((W) => Hn(W) ? Hn(W, 2) ? W : ye(W) : j(W, Z, re)).then((W) => {
      if (W) {
        if (Hn(W, 2)) return O(ut({ replace: R }, p(W.to), { state: typeof W.to == "object" ? ut({}, we, W.to.state) : we, force: S }), ee || Z);
      } else W = q(Z, re, true, R, we);
      return L(Z, re, W), W;
    });
  }
  function N(P, ee) {
    const V = y(P, ee);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function T(P) {
    const ee = X.values().next().value;
    return ee && typeof ee.runWithContext == "function" ? ee.runWithContext(P) : P();
  }
  function M(P, ee) {
    let V;
    const [re, we, S] = YS(P, ee);
    V = ru(re.reverse(), "beforeRouteLeave", P, ee);
    for (const z of re) z.leaveGuards.forEach((Z) => {
      V.push(dl(Z, P, ee));
    });
    const R = N.bind(null, P, ee);
    return V.push(R), F(V).then(() => {
      V = [];
      for (const z of r.list()) V.push(dl(z, P, ee));
      return V.push(R), F(V);
    }).then(() => {
      V = ru(we, "beforeRouteUpdate", P, ee);
      for (const z of we) z.updateGuards.forEach((Z) => {
        V.push(dl(Z, P, ee));
      });
      return V.push(R), F(V);
    }).then(() => {
      V = [];
      for (const z of S) if (z.beforeEnter) if (An(z.beforeEnter)) for (const Z of z.beforeEnter) V.push(dl(Z, P, ee));
      else V.push(dl(z.beforeEnter, P, ee));
      return V.push(R), F(V);
    }).then(() => (P.matched.forEach((z) => z.enterCallbacks = {}), V = ru(S, "beforeRouteEnter", P, ee, T), V.push(R), F(V))).then(() => {
      V = [];
      for (const z of o.list()) V.push(dl(z, P, ee));
      return V.push(R), F(V);
    }).catch((z) => Hn(z, 8) ? z : Promise.reject(z));
  }
  function L(P, ee, V) {
    i.list().forEach((re) => T(() => re(P, ee, V)));
  }
  function q(P, ee, V, re, we) {
    const S = y(P, ee);
    if (S) return S;
    const R = ee === rl, z = ra ? history.state : {};
    V && (re || R ? a.replace(P.fullPath, ut({ scroll: R && z && z.scroll }, we)) : a.push(P.fullPath, we)), u.value = P, K(P, ee, V, R), ye();
  }
  let E;
  function C() {
    E || (E = a.listen((P, ee, V) => {
      if (!ge.listening) return;
      const re = k(P), we = B(re);
      if (we) {
        O(ut(we, { replace: true, force: true }), re).catch(sr);
        return;
      }
      c = re;
      const S = u.value;
      ra && bS(of(S.fullPath, V.delta), mi()), M(re, S).catch((R) => Hn(R, 12) ? R : Hn(R, 2) ? (O(ut(p(R.to), { force: true }), re).then((z) => {
        Hn(z, 20) && !V.delta && V.type === Cr.pop && a.go(-1, false);
      }).catch(sr), Promise.reject()) : (V.delta && a.go(-V.delta, false), j(R, re, S))).then((R) => {
        R = R || q(re, S, false), R && (V.delta && !Hn(R, 8) ? a.go(-V.delta, false) : V.type === Cr.pop && Hn(R, 20) && a.go(-1, false)), L(re, S, R);
      }).catch(sr);
    }));
  }
  let D = Ha(), H = Ha(), $;
  function j(P, ee, V) {
    ye(P);
    const re = H.list();
    return re.length ? re.forEach((we) => we(P, ee, V)) : console.error(P), Promise.reject(P);
  }
  function te() {
    return $ && u.value !== rl ? Promise.resolve() : new Promise((P, ee) => {
      D.add([P, ee]);
    });
  }
  function ye(P) {
    return $ || ($ = !P, C(), D.list().forEach(([ee, V]) => P ? V(P) : ee()), D.reset()), P;
  }
  function K(P, ee, V, re) {
    const { scrollBehavior: we } = e;
    if (!ra || !we) return Promise.resolve();
    const S = !V && yS(of(P.fullPath, 0)) || (re || !V) && history.state && history.state.scroll || null;
    return Ge().then(() => we(P, ee, S)).then((R) => R && gS(R)).catch((R) => j(R, P, ee));
  }
  const A = (P) => a.go(P);
  let J;
  const X = /* @__PURE__ */ new Set(), ge = { currentRoute: u, listening: true, addRoute: m, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: w, getRoutes: _, resolve: k, options: e, push: b, replace: x, go: A, back: () => A(-1), forward: () => A(1), beforeEach: r.add, beforeResolve: o.add, afterEach: i.add, onError: H.add, isReady: te, install(P) {
    const ee = this;
    P.component("RouterLink", HS), P.component("RouterView", KS), P.config.globalProperties.$router = ee, Object.defineProperty(P.config.globalProperties, "$route", { enumerable: true, get: () => Ie(u) }), ra && !J && u.value === rl && (J = true, b(a.location).catch((we) => {
    }));
    const V = {};
    for (const we in rl) Object.defineProperty(V, we, { get: () => u.value[we], enumerable: true });
    P.provide(Qs, ee), P.provide(bg, rs(V)), P.provide(Uu, u);
    const re = P.unmount;
    X.add(P), P.unmount = function() {
      X.delete(P), X.size < 1 && (c = rl, E && E(), E = null, u.value = rl, J = false, $ = false), re();
    };
  } };
  function F(P) {
    return P.reduce((ee, V) => ee.then(() => T(V)), Promise.resolve());
  }
  return ge;
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
let Qu = 0;
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
    return co().subarray(u, u + i.length).set(i), Qu = i.length, u;
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
  return Qu = o, a;
}
function tx(e) {
  const t = Jt.__wbindgen_export_2.get(e);
  return Jt.__externref_table_dealloc(e), t;
}
function nx(e) {
  const t = ex(e, Jt.__wbindgen_malloc, Jt.__wbindgen_realloc), n = Qu, l = Jt.mtg(t, n);
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
    const a = cs("router-view");
    return Yn(), qv(rn, null, [Je(Ie(Ze), { class: "q-ma-lg", color: "primary", onClick: t }, { default: Lt(() => l[0] || (l[0] = [oa("test")])), _: 1 }), Je(a)], 64);
  };
} }), ix = ag(ox, [["__scopeId", "data-v-17fee452"]]);
var ux = 1e-6, Sf = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var e = 0, t = arguments.length; t--; ) e += arguments[t] * arguments[t];
  return Math.sqrt(e);
});
function xf() {
  var e = new Sf(16);
  return Sf != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function iu(e, t, n) {
  var l = n[0], a = n[1], r = n[2], o, i, u, c, s, v, h, m, g, _, w, k;
  return t === e ? (e[12] = t[0] * l + t[4] * a + t[8] * r + t[12], e[13] = t[1] * l + t[5] * a + t[9] * r + t[13], e[14] = t[2] * l + t[6] * a + t[10] * r + t[14], e[15] = t[3] * l + t[7] * a + t[11] * r + t[15]) : (o = t[0], i = t[1], u = t[2], c = t[3], s = t[4], v = t[5], h = t[6], m = t[7], g = t[8], _ = t[9], w = t[10], k = t[11], e[0] = o, e[1] = i, e[2] = u, e[3] = c, e[4] = s, e[5] = v, e[6] = h, e[7] = m, e[8] = g, e[9] = _, e[10] = w, e[11] = k, e[12] = o * l + s * a + g * r + t[12], e[13] = i * l + v * a + _ * r + t[13], e[14] = u * l + h * a + w * r + t[14], e[15] = c * l + m * a + k * r + t[15]), e;
}
function uu(e, t, n, l) {
  var a = l[0], r = l[1], o = l[2], i = Math.hypot(a, r, o), u, c, s, v, h, m, g, _, w, k, p, y, b, x, B, O, N, T, M, L, q, E, C, D;
  return i < ux ? null : (i = 1 / i, a *= i, r *= i, o *= i, u = Math.sin(n), c = Math.cos(n), s = 1 - c, v = t[0], h = t[1], m = t[2], g = t[3], _ = t[4], w = t[5], k = t[6], p = t[7], y = t[8], b = t[9], x = t[10], B = t[11], O = a * a * s + c, N = r * a * s + o * u, T = o * a * s - r * u, M = a * r * s - o * u, L = r * r * s + c, q = o * r * s + a * u, E = a * o * s + r * u, C = r * o * s - a * u, D = o * o * s + c, e[0] = v * O + _ * N + y * T, e[1] = h * O + w * N + b * T, e[2] = m * O + k * N + x * T, e[3] = g * O + p * N + B * T, e[4] = v * M + _ * L + y * q, e[5] = h * M + w * L + b * q, e[6] = m * M + k * L + x * q, e[7] = g * M + p * L + B * q, e[8] = v * E + _ * C + y * D, e[9] = h * E + w * C + b * D, e[10] = m * E + k * C + x * D, e[11] = g * E + p * C + B * D, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function sx(e, t, n, l, a) {
  var r = 1 / Math.tan(t / 2), o;
  return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, a != null && a !== 1 / 0 ? (o = 1 / (l - a), e[10] = (a + l) * o, e[14] = 2 * a * l * o) : (e[10] = -1, e[14] = -2 * l), e;
}
var cx = sx;
const dx = ["width", "height"], fx = /* @__PURE__ */ qa({ __name: "WebGL", setup(e) {
  const t = Q();
  let n = null;
  const l = Q([0, 0]), a = Q(""), r = Q(-1), o = Q([0, 0, 0, 0]);
  let i = Q(640), u = Q(480);
  const c = () => {
    if (n === null) throw new Error("no WebGL context");
    const T = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, T);
    let M = [0, 0, 0];
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      M = M.concat([1 * Math.cos(j), 1 * Math.sin(j), 0]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      M = M.concat([1 * Math.cos(j), 1 * Math.sin(j), 0.2]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      M = M.concat([1.2 * Math.cos(j), 1.2 * Math.sin(j), 0.2]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      M = M.concat([1.2 * Math.cos(j), 1.2 * Math.sin(j), -1]);
    }
    n.bufferData(n.ARRAY_BUFFER, new Float32Array(M), n.STATIC_DRAW);
    let L = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    for (let $ = 0; $ < 6; ++$) L = L.concat([1, 1, 1, 1]);
    for (let $ = 0; $ < 6; ++$) L = L.concat([1, 1, 1, 1]);
    for (let $ = 0; $ < 6; ++$) L = L.concat([0.75, 0.75, 0.75, 1]);
    for (let $ = 0; $ < 6; ++$) L = L.concat([0.5, 0.5, 0.5, 1]);
    const q = n.createBuffer();
    n.bindBuffer(n.ARRAY_BUFFER, q), n.bufferData(n.ARRAY_BUFFER, new Float32Array(L), n.STATIC_DRAW);
    const E = n.createBuffer();
    let C = [0.5, 0.5];
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      C = C.concat([0.5 + 0.5 * Math.cos(j), 0.5 + 0.5 * Math.sin(j)]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      C = C.concat([0.5 + 0.4 * Math.cos(j), 0.5 + 0.4 * Math.sin(j)]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      C = C.concat([0.5 + 0.5 * Math.cos(j), 0.5 + 0.5 * Math.sin(j)]);
    }
    for (let $ = 0; $ < 6; ++$) {
      const j = 3.141 * $ * 60 / 180;
      C = C.concat([0.5 + 0.75 * Math.cos(j + 1), 0.5 + 0.75 * Math.sin(j + 1)]);
    }
    n.bindBuffer(n.ARRAY_BUFFER, E), n.bufferData(n.ARRAY_BUFFER, new Float32Array(C), n.STATIC_DRAW);
    const D = n.createBuffer();
    let H = [];
    for (let $ = 1; $ < 7; ++$) H = H.concat([0, $, 1 + $ % 6]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([$, 1 + $ % 6, $ + 6]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([6 + $, 7 + $ % 6, $ % 6 + 1]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([6 + $, 7 + $ % 6, 6 + $ + 6]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([12 + $, 13 + $ % 6, 6 + $ % 6 + 1]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([12 + $, 13 + $ % 6, 12 + $ + 6]);
    for (let $ = 1; $ < 7; ++$) H = H.concat([18 + $, 19 + $ % 6, 12 + $ % 6 + 1]);
    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, D), n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(H), n.STATIC_DRAW), [T, q, E, D];
  }, s = (T, M) => {
    const L = xf();
    return iu(L, L, [0, 0, -6]), uu(L, L, Math.sin(M) * 3.141 / 6 / 3, [0, 1, 0]), uu(L, L, Math.sin(M * 1.15) * 3.141 / 4 / 3, [1, 0, 0]), uu(L, L, Math.sin(M * 1.33) * 3.141 / 5 / 3, [1, 0, 0]), iu(L, L, [T[0], T[1], T[2]]), L;
  }, v = (T, M) => {
    n !== null && (n.uniform1f(M.locs.mode, r.value == T ? 1 : 2), n.bindTexture(n.TEXTURE_2D, b), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniform1f(M.locs.mode, 0), n.bindTexture(n.TEXTURE_2D, x), n.drawElements(n.TRIANGLES, 3 * 6 * 6, n.UNSIGNED_SHORT, 2 * 3 * 6));
  }, h = (T, M) => {
    if (n === null || t.value === void 0) throw new Error("no WebGL context");
    n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindRenderbuffer(n.RENDERBUFFER, null), n.clearColor(0, 0.5, 0.5, 1), n.clearDepth(1), n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT);
    const L = 45 * Math.PI / 180, q = n.canvas.width / n.canvas.height, E = 0.1, C = 100, D = xf();
    cx(D, L, q, E, C);
    const H = M;
    iu(D, D, [Math.sin(H * 0.3) * 1, Math.cos(H * 0.4) * 1, Math.cos(0.6 * H) * 1]), m(T, false), g(T), _(T), n.useProgram(T.prog_draw), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, T.bufs.index), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(T.locs.sampler, 0), n.uniform1f(T.locs.time, M), n.uniformMatrix4fv(T.locs.proj, false, D), n.uniformMatrix4fv(T.locs.view, false, s([0, 0, o.value[0]], M)), v(1, T), n.uniformMatrix4fv(T.locs.view, false, s([0, -2.2, o.value[1]], M)), v(2, T), n.uniformMatrix4fv(T.locs.view, false, s([-2, -1, o.value[2]], M)), v(3, T), n.uniformMatrix4fv(T.locs.view, false, s([2, -1, o.value[3]], M)), v(4, T), n.useProgram(T.prog_pick), n.enable(n.DEPTH_TEST), n.bindTexture(n.TEXTURE_2D, T.pick.tex), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.bindRenderbuffer(n.RENDERBUFFER, T.pick.rb), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, n.canvas.width, n.canvas.height), n.bindFramebuffer(n.FRAMEBUFFER, T.pick.fb), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, T.pick.rb), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.canvas.width, n.canvas.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, T.pick.tex, 0), n.uniformMatrix4fv(T.locs.proj_pick, false, D), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), m(T, true), n.uniformMatrix4fv(T.locs.view_pick, false, s([0, 0, o.value[0]], M)), n.uniform4f(T.locs.id_pick, 1 / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniformMatrix4fv(T.locs.view_pick, false, s([0, -2.2, o.value[1]], M)), n.uniform4f(T.locs.id_pick, 2 / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniformMatrix4fv(T.locs.view_pick, false, s([-2, -1, o.value[2]], M)), n.uniform4f(T.locs.id_pick, 3 / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0), n.uniformMatrix4fv(T.locs.view_pick, false, s([2, -1, o.value[3]], M)), n.uniform4f(T.locs.id_pick, 4 / 255, 0, 0, 0), n.drawElements(n.TRIANGLES, 3 * 6, n.UNSIGNED_SHORT, 0);
    let $ = new Uint8Array(4);
    const j = l.value[0], te = l.value[1], ye = j, K = u.value - te;
    n.readPixels(ye, K, 1, 1, n.RGBA, n.UNSIGNED_BYTE, $), $.length && (a.value = $.toString(), $[0] > 0 ? r.value = $[0] : r.value = -1);
  }, m = (T, M) => {
    if (n === null) throw new Error("setPos - no ctx");
    const L = 3, q = n.FLOAT, E = false, C = 0, D = 0;
    n.bindBuffer(n.ARRAY_BUFFER, T.bufs.pos), n.vertexAttribPointer(M ? T.attr.vertex_pick : T.attr.vertex, L, q, E, C, D), n.enableVertexAttribArray(M ? T.attr.vertex_pick : T.attr.vertex);
  }, g = (T) => {
    if (n === null) throw new Error("setColor - no ctx");
    n.bindBuffer(n.ARRAY_BUFFER, T.bufs.color), n.vertexAttribPointer(T.attr.color, 4, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(T.attr.color);
  }, _ = (T) => {
    if (n === null) throw new Error("setTex crash");
    n.bindBuffer(n.ARRAY_BUFFER, T.bufs.tex), n.vertexAttribPointer(T.attr.texture, 2, n.FLOAT, false, 0, 0), n.enableVertexAttribArray(T.attr.texture);
  }, w = () => {
    if (console.log(t.value), t.value === void 0 || (n = t.value.getContext("webgl2", {}), n === null)) return;
    const L = p(`
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

            if(fKind == 0.0 || fKind == 2.0) {
                t[0] += (cos(f1 * r * 3.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
                t[1] += (sin(f1 * r * 2.0) / 10.0 + 0.5) * 0.5 * exp(-r * 0.3) * exp(-f1 * 0.15);
            }
            
            if(fKind == 2.0) {
                gl_FragColor = texture2D(uSampler, t) * vColor;
                gl_FragColor[0] *= 0.66;
                gl_FragColor[1] *= 0.66;
                gl_FragColor[2] *= 0.66;
            }
            else if(fKind == 1.0) {
                gl_FragColor = texture2D(uSampler, t);
                gl_FragColor[0] *= 0.5;
                gl_FragColor[1] *= 0.5;
                gl_FragColor[2] *= 1.0;
                gl_FragColor += vec4(0.5, 0.5, 0.0, 0.0);
            }
            else {
                gl_FragColor = texture2D(uSampler, t) * vColor;
            }
        }
    `), q = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            vec4 b = aVertexPosition;
            gl_Position = uProjectionMatrix * uModelViewMatrix * b;
            // gl_Position = b;
            // gl_Position = uProjectionMatrix* b;
        }
    `, E = `
        precision mediump float;
        
        uniform vec4 uId;
        
        void main() {
            gl_FragColor = uId;
        }
    `, C = c(), D = n.getUniformLocation(L, "uProjectionMatrix"), H = n.getUniformLocation(L, "uModelViewMatrix"), $ = n.getUniformLocation(L, "uSampler"), j = n.getUniformLocation(L, "fTime"), te = n.getUniformLocation(L, "fMode");
    if (D === null) throw new Error("no proj loc");
    if (H === null) throw new Error("no view loc");
    if ($ === null) throw new Error("no sampler loc");
    if (j === null) throw new Error("no time loc");
    if (te === null) throw new Error("no mode loc");
    const ye = p(q, E), K = n.getUniformLocation(ye, "uProjectionMatrix"), A = n.getUniformLocation(ye, "uModelViewMatrix"), J = n.getUniformLocation(ye, "uId");
    if (K === null) throw new Error("no proj pick loc");
    if (A === null) throw new Error("no view pick loc");
    if (J === null) throw new Error("no id pick loc");
    const X = { prog_draw: L, prog_pick: ye, attr: { vertex: n.getAttribLocation(L, "aVertexPosition"), vertex_pick: n.getAttribLocation(ye, "aVertexPosition"), color: n.getAttribLocation(L, "aVertexColor"), texture: n.getAttribLocation(L, "aTextureCoord") }, locs: { proj: D, view: H, sampler: $, time: j, mode: te, proj_pick: K, view_pick: A, id_pick: J }, bufs: { pos: C[0], color: C[1], tex: C[2], index: C[3] }, pick: { fb: n.createFramebuffer(), rb: n.createRenderbuffer(), tex: n.createTexture() } };
    B(), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, true), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR);
    let ge = 0, F = false;
    setInterval(() => {
      F ? (ge -= 0.033, ge < 0 && (ge = 0, F = false)) : (ge += 0.033, ge > 7.5 && (ge = 7.5, F = true)), k(), h(X, ge);
    }, 25);
  }, k = (T) => {
    for (let M = 0; M < 4; ++M) r.value - 1 == M ? o.value[M] < 0.5 && (o.value[M] += 0.05) : o.value[M] > 0 && (o.value[M] -= 0.05);
  }, p = (T, M) => {
    if (n === null) throw new Error("no webgl");
    const L = y(n.VERTEX_SHADER, T), q = y(n.FRAGMENT_SHADER, M), E = n.createProgram();
    return n.attachShader(E, L), n.attachShader(E, q), n.linkProgram(E), E;
  }, y = (T, M) => {
    if (n === null) throw new Error("no webgl");
    const L = n.createShader(T);
    if (L === null) throw new Error("bad shader");
    return n.shaderSource(L, M), n.compileShader(L), L;
  };
  let b = null, x = null;
  const B = () => {
    if (n === null) throw new Error("loadTexture no context");
    b = n.createTexture(), n.bindTexture(n.TEXTURE_2D, b), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0])), x = n.createTexture(), n.bindTexture(n.TEXTURE_2D, x), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 0]));
  }, O = (T, M) => {
    if (b === null || n === null) return;
    const L = M.target;
    T === "base" && n.bindTexture(n.TEXTURE_2D, b), T === "body" && n.bindTexture(n.TEXTURE_2D, x), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, L), n.generateMipmap(n.TEXTURE_2D);
  }, N = (T) => {
    if (n === null || t.value === void 0) return;
    const M = T, L = M.offsetX, q = M.offsetY;
    L - t.value.clientWidth / 2, q - t.value.clientHeight / 2, (L - n.canvas.width / 2) / 2, (q - n.canvas.height / 2) / 2, l.value = [L, q];
  };
  return ft(() => {
    i.value = document.body.getBoundingClientRect().width, u.value = document.body.getBoundingClientRect().height - 100, Ge(w);
  }), (T, M) => (Yn(), qv(rn, null, [fa("canvas", { id: "canvas", ref_key: "canvas", ref: t, onMousemove: M[0] || (M[0] = (L) => N(L)), width: Ie(i), height: Ie(u) }, null, 40, dx), fa("img", { src: "img/tex.jpg", onLoad: M[1] || (M[1] = (L) => O("base", L)), style: { display: "none" } }, null, 32), fa("img", { src: "img/wood.jpg", onLoad: M[2] || (M[2] = (L) => O("body", L)), style: { display: "none" } }, null, 32)], 64));
} }), vx = { BASE_URL: "./", DEV: false, MODE: "production", PROD: true, SSR: false, VITE_APP_NAME: "vite mtg", VITE_client_id: "quasar-2fa", VITE_client_secret: "spoon" }, Ks = Iv(Nw);
console.log(vx);
const mx = [{ name: "layout", path: "/", component: Uw, children: [{ name: "root", path: "", component: ix }, { name: "webgl", path: "webgl", component: fx }] }], hx = WS({ history: xS(), routes: mx });
Ks.use(hx);
Ks.use(Iw, { plugins: { Dialog: xw, Dark: Hv, Loading: kw, Cookies: ww, Notify: $w }, config: { dark: "auto" } });
window.cb = (e) => {
  alert(e);
};
window.log = (e) => {
  console.log("%cwasm>%c %s", "background-color: blue; color: cyan; border: 2px solid blue;", "", e);
};
pg({}).then(() => {
  Ks.mount("#q-app");
});
