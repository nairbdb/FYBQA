import { _ as h } from "./B8kaSkiB.js"
import { _ as g } from "./VSawREG8.js"
import {
  r as y,
  p as b,
  _ as w,
  c as s,
  a as t,
  e as x,
  F as n,
  f as d,
  g as u,
  b as f,
  o,
  t as p,
  w as F,
} from "./C4KZy2MF.js"
import "./DQSFQKQG.js"
const S = {
    props: { fromHome: { type: Boolean, default: !1 } },
    data() {
      return {
        jobList: [
          {
            title: "Fullstack Developer (Mid - Senior)",
            experience: ["Mid (2.5yrs and up)", "Senior (5yrs and up)"],
            expertise: ["Python", "Angular"],
          },
          {
            title: "Backend Developer - Python (Mid - Senior)",
            experience: ["Mid (2.5yrs and up)", "Senior (5yrs and up)"],
            expertise: ["Python"],
          },
          {
            title: "Backend Developer - C# (Mid - Senior)",
            experience: ["Mid (2.5yrs and up)", "Senior (5yrs and up)"],
            expertise: ["C#"],
          },
          {
            title: "Frontend Developer - Angular (Mid - Senior)",
            experience: ["Mid (2.5yrs and up)", "Senior (5yrs and up)"],
            expertise: ["Angular"],
          },
          {
            title: "Backend Developer - PHP, Laravel (Mid - Senior)",
            experience: ["Mid (2.5yrs and up)", "Senior (5yrs and up)"],
            expertise: ["PHP", "Laravel"],
          },
          {
            title: "Digital Marketing Specialist",
            experience: [],
            expertise: ["Google Ads", "PPC"],
          },
        ],
      }
    },
    setup() {
      const a = y(!1)
      return (a.value = !1), { showModal: a }
    },
  },
  B = b("/images/avatar.png"),
  M = {
    class:
      "services-container flex flex-col gap-4 py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px]",
  },
  C = { class: "services-content-section" },
  k = { key: 0 },
  D = { class: "grid grid-cols-6 gap-2 w-full" },
  L = {
    class:
      "col-span-6 md:col-span-3 lg:col-span-2 w-full flex flex-col items-start justify-between gap-8 py-4 px-8 rounded-2xl shadow-sm bg-[#FFFFFF80] border border-[#FFFFFF80]",
  },
  P = { class: "flex flex-col" },
  j = { class: "flex gap-4 items-center mb-4" },
  A = { class: "text-[18px] font-bold leading-normal" },
  N = { class: "text-[16px] font-medium" },
  V = { class: "flex flex-wrap gap-2 my-4" },
  E = {
    class:
      "text-[10px] font-bold py-1 px-4 rounded-full text-[#CB5BD8] border border-[#CB5BD8] bg-[rgba(203,91,216,0.20)]",
  },
  H = { key: 1 }
function O(a, e, G, c, r, T) {
  const m = h,
    v = g
  return (
    o(),
    s(
      n,
      null,
      [
        t("div", M, [
          e[5] ||
            (e[5] = x(
              '<section class="services-title-section" data-v-38a624e1><div class="services-title-accent" data-v-38a624e1></div><div class="services-title-section__content" data-v-38a624e1><h4 class="services-title-section__tag" data-v-38a624e1>Careers</h4><h1 class="services-title-section__title services-title-section__title--active" data-v-38a624e1>Be part of our team!</h1><p class="services-title-section__description" data-v-38a624e1> FYB Technologies Corporation was founded on the principle of harnessing the exceptional talent of the Philippines. Combining technical expertise with proven sales strategies, we aim to help businesses scale effectively and efficiently. </p></div></section>',
              1,
            )),
          t("section", C, [
            r.jobList.length > 0
              ? (o(),
                s("div", k, [
                  t("div", D, [
                    (o(!0),
                    s(
                      n,
                      null,
                      d(
                        r.jobList,
                        (i, _) => (
                          o(),
                          s("div", L, [
                            t("div", P, [
                              t("div", j, [
                                e[1] ||
                                  (e[1] = t(
                                    "img",
                                    { src: B, width: "48", height: "48" },
                                    null,
                                    -1,
                                  )),
                                t("h3", A, p(i.title), 1),
                              ]),
                              e[2] ||
                                (e[2] = t(
                                  "p",
                                  { class: "text-[14px] font-bold" },
                                  " Experience Level ",
                                  -1,
                                )),
                              (o(!0),
                              s(
                                n,
                                null,
                                d(
                                  i.experience,
                                  (l) => (o(), s("h4", N, p(l), 1)),
                                ),
                                256,
                              )),
                              t("div", V, [
                                (o(!0),
                                s(
                                  n,
                                  null,
                                  d(
                                    i.expertise,
                                    (l) => (o(), s("span", E, p(l), 1)),
                                  ),
                                  256,
                                )),
                              ]),
                            ]),
                            f(
                              m,
                              { to: `/careers/job-details/${_}` },
                              {
                                default: F(
                                  () =>
                                    e[3] ||
                                    (e[3] = [
                                      t(
                                        "div",
                                        {
                                          class: "flex items-center gap-3 py-4",
                                        },
                                        [
                                          t(
                                            "p",
                                            {
                                              class:
                                                "text-[14px] font-bold leading-4",
                                            },
                                            "See Details",
                                          ),
                                          t("img", {
                                            src: "/images/icons/arrow-right.svg",
                                            width: "13",
                                            height: "13",
                                          }),
                                        ],
                                        -1,
                                      ),
                                    ]),
                                ),
                                _: 2,
                              },
                              1032,
                              ["to"],
                            ),
                          ])
                        ),
                      ),
                      256,
                    )),
                  ]),
                ]))
              : u("", !0),
            r.jobList.length === 0
              ? (o(),
                s(
                  "div",
                  H,
                  e[4] ||
                    (e[4] = [
                      x(
                        '<h2 class="text-[36px] font-bold text-[#2B2C30] text-center mb-8" data-v-38a624e1> Weâ€™re Growing Our Team! </h2><h3 class="text-[16px] font-medium text-center mb-8 max-w-[700px] mx-auto" data-v-38a624e1> While we donâ€™t have any openings right now, weâ€™re always on the lookout for talented individuals to join us. Stay tuned for updates or reach out to express your interest! </h3><div class="flex flex-col max-w-[400px] mx-auto rounded-lg border border-white/50 bg-white/50 px-4 py-8 md:p-8" data-v-38a624e1><h2 class="text-[24px] font-bold text-center mb-8" data-v-38a624e1> Send your resume for pooling </h2><a class="btn-email" href="mailto:support@fyb.com" data-v-38a624e1><span class="text-[16px] font-bold text-[#2B2C30]" data-v-38a624e1> hr@fyb-technologies.com </span></a></div>',
                        3,
                      ),
                    ]),
                ))
              : u("", !0),
          ]),
        ]),
        f(
          v,
          {
            isOpen: c.showModal,
            onClose: e[0] || (e[0] = (i) => (c.showModal = !1)),
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
const Y = w(S, [
  ["render", O],
  ["__scopeId", "data-v-38a624e1"],
])
export { Y as default }
