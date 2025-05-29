import {
  r as le,
  j as Zt,
  x as D,
  i as ye,
  y as X,
  z as S,
  m as Qr,
  A as Ht,
  B as Yt,
  C as Gt,
  D as en,
  E as tn,
  G as rn,
} from "./C4KZy2MF.js"
function Qs() {
  const t = "https://hubspot.cs1.fybtech.xyz/proxy",
    e = "/crm/v3/objects/contacts",
    r = "pat-eu1-0d665a59-893b-44d4-a29e-e2acaade0615"
  function n(a) {
    return $fetch(`${t}${e}`, {
      method: "POST",
      body: a,
      headers: {
        Authorization: `Bearer ${r}`,
        "Content-Type": "application/json",
      },
    })
      .then((i) => (console.log("Contact created successfully:", i), i))
      .catch((i) => {
        if (i.response) {
          const o = {
            status: i.response.status,
            message: i.response._data.message || i.response.statusText,
          }
          return Promise.reject(o)
        }
        return Promise.reject(500)
      })
  }
  function s(a, i) {
    const o = `${t}${e}/${a}`
    return $fetch(o, {
      method: "PATCH",
      body: i,
      headers: {
        Authorization: `Bearer ${r}`,
        "Content-Type": "application/json",
      },
    })
      .then((d) => (console.log("Contact updated successfully:", d), d))
      .catch((d) => Promise.reject(500))
  }
  return { createContact: n, updateContact: s }
}
/**
 * vee-validate v4.15.0
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */ function H(t) {
  return typeof t == "function"
}
function cr(t) {
  return t == null
}
const Se = (t) => t !== null && !!t && typeof t == "object" && !Array.isArray(t)
function $t(t) {
  return Number(t) >= 0
}
function nn(t) {
  return typeof t == "object" && t !== null
}
function sn(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t)
}
function Jt(t) {
  if (!nn(t) || sn(t) !== "[object Object]") return !1
  if (Object.getPrototypeOf(t) === null) return !0
  let e = t
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e)
  return Object.getPrototypeOf(t) === e
}
function ze(t, e) {
  return (
    Object.keys(e).forEach((r) => {
      if (Jt(e[r]) && Jt(t[r])) {
        t[r] || (t[r] = {}), ze(t[r], e[r])
        return
      }
      t[r] = e[r]
    }),
    t
  )
}
function st(t) {
  const e = t.split(".")
  if (!e.length) return ""
  let r = String(e[0])
  for (let n = 1; n < e.length; n++) {
    if ($t(e[n])) {
      r += `[${e[n]}]`
      continue
    }
    r += `.${e[n]}`
  }
  return r
}
const an = {}
function on(t) {
  return an[t]
}
function Kt(t, e, r) {
  typeof r.value == "object" && (r.value = E(r.value)),
    !r.enumerable ||
    r.get ||
    r.set ||
    !r.configurable ||
    !r.writable ||
    e === "__proto__"
      ? Object.defineProperty(t, e, r)
      : (t[e] = r.value)
}
function E(t) {
  if (typeof t != "object") return t
  var e = 0,
    r,
    n,
    s,
    a = Object.prototype.toString.call(t)
  if (
    (a === "[object Object]"
      ? (s = Object.create(t.__proto__ || null))
      : a === "[object Array]"
        ? (s = Array(t.length))
        : a === "[object Set]"
          ? ((s = new Set()),
            t.forEach(function (i) {
              s.add(E(i))
            }))
          : a === "[object Map]"
            ? ((s = new Map()),
              t.forEach(function (i, o) {
                s.set(E(o), E(i))
              }))
            : a === "[object Date]"
              ? (s = new Date(+t))
              : a === "[object RegExp]"
                ? (s = new RegExp(t.source, t.flags))
                : a === "[object DataView]"
                  ? (s = new t.constructor(E(t.buffer)))
                  : a === "[object ArrayBuffer]"
                    ? (s = t.slice(0))
                    : a.slice(-6) === "Array]" && (s = new t.constructor(t)),
    s)
  ) {
    for (n = Object.getOwnPropertySymbols(t); e < n.length; e++)
      Kt(s, n[e], Object.getOwnPropertyDescriptor(t, n[e]))
    for (e = 0, n = Object.getOwnPropertyNames(t); e < n.length; e++)
      (Object.hasOwnProperty.call(s, (r = n[e])) && s[r] === t[r]) ||
        Kt(s, r, Object.getOwnPropertyDescriptor(t, r))
  }
  return s || t
}
const un = Symbol("vee-validate-form"),
  ln = Symbol("vee-validate-form-context"),
  cn = typeof window < "u"
