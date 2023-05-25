(function (siteglobals) {
	var module = {},
		exports = {};
	var lang = "de";
	("use strict");
	{
		const globals = this;
		const django = globals.django || (globals.django = {});
		django.pluralidx = function (n) {
			const v = n != 1;
			if (typeof v === "boolean") {
				return v ? 1 : 0;
			} else {
				return v;
			}
		};
		django.catalog = django.catalog || {};
		const newcatalog = {
			April: "April",
			August: "August",
			December: "Dezember",
			February: "Februar",
			Fr: "Fr",
			January: "Januar",
			July: "Juli",
			June: "Juni",
			March: "M\u00e4rz",
			May: "Mai",
			Mo: "Mo",
			November: "November",
			October: "Oktober",
			Sa: "Sa",
			September: "September",
			Su: "So",
			Th: "Do",
			Tu: "Di",
			We: "Mi",
			"widget\u0004Back": "Zur\u00fcck",
			"widget\u0004Buy": "In den Warenkorb",
			"widget\u0004Choose a different date": "Anderen Termin ausw\u00e4hlen",
			"widget\u0004Choose a different event": "Andere Veranstaltung ausw\u00e4hlen",
			"widget\u0004Close": "Schlie\u00dfen",
			"widget\u0004Close ticket shop": "Ticket-Shop schlie\u00dfen",
			"widget\u0004Continue": "Fortfahren",
			"widget\u0004FREE": "GRATIS",
			"widget\u0004Load more": "Mehr laden",
			"widget\u0004Next month": "N\u00e4chster Monat",
			"widget\u0004Next week": "N\u00e4chste Woche",
			"widget\u0004Only available with a voucher": "Nur mit Gutschein verf\u00fcgbar",
			"widget\u0004Open seat selection": "Saalplan \u00f6ffnen",
			"widget\u0004Open ticket shop": "Ticket-Shop \u00f6ffnen",
			"widget\u0004Previous month": "Vorheriger Monat",
			"widget\u0004Previous week": "Vorherige Woche",
			"widget\u0004Redeem": "Einl\u00f6sen",
			"widget\u0004Redeem a voucher": "Gutschein einl\u00f6sen",
			"widget\u0004Register": "Anmelden",
			"widget\u0004Reserved": "Reserviert",
			"widget\u0004Resume checkout": "Kauf fortsetzen",
			"widget\u0004See variations": "Varianten zeigen",
			"widget\u0004Sold out": "Ausverkauft",
			"widget\u0004The cart could not be created. Please try again later": "Der Warenkorb konnte nicht erstellt werden. Bitte erneut versuchen",
			"widget\u0004The ticket shop could not be loaded.": "Der Ticket-Shop konnte nicht geladen werden.",
			"widget\u0004There are currently a lot of users in this ticket shop. Please open the shop in a new tab to continue.":
				"Es sind derzeit sehr viele Benutzer in diesem Ticketshop. Bitte \u00f6ffnen Sie diesen Ticketshop in einem neuen Tab um fortzufahren.",
			"widget\u0004Voucher code": "Gutscheincode",
			"widget\u0004Waiting list": "Warteliste",
			'widget\u0004We could not create your cart, since there are currently too many users in this ticket shop. Please click "Continue" to retry in a new tab.':
				'Wir konnten Ihren Warenkorb nicht erstellen, da derzeit zu viele Nutzer in diesem Ticketshop sind. Bitte klicken Sie "Weiter" um es in einem neuen Tab erneut zu versuchen.',
			"widget\u0004You currently have an active cart for this event. If you select more products, they will be added to your existing cart.":
				"Sie haben einen aktiven Warenkorb f\u00fcr diese Veranstaltung. Wenn Sie mehr Produkte ausw\u00e4hlen, werden diese zu Ihrem Warenkorb hinzugef\u00fcgt.",
			"widget\u0004currently available: %s": "aktuell verf\u00fcgbar: %s",
			"widget\u0004from %(currency)s %(price)s": "ab %(currency)s %(price)s",
			"widget\u0004incl. %(rate)s% %(taxname)s": "inkl. %(rate)s% %(taxname)s",
			"widget\u0004incl. taxes": "inkl. Steuern",
			"widget\u0004minimum amount to order: %s": "minimale Bestellmenge: %s",
			"widget\u0004plus %(rate)s% %(taxname)s": "zzgl. %(rate)s% %(taxname)s",
			"widget\u0004plus taxes": "zzgl. Steuern",
		};
		for (var key in newcatalog) {
			django.catalog[key] = newcatalog[key];
		}
		if (!django.jsi18n_initialized) {
			django.gettext = function (msgid) {
				const value = django.catalog[msgid];
				if (typeof value === "undefined") {
					return msgid;
				} else {
					return typeof value === "string" ? value : value[0];
				}
			};
			django.ngettext = function (singular, plural, count) {
				const value = django.catalog[singular];
				if (typeof value === "undefined") {
					return count == 1 ? singular : plural;
				} else {
					return value.constructor === Array ? value[django.pluralidx(count)] : value;
				}
			};
			django.gettext_noop = function (msgid) {
				return msgid;
			};
			django.pgettext = function (context, msgid) {
				let value = django.gettext(context + "\x04" + msgid);
				if (-1 != value.indexOf("\x04")) {
					value = msgid;
				}
				return value;
			};
			django.npgettext = function (context, singular, plural, count) {
				let value = django.ngettext(context + "\x04" + singular, context + "\x04" + plural, count);
				if (-1 != value.indexOf("\x04")) {
					value = django.ngettext(singular, plural, count);
				}
				return value;
			};
			django.interpolate = function (fmt, obj, named) {
				if (named) {
					return fmt.replace(/%\(\w+\)s/g, function (match) {
						return String(obj[match.slice(2, -2)]);
					});
				} else {
					return fmt.replace(/%s/g, function (match) {
						return String(obj.shift());
					});
				}
			};
			django.formats = {
				DATETIME_FORMAT: "j. F Y H:i",
				DATETIME_INPUT_FORMATS: ["%d.%m.%Y %H:%M:%S", "%d.%m.%Y %H:%M:%S.%f", "%d.%m.%Y %H:%M", "%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%d %H:%M", "%Y-%m-%d"],
				DATE_FORMAT: "j. F Y",
				DATE_INPUT_FORMATS: ["%d.%m.%Y", "%d.%m.%y", "%Y-%m-%d"],
				DECIMAL_SEPARATOR: ",",
				FIRST_DAY_OF_WEEK: 1,
				MONTH_DAY_FORMAT: "j. F",
				NUMBER_GROUPING: 3,
				SHORT_DATETIME_FORMAT: "d.m.Y H:i",
				SHORT_DATE_FORMAT: "d.m.Y",
				THOUSAND_SEPARATOR: ".",
				TIME_FORMAT: "H:i",
				TIME_INPUT_FORMATS: ["%H:%M:%S", "%H:%M:%S.%f", "%H:%M"],
				YEAR_MONTH_FORMAT: "F Y",
			};
			django.get_format = function (format_type) {
				const value = django.formats[format_type];
				if (typeof value === "undefined") {
					return format_type;
				} else {
					return value;
				}
			};
			globals.pluralidx = django.pluralidx;
			globals.gettext = django.gettext;
			globals.ngettext = django.ngettext;
			globals.gettext_noop = django.gettext_noop;
			globals.pgettext = django.pgettext;
			globals.npgettext = django.npgettext;
			globals.interpolate = django.interpolate;
			globals.get_format = django.get_format;
			django.jsi18n_initialized = true;
		}
	}
	/*!
     * Vue.js v2.7.14
     * (c) 2014-2022 Evan You
     * Released under the MIT License.
     */ !(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Vue = e());
	})(this, function () {
		"use strict";
		var t = Object.freeze({}),
			e = Array.isArray;
		function n(t) {
			return null == t;
		}
		function r(t) {
			return null != t;
		}
		function o(t) {
			return !0 === t;
		}
		function i(t) {
			return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
		}
		function a(t) {
			return "function" == typeof t;
		}
		function s(t) {
			return null !== t && "object" == typeof t;
		}
		var c = Object.prototype.toString;
		function u(t) {
			return "[object Object]" === c.call(t);
		}
		function l(t) {
			var e = parseFloat(String(t));
			return e >= 0 && Math.floor(e) === e && isFinite(t);
		}
		function f(t) {
			return r(t) && "function" == typeof t.then && "function" == typeof t.catch;
		}
		function d(t) {
			return null == t ? "" : Array.isArray(t) || (u(t) && t.toString === c) ? JSON.stringify(t, null, 2) : String(t);
		}
		function p(t) {
			var e = parseFloat(t);
			return isNaN(e) ? t : e;
		}
		function v(t, e) {
			for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
			return e
				? function (t) {
					return n[t.toLowerCase()];
				}
				: function (t) {
					return n[t];
				};
		}
		var h = v("slot,component", !0),
			m = v("key,ref,slot,slot-scope,is");
		function g(t, e) {
			var n = t.length;
			if (n) {
				if (e === t[n - 1]) return void (t.length = n - 1);
				var r = t.indexOf(e);
				if (r > -1) return t.splice(r, 1);
			}
		}
		var y = Object.prototype.hasOwnProperty;
		function _(t, e) {
			return y.call(t, e);
		}
		function b(t) {
			var e = Object.create(null);
			return function (n) {
				return e[n] || (e[n] = t(n));
			};
		}
		var $ = /-(\w)/g,
			w = b(function (t) {
				return t.replace($, function (t, e) {
					return e ? e.toUpperCase() : "";
				});
			}),
			x = b(function (t) {
				return t.charAt(0).toUpperCase() + t.slice(1);
			}),
			C = /\B([A-Z])/g,
			k = b(function (t) {
				return t.replace(C, "-$1").toLowerCase();
			});
		var S = Function.prototype.bind
			? function (t, e) {
				return t.bind(e);
			}
			: function (t, e) {
				function n(n) {
					var r = arguments.length;
					return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
				}
				return (n._length = t.length), n;
			};
		function O(t, e) {
			e = e || 0;
			for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
			return r;
		}
		function T(t, e) {
			for (var n in e) t[n] = e[n];
			return t;
		}
		function A(t) {
			for (var e = {}, n = 0; n < t.length; n++) t[n] && T(e, t[n]);
			return e;
		}
		function j(t, e, n) {}
		var E = function (t, e, n) {
				return !1;
			},
			N = function (t) {
				return t;
			};
		function P(t, e) {
			if (t === e) return !0;
			var n = s(t),
				r = s(e);
			if (!n || !r) return !n && !r && String(t) === String(e);
			try {
				var o = Array.isArray(t),
					i = Array.isArray(e);
				if (o && i)
					return (
						t.length === e.length &&
						t.every(function (t, n) {
							return P(t, e[n]);
						})
					);
				if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
				if (o || i) return !1;
				var a = Object.keys(t),
					c = Object.keys(e);
				return (
					a.length === c.length &&
					a.every(function (n) {
						return P(t[n], e[n]);
					})
				);
			} catch (t) {
				return !1;
			}
		}
		function D(t, e) {
			for (var n = 0; n < t.length; n++) if (P(t[n], e)) return n;
			return -1;
		}
		function M(t) {
			var e = !1;
			return function () {
				e || ((e = !0), t.apply(this, arguments));
			};
		}
		function I(t, e) {
			return t === e ? 0 === t && 1 / t != 1 / e : t == t || e == e;
		}
		var L = "data-server-rendered",
			R = ["component", "directive", "filter"],
			F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"],
			H = {
				optionMergeStrategies: Object.create(null),
				silent: !1,
				productionTip: !1,
				devtools: !1,
				performance: !1,
				errorHandler: null,
				warnHandler: null,
				ignoredElements: [],
				keyCodes: Object.create(null),
				isReservedTag: E,
				isReservedAttr: E,
				isUnknownElement: E,
				getTagNamespace: j,
				parsePlatformTagName: N,
				mustUseProp: E,
				async: !0,
				_lifecycleHooks: F,
			},
			B = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
		function U(t) {
			var e = (t + "").charCodeAt(0);
			return 36 === e || 95 === e;
		}
		function z(t, e, n, r) {
			Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
		}
		var V = new RegExp("[^".concat(B.source, ".$_\\d]"));
		var K = "__proto__" in {},
			J = "undefined" != typeof window,
			q = J && window.navigator.userAgent.toLowerCase(),
			W = q && /msie|trident/.test(q),
			Z = q && q.indexOf("msie 9.0") > 0,
			G = q && q.indexOf("edge/") > 0;
		q && q.indexOf("android");
		var X = q && /iphone|ipad|ipod|ios/.test(q);
		q && /chrome\/\d+/.test(q), q && /phantomjs/.test(q);
		var Y,
			Q = q && q.match(/firefox\/(\d+)/),
			tt = {}.watch,
			et = !1;
		if (J)
			try {
				var nt = {};
				Object.defineProperty(nt, "passive", {
					get: function () {
						et = !0;
					},
				}),
					window.addEventListener("test-passive", null, nt);
			} catch (t) {}
		var rt = function () {
				return void 0 === Y && (Y = !J && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), Y;
			},
			ot = J && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
		function it(t) {
			return "function" == typeof t && /native code/.test(t.toString());
		}
		var at,
			st = "undefined" != typeof Symbol && it(Symbol) && "undefined" != typeof Reflect && it(Reflect.ownKeys);
		at =
			"undefined" != typeof Set && it(Set)
				? Set
				: (function () {
					function t() {
						this.set = Object.create(null);
					}
					return (
						(t.prototype.has = function (t) {
							return !0 === this.set[t];
						}),
							(t.prototype.add = function (t) {
								this.set[t] = !0;
							}),
							(t.prototype.clear = function () {
								this.set = Object.create(null);
							}),
							t
					);
				})();
		var ct = null;
		function ut(t) {
			void 0 === t && (t = null), t || (ct && ct._scope.off()), (ct = t), t && t._scope.on();
		}
		var lt = (function () {
				function t(t, e, n, r, o, i, a, s) {
					(this.tag = t),
						(this.data = e),
						(this.children = n),
						(this.text = r),
						(this.elm = o),
						(this.ns = void 0),
						(this.context = i),
						(this.fnContext = void 0),
						(this.fnOptions = void 0),
						(this.fnScopeId = void 0),
						(this.key = e && e.key),
						(this.componentOptions = a),
						(this.componentInstance = void 0),
						(this.parent = void 0),
						(this.raw = !1),
						(this.isStatic = !1),
						(this.isRootInsert = !0),
						(this.isComment = !1),
						(this.isCloned = !1),
						(this.isOnce = !1),
						(this.asyncFactory = s),
						(this.asyncMeta = void 0),
						(this.isAsyncPlaceholder = !1);
				}
				return (
					Object.defineProperty(t.prototype, "child", {
						get: function () {
							return this.componentInstance;
						},
						enumerable: !1,
						configurable: !0,
					}),
						t
				);
			})(),
			ft = function (t) {
				void 0 === t && (t = "");
				var e = new lt();
				return (e.text = t), (e.isComment = !0), e;
			};
		function dt(t) {
			return new lt(void 0, void 0, void 0, String(t));
		}
		function pt(t) {
			var e = new lt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
			return (
				(e.ns = t.ns), (e.isStatic = t.isStatic), (e.key = t.key), (e.isComment = t.isComment), (e.fnContext = t.fnContext), (e.fnOptions = t.fnOptions), (e.fnScopeId = t.fnScopeId), (e.asyncMeta = t.asyncMeta), (e.isCloned = !0), e
			);
		}
		var vt = 0,
			ht = [],
			mt = (function () {
				function t() {
					(this._pending = !1), (this.id = vt++), (this.subs = []);
				}
				return (
					(t.prototype.addSub = function (t) {
						this.subs.push(t);
					}),
						(t.prototype.removeSub = function (t) {
							(this.subs[this.subs.indexOf(t)] = null), this._pending || ((this._pending = !0), ht.push(this));
						}),
						(t.prototype.depend = function (e) {
							t.target && t.target.addDep(this);
						}),
						(t.prototype.notify = function (t) {
							for (
								var e = this.subs.filter(function (t) {
										return t;
									}),
									n = 0,
									r = e.length;
								n < r;
								n++
							) {
								e[n].update();
							}
						}),
						t
				);
			})();
		mt.target = null;
		var gt = [];
		function yt(t) {
			gt.push(t), (mt.target = t);
		}
		function _t() {
			gt.pop(), (mt.target = gt[gt.length - 1]);
		}
		var bt = Array.prototype,
			$t = Object.create(bt);
		["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
			var e = bt[t];
			z($t, t, function () {
				for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				var o,
					i = e.apply(this, n),
					a = this.__ob__;
				switch (t) {
					case "push":
					case "unshift":
						o = n;
						break;
					case "splice":
						o = n.slice(2);
				}
				return o && a.observeArray(o), a.dep.notify(), i;
			});
		});
		var wt = Object.getOwnPropertyNames($t),
			xt = {},
			Ct = !0;
		function kt(t) {
			Ct = t;
		}
		var St = { notify: j, depend: j, addSub: j, removeSub: j },
			Ot = (function () {
				function t(t, n, r) {
					if ((void 0 === n && (n = !1), void 0 === r && (r = !1), (this.value = t), (this.shallow = n), (this.mock = r), (this.dep = r ? St : new mt()), (this.vmCount = 0), z(t, "__ob__", this), e(t))) {
						if (!r)
							if (K) t.__proto__ = $t;
							else
								for (var o = 0, i = wt.length; o < i; o++) {
									z(t, (s = wt[o]), $t[s]);
								}
						n || this.observeArray(t);
					} else {
						var a = Object.keys(t);
						for (o = 0; o < a.length; o++) {
							var s;
							At(t, (s = a[o]), xt, void 0, n, r);
						}
					}
				}
				return (
					(t.prototype.observeArray = function (t) {
						for (var e = 0, n = t.length; e < n; e++) Tt(t[e], !1, this.mock);
					}),
						t
				);
			})();
		function Tt(t, n, r) {
			return t && _(t, "__ob__") && t.__ob__ instanceof Ot ? t.__ob__ : !Ct || (!r && rt()) || (!e(t) && !u(t)) || !Object.isExtensible(t) || t.__v_skip || Ft(t) || t instanceof lt ? void 0 : new Ot(t, n, r);
		}
		function At(t, n, r, o, i, a) {
			var s = new mt(),
				c = Object.getOwnPropertyDescriptor(t, n);
			if (!c || !1 !== c.configurable) {
				var u = c && c.get,
					l = c && c.set;
				(u && !l) || (r !== xt && 2 !== arguments.length) || (r = t[n]);
				var f = !i && Tt(r, !1, a);
				return (
					Object.defineProperty(t, n, {
						enumerable: !0,
						configurable: !0,
						get: function () {
							var n = u ? u.call(t) : r;
							return mt.target && (s.depend(), f && (f.dep.depend(), e(n) && Nt(n))), Ft(n) && !i ? n.value : n;
						},
						set: function (e) {
							var n = u ? u.call(t) : r;
							if (I(n, e)) {
								if (l) l.call(t, e);
								else {
									if (u) return;
									if (!i && Ft(n) && !Ft(e)) return void (n.value = e);
									r = e;
								}
								(f = !i && Tt(e, !1, a)), s.notify();
							}
						},
					}),
						s
				);
			}
		}
		function jt(t, n, r) {
			if (!Lt(t)) {
				var o = t.__ob__;
				return e(t) && l(n)
					? ((t.length = Math.max(t.length, n)), t.splice(n, 1, r), o && !o.shallow && o.mock && Tt(r, !1, !0), r)
					: n in t && !(n in Object.prototype)
						? ((t[n] = r), r)
						: t._isVue || (o && o.vmCount)
							? r
							: o
								? (At(o.value, n, r, void 0, o.shallow, o.mock), o.dep.notify(), r)
								: ((t[n] = r), r);
			}
		}
		function Et(t, n) {
			if (e(t) && l(n)) t.splice(n, 1);
			else {
				var r = t.__ob__;
				t._isVue || (r && r.vmCount) || Lt(t) || (_(t, n) && (delete t[n], r && r.dep.notify()));
			}
		}
		function Nt(t) {
			for (var n = void 0, r = 0, o = t.length; r < o; r++) (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), e(n) && Nt(n);
		}
		function Pt(t) {
			return Dt(t, !0), z(t, "__v_isShallow", !0), t;
		}
		function Dt(t, e) {
			Lt(t) || Tt(t, e, rt());
		}
		function Mt(t) {
			return Lt(t) ? Mt(t.__v_raw) : !(!t || !t.__ob__);
		}
		function It(t) {
			return !(!t || !t.__v_isShallow);
		}
		function Lt(t) {
			return !(!t || !t.__v_isReadonly);
		}
		var Rt = "__v_isRef";
		function Ft(t) {
			return !(!t || !0 !== t.__v_isRef);
		}
		function Ht(t, e) {
			if (Ft(t)) return t;
			var n = {};
			return z(n, Rt, !0), z(n, "__v_isShallow", e), z(n, "dep", At(n, "value", t, null, e, rt())), n;
		}
		function Bt(t, e, n) {
			Object.defineProperty(t, n, {
				enumerable: !0,
				configurable: !0,
				get: function () {
					var t = e[n];
					if (Ft(t)) return t.value;
					var r = t && t.__ob__;
					return r && r.dep.depend(), t;
				},
				set: function (t) {
					var r = e[n];
					Ft(r) && !Ft(t) ? (r.value = t) : (e[n] = t);
				},
			});
		}
		function Ut(t, e, n) {
			var r = t[e];
			if (Ft(r)) return r;
			var o = {
				get value() {
					var r = t[e];
					return void 0 === r ? n : r;
				},
				set value(n) {
					t[e] = n;
				},
			};
			return z(o, Rt, !0), o;
		}
		function zt(t) {
			return Vt(t, !1);
		}
		function Vt(t, e) {
			if (!u(t)) return t;
			if (Lt(t)) return t;
			var n = e ? "__v_rawToShallowReadonly" : "__v_rawToReadonly",
				r = t[n];
			if (r) return r;
			var o = Object.create(Object.getPrototypeOf(t));
			z(t, n, o), z(o, "__v_isReadonly", !0), z(o, "__v_raw", t), Ft(t) && z(o, Rt, !0), (e || It(t)) && z(o, "__v_isShallow", !0);
			for (var i = Object.keys(t), a = 0; a < i.length; a++) Kt(o, t, i[a], e);
			return o;
		}
		function Kt(t, e, n, r) {
			Object.defineProperty(t, n, {
				enumerable: !0,
				configurable: !0,
				get: function () {
					var t = e[n];
					return r || !u(t) ? t : zt(t);
				},
				set: function () {},
			});
		}
		var Jt = b(function (t) {
			var e = "&" === t.charAt(0),
				n = "~" === (t = e ? t.slice(1) : t).charAt(0),
				r = "!" === (t = n ? t.slice(1) : t).charAt(0);
			return { name: (t = r ? t.slice(1) : t), once: n, capture: r, passive: e };
		});
		function qt(t, n) {
			function r() {
				var t = r.fns;
				if (!e(t)) return dn(t, null, arguments, n, "v-on handler");
				for (var o = t.slice(), i = 0; i < o.length; i++) dn(o[i], null, arguments, n, "v-on handler");
			}
			return (r.fns = t), r;
		}
		function Wt(t, e, r, i, a, s) {
			var c, u, l, f;
			for (c in t)
				(u = t[c]),
					(l = e[c]),
					(f = Jt(c)),
				n(u) || (n(l) ? (n(u.fns) && (u = t[c] = qt(u, s)), o(f.once) && (u = t[c] = a(f.name, u, f.capture)), r(f.name, u, f.capture, f.passive, f.params)) : u !== l && ((l.fns = u), (t[c] = l)));
			for (c in e) n(t[c]) && i((f = Jt(c)).name, e[c], f.capture);
		}
		function Zt(t, e, i) {
			var a;
			t instanceof lt && (t = t.data.hook || (t.data.hook = {}));
			var s = t[e];
			function c() {
				i.apply(this, arguments), g(a.fns, c);
			}
			n(s) ? (a = qt([c])) : r(s.fns) && o(s.merged) ? (a = s).fns.push(c) : (a = qt([s, c])), (a.merged = !0), (t[e] = a);
		}
		function Gt(t, e, n, o, i) {
			if (r(e)) {
				if (_(e, n)) return (t[n] = e[n]), i || delete e[n], !0;
				if (_(e, o)) return (t[n] = e[o]), i || delete e[o], !0;
			}
			return !1;
		}
		function Xt(t) {
			return i(t) ? [dt(t)] : e(t) ? Qt(t) : void 0;
		}
		function Yt(t) {
			return r(t) && r(t.text) && !1 === t.isComment;
		}
		function Qt(t, a) {
			var s,
				c,
				u,
				l,
				f = [];
			for (s = 0; s < t.length; s++)
				n((c = t[s])) ||
				"boolean" == typeof c ||
				((l = f[(u = f.length - 1)]),
					e(c)
						? c.length > 0 && (Yt((c = Qt(c, "".concat(a || "", "_").concat(s)))[0]) && Yt(l) && ((f[u] = dt(l.text + c[0].text)), c.shift()), f.push.apply(f, c))
						: i(c)
							? Yt(l)
								? (f[u] = dt(l.text + c))
								: "" !== c && f.push(dt(c))
							: Yt(c) && Yt(l)
								? (f[u] = dt(l.text + c.text))
								: (o(t._isVList) && r(c.tag) && n(c.key) && r(a) && (c.key = "__vlist".concat(a, "_").concat(s, "__")), f.push(c)));
			return f;
		}
		function te(t, n, c, u, l, f) {
			return (
				(e(c) || i(c)) && ((l = u), (u = c), (c = void 0)),
				o(f) && (l = 2),
					(function (t, n, o, i, c) {
						if (r(o) && r(o.__ob__)) return ft();
						r(o) && r(o.is) && (n = o.is);
						if (!n) return ft();
						e(i) && a(i[0]) && (((o = o || {}).scopedSlots = { default: i[0] }), (i.length = 0));
						2 === c
							? (i = Xt(i))
							: 1 === c &&
							(i = (function (t) {
								for (var n = 0; n < t.length; n++) if (e(t[n])) return Array.prototype.concat.apply([], t);
								return t;
							})(i));
						var u, l;
						if ("string" == typeof n) {
							var f = void 0;
							(l = (t.$vnode && t.$vnode.ns) || H.getTagNamespace(n)),
								(u = H.isReservedTag(n) ? new lt(H.parsePlatformTagName(n), o, i, void 0, void 0, t) : (o && o.pre) || !r((f = yr(t.$options, "components", n))) ? new lt(n, o, i, void 0, void 0, t) : cr(f, o, t, i, n));
						} else u = cr(n, o, t, i);
						return e(u)
							? u
							: r(u)
								? (r(l) && ee(u, l),
								r(o) &&
								(function (t) {
									s(t.style) && Bn(t.style);
									s(t.class) && Bn(t.class);
								})(o),
									u)
								: ft();
					})(t, n, c, u, l)
			);
		}
		function ee(t, e, i) {
			if (((t.ns = e), "foreignObject" === t.tag && ((e = void 0), (i = !0)), r(t.children)))
				for (var a = 0, s = t.children.length; a < s; a++) {
					var c = t.children[a];
					r(c.tag) && (n(c.ns) || (o(i) && "svg" !== c.tag)) && ee(c, e, i);
				}
		}
		function ne(t, n) {
			var o,
				i,
				a,
				c,
				u = null;
			if (e(t) || "string" == typeof t) for (u = new Array(t.length), o = 0, i = t.length; o < i; o++) u[o] = n(t[o], o);
			else if ("number" == typeof t) for (u = new Array(t), o = 0; o < t; o++) u[o] = n(o + 1, o);
			else if (s(t))
				if (st && t[Symbol.iterator]) {
					u = [];
					for (var l = t[Symbol.iterator](), f = l.next(); !f.done; ) u.push(n(f.value, u.length)), (f = l.next());
				} else for (a = Object.keys(t), u = new Array(a.length), o = 0, i = a.length; o < i; o++) (c = a[o]), (u[o] = n(t[c], c, o));
			return r(u) || (u = []), (u._isVList = !0), u;
		}
		function re(t, e, n, r) {
			var o,
				i = this.$scopedSlots[t];
			i ? ((n = n || {}), r && (n = T(T({}, r), n)), (o = i(n) || (a(e) ? e() : e))) : (o = this.$slots[t] || (a(e) ? e() : e));
			var s = n && n.slot;
			return s ? this.$createElement("template", { slot: s }, o) : o;
		}
		function oe(t) {
			return yr(this.$options, "filters", t) || N;
		}
		function ie(t, n) {
			return e(t) ? -1 === t.indexOf(n) : t !== n;
		}
		function ae(t, e, n, r, o) {
			var i = H.keyCodes[e] || n;
			return o && r && !H.keyCodes[e] ? ie(o, r) : i ? ie(i, t) : r ? k(r) !== e : void 0 === t;
		}
		function se(t, n, r, o, i) {
			if (r)
				if (s(r)) {
					e(r) && (r = A(r));
					var a = void 0,
						c = function (e) {
							if ("class" === e || "style" === e || m(e)) a = t;
							else {
								var s = t.attrs && t.attrs.type;
								a = o || H.mustUseProp(n, s, e) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
							}
							var c = w(e),
								u = k(e);
							c in a ||
							u in a ||
							((a[e] = r[e]),
							i &&
							((t.on || (t.on = {}))["update:".concat(e)] = function (t) {
								r[e] = t;
							}));
						};
					for (var u in r) c(u);
				} else;
			return t;
		}
		function ce(t, e) {
			var n = this._staticTrees || (this._staticTrees = []),
				r = n[t];
			return (r && !e) || le((r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, this._c, this)), "__static__".concat(t), !1), r;
		}
		function ue(t, e, n) {
			return le(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t;
		}
		function le(t, n, r) {
			if (e(t)) for (var o = 0; o < t.length; o++) t[o] && "string" != typeof t[o] && fe(t[o], "".concat(n, "_").concat(o), r);
			else fe(t, n, r);
		}
		function fe(t, e, n) {
			(t.isStatic = !0), (t.key = e), (t.isOnce = n);
		}
		function de(t, e) {
			if (e)
				if (u(e)) {
					var n = (t.on = t.on ? T({}, t.on) : {});
					for (var r in e) {
						var o = n[r],
							i = e[r];
						n[r] = o ? [].concat(o, i) : i;
					}
				} else;
			return t;
		}
		function pe(t, n, r, o) {
			n = n || { $stable: !r };
			for (var i = 0; i < t.length; i++) {
				var a = t[i];
				e(a) ? pe(a, n, r) : a && (a.proxy && (a.fn.proxy = !0), (n[a.key] = a.fn));
			}
			return o && (n.$key = o), n;
		}
		function ve(t, e) {
			for (var n = 0; n < e.length; n += 2) {
				var r = e[n];
				"string" == typeof r && r && (t[e[n]] = e[n + 1]);
			}
			return t;
		}
		function he(t, e) {
			return "string" == typeof t ? e + t : t;
		}
		function me(t) {
			(t._o = ue), (t._n = p), (t._s = d), (t._l = ne), (t._t = re), (t._q = P), (t._i = D), (t._m = ce), (t._f = oe), (t._k = ae), (t._b = se), (t._v = dt), (t._e = ft), (t._u = pe), (t._g = de), (t._d = ve), (t._p = he);
		}
		function ge(t, e) {
			if (!t || !t.length) return {};
			for (var n = {}, r = 0, o = t.length; r < o; r++) {
				var i = t[r],
					a = i.data;
				if ((a && a.attrs && a.attrs.slot && delete a.attrs.slot, (i.context !== e && i.fnContext !== e) || !a || null == a.slot)) (n.default || (n.default = [])).push(i);
				else {
					var s = a.slot,
						c = n[s] || (n[s] = []);
					"template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
				}
			}
			for (var u in n) n[u].every(ye) && delete n[u];
			return n;
		}
		function ye(t) {
			return (t.isComment && !t.asyncFactory) || " " === t.text;
		}
		function _e(t) {
			return t.isComment && t.asyncFactory;
		}
		function be(e, n, r, o) {
			var i,
				a = Object.keys(r).length > 0,
				s = n ? !!n.$stable : !a,
				c = n && n.$key;
			if (n) {
				if (n._normalized) return n._normalized;
				if (s && o && o !== t && c === o.$key && !a && !o.$hasNormal) return o;
				for (var u in ((i = {}), n)) n[u] && "$" !== u[0] && (i[u] = $e(e, r, u, n[u]));
			} else i = {};
			for (var l in r) l in i || (i[l] = we(r, l));
			return n && Object.isExtensible(n) && (n._normalized = i), z(i, "$stable", s), z(i, "$key", c), z(i, "$hasNormal", a), i;
		}
		function $e(t, n, r, o) {
			var i = function () {
				var n = ct;
				ut(t);
				var r = arguments.length ? o.apply(null, arguments) : o({}),
					i = (r = r && "object" == typeof r && !e(r) ? [r] : Xt(r)) && r[0];
				return ut(n), r && (!i || (1 === r.length && i.isComment && !_e(i))) ? void 0 : r;
			};
			return o.proxy && Object.defineProperty(n, r, { get: i, enumerable: !0, configurable: !0 }), i;
		}
		function we(t, e) {
			return function () {
				return t[e];
			};
		}
		function xe(e) {
			return {
				get attrs() {
					if (!e._attrsProxy) {
						var n = (e._attrsProxy = {});
						z(n, "_v_attr_proxy", !0), Ce(n, e.$attrs, t, e, "$attrs");
					}
					return e._attrsProxy;
				},
				get listeners() {
					e._listenersProxy || Ce((e._listenersProxy = {}), e.$listeners, t, e, "$listeners");
					return e._listenersProxy;
				},
				get slots() {
					return (function (t) {
						t._slotsProxy || Se((t._slotsProxy = {}), t.$scopedSlots);
						return t._slotsProxy;
					})(e);
				},
				emit: S(e.$emit, e),
				expose: function (t) {
					t &&
					Object.keys(t).forEach(function (n) {
						return Bt(e, t, n);
					});
				},
			};
		}
		function Ce(t, e, n, r, o) {
			var i = !1;
			for (var a in e) a in t ? e[a] !== n[a] && (i = !0) : ((i = !0), ke(t, a, r, o));
			for (var a in t) a in e || ((i = !0), delete t[a]);
			return i;
		}
		function ke(t, e, n, r) {
			Object.defineProperty(t, e, {
				enumerable: !0,
				configurable: !0,
				get: function () {
					return n[r][e];
				},
			});
		}
		function Se(t, e) {
			for (var n in e) t[n] = e[n];
			for (var n in t) n in e || delete t[n];
		}
		function Oe() {
			var t = ct;
			return t._setupContext || (t._setupContext = xe(t));
		}
		var Te,
			Ae = null;
		function je(t, e) {
			return (t.__esModule || (st && "Module" === t[Symbol.toStringTag])) && (t = t.default), s(t) ? e.extend(t) : t;
		}
		function Ee(t) {
			if (e(t))
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					if (r(o) && (r(o.componentOptions) || _e(o))) return o;
				}
		}
		function Ne(t, e) {
			Te.$on(t, e);
		}
		function Pe(t, e) {
			Te.$off(t, e);
		}
		function De(t, e) {
			var n = Te;
			return function r() {
				var o = e.apply(null, arguments);
				null !== o && n.$off(t, r);
			};
		}
		function Me(t, e, n) {
			(Te = t), Wt(e, n || {}, Ne, Pe, De, t), (Te = void 0);
		}
		var Ie = null;
		function Le(t) {
			var e = Ie;
			return (
				(Ie = t),
					function () {
						Ie = e;
					}
			);
		}
		function Re(t) {
			for (; t && (t = t.$parent); ) if (t._inactive) return !0;
			return !1;
		}
		function Fe(t, e) {
			if (e) {
				if (((t._directInactive = !1), Re(t))) return;
			} else if (t._directInactive) return;
			if (t._inactive || null === t._inactive) {
				t._inactive = !1;
				for (var n = 0; n < t.$children.length; n++) Fe(t.$children[n]);
				Be(t, "activated");
			}
		}
		function He(t, e) {
			if (!((e && ((t._directInactive = !0), Re(t))) || t._inactive)) {
				t._inactive = !0;
				for (var n = 0; n < t.$children.length; n++) He(t.$children[n]);
				Be(t, "deactivated");
			}
		}
		function Be(t, e, n, r) {
			void 0 === r && (r = !0), yt();
			var o = ct;
			r && ut(t);
			var i = t.$options[e],
				a = "".concat(e, " hook");
			if (i) for (var s = 0, c = i.length; s < c; s++) dn(i[s], t, n || null, t, a);
			t._hasHookEvent && t.$emit("hook:" + e), r && ut(o), _t();
		}
		var Ue = [],
			ze = [],
			Ve = {},
			Ke = !1,
			Je = !1,
			qe = 0;
		var We = 0,
			Ze = Date.now;
		if (J && !W) {
			var Ge = window.performance;
			Ge &&
			"function" == typeof Ge.now &&
			Ze() > document.createEvent("Event").timeStamp &&
			(Ze = function () {
				return Ge.now();
			});
		}
		var Xe = function (t, e) {
			if (t.post) {
				if (!e.post) return 1;
			} else if (e.post) return -1;
			return t.id - e.id;
		};
		function Ye() {
			var t, e;
			for (We = Ze(), Je = !0, Ue.sort(Xe), qe = 0; qe < Ue.length; qe++) (t = Ue[qe]).before && t.before(), (e = t.id), (Ve[e] = null), t.run();
			var n = ze.slice(),
				r = Ue.slice();
			(qe = Ue.length = ze.length = 0),
				(Ve = {}),
				(Ke = Je = !1),
				(function (t) {
					for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Fe(t[e], !0);
				})(n),
				(function (t) {
					var e = t.length;
					for (; e--; ) {
						var n = t[e],
							r = n.vm;
						r && r._watcher === n && r._isMounted && !r._isDestroyed && Be(r, "updated");
					}
				})(r),
				(function () {
					for (var t = 0; t < ht.length; t++) {
						var e = ht[t];
						(e.subs = e.subs.filter(function (t) {
							return t;
						})),
							(e._pending = !1);
					}
					ht.length = 0;
				})(),
			ot && H.devtools && ot.emit("flush");
		}
		function Qe(t) {
			var e = t.id;
			if (null == Ve[e] && (t !== mt.target || !t.noRecurse)) {
				if (((Ve[e] = !0), Je)) {
					for (var n = Ue.length - 1; n > qe && Ue[n].id > t.id; ) n--;
					Ue.splice(n + 1, 0, t);
				} else Ue.push(t);
				Ke || ((Ke = !0), Cn(Ye));
			}
		}
		var tn = "watcher",
			en = "".concat(tn, " callback"),
			nn = "".concat(tn, " getter"),
			rn = "".concat(tn, " cleanup");
		function on(t, e) {
			return cn(t, null, { flush: "post" });
		}
		var an,
			sn = {};
		function cn(n, r, o) {
			var i = void 0 === o ? t : o,
				s = i.immediate,
				c = i.deep,
				u = i.flush,
				l = void 0 === u ? "pre" : u;
			i.onTrack, i.onTrigger;
			var f,
				d,
				p = ct,
				v = function (t, e, n) {
					return void 0 === n && (n = null), dn(t, null, n, p, e);
				},
				h = !1,
				m = !1;
			if (
				(Ft(n)
					? ((f = function () {
						return n.value;
					}),
						(h = It(n)))
					: Mt(n)
						? ((f = function () {
							return n.__ob__.dep.depend(), n;
						}),
							(c = !0))
						: e(n)
							? ((m = !0),
								(h = n.some(function (t) {
									return Mt(t) || It(t);
								})),
								(f = function () {
									return n.map(function (t) {
										return Ft(t) ? t.value : Mt(t) ? Bn(t) : a(t) ? v(t, nn) : void 0;
									});
								}))
							: (f = a(n)
								? r
									? function () {
										return v(n, nn);
									}
									: function () {
										if (!p || !p._isDestroyed) return d && d(), v(n, tn, [y]);
									}
								: j),
				r && c)
			) {
				var g = f;
				f = function () {
					return Bn(g());
				};
			}
			var y = function (t) {
				d = _.onStop = function () {
					v(t, rn);
				};
			};
			if (rt()) return (y = j), r ? s && v(r, en, [f(), m ? [] : void 0, y]) : f(), j;
			var _ = new Vn(ct, f, j, { lazy: !0 });
			_.noRecurse = !r;
			var b = m ? [] : sn;
			return (
				(_.run = function () {
					if (_.active)
						if (r) {
							var t = _.get();
							(c ||
								h ||
								(m
									? t.some(function (t, e) {
										return I(t, b[e]);
									})
									: I(t, b))) &&
							(d && d(), v(r, en, [t, b === sn ? void 0 : b, y]), (b = t));
						} else _.get();
				}),
					"sync" === l
						? (_.update = _.run)
						: "post" === l
							? ((_.post = !0),
								(_.update = function () {
									return Qe(_);
								}))
							: (_.update = function () {
								if (p && p === ct && !p._isMounted) {
									var t = p._preWatchers || (p._preWatchers = []);
									t.indexOf(_) < 0 && t.push(_);
								} else Qe(_);
							}),
					r
						? s
							? _.run()
							: (b = _.get())
						: "post" === l && p
							? p.$once("hook:mounted", function () {
								return _.get();
							})
							: _.get(),
					function () {
						_.teardown();
					}
			);
		}
		var un = (function () {
			function t(t) {
				void 0 === t && (t = !1), (this.detached = t), (this.active = !0), (this.effects = []), (this.cleanups = []), (this.parent = an), !t && an && (this.index = (an.scopes || (an.scopes = [])).push(this) - 1);
			}
			return (
				(t.prototype.run = function (t) {
					if (this.active) {
						var e = an;
						try {
							return (an = this), t();
						} finally {
							an = e;
						}
					}
				}),
					(t.prototype.on = function () {
						an = this;
					}),
					(t.prototype.off = function () {
						an = this.parent;
					}),
					(t.prototype.stop = function (t) {
						if (this.active) {
							var e = void 0,
								n = void 0;
							for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].teardown();
							for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
							if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
							if (!this.detached && this.parent && !t) {
								var r = this.parent.scopes.pop();
								r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
							}
							(this.parent = void 0), (this.active = !1);
						}
					}),
					t
			);
		})();
		function ln(t) {
			var e = t._provided,
				n = t.$parent && t.$parent._provided;
			return n === e ? (t._provided = Object.create(n)) : e;
		}
		function fn(t, e, n) {
			yt();
			try {
				if (e)
					for (var r = e; (r = r.$parent); ) {
						var o = r.$options.errorCaptured;
						if (o)
							for (var i = 0; i < o.length; i++)
								try {
									if (!1 === o[i].call(r, t, e, n)) return;
								} catch (t) {
									pn(t, r, "errorCaptured hook");
								}
					}
				pn(t, e, n);
			} finally {
				_t();
			}
		}
		function dn(t, e, n, r, o) {
			var i;
			try {
				(i = n ? t.apply(e, n) : t.call(e)) &&
				!i._isVue &&
				f(i) &&
				!i._handled &&
				(i.catch(function (t) {
					return fn(t, r, o + " (Promise/async)");
				}),
					(i._handled = !0));
			} catch (t) {
				fn(t, r, o);
			}
			return i;
		}
		function pn(t, e, n) {
			if (H.errorHandler)
				try {
					return H.errorHandler.call(null, t, e, n);
				} catch (e) {
					e !== t && vn(e);
				}
			vn(t);
		}
		function vn(t, e, n) {
			if (!J || "undefined" == typeof console) throw t;
			console.error(t);
		}
		var hn,
			mn = !1,
			gn = [],
			yn = !1;
		function _n() {
			yn = !1;
			var t = gn.slice(0);
			gn.length = 0;
			for (var e = 0; e < t.length; e++) t[e]();
		}
		if ("undefined" != typeof Promise && it(Promise)) {
			var bn = Promise.resolve();
			(hn = function () {
				bn.then(_n), X && setTimeout(j);
			}),
				(mn = !0);
		} else if (W || "undefined" == typeof MutationObserver || (!it(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()))
			hn =
				"undefined" != typeof setImmediate && it(setImmediate)
					? function () {
						setImmediate(_n);
					}
					: function () {
						setTimeout(_n, 0);
					};
		else {
			var $n = 1,
				wn = new MutationObserver(_n),
				xn = document.createTextNode(String($n));
			wn.observe(xn, { characterData: !0 }),
				(hn = function () {
					($n = ($n + 1) % 2), (xn.data = String($n));
				}),
				(mn = !0);
		}
		function Cn(t, e) {
			var n;
			if (
				(gn.push(function () {
					if (t)
						try {
							t.call(e);
						} catch (t) {
							fn(t, e, "nextTick");
						}
					else n && n(e);
				}),
				yn || ((yn = !0), hn()),
				!t && "undefined" != typeof Promise)
			)
				return new Promise(function (t) {
					n = t;
				});
		}
		function kn(t) {
			return function (e, n) {
				if ((void 0 === n && (n = ct), n))
					return (function (t, e, n) {
						var r = t.$options;
						r[e] = vr(r[e], n);
					})(n, t, e);
			};
		}
		var Sn = kn("beforeMount"),
			On = kn("mounted"),
			Tn = kn("beforeUpdate"),
			An = kn("updated"),
			jn = kn("beforeDestroy"),
			En = kn("destroyed"),
			Nn = kn("activated"),
			Pn = kn("deactivated"),
			Dn = kn("serverPrefetch"),
			Mn = kn("renderTracked"),
			In = kn("renderTriggered"),
			Ln = kn("errorCaptured");
		var Rn = "2.7.14";
		var Fn = Object.freeze({
				__proto__: null,
				version: Rn,
				defineComponent: function (t) {
					return t;
				},
				ref: function (t) {
					return Ht(t, !1);
				},
				shallowRef: function (t) {
					return Ht(t, !0);
				},
				isRef: Ft,
				toRef: Ut,
				toRefs: function (t) {
					var n = e(t) ? new Array(t.length) : {};
					for (var r in t) n[r] = Ut(t, r);
					return n;
				},
				unref: function (t) {
					return Ft(t) ? t.value : t;
				},
				proxyRefs: function (t) {
					if (Mt(t)) return t;
					for (var e = {}, n = Object.keys(t), r = 0; r < n.length; r++) Bt(e, t, n[r]);
					return e;
				},
				customRef: function (t) {
					var e = new mt(),
						n = t(
							function () {
								e.depend();
							},
							function () {
								e.notify();
							}
						),
						r = n.get,
						o = n.set,
						i = {
							get value() {
								return r();
							},
							set value(t) {
								o(t);
							},
						};
					return z(i, Rt, !0), i;
				},
				triggerRef: function (t) {
					t.dep && t.dep.notify();
				},
				reactive: function (t) {
					return Dt(t, !1), t;
				},
				isReactive: Mt,
				isReadonly: Lt,
				isShallow: It,
				isProxy: function (t) {
					return Mt(t) || Lt(t);
				},
				shallowReactive: Pt,
				markRaw: function (t) {
					return Object.isExtensible(t) && z(t, "__v_skip", !0), t;
				},
				toRaw: function t(e) {
					var n = e && e.__v_raw;
					return n ? t(n) : e;
				},
				readonly: zt,
				shallowReadonly: function (t) {
					return Vt(t, !0);
				},
				computed: function (t, e) {
					var n,
						r,
						o = a(t);
					o ? ((n = t), (r = j)) : ((n = t.get), (r = t.set));
					var i = rt() ? null : new Vn(ct, n, j, { lazy: !0 }),
						s = {
							effect: i,
							get value() {
								return i ? (i.dirty && i.evaluate(), mt.target && i.depend(), i.value) : n();
							},
							set value(t) {
								r(t);
							},
						};
					return z(s, Rt, !0), z(s, "__v_isReadonly", o), s;
				},
				watch: function (t, e, n) {
					return cn(t, e, n);
				},
				watchEffect: function (t, e) {
					return cn(t, null, e);
				},
				watchPostEffect: on,
				watchSyncEffect: function (t, e) {
					return cn(t, null, { flush: "sync" });
				},
				EffectScope: un,
				effectScope: function (t) {
					return new un(t);
				},
				onScopeDispose: function (t) {
					an && an.cleanups.push(t);
				},
				getCurrentScope: function () {
					return an;
				},
				provide: function (t, e) {
					ct && (ln(ct)[t] = e);
				},
				inject: function (t, e, n) {
					void 0 === n && (n = !1);
					var r = ct;
					if (r) {
						var o = r.$parent && r.$parent._provided;
						if (o && t in o) return o[t];
						if (arguments.length > 1) return n && a(e) ? e.call(r) : e;
					}
				},
				h: function (t, e, n) {
					return te(ct, t, e, n, 2, !0);
				},
				getCurrentInstance: function () {
					return ct && { proxy: ct };
				},
				useSlots: function () {
					return Oe().slots;
				},
				useAttrs: function () {
					return Oe().attrs;
				},
				useListeners: function () {
					return Oe().listeners;
				},
				mergeDefaults: function (t, n) {
					var r = e(t)
						? t.reduce(function (t, e) {
							return (t[e] = {}), t;
						}, {})
						: t;
					for (var o in n) {
						var i = r[o];
						i ? (e(i) || a(i) ? (r[o] = { type: i, default: n[o] }) : (i.default = n[o])) : null === i && (r[o] = { default: n[o] });
					}
					return r;
				},
				nextTick: Cn,
				set: jt,
				del: Et,
				useCssModule: function (e) {
					return t;
				},
				useCssVars: function (t) {
					if (J) {
						var e = ct;
						e &&
						on(function () {
							var n = e.$el,
								r = t(e, e._setupProxy);
							if (n && 1 === n.nodeType) {
								var o = n.style;
								for (var i in r) o.setProperty("--".concat(i), r[i]);
							}
						});
					}
				},
				defineAsyncComponent: function (t) {
					a(t) && (t = { loader: t });
					var e = t.loader,
						n = t.loadingComponent,
						r = t.errorComponent,
						o = t.delay,
						i = void 0 === o ? 200 : o,
						s = t.timeout;
					t.suspensible;
					var c = t.onError,
						u = null,
						l = 0,
						f = function () {
							var t;
							return (
								u ||
								(t = u = e()
									.catch(function (t) {
										if (((t = t instanceof Error ? t : new Error(String(t))), c))
											return new Promise(function (e, n) {
												c(
													t,
													function () {
														return e((l++, (u = null), f()));
													},
													function () {
														return n(t);
													},
													l + 1
												);
											});
										throw t;
									})
									.then(function (e) {
										return t !== u && u ? u : (e && (e.__esModule || "Module" === e[Symbol.toStringTag]) && (e = e.default), e);
									}))
							);
						};
					return function () {
						return { component: f(), delay: i, timeout: s, error: r, loading: n };
					};
				},
				onBeforeMount: Sn,
				onMounted: On,
				onBeforeUpdate: Tn,
				onUpdated: An,
				onBeforeUnmount: jn,
				onUnmounted: En,
				onActivated: Nn,
				onDeactivated: Pn,
				onServerPrefetch: Dn,
				onRenderTracked: Mn,
				onRenderTriggered: In,
				onErrorCaptured: function (t, e) {
					void 0 === e && (e = ct), Ln(t, e);
				},
			}),
			Hn = new at();
		function Bn(t) {
			return Un(t, Hn), Hn.clear(), t;
		}
		function Un(t, n) {
			var r,
				o,
				i = e(t);
			if (!((!i && !s(t)) || t.__v_skip || Object.isFrozen(t) || t instanceof lt)) {
				if (t.__ob__) {
					var a = t.__ob__.dep.id;
					if (n.has(a)) return;
					n.add(a);
				}
				if (i) for (r = t.length; r--; ) Un(t[r], n);
				else if (Ft(t)) Un(t.value, n);
				else for (r = (o = Object.keys(t)).length; r--; ) Un(t[o[r]], n);
			}
		}
		var zn = 0,
			Vn = (function () {
				function t(t, e, n, r, o) {
					!(function (t, e) {
						void 0 === e && (e = an), e && e.active && e.effects.push(t);
					})(this, an && !an._vm ? an : t ? t._scope : void 0),
					(this.vm = t) && o && (t._watcher = this),
						r ? ((this.deep = !!r.deep), (this.user = !!r.user), (this.lazy = !!r.lazy), (this.sync = !!r.sync), (this.before = r.before)) : (this.deep = this.user = this.lazy = this.sync = !1),
						(this.cb = n),
						(this.id = ++zn),
						(this.active = !0),
						(this.post = !1),
						(this.dirty = this.lazy),
						(this.deps = []),
						(this.newDeps = []),
						(this.depIds = new at()),
						(this.newDepIds = new at()),
						(this.expression = ""),
						a(e)
							? (this.getter = e)
							: ((this.getter = (function (t) {
								if (!V.test(t)) {
									var e = t.split(".");
									return function (t) {
										for (var n = 0; n < e.length; n++) {
											if (!t) return;
											t = t[e[n]];
										}
										return t;
									};
								}
							})(e)),
							this.getter || (this.getter = j)),
						(this.value = this.lazy ? void 0 : this.get());
				}
				return (
					(t.prototype.get = function () {
						var t;
						yt(this);
						var e = this.vm;
						try {
							t = this.getter.call(e, e);
						} catch (t) {
							if (!this.user) throw t;
							fn(t, e, 'getter for watcher "'.concat(this.expression, '"'));
						} finally {
							this.deep && Bn(t), _t(), this.cleanupDeps();
						}
						return t;
					}),
						(t.prototype.addDep = function (t) {
							var e = t.id;
							this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
						}),
						(t.prototype.cleanupDeps = function () {
							for (var t = this.deps.length; t--; ) {
								var e = this.deps[t];
								this.newDepIds.has(e.id) || e.removeSub(this);
							}
							var n = this.depIds;
							(this.depIds = this.newDepIds), (this.newDepIds = n), this.newDepIds.clear(), (n = this.deps), (this.deps = this.newDeps), (this.newDeps = n), (this.newDeps.length = 0);
						}),
						(t.prototype.update = function () {
							this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Qe(this);
						}),
						(t.prototype.run = function () {
							if (this.active) {
								var t = this.get();
								if (t !== this.value || s(t) || this.deep) {
									var e = this.value;
									if (((this.value = t), this.user)) {
										var n = 'callback for watcher "'.concat(this.expression, '"');
										dn(this.cb, this.vm, [t, e], this.vm, n);
									} else this.cb.call(this.vm, t, e);
								}
							}
						}),
						(t.prototype.evaluate = function () {
							(this.value = this.get()), (this.dirty = !1);
						}),
						(t.prototype.depend = function () {
							for (var t = this.deps.length; t--; ) this.deps[t].depend();
						}),
						(t.prototype.teardown = function () {
							if ((this.vm && !this.vm._isBeingDestroyed && g(this.vm._scope.effects, this), this.active)) {
								for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
								(this.active = !1), this.onStop && this.onStop();
							}
						}),
						t
				);
			})(),
			Kn = { enumerable: !0, configurable: !0, get: j, set: j };
		function Jn(t, e, n) {
			(Kn.get = function () {
				return this[e][n];
			}),
				(Kn.set = function (t) {
					this[e][n] = t;
				}),
				Object.defineProperty(t, n, Kn);
		}
		function qn(t) {
			var n = t.$options;
			if (
				(n.props &&
				(function (t, e) {
					var n = t.$options.propsData || {},
						r = (t._props = Pt({})),
						o = (t.$options._propKeys = []);
					t.$parent && kt(!1);
					var i = function (i) {
						o.push(i);
						var a = _r(i, e, n, t);
						At(r, i, a), i in t || Jn(t, "_props", i);
					};
					for (var a in e) i(a);
					kt(!0);
				})(t, n.props),
					(function (t) {
						var e = t.$options,
							n = e.setup;
						if (n) {
							var r = (t._setupContext = xe(t));
							ut(t), yt();
							var o = dn(n, null, [t._props || Pt({}), r], t, "setup");
							if ((_t(), ut(), a(o))) e.render = o;
							else if (s(o))
								if (((t._setupState = o), o.__sfc)) {
									var i = (t._setupProxy = {});
									for (var c in o) "__sfc" !== c && Bt(i, o, c);
								} else for (var c in o) U(c) || Bt(t, o, c);
						}
					})(t),
				n.methods &&
				(function (t, e) {
					for (var n in (t.$options.props, e)) t[n] = "function" != typeof e[n] ? j : S(e[n], t);
				})(t, n.methods),
					n.data)
			)
				!(function (t) {
					var e = t.$options.data;
					u(
						(e = t._data = a(e)
							? (function (t, e) {
								yt();
								try {
									return t.call(e, e);
								} catch (t) {
									return fn(t, e, "data()"), {};
								} finally {
									_t();
								}
							})(e, t)
							: e || {})
					) || (e = {});
					var n = Object.keys(e),
						r = t.$options.props;
					t.$options.methods;
					var o = n.length;
					for (; o--; ) {
						var i = n[o];
						(r && _(r, i)) || U(i) || Jn(t, "_data", i);
					}
					var s = Tt(e);
					s && s.vmCount++;
				})(t);
			else {
				var r = Tt((t._data = {}));
				r && r.vmCount++;
			}
			n.computed &&
			(function (t, e) {
				var n = (t._computedWatchers = Object.create(null)),
					r = rt();
				for (var o in e) {
					var i = e[o],
						s = a(i) ? i : i.get;
					r || (n[o] = new Vn(t, s || j, j, Wn)), o in t || Zn(t, o, i);
				}
			})(t, n.computed),
			n.watch &&
			n.watch !== tt &&
			(function (t, n) {
				for (var r in n) {
					var o = n[r];
					if (e(o)) for (var i = 0; i < o.length; i++) Yn(t, r, o[i]);
					else Yn(t, r, o);
				}
			})(t, n.watch);
		}
		var Wn = { lazy: !0 };
		function Zn(t, e, n) {
			var r = !rt();
			a(n) ? ((Kn.get = r ? Gn(e) : Xn(n)), (Kn.set = j)) : ((Kn.get = n.get ? (r && !1 !== n.cache ? Gn(e) : Xn(n.get)) : j), (Kn.set = n.set || j)), Object.defineProperty(t, e, Kn);
		}
		function Gn(t) {
			return function () {
				var e = this._computedWatchers && this._computedWatchers[t];
				if (e) return e.dirty && e.evaluate(), mt.target && e.depend(), e.value;
			};
		}
		function Xn(t) {
			return function () {
				return t.call(this, this);
			};
		}
		function Yn(t, e, n, r) {
			return u(n) && ((r = n), (n = n.handler)), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
		}
		function Qn(t, e) {
			if (t) {
				for (var n = Object.create(null), r = st ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
					var i = r[o];
					if ("__ob__" !== i) {
						var s = t[i].from;
						if (s in e._provided) n[i] = e._provided[s];
						else if ("default" in t[i]) {
							var c = t[i].default;
							n[i] = a(c) ? c.call(e) : c;
						}
					}
				}
				return n;
			}
		}
		var tr = 0;
		function er(t) {
			var e = t.options;
			if (t.super) {
				var n = er(t.super);
				if (n !== t.superOptions) {
					t.superOptions = n;
					var r = (function (t) {
						var e,
							n = t.options,
							r = t.sealedOptions;
						for (var o in n) n[o] !== r[o] && (e || (e = {}), (e[o] = n[o]));
						return e;
					})(t);
					r && T(t.extendOptions, r), (e = t.options = gr(n, t.extendOptions)).name && (e.components[e.name] = t);
				}
			}
			return e;
		}
		function nr(n, r, i, a, s) {
			var c,
				u = this,
				l = s.options;
			_(a, "_uid") ? ((c = Object.create(a))._original = a) : ((c = a), (a = a._original));
			var f = o(l._compiled),
				d = !f;
			(this.data = n),
				(this.props = r),
				(this.children = i),
				(this.parent = a),
				(this.listeners = n.on || t),
				(this.injections = Qn(l.inject, a)),
				(this.slots = function () {
					return u.$slots || be(a, n.scopedSlots, (u.$slots = ge(i, a))), u.$slots;
				}),
				Object.defineProperty(this, "scopedSlots", {
					enumerable: !0,
					get: function () {
						return be(a, n.scopedSlots, this.slots());
					},
				}),
			f && ((this.$options = l), (this.$slots = this.slots()), (this.$scopedSlots = be(a, n.scopedSlots, this.$slots))),
				l._scopeId
					? (this._c = function (t, n, r, o) {
						var i = te(c, t, n, r, o, d);
						return i && !e(i) && ((i.fnScopeId = l._scopeId), (i.fnContext = a)), i;
					})
					: (this._c = function (t, e, n, r) {
						return te(c, t, e, n, r, d);
					});
		}
		function rr(t, e, n, r, o) {
			var i = pt(t);
			return (i.fnContext = n), (i.fnOptions = r), e.slot && ((i.data || (i.data = {})).slot = e.slot), i;
		}
		function or(t, e) {
			for (var n in e) t[w(n)] = e[n];
		}
		function ir(t) {
			return t.name || t.__name || t._componentTag;
		}
		me(nr.prototype);
		var ar = {
				init: function (t, e) {
					if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
						var n = t;
						ar.prepatch(n, n);
					} else {
						(t.componentInstance = (function (t, e) {
							var n = { _isComponent: !0, _parentVnode: t, parent: e },
								o = t.data.inlineTemplate;
							r(o) && ((n.render = o.render), (n.staticRenderFns = o.staticRenderFns));
							return new t.componentOptions.Ctor(n);
						})(t, Ie)).$mount(e ? t.elm : void 0, e);
					}
				},
				prepatch: function (e, n) {
					var r = n.componentOptions;
					!(function (e, n, r, o, i) {
						var a = o.data.scopedSlots,
							s = e.$scopedSlots,
							c = !!((a && !a.$stable) || (s !== t && !s.$stable) || (a && e.$scopedSlots.$key !== a.$key) || (!a && e.$scopedSlots.$key)),
							u = !!(i || e.$options._renderChildren || c),
							l = e.$vnode;
						(e.$options._parentVnode = o), (e.$vnode = o), e._vnode && (e._vnode.parent = o), (e.$options._renderChildren = i);
						var f = o.data.attrs || t;
						e._attrsProxy && Ce(e._attrsProxy, f, (l.data && l.data.attrs) || t, e, "$attrs") && (u = !0), (e.$attrs = f), (r = r || t);
						var d = e.$options._parentListeners;
						if ((e._listenersProxy && Ce(e._listenersProxy, r, d || t, e, "$listeners"), (e.$listeners = e.$options._parentListeners = r), Me(e, r, d), n && e.$options.props)) {
							kt(!1);
							for (var p = e._props, v = e.$options._propKeys || [], h = 0; h < v.length; h++) {
								var m = v[h],
									g = e.$options.props;
								p[m] = _r(m, g, n, e);
							}
							kt(!0), (e.$options.propsData = n);
						}
						u && ((e.$slots = ge(i, o.context)), e.$forceUpdate());
					})((n.componentInstance = e.componentInstance), r.propsData, r.listeners, n, r.children);
				},
				insert: function (t) {
					var e,
						n = t.context,
						r = t.componentInstance;
					r._isMounted || ((r._isMounted = !0), Be(r, "mounted")), t.data.keepAlive && (n._isMounted ? (((e = r)._inactive = !1), ze.push(e)) : Fe(r, !0));
				},
				destroy: function (t) {
					var e = t.componentInstance;
					e._isDestroyed || (t.data.keepAlive ? He(e, !0) : e.$destroy());
				},
			},
			sr = Object.keys(ar);
		function cr(i, a, c, u, l) {
			if (!n(i)) {
				var d = c.$options._base;
				if ((s(i) && (i = d.extend(i)), "function" == typeof i)) {
					var p;
					if (
						n(i.cid) &&
						((i = (function (t, e) {
							if (o(t.error) && r(t.errorComp)) return t.errorComp;
							if (r(t.resolved)) return t.resolved;
							var i = Ae;
							if ((i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i), o(t.loading) && r(t.loadingComp))) return t.loadingComp;
							if (i && !r(t.owners)) {
								var a = (t.owners = [i]),
									c = !0,
									u = null,
									l = null;
								i.$on("hook:destroyed", function () {
									return g(a, i);
								});
								var d = function (t) {
										for (var e = 0, n = a.length; e < n; e++) a[e].$forceUpdate();
										t && ((a.length = 0), null !== u && (clearTimeout(u), (u = null)), null !== l && (clearTimeout(l), (l = null)));
									},
									p = M(function (n) {
										(t.resolved = je(n, e)), c ? (a.length = 0) : d(!0);
									}),
									v = M(function (e) {
										r(t.errorComp) && ((t.error = !0), d(!0));
									}),
									h = t(p, v);
								return (
									s(h) &&
									(f(h)
										? n(t.resolved) && h.then(p, v)
										: f(h.component) &&
										(h.component.then(p, v),
										r(h.error) && (t.errorComp = je(h.error, e)),
										r(h.loading) &&
										((t.loadingComp = je(h.loading, e)),
											0 === h.delay
												? (t.loading = !0)
												: (u = setTimeout(function () {
													(u = null), n(t.resolved) && n(t.error) && ((t.loading = !0), d(!1));
												}, h.delay || 200))),
										r(h.timeout) &&
										(l = setTimeout(function () {
											(l = null), n(t.resolved) && v(null);
										}, h.timeout)))),
										(c = !1),
										t.loading ? t.loadingComp : t.resolved
								);
							}
						})((p = i), d)),
						void 0 === i)
					)
						return (function (t, e, n, r, o) {
							var i = ft();
							return (i.asyncFactory = t), (i.asyncMeta = { data: e, context: n, children: r, tag: o }), i;
						})(p, a, c, u, l);
					(a = a || {}),
						er(i),
					r(a.model) &&
					(function (t, n) {
						var o = (t.model && t.model.prop) || "value",
							i = (t.model && t.model.event) || "input";
						(n.attrs || (n.attrs = {}))[o] = n.model.value;
						var a = n.on || (n.on = {}),
							s = a[i],
							c = n.model.callback;
						r(s) ? (e(s) ? -1 === s.indexOf(c) : s !== c) && (a[i] = [c].concat(s)) : (a[i] = c);
					})(i.options, a);
					var v = (function (t, e, o) {
						var i = e.options.props;
						if (!n(i)) {
							var a = {},
								s = t.attrs,
								c = t.props;
							if (r(s) || r(c))
								for (var u in i) {
									var l = k(u);
									Gt(a, c, u, l, !0) || Gt(a, s, u, l, !1);
								}
							return a;
						}
					})(a, i);
					if (o(i.options.functional))
						return (function (n, o, i, a, s) {
							var c = n.options,
								u = {},
								l = c.props;
							if (r(l)) for (var f in l) u[f] = _r(f, l, o || t);
							else r(i.attrs) && or(u, i.attrs), r(i.props) && or(u, i.props);
							var d = new nr(i, u, s, a, n),
								p = c.render.call(null, d._c, d);
							if (p instanceof lt) return rr(p, i, d.parent, c);
							if (e(p)) {
								for (var v = Xt(p) || [], h = new Array(v.length), m = 0; m < v.length; m++) h[m] = rr(v[m], i, d.parent, c);
								return h;
							}
						})(i, v, a, c, u);
					var h = a.on;
					if (((a.on = a.nativeOn), o(i.options.abstract))) {
						var m = a.slot;
						(a = {}), m && (a.slot = m);
					}
					!(function (t) {
						for (var e = t.hook || (t.hook = {}), n = 0; n < sr.length; n++) {
							var r = sr[n],
								o = e[r],
								i = ar[r];
							o === i || (o && o._merged) || (e[r] = o ? ur(i, o) : i);
						}
					})(a);
					var y = ir(i.options) || l;
					return new lt("vue-component-".concat(i.cid).concat(y ? "-".concat(y) : ""), a, void 0, void 0, void 0, c, { Ctor: i, propsData: v, listeners: h, tag: l, children: u }, p);
				}
			}
		}
		function ur(t, e) {
			var n = function (n, r) {
				t(n, r), e(n, r);
			};
			return (n._merged = !0), n;
		}
		var lr = j,
			fr = H.optionMergeStrategies;
		function dr(t, e, n) {
			if ((void 0 === n && (n = !0), !e)) return t;
			for (var r, o, i, a = st ? Reflect.ownKeys(e) : Object.keys(e), s = 0; s < a.length; s++) "__ob__" !== (r = a[s]) && ((o = t[r]), (i = e[r]), n && _(t, r) ? o !== i && u(o) && u(i) && dr(o, i) : jt(t, r, i));
			return t;
		}
		function pr(t, e, n) {
			return n
				? function () {
					var r = a(e) ? e.call(n, n) : e,
						o = a(t) ? t.call(n, n) : t;
					return r ? dr(r, o) : o;
				}
				: e
					? t
						? function () {
							return dr(a(e) ? e.call(this, this) : e, a(t) ? t.call(this, this) : t);
						}
						: e
					: t;
		}
		function vr(t, n) {
			var r = n ? (t ? t.concat(n) : e(n) ? n : [n]) : t;
			return r
				? (function (t) {
					for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
					return e;
				})(r)
				: r;
		}
		function hr(t, e, n, r) {
			var o = Object.create(t || null);
			return e ? T(o, e) : o;
		}
		(fr.data = function (t, e, n) {
			return n ? pr(t, e, n) : e && "function" != typeof e ? t : pr(t, e);
		}),
			F.forEach(function (t) {
				fr[t] = vr;
			}),
			R.forEach(function (t) {
				fr[t + "s"] = hr;
			}),
			(fr.watch = function (t, n, r, o) {
				if ((t === tt && (t = void 0), n === tt && (n = void 0), !n)) return Object.create(t || null);
				if (!t) return n;
				var i = {};
				for (var a in (T(i, t), n)) {
					var s = i[a],
						c = n[a];
					s && !e(s) && (s = [s]), (i[a] = s ? s.concat(c) : e(c) ? c : [c]);
				}
				return i;
			}),
			(fr.props = fr.methods = fr.inject = fr.computed = function (t, e, n, r) {
				if (!t) return e;
				var o = Object.create(null);
				return T(o, t), e && T(o, e), o;
			}),
			(fr.provide = function (t, e) {
				return t
					? function () {
						var n = Object.create(null);
						return dr(n, a(t) ? t.call(this) : t), e && dr(n, a(e) ? e.call(this) : e, !1), n;
					}
					: e;
			});
		var mr = function (t, e) {
			return void 0 === e ? t : e;
		};
		function gr(t, n, r) {
			if (
				(a(n) && (n = n.options),
					(function (t, n) {
						var r = t.props;
						if (r) {
							var o,
								i,
								a = {};
							if (e(r)) for (o = r.length; o--; ) "string" == typeof (i = r[o]) && (a[w(i)] = { type: null });
							else if (u(r)) for (var s in r) (i = r[s]), (a[w(s)] = u(i) ? i : { type: i });
							t.props = a;
						}
					})(n),
					(function (t, n) {
						var r = t.inject;
						if (r) {
							var o = (t.inject = {});
							if (e(r)) for (var i = 0; i < r.length; i++) o[r[i]] = { from: r[i] };
							else if (u(r))
								for (var a in r) {
									var s = r[a];
									o[a] = u(s) ? T({ from: a }, s) : { from: s };
								}
						}
					})(n),
					(function (t) {
						var e = t.directives;
						if (e)
							for (var n in e) {
								var r = e[n];
								a(r) && (e[n] = { bind: r, update: r });
							}
					})(n),
				!n._base && (n.extends && (t = gr(t, n.extends, r)), n.mixins))
			)
				for (var o = 0, i = n.mixins.length; o < i; o++) t = gr(t, n.mixins[o], r);
			var s,
				c = {};
			for (s in t) l(s);
			for (s in n) _(t, s) || l(s);
			function l(e) {
				var o = fr[e] || mr;
				c[e] = o(t[e], n[e], r, e);
			}
			return c;
		}
		function yr(t, e, n, r) {
			if ("string" == typeof n) {
				var o = t[e];
				if (_(o, n)) return o[n];
				var i = w(n);
				if (_(o, i)) return o[i];
				var a = x(i);
				return _(o, a) ? o[a] : o[n] || o[i] || o[a];
			}
		}
		function _r(t, e, n, r) {
			var o = e[t],
				i = !_(n, t),
				s = n[t],
				c = xr(Boolean, o.type);
			if (c > -1)
				if (i && !_(o, "default")) s = !1;
				else if ("" === s || s === k(t)) {
					var u = xr(String, o.type);
					(u < 0 || c < u) && (s = !0);
				}
			if (void 0 === s) {
				s = (function (t, e, n) {
					if (!_(e, "default")) return;
					var r = e.default;
					if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
					return a(r) && "Function" !== $r(e.type) ? r.call(t) : r;
				})(r, o, t);
				var l = Ct;
				kt(!0), Tt(s), kt(l);
			}
			return s;
		}
		var br = /^\s*function (\w+)/;
		function $r(t) {
			var e = t && t.toString().match(br);
			return e ? e[1] : "";
		}
		function wr(t, e) {
			return $r(t) === $r(e);
		}
		function xr(t, n) {
			if (!e(n)) return wr(n, t) ? 0 : -1;
			for (var r = 0, o = n.length; r < o; r++) if (wr(n[r], t)) return r;
			return -1;
		}
		function Cr(t) {
			this._init(t);
		}
		function kr(t) {
			t.cid = 0;
			var e = 1;
			t.extend = function (t) {
				t = t || {};
				var n = this,
					r = n.cid,
					o = t._Ctor || (t._Ctor = {});
				if (o[r]) return o[r];
				var i = ir(t) || ir(n.options),
					a = function (t) {
						this._init(t);
					};
				return (
					((a.prototype = Object.create(n.prototype)).constructor = a),
						(a.cid = e++),
						(a.options = gr(n.options, t)),
						(a.super = n),
					a.options.props &&
					(function (t) {
						var e = t.options.props;
						for (var n in e) Jn(t.prototype, "_props", n);
					})(a),
					a.options.computed &&
					(function (t) {
						var e = t.options.computed;
						for (var n in e) Zn(t.prototype, n, e[n]);
					})(a),
						(a.extend = n.extend),
						(a.mixin = n.mixin),
						(a.use = n.use),
						R.forEach(function (t) {
							a[t] = n[t];
						}),
					i && (a.options.components[i] = a),
						(a.superOptions = n.options),
						(a.extendOptions = t),
						(a.sealedOptions = T({}, a.options)),
						(o[r] = a),
						a
				);
			};
		}
		function Sr(t) {
			return t && (ir(t.Ctor.options) || t.tag);
		}
		function Or(t, n) {
			return e(t) ? t.indexOf(n) > -1 : "string" == typeof t ? t.split(",").indexOf(n) > -1 : ((r = t), "[object RegExp]" === c.call(r) && t.test(n));
			var r;
		}
		function Tr(t, e) {
			var n = t.cache,
				r = t.keys,
				o = t._vnode;
			for (var i in n) {
				var a = n[i];
				if (a) {
					var s = a.name;
					s && !e(s) && Ar(n, i, r, o);
				}
			}
		}
		function Ar(t, e, n, r) {
			var o = t[e];
			!o || (r && o.tag === r.tag) || o.componentInstance.$destroy(), (t[e] = null), g(n, e);
		}
		!(function (e) {
			e.prototype._init = function (e) {
				var n = this;
				(n._uid = tr++),
					(n._isVue = !0),
					(n.__v_skip = !0),
					(n._scope = new un(!0)),
					(n._scope._vm = !0),
					e && e._isComponent
						? (function (t, e) {
							var n = (t.$options = Object.create(t.constructor.options)),
								r = e._parentVnode;
							(n.parent = e.parent), (n._parentVnode = r);
							var o = r.componentOptions;
							(n.propsData = o.propsData), (n._parentListeners = o.listeners), (n._renderChildren = o.children), (n._componentTag = o.tag), e.render && ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
						})(n, e)
						: (n.$options = gr(er(n.constructor), e || {}, n)),
					(n._renderProxy = n),
					(n._self = n),
					(function (t) {
						var e = t.$options,
							n = e.parent;
						if (n && !e.abstract) {
							for (; n.$options.abstract && n.$parent; ) n = n.$parent;
							n.$children.push(t);
						}
						(t.$parent = n),
							(t.$root = n ? n.$root : t),
							(t.$children = []),
							(t.$refs = {}),
							(t._provided = n ? n._provided : Object.create(null)),
							(t._watcher = null),
							(t._inactive = null),
							(t._directInactive = !1),
							(t._isMounted = !1),
							(t._isDestroyed = !1),
							(t._isBeingDestroyed = !1);
					})(n),
					(function (t) {
						(t._events = Object.create(null)), (t._hasHookEvent = !1);
						var e = t.$options._parentListeners;
						e && Me(t, e);
					})(n),
					(function (e) {
						(e._vnode = null), (e._staticTrees = null);
						var n = e.$options,
							r = (e.$vnode = n._parentVnode),
							o = r && r.context;
						(e.$slots = ge(n._renderChildren, o)),
							(e.$scopedSlots = r ? be(e.$parent, r.data.scopedSlots, e.$slots) : t),
							(e._c = function (t, n, r, o) {
								return te(e, t, n, r, o, !1);
							}),
							(e.$createElement = function (t, n, r, o) {
								return te(e, t, n, r, o, !0);
							});
						var i = r && r.data;
						At(e, "$attrs", (i && i.attrs) || t, null, !0), At(e, "$listeners", n._parentListeners || t, null, !0);
					})(n),
					Be(n, "beforeCreate", void 0, !1),
					(function (t) {
						var e = Qn(t.$options.inject, t);
						e &&
						(kt(!1),
							Object.keys(e).forEach(function (n) {
								At(t, n, e[n]);
							}),
							kt(!0));
					})(n),
					qn(n),
					(function (t) {
						var e = t.$options.provide;
						if (e) {
							var n = a(e) ? e.call(t) : e;
							if (!s(n)) return;
							for (var r = ln(t), o = st ? Reflect.ownKeys(n) : Object.keys(n), i = 0; i < o.length; i++) {
								var c = o[i];
								Object.defineProperty(r, c, Object.getOwnPropertyDescriptor(n, c));
							}
						}
					})(n),
					Be(n, "created"),
				n.$options.el && n.$mount(n.$options.el);
			};
		})(Cr),
			(function (t) {
				var e = {
						get: function () {
							return this._data;
						},
					},
					n = {
						get: function () {
							return this._props;
						},
					};
				Object.defineProperty(t.prototype, "$data", e),
					Object.defineProperty(t.prototype, "$props", n),
					(t.prototype.$set = jt),
					(t.prototype.$delete = Et),
					(t.prototype.$watch = function (t, e, n) {
						var r = this;
						if (u(e)) return Yn(r, t, e, n);
						(n = n || {}).user = !0;
						var o = new Vn(r, t, e, n);
						if (n.immediate) {
							var i = 'callback for immediate watcher "'.concat(o.expression, '"');
							yt(), dn(e, r, [o.value], r, i), _t();
						}
						return function () {
							o.teardown();
						};
					});
			})(Cr),
			(function (t) {
				var n = /^hook:/;
				(t.prototype.$on = function (t, r) {
					var o = this;
					if (e(t)) for (var i = 0, a = t.length; i < a; i++) o.$on(t[i], r);
					else (o._events[t] || (o._events[t] = [])).push(r), n.test(t) && (o._hasHookEvent = !0);
					return o;
				}),
					(t.prototype.$once = function (t, e) {
						var n = this;
						function r() {
							n.$off(t, r), e.apply(n, arguments);
						}
						return (r.fn = e), n.$on(t, r), n;
					}),
					(t.prototype.$off = function (t, n) {
						var r = this;
						if (!arguments.length) return (r._events = Object.create(null)), r;
						if (e(t)) {
							for (var o = 0, i = t.length; o < i; o++) r.$off(t[o], n);
							return r;
						}
						var a,
							s = r._events[t];
						if (!s) return r;
						if (!n) return (r._events[t] = null), r;
						for (var c = s.length; c--; )
							if ((a = s[c]) === n || a.fn === n) {
								s.splice(c, 1);
								break;
							}
						return r;
					}),
					(t.prototype.$emit = function (t) {
						var e = this,
							n = e._events[t];
						if (n) {
							n = n.length > 1 ? O(n) : n;
							for (var r = O(arguments, 1), o = 'event handler for "'.concat(t, '"'), i = 0, a = n.length; i < a; i++) dn(n[i], e, r, e, o);
						}
						return e;
					});
			})(Cr),
			(function (t) {
				(t.prototype._update = function (t, e) {
					var n = this,
						r = n.$el,
						o = n._vnode,
						i = Le(n);
					(n._vnode = t), (n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1)), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n);
					for (var a = n; a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode; ) (a.$parent.$el = a.$el), (a = a.$parent);
				}),
					(t.prototype.$forceUpdate = function () {
						this._watcher && this._watcher.update();
					}),
					(t.prototype.$destroy = function () {
						var t = this;
						if (!t._isBeingDestroyed) {
							Be(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
							var e = t.$parent;
							!e || e._isBeingDestroyed || t.$options.abstract || g(e.$children, t),
								t._scope.stop(),
							t._data.__ob__ && t._data.__ob__.vmCount--,
								(t._isDestroyed = !0),
								t.__patch__(t._vnode, null),
								Be(t, "destroyed"),
								t.$off(),
							t.$el && (t.$el.__vue__ = null),
							t.$vnode && (t.$vnode.parent = null);
						}
					});
			})(Cr),
			(function (t) {
				me(t.prototype),
					(t.prototype.$nextTick = function (t) {
						return Cn(t, this);
					}),
					(t.prototype._render = function () {
						var t,
							n = this,
							r = n.$options,
							o = r.render,
							i = r._parentVnode;
						i && n._isMounted && ((n.$scopedSlots = be(n.$parent, i.data.scopedSlots, n.$slots, n.$scopedSlots)), n._slotsProxy && Se(n._slotsProxy, n.$scopedSlots)), (n.$vnode = i);
						try {
							ut(n), (Ae = n), (t = o.call(n._renderProxy, n.$createElement));
						} catch (e) {
							fn(e, n, "render"), (t = n._vnode);
						} finally {
							(Ae = null), ut();
						}
						return e(t) && 1 === t.length && (t = t[0]), t instanceof lt || (t = ft()), (t.parent = i), t;
					});
			})(Cr);
		var jr = [String, RegExp, Array],
			Er = {
				name: "keep-alive",
				abstract: !0,
				props: { include: jr, exclude: jr, max: [String, Number] },
				methods: {
					cacheVNode: function () {
						var t = this,
							e = t.cache,
							n = t.keys,
							r = t.vnodeToCache,
							o = t.keyToCache;
						if (r) {
							var i = r.tag,
								a = r.componentInstance,
								s = r.componentOptions;
							(e[o] = { name: Sr(s), tag: i, componentInstance: a }), n.push(o), this.max && n.length > parseInt(this.max) && Ar(e, n[0], n, this._vnode), (this.vnodeToCache = null);
						}
					},
				},
				created: function () {
					(this.cache = Object.create(null)), (this.keys = []);
				},
				destroyed: function () {
					for (var t in this.cache) Ar(this.cache, t, this.keys);
				},
				mounted: function () {
					var t = this;
					this.cacheVNode(),
						this.$watch("include", function (e) {
							Tr(t, function (t) {
								return Or(e, t);
							});
						}),
						this.$watch("exclude", function (e) {
							Tr(t, function (t) {
								return !Or(e, t);
							});
						});
				},
				updated: function () {
					this.cacheVNode();
				},
				render: function () {
					var t = this.$slots.default,
						e = Ee(t),
						n = e && e.componentOptions;
					if (n) {
						var r = Sr(n),
							o = this.include,
							i = this.exclude;
						if ((o && (!r || !Or(o, r))) || (i && r && Or(i, r))) return e;
						var a = this.cache,
							s = this.keys,
							c = null == e.key ? n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "") : e.key;
						a[c] ? ((e.componentInstance = a[c].componentInstance), g(s, c), s.push(c)) : ((this.vnodeToCache = e), (this.keyToCache = c)), (e.data.keepAlive = !0);
					}
					return e || (t && t[0]);
				},
			},
			Nr = { KeepAlive: Er };
		!(function (t) {
			var e = {
				get: function () {
					return H;
				},
			};
			Object.defineProperty(t, "config", e),
				(t.util = { warn: lr, extend: T, mergeOptions: gr, defineReactive: At }),
				(t.set = jt),
				(t.delete = Et),
				(t.nextTick = Cn),
				(t.observable = function (t) {
					return Tt(t), t;
				}),
				(t.options = Object.create(null)),
				R.forEach(function (e) {
					t.options[e + "s"] = Object.create(null);
				}),
				(t.options._base = t),
				T(t.options.components, Nr),
				(function (t) {
					t.use = function (t) {
						var e = this._installedPlugins || (this._installedPlugins = []);
						if (e.indexOf(t) > -1) return this;
						var n = O(arguments, 1);
						return n.unshift(this), a(t.install) ? t.install.apply(t, n) : a(t) && t.apply(null, n), e.push(t), this;
					};
				})(t),
				(function (t) {
					t.mixin = function (t) {
						return (this.options = gr(this.options, t)), this;
					};
				})(t),
				kr(t),
				(function (t) {
					R.forEach(function (e) {
						t[e] = function (t, n) {
							return n
								? ("component" === e && u(n) && ((n.name = n.name || t), (n = this.options._base.extend(n))), "directive" === e && a(n) && (n = { bind: n, update: n }), (this.options[e + "s"][t] = n), n)
								: this.options[e + "s"][t];
						};
					});
				})(t);
		})(Cr),
			Object.defineProperty(Cr.prototype, "$isServer", { get: rt }),
			Object.defineProperty(Cr.prototype, "$ssrContext", {
				get: function () {
					return this.$vnode && this.$vnode.ssrContext;
				},
			}),
			Object.defineProperty(Cr, "FunctionalRenderContext", { value: nr }),
			(Cr.version = Rn);
		var Pr = v("style,class"),
			Dr = v("input,textarea,option,select,progress"),
			Mr = function (t, e, n) {
				return ("value" === n && Dr(t) && "button" !== e) || ("selected" === n && "option" === t) || ("checked" === n && "input" === t) || ("muted" === n && "video" === t);
			},
			Ir = v("contenteditable,draggable,spellcheck"),
			Lr = v("events,caret,typing,plaintext-only"),
			Rr = v(
				"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
			),
			Fr = "http://www.w3.org/1999/xlink",
			Hr = function (t) {
				return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
			},
			Br = function (t) {
				return Hr(t) ? t.slice(6, t.length) : "";
			},
			Ur = function (t) {
				return null == t || !1 === t;
			};
		function zr(t) {
			for (var e = t.data, n = t, o = t; r(o.componentInstance); ) (o = o.componentInstance._vnode) && o.data && (e = Vr(o.data, e));
			for (; r((n = n.parent)); ) n && n.data && (e = Vr(e, n.data));
			return (function (t, e) {
				if (r(t) || r(e)) return Kr(t, Jr(e));
				return "";
			})(e.staticClass, e.class);
		}
		function Vr(t, e) {
			return { staticClass: Kr(t.staticClass, e.staticClass), class: r(t.class) ? [t.class, e.class] : e.class };
		}
		function Kr(t, e) {
			return t ? (e ? t + " " + e : t) : e || "";
		}
		function Jr(t) {
			return Array.isArray(t)
				? (function (t) {
					for (var e, n = "", o = 0, i = t.length; o < i; o++) r((e = Jr(t[o]))) && "" !== e && (n && (n += " "), (n += e));
					return n;
				})(t)
				: s(t)
					? (function (t) {
						var e = "";
						for (var n in t) t[n] && (e && (e += " "), (e += n));
						return e;
					})(t)
					: "string" == typeof t
						? t
						: "";
		}
		var qr = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
			Wr = v(
				"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
			),
			Zr = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
			Gr = function (t) {
				return Wr(t) || Zr(t);
			};
		function Xr(t) {
			return Zr(t) ? "svg" : "math" === t ? "math" : void 0;
		}
		var Yr = Object.create(null);
		var Qr = v("text,number,password,search,email,tel,url");
		function to(t) {
			if ("string" == typeof t) {
				var e = document.querySelector(t);
				return e || document.createElement("div");
			}
			return t;
		}
		var eo = Object.freeze({
				__proto__: null,
				createElement: function (t, e) {
					var n = document.createElement(t);
					return "select" !== t || (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple")), n;
				},
				createElementNS: function (t, e) {
					return document.createElementNS(qr[t], e);
				},
				createTextNode: function (t) {
					return document.createTextNode(t);
				},
				createComment: function (t) {
					return document.createComment(t);
				},
				insertBefore: function (t, e, n) {
					t.insertBefore(e, n);
				},
				removeChild: function (t, e) {
					t.removeChild(e);
				},
				appendChild: function (t, e) {
					t.appendChild(e);
				},
				parentNode: function (t) {
					return t.parentNode;
				},
				nextSibling: function (t) {
					return t.nextSibling;
				},
				tagName: function (t) {
					return t.tagName;
				},
				setTextContent: function (t, e) {
					t.textContent = e;
				},
				setStyleScope: function (t, e) {
					t.setAttribute(e, "");
				},
			}),
			no = {
				create: function (t, e) {
					ro(e);
				},
				update: function (t, e) {
					t.data.ref !== e.data.ref && (ro(t, !0), ro(e));
				},
				destroy: function (t) {
					ro(t, !0);
				},
			};
		function ro(t, n) {
			var o = t.data.ref;
			if (r(o)) {
				var i = t.context,
					s = t.componentInstance || t.elm,
					c = n ? null : s,
					u = n ? void 0 : s;
				if (a(o)) dn(o, i, [c], i, "template ref function");
				else {
					var l = t.data.refInFor,
						f = "string" == typeof o || "number" == typeof o,
						d = Ft(o),
						p = i.$refs;
					if (f || d)
						if (l) {
							var v = f ? p[o] : o.value;
							n ? e(v) && g(v, s) : e(v) ? v.includes(s) || v.push(s) : f ? ((p[o] = [s]), oo(i, o, p[o])) : (o.value = [s]);
						} else if (f) {
							if (n && p[o] !== s) return;
							(p[o] = u), oo(i, o, c);
						} else if (d) {
							if (n && o.value !== s) return;
							o.value = c;
						}
				}
			}
		}
		function oo(t, e, n) {
			var r = t._setupState;
			r && _(r, e) && (Ft(r[e]) ? (r[e].value = n) : (r[e] = n));
		}
		var io = new lt("", {}, []),
			ao = ["create", "activate", "update", "remove", "destroy"];
		function so(t, e) {
			return (
				t.key === e.key &&
				t.asyncFactory === e.asyncFactory &&
				((t.tag === e.tag &&
						t.isComment === e.isComment &&
						r(t.data) === r(e.data) &&
						(function (t, e) {
							if ("input" !== t.tag) return !0;
							var n,
								o = r((n = t.data)) && r((n = n.attrs)) && n.type,
								i = r((n = e.data)) && r((n = n.attrs)) && n.type;
							return o === i || (Qr(o) && Qr(i));
						})(t, e)) ||
					(o(t.isAsyncPlaceholder) && n(e.asyncFactory.error)))
			);
		}
		function co(t, e, n) {
			var o,
				i,
				a = {};
			for (o = e; o <= n; ++o) r((i = t[o].key)) && (a[i] = o);
			return a;
		}
		var uo = {
			create: lo,
			update: lo,
			destroy: function (t) {
				lo(t, io);
			},
		};
		function lo(t, e) {
			(t.data.directives || e.data.directives) &&
			(function (t, e) {
				var n,
					r,
					o,
					i = t === io,
					a = e === io,
					s = po(t.data.directives, t.context),
					c = po(e.data.directives, e.context),
					u = [],
					l = [];
				for (n in c) (r = s[n]), (o = c[n]), r ? ((o.oldValue = r.value), (o.oldArg = r.arg), ho(o, "update", e, t), o.def && o.def.componentUpdated && l.push(o)) : (ho(o, "bind", e, t), o.def && o.def.inserted && u.push(o));
				if (u.length) {
					var f = function () {
						for (var n = 0; n < u.length; n++) ho(u[n], "inserted", e, t);
					};
					i ? Zt(e, "insert", f) : f();
				}
				l.length &&
				Zt(e, "postpatch", function () {
					for (var n = 0; n < l.length; n++) ho(l[n], "componentUpdated", e, t);
				});
				if (!i) for (n in s) c[n] || ho(s[n], "unbind", t, t, a);
			})(t, e);
		}
		var fo = Object.create(null);
		function po(t, e) {
			var n,
				r,
				o = Object.create(null);
			if (!t) return o;
			for (n = 0; n < t.length; n++) {
				if (((r = t[n]).modifiers || (r.modifiers = fo), (o[vo(r)] = r), e._setupState && e._setupState.__sfc)) {
					var i = r.def || yr(e, "_setupState", "v-" + r.name);
					r.def = "function" == typeof i ? { bind: i, update: i } : i;
				}
				r.def = r.def || yr(e.$options, "directives", r.name);
			}
			return o;
		}
		function vo(t) {
			return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
		}
		function ho(t, e, n, r, o) {
			var i = t.def && t.def[e];
			if (i)
				try {
					i(n.elm, t, n, r, o);
				} catch (r) {
					fn(r, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
				}
		}
		var mo = [no, uo];
		function go(t, e) {
			var i = e.componentOptions;
			if (!((r(i) && !1 === i.Ctor.options.inheritAttrs) || (n(t.data.attrs) && n(e.data.attrs)))) {
				var a,
					s,
					c = e.elm,
					u = t.data.attrs || {},
					l = e.data.attrs || {};
				for (a in ((r(l.__ob__) || o(l._v_attr_proxy)) && (l = e.data.attrs = T({}, l)), l)) (s = l[a]), u[a] !== s && yo(c, a, s, e.data.pre);
				for (a in ((W || G) && l.value !== u.value && yo(c, "value", l.value), u)) n(l[a]) && (Hr(a) ? c.removeAttributeNS(Fr, Br(a)) : Ir(a) || c.removeAttribute(a));
			}
		}
		function yo(t, e, n, r) {
			r || t.tagName.indexOf("-") > -1
				? _o(t, e, n)
				: Rr(e)
					? Ur(n)
						? t.removeAttribute(e)
						: ((n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e), t.setAttribute(e, n))
					: Ir(e)
						? t.setAttribute(
							e,
							(function (t, e) {
								return Ur(e) || "false" === e ? "false" : "contenteditable" === t && Lr(e) ? e : "true";
							})(e, n)
						)
						: Hr(e)
							? Ur(n)
								? t.removeAttributeNS(Fr, Br(e))
								: t.setAttributeNS(Fr, e, n)
							: _o(t, e, n);
		}
		function _o(t, e, n) {
			if (Ur(n)) t.removeAttribute(e);
			else {
				if (W && !Z && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
					var r = function (e) {
						e.stopImmediatePropagation(), t.removeEventListener("input", r);
					};
					t.addEventListener("input", r), (t.__ieph = !0);
				}
				t.setAttribute(e, n);
			}
		}
		var bo = { create: go, update: go };
		function $o(t, e) {
			var o = e.elm,
				i = e.data,
				a = t.data;
			if (!(n(i.staticClass) && n(i.class) && (n(a) || (n(a.staticClass) && n(a.class))))) {
				var s = zr(e),
					c = o._transitionClasses;
				r(c) && (s = Kr(s, Jr(c))), s !== o._prevClass && (o.setAttribute("class", s), (o._prevClass = s));
			}
		}
		var wo,
			xo,
			Co,
			ko,
			So,
			Oo,
			To = { create: $o, update: $o },
			Ao = /[\w).+\-_$\]]/;
		function jo(t) {
			var e,
				n,
				r,
				o,
				i,
				a = !1,
				s = !1,
				c = !1,
				u = !1,
				l = 0,
				f = 0,
				d = 0,
				p = 0;
			for (r = 0; r < t.length; r++)
				if (((n = e), (e = t.charCodeAt(r)), a)) 39 === e && 92 !== n && (a = !1);
				else if (s) 34 === e && 92 !== n && (s = !1);
				else if (c) 96 === e && 92 !== n && (c = !1);
				else if (u) 47 === e && 92 !== n && (u = !1);
				else if (124 !== e || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || l || f || d) {
					switch (e) {
						case 34:
							s = !0;
							break;
						case 39:
							a = !0;
							break;
						case 96:
							c = !0;
							break;
						case 40:
							d++;
							break;
						case 41:
							d--;
							break;
						case 91:
							f++;
							break;
						case 93:
							f--;
							break;
						case 123:
							l++;
							break;
						case 125:
							l--;
					}
					if (47 === e) {
						for (var v = r - 1, h = void 0; v >= 0 && " " === (h = t.charAt(v)); v--);
						(h && Ao.test(h)) || (u = !0);
					}
				} else void 0 === o ? ((p = r + 1), (o = t.slice(0, r).trim())) : m();
			function m() {
				(i || (i = [])).push(t.slice(p, r).trim()), (p = r + 1);
			}
			if ((void 0 === o ? (o = t.slice(0, r).trim()) : 0 !== p && m(), i)) for (r = 0; r < i.length; r++) o = Eo(o, i[r]);
			return o;
		}
		function Eo(t, e) {
			var n = e.indexOf("(");
			if (n < 0) return '_f("'.concat(e, '")(').concat(t, ")");
			var r = e.slice(0, n),
				o = e.slice(n + 1);
			return '_f("'
				.concat(r, '")(')
				.concat(t)
				.concat(")" !== o ? "," + o : o);
		}
		function No(t, e) {
			console.error("[Vue compiler]: ".concat(t));
		}
		function Po(t, e) {
			return t
				? t
					.map(function (t) {
						return t[e];
					})
					.filter(function (t) {
						return t;
					})
				: [];
		}
		function Do(t, e, n, r, o) {
			(t.props || (t.props = [])).push(zo({ name: e, value: n, dynamic: o }, r)), (t.plain = !1);
		}
		function Mo(t, e, n, r, o) {
			(o ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = [])).push(zo({ name: e, value: n, dynamic: o }, r)), (t.plain = !1);
		}
		function Io(t, e, n, r) {
			(t.attrsMap[e] = n), t.attrsList.push(zo({ name: e, value: n }, r));
		}
		function Lo(t, e, n, r, o, i, a, s) {
			(t.directives || (t.directives = [])).push(zo({ name: e, rawName: n, value: r, arg: o, isDynamicArg: i, modifiers: a }, s)), (t.plain = !1);
		}
		function Ro(t, e, n) {
			return n ? "_p(".concat(e, ',"').concat(t, '")') : t + e;
		}
		function Fo(e, n, r, o, i, a, s, c) {
			var u;
			(o = o || t).right
				? c
					? (n = "(".concat(n, ")==='click'?'contextmenu':(").concat(n, ")"))
					: "click" === n && ((n = "contextmenu"), delete o.right)
				: o.middle && (c ? (n = "(".concat(n, ")==='click'?'mouseup':(").concat(n, ")")) : "click" === n && (n = "mouseup")),
			o.capture && (delete o.capture, (n = Ro("!", n, c))),
			o.once && (delete o.once, (n = Ro("~", n, c))),
			o.passive && (delete o.passive, (n = Ro("&", n, c))),
				o.native ? (delete o.native, (u = e.nativeEvents || (e.nativeEvents = {}))) : (u = e.events || (e.events = {}));
			var l = zo({ value: r.trim(), dynamic: c }, s);
			o !== t && (l.modifiers = o);
			var f = u[n];
			Array.isArray(f) ? (i ? f.unshift(l) : f.push(l)) : (u[n] = f ? (i ? [l, f] : [f, l]) : l), (e.plain = !1);
		}
		function Ho(t, e, n) {
			var r = Bo(t, ":" + e) || Bo(t, "v-bind:" + e);
			if (null != r) return jo(r);
			if (!1 !== n) {
				var o = Bo(t, e);
				if (null != o) return JSON.stringify(o);
			}
		}
		function Bo(t, e, n) {
			var r;
			if (null != (r = t.attrsMap[e]))
				for (var o = t.attrsList, i = 0, a = o.length; i < a; i++)
					if (o[i].name === e) {
						o.splice(i, 1);
						break;
					}
			return n && delete t.attrsMap[e], r;
		}
		function Uo(t, e) {
			for (var n = t.attrsList, r = 0, o = n.length; r < o; r++) {
				var i = n[r];
				if (e.test(i.name)) return n.splice(r, 1), i;
			}
		}
		function zo(t, e) {
			return e && (null != e.start && (t.start = e.start), null != e.end && (t.end = e.end)), t;
		}
		function Vo(t, e, n) {
			var r = n || {},
				o = r.number,
				i = "$$v",
				a = i;
			r.trim && (a = "(typeof ".concat(i, " === 'string'") + "? ".concat(i, ".trim()") + ": ".concat(i, ")")), o && (a = "_n(".concat(a, ")"));
			var s = Ko(e, a);
			t.model = { value: "(".concat(e, ")"), expression: JSON.stringify(e), callback: "function (".concat(i, ") {").concat(s, "}") };
		}
		function Ko(t, e) {
			var n = (function (t) {
				if (((t = t.trim()), (wo = t.length), t.indexOf("[") < 0 || t.lastIndexOf("]") < wo - 1)) return (ko = t.lastIndexOf(".")) > -1 ? { exp: t.slice(0, ko), key: '"' + t.slice(ko + 1) + '"' } : { exp: t, key: null };
				(xo = t), (ko = So = Oo = 0);
				for (; !qo(); ) Wo((Co = Jo())) ? Go(Co) : 91 === Co && Zo(Co);
				return { exp: t.slice(0, So), key: t.slice(So + 1, Oo) };
			})(t);
			return null === n.key ? "".concat(t, "=").concat(e) : "$set(".concat(n.exp, ", ").concat(n.key, ", ").concat(e, ")");
		}
		function Jo() {
			return xo.charCodeAt(++ko);
		}
		function qo() {
			return ko >= wo;
		}
		function Wo(t) {
			return 34 === t || 39 === t;
		}
		function Zo(t) {
			var e = 1;
			for (So = ko; !qo(); )
				if (Wo((t = Jo()))) Go(t);
				else if ((91 === t && e++, 93 === t && e--, 0 === e)) {
					Oo = ko;
					break;
				}
		}
		function Go(t) {
			for (var e = t; !qo() && (t = Jo()) !== e; );
		}
		var Xo,
			Yo = "__r";
		function Qo(t, e, n) {
			var r = Xo;
			return function o() {
				var i = e.apply(null, arguments);
				null !== i && ni(t, o, n, r);
			};
		}
		var ti = mn && !(Q && Number(Q[1]) <= 53);
		function ei(t, e, n, r) {
			if (ti) {
				var o = We,
					i = e;
				e = i._wrapper = function (t) {
					if (t.target === t.currentTarget || t.timeStamp >= o || t.timeStamp <= 0 || t.target.ownerDocument !== document) return i.apply(this, arguments);
				};
			}
			Xo.addEventListener(t, e, et ? { capture: n, passive: r } : n);
		}
		function ni(t, e, n, r) {
			(r || Xo).removeEventListener(t, e._wrapper || e, n);
		}
		function ri(t, e) {
			if (!n(t.data.on) || !n(e.data.on)) {
				var o = e.data.on || {},
					i = t.data.on || {};
				(Xo = e.elm || t.elm),
					(function (t) {
						if (r(t.__r)) {
							var e = W ? "change" : "input";
							(t[e] = [].concat(t.__r, t[e] || [])), delete t.__r;
						}
						r(t.__c) && ((t.change = [].concat(t.__c, t.change || [])), delete t.__c);
					})(o),
					Wt(o, i, ei, ni, Qo, e.context),
					(Xo = void 0);
			}
		}
		var oi,
			ii = {
				create: ri,
				update: ri,
				destroy: function (t) {
					return ri(t, io);
				},
			};
		function ai(t, e) {
			if (!n(t.data.domProps) || !n(e.data.domProps)) {
				var i,
					a,
					s = e.elm,
					c = t.data.domProps || {},
					u = e.data.domProps || {};
				for (i in ((r(u.__ob__) || o(u._v_attr_proxy)) && (u = e.data.domProps = T({}, u)), c)) i in u || (s[i] = "");
				for (i in u) {
					if (((a = u[i]), "textContent" === i || "innerHTML" === i)) {
						if ((e.children && (e.children.length = 0), a === c[i])) continue;
						1 === s.childNodes.length && s.removeChild(s.childNodes[0]);
					}
					if ("value" === i && "PROGRESS" !== s.tagName) {
						s._value = a;
						var l = n(a) ? "" : String(a);
						si(s, l) && (s.value = l);
					} else if ("innerHTML" === i && Zr(s.tagName) && n(s.innerHTML)) {
						(oi = oi || document.createElement("div")).innerHTML = "<svg>".concat(a, "</svg>");
						for (var f = oi.firstChild; s.firstChild; ) s.removeChild(s.firstChild);
						for (; f.firstChild; ) s.appendChild(f.firstChild);
					} else if (a !== c[i])
						try {
							s[i] = a;
						} catch (t) {}
				}
			}
		}
		function si(t, e) {
			return (
				!t.composing &&
				("OPTION" === t.tagName ||
					(function (t, e) {
						var n = !0;
						try {
							n = document.activeElement !== t;
						} catch (t) {}
						return n && t.value !== e;
					})(t, e) ||
					(function (t, e) {
						var n = t.value,
							o = t._vModifiers;
						if (r(o)) {
							if (o.number) return p(n) !== p(e);
							if (o.trim) return n.trim() !== e.trim();
						}
						return n !== e;
					})(t, e))
			);
		}
		var ci = { create: ai, update: ai },
			ui = b(function (t) {
				var e = {},
					n = /:(.+)/;
				return (
					t.split(/;(?![^(]*\))/g).forEach(function (t) {
						if (t) {
							var r = t.split(n);
							r.length > 1 && (e[r[0].trim()] = r[1].trim());
						}
					}),
						e
				);
			});
		function li(t) {
			var e = fi(t.style);
			return t.staticStyle ? T(t.staticStyle, e) : e;
		}
		function fi(t) {
			return Array.isArray(t) ? A(t) : "string" == typeof t ? ui(t) : t;
		}
		var di,
			pi = /^--/,
			vi = /\s*!important$/,
			hi = function (t, e, n) {
				if (pi.test(e)) t.style.setProperty(e, n);
				else if (vi.test(n)) t.style.setProperty(k(e), n.replace(vi, ""), "important");
				else {
					var r = gi(e);
					if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
					else t.style[r] = n;
				}
			},
			mi = ["Webkit", "Moz", "ms"],
			gi = b(function (t) {
				if (((di = di || document.createElement("div").style), "filter" !== (t = w(t)) && t in di)) return t;
				for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < mi.length; n++) {
					var r = mi[n] + e;
					if (r in di) return r;
				}
			});
		function yi(t, e) {
			var o = e.data,
				i = t.data;
			if (!(n(o.staticStyle) && n(o.style) && n(i.staticStyle) && n(i.style))) {
				var a,
					s,
					c = e.elm,
					u = i.staticStyle,
					l = i.normalizedStyle || i.style || {},
					f = u || l,
					d = fi(e.data.style) || {};
				e.data.normalizedStyle = r(d.__ob__) ? T({}, d) : d;
				var p = (function (t, e) {
					var n,
						r = {};
					if (e) for (var o = t; o.componentInstance; ) (o = o.componentInstance._vnode) && o.data && (n = li(o.data)) && T(r, n);
					(n = li(t.data)) && T(r, n);
					for (var i = t; (i = i.parent); ) i.data && (n = li(i.data)) && T(r, n);
					return r;
				})(e, !0);
				for (s in f) n(p[s]) && hi(c, s, "");
				for (s in p) (a = p[s]) !== f[s] && hi(c, s, null == a ? "" : a);
			}
		}
		var _i = { create: yi, update: yi },
			bi = /\s+/;
		function $i(t, e) {
			if (e && (e = e.trim()))
				if (t.classList)
					e.indexOf(" ") > -1
						? e.split(bi).forEach(function (e) {
							return t.classList.add(e);
						})
						: t.classList.add(e);
				else {
					var n = " ".concat(t.getAttribute("class") || "", " ");
					n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
				}
		}
		function wi(t, e) {
			if (e && (e = e.trim()))
				if (t.classList)
					e.indexOf(" ") > -1
						? e.split(bi).forEach(function (e) {
							return t.classList.remove(e);
						})
						: t.classList.remove(e),
					t.classList.length || t.removeAttribute("class");
				else {
					for (var n = " ".concat(t.getAttribute("class") || "", " "), r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
					(n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
				}
		}
		function xi(t) {
			if (t) {
				if ("object" == typeof t) {
					var e = {};
					return !1 !== t.css && T(e, Ci(t.name || "v")), T(e, t), e;
				}
				return "string" == typeof t ? Ci(t) : void 0;
			}
		}
		var Ci = b(function (t) {
				return {
					enterClass: "".concat(t, "-enter"),
					enterToClass: "".concat(t, "-enter-to"),
					enterActiveClass: "".concat(t, "-enter-active"),
					leaveClass: "".concat(t, "-leave"),
					leaveToClass: "".concat(t, "-leave-to"),
					leaveActiveClass: "".concat(t, "-leave-active"),
				};
			}),
			ki = J && !Z,
			Si = "transition",
			Oi = "animation",
			Ti = "transition",
			Ai = "transitionend",
			ji = "animation",
			Ei = "animationend";
		ki &&
		(void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && ((Ti = "WebkitTransition"), (Ai = "webkitTransitionEnd")),
		void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && ((ji = "WebkitAnimation"), (Ei = "webkitAnimationEnd")));
		var Ni = J
			? window.requestAnimationFrame
				? window.requestAnimationFrame.bind(window)
				: setTimeout
			: function (t) {
				return t();
			};
		function Pi(t) {
			Ni(function () {
				Ni(t);
			});
		}
		function Di(t, e) {
			var n = t._transitionClasses || (t._transitionClasses = []);
			n.indexOf(e) < 0 && (n.push(e), $i(t, e));
		}
		function Mi(t, e) {
			t._transitionClasses && g(t._transitionClasses, e), wi(t, e);
		}
		function Ii(t, e, n) {
			var r = Ri(t, e),
				o = r.type,
				i = r.timeout,
				a = r.propCount;
			if (!o) return n();
			var s = o === Si ? Ai : Ei,
				c = 0,
				u = function () {
					t.removeEventListener(s, l), n();
				},
				l = function (e) {
					e.target === t && ++c >= a && u();
				};
			setTimeout(function () {
				c < a && u();
			}, i + 1),
				t.addEventListener(s, l);
		}
		var Li = /\b(transform|all)(,|$)/;
		function Ri(t, e) {
			var n,
				r = window.getComputedStyle(t),
				o = (r[Ti + "Delay"] || "").split(", "),
				i = (r[Ti + "Duration"] || "").split(", "),
				a = Fi(o, i),
				s = (r[ji + "Delay"] || "").split(", "),
				c = (r[ji + "Duration"] || "").split(", "),
				u = Fi(s, c),
				l = 0,
				f = 0;
			return (
				e === Si ? a > 0 && ((n = Si), (l = a), (f = i.length)) : e === Oi ? u > 0 && ((n = Oi), (l = u), (f = c.length)) : (f = (n = (l = Math.max(a, u)) > 0 ? (a > u ? Si : Oi) : null) ? (n === Si ? i.length : c.length) : 0),
					{ type: n, timeout: l, propCount: f, hasTransform: n === Si && Li.test(r[Ti + "Property"]) }
			);
		}
		function Fi(t, e) {
			for (; t.length < e.length; ) t = t.concat(t);
			return Math.max.apply(
				null,
				e.map(function (e, n) {
					return Hi(e) + Hi(t[n]);
				})
			);
		}
		function Hi(t) {
			return 1e3 * Number(t.slice(0, -1).replace(",", "."));
		}
		function Bi(t, e) {
			var o = t.elm;
			r(o._leaveCb) && ((o._leaveCb.cancelled = !0), o._leaveCb());
			var i = xi(t.data.transition);
			if (!n(i) && !r(o._enterCb) && 1 === o.nodeType) {
				for (
					var c = i.css,
						u = i.type,
						l = i.enterClass,
						f = i.enterToClass,
						d = i.enterActiveClass,
						v = i.appearClass,
						h = i.appearToClass,
						m = i.appearActiveClass,
						g = i.beforeEnter,
						y = i.enter,
						_ = i.afterEnter,
						b = i.enterCancelled,
						$ = i.beforeAppear,
						w = i.appear,
						x = i.afterAppear,
						C = i.appearCancelled,
						k = i.duration,
						S = Ie,
						O = Ie.$vnode;
					O && O.parent;
				
				)
					(S = O.context), (O = O.parent);
				var T = !S._isMounted || !t.isRootInsert;
				if (!T || w || "" === w) {
					var A = T && v ? v : l,
						j = T && m ? m : d,
						E = T && h ? h : f,
						N = (T && $) || g,
						P = T && a(w) ? w : y,
						D = (T && x) || _,
						I = (T && C) || b,
						L = p(s(k) ? k.enter : k),
						R = !1 !== c && !Z,
						F = Vi(P),
						H = (o._enterCb = M(function () {
							R && (Mi(o, E), Mi(o, j)), H.cancelled ? (R && Mi(o, A), I && I(o)) : D && D(o), (o._enterCb = null);
						}));
					t.data.show ||
					Zt(t, "insert", function () {
						var e = o.parentNode,
							n = e && e._pending && e._pending[t.key];
						n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), P && P(o, H);
					}),
					N && N(o),
					R &&
					(Di(o, A),
						Di(o, j),
						Pi(function () {
							Mi(o, A), H.cancelled || (Di(o, E), F || (zi(L) ? setTimeout(H, L) : Ii(o, u, H)));
						})),
					t.data.show && (e && e(), P && P(o, H)),
					R || F || H();
				}
			}
		}
		function Ui(t, e) {
			var o = t.elm;
			r(o._enterCb) && ((o._enterCb.cancelled = !0), o._enterCb());
			var i = xi(t.data.transition);
			if (n(i) || 1 !== o.nodeType) return e();
			if (!r(o._leaveCb)) {
				var a = i.css,
					c = i.type,
					u = i.leaveClass,
					l = i.leaveToClass,
					f = i.leaveActiveClass,
					d = i.beforeLeave,
					v = i.leave,
					h = i.afterLeave,
					m = i.leaveCancelled,
					g = i.delayLeave,
					y = i.duration,
					_ = !1 !== a && !Z,
					b = Vi(v),
					$ = p(s(y) ? y.leave : y),
					w = (o._leaveCb = M(function () {
						o.parentNode && o.parentNode._pending && (o.parentNode._pending[t.key] = null), _ && (Mi(o, l), Mi(o, f)), w.cancelled ? (_ && Mi(o, u), m && m(o)) : (e(), h && h(o)), (o._leaveCb = null);
					}));
				g ? g(x) : x();
			}
			function x() {
				w.cancelled ||
				(!t.data.show && o.parentNode && ((o.parentNode._pending || (o.parentNode._pending = {}))[t.key] = t),
				d && d(o),
				_ &&
				(Di(o, u),
					Di(o, f),
					Pi(function () {
						Mi(o, u), w.cancelled || (Di(o, l), b || (zi($) ? setTimeout(w, $) : Ii(o, c, w)));
					})),
				v && v(o, w),
				_ || b || w());
			}
		}
		function zi(t) {
			return "number" == typeof t && !isNaN(t);
		}
		function Vi(t) {
			if (n(t)) return !1;
			var e = t.fns;
			return r(e) ? Vi(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
		}
		function Ki(t, e) {
			!0 !== e.data.show && Bi(e);
		}
		var Ji = (function (t) {
			var a,
				s,
				c = {},
				u = t.modules,
				l = t.nodeOps;
			for (a = 0; a < ao.length; ++a) for (c[ao[a]] = [], s = 0; s < u.length; ++s) r(u[s][ao[a]]) && c[ao[a]].push(u[s][ao[a]]);
			function f(t) {
				var e = l.parentNode(t);
				r(e) && l.removeChild(e, t);
			}
			function d(t, e, n, i, a, s, u) {
				if (
					(r(t.elm) && r(s) && (t = s[u] = pt(t)),
						(t.isRootInsert = !a),
						!(function (t, e, n, i) {
							var a = t.data;
							if (r(a)) {
								var s = r(t.componentInstance) && a.keepAlive;
								if ((r((a = a.hook)) && r((a = a.init)) && a(t, !1), r(t.componentInstance)))
									return (
										p(t, e),
											h(n, t.elm, i),
										o(s) &&
										(function (t, e, n, o) {
											var i,
												a = t;
											for (; a.componentInstance; )
												if (r((i = (a = a.componentInstance._vnode).data)) && r((i = i.transition))) {
													for (i = 0; i < c.activate.length; ++i) c.activate[i](io, a);
													e.push(a);
													break;
												}
											h(n, t.elm, o);
										})(t, e, n, i),
											!0
									);
							}
						})(t, e, n, i))
				) {
					var f = t.data,
						d = t.children,
						v = t.tag;
					r(v)
						? ((t.elm = t.ns ? l.createElementNS(t.ns, v) : l.createElement(v, t)), _(t), m(t, d, e), r(f) && y(t, e), h(n, t.elm, i))
						: o(t.isComment)
							? ((t.elm = l.createComment(t.text)), h(n, t.elm, i))
							: ((t.elm = l.createTextNode(t.text)), h(n, t.elm, i));
				}
			}
			function p(t, e) {
				r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), (t.data.pendingInsert = null)), (t.elm = t.componentInstance.$el), g(t) ? (y(t, e), _(t)) : (ro(t), e.push(t));
			}
			function h(t, e, n) {
				r(t) && (r(n) ? l.parentNode(n) === t && l.insertBefore(t, e, n) : l.appendChild(t, e));
			}
			function m(t, n, r) {
				if (e(n)) for (var o = 0; o < n.length; ++o) d(n[o], r, t.elm, null, !0, n, o);
				else i(t.text) && l.appendChild(t.elm, l.createTextNode(String(t.text)));
			}
			function g(t) {
				for (; t.componentInstance; ) t = t.componentInstance._vnode;
				return r(t.tag);
			}
			function y(t, e) {
				for (var n = 0; n < c.create.length; ++n) c.create[n](io, t);
				r((a = t.data.hook)) && (r(a.create) && a.create(io, t), r(a.insert) && e.push(t));
			}
			function _(t) {
				var e;
				if (r((e = t.fnScopeId))) l.setStyleScope(t.elm, e);
				else for (var n = t; n; ) r((e = n.context)) && r((e = e.$options._scopeId)) && l.setStyleScope(t.elm, e), (n = n.parent);
				r((e = Ie)) && e !== t.context && e !== t.fnContext && r((e = e.$options._scopeId)) && l.setStyleScope(t.elm, e);
			}
			function b(t, e, n, r, o, i) {
				for (; r <= o; ++r) d(n[r], i, t, e, !1, n, r);
			}
			function $(t) {
				var e,
					n,
					o = t.data;
				if (r(o)) for (r((e = o.hook)) && r((e = e.destroy)) && e(t), e = 0; e < c.destroy.length; ++e) c.destroy[e](t);
				if (r((e = t.children))) for (n = 0; n < t.children.length; ++n) $(t.children[n]);
			}
			function w(t, e, n) {
				for (; e <= n; ++e) {
					var o = t[e];
					r(o) && (r(o.tag) ? (x(o), $(o)) : f(o.elm));
				}
			}
			function x(t, e) {
				if (r(e) || r(t.data)) {
					var n,
						o = c.remove.length + 1;
					for (
						r(e)
							? (e.listeners += o)
							: (e = (function (t, e) {
								function n() {
									0 == --n.listeners && f(t);
								}
								return (n.listeners = e), n;
							})(t.elm, o)),
						r((n = t.componentInstance)) && r((n = n._vnode)) && r(n.data) && x(n, e),
							n = 0;
						n < c.remove.length;
						++n
					)
						c.remove[n](t, e);
					r((n = t.data.hook)) && r((n = n.remove)) ? n(t, e) : e();
				} else f(t.elm);
			}
			function C(t, e, n, o) {
				for (var i = n; i < o; i++) {
					var a = e[i];
					if (r(a) && so(t, a)) return i;
				}
			}
			function k(t, e, i, a, s, u) {
				if (t !== e) {
					r(e.elm) && r(a) && (e = a[s] = pt(e));
					var f = (e.elm = t.elm);
					if (o(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? T(t.elm, e, i) : (e.isAsyncPlaceholder = !0);
					else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) e.componentInstance = t.componentInstance;
					else {
						var p,
							v = e.data;
						r(v) && r((p = v.hook)) && r((p = p.prepatch)) && p(t, e);
						var h = t.children,
							m = e.children;
						if (r(v) && g(e)) {
							for (p = 0; p < c.update.length; ++p) c.update[p](t, e);
							r((p = v.hook)) && r((p = p.update)) && p(t, e);
						}
						n(e.text)
							? r(h) && r(m)
								? h !== m &&
								(function (t, e, o, i, a) {
									for (var s, c, u, f = 0, p = 0, v = e.length - 1, h = e[0], m = e[v], g = o.length - 1, y = o[0], _ = o[g], $ = !a; f <= v && p <= g; )
										n(h)
											? (h = e[++f])
											: n(m)
												? (m = e[--v])
												: so(h, y)
													? (k(h, y, i, o, p), (h = e[++f]), (y = o[++p]))
													: so(m, _)
														? (k(m, _, i, o, g), (m = e[--v]), (_ = o[--g]))
														: so(h, _)
															? (k(h, _, i, o, g), $ && l.insertBefore(t, h.elm, l.nextSibling(m.elm)), (h = e[++f]), (_ = o[--g]))
															: so(m, y)
																? (k(m, y, i, o, p), $ && l.insertBefore(t, m.elm, h.elm), (m = e[--v]), (y = o[++p]))
																: (n(s) && (s = co(e, f, v)),
																	n((c = r(y.key) ? s[y.key] : C(y, e, f, v)))
																		? d(y, i, t, h.elm, !1, o, p)
																		: so((u = e[c]), y)
																			? (k(u, y, i, o, p), (e[c] = void 0), $ && l.insertBefore(t, u.elm, h.elm))
																			: d(y, i, t, h.elm, !1, o, p),
																	(y = o[++p]));
									f > v ? b(t, n(o[g + 1]) ? null : o[g + 1].elm, o, p, g, i) : p > g && w(e, f, v);
								})(f, h, m, i, u)
								: r(m)
									? (r(t.text) && l.setTextContent(f, ""), b(f, null, m, 0, m.length - 1, i))
									: r(h)
										? w(h, 0, h.length - 1)
										: r(t.text) && l.setTextContent(f, "")
							: t.text !== e.text && l.setTextContent(f, e.text),
						r(v) && r((p = v.hook)) && r((p = p.postpatch)) && p(t, e);
					}
				}
			}
			function S(t, e, n) {
				if (o(n) && r(t.parent)) t.parent.data.pendingInsert = e;
				else for (var i = 0; i < e.length; ++i) e[i].data.hook.insert(e[i]);
			}
			var O = v("attrs,class,staticClass,staticStyle,key");
			function T(t, e, n, i) {
				var a,
					s = e.tag,
					c = e.data,
					u = e.children;
				if (((i = i || (c && c.pre)), (e.elm = t), o(e.isComment) && r(e.asyncFactory))) return (e.isAsyncPlaceholder = !0), !0;
				if (r(c) && (r((a = c.hook)) && r((a = a.init)) && a(e, !0), r((a = e.componentInstance)))) return p(e, n), !0;
				if (r(s)) {
					if (r(u))
						if (t.hasChildNodes())
							if (r((a = c)) && r((a = a.domProps)) && r((a = a.innerHTML))) {
								if (a !== t.innerHTML) return !1;
							} else {
								for (var l = !0, f = t.firstChild, d = 0; d < u.length; d++) {
									if (!f || !T(f, u[d], n, i)) {
										l = !1;
										break;
									}
									f = f.nextSibling;
								}
								if (!l || f) return !1;
							}
						else m(e, u, n);
					if (r(c)) {
						var v = !1;
						for (var h in c)
							if (!O(h)) {
								(v = !0), y(e, n);
								break;
							}
						!v && c.class && Bn(c.class);
					}
				} else t.data !== e.text && (t.data = e.text);
				return !0;
			}
			return function (t, e, i, a) {
				if (!n(e)) {
					var s,
						u = !1,
						f = [];
					if (n(t)) (u = !0), d(e, f);
					else {
						var p = r(t.nodeType);
						if (!p && so(t, e)) k(t, e, f, null, null, a);
						else {
							if (p) {
								if ((1 === t.nodeType && t.hasAttribute(L) && (t.removeAttribute(L), (i = !0)), o(i) && T(t, e, f))) return S(e, f, !0), t;
								(s = t), (t = new lt(l.tagName(s).toLowerCase(), {}, [], void 0, s));
							}
							var v = t.elm,
								h = l.parentNode(v);
							if ((d(e, f, v._leaveCb ? null : h, l.nextSibling(v)), r(e.parent)))
								for (var m = e.parent, y = g(e); m; ) {
									for (var _ = 0; _ < c.destroy.length; ++_) c.destroy[_](m);
									if (((m.elm = e.elm), y)) {
										for (var b = 0; b < c.create.length; ++b) c.create[b](io, m);
										var x = m.data.hook.insert;
										if (x.merged) for (var C = 1; C < x.fns.length; C++) x.fns[C]();
									} else ro(m);
									m = m.parent;
								}
							r(h) ? w([t], 0, 0) : r(t.tag) && $(t);
						}
					}
					return S(e, f, u), e.elm;
				}
				r(t) && $(t);
			};
		})({
			nodeOps: eo,
			modules: [
				bo,
				To,
				ii,
				ci,
				_i,
				J
					? {
						create: Ki,
						activate: Ki,
						remove: function (t, e) {
							!0 !== t.data.show ? Ui(t, e) : e();
						},
					}
					: {},
			].concat(mo),
		});
		Z &&
		document.addEventListener("selectionchange", function () {
			var t = document.activeElement;
			t && t.vmodel && ta(t, "input");
		});
		var qi = {
			inserted: function (t, e, n, r) {
				"select" === n.tag
					? (r.elm && !r.elm._vOptions
						? Zt(n, "postpatch", function () {
							qi.componentUpdated(t, e, n);
						})
						: Wi(t, e, n.context),
						(t._vOptions = [].map.call(t.options, Xi)))
					: ("textarea" === n.tag || Qr(t.type)) &&
					((t._vModifiers = e.modifiers), e.modifiers.lazy || (t.addEventListener("compositionstart", Yi), t.addEventListener("compositionend", Qi), t.addEventListener("change", Qi), Z && (t.vmodel = !0)));
			},
			componentUpdated: function (t, e, n) {
				if ("select" === n.tag) {
					Wi(t, e, n.context);
					var r = t._vOptions,
						o = (t._vOptions = [].map.call(t.options, Xi));
					if (
						o.some(function (t, e) {
							return !P(t, r[e]);
						})
					)
						(t.multiple
							? e.value.some(function (t) {
								return Gi(t, o);
							})
							: e.value !== e.oldValue && Gi(e.value, o)) && ta(t, "change");
				}
			},
		};
		function Wi(t, e, n) {
			Zi(t, e),
			(W || G) &&
			setTimeout(function () {
				Zi(t, e);
			}, 0);
		}
		function Zi(t, e, n) {
			var r = e.value,
				o = t.multiple;
			if (!o || Array.isArray(r)) {
				for (var i, a, s = 0, c = t.options.length; s < c; s++)
					if (((a = t.options[s]), o)) (i = D(r, Xi(a)) > -1), a.selected !== i && (a.selected = i);
					else if (P(Xi(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
				o || (t.selectedIndex = -1);
			}
		}
		function Gi(t, e) {
			return e.every(function (e) {
				return !P(e, t);
			});
		}
		function Xi(t) {
			return "_value" in t ? t._value : t.value;
		}
		function Yi(t) {
			t.target.composing = !0;
		}
		function Qi(t) {
			t.target.composing && ((t.target.composing = !1), ta(t.target, "input"));
		}
		function ta(t, e) {
			var n = document.createEvent("HTMLEvents");
			n.initEvent(e, !0, !0), t.dispatchEvent(n);
		}
		function ea(t) {
			return !t.componentInstance || (t.data && t.data.transition) ? t : ea(t.componentInstance._vnode);
		}
		var na = {
				bind: function (t, e, n) {
					var r = e.value,
						o = (n = ea(n)).data && n.data.transition,
						i = (t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display);
					r && o
						? ((n.data.show = !0),
							Bi(n, function () {
								t.style.display = i;
							}))
						: (t.style.display = r ? i : "none");
				},
				update: function (t, e, n) {
					var r = e.value;
					!r != !e.oldValue &&
					((n = ea(n)).data && n.data.transition
						? ((n.data.show = !0),
							r
								? Bi(n, function () {
									t.style.display = t.__vOriginalDisplay;
								})
								: Ui(n, function () {
									t.style.display = "none";
								}))
						: (t.style.display = r ? t.__vOriginalDisplay : "none"));
				},
				unbind: function (t, e, n, r, o) {
					o || (t.style.display = t.__vOriginalDisplay);
				},
			},
			ra = { model: qi, show: na },
			oa = {
				name: String,
				appear: Boolean,
				css: Boolean,
				mode: String,
				type: String,
				enterClass: String,
				leaveClass: String,
				enterToClass: String,
				leaveToClass: String,
				enterActiveClass: String,
				leaveActiveClass: String,
				appearClass: String,
				appearActiveClass: String,
				appearToClass: String,
				duration: [Number, String, Object],
			};
		function ia(t) {
			var e = t && t.componentOptions;
			return e && e.Ctor.options.abstract ? ia(Ee(e.children)) : t;
		}
		function aa(t) {
			var e = {},
				n = t.$options;
			for (var r in n.propsData) e[r] = t[r];
			var o = n._parentListeners;
			for (var r in o) e[w(r)] = o[r];
			return e;
		}
		function sa(t, e) {
			if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData });
		}
		var ca = function (t) {
				return t.tag || _e(t);
			},
			ua = function (t) {
				return "show" === t.name;
			},
			la = {
				name: "transition",
				props: oa,
				abstract: !0,
				render: function (t) {
					var e = this,
						n = this.$slots.default;
					if (n && (n = n.filter(ca)).length) {
						var r = this.mode,
							o = n[0];
						if (
							(function (t) {
								for (; (t = t.parent); ) if (t.data.transition) return !0;
							})(this.$vnode)
						)
							return o;
						var a = ia(o);
						if (!a) return o;
						if (this._leaving) return sa(t, o);
						var s = "__transition-".concat(this._uid, "-");
						a.key = null == a.key ? (a.isComment ? s + "comment" : s + a.tag) : i(a.key) ? (0 === String(a.key).indexOf(s) ? a.key : s + a.key) : a.key;
						var c = ((a.data || (a.data = {})).transition = aa(this)),
							u = this._vnode,
							l = ia(u);
						if (
							(a.data.directives && a.data.directives.some(ua) && (a.data.show = !0),
							l &&
							l.data &&
							!(function (t, e) {
								return e.key === t.key && e.tag === t.tag;
							})(a, l) &&
							!_e(l) &&
							(!l.componentInstance || !l.componentInstance._vnode.isComment))
						) {
							var f = (l.data.transition = T({}, c));
							if ("out-in" === r)
								return (
									(this._leaving = !0),
										Zt(f, "afterLeave", function () {
											(e._leaving = !1), e.$forceUpdate();
										}),
										sa(t, o)
								);
							if ("in-out" === r) {
								if (_e(a)) return u;
								var d,
									p = function () {
										d();
									};
								Zt(c, "afterEnter", p),
									Zt(c, "enterCancelled", p),
									Zt(f, "delayLeave", function (t) {
										d = t;
									});
							}
						}
						return o;
					}
				},
			},
			fa = T({ tag: String, moveClass: String }, oa);
		delete fa.mode;
		var da = {
			props: fa,
			beforeMount: function () {
				var t = this,
					e = this._update;
				this._update = function (n, r) {
					var o = Le(t);
					t.__patch__(t._vnode, t.kept, !1, !0), (t._vnode = t.kept), o(), e.call(t, n, r);
				};
			},
			render: function (t) {
				for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = (this.prevChildren = this.children), o = this.$slots.default || [], i = (this.children = []), a = aa(this), s = 0; s < o.length; s++) {
					(l = o[s]).tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (i.push(l), (n[l.key] = l), ((l.data || (l.data = {})).transition = a));
				}
				if (r) {
					var c = [],
						u = [];
					for (s = 0; s < r.length; s++) {
						var l;
						((l = r[s]).data.transition = a), (l.data.pos = l.elm.getBoundingClientRect()), n[l.key] ? c.push(l) : u.push(l);
					}
					(this.kept = t(e, null, c)), (this.removed = u);
				}
				return t(e, null, i);
			},
			updated: function () {
				var t = this.prevChildren,
					e = this.moveClass || (this.name || "v") + "-move";
				t.length &&
				this.hasMove(t[0].elm, e) &&
				(t.forEach(pa),
					t.forEach(va),
					t.forEach(ha),
					(this._reflow = document.body.offsetHeight),
					t.forEach(function (t) {
						if (t.data.moved) {
							var n = t.elm,
								r = n.style;
							Di(n, e),
								(r.transform = r.WebkitTransform = r.transitionDuration = ""),
								n.addEventListener(
									Ai,
									(n._moveCb = function t(r) {
										(r && r.target !== n) || (r && !/transform$/.test(r.propertyName)) || (n.removeEventListener(Ai, t), (n._moveCb = null), Mi(n, e));
									})
								);
						}
					}));
			},
			methods: {
				hasMove: function (t, e) {
					if (!ki) return !1;
					if (this._hasMove) return this._hasMove;
					var n = t.cloneNode();
					t._transitionClasses &&
					t._transitionClasses.forEach(function (t) {
						wi(n, t);
					}),
						$i(n, e),
						(n.style.display = "none"),
						this.$el.appendChild(n);
					var r = Ri(n);
					return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
				},
			},
		};
		function pa(t) {
			t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
		}
		function va(t) {
			t.data.newPos = t.elm.getBoundingClientRect();
		}
		function ha(t) {
			var e = t.data.pos,
				n = t.data.newPos,
				r = e.left - n.left,
				o = e.top - n.top;
			if (r || o) {
				t.data.moved = !0;
				var i = t.elm.style;
				(i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)")), (i.transitionDuration = "0s");
			}
		}
		var ma = { Transition: la, TransitionGroup: da };
		(Cr.config.mustUseProp = Mr),
			(Cr.config.isReservedTag = Gr),
			(Cr.config.isReservedAttr = Pr),
			(Cr.config.getTagNamespace = Xr),
			(Cr.config.isUnknownElement = function (t) {
				if (!J) return !0;
				if (Gr(t)) return !1;
				if (((t = t.toLowerCase()), null != Yr[t])) return Yr[t];
				var e = document.createElement(t);
				return t.indexOf("-") > -1 ? (Yr[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement) : (Yr[t] = /HTMLUnknownElement/.test(e.toString()));
			}),
			T(Cr.options.directives, ra),
			T(Cr.options.components, ma),
			(Cr.prototype.__patch__ = J ? Ji : j),
			(Cr.prototype.$mount = function (t, e) {
				return (function (t, e, n) {
					var r;
					(t.$el = e),
					t.$options.render || (t.$options.render = ft),
						Be(t, "beforeMount"),
						(r = function () {
							t._update(t._render(), n);
						}),
						new Vn(
							t,
							r,
							j,
							{
								before: function () {
									t._isMounted && !t._isDestroyed && Be(t, "beforeUpdate");
								},
							},
							!0
						),
						(n = !1);
					var o = t._preWatchers;
					if (o) for (var i = 0; i < o.length; i++) o[i].run();
					return null == t.$vnode && ((t._isMounted = !0), Be(t, "mounted")), t;
				})(this, (t = t && J ? to(t) : void 0), e);
			}),
		J &&
		setTimeout(function () {
			H.devtools && ot && ot.emit("init", Cr);
		}, 0);
		var ga = /\{\{((?:.|\r?\n)+?)\}\}/g,
			ya = /[-.*+?^${}()|[\]\/\\]/g,
			_a = b(function (t) {
				var e = t[0].replace(ya, "\\$&"),
					n = t[1].replace(ya, "\\$&");
				return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
			});
		var ba = {
			staticKeys: ["staticClass"],
			transformNode: function (t, e) {
				e.warn;
				var n = Bo(t, "class");
				n && (t.staticClass = JSON.stringify(n.replace(/\s+/g, " ").trim()));
				var r = Ho(t, "class", !1);
				r && (t.classBinding = r);
			},
			genData: function (t) {
				var e = "";
				return t.staticClass && (e += "staticClass:".concat(t.staticClass, ",")), t.classBinding && (e += "class:".concat(t.classBinding, ",")), e;
			},
		};
		var $a,
			wa = {
				staticKeys: ["staticStyle"],
				transformNode: function (t, e) {
					e.warn;
					var n = Bo(t, "style");
					n && (t.staticStyle = JSON.stringify(ui(n)));
					var r = Ho(t, "style", !1);
					r && (t.styleBinding = r);
				},
				genData: function (t) {
					var e = "";
					return t.staticStyle && (e += "staticStyle:".concat(t.staticStyle, ",")), t.styleBinding && (e += "style:(".concat(t.styleBinding, "),")), e;
				},
			},
			xa = function (t) {
				return (($a = $a || document.createElement("div")).innerHTML = t), $a.textContent;
			},
			Ca = v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
			ka = v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
			Sa = v(
				"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
			),
			Oa = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
			Ta = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
			Aa = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(B.source, "]*"),
			ja = "((?:".concat(Aa, "\\:)?").concat(Aa, ")"),
			Ea = new RegExp("^<".concat(ja)),
			Na = /^\s*(\/?)>/,
			Pa = new RegExp("^<\\/".concat(ja, "[^>]*>")),
			Da = /^<!DOCTYPE [^>]+>/i,
			Ma = /^<!\--/,
			Ia = /^<!\[/,
			La = v("script,style,textarea", !0),
			Ra = {},
			Fa = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t", "&#39;": "'" },
			Ha = /&(?:lt|gt|quot|amp|#39);/g,
			Ba = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
			Ua = v("pre,textarea", !0),
			za = function (t, e) {
				return t && Ua(t) && "\n" === e[0];
			};
		function Va(t, e) {
			var n = e ? Ba : Ha;
			return t.replace(n, function (t) {
				return Fa[t];
			});
		}
		function Ka(t, e) {
			for (
				var n,
					r,
					o = [],
					i = e.expectHTML,
					a = e.isUnaryTag || E,
					s = e.canBeLeftOpenTag || E,
					c = 0,
					u = function () {
						if (((n = t), r && La(r))) {
							var u = 0,
								d = r.toLowerCase(),
								p = Ra[d] || (Ra[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i"));
							w = t.replace(p, function (t, n, r) {
								return (u = r.length), La(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), za(d, n) && (n = n.slice(1)), e.chars && e.chars(n), "";
							});
							(c += t.length - w.length), (t = w), f(d, c - u, c);
						} else {
							var v = t.indexOf("<");
							if (0 === v) {
								if (Ma.test(t)) {
									var h = t.indexOf("--\x3e");
									if (h >= 0) return e.shouldKeepComment && e.comment && e.comment(t.substring(4, h), c, c + h + 3), l(h + 3), "continue";
								}
								if (Ia.test(t)) {
									var m = t.indexOf("]>");
									if (m >= 0) return l(m + 2), "continue";
								}
								var g = t.match(Da);
								if (g) return l(g[0].length), "continue";
								var y = t.match(Pa);
								if (y) {
									var _ = c;
									return l(y[0].length), f(y[1], _, c), "continue";
								}
								var b = (function () {
									var e = t.match(Ea);
									if (e) {
										var n = { tagName: e[1], attrs: [], start: c };
										l(e[0].length);
										for (var r = void 0, o = void 0; !(r = t.match(Na)) && (o = t.match(Ta) || t.match(Oa)); ) (o.start = c), l(o[0].length), (o.end = c), n.attrs.push(o);
										if (r) return (n.unarySlash = r[1]), l(r[0].length), (n.end = c), n;
									}
								})();
								if (b)
									return (
										(function (t) {
											var n = t.tagName,
												c = t.unarySlash;
											i && ("p" === r && Sa(n) && f(r), s(n) && r === n && f(n));
											for (var u = a(n) || !!c, l = t.attrs.length, d = new Array(l), p = 0; p < l; p++) {
												var v = t.attrs[p],
													h = v[3] || v[4] || v[5] || "",
													m = "a" === n && "href" === v[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
												d[p] = { name: v[1], value: Va(h, m) };
											}
											u || (o.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: d, start: t.start, end: t.end }), (r = n));
											e.start && e.start(n, d, u, t.start, t.end);
										})(b),
										za(b.tagName, t) && l(1),
											"continue"
									);
							}
							var $ = void 0,
								w = void 0,
								x = void 0;
							if (v >= 0) {
								for (w = t.slice(v); !(Pa.test(w) || Ea.test(w) || Ma.test(w) || Ia.test(w) || (x = w.indexOf("<", 1)) < 0); ) (v += x), (w = t.slice(v));
								$ = t.substring(0, v);
							}
							v < 0 && ($ = t), $ && l($.length), e.chars && $ && e.chars($, c - $.length, c);
						}
						if (t === n) return e.chars && e.chars(t), "break";
					};
				t;
			
			) {
				if ("break" === u()) break;
			}
			function l(e) {
				(c += e), (t = t.substring(e));
			}
			function f(t, n, i) {
				var a, s;
				if ((null == n && (n = c), null == i && (i = c), t)) for (s = t.toLowerCase(), a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--);
				else a = 0;
				if (a >= 0) {
					for (var u = o.length - 1; u >= a; u--) e.end && e.end(o[u].tag, n, i);
					(o.length = a), (r = a && o[a - 1].tag);
				} else "br" === s ? e.start && e.start(t, [], !0, n, i) : "p" === s && (e.start && e.start(t, [], !1, n, i), e.end && e.end(t, n, i));
			}
			f();
		}
		var Ja,
			qa,
			Wa,
			Za,
			Ga,
			Xa,
			Ya,
			Qa,
			ts = /^@|^v-on:/,
			es = /^v-|^@|^:|^#/,
			ns = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
			rs = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
			os = /^\(|\)$/g,
			is = /^\[.*\]$/,
			as = /:(.*)$/,
			ss = /^:|^\.|^v-bind:/,
			cs = /\.[^.\]]+(?=[^\]]*$)/g,
			us = /^v-slot(:|$)|^#/,
			ls = /[\r\n]/,
			fs = /[ \f\t\r\n]+/g,
			ds = b(xa),
			ps = "_empty_";
		function vs(t, e, n) {
			return { type: 1, tag: t, attrsList: e, attrsMap: $s(e), rawAttrsMap: {}, parent: n, children: [] };
		}
		function hs(t, e) {
			(Ja = e.warn || No),
				(Xa = e.isPreTag || E),
				(Ya = e.mustUseProp || E),
				(Qa = e.getTagNamespace || E),
				e.isReservedTag,
				(Wa = Po(e.modules, "transformNode")),
				(Za = Po(e.modules, "preTransformNode")),
				(Ga = Po(e.modules, "postTransformNode")),
				(qa = e.delimiters);
			var n,
				r,
				o = [],
				i = !1 !== e.preserveWhitespace,
				a = e.whitespace,
				s = !1,
				c = !1;
			function u(t) {
				if ((l(t), s || t.processed || (t = ms(t, e)), o.length || t === n || (n.if && (t.elseif || t.else) && ys(n, { exp: t.elseif, block: t })), r && !t.forbidden))
					if (t.elseif || t.else)
						(a = t),
							(u = (function (t) {
								for (var e = t.length; e--; ) {
									if (1 === t[e].type) return t[e];
									t.pop();
								}
							})(r.children)),
						u && u.if && ys(u, { exp: a.elseif, block: a });
					else {
						if (t.slotScope) {
							var i = t.slotTarget || '"default"';
							(r.scopedSlots || (r.scopedSlots = {}))[i] = t;
						}
						r.children.push(t), (t.parent = r);
					}
				var a, u;
				(t.children = t.children.filter(function (t) {
					return !t.slotScope;
				})),
					l(t),
				t.pre && (s = !1),
				Xa(t.tag) && (c = !1);
				for (var f = 0; f < Ga.length; f++) Ga[f](t, e);
			}
			function l(t) {
				if (!c) for (var e = void 0; (e = t.children[t.children.length - 1]) && 3 === e.type && " " === e.text; ) t.children.pop();
			}
			return (
				Ka(t, {
					warn: Ja,
					expectHTML: e.expectHTML,
					isUnaryTag: e.isUnaryTag,
					canBeLeftOpenTag: e.canBeLeftOpenTag,
					shouldDecodeNewlines: e.shouldDecodeNewlines,
					shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
					shouldKeepComment: e.comments,
					outputSourceRange: e.outputSourceRange,
					start: function (t, i, a, l, f) {
						var d = (r && r.ns) || Qa(t);
						W &&
						"svg" === d &&
						(i = (function (t) {
							for (var e = [], n = 0; n < t.length; n++) {
								var r = t[n];
								ws.test(r.name) || ((r.name = r.name.replace(xs, "")), e.push(r));
							}
							return e;
						})(i));
						var p,
							v = vs(t, i, r);
						d && (v.ns = d), ("style" !== (p = v).tag && ("script" !== p.tag || (p.attrsMap.type && "text/javascript" !== p.attrsMap.type))) || rt() || (v.forbidden = !0);
						for (var h = 0; h < Za.length; h++) v = Za[h](v, e) || v;
						s ||
						(!(function (t) {
							null != Bo(t, "v-pre") && (t.pre = !0);
						})(v),
						v.pre && (s = !0)),
						Xa(v.tag) && (c = !0),
							s
								? (function (t) {
									var e = t.attrsList,
										n = e.length;
									if (n)
										for (var r = (t.attrs = new Array(n)), o = 0; o < n; o++) (r[o] = { name: e[o].name, value: JSON.stringify(e[o].value) }), null != e[o].start && ((r[o].start = e[o].start), (r[o].end = e[o].end));
									else t.pre || (t.plain = !0);
								})(v)
								: v.processed ||
								(gs(v),
									(function (t) {
										var e = Bo(t, "v-if");
										if (e) (t.if = e), ys(t, { exp: e, block: t });
										else {
											null != Bo(t, "v-else") && (t.else = !0);
											var n = Bo(t, "v-else-if");
											n && (t.elseif = n);
										}
									})(v),
									(function (t) {
										null != Bo(t, "v-once") && (t.once = !0);
									})(v)),
						n || (n = v),
							a ? u(v) : ((r = v), o.push(v));
					},
					end: function (t, e, n) {
						var i = o[o.length - 1];
						(o.length -= 1), (r = o[o.length - 1]), u(i);
					},
					chars: function (t, e, n) {
						if (r && (!W || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) {
							var o,
								u = r.children;
							if ((t = c || t.trim() ? ("script" === (o = r).tag || "style" === o.tag ? t : ds(t)) : u.length ? (a ? ("condense" === a && ls.test(t) ? "" : " ") : i ? " " : "") : "")) {
								c || "condense" !== a || (t = t.replace(fs, " "));
								var l = void 0,
									f = void 0;
								!s &&
								" " !== t &&
								(l = (function (t, e) {
									var n = e ? _a(e) : ga;
									if (n.test(t)) {
										for (var r, o, i, a = [], s = [], c = (n.lastIndex = 0); (r = n.exec(t)); ) {
											(o = r.index) > c && (s.push((i = t.slice(c, o))), a.push(JSON.stringify(i)));
											var u = jo(r[1].trim());
											a.push("_s(".concat(u, ")")), s.push({ "@binding": u }), (c = o + r[0].length);
										}
										return c < t.length && (s.push((i = t.slice(c))), a.push(JSON.stringify(i))), { expression: a.join("+"), tokens: s };
									}
								})(t, qa))
									? (f = { type: 2, expression: l.expression, tokens: l.tokens, text: t })
									: (" " === t && u.length && " " === u[u.length - 1].text) || (f = { type: 3, text: t }),
								f && u.push(f);
							}
						}
					},
					comment: function (t, e, n) {
						if (r) {
							var o = { type: 3, text: t, isComment: !0 };
							r.children.push(o);
						}
					},
				}),
					n
			);
		}
		function ms(t, e) {
			var n, r;
			(r = Ho((n = t), "key")) && (n.key = r),
				(t.plain = !t.key && !t.scopedSlots && !t.attrsList.length),
				(function (t) {
					var e = Ho(t, "ref");
					e &&
					((t.ref = e),
						(t.refInFor = (function (t) {
							var e = t;
							for (; e; ) {
								if (void 0 !== e.for) return !0;
								e = e.parent;
							}
							return !1;
						})(t)));
				})(t),
				(function (t) {
					var e;
					"template" === t.tag ? ((e = Bo(t, "scope")), (t.slotScope = e || Bo(t, "slot-scope"))) : (e = Bo(t, "slot-scope")) && (t.slotScope = e);
					var n = Ho(t, "slot");
					n &&
					((t.slotTarget = '""' === n ? '"default"' : n),
						(t.slotTargetDynamic = !(!t.attrsMap[":slot"] && !t.attrsMap["v-bind:slot"])),
					"template" === t.tag ||
					t.slotScope ||
					Mo(
						t,
						"slot",
						n,
						(function (t, e) {
							return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e];
						})(t, "slot")
					));
					if ("template" === t.tag) {
						if ((a = Uo(t, us))) {
							var r = _s(a),
								o = r.name,
								i = r.dynamic;
							(t.slotTarget = o), (t.slotTargetDynamic = i), (t.slotScope = a.value || ps);
						}
					} else {
						var a;
						if ((a = Uo(t, us))) {
							var s = t.scopedSlots || (t.scopedSlots = {}),
								c = _s(a),
								u = c.name,
								l = ((i = c.dynamic), (s[u] = vs("template", [], t)));
							(l.slotTarget = u),
								(l.slotTargetDynamic = i),
								(l.children = t.children.filter(function (t) {
									if (!t.slotScope) return (t.parent = l), !0;
								})),
								(l.slotScope = a.value || ps),
								(t.children = []),
								(t.plain = !1);
						}
					}
				})(t),
				(function (t) {
					"slot" === t.tag && (t.slotName = Ho(t, "name"));
				})(t),
				(function (t) {
					var e;
					(e = Ho(t, "is")) && (t.component = e);
					null != Bo(t, "inline-template") && (t.inlineTemplate = !0);
				})(t);
			for (var o = 0; o < Wa.length; o++) t = Wa[o](t, e) || t;
			return (
				(function (t) {
					var e,
						n,
						r,
						o,
						i,
						a,
						s,
						c,
						u = t.attrsList;
					for (e = 0, n = u.length; e < n; e++)
						if (((r = o = u[e].name), (i = u[e].value), es.test(r)))
							if (((t.hasBindings = !0), (a = bs(r.replace(es, ""))) && (r = r.replace(cs, "")), ss.test(r)))
								(r = r.replace(ss, "")),
									(i = jo(i)),
								(c = is.test(r)) && (r = r.slice(1, -1)),
								a &&
								(a.prop && !c && "innerHtml" === (r = w(r)) && (r = "innerHTML"),
								a.camel && !c && (r = w(r)),
								a.sync &&
								((s = Ko(i, "$event")),
									c ? Fo(t, '"update:"+('.concat(r, ")"), s, null, !1, 0, u[e], !0) : (Fo(t, "update:".concat(w(r)), s, null, !1, 0, u[e]), k(r) !== w(r) && Fo(t, "update:".concat(k(r)), s, null, !1, 0, u[e])))),
									(a && a.prop) || (!t.component && Ya(t.tag, t.attrsMap.type, r)) ? Do(t, r, i, u[e], c) : Mo(t, r, i, u[e], c);
							else if (ts.test(r)) (r = r.replace(ts, "")), (c = is.test(r)) && (r = r.slice(1, -1)), Fo(t, r, i, a, !1, 0, u[e], c);
							else {
								var l = (r = r.replace(es, "")).match(as),
									f = l && l[1];
								(c = !1), f && ((r = r.slice(0, -(f.length + 1))), is.test(f) && ((f = f.slice(1, -1)), (c = !0))), Lo(t, r, o, i, f, c, a, u[e]);
							}
						else Mo(t, r, JSON.stringify(i), u[e]), !t.component && "muted" === r && Ya(t.tag, t.attrsMap.type, r) && Do(t, r, "true", u[e]);
				})(t),
					t
			);
		}
		function gs(t) {
			var e;
			if ((e = Bo(t, "v-for"))) {
				var n = (function (t) {
					var e = t.match(ns);
					if (!e) return;
					var n = {};
					n.for = e[2].trim();
					var r = e[1].trim().replace(os, ""),
						o = r.match(rs);
					o ? ((n.alias = r.replace(rs, "").trim()), (n.iterator1 = o[1].trim()), o[2] && (n.iterator2 = o[2].trim())) : (n.alias = r);
					return n;
				})(e);
				n && T(t, n);
			}
		}
		function ys(t, e) {
			t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
		}
		function _s(t) {
			var e = t.name.replace(us, "");
			return e || ("#" !== t.name[0] && (e = "default")), is.test(e) ? { name: e.slice(1, -1), dynamic: !0 } : { name: '"'.concat(e, '"'), dynamic: !1 };
		}
		function bs(t) {
			var e = t.match(cs);
			if (e) {
				var n = {};
				return (
					e.forEach(function (t) {
						n[t.slice(1)] = !0;
					}),
						n
				);
			}
		}
		function $s(t) {
			for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value;
			return e;
		}
		var ws = /^xmlns:NS\d+/,
			xs = /^NS\d+:/;
		function Cs(t) {
			return vs(t.tag, t.attrsList.slice(), t.parent);
		}
		var ks = [
			ba,
			wa,
			{
				preTransformNode: function (t, e) {
					if ("input" === t.tag) {
						var n = t.attrsMap;
						if (!n["v-model"]) return;
						var r = void 0;
						if (((n[":type"] || n["v-bind:type"]) && (r = Ho(t, "type")), n.type || r || !n["v-bind"] || (r = "(".concat(n["v-bind"], ").type")), r)) {
							var o = Bo(t, "v-if", !0),
								i = o ? "&&(".concat(o, ")") : "",
								a = null != Bo(t, "v-else", !0),
								s = Bo(t, "v-else-if", !0),
								c = Cs(t);
							gs(c), Io(c, "type", "checkbox"), ms(c, e), (c.processed = !0), (c.if = "(".concat(r, ")==='checkbox'") + i), ys(c, { exp: c.if, block: c });
							var u = Cs(t);
							Bo(u, "v-for", !0), Io(u, "type", "radio"), ms(u, e), ys(c, { exp: "(".concat(r, ")==='radio'") + i, block: u });
							var l = Cs(t);
							return Bo(l, "v-for", !0), Io(l, ":type", r), ms(l, e), ys(c, { exp: o, block: l }), a ? (c.else = !0) : s && (c.elseif = s), c;
						}
					}
				},
			},
		];
		var Ss,
			Os,
			Ts = {
				model: function (t, e, n) {
					var r = e.value,
						o = e.modifiers,
						i = t.tag,
						a = t.attrsMap.type;
					if (t.component) return Vo(t, r, o), !1;
					if ("select" === i)
						!(function (t, e, n) {
							var r = n && n.number,
								o = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' + "return ".concat(r ? "_n(val)" : "val", "})"),
								i = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]",
								a = "var $$selectedVal = ".concat(o, ";");
							(a = "".concat(a, " ").concat(Ko(e, i))), Fo(t, "change", a, null, !0);
						})(t, r, o);
					else if ("input" === i && "checkbox" === a)
						!(function (t, e, n) {
							var r = n && n.number,
								o = Ho(t, "value") || "null",
								i = Ho(t, "true-value") || "true",
								a = Ho(t, "false-value") || "false";
							Do(t, "checked", "Array.isArray(".concat(e, ")") + "?_i(".concat(e, ",").concat(o, ")>-1") + ("true" === i ? ":(".concat(e, ")") : ":_q(".concat(e, ",").concat(i, ")"))),
								Fo(
									t,
									"change",
									"var $$a=".concat(e, ",") +
									"$$el=$event.target," +
									"$$c=$$el.checked?(".concat(i, "):(").concat(a, ");") +
									"if(Array.isArray($$a)){" +
									"var $$v=".concat(r ? "_n(" + o + ")" : o, ",") +
									"$$i=_i($$a,$$v);" +
									"if($$el.checked){$$i<0&&(".concat(Ko(e, "$$a.concat([$$v])"), ")}") +
									"else{$$i>-1&&(".concat(Ko(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))"), ")}") +
									"}else{".concat(Ko(e, "$$c"), "}"),
									null,
									!0
								);
						})(t, r, o);
					else if ("input" === i && "radio" === a)
						!(function (t, e, n) {
							var r = n && n.number,
								o = Ho(t, "value") || "null";
							(o = r ? "_n(".concat(o, ")") : o), Do(t, "checked", "_q(".concat(e, ",").concat(o, ")")), Fo(t, "change", Ko(e, o), null, !0);
						})(t, r, o);
					else if ("input" === i || "textarea" === i)
						!(function (t, e, n) {
							var r = t.attrsMap.type,
								o = n || {},
								i = o.lazy,
								a = o.number,
								s = o.trim,
								c = !i && "range" !== r,
								u = i ? "change" : "range" === r ? Yo : "input",
								l = "$event.target.value";
							s && (l = "$event.target.value.trim()");
							a && (l = "_n(".concat(l, ")"));
							var f = Ko(e, l);
							c && (f = "if($event.target.composing)return;".concat(f));
							Do(t, "value", "(".concat(e, ")")), Fo(t, u, f, null, !0), (s || a) && Fo(t, "blur", "$forceUpdate()");
						})(t, r, o);
					else if (!H.isReservedTag(i)) return Vo(t, r, o), !1;
					return !0;
				},
				text: function (t, e) {
					e.value && Do(t, "textContent", "_s(".concat(e.value, ")"), e);
				},
				html: function (t, e) {
					e.value && Do(t, "innerHTML", "_s(".concat(e.value, ")"), e);
				},
			},
			As = {
				expectHTML: !0,
				modules: ks,
				directives: Ts,
				isPreTag: function (t) {
					return "pre" === t;
				},
				isUnaryTag: Ca,
				mustUseProp: Mr,
				canBeLeftOpenTag: ka,
				isReservedTag: Gr,
				getTagNamespace: Xr,
				staticKeys: (function (t) {
					return t
						.reduce(function (t, e) {
							return t.concat(e.staticKeys || []);
						}, [])
						.join(",");
				})(ks),
			},
			js = b(function (t) {
				return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""));
			});
		function Es(t, e) {
			t && ((Ss = js(e.staticKeys || "")), (Os = e.isReservedTag || E), Ns(t), Ps(t, !1));
		}
		function Ns(t) {
			if (
				((t.static = (function (t) {
					if (2 === t.type) return !1;
					if (3 === t.type) return !0;
					return !(
						!t.pre &&
						(t.hasBindings ||
							t.if ||
							t.for ||
							h(t.tag) ||
							!Os(t.tag) ||
							(function (t) {
								for (; t.parent; ) {
									if ("template" !== (t = t.parent).tag) return !1;
									if (t.for) return !0;
								}
								return !1;
							})(t) ||
							!Object.keys(t).every(Ss))
					);
				})(t)),
				1 === t.type)
			) {
				if (!Os(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
				for (var e = 0, n = t.children.length; e < n; e++) {
					var r = t.children[e];
					Ns(r), r.static || (t.static = !1);
				}
				if (t.ifConditions)
					for (e = 1, n = t.ifConditions.length; e < n; e++) {
						var o = t.ifConditions[e].block;
						Ns(o), o.static || (t.static = !1);
					}
			}
		}
		function Ps(t, e) {
			if (1 === t.type) {
				if (((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type))) return void (t.staticRoot = !0);
				if (((t.staticRoot = !1), t.children)) for (var n = 0, r = t.children.length; n < r; n++) Ps(t.children[n], e || !!t.for);
				if (t.ifConditions) for (n = 1, r = t.ifConditions.length; n < r; n++) Ps(t.ifConditions[n].block, e);
			}
		}
		var Ds = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
			Ms = /\([^)]*?\);*$/,
			Is = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
			Ls = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
			Rs = {
				esc: ["Esc", "Escape"],
				tab: "Tab",
				enter: "Enter",
				space: [" ", "Spacebar"],
				up: ["Up", "ArrowUp"],
				left: ["Left", "ArrowLeft"],
				right: ["Right", "ArrowRight"],
				down: ["Down", "ArrowDown"],
				delete: ["Backspace", "Delete", "Del"],
			},
			Fs = function (t) {
				return "if(".concat(t, ")return null;");
			},
			Hs = {
				stop: "$event.stopPropagation();",
				prevent: "$event.preventDefault();",
				self: Fs("$event.target !== $event.currentTarget"),
				ctrl: Fs("!$event.ctrlKey"),
				shift: Fs("!$event.shiftKey"),
				alt: Fs("!$event.altKey"),
				meta: Fs("!$event.metaKey"),
				left: Fs("'button' in $event && $event.button !== 0"),
				middle: Fs("'button' in $event && $event.button !== 1"),
				right: Fs("'button' in $event && $event.button !== 2"),
			};
		function Bs(t, e) {
			var n = e ? "nativeOn:" : "on:",
				r = "",
				o = "";
			for (var i in t) {
				var a = Us(t[i]);
				t[i] && t[i].dynamic ? (o += "".concat(i, ",").concat(a, ",")) : (r += '"'.concat(i, '":').concat(a, ","));
			}
			return (r = "{".concat(r.slice(0, -1), "}")), o ? n + "_d(".concat(r, ",[").concat(o.slice(0, -1), "])") : n + r;
		}
		function Us(t) {
			if (!t) return "function(){}";
			if (Array.isArray(t))
				return "[".concat(
					t
						.map(function (t) {
							return Us(t);
						})
						.join(","),
					"]"
				);
			var e = Is.test(t.value),
				n = Ds.test(t.value),
				r = Is.test(t.value.replace(Ms, ""));
			if (t.modifiers) {
				var o = "",
					i = "",
					a = [],
					s = function (e) {
						if (Hs[e]) (i += Hs[e]), Ls[e] && a.push(e);
						else if ("exact" === e) {
							var n = t.modifiers;
							i += Fs(
								["ctrl", "shift", "alt", "meta"]
									.filter(function (t) {
										return !n[t];
									})
									.map(function (t) {
										return "$event.".concat(t, "Key");
									})
									.join("||")
							);
						} else a.push(e);
					};
				for (var c in t.modifiers) s(c);
				a.length &&
				(o += (function (t) {
					return "if(!$event.type.indexOf('key')&&" + "".concat(t.map(zs).join("&&"), ")return null;");
				})(a)),
				i && (o += i);
				var u = e ? "return ".concat(t.value, ".apply(null, arguments)") : n ? "return (".concat(t.value, ").apply(null, arguments)") : r ? "return ".concat(t.value) : t.value;
				return "function($event){".concat(o).concat(u, "}");
			}
			return e || n ? t.value : "function($event){".concat(r ? "return ".concat(t.value) : t.value, "}");
		}
		function zs(t) {
			var e = parseInt(t, 10);
			if (e) return "$event.keyCode!==".concat(e);
			var n = Ls[t],
				r = Rs[t];
			return "_k($event.keyCode," + "".concat(JSON.stringify(t), ",") + "".concat(JSON.stringify(n), ",") + "$event.key," + "".concat(JSON.stringify(r)) + ")";
		}
		var Vs = {
				on: function (t, e) {
					t.wrapListeners = function (t) {
						return "_g(".concat(t, ",").concat(e.value, ")");
					};
				},
				bind: function (t, e) {
					t.wrapData = function (n) {
						return "_b("
							.concat(n, ",'")
							.concat(t.tag, "',")
							.concat(e.value, ",")
							.concat(e.modifiers && e.modifiers.prop ? "true" : "false")
							.concat(e.modifiers && e.modifiers.sync ? ",true" : "", ")");
					};
				},
				cloak: j,
			},
			Ks = function (t) {
				(this.options = t), (this.warn = t.warn || No), (this.transforms = Po(t.modules, "transformCode")), (this.dataGenFns = Po(t.modules, "genData")), (this.directives = T(T({}, Vs), t.directives));
				var e = t.isReservedTag || E;
				(this.maybeComponent = function (t) {
					return !!t.component || !e(t.tag);
				}),
					(this.onceId = 0),
					(this.staticRenderFns = []),
					(this.pre = !1);
			};
		function Js(t, e) {
			var n = new Ks(e),
				r = t ? ("script" === t.tag ? "null" : qs(t, n)) : '_c("div")';
			return { render: "with(this){return ".concat(r, "}"), staticRenderFns: n.staticRenderFns };
		}
		function qs(t, e) {
			if ((t.parent && (t.pre = t.pre || t.parent.pre), t.staticRoot && !t.staticProcessed)) return Ws(t, e);
			if (t.once && !t.onceProcessed) return Zs(t, e);
			if (t.for && !t.forProcessed) return Ys(t, e);
			if (t.if && !t.ifProcessed) return Gs(t, e);
			if ("template" !== t.tag || t.slotTarget || e.pre) {
				if ("slot" === t.tag)
					return (function (t, e) {
						var n = t.slotName || '"default"',
							r = nc(t, e),
							o = "_t(".concat(n).concat(r ? ",function(){return ".concat(r, "}") : ""),
							i =
								t.attrs || t.dynamicAttrs
									? ic(
										(t.attrs || []).concat(t.dynamicAttrs || []).map(function (t) {
											return { name: w(t.name), value: t.value, dynamic: t.dynamic };
										})
									)
									: null,
							a = t.attrsMap["v-bind"];
						(!i && !a) || r || (o += ",null");
						i && (o += ",".concat(i));
						a && (o += "".concat(i ? "" : ",null", ",").concat(a));
						return o + ")";
					})(t, e);
				var n = void 0;
				if (t.component)
					n = (function (t, e, n) {
						var r = e.inlineTemplate ? null : nc(e, n, !0);
						return "_c("
							.concat(t, ",")
							.concat(Qs(e, n))
							.concat(r ? ",".concat(r) : "", ")");
					})(t.component, t, e);
				else {
					var r = void 0,
						o = e.maybeComponent(t);
					(!t.plain || (t.pre && o)) && (r = Qs(t, e));
					var i = void 0,
						a = e.options.bindings;
					o &&
					a &&
					!1 !== a.__isScriptSetup &&
					(i = (function (t, e) {
						var n = w(e),
							r = x(n),
							o = function (o) {
								return t[e] === o ? e : t[n] === o ? n : t[r] === o ? r : void 0;
							},
							i = o("setup-const") || o("setup-reactive-const");
						if (i) return i;
						var a = o("setup-let") || o("setup-ref") || o("setup-maybe-ref");
						if (a) return a;
					})(a, t.tag)),
					i || (i = "'".concat(t.tag, "'"));
					var s = t.inlineTemplate ? null : nc(t, e, !0);
					n = "_c("
						.concat(i)
						.concat(r ? ",".concat(r) : "")
						.concat(s ? ",".concat(s) : "", ")");
				}
				for (var c = 0; c < e.transforms.length; c++) n = e.transforms[c](t, n);
				return n;
			}
			return nc(t, e) || "void 0";
		}
		function Ws(t, e) {
			t.staticProcessed = !0;
			var n = e.pre;
			return t.pre && (e.pre = t.pre), e.staticRenderFns.push("with(this){return ".concat(qs(t, e), "}")), (e.pre = n), "_m(".concat(e.staticRenderFns.length - 1).concat(t.staticInFor ? ",true" : "", ")");
		}
		function Zs(t, e) {
			if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return Gs(t, e);
			if (t.staticInFor) {
				for (var n = "", r = t.parent; r; ) {
					if (r.for) {
						n = r.key;
						break;
					}
					r = r.parent;
				}
				return n
					? "_o("
						.concat(qs(t, e), ",")
						.concat(e.onceId++, ",")
						.concat(n, ")")
					: qs(t, e);
			}
			return Ws(t, e);
		}
		function Gs(t, e, n, r) {
			return (t.ifProcessed = !0), Xs(t.ifConditions.slice(), e, n, r);
		}
		function Xs(t, e, n, r) {
			if (!t.length) return r || "_e()";
			var o = t.shift();
			return o.exp ? "(".concat(o.exp, ")?").concat(i(o.block), ":").concat(Xs(t, e, n, r)) : "".concat(i(o.block));
			function i(t) {
				return n ? n(t, e) : t.once ? Zs(t, e) : qs(t, e);
			}
		}
		function Ys(t, e, n, r) {
			var o = t.for,
				i = t.alias,
				a = t.iterator1 ? ",".concat(t.iterator1) : "",
				s = t.iterator2 ? ",".concat(t.iterator2) : "";
			return (t.forProcessed = !0), "".concat(r || "_l", "((").concat(o, "),") + "function(".concat(i).concat(a).concat(s, "){") + "return ".concat((n || qs)(t, e)) + "})";
		}
		function Qs(t, e) {
			var n = "{",
				r = (function (t, e) {
					var n = t.directives;
					if (!n) return;
					var r,
						o,
						i,
						a,
						s = "directives:[",
						c = !1;
					for (r = 0, o = n.length; r < o; r++) {
						(i = n[r]), (a = !0);
						var u = e.directives[i.name];
						u && (a = !!u(t, i, e.warn)),
						a &&
						((c = !0),
							(s += '{name:"'
								.concat(i.name, '",rawName:"')
								.concat(i.rawName, '"')
								.concat(i.value ? ",value:(".concat(i.value, "),expression:").concat(JSON.stringify(i.value)) : "")
								.concat(i.arg ? ",arg:".concat(i.isDynamicArg ? i.arg : '"'.concat(i.arg, '"')) : "")
								.concat(i.modifiers ? ",modifiers:".concat(JSON.stringify(i.modifiers)) : "", "},")));
					}
					if (c) return s.slice(0, -1) + "]";
				})(t, e);
			r && (n += r + ","), t.key && (n += "key:".concat(t.key, ",")), t.ref && (n += "ref:".concat(t.ref, ",")), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"'.concat(t.tag, '",'));
			for (var o = 0; o < e.dataGenFns.length; o++) n += e.dataGenFns[o](t);
			if (
				(t.attrs && (n += "attrs:".concat(ic(t.attrs), ",")),
				t.props && (n += "domProps:".concat(ic(t.props), ",")),
				t.events && (n += "".concat(Bs(t.events, !1), ",")),
				t.nativeEvents && (n += "".concat(Bs(t.nativeEvents, !0), ",")),
				t.slotTarget && !t.slotScope && (n += "slot:".concat(t.slotTarget, ",")),
				t.scopedSlots &&
				(n += "".concat(
					(function (t, e, n) {
						var r =
								t.for ||
								Object.keys(e).some(function (t) {
									var n = e[t];
									return n.slotTargetDynamic || n.if || n.for || tc(n);
								}),
							o = !!t.if;
						if (!r)
							for (var i = t.parent; i; ) {
								if ((i.slotScope && i.slotScope !== ps) || i.for) {
									r = !0;
									break;
								}
								i.if && (o = !0), (i = i.parent);
							}
						var a = Object.keys(e)
							.map(function (t) {
								return ec(e[t], n);
							})
							.join(",");
						return "scopedSlots:_u(["
							.concat(a, "]")
							.concat(r ? ",null,true" : "")
							.concat(
								!r && o
									? ",null,false,".concat(
										(function (t) {
											var e = 5381,
												n = t.length;
											for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
											return e >>> 0;
										})(a)
									)
									: "",
								")"
							);
					})(t, t.scopedSlots, e),
					","
				)),
				t.model && (n += "model:{value:".concat(t.model.value, ",callback:").concat(t.model.callback, ",expression:").concat(t.model.expression, "},")),
					t.inlineTemplate)
			) {
				var i = (function (t, e) {
					var n = t.children[0];
					if (n && 1 === n.type) {
						var r = Js(n, e.options);
						return "inlineTemplate:{render:function(){".concat(r.render, "},staticRenderFns:[").concat(
							r.staticRenderFns
								.map(function (t) {
									return "function(){".concat(t, "}");
								})
								.join(","),
							"]}"
						);
					}
				})(t, e);
				i && (n += "".concat(i, ","));
			}
			return (n = n.replace(/,$/, "") + "}"), t.dynamicAttrs && (n = "_b(".concat(n, ',"').concat(t.tag, '",').concat(ic(t.dynamicAttrs), ")")), t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
		}
		function tc(t) {
			return 1 === t.type && ("slot" === t.tag || t.children.some(tc));
		}
		function ec(t, e) {
			var n = t.attrsMap["slot-scope"];
			if (t.if && !t.ifProcessed && !n) return Gs(t, e, ec, "null");
			if (t.for && !t.forProcessed) return Ys(t, e, ec);
			var r = t.slotScope === ps ? "" : String(t.slotScope),
				o = "function(".concat(r, "){") + "return ".concat("template" === t.tag ? (t.if && n ? "(".concat(t.if, ")?").concat(nc(t, e) || "undefined", ":undefined") : nc(t, e) || "undefined") : qs(t, e), "}"),
				i = r ? "" : ",proxy:true";
			return "{key:"
				.concat(t.slotTarget || '"default"', ",fn:")
				.concat(o)
				.concat(i, "}");
		}
		function nc(t, e, n, r, o) {
			var i = t.children;
			if (i.length) {
				var a = i[0];
				if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
					var s = n ? (e.maybeComponent(a) ? ",1" : ",0") : "";
					return "".concat((r || qs)(a, e)).concat(s);
				}
				var c = n
						? (function (t, e) {
							for (var n = 0, r = 0; r < t.length; r++) {
								var o = t[r];
								if (1 === o.type) {
									if (
										rc(o) ||
										(o.ifConditions &&
											o.ifConditions.some(function (t) {
												return rc(t.block);
											}))
									) {
										n = 2;
										break;
									}
									(e(o) ||
										(o.ifConditions &&
											o.ifConditions.some(function (t) {
												return e(t.block);
											}))) &&
									(n = 1);
								}
							}
							return n;
						})(i, e.maybeComponent)
						: 0,
					u = o || oc;
				return "["
					.concat(
						i
							.map(function (t) {
								return u(t, e);
							})
							.join(","),
						"]"
					)
					.concat(c ? ",".concat(c) : "");
			}
		}
		function rc(t) {
			return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
		}
		function oc(t, e) {
			return 1 === t.type
				? qs(t, e)
				: 3 === t.type && t.isComment
					? (function (t) {
						return "_e(".concat(JSON.stringify(t.text), ")");
					})(t)
					: (function (t) {
						return "_v(".concat(2 === t.type ? t.expression : ac(JSON.stringify(t.text)), ")");
					})(t);
		}
		function ic(t) {
			for (var e = "", n = "", r = 0; r < t.length; r++) {
				var o = t[r],
					i = ac(o.value);
				o.dynamic ? (n += "".concat(o.name, ",").concat(i, ",")) : (e += '"'.concat(o.name, '":').concat(i, ","));
			}
			return (e = "{".concat(e.slice(0, -1), "}")), n ? "_d(".concat(e, ",[").concat(n.slice(0, -1), "])") : e;
		}
		function ac(t) {
			return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
		}
		function sc(t, e) {
			try {
				return new Function(t);
			} catch (n) {
				return e.push({ err: n, code: t }), j;
			}
		}
		function cc(t) {
			var e = Object.create(null);
			return function (n, r, o) {
				(r = T({}, r)).warn, delete r.warn;
				var i = r.delimiters ? String(r.delimiters) + n : n;
				if (e[i]) return e[i];
				var a = t(n, r),
					s = {},
					c = [];
				return (
					(s.render = sc(a.render, c)),
						(s.staticRenderFns = a.staticRenderFns.map(function (t) {
							return sc(t, c);
						})),
						(e[i] = s)
				);
			};
		}
		new RegExp(
			"\\b" +
			"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") +
			"\\b"
		),
			new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
		var uc,
			lc,
			fc =
				((uc = function (t, e) {
					var n = hs(t.trim(), e);
					!1 !== e.optimize && Es(n, e);
					var r = Js(n, e);
					return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
				}),
					function (t) {
						function e(e, n) {
							var r = Object.create(t),
								o = [],
								i = [];
							if (n)
								for (var a in (n.modules && (r.modules = (t.modules || []).concat(n.modules)), n.directives && (r.directives = T(Object.create(t.directives || null), n.directives)), n))
									"modules" !== a && "directives" !== a && (r[a] = n[a]);
							r.warn = function (t, e, n) {
								(n ? i : o).push(t);
							};
							var s = uc(e.trim(), r);
							return (s.errors = o), (s.tips = i), s;
						}
						return { compile: e, compileToFunctions: cc(e) };
					}),
			dc = fc(As).compileToFunctions;
		function pc(t) {
			return ((lc = lc || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>'), lc.innerHTML.indexOf("&#10;") > 0;
		}
		var vc = !!J && pc(!1),
			hc = !!J && pc(!0),
			mc = b(function (t) {
				var e = to(t);
				return e && e.innerHTML;
			}),
			gc = Cr.prototype.$mount;
		return (
			(Cr.prototype.$mount = function (t, e) {
				if ((t = t && to(t)) === document.body || t === document.documentElement) return this;
				var n = this.$options;
				if (!n.render) {
					var r = n.template;
					if (r)
						if ("string" == typeof r) "#" === r.charAt(0) && (r = mc(r));
						else {
							if (!r.nodeType) return this;
							r = r.innerHTML;
						}
					else
						t &&
						(r = (function (t) {
							if (t.outerHTML) return t.outerHTML;
							var e = document.createElement("div");
							return e.appendChild(t.cloneNode(!0)), e.innerHTML;
						})(t));
					if (r) {
						var o = dc(r, { outputSourceRange: !1, shouldDecodeNewlines: vc, shouldDecodeNewlinesForHref: hc, delimiters: n.delimiters, comments: n.comments }, this),
							i = o.render,
							a = o.staticRenderFns;
						(n.render = i), (n.staticRenderFns = a);
					}
				}
				return gc.call(this, t, e);
			}),
				(Cr.compile = dc),
				T(Cr, Fn),
				(Cr.effect = function (t, e) {
					var n = new Vn(ct, t, j, { sync: !0 });
					e &&
					(n.update = function () {
						e(function () {
							return n.run();
						});
					});
				}),
				Cr
		);
	});
	var VueResize = (function (e) {
		"use strict";
		var t = void 0;
		function i() {
			i.init ||
			((i.init = !0),
				(t =
					-1 !==
					(function () {
						var e = window.navigator.userAgent,
							t = e.indexOf("MSIE ");
						if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
						if (e.indexOf("Trident/") > 0) {
							var i = e.indexOf("rv:");
							return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
						}
						var n = e.indexOf("Edge/");
						return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
					})()));
		}
		var n = {
			render: function () {
				var e = this.$createElement;
				return (this._self._c || e)("div", { staticClass: "resize-observer", attrs: { tabindex: "-1" } });
			},
			staticRenderFns: [],
			_scopeId: "data-v-b329ee4c",
			name: "resize-observer",
			methods: {
				compareAndNotify: function () {
					(this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight) || ((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.$emit("notify"));
				},
				addResizeHandlers: function () {
					this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
				},
				removeResizeHandlers: function () {
					this._resizeObject &&
					this._resizeObject.onload &&
					(!t && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload);
				},
			},
			mounted: function () {
				var e = this;
				i(),
					this.$nextTick(function () {
						(e._w = e.$el.offsetWidth), (e._h = e.$el.offsetHeight);
					});
				var n = document.createElement("object");
				(this._resizeObject = n),
					n.setAttribute("aria-hidden", "true"),
					n.setAttribute("tabindex", -1),
					(n.onload = this.addResizeHandlers),
					(n.type = "text/html"),
				t && this.$el.appendChild(n),
					(n.data = "about:blank"),
				t || this.$el.appendChild(n);
			},
			beforeDestroy: function () {
				this.removeResizeHandlers();
			},
		};
		function s(e) {
			e.component("resize-observer", n), e.component("ResizeObserver", n);
		}
		var r = { version: "0.4.5", install: s },
			o = null;
		return "undefined" != typeof window ? (o = window.Vue) : "undefined" != typeof global && (o = global.Vue), o && o.use(r), (e.install = s), (e.ResizeObserver = n), (e.default = r), e;
	})({});
	(function (funcName, baseObj) {
		"use strict";
		funcName = funcName || "docReady";
		baseObj = baseObj || window;
		var readyList = [];
		var readyFired = false;
		var readyEventHandlersInstalled = false;
		function ready() {
			if (!readyFired) {
				readyFired = true;
				for (var i = 0; i < readyList.length; i++) {
					readyList[i].fn.call(window, readyList[i].ctx);
				}
				readyList = [];
			}
		}
		function readyStateChange() {
			if (document.readyState === "complete") {
				ready();
			}
		}
		baseObj[funcName] = function (callback, context) {
			if (typeof callback !== "function") {
				throw new TypeError("callback for docReady(fn) must be a function");
			}
			if (readyFired) {
				setTimeout(function () {
					callback(context);
				}, 1);
				return;
			} else {
				readyList.push({ fn: callback, ctx: context });
			}
			if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
				setTimeout(ready, 1);
			} else if (!readyEventHandlersInstalled) {
				if (document.addEventListener) {
					document.addEventListener("DOMContentLoaded", ready, false);
					window.addEventListener("load", ready, false);
				} else {
					document.attachEvent("onreadystatechange", readyStateChange);
					window.attachEvent("onload", ready);
				}
				readyEventHandlersInstalled = true;
			}
		};
	})("docReady", window);
	var roundTo = function (n, digits) {
		if (digits === undefined) {
			digits = 0;
		}
		var multiplicator = Math.pow(10, digits);
		n = parseFloat((n * multiplicator).toFixed(11));
		return Math.round(n) / multiplicator;
	};
	var floatformat = function (val, places) {
		"use strict";
		if (places === undefined) {
			places = 2;
		}
		if (typeof val === "string") {
			val = parseFloat(val);
		}
		var parts = roundTo(val, places).toFixed(places).split(".");
		if (places === 0) {
			return parts[0];
		}
		parts[0] = parts[0].replace(new RegExp("\\B(?=(\\d{" + django.get_format("NUMBER_GROUPING") + "})+(?!\\d))", "g"), django.get_format("THOUSAND_SEPARATOR"));
		return parts[0] + django.get_format("DECIMAL_SEPARATOR") + parts[1];
	};
	var autofloatformat = function (val, places) {
		"use strict";
		if (val == roundTo(val, 0)) {
			places = 0;
		}
		return floatformat(val, places);
	};
	window.PretixWidget = { build_widgets: true, widget_data: { referer: location.href } };
	var Vue = module.exports;
	Vue.component("resize-observer", VueResize.ResizeObserver);
	var strings = {
		quantity: django.pgettext("widget", "Quantity"),
		quantity_dec: django.pgettext("widget", "Decrease quantity"),
		quantity_inc: django.pgettext("widget", "Increase quantity"),
		price: django.pgettext("widget", "Price"),
		select_item: django.pgettext("widget", "Select %s"),
		select_variant: django.pgettext("widget", "Select variant %s"),
		sold_out: django.pgettext("widget", "Sold out"),
		buy: django.pgettext("widget", "Buy"),
		register: django.pgettext("widget", "Register"),
		reserved: django.pgettext("widget", "Reserved"),
		free: django.pgettext("widget", "FREE"),
		price_from: django.pgettext("widget", "from %(currency)s %(price)s"),
		tax_incl: django.pgettext("widget", "incl. %(rate)s% %(taxname)s"),
		tax_plus: django.pgettext("widget", "plus %(rate)s% %(taxname)s"),
		tax_incl_mixed: django.pgettext("widget", "incl. taxes"),
		tax_plus_mixed: django.pgettext("widget", "plus taxes"),
		quota_left: django.pgettext("widget", "currently available: %s"),
		voucher_required: django.pgettext("widget", "Only available with a voucher"),
		order_min: django.pgettext("widget", "minimum amount to order: %s"),
		exit: django.pgettext("widget", "Close ticket shop"),
		loading_error: django.pgettext("widget", "The ticket shop could not be loaded."),
		loading_error_429: django.pgettext("widget", "There are currently a lot of users in this ticket shop. Please " + "open the shop in a new tab to continue."),
		open_new_tab: django.pgettext("widget", "Open ticket shop"),
		cart_error: django.pgettext("widget", "The cart could not be created. Please try again later"),
		cart_error_429: django.pgettext("widget", "We could not create your cart, since there are currently too many " + 'users in this ticket shop. Please click "Continue" to retry in a new tab.'),
		waiting_list: django.pgettext("widget", "Waiting list"),
		cart_exists: django.pgettext("widget", "You currently have an active cart for this event. If you select more" + " products, they will be added to your existing cart."),
		resume_checkout: django.pgettext("widget", "Resume checkout"),
		redeem_voucher: django.pgettext("widget", "Redeem a voucher"),
		redeem: django.pgettext("widget", "Redeem"),
		voucher_code: django.pgettext("widget", "Voucher code"),
		close: django.pgettext("widget", "Close"),
		continue: django.pgettext("widget", "Continue"),
		variations: django.pgettext("widget", "See variations"),
		back_to_list: django.pgettext("widget", "Choose a different event"),
		back_to_dates: django.pgettext("widget", "Choose a different date"),
		back: django.pgettext("widget", "Back"),
		next_month: django.pgettext("widget", "Next month"),
		previous_month: django.pgettext("widget", "Previous month"),
		next_week: django.pgettext("widget", "Next week"),
		previous_week: django.pgettext("widget", "Previous week"),
		show_seating: django.pgettext("widget", "Open seat selection"),
		seating_plan_waiting_list: django.pgettext("widget", "Some or all ticket categories are currently sold out. If you want, you can add yourself to the waiting list. We will then notify if seats are available again."),
		load_more: django.pgettext("widget", "Load more"),
		days: { MO: django.gettext("Mo"), TU: django.gettext("Tu"), WE: django.gettext("We"), TH: django.gettext("Th"), FR: django.gettext("Fr"), SA: django.gettext("Sa"), SU: django.gettext("Su") },
		months: {
			"01": django.gettext("January"),
			"02": django.gettext("February"),
			"03": django.gettext("March"),
			"04": django.gettext("April"),
			"05": django.gettext("May"),
			"06": django.gettext("June"),
			"07": django.gettext("July"),
			"08": django.gettext("August"),
			"09": django.gettext("September"),
			"10": django.gettext("October"),
			"11": django.gettext("November"),
			"12": django.gettext("December"),
		},
	};
	var setCookie = function (cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	};
	var getCookie = function (name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift() || null;
		else return null;
	};
	var padNumber = function (number, size) {
		var s = String(number);
		while (s.length < (size || 2)) {
			s = "0" + s;
		}
		return s;
	};
	var getISOWeeks = function (y) {
		var d, isLeap;
		d = new Date(y, 0, 1);
		isLeap = new Date(y, 1, 29).getMonth() === 1;
		return d.getDay() === 4 || (isLeap && d.getDay() === 3) ? 53 : 52;
	};
	var api = {
		_getXHR: function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			}
		},
		_getJSON: function (endpoint, callback, err_callback) {
			var xhr = api._getXHR();
			xhr.open("GET", endpoint, true);
			xhr.onload = function (e) {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						callback(JSON.parse(xhr.responseText), xhr);
					} else {
						err_callback(xhr, e);
					}
				}
			};
			xhr.onerror = function (e) {
				console.error(xhr.statusText);
				err_callback(xhr, e);
			};
			xhr.send(null);
		},
		_postFormJSON: function (endpoint, form, callback, err_callback) {
			var params = [].filter
				.call(form.elements, function (el) {
					return (el.type !== "checkbox" && el.type !== "radio") || el.checked;
				})
				.filter(function (el) {
					return !!el.name && !!el.value;
				})
				.filter(function (el) {
					return !el.disabled;
				})
				.map(function (el) {
					return encodeURIComponent(el.name) + "=" + encodeURIComponent(el.value);
				})
				.join("&");
			var xhr = api._getXHR();
			xhr.open("POST", endpoint, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onload = function (e) {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						callback(JSON.parse(xhr.responseText));
					} else {
						err_callback(xhr, e);
					}
				}
			};
			xhr.onerror = function (e) {
				err_callback(xhr, e);
			};
			xhr.send(params);
		},
	};
	var makeid = function (length) {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};
	var site_is_secure = function () {
		return /https.*/.test(document.location.protocol);
	};
	var widget_id = makeid(16);
	Vue.component("availbox", {
		template:
			'<div class="pretix-widget-availability-box">' +
			'<div class="pretix-widget-availability-unavailable" v-if="require_voucher">' +
			'<small><a @click.prevent.stop="focus_voucher_field" role="button">' +
			strings.voucher_required +
			"</a></small>" +
			"</div>" +
			'<div class="pretix-widget-availability-unavailable"' +
			'       v-if="!require_voucher && avail[0] < 100 && avail[0] > 10">' +
			strings.reserved +
			"</div>" +
			'<div class="pretix-widget-availability-gone" ' +
			'       v-if="!require_voucher && avail[0] <= 10">' +
			strings.sold_out +
			"</div>" +
			'<div class="pretix-widget-waiting-list-link"' +
			'     v-if="waiting_list_show">' +
			'<a :href="waiting_list_url" target="_blank" @click="$root.open_link_in_frame">' +
			strings.waiting_list +
			"</a>" +
			"</div>" +
			'<div class="pretix-widget-availability-available" v-if="!require_voucher && avail[0] === 100">' +
			'<label class="pretix-widget-item-count-single-label" v-if="order_max === 1">' +
			'<input type="checkbox" value="1" :checked="!!amount_selected" @change="amount_selected = $event.target.checked" :name="input_name"' +
			'       v-bind:aria-label="label_select_item"' +
			">" +
			"</label>" +
			'<div :class="count_group_classes" v-else>' +
			'<button v-if="!$root.use_native_spinners" type="button" @click.prevent.stop="on_step" data-step="-1" v-bind:data-controls="\'input_\' + input_name" class="pretix-widget-btn-default pretix-widget-item-count-dec" aria-label="' +
			strings.quantity_dec +
			'"><span>-</span></button>' +
			'<input type="number" inputmode="numeric" pattern="d*" class="pretix-widget-item-count-multiple" placeholder="0" min="0"' +
			'       v-model="amount_selected" :max="order_max" :name="input_name" :id="\'input_\' + input_name"' +
			'       aria-label="' +
			strings.quantity +
			'" ref="quantity"' +
			"       >" +
			'<button v-if="!$root.use_native_spinners" type="button" @click.prevent.stop="on_step" data-step="1" v-bind:data-controls="\'input_\' + input_name" class="pretix-widget-btn-default pretix-widget-item-count-inc" aria-label="' +
			strings.quantity_inc +
			'"><span>+</span></button>' +
			"</div>" +
			"</div>" +
			"</div>",
		props: { item: Object, variation: Object },
		mounted: function () {
			if (this.item.has_variations) {
				this.$set(this.variation, "amount_selected", 0);
			} else {
				this.$set(this.item, "amount_selected", this.$root.itemnum === 1 && !this.$root.has_seating_plan ? 1 : 0);
			}
			this.$root.$emit("amounts_changed");
		},
		computed: {
			count_group_classes: function () {
				return { "pretix-widget-item-count-group": !this.$root.use_native_spinners };
			},
			require_voucher: function () {
				return this.item.require_voucher && !this.$root.voucher_code;
			},
			amount_selected: {
				cache: false,
				get: function () {
					var selected = this.item.has_variations ? this.variation.amount_selected : this.item.amount_selected;
					if (selected === 0) return undefined;
					return selected;
				},
				set: function (value) {
					value = +value;
					if (this.item.has_variations) {
						this.variation.amount_selected = value;
					} else {
						this.item.amount_selected = value;
					}
					if (this.$refs.quantity) {
						this.$refs.quantity.value = value;
					}
					this.$root.$emit("amounts_changed");
				},
			},
			label_select_item: function () {
				return this.item.has_variations ? strings.select_variant.replace("%s", this.variation.value) : strings.select_item.replace("%s", this.item.name);
			},
			input_name: function () {
				if (this.item.has_variations) {
					return "variation_" + this.item.id + "_" + this.variation.id;
				} else {
					return "item_" + this.item.id;
				}
			},
			order_max: function () {
				return this.item.has_variations ? this.variation.order_max : this.item.order_max;
			},
			avail: function () {
				return this.item.has_variations ? this.variation.avail : this.item.avail;
			},
			waiting_list_show: function () {
				return this.avail[0] < 100 && this.$root.waiting_list_enabled && this.item.allow_waitinglist;
			},
			waiting_list_url: function () {
				var u;
				if (this.item.has_variations) {
					u = this.$root.target_url + "w/" + widget_id + "/waitinglist/?item=" + this.item.id + "&var=" + this.variation.id + "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
				} else {
					u = this.$root.target_url + "w/" + widget_id + "/waitinglist/?item=" + this.item.id + "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
				}
				if (this.$root.subevent) {
					u += "&subevent=" + this.$root.subevent;
				}
				return u;
			},
		},
		methods: {
			focus_voucher_field: function () {
				this.$root.$emit("focus_voucher_field");
			},
			on_step: function (e) {
				var t = e.target.tagName == "BUTTON" ? e.target : e.target.closest("button");
				var step = parseFloat(t.getAttribute("data-step"));
				var controls = document.getElementById(t.getAttribute("data-controls"));
				this.amount_selected = Math.max(controls.min, Math.min(controls.max || Number.MAX_SAFE_INTEGER, (this.amount_selected || 0) + step));
			},
		},
	});
	Vue.component("pricebox", {
		template:
			'<div class="pretix-widget-pricebox">' +
			'<span v-if="!free_price && !original_price">{{ priceline }}</span>' +
			'<span v-if="!free_price && original_price">' +
			'<del class="pretix-widget-pricebox-original-price">{{ original_line }}</del> ' +
			'<ins class="pretix-widget-pricebox-new-price">{{ priceline }}</ins></span>' +
			'<div v-if="free_price">' +
			"{{ $root.currency }} " +
			'<input type="number" class="pretix-widget-pricebox-price-input" placeholder="0" ' +
			'       :min="display_price_nonlocalized" :value="display_price_nonlocalized" :name="field_name"' +
			'       step="any" aria-label="' +
			strings.price +
			'">' +
			"</div>" +
			"<small class=\"pretix-widget-pricebox-tax\" v-if=\"price.rate != '0.00' && price.gross != '0.00'\">" +
			"{{ taxline }}" +
			"</small>" +
			"</div>",
		props: { price: Object, free_price: Boolean, field_name: String, original_price: String, mandatory_priced_addons: Boolean },
		computed: {
			display_price: function () {
				if (this.$root.display_net_prices) {
					return floatformat(parseFloat(this.price.net), 2);
				} else {
					return floatformat(parseFloat(this.price.gross), 2);
				}
			},
			display_price_nonlocalized: function () {
				if (this.$root.display_net_prices) {
					return parseFloat(this.price.net).toFixed(2);
				} else {
					return parseFloat(this.price.gross).toFixed(2);
				}
			},
			original_line: function () {
				return this.$root.currency + " " + floatformat(parseFloat(this.original_price), 2);
			},
			priceline: function () {
				if (this.price.gross === "0.00") {
					if (this.mandatory_priced_addons && !this.original_price) {
						return "\xA0";
					}
					return strings.free;
				} else {
					return this.$root.currency + " " + this.display_price;
				}
			},
			taxline: function () {
				if (this.$root.display_net_prices) {
					if (this.price.includes_mixed_tax_rate) {
						return strings.tax_plus_mixed;
					} else {
						return django.interpolate(strings.tax_plus, { rate: autofloatformat(this.price.rate, 2), taxname: this.price.name }, true);
					}
				} else {
					if (this.price.includes_mixed_tax_rate) {
						return strings.tax_incl_mixed;
					} else {
						return django.interpolate(strings.tax_incl, { rate: autofloatformat(this.price.rate, 2), taxname: this.price.name }, true);
					}
				}
			},
		},
	});
	Vue.component("variation", {
		template:
			'<div class="pretix-widget-variation" :data-id="variation.id">' +
			'<div class="pretix-widget-item-row">' +
			'<div class="pretix-widget-item-info-col">' +
			'<div class="pretix-widget-item-title-and-description">' +
			'<strong class="pretix-widget-item-title">{{ variation.value }}</strong>' +
			'<div class="pretix-widget-item-description" v-if="variation.description" v-html="variation.description"></div>' +
			'<p class="pretix-widget-item-meta" ' +
			'   v-if="!variation.has_variations && variation.avail[1] !== null && variation.avail[0] === 100">' +
			"<small>{{ quota_left_str }}</small>" +
			"</p>" +
			"</div>" +
			"</div>" +
			'<div class="pretix-widget-item-price-col">' +
			'<pricebox :price="variation.price" :free_price="item.free_price" :original_price="orig_price" ' +
			'          :mandatory_priced_addons="item.mandatory_priced_addons"' +
			"          :field_name=\"'price_' + item.id + '_' + variation.id\" v-if=\"$root.showPrices\">" +
			"</pricebox>" +
			'<span v-if="!$root.showPrices">&nbsp;</span>' +
			"</div>" +
			'<div class="pretix-widget-item-availability-col">' +
			'<availbox :item="item" :variation="variation"></availbox>' +
			"</div>" +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			"</div>",
		props: { variation: Object, item: Object },
		computed: {
			orig_price: function () {
				if (this.variation.original_price) {
					return this.variation.original_price;
				}
				return this.item.original_price;
			},
			quota_left_str: function () {
				return django.interpolate(strings["quota_left"], [this.variation.avail[1]]);
			},
		},
	});
	Vue.component("item", {
		template:
			'<div v-bind:class="classObject" :data-id="item.id">' +
			'<div class="pretix-widget-item-row pretix-widget-main-item-row">' +
			'<div class="pretix-widget-item-info-col">' +
			'<img :src="item.picture" v-if="item.picture" class="pretix-widget-item-picture">' +
			'<div class="pretix-widget-item-title-and-description">' +
			'<a v-if="item.has_variations && show_toggle" class="pretix-widget-item-title" :href="\'#\' + item.id + \'-variants\'"' +
			'   @click.prevent.stop="expand" role="button" tabindex="0"' +
			"   v-bind:aria-expanded=\"expanded ? 'true': 'false'\" v-bind:aria-controls=\"item.id + '-variants'\">" +
			"{{ item.name }}" +
			"</a>" +
			'<strong v-else class="pretix-widget-item-title">{{ item.name }}</strong>' +
			'<div class="pretix-widget-item-description" v-if="item.description" v-html="item.description"></div>' +
			'<p class="pretix-widget-item-meta" v-if="item.order_min && item.order_min > 1">' +
			"<small>{{ min_order_str }}</small>" +
			"</p>" +
			'<p class="pretix-widget-item-meta" ' +
			'    v-if="!item.has_variations && item.avail[1] !== null && item.avail[0] === 100">' +
			"<small>{{ quota_left_str }}</small>" +
			"</p>" +
			"</div>" +
			"</div>" +
			'<div class="pretix-widget-item-price-col">' +
			'<pricebox :price="item.price" :free_price="item.free_price" v-if="!item.has_variations && $root.showPrices"' +
			'          :mandatory_priced_addons="item.mandatory_priced_addons"' +
			'          :field_name="\'price_\' + item.id" :original_price="item.original_price">' +
			"</pricebox>" +
			'<div class="pretix-widget-pricebox" v-if="item.has_variations && $root.showPrices">{{ pricerange }}</div>' +
			'<span v-if="!$root.showPrices">&nbsp;</span>' +
			"</div>" +
			'<div class="pretix-widget-item-availability-col">' +
			'<a v-if="show_toggle" :href="\'#\' + item.id + \'-variants\'" @click.prevent.stop="expand" role="button" tabindex="0"' +
			"   v-bind:aria-expanded=\"expanded ? 'true': 'false'\" v-bind:aria-controls=\"item.id + '-variants'\">" +
			strings.variations +
			"</a>" +
			'<availbox v-if="!item.has_variations" :item="item"></availbox>' +
			"</div>" +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			'<div :class="varClasses" v-if="item.has_variations" :id="item.id + \'-variants\'" ref="variations">' +
			'<variation v-for="variation in item.variations" :variation="variation" :item="item" :key="variation.id">' +
			"</variation>" +
			"</div>" +
			"</div>",
		props: { item: Object },
		data: function () {
			return { expanded: this.$root.show_variations_expanded };
		},
		mounted: function () {
			if (this.$refs.variations) {
				if (!this.expanded) {
					var $this = this;
					this.$refs.variations.hidden = true;
					this.$refs.variations.addEventListener("transitionend", function (event) {
						if (event.target == this) {
							this.hidden = !$this.expanded;
							this.style.maxHeight = "none";
						}
					});
					this.$watch("expanded", function (newValue) {
						var v = this.$refs.variations;
						v.hidden = false;
						v.style.maxHeight = (newValue ? 0 : v.scrollHeight) + "px";
						window.setTimeout(function () {
							v.style.maxHeight = (!newValue ? 0 : v.scrollHeight) + "px";
						}, 50);
					});
				}
			}
		},
		methods: {
			expand: function () {
				this.expanded = !this.expanded;
			},
		},
		computed: {
			classObject: function () {
				return { "pretix-widget-item": true, "pretix-widget-item-with-picture": !!this.item.picture, "pretix-widget-item-with-variations": this.item.has_variations };
			},
			varClasses: function () {
				return { "pretix-widget-item-variations": true, "pretix-widget-item-variations-expanded": this.expanded };
			},
			min_order_str: function () {
				return django.interpolate(strings["order_min"], [this.item.order_min]);
			},
			quota_left_str: function () {
				return django.interpolate(strings["quota_left"], [this.item.avail[1]]);
			},
			show_toggle: function () {
				return this.item.has_variations && !this.$root.show_variations_expanded;
			},
			pricerange: function () {
				if (this.item.free_price) {
					return django.interpolate(strings.price_from, { currency: this.$root.currency, price: floatformat(this.item.min_price, 2) }, true);
				} else if (this.item.min_price !== this.item.max_price) {
					return this.$root.currency + " " + floatformat(this.item.min_price, 2) + " Ã¢â‚¬â€œ " + floatformat(this.item.max_price, 2);
				} else if (this.item.min_price === "0.00" && this.item.max_price === "0.00") {
					if (this.item.mandatory_priced_addons) {
						return "\xA0";
					}
					return strings.free;
				} else {
					return this.$root.currency + " " + floatformat(this.item.min_price, 2);
				}
			},
		},
	});
	Vue.component("category", {
		template:
			'<div class="pretix-widget-category" :data-id="category.id">' +
			'<h3 class="pretix-widget-category-name" v-if="category.name">{{ category.name }}</h3>' +
			'<div class="pretix-widget-category-description" v-if="category.description" v-html="category.description">' +
			"</div>" +
			'<div class="pretix-widget-category-items">' +
			'<item v-for="item in category.items" :item="item" :key="item.id"></item>' +
			"</div>" +
			"</div>",
		props: { category: Object },
	});
	var shared_methods = {
		buy: function (event) {
			if (this.$root.useIframe) {
				if (event) {
					event.preventDefault();
				}
			} else {
				return;
			}
			if (this.$root.is_button && this.$root.items.length === 0) {
				if (this.$root.voucher_code) {
					this.voucher_open(this.$root.voucher_code);
				} else {
					this.resume();
				}
			} else {
				var url = this.$root.formAction + "&locale=" + lang + "&ajax=1";
				this.$root.overlay.frame_loading = true;
				this.async_task_interval = 100;
				var form = this.$refs.form;
				if (form === undefined) {
					form = this.$refs.formcomp.$refs.form;
				}
				api._postFormJSON(url, form, this.buy_callback, this.buy_error_callback);
			}
		},
		buy_error_callback: function (xhr, data) {
			if (xhr.status === 429 && typeof xhr.responseURL !== "undefined") {
				this.$root.overlay.error_message = strings["cart_error_429"];
				this.$root.overlay.frame_loading = false;
				this.$root.overlay.error_url_after = this.$root.newTabTarget;
				this.$root.overlay.error_url_after_new_tab = true;
				return;
			}
			if (xhr.status === 405 && typeof xhr.responseURL !== "undefined") {
				this.$root.target_url = xhr.responseURL.substr(0, xhr.responseURL.indexOf("/cart/add") - 18);
				this.$root.overlay.frame_loading = false;
				this.buy();
				return;
			}
			this.$root.overlay.error_message = strings["cart_error"];
			this.$root.overlay.frame_loading = false;
		},
		buy_check_error_callback: function (xhr, data) {
			if (xhr.status == 200 || (xhr.status >= 400 && xhr.status < 500)) {
				this.$root.overlay.error_message = strings["cart_error"];
				this.$root.overlay.frame_loading = false;
			} else {
				this.async_task_timeout = window.setTimeout(this.buy_check, 1000);
			}
		},
		buy_callback: function (data) {
			if (data.redirect) {
				var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
				if (data.cart_id) {
					this.$root.cart_id = data.cart_id;
					setCookie(this.$root.cookieName, data.cart_id, 30);
				}
				if (data.redirect.substr(0, 1) === "/") {
					data.redirect = this.$root.target_url.replace(/^([^\/]+:\/\/[^\/]+)\/.*$/, "$1") + data.redirect;
				}
				var url = data.redirect;
				if (url.indexOf("?")) {
					url = url + "&iframe=1&locale=" + lang + "&take_cart_id=" + this.$root.cart_id;
				} else {
					url = url + "?iframe=1&locale=" + lang + "&take_cart_id=" + this.$root.cart_id;
				}
				if (data.success === false) {
					url = url.replace(/checkout\/start/g, "");
					this.$root.overlay.error_message = data.message;
					if (data.has_cart) {
						this.$root.overlay.error_url_after = url;
					}
					this.$root.overlay.frame_loading = false;
				} else {
					iframe.src = url;
				}
			} else {
				this.async_task_id = data.async_id;
				if (data.check_url) {
					this.async_task_check_url = this.$root.target_url.replace(/^([^\/]+:\/\/[^\/]+)\/.*$/, "$1") + data.check_url;
				}
				this.async_task_timeout = window.setTimeout(this.buy_check, this.async_task_interval);
				this.async_task_interval = 250;
			}
		},
		buy_check: function () {
			api._getJSON(this.async_task_check_url, this.buy_callback, this.buy_check_error_callback);
		},
		redeem: function (event) {
			if (this.$root.useIframe) {
				event.preventDefault();
			} else {
				return;
			}
			var redirect_url = this.$root.voucherFormTarget + "&voucher=" + encodeURIComponent(this.voucher) + "&subevent=" + this.$root.subevent;
			if (this.$root.widget_data) {
				redirect_url += "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
			}
			var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
			this.$root.overlay.frame_loading = true;
			iframe.src = redirect_url;
		},
		voucher_open: function (voucher) {
			var redirect_url;
			redirect_url = this.$root.voucherFormTarget + "&voucher=" + encodeURIComponent(voucher);
			if (this.$root.widget_data) {
				redirect_url += "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
			}
			if (this.$root.useIframe) {
				var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
				this.$root.overlay.frame_loading = true;
				iframe.src = redirect_url;
			} else {
				window.open(redirect_url);
			}
		},
		resume: function () {
			var redirect_url;
			redirect_url = this.$root.target_url + "w/" + widget_id + "/";
			if (this.$root.subevent && !this.$root.cart_id) {
				redirect_url += this.$root.subevent + "/";
			}
			redirect_url += "?iframe=1&locale=" + lang;
			if (this.$root.cart_id) {
				redirect_url += "&take_cart_id=" + this.$root.cart_id;
			}
			if (this.$root.widget_data) {
				redirect_url += "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
			}
			if (this.$root.useIframe) {
				var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
				this.$root.overlay.frame_loading = true;
				iframe.src = redirect_url;
			} else {
				window.open(redirect_url);
			}
		},
		handleResize: function () {
			this.mobile = this.$refs.wrapper.clientWidth <= 800;
		},
	};
	var shared_widget_data = function () {
		return { async_task_id: null, async_task_check_url: null, async_task_timeout: null, async_task_interval: 100, voucher: null, mobile: false };
	};
	var shared_loading_fragment =
		'<div class="pretix-widget-loading" v-show="$root.loading > 0">' +
		'<svg width="128" height="128" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path class="pretix-widget-primary-color" d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"/></svg>' +
		"</div>";
	var shared_iframe_fragment =
		'<div :class="frameClasses">' +
		'<div class="pretix-widget-frame-loading" v-show="$root.frame_loading">' +
		'<svg width="256" height="256" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path class="pretix-widget-primary-color" d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"/></svg>' +
		"</div>" +
		'<div class="pretix-widget-frame-inner" ref="frame-container" v-show="$root.frame_shown">' +
		'<iframe frameborder="0" width="650" height="650" @load="iframeLoaded" ' +
		'        :name="$root.parent.widget_id" src="about:blank" v-once' +
		'        allow="autoplay *; camera *; fullscreen *; payment *"' +
		'        referrerpolicy="origin">' +
		"Please enable frames in your browser!" +
		"</iframe>" +
		'<div class="pretix-widget-frame-close"><a href="#" @click.prevent.stop="close" role="button" aria-label="' +
		strings.close +
		'">' +
		'<svg height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>' +
		"</a></div>" +
		"</div>" +
		"</div>";
	var shared_alert_fragment =
		'<div :class="alertClasses">' +
		'<transition name="bounce">' +
		'<div class="pretix-widget-alert-box" v-if="$root.error_message">' +
		"<p>{{ $root.error_message }}</p>" +
		'<p><button v-if="$root.error_url_after" @click.prevent.stop="errorContinue">' +
		strings.continue +
		"</button>" +
		'<button v-else @click.prevent.stop="errorClose">' +
		strings.close +
		"</button></p>" +
		"</div>" +
		"</transition>" +
		'<svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="pretix-widget-alert-icon"><path style="fill:#ffffff;" d="M 599.86438,303.72882 H 1203.5254 V 1503.4576 H 599.86438 Z" /><path class="pretix-widget-primary-color" d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm128 1247v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z"/></svg>' +
		"</div>";
	Vue.component("pretix-overlay", {
		template: '<div class="pretix-widget-overlay">' + shared_iframe_fragment + shared_alert_fragment + "</div>",
		computed: {
			frameClasses: function () {
				return { "pretix-widget-frame-holder": true, "pretix-widget-frame-shown": this.$root.frame_shown || this.$root.frame_loading };
			},
			alertClasses: function () {
				return { "pretix-widget-alert-holder": true, "pretix-widget-alert-shown": this.$root.error_message };
			},
		},
		methods: {
			errorClose: function () {
				this.$root.error_message = null;
				this.$root.error_url_after = null;
				this.$root.error_url_after_new_tab = false;
			},
			errorContinue: function () {
				if (this.$root.error_url_after_new_tab) {
					window.open(this.$root.error_url_after);
					return;
				}
				var iframe = this.$refs["frame-container"].children[0];
				iframe.src = this.$root.error_url_after;
				this.$root.frame_loading = true;
				this.$root.error_message = null;
				this.$root.error_url_after = null;
			},
			close: function () {
				this.$root.frame_shown = false;
				this.$root.parent.frame_dismissed = true;
				this.$root.parent.reload();
				this.$root.parent.trigger_close_callback();
			},
			iframeLoaded: function () {
				if (this.$root.frame_loading) {
					this.$root.frame_loading = false;
					this.$root.frame_shown = true;
				}
			},
		},
	});
	Vue.component("pretix-widget-event-form", {
		template:
			'<div class="pretix-widget-event-form">' +
			'<div class="pretix-widget-event-list-back" v-if="$root.events || $root.weeks || $root.days">' +
			'<a href="#" @click.prevent.stop="back_to_list" v-if="!$root.subevent">&lsaquo; ' +
			strings["back_to_list"] +
			"</a>" +
			'<a href="#" @click.prevent.stop="back_to_list" v-if="$root.subevent">&lsaquo; ' +
			strings["back_to_dates"] +
			"</a>" +
			"</div>" +
			'<div class="pretix-widget-event-header" v-if="$root.events || $root.weeks || $root.days">' +
			"<strong>{{ $root.name }}</strong>" +
			"</div>" +
			'<div class="pretix-widget-event-details" v-if="($root.events || $root.weeks || $root.days) && $root.date_range">' +
			"{{ $root.date_range }}" +
			"</div>" +
			'<div class="pretix-widget-event-location" v-if="($root.events || $root.weeks || $root.days) && $root.location" v-html="$root.location"></div>' +
			'<div class="pretix-widget-event-description" v-if="($root.events || $root.weeks || $root.days) && $root.frontpage_text" v-html="$root.frontpage_text"></div>' +
			'<form method="post" :action="$root.formAction" ref="form" :target="$root.formTarget">' +
			'<input type="hidden" name="_voucher_code" :value="$root.voucher_code" v-if="$root.voucher_code">' +
			'<input type="hidden" name="subevent" :value="$root.subevent" />' +
			'<input type="hidden" name="widget_data" :value="$root.widget_data_json" />' +
			'<div class="pretix-widget-error-message" v-if="$root.error">{{ $root.error }}</div>' +
			'<div class="pretix-widget-info-message pretix-widget-clickable"' +
			'     v-if="$root.cart_exists">' +
			'<button @click.prevent.stop="$parent.resume" class="pretix-widget-resume-button" type="button">' +
			strings["resume_checkout"] +
			"</button>" +
			strings["cart_exists"] +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			'<div class="pretix-widget-seating-link-wrapper" v-if="this.$root.has_seating_plan">' +
			'<button class="pretix-widget-seating-link" @click.prevent.stop="$root.startseating">' +
			strings["show_seating"] +
			"</button>" +
			"</div>" +
			'<div class="pretix-widget-seating-waitinglist" v-if="this.$root.has_seating_plan && this.$root.has_seating_plan_waitinglist">' +
			'<div class="pretix-widget-seating-waitinglist-text">' +
			strings["seating_plan_waiting_list"] +
			"</div>" +
			'<div class="pretix-widget-seating-waitinglist-button-wrap">' +
			'<button class="pretix-widget-seating-waitinglist-button" @click.prevent.stop="$root.startwaiting">' +
			strings["waiting_list"] +
			"</button>" +
			"</div>" +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			'<category v-for="category in this.$root.categories" :category="category" :key="category.id"></category>' +
			'<div class="pretix-widget-action" v-if="$root.display_add_to_cart">' +
			'<button @click="$parent.buy" type="submit" :disabled="buy_disabled">{{ this.buy_label }}</button>' +
			"</div>" +
			"</form>" +
			'<form method="get" :action="$root.voucherFormTarget" target="_blank" ' +
			'      v-if="$root.vouchers_exist && !$root.disable_vouchers && !$root.voucher_code">' +
			'<div class="pretix-widget-voucher">' +
			'<h3 class="pretix-widget-voucher-headline">' +
			strings["redeem_voucher"] +
			"</h3>" +
			'<div v-if="$root.voucher_explanation_text" class="pretix-widget-voucher-text" v-html="$root.voucher_explanation_text"></div>' +
			'<div class="pretix-widget-voucher-input-wrap">' +
			'<input class="pretix-widget-voucher-input" ref="voucherinput" type="text" v-model="$parent.voucher" name="voucher" placeholder="' +
			strings.voucher_code +
			'">' +
			"</div>" +
			'<input type="hidden" name="subevent" :value="$root.subevent" />' +
			'<input type="hidden" name="widget_data" :value="$root.widget_data_json" />' +
			'<input type="hidden" name="locale" value="' +
			lang +
			'" />' +
			'<div class="pretix-widget-voucher-button-wrap">' +
			'<button @click="$parent.redeem">' +
			strings.redeem +
			"</button>" +
			"</div>" +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			"</form>" +
			"</div>",
		data: function () {
			return { buy_disabled: true };
		},
		mounted: function () {
			this.$root.$on("amounts_changed", this.calculate_buy_disabled);
			this.$root.$on("focus_voucher_field", this.focus_voucher_field);
			this.calculate_buy_disabled();
		},
		beforeDestroy: function () {
			this.$root.$off("amounts_changed", this.calculate_buy_disabled);
			this.$root.$off("focus_voucher_field", this.focus_voucher_field);
		},
		computed: {
			buy_label: function () {
				var i,
					j,
					k,
					all_free = true;
				for (i = 0; i < this.$root.categories.length; i++) {
					var cat = this.$root.categories[i];
					for (j = 0; j < cat.items.length; j++) {
						var item = cat.items[j];
						for (k = 0; k < item.variations.length; k++) {
							var v = item.variations[k];
							if (v.price.gross !== "0.00") {
								all_free = false;
								break;
							}
						}
						if (item.variations.length === 0 && item.price.gross !== "0.00") {
							all_free = false;
							break;
						}
					}
					if (!all_free) {
						break;
					}
				}
				if (all_free) {
					return strings.register;
				} else {
					return strings.buy;
				}
			},
		},
		methods: {
			focus_voucher_field: function () {
				this.$refs.voucherinput.scrollIntoView(false);
				this.$refs.voucherinput.focus();
			},
			back_to_list: function () {
				this.$root.target_url = this.$root.parent_stack.pop();
				this.$root.error = null;
				this.$root.subevent = null;
				this.$root.offset = 0;
				this.$root.append_events = false;
				this.$root.trigger_load_callback();
				if (this.$root.events !== undefined && this.$root.events !== null) {
					this.$root.view = "events";
				} else if (this.$root.days !== undefined && this.$root.days !== null) {
					this.$root.view = "days";
				} else {
					this.$root.view = "weeks";
				}
			},
			calculate_buy_disabled: function () {
				var i, j, k;
				for (i = 0; i < this.$root.categories.length; i++) {
					var cat = this.$root.categories[i];
					for (j = 0; j < cat.items.length; j++) {
						var item = cat.items[j];
						if (item.has_variations) {
							for (k = 0; k < item.variations.length; k++) {
								var v = item.variations[k];
								if (v.amount_selected) {
									this.buy_disabled = false;
									return;
								}
							}
						} else if (item.amount_selected) {
							this.buy_disabled = false;
							return;
						}
					}
				}
				this.buy_disabled = true;
			},
		},
	});
	Vue.component("pretix-widget-event-list-entry", {
		template:
			'<a :class="classObject" @click.prevent.stop="select">' +
			'<div class="pretix-widget-event-list-entry-name">{{ event.name }}</div>' +
			'<div class="pretix-widget-event-list-entry-date">{{ event.date_range }}</div>' +
			'<div class="pretix-widget-event-list-entry-location">{{ location }}</div>' +
			'<div class="pretix-widget-event-list-entry-availability"><span>{{ event.availability.text }}</span></div>' +
			"</a>",
		props: { event: Object },
		computed: {
			classObject: function () {
				var o = { "pretix-widget-event-list-entry": true };
				o["pretix-widget-event-availability-" + this.event.availability.color] = true;
				if (this.event.availability.reason) {
					o["pretix-widget-event-availability-" + this.event.availability.reason] = true;
				}
				return o;
			},
			location: function () {
				return this.event.location.replace(/\s*\n\s*/g, ", ");
			},
		},
		methods: {
			select: function () {
				this.$root.parent_stack.push(this.$root.target_url);
				this.$root.target_url = this.event.event_url;
				this.$root.error = null;
				this.$root.subevent = this.event.subevent;
				this.$root.loading++;
				this.$root.reload();
			},
		},
	});
	Vue.component("pretix-widget-event-list", {
		template:
			'<div class="pretix-widget-event-list">' +
			'<div class="pretix-widget-back" v-if="$root.weeks || $root.parent_stack.length > 0">' +
			'<a href="#" @click.prevent.stop="back_to_calendar" role="button">&lsaquo; ' +
			strings["back"] +
			"</a>" +
			"</div>" +
			'<div class="pretix-widget-event-header" v-if="$root.parent_stack.length > 0">' +
			"<strong>{{ $root.name }}</strong>" +
			"</div>" +
			'<div class="pretix-widget-event-description" v-if="$root.parent_stack.length > 0 && $root.frontpage_text" v-html="$root.frontpage_text"></div>' +
			'<pretix-widget-event-list-entry v-for="event in $root.events" :event="event" :key="event.url"></pretix-widget-event-list-entry>' +
			'<p class="pretix-widget-event-list-load-more" v-if="$root.has_more_events"><button @click.prevent.stop="load_more">' +
			strings.load_more +
			"</button></p>" +
			"</div>",
		methods: {
			back_to_calendar: function () {
				this.$root.offset = 0;
				this.$root.append_events = false;
				if (this.$root.weeks) {
					this.$root.events = undefined;
					this.$root.view = "weeks";
					this.$root.name = null;
					this.$root.frontpage_text = null;
				} else {
					this.$root.loading++;
					this.$root.target_url = this.$root.parent_stack.pop();
					this.$root.error = null;
					this.$root.reload();
				}
			},
			load_more: function () {
				this.$root.append_events = true;
				this.$root.offset += 50;
				this.$root.loading++;
				this.$root.reload();
			},
		},
	});
	Vue.component("pretix-widget-event-calendar-event", {
		template:
			'<a :class="classObject" @click.prevent.stop="select">' +
			'<strong class="pretix-widget-event-calendar-event-name">' +
			"{{ event.name }}" +
			"</strong>" +
			'<div class="pretix-widget-event-calendar-event-date" v-if="!event.continued && event.time">{{ event.time }}</div>' +
			'<div class="pretix-widget-event-calendar-event-availability" v-if="!event.continued && event.availability.text">{{ event.availability.text }}</div>' +
			"</a>",
		props: { event: Object },
		computed: {
			classObject: function () {
				var o = { "pretix-widget-event-calendar-event": true };
				o["pretix-widget-event-availability-" + this.event.availability.color] = true;
				if (this.event.availability.reason) {
					o["pretix-widget-event-availability-" + this.event.availability.reason] = true;
				}
				return o;
			},
		},
		methods: {
			select: function () {
				this.$root.parent_stack.push(this.$root.target_url);
				this.$root.target_url = this.event.event_url;
				this.$root.error = null;
				this.$root.subevent = this.event.subevent;
				this.$root.loading++;
				this.$root.reload();
			},
		},
	});
	Vue.component("pretix-widget-event-week-cell", {
		template:
			'<div :class="classObject" @click.prevent.stop="selectDay">' +
			'<div class="pretix-widget-event-calendar-day" v-if="day">' +
			"{{ dayhead }}" +
			"</div>" +
			'<div class="pretix-widget-event-calendar-events" v-if="day">' +
			'<pretix-widget-event-calendar-event v-for="e in day.events" :event="e"></pretix-widget-event-calendar-event>' +
			"</div>" +
			"</div>",
		props: { day: Object },
		methods: {
			selectDay: function () {
				if (!this.day || !this.day.events.length || !this.$parent.$parent.$parent.mobile) {
					return;
				}
				if (this.day.events.length === 1) {
					var ev = this.day.events[0];
					this.$root.parent_stack.push(this.$root.target_url);
					this.$root.target_url = ev.event_url;
					this.$root.error = null;
					this.$root.subevent = ev.subevent;
					this.$root.loading++;
					this.$root.reload();
				} else {
					this.$root.events = this.day.events;
					this.$root.view = "events";
				}
			},
		},
		computed: {
			dayhead: function () {
				if (!this.day) {
					return;
				}
				return this.day.day_formatted;
			},
			classObject: function () {
				var o = {};
				if (this.day && this.day.events.length > 0) {
					o["pretix-widget-has-events"] = true;
					var best = "red";
					var all_low = true;
					for (var i = 0; i < this.day.events.length; i++) {
						var ev = this.day.events[i];
						if (ev.availability.color === "green") {
							best = "green";
							if (ev.availability.reason !== "low") {
								all_low = false;
							}
						} else if (ev.availability.color === "orange" && best !== "green") {
							best = "orange";
						}
					}
					o["pretix-widget-day-availability-" + best] = true;
					if (best === "green" && all_low) {
						o["pretix-widget-day-availability-low"] = true;
					}
				}
				return o;
			},
		},
	});
	Vue.component("pretix-widget-event-calendar-cell", {
		template:
			'<td :class="classObject" @click.prevent.stop="selectDay">' +
			'<div class="pretix-widget-event-calendar-day" v-if="day">' +
			"{{ daynum }}" +
			"</div>" +
			'<div class="pretix-widget-event-calendar-events" v-if="day">' +
			'<pretix-widget-event-calendar-event v-for="e in day.events" :event="e"></pretix-widget-event-calendar-event>' +
			"</div>" +
			"</td>",
		props: { day: Object },
		methods: {
			selectDay: function () {
				if (!this.day || !this.day.events.length || !this.$parent.$parent.$parent.mobile) {
					return;
				}
				if (this.day.events.length === 1) {
					var ev = this.day.events[0];
					this.$root.parent_stack.push(this.$root.target_url);
					this.$root.target_url = ev.event_url;
					this.$root.error = null;
					this.$root.subevent = ev.subevent;
					this.$root.loading++;
					this.$root.reload();
				} else {
					this.$root.events = this.day.events;
					this.$root.view = "events";
				}
			},
		},
		computed: {
			daynum: function () {
				if (!this.day) {
					return;
				}
				return this.day.date.substr(8);
			},
			classObject: function () {
				var o = {};
				if (this.day && this.day.events.length > 0) {
					o["pretix-widget-has-events"] = true;
					var best = "red";
					var all_low = true;
					for (var i = 0; i < this.day.events.length; i++) {
						var ev = this.day.events[i];
						if (ev.availability.color === "green") {
							best = "green";
							if (ev.availability.reason !== "low") {
								all_low = false;
							}
						} else if (ev.availability.color === "orange" && best !== "green") {
							best = "orange";
						}
					}
					o["pretix-widget-day-availability-" + best] = true;
					if (best === "green" && all_low) {
						o["pretix-widget-day-availability-low"] = true;
					}
				}
				return o;
			},
		},
	});
	Vue.component("pretix-widget-event-calendar-row", { template: "<tr>" + '<pretix-widget-event-calendar-cell v-for="d in week" :day="d"></pretix-widget-event-calendar-cell>' + "</tr>", props: { week: Array } });
	Vue.component("pretix-widget-event-calendar", {
		template:
			'<div class="pretix-widget-event-calendar" ref="calendar">' +
			'<div class="pretix-widget-back" v-if="$root.events !== undefined">' +
			'<a href="#" @click.prevent.stop="back_to_list" role="button">&lsaquo; ' +
			strings["back"] +
			"</a>" +
			"</div>" +
			'<div class="pretix-widget-event-header" v-if="$root.parent_stack.length > 0">' +
			"<strong>{{ $root.name }}</strong>" +
			"</div>" +
			'<div class="pretix-widget-event-description" v-if="$root.parent_stack.length > 0 && $root.frontpage_text" v-html="$root.frontpage_text"></div>' +
			'<div class="pretix-widget-event-calendar-head">' +
			'<a class="pretix-widget-event-calendar-previous-month" href="#" @click.prevent.stop="prevmonth" role="button">&laquo; ' +
			strings["previous_month"] +
			"</a> " +
			"<strong>{{ monthname }}</strong> " +
			'<a class="pretix-widget-event-calendar-next-month" href="#" @click.prevent.stop="nextmonth" role="button">' +
			strings["next_month"] +
			" &raquo;</a>" +
			"</div>" +
			'<table class="pretix-widget-event-calendar-table">' +
			"<thead>" +
			"<tr>" +
			"<th>" +
			strings["days"]["MO"] +
			"</th>" +
			"<th>" +
			strings["days"]["TU"] +
			"</th>" +
			"<th>" +
			strings["days"]["WE"] +
			"</th>" +
			"<th>" +
			strings["days"]["TH"] +
			"</th>" +
			"<th>" +
			strings["days"]["FR"] +
			"</th>" +
			"<th>" +
			strings["days"]["SA"] +
			"</th>" +
			"<th>" +
			strings["days"]["SU"] +
			"</th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>" +
			'<pretix-widget-event-calendar-row v-for="week in $root.weeks" :week="week"></pretix-widget-event-calendar-row>' +
			"</tbody>" +
			"</table>" +
			"</div>",
		computed: {
			monthname: function () {
				return strings["months"][this.$root.date.substr(5, 2)] + " " + this.$root.date.substr(0, 4);
			},
		},
		methods: {
			back_to_list: function () {
				this.$root.weeks = undefined;
				this.$root.view = "events";
				this.$root.name = null;
				this.$root.frontpage_text = null;
			},
			prevmonth: function () {
				var curMonth = parseInt(this.$root.date.substr(5, 2));
				var curYear = parseInt(this.$root.date.substr(0, 4));
				curMonth--;
				if (curMonth < 1) {
					curMonth = 12;
					curYear--;
				}
				this.$root.date = String(curYear) + "-" + padNumber(curMonth, 2) + "-01";
				this.$root.loading++;
				this.$root.reload();
			},
			nextmonth: function () {
				var curMonth = parseInt(this.$root.date.substr(5, 2));
				var curYear = parseInt(this.$root.date.substr(0, 4));
				curMonth++;
				if (curMonth > 12) {
					curMonth = 1;
					curYear++;
				}
				this.$root.date = String(curYear) + "-" + padNumber(curMonth, 2) + "-01";
				this.$root.loading++;
				this.$root.reload();
			},
		},
	});
	Vue.component("pretix-widget-event-week-calendar", {
		template:
			'<div class="pretix-widget-event-calendar pretix-widget-event-week-calendar" ref="weekcalendar">' +
			'<div class="pretix-widget-back" v-if="$root.events !== undefined">' +
			'<a href="#" @click.prevent.stop="back_to_list" role="button">&lsaquo; ' +
			strings["back"] +
			"</a>" +
			"</div>" +
			'<div class="pretix-widget-event-header" v-if="$root.parent_stack.length > 0">' +
			"<strong>{{ $root.name }}</strong>" +
			"</div>" +
			'<div class="pretix-widget-event-description" v-if="$root.parent_stack.length > 0 && $root.frontpage_text" v-html="$root.frontpage_text"></div>' +
			'<div class="pretix-widget-event-calendar-head">' +
			'<a class="pretix-widget-event-calendar-previous-month" href="#" @click.prevent.stop="prevweek" role="button">&laquo; ' +
			strings["previous_week"] +
			"</a> " +
			"<strong>{{ weekname }}</strong> " +
			'<a class="pretix-widget-event-calendar-next-month" href="#" @click.prevent.stop="nextweek" role="button">' +
			strings["next_week"] +
			" &raquo;</a>" +
			"</div>" +
			'<div class="pretix-widget-event-week-table">' +
			'<div class="pretix-widget-event-week-col" v-for="d in $root.days">' +
			'<pretix-widget-event-week-cell :day="d">' +
			"</pretix-widget-event-week-cell>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>",
		computed: {
			weekname: function () {
				var curWeek = this.$root.week[1];
				var curYear = this.$root.week[0];
				return curWeek + " / " + curYear;
			},
		},
		methods: {
			back_to_list: function () {
				this.$root.weeks = undefined;
				this.$root.name = null;
				this.$root.frontpage_text = null;
				this.$root.view = "events";
			},
			prevweek: function () {
				var curWeek = this.$root.week[1];
				var curYear = this.$root.week[0];
				curWeek--;
				if (curWeek < 1) {
					curYear--;
					curWeek = getISOWeeks(curYear);
				}
				this.$root.week = [curYear, curWeek];
				this.$root.loading++;
				this.$root.reload();
			},
			nextweek: function () {
				var curWeek = this.$root.week[1];
				var curYear = this.$root.week[0];
				curWeek++;
				if (curWeek > getISOWeeks(curYear)) {
					curWeek = 1;
					curYear++;
				}
				this.$root.week = [curYear, curWeek];
				this.$root.loading++;
				this.$root.reload();
			},
		},
	});
	Vue.component("pretix-widget", {
		template:
			'<div class="pretix-widget-wrapper" ref="wrapper">' +
			'<div :class="classObject">' +
			'<resize-observer @notify="handleResize" />' +
			shared_loading_fragment +
			'<div class="pretix-widget-error-message" v-if="$root.error && $root.view !== \'event\'">{{ $root.error }}</div>' +
			'<div class="pretix-widget-error-action" v-if="$root.error && $root.connection_error"><a :href="$root.newTabTarget" class="pretix-widget-button" target="_blank">' +
			strings["open_new_tab"] +
			"</a></div>" +
			'<pretix-widget-event-form ref="formcomp" v-if="$root.view === \'event\'"></pretix-widget-event-form>' +
			"<pretix-widget-event-list v-if=\"$root.view === 'events'\"></pretix-widget-event-list>" +
			"<pretix-widget-event-calendar v-if=\"$root.view === 'weeks'\"></pretix-widget-event-calendar>" +
			"<pretix-widget-event-week-calendar v-if=\"$root.view === 'days'\"></pretix-widget-event-week-calendar>" +
			'<div class="pretix-widget-clear"></div>' +
			'<div class="pretix-widget-attribution" v-if="$root.poweredby" v-html="$root.poweredby">' +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>",
		data: shared_widget_data,
		methods: shared_methods,
		mounted: function () {
			this.mobile = this.$refs.wrapper.clientWidth <= 600;
		},
		computed: {
			classObject: function () {
				return { "pretix-widget": true, "pretix-widget-mobile": this.mobile, "pretix-widget-use-custom-spinners": !this.$root.use_native_spinners };
			},
		},
	});
	Vue.component("pretix-button", {
		template:
			'<div class="pretix-widget-wrapper">' +
			'<div class="pretix-widget-button-container">' +
			'<form :method="$root.formMethod" :action="$root.formAction" ref="form" :target="$root.formTarget">' +
			'<input type="hidden" name="_voucher_code" :value="$root.voucher_code" v-if="$root.voucher_code">' +
			'<input type="hidden" name="voucher" :value="$root.voucher_code" v-if="$root.voucher_code">' +
			'<input type="hidden" name="subevent" :value="$root.subevent" />' +
			'<input type="hidden" name="locale" :value="$root.lang" />' +
			'<input type="hidden" name="widget_data" :value="$root.widget_data_json" />' +
			'<input type="hidden" v-for="item in $root.items" :name="item.item" :value="item.count" />' +
			'<button class="pretix-button" @click="buy">{{ $root.button_text }}</button>' +
			"</form>" +
			'<div class="pretix-widget-clear"></div>' +
			"</div>" +
			"</div>" +
			"</div>",
		data: shared_widget_data,
		methods: shared_methods,
	});
	var shared_root_methods = {
		open_link_in_frame: function (event) {
			if (this.$root.useIframe) {
				event.preventDefault();
				var url = event.target.attributes.href.value;
				if (url.indexOf("?")) {
					url += "&iframe=1";
				} else {
					url += "?iframe=1";
				}
				this.$root.overlay.$children[0].$refs["frame-container"].children[0].src = url;
				this.$root.overlay.frame_loading = true;
			} else {
				return;
			}
		},
		trigger_load_callback: function () {
			this.$nextTick(function () {
				for (var i = 0; i < window.PretixWidget._loaded.length; i++) {
					window.PretixWidget._loaded[i]();
				}
			});
		},
		trigger_close_callback: function () {
			this.$nextTick(function () {
				for (var i = 0; i < window.PretixWidget._closed.length; i++) {
					window.PretixWidget._closed[i]();
				}
			});
		},
		reload: function () {
			var url;
			if (this.$root.is_button) {
				return;
			}
			if (this.$root.subevent) {
				url = this.$root.target_url + this.$root.subevent + "/widget/product_list?lang=" + lang;
			} else {
				url = this.$root.target_url + "widget/product_list?lang=" + lang;
			}
			if (this.$root.offset) {
				url += "&offset=" + this.$root.offset;
			}
			if (this.$root.filter) {
				url += "&" + this.$root.filter;
			}
			if (this.$root.item_filter) {
				url += "&items=" + encodeURIComponent(this.$root.item_filter);
			}
			if (this.$root.category_filter) {
				url += "&categories=" + encodeURIComponent(this.$root.category_filter);
			}
			if (this.$root.variation_filter) {
				url += "&variations=" + encodeURIComponent(this.$root.variation_filter);
			}
			var cart_id = getCookie(this.cookieName);
			if (this.$root.voucher_code) {
				url += "&voucher=" + encodeURIComponent(this.$root.voucher_code);
			}
			if (cart_id) {
				url += "&cart_id=" + encodeURIComponent(cart_id);
			}
			if (this.$root.date !== null) {
				url += "&date=" + this.$root.date.substr(0, 7);
			} else if (this.$root.week !== null) {
				url += "&date=" + this.$root.week[0] + "-W" + this.$root.week[1];
			}
			if (this.$root.style !== null) {
				url = url + "&style=" + encodeURIComponent(this.$root.style);
			}
			var root = this.$root;
			api._getJSON(
				url,
				function (data, xhr) {
					if (typeof xhr.responseURL !== "undefined") {
						var new_url = xhr.responseURL.substr(0, xhr.responseURL.indexOf("/widget/product_list?") + 1);
						var old_url = url.substr(0, url.indexOf("/widget/product_list?") + 1);
						if (new_url !== old_url) {
							if (root.subevent) {
								new_url = new_url.substr(0, new_url.lastIndexOf("/", new_url.length - 1) + 1);
							}
							root.target_url = new_url;
							root.reload();
							return;
						}
					}
					root.connection_error = false;
					if (data.weeks !== undefined) {
						root.weeks = data.weeks;
						root.date = data.date;
						root.week = null;
						root.events = undefined;
						root.view = "weeks";
						root.name = data.name;
						root.frontpage_text = data.frontpage_text;
					} else if (data.days !== undefined) {
						root.days = data.days;
						root.date = null;
						root.week = data.week;
						root.events = undefined;
						root.view = "days";
						root.name = data.name;
						root.frontpage_text = data.frontpage_text;
					} else if (data.events !== undefined) {
						root.events = root.append_events && root.events ? root.events.concat(data.events) : data.events;
						root.append_events = false;
						root.weeks = undefined;
						root.view = "events";
						root.name = data.name;
						root.frontpage_text = data.frontpage_text;
						root.has_more_events = data.has_more_events;
					} else {
						root.view = "event";
						root.name = data.name;
						root.frontpage_text = data.frontpage_text;
						root.date_range = data.date_range;
						root.location = data.location;
						root.categories = data.items_by_category;
						root.currency = data.currency;
						root.display_net_prices = data.display_net_prices;
						root.use_native_spinners = data.use_native_spinners;
						root.voucher_explanation_text = data.voucher_explanation_text;
						root.error = data.error;
						root.display_add_to_cart = data.display_add_to_cart;
						root.waiting_list_enabled = data.waiting_list_enabled;
						root.show_variations_expanded = data.show_variations_expanded || !!root.variation_filter;
						root.cart_id = cart_id;
						root.cart_exists = data.cart_exists;
						root.vouchers_exist = data.vouchers_exist;
						root.has_seating_plan = data.has_seating_plan;
						root.has_seating_plan_waitinglist = data.has_seating_plan_waitinglist;
						root.itemnum = data.itemnum;
					}
					root.poweredby = data.poweredby;
					if (root.loading > 0) {
						root.loading--;
						root.trigger_load_callback();
					}
					if (root.parent_stack.length > 0 && root.has_seating_plan && root.categories.length === 0 && !root.frame_dismissed && root.useIframe && !root.error && !root.has_seating_plan_waitinglist) {
						root.startseating();
					}
				},
				function (error) {
					root.categories = [];
					root.currency = "";
					if (error.status === 429) {
						root.error = strings["loading_error_429"];
						root.connection_error = true;
					} else {
						root.error = strings["loading_error"];
						root.connection_error = true;
					}
					if (root.loading > 0) {
						root.loading--;
						root.trigger_load_callback();
					}
				}
			);
		},
		startwaiting: function () {
			var redirect_url = this.$root.target_url + "w/" + widget_id;
			if (this.$root.subevent) {
				redirect_url += "/" + this.$root.subevent;
			}
			redirect_url += "/waitinglist/?iframe=1&locale=" + lang;
			if (this.$root.useIframe) {
				var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
				this.$root.overlay.frame_loading = true;
				iframe.src = redirect_url;
			} else {
				window.open(redirect_url);
			}
		},
		startseating: function () {
			var redirect_url = this.$root.target_url + "w/" + widget_id;
			if (this.$root.subevent) {
				redirect_url += "/" + this.$root.subevent;
			}
			redirect_url += "/seatingframe/?iframe=1&locale=" + lang;
			if (this.$root.voucher_code) {
				redirect_url += "&voucher=" + encodeURIComponent(this.$root.voucher_code);
			}
			if (this.$root.cart_id) {
				redirect_url += "&take_cart_id=" + this.$root.cart_id;
			}
			if (this.$root.widget_data) {
				redirect_url += "&widget_data=" + encodeURIComponent(this.$root.widget_data_json);
			}
			if (this.$root.useIframe) {
				var iframe = this.$root.overlay.$children[0].$refs["frame-container"].children[0];
				this.$root.overlay.frame_loading = true;
				iframe.src = redirect_url;
			} else {
				window.open(redirect_url);
			}
		},
		choose_event: function (event) {
			this.$root.target_url = event.event_url;
			this.$root.error = null;
			this.$root.connection_error = false;
			this.$root.subevent = event.subevent;
			this.$root.loading++;
			this.$root.reload();
		},
	};
	var shared_root_computed = {
		cookieName: function () {
			return "pretix_widget_" + this.target_url.replace(/[^a-zA-Z0-9]+/g, "_");
		},
		formTarget: function () {
			var is_firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
			var is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
			if (is_android && is_firefox) {
				return "_top";
			} else {
				return "_blank";
			}
		},
		voucherFormTarget: function () {
			var form_target = this.target_url + "w/" + widget_id + "/redeem?iframe=1&locale=" + lang;
			var cookie = getCookie(this.cookieName);
			if (cookie) {
				form_target += "&take_cart_id=" + cookie;
			}
			if (this.subevent) {
				form_target += "&subevent=" + this.subevent;
			}
			return form_target;
		},
		formMethod: function () {
			if (!this.useIframe && this.is_button && this.items.length === 0) {
				return "get";
			}
			return "post";
		},
		formAction: function () {
			if (!this.useIframe && this.is_button && this.items.length === 0) {
				var target = this.target_url;
				if (this.voucher_code) {
					target = this.target_url + "redeem";
				}
				return target;
			}
			var checkout_url = "/" + this.target_url.replace(/^[^\/]+:\/\/([^\/]+)\//, "") + "w/" + widget_id + "/";
			if (!this.$root.cart_exists) {
				checkout_url += "checkout/start";
			}
			var form_target = this.target_url + "w/" + widget_id + "/cart/add?iframe=1&next=" + encodeURIComponent(checkout_url);
			var cookie = getCookie(this.cookieName);
			if (cookie) {
				form_target += "&take_cart_id=" + cookie;
			}
			return form_target;
		},
		newTabTarget: function () {
			var target = this.target_url;
			if (this.subevent) {
				target = this.target_url + this.subevent + "/";
			}
			return target;
		},
		useIframe: function () {
			return !this.disable_iframe && (this.skip_ssl || site_is_secure());
		},
		showPrices: function () {
			var has_priced = false;
			var cnt_items = 0;
			for (var i = 0; i < this.categories.length; i++) {
				for (var j = 0; j < this.categories[i].items.length; j++) {
					var item = this.categories[i].items[j];
					if (item.has_variations) {
						cnt_items += item.variations.length;
						has_priced = true;
					} else {
						cnt_items++;
						has_priced = has_priced || item.price.gross != "0.00" || item.free_price;
					}
				}
			}
			return has_priced || cnt_items > 1;
		},
		widget_data_json: function () {
			return JSON.stringify(this.widget_data);
		},
	};
	var create_overlay = function (app) {
		var elem = document.createElement("pretix-overlay");
		document.body.appendChild(elem);
		var framechild = new Vue({
			el: elem,
			data: function () {
				return { parent: app, frame_loading: false, frame_shown: false, error_url_after: null, error_url_after_new_tab: true, error_message: null };
			},
			methods: {},
		});
		app.$root.overlay = framechild;
	};
	function get_ga_client_id(tracking_id) {
		if (typeof ga === "undefined") {
			return null;
		}
		try {
			var trackers = ga.getAll();
			var i, len;
			for (i = 0, len = trackers.length; i < len; i += 1) {
				if (trackers[i].get("trackingId") === tracking_id) {
					return trackers[i].get("clientId");
				}
			}
		} catch (e) {}
		return null;
	}
	var create_widget = function (element) {
		var target_url = element.attributes.event.value;
		if (!target_url.match(/\/$/)) {
			target_url += "/";
		}
		var voucher = element.attributes.voucher ? element.attributes.voucher.value : null;
		var subevent = element.attributes.subevent ? element.attributes.subevent.value : null;
		var style = element.attributes["list-type"] ? element.attributes["list-type"].value : element.attributes.style ? element.attributes.style.value : null;
		var skip_ssl = element.attributes["skip-ssl-check"] ? true : false;
		var disable_iframe = element.attributes["disable-iframe"] ? true : false;
		var disable_vouchers = element.attributes["disable-vouchers"] ? true : false;
		var widget_data = JSON.parse(JSON.stringify(window.PretixWidget.widget_data));
		var filter = element.attributes.filter ? element.attributes.filter.value : null;
		var items = element.attributes.items ? element.attributes.items.value : null;
		var variations = element.attributes.variations ? element.attributes.variations.value : null;
		var categories = element.attributes.categories ? element.attributes.categories.value : null;
		for (var i = 0; i < element.attributes.length; i++) {
			var attrib = element.attributes[i];
			if (attrib.name.match(/^data-.*$/)) {
				widget_data[attrib.name.replace(/^data-/, "")] = attrib.value;
			}
		}
		if (element.tagName !== "pretix-widget") {
			element.innerHTML = "<pretix-widget></pretix-widget>";
		}
		var app = new Vue({
			el: element,
			data: function () {
				return {
					target_url: target_url,
					parent_stack: [],
					subevent: subevent,
					is_button: false,
					categories: null,
					currency: null,
					name: null,
					date_range: null,
					location: null,
					offset: 0,
					has_more_events: false,
					append_events: false,
					frontpage_text: null,
					filter: filter,
					item_filter: items,
					category_filter: categories,
					variation_filter: variations,
					voucher_code: voucher,
					display_net_prices: false,
					use_native_spinners: false,
					voucher_explanation_text: null,
					show_variations_expanded: !!variations,
					skip_ssl: skip_ssl,
					disable_iframe: disable_iframe,
					style: style,
					connection_error: false,
					error: null,
					weeks: null,
					days: null,
					date: null,
					week: null,
					frame_dismissed: false,
					events: null,
					view: null,
					display_add_to_cart: false,
					widget_data: widget_data,
					loading: 1,
					widget_id: "pretix-widget-" + widget_id,
					vouchers_exist: false,
					disable_vouchers: disable_vouchers,
					cart_exists: false,
					itemcount: 0,
					overlay: null,
					poweredby: "",
					has_seating_plan: false,
					has_seating_plan_waitinglist: false,
				};
			},
			created: function () {
				this.reload();
			},
			computed: shared_root_computed,
			methods: shared_root_methods,
		});
		create_overlay(app);
		return app;
	};
	var create_button = function (element) {
		var target_url = element.attributes.event.value;
		if (!target_url.match(/\/$/)) {
			target_url += "/";
		}
		var voucher = element.attributes.voucher ? element.attributes.voucher.value : null;
		var subevent = element.attributes.subevent ? element.attributes.subevent.value : null;
		var raw_items = element.attributes.items ? element.attributes.items.value : "";
		var skip_ssl = element.attributes["skip-ssl-check"] ? true : false;
		var disable_iframe = element.attributes["disable-iframe"] ? true : false;
		var button_text = element.innerHTML;
		var widget_data = JSON.parse(JSON.stringify(window.PretixWidget.widget_data));
		for (var i = 0; i < element.attributes.length; i++) {
			var attrib = element.attributes[i];
			if (attrib.name.match(/^data-.*$/)) {
				widget_data[attrib.name.replace(/^data-/, "")] = attrib.value;
			}
		}
		if (element.tagName !== "pretix-button") {
			element.innerHTML = "<pretix-button>" + element.innerHTML + "</pretix-button>";
		}
		var itemsplit = raw_items.split(",");
		var items = [];
		for (var i = 0; i < itemsplit.length; i++) {
			if (itemsplit[i].indexOf("=") > 0) {
				var splitthis = itemsplit[i].split("=");
				items.push({ item: splitthis[0], count: splitthis[1] });
			}
		}
		var app = new Vue({
			el: element,
			data: function () {
				return {
					target_url: target_url,
					subevent: subevent,
					is_button: true,
					skip_ssl: skip_ssl,
					disable_iframe: disable_iframe,
					voucher_code: voucher,
					items: items,
					error: null,
					filter: null,
					frame_dismissed: false,
					widget_data: widget_data,
					widget_id: "pretix-widget-" + widget_id,
					button_text: button_text,
				};
			},
			created: function () {},
			computed: shared_root_computed,
			methods: shared_root_methods,
		});
		create_overlay(app);
		return app;
	};
	widgetlist = [];
	buttonlist = [];
	window.PretixWidget._loaded = [];
	window.PretixWidget._closed = [];
	window.PretixWidget.addLoadListener = function (f) {
		window.PretixWidget._loaded.push(f);
	};
	window.PretixWidget.addCloseListener = function (f) {
		window.PretixWidget._closed.push(f);
	};
	window.PretixWidget.buildWidgets = function () {
		document.createElement("pretix-widget");
		document.createElement("pretix-button");
		docReady(function () {
			var widgets = document.querySelectorAll("pretix-widget, div.pretix-widget-compat");
			var wlength = widgets.length;
			for (var i = 0; i < wlength; i++) {
				var widget = widgets[i];
				widgetlist.push(create_widget(widget));
			}
			var buttons = document.querySelectorAll("pretix-button, div.pretix-button-compat");
			var blength = buttons.length;
			for (var i = 0; i < blength; i++) {
				var button = buttons[i];
				buttonlist.push(create_button(button));
			}
		});
	};
	window.PretixWidget.open = function (target_url, voucher, subevent, items, widget_data, skip_ssl_check, disable_iframe) {
		if (!target_url.match(/\/$/)) {
			target_url += "/";
		}
		var all_widget_data = JSON.parse(JSON.stringify(window.PretixWidget.widget_data));
		if (widget_data) {
			Object.keys(widget_data).forEach(function (key) {
				all_widget_data[key] = widget_data[key];
			});
		}
		var root = document.createElement("div");
		document.body.appendChild(root);
		root.classList.add("pretix-widget-hidden");
		root.innerHTML = "<pretix-button ref='btn'></pretix-button>";
		var app = new Vue({
			el: root,
			data: function () {
				return {
					target_url: target_url,
					subevent: subevent || null,
					is_button: true,
					skip_ssl: skip_ssl_check || false,
					disable_iframe: disable_iframe || false,
					voucher_code: voucher || null,
					items: items || [],
					error: null,
					filter: null,
					frame_dismissed: false,
					widget_data: all_widget_data,
					widget_id: "pretix-widget-" + widget_id,
					button_text: "",
				};
			},
			created: function () {},
			computed: shared_root_computed,
			methods: shared_root_methods,
		});
		create_overlay(app);
		app.$nextTick(function () {
			if (this.$root.useIframe) {
				this.$refs.btn.buy();
			} else {
				this.$refs.btn.$refs.form.submit();
			}
		});
	};
	if (typeof window.pretixWidgetCallback !== "undefined") {
		window.pretixWidgetCallback();
	}
	if (window.PretixWidget.build_widgets) {
		window.PretixWidget.buildWidgets();
	}
	siteglobals.pretixwidget_debug = { Vue: Vue, widgets: widgetlist, buttons: buttonlist };
})({});
