import { _ as x } from "./B8kaSkiB.js"
import {
  _ as g,
  o as c,
  n as k,
  w as l,
  d as i,
  p,
  c as u,
  a as t,
  b as o,
  l as h,
  i as f,
  g as w,
  H as j,
  r as $,
  B as A,
  v,
  F as y,
  I as D,
} from "./C4KZy2MF.js"
import { u as H } from "./DJTNVrJM.js"
const O = {}
function N(r, n) {
  const s = x
  return (
    c(),
    k(
      s,
      {
        to: "/contact",
        class:
          "z-10 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-4 text-[#2B2C30] font-bold text-xs",
      },
      { default: l(() => n[0] || (n[0] = [i(" Book a Call ")])), _: 1 },
    )
  )
}
const G = g(O, [["render", N]]),
  C = p("/logo.png"),
  S = {},
  F = { class: "page-navigation" },
  I = { class: "flex list-none m-0 p-0 gap-4" }
function M(r, n) {
  const s = x
  return (
    c(),
    u("nav", F, [
      t("ul", I, [
        t("li", null, [
          o(
            s,
            { to: "/" },
            { default: l(() => n[0] || (n[0] = [i("Home")])), _: 1 },
          ),
        ]),
        t("li", null, [
          o(
            s,
            { to: "/about" },
            { default: l(() => n[1] || (n[1] = [i("About Us")])), _: 1 },
          ),
        ]),
        t("li", null, [
          o(
            s,
            { to: "/services" },
            { default: l(() => n[2] || (n[2] = [i("Services")])), _: 1 },
          ),
        ]),
        t("li", null, [
          o(
            s,
            { to: "/careers" },
            { default: l(() => n[3] || (n[3] = [i("Careers")])), _: 1 },
          ),
        ]),
        t("li", null, [
          o(
            s,
            { to: "/contact" },
            { default: l(() => n[4] || (n[4] = [i("Contact Us")])), _: 1 },
          ),
        ]),
      ]),
    ])
  )
}
const z = g(S, [
    ["render", M],
    ["__scopeId", "data-v-57297340"],
  ]),
  U = p("/images/floating-buttons/m-linkedin.svg"),
  T = p("/images/floating-buttons/m-facebook.svg"),
  R = p("/images/floating-buttons/m-whatsapp.svg"),
  _ = {
    linkedIn_url:
      "https://www.linkedin.com/company/fyb-technologiescorporation/",
    facebook_url: "https://www.facebook.com/profile.php?id=61569953282760",
    whatsapp_url:
      "https://api.whatsapp.com/send?phone=%2B639686656197&text=Hi%2C let's talk!",
    skype_url: "https://join.skype.com/invite/p2w93LtDexG9",
  },
  V = {
    key: 0,
    class:
      "backdrop-blur-md fixed inset-y-0 left-0 w-screen h-[calc(100vh-65px)] top-[65px] bottom-0 z-50 flex items-center justify-center lg:hidden",
  },
  P = { class: "p-8 bg-white sidebar-container" },
  q = { class: "space-y-8" },
  E = { class: "font-semibold" },
  J = { class: "font-semibold" },
  Q = { class: "font-semibold" },
  W = { class: "font-semibold" },
  Y = { class: "font-semibold" },
  K = { class: "flex justify-between mt-10" },
  X = ["href"],
  Z = ["href"],
  tt = ["href"],
  et = h({
    __name: "SideBar",
    props: { isOpen: { type: Boolean, required: !0 } },
    emits: ["closeDrawer"],
    setup(r, { emit: n }) {
      return (s, e) => {
        const d = x
        return (
          c(),
          k(
            j,
            { name: "slide" },
            {
              default: l(() => [
                r.isOpen
                  ? (c(),
                    u("aside", V, [
                      t("div", P, [
                        t("ul", q, [
                          t("li", E, [
                            o(
                              d,
                              {
                                to: "/",
                                class: "block text-2xl text-center",
                                onClick:
                                  e[0] ||
                                  (e[0] = (a) => s.$emit("closeDrawer")),
                              },
                              {
                                default: l(() => e[5] || (e[5] = [i("Home")])),
                                _: 1,
                              },
                            ),
                          ]),
                          t("li", J, [
                            o(
                              d,
                              {
                                to: "/about",
                                class: "block text-2xl text-center",
                                onClick:
                                  e[1] ||
                                  (e[1] = (a) => s.$emit("closeDrawer")),
                              },
                              {
                                default: l(
                                  () => e[6] || (e[6] = [i("About Us")]),
                                ),
                                _: 1,
                              },
                            ),
                          ]),
                          t("li", Q, [
                            o(
                              d,
                              {
                                to: "/services",
                                class: "block text-2xl text-center",
                                onClick:
                                  e[2] ||
                                  (e[2] = (a) => s.$emit("closeDrawer")),
                              },
                              {
                                default: l(
                                  () => e[7] || (e[7] = [i("Services")]),
                                ),
                                _: 1,
                              },
                            ),
                          ]),
                          t("li", W, [
                            o(
                              d,
                              {
                                to: "/careers",
                                class: "block text-2xl text-center",
                                onClick:
                                  e[3] ||
                                  (e[3] = (a) => s.$emit("closeDrawer")),
                              },
                              {
                                default: l(
                                  () => e[8] || (e[8] = [i("Careers")]),
                                ),
                                _: 1,
                              },
                            ),
                          ]),
                          t("li", Y, [
                            o(
                              d,
                              {
                                to: "/contact",
                                class: "block text-2xl text-center",
                                onClick:
                                  e[4] ||
                                  (e[4] = (a) => s.$emit("closeDrawer")),
                              },
                              {
                                default: l(
                                  () => e[9] || (e[9] = [i("Contact Us")]),
                                ),
                                _: 1,
                              },
                            ),
                          ]),
                        ]),
                        t("div", K, [
                          t(
                            "a",
                            {
                              class: "icon",
                              href: f(_).linkedIn_url,
                              target: "_blank",
                            },
                            e[10] ||
                              (e[10] = [
                                t(
                                  "img",
                                  { src: U, width: "20", height: "20" },
                                  null,
                                  -1,
                                ),
                              ]),
                            8,
                            X,
                          ),
                          t(
                            "a",
                            {
                              class: "icon",
                              href: f(_).facebook_url,
                              target: "_blank",
                            },
                            e[11] ||
                              (e[11] = [
                                t(
                                  "img",
                                  { src: T, width: "28", height: "28" },
                                  null,
                                  -1,
                                ),
                              ]),
                            8,
                            Z,
                          ),
                          t(
                            "a",
                            {
                              class: "icon",
                              href: f(_).whatsapp_url,
                              target: "_blank",
                            },
                            e[12] ||
                              (e[12] = [
                                t(
                                  "img",
                                  { src: R, width: "24", height: "24" },
                                  null,
                                  -1,
                                ),
                              ]),
                            8,
                            tt,
                          ),
                        ]),
                      ]),
                    ]))
                  : w("", !0),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  st = g(et, [["__scopeId", "data-v-147cd800"]]),
  nt = {
    class:
      "flex items-center justify-between fixed w-screen top-0 lg:top-6 py-4 px-4 sm:px-6 sm:py-[8px] md:px-8 lg:px-16 xl:px-[100px] z-20",
  },
  ot = { class: "flex items-center gap-2 z-10" },
  lt = h({
    __name: "AppHeader",
    setup(r) {
      const n = $(!1),
        s = () => {
          n.value = !n.value
        },
        e = () => {
          n.value = !1
        }
      return (
        A(n, (d) => {
          d
            ? document.body.classList.add("no-scroll")
            : document.body.classList.remove("no-scroll")
        }),
        (d, a) => {
          const m = x,
            b = G
          return (
            c(),
            u(
              y,
              null,
              [
                t("header", nt, [
                  t("div", ot, [
                    t(
                      "div",
                      {
                        class: v([
                          "hamburger flex lg:hidden",
                          { open: n.value },
                        ]),
                        onClick: s,
                      },
                      a[0] ||
                        (a[0] = [
                          t("span", null, null, -1),
                          t("span", null, null, -1),
                          t("span", null, null, -1),
                        ]),
                      2,
                    ),
                    o(
                      m,
                      { to: "/" },
                      {
                        default: l(
                          () =>
                            a[1] ||
                            (a[1] = [
                              t(
                                "img",
                                { class: "w-[100px] md:w-[150px]", src: C },
                                null,
                                -1,
                              ),
                            ]),
                        ),
                        _: 1,
                      },
                    ),
                  ]),
                  o(z, { class: "hidden lg:block" }),
                  o(b),
                ]),
                o(st, { isOpen: n.value, onCloseDrawer: e }, null, 8, [
                  "isOpen",
                ]),
              ],
              64,
            )
          )
        }
      )
    },
  }),
  it = g(lt, [["__scopeId", "data-v-c230a19d"]]),
  rt = p("/images/socials/linkedin.png"),
  at = p("/images/floating-buttons/skype.svg"),
  B = p("/images/floating-buttons/whatsapp.svg"),
  dt = { class: "footer" },
  ct = {
    class:
      "relative z-10 border-t px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 bg-white/30",
  },
  pt = {
    class: "flex flex-col md:flex-row gap-4 justify-between items-center mb-8",
  },
  ut = { class: "flex gap-4 items-center" },
  mt = ["href"],
  _t = ["href"],
  gt = ["href"],
  ft = { class: "grid grid-cols-2 gap-4 justify-between" },
  xt = { class: "col-span-2 md:col-span-1" },
  bt = { class: "flex list-none m-0 p-0 gap-4 justify-center md:justify-end" },
  wt = { class: "text-[12px] screen-425:text-[16px] font-medium" },
  vt = { class: "text-[12px] screen-425:text-[16px] font-medium" },
  ht = { class: "text-[12px] screen-425:text-[16px] font-medium" },
  kt = { class: "text-[12px] screen-425:text-[16px] font-medium" },
  $t = h({
    __name: "Footer",
    setup(r) {
      return (n, s) => {
        const e = x
        return (
          c(),
          u("section", dt, [
            s[9] || (s[9] = t("div", { class: "layer-background" }, null, -1)),
            t("div", ct, [
              t("div", pt, [
                s[3] ||
                  (s[3] = t("img", { class: "w-[152px]", src: C }, null, -1)),
                t("div", ut, [
                  t(
                    "a",
                    { href: f(_).linkedIn_url, target: "_blank" },
                    s[0] ||
                      (s[0] = [t("img", { width: "16", src: rt }, null, -1)]),
                    8,
                    mt,
                  ),
                  t(
                    "a",
                    { href: f(_).skype_url, target: "_blank" },
                    s[1] ||
                      (s[1] = [t("img", { width: "16", src: at }, null, -1)]),
                    8,
                    _t,
                  ),
                  t(
                    "a",
                    { href: f(_).whatsapp_url, target: "_blank" },
                    s[2] ||
                      (s[2] = [t("img", { width: "16", src: B }, null, -1)]),
                    8,
                    gt,
                  ),
                ]),
              ]),
              t("div", ft, [
                s[8] ||
                  (s[8] = t(
                    "div",
                    { class: "col-span-2 md:col-span-1" },
                    [
                      t(
                        "h3",
                        {
                          class:
                            "text-[16px] font-medium text-center md:text-start",
                        },
                        " Â© 2025 FYB Technologies. All rights reserved. ",
                      ),
                    ],
                    -1,
                  )),
                t("div", xt, [
                  t("ul", bt, [
                    t("li", wt, [
                      o(
                        e,
                        { to: "/about" },
                        {
                          default: l(() => s[4] || (s[4] = [i("About Us")])),
                          _: 1,
                        },
                      ),
                    ]),
                    t("li", vt, [
                      o(
                        e,
                        { to: "/services" },
                        {
                          default: l(() => s[5] || (s[5] = [i("Services")])),
                          _: 1,
                        },
                      ),
                    ]),
                    t("li", ht, [
                      o(
                        e,
                        { to: "/careers" },
                        {
                          default: l(() => s[6] || (s[6] = [i("Careers")])),
                          _: 1,
                        },
                      ),
                    ]),
                    t("li", kt, [
                      o(
                        e,
                        { to: "/contact" },
                        {
                          default: l(() => s[7] || (s[7] = [i("Contact Us")])),
                          _: 1,
                        },
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  }),
  yt = g($t, [["__scopeId", "data-v-47131400"]]),
  Ct = {
    setup() {
      const r = $(!0)
      return {
        menuOpen: r,
        toggleMenu: () => {
          r.value = !r.value
        },
        urlConfig: _,
      }
    },
  },
  Bt = p("/images/floating-buttons/telegram.svg"),
  Lt = p("/images/floating-buttons/close.svg"),
  jt = p("/images/floating-buttons/meatballs.svg"),
  At = ["href"],
  Dt = { class: "flex w-[32px] h-[32px] items-center justify-center" }
function Ht(r, n, s, e, d, a) {
  return (
    c(),
    u(
      "div",
      {
        class: v([
          "fixed z-20 bottom-5 right-5 p-2.5 flex items-center justify-center border border-gray-300 rounded-[11px] shadow-md transition-all duration-300 ease-in-out bg-white overflow-hidden",
          e.menuOpen ? "h-[135px]" : "h-[52px]",
        ]),
      },
      [
        e.menuOpen
          ? (c(),
            u(
              "div",
              {
                key: 0,
                class: v([
                  "flex flex-col items-center gap-4 opacity-0 scale-0 transition-opacity duration-300",
                  { "opacity-100 scale-100": e.menuOpen },
                ]),
              },
              [
                t(
                  "a",
                  { href: e.urlConfig.whatsapp_url, target: "_blank" },
                  n[2] ||
                    (n[2] = [
                      t(
                        "img",
                        {
                          class: "cursor-pointer",
                          src: B,
                          width: "22",
                          height: "22",
                        },
                        null,
                        -1,
                      ),
                    ]),
                  8,
                  At,
                ),
                n[3] ||
                  (n[3] = t(
                    "a",
                    {
                      href: "https://t.me/+Rg0LAg61n8hmOWQ9",
                      target: "_blank",
                    },
                    [
                      t("img", {
                        class: "cursor-pointer",
                        src: Bt,
                        width: "20",
                        height: "20",
                      }),
                    ],
                    -1,
                  )),
                t("div", Dt, [
                  t("img", {
                    class: "cursor-pointer",
                    src: Lt,
                    width: "13",
                    height: "13",
                    onClick:
                      n[0] ||
                      (n[0] = (...m) => e.toggleMenu && e.toggleMenu(...m)),
                  }),
                ]),
              ],
              2,
            ))
          : w("", !0),
        e.menuOpen
          ? w("", !0)
          : (c(),
            u("img", {
              key: 1,
              class: "cursor-pointer",
              src: jt,
              width: "32",
              height: "32",
              onClick:
                n[1] || (n[1] = (...m) => e.toggleMenu && e.toggleMenu(...m)),
            })),
      ],
      2,
    )
  )
}
const Ot = g(Ct, [["render", Ht]]),
  Nt = {
    setup() {
      H({
        script: [
          {
            src: "https://www.googletagmanager.com/gtag/js?id=G-PGRSJG2HC0",
            async: !0,
          },
          {
            innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-PGRSJG2HC0');
          `,
            type: "text/javascript",
          },
        ],
      }),
        ((n) => {
          const s =
            document.querySelector("link[rel='icon']") ||
            document.createElement("link")
          s.setAttribute("rel", "icon"),
            s.setAttribute("type", "image/png"),
            s.setAttribute("href", n),
            document.head.appendChild(s)
        })("/favicon.png")
    },
  }
function Gt(r, n, s, e, d, a) {
  const m = it,
    b = yt,
    L = Ot
  return (
    c(),
    u(
      y,
      null,
      [
        o(m),
        t("main", null, [
          D(r.$slots, "default"),
          o(b),
          o(L),
          n[0] ||
            (n[0] = t(
              "noscript",
              null,
              [
                t("iframe", {
                  src: "https://www.googletagmanager.com/ns.html?id=GTM-PQLGB6H5",
                  height: "0",
                  width: "0",
                  style: { display: "none", visibility: "hidden" },
                }),
              ],
              -1,
            )),
        ]),
      ],
      64,
    )
  )
}
const Mt = g(Nt, [["render", Gt]])
export { Mt as default }
