import { C as c, _ as r } from "./DMawOjcr.js"
import { j as l, _ as i, c as d, b as m, o as p } from "./C4KZy2MF.js"
import "./B8kaSkiB.js"
import "./DQSFQKQG.js"
import "./6qFfsJfk.js"
const u = {
    data() {
      return { countryList: [] }
    },
    mounted() {
      const e = c.all()
      this.countryList = Object.keys(e)
        .map((t) => ({
          countryName: e[t].countryNameEn,
          countryCallingCode: e[t].countryCallingCode,
          countryCode: e[t].countryCode,
        }))
        .sort((t, a) => t.countryName.localeCompare(a.countryName))
    },
    setup() {
      const e = l([
        {
          title: "High-Risk",
          categories: [
            { name: "Adult Entertainment", selected: !1 },
            { name: "Cryptocurrency and Blockchain Services", selected: !1 },
            { name: "iGaming and Online Gambling", selected: !1 },
            { name: "Tobacco and Vaping Products", selected: !1 },
            { name: "Forex and Trading Platforms", selected: !1 },
            { name: "Cannabis and CBD Products", selected: !1 },
          ],
        },
        {
          title: "Mid-Risk",
          categories: [
            { name: "Electronics and High-Value Goods", selected: !1 },
            { name: "Digital Goods and Software Downloads", selected: !1 },
            { name: "Online Courses and E-Learning", selected: !1 },
            { name: "Others", selected: !1 },
          ],
        },
        {
          title: "Low-Risk",
          categories: [
            { name: "E-commerce", selected: !1 },
            { name: "Education and Training Services", selected: !1 },
            { name: "Online Courses and E-Learning", selected: !1 },
            { name: "Others", selected: !1 },
          ],
        },
      ])
      return {
        sections: e,
        toggleCategory: (a, s) => {
          const n = e[a].categories[s]
          n.selected = !n.selected
        },
      }
    },
  },
  f = {
    class:
      "contact-container flex flex-col gap-4 py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px]",
  }
function g(e, t, a, s, n, _) {
  const o = r
  return p(), d("div", f, [m(o)])
}
const k = i(u, [
  ["render", g],
  ["__scopeId", "data-v-68fd05d9"],
])
export { k as default }
