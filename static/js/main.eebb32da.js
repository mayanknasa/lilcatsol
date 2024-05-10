/*! For license information please see main.eebb32da.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      4463: function (e, t, n) {
        var r = n(2791),
          a = n(5296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function A(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, A);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, A);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, A);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var O = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var j,
          M = Object.assign;
        function D(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var G = !1;
        function J(e, t) {
          if (!e || G) return "";
          G = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (G = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = J(e.type, !1));
            case 11:
              return (e = J(e.type.render, !1));
            case 1:
              return (e = J(e.type, !0));
            default:
              return "";
          }
        }
        function Y(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case L:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : Y(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return Y(e(t));
                } catch (n) {}
            }
          return null;
        }
        function F(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return Y(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function U(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function H(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function K(e, t) {
          Z(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Ae(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function xe(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Pe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Le() {}
        var Ne = !1;
        function Te(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Ne = !1), (null !== Se || null !== Ee) && (Le(), Pe());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (s)
          try {
            var Oe = {};
            Object.defineProperty(Oe, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe);
          } catch (se) {
            ze = !1;
          }
        function Re(e, t, n, r, a, l, o, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var je = !1,
          Me = null,
          De = !1,
          Ge = null,
          Je = {
            onError: function (e) {
              (je = !0), (Me = e);
            },
          };
        function Be(e, t, n, r, a, l, o, i, u) {
          (je = !1), (Me = null), Re.apply(Je, arguments);
        }
        function Ye(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Fe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Ye(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ye(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ve(a), e;
                    if (o === r) return Ve(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ue(e)
            : null;
        }
        function Ue(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ue(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          He = a.unstable_requestPaint,
          Ze = a.unstable_now,
          Ke = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var ct = 64,
          st = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (l &= o) && (r = ft(l));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function At(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          Et,
          xt,
          Ct = !1,
          Pt = [],
          _t = null,
          Lt = null,
          Nt = null,
          Tt = new Map(),
          It = new Map(),
          zt = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = Aa(e.target);
          if (null !== t) {
            var n = Ye(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Fe(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function Gt(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Jt() {
          (Ct = !1),
            null !== _t && Dt(_t) && (_t = null),
            null !== Lt && Dt(Lt) && (Lt = null),
            null !== Nt && Dt(Nt) && (Nt = null),
            Tt.forEach(Gt),
            It.forEach(Gt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Jt)));
        }
        function Yt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Bt(_t, e),
              null !== Lt && Bt(Lt, e),
              null !== Nt && Bt(Nt, e),
              Tt.forEach(t),
              It.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && zt.shift();
        }
        var Ft = b.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = yt,
            l = Ft.transition;
          Ft.transition = null;
          try {
            (yt = 1), Qt(e, t, n, r);
          } finally {
            (yt = a), (Ft.transition = l);
          }
        }
        function Ut(e, t, n, r) {
          var a = yt,
            l = Ft.transition;
          Ft.transition = null;
          try {
            (yt = 4), Qt(e, t, n, r);
          } finally {
            (yt = a), (Ft.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          if (Vt) {
            var a = qt(e, t, n, r);
            if (null === a) Vr(e, t, r, Xt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = jt(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Lt = jt(Lt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = jt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Tt.set(l, jt(Tt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      It.set(l, jt(It.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var l = ya(a);
                if (
                  (null !== l && wt(l),
                  null === (l = qt(e, t, n, r)) && Vr(e, t, r, Xt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function qt(e, t, n, r) {
          if (((Xt = null), null !== (e = Aa((e = we(r))))))
            if (null === (t = Ye(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Fe(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Ht(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ke()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Kt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Kt,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(cn),
          fn = M({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = M({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          mn = an(pn),
          hn = an(M({}, pn, { dataTransfer: 0 })),
          gn = an(M({}, fn, { relatedTarget: 0 })),
          vn = an(
            M({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          An = M({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(An),
          bn = an(M({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function xn() {
          return En;
        }
        var Cn = M({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Cn),
          _n = an(
            M({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ln = an(
            M({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Nn = an(
            M({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(Tn),
          zn = [9, 13, 27, 32],
          On = s && "CompositionEvent" in window,
          Rn = null;
        s && "documentMode" in document && (Rn = document.documentMode);
        var jn = s && "TextEvent" in window && !Rn,
          Mn = s && (!On || (Rn && 8 < Rn && 11 >= Rn)),
          Dn = String.fromCharCode(32),
          Gn = !1;
        function Jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Yn = !1;
        var Fn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Fn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Ur(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Un = null,
          Qn = null;
        function Xn(e) {
          Dr(e, 0);
        }
        function qn(e) {
          if (Q(ba(e))) return e;
        }
        function Hn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (s) {
          var Kn;
          if (s) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Kn = $n;
          } else Kn = !1;
          Zn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Un && (Un.detachEvent("onpropertychange", nr), (Qn = Un = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Qn)) {
            var t = [];
            Wn(t, Qn, e, we(e)), Te(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Un = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Qn);
        }
        function lr(e, t) {
          if ("click" === e) return qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = sr(n, l));
                var o = sr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = s && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          Ar = null,
          yr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == gr ||
            gr !== X(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (Ar && ur(Ar, r)) ||
              ((Ar = r),
              0 < (r = Ur(vr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function xr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        s &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = xr("animationend"),
          Pr = xr("animationiteration"),
          _r = xr("animationstart"),
          Lr = xr("transitionend"),
          Nr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var zr = 0; zr < Tr.length; zr++) {
          var Or = Tr[zr];
          Ir(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Ir(Cr, "onAnimationEnd"),
          Ir(Pr, "onAnimationIteration"),
          Ir(_r, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Lr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, c) {
              if ((Be.apply(this, arguments), je)) {
                if (!je) throw Error(l(198));
                var s = Me;
                (je = !1), (Me = null), De || ((De = !0), (Ge = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Mr(a, i, c), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Mr(a, i, c), (l = u);
                }
            }
          }
          if (De) throw ((e = Ge), (De = !1), (Ge = null), e);
        }
        function Gr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Fr(t, e, 2, !1), n.add(r));
        }
        function Jr(e, t, n) {
          var r = 0;
          t && (r |= 4), Fr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Yr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || Jr(t, !1, e), Jr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Jr("selectionchange", !1, t));
          }
        }
        function Fr(e, t, n, r) {
          switch (Ht(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Ut;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = Aa(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = l,
              a = we(n),
              o = [];
            e: {
              var i = Nr.get(e);
              if (void 0 !== i) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Cr:
                  case Pr:
                  case _r:
                    u = vn;
                    break;
                  case Lr:
                    u = Nn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = _n;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Ie(m, d)) &&
                        s.push(Wr(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, a)),
                  o.push({ event: i, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Aa(c) && !c[ma])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? Aa(c)
                          : null) &&
                        (c !== (f = Ye(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = mn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = _n),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? i : ba(u)),
                  (p = null == c ? i : ba(c)),
                  ((i = new s(h, m + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  Aa(a) === r &&
                    (((s = new s(d, m + "enter", c, n, a)).target = p),
                    (s.relatedTarget = f),
                    (h = s)),
                  (f = h),
                  u && c)
                )
                  e: {
                    for (d = c, m = 0, p = s = u; p; p = Qr(p)) m++;
                    for (p = 0, h = d; h; h = Qr(h)) p++;
                    for (; 0 < m - p; ) (s = Qr(s)), m--;
                    for (; 0 < p - m; ) (d = Qr(d)), p--;
                    for (; m--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Qr(s)), (d = Qr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Xr(o, i, u, s, !1),
                  null !== c && null !== f && Xr(o, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? ba(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Hn;
              else if (Vn(i))
                if (Zn) g = or;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(o, g, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (Ar = null));
                  break;
                case "focusout":
                  Ar = vr = gr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), br(o, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  br(o, n, a);
              }
              var A;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Yn
                  ? Jn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Mn &&
                  "ko" !== n.locale &&
                  (Yn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Yn && (A = en())
                    : ((Kt = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Yn = !0))),
                0 < (v = Ur(r, y)).length &&
                  ((y = new bn(y, e, null, n, a)),
                  o.push({ event: y, listeners: v }),
                  A ? (y.data = A) : null !== (A = Bn(n)) && (y.data = A))),
                (A = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Gn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Gn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Yn)
                        return "compositionend" === e || (!On && Jn(e, t))
                          ? ((e = en()), ($t = Kt = Zt = null), (Yn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ur(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = A));
            }
            Dr(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ur(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Ie(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Ie(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (u = Ie(n, l)) && o.unshift(Wr(n, u, i))
                : a || (null != (u = Ie(n, l)) && o.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var qr = /\r\n?/g,
          Hr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Hr, "");
        }
        function Kr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Yt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Yt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ma = "__reactContainer$" + fa,
          ha = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function Aa(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[da] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function xa(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ca(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Pa = {},
          _a = Ea(Pa),
          La = Ea(!1),
          Na = Pa;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ia(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          xa(La), xa(_a);
        }
        function Oa(e, t, n) {
          if (_a.current !== Pa) throw Error(l(168));
          Ca(_a, t), Ca(La, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, F(e) || "Unknown", a));
          return M({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (Na = _a.current),
            Ca(_a, e),
            Ca(La, La.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ra(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(La),
              xa(_a),
              Ca(_a, e))
            : xa(La),
            Ca(La, n);
        }
        var Da = null,
          Ga = !1,
          Ja = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ya() {
          if (!Ja && null !== Da) {
            Ja = !0;
            var e = 0,
              t = yt;
            try {
              var n = Da;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ga = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Qe($e, Ya), a);
            } finally {
              (yt = t), (Ja = !1);
            }
          }
          return null;
        }
        var Fa = [],
          Va = 0,
          Wa = null,
          Ua = 0,
          Qa = [],
          Xa = 0,
          qa = null,
          Ha = 1,
          Za = "";
        function Ka(e, t) {
          (Fa[Va++] = Ua), (Fa[Va++] = Wa), (Wa = e), (Ua = t);
        }
        function $a(e, t, n) {
          (Qa[Xa++] = Ha), (Qa[Xa++] = Za), (Qa[Xa++] = qa), (qa = e);
          var r = Ha;
          e = Za;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ha = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Za = l + e);
          } else (Ha = (1 << l) | (n << a) | r), (Za = e);
        }
        function el(e) {
          null !== e.return && (Ka(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Fa[--Va]), (Fa[Va] = null), (Ua = Fa[--Va]), (Fa[Va] = null);
          for (; e === qa; )
            (qa = Qa[--Xa]),
              (Qa[Xa] = null),
              (Za = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ha = Qa[--Xa]),
              (Qa[Xa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Ic(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Ha, overflow: Za } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ic(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function cl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = ca(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function sl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return sl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = ca(t.nextSibling));
          }
          if ((sl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = ca(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = b.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = Ea(null),
          Al = null,
          yl = null,
          bl = null;
        function wl() {
          bl = yl = Al = null;
        }
        function kl(e) {
          var t = vl.current;
          xa(vl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function El(e, t) {
          (Al = e),
            (bl = yl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bi = !0), (e.firstContext = null));
        }
        function xl(e) {
          var t = e._currentValue;
          if (bl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === yl)
            ) {
              if (null === Al) throw Error(l(308));
              (yl = e), (Al.dependencies = { lanes: 0, firstContext: e });
            } else yl = yl.next = e;
          return t;
        }
        var Cl = null;
        function Pl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function _l(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ll(e, r)
          );
        }
        function Ll(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Nl = !1;
        function Tl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Il(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ol(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Lu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ll(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ll(e, n)
          );
        }
        function Rl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), At(e, n);
          }
        }
        function jl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ml(e, t, n, r) {
          var a = e.updateQueue;
          Nl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              c = u.next;
            (u.next = null), null === o ? (l = c) : (o.next = c), (o = u);
            var s = e.alternate;
            null !== s &&
              (i = (s = s.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (s.firstBaseUpdate = c) : (i.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, s = c = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = M({}, f, d);
                      break e;
                    case 2:
                      Nl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Mu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Dl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Gl = new r.Component().refs;
        function Jl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ye(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              l = zl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (rc(t, e, a, r), Rl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              l = zl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ol(e, l, a)) && (rc(t, e, a, r), Rl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = zl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ol(e, a, r)) && (rc(t, e, r, n), Rl(t, e, r));
          },
        };
        function Yl(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function Fl(e, t, n) {
          var r = !1,
            a = Pa,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = xl(l))
              : ((a = Ia(t) ? Na : _a.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Pa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Vl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Gl), Tl(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = xl(l))
            : ((l = Ia(t) ? Na : _a.current), (a.context = Ta(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Jl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Ml(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ul(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Gl && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xl(e) {
          return (0, e._init)(e._payload);
        }
        function ql(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Oc(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var l = n.type;
            return l === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === I &&
                    Xl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ul(e, t, n)), (r.return = e), r)
              : (((r = Rc(n.type, n.key, n.props, null, e.mode, r)).ref = Ul(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Gc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = jc(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Dc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Rc(t.type, t.key, t.props, null, e.mode, n)).ref = Ul(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Gc(t, e.mode, n)).return = e), t;
                case I:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = jc(t, e.mode, n, null)).return = e), t;
              Ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case I:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== a ? null : f(e, t, n, r, null);
              Ql(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || R(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ql(t, r);
            }
            return null;
          }
          function h(a, l, i, u) {
            for (
              var c = null, s = null, f = l, h = (l = 0), g = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(a, f, i[h], u);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(a, f),
                (l = o(v, l, h)),
                null === s ? (c = v) : (s.sibling = v),
                (s = v),
                (f = g);
            }
            if (h === i.length) return n(a, f), al && Ka(a, h), c;
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(a, i[h], u)) &&
                  ((l = o(f, l, h)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return al && Ka(a, h), c;
            }
            for (f = r(a, f); h < i.length; h++)
              null !== (g = m(f, a, h, i[h], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? h : g.key),
                (l = o(g, l, h)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ka(a, h),
              c
            );
          }
          function g(a, i, u, c) {
            var s = R(u);
            if ("function" !== typeof s) throw Error(l(150));
            if (null == (u = s.call(u))) throw Error(l(151));
            for (
              var f = (s = null), h = i, g = (i = 0), v = null, A = u.next();
              null !== h && !A.done;
              g++, A = u.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var y = p(a, h, A.value, c);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (i = o(y, i, g)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y),
                (h = v);
            }
            if (A.done) return n(a, h), al && Ka(a, g), s;
            if (null === h) {
              for (; !A.done; g++, A = u.next())
                null !== (A = d(a, A.value, c)) &&
                  ((i = o(A, i, g)),
                  null === f ? (s = A) : (f.sibling = A),
                  (f = A));
              return al && Ka(a, g), s;
            }
            for (h = r(a, h); !A.done; g++, A = u.next())
              null !== (A = m(h, a, g, A.value, c)) &&
                (e &&
                  null !== A.alternate &&
                  h.delete(null === A.key ? g : A.key),
                (i = o(A, i, g)),
                null === f ? (s = A) : (f.sibling = A),
                (f = A));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ka(a, g),
              s
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var c = o.key, s = l; null !== s; ) {
                      if (s.key === c) {
                        if ((c = o.type) === S) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((l = a(s, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === I &&
                            Xl(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((l = a(s, o.props)).ref = Ul(r, s, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    o.type === S
                      ? (((l = jc(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Rc(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ul(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (s = o.key; null !== l; ) {
                      if (l.key === s) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Gc(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case I:
                  return e(r, l, (s = o._init)(o._payload), u);
              }
              if (te(o)) return h(r, l, o, u);
              if (R(o)) return g(r, l, o, u);
              Ql(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Dc(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Hl = ql(!0),
          Zl = ql(!1),
          Kl = {},
          $l = Ea(Kl),
          eo = Ea(Kl),
          to = Ea(Kl);
        function no(e) {
          if (e === Kl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca($l, Kl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa($l), Ca($l, t);
        }
        function ao() {
          xa($l), xa(eo), xa(to);
        }
        function lo(e) {
          no(to.current);
          var t = no($l.current),
            n = ue(t, e.type);
          t !== n && (Ca(eo, e), Ca($l, n));
        }
        function oo(e) {
          eo.current === e && (xa($l), xa(eo));
        }
        var io = Ea(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var co = [];
        function so() {
          for (var e = 0; e < co.length; e++)
            co[e]._workInProgressVersionPrimary = null;
          co.length = 0;
        }
        var fo = b.ReactCurrentDispatcher,
          po = b.ReactCurrentBatchConfig,
          mo = 0,
          ho = null,
          go = null,
          vo = null,
          Ao = !1,
          yo = !1,
          bo = 0,
          wo = 0;
        function ko() {
          throw Error(l(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((mo = o),
            (ho = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            yo)
          ) {
            o = 0;
            do {
              if (((yo = !1), (bo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (vo = go = null),
                (t.updateQueue = null),
                (fo.current = ci),
                (e = n(r, a));
            } while (yo);
          }
          if (
            ((fo.current = oi),
            (t = null !== go && null !== go.next),
            (mo = 0),
            (vo = go = ho = null),
            (Ao = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function xo() {
          var e = 0 !== bo;
          return (bo = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vo ? (ho.memoizedState = vo = e) : (vo = vo.next = e), vo
          );
        }
        function Po() {
          if (null === go) {
            var e = ho.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === vo ? ho.memoizedState : vo.next;
          if (null !== t) (vo = t), (go = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === vo ? (ho.memoizedState = vo = e) : (vo = vo.next = e);
          }
          return vo;
        }
        function _o(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Lo(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              c = null,
              s = o;
            do {
              var f = s.lane;
              if ((mo & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (i = r)) : (c = c.next = d),
                  (ho.lanes |= f),
                  (Mu |= f);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === c ? (i = r) : (c.next = u),
              ir(r, t.memoizedState) || (bi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (ho.lanes |= o), (Mu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function No(e) {
          var t = Po(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (bi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function To() {}
        function Io(e, t) {
          var n = ho,
            r = Po(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            Vo(Ro.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== vo && 1 & vo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Go(9, Oo.bind(null, n, r, a, t), void 0, null),
              null === Nu)
            )
              throw Error(l(349));
            0 !== (30 & mo) || zo(n, t, a);
          }
          return a;
        }
        function zo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ho.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ho.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Oo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), jo(t) && Mo(e);
        }
        function Ro(e, t, n) {
          return n(function () {
            jo(t) && Mo(e);
          });
        }
        function jo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Mo(e) {
          var t = Ll(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Do(e) {
          var t = Co();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _o,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ho, e)),
            [t.memoizedState, e]
          );
        }
        function Go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ho.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ho.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Jo() {
          return Po().memoizedState;
        }
        function Bo(e, t, n, r) {
          var a = Co();
          (ho.flags |= e),
            (a.memoizedState = Go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Yo(e, t, n, r) {
          var a = Po();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((l = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Go(t, n, l, r));
          }
          (ho.flags |= e), (a.memoizedState = Go(1 | t, n, l, r));
        }
        function Fo(e, t) {
          return Bo(8390656, 8, e, t);
        }
        function Vo(e, t) {
          return Yo(2048, 8, e, t);
        }
        function Wo(e, t) {
          return Yo(4, 2, e, t);
        }
        function Uo(e, t) {
          return Yo(4, 4, e, t);
        }
        function Qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Yo(4, 4, Qo.bind(null, t, e), n)
          );
        }
        function qo() {}
        function Ho(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Zo(e, t) {
          var n = Po();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ko(e, t, n) {
          return 0 === (21 & mo)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (ho.lanes |= n), (Mu |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (po.transition = r);
          }
        }
        function ei() {
          return Po().memoizedState;
        }
        function ti(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = _l(e, t, n, r))) {
            rc(n, e, r, tc()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Pl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = _l(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ho || (null !== t && t === ho);
        }
        function ai(e, t) {
          yo = Ao = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), At(e, n);
          }
        }
        var oi = {
            readContext: xl,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: xl,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xl,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bo(4194308, 4, Qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ho, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Do,
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ho,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Nu)) throw Error(l(349));
                0 !== (30 & mo) || zo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Fo(Ro.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Go(9, Oo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Nu.identifierPrefix;
              if (al) {
                var n = Za;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ha & ~(1 << (32 - ot(Ha) - 1))).toString(32) + n)),
                  0 < (n = bo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: xl,
            useCallback: Ho,
            useContext: xl,
            useEffect: Vo,
            useImperativeHandle: Xo,
            useInsertionEffect: Wo,
            useLayoutEffect: Uo,
            useMemo: Zo,
            useReducer: Lo,
            useRef: Jo,
            useState: function () {
              return Lo(_o);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return Ko(Po(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Lo(_o)[0], Po().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Io,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ci = {
            readContext: xl,
            useCallback: Ho,
            useContext: xl,
            useEffect: Vo,
            useImperativeHandle: Xo,
            useInsertionEffect: Wo,
            useLayoutEffect: Uo,
            useMemo: Zo,
            useReducer: No,
            useRef: Jo,
            useState: function () {
              return No(_o);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              var t = Po();
              return null === go
                ? (t.memoizedState = e)
                : Ko(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [No(_o)[0], Po().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Io,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function mi(e, t, n) {
          ((n = zl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Uu = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = zl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function Ai(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zl(-1, 1)).tag = 2), Ol(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = b.ReactCurrentOwner,
          bi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? Zl(t, null, n, r) : Hl(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            El(t, a),
            (r = Eo(e, t, n, r, l, a)),
            (n = xo()),
            null === e || bi
              ? (al && n && el(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              zc(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ei(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Oc(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((bi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function xi(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Ou, zu),
                (zu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Ou, zu),
                  (zu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Ou, zu),
                (zu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ou, zu),
              (zu |= r);
          return wi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var l = Ia(n) ? Na : _a.current;
          return (
            (l = Ta(t, l)),
            El(t, a),
            (n = Eo(e, t, n, r, l, a)),
            (r = xo()),
            null === e || bi
              ? (al && r && el(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function _i(e, t, n, r, a) {
          if (Ia(n)) {
            var l = !0;
            ja(t);
          } else l = !1;
          if ((El(t, a), null === t.stateNode))
            Vi(e, t), Fl(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = xl(c))
              : (c = Ta(t, (c = Ia(n) ? Na : _a.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== c) && Vl(t, o, r, c)),
              (Nl = !1);
            var d = t.memoizedState;
            (o.state = d),
              Ml(t, r, o, a),
              (u = t.memoizedState),
              i !== r || d !== u || La.current || Nl
                ? ("function" === typeof s &&
                    (Jl(t, n, s, r), (u = t.memoizedState)),
                  (i = Nl || Yl(t, n, i, r, d, u, c))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = c),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Il(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : gl(t.type, i)),
              (o.props = c),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = xl(u))
                : (u = Ta(t, (u = Ia(n) ? Na : _a.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Vl(t, o, r, u)),
              (Nl = !1),
              (d = t.memoizedState),
              (o.state = d),
              Ml(t, r, o, a);
            var m = t.memoizedState;
            i !== f || d !== m || La.current || Nl
              ? ("function" === typeof p &&
                  (Jl(t, n, p, r), (m = t.memoizedState)),
                (c = Nl || Yl(t, n, c, r, d, m, u) || !1)
                  ? (s ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, m, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (o.props = r),
                (o.state = m),
                (o.context = u),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Li(e, t, n, r, l, a);
        }
        function Li(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ma(t, n, !1), Wi(e, t, l);
          (r = t.stateNode), (yi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Hl(t, e.child, null, l)),
                (t.child = Hl(t, null, i, l)))
              : wi(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Ni(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ti(e, t, n, r, a) {
          return pl(), ml(a), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Ii,
          zi,
          Oi,
          Ri,
          ji = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              cl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Mc(u, a, 0, null)),
                      (e = jc(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Mi(n)),
                      (t.memoizedState = ji),
                      e)
                    : Gi(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ji(e, t, i, (r = fi(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Mc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = jc(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Hl(t, e.child, null, i),
                    (t.child.memoizedState = Mi(i)),
                    (t.memoizedState = ji),
                    o);
              if (0 === (1 & t.mode)) return Ji(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ji(e, t, i, (r = fi((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), bi || u)) {
                if (null !== (r = Nu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ll(e, a), rc(r, e, a, -1));
                }
                return gc(), Ji(e, t, i, (r = fi(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _c.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = ca(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Qa[Xa++] = Ha),
                    (Qa[Xa++] = Za),
                    (Qa[Xa++] = qa),
                    (Ha = e.id),
                    (Za = e.overflow),
                    (qa = t)),
                  (t = Gi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Oc(o, c)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Oc(r, i))
                : ((i = jc(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Mi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = ji),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Oc(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Gi(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ji(e, t, n, r) {
          return (
            null !== r && ml(r),
            Hl(t, e.child, null, n),
            ((e = Gi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function Yi(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Fi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Yi(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Yi(t, !0, n, null, l);
                break;
              case "together":
                Yi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Oc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Oc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ui(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Ia(t.type) && za(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                xa(La),
                xa(_a),
                so(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ic(ll), (ll = null)))),
                zi(e, t),
                Qi(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Oi(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Qi(t), null;
                }
                if (((e = no($l.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Gr("cancel", r), Gr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Gr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Gr(Rr[a], r);
                      break;
                    case "source":
                      Gr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Gr("error", r), Gr("load", r);
                      break;
                    case "details":
                      Gr("toggle", r);
                      break;
                    case "input":
                      H(r, o), Gr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Gr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Gr("invalid", r);
                  }
                  for (var u in (Ae(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var c = o[u];
                      "children" === u
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Gr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      U(r), $(r, o, !0);
                      break;
                    case "textarea":
                      U(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ii(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = ye(n, r)), n)) {
                      case "dialog":
                        Gr("cancel", e), Gr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Gr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Gr(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Gr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Gr("error", e), Gr("load", e), (a = r);
                        break;
                      case "details":
                        Gr("toggle", e), (a = r);
                        break;
                      case "input":
                        H(e, r), (a = q(e, r)), Gr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Gr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Gr("invalid", e);
                    }
                    for (o in (Ae(n, a), (c = a)))
                      if (c.hasOwnProperty(o)) {
                        var s = c[o];
                        "style" === o
                          ? ge(e, s)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === o
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != s && "onScroll" === o && Gr("scroll", e)
                              : null != s && y(e, o, s, u));
                      }
                    switch (n) {
                      case "input":
                        U(e), $(e, r, !1);
                        break;
                      case "textarea":
                        U(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no($l.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (xa(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (o = !1);
                } else null !== ll && (ic(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Ru && (Ru = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ao(),
                zi(e, t),
                null === e && Yr(t.stateNode.containerInfo),
                Qi(t),
                null
              );
            case 10:
              return kl(t.type._context), Qi(t), null;
            case 19:
              if ((xa(io), null === (o = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Ui(o, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            Ui(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ze() > Fu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ui(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ui(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Qi(t), null;
                  } else
                    2 * Ze() - o.renderingStartTime > Fu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ui(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zu) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function qi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ia(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                xa(La),
                xa(_a),
                so(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (xa(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(io), null;
            case 4:
              return ao(), null;
            case 10:
              return kl(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ii = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zi = function () {}),
          (Oi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no($l.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (o = []);
                  break;
                case "select":
                  (a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (s in (Ae(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var u = a[s];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (i.hasOwnProperty(s)
                        ? o || (o = [])
                        : (o = o || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (c && c.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in c)
                        c.hasOwnProperty(l) &&
                          u[l] !== c[l] &&
                          (n || (n = {}), (n[l] = c[l]));
                    } else n || (o || (o = []), o.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (o = o || []).push(s, c))
                      : "children" === s
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (o = o || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (i.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Gr("scroll", e),
                            o || u === c || (o = []))
                          : (o = o || []).push(s, c));
              }
              n && (o = o || []).push("style", n);
              var s = o;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Ri = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Hi = !1,
          Zi = !1,
          Ki = "function" === typeof WeakSet ? WeakSet : Set,
          $i = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xc(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            xc(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && tu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function lu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ou(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ou(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ha],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) mu(e, t, n), (n = n.sibling);
        }
        function mu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Zi || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Yt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      tu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Zi &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  xc(n, t, i);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zi = (r = Zi) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Zi = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ki()),
              t.forEach(function (t) {
                var r = Lc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(l(160));
                mu(o, i, a), (fu = null), (du = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (s) {
                xc(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), Au(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (g) {
                  xc(e, e.return, g);
                }
                try {
                  ru(5, e, e.return);
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              break;
            case 1:
              gu(t, e), Au(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                Au(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      Z(a, o),
                      ye(u, i);
                    var s = ye(u, o);
                    for (i = 0; i < c.length; i += 2) {
                      var f = c[i],
                        d = c[i + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : y(a, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        K(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        null != m
                          ? ne(a, !!o.multiple, m, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (g) {
                    xc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), Au(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (g) {
                  xc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                Au(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Yt(t.containerInfo);
                } catch (g) {
                  xc(e, e.return, g);
                }
              break;
            case 4:
            default:
              gu(t, e), Au(e);
              break;
            case 13:
              gu(t, e),
                Au(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Yu = Ze())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zi = (s = Zi) || f), gu(t, e), (Zi = s))
                  : gu(t, e),
                Au(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for ($i = e, f = e.child; null !== f; ) {
                    for (d = $i = f; null !== $i; ) {
                      switch (((m = (p = $i).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              xc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), ($i = m)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = he("display", i)));
                      } catch (g) {
                        xc(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (g) {
                        xc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), Au(e), 4 & r && hu(e);
            case 21:
          }
        }
        function Au(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  cu(e, uu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              xc(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          ($i = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $i; ) {
            var a = $i,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Hi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Zi;
                i = Hi;
                var c = Zi;
                if (((Hi = o), (Zi = u) && !c))
                  for ($i = a; null !== $i; )
                    (u = (o = $i).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = o), ($i = u))
                        : Su(a);
                for (; null !== l; ) ($i = l), bu(l, t, n), (l = l.sibling);
                ($i = a), (Hi = i), (Zi = c);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), ($i = l))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== $i; ) {
            var t = $i;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Dl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Dl(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Yt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Zi || (512 & t.flags && lu(t));
              } catch (p) {
                xc(t, t.return, p);
              }
            }
            if (t === e) {
              $i = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($i = n);
              break;
            }
            $i = t.return;
          }
        }
        function ku(e) {
          for (; null !== $i; ) {
            var t = $i;
            if (t === e) {
              $i = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($i = n);
              break;
            }
            $i = t.return;
          }
        }
        function Su(e) {
          for (; null !== $i; ) {
            var t = $i;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    xc(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xc(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    lu(t);
                  } catch (u) {
                    xc(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    lu(t);
                  } catch (u) {
                    xc(t, o, u);
                  }
              }
            } catch (u) {
              xc(t, t.return, u);
            }
            if (t === e) {
              $i = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), ($i = i);
              break;
            }
            $i = t.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          Cu = b.ReactCurrentDispatcher,
          Pu = b.ReactCurrentOwner,
          _u = b.ReactCurrentBatchConfig,
          Lu = 0,
          Nu = null,
          Tu = null,
          Iu = 0,
          zu = 0,
          Ou = Ea(0),
          Ru = 0,
          ju = null,
          Mu = 0,
          Du = 0,
          Gu = 0,
          Ju = null,
          Bu = null,
          Yu = 0,
          Fu = 1 / 0,
          Vu = null,
          Wu = !1,
          Uu = null,
          Qu = null,
          Xu = !1,
          qu = null,
          Hu = 0,
          Zu = 0,
          Ku = null,
          $u = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & Lu) ? Ze() : -1 !== $u ? $u : ($u = Ze());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Lu) && 0 !== Iu
            ? Iu & -Iu
            : null !== hl.transition
            ? (0 === ec && (ec = ht()), ec)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Ht(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Zu) throw ((Zu = 0), (Ku = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Lu) && e === Nu) ||
              (e === Nu && (0 === (2 & Lu) && (Du |= n), 4 === Ru && uc(e, Iu)),
              ac(e, r),
              1 === n &&
                0 === Lu &&
                0 === (1 & t.mode) &&
                ((Fu = Ze() + 500), Ga && Ya()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Nu ? Iu : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ga = !0), Ba(e);
                  })(cc.bind(null, e))
                : Ba(cc.bind(null, e)),
                oa(function () {
                  0 === (6 & Lu) && Ya();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nc(n, lc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function lc(e, t) {
          if ((($u = -1), (ec = 0), 0 !== (6 & Lu))) throw Error(l(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = dt(e, e === Nu ? Iu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var a = Lu;
            Lu |= 2;
            var o = hc();
            for (
              (Nu === e && Iu === t) ||
              ((Vu = null), (Fu = Ze() + 500), pc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (u) {
                mc(e, u);
              }
            wl(),
              (Cu.current = o),
              (Lu = a),
              null !== Tu ? (t = 0) : ((Nu = null), (Iu = 0), (t = Ru));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = ju), pc(e, 0), uc(e, r), ac(e, Ze()), n);
            if (6 === t) uc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vc(e, r)) &&
                    0 !== (o = mt(e)) &&
                    ((r = o), (t = oc(e, o))),
                  1 === t))
              )
                throw ((n = ju), pc(e, 0), uc(e, r), ac(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  kc(e, Bu, Vu);
                  break;
                case 3:
                  if (
                    (uc(e, r),
                    (130023424 & r) === r && 10 < (t = Yu + 500 - Ze()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(kc.bind(null, e, Bu, Vu), t);
                    break;
                  }
                  kc(e, Bu, Vu);
                  break;
                case 4:
                  if ((uc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(kc.bind(null, e, Bu, Vu), r);
                    break;
                  }
                  kc(e, Bu, Vu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ac(e, Ze()), e.callbackNode === n ? lc.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Ju;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Bu), (Bu = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function uc(e, t) {
          for (
            t &= ~Gu,
              t &= ~Du,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & Lu)) throw Error(l(327));
          Sc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ac(e, Ze()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = ju), pc(e, 0), uc(e, t), ac(e, Ze()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kc(e, Bu, Vu),
            ac(e, Ze()),
            null
          );
        }
        function sc(e, t) {
          var n = Lu;
          Lu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Lu = n) && ((Fu = Ze() + 500), Ga && Ya());
          }
        }
        function fc(e) {
          null !== qu && 0 === qu.tag && 0 === (6 & Lu) && Sc();
          var t = Lu;
          Lu |= 1;
          var n = _u.transition,
            r = yt;
          try {
            if (((_u.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (_u.transition = n), 0 === (6 & (Lu = t)) && Ya();
          }
        }
        function dc() {
          (zu = Ou.current), xa(Ou);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Tu))
            for (n = Tu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  ao(), xa(La), xa(_a), so();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  xa(io);
                  break;
                case 10:
                  kl(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Nu = e),
            (Tu = e = Oc(e.current, null)),
            (Iu = zu = t),
            (Ru = 0),
            (ju = null),
            (Gu = Du = Mu = 0),
            (Bu = Ju = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function mc(e, t) {
          for (;;) {
            var n = Tu;
            try {
              if ((wl(), (fo.current = oi), Ao)) {
                for (var r = ho.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                Ao = !1;
              }
              if (
                ((mo = 0),
                (vo = go = ho = null),
                (yo = !1),
                (bo = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Ru = 1), (ju = t), (Tu = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Iu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var s = c,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = vi(i);
                  if (null !== m) {
                    (m.flags &= -257),
                      Ai(m, i, u, 0, t),
                      1 & m.mode && gi(o, s, t),
                      (c = s);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gi(o, s, t), gc();
                    break e;
                  }
                  c = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var v = vi(i);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      Ai(v, i, u, 0, t),
                      ml(si(c, u));
                    break e;
                  }
                }
                (o = c = si(c, u)),
                  4 !== Ru && (Ru = 2),
                  null === Ju ? (Ju = [o]) : Ju.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        jl(o, mi(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var A = o.type,
                        y = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof A.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Qu || !Qu.has(y))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          jl(o, hi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wc(n);
            } catch (b) {
              (t = b), Tu === n && null !== n && (Tu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = Cu.current;
          return (Cu.current = oi), null === e ? oi : e;
        }
        function gc() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === Nu ||
              (0 === (268435455 & Mu) && 0 === (268435455 & Du)) ||
              uc(Nu, Iu);
        }
        function vc(e, t) {
          var n = Lu;
          Lu |= 2;
          var r = hc();
          for ((Nu === e && Iu === t) || ((Vu = null), pc(e, t)); ; )
            try {
              Ac();
              break;
            } catch (a) {
              mc(e, a);
            }
          if ((wl(), (Lu = n), (Cu.current = r), null !== Tu))
            throw Error(l(261));
          return (Nu = null), (Iu = 0), Ru;
        }
        function Ac() {
          for (; null !== Tu; ) bc(Tu);
        }
        function yc() {
          for (; null !== Tu && !qe(); ) bc(Tu);
        }
        function bc(e) {
          var t = Eu(e.alternate, e, zu);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Tu = t),
            (Pu.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xi(n, t, zu))) return void (Tu = n);
            } else {
              if (null !== (n = qi(n, t)))
                return (n.flags &= 32767), void (Tu = n);
              if (null === e) return (Ru = 6), void (Tu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tu = t);
            Tu = t = e;
          } while (null !== t);
          0 === Ru && (Ru = 5);
        }
        function kc(e, t, n) {
          var r = yt,
            a = _u.transition;
          try {
            (_u.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== qu);
                if (0 !== (6 & Lu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Nu && ((Tu = Nu = null), (Iu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xu ||
                    ((Xu = !0),
                    Nc(tt, function () {
                      return Sc(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = _u.transition), (_u.transition = null);
                  var i = yt;
                  yt = 1;
                  var u = Lu;
                  (Lu |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (u = i),
                                    p === o && ++f === r && (c = i),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          $i = t;
                        null !== $i;

                      )
                        if (
                          ((e = (t = $i).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($i = e);
                        else
                          for (; null !== $i; ) {
                            t = $i;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        A = t.stateNode,
                                        y = A.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      A.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              xc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($i = e);
                              break;
                            }
                            $i = t.return;
                          }
                      (h = nu), (nu = !1);
                    })(e, n),
                    vu(n, e),
                    mr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    He(),
                    (Lu = u),
                    (yt = i),
                    (_u.transition = o);
                } else e.current = n;
                if (
                  (Xu && ((Xu = !1), (qu = e), (Hu = a)),
                  (o = e.pendingLanes),
                  0 === o && (Qu = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Uu), (Uu = null), e);
                0 !== (1 & Hu) && 0 !== e.tag && Sc(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Ku
                      ? Zu++
                      : ((Zu = 0), (Ku = e))
                    : (Zu = 0),
                  Ya();
              })(e, t, n, r);
          } finally {
            (_u.transition = a), (yt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== qu) {
            var e = bt(Hu),
              t = _u.transition,
              n = yt;
            try {
              if (((_u.transition = null), (yt = 16 > e ? 16 : e), null === qu))
                var r = !1;
              else {
                if (((e = qu), (qu = null), (Hu = 0), 0 !== (6 & Lu)))
                  throw Error(l(331));
                var a = Lu;
                for (Lu |= 4, $i = e.current; null !== $i; ) {
                  var o = $i,
                    i = o.child;
                  if (0 !== (16 & $i.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for ($i = s; null !== $i; ) {
                          var f = $i;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), ($i = d);
                          else
                            for (; null !== $i; ) {
                              var p = (f = $i).sibling,
                                m = f.return;
                              if ((ou(f), f === s)) {
                                $i = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), ($i = p);
                                break;
                              }
                              $i = m;
                            }
                        }
                      }
                      var h = o.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      $i = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), ($i = i);
                  else
                    e: for (; null !== $i; ) {
                      if (0 !== (2048 & (o = $i).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, o, o.return);
                        }
                      var A = o.sibling;
                      if (null !== A) {
                        (A.return = o.return), ($i = A);
                        break e;
                      }
                      $i = o.return;
                    }
                }
                var y = e.current;
                for ($i = y; null !== $i; ) {
                  var b = (i = $i).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== b)
                    (b.return = i), ($i = b);
                  else
                    e: for (i = y; null !== $i; ) {
                      if (0 !== (2048 & (u = $i).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          xc(u, u.return, k);
                        }
                      if (u === i) {
                        $i = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), ($i = w);
                        break e;
                      }
                      $i = u.return;
                    }
                }
                if (
                  ((Lu = a),
                  Ya(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (_u.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = Ol(e, (t = mi(0, (t = si(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (vt(e, 1, t), ac(e, t));
        }
        function xc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = Ol(t, (e = hi(t, (e = si(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (vt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nu === e &&
              (Iu & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Iu) === Iu && 500 > Ze() - Yu)
                ? pc(e, 0)
                : (Gu |= n)),
            ac(e, t);
        }
        function Pc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = tc();
          null !== (e = Ll(e, t)) && (vt(e, t, n), ac(e, n));
        }
        function _c(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pc(e, n);
        }
        function Lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Pc(e, n);
        }
        function Nc(e, t) {
          return Qe(e, t);
        }
        function Tc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ic(e, t, n, r) {
          return new Tc(e, t, n, r);
        }
        function zc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Oc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ic(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Rc(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) zc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return jc(n.children, a, o, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = Ic(12, n, t, 2 | a)).elementType = x), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Ic(13, n, t, a)).elementType = L), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Ic(19, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case z:
                return Mc(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case P:
                      i = 9;
                      break e;
                    case _:
                      i = 11;
                      break e;
                    case T:
                      i = 14;
                      break e;
                    case I:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ic(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function jc(e, t, n, r) {
          return ((e = Ic(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = Ic(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Ic(6, e, null, t)).lanes = n), e;
        }
        function Gc(e, t, n) {
          return (
            ((t = Ic(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Jc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new Jc(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ic(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Tl(l),
            e
          );
        }
        function Yc(e) {
          if (!e) return Pa;
          e: {
            if (Ye((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ia(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ia(n)) return Ra(e, n, t);
          }
          return t;
        }
        function Fc(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Bc(n, r, !0, e, 0, l, 0, i, u)).context = Yc(null)),
            (n = e.current),
            ((l = zl((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ol(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Vc(e, t, n, r) {
          var a = t.current,
            l = tc(),
            o = nc(a);
          return (
            (n = Yc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ol(a, t, o)) && (rc(e, a, o, l), Rl(e, a, o)),
            o
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Uc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qc(e, t) {
          Uc(e, t), (e = e.alternate) && Uc(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current) bi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ni(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        Ia(t.type) && ja(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Di(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Fi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xi(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), al && 0 !== (1048576 & t.flags) && $a(t, Ua, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = Ta(t, _a.current);
              El(t, n), (a = Eo(null, t, r, e, a, n));
              var o = xo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ia(r) ? ((o = !0), ja(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Tl(t),
                    (a.updater = Bl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Li(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _i(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _i(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Ni(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Il(e, t),
                  Ml(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, r, n, (a = si(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ti(e, t, r, n, (a = si(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ca(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Zl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && cl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && cl(t), null;
            case 13:
              return Di(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Hl(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(vl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !La.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === o.tag) {
                              (c = zl(-1, n & -n)).tag = 2;
                              var s = o.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (o.lanes |= n),
                              null !== (c = o.alternate) && (c.lanes |= n),
                              Sl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Sl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                wi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = xl(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Ia(r) ? ((e = !0), ja(t)) : (e = !1),
                El(t, n),
                Fl(t, r, a),
                Wl(t, r, a, n),
                Li(null, t, r, !0, e, n)
              );
            case 19:
              return Fi(e, t, n);
            case 22:
              return xi(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Xc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qc(e) {
          this._internalRoot = e;
        }
        function Hc(e) {
          this._internalRoot = e;
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $c() {}
        function es(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Wc(o);
                i.call(e);
              };
            }
            Vc(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Wc(o);
                    l.call(e);
                  };
                }
                var o = Fc(t, r, e, 0, null, !1, 0, "", $c);
                return (
                  (e._reactRootContainer = o),
                  (e[ma] = o.current),
                  Yr(8 === e.nodeType ? e.parentNode : e),
                  fc(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Wc(u);
                  i.call(e);
                };
              }
              var u = Bc(e, 0, !1, null, 0, !1, 0, "", $c);
              return (
                (e._reactRootContainer = u),
                (e[ma] = u.current),
                Yr(8 === e.nodeType ? e.parentNode : e),
                fc(function () {
                  Vc(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Wc(o);
        }
        (Hc.prototype.render = qc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vc(e, t, null, null);
          }),
          (Hc.prototype.unmount = qc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fc(function () {
                  Vc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Hc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (At(t, 1 | n),
                    ac(t, Ze()),
                    0 === (6 & Lu) && ((Fu = Ze() + 500), Ya()));
                }
                break;
              case 13:
                fc(function () {
                  var t = Ll(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ll(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              Qc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Ll(e, t);
              if (null !== n) rc(n, e, t, tc());
              Qc(e, t);
            }
          }),
          (Et = function () {
            return yt;
          }),
          (xt = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((K(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      Q(r), K(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = sc),
          (Le = fc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ya, ba, wa, Ce, Pe, sc],
          },
          ns = {
            findFiberByHostInstance: Aa,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (lt = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zc(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zc(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Xc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Yr(8 === e.nodeType ? e.parentNode : e),
              new qc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Kc(t)) throw Error(l(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zc(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Xc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Fc(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ma] = t.current),
              Yr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Hc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Kc(t)) throw Error(l(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Kc(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (fc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = sc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Kc(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        var r = n(4164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      4164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      6374: function (e, t, n) {
        var r = n(2791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            l = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: s,
            props: l,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      9117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function A() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (A.prototype = v.prototype);
        var b = (y.prototype = new A());
        (b.constructor = y), h(b, v.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            l.children = c;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + _(u, 0) : l),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  L(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var s = l + _((i = e[c]), c);
              u += L(i, t, a, s, o);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += L((i = i.value), t, a, (s = l + _(i, c++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          z = { transition: null },
          O = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = y),
          (t.StrictMode = l),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        e.exports = n(6374);
      },
      6813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                c = i + 1,
                s = e[c];
              if (0 > l(u, n))
                c < a && 0 > l(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > l(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          A = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function w(e) {
          if (((g = !1), b(e), !h))
            if (null !== r(c)) (h = !0), z(k);
            else {
              var t = r(s);
              null !== t && O(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), g && ((g = !1), A(C), (C = -1)), (m = !0);
          var l = p;
          try {
            for (
              b(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !L()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(c) && a(c),
                  b(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && O(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          x = null,
          C = -1,
          P = 5,
          _ = -1;
        function L() {
          return !(t.unstable_now() - _ < P);
        }
        function N() {
          if (null !== x) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? S() : ((E = !1), (x = null));
            }
          } else E = !1;
        }
        if ("function" === typeof y)
          S = function () {
            y(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            I = T.port2;
          (T.port1.onmessage = N),
            (S = function () {
              I.postMessage(null);
            });
        } else
          S = function () {
            v(N, 0);
          };
        function z(e) {
          (x = e), E || ((E = !0), S());
        }
        function O(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), z(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (g ? (A(C), (C = -1)) : (g = !0), O(w, l - o)))
                : ((e.sortIndex = i), n(c, e), h || m || ((h = !0), z(k))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        e.exports = n(6813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".1aa55813.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "image-modification:";
      n.l = function (r, a, l, o) {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== l)
            for (
              var c = document.getElementsByTagName("script"), s = 0;
              s < c.length;
              s++
            ) {
              var f = c[s];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + l
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + l),
            (i.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = l));
            var o = n.p + n.u(t),
              i = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    a[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            l,
            o = r[0],
            i = r[1],
            u = r[2],
            c = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); c < o.length; c++)
            (l = o[c]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkimage_modification =
          self.webpackChunkimage_modification || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e = n(2791),
        t = n(1250);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                o,
                i = [],
                u = !0,
                c = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = l.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (s) {
                (c = !0), (a = s);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var o,
        i,
        u = "60",
        c = "canvas_root__22HXT",
        s = "canvas_header__dbPmt",
        f = "canvas_sticker-generator-wrapper__UX+pc",
        d = "canvas_cancel-buttons__8EjbZ",
        p = "canvas_reset__SKdZL",
        m = "canvas_img-canvas-wrapper__s1bLi",
        h = n.p + "../media/cap.PNG",
        g = n.p + "../media/mgl2.5cbc0d230a0bf7e040f7.png",
        v = n.p + "../media/mgl3.f4e0b1c1d693e7bb8e0e.png",
        A = n.p + "../media/mgl4.94c69c36b7e84f7f4cea.png",
        y = n.p + "../media/mgl5.d8dd65a4ecd392c16022.png",
        b = n.p + "../media/mgl6.8cfcd52a303d77767269.png",
        w = n.p + "../media/mgl7.b04d4fa003f91b41c7d7.png",
        k = n.p + "../media/mgl8.812b5b04a8663677023f.png",
        S = n.p + "../media/mgl9.b77cd5625a9eb74d2ba8.png",
        E = n.p + "../media/mgl10.3531b492702f460225a8.png",
        x = n.p + "../media/mgl11.36c46e4dc9f641883eb9.png",
        C = n.p + "../media/mgl12.09f8722c81a6cb8eb6b5.png",
        P = n.p + "../media/catincap.PNG",
        _ = n.p + "../media/mglg2.aa68a92e81b09c022fb0.png",
        L = n.p + "../media/mgls1.9273be8a872ac31b2279.png",
        N = n.p + "../media/mgls2.6764f09f4da34b5f256b.png",
        T =
          (n.p,
          n.p + "../media/mogglesecondwave-012.6503180ae68065173deb.png"),
        I = n.p + "../media/mogglesecondwave-013.c13a81a258a705f39e84.png",
        z = n.p + "../media/mogglesecondwave-014.31944aa50c4f5321932d.png",
        O = n.p + "../media/mogglesecondwave-015.c89063b42bf60e19e773.png",
        R = n.p + "../media/mogglesecondwave-016.de6df43d495bf4dcbb7f.png",
        j = n.p + "../media/mogglesecondwave-017.3c88ec7d09fa3f2030d3.png",
        M = n.p + "../media/mogglesecondwave-018.1c21710d4eed969f996c.png",
        D = n.p + "../media/mogglesecondwave-019.f550250dd5eafc6b17e4.png",
        G = n.p + "../media/mogglesecondwave-020.b51451b21de454067837.png",
        J = n.p + "../media/mogglesecondwave-021.b28844acd36b8696f44b.png",
        B = n.p + "../media/mogglesecondwave-022.2900e88b1242b51a49da.png",
        Y = n.p + "../media/mogglesecondwave-023.a4d38cfb003c8230a0c7.png",
        F = n.p + "../media/moglast1.76c478ff5a2247ee5a07.png",
        V = n.p + "../media/moglast2.8f20010e5f5c599bbf91.png",
        W = n.p + "../media/moglast3.99b022955f890277db9c.png",
        U = n.p + "../media/moglast4.580bd7f43d6b86ff3915.png",
        Q = n.p + "../media/moglast5.c6c431ba8f8214582f7d.png",
        X = n.p + "../media/moglast6.219c207a6ea8dcc1de8f.png",
        q = n.p + "../media/moglast7.594909bb76881cb8a1b9.png",
        H = n.p + "../media/moglast8.b7277572b23be27795ef.png",
        Z = n.p + "../media/moglast9.364789b5a2e170b79178.png",
        K = n.p + "../media/moglast10.ab0190729b6fe5456004.png",
        $ = n.p + "../media/moglast11.10d2236e8010278be4a2.png",
        ee = n.p + "../media/moglast12.6957b304996643e80197.png",
        te = n.p + "../media/moglast13.30662e2c91d141f5f557.png",
        ne = n.p + "../media/moglast14.e541964a139e1f2f23aa.png",
        re = n.p + "../media/moglast15.5688a72605d2545dd666.png",
        ae = n.p + "../media/moglast16.e8389719de4dc199abc1.png",
        le = n.p + "../media/moglast17.29e76d0bfcf8c87c1195.png",
        oe = n.p + "../media/moglast18.a12d4c48dcd76c8e58f6.png",
        ie = n.p + "../media/moglast19.42e7c66930c651a20f66.png",
        ue = n.p + "../media/moglast20.51c1ea72ed8fe874f3b9.png",
        ce = n.p + "../media/mog_my_pfp_mfer.74918929b72e186f8d9b.png",
        se = ["title", "titleId"];
      function fe() {
        return (
          (fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          fe.apply(this, arguments)
        );
      }
      function de(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function pe(t, n) {
        var r = t.title,
          a = t.titleId,
          l = de(t, se);
        return e.createElement(
          "svg",
          fe(
            {
              id: "Layer_1",
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 288.04 288.68",
              ref: n,
              "aria-labelledby": a,
            },
            l
          ),
          r ? e.createElement("title", { id: a }, r) : null,
          o ||
            (o = e.createElement(
              "defs",
              null,
              e.createElement(
                "style",
                null,
                "\n      .cls-1 {\n        stroke-width: 0px;\n      }\n    "
              )
            )),
          i ||
            (i = e.createElement("path", {
              className: "cls-1",
              d: "m203.14,49.26c-12.23-7.65-24.85-12.55-38.36-14.98-59.64-10.72-115.81,26.04-129.8,84.82-14.85,62.4,27.39,125.68,90.6,135.75,62.46,9.94,119.4-31.38,129.26-93.95.87-5.53.82-11.21,1.24-16.81.59-7.8,5.65-13.89,12.67-15.29,7.18-1.43,14.59,1.93,17.53,8.5,1.18,2.64,1.76,5.77,1.74,8.68-.32,67.28-48.16,125.76-114.08,139.59C94.66,302.2,17.36,250.63,2.48,171.16-12.22,92.66,40.04,16.83,118.83,2.9c36.99-6.54,71.52.66,103.32,20.73,1.06.67,2.1,1.36,3.15,2.03.09.06.24,0,.85,0-.47-1.6-.9-3.07-1.32-4.54-2.47-8.63,1.98-17.3,10.37-20.19,8.35-2.88,17.58,1.12,20.54,9.57,5.74,16.37,11.32,32.81,16.46,49.38,3.21,10.33-4.23,20.3-15.19,20.51-16.37.32-32.76.24-49.13,0-7.93-.11-13.84-5.39-15.45-12.87-1.44-6.66,1.98-13.46,8.62-17.14.52-.29,1.05-.57,2.1-1.13Z",
            }))
        );
      }
      var me = e.forwardRef(pe),
        he = (n.p, "gridContainer_root__L1vs4"),
        ge = "gridContainer_img-wrapper__KecqQ",
        ve = "gridContainer_number-of-el__ssBLH",
        Ae = "gridContainer_grid-container__Z2HEq",
        ye = n(184),
        be = function (t) {
          var n = t.iconImg,
            r = t.headerRef,
            a = t.children,
            o = e.Children.count(a),
            i = (0, e.useRef)(null),
            u = l((0, e.useState)(!1), 2),
            c = u[0],
            s = u[1],
            f = Math.ceil(Math.sqrt(o)),
            d = {
              gridTemplateRows: "repeat(".concat(f, ", 1fr)"),
              gridTemplateColumns: "repeat(4, 1fr)",
              height: i.width + "px",
            };
          (0, e.useEffect)(function () {
            return (
              document.addEventListener("touchstart", p),
              function () {
                document.removeEventListener("touchstart", p);
              }
            );
          }, []),
            (0, e.useEffect)(
              function () {
                r.current.style.zIndex = c ? 2 : 1;
              },
              [c, r]
            );
          var p = function (e) {
            e.defaultPrevented || (s(!1), (i.current.style.display = "none"));
          };
          return (0, ye.jsxs)("div", {
            className: he,
            onMouseEnter: function (e) {
              e.defaultPrevented ||
                (e.preventDefault(),
                s(!0),
                (i.current.style.display = "grid"),
                i.current && r.current);
            },
            onTouchStart: function (e) {
              e.defaultPrevented ||
                (e.preventDefault(),
                e.stopPropagation(),
                s(!0),
                (i.current.style.display = "grid"),
                i.current && r.current);
            },
            onTouchEnd: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            onMouseLeave: p,
            children: [
              (0, ye.jsxs)("div", {
                className: ge,
                children: [
                  (0, ye.jsx)("img", {
                    src: n,
                    alt: "",
                    draggable: !1,
                    style: {
                      position: "absolute",
                      transform: "rotate(7deg)",
                      transformOrigin: "left center",
                    },
                  }),
                  (0, ye.jsx)("img", {
                    src: n,
                    alt: "",
                    draggable: !1,
                    style: {
                      position: "absolute",
                      transform: "rotate(-7deg)",
                      transformOrigin: "left center",
                    },
                  }),
                  (0, ye.jsx)("img", {
                    src: n,
                    alt: "",
                    draggable: !1,
                    style: {
                      position: "absolute",
                      transform: "rotate(-20deg)",
                      transformOrigin: "left center",
                    },
                  }),
                ],
              }),
              (0, ye.jsx)("div", { className: ve, children: o }),
              (0, ye.jsx)("div", {
                className: Ae,
                style: d,
                ref: i,
                onMouseDown: p,
                onTouchStart: function (e) {
                  e.preventDefault(), p(e);
                },
                children: a,
              }),
            ],
          });
        },
        we = "sticker_root__t2ODv",
        ke = "sticker_focus-helper__VfIpW",
        Se = "sticker_corner__+NhCH",
        Ee = "sticker_top-left__9NW7G",
        xe = "sticker_top-right__8hHxw",
        Ce = "sticker_bottom-left__Vmwc3",
        Pe = "sticker_bottom-right__V4edG",
        _e = (0, e.forwardRef)(function (t, n) {
          var r = t.img,
            a = t.position,
            l = t.scale,
            o = t.rotation,
            i = t.handleActiveSticker,
            u = t.index,
            c = t.activeIndex,
            s = t.inTrash,
            f = (0, e.useRef)(null),
            d = (0, e.useRef)(null);
          return (
            (0, e.useEffect)(
              function () {
                (f.current.style.left = a.x + "px"),
                  (f.current.style.top = a.y + "px"),
                  (f.current.style.transform = "scale("
                    .concat(l, ") rotate(")
                    .concat(o, "deg)")),
                  (d.current.style.opacity = u === c.current ? "1" : "0"),
                  (f.current.style.zIndex = u === c.current ? "1" : "0"),
                  (f.current.style.opacity =
                    s && c.current === u ? "0.5" : "1"),
                  (d.current.style.backgroundColor =
                    s && c.current === u ? "red" : ""),
                  (d.current.style.boxShadow =
                    s && c.current === u ? "none" : "");
              },
              [c, u, a, o, l, n, s]
            ),
            (0, ye.jsxs)("div", {
              className: we,
              ref: function (e) {
                (f.current = e), n(e);
              },
              onMouseDown: i,
              onTouchStart: i,
              onClick: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
              children: [
                (0, ye.jsxs)("div", {
                  className: ke,
                  ref: d,
                  children: [
                    (0, ye.jsx)("div", {
                      className: "".concat(Se, " ").concat(Ee),
                    }),
                    (0, ye.jsx)("div", {
                      className: "".concat(Se, " ").concat(xe),
                    }),
                    (0, ye.jsx)("div", {
                      className: "".concat(Se, " ").concat(Pe),
                    }),
                    (0, ye.jsx)("div", {
                      className: "".concat(Se, " ").concat(Ce),
                    }),
                  ],
                }),
                (0, ye.jsx)("img", { src: r, alt: "", draggable: !1 }),
              ],
            })
          );
        }),
        Le = "stickerGenerator_root__ya9lG";
      function Ne(t) {
        var n = t.img,
          r = t.handleGenerateSticker,
          a = (0, e.useRef)(null);
        return (0, ye.jsx)("div", {
          className: Le,
          ref: a,
          onMouseDown: function (e) {
            r(e, n, a);
          },
          onTouchStart: function (e) {
            r(e, n, a);
          },
          children: (0, ye.jsx)("img", { src: n, draggable: !1, alt: "" }),
        });
      }
      function Te(e) {
        return (
          (Te =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Te(e)
        );
      }
      function Ie(e) {
        var t = (function (e, t) {
          if ("object" !== Te(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Te(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Te(t) ? t : String(t);
      }
      function ze(e, t, n) {
        return (
          (t = Ie(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                ze(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function je(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Me() {
        var t = l((0, e.useState)([]), 2),
          n = t[0],
          r = t[1],
          a = (0, e.useRef)([]),
          o = l((0, e.useState)({ previous: -1, current: -1 }), 2),
          i = o[0],
          u = o[1],
          c = (0, e.useRef)(1),
          s = (0, e.useRef)({ x: 0, y: 0 }),
          f = (0, e.useRef)(0);
        return {
          stickers: n,
          stickersRefs: a,
          generateSticker: function (e, t) {
            var a = {
              key: "_" + Math.random().toString(36).substr(2, 9),
              img: e,
              position: t,
              scale: 1,
              rotation: 0,
            };
            u(function (e) {
              return { previous: e.current, current: n.length };
            }),
              r(function (e) {
                return [].concat(je(e), [Re({}, a)]);
              });
          },
          deleteActiveSticker: function () {
            u(function (e) {
              return { previous: e.current, current: -1 };
            }),
              r(function (e) {
                return e.filter(function (e, t) {
                  return t !== i.current;
                });
              }),
              (a.current = a.current.filter(function (e, t) {
                return t !== i.current;
              }));
          },
          activeIndex: i,
          setActiveSticker: function (e) {
            (e === i.current && -1 !== e) ||
              (null !== a.current &&
                u(function (t) {
                  return { previous: t.current, current: e };
                }));
          },
          setInitialPosition: function (e) {
            null !== e && (s.current = e);
          },
          handlePosition: function (e) {
            if (null !== i.current && e) {
              var t = s.current.x + e.x,
                n = s.current.y + e.y;
              r(function (e) {
                var r = je(e);
                return (r[i.current].position = { x: t, y: n }), r;
              });
            }
          },
          setInitialScale: function (e) {
            c.current = e;
          },
          handleScale: function (e) {
            null !== i.current &&
              r(function (t) {
                var n = je(t);
                return (n[i.current].scale = c.current * e), n;
              });
          },
          setInitialRotation: function (e) {
            f.current = e;
          },
          handleRotation: function (e) {
            null !== i.current &&
              r(function (t) {
                var n = je(t);
                return (n[i.current].rotation = f.current + e), n;
              });
          },
          initialPositionRef: s,
          initialScaleRef: c,
          initialRotationRef: f,
          resetStickers: function () {
            r([]),
              u({ previous: -1, current: -1 }),
              (c.current = 1),
              (s.current = { x: 0, y: 0 }),
              (f.current = 0);
          },
        };
      }
      var De,
        Ge,
        Je = function (e, t) {
          var n = e.getBoundingClientRect(),
            r = t.getBoundingClientRect(),
            a = n.top + n.height / 4,
            l = n.right - n.width / 4,
            o = n.bottom - n.height / 4,
            i = n.left + n.width / 4,
            u = r.top + r.height / 4,
            c = r.right - r.width / 4,
            s = r.bottom - r.height / 4;
          return !(l < r.left + r.width / 4 || i > c || o < u || a > s);
        };
      var Be = ["title", "titleId"];
      function Ye() {
        return (
          (Ye = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ye.apply(this, arguments)
        );
      }
      function Fe(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ve(t, n) {
        var r = t.title,
          a = t.titleId,
          l = Fe(t, Be);
        return e.createElement(
          "svg",
          Ye(
            {
              id: "Layer_2",
              "data-name": "Layer 2",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 354.8 360.26",
              ref: n,
              "aria-labelledby": a,
            },
            l
          ),
          r ? e.createElement("title", { id: a }, r) : null,
          De ||
            (De = e.createElement(
              "defs",
              null,
              e.createElement(
                "style",
                null,
                "\n      .cls-1 {\n        stroke-width: 0px;\n      }\n    "
              )
            )),
          Ge ||
            (Ge = e.createElement(
              "g",
              { id: "Layer_1-2", "data-name": "Layer 1" },
              e.createElement(
                "g",
                null,
                e.createElement("path", {
                  className: "cls-1",
                  d: "m184.6,26.98c47.9,47.91,95.7,95.73,143.42,143.47,4.25-4.04,8.98-8.1,13.14-12.68,2.56-2.82,1.02-5.8-1.44-8.26-9.65-9.62-19.28-19.27-28.91-28.91-25.73-25.73-51.45-51.46-77.18-77.19-.96-.96-1.88-1.97-3.02-3.16,3.02-2.79,5.89-5.46,9.24-8.56,2.2,2.58,4.54,5.32,7.37,8.64,3.02-3.18,5.4-5.85,7.95-8.35,8.19-8.05,18.82-8.07,26.97.03,13.75,13.66,27.45,27.36,41.11,41.12,8.12,8.17,8.1,18.82.06,26.98-2.45,2.49-5.06,4.83-7.83,7.46,1.2,1.28,2.09,2.29,3.03,3.23,9.89,9.91,19.81,19.8,29.7,29.72,8.8,8.83,8.81,19.25.07,28.05-4.93,4.97-9.87,9.94-14.86,14.85-3.87,3.81-6.81,3.84-10.66.03-9.14-9.07-18.22-18.2-27.33-27.31-.93-.93-1.9-1.81-3.39-3.23-1.2,9.16-2.29,17.53-3.4,25.9-3.14,23.77-6.3,47.54-9.43,71.31-3.11,23.65-6.21,47.3-9.31,70.95-1.04,7.92-1.94,15.87-3.15,23.77-1.38,8.98-8.9,15.37-18.06,15.38-44.88.04-89.76.04-134.65,0-9.69,0-17.13-6.75-18.39-16.32-5.69-43.21-11.41-86.42-17.1-129.63-1.19-9.02-2.3-18.05-3.51-27.61,4.14-.54,8-1.05,12.2-1.6,1.16,8.72,2.27,16.98,3.36,25.25,3.16,23.89,6.31,47.79,9.45,71.69,2.59,19.69,5.2,39.37,7.76,59.06.66,5.04,2.52,6.88,7.49,6.89,44.01.02,88.01.02,132.02,0,4.94,0,6.73-1.84,7.41-6.97,4.65-35.29,9.35-70.57,14.01-105.85,4.02-30.46,8.03-60.91,11.97-91.38.14-1.05-.36-2.49-1.07-3.29-2.15-2.43-4.39-4.84-6.91-6.86-1.2-.96-3.12-1.39-4.72-1.39-40.01-.07-80.01-.06-120.02-.06-21,0-42.01,0-63.01,0-1.35,0-2.71,0-4.57,0,1.23,9.81,2.43,19.28,3.67,29.18-4.12.57-7.89,1.09-12.12,1.67-.86-6.17-1.69-12.06-2.49-17.95-.71-5.2-1.31-10.41-2.07-15.6-1.02-6.96,1.14-9.59,8.14-9.59,59.51,0,119.02,0,178.53,0,1.36,0,2.72,0,5,0-1.42-1.46-2.3-2.39-3.21-3.3-27.58-27.59-55.16-55.17-82.74-82.76-5.45-5.45-5.46-7.71-.11-13.08,4.68-4.69,9.33-9.42,14.07-14.05,8.26-8.07,19.12-8.03,27.35.03,4.28,4.19,8.53,8.41,12.98,12.8-3.09,2.9-5.87,5.51-9.1,8.54-3.53-3.52-7.3-7.27-11.07-11.02-5.42-5.41-7.62-5.43-12.99-.04-3.18,3.19-6.33,6.4-9.48,9.61-.16.16-.19.45-.16.39Zm71.93,20.71c17.19,17.2,33.95,33.95,51.13,51.14,1.93-2.11,4.08-4.54,6.33-6.89,3.85-4.02,3.91-6.62.03-10.54-5.9-5.94-11.84-11.85-17.76-17.77-7.6-7.6-15.18-15.23-22.81-22.79-3.02-2.99-5.78-3.34-8.6-.93-3.01,2.58-5.81,5.41-8.31,7.78Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m115.12,240.07c0-22.13-.05-44.25.03-66.38.03-8.75,6.44-16.09,15.01-17.63,8.45-1.51,17.11,3.39,20.05,11.57.74,2.07,1.14,4.38,1.14,6.58.06,43.88.07,87.75.03,131.63,0,10.45-8,18.4-18.2,18.38-10.16-.03-18.03-8.01-18.06-18.53-.05-21.88-.02-43.75-.01-65.63Zm24-.04c0-21.5.01-43-.01-64.5,0-4.48-2.27-7.27-5.78-7.32-3.52-.05-5.83,2.75-5.93,7.18-.01.5,0,1,0,1.5,0,42.12,0,84.24,0,126.37,0,1-.05,2.01.06,3,.38,3.32,2.93,5.83,5.92,5.61,3.3-.25,5.2-2.21,5.67-5.47.16-1.1.07-2.25.07-3.37,0-21,0-42,0-63Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m199.42,240.45c0,21.88.04,43.75-.02,65.63-.03,9.29-6.89,17.02-15.8,18.07-9.42,1.11-17.91-4.88-20.06-14.21-.3-1.32-.39-2.72-.39-4.09-.02-43.88-.04-87.75,0-131.63,0-9.53,6.96-17.34,15.99-18.27,9.36-.96,17.64,4.85,19.8,14.05.42,1.8.45,3.71.45,5.57.03,21.63.02,43.25.02,64.88Zm-24-.39c0,21.5-.01,43,.01,64.5,0,4.5,2.25,7.28,5.76,7.34,3.52.07,5.85-2.74,5.95-7.16.01-.5,0-1,0-1.5,0-42.12,0-84.24,0-126.37,0-1,.06-2.01-.05-3-.37-3.33-2.9-5.83-5.9-5.63-3.31.23-5.2,2.2-5.69,5.45-.16,1.1-.08,2.25-.08,3.37,0,21,0,42,0,63Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m247.43,240.14c0,22,.04,44-.02,66-.03,9.42-7.21,17.25-16.24,18.03-9.51.82-17.87-5.36-19.74-14.67-.27-1.33-.28-2.73-.28-4.1-.01-43.5-.03-87,0-130.5,0-11.05,7.8-19.07,18.32-19.01,10.29.06,17.94,8.11,17.95,19,.03,21.75,0,43.5,0,65.25Zm-12.28.1c0-21,0-42,0-63,0-1.12.06-2.26-.05-3.37-.36-3.33-2.89-5.84-5.89-5.63-3.31.23-5.2,2.2-5.7,5.44-.15.98-.07,2-.07,3,0,42.25,0,84.49,0,126.74,0,1-.08,2.02.07,3,.5,3.25,2.39,5.21,5.69,5.45,3,.21,5.54-2.3,5.89-5.63.12-1.11.06-2.25.06-3.37,0-20.87,0-41.75,0-62.62Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m121.4,60.42c.15,11.05-3.91,21.26-6.5,31.75-.88,3.56-4.2,4.29-7.62,3.86-8.67-1.09-17.34-2.18-26-3.28-6.68-.85-13.38-1.62-20.04-2.61-5.83-.87-7.87-5.61-4.5-10.39,2.88-4.08,6.16-7.89,8.91-12.05,4.61-6.95,9.06-14,13.34-21.16,2.55-4.27,4.28-5.31,9.13-4.33,8.8,1.78,17.62,3.5,26.41,5.33,5.63,1.17,6.84,2.73,6.87,8.37,0,1.5,0,3,0,4.5Zm-48.71,18.76c11.04,1.38,21.26,2.66,32.23,4.04,1.42-7.35,2.9-14.49,4.06-21.67.14-.84-1.29-2.59-2.26-2.83-5.07-1.25-10.24-2.05-15.34-3.21-2.08-.47-3,.14-4.04,1.97-2.52,4.42-5.35,8.66-8.18,12.89-1.92,2.86-4.08,5.56-6.47,8.81Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m154.24,108.14c-4.63,0-9.25.05-13.88-.01-5.86-.07-8.58-3.81-6.5-9.17,3.69-9.55,7.39-19.1,11.49-28.48.86-1.96,3.24-3.92,5.32-4.56,7.39-2.25,14.95-3.94,22.45-5.82,3.12-.78,5.61.14,7.55,2.76,5.66,7.63,11.43,15.17,17.06,22.83,2.99,4.07,2.05,7.89-2.47,10.21-7.45,3.82-14.93,7.55-22.47,11.19-1.4.68-3.1.96-4.68,1-4.62.13-9.25.05-13.88.05Zm29.23-20.87c-3.18-4.25-6.26-8.48-9.5-12.58-.55-.7-1.89-1.34-2.7-1.17-4.75,1-9.45,2.21-14.14,3.45-.64.17-1.4.77-1.64,1.37-2.36,5.69-4.63,11.42-6.87,17.01,12.88,2.02,24.46.16,34.85-8.08Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m2.02,34.74c-.57-2.86-1.3-6.5-2.02-10.11,14.26-5.64,42.84.11,56.38,12.92-2.3,3-4.63,6.03-6.41,8.34-8.03-3.28-15.33-7.34-23.16-9.17-7.73-1.81-15.99-1.38-24.79-1.98Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m85.04,29.97h-11.66c-1.33-10.58-7.18-16.73-18.03-18.04V.42c13.59-3.38,31.3,14.03,29.69,29.54Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m109.23.08v11.68h-11.88V.08h11.88Z",
                }),
                e.createElement("path", {
                  className: "cls-1",
                  d: "m31.17,60.11v11.8h-11.83v-11.8h11.83Z",
                })
              )
            ))
        );
      }
      var We = e.forwardRef(Ve),
        Ue = (n.p, { stickerSize: "60", root: "trash_root__FDgRq" }),
        Qe = (0, e.forwardRef)(function (e, t) {
          var n = e.handleOnClickDelete;
          return (0,
          ye.jsx)("div", { className: Ue.root, ref: t, onClick: n, children: (0, ye.jsx)(We, { className: Ue.svg }) });
        });
      function Xe() {
        Xe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (_) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, a) {
          var l = t && t.prototype instanceof d ? t : d,
            o = Object.create(l.prototype),
            i = new x(a || []);
          return r(o, "_invoke", { value: w(e, n, i) }), o;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = c;
        var f = {};
        function d() {}
        function p() {}
        function m() {}
        var h = {};
        u(h, l, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          v = g && g(g(C([])));
        v && v !== t && n.call(v, l) && (h = v);
        var A = (m.prototype = d.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          function a(r, l, o, i) {
            var u = s(e[r], e, l);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == Te(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, o, i);
                    },
                    function (e) {
                      a("throw", e, o, i);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), o(c);
                    },
                    function (e) {
                      return a("throw", e, o, i);
                    }
                  );
            }
            i(u.arg);
          }
          var l;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (l = l ? l.then(r, r) : r());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, l) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw l;
              return P();
            }
            for (n.method = a, n.arg = l; ; ) {
              var o = n.delegate;
              if (o) {
                var i = k(o, n);
                if (i) {
                  if (i === f) continue;
                  return i;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = s(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var l = a.arg;
          return l
            ? l.done
              ? ((t[e.resultName] = l.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : l
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = m),
          r(A, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(m, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), u(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(A)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          u(b.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise);
            var o = new b(c(t, n, r, a), l);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          y(A),
          u(A, i, "Generator"),
          u(A, l, function () {
            return this;
          }),
          u(A, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var i = n.call(l, "catchLoc"),
                    u = n.call(l, "finallyLoc");
                  if (i && u) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (i) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null);
              var o = l ? l.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function qe(e, t, n, r, a, l, o) {
        try {
          var i = e[l](o),
            u = i.value;
        } catch (c) {
          return void n(c);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function He(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var l = e.apply(t, n);
            function o(e) {
              qe(l, r, a, o, i, "next", e);
            }
            function i(e) {
              qe(l, r, a, o, i, "throw", e);
            }
            o(void 0);
          });
        };
      }
      var Ze = n.p + "../media/watermark.1fa69da26aab2b7c91a8.png";
      function Ke() {
        return (
          (Ke = He(
            Xe().mark(function e(t, n, r, a, l) {
              var o, i, u, c, s, f, d, p, m, h, g, v, A, y, b, w, k, S, E;
              return Xe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (0 !== n.length) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (o = t.width / a),
                        (i = {}),
                        (u = function () {
                          return new Promise(function (e) {
                            var t = new Image();
                            (t.onload = function () {
                              e(t);
                            }),
                              (t.src = Ze);
                          });
                        }),
                        (e.next = 7),
                        u()
                      );
                    case 7:
                      return (
                        (c = e.sent),
                        (s = (function () {
                          var e = He(
                            Xe().mark(function e(t) {
                              return Xe().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        new Promise(function (e) {
                                          var n = (t.position.x - r.x) * o,
                                            a = (t.position.y - r.y) * o;
                                          if (i[t.img])
                                            e(
                                              Re(
                                                Re({}, t),
                                                {},
                                                {
                                                  img: i[t.img],
                                                  position: { x: n, y: a },
                                                }
                                              )
                                            );
                                          else {
                                            var l = new Image();
                                            (l.onload = function () {
                                              (i[t.img] = l),
                                                e(
                                                  Re(
                                                    Re({}, t),
                                                    {},
                                                    {
                                                      img: l,
                                                      position: { x: n, y: a },
                                                    }
                                                  )
                                                );
                                            }),
                                              (l.src = t.img);
                                          }
                                        })
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (e.next = 11),
                        Promise.all(n.map(s))
                      );
                    case 11:
                      (f = e.sent),
                        (d = f[0].img.height / f[0].img.width),
                        (m = (p = l * o) * d),
                        ((h = document.createElement("canvas")).width =
                          t.width),
                        (h.height = t.height),
                        (g = h.getContext("2d")).drawImage(t, 0, 0),
                        f.forEach(function (e) {
                          g.save(),
                            g.translate(e.position.x, e.position.y),
                            g.translate(p / 2, m / 2),
                            g.rotate(e.rotation * (Math.PI / 180)),
                            g.scale(e.scale, e.scale),
                            g.drawImage(e.img, -p / 2, -m / 2, p, m),
                            g.restore();
                        }),
                        (v = c.height / c.width),
                        h.height < h.width
                          ? ((y = h.height / 16), (A = y / v))
                          : ((A = h.width / 4), (y = A * v)),
                        (b = h.width / 40),
                        (w = h.width - A - b),
                        (k = h.height - y - b),
                        g.drawImage(c, w, k, A, y),
                        (S = h.toDataURL("image/png")),
                        ((E = document.createElement("a")).download =
                          "composite.png"),
                        (E.href = S),
                        E.click();
                    case 32:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Ke.apply(this, arguments)
        );
      }
      var $e = e.createContext(),
        et = function (t) {
          var n = t.children,
            r = l((0, e.useState)(null), 2),
            a = r[0],
            o = r[1];
          return (
            (0, e.useEffect)(function () {
              var e = function (e) {
                document.documentElement.style.setProperty(
                  "--vh",
                  "".concat(0.01 * window.innerHeight, "px")
                ),
                  o(window.innerHeight);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, ye.jsx)($e.Provider, { value: a, children: n })
          );
        },
        tt = $e,
        nt = (0, e.forwardRef)(function (t) {
          var n = t.uploadedImage,
            r = t.imgCanvasRef,
            a = t.saveImage,
            o = t.setSaveImage,
            i = t.imageLoaded,
            se = (0, e.useRef)(null),
            fe = (0, e.useRef)(null),
            de = (0, e.useRef)(null),
            pe = (0, e.useContext)(tt),
            he = (function (t) {
              var n = (0, e.useRef)(0),
                r = l((0, e.useState)(!1), 2),
                a = r[0],
                o = r[1],
                i = (0, e.useRef)({ x: 0, y: 0 }),
                u = (0, e.useRef)({ x: 0, y: 0 }),
                c = (0, e.useRef)(!1),
                s = l((0, e.useState)(!1), 2),
                f = s[0],
                d = s[1],
                p = (0, e.useRef)(null),
                m = l((0, e.useState)(0), 2),
                h = m[0],
                g = m[1],
                v = (0, e.useRef)(null),
                A = Me(),
                y = A.stickers,
                b = A.stickersRefs,
                w = A.activeIndex,
                k = A.generateSticker,
                S = A.deleteActiveSticker,
                E = A.setActiveSticker,
                x = A.setInitialPosition,
                C = A.handlePosition,
                P = A.setInitialScale,
                _ = A.handleScale,
                L = A.setInitialRotation,
                N = A.handleRotation,
                T = A.initialPositionRef,
                I = A.initialScaleRef,
                z = A.initialRotationRef,
                O = A.resetStickers;
              (0, e.useEffect)(function () {}, []);
              var R = (0, e.useCallback)(
                function (e) {
                  if (-1 !== w.current) {
                    var t =
                        "touchmove" === e.type
                          ? e.touches[0].clientX
                          : e.clientX,
                      n =
                        "touchmove" === e.type
                          ? e.touches[0].clientY
                          : e.clientY;
                    o(Je(v.current, b.current[w.current])),
                      (u.current = { x: t, y: n });
                    var r = t - i.current.x,
                      a = n - i.current.y;
                    if ("touchmove" !== e.type || 2 !== e.touches.length)
                      c.current && f
                        ? (_(1 + r / 50), N(0.8 * a))
                        : c.current && C({ x: r, y: a });
                    else {
                      var l = e.touches[0].clientX - e.touches[1].clientX,
                        s = e.touches[0].clientY - e.touches[1].clientY,
                        d = Math.sqrt(l * l + s * s);
                      if (p.current) {
                        var m = d / p.current;
                        _(m);
                      }
                      var g = (180 * Math.atan2(s, l)) / Math.PI;
                      N(g - h);
                    }
                  }
                },
                [w, c, f, _, N, C, p, h, b]
              );
              (0, e.useEffect)(
                function () {
                  if (null !== t.current) {
                    var e = t.current;
                    return (
                      window.addEventListener("keydown", n),
                      window.addEventListener("keyup", r),
                      e.addEventListener("mousemove", R),
                      e.addEventListener("touchmove", R),
                      function () {
                        window.removeEventListener("keydown", n),
                          window.removeEventListener("keyup", r),
                          e.removeEventListener("mousemove", R),
                          e.removeEventListener("touchmove", R);
                      }
                    );
                  }
                  function n(e) {
                    ("Meta" !== e.key && "Control" !== e.key) || d(!0);
                  }
                  function r(e) {
                    ("Meta" !== e.key && "Control" !== e.key) || d(!1);
                  }
                },
                [t, R]
              );
              var j = (0, e.useCallback)(
                function (e, t) {
                  var n = null !== t && void 0 !== t ? t : w.current,
                    r =
                      "touchstart" === e.type
                        ? e.touches[0].clientX
                        : e.clientX,
                    a =
                      "touchstart" === e.type
                        ? e.touches[0].clientY
                        : e.clientY;
                  if (
                    ((i.current = { x: r, y: a }),
                    e.touches && 2 === e.touches.length)
                  ) {
                    if (!y[n]) return;
                    var l = e.touches[0].clientX - e.touches[1].clientX,
                      o = e.touches[0].clientY - e.touches[1].clientY,
                      u = Math.sqrt(l * l + o * o),
                      s = (180 * Math.atan2(o, l)) / Math.PI;
                    (p.current = u), g(s), L(y[n].rotation), P(y[n].scale);
                  } else {
                    if (((c.current = !0), !b.current[n])) return;
                    x({
                      x: b.current[n].offsetLeft,
                      y: b.current[n].offsetTop,
                    }),
                      L(y[n].rotation),
                      P(y[n].scale);
                  }
                },
                [c, b, w, L, P, x, y]
              );
              (0, e.useEffect)(
                function () {
                  var e;
                  -1 !== w &&
                    n.current !== y.length &&
                    ((e = new MouseEvent("mousedown", {
                      clientX: u.current.x,
                      clientY: u.current.y,
                    })),
                    j(e),
                    (n.current += 1));
                },
                [y.length, j, w]
              );
              var M = (0, e.useCallback)(
                  function () {
                    if (
                      y[w.current] &&
                      null !== T &&
                      void 0 !== T &&
                      T.current &&
                      null !== I &&
                      void 0 !== I &&
                      I.current &&
                      null != (null === z || void 0 === z ? void 0 : z.current)
                    ) {
                      var e = y[w.current],
                        t =
                          e.position.x === T.current.x &&
                          e.position.y === T.current.y,
                        n = e.scale === I.current,
                        r = e.rotation === z.current;
                      t && n && r && E(-1);
                    }
                  },
                  [y, T, w, E, I, z]
                ),
                D = (0, e.useCallback)(
                  function (e, t) {
                    w.current !== t && (e.stopPropagation(), E(t), j(e, t));
                  },
                  [E, j, w]
                );
              return {
                stickers: y,
                stickersRefs: b,
                activeIndex: w,
                handleInteractionStart: j,
                handleInteractionEnd: function (e) {
                  -1 !== w.current &&
                    null !==
                      (null === b || void 0 === b
                        ? void 0
                        : b.current[w.current]) &&
                    ((c.current = !1),
                    Je(v.current, b.current[w.current]) &&
                      (o(!1), S(), (n.current -= 1)));
                },
                handleInteractionMove: R,
                handleActiveSticker: D,
                handleGenerateSticker: function (e, n, r) {
                  var a =
                      "touchstart" === e.type
                        ? e.touches[0].clientX
                        : e.clientX,
                    l =
                      "touchstart" === e.type
                        ? e.touches[0].clientY
                        : e.clientY;
                  (i.current = { x: a, y: l }), (u.current = { x: a, y: l });
                  var o = r.current.getBoundingClientRect(),
                    c = t.current.getBoundingClientRect(),
                    s = { x: o.x - c.x, y: o.y - c.y };
                  k(n, s);
                },
                trashRef: v,
                inTrash: a,
                handleClickOutside: M,
                handleOnClickDelete: function () {
                  S(), (n.current -= 1);
                },
                handleReset: function () {
                  O(), (n.current = 0);
                },
              };
            })(se),
            ge = he.stickers,
            ve = he.stickersRefs,
            Ae = he.activeIndex,
            we = he.handleInteractionStart,
            ke = he.handleInteractionMove,
            Se = he.handleInteractionEnd,
            Ee = he.handleActiveSticker,
            xe = he.setInitialPosition,
            Ce = he.handleGenerateSticker,
            Pe = he.trashRef,
            Le = he.inTrash,
            Te = he.handleClickOutside,
            Ie = he.handleOnClickDelete,
            ze = he.handleReset;
          return (
            (0, e.useEffect)(
              function () {
                if (i && n) {
                  var e,
                    t,
                    l = n.width / n.height;
                  return (
                    l < 1
                      ? ((e = (t = se.current.offsetHeight) * l),
                        se.current.offsetwidth < e &&
                          (t = (e = se.current.offsetWidth) / l))
                      : ((t = (e = se.current.offsetWidth) / l),
                        se.current.offsetHeight < t &&
                          (e = (t = se.current.offsetHeight) * l)),
                    a &&
                      (!(function (e, t, n, r, a) {
                        Ke.apply(this, arguments);
                      })(
                        n,
                        ge,
                        {
                          x:
                            r.current.getBoundingClientRect().left -
                            se.current.getBoundingClientRect().left,
                          y:
                            r.current.getBoundingClientRect().top -
                            se.current.getBoundingClientRect().top,
                        },
                        e,
                        u
                      ),
                      o(!1)),
                    (r.current.width = e),
                    (r.current.height = t),
                    (r.current.style.width = e + "px"),
                    (r.current.style.height = t + "px"),
                    r.current.getContext("2d").drawImage(n, 0, 0, e, t),
                    function () {}
                  );
                }
              },
              [n, r, a, o, ge, i]
            ),
            (0, e.useEffect)(
              function () {
                return (
                  window.addEventListener("click", Te),
                  function () {
                    window.removeEventListener("click", Te);
                  }
                );
              },
              [Te, pe]
            ),
            (0, ye.jsxs)("div", {
              className: c,
              ref: se,
              onMouseDown: we,
              onMouseUp: Se,
              onTouchStart: we,
              onTouchEnd: Se,
              onTouchMove: ke,
              children: [
                (0, ye.jsxs)("div", {
                  className: s,
                  ref: de,
                  children: [
                    (0, ye.jsxs)("div", {
                      className: f,
                      children: [
                        (0, ye.jsxs)(be, {
                          iconImg: h,
                          headerRef: de,
                          children: [
                            (0, ye.jsx)(Ne, {
                              img: h,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: g,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: v,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: A,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: y,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: b,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: w,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: k,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: S,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: E,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: x,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: C,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: L,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: N,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: T,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: I,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: z,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: O,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: R,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: j,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: M,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: D,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: G,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: J,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: B,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: Y,
                              handleGenerateSticker: Ce,
                            }),
                          ],
                        }),
                        (0, ye.jsxs)(be, {
                          iconImg: P,
                          headerRef: de,
                          children: [
                            (0, ye.jsx)(Ne, {
                              img: P,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: _,
                              handleGenerateSticker: Ce,
                            }),
                          ],
                        }),
                        (0, ye.jsxs)(be, {
                          iconImg: F,
                          headerRef: de,
                          children: [
                            (0, ye.jsx)(Ne, {
                              img: F,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: V,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: W,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: U,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: Q,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: X,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: q,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: H,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: Z,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: K,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: $,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ee,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: te,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ne,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: re,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ae,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: le,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: oe,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ie,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ue,
                              handleGenerateSticker: Ce,
                            }),
                            (0, ye.jsx)(Ne, {
                              img: ce,
                              handleGenerateSticker: Ce,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, ye.jsxs)("div", {
                      className: d,
                      children: [
                        (0, ye.jsx)("div", {
                          className: p,
                          onClick: ze,
                          children: (0, ye.jsx)(me, {}),
                        }),
                        (0, ye.jsx)(Qe, {
                          ref: Pe,
                          inTrash: Le,
                          handleOnClickDelete: Ie,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ye.jsx)("div", {
                  className: m,
                  ref: fe,
                  children: (0, ye.jsx)("canvas", { ref: r }),
                }),
                ge.map(function (e, t) {
                  return (0, ye.jsx)(
                    _e,
                    {
                      img: e.img,
                      inTrash: Le,
                      position: e.position,
                      setInitialPosition: xe,
                      ref: function (e) {
                        ve.current[t] = e;
                      },
                      scale: e.scale,
                      rotation: e.rotation,
                      activeIndex: Ae,
                      index: t,
                      handleActiveSticker: function (e) {
                        Ee(e, t);
                      },
                    },
                    e.key
                  );
                }),
              ],
            })
          );
        }),
        rt = nt;
      var at =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPMwAADzMBYfQxQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13lG1pWefx3yOoyDjqSOwGpIlNkyQICKLkJkuScWbMIgZEkSCiwmAWEFExgIKjo46io6MSJXT3BVQGRZIiAiqiAw0NkuluRHjnj30KLtDhVtXZ9Z69389nrbsua9GrzlN0cZ7vfvepc6q1FmAdquoOSW52Af/VpZNc4bg/l9/8nSTvSHLO5u+9P+du/rvzkjyvtfbGGccGOigBAMtXVTdL8pNJ7jDTQ7w6ye8m+bXW2jtmegzgCAkAWLCqukaSJyS57xE95AeTPDHJE1trHzqixwRmIABggarqkkkenuSxST6nwwhvT/LDSZ7eWvv3Do8PHJIAgIWpqhsl+fUkX9x5lCR5Q5Jvb60d6z0IsD+f0XsA4MRV1f2T/Fl2Y/knyalJXlRVD+09CLA/AgAWoCY/lOmFeJfuPM6nukSSJ1XVb1VVj9sRwAG4BQA7rqoqydOTfHPvWU7Aq5Lcp7X2lt6DABdNAMAO2yz/pyV5QO9Z9uFdSU5vrb2q9yDAhXMLAHbUZvn/Spa1/JPkspleF3Dj3oMAF04AwA7aLP9fTvItvWc5oC+MCICdJgBgxxy3/B/Ye5ZDEgGwwwQA7JDN8n9qlr/894gA2FECAHbEZvk/Jcm39p5ly/Yi4Ea9BwE+QQDADtgs/19K8m29Z5nJFyY5QwTA7hAA0Nlm+f9ikm/vPcvMRADsEAEA/f1Cku/oPcQREQGwIwQAdFRVv5DkQb3nOGJeEwA7QABAJ1X180m+s/ccnVwmUwTsyocawXAEAHRQVU9O8uDec3R2mUy3A0QAdCAA4IhV1c8l+a7ec+wIEQCdCAA4QlX1s0m+u/ccO0YEQAcCAI5IVf1Mkof0nmNHiQA4YgIAjkBVPSnJ9/SeY8eJADhCAgBmVlU/neShvedYiL0IuGHvQWDtBADMqKqemORhvedYGBEAR0AAwEyq6qeSPLz3HAt12YgAmJUAgBlU1ROSPKL3HAsnAmBGAgC2rKoen+R7e8+xEiIAZiIAYIs2y/+RvedYmb0IuEHvQWBNBABsSVU9Lpb/XC6b5EwRANsjAGALquonk3xf7zlWTgTAFgkAOKSq+okkj+o9xyBEAGyJAIBDqKofT/L9vecYjNcEwBYIADigqvqxJD/Qe45BXS5TBFy/9yCwVAIADqCqfjTJD/aeY3CXy3Q7QATAAQgA2Keq+pEkj+49B0lEAByYAIB9qKofSvKY3nPwSUQAHIAAgBNUVY9N8tjec3CBRADskwCAE1BV/z3JD/Weg4skAmAfBABcjKp6TJIf7j0HJ2QvAq7XexDYdQIALkJVPTrJj/Seg30RAXACBABciKr6wSQ/2nsODuTyEQFwkQQAXICq+oEkP9Z7Dg5FBMBFEADwKarq+5P8eO852AoRABdCAMBxqupRSX6i9xxs1V4EXLf3ILBLBABsVNX3JfnJ3nMwi8snOUsEwCcIAEhSVY9M8rjeczArEQDHEQAMr6q+N8nje8/BkRABsCEAGFpVPSLJE3rPwZHymgCIAGBgVfXwJD/Vew66uEJEAIMTAAxps/yf2HsOutqLgNN6DwI9CACGU1UPi+XP5AqZXhMgAhiOAGAoVfXQJD/dew52ighgSAKAYVTV9yR5Uu852EkigOEIAIZQVQ9J8jO952CniQCGIgBYvar67iQ/23sOFmHvhYHX6T0IzE0AsGpV9V1Jfq73HCzKFTOdBIgAVk0AsFpV9eAkT+49B4skAlg9AcAqVdV3Jvn53nOwaCKAVRMArE5VPSjJL/Seg1UQAayWAGBVquo7YvmzXSKAVRIArEZVfXuSX0xSvWdhdfYi4NTeg8C2CABWoaq+LckvxfJnPiKAVREALF5VfWuSp8TyZ34nRQSwEgKARauqByZ5aix/jo4IYBUEAItVVd+S5Jdj+XP0RACLJwBYpM3y/5VY/vQjAlg0AcDiVNUDYvmzG/Yi4Nq9B4H9EgAsSlV9c5KnxfJnd5yU5JgIYGkEAItRVd8Uy5/dJAJYHAHAIlTVNyZ5evzMsrvcDmBRPJmy86rqG5L8avy8svtOjghgITyhstOq6uuT/I/4WWU5RACL4EmVnVVVX5fk1+LnlOXZi4Br9R4ELownVnZSVX1tkl+Pn1GW6+RMLwwUAewkT67snM3y/5/x88nyiQB2lidYdkpVfU1c+bMuIoCd5EmWnVFV/y3Tlf8les8CW+Y1AewcAcBOqKr/muQ3YvmzXleKCGCHCAC6q6r/kuQ3Y/mzfnsRcM3eg4AAoKuq+uokvxXLn3FcKdNrAkQAXQkAuqmq/5zkf8XyZzwigO4EAF1Y/iAC6EsAcOSq6v6Zlv8le88CnYkAuhEAHKmq+qokvx3LH/Z4YSBdCACOTFXdL8nvxPKHT3XlTBFwjd6DMA4BwJGoqvsmeUYsf7gwV850O0AEcCQEALOrqvvE8ocTIQI4MgKAWW2W/+8m+czes8BCiACOhABgNlV171j+cBAigNkJAGZRVfdK8nux/OGgvDCQWQkAtq6qvjLJ/47lD4d1lUwRcPXeg7A+AoCtqqp7xvKHbbpKptsBIoCtEgBszWb5/36Sz+o9C6yMCGDrBABbUVX3iOUPcxIBbJUA4NCq6u5J/iCWP8xNBLA1AoBDqaq7Jfk/sfzhqIgAtkIAcGCWP3Sz99sBV+s9CMslADiQqrprpuX/2b1ngUF9UaaTABHAgQgA9q2q7pLkD2P5Q28igAMTAOxLVd05yR/F8oddIQI4EAHACauq02P5wy4SAeybAOCEbJb/Hye5VO9ZgAskAtgXAcDFqqo7xfKHJdiLgFM6z8ECCAAuUlXdMZY/LIkI4IQIAC5UVd0hyTOTfE7vWYB9uWpEABdDAHCBNsv/WbH8YalEABdJAPBpqur2sfxhDUQAF0oA8Emq6nax/GFNRAAXSADwcVV12yTPTnLpzqMA27UXAVftPQi7QwCQ5OPL/zmx/GGtRACfRACQqrpNXPnDCE6JCGBDAAyuqr4i05X/f+g9C3AkTokIIAJgaJvl/9xY/jCaUyIChicABlVVXx7LH0Z2SkTA0ATAgKrq1rH8AREwNAEwmKr6siTPS/K5vWcBdsIpSc6qqi/qPQhHSwAMZLP8/ySWP/DJrpbpJEAEDEQADKKqbhVX/sCFEwGDEQADqKpbZrry/4+9ZxnEeUla7yFW5tzeAwxCBAykWvM8tWab5f/8WP5zOjPJy5K8Jsmrk/xDppOWmyS52ebPHZJ8Ya8BF+Yjmd6b4lWZ/jd9TWvtn6rqMpn+t7z55u87JrlUtynX7c1Jbtta++fegzAfAbBiVfWlmZb/5/WeZaXemuRBrbVnXtw/WFWXS/LUJPedfaple0WSB7TWXntx/2BVnZrk15LccvapxiQCVs4tgJWqqlvE8p9LS/K0JNc7keWfJK21d7bW7pfka5K8e87hFur8JN+X5EtPZPknSWvtDUluneRhmW67sF17twOu0nsQ5uEEYIU2y/8FsfzncH6S+7fWnn3QL1BVJ2W6bXCdrU21bB9OcqvW2isP+gWq6jpJXpTkSlubij3/mOkk4F96D8J2OQFYmaq6eVz5z+X8JPc+zPJPktba2Um+MclHtzHUCjz6MMs/SVprf5fktpluy7BdV4+TgFUSACtSVTfLdOX/+b1nWaG95f/8bXyx1trLk/z0Nr7Wwr04yZO28YVaa38fETAXEbBCbgGsxGb5vzCW/xzOT3Kv1toLtvlFq+qzM73S/bRtft0FeX+SG7bW3rLNL1pV10pyVtwOmIPbASviBGAFqupL4sp/LrMs/yRprX04yRO3/XUX5LnbXv5J0lp7U5LbJXnbtr82TgLWRAAsXFXdNNOV/xf0nmWFZlv+x/mLGb/2rnv5XF94EwG3jQiYgwhYCQGwYJb/rM5P8pUzL/8keX2SD838GLtq1vhxEjCrq2f6AKEr9x6EgxMAC1VVN8m0/P9T71lW6LxMy/+Fcz9Qa+2jSQ71CviF+kiO4Pturb0xImAu18h0EiACFkoALFBV3TjT7zxb/tt3ZMv/OH99hI+1K97UWjv/KB7ouAg4+ygebzAiYMEEwMJY/rPaW/4vOuLH/cgRP94uONLvWQTMSgQslABYkKq6Uabl70Nltq/X8ueIbN46WATMQwQskABYCMt/Vucluaflv37HRcDbe8+yQiJgYQTAAlTVF2da/pfpPcsK7S3/M3oPwtEQAbO6Rvx2wGIIgB1XVTdMckYs/zmcl+Qelv94Np8dIALmcc1MEeCdGHecANhhlv+szs20/M/sPQh9iIBZXTPT7QARsMMEwI6qqhtkWv6X7T3LCp2b6djf8h/cJgJun+QdvWdZIRGw4wTADqqq68fyn4srfz5Ja+31mU4CRMD2iYAdJgB2zGb5n5nkcr1nWaG95X9W70HYLSJgViJgRwmAHVJV14vlPxfLn4u0iQC3A+bhhYE7SADsCMt/Vucmubvlz8Vprf1tpgg4p/csK3StiICdIgB2QFVdN9Pyv3zvWVZob/kf6z0Iy7CJgNtFBMxhLwJO7j0IAqC7qjotlv9cPpTkbpY/++UkYFbXyvSaABHQmQDoaLP8z0pyhd6zrNCHMl35v7j3ICxTa+11EQFzEQE7QAB0UlXXyXTlb/lvn+XPVhwXAe/sPcsKiYDOBEAHm+V/VpIr9p5lhfaO/S1/tkIEzMprAjoSAEesqk6N5T+XveX/kt6DsC6ttb+JCJjLtSMCuhAAR8jyn5Xlz6xEwKxEQAcC4IhU1bUzLf+Tes+yQh9MclfLn7ltIuAOSd7Ve5YV2osAz5FHRAAcgaq6Viz/uXww05X/S3sPwhhaa3+d6SRABGzftTO9MNBz5REQADPbLP9jSRxtbZ/lTxciYFYi4IgIgBlV1TUzXflb/tu3d+xv+dPFJgLcDpiH2wFHQADMZLP8jyXxvtfbt7f8/7T3IIyttfbaTBHwr71nWaFTIwJmJQBmUFXXyHTlb/lv3weT3MXyZ1eIgFmJgBkJgC3bLP9jSa7ceZQ1+kCm5f9nvQeB47XWXhMRMBcRMBMBsEVVdfVMV/6W//Z9INOxv+XPThIBs9qLAO+hskUCYEs2y/9Ykqt0HmWNXPmzCJsIuGNEwBxEwJYJgC2oqqtluvK3/Ldvb/n/ee9B4ES01l6dKQLe3XuWFbpORMDWCIBD2iz/Y0m+qPMoa2T5s0ibCLhDRMAcRMCWCIBDqKpTMl35W/7b94Ekd7b8WSonAbMSAVsgAA5os/yPJblq10HW6f2Zlv/Leg8Ch9Fae1VEwFxEwCEJgAOoqqtmuvK3/Lfv/ZmO/S1/VuG4CHhP71lWSAQcggDYp83yP5bklL6TrJIrf1ZJBMzqOknOrKor9B5kaQTAPlTVF2W68j+l8yhrtLf8/2/vQWAOrbVXRgTM5bRMJwEiYB8EwAnaLP9jSa7WeZQ1svwZwiYC7hQRMAcRsE8C4ARU1VUyXflb/tv3/iSnW/6MorX2VxEBcxEB+yAALsZm+R9LcvXOo6zR+zIt/5f3HgSO0nER8N7es6yQCDhBAuAiVNWVM135W/7b975Mx/6WP0MSAbMSASdAAFyIzfI/luQanUdZI1f+kKS19oqIgLmcFr8dcJEEwAWoqitluvK3/Ldvb/n/Re9BYBdsIuD0iIA5XDci4EIJgE+xWf7Hklyz8yhrZPnDBWit/WWmCHhf71lWaC8CLt97kF0jAI5TVSdnuvK3/LfvfUnuZPnDBdtEwJ0iAuZw3UyvCRABxxEAG8ct/2v1nmWF3ptp+f9l70FglzkJmJUI+BQCIElVnZRp+V+79ywrZPnDPmxOyUTAPNwOOM7wAWD5z2pv+b+i9yCwJCJgVteLCEgyeABsPkHqrCSn9p5lhSx/OIRNBNw507tlsl0iIAMHgOU/q/cmuaPlD4ezea+M0yMC5jB8BAwZAJvfCT0r08dIsl3vybT8/6r3ILAGmwhwEjCPvQi4XO9BehguACz/Wb0n07G/5Q9btPmwLBEwj+tl+u2A4SJgqADYLP8zM71FJNvlyh9mJAJmNeRJwDABsLnPc2amXwNhu/aW/yt7DwJrtomAuyT5QO9ZVuj6GSwChggAy39Wlj8codbayzKdBIiA7RsqAlYfAJt/kWdmOuJhu96d5A6WPxytTQQ4CZjHMBGw6gCw/Gf17kxX/q/qPQiMqLX25xEBcxkiAlYbAFX1+UnOyPQvku2y/GEHiIBZXT/JGZtdskqrDICq+owkv5PkBr1nWSHLH3bIJgLumuSDvWdZoRskecZmp6zOKr+pJI/L9H8Itmvvnr/lDzuktfZnmU4CRMD23SXJ43sPMYfVBUBVfW2S7+09xwr9a6bl/+regwCfbhMBTgLm8Yiq+rreQ2zbqgKgqm6e5Gm951ihf8107G/5ww5rrf1pRMBcfmWzY1ZjNQFQVZdO8gdJLtV7lpVx5Q8LsomAu0UEbNulkvxhVX1B70G2ZTUBkOR7kly59xArs7f8X9N7EODEtdZemikCPtR7lpU5Ockjeg+xLasIgKq6TJJH9p5jZSx/WLBNBNw1ImDbHrKW9wdYRQAk+f4kq/1dzQ7eleT2lj8sm5OAWXxukkf1HmIbFh8AVXWVJA/uPceKvCvTlf9rew8CHF5r7SURAdv2oKo6ufcQh7X4AEjymCSf3XuIlbD8YYU2EXD3iIBtuVSSH+w9xGEtOgCq6pJJ7t97jpXYO/a3/GGFWmsvjgjYpq+tqs/sPcRhLDoAknx5ktX8SkZHe8v/r3sPAsznuAg4t/csK/B5SW7de4jDWHoA3LP3ACvwzlj+MAwRsFV36z3AYQiAsVn+MKDW2rGIgG24e+8BDmOxAVBVpyW5Zu85Fmxv+f9N70GAo7eJgHtEBBzGaVV1Su8hDmqxAZDkdr0HWDDLH0hr7ayIgMM6vfcAB7XkALhS7wEW6pwkt7P8geTjEXDPiICDumrvAQ5qyQFwxd4DLNA5ma78X9d7EGB3tNbOzBQB5/WeZYEWu4uWHAAn9R5gYSx/4EJtIuAeEQH7dYXeAxzUkgNgsdXVgeUPXCwnAQciADpwAnBi9u75W/7AxWqtnRERsB8CoINL9R5gAd6Rafn/be9BgOXYRMBXRgSciMV+Eu2SA+Cc3gPsuHdkOva3/IF9a629KCLgRLyr9wAHteQAeEfvAXaYK3/g0DYRcK8k5/eeZYed3XuAg1pyALy99wA7am/5v773IMDytdZemOkkQARcsMXuoiUHgBOAT/f2WP7Alm0iwEnABXMC0IEA+GSWPzCb1toLIgIuiBOADl7Te4Adsrf8/673IMB6iYAL9IbeAxzUkgPgjPghTCx/4AhtIuDe8fybJB9J8sLeQxzUYgOgtXZukmO95+jM8geOXGvt+Zki4MO9Z+nsJa219/Ue4qAWGwAbz+09QEdnJ7mt5Q/0IAKSJM/sPcBhLD0AntN7gE7OznTlv9h7T8Dytdb+JGNHwLN6D3AYiw6A1to/JhntVe+WP7AzNhFwn4wXAa9rrb259xCHsegA2HhC7wGO0N6xv+UP7IzW2vMyXgT8fO8BDmsNAfCbWfCvYezD2zIt/zf2HgTgU20i4L4ZIwLemORXew9xWIsPgNbaR5M8tvccM3tbpmN/yx/YWa2152aMCHh0a+3few9xWIsPgI3fS/La3kPMxPIHFmMTAfdL8m+9Z5nJK5L8fu8htmEVAdBaa0ke03uOGTj2BxantfacTCcBa4yAR212zuKtIgCSpLX2zEwnAWvx1kzL/029BwHYr5VGwDNaa2f0HmJbVhMAG9+U5FW9h9iCt2Y69rf8gcXaRMBabge8KskDeg+xTasKgM3bA987yTm9ZzkEV/7AarTWnp3lR8A5Se612TGrsaoASJLW2j9nuT9se8v/73sPArAtmwj4qizzefnfktyvtfYvvQfZttUFQJK01v40yYN7z7FP/y+WP7BSrbVnZZkR8J2bnbI6qwyAJGmtPS3Jd2QZP2yvSPJllj+wZpsIuEuSd/ae5QR8JMmDWmtP7z3IXFYbAEnSWntqkq/IdHW9q56e5NabWxcAq9ZaOyvJTZP8Ze9ZLsLbktymtfaU3oPMadUBkCSttZcnuUmSM3vP8inOT/ItrbUHttbW/q5ZAB+3uZ/+5ZkugHbNS5PctLX2st6DzG31AZAkrbV3Jjk9yeOTfKzzOEny5kxX/Yt/L2mAg2itfbi19sAk35rdeevgJye5fWvt7b0HOQpDBEAyfWZAa+1RSW6Y6W0ce7yT09uTPCTJaa21v+rw+AA7ZfN6rVMznQb0en/9FyS5RWvtIWt4j/8TNUwA7Gmtva61dv8kN07yR0f0sOckeXiSq7fWnuzIH+ATWmtv2ZwGXCfJbyT56BE99EuSfEVr7c6ttb84osfcGcMFwJ7W2mtaa/dJ8iVJfjvJe2Z4mFcneWSmxf+k1tp5MzwGwCq01v6htfYNSa6X6aPe3zfDw/xbkhcmuVNr7TattZfO8BiLcMneA/S2OYr/mqq6RJIvTXLXJHdLcqMktc8v975MP1jPS/K81trZ25wVYASttTck+fqqumSSW2Z6Xr5rpuflg3hLpuflP0lyRmvtg1sZdOFqJR9qtHVVdcUkN0hyheP+XDHJ5ZOcl+l+/juO+/utSV450v0jtqOqfjbTa0NG8prW2kGfzBlUVZ2c5FZJTk5yUqbn5L2/PyvT8/HZmz97//mVrbXXdxl4xw1/AnBhNq8CHeKVoABL0Fp7W6YXcbMFw74GAABGJgAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAAAGJAAAYEACAPr7cO8BOhjxe4adIgCgv7f3HqCDEb9n2CkCAPp7W+8BOhjxe4adIgCgvxGX4YjfM+wUAQD9jbgMR/yeYacIAOjv7N4DdCAAoDMBAJ211s5Nck7vOY7YP/UeAEYnAGA3PK/3AEfoLa211/ceAkYnAGA3/HHvAY7QSN8r7CwBALvh+UnO7z3EEREAsAMEAOyAzesAXth7jiPwniQv6T0EIABgl4xwZfyc1tq/9x4CEACwS/4wyft7DzGzX+89ADARALAjWmvvTvKE3nPM6AWttTN6DwFMqrXWewZgo6ouneTvk5zUe5Yta0lu0lp7de9BgIkTANghmxcD/nDvOWbwW5Y/7BYnALBjquqSSV6X5Nq9Z9mSDye5dmvtn3sPAnyCEwDYMZtXyT8007H5Gjze8ofdIwBgB7XWnpvksb3n2IJnZ523NGDx3AKAHVZVz0jy1b3nOKDXJblla+0DvQcBPp0AgB1WVZ+T5KVJbtp7ln16V5Kbt9be3HsQ4IK5BQA7rLV2XpJ7JTm79yz78JEkX2X5w24TALDjWmtvTXKbJH/Xe5YT8N4kd2+tvbj3IMBFEwCwAK21NyW5RZLn9p7lIrwxyS1aayN8qBEsngCAhWitvT/JPZP8VO9ZLsALMy3/N/YeBDgxAgAWpLX2sdbaI5N8fZIP9p4nyceS/EySu7bW3tt7GODECQBYoNbabya5ZpKnJOn18brPz/T+/g9rrX200wzAAfk1QFi4qjo1yeOS3PuIHvKVSR7pk/1g2QQArERV3TrJzgf3MAAAAGlJREFUI5PcKcmltvzlP5bkZUl+KcnvNE8csHgCAFZm85HCp2d6/4B7JLnsAb/UeUlelOSPkzyrtXbOdiYEdoEAgBWrqkskuVWSGyc5+bg/J23+/qxMbzL0tuP+nJ3kDUletPl4YmCF/j8jV7Bq55baLAAAAABJRU5ErkJggg==",
        lt = {
          root: "playground_root__26b6n",
          instruction: "playground_instruction__XYzhW",
          container: "playground_container__ocElN",
          "drag-drop": "playground_drag-drop__1XpvZ",
          "upload-button": "playground_upload-button__udhf2",
          "save-button": "playground_save-button__+rXCe",
          buttons: "playground_buttons__2gCQt",
          label: "playground_label__RBd5j",
          "image-upload-input": "playground_image-upload-input__S5iT1",
          "canvas-wrapper": "playground_canvas-wrapper__MCZeu",
        };
      function ot() {
        var t = l((0, e.useState)(!1), 2),
          n = t[0],
          r = t[1],
          a = (0, e.useRef)(null),
          o = (function (t) {
            var n = l((0, e.useState)(null), 2),
              r = n[0],
              a = n[1],
              o = l((0, e.useState)(!1), 2),
              i = o[0],
              u = o[1];
            return (
              (0, e.useEffect)(
                function () {
                  u(!1);
                },
                [r]
              ),
              {
                image: r,
                handleImageUpload: function (e) {
                  if (e.target.files.length) {
                    var t = e.target.files[0];
                    if (t && t.type.match(/^image\//)) {
                      var n = new FileReader();
                      (n.onload = function (e) {
                        var t = new Image();
                        (t.onload = function () {
                          u(!0);
                        }),
                          (t.src = e.target.result),
                          a(t);
                      }),
                        n.readAsDataURL(t);
                    } else a(null);
                  }
                },
                imageLoaded: i,
              }
            );
          })(),
          i = o.image,
          u = o.handleImageUpload,
          c = o.imageLoaded;
        return (0, ye.jsxs)("div", {
          className: lt.root,
          children: [
            (0, ye.jsxs)("header", {
              children: [
                (0, ye.jsx)("h1", { children: "LILCAT" }),
                (0, ye.jsxs)("span", {
                  className: lt.instruction,
                  children: [
                    "Hold ",
                    (0, ye.jsx)("b", { children: "CTRL " }),
                    "or ",
                    (0, ye.jsx)("b", { children: "CMD" }),
                    " on a sticker and ",
                    (0, ye.jsx)("b", { children: "DRAG" }),
                    " to the",
                    " ",
                    (0, ye.jsx)("b", { children: "RIGHT \u2192" }),
                    " to ",
                    (0, ye.jsx)("b", { children: "SCALE" }),
                    " or ",
                    (0, ye.jsx)("b", { children: "UP \u2191" }),
                    " to",
                    " ",
                    (0, ye.jsx)("b", { children: "ROTATE" }),
                  ],
                }),
              ],
            }),
            (0, ye.jsxs)("div", {
              className: lt.container,
              style: { border: i ? "0" : " 2px dashed #aeaeae" },
              children: [
                (0, ye.jsxs)("div", {
                  className: lt["drag-drop"],
                  style: { display: i ? "none" : "flex" },
                  onDragOver: function (e) {
                    e.preventDefault(), e.stopPropagation();
                  },
                  onDrop: function (e) {
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      e.dataTransfer.files && e.dataTransfer.files.length > 0)
                    ) {
                      var t = { target: e.dataTransfer };
                      u(t);
                    }
                  },
                  children: [
                    (0, ye.jsx)("input", {
                      type: "file",
                      id: "imageUpload",
                      accept: "image/*",
                      className: lt["image-upload-input"],
                      onChange: u,
                      style: { display: "none" },
                    }),
                    (0, ye.jsx)("label", {
                      htmlFor: "imageUpload",
                      children: "Drop your image here",
                    }),
                  ],
                }),
                (0, ye.jsx)("div", {
                  className: lt["canvas-wrapper"],
                  style: { display: i ? "block" : "none" },
                  children: (0, ye.jsx)(rt, {
                    uploadedImage: i,
                    imageLoaded: c,
                    imgCanvasRef: a,
                    saveImage: n,
                    setSaveImage: r,
                  }),
                }),
                (0, ye.jsxs)("div", {
                  className: lt.buttons,
                  style: { display: i ? "flex" : "none" },
                  children: [
                    (0, ye.jsxs)("div", {
                      className: lt["upload-button"],
                      children: [
                        (0, ye.jsx)("input", {
                          type: "file",
                          id: "imageUpload",
                          accept: "image/*",
                          className: lt["image-upload-input"],
                          onChange: u,
                          style: { display: "none" },
                        }),
                        (0, ye.jsx)("label", {
                          htmlFor: "imageUpload",
                          className: lt.label,
                          children: (0, ye.jsx)("img", {
                            src: at,
                            alt: "",
                            draggable: !1,
                          }),
                        }),
                      ],
                    }),
                    (0, ye.jsx)("button", {
                      className: lt["save-button"],
                      onClick: function () {
                        r(!0), console.log("SAVE IMAGE");
                      },
                      children: "Save",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var it = function () {
          return (
            (0, e.useEffect)(function () {
              var e = function (e) {
                document.documentElement.style.setProperty(
                  "--vh",
                  "".concat(0.01 * window.innerHeight, "px")
                );
              };
              return (
                e(),
                window.addEventListener("resize", e),
                function () {
                  return window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, ye.jsx)(et, {
              children: (0, ye.jsx)("div", {
                className: "App",
                children: (0, ye.jsx)(ot, {}),
              }),
            })
          );
        },
        ut = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  l = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), a(e), l(e), o(e);
              });
        };
      t
        .createRoot(document.getElementById("root"))
        .render((0, ye.jsx)(e.StrictMode, { children: (0, ye.jsx)(it, {}) })),
        "serviceWorker" in navigator &&
          window.addEventListener("load", function () {
            navigator.serviceWorker
              .register("%PUBLIC_URL%/service-worker.js")
              .then(function (e) {
                console.log("Service Worker registered: ", e);
              })
              .catch(function (e) {
                console.log("Service Worker registration failed: ", e);
              });
          }),
        ut();

    })();
})();
