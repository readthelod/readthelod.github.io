(() => {
  var t = {
      792: () => {
        !(function (t, e) {
          t.behaviors.vlizAccordeon = {
            attach: function (t, n) {
              var i = e(".vliz-accordeon-item", ".vliz-accordeon .views-row");
              i.forEach(function (t) {
                t.addEventListener("click", function (e) {
                  i.forEach(function (e) {
                    e !== t && e.classList.remove("active");
                  }),
                    t.classList.contains("active")
                      ? t.classList.remove("active")
                      : (t.classList.add("active"),
                        t.scrollIntoView({
                          behavior: "smooth",
                          block: "end",
                          inline: "nearest",
                        }));
                });
              });
            },
          };
        })(Drupal, once);
      },
      180: () => {
        !(function (t, e) {
          var n = "active",
            i = !1;
          t.behaviors.vlizDoormat = {
            attach: function (t, a) {
              var o = e("doormat-triggers", "header [data-doormat-target]"),
                r = e("doormat-targets", "[data-doormat-id]"),
                s = function () {
                  o.forEach(function (t) {
                    t.classList.remove(n);
                  });
                };
              o.forEach(function (t) {
                t.addEventListener("click", function (e) {
                  e.preventDefault(),
                    s(),
                    r.forEach(function (e) {
                      e.dataset.doormatId == t.dataset.doormatTarget
                        ? e.classList.contains(n)
                          ? ((i = !1),
                            e.classList.remove(n),
                            t.classList.remove(n))
                          : ((i = !0), e.classList.add(n), t.classList.add(n))
                        : e.classList.remove(n);
                    });
                });
              }),
                document.addEventListener("click", function (t) {
                  i &&
                    !t.target.closest("header") &&
                    (s(),
                    r.forEach(function (t) {
                      t.classList.remove(n);
                    }));
                });
            },
          };
        })(Drupal, once);
      },
      709: () => {
        !(function (t, e) {
          var n = "vliz-mobile-nav-active";
          t.behaviors.vlizMobilenav = {
            attach: function (t, i) {
              var a = e("hamburger-toggle", "button.hamburger"),
                o = e(
                  "expanded-menu-items",
                  ".region-mobile-overlay li.menu-item--expanded"
                );
              a.forEach(function (t) {
                t.addEventListener("click", function (e) {
                  e.preventDefault();
                  var i = document.querySelector(".region-mobile-overlay");
                  i &&
                    (t.classList.toggle("is-active"),
                    i.classList.toggle("is-active"),
                    document.body.classList.contains(n)
                      ? setTimeout(function () {
                          document.body.classList.remove(n);
                        }, 100)
                      : document.body.classList.add(n));
                });
              }),
                o.forEach(function (t) {
                  var e = t.querySelector(":scope > ul.menu"),
                    n = t.querySelector(":scope > span");
                  e &&
                    n &&
                    n.addEventListener("click", function (e) {
                      var n;
                      e.preventDefault(),
                        (n = t).classList.contains("menu-active")
                          ? n.classList.remove("menu-active")
                          : n.classList.add("menu-active");
                    });
                });
            },
          };
        })(Drupal, once);
      },
      904: () => {
        !(function (t, e) {
          var n = function (t) {
            t.classList.contains("show-overlay")
              ? (t.classList.remove("show-overlay"),
                document.body.classList.remove("vliz-search-overlay-open"))
              : ((t.style.display = "block"),
                setTimeout(function () {
                  t.classList.add("show-overlay"),
                    document.body.classList.add("vliz-search-overlay-open");
                }, 20),
                t.querySelector(".form-search").focus());
          };
          t.behaviors.vlizSearch = {
            attach: function (t, i) {
              var a = e("vliz-search-submit-icons", ".vliz-search-submit"),
                o = e(
                  "vliz-search-overlays",
                  ".block-vliz-search-block"
                ).shift();
              if (
                (a.forEach(function (t) {
                  t.addEventListener("click", function (e) {
                    e.preventDefault();
                    var n = t.closest("form");
                    n && n.submit();
                  });
                }),
                o)
              ) {
                var r = e(
                    "vliz-search-overlay-trigger",
                    ".vliz-search-trigger"
                  ).shift(),
                  s = o.querySelector(".close-search-overlay");
                document.body.addEventListener("keydown", function (t) {
                  "Escape" == t.key &&
                    o.classList.contains("show-overlay") &&
                    n(o);
                }),
                  o.addEventListener("transitionend", function () {
                    o.classList.contains("show-overlay") ||
                      setTimeout(function () {
                        o.style.display = "none";
                      }, 20);
                  }),
                  s.addEventListener("click", function (t) {
                    t.preventDefault(), n(o);
                  }),
                  r &&
                    r.addEventListener("click", function (t) {
                      t.preventDefault(), n(o);
                    });
              }
            },
          };
        })(Drupal, once);
      },
      206: (t, e) => {
        "use strict";
        var n = window,
          i =
            n.requestAnimationFrame ||
            n.webkitRequestAnimationFrame ||
            n.mozRequestAnimationFrame ||
            n.msRequestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            },
          a = window,
          o =
            a.cancelAnimationFrame ||
            a.mozCancelAnimationFrame ||
            function (t) {
              clearTimeout(t);
            };
        function r() {
          for (
            var t, e, n, i = arguments[0] || {}, a = 1, o = arguments.length;
            a < o;
            a++
          )
            if (null !== (t = arguments[a]))
              for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
          return i;
        }
        function s(t) {
          return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
        }
        function c(t, e, n, i) {
          if (i)
            try {
              t.setItem(e, n);
            } catch (t) {}
          return n;
        }
        function l() {
          var t = document,
            e = t.body;
          return e || ((e = t.createElement("body")).fake = !0), e;
        }
        var u = document.documentElement;
        function f(t) {
          var e = "";
          return (
            t.fake &&
              ((e = u.style.overflow),
              (t.style.background = ""),
              (t.style.overflow = u.style.overflow = "hidden"),
              u.appendChild(t)),
            e
          );
        }
        function d(t, e) {
          t.fake && (t.remove(), (u.style.overflow = e), u.offsetHeight);
        }
        function v(t, e, n, i) {
          "insertRule" in t
            ? t.insertRule(e + "{" + n + "}", i)
            : t.addRule(e, n, i);
        }
        function p(t) {
          return ("insertRule" in t ? t.cssRules : t.rules).length;
        }
        function m(t, e, n) {
          for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
        }
        var h = "classList" in document.createElement("_"),
          y = h
            ? function (t, e) {
                return t.classList.contains(e);
              }
            : function (t, e) {
                return t.className.indexOf(e) >= 0;
              },
          g = h
            ? function (t, e) {
                y(t, e) || t.classList.add(e);
              }
            : function (t, e) {
                y(t, e) || (t.className += " " + e);
              },
          b = h
            ? function (t, e) {
                y(t, e) && t.classList.remove(e);
              }
            : function (t, e) {
                y(t, e) && (t.className = t.className.replace(e, ""));
              };
        function x(t, e) {
          return t.hasAttribute(e);
        }
        function w(t, e) {
          return t.getAttribute(e);
        }
        function L(t) {
          return void 0 !== t.item;
        }
        function C(t, e) {
          if (
            ((t = L(t) || t instanceof Array ? t : [t]),
            "[object Object]" === Object.prototype.toString.call(e))
          )
            for (var n = t.length; n--; )
              for (var i in e) t[n].setAttribute(i, e[i]);
        }
        function T(t, e) {
          t = L(t) || t instanceof Array ? t : [t];
          for (
            var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
            i--;

          )
            for (var a = n; a--; ) t[i].removeAttribute(e[a]);
        }
        function M(t) {
          for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
          return e;
        }
        function E(t, e) {
          "none" !== t.style.display && (t.style.display = "none");
        }
        function k(t, e) {
          "none" === t.style.display && (t.style.display = "");
        }
        function S(t) {
          return "none" !== window.getComputedStyle(t).display;
        }
        function D(t) {
          if ("string" == typeof t) {
            var e = [t],
              n = t.charAt(0).toUpperCase() + t.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function (i) {
              ("ms" === i && "transform" !== t) || e.push(i + n);
            }),
              (t = e);
          }
          var i = document.createElement("fakeelement");
          t.length;
          for (var a = 0; a < t.length; a++) {
            var o = t[a];
            if (void 0 !== i.style[o]) return o;
          }
          return !1;
        }
        function N(t, e) {
          var n = !1;
          return (
            /^Webkit/.test(t)
              ? (n = "webkit" + e + "End")
              : /^O/.test(t)
              ? (n = "o" + e + "End")
              : t && (n = e.toLowerCase() + "end"),
            n
          );
        }
        var A = !1;
        try {
          var B = Object.defineProperty({}, "passive", {
            get: function () {
              A = !0;
            },
          });
          window.addEventListener("test", null, B);
        } catch (t) {}
        var O = !!A && { passive: !0 };
        function H(t, e, n) {
          for (var i in e) {
            var a = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && O;
            t.addEventListener(i, e[i], a);
          }
        }
        function z(t, e) {
          for (var n in e) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && O;
            t.removeEventListener(n, e[n], i);
          }
        }
        function P() {
          return {
            topics: {},
            on: function (t, e) {
              (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
            },
            off: function (t, e) {
              if (this.topics[t])
                for (var n = 0; n < this.topics[t].length; n++)
                  if (this.topics[t][n] === e) {
                    this.topics[t].splice(n, 1);
                    break;
                  }
            },
            emit: function (t, e) {
              (e.type = t),
                this.topics[t] &&
                  this.topics[t].forEach(function (n) {
                    n(e, t);
                  });
            },
          };
        }
        Object.keys ||
          (Object.keys = function (t) {
            var e = [];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e;
          }),
          "remove" in Element.prototype ||
            (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            });
        var I = function (t) {
          t = r(
            {
              container: ".slider",
              mode: "carousel",
              axis: "horizontal",
              items: 1,
              gutter: 0,
              edgePadding: 0,
              fixedWidth: !1,
              autoWidth: !1,
              viewportMax: !1,
              slideBy: 1,
              center: !1,
              controls: !0,
              controlsPosition: "top",
              controlsText: ["prev", "next"],
              controlsContainer: !1,
              prevButton: !1,
              nextButton: !1,
              nav: !0,
              navPosition: "top",
              navContainer: !1,
              navAsThumbnails: !1,
              arrowKeys: !1,
              speed: 300,
              autoplay: !1,
              autoplayPosition: "top",
              autoplayTimeout: 5e3,
              autoplayDirection: "forward",
              autoplayText: ["start", "stop"],
              autoplayHoverPause: !1,
              autoplayButton: !1,
              autoplayButtonOutput: !0,
              autoplayResetOnVisibility: !0,
              animateIn: "tns-fadeIn",
              animateOut: "tns-fadeOut",
              animateNormal: "tns-normal",
              animateDelay: !1,
              loop: !0,
              rewind: !1,
              autoHeight: !1,
              responsive: !1,
              lazyload: !1,
              lazyloadSelector: ".tns-lazy-img",
              touch: !0,
              mouseDrag: !1,
              swipeAngle: 15,
              nested: !1,
              preventActionWhenRunning: !1,
              preventScrollOnTouch: !1,
              freezable: !0,
              onInit: !1,
              useLocalStorage: !0,
              nonce: !1,
            },
            t || {}
          );
          var e = document,
            n = window,
            a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            u = {},
            h = t.useLocalStorage;
          if (h) {
            var L = navigator.userAgent,
              A = new Date();
            try {
              (u = n.localStorage)
                ? (u.setItem(A, A), (h = u.getItem(A) == A), u.removeItem(A))
                : (h = !1),
                h || (u = {});
            } catch (t) {
              h = !1;
            }
            h &&
              (u.tnsApp &&
                u.tnsApp !== L &&
                [
                  "tC",
                  "tPL",
                  "tMQ",
                  "tTf",
                  "t3D",
                  "tTDu",
                  "tTDe",
                  "tADu",
                  "tADe",
                  "tTE",
                  "tAE",
                ].forEach(function (t) {
                  u.removeItem(t);
                }),
              (localStorage.tnsApp = L));
          }
          var B = u.tC
              ? s(u.tC)
              : c(
                  u,
                  "tC",
                  (function () {
                    var t = document,
                      e = l(),
                      n = f(e),
                      i = t.createElement("div"),
                      a = !1;
                    e.appendChild(i);
                    try {
                      for (
                        var o,
                          r = "(10px * 10)",
                          s = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r],
                          c = 0;
                        c < 3;
                        c++
                      )
                        if (
                          ((o = s[c]),
                          (i.style.width = o),
                          100 === i.offsetWidth)
                        ) {
                          a = o.replace(r, "");
                          break;
                        }
                    } catch (t) {}
                    return e.fake ? d(e, n) : i.remove(), a;
                  })(),
                  h
                ),
            O = u.tPL
              ? s(u.tPL)
              : c(
                  u,
                  "tPL",
                  (function () {
                    var t,
                      e = document,
                      n = l(),
                      i = f(n),
                      a = e.createElement("div"),
                      o = e.createElement("div"),
                      r = "";
                    (a.className = "tns-t-subp2"), (o.className = "tns-t-ct");
                    for (var s = 0; s < 70; s++) r += "<div></div>";
                    return (
                      (o.innerHTML = r),
                      a.appendChild(o),
                      n.appendChild(a),
                      (t =
                        Math.abs(
                          a.getBoundingClientRect().left -
                            o.children[67].getBoundingClientRect().left
                        ) < 2),
                      n.fake ? d(n, i) : a.remove(),
                      t
                    );
                  })(),
                  h
                ),
            R = u.tMQ
              ? s(u.tMQ)
              : c(
                  u,
                  "tMQ",
                  (function () {
                    if (window.matchMedia || window.msMatchMedia) return !0;
                    var t,
                      e = document,
                      n = l(),
                      i = f(n),
                      a = e.createElement("div"),
                      o = e.createElement("style"),
                      r =
                        "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                    return (
                      (o.type = "text/css"),
                      (a.className = "tns-mq-test"),
                      n.appendChild(o),
                      n.appendChild(a),
                      o.styleSheet
                        ? (o.styleSheet.cssText = r)
                        : o.appendChild(e.createTextNode(r)),
                      (t = window.getComputedStyle
                        ? window.getComputedStyle(a).position
                        : a.currentStyle.position),
                      n.fake ? d(n, i) : a.remove(),
                      "absolute" === t
                    );
                  })(),
                  h
                ),
            W = u.tTf ? s(u.tTf) : c(u, "tTf", D("transform"), h),
            q = u.t3D
              ? s(u.t3D)
              : c(
                  u,
                  "t3D",
                  (function (t) {
                    if (!t) return !1;
                    if (!window.getComputedStyle) return !1;
                    var e,
                      n = document,
                      i = l(),
                      a = f(i),
                      o = n.createElement("p"),
                      r =
                        t.length > 9
                          ? "-" + t.slice(0, -9).toLowerCase() + "-"
                          : "";
                    return (
                      (r += "transform"),
                      i.insertBefore(o, null),
                      (o.style[t] = "translate3d(1px,1px,1px)"),
                      (e = window.getComputedStyle(o).getPropertyValue(r)),
                      i.fake ? d(i, a) : o.remove(),
                      void 0 !== e && e.length > 0 && "none" !== e
                    );
                  })(W),
                  h
                ),
            F = u.tTDu ? s(u.tTDu) : c(u, "tTDu", D("transitionDuration"), h),
            j = u.tTDe ? s(u.tTDe) : c(u, "tTDe", D("transitionDelay"), h),
            V = u.tADu ? s(u.tADu) : c(u, "tADu", D("animationDuration"), h),
            _ = u.tADe ? s(u.tADe) : c(u, "tADe", D("animationDelay"), h),
            G = u.tTE ? s(u.tTE) : c(u, "tTE", N(F, "Transition"), h),
            Q = u.tAE ? s(u.tAE) : c(u, "tAE", N(V, "Animation"), h),
            X = n.console && "function" == typeof n.console.warn,
            Y = [
              "container",
              "controlsContainer",
              "prevButton",
              "nextButton",
              "navContainer",
              "autoplayButton",
            ],
            K = {};
          if (
            (Y.forEach(function (n) {
              if ("string" == typeof t[n]) {
                var i = t[n],
                  a = e.querySelector(i);
                if (((K[n] = i), !a || !a.nodeName))
                  return void (X && console.warn("Can't find", t[n]));
                t[n] = a;
              }
            }),
            !(t.container.children.length < 1))
          ) {
            var J = t.responsive,
              U = t.nested,
              Z = "carousel" === t.mode;
            if (J) {
              0 in J && ((t = r(t, J[0])), delete J[0]);
              var $ = {};
              for (var tt in J) {
                var et = J[tt];
                (et = "number" == typeof et ? { items: et } : et), ($[tt] = et);
              }
              (J = $), ($ = null);
            }
            if (
              (Z ||
                (function t(e) {
                  for (var n in e)
                    Z ||
                      ("slideBy" === n && (e[n] = "page"),
                      "edgePadding" === n && (e[n] = !1),
                      "autoHeight" === n && (e[n] = !1)),
                      "responsive" === n && t(e[n]);
                })(t),
              !Z)
            ) {
              (t.axis = "horizontal"),
                (t.slideBy = "page"),
                (t.edgePadding = !1);
              var nt = t.animateIn,
                it = t.animateOut,
                at = t.animateDelay,
                ot = t.animateNormal;
            }
            var rt,
              st,
              ct = "horizontal" === t.axis,
              lt = e.createElement("div"),
              ut = e.createElement("div"),
              ft = t.container,
              dt = ft.parentNode,
              vt = ft.outerHTML,
              pt = ft.children,
              mt = pt.length,
              ht = Bn(),
              yt = !1;
            J && $n(), Z && (ft.className += " tns-vpfix");
            var gt,
              bt,
              xt,
              wt,
              Lt,
              Ct = t.autoWidth,
              Tt = In("fixedWidth"),
              Mt = In("edgePadding"),
              Et = In("gutter"),
              kt = zn(),
              St = In("center"),
              Dt = Ct ? 1 : Math.floor(In("items")),
              Nt = In("slideBy"),
              At = t.viewportMax || t.fixedWidthViewportWidth,
              Bt = In("arrowKeys"),
              Ot = In("speed"),
              Ht = t.rewind,
              zt = !Ht && t.loop,
              Pt = In("autoHeight"),
              It = In("controls"),
              Rt = In("controlsText"),
              Wt = In("nav"),
              qt = In("touch"),
              Ft = In("mouseDrag"),
              jt = In("autoplay"),
              Vt = In("autoplayTimeout"),
              _t = In("autoplayText"),
              Gt = In("autoplayHoverPause"),
              Qt = In("autoplayResetOnVisibility"),
              Xt =
                (null,
                (wt = In("nonce")),
                (Lt = document.createElement("style")),
                wt && Lt.setAttribute("nonce", wt),
                document.querySelector("head").appendChild(Lt),
                Lt.sheet ? Lt.sheet : Lt.styleSheet),
              Yt = t.lazyload,
              Kt = t.lazyloadSelector,
              Jt = [],
              Ut = zt
                ? ((bt = (function () {
                    if (Ct || (Tt && !At)) return mt - 1;
                    var e = Tt ? "fixedWidth" : "items",
                      n = [];
                    if (((Tt || t[e] < mt) && n.push(t[e]), J))
                      for (var i in J) {
                        var a = J[i][e];
                        a && (Tt || a < mt) && n.push(a);
                      }
                    return (
                      n.length || n.push(0),
                      Math.ceil(
                        Tt
                          ? At / Math.min.apply(null, n)
                          : Math.max.apply(null, n)
                      )
                    );
                  })()),
                  (xt = Z ? Math.ceil((5 * bt - mt) / 2) : 4 * bt - mt),
                  (xt = Math.max(bt, xt)),
                  Pn("edgePadding") ? xt + 1 : xt)
                : 0,
              Zt = Z ? mt + 2 * Ut : mt + Ut,
              $t = !((!Tt && !Ct) || zt),
              te = Tt ? Mi() : null,
              ee = !Z || !zt,
              ne = ct ? "left" : "top",
              ie = "",
              ae = "",
              oe = Tt
                ? function () {
                    return St && !zt ? mt - 1 : Math.ceil(-te / (Tt + Et));
                  }
                : Ct
                ? function () {
                    for (var t = 0; t < Zt; t++) if (gt[t] >= -te) return t;
                  }
                : function () {
                    return St && Z && !zt
                      ? mt - 1
                      : zt || Z
                      ? Math.max(0, Zt - Math.ceil(Dt))
                      : Zt - 1;
                  },
              re = Dn(In("startIndex")),
              se = re;
            Sn();
            var ce,
              le,
              ue,
              fe = 0,
              de = Ct ? null : oe(),
              ve = t.preventActionWhenRunning,
              pe = t.swipeAngle,
              me = !pe || "?",
              he = !1,
              ye = t.onInit,
              ge = new P(),
              be = " tns-slider tns-" + t.mode,
              xe =
                ft.id ||
                ((ue = window.tnsId),
                (window.tnsId = ue ? ue + 1 : 1),
                "tns" + window.tnsId),
              we = In("disable"),
              Le = !1,
              Ce = t.freezable,
              Te = !(!Ce || Ct) && Zn(),
              Me = !1,
              Ee = {
                click: Hi,
                keydown: function (t) {
                  t = ji(t);
                  var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                  e >= 0 &&
                    (0 === e
                      ? Ye.disabled || Hi(t, -1)
                      : Ke.disabled || Hi(t, 1));
                },
              },
              ke = {
                click: function (t) {
                  if (he) {
                    if (ve) return;
                    Bi();
                  }
                  for (var e = Vi((t = ji(t))); e !== $e && !x(e, "data-nav"); )
                    e = e.parentNode;
                  if (x(e, "data-nav")) {
                    var n = (an = Number(w(e, "data-nav"))),
                      i = Tt || Ct ? (n * mt) / en : n * Dt;
                    Oi(ze ? n : Math.min(Math.ceil(i), mt - 1), t),
                      on === n && (fn && Wi(), (an = -1));
                  }
                },
                keydown: function (t) {
                  t = ji(t);
                  var n = e.activeElement;
                  if (x(n, "data-nav")) {
                    var i = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(
                        t.keyCode
                      ),
                      o = Number(w(n, "data-nav"));
                    i >= 0 &&
                      (0 === i
                        ? o > 0 && Fi(Ze[o - 1])
                        : 1 === i
                        ? o < en - 1 && Fi(Ze[o + 1])
                        : ((an = o), Oi(o, t)));
                  }
                },
              },
              Se = {
                mouseover: function () {
                  fn && (Pi(), (dn = !0));
                },
                mouseout: function () {
                  dn && (zi(), (dn = !1));
                },
              },
              De = {
                visibilitychange: function () {
                  e.hidden ? fn && (Pi(), (pn = !0)) : pn && (zi(), (pn = !1));
                },
              },
              Ne = {
                keydown: function (t) {
                  t = ji(t);
                  var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                  e >= 0 && Hi(t, 0 === e ? -1 : 1);
                },
              },
              Ae = {
                touchstart: Xi,
                touchmove: Yi,
                touchend: Ji,
                touchcancel: Ji,
              },
              Be = {
                mousedown: Xi,
                mousemove: Yi,
                mouseup: Ji,
                mouseleave: Ji,
              },
              Oe = Pn("controls"),
              He = Pn("nav"),
              ze = !!Ct || t.navAsThumbnails,
              Pe = Pn("autoplay"),
              Ie = Pn("touch"),
              Re = Pn("mouseDrag"),
              We = "tns-slide-active",
              qe = "tns-slide-cloned",
              Fe = "tns-complete",
              je = {
                load: function (t) {
                  ci(Vi(t));
                },
                error: function (t) {
                  var e;
                  (e = Vi(t)), g(e, "failed"), li(e);
                },
              },
              Ve = "force" === t.preventScrollOnTouch;
            if (Oe)
              var _e,
                Ge,
                Qe = t.controlsContainer,
                Xe = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                Ye = t.prevButton,
                Ke = t.nextButton,
                Je = t.prevButton ? t.prevButton.outerHTML : "",
                Ue = t.nextButton ? t.nextButton.outerHTML : "";
            if (He)
              var Ze,
                $e = t.navContainer,
                tn = t.navContainer ? t.navContainer.outerHTML : "",
                en = Ct ? mt : Zi(),
                nn = 0,
                an = -1,
                on = An(),
                rn = on,
                sn = "tns-nav-active",
                cn = "Carousel Page ",
                ln = " (Current Slide)";
            if (Pe)
              var un,
                fn,
                dn,
                vn,
                pn,
                mn = "forward" === t.autoplayDirection ? 1 : -1,
                hn = t.autoplayButton,
                yn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                gn = [
                  "<span class='tns-visually-hidden'>",
                  " animation</span>",
                ];
            if (Ie || Re)
              var bn,
                xn,
                wn = {},
                Ln = {},
                Cn = !1,
                Tn = ct
                  ? function (t, e) {
                      return t.x - e.x;
                    }
                  : function (t, e) {
                      return t.y - e.y;
                    };
            Ct || kn(we || Te),
              W &&
                ((ne = W),
                (ie = "translate"),
                q
                  ? ((ie += ct ? "3d(" : "3d(0px, "),
                    (ae = ct ? ", 0px, 0px)" : ", 0px)"))
                  : ((ie += ct ? "X(" : "Y("), (ae = ")"))),
              Z && (ft.className = ft.className.replace("tns-vpfix", "")),
              (function () {
                if (
                  (Pn("gutter"),
                  (lt.className = "tns-outer"),
                  (ut.className = "tns-inner"),
                  (lt.id = xe + "-ow"),
                  (ut.id = xe + "-iw"),
                  "" === ft.id && (ft.id = xe),
                  (be += O || Ct ? " tns-subpixel" : " tns-no-subpixel"),
                  (be += B ? " tns-calc" : " tns-no-calc"),
                  Ct && (be += " tns-autowidth"),
                  (be += " tns-" + t.axis),
                  (ft.className += be),
                  Z
                    ? (((rt = e.createElement("div")).id = xe + "-mw"),
                      (rt.className = "tns-ovh"),
                      lt.appendChild(rt),
                      rt.appendChild(ut))
                    : lt.appendChild(ut),
                  Pt && ((rt || ut).className += " tns-ah"),
                  dt.insertBefore(lt, ft),
                  ut.appendChild(ft),
                  m(pt, function (t, e) {
                    g(t, "tns-item"),
                      t.id || (t.id = xe + "-item" + e),
                      !Z && ot && g(t, ot),
                      C(t, { "aria-hidden": "true", tabindex: "-1" });
                  }),
                  Ut)
                ) {
                  for (
                    var n = e.createDocumentFragment(),
                      i = e.createDocumentFragment(),
                      a = Ut;
                    a--;

                  ) {
                    var o = a % mt,
                      r = pt[o].cloneNode(!0);
                    if (
                      (g(r, qe), T(r, "id"), i.insertBefore(r, i.firstChild), Z)
                    ) {
                      var s = pt[mt - 1 - o].cloneNode(!0);
                      g(s, qe), T(s, "id"), n.appendChild(s);
                    }
                  }
                  ft.insertBefore(n, ft.firstChild),
                    ft.appendChild(i),
                    (pt = ft.children);
                }
              })(),
              (function () {
                if (!Z)
                  for (var e = re, i = re + Math.min(mt, Dt); e < i; e++) {
                    var a = pt[e];
                    (a.style.left = (100 * (e - re)) / Dt + "%"),
                      g(a, nt),
                      b(a, ot);
                  }
                if (
                  (ct &&
                    (O || Ct
                      ? (v(
                          Xt,
                          "#" + xe + " > .tns-item",
                          "font-size:" +
                            n.getComputedStyle(pt[0]).fontSize +
                            ";",
                          p(Xt)
                        ),
                        v(Xt, "#" + xe, "font-size:0;", p(Xt)))
                      : Z &&
                        m(pt, function (t, e) {
                          t.style.marginLeft = (function (t) {
                            return B
                              ? B + "(" + 100 * t + "% / " + Zt + ")"
                              : (100 * t) / Zt + "%";
                          })(e);
                        })),
                  R)
                ) {
                  if (F) {
                    var o = rt && t.autoHeight ? Vn(t.speed) : "";
                    v(Xt, "#" + xe + "-mw", o, p(Xt));
                  }
                  (o = Rn(
                    t.edgePadding,
                    t.gutter,
                    t.fixedWidth,
                    t.speed,
                    t.autoHeight
                  )),
                    v(Xt, "#" + xe + "-iw", o, p(Xt)),
                    Z &&
                      ((o =
                        ct && !Ct
                          ? "width:" + Wn(t.fixedWidth, t.gutter, t.items) + ";"
                          : ""),
                      F && (o += Vn(Ot)),
                      v(Xt, "#" + xe, o, p(Xt))),
                    (o = ct && !Ct ? qn(t.fixedWidth, t.gutter, t.items) : ""),
                    t.gutter && (o += Fn(t.gutter)),
                    Z || (F && (o += Vn(Ot)), V && (o += _n(Ot))),
                    o && v(Xt, "#" + xe + " > .tns-item", o, p(Xt));
                } else
                  Z && Pt && (rt.style[F] = Ot / 1e3 + "s"),
                    (ut.style.cssText = Rn(Mt, Et, Tt, Pt)),
                    Z && ct && !Ct && (ft.style.width = Wn(Tt, Et, Dt)),
                    (o = ct && !Ct ? qn(Tt, Et, Dt) : ""),
                    Et && (o += Fn(Et)),
                    o && v(Xt, "#" + xe + " > .tns-item", o, p(Xt));
                if (J && R)
                  for (var r in J) {
                    r = parseInt(r);
                    var s = J[r],
                      c = ((o = ""), ""),
                      l = "",
                      u = "",
                      f = "",
                      d = Ct ? null : In("items", r),
                      h = In("fixedWidth", r),
                      y = In("speed", r),
                      x = In("edgePadding", r),
                      w = In("autoHeight", r),
                      L = In("gutter", r);
                    F &&
                      rt &&
                      In("autoHeight", r) &&
                      "speed" in s &&
                      (c = "#" + xe + "-mw{" + Vn(y) + "}"),
                      ("edgePadding" in s || "gutter" in s) &&
                        (l = "#" + xe + "-iw{" + Rn(x, L, h, y, w) + "}"),
                      Z &&
                        ct &&
                        !Ct &&
                        ("fixedWidth" in s ||
                          "items" in s ||
                          (Tt && "gutter" in s)) &&
                        (u = "width:" + Wn(h, L, d) + ";"),
                      F && "speed" in s && (u += Vn(y)),
                      u && (u = "#" + xe + "{" + u + "}"),
                      ("fixedWidth" in s ||
                        (Tt && "gutter" in s) ||
                        (!Z && "items" in s)) &&
                        (f += qn(h, L, d)),
                      "gutter" in s && (f += Fn(L)),
                      !Z &&
                        "speed" in s &&
                        (F && (f += Vn(y)), V && (f += _n(y))),
                      f && (f = "#" + xe + " > .tns-item{" + f + "}"),
                      (o = c + l + u + f) &&
                        Xt.insertRule(
                          "@media (min-width: " + r / 16 + "em) {" + o + "}",
                          Xt.cssRules.length
                        );
                  }
              })(),
              Gn();
            var Mn = zt
                ? Z
                  ? function () {
                      var t = fe,
                        e = de;
                      (t += Nt),
                        (e -= Nt),
                        Mt
                          ? ((t += 1), (e -= 1))
                          : Tt && (kt + Et) % (Tt + Et) && (e -= 1),
                        Ut && (re > e ? (re -= mt) : re < t && (re += mt));
                    }
                  : function () {
                      if (re > de) for (; re >= fe + mt; ) re -= mt;
                      else if (re < fe) for (; re <= de - mt; ) re += mt;
                    }
                : function () {
                    re = Math.max(fe, Math.min(de, re));
                  },
              En = Z
                ? function () {
                    var t, e, n, i, a, o, r, s, c, l, u;
                    Ci(ft, ""),
                      F || !Ot
                        ? (Si(), (Ot && S(ft)) || Bi())
                        : ((t = ft),
                          (e = ne),
                          (n = ie),
                          (i = ae),
                          (a = Ei()),
                          (o = Ot),
                          (r = Bi),
                          (s = Math.min(o, 10)),
                          (c = a.indexOf("%") >= 0 ? "%" : "px"),
                          (a = a.replace(c, "")),
                          (l = Number(
                            t.style[e]
                              .replace(n, "")
                              .replace(i, "")
                              .replace(c, "")
                          )),
                          (u = ((a - l) / o) * s),
                          setTimeout(function a() {
                            (o -= s),
                              (l += u),
                              (t.style[e] = n + l + c + i),
                              o > 0 ? setTimeout(a, s) : r();
                          }, s)),
                      ct || Ui();
                  }
                : function () {
                    Jt = [];
                    var t = {};
                    (t[G] = t[Q] = Bi),
                      z(pt[se], t),
                      H(pt[re], t),
                      Di(se, nt, it, !0),
                      Di(re, ot, nt),
                      (G && Q && Ot && S(ft)) || Bi();
                  };
            return {
              version: "2.9.4",
              getInfo: ta,
              events: ge,
              goTo: Oi,
              play: function () {
                jt && !fn && (Ri(), (vn = !1));
              },
              pause: function () {
                fn && (Wi(), (vn = !0));
              },
              isOn: yt,
              updateSliderHeight: mi,
              refresh: Gn,
              destroy: function () {
                if (
                  ((Xt.disabled = !0),
                  Xt.ownerNode && Xt.ownerNode.remove(),
                  z(n, { resize: Jn }),
                  Bt && z(e, Ne),
                  Qe && z(Qe, Ee),
                  $e && z($e, ke),
                  z(ft, Se),
                  z(ft, De),
                  hn && z(hn, { click: qi }),
                  jt && clearInterval(un),
                  Z && G)
                ) {
                  var i = {};
                  (i[G] = Bi), z(ft, i);
                }
                qt && z(ft, Ae), Ft && z(ft, Be);
                var a = [vt, Xe, Je, Ue, tn, yn];
                for (var o in (Y.forEach(function (e, n) {
                  var i = "container" === e ? lt : t[e];
                  if ("object" == typeof i && i) {
                    var o =
                        !!i.previousElementSibling && i.previousElementSibling,
                      r = i.parentNode;
                    (i.outerHTML = a[n]),
                      (t[e] = o ? o.nextElementSibling : r.firstElementChild);
                  }
                }),
                (Y =
                  nt =
                  it =
                  at =
                  ot =
                  ct =
                  lt =
                  ut =
                  ft =
                  dt =
                  vt =
                  pt =
                  mt =
                  st =
                  ht =
                  Ct =
                  Tt =
                  Mt =
                  Et =
                  kt =
                  Dt =
                  Nt =
                  At =
                  Bt =
                  Ot =
                  Ht =
                  zt =
                  Pt =
                  Xt =
                  Yt =
                  gt =
                  Jt =
                  Ut =
                  Zt =
                  $t =
                  te =
                  ee =
                  ne =
                  ie =
                  ae =
                  oe =
                  re =
                  se =
                  fe =
                  de =
                  pe =
                  me =
                  he =
                  ye =
                  ge =
                  be =
                  xe =
                  we =
                  Le =
                  Ce =
                  Te =
                  Me =
                  Ee =
                  ke =
                  Se =
                  De =
                  Ne =
                  Ae =
                  Be =
                  Oe =
                  He =
                  ze =
                  Pe =
                  Ie =
                  Re =
                  We =
                  Fe =
                  je =
                  ce =
                  It =
                  Rt =
                  Qe =
                  Xe =
                  Ye =
                  Ke =
                  _e =
                  Ge =
                  Wt =
                  $e =
                  tn =
                  Ze =
                  en =
                  nn =
                  an =
                  on =
                  rn =
                  sn =
                  cn =
                  ln =
                  jt =
                  Vt =
                  mn =
                  _t =
                  Gt =
                  hn =
                  yn =
                  Qt =
                  gn =
                  un =
                  fn =
                  dn =
                  vn =
                  pn =
                  wn =
                  Ln =
                  bn =
                  Cn =
                  xn =
                  Tn =
                  qt =
                  Ft =
                    null),
                this))
                  "rebuild" !== o && (this[o] = null);
                yt = !1;
              },
              rebuild: function () {
                return I(r(t, K));
              },
            };
          }
          function kn(t) {
            t && (It = Wt = qt = Ft = Bt = jt = Gt = Qt = !1);
          }
          function Sn() {
            for (var t = Z ? re - Ut : re; t < 0; ) t += mt;
            return (t % mt) + 1;
          }
          function Dn(t) {
            return (
              (t = t ? Math.max(0, Math.min(zt ? mt - 1 : mt - Dt, t)) : 0),
              Z ? t + Ut : t
            );
          }
          function Nn(t) {
            for (null == t && (t = re), Z && (t -= Ut); t < 0; ) t += mt;
            return Math.floor(t % mt);
          }
          function An() {
            var t,
              e = Nn();
            return (
              (t = ze
                ? e
                : Tt || Ct
                ? Math.ceil(((e + 1) * en) / mt - 1)
                : Math.floor(e / Dt)),
              !zt && Z && re === de && (t = en - 1),
              t
            );
          }
          function Bn() {
            return (
              n.innerWidth ||
              e.documentElement.clientWidth ||
              e.body.clientWidth
            );
          }
          function On(t) {
            return "top" === t ? "afterbegin" : "beforeend";
          }
          function Hn(t) {
            if (null != t) {
              var n,
                i,
                a = e.createElement("div");
              return (
                t.appendChild(a),
                (i = (n = a.getBoundingClientRect()).right - n.left),
                a.remove(),
                i ||
                  (null !== t.parentNode.parentNode ? Hn(t.parentNode) : void 0)
              );
            }
          }
          function zn() {
            var t = Mt ? 2 * Mt - Et : 0;
            return Hn(dt) - t;
          }
          function Pn(e) {
            if (t[e]) return !0;
            if (J) for (var n in J) if (J[n][e]) return !0;
            return !1;
          }
          function In(e, n) {
            if ((null == n && (n = ht), "items" === e && Tt))
              return Math.floor((kt + Et) / (Tt + Et)) || 1;
            var i = t[e];
            if (J)
              for (var a in J) n >= parseInt(a) && e in J[a] && (i = J[a][e]);
            return (
              "slideBy" === e && "page" === i && (i = In("items")),
              Z || ("slideBy" !== e && "items" !== e) || (i = Math.floor(i)),
              i
            );
          }
          function Rn(t, e, n, i, a) {
            var o = "";
            if (void 0 !== t) {
              var r = t;
              e && (r -= e),
                (o = ct
                  ? "margin: 0 " + r + "px 0 " + t + "px;"
                  : "margin: " + t + "px 0 " + r + "px 0;");
            } else if (e && !n) {
              var s = "-" + e + "px";
              o = "margin: 0 " + (ct ? s + " 0 0" : "0 " + s + " 0") + ";";
            }
            return !Z && a && F && i && (o += Vn(i)), o;
          }
          function Wn(t, e, n) {
            return t
              ? (t + e) * Zt + "px"
              : B
              ? B + "(" + 100 * Zt + "% / " + n + ")"
              : (100 * Zt) / n + "%";
          }
          function qn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
              Z || (n = Math.floor(n));
              var a = Z ? Zt : n;
              i = B ? B + "(100% / " + a + ")" : 100 / a + "%";
            }
            return (
              (i = "width:" + i), "inner" !== U ? i + ";" : i + " !important;"
            );
          }
          function Fn(t) {
            var e = "";
            return (
              !1 !== t &&
                (e =
                  (ct ? "padding-" : "margin-") +
                  (ct ? "right" : "bottom") +
                  ": " +
                  t +
                  "px;"),
              e
            );
          }
          function jn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"), n;
          }
          function Vn(t) {
            return jn(F, 18) + "transition-duration:" + t / 1e3 + "s;";
          }
          function _n(t) {
            return jn(V, 17) + "animation-duration:" + t / 1e3 + "s;";
          }
          function Gn() {
            if (Pn("autoHeight") || Ct || !ct) {
              var t = ft.querySelectorAll("img");
              m(t, function (t) {
                var e = t.src;
                Yt ||
                  (e && e.indexOf("data:image") < 0
                    ? ((t.src = ""), H(t, je), g(t, "loading"), (t.src = e))
                    : ci(t));
              }),
                i(function () {
                  di(M(t), function () {
                    ce = !0;
                  });
                }),
                Pn("autoHeight") && (t = ui(re, Math.min(re + Dt - 1, Zt - 1))),
                Yt
                  ? Qn()
                  : i(function () {
                      di(M(t), Qn);
                    });
            } else Z && ki(), Yn(), Kn();
          }
          function Qn() {
            if (Ct && mt > 1) {
              var t = zt ? re : mt - 1;
              !(function e() {
                var n = pt[t].getBoundingClientRect().left,
                  i = pt[t - 1].getBoundingClientRect().right;
                Math.abs(n - i) <= 1
                  ? Xn()
                  : setTimeout(function () {
                      e();
                    }, 16);
              })();
            } else Xn();
          }
          function Xn() {
            (ct && !Ct) ||
              (hi(),
              Ct
                ? ((te = Mi()), Ce && (Te = Zn()), (de = oe()), kn(we || Te))
                : Ui()),
              Z && ki(),
              Yn(),
              Kn();
          }
          function Yn() {
            if (
              (yi(),
              lt.insertAdjacentHTML(
                "afterbegin",
                '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
                  oi() +
                  "</span>  of " +
                  mt +
                  "</div>"
              ),
              (le = lt.querySelector(".tns-liveregion .current")),
              Pe)
            ) {
              var e = jt ? "stop" : "start";
              hn
                ? C(hn, { "data-action": e })
                : t.autoplayButtonOutput &&
                  (lt.insertAdjacentHTML(
                    On(t.autoplayPosition),
                    '<button type="button" data-action="' +
                      e +
                      '">' +
                      gn[0] +
                      e +
                      gn[1] +
                      _t[0] +
                      "</button>"
                  ),
                  (hn = lt.querySelector("[data-action]"))),
                hn && H(hn, { click: qi }),
                jt && (Ri(), Gt && H(ft, Se), Qt && H(ft, De));
            }
            if (He) {
              if ($e)
                C($e, { "aria-label": "Carousel Pagination" }),
                  m((Ze = $e.children), function (t, e) {
                    C(t, {
                      "data-nav": e,
                      tabindex: "-1",
                      "aria-label": cn + (e + 1),
                      "aria-controls": xe,
                    });
                  });
              else {
                for (
                  var n = "", i = ze ? "" : 'style="display:none"', a = 0;
                  a < mt;
                  a++
                )
                  n +=
                    '<button type="button" data-nav="' +
                    a +
                    '" tabindex="-1" aria-controls="' +
                    xe +
                    '" ' +
                    i +
                    ' aria-label="' +
                    cn +
                    (a + 1) +
                    '"></button>';
                (n =
                  '<div class="tns-nav" aria-label="Carousel Pagination">' +
                  n +
                  "</div>"),
                  lt.insertAdjacentHTML(On(t.navPosition), n),
                  ($e = lt.querySelector(".tns-nav")),
                  (Ze = $e.children);
              }
              if (($i(), F)) {
                var o = F.substring(0, F.length - 18).toLowerCase(),
                  r = "transition: all " + Ot / 1e3 + "s";
                o && (r = "-" + o + "-" + r),
                  v(Xt, "[aria-controls^=" + xe + "-item]", r, p(Xt));
              }
              C(Ze[on], { "aria-label": cn + (on + 1) + ln }),
                T(Ze[on], "tabindex"),
                g(Ze[on], sn),
                H($e, ke);
            }
            Oe &&
              (Qe ||
                (Ye && Ke) ||
                (lt.insertAdjacentHTML(
                  On(t.controlsPosition),
                  '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                    xe +
                    '">' +
                    Rt[0] +
                    '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                    xe +
                    '">' +
                    Rt[1] +
                    "</button></div>"
                ),
                (Qe = lt.querySelector(".tns-controls"))),
              (Ye && Ke) || ((Ye = Qe.children[0]), (Ke = Qe.children[1])),
              t.controlsContainer &&
                C(Qe, { "aria-label": "Carousel Navigation", tabindex: "0" }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                C([Ye, Ke], { "aria-controls": xe, tabindex: "-1" }),
              (t.controlsContainer || (t.prevButton && t.nextButton)) &&
                (C(Ye, { "data-controls": "prev" }),
                C(Ke, { "data-controls": "next" })),
              (_e = bi(Ye)),
              (Ge = bi(Ke)),
              Li(),
              Qe ? H(Qe, Ee) : (H(Ye, Ee), H(Ke, Ee))),
              ti();
          }
          function Kn() {
            if (Z && G) {
              var i = {};
              (i[G] = Bi), H(ft, i);
            }
            qt && H(ft, Ae, t.preventScrollOnTouch),
              Ft && H(ft, Be),
              Bt && H(e, Ne),
              "inner" === U
                ? ge.on("outerResized", function () {
                    Un(), ge.emit("innerLoaded", ta());
                  })
                : (J || Tt || Ct || Pt || !ct) && H(n, { resize: Jn }),
              Pt && ("outer" === U ? ge.on("innerLoaded", fi) : we || fi()),
              si(),
              we ? ii() : Te && ni(),
              ge.on("indexChanged", vi),
              "inner" === U && ge.emit("innerLoaded", ta()),
              "function" == typeof ye && ye(ta()),
              (yt = !0);
          }
          function Jn(t) {
            i(function () {
              Un(ji(t));
            });
          }
          function Un(n) {
            if (yt) {
              "outer" === U && ge.emit("outerResized", ta(n)), (ht = Bn());
              var i,
                a = st,
                o = !1;
              J &&
                ($n(), (i = a !== st) && ge.emit("newBreakpointStart", ta(n)));
              var r,
                s,
                c = Dt,
                l = we,
                u = Te,
                f = Bt,
                d = It,
                h = Wt,
                y = qt,
                x = Ft,
                w = jt,
                L = Gt,
                C = Qt,
                T = re;
              if (i) {
                var M = Tt,
                  S = Pt,
                  D = Rt,
                  N = St,
                  A = _t;
                if (!R)
                  var B = Et,
                    O = Mt;
              }
              if (
                ((Bt = In("arrowKeys")),
                (It = In("controls")),
                (Wt = In("nav")),
                (qt = In("touch")),
                (St = In("center")),
                (Ft = In("mouseDrag")),
                (jt = In("autoplay")),
                (Gt = In("autoplayHoverPause")),
                (Qt = In("autoplayResetOnVisibility")),
                i &&
                  ((we = In("disable")),
                  (Tt = In("fixedWidth")),
                  (Ot = In("speed")),
                  (Pt = In("autoHeight")),
                  (Rt = In("controlsText")),
                  (_t = In("autoplayText")),
                  (Vt = In("autoplayTimeout")),
                  R || ((Mt = In("edgePadding")), (Et = In("gutter")))),
                kn(we),
                (kt = zn()),
                (ct && !Ct) || we || (hi(), ct || (Ui(), (o = !0))),
                (Tt || Ct) && ((te = Mi()), (de = oe())),
                (i || Tt) &&
                  ((Dt = In("items")),
                  (Nt = In("slideBy")),
                  (s = Dt !== c) && (Tt || Ct || (de = oe()), Mn())),
                i &&
                  we !== l &&
                  (we
                    ? ii()
                    : (function () {
                        if (Le) {
                          if (
                            ((Xt.disabled = !1), (ft.className += be), ki(), zt)
                          )
                            for (var t = Ut; t--; )
                              Z && k(pt[t]), k(pt[Zt - t - 1]);
                          if (!Z)
                            for (var e = re, n = re + mt; e < n; e++) {
                              var i = pt[e],
                                a = e < re + Dt ? nt : ot;
                              (i.style.left = (100 * (e - re)) / Dt + "%"),
                                g(i, a);
                            }
                          ei(), (Le = !1);
                        }
                      })()),
                Ce &&
                  (i || Tt || Ct) &&
                  (Te = Zn()) !== u &&
                  (Te
                    ? (Si(Ei(Dn(0))), ni())
                    : ((function () {
                        if (Me) {
                          if ((Mt && R && (ut.style.margin = ""), Ut))
                            for (var t = "tns-transparent", e = Ut; e--; )
                              Z && b(pt[e], t), b(pt[Zt - e - 1], t);
                          ei(), (Me = !1);
                        }
                      })(),
                      (o = !0))),
                kn(we || Te),
                jt || (Gt = Qt = !1),
                Bt !== f && (Bt ? H(e, Ne) : z(e, Ne)),
                It !== d &&
                  (It
                    ? Qe
                      ? k(Qe)
                      : (Ye && k(Ye), Ke && k(Ke))
                    : Qe
                    ? E(Qe)
                    : (Ye && E(Ye), Ke && E(Ke))),
                Wt !== h && (Wt ? (k($e), $i()) : E($e)),
                qt !== y &&
                  (qt ? H(ft, Ae, t.preventScrollOnTouch) : z(ft, Ae)),
                Ft !== x && (Ft ? H(ft, Be) : z(ft, Be)),
                jt !== w &&
                  (jt
                    ? (hn && k(hn), fn || vn || Ri())
                    : (hn && E(hn), fn && Wi())),
                Gt !== L && (Gt ? H(ft, Se) : z(ft, Se)),
                Qt !== C && (Qt ? H(e, De) : z(e, De)),
                i)
              ) {
                if (
                  ((Tt === M && St === N) || (o = !0),
                  Pt !== S && (Pt || (ut.style.height = "")),
                  It &&
                    Rt !== D &&
                    ((Ye.innerHTML = Rt[0]), (Ke.innerHTML = Rt[1])),
                  hn && _t !== A)
                ) {
                  var P = jt ? 1 : 0,
                    I = hn.innerHTML,
                    W = I.length - A[P].length;
                  I.substring(W) === A[P] &&
                    (hn.innerHTML = I.substring(0, W) + _t[P]);
                }
              } else St && (Tt || Ct) && (o = !0);
              if (
                ((s || (Tt && !Ct)) && ((en = Zi()), $i()),
                (r = re !== T)
                  ? (ge.emit("indexChanged", ta()), (o = !0))
                  : s
                  ? r || vi()
                  : (Tt || Ct) && (si(), yi(), ai()),
                s &&
                  !Z &&
                  (function () {
                    for (var t = re + Math.min(mt, Dt), e = Zt; e--; ) {
                      var n = pt[e];
                      e >= re && e < t
                        ? (g(n, "tns-moving"),
                          (n.style.left = (100 * (e - re)) / Dt + "%"),
                          g(n, nt),
                          b(n, ot))
                        : n.style.left &&
                          ((n.style.left = ""), g(n, ot), b(n, nt)),
                        b(n, it);
                    }
                    setTimeout(function () {
                      m(pt, function (t) {
                        b(t, "tns-moving");
                      });
                    }, 300);
                  })(),
                !we && !Te)
              ) {
                if (
                  i &&
                  !R &&
                  ((Mt === O && Et === B) ||
                    (ut.style.cssText = Rn(Mt, Et, Tt, Ot, Pt)),
                  ct)
                ) {
                  Z && (ft.style.width = Wn(Tt, Et, Dt));
                  var q = qn(Tt, Et, Dt) + Fn(Et);
                  !(function (t, e) {
                    "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
                  })(Xt, p(Xt) - 1),
                    v(Xt, "#" + xe + " > .tns-item", q, p(Xt));
                }
                Pt && fi(), o && (ki(), (se = re));
              }
              i && ge.emit("newBreakpointEnd", ta(n));
            }
          }
          function Zn() {
            if (!Tt && !Ct) return mt <= (St ? Dt - (Dt - 1) / 2 : Dt);
            var t = Tt ? (Tt + Et) * mt : gt[mt],
              e = Mt ? kt + 2 * Mt : kt + Et;
            return (
              St &&
                (e -= Tt
                  ? (kt - Tt) / 2
                  : (kt - (gt[re + 1] - gt[re] - Et)) / 2),
              t <= e
            );
          }
          function $n() {
            for (var t in ((st = 0), J)) (t = parseInt(t)), ht >= t && (st = t);
          }
          function ti() {
            !jt && hn && E(hn),
              !Wt && $e && E($e),
              It || (Qe ? E(Qe) : (Ye && E(Ye), Ke && E(Ke)));
          }
          function ei() {
            jt && hn && k(hn),
              Wt && $e && k($e),
              It && (Qe ? k(Qe) : (Ye && k(Ye), Ke && k(Ke)));
          }
          function ni() {
            if (!Me) {
              if ((Mt && (ut.style.margin = "0px"), Ut))
                for (var t = "tns-transparent", e = Ut; e--; )
                  Z && g(pt[e], t), g(pt[Zt - e - 1], t);
              ti(), (Me = !0);
            }
          }
          function ii() {
            if (!Le) {
              if (
                ((Xt.disabled = !0),
                (ft.className = ft.className.replace(be.substring(1), "")),
                T(ft, ["style"]),
                zt)
              )
                for (var t = Ut; t--; ) Z && E(pt[t]), E(pt[Zt - t - 1]);
              if (((ct && Z) || T(ut, ["style"]), !Z))
                for (var e = re, n = re + mt; e < n; e++) {
                  var i = pt[e];
                  T(i, ["style"]), b(i, nt), b(i, ot);
                }
              ti(), (Le = !0);
            }
          }
          function ai() {
            var t = oi();
            le.innerHTML !== t && (le.innerHTML = t);
          }
          function oi() {
            var t = ri(),
              e = t[0] + 1,
              n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n;
          }
          function ri(t) {
            null == t && (t = Ei());
            var e,
              n,
              i,
              a = re;
            if (
              (St || Mt
                ? (Ct || Tt) &&
                  ((n = -(parseFloat(t) + Mt)), (i = n + kt + 2 * Mt))
                : Ct && ((n = gt[re]), (i = n + kt)),
              Ct)
            )
              gt.forEach(function (t, o) {
                o < Zt &&
                  ((St || Mt) && t <= n + 0.5 && (a = o),
                  i - t >= 0.5 && (e = o));
              });
            else {
              if (Tt) {
                var o = Tt + Et;
                St || Mt
                  ? ((a = Math.floor(n / o)), (e = Math.ceil(i / o - 1)))
                  : (e = a + Math.ceil(kt / o) - 1);
              } else if (St || Mt) {
                var r = Dt - 1;
                if (
                  (St ? ((a -= r / 2), (e = re + r / 2)) : (e = re + r), Mt)
                ) {
                  var s = (Mt * Dt) / kt;
                  (a -= s), (e += s);
                }
                (a = Math.floor(a)), (e = Math.ceil(e));
              } else e = a + Dt - 1;
              (a = Math.max(a, 0)), (e = Math.min(e, Zt - 1));
            }
            return [a, e];
          }
          function si() {
            if (Yt && !we) {
              var t = ri();
              t.push(Kt),
                ui.apply(null, t).forEach(function (t) {
                  if (!y(t, Fe)) {
                    var e = {};
                    (e[G] = function (t) {
                      t.stopPropagation();
                    }),
                      H(t, e),
                      H(t, je),
                      (t.src = w(t, "data-src"));
                    var n = w(t, "data-srcset");
                    n && (t.srcset = n), g(t, "loading");
                  }
                });
            }
          }
          function ci(t) {
            g(t, "loaded"), li(t);
          }
          function li(t) {
            g(t, Fe), b(t, "loading"), z(t, je);
          }
          function ui(t, e, n) {
            var i = [];
            for (n || (n = "img"); t <= e; )
              m(pt[t].querySelectorAll(n), function (t) {
                i.push(t);
              }),
                t++;
            return i;
          }
          function fi() {
            var t = ui.apply(null, ri());
            i(function () {
              di(t, mi);
            });
          }
          function di(t, e) {
            return ce
              ? e()
              : (t.forEach(function (e, n) {
                  !Yt && e.complete && li(e), y(e, Fe) && t.splice(n, 1);
                }),
                t.length
                  ? void i(function () {
                      di(t, e);
                    })
                  : e());
          }
          function vi() {
            si(),
              yi(),
              ai(),
              Li(),
              (function () {
                if (Wt && ((on = an >= 0 ? an : An()), (an = -1), on !== rn)) {
                  var t = Ze[rn],
                    e = Ze[on];
                  C(t, { tabindex: "-1", "aria-label": cn + (rn + 1) }),
                    b(t, sn),
                    C(e, { "aria-label": cn + (on + 1) + ln }),
                    T(e, "tabindex"),
                    g(e, sn),
                    (rn = on);
                }
              })();
          }
          function pi(t, e) {
            for (var n = [], i = t, a = Math.min(t + e, Zt); i < a; i++)
              n.push(pt[i].offsetHeight);
            return Math.max.apply(null, n);
          }
          function mi() {
            var t = Pt ? pi(re, Dt) : pi(Ut, mt),
              e = rt || ut;
            e.style.height !== t && (e.style.height = t + "px");
          }
          function hi() {
            gt = [0];
            var t = ct ? "left" : "top",
              e = ct ? "right" : "bottom",
              n = pt[0].getBoundingClientRect()[t];
            m(pt, function (i, a) {
              a && gt.push(i.getBoundingClientRect()[t] - n),
                a === Zt - 1 && gt.push(i.getBoundingClientRect()[e] - n);
            });
          }
          function yi() {
            var t = ri(),
              e = t[0],
              n = t[1];
            m(pt, function (t, i) {
              i >= e && i <= n
                ? x(t, "aria-hidden") &&
                  (T(t, ["aria-hidden", "tabindex"]), g(t, We))
                : x(t, "aria-hidden") ||
                  (C(t, { "aria-hidden": "true", tabindex: "-1" }), b(t, We));
            });
          }
          function gi(t) {
            return t.nodeName.toLowerCase();
          }
          function bi(t) {
            return "button" === gi(t);
          }
          function xi(t) {
            return "true" === t.getAttribute("aria-disabled");
          }
          function wi(t, e, n) {
            t
              ? (e.disabled = n)
              : e.setAttribute("aria-disabled", n.toString());
          }
          function Li() {
            if (It && !Ht && !zt) {
              var t = _e ? Ye.disabled : xi(Ye),
                e = Ge ? Ke.disabled : xi(Ke),
                n = re <= fe,
                i = !Ht && re >= de;
              n && !t && wi(_e, Ye, !0),
                !n && t && wi(_e, Ye, !1),
                i && !e && wi(Ge, Ke, !0),
                !i && e && wi(Ge, Ke, !1);
            }
          }
          function Ci(t, e) {
            F && (t.style[F] = e);
          }
          function Ti(t) {
            return (
              null == t && (t = re),
              Ct
                ? (kt - (Mt ? Et : 0) - (gt[t + 1] - gt[t] - Et)) / 2
                : Tt
                ? (kt - Tt) / 2
                : (Dt - 1) / 2
            );
          }
          function Mi() {
            var t = kt + (Mt ? Et : 0) - (Tt ? (Tt + Et) * Zt : gt[Zt]);
            return (
              St &&
                !zt &&
                (t = Tt
                  ? -(Tt + Et) * (Zt - 1) - Ti()
                  : Ti(Zt - 1) - gt[Zt - 1]),
              t > 0 && (t = 0),
              t
            );
          }
          function Ei(t) {
            var e;
            if ((null == t && (t = re), ct && !Ct))
              if (Tt) (e = -(Tt + Et) * t), St && (e += Ti());
              else {
                var n = W ? Zt : Dt;
                St && (t -= Ti()), (e = (100 * -t) / n);
              }
            else (e = -gt[t]), St && Ct && (e += Ti());
            return (
              $t && (e = Math.max(e, te)), e + (!ct || Ct || Tt ? "px" : "%")
            );
          }
          function ki(t) {
            Ci(ft, "0s"), Si(t);
          }
          function Si(t) {
            null == t && (t = Ei()), (ft.style[ne] = ie + t + ae);
          }
          function Di(t, e, n, i) {
            var a = t + Dt;
            zt || (a = Math.min(a, Zt));
            for (var o = t; o < a; o++) {
              var r = pt[o];
              i || (r.style.left = (100 * (o - re)) / Dt + "%"),
                at &&
                  j &&
                  (r.style[j] = r.style[_] = (at * (o - t)) / 1e3 + "s"),
                b(r, e),
                g(r, n),
                i && Jt.push(r);
            }
          }
          function Ni(t, e) {
            ee && Mn(),
              (re !== se || e) &&
                (ge.emit("indexChanged", ta()),
                ge.emit("transitionStart", ta()),
                Pt && fi(),
                fn && t && ["click", "keydown"].indexOf(t.type) >= 0 && Wi(),
                (he = !0),
                En());
          }
          function Ai(t) {
            return t.toLowerCase().replace(/-/g, "");
          }
          function Bi(t) {
            if (Z || he) {
              if ((ge.emit("transitionEnd", ta(t)), !Z && Jt.length > 0))
                for (var e = 0; e < Jt.length; e++) {
                  var n = Jt[e];
                  (n.style.left = ""),
                    _ && j && ((n.style[_] = ""), (n.style[j] = "")),
                    b(n, it),
                    g(n, ot);
                }
              if (
                !t ||
                (!Z && t.target.parentNode === ft) ||
                (t.target === ft && Ai(t.propertyName) === Ai(ne))
              ) {
                if (!ee) {
                  var i = re;
                  Mn(), re !== i && (ge.emit("indexChanged", ta()), ki());
                }
                "inner" === U && ge.emit("innerLoaded", ta()),
                  (he = !1),
                  (se = re);
              }
            }
          }
          function Oi(t, e) {
            if (!Te)
              if ("prev" === t) Hi(e, -1);
              else if ("next" === t) Hi(e, 1);
              else {
                if (he) {
                  if (ve) return;
                  Bi();
                }
                var n = Nn(),
                  i = 0;
                if (
                  ("first" === t
                    ? (i = -n)
                    : "last" === t
                    ? (i = Z ? mt - Dt - n : mt - 1 - n)
                    : ("number" != typeof t && (t = parseInt(t)),
                      isNaN(t) ||
                        (e || (t = Math.max(0, Math.min(mt - 1, t))),
                        (i = t - n))),
                  !Z && i && Math.abs(i) < Dt)
                ) {
                  var a = i > 0 ? 1 : -1;
                  i += re + i - mt >= fe ? mt * a : 2 * mt * a * -1;
                }
                (re += i),
                  Z && zt && (re < fe && (re += mt), re > de && (re -= mt)),
                  Nn(re) !== Nn(se) && Ni(e);
              }
          }
          function Hi(t, e) {
            if (he) {
              if (ve) return;
              Bi();
            }
            var n;
            if (!e) {
              for (
                var i = Vi((t = ji(t)));
                i !== Qe && [Ye, Ke].indexOf(i) < 0;

              )
                i = i.parentNode;
              var a = [Ye, Ke].indexOf(i);
              a >= 0 && ((n = !0), (e = 0 === a ? -1 : 1));
            }
            if (Ht) {
              if (re === fe && -1 === e) return void Oi("last", t);
              if (re === de && 1 === e) return void Oi("first", t);
            }
            e &&
              ((re += Nt * e),
              Ct && (re = Math.floor(re)),
              Ni(n || (t && "keydown" === t.type) ? t : null));
          }
          function zi() {
            (un = setInterval(function () {
              Hi(null, mn);
            }, Vt)),
              (fn = !0);
          }
          function Pi() {
            clearInterval(un), (fn = !1);
          }
          function Ii(t, e) {
            C(hn, { "data-action": t }), (hn.innerHTML = gn[0] + t + gn[1] + e);
          }
          function Ri() {
            zi(), hn && Ii("stop", _t[1]);
          }
          function Wi() {
            Pi(), hn && Ii("start", _t[0]);
          }
          function qi() {
            fn ? (Wi(), (vn = !0)) : (Ri(), (vn = !1));
          }
          function Fi(t) {
            t.focus();
          }
          function ji(t) {
            return _i((t = t || n.event)) ? t.changedTouches[0] : t;
          }
          function Vi(t) {
            return t.target || n.event.srcElement;
          }
          function _i(t) {
            return t.type.indexOf("touch") >= 0;
          }
          function Gi(t) {
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
          }
          function Qi() {
            return (
              (o = Ln.y - wn.y),
              (r = Ln.x - wn.x),
              (e = Math.atan2(o, r) * (180 / Math.PI)),
              (n = pe),
              (i = !1),
              (a = Math.abs(90 - Math.abs(e))) >= 90 - n
                ? (i = "horizontal")
                : a <= n && (i = "vertical"),
              i === t.axis
            );
            var e, n, i, a, o, r;
          }
          function Xi(t) {
            if (he) {
              if (ve) return;
              Bi();
            }
            jt && fn && Pi(), (Cn = !0), xn && (o(xn), (xn = null));
            var e = ji(t);
            ge.emit(_i(t) ? "touchStart" : "dragStart", ta(t)),
              !_i(t) && ["img", "a"].indexOf(gi(Vi(t))) >= 0 && Gi(t),
              (Ln.x = wn.x = e.clientX),
              (Ln.y = wn.y = e.clientY),
              Z &&
                ((bn = parseFloat(ft.style[ne].replace(ie, ""))), Ci(ft, "0s"));
          }
          function Yi(t) {
            if (Cn) {
              var e = ji(t);
              (Ln.x = e.clientX),
                (Ln.y = e.clientY),
                Z
                  ? xn ||
                    (xn = i(function () {
                      Ki(t);
                    }))
                  : ("?" === me && (me = Qi()), me && (Ve = !0)),
                ("boolean" != typeof t.cancelable || t.cancelable) &&
                  Ve &&
                  t.preventDefault();
            }
          }
          function Ki(t) {
            if (me) {
              if (
                (o(xn),
                Cn &&
                  (xn = i(function () {
                    Ki(t);
                  })),
                "?" === me && (me = Qi()),
                me)
              ) {
                !Ve && _i(t) && (Ve = !0);
                try {
                  t.type && ge.emit(_i(t) ? "touchMove" : "dragMove", ta(t));
                } catch (t) {}
                var e = bn,
                  n = Tn(Ln, wn);
                !ct || Tt || Ct
                  ? ((e += n), (e += "px"))
                  : ((e += W
                      ? (n * Dt * 100) / ((kt + Et) * Zt)
                      : (100 * n) / (kt + Et)),
                    (e += "%")),
                  (ft.style[ne] = ie + e + ae);
              }
            } else Cn = !1;
          }
          function Ji(e) {
            if (Cn) {
              xn && (o(xn), (xn = null)), Z && Ci(ft, ""), (Cn = !1);
              var n = ji(e);
              (Ln.x = n.clientX), (Ln.y = n.clientY);
              var a = Tn(Ln, wn);
              if (Math.abs(a)) {
                if (!_i(e)) {
                  var r = Vi(e);
                  H(r, {
                    click: function t(e) {
                      Gi(e), z(r, { click: t });
                    },
                  });
                }
                Z
                  ? (xn = i(function () {
                      if (ct && !Ct) {
                        var t = (-a * Dt) / (kt + Et);
                        (t = a > 0 ? Math.floor(t) : Math.ceil(t)), (re += t);
                      } else {
                        var n = -(bn + a);
                        if (n <= 0) re = fe;
                        else if (n >= gt[Zt - 1]) re = de;
                        else
                          for (var i = 0; i < Zt && n >= gt[i]; )
                            (re = i), n > gt[i] && a < 0 && (re += 1), i++;
                      }
                      Ni(e, a), ge.emit(_i(e) ? "touchEnd" : "dragEnd", ta(e));
                    }))
                  : me && Hi(e, a > 0 ? -1 : 1);
              }
            }
            "auto" === t.preventScrollOnTouch && (Ve = !1),
              pe && (me = "?"),
              jt && !fn && zi();
          }
          function Ui() {
            (rt || ut).style.height = gt[re + Dt] - gt[re] + "px";
          }
          function Zi() {
            var t = Tt ? ((Tt + Et) * mt) / kt : mt / Dt;
            return Math.min(Math.ceil(t), mt);
          }
          function $i() {
            if (Wt && !ze && en !== nn) {
              var t = nn,
                e = en,
                n = k;
              for (nn > en && ((t = en), (e = nn), (n = E)); t < e; )
                n(Ze[t]), t++;
              nn = en;
            }
          }
          function ta(t) {
            return {
              container: ft,
              slideItems: pt,
              navContainer: $e,
              navItems: Ze,
              controlsContainer: Qe,
              hasControls: Oe,
              prevButton: Ye,
              nextButton: Ke,
              items: Dt,
              slideBy: Nt,
              cloneCount: Ut,
              slideCount: mt,
              slideCountNew: Zt,
              index: re,
              indexCached: se,
              displayIndex: Sn(),
              navCurrentIndex: on,
              navCurrentIndexCached: rn,
              pages: en,
              pagesCached: nn,
              sheet: Xt,
              isOn: yt,
              event: t || {},
            };
          }
          X && console.warn("No slides found in", t.container);
        };
        e.W = I;
      },
    },
    e = {};
  function n(i) {
    var a = e[i];
    if (void 0 !== a) return a.exports;
    var o = (e[i] = { exports: {} });
    return t[i](o, o.exports, n), o.exports;
  }
  (() => {
    "use strict";
    var t = n(206);
    !(function (e, n) {
      e.behaviors.paragraphTicker = {
        attach: function (e, i) {
          n("paragraph-tickers", ".paragraph--type--ticker", e).forEach(
            function (e) {
              var n = e.querySelector(".ticker-items > .field__items"),
                i = 2,
                a = !1,
                o = !1;
              e.classList.contains("ticker-autoplay") && (a = !0),
                e.classList.contains("ticker-nav") && (o = !0),
                e.classList.contains("ticker-nav") && (o = !0),
                e.classList.contains("ticker-count-1") && (i = 1),
                e.classList.contains("ticker-count-2") && (i = 2),
                e.classList.contains("ticker-count-3") && (i = 3),
                e.classList.contains("ticker-count-4") && (i = 4),
                e.classList.contains("ticker-count-6") && (i = 6),
                new t.W({
                  container: n,
                  slideBy: "page",
                  items: 1,
                  autoplay: a,
                  gutter: 10,
                  autoplayButtonOutput: !1,
                  nav: o,
                  navPosition: "bottom",
                  controlsText: ["", ""],
                  controlsPosition: "bottom",
                  preventScrollOnTouch: "auto",
                  responsive: { 1500: { items: i }, 1e3: { items: i } },
                });
            }
          );
        },
      };
    })(Drupal, once),
      (function (e, n) {
        e.behaviors.eventsTicker = {
          attach: function (e, i) {
            n(
              "events-tickers",
              ".view-events.view-display-id-events_upcoming_block",
              e
            ).forEach(function (e) {
              var n = e.querySelector(".view-content");
              new t.W({
                container: n,
                slideBy: "page",
                items: 1,
                autoplay: !1,
                gutter: 24,
                autoHeight: !0,
                autoplayButtonOutput: !1,
                nav: !0,
                navPosition: "bottom",
                controlsText: ["", ""],
                controlsPosition: "bottom",
                preventScrollOnTouch: "auto",
                responsive: { 1500: { items: 3 }, 1e3: { items: 2 } },
              });
            });
          },
        };
      })(Drupal, once),
      n(180),
      n(904),
      n(792),
      n(709);
  })();
})();