function dn(t) {
  return H(t) && !!t.__locatorRef
}
function ce(t) {
  return !!t && H(t.parse) && t.__type === "VVTypedSchema"
}
function dr(t) {
  return !!t && H(t.validate)
}
function fn(t) {
  return t === "checkbox" || t === "radio"
}
function hn(t) {
  return Se(t) || Array.isArray(t)
}
function pn(t) {
  return Array.isArray(t)
    ? t.length === 0
    : Se(t) && Object.keys(t).length === 0
}
function Qe(t) {
  return /^\[.+\]$/i.test(t)
}
function mn(t) {
  return fr(t) && t.multiple
}
function fr(t) {
  return t.tagName === "SELECT"
}
function vn(t) {
  return hr(t) && t.target && "submit" in t.target
}
function hr(t) {
  return t
    ? !!(
        (typeof Event < "u" && H(Event) && t instanceof Event) ||
        (t && t.srcElement)
      )
    : !1
}
function De(t, e) {
  if (t === e) return !0
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1
    var r, n, s
    if (Array.isArray(t)) {
      if (((r = t.length), r != e.length)) return !1
      for (n = r; n-- !== 0; ) if (!De(t[n], e[n])) return !1
      return !0
    }
    if (t instanceof Map && e instanceof Map) {
      if (t.size !== e.size) return !1
      for (n of t.entries()) if (!e.has(n[0])) return !1
      for (n of t.entries()) if (!De(n[1], e.get(n[0]))) return !1
      return !0
    }
    if (Qt(t) && Qt(e))
      return !(
        t.size !== e.size ||
        t.name !== e.name ||
        t.lastModified !== e.lastModified ||
        t.type !== e.type
      )
    if (t instanceof Set && e instanceof Set) {
      if (t.size !== e.size) return !1
      for (n of t.entries()) if (!e.has(n[0])) return !1
      return !0
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
      if (((r = t.length), r != e.length)) return !1
      for (n = r; n-- !== 0; ) if (t[n] !== e[n]) return !1
      return !0
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf()
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString()
    if (
      ((s = Object.keys(t)),
      (r = s.length - Xt(t, s)),
      r !== Object.keys(e).length - Xt(e, Object.keys(e)))
    )
      return !1
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[n])) return !1
    for (n = r; n-- !== 0; ) {
      var a = s[n]
      if (!De(t[a], e[a])) return !1
    }
    return !0
  }
  return t !== t && e !== e
}
function Xt(t, e) {
  let r = 0
  for (let s = e.length; s-- !== 0; ) {
    var n = e[s]
    t[n] === void 0 && r++
  }
  return r
}
function Qt(t) {
  return cn ? t instanceof File : !1
}
function pt(t) {
  return Qe(t) ? t.replace(/\[|\]/gi, "") : t
}
function ie(t, e, r) {
  return t
    ? Qe(e)
      ? t[pt(e)]
      : (e || "")
          .split(/\.|\[(\d+)\]/)
          .filter(Boolean)
          .reduce((s, a) => (hn(s) && a in s ? s[a] : r), t)
    : r
}
function ne(t, e, r) {
  if (Qe(e)) {
    t[pt(e)] = r
    return
  }
  const n = e.split(/\.|\[(\d+)\]/).filter(Boolean)
  let s = t
  for (let a = 0; a < n.length; a++) {
    if (a === n.length - 1) {
      s[n[a]] = r
      return
    }
    ;(!(n[a] in s) || cr(s[n[a]])) && (s[n[a]] = $t(n[a + 1]) ? [] : {}),
      (s = s[n[a]])
  }
}
function Et(t, e) {
  if (Array.isArray(t) && $t(e)) {
    t.splice(Number(e), 1)
    return
  }
  Se(t) && delete t[e]
}
function er(t, e) {
  if (Qe(e)) {
    delete t[pt(e)]
    return
  }
  const r = e.split(/\.|\[(\d+)\]/).filter(Boolean)
  let n = t
  for (let a = 0; a < r.length; a++) {
    if (a === r.length - 1) {
      Et(n, r[a])
      break
    }
    if (!(r[a] in n) || cr(n[r[a]])) break
    n = n[r[a]]
  }
  const s = r.map((a, i) => ie(t, r.slice(0, i).join(".")))
  for (let a = s.length - 1; a >= 0; a--)
    if (pn(s[a])) {
      if (a === 0) {
        Et(t, r[0])
        continue
      }
      Et(s[a - 1], r[a - 1])
    }
}
function W(t) {
  return Object.keys(t)
}
function tr(t, e = 0) {
  let r = null,
    n = []
  return function (...s) {
    return (
      r && clearTimeout(r),
      (r = setTimeout(() => {
        const a = t(...s)
        n.forEach((i) => i(a)), (n = [])
      }, e)),
      new Promise((a) => n.push(a))
    )
  }
}
function yn(t, e) {
  let r
  return async function (...s) {
    const a = t(...s)
    r = a
    const i = await a
    return a !== r ? i : ((r = void 0), e(i, s))
  }
}
function rr(t) {
  return Array.isArray(t) ? t : t ? [t] : []
}
function at(t, e) {
  const r = {}
  for (const n in t) e.includes(n) || (r[n] = t[n])
  return r
}
function gn(t) {
  let e = null,
    r = []
  return function (...n) {
    const s = X(() => {
      if (e !== s) return
      const a = t(...n)
      r.forEach((i) => i(a)), (r = []), (e = null)
    })
    return (e = s), new Promise((a) => r.push(a))
  }
}
function Ct(t) {
  if (pr(t)) return t._value
}
function pr(t) {
  return "_value" in t
}
function _n(t) {
  return t.type === "number" || t.type === "range"
    ? Number.isNaN(t.valueAsNumber)
      ? t.value
      : t.valueAsNumber
    : t.value
}
function nr(t) {
  if (!hr(t)) return t
  const e = t.target
  if (fn(e.type) && pr(e)) return Ct(e)
  if (e.type === "file" && e.files) {
    const r = Array.from(e.files)
    return e.multiple ? r : r[0]
  }
  if (mn(e))
    return Array.from(e.options)
      .filter((r) => r.selected && !r.disabled)
      .map(Ct)
  if (fr(e)) {
    const r = Array.from(e.options).find((n) => n.selected)
    return r ? Ct(r) : e.value
  }
  return _n(e)
}
function bn(t) {
  const e = {}
  return (
    Object.defineProperty(e, "_$$isNormalized", {
      value: !0,
      writable: !1,
      enumerable: !1,
      configurable: !1,
    }),
    t
      ? Se(t) && t._$$isNormalized
        ? t
        : Se(t)
          ? Object.keys(t).reduce((r, n) => {
              const s = xn(t[n])
              return t[n] !== !1 && (r[n] = sr(s)), r
            }, e)
          : typeof t != "string"
            ? e
            : t.split("|").reduce((r, n) => {
                const s = kn(n)
                return s.name && (r[s.name] = sr(s.params)), r
              }, e)
      : e
  )
}
function xn(t) {
  return t === !0 ? [] : Array.isArray(t) || Se(t) ? t : [t]
}
function sr(t) {
  const e = (r) => (typeof r == "string" && r[0] === "@" ? wn(r.slice(1)) : r)
  return Array.isArray(t)
    ? t.map(e)
    : t instanceof RegExp
      ? [t]
      : Object.keys(t).reduce((r, n) => ((r[n] = e(t[n])), r), {})
}
const kn = (t) => {
  let e = []
  const r = t.split(":")[0]
  return (
    t.includes(":") && (e = t.split(":").slice(1).join(":").split(",")),
    { name: r, params: e }
  )
}
function wn(t) {
  const e = (r) => {
    var n
    return (n = ie(r, t)) !== null && n !== void 0 ? n : r[t]
  }
  return (e.__locatorRef = t), e
}
const On = {
  generateMessage: ({ field: t }) => `${t} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0,
}
let Tn = Object.assign({}, On)
const Pe = () => Tn
async function Sn(t, e, r = {}) {
  const n = r == null ? void 0 : r.bails,
    s = {
      name: (r == null ? void 0 : r.name) || "{field}",
      rules: e,
      label: r == null ? void 0 : r.label,
      bails: n ?? !0,
      formData: (r == null ? void 0 : r.values) || {},
    },
    a = await An(s, t)
  return Object.assign(Object.assign({}, a), { valid: !a.errors.length })
}
async function An(t, e) {
  const r = t.rules
  if (ce(r) || dr(r))
    return En(e, Object.assign(Object.assign({}, t), { rules: r }))
  if (H(r) || Array.isArray(r)) {
    const o = {
        field: t.label || t.name,
        name: t.name,
        label: t.label,
        form: t.formData,
        value: e,
      },
      d = Array.isArray(r) ? r : [r],
      c = d.length,
      p = []
    for (let j = 0; j < c; j++) {
      const V = d[j],
        I = await V(e, o)
      if (!(typeof I != "string" && !Array.isArray(I) && I)) {
        if (Array.isArray(I)) p.push(...I)
        else {
          const me = typeof I == "string" ? I : vr(o)
          p.push(me)
        }
        if (t.bails) return { errors: p }
      }
    }
    return { errors: p }
  }
  const n = Object.assign(Object.assign({}, t), { rules: bn(r) }),
    s = [],
    a = Object.keys(n.rules),
    i = a.length
  for (let o = 0; o < i; o++) {
    const d = a[o],
      c = await Cn(n, e, { name: d, params: n.rules[d] })
    if (c.error && (s.push(c.error), t.bails)) return { errors: s }
  }
  return { errors: s }
}
function jn(t) {
  return !!t && t.name === "ValidationError"
}
function mr(t) {
  return {
    __type: "VVTypedSchema",
    async parse(r, n) {
      var s
      try {
        return {
          output: await t.validate(r, {
            abortEarly: !1,
            context: (n == null ? void 0 : n.formData) || {},
          }),
          errors: [],
        }
      } catch (a) {
        if (!jn(a)) throw a
        if (
          !(!((s = a.inner) === null || s === void 0) && s.length) &&
          a.errors.length
        )
          return { errors: [{ path: a.path, errors: a.errors }] }
        const i = a.inner.reduce((o, d) => {
          const c = d.path || ""
          return (
            o[c] || (o[c] = { errors: [], path: c }),
            o[c].errors.push(...d.errors),
            o
          )
        }, {})
        return { errors: Object.values(i) }
      }
    },
  }
}
async function En(t, e) {
  const n = await (ce(e.rules) ? e.rules : mr(e.rules)).parse(t, {
      formData: e.formData,
    }),
    s = []
  for (const a of n.errors) a.errors.length && s.push(...a.errors)
  return { value: n.value, errors: s }
}
async function Cn(t, e, r) {
  const n = on(r.name)
  if (!n) throw new Error(`No such validator '${r.name}' exists.`)
  const s = Nn(r.params, t.formData),
    a = {
      field: t.label || t.name,
      name: t.name,
      label: t.label,
      value: e,
      form: t.formData,
      rule: Object.assign(Object.assign({}, r), { params: s }),
    },
    i = await n(e, s, a)
  return typeof i == "string" ? { error: i } : { error: i ? void 0 : vr(a) }
}
function vr(t) {
  const e = Pe().generateMessage
  return e ? e(t) : "Field is invalid"
}
function Nn(t, e) {
  const r = (n) => (dn(n) ? n(e) : n)
  return Array.isArray(t)
    ? t.map(r)
    : Object.keys(t).reduce((n, s) => ((n[s] = r(t[s])), n), {})
}
async function Zn(t, e) {
  const n = await (ce(t) ? t : mr(t)).parse(E(e), { formData: E(e) }),
    s = {},
    a = {}
  for (const i of n.errors) {
    const o = i.errors,
      d = (i.path || "").replace(/\["(\d+)"\]/g, (c, p) => `[${p}]`)
    ;(s[d] = { valid: !o.length, errors: o }), o.length && (a[d] = o[0])
  }
  return {
    valid: !n.errors.length,
    results: s,
    errors: a,
    values: n.value,
    source: "schema",
  }
}
async function In(t, e, r) {
  const s = W(t).map(async (c) => {
    var p, j, V
    const I =
        (p = r == null ? void 0 : r.names) === null || p === void 0
          ? void 0
          : p[c],
      q = await Sn(ie(e, c), t[c], {
        name: (I == null ? void 0 : I.name) || c,
        label: I == null ? void 0 : I.label,
        values: e,
        bails:
          (V =
            (j = r == null ? void 0 : r.bailsMap) === null || j === void 0
              ? void 0
              : j[c]) !== null && V !== void 0
            ? V
            : !0,
      })
    return Object.assign(Object.assign({}, q), { path: c })
  })
  let a = !0
  const i = await Promise.all(s),
    o = {},
    d = {}
  for (const c of i)
    (o[c.path] = { valid: c.valid, errors: c.errors }),
      c.valid || ((a = !1), (d[c.path] = c.errors[0]))
  return { valid: a, results: o, errors: d, source: "schema" }
}
let Rn = 0
const it = ["bails", "fieldsCount", "id", "multiple", "type", "validate"]
function yr(t) {
  const e = (t == null ? void 0 : t.initialValues) || {},
    r = Object.assign({}, S(e)),
    n = ye(t == null ? void 0 : t.validationSchema)
  return n && ce(n) && H(n.cast) ? E(n.cast(r) || {}) : E(r)
}
function ea(t) {
  var e
  const r = Rn++,
    n = (t == null ? void 0 : t.name) || "Form"
  let s = 0
  const a = le(!1),
    i = le(!1),
    o = le(0),
    d = [],
    c = Zt(yr(t)),
    p = le([]),
    j = le({}),
    V = le({}),
    I = gn(() => {
      V.value = p.value.reduce((l, u) => ((l[st(S(u.path))] = u), l), {})
    })
  function q(l, u) {
    const f = F(l)
    if (!f) {
      typeof l == "string" && (j.value[st(l)] = rr(u))
      return
    }
    if (typeof l == "string") {
      const y = st(l)
      j.value[y] && delete j.value[y]
    }
    ;(f.errors = rr(u)), (f.valid = !f.errors.length)
  }
  function me(l) {
    W(l).forEach((u) => {
      q(u, l[u])
    })
  }
  t != null && t.initialErrors && me(t.initialErrors)
  const vt = D(() => {
      const l = p.value.reduce(
        (u, f) => (f.errors.length && (u[S(f.path)] = f.errors), u),
        {},
      )
      return Object.assign(Object.assign({}, j.value), l)
    }),
    yt = D(() =>
      W(vt.value).reduce((l, u) => {
        const f = vt.value[u]
        return f != null && f.length && (l[u] = f[0]), l
      }, {}),
    ),
    Ir = D(() =>
      p.value.reduce(
        (l, u) => (
          (l[S(u.path)] = { name: S(u.path) || "", label: u.label || "" }), l
        ),
        {},
      ),
    ),
    Rr = D(() =>
      p.value.reduce((l, u) => {
        var f
        return (
          (l[S(u.path)] = (f = u.bails) !== null && f !== void 0 ? f : !0), l
        )
      }, {}),
    ),
    Dt = Object.assign({}, (t == null ? void 0 : t.initialErrors) || {}),
    Vr =
      (e = t == null ? void 0 : t.keepValuesOnUnmount) !== null && e !== void 0
        ? e
        : !1,
    {
      initialValues: Ne,
      originalInitialValues: Ze,
      setInitialValues: Pr,
    } = Pn(p, c, t),
    $r = Vn(p, c, Ze, yt),
    zt = D(() =>
      p.value.reduce((l, u) => {
        const f = ie(c, S(u.path))
        return ne(l, S(u.path), f), l
      }, {}),
    ),
    K = t == null ? void 0 : t.validationSchema
  function tt(l, u) {
    var f, y
    const x = D(() => ie(Ne.value, S(l))),
      O = V.value[S(l)],
      b =
        (u == null ? void 0 : u.type) === "checkbox" ||
        (u == null ? void 0 : u.type) === "radio"
    if (O && b) {
      O.multiple = !0
      const U = s++
      return (
        Array.isArray(O.id) ? O.id.push(U) : (O.id = [O.id, U]),
        O.fieldsCount++,
        (O.__flags.pendingUnmount[U] = !1),
        O
      )
    }
    const Z = D(() => ie(c, S(l))),
      R = S(l),
      P = Re.findIndex((U) => U === R)
    P !== -1 && Re.splice(P, 1)
    const C = D(() => {
        var U, Ve, Tt, St
        const At = S(K)
        if (ce(At))
          return (Ve =
            (U = At.describe) === null || U === void 0
              ? void 0
              : U.call(At, S(l)).required) !== null && Ve !== void 0
            ? Ve
            : !1
        const jt = S(u == null ? void 0 : u.schema)
        return ce(jt) &&
          (St =
            (Tt = jt.describe) === null || Tt === void 0
              ? void 0
              : Tt.call(jt).required) !== null &&
          St !== void 0
          ? St
          : !1
      }),
      $ = s++,
      L = Zt({
        id: $,
        path: l,
        touched: !1,
        pending: !1,
        valid: !0,
        validated: !!(!((f = Dt[R]) === null || f === void 0) && f.length),
        required: C,
        initialValue: x,
        errors: rn([]),
        bails:
          (y = u == null ? void 0 : u.bails) !== null && y !== void 0 ? y : !1,
        label: u == null ? void 0 : u.label,
        type: (u == null ? void 0 : u.type) || "default",
        value: Z,
        multiple: !1,
        __flags: { pendingUnmount: { [$]: !1 }, pendingReset: !1 },
        fieldsCount: 1,
        validate: u == null ? void 0 : u.validate,
        dirty: D(() => !De(ye(Z), ye(x))),
      })
    return (
      p.value.push(L),
      (V.value[R] = L),
      I(),
      yt.value[R] &&
        !Dt[R] &&
        X(() => {
          ve(R, { mode: "silent" })
        }),
      Ht(l) &&
        Yt(l, (U) => {
          I()
          const Ve = E(Z.value)
          ;(V.value[U] = L),
            X(() => {
              ne(c, U, Ve)
            })
        }),
      L
    )
  }
  const Mr = tr(Wt, 5),
    Dr = tr(Wt, 5),
    Ft = yn(
      async (l) => await (l === "silent" ? Mr() : Dr()),
      (l, [u]) => {
        const f = W(re.errorBag.value),
          x = [
            ...new Set([...W(l.results), ...p.value.map((O) => O.path), ...f]),
          ]
            .sort()
            .reduce(
              (O, b) => {
                var Z
                const R = b,
                  P = F(R) || zr(R),
                  C =
                    ((Z = l.results[R]) === null || Z === void 0
                      ? void 0
                      : Z.errors) || [],
                  $ = S(P == null ? void 0 : P.path) || R,
                  L = $n({ errors: C, valid: !C.length }, O.results[$])
                return (
                  (O.results[$] = L),
                  L.valid || (O.errors[$] = L.errors[0]),
                  P && j.value[$] && delete j.value[$],
                  P
                    ? ((P.valid = L.valid),
                      u === "silent" ||
                        (u === "validated-only" && !P.validated) ||
                        q(P, L.errors),
                      O)
                    : (q($, C), O)
                )
              },
              { valid: l.valid, results: {}, errors: {}, source: l.source },
            )
        return (
          l.values && ((x.values = l.values), (x.source = l.source)),
          W(x.results).forEach((O) => {
            var b
            const Z = F(O)
            Z &&
              u !== "silent" &&
              ((u === "validated-only" && !Z.validated) ||
                q(
                  Z,
                  (b = x.results[O]) === null || b === void 0
                    ? void 0
                    : b.errors,
                ))
          }),
          x
        )
      },
    )
  function Ie(l) {
    p.value.forEach(l)
  }
  function F(l) {
    const u = typeof l == "string" ? st(l) : l
    return typeof u == "string" ? V.value[u] : u
  }
  function zr(l) {
    return p.value
      .filter((f) => l.startsWith(S(f.path)))
      .reduce(
        (f, y) => (f ? (y.path.length > f.path.length ? y : f) : y),
        void 0,
      )
  }
  let Re = [],
    rt
  function Fr(l) {
    return (
      Re.push(l),
      rt ||
        (rt = X(() => {
          ;[...Re]
            .sort()
            .reverse()
            .forEach((f) => {
              er(c, f)
            }),
            (Re = []),
            (rt = null)
        })),
      rt
    )
  }
  function Lt(l) {
    return function (f, y) {
      return function (O) {
        return (
          O instanceof Event && (O.preventDefault(), O.stopPropagation()),
          Ie((b) => (b.touched = !0)),
          (a.value = !0),
          o.value++,
          ke()
            .then((b) => {
              const Z = E(c)
              if (b.valid && typeof f == "function") {
                const R = E(zt.value)
                let P = l ? R : Z
                return (
                  b.values &&
                    (P =
                      b.source === "schema"
                        ? b.values
                        : Object.assign({}, P, b.values)),
                  f(P, {
                    evt: O,
                    controlledValues: R,
                    setErrors: me,
                    setFieldError: q,
                    setTouched: xt,
                    setFieldTouched: nt,
                    setValues: _t,
                    setFieldValue: ue,
                    resetForm: kt,
                    resetField: Bt,
                  })
                )
              }
              !b.valid &&
                typeof y == "function" &&
                y({ values: Z, evt: O, errors: b.errors, results: b.results })
            })
            .then(
              (b) => ((a.value = !1), b),
              (b) => {
                throw ((a.value = !1), b)
              },
            )
        )
      }
    }
  }
  const gt = Lt(!1)
  gt.withControlled = Lt(!0)
  function Lr(l, u) {
    const f = p.value.findIndex(
        (x) =>
          x.path === l && (Array.isArray(x.id) ? x.id.includes(u) : x.id === u),
      ),
      y = p.value[f]
    if (!(f === -1 || !y)) {
      if (
        (X(() => {
          ve(l, { mode: "silent", warn: !1 })
        }),
        y.multiple && y.fieldsCount && y.fieldsCount--,
        Array.isArray(y.id))
      ) {
        const x = y.id.indexOf(u)
        x >= 0 && y.id.splice(x, 1), delete y.__flags.pendingUnmount[u]
      }
      ;(!y.multiple || y.fieldsCount <= 0) &&
        (p.value.splice(f, 1), Ut(l), I(), delete V.value[l])
    }
  }
  function Br(l) {
    W(V.value).forEach((u) => {
      u.startsWith(l) && delete V.value[u]
    }),
      (p.value = p.value.filter((u) => !u.path.startsWith(l))),
      X(() => {
        I()
      })
  }
  const re = {
    name: n,
    formId: r,
    values: c,
    controlledValues: zt,
    errorBag: vt,
    errors: yt,
    schema: K,
    submitCount: o,
    meta: $r,
    isSubmitting: a,
    isValidating: i,
    fieldArrays: d,
    keepValuesOnUnmount: Vr,
    validateSchema: ye(K) ? Ft : void 0,
    validate: ke,
    setFieldError: q,
    validateField: ve,
    setFieldValue: ue,
    setValues: _t,
    setErrors: me,
    setFieldTouched: nt,
    setTouched: xt,
    resetForm: kt,
    resetField: Bt,
    handleSubmit: gt,
    useFieldModel: Jr,
    defineInputBinds: Kr,
    defineComponentBinds: Xr,
    defineField: Ot,
    stageInitialValue: Yr,
    unsetInitialValue: Ut,
    setFieldInitialValue: wt,
    createPathState: tt,
    getPathState: F,
    unsetPathValue: Fr,
    removePathState: Lr,
    initialValues: Ne,
    getAllPathStates: () => p.value,
    destroyPath: Br,
    isFieldTouched: Wr,
    isFieldDirty: qr,
    isFieldValid: Hr,
  }
  function ue(l, u, f = !0) {
    const y = E(u),
      x = typeof l == "string" ? l : l.path
    F(x) || tt(x), ne(c, x, y), f && ve(x)
  }
  function Ur(l, u = !0) {
    W(c).forEach((f) => {
      delete c[f]
    }),
      W(l).forEach((f) => {
        ue(f, l[f], !1)
      }),
      u && ke()
  }
  function _t(l, u = !0) {
    ze(c, l), d.forEach((f) => f && f.reset()), u && ke()
  }
  function bt(l, u) {
    const f = F(S(l)) || tt(l)
    return D({
      get() {
        return f.value
      },
      set(y) {
        var x
        const O = S(l)
        ue(O, y, (x = S(u)) !== null && x !== void 0 ? x : !1)
      },
    })
  }
  function nt(l, u) {
    const f = F(l)
    f && (f.touched = u)
  }
  function Wr(l) {
    const u = F(l)
    return u
      ? u.touched
      : p.value.filter((f) => f.path.startsWith(l)).some((f) => f.touched)
  }
  function qr(l) {
    const u = F(l)
    return u
      ? u.dirty
      : p.value.filter((f) => f.path.startsWith(l)).some((f) => f.dirty)
  }
  function Hr(l) {
    const u = F(l)
    return u
      ? u.valid
      : p.value.filter((f) => f.path.startsWith(l)).every((f) => f.valid)
  }
  function xt(l) {
    if (typeof l == "boolean") {
      Ie((u) => {
        u.touched = l
      })
      return
    }
    W(l).forEach((u) => {
      nt(u, !!l[u])
    })
  }
  function Bt(l, u) {
    var f
    const y = u && "value" in u ? u.value : ie(Ne.value, l),
      x = F(l)
    x && (x.__flags.pendingReset = !0),
      wt(l, E(y), !0),
      ue(l, y, !1),
      nt(
        l,
        (f = u == null ? void 0 : u.touched) !== null && f !== void 0 ? f : !1,
      ),
      q(l, (u == null ? void 0 : u.errors) || []),
      X(() => {
        x && (x.__flags.pendingReset = !1)
      })
  }
  function kt(l, u) {
    let f = E(l != null && l.values ? l.values : Ze.value)
    ;(f = u != null && u.force ? f : ze(Ze.value, f)),
      (f = ce(K) && H(K.cast) ? K.cast(f) : f),
      Pr(f, { force: u == null ? void 0 : u.force }),
      Ie((y) => {
        var x
        ;(y.__flags.pendingReset = !0),
          (y.validated = !1),
          (y.touched =
            ((x = l == null ? void 0 : l.touched) === null || x === void 0
              ? void 0
              : x[S(y.path)]) || !1),
          ue(S(y.path), ie(f, S(y.path)), !1),
          q(S(y.path), void 0)
      }),
      u != null && u.force ? Ur(f, !1) : _t(f, !1),
      me((l == null ? void 0 : l.errors) || {}),
      (o.value = (l == null ? void 0 : l.submitCount) || 0),
      X(() => {
        ke({ mode: "silent" }),
          Ie((y) => {
            y.__flags.pendingReset = !1
          })
      })
  }
  async function ke(l) {
    const u = (l == null ? void 0 : l.mode) || "force"
    if ((u === "force" && Ie((b) => (b.validated = !0)), re.validateSchema))
      return re.validateSchema(u)
    i.value = !0
    const f = await Promise.all(
      p.value.map((b) =>
        b.validate
          ? b
              .validate(l)
              .then((Z) => ({
                key: S(b.path),
                valid: Z.valid,
                errors: Z.errors,
                value: Z.value,
              }))
          : Promise.resolve({
              key: S(b.path),
              valid: !0,
              errors: [],
              value: void 0,
            }),
      ),
    )
    i.value = !1
    const y = {},
      x = {},
      O = {}
    for (const b of f)
      (y[b.key] = { valid: b.valid, errors: b.errors }),
        b.value && ne(O, b.key, b.value),
        b.errors.length && (x[b.key] = b.errors[0])
    return {
      valid: f.every((b) => b.valid),
      results: y,
      errors: x,
      values: O,
      source: "fields",
    }
  }
  async function ve(l, u) {
    var f
    const y = F(l)
    if (
      (y && (u == null ? void 0 : u.mode) !== "silent" && (y.validated = !0), K)
    ) {
      const { results: x } = await Ft(
        (u == null ? void 0 : u.mode) || "validated-only",
      )
      return x[l] || { errors: [], valid: !0 }
    }
    return y != null && y.validate
      ? y.validate(u)
      : (!y && (f = u == null ? void 0 : u.warn),
        Promise.resolve({ errors: [], valid: !0 }))
  }
  function Ut(l) {
    er(Ne.value, l)
  }
  function Yr(l, u, f = !1) {
    wt(l, u),
      ne(c, l, u),
      f && !(t != null && t.initialValues) && ne(Ze.value, l, E(u))
  }
  function wt(l, u, f = !1) {
    ne(Ne.value, l, E(u)), f && ne(Ze.value, l, E(u))
  }
  async function Wt() {
    const l = ye(K)
    if (!l) return { valid: !0, results: {}, errors: {}, source: "none" }
    i.value = !0
    const u =
      dr(l) || ce(l)
        ? await Zn(l, c)
        : await In(l, c, { names: Ir.value, bailsMap: Rr.value })
    return (i.value = !1), u
  }
  const Gr = gt((l, { evt: u }) => {
    vn(u) && u.target.submit()
  })
  Qr(() => {
    if (
      (t != null && t.initialErrors && me(t.initialErrors),
      t != null && t.initialTouched && xt(t.initialTouched),
      t != null && t.validateOnMount)
    ) {
      ke()
      return
    }
    re.validateSchema && re.validateSchema("silent")
  }),
    Ht(K) &&
      Yt(K, () => {
        var l
        ;(l = re.validateSchema) === null ||
          l === void 0 ||
          l.call(re, "validated-only")
      }),
    Gt(un, re)
  function Ot(l, u) {
    const f = H(u) || u == null ? void 0 : u.label,
      y = F(S(l)) || tt(l, { label: f }),
      x = () => (H(u) ? u(at(y, it)) : u || {})
    function O() {
      var C
      ;(y.touched = !0),
        ((C = x().validateOnBlur) !== null && C !== void 0
          ? C
          : Pe().validateOnBlur) && ve(S(y.path))
    }
    function b() {
      var C
      ;((C = x().validateOnInput) !== null && C !== void 0
        ? C
        : Pe().validateOnInput) &&
        X(() => {
          ve(S(y.path))
        })
    }
    function Z() {
      var C
      ;((C = x().validateOnChange) !== null && C !== void 0
        ? C
        : Pe().validateOnChange) &&
        X(() => {
          ve(S(y.path))
        })
    }
    const R = D(() => {
      const C = { onChange: Z, onInput: b, onBlur: O }
      return H(u)
        ? Object.assign(Object.assign({}, C), u(at(y, it)).props || {})
        : u != null && u.props
          ? Object.assign(Object.assign({}, C), u.props(at(y, it)))
          : C
    })
    return [
      bt(l, () => {
        var C, $, L
        return (L =
          (C = x().validateOnModelUpdate) !== null && C !== void 0
            ? C
            : ($ = Pe()) === null || $ === void 0
              ? void 0
              : $.validateOnModelUpdate) !== null && L !== void 0
          ? L
          : !0
      }),
      R,
    ]
  }
  function Jr(l) {
    return Array.isArray(l) ? l.map((u) => bt(u, !0)) : bt(l)
  }
  function Kr(l, u) {
    const [f, y] = Ot(l, u)
    function x() {
      y.value.onBlur()
    }
    function O(Z) {
      const R = nr(Z)
      ue(S(l), R, !1), y.value.onInput()
    }
    function b(Z) {
      const R = nr(Z)
      ue(S(l), R, !1), y.value.onChange()
    }
    return D(() =>
      Object.assign(Object.assign({}, y.value), {
        onBlur: x,
        onInput: O,
        onChange: b,
        value: f.value,
      }),
    )
  }
  function Xr(l, u) {
    const [f, y] = Ot(l, u),
      x = F(S(l))
    function O(b) {
      f.value = b
    }
    return D(() => {
      const b = H(u) ? u(at(x, it)) : u || {}
      return Object.assign(
        {
          [b.model || "modelValue"]: f.value,
          [`onUpdate:${b.model || "modelValue"}`]: O,
        },
        y.value,
      )
    })
  }
  const qt = Object.assign(Object.assign({}, re), {
    values: en(c),
    handleReset: () => kt(),
    submitForm: Gr,
  })
  return Gt(ln, qt), qt
}
function Vn(t, e, r, n) {
  const s = { touched: "some", pending: "some", valid: "every" },
    a = D(() => !De(e, ye(r)))
  function i() {
    const d = t.value
    return W(s).reduce((c, p) => {
      const j = s[p]
      return (c[p] = d[j]((V) => V[p])), c
    }, {})
  }
  const o = Zt(i())
  return (
    tn(() => {
      const d = i()
      ;(o.touched = d.touched), (o.valid = d.valid), (o.pending = d.pending)
    }),
    D(() =>
      Object.assign(Object.assign({ initialValues: ye(r) }, o), {
        valid: o.valid && !W(n.value).length,
        dirty: a.value,
      }),
    )
  )
}
function Pn(t, e, r) {
  const n = yr(r),
    s = le(n),
    a = le(E(n))
  function i(o, d) {
    d != null && d.force
      ? ((s.value = E(o)), (a.value = E(o)))
      : ((s.value = ze(E(s.value) || {}, E(o))),
        (a.value = ze(E(a.value) || {}, E(o)))),
      d != null &&
        d.updateFields &&
        t.value.forEach((c) => {
          if (c.touched) return
          const j = ie(s.value, S(c.path))
          ne(e, S(c.path), E(j))
        })
  }
  return { initialValues: s, originalInitialValues: a, setInitialValues: i }
}
function $n(t, e) {
  return e
    ? { valid: t.valid && e.valid, errors: [...t.errors, ...e.errors] }
    : t
}
var A
;(function (t) {
  t.assertEqual = (s) => s
  function e(s) {}
  t.assertIs = e
  function r(s) {
    throw new Error()
  }
  ;(t.assertNever = r),
    (t.arrayToEnum = (s) => {
      const a = {}
      for (const i of s) a[i] = i
      return a
    }),
    (t.getValidEnumValues = (s) => {
      const a = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"),
        i = {}
      for (const o of a) i[o] = s[o]
      return t.objectValues(i)
    }),
    (t.objectValues = (s) =>
      t.objectKeys(s).map(function (a) {
        return s[a]
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const a = []
            for (const i in s)
              Object.prototype.hasOwnProperty.call(s, i) && a.push(i)
            return a
          }),
    (t.find = (s, a) => {
      for (const i of s) if (a(i)) return i
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s)
  function n(s, a = " | ") {
    return s.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(a)
  }
  ;(t.joinValues = n),
    (t.jsonStringifyReplacer = (s, a) =>
      typeof a == "bigint" ? a.toString() : a)
})(A || (A = {}))
var It
;(function (t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r })
})(It || (It = {}))
const v = A.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  ae = (t) => {
    switch (typeof t) {
      case "undefined":
        return v.undefined
      case "string":
        return v.string
      case "number":
        return isNaN(t) ? v.nan : v.number
      case "boolean":
        return v.boolean
      case "function":
        return v.function
      case "bigint":
        return v.bigint
      case "symbol":
        return v.symbol
      case "object":
        return Array.isArray(t)
          ? v.array
          : t === null
            ? v.null
            : t.then &&
                typeof t.then == "function" &&
                t.catch &&
                typeof t.catch == "function"
              ? v.promise
              : typeof Map < "u" && t instanceof Map
                ? v.map
                : typeof Set < "u" && t instanceof Set
                  ? v.set
                  : typeof Date < "u" && t instanceof Date
                    ? v.date
                    : v.object
      default:
        return v.unknown
    }
  },
  h = A.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Mn = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:")
class B extends Error {
  get errors() {
    return this.issues
  }
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n]
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n]
      })
    const r = new.target.prototype
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = e)
  }
  format(e) {
    const r =
        e ||
        function (a) {
          return a.message
        },
      n = { _errors: [] },
      s = (a) => {
        for (const i of a.issues)
          if (i.code === "invalid_union") i.unionErrors.map(s)
          else if (i.code === "invalid_return_type") s(i.returnTypeError)
          else if (i.code === "invalid_arguments") s(i.argumentsError)
          else if (i.path.length === 0) n._errors.push(r(i))
          else {
            let o = n,
              d = 0
            for (; d < i.path.length; ) {
              const c = i.path[d]
              d === i.path.length - 1
                ? ((o[c] = o[c] || { _errors: [] }), o[c]._errors.push(r(i)))
                : (o[c] = o[c] || { _errors: [] }),
                (o = o[c]),
                d++
            }
          }
      }
    return s(this), n
  }
  static assert(e) {
    if (!(e instanceof B)) throw new Error(`Not a ZodError: ${e}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, A.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(e = (r) => r.message) {
    const r = {},
      n = []
    for (const s of this.issues)
      s.path.length > 0
        ? ((r[s.path[0]] = r[s.path[0]] || []), r[s.path[0]].push(e(s)))
        : n.push(e(s))
    return { formErrors: n, fieldErrors: r }
  }
  get formErrors() {
    return this.flatten()
  }
}
B.create = (t) => new B(t)
const Ae = (t, e) => {
  let r
  switch (t.code) {
    case h.invalid_type:
      t.received === v.undefined
        ? (r = "Required")
        : (r = `Expected ${t.expected}, received ${t.received}`)
      break
    case h.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, A.jsonStringifyReplacer)}`
      break
    case h.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${A.joinValues(t.keys, ", ")}`
      break
    case h.invalid_union:
      r = "Invalid input"
      break
    case h.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${A.joinValues(t.options)}`
      break
    case h.invalid_enum_value:
      r = `Invalid enum value. Expected ${A.joinValues(t.options)}, received '${t.received}'`
      break
    case h.invalid_arguments:
      r = "Invalid function arguments"
      break
    case h.invalid_return_type:
      r = "Invalid function return type"
      break
    case h.invalid_date:
      r = "Invalid date"
      break
    case h.invalid_string:
      typeof t.validation == "object"
        ? "includes" in t.validation
          ? ((r = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
          : "startsWith" in t.validation
            ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
            : "endsWith" in t.validation
              ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
              : A.assertNever(t.validation)
        : t.validation !== "regex"
          ? (r = `Invalid ${t.validation}`)
          : (r = "Invalid")
      break
    case h.too_small:
      t.type === "array"
        ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`)
        : t.type === "string"
          ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`)
          : t.type === "number"
            ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
            : t.type === "date"
              ? (r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`)
              : (r = "Invalid input")
      break
    case h.too_big:
      t.type === "array"
        ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`)
        : t.type === "string"
          ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`)
          : t.type === "number"
            ? (r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
            : t.type === "bigint"
              ? (r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
              : t.type === "date"
                ? (r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`)
                : (r = "Invalid input")
      break
    case h.custom:
      r = "Invalid input"
      break
    case h.invalid_intersection_types:
      r = "Intersection results could not be merged"
      break
    case h.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`
      break
    case h.not_finite:
      r = "Number must be finite"
      break
    default:
      ;(r = e.defaultError), A.assertNever(t)
  }
  return { message: r }
}
let gr = Ae
function Dn(t) {
  gr = t
}
function ot() {
  return gr
}
const ut = (t) => {
    const { data: e, path: r, errorMaps: n, issueData: s } = t,
      a = [...r, ...(s.path || [])],
      i = { ...s, path: a }
    if (s.message !== void 0) return { ...s, path: a, message: s.message }
    let o = ""
    const d = n
      .filter((c) => !!c)
      .slice()
      .reverse()
    for (const c of d) o = c(i, { data: e, defaultError: o }).message
    return { ...s, path: a, message: o }
  },
  zn = []
function m(t, e) {
  const r = ot(),
    n = ut({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === Ae ? void 0 : Ae,
      ].filter((s) => !!s),
    })
  t.common.issues.push(n)
}
class M {
  constructor() {
    this.value = "valid"
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty")
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted")
  }
  static mergeArray(e, r) {
    const n = []
    for (const s of r) {
      if (s.status === "aborted") return k
      s.status === "dirty" && e.dirty(), n.push(s.value)
    }
    return { status: e.value, value: n }
  }
  static async mergeObjectAsync(e, r) {
    const n = []
    for (const s of r) {
      const a = await s.key,
        i = await s.value
      n.push({ key: a, value: i })
    }
    return M.mergeObjectSync(e, n)
  }
  static mergeObjectSync(e, r) {
    const n = {}
    for (const s of r) {
      const { key: a, value: i } = s
      if (a.status === "aborted" || i.status === "aborted") return k
      a.status === "dirty" && e.dirty(),
        i.status === "dirty" && e.dirty(),
        a.value !== "__proto__" &&
          (typeof i.value < "u" || s.alwaysSet) &&
          (n[a.value] = i.value)
    }
    return { status: e.value, value: n }
  }
}
const k = Object.freeze({ status: "aborted" }),
  Oe = (t) => ({ status: "dirty", value: t }),
  z = (t) => ({ status: "valid", value: t }),
  Rt = (t) => t.status === "aborted",
  Vt = (t) => t.status === "dirty",
  _e = (t) => t.status === "valid",
  Fe = (t) => typeof Promise < "u" && t instanceof Promise
