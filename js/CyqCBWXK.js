import {
  l as e,
  o as t,
  c as s,
  a as o,
  t as n,
  v as r,
  _ as c,
} from "./C4KZy2MF.js"
const _ = e({
    __name: "TagsCard",
    props: { title: {}, tagNumber: {} },
    setup(p) {
      return (a, l) => (
        t(),
        s(
          "div",
          { class: r(`tag-container-${a.tagNumber}`) },
          [o("div", null, n(a.title), 1)],
          2,
        )
      )
    },
  }),
  m = c(_, [["__scopeId", "data-v-c228bc68"]])
export { m as _ }