/*! js-cookie v3.0.1 | MIT */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self),
      (function () {
        var n = e.Cookies,
          o = (e.Cookies = t());
        o.noConflict = function () {
          return (e.Cookies = n), o;
        };
      })());
})(this, function () {
  "use strict";
  function e(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) e[o] = n[o];
    }
    return e;
  }
  return (function t(n, o) {
    function r(t, r, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({}, o, i)).expires &&
          (i.expires = new Date(Date.now() + 864e5 * i.expires)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (t = encodeURIComponent(t)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var c = "";
        for (var u in i)
          i[u] &&
            ((c += "; " + u), !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
        return (document.cookie = t + "=" + n.write(r, t) + c);
      }
    }
    return Object.create(
      {
        set: r,
        get: function (e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (
              var t = document.cookie ? document.cookie.split("; ") : [],
                o = {},
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].split("="),
                c = i.slice(1).join("=");
              try {
                var u = decodeURIComponent(i[0]);
                if (((o[u] = n.read(c, u)), e === u)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        },
        remove: function (t, n) {
          r(t, "", e({}, n, { expires: -1 }));
        },
        withAttributes: function (n) {
          return t(this.converter, e({}, this.attributes, n));
        },
        withConverter: function (n) {
          return t(e({}, this.converter, n), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(o) },
        converter: { value: Object.freeze(n) },
      }
    );
  })(
    {
      read: function (e) {
        return (
          '"' === e[0] && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    },
    { path: "/" }
  );
});
(function ($) {
  (function ($) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.formvisible = function (partial) {
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return compareBottom <= viewBottom && compareTop >= viewTop;
    };
  })(jQuery);

  $(document).ready(activeFormsInit());
  $(window).scroll(function () {
    activeFormsInit();
  });

  function activeFormsInit() {
    if ($("form").not(".node-form").length) {
      activeFormsFocus();
    }
  }

  function activeFormsFocus() {
    /*select first input/textarea of a form when it gets scrolled into view*/
    $("form").each(function (fi, formx) {
      var formx = $(formx);
      id = formx.attr("id");
      if ($("#" + id).hasClass("vliz_active_forms")) {
        return;
      }
      if (formx.formvisible(true)) {
        $("#" + id + " input:text, #" + id + " textarea")
          .first()
          .focus();
        $("#" + id).addClass("vliz_active_forms");
      }
    });
  }
})(jQuery);
(function ($) {
  (function ($) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.imgvisible = function (partial) {
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return compareBottom <= viewBottom && compareTop >= viewTop;
    };
  })(jQuery);

  $(document).ready(lazyInit("ready"));
  $(window).scroll(function () {
    lazyInit("scroll");
  });
  window.onresize = lazyInit(function () {
    lazyInit("onresize");
  });
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      lazyInit("observer");
    }
  });
  observer.observe(document.querySelector("body"));

  function lazyInit(trigger) {
    // console.log(trigger);
    if ($(".bglazyload").length) {
      bglazyload();
    }
    if ($("lazyimg").length) {
      fglazyload();
    }
    if ($(".lazycss").length) {
      csslazyload();
    }
  }

  function bglazyload() {
    $(".bglazyload").each(function (bi, bgel) {
      var bgel = $(bgel);
      if (bgel.imgvisible(true)) {
        bgel.removeClass("bglazyload");
        bgel.addClass("vlizbglazyloaded");
        bgnewhtml = bgel
          .prop("outerHTML")
          .replace("lazybackground", "background");

        bgel.replaceWith(bgnewhtml);
      }
    });
  }

  function fglazyload() {
    $("lazyimg").each(function (fi, fgel) {
      var fgel = $(fgel);
      if (fgel.imgvisible(true)) {
        fgel.addClass("vlizfglazyloaded");
        fgel.attr("src", fgel.attr("data-src"));
        fgnewhtml = fgel.prop("outerHTML").replace("lazyimg", "img");
        fgel.replaceWith(fgnewhtml);
      }
    });
  }

  function csslazyload() {
    $(".lazycss").each(function (ci, cgel) {
      var cgel = $(cgel);
      if (cgel.imgvisible(true)) {
        cgel.addClass("visible");
      }
    });
  }
})(jQuery);
(function ($) {
  windowlocationstring = window.location.toString();
  if ($("link[rel='canonical']").length) {
    const nextURL = document
      .querySelector("link[rel='canonical']")
      .getAttribute("href");
    if (nextURL.indexOf("/user/") < 0 && nextURL.indexOf("/node/") < 0) {
      hashtag = windowlocationstring.split("#");
      if (typeof hashtag[1] != "undefined") {
        hashtag = "#" + hashtag[1];
      } else {
        hashtag = "";
      }

      const nextTitle = document.getElementsByTagName("title")[0].innerHTML;
      const nextState = { additionalInformation: "Updated the URL with JS" };

      // This will create a new entry in the browser's history, without reloading
      // window.history.pushState(nextState, nextTitle, nextURL);
      currenturl = window.location.href;
      currentparam = "";

      if (currenturl.indexOf("?") >= 0) {
        currentparam =
          "?" + currenturl.split("?")[1].replace(/&?[^&?]+=(?=(?:&|$))/g, "");
        if (currentparam.substr(0, 2) == "?&") {
          currentparam = currentparam.replace("?&", "?");
        }
      }

      // This will replace the current entry in the browser's history, without reloading
      if (currenturl != nextURL) {
        // console.log('vlizoverwrites/vliz_canonical redirecting to canonical');
        // console.log(windowlocationstring);
        // console.log(nextURL);
        window.history.replaceState(
          nextState,
          nextTitle,
          nextURL + currentparam + hashtag
        );
      }
    }
  }
})(jQuery);
(function ($) {
  $(document).ready(function () {
    if ($(".collapsed").length > 0) {
      $(".collapsed .paragraph").each(function (index, value) {
        if ($(this).find(".string").length > 0) {
          stringindex = index;
          firstline = $(this).find(".string");
          $(firstline).addClass("collapseline iscollapsed collapsedstart");
          if ($(firstline).length > 0 && $(firstline).siblings().length > 0) {
            $(firstline).attr("scollaps", index);
            tohide = $(firstline).next(".text-long");
            if ($(tohide).length > 0) {
              tohide.addClass("hidden tohide");
              $(tohide).attr("tcollaps", "" + index);
            }
          } else {
            // $(firstline).addClass("none");
          }
        } else {
          if (typeof tohide !== "undefined" && $(tohide).length > 0) {
            $(this).addClass("hidden tohide");
            $(this).attr("tcollaps", "" + stringindex);
          }
        }
      });
    }

    if ($(".collapsible").length > 0) {
      $(".collapsible .paragraph").each(function (index, value) {
        if ($(this).find(".string")) {
          firstline = $(this).find(".string");
          $(firstline).attr("sopen", index);
          $(firstline).addClass("collapseline");
        }
        if ($(firstline).length > 0 && $(firstline).siblings().length > 0) {
          tohide = $(firstline).next(".text-long");
          if ($(tohide).length > 0) {
            $(tohide).attr("topen", "" + index);
            tohide.addClass("tohide");
          }
        } else {
          // $(firstline).addClass("none");
        }
      });
    }
    $("body").on("click", ".collapseline", function () {
      collapseclick(this);
    });
  });

  function collapseclick(clickedstring) {
    $(clickedstring).toggleClass("iscollapsed");
    if ($(clickedstring).hasClass("collapsedstart")) {
      collapsid = $(clickedstring).attr("scollaps");
      $("[tcollaps=" + collapsid + "]").toggleClass("hidden");
    } else {
      collapsid = $(clickedstring).attr("sopen");
      $("[topen=" + collapsid + "]").toggleClass("hidden");
    }
  }
})(jQuery);
(function ($) {
  window.toggle_contrast = function () {
    $("html").toggleClass("contrast");

    if (Cookies.get("contrast") === "true") {
      Cookies.remove("contrast");
    } else {
      Cookies.set("contrast", "true", 7);
    }
  };

  $(document).ready(function () {
    if (Cookies.get("contrast") === "true") $("html").toggleClass("contrast");
  });
})(jQuery);
(function ($) {
  $(document).ready(destinationlink());

  function destinationlink() {
    if ($(".tabs.primary").length) {
      destination = GetUrlParameter("destination");
      if (typeof destination != "undefined") {
        var destinationID = destination.replace(/[^0-9]/g, "");
        if (
          $.isNumeric(destinationID) &&
          typeof $(".tabs.primary li.is-active").prop("outerHTML") !=
            "undefined"
        ) {
          console.log($(".tabs.primary li.is-active").prop("outerHTML"));
          destinationtab = $(".tabs.primary li.is-active")
            .prop("outerHTML")
            .replace(/\d+/g, destinationID)
            .replace("is-active", "destinationtab")
            .replace("/edit", "");
          $(".tabs.primary li.is-active").before(destinationtab);
          $(".destinationtab a").text("Destination");
        }
      }
    }

    //keep destination between pages until pressing save
    if (
      document.location.pathname.includes("/node/add") &&
      location.href.includes("?destination=/")
    ) {
      $(".node-type-list a").each(function () {
        var href = $(this).attr("href");
        destination = "?" + location.href.split("?")[1];
        $(this).attr("href", href + destination);
      });
    }
  }

  function GetUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");

    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  }
})(jQuery);
(function ($) {
  $(document).ready(entrefedit());

  function entrefedit() {
    $(".field--type-entity-reference input")
      .not(".node-form-author")
      .not(".linked")
      .not(".form-checkbox")
      .not(".form-radio ")
      .each(function (entrefi, entrefv) {
        prepNodeID = $(entrefv).val().split("(");
        NodeID = prepNodeID[prepNodeID.length - 1].replace(/[^0-9]/g, "");
        if (NodeID) {
          cururlpathname = document.location.pathname;
          newurl = cururlpathname.replace(/\d+/g, NodeID);
          $(entrefv)
            .closest(".js-form-item")
            .append(
              '<a href="' +
                newurl +
                "?destination=" +
                cururlpathname +
                '">edit</a>'
            );
          $(entrefv).addClass("linked");
        }
      })
      .promise()
      .done(function () {
        cururlpathname = document.location.pathname;
        addurl = cururlpathname.replace(/\d+/g, "add").replace("/edit", "");
        $(".field--type-entity-reference input")
          .not(".node-form-author")
          .not(".linked")
          .not(".form-checkbox")
          .not(".form-radio ")
          .closest(".js-form-item")
          .append(
            'use the autocomplete or <a target="_blank" href="' +
              addurl +
              "?destination=" +
              cururlpathname +
              '">create a new item to be referenced</a>'
          );
      });
  }
})(jQuery);
(function ($) {
  $(document).ready(function () {
    if ($("#edit-field-estimated-reading-time-0-value").length) {
      $("#edit-field-estimated-reading-time-0-value").after(
        '<span id="estimatedreadingtime"></span>'
      );

      var typingTimer;
      var doneTypingInterval = 500; //time in ms
      var $input = $(".form-element");

      $input.on("keyup", function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      });

      $input.on("keydown", function () {
        clearTimeout(typingTimer);
      });

      function doneTyping() {
        readingtxt = "";
        for (
          i = 0;
          i < $(".layout-region--node-main .form-element").length;
          i++
        ) {
          readingtxt +=
            " " +
            $(".layout-region--node-main .form-element:eq(" + i + ")").val();
        }
        console.log(readingtxt);
        console.log(readingtxt.split(" ").length);
        estimatedreadingtime = readingtxt.split(" ").length / 250;
        $("#estimatedreadingtime").text(
          "Automated reading time estimate: " +
            Math.round(estimatedreadingtime) +
            " minutes"
        );
      }
    }
  });
})(jQuery);
(function ($) {
  $(document).ready(function () {
    if ($(".vliziframeswapper").length) {
      $(".vliziframeswapper")
        .closest("object")
        .click(function () {
          swappable = $(this);
          htmlswappable = swappable[0].outerHTML;
          htmliframe = htmlswappable
            .replace("object", "iframe")
            .replace("data-src", "src");
          $(swappable).replaceWith(htmliframe);
        });

      $(".vliziframeswapper").each(function () {
        var bgimg = $(this).closest("object").attr("height");
        $(this).css("height", $(this).closest("object").attr("height"));
        var bgimg = $(this).closest("object").attr("data-bgimg");
        if (typeof bgimg !== typeof undefined && bgimg !== false) {
          $(this).css("background-image", "url(" + bgimg + ")");
          $(this).addClass("hasbgimg");
        }
      });
    }
  });
})(jQuery);
(function ($) {
  $(document).ready(function () {
    if ($(".texttabs").length) {
      texttabsID = $(".texttabs").attr("id");
      texttabsHTML = '<div class="inner btns"><ul class="texttabsHTML">';
      counttabs = 0;
      $("#" + texttabsID + ".texttabs .paragraph").each(function (
        index,
        value
      ) {
        if ($(this).find(".string") && $(this).find(".text-long")) {
          tabtitle = $(this).find(".string");
          tabtitletxt = tabtitle.text();

          /* use font-awsome icons */
          if (tabtitletxt.startsWith("fa-")) {
            tabtitletxt = '<i class="' + tabtitletxt + '"></i>';
          }

          $(tabtitle).remove();

          // tabtext=$(this).find(".text-long");
          $(this).attr("data-tab", index);

          if (counttabs != 0) {
            $(this).addClass("hidden");

            texttabsHTML +=
              '<li data-tab="' + index + '">' + tabtitletxt + "</li>";
          } else {
            texttabsHTML +=
              '<li class="activetab" data-tab="' +
              index +
              '">' +
              tabtitletxt +
              "</li>";
          }
          counttabs++;
        } else {
          alert("title or text missing");
        }
      });

      $("#" + texttabsID + ".texttabs").prepend(texttabsHTML + "</ul></div>");

      $("#" + texttabsID + " .texttabsHTML li").click(function () {
        tabid = $(this).attr("data-tab");

        //reset everything to hidden
        $(".texttabsHTML").find(".activetab").removeClass("activetab");
        $(".texttabs .paragraph").removeClass("active");
        $(".texttabs .paragraph").addClass("hidden");

        //now show only activated tab
        $(this).addClass("activetab");
        $(".texttabs")
          .find(".paragraph[data-tab='" + tabid + "']")
          .addClass("active")
          .removeClass("hidden");
      });
    }
  });
})(jQuery);
/**
 * @file
 * JavaScript behaviors for 'tagfilter' module.
 *
 */

