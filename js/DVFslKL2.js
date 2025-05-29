import { _ as h } from "./B8kaSkiB.js"
import {
  _ as d,
  o as i,
  c as n,
  b as a,
  w as v,
  d as C,
  p,
  k,
  l as m,
  m as B,
  e as u,
  a as e,
  t as _,
  F as f,
  f as x,
  n as P,
  g as O,
  r as j,
} from "./C4KZy2MF.js"
import { a as E, b as g, c as M, _ as T } from "./VSawREG8.js"
import { _ as I } from "./6qFfsJfk.js"
import { _ as A } from "./CyqCBWXK.js"
import { _ as D } from "./DMawOjcr.js"
import "./DQSFQKQG.js"
const N = {},
  U = { class: "h-[53px] flex items-center" }
function L(s, t) {
  const r = h
  return (
    i(),
    n("div", U, [
      a(
        r,
        {
          to: "/services",
          class:
            "w-full sm:w-max text-center z-10 bg-white rounded-full px-6 py-4 text-[#2B2C30] font-bold text-xs",
        },
        {
          default: v(() => t[0] || (t[0] = [C(" Explore Our Services ")])),
          _: 1,
        },
      ),
    ])
  )
}
const R = d(N, [["render", L]]),
  H = {},
  z = { class: "h-[53px] flex items-center" }
function V(s, t) {
  const r = h
  return (
    i(),
    n("div", z, [
      a(
        r,
        {
          to: "/contact",
          class: "consultation-button w-full sm:w-max text-center items-center",
        },
        {
          default: v(() => t[0] || (t[0] = [C(" Get a Free Consultation ")])),
          _: 1,
        },
      ),
    ])
  )
}
const W = d(H, [
    ["render", V],
    ["__scopeId", "data-v-2859625c"],
  ]),
  J = p("/images/ring.png"),
  q = () => {
    const s = k()
    return {
      gsap: s.$gsap,
      ScrollToPlugin: s.$ScrollToPlugin,
      ScrollTrigger: s.$ScrollTrigger,
    }
  },
  G = { class: "hero-section" },
  K = { class: "hero-section__content" },
  Q = {
    class:
      "grid grid-cols-2 gap-2 sm:gap-4 mt-8 md:mt-20 items-center justify-center w-full",
  },
  X = { class: "col-span-2 sm:col-span-1 sm:flex justify-end" },
  Y = { class: "col-span-2 sm:col-span-1" },
  Z = m({
    __name: "HeroSection",
    setup(s) {
      const { gsap: t } = q()
      return (
        B(() => {
          t.timeline({ repeat: -1 })
            .to(".cookie", { y: -20, ease: "none" })
            .to(".cookie", { y: 0, ease: "none" })
            .to(".cookie", { y: 20, ease: "none" })
            .to(".cookie", { y: 0, ease: "none" })
        }),
        (r, o) => {
          const c = R,
            l = W
          return (
            i(),
            n("section", G, [
              o[3] ||
                (o[3] = u(
                  '<img class="absolute top-[2rem] left-[1rem] lg:left-[8rem] lg:top-[10rem]" src="' +
                    E +
                    '" width="110" height="110" data-v-f9767db2><img class="hidden lg:block absolute left-[10rem] top-[6.5rem]" src="' +
                    g +
                    '" width="120" height="120" data-v-f9767db2><img class="absolute -right-[2rem] left-unset lg:left-[16rem] -bottom-[7.5rem] lg:-bottom-[4.5rem]" src="' +
                    M +
                    '" width="228" data-v-f9767db2><img class="absolute right-[3rem] left-unset lg:left-[14rem] -bottom-[2rem] lg:bottom-0 blur-[1px]" src="' +
                    g +
                    '" width="184" data-v-f9767db2><img class="hidden lg:block absolute right-[16rem] bottom-[0.5rem]" src="' +
                    J +
                    '" width="102" data-v-f9767db2><img class="absolute right-[16rem] bottom-[4rem]" src="' +
                    g +
                    '" width="120" height="120" data-v-f9767db2><img class="hidden lg:block absolute right-[8rem] top-[8rem]" src="' +
                    I +
                    '" width="150" height="157" data-v-f9767db2><img class="absolute right-[7.5rem] top-[5.5rem]" src="' +
                    g +
                    '" width="120" height="120" data-v-f9767db2>',
                  8,
                )),
              e("div", K, [
                o[0] ||
                  (o[0] = e(
                    "h1",
                    {
                      class:
                        "hero-section__title hero-section__title--active mb-2",
                    },
                    "Outsourcing Excellence",
                    -1,
                  )),
                o[1] ||
                  (o[1] = e(
                    "h1",
                    { class: "hero-section__title" },
                    "with Philippine Talent",
                    -1,
                  )),
                o[2] ||
                  (o[2] = e(
                    "p",
                    { class: "hero-section__description" },
                    " Providing premium IT and sales services that drive business growth. From software development to lead generation, FYB Technologies delivers tailored solutions with a global perspective. ",
                    -1,
                  )),
                e("div", Q, [e("div", X, [a(c)]), e("div", Y, [a(l)])]),
              ]),
            ])
          )
        }
      )
    },
  }),
  tt = d(Z, [["__scopeId", "data-v-f9767db2"]]),
  et = p("/images/partners/pragmatic-payment.png"),
  ot = p("/images/partners/torrospin.png"),
  st = p("/images/partners/comontec.png"),
  it = p("/images/partners/playtech.png"),
  nt = {},
  at = { class: "flex flex-col justify-center mb-14" }
