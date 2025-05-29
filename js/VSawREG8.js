import { t as F, z as S, u as B, a as V } from "./DQSFQKQG.js"
import {
  q as C,
  r as h,
  p as u,
  _ as M,
  o as m,
  n as z,
  c as g,
  a as s,
  s as w,
  d as b,
  v as N,
  F as W,
  g as D,
  T as q,
} from "./C4KZy2MF.js"
function O() {
  function c(a, t) {
    const l = { expiry: new Date().getTime() + t }
    return localStorage.setItem(a, JSON.stringify(l)), null
  }
  function e(a) {
    const t = localStorage.getItem(a)
    if (!t) return null
    const i = JSON.parse(t)
    return new Date().getTime() > i.expiry
      ? (localStorage.removeItem(a), null)
      : i
  }
  return { setItemWithExpiry: c, getItemWithExpiry: e }
}
const R = {
    props: { isOpen: { type: Boolean, default: !1 } },
    emits: ["close"],
    setup(c, { emit: e }) {
      const a = C(),
        t = V(),
        i = O(),
        l = h(!1),
        o = h(!1),
        _ = F(
          S.object({
            email: S.string().email({ message: "Invalid email address" }),
          }),
        ),
        {
          handleSubmit: K,
          values: d,
          errors: x,
          setFieldValue: I,
          validate: E,
        } = B({ validationSchema: _, initialValues: { email: "" } })
      i.getItemWithExpiry("popupTriggered") && e("close")
      const T = async () => {
          const p = await E()
          if (((o.value = !0), !p.valid)) {
            console.error("Form is invalid:", x.value),
              setTimeout(() => {
                document
                  .getElementById("anchor")
                  .scrollIntoView({ behavior: "smooth" })
              }, 100)
            return
          }
          l.value = !0
          const r = {
            properties: {
              email: "fyb_" + new Date().getTime().toString() + "_" + d.email,
              primary_email: d.email,
              inquiry_type: "contact_us",
              hs_lead_status: "NEW",
              project_type: "fyb",
              request_type: "ads",
            },
          }
          t.createContact(r)
            .then(() => {
              i.setItemWithExpiry("popupTriggered", 24 * 60 * 60 * 1e3), v()
            })
            .catch((n) => {
              if ((console.error("Request failed:", n), n.status !== 409)) {
                l.value = !1
                return
              }
              t.updateContact(k(n.message), r)
                .then(() => {
                  v()
                })
                .catch(() => {
                  l.value = !1
                })
            })
        },
        v = () => {
          ;(l.value = !1),
            setTimeout(() => {
              document
                .getElementById("anchor")
                .scrollIntoView({ behavior: "smooth" })
            }, 100),
            a.push({ path: "/contact/success" })
        },
        k = (p) => {
          const r = /Existing ID: (\d+)/,
            n = p.match(r)
          let y = ""
          return n && n[1] && (y = n[1]), y
        }
      return {
        closeModal: () => {
          e("close")
        },
        isSubmitted: o,
        isLoading: l,
        values: d,
        setFieldValue: I,
        errors: x,
        onSubmit: T,
      }
    },
  },
  L = u("/images/elbow.png"),
  f = u("/images/star.png"),
  j = u("/images/hexagon.png"),
  J = u("/images/icons/close.svg"),
  A = { class: "modal-content" },
  H = ["value"],
  U = { type: "submit", class: "email-button primary-button" },
  Y = { key: 0, class: "loader" }
function G(c, e, a, t, i, l) {
  return (
    m(),
    z(q, { to: "body" }, [
      a.isOpen
        ? (m(),
          g(
            "div",
            {
              key: 0,
              class: "modal-backdrop",
              onClick:
                e[3] ||
                (e[3] = w(
                  (...o) => t.closeModal && t.closeModal(...o),
                  ["self"],
                )),
            },
            [
              s("div", A, [
                e[6] || (e[6] = s("div", { class: "email-accent" }, null, -1)),
                e[7] ||
                  (e[7] = s(
                    "img",
                    {
                      class: "absolute left-[15px] blur-[1px]",
                      src: L,
                      width: "125",
                    },
                    null,
                    -1,
                  )),
                e[8] ||
                  (e[8] = s(
                    "img",
                    {
                      class: "absolute left-[5px] blur-[1px]",
                      src: f,
                      width: "66",
                    },
                    null,
                    -1,
                  )),
                e[9] ||
                  (e[9] = s(
                    "img",
                    {
                      class: "absolute -right-[30px] bottom-[50px] z-10",
                      src: j,
                      width: "77",
                    },
                    null,
                    -1,
                  )),
                e[10] ||
                  (e[10] = s(
                    "img",
                    {
                      class: "absolute right-[10px] bottom-[100px] z-10",
                      src: f,
                      width: "70",
                    },
                    null,
                    -1,
                  )),
                e[11] ||
                  (e[11] = s(
                    "img",
                    {
                      class: "absolute right-[35px] bottom-[50px] z-10",
                      src: f,
                      width: "50",
                    },
                    null,
                    -1,
                  )),
                s(
                  "form",
                  {
                    onSubmit:
                      e[2] ||
                      (e[2] = w(
                        (...o) => t.onSubmit && t.onSubmit(...o),
                        ["prevent"],
                      )),
                    class: "flex flex-col items-center relative z-20",
                  },
                  [
                    s("img", {
                      onClick:
                        e[0] ||
                        (e[0] = (...o) => t.closeModal && t.closeModal(...o)),
                      class: "ml-auto cursor-pointer",
                      src: J,
                      width: "21",
                      height: "21",
                    }),
                    e[4] ||
                      (e[4] = s(
                        "div",
                        { class: "email-title--container" },
                        [
                          s(
                            "h1",
                            { class: "email-title" },
                            " To Expand Your Business Worldwide ",
                          ),
                        ],
                        -1,
                      )),
                    e[5] ||
                      (e[5] = s(
                        "h4",
                        { class: "email-subtitle" },
                        [
                          b(" Send us an "),
                          s("b", null, "email"),
                          b(" and see your business "),
                          s("b", null, "take off"),
                        ],
                        -1,
                      )),
                    s(
                      "input",
                      {
                        value: t.values.email,
                        onInput:
                          e[1] ||
                          (e[1] = (o) =>
                            t.setFieldValue("email", o.target.value)),
                        placeholder: "youremail@email.com",
                        class: N([
                          t.errors.email && t.isSubmitted
                            ? "border-[#D32F2F]"
                            : "border-[#E2E8F0]",
                          "mt-[30px] px-4 py-2 text-[18px] rounded-lg border h-[54px] w-full max-w-[550px]",
                        ]),
                        type: "email",
                      },
                      null,
                      42,
                      H,
                    ),
                    s("button", U, [
                      t.isLoading
                        ? (m(), g("span", Y))
                        : (m(), g(W, { key: 1 }, [b("Submit")], 64)),
                    ]),
                  ],
                  32,
                ),
              ]),
            ],
          ))
        : D("", !0),
    ])
  )
}
const Z = M(R, [
  ["render", G],
  ["__scopeId", "data-v-cfe43881"],
])
export { Z as _, j as a, f as b, L as c }