(function ($, Drupal) {
  var tagfiltersinitialized;

  Drupal.behaviors.tagfilters = {
    attach: function () {
      tagfiltersinit();
    },
  };

  function tagfiltersinit() {
    if (!tagfiltersinitialized) {
      tagfiltersinitialized = true;

      if ($(".tagged").length && !$(".badtagfilter").length) {
        var activeTags = [];

        if (".atagfilter".length) {
          $(".atagfilter").click(function () {
            if (!$(this).hasClass("zero")) {
              var tagid = $(this).data("tagid");
              var sid = $(this).data("sid");
              var childtagids = "";
              var childtagids = $(this).data("childtagids");
              processmyTags(tagid, childtagids, sid);
              $(this).toggleClass("active");
              countmyTags(sid);
            }
          });
        }

        if (".tagreset".length) {
          $(".tagreset").click(function () {
            if (history.pushState) {
              history.pushState(null, null, "#");
            } else {
              location.hash = "#";
            }
            location.reload();
          });
        }

        $(document).ready(function () {
          visibletags = [];
          if (
            ".paragraph--type--cluster-of-figures .tagged, .paragraph--type--table .tagged, .paragraph--type--filtertags .tagged"
              .length
          ) {
            $(
              ".paragraph--type--cluster-of-figures, .paragraph--type--table, .paragraph--type--filtertags"
            ).each(function (i, obj) {
              if ($(this).find(".tagged").length) {
                $(this).find(".dspager").removeClass("hidden");
                initialcount = $(".tagged").length + $(".untagged").length;
                $(".dspagertotal").text(initialcount);
                $(".dspagercount").text(initialcount);
                sid = parseInt($(this).attr("id").match(/\d+/)[0]);
                countmyTags(sid);
                $(".zero").hide();

                $(".atagfilter").each(function () {
                  if (typeof visibletags == "undefined") {
                    visibletags = [];
                  }
                  if (typeof visibletags[$(this).data("sid")] == "undefined") {
                    visibletags[$(this).data("sid")] = [];
                  }
                  visibletags[$(this).data("sid")][$(this).data("tagid")] = $(
                    this
                  )
                    .find(".name")
                    .text();
                  return visibletags;
                });
                var hash = window.location.hash;
                if (hash.length != 0) {
                  var trimmedhash = decodeURIComponent(hash.substring(1));
                  hashArr = trimmedhash.split("&");
                  $.each(hashArr, function (key, value) {
                    hashtagstagid = visibletags[sid].indexOf(value);
                    hashtagschildtagids = "";
                    // hashtagschildtagids = $(hashtags).data('childtagids');
                    processmyTags(hashtagstagid, hashtagschildtagids, sid);
                    $(
                      ".paragraph--type--cluster-of-figures, .paragraph--type--table, .paragraph--type--filtertags"
                    )
                      .find("[data-tagid='" + hashtagstagid + "']")
                      .toggleClass("active");
                  });
                }
                // countmyTags(sid);

                //hide empty branches
                $(".branch")
                  .not(".atagfilter")
                  .each(function () {
                    branchlength = $(this)
                      .find(".atagfilter")
                      .not(".zero").length;
                    if (branchlength === 0) {
                      $(this).hide();
                    }
                  });
              }
            });
          }
        });
      }
    }
  }

  function processmyTags(tagid, childtagids, sid) {
    // window.location.hash="";
    if (typeof activeTags == "undefined") {
      activeTags = [];
    }
    if (typeof activeTags[sid] == "undefined") {
      activeTags[sid] = [];
    }

    $("#paragraph" + sid + " .tagged").addClass("hidden");
    $("#paragraph" + sid + " .untagged").addClass("hidden");

    if (activeTags[sid].indexOf(tagid) > -1) {
      activeTags[sid] = jQuery.grep(activeTags[sid], function (value) {
        return value != tagid;
      });
      if (typeof childtagids != "undefined" && childtagids.length != 0) {
        childtagidsArr = childtagids.toString().split(",", 2);
        $.each(childtagidsArr, function (childtagkey, childtagvalue) {
          $(
            "#paragraph" + sid + " a[data-tagid='" + childtagvalue + "']"
          ).removeClass("active");
          activeTags[sid] = jQuery.grep(activeTags[sid], function (value) {
            return value != childtagvalue;
          });
        });
      }
    } else {
      activeTags[sid].push(tagid);
    }
    if (activeTags[sid].length === 0) {
      $("#paragraph" + sid + " .tagged").removeClass("hidden");
      $("#paragraph" + sid + " .untagged").removeClass("hidden");
      removeHash();
    } else {
      showTags = ".tagid-" + activeTags[sid].join(".tagid-");
      $(showTags).removeClass("hidden");
      activeTagsTitles = [];
      activeTagsTitles[sid] = [];
      $.each(activeTags[sid], function (key, value) {
        activeTagsTitles[sid].push(visibletags[sid][value]);
      });

      if (activeTagsTitles[sid].length != 0) {
        // window.location.hash = "#"+activeTagsTitles[sid].join("&");
        if (history.pushState) {
          history.pushState(null, null, "#" + activeTagsTitles[sid].join("&"));
        } else {
          location.hash = "#" + activeTagsTitles[sid].join("&");
        }
      }
    }

    NrActiveItems =
      $("#paragraph" + sid + " .tagged").not(".hidden").length +
      $("#paragraph" + sid + " .untagged").not(".hidden").length;
    $("#paragraph" + sid + " .dspagercount").text(NrActiveItems);
  }

  function arraySearch(arr, val) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === val) return i;
    return false;
  }

  function countmyTags(sid) {
    inactivefilters = $("#paragraph" + sid + " .atagfilter");
    $.each(inactivefilters, function (inactfkey, inactfvalue) {
      inactftagid = $(this).data("tagid");
      inactfcnt = $("#paragraph" + sid + " .tagid-" + inactftagid).not(
        ".hidden"
      ).length;
      $(this).find(".cnt").text(inactfcnt).show();
      if (inactfcnt < 1) {
        $(this).addClass("zero");
      } else {
        $(this).removeClass("zero");
      }
    });
  }
  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
})(jQuery, Drupal, drupalSettings);
(function ($) {
  $(document).ready(function () {
    if ($(".translation-entity-all-languages").length) {
      $(".translation-entity-all-languages").each(function () {
        $(this).closest(".form-item").addClass("all-languages");
      });
    }
  });
})(jQuery);
(function ($) {
  $(document).ready(function () {
    multilingualHelp();

    if ($("#webform-ui-element-form").length) {
      delhref = $("#edit-delete").attr("href");
      stringlength = delhref.length;
      gdpr_processed_text = "/gdpr_processed_text/delete";
      gdpr_processed_text_length = gdpr_processed_text.length;
      gdpr_toestemming_consent = "/gdpr_toestemming_consent/delete";
      gdpr_toestemming_consent_length = gdpr_toestemming_consent.length;

      if (
        delhref.substr(
          stringlength - gdpr_processed_text_length,
          gdpr_processed_text_length
        ) == gdpr_processed_text ||
        delhref.substr(
          stringlength - gdpr_toestemming_consent_length,
          gdpr_toestemming_consent_length
        ) == gdpr_toestemming_consent
      ) {
        $("#edit-delete").remove();
      }
    }

    if ($("#webform-edit-form").length) {
      $(
        'ul[data-drupal-selector="edit-webform-ui-elements-gdpr-toestemming-consent-operations"]'
      )
        .find(".delete")
        .remove();
      $(
        'ul[data-drupal-selector="edit-webform-ui-elements-gdpr-processed-text-operations"]'
      )
        .find(".delete")
        .remove();
      $(".webform-ui-element-container").find(".delete").remove();
    }
  });

  $(document).ajaxStop(function () {
    multilingualHelp();
  });
})(jQuery);

