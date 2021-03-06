function $buo_f() {
    var a = document.createElement("script");
    // a.src = "//browser-update.org/update.min.js",
    document.body.appendChild(a)
}
function initMap1() {
    var a, b = "", c = "map", d = new google.maps.LatLng(50.7669999,15.0581659), e = 17, f = {
        url: "/img/pin.svg",
        size: new google.maps.Size(102,102),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(50,50)
    }, g = 70, h = 85, i = {
        zoom: e,
        center: d,
        panControl: !1,
        zoomControl: !0,
        scaleControl: !1,
        streetViewControl: !1,
        mapTypeControl: !1,
        scrollwheel: !1,
        draggable: !1
    }, j = {
        zoom: e,
        center: d,
        disableDefaultUI: !0,
        scrollwheel: !1
    };
    a = jQuery.browser.mobile ? new google.maps.Map(document.getElementById(c),i) : new google.maps.Map(document.getElementById(c),j);
    var k = new google.maps.Marker({
        position: a.getCenter(),
        map: a,
        title: b,
        icon: f,
        size: new google.maps.Size(g,h),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(g / 2,h - 10),
        animation: google.maps.Animation.DROP
    });
    google.maps.event.addDomListener(window, "resize", function() {
        window.setTimeout(function() {
            a.panTo(k.getPosition())
        }, 1e3)
    });
    var l = [{
        featureType: "poi",
        stylers: [{
            visibility: "off"
        }]
    }];
    a.setOptions({
        styles: l
    })
}
function hexToRgb(a) {
    var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    a = a.replace(b, function(a, b, c, d) {
        return b + b + c + c + d + d
    });
    var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return c ? {
        r: parseInt(c[1], 16),
        g: parseInt(c[2], 16),
        b: parseInt(c[3], 16)
    } : null
}
function clamp(a, b, c) {
    return Math.min(Math.max(a, b), c)
}
function isInArray(a, b) {
    return b.indexOf(a) > -1
}
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null ,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    }
    ;
    d.VERSION = "3.3.5",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null ));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    }
                    ;
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }
                ;
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = b(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    }
    ;
    g.VERSION = "3.3.5",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e)
              , g = f.hasClass("open");
            if (c(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = b(d)
                  , g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)
                    return 27 == c.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        }
        ;
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    function a(a, b, c, d) {
        return c = parseFloat(c) - parseFloat(a),
        d = parseFloat(d) - parseFloat(b),
        Math.sqrt(c * c + d * d)
    }
    function b(a) {
        return "string" != typeof a && a.nodeType || (a = _gsScope.TweenLite.selector(a),
        a.length && (a = a[0])),
        a
    }
    function c(a, b, c) {
        var d, e, f = a.indexOf(" ");
        return -1 === f ? (d = void 0 !== c ? c + "" : a,
        e = a) : (d = a.substr(0, f),
        e = a.substr(f + 1)),
        d = -1 !== d.indexOf("%") ? parseFloat(d) / 100 * b : parseFloat(d),
        e = -1 !== e.indexOf("%") ? parseFloat(e) / 100 * b : parseFloat(e),
        d > e ? [e, d] : [d, e]
    }
    function d(c) {
        if (!c)
            return 0;
        c = b(c);
        var d, e, f, g, i, j, k, l = c.tagName.toLowerCase();
        if ("path" === l) {
            g = c.style.strokeDasharray,
            c.style.strokeDasharray = "none",
            d = c.getTotalLength() || 0;
            try {
                e = c.getBBox()
            } catch (m) {}
            c.style.strokeDasharray = g
        } else if ("rect" === l)
            d = 2 * c.getAttribute("width") + 2 * c.getAttribute("height");
        else if ("circle" === l)
            d = 2 * Math.PI * parseFloat(c.getAttribute("r"));
        else if ("line" === l)
            d = a(c.getAttribute("x1"), c.getAttribute("y1"), c.getAttribute("x2"), c.getAttribute("y2"));
        else if ("polyline" === l || "polygon" === l)
            for (f = c.getAttribute("points").match(h) || [],
            "polygon" === l && f.push(f[0], f[1]),
            d = 0,
            i = 2; i < f.length; i += 2)
                d += a(f[i - 2], f[i - 1], f[i], f[i + 1]) || 0;
        else
            "ellipse" === l && (j = parseFloat(c.getAttribute("rx")),
            k = parseFloat(c.getAttribute("ry")),
            d = Math.PI * (3 * (j + k) - Math.sqrt((3 * j + k) * (j + 3 * k))));
        return d || 0
    }
    function e(a, c) {
        if (!a)
            return [0, 0];
        a = b(a),
        c = c || d(a) + 1;
        var e = g(a)
          , f = e.strokeDasharray || ""
          , h = parseFloat(e.strokeDashoffset)
          , i = f.indexOf(",");
        return 0 > i && (i = f.indexOf(" ")),
        f = 0 > i ? c : parseFloat(f.substr(0, i)) || 1e-5,
        f > c && (f = c),
        [Math.max(0, -h), Math.max(0, f - h)]
    }
    var f, g = document.defaultView ? document.defaultView.getComputedStyle : function() {}
    , h = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
    f = _gsScope._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.0.10",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function(a, b, f) {
            if (!a.getBBox)
                return !1;
            var g, h, i, j = d(a) + 1;
            return this._style = a.style,
            b === !0 || "true" === b ? b = "0 100%" : b ? -1 === (b + "").indexOf(" ") && (b = "0 " + b) : b = "0 0",
            g = e(a, j),
            h = c(b, j, g[0]),
            this._length = j + 10,
            0 === g[0] && 0 === h[0] ? (i = Math.max(1e-5, h[1] - j),
            this._dash = j + i,
            this._offset = j - g[1] + i,
            this._addTween(this, "_offset", this._offset, j - h[1] + i, "drawSVG")) : (this._dash = g[1] - g[0] || 1e-6,
            this._offset = -g[0],
            this._addTween(this, "_dash", this._dash, h[1] - h[0] || 1e-5, "drawSVG"),
            this._addTween(this, "_offset", this._offset, -h[0], "drawSVG")),
            !0
        },
        set: function(a) {
            this._firstPT && (this._super.setRatio.call(this, a),
            this._style.strokeDashoffset = this._offset,
            1 === a || 0 === a ? this._style.strokeDasharray = this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._style.strokeDasharray = this._dash + "px," + this._length + "px")
        }
    }),
    f.getLength = d,
    f.getPosition = e
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
!function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.ScrollMagic = b()
}(this, function() {
    "use strict";
    var a = function() {}
    ;
    a.version = "2.0.5",
    window.addEventListener("mousewheel", function() {});
    var b = "data-scrollmagic-pin-spacer";
    a.Controller = function(d) {
        var f, g, h = "ScrollMagic.Controller", i = "FORWARD", j = "REVERSE", k = "PAUSED", l = c.defaults, m = this, n = e.extend({}, l, d), o = [], p = !1, q = 0, r = k, s = !0, t = 0, u = !0, v = function() {
            for (var a in n)
                l.hasOwnProperty(a) || delete n[a];
            if (n.container = e.get.elements(n.container)[0],
            !n.container)
                throw h + " init failed.";
            s = n.container === window || n.container === document.body || !document.body.contains(n.container),
            s && (n.container = window),
            t = y(),
            n.container.addEventListener("resize", C),
            n.container.addEventListener("scroll", C),
            n.refreshInterval = parseInt(n.refreshInterval) || l.refreshInterval,
            w()
        }
        , w = function() {
            n.refreshInterval > 0 && (g = window.setTimeout(D, n.refreshInterval))
        }
        , x = function() {
            return n.vertical ? e.get.scrollTop(n.container) : e.get.scrollLeft(n.container)
        }
        , y = function() {
            return n.vertical ? e.get.height(n.container) : e.get.width(n.container)
        }
        , z = this._setScrollPos = function(a) {
            n.vertical ? s ? window.scrollTo(e.get.scrollLeft(), a) : n.container.scrollTop = a : s ? window.scrollTo(a, e.get.scrollTop()) : n.container.scrollLeft = a
        }
        , A = function() {
            if (u && p) {
                var a = e.type.Array(p) ? p : o.slice(0);
                p = !1;
                var b = q;
                q = m.scrollPos();
                var c = q - b;
                0 !== c && (r = c > 0 ? i : j),
                r === j && a.reverse(),
                a.forEach(function(a) {
                    a.update(!0)
                })
            }
        }
        , B = function() {
            f = e.rAF(A)
        }
        , C = function(a) {
            "resize" == a.type && (t = y(),
            r = k),
            p !== !0 && (p = !0,
            B())
        }
        , D = function() {
            if (!s && t != y()) {
                var a;
                try {
                    a = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (b) {
                    a = document.createEvent("Event"),
                    a.initEvent("resize", !1, !1)
                }
                n.container.dispatchEvent(a)
            }
            o.forEach(function(a) {
                a.refresh()
            }),
            w()
        }
        ;
        this._options = n;
        var E = function(a) {
            if (a.length <= 1)
                return a;
            var b = a.slice(0);
            return b.sort(function(a, b) {
                return a.scrollOffset() > b.scrollOffset() ? 1 : -1
            }),
            b
        }
        ;
        return this.addScene = function(b) {
            if (e.type.Array(b))
                b.forEach(function(a) {
                    m.addScene(a)
                });
            else if (b instanceof a.Scene)
                if (b.controller() !== m)
                    b.addTo(m);
                else if (o.indexOf(b) < 0) {
                    o.push(b),
                    o = E(o),
                    b.on("shift.controller_sort", function() {
                        o = E(o)
                    });
                    for (var c in n.globalSceneOptions)
                        b[c] && b[c].call(b, n.globalSceneOptions[c])
                }
            return m
        }
        ,
        this.removeScene = function(a) {
            if (e.type.Array(a))
                a.forEach(function(a) {
                    m.removeScene(a)
                });
            else {
                var b = o.indexOf(a);
                b > -1 && (a.off("shift.controller_sort"),
                o.splice(b, 1),
                a.remove())
            }
            return m
        }
        ,
        this.updateScene = function(b, c) {
            return e.type.Array(b) ? b.forEach(function(a) {
                m.updateScene(a, c)
            }) : c ? b.update(!0) : p !== !0 && b instanceof a.Scene && (p = p || [],
            -1 == p.indexOf(b) && p.push(b),
            p = E(p),
            B()),
            m
        }
        ,
        this.update = function(a) {
            return C({
                type: "resize"
            }),
            a && A(),
            m
        }
        ,
        this.scrollTo = function(c, d) {
            if (e.type.Number(c))
                z.call(n.container, c, d);
            else if (c instanceof a.Scene)
                c.controller() === m && m.scrollTo(c.scrollOffset(), d);
            else if (e.type.Function(c))
                z = c;
            else {
                var f = e.get.elements(c)[0];
                if (f) {
                    for (; f.parentNode.hasAttribute(b); )
                        f = f.parentNode;
                    var g = n.vertical ? "top" : "left"
                      , h = e.get.offset(n.container)
                      , i = e.get.offset(f);
                    s || (h[g] -= m.scrollPos()),
                    m.scrollTo(i[g] - h[g], d)
                }
            }
            return m
        }
        ,
        this.scrollPos = function(a) {
            return arguments.length ? (e.type.Function(a) && (x = a),
            m) : x.call(m)
        }
        ,
        this.info = function(a) {
            var b = {
                size: t,
                vertical: n.vertical,
                scrollPos: q,
                scrollDirection: r,
                container: n.container,
                isDocument: s
            };
            return arguments.length ? void 0 !== b[a] ? b[a] : void 0 : b
        }
        ,
        this.loglevel = function() {
            return m
        }
        ,
        this.enabled = function(a) {
            return arguments.length ? (u != a && (u = !!a,
            m.updateScene(o, !0)),
            m) : u
        }
        ,
        this.destroy = function(a) {
            window.clearTimeout(g);
            for (var b = o.length; b--; )
                o[b].destroy(a);
            return n.container.removeEventListener("resize", C),
            n.container.removeEventListener("scroll", C),
            e.cAF(f),
            null
        }
        ,
        v(),
        m
    }
    ;
    var c = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    a.Controller.addOption = function(a, b) {
        c.defaults[a] = b
    }
    ,
    a.Controller.extend = function(b) {
        var c = this;
        a.Controller = function() {
            return c.apply(this, arguments),
            this.$super = e.extend({}, this),
            b.apply(this, arguments) || this
        }
        ,
        e.extend(a.Controller, c),
        a.Controller.prototype = c.prototype,
        a.Controller.prototype.constructor = a.Controller
    }
    ,
    a.Scene = function(c) {
        var f, g, h = "BEFORE", i = "DURING", j = "AFTER", k = d.defaults, l = this, m = e.extend({}, k, c), n = h, o = 0, p = {
            start: 0,
            end: 0
        }, q = 0, r = !0, s = function() {
            for (var a in m)
                k.hasOwnProperty(a) || delete m[a];
            for (var b in k)
                B(b);
            z()
        }
        , t = {};
        this.on = function(a, b) {
            return e.type.Function(b) && (a = a.trim().split(" "),
            a.forEach(function(a) {
                var c = a.split(".")
                  , d = c[0]
                  , e = c[1];
                "*" != d && (t[d] || (t[d] = []),
                t[d].push({
                    namespace: e || "",
                    callback: b
                }))
            })),
            l
        }
        ,
        this.off = function(a, b) {
            return a ? (a = a.trim().split(" "),
            a.forEach(function(a) {
                var c = a.split(".")
                  , d = c[0]
                  , e = c[1] || ""
                  , f = "*" === d ? Object.keys(t) : [d];
                f.forEach(function(a) {
                    for (var c = t[a] || [], d = c.length; d--; ) {
                        var f = c[d];
                        !f || e !== f.namespace && "*" !== e || b && b != f.callback || c.splice(d, 1)
                    }
                    c.length || delete t[a]
                })
            }),
            l) : l
        }
        ,
        this.trigger = function(b, c) {
            if (b) {
                var d = b.trim().split(".")
                  , e = d[0]
                  , f = d[1]
                  , g = t[e];
                g && g.forEach(function(b) {
                    f && f !== b.namespace || b.callback.call(l, new a.Event(e,b.namespace,l,c))
                })
            }
            return l
        }
        ,
        l.on("change.internal", function(a) {
            "loglevel" !== a.what && "tweenChanges" !== a.what && ("triggerElement" === a.what ? w() : "reverse" === a.what && l.update())
        }).on("shift.internal", function() {
            u(),
            l.update()
        }),
        this.addTo = function(b) {
            return b instanceof a.Controller && g != b && (g && g.removeScene(l),
            g = b,
            z(),
            v(!0),
            w(!0),
            u(),
            g.info("container").addEventListener("resize", x),
            b.addScene(l),
            l.trigger("add", {
                controller: g
            }),
            l.update()),
            l
        }
        ,
        this.enabled = function(a) {
            return arguments.length ? (r != a && (r = !!a,
            l.update(!0)),
            l) : r
        }
        ,
        this.remove = function() {
            if (g) {
                g.info("container").removeEventListener("resize", x);
                var a = g;
                g = void 0,
                a.removeScene(l),
                l.trigger("remove")
            }
            return l
        }
        ,
        this.destroy = function(a) {
            return l.trigger("destroy", {
                reset: a
            }),
            l.remove(),
            l.off("*.*"),
            null
        }
        ,
        this.update = function(a) {
            if (g)
                if (a)
                    if (g.enabled() && r) {
                        var b, c = g.info("scrollPos");
                        b = m.duration > 0 ? (c - p.start) / (p.end - p.start) : c >= p.start ? 1 : 0,
                        l.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: c
                        }),
                        l.progress(b)
                    } else
                        C && n === i && E(!0);
                else
                    g.updateScene(l, !1);
            return l
        }
        ,
        this.refresh = function() {
            return v(),
            w(),
            l
        }
        ,
        this.progress = function(a) {
            if (arguments.length) {
                var b = !1
                  , c = n
                  , d = g ? g.info("scrollDirection") : "PAUSED"
                  , e = m.reverse || a >= o;
                if (0 === m.duration ? (b = o != a,
                o = 1 > a && e ? 0 : 1,
                n = 0 === o ? h : i) : 0 > a && n !== h && e ? (o = 0,
                n = h,
                b = !0) : a >= 0 && 1 > a && e ? (o = a,
                n = i,
                b = !0) : a >= 1 && n !== j ? (o = 1,
                n = j,
                b = !0) : n !== i || e || E(),
                b) {
                    var f = {
                        progress: o,
                        state: n,
                        scrollDirection: d
                    }
                      , k = n != c
                      , p = function(a) {
                        l.trigger(a, f)
                    }
                    ;
                    k && c !== i && (p("enter"),
                    p(c === h ? "start" : "end")),
                    p("progress"),
                    k && n !== i && (p(n === h ? "start" : "end"),
                    p("leave"))
                }
                return l
            }
            return o
        }
        ;
        var u = function() {
            p = {
                start: q + m.offset
            },
            g && m.triggerElement && (p.start -= g.info("size") * m.triggerHook),
            p.end = p.start + m.duration
        }
          , v = function(a) {
            if (f) {
                var b = "duration";
                A(b, f.call(l)) && !a && (l.trigger("change", {
                    what: b,
                    newval: m[b]
                }),
                l.trigger("shift", {
                    reason: b
                }))
            }
        }
          , w = function(a) {
            var c = 0
              , d = m.triggerElement;
            if (g && d) {
                for (var f = g.info(), h = e.get.offset(f.container), i = f.vertical ? "top" : "left"; d.parentNode.hasAttribute(b); )
                    d = d.parentNode;
                var j = e.get.offset(d);
                f.isDocument || (h[i] -= g.scrollPos()),
                c = j[i] - h[i]
            }
            var k = c != q;
            q = c,
            k && !a && l.trigger("shift", {
                reason: "triggerElementPosition"
            })
        }
          , x = function() {
            m.triggerHook > 0 && l.trigger("shift", {
                reason: "containerResize"
            })
        }
          , y = e.extend(d.validate, {
            duration: function(a) {
                if (e.type.String(a) && a.match(/^(\.|\d)*\d+%$/)) {
                    var b = parseFloat(a) / 100;
                    a = function() {
                        return g ? g.info("size") * b : 0
                    }
                }
                if (e.type.Function(a)) {
                    f = a;
                    try {
                        a = parseFloat(f())
                    } catch (c) {
                        a = -1
                    }
                }
                if (a = parseFloat(a),
                !e.type.Number(a) || 0 > a)
                    throw f ? (f = void 0,
                    0) : 0;
                return a
            }
        })
          , z = function(a) {
            a = arguments.length ? [a] : Object.keys(y),
            a.forEach(function(a) {
                var b;
                if (y[a])
                    try {
                        b = y[a](m[a])
                    } catch (c) {
                        b = k[a]
                    } finally {
                        m[a] = b
                    }
            })
        }
          , A = function(a, b) {
            var c = !1
              , d = m[a];
            return m[a] != b && (m[a] = b,
            z(a),
            c = d != m[a]),
            c
        }
          , B = function(a) {
            l[a] || (l[a] = function(b) {
                return arguments.length ? ("duration" === a && (f = void 0),
                A(a, b) && (l.trigger("change", {
                    what: a,
                    newval: m[a]
                }),
                d.shifts.indexOf(a) > -1 && l.trigger("shift", {
                    reason: a
                })),
                l) : m[a]
            }
            )
        }
        ;
        this.controller = function() {
            return g
        }
        ,
        this.state = function() {
            return n
        }
        ,
        this.scrollOffset = function() {
            return p.start
        }
        ,
        this.triggerPosition = function() {
            var a = m.offset;
            return g && (a += m.triggerElement ? q : g.info("size") * l.triggerHook()),
            a
        }
        ;
        var C, D;
        l.on("shift.internal", function(a) {
            var b = "duration" === a.reason;
            (n === j && b || n === i && 0 === m.duration) && E(),
            b && F()
        }).on("progress.internal", function() {
            E()
        }).on("add.internal", function() {
            F()
        }).on("destroy.internal", function(a) {
            l.removePin(a.reset)
        });
        var E = function(a) {
            if (C && g) {
                var b = g.info()
                  , c = D.spacer.firstChild;
                if (a || n !== i) {
                    var d = {
                        position: D.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , f = e.css(c, "position") != d.position;
                    D.pushFollowers ? m.duration > 0 && (n === j && 0 === parseFloat(e.css(D.spacer, "padding-top")) ? f = !0 : n === h && 0 === parseFloat(e.css(D.spacer, "padding-bottom")) && (f = !0)) : d[b.vertical ? "top" : "left"] = m.duration * o,
                    e.css(c, d),
                    f && F()
                } else {
                    "fixed" != e.css(c, "position") && (e.css(c, {
                        position: "fixed"
                    }),
                    F());
                    var k = e.get.offset(D.spacer, !0)
                      , l = m.reverse || 0 === m.duration ? b.scrollPos - p.start : Math.round(o * m.duration * 10) / 10;
                    k[b.vertical ? "top" : "left"] += l,
                    e.css(D.spacer.firstChild, {
                        top: k.top,
                        left: k.left
                    })
                }
            }
        }
          , F = function() {
            if (C && g && D.inFlow) {
                var a = n === i
                  , b = g.info("vertical")
                  , c = D.spacer.firstChild
                  , d = e.isMarginCollapseType(e.css(D.spacer, "display"))
                  , f = {};
                D.relSize.width || D.relSize.autoFullWidth ? a ? e.css(C, {
                    width: e.get.width(D.spacer)
                }) : e.css(C, {
                    width: "100%"
                }) : (f["min-width"] = e.get.width(b ? C : c, !0, !0),
                f.width = a ? f["min-width"] : "auto"),
                D.relSize.height ? a ? e.css(C, {
                    height: e.get.height(D.spacer) - (D.pushFollowers ? m.duration : 0)
                }) : e.css(C, {
                    height: "100%"
                }) : (f["min-height"] = e.get.height(b ? c : C, !0, !d),
                f.height = a ? f["min-height"] : "auto"),
                D.pushFollowers && (f["padding" + (b ? "Top" : "Left")] = m.duration * o,
                f["padding" + (b ? "Bottom" : "Right")] = m.duration * (1 - o)),
                e.css(D.spacer, f)
            }
        }
          , G = function() {
            g && C && n === i && !g.info("isDocument") && E()
        }
          , H = function() {
            g && C && n === i && ((D.relSize.width || D.relSize.autoFullWidth) && e.get.width(window) != e.get.width(D.spacer.parentNode) || D.relSize.height && e.get.height(window) != e.get.height(D.spacer.parentNode)) && F()
        }
          , I = function(a) {
            g && C && n === i && !g.info("isDocument") && (a.preventDefault(),
            g._setScrollPos(g.info("scrollPos") - ((a.wheelDelta || a[g.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -a.detail)))
        }
        ;
        this.setPin = function(a, c) {
            var d = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (c = e.extend({}, d, c),
            a = e.get.elements(a)[0],
            !a)
                return l;
            if ("fixed" === e.css(a, "position"))
                return l;
            if (C) {
                if (C === a)
                    return l;
                l.removePin()
            }
            C = a;
            var f = C.parentNode.style.display
              , g = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            C.parentNode.style.display = "none";
            var h = "absolute" != e.css(C, "position")
              , i = e.css(C, g.concat(["display"]))
              , j = e.css(C, ["width", "height"]);
            C.parentNode.style.display = f,
            !h && c.pushFollowers && (c.pushFollowers = !1);
            var k = C.parentNode.insertBefore(document.createElement("div"), C)
              , m = e.extend(i, {
                position: h ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (h || e.extend(m, e.css(C, ["width", "height"])),
            e.css(k, m),
            k.setAttribute(b, ""),
            e.addClass(k, c.spacerClass),
            D = {
                spacer: k,
                relSize: {
                    width: "%" === j.width.slice(-1),
                    height: "%" === j.height.slice(-1),
                    autoFullWidth: "auto" === j.width && h && e.isMarginCollapseType(i.display)
                },
                pushFollowers: c.pushFollowers,
                inFlow: h
            },
            !C.___origStyle) {
                C.___origStyle = {};
                var n = C.style
                  , o = g.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                o.forEach(function(a) {
                    C.___origStyle[a] = n[a] || ""
                })
            }
            return D.relSize.width && e.css(k, {
                width: j.width
            }),
            D.relSize.height && e.css(k, {
                height: j.height
            }),
            k.appendChild(C),
            e.css(C, {
                position: h ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (D.relSize.width || D.relSize.autoFullWidth) && e.css(C, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", G),
            window.addEventListener("resize", G),
            window.addEventListener("resize", H),
            C.addEventListener("mousewheel", I),
            C.addEventListener("DOMMouseScroll", I),
            E(),
            l
        }
        ,
        this.removePin = function(a) {
            if (C) {
                if (n === i && E(!0),
                a || !g) {
                    var c = D.spacer.firstChild;
                    if (c.hasAttribute(b)) {
                        var d = D.spacer.style
                          , f = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {},
                        f.forEach(function(a) {
                            margins[a] = d[a] || ""
                        }),
                        e.css(c, margins)
                    }
                    D.spacer.parentNode.insertBefore(c, D.spacer),
                    D.spacer.parentNode.removeChild(D.spacer),
                    C.parentNode.hasAttribute(b) || (e.css(C, C.___origStyle),
                    delete C.___origStyle)
                }
                window.removeEventListener("scroll", G),
                window.removeEventListener("resize", G),
                window.removeEventListener("resize", H),
                C.removeEventListener("mousewheel", I),
                C.removeEventListener("DOMMouseScroll", I),
                C = void 0
            }
            return l
        }
        ;
        var J, K = [];
        return l.on("destroy.internal", function(a) {
            l.removeClassToggle(a.reset)
        }),
        this.setClassToggle = function(a, b) {
            var c = e.get.elements(a);
            return 0 !== c.length && e.type.String(b) ? (K.length > 0 && l.removeClassToggle(),
            J = b,
            K = c,
            l.on("enter.internal_class leave.internal_class", function(a) {
                var b = "enter" === a.type ? e.addClass : e.removeClass;
                K.forEach(function(a) {
                    b(a, J)
                })
            }),
            l) : l
        }
        ,
        this.removeClassToggle = function(a) {
            return a && K.forEach(function(a) {
                e.removeClass(a, J)
            }),
            l.off("start.internal_class end.internal_class"),
            J = void 0,
            K = [],
            l
        }
        ,
        s(),
        l
    }
    ;
    var d = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(a) {
                if (a = parseFloat(a),
                !e.type.Number(a))
                    throw 0;
                return a
            },
            triggerElement: function(a) {
                if (a = a || void 0) {
                    var b = e.get.elements(a)[0];
                    if (!b)
                        throw 0;
                    a = b
                }
                return a
            },
            triggerHook: function(a) {
                var b = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (e.type.Number(a))
                    a = Math.max(0, Math.min(parseFloat(a), 1));
                else {
                    if (!(a in b))
                        throw 0;
                    a = b[a]
                }
                return a
            },
            reverse: function(a) {
                return !!a
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    a.Scene.addOption = function(a, b, c, e) {
        a in d.defaults || (d.defaults[a] = b,
        d.validate[a] = c,
        e && d.shifts.push(a))
    }
    ,
    a.Scene.extend = function(b) {
        var c = this;
        a.Scene = function() {
            return c.apply(this, arguments),
            this.$super = e.extend({}, this),
            b.apply(this, arguments) || this
        }
        ,
        e.extend(a.Scene, c),
        a.Scene.prototype = c.prototype,
        a.Scene.prototype.constructor = a.Scene
    }
    ,
    a.Event = function(a, b, c, d) {
        d = d || {};
        for (var e in d)
            this[e] = d[e];
        return this.type = a,
        this.target = this.currentTarget = c,
        this.namespace = b || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var e = a._util = function(a) {
        var b, c = {}, d = function(a) {
            return parseFloat(a) || 0
        }
        , e = function(b) {
            return b.currentStyle ? b.currentStyle : a.getComputedStyle(b)
        }
        , f = function(b, c, f, g) {
            if (c = c === document ? a : c,
            c === a)
                g = !1;
            else if (!l.DomElement(c))
                return 0;
            b = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase();
            var h = (f ? c["offset" + b] || c["outer" + b] : c["client" + b] || c["inner" + b]) || 0;
            if (f && g) {
                var i = e(c);
                h += "Height" === b ? d(i.marginTop) + d(i.marginBottom) : d(i.marginLeft) + d(i.marginRight)
            }
            return h
        }
        , g = function(a) {
            return a.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(a) {
                return a[1].toUpperCase()
            })
        }
        ;
        c.extend = function(a) {
            for (a = a || {},
            b = 1; b < arguments.length; b++)
                if (arguments[b])
                    for (var c in arguments[b])
                        arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
            return a
        }
        ,
        c.isMarginCollapseType = function(a) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(a) > -1
        }
        ;
        var h = 0
          , i = ["ms", "moz", "webkit", "o"]
          , j = a.requestAnimationFrame
          , k = a.cancelAnimationFrame;
        for (b = 0; !j && b < i.length; ++b)
            j = a[i[b] + "RequestAnimationFrame"],
            k = a[i[b] + "CancelAnimationFrame"] || a[i[b] + "CancelRequestAnimationFrame"];
        j || (j = function(b) {
            var c = (new Date).getTime()
              , d = Math.max(0, 16 - (c - h))
              , e = a.setTimeout(function() {
                b(c + d)
            }, d);
            return h = c + d,
            e
        }
        ),
        k || (k = function(b) {
            a.clearTimeout(b)
        }
        ),
        c.rAF = j.bind(a),
        c.cAF = k.bind(a);
        var l = c.type = function(a) {
            return Object.prototype.toString.call(a).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        l.String = function(a) {
            return "string" === l(a)
        }
        ,
        l.Function = function(a) {
            return "function" === l(a)
        }
        ,
        l.Array = function(a) {
            return Array.isArray(a)
        }
        ,
        l.Number = function(a) {
            return !l.Array(a) && a - parseFloat(a) + 1 >= 0
        }
        ,
        l.DomElement = function(a) {
            return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName
        }
        ;
        var m = c.get = {};
        return m.elements = function(b) {
            var c = [];
            if (l.String(b))
                try {
                    b = document.querySelectorAll(b)
                } catch (d) {
                    return c
                }
            if ("nodelist" === l(b) || l.Array(b))
                for (var e = 0, f = c.length = b.length; f > e; e++) {
                    var g = b[e];
                    c[e] = l.DomElement(g) ? g : m.elements(g)
                }
            else
                (l.DomElement(b) || b === document || b === a) && (c = [b]);
            return c
        }
        ,
        m.scrollTop = function(b) {
            return b && "number" == typeof b.scrollTop ? b.scrollTop : a.pageYOffset || 0
        }
        ,
        m.scrollLeft = function(b) {
            return b && "number" == typeof b.scrollLeft ? b.scrollLeft : a.pageXOffset || 0
        }
        ,
        m.width = function(a, b, c) {
            return f("width", a, b, c)
        }
        ,
        m.height = function(a, b, c) {
            return f("height", a, b, c)
        }
        ,
        m.offset = function(a, b) {
            var c = {
                top: 0,
                left: 0
            };
            if (a && a.getBoundingClientRect) {
                var d = a.getBoundingClientRect();
                c.top = d.top,
                c.left = d.left,
                b || (c.top += m.scrollTop(),
                c.left += m.scrollLeft())
            }
            return c
        }
        ,
        c.addClass = function(a, b) {
            b && (a.classList ? a.classList.add(b) : a.className += " " + b)
        }
        ,
        c.removeClass = function(a, b) {
            b && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        ,
        c.css = function(a, b) {
            if (l.String(b))
                return e(a)[g(b)];
            if (l.Array(b)) {
                var c = {}
                  , d = e(a);
                return b.forEach(function(a) {
                    c[a] = d[g(a)]
                }),
                c
            }
            for (var f in b) {
                var h = b[f];
                h == parseFloat(h) && (h += "px"),
                a.style[g(f)] = h
            }
        }
        ,
        c
    }(window || {});
    return a
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = document.documentElement
      , b = window
      , c = function(c, d) {
        var e = "x" === d ? "Width" : "Height"
          , f = "scroll" + e
          , g = "client" + e
          , h = document.body;
        return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e]
    }
      , d = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.7.5",
        init: function(a, d, e) {
            return this._wdw = a === b,
            this._target = a,
            this._tween = e,
            "object" != typeof d && (d = {
                y: d
            }),
            this.vars = d,
            this._autoKill = d.autoKill !== !1,
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != d.x ? (this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0),
            this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != d.y ? (this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0),
            this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            var d = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , e = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , f = e - this.yPrev
              , g = d - this.xPrev;
            this._autoKill && (!this.skipX && (g > 7 || -7 > g) && c(this._target, "x") > d && (this.skipX = !0),
            !this.skipY && (f > 7 || -7 > f) && c(this._target, "y") > e && (this.skipY = !0),
            this.skipX && this.skipY && (this._tween.kill(),
            this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , e = d.prototype;
    d.max = c,
    e.getX = function() {
        return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }
    ,
    e.getY = function() {
        return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
    }
    ,
    e._kill = function(a) {
        return a.scrollTo_x && (this.skipX = !0),
        a.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, a)
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
          , e = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f)
                e = f[d],
                a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
        }
          , f = function(a, b, d) {
            c.call(this, a, b, d),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = f.prototype.render
        }
          , g = 1e-10
          , h = c._internals
          , i = h.isSelector
          , j = h.isArray
          , k = f.prototype = c.to({}, .1, {})
          , l = [];
        f.version = "1.18.3",
        k.constructor = f,
        k.kill()._gc = !1,
        f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf,
        f.getTweensOf = c.getTweensOf,
        f.lagSmoothing = c.lagSmoothing,
        f.ticker = c.ticker,
        f.render = c.render,
        k.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            c.prototype.invalidate.call(this)
        }
        ,
        k.updateTo = function(a, b) {
            var d, e = this.ratio, f = this.vars.immediateRender || a.immediateRender;
            b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a)
                this.vars[d] = a[d];
            if (this._initted || f)
                if (b)
                    this._initted = !1,
                    f && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var g = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(g, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                this._time > 0 || f)
                    for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                        h = j.s + j.c,
                        j.c *= i,
                        j.s = h - j.c,
                        j = j._next;
            return this
        }
        ,
        k.render = function(a, b, c) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time, p = this._totalTime, q = this._cycle, r = this._duration, s = this._rawPrevTime;
            if (a >= n - 1e-7 ? (this._totalTime = n,
            this._cycle = this._repeat,
            this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (d = !0,
            e = "onComplete",
            c = c || this._timeline.autoRemoveChildren),
            0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
            (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0,
            s > g && (e = "onReverseComplete")),
            this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete",
            d = this._reversed),
            0 > a && (this._active = !1,
            0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0),
            this._rawPrevTime = m = !b || a || s === a ? a : g)),
            this._initted || (c = !0)) : (this._totalTime = this._time = a,
            0 !== this._repeat && (i = r + this._repeatDelay,
            this._cycle = this._totalTime / i >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / i && a >= p && this._cycle--,
            this._time = this._totalTime - this._cycle * i,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time),
            this._time > r ? this._time = r : this._time < 0 && (this._time = 0)),
            this._easeType ? (j = this._time / r,
            k = this._easeType,
            l = this._easePower,
            (1 === k || 3 === k && j >= .5) && (j = 1 - j),
            3 === k && (j *= 2),
            1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j),
            1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)),
            o === this._time && !c && q === this._cycle)
                return void (p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(),
                !this._initted || this._gc)
                    return;
                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                    return this._time = o,
                    this._totalTime = p,
                    this._rawPrevTime = s,
                    this._cycle = q,
                    h.lazyTweens.push(this),
                    void (this._lazy = [a, b]);
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1),
            this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0),
            0 === p && (2 === this._initted && a > 0 && this._init(),
            this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")),
            this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))),
            f = this._firstPT; f; )
                f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c),
            b || (this._totalTime !== p || e) && this._callback("onUpdate")),
            this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
            e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c),
            d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !b && this.vars[e] && this._callback(e),
            0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
        }
        ,
        f.to = function(a, b, c) {
            return new f(a,b,c)
        }
        ,
        f.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new f(a,b,c)
        }
        ,
        f.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new f(a,b,d)
        }
        ,
        f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
            h = h || 0;
            var o, p, q, r, s = 0, t = [], u = function() {
                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments),
                k.apply(n || g.callbackScope || this, m || l)
            }
            , v = g.cycle, w = g.startAt && g.startAt.cycle;
            for (j(a) || ("string" == typeof a && (a = c.selector(a) || a),
            i(a) && (a = d(a))),
            a = a || [],
            0 > h && (a = d(a),
            a.reverse(),
            h *= -1),
            o = a.length - 1,
            q = 0; o >= q; q++) {
                p = {};
                for (r in g)
                    p[r] = g[r];
                if (v && e(p, a, q),
                w) {
                    w = p.startAt = {};
                    for (r in g.startAt)
                        w[r] = g.startAt[r];
                    e(p.startAt, a, q)
                }
                p.delay = s + (p.delay || 0),
                q === o && k && (p.onComplete = u),
                t[q] = new f(a[q],b,p),
                s += h
            }
            return t
        }
        ,
        f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            f.staggerTo(a, b, c, d, e, g, h)
        }
        ,
        f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            f.staggerTo(a, b, d, e, g, h, i)
        }
        ,
        f.delayedCall = function(a, b, c, d, e) {
            return new f(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        f.set = function(a, b) {
            return new f(a,0,b)
        }
        ,
        f.isTweening = function(a) {
            return c.getTweensOf(a, !0).length > 0
        }
        ;
        var m = function(a, b) {
            for (var d = [], e = 0, f = a._first; f; )
                f instanceof c ? d[e++] = f : (b && (d[e++] = f),
                d = d.concat(m(f, b)),
                e = d.length),
                f = f._next;
            return d
        }
          , n = f.getAllTweens = function(b) {
            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
        }
        ;
        f.killAll = function(a, c, d, e) {
            null == c && (c = !0),
            null == d && (d = !0);
            var f, g, h, i = n(0 != e), j = i.length, k = c && d && e;
            for (h = 0; j > h; h++)
                g = i[h],
                (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
        }
        ,
        f.killChildTweensOf = function(a, b) {
            if (null != a) {
                var e, g, k, l, m, n = h.tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a)),
                j(a))
                    for (l = a.length; --l > -1; )
                        f.killChildTweensOf(a[l], b);
                else {
                    e = [];
                    for (k in n)
                        for (g = n[k].target.parentNode; g; )
                            g === a && (e = e.concat(n[k].tweens)),
                            g = g.parentNode;
                    for (m = e.length,
                    l = 0; m > l; l++)
                        b && e[l].totalTime(e[l].totalDuration()),
                        e[l]._enabled(!1, !1)
                }
            }
        }
        ;
        var o = function(a, c, d, e) {
            c = c !== !1,
            d = d !== !1,
            e = e !== !1;
            for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
                g = h[j],
                (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        }
        ;
        return f.pauseAll = function(a, b, c) {
            o(!0, a, b, c)
        }
        ,
        f.resumeAll = function(a, b, c) {
            o(!1, a, b, c)
        }
        ,
        f.globalTimeScale = function(b) {
            var d = a._rootTimeline
              , e = c.ticker.time;
            return arguments.length ? (b = b || g,
            d._startTime = e - (e - d._startTime) * d._timeScale / b,
            d = a._rootFramesTimeline,
            e = c.ticker.frame,
            d._startTime = e - (e - d._startTime) * d._timeScale / b,
            d._timeScale = a._rootTimeline._timeScale = b,
            b) : d._timeScale
        }
        ,
        k.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }
        ,
        k.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }
        ,
        k.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            a > this._duration && (a = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(a, b)) : this._time
        }
        ,
        k.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }
        ,
        k.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        k.repeat = function(a) {
            return arguments.length ? (this._repeat = a,
            this._uncache(!0)) : this._repeat
        }
        ,
        k.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        k.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a,
            this) : this._yoyo
        }
        ,
        f
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
            b.call(this, a),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var c, d, e = this.vars;
            for (d in e)
                c = e[d],
                i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
        }
          , e = 1e-10
          , f = c._internals
          , g = d._internals = {}
          , h = f.isSelector
          , i = f.isArray
          , j = f.lazyTweens
          , k = f.lazyRender
          , l = _gsScope._gsDefine.globals
          , m = function(a) {
            var b, c = {};
            for (b in a)
                c[b] = a[b];
            return c
        }
          , n = function(a, b, c) {
            var d, e, f = a.cycle;
            for (d in f)
                e = f[d],
                a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
        }
          , o = g.pauseCallback = function() {}
          , p = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
          , q = d.prototype = new b;
        return d.version = "1.18.3",
        q.constructor = d,
        q.kill()._gc = q._forcingPlayhead = q._hasPause = !1,
        q.to = function(a, b, d, e) {
            var f = d.repeat && l.TweenMax || c;
            return b ? this.add(new f(a,b,d), e) : this.set(a, d, e)
        }
        ,
        q.from = function(a, b, d, e) {
            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }
        ,
        q.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && l.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }
        ,
        q.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, o, q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            }), r = e.cycle;
            for ("string" == typeof a && (a = c.selector(a) || a),
            a = a || [],
            h(a) && (a = p(a)),
            f = f || 0,
            0 > f && (a = p(a),
            a.reverse(),
            f *= -1),
            o = 0; o < a.length; o++)
                l = m(e),
                l.startAt && (l.startAt = m(l.startAt),
                l.startAt.cycle && n(l.startAt, a, o)),
                r && n(l, a, o),
                q.to(a[o], b, l, o * f);
            return this.add(q, g)
        }
        ,
        q.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender,
            c.runBackwards = !0,
            this.staggerTo(a, b, c, d, e, f, g, h)
        }
        ,
        q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            this.staggerTo(a, b, d, e, f, g, h, i)
        }
        ,
        q.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }
        ,
        q.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0),
            null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),
            this.add(new c(a,0,b), d)
        }
        ,
        d.exportRoot = function(a, b) {
            a = a || {},
            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null == b && (b = !0),
            h._remove(g, !0),
            g._startTime = 0,
            g._rawPrevTime = g._time = g._totalTime = h._time,
            e = h._first; e; )
                f = e._next,
                b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay),
                e = f;
            return h.add(g, 0),
            g
        }
        ,
        q.add = function(e, f, g, h) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)),
            !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal",
                    h = h || 0,
                    j = f,
                    k = e.length,
                    l = 0; k > l; l++)
                        i(m = e[l]) && (m = new d({
                            tweens: m
                        })),
                        this.add(m, j),
                        "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())),
                        j += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e)
                    return this.addLabel(e, f);
                if ("function" != typeof e)
                    throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (n = this,
                o = n.rawTime() > e._startTime; n._timeline; )
                    o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1),
                    n = n._timeline;
            return this
        }
        ,
        q.remove = function(b) {
            if (b instanceof a) {
                this._remove(b, !1);
                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale,
                this
            }
            if (b instanceof Array || b && b.push && i(b)) {
                for (var d = b.length; --d > -1; )
                    this.remove(b[d]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null , b)
        }
        ,
        q._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        q.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null , b, !0, a))
        }
        ,
        q.insert = q.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }
        ,
        q.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null , b, !0, a), c, d)
        }
        ,
        q.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b),
            this
        }
        ,
        q.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return f.vars.onComplete = f.vars.onReverseComplete = b,
            f.data = "isPause",
            this._hasPause = !0,
            this.add(f, a)
        }
        ,
        q.removeLabel = function(a) {
            return delete this._labels[a],
            this
        }
        ,
        q.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }
        ,
        q._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this)
                this.remove(e);
            else if (e && (e instanceof Array || e.push && i(e)))
                for (f = e.length; --f > -1; )
                    e[f]instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c)
                return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0,
            "string" != typeof b || !isNaN(b) && null == this._labels[b])
                null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="),
                -1 === f)
                    return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)),
                b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }
        ,
        q.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }
        ,
        q.stop = function() {
            return this.paused(!0)
        }
        ,
        q.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }
        ,
        q.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }
        ,
        q.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration, o = this._time, p = this._startTime, q = this._timeScale, r = this._paused;
            if (a >= n - 1e-7)
                this._totalTime = this._time = n,
                this._reversed || this._hasPausedChild() || (f = !0,
                h = "onComplete",
                i = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0,
                this._rawPrevTime > e && (h = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                a = n + 1e-4;
            else if (1e-7 > a)
                if (this._totalTime = this._time = 0,
                (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete",
                f = this._reversed),
                0 > a)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0,
                    h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0),
                    this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                    0 === a && f)
                        for (d = this._first; d && 0 === d._startTime; )
                            d._duration || (f = !1),
                            d = d._next;
                    a = 0,
                    this._initted || (i = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !b) {
                    if (a >= o)
                        for (d = this._first; d && d._startTime <= a && !l; )
                            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d),
                            d = d._next;
                    else
                        for (d = this._last; d && d._startTime >= a && !l; )
                            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),
                            d = d._prev;
                    l && (this._time = a = l._startTime,
                    this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = a
            }
            if (this._time !== o && this._first || c || i || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0),
                0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")),
                m = this._time,
                m >= o)
                    for (d = this._first; d && (g = d._next,
                    m === this._time && (!this._paused || r)); )
                        (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(),
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                        d = g;
                else
                    for (d = this._last; d && (g = d._prev,
                    m === this._time && (!this._paused || r)); ) {
                        if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                            if (l === d) {
                                for (l = d._prev; l && l.endTime() > this._time; )
                                    l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c),
                                    l = l._prev;
                                l = null ,
                                this.pause()
                            }
                            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                        }
                        d = g
                    }
                this._onUpdate && (b || (j.length && k(),
                this._callback("onUpdate"))),
                h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[h] && this._callback(h)))
            }
        }
        ,
        q._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild())
                    return !0;
                a = a._next
            }
            return !1
        }
        ,
        q.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
                g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g),
                a !== !1 && (f = f.concat(g.getChildren(!0, b, d)),
                h = f.length))),
                g = g._next;
            return f
        }
        ,
        q.getTweensOf = function(a, b) {
            var d, e, f = this._gc, g = [], h = 0;
            for (f && this._enabled(!0, !0),
            d = c.getTweensOf(a),
            e = d.length; --e > -1; )
                (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0),
            g
        }
        ,
        q.recent = function() {
            return this._recent
        }
        ,
        q._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this)
                    return !0;
                b = b.timeline
            }
            return !1
        }
        ,
        q.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
                e._startTime >= c && (e._startTime += a),
                e = e._next;
            if (b)
                for (d in f)
                    f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }
        ,
        q._kill = function(a, b) {
            if (!a && !b)
                return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; )
                c[d]._kill(a, b) && (e = !0);
            return e
        }
        ,
        q.clear = function(a) {
            var b = this.getChildren(!1, !0, !0)
              , c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
                b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        q.invalidate = function() {
            for (var b = this._first; b; )
                b.invalidate(),
                b = b._next;
            return a.prototype.invalidate.call(this)
        }
        ,
        q._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d; )
                    d._enabled(a, !0),
                    d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }
        ,
        q.totalTime = function(b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        q.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        q.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                        b = e._prev,
                        e._dirty && e.totalDuration(),
                        e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime,
                        e._startTime < 0 && !e._paused && (d -= e._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale),
                        this.shiftChildren(-e._startTime, !1, -9999999999),
                        f = 0),
                        c = e._startTime + e._totalDuration / e._timeScale,
                        c > d && (d = c),
                        e = b;
                    this._duration = this._totalDuration = d,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }
        ,
        q.paused = function(b) {
            if (!b)
                for (var c = this._first, d = this._time; c; )
                    c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0),
                    c = c._next;
            return a.prototype.paused.apply(this, arguments)
        }
        ,
        q.usesFrames = function() {
            for (var b = this._timeline; b._timeline; )
                b = b._timeline;
            return b === a._rootFramesTimeline
        }
        ,
        q.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        d
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
        var d = function(b) {
            a.call(this, b),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        }
          , e = 1e-10
          , f = b._internals
          , g = f.lazyTweens
          , h = f.lazyRender
          , i = new c(null ,null ,1,0)
          , j = d.prototype = new a;
        return j.constructor = d,
        j.kill()._gc = !1,
        d.version = "1.18.3",
        j.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            a.prototype.invalidate.call(this)
        }
        ,
        j.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c)
        }
        ,
        j.removeCallback = function(a, b) {
            if (a)
                if (null == b)
                    this._kill(null , a);
                else
                    for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; )
                        c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        }
        ,
        j.removePause = function(b) {
            return this.removeCallback(a._internals.pauseCallback, b)
        }
        ,
        j.tweenTo = function(a, c) {
            c = c || {};
            var d, e, f, g = {
                ease: i,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (e in c)
                g[e] = c[e];
            return g.time = this._parseTimeOrLabel(a),
            d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001,
            f = new b(this,d,g),
            g.onStart = function() {
                f.target.paused(!0),
                f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),
                c.onStart && f._callback("onStart")
            }
            ,
            f
        }
        ,
        j.tweenFromTo = function(a, b, c) {
            c = c || {},
            a = this._parseTimeOrLabel(a),
            c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this
            },
            c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }
        ,
        j.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, q = this._time, r = this._totalTime, s = this._startTime, t = this._timeScale, u = this._rawPrevTime, v = this._paused, w = this._cycle;
            if (a >= o - 1e-7)
                this._locked || (this._totalTime = o,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (f = !0,
                j = "onComplete",
                k = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0,
                u > e && (j = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e,
                this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p,
                a = p + 1e-4);
            else if (1e-7 > a)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete",
                f = this._reversed),
                0 > a)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0,
                    j = "onReverseComplete") : u >= 0 && this._first && (k = !0),
                    this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e,
                    0 === a && f)
                        for (d = this._first; d && 0 === d._startTime; )
                            d._duration || (f = !1),
                            d = d._next;
                    a = 0,
                    this._initted || (k = !0)
                }
            else if (0 === p && 0 > u && (k = !0),
            this._time = this._rawPrevTime = a,
            this._locked || (this._totalTime = a,
            0 !== this._repeat && (l = p + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time),
            this._time > p ? (this._time = p,
            a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)),
            this._hasPause && !this._forcingPlayhead && !b) {
                if (a = this._time,
                a >= q)
                    for (d = this._first; d && d._startTime <= a && !m; )
                        d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d),
                        d = d._next;
                else
                    for (d = this._last; d && d._startTime >= a && !m; )
                        d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d),
                        d = d._prev;
                m && (this._time = a = m._startTime,
                this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w)
                  , y = x === (this._yoyo && 0 !== (1 & this._cycle))
                  , z = this._totalTime
                  , A = this._cycle
                  , B = this._rawPrevTime
                  , C = this._time;
                if (this._totalTime = w * p,
                this._cycle < w ? x = !x : this._totalTime += p,
                this._time = q,
                this._rawPrevTime = 0 === p ? u - 1e-4 : u,
                this._cycle = w,
                this._locked = !0,
                q = x ? 0 : p,
                this.render(q, b, 0 === p),
                b || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                q !== this._time)
                    return;
                if (y && (q = x ? p + 1e-4 : -1e-4,
                this.render(q, !0, !1)),
                this._locked = !1,
                this._paused && !v)
                    return;
                this._time = C,
                this._totalTime = z,
                this._cycle = A,
                this._rawPrevTime = B
            }
            if (!(this._time !== q && this._first || c || k || m))
                return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0),
            this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0),
            0 === r && this.vars.onStart && 0 !== this._totalTime && (b || this._callback("onStart")),
            n = this._time,
            n >= q)
                for (d = this._first; d && (i = d._next,
                n === this._time && (!this._paused || v)); )
                    (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(),
                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                    d = i;
            else
                for (d = this._last; d && (i = d._prev,
                n === this._time && (!this._paused || v)); ) {
                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                        if (m === d) {
                            for (m = d._prev; m && m.endTime() > this._time; )
                                m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c),
                                m = m._prev;
                            m = null ,
                            this.pause()
                        }
                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                    }
                    d = i
                }
            this._onUpdate && (b || (g.length && h(),
            this._callback("onUpdate"))),
            j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(),
            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !b && this.vars[j] && this._callback(j)))
        }
        ,
        j.getActive = function(a, b, c) {
            null == a && (a = !0),
            null == b && (b = !0),
            null == c && (c = !1);
            var d, e, f = [], g = this.getChildren(a, b, c), h = 0, i = g.length;
            for (d = 0; i > d; d++)
                e = g[d],
                e.isActive() && (f[h++] = e);
            return f
        }
        ,
        j.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++)
                if (c[b].time > a)
                    return c[b].name;
            return null
        }
        ,
        j.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
                if (b[c].time < a)
                    return b[c].name;
            return null
        }
        ,
        j.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels)
                b[c++] = {
                    time: this._labels[a],
                    name: a
                };
            return b.sort(function(a, b) {
                return a.time - b.time
            }),
            b
        }
        ,
        j.progress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }
        ,
        j.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }
        ,
        j.totalDuration = function(b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        j.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            a > this._duration && (a = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(a, b)) : this._time
        }
        ,
        j.repeat = function(a) {
            return arguments.length ? (this._repeat = a,
            this._uncache(!0)) : this._repeat
        }
        ,
        j.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        j.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a,
            this) : this._yoyo
        }
        ,
        j.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        d
    }, !0),
    function() {
        var a = 180 / Math.PI
          , b = []
          , c = []
          , d = []
          , e = {}
          , f = _gsScope._gsDefine.globals
          , g = function(a, b, c, d) {
            this.a = a,
            this.b = b,
            this.c = c,
            this.d = d,
            this.da = d - a,
            this.ca = c - a,
            this.ba = b - a
        }
          , h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , i = function(a, b, c, d) {
            var e = {
                a: a
            }
              , f = {}
              , g = {}
              , h = {
                c: d
            }
              , i = (a + b) / 2
              , j = (b + c) / 2
              , k = (c + d) / 2
              , l = (i + j) / 2
              , m = (j + k) / 2
              , n = (m - l) / 8;
            return e.b = i + (a - i) / 4,
            f.b = l + n,
            e.c = f.a = (e.b + f.b) / 2,
            f.c = g.a = (l + m) / 2,
            g.b = m - n,
            h.b = k + (d - k) / 4,
            g.c = h.a = (g.b + h.b) / 2,
            [e, f, g, h]
        }
          , j = function(a, e, f, g, h) {
            var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
            for (j = 0; w > j; j++)
                n = a[x],
                k = n.a,
                l = n.d,
                m = a[x + 1].d,
                h ? (t = b[j],
                u = c[j],
                v = (u + t) * e * .25 / (g ? .5 : d[j] || .5),
                o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0),
                p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0),
                q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5,
                p = l + (m - l) * e * .5,
                q = l - (o + p) / 2),
                o += q,
                p += q,
                n.c = r = o,
                0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a),
                n.da = l - k,
                n.ca = r - k,
                n.ba = y - k,
                f ? (s = i(k, y, r, l),
                a.splice(x, 1, s[0], s[1], s[2], s[3]),
                x += 4) : x++,
                y = p;
            n = a[x],
            n.b = y,
            n.c = y + .4 * (n.d - y),
            n.da = n.d - n.a,
            n.ca = n.c - n.a,
            n.ba = y - n.a,
            f && (s = i(n.a, y, n.c, n.d),
            a.splice(x, 1, s[0], s[1], s[2], s[3]))
        }
          , k = function(a, d, e, f) {
            var h, i, j, k, l, m, n = [];
            if (f)
                for (a = [f].concat(a),
                i = a.length; --i > -1; )
                    "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
            if (h = a.length - 2,
            0 > h)
                return n[0] = new g(a[0][d],0,0,a[-1 > h ? 0 : 1][d]),
                n;
            for (i = 0; h > i; i++)
                j = a[i][d],
                k = a[i + 1][d],
                n[i] = new g(j,0,0,k),
                e && (l = a[i + 2][d],
                b[i] = (b[i] || 0) + (k - j) * (k - j),
                c[i] = (c[i] || 0) + (l - k) * (l - k));
            return n[i] = new g(a[i][d],0,0,a[i + 1][d]),
            n
        }
          , l = function(a, f, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
            l = "string" == typeof l ? "," + l + "," : h,
            null == f && (f = 1);
            for (o in a[0])
                w.push(o);
            if (a.length > 1) {
                for (u = a[a.length - 1],
                t = !0,
                n = w.length; --n > -1; )
                    if (o = w[n],
                    Math.abs(x[o] - u[o]) > .05) {
                        t = !1;
                        break
                    }
                t && (a = a.concat(),
                m && a.unshift(m),
                a.push(a[1]),
                m = a[a.length - 3])
            }
            for (b.length = c.length = d.length = 0,
            n = w.length; --n > -1; )
                o = w[n],
                e[o] = -1 !== l.indexOf("," + o + ","),
                v[o] = k(a, o, e[o], m);
            for (n = b.length; --n > -1; )
                b[n] = Math.sqrt(b[n]),
                c[n] = Math.sqrt(c[n]);
            if (!i) {
                for (n = w.length; --n > -1; )
                    if (e[o])
                        for (p = v[w[n]],
                        s = p.length - 1,
                        q = 0; s > q; q++)
                            r = p[q + 1].da / c[q] + p[q].da / b[q] || 0,
                            d[q] = (d[q] || 0) + r * r;
                for (n = d.length; --n > -1; )
                    d[n] = Math.sqrt(d[n])
            }
            for (n = w.length,
            q = g ? 4 : 1; --n > -1; )
                o = w[n],
                p = v[o],
                j(p, f, g, i, e[o]),
                t && (p.splice(0, q),
                p.splice(p.length - q, q));
            return v
        }
          , m = function(a, b, c) {
            b = b || "soft";
            var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
            if (r && c && (a = [c].concat(a)),
            null == a || a.length < q + 1)
                throw "invalid Bezier data";
            for (m in a[0])
                s.push(m);
            for (j = s.length; --j > -1; ) {
                for (m = s[j],
                p[m] = i = [],
                n = 0,
                l = a.length,
                k = 0; l > k; k++)
                    d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o),
                    r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                    i[n++] = d;
                for (l = n - q + 1,
                n = 0,
                k = 0; l > k; k += q)
                    d = i[k],
                    e = i[k + 1],
                    f = i[k + 2],
                    h = 2 === q ? 0 : i[k + 3],
                    i[n++] = o = 3 === q ? new g(d,e,f,h) : new g(d,(2 * e + d) / 3,(2 * e + f) / 3,f);
                i.length = n
            }
            return p
        }
          , n = function(a, b, c) {
            for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; )
                for (m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1; c >= k; k++)
                    j = o * k,
                    l = 1 - j,
                    d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j),
                    n = p * c + k - 1,
                    b[n] = (b[n] || 0) + d * d
        }
          , o = function(a, b) {
            b = b >> 0 || 6;
            var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
            for (c in a)
                n(a[c], g, b);
            for (e = g.length,
            d = 0; e > d; d++)
                i += Math.sqrt(g[d]),
                f = d % b,
                m[f] = i,
                f === k && (j += i,
                f = d / b >> 0,
                l[f] = m,
                h[f] = j,
                i = 0,
                m = []);
            return {
                length: j,
                lengths: h,
                segments: l
            }
        }
          , p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.5",
            API: 2,
            global: !0,
            init: function(a, b, c) {
                this._target = a,
                b instanceof Array && (b = {
                    values: b
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null ;
                for (d in k)
                    this._props.push(d);
                for (f = this._props.length; --f > -1; )
                    d = this._props[f],
                    this._overwriteProps.push(d),
                    e = this._func[d] = "function" == typeof a[d],
                    j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]),
                    h || j[d] !== i[0][d] && (h = j);
                if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j),
                this._segCount = this._beziers[d].length,
                this._timeRes) {
                    var p = o(this._beziers, this._timeRes);
                    this._length = p.length,
                    this._lengths = p.lengths,
                    this._segments = p.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (n = this._autoRotate)
                    for (this._initialRotations = [],
                    n[0]instanceof Array || (this._autoRotate = n = [n]),
                    f = n.length; --f > -1; ) {
                        for (g = 0; 3 > g; g++)
                            d = n[f][g],
                            this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                        d = n[f][2],
                        this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0
                    }
                return this._startRatio = c.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(b) {
                var c, d, e, f, g, h, i, j, k, l, m = this._segCount, n = this._func, o = this._target, p = b !== this._startRatio;
                if (this._timeRes) {
                    if (k = this._lengths,
                    l = this._curSeg,
                    b *= this._length,
                    e = this._li,
                    b > this._l2 && m - 1 > e) {
                        for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; )
                            ;
                        this._l1 = k[e - 1],
                        this._li = e,
                        this._curSeg = l = this._segments[e],
                        this._s2 = l[this._s1 = this._si = 0]
                    } else if (b < this._l1 && e > 0) {
                        for (; e > 0 && (this._l1 = k[--e]) >= b; )
                            ;
                        0 === e && b < this._l1 ? this._l1 = 0 : e++,
                        this._l2 = k[e],
                        this._li = e,
                        this._curSeg = l = this._segments[e],
                        this._s1 = l[(this._si = l.length - 1) - 1] || 0,
                        this._s2 = l[this._si]
                    }
                    if (c = e,
                    b -= this._l1,
                    e = this._si,
                    b > this._s2 && e < l.length - 1) {
                        for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; )
                            ;
                        this._s1 = l[e - 1],
                        this._si = e
                    } else if (b < this._s1 && e > 0) {
                        for (; e > 0 && (this._s1 = l[--e]) >= b; )
                            ;
                        0 === e && b < this._s1 ? this._s1 = 0 : e++,
                        this._s2 = l[e],
                        this._si = e
                    }
                    h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else
                    c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0,
                    h = (b - c * (1 / m)) * m;
                for (d = 1 - h,
                e = this._props.length; --e > -1; )
                    f = this._props[e],
                    g = this._beziers[f][c],
                    i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a,
                    this._round[f] && (i = Math.round(i)),
                    n[f] ? o[f](i) : o[f] = i;
                if (this._autoRotate) {
                    var q, r, s, t, u, v, w, x = this._autoRotate;
                    for (e = x.length; --e > -1; )
                        f = x[e][2],
                        v = x[e][3] || 0,
                        w = x[e][4] === !0 ? 1 : a,
                        g = this._beziers[x[e][0]],
                        q = this._beziers[x[e][1]],
                        g && q && (g = g[c],
                        q = q[c],
                        r = g.a + (g.b - g.a) * h,
                        t = g.b + (g.c - g.b) * h,
                        r += (t - r) * h,
                        t += (g.c + (g.d - g.c) * h - t) * h,
                        s = q.a + (q.b - q.a) * h,
                        u = q.b + (q.c - q.b) * h,
                        s += (u - s) * h,
                        u += (q.c + (q.d - q.c) * h - u) * h,
                        i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e],
                        n[f] ? o[f](i) : o[f] = i)
                }
            }
        })
          , q = p.prototype;
        p.bezierThrough = l,
        p.cubicToQuadratic = i,
        p._autoCSS = !0,
        p.quadraticToCubic = function(a, b, c) {
            return new g(a,(2 * b + a) / 3,(2 * b + c) / 3,c)
        }
        ,
        p._cssRegister = function() {
            var a = f.CSSPlugin;
            if (a) {
                var b = a._internals
                  , c = b._parseToProxy
                  , d = b._setPluginRatio
                  , e = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function(a, b, f, g, h, i) {
                        b instanceof Array && (b = {
                            values: b
                        }),
                        i = new p;
                        var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                        if (0 > n)
                            return h;
                        for (j = 0; n >= j; j++)
                            l = c(a, m[j], g, h, i, n !== j),
                            o[j] = l.end;
                        for (k in b)
                            q[k] = b[k];
                        return q.values = o,
                        h = new e(a,"bezier",0,0,l.pt,2),
                        h.data = l,
                        h.plugin = i,
                        h.setRatio = d,
                        0 === q.autoRotate && (q.autoRotate = !0),
                        !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate),
                        q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1),
                        q.autoRotate && (g._transform || g._enableTransforms(!1),
                        l.autoRotate = g._target._gsTransform),
                        i._onInitTween(l.proxy, q, g._tween),
                        h
                    }
                })
            }
        }
        ,
        q._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1; )
                (a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        }
        ,
        q._kill = function(a) {
            var b, c, d = this._props;
            for (b in this._beziers)
                if (b in a)
                    for (delete this._beziers[b],
                    delete this._func[b],
                    c = d.length; --c > -1; )
                        d[c] === b && d.splice(c, 1);
            return this._super._kill.call(this, a)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = g.prototype.setRatio
        }
        , h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
        j.constructor = g,
        g.version = "1.18.3",
        g.API = 2,
        g.defaultTransformPerspective = 0,
        g.defaultSkewType = "compensated",
        g.defaultSmoothOrigin = !0,
        j = "px",
        g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\-|\.|\b)[\d\.e]+\b/g, r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, u = /(?:\d|\-|\+|=|#|\.)*/g, v = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, x = /alpha\(opacity *=.+?\)/i, y = /^(rgb|hsl)/, z = /([A-Z])/g, A = /-([a-z])/gi, B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, C = function(a, b) {
            return b.toUpperCase()
        }
        , D = /(?:Left|Right|Width)/i, E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, G = /,(?=[^\)]*(?:\(|$))/gi, H = /[\s,\(]/i, I = Math.PI / 180, J = 180 / Math.PI, K = {}, L = document, M = function(a) {
            return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", a) : L.createElement(a)
        }
        , N = M("div"), O = M("img"), P = g._internals = {
            _specialProps: i
        }, Q = navigator.userAgent, R = function() {
            var a = Q.indexOf("Android")
              , b = M("a");
            return m = -1 !== Q.indexOf("Safari") && -1 === Q.indexOf("Chrome") && (-1 === a || Number(Q.substr(a + 8, 1)) > 3),
            o = m && Number(Q.substr(Q.indexOf("Version/") + 8, 1)) < 6,
            n = -1 !== Q.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q)) && (p = parseFloat(RegExp.$1)),
            b ? (b.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(b.style.opacity)) : !1
        }(), S = function(a) {
            return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        , T = function(a) {
            window.console && console.log(a)
        }
        , U = "", V = "", W = function(a, b) {
            b = b || N;
            var c, d, e = b.style;
            if (void 0 !== e[a])
                return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1),
            c = ["O", "Moz", "ms", "Ms", "Webkit"],
            d = 5; --d > -1 && void 0 === e[c[d] + a]; )
                ;
            return d >= 0 ? (V = 3 === d ? "ms" : c[d],
            U = "-" + V.toLowerCase() + "-",
            V + a) : null
        }
        , X = L.defaultView ? L.defaultView.getComputedStyle : function() {}
        , Y = g.getStyle = function(a, b, c, d, e) {
            var f;
            return R || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || X(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]),
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : S(a)
        }
        , Z = P.convertToPixels = function(a, c, d, e, f) {
            if ("px" === e || !e)
                return d;
            if ("auto" === e || !d)
                return 0;
            var h, i, j, k = D.test(c), l = a, m = N.style, n = 0 > d;
            if (n && (d = -d),
            "%" === e && -1 !== c.indexOf("border"))
                h = d / 100 * (k ? a.clientWidth : a.clientHeight);
            else {
                if (m.cssText = "border:0 solid red;position:" + Y(a, "position") + ";line-height:0;",
                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e)
                    m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                    if (l = a.parentNode || L.body,
                    i = l._gsCache,
                    j = b.ticker.frame,
                    i && k && i.time === j)
                        return i.width * d / 100;
                    m[k ? "width" : "height"] = d + e
                }
                l.appendChild(N),
                h = parseFloat(N[k ? "offsetWidth" : "offsetHeight"]),
                l.removeChild(N),
                k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},
                i.time = j,
                i.width = h / d * 100),
                0 !== h || f || (h = Z(a, c, d, e, !0))
            }
            return n ? -h : h
        }
        , $ = P.calculateOffset = function(a, b, c) {
            if ("absolute" !== Y(a, "position", c))
                return 0;
            var d = "left" === b ? "Left" : "Top"
              , e = Y(a, "margin" + d, c);
            return a["offset" + d] - (Z(a, b, parseFloat(e), e.replace(u, "")) || 0)
        }
        , _ = function(a, b) {
            var c, d, e, f = {};
            if (b = b || X(a, null ))
                if (c = b.length)
                    for (; --c > -1; )
                        e = b[c],
                        (-1 === e.indexOf("-transform") || Aa === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
                else
                    for (c in b)
                        (-1 === c.indexOf("Transform") || za === c) && (f[c] = b[c]);
            else if (b = a.currentStyle || a.style)
                for (c in b)
                    "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
            return R || (f.opacity = S(a)),
            d = Na(a, b, !1),
            f.rotation = d.rotation,
            f.skewX = d.skewX,
            f.scaleX = d.scaleX,
            f.scaleY = d.scaleY,
            f.x = d.x,
            f.y = d.y,
            Ca && (f.z = d.z,
            f.rotationX = d.rotationX,
            f.rotationY = d.rotationY,
            f.scaleZ = d.scaleZ),
            f.filters && delete f.filters,
            f
        }
        , aa = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c)
                "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : $(a, g),
                void 0 !== j[g] && (h = new pa(j,g,j[g],h)));
            if (d)
                for (g in d)
                    "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            }
        }
        , ba = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ca = ["marginLeft", "marginRight", "marginTop", "marginBottom"], da = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight)
              , e = ba[b]
              , f = e.length;
            for (c = c || X(a, null ); --f > -1; )
                d -= parseFloat(Y(a, "padding" + e[f], c, !0)) || 0,
                d -= parseFloat(Y(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d
        }
        , ea = function(a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
                return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
            if (d.length > 3 && !b) {
                for (d = a.split(", ").join(",").split(","),
                a = [],
                c = 0; c < d.length; c++)
                    a.push(ea(d[c]));
                return a.join(",")
            }
            return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"),
            ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"),
            a = e + " " + f + (d.length > 2 ? " " + d[2] : ""),
            b && (b.oxp = -1 !== e.indexOf("%"),
            b.oyp = -1 !== f.indexOf("%"),
            b.oxr = "=" === e.charAt(1),
            b.oyr = "=" === f.charAt(1),
            b.ox = parseFloat(e.replace(t, "")),
            b.oy = parseFloat(f.replace(t, "")),
            b.v = a),
            b || a
        }
        , fa = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
        }
        , ga = function(a, b) {
            return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
        }
        , ha = function(a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return null == a ? h = b : "number" == typeof a ? h = a : (e = 360,
            f = a.split("_"),
            i = "=" === a.charAt(1),
            g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : J) - (i ? 0 : b),
            f.length && (d && (d[c] = b + g),
            -1 !== a.indexOf("short") && (g %= e,
            g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),
            h = b + g),
            j > h && h > -j && (h = 0),
            h
        }
        , ia = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ja = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
            255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
        }
        , ka = g.parseColor = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
                if ("number" == typeof a)
                    c = [a >> 16, a >> 8 & 255, 255 & a];
                else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                    ia[a])
                        c = ia[a];
                    else if ("#" === a.charAt(0))
                        4 === a.length && (d = a.charAt(1),
                        e = a.charAt(2),
                        f = a.charAt(3),
                        a = "#" + d + d + e + e + f + f),
                        a = parseInt(a.substr(1), 16),
                        c = [a >> 16, a >> 8 & 255, 255 & a];
                    else if ("hsl" === a.substr(0, 3))
                        if (c = m = a.match(q),
                        b) {
                            if (-1 !== a.indexOf("="))
                                return a.match(r)
                        } else
                            g = Number(c[0]) % 360 / 360,
                            h = Number(c[1]) / 100,
                            i = Number(c[2]) / 100,
                            e = .5 >= i ? i * (h + 1) : i + h - i * h,
                            d = 2 * i - e,
                            c.length > 3 && (c[3] = Number(a[3])),
                            c[0] = ja(g + 1 / 3, d, e),
                            c[1] = ja(g, d, e),
                            c[2] = ja(g - 1 / 3, d, e);
                    else
                        c = a.match(q) || ia.transparent;
                    c[0] = Number(c[0]),
                    c[1] = Number(c[1]),
                    c[2] = Number(c[2]),
                    c.length > 3 && (c[3] = Number(c[3]))
                }
            else
                c = ia.black;
            return b && !m && (d = c[0] / 255,
            e = c[1] / 255,
            f = c[2] / 255,
            j = Math.max(d, e, f),
            k = Math.min(d, e, f),
            i = (j + k) / 2,
            j === k ? g = h = 0 : (l = j - k,
            h = i > .5 ? l / (2 - j - k) : l / (j + k),
            g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4,
            g *= 60),
            c[0] = g + .5 | 0,
            c[1] = 100 * h + .5 | 0,
            c[2] = 100 * i + .5 | 0),
            c
        }
        , la = function(a, b) {
            var c, d, e, f = a.match(ma) || [], g = 0, h = f.length ? "" : a;
            for (c = 0; c < f.length; c++)
                d = f[c],
                e = a.substr(g, a.indexOf(d, g) - g),
                g += e.length + d.length,
                d = ka(d, b),
                3 === d.length && d.push(1),
                h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h + a.substr(g)
        }
        , ma = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ia)
            ma += "|" + j + "\\b";
        ma = new RegExp(ma + ")","gi"),
        g.colorStringFilter = function(a) {
            var b, c = a[0] + a[1];
            ma.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
            a[0] = la(a[0], b),
            a[1] = la(a[1], b)),
            ma.lastIndex = 0
        }
        ,
        b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var na = function(a, b, c, d) {
            if (null == a)
                return function(a) {
                    return a
                }
                ;
            var e, f = b ? (a.match(ma) || [""])[0] : "", g = a.split(f).join("").match(s) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(q, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (o = a.replace(G, "|").split("|"),
                    n = 0; n < o.length; n++)
                        o[n] = e(o[n]);
                    return o.join(",")
                }
                if (b = (a.match(ma) || [f])[0],
                m = a.split(b).join("").match(s) || [],
                n = m.length,
                k > n--)
                    for (; ++n < k; )
                        m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            }
            : function(a) {
                var b, f, m;
                if ("number" == typeof a)
                    a += l;
                else if (d && G.test(a)) {
                    for (f = a.replace(G, "|").split("|"),
                    m = 0; m < f.length; m++)
                        f[m] = e(f[m]);
                    return f.join(",")
                }
                if (b = a.match(s) || [],
                m = b.length,
                k > m--)
                    for (; ++m < k; )
                        b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                return h + b.join(j) + i
            }
            : function(a) {
                return a
            }
        }
          , oa = function(a) {
            return a = a.split(","),
            function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {},
                i = 0; 4 > i; i++)
                    h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
            }
        }
          , pa = (P._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; )
                b = h[i.v],
                i.r ? b = Math.round(b) : j > b && b > -j && (b = 0),
                i.t[i.p] = b,
                i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = h.rotation),
            1 === a || 0 === a)
                for (i = g.firstMPT,
                f = 1 === a ? "e" : "b"; i; ) {
                    if (c = i.t,
                    c.type) {
                        if (1 === c.type) {
                            for (e = c.xs0 + c.s + c.xs1,
                            d = 1; d < c.l; d++)
                                e += c["xn" + d] + c["xs" + (d + 1)];
                            c[f] = e
                        }
                    } else
                        c[f] = c.s + c.xs0;
                    i = i._next
                }
        }
        ,
        function(a, b, c, d, e) {
            this.t = a,
            this.p = b,
            this.v = c,
            this.r = e,
            d && (d._prev = this,
            this._next = d)
        }
        )
          , qa = (P._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = K;
            for (c._transform = null ,
            K = b,
            d = k = c.parse(a, b, d, e),
            K = p,
            f && (c._transform = o,
            l && (l._prev = null ,
            l._prev && (l._prev._next = null ))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p,
                n[h] = d.s + d.c,
                m[h] = d.s,
                f || (j = new pa(d,"s",h,j,d.r),
                d.c = 0),
                1 === d.type))
                    for (g = d.l; --g > 0; )
                        i = "xn" + g,
                        h = d.p + "_" + i,
                        n[h] = d.data[i],
                        m[h] = d[i],
                        f || (j = new pa(d,i,h,j,d.rxp[i]));
                d = d._next
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            }
        }
        ,
        P.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a,
            this.p = b,
            this.s = d,
            this.c = e,
            this.n = i || b,
            a instanceof qa || f.push(this.n),
            this.r = j,
            this.type = h || 0,
            k && (this.pr = k,
            c = !0),
            this.b = void 0 === l ? d : l,
            this.e = void 0 === m ? d + e : m,
            g && (this._next = g,
            g._prev = this)
        }
        )
          , ra = function(a, b, c, d, e, f) {
            var g = new qa(a,b,c,d - c,e,-1,f);
            return g.b = c,
            g.e = g.xs0 = d,
            g
        }
          , sa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
            c = c || f || "",
            h = new qa(a,b,0,0,h,l ? 2 : 1,null ,!1,i,c,d),
            d += "",
            e && ma.test(d + c) && (d = [c, d],
            g.colorStringFilter(d),
            c = d[0],
            d = d[1]);
            var m, n, o, p, s, t, u, v, w, x, y, z, A, B = c.split(", ").join(",").split(" "), C = d.split(", ").join(",").split(" "), D = B.length, E = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (B = B.join(" ").replace(G, ", ").split(" "),
            C = C.join(" ").replace(G, ", ").split(" "),
            D = B.length),
            D !== C.length && (B = (f || "").split(" "),
            D = B.length),
            h.plugin = j,
            h.setRatio = l,
            ma.lastIndex = 0,
            m = 0; D > m; m++)
                if (p = B[m],
                s = C[m],
                v = parseFloat(p),
                v || 0 === v)
                    h.appendXtra("", v, fa(s, v), s.replace(r, ""), E && -1 !== s.indexOf("px"), !0);
                else if (e && ma.test(p))
                    z = s.indexOf(")") + 1,
                    z = ")" + (z ? s.substr(z) : ""),
                    A = -1 !== s.indexOf("hsl") && R,
                    p = ka(p, A),
                    s = ka(s, A),
                    w = p.length + s.length > 6,
                    w && !R && 0 === s[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent",
                    h.e = h.e.split(C[m]).join("transparent")) : (R || (w = !1),
                    A ? h.appendXtra(w ? "hsla(" : "hsl(", p[0], fa(s[0], p[0]), ",", !1, !0).appendXtra("", p[1], fa(s[1], p[1]), "%,", !1).appendXtra("", p[2], fa(s[2], p[2]), w ? "%," : "%" + z, !1) : h.appendXtra(w ? "rgba(" : "rgb(", p[0], s[0] - p[0], ",", !0, !0).appendXtra("", p[1], s[1] - p[1], ",", !0).appendXtra("", p[2], s[2] - p[2], w ? "," : z, !0),
                    w && (p = p.length < 4 ? 1 : p[3],
                    h.appendXtra("", p, (s.length < 4 ? 1 : s[3]) - p, z, !1))),
                    ma.lastIndex = 0;
                else if (t = p.match(q)) {
                    if (u = s.match(r),
                    !u || u.length !== t.length)
                        return h;
                    for (o = 0,
                    n = 0; n < t.length; n++)
                        y = t[n],
                        x = p.indexOf(y, o),
                        h.appendXtra(p.substr(o, x - o), Number(y), fa(u[n], y), "", E && "px" === p.substr(x + y.length, 2), 0 === n),
                        o = x + y.length;
                    h["xs" + h.l] += p.substr(o)
                } else
                    h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + s : s;
            if (-1 !== d.indexOf("=") && h.data) {
                for (z = h.xs0 + h.data.s,
                m = 1; m < h.l; m++)
                    z += h["xs" + m] + h.data["xn" + m];
                h.e = z + h["xs" + m]
            }
            return h.l || (h.type = -1,
            h.xs0 = h.e),
            h.xfirst || h
        }
          , ta = 9;
        for (j = qa.prototype,
        j.l = j.pr = 0; --ta > 0; )
            j["xn" + ta] = 0,
            j["xs" + ta] = "";
        j.xs0 = "",
        j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null ,
        j.appendXtra = function(a, b, c, d, e, f) {
            var g = this
              , h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "",
            c || 0 === h || g.plugin ? (g.l++,
            g.type = g.setRatio ? 2 : 1,
            g["xs" + g.l] = d || "",
            h > 0 ? (g.data["xn" + h] = b + c,
            g.rxp["xn" + h] = e,
            g["xn" + h] = b,
            g.plugin || (g.xfirst = new qa(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),
            g.xfirst.xs0 = 0),
            g) : (g.data = {
                s: b + c
            },
            g.rxp = {},
            g.s = b,
            g.c = c,
            g.r = e,
            g)) : (g["xs" + h] += b + (d || ""),
            g)
        }
        ;
        var ua = function(a, b) {
            b = b || {},
            this.p = b.prefix ? W(a) || a : a,
            i[a] = i[this.p] = this,
            this.format = b.formatter || na(b.defaultValue, b.color, b.collapsible, b.multi),
            b.parser && (this.parse = b.parser),
            this.clrs = b.color,
            this.multi = b.multi,
            this.keyword = b.keyword,
            this.dflt = b.defaultValue,
            this.pr = b.priority || 0
        }
          , va = P._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [g],
            d = 0; d < f.length; d++)
                b.prefix = 0 === d && b.prefix,
                b.defaultValue = c[d] || g,
                e = new ua(f[d],b)
        }
          , wa = function(a) {
            if (!i[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                va(a, {
                    parser: function(a, c, d, e, f, g, j) {
                        var k = h.com.greensock.plugins[b];
                        return k ? (k._cssRegister(),
                        i[d].parse(a, c, d, e, f, g, j)) : (T("Error: " + b + " js file not loaded."),
                        f)
                    }
                })
            }
        }
        ;
        j = ua.prototype,
        j.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"),
            i = c.replace(G, "|").split("|")) : m && (h = [b],
            i = [c])),
            i) {
                for (j = i.length > h.length ? i.length : h.length,
                g = 0; j > g; g++)
                    b = h[g] = h[g] || this.dflt,
                    c = i[g] = i[g] || this.dflt,
                    m && (k = b.indexOf(m),
                    l = c.indexOf(m),
                    k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "),
                c = i.join(", ")
            }
            return sa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }
        ,
        j.parse = function(a, b, c, d, f, g, h) {
            return this.parseComplex(a.style, this.format(Y(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }
        ,
        g.registerSpecialProp = function(a, b, c) {
            va(a, {
                parser: function(a, d, e, f, g, h, i) {
                    var j = new qa(a,e,0,0,g,2,e,!1,c);
                    return j.plugin = h,
                    j.setRatio = b(a, d, f._tween, e),
                    j
                },
                priority: c
            })
        }
        ,
        g.useSVGTransformAttr = m || n;
        var xa, ya = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), za = W("transform"), Aa = U + "transform", Ba = W("transformOrigin"), Ca = null !== W("perspective"), Da = P.Transform = function() {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0,
            this.force3D = g.defaultForce3D !== !1 && Ca ? g.defaultForce3D || "auto" : !1
        }
        , Ea = window.SVGElement, Fa = function(a, b, c) {
            var d, e = L.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
            for (d in c)
                e.setAttributeNS(null , d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e),
            e
        }
        , Ga = L.documentElement, Ha = function() {
            var a, b, c, d = p || /Android/i.test(Q) && !window.chrome;
            return L.createElementNS && !d && (a = Fa("svg", Ga),
            b = Fa("rect", a, {
                width: 100,
                height: 50,
                x: 100
            }),
            c = b.getBoundingClientRect().width,
            b.style[Ba] = "50% 50%",
            b.style[za] = "scaleX(0.5)",
            d = c === b.getBoundingClientRect().width && !(n && Ca),
            Ga.removeChild(a)),
            d
        }(), Ia = function(a, b, c, d, e, f) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Ma(a, !0);
            v && (t = v.xOrigin,
            u = v.yOrigin),
            (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(),
            b = ea(b).split(" "),
            h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]),
            c.xOrigin = k = parseFloat(h[0]),
            c.yOrigin = l = parseFloat(h[1]),
            d && w !== La && (m = w[0],
            n = w[1],
            o = w[2],
            p = w[3],
            q = w[4],
            r = w[5],
            s = m * p - n * o,
            i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s,
            j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s,
            k = c.xOrigin = h[0] = i,
            l = c.yOrigin = h[1] = j),
            v && (f && (c.xOffset = v.xOffset,
            c.yOffset = v.yOffset,
            v = c),
            e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t,
            j = l - u,
            v.xOffset += i * w[0] + j * w[2] - i,
            v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0),
            f || a.setAttribute("data-svg-origin", h.join(" "))
        }
        , Ja = function(a) {
            try {
                return a.getBBox()
            } catch (a) {}
        }
        , Ka = function(a) {
            return !!(Ea && a.getBBox && a.getCTM && Ja(a))
        }
        , La = [1, 0, 0, 1, 0, 0], Ma = function(a, b) {
            var c, d, e, f, g, h = a._gsTransform || new Da, i = 1e5;
            if (za ? d = Y(a, Aa, null , !0) : a.currentStyle && (d = a.currentStyle.filter.match(E),
            d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
            (h.svg || a.getBBox && Ka(a)) && (c && -1 !== (a.style[za] + "").indexOf("matrix") && (d = a.style[za],
            c = 0),
            e = a.getAttribute("transform"),
            c && e && (-1 !== e.indexOf("matrix") ? (d = e,
            c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            c = 0))),
            c)
                return La;
            for (e = (d || "").match(q) || [],
            ta = e.length; --ta > -1; )
                f = Number(e[ta]),
                e[ta] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
        }
        , Na = P.getTransform = function(a, c, d, f) {
            if (a._gsTransform && d && !f)
                return a._gsTransform;
            var h, i, j, k, l, m, n = d ? a._gsTransform || new Da : new Da, o = n.scaleX < 0, p = 2e-5, q = 1e5, r = Ca ? parseFloat(Y(a, Ba, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0, s = parseFloat(g.defaultTransformPerspective) || 0;
            if (n.svg = !(!a.getBBox || !Ka(a)),
            n.svg && (Ia(a, Y(a, Ba, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")),
            xa = g.useSVGTransformAttr || Ha),
            h = Ma(a),
            h !== La) {
                if (16 === h.length) {
                    var t, u, v, w, x, y = h[0], z = h[1], A = h[2], B = h[3], C = h[4], D = h[5], E = h[6], F = h[7], G = h[8], H = h[9], I = h[10], K = h[12], L = h[13], M = h[14], N = h[11], O = Math.atan2(E, I);
                    n.zOrigin && (M = -n.zOrigin,
                    K = G * M - h[12],
                    L = H * M - h[13],
                    M = I * M + n.zOrigin - h[14]),
                    n.rotationX = O * J,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = C * w + G * x,
                    u = D * w + H * x,
                    v = E * w + I * x,
                    G = C * -x + G * w,
                    H = D * -x + H * w,
                    I = E * -x + I * w,
                    N = F * -x + N * w,
                    C = t,
                    D = u,
                    E = v),
                    O = Math.atan2(-A, I),
                    n.rotationY = O * J,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    t = y * w - G * x,
                    u = z * w - H * x,
                    v = A * w - I * x,
                    H = z * x + H * w,
                    I = A * x + I * w,
                    N = B * x + N * w,
                    y = t,
                    z = u,
                    A = v),
                    O = Math.atan2(z, y),
                    n.rotation = O * J,
                    O && (w = Math.cos(-O),
                    x = Math.sin(-O),
                    y = y * w + C * x,
                    u = z * w + D * x,
                    D = z * -x + D * w,
                    E = A * -x + E * w,
                    z = u),
                    n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0,
                    n.rotationY = 180 - n.rotationY),
                    n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q,
                    n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q,
                    n.scaleZ = (Math.sqrt(E * E + I * I) * q + .5 | 0) / q,
                    n.skewX = C || D ? Math.atan2(C, D) * J + n.rotation : n.skewX || 0,
                    Math.abs(n.skewX) > 90 && Math.abs(n.skewX) < 270 && (o ? (n.scaleX *= -1,
                    n.skewX += n.rotation <= 0 ? 180 : -180,
                    n.rotation += n.rotation <= 0 ? 180 : -180) : (n.scaleY *= -1,
                    n.skewX += n.skewX <= 0 ? 180 : -180)),
                    n.perspective = N ? 1 / (0 > N ? -N : N) : 0,
                    n.x = K,
                    n.y = L,
                    n.z = M,
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C),
                    n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
                } else if (!(Ca && !f && h.length && n.x === h[4] && n.y === h[5] && (n.rotationX || n.rotationY) || void 0 !== n.x && "none" === Y(a, "display", c))) {
                    var P = h.length >= 6
                      , Q = P ? h[0] : 1
                      , R = h[1] || 0
                      , S = h[2] || 0
                      , T = P ? h[3] : 1;
                    n.x = h[4] || 0,
                    n.y = h[5] || 0,
                    j = Math.sqrt(Q * Q + R * R),
                    k = Math.sqrt(T * T + S * S),
                    l = Q || R ? Math.atan2(R, Q) * J : n.rotation || 0,
                    m = S || T ? Math.atan2(S, T) * J + l : n.skewX || 0,
                    Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1,
                    m += 0 >= l ? 180 : -180,
                    l += 0 >= l ? 180 : -180) : (k *= -1,
                    m += 0 >= m ? 180 : -180)),
                    n.scaleX = j,
                    n.scaleY = k,
                    n.rotation = l,
                    n.skewX = m,
                    Ca && (n.rotationX = n.rotationY = n.z = 0,
                    n.perspective = s,
                    n.scaleZ = 1),
                    n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S),
                    n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
                }
                n.zOrigin = r;
                for (i in n)
                    n[i] < p && n[i] > -p && (n[i] = 0)
            }
            return d && (a._gsTransform = n,
            n.svg && (xa && a.style[za] ? b.delayedCall(.001, function() {
                Ra(a.style, za)
            }) : !xa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                a.removeAttribute("transform")
            }))),
            n
        }
        , Oa = function(a) {
            var b, c, d = this.data, e = -d.rotation * I, f = e + d.skewX * I, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i,
                i = -j,
                j = -c,
                b = m.filter,
                l.filter = "";
                var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x + q * d.xPercent / 100, x = d.y + r * d.yPercent / 100;
                if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2,
                o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2,
                w += n - (n * h + o * i),
                x += o - (n * j + o * k)),
                s ? (n = q / 2,
                o = r / 2,
                t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')",
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b,
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(" && b.indexOf("Alpha")) && l.removeAttribute("filter")),
                !s) {
                    var y, z, A, B = 8 > p ? 1 : -1;
                    for (n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w),
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x),
                    ta = 0; 4 > ta; ta++)
                        z = ca[ta],
                        y = m[z],
                        c = -1 !== y.indexOf("px") ? parseFloat(y) : Z(this.t, z, parseFloat(y), y.replace(u, "")) || 0,
                        A = c !== d[z] ? 2 > ta ? -d.ieOffsetX : -d.ieOffsetY : 2 > ta ? n - d.ieOffsetX : o - d.ieOffsetY,
                        l[z] = (d[z] = Math.round(c - A * (0 === ta || 2 === ta ? 1 : B))) + "px"
                }
            }
        }
        , Pa = P.set3DTransformRatio = P.setTransformRatio = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, J = z.y, K = z.z, L = z.svg, M = z.perspective, N = z.force3D;
            if (!(((1 !== a && 0 !== a || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || K || M || D || C || 1 !== G) && (!xa || !L) && Ca))
                return void (B || z.skewX || L ? (B *= I,
                x = z.skewX * I,
                y = 1e5,
                b = Math.cos(B) * E,
                e = Math.sin(B) * E,
                c = Math.sin(B - x) * -F,
                f = Math.cos(B - x) * F,
                x && "simple" === z.skewType && (s = Math.tan(x),
                s = Math.sqrt(1 + s * s),
                c *= s,
                f *= s,
                z.skewY && (b *= s,
                e *= s)),
                L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
                J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset,
                xa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(),
                H += .01 * z.xPercent * p.width,
                J += .01 * z.yPercent * p.height),
                p = 1e-6,
                p > H && H > -p && (H = 0),
                p > J && J > -p && (J = 0)),
                u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + H + "," + J + ")",
                L && xa ? this.t.setAttribute("transform", "matrix(" + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + J + ")");
            if (n && (p = 1e-4,
            p > E && E > -p && (E = G = 2e-5),
            p > F && F > -p && (F = G = 2e-5),
            !M || z.z || z.rotationX || z.rotationY || (M = 0)),
            B || z.skewX)
                B *= I,
                q = b = Math.cos(B),
                r = e = Math.sin(B),
                z.skewX && (B -= z.skewX * I,
                q = Math.cos(B),
                r = Math.sin(B),
                "simple" === z.skewType && (s = Math.tan(z.skewX * I),
                s = Math.sqrt(1 + s * s),
                q *= s,
                r *= s,
                z.skewY && (b *= s,
                e *= s))),
                c = -r,
                f = q;
            else {
                if (!(D || C || 1 !== G || M || L))
                    return void (A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                b = f = 1,
                c = e = 0
            }
            j = 1,
            d = g = h = i = k = l = 0,
            m = M ? -1 / M : 0,
            o = z.zOrigin,
            p = 1e-6,
            v = ",",
            w = "0",
            B = D * I,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            h = -r,
            k = m * -r,
            d = b * r,
            g = e * r,
            j = q,
            m *= q,
            b *= q,
            e *= q),
            B = C * I,
            B && (q = Math.cos(B),
            r = Math.sin(B),
            s = c * q + d * r,
            t = f * q + g * r,
            i = j * r,
            l = m * r,
            d = c * -r + d * q,
            g = f * -r + g * q,
            j *= q,
            m *= q,
            c = s,
            f = t),
            1 !== G && (d *= G,
            g *= G,
            j *= G,
            m *= G),
            1 !== F && (c *= F,
            f *= F,
            i *= F,
            l *= F),
            1 !== E && (b *= E,
            e *= E,
            h *= E,
            k *= E),
            (o || L) && (o && (H += d * -o,
            J += g * -o,
            K += j * -o + o),
            L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,
            J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),
            p > H && H > -p && (H = w),
            p > J && J > -p && (J = w),
            p > K && K > -p && (K = 0)),
            u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(",
            u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h),
            u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f),
            C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d),
            u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,",
            u += H + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")",
            A[za] = u
        }
        ;
        j = Da.prototype,
        j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
        j.scaleX = j.scaleY = j.scaleZ = 1,
        va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i)
                    return f;
                d._lastParsedTransform = i;
                var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform, u = a.style, v = 1e-6, w = ya.length, x = i, y = {}, z = "transformOrigin";
                if (i.display ? (l = Y(a, "display"),
                u.display = "block",
                j = Na(a, e, !0, i.parseTransform),
                u.display = l) : j = Na(a, e, !0, i.parseTransform),
                d._transform = j,
                "string" == typeof x.transform && za)
                    l = N.style,
                    l[za] = x.transform,
                    l.display = "block",
                    l.position = "absolute",
                    L.body.appendChild(N),
                    k = Na(N, null , !1),
                    j.svg && (q = j.xOrigin,
                    r = j.yOrigin,
                    k.x -= j.xOffset,
                    k.y -= j.yOffset,
                    (x.transformOrigin || x.svgOrigin) && (m = {},
                    Ia(a, ea(x.transformOrigin), m, x.svgOrigin, x.smoothOrigin, !0),
                    q = m.xOrigin,
                    r = m.yOrigin,
                    k.x -= m.xOffset - j.xOffset,
                    k.y -= m.yOffset - j.yOffset),
                    (q || r) && (s = Ma(N),
                    k.x -= q - (q * s[0] + r * s[2]),
                    k.y -= r - (q * s[1] + r * s[3]))),
                    L.body.removeChild(N),
                    k.perspective || (k.perspective = j.perspective),
                    null != x.xPercent && (k.xPercent = ga(x.xPercent, j.xPercent)),
                    null != x.yPercent && (k.yPercent = ga(x.yPercent, j.yPercent));
                else if ("object" == typeof x) {
                    if (k = {
                        scaleX: ga(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
                        scaleY: ga(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
                        scaleZ: ga(x.scaleZ, j.scaleZ),
                        x: ga(x.x, j.x),
                        y: ga(x.y, j.y),
                        z: ga(x.z, j.z),
                        xPercent: ga(x.xPercent, j.xPercent),
                        yPercent: ga(x.yPercent, j.yPercent),
                        perspective: ga(x.transformPerspective, j.perspective)
                    },
                    p = x.directionalRotation,
                    null != p)
                        if ("object" == typeof p)
                            for (l in p)
                                x[l] = p[l];
                        else
                            x.rotation = p;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0,
                    k.xPercent = ga(x.x, j.xPercent)),
                    "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0,
                    k.yPercent = ga(x.y, j.yPercent)),
                    k.rotation = ha("rotation"in x ? x.rotation : "shortRotation"in x ? x.shortRotation + "_short" : "rotationZ"in x ? x.rotationZ : j.rotation - j.skewY, j.rotation - j.skewY, "rotation", y),
                    Ca && (k.rotationX = ha("rotationX"in x ? x.rotationX : "shortRotationX"in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y),
                    k.rotationY = ha("rotationY"in x ? x.rotationY : "shortRotationY"in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)),
                    k.skewX = ha(x.skewX, j.skewX - j.skewY),
                    (k.skewY = ha(x.skewY, j.skewY)) && (k.skewX += k.skewY,
                    k.rotation += k.skewY)
                }
                for (Ca && null != x.force3D && (j.force3D = x.force3D,
                o = !0),
                j.skewType = x.skewType || j.skewType || g.defaultSkewType,
                n = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,
                n || null == x.scale || (k.scaleZ = 1); --w > -1; )
                    c = ya[w],
                    m = k[c] - j[c],
                    (m > v || -v > m || null != x[c] || null != K[c]) && (o = !0,
                    f = new qa(j,c,j[c],m,f),
                    c in y && (f.e = y[c]),
                    f.xs0 = 0,
                    f.plugin = h,
                    d._overwriteProps.push(f.n));
                return m = x.transformOrigin,
                j.svg && (m || x.svgOrigin) && (q = j.xOffset,
                r = j.yOffset,
                Ia(a, ea(m), k, x.svgOrigin, x.smoothOrigin),
                f = ra(j, "xOrigin", (t ? j : k).xOrigin, k.xOrigin, f, z),
                f = ra(j, "yOrigin", (t ? j : k).yOrigin, k.yOrigin, f, z),
                (q !== j.xOffset || r !== j.yOffset) && (f = ra(j, "xOffset", t ? q : j.xOffset, j.xOffset, f, z),
                f = ra(j, "yOffset", t ? r : j.yOffset, j.yOffset, f, z)),
                m = xa ? null : "0px 0px"),
                (m || Ca && n && j.zOrigin) && (za ? (o = !0,
                c = Ba,
                m = (m || Y(a, c, e, !1, "50% 50%")) + "",
                f = new qa(u,c,0,0,f,-1,z),
                f.b = u[c],
                f.plugin = h,
                Ca ? (l = j.zOrigin,
                m = m.split(" "),
                j.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0,
                f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px",
                f = new qa(j,"zOrigin",0,0,f,-1,f.n),
                f.b = l,
                f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = m) : ea(m + "", j)),
                o && (d._transformType = j.svg && xa || !n && 3 !== this._transformType ? 2 : 3),
                f
            },
            prefix: !0
        }),
        va("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        va("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g, h) {
                b = this.format(b);
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                for (q = parseFloat(a.offsetWidth),
                r = parseFloat(a.offsetHeight),
                i = b.split(" "),
                j = 0; j < y.length; j++)
                    this.p.indexOf("border") && (y[j] = W(y[j])),
                    m = l = Y(a, y[j], e, !1, "0px"),
                    -1 !== m.indexOf(" ") && (l = m.split(" "),
                    m = l[0],
                    l = l[1]),
                    n = k = i[j],
                    o = parseFloat(m),
                    t = m.substr((o + "").length),
                    u = "=" === n.charAt(1),
                    u ? (p = parseInt(n.charAt(0) + "1", 10),
                    n = n.substr(2),
                    p *= parseFloat(n),
                    s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n),
                    s = n.substr((p + "").length)),
                    "" === s && (s = d[c] || t),
                    s !== t && (v = Z(a, "borderLeft", o, t),
                    w = Z(a, "borderTop", o, t),
                    "%" === s ? (m = v / q * 100 + "%",
                    l = w / r * 100 + "%") : "em" === s ? (x = Z(a, "borderLeft", 1, "em"),
                    m = v / x + "em",
                    l = w / x + "em") : (m = v + "px",
                    l = w + "px"),
                    u && (n = parseFloat(m) + p + s,
                    k = parseFloat(l) + p + s)),
                    g = sa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: na("0px 0px 0px 0px", !1, !0)
        }),
        va("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", o = e || X(a, null ), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = Y(a, "backgroundImage").replace(B, ""),
                m && "none" !== m)) {
                    for (h = q.split(" "),
                    i = r.split(" "),
                    O.setAttribute("src", m),
                    j = 2; --j > -1; )
                        q = h[j],
                        k = -1 !== q.indexOf("%"),
                        k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - O.width : a.offsetHeight - O.height,
                        h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: ea
        }),
        va("backgroundSize", {
            defaultValue: "0 0",
            formatter: ea
        }),
        va("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        va("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        va("transformStyle", {
            prefix: !0
        }),
        va("backfaceVisibility", {
            prefix: !0
        }),
        va("userSelect", {
            prefix: !0
        }),
        va("margin", {
            parser: oa("marginTop,marginRight,marginBottom,marginLeft")
        }),
        va("padding", {
            parser: oa("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        va("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle,
                j = 8 > p ? " " : ",",
                h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                b = this.format(b).split(",").join(j)) : (h = this.format(Y(a, this.p, e, !1, this.dflt)),
                b = this.format(b)),
                this.parseComplex(a.style, h, b, f, g)
            }
        }),
        va("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        va("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }),
        va("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(Y(a, "borderTopWidth", e, !1, "0px") + " " + Y(a, "borderTopStyle", e, !1, "solid") + " " + Y(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ma) || ["#000"])[0]
            }
        }),
        va("borderWidth", {
            parser: oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        va("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e, f) {
                var g = a.style
                  , h = "cssFloat"in g ? "cssFloat" : "styleFloat";
                return new qa(g,h,0,0,e,-1,c,!1,0,g[h],b)
            }
        });
        var Qa = function(a) {
            var b, c = this.t, d = c.filter || Y(this.data, "filter") || "", e = this.s + this.c * a | 0;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"),
            b = !Y(this.data, "filter")) : (c.filter = d.replace(x, ""),
            b = !0)),
            b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
            -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        }
        ;
        va("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(Y(a, "opacity", e, !1, "1"))
                  , i = a.style
                  , j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                j && 1 === h && "hidden" === Y(a, "visibility", e) && 0 !== b && (h = 0),
                R ? f = new qa(i,"opacity",h,b - h,f) : (f = new qa(i,"opacity",100 * h,100 * (b - h),f),
                f.xn1 = j ? 1 : 0,
                i.zoom = 1,
                f.type = 2,
                f.b = "alpha(opacity=" + f.s + ")",
                f.e = "alpha(opacity=" + (f.s + f.c) + ")",
                f.data = a,
                f.plugin = g,
                f.setRatio = Qa),
                j && (f = new qa(i,"visibility",0,0,f,-1,null ,!1,0,0 !== h ? "inherit" : "hidden",0 === b ? "hidden" : "inherit"),
                f.xs0 = "inherit",
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
                f
            }
        });
        var Ra = function(a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b),
            a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
        }
          , Sa = function(a) {
            if (this.t._gsClassPT = this,
            1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var b = this.data, c = this.t.style; b; )
                    b.v ? c[b.p] = b.v : Ra(c, b.p),
                    b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null )
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        }
        ;
        va("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                if (g = f._classNamePT = new qa(a,d,0,0,g,2),
                g.setRatio = Sa,
                g.pr = -11,
                c = !0,
                g.b = o,
                k = _(a, e),
                l = a._gsClassPT) {
                    for (m = {},
                    n = l.data; n; )
                        m[n.p] = 1,
                        n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g,
                g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                a.setAttribute("class", g.e),
                j = aa(a, k, _(a), i, m),
                a.setAttribute("class", o),
                g.data = j.firstMPT,
                a.style.cssText = p,
                g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Ta = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                if ("all" === this.e)
                    g.cssText = "",
                    e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","),
                    d = b.length; --d > -1; )
                        c = b[d],
                        i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ba : i[c].p),
                        Ra(g, c);
                e && (Ra(g, za),
                f = this.t._gsTransform,
                f && (f.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        }
        ;
        for (va("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new qa(a,d,0,0,f,2),
                f.setRatio = Ta,
                f.e = b,
                f.pr = -10,
                f.data = e._tween,
                c = !0,
                f
            }
        }),
        j = "bezier,throwProps,physicsProps,physics2D".split(","),
        ta = j.length; ta--; )
            wa(j[ta]);
        j = g.prototype,
        j._firstPT = j._lastParsedTransform = j._transform = null ,
        j._onInitTween = function(a, b, h) {
            if (!a.nodeType)
                return !1;
            this._target = a,
            this._tween = h,
            this._vars = b,
            k = b.autoRound,
            c = !1,
            d = b.suffixMap || g.suffixMap,
            e = X(a, ""),
            f = this._overwriteProps;
            var j, n, p, q, r, s, t, u, v, x = a.style;
            if (l && "" === x.zIndex && (j = Y(a, "zIndex", e),
            ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)),
            "string" == typeof b && (q = x.cssText,
            j = _(a, e),
            x.cssText = q + ";" + b,
            j = aa(a, j, _(a)).difs,
            !R && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),
            b = j,
            x.cssText = q),
            b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null , null , b) : this._firstPT = n = this.parse(a, b, null ),
            this._transformType) {
                for (v = 3 === this._transformType,
                za ? m && (l = !0,
                "" === x.zIndex && (t = Y(a, "zIndex", e),
                ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)),
                o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1,
                p = n; p && p._next; )
                    p = p._next;
                u = new qa(a,"transform",0,0,null ,2),
                this._linkCSSP(u, null , p),
                u.setRatio = za ? Pa : Oa,
                u.data = this._transform || Na(a, e, !0),
                u.tween = h,
                u.pr = -1,
                f.pop()
            }
            if (c) {
                for (; n; ) {
                    for (s = n._next,
                    p = q; p && p.pr > n.pr; )
                        p = p._next;
                    (n._prev = p ? p._prev : r) ? n._prev._next = n : q = n,
                    (n._next = p) ? p._prev = n : r = n,
                    n = s
                }
                this._firstPT = q
            }
            return !0
        }
        ,
        j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, q, r, s = a.style;
            for (g in b)
                n = b[g],
                h = i[g],
                h ? c = h.parse(a, n, g, this, c, f, b) : (m = Y(a, g, e) + "",
                q = "string" == typeof n,
                "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ka(n),
                n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"),
                c = sa(s, g, m, n, !0, "transparent", c, 0, f)) : q && H.test(n) ? c = sa(s, g, m, n, !0, null , c, 0, f) : (j = parseFloat(m),
                o = j || 0 === j ? m.substr((j + "").length) : "",
                ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = da(a, g, e),
                o = "px") : "left" === g || "top" === g ? (j = $(a, g, e),
                o = "px") : (j = "opacity" !== g ? 0 : 1,
                o = "")),
                r = q && "=" === n.charAt(1),
                r ? (l = parseInt(n.charAt(0) + "1", 10),
                n = n.substr(2),
                l *= parseFloat(n),
                p = n.replace(u, "")) : (l = parseFloat(n),
                p = q ? n.replace(u, "") : ""),
                "" === p && (p = g in d ? d[g] : o),
                n = l || 0 === l ? (r ? l + j : l) + p : b[g],
                o !== p && "" !== p && (l || 0 === l) && j && (j = Z(a, g, j, o),
                "%" === p ? (j /= Z(a, g, 100, "%") / 100,
                b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Z(a, g, 1, p) : "px" !== p && (l = Z(a, g, l, p),
                p = "px"),
                r && (l || 0 === l) && (n = l + j + p)),
                r && (l += j),
                !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new qa(s,g,l || j || 0,0,c,-1,g,!1,0,m,n),
                c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : T("invalid " + g + " tween value: " + b[g]) : (c = new qa(s,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),
                c.xs0 = p))),
                f && c && !c.plugin && (c.plugin = f);
            return c
        }
        ,
        j.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e; ) {
                        if (b = e.c * a + e.s,
                        e.r ? b = Math.round(b) : f > b && b > -f && (b = 0),
                        e.type)
                            if (1 === e.type)
                                if (d = e.l,
                                2 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d)
                                    e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            else
                                -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else
                            e.t[e.p] = b + e.xs0;
                        e = e._next
                    }
                else
                    for (; e; )
                        2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a),
                        e = e._next;
            else
                for (; e; ) {
                    if (2 !== e.type)
                        if (e.r && -1 !== e.type)
                            if (b = Math.round(e.s + e.c),
                            e.type) {
                                if (1 === e.type) {
                                    for (d = e.l,
                                    c = e.xs0 + b + e.xs1,
                                    d = 1; d < e.l; d++)
                                        c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            } else
                                e.t[e.p] = b + e.xs0;
                        else
                            e.t[e.p] = e.e;
                    else
                        e.setRatio(a);
                    e = e._next
                }
        }
        ,
        j._enableTransforms = function(a) {
            this._transform = this._transform || Na(this._target, e, !0),
            this._transformType = this._transform.svg && xa || !a && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Ua = function(a) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null , !0)
        }
        ;
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new qa(a,b,0,0,this._firstPT,2);
            d.e = c,
            d.setRatio = Ua,
            d.data = this
        }
        ,
        j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a),
            a._next && (a._next._prev = a._prev),
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
            d = !0),
            c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a),
            a._next = b,
            a._prev = c),
            a
        }
        ,
        j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b)
                    f[d] = b[d];
                f.opacity = 1,
                f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst,
            e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
            c._next && this._linkCSSP(c._next, c._next._next, e._prev),
            this._classNamePT = null ),
            a.prototype._kill.call(this, f)
        }
        ;
        var Va = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1; )
                    Va(a[e], b, c);
            else
                for (d = a.childNodes,
                e = d.length; --e > -1; )
                    f = d[e],
                    g = f.type,
                    f.style && (b.push(_(f)),
                    c && c.push(f)),
                    1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Va(f, b, c)
        }
        ;
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
            for (a = i._targets || i.target,
            Va(a, k, m),
            i.render(c, !0, !0),
            Va(a, l),
            i.render(0, !0, !0),
            i._enabled(!0),
            e = m.length; --e > -1; )
                if (f = aa(m[e], k[e], l[e]),
                f.firstMPT) {
                    f = f.difs;
                    for (g in d)
                        n[g] && (f[g] = d[g]);
                    h = {};
                    for (g in f)
                        h[g] = k[e][g];
                    j.push(b.fromTo(m[e], c, h, f))
                }
            return j
        }
        ,
        a.activate([g]),
        g
    }, !0),
    function() {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c,
                !0
            }
        })
          , b = function(a) {
            for (; a; )
                a.f || a.blob || (a.r = 1),
                a = a._next
        }
          , c = a.prototype;
        c._onInitAllProps = function() {
            for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1; )
                h[f[g]] = 1;
            for (g = f.length; --g > -1; )
                for (a = f[g],
                c = e._firstPT; c; )
                    d = c._next,
                    c.pg ? c.t._roundProps(h, !0) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c),
                    d && (d._prev = c._prev),
                    c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d),
                    c._next = c._prev = null ,
                    e._propLookup[a] = i)),
                    c = d;
            return !1
        }
        ,
        c._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0),
            this._overwriteProps.push(b)
        }
    }(),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.5.0",
            init: function(a, b, c) {
                var d;
                if ("function" != typeof a.setAttribute)
                    return !1;
                for (d in b)
                    this._addTween(a, "setAttribute", a.getAttribute(d) + "", b[d] + "", d, !1, d),
                    this._overwriteProps.push(d);
                return !0
            }
        })
    }(),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(a, b, c) {
            "object" != typeof b && (b = {
                rotation: b
            }),
            this.finals = {};
            var d, e, f, g, h, i, j = b.useRadians === !0 ? 2 * Math.PI : 360, k = 1e-6;
            for (d in b)
                "useRadians" !== d && (i = (b[d] + "").split("_"),
                e = i[0],
                f = parseFloat("function" != typeof a[d] ? a[d] : a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()),
                g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1) ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) || 0,
                h = g - f,
                i.length && (e = i.join("_"),
                -1 !== e.indexOf("short") && (h %= j,
                h !== h % (j / 2) && (h = 0 > h ? h + j : h - j)),
                -1 !== e.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * j) % j - (h / j | 0) * j : -1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)),
                (h > k || -k > h) && (this._addTween(a, d, f, f + h, d),
                this._overwriteProps.push(d)));
            return !0
        },
        set: function(a) {
            var b;
            if (1 !== a)
                this._super.setRatio.call(this, a);
            else
                for (b = this._firstPT; b; )
                    b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p],
                    b = b._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope, f = e.com.greensock, g = 2 * Math.PI, h = Math.PI / 2, i = f._class, j = function(b, c) {
            var d = i("easing." + b, function() {}, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            d
        }
        , k = a.register || function() {}
        , l = function(a, b, c, d, e) {
            var f = i("easing." + a, {
                easeOut: new b,
                easeIn: new c,
                easeInOut: new d
            }, !0);
            return k(f, a),
            f
        }
        , m = function(a, b, c) {
            this.t = a,
            this.v = b,
            c && (this.next = c,
            c.prev = this,
            this.c = c.v - b,
            this.gap = c.t - a)
        }
        , n = function(b, c) {
            var d = i("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , e = d.prototype = new a;
            return e.constructor = d,
            e.getRatio = c,
            e.config = function(a) {
                return new d(a)
            }
            ,
            d
        }
        , o = l("Back", n("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }), n("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), n("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        })), p = i("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7,
            null == a ? a = .7 : a > 1 && (a = 1),
            this._p = 1 !== a ? b : 0,
            this._p1 = (1 - a) / 2,
            this._p2 = a,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = c === !0
        }, !0), q = p.prototype = new a;
        return q.constructor = p,
        q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }
        ,
        p.ease = new p(.7,.7),
        q.config = p.config = function(a, b, c) {
            return new p(a,b,c)
        }
        ,
        b = i("easing.SteppedEase", function(a) {
            a = a || 1,
            this._p1 = 1 / a,
            this._p2 = a + 1
        }, !0),
        q = b.prototype = new a,
        q.constructor = b,
        q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999),
            (this._p2 * a >> 0) * this._p1
        }
        ,
        q.config = b.config = function(a) {
            return new b(a)
        }
        ,
        c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null , r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1; )
                c = o ? Math.random() : 1 / l * n,
                d = q ? q.getRatio(c) : c,
                "none" === i ? e = r : "out" === i ? (f = 1 - c,
                e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c,
                e = f * f * .5 * r) : (f = 2 * (1 - c),
                e = f * f * .5 * r),
                o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e,
                p && (d > 1 ? d = 1 : 0 > d && (d = 0)),
                j[k++] = {
                    x: c,
                    y: d
                };
            for (j.sort(function(a, b) {
                return a.x - b.x
            }),
            h = new m(1,1,null ),
            n = l; --n > -1; )
                g = j[n],
                h = new m(g.x,g.y,h);
            this._prev = new m(0,0,0 !== h.t ? h : h.next)
        }, !0),
        q = c.prototype = new a,
        q.constructor = c,
        q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t; )
                    b = b.next;
                b = b.prev
            } else
                for (; b.prev && a <= b.t; )
                    b = b.prev;
            return this._prev = b,
            b.v + (a - b.t) / b.gap * b.c
        }
        ,
        q.config = function(a) {
            return new c(a)
        }
        ,
        c.ease = new c,
        l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1,
            a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375,
            b ? .5 * (1 - a) : .5 * a + .5
        })),
        l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })),
        d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                this._p1 = a >= 1 ? a : 1,
                this._p2 = (b || d) / (1 > a ? a : 1),
                this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0),
                this._p2 = g / this._p2
            }, !0)
              , f = e.prototype = new a;
            return f.constructor = e,
            f.getRatio = c,
            f.config = function(a, b) {
                return new e(a,b)
            }
            ,
            e
        }
        ,
        l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, .3), d("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)),
        l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })),
        l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h)
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })),
        i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0),
        k(e.SlowMo, "SlowMo", "ease,"),
        k(c, "RoughEase", "ease,"),
        k(b, "SteppedEase", "ease,"),
        o
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function(a) {
            var b, d = a.split("."), e = c;
            for (b = 0; b < d.length; b++)
                e[d[b]] = e = e[d[b]] || {};
            return e
        }
        , j = i("com.greensock"), k = 1e-10, l = function(a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
        , m = function() {}
        , n = function() {
            var a = Object.prototype.toString
              , b = a.call([]);
            return function(c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), o = {}, p = function(d, e, f, g) {
            this.sc = o[d] ? o[d].sc : [],
            o[d] = this,
            this.gsClass = null ,
            this.func = f;
            var h = [];
            this.check = function(j) {
                for (var k, l, m, n, q, r = e.length, s = r; --r > -1; )
                    (k = o[e[r]] || new p(e[r],[])).gsClass ? (h[r] = k.gsClass,
                    s--) : j && k.sc.push(this);
                if (0 === s && f)
                    for (l = ("com.greensock." + d).split("."),
                    m = l.pop(),
                    n = i(l.join("."))[m] = this.gsClass = f.apply(f, h),
                    g && (c[m] = n,
                    q = "undefined" != typeof module && module.exports,
                    !q && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                        return n
                    }) : d === b && q && (module.exports = n)),
                    r = 0; r < this.sc.length; r++)
                        this.sc[r].check()
            }
            ,
            this.check(!0)
        }
        , q = a._gsDefine = function(a, b, c, d) {
            return new p(a,b,c,d)
        }
        , r = j._class = function(a, b, c) {
            return b = b || function() {}
            ,
            q(a, [], function() {
                return b
            }, c),
            b
        }
        ;
        q.globals = c;
        var s = [0, 0, 1, 1]
          , t = []
          , u = r("easing.Ease", function(a, b, c, d) {
            this._func = a,
            this._type = c || 0,
            this._power = d || 0,
            this._params = b ? s.concat(b) : s
        }, !0)
          , v = u.map = {}
          , w = u.register = function(a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1; )
                for (f = i[k],
                e = d ? r("easing." + f, null , !0) : j.easing[f] || {},
                g = l.length; --g > -1; )
                    h = l[g],
                    v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        }
        ;
        for (f = u.prototype,
        f._calcEnd = !1,
        f.getRatio = function(a) {
            if (this._func)
                return this._params[0] = a,
                this._func.apply(null , this._params);
            var b = this._type
              , c = this._power
              , d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }
        ,
        d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        e = d.length; --e > -1; )
            f = d[e] + ",Power" + e,
            w(new u(null ,null ,1,e), f, "easeOut", !0),
            w(new u(null ,null ,2,e), f, "easeIn" + (0 === e ? ",easeNone" : "")),
            w(new u(null ,null ,3,e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn,
        v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function(a) {
            this._listeners = {},
            this._eventTarget = a || this
        });
        f = x.prototype,
        f.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a], k = 0;
            for (null == j && (this._listeners[a] = j = []),
            i = j.length; --i > -1; )
                f = j[i],
                f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && f.pr < e && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }),
            this !== g || h || g.wake()
        }
        ,
        f.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1; )
                    if (d[c].c === b)
                        return void d.splice(c, 1)
        }
        ,
        f.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length,
                c = this._eventTarget; --b > -1; )
                    d = e[b],
                    d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
        }
        ;
        var y = a.requestAnimationFrame
          , z = a.cancelAnimationFrame
          , A = Date.now || function() {
            return (new Date).getTime()
        }
          , B = A();
        for (d = ["ms", "moz", "webkit", "o"],
        e = d.length; --e > -1 && !y; )
            y = a[d[e] + "RequestAnimationFrame"],
            z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function(a, b) {
            var c, d, e, f, i, j = this, l = A(), n = b !== !1 && y ? "auto" : !1, o = 500, p = 33, q = "tick", r = function(a) {
                var b, g, h = A() - B;
                h > o && (l += h - p),
                B += h,
                j.time = (B - l) / 1e3,
                b = j.time - i,
                (!c || b > 0 || a === !0) && (j.frame++,
                i += b + (b >= f ? .004 : f - b),
                g = !0),
                a !== !0 && (e = d(r)),
                g && j.dispatchEvent(q)
            }
            ;
            x.call(j),
            j.time = j.frame = 0,
            j.tick = function() {
                r(!0)
            }
            ,
            j.lagSmoothing = function(a, b) {
                o = a || 1 / k,
                p = Math.min(b, o, 0)
            }
            ,
            j.sleep = function() {
                null != e && (n && z ? z(e) : clearTimeout(e),
                d = m,
                e = null ,
                j === g && (h = !1))
            }
            ,
            j.wake = function(a) {
                null !== e ? j.sleep() : a ? l += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5),
                d = 0 === c ? m : n && y ? y : function(a) {
                    return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
                }
                ,
                j === g && (h = !0),
                r(2)
            }
            ,
            j.fps = function(a) {
                return arguments.length ? (c = a,
                f = 1 / (c || 60),
                i = this.time + f,
                void j.wake()) : c
            }
            ,
            j.useRAF = function(a) {
                return arguments.length ? (j.sleep(),
                n = a,
                void j.fps(c)) : n
            }
            ,
            j.fps(a),
            setTimeout(function() {
                "auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
            }, 1500)
        }),
        f = j.Ticker.prototype = new j.events.EventDispatcher,
        f.constructor = j.Ticker;
        var C = r("core.Animation", function(a, b) {
            if (this.vars = b = b || {},
            this._duration = this._totalDuration = a || 0,
            this._delay = Number(b.delay) || 0,
            this._timeScale = 1,
            this._active = b.immediateRender === !0,
            this.data = b.data,
            this._reversed = b.reversed === !0,
            V) {
                h || g.wake();
                var c = this.vars.useFrames ? U : V;
                c.add(this, c._time),
                this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker,
        f = C.prototype,
        f._dirty = f._gc = f._initted = f._paused = !1,
        f._totalTime = f._time = 0,
        f._rawPrevTime = -1,
        f._next = f._last = f._onUpdate = f._timeline = f.timeline = null ,
        f._paused = !1;
        var D = function() {
            h && A() - B > 2e3 && g.wake(),
            setTimeout(D, 2e3)
        }
        ;
        D(),
        f.play = function(a, b) {
            return null != a && this.seek(a, b),
            this.reversed(!1).paused(!1)
        }
        ,
        f.pause = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!0)
        }
        ,
        f.resume = function(a, b) {
            return null != a && this.seek(a, b),
            this.paused(!1)
        }
        ,
        f.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }
        ,
        f.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }
        ,
        f.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
        }
        ,
        f.render = function(a, b, c) {}
        ,
        f.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        f.isActive = function() {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
        }
        ,
        f._enabled = function(a, b) {
            return h || g.wake(),
            this._gc = !a,
            this._active = this.isActive(),
            b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        f._kill = function(a, b) {
            return this._enabled(!1, !1)
        }
        ,
        f.kill = function(a, b) {
            return this._kill(a, b),
            this
        }
        ,
        f._uncache = function(a) {
            for (var b = a ? this : this.timeline; b; )
                b._dirty = !0,
                b = b.timeline;
            return this
        }
        ,
        f._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1; )
                "{self}" === a[b] && (c[b] = this);
            return c
        }
        ,
        f._callback = function(a) {
            var b = this.vars;
            b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
        }
        ,
        f.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length)
                    return e[a];
                null == b ? delete e[a] : (e[a] = b,
                e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c,
                e[a + "Scope"] = d),
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }
        ,
        f.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
            this._delay = a,
            this) : this._delay
        }
        ,
        f.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        f.totalDuration = function(a) {
            return this._dirty = !1,
            arguments.length ? this.duration(a) : this._totalDuration
        }
        ,
        f.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }
        ,
        f.totalTime = function(a, b, c) {
            if (h || g.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration
                      , e = this._timeline;
                    if (a > d && !c && (a = d),
                    this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale,
                    e._dirty || this._uncache(!1),
                    e._timeline)
                        for (; e._timeline; )
                            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                            e = e._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== a || 0 === this._duration) && (I.length && X(),
                this.render(a, b, !1),
                I.length && X())
            }
            return this
        }
        ,
        f.progress = f.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        }
        ,
        f.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
            this) : this._startTime
        }
        ,
        f.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        f.timeScale = function(a) {
            if (!arguments.length)
                return this._timeScale;
            if (a = a || k,
            this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime
                  , c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a,
            this._uncache(!1)
        }
        ,
        f.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        f.paused = function(a) {
            if (!arguments.length)
                return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (h || a || g.wake(),
            b = d.rawTime(),
            c = b - this._pauseTime,
            !a && d.smoothChildTiming && (this._startTime += c,
            this._uncache(!1)),
            this._pauseTime = a ? b : null ,
            this._paused = a,
            this._active = this.isActive(),
            !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale,
            this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
        }
        ;
        var E = r("core.SimpleTimeline", function(a) {
            C.call(this, 0, a),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C,
        f.constructor = E,
        f.kill()._gc = !1,
        f._first = f._last = f._recent = null ,
        f._sortChildren = !1,
        f.add = f.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay,
            a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
            a.timeline && a.timeline._remove(a, !0),
            a.timeline = a._timeline = this,
            a._gc && a._enabled(!0, !0),
            e = this._last,
            this._sortChildren)
                for (f = a._startTime; e && e._startTime > f; )
                    e = e._prev;
            return e ? (a._next = e._next,
            e._next = a) : (a._next = this._first,
            this._first = a),
            a._next ? a._next._prev = a : this._last = a,
            a._prev = e,
            this._recent = a,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        f._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0),
            a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
            a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
            a._next = a._prev = a.timeline = null ,
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        f.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                d = e._next,
                (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                e = d
        }
        ,
        f.rawTime = function() {
            return h || g.wake(),
            this._totalTime
        }
        ;
        var F = r("TweenLite", function(b, c, d) {
            if (C.call(this, c, d),
            this.render = F.prototype.render,
            null == b)
                throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : F.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i],
            (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                for (this._targets = g = l(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0; e < g.length; e++)
                    f = g[e],
                    f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1),
                    this._targets = g = g.concat(l(f))) : (this._siblings[e] = Y(f, this, !1),
                    1 === i && this._siblings[e].length > 1 && $(f, this, null , 1, this._siblings[e])) : (f = g[e--] = F.selector(f),
                    "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else
                this._propLookup = {},
                this._siblings = Y(b, this, !1),
                1 === i && this._siblings.length > 1 && $(b, this, null , 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , G = function(b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        }
          , H = function(a, b) {
            var c, d = {};
            for (c in a)
                S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c],
                delete a[c]);
            a.css = d
        }
        ;
        f = F.prototype = new C,
        f.constructor = F,
        f.kill()._gc = !1,
        f.ratio = 0,
        f._firstPT = f._targets = f._overwrittenProps = f._startAt = null ,
        f._notifyPluginsOfEnabled = f._lazy = !1,
        F.version = "1.18.3",
        F.defaultEase = f._ease = new u(null ,null ,1,1),
        F.defaultOverwrite = "auto",
        F.ticker = g,
        F.autoSleep = 120,
        F.lagSmoothing = function(a, b) {
            g.lagSmoothing(a, b)
        }
        ,
        F.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c,
            c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        }
        ;
        var I = []
          , J = {}
          , K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , L = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c; )
                b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s,
                c.r ? b = Math.round(b) : d > b && b > -d && (b = 0),
                c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b,
                c = c._next
        }
          , M = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = [a, b], m = 0, n = "", o = 0;
            for (l.start = a,
            c && (c(l),
            a = l[0],
            b = l[1]),
            l.length = 0,
            e = a.match(K) || [],
            f = b.match(K) || [],
            d && (d._next = null ,
            d.blob = 1,
            l._firstPT = d),
            i = f.length,
            h = 0; i > h; h++)
                k = f[h],
                j = b.substr(m, b.indexOf(k, m) - m),
                n += j || !h ? j : ",",
                m += j.length,
                o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1),
                k === e[h] || e.length <= h ? n += k : (n && (l.push(n),
                n = ""),
                g = parseFloat(e[h]),
                l.push(g),
                l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    r: o && 4 > o
                }),
                m += k.length;
            return n += b.substr(m),
            n && l.push(n),
            l.setRatio = L,
            l
        }
          , N = function(a, b, c, d, e, f, g, h) {
            var i, j, k = "get" === c ? a[b] : c, l = typeof a[b], m = "string" == typeof d && "=" === d.charAt(1), n = {
                t: a,
                p: b,
                s: k,
                f: "function" === l,
                pg: 0,
                n: e || b,
                r: f,
                pr: 0,
                c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0
            };
            return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
            n.s = k = g ? a[j](g) : a[j]()),
            "string" == typeof k && (g || isNaN(k)) ? (n.fp = g,
            i = M(k, d, h || F.defaultStringFilter, n),
            n = {
                t: i,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: e || b,
                pr: 0
            }) : m || (n.s = parseFloat(k),
            n.c = parseFloat(d) - n.s || 0)),
            n.c ? ((n._next = this._firstPT) && (n._next._prev = n),
            this._firstPT = n,
            n) : void 0
        }
          , O = F._internals = {
            isArray: n,
            isSelector: G,
            lazyTweens: I,
            blobDif: M
        }
          , P = F._plugins = {}
          , Q = O.tweenLookup = {}
          , R = 0
          , S = O.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        }
          , T = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , U = C._rootFramesTimeline = new E
          , V = C._rootTimeline = new E
          , W = 30
          , X = O.lazyRender = function() {
            var a, b = I.length;
            for (J = {}; --b > -1; )
                a = I[b],
                a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0),
                a._lazy = !1);
            I.length = 0
        }
        ;
        V._startTime = g.time,
        U._startTime = g.frame,
        V._active = U._active = !0,
        setTimeout(X, 1),
        C._updateRoot = F.render = function() {
            var a, b, c;
            if (I.length && X(),
            V.render((g.time - V._startTime) * V._timeScale, !1, !1),
            U.render((g.frame - U._startTime) * U._timeScale, !1, !1),
            I.length && X(),
            g.frame >= W) {
                W = g.frame + (parseInt(F.autoSleep, 10) || 120);
                for (c in Q) {
                    for (b = Q[c].tweens,
                    a = b.length; --a > -1; )
                        b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete Q[c]
                }
                if (c = V._first,
                (!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused; )
                        c = c._next;
                    c || g.sleep()
                }
            }
        }
        ,
        g.addEventListener("tick", C._updateRoot);
        var Y = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
                target: a,
                tweens: []
            }),
            b && (d = Q[f].tweens,
            d[e = d.length] = b,
            c))
                for (; --e > -1; )
                    d[e] === b && d.splice(e, 1);
            return Q[f].tweens
        }
          , Z = function(a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)),
            g = F.onOverwrite,
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1;
        }
          , $ = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length,
                f = 0; i > f; f++)
                    if ((h = e[f]) !== b)
                        h._gc || h._kill(null , a, b) && (g = !0);
                    else if (5 === d)
                        break;
                return g
            }
            var j, l = b._startTime + k, m = [], n = 0, o = 0 === b._duration;
            for (f = e.length; --f > -1; )
                (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o),
                0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));
            for (f = n; --f > -1; )
                if (h = m[f],
                2 === d && h._kill(c, a, b) && (g = !0),
                2 !== d || !h._firstPT && h._initted) {
                    if (2 !== d && !Z(h, b))
                        continue;h._enabled(!1, !1) && (g = !0)
                }
            return g
        }
          , _ = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                if (f += d._startTime,
                e *= d._timeScale,
                d._paused)
                    return -100;
                d = d._timeline
            }
            return f /= e,
            f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
        }
        ;
        f._init = function() {
            var a, b, c, d, e, f = this.vars, g = this._overwrittenProps, h = this._duration, i = !!f.immediateRender, j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                e = {};
                for (d in f.startAt)
                    e[d] = f.startAt[d];
                if (e.overwrite = !1,
                e.immediateRender = !0,
                e.lazy = i && f.lazy !== !1,
                e.startAt = e.delay = null ,
                this._startAt = F.to(this.target, 0, e),
                i)
                    if (this._time > 0)
                        this._startAt = null ;
                    else if (0 !== h)
                        return
            } else if (f.runBackwards && 0 !== h)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null ;
                else {
                    0 !== this._time && (i = !1),
                    c = {};
                    for (d in f)
                        S[d] && "autoCSS" !== d || (c[d] = f[d]);
                    if (c.overwrite = 0,
                    c.data = "isFromStart",
                    c.lazy = i && f.lazy !== !1,
                    c.immediateRender = i,
                    this._startAt = F.to(this.target, 0, c),
                    i) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null )
                }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j,f.easeParams) : v[j] || F.defaultEase : F.defaultEase,
            f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null ,
            this._targets)
                for (a = this._targets.length; --a > -1; )
                    this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null ) && (b = !0);
            else
                b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this),
            g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            f.runBackwards)
                for (c = this._firstPT; c; )
                    c.s += c.c,
                    c.c = -c.c,
                    c = c._next;
            this._onUpdate = f.onUpdate,
            this._initted = !0
        }
        ,
        f._initProps = function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b)
                return !1;
            J[b._gsTweenID] && X(),
            this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars)
                if (k = this.vars[f],
                S[f])
                    k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (P[f] && (i = new P[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                        _next: this._firstPT,
                        t: i,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: f,
                        pg: 1,
                        pr: i._priority
                    },
                    g = i._overwriteProps.length; --g > -1; )
                        c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0),
                    (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    j._next && (j._next._prev = j)
                } else
                    c[f] = N.call(this, b, f, "get", k, f, 0, null , this.vars.stringFilter);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b),
            this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0),
            h)
        }
        ,
        f.render = function(a, b, c) {
            var d, e, f, g, h = this._time, i = this._duration, j = this._rawPrevTime;
            if (a >= i - 1e-7)
                this._totalTime = this._time = i,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (d = !0,
                e = "onComplete",
                c = c || this._timeline.autoRemoveChildren),
                0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),
                (0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0,
                j > k && (e = "onReverseComplete")),
                this._rawPrevTime = g = !b || a || j === a ? a : k);
            else if (1e-7 > a)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete",
                d = this._reversed),
                0 > a && (this._active = !1,
                0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0),
                this._rawPrevTime = g = !b || a || j === a ? a : k)),
                this._initted || (c = !0);
            else if (this._totalTime = this._time = a,
            this._easeType) {
                var l = a / i
                  , m = this._easeType
                  , n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l),
                3 === m && (l *= 2),
                1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l),
                1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / i ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else
                this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = h,
                        this._rawPrevTime = j,
                        I.push(this),
                        void (this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),
                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
                f = this._firstPT; f; )
                    f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s,
                    f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c),
                b || (this._time !== h || d || c) && this._callback("onUpdate")),
                e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c),
                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !b && this.vars[e] && this._callback(e),
                0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }
        ,
        f._kill = function(a, b, c) {
            if ("all" === a && (a = null ),
            null == a && (null == b || b === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((n(b) || G(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1; )
                    this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1; )
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target)
                        return !1;
                    h = this._propLookup,
                    e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h,
                    k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),
                    c && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j)
                            h[f] && (l || (l = []),
                            l.push(f));
                        if ((l || !a) && !Z(this, c, b, l))
                            return !1
                    }
                    for (f in j)
                        (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s,
                        i = !0),
                        g.pg && g.t._kill(j) && (i = !0),
                        g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next),
                        g._next && (g._next._prev = g._prev),
                        g._next = g._prev = null ),
                        delete h[f]),
                        k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }
        ,
        f.invalidate = function() {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null ,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            C.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -k,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        f._enabled = function(a, b) {
            if (h || g.wake(),
            a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1; )
                        this._siblings[c] = Y(d[c], this, !0);
                else
                    this._siblings = Y(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        F.to = function(a, b, c) {
            return new F(a,b,c)
        }
        ,
        F.from = function(a, b, c) {
            return c.runBackwards = !0,
            c.immediateRender = 0 != c.immediateRender,
            new F(a,b,c)
        }
        ,
        F.fromTo = function(a, b, c, d) {
            return d.startAt = c,
            d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
            new F(a,b,d)
        }
        ,
        F.delayedCall = function(a, b, c, d, e) {
            return new F(b,0,{
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }
        ,
        F.set = function(a, b) {
            return new F(a,0,b)
        }
        ,
        F.getTweensOf = function(a, b) {
            if (null == a)
                return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length,
                d = []; --c > -1; )
                    d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1; )
                    for (f = d[c],
                    e = c; --e > -1; )
                        f === d[e] && d.splice(c, 1)
            } else
                for (d = Y(a).concat(),
                c = d.length; --c > -1; )
                    (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }
        ,
        F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b,
            b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1; )
                d[e]._kill(c, a)
        }
        ;
        var aa = r("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = b || 0,
            this._super = aa.prototype
        }, !0);
        if (f = aa.prototype,
        aa.version = "1.18.0",
        aa.API = 2,
        f._firstPT = null ,
        f._addTween = N,
        f.setRatio = L,
        f._kill = function(a) {
            var b, c = this._overwriteProps, d = this._firstPT;
            if (null != a[this._propName])
                this._overwriteProps = [];
            else
                for (b = c.length; --b > -1; )
                    null != a[c[b]] && c.splice(b, 1);
            for (; d; )
                null != a[d.n] && (d._next && (d._next._prev = d._prev),
                d._prev ? (d._prev._next = d._next,
                d._prev = null ) : this._firstPT === d && (this._firstPT = d._next)),
                d = d._next;
            return !1
        }
        ,
        f._roundProps = function(a, b) {
            for (var c = this._firstPT; c; )
                (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b),
                c = c._next
        }
        ,
        F._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h; ) {
                    for (g = h._next,
                    d = e; d && d.pr > h.pr; )
                        d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h,
                    (h._next = d) ? d._prev = h : f = h,
                    h = g
                }
                h = b._firstPT = e
            }
            for (; h; )
                h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                h = h._next;
            return c
        }
        ,
        aa.activate = function(a) {
            for (var b = a.length; --b > -1; )
                a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
            return !0
        }
        ,
        q.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API))
                throw "illegal plugin definition.";
            var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                aa.call(this, c, d),
                this._overwriteProps = e || []
            }, a.global === !0), h = g.prototype = new aa(c);
            h.constructor = g,
            g.API = a.API;
            for (b in f)
                "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version,
            aa.activate([g]),
            g
        }
        ,
        d = a._gsQueue) {
            for (e = 0; e < d.length; e++)
                d[e]();
            for (f in o)
                o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
!function(a, b) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], b) : "object" == typeof exports ? (require("gsap"),
    b(require("scrollmagic"), TweenMax, TimelineMax)) : b(a.ScrollMagic || a.jQuery && a.jQuery.ScrollMagic, a.TweenMax || a.TweenLite, a.TimelineMax || a.TimelineLite)
}(this, function(a, b, c) {
    "use strict";
    a.Scene.addOption("tweenChanges", !1, function(a) {
        return !!a
    }),
    a.Scene.extend(function() {
        var a, d = this;
        d.on("progress.plugin_gsap", function() {
            e()
        }),
        d.on("destroy.plugin_gsap", function(a) {
            d.removeTween(a.reset)
        });
        var e = function() {
            if (a) {
                var b = d.progress()
                  , c = d.state();
                a.repeat && -1 === a.repeat() ? "DURING" === c && a.paused() ? a.play() : "DURING" === c || a.paused() || a.pause() : b != a.progress() && (0 === d.duration() ? b > 0 ? a.play() : a.reverse() : d.tweenChanges() && a.tweenTo ? a.tweenTo(b * a.duration()) : a.progress(b).pause())
            }
        }
        ;
        d.setTween = function(f, g, h) {
            var i;
            arguments.length > 1 && (arguments.length < 3 && (h = g,
            g = 1),
            f = b.to(f, g, h));
            try {
                i = c ? new c({
                    smoothChildTiming: !0
                }).add(f) : f,
                i.pause()
            } catch (j) {
                return d
            }
            return a && d.removeTween(),
            a = i,
            f.repeat && -1 === f.repeat() && (a.repeat(-1),
            a.yoyo(f.yoyo())),
            e(),
            d
        }
        ,
        d.removeTween = function(b) {
            return a && (b && a.progress(0).pause(),
            a.kill(),
            a = void 0),
            d
        }
    })
});
var $buoop = {
    c: 2
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, !1)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}
!function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b(require, exports, module) : a.CountUp = b()
}(this, function(a, b, c) {
    var d = function(a, b, c, d, e, f) {
        for (var g = 0, h = ["webkit", "moz", "ms", "o"], i = 0; i < h.length && !window.requestAnimationFrame; ++i)
            window.requestAnimationFrame = window[h[i] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[h[i] + "CancelAnimationFrame"] || window[h[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
            var c = (new Date).getTime()
              , d = Math.max(0, 16 - (c - g))
              , e = window.setTimeout(function() {
                a(c + d)
            }, d);
            return g = c + d,
            e
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }
        ),
        this.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: "."
        };
        for (var j in f)
            f.hasOwnProperty(j) && (this.options[j] = f[j]);
        "" === this.options.separator && (this.options.useGrouping = !1),
        this.options.prefix || (this.options.prefix = ""),
        this.options.suffix || (this.options.suffix = ""),
        this.d = "string" == typeof a ? document.getElementById(a) : a,
        this.startVal = Number(b),
        this.endVal = Number(c),
        this.countDown = this.startVal > this.endVal,
        this.frameVal = this.startVal,
        this.decimals = Math.max(0, d || 0),
        this.dec = Math.pow(10, this.decimals),
        this.duration = 1e3 * Number(e) || 2e3;
        var k = this;
        this.version = function() {
            return "1.6.0"
        }
        ,
        this.printValue = function(a) {
            var b = isNaN(a) ? "--" : k.formatNumber(a);
            "INPUT" == k.d.tagName ? this.d.value = b : "text" == k.d.tagName || "tspan" == k.d.tagName ? this.d.textContent = b : this.d.innerHTML = b
        }
        ,
        this.easeOutExpo = function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) * 1024 / 1023 + b
        }
        ,
        this.count = function(a) {
            k.startTime || (k.startTime = a),
            k.timestamp = a;
            var b = a - k.startTime;
            k.remaining = k.duration - b,
            k.options.useEasing ? k.countDown ? k.frameVal = k.startVal - k.easeOutExpo(b, 0, k.startVal - k.endVal, k.duration) : k.frameVal = k.easeOutExpo(b, k.startVal, k.endVal - k.startVal, k.duration) : k.countDown ? k.frameVal = k.startVal - (k.startVal - k.endVal) * (b / k.duration) : k.frameVal = k.startVal + (k.endVal - k.startVal) * (b / k.duration),
            k.countDown ? k.frameVal = k.frameVal < k.endVal ? k.endVal : k.frameVal : k.frameVal = k.frameVal > k.endVal ? k.endVal : k.frameVal,
            k.frameVal = Math.round(k.frameVal * k.dec) / k.dec,
            k.printValue(k.frameVal),
            b < k.duration ? k.rAF = requestAnimationFrame(k.count) : k.callback && k.callback()
        }
        ,
        this.start = function(a) {
            return k.callback = a,
            k.rAF = requestAnimationFrame(k.count),
            !1
        }
        ,
        this.pauseResume = function() {
            k.paused ? (k.paused = !1,
            delete k.startTime,
            k.duration = k.remaining,
            k.startVal = k.frameVal,
            requestAnimationFrame(k.count)) : (k.paused = !0,
            cancelAnimationFrame(k.rAF))
        }
        ,
        this.reset = function() {
            k.paused = !1,
            delete k.startTime,
            k.startVal = b,
            cancelAnimationFrame(k.rAF),
            k.printValue(k.startVal)
        }
        ,
        this.update = function(a) {
            cancelAnimationFrame(k.rAF),
            k.paused = !1,
            delete k.startTime,
            k.startVal = k.frameVal,
            k.endVal = Number(a),
            k.countDown = k.startVal > k.endVal,
            k.rAF = requestAnimationFrame(k.count)
        }
        ,
        this.formatNumber = function(a) {
            a = a.toFixed(k.decimals),
            a += "";
            var b, c, d, e;
            if (b = a.split("."),
            c = b[0],
            d = b.length > 1 ? k.options.decimal + b[1] : "",
            e = /(\d+)(\d{3})/,
            k.options.useGrouping)
                for (; e.test(c); )
                    c = c.replace(e, "$1" + k.options.separator + "$2");
            return k.options.prefix + c + d + k.options.suffix
        }
        ,
        k.printValue(k.startVal)
    }
    ;
    return d
}),
!function(a, b) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], b) : b("object" == typeof exports ? require("scrollmagic") : a.ScrollMagic || a.jQuery && a.jQuery.ScrollMagic)
}(this, function(a) {
    "use strict";
    var b = "0.85em"
      , c = "9999"
      , d = 15
      , e = a._util
      , f = 0;
    a.Scene.extend(function() {
        var a, b = this;
        b.addIndicators = function(c) {
            if (!a) {
                var d = {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                };
                c = e.extend({}, d, c),
                f++,
                a = new g(b,c),
                b.on("add.plugin_addIndicators", a.add),
                b.on("remove.plugin_addIndicators", a.remove),
                b.on("destroy.plugin_addIndicators", b.removeIndicators),
                b.controller() && a.add()
            }
            return b
        }
        ,
        b.removeIndicators = function() {
            return a && (a.remove(),
            this.off("*.plugin_addIndicators"),
            a = void 0),
            b
        }
    }),
    a.Controller.addOption("addIndicators", !1),
    a.Controller.extend(function() {
        var b = this
          , c = b.info()
          , f = c.container
          , g = c.isDocument
          , h = c.vertical
          , i = {
            groups: []
        };
        this._indicators = i;
        var j = function() {
            i.updateBoundsPositions()
        }
          , k = function() {
            i.updateTriggerGroupPositions()
        }
        ;
        return f.addEventListener("resize", k),
        g || (window.addEventListener("resize", k),
        window.addEventListener("scroll", k)),
        f.addEventListener("resize", j),
        f.addEventListener("scroll", j),
        this._indicators.updateBoundsPositions = function(a) {
            for (var b, c, g, j = a ? [e.extend({}, a.triggerGroup, {
                members: [a]
            })] : i.groups, k = j.length, l = {}, m = h ? "left" : "top", n = h ? "width" : "height", o = h ? e.get.scrollLeft(f) + e.get.width(f) - d : e.get.scrollTop(f) + e.get.height(f) - d; k--; )
                for (g = j[k],
                b = g.members.length,
                c = e.get[n](g.element.firstChild); b--; )
                    l[m] = o - c,
                    e.css(g.members[b].bounds, l)
        }
        ,
        this._indicators.updateTriggerGroupPositions = function(a) {
            for (var c, j, k, l, m, n = a ? [a] : i.groups, o = n.length, p = g ? document.body : f, q = g ? {
                top: 0,
                left: 0
            } : e.get.offset(p, !0), r = h ? e.get.width(f) - d : e.get.height(f) - d, s = h ? "width" : "height", t = h ? "Y" : "X"; o--; )
                c = n[o],
                j = c.element,
                k = c.triggerHook * b.info("size"),
                l = e.get[s](j.firstChild.firstChild),
                m = k > l ? "translate" + t + "(-100%)" : "",
                e.css(j, {
                    top: q.top + (h ? k : r - c.members[0].options.indent),
                    left: q.left + (h ? r - c.members[0].options.indent : k)
                }),
                e.css(j.firstChild.firstChild, {
                    "-ms-transform": m,
                    "-webkit-transform": m,
                    transform: m
                })
        }
        ,
        this._indicators.updateTriggerGroupLabel = function(a) {
            var b = "trigger" + (a.members.length > 1 ? "" : " " + a.members[0].options.name)
              , c = a.element.firstChild.firstChild
              , d = c.textContent !== b;
            d && (c.textContent = b,
            h && i.updateBoundsPositions())
        }
        ,
        this.addScene = function(c) {
            this._options.addIndicators && c instanceof a.Scene && c.controller() === b && c.addIndicators(),
            this.$super.addScene.apply(this, arguments)
        }
        ,
        this.destroy = function() {
            f.removeEventListener("resize", k),
            g || (window.removeEventListener("resize", k),
            window.removeEventListener("scroll", k)),
            f.removeEventListener("resize", j),
            f.removeEventListener("scroll", j),
            this.$super.destroy.apply(this, arguments)
        }
        ,
        b
    });
    var g = function(a, b) {
        var c, d, g = this, i = h.bounds(), j = h.start(b.colorStart), k = h.end(b.colorEnd), l = b.parent && e.get.elements(b.parent)[0];
        b.name = b.name || f,
        j.firstChild.textContent += " " + b.name,
        k.textContent += " " + b.name,
        i.appendChild(j),
        i.appendChild(k),
        g.options = b,
        g.bounds = i,
        g.triggerGroup = void 0,
        this.add = function() {
            d = a.controller(),
            c = d.info("vertical");
            var b = d.info("isDocument");
            l || (l = b ? document.body : d.info("container")),
            b || "static" !== e.css(l, "position") || e.css(l, {
                position: "relative"
            }),
            a.on("change.plugin_addIndicators", n),
            a.on("shift.plugin_addIndicators", m),
            t(),
            q(),
            setTimeout(function() {
                d._indicators.updateBoundsPositions(g)
            }, 0)
        }
        ,
        this.remove = function() {
            if (g.triggerGroup) {
                if (a.off("change.plugin_addIndicators", n),
                a.off("shift.plugin_addIndicators", m),
                g.triggerGroup.members.length > 1) {
                    var b = g.triggerGroup;
                    b.members.splice(b.members.indexOf(g), 1),
                    d._indicators.updateTriggerGroupLabel(b),
                    d._indicators.updateTriggerGroupPositions(b),
                    g.triggerGroup = void 0
                } else
                    s();
                p()
            }
        }
        ;
        var m = function() {
            q()
        }
          , n = function(a) {
            "triggerHook" === a.what && t()
        }
          , o = function() {
            var a = d.info("vertical");
            e.css(j.firstChild, {
                "border-bottom-width": a ? 1 : 0,
                "border-right-width": a ? 0 : 1,
                bottom: a ? -1 : b.indent,
                right: a ? b.indent : -1,
                padding: a ? "0 8px" : "2px 4px"
            }),
            e.css(k, {
                "border-top-width": a ? 1 : 0,
                "border-left-width": a ? 0 : 1,
                top: a ? "100%" : "",
                right: a ? b.indent : "",
                bottom: a ? "" : b.indent,
                left: a ? "" : "100%",
                padding: a ? "0 8px" : "2px 4px"
            }),
            l.appendChild(i)
        }
          , p = function() {
            i.parentNode.removeChild(i)
        }
          , q = function() {
            i.parentNode !== l && o();
            var b = {};
            b[c ? "top" : "left"] = a.triggerPosition(),
            b[c ? "height" : "width"] = a.duration(),
            e.css(i, b),
            e.css(k, {
                display: a.duration() > 0 ? "" : "none"
            })
        }
          , r = function() {
            var f = h.trigger(b.colorTrigger)
              , i = {};
            i[c ? "right" : "bottom"] = 0,
            i[c ? "border-top-width" : "border-left-width"] = 1,
            e.css(f.firstChild, i),
            e.css(f.firstChild.firstChild, {
                padding: c ? "0 8px 3px 8px" : "3px 4px"
            }),
            document.body.appendChild(f);
            var j = {
                triggerHook: a.triggerHook(),
                element: f,
                members: [g]
            };
            d._indicators.groups.push(j),
            g.triggerGroup = j,
            d._indicators.updateTriggerGroupLabel(j),
            d._indicators.updateTriggerGroupPositions(j)
        }
          , s = function() {
            d._indicators.groups.splice(d._indicators.groups.indexOf(g.triggerGroup), 1),
            g.triggerGroup.element.parentNode.removeChild(g.triggerGroup.element),
            g.triggerGroup = void 0
        }
          , t = function() {
            var b = a.triggerHook()
              , c = 1e-4;
            if (!(g.triggerGroup && Math.abs(g.triggerGroup.triggerHook - b) < c)) {
                for (var e, f = d._indicators.groups, h = f.length; h--; )
                    if (e = f[h],
                    Math.abs(e.triggerHook - b) < c)
                        return g.triggerGroup && (1 === g.triggerGroup.members.length ? s() : (g.triggerGroup.members.splice(g.triggerGroup.members.indexOf(g), 1),
                        d._indicators.updateTriggerGroupLabel(g.triggerGroup),
                        d._indicators.updateTriggerGroupPositions(g.triggerGroup))),
                        e.members.push(g),
                        g.triggerGroup = e,
                        void d._indicators.updateTriggerGroupLabel(e);
                if (g.triggerGroup) {
                    if (1 === g.triggerGroup.members.length)
                        return g.triggerGroup.triggerHook = b,
                        void d._indicators.updateTriggerGroupPositions(g.triggerGroup);
                    g.triggerGroup.members.splice(g.triggerGroup.members.indexOf(g), 1),
                    d._indicators.updateTriggerGroupLabel(g.triggerGroup),
                    d._indicators.updateTriggerGroupPositions(g.triggerGroup),
                    g.triggerGroup = void 0
                }
                r()
            }
        }
    }
      , h = {
        start: function(a) {
            var b = document.createElement("div");
            b.textContent = "start",
            e.css(b, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: a,
                "border-color": a
            });
            var c = document.createElement("div");
            return e.css(c, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }),
            c.appendChild(b),
            c
        },
        end: function(a) {
            var b = document.createElement("div");
            return b.textContent = "end",
            e.css(b, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: a,
                "border-color": a
            }),
            b
        },
        bounds: function() {
            var a = document.createElement("div");
            return e.css(a, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": b
            }),
            a.style.zIndex = c,
            a
        },
        trigger: function(a) {
            var d = document.createElement("div");
            d.textContent = "trigger",
            e.css(d, {
                position: "relative"
            });
            var f = document.createElement("div");
            e.css(f, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: a,
                "border-color": a
            }),
            f.appendChild(d);
            var g = document.createElement("div");
            return e.css(g, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": b
            }),
            g.style.zIndex = c,
            g.appendChild(f),
            g
        }
    }
}),
function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera),
document.getElementById("map") && google.maps.event.addDomListener(window, "load", initMap1),
function() {
    "use strict";
    var a = function() {
        this.init()
    }
    ;
    a.prototype = {
        init: function() {
            var a = this || b;
            return a._codecs = {},
            a._howls = [],
            a._muted = !1,
            a._volume = 1,
            a._canPlayEvent = "canplaythrough",
            a._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null ,
            a.masterGain = null ,
            a.noAudio = !1,
            a.usingWebAudio = !0,
            a.autoSuspend = !0,
            a.ctx = null ,
            a.mobileAutoEnable = !0,
            a._setup(),
            a
        },
        volume: function(a) {
            var c = this || b;
            if (a = parseFloat(a),
            c.ctx || j(),
            "undefined" != typeof a && a >= 0 && 1 >= a) {
                if (c._volume = a,
                c._muted)
                    return c;
                c.usingWebAudio && (c.masterGain.gain.value = a);
                for (var d = 0; d < c._howls.length; d++)
                    if (!c._howls[d]._webAudio)
                        for (var e = c._howls[d]._getSoundIds(), f = 0; f < e.length; f++) {
                            var g = c._howls[d]._soundById(e[f]);
                            g && g._node && (g._node.volume = g._volume * a)
                        }
                return c
            }
            return c._volume
        },
        mute: function(a) {
            var c = this || b;
            c.ctx || j(),
            c._muted = a,
            c.usingWebAudio && (c.masterGain.gain.value = a ? 0 : c._volume);
            for (var d = 0; d < c._howls.length; d++)
                if (!c._howls[d]._webAudio)
                    for (var e = c._howls[d]._getSoundIds(), f = 0; f < e.length; f++) {
                        var g = c._howls[d]._soundById(e[f]);
                        g && g._node && (g._node.muted = a ? !0 : g._muted)
                    }
            return c
        },
        unload: function() {
            for (var a = this || b, c = a._howls.length - 1; c >= 0; c--)
                a._howls[c].unload();
            return a.usingWebAudio && "undefined" != typeof a.ctx.close && (a.ctx.close(),
            a.ctx = null ,
            j()),
            a
        },
        codecs: function(a) {
            return (this || b)._codecs[a]
        },
        _setup: function() {
            var a = this || b;
            return a.state = a.ctx ? a.ctx.state || "running" : "running",
            a._autoSuspend(),
            a.noAudio || a._setupCodecs(),
            a
        },
        _setupCodecs: function() {
            var a = this || b
              , c = "undefined" != typeof Audio ? new Audio : null ;
            if (!c || "function" != typeof c.canPlayType)
                return a;
            var d = c.canPlayType("audio/mpeg;").replace(/^no$/, "")
              , e = a._navigator && a._navigator.userAgent.match(/OPR\/([0-6].)/g)
              , f = e && parseInt(e[0].split("/")[1], 10) < 33;
            return a._codecs = {
                mp3: !(f || !d && !c.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!d,
                opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!c.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
            },
            a
        },
        _enableMobileAudio: function() {
            var a = this || b
              , c = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(a._navigator && a._navigator.userAgent)
              , d = !!("ontouchend"in window || a._navigator && a._navigator.maxTouchPoints > 0 || a._navigator && a._navigator.msMaxTouchPoints > 0);
            if (!a._mobileEnabled && a.ctx && (c || d)) {
                a._mobileEnabled = !1,
                a._mobileUnloaded || 44100 === a.ctx.sampleRate || (a._mobileUnloaded = !0,
                a.unload()),
                a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
                var e = function() {
                    var b = a.ctx.createBufferSource();
                    b.buffer = a._scratchBuffer,
                    b.connect(a.ctx.destination),
                    "undefined" == typeof b.start ? b.noteOn(0) : b.start(0),
                    b.onended = function() {
                        b.disconnect(0),
                        a._mobileEnabled = !0,
                        a.mobileAutoEnable = !1,
                        document.removeEventListener("touchend", e, !0)
                    }
                }
                ;
                return document.addEventListener("touchend", e, !0),
                a
            }
        },
        _autoSuspend: function() {
            var a = this;
            if (a.autoSuspend && a.ctx && "undefined" != typeof a.ctx.suspend && b.usingWebAudio) {
                for (var c = 0; c < a._howls.length; c++)
                    if (a._howls[c]._webAudio)
                        for (var d = 0; d < a._howls[c]._sounds.length; d++)
                            if (!a._howls[c]._sounds[d]._paused)
                                return a;
                return a._suspendTimer && clearTimeout(a._suspendTimer),
                a._suspendTimer = setTimeout(function() {
                    a.autoSuspend && (a._suspendTimer = null ,
                    a.state = "suspending",
                    a.ctx.suspend().then(function() {
                        a.state = "suspended",
                        a._resumeAfterSuspend && (delete a._resumeAfterSuspend,
                        a._autoResume())
                    }))
                }, 3e4),
                a
            }
        },
        _autoResume: function() {
            var a = this;
            if (a.ctx && "undefined" != typeof a.ctx.resume && b.usingWebAudio)
                return "running" === a.state && a._suspendTimer ? (clearTimeout(a._suspendTimer),
                a._suspendTimer = null ) : "suspended" === a.state ? (a.state = "resuming",
                a.ctx.resume().then(function() {
                    a.state = "running"
                }),
                a._suspendTimer && (clearTimeout(a._suspendTimer),
                a._suspendTimer = null )) : "suspending" === a.state && (a._resumeAfterSuspend = !0),
                a
        }
    };
    var b = new a
      , c = function(a) {
        var b = this;
        return a.src && 0 !== a.src.length ? void b.init(a) : void console.error("An array of source files must be passed with any new Howl.")
    }
    ;
    c.prototype = {
        init: function(a) {
            var c = this;
            return b.ctx || j(),
            c._autoplay = a.autoplay || !1,
            c._format = "string" != typeof a.format ? a.format : [a.format],
            c._html5 = a.html5 || !1,
            c._muted = a.mute || !1,
            c._loop = a.loop || !1,
            c._pool = a.pool || 5,
            c._preload = "boolean" == typeof a.preload ? a.preload : !0,
            c._rate = a.rate || 1,
            c._sprite = a.sprite || {},
            c._src = "string" != typeof a.src ? a.src : [a.src],
            c._volume = void 0 !== a.volume ? a.volume : 1,
            c._duration = 0,
            c._state = "unloaded",
            c._sounds = [],
            c._endTimers = {},
            c._queue = [],
            c._onend = a.onend ? [{
                fn: a.onend
            }] : [],
            c._onfade = a.onfade ? [{
                fn: a.onfade
            }] : [],
            c._onload = a.onload ? [{
                fn: a.onload
            }] : [],
            c._onloaderror = a.onloaderror ? [{
                fn: a.onloaderror
            }] : [],
            c._onpause = a.onpause ? [{
                fn: a.onpause
            }] : [],
            c._onplay = a.onplay ? [{
                fn: a.onplay
            }] : [],
            c._onstop = a.onstop ? [{
                fn: a.onstop
            }] : [],
            c._onmute = a.onmute ? [{
                fn: a.onmute
            }] : [],
            c._onvolume = a.onvolume ? [{
                fn: a.onvolume
            }] : [],
            c._onrate = a.onrate ? [{
                fn: a.onrate
            }] : [],
            c._onseek = a.onseek ? [{
                fn: a.onseek
            }] : [],
            c._webAudio = b.usingWebAudio && !c._html5,
            "undefined" != typeof b.ctx && b.ctx && b.mobileAutoEnable && b._enableMobileAudio(),
            b._howls.push(c),
            c._preload && c.load(),
            c
        },
        load: function() {
            var a = this
              , c = null ;
            if (b.noAudio)
                return void a._emit("loaderror", null , "No audio support.");
            "string" == typeof a._src && (a._src = [a._src]);
            for (var e = 0; e < a._src.length; e++) {
                var g, h;
                if (a._format && a._format[e])
                    g = a._format[e];
                else {
                    if (h = a._src[e],
                    "string" != typeof h) {
                        a._emit("loaderror", null , "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    g = /^data:audio\/([^;,]+);/i.exec(h),
                    g || (g = /\.([^.]+)$/.exec(h.split("?", 1)[0])),
                    g && (g = g[1].toLowerCase())
                }
                if (b.codecs(g)) {
                    c = a._src[e];
                    break
                }
            }
            return c ? (a._src = c,
            a._state = "loading",
            "https:" === window.location.protocol && "http:" === c.slice(0, 5) && (a._html5 = !0,
            a._webAudio = !1),
            new d(a),
            a._webAudio && f(a),
            a) : void a._emit("loaderror", null , "No codec support for selected audio sources.")
        },
        play: function(a, c) {
            var d = this
              , e = null ;
            if ("number" == typeof a)
                e = a,
                a = null ;
            else {
                if ("string" == typeof a && "loaded" === d._state && !d._sprite[a])
                    return null ;
                if ("undefined" == typeof a) {
                    a = "__default";
                    for (var f = 0, g = 0; g < d._sounds.length; g++)
                        d._sounds[g]._paused && !d._sounds[g]._ended && (f++,
                        e = d._sounds[g]._id);
                    1 === f ? a = null : e = null
                }
            }
            var h = e ? d._soundById(e) : d._inactiveSound();
            if (!h)
                return null ;
            if (e && !a && (a = h._sprite || "__default"),
            "loaded" !== d._state && !d._sprite[a])
                return d._queue.push({
                    event: "play",
                    action: function() {
                        d.play(d._soundById(h._id) ? h._id : void 0)
                    }
                }),
                h._id;
            if (e && !h._paused)
                return c || setTimeout(function() {
                    d._emit("play", h._id)
                }, 0),
                h._id;
            d._webAudio && b._autoResume();
            var i = h._seek > 0 ? h._seek : d._sprite[a][0] / 1e3
              , j = (d._sprite[a][0] + d._sprite[a][1]) / 1e3 - i
              , k = 1e3 * j / Math.abs(h._rate);
            h._paused = !1,
            h._ended = !1,
            h._sprite = a,
            h._seek = i,
            h._start = d._sprite[a][0] / 1e3,
            h._stop = (d._sprite[a][0] + d._sprite[a][1]) / 1e3,
            h._loop = !(!h._loop && !d._sprite[a][2]);
            var l = h._node;
            if (d._webAudio) {
                var m = function() {
                    d._refreshBuffer(h);
                    var a = h._muted || d._muted ? 0 : h._volume;
                    l.gain.setValueAtTime(a, b.ctx.currentTime),
                    h._playStart = b.ctx.currentTime,
                    "undefined" == typeof l.bufferSource.start ? h._loop ? l.bufferSource.noteGrainOn(0, i, 86400) : l.bufferSource.noteGrainOn(0, i, j) : h._loop ? l.bufferSource.start(0, i, 86400) : l.bufferSource.start(0, i, j),
                    k !== 1 / 0 && (d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k)),
                    c || setTimeout(function() {
                        d._emit("play", h._id)
                    }, 0)
                }
                ;
                "loaded" === d._state ? m() : (d.once("load", m, h._id),
                d._clearTimer(h._id))
            } else {
                var n = function() {
                    l.currentTime = i,
                    l.muted = h._muted || d._muted || b._muted || l.muted,
                    l.volume = h._volume * b.volume(),
                    l.playbackRate = h._rate,
                    setTimeout(function() {
                        l.play(),
                        k !== 1 / 0 && (d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k)),
                        c || d._emit("play", h._id)
                    }, 0)
                }
                  , o = "loaded" === d._state && (window && window.ejecta || !l.readyState && b._navigator.isCocoonJS);
                if (4 === l.readyState || o)
                    n();
                else {
                    var p = function() {
                        n(),
                        l.removeEventListener(b._canPlayEvent, p, !1)
                    }
                    ;
                    l.addEventListener(b._canPlayEvent, p, !1),
                    d._clearTimer(h._id)
                }
            }
            return h._id
        },
        pause: function(a) {
            var b = this;
            if ("loaded" !== b._state)
                return b._queue.push({
                    event: "pause",
                    action: function() {
                        b.pause(a)
                    }
                }),
                b;
            for (var c = b._getSoundIds(a), d = 0; d < c.length; d++) {
                b._clearTimer(c[d]);
                var e = b._soundById(c[d]);
                if (e && !e._paused) {
                    if (e._seek = b.seek(c[d]),
                    e._rateSeek = 0,
                    e._paused = !0,
                    b._stopFade(c[d]),
                    e._node)
                        if (b._webAudio) {
                            if (!e._node.bufferSource)
                                return b;
                            "undefined" == typeof e._node.bufferSource.stop ? e._node.bufferSource.noteOff(0) : e._node.bufferSource.stop(0),
                            b._cleanBuffer(e._node)
                        } else
                            isNaN(e._node.duration) && e._node.duration !== 1 / 0 || e._node.pause();
                    arguments[1] || b._emit("pause", e._id)
                }
            }
            return b
        },
        stop: function(a, b) {
            var c = this;
            if ("loaded" !== c._state)
                return c._queue.push({
                    event: "stop",
                    action: function() {
                        c.stop(a)
                    }
                }),
                c;
            for (var d = c._getSoundIds(a), e = 0; e < d.length; e++) {
                c._clearTimer(d[e]);
                var f = c._soundById(d[e]);
                if (f && !f._paused && (f._seek = f._start || 0,
                f._rateSeek = 0,
                f._paused = !0,
                f._ended = !0,
                c._stopFade(d[e]),
                f._node))
                    if (c._webAudio) {
                        if (!f._node.bufferSource)
                            return c;
                        "undefined" == typeof f._node.bufferSource.stop ? f._node.bufferSource.noteOff(0) : f._node.bufferSource.stop(0),
                        c._cleanBuffer(f._node)
                    } else
                        isNaN(f._node.duration) && f._node.duration !== 1 / 0 || (f._node.currentTime = f._start || 0,
                        f._node.pause());
                f && !b && c._emit("stop", f._id)
            }
            return c
        },
        mute: function(a, c) {
            var d = this;
            if ("loaded" !== d._state)
                return d._queue.push({
                    event: "mute",
                    action: function() {
                        d.mute(a, c)
                    }
                }),
                d;
            if ("undefined" == typeof c) {
                if ("boolean" != typeof a)
                    return d._muted;
                d._muted = a
            }
            for (var e = d._getSoundIds(c), f = 0; f < e.length; f++) {
                var g = d._soundById(e[f]);
                g && (g._muted = a,
                d._webAudio && g._node ? g._node.gain.setValueAtTime(a ? 0 : g._volume, b.ctx.currentTime) : g._node && (g._node.muted = b._muted ? !0 : a),
                d._emit("mute", g._id))
            }
            return d
        },
        volume: function() {
            var a, c, d = this, e = arguments;
            if (0 === e.length)
                return d._volume;
            if (1 === e.length) {
                var f = d._getSoundIds()
                  , g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : a = parseFloat(e[0])
            } else
                e.length >= 2 && (a = parseFloat(e[0]),
                c = parseInt(e[1], 10));
            var h;
            if (!("undefined" != typeof a && a >= 0 && 1 >= a))
                return h = c ? d._soundById(c) : d._sounds[0],
                h ? h._volume : 0;
            if ("loaded" !== d._state)
                return d._queue.push({
                    event: "volume",
                    action: function() {
                        d.volume.apply(d, e)
                    }
                }),
                d;
            "undefined" == typeof c && (d._volume = a),
            c = d._getSoundIds(c);
            for (var i = 0; i < c.length; i++)
                h = d._soundById(c[i]),
                h && (h._volume = a,
                e[2] || d._stopFade(c[i]),
                d._webAudio && h._node && !h._muted ? h._node.gain.setValueAtTime(a, b.ctx.currentTime) : h._node && !h._muted && (h._node.volume = a * b.volume()),
                d._emit("volume", h._id));
            return d
        },
        fade: function(a, c, d, e) {
            var f = this
              , g = Math.abs(a - c)
              , h = a > c ? "out" : "in"
              , i = g / .01
              , j = d / i;
            if ("loaded" !== f._state)
                return f._queue.push({
                    event: "fade",
                    action: function() {
                        f.fade(a, c, d, e)
                    }
                }),
                f;
            f.volume(a, e);
            for (var k = f._getSoundIds(e), l = 0; l < k.length; l++) {
                var m = f._soundById(k[l]);
                if (m) {
                    if (e || f._stopFade(k[l]),
                    f._webAudio && !m._muted) {
                        var n = b.ctx.currentTime
                          , o = n + d / 1e3;
                        m._volume = a,
                        m._node.gain.setValueAtTime(a, n),
                        m._node.gain.linearRampToValueAtTime(c, o)
                    }
                    var p = a;
                    m._interval = setInterval(function(a, b) {
                        p += "in" === h ? .01 : -.01,
                        p = Math.max(0, p),
                        p = Math.min(1, p),
                        p = Math.round(100 * p) / 100,
                        f._webAudio ? ("undefined" == typeof e && (f._volume = p),
                        b._volume = p) : f.volume(p, a, !0),
                        p === c && (clearInterval(b._interval),
                        b._interval = null ,
                        f.volume(p, a),
                        f._emit("fade", a))
                    }
                    .bind(f, k[l], m), j)
                }
            }
            return f
        },
        _stopFade: function(a) {
            var c = this
              , d = c._soundById(a);
            return d && d._interval && (c._webAudio && d._node.gain.cancelScheduledValues(b.ctx.currentTime),
            clearInterval(d._interval),
            d._interval = null ,
            c._emit("fade", a)),
            c
        },
        loop: function() {
            var a, b, c, d = this, e = arguments;
            if (0 === e.length)
                return d._loop;
            if (1 === e.length) {
                if ("boolean" != typeof e[0])
                    return c = d._soundById(parseInt(e[0], 10)),
                    c ? c._loop : !1;
                a = e[0],
                d._loop = a
            } else
                2 === e.length && (a = e[0],
                b = parseInt(e[1], 10));
            for (var f = d._getSoundIds(b), g = 0; g < f.length; g++)
                c = d._soundById(f[g]),
                c && (c._loop = a,
                d._webAudio && c._node && c._node.bufferSource && (c._node.bufferSource.loop = a));
            return d
        },
        rate: function() {
            var a, c, d = this, e = arguments;
            if (0 === e.length)
                c = d._sounds[0]._id;
            else if (1 === e.length) {
                var f = d._getSoundIds()
                  , g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : a = parseFloat(e[0])
            } else
                2 === e.length && (a = parseFloat(e[0]),
                c = parseInt(e[1], 10));
            var h;
            if ("number" != typeof a)
                return h = d._soundById(c),
                h ? h._rate : d._rate;
            if ("loaded" !== d._state)
                return d._queue.push({
                    event: "rate",
                    action: function() {
                        d.rate.apply(d, e)
                    }
                }),
                d;
            "undefined" == typeof c && (d._rate = a),
            c = d._getSoundIds(c);
            for (var i = 0; i < c.length; i++)
                if (h = d._soundById(c[i])) {
                    h._rateSeek = d.seek(c[i]),
                    h._playStart = d._webAudio ? b.ctx.currentTime : h._playStart,
                    h._rate = a,
                    d._webAudio && h._node && h._node.bufferSource ? h._node.bufferSource.playbackRate.value = a : h._node && (h._node.playbackRate = a);
                    var j = d.seek(c[i])
                      , k = (d._sprite[h._sprite][0] + d._sprite[h._sprite][1]) / 1e3 - j
                      , l = 1e3 * k / Math.abs(h._rate);
                    (d._endTimers[c[i]] || !h._paused) && (d._clearTimer(c[i]),
                    d._endTimers[c[i]] = setTimeout(d._ended.bind(d, h), l)),
                    d._emit("rate", h._id)
                }
            return d
        },
        seek: function() {
            var a, c, d = this, e = arguments;
            if (0 === e.length)
                c = d._sounds[0]._id;
            else if (1 === e.length) {
                var f = d._getSoundIds()
                  , g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : (c = d._sounds[0]._id,
                a = parseFloat(e[0]))
            } else
                2 === e.length && (a = parseFloat(e[0]),
                c = parseInt(e[1], 10));
            if ("undefined" == typeof c)
                return d;
            if ("loaded" !== d._state)
                return d._queue.push({
                    event: "seek",
                    action: function() {
                        d.seek.apply(d, e)
                    }
                }),
                d;
            var h = d._soundById(c);
            if (h) {
                if (!("number" == typeof a && a >= 0)) {
                    if (d._webAudio) {
                        var i = d.playing(c) ? b.ctx.currentTime - h._playStart : 0
                          , j = h._rateSeek ? h._rateSeek - h._seek : 0;
                        return h._seek + (j + i * Math.abs(h._rate))
                    }
                    return h._node.currentTime
                }
                var k = d.playing(c);
                k && d.pause(c, !0),
                h._seek = a,
                h._ended = !1,
                d._clearTimer(c),
                k && d.play(c, !0),
                !d._webAudio && h._node && (h._node.currentTime = a),
                d._emit("seek", c)
            }
            return d
        },
        playing: function(a) {
            var b = this;
            if ("number" == typeof a) {
                var c = b._soundById(a);
                return c ? !c._paused : !1
            }
            for (var d = 0; d < b._sounds.length; d++)
                if (!b._sounds[d]._paused)
                    return !0;
            return !1
        },
        duration: function(a) {
            var b = this
              , c = b._duration
              , d = b._soundById(a);
            return d && (c = b._sprite[d._sprite][1] / 1e3),
            c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var a = this, c = a._sounds, d = 0; d < c.length; d++) {
                c[d]._paused || (a.stop(c[d]._id),
                a._emit("end", c[d]._id)),
                a._webAudio || (c[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",
                c[d]._node.removeEventListener("error", c[d]._errorFn, !1),
                c[d]._node.removeEventListener(b._canPlayEvent, c[d]._loadFn, !1)),
                delete c[d]._node,
                a._clearTimer(c[d]._id);
                var f = b._howls.indexOf(a);
                f >= 0 && b._howls.splice(f, 1)
            }
            var g = !0;
            for (d = 0; d < b._howls.length; d++)
                if (b._howls[d]._src === a._src) {
                    g = !1;
                    break
                }
            return e && g && delete e[a._src],
            a._state = "unloaded",
            a._sounds = [],
            a = null ,
            null
        },
        on: function(a, b, c, d) {
            var e = this
              , f = e["_on" + a];
            return "function" == typeof b && f.push(d ? {
                id: c,
                fn: b,
                once: d
            } : {
                id: c,
                fn: b
            }),
            e
        },
        off: function(a, b, c) {
            var d = this
              , e = d["_on" + a]
              , f = 0;
            if (b) {
                for (f = 0; f < e.length; f++)
                    if (b === e[f].fn && c === e[f].id) {
                        e.splice(f, 1);
                        break
                    }
            } else if (a)
                d["_on" + a] = [];
            else {
                var g = Object.keys(d);
                for (f = 0; f < g.length; f++)
                    0 === g[f].indexOf("_on") && Array.isArray(d[g[f]]) && (d[g[f]] = [])
            }
            return d
        },
        once: function(a, b, c) {
            var d = this;
            return d.on(a, b, c, 1),
            d
        },
        _emit: function(a, b, c) {
            for (var d = this, e = d["_on" + a], f = e.length - 1; f >= 0; f--)
                e[f].id && e[f].id !== b && "load" !== a || (setTimeout(function(a) {
                    a.call(this, b, c)
                }
                .bind(d, e[f].fn), 0),
                e[f].once && d.off(a, e[f].fn, e[f].id));
            return d
        },
        _loadQueue: function() {
            var a = this;
            if (a._queue.length > 0) {
                var b = a._queue[0];
                a.once(b.event, function() {
                    a._queue.shift(),
                    a._loadQueue()
                }),
                b.action()
            }
            return a
        },
        _ended: function(a) {
            var c = this
              , d = a._sprite
              , e = !(!a._loop && !c._sprite[d][2]);
            if (c._emit("end", a._id),
            !c._webAudio && e && c.stop(a._id, !0).play(a._id),
            c._webAudio && e) {
                c._emit("play", a._id),
                a._seek = a._start || 0,
                a._rateSeek = 0,
                a._playStart = b.ctx.currentTime;
                var f = 1e3 * (a._stop - a._start) / Math.abs(a._rate);
                c._endTimers[a._id] = setTimeout(c._ended.bind(c, a), f)
            }
            return c._webAudio && !e && (a._paused = !0,
            a._ended = !0,
            a._seek = a._start || 0,
            a._rateSeek = 0,
            c._clearTimer(a._id),
            c._cleanBuffer(a._node),
            b._autoSuspend()),
            c._webAudio || e || c.stop(a._id),
            c
        },
        _clearTimer: function(a) {
            var b = this;
            return b._endTimers[a] && (clearTimeout(b._endTimers[a]),
            delete b._endTimers[a]),
            b
        },
        _soundById: function(a) {
            for (var b = this, c = 0; c < b._sounds.length; c++)
                if (a === b._sounds[c]._id)
                    return b._sounds[c];
            return null
        },
        _inactiveSound: function() {
            var a = this;
            a._drain();
            for (var b = 0; b < a._sounds.length; b++)
                if (a._sounds[b]._ended)
                    return a._sounds[b].reset();
            return new d(a)
        },
        _drain: function() {
            var a = this
              , b = a._pool
              , c = 0
              , d = 0;
            if (!(a._sounds.length < b)) {
                for (d = 0; d < a._sounds.length; d++)
                    a._sounds[d]._ended && c++;
                for (d = a._sounds.length - 1; d >= 0; d--) {
                    if (b >= c)
                        return;
                    a._sounds[d]._ended && (a._webAudio && a._sounds[d]._node && a._sounds[d]._node.disconnect(0),
                    a._sounds.splice(d, 1),
                    c--)
                }
            }
        },
        _getSoundIds: function(a) {
            var b = this;
            if ("undefined" == typeof a) {
                for (var c = [], d = 0; d < b._sounds.length; d++)
                    c.push(b._sounds[d]._id);
                return c
            }
            return [a]
        },
        _refreshBuffer: function(a) {
            var c = this;
            return a._node.bufferSource = b.ctx.createBufferSource(),
            a._node.bufferSource.buffer = e[c._src],
            a._panner ? a._node.bufferSource.connect(a._panner) : a._node.bufferSource.connect(a._node),
            a._node.bufferSource.loop = a._loop,
            a._loop && (a._node.bufferSource.loopStart = a._start || 0,
            a._node.bufferSource.loopEnd = a._stop),
            a._node.bufferSource.playbackRate.value = a._rate,
            c
        },
        _cleanBuffer: function(a) {
            var b = this;
            if (b._scratchBuffer) {
                a.bufferSource.onended = null ,
                a.bufferSource.disconnect(0);
                try {
                    a.bufferSource.buffer = b._scratchBuffer
                } catch (c) {}
            }
            return a.bufferSource = null ,
            b
        }
    };
    var d = function(a) {
        this._parent = a,
        this.init()
    }
    ;
    d.prototype = {
        init: function() {
            var a = this
              , b = a._parent;
            return a._muted = b._muted,
            a._loop = b._loop,
            a._volume = b._volume,
            a._muted = b._muted,
            a._rate = b._rate,
            a._seek = 0,
            a._paused = !0,
            a._ended = !0,
            a._sprite = "__default",
            a._id = Math.round(Date.now() * Math.random()),
            b._sounds.push(a),
            a.create(),
            a
        },
        create: function() {
            var a = this
              , c = a._parent
              , d = b._muted || a._muted || a._parent._muted ? 0 : a._volume;
            return c._webAudio ? (a._node = "undefined" == typeof b.ctx.createGain ? b.ctx.createGainNode() : b.ctx.createGain(),
            a._node.gain.setValueAtTime(d, b.ctx.currentTime),
            a._node.paused = !0,
            a._node.connect(b.masterGain)) : (a._node = new Audio,
            a._errorFn = a._errorListener.bind(a),
            a._node.addEventListener("error", a._errorFn, !1),
            a._loadFn = a._loadListener.bind(a),
            a._node.addEventListener(b._canPlayEvent, a._loadFn, !1),
            a._node.src = c._src,
            a._node.preload = "auto",
            a._node.volume = d * b.volume(),
            a._node.load()),
            a
        },
        reset: function() {
            var a = this
              , b = a._parent;
            return a._muted = b._muted,
            a._loop = b._loop,
            a._volume = b._volume,
            a._muted = b._muted,
            a._rate = b._rate,
            a._seek = 0,
            a._rateSeek = 0,
            a._paused = !0,
            a._ended = !0,
            a._sprite = "__default",
            a._id = Math.round(Date.now() * Math.random()),
            a
        },
        _errorListener: function() {
            var a = this;
            a._node.error && 4 === a._node.error.code && (b.noAudio = !0),
            a._parent._emit("loaderror", a._id, a._node.error ? a._node.error.code : 0),
            a._node.removeEventListener("error", a._errorListener, !1)
        },
        _loadListener: function() {
            var a = this
              , c = a._parent;
            c._duration = Math.ceil(10 * a._node.duration) / 10,
            0 === Object.keys(c._sprite).length && (c._sprite = {
                __default: [0, 1e3 * c._duration]
            }),
            "loaded" !== c._state && (c._state = "loaded",
            c._emit("load"),
            c._loadQueue()),
            c._autoplay && c.play(),
            a._node.removeEventListener(b._canPlayEvent, a._loadFn, !1)
        }
    };
    var e = {}
      , f = function(a) {
        var b = a._src;
        if (e[b])
            return a._duration = e[b].duration,
            void i(a);
        if (/^data:[^;]+;base64,/.test(b)) {
            for (var c = atob(b.split(",")[1]), d = new Uint8Array(c.length), f = 0; f < c.length; ++f)
                d[f] = c.charCodeAt(f);
            h(d.buffer, a)
        } else {
            var j = new XMLHttpRequest;
            j.open("GET", b, !0),
            j.responseType = "arraybuffer",
            j.onload = function() {
                var b = (j.status + "")[0];
                return "0" !== b && "2" !== b && "3" !== b ? void a._emit("loaderror", null , "Failed loading audio file with status: " + j.status + ".") : void h(j.response, a)
            }
            ,
            j.onerror = function() {
                a._webAudio && (a._html5 = !0,
                a._webAudio = !1,
                a._sounds = [],
                delete e[b],
                a.load())
            }
            ,
            g(j)
        }
    }
      , g = function(a) {
        try {
            a.send()
        } catch (b) {
            a.onerror()
        }
    }
      , h = function(a, c) {
        b.ctx.decodeAudioData(a, function(a) {
            a && c._sounds.length > 0 && (e[c._src] = a,
            i(c, a))
        }, function() {
            c._emit("loaderror", null , "Decoding audio data failed.")
        })
    }
      , i = function(a, b) {
        b && !a._duration && (a._duration = b.duration),
        0 === Object.keys(a._sprite).length && (a._sprite = {
            __default: [0, 1e3 * a._duration]
        }),
        "loaded" !== a._state && (a._state = "loaded",
        a._emit("load"),
        a._loadQueue()),
        a._autoplay && a.play()
    }
      , j = function() {
        b.noAudio = !1;
        try {
            "undefined" != typeof AudioContext ? b.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? b.ctx = new webkitAudioContext : b.usingWebAudio = !1
        } catch (a) {
            b.usingWebAudio = !1
        }
        if (!b.usingWebAudio)
            if ("undefined" != typeof Audio)
                try {
                    var c = new Audio;
                    "undefined" == typeof c.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (a) {
                    b.noAudio = !0
                }
            else
                b.noAudio = !0;
        try {
            var c = new Audio;
            c.muted && (b.noAudio = !0)
        } catch (a) {}
        var d = /iP(hone|od|ad)/.test(b._navigator && b._navigator.platform)
          , e = b._navigator && b._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
          , f = e ? parseInt(e[1], 10) : null ;
        if (d && f && 9 > f) {
            var g = /safari/.test(b._navigator && b._navigator.userAgent.toLowerCase());
            (b._navigator && b._navigator.standalone && !g || b._navigator && !b._navigator.standalone && !g) && (b.usingWebAudio = !1)
        }
        b.usingWebAudio && (b.masterGain = "undefined" == typeof b.ctx.createGain ? b.ctx.createGainNode() : b.ctx.createGain(),
        b.masterGain.gain.value = 1,
        b.masterGain.connect(b.ctx.destination)),
        b._setup()
    }
    ;
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: b,
            Howl: c
        }
    }),
    "undefined" != typeof exports && (exports.Howler = b,
    exports.Howl = c),
    "undefined" != typeof window ? (window.HowlerGlobal = a,
    window.Howler = b,
    window.Howl = c,
    window.Sound = d) : "undefined" != typeof global && (global.HowlerGlobal = a,
    global.Howler = b,
    global.Howl = c,
    global.Sound = d)
}(),
function() {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0],
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
    HowlerGlobal.prototype.stereo = function(a) {
        var b = this;
        if (!b.ctx || !b.ctx.listener)
            return b;
        for (var c = b._howls.length - 1; c >= 0; c--)
            b._howls[c].stereo(a);
        return b
    }
    ,
    HowlerGlobal.prototype.pos = function(a, b, c) {
        var d = this;
        return d.ctx && d.ctx.listener ? (b = "number" != typeof b ? d._pos[1] : b,
        c = "number" != typeof c ? d._pos[2] : c,
        "number" != typeof a ? d._pos : (d._pos = [a, b, c],
        d.ctx.listener.setPosition(d._pos[0], d._pos[1], d._pos[2]),
        d)) : d
    }
    ,
    HowlerGlobal.prototype.orientation = function(a, b, c, d, e, f) {
        var g = this;
        if (!g.ctx || !g.ctx.listener)
            return g;
        var h = g._orientation;
        return b = "number" != typeof b ? h[1] : b,
        c = "number" != typeof c ? h[2] : c,
        d = "number" != typeof d ? h[3] : d,
        e = "number" != typeof e ? h[4] : e,
        f = "number" != typeof f ? h[5] : f,
        "number" != typeof a ? h : (g._orientation = [a, b, c, d, e, f],
        g.ctx.listener.setOrientation(a, b, c, d, e, f),
        g)
    }
    ,
    Howl.prototype.init = function(a) {
        return function(b) {
            var c = this;
            return c._orientation = b.orientation || [1, 0, 0],
            c._stereo = b.stereo || null ,
            c._pos = b.pos || null ,
            c._pannerAttr = {
                coneInnerAngle: "undefined" != typeof b.coneInnerAngle ? b.coneInnerAngle : 360,
                coneOuterAngle: "undefined" != typeof b.coneOuterAngle ? b.coneOuterAngle : 360,
                coneOuterGain: "undefined" != typeof b.coneOuterGain ? b.coneOuterGain : 0,
                distanceModel: "undefined" != typeof b.distanceModel ? b.distanceModel : "inverse",
                maxDistance: "undefined" != typeof b.maxDistance ? b.maxDistance : 1e4,
                panningModel: "undefined" != typeof b.panningModel ? b.panningModel : "HRTF",
                refDistance: "undefined" != typeof b.refDistance ? b.refDistance : 1,
                rolloffFactor: "undefined" != typeof b.rolloffFactor ? b.rolloffFactor : 1
            },
            c._onstereo = b.onstereo ? [{
                fn: b.onstereo
            }] : [],
            c._onpos = b.onpos ? [{
                fn: b.onpos
            }] : [],
            c._onorientation = b.onorientation ? [{
                fn: b.onorientation
            }] : [],
            a.call(this, b)
        }
    }(Howl.prototype.init),
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio)
            return d;
        if ("loaded" !== d._state)
            return d._queue.push({
                event: "stereo",
                action: function() {
                    d.stereo(b, c)
                }
            }),
            d;
        var e = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" == typeof c) {
            if ("number" != typeof b)
                return d._stereo;
            d._stereo = b,
            d._pos = [b, 0, 0]
        }
        for (var f = d._getSoundIds(c), g = 0; g < f.length; g++) {
            var h = d._soundById(f[g]);
            if (h) {
                if ("number" != typeof b)
                    return h._stereo;
                h._stereo = b,
                h._pos = [b, 0, 0],
                h._node && (h._pannerAttr.panningModel = "equalpower",
                h._panner && h._panner.pan || a(h, e),
                "spatial" === e ? h._panner.setPosition(b, 0, 0) : h._panner.pan.value = b),
                d._emit("stereo", h._id)
            }
        }
        return d
    }
    ,
    Howl.prototype.pos = function(b, c, d, e) {
        var f = this;
        if (!f._webAudio)
            return f;
        if ("loaded" !== f._state)
            return f._queue.push({
                event: "pos",
                action: function() {
                    f.pos(b, c, d, e)
                }
            }),
            f;
        if (c = "number" != typeof c ? 0 : c,
        d = "number" != typeof d ? -.5 : d,
        "undefined" == typeof e) {
            if ("number" != typeof b)
                return f._pos;
            f._pos = [b, c, d]
        }
        for (var g = f._getSoundIds(e), h = 0; h < g.length; h++) {
            var i = f._soundById(g[h]);
            if (i) {
                if ("number" != typeof b)
                    return i._pos;
                i._pos = [b, c, d],
                i._node && ((!i._panner || i._panner.pan) && a(i, "spatial"),
                i._panner.setPosition(b, c, d)),
                f._emit("pos", i._id)
            }
        }
        return f
    }
    ,
    Howl.prototype.orientation = function(b, c, d, e) {
        var f = this;
        if (!f._webAudio)
            return f;
        if ("loaded" !== f._state)
            return f._queue.push({
                event: "orientation",
                action: function() {
                    f.orientation(b, c, d, e)
                }
            }),
            f;
        if (c = "number" != typeof c ? f._orientation[1] : c,
        d = "number" != typeof d ? f._orientation[2] : d,
        "undefined" == typeof e) {
            if ("number" != typeof b)
                return f._orientation;
            f._orientation = [b, c, d]
        }
        for (var g = f._getSoundIds(e), h = 0; h < g.length; h++) {
            var i = f._soundById(g[h]);
            if (i) {
                if ("number" != typeof b)
                    return i._orientation;
                i._orientation = [b, c, d],
                i._node && (i._panner || (i._pos || (i._pos = f._pos || [0, 0, -.5]),
                a(i, "spatial")),
                i._panner.setOrientation(b, c, d)),
                f._emit("orientation", i._id)
            }
        }
        return f
    }
    ,
    Howl.prototype.pannerAttr = function() {
        var b, c, d, e = this, f = arguments;
        if (!e._webAudio)
            return e;
        if (0 === f.length)
            return e._pannerAttr;
        if (1 === f.length) {
            if ("object" != typeof f[0])
                return d = e._soundById(parseInt(f[0], 10)),
                d ? d._pannerAttr : e._pannerAttr;
            b = f[0],
            "undefined" == typeof c && (e._pannerAttr = {
                coneInnerAngle: "undefined" != typeof b.coneInnerAngle ? b.coneInnerAngle : e._coneInnerAngle,
                coneOuterAngle: "undefined" != typeof b.coneOuterAngle ? b.coneOuterAngle : e._coneOuterAngle,
                coneOuterGain: "undefined" != typeof b.coneOuterGain ? b.coneOuterGain : e._coneOuterGain,
                distanceModel: "undefined" != typeof b.distanceModel ? b.distanceModel : e._distanceModel,
                maxDistance: "undefined" != typeof b.maxDistance ? b.maxDistance : e._maxDistance,
                panningModel: "undefined" != typeof b.panningModel ? b.panningModel : e._panningModel,
                refDistance: "undefined" != typeof b.refDistance ? b.refDistance : e._refDistance,
                rolloffFactor: "undefined" != typeof b.rolloffFactor ? b.rolloffFactor : e._rolloffFactor
            })
        } else
            2 === f.length && (b = f[0],
            c = parseInt(f[1], 10));
        for (var g = e._getSoundIds(c), h = 0; h < g.length; h++)
            if (d = e._soundById(g[h])) {
                var i = d._pannerAttr;
                i = {
                    coneInnerAngle: "undefined" != typeof b.coneInnerAngle ? b.coneInnerAngle : i.coneInnerAngle,
                    coneOuterAngle: "undefined" != typeof b.coneOuterAngle ? b.coneOuterAngle : i.coneOuterAngle,
                    coneOuterGain: "undefined" != typeof b.coneOuterGain ? b.coneOuterGain : i.coneOuterGain,
                    distanceModel: "undefined" != typeof b.distanceModel ? b.distanceModel : i.distanceModel,
                    maxDistance: "undefined" != typeof b.maxDistance ? b.maxDistance : i.maxDistance,
                    panningModel: "undefined" != typeof b.panningModel ? b.panningModel : i.panningModel,
                    refDistance: "undefined" != typeof b.refDistance ? b.refDistance : i.refDistance,
                    rolloffFactor: "undefined" != typeof b.rolloffFactor ? b.rolloffFactor : i.rolloffFactor
                };
                var j = d._panner;
                j ? (j.coneInnerAngle = i.coneInnerAngle,
                j.coneOuterAngle = i.coneOuterAngle,
                j.coneOuterGain = i.coneOuterGain,
                j.distanceModel = i.distanceModel,
                j.maxDistance = i.maxDistance,
                j.panningModel = i.panningModel,
                j.refDistance = i.refDistance,
                j.rolloffFactor = i.rolloffFactor) : (d._pos || (d._pos = e._pos || [0, 0, -.5]),
                a(d, "spatial"))
            }
        return e
    }
    ,
    Sound.prototype.init = function(a) {
        return function() {
            var b = this
              , c = b._parent;
            b._orientation = c._orientation,
            b._stereo = c._stereo,
            b._pos = c._pos,
            b._pannerAttr = c._pannerAttr,
            a.call(this),
            b._stereo ? c.stereo(b._stereo) : b._pos && c.pos(b._pos[0], b._pos[1], b._pos[2], b._id)
        }
    }(Sound.prototype.init),
    Sound.prototype.reset = function(a) {
        return function() {
            var b = this
              , c = b._parent;
            return b._orientation = c._orientation,
            b._pos = c._pos,
            b._pannerAttr = c._pannerAttr,
            a.call(this)
        }
    }(Sound.prototype.reset);
    var a = function(a, b) {
        b = b || "spatial",
        "spatial" === b ? (a._panner = Howler.ctx.createPanner(),
        a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle,
        a._panner.coneOuterAngle = a._pannerAttr.coneOuterAngle,
        a._panner.coneOuterGain = a._pannerAttr.coneOuterGain,
        a._panner.distanceModel = a._pannerAttr.distanceModel,
        a._panner.maxDistance = a._pannerAttr.maxDistance,
        a._panner.panningModel = a._pannerAttr.panningModel,
        a._panner.refDistance = a._pannerAttr.refDistance,
        a._panner.rolloffFactor = a._pannerAttr.rolloffFactor,
        a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]),
        a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2])) : (a._panner = Howler.ctx.createStereoPanner(),
        a._panner.pan.value = a._stereo),
        a._panner.connect(a._node),
        a._paused || a._parent.pause(a._id, !0).play(a._id)
    }
}(),
function(a) {
    function b() {
        k.setAttribute("content", n),
        o = !0
    }
    function c() {
        k.setAttribute("content", m),
        o = !1
    }
    function d(d) {
        j = d.accelerationIncludingGravity,
        g = Math.abs(j.x),
        h = Math.abs(j.y),
        i = Math.abs(j.z),
        a.orientation && 180 !== a.orientation || !(g > 7 || (i > 6 && 8 > h || 8 > i && h > 6) && g > 5) ? o || b() : o && c()
    }
    var e = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(e) && e.indexOf("AppleWebKit") > -1) {
        var f = a.document;
        if (f.querySelector) {
            var g, h, i, j, k = f.querySelector("meta[name=viewport]"), l = k && k.getAttribute("content"), m = l + ",maximum-scale=1", n = l + ",maximum-scale=10", o = !0;
            k && (a.addEventListener("orientationchange", b, !1),
            a.addEventListener("devicemotion", d, !1))
        }
    }
}(this),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode,
        f = e.name,
        b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0],
        !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }
    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {},
    a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position")
              , d = "absolute" === c
              , e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/
              , f = this.parents().filter(function() {
                var b = a(this);
                return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }),
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        }
        ,
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex")
              , e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }),
    a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0,
                d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }),
            c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"]
          , f = c.toLowerCase()
          , g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }
        ,
        a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }),
    a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
    ),
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)),
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(),
                        d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b)
                return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                    if (c = e.css("position"),
                    ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10),
                    !isNaN(d) && 0 !== d))
                        return d;
                    e = e.parent()
                }
            return 0
        }
    }),
    a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d)
                f.plugins[e] = f.plugins[e] || [],
                f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++)
                    a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    };
    var d = 0
      , e = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++)
                try {
                    d = a._data(e, "events"),
                    d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {}
            b(c)
        }
    }(a.cleanData),
    a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        return b = b.split(".")[1],
        e = j + "-" + b,
        d || (d = c,
        c = a.Widget),
        a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }
        ,
        a[j] = a[j] || {},
        f = a[j][b],
        g = a[j][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a,b)
        }
        ,
        a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }),
        h = new c,
        h.options = a.widget.extend({}, h.options),
        a.each(d, function(b, d) {
            return a.isFunction(d) ? void (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments)
                }
                  , e = function(a) {
                    return c.prototype[b].apply(this, a)
                }
                ;
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a,
                    this._superApply = e,
                    b = d.apply(this, arguments),
                    this._super = c,
                    this._superApply = f,
                    b
                }
            }()) : void (i[b] = d)
        }),
        g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }),
        f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }),
        delete f._childConstructors) : c._childConstructors.push(g),
        a.widget.bridge(b, g),
        g
    }
    ,
    a.widget.extend = function(b) {
        for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (c in f[g])
                d = f[g][c],
                f[g].hasOwnProperty(c) && void 0 !== d && (a.isPlainObject(d) ? b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : b[c] = d);
        return b
    }
    ,
    a.widget.bridge = function(b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f
              , h = e.call(arguments, 1)
              , i = this;
            return g ? this.each(function() {
                var c, e = a.data(this, d);
                return "instance" === f ? (i = e,
                !1) : e ? a.isFunction(e[f]) && "_" !== f.charAt(0) ? (c = e[f].apply(e, h),
                c !== e && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c,
                !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null , [f].concat(h))),
            this.each(function() {
                var b = a.data(this, d);
                b ? (b.option(f || {}),
                b._init && b._init()) : a.data(this, d, new c(f,this))
            })),
            i
        }
    }
    ,
    a.Widget = function() {}
    ,
    a.Widget._childConstructors = [],
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, c) {
            c = a(c || this.defaultElement || this)[0],
            this.element = a(c),
            this.uuid = d++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = a(),
            this.hoverable = a(),
            this.focusable = a(),
            c !== this && (a.data(c, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy()
                }
            }),
            this.document = a(c.style ? c.ownerDocument : c.document || c),
            this.window = a(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b),
            this._create(),
            this._trigger("create", null , this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length)
                return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {},
                d = b.split("."),
                b = d.shift(),
                d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]),
                    f = 0; f < d.length - 1; f++)
                        e[d[f]] = e[d[f]] || {},
                        e = e[d[f]];
                    if (b = d.pop(),
                    1 === arguments.length)
                        return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g),
            this
        },
        _setOptions: function(a) {
            var b;
            for (b in a)
                this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b,
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b),
            b && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c,
            c = b,
            b = !1),
            d ? (c = e = a(c),
            this.bindings = this.bindings.add(c)) : (d = c,
            c = this.element,
            e = this.widget()),
            a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/)
                  , j = i[1] + f.eventNamespace
                  , k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            b.unbind(c).undelegate(c),
            this.bindings = a(this.bindings.not(b).get()),
            this.focusable = a(this.focusable.not(b).get()),
            this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b),
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b),
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {},
            c = a.Event(c),
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(),
            c.target = this.element[0],
            f = c.originalEvent)
                for (e in f)
                    e in c || (c[e] = f[e]);
            return this.element.trigger(c, d),
            !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    },
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {},
            "number" == typeof e && (e = {
                duration: e
            }),
            g = !a.isEmptyObject(e),
            e.complete = f,
            e.delay && d.delay(e.delay),
            g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](),
                f && f.call(d[0]),
                c()
            })
        }
    });
    var f = (a.widget,
    !1);
    a(document).mouseup(function() {
        f = !1
    });
    a.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"),
                c.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(b) {
            if (!f) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(b),
                this._mouseDownEvent = b;
                var c = this
                  , d = 1 === b.which
                  , e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1,
                !this._mouseStarted) ? (b.preventDefault(),
                !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                }
                ,
                this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a)
                }
                ,
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                b.preventDefault(),
                f = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button)
                    return this._mouseUp(b);
                if (!b.which)
                    return this._mouseUp(b)
            }
            return (b.which || b.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(b),
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1,
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)),
            !this._mouseStarted)
        },
        _mouseUp: function(b) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(b)),
            f = !1,
            !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    !function() {
        function b(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }
        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }
        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            }
        }
        a.ui = a.ui || {};
        var e, f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (void 0 !== e)
                    return e;
                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = d.children()[0];
                return a("body").append(d),
                b = f.offsetWidth,
                d.css("overflow", "scroll"),
                c = f.offsetWidth,
                b === c && (c = d[0].clientWidth),
                d.remove(),
                e = b - c
            },
            getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x")
                  , d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y")
                  , e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth
                  , f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {
                    width: f ? a.position.scrollbarWidth() : 0,
                    height: e ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(b) {
                var c = a(b || window)
                  , d = a.isWindow(c[0])
                  , e = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: c.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d || e ? c.width() : c.outerWidth(),
                    height: d || e ? c.height() : c.outerHeight()
                }
            }
        },
        a.fn.position = function(e) {
            if (!e || !e.of)
                return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of), v = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(v), x = (e.collision || "flip").split(" "), y = {};
            return t = d(u),
            u[0].preventDefault && (e.at = "left top"),
            p = t.width,
            q = t.height,
            r = t.offset,
            s = a.extend({}, r),
            a.each(["my", "at"], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]),
                c[0] = j.test(c[0]) ? c[0] : "center",
                c[1] = k.test(c[1]) ? c[1] : "center",
                a = l.exec(c[0]),
                b = l.exec(c[1]),
                y[this] = [a ? a[0] : 0, b ? b[0] : 0],
                e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }),
            1 === x.length && (x[1] = x[0]),
            "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2),
            "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2),
            n = b(y.at, p, q),
            s.left += n[0],
            s.top += n[1],
            this.each(function() {
                var d, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = c(this, "marginLeft"), t = c(this, "marginTop"), z = l + o + c(this, "marginRight") + w.width, A = m + t + c(this, "marginBottom") + w.height, B = a.extend({}, s), C = b(y.my, k.outerWidth(), k.outerHeight());
                "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2),
                "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2),
                B.left += C[0],
                B.top += C[1],
                f || (B.left = i(B.left),
                B.top = i(B.top)),
                d = {
                    marginLeft: o,
                    marginTop: t
                },
                a.each(["left", "top"], function(b, c) {
                    a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
                        targetWidth: p,
                        targetHeight: q,
                        elemWidth: l,
                        elemHeight: m,
                        collisionPosition: d,
                        collisionWidth: z,
                        collisionHeight: A,
                        offset: [n[0] + C[0], n[1] + C[1]],
                        my: e.my,
                        at: e.at,
                        within: v,
                        elem: k
                    })
                }),
                e.using && (j = function(a) {
                    var b = r.left - B.left
                      , c = b + p - l
                      , d = r.top - B.top
                      , f = d + q - m
                      , i = {
                        target: {
                            element: u,
                            left: r.left,
                            top: r.top,
                            width: p,
                            height: q
                        },
                        element: {
                            element: k,
                            left: B.left,
                            top: B.top,
                            width: l,
                            height: m
                        },
                        horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                        vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
                    };
                    l > p && h(b + c) < p && (i.horizontal = "center"),
                    m > q && h(d + f) < q && (i.vertical = "middle"),
                    g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical",
                    e.using.call(this, a, i)
                }
                ),
                k.offset(a.extend(B, {
                    using: j
                }))
            })
        }
        ,
        a.ui.position = {
            fit: {
                left: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                    b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e,
                    a.left += i - c) : j > 0 && 0 >= i ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                },
                top: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                    b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e,
                    a.top += i - c) : j > 0 && 0 >= i ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f,
                    (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i,
                    (d > 0 || h(d) < l) && (a.left += m + n + o))
                },
                top: function(a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f,
                    (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i,
                    (c > 0 || h(c) < l) && (a.top += n + o + p))
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments),
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments),
                    a.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0], i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"),
            d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            },
            h && a.extend(d, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (g in d)
                b.style[g] = d[g];
            b.appendChild(i),
            c = h || document.documentElement,
            c.insertBefore(b, c.firstChild),
            i.style.cssText = "position: absolute; left: 10.7432222px;",
            e = a(i).offset().left,
            f = e > 10 && 11 > e,
            b.innerHTML = "",
            c.removeChild(b)
        }()
    }();
    a.ui.position;
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null ,
            start: null ,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b),
            "handle" === a && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._removeHandleClassName(),
            void this._mouseDestroy())
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this._blurActiveElement(b),
            this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b),
            this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix),
            !0) : !1)
        },
        _blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(b) {
            var c = this.document[0];
            if (this.handleElement.is(b.target))
                try {
                    c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
                } catch (d) {}
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            a.ui.ddmanager && (a.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position")
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(b),
            this.originalPosition = this.position = this._generatePosition(b, !1),
            this.originalPageX = b.pageX,
            this.originalPageY = b.pageY,
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
            this._setContainment(),
            this._trigger("start", b) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b),
            this._normalizeRightBottom(),
            this._mouseDrag(b, !0),
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b),
            !0)
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(b, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = d.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b),
            !1
        },
        _mouseStop: function(b) {
            var c = this
              , d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)),
            this.dropped && (d = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(b) {
            return this._unblockFrames(),
            a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
            this.handleElement.is(b.target) && this.element.focus(),
            a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(b) {
            var c = this.options
              , d = a.isFunction(c.helper)
              , e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo),
            d && e[0] === this.element[0] && this._setPositionRelative(),
            e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"),
            e
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")),
            a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }),
            "left"in b && (this.offset.click.left = b.left + this.margins.left),
            "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
            "top"in b && (this.offset.click.top = b.top + this.margins.top),
            "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset()
              , c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(),
            b.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (b = {
                top: 0,
                left: 0
            }),
            {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var a = this.element.position()
              , b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b, c, d, e = this.options, f = this.document[0];
            return this.relativeContainer = null ,
            e.containment ? "window" === e.containment ? void (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode),
            c = a(e.containment),
            d = c[0],
            void (d && (b = /(scroll|auto)/.test(c.css("overflow")),
            this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = c))) : void (this.containment = null )
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1
              , d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(a, b) {
            var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), i = a.pageX, j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(),
            c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment,
            a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left),
            a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top),
            a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left),
            a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)),
            g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY,
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e,
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX,
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f),
            "y" === g.axis && (i = this.originalPageX),
            "x" === g.axis && (j = this.originalPageY)),
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null ,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()),
            this.helper.css("right", "auto")),
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()),
            this.helper.css("bottom", "auto"))
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(),
            a.ui.plugin.call(this, b, [c, d, this], !0),
            /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"),
            d.offset = this.positionAbs),
            a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [],
            a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c),
                c.refreshPositions(),
                c._trigger("activate", b, e))
            })
        },
        stop: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1,
            a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0,
                d.cancelHelperRemoval = !0,
                a.cancelHelperRemoval = !1,
                a._storedCSS = {
                    position: a.placeholder.css("position"),
                    top: a.placeholder.css("top"),
                    left: a.placeholder.css("left")
                },
                a._mouseStop(b),
                a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0,
                a._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1
                  , f = this;
                f.positionAbs = d.positionAbs,
                f.helperProportions = d.helperProportions,
                f.offset.click = d.offset.click,
                f._intersectsWith(f.containerCache) && (e = !0,
                a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs,
                    this.helperProportions = d.helperProportions,
                    this.offset.click = d.offset.click,
                    this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1),
                    e
                })),
                e ? (f.isOver || (f.isOver = 1,
                d._parent = c.helper.parent(),
                f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0),
                f.options._helper = f.options.helper,
                f.options.helper = function() {
                    return c.helper[0]
                }
                ,
                b.target = f.currentItem[0],
                f._mouseCapture(b, !0),
                f._mouseStart(b, !0, !0),
                f.offset.click.top = d.offset.click.top,
                f.offset.click.left = d.offset.click.left,
                f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left,
                f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top,
                d._trigger("toSortable", b),
                d.dropped = f.element,
                a.each(d.sortables, function() {
                    this.refreshPositions()
                }),
                d.currentItem = d.element,
                f.fromOutside = d),
                f.currentItem && (f._mouseDrag(b),
                c.position = f.position)) : f.isOver && (f.isOver = 0,
                f.cancelHelperRemoval = !0,
                f.options._revert = f.options.revert,
                f.options.revert = !1,
                f._trigger("out", b, f._uiHash(f)),
                f._mouseStop(b, !0),
                f.options.revert = f.options._revert,
                f.options.helper = f.options._helper,
                f.placeholder && f.placeholder.remove(),
                c.helper.appendTo(d._parent),
                d._refreshOffsets(b),
                c.position = d._generatePosition(b, !0),
                d._trigger("fromSortable", b),
                d.dropped = !1,
                a.each(d.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c, d) {
            var e = a("body")
              , f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")),
            e.css("cursor", f.cursor)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor)
        }
    }),
    a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c, d) {
            var e = a(c.helper)
              , f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")),
            e.css("opacity", f.opacity)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity)
        }
    }),
    a.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)),
            c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
        },
        drag: function(b, c, d) {
            var e = d.options
              , f = !1
              , g = d.scrollParentNotHidden[0]
              , h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)),
            e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))),
            e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))),
            f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
        }
    }),
    a.ui.plugin.add("draggable", "snap", {
        start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [],
            a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this)
                  , c = b.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                })
            })
        },
        drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options, p = o.snapTolerance, q = c.offset.left, r = q + d.helperProportions.width, s = c.offset.top, t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--)
                i = d.snapElements[m].left - d.margins.left,
                j = i + d.snapElements[m].width,
                k = d.snapElements[m].top - d.margins.top,
                l = k + d.snapElements[m].height,
                i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })),
                d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p,
                f = Math.abs(l - s) <= p,
                g = Math.abs(i - r) <= p,
                h = Math.abs(j - q) <= p,
                e && (c.position.top = d._convertPositionTo("relative", {
                    top: k - d.helperProportions.height,
                    left: 0
                }).top),
                f && (c.position.top = d._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top),
                g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i - d.helperProportions.width
                }).left),
                h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j
                }).left)),
                n = e || f || g || h,
                "outer" !== o.snapMode && (e = Math.abs(k - s) <= p,
                f = Math.abs(l - t) <= p,
                g = Math.abs(i - q) <= p,
                h = Math.abs(j - r) <= p,
                e && (c.position.top = d._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top),
                f && (c.position.top = d._convertPositionTo("relative", {
                    top: l - d.helperProportions.height,
                    left: 0
                }).top),
                g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left),
                h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j - d.helperProportions.width
                }).left)),
                !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })),
                d.snapElements[m].snapping = e || f || g || h || n)
        }
    }),
    a.ui.plugin.add("draggable", "stack", {
        start: function(b, c, d) {
            var e, f = d.options, g = a.makeArray(a(f.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0,
            a(g).each(function(b) {
                a(this).css("zIndex", e + b)
            }),
            this.css("zIndex", e + g.length))
        }
    }),
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c, d) {
            var e = a(c.helper)
              , f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")),
            e.css("zIndex", f.zIndex)
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex)
        }
    });
    a.ui.draggable;
    a.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null ,
            deactivate: null ,
            drop: null ,
            out: null ,
            over: null
        },
        _create: function() {
            var b, c = this.options, d = c.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = a.isFunction(d) ? d : function(a) {
                return a.is(d)
            }
            ,
            this.proportions = function() {
                return arguments.length ? void (b = arguments[0]) : b ? b : b = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }
            ,
            this._addToManager(c.scope),
            c.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(b) {
            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [],
            a.ui.ddmanager.droppables[b].push(this)
        },
        _splice: function(a) {
            for (var b = 0; b < a.length; b++)
                a[b] === this && a.splice(b, 1)
        },
        _destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(b),
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(b, c) {
            if ("accept" === b)
                this.accept = a.isFunction(c) ? c : function(a) {
                    return a.is(c)
                }
                ;
            else if ("scope" === b) {
                var d = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(d),
                this._addToManager(c)
            }
            this._super(b, c)
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", b, this.ui(c)))
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", b, this.ui(c)))
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current
              , e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = a(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(c, {
                    offset: c.element.offset()
                }), c.options.tolerance, b) ? (e = !0,
                !1) : void 0
            }),
            e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", b, this.ui(d)),
            this.element) : !1) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }),
    a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a
        }
        return function(b, c, d, e) {
            if (!c.offset)
                return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left
              , g = (b.positionAbs || b.position.absolute).top + b.margins.top
              , h = f + b.helperProportions.width
              , i = g + b.helperProportions.height
              , j = c.offset.left
              , k = c.offset.top
              , l = j + c.proportions().width
              , m = k + c.proportions().height;
            switch (d) {
            case "fit":
                return f >= j && l >= h && g >= k && m >= i;
            case "intersect":
                return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
            case "pointer":
                return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
            case "touch":
                return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
            default:
                return !1
            }
        }
    }(),
    a.ui.ddmanager = {
        current: null ,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null , h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++)
                if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                    for (e = 0; e < h.length; e++)
                        if (h[e] === f[d].element[0]) {
                            f[d].proportions().height = 0;
                            continue a
                        }
                    f[d].visible = "none" !== f[d].element.css("display"),
                    f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c),
                    f[d].offset = f[d].element.offset(),
                    f[d].proportions({
                        width: f[d].element[0].offsetWidth,
                        height: f[d].element[0].offsetHeight
                    }))
                }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, c)))
            }),
            d
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c),
            a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance, c), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null ;
                    h && (this.options.greedy && (e = this.options.scope,
                    f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === e
                    }),
                    f.length && (d = a(f[0]).droppable("instance"),
                    d.greedyChild = "isover" === h)),
                    d && "isover" === h && (d.isover = !1,
                    d.isout = !0,
                    d._out.call(d, c)),
                    this[h] = !0,
                    this["isout" === h ? "isover" : "isout"] = !1,
                    this["isover" === h ? "_over" : "_out"].call(this, c),
                    d && "isout" === h && (d.isout = !1,
                    d.isover = !0,
                    d._over.call(d, c)))
                }
            })
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"),
            b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    };
    a.ui.droppable
}),
function(a) {
    a.fn.flexVerticalCenter = function(b) {
        var c = a.extend({
            cssAttribute: "margin-top",
            verticalOffset: 0,
            parentSelector: null ,
            debounceTimeout: 25
        }, b || {});
        return this.each(function() {
            var b, d = a(this), e = function() {
                var a = c.parentSelector && d.parents(c.parentSelector).length ? d.parents(c.parentSelector).first().height() : d.parent().height();
                d.css(c.cssAttribute, (a - d.height()) / 2 + parseInt(c.verticalOffset))
            }
            ;
            a(window).resize(function() {
                clearTimeout(b),
                b = setTimeout(e, c.debounceTimeout)
            }),
            a(window).load(function() {
                e()
            }),
            d.find("img").load(e)
        })
    }
}(jQuery),
function(a, b, c, d) {
    c.swipebox = function(e, f) {
        var g, h, i = {
            useCSS: !0,
            useSVG: !0,
            initialIndexOnArray: 0,
            removeBarsOnMobile: !0,
            hideCloseButtonOnMobile: !1,
            hideBarsDelay: 3e3,
            videoMaxWidth: 1140,
            vimeoColor: "cccccc",
            beforeOpen: null ,
            afterOpen: null ,
            afterClose: null ,
            nextSlide: null ,
            prevSlide: null ,
            loopAtEnd: !1,
            autoplayVideos: !1,
            queryStringData: {},
            toggleClassOnLoad: ""
        }, j = this, k = [], l = e.selector, m = c(l), n = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i), o = null !== n || b.createTouch !== d || "ontouchstart"in a || "onmsgesturechange"in a || navigator.msMaxTouchPoints, p = !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, q = a.innerWidth ? a.innerWidth : c(a).width(), r = a.innerHeight ? a.innerHeight : c(a).height(), s = 0, t = '<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<div id="swipebox-bottom-bar">							<div id="swipebox-arrows">								<a id="swipebox-prev"></a>								<a id="swipebox-next"></a>							</div>						</div>						<a id="swipebox-close"></a>					</div>			</div>';
        j.settings = {},
        c.swipebox.close = function() {
            g.closeSlide()
        }
        ,
        c.swipebox.extend = function() {
            return g
        }
        ,
        j.init = function() {
            j.settings = c.extend({}, i, f),
            c.isArray(e) ? (k = e,
            g.target = c(a),
            g.init(j.settings.initialIndexOnArray)) : c(b).on("click", l, function(a) {
                if ("slide current" === a.target.parentNode.className)
                    return !1;
                c.isArray(e) || (g.destroy(),
                h = c(l),
                g.actions()),
                k = [];
                var b, d, f;
                f || (d = "data-rel",
                f = c(this).attr(d)),
                f || (d = "rel",
                f = c(this).attr(d)),
                h = f && "" !== f && "nofollow" !== f ? m.filter("[" + d + '="' + f + '"]') : c(l),
                h.each(function() {
                    var a = null
                      , b = null ;
                    c(this).attr("title") && (a = c(this).attr("title")),
                    c(this).attr("href") && (b = c(this).attr("href")),
                    k.push({
                        href: b,
                        title: a
                    })
                }),
                b = h.index(c(this)),
                a.preventDefault(),
                a.stopPropagation(),
                g.target = c(a.target),
                g.init(b)
            })
        }
        ,
        g = {
            init: function(a) {
                j.settings.beforeOpen && j.settings.beforeOpen(),
                this.target.trigger("swipebox-start"),
                c.swipebox.isOpen = !0,
                this.build(),
                this.openSlide(a),
                this.openMedia(a),
                this.preloadMedia(a + 1),
                this.preloadMedia(a - 1),
                j.settings.afterOpen && j.settings.afterOpen()
            },
            build: function() {
                var a, b = this;
                c("body").append(t),
                p && j.settings.useSVG === !0 && (a = c("#swipebox-close").css("background-image"),
                a = a.replace("png", "svg"),
                c("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                    "background-image": a
                })),
                n && j.settings.removeBarsOnMobile && c("#swipebox-bottom-bar, #swipebox-top-bar").remove(),
                c.each(k, function() {
                    c("#swipebox-slider").append('<div class="slide"></div>')
                }),
                b.setDim(),
                b.actions(),
                o && b.gesture(),
                b.keyboard(),
                b.animBars(),
                b.resize()
            },
            setDim: function() {
                var b, d, e = {};
                "onorientationchange"in a ? a.addEventListener("orientationchange", function() {
                    0 === a.orientation ? (b = q,
                    d = r) : (90 === a.orientation || -90 === a.orientation) && (b = r,
                    d = q)
                }, !1) : (b = a.innerWidth ? a.innerWidth : c(a).width(),
                d = a.innerHeight ? a.innerHeight : c(a).height()),
                e = {
                    width: b,
                    height: d
                },
                c("#swipebox-overlay").css(e)
            },
            resize: function() {
                var b = this;
                c(a).resize(function() {
                    b.setDim()
                }).resize()
            },
            supportTransition: function() {
                var a, c = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (a = 0; a < c.length; a++)
                    if (b.createElement("div").style[c[a]] !== d)
                        return c[a];
                return !1
            },
            doCssTrans: function() {
                return j.settings.useCSS && this.supportTransition() ? !0 : void 0
            },
            gesture: function() {
                var a, b, d, e, f, g, h = this, i = !1, j = !1, l = 10, m = 50, n = {}, o = {}, p = c("#swipebox-top-bar, #swipebox-bottom-bar"), r = c("#swipebox-slider");
                p.addClass("visible-bars"),
                h.setTimeout(),
                c("body").bind("touchstart", function(h) {
                    return c(this).addClass("touching"),
                    a = c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current")),
                    o = h.originalEvent.targetTouches[0],
                    n.pageX = h.originalEvent.targetTouches[0].pageX,
                    n.pageY = h.originalEvent.targetTouches[0].pageY,
                    c("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + s + "%, 0, 0)",
                        transform: "translate3d(" + s + "%, 0, 0)"
                    }),
                    c(".touching").bind("touchmove", function(h) {
                        if (h.preventDefault(),
                        h.stopPropagation(),
                        o = h.originalEvent.targetTouches[0],
                        !j && (f = d,
                        d = o.pageY - n.pageY,
                        Math.abs(d) >= m || i)) {
                            var p = .75 - Math.abs(d) / r.height();
                            r.css({
                                top: d + "px"
                            }),
                            r.css({
                                opacity: p
                            }),
                            i = !0
                        }
                        e = b,
                        b = o.pageX - n.pageX,
                        g = 100 * b / q,
                        !j && !i && Math.abs(b) >= l && (c("#swipebox-slider").css({
                            "-webkit-transition": "",
                            transition: ""
                        }),
                        j = !0),
                        j && (b > 0 ? 0 === a ? c("#swipebox-overlay").addClass("leftSpringTouch") : (c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
                        c("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (s + g) + "%, 0, 0)",
                            transform: "translate3d(" + (s + g) + "%, 0, 0)"
                        })) : 0 > b && (k.length === a + 1 ? c("#swipebox-overlay").addClass("rightSpringTouch") : (c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
                        c("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (s + g) + "%, 0, 0)",
                            transform: "translate3d(" + (s + g) + "%, 0, 0)"
                        }))))
                    }),
                    !1
                }).bind("touchend", function(a) {
                    if (a.preventDefault(),
                    a.stopPropagation(),
                    c("#swipebox-slider").css({
                        "-webkit-transition": "-webkit-transform 0.4s ease",
                        transition: "transform 0.4s ease"
                    }),
                    d = o.pageY - n.pageY,
                    b = o.pageX - n.pageX,
                    g = 100 * b / q,
                    i)
                        if (i = !1,
                        Math.abs(d) >= 2 * m && Math.abs(d) > Math.abs(f)) {
                            var k = d > 0 ? r.height() : -r.height();
                            r.animate({
                                top: k + "px",
                                opacity: 0
                            }, 300, function() {
                                h.closeSlide()
                            })
                        } else
                            r.animate({
                                top: 0,
                                opacity: 1
                            }, 300);
                    else
                        j ? (j = !1,
                        b >= l && b >= e ? h.getPrev() : -l >= b && e >= b && h.getNext()) : p.hasClass("visible-bars") ? (h.clearTimeout(),
                        h.hideBars()) : (h.showBars(),
                        h.setTimeout());
                    c("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + s + "%, 0, 0)",
                        transform: "translate3d(" + s + "%, 0, 0)"
                    }),
                    c("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),
                    c(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function() {
                if (j.settings.hideBarsDelay > 0) {
                    var b = this;
                    b.clearTimeout(),
                    b.timeout = a.setTimeout(function() {
                        b.hideBars()
                    }, j.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                a.clearTimeout(this.timeout),
                this.timeout = null
            },
            showBars: function() {
                var a = c("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? a.addClass("visible-bars") : (c("#swipebox-top-bar").animate({
                    top: 0
                }, 500),
                c("#swipebox-bottom-bar").animate({
                    bottom: 0
                }, 500),
                setTimeout(function() {
                    a.addClass("visible-bars")
                }, 1e3))
            },
            hideBars: function() {
                var a = c("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? a.removeClass("visible-bars") : (c("#swipebox-top-bar").animate({
                    top: "-50px"
                }, 500),
                c("#swipebox-bottom-bar").animate({
                    bottom: "-50px"
                }, 500),
                setTimeout(function() {
                    a.removeClass("visible-bars")
                }, 1e3))
            },
            animBars: function() {
                var a = this
                  , b = c("#swipebox-top-bar, #swipebox-bottom-bar");
                b.addClass("visible-bars"),
                a.setTimeout(),
                c("#swipebox-slider").click(function() {
                    b.hasClass("visible-bars") || (a.showBars(),
                    a.setTimeout())
                }),
                c("#swipebox-bottom-bar").hover(function() {
                    a.showBars(),
                    b.addClass("visible-bars"),
                    a.clearTimeout()
                }, function() {
                    j.settings.hideBarsDelay > 0 && (b.removeClass("visible-bars"),
                    a.setTimeout())
                })
            },
            keyboard: function() {
                var b = this;
                c(a).bind("keyup", function(a) {
                    a.preventDefault(),
                    a.stopPropagation(),
                    37 === a.keyCode ? b.getPrev() : 39 === a.keyCode ? b.getNext() : 27 === a.keyCode && b.closeSlide()
                })
            },
            actions: function() {
                var a = this
                  , b = "touchend click";
                k.length < 2 ? (c("#swipebox-bottom-bar").hide(),
                d === k[1] && c("#swipebox-top-bar").hide()) : (c("#swipebox-prev").bind(b, function(b) {
                    b.preventDefault(),
                    b.stopPropagation(),
                    a.getPrev(),
                    a.setTimeout()
                }),
                c("#swipebox-next").bind(b, function(b) {
                    b.preventDefault(),
                    b.stopPropagation(),
                    a.getNext(),
                    a.setTimeout()
                })),
                c("#swipebox-close").bind(b, function() {
                    a.closeSlide()
                })
            },
            setSlide: function(a, b) {
                b = b || !1;
                var d = c("#swipebox-slider");
                s = 100 * -a,
                this.doCssTrans() ? d.css({
                    "-webkit-transform": "translate3d(" + 100 * -a + "%, 0, 0)",
                    transform: "translate3d(" + 100 * -a + "%, 0, 0)"
                }) : d.animate({
                    left: 100 * -a + "%"
                }),
                c("#swipebox-slider .slide").removeClass("current"),
                c("#swipebox-slider .slide").eq(a).addClass("current"),
                this.setTitle(a),
                b && d.fadeIn(),
                c("#swipebox-prev, #swipebox-next").removeClass("disabled"),
                0 === a ? c("#swipebox-prev").addClass("disabled") : a === k.length - 1 && j.settings.loopAtEnd !== !0 && c("#swipebox-next").addClass("disabled")
            },
            openSlide: function(b) {
                c("html").addClass("swipebox-html"),
                o ? (c("html").addClass("swipebox-touch"),
                j.settings.hideCloseButtonOnMobile && c("html").addClass("swipebox-no-close-button")) : c("html").addClass("swipebox-no-touch"),
                c(a).trigger("resize"),
                this.setSlide(b, !0)
            },
            preloadMedia: function(a) {
                var b = this
                  , c = null ;
                k[a] !== d && (c = k[a].href),
                b.isVideo(c) ? b.openMedia(a) : setTimeout(function() {
                    b.openMedia(a)
                }, 1e3)
            },
            openMedia: function(a) {
                var b, e, f = this;
                return k[a] !== d && (b = k[a].href),
                0 > a || a >= k.length ? !1 : (e = c("#swipebox-slider .slide").eq(a),
                void (f.isVideo(b) ? e.html(f.getVideo(b)) : (e.addClass("slide-loading"),
                f.loadMedia(b, function() {
                    e.removeClass("slide-loading"),
                    e.html(this)
                }))))
            },
            setTitle: function(a) {
                var b = null ;
                c("#swipebox-title").empty(),
                k[a] !== d && (b = k[a].title),
                b ? (c("#swipebox-top-bar").show(),
                c("#swipebox-title").append(b)) : c("#swipebox-top-bar").hide()
            },
            isVideo: function(a) {
                if (a) {
                    if (a.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || a.match(/vimeo\.com\/([0-9]*)/) || a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))
                        return !0;
                    if (a.toLowerCase().indexOf("swipeboxvideo=1") >= 0)
                        return !0
                }
            },
            parseUri: function(a, d) {
                var e = b.createElement("a")
                  , f = {};
                return e.href = decodeURIComponent(a),
                e.search && (f = JSON.parse('{"' + e.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')),
                c.isPlainObject(d) && (f = c.extend(f, d, j.settings.queryStringData)),
                c.map(f, function(a, b) {
                    return a && a > "" ? encodeURIComponent(b) + "=" + encodeURIComponent(a) : void 0
                }).join("&")
            },
            getVideo: function(a) {
                var b = ""
                  , c = a.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)
                  , d = a.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/)
                  , e = a.match(/(?:www\.)?vimeo\.com\/([0-9]*)/)
                  , f = "";
                return c || d ? (d && (c = d),
                f = g.parseUri(a, {
                    autoplay: j.settings.autoplayVideos ? "1" : "0",
                    v: ""
                }),
                b = '<iframe width="560" height="315" src="//' + c[1] + "/embed/" + c[2] + "?" + f + '" frameborder="0" allowfullscreen></iframe>') : e ? (f = g.parseUri(a, {
                    autoplay: j.settings.autoplayVideos ? "1" : "0",
                    byline: "0",
                    portrait: "0",
                    color: j.settings.vimeoColor
                }),
                b = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + e[1] + "?" + f + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : b = '<iframe width="560" height="315" src="' + a + '" frameborder="0" allowfullscreen></iframe>',
                '<div class="swipebox-video-container" style="max-width:' + j.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + b + "</div></div>"
            },
            loadMedia: function(a, b) {
                if (0 === a.trim().indexOf("#"))
                    b.call(c("<div>", {
                        "class": "swipebox-inline-container"
                    }).append(c(a).clone().toggleClass(j.settings.toggleClassOnLoad)));
                else if (!this.isVideo(a)) {
                    var d = c("<img>").on("load", function() {
                        b.call(d)
                    });
                    d.attr("src", a)
                }
            },
            getNext: function() {
                var a, b = this, d = c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));
                d + 1 < k.length ? (a = c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src"),
                c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src", a),
                d++,
                b.setSlide(d),
                b.preloadMedia(d + 1),
                j.settings.nextSlide && j.settings.nextSlide()) : j.settings.loopAtEnd === !0 ? (a = c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src"),
                c("#swipebox-slider .slide").eq(d).contents().find("iframe").attr("src", a),
                d = 0,
                b.preloadMedia(d),
                b.setSlide(d),
                b.preloadMedia(d + 1),
                j.settings.nextSlide && j.settings.nextSlide()) : (c("#swipebox-overlay").addClass("rightSpring"),
                setTimeout(function() {
                    c("#swipebox-overlay").removeClass("rightSpring")
                }, 500))
            },
            getPrev: function() {
                var a, b = c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));
                b > 0 ? (a = c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src"),
                c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src", a),
                b--,
                this.setSlide(b),
                this.preloadMedia(b - 1),
                j.settings.prevSlide && j.settings.prevSlide()) : (c("#swipebox-overlay").addClass("leftSpring"),
                setTimeout(function() {
                    c("#swipebox-overlay").removeClass("leftSpring")
                }, 500))
            },
            nextSlide: function() {},
            prevSlide: function() {},
            closeSlide: function() {
                c("html").removeClass("swipebox-html"),
                c("html").removeClass("swipebox-touch"),
                c(a).trigger("resize"),
                this.destroy()
            },
            destroy: function() {
                c(a).unbind("keyup"),
                c("body").unbind("touchstart"),
                c("body").unbind("touchmove"),
                c("body").unbind("touchend"),
                c("#swipebox-slider").unbind(),
                c("#swipebox-overlay").remove(),
                c.isArray(e) || e.removeData("_swipebox"),
                this.target && this.target.trigger("swipebox-destroy"),
                c.swipebox.isOpen = !1,
                j.settings.afterClose && j.settings.afterClose()
            }
        },
        j.init()
    }
    ,
    c.fn.swipebox = function(a) {
        if (!c.data(this, "_swipebox")) {
            var b = new c.swipebox(this,a);
            this.data("_swipebox", b)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery),
!function(a) {
    function b(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0]
              , d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null ),
            a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend"in document,
    a.support.touch) {
        var c, d = a.ui.mouse.prototype, e = d._mouseInit, f = d._mouseDestroy;
        d._touchStart = function(a) {
            var d = this;
            !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0,
            d._touchMoved = !1,
            b(a, "mouseover"),
            b(a, "mousemove"),
            b(a, "mousedown"))
        }
        ,
        d._touchMove = function(a) {
            c && (this._touchMoved = !0,
            b(a, "mousemove"))
        }
        ,
        d._touchEnd = function(a) {
            c && (b(a, "mouseup"),
            b(a, "mouseout"),
            this._touchMoved || b(a, "click"),
            c = !1)
        }
        ,
        d._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }),
            e.call(b)
        }
        ,
        d._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }),
            f.call(b)
        }
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var b = "waitForImages";
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    },
    a.expr[":"]["has-src"] = function(b) {
        return a(b).is('img[src][src!=""]')
    }
    ,
    a.expr[":"].uncached = function(b) {
        return a(b).is(":has-src") ? !b.complete : !1
    }
    ,
    a.fn.waitForImages = function() {
        var c, d, e, f = 0, g = 0, h = a.Deferred();
        if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll,
        d = arguments[0].each,
        c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0],
        d = arguments[1],
        e = arguments[2]),
        c = c || a.noop,
        d = d || a.noop,
        e = !!e,
        !a.isFunction(c) || !a.isFunction(d))
            throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var i = a(this)
              , j = []
              , k = a.waitForImages.hasImageProperties || []
              , l = a.waitForImages.hasImageAttributes || []
              , m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? i.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:has-src") && j.push({
                    src: b.attr("src"),
                    element: b[0]
                }),
                a.each(k, function(a, c) {
                    var d, e = b.css(c);
                    if (!e)
                        return !0;
                    for (; d = m.exec(e); )
                        j.push({
                            src: d[2],
                            element: b[0]
                        })
                }),
                a.each(l, function(c, d) {
                    var e, f = b.attr(d);
                    return f ? (e = f.split(","),
                    void a.each(e, function(c, d) {
                        d = a.trim(d).split(" ")[0],
                        j.push({
                            src: d,
                            element: b[0]
                        })
                    })) : !0
                })
            }) : i.find("img:has-src").each(function() {
                j.push({
                    src: this.src,
                    element: this
                })
            }),
            f = j.length,
            g = 0,
            0 === f && (c.call(i[0]),
            h.resolveWith(i[0])),
            a.each(j, function(e, j) {
                var k = new Image
                  , l = "load." + b + " error." + b;
                a(k).one(l, function m(b) {
                    var e = [g, f, "load" == b.type];
                    return g++,
                    d.apply(j.element, e),
                    h.notifyWith(j.element, e),
                    a(this).off(l, m),
                    g == f ? (c.call(i[0]),
                    h.resolveWith(i[0]),
                    !1) : void 0
                }),
                k.src = j.src
            })
        }),
        h.promise()
    }
});
var pJS = function(a, b) {
    var c = document.querySelector("#" + a + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: c,
            w: c.offsetWidth,
            h: c.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var d = this.pJS;
    b && Object.deepExtend(d, b),
    d.tmp.obj = {
        size_value: d.particles.size.value,
        size_anim_speed: d.particles.size.anim.speed,
        move_speed: d.particles.move.speed,
        line_linked_distance: d.particles.line_linked.distance,
        line_linked_width: d.particles.line_linked.width,
        mode_grab_distance: d.interactivity.modes.grab.distance,
        mode_bubble_distance: d.interactivity.modes.bubble.distance,
        mode_bubble_size: d.interactivity.modes.bubble.size,
        mode_repulse_distance: d.interactivity.modes.repulse.distance
    },
    d.fn.retinaInit = function() {
        d.retina_detect && window.devicePixelRatio > 1 ? (d.canvas.pxratio = window.devicePixelRatio,
        d.tmp.retina = !0) : (d.canvas.pxratio = 1,
        d.tmp.retina = !1),
        d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio,
        d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio,
        d.particles.size.value = d.tmp.obj.size_value * d.canvas.pxratio,
        d.particles.size.anim.speed = d.tmp.obj.size_anim_speed * d.canvas.pxratio,
        d.particles.move.speed = d.tmp.obj.move_speed * d.canvas.pxratio,
        d.particles.line_linked.distance = d.tmp.obj.line_linked_distance * d.canvas.pxratio,
        d.interactivity.modes.grab.distance = d.tmp.obj.mode_grab_distance * d.canvas.pxratio,
        d.interactivity.modes.bubble.distance = d.tmp.obj.mode_bubble_distance * d.canvas.pxratio,
        d.particles.line_linked.width = d.tmp.obj.line_linked_width * d.canvas.pxratio,
        d.interactivity.modes.bubble.size = d.tmp.obj.mode_bubble_size * d.canvas.pxratio,
        d.interactivity.modes.repulse.distance = d.tmp.obj.mode_repulse_distance * d.canvas.pxratio
    }
    ,
    d.fn.canvasInit = function() {
        d.canvas.ctx = d.canvas.el.getContext("2d")
    }
    ,
    d.fn.canvasSize = function() {
        d.canvas.el.width = d.canvas.w,
        d.canvas.el.height = d.canvas.h,
        d && d.interactivity.events.resize && window.addEventListener("resize", function() {
            d.canvas.w = d.canvas.el.offsetWidth,
            d.canvas.h = d.canvas.el.offsetHeight,
            d.tmp.retina && (d.canvas.w *= d.canvas.pxratio,
            d.canvas.h *= d.canvas.pxratio),
            d.canvas.el.width = d.canvas.w,
            d.canvas.el.height = d.canvas.h,
            d.particles.move.enable || (d.fn.particlesEmpty(),
            d.fn.particlesCreate(),
            d.fn.particlesDraw(),
            d.fn.vendors.densityAutoParticles()),
            d.fn.vendors.densityAutoParticles()
        })
    }
    ,
    d.fn.canvasPaint = function() {
        d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h)
    }
    ,
    d.fn.canvasClear = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h)
    }
    ,
    d.fn.particle = function(a, b, c) {
        if (this.radius = (d.particles.size.random ? Math.random() : 1) * d.particles.size.value,
        d.particles.size.anim.enable && (this.size_status = !1,
        this.vs = d.particles.size.anim.speed / 100,
        d.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        this.x = c ? c.x : Math.random() * d.canvas.w,
        this.y = c ? c.y : Math.random() * d.canvas.h,
        this.x > d.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > d.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        d.particles.move.bounce && d.fn.vendors.checkOverlap(this, c),
        this.color = {},
        "object" == typeof a.value)
            if (a.value instanceof Array) {
                var e = a.value[Math.floor(Math.random() * d.particles.color.value.length)];
                this.color.rgb = hexToRgb(e)
            } else
                void 0 != a.value.r && void 0 != a.value.g && void 0 != a.value.b && (this.color.rgb = {
                    r: a.value.r,
                    g: a.value.g,
                    b: a.value.b
                }),
                void 0 != a.value.h && void 0 != a.value.s && void 0 != a.value.l && (this.color.hsl = {
                    h: a.value.h,
                    s: a.value.s,
                    l: a.value.l
                });
        else
            "random" == a.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof a.value && (this.color = a,
            this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (d.particles.opacity.random ? Math.random() : 1) * d.particles.opacity.value,
        d.particles.opacity.anim.enable && (this.opacity_status = !1,
        this.vo = d.particles.opacity.anim.speed / 100,
        d.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var f = {};
        switch (d.particles.move.direction) {
        case "top":
            f = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            f = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            f = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            f = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            f = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            f = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            f = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            f = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            f = {
                x: 0,
                y: 0
            }
        }
        d.particles.move.straight ? (this.vx = f.x,
        this.vy = f.y,
        d.particles.move.random && (this.vx = this.vx * Math.random(),
        this.vy = this.vy * Math.random())) : (this.vx = f.x + Math.random() - .5,
        this.vy = f.y + Math.random() - .5),
        this.vx_i = this.vx,
        this.vy_i = this.vy;
        var g = d.particles.shape.type;
        if ("object" == typeof g) {
            if (g instanceof Array) {
                var h = g[Math.floor(Math.random() * g.length)];
                this.shape = h
            }
        } else
            this.shape = g;
        if ("image" == this.shape) {
            var i = d.particles.shape;
            this.img = {
                src: i.image.src,
                ratio: i.image.width / i.image.height
            },
            this.img.ratio || (this.img.ratio = 1),
            "svg" == d.tmp.img_type && void 0 != d.tmp.source_svg && (d.fn.vendors.createSvgImg(this),
            d.tmp.pushing && (this.img.loaded = !1))
        }
    }
    ,
    d.fn.particle.prototype.draw = function() {
        function a() {
            d.canvas.ctx.drawImage(g, b.x - c, b.y - c, 2 * c, 2 * c / b.img.ratio)
        }
        var b = this;
        if (void 0 != b.radius_bubble)
            var c = b.radius_bubble;
        else
            var c = b.radius;
        if (void 0 != b.opacity_bubble)
            var e = b.opacity_bubble;
        else
            var e = b.opacity;
        if (b.color.rgb)
            var f = "rgba(" + b.color.rgb.r + "," + b.color.rgb.g + "," + b.color.rgb.b + "," + e + ")";
        else
            var f = "hsla(" + b.color.hsl.h + "," + b.color.hsl.s + "%," + b.color.hsl.l + "%," + e + ")";
        switch (d.canvas.ctx.fillStyle = f,
        d.canvas.ctx.beginPath(),
        b.shape) {
        case "circle":
            d.canvas.ctx.arc(b.x, b.y, c, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            d.canvas.ctx.rect(b.x - c, b.y - c, 2 * c, 2 * c);
            break;
        case "triangle":
            d.fn.vendors.drawShape(d.canvas.ctx, b.x - c, b.y + c / 1.66, 2 * c, 3, 2);
            break;
        case "polygon":
            d.fn.vendors.drawShape(d.canvas.ctx, b.x - c / (d.particles.shape.polygon.nb_sides / 3.5), b.y - c / .76, 2.66 * c / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            d.fn.vendors.drawShape(d.canvas.ctx, b.x - 2 * c / (d.particles.shape.polygon.nb_sides / 4), b.y - c / 1.52, 2 * c * 2.66 / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            if ("svg" == d.tmp.img_type)
                var g = b.img.obj;
            else
                var g = d.tmp.img_obj;
            g && a()
        }
        d.canvas.ctx.closePath(),
        d.particles.shape.stroke.width > 0 && (d.canvas.ctx.strokeStyle = d.particles.shape.stroke.color,
        d.canvas.ctx.lineWidth = d.particles.shape.stroke.width,
        d.canvas.ctx.stroke()),
        d.canvas.ctx.fill()
    }
    ,
    d.fn.particlesCreate = function() {
        for (var a = 0; a < d.particles.number.value; a++)
            d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value))
    }
    ,
    d.fn.particlesUpdate = function() {
        for (var a = 0; a < d.particles.array.length; a++) {
            var b = d.particles.array[a];
            if (d.particles.move.enable) {
                var c = d.particles.move.speed / 2;
                b.x += b.vx * c,
                b.y += b.vy * c
            }
            if (d.particles.opacity.anim.enable && (1 == b.opacity_status ? (b.opacity >= d.particles.opacity.value && (b.opacity_status = !1),
            b.opacity += b.vo) : (b.opacity <= d.particles.opacity.anim.opacity_min && (b.opacity_status = !0),
            b.opacity -= b.vo),
            b.opacity < 0 && (b.opacity = 0)),
            d.particles.size.anim.enable && (1 == b.size_status ? (b.radius >= d.particles.size.value && (b.size_status = !1),
            b.radius += b.vs) : (b.radius <= d.particles.size.anim.size_min && (b.size_status = !0),
            b.radius -= b.vs),
            b.radius < 0 && (b.radius = 0)),
            "bounce" == d.particles.move.out_mode)
                var e = {
                    x_left: b.radius,
                    x_right: d.canvas.w,
                    y_top: b.radius,
                    y_bottom: d.canvas.h
                };
            else
                var e = {
                    x_left: -b.radius,
                    x_right: d.canvas.w + b.radius,
                    y_top: -b.radius,
                    y_bottom: d.canvas.h + b.radius
                };
            switch (b.x - b.radius > d.canvas.w ? (b.x = e.x_left,
            b.y = Math.random() * d.canvas.h) : b.x + b.radius < 0 && (b.x = e.x_right,
            b.y = Math.random() * d.canvas.h),
            b.y - b.radius > d.canvas.h ? (b.y = e.y_top,
            b.x = Math.random() * d.canvas.w) : b.y + b.radius < 0 && (b.y = e.y_bottom,
            b.x = Math.random() * d.canvas.w),
            d.particles.move.out_mode) {
            case "bounce":
                b.x + b.radius > d.canvas.w ? b.vx = -b.vx : b.x - b.radius < 0 && (b.vx = -b.vx),
                b.y + b.radius > d.canvas.h ? b.vy = -b.vy : b.y - b.radius < 0 && (b.vy = -b.vy)
            }
            if (isInArray("grab", d.interactivity.events.onhover.mode) && d.fn.modes.grabParticle(b),
            (isInArray("bubble", d.interactivity.events.onhover.mode) || isInArray("bubble", d.interactivity.events.onclick.mode)) && d.fn.modes.bubbleParticle(b),
            (isInArray("repulse", d.interactivity.events.onhover.mode) || isInArray("repulse", d.interactivity.events.onclick.mode)) && d.fn.modes.repulseParticle(b),
            d.particles.line_linked.enable || d.particles.move.attract.enable)
                for (var f = a + 1; f < d.particles.array.length; f++) {
                    var g = d.particles.array[f];
                    d.particles.line_linked.enable && d.fn.interact.linkParticles(b, g),
                    d.particles.move.attract.enable && d.fn.interact.attractParticles(b, g),
                    d.particles.move.bounce && d.fn.interact.bounceParticles(b, g)
                }
        }
    }
    ,
    d.fn.particlesDraw = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h),
        d.fn.particlesUpdate();
        for (var a = 0; a < d.particles.array.length; a++) {
            var b = d.particles.array[a];
            b.draw()
        }
    }
    ,
    d.fn.particlesEmpty = function() {
        d.particles.array = []
    }
    ,
    d.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(d.fn.checkAnimFrame),
        cancelRequestAnimFrame(d.fn.drawAnimFrame),
        d.tmp.source_svg = void 0,
        d.tmp.img_obj = void 0,
        d.tmp.count_svg = 0,
        d.fn.particlesEmpty(),
        d.fn.canvasClear(),
        d.fn.vendors.start()
    }
    ,
    d.fn.interact.linkParticles = function(a, b) {
        var c = a.x - b.x
          , e = a.y - b.y
          , f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
            var g = d.particles.line_linked.opacity - f / (1 / d.particles.line_linked.opacity) / d.particles.line_linked.distance;
            if (g > 0) {
                var h = d.particles.line_linked.color_rgb_line;
                d.canvas.ctx.strokeStyle = "rgba(" + h.r + "," + h.g + "," + h.b + "," + g + ")",
                d.canvas.ctx.lineWidth = d.particles.line_linked.width,
                d.canvas.ctx.beginPath(),
                d.canvas.ctx.moveTo(a.x, a.y),
                d.canvas.ctx.lineTo(b.x, b.y),
                d.canvas.ctx.stroke(),
                d.canvas.ctx.closePath()
            }
        }
    }
    ,
    d.fn.interact.attractParticles = function(a, b) {
        var c = a.x - b.x
          , e = a.y - b.y
          , f = Math.sqrt(c * c + e * e);
        if (f <= d.particles.line_linked.distance) {
            var g = c / (1e3 * d.particles.move.attract.rotateX)
              , h = e / (1e3 * d.particles.move.attract.rotateY);
            a.vx -= g,
            a.vy -= h,
            b.vx += g,
            b.vy += h
        }
    }
    ,
    d.fn.interact.bounceParticles = function(a, b) {
        var c = a.x - b.x
          , d = a.y - b.y
          , e = Math.sqrt(c * c + d * d)
          , f = a.radius + b.radius;
        f >= e && (a.vx = -a.vx,
        a.vy = -a.vy,
        b.vx = -b.vx,
        b.vy = -b.vy)
    }
    ,
    d.fn.modes.pushParticles = function(a, b) {
        d.tmp.pushing = !0;
        for (var c = 0; a > c; c++)
            d.particles.array.push(new d.fn.particle(d.particles.color,d.particles.opacity.value,{
                x: b ? b.pos_x : Math.random() * d.canvas.w,
                y: b ? b.pos_y : Math.random() * d.canvas.h
            })),
            c == a - 1 && (d.particles.move.enable || d.fn.particlesDraw(),
            d.tmp.pushing = !1)
    }
    ,
    d.fn.modes.removeParticles = function(a) {
        d.particles.array.splice(0, a),
        d.particles.move.enable || d.fn.particlesDraw()
    }
    ,
    d.fn.modes.bubbleParticle = function(a) {
        function b() {
            a.opacity_bubble = a.opacity,
            a.radius_bubble = a.radius
        }
        function c(b, c, e, f, h) {
            if (b != c)
                if (d.tmp.bubble_duration_end) {
                    if (void 0 != e) {
                        var i = f - l * (f - b) / d.interactivity.modes.bubble.duration
                          , j = b - i;
                        m = b + j,
                        "size" == h && (a.radius_bubble = m),
                        "opacity" == h && (a.opacity_bubble = m)
                    }
                } else if (g <= d.interactivity.modes.bubble.distance) {
                    if (void 0 != e)
                        var k = e;
                    else
                        var k = f;
                    if (k != b) {
                        var m = f - l * (f - b) / d.interactivity.modes.bubble.duration;
                        "size" == h && (a.radius_bubble = m),
                        "opacity" == h && (a.opacity_bubble = m)
                    }
                } else
                    "size" == h && (a.radius_bubble = void 0),
                    "opacity" == h && (a.opacity_bubble = void 0)
        }
        if (d.interactivity.events.onhover.enable && isInArray("bubble", d.interactivity.events.onhover.mode)) {
            var e = a.x - d.interactivity.mouse.pos_x
              , f = a.y - d.interactivity.mouse.pos_y
              , g = Math.sqrt(e * e + f * f)
              , h = 1 - g / d.interactivity.modes.bubble.distance;
            if (g <= d.interactivity.modes.bubble.distance) {
                if (h >= 0 && "mousemove" == d.interactivity.status) {
                    if (d.interactivity.modes.bubble.size != d.particles.size.value)
                        if (d.interactivity.modes.bubble.size > d.particles.size.value) {
                            var i = a.radius + d.interactivity.modes.bubble.size * h;
                            i >= 0 && (a.radius_bubble = i)
                        } else {
                            var j = a.radius - d.interactivity.modes.bubble.size
                              , i = a.radius - j * h;
                            i > 0 ? a.radius_bubble = i : a.radius_bubble = 0
                        }
                    if (d.interactivity.modes.bubble.opacity != d.particles.opacity.value)
                        if (d.interactivity.modes.bubble.opacity > d.particles.opacity.value) {
                            var k = d.interactivity.modes.bubble.opacity * h;
                            k > a.opacity && k <= d.interactivity.modes.bubble.opacity && (a.opacity_bubble = k)
                        } else {
                            var k = a.opacity - (d.particles.opacity.value - d.interactivity.modes.bubble.opacity) * h;
                            k < a.opacity && k >= d.interactivity.modes.bubble.opacity && (a.opacity_bubble = k)
                        }
                }
            } else
                b();
            "mouseleave" == d.interactivity.status && b()
        } else if (d.interactivity.events.onclick.enable && isInArray("bubble", d.interactivity.events.onclick.mode)) {
            if (d.tmp.bubble_clicking) {
                var e = a.x - d.interactivity.mouse.click_pos_x
                  , f = a.y - d.interactivity.mouse.click_pos_y
                  , g = Math.sqrt(e * e + f * f)
                  , l = ((new Date).getTime() - d.interactivity.mouse.click_time) / 1e3;
                l > d.interactivity.modes.bubble.duration && (d.tmp.bubble_duration_end = !0),
                l > 2 * d.interactivity.modes.bubble.duration && (d.tmp.bubble_clicking = !1,
                d.tmp.bubble_duration_end = !1)
            }
            d.tmp.bubble_clicking && (c(d.interactivity.modes.bubble.size, d.particles.size.value, a.radius_bubble, a.radius, "size"),
            c(d.interactivity.modes.bubble.opacity, d.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"))
        }
    }
    ,
    d.fn.modes.repulseParticle = function(a) {
        function b() {
            var b = Math.atan2(m, l);
            if (a.vx = o * Math.cos(b),
            a.vy = o * Math.sin(b),
            "bounce" == d.particles.move.out_mode) {
                var c = {
                    x: a.x + a.vx,
                    y: a.y + a.vy
                };
                c.x + a.radius > d.canvas.w ? a.vx = -a.vx : c.x - a.radius < 0 && (a.vx = -a.vx),
                c.y + a.radius > d.canvas.h ? a.vy = -a.vy : c.y - a.radius < 0 && (a.vy = -a.vy)
            }
        }
        if (d.interactivity.events.onhover.enable && isInArray("repulse", d.interactivity.events.onhover.mode) && "mousemove" == d.interactivity.status) {
            var c = a.x - d.interactivity.mouse.pos_x
              , e = a.y - d.interactivity.mouse.pos_y
              , f = Math.sqrt(c * c + e * e)
              , g = {
                x: c / f,
                y: e / f
            }
              , h = d.interactivity.modes.repulse.distance
              , i = 100
              , j = clamp(1 / h * (-1 * Math.pow(f / h, 2) + 1) * h * i, 0, 50)
              , k = {
                x: a.x + g.x * j,
                y: a.y + g.y * j
            };
            "bounce" == d.particles.move.out_mode ? (k.x - a.radius > 0 && k.x + a.radius < d.canvas.w && (a.x = k.x),
            k.y - a.radius > 0 && k.y + a.radius < d.canvas.h && (a.y = k.y)) : (a.x = k.x,
            a.y = k.y)
        } else if (d.interactivity.events.onclick.enable && isInArray("repulse", d.interactivity.events.onclick.mode))
            if (d.tmp.repulse_finish || (d.tmp.repulse_count++,
            d.tmp.repulse_count == d.particles.array.length && (d.tmp.repulse_finish = !0)),
            d.tmp.repulse_clicking) {
                var h = Math.pow(d.interactivity.modes.repulse.distance / 6, 3)
                  , l = d.interactivity.mouse.click_pos_x - a.x
                  , m = d.interactivity.mouse.click_pos_y - a.y
                  , n = l * l + m * m
                  , o = -h / n * 1;
                h >= n && b()
            } else
                0 == d.tmp.repulse_clicking && (a.vx = a.vx_i,
                a.vy = a.vy_i)
    }
    ,
    d.fn.modes.grabParticle = function(a) {
        if (d.interactivity.events.onhover.enable && "mousemove" == d.interactivity.status) {
            var b = a.x - d.interactivity.mouse.pos_x
              , c = a.y - d.interactivity.mouse.pos_y
              , e = Math.sqrt(b * b + c * c);
            if (e <= d.interactivity.modes.grab.distance) {
                var f = d.interactivity.modes.grab.line_linked.opacity - e / (1 / d.interactivity.modes.grab.line_linked.opacity) / d.interactivity.modes.grab.distance;
                if (f > 0) {
                    var g = d.particles.line_linked.color_rgb_line;
                    d.canvas.ctx.strokeStyle = "rgba(" + g.r + "," + g.g + "," + g.b + "," + f + ")",
                    d.canvas.ctx.lineWidth = d.particles.line_linked.width,
                    d.canvas.ctx.beginPath(),
                    d.canvas.ctx.moveTo(a.x, a.y),
                    d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x, d.interactivity.mouse.pos_y),
                    d.canvas.ctx.stroke(),
                    d.canvas.ctx.closePath()
                }
            }
        }
    }
    ,
    d.fn.vendors.eventsListeners = function() {
        "window" == d.interactivity.detect_on ? d.interactivity.el = window : d.interactivity.el = d.canvas.el,
        (d.interactivity.events.onhover.enable || d.interactivity.events.onclick.enable) && (d.interactivity.el.addEventListener("mousemove", function(a) {
            if (d.interactivity.el == window)
                var b = a.clientX
                  , c = a.clientY;
            else
                var b = a.offsetX || a.clientX
                  , c = a.offsetY || a.clientY;
            d.interactivity.mouse.pos_x = b,
            d.interactivity.mouse.pos_y = c,
            d.tmp.retina && (d.interactivity.mouse.pos_x *= d.canvas.pxratio,
            d.interactivity.mouse.pos_y *= d.canvas.pxratio),
            d.interactivity.status = "mousemove"
        }),
        d.interactivity.el.addEventListener("mouseleave", function(a) {
            d.interactivity.mouse.pos_x = null ,
            d.interactivity.mouse.pos_y = null ,
            d.interactivity.status = "mouseleave"
        })),
        d.interactivity.events.onclick.enable && d.interactivity.el.addEventListener("click", function() {
            if (d.interactivity.mouse.click_pos_x = d.interactivity.mouse.pos_x,
            d.interactivity.mouse.click_pos_y = d.interactivity.mouse.pos_y,
            d.interactivity.mouse.click_time = (new Date).getTime(),
            d.interactivity.events.onclick.enable)
                switch (d.interactivity.events.onclick.mode) {
                case "push":
                    d.particles.move.enable ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : 1 == d.interactivity.modes.push.particles_nb ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : d.interactivity.modes.push.particles_nb > 1 && d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    d.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    d.tmp.repulse_clicking = !0,
                    d.tmp.repulse_count = 0,
                    d.tmp.repulse_finish = !1,
                    setTimeout(function() {
                        d.tmp.repulse_clicking = !1
                    }, 1e3 * d.interactivity.modes.repulse.duration)
                }
        })
    }
    ,
    d.fn.vendors.densityAutoParticles = function() {
        if (d.particles.number.density.enable) {
            var a = d.canvas.el.width * d.canvas.el.height / 1e3;
            d.tmp.retina && (a /= 2 * d.canvas.pxratio);
            var b = a * d.particles.number.value / d.particles.number.density.value_area
              , c = d.particles.array.length - b;
            0 > c ? d.fn.modes.pushParticles(Math.abs(c)) : d.fn.modes.removeParticles(c)
        }
    }
    ,
    d.fn.vendors.checkOverlap = function(a, b) {
        for (var c = 0; c < d.particles.array.length; c++) {
            var e = d.particles.array[c]
              , f = a.x - e.x
              , g = a.y - e.y
              , h = Math.sqrt(f * f + g * g);
            h <= a.radius + e.radius && (a.x = b ? b.x : Math.random() * d.canvas.w,
            a.y = b ? b.y : Math.random() * d.canvas.h,
            d.fn.vendors.checkOverlap(a))
        }
    }
    ,
    d.fn.vendors.createSvgImg = function(a) {
        var b = d.tmp.source_svg
          , c = /#([0-9A-F]{3,6})/gi
          , e = b.replace(c, function(b, c, d, e) {
            if (a.color.rgb)
                var f = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")";
            else
                var f = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
            return f
        })
          , f = new Blob([e],{
            type: "image/svg+xml;charset=utf-8"
        })
          , g = window.URL || window.webkitURL || window
          , h = g.createObjectURL(f)
          , i = new Image;
        i.addEventListener("load", function() {
            a.img.obj = i,
            a.img.loaded = !0,
            g.revokeObjectURL(h),
            d.tmp.count_svg++
        }),
        i.src = h
    }
    ,
    d.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(d.fn.drawAnimFrame),
        c.remove(),
        pJSDom = null
    }
    ,
    d.fn.vendors.drawShape = function(a, b, c, d, e, f) {
        var g = e * f
          , h = e / f
          , i = 180 * (h - 2) / h
          , j = Math.PI - Math.PI * i / 180;
        a.save(),
        a.beginPath(),
        a.translate(b, c),
        a.moveTo(0, 0);
        for (var k = 0; g > k; k++)
            a.lineTo(d, 0),
            a.translate(d, 0),
            a.rotate(j);
        a.fill(),
        a.restore()
    }
    ,
    d.fn.vendors.exportImg = function() {
        window.open(d.canvas.el.toDataURL("image/png"), "_blank")
    }
    ,
    d.fn.vendors.loadImg = function(a) {
        if (d.tmp.img_error = void 0,
        "" != d.particles.shape.image.src)
            if ("svg" == a) {
                var b = new XMLHttpRequest;
                b.open("GET", d.particles.shape.image.src),
                b.onreadystatechange = function(a) {
                    4 == b.readyState && (200 == b.status ? (d.tmp.source_svg = a.currentTarget.response,
                    d.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                    d.tmp.img_error = !0))
                }
                ,
                b.send()
            } else {
                var c = new Image;
                c.addEventListener("load", function() {
                    d.tmp.img_obj = c,
                    d.fn.vendors.checkBeforeDraw()
                }),
                c.src = d.particles.shape.image.src
            }
        else
            console.log("Error pJS - No image.src"),
            d.tmp.img_error = !0
    }
    ,
    d.fn.vendors.draw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type ? d.tmp.count_svg >= d.particles.number.value ? (d.fn.particlesDraw(),
        d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : void 0 != d.tmp.img_obj ? (d.fn.particlesDraw(),
        d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : (d.fn.particlesDraw(),
        d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame))
    }
    ,
    d.fn.vendors.checkBeforeDraw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type && void 0 == d.tmp.source_svg ? d.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(d.tmp.checkAnimFrame),
        d.tmp.img_error || (d.fn.vendors.init(),
        d.fn.vendors.draw())) : (d.fn.vendors.init(),
        d.fn.vendors.draw())
    }
    ,
    d.fn.vendors.init = function() {
        d.fn.retinaInit(),
        d.fn.canvasInit(),
        d.fn.canvasSize(),
        d.fn.canvasPaint(),
        d.fn.particlesCreate(),
        d.fn.vendors.densityAutoParticles(),
        d.particles.line_linked.color_rgb_line = hexToRgb(d.particles.line_linked.color)
    }
    ,
    d.fn.vendors.start = function() {
        isInArray("image", d.particles.shape.type) ? (d.tmp.img_type = d.particles.shape.image.src.substr(d.particles.shape.image.src.length - 3),
        d.fn.vendors.loadImg(d.tmp.img_type)) : d.fn.vendors.checkBeforeDraw()
    }
    ,
    d.fn.vendors.eventsListeners(),
    d.fn.vendors.start()
}
;
Object.deepExtend = function(a, b) {
    for (var c in b)
        b[c] && b[c].constructor && b[c].constructor === Object ? (a[c] = a[c] || {},
        arguments.callee(a[c], b[c])) : a[c] = b[c];
    return a
}
,
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1e3 / 60)
    }
}(),
window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(),
window.pJSDom = [],
window.particlesJS = function(a, b) {
    "string" != typeof a && (b = a,
    a = "particles-js"),
    a || (a = "particles-js");
    var c = document.getElementById(a)
      , d = "particles-js-canvas-el"
      , e = c.getElementsByClassName(d);
    if (e.length)
        for (; e.length > 0; )
            c.removeChild(e[0]);
    var f = document.createElement("canvas");
    f.className = d,
    f.style.width = "100%",
    f.style.height = "100%";
    var g = document.getElementById(a).appendChild(f);
    null != g && pJSDom.push(new pJS(a,b))
}
,
window.particlesJS.load = function(a, b, c) {
    var d = new XMLHttpRequest;
    d.open("GET", b),
    d.onreadystatechange = function(b) {
        if (4 == d.readyState)
            if (200 == d.status) {
                var e = JSON.parse(b.currentTarget.response);
                window.particlesJS(a, e),
                c && c()
            } else
                console.log("Error pJS - XMLHttpRequest status: " + d.status),
                console.log("Error pJS - File config not found")
    },
    d.send()
},
$(function() {
    $("a.smoothscroll").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"),
            a.length)
                return $("html,body").animate({
                    scrollTop: a.offset().top
                }, 1e3),
                !1
        }
    })
}),
function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    , g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null ),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
.call(this),
$(document).ready(function() {
    function a() {
        var b = new TimelineLite;
        b.fromTo(".serviceDesc.it .serverLights.light1", Math.random(), {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            force3D: !0
        }).to(".serviceDesc.it .serverLights.light1", Math.random(), {
            onComplete: a
        })
    }
    function b() {
        var a = new TimelineLite;
        a.fromTo(".serviceDesc.it .serverLights.light2", Math.random(), {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            force3D: !0
        }).to(".serviceDesc.it .serverLights.light2", Math.random(), {
            onComplete: b
        })
    }
    function c() {
        var a = new TimelineLite;
        a.fromTo(".serviceDesc.it .serverLights.light3", Math.random(), {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            force3D: !0
        }).to(".serviceDesc.it .serverLights.light3", Math.random(), {
            onComplete: c
        })
    }
    function d() {
        var a = new TimelineLite;
        a.fromTo(".serviceDesc.it .serverLights.light4", Math.random(), {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            force3D: !0
        }).to(".serviceDesc.it .serverLights.light4", Math.random(), {
            onComplete: d
        })
    }
    function e() {
        function a() {
            var a = new TimelineLite({
                onComplete: function() {
                    this.restart()
                }
            });
            a.to(".ar-down", 4, {
                y: 115,
                force3D: !0
            }, 0),
            a.to(".ar-down", 1, {
                autoAlpha: 1,
                force3D: !0
            }, 0),
            a.to(".ar-down", 2, {
                autoAlpha: 0,
                force3D: !0
            }, 2)
        }
        var b = new TimelineLite;
        b.fromTo($(".power .outline-symbol"), 2, {
            scale: .8,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1
        }, .5),
        b.fromTo($(".power .static-logo"), 1.5, {
            drawSVG: "0%"
        }, {
            drawSVG: "100%"
        }, .5),
        b.fromTo($(".hp .navbar"), 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, 1.5),
        b.fromTo(q, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, 2),
        b.from(s, .5, {
            boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0)"
        }, 2.3),
        b.from(r, 1, {
            top: "10px",
            onComplete: a
        }, 2.3),
        b.from(".down", 1, {
            opacity: 0
        }, 3.5),
        b.to(".drag-hint", 2, {
            display: "block"
        }, 2)
    }
    function f() {
        $("body").removeClass("open"),
        $(".menu.open").removeClass("open"),
        $(".hamburger").removeClass("active")
    }
    $(function() {
        var a = $(window)
          , b = .1
          , c = 50;
        a.on("mousewheel DOMMouseScroll", function(d) {
            d.preventDefault();
            var e = d.originalEvent.wheelDelta / 120 || -d.originalEvent.detail
              , f = a.scrollTop()
              , g = f - parseInt(e * c);
            TweenMax.to(a, b, {
                scrollTo: {
                    y: g,
                    autoKill: !0
                },
                ease: Power1.easeOut,
                overwrite: 5
            })
        })
    });
    var g = new WOW({
        mobile: !1
    });
    g.init(),
    $(".veticalcenter").flexVerticalCenter(),
    function(a) {
        a("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").swipebox()
    }(jQuery);
    var h = new ScrollMagic.Controller
      , i = (new ScrollMagic.Scene({
        triggerElement: ".services",
        triggerHook: "onEnter",
        duration: "200%"
    }).setTween(".services > .bgImg", .5, {
        y: "100%",
        ease: Linear.easeInOut
    }).addTo(h),
    new TimelineMax);
    i.to(".paralex > .bgImg", 1, {
        y: "40%",
        ease: Linear.easeNone
    }).to(".paralex > .claim", 1, {
        autoAlpha: 0,
        scale: .85
    }, "0");
    var j = (new ScrollMagic.Scene({
        triggerElement: ".paralex",
        triggerHook: "onLeave",
        duration: "100%"
    }).setTween(i).addTo(h),
    (new TimelineMax).fromTo(".circle", 4, {
        drawSVG: 0
    }, {
        drawSVG: "100%",
        ease: Power4.easeOut
    }, 0).from(".circleWrap .text #countUp", 2, {
        autoAlpha: 0,
        y: 30
    }, 0).from(".circleWrap .text .small", 2, {
        autoAlpha: 0,
        y: -30
    }, 0).from(".years .col-md-7", 1, {
        autoAlpha: 0
    }, .2))
      , k = (new ScrollMagic.Scene({
        triggerElement: ".years"
    }).setTween(j).addTo(h),
    (new TimelineMax).set("section.history .col-md-3", {
        perspective: "300px"
    }).staggerFrom("section.history h3", 1, {
        y: -10,
        opacity: 0
    }, .5, .2).staggerFrom("section.history img", 1.2, {
        opacity: 0,
        rotationX: 90,
        transformOrigin: "50% 80%",
        ease: Back.easeOut
    }, .4, 0).from("section.history .timeline", 2, {
        width: 0,
        transformOrigin: "0% 50%"
    }, 0).staggerFrom("section.history p", 1, {
        y: -10,
        opacity: 0
    }, .2, 1))
      , l = (new ScrollMagic.Scene({
        triggerElement: "section.history"
    }).setTween(k).addTo(h),
    (new TimelineMax).from("section.spolecnost h2", 1, {
        opacity: 0,
        y: -40
    }, 0).from("section.spolecnost p", 1, {
        opacity: 0,
        y: 40
    }, 0).from("section.spolecnost #circleBlue", 1, {
        rotation: 10,
        scale: .9,
        opacity: 0
    }, .5))
      , m = (new ScrollMagic.Scene({
        triggerElement: "section.spolecnost"
    }).setTween(l).addTo(h),
    (new TimelineMax).from("section.kvalita h2", 1, {
        opacity: 0,
        y: -40
    }, 0).from("section.kvalita p", 1, {
        opacity: 0,
        y: 40
    }, 0).from("section.kvalita #certifikaty", 1, {
        opacity: 0
    }, .5))
      , n = (new ScrollMagic.Scene({
        triggerElement: "section.kvalita"
    }).setTween(m).addTo(h),
    (new TimelineMax).from("section.spokojenost .bg", 2, {
        scale: 1.1
    }, 0).from("section.spokojenost p.lead", 1, {
        y: -40,
        opacity: 0
    }, .5).from("section.spokojenost p.who", 1, {
        y: 40,
        opacity: 0
    }, .5))
      , o = (new ScrollMagic.Scene({
        triggerElement: "section.spokojenost"
    }).setTween(n).addTo(h),
    new ScrollMagic.Scene({
        triggerElement: ".countUp",
        triggerHook: "onEnter"
    }).on("enter", function() {
        $.each($(".countUp"), function() {
            var a = {
                useEasing: !0,
                useGrouping: !0,
                separator: ".",
                decimal: ".",
                prefix: "",
                suffix: ""
            }
              , b = $(this).data("count")
              , c = new CountUp(this,0,b,0,3,a);
            c.start()
        })
    }).addTo(h),
    new ScrollMagic.Scene({
        triggerElement: ".list",
        triggerHook: "0.50"
    }).setTween(TweenMax.staggerFrom(".list ul li", .3, {
        autoAlpha: 0,
        y: 10
    }, .1)).addTo(h),
    new ScrollMagic.Scene({
        triggerElement: ".reference",
        triggerHook: "0.70"
    }).setTween(TweenMax.staggerFrom(".reference h3", .5, {
        autoAlpha: 0
    }, .2)).addTo(h),
    new ScrollMagic.Scene({
        triggerElement: ".refLink",
        triggerHook: "0.80"
    }).setTween(TweenMax.from(".refLink p", 1, {
        autoAlpha: 0,
        y: 10
    }, .1)).addTo(h),
    (new TimelineMax).from(".top.sluzby svg", 2, {
        autoAlpha: 0,
        y: -30
    }, 1).fromTo(".top.sluzby path", 4, {
        drawSVG: 0
    }, {
        drawSVG: "100%",
        ease: Power4.easeOut
    }, 1).from(".top.sluzby h1", 2, {
        autoAlpha: 0,
        y: 30
    }, .5));
    new ScrollMagic.Scene({
        triggerElement: ".top.sluzby"
    }).setTween(o).addTo(h);
    a(),
    b(),
    c(),
    d();
    var p = (new TimelineMax).from(".serviceDesc.it", 2, {
        backgroundPosition: "center top",
        force3D: !0
    }, 1).from(".serviceDesc.it h2", 2, {
        autoAlpha: 0,
        y: -30
    }, 0).from(".serviceDesc.it p", 2, {
        autoAlpha: 0,
        y: 30
    }, 0).from(".serviceDesc.it .lightswrap", .5, {
        autoAlpha: 0
    }, 2);
    new ScrollMagic.Scene({
        triggerElement: ".serviceDesc.it"
    }).setTween(p).addTo(h);
    $("body").waitForImages(!0).progress(function(a, b, c) {
        var d = Math.round(a / b * 100)
          , e = d + "%";
        $("#preloader-in").text(d),
        TweenLite.set($("#preloader-in"), {
            autoAlpha: 0,
            y: -40
        }),
        TweenLite.to($("#preloader-in"), .2, {
            autoAlpha: 1,
            y: 0
        }),
        TweenLite.to($("#preloader-out"), .5, {
            height: e
        })
    }).done(function() {
        $(".not-loaded").removeClass("not-loaded"),
        $("#preloader-over").delay(1e3).fadeOut("slow"),
        TweenLite.to($("#preloader-in"), .5, {
            y: 200,
            scale: .98,
            autoAlpha: 0,
            delay: .5
        }),
        $("#preloader-in").text(100),
        TweenLite.to($("#preloader-out"), .5, {
            height: "100%"
        }),
        setTimeout(e, 500)
    });
    var q = $(".slider")
      , r = $(".switch")
      , s = $(".inner")
      , t = new Howl({
        src: [""],
        rate: .4
    })
      , u = new Howl({
        src: [""],
        volume: .2
    })
      , v = new Howl({
        src: [""],
        rate: 1,
        volume: .7
    });
    $("#draggable").draggable({
        axis: "y",
        containment: ".draggable-container",
        revert: function(a) {
            return TweenMax.to("#hue1feGaussianBlur", .2, {
                attr: {
                    stdDeviation: 0
                }
            }),
            TweenMax.to(".glow-logo", .2, {
                autoAlpha: 0
            }),
            u.play(),
            !0
        },
        start: function(a, b) {
            t.play()
        },
        stop: function(a, b) {},
        drag: function(a, b) {
            var c = $(".hpExp").offset().top
              , d = r.offset().top - c - 3;
            TweenMax.to("#hue1feGaussianBlur", .2, {
                attr: {
                    stdDeviation: d / 20
                }
            }),
            d >= 20 && TweenMax.to(".glow-logo", .2, {
                autoAlpha: 1
            }),
            console.log(d)
        }
    });
    var w = new TimelineLite;
    $(".droppable").droppable({
        drop: function(a, b) {
            v.play(),
            $(this).addClass("ui-state-highlight"),
            $("#draggable").draggable("option", "revert", !1),
            $("#draggable").draggable("disable"),
            $(".hpExp").addClass("activated"),
            w.to(".ar-down", .5, {
                autoAlpha: 0
            }, 0),
            w.to(s, .5, {
                autoAlpha: 0
            }, 0),
            w.to(".switch-btn", .5, {
                rotation: 360
            }, .4),
            w.to(r, .5, {
                autoAlpha: 0
            }, .5),
            w.to(".slider", .5, {
                autoAlpha: 0
            }, .5),
            w.to(".power-animation", .4, {
                backgroundPosition: "0px -1800px",
                ease: SteppedEase.config(6)
            }, .6),
            w.to(".drag-hint", .5, {
                autoAlpha: 0
            }, .5),
            w.to(".hpExp", .5, {
                scale: .8
            }, 1),
            w.to(".powerClaim", .5, {
                autoAlpha: 1
            }, 1),
            w.to("#particles-js", .5, {
                autoAlpha: 1
            }, 2.2),
            particlesJS.load("particles-js", "/js/particles.json", function() {})
        }
    }),
    TweenMax.set($(".services .bgImg.it"), {
        autoAlpha: 1,
        scale: 1.2,
        force3D: !0
    }),
    TweenMax.set($(".services .bgImg.slabo"), {
        autoAlpha: 0,
        scale: 1,
        force3D: !0
    }),
    TweenMax.set($(".services .bgImg.silno"), {
        autoAlpha: 0,
        scale: 1,
        force3D: !0
    }),
    $(".services a.it").on("mouseover", function() {
        TweenMax.to($(".services .bgImg.it"), 2, {
            autoAlpha: 1,
            scale: 1.2,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.slabo"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.silno"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        })
    }),
    $(".services a.slabo").on("mouseover", function() {
        TweenMax.to($(".services .bgImg.it"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.slabo"), 2, {
            autoAlpha: 1,
            scale: 1.2,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.silno"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        })
    }),
    $(".services a.silno").on("mouseover", function() {
        TweenMax.to($(".services .bgImg.it"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.slabo"), 1, {
            autoAlpha: 0,
            scale: 1,
            force3D: !0
        }),
        TweenMax.to($(".services .bgImg.silno"), 2, {
            autoAlpha: 1,
            scale: 1.2,
            force3D: !0
        })
    });
    var x = new TimelineLite({
        paused: !0
    });
    x.set($(".hamburger-top"), {
        y: 0,
        backgroundColor: "white"
    }),
    x.set($(".hamburger-inner"), {
        y: 0,
        backgroundColor: "white"
    }),
    x.set($(".hamburger-bottom"), {
        backgroundColor: "white"
    }),
    x.to($(".hamburger-top"), .5, {
        y: 20,
        backgroundColor: "#325cc7"
    }, 0),
    x.to($(".hamburger-inner"), .5, {
        y: 10,
        backgroundColor: "#325cc7"
    }, 0),
    x.to($(".hamburger-bottom"), .5, {
        backgroundColor: "#325cc7"
    }, 0),
    x.to($(".hamburger-top"), .5, {
        y: 10
    }, .5),
    x.to($(".hamburger-inner"), .5, {
        y: 0
    }, .5),
    x.to($(".hamburger-bottom"), .5, {
        y: -10
    }, .5),
    x.to($(".hamburger-top"), .5, {
        rotation: 45
    }, 1),
    x.to($(".hamburger-inner"), .5, {
        rotation: -45
    }, 1),
    x.to($(".hamburger-bottom"), .5, {
        rotation: 45
    }, 1),
    $(".hamburger").on("click", function() {
        $(".menu.open").length ? (x.reverse(),
        TweenMax.set($(".menu"), {
            scale: 1,
            autoAlpha: 1
        }),
        TweenMax.to($(".menu"), .5, {
            scale: .9,
            autoAlpha: 0,
            onComplete: f
        })) : (TweenMax.set($(".menu"), {
            scale: .8,
            autoAlpha: 0
        }),
        TweenMax.to($(".menu"), .5, {
            scale: 1,
            autoAlpha: 1
        }),
        TweenMax.staggerFrom($(".menu > ul > li"), .5, {
            y: -20,
            autoAlpha: 0
        }, .1),
        $(".menu").addClass("open"),
        $("body").addClass("open"),
        $(".hamburger").addClass("active"),
        x.play())
    })
}),
$(".collapseButton").on("click", function() {
    TweenMax.staggerFrom($("#collapseItems li").not(".collapse.in"), .5, {
        y: -20,
        autoAlpha: 0
    }, .1)
}),
TweenMax.set($(".down .txt"), {
    autoAlpha: 0
}),
TweenMax.to($(".down .txt"), .5, {
    autoAlpha: 1,
    delay: 5
});
var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
isIE11 && $("html").addClass("ie11");