function lt(t, e, r, n) {
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    )
  return e.get(t)
}
function _r(t, e, r, n, s) {
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    )
  return e.set(t, r), r
}
var g
;(function (t) {
  ;(t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message)
})(g || (g = {}))
var $e, Me
class ee {
  constructor(e, r, n, s) {
    ;(this._cachedPath = []),
      (this.parent = e),
      (this.data = r),
      (this._path = n),
      (this._key = s)
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    )
  }
}
const ar = (t, e) => {
  if (_e(e)) return { success: !0, data: e.value }
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.")
  return {
    success: !1,
    get error() {
      if (this._error) return this._error
      const r = new B(t.common.issues)
      return (this._error = r), this._error
    },
  }
}
function w(t) {
  if (!t) return {}
  const {
    errorMap: e,
    invalid_type_error: r,
    required_error: n,
    description: s,
  } = t
  if (e && (r || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    )
  return e
    ? { errorMap: e, description: s }
    : {
        errorMap: (i, o) => {
          var d, c
          const { message: p } = t
          return i.code === "invalid_enum_value"
            ? { message: p ?? o.defaultError }
            : typeof o.data > "u"
              ? {
                  message:
                    (d = p ?? n) !== null && d !== void 0 ? d : o.defaultError,
                }
              : i.code !== "invalid_type"
                ? { message: o.defaultError }
                : {
                    message:
                      (c = p ?? r) !== null && c !== void 0
                        ? c
                        : o.defaultError,
                  }
        },
        description: s,
      }
}
class T {
  get description() {
    return this._def.description
  }
  _getType(e) {
    return ae(e.data)
  }
  _getOrReturnCtx(e, r) {
    return (
      r || {
        common: e.parent.common,
        data: e.data,
        parsedType: ae(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    )
  }
  _processInputParams(e) {
    return {
      status: new M(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: ae(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    }
  }
  _parseSync(e) {
    const r = this._parse(e)
    if (Fe(r)) throw new Error("Synchronous parse encountered promise.")
    return r
  }
  _parseAsync(e) {
    const r = this._parse(e)
    return Promise.resolve(r)
  }
  parse(e, r) {
    const n = this.safeParse(e, r)
    if (n.success) return n.data
    throw n.error
  }
  safeParse(e, r) {
    var n
    const s = {
        common: {
          issues: [],
          async:
            (n = r == null ? void 0 : r.async) !== null && n !== void 0
              ? n
              : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ae(e),
      },
      a = this._parseSync({ data: e, path: s.path, parent: s })
    return ar(s, a)
  }
  "~validate"(e) {
    var r, n
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: ae(e),
    }
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: s })
        return _e(a) ? { value: a.value } : { issues: s.common.issues }
      } catch (a) {
        !(
          (n =
            (r = a == null ? void 0 : a.message) === null || r === void 0
              ? void 0
              : r.toLowerCase()) === null || n === void 0
        ) &&
          n.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 })
      }
    return this._parseAsync({ data: e, path: [], parent: s }).then((a) =>
      _e(a) ? { value: a.value } : { issues: s.common.issues },
    )
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r)
    if (n.success) return n.data
    throw n.error
  }
  async safeParseAsync(e, r) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ae(e),
      },
      s = this._parse({ data: e, path: n.path, parent: n }),
      a = await (Fe(s) ? s : Promise.resolve(s))
    return ar(n, a)
  }
  refine(e, r) {
    const n = (s) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
          ? r(s)
          : r
    return this._refinement((s, a) => {
      const i = e(s),
        o = () => a.addIssue({ code: h.custom, ...n(s) })
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((d) => (d ? !0 : (o(), !1)))
        : i
          ? !0
          : (o(), !1)
    })
  }
  refinement(e, r) {
    return this._refinement((n, s) =>
      e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1),
    )
  }
  _refinement(e) {
    return new J({
      schema: this,
      typeName: _.ZodEffects,
      effect: { type: "refinement", refinement: e },
    })
  }
  superRefine(e) {
    return this._refinement(e)
  }
  constructor(e) {
    ;(this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (r) => this["~validate"](r),
      })
  }
  optional() {
    return Q.create(this, this._def)
  }
  nullable() {
    return pe.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return G.create(this)
  }
  promise() {
    return Ee.create(this, this._def)
  }
  or(e) {
    return We.create([this, e], this._def)
  }
  and(e) {
    return qe.create(this, e, this._def)
  }
  transform(e) {
    return new J({
      ...w(this._def),
      schema: this,
      typeName: _.ZodEffects,
      effect: { type: "transform", transform: e },
    })
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e
    return new Ce({
      ...w(this._def),
      innerType: this,
      defaultValue: r,
      typeName: _.ZodDefault,
    })
  }
  brand() {
    return new Mt({ typeName: _.ZodBranded, type: this, ...w(this._def) })
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e
    return new Ke({
      ...w(this._def),
      innerType: this,
      catchValue: r,
      typeName: _.ZodCatch,
    })
  }
  describe(e) {
    const r = this.constructor
    return new r({ ...this._def, description: e })
  }
  pipe(e) {
    return et.create(this, e)
  }
  readonly() {
    return Xe.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const Fn = /^c[^\s-]{8,}$/i,
  Ln = /^[0-9a-z]+$/,
  Bn = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Un =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Wn = /^[a-z0-9_-]{21}$/i,
  qn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Hn =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Yn =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Gn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"
let Nt
const Jn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Kn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Xn =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Qn =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  es = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  ts = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  br =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  rs = new RegExp(`^${br}$`)
function xr(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
  return (
    t.precision
      ? (e = `${e}\\.\\d{${t.precision}}`)
      : t.precision == null && (e = `${e}(\\.\\d+)?`),
    e
  )
}
function ns(t) {
  return new RegExp(`^${xr(t)}$`)
}
function kr(t) {
  let e = `${br}T${xr(t)}`
  const r = []
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  )
}
function ss(t, e) {
  return !!(
    ((e === "v4" || !e) && Jn.test(t)) ||
    ((e === "v6" || !e) && Xn.test(t))
  )
}
function as(t, e) {
  if (!qn.test(t)) return !1
  try {
    const [r] = t.split("."),
      n = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      s = JSON.parse(atob(n))
    return !(
      typeof s != "object" ||
      s === null ||
      !s.typ ||
      !s.alg ||
      (e && s.alg !== e)
    )
  } catch {
    return !1
  }
}
function is(t, e) {
  return !!(
    ((e === "v4" || !e) && Kn.test(t)) ||
    ((e === "v6" || !e) && Qn.test(t))
  )
}
class Y extends T {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== v.string)
    ) {
      const a = this._getOrReturnCtx(e)
      return (
        m(a, {
          code: h.invalid_type,
          expected: v.string,
          received: a.parsedType,
        }),
        k
      )
    }
    const n = new M()
    let s
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            code: h.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "max")
        e.data.length > a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            code: h.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "length") {
        const i = e.data.length > a.value,
          o = e.data.length < a.value
        ;(i || o) &&
          ((s = this._getOrReturnCtx(e, s)),
          i
            ? m(s, {
                code: h.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              })
            : o &&
              m(s, {
                code: h.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          n.dirty())
      } else if (a.kind === "email")
        Yn.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "email",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "emoji")
        Nt || (Nt = new RegExp(Gn, "u")),
          Nt.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            m(s, {
              validation: "emoji",
              code: h.invalid_string,
              message: a.message,
            }),
            n.dirty())
      else if (a.kind === "uuid")
        Un.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "uuid",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "nanoid")
        Wn.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "nanoid",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "cuid")
        Fn.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "cuid",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "cuid2")
        Ln.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "cuid2",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "ulid")
        Bn.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            validation: "ulid",
            code: h.invalid_string,
            message: a.message,
          }),
          n.dirty())
      else if (a.kind === "url")
        try {
          new URL(e.data)
        } catch {
          ;(s = this._getOrReturnCtx(e, s)),
            m(s, {
              validation: "url",
              code: h.invalid_string,
              message: a.message,
            }),
            n.dirty()
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              m(s, {
                validation: "regex",
                code: h.invalid_string,
                message: a.message,
              }),
              n.dirty()))
          : a.kind === "trim"
            ? (e.data = e.data.trim())
            : a.kind === "includes"
              ? e.data.includes(a.value, a.position) ||
                ((s = this._getOrReturnCtx(e, s)),
                m(s, {
                  code: h.invalid_string,
                  validation: { includes: a.value, position: a.position },
                  message: a.message,
                }),
                n.dirty())
              : a.kind === "toLowerCase"
                ? (e.data = e.data.toLowerCase())
                : a.kind === "toUpperCase"
                  ? (e.data = e.data.toUpperCase())
                  : a.kind === "startsWith"
                    ? e.data.startsWith(a.value) ||
                      ((s = this._getOrReturnCtx(e, s)),
                      m(s, {
                        code: h.invalid_string,
                        validation: { startsWith: a.value },
                        message: a.message,
                      }),
                      n.dirty())
                    : a.kind === "endsWith"
                      ? e.data.endsWith(a.value) ||
                        ((s = this._getOrReturnCtx(e, s)),
                        m(s, {
                          code: h.invalid_string,
                          validation: { endsWith: a.value },
                          message: a.message,
                        }),
                        n.dirty())
                      : a.kind === "datetime"
                        ? kr(a).test(e.data) ||
                          ((s = this._getOrReturnCtx(e, s)),
                          m(s, {
                            code: h.invalid_string,
                            validation: "datetime",
                            message: a.message,
                          }),
                          n.dirty())
                        : a.kind === "date"
                          ? rs.test(e.data) ||
                            ((s = this._getOrReturnCtx(e, s)),
                            m(s, {
                              code: h.invalid_string,
                              validation: "date",
                              message: a.message,
                            }),
                            n.dirty())
                          : a.kind === "time"
                            ? ns(a).test(e.data) ||
                              ((s = this._getOrReturnCtx(e, s)),
                              m(s, {
                                code: h.invalid_string,
                                validation: "time",
                                message: a.message,
                              }),
                              n.dirty())
                            : a.kind === "duration"
                              ? Hn.test(e.data) ||
                                ((s = this._getOrReturnCtx(e, s)),
                                m(s, {
                                  validation: "duration",
                                  code: h.invalid_string,
                                  message: a.message,
                                }),
                                n.dirty())
                              : a.kind === "ip"
                                ? ss(e.data, a.version) ||
                                  ((s = this._getOrReturnCtx(e, s)),
                                  m(s, {
                                    validation: "ip",
                                    code: h.invalid_string,
                                    message: a.message,
                                  }),
                                  n.dirty())
                                : a.kind === "jwt"
                                  ? as(e.data, a.alg) ||
                                    ((s = this._getOrReturnCtx(e, s)),
                                    m(s, {
                                      validation: "jwt",
                                      code: h.invalid_string,
                                      message: a.message,
                                    }),
                                    n.dirty())
                                  : a.kind === "cidr"
                                    ? is(e.data, a.version) ||
                                      ((s = this._getOrReturnCtx(e, s)),
                                      m(s, {
                                        validation: "cidr",
                                        code: h.invalid_string,
                                        message: a.message,
                                      }),
                                      n.dirty())
                                    : a.kind === "base64"
                                      ? es.test(e.data) ||
                                        ((s = this._getOrReturnCtx(e, s)),
                                        m(s, {
                                          validation: "base64",
                                          code: h.invalid_string,
                                          message: a.message,
                                        }),
                                        n.dirty())
                                      : a.kind === "base64url"
                                        ? ts.test(e.data) ||
                                          ((s = this._getOrReturnCtx(e, s)),
                                          m(s, {
                                            validation: "base64url",
                                            code: h.invalid_string,
                                            message: a.message,
                                          }),
                                          n.dirty())
                                        : A.assertNever(a)
    return { status: n.value, value: e.data }
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: h.invalid_string,
      ...g.errToObj(n),
    })
  }
  _addCheck(e) {
    return new Y({ ...this._def, checks: [...this._def.checks, e] })
  }
  email(e) {
    return this._addCheck({ kind: "email", ...g.errToObj(e) })
  }
  url(e) {
    return this._addCheck({ kind: "url", ...g.errToObj(e) })
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...g.errToObj(e) })
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...g.errToObj(e) })
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...g.errToObj(e) })
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...g.errToObj(e) })
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...g.errToObj(e) })
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...g.errToObj(e) })
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...g.errToObj(e) })
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...g.errToObj(e) })
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...g.errToObj(e) })
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...g.errToObj(e) })
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...g.errToObj(e) })
  }
  datetime(e) {
    var r, n
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
                ? void 0
                : e.precision,
          offset:
            (r = e == null ? void 0 : e.offset) !== null && r !== void 0
              ? r
              : !1,
          local:
            (n = e == null ? void 0 : e.local) !== null && n !== void 0
              ? n
              : !1,
          ...g.errToObj(e == null ? void 0 : e.message),
        })
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e })
  }
  time(e) {
    return typeof e == "string"
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
                ? void 0
                : e.precision,
          ...g.errToObj(e == null ? void 0 : e.message),
        })
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...g.errToObj(e) })
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...g.errToObj(r) })
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...g.errToObj(r == null ? void 0 : r.message),
    })
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...g.errToObj(r) })
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...g.errToObj(r) })
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...g.errToObj(r) })
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...g.errToObj(r) })
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...g.errToObj(r) })
  }
  nonempty(e) {
    return this.min(1, g.errToObj(e))
  }
  trim() {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    })
  }
  toLowerCase() {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    })
  }
  toUpperCase() {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    })
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime")
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date")
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time")
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration")
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email")
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url")
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji")
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid")
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid")
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid")
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2")
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid")
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip")
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr")
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64")
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url")
  }
  get minLength() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value)
    return e
  }
  get maxLength() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value)
    return e
  }
}
Y.create = (t) => {
  var e
  return new Y({
    checks: [],
    typeName: _.ZodString,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t),
  })
}
function os(t, e) {
  const r = (t.toString().split(".")[1] || "").length,
    n = (e.toString().split(".")[1] || "").length,
    s = r > n ? r : n,
    a = parseInt(t.toFixed(s).replace(".", "")),
    i = parseInt(e.toFixed(s).replace(".", ""))
  return (a % i) / Math.pow(10, s)
}
class de extends T {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf)
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== v.number)
    ) {
      const a = this._getOrReturnCtx(e)
      return (
        m(a, {
          code: h.invalid_type,
          expected: v.number,
          received: a.parsedType,
        }),
        k
      )
    }
    let n
    const s = new M()
    for (const a of this._def.checks)
      a.kind === "int"
        ? A.isInteger(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, {
            code: h.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message,
          }),
          s.dirty())
        : a.kind === "min"
          ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
            ((n = this._getOrReturnCtx(e, n)),
            m(n, {
              code: h.too_small,
              minimum: a.value,
              type: "number",
              inclusive: a.inclusive,
              exact: !1,
              message: a.message,
            }),
            s.dirty())
          : a.kind === "max"
            ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
              ((n = this._getOrReturnCtx(e, n)),
              m(n, {
                code: h.too_big,
                maximum: a.value,
                type: "number",
                inclusive: a.inclusive,
                exact: !1,
                message: a.message,
              }),
              s.dirty())
            : a.kind === "multipleOf"
              ? os(e.data, a.value) !== 0 &&
                ((n = this._getOrReturnCtx(e, n)),
                m(n, {
                  code: h.not_multiple_of,
                  multipleOf: a.value,
                  message: a.message,
                }),
                s.dirty())
              : a.kind === "finite"
                ? Number.isFinite(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  m(n, { code: h.not_finite, message: a.message }),
                  s.dirty())
                : A.assertNever(a)
    return { status: s.value, value: e.data }
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, g.toString(r))
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, g.toString(r))
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, g.toString(r))
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, g.toString(r))
  }
  setLimit(e, r, n, s) {
    return new de({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: g.toString(s) },
      ],
    })
  }
  _addCheck(e) {
    return new de({ ...this._def, checks: [...this._def.checks, e] })
  }
  int(e) {
    return this._addCheck({ kind: "int", message: g.toString(e) })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: g.toString(e),
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: g.toString(e),
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: g.toString(e),
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: g.toString(e),
    })
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(r),
    })
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: g.toString(e) })
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: g.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: g.toString(e),
    })
  }
  get minValue() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value)
    return e
  }
  get maxValue() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value)
    return e
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && A.isInteger(e.value)),
    )
  }
  get isFinite() {
    let e = null,
      r = null
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0
      n.kind === "min"
        ? (r === null || n.value > r) && (r = n.value)
        : n.kind === "max" && (e === null || n.value < e) && (e = n.value)
    }
    return Number.isFinite(r) && Number.isFinite(e)
  }
}
de.create = (t) =>
  new de({
    checks: [],
    typeName: _.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...w(t),
  })