function multilingualHelp() {
  (function ($) {
    if ($(".webform-add-form").length && !$("#addformlanguages").length) {
      activeLanguage = $("body").attr("data-current-language");
      baseurl = $("body").attr("data-baseurl");
      availableLanguages = $("body")
        .attr("data-available-languages")
        .split(" ");
      if (availableLanguages.length > 0) {
        $(".webform-add-form").prepend(
          '<div class="info"><h3>You are about to create a new webform with language <span style="text-transform:uppercase">' +
            activeLanguage +
            '</span></h3><p>If you entended to create one in one of the following languages please click the prefered language</p><ul id="addformlanguages"></ul></div>'
        );
        $(availableLanguages).each(function (i, lang) {
          $("#addformlanguages").append(
            '<li><a href="' +
              baseurl +
              "/" +
              lang +
              '/admin/structure/webform/add"><span style="text-transform:uppercase">' +
              lang +
              "</span></a></li>"
          );
        });
      }
    }
  })(jQuery);
}
(function ($) {
  $(document).ready(function () {
    $("img").on("error", function () {
      if ($(".role-authenticated").length > 0) {
        $(this).attr("badsrc", $(this).attr("src"));
        $(this).unbind("error").attr("src", "/inc/images/missing_image.png");
      } else {
        $(this).hide();
      }
    });
  });
})(jQuery);
(function ($) {
  $(document).ready(function () {
    if ($('input[name="mollie_payment_total"]').length > 0) {
      $("form").on("change", function () {
        total = 0;
        $('input[id^="edit-mollie-"]').each(function (index) {
          if ($(this).is(":checked")) {
            total = total + parseInt($(this).val());
          }
        });
        $('input[name="mollie_payment_total"]').val(total);
      });
    }
  });
})(jQuery);
(function ($, Drupal, drupalSettings) {
  /**
   * @namespace
   */
  var initialized;

  Drupal.behaviors.vlizshare42AccessData = {
    attach: function () {
      init();
    },
  };

  function init() {
    if (!initialized) {
      initialized = true;

      /* share42.com | 05.05.2014 | (c) Dimox */
      window.onload = function () {
        var e = document.getElementsByTagName("div");

        for (var k = 0; k < e.length; k++) {
          if (
            typeof e[k].className == "string" &&
            e[k].className.indexOf("share42init") != -1
          ) {
            if (e[k].getAttribute("data-url") != -1)
              var u = e[k].getAttribute("data-url");
            if (e[k].getAttribute("data-title") != -1)
              var t = e[k].getAttribute("data-title");
            if (e[k].getAttribute("data-image") != -1)
              var i = e[k].getAttribute("data-image");
            if (e[k].getAttribute("data-description") != -1)
              var d = e[k].getAttribute("data-description");
            if (e[k].getAttribute("data-path") != -1)
              var f = e[k].getAttribute("data-path");
            if (e[k].getAttribute("data-icons-file") != -1)
              var fn = e[k].getAttribute("data-icons-file");

            //pieterm 20141003 added data-services attribute

            if (e[k].getAttribute("data-services") != null) {
              ds = e[k].getAttribute("data-services").split("|");
            } else ds = ["lnkd", "fb", "twi", "mailto", "print"];

            if (!f) {
              function path(name) {
                var sc = document.getElementsByTagName("script"),
                  sr = new RegExp("^(.*/|)(" + name + ")([#?]|$)");
                for (var p = 0, scL = sc.length; p < scL; p++) {
                  var m = String(sc[p].src).match(sr);
                  if (m) {
                    if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))
                      return m[1];
                    if (m[1].indexOf("/") == 0) return m[1];
                    b = document.getElementsByTagName("base");
                    if (b[0] && b[0].href) return b[0].href + m[1];
                    else
                      return (
                        document.location.pathname.match(/(.*[\/\\])/)[0] + m[1]
                      );
                  }
                }
                return null;
              }
              f = path("share42.js");
            }
            if (!u) u = location.href;
            if (!t) t = document.title;
            if (!fn) fn = "icons.png";

            function desc() {
              var meta = document.getElementsByTagName("meta");
              for (var m = 0; m < meta.length; m++) {
                if (meta[m].name.toLowerCase() == "description") {
                  return meta[m].content;
                }
              }
              return "";
            }
            if (!d) d = desc();
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, "%27");
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, "%27");
            var fbQuery = "u=" + u;
            if (i != "null" && i != "")
              fbQuery =
                "s=100&p[url]=" +
                u +
                "&p[title]=" +
                t +
                "&p[summary]=" +
                d +
                "&p[images][0]=" +
                i;

            //pieterm 20141003 added data-services attribute

            var s = new Array();
            s["lnkd"] =
              '"#" data-count="lnkd" onclick="window.open(\'http://www.linkedin.com/shareArticle?mini=true&url=' +
              u +
              "&title=" +
              t +
              "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=400, toolbar=0, status=0');return false\" title=\"Share on Linkedin\"";
            s["fb"] =
              '"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&' +
              fbQuery +
              "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Facebook\"";
            s["gplus"] =
              '"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url=' +
              u +
              "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Google+\"";
            s["twi"] =
              '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' +
              t +
              "&url=" +
              u +
              "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Twitter\"";
            s["fav"] =
              '"#" onclick="return fav(this);" title="Save to Browser Favorites"';
            s["mailto"] =
              '"mailto:?subject=' +
              t +
              "&body=" +
              u +
              '" title="Email this to a friend"';
            s["print"] = '"#" onclick="print();return false" title="Print"';

            var j = new Array();
            j["lnkd"] = 0;
            j["fb"] = 1;
            j["gplus"] = 2;
            j["twi"] = 3;
            j["fav"] = 4;
            j["mailto"] = 5;
            j["print"] = 6;

            var l = "";

            function ShowResults(element, index, array) {
              l +=
                '<a rel="nofollow" class="bglazyload ' +
                element +
                '" style="display:inline-block;vertical-align:bottom;width:16px;height:16px;margin:0 6px 6px 0;padding:0;outline:none;background:url(' +
                f +
                fn +
                ") -" +
                16 * j[element] +
                'px 0 no-repeat" href=' +
                s[element] +
                ' target="_blank"></a>';
            }

            ds.forEach(ShowResults);

            //end of changes pieterm

            e[k].innerHTML = '<span id="share42">' + l + "</span>";
          }
        }
      };
    }
  }
})(jQuery, Drupal, drupalSettings);
function fav(a) {
  var title = document.title;
  var url = document.location;
  try {
    window.external.AddFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, "");
    } catch (e) {
      if (typeof opera == "object" || window.sidebar) {
        a.rel = "sidebar";
        a.title = title;
        a.url = url;
        a.href = url;
        return true;
      } else {
        alert("Press Ctrl-D to add the page to browser favorites");
      }
    }
  }
  return false;
}
/**
 * @file
 * External links js file.
 */

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, drupalSettings) {
    if (
      typeof drupalSettings.data === "undefined" ||
      !drupalSettings.data.hasOwnProperty("extlink")
    ) {
      return;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the
    // icon, defaults to 'append'.
    var extIconPlacement = "append";
    if (
      drupalSettings.data.extlink.extIconPlacement &&
      drupalSettings.data.extlink.extIconPlacement != "0"
    ) {
      extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
    }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern =
      /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, "$2$3$6");
    var subdomain = window.location.host.replace(host, "");

    // Determine what subdomains are considered internal.
    var subdomains;
    if (drupalSettings.data.extlink.extSubdomains) {
      subdomains = "([^/]*\\.)?";
    } else if (subdomain === "www." || subdomain === "") {
      subdomains = "(www\\.)?";
    } else {
      subdomains = subdomain.replace(".", "\\.");
    }

    // Whitelisted domains.
    var whitelistedDomains = false;
    if (drupalSettings.data.extlink.whitelistedDomains) {
      whitelistedDomains = [];
      for (
        var i = 0;
        i < drupalSettings.data.extlink.whitelistedDomains.length;
        i++
      ) {
        whitelistedDomains.push(
          new RegExp(
            "^https?:\\/\\/" +
              drupalSettings.data.extlink.whitelistedDomains[i].replace(
                /(\r\n|\n|\r)/gm,
                ""
              ) +
              ".*$",
            "i"
          )
        );
      }
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp(
      "^https?://([^@]*@)?" + subdomains + host,
      "i"
    );

    // Extra internal link matching.
    var extInclude = false;
    if (drupalSettings.data.extlink.extInclude) {
      extInclude = new RegExp(
        drupalSettings.data.extlink.extInclude.replace(/\\/, "\\"),
        "i"
      );
    }

    // Extra external link matching.
    var extExclude = false;
    if (drupalSettings.data.extlink.extExclude) {
      extExclude = new RegExp(
        drupalSettings.data.extlink.extExclude.replace(/\\/, "\\"),
        "i"
      );
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (drupalSettings.data.extlink.extCssExclude) {
      extCssExclude = drupalSettings.data.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (drupalSettings.data.extlink.extCssExplicit) {
      extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
    }

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $("a:not([data-extlink]), area:not([data-extlink])", context).each(
      function (el) {
        try {
          var url = "";
          if (typeof this.href == "string") {
            url = this.href.toLowerCase();
          }
          // Handle SVG links (xlink:href).
          else if (typeof this.href == "object") {
            url = this.href.baseVal;
          }
          if (
            url.indexOf("http") === 0 &&
            ((!internal_link.test(url) &&
              !(extExclude && extExclude.test(url))) ||
              (extInclude && extInclude.test(url))) &&
            !(extCssExclude && $(this).is(extCssExclude)) &&
            !(extCssExclude && $(this).parents(extCssExclude).length > 0) &&
            !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)
          ) {
            var match = false;
            if (whitelistedDomains) {
              for (var i = 0; i < whitelistedDomains.length; i++) {
                if (whitelistedDomains[i].test(url)) {
                  match = true;
                  break;
                }
              }
            }
            if (!match) {
              external_links.push(this);
            }
          }
          // Do not include area tags with begin with mailto: (this prohibits
          // icons from being added to image-maps).
          else if (
            this.tagName !== "AREA" &&
            url.indexOf("mailto:") === 0 &&
            !(extCssExclude && $(this).parents(extCssExclude).length > 0) &&
            !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)
          ) {
            mailto_links.push(this);
          }
        } catch (error) {
          // IE7 throws errors often when dealing with irregular links, such as:
          // <a href="node/10"></a> Empty tags.
          // <a href="http://user:pass@example.com">example</a> User:pass syntax.
          return false;
        }
      }
    );

    if (
      drupalSettings.data.extlink.extClass !== "0" &&
      drupalSettings.data.extlink.extClass !== ""
    ) {
      Drupal.extlink.applyClassAndSpan(
        external_links,
        drupalSettings.data.extlink.extClass,
        extIconPlacement
      );
    }

    if (
      drupalSettings.data.extlink.mailtoClass !== "0" &&
      drupalSettings.data.extlink.mailtoClass !== ""
    ) {
      Drupal.extlink.applyClassAndSpan(
        mailto_links,
        drupalSettings.data.extlink.mailtoClass,
        extIconPlacement
      );
    }

    if (drupalSettings.data.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links)
        .filter(function () {
          // Filter out links with target set if option specified.
          return !(
            drupalSettings.data.extlink.extTargetNoOverride &&
            $(this).is("a[target]")
          );
        })
        .attr({ target: "_blank" });

      // Add noopener rel attribute to combat phishing.
      $(external_links).attr("rel", function (i, val) {
        // If no rel attribute is present, create one with the value noopener.
        if (val === null || typeof val === "undefined") {
          return "noopener";
        }
        // Check to see if rel contains noopener. Add what doesn't exist.
        if (val.indexOf("noopener") > -1) {
          if (val.indexOf("noopener") === -1) {
            return val + " noopener";
          }
          // Noopener exists. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener to val.
        else {
          return val + " noopener";
        }
      });
    }

    if (drupalSettings.data.extlink.extNofollow) {
      $(external_links).attr("rel", function (i, val) {
        // When the link does not have a rel attribute set it to 'nofollow'.
        if (val === null || typeof val === "undefined") {
          return "nofollow";
        }
        var target = "nofollow";
        // Change the target, if not overriding follow.
        if (drupalSettings.data.extlink.extFollowNoOverride) {
          target = "follow";
        }
        if (val.indexOf(target) === -1) {
          return val + " nofollow";
        }
        return val;
      });
    }

    if (drupalSettings.data.extlink.extNoreferrer) {
      $(external_links).attr("rel", function (i, val) {
        // When the link does not have a rel attribute set it to 'noreferrer'.
        if (val === null || typeof val === "undefined") {
          return "noreferrer";
        }
        if (val.indexOf("noreferrer") === -1) {
          return val + " noreferrer";
        }
        return val;
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler =
      Drupal.extlink.popupClickHandler ||
      function () {
        if (drupalSettings.data.extlink.extAlert) {
          return confirm(drupalSettings.data.extlink.extAlertText);
        }
      };

    $(external_links).off("click.extlink");
    $(external_links).on("click.extlink", function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (
    links,
    class_name,
    icon_placement
  ) {
    var $links_to_process;
    if (drupalSettings.data.extlink.extImgClass) {
      $links_to_process = $(links);
    } else {
      var links_with_images = $(links).find("img, svg").parents("a");
      $links_to_process = $(links).not(links_with_images);
    }

    if (class_name !== "0") {
      $links_to_process.addClass(class_name);
    }

    // Add data-extlink attribute.
    $links_to_process.attr("data-extlink", "");

    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if (drupalSettings.data.extlink.extUseFontAwesome) {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement](
            '<span class="fa-' +
              class_name +
              ' extlink"><span class="' +
              drupalSettings.data.extlink.extFaMailtoClasses +
              '" aria-label="' +
              drupalSettings.data.extlink.mailtoLabel +
              '"></span></span>'
          );
        } else {
          $link[icon_placement](
            '<span class="fa-' +
              class_name +
              ' extlink"><span class="' +
              drupalSettings.data.extlink.extFaLinkClasses +
              '" aria-label="' +
              drupalSettings.data.extlink.extLabel +
              '"></span></span>'
          );
        }
      } else {
        if (class_name === drupalSettings.data.extlink.mailtoClass) {
          $link[icon_placement](
            '<svg focusable="false" class="' +
              class_name +
              '" role="img" aria-label="' +
              drupalSettings.data.extlink.mailtoLabel +
              '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' +
              drupalSettings.data.extlink.mailtoLabel +
              '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>'
          );
        } else {
          $link[icon_placement](
            '<svg focusable="false" class="' +
              class_name +
              '" role="img" aria-label="' +
              drupalSettings.data.extlink.extLabel +
              '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' +
              drupalSettings.data.extlink.extLabel +
              '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>'
          );
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, drupalSettings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === "function") {
      extlinkAttach(context);
    } else {
      Drupal.extlink.attach(context, drupalSettings);
    }
  };
})(jQuery, Drupal, drupalSettings);
