(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        G2BT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return T }));
            n("sC2a");
            var a = n("VbXa"),
                s = n.n(a),
                i = n("cOp2"),
                c = n.n(i),
                o = n("q1tI"),
                r = n.n(o),
                f = n("gh7s"),
                u = n("p/d+"),
                d = n("vOnD"),
                p = n("VUD3"),
                l = n("97Pg");

            function b() { var e = c()(["\n    text-align: left;\n    flex: 0 0 auto;\n    align-self: center;\n  "]); return b = function() { return e }, e }

            function h() { var e = c()(["\n    width: 32px;\n    height: 32px;\n    flex: 0 0 32px;\n    margin: 0 8px 0 0;\n  "]); return h = function() { return e }, e }

            function m() { var e = c()(["\n    flex-direction: row;\n    width: 100%;\n    margin: 0 0 24px 0;\n\n\n    &:last-child {\n      margin: 0;\n    }\n  "]); return m = function() { return e }, e }

            function g() { var e = c()(["\n    margin-right: 8px;\n  "]); return g = function() { return e }, e }

            function w() { var e = c()(["\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  "]); return w = function() { return e }, e }

            function y() { var e = c()(["\n\n    &:after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      left: 20px;\n      right: 20px;\n    }\n  "]); return y = function() { return e }, e }

            function k() { var e = c()(["\n    border: none;\n  "]); return k = function() { return e }, e }
            var x = Object(d.c)(p.a).attrs({ id: "value-props" }).withConfig({ displayName: "ValueProps__Wrapper", componentId: "sc-18pfe4g-0" })([""]),
                q = Object(d.c)(l.a).attrs({ id: "value-props_row" }).withConfig({ displayName: "ValueProps__StyledRow", componentId: "sc-18pfe4g-1" })(["position:relative;z-index:1;", ";"], u.g.mobile(k())),
                v = d.c.div.withConfig({ displayName: "ValueProps__Column", componentId: "sc-18pfe4g-2" })(["padding-top:", ";padding-bottom:", ";position:relative;", ";"], (function(e) { return e.removePadding ? "0px" : "40px" }), (function(e) { return e.removePadding ? "0px" : "40px" }), u.g.mobile(y())),
                j = d.c.div.attrs({ id: "value-props_row_column_area" }).withConfig({ displayName: "ValueProps__PropsArea", componentId: "sc-18pfe4g-3" })(["display:flex;justify-content:space-between;", ";"], u.g.mobile(w())),
                S = d.c.div.attrs((function(e) { return { id: "value-props_row_column_area_prop-" + e.index } })).withConfig({ displayName: "ValueProps__ValueProp", componentId: "sc-18pfe4g-4" })(["display:flex;flex-direction:column;width:134px;&:last-child{margin-right:0;}", ";", ";"], u.g.tablet(g()), u.g.mobile(m())),
                C = d.c.div.attrs((function(e) { return { id: "value-props_row_column_area_prop-" + e.index + "_icon" } })).withConfig({ displayName: "ValueProps__Icon", componentId: "sc-18pfe4g-5" })(["position:relative;width:40px;height:40px;margin:0 auto 16px;svg{width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;}", ";"], u.g.mobile(h())),
                E = d.c.span.attrs((function(e) { return { id: "value-props_row_column_area_prop-" + e.index + "_label" } })).withConfig({ displayName: "ValueProps__ValuePropLabel", componentId: "sc-18pfe4g-6" })(["", " color:", ";font-size:", ";line-height:", ";font-weight:300;text-align:center;", ""], u.b.circular, u.a.ritualBlue, Object(u.h)(16), Object(u.h)(22), u.g.mobile(b())),
                T = function(e) {
                    function t() { return e.apply(this, arguments) || this }
                    s()(t, e);
                    var n = t.prototype;
                    return n.renderValueProp = function(e, t, n) {
                        var a = t.replace("icon", "").replace(/-/gi, ""),
                            s = f.e[Object(u.e)(a)] || f.d[Object(u.e)(a)];
                        return r.a.createElement(S, { index: n, key: "value-prop" + n }, r.a.createElement(C, { index: n }, r.a.createElement(s, null)), r.a.createElement(E, { index: n }, e))
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.valueProps,
                            a = t.icons,
                            s = (t.location, t.removePadding),
                            i = t.className,
                            c = void 0 === i ? "col-lg-10 offset-lg-1" : i;
                        return "object" != typeof n || "object" != typeof a ? null : r.a.createElement(x, null, r.a.createElement(q, null, r.a.createElement(v, { className: c, removePadding: s }, r.a.createElement(j, null, n.map((function(t, n) { return e.renderValueProp(t, a[n], n) }))))))
                    }, t
                }(r.a.Component)
        },
        IKvY: function(e, t, n) {
            "use strict";
            n("E5k/");
            var a = n("VbXa"),
                s = n.n(a),
                i = n("cOp2"),
                c = n.n(i),
                o = n("gKnV"),
                r = n("q1tI"),
                f = n.n(r),
                u = n("vOnD"),
                d = n("VUD3"),
                p = (n("pJf4"), n("n0hJ"), n("9eSz")),
                l = n.n(p),
                b = n("h//d");
            n("q8oJ"), n("YbXK"), n("xJgp"), n("rzGZ"), n("Dq+y"), n("8npG"), n("Ggvi");
            var h = function(e, t) { if (!e) throw new Error("Invariant failed") };

            function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function g() { return (g = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]) } return e }).apply(this, arguments) }

            function w(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }
            var y = new Map,
                k = new Map,
                x = new Map,
                q = 0;

            function v(e, t, n) {
                void 0 === n && (n = {}), n.threshold || (n.threshold = 0);
                var a = n,
                    s = a.root,
                    i = a.rootMargin,
                    c = a.threshold;
                if (y.has(e) && h(!1), e) {
                    var o = function(e) { return e ? x.has(e) ? x.get(e) : (q += 1, x.set(e, q.toString()), x.get(e) + "_") : "" }(s) + (i ? c.toString() + "_" + i : c.toString()),
                        r = k.get(o);
                    r || (r = new IntersectionObserver(S, n), o && k.set(o, r));
                    var f = { callback: t, element: e, inView: !1, observerId: o, observer: r, thresholds: r.thresholds || (Array.isArray(c) ? c : [c]) };
                    return y.set(e, f), r.observe(e), f
                }
            }

            function j(e) {
                if (e) {
                    var t = y.get(e);
                    if (t) {
                        var n = t.observerId,
                            a = t.observer,
                            s = a.root;
                        a.unobserve(e);
                        var i = !1,
                            c = !1;
                        n && y.forEach((function(t, a) { a !== e && (t.observerId === n && (i = !0, c = !0), t.observer.root === s && (c = !0)) })), !c && s && x.delete(s), a && !i && a.disconnect(), y.delete(e)
                    }
                }
            }

            function S(e) {
                e.forEach((function(e) {
                    var t = e.isIntersecting,
                        n = e.intersectionRatio,
                        a = e.target,
                        s = y.get(a);
                    if (s && n >= 0) {
                        var i = s.thresholds.some((function(e) { return s.inView ? n > e : n >= e }));
                        void 0 !== t && (i = i && t), s.inView = i, s.callback(i, e)
                    }
                }))
            }
            var C = function(e) {
                var t, n;

                function a() {
                    for (var t, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                    return m(w(t = e.call.apply(e, [this].concat(a)) || this), "state", { inView: !1, entry: void 0 }), m(w(t), "node", null), m(w(t), "handleNode", (function(e) { t.node && (j(t.node), e || t.props.triggerOnce || t.setState({ inView: !1, entry: void 0 })), t.node = e || null, t.observeNode() })), m(w(t), "handleChange", (function(e, n) {
                        (e !== t.state.inView || e) && t.setState({ inView: e, entry: n }), t.props.onChange && t.props.onChange(e, n)
                    })), t
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var s = a.prototype;
                return s.componentDidMount = function() { this.node || h(!1) }, s.componentDidUpdate = function(e, t) { e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold || (j(this.node), this.observeNode()), t.inView !== this.state.inView && this.state.inView && this.props.triggerOnce && (j(this.node), this.node = null) }, s.componentWillUnmount = function() { this.node && (j(this.node), this.node = null) }, s.observeNode = function() {
                    if (this.node) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            a = e.rootMargin;
                        v(this.node, this.handleChange, { threshold: t, root: n, rootMargin: a })
                    }
                }, s.render = function() {
                    var e = this.state,
                        t = e.inView,
                        n = e.entry;
                    if (! function(e) { return "function" != typeof e.children }(this.props)) return this.props.children({ inView: t, entry: n, ref: this.handleNode });
                    var a = this.props,
                        s = a.children,
                        i = a.as,
                        c = a.tag,
                        o = (a.triggerOnce, a.threshold, a.root, a.rootMargin, a.onChange, function(e, t) {
                            if (null == e) return {};
                            var n, a, s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s
                        }(a, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange"]));
                    return Object(r.createElement)(i || c || "div", g({ ref: this.handleNode }, o), s)
                }, a
            }(r.Component);
            m(C, "displayName", "InView"), m(C, "defaultProps", { threshold: 0, triggerOnce: !1 });
            var E = { inView: !1, entry: void 0 };
            n("gu/5"), n("eoYm");
            var T = n("p/d+"),
                W = n("gh7s"),
                I = n("I01i");

            function _() { var e = c()(["\n    width: 50px;\n    height: 50px;\n  "]); return _ = function() { return e }, e }

            function O() { var e = c()(["\n    right: 20px;\n  "]); return O = function() { return e }, e }

            function K() { var e = c()(["\n    bottom: -162px;\n    width: 100%;\n    text-align: center;\n  "]); return K = function() { return e }, e }

            function Z() { var e = c()(["\n    margin-bottom: 4px;\n  "]); return Z = function() { return e }, e }

            function L() { var e = c()(["\n    display: flex;\n    flex-direction: column;\n    bottom: -82px;\n    width: 100%;\n    text-align: center;\n  "]); return L = function() { return e }, e }

            function R() { var e = c()(["\n    width: 100vw;\n    margin: 0 auto;\n  "]); return R = function() { return e }, e }

            function A() { var e = c()(["\n    max-width: 647px;\n    max-height: 365px;\n  "]); return A = function() { return e }, e }
            var M = Object(u.d)(["from{opacity:0}to{opacity:1}"]),
                P = u.c.div.withConfig({ displayName: "TestimonialsCarouselVideos__VideoOverlay", componentId: "sc-1jlmkas-0" })(["position:fixed;height:100vh;width:100vw;top:0;right:0;bottom:0;left:0;overflow:hidden;z-index:2147483647;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);transition:opacity 500ms ease-in-out;display:flex;align-items:center;justify-content:center;flex-direction:column;opacity:0;animation:", " 300ms forwards;"], M),
                N = u.c.div.withConfig({ displayName: "TestimonialsCarouselVideos__VideoContainer", componentId: "sc-1jlmkas-1" })(["position:relative;display:flex;width:85vw;height:62vw;max-width:970px;max-height:547px;", ";", ";"], T.g.notDesktop(A()), T.g.mobile(R())),
                Q = u.c.video.withConfig({ displayName: "TestimonialsCarouselVideos__Video", componentId: "sc-1jlmkas-2" })(["position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;transition:transform ", "ms cubic-bezier(0.42,0,0.335,1);", ";", ";&:focus{outline:none;}@media (max-height:415px) and (orientation:landscape){max-height:calc(100vh - 99px);}"], 550, (function(e) { return e.nextSlide && '\n    &:hover {\n      cursor: url("/svg/arrow-right-large.svg") 38 0, e-resize;\n    }\n  ' }), (function(e) { return e.previousSlide && '\n    &:hover {\n      cursor: url("/svg/arrow-left-large.svg") 38 0, w-resize;\n    }\n  ' })),
                G = u.c.div.withConfig({ displayName: "TestimonialsCarouselVideos__VideoAbout", componentId: "sc-1jlmkas-3" })(["position:absolute;left:0;opacity:0;bottom:-42px;font-size:", ";transition:opacity ", "ms 400ms;", ";@media (max-height:415px) and (orientation:landscape){max-height:calc(100vh - 99px);}"], Object(T.h)(18), 350, T.g.mobile(L())),
                U = u.c.span.withConfig({ displayName: "TestimonialsCarouselVideos__Name", componentId: "sc-1jlmkas-4" })(["margin-right:8px;font-weight:600;", ";"], T.g.mobile(Z())),
                X = u.c.span.withConfig({ displayName: "TestimonialsCarouselVideos__Title", componentId: "sc-1jlmkas-5" })(["", ";font-size:", ";font-style:italic;"], T.b.dutch, Object(T.h)(16)),
                B = u.c.div.withConfig({ displayName: "TestimonialsCarouselVideos__Controls", componentId: "sc-1jlmkas-6" })(["position:absolute;right:0;bottom:-50px;", ";"], T.g.mobile(K())),
                H = u.c.button.withConfig({ displayName: "TestimonialsCarouselVideos__CloseButton", componentId: "sc-1jlmkas-7" })(["background:transparent;border:none;padding:0;width:16px;height:16px;position:absolute;right:0;top:-50px;display:flex;justify-content:flex-end;&:focus{outline:none;}", ";"], T.g.mobile(O())),
                J = u.c.button.withConfig({ displayName: "TestimonialsCarouselVideos__ControlButton", componentId: "sc-1jlmkas-8" })(["display:inline-flex;background:transparent;border:none;outline:none;padding:0;width:40px;height:40px;&:first-child{justify-content:flex-start;}&:last-child{justify-content:flex-end;}&:focus{outline:none;}", ";svg{width:18px;height:12px;transition:transform 0.2s;}&:hover{svg{transform:scale(1.1666);}}"], T.g.mobile(_()));

            function F(e) {
                var t = e.slides,
                    n = e.activeSlideIndex,
                    a = e.handleGoToNextSlide,
                    s = e.handleGoToPreviousSlide,
                    i = e.setShowVideos,
                    c = Object(r.useRef)(null),
                    o = function(e, t) {
                        for (var n = e.map((function(t, n) { return e.length / 2 < n ? 100 * (n - e.length) * -1 : 100 * n * -1 })), a = [], s = 0; s < n.length; s++) {
                            var i = (Math.abs(s - n.length) + t) % n.length;
                            a.push(n[i])
                        }
                        return a
                    }(t, n);
                return Object(r.useEffect)((function() {
                    function e(e) { window.analytics.track("Video Testimonials Engagement", { action: e, position: n + 1, subject: t[n].name, nonInteraction: 0 }) }
                    return e("Playback Carousel Expanded"), Object(I.a)(!0, c),
                        function() { e("Playback Carousel Closed"), Object(I.a)(!1, c) }
                }), []), f.a.createElement(b.a, { onSwipedRight: s, onSwipedLeft: a }, f.a.createElement(P, { ref: c }, f.a.createElement(N, null, f.a.createElement(H, { onClick: function() { return i(!1) } }, f.a.createElement(W.e.Close, null)), t.map((function(e, t) {
                    var n = 0 === o[t],
                        i = o[t],
                        c = { transform: "translateX(" + i + "%) scale(" + (n ? 1 : .75) + ")", opacity: i > 200 || i < -200 ? 0 : 1 };
                    return f.a.createElement(Y, { activeSlide: n, handleGoToNextSlide: a, handleGoToPreviousSlide: s, index: t, key: e.shortname, slide: e, styles: c })
                })), f.a.createElement(B, null, f.a.createElement(J, { onClick: s }, f.a.createElement(W.e.ArrowRoundedLeft, null)), f.a.createElement(J, { onClick: a }, f.a.createElement(W.e.ArrowRoundedRight, null))))))
            }

            function Y(e) {
                var t = e.activeSlide,
                    n = e.handleGoToNextSlide,
                    a = e.handleGoToPreviousSlide,
                    s = e.index,
                    i = e.slide,
                    c = e.styles,
                    o = Object(r.useRef)(null),
                    u = i.image,
                    d = i.name,
                    p = i.shortname,
                    l = i.title,
                    b = c.transform.includes("(-100%)"),
                    h = c.transform.includes("(100%)");

                function m(e, t) { window.analytics.track("Video Testimonials Engagement", { action: e, position: s + 1, subject: d, playback_time: t.target.currentTime, video_duration: t.target.duration, nonInteraction: 0 }) }
                return Object(r.useEffect)((function() {
                    if (t) setTimeout((function() { o.current.play() }), 350);
                    else {
                        var e = o.current.currentSrc;
                        o.current.pause(), o.current.src = "", o.current.src = e, o.current.currentTime = 0
                    }
                }), [t]), f.a.createElement(f.a.Fragment, null, f.a.createElement(Q, {
                    autoPlay: !!t && "autoplay",
                    controls: t,
                    preload: "none",
                    poster: u.file.url,
                    onPlay: function(e) { m("Video Playback Started", e) },
                    onPause: function(e) { m("Video Playback Paused", e) },
                    onEnded: function(e) {
                        m("Video Playback Ended", e),
                            function() {
                                var e = document,
                                    t = e.fullScreenElement,
                                    n = e.webkitFullscreenElement,
                                    a = e.mozFullScreenElement;
                                if (!(t || n || a)) return;
                                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                            }(), setTimeout((function() { return n() }), 750)
                    },
                    onClick: function() { return b && a(), h && n(), !1 },
                    nextSlide: h,
                    previousSlide: b,
                    style: c,
                    ref: o
                }, f.a.createElement("source", { src: "https://d3tgv297hi4yx8.cloudfront.net/video-testimonials/" + p + "-high.mp4", type: "video/mp4", id: p + "Mp4SourceHigh" }), f.a.createElement("source", { src: "https://d3tgv297hi4yx8.cloudfront.net/video-testimonials/" + p + ".webm", type: "video/webm", id: p + "WebMSource" }), f.a.createElement("source", { src: "https://d3tgv297hi4yx8.cloudfront.net/video-testimonials/" + p + ".ogg", type: "video/ogg", id: p + "OGGSource" }), f.a.createElement("track", { src: "/subtitles/vt_" + p + "_captions.vtt", label: "English", kind: "captions", srcLang: "en-us" })), f.a.createElement(G, { style: t ? { opacity: 1 } : { transition: "none" } }, f.a.createElement(U, null, d), " ", f.a.createElement(X, null, l)))
            }

            function z() { var e = c()(["\n    width: 172px;\n    height: 209px;\n\n    &:first-child {\n      width: 220px;\n      height: 267px;\n\n      &:hover ~ ", " {\n        background: transparent;\n      }\n    }\n\n    &:not(:last-child) {\n      margin-right: 20px;\n    }\n  "]); return z = function() { return e }, e }

            function V() { var e = c()(["\n    width: 229px;\n    height: 279px;\n\n    &:first-child {\n      width: 294px;\n      height: 358px;\n    }\n\n    &:not(:last-child) {\n      margin-right: 26px;\n    }\n  "]); return V = function() { return e }, e }

            function D() { var e = c()(["\n      width: 60px;\n      height: 60px;\n      margin: 0;\n    "]); return D = function() { return e }, e }

            function $() { var e = c()(["\n      width: 48px;\n      height: 48px;\n      overflow: visible;\n    "]); return $ = function() { return e }, e }

            function ee() { var e = c()(["\n    left: 16px;\n    bottom: 16px;\n    border-radius: 0;\n  "]); return ee = function() { return e }, e }

            function te() { var e = c()(["\n    width: 62px;\n  "]); return te = function() { return e }, e }

            function ne() { var e = c()(["\n    width: 60px;\n  "]); return ne = function() { return e }, e }

            function ae() { var e = c()(["\n    bottom: 70px;\n    left: 62%;\n  "]); return ae = function() { return e }, e }

            function se() { var e = c()(["\n    bottom: 30px;\n    left: 60.5%;\n  "]); return se = function() { return e }, e }

            function ie() { var e = c()(["\n    margin-bottom: 0;\n  "]); return ie = function() { return e }, e }

            function ce() { var e = c()(["\n    font-size: ", ";\n    line-height: ", ";\n    min-height: 96px;\n    margin-bottom: 16px;\n  "]); return ce = function() { return e }, e }

            function oe() { var e = c()(["\n      animation: ", " ", "ms 100ms forwards,\n    ", "\n      ", "ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n  "]); return oe = function() { return e }, e }

            function re() { var e = c()(["\n    width: 256px;\n\n    ", ",\n    ", " {\n      display: none\n    }\n  "]); return re = function() { return e }, e }

            function fe() { var e = c()(["\n    padding-top: 24px;\n    width: 220px;\n  "]); return fe = function() { return e }, e }

            function ue() { var e = c()(["\n    margin-bottom: 0;\n  "]); return ue = function() { return e }, e }

            function de() { var e = c()(["\n    font-size: ", "\n    margin-bottom: 24px;\n  "]); return de = function() { return e }, e }

            function pe() { var e = c()(["\n    margin-bottom: 2px;\n  "]); return pe = function() { return e }, e }

            function le() { var e = c()(["\n    min-width: unset;\n  "]); return le = function() { return e }, e }

            function be() { var e = c()(["\n    margin-top: 56px;\n  "]); return be = function() { return e }, e }
            var he = u.c.div.withConfig({ displayName: "TestimonialsCarousel__CarouselContainer", componentId: "sc-1fg86gc-0" })(["position:relative;display:flex;margin-top:40px;@media (max-width:600px){flex-direction:column-reverse;margin:40px -20px 0;padding:0 20px;overflow:hidden;}", ";"], T.i.md(be())),
                me = u.c.div.attrs({ className: "col-3 col-md-3" }).withConfig({ displayName: "TestimonialsCarousel__Spacer", componentId: "sc-1fg86gc-1" })(["min-width:300px;", ";@media (max-width:600px){display:none;}"], T.g.tablet(le())),
                ge = u.c.div.attrs({ id: "testimonials-new-carousel_text-container_name" }).withConfig({ displayName: "TestimonialsCarousel__Name", componentId: "sc-1fg86gc-2" })(["margin-bottom:6px;font-size:", ";", ";"], Object(T.h)(18), T.g.mobile(pe())),
                we = u.c.div.attrs({ id: "testimonials-new-carousel_text-container_title" }).withConfig({ displayName: "TestimonialsCarousel__Title", componentId: "sc-1fg86gc-3" })(["", ";font-style:italic;font-weight:500;font-size:", ";margin-bottom:30px;", ";", ";"], T.b.dutch, Object(T.h)(16), T.g.tablet(de(), Object(T.h)(14)), T.g.mobile(ue())),
                ye = u.c.div.attrs({ id: "testimonials-new-carousel_text-container" }).withConfig({ displayName: "TestimonialsCarousel__TextContainer", componentId: "sc-1fg86gc-4" })(["position:absolute;display:flex;flex-direction:column;z-index:60;padding-top:56px;width:370px;", ";", ";@media (max-width:600px){position:relative;}"], T.g.tablet(fe()), T.g.mobile(re(), ge, we)),
                ke = Object(u.d)(["from{opacity:0;}to{opacity:1;}"]),
                xe = Object(u.d)(["from{transform:translateY(-20%)}to{transform:translateY(0)}"]),
                qe = Object(u.d)(["from{transform:translateY(20%)}to{transform:translateY(0)}"]),
                ve = Object(u.d)(["from{transform:translateY(-50%)}to{transform:translateY(0)}"]),
                je = Object(u.d)(["from{transform:translateY(50%)}to{transform:translateY(0)}"]),
                Se = u.c.div.withConfig({ displayName: "TestimonialsCarousel__AnimateOnChange", componentId: "sc-1fg86gc-5" })(["opacity:0;animation:", " ", "ms 100ms forwards,", " ", "ms cubic-bezier(0.215,0.61,0.355,1) forwards;", ";"], ke, 400, (function(e) { return "forwards" === e.direction ? xe : qe }), 400, T.g.mobile(oe(), ke, 400, (function(e) { return "forwards" === e.direction ? ve : je }), 400)),
                Ce = u.c.div.attrs({ id: "testimonials-new-carousel_text-container_quote" }).withConfig({ displayName: "TestimonialsCarousel__PullQuote", componentId: "sc-1fg86gc-6" })(["position:relative;font-size:", ";line-height:", ";letter-spacing:-0.5px;margin-bottom:24px;min-height:120px;", ";", ";"], Object(T.h)(34), Object(T.h)(40), T.g.tablet(ce(), Object(T.h)(22), Object(T.h)(32)), T.g.mobile(ie())),
                Ee = u.c.div.attrs({ id: "testimonials-new-carousel_slides_controls" }).withConfig({ displayName: "TestimonialsCarousel__Controls", componentId: "sc-1fg86gc-7" })(["position:absolute;z-index:70;bottom:30px;left:58.5%;", ";", ";@media (max-width:600px){display:none;}"], T.i.md(se()), T.i.lg(ae())),
                Te = u.c.button.attrs((function(e) { return { id: "testimonials-new-carousel_slides_controls_control-button-" + e.index } })).withConfig({ displayName: "TestimonialsCarousel__ControlButton", componentId: "sc-1fg86gc-8" })(["display:inline-flex;justify-content:center;align-items:center;background:transparent;border:none;outline:none;padding:0;width:57px;height:56px;background:#f8f7f9;", ";", ";&:focus{outline:none;}@media (max-width:600px){background:transparent;}svg{width:18px;height:12px;transition:transform 0.2s;}&:hover{svg{transform:scale(1.1666);}}"], T.i.md(ne()), T.i.lg(te())),
                We = u.c.div.withConfig({ displayName: "TestimonialsCarousel__MobileControlsButton", componentId: "sc-1fg86gc-9" })(["position:absolute;right:0;height:100%;width:20%;display:flex;justify-content:flex-end;background:transparent;border:none;z-index:100;@media (min-width:600px){display:none;}"]),
                Ie = u.c.button.attrs({ id: "testimonials-new-carousel_slides_play-button" }).withConfig({ displayName: "TestimonialsCarousel__PlayButton", componentId: "sc-1fg86gc-10" })(["display:flex;flex-direction:column;position:absolute;bottom:24px;left:24px;padding:0;z-index:50;background:transparent;border:none;border-radius:50%;color:#fff;text-align:left;opacity:0;animation:", " ", "ms 100ms forwards;pointer-events:none;transition:background 200ms ease;@media (min-width:749px){", ",", "{display:none;}}&:focus{outline:none;}", ";@media (max-width:748px){bottom:0;left:0;width:100%;max-width:256px;padding-left:16px;padding-bottom:16px;background:-moz-linear-gradient( top,rgba(68,68,68,0) 0%,rgba(68,68,68,0.25) 100% );background:-webkit-linear-gradient( top,rgba(68,68,68,0) 0%,rgba(68,68,68,0.25) 100% );background:linear-gradient( to bottom,rgba(68,68,68,0) 0%,rgba(68,68,68,0.25) 100% );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00444444',endColorstr='#40444444',GradientType=0 );}@media (min-width:601px) and (max-width:748px){max-width:220px;}svg{width:40px;height:40px;margin-bottom:8px;", ";", ";}"], ke, 400, ge, we, T.g.tablet(ee()), T.i.sm($()), T.i.md(D())),
                _e = function() { return f.a.createElement("svg", { width: "60", height: "60", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, f.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 57.5C45.1878 57.5 57.5 45.1878 57.5 30C57.5 14.8122 45.1878 2.5 30 2.5C14.8122 2.5 2.5 14.8122 2.5 30C2.5 45.1878 14.8122 57.5 30 57.5ZM60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z", fill: "white" }), f.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.0976 22.1153C26.8802 21.9748 26.6021 21.9619 26.3734 22.0812C26.1433 22.1998 26 22.4309 26 22.6825V36.3182C26 36.5698 26.1433 36.8009 26.3727 36.9195C26.4772 36.9734 26.5915 37 26.7059 37C26.8428 37 26.9791 36.9611 27.0976 36.8855L37.6859 30.0676C37.8821 29.9408 38 29.7281 38 29.5004C38 29.2726 37.8821 29.0599 37.6859 28.9331L27.0976 22.1153Z", fill: "white" })) },
                Oe = u.c.div.attrs({ id: "testimonials-new-carousel_slides" }).withConfig({ displayName: "TestimonialsCarousel__Slides", componentId: "sc-1fg86gc-11" })(["display:flex;position:relative;"]),
                Ke = u.c.div.attrs((function(e) { return { id: "testimonials-new-carousel_slides_slide-" + e.index } })).withConfig({ displayName: "TestimonialsCarousel__Slide", componentId: "sc-1fg86gc-12" })(["position:relative;width:289px;height:351px;cursor:pointer;overflow:hidden;&:first-child{width:375px;height:450px;&:hover ~ ", "{background:rgba(255,255,255,0.2);}}&:not(:last-child){margin-right:30px;}", ";", ";@media (max-width:600px){min-width:200px;min-height:242px;&:first-child{min-width:256px;min-height:310px;}&:last-child{display:none;}&:not(:last-child){margin-right:16px;}}"], Ie, T.g.notDesktop(V()), T.g.tablet(z(), Ie)),
                Ze = u.c.div.withConfig({ displayName: "TestimonialsCarousel__Image", componentId: "sc-1fg86gc-13" })(["position:absolute;height:100%;width:100%;top:0px;left:0px;color:#000;visibility:hidden;z-index:20;will-change:transform;box-shadow:0px 0px 30px rgba(0,0,0,0.25);transition:transform ", "ms cubic-bezier(0.4,0,0.6,1);"], 400);
            var Le = function(e) {
                    var t = e.slides,
                        n = Object(r.useState)({ activeSlideIndex: 0, direction: "forwards" }),
                        a = n[0],
                        s = a.activeSlideIndex,
                        i = a.direction,
                        c = n[1],
                        o = Object(r.useState)(!1),
                        u = o[0],
                        d = o[1],
                        p = Object(r.useState)(!1),
                        h = p[0],
                        m = p[1],
                        g = function(e) {
                            void 0 === e && (e = {});
                            var t = Object(r.useRef)(),
                                n = Object(r.useState)(E),
                                a = n[0],
                                s = n[1];
                            return [Object(r.useCallback)((function(n) { t.current && (j(t.current), e.triggerOnce || s(E)), n && v(n, (function(t, a) { s({ inView: t, entry: a }), t && e.triggerOnce && j(n) }), e), t.current = n }), [e.threshold, e.root, e.rootMargin, e.triggerOnce]), a.inView, a.entry]
                        }(),
                        w = g[0],
                        y = g[1],
                        k = new Array(3).fill(""),
                        x = t.length,
                        q = t[s];

                    function S() { u || (d(!0), setTimeout((function() { return d(!1) }), 400)) }

                    function C() { u || c((function(e) { var t = e.activeSlideIndex; return S(), t === x - 1 ? { activeSlideIndex: 0, direction: "forwards" } : { activeSlideIndex: t + 1, direction: "forwards" } })) }

                    function T() { u || c((function(e) { var t = e.activeSlideIndex; return S(), 0 === t ? { activeSlideIndex: x - 1, direction: "backwards" } : { activeSlideIndex: t - 1, direction: "backwards" } })) }
                    return Object(r.useEffect)((function() {
                        if (!u && y) {
                            function e(e) {
                                switch (e.key) {
                                    case "ArrowLeft":
                                        T();
                                        break;
                                    case "ArrowRight":
                                        C();
                                        break;
                                    case "Escape":
                                        m(!1)
                                }
                            }
                            return window.addEventListener("keydown", e),
                                function() { return window.removeEventListener("keydown", e) }
                        }
                    }), [u, y]), f.a.createElement(f.a.Fragment, null, f.a.createElement(b.a, { onSwipedRight: T, onSwipedLeft: C }, f.a.createElement(he, { ref: w }, f.a.createElement(me, null), f.a.createElement(ye, null, f.a.createElement(Se, { direction: i, key: s }, f.a.createElement(Ce, { dangerouslySetInnerHTML: { __html: "“" + q.pullquote.pullquote + "”" } }), f.a.createElement(ge, null, q.name), f.a.createElement(we, null, q.title))), f.a.createElement(Oe, null, k.map((function(e, n) {
                        var a, c, o = { previousSlide: 0 === (c = (a = s + n) > x - 1 ? a - x : a) ? x - 1 : c - 1, visibleSlide: c, nextSlide: c === x - 1 ? 0 : c + 1 };
                        return f.a.createElement(r.Fragment, { key: n }, f.a.createElement(Ke, {
                            index: n,
                            key: n,
                            onClick: function() {
                                return function(e) {
                                    switch (e) {
                                        case 0:
                                            m(!0);
                                            break;
                                        case 1:
                                            T();
                                            break;
                                        case 2:
                                            C()
                                    }
                                }(n)
                            }
                        }, t.map((function(e, n) {
                            var a = function(e, t) {
                                var n = e.previousSlide,
                                    a = e.visibleSlide,
                                    s = e.nextSlide,
                                    c = "forwards" === i,
                                    o = {};
                                return t === n && (o = { transform: "translateX(-50%)", zIndex: 0, visibility: "visible" }), t === a && (o = { transform: "translateX(0)", zIndex: c ? 10 : 20, visibility: "visible" }), t === s && (o = { transform: "translateX(100%)", zIndex: c ? 20 : 30, visibility: c ? "hidden" : "visible" }), o
                            }(o, n);
                            return f.a.createElement(Ze, { key: t[n].name, style: a, direction: i }, f.a.createElement(l.a, { fluid: t[n].verticalImage.fluid, loading: "eager", fadeIn: !1, alt: t[n].name + " - " + t[n].title, style: { position: "absolute", left: 0, top: 0, width: "100%", height: "100%", userSelect: "none", userDrag: "none", pointerEvents: "none", touchCallout: "none" } }))
                        }))))
                    })), f.a.createElement(Ie, { key: s }, f.a.createElement(_e, null), f.a.createElement(Se, { direction: i, key: s }, f.a.createElement(ge, null, q.name), f.a.createElement(we, null, q.title))), f.a.createElement(Ee, null, f.a.createElement(Te, { index: "0", onClick: T }, f.a.createElement(W.e.ArrowRoundedLeft, null)), f.a.createElement(Te, { index: "1", onClick: C }, f.a.createElement(W.e.ArrowRoundedRight, null)))), f.a.createElement(We, { onClick: C }))), h && f.a.createElement(F, { setShowVideos: m, slides: t, activeSlideIndex: s, handleGoToPreviousSlide: T, handleGoToNextSlide: C }))
                },
                Re = n("Wbzz");

            function Ae() { var e = c()(["\n    font-size: ", ";\n    line-height: ", ";\n  "]); return Ae = function() { return e }, e }

            function Me() { var e = c()(["\n    font-size: ", ";\n  "]); return Me = function() { return e }, e }

            function Pe() { var e = c()(["\n    font-size: ", ";\n    line-height: ", ";\n    letter-spacing: -1.4px;\n    margin: 0 0 16px;\n  "]); return Pe = function() { return e }, e }

            function Ne() { var e = c()(["\n  font-size: ", ";\n"]); return Ne = function() { return e }, e }

            function Qe() { var e = c()(["\n        padding: 120px 0 40px;\n        .container {\n          padding: 0;\n        }\n      "]); return Qe = function() { return e }, e }

            function Ge() { var e = c()(["\n  padding: 80px 0;\n  .container {\n    padding: 0 20px;\n  }\n  "]); return Ge = function() { return e }, e }
            var Ue = u.c.div.attrs({ id: "testimonials-new" }).withConfig({ displayName: "Testimonials__TestimonialsWrapper", componentId: "ishw8a-0" })(["padding:", ";z-index:2;background:rgba(242,241,245,0.56);.container{overflow:visible !important;padding:0 20px;}", ";", ""], (function(e) { return e.variation ? "80px 0" : "120px 0" }), T.g.tablet(Ge()), (function(e) { return e.variation && Object(u.b)(["", ""], T.i.md(Qe())) })),
                Xe = Object(u.c)(d.a).attrs({ id: "testimonials-new_container" }).withConfig({ displayName: "Testimonials__TestimonialsContainer", componentId: "ishw8a-1" })([""]),
                Be = u.c.div.attrs({ id: "testimonials-new_container_column", className: "d-flex flex-column w-100" }).withConfig({ displayName: "Testimonials__TestimonialsColumn", componentId: "ishw8a-2" })([""]),
                He = u.c.h2.attrs({ id: "testimonials-new_container_column_title" }).withConfig({ displayName: "Testimonials__Headline", componentId: "ishw8a-3" })(["", " color:", ";font-size:", ";line-height:", ";letter-spacing:-0.4px;font-weight:500;text-align:center !important;margin:0 0 24px;", ";", ";", ";"], T.b.circular, T.a.ritualBlue, Object(T.h)(24), Object(T.h)(36), T.i.sm(Ne(), Object(T.h)(30)), T.i.md(Pe(), Object(T.h)(48), Object(T.h)(54)), T.i.lg(Me(), Object(T.h)(40))),
                Je = u.c.p.attrs({ id: "testimonials-new_container_column_subheader" }).withConfig({ displayName: "Testimonials__Subhead", componentId: "ishw8a-4" })(["", " color:", ";font-size:", ";line-height:", ";font-weight:normal;text-align:center;letter-spacing:0;margin:0;", ";"], T.b.dutch, T.a.ritualBlue, Object(T.h)(16), Object(T.h)(26), T.i.md(Ae(), Object(T.h)(18), Object(T.h)(28))),
                Fe = function(e) {
                    function t() { return e.apply(this, arguments) || this }
                    return s()(t, e), t.prototype.render = function() {
                        var e = this.props.data.contentfulHomePage.testimonials,
                            t = this.props.homePageMensTest;
                        return f.a.createElement(Ue, { variation: t }, f.a.createElement(Xe, null, f.a.createElement(Be, null, f.a.createElement(He, null, "Skeptics Speak"), f.a.createElement(Je, null, "With millions of bottles delivered, discover what Ritual users have to say.")), f.a.createElement(Le, { slides: e })))
                    }, t
                }(f.a.Component);
            t.a = function(e) { return f.a.createElement(Re.StaticQuery, { query: "1304880275", render: function(t) { return f.a.createElement(Fe, Object.assign({}, e, { data: t })) }, data: o }) }
        },
        eJj8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return j }));
            n("y7hu");
            var a = n("VbXa"),
                s = n.n(a),
                i = n("cOp2"),
                c = n.n(i),
                o = n("q1tI"),
                r = n.n(o),
                f = n("vOnD"),
                u = n("p/d+"),
                d = n("gh7s"),
                p = n("VUD3"),
                l = n("97Pg"),
                b = n("P3oS");

            function h() { var e = c()(["\n    margin: 0 0 40px 0;\n  "]); return h = function() { return e }, e }

            function m() { var e = c()(["\n    flex-direction: column;\n    align-items: flex-start;\n    padding-bottom: 80px;\n    padding-top: 40px;\n  "]); return m = function() { return e }, e }

            function g() { var e = c()(["\n    padding-bottom: 80px;\n  "]); return g = function() { return e }, e }

            function w() { var e = c()(["\n      right: 16px;\n      left: 16px;\n    "]); return w = function() { return e }, e }
            var y = f.c.div.attrs({ id: "press" }).withConfig({ displayName: "Press__PressWrapper", componentId: "sc-11n4s4u-0" })(["position:relative;background-color:", ";"], (function(e) { return e.background ? e.background : "transparent" })),
                k = Object(f.c)(p.a).attrs({ id: "press_container" }).withConfig({ displayName: "Press__PressContainer", componentId: "sc-11n4s4u-1" })(["position:relative;overflow:visible !important;"]),
                x = Object(f.c)(p.a).attrs({ id: "press_styled-container" }).withConfig({ displayName: "Press__StyledContainer", componentId: "sc-11n4s4u-2" })(["position:absolute;overflow:visible !important;height:100%;max-width:none !important;left:0;right:0;top:0;bottom:0;margin:0 !important;padding:0 !important;"]),
                q = f.c.div.attrs({ id: "press_container_row_column", className: "col-12 col-md-8 offset-md-2" }).withConfig({ displayName: "Press__PressColumn", componentId: "sc-11n4s4u-3" })(['position:relative;z-index:100;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:56px;padding-bottom:120px;&:before{content:"";position:absolute;top:0;right:0;left:0;height:4px;background-color:', ";", ";}", " ", ";"], u.a.ritualBlue, u.g.mobile(w()), u.g.tablet(g()), u.g.mobile(m())),
                v = f.c.div.attrs((function(e) { return { id: "press_container_row_column_icon-" + e.index } })).withConfig({ displayName: "Press__PressIcon", componentId: "sc-11n4s4u-4" })(["position:relative;margin:0;flex:0 1 auto;height:40px;&:last-of-type{margin:0;}", " svg{height:40px;color:", ";opacity:1;transition:opacity 200ms ease-in-out;&:hover{opacity:0.56;}path,g{fill:currentColor;}}"], u.g.mobile(h()), u.a.ritualBlue),
                j = function(e) {
                    function t() { return e.apply(this, arguments) || this }
                    return s()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.quotes,
                            n = e.children,
                            a = e.background;
                        return r.a.createElement(y, { background: a }, r.a.createElement(k, null, r.a.createElement(l.a, { id: "press_container_row" }, r.a.createElement(q, null, t.map((function(e, t) { var n = d.g[e.icon]; return e.link ? r.a.createElement(v, { index: t, key: t }, r.a.createElement(b.a, { id: "press_container_row_column_icon-" + t + "_link", className: "press__icon__" + e.icon, href: e.link, ariaLabel: e.author, rel: "noopener noreferrer" }, r.a.createElement(n, { id: "press_container_row_column_icon-" + t + "_link_svg" }))) : r.a.createElement(v, { index: t, key: t }, r.a.createElement(n, { id: "press_container_row_column_icon-" + t + "_link_svg" })) }))))), r.a.createElement(x, null, n))
                    }, t
                }(r.a.Component)
        },

        n0hJ: function(e, t, n) {
            var a = n("P8UN");
            a(a.P, "Array", { fill: n("Y++M") }), n("Dq1/")("fill")
        },
        gKnV: function(e) { e.exports = JSON.parse('{"data":{"contentfulHomePage":{"testimonials":[{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/1jHc3vOecy4iI8WWaAwOU0/331375f1893872b30d41e619db0a6837/Erica.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Erica Chidi Cohen","shortname":"erica","title":"Doula and Health Educator","pullquote":{"pullquote":"I love that it has <span class=\'pullQuoteEmphasis\'>omegas</span> in it but they are <span class=\'pullQuoteEmphasis\'>plant-based.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/77p9R4oaLmOiSAQ2guowwo/0ce88f89f206061608084f4d4ded8c84/Kara.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Kara Griffin","shortname":"kara","title":"Nutritionist and Trainer","pullquote":{"pullquote":"The pill was made so the <span class=\\"pullQuoteEmphasis\\">micronutrients work together.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/7mYtU8P3PyqEKA68sIO26e/a23d68d60b62d2a8ba6b57fc26a88247/Sheryl.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Sheri Foelsch","shortname":"sheryl","title":"Registered Nurse","pullquote":{"pullquote":"Ritual makes it really easy to remember to <span class=\\"pullQuoteEmphasis\\">take my vitamins.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6QHZs8egYoieIkQYAKqcK4/ff8232594c24461bdac92b601121ee1c/Brittany.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/5HzvXUGc5uqGN2ToTZwSY7/6d927c593c8161a5189e6db8fc2c4b66/Brittany.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Brittany Harrer","shortname":"brittany","title":"Co-Founder of Recruiting Agency","pullquote":{"pullquote":"You <span class=\'pullQuoteEmphasis\'>don\'t get nauseous</span> when you take them."}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/60cuCuZB4W4GwKWQg4q6aW/e28beda2de4f569c29cd510622d2b35f/Becky.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/6WRk0KG0LMv9tH7F5ZUJyH/92bceecac10610ecf352d5467bc79d9a/Rebecca.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Rebecca Harris","shortname":"becky","title":"Insurance Broker","pullquote":{"pullquote":"There\'s <span class=\\"pullQuoteEmphasis\\">only what you need,</span> and nothing beyond that."}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/2eltTXqVT6SQaMAK20YuA2/ad2fc8cbfc57591856b8a2bd9493ff8e/Lindsay.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/3ayQ3HSAMSWkpKbE9XmZpM/72bde375cb92f47fbbcf5d204c782aa8/Lindsay.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Lindsay Scola","shortname":"lindsay","title":"Director of Talent Relations","pullquote":{"pullquote":"When I found Ritual vitamins, <span class=\\"pullQuoteEmphasis\\">everything was in one place.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6sTYavh0ZiSEMoG4GQaksy/7fc1c7f7ce7dde539162ae99340d108d/Caroline.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/6JFiqJpXiR59X88PZAIWK9/069a77b44a72f3f0cb37b2cde1d0d317/Caroline.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Caroline Cameron","shortname":"caroline","title":"Director of Operations","pullquote":{"pullquote":"The different sources are <span class=\\"pullQuoteEmphasis\\">all vegan.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/6j9vw3qwVO2UeIY2Qyqosw/1ccd552f499fbc73b2299336295dfbf5/Lori.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/5JLn6eCOiIuxOs89pTNreZ/1d55e78f6b2b6b68545d1ccaebb76f28/Lori.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Lori Coyle","shortname":"lori","title":"Fitness Program Manager","pullquote":{"pullquote":"The thing I love most about Ritual is just how <span class=\'pullQuoteEmphasis\'>transparent</span> they are."}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/3FtuxThaliMeei4WieUWmA/6cf2eb7aacb5d5ac700d685e7169869a/Crystalrose.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/2Xg4QGyFMpuTw9SZx81644/ad9d128095af7fbdf4dfe244d7e43c0b/Crystalrose.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Crystalrose Guerra","shortname":"crystalrose","title":"Professional Athlete","pullquote":{"pullquote":"Nice to just have them <span class=\'pullQuoteEmphasis\'>delivered to the door.</span>"}},{"image":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg"},"fluid":{"aspectRatio":1.773286467486819,"src":"//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=1024&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=256&h=144&q=90 256w,\\n//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=512&h=289&q=90 512w,\\n//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=1009&h=569&q=90 1009w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=1024&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=256&h=144&q=90&fm=webp 256w,\\n//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=512&h=289&q=90&fm=webp 512w,\\n//images.ctfassets.net/uuc5ok478nyh/1X0CuRb2LmOqEyK26mSEky/30875b713167cba3aba22c4324c59fa1/Meghan.jpg?w=1009&h=569&q=90&fm=webp 1009w","sizes":"(max-width: 1024px) 100vw, 1024px"}},"verticalImage":{"file":{"url":"//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg"},"fluid":{"aspectRatio":0.8222222222222222,"src":"//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=375&q=90","srcSet":"//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=94&h=114&q=90 94w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=188&h=229&q=90 188w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=375&h=456&q=90 375w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=563&h=685&q=90 563w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=750&h=912&q=90 750w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=1110&h=1350&q=90 1110w","srcWebp":"//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=375&q=90&fm=webp","srcSetWebp":"//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=94&h=114&q=90&fm=webp 94w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=188&h=229&q=90&fm=webp 188w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=375&h=456&q=90&fm=webp 375w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=563&h=685&q=90&fm=webp 563w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=750&h=912&q=90&fm=webp 750w,\\n//images.ctfassets.net/uuc5ok478nyh/1NJadqh8bgdkpsrf5lLRCZ/0707ec1a61dc7be3164eb7f1eb518af0/Megan.jpg?w=1110&h=1350&q=90&fm=webp 1110w","sizes":"(max-width: 375px) 100vw, 375px"}},"name":"Megan Monahan","shortname":"megan","title":"Meditation Teacher","pullquote":{"pullquote":"Everything is sourced with such <span class=\\"pullQuoteEmphasis\\">integrity</span> and <span class=\\"pullQuoteEmphasis\\">responsibility.</span>"}}]}}}') },
    }
]);
//# sourceMappingURL=42857efcd29ab383bee123fbf051b297236d0c5e-02641911b3dd17bc0ce6.js.map