class fe extends T {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte)
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data)
      } catch {
        return this._getInvalidInput(e)
      }
    if (this._getType(e) !== v.bigint) return this._getInvalidInput(e)
    let n
    const s = new M()
    for (const a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          m(n, {
            code: h.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "max"
          ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
            ((n = this._getOrReturnCtx(e, n)),
            m(n, {
              code: h.too_big,
              type: "bigint",
              maximum: a.value,
              inclusive: a.inclusive,
              message: a.message,
            }),
            s.dirty())
          : a.kind === "multipleOf"
            ? e.data % a.value !== BigInt(0) &&
              ((n = this._getOrReturnCtx(e, n)),
              m(n, {
                code: h.not_multiple_of,
                multipleOf: a.value,
                message: a.message,
              }),
              s.dirty())
            : A.assertNever(a)
    return { status: s.value, value: e.data }
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e)
    return (
      m(r, {
        code: h.invalid_type,
        expected: v.bigint,
        received: r.parsedType,
      }),
      k
    )
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, g.toString(r))
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, g.toString(r))
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, g.toString(r))
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, g.toString(r))
  }
  setLimit(e, r, n, s) {
    return new fe({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: g.toString(s) },
      ],
    })
  }
  _addCheck(e) {
    return new fe({ ...this._def, checks: [...this._def.checks, e] })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e),
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e),
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e),
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e),
    })
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(r),
    })
  }
  get minValue() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value)
    return e
  }
  get maxValue() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value)
    return e
  }
}
fe.create = (t) => {
  var e
  return new fe({
    checks: [],
    typeName: _.ZodBigInt,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...w(t),
  })
}
class Le extends T {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== v.boolean)
    ) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.boolean,
          received: n.parsedType,
        }),
        k
      )
    }
    return z(e.data)
  }
}
Le.create = (t) =>
  new Le({
    typeName: _.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...w(t),
  })