function lt(s, t) {
  return (
    i(),
    n(
      "section",
      at,
      t[0] ||
        (t[0] = [
          u(
            '<h6 class="text-xs font-medium text-[#898989] text-center">Our Partners</h6><div class="grid grid-cols-4 gap-4 sm:gap-14 mt-8 max-w-[725px] mx-auto px-4 sm:px-8"><div class="col-span-4 sm:col-span-1"><img src="' +
              et +
              '" class="w-[160px] h-14 object-contain aspect-[3/2]"></div><div class="col-span-4 sm:col-span-1"><img src="' +
              ot +
              '" class="w-[160px] h-14 object-contain aspect-[3/2]"></div><div class="col-span-4 sm:col-span-1"><img src="' +
              st +
              '" class="w-[160px] h-14 object-contain aspect-[3/2]"></div><div class="col-span-4 sm:col-span-1"><img src="' +
              it +
              '" class="w-[160px] h-14 object-contain aspect-[3/2]"></div></div>',
            2,
          ),
        ]),
    )
  )
}
const rt = d(nt, [["render", lt]]),
  ct = {
    class:
      "col-span-6 md:col-span-3 lg:col-span-2 w-full flex flex-col items-start justify-between gap-8 py-4 px-8 rounded-2xl shadow-sm bg-[#FFFFFF80] border border-[#FFFFFF80]",
  },
  dt = { class: "flex flex-col gap-4" },
  pt = {
    class: "flex items-center justify-center bg-[#F5F9FB] w-10 h-10 rounded-lg",
  },
  mt = ["src"],
  gt = { class: "flex flex-col gap-2 items-start justify-center" },
  _t = { class: "text-lg font-bold text-[#2B2C30]" },
  ut = { class: "text-xs font-medium text-[#2B2C30]" },
  ft = { key: 0 },
  xt = m({
    __name: "OurServiceCard",
    props: { title: {}, description: {}, icon: {}, tags: {} },
    setup(s) {
      return (t, r) => {
        const o = A
        return (
          i(),
          n("div", ct, [
            e("div", dt, [
              e("div", pt, [
                e(
                  "img",
                  {
                    src: `/images/icons/${t.icon}.svg`,
                    width: "26",
                    height: "22",
                    class: "w-[26px] h-[22px]",
                  },
                  null,
                  8,
                  mt,
                ),
              ]),
              e("div", gt, [
                e("h1", _t, _(t.title), 1),
                e("p", ut, _(t.description), 1),
              ]),
              t.tags
                ? (i(),
                  n("div", ft, [
                    (i(!0),
                    n(
                      f,
                      null,
                      x(
                        t.tags,
                        (c) => (
                          i(),
                          P(
                            o,
                            { title: c.title, tagNumber: c.tagColor },
                            null,
                            8,
                            ["title", "tagNumber"],
                          )
                        ),
                      ),
                      256,
                    )),
                  ]))
                : O("", !0),
            ]),
          ])
        )
      }
    },
  }),
  ht = {
    class:
      "flex flex-col items-center justify-center gap-16 relative max-w-[1240px] mx-auto px-4",
  },
  vt = { class: "grid grid-cols-6 gap-4 w-full" },
  Ct = m({
    __name: "OurServiceSection",
    setup(s) {
      const t = [
        {
          title: "Custom Software Development",
          description:
            "Build scalable, efficient, and robust software to meet your business goals.",
          icon: "brace",
          tags: [
            { title: "C# .Net", tagColor: 1 },
            { title: "PHP Laravel", tagColor: 2 },
            { title: "Python", tagColor: 3 },
            { title: "NodeJS (NestJS)", tagColor: 4 },
            { title: "React", tagColor: 5 },
            { title: "VueJS", tagColor: 2 },
            { title: "Javascript", tagColor: 1 },
            { title: "Angular", tagColor: 3 },
          ],
        },
        {
          title: "Sales Outsourcing",
          description:
            "Build scalable, efficient, and robust software to meet your business goals.",
          icon: "dollar",
          tags: [
            { title: "HubSpot", tagColor: 1 },
            { title: "CRM Engagement", tagColor: 2 },
            { title: "Sales Strategy Development", tagColor: 3 },
            { title: "Lead generation", tagColor: 4 },
            { title: "Market research", tagColor: 5 },
            { title: "Competitor Analysis", tagColor: 2 },
          ],
        },
        {
          title: "UI/UX Design",
          description: "Craft user-centric designs that captivate and engage.",
          icon: "uiux",
          tags: [
            { title: "Adobe Creative Suite", tagColor: 1 },
            { title: "Prototyping", tagColor: 2 },
            { title: "Mobile App Design", tagColor: 3 },
            { title: "User Interface", tagColor: 4 },
            { title: "Figma", tagColor: 5 },
            { title: "Product Design", tagColor: 2 },
            { title: "User Experience", tagColor: 1 },
          ],
        },
        {
          title: "Quality Assurance & Testing",
          description:
            "Ensure flawless functionality with our dedicated QA team.",
          icon: "check",
          tags: [
            { title: "Katalon", tagColor: 1 },
            { title: "Cypress", tagColor: 2 },
            { title: "Selenium", tagColor: 3 },
            { title: "Postman", tagColor: 4 },
            { title: "SQL", tagColor: 5 },
            { title: "Automation", tagColor: 2 },
            { title: "Manual", tagColor: 1 },
          ],
        },
        {
          title: "Digital Marketing",
          description:
            "Maximize your online presence and attract the right audience.",
          icon: "quote",
          tags: [
            { title: "SEO", tagColor: 1 },
            { title: "Email Marketing", tagColor: 2 },
            { title: "Social Media Marketing", tagColor: 3 },
            { title: "Web Analytics", tagColor: 4 },
            { title: "Data Analysis", tagColor: 5 },
            { title: "Conversion Rate Optimization", tagColor: 2 },
          ],
        },
        {
          title: "DevOps Services",
          description:
            "Let us handle your IT infrastructure for seamless operations.",
          icon: "slash",
          tags: [
            { title: "CI/CD", tagColor: 1 },
            { title: "Infrastructure as Code (IaC)", tagColor: 2 },
            { title: "Cloud Management", tagColor: 3 },
            { title: "DevSecOps", tagColor: 4 },
            { title: "Automation & Scripting", tagColor: 5 },
            { title: "Performance Optimization", tagColor: 2 },
          ],
        },
        {
          title: "Technical Support",
          description:
            "Delivering prompt and effective technical solutions to keep your systems running smoothly.",
          icon: "headset",
          tags: [
            { title: "Problem-Solving", tagColor: 1 },
            { title: "Troubleshooting", tagColor: 2 },
            { title: "Software and Hardware knowledge", tagColor: 3 },
            { title: "Knowledge Base Creation", tagColor: 4 },
            { title: "Network and system administration", tagColor: 5 },
          ],
        },
        {
          title: "Customer Support",
          description:
            "Providing exceptional customer care to enhance user satisfaction and loyalty.",
          icon: "gear",
          tags: [
            { title: "Multi-Channel Support", tagColor: 1 },
            { title: "Issue Tracking", tagColor: 2 },
            { title: "Product Knowledge", tagColor: 3 },
            { title: "CRM and data management", tagColor: 4 },
            { title: "Reporting", tagColor: 5 },
          ],
        },
      ]
      return (r, o) => {
        const c = xt
        return (
          i(),
          n("section", ht, [
            o[0] ||
              (o[0] = u(
                '<div class="layer-background" data-v-87d65bc9></div><div class="flex flex-col items-center justify-center gap-4 max-w-2xl" data-v-87d65bc9><h1 class="title" data-v-87d65bc9>Our Services</h1><h3 class="text-center text-3xl font-bold text-[#2B2C30]" data-v-87d65bc9>Unlock Business Growth with Expert Outsourcing</h3><p class="text-center text-xs font-medium text-[#2B2C30]" data-v-87d65bc9>Enhance operations efficiently with our tailored outsourcing solutions today.</p></div>',
                2,
              )),
            e("div", vt, [
              (i(),
              n(
                f,
                null,
                x(t, (l) =>
                  a(
                    c,
                    {
                      title: l.title,
                      description: l.description,
                      icon: l.icon,
                      tags: l.tags,
                    },
                    null,
                    8,
                    ["title", "description", "icon", "tags"],
                  ),
                ),
                64,
              )),
            ]),
          ])
        )
      }
    },
  }),
  bt = d(Ct, [["__scopeId", "data-v-87d65bc9"]]),
  wt = {
    class:
      "col-span-2 md:col-span-1 w-full h-full overflow-hidden max-h-[292px] flex flex-col items-start justify-between gap-8 rounded-2xl shadow-sm bg-[#FFFFFF80] border border-[#FFFFFF80]",
  },
  yt = { class: "flex items-center" },
  $t = {
    class: "flex flex-col gap-2 items-start justify-center py-4 px-8 flex-1",
  },
  St = { class: "text-lg font-bold text-[#2B2C30]" },
  Ft = { class: "text-xs font-medium text-[#2B2C30]" },
  kt = ["src"],
  Bt = m({
    __name: "WhyUsCard",
    props: { title: {}, description: {}, image: {} },
    setup(s) {
      return (t, r) => (
        i(),
        n("div", wt, [
          e("div", yt, [
            e("div", $t, [
              e("h1", St, _(t.title), 1),
              e("p", Ft, _(t.description), 1),
            ]),
            e(
              "img",
              {
                src: `/images/expert/${t.image}.png`,
                width: "450",
                height: "325",
                class: "h-auto max-w-[40%] object-contain",
              },
              null,
              8,
              kt,
            ),
          ]),
        ])
      )
    },
  }),
  Pt = {
    class:
      "flex flex-col items-center justify-center gap-16 relative my-32 max-w-[1240px] mx-auto px-4",
  },
  Ot = { class: "grid grid-cols-2 gap-4 w-full" },
  jt = m({
    __name: "WhyUsSection",
    setup(s) {
      const t = [
        {
          title: "Expert Sales & IT Teams",
          description:
            "Professional Philippine-based teams specializing in tech and sales.",
          image: "it-expert",
        },
        {
          title: "Cost-Efficient Solutions",
          description: "High-quality experts at competitive rates.",
          image: "cost-expert",
        },
        {
          title: "Proven Sales Strategies",
          description:
            "Tailored approaches to close more deals and maximize ROI.",
          image: "sales-expert",
        },
        {
          title: "Agile Development & Execution",
          description: "Rapid delivery without compromising on quality.",
          image: "agile-expert",
        },
      ]
      return (r, o) => {
        const c = Bt
        return (
          i(),
          n("section", Pt, [
            o[0] ||
              (o[0] = u(
                '<div class="layer-background" data-v-cf8458c1></div><div class="flex flex-col items-center justify-center gap-4 max-w-2xl" data-v-cf8458c1><h1 class="title" data-v-cf8458c1>Why Choose Us</h1><h3 class="text-center text-3xl font-bold text-[#2B2C30]" data-v-cf8458c1>Empowering Success, Delivering Excellence.</h3><p class="text-center text-xs font-medium text-[#2B2C30]" data-v-cf8458c1>Innovative outsourcing solutions driving efficiency, growth, success, and customer satisfaction.</p></div>',
                2,
              )),
            e("div", Ot, [
              (i(),
              n(
                f,
                null,
                x(t, (l) =>
                  a(
                    c,
                    {
                      title: l.title,
                      description: l.description,
                      image: l.image,
                    },
                    null,
                    8,
                    ["title", "description", "image"],
                  ),
                ),
                64,
              )),
            ]),
          ])
        )
      }
    },
  }),
  Et = d(jt, [["__scopeId", "data-v-cf8458c1"]]),
  Mt = {
    setup() {
      const s = j(!1)
      return (s.value = !1), { showModal: s }
    },
  },
  Tt = { class: "flex flex-col gap-4" }
function It(s, t, r, o, c, l) {
  const b = tt,
    w = rt,
    y = bt,
    $ = Et,
    S = D,
    F = T
  return (
    i(),
    n(
      f,
      null,
      [
        e("div", Tt, [a(b), a(w), a(y), a($), a(S, { fromHome: !0 })]),
        a(
          F,
          {
            isOpen: o.showModal,
            onClose: t[0] || (t[0] = (At) => (o.showModal = !1)),
          },
          null,
          8,
          ["isOpen"],
        ),
      ],
      64,
    )
  )
}
const Vt = d(Mt, [["render", It]])
export { Vt as default }
