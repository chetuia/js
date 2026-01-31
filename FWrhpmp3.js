var Sc = Object.defineProperty;
var Tc = (r, e, t) => e in r ? Sc(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var I = (r, e, t) => Tc(r, typeof e != "symbol" ? e + "" : e, t);
import {ak as F0, ao as ms, a1 as Fo, ab as sr, a_ as _o, a6 as $o, d as oe, aM as Hn, cz as Mc, cA as Ic, bD as Po, a2 as Ho, an as Cc, r as z, bv as Rc, al as qo, y as W, C as Ke, n as zt, o as Ne, bn as _0, j as ge, a as S, B as Le, k as Z, aA as ha, b as A, l as nt, f as pe, i as k, g as J, c as B, a4 as Qt, w as jt, aK as u0, bC as Ec, F as Te, cB as Bc, cC as zc, h as ut, t as xe, cD as Lc, cE as Oc, aH as Qo, cF as Nc, cG as Dc, e as Je, aq as L0, cH as Fc, a7 as Go, a$ as Uo, am as _c, au as $c, cI as Pc, a5 as lr, bP as Hc, cJ as qn, cK as Qn, ai as qc, aQ as Qc, x as ma, z as Hs, D as cr, a9 as Wr, _ as ye, E as Gc, ad as ft, aB as St, bs as gr, I as bt, s as pa, A as fa, cL as Uc, m as ur, cM as Vc, cN as va, cO as qs, H as ga, bR as jc, cP as Gn, bJ as Wc, bz as Tr, bd as ps, p as Gt, J as Qs, cQ as Kc, cR as Yc, b5 as fs, bf as Xc, cb as Zc, cS as Jc, cT as eu, v as Vo, cU as tu, q as ru, u as au} from "./Ij77oMo4.js";
import {m as ue} from "./f0AmJp6Q.js";
import su from "./syh7T_eE.js";
import {g as Q0, a as V0, b as nr, c as m0, s as G0} from "./BIntkiJL.js";
import {l as nu, a as iu, p as ou, M as lu} from "./B1fikEfm.js";
import {v as jo} from "./iwrAQXq7.js";
import {l as Un, q as cu} from "./DkI7IyGz.js";
import {s as j0} from "./DyeWYEZ2.js";
import {c as Kr} from "./C5WPrDgV.js";
import {S as Vn, a as uu, u as du, D as hu} from "./DZXK4h8R.js";
import {E as mu} from "./DsC8SnVp.js";
import {E as pu} from "./B-oxBaZo.js";
import {t as Ra} from "./CHBHFe33.js";
import {u as fu, E as vu} from "./DMa62sTc.js";
import {a as gu} from "./OJlQOBs3.js";
import {c as yu} from "./D7nBXFy0.js";
import {d as Wo} from "./zVUO_rnh.js";
import {i as Au} from "./B1PUzC5B.js";
import {E as bu, a as wu} from "./BGuBF-K1.js";
import "./DxRt3ERc.js";
import "./BIPP78dK.js";
import {S as rr} from "./h_sTEVc5.js";
import {u as Mr, o as xu} from "./Dw6-XbiV.js";
import ku from "./Bb3aSshC.js";
import {O as Su} from "./Dp4N1ZjB.js";
import "./CuWg-W5_.js";
import "./JTEd2kA9.js";
import "./CiS8iwFx.js";
import "./CM8l2G9P.js";
import "./BETc0Ptc.js";
import "./BB_Ol6Sd.js";
import "./DbRIAUGC.js";
import "./BgS6gxu1.js";
import "./BTcj5WT8.js";
import "./Cq9Fpw4b.js";
import "./Dx81t-jJ.js";
import "./BJ-87wkK.js";
import "./aCxlf8N4.js";
import "./DYOv8qo0.js";
import "./XLzG4qn7.js";
import "./BkerUgGO.js";
import "./Dlxlc5pu.js";
import "./D8plD7oY.js";
import "./-3xLS2Vc.js";
import "./C7wL65q2.js";
const Tu = (r, e) => {
    if (!F0 || !r || !e)
        return !1;
    const t = r.getBoundingClientRect();
    let a;
    return e instanceof Element ? a = e.getBoundingClientRect() : a = {
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
        left: 0
    },
    t.top < a.bottom && t.bottom > a.top && t.right > a.left && t.left < a.right
}
  , Mu = Fo({
    urlList: {
        type: sr(Array),
        default: () => _o([])
    },
    zIndex: {
        type: Number
    },
    initialIndex: {
        type: Number,
        default: 0
    },
    infinite: {
        type: Boolean,
        default: !0
    },
    hideOnClickModal: Boolean,
    teleported: Boolean,
    closeOnPressEscape: {
        type: Boolean,
        default: !0
    },
    zoomRate: {
        type: Number,
        default: 1.2
    },
    minScale: {
        type: Number,
        default: .2
    },
    maxScale: {
        type: Number,
        default: 7
    },
    showProgress: {
        type: Boolean,
        default: !1
    },
    crossorigin: {
        type: sr(String)
    }
})
  , Iu = {
    close: () => !0,
    switch: r => ms(r),
    rotate: r => ms(r)
}
  , Cu = oe({
    name: "ElImageViewer"
})
  , Ru = oe({
    ...Cu,
    props: Mu,
    emits: Iu,
    setup(r, {expose: e, emit: t}) {
        var a;
        const s = r
          , n = {
            CONTAIN: {
                name: "contain",
                icon: Hn(Ic)
            },
            ORIGINAL: {
                name: "original",
                icon: Hn(Mc)
            }
        };
        let i, l = "";
        const {t: u} = Po()
          , d = Ho("image-viewer")
          , {nextZIndex: m} = Cc()
          , f = z()
          , b = z([])
          , g = Rc()
          , w = z(!0)
          , M = z(s.initialIndex)
          , E = qo(n.CONTAIN)
          , R = z({
            scale: 1,
            deg: 0,
            offsetX: 0,
            offsetY: 0,
            enableTransition: !1
        })
          , N = z((a = s.zIndex) != null ? a : m())
          , C = W( () => {
            const {urlList: K} = s;
            return K.length <= 1
        }
        )
          , L = W( () => M.value === 0)
          , D = W( () => M.value === s.urlList.length - 1)
          , _ = W( () => s.urlList[M.value])
          , q = W( () => [d.e("btn"), d.e("prev"), d.is("disabled", !s.infinite && L.value)])
          , j = W( () => [d.e("btn"), d.e("next"), d.is("disabled", !s.infinite && D.value)])
          , se = W( () => {
            const {scale: K, deg: De, offsetX: Me, offsetY: Ue, enableTransition: tt} = R.value;
            let lt = Me / K
              , gt = Ue / K;
            const he = De * Math.PI / 180
              , ve = Math.cos(he)
              , rt = Math.sin(he);
            lt = lt * ve + gt * rt,
            gt = gt * ve - Me / K * rt;
            const ct = {
                transform: `scale(${K}) rotate(${De}deg) translate(${lt}px, ${gt}px)`,
                transition: tt ? "transform .3s" : ""
            };
            return E.value.name === n.CONTAIN.name && (ct.maxWidth = ct.maxHeight = "100%"),
            ct
        }
        )
          , Ee = W( () => `${M.value + 1} / ${s.urlList.length}`);
        function Be() {
            ne(),
            i == null || i(),
            document.body.style.overflow = l,
            t("close")
        }
        function Ae() {
            const K = Ra(Me => {
                switch (Me.code) {
                case L0.esc:
                    s.closeOnPressEscape && Be();
                    break;
                case L0.space:
                    ke();
                    break;
                case L0.left:
                    qe();
                    break;
                case L0.up:
                    ze("zoomIn");
                    break;
                case L0.right:
                    Qe();
                    break;
                case L0.down:
                    ze("zoomOut");
                    break
                }
            }
            )
              , De = Ra(Me => {
                const Ue = Me.deltaY || Me.deltaX;
                ze(Ue < 0 ? "zoomIn" : "zoomOut", {
                    zoomRate: s.zoomRate,
                    enableTransition: !1
                })
            }
            );
            g.run( () => {
                _0(document, "keydown", K),
                _0(document, "wheel", De)
            }
            )
        }
        function ne() {
            g.stop()
        }
        function le() {
            w.value = !1
        }
        function ce(K) {
            w.value = !1,
            K.target.alt = u("el.image.error")
        }
        function Q(K) {
            if (w.value || K.button !== 0 || !f.value)
                return;
            R.value.enableTransition = !1;
            const {offsetX: De, offsetY: Me} = R.value
              , Ue = K.pageX
              , tt = K.pageY
              , lt = Ra(he => {
                R.value = {
                    ...R.value,
                    offsetX: De + he.pageX - Ue,
                    offsetY: Me + he.pageY - tt
                }
            }
            )
              , gt = _0(document, "mousemove", lt);
            _0(document, "mouseup", () => {
                gt()
            }
            ),
            K.preventDefault()
        }
        function de() {
            R.value = {
                scale: 1,
                deg: 0,
                offsetX: 0,
                offsetY: 0,
                enableTransition: !1
            }
        }
        function ke() {
            if (w.value)
                return;
            const K = Fc(n)
              , De = Object.values(n)
              , Me = E.value.name
              , tt = (De.findIndex(lt => lt.name === Me) + 1) % K.length;
            E.value = n[K[tt]],
            de()
        }
        function He(K) {
            const De = s.urlList.length;
            M.value = (K + De) % De
        }
        function qe() {
            L.value && !s.infinite || He(M.value - 1)
        }
        function Qe() {
            D.value && !s.infinite || He(M.value + 1)
        }
        function ze(K, De={}) {
            if (w.value)
                return;
            const {minScale: Me, maxScale: Ue} = s
              , {zoomRate: tt, rotateDeg: lt, enableTransition: gt} = {
                zoomRate: s.zoomRate,
                rotateDeg: 90,
                enableTransition: !0,
                ...De
            };
            switch (K) {
            case "zoomOut":
                R.value.scale > Me && (R.value.scale = Number.parseFloat((R.value.scale / tt).toFixed(3)));
                break;
            case "zoomIn":
                R.value.scale < Ue && (R.value.scale = Number.parseFloat((R.value.scale * tt).toFixed(3)));
                break;
            case "clockwise":
                R.value.deg += lt,
                t("rotate", R.value.deg);
                break;
            case "anticlockwise":
                R.value.deg -= lt,
                t("rotate", R.value.deg);
                break
            }
            R.value.enableTransition = gt
        }
        function Xe(K) {
            var De;
            ((De = K.detail) == null ? void 0 : De.focusReason) === "pointer" && K.preventDefault()
        }
        function Nt() {
            s.closeOnPressEscape && Be()
        }
        function ot(K) {
            if (K.ctrlKey) {
                if (K.deltaY < 0)
                    return K.preventDefault(),
                    !1;
                if (K.deltaY > 0)
                    return K.preventDefault(),
                    !1
            }
        }
        return Ke(_, () => {
            zt( () => {
                const K = b.value[0];
                K != null && K.complete || (w.value = !0)
            }
            )
        }
        ),
        Ke(M, K => {
            de(),
            t("switch", K)
        }
        ),
        Ne( () => {
            Ae(),
            i = _0("wheel", ot, {
                passive: !1
            }),
            l = document.body.style.overflow,
            document.body.style.overflow = "hidden"
        }
        ),
        e({
            setActiveItem: He
        }),
        (K, De) => (S(),
        ge(k(pu), {
            to: "body",
            disabled: !K.teleported
        }, {
            default: Le( () => [Z(ha, {
                name: "viewer-fade",
                appear: ""
            }, {
                default: Le( () => [A("div", {
                    ref_key: "wrapper",
                    ref: f,
                    tabindex: -1,
                    class: pe(k(d).e("wrapper")),
                    style: nt({
                        zIndex: N.value
                    })
                }, [Z(k(mu), {
                    loop: "",
                    trapped: "",
                    "focus-trap-el": f.value,
                    "focus-start-el": "container",
                    onFocusoutPrevented: Xe,
                    onReleaseRequested: Nt
                }, {
                    default: Le( () => [A("div", {
                        class: pe(k(d).e("mask")),
                        onClick: jt(Me => K.hideOnClickModal && Be(), ["self"])
                    }, null, 10, ["onClick"]), J(" CLOSE "), A("span", {
                        class: pe([k(d).e("btn"), k(d).e("close")]),
                        onClick: Be
                    }, [Z(k(u0), null, {
                        default: Le( () => [Z(k(Ec))]),
                        _: 1
                    })], 2), J(" ARROW "), k(C) ? J("v-if", !0) : (S(),
                    B(Te, {
                        key: 0
                    }, [A("span", {
                        class: pe(k(q)),
                        onClick: qe
                    }, [Z(k(u0), null, {
                        default: Le( () => [Z(k(Bc))]),
                        _: 1
                    })], 2), A("span", {
                        class: pe(k(j)),
                        onClick: Qe
                    }, [Z(k(u0), null, {
                        default: Le( () => [Z(k(zc))]),
                        _: 1
                    })], 2)], 64)), K.$slots.progress || K.showProgress ? (S(),
                    B("div", {
                        key: 1,
                        class: pe([k(d).e("btn"), k(d).e("progress")])
                    }, [Qt(K.$slots, "progress", {
                        activeIndex: M.value,
                        total: K.urlList.length
                    }, () => [ut(xe(k(Ee)), 1)])], 2)) : J("v-if", !0), J(" ACTIONS "), A("div", {
                        class: pe([k(d).e("btn"), k(d).e("actions")])
                    }, [A("div", {
                        class: pe(k(d).e("actions__inner"))
                    }, [Qt(K.$slots, "toolbar", {
                        actions: ze,
                        prev: qe,
                        next: Qe,
                        reset: ke,
                        activeIndex: M.value,
                        setActiveItem: He
                    }, () => [Z(k(u0), {
                        onClick: Me => ze("zoomOut")
                    }, {
                        default: Le( () => [Z(k(Lc))]),
                        _: 1
                    }, 8, ["onClick"]), Z(k(u0), {
                        onClick: Me => ze("zoomIn")
                    }, {
                        default: Le( () => [Z(k(Oc))]),
                        _: 1
                    }, 8, ["onClick"]), A("i", {
                        class: pe(k(d).e("actions__divider"))
                    }, null, 2), Z(k(u0), {
                        onClick: ke
                    }, {
                        default: Le( () => [(S(),
                        ge(Qo(k(E).icon)))]),
                        _: 1
                    }), A("i", {
                        class: pe(k(d).e("actions__divider"))
                    }, null, 2), Z(k(u0), {
                        onClick: Me => ze("anticlockwise")
                    }, {
                        default: Le( () => [Z(k(Nc))]),
                        _: 1
                    }, 8, ["onClick"]), Z(k(u0), {
                        onClick: Me => ze("clockwise")
                    }, {
                        default: Le( () => [Z(k(Dc))]),
                        _: 1
                    }, 8, ["onClick"])])], 2)], 2), J(" CANVAS "), A("div", {
                        class: pe(k(d).e("canvas"))
                    }, [(S(!0),
                    B(Te, null, Je(K.urlList, (Me, Ue) => (S(),
                    B(Te, {
                        key: Ue
                    }, [Ue === M.value ? (S(),
                    B("img", {
                        key: 0,
                        ref_for: !0,
                        ref: tt => b.value[Ue] = tt,
                        src: Me,
                        style: nt(k(se)),
                        class: pe(k(d).e("img")),
                        crossorigin: K.crossorigin,
                        onLoad: le,
                        onError: ce,
                        onMousedown: Q
                    }, null, 46, ["src", "crossorigin"])) : J("v-if", !0)], 64))), 128))], 2), Qt(K.$slots, "default")]),
                    _: 3
                }, 8, ["focus-trap-el"])], 6)]),
                _: 3
            })]),
            _: 3
        }, 8, ["disabled"]))
    }
});
var Eu = $o(Ru, [["__file", "image-viewer.vue"]]);
const Bu = Go(Eu)
  , zu = Fo({
    hideOnClickModal: Boolean,
    src: {
        type: String,
        default: ""
    },
    fit: {
        type: String,
        values: ["", "contain", "cover", "fill", "none", "scale-down"],
        default: ""
    },
    loading: {
        type: String,
        values: ["eager", "lazy"]
    },
    lazy: Boolean,
    scrollContainer: {
        type: sr([String, Object])
    },
    previewSrcList: {
        type: sr(Array),
        default: () => _o([])
    },
    previewTeleported: Boolean,
    zIndex: {
        type: Number
    },
    initialIndex: {
        type: Number,
        default: 0
    },
    infinite: {
        type: Boolean,
        default: !0
    },
    closeOnPressEscape: {
        type: Boolean,
        default: !0
    },
    zoomRate: {
        type: Number,
        default: 1.2
    },
    minScale: {
        type: Number,
        default: .2
    },
    maxScale: {
        type: Number,
        default: 7
    },
    showProgress: {
        type: Boolean,
        default: !1
    },
    crossorigin: {
        type: sr(String)
    }
})
  , Lu = {
    load: r => r instanceof Event,
    error: r => r instanceof Event,
    switch: r => ms(r),
    close: () => !0,
    show: () => !0
}
  , Ou = oe({
    name: "ElImage",
    inheritAttrs: !1
})
  , Nu = oe({
    ...Ou,
    props: zu,
    emits: Lu,
    setup(r, {expose: e, emit: t}) {
        const a = r
          , {t: s} = Po()
          , n = Ho("image")
          , i = Uo()
          , l = W( () => _c(Object.entries(i).filter( ([Q]) => /^(data-|on[A-Z])/i.test(Q) || ["id", "style"].includes(Q))))
          , u = fu({
            excludeListeners: !0,
            excludeKeys: W( () => Object.keys(l.value))
        })
          , d = z()
          , m = z(!1)
          , f = z(!0)
          , b = z(!1)
          , g = z()
          , w = z()
          , M = F0 && "loading"in HTMLImageElement.prototype;
        let E;
        const R = W( () => [n.e("inner"), C.value && n.e("preview"), f.value && n.is("loading")])
          , N = W( () => {
            const {fit: Q} = a;
            return F0 && Q ? {
                objectFit: Q
            } : {}
        }
        )
          , C = W( () => {
            const {previewSrcList: Q} = a;
            return $c(Q) && Q.length > 0
        }
        )
          , L = W( () => {
            const {previewSrcList: Q, initialIndex: de} = a;
            let ke = de;
            return de > Q.length - 1 && (ke = 0),
            ke
        }
        )
          , D = W( () => a.loading === "eager" ? !1 : !M && a.loading === "lazy" || a.lazy)
          , _ = () => {
            F0 && (f.value = !0,
            m.value = !1,
            d.value = a.src)
        }
        ;
        function q(Q) {
            f.value = !1,
            m.value = !1,
            t("load", Q)
        }
        function j(Q) {
            f.value = !1,
            m.value = !0,
            t("error", Q)
        }
        function se() {
            Tu(g.value, w.value) && (_(),
            Ae())
        }
        const Ee = Pc(se, 200, !0);
        async function Be() {
            var Q;
            if (!F0)
                return;
            await zt();
            const {scrollContainer: de} = a;
            qc(de) ? w.value = de : Qc(de) && de !== "" ? w.value = (Q = document.querySelector(de)) != null ? Q : void 0 : g.value && (w.value = gu(g.value)),
            w.value && (E = _0(w, "scroll", Ee),
            setTimeout( () => se(), 100))
        }
        function Ae() {
            !F0 || !w.value || !Ee || (E == null || E(),
            w.value = void 0)
        }
        function ne() {
            C.value && (b.value = !0,
            t("show"))
        }
        function le() {
            b.value = !1,
            t("close")
        }
        function ce(Q) {
            t("switch", Q)
        }
        return Ke( () => a.src, () => {
            D.value ? (f.value = !0,
            m.value = !1,
            Ae(),
            Be()) : _()
        }
        ),
        Ne( () => {
            D.value ? Be() : _()
        }
        ),
        e({
            showPreview: ne
        }),
        (Q, de) => (S(),
        B("div", lr({
            ref_key: "container",
            ref: g
        }, k(l), {
            class: [k(n).b(), Q.$attrs.class]
        }), [m.value ? Qt(Q.$slots, "error", {
            key: 0
        }, () => [A("div", {
            class: pe(k(n).e("error"))
        }, xe(k(s)("el.image.error")), 3)]) : (S(),
        B(Te, {
            key: 1
        }, [d.value !== void 0 ? (S(),
        B("img", lr({
            key: 0
        }, k(u), {
            src: d.value,
            loading: Q.loading,
            style: k(N),
            class: k(R),
            crossorigin: Q.crossorigin,
            onClick: ne,
            onLoad: q,
            onError: j
        }), null, 16, ["src", "loading", "crossorigin"])) : J("v-if", !0), f.value ? (S(),
        B("div", {
            key: 1,
            class: pe(k(n).e("wrapper"))
        }, [Qt(Q.$slots, "placeholder", {}, () => [A("div", {
            class: pe(k(n).e("placeholder"))
        }, null, 2)])], 2)) : J("v-if", !0)], 64)), k(C) ? (S(),
        B(Te, {
            key: 2
        }, [b.value ? (S(),
        ge(k(Bu), {
            key: 0,
            "z-index": Q.zIndex,
            "initial-index": k(L),
            infinite: Q.infinite,
            "zoom-rate": Q.zoomRate,
            "min-scale": Q.minScale,
            "max-scale": Q.maxScale,
            "show-progress": Q.showProgress,
            "url-list": Q.previewSrcList,
            crossorigin: Q.crossorigin,
            "hide-on-click-modal": Q.hideOnClickModal,
            teleported: Q.previewTeleported,
            "close-on-press-escape": Q.closeOnPressEscape,
            onClose: le,
            onSwitch: ce
        }, Hc({
            toolbar: Le(ke => [Qt(Q.$slots, "toolbar", qn(Qn(ke)))]),
            default: Le( () => [Q.$slots.viewer ? (S(),
            B("div", {
                key: 0
            }, [Qt(Q.$slots, "viewer")])) : J("v-if", !0)]),
            _: 2
        }, [Q.$slots.progress ? {
            name: "progress",
            fn: Le(ke => [Qt(Q.$slots, "progress", qn(Qn(ke)))])
        } : void 0]), 1032, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : J("v-if", !0)], 64)) : J("v-if", !0)], 16))
    }
});
var Du = $o(Nu, [["__file", "image.vue"]]);
const Fu = Go(Du)
  , jn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cdefs%3e%3cclipPath%20id='master_svg0_88_02548'%3e%3crect%20x='0'%20y='0'%20width='20'%20height='20'%20rx='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23master_svg0_88_02548)'%3e%3cg%3e%3cg%3e%3cpath%20d='M2.55963134765625%205C2.55963134765625%203.619288125423017%203.678919473079267%202.5%205.05963134765625%202.5L14.642964363098145%202.5C16.02367623767513%202.5%2017.142964363098145%203.619288125423017%2017.142964363098145%205L17.142964363098145%2015C17.142964363098145%2016.380711874576985%2016.02367623767513%2017.5%2014.642964363098145%2017.5L5.05963134765625%2017.5C3.678919473079267%2017.5%202.55963134765625%2016.380711874576985%202.55963134765625%2015Z'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%232E5FFF'%20fill='none'%20stroke-width='1.600000023841858'%20stroke-linecap='ROUND'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M12.46202712890625,11.37371634765625L16.370957128906248,13.74519634765625Q16.50705712890625,13.82773634765625,16.66435712890625,13.85192634765625Q16.82155712890625,13.87611634765625,16.97615712890625,13.838276347656251Q17.13075712890625,13.80043634765625,17.25905712890625,13.70633634765625Q17.387357128906253,13.61222634765625,17.469957128906252,13.47617634765625Q17.51075712890625,13.408806347656249,17.53775712890625,13.33476634765625Q17.564657128906248,13.26072634765625,17.57665712890625,13.18284634765625Q17.58865712890625,13.10496634765625,17.58515712890625,13.026246347656251Q17.58175712890625,12.94753634765625,17.56295712890625,12.87099634765625Q17.54425712890625,12.79446634765625,17.51095712890625,12.72305634765625Q17.47765712890625,12.65164634765625,17.43105712890625,12.58811634765625Q17.38445712890625,12.52457634765625,17.326357128906253,12.471346347656251Q17.26825712890625,12.41812634765625,17.20085712890625,12.37725634765625L13.29195712890625,10.00577234765625Q12.58542712890625,9.57715034765625,12.31412712890625,9.43101574765625Q11.86138712890625,9.18715134765625,11.48635712890625,9.07923634765625Q10.78488712890625,8.87739334765625,10.05671712890625,8.92796434765625Q9.66740712890625,8.95500134765625,9.17365712890625,9.09871734765625Q8.877787128906249,9.18483834765625,8.097227128906251,9.45611044765625L2.44593712890625,11.42012634765625Q2.29562612890625,11.47236634765625,2.17674712890625,11.57814634765625Q2.05786812890625,11.68392634765625,1.98852012890625,11.82715634765625Q1.91917212890625,11.97037634765625,1.90991312890625,12.12923634765625Q1.90065312890625,12.28809634765625,1.95289112890625,12.438406347656251Q2.00512912890625,12.58872634765625,2.11091312890625,12.70760634765625Q2.21669712890625,12.82647634765625,2.35992112890625,12.89582634765625Q2.50314512890625,12.96517634765625,2.66200532890625,12.97443634765625Q2.82086512890625,12.98369634765625,2.97117712890625,12.93145634765625L8.62246712890625,10.96744634765625Q9.83078712890625,10.54750634765625,10.16756712890625,10.52411634765625Q10.61392712890625,10.49311634765625,11.04391712890625,10.61684634765625Q11.36834712890625,10.71019634765625,12.46202712890625,11.37371634765625Z'%20fill-rule='evenodd'%20fill='%232E5FFF'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='6.409631371498108'%20cy='6.350000023841858'%20rx='1.350000023841858'%20ry='1.350000023841858'%20fill='%232E5FFF'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
  , _u = "" + new URL("icon-chat-writing.iHpugNep.svg",import.meta.url).href
  , $u = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cg%3e%3cg%3e%3cg%3e%3cellipse%20cx='9.999958992004395'%20cy='10.000020027160645'%20rx='8.333333015441895'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23626466'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='9.999959230422974'%20cy='10.000020027160645'%20rx='3.3333332538604736'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23626466'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M1.6666259765625,9.199999061767578L18.3333259765625,9.199999061767578Q18.4121259765625,9.199999061767578,18.4893259765625,9.215370061767578Q18.5666259765625,9.230742061767579,18.6394259765625,9.260895061767577Q18.7122259765625,9.291048061767578,18.7777259765625,9.334823061767578Q18.8432259765625,9.378598061767578,18.8990259765625,9.434313061767579Q18.9547259765625,9.490028461767578,18.9984259765625,9.555542561767577Q19.0422259765625,9.621056661767579,19.0724259765625,9.693852061767577Q19.1025259765625,9.766647061767578,19.1179259765625,9.843926061767577Q19.1333259765625,9.921206061767577,19.1333259765625,9.999999061767578Q19.1333259765625,10.078792061767578,19.1179259765625,10.156071061767578Q19.1025259765625,10.233350061767577,19.0724259765625,10.306145061767578Q19.0422259765625,10.378941061767579,18.9984259765625,10.444455061767577Q18.9547259765625,10.509969061767578,18.8990259765625,10.565684061767579Q18.8432259765625,10.621402061767578,18.7777259765625,10.665172061767578Q18.7122259765625,10.708952061767578,18.6394259765625,10.739102061767579Q18.5666259765625,10.769252061767578,18.4893259765625,10.784622061767578Q18.4121259765625,10.800002061767579,18.3333259765625,10.800002061767579L1.6666259765625,10.800002061767579Q1.5878328765625,10.800002061767579,1.5105539765625,10.784622061767578Q1.4332749765625,10.769252061767578,1.3604789765625,10.739102061767579Q1.2876839765625,10.708952061767578,1.2221699765625,10.665172061767578Q1.1566559765625,10.621402061767578,1.1009409765625,10.565684061767579Q1.0452249765625,10.509969061767578,1.0014499765625,10.444455061767577Q0.9576749765625,10.378941061767579,0.9275219765625,10.306145061767578Q0.8973699765625,10.233350061767577,0.8819979765625,10.156071061767578Q0.8666259765625,10.078792061767578,0.8666259765625,9.999999061767578Q0.8666259765625,9.921206061767577,0.8819979765625,9.843926061767577Q0.8973699765625,9.766647061767578,0.9275219765625,9.693852061767577Q0.9576749765625,9.621056661767579,1.0014499765625,9.555542561767577Q1.0452249765625,9.490028461767578,1.1009409765625,9.434313061767579Q1.1566559765625,9.378598061767578,1.2221699765625,9.334823061767578Q1.2876839765625,9.291048061767578,1.3604789765625,9.260895061767577Q1.4332749765625,9.230742061767579,1.5105539765625,9.215370061767578Q1.5878328765625,9.199999061767578,1.6666259765625,9.199999061767578Z'%20fill-rule='evenodd'%20fill='%23626466'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
  , Pu = "" + new URL("icon-chat-translate.CiY2-pbn.svg",import.meta.url).href
  , Hu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cdefs%3e%3cclipPath%20id='master_svg0_12_6369'%3e%3crect%20x='0'%20y='0'%20width='20'%20height='20'%20rx='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23master_svg0_12_6369)'%3e%3cg%3e%3cg%3e%3cpath%20d='M2.55963134765625%205C2.55963134765625%203.619288125423017%203.678919473079267%202.5%205.05963134765625%202.5L14.642964363098145%202.5C16.02367623767513%202.5%2017.142964363098145%203.619288125423017%2017.142964363098145%205L17.142964363098145%2015C17.142964363098145%2016.380711874576985%2016.02367623767513%2017.5%2014.642964363098145%2017.5L5.05963134765625%2017.5C3.678919473079267%2017.5%202.55963134765625%2016.380711874576985%202.55963134765625%2015Z'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23141414'%20fill='none'%20stroke-width='1.6699999570846558'%20stroke-linecap='ROUND'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M12.44387712890625,11.40363634765625L16.35285712890625,13.775116347656251Q16.42315712890625,13.817776347656249,16.50045712890625,13.84589634765625Q16.57775712890625,13.87401634765625,16.658957128906252,13.88651634765625Q16.74025712890625,13.89902634765625,16.82245712890625,13.895426347656251Q16.904557128906248,13.89183634765625,16.98445712890625,13.87227634765625Q17.064357128906252,13.85271634765625,17.138857128906253,13.81795634765625Q17.21345712890625,13.78319634765625,17.279757128906247,13.73455634765625Q17.34605712890625,13.68591634765625,17.40165712890625,13.62527634765625Q17.45715712890625,13.56464634765625,17.49985712890625,13.49432634765625Q17.58595712890625,13.35232634765625,17.61125712890625,13.18816634765625Q17.63645712890625,13.02400634765625,17.59695712890625,12.862676347656251Q17.55745712890625,12.70134634765625,17.459257128906252,12.56741634765625Q17.36105712890625,12.43347634765625,17.21905712890625,12.34732634765625L13.31005712890625,9.97584834765625Q12.60280712890625,9.54675934765625,12.33071712890625,9.40020174765625Q11.87467712890625,9.15455534765625,11.49602712890625,9.04560134765625Q10.78862712890625,8.84204934765625,10.05429712890625,8.89304834765625Q9.661227128906251,8.92034534765625,9.16387712890625,9.06511234765625Q8.86714712890625,9.15148334765625,8.08573712890625,9.42305014765625L2.43444812890625,11.38706634765625Q2.27756012890625,11.44158634765625,2.15348112890625,11.55199634765625Q2.02940112890625,11.66241634765625,1.95701912890625,11.811906347656251Q1.88463712890625,11.961396347656251,1.87497212890625,12.12720634765625Q1.86530712890625,12.29301634765625,1.91983112890625,12.44989634765625Q1.9468281289062501,12.52758634765625,1.9884621289062498,12.59850634765625Q2.03009612890625,12.66942634765625,2.0847661289062502,12.73086634765625Q2.13943712890625,12.79230634765625,2.20504212890625,12.84189634765625Q2.27064812890625,12.891486347656251,2.34466812890625,12.92732634765625Q2.41868812890625,12.96316634765625,2.49827812890625,12.983876347656249Q2.57786812890625,13.00458634765625,2.65996872890625,13.00937634765625Q2.74206972890625,13.01416634765625,2.82352712890625,13.002836347656249Q2.90498412890625,12.99151634765625,2.98266612890625,12.96451634765625L8.63394712890625,11.00050634765625Q9.83786712890625,10.58209634765625,10.16999712890625,10.55903634765625Q10.61018712890625,10.52846634765625,11.03423712890625,10.65048634765625Q11.35418712890625,10.74254634765625,12.44387712890625,11.40363634765625Z'%20fill-rule='evenodd'%20fill='%23141414'%20fill-opacity='1'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='6.409631371498108'%20cy='6.350000023841858'%20rx='1.350000023841858'%20ry='1.350000023841858'%20fill='%23141414'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
  , qu = "" + new URL("icon-chat-writing-bold.B9Nqi2qw.svg",import.meta.url).href
  , Qu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cg%3e%3cg%3e%3cg%3e%3cellipse%20cx='9.999958992004395'%20cy='10.000020027160645'%20rx='8.333333015441895'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23141414'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='9.999959230422974'%20cy='10.000020027160645'%20rx='3.3333332538604736'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23141414'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M1.6666259765625,9.199999061767578L18.3333259765625,9.199999061767578Q18.4121259765625,9.199999061767578,18.4893259765625,9.215370061767578Q18.5666259765625,9.230742061767579,18.6394259765625,9.260895061767577Q18.7122259765625,9.291048061767578,18.7777259765625,9.334823061767578Q18.8432259765625,9.378598061767578,18.8990259765625,9.434313061767579Q18.9547259765625,9.490028461767578,18.9984259765625,9.555542561767577Q19.0422259765625,9.621056661767579,19.0724259765625,9.693852061767577Q19.1025259765625,9.766647061767578,19.1179259765625,9.843926061767577Q19.1333259765625,9.921206061767577,19.1333259765625,9.999999061767578Q19.1333259765625,10.078792061767578,19.1179259765625,10.156071061767578Q19.1025259765625,10.233350061767577,19.0724259765625,10.306145061767578Q19.0422259765625,10.378941061767579,18.9984259765625,10.444455061767577Q18.9547259765625,10.509969061767578,18.8990259765625,10.565684061767579Q18.8432259765625,10.621402061767578,18.7777259765625,10.665172061767578Q18.7122259765625,10.708952061767578,18.6394259765625,10.739102061767579Q18.5666259765625,10.769252061767578,18.4893259765625,10.784622061767578Q18.4121259765625,10.800002061767579,18.3333259765625,10.800002061767579L1.6666259765625,10.800002061767579Q1.5878328765625,10.800002061767579,1.5105539765625,10.784622061767578Q1.4332749765625,10.769252061767578,1.3604789765625,10.739102061767579Q1.2876839765625,10.708952061767578,1.2221699765625,10.665172061767578Q1.1566559765625,10.621402061767578,1.1009409765625,10.565684061767579Q1.0452249765625,10.509969061767578,1.0014499765625,10.444455061767577Q0.9576749765625,10.378941061767579,0.9275219765625,10.306145061767578Q0.8973699765625,10.233350061767577,0.8819979765625,10.156071061767578Q0.8666259765625,10.078792061767578,0.8666259765625,9.999999061767578Q0.8666259765625,9.921206061767577,0.8819979765625,9.843926061767577Q0.8973699765625,9.766647061767578,0.9275219765625,9.693852061767577Q0.9576749765625,9.621056661767579,1.0014499765625,9.555542561767577Q1.0452249765625,9.490028461767578,1.1009409765625,9.434313061767579Q1.1566559765625,9.378598061767578,1.2221699765625,9.334823061767578Q1.2876839765625,9.291048061767578,1.3604789765625,9.260895061767577Q1.4332749765625,9.230742061767579,1.5105539765625,9.215370061767578Q1.5878328765625,9.199999061767578,1.6666259765625,9.199999061767578Z'%20fill-rule='evenodd'%20fill='%23141414'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
  , Gu = "" + new URL("icon-chat-translate-bold.DFEH2emb.svg",import.meta.url).href
  , Uu = "" + new URL("ai-writing.C3L2__Z9.svg",import.meta.url).href
  , Vu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='none'%20version='1.1'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cg%3e%3cg%3e%3cg%3e%3cellipse%20cx='9.999958992004395'%20cy='10.000020027160645'%20rx='8.333333015441895'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23FAA700'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='9.999959230422974'%20cy='10.000020027160645'%20rx='3.3333332538604736'%20ry='8.333333015441895'%20fill-opacity='0'%20stroke-opacity='1'%20stroke='%23FAA700'%20fill='none'%20stroke-width='1.600000023841858'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M1.6666259765625,9.19997998828125L18.3333259765625,9.19997998828125Q18.4121259765625,9.19997998828125,18.4893259765625,9.21535098828125Q18.5666259765625,9.23072298828125,18.6394259765625,9.26087598828125Q18.7122259765625,9.29102898828125,18.7777259765625,9.33480398828125Q18.8432259765625,9.37857898828125,18.8990259765625,9.43429398828125Q18.9547259765625,9.49000938828125,18.9984259765625,9.55552348828125Q19.0422259765625,9.62103758828125,19.0724259765625,9.69383298828125Q19.1025259765625,9.76662798828125,19.1179259765625,9.84390698828125Q19.1333259765625,9.92118698828125,19.1333259765625,9.99997998828125Q19.1333259765625,10.07877298828125,19.1179259765625,10.15605198828125Q19.1025259765625,10.23333098828125,19.0724259765625,10.30612598828125Q19.0422259765625,10.37892198828125,18.9984259765625,10.44443598828125Q18.9547259765625,10.50994998828125,18.8990259765625,10.56566498828125Q18.8432259765625,10.62138298828125,18.7777259765625,10.66515298828125Q18.7122259765625,10.70893298828125,18.6394259765625,10.73908298828125Q18.5666259765625,10.76923298828125,18.4893259765625,10.78460298828125Q18.4121259765625,10.79998298828125,18.3333259765625,10.79998298828125L1.6666259765625,10.79998298828125Q1.5878328765625,10.79998298828125,1.5105539765625,10.78460298828125Q1.4332749765625,10.76923298828125,1.3604789765625,10.73908298828125Q1.2876839765625,10.70893298828125,1.2221699765625,10.66515298828125Q1.1566559765625,10.62138298828125,1.1009409765625,10.56566498828125Q1.0452249765625,10.50994998828125,1.0014499765625,10.44443598828125Q0.9576749765625,10.37892198828125,0.9275219765625,10.30612598828125Q0.8973699765625,10.23333098828125,0.8819979765625,10.15605198828125Q0.8666259765625,10.07877298828125,0.8666259765625,9.99997998828125Q0.8666259765625,9.92118698828125,0.8819979765625,9.84390698828125Q0.8973699765625,9.76662798828125,0.9275219765625,9.69383298828125Q0.9576749765625,9.62103758828125,1.0014499765625,9.55552348828125Q1.0452249765625,9.49000938828125,1.1009409765625,9.43429398828125Q1.1566559765625,9.37857898828125,1.2221699765625,9.33480398828125Q1.2876839765625,9.29102898828125,1.3604789765625,9.26087598828125Q1.4332749765625,9.23072298828125,1.5105539765625,9.21535098828125Q1.5878328765625,9.19997998828125,1.6666259765625,9.19997998828125Z'%20fill-rule='evenodd'%20fill='%23FAA700'%20fill-opacity='1'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
  , ju = "" + new URL("icon-chat-translate-hl.We0rP0f0.svg",import.meta.url).href
  , Wu = "" + new URL("icon-calcuilate.Bjk04I-e.svg",import.meta.url).href
  , Ku = "" + new URL("icon-calcuilate-bold.DGHVU1eU.svg",import.meta.url).href
  , Yu = "" + new URL("icon-calcuilate-active.DjiMv1kP.svg",import.meta.url).href
  , Wn = {
    imageSuccessReceiveCountStorageKey: {
        val: "image-success-receive-count-for-chatai-2.2"
    },
    messageIdAttachedChromeExtensionTipKey: {
        val: "message-id-attached-chrome-extension-tip-for-chatai-2.2"
    },
    GUEST_SESSION_STORAGE_KEY: {
        val: "chat-pdf-v2:guest-session-map-by-pdf-id"
    },
    MEMBER_SESSION_STORAGE_KEY_PREFIX: {
        val: "chat-pdf-v2:member-session-map-by-pdf-id"
    },
    storageKeyForCountDeviceQueryTimes: {
        val: "chatai-query-times-count"
    },
    storageKeyForRecordIfDeviceQueryTimesReported: {
        val: "chatai-query-times-count-has-reported"
    },
    questionAiFirstSend: {
        val: "question-ai-first-send"
    },
    CURRENT_INPUT_VAL_KEY: {
        val: "current-input-val-key"
    },
    storageKeyForShowImgGuide: {
        val: "chatai-mark-show-img-guide"
    },
    storageKeyForIsUploadedImg: {
        val: "chatai-mark-is-uploaded-img"
    },
    chat_v2_current_session_key: {
        val: "chat-v2-current-session-key"
    },
    chat_v2_member_session_key: {
        val: "chat-v2:member-session-key"
    },
    isFirstFromCalculator: {
        val: "isFirstFromCalculator"
    },
    chataiSendImageButtonHasClicked: {
        val: "chatai-send-image-button-has-clicked"
    },
    chat_frist_message: {
        val: "chat_frist_message"
    },
    userClosedAttachedChromeExtensionTipFlagKey: {
        val: "user-closed-attached-chrome-extension-tip-flag"
    },
    isFirstShowQuoteTips: {
        val: "isFirstShowQuoteTips"
    },
    CURRENT_DOC_INFO_KEY: {
        val: "CURRENT_DOC_INFO_KEY"
    },
    FIRST_UNLOCK_DOC_UPLOAD_KEY: {
        val: "FIRST_UNLOCK_DOC_UPLOAD"
    },
    retrieveTime: {
        val: "retrieveTime"
    },
    stageSettingAutoPoppedForTheFirstTime: {
        val: "stageSettingAutoPoppedForTheFirstTime",
        tool: !0,
        label: "聊天学科卡次数"
    },
    stageSetting: {
        val: "stageSetting",
        tool: !0,
        label: "设置过stage"
    },
    deprecatedAutoPoppedKey: {
        val: "stageSettingAutoPoppedForTheFirstTimeUids"
    },
    subscriptionExpiresTips: {
        val: "subscriptionExpiresTips"
    },
    randomNumber: {
        val: "randomNumber"
    },
    lastStoredDate: {
        val: "lastStoredDate"
    },
    sseDebugLogStyle: {
        val: "sseDebugLogStyle_"
    },
    sseDebugOnmessageLogStyle: {
        val: "sseDebugOnmessageLogStyle_"
    },
    guideQuestionListHadShow: {
        val: "guideQuestionListHadShow_"
    },
    hasShowExampleQuestion: {
        val: "hasShowExampleQuestion"
    },
    translateLangSelectOutputLang: {
        val: "translateLangSelectOutputLang"
    },
    isVipLoginSuccess: {
        val: "isVipLoginSuccess"
    }
}
  , st = Object.keys(Wn).reduce( (r, e) => (r[e] = Wn[e].val,
r), {})
  , Kn = r => Q0(st.guideQuestionListHadShow + r) === "true"
  , Xu = r => {
    V0(st.guideQuestionListHadShow + r, "true")
}
;
var be = (r => (r.DEFAULT = "DEFAULT",
r.HOME_WORK = "HOME_WORK",
r.WRITING = "WRITING",
r.WEB_SEARCH = "WEB_SEARCH",
r.TRANSLATE = "TRANSLATE",
r.CALCULATOR = "CALCULATOR",
r))(be || {});
const P0 = ma({
    HOME_WORK: {
        icon: jn,
        iconBold: Hu,
        iconHighLight: jn,
        text: "图片搜题",
        placeholderText: "粘贴文字搜题 / 向AI提问",
        active: !0,
        desc: "作业 / 考试 / 网课",
        zsEventParams: {
            guideCardClick: "H3A_050"
        }
    },
    WRITING: {
        icon: _u,
        iconBold: qu,
        iconHighLight: Uu,
        text: "AI写作",
        placeholderText: "输入标题和字数让AI帮你完成写作",
        active: !1,
        desc: "写作文 / 写报告 / 写论文",
        thinkBaseText: "Writing",
        extParams: {
            presetId: 118
        },
        guideQuestionListHadShow: Kn("WRITING"),
        guideQuestionListHadClick: !1,
        guideQuestionList: ["帮我生成一份商业计划书有关于大学生的", "以我的大学专业是工商管理为主题写一篇150左右的稿子", "根据中国民间戏曲写一篇不少于1000字的论文"],
        zsEventParams: {
            click: "H3B_178",
            guideShow: "H3B_180",
            guideClick: "H3B_181",
            close: "H3B_182",
            guideCardClick: "H3A_051"
        }
    },
    WEB_SEARCH: {
        icon: $u,
        iconBold: Qu,
        iconHighLight: Vu,
        text: "AI问答",
        placeholderText: "向AI提问你任何感兴趣的问题",
        active: !1,
        desc: "任何问题，直面答案",
        thinkBaseText: "Searching",
        extParams: {
            shortcutId: 120
        },
        guideQuestionListHadShow: Kn("WEB_SEARCH"),
        guideQuestionListHadClick: !1,
        guideQuestionList: ["竞业违约金是什么", "汽车的概念最早可以追溯到哪个时期", "蚂蚁能举起多重"],
        zsEventParams: {
            click: "H3B_161",
            show: "H3B_162",
            guideClick: "H3B_164",
            close: "H3B_173",
            guideCardClick: "H3A_052"
        }
    },
    TRANSLATE: {
        icon: Pu,
        iconBold: Gu,
        iconHighLight: ju,
        text: "翻译",
        placeholderText: "输入你要翻译的内容",
        active: !1,
        desc: "单词翻译 / 英文文章解读",
        extParams: {
            shortcutId: 121,
            msgCategory: 205
        },
        showTranslateLangSelect: !0,
        zsEventParams: {
            click: "H3B_174",
            close: "H3B_176",
            guideCardClick: "H3A_053"
        }
    },
    CALCULATOR: {
        icon: Wu,
        iconBold: Ku,
        iconHighLight: Yu,
        text: "计算器",
        placeholderText: "输入你要翻译的内容",
        active: !1,
        desc: "计算器",
        zsEventParams: {
            click: "GW_033",
            close: "GW_033",
            guideCardClick: "GW_033"
        }
    }
})
  , Ko = () => {
    const r = z("DEFAULT")
      , e = z();
    return Hs( () => {
        e.value = P0[r.value]
    }
    ),
    Wr("chatMode", r),
    Wr("currChatModeConfig", e),
    {
        chatMode: r,
        currChatModeConfig: e,
        getInjectChatMode: () => cr("chatMode"),
        getInjectCurrChatModeConfig: () => cr("currChatModeConfig")
    }
}
  , Yo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAAAEBgkFBgkFBgcGBgYFBwgFBggFBggGBgcFBwgFBggFBggFBggFBggFBggGBgkGBgkFBwkFBggFBwgFBggGBggKCgoFBggFBggGBggFBgj///8T99eCAAAAGnRSTlMALW05Bbj92kq6/vQ81t0kQBFagJtIA/PGIfEwqQMAAAABYktHRBsCYNSkAAAAXUlEQVQ4y2NgGKaAkYmZBa8CVjZ2DrwKOLmkuDnwmcHDKyXFh9cMfl5CZghQ2wxBIWFMIMImJcUtKgZWICQuhQNISBKngKAV5HiUkDcp1U8wsghGN8EEQzDJDUEAAE8eDkP4bwtaAAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAwoAMABAAAAAEAAAAwAAAAANs3bAwAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABd0RVh0ZXhpZjpFeGlmSW1hZ2VMZW5ndGgANDjLZnB1AAAAFnRFWHRleGlmOkV4aWZJbWFnZVdpZHRoADQ4hpTN8AAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAAABJRU5ErkJggg=="
  , Zu = {
    key: 0,
    class: "chat-guide-question-wrapper"
}
  , Ju = ["onClick"]
  , e2 = {
    class: "question-item-text"
}
  , t2 = oe({
    __name: "ChatGuideQuestion",
    props: {
        questionList: {}
    },
    emits: ["handleQuestionItemClick"],
    setup(r, {emit: e}) {
        const t = e;
        return (a, s) => {
            var n;
            return (n = a.questionList) != null && n.length ? (S(),
            B("div", Zu, [(S(!0),
            B(Te, null, Je(a.questionList, (i, l) => (S(),
            B("div", {
                key: l,
                class: "question-item",
                onClick: u => t("handleQuestionItemClick", i)
            }, [A("div", e2, xe(i), 1), s[0] || (s[0] = A("img", {
                class: "question-item-icon-arrow",
                src: Yo,
                alt: "icon-arrow"
            }, null, -1))], 8, Ju))), 128))])) : J("", !0)
        }
    }
})
  , r2 = ye(t2, [["__scopeId", "data-v-ad255aa9"]]);
var Xo = (r => (r[r.CHAT_LIST_SLIM = 1] = "CHAT_LIST_SLIM",
r[r.CHAT_LIST_PLUS = 2] = "CHAT_LIST_PLUS",
r))(Xo || {})
  , Zo = (r => (r.CHATMODE = "chat",
r.DEFAULTMODE = "default",
r))(Zo || {});
const a2 = {
    width: "12px",
    height: "12px",
    viewBox: "0 0 12 12",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
}
  , s2 = {
    id: "控件",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-linecap": "round"
}
  , n2 = ["stroke"]
  , i2 = oe({
    __name: "close-button-icon",
    props: {
        color: {
            type: String,
            default: "currentColor"
        }
    },
    setup(r) {
        return (e, t) => (S(),
        B("svg", a2, [A("g", s2, [A("g", {
            id: "编组-2",
            stroke: r.color,
            transform: "translate(3.000000, 3.000000)"
        }, t[0] || (t[0] = [A("line", {
            id: "路径-5",
            x1: "-5.54556401e-14",
            y1: "0",
            x2: "6",
            y2: "6"
        }, null, -1), A("line", {
            id: "路径-5备份",
            x1: "0",
            y1: "0",
            x2: "6",
            y2: "6",
            transform: "translate(3.000000, 3.000000) scale(-1, 1) translate(-3.000000, -3.000000) "
        }, null, -1)]), 8, n2)])]))
    }
})
  , o2 = {
    a: {
        type: "write",
        output: "a"
    },
    b: {
        type: "write",
        output: "b"
    },
    c: {
        type: "write",
        output: "c"
    },
    d: {
        type: "write",
        output: "d"
    },
    e: {
        type: "write",
        output: "e"
    },
    f: {
        type: "write",
        output: "f"
    },
    g: {
        type: "write",
        output: "g"
    },
    h: {
        type: "write",
        output: "h"
    },
    i: {
        type: "write",
        output: "i"
    },
    j: {
        type: "write",
        output: "j"
    },
    k: {
        type: "write",
        output: "k"
    },
    l: {
        type: "write",
        output: "l"
    },
    m: {
        type: "write",
        output: "m"
    },
    n: {
        type: "write",
        output: "n"
    },
    o: {
        type: "write",
        output: "o"
    },
    p: {
        type: "write",
        output: "p"
    },
    q: {
        type: "write",
        output: "q"
    },
    r: {
        type: "write",
        output: "r"
    },
    s: {
        type: "write",
        output: "s"
    },
    t: {
        type: "write",
        output: "t"
    },
    u: {
        type: "write",
        output: "u"
    },
    v: {
        type: "write",
        output: "v"
    },
    w: {
        type: "write",
        output: "w"
    },
    x: {
        type: "write",
        output: "x"
    },
    y: {
        type: "write",
        output: "y"
    },
    z: {
        type: "write",
        output: "z"
    },
    pi: {
        type: "write",
        output: "\\pi"
    },
    mul: {
        type: "write",
        output: "\\times "
    },
    divi: {
        type: "write",
        output: "\\div"
    },
    add: {
        type: "write",
        output: "+"
    },
    reduce: {
        type: "write",
        output: "-"
    },
    equal: {
        type: "write",
        output: "="
    },
    point: {
        type: "write",
        output: "."
    },
    brackets6: {
        type: "cmd",
        output: "("
    },
    brackets5: {
        type: "cmd",
        output: ")"
    },
    brackets2: {
        type: "cmd",
        output: "["
    },
    brackets: {
        type: "cmd",
        output: "]"
    },
    brackets3: {
        type: "cmd",
        output: "{"
    },
    brackets4: {
        type: "cmd",
        output: "}"
    },
    delete: {
        type: "keystroke",
        output: "Backspace"
    },
    rear: {
        type: "keystroke",
        output: "Right"
    },
    forward: {
        type: "keystroke",
        output: "Left"
    },
    zero: {
        type: "write",
        output: "0"
    },
    one: {
        type: "write",
        output: "1"
    },
    two: {
        type: "write",
        output: "2"
    },
    three: {
        type: "write",
        output: "3"
    },
    four: {
        type: "write",
        output: "4"
    },
    five: {
        type: "write",
        output: "5"
    },
    six: {
        type: "write",
        output: "6"
    },
    seven: {
        type: "write",
        output: "7"
    },
    eight: {
        type: "write",
        output: "8"
    },
    nine: {
        type: "write",
        output: "9"
    },
    30: {
        type: "write",
        output: "30^{\\circ}"
    },
    45: {
        type: "write",
        output: "45^{\\circ}"
    },
    60: {
        type: "write",
        output: "60^{\\circ}"
    },
    abs: {
        type: "write",
        output: "\\left|{}\\right|",
        forward: 1
    },
    fraction: {
        type: "cmd",
        output: "\\frac",
        forward: 2
    },
    square8: {
        type: "cmd",
        output: "\\frac",
        forward: 3
    },
    percentage: {
        type: "write",
        output: "%",
        isRequired: !0
    },
    root: {
        type: "cmd",
        output: "\\sqrt",
        forward: 1
    },
    square5: {
        type: "write",
        output: "\\sqrt[3]{ }",
        forward: 1
    },
    square6: {
        type: "write",
        output: "\\sqrt[ ]{ }",
        forward: 2
    },
    square: {
        type: "write",
        output: "{}^{2}",
        isRequired: !0
    },
    square2: {
        type: "write",
        output: "{}^{3}",
        isRequired: !0
    },
    square3: {
        type: "write",
        output: "{}^{}",
        forward: 1,
        isRequired: !0
    },
    sin: {
        type: "write",
        output: "\\sin"
    },
    cos: {
        type: "write",
        output: "\\cos"
    },
    tan: {
        type: "write",
        output: "\\tan"
    },
    cot: {
        type: "write",
        output: "\\cot"
    },
    arcsin: {
        type: "write",
        output: "\\arcsin"
    },
    arccos: {
        type: "write",
        output: "\\arccos"
    },
    arctan: {
        type: "write",
        output: "\\arctan"
    },
    arccot: {
        type: "write",
        output: "\\arccot"
    },
    log: {
        type: "write",
        output: "\\log_{}()",
        forward: 3
    },
    lg: {
        type: "write",
        output: "\\lg"
    },
    ln: {
        type: "write",
        output: "\\ln"
    },
    spend: {
        type: "write",
        output: "^{\\circ}",
        isRequired: !0
    },
    "more-than": {
        type: "write",
        output: ">"
    },
    "more-than2": {
        type: "write",
        output: "\\geq"
    },
    "less-than": {
        type: "write",
        output: "<"
    },
    "less-than2": {
        type: "write",
        output: "\\leq"
    },
    derivatives: {
        type: "write",
        output: "\\left(\\right)\\prime",
        forward: 2
    },
    int: {
        type: "write",
        output: "\\int _{ }^{ }"
    },
    calculate: {
        type: "self",
        output: "count"
    },
    wrap: {
        type: "self",
        output: "line"
    },
    more: {
        type: "self",
        output: "number"
    },
    number: {
        type: "self",
        output: "more"
    }
}
  , l2 = [{
    name: "基本",
    id: 1
}, {
    name: "函数",
    id: 2
}, {
    name: "字母",
    id: 4
}, {
    name: "≤",
    id: 5
}]
  , c2 = [{
    key: "square3",
    size: {}
}, {
    key: "fraction",
    size: {}
}, {
    key: "square8",
    size: {}
}, {
    key: "square6",
    size: {}
}, {
    key: "abs",
    size: {}
}, {
    key: "log",
    size: {}
}, {
    key: "lg",
    size: {}
}, {
    key: "sin",
    size: {}
}, {
    key: "cos",
    size: {}
}, {
    key: "tan",
    size: {}
}, {
    key: "arcsin",
    size: {}
}, {
    key: "arccos",
    size: {}
}, {
    key: "arctan",
    size: {}
}, {
    key: "ln",
    size: {}
}]
  , u2 = [{
    key: "a",
    size: {}
}, {
    key: "b",
    size: {}
}, {
    key: "c",
    size: {}
}, {
    key: "e",
    size: {}
}, {
    key: "m",
    size: {}
}, {
    key: "n",
    size: {}
}, {
    key: "x",
    size: {}
}, {
    key: "y",
    size: {}
}]
  , d2 = [{
    key: "more-than",
    size: {}
}, {
    key: "more-than2",
    size: {}
}, {
    key: "less-than",
    size: {}
}, {
    key: "less-than2",
    size: {}
}]
  , h2 = [{
    key: "a",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "b",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "m",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "n",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "x",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "y",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "delete",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "seven",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "eight",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "nine",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "square3",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "root",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "pi",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "e",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "four",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "five",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "six",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "mul",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "divi",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "fraction",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "derivatives",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "one",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "two",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "three",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "add",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "reduce",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "brackets6",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "brackets5",
    size: {},
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "zero",
    size: {
        w: "long"
    },
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "point",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "equal",
    size: {
        w: "long"
    },
    style: "background: rgba(239,239,246,.83);"
}, {
    key: "forward",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}, {
    key: "rear",
    size: {},
    style: "background: #f8f8f9 100%;color:#000;"
}]
  , m2 = ["square3", "root", "fraction", "square8", "abs", "square6"]
  , p2 = ["derivatives"]
  , Jo = (r, e) => {
    const t = o2[e] || {
        type: "",
        output: ""
    }
      , a = (r == null ? void 0 : r.latex()) || ""
      , {output: s} = t;
    if (!(t.isRequired && !a && s))
        switch (t == null ? void 0 : t.type) {
        case "write":
            (a == null ? void 0 : a.length) > 150 ? Gc({
                message: "太长了",
                type: "warning"
            }) : (r == null || r.write(s),
            m2.includes(e) && (r == null || r.keystroke("Left")),
            p2.includes(e) && (r == null || r.keystroke("Left"),
            r == null || r.keystroke("Left")),
            r.focus());
            break;
        case "cmd":
            r == null || r.cmd(s),
            r.focus();
            break;
        case "keystroke":
            r == null || r.keystroke(s),
            r.focus();
            break
        }
}
  , f2 = (r, e) => {
    r.latex(e)
}
  , v2 = r => {
    r == null || r.focus()
}
  , g2 = ["disabled"]
  , y2 = oe({
    __name: "KeyboardItem",
    props: {
        keyboard: {
            type: Object,
            default: {
                key: "",
                size: {}
            }
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["pressKey"],
    setup(r, {emit: e}) {
        const t = r
          , a = e
          , s = () => {
            a("pressKey", t.keyboard.key)
        }
        ;
        return (n, i) => (S(),
        B("button", {
            class: pe(["keyboard-btn", `icon-list_${t.keyboard.key}`, `keyboard-btn_${t.keyboard.size.w || "normal"}`, r.disabled ? "is-disabled" : ""]),
            style: nt(`${t.keyboard.style}`),
            disabled: r.disabled,
            onClick: s
        }, null, 14, g2))
    }
})
  , el = ye(y2, [["__scopeId", "data-v-1f254e60"]])
  , A2 = {
    class: "calculator-additional"
}
  , b2 = oe({
    __name: "Additional",
    props: {
        id: {
            type: Number,
            default: 1
        },
        mathField: {
            type: Object,
            default: () => ({})
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(r) {
        const e = r
          , t = {
            1: [],
            2: c2,
            3: [],
            4: u2,
            5: d2
        }
          , a = (s="") => {
            Jo(e.mathField, s)
        }
        ;
        return (s, n) => ft((S(),
        B("div", A2, [(S(!0),
        B(Te, null, Je(t[e.id], i => (S(),
        ge(el, {
            key: i.key,
            keyboard: i,
            disabled: r.disabled,
            onPressKey: a
        }, null, 8, ["keyboard", "disabled"]))), 128))], 512)), [[St, t[e.id].length]])
    }
})
  , w2 = ye(b2, [["__scopeId", "data-v-ebd8e72a"]])
  , x2 = {
    class: "calculator"
}
  , k2 = {
    class: "calculator-body"
}
  , S2 = {
    class: "calculator-input"
}
  , T2 = {
    class: "calculator-input-wrap"
}
  , M2 = ["inert"]
  , I2 = {
    class: "disable-reason-mask-wrap"
}
  , C2 = ["disabled"]
  , R2 = {
    class: "calculator-area-default"
}
  , E2 = {
    class: "calculator-area-ul"
}
  , B2 = ["onClick"]
  , z2 = {
    class: "calculator-area-title"
}
  , L2 = {
    class: "calculator-keyboard"
}
  , O2 = oe({
    __name: "index",
    props: {
        latex: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["submit", "edit"],
    setup(r, {expose: e, emit: t}) {
        const a = t;
        let s, n;
        const i = z()
          , l = z(1)
          , u = z("")
          , d = w => {
            l.value = w
        }
          , m = w => {
            Jo(n, w)
        }
          , f = async () => {
            const w = n.latex();
            if (!w)
                return;
            const M = w.replace(/(.*?\^)(\d)/g, "$1{$2}");
            u.value = M,
            a("submit", u.value)
        }
        ;
        return Ne( () => {
            window && window.MathQuill && (s = window.MathQuill.getInterface(2),
            n = s.MathField(i.value, {
                restrictMismatchedBrackets: !0,
                spaceBehavesLikeTab: !0,
                sumStartsWithNEquals: !0,
                supSubsRequireOperand: !0,
                charsThatBreakOutOfSupSub: "+-=<>",
                autoCommands: "pi theta sqrt sum",
                autoOperatorNames: "sin cos",
                maxDepth: 10,
                handlers: {
                    edit: function() {
                        const w = n.latex();
                        a("edit", w)
                    },
                    enter() {
                        n.latex(),
                        f()
                    }
                }
            }))
        }
        ),
        e({
            setValue: w => {
                f2(n, w)
            }
            ,
            focusInput: () => {
                try {
                    return v2(n),
                    !0
                } catch {
                    return !1
                }
            }
        }),
        (w, M) => (S(),
        B("section", null, [A("div", x2, [A("div", k2, [A("div", S2, [A("div", T2, [A("div", {
            inert: r.disabled,
            style: nt({
                visibility: r.disabled ? "hidden" : "visible"
            })
        }, [A("div", {
            id: "calculator-input-textarea",
            ref_key: "renderText",
            ref: i,
            class: "calculator-input-textarea"
        }, null, 512)], 12, M2), ft(A("div", I2, null, 512), [[St, r.disabled]])]), A("button", {
            disabled: r.disabled,
            class: pe(["calculator-solve", {
                "is-disabled": r.disabled
            }]),
            onClick: f
        }, "提交", 10, C2)]), A("div", R2, [A("ul", E2, [(S(!0),
        B(Te, null, Je(k(l2), E => (S(),
        B("li", {
            key: E.id,
            class: pe(["calculator-area-ul-li", {
                active: k(l) === E.id
            }]),
            onClick: R => d(E.id)
        }, [A("div", z2, xe(E.name), 1)], 10, B2))), 128))]), Z(w2, {
            id: k(l),
            "math-field": k(n),
            disabled: r.disabled
        }, null, 8, ["id", "math-field", "disabled"])]), A("div", L2, [(S(!0),
        B(Te, null, Je(k(h2), E => (S(),
        ge(el, {
            key: E.key,
            keyboard: E,
            disabled: r.disabled,
            onPressKey: m
        }, null, 8, ["keyboard", "disabled"]))), 128))])])])]))
    }
})
  , N2 = ye(O2, [["__scopeId", "data-v-71cbe4dc"]])
  , D2 = {
    class: "calculator-frame-header"
}
  , F2 = oe({
    __name: "CalculatorFrame",
    emits: ["close-button-click", "input", "submit"],
    setup(r, {expose: e, emit: t}) {
        const a = t
          , s = () => {
            a("close-button-click")
        }
          , n = d => {
            a("submit", d)
        }
          , i = z()
          , l = W( () => {
            var d;
            return ((d = i.value) == null ? void 0 : d.setValue) ?? ( () => {
                console.warn("Calculate is not available")
            }
            )
        }
        )
          , u = W( () => {
            var d;
            return ((d = i.value) == null ? void 0 : d.focusInput) ?? ( () => {
                console.warn("Calculate is not available")
            }
            )
        }
        );
        return Ne( () => {}
        ),
        e({
            setValue: l,
            focusInput: u
        }),
        (d, m) => (S(),
        B("div", null, [A("div", D2, [m[0] || (m[0] = A("div", {
            class: "title"
        }, "计算器", -1)), Z(i2, {
            class: "close-button",
            onClick: s
        })]), Z(N2, {
            ref_key: "calculatorRef",
            ref: i,
            class: "calculator-for-home",
            disabled: !!d.$attrs.disabled,
            onSubmit: n,
            onEdit: d.$attrs.onEdit
        }, {
            disableReasonMask: Le( () => [Qt(d.$slots, "disableReasonMask", {}, void 0, !0)]),
            _: 3
        }, 8, ["disabled", "onEdit"])]))
    }
})
  , _2 = ye(F2, [["__scopeId", "data-v-7813228c"]]);
var me = (r => (r[r.Transferring = 0] = "Transferring",
r[r.TransferSuccessful = 1] = "TransferSuccessful",
r[r.TransferFailed = 2] = "TransferFailed",
r))(me || {})
  , tl = (r => (r[r.None = 1] = "None",
r[r.AllBan = 2] = "AllBan",
r[r.SomeBan = 3] = "SomeBan",
r[r.WenXinBan = 4] = "WenXinBan",
r[r.UserBan = 5] = "UserBan",
r))(tl || {})
  , rl = (r => (r[r.None = 0] = "None",
r[r.Approval = 1] = "Approval",
r[r.Tread = 2] = "Tread",
r))(rl || {})
  , we = (r => (r[r.None = 0] = "None",
r[r.All = 1] = "All",
r[r.Some = 2] = "Some",
r))(we || {})
  , $t = (r => (r[r.Ask = 1] = "Ask",
r[r.Replay = 2] = "Replay",
r))($t || {})
  , P = (r => (r[r.Unknown = 0] = "Unknown",
r[r.Text = 1] = "Text",
r[r.Markdown = 2] = "Markdown",
r[r.HTML = 3] = "HTML",
r[r.Image = 4] = "Image",
r[r.Template = 6] = "Template",
r[r.Audio = 7] = "Audio",
r[r.CustomBehavior = 13] = "CustomBehavior",
r[r.Custom = 16] = "Custom",
r[r.Doc = 100] = "Doc",
r[r.TextToImage = 21] = "TextToImage",
r[r.AiSearch = 23] = "AiSearch",
r[r.MindMap = 101] = "MindMap",
r[r.Reasoning = 26] = "Reasoning",
r[r.Calculator = 25] = "Calculator",
r[r.PcPicSearch = 28] = "PcPicSearch",
r[r.GuideCard = -1e3] = "GuideCard",
r[r.GuideAsk = -1001] = "GuideAsk",
r[r.TextToImageAsk = -1002] = "TextToImageAsk",
r[r.AISearchAsk = -1003] = "AISearchAsk",
r[r.WritingCard = -1004] = "WritingCard",
r[r.AgentGuideCard = -1005] = "AgentGuideCard",
r))(P || {})
  , X = (r => (r[r.None = 0] = "None",
r[r.ReplyGptLimitError = 1] = "ReplyGptLimitError",
r[r.ReplyGptRespError = 2] = "ReplyGptRespError",
r[r.ReplyGptStreamError = 3] = "ReplyGptStreamError",
r[r.ReplyContentAuditError = 4] = "ReplyContentAuditError",
r[r.ReplyServerError = 5] = "ReplyServerError",
r[r.ReplyContentAuditResetSession = 6] = "ReplyContentAuditResetSession",
r[r.ParamsError = 11] = "ParamsError",
r[r.UserInvalid = 12] = "UserInvalid",
r[r.Text2ImgOverLimit = 13] = "Text2ImgOverLimit",
r[r.AskContentAuditError = 14] = "AskContentAuditError",
r[r.AskStreamOverLimit = 15] = "AskStreamOverLimit",
r[r.CaptureOverLimit = 303] = "CaptureOverLimit",
r[r.SendFail = -1e3] = "SendFail",
r[r.ReplyOffline = -1001] = "ReplyOffline",
r[r.ReplyTimeout = -1002] = "ReplyTimeout",
r[r.ReplyInterrupt = -1003] = "ReplyInterrupt",
r[r.ManualStop = -1004] = "ManualStop",
r[r.UpdateNameError = -1005] = "UpdateNameError",
r[r.ImageAiSearchResultEmpty = -1006] = "ImageAiSearchResultEmpty",
r))(X || {})
  , Y = (r => (r[r.NormalReply = 100] = "NormalReply",
r[r.TranslateReply = 101] = "TranslateReply",
r[r.PresetReply = 102] = "PresetReply",
r[r.TextToImageReply = 103] = "TextToImageReply",
r[r.AISearchLinkReply = 104] = "AISearchLinkReply",
r[r.AISearchImageReply = 105] = "AISearchImageReply",
r[r.DocListCard = 106] = "DocListCard",
r[r.WordCardReply = 107] = "WordCardReply",
r[r.ReasoningReply = 108] = "ReasoningReply",
r[r.MindMapReply = 109] = "MindMapReply",
r[r.PcPicSearchReply = 111] = "PcPicSearchReply",
r[r.PluginCaptureSearchReply = 301] = "PluginCaptureSearchReply",
r[r.NormalAsk = 200] = "NormalAsk",
r[r.TranslateAsk = 253] = "TranslateAsk",
r[r.PresetAsk = 202] = "PresetAsk",
r[r.TextToImageAsk = 203] = "TextToImageAsk",
r[r.AISearchLinkAsk = 260] = "AISearchLinkAsk",
r[r.AISearchImageAsk = 205] = "AISearchImageAsk",
r[r.DeepSeekAsk = 206] = "DeepSeekAsk",
r[r.AISearchDeepSeekAsk = 207] = "AISearchDeepSeekAsk",
r[r.PluginCaptureSearchAsk = 257] = "PluginCaptureSearchAsk",
r[r.Calculator = 259] = "Calculator",
r[r.PluginNormalAsk = 400] = "PluginNormalAsk",
r[r.GuideCardReply = -1e3] = "GuideCardReply",
r[r.WritingCardReply = -1001] = "WritingCardReply",
r))(Y || {})
  , $e = (r => (r.Success = "Success",
r.NotInit = "NotInit",
r.Transferring = "Transferring",
r.RequestFailed = "RequestFailed",
r.InputError = "InputError",
r.Offline = "Offline",
r.NotLogin = "NotLogin",
r.NoRemainCount = "NoRemainCount",
r))($e || {})
  , Ce = (r => (r.Verification = "verification",
r.Recognition = "recognition",
r.Notification = "notification",
r.AnswerTips = "answertips",
r.Finish = "finish",
r.Error = "error",
r.Heartbeat = "heartbeat",
r.Reset = "reset",
r.Rename = "rename",
r.Intent = "intent",
r))(Ce || {})
  , al = (r => (r.TXT = "txt",
r.TTS = "tts",
r))(al || {});
const $2 = "https://cdn-img.daxuesoutijiang.com/dx-site/static/js/jquery.min.js"
  , P2 = "https://cdn-img.daxuesoutijiang.com/dx-site/static/js/mathquill-min.js"
  , H2 = "https://cdn-img.daxuesoutijiang.com/dx-site/static/js/mathquill.css"
  , q2 = "https://cdn-img.daxuesoutijiang.com/dx-site/static/js/calculatorfont.css"
  , Yn = (r=!1) => {
    const e = [nu([$2, P2], 0, r ? "idle" : "now", !1, r), iu([H2, q2], 0, r ? "idle" : "now", !0, r)];
    return r && e.push(ou(["https://cdn-img.daxuesoutijiang.com/dx-site/static/js/fonts/icomoon.woff2"], "font/woff2", "idle")),
    Promise.all(e)
}
;
function Q2({calculatorFrameRef: r, sendTextMessage: e, getInputSessionStorageKey: t}) {
    const {$track: a} = gr()
      , s = z(!1)
      , n = () => {
        Yn().then( () => {
            s.value = !0
        }
        , g => {
            throw g
        }
        )
    }
    ;
    Yn(!0);
    const i = z(!1)
      , l = g => {
        a({
            name: "GW_036"
        }),
        e(`$${g}$`, Y.Calculator),
        u.value(""),
        b(),
        i.value = !1
    }
      , u = W( () => {
        var g;
        return ((g = r.value) == null ? void 0 : g.setValue) ?? ( () => {
            console.warn("Calculate is not available")
        }
        )
    }
    )
      , d = z({})
      , m = () => {
        var N, C;
        const {guestSessionStorageKey: g, memberSessionStorageKey: w} = t()
          , M = ((N = nr(g)) == null ? void 0 : N.trim()) ?? null
          , E = w ? ((C = nr(w)) == null ? void 0 : C.trim()) ?? null : null;
        let R = null;
        M ? (w && (m0(g),
        G0(w, M)),
        R = M) : d.value.uid && E && (R = E),
        R && u.value(R)
    }
      , f = g => {
        if (g == null)
            return;
        g = (g == null ? void 0 : g.trim()) ?? "";
        const {guestSessionStorageKey: w, memberSessionStorageKey: M} = t();
        d.value.uid ? G0(M, g) : G0(w, g)
    }
      , b = () => {
        const {guestSessionStorageKey: g, memberSessionStorageKey: w} = t();
        m0(w),
        m0(g)
    }
    ;
    return {
        calculatorFrameRef: r,
        isMathQuillLoadedFlag: s,
        isShowCalculatorFlag: i,
        handleSubmitFormula: l,
        setCalculatorValue: u,
        recoverFormulaFromSessionStorage: m,
        handleFormulaInput: f,
        loadMathQuillForCalculator: n
    }
}
const G2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h16v16H0z'/%3e%3cg%20stroke='%23050608'%20stroke-linecap='round'%20stroke-width='1.5'%3e%3cpath%20d='M2%208h11.061'/%3e%3cpath%20stroke-linejoin='round'%20d='m9.795%2012%204-4-4-4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
var vs = (r => (r.image = "image",
r.web = "web",
r.deepseek = "deepseek",
r))(vs || {});
const U2 = {
    [`${Y.AISearchLinkAsk}`]: "搜网页",
    [`${Y.AISearchImageAsk}`]: "搜图片"
};
var sl = (r => (r[r.Success = 1] = "Success",
r[r.Failed = 2] = "Failed",
r))(sl || {});
const I0 = (r, e=Y.NormalReply) => {
    let t = "";
    switch (r) {
    case X.ImageAiSearchResultEmpty:
        t = "没有识别到题目，重新截图试试吧，精准框选你想要的题目识别更准确哦。";
        break;
    case X.ReplyGptRespError:
    case X.ReplyGptStreamError:
    case X.ReplyServerError:
        t = "抱歉，暂时无法回复";
        break;
    case X.AskStreamOverLimit:
        t = "抱歉，你问的太快了";
        break;
    case X.ReplyOffline:
        t = "无网络，请检查无误后再次发起聊天啊";
        break;
    case X.ReplyInterrupt:
        t = "异常中断，请重新发送";
        break;
    case X.ManualStop:
        e === Y.TextToImageReply ? t = "已停止画图" : e === Y.AISearchImageReply ? t = "已停止搜图" : e === Y.AISearchLinkReply ? t = "已停止搜索" : e === Y.TranslateReply ? t = "已停止翻译" : t = "已停止回答";
        break;
    case X.ReplyContentAuditResetSession:
    case X.ReplyContentAuditError:
        e === Y.TextToImageReply ? t = "很遗憾不能生成此类图片，请尝试其他画图诉求" : e === Y.AISearchImageReply ? t = "很遗憾不能展示此类图片，请尝试其他搜索" : t = "很遗憾不能回答这个问题，请尝试其他提问";
        break;
    case X.AskContentAuditError:
        t = "非常抱歉，您输入的内容有敏感信息，请修改后重试";
        break;
    case X.ReplyTimeout:
        t = "非常抱歉，当前网络差，请检查网络无误后再次发起聊天";
        break;
    case X.Text2ImgOverLimit:
        t = "非常抱歉，一个用户一天最多生成15张图片哈";
        break
    }
    return t
}
;
let V2 = 0;
class M0 {
    constructor() {
        I(this, "localId", `${Date.now()}-${V2++}`);
        I(this, "isDeepSeekReply", !1);
        I(this, "svrId", "");
        I(this, "askId", "");
        I(this, "sessionId", "");
        I(this, "roleType", $t.Replay);
        I(this, "transferStatus", me.Transferring);
        I(this, "category", Y.NormalAsk);
        I(this, "contentType", P.Unknown);
        I(this, "content", {
            text: ""
        });
        I(this, "answerTips", []);
        I(this, "praise", rl.None);
        I(this, "ban", tl.None);
        I(this, "sender", "");
        I(this, "receiver", "");
        I(this, "segment", 0);
        I(this, "createTime", Date.now());
        I(this, "updateTime", Date.now());
        I(this, "renderFinished", we.None);
        I(this, "error", X.None);
        I(this, "regenerateList", []);
        I(this, "useRegenerageIndex", 0);
        I(this, "editQuestionId", "");
        I(this, "isHistory", !1);
        I(this, "audioList", []);
        I(this, "inputType", al.TXT);
        I(this, "isEmptyError", !1);
        I(this, "isPreLoading", !1);
        I(this, "isStopping", !1);
        I(this, "isRename", !1);
        I(this, "fromPage", "");
        I(this, "intentResult", "");
        I(this, "ext", {});
        I(this, "searchResult");
        I(this, "searchResultShowConfig")
    }
    get isMine() {
        return this.roleType === $t.Ask
    }
    get isRecordFinished() {
        return this.transferStatus !== me.Transferring
    }
    get isRenderFinished() {
        return this.renderFinished > we.None
    }
    get isRenderFinishedAllAndNoneError() {
        return this.renderFinished === we.All && this.error === X.None
    }
    get textContent() {
        let e = "";
        switch (this.contentType) {
        case P.Text:
        case P.Markdown:
        case P.AISearchAsk:
        case P.TextToImageAsk:
        case P.GuideAsk:
        case P.MindMap:
        case P.Reasoning:
            e = this.content.text;
            break;
        case P.AiSearch:
            this.content.resourceType === vs.image ? e = "" : e = this.content.text;
            break
        }
        return e
    }
    get hadRenderContent() {
        var e, t, a, s, n, i;
        return this.contentType === P.PcPicSearch ? !!((t = (e = this.content) == null ? void 0 : e.picSearchList) != null && t.length || (a = this.content) != null && a.text) : this.contentType === P.AiSearch ? this.content.resourceType === vs.deepseek ? this.content.reasoningContent.length > 0 || this.textContent.length > 0 : ((s = this.content.webSearch) == null ? void 0 : s.length) > 0 || this.textContent.length > 0 : this.contentType === P.Calculator ? !!((i = (n = this.content) == null ? void 0 : n.cardList) != null && i.length) : this.textContent.length > 0
    }
    get isWaitingRender() {
        var t, a, s, n, i, l, u, d, m;
        const e = this.transferStatus === me.Transferring;
        return this.contentType === P.Doc ? e && !((a = (t = this.content) == null ? void 0 : t.books) != null && a.length || (n = (s = this.content) == null ? void 0 : s.onlineClass) != null && n.length || (l = (i = this.content) == null ? void 0 : i.docs) != null && l.length) : this.contentType === P.PcPicSearch ? e && !((d = (u = this.content) == null ? void 0 : u.picSearchList) != null && d.length || (m = this.content) != null && m.text) : e && !this.hadRenderContent
    }
    get errDesc() {
        return I0(this.error, this.category)
    }
}
class j2 {
    constructor(e, t) {
        I(this, "cocurrency");
        I(this, "consumer");
        I(this, "blockQueue");
        I(this, "workingCount");
        this.cocurrency = e,
        this.consumer = t,
        this.blockQueue = [],
        this.workingCount = 0
    }
    push(e) {
        return this.blockQueue.push(e),
        this.consume()
    }
    clear() {
        this.blockQueue = [],
        this.workingCount = 0
    }
    consume() {
        for (; this.workingCount < this.cocurrency; ) {
            const e = this.blockQueue.shift();
            if (!e)
                break;
            this.workingCount++,
            this.consumer(e).then( () => (this.workingCount--,
            this.consume()))
        }
    }
}
class dt {
}
class e0 extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "InsertMessageEvent");
        I(this, "message");
        this.message = t
    }
}
I(e0, "tag", "InsertMessageEvent");
class Re extends dt {
    constructor(t, a) {
        super();
        I(this, "eventName", "UpdateMessageEvent");
        I(this, "message");
        I(this, "kv");
        this.message = t,
        this.kv = a
    }
}
I(Re, "tag", "UpdateMessageEvent");
class gs extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "CheckSendableResEvent");
        I(this, "checkRes");
        this.checkRes = t
    }
}
I(gs, "tag", "CheckSendableResEvent");
class W0 extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "BeforeSendEvent");
        I(this, "message");
        this.message = t
    }
}
I(W0, "tag", "BeforeSendEvent");
class dr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "SendFinishedEvent");
        I(this, "message");
        this.message = t
    }
}
I(dr, "tag", "SendFinishedEvent");
class Yr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "SendErrorEvent");
        I(this, "message");
        this.message = t
    }
}
I(Yr, "tag", "SendErrorEvent");
class hr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ReplySegmentEvent");
        I(this, "message");
        this.message = t
    }
}
I(hr, "tag", "ReplySegmentEvent");
class E0 extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ReplyFinishedEvent");
        I(this, "message");
        this.message = t
    }
}
I(E0, "tag", "ReplyFinishedEvent");
class C0 extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ReplyErrorEvent");
        I(this, "message");
        this.message = t
    }
}
I(C0, "tag", "ReplyErrorEvent");
class Xr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "RenderFinishedEvent");
        I(this, "message");
        this.message = t
    }
}
I(Xr, "tag", "RenderFinishedEvent");
class Zr extends dt {
    constructor() {
        super(...arguments);
        I(this, "eventName", "BeforeDestroyEvent")
    }
}
I(Zr, "tag", "BeforeDestroyEvent");
class Jr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "AuditBanEvent");
        I(this, "message");
        this.message = t
    }
}
I(Jr, "tag", "AuditBanEvent");
class nl extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ResetMessengerEvent");
        I(this, "message");
        this.message = t
    }
}
I(nl, "tag", "ResetMessengerEvent");
class ea extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "DeleteMessageEvent");
        I(this, "message");
        this.message = t
    }
}
I(ea, "tag", "DeleteMessageEvent");
class ta extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ResetSessionEvent");
        I(this, "message");
        this.message = t
    }
}
I(ta, "tag", "ResetSessionEvent");
class mr extends dt {
    constructor(t) {
        super();
        I(this, "eventName", "ReplyRecognitionEvent");
        I(this, "message");
        this.message = t
    }
}
I(mr, "tag", "ReplyRecognitionEvent");
class W2 {
    constructor(e) {
        I(this, "cbMap", new Map);
        I(this, "handleEvent", e => {
            const t = this.cbMap.get(e.eventName);
            t && t.forEach(a => {
                a(e)
            }
            )
        }
        );
        e(this.handleEvent)
    }
    onCheckSendableRes(e) {
        const t = this.cbMap.get(gs.tag) || [];
        return this.cbMap.set(gs.tag, [...t, e]),
        this
    }
    onInsertMessage(e) {
        const t = this.cbMap.get(e0.tag) || [];
        return this.cbMap.set(e0.tag, [...t, e]),
        this
    }
    onUpdateMessage(e) {
        const t = this.cbMap.get(Re.tag) || [];
        return this.cbMap.set(Re.tag, [...t, e]),
        this
    }
    onBeforeSend(e) {
        const t = this.cbMap.get(W0.tag) || [];
        return this.cbMap.set(W0.tag, [...t, e]),
        this
    }
    onSendFinished(e) {
        const t = this.cbMap.get(dr.tag) || [];
        return this.cbMap.set(dr.tag, [...t, e]),
        this
    }
    onSendError(e) {
        const t = this.cbMap.get(Yr.tag) || [];
        return this.cbMap.set(Yr.tag, [...t, e]),
        this
    }
    onReplySegment(e) {
        const t = this.cbMap.get(hr.tag) || [];
        return this.cbMap.set(hr.tag, [...t, e]),
        this
    }
    onReplyFinished(e) {
        const t = this.cbMap.get(E0.tag) || [];
        return this.cbMap.set(E0.tag, [...t, e]),
        this
    }
    onReplyError(e) {
        const t = this.cbMap.get(C0.tag) || [];
        return this.cbMap.set(C0.tag, [...t, e]),
        this
    }
    onRenderFinished(e) {
        const t = this.cbMap.get(Xr.tag) || [];
        return this.cbMap.set(Xr.tag, [...t, e]),
        this
    }
    onBeforeDestoy(e) {
        const t = this.cbMap.get(Zr.tag) || [];
        return this.cbMap.set(Zr.tag, [...t, e]),
        this
    }
    onAuditBan(e) {
        const t = this.cbMap.get(Jr.tag) || [];
        return this.cbMap.set(Jr.tag, [...t, e]),
        this
    }
    onDeleteMessage(e) {
        const t = this.cbMap.get(ea.tag) || [];
        return this.cbMap.set(ea.tag, [...t, e]),
        this
    }
    onResetSession(e) {
        const t = this.cbMap.get(ta.tag) || [];
        return this.cbMap.set(ta.tag, [...t, e]),
        this
    }
    onReplyRecognition(e) {
        const t = this.cbMap.get(mr.tag) || [];
        return this.cbMap.set(mr.tag, [...t, e]),
        this
    }
}
async function K2(r, e) {
    const t = r.getReader();
    let a;
    for (; !(a = await t.read()).done; )
        e(a.value)
}
function Y2(r) {
    let e, t, a, s = !1;
    return function(i) {
        e === void 0 ? (e = i,
        t = 0,
        a = -1) : e = Z2(e, i);
        const l = e.length;
        let u = 0;
        for (; t < l; ) {
            s && (e[t] === 10 && (u = ++t),
            s = !1);
            let d = -1;
            for (; t < l && d === -1; ++t)
                switch (e[t]) {
                case 58:
                    a === -1 && (a = t - u);
                    break;
                case 13:
                    s = !0;
                case 10:
                    d = t;
                    break
                }
            if (d === -1)
                break;
            r(e.subarray(u, d), a),
            u = t,
            a = -1
        }
        u === l ? e = void 0 : u !== 0 && (e = e.subarray(u),
        t -= u)
    }
}
function X2(r, e, t) {
    let a = Xn();
    const s = new TextDecoder;
    return function(i, l) {
        if (i.length === 0)
            t == null || t(a),
            a = Xn();
        else if (l > 0) {
            const u = s.decode(i.subarray(0, l))
              , d = l + (i[l + 1] === 32 ? 2 : 1)
              , m = s.decode(i.subarray(d));
            switch (u) {
            case "data":
                a.data = a.data ? a.data + `
` + m : m;
                break;
            case "event":
                a.event = m;
                break;
            case "id":
                r(a.id = m);
                break;
            case "retry":
                const f = parseInt(m, 10);
                isNaN(f) || e(a.retry = f);
                break
            }
        }
    }
}
function Z2(r, e) {
    const t = new Uint8Array(r.length + e.length);
    return t.set(r),
    t.set(e, r.length),
    t
}
function Xn() {
    return {
        data: "",
        event: "",
        id: "",
        retry: void 0
    }
}
var J2 = function(r, e) {
    var t = {};
    for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && e.indexOf(a) < 0 && (t[a] = r[a]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, a = Object.getOwnPropertySymbols(r); s < a.length; s++)
            e.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, a[s]) && (t[a[s]] = r[a[s]]);
    return t
};
const ys = "text/event-stream"
  , e4 = 1e3
  , Zn = "last-event-id";
function t4(r, e) {
    var {signal: t, headers: a, onopen: s, onmessage: n, onclose: i, onerror: l, openWhenHidden: u, fetch: d} = e
      , m = J2(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
    return new Promise( (f, b) => {
        const g = Object.assign({}, a);
        g.accept || (g.accept = ys);
        let w;
        function M() {
            w.abort(),
            document.hidden || D()
        }
        u || document.addEventListener("visibilitychange", M);
        let E = e4
          , R = 0;
        function N() {
            document.removeEventListener("visibilitychange", M),
            window.clearTimeout(R),
            w.abort()
        }
        t == null || t.addEventListener("abort", () => {
            N(),
            f()
        }
        );
        const C = d ?? window.fetch
          , L = s ?? r4;
        async function D() {
            var _;
            w = new AbortController;
            try {
                const q = await C(r, Object.assign(Object.assign({}, m), {
                    headers: g,
                    signal: w.signal
                }));
                await L(q),
                await K2(q.body, Y2(X2(j => {
                    j ? g[Zn] = j : delete g[Zn]
                }
                , j => {
                    E = j
                }
                , n))),
                i == null || i(),
                N(),
                f()
            } catch (q) {
                if (!w.signal.aborted)
                    try {
                        const j = (_ = l == null ? void 0 : l(q)) !== null && _ !== void 0 ? _ : E;
                        window.clearTimeout(R),
                        R = window.setTimeout(D, j)
                    } catch (j) {
                        N(),
                        b(j)
                    }
            }
        }
        D()
    }
    )
}
function r4(r) {
    const e = r.headers.get("content-type");
    if (!(e != null && e.startsWith(ys)))
        throw new Error(`Expected content-type to be ${ys}, Actual: ${e}`)
}
class a4 {
    constructor(e) {
        I(this, "options");
        I(this, "esInstance", null);
        I(this, "ctrl", null);
        I(this, "handleMessage", () => {}
        );
        I(this, "handleError", () => {}
        );
        this.options = e,
        this.connect()
    }
    connect() {
        const {url: e, params: t={}, onopen: a, onmessage: s, onerror: n} = this.options
          , i = {
            source: "aitab",
            userType: 1,
            questionType: 1,
            ...t
        };
        window.AbortController ? (this.ctrl = new AbortController,
        t4(e, {
            signal: this.ctrl.signal,
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            body: Un.stringify(i),
            openWhenHidden: !0,
            onopen: a,
            onmessage: l => {
                s && s(l)
            }
            ,
            onerror: n
        })) : (this.esInstance = new EventSource(e + Un.stringify(i, {
            addQueryPrefix: !0
        }),{
            withCredentials: !0
        }),
        this.handleError = l => {
            n && n(new Error("sse error"))
        }
        ,
        this.handleMessage = l => {
            s && s({
                id: l.lastEventId,
                event: l.type,
                data: l.data
            })
        }
        ,
        this.esInstance.addEventListener(Ce.Error, this.handleError),
        this.esInstance.addEventListener(Ce.Verification, this.handleMessage),
        this.esInstance.addEventListener(Ce.Recognition, this.handleMessage),
        this.esInstance.addEventListener(Ce.Notification, this.handleMessage),
        this.esInstance.addEventListener(Ce.Rename, this.handleMessage),
        this.esInstance.addEventListener(Ce.Reset, this.handleMessage),
        this.esInstance.addEventListener(Ce.Heartbeat, this.handleMessage),
        this.esInstance.addEventListener(Ce.Finish, this.handleMessage),
        this.esInstance.addEventListener(Ce.AnswerTips, this.handleMessage),
        this.esInstance.addEventListener(Ce.Intent, this.handleMessage),
        this.esInstance.onopen = () => {
            a && a()
        }
        ,
        this.esInstance.onerror = l => {
            n && n(new Error("sse error"))
        }
        )
    }
    close() {
        this.ctrl && this.ctrl.abort(),
        this.esInstance && (this.esInstance.onopen = null,
        this.esInstance.onerror = null,
        this.esInstance.removeEventListener(Ce.Error, this.handleError),
        this.esInstance.removeEventListener(Ce.Verification, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Recognition, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Notification, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Rename, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Reset, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Heartbeat, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Finish, this.handleMessage),
        this.esInstance.removeEventListener(Ce.Intent, this.handleMessage),
        this.esInstance.removeEventListener(Ce.AnswerTips, this.handleMessage),
        this.esInstance.close())
    }
}
const pr = (r, e) => {
    switch (r) {
    case P.Markdown:
    case P.Text:
    case P.MindMap:
        return {
            text: ""
        };
    case P.Doc:
        return {
            books: [],
            onlineClass: [],
            docs: []
        };
    case P.TextToImage:
        return {
            text: "",
            rate: (e == null ? void 0 : e.rate) || "1:1"
        };
    case P.AiSearch:
    case P.Reasoning:
        return {
            text: "",
            reasoningContent: "",
            reasoningCostTime: 0
        };
    case P.PcPicSearch:
        return {
            text: "",
            picSearchList: []
        };
    case P.Calculator:
        return {
            cardList: []
        };
    default:
        throw new Error(`getInitContentByContentType failed, unknown contentType given: ${r}`)
    }
}
  , il = (r, e, t) => {
    var a;
    switch (r) {
    case P.Markdown:
    case P.Text:
    case P.MindMap:
        return {
            text: `${e.text}${t.text}`
        };
    case P.AiSearch:
        return {
            resourceType: t.resourceType || e.resourceType,
            text: `${e.text}${t.text}`,
            webSearch: t.webSearch || e.webSearch,
            reasoningContent: `${e.reasoningContent}${t.reasoningContent || ""}`,
            reasoningCostTime: t.reasoningCostTime || e.reasoningCostTime
        };
    case P.Doc:
        return {
            books: t.books,
            onlineClass: t.onlineClass,
            docs: t.docs
        };
    case P.TextToImage:
        return {
            text: t.text || e.text,
            image: t.image,
            rate: t.rate || e.rate
        };
    case P.Calculator:
        return {
            cardList: t.cardList
        };
    case P.Reasoning:
        return {
            text: `${e.text}${t.text}`,
            reasoningContent: `${e.reasoningContent}${t.reasoningContent || ""}`,
            reasoningCostTime: t.reasoningCostTime || e.reasoningCostTime
        };
    case P.PcPicSearch:
        const s = typeof t == "string" ? JSON.parse(t) : t
          , n = ((a = s.questionList) == null ? void 0 : a.length) > 0 ? s.questionList.slice(0, 4) : [];
        return {
            showVipMask: s.showVipMask || e.showVipMask,
            activityId: s.activityId || e.activityId,
            text: `${e.text || ""}${t.text || ""}` || "",
            picSearchList: (n != null && n.length ? n : e.picSearchList) || []
        };
    default:
        throw new Error(`handleContentTransferByContentType failed, unknown contentType given: ${r}`)
    }
}
;
class B0 {
    constructor(e) {
        I(this, "initOptions");
        I(this, "askStreamUrl", "/dxkits/aisearch/web/askstream");
        I(this, "esInstance", null);
        I(this, "curAskMsg", null);
        I(this, "curReplyMsg", null);
        I(this, "sseEventTimer", 0);
        I(this, "SseEventConsumeQueue", new j2(1,async e => {
            await this.handleConsumeSseEvent(e)
        }
        ));
        I(this, "emit", () => {}
        );
        I(this, "eventHandler", new W2(e => {
            this.emit = t => {
                e(t)
            }
        }
        ));
        I(this, "handleSent", e => {
            const {errNo: t, data: a} = e;
            if (t === X.CaptureOverLimit || t === X.UserInvalid) {
                bt("请打开大学搜题酱app扫码登录"),
                this.handleError(X.ManualStop),
                setTimeout( () => {
                    j0()
                }
                , 2800);
                return
            }
            t === X.None ? (this.emit(new Re(this.curAskMsg,{
                transferStatus: me.TransferSuccessful,
                renderFinished: we.All,
                ban: a.ban,
                svrId: a.questionId
            })),
            this.emit(new dr(this.curAskMsg)),
            this.curReplyMsg = this.generateReplyMessage(this.curAskMsg.localId),
            this.emit(new e0(this.curReplyMsg))) : this.handleError(t)
        }
        );
        I(this, "handleRecognition", e => {
            const {errNo: t, data: a} = e;
            t === X.None ? (this.emit(new Re(this.curReplyMsg,{
                svrId: a.answerId,
                contentType: a.contentType,
                category: a.messageCategory,
                content: pr(a.contentType, a)
            })),
            this.emit(new mr(this.curReplyMsg))) : this.handleError(t)
        }
        );
        I(this, "handleConsumeSseEvent", async e => {
            clearTimeout(this.sseEventTimer);
            try {
                const t = JSON.parse(e.data);
                switch (e.type) {
                case Ce.Verification:
                    this.handleSent(t);
                    break;
                case Ce.Recognition:
                    this.handleRecognition(t);
                    break;
                case Ce.Notification:
                    await this.handleReply(t);
                    break;
                case Ce.AnswerTips:
                    this.handleAnswerTips(t);
                    break;
                case Ce.Finish:
                    this.handleTransferFinished();
                    break;
                case Ce.Heartbeat:
                    break;
                case Ce.Rename:
                    this.handleRename(t);
                    break;
                case Ce.Reset:
                    this.handleReset();
                    break;
                case Ce.Intent:
                    this.handleIntent(t);
                    break;
                case Ce.Error:
                    this.handleError(t.errNo);
                    break
                }
            } catch {}
            (!this.curReplyMsg || !this.curReplyMsg.isRecordFinished) && this.esInstance && this.checkSseEventTimeout()
        }
        );
        I(this, "checkSseEventTimeout", () => {
            this.sseEventTimer = setTimeout( () => {
                this.handleError(X.ReplyTimeout)
            }
            , this.initOptions.eventTimeout)
        }
        );
        I(this, "handleAuditBanError", e => {
            var a;
            this.clear(),
            this.emit(new Jr(this.curAskMsg)),
            e === X.ReplyContentAuditResetSession && this.emit(new ta(this.curAskMsg));
            const t = {
                transferStatus: me.TransferSuccessful,
                renderFinished: we.All
            };
            if (e === X.AskContentAuditError && (t.contentType = P.Text,
            t.content = {
                text: new Array((a = this.curAskMsg) == null ? void 0 : a.textContent.length).fill("*").join("")
            }),
            this.emit(new Re(this.curAskMsg,t)),
            this.curReplyMsg)
                this.emit(new Re(this.curReplyMsg,{
                    contentType: P.Text,
                    content: {
                        text: I0(e, this.curReplyMsg.category)
                    },
                    error: e,
                    transferStatus: me.TransferFailed,
                    renderFinished: we.All,
                    isEmptyError: !0
                }));
            else {
                const s = this.generateReplyMessage(this.curAskMsg.localId);
                s.contentType = P.Text,
                s.content = {
                    text: I0(e, s.category)
                },
                s.transferStatus = me.TransferFailed,
                s.error = e,
                s.renderFinished = we.All,
                s.isEmptyError = !0,
                this.curReplyMsg = s,
                this.emit(new e0(s))
            }
            this.emit(new C0(this.curReplyMsg))
        }
        );
        I(this, "handleError", e => {
            if (this.clear(),
            [X.ReplyContentAuditError, X.ReplyContentAuditResetSession, X.AskContentAuditError].includes(e)) {
                this.handleAuditBanError(e);
                return
            }
            if (e === X.AskStreamOverLimit && bt("内容生成已停止，请稍后重试"),
            this.curReplyMsg) {
                const t = this.curReplyMsg.transferStatus === me.TransferSuccessful;
                this.curReplyMsg.hadRenderContent ? (this.emit(new Re(this.curReplyMsg,{
                    transferStatus: t ? me.TransferSuccessful : me.TransferFailed,
                    error: e,
                    renderFinished: e === X.ManualStop ? we.Some : this.curReplyMsg.renderFinished,
                    isStopping: e === X.ManualStop
                })),
                e === X.ReplyTimeout && bt("网络环境差，请稍后重试")) : this.emit(new Re(this.curReplyMsg,{
                    transferStatus: me.TransferFailed,
                    error: e,
                    contentType: P.Text,
                    content: {
                        text: I0(e, this.curReplyMsg.category)
                    },
                    renderFinished: we.All,
                    isEmptyError: !0
                })),
                this.emit(new C0(this.curReplyMsg))
            } else if ([X.ManualStop, X.Text2ImgOverLimit].includes(e)) {
                this.emit(new Re(this.curAskMsg,{
                    transferStatus: me.TransferSuccessful,
                    renderFinished: we.All
                }));
                const t = this.generateReplyMessage(this.curAskMsg.localId);
                t.contentType = P.Text,
                t.content = {
                    text: I0(e, t.category)
                },
                t.transferStatus = me.TransferFailed,
                t.error = e,
                t.renderFinished = we.All,
                t.isEmptyError = !0,
                this.curReplyMsg = t,
                this.emit(new e0(t)),
                this.emit(new C0(this.curReplyMsg))
            } else
                this.handleSendFailed()
        }
        );
        this.initOptions = e
    }
    getAskMessage() {
        return this.curAskMsg
    }
    getReplyMessage() {
        return this.curReplyMsg
    }
    closeStream() {
        this.esInstance && (this.esInstance.close(),
        this.esInstance = null)
    }
    clear() {
        clearTimeout(this.sseEventTimer),
        this.closeStream(),
        this.SseEventConsumeQueue.clear()
    }
    createAskMessage(e, t, a) {
        const s = new M0;
        return s.roleType = $t.Ask,
        s.contentType = e,
        s.content = t,
        s.category = a,
        s.sender = "",
        s.receiver = String(this.initOptions.scene),
        s.sessionId = this.initOptions.sessionId,
        s.renderFinished = we.All,
        s
    }
    createReplyMessage(e, t, a, s, n) {
        const i = new M0;
        return i.roleType = $t.Replay,
        i.askId = e,
        i.contentType = t,
        i.category = s,
        i.content = a,
        i.sender = String(this.initOptions.scene),
        i.receiver = "",
        i.sessionId = this.initOptions.sessionId,
        i.isDeepSeekReply = n || !1,
        i
    }
    beforeSend() {
        this.curAskMsg = this.generateAskMessage(),
        this.emit(new W0(this.curAskMsg)),
        this.emit(new e0(this.curAskMsg))
    }
    async sendMessage() {
        var a, s;
        this.clear(),
        this.beforeSend();
        const e = {
            ext: {
                ...this.initOptions.commonExt,
                editFlag: this.curAskMsg.editQuestionId ? "1" : "0",
                questionId: this.curAskMsg.editQuestionId || ""
            },
            fromPage: this.curAskMsg.fromPage || void 0
        }
          , t = await this.generateAskParams();
        if (t)
            try {
                const n = l => {
                    this.SseEventConsumeQueue.push(new MessageEvent(l.event,{
                        data: l.data
                    }))
                }
                  , i = l => {
                    throw Kr({
                        name: "ASK_SSE_FAIL",
                        message: l.message
                    }),
                    l.message,
                    this.SseEventConsumeQueue.push(new MessageEvent("error",{
                        data: JSON.stringify({
                            errNo: X.ReplyTimeout,
                            data: {}
                        })
                    })),
                    l
                }
                ;
                this.esInstance = new a4({
                    url: this.askStreamUrl,
                    params: {
                        vc: jo,
                        appId: this.initOptions.appId,
                        scene: this.initOptions.scene,
                        localMsgId: ((a = this.curAskMsg) == null ? void 0 : a.localId) || "",
                        sessionId: this.initOptions.sessionId,
                        chatPageFrom: this.initOptions.chatPageFrom,
                        ...e,
                        ...t,
                        ext: JSON.stringify({
                            ...e.ext || {},
                            ...t.ext || {},
                            ...((s = this.curAskMsg) == null ? void 0 : s.ext) || {}
                        })
                    },
                    onopen: () => {
                        Kr({
                            name: "ASK_SSE_SEND"
                        })
                    }
                    ,
                    onmessage: n,
                    onerror: i
                }),
                this.checkSseEventTimeout()
            } catch (n) {
                n.message,
                this.handleSendFailed()
            }
    }
    handleSendFailed() {
        this.clear(),
        this.emit(new Re(this.curAskMsg,{
            transferStatus: me.TransferFailed,
            error: X.SendFail,
            renderFinished: we.All
        })),
        this.emit(new Yr(this.curAskMsg))
    }
    handleAnswerTips(e) {
        const {errNo: t, data: a} = e;
        t === X.None ? this.emit(new Re(this.curReplyMsg,{
            answerTips: a.queryList || a.list,
            transferStatus: me.TransferSuccessful
        })) : this.handleError(t)
    }
    async handleReplyMessage(e, t) {
        const a = e.content;
        this.emit(new Re(t,{
            content: il(t.contentType, t.content, a),
            segment: e.seq
        }))
    }
    async handleReply(e) {
        const {errNo: t, data: a} = e;
        if (t === X.None) {
            if (!this.curAskMsg || this.curAskMsg.transferStatus === me.TransferFailed || !this.curReplyMsg || this.curReplyMsg.isRecordFinished)
                return;
            const s = this.curReplyMsg;
            await this.handleReplyMessage(a, s),
            this.emit(new hr(this.curReplyMsg))
        } else
            this.handleError(t)
    }
    handleTransferFinished() {
        if (this.curReplyMsg) {
            if (!this.curReplyMsg.hadRenderContent) {
                this.handleError(X.ReplyGptRespError);
                return
            }
            this.emit(new Re(this.curReplyMsg,{
                transferStatus: me.TransferSuccessful
            })),
            this.emit(new E0(this.curReplyMsg))
        }
        this.clear()
    }
    handleReset() {
        this.emit(new Re(this.curAskMsg,{
            transferStatus: me.Transferring,
            error: X.None
        })),
        this.curReplyMsg && (this.emit(new ea(this.curReplyMsg)),
        this.curReplyMsg = null),
        this.emit(new nl(this.curAskMsg))
    }
    handleIntent(e) {
        this.emit(new Re(this.curReplyMsg,{
            intentResult: e.data.intentResult
        }))
    }
    handleRename(e) {
        const {errNo: t, data: a} = e;
        if (t === X.None)
            if (a.state === sl.Success)
                this.curReplyMsg && this.emit(new Re(this.curReplyMsg,{
                    isRename: !0
                }));
            else {
                this.emit(new Re(this.curAskMsg,{
                    transferStatus: me.TransferSuccessful,
                    renderFinished: we.All,
                    error: X.UpdateNameError
                }));
                const s = this.generateReplyMessage(this.curAskMsg.localId);
                s.contentType = P.Text,
                s.content = {
                    text: a.errstr
                },
                s.transferStatus = me.TransferFailed,
                s.error = X.UpdateNameError,
                s.renderFinished = we.All,
                s.isRename = !0,
                s.isEmptyError = !0,
                this.curReplyMsg = s,
                this.emit(new e0(s)),
                this.emit(new E0(s)),
                this.emit(new C0(this.curReplyMsg))
            }
        else
            this.handleError(t)
    }
    canAbort() {
        return !0
    }
    async abort() {
        var a, s;
        this.clear();
        let e = ((a = this.curAskMsg) == null ? void 0 : a.svrId) || ""
          , t = ((s = this.curReplyMsg) == null ? void 0 : s.svrId) || "";
        this.handleError(X.ManualStop),
        e && t && pa({
            url: fa.StopAIChat,
            method: "POST",
            body: {
                questionId: String(e).includes("-") ? 0 : e,
                answerId: t,
                appId: this.initOptions.appId
            }
        })
    }
}
class ol extends B0 {
    constructor(t, a, s) {
        super(t);
        I(this, "tag", "NormalChatMessenger");
        I(this, "content", "");
        I(this, "category", Y.NormalAsk);
        this.content = a,
        this.category = s || Y.NormalAsk
    }
    async checkSendable() {
        return this.content ? $e.Success : $e.InputError
    }
    generateAskMessage() {
        return this.createAskMessage(P.Markdown, {
            text: this.content
        }, this.category)
    }
    generateReplyMessage(t) {
        return this.createReplyMessage(t, P.Markdown, {
            text: ""
        }, Y.NormalReply, this.category === Y.DeepSeekAsk)
    }
    async generateAskParams() {
        return {
            questionData: JSON.stringify({
                text: this.content
            }),
            messageCategory: this.category
        }
    }
}
class ll extends B0 {
    constructor(t, a, s) {
        super(t);
        I(this, "tag", "AiSearchMessenger");
        I(this, "content");
        I(this, "category");
        this.content = a,
        this.category = s
    }
    handleFormatContent() {
        return `${U2[this.category]}：${this.content.inputText || this.content.text}`
    }
    async checkSendable() {
        return this.content ? $e.Success : $e.InputError
    }
    generateAskMessage() {
        return this.createAskMessage(P.AISearchAsk, {
            ...this.content,
            text: this.content.inputText || this.content.text
        }, this.category)
    }
    generateReplyMessage(t) {
        const a = pr(P.AiSearch);
        return this.createReplyMessage(t, P.AiSearch, {
            ...a
        }, this.category === Y.AISearchImageAsk ? Y.AISearchImageReply : Y.AISearchLinkReply, this.category === Y.AISearchDeepSeekAsk)
    }
    async generateAskParams() {
        return {
            questionData: JSON.stringify({
                text: this.handleFormatContent()
            }),
            messageCategory: this.category
        }
    }
}
class Gs extends B0 {
    constructor(t, a, s=Y.PluginCaptureSearchAsk) {
        super(t);
        I(this, "tag", "ImageMessenger");
        I(this, "content");
        I(this, "category", Y.PluginCaptureSearchAsk);
        I(this, "handleSent", t => {
            const {errNo: a, data: s} = t;
            this.emit(new Re(this.curAskMsg,{
                transferStatus: me.TransferSuccessful,
                renderFinished: we.All,
                ban: s.ban,
                svrId: s.questionId
            })),
            this.emit(new dr(this.curAskMsg)),
            this.curReplyMsg = this.generateReplyMessage(this.curAskMsg.localId),
            this.emit(new e0(this.curReplyMsg)),
            a !== X.None && this.emit(new Re(this.curReplyMsg,{
                contentType: P.PcPicSearch,
                category: Y.PcPicSearchReply
            }))
        }
        );
        I(this, "handleRecognition", t => {
            const {errNo: a, data: s} = t;
            this.emit(new Re(this.curReplyMsg,{
                svrId: s.answerId,
                contentType: s.contentType,
                category: s.messageCategory,
                content: pr(s.contentType, s)
            })),
            this.emit(new mr(this.curReplyMsg))
        }
        );
        this.content = a,
        this.category = s ?? this.category
    }
    async checkSendable() {
        return this.content ? $e.Success : $e.InputError
    }
    generateAskMessage() {
        return this.createAskMessage(P.Image, {
            localUrl: this.content
        }, this.category)
    }
    generateReplyMessage(t) {
        const a = pr(P.Markdown);
        return this.createReplyMessage(t, P.Markdown, {
            ...a
        }, Y.PcPicSearchReply)
    }
    async generateAskParams() {
        var t;
        return (t = this.content) != null && t.includes("https://") && (this.content = await Uc(this.content)),
        {
            messageCategory: this.category,
            questionData: JSON.stringify({
                text: "pc截屏搜题"
            }),
            image: this.content.replace("data:image/png;base64,", "").replace("data:image/jpeg;base64,", "")
        }
    }
    async handleReply(t) {
        const {errNo: a, data: s} = t;
        if (!this.curAskMsg || this.curAskMsg.transferStatus === me.TransferFailed || !this.curReplyMsg || this.curReplyMsg.isRecordFinished)
            return;
        const n = this.curReplyMsg;
        await this.handleReplyMessage(s, n),
        this.emit(new hr(this.curReplyMsg))
    }
    handleTransferFinished() {
        this.curReplyMsg && (this.emit(new Re(this.curReplyMsg,{
            renderFinished: we.All,
            transferStatus: me.TransferSuccessful
        })),
        this.emit(new E0(this.curReplyMsg))),
        this.clear()
    }
}
class cl extends B0 {
    constructor(t, a) {
        super(t);
        I(this, "tag", "TranslateMessenger");
        I(this, "content", "");
        this.content = a
    }
    async checkSendable() {
        return this.content ? $e.Success : $e.InputError
    }
    generateAskMessage() {
        return this.createAskMessage(P.Markdown, {
            text: this.content
        }, Y.TranslateAsk)
    }
    generateReplyMessage(t) {
        return this.createReplyMessage(t, P.Markdown, {
            text: ""
        }, Y.TranslateReply)
    }
    async generateAskParams() {
        return {
            questionData: JSON.stringify({
                text: `翻译：${this.content}`
            }),
            messageCategory: Y.TranslateAsk
        }
    }
}
class s4 extends B0 {
    constructor(t, a, s) {
        super(t);
        I(this, "tag", "TextToImageMessenger");
        I(this, "content");
        this.content = a
    }
    canAbort() {
        return !0
    }
    handleFormatContent() {
        var t, a, s;
        return "帮我生成一张图片" + (this.content.inputText ? `：${this.content.inputText}` : "") + ((t = this.content.style) != null && t.content ? `，风格${this.content.style.content}` : "") + ((a = this.content.rate) != null && a.content ? `，比例${this.content.rate.content}` : "，比例1:1") + ((s = this.content.resolution) != null && s.content ? `，分辨率${this.content.resolution.content}` : "，分辨率高清")
    }
    async checkSendable() {
        return this.content ? $e.Success : $e.InputError
    }
    generateAskMessage() {
        return this.createAskMessage(P.TextToImageAsk, {
            ...this.content,
            text: this.handleFormatContent()
        }, Y.TextToImageAsk)
    }
    generateReplyMessage(t) {
        var s;
        const a = pr(P.TextToImage);
        return this.createReplyMessage(t, P.TextToImage, {
            ...a,
            rate: ((s = this.content.rate) == null ? void 0 : s.content) || a.rate
        }, Y.TextToImageReply)
    }
    async generateAskParams() {
        var t, a, s;
        return {
            questionData: JSON.stringify({
                text: this.handleFormatContent()
            }),
            messageCategory: Y.TextToImageAsk,
            ext: {
                style: ((t = this.content.style) == null ? void 0 : t.content) || "插画",
                rate: ((a = this.content.rate) == null ? void 0 : a.content) || "1:1",
                resolution: ((s = this.content.resolution) == null ? void 0 : s.content) || "高清"
            }
        }
    }
}
var t0 = (r => (r.ScrollToBottom = "ScrollToBottom",
r.ChangeShowContextMenu = "ChangeShowContextMenu",
r.UserNameChange = "UserNameChange",
r.InsertMessage = "InsertMessage",
r.ReplyRecognition = "ReplyRecognition",
r))(t0 || {});
class n4 extends B0 {
    constructor(t, a, s) {
        super(t);
        I(this, "tag", "RegenerateMessenger");
        I(this, "askMessage");
        I(this, "replyMessage");
        I(this, "proxy");
        I(this, "handleSent", t => {
            const {errNo: a} = t;
            a === X.None || this.handleError(a)
        }
        );
        switch (this.askMessage = s,
        this.replyMessage = a,
        this.askMessage.category) {
        case Y.AISearchLinkAsk:
        case Y.AISearchImageAsk:
            this.proxy = new ll(t,this.askMessage.content,this.askMessage.category);
            break;
        case Y.PluginCaptureSearchAsk:
            this.proxy = new Gs(t,this.askMessage.content.localUrl,this.askMessage.category);
            break;
        case Y.TranslateAsk:
            this.proxy = new cl(t,this.askMessage.content.text);
            break;
        case Y.TextToImageAsk:
            this.proxy = new s4(t,this.askMessage.content);
            break;
        case Y.NormalAsk:
        case Y.PresetAsk:
        case Y.Calculator:
        default:
            this.proxy = new ol(t,this.askMessage.content.text,this.askMessage.category)
        }
        this.proxy.emit = this.emit,
        this.eventHandler.onBeforeDestoy( () => {
            this.curReplyMsg && this.emit(new Re(this.curReplyMsg,{
                regenerateList: [...this.curReplyMsg.regenerateList, Object.assign({}, this.curReplyMsg, {
                    regenerateList: [],
                    isStopping: !1,
                    searchResult: void 0
                })]
            }))
        }
        )
    }
    async checkSendable() {
        return $e.Success
    }
    generateAskMessage() {
        return this.askMessage
    }
    beforeSend() {
        this.curAskMsg = this.generateAskMessage(),
        this.emit(new W0(this.curAskMsg));
        const t = this.generateReplyMessage(this.replyMessage.askId)
          , a = [...this.replyMessage.regenerateList];
        this.replyMessage.regenerateList.length === 0 ? a.push(Object.assign({}, this.replyMessage, {
            regenerateList: [],
            isStopping: !1,
            searchResult: void 0
        })) : this.replyMessage.regenerateList[this.replyMessage.useRegenerageIndex] && Object.assign(a[this.replyMessage.useRegenerageIndex], this.replyMessage, {
            regenerateList: [],
            searchResult: void 0,
            isStopping: !1
        }),
        t.localId = this.replyMessage.localId,
        t.regenerateList = a,
        t.useRegenerageIndex = a.length,
        t.searchResult = this.replyMessage.searchResult,
        this.curReplyMsg = t,
        this.emit(new Re(this.curReplyMsg,t)),
        ue.emit(t0.InsertMessage, {
            message: t
        })
    }
    async generateAskParams() {
        const t = await this.proxy.generateAskParams();
        return {
            ...t,
            ext: {
                ...(t == null ? void 0 : t.ext) || {},
                originReplyCategory: this.replyMessage.category,
                repeatCount: this.replyMessage.regenerateList.length + 1,
                editFlag: "0",
                questionId: ""
            },
            fromPage: void 0
        }
    }
    handleSendFailed() {
        this.tag,
        this.clear(),
        this.emit(new Re(this.replyMessage,{
            transferStatus: me.TransferFailed,
            error: X.ReplyServerError,
            contentType: P.Text,
            content: {
                text: I0(X.ReplyServerError)
            }
        }))
    }
    generateReplyMessage(t) {
        return this.proxy.generateReplyMessage(t)
    }
    async handleReplyMessage(t, a) {
        await this.proxy.handleReplyMessage(t, a)
    }
}
class i4 extends B0 {
    constructor(t, a, s) {
        super(t);
        I(this, "tag", "ImageAiSearchMessenger");
        I(this, "askMessage");
        I(this, "replyMessage");
        I(this, "proxy");
        I(this, "askStreamUrl", "/dxai/submit/web/aisearch");
        I(this, "handleRecognition", t => {
            const {errNo: a, data: s} = t;
            a === X.None ? this.emit(new Re(this.replyMessage,{
                transferStatus: me.Transferring,
                error: X.None,
                renderFinished: we.None
            })) : this.handleError(a)
        }
        );
        I(this, "handleSent", t => {
            const {errNo: a} = t;
            if (a === X.CaptureOverLimit || a === X.UserInvalid) {
                bt("请打开大学搜题酱app扫码登录"),
                this.handleError(X.ManualStop),
                setTimeout( () => {
                    j0()
                }
                , 2800);
                return
            }
            a === X.None || this.handleError(a)
        }
        );
        this.askMessage = s,
        this.replyMessage = a,
        this.proxy = new Gs(t,this.askMessage.content.localUrl,this.askMessage.category),
        this.proxy.emit = this.emit
    }
    async checkSendable() {
        return $e.Success
    }
    generateAskMessage() {
        return this.askMessage
    }
    generateReplyMessage() {
        return this.replyMessage
    }
    beforeSend() {
        this.curAskMsg = this.generateAskMessage(),
        this.curReplyMsg = this.generateReplyMessage(),
        this.emit(new W0(this.curAskMsg)),
        ue.emit(t0.InsertMessage, {
            message: this.replyMessage
        })
    }
    async generateAskParams() {
        const t = await this.proxy.generateAskParams();
        return {
            ...t,
            picType: 1,
            ext: {
                ...(t == null ? void 0 : t.ext) || {},
                editFlag: "0",
                questionId: ""
            },
            fromPage: void 0
        }
    }
    handleSendFailed() {
        this.tag,
        this.clear(),
        this.emit(new Re(this.replyMessage,{
            transferStatus: me.TransferFailed,
            error: X.ReplyServerError,
            content: {
                text: I0(X.ReplyServerError)
            }
        }))
    }
    async handleReplyMessage(t, a) {
        var n;
        const s = t.content;
        (n = a.content) == null || n.picSearchList,
        this.emit(new Re(a,{
            content: il(P.PcPicSearch, a.content, s),
            segment: t.seq
        }))
    }
    handleTransferFinished() {
        if (this.curReplyMsg) {
            if (!this.curReplyMsg.content.text) {
                this.curReplyMsg.content.text = "没有识别到题目，重新截图试试吧，精准框选你想要的题目识别更准确哦。",
                this.handleError(X.ImageAiSearchResultEmpty);
                return
            }
            this.emit(new Re(this.curReplyMsg,{
                transferStatus: me.TransferSuccessful
            })),
            this.emit(new E0(this.curReplyMsg))
        }
        this.clear()
    }
}
var ul = (r => (r.Home = "collegepcpi",
r.DeepSeekFromPicSearch = "DeepSeekFromPicSearch",
r.AIAgent = "AIAgent",
r))(ul || {});
Array.prototype.findLastIndex || (Array.prototype.findLastIndex = function(r) {
    const e = Object(this)
      , t = e.length;
    for (let a = t - 1; a >= 0; a--)
        if (r(e[a], a, e))
            return a;
    return -1
}
);
class o4 {
    constructor() {
        I(this, "inited", !1);
        I(this, "initOptions", {
            appId: "collegepcpi",
            scene: 1,
            sessionId: "",
            eventTimeout: 20 * 1e3,
            chatPageFrom: ul.Home,
            commonExt: {}
        });
        I(this, "curMessenger", null);
        I(this, "state", "idle");
        I(this, "requestCreateSessionPromise", null);
        I(this, "messageList", ma([]));
        I(this, "lastMessage", W( () => this.messageList[this.messageList.length - 1]));
        I(this, "lastQuestion", W( () => {
            var e;
            return (e = this.messageList) == null ? void 0 : e.findLast(t => t.isMine)
        }
        ));
        I(this, "historyMessageList", []);
        I(this, "clearMessageList", () => {
            this.historyMessageList = [];
            const e = this.messageList.find(t => t.contentType === P.GuideCard);
            this.messageList.splice(0, this.messageList.length),
            e && this.insertMessage(e, !1)
        }
        )
        window.chatCoreInstance = this; 
    }
    hasMoreHistory() {
        return this.historyMessageList.length > 0
    }
    loadChatList(e) {
        let t = "";
        const a = e.map( (s, n) => {
            if (s.contentType = s.isAsk ? P.Markdown : s.contentType,
            s.isAsk && s.messageCategory === Y.PluginCaptureSearchAsk && (s.contentType = P.Image),
            s.messageCategory === Y.PcPicSearchReply) {
                typeof s.content == "string" && (s.content = JSON.parse(s.content) || {});
                const {questionList: u} = s.content;
                s.content.picSearchList = u
            }
            const i = {
                ...s,
                roleType: s.isAsk ? $t.Ask : $t.Replay,
                transferStatus: me.TransferSuccessful,
                renderFinished: we.All,
                category: s.messageCategory,
                isHistory: !0,
                contentType: s.contentType
            }
              , l = new M0;
            return s.isAsk ? t = l.localId : i.askId = t,
            Object.assign(l, i),
            l
        }
        );
        this.messageList.splice(0, this.messageList.length, ...a)
    }
    async init(e={}) {
        Object.assign(this.initOptions, e),
        e.sessionId ? this.inited = !0 : await this.refreshSessionid(!0)
    }
    getInited() {
        return this.inited
    }
    getSessionId() {
        return this.initOptions.sessionId
    }
    getIsTransferring() {
        var t;
        const e = (t = this.curMessenger) == null ? void 0 : t.getReplyMessage();
        return (e == null ? void 0 : e.transferStatus) === me.Transferring
    }
    getAppId() {
        return this.initOptions.appId
    }
    getCurState() {
        return this.state
    }
    async refreshSessionid(e=!1) {
        Kr({
            name: "CREATE_CHAT_SESSION"
        });
        const t = ur();
        return this.inited = !1,
        (e || this.requestCreateSessionPromise === null) && (this.requestCreateSessionPromise = new Promise( (a, s) => {
            pa({
                url: fa.RefreshSessionId,
                method: "POST",
                body: {
                    appId: "collegepcpi",
                    uid: t.value.uid,
                    vc: jo,
                    vcname: "1.0"
                }
            }).then(n => {
                var i;
                (i = n.data) != null && i.sessionId ? (this.inited = !0,
                this.initOptions.sessionId = n.data.sessionId,
                a(!0)) : (this.requestCreateSessionPromise = null,
                s(!1))
            }
            ).catch(n => {
                Kr({
                    name: "CREATE_CHAT_SESSION_FAILED",
                    errNo: n.errNo
                }),
                n.errNo === 3 && bt("登录失效，请重新登录"),
                this.requestCreateSessionPromise = null,
                s(!1)
            }
            )
        }
        )),
        await this.requestCreateSessionPromise
    }
    getMessageList() {
        return this.messageList
    }
    getLastMessage() {
        return this.lastMessage
    }
    getLastQuestion() {
        return this.lastQuestion
    }
    getAskMessageByReplyMessage(e) {
        return this.messageList.find(t => t.localId === e.askId)
    }
    getCurAskMessage() {
        return this.curMessenger ? this.curMessenger.getAskMessage() : null
    }
    getCurReplyMessage() {
        return this.curMessenger ? this.curMessenger.getReplyMessage() : null
    }
    resetMessenger() {
        this.curMessenger && this.curMessenger.emit(new Zr),
        this.curMessenger = null,
        this.state = "idle"
    }
    deleteQuestionAndAnswer(e) {
        if (e.isMine) {
            const t = e.localId;
            if (this.deleteMessage(e.localId),
            t) {
                const a = this.messageList.findLastIndex(s => s.askId === t);
                a > -1 && this.deleteMessage(this.messageList[a].localId)
            }
        }
    }
    sendMessage(e) {
        let t;
        switch (e.category) {
        case Y.NormalAsk:
        case Y.PluginNormalAsk:
        case Y.Calculator:
            t = this.sendTextMessage(e.content.text, e.category);
            break;
        case Y.TranslateAsk:
            t = this.sendTranslateMessage(e.content.text);
            break;
        case Y.AISearchLinkAsk:
        case Y.AISearchImageAsk:
            t = this.sendAiSearchMessenger(e.content, e.category);
            break;
        case Y.PluginCaptureSearchAsk:
            t = this.sendImgMessage(e.content.localUrl, e.category);
            break;
        default:
            throw new Error(`sendMessage failed! unknown category given: ${e.category}`)
        }
        return t.onBeforeSend(a => {
            if (e.editMsgLocalId) {
                const s = this.messageList.findLastIndex(n => n.localId === e.editMsgLocalId);
                if (s > -1) {
                    const n = this.messageList[s];
                    n.svrId && n.isMine && this.curMessenger.emit(new Re(a.message,{
                        editQuestionId: n.svrId
                    })),
                    e.category !== Y.TextToImageAsk && this.deleteQuestionAndAnswer(n)
                }
            }
            this.curMessenger.emit(new Re(a.message,{
                inputType: e.inputType,
                fromPage: e.fromPage || "",
                ext: e.ext || {}
            }))
        }
        ),
        t
    }
    sendTextMessage(e, t) {
        const a = new ol(this.initOptions,e,t);
        return this.callMessengerSend(a),
        a.eventHandler
    }
    sendTranslateMessage(e) {
        const t = new cl(this.initOptions,e);
        return this.callMessengerSend(t),
        t.eventHandler
    }
    sendAiSearchMessenger(e, t) {
        const a = new ll(this.initOptions,e,t);
        return this.callMessengerSend(a),
        a.eventHandler
    }
    sendImgMessage(e, t, a={}) {
        t = t ?? Y.PluginCaptureSearchAsk;
        const s = new Gs(this.initOptions,e,t);
        return this.callMessengerSend(s),
        s.eventHandler
    }
    regenerateMessage(e, t) {
        const a = new n4(this.initOptions,e,t);
        return this.callMessengerSend(a),
        a.eventHandler
    }
    imageAiSearch(e, t) {
        const a = new i4(this.initOptions,e,t);
        return this.callMessengerSend(a),
        a.eventHandler
    }
    resendMessage(e) {
        return this.sendMessage({
            category: e.category,
            content: e.content,
            inputType: e.inputType,
            editMsgLocalId: e.editQuestionId ? e.localId : "",
            fromPage: e.fromPage,
            ext: e.ext
        }).onBeforeSend(a => {
            this.deleteMessage(e.localId)
        }
        )
    }
    unshiftMessage(e) {
        this.messageList.unshift(e)
    }
    insertMessage(e, t=!0) {
        this.messageList.push(e)
    }
    insertGuideCardMessage(e) {
        const t = new M0;
        t.contentType = P.GuideCard,
        t.roleType = $t.Replay,
        t.content = e,
        t.category = Y.GuideCardReply,
        t.renderFinished = we.All,
        t.transferStatus = me.TransferSuccessful,
        this.insertMessage(t, !1)
    }
    insertAgentGuideCardMessage(e) {
        const t = new M0;
        t.contentType = P.AgentGuideCard,
        t.roleType = $t.Replay,
        t.content = e,
        t.category = Y.GuideCardReply,
        t.renderFinished = we.All,
        t.transferStatus = me.TransferSuccessful,
        this.insertMessage(t, !0)
    }
    async insertWritingCardMessage(e) {
        const t = new M0;
        t.contentType = P.WritingCard,
        t.roleType = $t.Replay,
        t.content = e,
        t.category = Y.WritingCardReply,
        t.renderFinished = we.All,
        t.transferStatus = me.TransferSuccessful,
        await this.abort() && (this.insertMessage(t, !0),
        ue.emit(t0.InsertMessage, {
            message: t
        }))
    }
    async updateWritingCardMessage(e) {
        const t = this.messageList.find(s => s.contentType === P.WritingCard && s.content.id === e.id);
        if (t) {
            const s = t.content;
            this.updateMessage(t, {
                content: {
                    ...s,
                    ...e
                }
            });
            return
        }
        const a = this.historyMessageList.find(s => s.contentType === P.WritingCard && s.content.id === e.id);
        a && (e != null && e.isUpdateTitle && (e = {
            ...a.content,
            ...e
        }),
        a.content = e)
    }
    async deleteWritingCardMessage(e) {
        const t = this.messageList.find(s => s.contentType === P.WritingCard && s.content.id === e.id);
        if (t) {
            this.deleteMessage(t.localId);
            return
        }
        const a = this.historyMessageList.findIndex(s => s.contentType === P.WritingCard && s.content.id === e.id);
        a > -1 && (this.historyMessageList[a],
        this.historyMessageList.splice(a, 1))
    }
    deleteMessage(e, t=!0) {
        const a = this.messageList.findLastIndex(s => s.localId === e);
        a > -1 && this.messageList.splice(a, 1)
    }
    updateMessage(e, t, a=!0) {
        const s = this.messageList.findLastIndex(i => i.localId === e.localId);
        let n = !1;
        if (s > -1) {
            const i = this.messageList[s];
            n = [we.All, we.Some].includes(t.renderFinished) && !i.isRenderFinished && !i.isMine;
            const l = new M0;
            Object.assign(l, i, {
                updateTime: Date.now()
            }, t),
            this.messageList.splice(s, 1, l)
        }
        if (Object.assign(e, t),
        this.curMessenger)
            try {
                const i = this.curMessenger.getAskMessage()
                  , l = this.curMessenger.getReplyMessage();
                (i == null ? void 0 : i.localId) === e.localId && Object.assign(i, t),
                (l == null ? void 0 : l.localId) === e.localId && (Object.assign(l, t),
                n && this.curMessenger.emit(new Xr(l)))
            } catch (i) {
                console.error("updateMessage curMessenger err", i)
            }
    }
    async abort(e=!1) {
        if (this.curMessenger !== null)
            if (e)
                try {
                    await this.curMessenger.abort(),
                    this.resetMessenger()
                } catch {
                    return !1
                }
            else
                return bt(this.getSendErrMsg($e.Transferring)),
                !1;
        return !0
    }
    async checkSendable(e) {
        return ur().value.isLogin ? this.inited ? window.navigator.onLine ? await e.checkSendable() : $e.Offline : (this.refreshSessionid(),
        $e.NotInit) : (j0(),
        $e.NotLogin)
    }
    getSendErrMsg(e) {
        switch (e) {
        case $e.Success:
            return "Success";
        case $e.NotInit:
            return "暂时不可发送";
        case $e.Transferring:
            return "请稍等消息回复完成";
        case $e.RequestFailed:
            return "发送异常";
        case $e.InputError:
            return "请输入你的问题";
        case $e.Offline:
            return "无网络，请检查无误后再次发起聊天";
        case $e.NotLogin:
            return "请登录";
        default:
            return ""
        }
    }
    async callMessengerSend(e) {
        this.state = "processing";
        const t = await this.checkSendable(e);
        if (t !== $e.Success) {
            t !== $e.NotLogin && bt(this.getSendErrMsg(t)),
            this.state = "idle";
            return
        }
        if (!await this.abort()) {
            this.state = "idle";
            return
        }
        this.curMessenger = e,
        this.state = "processing",
        e.eventHandler.onInsertMessage(s => {
            this.insertMessage(s.message),
            ue.emit(t0.InsertMessage, {
                message: s.message
            })
        }
        ).onUpdateMessage(s => {
            this.updateMessage(s.message, s.kv)
        }
        ).onDeleteMessage(s => {
            this.deleteMessage(s.message.localId)
        }
        ).onSendError(s => {
            this.resetMessenger()
        }
        ).onReplyError(s => {
            this.resetMessenger()
        }
        ).onRenderFinished(s => {
            this.resetMessenger()
        }
        ).onAuditBan(s => {
            this.resetMessenger()
        }
        ).onReplyRecognition(s => {
            ue.emit(t0.ReplyRecognition, {
                message: s.message
            })
        }
        ).onResetSession(async () => {
            await this.refreshSessionid(!0),
            ue.emit("removeQuerySessionId", this.initOptions.sessionId)
        }
        );
        try {
            this.curMessenger.sendMessage()
        } catch {
            this.resetMessenger()
        }
    }
}
const Oe = new o4
  , l4 = {
    class: "example-cards"
}
  , c4 = ["onClick"]
  , u4 = {
    class: "mask-title"
}
  , d4 = oe({
    __name: "default-card",
    emits: ["close"],
    setup(r, {emit: e}) {
        const t = e
          , a = [{
            cardTitle: "Algebra",
            subTitle: "Numbers, Equations, and Functions",
            id: 101,
            answer: "人体在安静时主要产热器官是什么"
        }, {
            cardTitle: "Health Science",
            subTitle: "Health Systems, Nursing, and Physiology",
            id: 102,
            answer: "过去十年，中国一直在加速建设高铁系统的英文"
        }]
          , s = (n, i) => {
            t("close");
            const u = Oe.getMessageList().length ? 0 : 1;
            n.answer,
            Oe.sendMessage({
                category: Y.PluginNormalAsk,
                content: {
                    text: n.answer
                }
            }).onBeforeSend(d => {
                u && ue.emit("createFakeRecentChat")
            }
            ).onReplyFinished(d => {
                u && ue.emit("createSessionTitle", d.message.askId)
            }
            ).onReplyError(d => {
                u && ue.emit("createSessionTitle", d.message.askId)
            }
            ).onRenderFinished( () => {}
            )
        }
        ;
        return (n, i) => (S(),
        B("div", l4, [(S(),
        B(Te, null, Je(a, (l, u) => A("div", {
            key: u,
            class: "card",
            onClick: d => s(l)
        }, [A("div", u4, xe(l.answer), 1), i[0] || (i[0] = A("img", {
            class: "send-btn",
            src: G2
        }, null, -1))], 8, c4)), 64))]))
    }
})
  , h4 = ye(d4, [["__scopeId", "data-v-12587b42"]])
  , m4 = "" + new URL("mac.rYTB9J92.mp4",import.meta.url).href
  , p4 = "" + new URL("win.EHQCgCQi.mp4",import.meta.url).href
  , f4 = "" + new URL("cros.HocAwtAQ.mp4",import.meta.url).href
  , v4 = {
    class: "crop-guide-content"
}
  , g4 = {
    key: 0,
    class: "guide-title"
}
  , y4 = {
    class: "screenshot-guide--action"
}
  , A4 = ["src"]
  , b4 = {
    class: "strong"
}
  , w4 = {
    class: "strong"
}
  , x4 = {
    key: 1
}
  , k4 = oe({
    __name: "crop-guide-content",
    props: {
        isShowTitle: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["closeDialog"],
    setup(r, {emit: e}) {
        const t = e
          , a = z()
          , s = z()
          , n = () => {
            window.open("/download-app"),
            t("closeDialog")
        }
          , i = () => {
            window.open("/extension?utm_source=quickentry"),
            t("closeDialog")
        }
          , l = {
            mac: {
                type: "mac",
                crop: "shift+control+command+4",
                paste: "command+v",
                videoSrc: m4
            },
            win: {
                type: "win",
                crop: "shift+windows+s",
                paste: "ctrl+v",
                videoSrc: p4
            },
            cros: {
                type: "cros",
                crop: "shift+ctrl+口||",
                paste: "ctrl+v",
                videoSrc: f4
            }
        };
        return Ne( () => {
            const u = Vc();
            a.value = u,
            l[u] && (s.value = l[u].videoSrc)
        }
        ),
        (u, d) => {
            var m, f;
            return S(),
            B("div", v4, [k(a) ? (S(),
            B(Te, {
                key: 0
            }, [r.isShowTitle ? (S(),
            B("div", g4, 'Tired of typing? Use "Screenshot" like this to capture a picture of your problems!')) : J("", !0), A("div", y4, [A("video", {
                id: "guideVideo",
                autoplay: "",
                class: "guide-video",
                loop: "true",
                src: k(s),
                muted: ""
            }, null, 8, A4)]), A("p", null, [d[0] || (d[0] = ut(' 1.On the target page, press " ')), A("span", b4, xe((m = l[k(a)]) == null ? void 0 : m.crop), 1), d[1] || (d[1] = ut(' " at the same time to take a screenshot. '))]), A("p", null, [d[2] || (d[2] = ut(` 2.In the current page's chat box, press " `)), A("span", w4, xe((f = l[k(a)]) == null ? void 0 : f.paste), 1), d[3] || (d[3] = ut(' " to paste. '))]), d[7] || (d[7] = A("p", null, "3.Click the send button to send the screenshot.", -1)), A("p", {
                class: "link-p"
            }, [d[4] || (d[4] = ut(" If you are still unable to take a screenshot, you can click to ")), A("span", {
                class: "link",
                onClick: n
            }, "download the app"), d[5] || (d[5] = ut(" and ask questions by taking photos, or ")), A("span", {
                class: "link",
                onClick: i
            }, "add a plugin"), d[6] || (d[6] = ut(" for direct screenshot capture. "))])], 64)) : (S(),
            B("p", x4, " There is no suitable screenshot method. I recommend you can click to download the app and ask questions by taking photos, or add a plugin for direct screenshot capture. "))])
        }
    }
})
  , S4 = ye(k4, [["__scopeId", "data-v-4e10e91c"]])
  , T4 = "" + new URL("install-plugin.BZvAxEQS.mp4",import.meta.url).href
  , M4 = {
    class: "plugin-guide-content"
}
  , I4 = ["src"]
  , C4 = oe({
    __name: "plugin-guide-content",
    props: {
        isEdgeBrower: {
            type: Boolean,
            default: !1
        },
        from: {
            type: String,
            default: ""
        }
    },
    setup(r) {
        const e = () => {}
        ;
        return (t, a) => (S(),
        B("div", M4, [a[0] || (a[0] = A("div", {
            class: "plugin-guide-video"
        }, [A("video", {
            id: "guideVideo",
            autoplay: "",
            class: "guide-video",
            loop: "true",
            src: T4,
            muted: ""
        })], -1)), A("div", {
            class: pe(["plugin-guide-install", {
                edge: r.isEdgeBrower,
                chrome: !r.isEdgeBrower
            }]),
            onClick: e
        }, [A("img", {
            src: r.isEdgeBrower ? "https://cdn-img.daxuesoutijiang.com/dx-site/home/screenshot-guide/add-to-edge.png" : "https://cdn-img.daxuesoutijiang.com/dx-site/home/screenshot-guide/add-to-chrome.png",
            alt: ""
        }, null, 8, I4)], 2), a[1] || (a[1] = A("img", {
            src: "https://cdn-img.daxuesoutijiang.com/dx-site/home/screenshot-guide/screen-shot-brower-footer.png",
            alt: "brower-footer",
            class: "plugin-guide-brower-footer"
        }, null, -1))]))
    }
})
  , R4 = ye(C4, [["__scopeId", "data-v-4857d988"]])
  , E4 = oe({
    __name: "guide-content",
    props: {
        isShowTitle: {
            type: Boolean,
            default: !1
        },
        from: {
            type: String,
            default: ""
        },
        chatFromType: {
            type: String,
            default: "home"
        }
    },
    setup(r) {
        const e = z(!1)
          , t = z(!1);
        return Ne( () => {
            e.value = va(),
            t.value = qs()
        }
        ),
        (a, s) => r.chatFromType === "plugin" ? (S(),
        ge(R4, {
            key: 0,
            "is-show-title": r.isShowTitle,
            "is-edge-brower": k(e),
            from: r.from
        }, null, 8, ["is-show-title", "is-edge-brower", "from"])) : (S(),
        ge(S4, {
            key: 1,
            from: r.from
        }, null, 8, ["from"]))
    }
})
  , B4 = {
    key: 0,
    class: "screenshot-guide__dialog"
}
  , z4 = {
    class: "screeshot-guide-header"
}
  , L4 = oe({
    __name: "dialog",
    props: {
        isMini: {
            type: Boolean,
            default: !1
        }
    },
    setup(r) {
        const e = z(!1)
          , t = () => {
            e.value = !0
        }
          , a = () => {
            e.value = !1
        }
          , s = {
            mounted(n, i) {
                document.addEventListener("click", l => {
                    n.contains(l.target) || i.value()
                }
                , !1)
            },
            unmounted() {
                document.removeEventListener("click", () => {}
                )
            }
        };
        return (n, i) => ft((S(),
        B("div", {
            class: pe(["screenshot-guide", {
                isMini: r.isMini,
                isShowArrow: k(e)
            }])
        }, [k(e) ? (S(),
        B("div", B4, [A("div", z4, [i[2] || (i[2] = A("div", null, "How to take screenshots on all websites?", -1)), A("div", {
            class: "close-btn",
            onClick: i[0] || (i[0] = l => e.value = !1)
        })]), Z(E4, {
            onCloseDialog: i[1] || (i[1] = l => e.value = !1)
        })])) : J("", !0), A("div", {
            class: "tips-icon single-icon",
            onClick: jt(t, ["stop"])
        }), A("div", {
            class: "upload-tips",
            onClick: jt(t, ["stop"])
        }, i[3] || (i[3] = [ut(" tutorial "), A("div", {
            class: "tips-icon"
        }, null, -1)]))], 2)), [[s, a]])
    }
})
  , O4 = ye(L4, [["__scopeId", "data-v-2b9b0a6a"]])
  , N4 = {
    class: "home-upload-img-wrap"
}
  , D4 = oe({
    __name: "ChatUploadImg",
    props: {
        isMini: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["handleFileChooserClick", "handleScreenShareClick"],
    setup(r, {emit: e}) {
        const t = ga()
          , a = z(!1)
          , s = e
          , n = z(!1)
          , i = z(!1)
          , l = z(!1)
          , u = z(Vn.Chat);
        t.path.includes("/questions") && (u.value = Vn.Questionchat);
        const d = () => {
            s("handleFileChooserClick")
        }
          , m = () => {
            Q0(st.hasShowExampleQuestion) || (a.value = !0,
            V0(st.hasShowExampleQuestion, "1"))
        }
        ;
        return Ne( () => {
            n.value = va(),
            i.value = qs(),
            "getDisplayMedia"in navigator.mediaDevices && "CaptureController"in window ? l.value = !0 : l.value = !1,
            m()
        }
        ),
        (f, b) => (S(),
        B("div", N4, [k(a) ? (S(),
        ge(h4, {
            key: 0,
            onClose: b[0] || (b[0] = g => a.value = !1)
        })) : J("", !0), A("div", {
            class: pe(["upload-img-wrap", {
                isMini: r.isMini
            }]),
            onClick: d
        }, [b[3] || (b[3] = A("div", {
            class: "upload-icon"
        }, null, -1)), b[4] || (b[4] = A("div", {
            class: "upload-desc"
        }, [ut(" 拖拽或"), A("span", {
            class: "highlight"
        }, "上传"), ut("你的图片 ")], -1)), k(l) && (k(n) || k(i)) ? (S(),
        ge(uu, {
            key: 0,
            "is-mini": r.isMini,
            from: k(u),
            "from-type": "input",
            onClick: b[1] || (b[1] = jt(g => s("handleScreenShareClick"), ["stop"]))
        }, null, 8, ["is-mini", "from"])) : (S(),
        ge(O4, {
            key: 1,
            "is-mini": r.isMini,
            onClick: b[2] || (b[2] = jt( () => {}
            , ["stop"]))
        }, null, 8, ["is-mini"]))], 2)]))
    }
})
  , F4 = ye(D4, [["__scopeId", "data-v-135fdfdc"]])
  , _4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAACE4AAAhOAFFljFgAAAF8UlEQVRYw+2Yz29bWRXHv9/7nh3HduI0ju3EnZGSFo2qTosYygiQQApoFrBjh5CQZsOCBWKDxLpCs56/gS0tKgvEvpoKBoTaRUAjMu0MgYpM4ud4ksZ9ju13z5fFey4laWqnTTSbHunJvta973z8PT/ufQ94Za/sizW+yKJarRaYWZPONQ14m9JFAK9DKoMMABwA+AzAJ478UORDm539d+fBA3/mgLVGo+69/z6layCXBBQhOQAhAQcyEOAghQAcyQGALZB/dsBvoij6z5kANpaWqon3qzL7AaRpAgEAp1SxAFJAIAAZZoCjcQqczumT/LUjfxdF0WeT+A0mmVSv1+e89z+V9C0AU9kfI1OFXDZ2mYKjcUCAWchdpnKewDUBb5ZLpT/GcRy/tILztdqblH4M6fxTijlInsAmnVsX+TdHPmQYfh5KHA6H8wBWJH1NKdCXIJVGKYBU0Q2Qv9qJojsvDNhoNCpD738Jqcn0pk5kQGAP0i3n3Nrq6mrr5s2betb61dVV/v2jj87L7BuQfgZgMVPYSQpIfurIH0VR1Dox4OLi4vwwSd4VcBkAs5wCyTskb0VRtDtJeoysWq3WQP5cwA8h5TIVSfJPzrlfRK3WM4vn2BwsFArfgfR1pGEBSJH8IAyCG61Wa/8kcADQ6/Xicql0V8A8gCtPVf15Ad1eHH84MWB9aWnee/8u05ukMpN3EIa/bW9v904KN7I4jvvlUumvkOZJvpWFOwfgWrlUuhXH8d7hNe7wD81m0/kk+TaAUIAJMAAdSr/vbG29MNzIoih6RPJ9AC0ATmk+liX9ZHl5ORwL2Pe+JuANkB6kB3AA8g87Ozt7E1OMsXa73RL5vqQhpABAYNI73W734lhAmi3AbA6SATCQmyD/cVpwTxxLHwC4P+qfJC+AHA8I6Q2mTdbDLAnIB99dXe2cNuCVK1f+5Zz7C8kw640zkr43FlBAI8s9T9IkPTiuz72M3b59WyDvYLQNpp9fPjzvSFIKmAPglX7HVBi2JvZ6UjNbh5TLFATSnvt8QAA5kDbq4Pl8vntmgEArgxu5mz884WiRSB5myegieerhHVm73X5E8v4T3+QnYwEB9EgaSU/SDwaD0hkqSADvEbjPtKLfOzzhSIhJtr3UzIYaeD8P4NSreCRQO4puALiRpfyRaB1R0Mht/E9BI/Da9evXz0rB4KkKdsdN+D8rlcuEdAFmgCRIvHfv3sPHjx/3T5Ps0qVLLgiCqWEYBiFA7xxhliDdWo9X0KX77uepmPQA5pIkee20pdvf38/1+/1ckQyKxWJQqVSwtLRkh+cdASwWi7sA/knSC/AGQM59tdFoFE8LrtFouEePHs1470Mzc2bmpsPQNjc3xwNubGxYLpdbEzlQuhcbzKaTJHmrWq3mXxZueXnZ9aRZMwvNLMgud/Xq1T559Pz8zPNgt9vtF2dmIKlOM2XhnqNzU8VisRXH8Ymfb5Ed5Q4ODs7R+3KQy8FIynuUSqV4bW1t8Kw17rib5YJg3QGbWembAHiziwZ8ZWFhYfqkcJVKJYzjeGE4HM6YmaPkckHggkIhaTQaB8etOxZwa3OzGwbBbZIdkibAgzR5f8HM3qnX6yuLi4ul57UgSWg0GvlarXYuzOeXPTknKZDkzCygZK8vLu6ura0dG5Gxj521Wq3ppbcFlCEZJZ+FfCBy1wFtku2pqalupVIZFAoFdTqd/H6vV7AkKcv7aZI5AEqc8xgMLNupDsIw7LTb7eee0id6s9BsNqf7g8E3ZVYFIJJmgAdgMPNMT9+JkYYkSZxzHqT3pGeS+NG2SdIGgA+kx3Ozs9sbGxvJON8TvVnY399PKrOz2wCGAM4h7aZGaVRAAmkiBTPLqtFAQv7JyU0kNVUo7MzX651PP/54LNzECh5Ss3QwGKyIXID3BUggaSD9UwoagFRRYOikA+fcXrVa3VlfXx+cxN9ECh5Sc3hhZSXq9nrtnHM7ABKSRueo9Lhmzrmhcy4OwnA3n89vhUHQvnz58t7du3dfqD29slf2Rdp/ARqA2oQ5JAwoAAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAANgAAAABAAAA2AAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAAAGU9WPAAAAEXRFWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAAXdEVYdGV4aWY6RXhpZkltYWdlTGVuZ3RoADYw94uaxQAAABZ0RVh0ZXhpZjpFeGlmSW1hZ2VXaWR0aAA2MLp5J0AAAAASdEVYdGV4aWY6RXhpZk9mZnNldAA3OMnUeycAAAAASUVORK5CYII="
  , $4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEUAAAD/Wi3/VCv/Uyv/VCn/VCn/Uyn/Uyn/Vir/Uyn/Uyn/Uyn/Vyr/VCv/VCr/Uyr/Uyn/Uyn/Uyr/VCn/Uyn/kHb/5d/////qCAvRAAAAFHRSTlMABClOl8br+CCL0/QgHX0Yu/lF1z7PmwcAAAABYktHRBcL1piPAAAACXBIWXMAACE4AAAhOAFFljFgAAAA00lEQVQ4y9WUyxKDIAxFladARdAI//+n3Tg0oDDprr07hjMJuSSZpn/TzLiQSmslBWdzn1uMdXDJWfPqYKsv1MX69YnbQoRGMWx3bj/gQcd+i/fIARxNzDVAR6F+p489MPrKF1zvmdKJa1+QzwbHSDknfDYf55nFFznnjM+WFZC7Eeh4AQWMQBAFlGNQFlCNQVVAPQZ1B2ztQWCdujEcp66LuUl27LlJdAxvUyPD6y9si0FfSG6K6TVqs2oYqY1LHwXycNHHlb4A6CuFvqS+WHs/qjczkT4pB07QowAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAADYAAAAAQAAANgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADygAwAEAAAAAQAAADwAAAAABlPVjwAAABF0RVh0ZXhpZjpDb2xvclNwYWNlADEPmwJJAAAAF3RFWHRleGlmOkV4aWZJbWFnZUxlbmd0aAA2MPeLmsUAAAAWdEVYdGV4aWY6RXhpZkltYWdlV2lkdGgANjC6eSdAAAAAEnRFWHRleGlmOkV4aWZPZmZzZXQANzjJ1HsnAAAAAElFTkSuQmCC"
  , P4 = () => {
    let r = -1
      , e = !1
      , t = !1;
    const a = 2500
      , s = {
        "\\(": "\\)",
        "\\[": "\\]",
        $: "$"
    };
    function n(d) {
        let m = 1;
        for (; m < d.length; ) {
            if (d[m] === "$" && d[m - 1] !== "\\")
                return m;
            m++
        }
        return -1
    }
    const i = d => /^(?:\\[([]|\$)/.exec(d)
      , l = d => /^[#\*\-\s]+(?=[\u4e00-\u9fff\w])/u.exec(d);
    function u(d) {
        const m = i(d)
          , f = l(d);
        let b = 0;
        if (t)
            b = d.length;
        else if (m != null && m.length) {
            const g = m[0]
              , w = s[g];
            if (g === "$") {
                const M = n(d);
                M > -1 && (b = M + 1)
            } else {
                const M = d.indexOf(w);
                M > -1 && (b = M + w.length)
            }
        } else
            f != null && f.length ? b = f[0].length : b = 1;
        return b === 0 && !e ? (e = !0,
        clearTimeout(r),
        r = window.setTimeout( () => {
            e = !1,
            t = !0
        }
        , a)) : b > 0 && (clearTimeout(r),
        t = !1,
        e = !1),
        b
    }
    return {
        getSliceIndex: u
    }
}
;
class xt {
    constructor(e, t, a) {
        this.lexer = void 0,
        this.start = void 0,
        this.end = void 0,
        this.lexer = e,
        this.start = t,
        this.end = a
    }
    static range(e, t) {
        return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new xt(e.loc.lexer,e.loc.start,t.loc.end) : e && e.loc
    }
}
class Bt {
    constructor(e, t) {
        this.text = void 0,
        this.loc = void 0,
        this.noexpand = void 0,
        this.treatAsRelax = void 0,
        this.text = e,
        this.loc = t
    }
    range(e, t) {
        return new Bt(t,xt.range(this, e))
    }
}
class $ {
    constructor(e, t) {
        this.name = void 0,
        this.position = void 0,
        this.length = void 0,
        this.rawMessage = void 0;
        var a = "KaTeX parse error: " + e, s, n, i = t && t.loc;
        if (i && i.start <= i.end) {
            var l = i.lexer.input;
            s = i.start,
            n = i.end,
            s === l.length ? a += " at end of input: " : a += " at position " + (s + 1) + ": ";
            var u = l.slice(s, n).replace(/[^]/g, "$&̲"), d;
            s > 15 ? d = "…" + l.slice(s - 15, s) : d = l.slice(0, s);
            var m;
            n + 15 < l.length ? m = l.slice(n, n + 15) + "…" : m = l.slice(n),
            a += d + u + m
        }
        var f = new Error(a);
        return f.name = "ParseError",
        f.__proto__ = $.prototype,
        f.position = s,
        s != null && n != null && (f.length = n - s),
        f.rawMessage = e,
        f
    }
}
$.prototype.__proto__ = Error.prototype;
var H4 = function(e, t) {
    return e.indexOf(t) !== -1
}
  , q4 = function(e, t) {
    return e === void 0 ? t : e
}
  , Q4 = /([A-Z])/g
  , G4 = function(e) {
    return e.replace(Q4, "-$1").toLowerCase()
}
  , U4 = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;"
}
  , V4 = /[&><"']/g;
function j4(r) {
    return String(r).replace(V4, e => U4[e])
}
var dl = function r(e) {
    return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e
}
  , W4 = function(e) {
    var t = dl(e);
    return t.type === "mathord" || t.type === "textord" || t.type === "atom"
}
  , K4 = function(e) {
    if (!e)
        throw new Error("Expected non-null, but got " + String(e));
    return e
}
  , Y4 = function(e) {
    var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
    return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative"
}
  , ee = {
    contains: H4,
    deflt: q4,
    escape: j4,
    hyphenate: G4,
    getBaseElem: dl,
    isCharacterBox: W4,
    protocolFromUrl: Y4
}
  , Qr = {
    displayMode: {
        type: "boolean",
        description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
        cli: "-d, --display-mode"
    },
    output: {
        type: {
            enum: ["htmlAndMathml", "html", "mathml"]
        },
        description: "Determines the markup language of the output.",
        cli: "-F, --format <type>"
    },
    leqno: {
        type: "boolean",
        description: "Render display math in leqno style (left-justified tags)."
    },
    fleqn: {
        type: "boolean",
        description: "Render display math flush left."
    },
    throwOnError: {
        type: "boolean",
        default: !0,
        cli: "-t, --no-throw-on-error",
        cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
    },
    errorColor: {
        type: "string",
        default: "#cc0000",
        cli: "-c, --error-color <color>",
        cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
        cliProcessor: r => "#" + r
    },
    macros: {
        type: "object",
        cli: "-m, --macro <def>",
        cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
        cliDefault: [],
        cliProcessor: (r, e) => (e.push(r),
        e)
    },
    minRuleThickness: {
        type: "number",
        description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
        processor: r => Math.max(0, r),
        cli: "--min-rule-thickness <size>",
        cliProcessor: parseFloat
    },
    colorIsTextColor: {
        type: "boolean",
        description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
        cli: "-b, --color-is-text-color"
    },
    strict: {
        type: [{
            enum: ["warn", "ignore", "error"]
        }, "boolean", "function"],
        description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
        cli: "-S, --strict",
        cliDefault: !1
    },
    trust: {
        type: ["boolean", "function"],
        description: "Trust the input, enabling all HTML features such as \\url.",
        cli: "-T, --trust"
    },
    maxSize: {
        type: "number",
        default: 1 / 0,
        description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
        processor: r => Math.max(0, r),
        cli: "-s, --max-size <n>",
        cliProcessor: parseInt
    },
    maxExpand: {
        type: "number",
        default: 1e3,
        description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
        processor: r => Math.max(0, r),
        cli: "-e, --max-expand <n>",
        cliProcessor: r => r === "Infinity" ? 1 / 0 : parseInt(r)
    },
    globalGroup: {
        type: "boolean",
        cli: !1
    }
};
function X4(r) {
    if (r.default)
        return r.default;
    var e = r.type
      , t = Array.isArray(e) ? e[0] : e;
    if (typeof t != "string")
        return t.enum[0];
    switch (t) {
    case "boolean":
        return !1;
    case "string":
        return "";
    case "number":
        return 0;
    case "object":
        return {}
    }
}
class Us {
    constructor(e) {
        this.displayMode = void 0,
        this.output = void 0,
        this.leqno = void 0,
        this.fleqn = void 0,
        this.throwOnError = void 0,
        this.errorColor = void 0,
        this.macros = void 0,
        this.minRuleThickness = void 0,
        this.colorIsTextColor = void 0,
        this.strict = void 0,
        this.trust = void 0,
        this.maxSize = void 0,
        this.maxExpand = void 0,
        this.globalGroup = void 0,
        e = e || {};
        for (var t in Qr)
            if (Qr.hasOwnProperty(t)) {
                var a = Qr[t];
                this[t] = e[t] !== void 0 ? a.processor ? a.processor(e[t]) : e[t] : X4(a)
            }
    }
    reportNonstrict(e, t, a) {
        var s = this.strict;
        if (typeof s == "function" && (s = s(e, t, a)),
        !(!s || s === "ignore")) {
            if (s === !0 || s === "error")
                throw new $("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"),a);
            s === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + t + " [" + e + "]"))
        }
    }
    useStrictBehavior(e, t, a) {
        var s = this.strict;
        if (typeof s == "function")
            try {
                s = s(e, t, a)
            } catch {
                s = "error"
            }
        return !s || s === "ignore" ? !1 : s === !0 || s === "error" ? !0 : s === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")),
        !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + t + " [" + e + "]")),
        !1)
    }
    isTrusted(e) {
        if (e.url && !e.protocol) {
            var t = ee.protocolFromUrl(e.url);
            if (t == null)
                return !1;
            e.protocol = t
        }
        var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
        return !!a
    }
}
class d0 {
    constructor(e, t, a) {
        this.id = void 0,
        this.size = void 0,
        this.cramped = void 0,
        this.id = e,
        this.size = t,
        this.cramped = a
    }
    sup() {
        return qt[Z4[this.id]]
    }
    sub() {
        return qt[J4[this.id]]
    }
    fracNum() {
        return qt[e5[this.id]]
    }
    fracDen() {
        return qt[t5[this.id]]
    }
    cramp() {
        return qt[r5[this.id]]
    }
    text() {
        return qt[a5[this.id]]
    }
    isTight() {
        return this.size >= 2
    }
}
var Vs = 0
  , ra = 1
  , U0 = 2
  , r0 = 3
  , fr = 4
  , Et = 5
  , K0 = 6
  , pt = 7
  , qt = [new d0(Vs,0,!1), new d0(ra,0,!0), new d0(U0,1,!1), new d0(r0,1,!0), new d0(fr,2,!1), new d0(Et,2,!0), new d0(K0,3,!1), new d0(pt,3,!0)]
  , Z4 = [fr, Et, fr, Et, K0, pt, K0, pt]
  , J4 = [Et, Et, Et, Et, pt, pt, pt, pt]
  , e5 = [U0, r0, fr, Et, K0, pt, K0, pt]
  , t5 = [r0, r0, Et, Et, pt, pt, pt, pt]
  , r5 = [ra, ra, r0, r0, Et, Et, pt, pt]
  , a5 = [Vs, ra, U0, r0, U0, r0, U0, r0]
  , re = {
    DISPLAY: qt[Vs],
    TEXT: qt[U0],
    SCRIPT: qt[fr],
    SCRIPTSCRIPT: qt[K0]
}
  , As = [{
    name: "latin",
    blocks: [[256, 591], [768, 879]]
}, {
    name: "cyrillic",
    blocks: [[1024, 1279]]
}, {
    name: "armenian",
    blocks: [[1328, 1423]]
}, {
    name: "brahmic",
    blocks: [[2304, 4255]]
}, {
    name: "georgian",
    blocks: [[4256, 4351]]
}, {
    name: "cjk",
    blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
}, {
    name: "hangul",
    blocks: [[44032, 55215]]
}];
function s5(r) {
    for (var e = 0; e < As.length; e++)
        for (var t = As[e], a = 0; a < t.blocks.length; a++) {
            var s = t.blocks[a];
            if (r >= s[0] && r <= s[1])
                return t.name
        }
    return null
}
var Gr = [];
As.forEach(r => r.blocks.forEach(e => Gr.push(...e)));
function hl(r) {
    for (var e = 0; e < Gr.length; e += 2)
        if (r >= Gr[e] && r <= Gr[e + 1])
            return !0;
    return !1
}
var O0 = 80
  , n5 = function(e, t) {
    return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
}
  , i5 = function(e, t) {
    return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
}
  , o5 = function(e, t) {
    return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
}
  , l5 = function(e, t) {
    return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z"
}
  , c5 = function(e, t) {
    return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z"
}
  , u5 = function(e) {
    var t = e / 2;
    return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z"
}
  , d5 = function(e, t, a) {
    var s = a - 54 - t - e;
    return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + s + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z"
}
  , h5 = function(e, t, a) {
    t = 1e3 * t;
    var s = "";
    switch (e) {
    case "sqrtMain":
        s = n5(t, O0);
        break;
    case "sqrtSize1":
        s = i5(t, O0);
        break;
    case "sqrtSize2":
        s = o5(t, O0);
        break;
    case "sqrtSize3":
        s = l5(t, O0);
        break;
    case "sqrtSize4":
        s = c5(t, O0);
        break;
    case "sqrtTall":
        s = d5(t, O0, a)
    }
    return s
}
  , m5 = function(e, t) {
    switch (e) {
    case "⎜":
        return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
        return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
        return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
        return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
        return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
        return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
        return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
        return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
        return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
        return ""
    }
}
  , Jn = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
    leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}
  , p5 = function(e, t) {
    switch (e) {
    case "lbrack":
        return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
        return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
        return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
        return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
        return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
        return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
        return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
        return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
        return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
        return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
        throw new Error("Unknown stretchy delimiter.")
    }
};
class yr {
    constructor(e) {
        this.children = void 0,
        this.classes = void 0,
        this.height = void 0,
        this.depth = void 0,
        this.maxFontSize = void 0,
        this.style = void 0,
        this.children = e,
        this.classes = [],
        this.height = 0,
        this.depth = 0,
        this.maxFontSize = 0,
        this.style = {}
    }
    hasClass(e) {
        return ee.contains(this.classes, e)
    }
    toNode() {
        for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
            e.appendChild(this.children[t].toNode());
        return e
    }
    toMarkup() {
        for (var e = "", t = 0; t < this.children.length; t++)
            e += this.children[t].toMarkup();
        return e
    }
    toText() {
        var e = t => t.toText();
        return this.children.map(e).join("")
    }
}
var Ut = {
    "AMS-Regular": {
        32: [0, 0, 0, 0, .25],
        65: [0, .68889, 0, 0, .72222],
        66: [0, .68889, 0, 0, .66667],
        67: [0, .68889, 0, 0, .72222],
        68: [0, .68889, 0, 0, .72222],
        69: [0, .68889, 0, 0, .66667],
        70: [0, .68889, 0, 0, .61111],
        71: [0, .68889, 0, 0, .77778],
        72: [0, .68889, 0, 0, .77778],
        73: [0, .68889, 0, 0, .38889],
        74: [.16667, .68889, 0, 0, .5],
        75: [0, .68889, 0, 0, .77778],
        76: [0, .68889, 0, 0, .66667],
        77: [0, .68889, 0, 0, .94445],
        78: [0, .68889, 0, 0, .72222],
        79: [.16667, .68889, 0, 0, .77778],
        80: [0, .68889, 0, 0, .61111],
        81: [.16667, .68889, 0, 0, .77778],
        82: [0, .68889, 0, 0, .72222],
        83: [0, .68889, 0, 0, .55556],
        84: [0, .68889, 0, 0, .66667],
        85: [0, .68889, 0, 0, .72222],
        86: [0, .68889, 0, 0, .72222],
        87: [0, .68889, 0, 0, 1],
        88: [0, .68889, 0, 0, .72222],
        89: [0, .68889, 0, 0, .72222],
        90: [0, .68889, 0, 0, .66667],
        107: [0, .68889, 0, 0, .55556],
        160: [0, 0, 0, 0, .25],
        165: [0, .675, .025, 0, .75],
        174: [.15559, .69224, 0, 0, .94666],
        240: [0, .68889, 0, 0, .55556],
        295: [0, .68889, 0, 0, .54028],
        710: [0, .825, 0, 0, 2.33334],
        732: [0, .9, 0, 0, 2.33334],
        770: [0, .825, 0, 0, 2.33334],
        771: [0, .9, 0, 0, 2.33334],
        989: [.08167, .58167, 0, 0, .77778],
        1008: [0, .43056, .04028, 0, .66667],
        8245: [0, .54986, 0, 0, .275],
        8463: [0, .68889, 0, 0, .54028],
        8487: [0, .68889, 0, 0, .72222],
        8498: [0, .68889, 0, 0, .55556],
        8502: [0, .68889, 0, 0, .66667],
        8503: [0, .68889, 0, 0, .44445],
        8504: [0, .68889, 0, 0, .66667],
        8513: [0, .68889, 0, 0, .63889],
        8592: [-.03598, .46402, 0, 0, .5],
        8594: [-.03598, .46402, 0, 0, .5],
        8602: [-.13313, .36687, 0, 0, 1],
        8603: [-.13313, .36687, 0, 0, 1],
        8606: [.01354, .52239, 0, 0, 1],
        8608: [.01354, .52239, 0, 0, 1],
        8610: [.01354, .52239, 0, 0, 1.11111],
        8611: [.01354, .52239, 0, 0, 1.11111],
        8619: [0, .54986, 0, 0, 1],
        8620: [0, .54986, 0, 0, 1],
        8621: [-.13313, .37788, 0, 0, 1.38889],
        8622: [-.13313, .36687, 0, 0, 1],
        8624: [0, .69224, 0, 0, .5],
        8625: [0, .69224, 0, 0, .5],
        8630: [0, .43056, 0, 0, 1],
        8631: [0, .43056, 0, 0, 1],
        8634: [.08198, .58198, 0, 0, .77778],
        8635: [.08198, .58198, 0, 0, .77778],
        8638: [.19444, .69224, 0, 0, .41667],
        8639: [.19444, .69224, 0, 0, .41667],
        8642: [.19444, .69224, 0, 0, .41667],
        8643: [.19444, .69224, 0, 0, .41667],
        8644: [.1808, .675, 0, 0, 1],
        8646: [.1808, .675, 0, 0, 1],
        8647: [.1808, .675, 0, 0, 1],
        8648: [.19444, .69224, 0, 0, .83334],
        8649: [.1808, .675, 0, 0, 1],
        8650: [.19444, .69224, 0, 0, .83334],
        8651: [.01354, .52239, 0, 0, 1],
        8652: [.01354, .52239, 0, 0, 1],
        8653: [-.13313, .36687, 0, 0, 1],
        8654: [-.13313, .36687, 0, 0, 1],
        8655: [-.13313, .36687, 0, 0, 1],
        8666: [.13667, .63667, 0, 0, 1],
        8667: [.13667, .63667, 0, 0, 1],
        8669: [-.13313, .37788, 0, 0, 1],
        8672: [-.064, .437, 0, 0, 1.334],
        8674: [-.064, .437, 0, 0, 1.334],
        8705: [0, .825, 0, 0, .5],
        8708: [0, .68889, 0, 0, .55556],
        8709: [.08167, .58167, 0, 0, .77778],
        8717: [0, .43056, 0, 0, .42917],
        8722: [-.03598, .46402, 0, 0, .5],
        8724: [.08198, .69224, 0, 0, .77778],
        8726: [.08167, .58167, 0, 0, .77778],
        8733: [0, .69224, 0, 0, .77778],
        8736: [0, .69224, 0, 0, .72222],
        8737: [0, .69224, 0, 0, .72222],
        8738: [.03517, .52239, 0, 0, .72222],
        8739: [.08167, .58167, 0, 0, .22222],
        8740: [.25142, .74111, 0, 0, .27778],
        8741: [.08167, .58167, 0, 0, .38889],
        8742: [.25142, .74111, 0, 0, .5],
        8756: [0, .69224, 0, 0, .66667],
        8757: [0, .69224, 0, 0, .66667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8765: [-.13313, .37788, 0, 0, .77778],
        8769: [-.13313, .36687, 0, 0, .77778],
        8770: [-.03625, .46375, 0, 0, .77778],
        8774: [.30274, .79383, 0, 0, .77778],
        8776: [-.01688, .48312, 0, 0, .77778],
        8778: [.08167, .58167, 0, 0, .77778],
        8782: [.06062, .54986, 0, 0, .77778],
        8783: [.06062, .54986, 0, 0, .77778],
        8785: [.08198, .58198, 0, 0, .77778],
        8786: [.08198, .58198, 0, 0, .77778],
        8787: [.08198, .58198, 0, 0, .77778],
        8790: [0, .69224, 0, 0, .77778],
        8791: [.22958, .72958, 0, 0, .77778],
        8796: [.08198, .91667, 0, 0, .77778],
        8806: [.25583, .75583, 0, 0, .77778],
        8807: [.25583, .75583, 0, 0, .77778],
        8808: [.25142, .75726, 0, 0, .77778],
        8809: [.25142, .75726, 0, 0, .77778],
        8812: [.25583, .75583, 0, 0, .5],
        8814: [.20576, .70576, 0, 0, .77778],
        8815: [.20576, .70576, 0, 0, .77778],
        8816: [.30274, .79383, 0, 0, .77778],
        8817: [.30274, .79383, 0, 0, .77778],
        8818: [.22958, .72958, 0, 0, .77778],
        8819: [.22958, .72958, 0, 0, .77778],
        8822: [.1808, .675, 0, 0, .77778],
        8823: [.1808, .675, 0, 0, .77778],
        8828: [.13667, .63667, 0, 0, .77778],
        8829: [.13667, .63667, 0, 0, .77778],
        8830: [.22958, .72958, 0, 0, .77778],
        8831: [.22958, .72958, 0, 0, .77778],
        8832: [.20576, .70576, 0, 0, .77778],
        8833: [.20576, .70576, 0, 0, .77778],
        8840: [.30274, .79383, 0, 0, .77778],
        8841: [.30274, .79383, 0, 0, .77778],
        8842: [.13597, .63597, 0, 0, .77778],
        8843: [.13597, .63597, 0, 0, .77778],
        8847: [.03517, .54986, 0, 0, .77778],
        8848: [.03517, .54986, 0, 0, .77778],
        8858: [.08198, .58198, 0, 0, .77778],
        8859: [.08198, .58198, 0, 0, .77778],
        8861: [.08198, .58198, 0, 0, .77778],
        8862: [0, .675, 0, 0, .77778],
        8863: [0, .675, 0, 0, .77778],
        8864: [0, .675, 0, 0, .77778],
        8865: [0, .675, 0, 0, .77778],
        8872: [0, .69224, 0, 0, .61111],
        8873: [0, .69224, 0, 0, .72222],
        8874: [0, .69224, 0, 0, .88889],
        8876: [0, .68889, 0, 0, .61111],
        8877: [0, .68889, 0, 0, .61111],
        8878: [0, .68889, 0, 0, .72222],
        8879: [0, .68889, 0, 0, .72222],
        8882: [.03517, .54986, 0, 0, .77778],
        8883: [.03517, .54986, 0, 0, .77778],
        8884: [.13667, .63667, 0, 0, .77778],
        8885: [.13667, .63667, 0, 0, .77778],
        8888: [0, .54986, 0, 0, 1.11111],
        8890: [.19444, .43056, 0, 0, .55556],
        8891: [.19444, .69224, 0, 0, .61111],
        8892: [.19444, .69224, 0, 0, .61111],
        8901: [0, .54986, 0, 0, .27778],
        8903: [.08167, .58167, 0, 0, .77778],
        8905: [.08167, .58167, 0, 0, .77778],
        8906: [.08167, .58167, 0, 0, .77778],
        8907: [0, .69224, 0, 0, .77778],
        8908: [0, .69224, 0, 0, .77778],
        8909: [-.03598, .46402, 0, 0, .77778],
        8910: [0, .54986, 0, 0, .76042],
        8911: [0, .54986, 0, 0, .76042],
        8912: [.03517, .54986, 0, 0, .77778],
        8913: [.03517, .54986, 0, 0, .77778],
        8914: [0, .54986, 0, 0, .66667],
        8915: [0, .54986, 0, 0, .66667],
        8916: [0, .69224, 0, 0, .66667],
        8918: [.0391, .5391, 0, 0, .77778],
        8919: [.0391, .5391, 0, 0, .77778],
        8920: [.03517, .54986, 0, 0, 1.33334],
        8921: [.03517, .54986, 0, 0, 1.33334],
        8922: [.38569, .88569, 0, 0, .77778],
        8923: [.38569, .88569, 0, 0, .77778],
        8926: [.13667, .63667, 0, 0, .77778],
        8927: [.13667, .63667, 0, 0, .77778],
        8928: [.30274, .79383, 0, 0, .77778],
        8929: [.30274, .79383, 0, 0, .77778],
        8934: [.23222, .74111, 0, 0, .77778],
        8935: [.23222, .74111, 0, 0, .77778],
        8936: [.23222, .74111, 0, 0, .77778],
        8937: [.23222, .74111, 0, 0, .77778],
        8938: [.20576, .70576, 0, 0, .77778],
        8939: [.20576, .70576, 0, 0, .77778],
        8940: [.30274, .79383, 0, 0, .77778],
        8941: [.30274, .79383, 0, 0, .77778],
        8994: [.19444, .69224, 0, 0, .77778],
        8995: [.19444, .69224, 0, 0, .77778],
        9416: [.15559, .69224, 0, 0, .90222],
        9484: [0, .69224, 0, 0, .5],
        9488: [0, .69224, 0, 0, .5],
        9492: [0, .37788, 0, 0, .5],
        9496: [0, .37788, 0, 0, .5],
        9585: [.19444, .68889, 0, 0, .88889],
        9586: [.19444, .74111, 0, 0, .88889],
        9632: [0, .675, 0, 0, .77778],
        9633: [0, .675, 0, 0, .77778],
        9650: [0, .54986, 0, 0, .72222],
        9651: [0, .54986, 0, 0, .72222],
        9654: [.03517, .54986, 0, 0, .77778],
        9660: [0, .54986, 0, 0, .72222],
        9661: [0, .54986, 0, 0, .72222],
        9664: [.03517, .54986, 0, 0, .77778],
        9674: [.11111, .69224, 0, 0, .66667],
        9733: [.19444, .69224, 0, 0, .94445],
        10003: [0, .69224, 0, 0, .83334],
        10016: [0, .69224, 0, 0, .83334],
        10731: [.11111, .69224, 0, 0, .66667],
        10846: [.19444, .75583, 0, 0, .61111],
        10877: [.13667, .63667, 0, 0, .77778],
        10878: [.13667, .63667, 0, 0, .77778],
        10885: [.25583, .75583, 0, 0, .77778],
        10886: [.25583, .75583, 0, 0, .77778],
        10887: [.13597, .63597, 0, 0, .77778],
        10888: [.13597, .63597, 0, 0, .77778],
        10889: [.26167, .75726, 0, 0, .77778],
        10890: [.26167, .75726, 0, 0, .77778],
        10891: [.48256, .98256, 0, 0, .77778],
        10892: [.48256, .98256, 0, 0, .77778],
        10901: [.13667, .63667, 0, 0, .77778],
        10902: [.13667, .63667, 0, 0, .77778],
        10933: [.25142, .75726, 0, 0, .77778],
        10934: [.25142, .75726, 0, 0, .77778],
        10935: [.26167, .75726, 0, 0, .77778],
        10936: [.26167, .75726, 0, 0, .77778],
        10937: [.26167, .75726, 0, 0, .77778],
        10938: [.26167, .75726, 0, 0, .77778],
        10949: [.25583, .75583, 0, 0, .77778],
        10950: [.25583, .75583, 0, 0, .77778],
        10955: [.28481, .79383, 0, 0, .77778],
        10956: [.28481, .79383, 0, 0, .77778],
        57350: [.08167, .58167, 0, 0, .22222],
        57351: [.08167, .58167, 0, 0, .38889],
        57352: [.08167, .58167, 0, 0, .77778],
        57353: [0, .43056, .04028, 0, .66667],
        57356: [.25142, .75726, 0, 0, .77778],
        57357: [.25142, .75726, 0, 0, .77778],
        57358: [.41951, .91951, 0, 0, .77778],
        57359: [.30274, .79383, 0, 0, .77778],
        57360: [.30274, .79383, 0, 0, .77778],
        57361: [.41951, .91951, 0, 0, .77778],
        57366: [.25142, .75726, 0, 0, .77778],
        57367: [.25142, .75726, 0, 0, .77778],
        57368: [.25142, .75726, 0, 0, .77778],
        57369: [.25142, .75726, 0, 0, .77778],
        57370: [.13597, .63597, 0, 0, .77778],
        57371: [.13597, .63597, 0, 0, .77778]
    },
    "Caligraphic-Regular": {
        32: [0, 0, 0, 0, .25],
        65: [0, .68333, 0, .19445, .79847],
        66: [0, .68333, .03041, .13889, .65681],
        67: [0, .68333, .05834, .13889, .52653],
        68: [0, .68333, .02778, .08334, .77139],
        69: [0, .68333, .08944, .11111, .52778],
        70: [0, .68333, .09931, .11111, .71875],
        71: [.09722, .68333, .0593, .11111, .59487],
        72: [0, .68333, .00965, .11111, .84452],
        73: [0, .68333, .07382, 0, .54452],
        74: [.09722, .68333, .18472, .16667, .67778],
        75: [0, .68333, .01445, .05556, .76195],
        76: [0, .68333, 0, .13889, .68972],
        77: [0, .68333, 0, .13889, 1.2009],
        78: [0, .68333, .14736, .08334, .82049],
        79: [0, .68333, .02778, .11111, .79611],
        80: [0, .68333, .08222, .08334, .69556],
        81: [.09722, .68333, 0, .11111, .81667],
        82: [0, .68333, 0, .08334, .8475],
        83: [0, .68333, .075, .13889, .60556],
        84: [0, .68333, .25417, 0, .54464],
        85: [0, .68333, .09931, .08334, .62583],
        86: [0, .68333, .08222, 0, .61278],
        87: [0, .68333, .08222, .08334, .98778],
        88: [0, .68333, .14643, .13889, .7133],
        89: [.09722, .68333, .08222, .08334, .66834],
        90: [0, .68333, .07944, .13889, .72473],
        160: [0, 0, 0, 0, .25]
    },
    "Fraktur-Regular": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69141, 0, 0, .29574],
        34: [0, .69141, 0, 0, .21471],
        38: [0, .69141, 0, 0, .73786],
        39: [0, .69141, 0, 0, .21201],
        40: [.24982, .74947, 0, 0, .38865],
        41: [.24982, .74947, 0, 0, .38865],
        42: [0, .62119, 0, 0, .27764],
        43: [.08319, .58283, 0, 0, .75623],
        44: [0, .10803, 0, 0, .27764],
        45: [.08319, .58283, 0, 0, .75623],
        46: [0, .10803, 0, 0, .27764],
        47: [.24982, .74947, 0, 0, .50181],
        48: [0, .47534, 0, 0, .50181],
        49: [0, .47534, 0, 0, .50181],
        50: [0, .47534, 0, 0, .50181],
        51: [.18906, .47534, 0, 0, .50181],
        52: [.18906, .47534, 0, 0, .50181],
        53: [.18906, .47534, 0, 0, .50181],
        54: [0, .69141, 0, 0, .50181],
        55: [.18906, .47534, 0, 0, .50181],
        56: [0, .69141, 0, 0, .50181],
        57: [.18906, .47534, 0, 0, .50181],
        58: [0, .47534, 0, 0, .21606],
        59: [.12604, .47534, 0, 0, .21606],
        61: [-.13099, .36866, 0, 0, .75623],
        63: [0, .69141, 0, 0, .36245],
        65: [0, .69141, 0, 0, .7176],
        66: [0, .69141, 0, 0, .88397],
        67: [0, .69141, 0, 0, .61254],
        68: [0, .69141, 0, 0, .83158],
        69: [0, .69141, 0, 0, .66278],
        70: [.12604, .69141, 0, 0, .61119],
        71: [0, .69141, 0, 0, .78539],
        72: [.06302, .69141, 0, 0, .7203],
        73: [0, .69141, 0, 0, .55448],
        74: [.12604, .69141, 0, 0, .55231],
        75: [0, .69141, 0, 0, .66845],
        76: [0, .69141, 0, 0, .66602],
        77: [0, .69141, 0, 0, 1.04953],
        78: [0, .69141, 0, 0, .83212],
        79: [0, .69141, 0, 0, .82699],
        80: [.18906, .69141, 0, 0, .82753],
        81: [.03781, .69141, 0, 0, .82699],
        82: [0, .69141, 0, 0, .82807],
        83: [0, .69141, 0, 0, .82861],
        84: [0, .69141, 0, 0, .66899],
        85: [0, .69141, 0, 0, .64576],
        86: [0, .69141, 0, 0, .83131],
        87: [0, .69141, 0, 0, 1.04602],
        88: [0, .69141, 0, 0, .71922],
        89: [.18906, .69141, 0, 0, .83293],
        90: [.12604, .69141, 0, 0, .60201],
        91: [.24982, .74947, 0, 0, .27764],
        93: [.24982, .74947, 0, 0, .27764],
        94: [0, .69141, 0, 0, .49965],
        97: [0, .47534, 0, 0, .50046],
        98: [0, .69141, 0, 0, .51315],
        99: [0, .47534, 0, 0, .38946],
        100: [0, .62119, 0, 0, .49857],
        101: [0, .47534, 0, 0, .40053],
        102: [.18906, .69141, 0, 0, .32626],
        103: [.18906, .47534, 0, 0, .5037],
        104: [.18906, .69141, 0, 0, .52126],
        105: [0, .69141, 0, 0, .27899],
        106: [0, .69141, 0, 0, .28088],
        107: [0, .69141, 0, 0, .38946],
        108: [0, .69141, 0, 0, .27953],
        109: [0, .47534, 0, 0, .76676],
        110: [0, .47534, 0, 0, .52666],
        111: [0, .47534, 0, 0, .48885],
        112: [.18906, .52396, 0, 0, .50046],
        113: [.18906, .47534, 0, 0, .48912],
        114: [0, .47534, 0, 0, .38919],
        115: [0, .47534, 0, 0, .44266],
        116: [0, .62119, 0, 0, .33301],
        117: [0, .47534, 0, 0, .5172],
        118: [0, .52396, 0, 0, .5118],
        119: [0, .52396, 0, 0, .77351],
        120: [.18906, .47534, 0, 0, .38865],
        121: [.18906, .47534, 0, 0, .49884],
        122: [.18906, .47534, 0, 0, .39054],
        160: [0, 0, 0, 0, .25],
        8216: [0, .69141, 0, 0, .21471],
        8217: [0, .69141, 0, 0, .21471],
        58112: [0, .62119, 0, 0, .49749],
        58113: [0, .62119, 0, 0, .4983],
        58114: [.18906, .69141, 0, 0, .33328],
        58115: [.18906, .69141, 0, 0, .32923],
        58116: [.18906, .47534, 0, 0, .50343],
        58117: [0, .69141, 0, 0, .33301],
        58118: [0, .62119, 0, 0, .33409],
        58119: [0, .47534, 0, 0, .50073]
    },
    "Main-Bold": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, 0, 0, .35],
        34: [0, .69444, 0, 0, .60278],
        35: [.19444, .69444, 0, 0, .95833],
        36: [.05556, .75, 0, 0, .575],
        37: [.05556, .75, 0, 0, .95833],
        38: [0, .69444, 0, 0, .89444],
        39: [0, .69444, 0, 0, .31944],
        40: [.25, .75, 0, 0, .44722],
        41: [.25, .75, 0, 0, .44722],
        42: [0, .75, 0, 0, .575],
        43: [.13333, .63333, 0, 0, .89444],
        44: [.19444, .15556, 0, 0, .31944],
        45: [0, .44444, 0, 0, .38333],
        46: [0, .15556, 0, 0, .31944],
        47: [.25, .75, 0, 0, .575],
        48: [0, .64444, 0, 0, .575],
        49: [0, .64444, 0, 0, .575],
        50: [0, .64444, 0, 0, .575],
        51: [0, .64444, 0, 0, .575],
        52: [0, .64444, 0, 0, .575],
        53: [0, .64444, 0, 0, .575],
        54: [0, .64444, 0, 0, .575],
        55: [0, .64444, 0, 0, .575],
        56: [0, .64444, 0, 0, .575],
        57: [0, .64444, 0, 0, .575],
        58: [0, .44444, 0, 0, .31944],
        59: [.19444, .44444, 0, 0, .31944],
        60: [.08556, .58556, 0, 0, .89444],
        61: [-.10889, .39111, 0, 0, .89444],
        62: [.08556, .58556, 0, 0, .89444],
        63: [0, .69444, 0, 0, .54305],
        64: [0, .69444, 0, 0, .89444],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, 0, 0, .81805],
        67: [0, .68611, 0, 0, .83055],
        68: [0, .68611, 0, 0, .88194],
        69: [0, .68611, 0, 0, .75555],
        70: [0, .68611, 0, 0, .72361],
        71: [0, .68611, 0, 0, .90416],
        72: [0, .68611, 0, 0, .9],
        73: [0, .68611, 0, 0, .43611],
        74: [0, .68611, 0, 0, .59444],
        75: [0, .68611, 0, 0, .90138],
        76: [0, .68611, 0, 0, .69166],
        77: [0, .68611, 0, 0, 1.09166],
        78: [0, .68611, 0, 0, .9],
        79: [0, .68611, 0, 0, .86388],
        80: [0, .68611, 0, 0, .78611],
        81: [.19444, .68611, 0, 0, .86388],
        82: [0, .68611, 0, 0, .8625],
        83: [0, .68611, 0, 0, .63889],
        84: [0, .68611, 0, 0, .8],
        85: [0, .68611, 0, 0, .88472],
        86: [0, .68611, .01597, 0, .86944],
        87: [0, .68611, .01597, 0, 1.18888],
        88: [0, .68611, 0, 0, .86944],
        89: [0, .68611, .02875, 0, .86944],
        90: [0, .68611, 0, 0, .70277],
        91: [.25, .75, 0, 0, .31944],
        92: [.25, .75, 0, 0, .575],
        93: [.25, .75, 0, 0, .31944],
        94: [0, .69444, 0, 0, .575],
        95: [.31, .13444, .03194, 0, .575],
        97: [0, .44444, 0, 0, .55902],
        98: [0, .69444, 0, 0, .63889],
        99: [0, .44444, 0, 0, .51111],
        100: [0, .69444, 0, 0, .63889],
        101: [0, .44444, 0, 0, .52708],
        102: [0, .69444, .10903, 0, .35139],
        103: [.19444, .44444, .01597, 0, .575],
        104: [0, .69444, 0, 0, .63889],
        105: [0, .69444, 0, 0, .31944],
        106: [.19444, .69444, 0, 0, .35139],
        107: [0, .69444, 0, 0, .60694],
        108: [0, .69444, 0, 0, .31944],
        109: [0, .44444, 0, 0, .95833],
        110: [0, .44444, 0, 0, .63889],
        111: [0, .44444, 0, 0, .575],
        112: [.19444, .44444, 0, 0, .63889],
        113: [.19444, .44444, 0, 0, .60694],
        114: [0, .44444, 0, 0, .47361],
        115: [0, .44444, 0, 0, .45361],
        116: [0, .63492, 0, 0, .44722],
        117: [0, .44444, 0, 0, .63889],
        118: [0, .44444, .01597, 0, .60694],
        119: [0, .44444, .01597, 0, .83055],
        120: [0, .44444, 0, 0, .60694],
        121: [.19444, .44444, .01597, 0, .60694],
        122: [0, .44444, 0, 0, .51111],
        123: [.25, .75, 0, 0, .575],
        124: [.25, .75, 0, 0, .31944],
        125: [.25, .75, 0, 0, .575],
        126: [.35, .34444, 0, 0, .575],
        160: [0, 0, 0, 0, .25],
        163: [0, .69444, 0, 0, .86853],
        168: [0, .69444, 0, 0, .575],
        172: [0, .44444, 0, 0, .76666],
        176: [0, .69444, 0, 0, .86944],
        177: [.13333, .63333, 0, 0, .89444],
        184: [.17014, 0, 0, 0, .51111],
        198: [0, .68611, 0, 0, 1.04166],
        215: [.13333, .63333, 0, 0, .89444],
        216: [.04861, .73472, 0, 0, .89444],
        223: [0, .69444, 0, 0, .59722],
        230: [0, .44444, 0, 0, .83055],
        247: [.13333, .63333, 0, 0, .89444],
        248: [.09722, .54167, 0, 0, .575],
        305: [0, .44444, 0, 0, .31944],
        338: [0, .68611, 0, 0, 1.16944],
        339: [0, .44444, 0, 0, .89444],
        567: [.19444, .44444, 0, 0, .35139],
        710: [0, .69444, 0, 0, .575],
        711: [0, .63194, 0, 0, .575],
        713: [0, .59611, 0, 0, .575],
        714: [0, .69444, 0, 0, .575],
        715: [0, .69444, 0, 0, .575],
        728: [0, .69444, 0, 0, .575],
        729: [0, .69444, 0, 0, .31944],
        730: [0, .69444, 0, 0, .86944],
        732: [0, .69444, 0, 0, .575],
        733: [0, .69444, 0, 0, .575],
        915: [0, .68611, 0, 0, .69166],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, 0, 0, .89444],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, 0, 0, .76666],
        928: [0, .68611, 0, 0, .9],
        931: [0, .68611, 0, 0, .83055],
        933: [0, .68611, 0, 0, .89444],
        934: [0, .68611, 0, 0, .83055],
        936: [0, .68611, 0, 0, .89444],
        937: [0, .68611, 0, 0, .83055],
        8211: [0, .44444, .03194, 0, .575],
        8212: [0, .44444, .03194, 0, 1.14999],
        8216: [0, .69444, 0, 0, .31944],
        8217: [0, .69444, 0, 0, .31944],
        8220: [0, .69444, 0, 0, .60278],
        8221: [0, .69444, 0, 0, .60278],
        8224: [.19444, .69444, 0, 0, .51111],
        8225: [.19444, .69444, 0, 0, .51111],
        8242: [0, .55556, 0, 0, .34444],
        8407: [0, .72444, .15486, 0, .575],
        8463: [0, .69444, 0, 0, .66759],
        8465: [0, .69444, 0, 0, .83055],
        8467: [0, .69444, 0, 0, .47361],
        8472: [.19444, .44444, 0, 0, .74027],
        8476: [0, .69444, 0, 0, .83055],
        8501: [0, .69444, 0, 0, .70277],
        8592: [-.10889, .39111, 0, 0, 1.14999],
        8593: [.19444, .69444, 0, 0, .575],
        8594: [-.10889, .39111, 0, 0, 1.14999],
        8595: [.19444, .69444, 0, 0, .575],
        8596: [-.10889, .39111, 0, 0, 1.14999],
        8597: [.25, .75, 0, 0, .575],
        8598: [.19444, .69444, 0, 0, 1.14999],
        8599: [.19444, .69444, 0, 0, 1.14999],
        8600: [.19444, .69444, 0, 0, 1.14999],
        8601: [.19444, .69444, 0, 0, 1.14999],
        8636: [-.10889, .39111, 0, 0, 1.14999],
        8637: [-.10889, .39111, 0, 0, 1.14999],
        8640: [-.10889, .39111, 0, 0, 1.14999],
        8641: [-.10889, .39111, 0, 0, 1.14999],
        8656: [-.10889, .39111, 0, 0, 1.14999],
        8657: [.19444, .69444, 0, 0, .70277],
        8658: [-.10889, .39111, 0, 0, 1.14999],
        8659: [.19444, .69444, 0, 0, .70277],
        8660: [-.10889, .39111, 0, 0, 1.14999],
        8661: [.25, .75, 0, 0, .70277],
        8704: [0, .69444, 0, 0, .63889],
        8706: [0, .69444, .06389, 0, .62847],
        8707: [0, .69444, 0, 0, .63889],
        8709: [.05556, .75, 0, 0, .575],
        8711: [0, .68611, 0, 0, .95833],
        8712: [.08556, .58556, 0, 0, .76666],
        8715: [.08556, .58556, 0, 0, .76666],
        8722: [.13333, .63333, 0, 0, .89444],
        8723: [.13333, .63333, 0, 0, .89444],
        8725: [.25, .75, 0, 0, .575],
        8726: [.25, .75, 0, 0, .575],
        8727: [-.02778, .47222, 0, 0, .575],
        8728: [-.02639, .47361, 0, 0, .575],
        8729: [-.02639, .47361, 0, 0, .575],
        8730: [.18, .82, 0, 0, .95833],
        8733: [0, .44444, 0, 0, .89444],
        8734: [0, .44444, 0, 0, 1.14999],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .31944],
        8741: [.25, .75, 0, 0, .575],
        8743: [0, .55556, 0, 0, .76666],
        8744: [0, .55556, 0, 0, .76666],
        8745: [0, .55556, 0, 0, .76666],
        8746: [0, .55556, 0, 0, .76666],
        8747: [.19444, .69444, .12778, 0, .56875],
        8764: [-.10889, .39111, 0, 0, .89444],
        8768: [.19444, .69444, 0, 0, .31944],
        8771: [.00222, .50222, 0, 0, .89444],
        8773: [.027, .638, 0, 0, .894],
        8776: [.02444, .52444, 0, 0, .89444],
        8781: [.00222, .50222, 0, 0, .89444],
        8801: [.00222, .50222, 0, 0, .89444],
        8804: [.19667, .69667, 0, 0, .89444],
        8805: [.19667, .69667, 0, 0, .89444],
        8810: [.08556, .58556, 0, 0, 1.14999],
        8811: [.08556, .58556, 0, 0, 1.14999],
        8826: [.08556, .58556, 0, 0, .89444],
        8827: [.08556, .58556, 0, 0, .89444],
        8834: [.08556, .58556, 0, 0, .89444],
        8835: [.08556, .58556, 0, 0, .89444],
        8838: [.19667, .69667, 0, 0, .89444],
        8839: [.19667, .69667, 0, 0, .89444],
        8846: [0, .55556, 0, 0, .76666],
        8849: [.19667, .69667, 0, 0, .89444],
        8850: [.19667, .69667, 0, 0, .89444],
        8851: [0, .55556, 0, 0, .76666],
        8852: [0, .55556, 0, 0, .76666],
        8853: [.13333, .63333, 0, 0, .89444],
        8854: [.13333, .63333, 0, 0, .89444],
        8855: [.13333, .63333, 0, 0, .89444],
        8856: [.13333, .63333, 0, 0, .89444],
        8857: [.13333, .63333, 0, 0, .89444],
        8866: [0, .69444, 0, 0, .70277],
        8867: [0, .69444, 0, 0, .70277],
        8868: [0, .69444, 0, 0, .89444],
        8869: [0, .69444, 0, 0, .89444],
        8900: [-.02639, .47361, 0, 0, .575],
        8901: [-.02639, .47361, 0, 0, .31944],
        8902: [-.02778, .47222, 0, 0, .575],
        8968: [.25, .75, 0, 0, .51111],
        8969: [.25, .75, 0, 0, .51111],
        8970: [.25, .75, 0, 0, .51111],
        8971: [.25, .75, 0, 0, .51111],
        8994: [-.13889, .36111, 0, 0, 1.14999],
        8995: [-.13889, .36111, 0, 0, 1.14999],
        9651: [.19444, .69444, 0, 0, 1.02222],
        9657: [-.02778, .47222, 0, 0, .575],
        9661: [.19444, .69444, 0, 0, 1.02222],
        9667: [-.02778, .47222, 0, 0, .575],
        9711: [.19444, .69444, 0, 0, 1.14999],
        9824: [.12963, .69444, 0, 0, .89444],
        9825: [.12963, .69444, 0, 0, .89444],
        9826: [.12963, .69444, 0, 0, .89444],
        9827: [.12963, .69444, 0, 0, .89444],
        9837: [0, .75, 0, 0, .44722],
        9838: [.19444, .69444, 0, 0, .44722],
        9839: [.19444, .69444, 0, 0, .44722],
        10216: [.25, .75, 0, 0, .44722],
        10217: [.25, .75, 0, 0, .44722],
        10815: [0, .68611, 0, 0, .9],
        10927: [.19667, .69667, 0, 0, .89444],
        10928: [.19667, .69667, 0, 0, .89444],
        57376: [.19444, .69444, 0, 0, 0]
    },
    "Main-BoldItalic": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, .11417, 0, .38611],
        34: [0, .69444, .07939, 0, .62055],
        35: [.19444, .69444, .06833, 0, .94444],
        37: [.05556, .75, .12861, 0, .94444],
        38: [0, .69444, .08528, 0, .88555],
        39: [0, .69444, .12945, 0, .35555],
        40: [.25, .75, .15806, 0, .47333],
        41: [.25, .75, .03306, 0, .47333],
        42: [0, .75, .14333, 0, .59111],
        43: [.10333, .60333, .03306, 0, .88555],
        44: [.19444, .14722, 0, 0, .35555],
        45: [0, .44444, .02611, 0, .41444],
        46: [0, .14722, 0, 0, .35555],
        47: [.25, .75, .15806, 0, .59111],
        48: [0, .64444, .13167, 0, .59111],
        49: [0, .64444, .13167, 0, .59111],
        50: [0, .64444, .13167, 0, .59111],
        51: [0, .64444, .13167, 0, .59111],
        52: [.19444, .64444, .13167, 0, .59111],
        53: [0, .64444, .13167, 0, .59111],
        54: [0, .64444, .13167, 0, .59111],
        55: [.19444, .64444, .13167, 0, .59111],
        56: [0, .64444, .13167, 0, .59111],
        57: [0, .64444, .13167, 0, .59111],
        58: [0, .44444, .06695, 0, .35555],
        59: [.19444, .44444, .06695, 0, .35555],
        61: [-.10889, .39111, .06833, 0, .88555],
        63: [0, .69444, .11472, 0, .59111],
        64: [0, .69444, .09208, 0, .88555],
        65: [0, .68611, 0, 0, .86555],
        66: [0, .68611, .0992, 0, .81666],
        67: [0, .68611, .14208, 0, .82666],
        68: [0, .68611, .09062, 0, .87555],
        69: [0, .68611, .11431, 0, .75666],
        70: [0, .68611, .12903, 0, .72722],
        71: [0, .68611, .07347, 0, .89527],
        72: [0, .68611, .17208, 0, .8961],
        73: [0, .68611, .15681, 0, .47166],
        74: [0, .68611, .145, 0, .61055],
        75: [0, .68611, .14208, 0, .89499],
        76: [0, .68611, 0, 0, .69777],
        77: [0, .68611, .17208, 0, 1.07277],
        78: [0, .68611, .17208, 0, .8961],
        79: [0, .68611, .09062, 0, .85499],
        80: [0, .68611, .0992, 0, .78721],
        81: [.19444, .68611, .09062, 0, .85499],
        82: [0, .68611, .02559, 0, .85944],
        83: [0, .68611, .11264, 0, .64999],
        84: [0, .68611, .12903, 0, .7961],
        85: [0, .68611, .17208, 0, .88083],
        86: [0, .68611, .18625, 0, .86555],
        87: [0, .68611, .18625, 0, 1.15999],
        88: [0, .68611, .15681, 0, .86555],
        89: [0, .68611, .19803, 0, .86555],
        90: [0, .68611, .14208, 0, .70888],
        91: [.25, .75, .1875, 0, .35611],
        93: [.25, .75, .09972, 0, .35611],
        94: [0, .69444, .06709, 0, .59111],
        95: [.31, .13444, .09811, 0, .59111],
        97: [0, .44444, .09426, 0, .59111],
        98: [0, .69444, .07861, 0, .53222],
        99: [0, .44444, .05222, 0, .53222],
        100: [0, .69444, .10861, 0, .59111],
        101: [0, .44444, .085, 0, .53222],
        102: [.19444, .69444, .21778, 0, .4],
        103: [.19444, .44444, .105, 0, .53222],
        104: [0, .69444, .09426, 0, .59111],
        105: [0, .69326, .11387, 0, .35555],
        106: [.19444, .69326, .1672, 0, .35555],
        107: [0, .69444, .11111, 0, .53222],
        108: [0, .69444, .10861, 0, .29666],
        109: [0, .44444, .09426, 0, .94444],
        110: [0, .44444, .09426, 0, .64999],
        111: [0, .44444, .07861, 0, .59111],
        112: [.19444, .44444, .07861, 0, .59111],
        113: [.19444, .44444, .105, 0, .53222],
        114: [0, .44444, .11111, 0, .50167],
        115: [0, .44444, .08167, 0, .48694],
        116: [0, .63492, .09639, 0, .385],
        117: [0, .44444, .09426, 0, .62055],
        118: [0, .44444, .11111, 0, .53222],
        119: [0, .44444, .11111, 0, .76777],
        120: [0, .44444, .12583, 0, .56055],
        121: [.19444, .44444, .105, 0, .56166],
        122: [0, .44444, .13889, 0, .49055],
        126: [.35, .34444, .11472, 0, .59111],
        160: [0, 0, 0, 0, .25],
        168: [0, .69444, .11473, 0, .59111],
        176: [0, .69444, 0, 0, .94888],
        184: [.17014, 0, 0, 0, .53222],
        198: [0, .68611, .11431, 0, 1.02277],
        216: [.04861, .73472, .09062, 0, .88555],
        223: [.19444, .69444, .09736, 0, .665],
        230: [0, .44444, .085, 0, .82666],
        248: [.09722, .54167, .09458, 0, .59111],
        305: [0, .44444, .09426, 0, .35555],
        338: [0, .68611, .11431, 0, 1.14054],
        339: [0, .44444, .085, 0, .82666],
        567: [.19444, .44444, .04611, 0, .385],
        710: [0, .69444, .06709, 0, .59111],
        711: [0, .63194, .08271, 0, .59111],
        713: [0, .59444, .10444, 0, .59111],
        714: [0, .69444, .08528, 0, .59111],
        715: [0, .69444, 0, 0, .59111],
        728: [0, .69444, .10333, 0, .59111],
        729: [0, .69444, .12945, 0, .35555],
        730: [0, .69444, 0, 0, .94888],
        732: [0, .69444, .11472, 0, .59111],
        733: [0, .69444, .11472, 0, .59111],
        915: [0, .68611, .12903, 0, .69777],
        916: [0, .68611, 0, 0, .94444],
        920: [0, .68611, .09062, 0, .88555],
        923: [0, .68611, 0, 0, .80666],
        926: [0, .68611, .15092, 0, .76777],
        928: [0, .68611, .17208, 0, .8961],
        931: [0, .68611, .11431, 0, .82666],
        933: [0, .68611, .10778, 0, .88555],
        934: [0, .68611, .05632, 0, .82666],
        936: [0, .68611, .10778, 0, .88555],
        937: [0, .68611, .0992, 0, .82666],
        8211: [0, .44444, .09811, 0, .59111],
        8212: [0, .44444, .09811, 0, 1.18221],
        8216: [0, .69444, .12945, 0, .35555],
        8217: [0, .69444, .12945, 0, .35555],
        8220: [0, .69444, .16772, 0, .62055],
        8221: [0, .69444, .07939, 0, .62055]
    },
    "Main-Italic": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, .12417, 0, .30667],
        34: [0, .69444, .06961, 0, .51444],
        35: [.19444, .69444, .06616, 0, .81777],
        37: [.05556, .75, .13639, 0, .81777],
        38: [0, .69444, .09694, 0, .76666],
        39: [0, .69444, .12417, 0, .30667],
        40: [.25, .75, .16194, 0, .40889],
        41: [.25, .75, .03694, 0, .40889],
        42: [0, .75, .14917, 0, .51111],
        43: [.05667, .56167, .03694, 0, .76666],
        44: [.19444, .10556, 0, 0, .30667],
        45: [0, .43056, .02826, 0, .35778],
        46: [0, .10556, 0, 0, .30667],
        47: [.25, .75, .16194, 0, .51111],
        48: [0, .64444, .13556, 0, .51111],
        49: [0, .64444, .13556, 0, .51111],
        50: [0, .64444, .13556, 0, .51111],
        51: [0, .64444, .13556, 0, .51111],
        52: [.19444, .64444, .13556, 0, .51111],
        53: [0, .64444, .13556, 0, .51111],
        54: [0, .64444, .13556, 0, .51111],
        55: [.19444, .64444, .13556, 0, .51111],
        56: [0, .64444, .13556, 0, .51111],
        57: [0, .64444, .13556, 0, .51111],
        58: [0, .43056, .0582, 0, .30667],
        59: [.19444, .43056, .0582, 0, .30667],
        61: [-.13313, .36687, .06616, 0, .76666],
        63: [0, .69444, .1225, 0, .51111],
        64: [0, .69444, .09597, 0, .76666],
        65: [0, .68333, 0, 0, .74333],
        66: [0, .68333, .10257, 0, .70389],
        67: [0, .68333, .14528, 0, .71555],
        68: [0, .68333, .09403, 0, .755],
        69: [0, .68333, .12028, 0, .67833],
        70: [0, .68333, .13305, 0, .65277],
        71: [0, .68333, .08722, 0, .77361],
        72: [0, .68333, .16389, 0, .74333],
        73: [0, .68333, .15806, 0, .38555],
        74: [0, .68333, .14028, 0, .525],
        75: [0, .68333, .14528, 0, .76888],
        76: [0, .68333, 0, 0, .62722],
        77: [0, .68333, .16389, 0, .89666],
        78: [0, .68333, .16389, 0, .74333],
        79: [0, .68333, .09403, 0, .76666],
        80: [0, .68333, .10257, 0, .67833],
        81: [.19444, .68333, .09403, 0, .76666],
        82: [0, .68333, .03868, 0, .72944],
        83: [0, .68333, .11972, 0, .56222],
        84: [0, .68333, .13305, 0, .71555],
        85: [0, .68333, .16389, 0, .74333],
        86: [0, .68333, .18361, 0, .74333],
        87: [0, .68333, .18361, 0, .99888],
        88: [0, .68333, .15806, 0, .74333],
        89: [0, .68333, .19383, 0, .74333],
        90: [0, .68333, .14528, 0, .61333],
        91: [.25, .75, .1875, 0, .30667],
        93: [.25, .75, .10528, 0, .30667],
        94: [0, .69444, .06646, 0, .51111],
        95: [.31, .12056, .09208, 0, .51111],
        97: [0, .43056, .07671, 0, .51111],
        98: [0, .69444, .06312, 0, .46],
        99: [0, .43056, .05653, 0, .46],
        100: [0, .69444, .10333, 0, .51111],
        101: [0, .43056, .07514, 0, .46],
        102: [.19444, .69444, .21194, 0, .30667],
        103: [.19444, .43056, .08847, 0, .46],
        104: [0, .69444, .07671, 0, .51111],
        105: [0, .65536, .1019, 0, .30667],
        106: [.19444, .65536, .14467, 0, .30667],
        107: [0, .69444, .10764, 0, .46],
        108: [0, .69444, .10333, 0, .25555],
        109: [0, .43056, .07671, 0, .81777],
        110: [0, .43056, .07671, 0, .56222],
        111: [0, .43056, .06312, 0, .51111],
        112: [.19444, .43056, .06312, 0, .51111],
        113: [.19444, .43056, .08847, 0, .46],
        114: [0, .43056, .10764, 0, .42166],
        115: [0, .43056, .08208, 0, .40889],
        116: [0, .61508, .09486, 0, .33222],
        117: [0, .43056, .07671, 0, .53666],
        118: [0, .43056, .10764, 0, .46],
        119: [0, .43056, .10764, 0, .66444],
        120: [0, .43056, .12042, 0, .46389],
        121: [.19444, .43056, .08847, 0, .48555],
        122: [0, .43056, .12292, 0, .40889],
        126: [.35, .31786, .11585, 0, .51111],
        160: [0, 0, 0, 0, .25],
        168: [0, .66786, .10474, 0, .51111],
        176: [0, .69444, 0, 0, .83129],
        184: [.17014, 0, 0, 0, .46],
        198: [0, .68333, .12028, 0, .88277],
        216: [.04861, .73194, .09403, 0, .76666],
        223: [.19444, .69444, .10514, 0, .53666],
        230: [0, .43056, .07514, 0, .71555],
        248: [.09722, .52778, .09194, 0, .51111],
        338: [0, .68333, .12028, 0, .98499],
        339: [0, .43056, .07514, 0, .71555],
        710: [0, .69444, .06646, 0, .51111],
        711: [0, .62847, .08295, 0, .51111],
        713: [0, .56167, .10333, 0, .51111],
        714: [0, .69444, .09694, 0, .51111],
        715: [0, .69444, 0, 0, .51111],
        728: [0, .69444, .10806, 0, .51111],
        729: [0, .66786, .11752, 0, .30667],
        730: [0, .69444, 0, 0, .83129],
        732: [0, .66786, .11585, 0, .51111],
        733: [0, .69444, .1225, 0, .51111],
        915: [0, .68333, .13305, 0, .62722],
        916: [0, .68333, 0, 0, .81777],
        920: [0, .68333, .09403, 0, .76666],
        923: [0, .68333, 0, 0, .69222],
        926: [0, .68333, .15294, 0, .66444],
        928: [0, .68333, .16389, 0, .74333],
        931: [0, .68333, .12028, 0, .71555],
        933: [0, .68333, .11111, 0, .76666],
        934: [0, .68333, .05986, 0, .71555],
        936: [0, .68333, .11111, 0, .76666],
        937: [0, .68333, .10257, 0, .71555],
        8211: [0, .43056, .09208, 0, .51111],
        8212: [0, .43056, .09208, 0, 1.02222],
        8216: [0, .69444, .12417, 0, .30667],
        8217: [0, .69444, .12417, 0, .30667],
        8220: [0, .69444, .1685, 0, .51444],
        8221: [0, .69444, .06961, 0, .51444],
        8463: [0, .68889, 0, 0, .54028]
    },
    "Main-Regular": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, 0, 0, .27778],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .77778],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.19444, .10556, 0, 0, .27778],
        45: [0, .43056, 0, 0, .33333],
        46: [0, .10556, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .64444, 0, 0, .5],
        49: [0, .64444, 0, 0, .5],
        50: [0, .64444, 0, 0, .5],
        51: [0, .64444, 0, 0, .5],
        52: [0, .64444, 0, 0, .5],
        53: [0, .64444, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [0, .64444, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [0, .64444, 0, 0, .5],
        58: [0, .43056, 0, 0, .27778],
        59: [.19444, .43056, 0, 0, .27778],
        60: [.0391, .5391, 0, 0, .77778],
        61: [-.13313, .36687, 0, 0, .77778],
        62: [.0391, .5391, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .77778],
        65: [0, .68333, 0, 0, .75],
        66: [0, .68333, 0, 0, .70834],
        67: [0, .68333, 0, 0, .72222],
        68: [0, .68333, 0, 0, .76389],
        69: [0, .68333, 0, 0, .68056],
        70: [0, .68333, 0, 0, .65278],
        71: [0, .68333, 0, 0, .78472],
        72: [0, .68333, 0, 0, .75],
        73: [0, .68333, 0, 0, .36111],
        74: [0, .68333, 0, 0, .51389],
        75: [0, .68333, 0, 0, .77778],
        76: [0, .68333, 0, 0, .625],
        77: [0, .68333, 0, 0, .91667],
        78: [0, .68333, 0, 0, .75],
        79: [0, .68333, 0, 0, .77778],
        80: [0, .68333, 0, 0, .68056],
        81: [.19444, .68333, 0, 0, .77778],
        82: [0, .68333, 0, 0, .73611],
        83: [0, .68333, 0, 0, .55556],
        84: [0, .68333, 0, 0, .72222],
        85: [0, .68333, 0, 0, .75],
        86: [0, .68333, .01389, 0, .75],
        87: [0, .68333, .01389, 0, 1.02778],
        88: [0, .68333, 0, 0, .75],
        89: [0, .68333, .025, 0, .75],
        90: [0, .68333, 0, 0, .61111],
        91: [.25, .75, 0, 0, .27778],
        92: [.25, .75, 0, 0, .5],
        93: [.25, .75, 0, 0, .27778],
        94: [0, .69444, 0, 0, .5],
        95: [.31, .12056, .02778, 0, .5],
        97: [0, .43056, 0, 0, .5],
        98: [0, .69444, 0, 0, .55556],
        99: [0, .43056, 0, 0, .44445],
        100: [0, .69444, 0, 0, .55556],
        101: [0, .43056, 0, 0, .44445],
        102: [0, .69444, .07778, 0, .30556],
        103: [.19444, .43056, .01389, 0, .5],
        104: [0, .69444, 0, 0, .55556],
        105: [0, .66786, 0, 0, .27778],
        106: [.19444, .66786, 0, 0, .30556],
        107: [0, .69444, 0, 0, .52778],
        108: [0, .69444, 0, 0, .27778],
        109: [0, .43056, 0, 0, .83334],
        110: [0, .43056, 0, 0, .55556],
        111: [0, .43056, 0, 0, .5],
        112: [.19444, .43056, 0, 0, .55556],
        113: [.19444, .43056, 0, 0, .52778],
        114: [0, .43056, 0, 0, .39167],
        115: [0, .43056, 0, 0, .39445],
        116: [0, .61508, 0, 0, .38889],
        117: [0, .43056, 0, 0, .55556],
        118: [0, .43056, .01389, 0, .52778],
        119: [0, .43056, .01389, 0, .72222],
        120: [0, .43056, 0, 0, .52778],
        121: [.19444, .43056, .01389, 0, .52778],
        122: [0, .43056, 0, 0, .44445],
        123: [.25, .75, 0, 0, .5],
        124: [.25, .75, 0, 0, .27778],
        125: [.25, .75, 0, 0, .5],
        126: [.35, .31786, 0, 0, .5],
        160: [0, 0, 0, 0, .25],
        163: [0, .69444, 0, 0, .76909],
        167: [.19444, .69444, 0, 0, .44445],
        168: [0, .66786, 0, 0, .5],
        172: [0, .43056, 0, 0, .66667],
        176: [0, .69444, 0, 0, .75],
        177: [.08333, .58333, 0, 0, .77778],
        182: [.19444, .69444, 0, 0, .61111],
        184: [.17014, 0, 0, 0, .44445],
        198: [0, .68333, 0, 0, .90278],
        215: [.08333, .58333, 0, 0, .77778],
        216: [.04861, .73194, 0, 0, .77778],
        223: [0, .69444, 0, 0, .5],
        230: [0, .43056, 0, 0, .72222],
        247: [.08333, .58333, 0, 0, .77778],
        248: [.09722, .52778, 0, 0, .5],
        305: [0, .43056, 0, 0, .27778],
        338: [0, .68333, 0, 0, 1.01389],
        339: [0, .43056, 0, 0, .77778],
        567: [.19444, .43056, 0, 0, .30556],
        710: [0, .69444, 0, 0, .5],
        711: [0, .62847, 0, 0, .5],
        713: [0, .56778, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .66786, 0, 0, .27778],
        730: [0, .69444, 0, 0, .75],
        732: [0, .66786, 0, 0, .5],
        733: [0, .69444, 0, 0, .5],
        915: [0, .68333, 0, 0, .625],
        916: [0, .68333, 0, 0, .83334],
        920: [0, .68333, 0, 0, .77778],
        923: [0, .68333, 0, 0, .69445],
        926: [0, .68333, 0, 0, .66667],
        928: [0, .68333, 0, 0, .75],
        931: [0, .68333, 0, 0, .72222],
        933: [0, .68333, 0, 0, .77778],
        934: [0, .68333, 0, 0, .72222],
        936: [0, .68333, 0, 0, .77778],
        937: [0, .68333, 0, 0, .72222],
        8211: [0, .43056, .02778, 0, .5],
        8212: [0, .43056, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5],
        8224: [.19444, .69444, 0, 0, .44445],
        8225: [.19444, .69444, 0, 0, .44445],
        8230: [0, .123, 0, 0, 1.172],
        8242: [0, .55556, 0, 0, .275],
        8407: [0, .71444, .15382, 0, .5],
        8463: [0, .68889, 0, 0, .54028],
        8465: [0, .69444, 0, 0, .72222],
        8467: [0, .69444, 0, .11111, .41667],
        8472: [.19444, .43056, 0, .11111, .63646],
        8476: [0, .69444, 0, 0, .72222],
        8501: [0, .69444, 0, 0, .61111],
        8592: [-.13313, .36687, 0, 0, 1],
        8593: [.19444, .69444, 0, 0, .5],
        8594: [-.13313, .36687, 0, 0, 1],
        8595: [.19444, .69444, 0, 0, .5],
        8596: [-.13313, .36687, 0, 0, 1],
        8597: [.25, .75, 0, 0, .5],
        8598: [.19444, .69444, 0, 0, 1],
        8599: [.19444, .69444, 0, 0, 1],
        8600: [.19444, .69444, 0, 0, 1],
        8601: [.19444, .69444, 0, 0, 1],
        8614: [.011, .511, 0, 0, 1],
        8617: [.011, .511, 0, 0, 1.126],
        8618: [.011, .511, 0, 0, 1.126],
        8636: [-.13313, .36687, 0, 0, 1],
        8637: [-.13313, .36687, 0, 0, 1],
        8640: [-.13313, .36687, 0, 0, 1],
        8641: [-.13313, .36687, 0, 0, 1],
        8652: [.011, .671, 0, 0, 1],
        8656: [-.13313, .36687, 0, 0, 1],
        8657: [.19444, .69444, 0, 0, .61111],
        8658: [-.13313, .36687, 0, 0, 1],
        8659: [.19444, .69444, 0, 0, .61111],
        8660: [-.13313, .36687, 0, 0, 1],
        8661: [.25, .75, 0, 0, .61111],
        8704: [0, .69444, 0, 0, .55556],
        8706: [0, .69444, .05556, .08334, .5309],
        8707: [0, .69444, 0, 0, .55556],
        8709: [.05556, .75, 0, 0, .5],
        8711: [0, .68333, 0, 0, .83334],
        8712: [.0391, .5391, 0, 0, .66667],
        8715: [.0391, .5391, 0, 0, .66667],
        8722: [.08333, .58333, 0, 0, .77778],
        8723: [.08333, .58333, 0, 0, .77778],
        8725: [.25, .75, 0, 0, .5],
        8726: [.25, .75, 0, 0, .5],
        8727: [-.03472, .46528, 0, 0, .5],
        8728: [-.05555, .44445, 0, 0, .5],
        8729: [-.05555, .44445, 0, 0, .5],
        8730: [.2, .8, 0, 0, .83334],
        8733: [0, .43056, 0, 0, .77778],
        8734: [0, .43056, 0, 0, 1],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .27778],
        8741: [.25, .75, 0, 0, .5],
        8743: [0, .55556, 0, 0, .66667],
        8744: [0, .55556, 0, 0, .66667],
        8745: [0, .55556, 0, 0, .66667],
        8746: [0, .55556, 0, 0, .66667],
        8747: [.19444, .69444, .11111, 0, .41667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8768: [.19444, .69444, 0, 0, .27778],
        8771: [-.03625, .46375, 0, 0, .77778],
        8773: [-.022, .589, 0, 0, .778],
        8776: [-.01688, .48312, 0, 0, .77778],
        8781: [-.03625, .46375, 0, 0, .77778],
        8784: [-.133, .673, 0, 0, .778],
        8801: [-.03625, .46375, 0, 0, .77778],
        8804: [.13597, .63597, 0, 0, .77778],
        8805: [.13597, .63597, 0, 0, .77778],
        8810: [.0391, .5391, 0, 0, 1],
        8811: [.0391, .5391, 0, 0, 1],
        8826: [.0391, .5391, 0, 0, .77778],
        8827: [.0391, .5391, 0, 0, .77778],
        8834: [.0391, .5391, 0, 0, .77778],
        8835: [.0391, .5391, 0, 0, .77778],
        8838: [.13597, .63597, 0, 0, .77778],
        8839: [.13597, .63597, 0, 0, .77778],
        8846: [0, .55556, 0, 0, .66667],
        8849: [.13597, .63597, 0, 0, .77778],
        8850: [.13597, .63597, 0, 0, .77778],
        8851: [0, .55556, 0, 0, .66667],
        8852: [0, .55556, 0, 0, .66667],
        8853: [.08333, .58333, 0, 0, .77778],
        8854: [.08333, .58333, 0, 0, .77778],
        8855: [.08333, .58333, 0, 0, .77778],
        8856: [.08333, .58333, 0, 0, .77778],
        8857: [.08333, .58333, 0, 0, .77778],
        8866: [0, .69444, 0, 0, .61111],
        8867: [0, .69444, 0, 0, .61111],
        8868: [0, .69444, 0, 0, .77778],
        8869: [0, .69444, 0, 0, .77778],
        8872: [.249, .75, 0, 0, .867],
        8900: [-.05555, .44445, 0, 0, .5],
        8901: [-.05555, .44445, 0, 0, .27778],
        8902: [-.03472, .46528, 0, 0, .5],
        8904: [.005, .505, 0, 0, .9],
        8942: [.03, .903, 0, 0, .278],
        8943: [-.19, .313, 0, 0, 1.172],
        8945: [-.1, .823, 0, 0, 1.282],
        8968: [.25, .75, 0, 0, .44445],
        8969: [.25, .75, 0, 0, .44445],
        8970: [.25, .75, 0, 0, .44445],
        8971: [.25, .75, 0, 0, .44445],
        8994: [-.14236, .35764, 0, 0, 1],
        8995: [-.14236, .35764, 0, 0, 1],
        9136: [.244, .744, 0, 0, .412],
        9137: [.244, .745, 0, 0, .412],
        9651: [.19444, .69444, 0, 0, .88889],
        9657: [-.03472, .46528, 0, 0, .5],
        9661: [.19444, .69444, 0, 0, .88889],
        9667: [-.03472, .46528, 0, 0, .5],
        9711: [.19444, .69444, 0, 0, 1],
        9824: [.12963, .69444, 0, 0, .77778],
        9825: [.12963, .69444, 0, 0, .77778],
        9826: [.12963, .69444, 0, 0, .77778],
        9827: [.12963, .69444, 0, 0, .77778],
        9837: [0, .75, 0, 0, .38889],
        9838: [.19444, .69444, 0, 0, .38889],
        9839: [.19444, .69444, 0, 0, .38889],
        10216: [.25, .75, 0, 0, .38889],
        10217: [.25, .75, 0, 0, .38889],
        10222: [.244, .744, 0, 0, .412],
        10223: [.244, .745, 0, 0, .412],
        10229: [.011, .511, 0, 0, 1.609],
        10230: [.011, .511, 0, 0, 1.638],
        10231: [.011, .511, 0, 0, 1.859],
        10232: [.024, .525, 0, 0, 1.609],
        10233: [.024, .525, 0, 0, 1.638],
        10234: [.024, .525, 0, 0, 1.858],
        10236: [.011, .511, 0, 0, 1.638],
        10815: [0, .68333, 0, 0, .75],
        10927: [.13597, .63597, 0, 0, .77778],
        10928: [.13597, .63597, 0, 0, .77778],
        57376: [.19444, .69444, 0, 0, 0]
    },
    "Math-BoldItalic": {
        32: [0, 0, 0, 0, .25],
        48: [0, .44444, 0, 0, .575],
        49: [0, .44444, 0, 0, .575],
        50: [0, .44444, 0, 0, .575],
        51: [.19444, .44444, 0, 0, .575],
        52: [.19444, .44444, 0, 0, .575],
        53: [.19444, .44444, 0, 0, .575],
        54: [0, .64444, 0, 0, .575],
        55: [.19444, .44444, 0, 0, .575],
        56: [0, .64444, 0, 0, .575],
        57: [.19444, .44444, 0, 0, .575],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, .04835, 0, .8664],
        67: [0, .68611, .06979, 0, .81694],
        68: [0, .68611, .03194, 0, .93812],
        69: [0, .68611, .05451, 0, .81007],
        70: [0, .68611, .15972, 0, .68889],
        71: [0, .68611, 0, 0, .88673],
        72: [0, .68611, .08229, 0, .98229],
        73: [0, .68611, .07778, 0, .51111],
        74: [0, .68611, .10069, 0, .63125],
        75: [0, .68611, .06979, 0, .97118],
        76: [0, .68611, 0, 0, .75555],
        77: [0, .68611, .11424, 0, 1.14201],
        78: [0, .68611, .11424, 0, .95034],
        79: [0, .68611, .03194, 0, .83666],
        80: [0, .68611, .15972, 0, .72309],
        81: [.19444, .68611, 0, 0, .86861],
        82: [0, .68611, .00421, 0, .87235],
        83: [0, .68611, .05382, 0, .69271],
        84: [0, .68611, .15972, 0, .63663],
        85: [0, .68611, .11424, 0, .80027],
        86: [0, .68611, .25555, 0, .67778],
        87: [0, .68611, .15972, 0, 1.09305],
        88: [0, .68611, .07778, 0, .94722],
        89: [0, .68611, .25555, 0, .67458],
        90: [0, .68611, .06979, 0, .77257],
        97: [0, .44444, 0, 0, .63287],
        98: [0, .69444, 0, 0, .52083],
        99: [0, .44444, 0, 0, .51342],
        100: [0, .69444, 0, 0, .60972],
        101: [0, .44444, 0, 0, .55361],
        102: [.19444, .69444, .11042, 0, .56806],
        103: [.19444, .44444, .03704, 0, .5449],
        104: [0, .69444, 0, 0, .66759],
        105: [0, .69326, 0, 0, .4048],
        106: [.19444, .69326, .0622, 0, .47083],
        107: [0, .69444, .01852, 0, .6037],
        108: [0, .69444, .0088, 0, .34815],
        109: [0, .44444, 0, 0, 1.0324],
        110: [0, .44444, 0, 0, .71296],
        111: [0, .44444, 0, 0, .58472],
        112: [.19444, .44444, 0, 0, .60092],
        113: [.19444, .44444, .03704, 0, .54213],
        114: [0, .44444, .03194, 0, .5287],
        115: [0, .44444, 0, 0, .53125],
        116: [0, .63492, 0, 0, .41528],
        117: [0, .44444, 0, 0, .68102],
        118: [0, .44444, .03704, 0, .56666],
        119: [0, .44444, .02778, 0, .83148],
        120: [0, .44444, 0, 0, .65903],
        121: [.19444, .44444, .03704, 0, .59028],
        122: [0, .44444, .04213, 0, .55509],
        160: [0, 0, 0, 0, .25],
        915: [0, .68611, .15972, 0, .65694],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, .03194, 0, .86722],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, .07458, 0, .84125],
        928: [0, .68611, .08229, 0, .98229],
        931: [0, .68611, .05451, 0, .88507],
        933: [0, .68611, .15972, 0, .67083],
        934: [0, .68611, 0, 0, .76666],
        936: [0, .68611, .11653, 0, .71402],
        937: [0, .68611, .04835, 0, .8789],
        945: [0, .44444, 0, 0, .76064],
        946: [.19444, .69444, .03403, 0, .65972],
        947: [.19444, .44444, .06389, 0, .59003],
        948: [0, .69444, .03819, 0, .52222],
        949: [0, .44444, 0, 0, .52882],
        950: [.19444, .69444, .06215, 0, .50833],
        951: [.19444, .44444, .03704, 0, .6],
        952: [0, .69444, .03194, 0, .5618],
        953: [0, .44444, 0, 0, .41204],
        954: [0, .44444, 0, 0, .66759],
        955: [0, .69444, 0, 0, .67083],
        956: [.19444, .44444, 0, 0, .70787],
        957: [0, .44444, .06898, 0, .57685],
        958: [.19444, .69444, .03021, 0, .50833],
        959: [0, .44444, 0, 0, .58472],
        960: [0, .44444, .03704, 0, .68241],
        961: [.19444, .44444, 0, 0, .6118],
        962: [.09722, .44444, .07917, 0, .42361],
        963: [0, .44444, .03704, 0, .68588],
        964: [0, .44444, .13472, 0, .52083],
        965: [0, .44444, .03704, 0, .63055],
        966: [.19444, .44444, 0, 0, .74722],
        967: [.19444, .44444, 0, 0, .71805],
        968: [.19444, .69444, .03704, 0, .75833],
        969: [0, .44444, .03704, 0, .71782],
        977: [0, .69444, 0, 0, .69155],
        981: [.19444, .69444, 0, 0, .7125],
        982: [0, .44444, .03194, 0, .975],
        1009: [.19444, .44444, 0, 0, .6118],
        1013: [0, .44444, 0, 0, .48333],
        57649: [0, .44444, 0, 0, .39352],
        57911: [.19444, .44444, 0, 0, .43889]
    },
    "Math-Italic": {
        32: [0, 0, 0, 0, .25],
        48: [0, .43056, 0, 0, .5],
        49: [0, .43056, 0, 0, .5],
        50: [0, .43056, 0, 0, .5],
        51: [.19444, .43056, 0, 0, .5],
        52: [.19444, .43056, 0, 0, .5],
        53: [.19444, .43056, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [.19444, .43056, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [.19444, .43056, 0, 0, .5],
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        160: [0, 0, 0, 0, .25],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059],
        57649: [0, .43056, 0, .02778, .32246],
        57911: [.19444, .43056, 0, .08334, .38403]
    },
    "SansSerif-Bold": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, 0, 0, .36667],
        34: [0, .69444, 0, 0, .55834],
        35: [.19444, .69444, 0, 0, .91667],
        36: [.05556, .75, 0, 0, .55],
        37: [.05556, .75, 0, 0, 1.02912],
        38: [0, .69444, 0, 0, .83056],
        39: [0, .69444, 0, 0, .30556],
        40: [.25, .75, 0, 0, .42778],
        41: [.25, .75, 0, 0, .42778],
        42: [0, .75, 0, 0, .55],
        43: [.11667, .61667, 0, 0, .85556],
        44: [.10556, .13056, 0, 0, .30556],
        45: [0, .45833, 0, 0, .36667],
        46: [0, .13056, 0, 0, .30556],
        47: [.25, .75, 0, 0, .55],
        48: [0, .69444, 0, 0, .55],
        49: [0, .69444, 0, 0, .55],
        50: [0, .69444, 0, 0, .55],
        51: [0, .69444, 0, 0, .55],
        52: [0, .69444, 0, 0, .55],
        53: [0, .69444, 0, 0, .55],
        54: [0, .69444, 0, 0, .55],
        55: [0, .69444, 0, 0, .55],
        56: [0, .69444, 0, 0, .55],
        57: [0, .69444, 0, 0, .55],
        58: [0, .45833, 0, 0, .30556],
        59: [.10556, .45833, 0, 0, .30556],
        61: [-.09375, .40625, 0, 0, .85556],
        63: [0, .69444, 0, 0, .51945],
        64: [0, .69444, 0, 0, .73334],
        65: [0, .69444, 0, 0, .73334],
        66: [0, .69444, 0, 0, .73334],
        67: [0, .69444, 0, 0, .70278],
        68: [0, .69444, 0, 0, .79445],
        69: [0, .69444, 0, 0, .64167],
        70: [0, .69444, 0, 0, .61111],
        71: [0, .69444, 0, 0, .73334],
        72: [0, .69444, 0, 0, .79445],
        73: [0, .69444, 0, 0, .33056],
        74: [0, .69444, 0, 0, .51945],
        75: [0, .69444, 0, 0, .76389],
        76: [0, .69444, 0, 0, .58056],
        77: [0, .69444, 0, 0, .97778],
        78: [0, .69444, 0, 0, .79445],
        79: [0, .69444, 0, 0, .79445],
        80: [0, .69444, 0, 0, .70278],
        81: [.10556, .69444, 0, 0, .79445],
        82: [0, .69444, 0, 0, .70278],
        83: [0, .69444, 0, 0, .61111],
        84: [0, .69444, 0, 0, .73334],
        85: [0, .69444, 0, 0, .76389],
        86: [0, .69444, .01528, 0, .73334],
        87: [0, .69444, .01528, 0, 1.03889],
        88: [0, .69444, 0, 0, .73334],
        89: [0, .69444, .0275, 0, .73334],
        90: [0, .69444, 0, 0, .67223],
        91: [.25, .75, 0, 0, .34306],
        93: [.25, .75, 0, 0, .34306],
        94: [0, .69444, 0, 0, .55],
        95: [.35, .10833, .03056, 0, .55],
        97: [0, .45833, 0, 0, .525],
        98: [0, .69444, 0, 0, .56111],
        99: [0, .45833, 0, 0, .48889],
        100: [0, .69444, 0, 0, .56111],
        101: [0, .45833, 0, 0, .51111],
        102: [0, .69444, .07639, 0, .33611],
        103: [.19444, .45833, .01528, 0, .55],
        104: [0, .69444, 0, 0, .56111],
        105: [0, .69444, 0, 0, .25556],
        106: [.19444, .69444, 0, 0, .28611],
        107: [0, .69444, 0, 0, .53056],
        108: [0, .69444, 0, 0, .25556],
        109: [0, .45833, 0, 0, .86667],
        110: [0, .45833, 0, 0, .56111],
        111: [0, .45833, 0, 0, .55],
        112: [.19444, .45833, 0, 0, .56111],
        113: [.19444, .45833, 0, 0, .56111],
        114: [0, .45833, .01528, 0, .37222],
        115: [0, .45833, 0, 0, .42167],
        116: [0, .58929, 0, 0, .40417],
        117: [0, .45833, 0, 0, .56111],
        118: [0, .45833, .01528, 0, .5],
        119: [0, .45833, .01528, 0, .74445],
        120: [0, .45833, 0, 0, .5],
        121: [.19444, .45833, .01528, 0, .5],
        122: [0, .45833, 0, 0, .47639],
        126: [.35, .34444, 0, 0, .55],
        160: [0, 0, 0, 0, .25],
        168: [0, .69444, 0, 0, .55],
        176: [0, .69444, 0, 0, .73334],
        180: [0, .69444, 0, 0, .55],
        184: [.17014, 0, 0, 0, .48889],
        305: [0, .45833, 0, 0, .25556],
        567: [.19444, .45833, 0, 0, .28611],
        710: [0, .69444, 0, 0, .55],
        711: [0, .63542, 0, 0, .55],
        713: [0, .63778, 0, 0, .55],
        728: [0, .69444, 0, 0, .55],
        729: [0, .69444, 0, 0, .30556],
        730: [0, .69444, 0, 0, .73334],
        732: [0, .69444, 0, 0, .55],
        733: [0, .69444, 0, 0, .55],
        915: [0, .69444, 0, 0, .58056],
        916: [0, .69444, 0, 0, .91667],
        920: [0, .69444, 0, 0, .85556],
        923: [0, .69444, 0, 0, .67223],
        926: [0, .69444, 0, 0, .73334],
        928: [0, .69444, 0, 0, .79445],
        931: [0, .69444, 0, 0, .79445],
        933: [0, .69444, 0, 0, .85556],
        934: [0, .69444, 0, 0, .79445],
        936: [0, .69444, 0, 0, .85556],
        937: [0, .69444, 0, 0, .79445],
        8211: [0, .45833, .03056, 0, .55],
        8212: [0, .45833, .03056, 0, 1.10001],
        8216: [0, .69444, 0, 0, .30556],
        8217: [0, .69444, 0, 0, .30556],
        8220: [0, .69444, 0, 0, .55834],
        8221: [0, .69444, 0, 0, .55834]
    },
    "SansSerif-Italic": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, .05733, 0, .31945],
        34: [0, .69444, .00316, 0, .5],
        35: [.19444, .69444, .05087, 0, .83334],
        36: [.05556, .75, .11156, 0, .5],
        37: [.05556, .75, .03126, 0, .83334],
        38: [0, .69444, .03058, 0, .75834],
        39: [0, .69444, .07816, 0, .27778],
        40: [.25, .75, .13164, 0, .38889],
        41: [.25, .75, .02536, 0, .38889],
        42: [0, .75, .11775, 0, .5],
        43: [.08333, .58333, .02536, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, .01946, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, .13164, 0, .5],
        48: [0, .65556, .11156, 0, .5],
        49: [0, .65556, .11156, 0, .5],
        50: [0, .65556, .11156, 0, .5],
        51: [0, .65556, .11156, 0, .5],
        52: [0, .65556, .11156, 0, .5],
        53: [0, .65556, .11156, 0, .5],
        54: [0, .65556, .11156, 0, .5],
        55: [0, .65556, .11156, 0, .5],
        56: [0, .65556, .11156, 0, .5],
        57: [0, .65556, .11156, 0, .5],
        58: [0, .44444, .02502, 0, .27778],
        59: [.125, .44444, .02502, 0, .27778],
        61: [-.13, .37, .05087, 0, .77778],
        63: [0, .69444, .11809, 0, .47222],
        64: [0, .69444, .07555, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, .08293, 0, .66667],
        67: [0, .69444, .11983, 0, .63889],
        68: [0, .69444, .07555, 0, .72223],
        69: [0, .69444, .11983, 0, .59722],
        70: [0, .69444, .13372, 0, .56945],
        71: [0, .69444, .11983, 0, .66667],
        72: [0, .69444, .08094, 0, .70834],
        73: [0, .69444, .13372, 0, .27778],
        74: [0, .69444, .08094, 0, .47222],
        75: [0, .69444, .11983, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, .08094, 0, .875],
        78: [0, .69444, .08094, 0, .70834],
        79: [0, .69444, .07555, 0, .73611],
        80: [0, .69444, .08293, 0, .63889],
        81: [.125, .69444, .07555, 0, .73611],
        82: [0, .69444, .08293, 0, .64584],
        83: [0, .69444, .09205, 0, .55556],
        84: [0, .69444, .13372, 0, .68056],
        85: [0, .69444, .08094, 0, .6875],
        86: [0, .69444, .1615, 0, .66667],
        87: [0, .69444, .1615, 0, .94445],
        88: [0, .69444, .13372, 0, .66667],
        89: [0, .69444, .17261, 0, .66667],
        90: [0, .69444, .11983, 0, .61111],
        91: [.25, .75, .15942, 0, .28889],
        93: [.25, .75, .08719, 0, .28889],
        94: [0, .69444, .0799, 0, .5],
        95: [.35, .09444, .08616, 0, .5],
        97: [0, .44444, .00981, 0, .48056],
        98: [0, .69444, .03057, 0, .51667],
        99: [0, .44444, .08336, 0, .44445],
        100: [0, .69444, .09483, 0, .51667],
        101: [0, .44444, .06778, 0, .44445],
        102: [0, .69444, .21705, 0, .30556],
        103: [.19444, .44444, .10836, 0, .5],
        104: [0, .69444, .01778, 0, .51667],
        105: [0, .67937, .09718, 0, .23889],
        106: [.19444, .67937, .09162, 0, .26667],
        107: [0, .69444, .08336, 0, .48889],
        108: [0, .69444, .09483, 0, .23889],
        109: [0, .44444, .01778, 0, .79445],
        110: [0, .44444, .01778, 0, .51667],
        111: [0, .44444, .06613, 0, .5],
        112: [.19444, .44444, .0389, 0, .51667],
        113: [.19444, .44444, .04169, 0, .51667],
        114: [0, .44444, .10836, 0, .34167],
        115: [0, .44444, .0778, 0, .38333],
        116: [0, .57143, .07225, 0, .36111],
        117: [0, .44444, .04169, 0, .51667],
        118: [0, .44444, .10836, 0, .46111],
        119: [0, .44444, .10836, 0, .68334],
        120: [0, .44444, .09169, 0, .46111],
        121: [.19444, .44444, .10836, 0, .46111],
        122: [0, .44444, .08752, 0, .43472],
        126: [.35, .32659, .08826, 0, .5],
        160: [0, 0, 0, 0, .25],
        168: [0, .67937, .06385, 0, .5],
        176: [0, .69444, 0, 0, .73752],
        184: [.17014, 0, 0, 0, .44445],
        305: [0, .44444, .04169, 0, .23889],
        567: [.19444, .44444, .04169, 0, .26667],
        710: [0, .69444, .0799, 0, .5],
        711: [0, .63194, .08432, 0, .5],
        713: [0, .60889, .08776, 0, .5],
        714: [0, .69444, .09205, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, .09483, 0, .5],
        729: [0, .67937, .07774, 0, .27778],
        730: [0, .69444, 0, 0, .73752],
        732: [0, .67659, .08826, 0, .5],
        733: [0, .69444, .09205, 0, .5],
        915: [0, .69444, .13372, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, .07555, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, .12816, 0, .66667],
        928: [0, .69444, .08094, 0, .70834],
        931: [0, .69444, .11983, 0, .72222],
        933: [0, .69444, .09031, 0, .77778],
        934: [0, .69444, .04603, 0, .72222],
        936: [0, .69444, .09031, 0, .77778],
        937: [0, .69444, .08293, 0, .72222],
        8211: [0, .44444, .08616, 0, .5],
        8212: [0, .44444, .08616, 0, 1],
        8216: [0, .69444, .07816, 0, .27778],
        8217: [0, .69444, .07816, 0, .27778],
        8220: [0, .69444, .14205, 0, .5],
        8221: [0, .69444, .00316, 0, .5]
    },
    "SansSerif-Regular": {
        32: [0, 0, 0, 0, .25],
        33: [0, .69444, 0, 0, .31945],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .75834],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, 0, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .65556, 0, 0, .5],
        49: [0, .65556, 0, 0, .5],
        50: [0, .65556, 0, 0, .5],
        51: [0, .65556, 0, 0, .5],
        52: [0, .65556, 0, 0, .5],
        53: [0, .65556, 0, 0, .5],
        54: [0, .65556, 0, 0, .5],
        55: [0, .65556, 0, 0, .5],
        56: [0, .65556, 0, 0, .5],
        57: [0, .65556, 0, 0, .5],
        58: [0, .44444, 0, 0, .27778],
        59: [.125, .44444, 0, 0, .27778],
        61: [-.13, .37, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, 0, 0, .66667],
        67: [0, .69444, 0, 0, .63889],
        68: [0, .69444, 0, 0, .72223],
        69: [0, .69444, 0, 0, .59722],
        70: [0, .69444, 0, 0, .56945],
        71: [0, .69444, 0, 0, .66667],
        72: [0, .69444, 0, 0, .70834],
        73: [0, .69444, 0, 0, .27778],
        74: [0, .69444, 0, 0, .47222],
        75: [0, .69444, 0, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, 0, 0, .875],
        78: [0, .69444, 0, 0, .70834],
        79: [0, .69444, 0, 0, .73611],
        80: [0, .69444, 0, 0, .63889],
        81: [.125, .69444, 0, 0, .73611],
        82: [0, .69444, 0, 0, .64584],
        83: [0, .69444, 0, 0, .55556],
        84: [0, .69444, 0, 0, .68056],
        85: [0, .69444, 0, 0, .6875],
        86: [0, .69444, .01389, 0, .66667],
        87: [0, .69444, .01389, 0, .94445],
        88: [0, .69444, 0, 0, .66667],
        89: [0, .69444, .025, 0, .66667],
        90: [0, .69444, 0, 0, .61111],
        91: [.25, .75, 0, 0, .28889],
        93: [.25, .75, 0, 0, .28889],
        94: [0, .69444, 0, 0, .5],
        95: [.35, .09444, .02778, 0, .5],
        97: [0, .44444, 0, 0, .48056],
        98: [0, .69444, 0, 0, .51667],
        99: [0, .44444, 0, 0, .44445],
        100: [0, .69444, 0, 0, .51667],
        101: [0, .44444, 0, 0, .44445],
        102: [0, .69444, .06944, 0, .30556],
        103: [.19444, .44444, .01389, 0, .5],
        104: [0, .69444, 0, 0, .51667],
        105: [0, .67937, 0, 0, .23889],
        106: [.19444, .67937, 0, 0, .26667],
        107: [0, .69444, 0, 0, .48889],
        108: [0, .69444, 0, 0, .23889],
        109: [0, .44444, 0, 0, .79445],
        110: [0, .44444, 0, 0, .51667],
        111: [0, .44444, 0, 0, .5],
        112: [.19444, .44444, 0, 0, .51667],
        113: [.19444, .44444, 0, 0, .51667],
        114: [0, .44444, .01389, 0, .34167],
        115: [0, .44444, 0, 0, .38333],
        116: [0, .57143, 0, 0, .36111],
        117: [0, .44444, 0, 0, .51667],
        118: [0, .44444, .01389, 0, .46111],
        119: [0, .44444, .01389, 0, .68334],
        120: [0, .44444, 0, 0, .46111],
        121: [.19444, .44444, .01389, 0, .46111],
        122: [0, .44444, 0, 0, .43472],
        126: [.35, .32659, 0, 0, .5],
        160: [0, 0, 0, 0, .25],
        168: [0, .67937, 0, 0, .5],
        176: [0, .69444, 0, 0, .66667],
        184: [.17014, 0, 0, 0, .44445],
        305: [0, .44444, 0, 0, .23889],
        567: [.19444, .44444, 0, 0, .26667],
        710: [0, .69444, 0, 0, .5],
        711: [0, .63194, 0, 0, .5],
        713: [0, .60889, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .67937, 0, 0, .27778],
        730: [0, .69444, 0, 0, .66667],
        732: [0, .67659, 0, 0, .5],
        733: [0, .69444, 0, 0, .5],
        915: [0, .69444, 0, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, 0, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, 0, 0, .66667],
        928: [0, .69444, 0, 0, .70834],
        931: [0, .69444, 0, 0, .72222],
        933: [0, .69444, 0, 0, .77778],
        934: [0, .69444, 0, 0, .72222],
        936: [0, .69444, 0, 0, .77778],
        937: [0, .69444, 0, 0, .72222],
        8211: [0, .44444, .02778, 0, .5],
        8212: [0, .44444, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5]
    },
    "Script-Regular": {
        32: [0, 0, 0, 0, .25],
        65: [0, .7, .22925, 0, .80253],
        66: [0, .7, .04087, 0, .90757],
        67: [0, .7, .1689, 0, .66619],
        68: [0, .7, .09371, 0, .77443],
        69: [0, .7, .18583, 0, .56162],
        70: [0, .7, .13634, 0, .89544],
        71: [0, .7, .17322, 0, .60961],
        72: [0, .7, .29694, 0, .96919],
        73: [0, .7, .19189, 0, .80907],
        74: [.27778, .7, .19189, 0, 1.05159],
        75: [0, .7, .31259, 0, .91364],
        76: [0, .7, .19189, 0, .87373],
        77: [0, .7, .15981, 0, 1.08031],
        78: [0, .7, .3525, 0, .9015],
        79: [0, .7, .08078, 0, .73787],
        80: [0, .7, .08078, 0, 1.01262],
        81: [0, .7, .03305, 0, .88282],
        82: [0, .7, .06259, 0, .85],
        83: [0, .7, .19189, 0, .86767],
        84: [0, .7, .29087, 0, .74697],
        85: [0, .7, .25815, 0, .79996],
        86: [0, .7, .27523, 0, .62204],
        87: [0, .7, .27523, 0, .80532],
        88: [0, .7, .26006, 0, .94445],
        89: [0, .7, .2939, 0, .70961],
        90: [0, .7, .24037, 0, .8212],
        160: [0, 0, 0, 0, .25]
    },
    "Size1-Regular": {
        32: [0, 0, 0, 0, .25],
        40: [.35001, .85, 0, 0, .45834],
        41: [.35001, .85, 0, 0, .45834],
        47: [.35001, .85, 0, 0, .57778],
        91: [.35001, .85, 0, 0, .41667],
        92: [.35001, .85, 0, 0, .57778],
        93: [.35001, .85, 0, 0, .41667],
        123: [.35001, .85, 0, 0, .58334],
        125: [.35001, .85, 0, 0, .58334],
        160: [0, 0, 0, 0, .25],
        710: [0, .72222, 0, 0, .55556],
        732: [0, .72222, 0, 0, .55556],
        770: [0, .72222, 0, 0, .55556],
        771: [0, .72222, 0, 0, .55556],
        8214: [-99e-5, .601, 0, 0, .77778],
        8593: [1e-5, .6, 0, 0, .66667],
        8595: [1e-5, .6, 0, 0, .66667],
        8657: [1e-5, .6, 0, 0, .77778],
        8659: [1e-5, .6, 0, 0, .77778],
        8719: [.25001, .75, 0, 0, .94445],
        8720: [.25001, .75, 0, 0, .94445],
        8721: [.25001, .75, 0, 0, 1.05556],
        8730: [.35001, .85, 0, 0, 1],
        8739: [-.00599, .606, 0, 0, .33333],
        8741: [-.00599, .606, 0, 0, .55556],
        8747: [.30612, .805, .19445, 0, .47222],
        8748: [.306, .805, .19445, 0, .47222],
        8749: [.306, .805, .19445, 0, .47222],
        8750: [.30612, .805, .19445, 0, .47222],
        8896: [.25001, .75, 0, 0, .83334],
        8897: [.25001, .75, 0, 0, .83334],
        8898: [.25001, .75, 0, 0, .83334],
        8899: [.25001, .75, 0, 0, .83334],
        8968: [.35001, .85, 0, 0, .47222],
        8969: [.35001, .85, 0, 0, .47222],
        8970: [.35001, .85, 0, 0, .47222],
        8971: [.35001, .85, 0, 0, .47222],
        9168: [-99e-5, .601, 0, 0, .66667],
        10216: [.35001, .85, 0, 0, .47222],
        10217: [.35001, .85, 0, 0, .47222],
        10752: [.25001, .75, 0, 0, 1.11111],
        10753: [.25001, .75, 0, 0, 1.11111],
        10754: [.25001, .75, 0, 0, 1.11111],
        10756: [.25001, .75, 0, 0, .83334],
        10758: [.25001, .75, 0, 0, .83334]
    },
    "Size2-Regular": {
        32: [0, 0, 0, 0, .25],
        40: [.65002, 1.15, 0, 0, .59722],
        41: [.65002, 1.15, 0, 0, .59722],
        47: [.65002, 1.15, 0, 0, .81111],
        91: [.65002, 1.15, 0, 0, .47222],
        92: [.65002, 1.15, 0, 0, .81111],
        93: [.65002, 1.15, 0, 0, .47222],
        123: [.65002, 1.15, 0, 0, .66667],
        125: [.65002, 1.15, 0, 0, .66667],
        160: [0, 0, 0, 0, .25],
        710: [0, .75, 0, 0, 1],
        732: [0, .75, 0, 0, 1],
        770: [0, .75, 0, 0, 1],
        771: [0, .75, 0, 0, 1],
        8719: [.55001, 1.05, 0, 0, 1.27778],
        8720: [.55001, 1.05, 0, 0, 1.27778],
        8721: [.55001, 1.05, 0, 0, 1.44445],
        8730: [.65002, 1.15, 0, 0, 1],
        8747: [.86225, 1.36, .44445, 0, .55556],
        8748: [.862, 1.36, .44445, 0, .55556],
        8749: [.862, 1.36, .44445, 0, .55556],
        8750: [.86225, 1.36, .44445, 0, .55556],
        8896: [.55001, 1.05, 0, 0, 1.11111],
        8897: [.55001, 1.05, 0, 0, 1.11111],
        8898: [.55001, 1.05, 0, 0, 1.11111],
        8899: [.55001, 1.05, 0, 0, 1.11111],
        8968: [.65002, 1.15, 0, 0, .52778],
        8969: [.65002, 1.15, 0, 0, .52778],
        8970: [.65002, 1.15, 0, 0, .52778],
        8971: [.65002, 1.15, 0, 0, .52778],
        10216: [.65002, 1.15, 0, 0, .61111],
        10217: [.65002, 1.15, 0, 0, .61111],
        10752: [.55001, 1.05, 0, 0, 1.51112],
        10753: [.55001, 1.05, 0, 0, 1.51112],
        10754: [.55001, 1.05, 0, 0, 1.51112],
        10756: [.55001, 1.05, 0, 0, 1.11111],
        10758: [.55001, 1.05, 0, 0, 1.11111]
    },
    "Size3-Regular": {
        32: [0, 0, 0, 0, .25],
        40: [.95003, 1.45, 0, 0, .73611],
        41: [.95003, 1.45, 0, 0, .73611],
        47: [.95003, 1.45, 0, 0, 1.04445],
        91: [.95003, 1.45, 0, 0, .52778],
        92: [.95003, 1.45, 0, 0, 1.04445],
        93: [.95003, 1.45, 0, 0, .52778],
        123: [.95003, 1.45, 0, 0, .75],
        125: [.95003, 1.45, 0, 0, .75],
        160: [0, 0, 0, 0, .25],
        710: [0, .75, 0, 0, 1.44445],
        732: [0, .75, 0, 0, 1.44445],
        770: [0, .75, 0, 0, 1.44445],
        771: [0, .75, 0, 0, 1.44445],
        8730: [.95003, 1.45, 0, 0, 1],
        8968: [.95003, 1.45, 0, 0, .58334],
        8969: [.95003, 1.45, 0, 0, .58334],
        8970: [.95003, 1.45, 0, 0, .58334],
        8971: [.95003, 1.45, 0, 0, .58334],
        10216: [.95003, 1.45, 0, 0, .75],
        10217: [.95003, 1.45, 0, 0, .75]
    },
    "Size4-Regular": {
        32: [0, 0, 0, 0, .25],
        40: [1.25003, 1.75, 0, 0, .79167],
        41: [1.25003, 1.75, 0, 0, .79167],
        47: [1.25003, 1.75, 0, 0, 1.27778],
        91: [1.25003, 1.75, 0, 0, .58334],
        92: [1.25003, 1.75, 0, 0, 1.27778],
        93: [1.25003, 1.75, 0, 0, .58334],
        123: [1.25003, 1.75, 0, 0, .80556],
        125: [1.25003, 1.75, 0, 0, .80556],
        160: [0, 0, 0, 0, .25],
        710: [0, .825, 0, 0, 1.8889],
        732: [0, .825, 0, 0, 1.8889],
        770: [0, .825, 0, 0, 1.8889],
        771: [0, .825, 0, 0, 1.8889],
        8730: [1.25003, 1.75, 0, 0, 1],
        8968: [1.25003, 1.75, 0, 0, .63889],
        8969: [1.25003, 1.75, 0, 0, .63889],
        8970: [1.25003, 1.75, 0, 0, .63889],
        8971: [1.25003, 1.75, 0, 0, .63889],
        9115: [.64502, 1.155, 0, 0, .875],
        9116: [1e-5, .6, 0, 0, .875],
        9117: [.64502, 1.155, 0, 0, .875],
        9118: [.64502, 1.155, 0, 0, .875],
        9119: [1e-5, .6, 0, 0, .875],
        9120: [.64502, 1.155, 0, 0, .875],
        9121: [.64502, 1.155, 0, 0, .66667],
        9122: [-99e-5, .601, 0, 0, .66667],
        9123: [.64502, 1.155, 0, 0, .66667],
        9124: [.64502, 1.155, 0, 0, .66667],
        9125: [-99e-5, .601, 0, 0, .66667],
        9126: [.64502, 1.155, 0, 0, .66667],
        9127: [1e-5, .9, 0, 0, .88889],
        9128: [.65002, 1.15, 0, 0, .88889],
        9129: [.90001, 0, 0, 0, .88889],
        9130: [0, .3, 0, 0, .88889],
        9131: [1e-5, .9, 0, 0, .88889],
        9132: [.65002, 1.15, 0, 0, .88889],
        9133: [.90001, 0, 0, 0, .88889],
        9143: [.88502, .915, 0, 0, 1.05556],
        10216: [1.25003, 1.75, 0, 0, .80556],
        10217: [1.25003, 1.75, 0, 0, .80556],
        57344: [-.00499, .605, 0, 0, 1.05556],
        57345: [-.00499, .605, 0, 0, 1.05556],
        57680: [0, .12, 0, 0, .45],
        57681: [0, .12, 0, 0, .45],
        57682: [0, .12, 0, 0, .45],
        57683: [0, .12, 0, 0, .45]
    },
    "Typewriter-Regular": {
        32: [0, 0, 0, 0, .525],
        33: [0, .61111, 0, 0, .525],
        34: [0, .61111, 0, 0, .525],
        35: [0, .61111, 0, 0, .525],
        36: [.08333, .69444, 0, 0, .525],
        37: [.08333, .69444, 0, 0, .525],
        38: [0, .61111, 0, 0, .525],
        39: [0, .61111, 0, 0, .525],
        40: [.08333, .69444, 0, 0, .525],
        41: [.08333, .69444, 0, 0, .525],
        42: [0, .52083, 0, 0, .525],
        43: [-.08056, .53055, 0, 0, .525],
        44: [.13889, .125, 0, 0, .525],
        45: [-.08056, .53055, 0, 0, .525],
        46: [0, .125, 0, 0, .525],
        47: [.08333, .69444, 0, 0, .525],
        48: [0, .61111, 0, 0, .525],
        49: [0, .61111, 0, 0, .525],
        50: [0, .61111, 0, 0, .525],
        51: [0, .61111, 0, 0, .525],
        52: [0, .61111, 0, 0, .525],
        53: [0, .61111, 0, 0, .525],
        54: [0, .61111, 0, 0, .525],
        55: [0, .61111, 0, 0, .525],
        56: [0, .61111, 0, 0, .525],
        57: [0, .61111, 0, 0, .525],
        58: [0, .43056, 0, 0, .525],
        59: [.13889, .43056, 0, 0, .525],
        60: [-.05556, .55556, 0, 0, .525],
        61: [-.19549, .41562, 0, 0, .525],
        62: [-.05556, .55556, 0, 0, .525],
        63: [0, .61111, 0, 0, .525],
        64: [0, .61111, 0, 0, .525],
        65: [0, .61111, 0, 0, .525],
        66: [0, .61111, 0, 0, .525],
        67: [0, .61111, 0, 0, .525],
        68: [0, .61111, 0, 0, .525],
        69: [0, .61111, 0, 0, .525],
        70: [0, .61111, 0, 0, .525],
        71: [0, .61111, 0, 0, .525],
        72: [0, .61111, 0, 0, .525],
        73: [0, .61111, 0, 0, .525],
        74: [0, .61111, 0, 0, .525],
        75: [0, .61111, 0, 0, .525],
        76: [0, .61111, 0, 0, .525],
        77: [0, .61111, 0, 0, .525],
        78: [0, .61111, 0, 0, .525],
        79: [0, .61111, 0, 0, .525],
        80: [0, .61111, 0, 0, .525],
        81: [.13889, .61111, 0, 0, .525],
        82: [0, .61111, 0, 0, .525],
        83: [0, .61111, 0, 0, .525],
        84: [0, .61111, 0, 0, .525],
        85: [0, .61111, 0, 0, .525],
        86: [0, .61111, 0, 0, .525],
        87: [0, .61111, 0, 0, .525],
        88: [0, .61111, 0, 0, .525],
        89: [0, .61111, 0, 0, .525],
        90: [0, .61111, 0, 0, .525],
        91: [.08333, .69444, 0, 0, .525],
        92: [.08333, .69444, 0, 0, .525],
        93: [.08333, .69444, 0, 0, .525],
        94: [0, .61111, 0, 0, .525],
        95: [.09514, 0, 0, 0, .525],
        96: [0, .61111, 0, 0, .525],
        97: [0, .43056, 0, 0, .525],
        98: [0, .61111, 0, 0, .525],
        99: [0, .43056, 0, 0, .525],
        100: [0, .61111, 0, 0, .525],
        101: [0, .43056, 0, 0, .525],
        102: [0, .61111, 0, 0, .525],
        103: [.22222, .43056, 0, 0, .525],
        104: [0, .61111, 0, 0, .525],
        105: [0, .61111, 0, 0, .525],
        106: [.22222, .61111, 0, 0, .525],
        107: [0, .61111, 0, 0, .525],
        108: [0, .61111, 0, 0, .525],
        109: [0, .43056, 0, 0, .525],
        110: [0, .43056, 0, 0, .525],
        111: [0, .43056, 0, 0, .525],
        112: [.22222, .43056, 0, 0, .525],
        113: [.22222, .43056, 0, 0, .525],
        114: [0, .43056, 0, 0, .525],
        115: [0, .43056, 0, 0, .525],
        116: [0, .55358, 0, 0, .525],
        117: [0, .43056, 0, 0, .525],
        118: [0, .43056, 0, 0, .525],
        119: [0, .43056, 0, 0, .525],
        120: [0, .43056, 0, 0, .525],
        121: [.22222, .43056, 0, 0, .525],
        122: [0, .43056, 0, 0, .525],
        123: [.08333, .69444, 0, 0, .525],
        124: [.08333, .69444, 0, 0, .525],
        125: [.08333, .69444, 0, 0, .525],
        126: [0, .61111, 0, 0, .525],
        127: [0, .61111, 0, 0, .525],
        160: [0, 0, 0, 0, .525],
        176: [0, .61111, 0, 0, .525],
        184: [.19445, 0, 0, 0, .525],
        305: [0, .43056, 0, 0, .525],
        567: [.22222, .43056, 0, 0, .525],
        711: [0, .56597, 0, 0, .525],
        713: [0, .56555, 0, 0, .525],
        714: [0, .61111, 0, 0, .525],
        715: [0, .61111, 0, 0, .525],
        728: [0, .61111, 0, 0, .525],
        730: [0, .61111, 0, 0, .525],
        770: [0, .61111, 0, 0, .525],
        771: [0, .61111, 0, 0, .525],
        776: [0, .61111, 0, 0, .525],
        915: [0, .61111, 0, 0, .525],
        916: [0, .61111, 0, 0, .525],
        920: [0, .61111, 0, 0, .525],
        923: [0, .61111, 0, 0, .525],
        926: [0, .61111, 0, 0, .525],
        928: [0, .61111, 0, 0, .525],
        931: [0, .61111, 0, 0, .525],
        933: [0, .61111, 0, 0, .525],
        934: [0, .61111, 0, 0, .525],
        936: [0, .61111, 0, 0, .525],
        937: [0, .61111, 0, 0, .525],
        8216: [0, .61111, 0, 0, .525],
        8217: [0, .61111, 0, 0, .525],
        8242: [0, .61111, 0, 0, .525],
        9251: [.11111, .21944, 0, 0, .525]
    }
}
  , Ir = {
    slant: [.25, .25, .25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [.431, .431, .431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [.677, .732, .925],
    num2: [.394, .384, .387],
    num3: [.444, .471, .504],
    denom1: [.686, .752, 1.025],
    denom2: [.345, .344, .532],
    sup1: [.413, .503, .504],
    sup2: [.363, .431, .404],
    sup3: [.289, .286, .294],
    sub1: [.15, .143, .2],
    sub2: [.247, .286, .4],
    supDrop: [.386, .353, .494],
    subDrop: [.05, .071, .1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [.25, .25, .25],
    defaultRuleThickness: [.04, .049, .049],
    bigOpSpacing1: [.111, .111, .111],
    bigOpSpacing2: [.166, .166, .166],
    bigOpSpacing3: [.2, .2, .2],
    bigOpSpacing4: [.6, .611, .611],
    bigOpSpacing5: [.1, .143, .143],
    sqrtRuleThickness: [.04, .04, .04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [.2, .2, .2],
    arrayRuleWidth: [.04, .04, .04],
    fboxsep: [.3, .3, .3],
    fboxrule: [.04, .04, .04]
}
  , ei = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r"
};
function f5(r, e) {
    Ut[r] = e
}
function js(r, e, t) {
    if (!Ut[e])
        throw new Error("Font metrics not found for font: " + e + ".");
    var a = r.charCodeAt(0)
      , s = Ut[e][a];
    if (!s && r[0]in ei && (a = ei[r[0]].charCodeAt(0),
    s = Ut[e][a]),
    !s && t === "text" && hl(a) && (s = Ut[e][77]),
    s)
        return {
            depth: s[0],
            height: s[1],
            italic: s[2],
            skew: s[3],
            width: s[4]
        }
}
var Ea = {};
function v5(r) {
    var e;
    if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2,
    !Ea[e]) {
        var t = Ea[e] = {
            cssEmPerMu: Ir.quad[e] / 18
        };
        for (var a in Ir)
            Ir.hasOwnProperty(a) && (t[a] = Ir[a][e])
    }
    return Ea[e]
}
var g5 = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]]
  , ti = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488]
  , ri = function(e, t) {
    return t.size < 2 ? e : g5[e - 1][t.size - 1]
};
class Jt {
    constructor(e) {
        this.style = void 0,
        this.color = void 0,
        this.size = void 0,
        this.textSize = void 0,
        this.phantom = void 0,
        this.font = void 0,
        this.fontFamily = void 0,
        this.fontWeight = void 0,
        this.fontShape = void 0,
        this.sizeMultiplier = void 0,
        this.maxSize = void 0,
        this.minRuleThickness = void 0,
        this._fontMetrics = void 0,
        this.style = e.style,
        this.color = e.color,
        this.size = e.size || Jt.BASESIZE,
        this.textSize = e.textSize || this.size,
        this.phantom = !!e.phantom,
        this.font = e.font || "",
        this.fontFamily = e.fontFamily || "",
        this.fontWeight = e.fontWeight || "",
        this.fontShape = e.fontShape || "",
        this.sizeMultiplier = ti[this.size - 1],
        this.maxSize = e.maxSize,
        this.minRuleThickness = e.minRuleThickness,
        this._fontMetrics = void 0
    }
    extend(e) {
        var t = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness
        };
        for (var a in e)
            e.hasOwnProperty(a) && (t[a] = e[a]);
        return new Jt(t)
    }
    havingStyle(e) {
        return this.style === e ? this : this.extend({
            style: e,
            size: ri(this.textSize, e)
        })
    }
    havingCrampedStyle() {
        return this.havingStyle(this.style.cramp())
    }
    havingSize(e) {
        return this.size === e && this.textSize === e ? this : this.extend({
            style: this.style.text(),
            size: e,
            textSize: e,
            sizeMultiplier: ti[e - 1]
        })
    }
    havingBaseStyle(e) {
        e = e || this.style.text();
        var t = ri(Jt.BASESIZE, e);
        return this.size === t && this.textSize === Jt.BASESIZE && this.style === e ? this : this.extend({
            style: e,
            size: t
        })
    }
    havingBaseSizing() {
        var e;
        switch (this.style.id) {
        case 4:
        case 5:
            e = 3;
            break;
        case 6:
        case 7:
            e = 1;
            break;
        default:
            e = 6
        }
        return this.extend({
            style: this.style.text(),
            size: e
        })
    }
    withColor(e) {
        return this.extend({
            color: e
        })
    }
    withPhantom() {
        return this.extend({
            phantom: !0
        })
    }
    withFont(e) {
        return this.extend({
            font: e
        })
    }
    withTextFontFamily(e) {
        return this.extend({
            fontFamily: e,
            font: ""
        })
    }
    withTextFontWeight(e) {
        return this.extend({
            fontWeight: e,
            font: ""
        })
    }
    withTextFontShape(e) {
        return this.extend({
            fontShape: e,
            font: ""
        })
    }
    sizingClasses(e) {
        return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
    }
    baseSizingClasses() {
        return this.size !== Jt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Jt.BASESIZE] : []
    }
    fontMetrics() {
        return this._fontMetrics || (this._fontMetrics = v5(this.size)),
        this._fontMetrics
    }
    getColor() {
        return this.phantom ? "transparent" : this.color
    }
}
Jt.BASESIZE = 6;
var bs = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800
}
  , y5 = {
    ex: !0,
    em: !0,
    mu: !0
}
  , ml = function(e) {
    return typeof e != "string" && (e = e.unit),
    e in bs || e in y5 || e === "ex"
}
  , je = function(e, t) {
    var a;
    if (e.unit in bs)
        a = bs[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    else if (e.unit === "mu")
        a = t.fontMetrics().cssEmPerMu;
    else {
        var s;
        if (t.style.isTight() ? s = t.havingStyle(t.style.text()) : s = t,
        e.unit === "ex")
            a = s.fontMetrics().xHeight;
        else if (e.unit === "em")
            a = s.fontMetrics().quad;
        else
            throw new $("Invalid unit: '" + e.unit + "'");
        s !== t && (a *= s.sizeMultiplier / t.sizeMultiplier)
    }
    return Math.min(e.number * a, t.maxSize)
}
  , H = function(e) {
    return +e.toFixed(4) + "em"
}
  , v0 = function(e) {
    return e.filter(t => t).join(" ")
}
  , pl = function(e, t, a) {
    if (this.classes = e || [],
    this.attributes = {},
    this.height = 0,
    this.depth = 0,
    this.maxFontSize = 0,
    this.style = a || {},
    t) {
        t.style.isTight() && this.classes.push("mtight");
        var s = t.getColor();
        s && (this.style.color = s)
    }
}
  , fl = function(e) {
    var t = document.createElement(e);
    t.className = v0(this.classes);
    for (var a in this.style)
        this.style.hasOwnProperty(a) && (t.style[a] = this.style[a]);
    for (var s in this.attributes)
        this.attributes.hasOwnProperty(s) && t.setAttribute(s, this.attributes[s]);
    for (var n = 0; n < this.children.length; n++)
        t.appendChild(this.children[n].toNode());
    return t
}
  , A5 = /[\s"'>/=\x00-\x1f]/
  , vl = function(e) {
    var t = "<" + e;
    this.classes.length && (t += ' class="' + ee.escape(v0(this.classes)) + '"');
    var a = "";
    for (var s in this.style)
        this.style.hasOwnProperty(s) && (a += ee.hyphenate(s) + ":" + this.style[s] + ";");
    a && (t += ' style="' + ee.escape(a) + '"');
    for (var n in this.attributes)
        if (this.attributes.hasOwnProperty(n)) {
            if (A5.test(n))
                throw new $("Invalid attribute name '" + n + "'");
            t += " " + n + '="' + ee.escape(this.attributes[n]) + '"'
        }
    t += ">";
    for (var i = 0; i < this.children.length; i++)
        t += this.children[i].toMarkup();
    return t += "</" + e + ">",
    t
};
class Ar {
    constructor(e, t, a, s) {
        this.children = void 0,
        this.attributes = void 0,
        this.classes = void 0,
        this.height = void 0,
        this.depth = void 0,
        this.width = void 0,
        this.maxFontSize = void 0,
        this.style = void 0,
        pl.call(this, e, a, s),
        this.children = t || []
    }
    setAttribute(e, t) {
        this.attributes[e] = t
    }
    hasClass(e) {
        return ee.contains(this.classes, e)
    }
    toNode() {
        return fl.call(this, "span")
    }
    toMarkup() {
        return vl.call(this, "span")
    }
}
class Ws {
    constructor(e, t, a, s) {
        this.children = void 0,
        this.attributes = void 0,
        this.classes = void 0,
        this.height = void 0,
        this.depth = void 0,
        this.maxFontSize = void 0,
        this.style = void 0,
        pl.call(this, t, s),
        this.children = a || [],
        this.setAttribute("href", e)
    }
    setAttribute(e, t) {
        this.attributes[e] = t
    }
    hasClass(e) {
        return ee.contains(this.classes, e)
    }
    toNode() {
        return fl.call(this, "a")
    }
    toMarkup() {
        return vl.call(this, "a")
    }
}
class b5 {
    constructor(e, t, a) {
        this.src = void 0,
        this.alt = void 0,
        this.classes = void 0,
        this.height = void 0,
        this.depth = void 0,
        this.maxFontSize = void 0,
        this.style = void 0,
        this.alt = t,
        this.src = e,
        this.classes = ["mord"],
        this.style = a
    }
    hasClass(e) {
        return ee.contains(this.classes, e)
    }
    toNode() {
        var e = document.createElement("img");
        e.src = this.src,
        e.alt = this.alt,
        e.className = "mord";
        for (var t in this.style)
            this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
        return e
    }
    toMarkup() {
        var e = '<img src="' + ee.escape(this.src) + '"' + (' alt="' + ee.escape(this.alt) + '"')
          , t = "";
        for (var a in this.style)
            this.style.hasOwnProperty(a) && (t += ee.hyphenate(a) + ":" + this.style[a] + ";");
        return t && (e += ' style="' + ee.escape(t) + '"'),
        e += "'/>",
        e
    }
}
var w5 = {
    î: "ı̂",
    ï: "ı̈",
    í: "ı́",
    ì: "ı̀"
};
class Lt {
    constructor(e, t, a, s, n, i, l, u) {
        this.text = void 0,
        this.height = void 0,
        this.depth = void 0,
        this.italic = void 0,
        this.skew = void 0,
        this.width = void 0,
        this.maxFontSize = void 0,
        this.classes = void 0,
        this.style = void 0,
        this.text = e,
        this.height = t || 0,
        this.depth = a || 0,
        this.italic = s || 0,
        this.skew = n || 0,
        this.width = i || 0,
        this.classes = l || [],
        this.style = u || {},
        this.maxFontSize = 0;
        var d = s5(this.text.charCodeAt(0));
        d && this.classes.push(d + "_fallback"),
        /[îïíì]/.test(this.text) && (this.text = w5[this.text])
    }
    hasClass(e) {
        return ee.contains(this.classes, e)
    }
    toNode() {
        var e = document.createTextNode(this.text)
          , t = null;
        this.italic > 0 && (t = document.createElement("span"),
        t.style.marginRight = H(this.italic)),
        this.classes.length > 0 && (t = t || document.createElement("span"),
        t.className = v0(this.classes));
        for (var a in this.style)
            this.style.hasOwnProperty(a) && (t = t || document.createElement("span"),
            t.style[a] = this.style[a]);
        return t ? (t.appendChild(e),
        t) : e
    }
    toMarkup() {
        var e = !1
          , t = "<span";
        this.classes.length && (e = !0,
        t += ' class="',
        t += ee.escape(v0(this.classes)),
        t += '"');
        var a = "";
        this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
        for (var s in this.style)
            this.style.hasOwnProperty(s) && (a += ee.hyphenate(s) + ":" + this.style[s] + ";");
        a && (e = !0,
        t += ' style="' + ee.escape(a) + '"');
        var n = ee.escape(this.text);
        return e ? (t += ">",
        t += n,
        t += "</span>",
        t) : n
    }
}
class s0 {
    constructor(e, t) {
        this.children = void 0,
        this.attributes = void 0,
        this.children = e || [],
        this.attributes = t || {}
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg"
          , t = document.createElementNS(e, "svg");
        for (var a in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
        for (var s = 0; s < this.children.length; s++)
            t.appendChild(this.children[s].toNode());
        return t
    }
    toMarkup() {
        var e = '<svg xmlns="http://www.w3.org/2000/svg"';
        for (var t in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
        e += ">";
        for (var a = 0; a < this.children.length; a++)
            e += this.children[a].toMarkup();
        return e += "</svg>",
        e
    }
}
class g0 {
    constructor(e, t) {
        this.pathName = void 0,
        this.alternate = void 0,
        this.pathName = e,
        this.alternate = t
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg"
          , t = document.createElementNS(e, "path");
        return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Jn[this.pathName]),
        t
    }
    toMarkup() {
        return this.alternate ? '<path d="' + ee.escape(this.alternate) + '"/>' : '<path d="' + ee.escape(Jn[this.pathName]) + '"/>'
    }
}
class ws {
    constructor(e) {
        this.attributes = void 0,
        this.attributes = e || {}
    }
    toNode() {
        var e = "http://www.w3.org/2000/svg"
          , t = document.createElementNS(e, "line");
        for (var a in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
        return t
    }
    toMarkup() {
        var e = "<line";
        for (var t in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ee.escape(this.attributes[t]) + '"');
        return e += "/>",
        e
    }
}
function ai(r) {
    if (r instanceof Lt)
        return r;
    throw new Error("Expected symbolNode but got " + String(r) + ".")
}
function x5(r) {
    if (r instanceof Ar)
        return r;
    throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".")
}
var k5 = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1
}
  , S5 = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1
}
  , Pe = {
    math: {},
    text: {}
};
function o(r, e, t, a, s, n) {
    Pe[r][s] = {
        font: e,
        group: t,
        replace: a
    },
    n && a && (Pe[r][a] = Pe[r][s])
}
var c = "math"
  , O = "text"
  , h = "main"
  , v = "ams"
  , Ge = "accent-token"
  , U = "bin"
  , vt = "close"
  , Y0 = "inner"
  , te = "mathord"
  , et = "op-token"
  , Tt = "open"
  , ya = "punct"
  , y = "rel"
  , o0 = "spacing"
  , x = "textord";
o(c, h, y, "≡", "\\equiv", !0);
o(c, h, y, "≺", "\\prec", !0);
o(c, h, y, "≻", "\\succ", !0);
o(c, h, y, "∼", "\\sim", !0);
o(c, h, y, "⊥", "\\perp");
o(c, h, y, "⪯", "\\preceq", !0);
o(c, h, y, "⪰", "\\succeq", !0);
o(c, h, y, "≃", "\\simeq", !0);
o(c, h, y, "∣", "\\mid", !0);
o(c, h, y, "≪", "\\ll", !0);
o(c, h, y, "≫", "\\gg", !0);
o(c, h, y, "≍", "\\asymp", !0);
o(c, h, y, "∥", "\\parallel");
o(c, h, y, "⋈", "\\bowtie", !0);
o(c, h, y, "⌣", "\\smile", !0);
o(c, h, y, "⊑", "\\sqsubseteq", !0);
o(c, h, y, "⊒", "\\sqsupseteq", !0);
o(c, h, y, "≐", "\\doteq", !0);
o(c, h, y, "⌢", "\\frown", !0);
o(c, h, y, "∋", "\\ni", !0);
o(c, h, y, "∝", "\\propto", !0);
o(c, h, y, "⊢", "\\vdash", !0);
o(c, h, y, "⊣", "\\dashv", !0);
o(c, h, y, "∋", "\\owns");
o(c, h, ya, ".", "\\ldotp");
o(c, h, ya, "⋅", "\\cdotp");
o(c, h, x, "#", "\\#");
o(O, h, x, "#", "\\#");
o(c, h, x, "&", "\\&");
o(O, h, x, "&", "\\&");
o(c, h, x, "ℵ", "\\aleph", !0);
o(c, h, x, "∀", "\\forall", !0);
o(c, h, x, "ℏ", "\\hbar", !0);
o(c, h, x, "∃", "\\exists", !0);
o(c, h, x, "∇", "\\nabla", !0);
o(c, h, x, "♭", "\\flat", !0);
o(c, h, x, "ℓ", "\\ell", !0);
o(c, h, x, "♮", "\\natural", !0);
o(c, h, x, "♣", "\\clubsuit", !0);
o(c, h, x, "℘", "\\wp", !0);
o(c, h, x, "♯", "\\sharp", !0);
o(c, h, x, "♢", "\\diamondsuit", !0);
o(c, h, x, "ℜ", "\\Re", !0);
o(c, h, x, "♡", "\\heartsuit", !0);
o(c, h, x, "ℑ", "\\Im", !0);
o(c, h, x, "♠", "\\spadesuit", !0);
o(c, h, x, "§", "\\S", !0);
o(O, h, x, "§", "\\S");
o(c, h, x, "¶", "\\P", !0);
o(O, h, x, "¶", "\\P");
o(c, h, x, "†", "\\dag");
o(O, h, x, "†", "\\dag");
o(O, h, x, "†", "\\textdagger");
o(c, h, x, "‡", "\\ddag");
o(O, h, x, "‡", "\\ddag");
o(O, h, x, "‡", "\\textdaggerdbl");
o(c, h, vt, "⎱", "\\rmoustache", !0);
o(c, h, Tt, "⎰", "\\lmoustache", !0);
o(c, h, vt, "⟯", "\\rgroup", !0);
o(c, h, Tt, "⟮", "\\lgroup", !0);
o(c, h, U, "∓", "\\mp", !0);
o(c, h, U, "⊖", "\\ominus", !0);
o(c, h, U, "⊎", "\\uplus", !0);
o(c, h, U, "⊓", "\\sqcap", !0);
o(c, h, U, "∗", "\\ast");
o(c, h, U, "⊔", "\\sqcup", !0);
o(c, h, U, "◯", "\\bigcirc", !0);
o(c, h, U, "∙", "\\bullet", !0);
o(c, h, U, "‡", "\\ddagger");
o(c, h, U, "≀", "\\wr", !0);
o(c, h, U, "⨿", "\\amalg");
o(c, h, U, "&", "\\And");
o(c, h, y, "⟵", "\\longleftarrow", !0);
o(c, h, y, "⇐", "\\Leftarrow", !0);
o(c, h, y, "⟸", "\\Longleftarrow", !0);
o(c, h, y, "⟶", "\\longrightarrow", !0);
o(c, h, y, "⇒", "\\Rightarrow", !0);
o(c, h, y, "⟹", "\\Longrightarrow", !0);
o(c, h, y, "↔", "\\leftrightarrow", !0);
o(c, h, y, "⟷", "\\longleftrightarrow", !0);
o(c, h, y, "⇔", "\\Leftrightarrow", !0);
o(c, h, y, "⟺", "\\Longleftrightarrow", !0);
o(c, h, y, "↦", "\\mapsto", !0);
o(c, h, y, "⟼", "\\longmapsto", !0);
o(c, h, y, "↗", "\\nearrow", !0);
o(c, h, y, "↩", "\\hookleftarrow", !0);
o(c, h, y, "↪", "\\hookrightarrow", !0);
o(c, h, y, "↘", "\\searrow", !0);
o(c, h, y, "↼", "\\leftharpoonup", !0);
o(c, h, y, "⇀", "\\rightharpoonup", !0);
o(c, h, y, "↙", "\\swarrow", !0);
o(c, h, y, "↽", "\\leftharpoondown", !0);
o(c, h, y, "⇁", "\\rightharpoondown", !0);
o(c, h, y, "↖", "\\nwarrow", !0);
o(c, h, y, "⇌", "\\rightleftharpoons", !0);
o(c, v, y, "≮", "\\nless", !0);
o(c, v, y, "", "\\@nleqslant");
o(c, v, y, "", "\\@nleqq");
o(c, v, y, "⪇", "\\lneq", !0);
o(c, v, y, "≨", "\\lneqq", !0);
o(c, v, y, "", "\\@lvertneqq");
o(c, v, y, "⋦", "\\lnsim", !0);
o(c, v, y, "⪉", "\\lnapprox", !0);
o(c, v, y, "⊀", "\\nprec", !0);
o(c, v, y, "⋠", "\\npreceq", !0);
o(c, v, y, "⋨", "\\precnsim", !0);
o(c, v, y, "⪹", "\\precnapprox", !0);
o(c, v, y, "≁", "\\nsim", !0);
o(c, v, y, "", "\\@nshortmid");
o(c, v, y, "∤", "\\nmid", !0);
o(c, v, y, "⊬", "\\nvdash", !0);
o(c, v, y, "⊭", "\\nvDash", !0);
o(c, v, y, "⋪", "\\ntriangleleft");
o(c, v, y, "⋬", "\\ntrianglelefteq", !0);
o(c, v, y, "⊊", "\\subsetneq", !0);
o(c, v, y, "", "\\@varsubsetneq");
o(c, v, y, "⫋", "\\subsetneqq", !0);
o(c, v, y, "", "\\@varsubsetneqq");
o(c, v, y, "≯", "\\ngtr", !0);
o(c, v, y, "", "\\@ngeqslant");
o(c, v, y, "", "\\@ngeqq");
o(c, v, y, "⪈", "\\gneq", !0);
o(c, v, y, "≩", "\\gneqq", !0);
o(c, v, y, "", "\\@gvertneqq");
o(c, v, y, "⋧", "\\gnsim", !0);
o(c, v, y, "⪊", "\\gnapprox", !0);
o(c, v, y, "⊁", "\\nsucc", !0);
o(c, v, y, "⋡", "\\nsucceq", !0);
o(c, v, y, "⋩", "\\succnsim", !0);
o(c, v, y, "⪺", "\\succnapprox", !0);
o(c, v, y, "≆", "\\ncong", !0);
o(c, v, y, "", "\\@nshortparallel");
o(c, v, y, "∦", "\\nparallel", !0);
o(c, v, y, "⊯", "\\nVDash", !0);
o(c, v, y, "⋫", "\\ntriangleright");
o(c, v, y, "⋭", "\\ntrianglerighteq", !0);
o(c, v, y, "", "\\@nsupseteqq");
o(c, v, y, "⊋", "\\supsetneq", !0);
o(c, v, y, "", "\\@varsupsetneq");
o(c, v, y, "⫌", "\\supsetneqq", !0);
o(c, v, y, "", "\\@varsupsetneqq");
o(c, v, y, "⊮", "\\nVdash", !0);
o(c, v, y, "⪵", "\\precneqq", !0);
o(c, v, y, "⪶", "\\succneqq", !0);
o(c, v, y, "", "\\@nsubseteqq");
o(c, v, U, "⊴", "\\unlhd");
o(c, v, U, "⊵", "\\unrhd");
o(c, v, y, "↚", "\\nleftarrow", !0);
o(c, v, y, "↛", "\\nrightarrow", !0);
o(c, v, y, "⇍", "\\nLeftarrow", !0);
o(c, v, y, "⇏", "\\nRightarrow", !0);
o(c, v, y, "↮", "\\nleftrightarrow", !0);
o(c, v, y, "⇎", "\\nLeftrightarrow", !0);
o(c, v, y, "△", "\\vartriangle");
o(c, v, x, "ℏ", "\\hslash");
o(c, v, x, "▽", "\\triangledown");
o(c, v, x, "◊", "\\lozenge");
o(c, v, x, "Ⓢ", "\\circledS");
o(c, v, x, "®", "\\circledR");
o(O, v, x, "®", "\\circledR");
o(c, v, x, "∡", "\\measuredangle", !0);
o(c, v, x, "∄", "\\nexists");
o(c, v, x, "℧", "\\mho");
o(c, v, x, "Ⅎ", "\\Finv", !0);
o(c, v, x, "⅁", "\\Game", !0);
o(c, v, x, "‵", "\\backprime");
o(c, v, x, "▲", "\\blacktriangle");
o(c, v, x, "▼", "\\blacktriangledown");
o(c, v, x, "■", "\\blacksquare");
o(c, v, x, "⧫", "\\blacklozenge");
o(c, v, x, "★", "\\bigstar");
o(c, v, x, "∢", "\\sphericalangle", !0);
o(c, v, x, "∁", "\\complement", !0);
o(c, v, x, "ð", "\\eth", !0);
o(O, h, x, "ð", "ð");
o(c, v, x, "╱", "\\diagup");
o(c, v, x, "╲", "\\diagdown");
o(c, v, x, "□", "\\square");
o(c, v, x, "□", "\\Box");
o(c, v, x, "◊", "\\Diamond");
o(c, v, x, "¥", "\\yen", !0);
o(O, v, x, "¥", "\\yen", !0);
o(c, v, x, "✓", "\\checkmark", !0);
o(O, v, x, "✓", "\\checkmark");
o(c, v, x, "ℶ", "\\beth", !0);
o(c, v, x, "ℸ", "\\daleth", !0);
o(c, v, x, "ℷ", "\\gimel", !0);
o(c, v, x, "ϝ", "\\digamma", !0);
o(c, v, x, "ϰ", "\\varkappa");
o(c, v, Tt, "┌", "\\@ulcorner", !0);
o(c, v, vt, "┐", "\\@urcorner", !0);
o(c, v, Tt, "└", "\\@llcorner", !0);
o(c, v, vt, "┘", "\\@lrcorner", !0);
o(c, v, y, "≦", "\\leqq", !0);
o(c, v, y, "⩽", "\\leqslant", !0);
o(c, v, y, "⪕", "\\eqslantless", !0);
o(c, v, y, "≲", "\\lesssim", !0);
o(c, v, y, "⪅", "\\lessapprox", !0);
o(c, v, y, "≊", "\\approxeq", !0);
o(c, v, U, "⋖", "\\lessdot");
o(c, v, y, "⋘", "\\lll", !0);
o(c, v, y, "≶", "\\lessgtr", !0);
o(c, v, y, "⋚", "\\lesseqgtr", !0);
o(c, v, y, "⪋", "\\lesseqqgtr", !0);
o(c, v, y, "≑", "\\doteqdot");
o(c, v, y, "≓", "\\risingdotseq", !0);
o(c, v, y, "≒", "\\fallingdotseq", !0);
o(c, v, y, "∽", "\\backsim", !0);
o(c, v, y, "⋍", "\\backsimeq", !0);
o(c, v, y, "⫅", "\\subseteqq", !0);
o(c, v, y, "⋐", "\\Subset", !0);
o(c, v, y, "⊏", "\\sqsubset", !0);
o(c, v, y, "≼", "\\preccurlyeq", !0);
o(c, v, y, "⋞", "\\curlyeqprec", !0);
o(c, v, y, "≾", "\\precsim", !0);
o(c, v, y, "⪷", "\\precapprox", !0);
o(c, v, y, "⊲", "\\vartriangleleft");
o(c, v, y, "⊴", "\\trianglelefteq");
o(c, v, y, "⊨", "\\vDash", !0);
o(c, v, y, "⊪", "\\Vvdash", !0);
o(c, v, y, "⌣", "\\smallsmile");
o(c, v, y, "⌢", "\\smallfrown");
o(c, v, y, "≏", "\\bumpeq", !0);
o(c, v, y, "≎", "\\Bumpeq", !0);
o(c, v, y, "≧", "\\geqq", !0);
o(c, v, y, "⩾", "\\geqslant", !0);
o(c, v, y, "⪖", "\\eqslantgtr", !0);
o(c, v, y, "≳", "\\gtrsim", !0);
o(c, v, y, "⪆", "\\gtrapprox", !0);
o(c, v, U, "⋗", "\\gtrdot");
o(c, v, y, "⋙", "\\ggg", !0);
o(c, v, y, "≷", "\\gtrless", !0);
o(c, v, y, "⋛", "\\gtreqless", !0);
o(c, v, y, "⪌", "\\gtreqqless", !0);
o(c, v, y, "≖", "\\eqcirc", !0);
o(c, v, y, "≗", "\\circeq", !0);
o(c, v, y, "≜", "\\triangleq", !0);
o(c, v, y, "∼", "\\thicksim");
o(c, v, y, "≈", "\\thickapprox");
o(c, v, y, "⫆", "\\supseteqq", !0);
o(c, v, y, "⋑", "\\Supset", !0);
o(c, v, y, "⊐", "\\sqsupset", !0);
o(c, v, y, "≽", "\\succcurlyeq", !0);
o(c, v, y, "⋟", "\\curlyeqsucc", !0);
o(c, v, y, "≿", "\\succsim", !0);
o(c, v, y, "⪸", "\\succapprox", !0);
o(c, v, y, "⊳", "\\vartriangleright");
o(c, v, y, "⊵", "\\trianglerighteq");
o(c, v, y, "⊩", "\\Vdash", !0);
o(c, v, y, "∣", "\\shortmid");
o(c, v, y, "∥", "\\shortparallel");
o(c, v, y, "≬", "\\between", !0);
o(c, v, y, "⋔", "\\pitchfork", !0);
o(c, v, y, "∝", "\\varpropto");
o(c, v, y, "◀", "\\blacktriangleleft");
o(c, v, y, "∴", "\\therefore", !0);
o(c, v, y, "∍", "\\backepsilon");
o(c, v, y, "▶", "\\blacktriangleright");
o(c, v, y, "∵", "\\because", !0);
o(c, v, y, "⋘", "\\llless");
o(c, v, y, "⋙", "\\gggtr");
o(c, v, U, "⊲", "\\lhd");
o(c, v, U, "⊳", "\\rhd");
o(c, v, y, "≂", "\\eqsim", !0);
o(c, h, y, "⋈", "\\Join");
o(c, v, y, "≑", "\\Doteq", !0);
o(c, v, U, "∔", "\\dotplus", !0);
o(c, v, U, "∖", "\\smallsetminus");
o(c, v, U, "⋒", "\\Cap", !0);
o(c, v, U, "⋓", "\\Cup", !0);
o(c, v, U, "⩞", "\\doublebarwedge", !0);
o(c, v, U, "⊟", "\\boxminus", !0);
o(c, v, U, "⊞", "\\boxplus", !0);
o(c, v, U, "⋇", "\\divideontimes", !0);
o(c, v, U, "⋉", "\\ltimes", !0);
o(c, v, U, "⋊", "\\rtimes", !0);
o(c, v, U, "⋋", "\\leftthreetimes", !0);
o(c, v, U, "⋌", "\\rightthreetimes", !0);
o(c, v, U, "⋏", "\\curlywedge", !0);
o(c, v, U, "⋎", "\\curlyvee", !0);
o(c, v, U, "⊝", "\\circleddash", !0);
o(c, v, U, "⊛", "\\circledast", !0);
o(c, v, U, "⋅", "\\centerdot");
o(c, v, U, "⊺", "\\intercal", !0);
o(c, v, U, "⋒", "\\doublecap");
o(c, v, U, "⋓", "\\doublecup");
o(c, v, U, "⊠", "\\boxtimes", !0);
o(c, v, y, "⇢", "\\dashrightarrow", !0);
o(c, v, y, "⇠", "\\dashleftarrow", !0);
o(c, v, y, "⇇", "\\leftleftarrows", !0);
o(c, v, y, "⇆", "\\leftrightarrows", !0);
o(c, v, y, "⇚", "\\Lleftarrow", !0);
o(c, v, y, "↞", "\\twoheadleftarrow", !0);
o(c, v, y, "↢", "\\leftarrowtail", !0);
o(c, v, y, "↫", "\\looparrowleft", !0);
o(c, v, y, "⇋", "\\leftrightharpoons", !0);
o(c, v, y, "↶", "\\curvearrowleft", !0);
o(c, v, y, "↺", "\\circlearrowleft", !0);
o(c, v, y, "↰", "\\Lsh", !0);
o(c, v, y, "⇈", "\\upuparrows", !0);
o(c, v, y, "↿", "\\upharpoonleft", !0);
o(c, v, y, "⇃", "\\downharpoonleft", !0);
o(c, h, y, "⊶", "\\origof", !0);
o(c, h, y, "⊷", "\\imageof", !0);
o(c, v, y, "⊸", "\\multimap", !0);
o(c, v, y, "↭", "\\leftrightsquigarrow", !0);
o(c, v, y, "⇉", "\\rightrightarrows", !0);
o(c, v, y, "⇄", "\\rightleftarrows", !0);
o(c, v, y, "↠", "\\twoheadrightarrow", !0);
o(c, v, y, "↣", "\\rightarrowtail", !0);
o(c, v, y, "↬", "\\looparrowright", !0);
o(c, v, y, "↷", "\\curvearrowright", !0);
o(c, v, y, "↻", "\\circlearrowright", !0);
o(c, v, y, "↱", "\\Rsh", !0);
o(c, v, y, "⇊", "\\downdownarrows", !0);
o(c, v, y, "↾", "\\upharpoonright", !0);
o(c, v, y, "⇂", "\\downharpoonright", !0);
o(c, v, y, "⇝", "\\rightsquigarrow", !0);
o(c, v, y, "⇝", "\\leadsto");
o(c, v, y, "⇛", "\\Rrightarrow", !0);
o(c, v, y, "↾", "\\restriction");
o(c, h, x, "‘", "`");
o(c, h, x, "$", "\\$");
o(O, h, x, "$", "\\$");
o(O, h, x, "$", "\\textdollar");
o(c, h, x, "%", "\\%");
o(O, h, x, "%", "\\%");
o(c, h, x, "_", "\\_");
o(O, h, x, "_", "\\_");
o(O, h, x, "_", "\\textunderscore");
o(c, h, x, "∠", "\\angle", !0);
o(c, h, x, "∞", "\\infty", !0);
o(c, h, x, "′", "\\prime");
o(c, h, x, "△", "\\triangle");
o(c, h, x, "Γ", "\\Gamma", !0);
o(c, h, x, "Δ", "\\Delta", !0);
o(c, h, x, "Θ", "\\Theta", !0);
o(c, h, x, "Λ", "\\Lambda", !0);
o(c, h, x, "Ξ", "\\Xi", !0);
o(c, h, x, "Π", "\\Pi", !0);
o(c, h, x, "Σ", "\\Sigma", !0);
o(c, h, x, "Υ", "\\Upsilon", !0);
o(c, h, x, "Φ", "\\Phi", !0);
o(c, h, x, "Ψ", "\\Psi", !0);
o(c, h, x, "Ω", "\\Omega", !0);
o(c, h, x, "A", "Α");
o(c, h, x, "B", "Β");
o(c, h, x, "E", "Ε");
o(c, h, x, "Z", "Ζ");
o(c, h, x, "H", "Η");
o(c, h, x, "I", "Ι");
o(c, h, x, "K", "Κ");
o(c, h, x, "M", "Μ");
o(c, h, x, "N", "Ν");
o(c, h, x, "O", "Ο");
o(c, h, x, "P", "Ρ");
o(c, h, x, "T", "Τ");
o(c, h, x, "X", "Χ");
o(c, h, x, "¬", "\\neg", !0);
o(c, h, x, "¬", "\\lnot");
o(c, h, x, "⊤", "\\top");
o(c, h, x, "⊥", "\\bot");
o(c, h, x, "∅", "\\emptyset");
o(c, v, x, "∅", "\\varnothing");
o(c, h, te, "α", "\\alpha", !0);
o(c, h, te, "β", "\\beta", !0);
o(c, h, te, "γ", "\\gamma", !0);
o(c, h, te, "δ", "\\delta", !0);
o(c, h, te, "ϵ", "\\epsilon", !0);
o(c, h, te, "ζ", "\\zeta", !0);
o(c, h, te, "η", "\\eta", !0);
o(c, h, te, "θ", "\\theta", !0);
o(c, h, te, "ι", "\\iota", !0);
o(c, h, te, "κ", "\\kappa", !0);
o(c, h, te, "λ", "\\lambda", !0);
o(c, h, te, "μ", "\\mu", !0);
o(c, h, te, "ν", "\\nu", !0);
o(c, h, te, "ξ", "\\xi", !0);
o(c, h, te, "ο", "\\omicron", !0);
o(c, h, te, "π", "\\pi", !0);
o(c, h, te, "ρ", "\\rho", !0);
o(c, h, te, "σ", "\\sigma", !0);
o(c, h, te, "τ", "\\tau", !0);
o(c, h, te, "υ", "\\upsilon", !0);
o(c, h, te, "ϕ", "\\phi", !0);
o(c, h, te, "χ", "\\chi", !0);
o(c, h, te, "ψ", "\\psi", !0);
o(c, h, te, "ω", "\\omega", !0);
o(c, h, te, "ε", "\\varepsilon", !0);
o(c, h, te, "ϑ", "\\vartheta", !0);
o(c, h, te, "ϖ", "\\varpi", !0);
o(c, h, te, "ϱ", "\\varrho", !0);
o(c, h, te, "ς", "\\varsigma", !0);
o(c, h, te, "φ", "\\varphi", !0);
o(c, h, U, "∗", "*", !0);
o(c, h, U, "+", "+");
o(c, h, U, "−", "-", !0);
o(c, h, U, "⋅", "\\cdot", !0);
o(c, h, U, "∘", "\\circ", !0);
o(c, h, U, "÷", "\\div", !0);
o(c, h, U, "±", "\\pm", !0);
o(c, h, U, "×", "\\times", !0);
o(c, h, U, "∩", "\\cap", !0);
o(c, h, U, "∪", "\\cup", !0);
o(c, h, U, "∖", "\\setminus", !0);
o(c, h, U, "∧", "\\land");
o(c, h, U, "∨", "\\lor");
o(c, h, U, "∧", "\\wedge", !0);
o(c, h, U, "∨", "\\vee", !0);
o(c, h, x, "√", "\\surd");
o(c, h, Tt, "⟨", "\\langle", !0);
o(c, h, Tt, "∣", "\\lvert");
o(c, h, Tt, "∥", "\\lVert");
o(c, h, vt, "?", "?");
o(c, h, vt, "!", "!");
o(c, h, vt, "⟩", "\\rangle", !0);
o(c, h, vt, "∣", "\\rvert");
o(c, h, vt, "∥", "\\rVert");
o(c, h, y, "=", "=");
o(c, h, y, ":", ":");
o(c, h, y, "≈", "\\approx", !0);
o(c, h, y, "≅", "\\cong", !0);
o(c, h, y, "≥", "\\ge");
o(c, h, y, "≥", "\\geq", !0);
o(c, h, y, "←", "\\gets");
o(c, h, y, ">", "\\gt", !0);
o(c, h, y, "∈", "\\in", !0);
o(c, h, y, "", "\\@not");
o(c, h, y, "⊂", "\\subset", !0);
o(c, h, y, "⊃", "\\supset", !0);
o(c, h, y, "⊆", "\\subseteq", !0);
o(c, h, y, "⊇", "\\supseteq", !0);
o(c, v, y, "⊈", "\\nsubseteq", !0);
o(c, v, y, "⊉", "\\nsupseteq", !0);
o(c, h, y, "⊨", "\\models");
o(c, h, y, "←", "\\leftarrow", !0);
o(c, h, y, "≤", "\\le");
o(c, h, y, "≤", "\\leq", !0);
o(c, h, y, "<", "\\lt", !0);
o(c, h, y, "→", "\\rightarrow", !0);
o(c, h, y, "→", "\\to");
o(c, v, y, "≱", "\\ngeq", !0);
o(c, v, y, "≰", "\\nleq", !0);
o(c, h, o0, " ", "\\ ");
o(c, h, o0, " ", "\\space");
o(c, h, o0, " ", "\\nobreakspace");
o(O, h, o0, " ", "\\ ");
o(O, h, o0, " ", " ");
o(O, h, o0, " ", "\\space");
o(O, h, o0, " ", "\\nobreakspace");
o(c, h, o0, null, "\\nobreak");
o(c, h, o0, null, "\\allowbreak");
o(c, h, ya, ",", ",");
o(c, h, ya, ";", ";");
o(c, v, U, "⊼", "\\barwedge", !0);
o(c, v, U, "⊻", "\\veebar", !0);
o(c, h, U, "⊙", "\\odot", !0);
o(c, h, U, "⊕", "\\oplus", !0);
o(c, h, U, "⊗", "\\otimes", !0);
o(c, h, x, "∂", "\\partial", !0);
o(c, h, U, "⊘", "\\oslash", !0);
o(c, v, U, "⊚", "\\circledcirc", !0);
o(c, v, U, "⊡", "\\boxdot", !0);
o(c, h, U, "△", "\\bigtriangleup");
o(c, h, U, "▽", "\\bigtriangledown");
o(c, h, U, "†", "\\dagger");
o(c, h, U, "⋄", "\\diamond");
o(c, h, U, "⋆", "\\star");
o(c, h, U, "◃", "\\triangleleft");
o(c, h, U, "▹", "\\triangleright");
o(c, h, Tt, "{", "\\{");
o(O, h, x, "{", "\\{");
o(O, h, x, "{", "\\textbraceleft");
o(c, h, vt, "}", "\\}");
o(O, h, x, "}", "\\}");
o(O, h, x, "}", "\\textbraceright");
o(c, h, Tt, "{", "\\lbrace");
o(c, h, vt, "}", "\\rbrace");
o(c, h, Tt, "[", "\\lbrack", !0);
o(O, h, x, "[", "\\lbrack", !0);
o(c, h, vt, "]", "\\rbrack", !0);
o(O, h, x, "]", "\\rbrack", !0);
o(c, h, Tt, "(", "\\lparen", !0);
o(c, h, vt, ")", "\\rparen", !0);
o(O, h, x, "<", "\\textless", !0);
o(O, h, x, ">", "\\textgreater", !0);
o(c, h, Tt, "⌊", "\\lfloor", !0);
o(c, h, vt, "⌋", "\\rfloor", !0);
o(c, h, Tt, "⌈", "\\lceil", !0);
o(c, h, vt, "⌉", "\\rceil", !0);
o(c, h, x, "\\", "\\backslash");
o(c, h, x, "∣", "|");
o(c, h, x, "∣", "\\vert");
o(O, h, x, "|", "\\textbar", !0);
o(c, h, x, "∥", "\\|");
o(c, h, x, "∥", "\\Vert");
o(O, h, x, "∥", "\\textbardbl");
o(O, h, x, "~", "\\textasciitilde");
o(O, h, x, "\\", "\\textbackslash");
o(O, h, x, "^", "\\textasciicircum");
o(c, h, y, "↑", "\\uparrow", !0);
o(c, h, y, "⇑", "\\Uparrow", !0);
o(c, h, y, "↓", "\\downarrow", !0);
o(c, h, y, "⇓", "\\Downarrow", !0);
o(c, h, y, "↕", "\\updownarrow", !0);
o(c, h, y, "⇕", "\\Updownarrow", !0);
o(c, h, et, "∐", "\\coprod");
o(c, h, et, "⋁", "\\bigvee");
o(c, h, et, "⋀", "\\bigwedge");
o(c, h, et, "⨄", "\\biguplus");
o(c, h, et, "⋂", "\\bigcap");
o(c, h, et, "⋃", "\\bigcup");
o(c, h, et, "∫", "\\int");
o(c, h, et, "∫", "\\intop");
o(c, h, et, "∬", "\\iint");
o(c, h, et, "∭", "\\iiint");
o(c, h, et, "∏", "\\prod");
o(c, h, et, "∑", "\\sum");
o(c, h, et, "⨂", "\\bigotimes");
o(c, h, et, "⨁", "\\bigoplus");
o(c, h, et, "⨀", "\\bigodot");
o(c, h, et, "∮", "\\oint");
o(c, h, et, "∯", "\\oiint");
o(c, h, et, "∰", "\\oiiint");
o(c, h, et, "⨆", "\\bigsqcup");
o(c, h, et, "∫", "\\smallint");
o(O, h, Y0, "…", "\\textellipsis");
o(c, h, Y0, "…", "\\mathellipsis");
o(O, h, Y0, "…", "\\ldots", !0);
o(c, h, Y0, "…", "\\ldots", !0);
o(c, h, Y0, "⋯", "\\@cdots", !0);
o(c, h, Y0, "⋱", "\\ddots", !0);
o(c, h, x, "⋮", "\\varvdots");
o(O, h, x, "⋮", "\\varvdots");
o(c, h, Ge, "ˊ", "\\acute");
o(c, h, Ge, "ˋ", "\\grave");
o(c, h, Ge, "¨", "\\ddot");
o(c, h, Ge, "~", "\\tilde");
o(c, h, Ge, "ˉ", "\\bar");
o(c, h, Ge, "˘", "\\breve");
o(c, h, Ge, "ˇ", "\\check");
o(c, h, Ge, "^", "\\hat");
o(c, h, Ge, "⃗", "\\vec");
o(c, h, Ge, "˙", "\\dot");
o(c, h, Ge, "˚", "\\mathring");
o(c, h, te, "", "\\@imath");
o(c, h, te, "", "\\@jmath");
o(c, h, x, "ı", "ı");
o(c, h, x, "ȷ", "ȷ");
o(O, h, x, "ı", "\\i", !0);
o(O, h, x, "ȷ", "\\j", !0);
o(O, h, x, "ß", "\\ss", !0);
o(O, h, x, "æ", "\\ae", !0);
o(O, h, x, "œ", "\\oe", !0);
o(O, h, x, "ø", "\\o", !0);
o(O, h, x, "Æ", "\\AE", !0);
o(O, h, x, "Œ", "\\OE", !0);
o(O, h, x, "Ø", "\\O", !0);
o(O, h, Ge, "ˊ", "\\'");
o(O, h, Ge, "ˋ", "\\`");
o(O, h, Ge, "ˆ", "\\^");
o(O, h, Ge, "˜", "\\~");
o(O, h, Ge, "ˉ", "\\=");
o(O, h, Ge, "˘", "\\u");
o(O, h, Ge, "˙", "\\.");
o(O, h, Ge, "¸", "\\c");
o(O, h, Ge, "˚", "\\r");
o(O, h, Ge, "ˇ", "\\v");
o(O, h, Ge, "¨", '\\"');
o(O, h, Ge, "˝", "\\H");
o(O, h, Ge, "◯", "\\textcircled");
var gl = {
    "--": !0,
    "---": !0,
    "``": !0,
    "''": !0
};
o(O, h, x, "–", "--", !0);
o(O, h, x, "–", "\\textendash");
o(O, h, x, "—", "---", !0);
o(O, h, x, "—", "\\textemdash");
o(O, h, x, "‘", "`", !0);
o(O, h, x, "‘", "\\textquoteleft");
o(O, h, x, "’", "'", !0);
o(O, h, x, "’", "\\textquoteright");
o(O, h, x, "“", "``", !0);
o(O, h, x, "“", "\\textquotedblleft");
o(O, h, x, "”", "''", !0);
o(O, h, x, "”", "\\textquotedblright");
o(c, h, x, "°", "\\degree", !0);
o(O, h, x, "°", "\\degree");
o(O, h, x, "°", "\\textdegree", !0);
o(c, h, x, "£", "\\pounds");
o(c, h, x, "£", "\\mathsterling", !0);
o(O, h, x, "£", "\\pounds");
o(O, h, x, "£", "\\textsterling", !0);
o(c, v, x, "✠", "\\maltese");
o(O, v, x, "✠", "\\maltese");
var si = '0123456789/@."';
for (var Ba = 0; Ba < si.length; Ba++) {
    var ni = si.charAt(Ba);
    o(c, h, x, ni, ni)
}
var ii = '0123456789!@*()-=+";:?/.,';
for (var za = 0; za < ii.length; za++) {
    var oi = ii.charAt(za);
    o(O, h, x, oi, oi)
}
var aa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var La = 0; La < aa.length; La++) {
    var Cr = aa.charAt(La);
    o(c, h, te, Cr, Cr),
    o(O, h, x, Cr, Cr)
}
o(c, v, x, "C", "ℂ");
o(O, v, x, "C", "ℂ");
o(c, v, x, "H", "ℍ");
o(O, v, x, "H", "ℍ");
o(c, v, x, "N", "ℕ");
o(O, v, x, "N", "ℕ");
o(c, v, x, "P", "ℙ");
o(O, v, x, "P", "ℙ");
o(c, v, x, "Q", "ℚ");
o(O, v, x, "Q", "ℚ");
o(c, v, x, "R", "ℝ");
o(O, v, x, "R", "ℝ");
o(c, v, x, "Z", "ℤ");
o(O, v, x, "Z", "ℤ");
o(c, h, te, "h", "ℎ");
o(O, h, te, "h", "ℎ");
var ie = "";
for (var mt = 0; mt < aa.length; mt++) {
    var We = aa.charAt(mt);
    ie = String.fromCharCode(55349, 56320 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56372 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56424 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56580 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56684 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56736 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56788 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56840 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56944 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    mt < 26 && (ie = String.fromCharCode(55349, 56632 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie),
    ie = String.fromCharCode(55349, 56476 + mt),
    o(c, h, te, We, ie),
    o(O, h, x, We, ie))
}
ie = "𝕜";
o(c, h, te, "k", ie);
o(O, h, x, "k", ie);
for (var x0 = 0; x0 < 10; x0++) {
    var h0 = x0.toString();
    ie = String.fromCharCode(55349, 57294 + x0),
    o(c, h, te, h0, ie),
    o(O, h, x, h0, ie),
    ie = String.fromCharCode(55349, 57314 + x0),
    o(c, h, te, h0, ie),
    o(O, h, x, h0, ie),
    ie = String.fromCharCode(55349, 57324 + x0),
    o(c, h, te, h0, ie),
    o(O, h, x, h0, ie),
    ie = String.fromCharCode(55349, 57334 + x0),
    o(c, h, te, h0, ie),
    o(O, h, x, h0, ie)
}
var xs = "ÐÞþ";
for (var Oa = 0; Oa < xs.length; Oa++) {
    var Rr = xs.charAt(Oa);
    o(c, h, te, Rr, Rr),
    o(O, h, x, Rr, Rr)
}
var Er = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]]
  , li = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]]
  , T5 = function(e, t) {
    var a = e.charCodeAt(0)
      , s = e.charCodeAt(1)
      , n = (a - 55296) * 1024 + (s - 56320) + 65536
      , i = t === "math" ? 0 : 1;
    if (119808 <= n && n < 120484) {
        var l = Math.floor((n - 119808) / 26);
        return [Er[l][2], Er[l][i]]
    } else if (120782 <= n && n <= 120831) {
        var u = Math.floor((n - 120782) / 10);
        return [li[u][2], li[u][i]]
    } else {
        if (n === 120485 || n === 120486)
            return [Er[0][2], Er[0][i]];
        if (120486 < n && n < 120782)
            return ["", ""];
        throw new $("Unsupported character: " + e)
    }
}
  , Aa = function(e, t, a) {
    return Pe[a][e] && Pe[a][e].replace && (e = Pe[a][e].replace),
    {
        value: e,
        metrics: js(e, t, a)
    }
}
  , Ft = function(e, t, a, s, n) {
    var i = Aa(e, t, a)
      , l = i.metrics;
    e = i.value;
    var u;
    if (l) {
        var d = l.italic;
        (a === "text" || s && s.font === "mathit") && (d = 0),
        u = new Lt(e,l.height,l.depth,d,l.skew,l.width,n)
    } else
        typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")),
        u = new Lt(e,0,0,0,0,0,n);
    if (s) {
        u.maxFontSize = s.sizeMultiplier,
        s.style.isTight() && u.classes.push("mtight");
        var m = s.getColor();
        m && (u.style.color = m)
    }
    return u
}
  , M5 = function(e, t, a, s) {
    return s === void 0 && (s = []),
    a.font === "boldsymbol" && Aa(e, "Main-Bold", t).metrics ? Ft(e, "Main-Bold", t, a, s.concat(["mathbf"])) : e === "\\" || Pe[t][e].font === "main" ? Ft(e, "Main-Regular", t, a, s) : Ft(e, "AMS-Regular", t, a, s.concat(["amsrm"]))
}
  , I5 = function(e, t, a, s, n) {
    return n !== "textord" && Aa(e, "Math-BoldItalic", t).metrics ? {
        fontName: "Math-BoldItalic",
        fontClass: "boldsymbol"
    } : {
        fontName: "Main-Bold",
        fontClass: "mathbf"
    }
}
  , C5 = function(e, t, a) {
    var s = e.mode
      , n = e.text
      , i = ["mord"]
      , l = s === "math" || s === "text" && t.font
      , u = l ? t.font : t.fontFamily
      , d = ""
      , m = "";
    if (n.charCodeAt(0) === 55349 && ([d,m] = T5(n, s)),
    d.length > 0)
        return Ft(n, d, s, t, i.concat(m));
    if (u) {
        var f, b;
        if (u === "boldsymbol") {
            var g = I5(n, s, t, i, a);
            f = g.fontName,
            b = [g.fontClass]
        } else
            l ? (f = bl[u].fontName,
            b = [u]) : (f = Br(u, t.fontWeight, t.fontShape),
            b = [u, t.fontWeight, t.fontShape]);
        if (Aa(n, f, s).metrics)
            return Ft(n, f, s, t, i.concat(b));
        if (gl.hasOwnProperty(n) && f.slice(0, 10) === "Typewriter") {
            for (var w = [], M = 0; M < n.length; M++)
                w.push(Ft(n[M], f, s, t, i.concat(b)));
            return Al(w)
        }
    }
    if (a === "mathord")
        return Ft(n, "Math-Italic", s, t, i.concat(["mathnormal"]));
    if (a === "textord") {
        var E = Pe[s][n] && Pe[s][n].font;
        if (E === "ams") {
            var R = Br("amsrm", t.fontWeight, t.fontShape);
            return Ft(n, R, s, t, i.concat("amsrm", t.fontWeight, t.fontShape))
        } else if (E === "main" || !E) {
            var N = Br("textrm", t.fontWeight, t.fontShape);
            return Ft(n, N, s, t, i.concat(t.fontWeight, t.fontShape))
        } else {
            var C = Br(E, t.fontWeight, t.fontShape);
            return Ft(n, C, s, t, i.concat(C, t.fontWeight, t.fontShape))
        }
    } else
        throw new Error("unexpected type: " + a + " in makeOrd")
}
  , R5 = (r, e) => {
    if (v0(r.classes) !== v0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
        return !1;
    if (r.classes.length === 1) {
        var t = r.classes[0];
        if (t === "mbin" || t === "mord")
            return !1
    }
    for (var a in r.style)
        if (r.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
            return !1;
    for (var s in e.style)
        if (e.style.hasOwnProperty(s) && r.style[s] !== e.style[s])
            return !1;
    return !0
}
  , E5 = r => {
    for (var e = 0; e < r.length - 1; e++) {
        var t = r[e]
          , a = r[e + 1];
        t instanceof Lt && a instanceof Lt && R5(t, a) && (t.text += a.text,
        t.height = Math.max(t.height, a.height),
        t.depth = Math.max(t.depth, a.depth),
        t.italic = a.italic,
        r.splice(e + 1, 1),
        e--)
    }
    return r
}
  , Ks = function(e) {
    for (var t = 0, a = 0, s = 0, n = 0; n < e.children.length; n++) {
        var i = e.children[n];
        i.height > t && (t = i.height),
        i.depth > a && (a = i.depth),
        i.maxFontSize > s && (s = i.maxFontSize)
    }
    e.height = t,
    e.depth = a,
    e.maxFontSize = s
}
  , At = function(e, t, a, s) {
    var n = new Ar(e,t,a,s);
    return Ks(n),
    n
}
  , yl = (r, e, t, a) => new Ar(r,e,t,a)
  , B5 = function(e, t, a) {
    var s = At([e], [], t);
    return s.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness),
    s.style.borderBottomWidth = H(s.height),
    s.maxFontSize = 1,
    s
}
  , z5 = function(e, t, a, s) {
    var n = new Ws(e,t,a,s);
    return Ks(n),
    n
}
  , Al = function(e) {
    var t = new yr(e);
    return Ks(t),
    t
}
  , L5 = function(e, t) {
    return e instanceof yr ? At([], [e], t) : e
}
  , O5 = function(e) {
    if (e.positionType === "individualShift") {
        for (var t = e.children, a = [t[0]], s = -t[0].shift - t[0].elem.depth, n = s, i = 1; i < t.length; i++) {
            var l = -t[i].shift - n - t[i].elem.depth
              , u = l - (t[i - 1].elem.height + t[i - 1].elem.depth);
            n = n + l,
            a.push({
                type: "kern",
                size: u
            }),
            a.push(t[i])
        }
        return {
            children: a,
            depth: s
        }
    }
    var d;
    if (e.positionType === "top") {
        for (var m = e.positionData, f = 0; f < e.children.length; f++) {
            var b = e.children[f];
            m -= b.type === "kern" ? b.size : b.elem.height + b.elem.depth
        }
        d = m
    } else if (e.positionType === "bottom")
        d = -e.positionData;
    else {
        var g = e.children[0];
        if (g.type !== "elem")
            throw new Error('First child must have type "elem".');
        if (e.positionType === "shift")
            d = -g.elem.depth - e.positionData;
        else if (e.positionType === "firstBaseline")
            d = -g.elem.depth;
        else
            throw new Error("Invalid positionType " + e.positionType + ".")
    }
    return {
        children: e.children,
        depth: d
    }
}
  , N5 = function(e, t) {
    for (var {children: a, depth: s} = O5(e), n = 0, i = 0; i < a.length; i++) {
        var l = a[i];
        if (l.type === "elem") {
            var u = l.elem;
            n = Math.max(n, u.maxFontSize, u.height)
        }
    }
    n += 2;
    var d = At(["pstrut"], []);
    d.style.height = H(n);
    for (var m = [], f = s, b = s, g = s, w = 0; w < a.length; w++) {
        var M = a[w];
        if (M.type === "kern")
            g += M.size;
        else {
            var E = M.elem
              , R = M.wrapperClasses || []
              , N = M.wrapperStyle || {}
              , C = At(R, [d, E], void 0, N);
            C.style.top = H(-n - g - E.depth),
            M.marginLeft && (C.style.marginLeft = M.marginLeft),
            M.marginRight && (C.style.marginRight = M.marginRight),
            m.push(C),
            g += E.height + E.depth
        }
        f = Math.min(f, g),
        b = Math.max(b, g)
    }
    var L = At(["vlist"], m);
    L.style.height = H(b);
    var D;
    if (f < 0) {
        var _ = At([], [])
          , q = At(["vlist"], [_]);
        q.style.height = H(-f);
        var j = At(["vlist-s"], [new Lt("​")]);
        D = [At(["vlist-r"], [L, j]), At(["vlist-r"], [q])]
    } else
        D = [At(["vlist-r"], [L])];
    var se = At(["vlist-t"], D);
    return D.length === 2 && se.classes.push("vlist-t2"),
    se.height = b,
    se.depth = -f,
    se
}
  , D5 = (r, e) => {
    var t = At(["mspace"], [], e)
      , a = je(r, e);
    return t.style.marginRight = H(a),
    t
}
  , Br = function(e, t, a) {
    var s = "";
    switch (e) {
    case "amsrm":
        s = "AMS";
        break;
    case "textrm":
        s = "Main";
        break;
    case "textsf":
        s = "SansSerif";
        break;
    case "texttt":
        s = "Typewriter";
        break;
    default:
        s = e
    }
    var n;
    return t === "textbf" && a === "textit" ? n = "BoldItalic" : t === "textbf" ? n = "Bold" : t === "textit" ? n = "Italic" : n = "Regular",
    s + "-" + n
}
  , bl = {
    mathbf: {
        variant: "bold",
        fontName: "Main-Bold"
    },
    mathrm: {
        variant: "normal",
        fontName: "Main-Regular"
    },
    textit: {
        variant: "italic",
        fontName: "Main-Italic"
    },
    mathit: {
        variant: "italic",
        fontName: "Main-Italic"
    },
    mathnormal: {
        variant: "italic",
        fontName: "Math-Italic"
    },
    mathsfit: {
        variant: "sans-serif-italic",
        fontName: "SansSerif-Italic"
    },
    mathbb: {
        variant: "double-struck",
        fontName: "AMS-Regular"
    },
    mathcal: {
        variant: "script",
        fontName: "Caligraphic-Regular"
    },
    mathfrak: {
        variant: "fraktur",
        fontName: "Fraktur-Regular"
    },
    mathscr: {
        variant: "script",
        fontName: "Script-Regular"
    },
    mathsf: {
        variant: "sans-serif",
        fontName: "SansSerif-Regular"
    },
    mathtt: {
        variant: "monospace",
        fontName: "Typewriter-Regular"
    }
}
  , wl = {
    vec: ["vec", .471, .714],
    oiintSize1: ["oiintSize1", .957, .499],
    oiintSize2: ["oiintSize2", 1.472, .659],
    oiiintSize1: ["oiiintSize1", 1.304, .499],
    oiiintSize2: ["oiiintSize2", 1.98, .659]
}
  , F5 = function(e, t) {
    var [a,s,n] = wl[e]
      , i = new g0(a)
      , l = new s0([i],{
        width: H(s),
        height: H(n),
        style: "width:" + H(s),
        viewBox: "0 0 " + 1e3 * s + " " + 1e3 * n,
        preserveAspectRatio: "xMinYMin"
    })
      , u = yl(["overlay"], [l], t);
    return u.height = n,
    u.style.height = H(n),
    u.style.width = H(s),
    u
}
  , T = {
    fontMap: bl,
    makeSymbol: Ft,
    mathsym: M5,
    makeSpan: At,
    makeSvgSpan: yl,
    makeLineSpan: B5,
    makeAnchor: z5,
    makeFragment: Al,
    wrapFragment: L5,
    makeVList: N5,
    makeOrd: C5,
    makeGlue: D5,
    staticSvg: F5,
    svgData: wl,
    tryCombineChars: E5
}
  , Ve = {
    number: 3,
    unit: "mu"
}
  , k0 = {
    number: 4,
    unit: "mu"
}
  , Zt = {
    number: 5,
    unit: "mu"
}
  , _5 = {
    mord: {
        mop: Ve,
        mbin: k0,
        mrel: Zt,
        minner: Ve
    },
    mop: {
        mord: Ve,
        mop: Ve,
        mrel: Zt,
        minner: Ve
    },
    mbin: {
        mord: k0,
        mop: k0,
        mopen: k0,
        minner: k0
    },
    mrel: {
        mord: Zt,
        mop: Zt,
        mopen: Zt,
        minner: Zt
    },
    mopen: {},
    mclose: {
        mop: Ve,
        mbin: k0,
        mrel: Zt,
        minner: Ve
    },
    mpunct: {
        mord: Ve,
        mop: Ve,
        mrel: Zt,
        mopen: Ve,
        mclose: Ve,
        mpunct: Ve,
        minner: Ve
    },
    minner: {
        mord: Ve,
        mop: Ve,
        mbin: k0,
        mrel: Zt,
        mopen: Ve,
        mpunct: Ve,
        minner: Ve
    }
}
  , $5 = {
    mord: {
        mop: Ve
    },
    mop: {
        mord: Ve,
        mop: Ve
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
        mop: Ve
    },
    mpunct: {},
    minner: {
        mop: Ve
    }
}
  , xl = {}
  , sa = {}
  , na = {};
function G(r) {
    for (var {type: e, names: t, props: a, handler: s, htmlBuilder: n, mathmlBuilder: i} = r, l = {
        type: e,
        numArgs: a.numArgs,
        argTypes: a.argTypes,
        allowedInArgument: !!a.allowedInArgument,
        allowedInText: !!a.allowedInText,
        allowedInMath: a.allowedInMath === void 0 ? !0 : a.allowedInMath,
        numOptionalArgs: a.numOptionalArgs || 0,
        infix: !!a.infix,
        primitive: !!a.primitive,
        handler: s
    }, u = 0; u < t.length; ++u)
        xl[t[u]] = l;
    e && (n && (sa[e] = n),
    i && (na[e] = i))
}
function z0(r) {
    var {type: e, htmlBuilder: t, mathmlBuilder: a} = r;
    G({
        type: e,
        names: [],
        props: {
            numArgs: 0
        },
        handler() {
            throw new Error("Should never be called.")
        },
        htmlBuilder: t,
        mathmlBuilder: a
    })
}
var ia = function(e) {
    return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e
}
  , Ye = function(e) {
    return e.type === "ordgroup" ? e.body : [e]
}
  , n0 = T.makeSpan
  , P5 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]
  , H5 = ["rightmost", "mrel", "mclose", "mpunct"]
  , q5 = {
    display: re.DISPLAY,
    text: re.TEXT,
    script: re.SCRIPT,
    scriptscript: re.SCRIPTSCRIPT
}
  , Q5 = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner"
}
  , at = function(e, t, a, s) {
    s === void 0 && (s = [null, null]);
    for (var n = [], i = 0; i < e.length; i++) {
        var l = Se(e[i], t);
        if (l instanceof yr) {
            var u = l.children;
            n.push(...u)
        } else
            n.push(l)
    }
    if (T.tryCombineChars(n),
    !a)
        return n;
    var d = t;
    if (e.length === 1) {
        var m = e[0];
        m.type === "sizing" ? d = t.havingSize(m.size) : m.type === "styling" && (d = t.havingStyle(q5[m.style]))
    }
    var f = n0([s[0] || "leftmost"], [], t)
      , b = n0([s[1] || "rightmost"], [], t)
      , g = a === "root";
    return ci(n, (w, M) => {
        var E = M.classes[0]
          , R = w.classes[0];
        E === "mbin" && ee.contains(H5, R) ? M.classes[0] = "mord" : R === "mbin" && ee.contains(P5, E) && (w.classes[0] = "mord")
    }
    , {
        node: f
    }, b, g),
    ci(n, (w, M) => {
        var E = ks(M)
          , R = ks(w)
          , N = E && R ? w.hasClass("mtight") ? $5[E][R] : _5[E][R] : null;
        if (N)
            return T.makeGlue(N, d)
    }
    , {
        node: f
    }, b, g),
    n
}
  , ci = function r(e, t, a, s, n) {
    s && e.push(s);
    for (var i = 0; i < e.length; i++) {
        var l = e[i]
          , u = kl(l);
        if (u) {
            r(u.children, t, a, null, n);
            continue
        }
        var d = !l.hasClass("mspace");
        if (d) {
            var m = t(l, a.node);
            m && (a.insertAfter ? a.insertAfter(m) : (e.unshift(m),
            i++))
        }
        d ? a.node = l : n && l.hasClass("newline") && (a.node = n0(["leftmost"])),
        a.insertAfter = (f => b => {
            e.splice(f + 1, 0, b),
            i++
        }
        )(i)
    }
    s && e.pop()
}
  , kl = function(e) {
    return e instanceof yr || e instanceof Ws || e instanceof Ar && e.hasClass("enclosing") ? e : null
}
  , G5 = function r(e, t) {
    var a = kl(e);
    if (a) {
        var s = a.children;
        if (s.length) {
            if (t === "right")
                return r(s[s.length - 1], "right");
            if (t === "left")
                return r(s[0], "left")
        }
    }
    return e
}
  , ks = function(e, t) {
    return e ? (t && (e = G5(e, t)),
    Q5[e.classes[0]] || null) : null
}
  , vr = function(e, t) {
    var a = ["nulldelimiter"].concat(e.baseSizingClasses());
    return n0(t.concat(a))
}
  , Se = function(e, t, a) {
    if (!e)
        return n0();
    if (sa[e.type]) {
        var s = sa[e.type](e, t);
        if (a && t.size !== a.size) {
            s = n0(t.sizingClasses(a), [s], t);
            var n = t.sizeMultiplier / a.sizeMultiplier;
            s.height *= n,
            s.depth *= n
        }
        return s
    } else
        throw new $("Got group of unknown type: '" + e.type + "'")
};
function zr(r, e) {
    var t = n0(["base"], r, e)
      , a = n0(["strut"]);
    return a.style.height = H(t.height + t.depth),
    t.depth && (a.style.verticalAlign = H(-t.depth)),
    t.children.unshift(a),
    t
}
function Ss(r, e) {
    var t = null;
    r.length === 1 && r[0].type === "tag" && (t = r[0].tag,
    r = r[0].body);
    var a = at(r, e, "root"), s;
    a.length === 2 && a[1].hasClass("tag") && (s = a.pop());
    for (var n = [], i = [], l = 0; l < a.length; l++)
        if (i.push(a[l]),
        a[l].hasClass("mbin") || a[l].hasClass("mrel") || a[l].hasClass("allowbreak")) {
            for (var u = !1; l < a.length - 1 && a[l + 1].hasClass("mspace") && !a[l + 1].hasClass("newline"); )
                l++,
                i.push(a[l]),
                a[l].hasClass("nobreak") && (u = !0);
            u || (n.push(zr(i, e)),
            i = [])
        } else
            a[l].hasClass("newline") && (i.pop(),
            i.length > 0 && (n.push(zr(i, e)),
            i = []),
            n.push(a[l]));
    i.length > 0 && n.push(zr(i, e));
    var d;
    t ? (d = zr(at(t, e, !0)),
    d.classes = ["tag"],
    n.push(d)) : s && n.push(s);
    var m = n0(["katex-html"], n);
    if (m.setAttribute("aria-hidden", "true"),
    d) {
        var f = d.children[0];
        f.style.height = H(m.height + m.depth),
        m.depth && (f.style.verticalAlign = H(-m.depth))
    }
    return m
}
function Sl(r) {
    return new yr(r)
}
class kt {
    constructor(e, t, a) {
        this.type = void 0,
        this.attributes = void 0,
        this.children = void 0,
        this.classes = void 0,
        this.type = e,
        this.attributes = {},
        this.children = t || [],
        this.classes = a || []
    }
    setAttribute(e, t) {
        this.attributes[e] = t
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    toNode() {
        var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for (var t in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
        this.classes.length > 0 && (e.className = v0(this.classes));
        for (var a = 0; a < this.children.length; a++)
            if (this.children[a]instanceof Vt && this.children[a + 1]instanceof Vt) {
                for (var s = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1]instanceof Vt; )
                    s += this.children[++a].toText();
                e.appendChild(new Vt(s).toNode())
            } else
                e.appendChild(this.children[a].toNode());
        return e
    }
    toMarkup() {
        var e = "<" + this.type;
        for (var t in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="',
            e += ee.escape(this.attributes[t]),
            e += '"');
        this.classes.length > 0 && (e += ' class ="' + ee.escape(v0(this.classes)) + '"'),
        e += ">";
        for (var a = 0; a < this.children.length; a++)
            e += this.children[a].toMarkup();
        return e += "</" + this.type + ">",
        e
    }
    toText() {
        return this.children.map(e => e.toText()).join("")
    }
}
class Vt {
    constructor(e) {
        this.text = void 0,
        this.text = e
    }
    toNode() {
        return document.createTextNode(this.text)
    }
    toMarkup() {
        return ee.escape(this.toText())
    }
    toText() {
        return this.text
    }
}
class U5 {
    constructor(e) {
        this.width = void 0,
        this.character = void 0,
        this.width = e,
        e >= .05555 && e <= .05556 ? this.character = " " : e >= .1666 && e <= .1667 ? this.character = " " : e >= .2222 && e <= .2223 ? this.character = " " : e >= .2777 && e <= .2778 ? this.character = "  " : e >= -.05556 && e <= -.05555 ? this.character = " ⁣" : e >= -.1667 && e <= -.1666 ? this.character = " ⁣" : e >= -.2223 && e <= -.2222 ? this.character = " ⁣" : e >= -.2778 && e <= -.2777 ? this.character = " ⁣" : this.character = null
    }
    toNode() {
        if (this.character)
            return document.createTextNode(this.character);
        var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
        return e.setAttribute("width", H(this.width)),
        e
    }
    toMarkup() {
        return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + H(this.width) + '"/>'
    }
    toText() {
        return this.character ? this.character : " "
    }
}
var F = {
    MathNode: kt,
    TextNode: Vt,
    SpaceNode: U5,
    newDocumentFragment: Sl
}
  , Ot = function(e, t, a) {
    return Pe[t][e] && Pe[t][e].replace && e.charCodeAt(0) !== 55349 && !(gl.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = Pe[t][e].replace),
    new F.TextNode(e)
}
  , Ys = function(e) {
    return e.length === 1 ? e[0] : new F.MathNode("mrow",e)
}
  , Xs = function(e, t) {
    if (t.fontFamily === "texttt")
        return "monospace";
    if (t.fontFamily === "textsf")
        return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
    if (t.fontShape === "textit" && t.fontWeight === "textbf")
        return "bold-italic";
    if (t.fontShape === "textit")
        return "italic";
    if (t.fontWeight === "textbf")
        return "bold";
    var a = t.font;
    if (!a || a === "mathnormal")
        return null;
    var s = e.mode;
    if (a === "mathit")
        return "italic";
    if (a === "boldsymbol")
        return e.type === "textord" ? "bold" : "bold-italic";
    if (a === "mathbf")
        return "bold";
    if (a === "mathbb")
        return "double-struck";
    if (a === "mathsfit")
        return "sans-serif-italic";
    if (a === "mathfrak")
        return "fraktur";
    if (a === "mathscr" || a === "mathcal")
        return "script";
    if (a === "mathsf")
        return "sans-serif";
    if (a === "mathtt")
        return "monospace";
    var n = e.text;
    if (ee.contains(["\\imath", "\\jmath"], n))
        return null;
    Pe[s][n] && Pe[s][n].replace && (n = Pe[s][n].replace);
    var i = T.fontMap[a].fontName;
    return js(n, i, s) ? T.fontMap[a].variant : null
};
function Na(r) {
    if (!r)
        return !1;
    if (r.type === "mi" && r.children.length === 1) {
        var e = r.children[0];
        return e instanceof Vt && e.text === "."
    } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
        var t = r.children[0];
        return t instanceof Vt && t.text === ","
    } else
        return !1
}
var wt = function(e, t, a) {
    if (e.length === 1) {
        var s = _e(e[0], t);
        return a && s instanceof kt && s.type === "mo" && (s.setAttribute("lspace", "0em"),
        s.setAttribute("rspace", "0em")),
        [s]
    }
    for (var n = [], i, l = 0; l < e.length; l++) {
        var u = _e(e[l], t);
        if (u instanceof kt && i instanceof kt) {
            if (u.type === "mtext" && i.type === "mtext" && u.getAttribute("mathvariant") === i.getAttribute("mathvariant")) {
                i.children.push(...u.children);
                continue
            } else if (u.type === "mn" && i.type === "mn") {
                i.children.push(...u.children);
                continue
            } else if (Na(u) && i.type === "mn") {
                i.children.push(...u.children);
                continue
            } else if (u.type === "mn" && Na(i))
                u.children = [...i.children, ...u.children],
                n.pop();
            else if ((u.type === "msup" || u.type === "msub") && u.children.length >= 1 && (i.type === "mn" || Na(i))) {
                var d = u.children[0];
                d instanceof kt && d.type === "mn" && (d.children = [...i.children, ...d.children],
                n.pop())
            } else if (i.type === "mi" && i.children.length === 1) {
                var m = i.children[0];
                if (m instanceof Vt && m.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
                    var f = u.children[0];
                    f instanceof Vt && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1),
                    n.pop())
                }
            }
        }
        n.push(u),
        i = u
    }
    return n
}
  , y0 = function(e, t, a) {
    return Ys(wt(e, t, a))
}
  , _e = function(e, t) {
    if (!e)
        return new F.MathNode("mrow");
    if (na[e.type]) {
        var a = na[e.type](e, t);
        return a
    } else
        throw new $("Got group of unknown type: '" + e.type + "'")
};
function ui(r, e, t, a, s) {
    var n = wt(r, t), i;
    n.length === 1 && n[0]instanceof kt && ee.contains(["mrow", "mtable"], n[0].type) ? i = n[0] : i = new F.MathNode("mrow",n);
    var l = new F.MathNode("annotation",[new F.TextNode(e)]);
    l.setAttribute("encoding", "application/x-tex");
    var u = new F.MathNode("semantics",[i, l])
      , d = new F.MathNode("math",[u]);
    d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
    a && d.setAttribute("display", "block");
    var m = s ? "katex" : "katex-mathml";
    return T.makeSpan([m], [d])
}
var Tl = function(e) {
    return new Jt({
        style: e.displayMode ? re.DISPLAY : re.TEXT,
        maxSize: e.maxSize,
        minRuleThickness: e.minRuleThickness
    })
}
  , Ml = function(e, t) {
    if (t.displayMode) {
        var a = ["katex-display"];
        t.leqno && a.push("leqno"),
        t.fleqn && a.push("fleqn"),
        e = T.makeSpan(a, [e])
    }
    return e
}
  , V5 = function(e, t, a) {
    var s = Tl(a), n;
    if (a.output === "mathml")
        return ui(e, t, s, a.displayMode, !0);
    if (a.output === "html") {
        var i = Ss(e, s);
        n = T.makeSpan(["katex"], [i])
    } else {
        var l = ui(e, t, s, a.displayMode, !1)
          , u = Ss(e, s);
        n = T.makeSpan(["katex"], [l, u])
    }
    return Ml(n, a)
}
  , j5 = function(e, t, a) {
    var s = Tl(a)
      , n = Ss(e, s)
      , i = T.makeSpan(["katex"], [n]);
    return Ml(i, a)
}
  , W5 = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "←",
    underleftarrow: "←",
    xleftarrow: "←",
    overrightarrow: "→",
    underrightarrow: "→",
    xrightarrow: "→",
    underbrace: "⏟",
    overbrace: "⏞",
    overgroup: "⏠",
    undergroup: "⏡",
    overleftrightarrow: "↔",
    underleftrightarrow: "↔",
    xleftrightarrow: "↔",
    Overrightarrow: "⇒",
    xRightarrow: "⇒",
    overleftharpoon: "↼",
    xleftharpoonup: "↼",
    overrightharpoon: "⇀",
    xrightharpoonup: "⇀",
    xLeftarrow: "⇐",
    xLeftrightarrow: "⇔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xrightharpoondown: "⇁",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xtofrom: "⇄",
    xrightleftarrows: "⇄",
    xrightequilibrium: "⇌",
    xleftequilibrium: "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "="
}
  , K5 = function(e) {
    var t = new F.MathNode("mo",[new F.TextNode(W5[e.replace(/^\\/, "")])]);
    return t.setAttribute("stretchy", "true"),
    t
}
  , Y5 = {
    overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], .888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
    overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
    underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
    xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
    overgroup: [["leftgroup", "rightgroup"], .888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
    xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}
  , X5 = function(e) {
    return e.type === "ordgroup" ? e.body.length : 1
}
  , Z5 = function(e, t) {
    function a() {
        var l = 4e5
          , u = e.label.slice(1);
        if (ee.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
            var d = e, m = X5(d.base), f, b, g;
            if (m > 5)
                u === "widehat" || u === "widecheck" ? (f = 420,
                l = 2364,
                g = .42,
                b = u + "4") : (f = 312,
                l = 2340,
                g = .34,
                b = "tilde4");
            else {
                var w = [1, 1, 2, 2, 3, 3][m];
                u === "widehat" || u === "widecheck" ? (l = [0, 1062, 2364, 2364, 2364][w],
                f = [0, 239, 300, 360, 420][w],
                g = [0, .24, .3, .3, .36, .42][w],
                b = u + w) : (l = [0, 600, 1033, 2339, 2340][w],
                f = [0, 260, 286, 306, 312][w],
                g = [0, .26, .286, .3, .306, .34][w],
                b = "tilde" + w)
            }
            var M = new g0(b)
              , E = new s0([M],{
                width: "100%",
                height: H(g),
                viewBox: "0 0 " + l + " " + f,
                preserveAspectRatio: "none"
            });
            return {
                span: T.makeSvgSpan([], [E], t),
                minWidth: 0,
                height: g
            }
        } else {
            var R = [], N = Y5[u], [C,L,D] = N, _ = D / 1e3, q = C.length, j, se;
            if (q === 1) {
                var Ee = N[3];
                j = ["hide-tail"],
                se = [Ee]
            } else if (q === 2)
                j = ["halfarrow-left", "halfarrow-right"],
                se = ["xMinYMin", "xMaxYMin"];
            else if (q === 3)
                j = ["brace-left", "brace-center", "brace-right"],
                se = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            else
                throw new Error(`Correct katexImagesData or update code here to support
                    ` + q + " children.");
            for (var Be = 0; Be < q; Be++) {
                var Ae = new g0(C[Be])
                  , ne = new s0([Ae],{
                    width: "400em",
                    height: H(_),
                    viewBox: "0 0 " + l + " " + D,
                    preserveAspectRatio: se[Be] + " slice"
                })
                  , le = T.makeSvgSpan([j[Be]], [ne], t);
                if (q === 1)
                    return {
                        span: le,
                        minWidth: L,
                        height: _
                    };
                le.style.height = H(_),
                R.push(le)
            }
            return {
                span: T.makeSpan(["stretchy"], R, t),
                minWidth: L,
                height: _
            }
        }
    }
    var {span: s, minWidth: n, height: i} = a();
    return s.height = i,
    s.style.height = H(i),
    n > 0 && (s.style.minWidth = H(n)),
    s
}
  , J5 = function(e, t, a, s, n) {
    var i, l = e.height + e.depth + a + s;
    if (/fbox|color|angl/.test(t)) {
        if (i = T.makeSpan(["stretchy", t], [], n),
        t === "fbox") {
            var u = n.color && n.getColor();
            u && (i.style.borderColor = u)
        }
    } else {
        var d = [];
        /^[bx]cancel$/.test(t) && d.push(new ws({
            x1: "0",
            y1: "0",
            x2: "100%",
            y2: "100%",
            "stroke-width": "0.046em"
        })),
        /^x?cancel$/.test(t) && d.push(new ws({
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "0",
            "stroke-width": "0.046em"
        }));
        var m = new s0(d,{
            width: "100%",
            height: H(l)
        });
        i = T.makeSvgSpan([], [m], n)
    }
    return i.height = l,
    i.style.height = H(l),
    i
}
  , i0 = {
    encloseSpan: J5,
    mathMLnode: K5,
    svgSpan: Z5
};
function fe(r, e) {
    if (!r || r.type !== e)
        throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
    return r
}
function Zs(r) {
    var e = ba(r);
    if (!e)
        throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
    return e
}
function ba(r) {
    return r && (r.type === "atom" || S5.hasOwnProperty(r.type)) ? r : null
}
var Js = (r, e) => {
    var t, a, s;
    r && r.type === "supsub" ? (a = fe(r.base, "accent"),
    t = a.base,
    r.base = t,
    s = x5(Se(r, e)),
    r.base = a) : (a = fe(r, "accent"),
    t = a.base);
    var n = Se(t, e.havingCrampedStyle())
      , i = a.isShifty && ee.isCharacterBox(t)
      , l = 0;
    if (i) {
        var u = ee.getBaseElem(t)
          , d = Se(u, e.havingCrampedStyle());
        l = ai(d).skew
    }
    var m = a.label === "\\c", f = m ? n.height + n.depth : Math.min(n.height, e.fontMetrics().xHeight), b;
    if (a.isStretchy)
        b = i0.svgSpan(a, e),
        b = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: n
            }, {
                type: "elem",
                elem: b,
                wrapperClasses: ["svg-align"],
                wrapperStyle: l > 0 ? {
                    width: "calc(100% - " + H(2 * l) + ")",
                    marginLeft: H(2 * l)
                } : void 0
            }]
        }, e);
    else {
        var g, w;
        a.label === "\\vec" ? (g = T.staticSvg("vec", e),
        w = T.svgData.vec[1]) : (g = T.makeOrd({
            mode: a.mode,
            text: a.label
        }, e, "textord"),
        g = ai(g),
        g.italic = 0,
        w = g.width,
        m && (f += g.depth)),
        b = T.makeSpan(["accent-body"], [g]);
        var M = a.label === "\\textcircled";
        M && (b.classes.push("accent-full"),
        f = n.height);
        var E = l;
        M || (E -= w / 2),
        b.style.left = H(E),
        a.label === "\\textcircled" && (b.style.top = ".2em"),
        b = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: n
            }, {
                type: "kern",
                size: -f
            }, {
                type: "elem",
                elem: b
            }]
        }, e)
    }
    var R = T.makeSpan(["mord", "accent"], [b], e);
    return s ? (s.children[0] = R,
    s.height = Math.max(R.height, s.height),
    s.classes[0] = "mord",
    s) : R
}
  , Il = (r, e) => {
    var t = r.isStretchy ? i0.mathMLnode(r.label) : new F.MathNode("mo",[Ot(r.label, r.mode)])
      , a = new F.MathNode("mover",[_e(r.base, e), t]);
    return a.setAttribute("accent", "true"),
    a
}
  , e6 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(r => "\\" + r).join("|"));
G({
    type: "accent",
    names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
    props: {
        numArgs: 1
    },
    handler: (r, e) => {
        var t = ia(e[0])
          , a = !e6.test(r.funcName)
          , s = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
        return {
            type: "accent",
            mode: r.parser.mode,
            label: r.funcName,
            isStretchy: a,
            isShifty: s,
            base: t
        }
    }
    ,
    htmlBuilder: Js,
    mathmlBuilder: Il
});
G({
    type: "accent",
    names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
    props: {
        numArgs: 1,
        allowedInText: !0,
        allowedInMath: !0,
        argTypes: ["primitive"]
    },
    handler: (r, e) => {
        var t = e[0]
          , a = r.parser.mode;
        return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"),
        a = "text"),
        {
            type: "accent",
            mode: a,
            label: r.funcName,
            isStretchy: !1,
            isShifty: !0,
            base: t
        }
    }
    ,
    htmlBuilder: Js,
    mathmlBuilder: Il
});
G({
    type: "accentUnder",
    names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
    props: {
        numArgs: 1
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "accentUnder",
            mode: t.mode,
            label: a,
            base: s
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = Se(r.base, e)
          , a = i0.svgSpan(r, e)
          , s = r.label === "\\utilde" ? .12 : 0
          , n = T.makeVList({
            positionType: "top",
            positionData: t.height,
            children: [{
                type: "elem",
                elem: a,
                wrapperClasses: ["svg-align"]
            }, {
                type: "kern",
                size: s
            }, {
                type: "elem",
                elem: t
            }]
        }, e);
        return T.makeSpan(["mord", "accentunder"], [n], e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = i0.mathMLnode(r.label)
          , a = new F.MathNode("munder",[_e(r.base, e), t]);
        return a.setAttribute("accentunder", "true"),
        a
    }
});
var Lr = r => {
    var e = new F.MathNode("mpadded",r ? [r] : []);
    return e.setAttribute("width", "+0.6em"),
    e.setAttribute("lspace", "0.3em"),
    e
}
;
G({
    type: "xArrow",
    names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1
    },
    handler(r, e, t) {
        var {parser: a, funcName: s} = r;
        return {
            type: "xArrow",
            mode: a.mode,
            label: s,
            body: e[0],
            below: t[0]
        }
    },
    htmlBuilder(r, e) {
        var t = e.style
          , a = e.havingStyle(t.sup())
          , s = T.wrapFragment(Se(r.body, a, e), e)
          , n = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
        s.classes.push(n + "-arrow-pad");
        var i;
        r.below && (a = e.havingStyle(t.sub()),
        i = T.wrapFragment(Se(r.below, a, e), e),
        i.classes.push(n + "-arrow-pad"));
        var l = i0.svgSpan(r, e)
          , u = -e.fontMetrics().axisHeight + .5 * l.height
          , d = -e.fontMetrics().axisHeight - .5 * l.height - .111;
        (s.depth > .25 || r.label === "\\xleftequilibrium") && (d -= s.depth);
        var m;
        if (i) {
            var f = -e.fontMetrics().axisHeight + i.height + .5 * l.height + .111;
            m = T.makeVList({
                positionType: "individualShift",
                children: [{
                    type: "elem",
                    elem: s,
                    shift: d
                }, {
                    type: "elem",
                    elem: l,
                    shift: u
                }, {
                    type: "elem",
                    elem: i,
                    shift: f
                }]
            }, e)
        } else
            m = T.makeVList({
                positionType: "individualShift",
                children: [{
                    type: "elem",
                    elem: s,
                    shift: d
                }, {
                    type: "elem",
                    elem: l,
                    shift: u
                }]
            }, e);
        return m.children[0].children[0].children[1].classes.push("svg-align"),
        T.makeSpan(["mrel", "x-arrow"], [m], e)
    },
    mathmlBuilder(r, e) {
        var t = i0.mathMLnode(r.label);
        t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var a;
        if (r.body) {
            var s = Lr(_e(r.body, e));
            if (r.below) {
                var n = Lr(_e(r.below, e));
                a = new F.MathNode("munderover",[t, n, s])
            } else
                a = new F.MathNode("mover",[t, s])
        } else if (r.below) {
            var i = Lr(_e(r.below, e));
            a = new F.MathNode("munder",[t, i])
        } else
            a = Lr(),
            a = new F.MathNode("mover",[t, a]);
        return a
    }
});
var t6 = T.makeSpan;
function Cl(r, e) {
    var t = at(r.body, e, !0);
    return t6([r.mclass], t, e)
}
function Rl(r, e) {
    var t, a = wt(r.body, e);
    return r.mclass === "minner" ? t = new F.MathNode("mpadded",a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0],
    t.type = "mi") : t = new F.MathNode("mi",a) : (r.isCharacterBox ? (t = a[0],
    t.type = "mo") : t = new F.MathNode("mo",a),
    r.mclass === "mbin" ? (t.attributes.lspace = "0.22em",
    t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em",
    t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em",
    t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em",
    t.attributes.width = "+0.1111em")),
    t
}
G({
    type: "mclass",
    names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
    props: {
        numArgs: 1,
        primitive: !0
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "mclass",
            mode: t.mode,
            mclass: "m" + a.slice(5),
            body: Ye(s),
            isCharacterBox: ee.isCharacterBox(s)
        }
    },
    htmlBuilder: Cl,
    mathmlBuilder: Rl
});
var wa = r => {
    var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
    return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord"
}
;
G({
    type: "mclass",
    names: ["\\@binrel"],
    props: {
        numArgs: 2
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "mclass",
            mode: t.mode,
            mclass: wa(e[0]),
            body: Ye(e[1]),
            isCharacterBox: ee.isCharacterBox(e[1])
        }
    }
});
G({
    type: "mclass",
    names: ["\\stackrel", "\\overset", "\\underset"],
    props: {
        numArgs: 2
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r, s = e[1], n = e[0], i;
        a !== "\\stackrel" ? i = wa(s) : i = "mrel";
        var l = {
            type: "op",
            mode: s.mode,
            limits: !0,
            alwaysHandleSupSub: !0,
            parentIsSupSub: !1,
            symbol: !1,
            suppressBaseShift: a !== "\\stackrel",
            body: Ye(s)
        }
          , u = {
            type: "supsub",
            mode: n.mode,
            base: l,
            sup: a === "\\underset" ? null : n,
            sub: a === "\\underset" ? n : null
        };
        return {
            type: "mclass",
            mode: t.mode,
            mclass: i,
            body: [u],
            isCharacterBox: ee.isCharacterBox(u)
        }
    },
    htmlBuilder: Cl,
    mathmlBuilder: Rl
});
G({
    type: "pmb",
    names: ["\\pmb"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "pmb",
            mode: t.mode,
            mclass: wa(e[0]),
            body: Ye(e[0])
        }
    },
    htmlBuilder(r, e) {
        var t = at(r.body, e, !0)
          , a = T.makeSpan([r.mclass], t, e);
        return a.style.textShadow = "0.02em 0.01em 0.04px",
        a
    },
    mathmlBuilder(r, e) {
        var t = wt(r.body, e)
          , a = new F.MathNode("mstyle",t);
        return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"),
        a
    }
});
var r6 = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow"
}
  , di = () => ({
    type: "styling",
    body: [],
    mode: "math",
    style: "display"
})
  , hi = r => r.type === "textord" && r.text === "@"
  , a6 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function s6(r, e, t) {
    var a = r6[r];
    switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
        return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow":
        {
            var s = t.callFunction("\\\\cdleft", [e[0]], [])
              , n = {
                type: "atom",
                text: a,
                mode: "math",
                family: "rel"
            }
              , i = t.callFunction("\\Big", [n], [])
              , l = t.callFunction("\\\\cdright", [e[1]], [])
              , u = {
                type: "ordgroup",
                mode: "math",
                body: [s, i, l]
            };
            return t.callFunction("\\\\cdparent", [u], [])
        }
    case "\\\\cdlongequal":
        return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert":
        {
            var d = {
                type: "textord",
                text: "\\Vert",
                mode: "math"
            };
            return t.callFunction("\\Big", [d], [])
        }
    default:
        return {
            type: "textord",
            text: " ",
            mode: "math"
        }
    }
}
function n6(r) {
    var e = [];
    for (r.gullet.beginGroup(),
    r.gullet.macros.set("\\cr", "\\\\\\relax"),
    r.gullet.beginGroup(); ; ) {
        e.push(r.parseExpression(!1, "\\\\")),
        r.gullet.endGroup(),
        r.gullet.beginGroup();
        var t = r.fetch().text;
        if (t === "&" || t === "\\\\")
            r.consume();
        else if (t === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break
        } else
            throw new $("Expected \\\\ or \\cr or \\end",r.nextToken)
    }
    for (var a = [], s = [a], n = 0; n < e.length; n++) {
        for (var i = e[n], l = di(), u = 0; u < i.length; u++)
            if (!hi(i[u]))
                l.body.push(i[u]);
            else {
                a.push(l),
                u += 1;
                var d = Zs(i[u]).text
                  , m = new Array(2);
                if (m[0] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                },
                m[1] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                },
                !("=|.".indexOf(d) > -1))
                    if ("<>AV".indexOf(d) > -1)
                        for (var f = 0; f < 2; f++) {
                            for (var b = !0, g = u + 1; g < i.length; g++) {
                                if (a6(i[g], d)) {
                                    b = !1,
                                    u = g;
                                    break
                                }
                                if (hi(i[g]))
                                    throw new $("Missing a " + d + " character to complete a CD arrow.",i[g]);
                                m[f].body.push(i[g])
                            }
                            if (b)
                                throw new $("Missing a " + d + " character to complete a CD arrow.",i[u])
                        }
                    else
                        throw new $('Expected one of "<>AV=|." after @',i[u]);
                var w = s6(d, m, r)
                  , M = {
                    type: "styling",
                    body: [w],
                    mode: "math",
                    style: "display"
                };
                a.push(M),
                l = di()
            }
        n % 2 === 0 ? a.push(l) : a.shift(),
        a = [],
        s.push(a)
    }
    r.gullet.endGroup(),
    r.gullet.endGroup();
    var E = new Array(s[0].length).fill({
        type: "align",
        align: "c",
        pregap: .25,
        postgap: .25
    });
    return {
        type: "array",
        mode: "math",
        body: s,
        arraystretch: 1,
        addJot: !0,
        rowGaps: [null],
        cols: E,
        colSeparationType: "CD",
        hLinesBeforeRow: new Array(s.length + 1).fill([])
    }
}
G({
    type: "cdlabel",
    names: ["\\\\cdleft", "\\\\cdright"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r;
        return {
            type: "cdlabel",
            mode: t.mode,
            side: a.slice(4),
            label: e[0]
        }
    },
    htmlBuilder(r, e) {
        var t = e.havingStyle(e.style.sup())
          , a = T.wrapFragment(Se(r.label, t, e), e);
        return a.classes.push("cd-label-" + r.side),
        a.style.bottom = H(.8 - a.depth),
        a.height = 0,
        a.depth = 0,
        a
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mrow",[_e(r.label, e)]);
        return t = new F.MathNode("mpadded",[t]),
        t.setAttribute("width", "0"),
        r.side === "left" && t.setAttribute("lspace", "-1width"),
        t.setAttribute("voffset", "0.7em"),
        t = new F.MathNode("mstyle",[t]),
        t.setAttribute("displaystyle", "false"),
        t.setAttribute("scriptlevel", "1"),
        t
    }
});
G({
    type: "cdlabelparent",
    names: ["\\\\cdparent"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "cdlabelparent",
            mode: t.mode,
            fragment: e[0]
        }
    },
    htmlBuilder(r, e) {
        var t = T.wrapFragment(Se(r.fragment, e), e);
        return t.classes.push("cd-vert-arrow"),
        t
    },
    mathmlBuilder(r, e) {
        return new F.MathNode("mrow",[_e(r.fragment, e)])
    }
});
G({
    type: "textord",
    names: ["\\@char"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler(r, e) {
        for (var {parser: t} = r, a = fe(e[0], "ordgroup"), s = a.body, n = "", i = 0; i < s.length; i++) {
            var l = fe(s[i], "textord");
            n += l.text
        }
        var u = parseInt(n), d;
        if (isNaN(u))
            throw new $("\\@char has non-numeric argument " + n);
        if (u < 0 || u >= 1114111)
            throw new $("\\@char with invalid code point " + n);
        return u <= 65535 ? d = String.fromCharCode(u) : (u -= 65536,
        d = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320)),
        {
            type: "textord",
            mode: t.mode,
            text: d
        }
    }
});
var El = (r, e) => {
    var t = at(r.body, e.withColor(r.color), !1);
    return T.makeFragment(t)
}
  , Bl = (r, e) => {
    var t = wt(r.body, e.withColor(r.color))
      , a = new F.MathNode("mstyle",t);
    return a.setAttribute("mathcolor", r.color),
    a
}
;
G({
    type: "color",
    names: ["\\textcolor"],
    props: {
        numArgs: 2,
        allowedInText: !0,
        argTypes: ["color", "original"]
    },
    handler(r, e) {
        var {parser: t} = r
          , a = fe(e[0], "color-token").color
          , s = e[1];
        return {
            type: "color",
            mode: t.mode,
            color: a,
            body: Ye(s)
        }
    },
    htmlBuilder: El,
    mathmlBuilder: Bl
});
G({
    type: "color",
    names: ["\\color"],
    props: {
        numArgs: 1,
        allowedInText: !0,
        argTypes: ["color"]
    },
    handler(r, e) {
        var {parser: t, breakOnTokenText: a} = r
          , s = fe(e[0], "color-token").color;
        t.gullet.macros.set("\\current@color", s);
        var n = t.parseExpression(!0, a);
        return {
            type: "color",
            mode: t.mode,
            color: s,
            body: n
        }
    },
    htmlBuilder: El,
    mathmlBuilder: Bl
});
G({
    type: "cr",
    names: ["\\\\"],
    props: {
        numArgs: 0,
        numOptionalArgs: 0,
        allowedInText: !0
    },
    handler(r, e, t) {
        var {parser: a} = r
          , s = a.gullet.future().text === "[" ? a.parseSizeGroup(!0) : null
          , n = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return {
            type: "cr",
            mode: a.mode,
            newLine: n,
            size: s && fe(s, "size").value
        }
    },
    htmlBuilder(r, e) {
        var t = T.makeSpan(["mspace"], [], e);
        return r.newLine && (t.classes.push("newline"),
        r.size && (t.style.marginTop = H(je(r.size, e)))),
        t
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mspace");
        return r.newLine && (t.setAttribute("linebreak", "newline"),
        r.size && t.setAttribute("height", H(je(r.size, e)))),
        t
    }
});
var Ts = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture"
}
  , zl = r => {
    var e = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
        throw new $("Expected a control sequence",r);
    return e
}
  , i6 = r => {
    var e = r.gullet.popToken();
    return e.text === "=" && (e = r.gullet.popToken(),
    e.text === " " && (e = r.gullet.popToken())),
    e
}
  , Ll = (r, e, t, a) => {
    var s = r.gullet.macros.get(t.text);
    s == null && (t.noexpand = !0,
    s = {
        tokens: [t],
        numArgs: 0,
        unexpandable: !r.gullet.isExpandable(t.text)
    }),
    r.gullet.macros.set(e, s, a)
}
;
G({
    type: "internal",
    names: ["\\global", "\\long", "\\\\globallong"],
    props: {
        numArgs: 0,
        allowedInText: !0
    },
    handler(r) {
        var {parser: e, funcName: t} = r;
        e.consumeSpaces();
        var a = e.fetch();
        if (Ts[a.text])
            return (t === "\\global" || t === "\\\\globallong") && (a.text = Ts[a.text]),
            fe(e.parseFunction(), "internal");
        throw new $("Invalid token after macro prefix",a)
    }
});
G({
    type: "internal",
    names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        primitive: !0
    },
    handler(r) {
        var {parser: e, funcName: t} = r
          , a = e.gullet.popToken()
          , s = a.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(s))
            throw new $("Expected a control sequence",a);
        for (var n = 0, i, l = [[]]; e.gullet.future().text !== "{"; )
            if (a = e.gullet.popToken(),
            a.text === "#") {
                if (e.gullet.future().text === "{") {
                    i = e.gullet.future(),
                    l[n].push("{");
                    break
                }
                if (a = e.gullet.popToken(),
                !/^[1-9]$/.test(a.text))
                    throw new $('Invalid argument number "' + a.text + '"');
                if (parseInt(a.text) !== n + 1)
                    throw new $('Argument number "' + a.text + '" out of order');
                n++,
                l.push([])
            } else {
                if (a.text === "EOF")
                    throw new $("Expected a macro definition");
                l[n].push(a.text)
            }
        var {tokens: u} = e.gullet.consumeArg();
        return i && u.unshift(i),
        (t === "\\edef" || t === "\\xdef") && (u = e.gullet.expandTokens(u),
        u.reverse()),
        e.gullet.macros.set(s, {
            tokens: u,
            numArgs: n,
            delimiters: l
        }, t === Ts[t]),
        {
            type: "internal",
            mode: e.mode
        }
    }
});
G({
    type: "internal",
    names: ["\\let", "\\\\globallet"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        primitive: !0
    },
    handler(r) {
        var {parser: e, funcName: t} = r
          , a = zl(e.gullet.popToken());
        e.gullet.consumeSpaces();
        var s = i6(e);
        return Ll(e, a, s, t === "\\\\globallet"),
        {
            type: "internal",
            mode: e.mode
        }
    }
});
G({
    type: "internal",
    names: ["\\futurelet", "\\\\globalfuture"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        primitive: !0
    },
    handler(r) {
        var {parser: e, funcName: t} = r
          , a = zl(e.gullet.popToken())
          , s = e.gullet.popToken()
          , n = e.gullet.popToken();
        return Ll(e, a, n, t === "\\\\globalfuture"),
        e.gullet.pushToken(n),
        e.gullet.pushToken(s),
        {
            type: "internal",
            mode: e.mode
        }
    }
});
var ar = function(e, t, a) {
    var s = Pe.math[e] && Pe.math[e].replace
      , n = js(s || e, t, a);
    if (!n)
        throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
    return n
}
  , en = function(e, t, a, s) {
    var n = a.havingBaseStyle(t)
      , i = T.makeSpan(s.concat(n.sizingClasses(a)), [e], a)
      , l = n.sizeMultiplier / a.sizeMultiplier;
    return i.height *= l,
    i.depth *= l,
    i.maxFontSize = n.sizeMultiplier,
    i
}
  , Ol = function(e, t, a) {
    var s = t.havingBaseStyle(a)
      , n = (1 - t.sizeMultiplier / s.sizeMultiplier) * t.fontMetrics().axisHeight;
    e.classes.push("delimcenter"),
    e.style.top = H(n),
    e.height -= n,
    e.depth += n
}
  , o6 = function(e, t, a, s, n, i) {
    var l = T.makeSymbol(e, "Main-Regular", n, s)
      , u = en(l, t, s, i);
    return a && Ol(u, s, t),
    u
}
  , l6 = function(e, t, a, s) {
    return T.makeSymbol(e, "Size" + t + "-Regular", a, s)
}
  , Nl = function(e, t, a, s, n, i) {
    var l = l6(e, t, n, s)
      , u = en(T.makeSpan(["delimsizing", "size" + t], [l], s), re.TEXT, s, i);
    return a && Ol(u, s, re.TEXT),
    u
}
  , Da = function(e, t, a) {
    var s;
    t === "Size1-Regular" ? s = "delim-size1" : s = "delim-size4";
    var n = T.makeSpan(["delimsizinginner", s], [T.makeSpan([], [T.makeSymbol(e, t, a)])]);
    return {
        type: "elem",
        elem: n
    }
}
  , Fa = function(e, t, a) {
    var s = Ut["Size4-Regular"][e.charCodeAt(0)] ? Ut["Size4-Regular"][e.charCodeAt(0)][4] : Ut["Size1-Regular"][e.charCodeAt(0)][4]
      , n = new g0("inner",m5(e, Math.round(1e3 * t)))
      , i = new s0([n],{
        width: H(s),
        height: H(t),
        style: "width:" + H(s),
        viewBox: "0 0 " + 1e3 * s + " " + Math.round(1e3 * t),
        preserveAspectRatio: "xMinYMin"
    })
      , l = T.makeSvgSpan([], [i], a);
    return l.height = t,
    l.style.height = H(t),
    l.style.width = H(s),
    {
        type: "elem",
        elem: l
    }
}
  , Ms = .008
  , Or = {
    type: "kern",
    size: -1 * Ms
}
  , c6 = ["|", "\\lvert", "\\rvert", "\\vert"]
  , u6 = ["\\|", "\\lVert", "\\rVert", "\\Vert"]
  , Dl = function(e, t, a, s, n, i) {
    var l, u, d, m, f = "", b = 0;
    l = d = m = e,
    u = null;
    var g = "Size1-Regular";
    e === "\\uparrow" ? d = m = "⏐" : e === "\\Uparrow" ? d = m = "‖" : e === "\\downarrow" ? l = d = "⏐" : e === "\\Downarrow" ? l = d = "‖" : e === "\\updownarrow" ? (l = "\\uparrow",
    d = "⏐",
    m = "\\downarrow") : e === "\\Updownarrow" ? (l = "\\Uparrow",
    d = "‖",
    m = "\\Downarrow") : ee.contains(c6, e) ? (d = "∣",
    f = "vert",
    b = 333) : ee.contains(u6, e) ? (d = "∥",
    f = "doublevert",
    b = 556) : e === "[" || e === "\\lbrack" ? (l = "⎡",
    d = "⎢",
    m = "⎣",
    g = "Size4-Regular",
    f = "lbrack",
    b = 667) : e === "]" || e === "\\rbrack" ? (l = "⎤",
    d = "⎥",
    m = "⎦",
    g = "Size4-Regular",
    f = "rbrack",
    b = 667) : e === "\\lfloor" || e === "⌊" ? (d = l = "⎢",
    m = "⎣",
    g = "Size4-Regular",
    f = "lfloor",
    b = 667) : e === "\\lceil" || e === "⌈" ? (l = "⎡",
    d = m = "⎢",
    g = "Size4-Regular",
    f = "lceil",
    b = 667) : e === "\\rfloor" || e === "⌋" ? (d = l = "⎥",
    m = "⎦",
    g = "Size4-Regular",
    f = "rfloor",
    b = 667) : e === "\\rceil" || e === "⌉" ? (l = "⎤",
    d = m = "⎥",
    g = "Size4-Regular",
    f = "rceil",
    b = 667) : e === "(" || e === "\\lparen" ? (l = "⎛",
    d = "⎜",
    m = "⎝",
    g = "Size4-Regular",
    f = "lparen",
    b = 875) : e === ")" || e === "\\rparen" ? (l = "⎞",
    d = "⎟",
    m = "⎠",
    g = "Size4-Regular",
    f = "rparen",
    b = 875) : e === "\\{" || e === "\\lbrace" ? (l = "⎧",
    u = "⎨",
    m = "⎩",
    d = "⎪",
    g = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (l = "⎫",
    u = "⎬",
    m = "⎭",
    d = "⎪",
    g = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (l = "⎧",
    m = "⎩",
    d = "⎪",
    g = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (l = "⎫",
    m = "⎭",
    d = "⎪",
    g = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (l = "⎧",
    m = "⎭",
    d = "⎪",
    g = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (l = "⎫",
    m = "⎩",
    d = "⎪",
    g = "Size4-Regular");
    var w = ar(l, g, n)
      , M = w.height + w.depth
      , E = ar(d, g, n)
      , R = E.height + E.depth
      , N = ar(m, g, n)
      , C = N.height + N.depth
      , L = 0
      , D = 1;
    if (u !== null) {
        var _ = ar(u, g, n);
        L = _.height + _.depth,
        D = 2
    }
    var q = M + C + L
      , j = Math.max(0, Math.ceil((t - q) / (D * R)))
      , se = q + j * D * R
      , Ee = s.fontMetrics().axisHeight;
    a && (Ee *= s.sizeMultiplier);
    var Be = se / 2 - Ee
      , Ae = [];
    if (f.length > 0) {
        var ne = se - M - C
          , le = Math.round(se * 1e3)
          , ce = p5(f, Math.round(ne * 1e3))
          , Q = new g0(f,ce)
          , de = (b / 1e3).toFixed(3) + "em"
          , ke = (le / 1e3).toFixed(3) + "em"
          , He = new s0([Q],{
            width: de,
            height: ke,
            viewBox: "0 0 " + b + " " + le
        })
          , qe = T.makeSvgSpan([], [He], s);
        qe.height = le / 1e3,
        qe.style.width = de,
        qe.style.height = ke,
        Ae.push({
            type: "elem",
            elem: qe
        })
    } else {
        if (Ae.push(Da(m, g, n)),
        Ae.push(Or),
        u === null) {
            var Qe = se - M - C + 2 * Ms;
            Ae.push(Fa(d, Qe, s))
        } else {
            var ze = (se - M - C - L) / 2 + 2 * Ms;
            Ae.push(Fa(d, ze, s)),
            Ae.push(Or),
            Ae.push(Da(u, g, n)),
            Ae.push(Or),
            Ae.push(Fa(d, ze, s))
        }
        Ae.push(Or),
        Ae.push(Da(l, g, n))
    }
    var Xe = s.havingBaseStyle(re.TEXT)
      , Nt = T.makeVList({
        positionType: "bottom",
        positionData: Be,
        children: Ae
    }, Xe);
    return en(T.makeSpan(["delimsizing", "mult"], [Nt], Xe), re.TEXT, s, i)
}
  , _a = 80
  , $a = .08
  , Pa = function(e, t, a, s, n) {
    var i = h5(e, s, a)
      , l = new g0(e,i)
      , u = new s0([l],{
        width: "400em",
        height: H(t),
        viewBox: "0 0 400000 " + a,
        preserveAspectRatio: "xMinYMin slice"
    });
    return T.makeSvgSpan(["hide-tail"], [u], n)
}
  , d6 = function(e, t) {
    var a = t.havingBaseSizing(), s = Pl("\\surd", e * a.sizeMultiplier, $l, a), n = a.sizeMultiplier, i = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), l, u = 0, d = 0, m = 0, f;
    return s.type === "small" ? (m = 1e3 + 1e3 * i + _a,
    e < 1 ? n = 1 : e < 1.4 && (n = .7),
    u = (1 + i + $a) / n,
    d = (1 + i) / n,
    l = Pa("sqrtMain", u, m, i, t),
    l.style.minWidth = "0.853em",
    f = .833 / n) : s.type === "large" ? (m = (1e3 + _a) * ir[s.size],
    d = (ir[s.size] + i) / n,
    u = (ir[s.size] + i + $a) / n,
    l = Pa("sqrtSize" + s.size, u, m, i, t),
    l.style.minWidth = "1.02em",
    f = 1 / n) : (u = e + i + $a,
    d = e + i,
    m = Math.floor(1e3 * e + i) + _a,
    l = Pa("sqrtTall", u, m, i, t),
    l.style.minWidth = "0.742em",
    f = 1.056),
    l.height = d,
    l.style.height = H(u),
    {
        span: l,
        advanceWidth: f,
        ruleWidth: (t.fontMetrics().sqrtRuleThickness + i) * n
    }
}
  , Fl = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]
  , h6 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]
  , _l = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]
  , ir = [0, 1.2, 1.8, 2.4, 3]
  , m6 = function(e, t, a, s, n) {
    if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"),
    ee.contains(Fl, e) || ee.contains(_l, e))
        return Nl(e, t, !1, a, s, n);
    if (ee.contains(h6, e))
        return Dl(e, ir[t], !1, a, s, n);
    throw new $("Illegal delimiter: '" + e + "'")
}
  , p6 = [{
    type: "small",
    style: re.SCRIPTSCRIPT
}, {
    type: "small",
    style: re.SCRIPT
}, {
    type: "small",
    style: re.TEXT
}, {
    type: "large",
    size: 1
}, {
    type: "large",
    size: 2
}, {
    type: "large",
    size: 3
}, {
    type: "large",
    size: 4
}]
  , f6 = [{
    type: "small",
    style: re.SCRIPTSCRIPT
}, {
    type: "small",
    style: re.SCRIPT
}, {
    type: "small",
    style: re.TEXT
}, {
    type: "stack"
}]
  , $l = [{
    type: "small",
    style: re.SCRIPTSCRIPT
}, {
    type: "small",
    style: re.SCRIPT
}, {
    type: "small",
    style: re.TEXT
}, {
    type: "large",
    size: 1
}, {
    type: "large",
    size: 2
}, {
    type: "large",
    size: 3
}, {
    type: "large",
    size: 4
}, {
    type: "stack"
}]
  , v6 = function(e) {
    if (e.type === "small")
        return "Main-Regular";
    if (e.type === "large")
        return "Size" + e.size + "-Regular";
    if (e.type === "stack")
        return "Size4-Regular";
    throw new Error("Add support for delim type '" + e.type + "' here.")
}
  , Pl = function(e, t, a, s) {
    for (var n = Math.min(2, 3 - s.style.size), i = n; i < a.length && a[i].type !== "stack"; i++) {
        var l = ar(e, v6(a[i]), "math")
          , u = l.height + l.depth;
        if (a[i].type === "small") {
            var d = s.havingBaseStyle(a[i].style);
            u *= d.sizeMultiplier
        }
        if (u > t)
            return a[i]
    }
    return a[a.length - 1]
}
  , Hl = function(e, t, a, s, n, i) {
    e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
    var l;
    ee.contains(_l, e) ? l = p6 : ee.contains(Fl, e) ? l = $l : l = f6;
    var u = Pl(e, t, l, s);
    return u.type === "small" ? o6(e, u.style, a, s, n, i) : u.type === "large" ? Nl(e, u.size, a, s, n, i) : Dl(e, t, a, s, n, i)
}
  , g6 = function(e, t, a, s, n, i) {
    var l = s.fontMetrics().axisHeight * s.sizeMultiplier
      , u = 901
      , d = 5 / s.fontMetrics().ptPerEm
      , m = Math.max(t - l, a + l)
      , f = Math.max(m / 500 * u, 2 * m - d);
    return Hl(e, f, !0, s, n, i)
}
  , a0 = {
    sqrtImage: d6,
    sizedDelim: m6,
    sizeToMaxHeight: ir,
    customSizedDelim: Hl,
    leftRightDelim: g6
}
  , mi = {
    "\\bigl": {
        mclass: "mopen",
        size: 1
    },
    "\\Bigl": {
        mclass: "mopen",
        size: 2
    },
    "\\biggl": {
        mclass: "mopen",
        size: 3
    },
    "\\Biggl": {
        mclass: "mopen",
        size: 4
    },
    "\\bigr": {
        mclass: "mclose",
        size: 1
    },
    "\\Bigr": {
        mclass: "mclose",
        size: 2
    },
    "\\biggr": {
        mclass: "mclose",
        size: 3
    },
    "\\Biggr": {
        mclass: "mclose",
        size: 4
    },
    "\\bigm": {
        mclass: "mrel",
        size: 1
    },
    "\\Bigm": {
        mclass: "mrel",
        size: 2
    },
    "\\biggm": {
        mclass: "mrel",
        size: 3
    },
    "\\Biggm": {
        mclass: "mrel",
        size: 4
    },
    "\\big": {
        mclass: "mord",
        size: 1
    },
    "\\Big": {
        mclass: "mord",
        size: 2
    },
    "\\bigg": {
        mclass: "mord",
        size: 3
    },
    "\\Bigg": {
        mclass: "mord",
        size: 4
    }
}
  , y6 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function xa(r, e) {
    var t = ba(r);
    if (t && ee.contains(y6, t.text))
        return t;
    throw t ? new $("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'",r) : new $("Invalid delimiter type '" + r.type + "'",r)
}
G({
    type: "delimsizing",
    names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
    props: {
        numArgs: 1,
        argTypes: ["primitive"]
    },
    handler: (r, e) => {
        var t = xa(e[0], r);
        return {
            type: "delimsizing",
            mode: r.parser.mode,
            size: mi[r.funcName].size,
            mclass: mi[r.funcName].mclass,
            delim: t.text
        }
    }
    ,
    htmlBuilder: (r, e) => r.delim === "." ? T.makeSpan([r.mclass]) : a0.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
    mathmlBuilder: r => {
        var e = [];
        r.delim !== "." && e.push(Ot(r.delim, r.mode));
        var t = new F.MathNode("mo",e);
        r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"),
        t.setAttribute("stretchy", "true");
        var a = H(a0.sizeToMaxHeight[r.size]);
        return t.setAttribute("minsize", a),
        t.setAttribute("maxsize", a),
        t
    }
});
function pi(r) {
    if (!r.body)
        throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
}
G({
    type: "leftright-right",
    names: ["\\right"],
    props: {
        numArgs: 1,
        primitive: !0
    },
    handler: (r, e) => {
        var t = r.parser.gullet.macros.get("\\current@color");
        if (t && typeof t != "string")
            throw new $("\\current@color set to non-string in \\right");
        return {
            type: "leftright-right",
            mode: r.parser.mode,
            delim: xa(e[0], r).text,
            color: t
        }
    }
});
G({
    type: "leftright",
    names: ["\\left"],
    props: {
        numArgs: 1,
        primitive: !0
    },
    handler: (r, e) => {
        var t = xa(e[0], r)
          , a = r.parser;
        ++a.leftrightDepth;
        var s = a.parseExpression(!1);
        --a.leftrightDepth,
        a.expect("\\right", !1);
        var n = fe(a.parseFunction(), "leftright-right");
        return {
            type: "leftright",
            mode: a.mode,
            body: s,
            left: t.text,
            right: n.delim,
            rightColor: n.color
        }
    }
    ,
    htmlBuilder: (r, e) => {
        pi(r);
        for (var t = at(r.body, e, !0, ["mopen", "mclose"]), a = 0, s = 0, n = !1, i = 0; i < t.length; i++)
            t[i].isMiddle ? n = !0 : (a = Math.max(t[i].height, a),
            s = Math.max(t[i].depth, s));
        a *= e.sizeMultiplier,
        s *= e.sizeMultiplier;
        var l;
        if (r.left === "." ? l = vr(e, ["mopen"]) : l = a0.leftRightDelim(r.left, a, s, e, r.mode, ["mopen"]),
        t.unshift(l),
        n)
            for (var u = 1; u < t.length; u++) {
                var d = t[u]
                  , m = d.isMiddle;
                m && (t[u] = a0.leftRightDelim(m.delim, a, s, m.options, r.mode, []))
            }
        var f;
        if (r.right === ".")
            f = vr(e, ["mclose"]);
        else {
            var b = r.rightColor ? e.withColor(r.rightColor) : e;
            f = a0.leftRightDelim(r.right, a, s, b, r.mode, ["mclose"])
        }
        return t.push(f),
        T.makeSpan(["minner"], t, e)
    }
    ,
    mathmlBuilder: (r, e) => {
        pi(r);
        var t = wt(r.body, e);
        if (r.left !== ".") {
            var a = new F.MathNode("mo",[Ot(r.left, r.mode)]);
            a.setAttribute("fence", "true"),
            t.unshift(a)
        }
        if (r.right !== ".") {
            var s = new F.MathNode("mo",[Ot(r.right, r.mode)]);
            s.setAttribute("fence", "true"),
            r.rightColor && s.setAttribute("mathcolor", r.rightColor),
            t.push(s)
        }
        return Ys(t)
    }
});
G({
    type: "middle",
    names: ["\\middle"],
    props: {
        numArgs: 1,
        primitive: !0
    },
    handler: (r, e) => {
        var t = xa(e[0], r);
        if (!r.parser.leftrightDepth)
            throw new $("\\middle without preceding \\left",t);
        return {
            type: "middle",
            mode: r.parser.mode,
            delim: t.text
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t;
        if (r.delim === ".")
            t = vr(e, []);
        else {
            t = a0.sizedDelim(r.delim, 1, e, r.mode, []);
            var a = {
                delim: r.delim,
                options: e
            };
            t.isMiddle = a
        }
        return t
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = r.delim === "\\vert" || r.delim === "|" ? Ot("|", "text") : Ot(r.delim, r.mode)
          , a = new F.MathNode("mo",[t]);
        return a.setAttribute("fence", "true"),
        a.setAttribute("lspace", "0.05em"),
        a.setAttribute("rspace", "0.05em"),
        a
    }
});
var tn = (r, e) => {
    var t = T.wrapFragment(Se(r.body, e), e), a = r.label.slice(1), s = e.sizeMultiplier, n, i = 0, l = ee.isCharacterBox(r.body);
    if (a === "sout")
        n = T.makeSpan(["stretchy", "sout"]),
        n.height = e.fontMetrics().defaultRuleThickness / s,
        i = -.5 * e.fontMetrics().xHeight;
    else if (a === "phase") {
        var u = je({
            number: .6,
            unit: "pt"
        }, e)
          , d = je({
            number: .35,
            unit: "ex"
        }, e)
          , m = e.havingBaseSizing();
        s = s / m.sizeMultiplier;
        var f = t.height + t.depth + u + d;
        t.style.paddingLeft = H(f / 2 + u);
        var b = Math.floor(1e3 * f * s)
          , g = u5(b)
          , w = new s0([new g0("phase",g)],{
            width: "400em",
            height: H(b / 1e3),
            viewBox: "0 0 400000 " + b,
            preserveAspectRatio: "xMinYMin slice"
        });
        n = T.makeSvgSpan(["hide-tail"], [w], e),
        n.style.height = H(f),
        i = t.depth + u + d
    } else {
        /cancel/.test(a) ? l || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
        var M = 0
          , E = 0
          , R = 0;
        /box/.test(a) ? (R = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness),
        M = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : R),
        E = M) : a === "angl" ? (R = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness),
        M = 4 * R,
        E = Math.max(0, .25 - t.depth)) : (M = l ? .2 : 0,
        E = M),
        n = i0.encloseSpan(t, a, M, E, e),
        /fbox|boxed|fcolorbox/.test(a) ? (n.style.borderStyle = "solid",
        n.style.borderWidth = H(R)) : a === "angl" && R !== .049 && (n.style.borderTopWidth = H(R),
        n.style.borderRightWidth = H(R)),
        i = t.depth + E,
        r.backgroundColor && (n.style.backgroundColor = r.backgroundColor,
        r.borderColor && (n.style.borderColor = r.borderColor))
    }
    var N;
    if (r.backgroundColor)
        N = T.makeVList({
            positionType: "individualShift",
            children: [{
                type: "elem",
                elem: n,
                shift: i
            }, {
                type: "elem",
                elem: t,
                shift: 0
            }]
        }, e);
    else {
        var C = /cancel|phase/.test(a) ? ["svg-align"] : [];
        N = T.makeVList({
            positionType: "individualShift",
            children: [{
                type: "elem",
                elem: t,
                shift: 0
            }, {
                type: "elem",
                elem: n,
                shift: i,
                wrapperClasses: C
            }]
        }, e)
    }
    return /cancel/.test(a) && (N.height = t.height,
    N.depth = t.depth),
    /cancel/.test(a) && !l ? T.makeSpan(["mord", "cancel-lap"], [N], e) : T.makeSpan(["mord"], [N], e)
}
  , rn = (r, e) => {
    var t = 0
      , a = new F.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose",[_e(r.body, e)]);
    switch (r.label) {
    case "\\cancel":
        a.setAttribute("notation", "updiagonalstrike");
        break;
    case "\\bcancel":
        a.setAttribute("notation", "downdiagonalstrike");
        break;
    case "\\phase":
        a.setAttribute("notation", "phasorangle");
        break;
    case "\\sout":
        a.setAttribute("notation", "horizontalstrike");
        break;
    case "\\fbox":
        a.setAttribute("notation", "box");
        break;
    case "\\angl":
        a.setAttribute("notation", "actuarial");
        break;
    case "\\fcolorbox":
    case "\\colorbox":
        if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm,
        a.setAttribute("width", "+" + 2 * t + "pt"),
        a.setAttribute("height", "+" + 2 * t + "pt"),
        a.setAttribute("lspace", t + "pt"),
        a.setAttribute("voffset", t + "pt"),
        r.label === "\\fcolorbox") {
            var s = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
            a.setAttribute("style", "border: " + s + "em solid " + String(r.borderColor))
        }
        break;
    case "\\xcancel":
        a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        break
    }
    return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor),
    a
}
;
G({
    type: "enclose",
    names: ["\\colorbox"],
    props: {
        numArgs: 2,
        allowedInText: !0,
        argTypes: ["color", "text"]
    },
    handler(r, e, t) {
        var {parser: a, funcName: s} = r
          , n = fe(e[0], "color-token").color
          , i = e[1];
        return {
            type: "enclose",
            mode: a.mode,
            label: s,
            backgroundColor: n,
            body: i
        }
    },
    htmlBuilder: tn,
    mathmlBuilder: rn
});
G({
    type: "enclose",
    names: ["\\fcolorbox"],
    props: {
        numArgs: 3,
        allowedInText: !0,
        argTypes: ["color", "color", "text"]
    },
    handler(r, e, t) {
        var {parser: a, funcName: s} = r
          , n = fe(e[0], "color-token").color
          , i = fe(e[1], "color-token").color
          , l = e[2];
        return {
            type: "enclose",
            mode: a.mode,
            label: s,
            backgroundColor: i,
            borderColor: n,
            body: l
        }
    },
    htmlBuilder: tn,
    mathmlBuilder: rn
});
G({
    type: "enclose",
    names: ["\\fbox"],
    props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "enclose",
            mode: t.mode,
            label: "\\fbox",
            body: e[0]
        }
    }
});
G({
    type: "enclose",
    names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "enclose",
            mode: t.mode,
            label: a,
            body: s
        }
    },
    htmlBuilder: tn,
    mathmlBuilder: rn
});
G({
    type: "enclose",
    names: ["\\angl"],
    props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: !1
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "enclose",
            mode: t.mode,
            label: "\\angl",
            body: e[0]
        }
    }
});
var ql = {};
function Wt(r) {
    for (var {type: e, names: t, props: a, handler: s, htmlBuilder: n, mathmlBuilder: i} = r, l = {
        type: e,
        numArgs: a.numArgs || 0,
        allowedInText: !1,
        numOptionalArgs: 0,
        handler: s
    }, u = 0; u < t.length; ++u)
        ql[t[u]] = l;
    n && (sa[e] = n),
    i && (na[e] = i)
}
var Ql = {};
function p(r, e) {
    Ql[r] = e
}
function fi(r) {
    var e = [];
    r.consumeSpaces();
    var t = r.fetch().text;
    for (t === "\\relax" && (r.consume(),
    r.consumeSpaces(),
    t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
        r.consume(),
        e.push(t === "\\hdashline"),
        r.consumeSpaces(),
        t = r.fetch().text;
    return e
}
var ka = r => {
    var e = r.parser.settings;
    if (!e.displayMode)
        throw new $("{" + r.envName + "} can be used only in display mode.")
}
;
function an(r) {
    if (r.indexOf("ed") === -1)
        return r.indexOf("*") === -1
}
function A0(r, e, t) {
    var {hskipBeforeAndAfter: a, addJot: s, cols: n, arraystretch: i, colSeparationType: l, autoTag: u, singleRow: d, emptySingleRow: m, maxNumCols: f, leqno: b} = e;
    if (r.gullet.beginGroup(),
    d || r.gullet.macros.set("\\cr", "\\\\\\relax"),
    !i) {
        var g = r.gullet.expandMacroAsText("\\arraystretch");
        if (g == null)
            i = 1;
        else if (i = parseFloat(g),
        !i || i < 0)
            throw new $("Invalid \\arraystretch: " + g)
    }
    r.gullet.beginGroup();
    var w = []
      , M = [w]
      , E = []
      , R = []
      , N = u != null ? [] : void 0;
    function C() {
        u && r.gullet.macros.set("\\@eqnsw", "1", !0)
    }
    function L() {
        N && (r.gullet.macros.get("\\df@tag") ? (N.push(r.subparse([new Bt("\\df@tag")])),
        r.gullet.macros.set("\\df@tag", void 0, !0)) : N.push(!!u && r.gullet.macros.get("\\@eqnsw") === "1"))
    }
    for (C(),
    R.push(fi(r)); ; ) {
        var D = r.parseExpression(!1, d ? "\\end" : "\\\\");
        r.gullet.endGroup(),
        r.gullet.beginGroup(),
        D = {
            type: "ordgroup",
            mode: r.mode,
            body: D
        },
        t && (D = {
            type: "styling",
            mode: r.mode,
            style: t,
            body: [D]
        }),
        w.push(D);
        var _ = r.fetch().text;
        if (_ === "&") {
            if (f && w.length === f) {
                if (d || l)
                    throw new $("Too many tab characters: &",r.nextToken);
                r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.")
            }
            r.consume()
        } else if (_ === "\\end") {
            L(),
            w.length === 1 && D.type === "styling" && D.body[0].body.length === 0 && (M.length > 1 || !m) && M.pop(),
            R.length < M.length + 1 && R.push([]);
            break
        } else if (_ === "\\\\") {
            r.consume();
            var q = void 0;
            r.gullet.future().text !== " " && (q = r.parseSizeGroup(!0)),
            E.push(q ? q.value : null),
            L(),
            R.push(fi(r)),
            w = [],
            M.push(w),
            C()
        } else
            throw new $("Expected & or \\\\ or \\cr or \\end",r.nextToken)
    }
    return r.gullet.endGroup(),
    r.gullet.endGroup(),
    {
        type: "array",
        mode: r.mode,
        addJot: s,
        arraystretch: i,
        body: M,
        cols: n,
        rowGaps: E,
        hskipBeforeAndAfter: a,
        hLinesBeforeRow: R,
        colSeparationType: l,
        tags: N,
        leqno: b
    }
}
function sn(r) {
    return r.slice(0, 1) === "d" ? "display" : "text"
}
var Kt = function(e, t) {
    var a, s, n = e.body.length, i = e.hLinesBeforeRow, l = 0, u = new Array(n), d = [], m = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), f = 1 / t.fontMetrics().ptPerEm, b = 5 * f;
    if (e.colSeparationType && e.colSeparationType === "small") {
        var g = t.havingStyle(re.SCRIPT).sizeMultiplier;
        b = .2778 * (g / t.sizeMultiplier)
    }
    var w = e.colSeparationType === "CD" ? je({
        number: 3,
        unit: "ex"
    }, t) : 12 * f
      , M = 3 * f
      , E = e.arraystretch * w
      , R = .7 * E
      , N = .3 * E
      , C = 0;
    function L(Dt) {
        for (var Ct = 0; Ct < Dt.length; ++Ct)
            Ct > 0 && (C += .25),
            d.push({
                pos: C,
                isDashed: Dt[Ct]
            })
    }
    for (L(i[0]),
    a = 0; a < e.body.length; ++a) {
        var D = e.body[a]
          , _ = R
          , q = N;
        l < D.length && (l = D.length);
        var j = new Array(D.length);
        for (s = 0; s < D.length; ++s) {
            var se = Se(D[s], t);
            q < se.depth && (q = se.depth),
            _ < se.height && (_ = se.height),
            j[s] = se
        }
        var Ee = e.rowGaps[a]
          , Be = 0;
        Ee && (Be = je(Ee, t),
        Be > 0 && (Be += N,
        q < Be && (q = Be),
        Be = 0)),
        e.addJot && (q += M),
        j.height = _,
        j.depth = q,
        C += _,
        j.pos = C,
        C += q + Be,
        u[a] = j,
        L(i[a + 1])
    }
    var Ae = C / 2 + t.fontMetrics().axisHeight, ne = e.cols || [], le = [], ce, Q, de = [];
    if (e.tags && e.tags.some(Dt => Dt))
        for (a = 0; a < n; ++a) {
            var ke = u[a]
              , He = ke.pos - Ae
              , qe = e.tags[a]
              , Qe = void 0;
            qe === !0 ? Qe = T.makeSpan(["eqn-num"], [], t) : qe === !1 ? Qe = T.makeSpan([], [], t) : Qe = T.makeSpan([], at(qe, t, !0), t),
            Qe.depth = ke.depth,
            Qe.height = ke.height,
            de.push({
                type: "elem",
                elem: Qe,
                shift: He
            })
        }
    for (s = 0,
    Q = 0; s < l || Q < ne.length; ++s,
    ++Q) {
        for (var ze = ne[Q] || {}, Xe = !0; ze.type === "separator"; ) {
            if (Xe || (ce = T.makeSpan(["arraycolsep"], []),
            ce.style.width = H(t.fontMetrics().doubleRuleSep),
            le.push(ce)),
            ze.separator === "|" || ze.separator === ":") {
                var Nt = ze.separator === "|" ? "solid" : "dashed"
                  , ot = T.makeSpan(["vertical-separator"], [], t);
                ot.style.height = H(C),
                ot.style.borderRightWidth = H(m),
                ot.style.borderRightStyle = Nt,
                ot.style.margin = "0 " + H(-m / 2);
                var K = C - Ae;
                K && (ot.style.verticalAlign = H(-K)),
                le.push(ot)
            } else
                throw new $("Invalid separator type: " + ze.separator);
            Q++,
            ze = ne[Q] || {},
            Xe = !1
        }
        if (!(s >= l)) {
            var De = void 0;
            (s > 0 || e.hskipBeforeAndAfter) && (De = ee.deflt(ze.pregap, b),
            De !== 0 && (ce = T.makeSpan(["arraycolsep"], []),
            ce.style.width = H(De),
            le.push(ce)));
            var Me = [];
            for (a = 0; a < n; ++a) {
                var Ue = u[a]
                  , tt = Ue[s];
                if (tt) {
                    var lt = Ue.pos - Ae;
                    tt.depth = Ue.depth,
                    tt.height = Ue.height,
                    Me.push({
                        type: "elem",
                        elem: tt,
                        shift: lt
                    })
                }
            }
            Me = T.makeVList({
                positionType: "individualShift",
                children: Me
            }, t),
            Me = T.makeSpan(["col-align-" + (ze.align || "c")], [Me]),
            le.push(Me),
            (s < l - 1 || e.hskipBeforeAndAfter) && (De = ee.deflt(ze.postgap, b),
            De !== 0 && (ce = T.makeSpan(["arraycolsep"], []),
            ce.style.width = H(De),
            le.push(ce)))
        }
    }
    if (u = T.makeSpan(["mtable"], le),
    d.length > 0) {
        for (var gt = T.makeLineSpan("hline", t, m), he = T.makeLineSpan("hdashline", t, m), ve = [{
            type: "elem",
            elem: u,
            shift: 0
        }]; d.length > 0; ) {
            var rt = d.pop()
              , ct = rt.pos - Ae;
            rt.isDashed ? ve.push({
                type: "elem",
                elem: he,
                shift: ct
            }) : ve.push({
                type: "elem",
                elem: gt,
                shift: ct
            })
        }
        u = T.makeVList({
            positionType: "individualShift",
            children: ve
        }, t)
    }
    if (de.length === 0)
        return T.makeSpan(["mord"], [u], t);
    var yt = T.makeVList({
        positionType: "individualShift",
        children: de
    }, t);
    return yt = T.makeSpan(["tag"], [yt], t),
    T.makeFragment([u, yt])
}
  , A6 = {
    c: "center ",
    l: "left ",
    r: "right "
}
  , Yt = function(e, t) {
    for (var a = [], s = new F.MathNode("mtd",[],["mtr-glue"]), n = new F.MathNode("mtd",[],["mml-eqn-num"]), i = 0; i < e.body.length; i++) {
        for (var l = e.body[i], u = [], d = 0; d < l.length; d++)
            u.push(new F.MathNode("mtd",[_e(l[d], t)]));
        e.tags && e.tags[i] && (u.unshift(s),
        u.push(s),
        e.leqno ? u.unshift(n) : u.push(n)),
        a.push(new F.MathNode("mtr",u))
    }
    var m = new F.MathNode("mtable",a)
      , f = e.arraystretch === .5 ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
    m.setAttribute("rowspacing", H(f));
    var b = ""
      , g = "";
    if (e.cols && e.cols.length > 0) {
        var w = e.cols
          , M = ""
          , E = !1
          , R = 0
          , N = w.length;
        w[0].type === "separator" && (b += "top ",
        R = 1),
        w[w.length - 1].type === "separator" && (b += "bottom ",
        N -= 1);
        for (var C = R; C < N; C++)
            w[C].type === "align" ? (g += A6[w[C].align],
            E && (M += "none "),
            E = !0) : w[C].type === "separator" && E && (M += w[C].separator === "|" ? "solid " : "dashed ",
            E = !1);
        m.setAttribute("columnalign", g.trim()),
        /[sd]/.test(M) && m.setAttribute("columnlines", M.trim())
    }
    if (e.colSeparationType === "align") {
        for (var L = e.cols || [], D = "", _ = 1; _ < L.length; _++)
            D += _ % 2 ? "0em " : "1em ";
        m.setAttribute("columnspacing", D.trim())
    } else
        e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
    var q = ""
      , j = e.hLinesBeforeRow;
    b += j[0].length > 0 ? "left " : "",
    b += j[j.length - 1].length > 0 ? "right " : "";
    for (var se = 1; se < j.length - 1; se++)
        q += j[se].length === 0 ? "none " : j[se][0] ? "dashed " : "solid ";
    return /[sd]/.test(q) && m.setAttribute("rowlines", q.trim()),
    b !== "" && (m = new F.MathNode("menclose",[m]),
    m.setAttribute("notation", b.trim())),
    e.arraystretch && e.arraystretch < 1 && (m = new F.MathNode("mstyle",[m]),
    m.setAttribute("scriptlevel", "1")),
    m
}
  , Gl = function(e, t) {
    e.envName.indexOf("ed") === -1 && ka(e);
    var a = [], s = e.envName.indexOf("at") > -1 ? "alignat" : "align", n = e.envName === "split", i = A0(e.parser, {
        cols: a,
        addJot: !0,
        autoTag: n ? void 0 : an(e.envName),
        emptySingleRow: !0,
        colSeparationType: s,
        maxNumCols: n ? 2 : void 0,
        leqno: e.parser.settings.leqno
    }, "display"), l, u = 0, d = {
        type: "ordgroup",
        mode: e.mode,
        body: []
    };
    if (t[0] && t[0].type === "ordgroup") {
        for (var m = "", f = 0; f < t[0].body.length; f++) {
            var b = fe(t[0].body[f], "textord");
            m += b.text
        }
        l = Number(m),
        u = l * 2
    }
    var g = !u;
    i.body.forEach(function(R) {
        for (var N = 1; N < R.length; N += 2) {
            var C = fe(R[N], "styling")
              , L = fe(C.body[0], "ordgroup");
            L.body.unshift(d)
        }
        if (g)
            u < R.length && (u = R.length);
        else {
            var D = R.length / 2;
            if (l < D)
                throw new $("Too many math in a row: " + ("expected " + l + ", but got " + D),R[0])
        }
    });
    for (var w = 0; w < u; ++w) {
        var M = "r"
          , E = 0;
        w % 2 === 1 ? M = "l" : w > 0 && g && (E = 1),
        a[w] = {
            type: "align",
            align: M,
            pregap: E,
            postgap: 0
        }
    }
    return i.colSeparationType = g ? "align" : "alignat",
    i
};
Wt({
    type: "array",
    names: ["array", "darray"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var t = ba(e[0])
          , a = t ? [e[0]] : fe(e[0], "ordgroup").body
          , s = a.map(function(i) {
            var l = Zs(i)
              , u = l.text;
            if ("lcr".indexOf(u) !== -1)
                return {
                    type: "align",
                    align: u
                };
            if (u === "|")
                return {
                    type: "separator",
                    separator: "|"
                };
            if (u === ":")
                return {
                    type: "separator",
                    separator: ":"
                };
            throw new $("Unknown column alignment: " + u,i)
        })
          , n = {
            cols: s,
            hskipBeforeAndAfter: !0,
            maxNumCols: s.length
        };
        return A0(r.parser, n, sn(r.envName))
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var e = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
        }[r.envName.replace("*", "")]
          , t = "c"
          , a = {
            hskipBeforeAndAfter: !1,
            cols: [{
                type: "align",
                align: t
            }]
        };
        if (r.envName.charAt(r.envName.length - 1) === "*") {
            var s = r.parser;
            if (s.consumeSpaces(),
            s.fetch().text === "[") {
                if (s.consume(),
                s.consumeSpaces(),
                t = s.fetch().text,
                "lcr".indexOf(t) === -1)
                    throw new $("Expected l or c or r",s.nextToken);
                s.consume(),
                s.consumeSpaces(),
                s.expect("]"),
                s.consume(),
                a.cols = [{
                    type: "align",
                    align: t
                }]
            }
        }
        var n = A0(r.parser, a, sn(r.envName))
          , i = Math.max(0, ...n.body.map(l => l.length));
        return n.cols = new Array(i).fill({
            type: "align",
            align: t
        }),
        e ? {
            type: "leftright",
            mode: r.mode,
            body: [n],
            left: e[0],
            right: e[1],
            rightColor: void 0
        } : n
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["smallmatrix"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var e = {
            arraystretch: .5
        }
          , t = A0(r.parser, e, "script");
        return t.colSeparationType = "small",
        t
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["subarray"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var t = ba(e[0])
          , a = t ? [e[0]] : fe(e[0], "ordgroup").body
          , s = a.map(function(i) {
            var l = Zs(i)
              , u = l.text;
            if ("lc".indexOf(u) !== -1)
                return {
                    type: "align",
                    align: u
                };
            throw new $("Unknown column alignment: " + u,i)
        });
        if (s.length > 1)
            throw new $("{subarray} can contain only one column");
        var n = {
            cols: s,
            hskipBeforeAndAfter: !1,
            arraystretch: .5
        };
        if (n = A0(r.parser, n, "script"),
        n.body.length > 0 && n.body[0].length > 1)
            throw new $("{subarray} can contain only one column");
        return n
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["cases", "dcases", "rcases", "drcases"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var e = {
            arraystretch: 1.2,
            cols: [{
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 1
            }, {
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 0
            }]
        }
          , t = A0(r.parser, e, sn(r.envName));
        return {
            type: "leftright",
            mode: r.mode,
            body: [t],
            left: r.envName.indexOf("r") > -1 ? "." : "\\{",
            right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
            rightColor: void 0
        }
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["align", "align*", "aligned", "split"],
    props: {
        numArgs: 0
    },
    handler: Gl,
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["gathered", "gather", "gather*"],
    props: {
        numArgs: 0
    },
    handler(r) {
        ee.contains(["gather", "gather*"], r.envName) && ka(r);
        var e = {
            cols: [{
                type: "align",
                align: "c"
            }],
            addJot: !0,
            colSeparationType: "gather",
            autoTag: an(r.envName),
            emptySingleRow: !0,
            leqno: r.parser.settings.leqno
        };
        return A0(r.parser, e, "display")
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["alignat", "alignat*", "alignedat"],
    props: {
        numArgs: 1
    },
    handler: Gl,
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["equation", "equation*"],
    props: {
        numArgs: 0
    },
    handler(r) {
        ka(r);
        var e = {
            autoTag: an(r.envName),
            emptySingleRow: !0,
            singleRow: !0,
            maxNumCols: 1,
            leqno: r.parser.settings.leqno
        };
        return A0(r.parser, e, "display")
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
Wt({
    type: "array",
    names: ["CD"],
    props: {
        numArgs: 0
    },
    handler(r) {
        return ka(r),
        n6(r.parser)
    },
    htmlBuilder: Kt,
    mathmlBuilder: Yt
});
p("\\nonumber", "\\gdef\\@eqnsw{0}");
p("\\notag", "\\nonumber");
G({
    type: "text",
    names: ["\\hline", "\\hdashline"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        allowedInMath: !0
    },
    handler(r, e) {
        throw new $(r.funcName + " valid only within array environment")
    }
});
var vi = ql;
G({
    type: "environment",
    names: ["\\begin", "\\end"],
    props: {
        numArgs: 1,
        argTypes: ["text"]
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r
          , s = e[0];
        if (s.type !== "ordgroup")
            throw new $("Invalid environment name",s);
        for (var n = "", i = 0; i < s.body.length; ++i)
            n += fe(s.body[i], "textord").text;
        if (a === "\\begin") {
            if (!vi.hasOwnProperty(n))
                throw new $("No such environment: " + n,s);
            var l = vi[n]
              , {args: u, optArgs: d} = t.parseArguments("\\begin{" + n + "}", l)
              , m = {
                mode: t.mode,
                envName: n,
                parser: t
            }
              , f = l.handler(m, u, d);
            t.expect("\\end", !1);
            var b = t.nextToken
              , g = fe(t.parseFunction(), "environment");
            if (g.name !== n)
                throw new $("Mismatch: \\begin{" + n + "} matched by \\end{" + g.name + "}",b);
            return f
        }
        return {
            type: "environment",
            mode: t.mode,
            name: n,
            nameGroup: s
        }
    }
});
var Ul = (r, e) => {
    var t = r.font
      , a = e.withFont(t);
    return Se(r.body, a)
}
  , Vl = (r, e) => {
    var t = r.font
      , a = e.withFont(t);
    return _e(r.body, a)
}
  , gi = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol"
};
G({
    type: "font",
    names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
    props: {
        numArgs: 1,
        allowedInArgument: !0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = ia(e[0])
          , n = a;
        return n in gi && (n = gi[n]),
        {
            type: "font",
            mode: t.mode,
            font: n.slice(1),
            body: s
        }
    }
    ,
    htmlBuilder: Ul,
    mathmlBuilder: Vl
});
G({
    type: "mclass",
    names: ["\\boldsymbol", "\\bm"],
    props: {
        numArgs: 1
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[0]
          , s = ee.isCharacterBox(a);
        return {
            type: "mclass",
            mode: t.mode,
            mclass: wa(a),
            body: [{
                type: "font",
                mode: t.mode,
                font: "boldsymbol",
                body: a
            }],
            isCharacterBox: s
        }
    }
});
G({
    type: "font",
    names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
    props: {
        numArgs: 0,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a, breakOnTokenText: s} = r
          , {mode: n} = t
          , i = t.parseExpression(!0, s)
          , l = "math" + a.slice(1);
        return {
            type: "font",
            mode: n,
            font: l,
            body: {
                type: "ordgroup",
                mode: t.mode,
                body: i
            }
        }
    }
    ,
    htmlBuilder: Ul,
    mathmlBuilder: Vl
});
var jl = (r, e) => {
    var t = e;
    return r === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : r === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : r === "script" ? t = re.SCRIPT : r === "scriptscript" && (t = re.SCRIPTSCRIPT),
    t
}
  , nn = (r, e) => {
    var t = jl(r.size, e.style), a = t.fracNum(), s = t.fracDen(), n;
    n = e.havingStyle(a);
    var i = Se(r.numer, n, e);
    if (r.continued) {
        var l = 8.5 / e.fontMetrics().ptPerEm
          , u = 3.5 / e.fontMetrics().ptPerEm;
        i.height = i.height < l ? l : i.height,
        i.depth = i.depth < u ? u : i.depth
    }
    n = e.havingStyle(s);
    var d = Se(r.denom, n, e), m, f, b;
    r.hasBarLine ? (r.barSize ? (f = je(r.barSize, e),
    m = T.makeLineSpan("frac-line", e, f)) : m = T.makeLineSpan("frac-line", e),
    f = m.height,
    b = m.height) : (m = null,
    f = 0,
    b = e.fontMetrics().defaultRuleThickness);
    var g, w, M;
    t.size === re.DISPLAY.size || r.size === "display" ? (g = e.fontMetrics().num1,
    f > 0 ? w = 3 * b : w = 7 * b,
    M = e.fontMetrics().denom1) : (f > 0 ? (g = e.fontMetrics().num2,
    w = b) : (g = e.fontMetrics().num3,
    w = 3 * b),
    M = e.fontMetrics().denom2);
    var E;
    if (m) {
        var N = e.fontMetrics().axisHeight;
        g - i.depth - (N + .5 * f) < w && (g += w - (g - i.depth - (N + .5 * f))),
        N - .5 * f - (d.height - M) < w && (M += w - (N - .5 * f - (d.height - M)));
        var C = -(N - .5 * f);
        E = T.makeVList({
            positionType: "individualShift",
            children: [{
                type: "elem",
                elem: d,
                shift: M
            }, {
                type: "elem",
                elem: m,
                shift: C
            }, {
                type: "elem",
                elem: i,
                shift: -g
            }]
        }, e)
    } else {
        var R = g - i.depth - (d.height - M);
        R < w && (g += .5 * (w - R),
        M += .5 * (w - R)),
        E = T.makeVList({
            positionType: "individualShift",
            children: [{
                type: "elem",
                elem: d,
                shift: M
            }, {
                type: "elem",
                elem: i,
                shift: -g
            }]
        }, e)
    }
    n = e.havingStyle(t),
    E.height *= n.sizeMultiplier / e.sizeMultiplier,
    E.depth *= n.sizeMultiplier / e.sizeMultiplier;
    var L;
    t.size === re.DISPLAY.size ? L = e.fontMetrics().delim1 : t.size === re.SCRIPTSCRIPT.size ? L = e.havingStyle(re.SCRIPT).fontMetrics().delim2 : L = e.fontMetrics().delim2;
    var D, _;
    return r.leftDelim == null ? D = vr(e, ["mopen"]) : D = a0.customSizedDelim(r.leftDelim, L, !0, e.havingStyle(t), r.mode, ["mopen"]),
    r.continued ? _ = T.makeSpan([]) : r.rightDelim == null ? _ = vr(e, ["mclose"]) : _ = a0.customSizedDelim(r.rightDelim, L, !0, e.havingStyle(t), r.mode, ["mclose"]),
    T.makeSpan(["mord"].concat(n.sizingClasses(e)), [D, T.makeSpan(["mfrac"], [E]), _], e)
}
  , on = (r, e) => {
    var t = new F.MathNode("mfrac",[_e(r.numer, e), _e(r.denom, e)]);
    if (!r.hasBarLine)
        t.setAttribute("linethickness", "0px");
    else if (r.barSize) {
        var a = je(r.barSize, e);
        t.setAttribute("linethickness", H(a))
    }
    var s = jl(r.size, e.style);
    if (s.size !== e.style.size) {
        t = new F.MathNode("mstyle",[t]);
        var n = s.size === re.DISPLAY.size ? "true" : "false";
        t.setAttribute("displaystyle", n),
        t.setAttribute("scriptlevel", "0")
    }
    if (r.leftDelim != null || r.rightDelim != null) {
        var i = [];
        if (r.leftDelim != null) {
            var l = new F.MathNode("mo",[new F.TextNode(r.leftDelim.replace("\\", ""))]);
            l.setAttribute("fence", "true"),
            i.push(l)
        }
        if (i.push(t),
        r.rightDelim != null) {
            var u = new F.MathNode("mo",[new F.TextNode(r.rightDelim.replace("\\", ""))]);
            u.setAttribute("fence", "true"),
            i.push(u)
        }
        return Ys(i)
    }
    return t
}
;
G({
    type: "genfrac",
    names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
    props: {
        numArgs: 2,
        allowedInArgument: !0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r, s = e[0], n = e[1], i, l = null, u = null, d = "auto";
        switch (a) {
        case "\\dfrac":
        case "\\frac":
        case "\\tfrac":
            i = !0;
            break;
        case "\\\\atopfrac":
            i = !1;
            break;
        case "\\dbinom":
        case "\\binom":
        case "\\tbinom":
            i = !1,
            l = "(",
            u = ")";
            break;
        case "\\\\bracefrac":
            i = !1,
            l = "\\{",
            u = "\\}";
            break;
        case "\\\\brackfrac":
            i = !1,
            l = "[",
            u = "]";
            break;
        default:
            throw new Error("Unrecognized genfrac command")
        }
        switch (a) {
        case "\\dfrac":
        case "\\dbinom":
            d = "display";
            break;
        case "\\tfrac":
        case "\\tbinom":
            d = "text";
            break
        }
        return {
            type: "genfrac",
            mode: t.mode,
            continued: !1,
            numer: s,
            denom: n,
            hasBarLine: i,
            leftDelim: l,
            rightDelim: u,
            size: d,
            barSize: null
        }
    }
    ,
    htmlBuilder: nn,
    mathmlBuilder: on
});
G({
    type: "genfrac",
    names: ["\\cfrac"],
    props: {
        numArgs: 2
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = e[0]
          , n = e[1];
        return {
            type: "genfrac",
            mode: t.mode,
            continued: !0,
            numer: s,
            denom: n,
            hasBarLine: !0,
            leftDelim: null,
            rightDelim: null,
            size: "display",
            barSize: null
        }
    }
});
G({
    type: "infix",
    names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
    props: {
        numArgs: 0,
        infix: !0
    },
    handler(r) {
        var {parser: e, funcName: t, token: a} = r, s;
        switch (t) {
        case "\\over":
            s = "\\frac";
            break;
        case "\\choose":
            s = "\\binom";
            break;
        case "\\atop":
            s = "\\\\atopfrac";
            break;
        case "\\brace":
            s = "\\\\bracefrac";
            break;
        case "\\brack":
            s = "\\\\brackfrac";
            break;
        default:
            throw new Error("Unrecognized infix genfrac command")
        }
        return {
            type: "infix",
            mode: e.mode,
            replaceWith: s,
            token: a
        }
    }
});
var yi = ["display", "text", "script", "scriptscript"]
  , Ai = function(e) {
    var t = null;
    return e.length > 0 && (t = e,
    t = t === "." ? null : t),
    t
};
G({
    type: "genfrac",
    names: ["\\genfrac"],
    props: {
        numArgs: 6,
        allowedInArgument: !0,
        argTypes: ["math", "math", "size", "text", "math", "math"]
    },
    handler(r, e) {
        var {parser: t} = r, a = e[4], s = e[5], n = ia(e[0]), i = n.type === "atom" && n.family === "open" ? Ai(n.text) : null, l = ia(e[1]), u = l.type === "atom" && l.family === "close" ? Ai(l.text) : null, d = fe(e[2], "size"), m, f = null;
        d.isBlank ? m = !0 : (f = d.value,
        m = f.number > 0);
        var b = "auto"
          , g = e[3];
        if (g.type === "ordgroup") {
            if (g.body.length > 0) {
                var w = fe(g.body[0], "textord");
                b = yi[Number(w.text)]
            }
        } else
            g = fe(g, "textord"),
            b = yi[Number(g.text)];
        return {
            type: "genfrac",
            mode: t.mode,
            numer: a,
            denom: s,
            continued: !1,
            hasBarLine: m,
            barSize: f,
            leftDelim: i,
            rightDelim: u,
            size: b
        }
    },
    htmlBuilder: nn,
    mathmlBuilder: on
});
G({
    type: "infix",
    names: ["\\above"],
    props: {
        numArgs: 1,
        argTypes: ["size"],
        infix: !0
    },
    handler(r, e) {
        var {parser: t, funcName: a, token: s} = r;
        return {
            type: "infix",
            mode: t.mode,
            replaceWith: "\\\\abovefrac",
            size: fe(e[0], "size").value,
            token: s
        }
    }
});
G({
    type: "genfrac",
    names: ["\\\\abovefrac"],
    props: {
        numArgs: 3,
        argTypes: ["math", "size", "math"]
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = e[0]
          , n = K4(fe(e[1], "infix").size)
          , i = e[2]
          , l = n.number > 0;
        return {
            type: "genfrac",
            mode: t.mode,
            numer: s,
            denom: i,
            continued: !1,
            hasBarLine: l,
            barSize: n,
            leftDelim: null,
            rightDelim: null,
            size: "auto"
        }
    }
    ,
    htmlBuilder: nn,
    mathmlBuilder: on
});
var Wl = (r, e) => {
    var t = e.style, a, s;
    r.type === "supsub" ? (a = r.sup ? Se(r.sup, e.havingStyle(t.sup()), e) : Se(r.sub, e.havingStyle(t.sub()), e),
    s = fe(r.base, "horizBrace")) : s = fe(r, "horizBrace");
    var n = Se(s.base, e.havingBaseStyle(re.DISPLAY)), i = i0.svgSpan(s, e), l;
    if (s.isOver ? (l = T.makeVList({
        positionType: "firstBaseline",
        children: [{
            type: "elem",
            elem: n
        }, {
            type: "kern",
            size: .1
        }, {
            type: "elem",
            elem: i
        }]
    }, e),
    l.children[0].children[0].children[1].classes.push("svg-align")) : (l = T.makeVList({
        positionType: "bottom",
        positionData: n.depth + .1 + i.height,
        children: [{
            type: "elem",
            elem: i
        }, {
            type: "kern",
            size: .1
        }, {
            type: "elem",
            elem: n
        }]
    }, e),
    l.children[0].children[0].children[0].classes.push("svg-align")),
    a) {
        var u = T.makeSpan(["mord", s.isOver ? "mover" : "munder"], [l], e);
        s.isOver ? l = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: u
            }, {
                type: "kern",
                size: .2
            }, {
                type: "elem",
                elem: a
            }]
        }, e) : l = T.makeVList({
            positionType: "bottom",
            positionData: u.depth + .2 + a.height + a.depth,
            children: [{
                type: "elem",
                elem: a
            }, {
                type: "kern",
                size: .2
            }, {
                type: "elem",
                elem: u
            }]
        }, e)
    }
    return T.makeSpan(["mord", s.isOver ? "mover" : "munder"], [l], e)
}
  , b6 = (r, e) => {
    var t = i0.mathMLnode(r.label);
    return new F.MathNode(r.isOver ? "mover" : "munder",[_e(r.base, e), t])
}
;
G({
    type: "horizBrace",
    names: ["\\overbrace", "\\underbrace"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r;
        return {
            type: "horizBrace",
            mode: t.mode,
            label: a,
            isOver: /^\\over/.test(a),
            base: e[0]
        }
    },
    htmlBuilder: Wl,
    mathmlBuilder: b6
});
G({
    type: "href",
    names: ["\\href"],
    props: {
        numArgs: 2,
        argTypes: ["url", "original"],
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[1]
          , s = fe(e[0], "url").url;
        return t.settings.isTrusted({
            command: "\\href",
            url: s
        }) ? {
            type: "href",
            mode: t.mode,
            href: s,
            body: Ye(a)
        } : t.formatUnsupportedCmd("\\href")
    }
    ,
    htmlBuilder: (r, e) => {
        var t = at(r.body, e, !1);
        return T.makeAnchor(r.href, [], t, e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = y0(r.body, e);
        return t instanceof kt || (t = new kt("mrow",[t])),
        t.setAttribute("href", r.href),
        t
    }
});
G({
    type: "href",
    names: ["\\url"],
    props: {
        numArgs: 1,
        argTypes: ["url"],
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = fe(e[0], "url").url;
        if (!t.settings.isTrusted({
            command: "\\url",
            url: a
        }))
            return t.formatUnsupportedCmd("\\url");
        for (var s = [], n = 0; n < a.length; n++) {
            var i = a[n];
            i === "~" && (i = "\\textasciitilde"),
            s.push({
                type: "textord",
                mode: "text",
                text: i
            })
        }
        var l = {
            type: "text",
            mode: t.mode,
            font: "\\texttt",
            body: s
        };
        return {
            type: "href",
            mode: t.mode,
            href: a,
            body: Ye(l)
        }
    }
});
G({
    type: "hbox",
    names: ["\\hbox"],
    props: {
        numArgs: 1,
        argTypes: ["text"],
        allowedInText: !0,
        primitive: !0
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "hbox",
            mode: t.mode,
            body: Ye(e[0])
        }
    },
    htmlBuilder(r, e) {
        var t = at(r.body, e, !1);
        return T.makeFragment(t)
    },
    mathmlBuilder(r, e) {
        return new F.MathNode("mrow",wt(r.body, e))
    }
});
G({
    type: "html",
    names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
    props: {
        numArgs: 2,
        argTypes: ["raw", "original"],
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a, token: s} = r
          , n = fe(e[0], "raw").string
          , i = e[1];
        t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        var l, u = {};
        switch (a) {
        case "\\htmlClass":
            u.class = n,
            l = {
                command: "\\htmlClass",
                class: n
            };
            break;
        case "\\htmlId":
            u.id = n,
            l = {
                command: "\\htmlId",
                id: n
            };
            break;
        case "\\htmlStyle":
            u.style = n,
            l = {
                command: "\\htmlStyle",
                style: n
            };
            break;
        case "\\htmlData":
            {
                for (var d = n.split(","), m = 0; m < d.length; m++) {
                    var f = d[m].split("=");
                    if (f.length !== 2)
                        throw new $("Error parsing key-value for \\htmlData");
                    u["data-" + f[0].trim()] = f[1].trim()
                }
                l = {
                    command: "\\htmlData",
                    attributes: u
                };
                break
            }
        default:
            throw new Error("Unrecognized html command")
        }
        return t.settings.isTrusted(l) ? {
            type: "html",
            mode: t.mode,
            attributes: u,
            body: Ye(i)
        } : t.formatUnsupportedCmd(a)
    }
    ,
    htmlBuilder: (r, e) => {
        var t = at(r.body, e, !1)
          , a = ["enclosing"];
        r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
        var s = T.makeSpan(a, t, e);
        for (var n in r.attributes)
            n !== "class" && r.attributes.hasOwnProperty(n) && s.setAttribute(n, r.attributes[n]);
        return s
    }
    ,
    mathmlBuilder: (r, e) => y0(r.body, e)
});
G({
    type: "htmlmathml",
    names: ["\\html@mathml"],
    props: {
        numArgs: 2,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r;
        return {
            type: "htmlmathml",
            mode: t.mode,
            html: Ye(e[0]),
            mathml: Ye(e[1])
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = at(r.html, e, !1);
        return T.makeFragment(t)
    }
    ,
    mathmlBuilder: (r, e) => y0(r.mathml, e)
});
var Ha = function(e) {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
        return {
            number: +e,
            unit: "bp"
        };
    var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
    if (!t)
        throw new $("Invalid size: '" + e + "' in \\includegraphics");
    var a = {
        number: +(t[1] + t[2]),
        unit: t[3]
    };
    if (!ml(a))
        throw new $("Invalid unit: '" + a.unit + "' in \\includegraphics.");
    return a
};
G({
    type: "includegraphics",
    names: ["\\includegraphics"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        argTypes: ["raw", "url"],
        allowedInText: !1
    },
    handler: (r, e, t) => {
        var {parser: a} = r
          , s = {
            number: 0,
            unit: "em"
        }
          , n = {
            number: .9,
            unit: "em"
        }
          , i = {
            number: 0,
            unit: "em"
        }
          , l = "";
        if (t[0])
            for (var u = fe(t[0], "raw").string, d = u.split(","), m = 0; m < d.length; m++) {
                var f = d[m].split("=");
                if (f.length === 2) {
                    var b = f[1].trim();
                    switch (f[0].trim()) {
                    case "alt":
                        l = b;
                        break;
                    case "width":
                        s = Ha(b);
                        break;
                    case "height":
                        n = Ha(b);
                        break;
                    case "totalheight":
                        i = Ha(b);
                        break;
                    default:
                        throw new $("Invalid key: '" + f[0] + "' in \\includegraphics.")
                    }
                }
            }
        var g = fe(e[0], "url").url;
        return l === "" && (l = g,
        l = l.replace(/^.*[\\/]/, ""),
        l = l.substring(0, l.lastIndexOf("."))),
        a.settings.isTrusted({
            command: "\\includegraphics",
            url: g
        }) ? {
            type: "includegraphics",
            mode: a.mode,
            alt: l,
            width: s,
            height: n,
            totalheight: i,
            src: g
        } : a.formatUnsupportedCmd("\\includegraphics")
    }
    ,
    htmlBuilder: (r, e) => {
        var t = je(r.height, e)
          , a = 0;
        r.totalheight.number > 0 && (a = je(r.totalheight, e) - t);
        var s = 0;
        r.width.number > 0 && (s = je(r.width, e));
        var n = {
            height: H(t + a)
        };
        s > 0 && (n.width = H(s)),
        a > 0 && (n.verticalAlign = H(-a));
        var i = new b5(r.src,r.alt,n);
        return i.height = t,
        i.depth = a,
        i
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = new F.MathNode("mglyph",[]);
        t.setAttribute("alt", r.alt);
        var a = je(r.height, e)
          , s = 0;
        if (r.totalheight.number > 0 && (s = je(r.totalheight, e) - a,
        t.setAttribute("valign", H(-s))),
        t.setAttribute("height", H(a + s)),
        r.width.number > 0) {
            var n = je(r.width, e);
            t.setAttribute("width", H(n))
        }
        return t.setAttribute("src", r.src),
        t
    }
});
G({
    type: "kern",
    names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
    props: {
        numArgs: 1,
        argTypes: ["size"],
        primitive: !0,
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r
          , s = fe(e[0], "size");
        if (t.settings.strict) {
            var n = a[1] === "m"
              , i = s.value.unit === "mu";
            n ? (i || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + s.value.unit + " units")),
            t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : i && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units")
        }
        return {
            type: "kern",
            mode: t.mode,
            dimension: s.value
        }
    },
    htmlBuilder(r, e) {
        return T.makeGlue(r.dimension, e)
    },
    mathmlBuilder(r, e) {
        var t = je(r.dimension, e);
        return new F.SpaceNode(t)
    }
});
G({
    type: "lap",
    names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "lap",
            mode: t.mode,
            alignment: a.slice(5),
            body: s
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t;
        r.alignment === "clap" ? (t = T.makeSpan([], [Se(r.body, e)]),
        t = T.makeSpan(["inner"], [t], e)) : t = T.makeSpan(["inner"], [Se(r.body, e)]);
        var a = T.makeSpan(["fix"], [])
          , s = T.makeSpan([r.alignment], [t, a], e)
          , n = T.makeSpan(["strut"]);
        return n.style.height = H(s.height + s.depth),
        s.depth && (n.style.verticalAlign = H(-s.depth)),
        s.children.unshift(n),
        s = T.makeSpan(["thinbox"], [s], e),
        T.makeSpan(["mord", "vbox"], [s], e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = new F.MathNode("mpadded",[_e(r.body, e)]);
        if (r.alignment !== "rlap") {
            var a = r.alignment === "llap" ? "-1" : "-0.5";
            t.setAttribute("lspace", a + "width")
        }
        return t.setAttribute("width", "0px"),
        t
    }
});
G({
    type: "styling",
    names: ["\\(", "$"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        allowedInMath: !1
    },
    handler(r, e) {
        var {funcName: t, parser: a} = r
          , s = a.mode;
        a.switchMode("math");
        var n = t === "\\(" ? "\\)" : "$"
          , i = a.parseExpression(!1, n);
        return a.expect(n),
        a.switchMode(s),
        {
            type: "styling",
            mode: a.mode,
            style: "text",
            body: i
        }
    }
});
G({
    type: "text",
    names: ["\\)", "\\]"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        allowedInMath: !1
    },
    handler(r, e) {
        throw new $("Mismatched " + r.funcName)
    }
});
var bi = (r, e) => {
    switch (e.style.size) {
    case re.DISPLAY.size:
        return r.display;
    case re.TEXT.size:
        return r.text;
    case re.SCRIPT.size:
        return r.script;
    case re.SCRIPTSCRIPT.size:
        return r.scriptscript;
    default:
        return r.text
    }
}
;
G({
    type: "mathchoice",
    names: ["\\mathchoice"],
    props: {
        numArgs: 4,
        primitive: !0
    },
    handler: (r, e) => {
        var {parser: t} = r;
        return {
            type: "mathchoice",
            mode: t.mode,
            display: Ye(e[0]),
            text: Ye(e[1]),
            script: Ye(e[2]),
            scriptscript: Ye(e[3])
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = bi(r, e)
          , a = at(t, e, !1);
        return T.makeFragment(a)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = bi(r, e);
        return y0(t, e)
    }
});
var Kl = (r, e, t, a, s, n, i) => {
    r = T.makeSpan([], [r]);
    var l = t && ee.isCharacterBox(t), u, d;
    if (e) {
        var m = Se(e, a.havingStyle(s.sup()), a);
        d = {
            elem: m,
            kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - m.depth)
        }
    }
    if (t) {
        var f = Se(t, a.havingStyle(s.sub()), a);
        u = {
            elem: f,
            kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - f.height)
        }
    }
    var b;
    if (d && u) {
        var g = a.fontMetrics().bigOpSpacing5 + u.elem.height + u.elem.depth + u.kern + r.depth + i;
        b = T.makeVList({
            positionType: "bottom",
            positionData: g,
            children: [{
                type: "kern",
                size: a.fontMetrics().bigOpSpacing5
            }, {
                type: "elem",
                elem: u.elem,
                marginLeft: H(-n)
            }, {
                type: "kern",
                size: u.kern
            }, {
                type: "elem",
                elem: r
            }, {
                type: "kern",
                size: d.kern
            }, {
                type: "elem",
                elem: d.elem,
                marginLeft: H(n)
            }, {
                type: "kern",
                size: a.fontMetrics().bigOpSpacing5
            }]
        }, a)
    } else if (u) {
        var w = r.height - i;
        b = T.makeVList({
            positionType: "top",
            positionData: w,
            children: [{
                type: "kern",
                size: a.fontMetrics().bigOpSpacing5
            }, {
                type: "elem",
                elem: u.elem,
                marginLeft: H(-n)
            }, {
                type: "kern",
                size: u.kern
            }, {
                type: "elem",
                elem: r
            }]
        }, a)
    } else if (d) {
        var M = r.depth + i;
        b = T.makeVList({
            positionType: "bottom",
            positionData: M,
            children: [{
                type: "elem",
                elem: r
            }, {
                type: "kern",
                size: d.kern
            }, {
                type: "elem",
                elem: d.elem,
                marginLeft: H(n)
            }, {
                type: "kern",
                size: a.fontMetrics().bigOpSpacing5
            }]
        }, a)
    } else
        return r;
    var E = [b];
    if (u && n !== 0 && !l) {
        var R = T.makeSpan(["mspace"], [], a);
        R.style.marginRight = H(n),
        E.unshift(R)
    }
    return T.makeSpan(["mop", "op-limits"], E, a)
}
  , Yl = ["\\smallint"]
  , X0 = (r, e) => {
    var t, a, s = !1, n;
    r.type === "supsub" ? (t = r.sup,
    a = r.sub,
    n = fe(r.base, "op"),
    s = !0) : n = fe(r, "op");
    var i = e.style
      , l = !1;
    i.size === re.DISPLAY.size && n.symbol && !ee.contains(Yl, n.name) && (l = !0);
    var u;
    if (n.symbol) {
        var d = l ? "Size2-Regular" : "Size1-Regular"
          , m = "";
        if ((n.name === "\\oiint" || n.name === "\\oiiint") && (m = n.name.slice(1),
        n.name = m === "oiint" ? "\\iint" : "\\iiint"),
        u = T.makeSymbol(n.name, d, "math", e, ["mop", "op-symbol", l ? "large-op" : "small-op"]),
        m.length > 0) {
            var f = u.italic
              , b = T.staticSvg(m + "Size" + (l ? "2" : "1"), e);
            u = T.makeVList({
                positionType: "individualShift",
                children: [{
                    type: "elem",
                    elem: u,
                    shift: 0
                }, {
                    type: "elem",
                    elem: b,
                    shift: l ? .08 : 0
                }]
            }, e),
            n.name = "\\" + m,
            u.classes.unshift("mop"),
            u.italic = f
        }
    } else if (n.body) {
        var g = at(n.body, e, !0);
        g.length === 1 && g[0]instanceof Lt ? (u = g[0],
        u.classes[0] = "mop") : u = T.makeSpan(["mop"], g, e)
    } else {
        for (var w = [], M = 1; M < n.name.length; M++)
            w.push(T.mathsym(n.name[M], n.mode, e));
        u = T.makeSpan(["mop"], w, e)
    }
    var E = 0
      , R = 0;
    return (u instanceof Lt || n.name === "\\oiint" || n.name === "\\oiiint") && !n.suppressBaseShift && (E = (u.height - u.depth) / 2 - e.fontMetrics().axisHeight,
    R = u.italic),
    s ? Kl(u, t, a, e, i, R, E) : (E && (u.style.position = "relative",
    u.style.top = H(E)),
    u)
}
  , br = (r, e) => {
    var t;
    if (r.symbol)
        t = new kt("mo",[Ot(r.name, r.mode)]),
        ee.contains(Yl, r.name) && t.setAttribute("largeop", "false");
    else if (r.body)
        t = new kt("mo",wt(r.body, e));
    else {
        t = new kt("mi",[new Vt(r.name.slice(1))]);
        var a = new kt("mo",[Ot("⁡", "text")]);
        r.parentIsSupSub ? t = new kt("mrow",[t, a]) : t = Sl([t, a])
    }
    return t
}
  , w6 = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup"
};
G({
    type: "op",
    names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
    props: {
        numArgs: 0
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = a;
        return s.length === 1 && (s = w6[s]),
        {
            type: "op",
            mode: t.mode,
            limits: !0,
            parentIsSupSub: !1,
            symbol: !0,
            name: s
        }
    }
    ,
    htmlBuilder: X0,
    mathmlBuilder: br
});
G({
    type: "op",
    names: ["\\mathop"],
    props: {
        numArgs: 1,
        primitive: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[0];
        return {
            type: "op",
            mode: t.mode,
            limits: !1,
            parentIsSupSub: !1,
            symbol: !1,
            body: Ye(a)
        }
    }
    ,
    htmlBuilder: X0,
    mathmlBuilder: br
});
var x6 = {
    "∫": "\\int",
    "∬": "\\iint",
    "∭": "\\iiint",
    "∮": "\\oint",
    "∯": "\\oiint",
    "∰": "\\oiiint"
};
G({
    type: "op",
    names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var {parser: e, funcName: t} = r;
        return {
            type: "op",
            mode: e.mode,
            limits: !1,
            parentIsSupSub: !1,
            symbol: !1,
            name: t
        }
    },
    htmlBuilder: X0,
    mathmlBuilder: br
});
G({
    type: "op",
    names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var {parser: e, funcName: t} = r;
        return {
            type: "op",
            mode: e.mode,
            limits: !0,
            parentIsSupSub: !1,
            symbol: !1,
            name: t
        }
    },
    htmlBuilder: X0,
    mathmlBuilder: br
});
G({
    type: "op",
    names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
    props: {
        numArgs: 0
    },
    handler(r) {
        var {parser: e, funcName: t} = r
          , a = t;
        return a.length === 1 && (a = x6[a]),
        {
            type: "op",
            mode: e.mode,
            limits: !1,
            parentIsSupSub: !1,
            symbol: !0,
            name: a
        }
    },
    htmlBuilder: X0,
    mathmlBuilder: br
});
var Xl = (r, e) => {
    var t, a, s = !1, n;
    r.type === "supsub" ? (t = r.sup,
    a = r.sub,
    n = fe(r.base, "operatorname"),
    s = !0) : n = fe(r, "operatorname");
    var i;
    if (n.body.length > 0) {
        for (var l = n.body.map(f => {
            var b = f.text;
            return typeof b == "string" ? {
                type: "textord",
                mode: f.mode,
                text: b
            } : f
        }
        ), u = at(l, e.withFont("mathrm"), !0), d = 0; d < u.length; d++) {
            var m = u[d];
            m instanceof Lt && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
        }
        i = T.makeSpan(["mop"], u, e)
    } else
        i = T.makeSpan(["mop"], [], e);
    return s ? Kl(i, t, a, e, e.style, 0, 0) : i
}
  , k6 = (r, e) => {
    for (var t = wt(r.body, e.withFont("mathrm")), a = !0, s = 0; s < t.length; s++) {
        var n = t[s];
        if (!(n instanceof F.SpaceNode))
            if (n instanceof F.MathNode)
                switch (n.type) {
                case "mi":
                case "mn":
                case "ms":
                case "mspace":
                case "mtext":
                    break;
                case "mo":
                    {
                        var i = n.children[0];
                        n.children.length === 1 && i instanceof F.TextNode ? i.text = i.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = !1;
                        break
                    }
                default:
                    a = !1
                }
            else
                a = !1
    }
    if (a) {
        var l = t.map(m => m.toText()).join("");
        t = [new F.TextNode(l)]
    }
    var u = new F.MathNode("mi",t);
    u.setAttribute("mathvariant", "normal");
    var d = new F.MathNode("mo",[Ot("⁡", "text")]);
    return r.parentIsSupSub ? new F.MathNode("mrow",[u, d]) : F.newDocumentFragment([u, d])
}
;
G({
    type: "operatorname",
    names: ["\\operatorname@", "\\operatornamewithlimits"],
    props: {
        numArgs: 1
    },
    handler: (r, e) => {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "operatorname",
            mode: t.mode,
            body: Ye(s),
            alwaysHandleSupSub: a === "\\operatornamewithlimits",
            limits: !1,
            parentIsSupSub: !1
        }
    }
    ,
    htmlBuilder: Xl,
    mathmlBuilder: k6
});
p("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
z0({
    type: "ordgroup",
    htmlBuilder(r, e) {
        return r.semisimple ? T.makeFragment(at(r.body, e, !1)) : T.makeSpan(["mord"], at(r.body, e, !0), e)
    },
    mathmlBuilder(r, e) {
        return y0(r.body, e, !0)
    }
});
G({
    type: "overline",
    names: ["\\overline"],
    props: {
        numArgs: 1
    },
    handler(r, e) {
        var {parser: t} = r
          , a = e[0];
        return {
            type: "overline",
            mode: t.mode,
            body: a
        }
    },
    htmlBuilder(r, e) {
        var t = Se(r.body, e.havingCrampedStyle())
          , a = T.makeLineSpan("overline-line", e)
          , s = e.fontMetrics().defaultRuleThickness
          , n = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: t
            }, {
                type: "kern",
                size: 3 * s
            }, {
                type: "elem",
                elem: a
            }, {
                type: "kern",
                size: s
            }]
        }, e);
        return T.makeSpan(["mord", "overline"], [n], e)
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mo",[new F.TextNode("‾")]);
        t.setAttribute("stretchy", "true");
        var a = new F.MathNode("mover",[_e(r.body, e), t]);
        return a.setAttribute("accent", "true"),
        a
    }
});
G({
    type: "phantom",
    names: ["\\phantom"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[0];
        return {
            type: "phantom",
            mode: t.mode,
            body: Ye(a)
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = at(r.body, e.withPhantom(), !1);
        return T.makeFragment(t)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = wt(r.body, e);
        return new F.MathNode("mphantom",t)
    }
});
G({
    type: "hphantom",
    names: ["\\hphantom"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[0];
        return {
            type: "hphantom",
            mode: t.mode,
            body: a
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = T.makeSpan([], [Se(r.body, e.withPhantom())]);
        if (t.height = 0,
        t.depth = 0,
        t.children)
            for (var a = 0; a < t.children.length; a++)
                t.children[a].height = 0,
                t.children[a].depth = 0;
        return t = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: t
            }]
        }, e),
        T.makeSpan(["mord"], [t], e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = wt(Ye(r.body), e)
          , a = new F.MathNode("mphantom",t)
          , s = new F.MathNode("mpadded",[a]);
        return s.setAttribute("height", "0px"),
        s.setAttribute("depth", "0px"),
        s
    }
});
G({
    type: "vphantom",
    names: ["\\vphantom"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {parser: t} = r
          , a = e[0];
        return {
            type: "vphantom",
            mode: t.mode,
            body: a
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = T.makeSpan(["inner"], [Se(r.body, e.withPhantom())])
          , a = T.makeSpan(["fix"], []);
        return T.makeSpan(["mord", "rlap"], [t, a], e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = wt(Ye(r.body), e)
          , a = new F.MathNode("mphantom",t)
          , s = new F.MathNode("mpadded",[a]);
        return s.setAttribute("width", "0px"),
        s
    }
});
G({
    type: "raisebox",
    names: ["\\raisebox"],
    props: {
        numArgs: 2,
        argTypes: ["size", "hbox"],
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t} = r
          , a = fe(e[0], "size").value
          , s = e[1];
        return {
            type: "raisebox",
            mode: t.mode,
            dy: a,
            body: s
        }
    },
    htmlBuilder(r, e) {
        var t = Se(r.body, e)
          , a = je(r.dy, e);
        return T.makeVList({
            positionType: "shift",
            positionData: -a,
            children: [{
                type: "elem",
                elem: t
            }]
        }, e)
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mpadded",[_e(r.body, e)])
          , a = r.dy.number + r.dy.unit;
        return t.setAttribute("voffset", a),
        t
    }
});
G({
    type: "internal",
    names: ["\\relax"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        allowedInArgument: !0
    },
    handler(r) {
        var {parser: e} = r;
        return {
            type: "internal",
            mode: e.mode
        }
    }
});
G({
    type: "rule",
    names: ["\\rule"],
    props: {
        numArgs: 2,
        numOptionalArgs: 1,
        allowedInText: !0,
        allowedInMath: !0,
        argTypes: ["size", "size", "size"]
    },
    handler(r, e, t) {
        var {parser: a} = r
          , s = t[0]
          , n = fe(e[0], "size")
          , i = fe(e[1], "size");
        return {
            type: "rule",
            mode: a.mode,
            shift: s && fe(s, "size").value,
            width: n.value,
            height: i.value
        }
    },
    htmlBuilder(r, e) {
        var t = T.makeSpan(["mord", "rule"], [], e)
          , a = je(r.width, e)
          , s = je(r.height, e)
          , n = r.shift ? je(r.shift, e) : 0;
        return t.style.borderRightWidth = H(a),
        t.style.borderTopWidth = H(s),
        t.style.bottom = H(n),
        t.width = a,
        t.height = s + n,
        t.depth = -n,
        t.maxFontSize = s * 1.125 * e.sizeMultiplier,
        t
    },
    mathmlBuilder(r, e) {
        var t = je(r.width, e)
          , a = je(r.height, e)
          , s = r.shift ? je(r.shift, e) : 0
          , n = e.color && e.getColor() || "black"
          , i = new F.MathNode("mspace");
        i.setAttribute("mathbackground", n),
        i.setAttribute("width", H(t)),
        i.setAttribute("height", H(a));
        var l = new F.MathNode("mpadded",[i]);
        return s >= 0 ? l.setAttribute("height", H(s)) : (l.setAttribute("height", H(s)),
        l.setAttribute("depth", H(-s))),
        l.setAttribute("voffset", H(s)),
        l
    }
});
function Zl(r, e, t) {
    for (var a = at(r, e, !1), s = e.sizeMultiplier / t.sizeMultiplier, n = 0; n < a.length; n++) {
        var i = a[n].classes.indexOf("sizing");
        i < 0 ? Array.prototype.push.apply(a[n].classes, e.sizingClasses(t)) : a[n].classes[i + 1] === "reset-size" + e.size && (a[n].classes[i + 1] = "reset-size" + t.size),
        a[n].height *= s,
        a[n].depth *= s
    }
    return T.makeFragment(a)
}
var wi = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"]
  , S6 = (r, e) => {
    var t = e.havingSize(r.size);
    return Zl(r.body, t, e)
}
;
G({
    type: "sizing",
    names: wi,
    props: {
        numArgs: 0,
        allowedInText: !0
    },
    handler: (r, e) => {
        var {breakOnTokenText: t, funcName: a, parser: s} = r
          , n = s.parseExpression(!1, t);
        return {
            type: "sizing",
            mode: s.mode,
            size: wi.indexOf(a) + 1,
            body: n
        }
    }
    ,
    htmlBuilder: S6,
    mathmlBuilder: (r, e) => {
        var t = e.havingSize(r.size)
          , a = wt(r.body, t)
          , s = new F.MathNode("mstyle",a);
        return s.setAttribute("mathsize", H(t.sizeMultiplier)),
        s
    }
});
G({
    type: "smash",
    names: ["\\smash"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: !0
    },
    handler: (r, e, t) => {
        var {parser: a} = r
          , s = !1
          , n = !1
          , i = t[0] && fe(t[0], "ordgroup");
        if (i)
            for (var l = "", u = 0; u < i.body.length; ++u) {
                var d = i.body[u];
                if (l = d.text,
                l === "t")
                    s = !0;
                else if (l === "b")
                    n = !0;
                else {
                    s = !1,
                    n = !1;
                    break
                }
            }
        else
            s = !0,
            n = !0;
        var m = e[0];
        return {
            type: "smash",
            mode: a.mode,
            body: m,
            smashHeight: s,
            smashDepth: n
        }
    }
    ,
    htmlBuilder: (r, e) => {
        var t = T.makeSpan([], [Se(r.body, e)]);
        if (!r.smashHeight && !r.smashDepth)
            return t;
        if (r.smashHeight && (t.height = 0,
        t.children))
            for (var a = 0; a < t.children.length; a++)
                t.children[a].height = 0;
        if (r.smashDepth && (t.depth = 0,
        t.children))
            for (var s = 0; s < t.children.length; s++)
                t.children[s].depth = 0;
        var n = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: t
            }]
        }, e);
        return T.makeSpan(["mord"], [n], e)
    }
    ,
    mathmlBuilder: (r, e) => {
        var t = new F.MathNode("mpadded",[_e(r.body, e)]);
        return r.smashHeight && t.setAttribute("height", "0px"),
        r.smashDepth && t.setAttribute("depth", "0px"),
        t
    }
});
G({
    type: "sqrt",
    names: ["\\sqrt"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1
    },
    handler(r, e, t) {
        var {parser: a} = r
          , s = t[0]
          , n = e[0];
        return {
            type: "sqrt",
            mode: a.mode,
            body: n,
            index: s
        }
    },
    htmlBuilder(r, e) {
        var t = Se(r.body, e.havingCrampedStyle());
        t.height === 0 && (t.height = e.fontMetrics().xHeight),
        t = T.wrapFragment(t, e);
        var a = e.fontMetrics()
          , s = a.defaultRuleThickness
          , n = s;
        e.style.id < re.TEXT.id && (n = e.fontMetrics().xHeight);
        var i = s + n / 4
          , l = t.height + t.depth + i + s
          , {span: u, ruleWidth: d, advanceWidth: m} = a0.sqrtImage(l, e)
          , f = u.height - d;
        f > t.height + t.depth + i && (i = (i + f - t.height - t.depth) / 2);
        var b = u.height - t.height - i - d;
        t.style.paddingLeft = H(m);
        var g = T.makeVList({
            positionType: "firstBaseline",
            children: [{
                type: "elem",
                elem: t,
                wrapperClasses: ["svg-align"]
            }, {
                type: "kern",
                size: -(t.height + b)
            }, {
                type: "elem",
                elem: u
            }, {
                type: "kern",
                size: d
            }]
        }, e);
        if (r.index) {
            var w = e.havingStyle(re.SCRIPTSCRIPT)
              , M = Se(r.index, w, e)
              , E = .6 * (g.height - g.depth)
              , R = T.makeVList({
                positionType: "shift",
                positionData: -E,
                children: [{
                    type: "elem",
                    elem: M
                }]
            }, e)
              , N = T.makeSpan(["root"], [R]);
            return T.makeSpan(["mord", "sqrt"], [N, g], e)
        } else
            return T.makeSpan(["mord", "sqrt"], [g], e)
    },
    mathmlBuilder(r, e) {
        var {body: t, index: a} = r;
        return a ? new F.MathNode("mroot",[_e(t, e), _e(a, e)]) : new F.MathNode("msqrt",[_e(t, e)])
    }
});
var xi = {
    display: re.DISPLAY,
    text: re.TEXT,
    script: re.SCRIPT,
    scriptscript: re.SCRIPTSCRIPT
};
G({
    type: "styling",
    names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
    props: {
        numArgs: 0,
        allowedInText: !0,
        primitive: !0
    },
    handler(r, e) {
        var {breakOnTokenText: t, funcName: a, parser: s} = r
          , n = s.parseExpression(!0, t)
          , i = a.slice(1, a.length - 5);
        return {
            type: "styling",
            mode: s.mode,
            style: i,
            body: n
        }
    },
    htmlBuilder(r, e) {
        var t = xi[r.style]
          , a = e.havingStyle(t).withFont("");
        return Zl(r.body, a, e)
    },
    mathmlBuilder(r, e) {
        var t = xi[r.style]
          , a = e.havingStyle(t)
          , s = wt(r.body, a)
          , n = new F.MathNode("mstyle",s)
          , i = {
            display: ["0", "true"],
            text: ["0", "false"],
            script: ["1", "false"],
            scriptscript: ["2", "false"]
        }
          , l = i[r.style];
        return n.setAttribute("scriptlevel", l[0]),
        n.setAttribute("displaystyle", l[1]),
        n
    }
});
var T6 = function(e, t) {
    var a = e.base;
    if (a)
        if (a.type === "op") {
            var s = a.limits && (t.style.size === re.DISPLAY.size || a.alwaysHandleSupSub);
            return s ? X0 : null
        } else if (a.type === "operatorname") {
            var n = a.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || a.limits);
            return n ? Xl : null
        } else {
            if (a.type === "accent")
                return ee.isCharacterBox(a.base) ? Js : null;
            if (a.type === "horizBrace") {
                var i = !e.sub;
                return i === a.isOver ? Wl : null
            } else
                return null
        }
    else
        return null
};
z0({
    type: "supsub",
    htmlBuilder(r, e) {
        var t = T6(r, e);
        if (t)
            return t(r, e);
        var {base: a, sup: s, sub: n} = r, i = Se(a, e), l, u, d = e.fontMetrics(), m = 0, f = 0, b = a && ee.isCharacterBox(a);
        if (s) {
            var g = e.havingStyle(e.style.sup());
            l = Se(s, g, e),
            b || (m = i.height - g.fontMetrics().supDrop * g.sizeMultiplier / e.sizeMultiplier)
        }
        if (n) {
            var w = e.havingStyle(e.style.sub());
            u = Se(n, w, e),
            b || (f = i.depth + w.fontMetrics().subDrop * w.sizeMultiplier / e.sizeMultiplier)
        }
        var M;
        e.style === re.DISPLAY ? M = d.sup1 : e.style.cramped ? M = d.sup3 : M = d.sup2;
        var E = e.sizeMultiplier
          , R = H(.5 / d.ptPerEm / E)
          , N = null;
        if (u) {
            var C = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
            (i instanceof Lt || C) && (N = H(-i.italic))
        }
        var L;
        if (l && u) {
            m = Math.max(m, M, l.depth + .25 * d.xHeight),
            f = Math.max(f, d.sub2);
            var D = d.defaultRuleThickness
              , _ = 4 * D;
            if (m - l.depth - (u.height - f) < _) {
                f = _ - (m - l.depth) + u.height;
                var q = .8 * d.xHeight - (m - l.depth);
                q > 0 && (m += q,
                f -= q)
            }
            var j = [{
                type: "elem",
                elem: u,
                shift: f,
                marginRight: R,
                marginLeft: N
            }, {
                type: "elem",
                elem: l,
                shift: -m,
                marginRight: R
            }];
            L = T.makeVList({
                positionType: "individualShift",
                children: j
            }, e)
        } else if (u) {
            f = Math.max(f, d.sub1, u.height - .8 * d.xHeight);
            var se = [{
                type: "elem",
                elem: u,
                marginLeft: N,
                marginRight: R
            }];
            L = T.makeVList({
                positionType: "shift",
                positionData: f,
                children: se
            }, e)
        } else if (l)
            m = Math.max(m, M, l.depth + .25 * d.xHeight),
            L = T.makeVList({
                positionType: "shift",
                positionData: -m,
                children: [{
                    type: "elem",
                    elem: l,
                    marginRight: R
                }]
            }, e);
        else
            throw new Error("supsub must have either sup or sub.");
        var Ee = ks(i, "right") || "mord";
        return T.makeSpan([Ee], [i, T.makeSpan(["msupsub"], [L])], e)
    },
    mathmlBuilder(r, e) {
        var t = !1, a, s;
        r.base && r.base.type === "horizBrace" && (s = !!r.sup,
        s === r.base.isOver && (t = !0,
        a = r.base.isOver)),
        r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
        var n = [_e(r.base, e)];
        r.sub && n.push(_e(r.sub, e)),
        r.sup && n.push(_e(r.sup, e));
        var i;
        if (t)
            i = a ? "mover" : "munder";
        else if (r.sub)
            if (r.sup) {
                var d = r.base;
                d && d.type === "op" && d.limits && e.style === re.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === re.DISPLAY || d.limits) ? i = "munderover" : i = "msubsup"
            } else {
                var u = r.base;
                u && u.type === "op" && u.limits && (e.style === re.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === re.DISPLAY) ? i = "munder" : i = "msub"
            }
        else {
            var l = r.base;
            l && l.type === "op" && l.limits && (e.style === re.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === re.DISPLAY) ? i = "mover" : i = "msup"
        }
        return new F.MathNode(i,n)
    }
});
z0({
    type: "atom",
    htmlBuilder(r, e) {
        return T.mathsym(r.text, r.mode, e, ["m" + r.family])
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mo",[Ot(r.text, r.mode)]);
        if (r.family === "bin") {
            var a = Xs(r, e);
            a === "bold-italic" && t.setAttribute("mathvariant", a)
        } else
            r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
        return t
    }
});
var Jl = {
    mi: "italic",
    mn: "normal",
    mtext: "normal"
};
z0({
    type: "mathord",
    htmlBuilder(r, e) {
        return T.makeOrd(r, e, "mathord")
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mi",[Ot(r.text, r.mode, e)])
          , a = Xs(r, e) || "italic";
        return a !== Jl[t.type] && t.setAttribute("mathvariant", a),
        t
    }
});
z0({
    type: "textord",
    htmlBuilder(r, e) {
        return T.makeOrd(r, e, "textord")
    },
    mathmlBuilder(r, e) {
        var t = Ot(r.text, r.mode, e), a = Xs(r, e) || "normal", s;
        return r.mode === "text" ? s = new F.MathNode("mtext",[t]) : /[0-9]/.test(r.text) ? s = new F.MathNode("mn",[t]) : r.text === "\\prime" ? s = new F.MathNode("mo",[t]) : s = new F.MathNode("mi",[t]),
        a !== Jl[s.type] && s.setAttribute("mathvariant", a),
        s
    }
});
var qa = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak"
}
  , Qa = {
    " ": {},
    "\\ ": {},
    "~": {
        className: "nobreak"
    },
    "\\space": {},
    "\\nobreakspace": {
        className: "nobreak"
    }
};
z0({
    type: "spacing",
    htmlBuilder(r, e) {
        if (Qa.hasOwnProperty(r.text)) {
            var t = Qa[r.text].className || "";
            if (r.mode === "text") {
                var a = T.makeOrd(r, e, "textord");
                return a.classes.push(t),
                a
            } else
                return T.makeSpan(["mspace", t], [T.mathsym(r.text, r.mode, e)], e)
        } else {
            if (qa.hasOwnProperty(r.text))
                return T.makeSpan(["mspace", qa[r.text]], [], e);
            throw new $('Unknown type of space "' + r.text + '"')
        }
    },
    mathmlBuilder(r, e) {
        var t;
        if (Qa.hasOwnProperty(r.text))
            t = new F.MathNode("mtext",[new F.TextNode(" ")]);
        else {
            if (qa.hasOwnProperty(r.text))
                return new F.MathNode("mspace");
            throw new $('Unknown type of space "' + r.text + '"')
        }
        return t
    }
});
var ki = () => {
    var r = new F.MathNode("mtd",[]);
    return r.setAttribute("width", "50%"),
    r
}
;
z0({
    type: "tag",
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mtable",[new F.MathNode("mtr",[ki(), new F.MathNode("mtd",[y0(r.body, e)]), ki(), new F.MathNode("mtd",[y0(r.tag, e)])])]);
        return t.setAttribute("width", "100%"),
        t
    }
});
var Si = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm"
}
  , Ti = {
    "\\textbf": "textbf",
    "\\textmd": "textmd"
}
  , M6 = {
    "\\textit": "textit",
    "\\textup": "textup"
}
  , Mi = (r, e) => {
    var t = r.font;
    if (t) {
        if (Si[t])
            return e.withTextFontFamily(Si[t]);
        if (Ti[t])
            return e.withTextFontWeight(Ti[t]);
        if (t === "\\emph")
            return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit")
    } else
        return e;
    return e.withTextFontShape(M6[t])
}
;
G({
    type: "text",
    names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"],
    props: {
        numArgs: 1,
        argTypes: ["text"],
        allowedInArgument: !0,
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t, funcName: a} = r
          , s = e[0];
        return {
            type: "text",
            mode: t.mode,
            body: Ye(s),
            font: a
        }
    },
    htmlBuilder(r, e) {
        var t = Mi(r, e)
          , a = at(r.body, t, !0);
        return T.makeSpan(["mord", "text"], a, t)
    },
    mathmlBuilder(r, e) {
        var t = Mi(r, e);
        return y0(r.body, t)
    }
});
G({
    type: "underline",
    names: ["\\underline"],
    props: {
        numArgs: 1,
        allowedInText: !0
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "underline",
            mode: t.mode,
            body: e[0]
        }
    },
    htmlBuilder(r, e) {
        var t = Se(r.body, e)
          , a = T.makeLineSpan("underline-line", e)
          , s = e.fontMetrics().defaultRuleThickness
          , n = T.makeVList({
            positionType: "top",
            positionData: t.height,
            children: [{
                type: "kern",
                size: s
            }, {
                type: "elem",
                elem: a
            }, {
                type: "kern",
                size: 3 * s
            }, {
                type: "elem",
                elem: t
            }]
        }, e);
        return T.makeSpan(["mord", "underline"], [n], e)
    },
    mathmlBuilder(r, e) {
        var t = new F.MathNode("mo",[new F.TextNode("‾")]);
        t.setAttribute("stretchy", "true");
        var a = new F.MathNode("munder",[_e(r.body, e), t]);
        return a.setAttribute("accentunder", "true"),
        a
    }
});
G({
    type: "vcenter",
    names: ["\\vcenter"],
    props: {
        numArgs: 1,
        argTypes: ["original"],
        allowedInText: !1
    },
    handler(r, e) {
        var {parser: t} = r;
        return {
            type: "vcenter",
            mode: t.mode,
            body: e[0]
        }
    },
    htmlBuilder(r, e) {
        var t = Se(r.body, e)
          , a = e.fontMetrics().axisHeight
          , s = .5 * (t.height - a - (t.depth + a));
        return T.makeVList({
            positionType: "shift",
            positionData: s,
            children: [{
                type: "elem",
                elem: t
            }]
        }, e)
    },
    mathmlBuilder(r, e) {
        return new F.MathNode("mpadded",[_e(r.body, e)],["vcenter"])
    }
});
G({
    type: "verb",
    names: ["\\verb"],
    props: {
        numArgs: 0,
        allowedInText: !0
    },
    handler(r, e, t) {
        throw new $("\\verb ended by end of line instead of matching delimiter")
    },
    htmlBuilder(r, e) {
        for (var t = Ii(r), a = [], s = e.havingStyle(e.style.text()), n = 0; n < t.length; n++) {
            var i = t[n];
            i === "~" && (i = "\\textasciitilde"),
            a.push(T.makeSymbol(i, "Typewriter-Regular", r.mode, s, ["mord", "texttt"]))
        }
        return T.makeSpan(["mord", "text"].concat(s.sizingClasses(e)), T.tryCombineChars(a), s)
    },
    mathmlBuilder(r, e) {
        var t = new F.TextNode(Ii(r))
          , a = new F.MathNode("mtext",[t]);
        return a.setAttribute("mathvariant", "monospace"),
        a
    }
});
var Ii = r => r.body.replace(/ /g, r.star ? "␣" : " ")
  , p0 = xl
  , e1 = `[ \r
	]`
  , I6 = "\\\\[a-zA-Z@]+"
  , C6 = "\\\\[^\uD800-\uDFFF]"
  , R6 = "(" + I6 + ")" + e1 + "*"
  , E6 = `\\\\(
|[ \r	]+
?)[ \r	]*`
  , Is = "[̀-ͯ]"
  , B6 = new RegExp(Is + "+$")
  , z6 = "(" + e1 + "+)|" + (E6 + "|") + "([!-\\[\\]-‧‪-퟿豈-￿]" + (Is + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (Is + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + R6) + ("|" + C6 + ")");
class Ci {
    constructor(e, t) {
        this.input = void 0,
        this.settings = void 0,
        this.tokenRegex = void 0,
        this.catcodes = void 0,
        this.input = e,
        this.settings = t,
        this.tokenRegex = new RegExp(z6,"g"),
        this.catcodes = {
            "%": 14,
            "~": 13
        }
    }
    setCatcode(e, t) {
        this.catcodes[e] = t
    }
    lex() {
        var e = this.input
          , t = this.tokenRegex.lastIndex;
        if (t === e.length)
            return new Bt("EOF",new xt(this,t,t));
        var a = this.tokenRegex.exec(e);
        if (a === null || a.index !== t)
            throw new $("Unexpected character: '" + e[t] + "'",new Bt(e[t],new xt(this,t,t + 1)));
        var s = a[6] || a[3] || (a[2] ? "\\ " : " ");
        if (this.catcodes[s] === 14) {
            var n = e.indexOf(`
`, this.tokenRegex.lastIndex);
            return n === -1 ? (this.tokenRegex.lastIndex = e.length,
            this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = n + 1,
            this.lex()
        }
        return new Bt(s,new xt(this,t,this.tokenRegex.lastIndex))
    }
}
class L6 {
    constructor(e, t) {
        e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        this.current = void 0,
        this.builtins = void 0,
        this.undefStack = void 0,
        this.current = t,
        this.builtins = e,
        this.undefStack = []
    }
    beginGroup() {
        this.undefStack.push({})
    }
    endGroup() {
        if (this.undefStack.length === 0)
            throw new $("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
        var e = this.undefStack.pop();
        for (var t in e)
            e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t])
    }
    endGroups() {
        for (; this.undefStack.length > 0; )
            this.endGroup()
    }
    has(e) {
        return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e)
    }
    get(e) {
        return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e]
    }
    set(e, t, a) {
        if (a === void 0 && (a = !1),
        a) {
            for (var s = 0; s < this.undefStack.length; s++)
                delete this.undefStack[s][e];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t)
        } else {
            var n = this.undefStack[this.undefStack.length - 1];
            n && !n.hasOwnProperty(e) && (n[e] = this.current[e])
        }
        t == null ? delete this.current[e] : this.current[e] = t
    }
}
var O6 = Ql;
p("\\noexpand", function(r) {
    var e = r.popToken();
    return r.isExpandable(e.text) && (e.noexpand = !0,
    e.treatAsRelax = !0),
    {
        tokens: [e],
        numArgs: 0
    }
});
p("\\expandafter", function(r) {
    var e = r.popToken();
    return r.expandOnce(!0),
    {
        tokens: [e],
        numArgs: 0
    }
});
p("\\@firstoftwo", function(r) {
    var e = r.consumeArgs(2);
    return {
        tokens: e[0],
        numArgs: 0
    }
});
p("\\@secondoftwo", function(r) {
    var e = r.consumeArgs(2);
    return {
        tokens: e[1],
        numArgs: 0
    }
});
p("\\@ifnextchar", function(r) {
    var e = r.consumeArgs(3);
    r.consumeSpaces();
    var t = r.future();
    return e[0].length === 1 && e[0][0].text === t.text ? {
        tokens: e[1],
        numArgs: 0
    } : {
        tokens: e[2],
        numArgs: 0
    }
});
p("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
p("\\TextOrMath", function(r) {
    var e = r.consumeArgs(2);
    return r.mode === "text" ? {
        tokens: e[0],
        numArgs: 0
    } : {
        tokens: e[1],
        numArgs: 0
    }
});
var Ri = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
};
p("\\char", function(r) {
    var e = r.popToken(), t, a = "";
    if (e.text === "'")
        t = 8,
        e = r.popToken();
    else if (e.text === '"')
        t = 16,
        e = r.popToken();
    else if (e.text === "`")
        if (e = r.popToken(),
        e.text[0] === "\\")
            a = e.text.charCodeAt(1);
        else {
            if (e.text === "EOF")
                throw new $("\\char` missing argument");
            a = e.text.charCodeAt(0)
        }
    else
        t = 10;
    if (t) {
        if (a = Ri[e.text],
        a == null || a >= t)
            throw new $("Invalid base-" + t + " digit " + e.text);
        for (var s; (s = Ri[r.future().text]) != null && s < t; )
            a *= t,
            a += s,
            r.popToken()
    }
    return "\\@char{" + a + "}"
});
var ln = (r, e, t, a) => {
    var s = r.consumeArg().tokens;
    if (s.length !== 1)
        throw new $("\\newcommand's first argument must be a macro name");
    var n = s[0].text
      , i = r.isDefined(n);
    if (i && !e)
        throw new $("\\newcommand{" + n + "} attempting to redefine " + (n + "; use \\renewcommand"));
    if (!i && !t)
        throw new $("\\renewcommand{" + n + "} when command " + n + " does not yet exist; use \\newcommand");
    var l = 0;
    if (s = r.consumeArg().tokens,
    s.length === 1 && s[0].text === "[") {
        for (var u = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
            u += d.text,
            d = r.expandNextToken();
        if (!u.match(/^\s*[0-9]+\s*$/))
            throw new $("Invalid number of arguments: " + u);
        l = parseInt(u),
        s = r.consumeArg().tokens
    }
    return i && a || r.macros.set(n, {
        tokens: s,
        numArgs: l
    }),
    ""
}
;
p("\\newcommand", r => ln(r, !1, !0, !1));
p("\\renewcommand", r => ln(r, !0, !1, !1));
p("\\providecommand", r => ln(r, !0, !0, !0));
p("\\message", r => {
    var e = r.consumeArgs(1)[0];
    return e.reverse().map(t => t.text).join(""),
    ""
}
);
p("\\errmessage", r => {
    var e = r.consumeArgs(1)[0];
    return console.error(e.reverse().map(t => t.text).join("")),
    ""
}
);
p("\\show", r => {
    var e = r.popToken()
      , t = e.text;
    return r.macros.get(t),
    p0[t],
    Pe.math[t],
    Pe.text[t],
    ""
}
);
p("\\bgroup", "{");
p("\\egroup", "}");
p("~", "\\nobreakspace");
p("\\lq", "`");
p("\\rq", "'");
p("\\aa", "\\r a");
p("\\AA", "\\r A");
p("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
p("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
p("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
p("ℬ", "\\mathscr{B}");
p("ℰ", "\\mathscr{E}");
p("ℱ", "\\mathscr{F}");
p("ℋ", "\\mathscr{H}");
p("ℐ", "\\mathscr{I}");
p("ℒ", "\\mathscr{L}");
p("ℳ", "\\mathscr{M}");
p("ℛ", "\\mathscr{R}");
p("ℭ", "\\mathfrak{C}");
p("ℌ", "\\mathfrak{H}");
p("ℨ", "\\mathfrak{Z}");
p("\\Bbbk", "\\Bbb{k}");
p("·", "\\cdotp");
p("\\llap", "\\mathllap{\\textrm{#1}}");
p("\\rlap", "\\mathrlap{\\textrm{#1}}");
p("\\clap", "\\mathclap{\\textrm{#1}}");
p("\\mathstrut", "\\vphantom{(}");
p("\\underbar", "\\underline{\\text{#1}}");
p("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
p("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
p("\\ne", "\\neq");
p("≠", "\\neq");
p("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
p("∉", "\\notin");
p("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
p("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
p("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
p("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
p("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
p("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
p("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
p("⟂", "\\perp");
p("‼", "\\mathclose{!\\mkern-0.8mu!}");
p("∌", "\\notni");
p("⌜", "\\ulcorner");
p("⌝", "\\urcorner");
p("⌞", "\\llcorner");
p("⌟", "\\lrcorner");
p("©", "\\copyright");
p("®", "\\textregistered");
p("️", "\\textregistered");
p("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
p("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
p("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
p("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
p("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
p("⋮", "\\vdots");
p("\\varGamma", "\\mathit{\\Gamma}");
p("\\varDelta", "\\mathit{\\Delta}");
p("\\varTheta", "\\mathit{\\Theta}");
p("\\varLambda", "\\mathit{\\Lambda}");
p("\\varXi", "\\mathit{\\Xi}");
p("\\varPi", "\\mathit{\\Pi}");
p("\\varSigma", "\\mathit{\\Sigma}");
p("\\varUpsilon", "\\mathit{\\Upsilon}");
p("\\varPhi", "\\mathit{\\Phi}");
p("\\varPsi", "\\mathit{\\Psi}");
p("\\varOmega", "\\mathit{\\Omega}");
p("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
p("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
p("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
p("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
p("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
p("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
p("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
p("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var Ei = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx"
};
p("\\dots", function(r) {
    var e = "\\dotso"
      , t = r.expandAfterFuture().text;
    return t in Ei ? e = Ei[t] : (t.slice(0, 4) === "\\not" || t in Pe.math && ee.contains(["bin", "rel"], Pe.math[t].group)) && (e = "\\dotsb"),
    e
});
var cn = {
    ")": !0,
    "]": !0,
    "\\rbrack": !0,
    "\\}": !0,
    "\\rbrace": !0,
    "\\rangle": !0,
    "\\rceil": !0,
    "\\rfloor": !0,
    "\\rgroup": !0,
    "\\rmoustache": !0,
    "\\right": !0,
    "\\bigr": !0,
    "\\biggr": !0,
    "\\Bigr": !0,
    "\\Biggr": !0,
    $: !0,
    ";": !0,
    ".": !0,
    ",": !0
};
p("\\dotso", function(r) {
    var e = r.future().text;
    return e in cn ? "\\ldots\\," : "\\ldots"
});
p("\\dotsc", function(r) {
    var e = r.future().text;
    return e in cn && e !== "," ? "\\ldots\\," : "\\ldots"
});
p("\\cdots", function(r) {
    var e = r.future().text;
    return e in cn ? "\\@cdots\\," : "\\@cdots"
});
p("\\dotsb", "\\cdots");
p("\\dotsm", "\\cdots");
p("\\dotsi", "\\!\\cdots");
p("\\dotsx", "\\ldots\\,");
p("\\DOTSI", "\\relax");
p("\\DOTSB", "\\relax");
p("\\DOTSX", "\\relax");
p("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
p("\\,", "\\tmspace+{3mu}{.1667em}");
p("\\thinspace", "\\,");
p("\\>", "\\mskip{4mu}");
p("\\:", "\\tmspace+{4mu}{.2222em}");
p("\\medspace", "\\:");
p("\\;", "\\tmspace+{5mu}{.2777em}");
p("\\thickspace", "\\;");
p("\\!", "\\tmspace-{3mu}{.1667em}");
p("\\negthinspace", "\\!");
p("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
p("\\negthickspace", "\\tmspace-{5mu}{.277em}");
p("\\enspace", "\\kern.5em ");
p("\\enskip", "\\hskip.5em\\relax");
p("\\quad", "\\hskip1em\\relax");
p("\\qquad", "\\hskip2em\\relax");
p("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
p("\\tag@paren", "\\tag@literal{({#1})}");
p("\\tag@literal", r => {
    if (r.macros.get("\\df@tag"))
        throw new $("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}"
}
);
p("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
p("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
p("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
p("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
p("\\newline", "\\\\\\relax");
p("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var t1 = H(Ut["Main-Regular"][84][1] - .7 * Ut["Main-Regular"][65][1]);
p("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + t1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
p("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + t1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
p("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
p("\\@hspace", "\\hskip #1\\relax");
p("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
p("\\ordinarycolon", ":");
p("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
p("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
p("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
p("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
p("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
p("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
p("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
p("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
p("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
p("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
p("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
p("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
p("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
p("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
p("∷", "\\dblcolon");
p("∹", "\\eqcolon");
p("≔", "\\coloneqq");
p("≕", "\\eqqcolon");
p("⩴", "\\Coloneqq");
p("\\ratio", "\\vcentcolon");
p("\\coloncolon", "\\dblcolon");
p("\\colonequals", "\\coloneqq");
p("\\coloncolonequals", "\\Coloneqq");
p("\\equalscolon", "\\eqqcolon");
p("\\equalscoloncolon", "\\Eqqcolon");
p("\\colonminus", "\\coloneq");
p("\\coloncolonminus", "\\Coloneq");
p("\\minuscolon", "\\eqcolon");
p("\\minuscoloncolon", "\\Eqcolon");
p("\\coloncolonapprox", "\\Colonapprox");
p("\\coloncolonsim", "\\Colonsim");
p("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
p("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
p("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
p("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
p("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
p("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
p("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
p("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
p("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
p("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
p("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
p("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
p("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
p("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
p("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
p("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
p("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
p("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
p("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
p("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
p("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
p("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
p("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
p("\\imath", "\\html@mathml{\\@imath}{ı}");
p("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
p("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
p("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
p("⟦", "\\llbracket");
p("⟧", "\\rrbracket");
p("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
p("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
p("⦃", "\\lBrace");
p("⦄", "\\rBrace");
p("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
p("⦵", "\\minuso");
p("\\darr", "\\downarrow");
p("\\dArr", "\\Downarrow");
p("\\Darr", "\\Downarrow");
p("\\lang", "\\langle");
p("\\rang", "\\rangle");
p("\\uarr", "\\uparrow");
p("\\uArr", "\\Uparrow");
p("\\Uarr", "\\Uparrow");
p("\\N", "\\mathbb{N}");
p("\\R", "\\mathbb{R}");
p("\\Z", "\\mathbb{Z}");
p("\\alef", "\\aleph");
p("\\alefsym", "\\aleph");
p("\\Alpha", "\\mathrm{A}");
p("\\Beta", "\\mathrm{B}");
p("\\bull", "\\bullet");
p("\\Chi", "\\mathrm{X}");
p("\\clubs", "\\clubsuit");
p("\\cnums", "\\mathbb{C}");
p("\\Complex", "\\mathbb{C}");
p("\\Dagger", "\\ddagger");
p("\\diamonds", "\\diamondsuit");
p("\\empty", "\\emptyset");
p("\\Epsilon", "\\mathrm{E}");
p("\\Eta", "\\mathrm{H}");
p("\\exist", "\\exists");
p("\\harr", "\\leftrightarrow");
p("\\hArr", "\\Leftrightarrow");
p("\\Harr", "\\Leftrightarrow");
p("\\hearts", "\\heartsuit");
p("\\image", "\\Im");
p("\\infin", "\\infty");
p("\\Iota", "\\mathrm{I}");
p("\\isin", "\\in");
p("\\Kappa", "\\mathrm{K}");
p("\\larr", "\\leftarrow");
p("\\lArr", "\\Leftarrow");
p("\\Larr", "\\Leftarrow");
p("\\lrarr", "\\leftrightarrow");
p("\\lrArr", "\\Leftrightarrow");
p("\\Lrarr", "\\Leftrightarrow");
p("\\Mu", "\\mathrm{M}");
p("\\natnums", "\\mathbb{N}");
p("\\Nu", "\\mathrm{N}");
p("\\Omicron", "\\mathrm{O}");
p("\\plusmn", "\\pm");
p("\\rarr", "\\rightarrow");
p("\\rArr", "\\Rightarrow");
p("\\Rarr", "\\Rightarrow");
p("\\real", "\\Re");
p("\\reals", "\\mathbb{R}");
p("\\Reals", "\\mathbb{R}");
p("\\Rho", "\\mathrm{P}");
p("\\sdot", "\\cdot");
p("\\sect", "\\S");
p("\\spades", "\\spadesuit");
p("\\sub", "\\subset");
p("\\sube", "\\subseteq");
p("\\supe", "\\supseteq");
p("\\Tau", "\\mathrm{T}");
p("\\thetasym", "\\vartheta");
p("\\weierp", "\\wp");
p("\\Zeta", "\\mathrm{Z}");
p("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
p("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
p("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
p("\\bra", "\\mathinner{\\langle{#1}|}");
p("\\ket", "\\mathinner{|{#1}\\rangle}");
p("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
p("\\Bra", "\\left\\langle#1\\right|");
p("\\Ket", "\\left|#1\\right\\rangle");
var r1 = r => e => {
    var t = e.consumeArg().tokens
      , a = e.consumeArg().tokens
      , s = e.consumeArg().tokens
      , n = e.consumeArg().tokens
      , i = e.macros.get("|")
      , l = e.macros.get("\\|");
    e.macros.beginGroup();
    var u = f => b => {
        r && (b.macros.set("|", i),
        s.length && b.macros.set("\\|", l));
        var g = f;
        if (!f && s.length) {
            var w = b.future();
            w.text === "|" && (b.popToken(),
            g = !0)
        }
        return {
            tokens: g ? s : a,
            numArgs: 0
        }
    }
    ;
    e.macros.set("|", u(!1)),
    s.length && e.macros.set("\\|", u(!0));
    var d = e.consumeArg().tokens
      , m = e.expandTokens([...n, ...d, ...t]);
    return e.macros.endGroup(),
    {
        tokens: m.reverse(),
        numArgs: 0
    }
}
;
p("\\bra@ket", r1(!1));
p("\\bra@set", r1(!0));
p("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
p("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
p("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
p("\\angln", "{\\angl n}");
p("\\blue", "\\textcolor{##6495ed}{#1}");
p("\\orange", "\\textcolor{##ffa500}{#1}");
p("\\pink", "\\textcolor{##ff00af}{#1}");
p("\\red", "\\textcolor{##df0030}{#1}");
p("\\green", "\\textcolor{##28ae7b}{#1}");
p("\\gray", "\\textcolor{gray}{#1}");
p("\\purple", "\\textcolor{##9d38bd}{#1}");
p("\\blueA", "\\textcolor{##ccfaff}{#1}");
p("\\blueB", "\\textcolor{##80f6ff}{#1}");
p("\\blueC", "\\textcolor{##63d9ea}{#1}");
p("\\blueD", "\\textcolor{##11accd}{#1}");
p("\\blueE", "\\textcolor{##0c7f99}{#1}");
p("\\tealA", "\\textcolor{##94fff5}{#1}");
p("\\tealB", "\\textcolor{##26edd5}{#1}");
p("\\tealC", "\\textcolor{##01d1c1}{#1}");
p("\\tealD", "\\textcolor{##01a995}{#1}");
p("\\tealE", "\\textcolor{##208170}{#1}");
p("\\greenA", "\\textcolor{##b6ffb0}{#1}");
p("\\greenB", "\\textcolor{##8af281}{#1}");
p("\\greenC", "\\textcolor{##74cf70}{#1}");
p("\\greenD", "\\textcolor{##1fab54}{#1}");
p("\\greenE", "\\textcolor{##0d923f}{#1}");
p("\\goldA", "\\textcolor{##ffd0a9}{#1}");
p("\\goldB", "\\textcolor{##ffbb71}{#1}");
p("\\goldC", "\\textcolor{##ff9c39}{#1}");
p("\\goldD", "\\textcolor{##e07d10}{#1}");
p("\\goldE", "\\textcolor{##a75a05}{#1}");
p("\\redA", "\\textcolor{##fca9a9}{#1}");
p("\\redB", "\\textcolor{##ff8482}{#1}");
p("\\redC", "\\textcolor{##f9685d}{#1}");
p("\\redD", "\\textcolor{##e84d39}{#1}");
p("\\redE", "\\textcolor{##bc2612}{#1}");
p("\\maroonA", "\\textcolor{##ffbde0}{#1}");
p("\\maroonB", "\\textcolor{##ff92c6}{#1}");
p("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
p("\\maroonD", "\\textcolor{##ca337c}{#1}");
p("\\maroonE", "\\textcolor{##9e034e}{#1}");
p("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
p("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
p("\\purpleC", "\\textcolor{##aa87ff}{#1}");
p("\\purpleD", "\\textcolor{##7854ab}{#1}");
p("\\purpleE", "\\textcolor{##543b78}{#1}");
p("\\mintA", "\\textcolor{##f5f9e8}{#1}");
p("\\mintB", "\\textcolor{##edf2df}{#1}");
p("\\mintC", "\\textcolor{##e0e5cc}{#1}");
p("\\grayA", "\\textcolor{##f6f7f7}{#1}");
p("\\grayB", "\\textcolor{##f0f1f2}{#1}");
p("\\grayC", "\\textcolor{##e3e5e6}{#1}");
p("\\grayD", "\\textcolor{##d6d8da}{#1}");
p("\\grayE", "\\textcolor{##babec2}{#1}");
p("\\grayF", "\\textcolor{##888d93}{#1}");
p("\\grayG", "\\textcolor{##626569}{#1}");
p("\\grayH", "\\textcolor{##3b3e40}{#1}");
p("\\grayI", "\\textcolor{##21242c}{#1}");
p("\\kaBlue", "\\textcolor{##314453}{#1}");
p("\\kaGreen", "\\textcolor{##71B307}{#1}");
var a1 = {
    "^": !0,
    _: !0,
    "\\limits": !0,
    "\\nolimits": !0
};
class N6 {
    constructor(e, t, a) {
        this.settings = void 0,
        this.expansionCount = void 0,
        this.lexer = void 0,
        this.macros = void 0,
        this.stack = void 0,
        this.mode = void 0,
        this.settings = t,
        this.expansionCount = 0,
        this.feed(e),
        this.macros = new L6(O6,t.macros),
        this.mode = a,
        this.stack = []
    }
    feed(e) {
        this.lexer = new Ci(e,this.settings)
    }
    switchMode(e) {
        this.mode = e
    }
    beginGroup() {
        this.macros.beginGroup()
    }
    endGroup() {
        this.macros.endGroup()
    }
    endGroups() {
        this.macros.endGroups()
    }
    future() {
        return this.stack.length === 0 && this.pushToken(this.lexer.lex()),
        this.stack[this.stack.length - 1]
    }
    popToken() {
        return this.future(),
        this.stack.pop()
    }
    pushToken(e) {
        this.stack.push(e)
    }
    pushTokens(e) {
        this.stack.push(...e)
    }
    scanArgument(e) {
        var t, a, s;
        if (e) {
            if (this.consumeSpaces(),
            this.future().text !== "[")
                return null;
            t = this.popToken(),
            {tokens: s, end: a} = this.consumeArg(["]"])
        } else
            ({tokens: s, start: t, end: a} = this.consumeArg());
        return this.pushToken(new Bt("EOF",a.loc)),
        this.pushTokens(s),
        t.range(a, "")
    }
    consumeSpaces() {
        for (; ; ) {
            var e = this.future();
            if (e.text === " ")
                this.stack.pop();
            else
                break
        }
    }
    consumeArg(e) {
        var t = []
          , a = e && e.length > 0;
        a || this.consumeSpaces();
        var s = this.future(), n, i = 0, l = 0;
        do {
            if (n = this.popToken(),
            t.push(n),
            n.text === "{")
                ++i;
            else if (n.text === "}") {
                if (--i,
                i === -1)
                    throw new $("Extra }",n)
            } else if (n.text === "EOF")
                throw new $("Unexpected end of input in a macro argument, expected '" + (e && a ? e[l] : "}") + "'",n);
            if (e && a)
                if ((i === 0 || i === 1 && e[l] === "{") && n.text === e[l]) {
                    if (++l,
                    l === e.length) {
                        t.splice(-l, l);
                        break
                    }
                } else
                    l = 0
        } while (i !== 0 || a);
        return s.text === "{" && t[t.length - 1].text === "}" && (t.pop(),
        t.shift()),
        t.reverse(),
        {
            tokens: t,
            start: s,
            end: n
        }
    }
    consumeArgs(e, t) {
        if (t) {
            if (t.length !== e + 1)
                throw new $("The length of delimiters doesn't match the number of args!");
            for (var a = t[0], s = 0; s < a.length; s++) {
                var n = this.popToken();
                if (a[s] !== n.text)
                    throw new $("Use of the macro doesn't match its definition",n)
            }
        }
        for (var i = [], l = 0; l < e; l++)
            i.push(this.consumeArg(t && t[l + 1]).tokens);
        return i
    }
    countExpansion(e) {
        if (this.expansionCount += e,
        this.expansionCount > this.settings.maxExpand)
            throw new $("Too many expansions: infinite loop or need to increase maxExpand setting")
    }
    expandOnce(e) {
        var t = this.popToken()
          , a = t.text
          , s = t.noexpand ? null : this._getExpansion(a);
        if (s == null || e && s.unexpandable) {
            if (e && s == null && a[0] === "\\" && !this.isDefined(a))
                throw new $("Undefined control sequence: " + a);
            return this.pushToken(t),
            !1
        }
        this.countExpansion(1);
        var n = s.tokens
          , i = this.consumeArgs(s.numArgs, s.delimiters);
        if (s.numArgs) {
            n = n.slice();
            for (var l = n.length - 1; l >= 0; --l) {
                var u = n[l];
                if (u.text === "#") {
                    if (l === 0)
                        throw new $("Incomplete placeholder at end of macro body",u);
                    if (u = n[--l],
                    u.text === "#")
                        n.splice(l + 1, 1);
                    else if (/^[1-9]$/.test(u.text))
                        n.splice(l, 2, ...i[+u.text - 1]);
                    else
                        throw new $("Not a valid argument number",u)
                }
            }
        }
        return this.pushTokens(n),
        n.length
    }
    expandAfterFuture() {
        return this.expandOnce(),
        this.future()
    }
    expandNextToken() {
        for (; ; )
            if (this.expandOnce() === !1) {
                var e = this.stack.pop();
                return e.treatAsRelax && (e.text = "\\relax"),
                e
            }
        throw new Error
    }
    expandMacro(e) {
        return this.macros.has(e) ? this.expandTokens([new Bt(e)]) : void 0
    }
    expandTokens(e) {
        var t = []
          , a = this.stack.length;
        for (this.pushTokens(e); this.stack.length > a; )
            if (this.expandOnce(!0) === !1) {
                var s = this.stack.pop();
                s.treatAsRelax && (s.noexpand = !1,
                s.treatAsRelax = !1),
                t.push(s)
            }
        return this.countExpansion(t.length),
        t
    }
    expandMacroAsText(e) {
        var t = this.expandMacro(e);
        return t && t.map(a => a.text).join("")
    }
    _getExpansion(e) {
        var t = this.macros.get(e);
        if (t == null)
            return t;
        if (e.length === 1) {
            var a = this.lexer.catcodes[e];
            if (a != null && a !== 13)
                return
        }
        var s = typeof t == "function" ? t(this) : t;
        if (typeof s == "string") {
            var n = 0;
            if (s.indexOf("#") !== -1)
                for (var i = s.replace(/##/g, ""); i.indexOf("#" + (n + 1)) !== -1; )
                    ++n;
            for (var l = new Ci(s,this.settings), u = [], d = l.lex(); d.text !== "EOF"; )
                u.push(d),
                d = l.lex();
            u.reverse();
            var m = {
                tokens: u,
                numArgs: n
            };
            return m
        }
        return s
    }
    isDefined(e) {
        return this.macros.has(e) || p0.hasOwnProperty(e) || Pe.math.hasOwnProperty(e) || Pe.text.hasOwnProperty(e) || a1.hasOwnProperty(e)
    }
    isExpandable(e) {
        var t = this.macros.get(e);
        return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : p0.hasOwnProperty(e) && !p0[e].primitive
    }
}
var Bi = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/
  , Nr = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    "ₐ": "a",
    "ₑ": "e",
    "ₕ": "h",
    "ᵢ": "i",
    "ⱼ": "j",
    "ₖ": "k",
    "ₗ": "l",
    "ₘ": "m",
    "ₙ": "n",
    "ₒ": "o",
    "ₚ": "p",
    "ᵣ": "r",
    "ₛ": "s",
    "ₜ": "t",
    "ᵤ": "u",
    "ᵥ": "v",
    "ₓ": "x",
    "ᵦ": "β",
    "ᵧ": "γ",
    "ᵨ": "ρ",
    "ᵩ": "ϕ",
    "ᵪ": "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    "ᴬ": "A",
    "ᴮ": "B",
    "ᴰ": "D",
    "ᴱ": "E",
    "ᴳ": "G",
    "ᴴ": "H",
    "ᴵ": "I",
    "ᴶ": "J",
    "ᴷ": "K",
    "ᴸ": "L",
    "ᴹ": "M",
    "ᴺ": "N",
    "ᴼ": "O",
    "ᴾ": "P",
    "ᴿ": "R",
    "ᵀ": "T",
    "ᵁ": "U",
    "ⱽ": "V",
    "ᵂ": "W",
    "ᵃ": "a",
    "ᵇ": "b",
    "ᶜ": "c",
    "ᵈ": "d",
    "ᵉ": "e",
    "ᶠ": "f",
    "ᵍ": "g",
    ʰ: "h",
    "ⁱ": "i",
    ʲ: "j",
    "ᵏ": "k",
    ˡ: "l",
    "ᵐ": "m",
    ⁿ: "n",
    "ᵒ": "o",
    "ᵖ": "p",
    ʳ: "r",
    ˢ: "s",
    "ᵗ": "t",
    "ᵘ": "u",
    "ᵛ": "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    "ᶻ": "z",
    "ᵝ": "β",
    "ᵞ": "γ",
    "ᵟ": "δ",
    "ᵠ": "ϕ",
    "ᵡ": "χ",
    "ᶿ": "θ"
})
  , Ga = {
    "́": {
        text: "\\'",
        math: "\\acute"
    },
    "̀": {
        text: "\\`",
        math: "\\grave"
    },
    "̈": {
        text: '\\"',
        math: "\\ddot"
    },
    "̃": {
        text: "\\~",
        math: "\\tilde"
    },
    "̄": {
        text: "\\=",
        math: "\\bar"
    },
    "̆": {
        text: "\\u",
        math: "\\breve"
    },
    "̌": {
        text: "\\v",
        math: "\\check"
    },
    "̂": {
        text: "\\^",
        math: "\\hat"
    },
    "̇": {
        text: "\\.",
        math: "\\dot"
    },
    "̊": {
        text: "\\r",
        math: "\\mathring"
    },
    "̋": {
        text: "\\H"
    },
    "̧": {
        text: "\\c"
    }
}
  , zi = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ"
};
class Sa {
    constructor(e, t) {
        this.mode = void 0,
        this.gullet = void 0,
        this.settings = void 0,
        this.leftrightDepth = void 0,
        this.nextToken = void 0,
        this.mode = "math",
        this.gullet = new N6(e,t,this.mode),
        this.settings = t,
        this.leftrightDepth = 0
    }
    expect(e, t) {
        if (t === void 0 && (t = !0),
        this.fetch().text !== e)
            throw new $("Expected '" + e + "', got '" + this.fetch().text + "'",this.fetch());
        t && this.consume()
    }
    consume() {
        this.nextToken = null
    }
    fetch() {
        return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()),
        this.nextToken
    }
    switchMode(e) {
        this.mode = e,
        this.gullet.switchMode(e)
    }
    parse() {
        this.settings.globalGroup || this.gullet.beginGroup(),
        this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
        try {
            var e = this.parseExpression(!1);
            return this.expect("EOF"),
            this.settings.globalGroup || this.gullet.endGroup(),
            e
        } finally {
            this.gullet.endGroups()
        }
    }
    subparse(e) {
        var t = this.nextToken;
        this.consume(),
        this.gullet.pushToken(new Bt("}")),
        this.gullet.pushTokens(e);
        var a = this.parseExpression(!1);
        return this.expect("}"),
        this.nextToken = t,
        a
    }
    parseExpression(e, t) {
        for (var a = []; ; ) {
            this.mode === "math" && this.consumeSpaces();
            var s = this.fetch();
            if (Sa.endOfExpression.indexOf(s.text) !== -1 || t && s.text === t || e && p0[s.text] && p0[s.text].infix)
                break;
            var n = this.parseAtom(t);
            if (n) {
                if (n.type === "internal")
                    continue
            } else
                break;
            a.push(n)
        }
        return this.mode === "text" && this.formLigatures(a),
        this.handleInfixNodes(a)
    }
    handleInfixNodes(e) {
        for (var t = -1, a, s = 0; s < e.length; s++)
            if (e[s].type === "infix") {
                if (t !== -1)
                    throw new $("only one infix operator per group",e[s].token);
                t = s,
                a = e[s].replaceWith
            }
        if (t !== -1 && a) {
            var n, i, l = e.slice(0, t), u = e.slice(t + 1);
            l.length === 1 && l[0].type === "ordgroup" ? n = l[0] : n = {
                type: "ordgroup",
                mode: this.mode,
                body: l
            },
            u.length === 1 && u[0].type === "ordgroup" ? i = u[0] : i = {
                type: "ordgroup",
                mode: this.mode,
                body: u
            };
            var d;
            return a === "\\\\abovefrac" ? d = this.callFunction(a, [n, e[t], i], []) : d = this.callFunction(a, [n, i], []),
            [d]
        } else
            return e
    }
    handleSupSubscript(e) {
        var t = this.fetch()
          , a = t.text;
        this.consume(),
        this.consumeSpaces();
        var s;
        do {
            var n;
            s = this.parseGroup(e)
        } while (((n = s) == null ? void 0 : n.type) === "internal");
        if (!s)
            throw new $("Expected group after '" + a + "'",t);
        return s
    }
    formatUnsupportedCmd(e) {
        for (var t = [], a = 0; a < e.length; a++)
            t.push({
                type: "textord",
                mode: "text",
                text: e[a]
            });
        var s = {
            type: "text",
            mode: this.mode,
            body: t
        }
          , n = {
            type: "color",
            mode: this.mode,
            color: this.settings.errorColor,
            body: [s]
        };
        return n
    }
    parseAtom(e) {
        var t = this.parseGroup("atom", e);
        if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text")
            return t;
        for (var a, s; ; ) {
            this.consumeSpaces();
            var n = this.fetch();
            if (n.text === "\\limits" || n.text === "\\nolimits") {
                if (t && t.type === "op") {
                    var i = n.text === "\\limits";
                    t.limits = i,
                    t.alwaysHandleSupSub = !0
                } else if (t && t.type === "operatorname")
                    t.alwaysHandleSupSub && (t.limits = n.text === "\\limits");
                else
                    throw new $("Limit controls must follow a math operator",n);
                this.consume()
            } else if (n.text === "^") {
                if (a)
                    throw new $("Double superscript",n);
                a = this.handleSupSubscript("superscript")
            } else if (n.text === "_") {
                if (s)
                    throw new $("Double subscript",n);
                s = this.handleSupSubscript("subscript")
            } else if (n.text === "'") {
                if (a)
                    throw new $("Double superscript",n);
                var l = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                }
                  , u = [l];
                for (this.consume(); this.fetch().text === "'"; )
                    u.push(l),
                    this.consume();
                this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")),
                a = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: u
                }
            } else if (Nr[n.text]) {
                var d = Bi.test(n.text)
                  , m = [];
                for (m.push(new Bt(Nr[n.text])),
                this.consume(); ; ) {
                    var f = this.fetch().text;
                    if (!Nr[f] || Bi.test(f) !== d)
                        break;
                    m.unshift(new Bt(Nr[f])),
                    this.consume()
                }
                var b = this.subparse(m);
                d ? s = {
                    type: "ordgroup",
                    mode: "math",
                    body: b
                } : a = {
                    type: "ordgroup",
                    mode: "math",
                    body: b
                }
            } else
                break
        }
        return a || s ? {
            type: "supsub",
            mode: this.mode,
            base: t,
            sup: a,
            sub: s
        } : t
    }
    parseFunction(e, t) {
        var a = this.fetch()
          , s = a.text
          , n = p0[s];
        if (!n)
            return null;
        if (this.consume(),
        t && t !== "atom" && !n.allowedInArgument)
            throw new $("Got function '" + s + "' with no arguments" + (t ? " as " + t : ""),a);
        if (this.mode === "text" && !n.allowedInText)
            throw new $("Can't use function '" + s + "' in text mode",a);
        if (this.mode === "math" && n.allowedInMath === !1)
            throw new $("Can't use function '" + s + "' in math mode",a);
        var {args: i, optArgs: l} = this.parseArguments(s, n);
        return this.callFunction(s, i, l, a, e)
    }
    callFunction(e, t, a, s, n) {
        var i = {
            funcName: e,
            parser: this,
            token: s,
            breakOnTokenText: n
        }
          , l = p0[e];
        if (l && l.handler)
            return l.handler(i, t, a);
        throw new $("No function handler for " + e)
    }
    parseArguments(e, t) {
        var a = t.numArgs + t.numOptionalArgs;
        if (a === 0)
            return {
                args: [],
                optArgs: []
            };
        for (var s = [], n = [], i = 0; i < a; i++) {
            var l = t.argTypes && t.argTypes[i]
              , u = i < t.numOptionalArgs;
            (t.primitive && l == null || t.type === "sqrt" && i === 1 && n[0] == null) && (l = "primitive");
            var d = this.parseGroupOfType("argument to '" + e + "'", l, u);
            if (u)
                n.push(d);
            else if (d != null)
                s.push(d);
            else
                throw new $("Null argument, please report this as a bug")
        }
        return {
            args: s,
            optArgs: n
        }
    }
    parseGroupOfType(e, t, a) {
        switch (t) {
        case "color":
            return this.parseColorGroup(a);
        case "size":
            return this.parseSizeGroup(a);
        case "url":
            return this.parseUrlGroup(a);
        case "math":
        case "text":
            return this.parseArgumentGroup(a, t);
        case "hbox":
            {
                var s = this.parseArgumentGroup(a, "text");
                return s != null ? {
                    type: "styling",
                    mode: s.mode,
                    body: [s],
                    style: "text"
                } : null
            }
        case "raw":
            {
                var n = this.parseStringGroup("raw", a);
                return n != null ? {
                    type: "raw",
                    mode: "text",
                    string: n.text
                } : null
            }
        case "primitive":
            {
                if (a)
                    throw new $("A primitive argument cannot be optional");
                var i = this.parseGroup(e);
                if (i == null)
                    throw new $("Expected group as " + e,this.fetch());
                return i
            }
        case "original":
        case null:
        case void 0:
            return this.parseArgumentGroup(a);
        default:
            throw new $("Unknown group type as " + e,this.fetch())
        }
    }
    consumeSpaces() {
        for (; this.fetch().text === " "; )
            this.consume()
    }
    parseStringGroup(e, t) {
        var a = this.gullet.scanArgument(t);
        if (a == null)
            return null;
        for (var s = "", n; (n = this.fetch()).text !== "EOF"; )
            s += n.text,
            this.consume();
        return this.consume(),
        a.text = s,
        a
    }
    parseRegexGroup(e, t) {
        for (var a = this.fetch(), s = a, n = "", i; (i = this.fetch()).text !== "EOF" && e.test(n + i.text); )
            s = i,
            n += s.text,
            this.consume();
        if (n === "")
            throw new $("Invalid " + t + ": '" + a.text + "'",a);
        return a.range(s, n)
    }
    parseColorGroup(e) {
        var t = this.parseStringGroup("color", e);
        if (t == null)
            return null;
        var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
        if (!a)
            throw new $("Invalid color: '" + t.text + "'",t);
        var s = a[0];
        return /^[0-9a-f]{6}$/i.test(s) && (s = "#" + s),
        {
            type: "color-token",
            mode: this.mode,
            color: s
        }
    }
    parseSizeGroup(e) {
        var t, a = !1;
        if (this.gullet.consumeSpaces(),
        !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e),
        !t)
            return null;
        !e && t.text.length === 0 && (t.text = "0pt",
        a = !0);
        var s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
        if (!s)
            throw new $("Invalid size: '" + t.text + "'",t);
        var n = {
            number: +(s[1] + s[2]),
            unit: s[3]
        };
        if (!ml(n))
            throw new $("Invalid unit: '" + n.unit + "'",t);
        return {
            type: "size",
            mode: this.mode,
            value: n,
            isBlank: a
        }
    }
    parseUrlGroup(e) {
        this.gullet.lexer.setCatcode("%", 13),
        this.gullet.lexer.setCatcode("~", 12);
        var t = this.parseStringGroup("url", e);
        if (this.gullet.lexer.setCatcode("%", 14),
        this.gullet.lexer.setCatcode("~", 13),
        t == null)
            return null;
        var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
        return {
            type: "url",
            mode: this.mode,
            url: a
        }
    }
    parseArgumentGroup(e, t) {
        var a = this.gullet.scanArgument(e);
        if (a == null)
            return null;
        var s = this.mode;
        t && this.switchMode(t),
        this.gullet.beginGroup();
        var n = this.parseExpression(!1, "EOF");
        this.expect("EOF"),
        this.gullet.endGroup();
        var i = {
            type: "ordgroup",
            mode: this.mode,
            loc: a.loc,
            body: n
        };
        return t && this.switchMode(s),
        i
    }
    parseGroup(e, t) {
        var a = this.fetch(), s = a.text, n;
        if (s === "{" || s === "\\begingroup") {
            this.consume();
            var i = s === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var l = this.parseExpression(!1, i)
              , u = this.fetch();
            this.expect(i),
            this.gullet.endGroup(),
            n = {
                type: "ordgroup",
                mode: this.mode,
                loc: xt.range(a, u),
                body: l,
                semisimple: s === "\\begingroup" || void 0
            }
        } else if (n = this.parseFunction(t, e) || this.parseSymbol(),
        n == null && s[0] === "\\" && !a1.hasOwnProperty(s)) {
            if (this.settings.throwOnError)
                throw new $("Undefined control sequence: " + s,a);
            n = this.formatUnsupportedCmd(s),
            this.consume()
        }
        return n
    }
    formLigatures(e) {
        for (var t = e.length - 1, a = 0; a < t; ++a) {
            var s = e[a]
              , n = s.text;
            n === "-" && e[a + 1].text === "-" && (a + 1 < t && e[a + 2].text === "-" ? (e.splice(a, 3, {
                type: "textord",
                mode: "text",
                loc: xt.range(s, e[a + 2]),
                text: "---"
            }),
            t -= 2) : (e.splice(a, 2, {
                type: "textord",
                mode: "text",
                loc: xt.range(s, e[a + 1]),
                text: "--"
            }),
            t -= 1)),
            (n === "'" || n === "`") && e[a + 1].text === n && (e.splice(a, 2, {
                type: "textord",
                mode: "text",
                loc: xt.range(s, e[a + 1]),
                text: n + n
            }),
            t -= 1)
        }
    }
    parseSymbol() {
        var e = this.fetch()
          , t = e.text;
        if (/^\\verb[^a-zA-Z]/.test(t)) {
            this.consume();
            var a = t.slice(5)
              , s = a.charAt(0) === "*";
            if (s && (a = a.slice(1)),
            a.length < 2 || a.charAt(0) !== a.slice(-1))
                throw new $(`\\verb assertion failed --
                    please report what input caused this bug`);
            return a = a.slice(1, -1),
            {
                type: "verb",
                mode: "text",
                body: a,
                star: s
            }
        }
        zi.hasOwnProperty(t[0]) && !Pe[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e),
        t = zi[t[0]] + t.slice(1));
        var n = B6.exec(t);
        n && (t = t.substring(0, n.index),
        t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
        var i;
        if (Pe[this.mode][t]) {
            this.settings.strict && this.mode === "math" && xs.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
            var l = Pe[this.mode][t].group, u = xt.range(e), d;
            if (k5.hasOwnProperty(l)) {
                var m = l;
                d = {
                    type: "atom",
                    mode: this.mode,
                    family: m,
                    loc: u,
                    text: t
                }
            } else
                d = {
                    type: l,
                    mode: this.mode,
                    loc: u,
                    text: t
                };
            i = d
        } else if (t.charCodeAt(0) >= 128)
            this.settings.strict && (hl(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)),
            i = {
                type: "textord",
                mode: "text",
                loc: xt.range(e),
                text: t
            };
        else
            return null;
        if (this.consume(),
        n)
            for (var f = 0; f < n[0].length; f++) {
                var b = n[0][f];
                if (!Ga[b])
                    throw new $("Unknown accent ' " + b + "'",e);
                var g = Ga[b][this.mode] || Ga[b].text;
                if (!g)
                    throw new $("Accent " + b + " unsupported in " + this.mode + " mode",e);
                i = {
                    type: "accent",
                    mode: this.mode,
                    loc: xt.range(e),
                    label: g,
                    isStretchy: !1,
                    isShifty: !0,
                    base: i
                }
            }
        return i
    }
}
Sa.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var un = function(e, t) {
    if (!(typeof e == "string" || e instanceof String))
        throw new TypeError("KaTeX can only parse string typed expression");
    var a = new Sa(e,t);
    delete a.gullet.macros.current["\\df@tag"];
    var s = a.parse();
    if (delete a.gullet.macros.current["\\current@color"],
    delete a.gullet.macros.current["\\color"],
    a.gullet.macros.get("\\df@tag")) {
        if (!t.displayMode)
            throw new $("\\tag works only in display equations");
        s = [{
            type: "tag",
            mode: "text",
            body: s,
            tag: a.subparse([new Bt("\\df@tag")])
        }]
    }
    return s
}
  , s1 = function(e, t, a) {
    t.textContent = "";
    var s = dn(e, a).toNode();
    t.appendChild(s)
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),
s1 = function() {
    throw new $("KaTeX doesn't work in quirks mode.")
}
);
var D6 = function(e, t) {
    var a = dn(e, t).toMarkup();
    return a
}
  , F6 = function(e, t) {
    var a = new Us(t);
    return un(e, a)
}
  , n1 = function(e, t, a) {
    if (a.throwOnError || !(e instanceof $))
        throw e;
    var s = T.makeSpan(["katex-error"], [new Lt(t)]);
    return s.setAttribute("title", e.toString()),
    s.setAttribute("style", "color:" + a.errorColor),
    s
}
  , dn = function(e, t) {
    var a = new Us(t);
    try {
        var s = un(e, a);
        return V5(s, e, a)
    } catch (n) {
        return n1(n, e, a)
    }
}
  , _6 = function(e, t) {
    var a = new Us(t);
    try {
        var s = un(e, a);
        return j5(s, e, a)
    } catch (n) {
        return n1(n, e, a)
    }
}
  , $6 = "0.16.22"
  , P6 = {
    Span: Ar,
    Anchor: Ws,
    SymbolNode: Lt,
    SvgNode: s0,
    PathNode: g0,
    LineNode: ws
}
  , J0 = {
    version: $6,
    render: s1,
    renderToString: D6,
    ParseError: $,
    SETTINGS_SCHEMA: Qr,
    __parse: F6,
    __renderToDomTree: dn,
    __renderToHTMLTree: _6,
    __setFontMetrics: f5,
    __defineSymbol: o,
    __defineFunction: G,
    __defineMacro: p,
    __domTree: P6
};
const H6 = ["\\frac", "\\cos", "\\sin", "\\log", "\\sqrt", "\\sum", "\\div", "\\int", "\\quad", "\\qquad", "\\left", "\\right", "\\pm", "\\leqq", "\\mp", "\\triangleright", "\\cdot$", "\\star", "\\cup", "\\cap", "\\ne", "\\vee", "\\perp", "\\leqq", "\\leqq", "\\ominus", "\\le", "\\propto", "\\sim", "\\doteq", "\\angle", "\\parallel", "\\lneq", "\\ngtr", "\\nless", "\\approx", "\\cong", "\\therefore", "\\because", "\\alpha", "\\beta", "\\theta", "\\eta", "\\epsilon", "\\pi", "\\mu", "\\nu", "\\lambda", "\\kappa", "\\Phi", "\\Omega", "\\Delta", "\\backsim", "\\Psi", "\\prod_{a}^", "\\coprod_{a}^", "\\bigcup_{a}^", "\\bigcap_{a}^", "\\bigvee_{a}^", "\\bigwedge_{a}^", "\\Leftarrow", "\\Rightarrow", "\\nLeftarrow", "\\Longleftrightarrow", "\\to", "\\gets", "\\rightleftharpoons", "\\infty", "\\dfrac", "\\times", "\\lg", "\\cdot", "\\overrightarrow", "\\ln", "\\ce", "\\lt", "\\gt"]
  , q6 = ["{align\\*}"]
  , Q6 = `${H6.map(r => `(\\${r})`).join("|")}`
  , G6 = new RegExp(Q6)
  , U6 = `${q6.map(r => `(${r})`).join("|")}`
  , V6 = new RegExp(U6)
  , Li = r => {
    const e = {
        "·": "⋅"
    };
    return Object.keys(e).forEach(t => {
        r.includes(t) && (r = r.replace(t, e[t]))
    }
    ),
    r
}
;
function Oi(r, e) {
    var t, a, s = r.posMax, n = !0, i = !0;
    return t = e > 0 ? r.src.charCodeAt(e - 1) : -1,
    a = e + 1 <= s ? r.src.charCodeAt(e + 1) : -1,
    (t === 9 || a >= 48 && a <= 57) && (i = !1),
    a === 9 && (n = !1),
    {
        can_open: n,
        can_close: i
    }
}
function Ni(r, e) {
    var t, a, s, n, i;
    if (r.src.match(/((?:\\\())|((?:\\\)))/g) && (r.src = r.src.replace(/((?:\\\())|((?:\\\)))/g, "$") || ""),
    r.src[r.pos] !== "$")
        return !1;
    if (n = Oi(r, r.pos),
    !n.can_open)
        return e || (r.pending += "$"),
        r.pos += 1,
        !0;
    for (t = r.pos + 1,
    a = t; (a = r.src.indexOf("$", a)) !== -1; ) {
        for (i = a - 1; r.src[i] === "\\"; )
            i -= 1;
        if ((a - i) % 2 == 1)
            break;
        a += 1
    }
    return a === -1 ? (e || (r.pending += "$"),
    r.pos = t,
    !0) : a - t === 0 ? (e || (r.pending += "$$"),
    r.pos = t + 1,
    !0) : (n = Oi(r, a),
    n.can_close ? (e || (s = r.push("math_inline", "math", 0),
    s.markup = "$",
    s.content = r.src.slice(t, a)),
    r.pos = a + 1,
    !0) : (e || (r.pending += "$"),
    r.pos = t,
    !0))
}
function j6(r, e, t, a) {
    var s, n, i, l, u = !1, d, m = r.bMarks[e] + r.tShift[e], f = r.eMarks[e];
    if (m + 2 > f || !["$$", "\\["].includes(r.src.slice(m, m + 2)))
        return !1;
    if (m += 2,
    s = r.src.slice(m, f),
    a)
        return !0;
    for (["$$", "\\]"].includes(s.trim().slice(-2)) && (s = s.trim().slice(0, -2),
    u = !0),
    i = e; !u && (i++,
    !(i >= t || (m = r.bMarks[i] + r.tShift[i],
    f = r.eMarks[i],
    m < f && r.tShift[i] < r.blkIndent))); )
        ["$$", "\\]"].includes(r.src.slice(m, f).trim().slice(-2)) && (l = r.src.slice(0, f).lastIndexOf("$$") !== -1 ? r.src.slice(0, f).lastIndexOf("$$") : r.src.slice(0, f).lastIndexOf("\\]"),
        n = r.src.slice(m, l),
        u = !0);
    return r.line = i + 1,
    d = r.push("math_block", "math", 0),
    d.block = !0,
    d.content = (s && s.trim() ? s + `
` : "") + r.getLines(e + 1, i, r.tShift[e], !0) + (n && n.trim() ? n : ""),
    d.map = [e, r.line],
    d.markup = "$$",
    !0
}
function N0(r) {
    return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
function W6(r, e) {
    e = e || {},
    e.blockClass || (e.blockClass = "");
    var t = function(l) {
        e.displayMode = !1;
        try {
            const u = Li(l);
            return J0.renderToString(u, e)
        } catch (u) {
            return e.throwOnError,
            `<span class='katex-error' title='${N0(u.toString())}'>${N0(l)}</span>`
        }
    }
      , a = function(l, u) {
        var m;
        const d = ((m = l[u]) == null ? void 0 : m.content) || "";
        return t(d)
    }
      , s = function(l) {
        e.displayMode = !0;
        try {
            const u = Li(l);
            return `<p class="katex-block ${e.blockClass}">` + J0.renderToString(u, e) + "</p>"
        } catch (u) {
            return e.throwOnError,
            `<p class='katex-block katex-error ${e.blockClass}' title='${N0(u.toString())}'>${N0(l)}</p>`
        }
    }
      , n = function(l, u) {
        return s(l[u].content) + `
`
    };
    r.inline.ruler.after("escape", "math_inline", Ni),
    r.inline.ruler.before("escape", "math_inline", Ni),
    r.block.ruler.after("blockquote", "math_block", j6, {
        alt: ["paragraph", "reference", "blockquote", "list"]
    }),
    r.core.ruler.after("block", "math_text_no_sign", l => {
        (l.tokens || []).forEach(d => {
            if (d.type === "html_block") {
                const m = /\$[^\$]+\$/g;
                if (m.test(d.content)) {
                    const f = d.content.replace(m, b => {
                        const g = b.slice(1, -1);
                        return t(g)
                    }
                    );
                    d.content = f
                }
            }
        }
        )
    }
    ),
    r.core.ruler.after("inline", "math_text_no_sign", l => {
        (l.tokens || []).forEach(d => {
            if (d.type === "inline") {
                const m = d.content || ""
                  , f = m.match(/(\$[^\$]+\$)|(\\\(.+\\\))/g)
                  , b = m.match(/(\$\$([^\$]+)\$\$)|(\\\[.+\\\])/g);
                if (f && !b || !m.match(G6))
                    return !1;
                d.content = m,
                m.match(V6) || b ? (d.content = m.replace(/\$\$([^\$]+)\$\$/g, (w, M) => M || w).replace(/\\\[([^\[\]]+)\\\]/g, (w, M) => M || w),
                d.type = "math_block_no_sign") : d.type = "math_inline_no_sign"
            }
        }
        )
    }
    ),
    r.renderer.rules.math_inline_no_sign = (l, u) => {
        var m;
        const d = ((m = l[u]) == null ? void 0 : m.content) || "";
        e.displayMode = !1;
        try {
            return J0.renderToString(d, e)
        } catch (f) {
            return e.throwOnError,
            N0(d)
        }
    }
    ,
    r.renderer.rules.math_block_no_sign = (l, u) => {
        const d = l[u].content;
        e.displayMode = !0;
        try {
            return `<p class="katex-block ${e.blockClass}">` + J0.renderToString(d, e) + "</p>"
        } catch (m) {
            return e.throwOnError,
            N0(d)
        }
    }
    ,
    r.renderer.rules.math_inline = a,
    r.renderer.rules.math_block = n;
    const i = r.renderer.rules.fence;
    r.renderer.rules.fence = (l, u, d, m, f) => {
        const b = l[u]
          , g = b.info ? b.info.trim().split(" ")[0] : "";
        return ["latex", "math"].includes(g) ? '<pre class="code-text">' + J0.renderToString(b.content, d) + "</pre>" : ["html", "xml", "xhtml", "markdown"].includes(g) ? `<pre class="code-text">${r.utils.escapeHtml(b.content)}</pre>` : i(l, u, d, m, f)
    }
}
function K6(r, e) {
    var t, a, s = r.attrs[r.attrIndex("href")][1];
    for (t = 0; t < e.length; ++t) {
        if (a = e[t],
        typeof a.matcher == "function") {
            if (a.matcher(s, a))
                return a;
            continue
        }
        return a
    }
}
function Y6(r, e, t) {
    Object.keys(t).forEach(function(a) {
        var s, n = t[a];
        a === "className" && (a = "class"),
        s = e[r].attrIndex(a),
        s < 0 ? e[r].attrPush([a, n]) : e[r].attrs[s][1] = n
    })
}
function i1(r, e) {
    e ? e = Array.isArray(e) ? e : [e] : e = [],
    Object.freeze(e);
    var t = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(a, s, n, i, l) {
        var u = K6(a[s], e)
          , d = u && u.attrs;
        return d && Y6(s, a, d),
        t(a, s, n, i, l)
    }
}
i1.defaultRender = function(r, e, t, a, s) {
    return s.renderToken(r, e, t)
}
;
var X6 = i1;
const Z6 = jc(X6);
let Ua, Dr;
function o1(r=!0) {
    return r && !Dr ? (Dr = Di(),
    Dr.mdi.use(W6, {
        blockClass: "katexmath-block",
        errorColor: " #cc0000",
        strict: "ignore"
    })) : Ua || (Ua = Di()),
    r ? Dr : Ua
}
function Di(r) {
    const e = new lu({
        linkify: !0,
        html: !0,
        breaks: !0
    });
    return e.use(Z6, {
        attrs: {
            href: "javaScript:void(0)"
        }
    }),
    e.set({
        highlight(a, s) {
            let n = a;
            if (s && Gn.getLanguage(s))
                try {
                    n = Gn.highlight(a, {
                        language: s,
                        ignoreIllegals: !0
                    }).value
                } catch {
                    n = e.utils.escapeHtml(a)
                }
            else
                n = e.utils.escapeHtml(a);
            return `<div class="code-block">
      <div class=code-cuxtom-tools>
        <span class="title">${s}</span>
        <span class="code-custom-clip-btn"></span>
      </div>
      <pre class="hljs"><code>${n}</code></pre>
      </div>`
        }
    }),
    {
        mdi: e,
        markdownItRender: a => a && (a = a.replaceAll(/\<br\>/g, `
`),
        e.render(a))
    }
}
const J6 = 16
  , ed = oe({
    __name: "text-content",
    props: {
        content: {},
        typingEffect: {
            type: Boolean
        },
        md: {
            type: Boolean,
            default: !0
        },
        filterBr: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["startTyping", "waitNewContent", "editMsg"],
    setup(r, {expose: e, emit: t}) {
        const {getSliceIndex: a} = P4()
          , s = r
          , n = t
          , i = cr("autoScrollControl")
          , l = z()
          , u = z()
          , d = z()
          , m = z("")
          , f = z("");
        let b = 0;
        const {markdownItRender: g} = o1()
          , w = W( () => {
            if (s.md) {
                const ne = g(m.value);
                return s.filterBr ? ne.replace(/\<br\>/g, "") : ne
            } else
                return m.value
        }
        )
          , M = W( () => (!f.value || L.value) && !(_.x === 0 && _.y === 0) && s.typingEffect)
          , E = W( () => !!f.value && !(_.x === 0 && _.y === 0) && s.typingEffect && !L.value)
          , R = ne => {
            const le = /```/g;
            let ce = 0;
            for (; le.exec(ne) !== null; )
                ce++;
            return ce
        }
        ;
        let N = -1
          , C = !1;
        const L = z(!1);
        function D(ne) {
            if (C || (n("startTyping"),
            C = !0,
            i && i.resumeAutoScroll(),
            ue.emit("scrollChatToBottom")),
            ne - N > J6 || N < 0)
                if (f.value && s.typingEffect) {
                    const ce = a(f.value);
                    m.value = m.value + f.value.slice(0, ce),
                    L.value = R(m.value) % 2 === 1,
                    f.value = f.value.slice(ce),
                    zt( () => {
                        j()
                    }
                    ),
                    N = ne,
                    window.requestAnimationFrame(D)
                } else
                    n("waitNewContent");
            else
                window.requestAnimationFrame(D)
        }
        const _ = ma({
            x: 0,
            y: 0,
            marginTop: 0
        });
        function q(ne) {
            var ce;
            const le = ne.childNodes;
            for (let Q = le.length - 1; Q >= 0; Q--) {
                const de = le[Q];
                if (de.nodeType === Node.TEXT_NODE && /\S/.test(de.nodeValue ?? ""))
                    return de.nodeValue = ((ce = de.nodeValue) == null ? void 0 : ce.replace(/\s+$/, "")) ?? "",
                    de;
                if (de.nodeType === Node.ELEMENT_NODE) {
                    if (de.tagName.toLowerCase() === "li" && !de.firstElementChild) {
                        const He = document.createTextNode("​");
                        return de.appendChild(He),
                        He
                    }
                    const ke = q(de);
                    if (ke)
                        return ke
                }
            }
            return null
        }
        function j() {
            var Qe, ze;
            const ne = l.value;
            if (!ne || !u.value)
                return;
            u.value.style.maxHeight = `${u.value.scrollHeight}px`;
            const le = q(ne)
              , ce = document.createTextNode("​");
            _.marginTop = 0;
            const Q = le ? le.parentElement : ne;
            Q.appendChild(ce);
            let de = (Qe = window.getComputedStyle(Q)) == null ? void 0 : Qe.lineHeight;
            if (de === "normal") {
                const Xe = document.createElement("span");
                Xe.style.visibility = "hidden",
                Xe.style.whiteSpace = "nowrap",
                Xe.innerHTML = "A",
                Q.appendChild(Xe),
                de = Xe.offsetHeight + "px",
                Q.removeChild(Xe)
            }
            if (d.value && de) {
                const Xe = (ze = d.value) == null ? void 0 : ze.clientHeight;
                _.marginTop = (+de.split("px")[0] - Xe - 2) / 2
            }
            const ke = u.value.getBoundingClientRect()
              , He = document.createRange();
            He.setStart(ce, 0),
            He.setEnd(ce, 0);
            const qe = He.getBoundingClientRect();
            _.x = qe.left - (ke == null ? void 0 : ke.left),
            _.y = qe.top - (ke == null ? void 0 : ke.top),
            _.y,
            ce.remove()
        }
        Ke( () => s.content, (ne, le="") => {
            if (!s.typingEffect) {
                m.value = ne;
                return
            }
            if (!ne || ne.length <= le.length)
                return;
            const ce = ne.slice(le.length);
            f.value = f.value + ce
        }
        , {
            immediate: !0
        }),
        Ke(f, () => {
            if (!f.value || !s.typingEffect) {
                b && cancelAnimationFrame(b),
                b = 0;
                return
            }
            f.value && !b && (N = -1,
            b = window.requestAnimationFrame(D))
        }
        , {
            immediate: !0
        }),
        Ke( () => s.typingEffect, ne => {
            var ce;
            if (!ne) {
                var le = (((ce = w.value) == null ? void 0 : ce.match(/code-custom-clip-btn/gi)) || []).length;
                le && new Array(le).fill(1).forEach( () => {}
                ),
                !ne && C && (setTimeout( () => {
                    i && i.pauseAutoScroll()
                }
                , 500),
                u.value && (u.value.style.maxHeight = "unset"))
            }
        }
        , {
            immediate: !0
        });
        const se = () => m.value
          , Ee = () => f.value
          , Be = () => l.value ? l.value.innerText : ""
          , Ae = ne => {
            var le, ce, Q, de, ke;
            if ((ce = (le = ne.target) == null ? void 0 : le.classList) != null && ce.contains("code-custom-clip-btn")) {
                const He = (de = (Q = ne.target) == null ? void 0 : Q.parentNode) == null ? void 0 : de.parentNode;
                if (He)
                    return (ke = He.querySelector("code")) != null && ke.innerText,
                    ne.stopPropagation(),
                    !1
            }
        }
        ;
        return e({
            getBeforeCovert: se,
            getWaitStr: Ee,
            getHtmlInnerText: Be
        }),
        (ne, le) => {
            const ce = Wc("dompurify-html");
            return S(),
            B("div", {
                ref_key: "textContentRef",
                ref: u,
                class: pe(["text-content", {
                    "markdown-body": ne.md
                }])
            }, [ft(A("div", {
                ref_key: "textBodyRef",
                ref: l,
                class: "text-body",
                onClick: Ae
            }, null, 512), [[ce, w.value || ne.content]]), A("div", {
                class: pe(["cursor-bg", {
                    "cursor-bg--hide": !E.value
                }]),
                style: nt({
                    left: `${_.x}px`,
                    top: `${_.y}px`
                }),
                ref_key: "cursorRef",
                ref: d
            }, null, 6), M.value ? (S(),
            B("div", {
                key: 0,
                class: "cursor",
                style: nt({
                    left: `${_.x}px`,
                    top: `${_.y}px`,
                    marginTop: `${_.marginTop}px`
                }),
                ref_key: "cursorRef",
                ref: d
            }, null, 4)) : J("", !0)], 2)
        }
    }
})
  , or = ye(ed, [["__scopeId", "data-v-416c2f96"]])
  , td = {
    class: "chat-answer"
}
  , rd = oe({
    __name: "index",
    props: {
        message: {},
        asReply: {
            type: Boolean
        },
        isLast: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = z()
          , a = W( () => [P.Markdown, P.PcPicSearch, P.AiSearch].includes(e.message.contentType))
          , s = z(!1)
          , n = W( () => !e.message.isRenderFinished && e.asReply && e.isLast)
          , i = () => {
            s.value = !0
        }
          , l = () => {
            if (!e.message.isRecordFinished)
                return;
            if (e.message.renderFinished == we.Some && e.message.error === X.ManualStop && e.message.isStopping) {
                let f = "";
                t.value && (f = t.value.getBeforeCovert()),
                Oe.updateMessage(e.message, {
                    content: {
                        ...e.message.content,
                        text: f
                    },
                    isStopping: !1
                });
                return
            }
            e.message.renderFinished === we.None && Oe.updateMessage(e.message, {
                renderFinished: we.All
            })
        }
        ;
        return Ke( () => e.message.isRenderFinished, () => {
            e.message.isRenderFinished && l()
        }
        , {
            immediate: !0
        }),
        Ke( () => e.message.isRecordFinished, u => {
            const d = t.value.getWaitStr();
            e.message.isRecordFinished && !d && (s.value || !e.message.content.text) && l()
        }
        ),
        (u, d) => (S(),
        B("div", {
            class: pe(["render-ocr-text-message", {
                asReply: u.asReply
            }])
        }, [A("div", td, [Z(or, {
            ref_key: "textContentRef",
            ref: t,
            content: u.message.content.text,
            typingEffect: n.value,
            md: a.value,
            onWaitNewContent: l,
            onStartTyping: i
        }, null, 8, ["content", "typingEffect", "md"])])], 2))
    }
})
  , hn = ye(rd, [["__scopeId", "data-v-2b485ca9"]])
  , Fi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAM1BMVEUAAABUVFRmZmaTk5N8fHyfn5+srKxxcXGHh4dmZmZbW1tYWFhaWlpgYGBYWFiUlJSVlZW4cSLiAAAAEXRSTlMAJCQkJCQkIyMHDx4KFBobD+9jX/EAAAHcSURBVFjDxZfdkoMgDIUbUZF/3v9pF2Z3CiHQ09aL/e505juSEHR8LDE2ROeInIvBmgdAyJF6tFIpvx/iuU3b+UvKb+nW0dw/CjjCOxrp/EMlUEggwd77hfSqd44kB/fVdZll9TRj9AsZLJ9zjP6+7wH7DSV8lgB90sIv6ADrb6iJr7XlvqEXqIm/bZ4FuJnogvUFG9LE31zvx4nNTmBO3K90bfBS92LIEvMrfl3AdJ/zxXwit9oBZxaTfvV+wbIFCF9iNPPJzTvQfEnnV/ywBe3meg29T3EyQwG8r5pfMaKF7gGIvU9WVOBRgP/zWw0fLUA8cGyBBbYo2YhrzPDEACoANYTx8g0C76ITLUBYvubPNlGO/hcB5t8DeAm3m3h7G28P0u1Rvn2Y7h5n8EKBUxC/eKXxkkXkFlAHGGbMZF88WADFYTS3ijZgiGTHXPNRgps2zDa9+rolgADbbjNf7xYG8B3zXC9cBgXwmYncrwkpo3MQWTLTi19QKVhvGGE5cl74qrKRYDX0dnz8L2s/ihF5+k0/Dk0rrByyp978Q4EAmcD0Agjg5GIP/okCOKb4TD/BCiSJ++cFAiS56ZUNBkhy5+8EAubkVFzggy+IyelQTQcLAL//M2I7CD+W6BuKw52ABAAAAABJRU5ErkJggg=="
  , Fr = 200
  , ad = oe({
    __name: "index",
    props: {
        message: {},
        asReply: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r;
        let t = 614;
        const a = W( () => e.message.content.localUrl || "")
          , s = z()
          , n = W( () => {
            var l, u;
            return {
                width: (l = s.value) != null && l.width ? `${s.value.width}px` : "",
                height: (u = s.value) != null && u.height ? `${s.value.height}px` : ""
            }
        }
        )
          , i = l => {
            let u = 0
              , d = 0;
            if (a.value.startsWith("http")) {
                const m = new URL(a.value).search || "";
                let {w: f, h: b} = cu.parse(m, {
                    ignoreQueryPrefix: !0
                });
                Array.isArray(f) && (f = f[0]),
                Array.isArray(b) && (b = b[0]),
                u = parseInt(f),
                d = parseInt(b)
            } else
                a.value.startsWith("data") && l && (u = l.target.naturalWidth,
                d = l.target.naturalHeight);
            if (!(!u || !d)) {
                if (u > t || d > Fr) {
                    let m = 1;
                    (u > Fr || d > Fr) && (m = Math.min(t / u, Fr / d)),
                    u = u * m,
                    d = d * m
                }
                s.value = {
                    width: u,
                    height: d
                }
            }
        }
        ;
        return Ke( () => a.value, l => (l == null ? void 0 : l.startsWith("http")) && i(), {
            immediate: !0
        }),
        (l, u) => {
            const d = Fu;
            return S(),
            B("div", {
                class: "chat-img-message",
                style: nt({
                    width: k(n).width
                })
            }, [Z(d, {
                "preview-teleported": !0,
                "preview-src-list": [k(a)],
                class: "image-content",
                src: k(a),
                alt: "message",
                fit: "contain",
                style: nt({
                    ...k(n)
                }),
                onLoad: i
            }, {
                placeholder: Le( () => u[0] || (u[0] = [A("div", {
                    class: "image-content__loading"
                }, [A("img", {
                    alt: "image loading indicator",
                    src: Fi
                })], -1)])),
                error: Le( () => u[1] || (u[1] = [A("div", {
                    class: "image-content__loading"
                }, [A("img", {
                    alt: "image loading indicator",
                    src: Fi
                })], -1)])),
                _: 1
            }, 8, ["preview-src-list", "src", "style"])], 4)
        }
    }
})
  , sd = ye(ad, [["__scopeId", "data-v-47298620"]]);
var er = function(r) {
    return r && r.Math === Math && r
}
  , ht = er(typeof globalThis == "object" && globalThis) || er(typeof window == "object" && window) || er(typeof self == "object" && self) || er(typeof Tr == "object" && Tr) || er(typeof Tr == "object" && Tr) || function() {
    return this
}() || Function("return this")()
  , mn = {}
  , it = function(r) {
    try {
        return !!r()
    } catch {
        return !0
    }
}
  , nd = it
  , Pt = !nd(function() {
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7
        }
    })[1] !== 7
})
  , id = it
  , l1 = !id(function() {
    var r = (function() {}
    ).bind();
    return typeof r != "function" || r.hasOwnProperty("prototype")
})
  , od = l1
  , _r = Function.prototype.call
  , wr = od ? _r.bind(_r) : function() {
    return _r.apply(_r, arguments)
}
  , c1 = {}
  , u1 = {}.propertyIsEnumerable
  , d1 = Object.getOwnPropertyDescriptor
  , ld = d1 && !u1.call({
    1: 2
}, 1);
c1.f = ld ? function(e) {
    var t = d1(this, e);
    return !!t && t.enumerable
}
: u1;
var pn = function(r, e) {
    return {
        enumerable: !(r & 1),
        configurable: !(r & 2),
        writable: !(r & 4),
        value: e
    }
}, h1 = l1, m1 = Function.prototype, Cs = m1.call, cd = h1 && m1.bind.bind(Cs, Cs), Mt = h1 ? cd : function(r) {
    return function() {
        return Cs.apply(r, arguments)
    }
}
, p1 = Mt, ud = p1({}.toString), dd = p1("".slice), Ta = function(r) {
    return dd(ud(r), 8, -1)
}, hd = Mt, md = it, pd = Ta, Va = Object, fd = hd("".split), vd = md(function() {
    return !Va("z").propertyIsEnumerable(0)
}) ? function(r) {
    return pd(r) === "String" ? fd(r, "") : Va(r)
}
: Va, f1 = function(r) {
    return r == null
}, gd = f1, yd = TypeError, fn = function(r) {
    if (gd(r))
        throw new yd("Can't call method on " + r);
    return r
}, Ad = vd, bd = fn, Ma = function(r) {
    return Ad(bd(r))
}, ja = typeof document == "object" && document.all, It = typeof ja > "u" && ja !== void 0 ? function(r) {
    return typeof r == "function" || r === ja
}
: function(r) {
    return typeof r == "function"
}
, wd = It, Xt = function(r) {
    return typeof r == "object" ? r !== null : wd(r)
}, Wa = ht, xd = It, kd = function(r) {
    return xd(r) ? r : void 0
}, xr = function(r, e) {
    return arguments.length < 2 ? kd(Wa[r]) : Wa[r] && Wa[r][e]
}, Sd = Mt, vn = Sd({}.isPrototypeOf), Td = ht, _i = Td.navigator, $i = _i && _i.userAgent, Md = $i ? String($i) : "", v1 = ht, Ka = Md, Pi = v1.process, Hi = v1.Deno, qi = Pi && Pi.versions || Hi && Hi.version, Qi = qi && qi.v8, _t, oa;
Qi && (_t = Qi.split("."),
oa = _t[0] > 0 && _t[0] < 4 ? 1 : +(_t[0] + _t[1]));
!oa && Ka && (_t = Ka.match(/Edge\/(\d+)/),
(!_t || _t[1] >= 74) && (_t = Ka.match(/Chrome\/(\d+)/),
_t && (oa = +_t[1])));
var gn = oa
  , Gi = gn
  , Id = it
  , Cd = ht
  , Rd = Cd.String
  , g1 = !!Object.getOwnPropertySymbols && !Id(function() {
    var r = Symbol("symbol detection");
    return !Rd(r) || !(Object(r)instanceof Symbol) || !Symbol.sham && Gi && Gi < 41
})
  , Ed = g1
  , y1 = Ed && !Symbol.sham && typeof Symbol.iterator == "symbol"
  , Bd = xr
  , zd = It
  , Ld = vn
  , Od = y1
  , Nd = Object
  , A1 = Od ? function(r) {
    return typeof r == "symbol"
}
: function(r) {
    var e = Bd("Symbol");
    return zd(e) && Ld(e.prototype, Nd(r))
}
  , Dd = String
  , Fd = function(r) {
    try {
        return Dd(r)
    } catch {
        return "Object"
    }
}
  , _d = It
  , $d = Fd
  , Pd = TypeError
  , b1 = function(r) {
    if (_d(r))
        return r;
    throw new Pd($d(r) + " is not a function")
}
  , Hd = b1
  , qd = f1
  , Qd = function(r, e) {
    var t = r[e];
    return qd(t) ? void 0 : Hd(t)
}
  , Ya = wr
  , Xa = It
  , Za = Xt
  , Gd = TypeError
  , Ud = function(r, e) {
    var t, a;
    if (e === "string" && Xa(t = r.toString) && !Za(a = Ya(t, r)) || Xa(t = r.valueOf) && !Za(a = Ya(t, r)) || e !== "string" && Xa(t = r.toString) && !Za(a = Ya(t, r)))
        return a;
    throw new Gd("Can't convert object to primitive value")
}
  , w1 = {
    exports: {}
}
  , Ui = ht
  , Vd = Object.defineProperty
  , yn = function(r, e) {
    try {
        Vd(Ui, r, {
            value: e,
            configurable: !0,
            writable: !0
        })
    } catch {
        Ui[r] = e
    }
    return e
}
  , jd = ht
  , Wd = yn
  , Vi = "__core-js_shared__"
  , ji = w1.exports = jd[Vi] || Wd(Vi, {});
(ji.versions || (ji.versions = [])).push({
    version: "3.45.1",
    mode: "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var An = w1.exports
  , Wi = An
  , bn = function(r, e) {
    return Wi[r] || (Wi[r] = e || {})
}
  , Kd = fn
  , Yd = Object
  , x1 = function(r) {
    return Yd(Kd(r))
}
  , Xd = Mt
  , Zd = x1
  , Jd = Xd({}.hasOwnProperty)
  , l0 = Object.hasOwn || function(e, t) {
    return Jd(Zd(e), t)
}
  , eh = Mt
  , th = 0
  , rh = Math.random()
  , ah = eh(1.1 .toString)
  , k1 = function(r) {
    return "Symbol(" + (r === void 0 ? "" : r) + ")_" + ah(++th + rh, 36)
}
  , sh = ht
  , nh = bn
  , Ki = l0
  , ih = k1
  , oh = g1
  , lh = y1
  , H0 = sh.Symbol
  , Ja = nh("wks")
  , ch = lh ? H0.for || H0 : H0 && H0.withoutSetter || ih
  , c0 = function(r) {
    return Ki(Ja, r) || (Ja[r] = oh && Ki(H0, r) ? H0[r] : ch("Symbol." + r)),
    Ja[r]
}
  , uh = wr
  , Yi = Xt
  , Xi = A1
  , dh = Qd
  , hh = Ud
  , mh = c0
  , ph = TypeError
  , fh = mh("toPrimitive")
  , vh = function(r, e) {
    if (!Yi(r) || Xi(r))
        return r;
    var t = dh(r, fh), a;
    if (t) {
        if (e === void 0 && (e = "default"),
        a = uh(t, r, e),
        !Yi(a) || Xi(a))
            return a;
        throw new ph("Can't convert object to primitive value")
    }
    return e === void 0 && (e = "number"),
    hh(r, e)
}
  , gh = vh
  , yh = A1
  , S1 = function(r) {
    var e = gh(r, "string");
    return yh(e) ? e : e + ""
}
  , Ah = ht
  , Zi = Xt
  , Rs = Ah.document
  , bh = Zi(Rs) && Zi(Rs.createElement)
  , T1 = function(r) {
    return bh ? Rs.createElement(r) : {}
}
  , wh = Pt
  , xh = it
  , kh = T1
  , M1 = !wh && !xh(function() {
    return Object.defineProperty(kh("div"), "a", {
        get: function() {
            return 7
        }
    }).a !== 7
})
  , Sh = Pt
  , Th = wr
  , Mh = c1
  , Ih = pn
  , Ch = Ma
  , Rh = S1
  , Eh = l0
  , Bh = M1
  , Ji = Object.getOwnPropertyDescriptor;
mn.f = Sh ? Ji : function(e, t) {
    if (e = Ch(e),
    t = Rh(t),
    Bh)
        try {
            return Ji(e, t)
        } catch {}
    if (Eh(e, t))
        return Ih(!Th(Mh.f, e, t), e[t])
}
;
var b0 = {}
  , zh = Pt
  , Lh = it
  , I1 = zh && Lh(function() {
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: !1
    }).prototype !== 42
})
  , Oh = Xt
  , Nh = String
  , Dh = TypeError
  , Z0 = function(r) {
    if (Oh(r))
        return r;
    throw new Dh(Nh(r) + " is not an object")
}
  , Fh = Pt
  , _h = M1
  , $h = I1
  , $r = Z0
  , eo = S1
  , Ph = TypeError
  , es = Object.defineProperty
  , Hh = Object.getOwnPropertyDescriptor
  , ts = "enumerable"
  , rs = "configurable"
  , as = "writable";
b0.f = Fh ? $h ? function(e, t, a) {
    if ($r(e),
    t = eo(t),
    $r(a),
    typeof e == "function" && t === "prototype" && "value"in a && as in a && !a[as]) {
        var s = Hh(e, t);
        s && s[as] && (e[t] = a.value,
        a = {
            configurable: rs in a ? a[rs] : s[rs],
            enumerable: ts in a ? a[ts] : s[ts],
            writable: !1
        })
    }
    return es(e, t, a)
}
: es : function(e, t, a) {
    if ($r(e),
    t = eo(t),
    $r(a),
    _h)
        try {
            return es(e, t, a)
        } catch {}
    if ("get"in a || "set"in a)
        throw new Ph("Accessors not supported");
    return "value"in a && (e[t] = a.value),
    e
}
;
var qh = Pt
  , Qh = b0
  , Gh = pn
  , wn = qh ? function(r, e, t) {
    return Qh.f(r, e, Gh(1, t))
}
: function(r, e, t) {
    return r[e] = t,
    r
}
  , C1 = {
    exports: {}
}
  , Es = Pt
  , Uh = l0
  , R1 = Function.prototype
  , Vh = Es && Object.getOwnPropertyDescriptor
  , E1 = Uh(R1, "name")
  , jh = E1 && (function() {}
).name === "something"
  , Wh = E1 && (!Es || Es && Vh(R1, "name").configurable)
  , B1 = {
    PROPER: jh,
    CONFIGURABLE: Wh
}
  , Kh = Mt
  , Yh = It
  , Bs = An
  , Xh = Kh(Function.toString);
Yh(Bs.inspectSource) || (Bs.inspectSource = function(r) {
    return Xh(r)
}
);
var z1 = Bs.inspectSource, Zh = ht, Jh = It, to = Zh.WeakMap, e7 = Jh(to) && /native code/.test(String(to)), t7 = bn, r7 = k1, ro = t7("keys"), L1 = function(r) {
    return ro[r] || (ro[r] = r7(r))
}, xn = {}, a7 = e7, O1 = ht, s7 = wn, ss = l0, ns = An, n7 = L1, i7 = xn, ao = "Object already initialized", so = O1.TypeError, o7 = O1.WeakMap, zs, la, Ls, l7 = function(r) {
    return Ls(r) ? la(r) : zs(r, {})
};
if (a7 || ns.state) {
    var Ht = ns.state || (ns.state = new o7);
    Ht.get = Ht.get,
    Ht.has = Ht.has,
    Ht.set = Ht.set,
    zs = function(r, e) {
        if (Ht.has(r))
            throw new so(ao);
        return e.facade = r,
        Ht.set(r, e),
        e
    }
    ,
    la = function(r) {
        return Ht.get(r) || {}
    }
    ,
    Ls = function(r) {
        return Ht.has(r)
    }
} else {
    var D0 = n7("state");
    i7[D0] = !0,
    zs = function(r, e) {
        if (ss(r, D0))
            throw new so(ao);
        return e.facade = r,
        s7(r, D0, e),
        e
    }
    ,
    la = function(r) {
        return ss(r, D0) ? r[D0] : {}
    }
    ,
    Ls = function(r) {
        return ss(r, D0)
    }
}
var kn = {
    get: la,
    enforce: l7
}
  , Sn = Mt
  , c7 = it
  , u7 = It
  , Pr = l0
  , Os = Pt
  , d7 = B1.CONFIGURABLE
  , h7 = z1
  , N1 = kn
  , m7 = N1.enforce
  , p7 = N1.get
  , no = String
  , Ur = Object.defineProperty
  , f7 = Sn("".slice)
  , v7 = Sn("".replace)
  , g7 = Sn([].join)
  , y7 = Os && !c7(function() {
    return Ur(function() {}, "length", {
        value: 8
    }).length !== 8
})
  , A7 = String(String).split("String")
  , b7 = C1.exports = function(r, e, t) {
    f7(no(e), 0, 7) === "Symbol(" && (e = "[" + v7(no(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
    t && t.getter && (e = "get " + e),
    t && t.setter && (e = "set " + e),
    (!Pr(r, "name") || d7 && r.name !== e) && (Os ? Ur(r, "name", {
        value: e,
        configurable: !0
    }) : r.name = e),
    y7 && t && Pr(t, "arity") && r.length !== t.arity && Ur(r, "length", {
        value: t.arity
    });
    try {
        t && Pr(t, "constructor") && t.constructor ? Os && Ur(r, "prototype", {
            writable: !1
        }) : r.prototype && (r.prototype = void 0)
    } catch {}
    var a = m7(r);
    return Pr(a, "source") || (a.source = g7(A7, typeof e == "string" ? e : "")),
    r
}
;
Function.prototype.toString = b7(function() {
    return u7(this) && p7(this).source || h7(this)
}, "toString");
var D1 = C1.exports
  , w7 = It
  , x7 = b0
  , k7 = D1
  , S7 = yn
  , Tn = function(r, e, t, a) {
    a || (a = {});
    var s = a.enumerable
      , n = a.name !== void 0 ? a.name : e;
    if (w7(t) && k7(t, n, a),
    a.global)
        s ? r[e] = t : S7(e, t);
    else {
        try {
            a.unsafe ? r[e] && (s = !0) : delete r[e]
        } catch {}
        s ? r[e] = t : x7.f(r, e, {
            value: t,
            enumerable: !1,
            configurable: !a.nonConfigurable,
            writable: !a.nonWritable
        })
    }
    return r
}
  , Mn = {}
  , T7 = Math.ceil
  , M7 = Math.floor
  , I7 = Math.trunc || function(e) {
    var t = +e;
    return (t > 0 ? M7 : T7)(t)
}
  , C7 = I7
  , F1 = function(r) {
    var e = +r;
    return e !== e || e === 0 ? 0 : C7(e)
}
  , R7 = F1
  , E7 = Math.max
  , B7 = Math.min
  , z7 = function(r, e) {
    var t = R7(r);
    return t < 0 ? E7(t + e, 0) : B7(t, e)
}
  , L7 = F1
  , O7 = Math.min
  , N7 = function(r) {
    var e = L7(r);
    return e > 0 ? O7(e, 9007199254740991) : 0
}
  , D7 = N7
  , _1 = function(r) {
    return D7(r.length)
}
  , F7 = Ma
  , _7 = z7
  , $7 = _1
  , P7 = function(r) {
    return function(e, t, a) {
        var s = F7(e)
          , n = $7(s);
        if (n === 0)
            return !r && -1;
        var i = _7(a, n), l;
        if (r && t !== t) {
            for (; n > i; )
                if (l = s[i++],
                l !== l)
                    return !0
        } else
            for (; n > i; i++)
                if ((r || i in s) && s[i] === t)
                    return r || i || 0;
        return !r && -1
    }
}
  , H7 = {
    indexOf: P7(!1)
}
  , q7 = Mt
  , is = l0
  , Q7 = Ma
  , G7 = H7.indexOf
  , U7 = xn
  , io = q7([].push)
  , $1 = function(r, e) {
    var t = Q7(r), a = 0, s = [], n;
    for (n in t)
        !is(U7, n) && is(t, n) && io(s, n);
    for (; e.length > a; )
        is(t, n = e[a++]) && (~G7(s, n) || io(s, n));
    return s
}
  , In = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  , V7 = $1
  , j7 = In
  , W7 = j7.concat("length", "prototype");
Mn.f = Object.getOwnPropertyNames || function(e) {
    return V7(e, W7)
}
;
var P1 = {};
P1.f = Object.getOwnPropertySymbols;
var K7 = xr
  , Y7 = Mt
  , X7 = Mn
  , Z7 = P1
  , J7 = Z0
  , e3 = Y7([].concat)
  , t3 = K7("Reflect", "ownKeys") || function(e) {
    var t = X7.f(J7(e))
      , a = Z7.f;
    return a ? e3(t, a(e)) : t
}
  , oo = l0
  , r3 = t3
  , a3 = mn
  , s3 = b0
  , n3 = function(r, e, t) {
    for (var a = r3(e), s = s3.f, n = a3.f, i = 0; i < a.length; i++) {
        var l = a[i];
        !oo(r, l) && !(t && oo(t, l)) && s(r, l, n(e, l))
    }
}
  , i3 = it
  , o3 = It
  , l3 = /#|\.prototype\./
  , kr = function(r, e) {
    var t = u3[c3(r)];
    return t === h3 ? !0 : t === d3 ? !1 : o3(e) ? i3(e) : !!e
}
  , c3 = kr.normalize = function(r) {
    return String(r).replace(l3, ".").toLowerCase()
}
  , u3 = kr.data = {}
  , d3 = kr.NATIVE = "N"
  , h3 = kr.POLYFILL = "P"
  , H1 = kr
  , Hr = ht
  , m3 = mn.f
  , p3 = wn
  , f3 = Tn
  , v3 = yn
  , g3 = n3
  , y3 = H1
  , q1 = function(r, e) {
    var t = r.target, a = r.global, s = r.stat, n, i, l, u, d, m;
    if (a ? i = Hr : s ? i = Hr[t] || v3(t, {}) : i = Hr[t] && Hr[t].prototype,
    i)
        for (l in e) {
            if (d = e[l],
            r.dontCallGetSet ? (m = m3(i, l),
            u = m && m.value) : u = i[l],
            n = y3(a ? l : t + (s ? "." : "#") + l, r.forced),
            !n && u !== void 0) {
                if (typeof d == typeof u)
                    continue;
                g3(d, u)
            }
            (r.sham || u && u.sham) && p3(d, "sham", !0),
            f3(i, l, d, r)
        }
}
  , A3 = Ta
  , Q1 = Array.isArray || function(e) {
    return A3(e) === "Array"
}
  , b3 = TypeError
  , w3 = 9007199254740991
  , x3 = function(r) {
    if (r > w3)
        throw b3("Maximum allowed index exceeded");
    return r
}
  , k3 = Pt
  , S3 = b0
  , T3 = pn
  , M3 = function(r, e, t) {
    k3 ? S3.f(r, e, T3(0, t)) : r[e] = t
}
  , I3 = c0
  , C3 = I3("toStringTag")
  , G1 = {};
G1[C3] = "z";
var R3 = String(G1) === "[object z]"
  , E3 = R3
  , B3 = It
  , Vr = Ta
  , z3 = c0
  , L3 = z3("toStringTag")
  , O3 = Object
  , N3 = Vr(function() {
    return arguments
}()) === "Arguments"
  , D3 = function(r, e) {
    try {
        return r[e]
    } catch {}
}
  , U1 = E3 ? Vr : function(r) {
    var e, t, a;
    return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (t = D3(e = O3(r), L3)) == "string" ? t : N3 ? Vr(e) : (a = Vr(e)) === "Object" && B3(e.callee) ? "Arguments" : a
}
  , F3 = Mt
  , _3 = it
  , V1 = It
  , $3 = U1
  , P3 = xr
  , H3 = z1
  , j1 = function() {}
  , W1 = P3("Reflect", "construct")
  , Cn = /^\s*(?:class|function)\b/
  , q3 = F3(Cn.exec)
  , Q3 = !Cn.test(j1)
  , tr = function(e) {
    if (!V1(e))
        return !1;
    try {
        return W1(j1, [], e),
        !0
    } catch {
        return !1
    }
}
  , K1 = function(e) {
    if (!V1(e))
        return !1;
    switch ($3(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
        return !1
    }
    try {
        return Q3 || !!q3(Cn, H3(e))
    } catch {
        return !0
    }
};
K1.sham = !0;
var G3 = !W1 || _3(function() {
    var r;
    return tr(tr.call) || !tr(Object) || !tr(function() {
        r = !0
    }) || r
}) ? K1 : tr
  , lo = Q1
  , U3 = G3
  , V3 = Xt
  , j3 = c0
  , W3 = j3("species")
  , co = Array
  , K3 = function(r) {
    var e;
    return lo(r) && (e = r.constructor,
    U3(e) && (e === co || lo(e.prototype)) ? e = void 0 : V3(e) && (e = e[W3],
    e === null && (e = void 0))),
    e === void 0 ? co : e
}
  , Y3 = K3
  , X3 = function(r, e) {
    return new (Y3(r))(e === 0 ? 0 : e)
}
  , Z3 = it
  , J3 = c0
  , em = gn
  , tm = J3("species")
  , rm = function(r) {
    return em >= 51 || !Z3(function() {
        var e = []
          , t = e.constructor = {};
        return t[tm] = function() {
            return {
                foo: 1
            }
        }
        ,
        e[r](Boolean).foo !== 1
    })
}
  , am = q1
  , sm = it
  , nm = Q1
  , im = Xt
  , om = x1
  , lm = _1
  , uo = x3
  , ho = M3
  , cm = X3
  , um = rm
  , dm = c0
  , hm = gn
  , Y1 = dm("isConcatSpreadable")
  , mm = hm >= 51 || !sm(function() {
    var r = [];
    return r[Y1] = !1,
    r.concat()[0] !== r
})
  , pm = function(r) {
    if (!im(r))
        return !1;
    var e = r[Y1];
    return e !== void 0 ? !!e : nm(r)
}
  , fm = !mm || !um("concat");
am({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: fm
}, {
    concat: function(e) {
        var t = om(this), a = cm(t, 0), s = 0, n, i, l, u, d;
        for (n = -1,
        l = arguments.length; n < l; n++)
            if (d = n === -1 ? t : arguments[n],
            pm(d))
                for (u = lm(d),
                uo(s + u),
                i = 0; i < u; i++,
                s++)
                    i in d && ho(a, s, d[i]);
            else
                uo(s + 1),
                ho(a, s++, d);
        return a.length = s,
        a
    }
});
var vm = Mt
  , gm = b1
  , ym = function(r, e, t) {
    try {
        return vm(gm(Object.getOwnPropertyDescriptor(r, e)[t]))
    } catch {}
}
  , Am = Xt
  , bm = function(r) {
    return Am(r) || r === null
}
  , wm = bm
  , xm = String
  , km = TypeError
  , Sm = function(r) {
    if (wm(r))
        return r;
    throw new km("Can't set " + xm(r) + " as a prototype")
}
  , Tm = ym
  , Mm = Xt
  , Im = fn
  , Cm = Sm
  , Rm = Object.setPrototypeOf || ("__proto__"in {} ? function() {
    var r = !1, e = {}, t;
    try {
        t = Tm(Object.prototype, "__proto__", "set"),
        t(e, []),
        r = e instanceof Array
    } catch {}
    return function(s, n) {
        return Im(s),
        Cm(n),
        Mm(s) && (r ? t(s, n) : s.__proto__ = n),
        s
    }
}() : void 0)
  , Em = It
  , Bm = Xt
  , mo = Rm
  , zm = function(r, e, t) {
    var a, s;
    return mo && Em(a = e.constructor) && a !== t && Bm(s = a.prototype) && s !== t.prototype && mo(r, s),
    r
}
  , X1 = {}
  , Lm = $1
  , Om = In
  , Nm = Object.keys || function(e) {
    return Lm(e, Om)
}
  , Dm = Pt
  , Fm = I1
  , _m = b0
  , $m = Z0
  , Pm = Ma
  , Hm = Nm;
X1.f = Dm && !Fm ? Object.defineProperties : function(e, t) {
    $m(e);
    for (var a = Pm(t), s = Hm(t), n = s.length, i = 0, l; n > i; )
        _m.f(e, l = s[i++], a[l]);
    return e
}
;
var qm = xr, Qm = qm("document", "documentElement"), Gm = Z0, Um = X1, po = In, Vm = xn, jm = Qm, Wm = T1, Km = L1, fo = ">", vo = "<", Ns = "prototype", Ds = "script", Z1 = Km("IE_PROTO"), os = function() {}, J1 = function(r) {
    return vo + Ds + fo + r + vo + "/" + Ds + fo
}, go = function(r) {
    r.write(J1("")),
    r.close();
    var e = r.parentWindow.Object;
    return r = null,
    e
}, Ym = function() {
    var r = Wm("iframe"), e = "java" + Ds + ":", t;
    return r.style.display = "none",
    jm.appendChild(r),
    r.src = String(e),
    t = r.contentWindow.document,
    t.open(),
    t.write(J1("document.F=Object")),
    t.close(),
    t.F
}, qr, jr = function() {
    try {
        qr = new ActiveXObject("htmlfile")
    } catch {}
    jr = typeof document < "u" ? document.domain && qr ? go(qr) : Ym() : go(qr);
    for (var r = po.length; r--; )
        delete jr[Ns][po[r]];
    return jr()
};
Vm[Z1] = !0;
var ec = Object.create || function(e, t) {
    var a;
    return e !== null ? (os[Ns] = Gm(e),
    a = new os,
    os[Ns] = null,
    a[Z1] = e) : a = jr(),
    t === void 0 ? a : Um.f(a, t)
}
  , Xm = Xt
  , Zm = Ta
  , Jm = c0
  , e8 = Jm("match")
  , t8 = function(r) {
    var e;
    return Xm(r) && ((e = r[e8]) !== void 0 ? !!e : Zm(r) === "RegExp")
}
  , r8 = U1
  , a8 = String
  , Rn = function(r) {
    if (r8(r) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
    return a8(r)
}
  , s8 = ht
  , n8 = it
  , yo = s8.RegExp
  , i8 = !n8(function() {
    var r = !0;
    try {
        yo(".", "d")
    } catch {
        r = !1
    }
    var e = {}
      , t = ""
      , a = r ? "dgimsy" : "gimsy"
      , s = function(u, d) {
        Object.defineProperty(e, u, {
            get: function() {
                return t += d,
                !0
            }
        })
    }
      , n = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    r && (n.hasIndices = "d");
    for (var i in n)
        s(i, n[i]);
    var l = Object.getOwnPropertyDescriptor(yo.prototype, "flags").get.call(e);
    return l !== a || t !== a
})
  , o8 = {
    correct: i8
}
  , l8 = Z0
  , tc = function() {
    var r = l8(this)
      , e = "";
    return r.hasIndices && (e += "d"),
    r.global && (e += "g"),
    r.ignoreCase && (e += "i"),
    r.multiline && (e += "m"),
    r.dotAll && (e += "s"),
    r.unicode && (e += "u"),
    r.unicodeSets && (e += "v"),
    r.sticky && (e += "y"),
    e
}
  , c8 = wr
  , u8 = l0
  , d8 = vn
  , Ao = o8
  , h8 = tc
  , m8 = RegExp.prototype
  , rc = Ao.correct ? function(r) {
    return r.flags
}
: function(r) {
    return !Ao.correct && d8(m8, r) && !u8(r, "flags") ? c8(h8, r) : r.flags
}
  , En = it
  , p8 = ht
  , Bn = p8.RegExp
  , zn = En(function() {
    var r = Bn("a", "y");
    return r.lastIndex = 2,
    r.exec("abcd") !== null
})
  , f8 = zn || En(function() {
    return !Bn("a", "y").sticky
})
  , v8 = zn || En(function() {
    var r = Bn("^r", "gy");
    return r.lastIndex = 2,
    r.exec("str") !== null
})
  , ac = {
    BROKEN_CARET: v8,
    MISSED_STICKY: f8,
    UNSUPPORTED_Y: zn
}
  , g8 = b0.f
  , y8 = function(r, e, t) {
    t in r || g8(r, t, {
        configurable: !0,
        get: function() {
            return e[t]
        },
        set: function(a) {
            e[t] = a
        }
    })
}
  , bo = D1
  , A8 = b0
  , b8 = function(r, e, t) {
    return t.get && bo(t.get, e, {
        getter: !0
    }),
    t.set && bo(t.set, e, {
        setter: !0
    }),
    A8.f(r, e, t)
}
  , w8 = xr
  , x8 = b8
  , k8 = c0
  , S8 = Pt
  , wo = k8("species")
  , T8 = function(r) {
    var e = w8(r);
    S8 && e && !e[wo] && x8(e, wo, {
        configurable: !0,
        get: function() {
            return this
        }
    })
}
  , M8 = it
  , I8 = ht
  , C8 = I8.RegExp
  , sc = M8(function() {
    var r = C8(".", "s");
    return !(r.dotAll && r.test(`
`) && r.flags === "s")
})
  , R8 = it
  , E8 = ht
  , B8 = E8.RegExp
  , nc = R8(function() {
    var r = B8("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc"
})
  , z8 = Pt
  , Ln = ht
  , Sr = Mt
  , L8 = H1
  , O8 = zm
  , N8 = wn
  , D8 = ec
  , F8 = Mn.f
  , xo = vn
  , _8 = t8
  , ko = Rn
  , $8 = rc
  , ic = ac
  , P8 = y8
  , H8 = Tn
  , q8 = it
  , Q8 = l0
  , G8 = kn.enforce
  , U8 = T8
  , V8 = c0
  , oc = sc
  , lc = nc
  , j8 = V8("match")
  , f0 = Ln.RegExp
  , $0 = f0.prototype
  , W8 = Ln.SyntaxError
  , K8 = Sr($0.exec)
  , ca = Sr("".charAt)
  , So = Sr("".replace)
  , To = Sr("".indexOf)
  , Mo = Sr("".slice)
  , Y8 = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
  , R0 = /a/g
  , ls = /a/g
  , X8 = new f0(R0) !== R0
  , cc = ic.MISSED_STICKY
  , Z8 = ic.UNSUPPORTED_Y
  , J8 = z8 && (!X8 || cc || oc || lc || q8(function() {
    return ls[j8] = !1,
    f0(R0) !== R0 || f0(ls) === ls || String(f0(R0, "i")) !== "/a/i"
}))
  , ep = function(r) {
    for (var e = r.length, t = 0, a = "", s = !1, n; t <= e; t++) {
        if (n = ca(r, t),
        n === "\\") {
            a += n + ca(r, ++t);
            continue
        }
        !s && n === "." ? a += "[\\s\\S]" : (n === "[" ? s = !0 : n === "]" && (s = !1),
        a += n)
    }
    return a
}
  , tp = function(r) {
    for (var e = r.length, t = 0, a = "", s = [], n = D8(null), i = !1, l = !1, u = 0, d = "", m; t <= e; t++) {
        if (m = ca(r, t),
        m === "\\")
            m += ca(r, ++t);
        else if (m === "]")
            i = !1;
        else if (!i)
            switch (!0) {
            case m === "[":
                i = !0;
                break;
            case m === "(":
                if (a += m,
                Mo(r, t + 1, t + 3) === "?:")
                    continue;
                K8(Y8, Mo(r, t + 1)) && (t += 2,
                l = !0),
                u++;
                continue;
            case (m === ">" && l):
                if (d === "" || Q8(n, d))
                    throw new W8("Invalid capture group name");
                n[d] = !0,
                s[s.length] = [d, u],
                l = !1,
                d = "";
                continue
            }
        l ? d += m : a += m
    }
    return [a, s]
};
if (L8("RegExp", J8)) {
    for (var S0 = function(e, t) {
        var a = xo($0, this), s = _8(e), n = t === void 0, i = [], l = e, u, d, m, f, b, g;
        if (!a && s && n && e.constructor === S0)
            return e;
        if ((s || xo($0, e)) && (e = e.source,
        n && (t = $8(l))),
        e = e === void 0 ? "" : ko(e),
        t = t === void 0 ? "" : ko(t),
        l = e,
        oc && "dotAll"in R0 && (d = !!t && To(t, "s") > -1,
        d && (t = So(t, /s/g, ""))),
        u = t,
        cc && "sticky"in R0 && (m = !!t && To(t, "y") > -1,
        m && Z8 && (t = So(t, /y/g, ""))),
        lc && (f = tp(e),
        e = f[0],
        i = f[1]),
        b = O8(f0(e, t), a ? this : $0, S0),
        (d || m || i.length) && (g = G8(b),
        d && (g.dotAll = !0,
        g.raw = S0(ep(e), u)),
        m && (g.sticky = !0),
        i.length && (g.groups = i)),
        e !== l)
            try {
                N8(b, "source", l === "" ? "(?:)" : l)
            } catch {}
        return b
    }, Io = F8(f0), Co = 0; Io.length > Co; )
        P8(S0, f0, Io[Co++]);
    $0.constructor = S0,
    S0.prototype = $0,
    H8(Ln, "RegExp", S0, {
        constructor: !0
    })
}
U8("RegExp");
var q0 = wr
  , Ia = Mt
  , rp = Rn
  , ap = tc
  , sp = ac
  , np = bn
  , ip = ec
  , op = kn.get
  , lp = sc
  , cp = nc
  , up = np("native-string-replace", String.prototype.replace)
  , ua = RegExp.prototype.exec
  , Fs = ua
  , dp = Ia("".charAt)
  , hp = Ia("".indexOf)
  , mp = Ia("".replace)
  , cs = Ia("".slice)
  , _s = function() {
    var r = /a/
      , e = /b*/g;
    return q0(ua, r, "a"),
    q0(ua, e, "a"),
    r.lastIndex !== 0 || e.lastIndex !== 0
}()
  , uc = sp.BROKEN_CARET
  , $s = /()??/.exec("")[1] !== void 0
  , pp = _s || $s || uc || lp || cp;
pp && (Fs = function(e) {
    var t = this, a = op(t), s = rp(e), n = a.raw, i, l, u, d, m, f, b;
    if (n)
        return n.lastIndex = t.lastIndex,
        i = q0(Fs, n, s),
        t.lastIndex = n.lastIndex,
        i;
    var g = a.groups
      , w = uc && t.sticky
      , M = q0(ap, t)
      , E = t.source
      , R = 0
      , N = s;
    if (w && (M = mp(M, "y", ""),
    hp(M, "g") === -1 && (M += "g"),
    N = cs(s, t.lastIndex),
    t.lastIndex > 0 && (!t.multiline || t.multiline && dp(s, t.lastIndex - 1) !== `
`) && (E = "(?: " + E + ")",
    N = " " + N,
    R++),
    l = new RegExp("^(?:" + E + ")",M)),
    $s && (l = new RegExp("^" + E + "$(?!\\s)",M)),
    _s && (u = t.lastIndex),
    d = q0(ua, w ? l : t, N),
    w ? d ? (d.input = cs(d.input, R),
    d[0] = cs(d[0], R),
    d.index = t.lastIndex,
    t.lastIndex += d[0].length) : t.lastIndex = 0 : _s && d && (t.lastIndex = t.global ? d.index + d[0].length : u),
    $s && d && d.length > 1 && q0(up, d[0], l, function() {
        for (m = 1; m < arguments.length - 2; m++)
            arguments[m] === void 0 && (d[m] = void 0)
    }),
    d && g)
        for (d.groups = f = ip(null),
        m = 0; m < g.length; m++)
            b = g[m],
            f[b[0]] = d[b[1]];
    return d
}
);
var fp = Fs
  , vp = q1
  , Ro = fp;
vp({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== Ro
}, {
    exec: Ro
});
var gp = B1.PROPER
  , yp = Tn
  , Ap = Z0
  , Eo = Rn
  , bp = it
  , wp = rc
  , On = "toString"
  , dc = RegExp.prototype
  , hc = dc[On]
  , xp = bp(function() {
    return hc.call({
        source: "a",
        flags: "b"
    }) !== "/a/b"
})
  , kp = gp && hc.name !== On;
(xp || kp) && yp(dc, On, function() {
    var e = Ap(this)
      , t = Eo(e.source)
      , a = Eo(wp(e));
    return "/" + t + "/" + a
}, {
    unsafe: !0
});
var Sp = function(e, t) {
    if (!e)
        return "";
    if (/(?:^(?:https?:\/\/|data:)|\.(?:jpe?g|png|gif|bmp)$)/i.test(e))
        return e;
    var a = "https://img.zuoyebang.cc/tk_";
    return /^zyb_/.test(e) ? a = "https://img.zuoyebang.cc/" : /^qa10_/.test(e) ? a = "https://img10.zuoyebang.cc/" : /^qa(\d+)?_/.test(e) ? a = "https://testimg.zuoyebang.cc/" : /^zyb(\d*?)_/.test(e) && (a = "https://img".concat(RegExp.$1, ".zuoyebang.cc/")),
    "".concat(a).concat(e, ".jpg")
};
const Tp = r => {
    var a;
    const e = r.question;
    if (typeof e == "string")
        return e;
    let t = e.content || "";
    return ((a = e == null ? void 0 : e.picList) == null ? void 0 : a.length) > 0 && (t += pc(e.picList)),
    t
}
  , mc = r => {
    var t, a, s;
    const e = r.answer;
    if (typeof e == "string")
        return e;
    if (toString.call(e).slice(8, -1) === "Array") {
        let n = (t = e[0]) == null ? void 0 : t.content;
        return ((s = (a = e[0]) == null ? void 0 : a.picList) == null ? void 0 : s.length) > 0 && (n += pc(e[0].picList)),
        n
    }
    return ""
}
  , T0 = r => r && r.replace(/<img[^>]*>/gi, e => {
    var n;
    const t = /src\s*=\s*(?:(['"])((?:\\\1|.)*?)\1|([^>\s]+))/i.exec(e);
    if (!t)
        return "";
    const a = (t[2] ?? t[3]).trim();
    if (!a)
        return "";
    const s = (n = a.replace(/\\(["'\\])/g, "$1")) == null ? void 0 : n.trim().replace(/^["']|["']$/g, "");
    return /^https?:\/\//i.test(s) ? e.replace(t[0], `src="${s}"`) : ""
}
)
  , Mp = r => r.subjectAnalysis || ""
  , pc = r => r.reduce( (t, a) => t + '<p><img src="' + Sp(a) + '"></p>', "")
  , Ip = {
    key: 0
}
  , Cp = {
    style: {
        position: "relative"
    }
}
  , Rp = ["innerHTML"]
  , Ep = {
    key: 0,
    class: "expand-mask"
}
  , Bp = oe({
    __name: "content",
    props: {
        data: {
            type: String,
            default: ""
        },
        min: {
            type: Boolean,
            default: !1
        },
        showExpand: {
            type: Boolean,
            default: !0
        }
    },
    setup(r) {
        const e = r
          , {markdownItRender: t} = o1()
          , a = z()
          , s = z(!1)
          , n = z(!0)
          , i = () => {
            n.value = !n.value
        }
          , l = W( () => t(e.data).replace(/\<br\>/g, ""))
          , u = () => {
            if (!a.value)
                return;
            a.value.scrollHeight > 236 && e.showExpand ? s.value = !0 : s.value = !1
        }
        ;
        return Ke( () => e.data, async () => {
            await zt(),
            u()
        }
        ),
        Ne( () => {
            zt(async () => {
                const d = a.value
                  , m = () => {
                    d.scrollHeight > d.offsetHeight && e.showExpand && (s.value = !0)
                }
                ;
                m(),
                /<img/.test(e.data) && setTimeout( () => {
                    m()
                }
                , 500)
            }
            )
        }
        ),
        (d, m) => r.data ? (S(),
        B("div", Ip, [A("div", Cp, [A("div", {
            innerHTML: l.value,
            ref_key: "contentRef",
            ref: a,
            class: pe(["result-item-content", {
                "result-item-content-min": r.min,
                "is-expand": n.value && r.showExpand
            }])
        }, null, 10, Rp), s.value && n.value ? (S(),
        B("div", Ep)) : J("", !0)]), s.value ? (S(),
        B("div", {
            key: 0,
            class: pe(["expand-wrapper", {
                expanded: n.value
            }]),
            onClick: m[0] || (m[0] = f => i())
        }, [ut(xe(n.value ? "展开全部" : "收起全部") + " ", 1), A("div", {
            class: pe(["expand", {
                up: !n.value
            }])
        }, null, 2)], 2)) : J("", !0)])) : J("", !0)
    }
})
  , us = ye(Bp, [["__scopeId", "data-v-8c63cf4b"]])
  , zp = {
    class: "result-item-tiku"
}
  , Lp = {
    key: 0
}
  , Op = {
    key: 1
}
  , Np = {
    key: 0,
    class: "result-item-line"
}
  , Dp = {
    key: 2
}
  , Fp = {
    key: 0,
    class: "result-item-line"
}
  , _p = oe({
    __name: "resultItem",
    props: {
        data: {
            type: Object,
            default: () => ({})
        },
        isAi: {
            type: Boolean,
            default: !1
        },
        vipToast: {
            type: String,
            default: ""
        },
        currentIndex: {
            type: Number,
            default: 0
        },
        currentQuestionIndex: {
            type: Number,
            default: 0
        }
    },
    setup(r) {
        const e = z()
          , t = r
          , a = W( () => t.data.type === "k12" ? {
            ...t.data,
            answer: T0(mc(t.data)),
            analysis: T0(Mp(t.data)),
            question: T0(Tp(t.data))
        } : {
            ...t.data,
            answer: T0(t.data.answer),
            analysis: T0(t.data.analysis),
            question: T0(t.data.question)
        })
          , s = n => {}
        ;
        return (n, i) => !r.isAi && (a.value.question || a.value.answer || a.value.analysis) ? (S(),
        B("div", {
            key: 0,
            class: "result-item",
            ref_key: "resultItem",
            ref: e,
            onClick: i[0] || (i[0] = l => s())
        }, [A("div", zp, [a.value.question ? (S(),
        B("div", Lp, [i[1] || (i[1] = A("div", {
            class: "result-item-name result-item-question primary"
        }, "题目：", -1)), (S(),
        ge(us, {
            data: a.value.question,
            key: a.value.question
        }, null, 8, ["data"]))])) : J("", !0), a.value.answer ? (S(),
        B("div", Op, [a.value.question ? (S(),
        B("div", Np)) : J("", !0), i[2] || (i[2] = A("div", {
            class: "result-item-name primary"
        }, "答案：", -1)), (S(),
        ge(us, {
            showExpand: !1,
            data: a.value.answer,
            key: a.value.answer
        }, null, 8, ["data"]))])) : J("", !0), a.value.analysis ? (S(),
        B("div", Dp, [a.value.answer ? (S(),
        B("div", Fp)) : J("", !0), i[3] || (i[3] = A("div", {
            class: "result-item-name primary"
        }, "解析：", -1)), (S(),
        ge(us, {
            showExpand: !1,
            data: a.value.analysis,
            key: a.value.analysis
        }, null, 8, ["data"]))])) : J("", !0)])], 512)) : J("", !0)
    }
})
  , $p = ye(_p, [["__scopeId", "data-v-8538eb0f"]])
  , Pp = {
    class: "tab"
}
  , Hp = ["onClick"]
  , qp = {
    class: "tab-item-name"
}
  , Qp = oe({
    __name: "tab",
    props: {
        data: {
            default: () => []
        },
        current: {
            default: 0
        }
    },
    emits: ["tabClick"],
    setup(r, {emit: e}) {
        const t = r
          , a = e
          , s = z()
          , n = z([])
          , i = z({
            display: "none"
        })
          , l = (d, m) => {
            var f;
            s.value && ((f = n.value) != null && f.length) && zt( () => {
                const b = n.value[t.current]
                  , g = b.offsetLeft + b.offsetWidth / 2;
                if (i.value = {
                    transition: "transform 0.3s",
                    transform: `translateX(${g}px) translateX(-50%)`,
                    display: "block"
                },
                d) {
                    const w = b.offsetLeft - (s.value.offsetWidth - b.offsetWidth) / 2;
                    s.value.scrollLeft = w
                }
            }
            )
        }
        ;
        Ke( () => t.current, l);
        const u = d => {
            a("tabClick", d)
        }
        ;
        return Ne( () => {
            l(),
            window.addEventListener("resize", l)
        }
        ),
        (d, m) => (S(),
        B("div", Pp, [A("div", {
            class: "tab-wrap",
            ref_key: "tabRef",
            ref: s
        }, [(S(!0),
        B(Te, null, Je(d.data, (f, b) => (S(),
        B("div", {
            class: pe(["tab-item", {
                "tab-item-active": b == t.current
            }]),
            ref_for: !0,
            ref_key: "tabItemRef",
            ref: n,
            onClick: g => u(b)
        }, [A("span", qp, xe(f.tabName), 1)], 10, Hp))), 256))], 512)]))
    }
})
  , fc = ye(Qp, [["__scopeId", "data-v-d9dea173"]])
  , Gp = {
    key: 0,
    class: "clickCopy",
    width: "20px",
    height: "20px",
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
}
  , Up = {
    key: 1,
    width: "20px",
    height: "20px",
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
}
  , Bo = oe({
    __name: "message-toolbar-icon",
    props: {
        type: {
            type: String,
            default: "copy"
        }
    },
    setup(r) {
        return (e, t) => r.type === "clickCopy" ? (S(),
        B("svg", Gp, t[0] || (t[0] = [ps('<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-826.000000, -647.000000)"><g transform="translate(826.000000, 647.000000)"><rect x="0" y="0" width="20" height="20"></rect><g transform="translate(4.343146, 3.343146)" stroke="#00D185" stroke-linecap="round" stroke-linejoin="round"><polyline transform="translate(5.656854, 5.656854) rotate(-45.000000) translate(-5.656854, -5.656854) " points="0.156854249 3.15685425 0.156854249 8.15685425 11.1568542 8.15685425"></polyline></g></g></g></g>', 1)]))) : r.type === "copy" ? (S(),
        B("svg", Up, t[1] || (t[1] = [ps('<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-826.000000, -609.000000)"><g transform="translate(826.000000, 609.000000)"><rect x="0" y="0" width="20" height="20"></rect><g transform="translate(3.125000, 3.125000)" class="change_color_stroke" stroke="#626466" stroke-linecap="round" stroke-width="1.5"><rect x="0" y="2.5" width="11.25" height="11.875" rx="2"></rect><path d="M2.5,2.51556003 L2.5,2.51556003 L2.5,2.5 C2.5,1.11928813 3.61928813,0 5,0 L11.25,0 C12.6307119,0 13.75,1.11928813 13.75,2.5 L13.75,9.375 C13.75,10.7557119 12.6307119,11.875 11.25,11.875 L11.2374411,11.875 L11.2374411,11.875"></path></g></g></g></g>', 1)]))) : J("", !0)
    }
})
  , Vp = {
    class: "message-toolbar"
}
  , jp = oe({
    __name: "message-toolbar",
    props: {
        message: {},
        copyVal: {}
    },
    setup(r) {
        const e = r
          , t = z(!1)
          , a = () => {
            t.value = !0,
            setTimeout( () => {
                t.value = !1
            }
            , 1500),
            yu(e.copyVal || e.message.textContent),
            bt("复制成功")
        }
        ;
        return (s, n) => (S(),
        B("div", Vp, [n[1] || (n[1] = A("div", {
            class: "chase"
        }, null, -1)), A("div", {
            class: "chase-item",
            onClick: a
        }, [k(t) ? (S(),
        ge(Bo, {
            key: 0,
            type: "clickCopy",
            class: "icon"
        })) : (S(),
        ge(Bo, {
            key: 1,
            type: "copy",
            class: "icon"
        })), n[0] || (n[0] = A("span", null, "复制", -1))])]))
    }
})
  , Nn = ye(jp, [["__scopeId", "data-v-684b9149"]])
  , Wp = {
    class: "thinking-container"
}
  , Kp = {
    class: "text text-with-sweep-light"
}
  , Yp = oe({
    __name: "thinking",
    props: {
        type: {
            type: String,
            default: "normal"
        },
        thinkingText: {
            type: String,
            default: "思考中..."
        }
    },
    setup(r) {
        const e = r
          , t = z("Super AI thinking...");
        let a;
        return Ne( () => {
            Ke( () => e.type, () => {
                e.type === "coding" && (t.value = "Super AI thinking...",
                a = setTimeout( () => {
                    t.value = "Calculating...",
                    a = setTimeout( () => {
                        t.value = "Verifying..."
                    }
                    , 3e3)
                }
                , 1e3))
            }
            , {
                immediate: !0
            })
        }
        ),
        Gt( () => {
            a && clearTimeout(a)
        }
        ),
        (s, n) => (S(),
        B("div", Wp, [A("div", Kp, xe(r.type === "coding" ? k(t) : r.thinkingText), 1)]))
    }
})
  , vc = ye(Yp, [["__scopeId", "data-v-7feae1a2"]])
  , Xp = {
    class: "caputre-search-content"
}
  , Zp = {
    class: "capture-reply"
}
  , Jp = {
    class: "capture-reply-item"
}
  , ef = {
    class: "result-box"
}
  , tf = {
    key: 0
}
  , rf = {
    key: 1
}
  , af = {
    key: 0,
    class: "waiting-render-container"
}
  , sf = {
    key: 2,
    class: "no-data"
}
  , nf = oe({
    name: "render-capture-search-message",
    __name: "index",
    props: {
        message: {},
        asReply: {
            type: Boolean
        },
        isLast: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = W( () => d.value < w.value.length - 1 ? T0(mc(w.value[d.value])) : e.message.content.text)
          , a = W( () => {
            var C;
            return e.isLast && ((C = w.value) == null ? void 0 : C.length) > 1 && d.value < w.value.length - 1 || e.isLast && e.message.content.text && e.message.isRenderFinished && d.value === w.value.length - 1 && !e.message.isEmptyError && e.message.transferStatus === me.TransferSuccessful
        }
        )
          , s = W( () => e.message)
          , n = W( () => {
            var L, D;
            const C = Oe.getAskMessageByReplyMessage(s.value);
            return ((L = C == null ? void 0 : C.content) == null ? void 0 : L.localUrl) || ((D = s.value.content) == null ? void 0 : D.imgUrl)
        }
        )
          , i = z(!1)
          , l = z(!1)
          , u = cr("autoScrollControl")
          , d = z(0)
          , m = C => {
            d.value = C,
            g(C)
        }
          , f = z(!1)
          , b = W( () => !i.value && f.value)
          , g = C => {
            var D, _, q, j, se, Ee;
            let L = null;
            ((q = (_ = (D = s.value) == null ? void 0 : D.content) == null ? void 0 : _.picSearchList) == null ? void 0 : q.length) > 0 && (L = (Ee = (se = (j = s.value) == null ? void 0 : j.content) == null ? void 0 : se.picSearchList[C]) == null ? void 0 : Ee.aiPicSearchReq),
            Oe.updateMessage(s.value, {
                aiPicSearchReq: L
            })
        }
          , w = W( () => {
            var L, D;
            const C = (D = (L = s.value) == null ? void 0 : L.content) == null ? void 0 : D.picSearchList;
            return C && C.length > 0 ? C.map( (_, q) => ({
                ..._,
                tabName: q < C.length - 1 ? `结果${q + 1}` : "AI解题"
            })) : [{
                tabName: "AI解题"
            }]
        }
        )
          , M = async () => {
            var C;
            d.value === w.value.length - 1 && n.value && !((C = s.value.content) != null && C.text) && R()
        }
          , E = Wo(M, 1e3, !0);
        Ke( () => w.value, (C, L) => {
            (C == null ? void 0 : C.length) > 1 && (L == null ? void 0 : L.length) !== (C == null ? void 0 : C.length) && (u.scrollToLatestTop(),
            g(0))
        }
        , {
            immediate: !0
        });
        const R = () => {
            ue.emit("hiddenThinking", !0);
            let C = Oe.getAskMessageByReplyMessage(e.message);
            l.value = !0,
            f.value = !1,
            C && Oe.imageAiSearch(e.message, C)
        }
          , N = C => {
            var L;
            C === w.value.length - 1 && Oe.getIsTransferring() && e.message.localId !== ((L = Oe.getCurReplyMessage()) == null ? void 0 : L.localId) ? bt("请稍等消息回复完成.") : (u.pauseAutoScroll(),
            m(C),
            M())
        }
        ;
        return Hs( () => {
            e.message.content.text && e.message.transferStatus === me.TransferFailed && u.pauseAutoScroll()
        }
        ),
        Ne( () => {}
        ),
        Ke( () => e.message.transferStatus, C => {
            var L;
            C !== me.Transferring && !e.isLast && Oe.updateMessage(e.message, {
                renderFinished: we.All
            }),
            C !== me.Transferring && ((L = w.value) == null ? void 0 : L.length) === 1 && E()
        }
        , {
            immediate: !0
        }),
        (C, L) => {
            var D, _, q;
            return S(),
            B(Te, null, [A("div", Xp, [A("div", Zp, [A("div", Jp, [A("div", ef, [A("div", {
                class: pe(["result-content", {
                    "result-content-no-data": b.value
                }])
            }, [i.value ? (S(),
            B("div", tf, L[0] || (L[0] = [A("div", {
                class: "skeleton"
            }, [A("div", {
                class: "skeleton-item paragraph p-l"
            }), A("div", {
                class: "skeleton-item paragraph p-m"
            }), A("div", {
                class: "skeleton-item paragraph p-s"
            })], -1)]))) : !i.value && ((D = w.value) == null ? void 0 : D.length) > 0 ? (S(),
            B("div", rf, [ft(Z(fc, {
                data: w.value,
                current: d.value,
                onTabClick: N
            }, null, 8, ["data", "current"]), [[St, w.value.length > 1]]), ft((S(),
            ge($p, {
                key: "normal-" + d.value,
                isAi: !1,
                data: w.value[d.value],
                currentIndex: d.value,
                currentQuestionIndex: 0
            }, null, 8, ["data", "currentIndex"])), [[St, d.value < w.value.length - 1]]), !((q = (_ = C.message) == null ? void 0 : _.content) != null && q.text) && d.value === w.value.length - 1 ? (S(),
            B("div", af, [Z(vc)])) : (S(),
            B("div", {
                key: 1,
                class: pe([{
                    noMr: w.value.length < 2
                }, "aiSearchBox"])
            }, [ft(Z(hn, {
                isLast: C.isLast,
                message: C.message,
                asReply: C.asReply,
                md: !0
            }, null, 8, ["isLast", "message", "asReply"]), [[St, d.value == w.value.length - 1]])], 2))])) : (S(),
            B("div", sf, L[1] || (L[1] = [A("div", {
                class: "no-data-text"
            }, "抱歉，暂未搜索到题目", -1)])))], 2)])])])]), a.value ? (S(),
            ge(Nn, {
                key: 0,
                copyVal: t.value,
                message: C.message
            }, null, 8, ["copyVal", "message"])) : J("", !0)], 64)
        }
    }
})
  , of = ye(nf, [["__scopeId", "data-v-2e793775"]])
  , lf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAxlBMVEUAAAD///+doqaeoKSeoaSdoKScoKOdnaOdoKSdoKOdoKOdoKOVqqqdoKKdoKOdoKOdn6SdoKOdoKOdoKOdoaOdoKOcn6SdoKOdoKOdoKOdoKOdoKOdoKSfn5+doKOdoKOdoKOdoKKdoKOdoKOdoKOZoqKdoKOeoaSgpKidoKOdoKOdoKKeoqadn6OcoaKeoKOdoKOdn6OdoKOdoKOdoaOdoKOdoKKdoKOdoKOeoKOdoKOdoKOdoKOdoKOdoKOcoKOdoKP////yYU+JAAAAQHRSTlMAAAw0Tm2NFXaw3vcBIIXpPsD9+crKCl322vr8YgRc6uJupf68B8ciD/DtSA8hLFDCGFCatWJveeZ3sfi3no+FYFOkVAAAAAFiS0dEAf8CLd4AAAGgSURBVDjL1ZTXdoJQEEVH7A0VNBYk9m5ir7Hs//+qLEgkoNGQt2Re4A57Le4995wR+XcVUIKhcCQSDgWVwCMuGosnkgDJRDwWvUel0moGV2XUdOpbMJvTbEDPF3T7Rctlv8GeiiXQyxWMqmlWDSplHUrPTzdgsQb1RrNFuyPSadNqNupQK17vL1vC6Pb6A4Yjaz0aMhj3ugalrHefLznovsoEpjNrPZvCXF67kEt7QFWj3hNzAcvVerNZr5awMKVXR1M9+mXQG+P5YgsfJ7ce28V83NDJuPQM7KDcHHBTg2YZdl93pOyh0rI/vR2Op/P5dDy82ctWBfaKAwYTVnM4XWocLr0D2nI6tPqJoAOGkmC0R7MVHC+9I6xmo7YByZADhkGvdkTWcLr0TrAW6VR1CDtgBPKmiGzAEUOFjYiYeYi4wcI1eP4EC27Q9699H8a3PErcI7iqegSPfwkeiD26wpgrZrYp+pNrU0z6V6bwbzNJfxh3/qNxP6Mw/jEKvsN1L67F27i6B0D+0QD4xUix9NztL0Nqv7s7pOQXY+9v1jtWcHoJZkJjdgAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAAEXRFWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAAXdEVYdGV4aWY6RXhpZkltYWdlTGVuZ3RoADYw94uaxQAAABZ0RVh0ZXhpZjpFeGlmSW1hZ2VXaWR0aAA2MLp5J0AAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAyNlMbomUAAAAASUVORK5CYII="
  , Ps = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAAAVFRUTFBQTFBQTExMTFBQTFBQTFBT///+xjGzyAAAAB3RSTlMAEZKlI9O3iYbuawAAAAFiS0dECIbelXoAAABKSURBVCjPY2AYSoBRAJVmEDKB0M6KUAHhUgcQxRJuCBVgCU8BUW4QcTgTKoxQgqQAzEFWAFaCogCkBEUBSAmqAgYGZxMczh9CAADdUw3RcBXjogAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAAEXRFWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAAXdEVYdGV4aWY6RXhpZkltYWdlTGVuZ3RoADQ4y2ZwdQAAABZ0RVh0ZXhpZjpFeGlmSW1hZ2VXaWR0aAA0OIaUzfAAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAyNlMbomUAAAAASUVORK5CYII="
  , cf = {
    class: "source-wrapper"
}
  , uf = {
    class: "left-arrow-wrapper"
}
  , df = {
    class: "arrow-box"
}
  , hf = ["href"]
  , mf = {
    class: "list-item-title"
}
  , pf = {
    class: "list-item-bottom"
}
  , ff = {
    class: "list-item-siteName text-ellipsis"
}
  , vf = {
    class: "list-item-index"
}
  , gf = {
    class: "right-arrow-wrapper"
}
  , yf = {
    class: "arrow-box"
}
  , Af = oe({
    __name: "search-source-card",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    setup(r) {
        const e = {
            listItemGap: 8,
            listItemWidth: 196
        }
          , t = ma({
            left: !1,
            right: !0
        })
          , a = z()
          , s = z(0)
          , n = z(1)
          , i = e.listItemWidth + e.listItemGap;
        Ne( () => {
            if (a.value) {
                const {offsetWidth: f} = a.value;
                n.value = Math.floor(f / i)
            }
        }
        );
        const l = z(0)
          , u = () => {
            if (a.value) {
                const {scrollLeft: f, scrollWidth: b, offsetWidth: g} = a.value;
                s.value = f,
                t.left = f > 10,
                t.right = f < b - g,
                l.value++
            }
        }
          , d = f => {
            const b = Math.round(s.value / i);
            m(f === "left" ? (b - n.value) * i - 32 - 20 : (b + n.value) * i - 32 - 20)
        }
          , m = f => {
            a.value && a.value.scrollTo({
                left: f ?? 0,
                behavior: "smooth"
            })
        }
        ;
        return (f, b) => (S(),
        B("div", cf, [ft(A("div", uf, [A("div", df, [A("img", {
            src: Ps,
            alt: "icon-left-arrow",
            class: "icon-arrow",
            onClick: b[0] || (b[0] = jt(g => d("left"), ["stop"]))
        })])], 512), [[St, k(t).left]]), A("div", {
            ref_key: "scrollRef",
            ref: a,
            class: "list-wrapper",
            style: nt({
                gap: e.listItemGap + "px"
            }),
            onScroll: u
        }, [(S(!0),
        B(Te, null, Je(r.list, (g, w) => (S(),
        B("a", {
            key: w,
            href: g.link,
            target: "_blank",
            class: "list-item",
            style: nt({
                width: e.listItemWidth + "px"
            }),
            rel: "nofollow"
        }, [A("div", mf, xe(g.title), 1), A("div", pf, [A("div", ff, xe(g.link), 1), A("div", vf, xe(w + 1), 1)])], 12, hf))), 128))], 36), ft(A("div", gf, [A("div", yf, [A("img", {
            src: Ps,
            alt: "icon-right-arrow",
            class: "icon-arrow",
            onClick: b[1] || (b[1] = jt(g => d("right"), ["stop"]))
        })])], 512), [[St, k(t).right]])]))
    }
})
  , bf = ye(Af, [["__scopeId", "data-v-19389629"]])
  , wf = {
    key: 0,
    class: "web-search-bar"
}
  , xf = {
    class: "web-search-bar-title"
}
  , kf = {
    class: "web-search-bar-title-left"
}
  , Sf = {
    class: "web-search-bar-title-left-text"
}
  , Tf = {
    class: "web-search-bar-title-right"
}
  , Mf = {
    key: 0,
    class: "web-search-bar-divider"
}
  , If = oe({
    __name: "web-search-bar",
    props: {
        message: {},
        webSearch: {}
    },
    setup(r) {
        const e = r
          , t = z(!0)
          , a = () => {
            t.value = !t.value
        }
        ;
        return (s, n) => {
            const i = Qs;
            return s.webSearch.length ? (S(),
            B("div", wf, [A("div", xf, [A("div", kf, [n[0] || (n[0] = A("img", {
                src: lf,
                alt: "icon-web-search",
                class: "web-search-bar-title-left-icon-web-search"
            }, null, -1)), A("span", Sf, "找到" + xe(s.webSearch.length) + "篇资料参考", 1)]), A("div", Tf, [e.message.renderFinished === k(we).All ? (S(),
            B("img", {
                key: 0,
                src: Ps,
                alt: "icon-down-arrow",
                class: pe(["web-search-bar-title-right-icon-down-arrow", {
                    "arrow-up": !k(t)
                }]),
                onClick: a
            }, null, 2)) : J("", !0)])]), k(t) ? (S(),
            B("div", Mf)) : (S(),
            ge(i, {
                key: 1
            }, {
                default: Le( () => [Z(bf, {
                    class: "web-search-bar-card",
                    list: s.webSearch
                }, null, 8, ["list"])]),
                _: 1
            }))])) : J("", !0)
        }
    }
})
  , Cf = ye(If, [["__scopeId", "data-v-f357fc7d"]])
  , Rf = {
    class: "render-ai-search-link-message"
}
  , Ef = {
    class: "abstract-box"
}
  , Bf = oe({
    __name: "search-link",
    props: {
        message: {},
        isLast: {
            type: Boolean
        },
        asReply: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = W( () => {
            const d = e.message.content.webSearch;
            return typeof d == "string" ? JSON.parse(d) : d
        }
        )
          , a = z()
          , s = z(!0)
          , n = z(!1)
          , i = W( () => e.asReply && e.isLast && !e.message.isRenderFinished)
          , l = () => {
            n.value = !0
        }
          , u = () => {
            if (!e.message.isRecordFinished)
                return;
            if (e.message.renderFinished == we.Some && e.message.error === X.ManualStop && e.message.isStopping) {
                let b = "";
                a.value && (b = a.value.getBeforeCovert()),
                Oe.updateMessage(e.message, {
                    content: {
                        ...e.message.content,
                        text: b
                    },
                    isStopping: !1
                });
                return
            }
            e.message.renderFinished === we.None && Oe.updateMessage(e.message, {
                renderFinished: we.All
            })
        }
        ;
        return Ke( () => e.message.isRenderFinished, () => {
            s.value = !0,
            e.message.isRenderFinished && u()
        }
        , {
            immediate: !0
        }),
        Ke( () => e.message.isRecordFinished, () => {
            const d = a.value.getWaitStr();
            e.message.isRecordFinished && !d && (n.value || !e.message.content.text) && u()
        }
        ),
        (d, m) => (S(),
        B("div", Rf, [Z(Cf, {
            message: d.message,
            webSearch: t.value
        }, null, 8, ["message", "webSearch"]), A("div", Ef, [Z(or, {
            onWaitNewContent: u,
            onStartTyping: l,
            ref_key: "textContentRef",
            ref: a,
            typingEffect: i.value,
            content: d.message.content.text
        }, null, 8, ["typingEffect", "content"])])]))
    }
})
  , zf = ye(Bf, [["__scopeId", "data-v-bc8d7a98"]])
  , Lf = {
    class: "render-ai-search-message"
}
  , Of = oe({
    __name: "index",
    props: {
        message: {},
        isLast: {
            type: Boolean
        },
        asReply: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = W( () => {
            const a = e.message.content.webSearch;
            return typeof a == "string" ? JSON.parse(a) : a
        }
        );
        return (a, s) => {
            var n, i;
            return S(),
            B("div", Lf, [(n = t.value) != null && n.length ? (S(),
            ge(zf, {
                key: 0,
                message: a.message,
                asReply: a.asReply,
                isLast: a.isLast
            }, null, 8, ["message", "asReply", "isLast"])) : !((i = t.value) != null && i.length) && a.message.content.text ? (S(),
            ge(hn, {
                key: 1,
                isLast: a.isLast,
                message: a.message,
                asReply: a.asReply,
                md: !0
            }, null, 8, ["isLast", "message", "asReply"])) : J("", !0)])
        }
    }
})
  , Nf = {
    class: "render-calculator-message"
}
  , Df = {
    key: 0,
    class: "main-content"
}
  , Ff = {
    key: 0,
    class: "answer"
}
  , _f = {
    class: "steps"
}
  , $f = {
    class: "left-part"
}
  , Pf = {
    class: "number"
}
  , Hf = {
    class: "step-content"
}
  , qf = oe({
    __name: "index",
    props: {
        message: {},
        asReply: {
            type: Boolean
        },
        isLast: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = z(!1)
          , a = z(0)
          , s = d => {
            a.value = d
        }
          , n = W( () => e.message.content.cardList)
          , i = W( () => {
            var d, m;
            return (m = (d = n.value[0]) == null ? void 0 : d.detailList) == null ? void 0 : m.aiCalculatorInfo[0].result
        }
        )
          , l = W( () => {
            var d;
            return ((d = i.value) == null ? void 0 : d.map(m => ({
                tabName: m.method
            }))) || []
        }
        )
          , u = W( () => e.isLast && i.value && i.value[a.value].answer && e.message.isRenderFinished && !e.message.isEmptyError && e.message.transferStatus === me.TransferSuccessful);
        return Ke(n, () => {
            n.value && !e.message.isRenderFinished && Oe.updateMessage(e.message, {
                renderFinished: we.All
            })
        }
        , {
            immediate: !0
        }),
        (d, m) => (S(),
        B(Te, null, [A("div", Nf, [i.value ? (S(),
        B("div", Df, [i.value[a.value].answer ? (S(),
        B("div", Ff, [m[0] || (m[0] = A("h2", {
            class: "title"
        }, "答案", -1)), Z(or, {
            class: "step-formula",
            typingEffect: !1,
            content: i.value[a.value].answer
        }, null, 8, ["content"])])) : J("", !0), A("div", _f, [A("h2", {
            class: "title",
            style: nt({
                marginBottom: t.value ? 0 : ""
            })
        }, " 求解过程 ", 4), A("div", {
            class: pe(["step__fold-wrap", {
                "is-fold": t.value
            }])
        }, [Z(fc, {
            onTabClick: s,
            current: a.value,
            data: l.value
        }, null, 8, ["current", "data"]), (S(!0),
        B(Te, null, Je(i.value[a.value].steps, (f, b) => (S(),
        B("div", {
            key: b,
            class: "step"
        }, [A("div", $f, [A("div", Pf, [A("span", null, xe(b + 1), 1)]), m[1] || (m[1] = A("div", {
            class: "line"
        }, null, -1))]), A("div", Hf, [Z(or, {
            class: "step-explain",
            typingEffect: !1,
            content: f.explain
        }, null, 8, ["content"]), Z(or, {
            class: "step-formula",
            typingEffect: !1,
            content: f.formula
        }, null, 8, ["content"])])]))), 128))], 2)])])) : J("", !0)]), u.value && i.value ? (S(),
        ge(Nn, {
            key: 0,
            copyVal: i.value[a.value].answer,
            message: d.message
        }, null, 8, ["copyVal", "message"])) : J("", !0)], 64))
    }
})
  , Qf = ye(qf, [["__scopeId", "data-v-7757ba63"]])
  , da = oe({
    __name: "render-message",
    props: {
        message: {},
        asReply: {
            type: Boolean
        },
        isLast: {
            type: Boolean
        }
    },
    setup(r) {
        const e = r
          , t = W( () => e.message.contentType)
          , a = n => {
            let i;
            switch (n) {
            case P.Text:
            case P.Markdown:
            case P.AISearchAsk:
                i = hn;
                break;
            case P.PcPicSearch:
                i = of;
                break;
            case P.Calculator:
                i = Qf;
                break;
            case P.Image:
                i = sd;
                break;
            case P.AiSearch:
                i = Of;
                break
            }
            return i
        }
          , s = qo(a(t.value));
        return Ke(t, n => {
            s.value = a(n)
        }
        ),
        (n, i) => s.value ? (S(),
        ge(Qo(s.value), {
            key: 0,
            message: n.message,
            "as-reply": n.asReply,
            "is-last": n.isLast
        }, null, 8, ["message", "as-reply", "is-last"])) : J("", !0)
    }
})
  , gc = z(Date.now())
  , yc = () => {
    window.requestAnimationFrame( () => {
        gc.value = Date.now(),
        yc()
    }
    )
}
;
yc();
const Gf = {
    class: "common-question"
}
  , Uf = {
    key: 0,
    class: "time"
}
  , Vf = {
    class: "content"
}
  , jf = {
    key: 0,
    class: "sign"
}
  , Wf = {
    class: "sign sign-error"
}
  , Kf = oe({
    __name: "question-message",
    props: {
        message: {},
        lastMessageTimestamp: {}
    },
    setup(r) {
        const e = i => String(i).length === 13 ? i : i * 1e3
          , t = r
          , a = W( () => t.lastMessageTimestamp === 0 || e(t.message.createTime) - e(t.lastMessageTimestamp) < 2 * 60 * 1e3 ? "" : Kc(e(t.message.createTime), gc.value))
          , s = () => {
            console.error("resend"),
            t.message,
            Oe.resendMessage(t.message)
        }
          , n = W( () => ![P.Image].includes(t.message.contentType));
        return (i, l) => (S(),
        B("div", Gf, [a.value ? (S(),
        B("div", Uf, xe(a.value), 1)) : J("", !0), A("div", Vf, [t.message.transferStatus === k(me).Transferring ? (S(),
        B("div", jf, l[0] || (l[0] = [A("img", {
            src: _4,
            alt: "loading",
            class: "answer-loading"
        }, null, -1)]))) : J("", !0), ft(A("div", Wf, [A("div", {
            class: "error-box",
            onClick: jt(s, ["stop"])
        }, l[1] || (l[1] = [A("img", {
            class: "answer-error",
            src: $4,
            alt: ""
        }, null, -1)]))], 512), [[St, t.message.transferStatus === k(me).TransferFailed]]), A("div", {
            class: pe(["message", {
                "message--pure-image": !n.value
            }])
        }, [[k(P).Image].includes(i.message.contentType) ? (S(),
        ge(da, {
            key: 0,
            class: "image-message",
            message: i.message,
            "as-reply": !1
        }, null, 8, ["message"])) : (S(),
        ge(da, {
            key: 1,
            class: "text",
            message: i.message,
            "as-reply": !1
        }, null, 8, ["message"]))], 2)])]))
    }
})
  , Yf = ye(Kf, [["__scopeId", "data-v-7600161b"]])
  , Xf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAA3RSURBVHicxVx9cFxVFf+d+zZpQih9LW3UAnbTOuWjGboB2g4ylLRWEIVxGZSm4tgE/nH4qImODiBME1HoUHHLODjqqDQz/pGOYndG+KeWboYPC0KbVJNmrJQsM4CQKFmwH7TZd49/vPd238d9H5vdpGfmzN29ee++e373d8499963IcyxPP/EsZQBpMDaagkki0xJCdKlhC5BugGCZCpIRsGAKBhMeSbKS4OGz7BxpKf34uG57C/N9gNyj48lpzW0g7StRVCKmXSDAQmCwVQuGbDACay36goGxKCUYvATIfp7excWZrP/swZQ7smxTmbaKkHtpqFkGRobCOse+K8FHN/FoGHI/kcfW7x7NuyoKUC5zFhSk2hn0HaDKek2JMxggsFwgOip97Gt3I7jnoLB/NTZU9i1a1ftWFUzgF58crQTJLZLpmQgSwC42eQBwFkPN5AuBvrAcjGwUDS47+dPLNhVC7uqBuiVzGgKLPYaQFJ6O+xjicrFFKBF3B/GKEf98DTJnt/smD9YjX2iKnCeHO0F05DBJjiGxQjDMs6AXeeptxXuzyUDffHJzRZXG14t/z0FqeU6f/BJphobZ8Sgg5mxJMC5EjC+4KpysQBXis8Iy9UiXUzF2OFiUd42sKsxP+sAvZIZTREjJ0F6YFCNchcnADGBdAEwAxc1mAosecMfdtVXlEdV5GIHM6OdxDQkIXSVi/jcRTmidr0ICOSqgB23zeC/S5BukJZLdxc7K7E5NoP++uRIN0hk7NFRd0o1+tF5T9DIRzMz/ixoMIEBMAEE9GR/psWa5WIBdDAz2slMz3gfHkj3meQ9UQZ7YlWlLsa2tSXlruzOxO6qATKnccpJkO6bZiNGTB03Krh/5kHZHb984JhKbLRld4bHpFCADmbGkgbzEJfAqYARVsfiB/LoGe3GjfOw5uoEXj1k4M/7i7GCv585DgUVQNSW3UH5IAxCg7Rk3ivZBMewHm74RiwYHHWO4smRSsHdwyxP2wt0gS9tqseFCwW+sqkOK1pEWA6ECxcS7usg3LLeDDpsgeIqBessOBeGQSBAL2eOZgxQKmh2KXXIZ2j5s4yafVRtBrS/5qq6Ut9OnWa8/a7lSoq2LlxEePQegY1rCXenCas+RyACQKqSk+mHjd6KAHpp5z/apaRu9wj5GeFij2vkFeyx24Ci3sk2uK+3wbvyikR58N6QOHHae4+ZqX92KeFn3xNoXlS2Z9tmspjDASW2px86m4oNkNTqMoEjjngjHjtHUc5YjgQPhBUtGi5eWu7qvpcNxdJEYE2rwKP3CjQ1uu1pXghsvIYCGGSWqEvsjQVQbufRbslIKeOGYsQMp4E2e5TgBbPEx0xnIGc3e156w8AHH/rb+vJ6wgN3kQ8cW1qXu5kDX8nJdK8/iXQBlMsM6RDadv+IitARr5YlUcxcubzczRffYF9bX7/JjDVBMjEF5IYACAIJswSRWdqfiQAhtqd7Oem8N+H8Uiw2dBNBd3cAiqndPWtFbpsiJJdRAulu59CoxCVLBf60z8Dom+y69o6bCB03qcGZmAIOHGbkhoAPCgwigAEQTCaVvpen/iSEbAew227D1fL+nx6bMhh67XcA3VP4fF3DAl1AMmFeA+G/U4yTp4HJKQQ/01lvPTMInIkpYOAFxug4MFFgiyHe0mG9MzcSyGcfEi0+gPY9MdbJpD0TDQQ8O3welvjcDZi/IIGVl9dh5WX1aGmpQ5gce8vA0KjEoRGJySkEDtR9HYSNa93gTEwBA/sZucMOhpCLIW5gBAFQAchd2QfNZUjJxSQltqp36wJ2ABXu4gXn4mV1uL79PCyLAMUpK5drWLlcw+ZbgbHjEs/ukxg9jjIzQUguhQuciSlg4C+M3GGUDCVP6QOopOQvQVthuRkBwN7MuD5vujgVlxFRi9T5CzRc134ermxriA1MmBw9zvjdXsbx91BaOjzYZc5YBw4BBw6Zs5GTMUEMCmRUCRw2mWVQS/ZByicAoH5abg2MJT538rAMbhe4YnUDNt18PhoaandgcsUKQt+9hN9mGbk3TDB29HPJMHIY6GWOl0HB4DhAIgCa0Q5gtwAAydxead7jzo5NcK69oQm33Da/puDY0tQIbNtCuCsdsrYKz3MUdc7So0JsBaw8yIBoj85hgnYAzUXjtTc04foN59UcGK/cej1h843lfIbIUTozYzvPIacipPQChBQA0N6fHEtJLTE0k30W+/qr1zVi083nzzo4ThnYz9hzgEt5TOSsFehOIWkAim2CE3WrY626leAQLlpWP+fgAEDHJsKq5Q4meUo3c4IUISUAiJSYZuFYd8VfL9n117fPvlsFybbbSR1zMIOYo1KNVgsGJ92LzQAWKdjTmmqoKMeptTQvBDZepWCGvcYSsL57yvgumBSGpKSPPaoZTTF7rZ+DoBwlHRvsuOFROD/DXcZnUlIUmfTQWBMQiy5J1kPXqzq5rok068CqlgAWkYNJQWUYQAK6kNYLTUExJmgH8NLLz51reWVjCpXHHCjq/NfoCfM4J+IoBv4FbFvbvLlDIEJalznjSsisVLnqwscSlFkSxKoLFmizki3PVJp1oFmvwazlZJYloshUqHQHsL7x3MceryzRY+Q1cVQ4SoFCQjIVZPnt0lg7gAsWuAE6dZqR+fUZzGsgrFyu4fNXa1i8aG4Z1tQIB2OqcisnmwoJA6LgOgGFZ8WuWMnPa3ADdPoT4O33GAYDo8cNPLtPYuUKgcuWC1y2gpBcGryZHiQTBWBiitHUSGj5dAyAGmzDagSODZBk5A1QKnCfWLFG+88UuzrH8N8z8ibj7/+SpfrFi2Aae7E52i1LzU6c/MRUwCzH3wfy7zNOnDFtTX4GyHw7BhtLhtWUQflEESLPrgVq+H6PwYSTp919W7xQFavK+0mAud88WWDk31d1huBdLNr7OM16NDYAMPGxs60agEMAQHlRNHDEeT4e5+Rz0sMgAFhpnZV7z7QY5gqbrYeqy+AZKI57AcBkCaDaKRGGhdQwXHYlEbAfJFyx6MQpv5u1tWq+dAH2gFoaerIZoK3JaHBOngEm/gd75lErITpz9ijT9BHxw97mYYOpUOnbqf88Ll2dvGaV20WdzCkzKOhsnMHWuokd66lVSaA1GR1/XntTkevAUcJTF08L2a76YWvLlYYr3Q968XU3QEsWEW6/0TyBBQEkPEpQ7vyVS7L+XmZPxw2R2AAAcqMKA935TDiz1AF6ENYlmJay38cchO8Djb7FmPzQ7WabbyIsWRQWc0L2jIV7Bb75BmsJESEnzwAj74YYOmOlMkBSaoPqvEcErNHMmPTHfW4WAcCP7zFfPfExRDjK0n6NQ1Fmzi3rCB3ro8EBgIGDFS4lVExTxSiJ/hJAO3YszBtSDKpOK/w7jOWY9MLrwMSH7g43LwIyPQJrWyl+zPEw5+4b44EzPgk8N1wFOKp4ZdYNZruoUAIIAIqM/pnsTT/8C/+U39QIPPgtwl23kpUQBsQcR+xZexnhV/eL2MwBgJF3qmSPl0W2suy3n+Hqzb0PnBiXTEnViwK+HMe6lQm4dT3h7q8GGzYyznhtzFo+fMQ4dQZYopuZdWsSWHdp/ITQKwOvMfb8rQYgldlUyH5TLLTbd73+YhjoY7Lfhw4//gFQChvPvcxoOg/o+KIapNYWQmuL/S0+Q+JIxzrTlfe8HmBwpSr5KWf77lWnpg0WgXzUyaoqxxnYzxjY73e3uZCOtYTNa1ET9qAoXG/guwD65Y7GvMHUF/bGGIBSXuPVPS8Aj/+eS4vPuZSONYTmC1AlSNxnB2dbfDtfu3c27i4y5b25j50AsuUhQXnOa2OMnqcZI+O1M/7AUcbAq9HsTC5GNewZzn7D//uNhLcCAM4adJsQNFR+xa7cELlKxdsUYEx+BDzyDGPVcqCjPd56SiUj7zAOHAVyY+YzJ08w7t8UHMNOTcOfHQMxATJ6VG0GPu1r353uNVhst+ONqlEi6x0/4SktRtnfz28ENqQI6y4ltHzK2txSyMkzwPgEY+QdIHfUWoB6nrnhcmDbF/zdHvk38MjzXDkw5kDvynZQZQABQLpHjoM4GdIwwg//1fc1NZogLdHL10x+rAZEpa0XAXddR2hZbN5+4Bhjz2Fg4mTIfUA5oDjrBYazm0VbEAbhAHWfTrJWP0QEnW3GBJTKDkUBWKU2zTPLk9MxrlcBJFCApLbsluAfs4QCBADp759NAdpQLMbE8nVHR1UjOndaABU3ZO8I/zlU5PmN+Xsq7oraz4FzbRV4Vm5dC095LgCSsicKnFgAmSAldhPJvjg7gs79HP9ZOULOylHxjt+MlbknuyWxO47tkS7mlPRDxU4mekYZc6p1QWBuXE7KrrjgVAwQAKQfOpuClsiBoJ+TGDLz58WKOV6p+Aw5+1j9MLQzbSAMu97BUSpCygoBgeNz5aDmIamtUnC8j65Y0j/iDMDdc8qgSpnE3JfdovXO1MaqAAKAdO90OxJaBsSpWuc5VYKTh1G8LXtn5axxStUA2ZJ+zOiGoO0A9HPCKKc7QfZVEojDpGYAAUC6l3XMK3YjoX0HYH1OGAXYkTQPln0Q04PZLZX/E5MgqSlATkk/UexEQmwF0D7LrBkEy/7snbVhjFdmDSBb0hnWIbAVxO0wwarWBQsgDEPKfhjaYLYreB1VC5l1gLySfvpsiqhuNQMpCE6CkASgQ0BHOX4VHJoHKA82jgByONtVXdCtVP4P90BxMtX2/UwAAAAASUVORK5CYII="
  , Zf = ["id"]
  , Jf = {
    class: "content-wrap"
}
  , e9 = {
    key: 1,
    class: "operations"
}
  , t9 = oe({
    __name: "reply-message",
    props: {
        message: {},
        isLast: {
            type: Boolean
        }
    },
    setup(r) {
        ur();
        const e = r
          , t = z(!1)
          , a = l => {
            t.value = l
        }
        ;
        Ne( () => {
            ue.on("hiddenThinking", a)
        }
        ),
        Gt( () => {
            ue.off("hiddenThinking", a)
        }
        );
        const s = W( () => e.message.isWaitingRender && !t.value);
        Ke( () => s.value, l => {
            l && zt( () => {}
            )
        }
        , {
            immediate: !0
        });
        const n = W( () => e.message.isRenderFinished && e.isLast && !e.message.isRename && !e.message.isEmptyError && ![P.PcPicSearch, P.Calculator].includes(e.message.contentType))
          , i = W( () => !0);
        return (l, u) => (S(),
        B("div", {
            class: pe(["reply-message-wrap", {
                isLast: l.isLast
            }])
        }, [i.value ? (S(),
        B("div", {
            key: 0,
            id: `${e.message.localId}`,
            class: pe(["answer-outer", {
                "is-last": l.isLast
            }])
        }, [A("div", Jf, [A("div", {
            class: pe(["content", [l.message.contentType === k(P).Text ? "textPadding" : ""]])
        }, [A("div", {
            style: nt({
                backgroundImage: "url(" + k(Xf) + ")"
            }),
            class: "reply-avatar"
        }, null, 4), s.value ? (S(),
        ge(vc, {
            key: 0
        })) : J("", !0), Z(da, {
            message: l.message,
            "as-reply": !0,
            "is-last": l.isLast
        }, null, 8, ["message", "is-last"]), n.value ? (S(),
        B("div", e9, [Z(Nn, {
            message: l.message
        }, null, 8, ["message"])])) : J("", !0)], 2)])], 10, Zf)) : (S(),
        ge(da, {
            key: 1,
            message: l.message,
            "as-reply": !0
        }, null, 8, ["message"]))], 2))
    }
})
  , r9 = ye(t9, [["__scopeId", "data-v-a1846fa8"]])
  , a9 = (r, e) => {
    let t;
    const a = z(!0)
      , s = g => {
        g || d(),
        a.value = g
    }
      , n = z(!0)
      , i = g => {
        n.value = g
    }
      , l = async g => {
        const w = r.value;
        if (!w)
            return console.warn(`el is ${w}`);
        const {mode: M, offsetBottom: E=0, delay: R, clearCurScrollingInertia: N} = g;
        await new Promise(async C => {
            const L = () => {
                const D = w.scrollHeight - E;
                w.style.overflow = "auto",
                w.scrollTo({
                    top: D,
                    behavior: M
                }),
                C(!0)
            }
            ;
            d(),
            R !== void 0 ? (N && (w.style.overflow = "hidden"),
            t = setTimeout(L, R)) : L()
        }
        )
    }
      , u = async () => {
        await zt(),
        await zt();
        const g = r.value
          , w = e.value;
        if (!(w == null ? void 0 : w.children).length)
            return;
        const E = w.querySelectorAll(".common-question");
        if (!E.length || E.length == 1)
            return;
        const R = E[E.length - 1];
        g.scrollTop = R.offsetTop
    }
      , d = () => {
        clearTimeout(t);
        const g = r.value;
        if (!g)
            return console.warn(`el is ${g}`);
        g.style.overflow = "auto"
    }
      , m = z(0)
      , f = z(!1)
      , b = () => {
        const g = r.value;
        if (!g)
            return;
        const {scrollHeight: w, scrollTop: M} = g;
        f.value = w - M > m.value * 3
    }
    ;
    return Ne( () => {
        var w;
        m.value = window.innerHeight,
        (w = r.value) == null || w.addEventListener("scroll", () => {
            b();
            const {scrollHeight: M, scrollTop: E, clientHeight: R} = r.value;
            !a.value && M - E - R <= 1 && s(!0),
            setTimeout( () => {
                M - R - E >= 50 && s(!1)
            }
            , 500)
        }
        ),
        new Au( () => {
            b(),
            a.value && n.value && l({
                mode: "auto"
            })
        }
        ).observe(e.value)
    }
    ),
    {
        isAutoScroll: a,
        setAutoScroll: s,
        setResizeObserverable: i,
        scrollToBottom: l,
        clearAsyncScrollJob: d,
        windowHeight: m,
        toBottomBtnVisible: f,
        computeToBottomBtnVisible: b,
        scrollToLatestTop: u
    }
}
  , s9 = {
    class: "message-list__outter-wrap-for-position"
}
  , n9 = ["id"]
  , i9 = oe({
    __name: "index",
    emits: ["can-load-next-page-for-history", "show-login", "show-subscribe"],
    setup(r, {emit: e}) {
        const t = location.host.includes("localhost")
          , a = location.host.includes("suanshubang.cc")
          , s = Oe.getMessageList();
        (t || a) && (window._messageList = s);
        const n = z();
        Ne( () => {}
        ),
        Gt( () => {}
        );
        const i = z(!1)
          , l = () => {
            const {scrollHeight: _, scrollTop: q, clientHeight: j} = n.value;
            q + j < _ - 1 && (i.value = !0)
        }
          , u = z(0)
          , d = z()
          , m = z(0)
          , {scrollToLatestTop: f, isAutoScroll: b, scrollToBottom: g, setAutoScroll: w, setResizeObserverable: M, clearAsyncScrollJob: E} = a9(n, d)
          , R = () => {
            w(!1),
            M(!1)
        }
          , N = () => {
            w(!0),
            M(!0)
        }
        ;
        Wr("autoScrollControl", {
            pauseAutoScroll: R,
            resumeAutoScroll: N,
            scrollToLatestTop: f
        });
        const C = () => {
            n.value.addEventListener("wheel", l)
        }
          , L = () => {
            ue.on(t0.ScrollToBottom, async _ => {
                if (!b.value)
                    return console.warn("AppEvent.ScrollToBottom hasTouchContainer");
                g(Object.assign({
                    mode: "auto"
                }, _))
            }
            ),
            ue.on(t0.InsertMessage, _ => {
                var se, Ee;
                const q = (se = _.message) == null ? void 0 : se.category
                  , j = (Ee = _.message) == null ? void 0 : Ee.isMine;
                q === Y.PluginCaptureSearchAsk || q === Y.PcPicSearchReply ? (R(),
                j && f()) : N()
            }
            ),
            ue.on(t0.ReplyRecognition, _ => {
                E()
            }
            )
        }
        ;
        Ne( () => {
            C(),
            L()
        }
        ),
        z(),
        cr("historyFetchLoadingFlag");
        const D = () => {
            var _;
            (_ = n.value) == null || _.scrollTo({
                top: n.value.scrollHeight,
                behavior: "smooth"
            })
        }
        ;
        return (_, q) => (S(),
        B("div", s9, [A("div", {
            ref_key: "msgContainerRef",
            ref: n,
            class: "message-list__wrap"
        }, [A("div", {
            ref_key: "msgListMainRef",
            ref: d,
            class: "message-list__main"
        }, [Z(Yc, {
            name: "message",
            tag: "div",
            class: "van-clearfix"
        }, {
            default: Le( () => [(S(!0),
            B(Te, null, Je(k(s), (j, se) => (S(),
            B("div", {
                key: j.localId,
                id: j.localId,
                class: "msg-list-item"
            }, [j.roleType === k($t).Ask ? (S(),
            ge(ha, {
                key: 0,
                css: !1,
                appear: "",
                "enter-active-class": "message-enter-active"
            }, {
                default: Le( () => {
                    var Ee;
                    return [Z(Yf, {
                        message: j,
                        "last-message-timestamp": ((Ee = k(s)[se - 1]) == null ? void 0 : Ee.createTime) || 0
                    }, null, 8, ["message", "last-message-timestamp"])]
                }
                ),
                _: 2
            }, 1024)) : (S(),
            ge(r9, {
                key: 1,
                message: j,
                "is-last": se === k(s).length - 1
            }, null, 8, ["message", "is-last"]))], 8, n9))), 128))]),
            _: 1
        })], 512)], 512), k(u) > 2 * k(m) && k(m) > 0 ? (S(),
        B("div", {
            key: 0,
            class: "back-to-bottom-btn",
            onClick: D
        })) : J("", !0)]))
    }
})
  , o9 = ye(i9, [["__scopeId", "data-v-534d50b9"]])
  , l9 = {}
  , c9 = {
    class: "welcome-header"
};
function u9(r, e) {
    return S(),
    B("div", c9, e[0] || (e[0] = [A("div", {
        class: "welcome-title-home"
    }, [A("span", null, [ut("大学"), A("span", {
        class: "highlight"
    }, "搜题酱")]), A("div", {
        class: "welcome-sub-title-home"
    }, "大学生一站式学习平台")], -1)]))
}
const Ac = ye(l9, [["render", u9], ["__scopeId", "data-v-fdeef4f5"]])
  , d9 = "" + new URL("chat-guide-homework.BgMnTvXZ.png",import.meta.url).href
  , h9 = oe({
    __name: "fission-image",
    props: {
        url: {
            type: String,
            default: ""
        },
        num: {
            type: Number,
            default: 4
        },
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    setup(r) {
        const e = r
          , t = z()
          , a = s => {
            const n = e.width
              , i = e.height;
            return {
                backgroundImage: `url(${e.url})`,
                width: 100 / e.num + "%",
                backgroundSize: n + "px " + i + "px",
                backgroundPosition: n / e.num * -(s - 1) + "px 0"
            }
        }
        ;
        return (s, n) => (S(),
        B("div", {
            ref_key: "fissionImageRef",
            ref: t,
            class: "fission-image"
        }, [(S(!0),
        B(Te, null, Je(r.num, i => (S(),
        B("div", {
            key: i,
            style: nt(a(i)),
            class: "item"
        }, null, 4))), 128))], 512))
    }
})
  , m9 = ye(h9, [["__scopeId", "data-v-a86c7d82"]])
  , p9 = {
    class: "chat-mode-guide"
}
  , f9 = {
    class: "left-top"
}
  , v9 = {
    class: "left-top-img"
}
  , g9 = {
    class: "bottom"
}
  , y9 = ["src", "alt"]
  , A9 = {
    class: "bottom-right"
}
  , b9 = {
    class: "bottom-title"
}
  , w9 = {
    class: "bottom-desc"
}
  , x9 = {
    class: "right-guide"
}
  , k9 = ["onClick"]
  , S9 = {
    class: "bottom"
}
  , T9 = ["src", "alt"]
  , M9 = {
    class: "bottom-right"
}
  , I9 = {
    class: "bottom-title"
}
  , C9 = {
    class: "bottom-desc"
}
  , R9 = oe({
    __name: "chat-mode-guide",
    emits: ["handleChangeChatMode"],
    setup(r, {emit: e}) {
        const t = e
          , a = i => {
            t("handleChangeChatMode", i)
        }
          , s = P0[be.HOME_WORK]
          , n = {
            [be.WRITING]: P0[be.WRITING],
            [be.WEB_SEARCH]: P0[be.WEB_SEARCH],
            [be.TRANSLATE]: P0[be.TRANSLATE]
        };
        return (i, l) => (S(),
        B("div", p9, [A("div", {
            class: "left-guide",
            onClick: l[0] || (l[0] = u => a(k(be).HOME_WORK))
        }, [A("div", f9, [A("div", v9, [Z(m9, {
            url: k(d9),
            num: 4,
            width: 410,
            height: 166
        }, null, 8, ["url"])])]), A("div", g9, [A("img", {
            src: k(s).iconHighLight,
            alt: `${k(s).text} icon`,
            class: "left-icon"
        }, null, 8, y9), A("div", A9, [A("div", b9, xe(k(s).text), 1), A("div", w9, xe(k(s).desc), 1)])])]), A("div", x9, [(S(),
        B(Te, null, Je(n, (u, d) => A("div", {
            key: d,
            class: "right-guide-item",
            onClick: m => a(d)
        }, [A("div", S9, [A("img", {
            src: u.iconHighLight,
            alt: `${u.text} icon`,
            class: "left-icon"
        }, null, 8, T9), A("div", M9, [A("div", I9, xe(u.text), 1), A("div", C9, xe(u.desc), 1)])])], 8, k9)), 64))])]))
    }
})
  , E9 = ye(R9, [["__scopeId", "data-v-f95a8fb4"]])
  , B9 = {
    class: "WelcomeContent home"
}
  , z9 = oe({
    __name: "index",
    emits: ["handleChangeChatMode"],
    setup(r, {emit: e}) {
        const {$track: t} = gr()
          , a = e
          , s = n => {
            t({
                name: n === be.HOME_WORK ? "GW_025" : n === be.WRITING ? "GW_026" : n === be.WEB_SEARCH ? "GW_027" : n === be.TRANSLATE ? "GW_028" : "GW_025"
            }),
            a("handleChangeChatMode", n)
        }
        ;
        return (n, i) => (S(),
        B("div", B9, [Z(Ac), Z(E9, {
            onHandleChangeChatMode: s
        })]))
    }
})
  , L9 = ye(z9, [["__scopeId", "data-v-2579dcaf"]])
  , O9 = "" + new URL("icon-img-black.yZ2gp1cW.svg",import.meta.url).href
  , N9 = "" + new URL("chat-input-plugin.Ddf5C6HG.svg",import.meta.url).href
  , D9 = "" + new URL("btn-calc.ClNdpo7m.svg",import.meta.url).href
  , F9 = {
    class: "chat-mode"
}
  , _9 = {
    class: "chat-mode-list"
}
  , $9 = ["onClick"]
  , P9 = ["src"]
  , H9 = ["src"]
  , q9 = {
    class: "item-text"
}
  , Q9 = oe({
    __name: "chat-mode",
    emits: ["handleChangeChatMode"],
    setup(r, {emit: e}) {
        const t = e
          , a = s => {
            t("handleChangeChatMode", s)
        }
        ;
        return (s, n) => (S(),
        B("div", F9, [A("div", _9, [(S(!0),
        B(Te, null, Je(k(P0), (i, l) => (S(),
        B(Te, {
            key: l
        }, [i ? (S(),
        B("div", {
            key: 0,
            class: pe(["chat-mode-item", {
                active: i.active
            }]),
            onClick: u => a(l)
        }, [A("img", {
            class: "item-icon grey",
            src: i.icon
        }, null, 8, P9), A("img", {
            class: "item-icon bold",
            src: i.iconBold
        }, null, 8, H9), A("div", q9, xe(i.text), 1)], 10, $9)) : J("", !0)], 64))), 128))])]))
    }
})
  , G9 = ye(Q9, [["__scopeId", "data-v-57fb4e87"]])
  , zo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAAtYP8kbf8uXv8uX/8vX/8uX/8uX/8uYP8uYP8uX/8uX/////9iHGwaAAAAC3RSTlMAHAJOxklw71RW++MEKF4AAAABYktHRAyBs1FjAAAAbElEQVQoz2NgoD8QROMruwSg8JnSdzuiCGhUowowpe/eboCmoEwByWiQgiYQg9XFCFWBCISGK2AQgTDgChiYwSyEAigToQCiWAmhAKJkJpICsJJVSArASnYjKwArQVYAVoKiABQyRgTCjtYAAFW2MZzwA8uAAAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAwoAMABAAAAAEAAAAwAAAAANs3bAwAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABd0RVh0ZXhpZjpFeGlmSW1hZ2VMZW5ndGgANDjLZnB1AAAAFnRFWHRleGlmOkV4aWZJbWFnZVdpZHRoADQ4hpTN8AAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAAABJRU5ErkJggg=="
  , U9 = {
    class: "translate-lang-select"
}
  , Lo = 14
  , Oo = 50
  , No = 8
  , V9 = oe({
    __name: "translate-lang-select",
    setup(r) {
        const e = [{
            value: "中文(简体)",
            label: "中文(简体)"
        }, {
            value: "英语",
            label: "英语"
        }]
          , t = [{
            value: "自动检测",
            label: "自动检测"
        }].concat(e)
          , a = e
          , s = z(t[0].value)
          , n = z(Q0(st.translateLangSelectOutputLang) ?? a[0].value)
          , i = () => {
            V0(st.translateLangSelectOutputLang, n.value)
        }
        ;
        Ne( () => {
            i()
        }
        );
        const l = W( () => {
            var m;
            return (((m = t.find(f => f.value === s.value)) == null ? void 0 : m.label) || t[0].label).length * Lo + Oo + No
        }
        )
          , u = W( () => {
            var m;
            return (((m = a.find(f => f.value === n.value)) == null ? void 0 : m.label) || a[0].label).length * Lo + Oo + No
        }
        );
        return (d, m) => {
            const f = wu
              , b = bu
              , g = Qs;
            return S(),
            ge(g, null, {
                default: Le( () => [A("div", U9, [A("div", {
                    style: nt({
                        width: k(l) + "px"
                    })
                }, [Z(b, {
                    modelValue: k(s),
                    "onUpdate:modelValue": m[0] || (m[0] = w => fs(s) ? s.value = w : null),
                    class: "lang-select",
                    "popper-class": "lang-select-popper input-lang-select-popper",
                    "show-arrow": !1
                }, {
                    default: Le( () => [(S(!0),
                    B(Te, null, Je(k(t), w => (S(),
                    ge(f, {
                        key: w.value,
                        label: w.label,
                        value: w.value
                    }, {
                        default: Le( () => [A("span", null, xe(w.label), 1), m[2] || (m[2] = A("img", {
                            src: zo,
                            alt: "icon-selected",
                            class: "icon-selected"
                        }, null, -1))]),
                        _: 2,
                        __: [2]
                    }, 1032, ["label", "value"]))), 128))]),
                    _: 1
                }, 8, ["modelValue"])], 4), m[4] || (m[4] = A("img", {
                    src: Yo,
                    alt: "icon-arrow",
                    class: "icon-arrow"
                }, null, -1)), A("div", {
                    style: nt({
                        width: k(u) + "px"
                    })
                }, [Z(b, {
                    modelValue: k(n),
                    "onUpdate:modelValue": m[1] || (m[1] = w => fs(n) ? n.value = w : null),
                    class: "lang-select",
                    "popper-class": "lang-select-popper output-lang-select-popper",
                    "show-arrow": !1,
                    onChange: i
                }, {
                    default: Le( () => [(S(!0),
                    B(Te, null, Je(k(a), w => (S(),
                    ge(f, {
                        key: w.value,
                        label: w.label,
                        value: w.value
                    }, {
                        default: Le( () => [A("span", null, xe(w.label), 1), m[3] || (m[3] = A("img", {
                            src: zo,
                            alt: "icon-selected",
                            class: "icon-selected"
                        }, null, -1))]),
                        _: 2,
                        __: [3]
                    }, 1032, ["label", "value"]))), 128))]),
                    _: 1
                }, 8, ["modelValue"])], 4)])]),
                _: 1
            })
        }
    }
})
  , j9 = ye(V9, [["__scopeId", "data-v-50591f17"]])
  , W9 = {
    class: "guide-install-extension-popover"
}
  , K9 = {
    key: 0,
    alt: "edge",
    src: "https://cdn-img.daxuesoutijiang.com/dx-site/sidebar/edge.png"
}
  , Y9 = {
    key: 1,
    alt: "chrome",
    src: "https://cdn-img.daxuesoutijiang.com/dx-site/new_layout/icon-chrome.svg"
}
  , X9 = oe({
    __name: "index",
    emits: ["close"],
    setup(r, {emit: e}) {
        const t = e
          , a = z(!1);
        Ne( () => {
            a.value = va()
        }
        );
        const s = n => {
            n.stopPropagation(),
            t("close"),
            V0(rr.previous_close_plugin_dialog_time, Date.now() + "")
        }
        ;
        return (n, i) => (S(),
        B("div", W9, [A("div", {
            class: "close",
            onClick: s
        }, i[0] || (i[0] = [A("img", {
            src: "https://cdn-img.daxuesoutijiang.com/dx-site/new_layout/icon-close.svg",
            alt: "icon_close",
            class: "icon_close"
        }, null, -1), A("img", {
            src: "https://cdn-img.daxuesoutijiang.com/dx-site/sidebar/icon_close_hover.svg",
            alt: "icon_close",
            class: "icon_close_hover"
        }, null, -1)])), i[2] || (i[2] = A("div", {
            class: "title"
        }, "浏览器插件", -1)), i[3] || (i[3] = A("div", {
            class: "desc"
        }, "附着在浏览器上的全能AI助手，随时搜题、问AI、完成网课任务。", -1)), A("button", null, [k(a) ? (S(),
        B("img", K9)) : (S(),
        B("img", Y9)), i[1] || (i[1] = A("span", null, "立即安装", -1))])]))
    }
})
  , Z9 = ye(X9, [["__scopeId", "data-v-0d7c8b38"]])
  , J9 = {
    class: "chat-input-box"
}
  , ev = {
    key: 0,
    class: "chat-mode-header"
}
  , tv = {
    class: "chat-mode-header-left"
}
  , rv = ["src"]
  , av = {
    class: "chat-mode-header-text"
}
  , sv = {
    class: "chat-tools"
}
  , nv = {
    key: 0,
    class: "tooltip"
}
  , iv = {
    class: "tool-btns"
}
  , ov = {
    key: 0,
    class: "btn disabled-send-btn"
}
  , lv = 1900
  , cv = oe({
    __name: "index",
    props: {
        maxlength: {
            default: 2e3,
            type: Number
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["submit-text", "submit-file", "handleCalculatorButtonClick", "handleChangeChatMode", "handleFileChooserClick", "updata:hasWritingInput"],
    setup(r, {expose: e, emit: t}) {
        const {$track: a} = gr()
          , s = t
          , n = r
          , i = z(null)
          , l = Oe.getMessageList()
          , u = W( () => {
            const he = l.find(ct => ct.renderFinished === we.None);
            if (!he)
                return !1;
            const ve = he.transferStatus === me.TransferFailed
              , rt = [P.Markdown, P.PcPicSearch, P.AiSearch].includes(he.contentType);
            return !ve && rt && he.hadRenderContent
        }
        )
          , d = () => {
            Oe.abort(!0)
        }
          , m = Uo()
          , f = W( () => {
            const {style: he, class: ve} = m;
            return {
                style: he,
                class: ve
            }
        }
        )
          , b = W( () => {
            const {style: he, class: ve, ...rt} = m;
            return rt
        }
        )
          , {getInjectChatMode: g, getInjectCurrChatModeConfig: w} = Ko()
          , M = g()
          , E = w()
          , R = he => {
            a({
                name: he === be.HOME_WORK ? "GW_029" : he === be.WRITING ? "GW_030" : he === be.WEB_SEARCH ? "GW_031" : he === be.TRANSLATE ? "GW_032" : "GW_033"
            }),
            he === be.CALCULATOR ? s("handleCalculatorButtonClick") : s("handleChangeChatMode", he)
        }
          , N = W( () => n.disabled ? "" : M.value === be.DEFAULT ? "粘贴文字搜题 / 向AI提问" : E == null ? void 0 : E.value.placeholderText)
          , C = W( () => n.disabled || m.modelValue.length === 0)
          , L = z(!1)
          , D = z(!1)
          , _ = () => {
            D.value = !0
        }
          , q = () => {
            D.value = !1
        }
          , j = z(!1)
          , se = () => {
            j.value = !0
        }
          , Ee = () => {
            j.value = !1
        }
          , Be = () => {
            ue.emit("saveInputValToStorge")
        }
        ;
        let Ae;
        const ne = he => {
            Ae || (Ae = document.createElement("canvas").getContext("2d"),
            Ae.font = "16px PingFang SC"),
            m.modelValue.length === 0 ? L.value = !1 : L.value || Ae.measureText(m.modelValue).width >= he && (L.value = !0)
        }
        ;
        Ke( () => m.modelValue, () => {
            zt().then( () => {
                ne(590)
            }
            )
        }
        , {
            immediate: !0
        });
        const le = he => {
            if ((he.key === "Enter" || he.code === "Enter" || he.keyCode === 13) && j.value && !D.value && !he.shiftKey)
                return he.returnValue = !1,
                Ue(),
                !1
        }
          , ce = he => {
            var yt;
            const rt = (he.clipboardData || window.clipboardData).items;
            if (![be.DEFAULT, be.HOME_WORK].includes(M.value) || !(rt != null && rt.length))
                return !1;
            const ct = (yt = [...rt].find(Dt => ["image/png", "image/jpeg"].includes(Dt.type))) == null ? void 0 : yt.getAsFile();
            return ct && (he.preventDefault(),
            s("submit-file", ct)),
            !1
        }
          , Q = W( () => m.modelValue.length >= n.maxlength)
          , de = W( () => m.modelValue.length < n.maxlength && m.modelValue.length >= lv)
          , ke = z();
        e({
            inputRef: i,
            wiritingEditorRef: ke
        }),
        z(!1);
        let He = !1, qe = !1, Qe;
        const ze = () => {
            He = !0
        }
          , Xe = () => {
            He = !1,
            ot()
        }
          , Nt = () => {
            Mr().value.isInstalled || (qe = !1,
            ot())
        }
          , ot = () => {
            clearTimeout(Qe),
            Qe = setTimeout( () => {
                !He && !qe && (K.value.visible = !1)
            }
            , 200)
        }
          , K = z({
            x: 0,
            y: 0,
            visible: !1
        })
          , De = he => {
            if (Mr().value.isInstalled)
                return;
            qe = !0;
            const ve = he.target.getBoundingClientRect();
            K.value = {
                x: ve.x - 92,
                y: ve.y - 190 - 24,
                visible: !0
            }
        }
          , Me = () => {
            window.open("/plugin", "__blank")
        }
          , Ue = () => {
            s("submit-text", m.modelValue)
        }
          , tt = z(!1)
          , lt = z(!1);
        Ne( () => {
            tt.value = va(),
            lt.value = qs()
        }
        );
        const gt = () => {
            Mr().value.isInstalled,
            Mr().value.isInstalled && xu()
        }
        ;
        return (he, ve) => {
            var ct, yt, Dt;
            const rt = vu;
            return S(),
            B("div", J9, [ft(Z(G9, {
                onHandleChangeChatMode: R
            }, null, 512), [[St, k(M) === k(be).DEFAULT]]), A("div", lr({
                class: ["chat-input", [k(j) ? "chat-input__input-focusing" : "", "home", k(L) ? "multiline" : "", [k(be).DEFAULT, k(be).HOME_WORK].includes(k(M)) ? "" : "min-padding"]]
            }, k(f)), [A("div", {
                class: pe(["chat-input__input-wrap", {
                    enable: !r.disabled
                }])
            }, [Qt(he.$slots, "upload", {}, void 0, !0), k(M) !== k(be).DEFAULT ? (S(),
            B("div", ev, [A("div", tv, [A("img", {
                src: (ct = k(E)) == null ? void 0 : ct.iconBold
            }, null, 8, rv), A("div", av, xe((yt = k(E)) == null ? void 0 : yt.text), 1)]), A("div", {
                class: "chat-mode-header-close",
                onClick: ve[0] || (ve[0] = Ct => R(k(be).DEFAULT))
            })])) : J("", !0), (Dt = k(E)) != null && Dt.showTranslateLangSelect ? (S(),
            ge(j9, {
                key: 1
            })) : J("", !0), Z(rt, lr({
                ref_key: "inputRef",
                ref: i,
                class: "chat-input__input",
                maxlength: r.maxlength,
                type: "textarea",
                autosize: {
                    minRows: 1
                },
                placeholder: k(N)
            }, k(b), {
                disabled: r.disabled,
                onKeydown: le,
                onFocus: se,
                onBlur: Ee,
                onInput: Be,
                onCompositionstart: _,
                onCompositionend: q,
                onPaste: jt(ce, ["stop"])
            }), null, 16, ["maxlength", "placeholder", "disabled"])], 2), A("div", sv, [k(m).modelValue.length >= 1800 && k(M) !== k(be).WRITING ? (S(),
            B("div", {
                key: 0,
                class: pe(["chat-input-count", {
                    reaching: k(de),
                    reached: k(Q)
                }])
            }, [ut(xe(k(m).modelValue.length) + " / " + xe(r.maxlength) + " ", 1), k(Q) ? (S(),
            B("div", nv, "达到字数限制")) : J("", !0)], 2)) : J("", !0), A("div", iv, [[k(be).DEFAULT, k(be).HOME_WORK].includes(k(M)) ? (S(),
            B(Te, {
                key: 0
            }, [A("div", {
                class: "btn upload-img-btn",
                onClick: ve[1] || (ve[1] = Ct => s("handleFileChooserClick"))
            }, ve[5] || (ve[5] = [A("img", {
                alt: "calculator-btn",
                src: O9,
                class: "btn__icon"
            }, null, -1)])), A("div", {
                class: "btn plugin-btn",
                onMouseenter: De,
                onMouseleave: Nt,
                onClick: gt
            }, [ve[6] || (ve[6] = A("img", {
                alt: "guide-dl-plugin__icon",
                src: N9,
                class: "btn__icon"
            }, null, -1)), (S(),
            ge(Xc, {
                to: "body"
            }, [ft(A("div", {
                class: "guide-install-extension-wrapper",
                style: nt(`left: ${k(K).x}px; top: ${k(K).y}px;`),
                onMouseenter: ze,
                onMouseleave: Xe
            }, [Z(Z9, {
                onClick: Me,
                onClose: ve[2] || (ve[2] = Ct => k(K).visible = !1)
            })], 36), [[St, k(K).visible]])]))], 32), A("div", {
                class: "btn calculator-btn",
                onClick: ve[3] || (ve[3] = Ct => s("handleCalculatorButtonClick"))
            }, ve[7] || (ve[7] = [A("img", {
                alt: "calculator-btn",
                src: D9,
                class: "btn__icon"
            }, null, -1)])), ve[8] || (ve[8] = A("div", {
                class: "tools-midline"
            }, null, -1))], 64)) : J("", !0), k(u) ? (S(),
            B("div", {
                key: 1,
                class: "stop-btn btn",
                onClick: d
            })) : (S(),
            B(Te, {
                key: 2
            }, [k(C) ? (S(),
            B("div", ov)) : (S(),
            B("div", {
                key: 1,
                class: "btn send-btn",
                onClick: ve[4] || (ve[4] = Ct => Ue())
            }))], 64))])])], 16)])
        }
    }
})
  , uv = ye(cv, [["__scopeId", "data-v-5db5f861"]])
  , dv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABCFBMVEUAAADw8P/k5PTl5vbk5PTj5PTj5PTj5PTk5Pbk5fTj5PTj5PTl5/Xk5fXj6Pbj5PXj5PTj5fbj5PXk5fTj5PTk5fXk5PXj5fTm5/bk5fXj5PTv7//l5fXl5ffj5PTj5fTm5/Xk5fXi6PXj5PXk5vbj5PTm5/Xu7/n19fv7+/7+/v/////t7fj4+P3m5vXy8/r4+Pzw8fno6fbl5vX9/f7x8vrr7Pj8/P7u7vjr6/fq6vfp6vbp6vfr7Pfz9Pr19vvk5fTq6/f29vz6+v3s7fjz9Pvx8vnx8frl5fXt7vj+/v709Pvu7/j7+/34+f3n6Pby8vrk5fX29/zv7/nw8fr5+f3w8Pn39/zZrQpyAAAAJXRSTlMABClOl8br+CCL0/QdfRi7+UXX/vzrvVdZPOYHojL+nSjPLOdf9VRBUwAAAAFiS0dEKyS55AgAAAAJcEhZcwAAITgAACE4AUWWMWAAAALxSURBVGje7dppc5pAGAdwvOMVE0XrFc+AAhoPlpimaWOb9Ep6ptf3/yYdAacyWeBZeZbJdPi/NbM/3X3YPy8iCFGiRHmKicUTyVQ6IwVIJp1KJuIxmHeQzeWDYNvkc9kDAFcoomi2WSz4eYelIzxPko5Kh97ecRmT26R87Pn70D1JKnv8xkLJ/iN5NFZULUBUZTyS7cVK7udYtM9vMg2CbTOd2OdYdH0erPk8m2Fwm8zOrFl1eTpiWesbzQJtpmNjZ9aKWfoNEM9Z+4nFbWLtai5OBRPmjsoo57fN1JycfIIKJs1vM8L0NG1kLpqkginzszEuODYXTVHBtPmZggsq5qJpKmj1EdqIWlHNRTNU0BphXE/TrFUjMALDAOeLpa4vF/OQQGLYdSobJAyQnP97ZThnE/cDjd2XFIM/OJd3QZnpHPcCF873sAV3cOkEl9xB3Qnq/x8Y+paGPjShPxahP/jhX23wy5usVisVAYTVkzK+eH754url6BUJDvqGXO/s+/r1G8IZvLldO2+HW4UnSN46OZN8R/iB7z9Ij7P+qHAC7wyJHv36jgt4r0tu4ice4HQt+QUV/Hzl66GCBOBhguoC4GGChv8BooJzHeLhgV++gjw0UIUMzL7go6bTNHIB9NhBWtNp2rfvfECXptMeoBwj6NZ0N0suoGvTrYADygq6NR35weDBQfemm7B4cPAedpGggYCmQwUhTYcJgpoOEVR/onkwENZ0eCCw6dDAXywXCQKoXmJ6/iC86ZBAeNPhgAxNhwKyNB0GyNR0CCBb0yGAv/E9T/AB8UaDgH/koIszgugD6gfyydMAA/0DjXcqVDDNDxSpYIofWKWCSX5gjQo+E3l5Yp0KNpq8wGaDCrbavMB2iwoKJx0+XudEcEmXi9jpunlCr88D7PdcQWEwxPeGA8Ejp+ji8FTwzKCPeo6d/kDwSQ9zcjrdnp+3eTraTZQ7R2y2TwDc5gZo1GtVsRIEq4jVWr3RgnlRokQJOX8BNkw4wTQWHOIAAAB4ZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAA2AAAAAEAAADYAAAAAQADoAEAAwAAAAEAAQAAoAIABAAAAAEAAACooAMABAAAAAEAAACoAAAAAPwAIQUAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABh0RVh0ZXhpZjpFeGlmSW1hZ2VMZW5ndGgAMTY4QuxbtQAAABd0RVh0ZXhpZjpFeGlmSW1hZ2VXaWR0aAAxNjjfc96nAAAAEnRFWHRleGlmOkV4aWZPZmZzZXQANzjJ1HsnAAAAAElFTkSuQmCC"
  , hv = {}
  , mv = {
    class: "dragging-mask"
};
function pv(r, e) {
    return S(),
    B("div", mv, e[0] || (e[0] = [ps('<div class="dragging-mask__border" data-v-d0ec9152></div><div class="dragging-mask__content" data-v-d0ec9152><img class="dragging-mask__content__figure" src="' + dv + '" alt="drag" data-v-d0ec9152><div class="dragging-mask__content__title" data-v-d0ec9152>将图片拖到这里</div><div class="dragging-mask__content__tip" data-v-d0ec9152>支持：JPG、PNG</div></div>', 2)]))
}
const fv = ye(hv, [["render", pv], ["__scopeId", "data-v-d0ec9152"]]);
function vv(r) {
    const e = z("READY")
      , t = s => {
        const n = s.type === "image/jpeg" || s.type === "image/png"
          , i = s.size / 1024 / 1024 < 10;
        return n ? i ? e.value = "PROGRESS" : (e.value = "READY",
        bt("图像大小不能超过10M")) : (e.value = "READY",
        bt("只允许上传PNG、JPEG、JPG格式")),
        n && i
    }
      , a = () => {}
    ;
    return Ne( () => {
        ue.on("handleCancelOCR1", a)
    }
    ),
    Gt( () => {
        ue.off("handleCancelOCR1", a)
    }
    ),
    {
        status: e,
        beforeUpload: t
    }
}
const gv = {
    class: "chat-v2__input-area"
}
  , yv = {
    ref: "inputAreaWrapForCalculateHeightRef",
    style: {
        height: "fit-content"
    }
}
  , Av = ["inert"]
  , bv = {
    class: "chat-v2__btn-opt"
}
  , wv = {
    key: 0,
    class: "calculator-wrap-for-transition"
}
  , xv = {
    class: "calculator-wrap"
}
  , kv = oe({
    __name: "ChatFrame",
    props: {
        st: {
            type: String,
            default: Zo.DEFAULTMODE
        },
        imgUrl: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        },
        previewImgUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["before-text-send", "after-file-choose", "before-example-send"],
    setup(r, {expose: e, emit: t}) {
        const {$track: a} = gr()
          , {chatMode: s, currChatModeConfig: n} = Ko()
          , i = ga()
          , l = Zc();
        let {type: u, searchType: d} = i.query;
        const m = W( () => [be.DEFAULT, be.HOME_WORK].includes(s.value))
          , {handleDragEnter: f, handleDragLeave: b, dragStatus: g, handleDragOver: w, handleDrop: M} = du()
          , E = V => {
            if (M(V),
            V.dataTransfer.files.length) {
                const ae = V.dataTransfer.files[0];
                ne(ae)
            }
        }
          , R = ur()
          , N = t
          , C = z("")
          , L = async V => {
            ue.emit("getRecentChatInSideBar")
        }
          , D = z(!1);
        let _ = {};
        const q = z("")
          , j = z()
          , se = z("")
          , Ee = z("")
          , Be = z(!1)
          , Ae = (V, ae) => {
            if (!V)
                return;
            m0(st.CURRENT_INPUT_VAL_KEY);
            const Ie = le.length ? 0 : 1;
            Oe.sendMessage({
                category: Y.PluginCaptureSearchAsk,
                content: {
                    localUrl: V
                }
            }).onBeforeSend( () => {
                Ee.value = "",
                Ie && ue.emit("createFakeRecentChat")
            }
            ).onSendFinished(Fe => {
                ce()
            }
            ).onReplyError(Fe => {
                Ie && L(Fe.message.askId)
            }
            ).onReplyFinished(Fe => {
                Ie && L(Fe.message.askId)
            }
            ).onRenderFinished( () => {}
            )
        }
          , ne = async V => {
            if (N("after-file-choose"),
            !!ke(V) && !(_.promise instanceof Promise)) {
                j.value = V,
                q.value = URL.createObjectURL(V),
                D.value = !0,
                _ = {},
                _.promise = new Promise( (ae, Ie) => {
                    _.resolve = ae,
                    _.reject = Ie
                }
                );
                try {
                    const ae = await _.promise
                      , {cropperImg: Ie, croperChange: Fe, imgTextVal: Ze} = ae;
                    se.value = Ie,
                    Be.value = Fe,
                    Ee.value = Ze
                } catch (ae) {
                    console.error(ae);
                    return
                } finally {
                    D.value = !1,
                    URL.revokeObjectURL(q.value),
                    q.value = "",
                    _ = {}
                }
                Ae(se.value)
            }
        }
          , le = Oe.getMessageList();
        Ne( () => {
            ue.on("removeQuerySessionId", ve),
            ue.on("createSessionTitle", L)
        }
        ),
        Gt( () => {
            ue.off("removeQuerySessionId", ve),
            ue.off("createSessionTitle", L)
        }
        );
        const ce = () => {
            i.query.sessionId || l.replace({
                query: {
                    ...i.query,
                    sessionId: qe
                }
            })
        }
          , Q = async (V, ae, Ie, Fe) => {
            var Rt;
            if (!V) {
                bt("请发送你的问题");
                return
            }
            a({
                name: "GW_035"
            }),
            N("before-text-send");
            const Ze = le.length ? 0 : 1;
            (Rt = n.value) != null && Rt.showTranslateLangSelect ? (ae = Y.TranslateAsk,
            Ie = {
                ...Ie,
                toLang: Q0(st.translateLangSelectOutputLang) ?? ""
            }) : s.value === be.WEB_SEARCH && (ae = Y.AISearchLinkAsk),
            Oe.sendMessage({
                category: ae || Y.PluginNormalAsk,
                content: {
                    text: V
                },
                ext: Ie
            }).onBeforeSend( () => {
                var w0, Pn;
                C.value = "",
                m0(st.CURRENT_INPUT_VAL_KEY),
                s.value === be.WRITING && ((Pn = (w0 = yt.value) == null ? void 0 : w0.wiritingEditorRef) == null || Pn.clear()),
                Ze && ue.emit("createFakeRecentChat")
            }
            ).onSendFinished(w0 => {
                de(),
                ce()
            }
            ).onReplyFinished(w0 => {
                Ze && L(w0.message.askId)
            }
            ).onReplyError(w0 => {
                Ze && L(w0.message.askId)
            }
            ).onRenderFinished( () => {}
            )
        }
          , de = () => {
            document.querySelector(".main-container").scrollIntoView({
                behavior: "smooth"
            })
        }
          , {beforeUpload: ke} = vv()
          , He = () => {}
        ;
        Ne( () => {
            ue.on("afterCancelOCR", He)
        }
        ),
        Gt( () => {
            ue.off("afterCancelOCR", He)
        }
        );
        let qe = i.query.sessionId || "";
        W( () => {
            var V;
            return (V = R.value) == null ? void 0 : V.uid
        }
        );
        const Qe = z(!1)
          , ze = z(!1);
        Wr("historyFetchLoadingFlag", Qe);
        const Xe = async (V=1) => {
            if (!Qe.value) {
                Qe.value = !0,
                ze.value = V === Xo.CHAT_LIST_PLUS;
                try {
                    const Ie = (await pa({
                        url: fa.GetChatList,
                        method: "POST",
                        body: {
                            sessionId: qe
                        }
                    }))._data.data.list;
                    Oe.loadChatList(Ie || [])
                } catch (ae) {
                    if (Oe.loadChatList([]),
                    ae.errNo === Vo.NeedLogin) {
                        j0();
                        return
                    }
                    bt(ae.errMsg),
                    ve(),
                    ue.emit("resetChatFrame"),
                    ue.emit("removeRecentChatItem"),
                    ue.emit("getRecentChatInSideBar")
                } finally {
                    setTimeout( () => {
                        Qe.value = !1
                    }
                    , 200)
                }
            }
        }
          , Nt = z()
          , {isShowCalculatorFlag: ot, handleSubmitFormula: K, recoverFormulaFromSessionStorage: De, handleFormulaInput: Me, isMathQuillLoadedFlag: Ue, loadMathQuillForCalculator: tt} = Q2({
            calculatorFrameRef: Nt,
            sendTextMessage: Q,
            getInputSessionStorageKey() {
                const V = "chatai-2.2:"
                  , ae = [V, "calculator-input", "-guest"].join("");
                let Ie = "";
                if (R.value.uid) {
                    const Fe = [];
                    Fe.push(V, "calculator-input", "-member-", String(R.value.uid)),
                    Ie = Fe.join("")
                }
                return {
                    guestSessionStorageKey: ae,
                    memberSessionStorageKey: Ie
                }
            }
        })
          , lt = z(!1)
          , gt = z(!1)
          , he = async () => {
            R.value.isLogin && (qe ? (Oe.init({
                sessionId: qe
            }),
            await Xe(1)) : (await Oe.init(),
            Oe.loadChatList([]),
            qe = Oe.getSessionId()),
            lt.value = !0,
            gt.value = !0)
        }
          , ve = V => {
            l.replace({
                query: {
                    ...i.query,
                    sessionId: ""
                }
            })
        }
        ;
        (async () => {
            if (u = Jc(u),
            ["searchFromCalculator", "searchFromQuestion"].includes(u) && !R.value.isLogin) {
                j0();
                return
            }
            if (u === "searchFromCalculator") {
                await he();
                const V = nr(rr.searchFromCalculatorText);
                if (!V)
                    return;
                K(V),
                G0(rr.searchFromCalculatorText, "");
                return
            } else if (u === "searchFromQuestion") {
                await he();
                const V = nr(rr.searchFromQuestionText);
                if (!V)
                    return;
                d === "image" ? Ae(V) : Q(V),
                G0(rr.searchFromQuestionText, "");
                return
            }
            he()
        }
        )();
        const rt = () => {
            G0(st.CURRENT_INPUT_VAL_KEY, C.value)
        }
        ;
        Ne( () => {
            ue.on("saveInputValToStorge", rt)
        }
        ),
        Gt( () => {
            ue.off("saveInputValToStorge", rt)
        }
        ),
        Ne( () => {
            window.onload = function() {
                const V = document.getElementById("default-box");
                V && (V.scrollTop = V.scrollHeight)
            }
        }
        );
        const ct = () => {
            const V = nr(st.CURRENT_INPUT_VAL_KEY);
            V && (V != null && V.trim().length) && (C.value = V)
        }
          , yt = z();
        Ne( () => {
            var V, ae, Ie;
            (Ie = (ae = (V = yt.value) == null ? void 0 : V.inputRef) == null ? void 0 : ae.focus) == null || Ie.call(ae),
            ct()
        }
        );
        const Dt = W( () => !le.length && Qe.value && !ze.value)
          , Ct = z(0)
          , bc = document.querySelector(".main.main-container")
          , Dn = Wo( () => {
            var V;
            Ct.value = ((V = document.querySelector("#nav-bar")) == null ? void 0 : V.offsetWidth) || 0
        }
        , 100);
        Gt( () => {
            const V = new ResizeObserver(Dn);
            V.observe(bc),
            V.disconnect()
        }
        ),
        Ne(Dn);
        const Fn = () => {
            Q0(st.chataiSendImageButtonHasClicked) || V0(st.chataiSendImageButtonHasClicked, "1"),
            m0(st.CURRENT_INPUT_VAL_KEY);
            const ae = document.createElement("input");
            ae.setAttribute("type", "file"),
            ae.setAttribute("accept", "image/jpeg,image/png"),
            ae.onchange = Ie => {
                Ie.target.files;
                const Fe = Ie.target.files[0];
                if (Fe) {
                    if (Fe.size > 1024 * 1024 * 10) {
                        bt("图像大小不能超过10M");
                        return
                    }
                    ne(Fe),
                    Ie.target.value = ""
                }
            }
            ,
            ae.click()
        }
          , wc = () => {
            Q0(st.chataiSendImageButtonHasClicked) || V0(st.chataiSendImageButtonHasClicked, "1"),
            m0(st.CURRENT_INPUT_VAL_KEY),
            tu(ne)
        }
          , xc = async () => {
            if (!Ue.value)
                try {
                    await tt()
                } catch {}
            ot.value = !0
        }
        ;
        e({
            showHistoryMessageLoadingFlag: Dt,
            sendImageMessage: Ae,
            sendTextMessage: Q
        });
        const _n = V => {
            var ae, Ie, Fe;
            if (V !== s.value) {
                const Ze = JSON.parse(JSON.stringify(n.value ?? ""));
                if (Ze && Ze.zsEventParams) {
                    const {close: Rt} = Ze.zsEventParams
                }
                s.value = V,
                C.value = "",
                m0(st.CURRENT_INPUT_VAL_KEY),
                (Fe = (Ie = (ae = yt.value) == null ? void 0 : ae.inputRef) == null ? void 0 : Ie.focus) == null || Fe.call(Ie)
            }
        }
          , $n = z(!1)
          , Ca = z(!1);
        Hs( () => {
            var V;
            if (n.value) {
                let ae = !!((V = n.value.guideQuestionList) != null && V.length);
                [s.value === be.WRITING ? Ca.value : !!C.value, n.value.guideQuestionListHadClick, n.value.guideQuestionListHadShow].includes(!0) && (ae = !1),
                ae && (Xu(s.value),
                n.value.guideQuestionListHadShow = !0),
                $n.value = ae
            }
        }
        );
        const kc = V => {
            n.value.guideQuestionListHadClick = !0,
            Q(V)
        }
        ;
        return (V, ae) => {
            var Ie;
            return S(),
            B("div", lr({
                id: "chat-v2",
                class: "chat-v2"
            }, eu({
                dragenter: k(m) ? k(f) : void 0,
                dragleave: k(m) ? k(b) : void 0,
                dragover: k(m) ? k(w) : void 0,
                drop: k(m) ? E : void 0
            }, !0)), [k(le).length ? (S(),
            ge(o9, {
                key: 0,
                ref: "messageListRef"
            }, null, 512)) : (S(),
            ge(L9, {
                key: 1,
                onHandleChangeChatMode: _n
            })), A("div", gv, [A("div", yv, [A("div", {
                class: "input-wrap",
                inert: k(ot)
            }, [A("div", bv, [k(s) === k(be).HOME_WORK ? (S(),
            ge(F4, {
                key: 0,
                "is-mini": !!k(le).length,
                onHandleFileChooserClick: Fn,
                onHandleScreenShareClick: wc
            }, null, 8, ["is-mini"])) : J("", !0), $n.value ? (S(),
            ge(r2, {
                key: 1,
                "question-list": (Ie = k(n)) == null ? void 0 : Ie.guideQuestionList,
                onHandleQuestionItemClick: kc
            }, null, 8, ["question-list"])) : J("", !0)]), Z(uv, {
                ref_key: "chatInputRef",
                ref: yt,
                modelValue: C.value,
                "onUpdate:modelValue": ae[0] || (ae[0] = Fe => C.value = Fe),
                hasWritingInput: Ca.value,
                "onUpdate:hasWritingInput": ae[1] || (ae[1] = Fe => Ca.value = Fe),
                class: "chat-v2__chat-input",
                onSubmitFile: ne,
                onSubmitText: Q,
                onHandleCalculatorButtonClick: xc,
                onHandleChangeChatMode: _n,
                onHandleFileChooserClick: Fn
            }, null, 8, ["modelValue", "hasWritingInput"])], 8, Av), Z(ha, {
                duration: 300,
                onAfterEnter: ae[3] || (ae[3] = Fe => {
                    var Ze, Rt;
                    return (Rt = (Ze = Nt.value) == null ? void 0 : Ze.focusInput) == null ? void 0 : Rt.call(Ze)
                }
                )
            }, {
                default: Le( () => [k(ot) && k(Ue) ? (S(),
                B("div", wv, [A("div", xv, [Z(_2, {
                    ref_key: "calculatorFrameRef",
                    ref: Nt,
                    onCloseButtonClick: ae[2] || (ae[2] = Fe => ot.value = !1),
                    onSubmit: k(K),
                    onVnodeMounted: k(De),
                    onEdit: k(Me)
                }, null, 8, ["onSubmit", "onVnodeMounted", "onEdit"])])])) : J("", !0)]),
                _: 1
            })], 512)]), ft(Z(fv, {
                class: "chat-v2__dragging-mask",
                style: nt({
                    left: `${Ct.value}px`
                })
            }, null, 8, ["style"]), [[St, k(g) === k(hu).DRAGGING]]), D.value ? (S(),
            ge(ku, {
                key: 2,
                modelValue: D.value,
                "onUpdate:modelValue": ae[4] || (ae[4] = Fe => D.value = Fe),
                "image-src": q.value,
                onConfirm: ae[5] || (ae[5] = Fe => {
                    var Ze, Rt;
                    return (Rt = (Ze = k(_)).resolve) == null ? void 0 : Rt.call(Ze, Fe)
                }
                ),
                onCancel: ae[6] || (ae[6] = Fe => {
                    var Ze, Rt;
                    return (Rt = (Ze = k(_)).reject) == null ? void 0 : Rt.call(Ze)
                }
                )
            }, null, 8, ["modelValue", "image-src"])) : J("", !0)], 16)
        }
    }
})
  , Sv = ye(kv, [["__scopeId", "data-v-f6b77e13"]])
  , Tv = {
    class: "chat-v2"
}
  , Mv = {
    class: pe(["welcome-content", "home"])
}
  , Iv = {
    class: "chat-mode-guide"
}
  , Cv = {
    class: "right-guide"
}
  , Rv = oe({
    __name: "q-skeleton",
    setup(r) {
        return (e, t) => (S(),
        B("div", Tv, [A("div", Mv, [Z(Ac), A("div", Iv, [t[0] || (t[0] = A("div", {
            class: "left-guide"
        }, null, -1)), A("div", Cv, [(S(),
        B(Te, null, Je(3, a => A("div", {
            key: a,
            class: "right-guide-item"
        })), 64))])])]), t[1] || (t[1] = A("div", {
            class: pe(["chat-area", "home"])
        }, null, -1))]))
    }
})
  , Ev = ye(Rv, [["__scopeId", "data-v-afc94450"]])
  , Bv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMbSURBVHic7ZrPahNRFMZ/50baKpHGdQsNXRkF27xBXLgsqU+QbgTRhe0T1D5B240bF23BvS0VXLho3+BGocSVRNC1Eyw1CJnjIn8IxJlOYjLX0vvbZWbunO98OXMHhg88Ho/H4/F4riky6kKt2RJiloA8qjlEAqCOEtAMj6RYDMYnE9TaHNOUMGZhsGb4UQrF01HuO5QBWrN5JPMC1VUgH30hAaKHoAejCuurWYJMBdVVhFxsTQ13+c3OMOYnNkBrdg3MJnGN/73EKWFrQ+4Xq8Os0prNQ2YPtDRUOSWAcEvuFXcSqUt0z8+ftlFdH0rIQCXZ4VdrK8m/M656cvfBxqWXxQqxNsfNzF5n5P8doYqGj6VQrP+1Xs3mEfMWZXks9ZBTmq3Hcaab2PVTrI+teaDdmDnRMzvQYHvkzcn4mgfQEjOZ7bgrIidArc0xY36MT0z/zTsblmGfJgHTrIHZjN3k/oVmeCdqCqINOLPLGGMnIih1wodRb6PoR8CYpUnJSR+zEHkmTRn/I94A1wJc4w1wLcA13gDXAlxzw1XhL9++c3B0DEClvMLi/JwTHU4M+PLtO4+ePKNxfg7Am3fv+fD6lRMTnDwCB0fHveYBGufnvWlIGycG/Ly4SHQsDa79JugNcC3ANd4A1wJc4w1wLcA13gDXAlzjDXAtwDXeANcCXOPEgNu3biU6lgZODKiUV5jNZnu/Z7NZKuUVF1LcfBFanJ/jw+tX1/eTGLRN2Hr+1FX5HtdjE9SwEXUq2oCYRVcOYYSEiFBtB46uOEpAk8iAVqQBUijWkXDjSpugBEi4EZcRujQlptbmmGKdjCkTdiJyIlVEqyhVCL+CWejEW/KoLA8dbUtOHeGQVthAqLZHu1NbdRmkhJLDUAdO0XA3KpDVZeSkaBxasyVCSoh5MYbcT7fpg2GzhkmYiAFdetMzihFKgLArhaWXk1HXZqIGdOnkDTeThx9lH1pbl43vOEjFgC5as2uo2Y6chu6mVSjup6UpVQOgLxA5mDmud+Js9TT1pG4A9O0NxlQQApSjST/rHo/H4/F4BvgDoGsYlp895c8AAAAASUVORK5CYII="
  , zv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALWSURBVHic7ZsxbBJRGMf/35VRo24tFMWkxra0CQ5MTaN261QcHE04F9MObu3asupg46DpUkhcTDQRpm6KMbp0KIkCTXRALdBNjY6FzwWJUlLvO97dg/B+G5f3vfu9f97dPS7vAIPBYDAYhhZS2Vm9zJGjI0RU9tlJIIDK2BRVVPXXcwD1MkcArDebSBDhbO9KjqgQIQ8g1WsYPQVQLfIGEdZ76aNXmJEKRWnDbb3rAGolfgEg4bZeJczIhKJku6m13BTVSvwAfTJ4ACBCsuUkr5UWHBQ5aRHSbk7mNY0GrodnKS+pEc8AS/M1fxIjI3I30Qw4KHLMIuxJT+InRLgoeTKIZoBFuCo28hlmLEnaiwJgxjmZjv9IHWUzwMIFmY7/SB0DXom8fLOD/U/v279Do+exML+I06fO/NMut/MU1cMvJ/Y1OTGLhflFTzw9CeBx+j4epe8dOx5Mh/F8+1U7hNt3E9gtvHXU54q9hmV7Vakn4HIh9D+6DR4Aaodfsbv3DgCw//GD48EDwJNnW0rcOvEkgM5proKfv34o7xPwKIBbN+90PR4cDbev5clLM4jH5hz3uWKvKXHrxJN7wLK9issTM11vgn+z/TB77GbZjXhsDvErzsOSIFoJ1sucZkbSExNFECEzNuX8n6Enl8AgYQLQLaCboQ9A9BRgRo4Zn72SUURBt4DBYBgcRCvBWokTzIh5JaMCIhSC05R12l70FCDCEtD/S2EAjgMY+nWACUC3gG5MALoFdGMC0C2gGxOAbgHdmAB0C+hGFECz2fdvg8SOogCI8E2m4z9SR2kAOZmO/zQZryXtRQG09t7kJTU+UxmPkuilqPgm2GggJa3xiybL3cQBtPbhbUrrfGBzPEoZaZHrrbLVIqeJ+ubtUDY4TTfcFLpeB4SiZLOLKacaZqTcDh5QuF2eGdcAb78V+AMzvlsWstC9Xb6TQfxgwmAwGAyGIeY3OLS/EpxT8GMAAAAASUVORK5CYII="
  , Do = r => {
    const e = new Date
      , t = new Date(e);
    t.setHours(0, 0, 0, 0);
    const a = new Date(t);
    a.setDate(a.getDate() + 1);
    const s = new Date(t);
    s.setDate(s.getDate() - 1);
    const n = new Date(t)
      , i = new Date(t);
    i.setDate(i.getDate() - 7);
    const l = new Date(t);
    l.setDate(l.getDate() - 30);
    const u = e.getFullYear()
      , d = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
      , m = []
      , f = []
      , b = []
      , g = []
      , w = []
      , M = [];
    r.forEach(N => {
        const C = new Date(N.createTime * 1e3);
        C.getFullYear(),
        C.getMonth(),
        C >= t && C < a ? f.push(N) : C >= s && C < n ? b.push(N) : C >= i && C < s ? g.push(N) : C >= l && C < i ? w.push(N) : M.push(N)
    }
    ),
    f.length > 0 && m.push({
        groupName: "今天",
        list: f
    }),
    b.length > 0 && m.push({
        groupName: "昨天",
        list: b
    }),
    g.length > 0 && m.push({
        groupName: "近7天",
        list: g
    }),
    w.length > 0 && m.push({
        groupName: "近30天",
        list: w
    });
    const E = {};
    M.forEach(N => {
        const C = new Date(N.createTime * 1e3)
          , L = C.getFullYear()
          , D = C.getMonth()
          , _ = L === u ? d[D] : `${L}年 ${d[D]}`;
        E[_] || (E[_] = []),
        E[_].push(N)
    }
    );
    const R = Object.entries(E).map( ([N,C]) => ({
        groupName: N,
        list: C
    })).sort( (N, C) => {
        const L = new Date(N.list[0].createTime * 1e3);
        return new Date(C.list[0].createTime * 1e3) - L
    }
    );
    return m.push(...R),
    m
}
  , Lv = {
    key: 0,
    class: "dx-dialog"
}
  , Ov = {
    class: "dx-dialog--head"
}
  , Nv = {
    class: "dx-dialog-title"
}
  , Dv = {
    class: "dx-dialog--body"
}
  , Fv = {
    class: "chat-list-container"
}
  , _v = {
    class: "chat-list"
}
  , $v = {
    key: 0,
    class: "chat-list-area"
}
  , Pv = {
    class: "group-name"
}
  , Hv = {
    class: "group-list"
}
  , qv = ["onClick"]
  , Qv = {
    class: "item-title"
}
  , Gv = {
    class: "title-text text-ellipsis"
}
  , Uv = {
    class: "item-content"
}
  , Vv = {
    key: 0,
    class: "item-text"
}
  , jv = {
    key: 1,
    class: "recent-chat-empty"
}
  , Wv = oe({
    __name: "index",
    props: {
        visible: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: ""
        }
    },
    emits: ["close", "update:visible"],
    setup(r, {emit: e}) {
        const t = r
          , a = ga()
          , s = z(null);
        Ke( () => t.visible, g => {
            document.body.style.setProperty("overflow", g ? "hidden" : "auto"),
            g && m()
        }
        );
        const n = e
          , i = ur()
          , l = z({
            hasMore: !1,
            list: []
        })
          , u = g => {
            ru({
                path: "/ai-chat",
                query: {
                    sessionId: g
                }
            }),
            ue.emit("resetChatFrame"),
            n("update:visible", !1)
        }
          , d = z(!1)
          , m = async () => {
            f(l.value.list);
            try {
                const g = await pa({
                    url: fa.GetSessionList,
                    method: "POST",
                    body: {
                        curSessionId: a.query.sessionId
                    }
                })
                  , {data: w} = g._data;
                f(w.list)
            } catch (g) {
                g.errNo === Vo.NeedLogin && j0()
            } finally {
                d.value = !0
            }
        }
          , f = g => {
            Do(g),
            l.value.list = Do(g)
        }
          , b = g => {
            l.value.list.forEach(w => {
                w.list.forEach(M => {
                    M.sessionId === g.sessionId && (M.title = g.title)
                }
                )
            }
            )
        }
        ;
        return Ne( () => {
            ue.on("updateListItemName", b),
            ue.on("removeRecentChatItem", m)
        }
        ),
        Gt( () => {
            ue.off("updateListItemName", b),
            ue.off("removeRecentChatItem", m)
        }
        ),
        (g, w) => (S(),
        ge(ha, null, {
            default: Le( () => {
                var M, E;
                return [t.visible ? (S(),
                B("div", Lv, [A("div", {
                    class: "dx-dialog--inner",
                    ref_key: "historyDialogRef",
                    ref: s
                }, [A("div", Ov, [A("div", Nv, [w[2] || (w[2] = ut(" 历史记录 ")), A("span", {
                    class: "close-icon",
                    alt: "",
                    onClick: w[0] || (w[0] = R => n("update:visible", !1))
                })])]), A("div", Dv, [A("div", Fv, [A("div", _v, [k(d) ? (S(),
                B(Te, {
                    key: 0
                }, [(E = (M = k(l)) == null ? void 0 : M.list) != null && E.length ? (S(),
                B("div", $v, [(S(!0),
                B(Te, null, Je(k(l).list, (R, N) => (S(),
                B("div", {
                    key: N,
                    class: "chat-list-group"
                }, [A("div", Pv, xe(R.groupName), 1), A("div", Hv, [(S(!0),
                B(Te, null, Je(R.list, (C, L) => (S(),
                B("div", {
                    key: C.sessionId,
                    class: "list-item",
                    onClick: D => u(C.sessionId)
                }, [A("div", Qv, [A("div", Gv, xe(C.title || "新建会话"), 1), C.sessionId ? (S(),
                B("div", {
                    key: 0,
                    class: "item-oper",
                    onClick: w[1] || (w[1] = jt( () => {}
                    , ["stop"]))
                }, [Z(Su, {
                    "recent-chat-item": C,
                    from: "chatList",
                    onUpdateRecentChatList: m,
                    class: "chat-history"
                }, null, 8, ["recent-chat-item"])])) : J("", !0)]), A("div", Uv, [C.replyPreview ? (S(),
                B("div", Vv, xe(C.replyPreview), 1)) : J("", !0)])], 8, qv))), 128))])]))), 128))])) : (S(),
                B("div", jv, xe(k(i).isLogin ? "开启第一次聊天" : "登录保存历史记录"), 1))], 64)) : J("", !0)])])])], 512)])) : J("", !0)]
            }
            ),
            _: 1
        }))
    }
})
  , Kv = ye(Wv, [["__scopeId", "data-v-4a139c82"]])
  , Yv = {
    class: "home-page"
}
  , Xv = {
    class: "block-tool"
}
  , Zv = {
    class: "title1"
}
  , Jv = ["src"]
  , eg = {
    class: "desc1"
}
  , tg = {
    class: "block-questions"
}
  , rg = {
    class: "desc-list"
}
  , ag = {
    class: "title"
}
  , sg = {
    class: "index"
}
  , ng = {
    class: "desc"
}
  , ds = "AI 智能助手 - 大学生 AI 对话问答智能学习工具 | 大学搜题酱"
  , hs = "大学搜题酱 AI 智能助手，专为大学生打造的高效 AI 学习工具！支持拍照搜题（海量题库）、AI 对话（即时答疑）、AI 写作（论文 / 作文生成）、AI 问答（学习难题解答）、多语言翻译、智能计算器等功能，快速解决学习中的搜题、写作、计算、翻译需求，助力大学生提升学习效率。"
  , ig = oe({
    __name: "index",
    setup(r) {
        const e = Oe.getMessageList()
          , {$track: t} = gr()
          , a = ga()
          , s = z([{
            rel: "canonical",
            href: "https://www.daxuesoutijiang.com/ai-chat"
        }, {
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.daxuesoutijiang.com/ai-chat"
        }])
          , n = z(!1);
        au({
            title: ds,
            meta: [{
                name: "description",
                content: hs
            }, {
                name: "robots",
                content: "index,follow"
            }, {
                name: "twitter:title",
                content: ds
            }, {
                name: "twitter:description",
                content: hs
            }, {
                name: "twitter:url",
                content: "https://www.daxuesoutijiang.com/ai-chat"
            }, {
                property: "og:title",
                content: ds
            }, {
                property: "og:description",
                content: hs
            }, {
                property: "og:url",
                content: "https://www.daxuesoutijiang.com/ai-chat"
            }],
            link: [...s.value]
        }),
        z("");
        const i = z()
          , l = () => {
            var L;
            (L = i.value) == null || L.scrollIntoView({
                behavior: "smooth"
            })
        }
        ;
        Ke( () => e, () => {
            u()
        }
        , {
            deep: !0
        });
        const u = () => {
            zt( () => {
                const L = document.querySelector(".main.main-container");
                L && e.length ? (C(),
                L.style.overflow = "hidden") : L.style.overflow = "auto"
            }
            )
        }
          , d = z("")
          , m = () => {
            Oe.abort(!0),
            setTimeout( () => {
                a.query.sessionId,
                d.value = a.query.sessionId || "new-chat-key"
            }
            , 500)
        }
          , f = z([{
            icon: "https://cdn-img.daxuesoutijiang.com/dx-site/home/icon-snapping.png",
            title: "拍照即可获得答案",
            desc: "只需拍下你的数学问题，然后就能快速得到答案！作业AI加持，从此难题不再！"
        }, {
            icon: "https://cdn-img.daxuesoutijiang.com/dx-site/home/icon-copilot1.png",
            title: "24小时AI助手",
            desc: "全天候为您提供专业简洁的解决方案！搜题酱AI是您的得力智能助手。"
        }, {
            icon: Bv,
            title: "海量题目资源",
            desc: "搜题酱拥有海量题目资源，你还可以上传自己的题库，大学生刷题神器。"
        }, {
            icon: zv,
            title: "网课神器",
            desc: "搜题酱独有的网课Agent，自动秒杀任务点，真正的时间解放神器。"
        }])
          , b = z([{
            title: "搜题酱搜题能支持大学的所有学科吗?",
            desc: "当然可以。大学搜题酱用户亿级别的大学题库，囊括所有大学学科内容，无论基础学科还是冷门学科都可以在这里找到正确答案。"
        }, {
            title: "搜题酱可以在移动设备上使用，还是只能在桌面端使用？",
            desc: "大学搜题酱在桌面端和移动设备上都可以完全访问，支持 Windows、Mac、iOS 和 Android 平台。"
        }, {
            title: "搜题酱答案的正确率高么？",
            desc: "大学搜题酱依托海量题库，在此基础上通过AI的知识增强，不仅提升了AI解题的正确率，而且输出的速度更快。"
        }, {
            title: "搜题功能是免费的么？",
            desc: "免费的，且没有广告哦。"
        }, {
            title: " 搜题答案会提供解析么？",
            desc: "是的，大部分都题目答案都拥有高质量解析。"
        }])
          , g = z()
          , w = z(!1)
          , M = z(1)
          , E = L => {
            M.value = L
        }
          , R = () => {
            n.value = !0
        }
        ;
        Ne( () => {
            t({
                name: "GW_022"
            }),
            w.value = !0,
            ue.on("resetChatFrame", m),
            ue.on("changeChatStatus", E),
            ue.on("showHistoryDialog", R)
        }
        ),
        Gt( () => {
            ue.off("changeChatStatus", E),
            ue.off("resetChatFrame", m),
            ue.off("showHistoryDialog", R)
        }
        ),
        W( () => {
            var L;
            return w.value && ((L = g.value) == null ? void 0 : L.showHistoryMessageLoadingFlag)
        }
        );
        let N;
        const C = () => {
            N || (N = document.querySelector(".main.main-container")),
            zt( () => {
                N == null || N.scrollTo({
                    behavior: "smooth",
                    top: 0
                })
            }
            )
        }
        ;
        return Ne(async () => {
            try {
                u()
            } catch {}
        }
        ),
        (L, D) => {
            const _ = Qs;
            return S(),
            B(Te, null, [A("div", Yv, [(S(),
            B("div", {
                key: k(d),
                class: "part-chat"
            }, [A("div", null, [Z(_, null, {
                default: Le( () => [Z(Sv, {
                    ref_key: "chatFrameRef",
                    ref: g,
                    class: "part-chat__chat-frame",
                    "active-type": k(M),
                    onBeforeTextSend: C,
                    onBeforeExampleSend: C,
                    onAfterFileChoose: C
                }, null, 8, ["active-type"])]),
                fallback: Le( () => [Z(Ev, {
                    class: "part-chat__chat-skeleton"
                })]),
                _: 1
            }), ft(A("button", {
                class: "part-chat__scroll-to-next-screen-button",
                onClick: l
            }, D[1] || (D[1] = [A("div", {
                class: "part-chat__scroll-to-next-screen-button__arrow-holder"
            }, [A("img", {
                src: "https://cdn-img.daxuesoutijiang.com/dx-site/svg-icons/chat/click-to-scroll-down-icon.svg",
                alt: "scroll-down"
            })], -1)]), 512), [[St, !k(e).length]])])])), ft(A("main", {
                ref_key: "mainContentEl",
                ref: i,
                class: "home-blocks"
            }, [D[6] || (D[6] = A("section", {
                class: "block-helper"
            }, [A("h1", {
                class: "title"
            }, [A("span", null, "大学生学习"), A("span", {
                class: "helper"
            }, "好帮手")]), A("div", {
                class: "desc",
                "data-nosnippet": ""
            }, " 大学搜题酱，拥有海量大学题库和学习资源，为您的问题提供答案和总结，通过AI能力帮助你即时解决各种问题，总结文本，并帮助您用简洁的方案回答问题。超过千万用户的选择。一个神奇的作业助手！ ")], -1)), A("section", Xv, [D[2] || (D[2] = A("h2", {
                class: "title"
            }, [ut("为什么选择"), A("span", {
                class: "question-ai"
            }, "大学搜题酱")], -1)), D[3] || (D[3] = A("p", {
                class: "desc"
            }, "搜题酱独特的产品能力，助力解决大学生各种学习难题", -1)), A("ul", null, [(S(!0),
            B(Te, null, Je(k(f), q => (S(),
            B("li", {
                key: q.title
            }, [A("h3", Zv, [A("img", {
                src: q.icon,
                alt: "title-icon"
            }, null, 8, Jv), A("p", null, xe(q.title), 1)]), A("p", eg, xe(q.desc), 1)]))), 128))])]), A("section", tg, [D[5] || (D[5] = A("h2", {
                class: "title mb-40"
            }, "常见问题解答", -1)), A("div", rg, [A("ul", null, [(S(!0),
            B(Te, null, Je(k(b), (q, j) => (S(),
            B("li", {
                key: j
            }, [A("h3", ag, [A("span", sg, xe(j + 1) + ".", 1), A("span", null, xe(q.title), 1)]), A("p", ng, xe(q.desc), 1)]))), 128))]), D[4] || (D[4] = A("div", {
                class: "questions-bottom-bg"
            }, null, -1))])]), Z(su)], 512), [[St, !k(e).length]])]), Z(Kv, {
                visible: k(n),
                "onUpdate:visible": D[0] || (D[0] = q => fs(n) ? n.value = q : null)
            }, null, 8, ["visible"])], 64)
        }
    }
})
  , Jg = ye(ig, [["__scopeId", "data-v-3cc5eb4a"]]);
export {Jg as default};
//# sourceMappingURL=FWrhpmp3.js.map