class be extends T {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== v.date)
    ) {
      const a = this._getOrReturnCtx(e)
      return (
        m(a, {
          code: h.invalid_type,
          expected: v.date,
          received: a.parsedType,
        }),
        k
      )
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e)
      return m(a, { code: h.invalid_date }), k
    }
    const n = new M()
    let s
    for (const a of this._def.checks)
      a.kind === "min"
        ? e.data.getTime() < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          m(s, {
            code: h.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date",
          }),
          n.dirty())
        : a.kind === "max"
          ? e.data.getTime() > a.value &&
            ((s = this._getOrReturnCtx(e, s)),
            m(s, {
              code: h.too_big,
              message: a.message,
              inclusive: !0,
              exact: !1,
              maximum: a.value,
              type: "date",
            }),
            n.dirty())
          : A.assertNever(a)
    return { status: n.value, value: new Date(e.data.getTime()) }
  }
  _addCheck(e) {
    return new be({ ...this._def, checks: [...this._def.checks, e] })
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: g.toString(r),
    })
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: g.toString(r),
    })
  }
  get minDate() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value)
    return e != null ? new Date(e) : null
  }
  get maxDate() {
    let e = null
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value)
    return e != null ? new Date(e) : null
  }
}
be.create = (t) =>
  new be({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: _.ZodDate,
    ...w(t),
  })
