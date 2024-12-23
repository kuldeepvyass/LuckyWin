import { g, _ as h } from "./index-fbf0707b.js";
import {
  O as _,
  y as p,
  C as w,
  a0 as y,
  V as d,
  Y as o,
  ab as n,
  R as S,
  P as r,
  a1 as k,
  T as u,
  _ as l,
  Z as C,
} from "./vendor-b2024301.js";
const B = { class: "dialog__container", role: "dialog", tabindex: "0" },
  D = { class: "dialog__container-img" },
  $ = { alt: "" },
  O = { class: "dialog__container-title" },
  T = { class: "dialog__container-content" },
  b = { class: "dialog__container-footer" },
  x = _({
    __name: "HomeDialog",
    props: {
      show: { type: Boolean, default: !1 },
      title: { type: String, default: "" },
      confirmText: { type: String, default: "comfirm" },
      showCancelBtn: { type: Boolean, default: !0 },
      cancelText: { type: String, default: "cancel" },
      clickOutSide: { type: Boolean, default: !1 },
      pathname: { type: String, default: "main/Laundry" },
      picname: { type: String, default: "superjackpotHome" },
    },
    emits: ["update:show", "confirm"],
    setup(t, { emit: i }) {
      const s = t,
        { t: f } = p();
      w(
        () => s.show,
        (e) => {
          e
            ? window.addEventListener("touchmove", c, { passive: !1 })
            : window.removeEventListener("touchmove", c);
        },
      );
      function m(e) {
        s.clickOutSide && i("update:show", !1);
      }
      const c = (e) => {
        s.show && e.preventDefault();
      };
      return (e, a) => {
        const v = y("lazy");
        return (
          r(),
          d(
            "div",
            { class: S(["dialog", { active: t.show, inactive: !t.show }]) },
            [
              o("div", B, [
                o("div", D, [
                  n(
                    e.$slots,
                    "header",
                    {},
                    () => [
                      k(o("img", $, null, 512), [
                        [v, u(g)(t.pathname, t.picname)],
                      ]),
                    ],
                    !0,
                  ),
                ]),
                o("div", O, [
                  n(
                    e.$slots,
                    "title",
                    {},
                    () => [o("h1", null, l(u(f)(t.title)), 1)],
                    !0,
                  ),
                ]),
                o("div", T, [n(e.$slots, "content", {}, void 0, !0)]),
                o("div", b, [
                  n(
                    e.$slots,
                    "footer",
                    {},
                    () => [
                      t.showCancelBtn
                        ? (r(),
                          d(
                            "button",
                            {
                              key: 0,
                              onClick:
                                a[0] ||
                                (a[0] = () => {
                                  i("update:show", !1);
                                }),
                            },
                            l(e.$t(t.cancelText)),
                            1,
                          ))
                        : C("", !0),
                      o(
                        "button",
                        {
                          onClick:
                            a[1] ||
                            (a[1] = () => {
                              i("confirm");
                            }),
                        },
                        l(e.$t(t.confirmText)),
                        1,
                      ),
                    ],
                    !0,
                  ),
                ]),
              ]),
              o("div", { class: "dialog__outside", onClick: m }),
            ],
            2,
          )
        );
      };
    },
  });
const H = h(x, [["__scopeId", "data-v-c1509e82"]]);
export { H as D };