class ct extends T {
  _parse(e) {
    if (this._getType(e) !== v.symbol) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.symbol,
          received: n.parsedType,
        }),
        k
      )
    }
    return z(e.data)
  }
}
ct.create = (t) => new ct({ typeName: _.ZodSymbol, ...w(t) })
class Be extends T {
  _parse(e) {
    if (this._getType(e) !== v.undefined) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.undefined,
          received: n.parsedType,
        }),
        k
      )
    }
    return z(e.data)
  }
}
Be.create = (t) => new Be({ typeName: _.ZodUndefined, ...w(t) })
class Ue extends T {
  _parse(e) {
    if (this._getType(e) !== v.null) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.null,
          received: n.parsedType,
        }),
        k
      )
    }
    return z(e.data)
  }
}
Ue.create = (t) => new Ue({ typeName: _.ZodNull, ...w(t) })
class je extends T {
  constructor() {
    super(...arguments), (this._any = !0)
  }
  _parse(e) {
    return z(e.data)
  }
}
je.create = (t) => new je({ typeName: _.ZodAny, ...w(t) })
class ge extends T {
  constructor() {
    super(...arguments), (this._unknown = !0)
  }
  _parse(e) {
    return z(e.data)
  }
}
ge.create = (t) => new ge({ typeName: _.ZodUnknown, ...w(t) })
class oe extends T {
  _parse(e) {
    const r = this._getOrReturnCtx(e)
    return (
      m(r, { code: h.invalid_type, expected: v.never, received: r.parsedType }),
      k
    )
  }
}
oe.create = (t) => new oe({ typeName: _.ZodNever, ...w(t) })
class dt extends T {
  _parse(e) {
    if (this._getType(e) !== v.undefined) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.void,
          received: n.parsedType,
        }),
        k
      )
    }
    return z(e.data)
  }
}
dt.create = (t) => new dt({ typeName: _.ZodVoid, ...w(t) })
class G extends T {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e),
      s = this._def
    if (r.parsedType !== v.array)
      return (
        m(r, {
          code: h.invalid_type,
          expected: v.array,
          received: r.parsedType,
        }),
        k
      )
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value,
        o = r.data.length < s.exactLength.value
      ;(i || o) &&
        (m(r, {
          code: i ? h.too_big : h.too_small,
          minimum: o ? s.exactLength.value : void 0,
          maximum: i ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        n.dirty())
    }
    if (
      (s.minLength !== null &&
        r.data.length < s.minLength.value &&
        (m(r, {
          code: h.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        n.dirty()),
      s.maxLength !== null &&
        r.data.length > s.maxLength.value &&
        (m(r, {
          code: h.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((i, o) => s.type._parseAsync(new ee(r, i, r.path, o))),
      ).then((i) => M.mergeArray(n, i))
    const a = [...r.data].map((i, o) =>
      s.type._parseSync(new ee(r, i, r.path, o)),
    )
    return M.mergeArray(n, a)
  }
  get element() {
    return this._def.type
  }
  min(e, r) {
    return new G({
      ...this._def,
      minLength: { value: e, message: g.toString(r) },
    })
  }
  max(e, r) {
    return new G({
      ...this._def,
      maxLength: { value: e, message: g.toString(r) },
    })
  }
  length(e, r) {
    return new G({
      ...this._def,
      exactLength: { value: e, message: g.toString(r) },
    })
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
G.create = (t, e) =>
  new G({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: _.ZodArray,
    ...w(e),
  })
function we(t) {
  if (t instanceof N) {
    const e = {}
    for (const r in t.shape) {
      const n = t.shape[r]
      e[r] = Q.create(we(n))
    }
    return new N({ ...t._def, shape: () => e })
  } else
    return t instanceof G
      ? new G({ ...t._def, type: we(t.element) })
      : t instanceof Q
        ? Q.create(we(t.unwrap()))
        : t instanceof pe
          ? pe.create(we(t.unwrap()))
          : t instanceof te
            ? te.create(t.items.map((e) => we(e)))
            : t
}
class N extends T {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend)
  }
  _getCached() {
    if (this._cached !== null) return this._cached
    const e = this._def.shape(),
      r = A.objectKeys(e)
    return (this._cached = { shape: e, keys: r })
  }
  _parse(e) {
    if (this._getType(e) !== v.object) {
      const c = this._getOrReturnCtx(e)
      return (
        m(c, {
          code: h.invalid_type,
          expected: v.object,
          received: c.parsedType,
        }),
        k
      )
    }
    const { status: n, ctx: s } = this._processInputParams(e),
      { shape: a, keys: i } = this._getCached(),
      o = []
    if (
      !(this._def.catchall instanceof oe && this._def.unknownKeys === "strip")
    )
      for (const c in s.data) i.includes(c) || o.push(c)
    const d = []
    for (const c of i) {
      const p = a[c],
        j = s.data[c]
      d.push({
        key: { status: "valid", value: c },
        value: p._parse(new ee(s, j, s.path, c)),
        alwaysSet: c in s.data,
      })
    }
    if (this._def.catchall instanceof oe) {
      const c = this._def.unknownKeys
      if (c === "passthrough")
        for (const p of o)
          d.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: s.data[p] },
          })
      else if (c === "strict")
        o.length > 0 &&
          (m(s, { code: h.unrecognized_keys, keys: o }), n.dirty())
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.")
    } else {
      const c = this._def.catchall
      for (const p of o) {
        const j = s.data[p]
        d.push({
          key: { status: "valid", value: p },
          value: c._parse(new ee(s, j, s.path, p)),
          alwaysSet: p in s.data,
        })
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const c = []
            for (const p of d) {
              const j = await p.key,
                V = await p.value
              c.push({ key: j, value: V, alwaysSet: p.alwaysSet })
            }
            return c
          })
          .then((c) => M.mergeObjectSync(n, c))
      : M.mergeObjectSync(n, d)
  }
  get shape() {
    return this._def.shape()
  }
  strict(e) {
    return (
      g.errToObj,
      new N({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (r, n) => {
                var s, a, i, o
                const d =
                  (i =
                    (a = (s = this._def).errorMap) === null || a === void 0
                      ? void 0
                      : a.call(s, r, n).message) !== null && i !== void 0
                    ? i
                    : n.defaultError
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (o = g.errToObj(e).message) !== null && o !== void 0
                          ? o
                          : d,
                    }
                  : { message: d }
              },
            }
          : {}),
      })
    )
  }
  strip() {
    return new N({ ...this._def, unknownKeys: "strip" })
  }
  passthrough() {
    return new N({ ...this._def, unknownKeys: "passthrough" })
  }
  extend(e) {
    return new N({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    })
  }
  merge(e) {
    return new N({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: _.ZodObject,
    })
  }
  setKey(e, r) {
    return this.augment({ [e]: r })
  }
  catchall(e) {
    return new N({ ...this._def, catchall: e })
  }
  pick(e) {
    const r = {}
    return (
      A.objectKeys(e).forEach((n) => {
        e[n] && this.shape[n] && (r[n] = this.shape[n])
      }),
      new N({ ...this._def, shape: () => r })
    )
  }
  omit(e) {
    const r = {}
    return (
      A.objectKeys(this.shape).forEach((n) => {
        e[n] || (r[n] = this.shape[n])
      }),
      new N({ ...this._def, shape: () => r })
    )
  }
  deepPartial() {
    return we(this)
  }
  partial(e) {
    const r = {}
    return (
      A.objectKeys(this.shape).forEach((n) => {
        const s = this.shape[n]
        e && !e[n] ? (r[n] = s) : (r[n] = s.optional())
      }),
      new N({ ...this._def, shape: () => r })
    )
  }
  required(e) {
    const r = {}
    return (
      A.objectKeys(this.shape).forEach((n) => {
        if (e && !e[n]) r[n] = this.shape[n]
        else {
          let a = this.shape[n]
          for (; a instanceof Q; ) a = a._def.innerType
          r[n] = a
        }
      }),
      new N({ ...this._def, shape: () => r })
    )
  }
  keyof() {
    return wr(A.objectKeys(this.shape))
  }
}
N.create = (t, e) =>
  new N({
    shape: () => t,
    unknownKeys: "strip",
    catchall: oe.create(),
    typeName: _.ZodObject,
    ...w(e),
  })
N.strictCreate = (t, e) =>
  new N({
    shape: () => t,
    unknownKeys: "strict",
    catchall: oe.create(),
    typeName: _.ZodObject,
    ...w(e),
  })
N.lazycreate = (t, e) =>
  new N({
    shape: t,
    unknownKeys: "strip",
    catchall: oe.create(),
    typeName: _.ZodObject,
    ...w(e),
  })
class We extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = this._def.options
    function s(a) {
      for (const o of a) if (o.result.status === "valid") return o.result
      for (const o of a)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result
      const i = a.map((o) => new B(o.ctx.common.issues))
      return m(r, { code: h.invalid_union, unionErrors: i }), k
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (a) => {
          const i = { ...r, common: { ...r.common, issues: [] }, parent: null }
          return {
            result: await a._parseAsync({
              data: r.data,
              path: r.path,
              parent: i,
            }),
            ctx: i,
          }
        }),
      ).then(s)
    {
      let a
      const i = []
      for (const d of n) {
        const c = { ...r, common: { ...r.common, issues: [] }, parent: null },
          p = d._parseSync({ data: r.data, path: r.path, parent: c })
        if (p.status === "valid") return p
        p.status === "dirty" && !a && (a = { result: p, ctx: c }),
          c.common.issues.length && i.push(c.common.issues)
      }
      if (a) return r.common.issues.push(...a.ctx.common.issues), a.result
      const o = i.map((d) => new B(d))
      return m(r, { code: h.invalid_union, unionErrors: o }), k
    }
  }
  get options() {
    return this._def.options
  }
}
We.create = (t, e) => new We({ options: t, typeName: _.ZodUnion, ...w(e) })
const se = (t) =>
  t instanceof Ye
    ? se(t.schema)
    : t instanceof J
      ? se(t.innerType())
      : t instanceof Ge
        ? [t.value]
        : t instanceof he
          ? t.options
          : t instanceof Je
            ? A.objectValues(t.enum)
            : t instanceof Ce
              ? se(t._def.innerType)
              : t instanceof Be
                ? [void 0]
                : t instanceof Ue
                  ? [null]
                  : t instanceof Q
                    ? [void 0, ...se(t.unwrap())]
                    : t instanceof pe
                      ? [null, ...se(t.unwrap())]
                      : t instanceof Mt || t instanceof Xe
                        ? se(t.unwrap())
                        : t instanceof Ke
                          ? se(t._def.innerType)
                          : []
class mt extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e)
    if (r.parsedType !== v.object)
      return (
        m(r, {
          code: h.invalid_type,
          expected: v.object,
          received: r.parsedType,
        }),
        k
      )
    const n = this.discriminator,
      s = r.data[n],
      a = this.optionsMap.get(s)
    return a
      ? r.common.async
        ? a._parseAsync({ data: r.data, path: r.path, parent: r })
        : a._parseSync({ data: r.data, path: r.path, parent: r })
      : (m(r, {
          code: h.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }),
        k)
  }
  get discriminator() {
    return this._def.discriminator
  }
  get options() {
    return this._def.options
  }
  get optionsMap() {
    return this._def.optionsMap
  }
  static create(e, r, n) {
    const s = new Map()
    for (const a of r) {
      const i = se(a.shape[e])
      if (!i.length)
        throw new Error(
          `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
        )
      for (const o of i) {
        if (s.has(o))
          throw new Error(
            `Discriminator property ${String(e)} has duplicate value ${String(o)}`,
          )
        s.set(o, a)
      }
    }
    return new mt({
      typeName: _.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...w(n),
    })
  }
}
function Pt(t, e) {
  const r = ae(t),
    n = ae(e)
  if (t === e) return { valid: !0, data: t }
  if (r === v.object && n === v.object) {
    const s = A.objectKeys(e),
      a = A.objectKeys(t).filter((o) => s.indexOf(o) !== -1),
      i = { ...t, ...e }
    for (const o of a) {
      const d = Pt(t[o], e[o])
      if (!d.valid) return { valid: !1 }
      i[o] = d.data
    }
    return { valid: !0, data: i }
  } else if (r === v.array && n === v.array) {
    if (t.length !== e.length) return { valid: !1 }
    const s = []
    for (let a = 0; a < t.length; a++) {
      const i = t[a],
        o = e[a],
        d = Pt(i, o)
      if (!d.valid) return { valid: !1 }
      s.push(d.data)
    }
    return { valid: !0, data: s }
  } else
    return r === v.date && n === v.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 }
}
class qe extends T {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = (a, i) => {
        if (Rt(a) || Rt(i)) return k
        const o = Pt(a.value, i.value)
        return o.valid
          ? ((Vt(a) || Vt(i)) && r.dirty(), { status: r.value, value: o.data })
          : (m(n, { code: h.invalid_intersection_types }), k)
      }
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([a, i]) => s(a, i))
      : s(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        )
  }
}
qe.create = (t, e, r) =>
  new qe({ left: t, right: e, typeName: _.ZodIntersection, ...w(r) })
class te extends T {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e)
    if (n.parsedType !== v.array)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.array,
          received: n.parsedType,
        }),
        k
      )
    if (n.data.length < this._def.items.length)
      return (
        m(n, {
          code: h.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        k
      )
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (m(n, {
        code: h.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty())
    const a = [...n.data]
      .map((i, o) => {
        const d = this._def.items[o] || this._def.rest
        return d ? d._parse(new ee(n, i, n.path, o)) : null
      })
      .filter((i) => !!i)
    return n.common.async
      ? Promise.all(a).then((i) => M.mergeArray(r, i))
      : M.mergeArray(r, a)
  }
  get items() {
    return this._def.items
  }
  rest(e) {
    return new te({ ...this._def, rest: e })
  }
}
te.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])")
  return new te({ items: t, typeName: _.ZodTuple, rest: null, ...w(e) })
}
class He extends T {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e)
    if (n.parsedType !== v.object)
      return (
        m(n, {
          code: h.invalid_type,
          expected: v.object,
          received: n.parsedType,
        }),
        k
      )
    const s = [],
      a = this._def.keyType,
      i = this._def.valueType
    for (const o in n.data)
      s.push({
        key: a._parse(new ee(n, o, n.path, o)),
        value: i._parse(new ee(n, n.data[o], n.path, o)),
        alwaysSet: o in n.data,
      })
    return n.common.async ? M.mergeObjectAsync(r, s) : M.mergeObjectSync(r, s)
  }
  get element() {
    return this._def.valueType
  }
  static create(e, r, n) {
    return r instanceof T
      ? new He({ keyType: e, valueType: r, typeName: _.ZodRecord, ...w(n) })
      : new He({
          keyType: Y.create(),
          valueType: e,
          typeName: _.ZodRecord,
          ...w(r),
        })
  }
}
class ft extends T {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e)
    if (n.parsedType !== v.map)
      return (
        m(n, { code: h.invalid_type, expected: v.map, received: n.parsedType }),
        k
      )
    const s = this._def.keyType,
      a = this._def.valueType,
      i = [...n.data.entries()].map(([o, d], c) => ({
        key: s._parse(new ee(n, o, n.path, [c, "key"])),
        value: a._parse(new ee(n, d, n.path, [c, "value"])),
      }))
    if (n.common.async) {
      const o = new Map()
      return Promise.resolve().then(async () => {
        for (const d of i) {
          const c = await d.key,
            p = await d.value
          if (c.status === "aborted" || p.status === "aborted") return k
          ;(c.status === "dirty" || p.status === "dirty") && r.dirty(),
            o.set(c.value, p.value)
        }
        return { status: r.value, value: o }
      })
    } else {
      const o = new Map()
      for (const d of i) {
        const c = d.key,
          p = d.value
        if (c.status === "aborted" || p.status === "aborted") return k
        ;(c.status === "dirty" || p.status === "dirty") && r.dirty(),
          o.set(c.value, p.value)
      }
      return { status: r.value, value: o }
    }
  }
}
ft.create = (t, e, r) =>
  new ft({ valueType: e, keyType: t, typeName: _.ZodMap, ...w(r) })
class xe extends T {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e)
    if (n.parsedType !== v.set)
      return (
        m(n, { code: h.invalid_type, expected: v.set, received: n.parsedType }),
        k
      )
    const s = this._def
    s.minSize !== null &&
      n.data.size < s.minSize.value &&
      (m(n, {
        code: h.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      r.dirty()),
      s.maxSize !== null &&
        n.data.size > s.maxSize.value &&
        (m(n, {
          code: h.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        r.dirty())
    const a = this._def.valueType
    function i(d) {
      const c = new Set()
      for (const p of d) {
        if (p.status === "aborted") return k
        p.status === "dirty" && r.dirty(), c.add(p.value)
      }
      return { status: r.value, value: c }
    }
    const o = [...n.data.values()].map((d, c) =>
      a._parse(new ee(n, d, n.path, c)),
    )
    return n.common.async ? Promise.all(o).then((d) => i(d)) : i(o)
  }
  min(e, r) {
    return new xe({
      ...this._def,
      minSize: { value: e, message: g.toString(r) },
    })
  }
  max(e, r) {
    return new xe({
      ...this._def,
      maxSize: { value: e, message: g.toString(r) },
    })
  }
  size(e, r) {
    return this.min(e, r).max(e, r)
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
xe.create = (t, e) =>
  new xe({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: _.ZodSet,
    ...w(e),
  })
class Te extends T {
  constructor() {
    super(...arguments), (this.validate = this.implement)
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e)
    if (r.parsedType !== v.function)
      return (
        m(r, {
          code: h.invalid_type,
          expected: v.function,
          received: r.parsedType,
        }),
        k
      )
    function n(o, d) {
      return ut({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ot(),
          Ae,
        ].filter((c) => !!c),
        issueData: { code: h.invalid_arguments, argumentsError: d },
      })
    }
    function s(o, d) {
      return ut({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ot(),
          Ae,
        ].filter((c) => !!c),
        issueData: { code: h.invalid_return_type, returnTypeError: d },
      })
    }
    const a = { errorMap: r.common.contextualErrorMap },
      i = r.data
    if (this._def.returns instanceof Ee) {
      const o = this
      return z(async function (...d) {
        const c = new B([]),
          p = await o._def.args.parseAsync(d, a).catch((I) => {
            throw (c.addIssue(n(d, I)), c)
          }),
          j = await Reflect.apply(i, this, p)
        return await o._def.returns._def.type.parseAsync(j, a).catch((I) => {
          throw (c.addIssue(s(j, I)), c)
        })
      })
    } else {
      const o = this
      return z(function (...d) {
        const c = o._def.args.safeParse(d, a)
        if (!c.success) throw new B([n(d, c.error)])
        const p = Reflect.apply(i, this, c.data),
          j = o._def.returns.safeParse(p, a)
        if (!j.success) throw new B([s(p, j.error)])
        return j.data
      })
    }
  }
  parameters() {
    return this._def.args
  }
  returnType() {
    return this._def.returns
  }
  args(...e) {
    return new Te({ ...this._def, args: te.create(e).rest(ge.create()) })
  }
  returns(e) {
    return new Te({ ...this._def, returns: e })
  }
  implement(e) {
    return this.parse(e)
  }
  strictImplement(e) {
    return this.parse(e)
  }
  static create(e, r, n) {
    return new Te({
      args: e || te.create([]).rest(ge.create()),
      returns: r || ge.create(),
      typeName: _.ZodFunction,
      ...w(n),
    })
  }
}
class Ye extends T {
  get schema() {
    return this._def.getter()
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e)
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r })
  }
}
Ye.create = (t, e) => new Ye({ getter: t, typeName: _.ZodLazy, ...w(e) })
class Ge extends T {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e)
      return (
        m(r, {
          received: r.data,
          code: h.invalid_literal,
          expected: this._def.value,
        }),
        k
      )
    }
    return { status: "valid", value: e.data }
  }
  get value() {
    return this._def.value
  }
}
Ge.create = (t, e) => new Ge({ value: t, typeName: _.ZodLiteral, ...w(e) })
function wr(t, e) {
  return new he({ values: t, typeName: _.ZodEnum, ...w(e) })
}
class he extends T {
  constructor() {
    super(...arguments), $e.set(this, void 0)
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e),
        n = this._def.values
      return (
        m(r, {
          expected: A.joinValues(n),
          received: r.parsedType,
          code: h.invalid_type,
        }),
        k
      )
    }
    if (
      (lt(this, $e) || _r(this, $e, new Set(this._def.values)),
      !lt(this, $e).has(e.data))
    ) {
      const r = this._getOrReturnCtx(e),
        n = this._def.values
      return (
        m(r, { received: r.data, code: h.invalid_enum_value, options: n }), k
      )
    }
    return z(e.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const e = {}
    for (const r of this._def.values) e[r] = r
    return e
  }
  get Values() {
    const e = {}
    for (const r of this._def.values) e[r] = r
    return e
  }
  get Enum() {
    const e = {}
    for (const r of this._def.values) e[r] = r
    return e
  }
  extract(e, r = this._def) {
    return he.create(e, { ...this._def, ...r })
  }
  exclude(e, r = this._def) {
    return he.create(
      this.options.filter((n) => !e.includes(n)),
      { ...this._def, ...r },
    )
  }
}
$e = new WeakMap()
he.create = wr
class Je extends T {
  constructor() {
    super(...arguments), Me.set(this, void 0)
  }
  _parse(e) {
    const r = A.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e)
    if (n.parsedType !== v.string && n.parsedType !== v.number) {
      const s = A.objectValues(r)
      return (
        m(n, {
          expected: A.joinValues(s),
          received: n.parsedType,
          code: h.invalid_type,
        }),
        k
      )
    }
    if (
      (lt(this, Me) ||
        _r(this, Me, new Set(A.getValidEnumValues(this._def.values))),
      !lt(this, Me).has(e.data))
    ) {
      const s = A.objectValues(r)
      return (
        m(n, { received: n.data, code: h.invalid_enum_value, options: s }), k
      )
    }
    return z(e.data)
  }
  get enum() {
    return this._def.values
  }
}
Me = new WeakMap()
Je.create = (t, e) => new Je({ values: t, typeName: _.ZodNativeEnum, ...w(e) })
class Ee extends T {
  unwrap() {
    return this._def.type
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e)
    if (r.parsedType !== v.promise && r.common.async === !1)
      return (
        m(r, {
          code: h.invalid_type,
          expected: v.promise,
          received: r.parsedType,
        }),
        k
      )
    const n = r.parsedType === v.promise ? r.data : Promise.resolve(r.data)
    return z(
      n.then((s) =>
        this._def.type.parseAsync(s, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        }),
      ),
    )
  }
}
Ee.create = (t, e) => new Ee({ type: t, typeName: _.ZodPromise, ...w(e) })
class J extends T {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === _.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = this._def.effect || null,
      a = {
        addIssue: (i) => {
          m(n, i), i.fatal ? r.abort() : r.dirty()
        },
        get path() {
          return n.path
        },
      }
    if (((a.addIssue = a.addIssue.bind(a)), s.type === "preprocess")) {
      const i = s.transform(n.data, a)
      if (n.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (r.value === "aborted") return k
          const d = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n,
          })
          return d.status === "aborted"
            ? k
            : d.status === "dirty" || r.value === "dirty"
              ? Oe(d.value)
              : d
        })
      {
        if (r.value === "aborted") return k
        const o = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n,
        })
        return o.status === "aborted"
          ? k
          : o.status === "dirty" || r.value === "dirty"
            ? Oe(o.value)
            : o
      }
    }
    if (s.type === "refinement") {
      const i = (o) => {
        const d = s.refinement(o, a)
        if (n.common.async) return Promise.resolve(d)
        if (d instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          )
        return o
      }
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        })
        return o.status === "aborted"
          ? k
          : (o.status === "dirty" && r.dirty(),
            i(o.value),
            { status: r.value, value: o.value })
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((o) =>
            o.status === "aborted"
              ? k
              : (o.status === "dirty" && r.dirty(),
                i(o.value).then(() => ({ status: r.value, value: o.value }))),
          )
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        })
        if (!_e(i)) return i
        const o = s.transform(i.value, a)
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          )
        return { status: r.value, value: o }
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((i) =>
            _e(i)
              ? Promise.resolve(s.transform(i.value, a)).then((o) => ({
                  status: r.value,
                  value: o,
                }))
              : i,
          )
    A.assertNever(s)
  }
}
J.create = (t, e, r) =>
  new J({ schema: t, typeName: _.ZodEffects, effect: e, ...w(r) })
J.createWithPreprocess = (t, e, r) =>
  new J({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: _.ZodEffects,
    ...w(r),
  })
class Q extends T {
  _parse(e) {
    return this._getType(e) === v.undefined
      ? z(void 0)
      : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
Q.create = (t, e) => new Q({ innerType: t, typeName: _.ZodOptional, ...w(e) })
class pe extends T {
  _parse(e) {
    return this._getType(e) === v.null ? z(null) : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
pe.create = (t, e) => new pe({ innerType: t, typeName: _.ZodNullable, ...w(e) })
class Ce extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e)
    let n = r.data
    return (
      r.parsedType === v.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: r.path, parent: r })
    )
  }
  removeDefault() {
    return this._def.innerType
  }
}
Ce.create = (t, e) =>
  new Ce({
    innerType: t,
    typeName: _.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...w(e),
  })
class Ke extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = { ...r, common: { ...r.common, issues: [] } },
      s = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      })
    return Fe(s)
      ? s.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new B(n.common.issues)
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new B(n.common.issues)
                  },
                  input: n.data,
                }),
        }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Ke.create = (t, e) =>
  new Ke({
    innerType: t,
    typeName: _.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...w(e),
  })
class ht extends T {
  _parse(e) {
    if (this._getType(e) !== v.nan) {
      const n = this._getOrReturnCtx(e)
      return (
        m(n, { code: h.invalid_type, expected: v.nan, received: n.parsedType }),
        k
      )
    }
    return { status: "valid", value: e.data }
  }
}
ht.create = (t) => new ht({ typeName: _.ZodNaN, ...w(t) })
const us = Symbol("zod_brand")
class Mt extends T {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = r.data
    return this._def.type._parse({ data: n, path: r.path, parent: r })
  }
  unwrap() {
    return this._def.type
  }
}
class et extends T {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e)
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        })
        return a.status === "aborted"
          ? k
          : a.status === "dirty"
            ? (r.dirty(), Oe(a.value))
            : this._def.out._parseAsync({
                data: a.value,
                path: n.path,
                parent: n,
              })
      })()
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      })
      return s.status === "aborted"
        ? k
        : s.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: s.value })
          : this._def.out._parseSync({ data: s.value, path: n.path, parent: n })
    }
  }
  static create(e, r) {
    return new et({ in: e, out: r, typeName: _.ZodPipeline })
  }
}
class Xe extends T {
  _parse(e) {
    const r = this._def.innerType._parse(e),
      n = (s) => (_e(s) && (s.value = Object.freeze(s.value)), s)
    return Fe(r) ? r.then((s) => n(s)) : n(r)
  }
  unwrap() {
    return this._def.innerType
  }
}
Xe.create = (t, e) => new Xe({ innerType: t, typeName: _.ZodReadonly, ...w(e) })
function Or(t, e = {}, r) {
  return t
    ? je.create().superRefine((n, s) => {
        var a, i
        if (!t(n)) {
          const o =
              typeof e == "function"
                ? e(n)
                : typeof e == "string"
                  ? { message: e }
                  : e,
            d =
              (i = (a = o.fatal) !== null && a !== void 0 ? a : r) !== null &&
              i !== void 0
                ? i
                : !0,
            c = typeof o == "string" ? { message: o } : o
          s.addIssue({ code: "custom", ...c, fatal: d })
        }
      })
    : je.create()
}
const ls = { object: N.lazycreate }
var _
;(function (t) {
  ;(t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly")
})(_ || (_ = {}))
const cs = (t, e = { message: `Input not instance of ${t.name}` }) =>
    Or((r) => r instanceof t, e),
  Tr = Y.create,
  Sr = de.create,
  ds = ht.create,
  fs = fe.create,
  Ar = Le.create,
  hs = be.create,
  ps = ct.create,
  ms = Be.create,
  vs = Ue.create,
  ys = je.create,
  gs = ge.create,
  _s = oe.create,
  bs = dt.create,
  xs = G.create,
  ks = N.create,
  ws = N.strictCreate,
  Os = We.create,
  Ts = mt.create,
  Ss = qe.create,
  As = te.create,
  js = He.create,
  Es = ft.create,
  Cs = xe.create,
  Ns = Te.create,
  Zs = Ye.create,
  Is = Ge.create,
  Rs = he.create,
  Vs = Je.create,
  Ps = Ee.create,
  ir = J.create,
  $s = Q.create,
  Ms = pe.create,
  Ds = J.createWithPreprocess,
  zs = et.create,
  Fs = () => Tr().optional(),
  Ls = () => Sr().optional(),
  Bs = () => Ar().optional(),
  Us = {
    string: (t) => Y.create({ ...t, coerce: !0 }),
    number: (t) => de.create({ ...t, coerce: !0 }),
    boolean: (t) => Le.create({ ...t, coerce: !0 }),
    bigint: (t) => fe.create({ ...t, coerce: !0 }),
    date: (t) => be.create({ ...t, coerce: !0 }),
  },
  Ws = k
var ta = Object.freeze({
  __proto__: null,
  defaultErrorMap: Ae,
  setErrorMap: Dn,
  getErrorMap: ot,
  makeIssue: ut,
  EMPTY_PATH: zn,
  addIssueToContext: m,
  ParseStatus: M,
  INVALID: k,
  DIRTY: Oe,
  OK: z,
  isAborted: Rt,
  isDirty: Vt,
  isValid: _e,
  isAsync: Fe,
  get util() {
    return A
  },
  get objectUtil() {
    return It
  },
  ZodParsedType: v,
  getParsedType: ae,
  ZodType: T,
  datetimeRegex: kr,
  ZodString: Y,
  ZodNumber: de,
  ZodBigInt: fe,
  ZodBoolean: Le,
  ZodDate: be,
  ZodSymbol: ct,
  ZodUndefined: Be,
  ZodNull: Ue,
  ZodAny: je,
  ZodUnknown: ge,
  ZodNever: oe,
  ZodVoid: dt,
  ZodArray: G,
  ZodObject: N,
  ZodUnion: We,
  ZodDiscriminatedUnion: mt,
  ZodIntersection: qe,
  ZodTuple: te,
  ZodRecord: He,
  ZodMap: ft,
  ZodSet: xe,
  ZodFunction: Te,
  ZodLazy: Ye,
  ZodLiteral: Ge,
  ZodEnum: he,
  ZodNativeEnum: Je,
  ZodPromise: Ee,
  ZodEffects: J,
  ZodTransformer: J,
  ZodOptional: Q,
  ZodNullable: pe,
  ZodDefault: Ce,
  ZodCatch: Ke,
  ZodNaN: ht,
  BRAND: us,
  ZodBranded: Mt,
  ZodPipeline: et,
  ZodReadonly: Xe,
  custom: Or,
  Schema: T,
  ZodSchema: T,
  late: ls,
  get ZodFirstPartyTypeKind() {
    return _
  },
  coerce: Us,
  any: ys,
  array: xs,
  bigint: fs,
  boolean: Ar,
  date: hs,
  discriminatedUnion: Ts,
  effect: ir,
  enum: Rs,
  function: Ns,
  instanceof: cs,
  intersection: Ss,
  lazy: Zs,
  literal: Is,
  map: Es,
  nan: ds,
  nativeEnum: Vs,
  never: _s,
  null: vs,
  nullable: Ms,
  number: Sr,
  object: ks,
  oboolean: Bs,
  onumber: Ls,
  optional: $s,
  ostring: Fs,
  pipeline: zs,
  preprocess: Ds,
  promise: Ps,
  record: js,
  set: Cs,
  strictObject: ws,
  string: Tr,
  symbol: ps,
  transformer: ir,
  tuple: As,
  undefined: ms,
  union: Os,
  unknown: gs,
  void: bs,
  NEVER: Ws,
  ZodIssueCode: h,
  quotelessJson: Mn,
  ZodError: B,
})
/**
 * vee-validate v4.15.0
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */ const or = (t) =>
  t !== null && !!t && typeof t == "object" && !Array.isArray(t)
function jr(t) {
  return Number(t) >= 0
}
function qs(t) {
  return typeof t == "object" && t !== null
}
function Hs(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t)
}
function ur(t) {
  if (!qs(t) || Hs(t) !== "[object Object]") return !1
  if (Object.getPrototypeOf(t) === null) return !0
  let e = t
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e)
  return Object.getPrototypeOf(t) === e
}
function Er(t, e) {
  return (
    Object.keys(e).forEach((r) => {
      if (ur(e[r]) && ur(t[r])) {
        t[r] || (t[r] = {}), Er(t[r], e[r])
        return
      }
      t[r] = e[r]
    }),
    t
  )
}
function Ys(t) {
  const e = t.split(".")
  if (!e.length) return ""
  let r = String(e[0])
  for (let n = 1; n < e.length; n++) {
    if (jr(e[n])) {
      r += `[${e[n]}]`
      continue
    }
    r += `.${e[n]}`
  }
  return r
}
function ra(t, e) {
  return {
    __type: "VVTypedSchema",
    async parse(n) {
      const s = await t.safeParseAsync(n, e)
      if (s.success) return { value: s.data, errors: [] }
      const a = {}
      return Cr(s.error.issues, a), { errors: Object.values(a) }
    },
    cast(n) {
      try {
        return t.parse(n)
      } catch {
        const a = Nr(t)
        return or(a) && or(n) ? Er(a, n) : n
      }
    },
    describe(n) {
      try {
        if (!n) return { required: !t.isOptional(), exists: !0 }
        const s = Gs(n, t)
        return s
          ? { required: !s.isOptional(), exists: !0 }
          : { required: !1, exists: !1 }
      } catch {
        return { required: !1, exists: !1 }
      }
    },
  }
}
function Cr(t, e) {
  t.forEach((r) => {
    const n = Ys(r.path.join("."))
    ;(r.code === "invalid_union" &&
      (Cr(
        r.unionErrors.flatMap((s) => s.issues),
        e,
      ),
      !n)) ||
      (e[n] || (e[n] = { errors: [], path: n }), e[n].errors.push(r.message))
  })
}
function Nr(t) {
  if (t instanceof N)
    return Object.fromEntries(
      Object.entries(t.shape).map(([e, r]) =>
        r instanceof Ce
          ? [e, r._def.defaultValue()]
          : r instanceof N
            ? [e, Nr(r)]
            : [e, void 0],
      ),
    )
}
function Gs(t, e) {
  if (!lr(e)) return null
  if (Qe(t)) return e.shape[pt(t)]
  const r = (t || "").split(/\.|\[(\d+)\]/).filter(Boolean)
  let n = e
  for (let s = 0; s <= r.length; s++) {
    const a = r[s]
    if (!a || !n) return n
    if (lr(n)) {
      n = n.shape[a] || null
      continue
    }
    jr(a) && Js(n) && (n = n._def.type)
  }
  return null
}
function Zr(t) {
  return t._def.typeName
}
function Js(t) {
  return Zr(t) === _.ZodArray
}
function lr(t) {
  return Zr(t) === _.ZodObject
}
export { Qs as a, ra as t, ea as u, ta as z }
