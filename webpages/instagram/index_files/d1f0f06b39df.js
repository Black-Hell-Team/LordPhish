window.v = (function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 36))
  );
})([
  function (t, e, n) {
    "use strict";
    t.exports = n(44);
  },
  function (t, e, n) {
    "use strict";
    var r = function () {};
    t.exports = r;
  },
  function (t, e, n) {
    t.exports = n(57)();
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, r, i, o, a, s) {
      if (!t) {
        var u;
        if (void 0 === e)
          u = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var c = [n, r, i, o, a, s],
            l = 0;
          (u = new Error(
            e.replace(/%s/g, function () {
              return c[l++];
            })
          )).name = "Invariant Violation";
        }
        throw ((u.framesToPop = 1), u);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    (e.addLeadingSlash = function (t) {
      return "/" === t.charAt(0) ? t : "/" + t;
    }),
      (e.stripLeadingSlash = function (t) {
        return "/" === t.charAt(0) ? t.substr(1) : t;
      });
    var r = (e.hasBasename = function (t, e) {
      return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t);
    });
    (e.stripBasename = function (t, e) {
      return r(t, e) ? t.substr(e.length) : t;
    }),
      (e.stripTrailingSlash = function (t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
      }),
      (e.parsePath = function (t) {
        var e = t || "/",
          n = "",
          r = "",
          i = e.indexOf("#");
        -1 !== i && ((r = e.substr(i)), (e = e.substr(0, i)));
        var o = e.indexOf("?");
        return (
          -1 !== o && ((n = e.substr(o)), (e = e.substr(0, o))),
          { pathname: e, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      }),
      (e.createPath = function (t) {
        var e = t.pathname,
          n = t.search,
          r = t.hash,
          i = e || "/";
        return (
          n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
          i
        );
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "addLeadingSlash", function () {
        return r;
      }),
      n.d(e, "stripLeadingSlash", function () {
        return i;
      }),
      n.d(e, "hasBasename", function () {
        return o;
      }),
      n.d(e, "stripBasename", function () {
        return a;
      }),
      n.d(e, "stripTrailingSlash", function () {
        return s;
      }),
      n.d(e, "parsePath", function () {
        return u;
      }),
      n.d(e, "createPath", function () {
        return c;
      });
    var r = function (t) {
        return "/" === t.charAt(0) ? t : "/" + t;
      },
      i = function (t) {
        return "/" === t.charAt(0) ? t.substr(1) : t;
      },
      o = function (t, e) {
        return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t);
      },
      a = function (t, e) {
        return o(t, e) ? t.substr(e.length) : t;
      },
      s = function (t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
      },
      u = function (t) {
        var e = t || "/",
          n = "",
          r = "",
          i = e.indexOf("#");
        -1 !== i && ((r = e.substr(i)), (e = e.substr(0, i)));
        var o = e.indexOf("?");
        return (
          -1 !== o && ((n = e.substr(o)), (e = e.substr(0, o))),
          { pathname: e, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      },
      c = function (t) {
        var e = t.pathname,
          n = t.search,
          r = t.hash,
          i = e || "/";
        return (
          n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
          i
        );
      };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return function () {
        return t;
      };
    }
    var i = function () {};
    (i.thatReturns = r),
      (i.thatReturnsFalse = r(!1)),
      (i.thatReturnsTrue = r(!0)),
      (i.thatReturnsNull = r(null)),
      (i.thatReturnsThis = function () {
        return this;
      }),
      (i.thatReturnsArgument = function (t) {
        return t;
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "createLocation", function () {
        return s;
      }),
      n.d(e, "locationsAreEqual", function () {
        return u;
      });
    var r = n(29),
      i = n(30),
      o = n(5),
      a =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      s = function (t, e, n, i) {
        var s = void 0;
        "string" == typeof t
          ? ((s = Object(o.parsePath)(t)).state = e)
          : (void 0 === (s = a({}, t)).pathname && (s.pathname = ""),
            s.search
              ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search)
              : (s.search = ""),
            s.hash
              ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash)
              : (s.hash = ""),
            void 0 !== e && void 0 === s.state && (s.state = e));
        try {
          s.pathname = decodeURI(s.pathname);
        } catch (t) {
          throw t instanceof URIError
            ? new URIError(
                'Pathname "' +
                  s.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : t;
        }
        return (
          n && (s.key = n),
          i
            ? s.pathname
              ? "/" !== s.pathname.charAt(0) &&
                (s.pathname = Object(r.default)(s.pathname, i.pathname))
              : (s.pathname = i.pathname)
            : s.pathname || (s.pathname = "/"),
          s
        );
      },
      u = function (t, e) {
        return (
          t.pathname === e.pathname &&
          t.search === e.search &&
          t.hash === e.hash &&
          t.key === e.key &&
          Object(i.default)(t.state, e.state)
        );
      };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error(t);
        try {
          throw new Error(t);
        } catch (t) {}
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(64),
      i = n(69),
      o = n(71),
      a = "[object Object]",
      s = Function.prototype,
      u = Object.prototype,
      c = s.toString,
      l = u.hasOwnProperty,
      f = c.call(Object);
    e.default = function (t) {
      if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
      var e = Object(i.default)(t);
      if (null === e) return !0;
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && c.call(n) == f;
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.__esModule = !0), (e.locationsAreEqual = e.createLocation = void 0);
    var i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      o = r(n(29)),
      a = r(n(30)),
      s = n(4);
    (e.createLocation = function (t, e, n, r) {
      var a = void 0;
      "string" == typeof t
        ? ((a = (0, s.parsePath)(t)).state = e)
        : (void 0 === (a = i({}, t)).pathname && (a.pathname = ""),
          a.search
            ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search)
            : (a.search = ""),
          a.hash
            ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash)
            : (a.hash = ""),
          void 0 !== e && void 0 === a.state && (a.state = e));
      try {
        a.pathname = decodeURI(a.pathname);
      } catch (t) {
        throw t instanceof URIError
          ? new URIError(
              'Pathname "' +
                a.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : t;
      }
      return (
        n && (a.key = n),
        r
          ? a.pathname
            ? "/" !== a.pathname.charAt(0) &&
              (a.pathname = (0, o.default)(a.pathname, r.pathname))
            : (a.pathname = r.pathname)
          : a.pathname || (a.pathname = "/"),
        a
      );
    }),
      (e.locationsAreEqual = function (t, e) {
        return (
          t.pathname === e.pathname &&
          t.search === e.search &&
          t.hash === e.hash &&
          t.key === e.key &&
          (0, a.default)(t.state, e.state)
        );
      });
  },
  function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(n(1));
    e.default = function () {
      var t = null,
        e = [];
      return {
        setPrompt: function (e) {
          return (
            (0, r.default)(
              null == t,
              "A history supports only one prompt at a time"
            ),
            (t = e),
            function () {
              t === e && (t = null);
            }
          );
        },
        confirmTransitionTo: function (e, n, i, o) {
          if (null != t) {
            var a = "function" == typeof t ? t(e, n) : t;
            "string" == typeof a
              ? "function" == typeof i
                ? i(a, o)
                : ((0, r.default)(
                    !1,
                    "A history needs a getUserConfirmation function in order to use a prompt message"
                  ),
                  o(!0))
              : o(!1 !== a);
          } else o(!0);
        },
        appendListener: function (t) {
          var n = !0,
            r = function () {
              n && t.apply(void 0, arguments);
            };
          return (
            e.push(r),
            function () {
              (n = !1),
                (e = e.filter(function (t) {
                  return t !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          e.forEach(function (t) {
            return t.apply(void 0, n);
          });
        },
      };
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(13);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n.n(a),
      u = n(3),
      c = n.n(u),
      l = n(0),
      f = n.n(l),
      h = n(2),
      p = n.n(h),
      d =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      m = (function (t) {
        function e() {
          var n, o, a;
          r(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = o = i(this, t.call.apply(t, [this].concat(u)))),
            (o.state = {
              match: o.computeMatch(o.props.history.location.pathname),
            }),
            (a = n),
            i(o, a)
          );
        }
        return (
          o(e, t),
          (e.prototype.getChildContext = function () {
            return {
              router: d({}, this.context.router, {
                history: this.props.history,
                route: {
                  location: this.props.history.location,
                  match: this.state.match,
                },
              }),
            };
          }),
          (e.prototype.computeMatch = function (t) {
            return { path: "/", url: "/", params: {}, isExact: "/" === t };
          }),
          (e.prototype.componentWillMount = function () {
            var t = this,
              e = this.props,
              n = e.children,
              r = e.history;
            c()(
              null == n || 1 === f.a.Children.count(n),
              "A <Router> may have only one child element"
            ),
              (this.unlisten = r.listen(function () {
                t.setState({ match: t.computeMatch(r.location.pathname) });
              }));
          }),
          (e.prototype.componentWillReceiveProps = function (t) {
            s()(
              this.props.history === t.history,
              "You cannot change <Router history>"
            );
          }),
          (e.prototype.componentWillUnmount = function () {
            this.unlisten();
          }),
          (e.prototype.render = function () {
            var t = this.props.children;
            return t ? f.a.Children.only(t) : null;
          }),
          e
        );
      })(f.a.Component);
    (m.propTypes = { history: p.a.object.isRequired, children: p.a.node }),
      (m.contextTypes = { router: p.a.object }),
      (m.childContextTypes = { router: p.a.object.isRequired }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(92),
      i = n.n(r),
      o = {},
      a = 0,
      s = function (t, e) {
        var n = "" + e.end + e.strict + e.sensitive,
          r = o[n] || (o[n] = {});
        if (r[t]) return r[t];
        var s = [],
          u = { re: i()(t, s, e), keys: s };
        return a < 1e4 && ((r[t] = u), a++), u;
      };
    e.default = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      "string" == typeof e && (e = { path: e });
      var n = e,
        r = n.path,
        i = void 0 === r ? "/" : r,
        o = n.exact,
        a = void 0 !== o && o,
        u = n.strict,
        c = void 0 !== u && u,
        l = n.sensitive,
        f = s(i, { end: a, strict: c, sensitive: void 0 !== l && l }),
        h = f.re,
        p = f.keys,
        d = h.exec(t);
      if (!d) return null;
      var m = d[0],
        v = d.slice(1),
        y = t === m;
      return a && !y
        ? null
        : {
            path: i,
            url: "/" === i && "" === m ? "/" : m,
            isExact: y,
            params: p.reduce(function (t, e, n) {
              return (t[e.name] = v[n]), t;
            }, {}),
          };
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      i = n.n(r);
    e.default = function () {
      var t = null,
        e = [];
      return {
        setPrompt: function (e) {
          return (
            i()(null == t, "A history supports only one prompt at a time"),
            (t = e),
            function () {
              t === e && (t = null);
            }
          );
        },
        confirmTransitionTo: function (e, n, r, o) {
          if (null != t) {
            var a = "function" == typeof t ? t(e, n) : t;
            "string" == typeof a
              ? "function" == typeof r
                ? r(a, o)
                : (i()(
                    !1,
                    "A history needs a getUserConfirmation function in order to use a prompt message"
                  ),
                  o(!0))
              : o(!1 !== a);
          } else o(!0);
        },
        appendListener: function (t) {
          var n = !0,
            r = function () {
              n && t.apply(void 0, arguments);
            };
          return (
            e.push(r),
            function () {
              (n = !1),
                (e = e.filter(function (t) {
                  return t !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          e.forEach(function (t) {
            return t.apply(void 0, n);
          });
        },
      };
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      if (null === t || void 0 === t)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(t);
    } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var i = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    t.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, n = 0; n < 10; n++)
          e["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (var n, s, u = r(t), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var l in n) o.call(n, l) && (u[l] = n[l]);
            if (i) {
              s = i(n);
              for (var f = 0; f < s.length; f++)
                a.call(n, s[f]) && (u[s[f]] = n[s[f]]);
            }
          }
          return u;
        };
  },
  function (t, e, n) {
    "use strict";
    var r = {};
    t.exports = r;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "subscriptionShape", function () {
        return o;
      }),
      n.d(e, "storeShape", function () {
        return a;
      });
    var r = n(2),
      i = n.n(r),
      o = i.a.shape({
        trySubscribe: i.a.func.isRequired,
        tryUnsubscribe: i.a.func.isRequired,
        notifyNestedSubs: i.a.func.isRequired,
        isSubscribed: i.a.func.isRequired,
      }),
      a = i.a.shape({
        subscribe: i.a.func.isRequired,
        dispatch: i.a.func.isRequired,
        getState: i.a.func.isRequired,
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function a(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    function s() {}
    function u(t, e) {
      var n = {
        run: function (r) {
          try {
            var i = t(e.getState(), r);
            (i !== n.props || n.error) &&
              ((n.shouldComponentUpdate = !0), (n.props = i), (n.error = null));
          } catch (t) {
            (n.shouldComponentUpdate = !0), (n.error = t);
          }
        },
      };
      return n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e,
          n,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          f = c.getDisplayName,
          b =
            void 0 === f
              ? function (t) {
                  return "ConnectAdvanced(" + t + ")";
                }
              : f,
          w = c.methodName,
          _ = void 0 === w ? "connectAdvanced" : w,
          E = c.renderCountProp,
          T = void 0 === E ? void 0 : E,
          S = c.shouldHandleStateChanges,
          x = void 0 === S || S,
          O = c.storeKey,
          P = void 0 === O ? "store" : O,
          k = c.withRef,
          C = void 0 !== k && k,
          I = a(c, [
            "getDisplayName",
            "methodName",
            "renderCountProp",
            "shouldHandleStateChanges",
            "storeKey",
            "withRef",
          ]),
          M = P + "Subscription",
          A = y++,
          R =
            ((e = {}), (e[P] = m.storeShape), (e[M] = m.subscriptionShape), e),
          N = ((n = {}), (n[M] = m.subscriptionShape), n);
        return function (e) {
          h()(
            "function" == typeof e,
            "You must pass a component to the function returned by connect. Instead received " +
              JSON.stringify(e)
          );
          var n = e.displayName || e.name || "Component",
            a = b(n),
            c = v({}, I, {
              getDisplayName: b,
              methodName: _,
              renderCountProp: T,
              shouldHandleStateChanges: x,
              storeKey: P,
              withRef: C,
              displayName: a,
              wrappedComponentName: n,
              WrappedComponent: e,
            }),
            f = (function (n) {
              function l(t, e) {
                r(this, l);
                var o = i(this, n.call(this, t, e));
                return (
                  (o.version = A),
                  (o.state = {}),
                  (o.renderCount = 0),
                  (o.store = t[P] || e[P]),
                  (o.propsMode = Boolean(t[P])),
                  (o.setWrappedInstance = o.setWrappedInstance.bind(o)),
                  h()(
                    o.store,
                    'Could not find "' +
                      P +
                      '" in either the context or props of "' +
                      a +
                      '". Either wrap the root component in a <Provider>, or explicitly pass "' +
                      P +
                      '" as a prop to "' +
                      a +
                      '".'
                  ),
                  o.initSelector(),
                  o.initSubscription(),
                  o
                );
              }
              return (
                o(l, n),
                (l.prototype.getChildContext = function () {
                  var t,
                    e = this.propsMode ? null : this.subscription;
                  return (t = {}), (t[M] = e || this.context[M]), t;
                }),
                (l.prototype.componentDidMount = function () {
                  x &&
                    (this.subscription.trySubscribe(),
                    this.selector.run(this.props),
                    this.selector.shouldComponentUpdate && this.forceUpdate());
                }),
                (l.prototype.componentWillReceiveProps = function (t) {
                  this.selector.run(t);
                }),
                (l.prototype.shouldComponentUpdate = function () {
                  return this.selector.shouldComponentUpdate;
                }),
                (l.prototype.componentWillUnmount = function () {
                  this.subscription && this.subscription.tryUnsubscribe(),
                    (this.subscription = null),
                    (this.notifyNestedSubs = s),
                    (this.store = null),
                    (this.selector.run = s),
                    (this.selector.shouldComponentUpdate = !1);
                }),
                (l.prototype.getWrappedInstance = function () {
                  return (
                    h()(
                      C,
                      "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " +
                        _ +
                        "() call."
                    ),
                    this.wrappedInstance
                  );
                }),
                (l.prototype.setWrappedInstance = function (t) {
                  this.wrappedInstance = t;
                }),
                (l.prototype.initSelector = function () {
                  var e = t(this.store.dispatch, c);
                  (this.selector = u(e, this.store)),
                    this.selector.run(this.props);
                }),
                (l.prototype.initSubscription = function () {
                  if (x) {
                    var t = (this.propsMode ? this.props : this.context)[M];
                    (this.subscription = new d.default(
                      this.store,
                      t,
                      this.onStateChange.bind(this)
                    )),
                      (this.notifyNestedSubs =
                        this.subscription.notifyNestedSubs.bind(
                          this.subscription
                        ));
                  }
                }),
                (l.prototype.onStateChange = function () {
                  this.selector.run(this.props),
                    this.selector.shouldComponentUpdate
                      ? ((this.componentDidUpdate =
                          this.notifyNestedSubsOnComponentDidUpdate),
                        this.setState(g))
                      : this.notifyNestedSubs();
                }),
                (l.prototype.notifyNestedSubsOnComponentDidUpdate =
                  function () {
                    (this.componentDidUpdate = void 0), this.notifyNestedSubs();
                  }),
                (l.prototype.isSubscribed = function () {
                  return (
                    Boolean(this.subscription) &&
                    this.subscription.isSubscribed()
                  );
                }),
                (l.prototype.addExtraProps = function (t) {
                  if (!(C || T || (this.propsMode && this.subscription)))
                    return t;
                  var e = v({}, t);
                  return (
                    C && (e.ref = this.setWrappedInstance),
                    T && (e[T] = this.renderCount++),
                    this.propsMode &&
                      this.subscription &&
                      (e[M] = this.subscription),
                    e
                  );
                }),
                (l.prototype.render = function () {
                  var t = this.selector;
                  if (((t.shouldComponentUpdate = !1), t.error)) throw t.error;
                  return Object(p.createElement)(
                    e,
                    this.addExtraProps(t.props)
                  );
                }),
                l
              );
            })(p.Component);
          return (
            (f.WrappedComponent = e),
            (f.displayName = a),
            (f.childContextTypes = N),
            (f.contextTypes = R),
            (f.propTypes = R),
            l()(f, e)
          );
        };
      });
    var c = n(20),
      l = n.n(c),
      f = n(3),
      h = n.n(f),
      p = n(0),
      d = (n.n(p), n(60)),
      m = n(18),
      v =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      y = 0,
      g = {};
  },
  function (t, e, n) {
    "use strict";
    var r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      o = Object.defineProperty,
      a = Object.getOwnPropertyNames,
      s = Object.getOwnPropertySymbols,
      u = Object.getOwnPropertyDescriptor,
      c = Object.getPrototypeOf,
      l = c && c(Object);
    t.exports = function t(e, n, f) {
      if ("string" != typeof n) {
        if (l) {
          var h = c(n);
          h && h !== l && t(e, h, f);
        }
        var p = a(n);
        s && (p = p.concat(s(n)));
        for (var d = 0; d < p.length; ++d) {
          var m = p[d];
          if (!(r[m] || i[m] || (f && f[m]))) {
            var v = u(n, m);
            try {
              o(e, m, v);
            } catch (t) {}
          }
        }
        return e;
      }
      return e;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(22),
      i = n(76),
      o = n(77),
      a = n(78),
      s = n(26);
    n(25);
    n.d(e, "createStore", function () {
      return r.default;
    }),
      n.d(e, "combineReducers", function () {
        return i.default;
      }),
      n.d(e, "bindActionCreators", function () {
        return o.default;
      }),
      n.d(e, "applyMiddleware", function () {
        return a.default;
      }),
      n.d(e, "compose", function () {
        return s.default;
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      function o() {
        m === d && (m = d.slice());
      }
      function u() {
        return p;
      }
      function c(t) {
        if ("function" != typeof t)
          throw new Error("Expected listener to be a function.");
        var e = !0;
        return (
          o(),
          m.push(t),
          function () {
            if (e) {
              (e = !1), o();
              var n = m.indexOf(t);
              m.splice(n, 1);
            }
          }
        );
      }
      function l(t) {
        if (!Object(i.default)(t))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (v) throw new Error("Reducers may not dispatch actions.");
        try {
          (v = !0), (p = h(p, t));
        } finally {
          v = !1;
        }
        for (var e = (d = m), n = 0; n < e.length; n++) (0, e[n])();
        return t;
      }
      var f;
      if (
        ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(r)(t, e);
      }
      if ("function" != typeof t)
        throw new Error("Expected the reducer to be a function.");
      var h = t,
        p = e,
        d = [],
        m = d,
        v = !1;
      return (
        l({ type: s.INIT }),
        (f = {
          dispatch: l,
          subscribe: c,
          getState: u,
          replaceReducer: function (t) {
            if ("function" != typeof t)
              throw new Error("Expected the nextReducer to be a function.");
            (h = t), l({ type: s.INIT });
          },
        }),
        (f[a.a] = function () {
          var t,
            e = c;
          return (
            (t = {
              subscribe: function (t) {
                function n() {
                  t.next && t.next(u());
                }
                if ("object" != typeof t)
                  throw new TypeError("Expected the observer to be an object.");
                return n(), { unsubscribe: e(n) };
              },
            }),
            (t[a.a] = function () {
              return this;
            }),
            t
          );
        }),
        f
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "ActionTypes", function () {
        return s;
      }),
      (e.default = r);
    var i = n(9),
      o = n(72),
      a = n.n(o),
      s = { INIT: "@@redux/INIT" };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(65).default.Symbol;
    e.default = r;
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error(t);
        try {
          throw new Error(t);
        } catch (t) {}
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return 0 === e.length
          ? function (t) {
              return t;
            }
          : 1 === e.length
          ? e[0]
          : e.reduce(function (t, e) {
              return function () {
                return t(e.apply(void 0, arguments));
              };
            });
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps
        ? Boolean(t.dependsOnOwnProps)
        : 1 !== t.length;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.wrapMapToPropsConstant = function (t) {
        return function (e, n) {
          function r() {
            return i;
          }
          var i = t(e, n);
          return (r.dependsOnOwnProps = !1), r;
        };
      }),
      (e.getDependsOnOwnProps = r),
      (e.wrapMapToPropsFunc = function (t, e) {
        return function (e, n) {
          n.displayName;
          var i = function (t, e) {
            return i.dependsOnOwnProps ? i.mapToProps(t, e) : i.mapToProps(t);
          };
          return (
            (i.dependsOnOwnProps = !0),
            (i.mapToProps = function (e, n) {
              (i.mapToProps = t), (i.dependsOnOwnProps = r(t));
              var o = i(e, n);
              return (
                "function" == typeof o &&
                  ((i.mapToProps = o),
                  (i.dependsOnOwnProps = r(o)),
                  (o = i(e, n))),
                o
              );
            }),
            i
          );
        };
      });
    n(28);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e, n) {
        Object(r.default)(t) ||
          Object(i.default)(
            n +
              "() in " +
              e +
              " must return a plain object. Instead received " +
              t +
              "."
          );
      });
    var r = n(9),
      i = n(8);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return "/" === t.charAt(0);
    }
    function i(t, e) {
      for (var n = e, r = n + 1, i = t.length; r < i; n += 1, r += 1)
        t[n] = t[r];
      t.pop();
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = (t && t.split("/")) || [],
          o = (e && e.split("/")) || [],
          a = t && r(t),
          s = e && r(e),
          u = a || s;
        if (
          (t && r(t) ? (o = n) : n.length && (o.pop(), (o = o.concat(n))),
          !o.length)
        )
          return "/";
        var c = void 0;
        if (o.length) {
          var l = o[o.length - 1];
          c = "." === l || ".." === l || "" === l;
        } else c = !1;
        for (var f = 0, h = o.length; h >= 0; h--) {
          var p = o[h];
          "." === p
            ? i(o, h)
            : ".." === p
            ? (i(o, h), f++)
            : f && (i(o, h), f--);
        }
        if (!u) for (; f--; f) o.unshift("..");
        !u || "" === o[0] || (o[0] && r(o[0])) || o.unshift("");
        var d = o.join("/");
        return c && "/" !== d.substr(-1) && (d += "/"), d;
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (t === e) return !0;
      if (null == t || null == e) return !1;
      if (Array.isArray(t))
        return (
          Array.isArray(e) &&
          t.length === e.length &&
          t.every(function (t, n) {
            return r(t, e[n]);
          })
        );
      var n = void 0 === t ? "undefined" : i(t);
      if (n !== (void 0 === e ? "undefined" : i(e))) return !1;
      if ("object" === n) {
        var o = t.valueOf(),
          a = e.valueOf();
        if (o !== t || a !== e) return r(o, a);
        var s = Object.keys(t),
          u = Object.keys(e);
        return (
          s.length === u.length &&
          s.every(function (n) {
            return r(t[n], e[n]);
          })
        );
      }
      return !1;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    (e.canUseDOM = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    )),
      (e.addEventListener = function (t, e, n) {
        return t.addEventListener
          ? t.addEventListener(e, n, !1)
          : t.attachEvent("on" + e, n);
      }),
      (e.removeEventListener = function (t, e, n) {
        return t.removeEventListener
          ? t.removeEventListener(e, n, !1)
          : t.detachEvent("on" + e, n);
      }),
      (e.getConfirmation = function (t, e) {
        return e(window.confirm(t));
      }),
      (e.supportsHistory = function () {
        var t = window.navigator.userAgent;
        return (
          ((-1 === t.indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history
        );
      }),
      (e.supportsPopStateOnHashChange = function () {
        return -1 === window.navigator.userAgent.indexOf("Trident");
      }),
      (e.supportsGoWithoutReloadUsingHash = function () {
        return -1 === window.navigator.userAgent.indexOf("Firefox");
      }),
      (e.isExtraneousPopstateEvent = function (t) {
        return (
          void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
        );
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = n(0),
      u = n.n(s),
      c = n(2),
      l = n.n(c),
      f = n(3),
      h = n.n(f),
      p =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      d = function (t) {
        return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
      },
      m = (function (t) {
        function e() {
          var n, r, a;
          i(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = r = o(this, t.call.apply(t, [this].concat(u)))),
            (r.handleClick = function (t) {
              if (
                (r.props.onClick && r.props.onClick(t),
                !t.defaultPrevented &&
                  0 === t.button &&
                  !r.props.target &&
                  !d(t))
              ) {
                t.preventDefault();
                var e = r.context.router.history,
                  n = r.props,
                  i = n.replace,
                  o = n.to;
                i ? e.replace(o) : e.push(o);
              }
            }),
            (a = n),
            o(r, a)
          );
        }
        return (
          a(e, t),
          (e.prototype.render = function () {
            var t = this.props,
              e = (t.replace, t.to),
              n = t.innerRef,
              i = r(t, ["replace", "to", "innerRef"]);
            h()(
              this.context.router,
              "You should not use <Link> outside a <Router>"
            );
            var o = this.context.router.history.createHref(
              "string" == typeof e ? { pathname: e } : e
            );
            return u.a.createElement(
              "a",
              p({}, i, { onClick: this.handleClick, href: o, ref: n })
            );
          }),
          e
        );
      })(u.a.Component);
    (m.propTypes = {
      onClick: l.a.func,
      target: l.a.string,
      replace: l.a.bool,
      to: l.a.oneOfType([l.a.string, l.a.object]).isRequired,
      innerRef: l.a.oneOfType([l.a.string, l.a.func]),
    }),
      (m.defaultProps = { replace: !1 }),
      (m.contextTypes = {
        router: l.a.shape({
          history: l.a.shape({
            push: l.a.func.isRequired,
            replace: l.a.func.isRequired,
            createHref: l.a.func.isRequired,
          }).isRequired,
        }).isRequired,
      }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(34);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n.n(a),
      u = n(3),
      c = n.n(u),
      l = n(0),
      f = n.n(l),
      h = n(2),
      p = n.n(h),
      d = n(14),
      m =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      v = function (t) {
        return 0 === f.a.Children.count(t);
      },
      y = (function (t) {
        function e() {
          var n, o, a;
          r(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = o = i(this, t.call.apply(t, [this].concat(u)))),
            (o.state = { match: o.computeMatch(o.props, o.context.router) }),
            (a = n),
            i(o, a)
          );
        }
        return (
          o(e, t),
          (e.prototype.getChildContext = function () {
            return {
              router: m({}, this.context.router, {
                route: {
                  location:
                    this.props.location || this.context.router.route.location,
                  match: this.state.match,
                },
              }),
            };
          }),
          (e.prototype.computeMatch = function (t, e) {
            var n = t.computedMatch,
              r = t.location,
              i = t.path,
              o = t.strict,
              a = t.exact,
              s = t.sensitive;
            if (n) return n;
            c()(
              e,
              "You should not use <Route> or withRouter() outside a <Router>"
            );
            var u = e.route,
              l = (r || u.location).pathname;
            return i
              ? Object(d.default)(l, {
                  path: i,
                  strict: o,
                  exact: a,
                  sensitive: s,
                })
              : u.match;
          }),
          (e.prototype.componentWillMount = function () {
            s()(
              !(this.props.component && this.props.render),
              "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"
            ),
              s()(
                !(
                  this.props.component &&
                  this.props.children &&
                  !v(this.props.children)
                ),
                "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"
              ),
              s()(
                !(
                  this.props.render &&
                  this.props.children &&
                  !v(this.props.children)
                ),
                "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored"
              );
          }),
          (e.prototype.componentWillReceiveProps = function (t, e) {
            s()(
              !(t.location && !this.props.location),
              '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
            ),
              s()(
                !(!t.location && this.props.location),
                '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
              ),
              this.setState({ match: this.computeMatch(t, e.router) });
          }),
          (e.prototype.render = function () {
            var t = this.state.match,
              e = this.props,
              n = e.children,
              r = e.component,
              i = e.render,
              o = this.context.router,
              a = o.history,
              s = o.route,
              u = o.staticContext,
              c = {
                match: t,
                location: this.props.location || s.location,
                history: a,
                staticContext: u,
              };
            return r
              ? t
                ? f.a.createElement(r, c)
                : null
              : i
              ? t
                ? i(c)
                : null
              : n
              ? "function" == typeof n
                ? n(c)
                : v(n)
                ? null
                : f.a.Children.only(n)
              : null;
          }),
          e
        );
      })(f.a.Component);
    (y.propTypes = {
      computedMatch: p.a.object,
      path: p.a.string,
      exact: p.a.bool,
      strict: p.a.bool,
      sensitive: p.a.bool,
      component: p.a.func,
      render: p.a.func,
      children: p.a.oneOfType([p.a.func, p.a.node]),
      location: p.a.object,
    }),
      (y.contextTypes = {
        router: p.a.shape({
          history: p.a.object.isRequired,
          route: p.a.object.isRequired,
          staticContext: p.a.object,
        }),
      }),
      (y.childContextTypes = { router: p.a.object.isRequired }),
      (e.default = y);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "canUseDOM", function () {
        return r;
      }),
      n.d(e, "addEventListener", function () {
        return i;
      }),
      n.d(e, "removeEventListener", function () {
        return o;
      }),
      n.d(e, "getConfirmation", function () {
        return a;
      }),
      n.d(e, "supportsHistory", function () {
        return s;
      }),
      n.d(e, "supportsPopStateOnHashChange", function () {
        return u;
      }),
      n.d(e, "supportsGoWithoutReloadUsingHash", function () {
        return c;
      }),
      n.d(e, "isExtraneousPopstateEvent", function () {
        return l;
      });
    var r = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      i = function (t, e, n) {
        return t.addEventListener
          ? t.addEventListener(e, n, !1)
          : t.attachEvent("on" + e, n);
      },
      o = function (t, e, n) {
        return t.removeEventListener
          ? t.removeEventListener(e, n, !1)
          : t.detachEvent("on" + e, n);
      },
      a = function (t, e) {
        return e(window.confirm(t));
      },
      s = function () {
        var t = window.navigator.userAgent;
        return (
          ((-1 === t.indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history
        );
      },
      u = function () {
        return -1 === window.navigator.userAgent.indexOf("Trident");
      },
      c = function () {
        return -1 === window.navigator.userAgent.indexOf("Firefox");
      },
      l = function (t) {
        return (
          void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
        );
      };
  },
  function (t, e, n) {
    t.exports = n;
  },
  function (t, e, n) {
    n(38), n(43), n(0), n(45), n(55), n(83), n(21), n(109), n(110), n(111);
  },
  function (t, e, n) {
    function r(t, e, n) {
      n = n || {};
      var r = s(t) + "=" + s(e);
      null == e && (n.maxage = -1),
        n.maxage && (n.expires = new Date(+new Date() + n.maxage)),
        n.path && (r += "; path=" + n.path),
        n.domain && (r += "; domain=" + n.domain),
        n.expires && (r += "; expires=" + n.expires.toUTCString()),
        n.secure && (r += "; secure"),
        (document.cookie = r);
    }
    function i() {
      var t;
      try {
        t = document.cookie;
      } catch (t) {
        return (
          "undefined" != typeof console &&
            "function" == typeof console.error &&
            console.error(t.stack || t),
          {}
        );
      }
      return a(t);
    }
    function o(t) {
      return i()[t];
    }
    function a(t) {
      var e,
        n = {},
        r = t.split(/ *; */);
      if ("" == r[0]) return n;
      for (var i = 0; i < r.length; ++i)
        n[u((e = r[i].split("="))[0])] = u(e[1]);
      return n;
    }
    function s(t) {
      try {
        return encodeURIComponent(t);
      } catch (e) {
        c("error `encode(%o)` - %o", t, e);
      }
    }
    function u(t) {
      try {
        return decodeURIComponent(t);
      } catch (e) {
        c("error `decode(%o)` - %o", t, e);
      }
    }
    var c = n(39)("cookie");
    t.exports = function (t, e, n) {
      switch (arguments.length) {
        case 3:
        case 2:
          return r(t, e, n);
        case 1:
          return o(t);
        default:
          return i();
      }
    };
  },
  function (t, e, n) {
    (function (r) {
      function i() {
        var t;
        try {
          t = e.storage.debug;
        } catch (t) {}
        return "env" in (void 0 === r ? {} : r) && (t = r.env.DEBUG), t;
      }
      ((e = t.exports = n(41)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (e.formatArgs = function () {
          var t = arguments,
            n = this.useColors;
          if (
            ((t[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              t[0] +
              (n ? "%c " : " ") +
              "+" +
              e.humanize(this.diff)),
            !n)
          )
            return t;
          var r = "color: " + this.color,
            i = 0,
            o = 0;
          return (
            (t = [t[0], r, "color: inherit"].concat(
              Array.prototype.slice.call(t, 1)
            ))[0].replace(/%[a-z%]/g, function (t) {
              "%%" !== t && (i++, "%c" === t && (o = i));
            }),
            t.splice(o, 0, r),
            t
          );
        }),
        (e.save = function (t) {
          try {
            null == t ? e.storage.removeItem("debug") : (e.storage.debug = t);
          } catch (t) {}
        }),
        (e.load = i),
        (e.useColors = function () {
          return (
            ("undefined" != typeof document &&
              "WebkitAppearance" in document.documentElement.style) ||
            (window.console &&
              (console.firebug || (console.exception && console.table))) ||
            (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31)
          );
        }),
        (e.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (t) {}
              })()),
        (e.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (e.formatters.j = function (t) {
          return JSON.stringify(t);
        }),
        e.enable(i());
    }).call(e, n(40));
  },
  function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function i(t) {
      if (l === setTimeout) return setTimeout(t, 0);
      if ((l === n || !l) && setTimeout)
        return (l = setTimeout), setTimeout(t, 0);
      try {
        return l(t, 0);
      } catch (e) {
        try {
          return l.call(null, t, 0);
        } catch (e) {
          return l.call(this, t, 0);
        }
      }
    }
    function o(t) {
      if (f === clearTimeout) return clearTimeout(t);
      if ((f === r || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(t);
      try {
        return f(t);
      } catch (e) {
        try {
          return f.call(null, t);
        } catch (e) {
          return f.call(this, t);
        }
      }
    }
    function a() {
      m &&
        p &&
        ((m = !1), p.length ? (d = p.concat(d)) : (v = -1), d.length && s());
    }
    function s() {
      if (!m) {
        var t = i(a);
        m = !0;
        for (var e = d.length; e; ) {
          for (p = d, d = []; ++v < e; ) p && p[v].run();
          (v = -1), (e = d.length);
        }
        (p = null), (m = !1), o(t);
      }
    }
    function u(t, e) {
      (this.fun = t), (this.array = e);
    }
    function c() {}
    var l,
      f,
      h = (t.exports = {});
    !(function () {
      try {
        l = "function" == typeof setTimeout ? setTimeout : n;
      } catch (t) {
        l = n;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (t) {
        f = r;
      }
    })();
    var p,
      d = [],
      m = !1,
      v = -1;
    (h.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      d.push(new u(t, e)), 1 !== d.length || m || i(s);
    }),
      (u.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (h.title = "browser"),
      (h.browser = !0),
      (h.env = {}),
      (h.argv = []),
      (h.version = ""),
      (h.versions = {}),
      (h.on = c),
      (h.addListener = c),
      (h.once = c),
      (h.off = c),
      (h.removeListener = c),
      (h.removeAllListeners = c),
      (h.emit = c),
      (h.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (h.cwd = function () {
        return "/";
      }),
      (h.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (h.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    function r() {
      return e.colors[a++ % e.colors.length];
    }
    function i(t) {
      function n() {}
      function i() {
        var t = i,
          n = +new Date(),
          a = n - (o || n);
        (t.diff = a),
          (t.prev = o),
          (t.curr = n),
          (o = n),
          null == t.useColors && (t.useColors = e.useColors()),
          null == t.color && t.useColors && (t.color = r());
        for (var s = new Array(arguments.length), u = 0; u < s.length; u++)
          s[u] = arguments[u];
        (s[0] = e.coerce(s[0])),
          "string" != typeof s[0] && (s = ["%o"].concat(s));
        var c = 0;
        (s[0] = s[0].replace(/%([a-z%])/g, function (n, r) {
          if ("%%" === n) return n;
          c++;
          var i = e.formatters[r];
          if ("function" == typeof i) {
            var o = s[c];
            (n = i.call(t, o)), s.splice(c, 1), c--;
          }
          return n;
        })),
          (s = e.formatArgs.apply(t, s)),
          (i.log || e.log || console.log.bind(console)).apply(t, s);
      }
      (n.enabled = !1), (i.enabled = !0);
      var a = e.enabled(t) ? i : n;
      return (a.namespace = t), a;
    }
    ((e = t.exports = i.debug = i).coerce = function (t) {
      return t instanceof Error ? t.stack || t.message : t;
    }),
      (e.disable = function () {
        e.enable("");
      }),
      (e.enable = function (t) {
        e.save(t);
        for (var n = (t || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++)
          n[i] &&
            ("-" ===
            (t = n[i]
              .replace(/[\\^$+?.()|[\]{}]/g, "\\$&")
              .replace(/\*/g, ".*?"))[0]
              ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
              : e.names.push(new RegExp("^" + t + "$")));
      }),
      (e.enabled = function (t) {
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
          if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
          if (e.names[n].test(t)) return !0;
        return !1;
      }),
      (e.humanize = n(42)),
      (e.names = []),
      (e.skips = []),
      (e.formatters = {});
    var o,
      a = 0;
  },
  function (t, e) {
    function n(t) {
      if (!((t = String(t)).length > 1e4)) {
        var e =
          /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
            t
          );
        if (e) {
          var n = parseFloat(e[1]);
          switch ((e[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * l;
            case "days":
            case "day":
            case "d":
              return n * c;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * s;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * a;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return;
          }
        }
      }
    }
    function r(t) {
      return t >= c
        ? Math.round(t / c) + "d"
        : t >= u
        ? Math.round(t / u) + "h"
        : t >= s
        ? Math.round(t / s) + "m"
        : t >= a
        ? Math.round(t / a) + "s"
        : t + "ms";
    }
    function i(t) {
      return (
        o(t, c, "day") ||
        o(t, u, "hour") ||
        o(t, s, "minute") ||
        o(t, a, "second") ||
        t + " ms"
      );
    }
    function o(t, e, n) {
      if (!(t < e))
        return t < 1.5 * e
          ? Math.floor(t / e) + " " + n
          : Math.ceil(t / e) + " " + n + "s";
    }
    var a = 1e3,
      s = 60 * a,
      u = 60 * s,
      c = 24 * u,
      l = 365.25 * c;
    t.exports = function (t, e) {
      e = e || {};
      var o = typeof t;
      if ("string" === o && t.length > 0) return n(t);
      if ("number" === o && !1 === isNaN(t)) return e.long ? i(t) : r(t);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(t)
      );
    };
  },
  function (t, e, n) {
    !(function (e, n) {
      t.exports = n();
    })(0, function () {
      "use strict";
      function t(t, e) {
        e && (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t);
      }
      function e(t) {
        return o(t) ? t : C(t);
      }
      function n(t) {
        return a(t) ? t : I(t);
      }
      function r(t) {
        return s(t) ? t : M(t);
      }
      function i(t) {
        return o(t) && !u(t) ? t : A(t);
      }
      function o(t) {
        return !(!t || !t[cn]);
      }
      function a(t) {
        return !(!t || !t[ln]);
      }
      function s(t) {
        return !(!t || !t[fn]);
      }
      function u(t) {
        return a(t) || s(t);
      }
      function c(t) {
        return !(!t || !t[hn]);
      }
      function l(t) {
        return (t.value = !1), t;
      }
      function f(t) {
        t && (t.value = !0);
      }
      function h() {}
      function p(t, e) {
        e = e || 0;
        for (
          var n = Math.max(0, t.length - e), r = new Array(n), i = 0;
          i < n;
          i++
        )
          r[i] = t[i + e];
        return r;
      }
      function d(t) {
        return void 0 === t.size && (t.size = t.__iterate(v)), t.size;
      }
      function m(t, e) {
        if ("number" != typeof e) {
          var n = e >>> 0;
          if ("" + n !== e || 4294967295 === n) return NaN;
          e = n;
        }
        return e < 0 ? d(t) + e : e;
      }
      function v() {
        return !0;
      }
      function y(t, e, n) {
        return (
          (0 === t || (void 0 !== n && t <= -n)) &&
          (void 0 === e || (void 0 !== n && e >= n))
        );
      }
      function g(t, e) {
        return w(t, e, 0);
      }
      function b(t, e) {
        return w(t, e, e);
      }
      function w(t, e, n) {
        return void 0 === t
          ? n
          : t < 0
          ? Math.max(0, e + t)
          : void 0 === e
          ? t
          : Math.min(e, t);
      }
      function _(t) {
        this.next = t;
      }
      function E(t, e, n, r) {
        var i = 0 === t ? e : 1 === t ? n : [e, n];
        return r ? (r.value = i) : (r = { value: i, done: !1 }), r;
      }
      function T() {
        return { value: void 0, done: !0 };
      }
      function S(t) {
        return !!P(t);
      }
      function x(t) {
        return t && "function" == typeof t.next;
      }
      function O(t) {
        var e = P(t);
        return e && e.call(t);
      }
      function P(t) {
        var e = t && ((En && t[En]) || t[Tn]);
        if ("function" == typeof e) return e;
      }
      function k(t) {
        return t && "number" == typeof t.length;
      }
      function C(t) {
        return null === t || void 0 === t ? U() : o(t) ? t.toSeq() : z(t);
      }
      function I(t) {
        return null === t || void 0 === t
          ? U().toKeyedSeq()
          : o(t)
          ? a(t)
            ? t.toSeq()
            : t.fromEntrySeq()
          : F(t);
      }
      function M(t) {
        return null === t || void 0 === t
          ? U()
          : o(t)
          ? a(t)
            ? t.entrySeq()
            : t.toIndexedSeq()
          : B(t);
      }
      function A(t) {
        return (
          null === t || void 0 === t
            ? U()
            : o(t)
            ? a(t)
              ? t.entrySeq()
              : t
            : B(t)
        ).toSetSeq();
      }
      function R(t) {
        (this._array = t), (this.size = t.length);
      }
      function N(t) {
        var e = Object.keys(t);
        (this._object = t), (this._keys = e), (this.size = e.length);
      }
      function j(t) {
        (this._iterable = t), (this.size = t.length || t.size);
      }
      function D(t) {
        (this._iterator = t), (this._iteratorCache = []);
      }
      function L(t) {
        return !(!t || !t[xn]);
      }
      function U() {
        return On || (On = new R([]));
      }
      function F(t) {
        var e = Array.isArray(t)
          ? new R(t).fromEntrySeq()
          : x(t)
          ? new D(t).fromEntrySeq()
          : S(t)
          ? new j(t).fromEntrySeq()
          : "object" == typeof t
          ? new N(t)
          : void 0;
        if (!e)
          throw new TypeError(
            "Expected Array or iterable object of [k, v] entries, or keyed object: " +
              t
          );
        return e;
      }
      function B(t) {
        var e = H(t);
        if (!e)
          throw new TypeError(
            "Expected Array or iterable object of values: " + t
          );
        return e;
      }
      function z(t) {
        var e = H(t) || ("object" == typeof t && new N(t));
        if (!e)
          throw new TypeError(
            "Expected Array or iterable object of values, or keyed object: " + t
          );
        return e;
      }
      function H(t) {
        return k(t) ? new R(t) : x(t) ? new D(t) : S(t) ? new j(t) : void 0;
      }
      function q(t, e, n, r) {
        var i = t._cache;
        if (i) {
          for (var o = i.length - 1, a = 0; a <= o; a++) {
            var s = i[n ? o - a : a];
            if (!1 === e(s[1], r ? s[0] : a, t)) return a + 1;
          }
          return a;
        }
        return t.__iterateUncached(e, n);
      }
      function V(t, e, n, r) {
        var i = t._cache;
        if (i) {
          var o = i.length - 1,
            a = 0;
          return new _(function () {
            var t = i[n ? o - a : a];
            return a++ > o ? T() : E(e, r ? t[0] : a - 1, t[1]);
          });
        }
        return t.__iteratorUncached(e, n);
      }
      function K(t, e) {
        return e ? W(e, t, "", { "": t }) : G(t);
      }
      function W(t, e, n, r) {
        return Array.isArray(e)
          ? t.call(
              r,
              n,
              M(e).map(function (n, r) {
                return W(t, n, r, e);
              })
            )
          : Y(e)
          ? t.call(
              r,
              n,
              I(e).map(function (n, r) {
                return W(t, n, r, e);
              })
            )
          : e;
      }
      function G(t) {
        return Array.isArray(t)
          ? M(t).map(G).toList()
          : Y(t)
          ? I(t).map(G).toMap()
          : t;
      }
      function Y(t) {
        return t && (t.constructor === Object || void 0 === t.constructor);
      }
      function $(t, e) {
        if (t === e || (t !== t && e !== e)) return !0;
        if (!t || !e) return !1;
        if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
          if (
            ((t = t.valueOf()),
            (e = e.valueOf()),
            t === e || (t !== t && e !== e))
          )
            return !0;
          if (!t || !e) return !1;
        }
        return !(
          "function" != typeof t.equals ||
          "function" != typeof e.equals ||
          !t.equals(e)
        );
      }
      function X(t, e) {
        if (t === e) return !0;
        if (
          !o(e) ||
          (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
          (void 0 !== t.__hash &&
            void 0 !== e.__hash &&
            t.__hash !== e.__hash) ||
          a(t) !== a(e) ||
          s(t) !== s(e) ||
          c(t) !== c(e)
        )
          return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var n = !u(t);
        if (c(t)) {
          var r = t.entries();
          return (
            e.every(function (t, e) {
              var i = r.next().value;
              return i && $(i[1], t) && (n || $(i[0], e));
            }) && r.next().done
          );
        }
        var i = !1;
        if (void 0 === t.size)
          if (void 0 === e.size)
            "function" == typeof t.cacheResult && t.cacheResult();
          else {
            i = !0;
            var l = t;
            (t = e), (e = l);
          }
        var f = !0,
          h = e.__iterate(function (e, r) {
            if (n ? !t.has(e) : i ? !$(e, t.get(r, vn)) : !$(t.get(r, vn), e))
              return (f = !1), !1;
          });
        return f && t.size === h;
      }
      function J(t, e) {
        if (!(this instanceof J)) return new J(t, e);
        if (
          ((this._value = t),
          (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
          0 === this.size)
        ) {
          if (Pn) return Pn;
          Pn = this;
        }
      }
      function Q(t, e) {
        if (!t) throw new Error(e);
      }
      function Z(t, e, n) {
        if (!(this instanceof Z)) return new Z(t, e, n);
        if (
          (Q(0 !== n, "Cannot step a Range by 0"),
          (t = t || 0),
          void 0 === e && (e = 1 / 0),
          (n = void 0 === n ? 1 : Math.abs(n)),
          e < t && (n = -n),
          (this._start = t),
          (this._end = e),
          (this._step = n),
          (this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1)),
          0 === this.size)
        ) {
          if (kn) return kn;
          kn = this;
        }
      }
      function tt() {
        throw TypeError("Abstract");
      }
      function et() {}
      function nt() {}
      function rt() {}
      function it(t) {
        return ((t >>> 1) & 1073741824) | (3221225471 & t);
      }
      function ot(t) {
        if (!1 === t || null === t || void 0 === t) return 0;
        if (
          "function" == typeof t.valueOf &&
          (!1 === (t = t.valueOf()) || null === t || void 0 === t)
        )
          return 0;
        if (!0 === t) return 1;
        var e = typeof t;
        if ("number" === e) {
          if (t !== t || t === 1 / 0) return 0;
          var n = 0 | t;
          for (n !== t && (n ^= 4294967295 * t); t > 4294967295; )
            n ^= t /= 4294967295;
          return it(n);
        }
        if ("string" === e) return t.length > Dn ? at(t) : st(t);
        if ("function" == typeof t.hashCode) return t.hashCode();
        if ("object" === e) return ut(t);
        if ("function" == typeof t.toString) return st(t.toString());
        throw new Error("Value type " + e + " cannot be hashed.");
      }
      function at(t) {
        var e = Fn[t];
        return (
          void 0 === e &&
            ((e = st(t)),
            Un === Ln && ((Un = 0), (Fn = {})),
            Un++,
            (Fn[t] = e)),
          e
        );
      }
      function st(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = (31 * e + t.charCodeAt(n)) | 0;
        return it(e);
      }
      function ut(t) {
        var e;
        if (Rn && void 0 !== (e = Cn.get(t))) return e;
        if (void 0 !== (e = t[jn])) return e;
        if (!An) {
          if (
            void 0 !==
            (e = t.propertyIsEnumerable && t.propertyIsEnumerable[jn])
          )
            return e;
          if (void 0 !== (e = ct(t))) return e;
        }
        if (((e = ++Nn), 1073741824 & Nn && (Nn = 0), Rn)) Cn.set(t, e);
        else {
          if (void 0 !== Mn && !1 === Mn(t))
            throw new Error("Non-extensible objects are not allowed as keys.");
          if (An)
            Object.defineProperty(t, jn, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: e,
            });
          else if (
            void 0 !== t.propertyIsEnumerable &&
            t.propertyIsEnumerable ===
              t.constructor.prototype.propertyIsEnumerable
          )
            (t.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(
                this,
                arguments
              );
            }),
              (t.propertyIsEnumerable[jn] = e);
          else {
            if (void 0 === t.nodeType)
              throw new Error(
                "Unable to set a non-enumerable property on object."
              );
            t[jn] = e;
          }
        }
        return e;
      }
      function ct(t) {
        if (t && t.nodeType > 0)
          switch (t.nodeType) {
            case 1:
              return t.uniqueID;
            case 9:
              return t.documentElement && t.documentElement.uniqueID;
          }
      }
      function lt(t) {
        Q(t !== 1 / 0, "Cannot perform this action with an infinite size.");
      }
      function ft(t) {
        return null === t || void 0 === t
          ? Et()
          : ht(t) && !c(t)
          ? t
          : Et().withMutations(function (e) {
              var r = n(t);
              lt(r.size),
                r.forEach(function (t, n) {
                  return e.set(n, t);
                });
            });
      }
      function ht(t) {
        return !(!t || !t[Bn]);
      }
      function pt(t, e) {
        (this.ownerID = t), (this.entries = e);
      }
      function dt(t, e, n) {
        (this.ownerID = t), (this.bitmap = e), (this.nodes = n);
      }
      function mt(t, e, n) {
        (this.ownerID = t), (this.count = e), (this.nodes = n);
      }
      function vt(t, e, n) {
        (this.ownerID = t), (this.keyHash = e), (this.entries = n);
      }
      function yt(t, e, n) {
        (this.ownerID = t), (this.keyHash = e), (this.entry = n);
      }
      function gt(t, e, n) {
        (this._type = e),
          (this._reverse = n),
          (this._stack = t._root && wt(t._root));
      }
      function bt(t, e) {
        return E(t, e[0], e[1]);
      }
      function wt(t, e) {
        return { node: t, index: 0, __prev: e };
      }
      function _t(t, e, n, r) {
        var i = Object.create(zn);
        return (
          (i.size = t),
          (i._root = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        );
      }
      function Et() {
        return Hn || (Hn = _t(0));
      }
      function Tt(t, e, n) {
        var r, i;
        if (t._root) {
          var o = l(yn),
            a = l(gn);
          if (((r = St(t._root, t.__ownerID, 0, void 0, e, n, o, a)), !a.value))
            return t;
          i = t.size + (o.value ? (n === vn ? -1 : 1) : 0);
        } else {
          if (n === vn) return t;
          (i = 1), (r = new pt(t.__ownerID, [[e, n]]));
        }
        return t.__ownerID
          ? ((t.size = i),
            (t._root = r),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : r
          ? _t(i, r)
          : Et();
      }
      function St(t, e, n, r, i, o, a, s) {
        return t
          ? t.update(e, n, r, i, o, a, s)
          : o === vn
          ? t
          : (f(s), f(a), new yt(e, r, [i, o]));
      }
      function xt(t) {
        return t.constructor === yt || t.constructor === vt;
      }
      function Ot(t, e, n, r, i) {
        if (t.keyHash === r) return new vt(e, r, [t.entry, i]);
        var o,
          a = (0 === n ? t.keyHash : t.keyHash >>> n) & mn,
          s = (0 === n ? r : r >>> n) & mn;
        return new dt(
          e,
          (1 << a) | (1 << s),
          a === s
            ? [Ot(t, e, n + pn, r, i)]
            : ((o = new yt(e, r, i)), a < s ? [t, o] : [o, t])
        );
      }
      function Pt(t, e, n, r) {
        t || (t = new h());
        for (var i = new yt(t, ot(n), [n, r]), o = 0; o < e.length; o++) {
          var a = e[o];
          i = i.update(t, 0, void 0, a[0], a[1]);
        }
        return i;
      }
      function kt(t, e, n, r) {
        for (
          var i = 0, o = 0, a = new Array(n), s = 0, u = 1, c = e.length;
          s < c;
          s++, u <<= 1
        ) {
          var l = e[s];
          void 0 !== l && s !== r && ((i |= u), (a[o++] = l));
        }
        return new dt(t, i, a);
      }
      function Ct(t, e, n, r, i) {
        for (var o = 0, a = new Array(dn), s = 0; 0 !== n; s++, n >>>= 1)
          a[s] = 1 & n ? e[o++] : void 0;
        return (a[r] = i), new mt(t, o + 1, a);
      }
      function It(t, e, r) {
        for (var i = [], a = 0; a < r.length; a++) {
          var s = r[a],
            u = n(s);
          o(s) ||
            (u = u.map(function (t) {
              return K(t);
            })),
            i.push(u);
        }
        return Rt(t, e, i);
      }
      function Mt(t, e, n) {
        return t && t.mergeDeep && o(e) ? t.mergeDeep(e) : $(t, e) ? t : e;
      }
      function At(t) {
        return function (e, n, r) {
          if (e && e.mergeDeepWith && o(n)) return e.mergeDeepWith(t, n);
          var i = t(e, n, r);
          return $(e, i) ? e : i;
        };
      }
      function Rt(t, e, n) {
        return 0 ===
          (n = n.filter(function (t) {
            return 0 !== t.size;
          })).length
          ? t
          : 0 !== t.size || t.__ownerID || 1 !== n.length
          ? t.withMutations(function (t) {
              for (
                var r = e
                    ? function (n, r) {
                        t.update(r, vn, function (t) {
                          return t === vn ? n : e(t, n, r);
                        });
                      }
                    : function (e, n) {
                        t.set(n, e);
                      },
                  i = 0;
                i < n.length;
                i++
              )
                n[i].forEach(r);
            })
          : t.constructor(n[0]);
      }
      function Nt(t, e, n, r) {
        var i = t === vn,
          o = e.next();
        if (o.done) {
          var a = i ? n : t,
            s = r(a);
          return s === a ? t : s;
        }
        Q(i || (t && t.set), "invalid keyPath");
        var u = o.value,
          c = i ? vn : t.get(u, vn),
          l = Nt(c, e, n, r);
        return l === c ? t : l === vn ? t.remove(u) : (i ? Et() : t).set(u, l);
      }
      function jt(t) {
        return (
          (t -= (t >> 1) & 1431655765),
          (t = (858993459 & t) + ((t >> 2) & 858993459)),
          (t = (t + (t >> 4)) & 252645135),
          (t += t >> 8),
          127 & (t += t >> 16)
        );
      }
      function Dt(t, e, n, r) {
        var i = r ? t : p(t);
        return (i[e] = n), i;
      }
      function Lt(t, e, n, r) {
        var i = t.length + 1;
        if (r && e + 1 === i) return (t[e] = n), t;
        for (var o = new Array(i), a = 0, s = 0; s < i; s++)
          s === e ? ((o[s] = n), (a = -1)) : (o[s] = t[s + a]);
        return o;
      }
      function Ut(t, e, n) {
        var r = t.length - 1;
        if (n && e === r) return t.pop(), t;
        for (var i = new Array(r), o = 0, a = 0; a < r; a++)
          a === e && (o = 1), (i[a] = t[a + o]);
        return i;
      }
      function Ft(t) {
        var e = Vt();
        if (null === t || void 0 === t) return e;
        if (Bt(t)) return t;
        var n = r(t),
          i = n.size;
        return 0 === i
          ? e
          : (lt(i),
            i > 0 && i < dn
              ? qt(0, i, pn, null, new zt(n.toArray()))
              : e.withMutations(function (t) {
                  t.setSize(i),
                    n.forEach(function (e, n) {
                      return t.set(n, e);
                    });
                }));
      }
      function Bt(t) {
        return !(!t || !t[Wn]);
      }
      function zt(t, e) {
        (this.array = t), (this.ownerID = e);
      }
      function Ht(t, e) {
        function n(t, e, n) {
          return 0 === e ? r(t, n) : i(t, e, n);
        }
        function r(t, n) {
          var r = n === s ? u && u.array : t && t.array,
            i = n > o ? 0 : o - n,
            c = a - n;
          return (
            c > dn && (c = dn),
            function () {
              if (i === c) return $n;
              var t = e ? --c : i++;
              return r && r[t];
            }
          );
        }
        function i(t, r, i) {
          var s,
            u = t && t.array,
            c = i > o ? 0 : (o - i) >> r,
            l = 1 + ((a - i) >> r);
          return (
            l > dn && (l = dn),
            function () {
              for (;;) {
                if (s) {
                  var t = s();
                  if (t !== $n) return t;
                  s = null;
                }
                if (c === l) return $n;
                var o = e ? --l : c++;
                s = n(u && u[o], r - pn, i + (o << r));
              }
            }
          );
        }
        var o = t._origin,
          a = t._capacity,
          s = Jt(a),
          u = t._tail;
        return n(t._root, t._level, 0);
      }
      function qt(t, e, n, r, i, o, a) {
        var s = Object.create(Gn);
        return (
          (s.size = e - t),
          (s._origin = t),
          (s._capacity = e),
          (s._level = n),
          (s._root = r),
          (s._tail = i),
          (s.__ownerID = o),
          (s.__hash = a),
          (s.__altered = !1),
          s
        );
      }
      function Vt() {
        return Yn || (Yn = qt(0, 0, pn));
      }
      function Kt(t, e, n) {
        if ((e = m(t, e)) !== e) return t;
        if (e >= t.size || e < 0)
          return t.withMutations(function (t) {
            e < 0 ? $t(t, e).set(0, n) : $t(t, 0, e + 1).set(e, n);
          });
        e += t._origin;
        var r = t._tail,
          i = t._root,
          o = l(gn);
        return (
          e >= Jt(t._capacity)
            ? (r = Wt(r, t.__ownerID, 0, e, n, o))
            : (i = Wt(i, t.__ownerID, t._level, e, n, o)),
          o.value
            ? t.__ownerID
              ? ((t._root = i),
                (t._tail = r),
                (t.__hash = void 0),
                (t.__altered = !0),
                t)
              : qt(t._origin, t._capacity, t._level, i, r)
            : t
        );
      }
      function Wt(t, e, n, r, i, o) {
        var a = (r >>> n) & mn,
          s = t && a < t.array.length;
        if (!s && void 0 === i) return t;
        var u;
        if (n > 0) {
          var c = t && t.array[a],
            l = Wt(c, e, n - pn, r, i, o);
          return l === c ? t : ((u = Gt(t, e)), (u.array[a] = l), u);
        }
        return s && t.array[a] === i
          ? t
          : (f(o),
            (u = Gt(t, e)),
            void 0 === i && a === u.array.length - 1
              ? u.array.pop()
              : (u.array[a] = i),
            u);
      }
      function Gt(t, e) {
        return e && t && e === t.ownerID
          ? t
          : new zt(t ? t.array.slice() : [], e);
      }
      function Yt(t, e) {
        if (e >= Jt(t._capacity)) return t._tail;
        if (e < 1 << (t._level + pn)) {
          for (var n = t._root, r = t._level; n && r > 0; )
            (n = n.array[(e >>> r) & mn]), (r -= pn);
          return n;
        }
      }
      function $t(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
        var r = t.__ownerID || new h(),
          i = t._origin,
          o = t._capacity,
          a = i + e,
          s = void 0 === n ? o : n < 0 ? o + n : i + n;
        if (a === i && s === o) return t;
        if (a >= s) return t.clear();
        for (var u = t._level, c = t._root, l = 0; a + l < 0; )
          (c = new zt(c && c.array.length ? [void 0, c] : [], r)),
            (l += 1 << (u += pn));
        l && ((a += l), (i += l), (s += l), (o += l));
        for (var f = Jt(o), p = Jt(s); p >= 1 << (u + pn); )
          (c = new zt(c && c.array.length ? [c] : [], r)), (u += pn);
        var d = t._tail,
          m = p < f ? Yt(t, s - 1) : p > f ? new zt([], r) : d;
        if (d && p > f && a < o && d.array.length) {
          for (var v = (c = Gt(c, r)), y = u; y > pn; y -= pn) {
            var g = (f >>> y) & mn;
            v = v.array[g] = Gt(v.array[g], r);
          }
          v.array[(f >>> pn) & mn] = d;
        }
        if ((s < o && (m = m && m.removeAfter(r, 0, s)), a >= p))
          (a -= p),
            (s -= p),
            (u = pn),
            (c = null),
            (m = m && m.removeBefore(r, 0, a));
        else if (a > i || p < f) {
          for (l = 0; c; ) {
            var b = (a >>> u) & mn;
            if ((b !== p >>> u) & mn) break;
            b && (l += (1 << u) * b), (u -= pn), (c = c.array[b]);
          }
          c && a > i && (c = c.removeBefore(r, u, a - l)),
            c && p < f && (c = c.removeAfter(r, u, p - l)),
            l && ((a -= l), (s -= l));
        }
        return t.__ownerID
          ? ((t.size = s - a),
            (t._origin = a),
            (t._capacity = s),
            (t._level = u),
            (t._root = c),
            (t._tail = m),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : qt(a, s, u, c, m);
      }
      function Xt(t, e, n) {
        for (var i = [], a = 0, s = 0; s < n.length; s++) {
          var u = n[s],
            c = r(u);
          c.size > a && (a = c.size),
            o(u) ||
              (c = c.map(function (t) {
                return K(t);
              })),
            i.push(c);
        }
        return a > t.size && (t = t.setSize(a)), Rt(t, e, i);
      }
      function Jt(t) {
        return t < dn ? 0 : ((t - 1) >>> pn) << pn;
      }
      function Qt(t) {
        return null === t || void 0 === t
          ? ee()
          : Zt(t)
          ? t
          : ee().withMutations(function (e) {
              var r = n(t);
              lt(r.size),
                r.forEach(function (t, n) {
                  return e.set(n, t);
                });
            });
      }
      function Zt(t) {
        return ht(t) && c(t);
      }
      function te(t, e, n, r) {
        var i = Object.create(Qt.prototype);
        return (
          (i.size = t ? t.size : 0),
          (i._map = t),
          (i._list = e),
          (i.__ownerID = n),
          (i.__hash = r),
          i
        );
      }
      function ee() {
        return Xn || (Xn = te(Et(), Vt()));
      }
      function ne(t, e, n) {
        var r,
          i,
          o = t._map,
          a = t._list,
          s = o.get(e),
          u = void 0 !== s;
        if (n === vn) {
          if (!u) return t;
          a.size >= dn && a.size >= 2 * o.size
            ? ((r = (i = a.filter(function (t, e) {
                return void 0 !== t && s !== e;
              }))
                .toKeyedSeq()
                .map(function (t) {
                  return t[0];
                })
                .flip()
                .toMap()),
              t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID))
            : ((r = o.remove(e)),
              (i = s === a.size - 1 ? a.pop() : a.set(s, void 0)));
        } else if (u) {
          if (n === a.get(s)[1]) return t;
          (r = o), (i = a.set(s, [e, n]));
        } else (r = o.set(e, a.size)), (i = a.set(a.size, [e, n]));
        return t.__ownerID
          ? ((t.size = r.size),
            (t._map = r),
            (t._list = i),
            (t.__hash = void 0),
            t)
          : te(r, i);
      }
      function re(t, e) {
        (this._iter = t), (this._useKeys = e), (this.size = t.size);
      }
      function ie(t) {
        (this._iter = t), (this.size = t.size);
      }
      function oe(t) {
        (this._iter = t), (this.size = t.size);
      }
      function ae(t) {
        (this._iter = t), (this.size = t.size);
      }
      function se(t) {
        var e = ke(t);
        return (
          (e._iter = t),
          (e.size = t.size),
          (e.flip = function () {
            return t;
          }),
          (e.reverse = function () {
            var e = t.reverse.apply(this);
            return (
              (e.flip = function () {
                return t.reverse();
              }),
              e
            );
          }),
          (e.has = function (e) {
            return t.includes(e);
          }),
          (e.includes = function (e) {
            return t.has(e);
          }),
          (e.cacheResult = Ce),
          (e.__iterateUncached = function (e, n) {
            var r = this;
            return t.__iterate(function (t, n) {
              return !1 !== e(n, t, r);
            }, n);
          }),
          (e.__iteratorUncached = function (e, n) {
            if (e === _n) {
              var r = t.__iterator(e, n);
              return new _(function () {
                var t = r.next();
                if (!t.done) {
                  var e = t.value[0];
                  (t.value[0] = t.value[1]), (t.value[1] = e);
                }
                return t;
              });
            }
            return t.__iterator(e === wn ? bn : wn, n);
          }),
          e
        );
      }
      function ue(t, e, n) {
        var r = ke(t);
        return (
          (r.size = t.size),
          (r.has = function (e) {
            return t.has(e);
          }),
          (r.get = function (r, i) {
            var o = t.get(r, vn);
            return o === vn ? i : e.call(n, o, r, t);
          }),
          (r.__iterateUncached = function (r, i) {
            var o = this;
            return t.__iterate(function (t, i, a) {
              return !1 !== r(e.call(n, t, i, a), i, o);
            }, i);
          }),
          (r.__iteratorUncached = function (r, i) {
            var o = t.__iterator(_n, i);
            return new _(function () {
              var i = o.next();
              if (i.done) return i;
              var a = i.value,
                s = a[0];
              return E(r, s, e.call(n, a[1], s, t), i);
            });
          }),
          r
        );
      }
      function ce(t, e) {
        var n = ke(t);
        return (
          (n._iter = t),
          (n.size = t.size),
          (n.reverse = function () {
            return t;
          }),
          t.flip &&
            (n.flip = function () {
              var e = se(t);
              return (
                (e.reverse = function () {
                  return t.flip();
                }),
                e
              );
            }),
          (n.get = function (n, r) {
            return t.get(e ? n : -1 - n, r);
          }),
          (n.has = function (n) {
            return t.has(e ? n : -1 - n);
          }),
          (n.includes = function (e) {
            return t.includes(e);
          }),
          (n.cacheResult = Ce),
          (n.__iterate = function (e, n) {
            var r = this;
            return t.__iterate(function (t, n) {
              return e(t, n, r);
            }, !n);
          }),
          (n.__iterator = function (e, n) {
            return t.__iterator(e, !n);
          }),
          n
        );
      }
      function le(t, e, n, r) {
        var i = ke(t);
        return (
          r &&
            ((i.has = function (r) {
              var i = t.get(r, vn);
              return i !== vn && !!e.call(n, i, r, t);
            }),
            (i.get = function (r, i) {
              var o = t.get(r, vn);
              return o !== vn && e.call(n, o, r, t) ? o : i;
            })),
          (i.__iterateUncached = function (i, o) {
            var a = this,
              s = 0;
            return (
              t.__iterate(function (t, o, u) {
                if (e.call(n, t, o, u)) return s++, i(t, r ? o : s - 1, a);
              }, o),
              s
            );
          }),
          (i.__iteratorUncached = function (i, o) {
            var a = t.__iterator(_n, o),
              s = 0;
            return new _(function () {
              for (;;) {
                var o = a.next();
                if (o.done) return o;
                var u = o.value,
                  c = u[0],
                  l = u[1];
                if (e.call(n, l, c, t)) return E(i, r ? c : s++, l, o);
              }
            });
          }),
          i
        );
      }
      function fe(t, e, n) {
        var r = ft().asMutable();
        return (
          t.__iterate(function (i, o) {
            r.update(e.call(n, i, o, t), 0, function (t) {
              return t + 1;
            });
          }),
          r.asImmutable()
        );
      }
      function he(t, e, n) {
        var r = a(t),
          i = (c(t) ? Qt() : ft()).asMutable();
        t.__iterate(function (o, a) {
          i.update(e.call(n, o, a, t), function (t) {
            return (t = t || []).push(r ? [a, o] : o), t;
          });
        });
        var o = Pe(t);
        return i.map(function (e) {
          return Se(t, o(e));
        });
      }
      function pe(t, e, n, r) {
        var i = t.size;
        if (
          (void 0 !== e && (e |= 0),
          void 0 !== n && (n === 1 / 0 ? (n = i) : (n |= 0)),
          y(e, n, i))
        )
          return t;
        var o = g(e, i),
          a = b(n, i);
        if (o !== o || a !== a) return pe(t.toSeq().cacheResult(), e, n, r);
        var s,
          u = a - o;
        u === u && (s = u < 0 ? 0 : u);
        var c = ke(t);
        return (
          (c.size = 0 === s ? s : (t.size && s) || void 0),
          !r &&
            L(t) &&
            s >= 0 &&
            (c.get = function (e, n) {
              return (e = m(this, e)) >= 0 && e < s ? t.get(e + o, n) : n;
            }),
          (c.__iterateUncached = function (e, n) {
            var i = this;
            if (0 === s) return 0;
            if (n) return this.cacheResult().__iterate(e, n);
            var a = 0,
              u = !0,
              c = 0;
            return (
              t.__iterate(function (t, n) {
                if (!u || !(u = a++ < o))
                  return c++, !1 !== e(t, r ? n : c - 1, i) && c !== s;
              }),
              c
            );
          }),
          (c.__iteratorUncached = function (e, n) {
            if (0 !== s && n) return this.cacheResult().__iterator(e, n);
            var i = 0 !== s && t.__iterator(e, n),
              a = 0,
              u = 0;
            return new _(function () {
              for (; a++ < o; ) i.next();
              if (++u > s) return T();
              var t = i.next();
              return r || e === wn
                ? t
                : e === bn
                ? E(e, u - 1, void 0, t)
                : E(e, u - 1, t.value[1], t);
            });
          }),
          c
        );
      }
      function de(t, e, n) {
        var r = ke(t);
        return (
          (r.__iterateUncached = function (r, i) {
            var o = this;
            if (i) return this.cacheResult().__iterate(r, i);
            var a = 0;
            return (
              t.__iterate(function (t, i, s) {
                return e.call(n, t, i, s) && ++a && r(t, i, o);
              }),
              a
            );
          }),
          (r.__iteratorUncached = function (r, i) {
            var o = this;
            if (i) return this.cacheResult().__iterator(r, i);
            var a = t.__iterator(_n, i),
              s = !0;
            return new _(function () {
              if (!s) return T();
              var t = a.next();
              if (t.done) return t;
              var i = t.value,
                u = i[0],
                c = i[1];
              return e.call(n, c, u, o)
                ? r === _n
                  ? t
                  : E(r, u, c, t)
                : ((s = !1), T());
            });
          }),
          r
        );
      }
      function me(t, e, n, r) {
        var i = ke(t);
        return (
          (i.__iterateUncached = function (i, o) {
            var a = this;
            if (o) return this.cacheResult().__iterate(i, o);
            var s = !0,
              u = 0;
            return (
              t.__iterate(function (t, o, c) {
                if (!s || !(s = e.call(n, t, o, c)))
                  return u++, i(t, r ? o : u - 1, a);
              }),
              u
            );
          }),
          (i.__iteratorUncached = function (i, o) {
            var a = this;
            if (o) return this.cacheResult().__iterator(i, o);
            var s = t.__iterator(_n, o),
              u = !0,
              c = 0;
            return new _(function () {
              var t, o, l;
              do {
                if ((t = s.next()).done)
                  return r || i === wn
                    ? t
                    : i === bn
                    ? E(i, c++, void 0, t)
                    : E(i, c++, t.value[1], t);
                var f = t.value;
                (o = f[0]), (l = f[1]), u && (u = e.call(n, l, o, a));
              } while (u);
              return i === _n ? t : E(i, o, l, t);
            });
          }),
          i
        );
      }
      function ve(t, e) {
        var r = a(t),
          i = [t]
            .concat(e)
            .map(function (t) {
              return (
                o(t)
                  ? r && (t = n(t))
                  : (t = r ? F(t) : B(Array.isArray(t) ? t : [t])),
                t
              );
            })
            .filter(function (t) {
              return 0 !== t.size;
            });
        if (0 === i.length) return t;
        if (1 === i.length) {
          var u = i[0];
          if (u === t || (r && a(u)) || (s(t) && s(u))) return u;
        }
        var c = new R(i);
        return (
          r ? (c = c.toKeyedSeq()) : s(t) || (c = c.toSetSeq()),
          (c = c.flatten(!0)),
          (c.size = i.reduce(function (t, e) {
            if (void 0 !== t) {
              var n = e.size;
              if (void 0 !== n) return t + n;
            }
          }, 0)),
          c
        );
      }
      function ye(t, e, n) {
        var r = ke(t);
        return (
          (r.__iterateUncached = function (r, i) {
            function a(t, c) {
              var l = this;
              t.__iterate(function (t, i) {
                return (
                  (!e || c < e) && o(t)
                    ? a(t, c + 1)
                    : !1 === r(t, n ? i : s++, l) && (u = !0),
                  !u
                );
              }, i);
            }
            var s = 0,
              u = !1;
            return a(t, 0), s;
          }),
          (r.__iteratorUncached = function (r, i) {
            var a = t.__iterator(r, i),
              s = [],
              u = 0;
            return new _(function () {
              for (; a; ) {
                var t = a.next();
                if (!1 === t.done) {
                  var c = t.value;
                  if ((r === _n && (c = c[1]), (e && !(s.length < e)) || !o(c)))
                    return n ? t : E(r, u++, c, t);
                  s.push(a), (a = c.__iterator(r, i));
                } else a = s.pop();
              }
              return T();
            });
          }),
          r
        );
      }
      function ge(t, e, n) {
        var r = Pe(t);
        return t
          .toSeq()
          .map(function (i, o) {
            return r(e.call(n, i, o, t));
          })
          .flatten(!0);
      }
      function be(t, e) {
        var n = ke(t);
        return (
          (n.size = t.size && 2 * t.size - 1),
          (n.__iterateUncached = function (n, r) {
            var i = this,
              o = 0;
            return (
              t.__iterate(function (t, r) {
                return (!o || !1 !== n(e, o++, i)) && !1 !== n(t, o++, i);
              }, r),
              o
            );
          }),
          (n.__iteratorUncached = function (n, r) {
            var i,
              o = t.__iterator(wn, r),
              a = 0;
            return new _(function () {
              return (!i || a % 2) && (i = o.next()).done
                ? i
                : a % 2
                ? E(n, a++, e)
                : E(n, a++, i.value, i);
            });
          }),
          n
        );
      }
      function we(t, e, n) {
        e || (e = Ie);
        var r = a(t),
          i = 0,
          o = t
            .toSeq()
            .map(function (e, r) {
              return [r, e, i++, n ? n(e, r, t) : e];
            })
            .toArray();
        return (
          o
            .sort(function (t, n) {
              return e(t[3], n[3]) || t[2] - n[2];
            })
            .forEach(
              r
                ? function (t, e) {
                    o[e].length = 2;
                  }
                : function (t, e) {
                    o[e] = t[1];
                  }
            ),
          r ? I(o) : s(t) ? M(o) : A(o)
        );
      }
      function _e(t, e, n) {
        if ((e || (e = Ie), n)) {
          var r = t
            .toSeq()
            .map(function (e, r) {
              return [e, n(e, r, t)];
            })
            .reduce(function (t, n) {
              return Ee(e, t[1], n[1]) ? n : t;
            });
          return r && r[0];
        }
        return t.reduce(function (t, n) {
          return Ee(e, t, n) ? n : t;
        });
      }
      function Ee(t, e, n) {
        var r = t(n, e);
        return (
          (0 === r && n !== e && (void 0 === n || null === n || n !== n)) ||
          r > 0
        );
      }
      function Te(t, n, r) {
        var i = ke(t);
        return (
          (i.size = new R(r)
            .map(function (t) {
              return t.size;
            })
            .min()),
          (i.__iterate = function (t, e) {
            for (
              var n, r = this.__iterator(wn, e), i = 0;
              !(n = r.next()).done && !1 !== t(n.value, i++, this);

            );
            return i;
          }),
          (i.__iteratorUncached = function (t, i) {
            var o = r.map(function (t) {
                return (t = e(t)), O(i ? t.reverse() : t);
              }),
              a = 0,
              s = !1;
            return new _(function () {
              var e;
              return (
                s ||
                  ((e = o.map(function (t) {
                    return t.next();
                  })),
                  (s = e.some(function (t) {
                    return t.done;
                  }))),
                s
                  ? T()
                  : E(
                      t,
                      a++,
                      n.apply(
                        null,
                        e.map(function (t) {
                          return t.value;
                        })
                      )
                    )
              );
            });
          }),
          i
        );
      }
      function Se(t, e) {
        return L(t) ? e : t.constructor(e);
      }
      function xe(t) {
        if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
      }
      function Oe(t) {
        return lt(t.size), d(t);
      }
      function Pe(t) {
        return a(t) ? n : s(t) ? r : i;
      }
      function ke(t) {
        return Object.create((a(t) ? I : s(t) ? M : A).prototype);
      }
      function Ce() {
        return this._iter.cacheResult
          ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
          : C.prototype.cacheResult.call(this);
      }
      function Ie(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }
      function Me(t) {
        var n = O(t);
        if (!n) {
          if (!k(t))
            throw new TypeError("Expected iterable or array-like: " + t);
          n = O(e(t));
        }
        return n;
      }
      function Ae(t, e) {
        var n,
          r = function (o) {
            if (o instanceof r) return o;
            if (!(this instanceof r)) return new r(o);
            if (!n) {
              n = !0;
              var a = Object.keys(t);
              je(i, a),
                (i.size = a.length),
                (i._name = e),
                (i._keys = a),
                (i._defaultValues = t);
            }
            this._map = ft(o);
          },
          i = (r.prototype = Object.create(Jn));
        return (i.constructor = r), r;
      }
      function Re(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t));
        return (r._map = e), (r.__ownerID = n), r;
      }
      function Ne(t) {
        return t._name || t.constructor.name || "Record";
      }
      function je(t, e) {
        try {
          e.forEach(De.bind(void 0, t));
        } catch (t) {}
      }
      function De(t, e) {
        Object.defineProperty(t, e, {
          get: function () {
            return this.get(e);
          },
          set: function (t) {
            Q(this.__ownerID, "Cannot set on an immutable record."),
              this.set(e, t);
          },
        });
      }
      function Le(t) {
        return null === t || void 0 === t
          ? ze()
          : Ue(t) && !c(t)
          ? t
          : ze().withMutations(function (e) {
              var n = i(t);
              lt(n.size),
                n.forEach(function (t) {
                  return e.add(t);
                });
            });
      }
      function Ue(t) {
        return !(!t || !t[Qn]);
      }
      function Fe(t, e) {
        return t.__ownerID
          ? ((t.size = e.size), (t._map = e), t)
          : e === t._map
          ? t
          : 0 === e.size
          ? t.__empty()
          : t.__make(e);
      }
      function Be(t, e) {
        var n = Object.create(Zn);
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n;
      }
      function ze() {
        return tr || (tr = Be(Et()));
      }
      function He(t) {
        return null === t || void 0 === t
          ? Ke()
          : qe(t)
          ? t
          : Ke().withMutations(function (e) {
              var n = i(t);
              lt(n.size),
                n.forEach(function (t) {
                  return e.add(t);
                });
            });
      }
      function qe(t) {
        return Ue(t) && c(t);
      }
      function Ve(t, e) {
        var n = Object.create(er);
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n;
      }
      function Ke() {
        return nr || (nr = Ve(ee()));
      }
      function We(t) {
        return null === t || void 0 === t
          ? $e()
          : Ge(t)
          ? t
          : $e().unshiftAll(t);
      }
      function Ge(t) {
        return !(!t || !t[rr]);
      }
      function Ye(t, e, n, r) {
        var i = Object.create(ir);
        return (
          (i.size = t),
          (i._head = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        );
      }
      function $e() {
        return or || (or = Ye(0));
      }
      function Xe(t, e) {
        var n = function (n) {
          t.prototype[n] = e[n];
        };
        return (
          Object.keys(e).forEach(n),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(e).forEach(n),
          t
        );
      }
      function Je(t, e) {
        return e;
      }
      function Qe(t, e) {
        return [e, t];
      }
      function Ze(t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }
      function tn(t) {
        return function () {
          return -t.apply(this, arguments);
        };
      }
      function en(t) {
        return "string" == typeof t ? JSON.stringify(t) : String(t);
      }
      function nn() {
        return p(arguments);
      }
      function rn(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
      }
      function on(t) {
        if (t.size === 1 / 0) return 0;
        var e = c(t),
          n = a(t),
          r = e ? 1 : 0;
        return an(
          t.__iterate(
            n
              ? e
                ? function (t, e) {
                    r = (31 * r + sn(ot(t), ot(e))) | 0;
                  }
                : function (t, e) {
                    r = (r + sn(ot(t), ot(e))) | 0;
                  }
              : e
              ? function (t) {
                  r = (31 * r + ot(t)) | 0;
                }
              : function (t) {
                  r = (r + ot(t)) | 0;
                }
          ),
          r
        );
      }
      function an(t, e) {
        return (
          (e = In(e, 3432918353)),
          (e = In((e << 15) | (e >>> -15), 461845907)),
          (e = In((e << 13) | (e >>> -13), 5)),
          (e = ((e + 3864292196) | 0) ^ t),
          (e = In(e ^ (e >>> 16), 2246822507)),
          (e = In(e ^ (e >>> 13), 3266489909)),
          (e = it(e ^ (e >>> 16)))
        );
      }
      function sn(t, e) {
        return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
      }
      var un = Array.prototype.slice;
      t(n, e),
        t(r, e),
        t(i, e),
        (e.isIterable = o),
        (e.isKeyed = a),
        (e.isIndexed = s),
        (e.isAssociative = u),
        (e.isOrdered = c),
        (e.Keyed = n),
        (e.Indexed = r),
        (e.Set = i);
      var cn = "@@__IMMUTABLE_ITERABLE__@@",
        ln = "@@__IMMUTABLE_KEYED__@@",
        fn = "@@__IMMUTABLE_INDEXED__@@",
        hn = "@@__IMMUTABLE_ORDERED__@@",
        pn = 5,
        dn = 1 << pn,
        mn = dn - 1,
        vn = {},
        yn = { value: !1 },
        gn = { value: !1 },
        bn = 0,
        wn = 1,
        _n = 2,
        En = "function" == typeof Symbol && Symbol.iterator,
        Tn = "@@iterator",
        Sn = En || Tn;
      (_.prototype.toString = function () {
        return "[Iterator]";
      }),
        (_.KEYS = bn),
        (_.VALUES = wn),
        (_.ENTRIES = _n),
        (_.prototype.inspect = _.prototype.toSource =
          function () {
            return this.toString();
          }),
        (_.prototype[Sn] = function () {
          return this;
        }),
        t(C, e),
        (C.of = function () {
          return C(arguments);
        }),
        (C.prototype.toSeq = function () {
          return this;
        }),
        (C.prototype.toString = function () {
          return this.__toString("Seq {", "}");
        }),
        (C.prototype.cacheResult = function () {
          return (
            !this._cache &&
              this.__iterateUncached &&
              ((this._cache = this.entrySeq().toArray()),
              (this.size = this._cache.length)),
            this
          );
        }),
        (C.prototype.__iterate = function (t, e) {
          return q(this, t, e, !0);
        }),
        (C.prototype.__iterator = function (t, e) {
          return V(this, t, e, !0);
        }),
        t(I, C),
        (I.prototype.toKeyedSeq = function () {
          return this;
        }),
        t(M, C),
        (M.of = function () {
          return M(arguments);
        }),
        (M.prototype.toIndexedSeq = function () {
          return this;
        }),
        (M.prototype.toString = function () {
          return this.__toString("Seq [", "]");
        }),
        (M.prototype.__iterate = function (t, e) {
          return q(this, t, e, !1);
        }),
        (M.prototype.__iterator = function (t, e) {
          return V(this, t, e, !1);
        }),
        t(A, C),
        (A.of = function () {
          return A(arguments);
        }),
        (A.prototype.toSetSeq = function () {
          return this;
        }),
        (C.isSeq = L),
        (C.Keyed = I),
        (C.Set = A),
        (C.Indexed = M);
      var xn = "@@__IMMUTABLE_SEQ__@@";
      (C.prototype[xn] = !0),
        t(R, M),
        (R.prototype.get = function (t, e) {
          return this.has(t) ? this._array[m(this, t)] : e;
        }),
        (R.prototype.__iterate = function (t, e) {
          for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++)
            if (!1 === t(n[e ? r - i : i], i, this)) return i + 1;
          return i;
        }),
        (R.prototype.__iterator = function (t, e) {
          var n = this._array,
            r = n.length - 1,
            i = 0;
          return new _(function () {
            return i > r ? T() : E(t, i, n[e ? r - i++ : i++]);
          });
        }),
        t(N, I),
        (N.prototype.get = function (t, e) {
          return void 0 === e || this.has(t) ? this._object[t] : e;
        }),
        (N.prototype.has = function (t) {
          return this._object.hasOwnProperty(t);
        }),
        (N.prototype.__iterate = function (t, e) {
          for (
            var n = this._object, r = this._keys, i = r.length - 1, o = 0;
            o <= i;
            o++
          ) {
            var a = r[e ? i - o : o];
            if (!1 === t(n[a], a, this)) return o + 1;
          }
          return o;
        }),
        (N.prototype.__iterator = function (t, e) {
          var n = this._object,
            r = this._keys,
            i = r.length - 1,
            o = 0;
          return new _(function () {
            var a = r[e ? i - o : o];
            return o++ > i ? T() : E(t, a, n[a]);
          });
        }),
        (N.prototype[hn] = !0),
        t(j, M),
        (j.prototype.__iterateUncached = function (t, e) {
          if (e) return this.cacheResult().__iterate(t, e);
          var n = O(this._iterable),
            r = 0;
          if (x(n))
            for (var i; !(i = n.next()).done && !1 !== t(i.value, r++, this); );
          return r;
        }),
        (j.prototype.__iteratorUncached = function (t, e) {
          if (e) return this.cacheResult().__iterator(t, e);
          var n = O(this._iterable);
          if (!x(n)) return new _(T);
          var r = 0;
          return new _(function () {
            var e = n.next();
            return e.done ? e : E(t, r++, e.value);
          });
        }),
        t(D, M),
        (D.prototype.__iterateUncached = function (t, e) {
          if (e) return this.cacheResult().__iterate(t, e);
          for (
            var n = this._iterator, r = this._iteratorCache, i = 0;
            i < r.length;

          )
            if (!1 === t(r[i], i++, this)) return i;
          for (var o; !(o = n.next()).done; ) {
            var a = o.value;
            if (((r[i] = a), !1 === t(a, i++, this))) break;
          }
          return i;
        }),
        (D.prototype.__iteratorUncached = function (t, e) {
          if (e) return this.cacheResult().__iterator(t, e);
          var n = this._iterator,
            r = this._iteratorCache,
            i = 0;
          return new _(function () {
            if (i >= r.length) {
              var e = n.next();
              if (e.done) return e;
              r[i] = e.value;
            }
            return E(t, i, r[i++]);
          });
        });
      var On;
      t(J, M),
        (J.prototype.toString = function () {
          return 0 === this.size
            ? "Repeat []"
            : "Repeat [ " + this._value + " " + this.size + " times ]";
        }),
        (J.prototype.get = function (t, e) {
          return this.has(t) ? this._value : e;
        }),
        (J.prototype.includes = function (t) {
          return $(this._value, t);
        }),
        (J.prototype.slice = function (t, e) {
          var n = this.size;
          return y(t, e, n) ? this : new J(this._value, b(e, n) - g(t, n));
        }),
        (J.prototype.reverse = function () {
          return this;
        }),
        (J.prototype.indexOf = function (t) {
          return $(this._value, t) ? 0 : -1;
        }),
        (J.prototype.lastIndexOf = function (t) {
          return $(this._value, t) ? this.size : -1;
        }),
        (J.prototype.__iterate = function (t, e) {
          for (var n = 0; n < this.size; n++)
            if (!1 === t(this._value, n, this)) return n + 1;
          return n;
        }),
        (J.prototype.__iterator = function (t, e) {
          var n = this,
            r = 0;
          return new _(function () {
            return r < n.size ? E(t, r++, n._value) : T();
          });
        }),
        (J.prototype.equals = function (t) {
          return t instanceof J ? $(this._value, t._value) : X(t);
        });
      var Pn;
      t(Z, M),
        (Z.prototype.toString = function () {
          return 0 === this.size
            ? "Range []"
            : "Range [ " +
                this._start +
                "..." +
                this._end +
                (1 !== this._step ? " by " + this._step : "") +
                " ]";
        }),
        (Z.prototype.get = function (t, e) {
          return this.has(t) ? this._start + m(this, t) * this._step : e;
        }),
        (Z.prototype.includes = function (t) {
          var e = (t - this._start) / this._step;
          return e >= 0 && e < this.size && e === Math.floor(e);
        }),
        (Z.prototype.slice = function (t, e) {
          return y(t, e, this.size)
            ? this
            : ((t = g(t, this.size)),
              (e = b(e, this.size)) <= t
                ? new Z(0, 0)
                : new Z(
                    this.get(t, this._end),
                    this.get(e, this._end),
                    this._step
                  ));
        }),
        (Z.prototype.indexOf = function (t) {
          var e = t - this._start;
          if (e % this._step == 0) {
            var n = e / this._step;
            if (n >= 0 && n < this.size) return n;
          }
          return -1;
        }),
        (Z.prototype.lastIndexOf = function (t) {
          return this.indexOf(t);
        }),
        (Z.prototype.__iterate = function (t, e) {
          for (
            var n = this.size - 1,
              r = this._step,
              i = e ? this._start + n * r : this._start,
              o = 0;
            o <= n;
            o++
          ) {
            if (!1 === t(i, o, this)) return o + 1;
            i += e ? -r : r;
          }
          return o;
        }),
        (Z.prototype.__iterator = function (t, e) {
          var n = this.size - 1,
            r = this._step,
            i = e ? this._start + n * r : this._start,
            o = 0;
          return new _(function () {
            var a = i;
            return (i += e ? -r : r), o > n ? T() : E(t, o++, a);
          });
        }),
        (Z.prototype.equals = function (t) {
          return t instanceof Z
            ? this._start === t._start &&
                this._end === t._end &&
                this._step === t._step
            : X(this, t);
        });
      var kn;
      t(tt, e),
        t(et, tt),
        t(nt, tt),
        t(rt, tt),
        (tt.Keyed = et),
        (tt.Indexed = nt),
        (tt.Set = rt);
      var Cn,
        In =
          "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, e) {
                var n = 65535 & (t |= 0),
                  r = 65535 & (e |= 0);
                return (
                  (n * r + ((((t >>> 16) * r + n * (e >>> 16)) << 16) >>> 0)) |
                  0
                );
              },
        Mn = Object.isExtensible,
        An = (function () {
          try {
            return Object.defineProperty({}, "@", {}), !0;
          } catch (t) {
            return !1;
          }
        })(),
        Rn = "function" == typeof WeakMap;
      Rn && (Cn = new WeakMap());
      var Nn = 0,
        jn = "__immutablehash__";
      "function" == typeof Symbol && (jn = Symbol(jn));
      var Dn = 16,
        Ln = 255,
        Un = 0,
        Fn = {};
      t(ft, et),
        (ft.of = function () {
          var t = un.call(arguments, 0);
          return Et().withMutations(function (e) {
            for (var n = 0; n < t.length; n += 2) {
              if (n + 1 >= t.length)
                throw new Error("Missing value for key: " + t[n]);
              e.set(t[n], t[n + 1]);
            }
          });
        }),
        (ft.prototype.toString = function () {
          return this.__toString("Map {", "}");
        }),
        (ft.prototype.get = function (t, e) {
          return this._root ? this._root.get(0, void 0, t, e) : e;
        }),
        (ft.prototype.set = function (t, e) {
          return Tt(this, t, e);
        }),
        (ft.prototype.setIn = function (t, e) {
          return this.updateIn(t, vn, function () {
            return e;
          });
        }),
        (ft.prototype.remove = function (t) {
          return Tt(this, t, vn);
        }),
        (ft.prototype.deleteIn = function (t) {
          return this.updateIn(t, function () {
            return vn;
          });
        }),
        (ft.prototype.update = function (t, e, n) {
          return 1 === arguments.length ? t(this) : this.updateIn([t], e, n);
        }),
        (ft.prototype.updateIn = function (t, e, n) {
          n || ((n = e), (e = void 0));
          var r = Nt(this, Me(t), e, n);
          return r === vn ? void 0 : r;
        }),
        (ft.prototype.clear = function () {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0),
              (this._root = null),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Et();
        }),
        (ft.prototype.merge = function () {
          return It(this, void 0, arguments);
        }),
        (ft.prototype.mergeWith = function (t) {
          return It(this, t, un.call(arguments, 1));
        }),
        (ft.prototype.mergeIn = function (t) {
          var e = un.call(arguments, 1);
          return this.updateIn(t, Et(), function (t) {
            return "function" == typeof t.merge
              ? t.merge.apply(t, e)
              : e[e.length - 1];
          });
        }),
        (ft.prototype.mergeDeep = function () {
          return It(this, Mt, arguments);
        }),
        (ft.prototype.mergeDeepWith = function (t) {
          var e = un.call(arguments, 1);
          return It(this, At(t), e);
        }),
        (ft.prototype.mergeDeepIn = function (t) {
          var e = un.call(arguments, 1);
          return this.updateIn(t, Et(), function (t) {
            return "function" == typeof t.mergeDeep
              ? t.mergeDeep.apply(t, e)
              : e[e.length - 1];
          });
        }),
        (ft.prototype.sort = function (t) {
          return Qt(we(this, t));
        }),
        (ft.prototype.sortBy = function (t, e) {
          return Qt(we(this, e, t));
        }),
        (ft.prototype.withMutations = function (t) {
          var e = this.asMutable();
          return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
        }),
        (ft.prototype.asMutable = function () {
          return this.__ownerID ? this : this.__ensureOwner(new h());
        }),
        (ft.prototype.asImmutable = function () {
          return this.__ensureOwner();
        }),
        (ft.prototype.wasAltered = function () {
          return this.__altered;
        }),
        (ft.prototype.__iterator = function (t, e) {
          return new gt(this, t, e);
        }),
        (ft.prototype.__iterate = function (t, e) {
          var n = this,
            r = 0;
          return (
            this._root &&
              this._root.iterate(function (e) {
                return r++, t(e[1], e[0], n);
              }, e),
            r
          );
        }),
        (ft.prototype.__ensureOwner = function (t) {
          return t === this.__ownerID
            ? this
            : t
            ? _t(this.size, this._root, t, this.__hash)
            : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (ft.isMap = ht);
      var Bn = "@@__IMMUTABLE_MAP__@@",
        zn = ft.prototype;
      (zn[Bn] = !0),
        (zn.delete = zn.remove),
        (zn.removeIn = zn.deleteIn),
        (pt.prototype.get = function (t, e, n, r) {
          for (var i = this.entries, o = 0, a = i.length; o < a; o++)
            if ($(n, i[o][0])) return i[o][1];
          return r;
        }),
        (pt.prototype.update = function (t, e, n, r, i, o, a) {
          for (
            var s = i === vn, u = this.entries, c = 0, l = u.length;
            c < l && !$(r, u[c][0]);
            c++
          );
          var h = c < l;
          if (h ? u[c][1] === i : s) return this;
          if ((f(a), (s || !h) && f(o), !s || 1 !== u.length)) {
            if (!h && !s && u.length >= qn) return Pt(t, u, r, i);
            var d = t && t === this.ownerID,
              m = d ? u : p(u);
            return (
              h
                ? s
                  ? c === l - 1
                    ? m.pop()
                    : (m[c] = m.pop())
                  : (m[c] = [r, i])
                : m.push([r, i]),
              d ? ((this.entries = m), this) : new pt(t, m)
            );
          }
        }),
        (dt.prototype.get = function (t, e, n, r) {
          void 0 === e && (e = ot(n));
          var i = 1 << ((0 === t ? e : e >>> t) & mn),
            o = this.bitmap;
          return 0 == (o & i)
            ? r
            : this.nodes[jt(o & (i - 1))].get(t + pn, e, n, r);
        }),
        (dt.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = ot(r));
          var s = (0 === e ? n : n >>> e) & mn,
            u = 1 << s,
            c = this.bitmap,
            l = 0 != (c & u);
          if (!l && i === vn) return this;
          var f = jt(c & (u - 1)),
            h = this.nodes,
            p = l ? h[f] : void 0,
            d = St(p, t, e + pn, n, r, i, o, a);
          if (d === p) return this;
          if (!l && d && h.length >= Vn) return Ct(t, h, c, s, d);
          if (l && !d && 2 === h.length && xt(h[1 ^ f])) return h[1 ^ f];
          if (l && d && 1 === h.length && xt(d)) return d;
          var m = t && t === this.ownerID,
            v = l ? (d ? c : c ^ u) : c | u,
            y = l ? (d ? Dt(h, f, d, m) : Ut(h, f, m)) : Lt(h, f, d, m);
          return m
            ? ((this.bitmap = v), (this.nodes = y), this)
            : new dt(t, v, y);
        }),
        (mt.prototype.get = function (t, e, n, r) {
          void 0 === e && (e = ot(n));
          var i = (0 === t ? e : e >>> t) & mn,
            o = this.nodes[i];
          return o ? o.get(t + pn, e, n, r) : r;
        }),
        (mt.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = ot(r));
          var s = (0 === e ? n : n >>> e) & mn,
            u = i === vn,
            c = this.nodes,
            l = c[s];
          if (u && !l) return this;
          var f = St(l, t, e + pn, n, r, i, o, a);
          if (f === l) return this;
          var h = this.count;
          if (l) {
            if (!f && --h < Kn) return kt(t, c, h, s);
          } else h++;
          var p = t && t === this.ownerID,
            d = Dt(c, s, f, p);
          return p
            ? ((this.count = h), (this.nodes = d), this)
            : new mt(t, h, d);
        }),
        (vt.prototype.get = function (t, e, n, r) {
          for (var i = this.entries, o = 0, a = i.length; o < a; o++)
            if ($(n, i[o][0])) return i[o][1];
          return r;
        }),
        (vt.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = ot(r));
          var s = i === vn;
          if (n !== this.keyHash)
            return s ? this : (f(a), f(o), Ot(this, t, e, n, [r, i]));
          for (
            var u = this.entries, c = 0, l = u.length;
            c < l && !$(r, u[c][0]);
            c++
          );
          var h = c < l;
          if (h ? u[c][1] === i : s) return this;
          if ((f(a), (s || !h) && f(o), s && 2 === l))
            return new yt(t, this.keyHash, u[1 ^ c]);
          var d = t && t === this.ownerID,
            m = d ? u : p(u);
          return (
            h
              ? s
                ? c === l - 1
                  ? m.pop()
                  : (m[c] = m.pop())
                : (m[c] = [r, i])
              : m.push([r, i]),
            d ? ((this.entries = m), this) : new vt(t, this.keyHash, m)
          );
        }),
        (yt.prototype.get = function (t, e, n, r) {
          return $(n, this.entry[0]) ? this.entry[1] : r;
        }),
        (yt.prototype.update = function (t, e, n, r, i, o, a) {
          var s = i === vn,
            u = $(r, this.entry[0]);
          return (u ? i === this.entry[1] : s)
            ? this
            : (f(a),
              s
                ? void f(o)
                : u
                ? t && t === this.ownerID
                  ? ((this.entry[1] = i), this)
                  : new yt(t, this.keyHash, [r, i])
                : (f(o), Ot(this, t, e, ot(r), [r, i])));
        }),
        (pt.prototype.iterate = vt.prototype.iterate =
          function (t, e) {
            for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
              if (!1 === t(n[e ? i - r : r])) return !1;
          }),
        (dt.prototype.iterate = mt.prototype.iterate =
          function (t, e) {
            for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
              var o = n[e ? i - r : r];
              if (o && !1 === o.iterate(t, e)) return !1;
            }
          }),
        (yt.prototype.iterate = function (t, e) {
          return t(this.entry);
        }),
        t(gt, _),
        (gt.prototype.next = function () {
          for (var t = this._type, e = this._stack; e; ) {
            var n,
              r = e.node,
              i = e.index++;
            if (r.entry) {
              if (0 === i) return bt(t, r.entry);
            } else if (r.entries) {
              if (((n = r.entries.length - 1), i <= n))
                return bt(t, r.entries[this._reverse ? n - i : i]);
            } else if (((n = r.nodes.length - 1), i <= n)) {
              var o = r.nodes[this._reverse ? n - i : i];
              if (o) {
                if (o.entry) return bt(t, o.entry);
                e = this._stack = wt(o, e);
              }
              continue;
            }
            e = this._stack = this._stack.__prev;
          }
          return T();
        });
      var Hn,
        qn = dn / 4,
        Vn = dn / 2,
        Kn = dn / 4;
      t(Ft, nt),
        (Ft.of = function () {
          return this(arguments);
        }),
        (Ft.prototype.toString = function () {
          return this.__toString("List [", "]");
        }),
        (Ft.prototype.get = function (t, e) {
          if ((t = m(this, t)) >= 0 && t < this.size) {
            var n = Yt(this, (t += this._origin));
            return n && n.array[t & mn];
          }
          return e;
        }),
        (Ft.prototype.set = function (t, e) {
          return Kt(this, t, e);
        }),
        (Ft.prototype.remove = function (t) {
          return this.has(t)
            ? 0 === t
              ? this.shift()
              : t === this.size - 1
              ? this.pop()
              : this.splice(t, 1)
            : this;
        }),
        (Ft.prototype.insert = function (t, e) {
          return this.splice(t, 0, e);
        }),
        (Ft.prototype.clear = function () {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = this._origin = this._capacity = 0),
              (this._level = pn),
              (this._root = this._tail = null),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Vt();
        }),
        (Ft.prototype.push = function () {
          var t = arguments,
            e = this.size;
          return this.withMutations(function (n) {
            $t(n, 0, e + t.length);
            for (var r = 0; r < t.length; r++) n.set(e + r, t[r]);
          });
        }),
        (Ft.prototype.pop = function () {
          return $t(this, 0, -1);
        }),
        (Ft.prototype.unshift = function () {
          var t = arguments;
          return this.withMutations(function (e) {
            $t(e, -t.length);
            for (var n = 0; n < t.length; n++) e.set(n, t[n]);
          });
        }),
        (Ft.prototype.shift = function () {
          return $t(this, 1);
        }),
        (Ft.prototype.merge = function () {
          return Xt(this, void 0, arguments);
        }),
        (Ft.prototype.mergeWith = function (t) {
          return Xt(this, t, un.call(arguments, 1));
        }),
        (Ft.prototype.mergeDeep = function () {
          return Xt(this, Mt, arguments);
        }),
        (Ft.prototype.mergeDeepWith = function (t) {
          var e = un.call(arguments, 1);
          return Xt(this, At(t), e);
        }),
        (Ft.prototype.setSize = function (t) {
          return $t(this, 0, t);
        }),
        (Ft.prototype.slice = function (t, e) {
          var n = this.size;
          return y(t, e, n) ? this : $t(this, g(t, n), b(e, n));
        }),
        (Ft.prototype.__iterator = function (t, e) {
          var n = 0,
            r = Ht(this, e);
          return new _(function () {
            var e = r();
            return e === $n ? T() : E(t, n++, e);
          });
        }),
        (Ft.prototype.__iterate = function (t, e) {
          for (
            var n, r = 0, i = Ht(this, e);
            (n = i()) !== $n && !1 !== t(n, r++, this);

          );
          return r;
        }),
        (Ft.prototype.__ensureOwner = function (t) {
          return t === this.__ownerID
            ? this
            : t
            ? qt(
                this._origin,
                this._capacity,
                this._level,
                this._root,
                this._tail,
                t,
                this.__hash
              )
            : ((this.__ownerID = t), this);
        }),
        (Ft.isList = Bt);
      var Wn = "@@__IMMUTABLE_LIST__@@",
        Gn = Ft.prototype;
      (Gn[Wn] = !0),
        (Gn.delete = Gn.remove),
        (Gn.setIn = zn.setIn),
        (Gn.deleteIn = Gn.removeIn = zn.removeIn),
        (Gn.update = zn.update),
        (Gn.updateIn = zn.updateIn),
        (Gn.mergeIn = zn.mergeIn),
        (Gn.mergeDeepIn = zn.mergeDeepIn),
        (Gn.withMutations = zn.withMutations),
        (Gn.asMutable = zn.asMutable),
        (Gn.asImmutable = zn.asImmutable),
        (Gn.wasAltered = zn.wasAltered),
        (zt.prototype.removeBefore = function (t, e, n) {
          if (n === e ? 1 << e : 0 === this.array.length) return this;
          var r = (n >>> e) & mn;
          if (r >= this.array.length) return new zt([], t);
          var i,
            o = 0 === r;
          if (e > 0) {
            var a = this.array[r];
            if ((i = a && a.removeBefore(t, e - pn, n)) === a && o) return this;
          }
          if (o && !i) return this;
          var s = Gt(this, t);
          if (!o) for (var u = 0; u < r; u++) s.array[u] = void 0;
          return i && (s.array[r] = i), s;
        }),
        (zt.prototype.removeAfter = function (t, e, n) {
          if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
          var r = ((n - 1) >>> e) & mn;
          if (r >= this.array.length) return this;
          var i;
          if (e > 0) {
            var o = this.array[r];
            if (
              (i = o && o.removeAfter(t, e - pn, n)) === o &&
              r === this.array.length - 1
            )
              return this;
          }
          var a = Gt(this, t);
          return a.array.splice(r + 1), i && (a.array[r] = i), a;
        });
      var Yn,
        $n = {};
      t(Qt, ft),
        (Qt.of = function () {
          return this(arguments);
        }),
        (Qt.prototype.toString = function () {
          return this.__toString("OrderedMap {", "}");
        }),
        (Qt.prototype.get = function (t, e) {
          var n = this._map.get(t);
          return void 0 !== n ? this._list.get(n)[1] : e;
        }),
        (Qt.prototype.clear = function () {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
            : ee();
        }),
        (Qt.prototype.set = function (t, e) {
          return ne(this, t, e);
        }),
        (Qt.prototype.remove = function (t) {
          return ne(this, t, vn);
        }),
        (Qt.prototype.wasAltered = function () {
          return this._map.wasAltered() || this._list.wasAltered();
        }),
        (Qt.prototype.__iterate = function (t, e) {
          var n = this;
          return this._list.__iterate(function (e) {
            return e && t(e[1], e[0], n);
          }, e);
        }),
        (Qt.prototype.__iterator = function (t, e) {
          return this._list.fromEntrySeq().__iterator(t, e);
        }),
        (Qt.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this;
          var e = this._map.__ensureOwner(t),
            n = this._list.__ensureOwner(t);
          return t
            ? te(e, n, t, this.__hash)
            : ((this.__ownerID = t), (this._map = e), (this._list = n), this);
        }),
        (Qt.isOrderedMap = Zt),
        (Qt.prototype[hn] = !0),
        (Qt.prototype.delete = Qt.prototype.remove);
      var Xn;
      t(re, I),
        (re.prototype.get = function (t, e) {
          return this._iter.get(t, e);
        }),
        (re.prototype.has = function (t) {
          return this._iter.has(t);
        }),
        (re.prototype.valueSeq = function () {
          return this._iter.valueSeq();
        }),
        (re.prototype.reverse = function () {
          var t = this,
            e = ce(this, !0);
          return (
            this._useKeys ||
              (e.valueSeq = function () {
                return t._iter.toSeq().reverse();
              }),
            e
          );
        }),
        (re.prototype.map = function (t, e) {
          var n = this,
            r = ue(this, t, e);
          return (
            this._useKeys ||
              (r.valueSeq = function () {
                return n._iter.toSeq().map(t, e);
              }),
            r
          );
        }),
        (re.prototype.__iterate = function (t, e) {
          var n,
            r = this;
          return this._iter.__iterate(
            this._useKeys
              ? function (e, n) {
                  return t(e, n, r);
                }
              : ((n = e ? Oe(this) : 0),
                function (i) {
                  return t(i, e ? --n : n++, r);
                }),
            e
          );
        }),
        (re.prototype.__iterator = function (t, e) {
          if (this._useKeys) return this._iter.__iterator(t, e);
          var n = this._iter.__iterator(wn, e),
            r = e ? Oe(this) : 0;
          return new _(function () {
            var i = n.next();
            return i.done ? i : E(t, e ? --r : r++, i.value, i);
          });
        }),
        (re.prototype[hn] = !0),
        t(ie, M),
        (ie.prototype.includes = function (t) {
          return this._iter.includes(t);
        }),
        (ie.prototype.__iterate = function (t, e) {
          var n = this,
            r = 0;
          return this._iter.__iterate(function (e) {
            return t(e, r++, n);
          }, e);
        }),
        (ie.prototype.__iterator = function (t, e) {
          var n = this._iter.__iterator(wn, e),
            r = 0;
          return new _(function () {
            var e = n.next();
            return e.done ? e : E(t, r++, e.value, e);
          });
        }),
        t(oe, A),
        (oe.prototype.has = function (t) {
          return this._iter.includes(t);
        }),
        (oe.prototype.__iterate = function (t, e) {
          var n = this;
          return this._iter.__iterate(function (e) {
            return t(e, e, n);
          }, e);
        }),
        (oe.prototype.__iterator = function (t, e) {
          var n = this._iter.__iterator(wn, e);
          return new _(function () {
            var e = n.next();
            return e.done ? e : E(t, e.value, e.value, e);
          });
        }),
        t(ae, I),
        (ae.prototype.entrySeq = function () {
          return this._iter.toSeq();
        }),
        (ae.prototype.__iterate = function (t, e) {
          var n = this;
          return this._iter.__iterate(function (e) {
            if (e) {
              xe(e);
              var r = o(e);
              return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
            }
          }, e);
        }),
        (ae.prototype.__iterator = function (t, e) {
          var n = this._iter.__iterator(wn, e);
          return new _(function () {
            for (;;) {
              var e = n.next();
              if (e.done) return e;
              var r = e.value;
              if (r) {
                xe(r);
                var i = o(r);
                return E(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e);
              }
            }
          });
        }),
        (ie.prototype.cacheResult =
          re.prototype.cacheResult =
          oe.prototype.cacheResult =
          ae.prototype.cacheResult =
            Ce),
        t(Ae, et),
        (Ae.prototype.toString = function () {
          return this.__toString(Ne(this) + " {", "}");
        }),
        (Ae.prototype.has = function (t) {
          return this._defaultValues.hasOwnProperty(t);
        }),
        (Ae.prototype.get = function (t, e) {
          if (!this.has(t)) return e;
          var n = this._defaultValues[t];
          return this._map ? this._map.get(t, n) : n;
        }),
        (Ae.prototype.clear = function () {
          if (this.__ownerID) return this._map && this._map.clear(), this;
          var t = this.constructor;
          return t._empty || (t._empty = Re(this, Et()));
        }),
        (Ae.prototype.set = function (t, e) {
          if (!this.has(t))
            throw new Error(
              'Cannot set unknown key "' + t + '" on ' + Ne(this)
            );
          if (this._map && !this._map.has(t) && e === this._defaultValues[t])
            return this;
          var n = this._map && this._map.set(t, e);
          return this.__ownerID || n === this._map ? this : Re(this, n);
        }),
        (Ae.prototype.remove = function (t) {
          if (!this.has(t)) return this;
          var e = this._map && this._map.remove(t);
          return this.__ownerID || e === this._map ? this : Re(this, e);
        }),
        (Ae.prototype.wasAltered = function () {
          return this._map.wasAltered();
        }),
        (Ae.prototype.__iterator = function (t, e) {
          var r = this;
          return n(this._defaultValues)
            .map(function (t, e) {
              return r.get(e);
            })
            .__iterator(t, e);
        }),
        (Ae.prototype.__iterate = function (t, e) {
          var r = this;
          return n(this._defaultValues)
            .map(function (t, e) {
              return r.get(e);
            })
            .__iterate(t, e);
        }),
        (Ae.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this;
          var e = this._map && this._map.__ensureOwner(t);
          return t
            ? Re(this, e, t)
            : ((this.__ownerID = t), (this._map = e), this);
        });
      var Jn = Ae.prototype;
      (Jn.delete = Jn.remove),
        (Jn.deleteIn = Jn.removeIn = zn.removeIn),
        (Jn.merge = zn.merge),
        (Jn.mergeWith = zn.mergeWith),
        (Jn.mergeIn = zn.mergeIn),
        (Jn.mergeDeep = zn.mergeDeep),
        (Jn.mergeDeepWith = zn.mergeDeepWith),
        (Jn.mergeDeepIn = zn.mergeDeepIn),
        (Jn.setIn = zn.setIn),
        (Jn.update = zn.update),
        (Jn.updateIn = zn.updateIn),
        (Jn.withMutations = zn.withMutations),
        (Jn.asMutable = zn.asMutable),
        (Jn.asImmutable = zn.asImmutable),
        t(Le, rt),
        (Le.of = function () {
          return this(arguments);
        }),
        (Le.fromKeys = function (t) {
          return this(n(t).keySeq());
        }),
        (Le.prototype.toString = function () {
          return this.__toString("Set {", "}");
        }),
        (Le.prototype.has = function (t) {
          return this._map.has(t);
        }),
        (Le.prototype.add = function (t) {
          return Fe(this, this._map.set(t, !0));
        }),
        (Le.prototype.remove = function (t) {
          return Fe(this, this._map.remove(t));
        }),
        (Le.prototype.clear = function () {
          return Fe(this, this._map.clear());
        }),
        (Le.prototype.union = function () {
          var t = un.call(arguments, 0);
          return 0 ===
            (t = t.filter(function (t) {
              return 0 !== t.size;
            })).length
            ? this
            : 0 !== this.size || this.__ownerID || 1 !== t.length
            ? this.withMutations(function (e) {
                for (var n = 0; n < t.length; n++)
                  i(t[n]).forEach(function (t) {
                    return e.add(t);
                  });
              })
            : this.constructor(t[0]);
        }),
        (Le.prototype.intersect = function () {
          var t = un.call(arguments, 0);
          if (0 === t.length) return this;
          t = t.map(function (t) {
            return i(t);
          });
          var e = this;
          return this.withMutations(function (n) {
            e.forEach(function (e) {
              t.every(function (t) {
                return t.includes(e);
              }) || n.remove(e);
            });
          });
        }),
        (Le.prototype.subtract = function () {
          var t = un.call(arguments, 0);
          if (0 === t.length) return this;
          t = t.map(function (t) {
            return i(t);
          });
          var e = this;
          return this.withMutations(function (n) {
            e.forEach(function (e) {
              t.some(function (t) {
                return t.includes(e);
              }) && n.remove(e);
            });
          });
        }),
        (Le.prototype.merge = function () {
          return this.union.apply(this, arguments);
        }),
        (Le.prototype.mergeWith = function (t) {
          var e = un.call(arguments, 1);
          return this.union.apply(this, e);
        }),
        (Le.prototype.sort = function (t) {
          return He(we(this, t));
        }),
        (Le.prototype.sortBy = function (t, e) {
          return He(we(this, e, t));
        }),
        (Le.prototype.wasAltered = function () {
          return this._map.wasAltered();
        }),
        (Le.prototype.__iterate = function (t, e) {
          var n = this;
          return this._map.__iterate(function (e, r) {
            return t(r, r, n);
          }, e);
        }),
        (Le.prototype.__iterator = function (t, e) {
          return this._map
            .map(function (t, e) {
              return e;
            })
            .__iterator(t, e);
        }),
        (Le.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this;
          var e = this._map.__ensureOwner(t);
          return t
            ? this.__make(e, t)
            : ((this.__ownerID = t), (this._map = e), this);
        }),
        (Le.isSet = Ue);
      var Qn = "@@__IMMUTABLE_SET__@@",
        Zn = Le.prototype;
      (Zn[Qn] = !0),
        (Zn.delete = Zn.remove),
        (Zn.mergeDeep = Zn.merge),
        (Zn.mergeDeepWith = Zn.mergeWith),
        (Zn.withMutations = zn.withMutations),
        (Zn.asMutable = zn.asMutable),
        (Zn.asImmutable = zn.asImmutable),
        (Zn.__empty = ze),
        (Zn.__make = Be);
      var tr;
      t(He, Le),
        (He.of = function () {
          return this(arguments);
        }),
        (He.fromKeys = function (t) {
          return this(n(t).keySeq());
        }),
        (He.prototype.toString = function () {
          return this.__toString("OrderedSet {", "}");
        }),
        (He.isOrderedSet = qe);
      var er = He.prototype;
      (er[hn] = !0), (er.__empty = Ke), (er.__make = Ve);
      var nr;
      t(We, nt),
        (We.of = function () {
          return this(arguments);
        }),
        (We.prototype.toString = function () {
          return this.__toString("Stack [", "]");
        }),
        (We.prototype.get = function (t, e) {
          var n = this._head;
          for (t = m(this, t); n && t--; ) n = n.next;
          return n ? n.value : e;
        }),
        (We.prototype.peek = function () {
          return this._head && this._head.value;
        }),
        (We.prototype.push = function () {
          if (0 === arguments.length) return this;
          for (
            var t = this.size + arguments.length,
              e = this._head,
              n = arguments.length - 1;
            n >= 0;
            n--
          )
            e = { value: arguments[n], next: e };
          return this.__ownerID
            ? ((this.size = t),
              (this._head = e),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Ye(t, e);
        }),
        (We.prototype.pushAll = function (t) {
          if (0 === (t = r(t)).size) return this;
          lt(t.size);
          var e = this.size,
            n = this._head;
          return (
            t.reverse().forEach(function (t) {
              e++, (n = { value: t, next: n });
            }),
            this.__ownerID
              ? ((this.size = e),
                (this._head = n),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Ye(e, n)
          );
        }),
        (We.prototype.pop = function () {
          return this.slice(1);
        }),
        (We.prototype.unshift = function () {
          return this.push.apply(this, arguments);
        }),
        (We.prototype.unshiftAll = function (t) {
          return this.pushAll(t);
        }),
        (We.prototype.shift = function () {
          return this.pop.apply(this, arguments);
        }),
        (We.prototype.clear = function () {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0),
              (this._head = void 0),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : $e();
        }),
        (We.prototype.slice = function (t, e) {
          if (y(t, e, this.size)) return this;
          var n = g(t, this.size);
          if (b(e, this.size) !== this.size)
            return nt.prototype.slice.call(this, t, e);
          for (var r = this.size - n, i = this._head; n--; ) i = i.next;
          return this.__ownerID
            ? ((this.size = r),
              (this._head = i),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Ye(r, i);
        }),
        (We.prototype.__ensureOwner = function (t) {
          return t === this.__ownerID
            ? this
            : t
            ? Ye(this.size, this._head, t, this.__hash)
            : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (We.prototype.__iterate = function (t, e) {
          if (e) return this.reverse().__iterate(t);
          for (var n = 0, r = this._head; r && !1 !== t(r.value, n++, this); )
            r = r.next;
          return n;
        }),
        (We.prototype.__iterator = function (t, e) {
          if (e) return this.reverse().__iterator(t);
          var n = 0,
            r = this._head;
          return new _(function () {
            if (r) {
              var e = r.value;
              return (r = r.next), E(t, n++, e);
            }
            return T();
          });
        }),
        (We.isStack = Ge);
      var rr = "@@__IMMUTABLE_STACK__@@",
        ir = We.prototype;
      (ir[rr] = !0),
        (ir.withMutations = zn.withMutations),
        (ir.asMutable = zn.asMutable),
        (ir.asImmutable = zn.asImmutable),
        (ir.wasAltered = zn.wasAltered);
      var or;
      (e.Iterator = _),
        Xe(e, {
          toArray: function () {
            lt(this.size);
            var t = new Array(this.size || 0);
            return (
              this.valueSeq().__iterate(function (e, n) {
                t[n] = e;
              }),
              t
            );
          },
          toIndexedSeq: function () {
            return new ie(this);
          },
          toJS: function () {
            return this.toSeq()
              .map(function (t) {
                return t && "function" == typeof t.toJS ? t.toJS() : t;
              })
              .__toJS();
          },
          toJSON: function () {
            return this.toSeq()
              .map(function (t) {
                return t && "function" == typeof t.toJSON ? t.toJSON() : t;
              })
              .__toJS();
          },
          toKeyedSeq: function () {
            return new re(this, !0);
          },
          toMap: function () {
            return ft(this.toKeyedSeq());
          },
          toObject: function () {
            lt(this.size);
            var t = {};
            return (
              this.__iterate(function (e, n) {
                t[n] = e;
              }),
              t
            );
          },
          toOrderedMap: function () {
            return Qt(this.toKeyedSeq());
          },
          toOrderedSet: function () {
            return He(a(this) ? this.valueSeq() : this);
          },
          toSet: function () {
            return Le(a(this) ? this.valueSeq() : this);
          },
          toSetSeq: function () {
            return new oe(this);
          },
          toSeq: function () {
            return s(this)
              ? this.toIndexedSeq()
              : a(this)
              ? this.toKeyedSeq()
              : this.toSetSeq();
          },
          toStack: function () {
            return We(a(this) ? this.valueSeq() : this);
          },
          toList: function () {
            return Ft(a(this) ? this.valueSeq() : this);
          },
          toString: function () {
            return "[Iterable]";
          },
          __toString: function (t, e) {
            return 0 === this.size
              ? t + e
              : t +
                  " " +
                  this.toSeq().map(this.__toStringMapper).join(", ") +
                  " " +
                  e;
          },
          concat: function () {
            return Se(this, ve(this, un.call(arguments, 0)));
          },
          includes: function (t) {
            return this.some(function (e) {
              return $(e, t);
            });
          },
          entries: function () {
            return this.__iterator(_n);
          },
          every: function (t, e) {
            lt(this.size);
            var n = !0;
            return (
              this.__iterate(function (r, i, o) {
                if (!t.call(e, r, i, o)) return (n = !1), !1;
              }),
              n
            );
          },
          filter: function (t, e) {
            return Se(this, le(this, t, e, !0));
          },
          find: function (t, e, n) {
            var r = this.findEntry(t, e);
            return r ? r[1] : n;
          },
          forEach: function (t, e) {
            return lt(this.size), this.__iterate(e ? t.bind(e) : t);
          },
          join: function (t) {
            lt(this.size), (t = void 0 !== t ? "" + t : ",");
            var e = "",
              n = !0;
            return (
              this.__iterate(function (r) {
                n ? (n = !1) : (e += t),
                  (e += null !== r && void 0 !== r ? r.toString() : "");
              }),
              e
            );
          },
          keys: function () {
            return this.__iterator(bn);
          },
          map: function (t, e) {
            return Se(this, ue(this, t, e));
          },
          reduce: function (t, e, n) {
            lt(this.size);
            var r, i;
            return (
              arguments.length < 2 ? (i = !0) : (r = e),
              this.__iterate(function (e, o, a) {
                i ? ((i = !1), (r = e)) : (r = t.call(n, r, e, o, a));
              }),
              r
            );
          },
          reduceRight: function (t, e, n) {
            var r = this.toKeyedSeq().reverse();
            return r.reduce.apply(r, arguments);
          },
          reverse: function () {
            return Se(this, ce(this, !0));
          },
          slice: function (t, e) {
            return Se(this, pe(this, t, e, !0));
          },
          some: function (t, e) {
            return !this.every(Ze(t), e);
          },
          sort: function (t) {
            return Se(this, we(this, t));
          },
          values: function () {
            return this.__iterator(wn);
          },
          butLast: function () {
            return this.slice(0, -1);
          },
          isEmpty: function () {
            return void 0 !== this.size
              ? 0 === this.size
              : !this.some(function () {
                  return !0;
                });
          },
          count: function (t, e) {
            return d(t ? this.toSeq().filter(t, e) : this);
          },
          countBy: function (t, e) {
            return fe(this, t, e);
          },
          equals: function (t) {
            return X(this, t);
          },
          entrySeq: function () {
            var t = this;
            if (t._cache) return new R(t._cache);
            var e = t.toSeq().map(Qe).toIndexedSeq();
            return (
              (e.fromEntrySeq = function () {
                return t.toSeq();
              }),
              e
            );
          },
          filterNot: function (t, e) {
            return this.filter(Ze(t), e);
          },
          findEntry: function (t, e, n) {
            var r = n;
            return (
              this.__iterate(function (n, i, o) {
                if (t.call(e, n, i, o)) return (r = [i, n]), !1;
              }),
              r
            );
          },
          findKey: function (t, e) {
            var n = this.findEntry(t, e);
            return n && n[0];
          },
          findLast: function (t, e, n) {
            return this.toKeyedSeq().reverse().find(t, e, n);
          },
          findLastEntry: function (t, e, n) {
            return this.toKeyedSeq().reverse().findEntry(t, e, n);
          },
          findLastKey: function (t, e) {
            return this.toKeyedSeq().reverse().findKey(t, e);
          },
          first: function () {
            return this.find(v);
          },
          flatMap: function (t, e) {
            return Se(this, ge(this, t, e));
          },
          flatten: function (t) {
            return Se(this, ye(this, t, !0));
          },
          fromEntrySeq: function () {
            return new ae(this);
          },
          get: function (t, e) {
            return this.find(
              function (e, n) {
                return $(n, t);
              },
              void 0,
              e
            );
          },
          getIn: function (t, e) {
            for (var n, r = this, i = Me(t); !(n = i.next()).done; ) {
              var o = n.value;
              if ((r = r && r.get ? r.get(o, vn) : vn) === vn) return e;
            }
            return r;
          },
          groupBy: function (t, e) {
            return he(this, t, e);
          },
          has: function (t) {
            return this.get(t, vn) !== vn;
          },
          hasIn: function (t) {
            return this.getIn(t, vn) !== vn;
          },
          isSubset: function (t) {
            return (
              (t = "function" == typeof t.includes ? t : e(t)),
              this.every(function (e) {
                return t.includes(e);
              })
            );
          },
          isSuperset: function (t) {
            return (t = "function" == typeof t.isSubset ? t : e(t)).isSubset(
              this
            );
          },
          keyOf: function (t) {
            return this.findKey(function (e) {
              return $(e, t);
            });
          },
          keySeq: function () {
            return this.toSeq().map(Je).toIndexedSeq();
          },
          last: function () {
            return this.toSeq().reverse().first();
          },
          lastKeyOf: function (t) {
            return this.toKeyedSeq().reverse().keyOf(t);
          },
          max: function (t) {
            return _e(this, t);
          },
          maxBy: function (t, e) {
            return _e(this, e, t);
          },
          min: function (t) {
            return _e(this, t ? tn(t) : rn);
          },
          minBy: function (t, e) {
            return _e(this, e ? tn(e) : rn, t);
          },
          rest: function () {
            return this.slice(1);
          },
          skip: function (t) {
            return this.slice(Math.max(0, t));
          },
          skipLast: function (t) {
            return Se(this, this.toSeq().reverse().skip(t).reverse());
          },
          skipWhile: function (t, e) {
            return Se(this, me(this, t, e, !0));
          },
          skipUntil: function (t, e) {
            return this.skipWhile(Ze(t), e);
          },
          sortBy: function (t, e) {
            return Se(this, we(this, e, t));
          },
          take: function (t) {
            return this.slice(0, Math.max(0, t));
          },
          takeLast: function (t) {
            return Se(this, this.toSeq().reverse().take(t).reverse());
          },
          takeWhile: function (t, e) {
            return Se(this, de(this, t, e));
          },
          takeUntil: function (t, e) {
            return this.takeWhile(Ze(t), e);
          },
          valueSeq: function () {
            return this.toIndexedSeq();
          },
          hashCode: function () {
            return this.__hash || (this.__hash = on(this));
          },
        });
      var ar = e.prototype;
      (ar[cn] = !0),
        (ar[Sn] = ar.values),
        (ar.__toJS = ar.toArray),
        (ar.__toStringMapper = en),
        (ar.inspect = ar.toSource =
          function () {
            return this.toString();
          }),
        (ar.chain = ar.flatMap),
        (ar.contains = ar.includes),
        Xe(n, {
          flip: function () {
            return Se(this, se(this));
          },
          mapEntries: function (t, e) {
            var n = this,
              r = 0;
            return Se(
              this,
              this.toSeq()
                .map(function (i, o) {
                  return t.call(e, [o, i], r++, n);
                })
                .fromEntrySeq()
            );
          },
          mapKeys: function (t, e) {
            var n = this;
            return Se(
              this,
              this.toSeq()
                .flip()
                .map(function (r, i) {
                  return t.call(e, r, i, n);
                })
                .flip()
            );
          },
        });
      var sr = n.prototype;
      return (
        (sr[ln] = !0),
        (sr[Sn] = ar.entries),
        (sr.__toJS = ar.toObject),
        (sr.__toStringMapper = function (t, e) {
          return JSON.stringify(e) + ": " + en(t);
        }),
        Xe(r, {
          toKeyedSeq: function () {
            return new re(this, !1);
          },
          filter: function (t, e) {
            return Se(this, le(this, t, e, !1));
          },
          findIndex: function (t, e) {
            var n = this.findEntry(t, e);
            return n ? n[0] : -1;
          },
          indexOf: function (t) {
            var e = this.keyOf(t);
            return void 0 === e ? -1 : e;
          },
          lastIndexOf: function (t) {
            var e = this.lastKeyOf(t);
            return void 0 === e ? -1 : e;
          },
          reverse: function () {
            return Se(this, ce(this, !1));
          },
          slice: function (t, e) {
            return Se(this, pe(this, t, e, !1));
          },
          splice: function (t, e) {
            var n = arguments.length;
            if (((e = Math.max(0 | e, 0)), 0 === n || (2 === n && !e)))
              return this;
            t = g(t, t < 0 ? this.count() : this.size);
            var r = this.slice(0, t);
            return Se(
              this,
              1 === n ? r : r.concat(p(arguments, 2), this.slice(t + e))
            );
          },
          findLastIndex: function (t, e) {
            var n = this.findLastEntry(t, e);
            return n ? n[0] : -1;
          },
          first: function () {
            return this.get(0);
          },
          flatten: function (t) {
            return Se(this, ye(this, t, !1));
          },
          get: function (t, e) {
            return (t = m(this, t)) < 0 ||
              this.size === 1 / 0 ||
              (void 0 !== this.size && t > this.size)
              ? e
              : this.find(
                  function (e, n) {
                    return n === t;
                  },
                  void 0,
                  e
                );
          },
          has: function (t) {
            return (
              (t = m(this, t)) >= 0 &&
              (void 0 !== this.size
                ? this.size === 1 / 0 || t < this.size
                : -1 !== this.indexOf(t))
            );
          },
          interpose: function (t) {
            return Se(this, be(this, t));
          },
          interleave: function () {
            var t = [this].concat(p(arguments)),
              e = Te(this.toSeq(), M.of, t),
              n = e.flatten(!0);
            return e.size && (n.size = e.size * t.length), Se(this, n);
          },
          keySeq: function () {
            return Z(0, this.size);
          },
          last: function () {
            return this.get(-1);
          },
          skipWhile: function (t, e) {
            return Se(this, me(this, t, e, !1));
          },
          zip: function () {
            return Se(this, Te(this, nn, [this].concat(p(arguments))));
          },
          zipWith: function (t) {
            var e = p(arguments);
            return (e[0] = this), Se(this, Te(this, t, e));
          },
        }),
        (r.prototype[fn] = !0),
        (r.prototype[hn] = !0),
        Xe(i, {
          get: function (t, e) {
            return this.has(t) ? t : e;
          },
          includes: function (t) {
            return this.has(t);
          },
          keySeq: function () {
            return this.valueSeq();
          },
        }),
        (i.prototype.has = ar.includes),
        (i.prototype.contains = i.prototype.includes),
        Xe(I, n.prototype),
        Xe(M, r.prototype),
        Xe(A, i.prototype),
        Xe(et, n.prototype),
        Xe(nt, r.prototype),
        Xe(rt, i.prototype),
        {
          Iterable: e,
          Seq: C,
          Collection: tt,
          Map: ft,
          OrderedMap: Qt,
          List: Ft,
          Stack: We,
          Set: Le,
          OrderedSet: He,
          Record: Ae,
          Range: Z,
          Repeat: J,
          is: $,
          fromJS: K,
        }
      );
    });
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      for (
        var e = arguments.length - 1,
          n =
            "Minified React error #" +
            t +
            "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" +
            t,
          r = 0;
        r < e;
        r++
      )
        n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      throw (
        ((e = Error(
          n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        )),
        (e.name = "Invariant Violation"),
        (e.framesToPop = 1),
        e)
      );
    }
    function i(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = n || _);
    }
    function o(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = n || _);
    }
    function a() {}
    function s(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = n || _);
    }
    function u(t, e, n) {
      var r,
        i = {},
        o = null,
        a = null;
      if (null != e)
        for (r in (void 0 !== e.ref && (a = e.ref),
        void 0 !== e.key && (o = "" + e.key),
        e))
          x.call(e, r) && !P.hasOwnProperty(r) && (i[r] = e[r]);
      var s = arguments.length - 2;
      if (1 === s) i.children = n;
      else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        i.children = u;
      }
      if (t && t.defaultProps)
        for (r in (s = t.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
      return {
        $$typeof: O,
        type: t,
        key: o,
        ref: a,
        props: i,
        _owner: S.current,
      };
    }
    function c(t) {
      return "object" == typeof t && null !== t && t.$$typeof === O;
    }
    function l(t) {
      var e = { "=": "=0", ":": "=2" };
      return (
        "$" +
        ("" + t).replace(/[=:]/g, function (t) {
          return e[t];
        })
      );
    }
    function f(t, e, n, r) {
      if (A.length) {
        var i = A.pop();
        return (
          (i.result = t),
          (i.keyPrefix = e),
          (i.func = n),
          (i.context = r),
          (i.count = 0),
          i
        );
      }
      return { result: t, keyPrefix: e, func: n, context: r, count: 0 };
    }
    function h(t) {
      (t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > A.length && A.push(t);
    }
    function p(t, e, n, i) {
      var o = typeof t;
      if (
        (("undefined" !== o && "boolean" !== o) || (t = null),
        null === t ||
          "string" === o ||
          "number" === o ||
          ("object" === o && t.$$typeof === C) ||
          ("object" === o && t.$$typeof === I))
      )
        return n(i, t, "" === e ? "." + d(t, 0) : e), 1;
      var a = 0;
      if (((e = "" === e ? "." : e + ":"), Array.isArray(t)))
        for (var s = 0; s < t.length; s++) {
          var u = e + d((o = t[s]), s);
          a += p(o, u, n, i);
        }
      else if ("function" == typeof (u = (k && t[k]) || t["@@iterator"]))
        for (t = u.call(t), s = 0; !(o = t.next()).done; )
          (o = o.value), (u = e + d(o, s++)), (a += p(o, u, n, i));
      else
        "object" === o &&
          ((n = "" + t),
          r(
            "31",
            "[object Object]" === n
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : n,
            ""
          ));
      return a;
    }
    function d(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? l(t.key)
        : e.toString(36);
    }
    function m(t, e) {
      t.func.call(t.context, e, t.count++);
    }
    function v(t, e, n) {
      var r = t.result,
        i = t.keyPrefix;
      (t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? y(t, r, n, w.thatReturnsArgument)
          : null != t &&
            (c(t) &&
              ((e =
                i +
                (!t.key || (e && e.key === t.key)
                  ? ""
                  : ("" + t.key).replace(M, "$&/") + "/") +
                n),
              (t = {
                $$typeof: O,
                type: t.type,
                key: e,
                ref: t.ref,
                props: t.props,
                _owner: t._owner,
              })),
            r.push(t));
    }
    function y(t, e, n, r, i) {
      var o = "";
      null != n && (o = ("" + n).replace(M, "$&/") + "/"),
        (e = f(e, o, r, i)),
        null == t || p(t, "", v, e),
        h(e);
    }
    /** @license React v16.1.1
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var g = n(16),
      b = n(17),
      w = n(6),
      _ = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      };
    (i.prototype.isReactComponent = {}),
      (i.prototype.setState = function (t, e) {
        "object" != typeof t && "function" != typeof t && null != t && r("85"),
          this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (i.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (a.prototype = i.prototype);
    var E = (o.prototype = new a());
    (E.constructor = o), g(E, i.prototype), (E.isPureReactComponent = !0);
    var T = (s.prototype = new a());
    (T.constructor = s),
      g(T, i.prototype),
      (T.unstable_isAsyncReactComponent = !0),
      (T.render = function () {
        return this.props.children;
      });
    var S = { current: null },
      x = Object.prototype.hasOwnProperty,
      O =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      P = { key: !0, ref: !0, __self: !0, __source: !0 },
      k = "function" == typeof Symbol && Symbol.iterator,
      C =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      I =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.portal")) ||
        60106,
      M = /\/+/g,
      A = [];
    "function" == typeof Symbol && Symbol.for && Symbol.for("react.fragment");
    var R = {
        Children: {
          map: function (t, e, n) {
            if (null == t) return t;
            var r = [];
            return y(t, r, null, e, n), r;
          },
          forEach: function (t, e, n) {
            if (null == t) return t;
            (e = f(null, null, e, n)), null == t || p(t, "", m, e), h(e);
          },
          count: function (t) {
            return null == t ? 0 : p(t, "", w.thatReturnsNull, null);
          },
          toArray: function (t) {
            var e = [];
            return y(t, e, null, w.thatReturnsArgument), e;
          },
          only: function (t) {
            return c(t) || r("143"), t;
          },
        },
        Component: i,
        PureComponent: o,
        unstable_AsyncComponent: s,
        createElement: u,
        cloneElement: function (t, e, n) {
          var r = g({}, t.props),
            i = t.key,
            o = t.ref,
            a = t._owner;
          if (null != e) {
            if (
              (void 0 !== e.ref && ((o = e.ref), (a = S.current)),
              void 0 !== e.key && (i = "" + e.key),
              t.type && t.type.defaultProps)
            )
              var s = t.type.defaultProps;
            for (u in e)
              x.call(e, u) &&
                !P.hasOwnProperty(u) &&
                (r[u] = void 0 === e[u] && void 0 !== s ? s[u] : e[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) r.children = n;
          else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
            r.children = s;
          }
          return {
            $$typeof: O,
            type: t.type,
            key: i,
            ref: o,
            props: r,
            _owner: a,
          };
        },
        createFactory: function (t) {
          var e = u.bind(null, t);
          return (e.type = t), e;
        },
        isValidElement: c,
        version: "16.1.1",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: S,
          assign: g,
        },
      },
      N = Object.freeze({ default: R }),
      j = (N && R) || N;
    t.exports = j.default ? j.default : j;
  },
  function (t, e, n) {
    "use strict";
    function r() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
        } catch (t) {
          console.error(t);
        }
    }
    r(), (t.exports = n(46));
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      for (
        var e = arguments.length - 1,
          n =
            "Minified React error #" +
            t +
            "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" +
            t,
          r = 0;
        r < e;
        r++
      )
        n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      throw (
        ((e = Error(
          n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        )),
        (e.name = "Invariant Violation"),
        (e.framesToPop = 1),
        e)
      );
    }
    function i(t, e) {
      return (t & e) === e;
    }
    function o(t, e) {
      if (
        kn.hasOwnProperty(t) ||
        (2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1]))
      )
        return !1;
      if (null === e) return !0;
      switch (typeof e) {
        case "boolean":
          return (
            kn.hasOwnProperty(t)
              ? (t = !0)
              : (e = a(t))
              ? (t =
                  e.hasBooleanValue ||
                  e.hasStringBooleanValue ||
                  e.hasOverloadedBooleanValue)
              : ((t = t.toLowerCase().slice(0, 5)),
                (t = "data-" === t || "aria-" === t)),
            t
          );
        case "undefined":
        case "number":
        case "string":
        case "object":
          return !0;
        default:
          return !1;
      }
    }
    function a(t) {
      return In.hasOwnProperty(t) ? In[t] : null;
    }
    function s(t) {
      return t[1].toUpperCase();
    }
    function u(t, e, n, r, i, o, a, s, u) {
      (qn._hasCaughtError = !1), (qn._caughtError = null);
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        e.apply(n, c);
      } catch (t) {
        (qn._caughtError = t), (qn._hasCaughtError = !0);
      }
    }
    function c() {
      if (qn._hasRethrowError) {
        var t = qn._rethrowError;
        throw ((qn._rethrowError = null), (qn._hasRethrowError = !1), t);
      }
    }
    function l() {
      if (Vn)
        for (var t in Kn) {
          var e = Kn[t],
            n = Vn.indexOf(t);
          if ((-1 < n || r("96", t), !Wn[n])) {
            e.extractEvents || r("97", t), (Wn[n] = e), (n = e.eventTypes);
            for (var i in n) {
              var o = void 0,
                a = n[i],
                s = e,
                u = i;
              Gn.hasOwnProperty(u) && r("99", u), (Gn[u] = a);
              var c = a.phasedRegistrationNames;
              if (c) {
                for (o in c) c.hasOwnProperty(o) && f(c[o], s, u);
                o = !0;
              } else
                a.registrationName
                  ? (f(a.registrationName, s, u), (o = !0))
                  : (o = !1);
              o || r("98", i, t);
            }
          }
        }
    }
    function f(t, e, n) {
      Yn[t] && r("100", t), (Yn[t] = e), ($n[t] = e.eventTypes[n].dependencies);
    }
    function h(t) {
      Vn && r("101"), (Vn = Array.prototype.slice.call(t)), l();
    }
    function p(t) {
      var e,
        n = !1;
      for (e in t)
        if (t.hasOwnProperty(e)) {
          var i = t[e];
          (Kn.hasOwnProperty(e) && Kn[e] === i) ||
            (Kn[e] && r("102", e), (Kn[e] = i), (n = !0));
        }
      n && l();
    }
    function d(t, e, n, r) {
      (e = t.type || "unknown-event"),
        (t.currentTarget = Zn(r)),
        qn.invokeGuardedCallbackAndCatchFirstError(e, n, void 0, t),
        (t.currentTarget = null);
    }
    function m(t, e) {
      return (
        null == e && r("30"),
        null == t
          ? e
          : Array.isArray(t)
          ? Array.isArray(e)
            ? (t.push.apply(t, e), t)
            : (t.push(e), t)
          : Array.isArray(e)
          ? [t].concat(e)
          : [t, e]
      );
    }
    function v(t, e, n) {
      Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t);
    }
    function y(t, e) {
      if (t) {
        var n = t._dispatchListeners,
          r = t._dispatchInstances;
        if (Array.isArray(n))
          for (var i = 0; i < n.length && !t.isPropagationStopped(); i++)
            d(t, e, n[i], r[i]);
        else n && d(t, e, n, r);
        (t._dispatchListeners = null),
          (t._dispatchInstances = null),
          t.isPersistent() || t.constructor.release(t);
      }
    }
    function g(t) {
      return y(t, !0);
    }
    function b(t) {
      return y(t, !1);
    }
    function w(t, e) {
      var n = t.stateNode;
      if (!n) return null;
      var i = Jn(n);
      if (!i) return null;
      n = i[e];
      t: switch (e) {
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
          (i = !i.disabled) ||
            ((t = t.type),
            (i = !(
              "button" === t ||
              "input" === t ||
              "select" === t ||
              "textarea" === t
            ))),
            (t = !i);
          break t;
        default:
          t = !1;
      }
      return t
        ? null
        : (n && "function" != typeof n && r("231", e, typeof n), n);
    }
    function _(t, e, n, r) {
      for (var i, o = 0; o < Wn.length; o++) {
        var a = Wn[o];
        a && (a = a.extractEvents(t, e, n, r)) && (i = m(i, a));
      }
      return i;
    }
    function E(t) {
      t && (tr = m(tr, t));
    }
    function T(t) {
      var e = tr;
      (tr = null),
        t ? v(e, g) : v(e, b),
        tr && r("95"),
        qn.rethrowCaughtError();
    }
    function S(t) {
      if (t[ir]) return t[ir];
      for (var e = []; !t[ir]; ) {
        if ((e.push(t), !t.parentNode)) return null;
        t = t.parentNode;
      }
      var n = void 0,
        r = t[ir];
      if (5 === r.tag || 6 === r.tag) return r;
      for (; t && (r = t[ir]); t = e.pop()) n = r;
      return n;
    }
    function x(t) {
      if (5 === t.tag || 6 === t.tag) return t.stateNode;
      r("33");
    }
    function O(t) {
      return t[or] || null;
    }
    function P(t) {
      do {
        t = t.return;
      } while (t && 5 !== t.tag);
      return t || null;
    }
    function k(t, e, n) {
      for (var r = []; t; ) r.push(t), (t = P(t));
      for (t = r.length; 0 < t--; ) e(r[t], "captured", n);
      for (t = 0; t < r.length; t++) e(r[t], "bubbled", n);
    }
    function C(t, e, n) {
      (e = w(t, n.dispatchConfig.phasedRegistrationNames[e])) &&
        ((n._dispatchListeners = m(n._dispatchListeners, e)),
        (n._dispatchInstances = m(n._dispatchInstances, t)));
    }
    function I(t) {
      t && t.dispatchConfig.phasedRegistrationNames && k(t._targetInst, C, t);
    }
    function M(t) {
      if (t && t.dispatchConfig.phasedRegistrationNames) {
        var e = t._targetInst;
        k((e = e ? P(e) : null), C, t);
      }
    }
    function A(t, e, n) {
      t &&
        n &&
        n.dispatchConfig.registrationName &&
        (e = w(t, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = m(n._dispatchListeners, e)),
        (n._dispatchInstances = m(n._dispatchInstances, t)));
    }
    function R(t) {
      t && t.dispatchConfig.registrationName && A(t._targetInst, null, t);
    }
    function N(t) {
      v(t, I);
    }
    function j(t, e, n, r) {
      if (n && r)
        t: {
          for (var i = n, o = r, a = 0, s = i; s; s = P(s)) a++;
          s = 0;
          for (var u = o; u; u = P(u)) s++;
          for (; 0 < a - s; ) (i = P(i)), a--;
          for (; 0 < s - a; ) (o = P(o)), s--;
          for (; a--; ) {
            if (i === o || i === o.alternate) break t;
            (i = P(i)), (o = P(o));
          }
          i = null;
        }
      else i = null;
      for (
        o = i, i = [];
        n && n !== o && (null === (a = n.alternate) || a !== o);

      )
        i.push(n), (n = P(n));
      for (n = []; r && r !== o && (null === (a = r.alternate) || a !== o); )
        n.push(r), (r = P(r));
      for (r = 0; r < i.length; r++) A(i[r], "bubbled", t);
      for (t = n.length; 0 < t--; ) A(n[t], "captured", e);
    }
    function D() {
      return (
        !ur &&
          bn.canUseDOM &&
          (ur =
            "textContent" in document.documentElement
              ? "textContent"
              : "innerText"),
        ur
      );
    }
    function L() {
      if (cr._fallbackText) return cr._fallbackText;
      var t,
        e,
        n = cr._startText,
        r = n.length,
        i = U(),
        o = i.length;
      for (t = 0; t < r && n[t] === i[t]; t++);
      var a = r - t;
      for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
      return (
        (cr._fallbackText = i.slice(t, 1 < e ? 1 - e : void 0)),
        cr._fallbackText
      );
    }
    function U() {
      return "value" in cr._root ? cr._root.value : cr._root[D()];
    }
    function F(t, e, n, r) {
      (this.dispatchConfig = t),
        (this._targetInst = e),
        (this.nativeEvent = n),
        (t = this.constructor.Interface);
      for (var i in t)
        t.hasOwnProperty(i) &&
          ((e = t[i])
            ? (this[i] = e(n))
            : "target" === i
            ? (this.target = r)
            : (this[i] = n[i]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? _n.thatReturnsTrue
          : _n.thatReturnsFalse),
        (this.isPropagationStopped = _n.thatReturnsFalse),
        this
      );
    }
    function B(t, e, n, r) {
      if (this.eventPool.length) {
        var i = this.eventPool.pop();
        return this.call(i, t, e, n, r), i;
      }
      return new this(t, e, n, r);
    }
    function z(t) {
      t instanceof this || r("223"),
        t.destructor(),
        10 > this.eventPool.length && this.eventPool.push(t);
    }
    function H(t) {
      (t.eventPool = []), (t.getPooled = B), (t.release = z);
    }
    function q(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function V(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function K(t, e) {
      switch (t) {
        case "topKeyUp":
          return -1 !== hr.indexOf(e.keyCode);
        case "topKeyDown":
          return 229 !== e.keyCode;
        case "topKeyPress":
        case "topMouseDown":
        case "topBlur":
          return !0;
        default:
          return !1;
      }
    }
    function W(t) {
      return "object" == typeof (t = t.detail) && "data" in t ? t.data : null;
    }
    function G(t, e) {
      switch (t) {
        case "topCompositionEnd":
          return W(e);
        case "topKeyPress":
          return 32 !== e.which ? null : ((Er = !0), wr);
        case "topTextInput":
          return (t = e.data) === wr && Er ? null : t;
        default:
          return null;
      }
    }
    function Y(t, e) {
      if (Tr)
        return "topCompositionEnd" === t || (!pr && K(t, e))
          ? ((t = L()),
            (cr._root = null),
            (cr._startText = null),
            (cr._fallbackText = null),
            (Tr = !1),
            t)
          : null;
      switch (t) {
        case "topPaste":
          return null;
        case "topKeyPress":
          if (
            !(e.ctrlKey || e.altKey || e.metaKey) ||
            (e.ctrlKey && e.altKey)
          ) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "topCompositionEnd":
          return br ? null : e.data;
        default:
          return null;
      }
    }
    function $(t) {
      if ((t = Qn(t))) {
        (xr && "function" == typeof xr.restoreControlledState) || r("194");
        var e = Jn(t.stateNode);
        xr.restoreControlledState(t.stateNode, t.type, e);
      }
    }
    function X(t) {
      Or ? (Pr ? Pr.push(t) : (Pr = [t])) : (Or = t);
    }
    function J() {
      if (Or) {
        var t = Or,
          e = Pr;
        if (((Pr = Or = null), $(t), e)) for (t = 0; t < e.length; t++) $(e[t]);
      }
    }
    function Q(t, e) {
      return t(e);
    }
    function Z(t, e) {
      if (Ir) return Q(t, e);
      Ir = !0;
      try {
        return Q(t, e);
      } finally {
        (Ir = !1), J();
      }
    }
    function tt(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return "input" === e ? !!Mr[t.type] : "textarea" === e;
    }
    function et(t) {
      return (
        (t = t.target || t.srcElement || window).correspondingUseElement &&
          (t = t.correspondingUseElement),
        3 === t.nodeType ? t.parentNode : t
      );
    }
    function nt(t, e) {
      if (!bn.canUseDOM || (e && !("addEventListener" in document))) return !1;
      var n = (e = "on" + t) in document;
      return (
        n ||
          ((n = document.createElement("div")).setAttribute(e, "return;"),
          (n = "function" == typeof n[e])),
        !n &&
          yr &&
          "wheel" === t &&
          (n = document.implementation.hasFeature("Events.wheel", "3.0")),
        n
      );
    }
    function rt(t) {
      var e = t.type;
      return (
        (t = t.nodeName) &&
        "input" === t.toLowerCase() &&
        ("checkbox" === e || "radio" === e)
      );
    }
    function it(t) {
      var e = rt(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
      if (
        !t.hasOwnProperty(e) &&
        "function" == typeof n.get &&
        "function" == typeof n.set
      )
        return (
          Object.defineProperty(t, e, {
            enumerable: n.enumerable,
            configurable: !0,
            get: function () {
              return n.get.call(this);
            },
            set: function (t) {
              (r = "" + t), n.set.call(this, t);
            },
          }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (t) {
              r = "" + t;
            },
            stopTracking: function () {
              (t._valueTracker = null), delete t[e];
            },
          }
        );
    }
    function ot(t) {
      t._valueTracker || (t._valueTracker = it(t));
    }
    function at(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var n = e.getValue(),
        r = "";
      return (
        t && (r = rt(t) ? (t.checked ? "true" : "false") : t.value),
        (t = r) !== n && (e.setValue(t), !0)
      );
    }
    function st(t, e, n) {
      return (
        (t = F.getPooled(Ar.change, t, e, n)),
        (t.type = "change"),
        X(n),
        N(t),
        t
      );
    }
    function ut(t) {
      E(t), T(!1);
    }
    function ct(t) {
      if (at(x(t))) return t;
    }
    function lt(t, e) {
      if ("topChange" === t) return e;
    }
    function ft() {
      Rr && (Rr.detachEvent("onpropertychange", ht), (Nr = Rr = null));
    }
    function ht(t) {
      "value" === t.propertyName &&
        ct(Nr) &&
        ((t = st(Nr, t, et(t))), Z(ut, t));
    }
    function pt(t, e, n) {
      "topFocus" === t
        ? (ft(), (Rr = e), (Nr = n), Rr.attachEvent("onpropertychange", ht))
        : "topBlur" === t && ft();
    }
    function dt(t) {
      if ("topSelectionChange" === t || "topKeyUp" === t || "topKeyDown" === t)
        return ct(Nr);
    }
    function mt(t, e) {
      if ("topClick" === t) return ct(e);
    }
    function vt(t, e) {
      if ("topInput" === t || "topChange" === t) return ct(e);
    }
    function yt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function gt(t) {
      var e = this.nativeEvent;
      return e.getModifierState
        ? e.getModifierState(t)
        : !!(t = Lr[t]) && !!e[t];
    }
    function bt() {
      return gt;
    }
    function wt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function _t(t) {
      return "string" == typeof (t = t.type)
        ? t
        : "function" == typeof t
        ? t.displayName || t.name
        : null;
    }
    function Et(t) {
      var e = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        if (0 != (2 & e.effectTag)) return 1;
        for (; e.return; ) if (0 != (2 & (e = e.return).effectTag)) return 1;
      }
      return 3 === e.tag ? 2 : 3;
    }
    function Tt(t) {
      return !!(t = t._reactInternalFiber) && 2 === Et(t);
    }
    function St(t) {
      2 !== Et(t) && r("188");
    }
    function xt(t) {
      var e = t.alternate;
      if (!e) return 3 === (e = Et(t)) && r("188"), 1 === e ? null : t;
      for (var n = t, i = e; ; ) {
        var o = n.return,
          a = o ? o.alternate : null;
        if (!o || !a) break;
        if (o.child === a.child) {
          for (var s = o.child; s; ) {
            if (s === n) return St(o), t;
            if (s === i) return St(o), e;
            s = s.sibling;
          }
          r("188");
        }
        if (n.return !== i.return) (n = o), (i = a);
        else {
          s = !1;
          for (var u = o.child; u; ) {
            if (u === n) {
              (s = !0), (n = o), (i = a);
              break;
            }
            if (u === i) {
              (s = !0), (i = o), (n = a);
              break;
            }
            u = u.sibling;
          }
          if (!s) {
            for (u = a.child; u; ) {
              if (u === n) {
                (s = !0), (n = a), (i = o);
                break;
              }
              if (u === i) {
                (s = !0), (i = a), (n = o);
                break;
              }
              u = u.sibling;
            }
            s || r("189");
          }
        }
        n.alternate !== i && r("190");
      }
      return 3 !== n.tag && r("188"), n.stateNode.current === n ? t : e;
    }
    function Ot(t) {
      if (!(t = xt(t))) return null;
      for (var e = t; ; ) {
        if (5 === e.tag || 6 === e.tag) return e;
        if (e.child) (e.child.return = e), (e = e.child);
        else {
          if (e === t) break;
          for (; !e.sibling; ) {
            if (!e.return || e.return === t) return null;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      }
      return null;
    }
    function Pt(t) {
      if (!(t = xt(t))) return null;
      for (var e = t; ; ) {
        if (5 === e.tag || 6 === e.tag) return e;
        if (e.child && 4 !== e.tag) (e.child.return = e), (e = e.child);
        else {
          if (e === t) break;
          for (; !e.sibling; ) {
            if (!e.return || e.return === t) return null;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      }
      return null;
    }
    function kt(t) {
      var e = t.targetInst;
      do {
        if (!e) {
          t.ancestors.push(e);
          break;
        }
        var n;
        for (n = e; n.return; ) n = n.return;
        if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
        t.ancestors.push(e), (e = S(n));
      } while (e);
      for (n = 0; n < t.ancestors.length; n++)
        (e = t.ancestors[n]),
          qr(t.topLevelType, e, t.nativeEvent, et(t.nativeEvent));
    }
    function Ct(t) {
      Hr = !!t;
    }
    function It(t, e, n) {
      return n ? En.listen(n, e, At.bind(null, t)) : null;
    }
    function Mt(t, e, n) {
      return n ? En.capture(n, e, At.bind(null, t)) : null;
    }
    function At(t, e) {
      if (Hr) {
        var n = et(e);
        if (
          (null === (n = S(n)) ||
            "number" != typeof n.tag ||
            2 === Et(n) ||
            (n = null),
          zr.length)
        ) {
          var r = zr.pop();
          (r.topLevelType = t),
            (r.nativeEvent = e),
            (r.targetInst = n),
            (t = r);
        } else
          t = { topLevelType: t, nativeEvent: e, targetInst: n, ancestors: [] };
        try {
          Z(kt, t);
        } finally {
          (t.topLevelType = null),
            (t.nativeEvent = null),
            (t.targetInst = null),
            (t.ancestors.length = 0),
            10 > zr.length && zr.push(t);
        }
      }
    }
    function Rt(t, e) {
      var n = {};
      return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n["Webkit" + t] = "webkit" + e),
        (n["Moz" + t] = "moz" + e),
        (n["ms" + t] = "MS" + e),
        (n["O" + t] = "o" + e.toLowerCase()),
        n
      );
    }
    function Nt(t) {
      if (Wr[t]) return Wr[t];
      if (!Kr[t]) return t;
      var e,
        n = Kr[t];
      for (e in n) if (n.hasOwnProperty(e) && e in Gr) return (Wr[t] = n[e]);
      return "";
    }
    function jt(t) {
      return (
        Object.prototype.hasOwnProperty.call(t, Jr) ||
          ((t[Jr] = Xr++), ($r[t[Jr]] = {})),
        $r[t[Jr]]
      );
    }
    function Dt(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Lt(t, e) {
      var n = Dt(t);
      t = 0;
      for (var r; n; ) {
        if (3 === n.nodeType) {
          if (((r = t + n.textContent.length), t <= e && r >= e))
            return { node: n, offset: e - t };
          t = r;
        }
        t: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break t;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Dt(n);
      }
    }
    function Ut(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        e &&
        (("input" === e && "text" === t.type) ||
          "textarea" === e ||
          "true" === t.contentEditable)
      );
    }
    function Ft(t, e) {
      if (ri || null == ti || ti !== Tn()) return null;
      var n = ti;
      return (
        "selectionStart" in n && Ut(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : window.getSelection
          ? ((n = window.getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            }))
          : (n = void 0),
        ni && Sn(ni, n)
          ? null
          : ((ni = n),
            (t = F.getPooled(Zr.select, ei, t, e)),
            (t.type = "select"),
            (t.target = ti),
            N(t),
            t)
      );
    }
    function Bt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function zt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function Ht(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function qt(t) {
      var e = t.keyCode;
      return (
        "charCode" in t
          ? 0 === (t = t.charCode) && 13 === e && (t = 13)
          : (t = e),
        32 <= t || 13 === t ? t : 0
      );
    }
    function Vt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function Kt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function Wt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function Gt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function Yt(t, e, n, r) {
      return F.call(this, t, e, n, r);
    }
    function $t(t) {
      0 > fi || ((t.current = li[fi]), (li[fi] = null), fi--);
    }
    function Xt(t, e) {
      (li[++fi] = t.current), (t.current = e);
    }
    function Jt(t) {
      return Zt(t) ? gi : vi.current;
    }
    function Qt(t, e) {
      var n = t.type.contextTypes;
      if (!n) return Pn;
      var r = t.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i,
        o = {};
      for (i in n) o[i] = e[i];
      return (
        r &&
          ((t = t.stateNode),
          (t.__reactInternalMemoizedUnmaskedChildContext = e),
          (t.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function Zt(t) {
      return 2 === t.tag && null != t.type.childContextTypes;
    }
    function te(t) {
      Zt(t) && ($t(yi, t), $t(vi, t));
    }
    function ee(t, e, n) {
      null != vi.cursor && r("168"), Xt(vi, e, t), Xt(yi, n, t);
    }
    function ne(t, e) {
      var n = t.stateNode,
        i = t.type.childContextTypes;
      if ("function" != typeof n.getChildContext) return e;
      n = n.getChildContext();
      for (var o in n) o in i || r("108", _t(t) || "Unknown", o);
      return wn({}, e, n);
    }
    function re(t) {
      if (!Zt(t)) return !1;
      var e = t.stateNode;
      return (
        (e = (e && e.__reactInternalMemoizedMergedChildContext) || Pn),
        (gi = vi.current),
        Xt(vi, e, t),
        Xt(yi, yi.current, t),
        !0
      );
    }
    function ie(t, e) {
      var n = t.stateNode;
      if ((n || r("169"), e)) {
        var i = ne(t, gi);
        (n.__reactInternalMemoizedMergedChildContext = i),
          $t(yi, t),
          $t(vi, t),
          Xt(vi, i, t);
      } else $t(yi, t);
      Xt(yi, e, t);
    }
    function oe(t, e, n) {
      (this.tag = t),
        (this.key = e),
        (this.stateNode = this.type = null),
        (this.sibling = this.child = this.return = null),
        (this.index = 0),
        (this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
          this.pendingProps =
          this.ref =
            null),
        (this.internalContextTag = n),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.expirationTime = 0),
        (this.alternate = null);
    }
    function ae(t, e, n) {
      var r = t.alternate;
      return (
        null === r
          ? ((r = new oe(t.tag, t.key, t.internalContextTag)),
            (r.type = t.type),
            (r.stateNode = t.stateNode),
            (r.alternate = t),
            (t.alternate = r))
          : ((r.effectTag = 0),
            (r.nextEffect = null),
            (r.firstEffect = null),
            (r.lastEffect = null)),
        (r.expirationTime = n),
        (r.pendingProps = e),
        (r.child = t.child),
        (r.memoizedProps = t.memoizedProps),
        (r.memoizedState = t.memoizedState),
        (r.updateQueue = t.updateQueue),
        (r.sibling = t.sibling),
        (r.index = t.index),
        (r.ref = t.ref),
        r
      );
    }
    function se(t, e, n) {
      var i = void 0,
        o = t.type,
        a = t.key;
      return (
        "function" == typeof o
          ? ((i =
              o.prototype && o.prototype.isReactComponent
                ? new oe(2, a, e)
                : new oe(0, a, e)),
            (i.type = o),
            (i.pendingProps = t.props))
          : "string" == typeof o
          ? ((i = new oe(5, a, e)), (i.type = o), (i.pendingProps = t.props))
          : "object" == typeof o && null !== o && "number" == typeof o.tag
          ? ((i = o), (i.pendingProps = t.props))
          : r("130", null == o ? o : typeof o, ""),
        (i.expirationTime = n),
        i
      );
    }
    function ue(t, e, n, r) {
      return (
        (e = new oe(10, r, e)), (e.pendingProps = t), (e.expirationTime = n), e
      );
    }
    function ce(t, e, n) {
      return (
        (e = new oe(6, null, e)),
        (e.pendingProps = t),
        (e.expirationTime = n),
        e
      );
    }
    function le(t, e, n) {
      return (
        (e = new oe(7, t.key, e)),
        (e.type = t.handler),
        (e.pendingProps = t),
        (e.expirationTime = n),
        e
      );
    }
    function fe(t, e, n) {
      return (t = new oe(9, null, e)), (t.expirationTime = n), t;
    }
    function he(t, e, n) {
      return (
        (e = new oe(4, t.key, e)),
        (e.pendingProps = t.children || []),
        (e.expirationTime = n),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        e
      );
    }
    function pe(t) {
      return function (e) {
        try {
          return t(e);
        } catch (t) {}
      };
    }
    function de(t) {
      if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled || !e.supportsFiber) return !0;
      try {
        var n = e.inject(t);
        (bi = pe(function (t) {
          return e.onCommitFiberRoot(n, t);
        })),
          (wi = pe(function (t) {
            return e.onCommitFiberUnmount(n, t);
          }));
      } catch (t) {}
      return !0;
    }
    function me(t) {
      "function" == typeof bi && bi(t);
    }
    function ve(t) {
      "function" == typeof wi && wi(t);
    }
    function ye(t) {
      return {
        baseState: t,
        expirationTime: 0,
        first: null,
        last: null,
        callbackList: null,
        hasForceUpdate: !1,
        isInitialized: !1,
      };
    }
    function ge(t, e) {
      null === t.last
        ? (t.first = t.last = e)
        : ((t.last.next = e), (t.last = e)),
        (0 === t.expirationTime || t.expirationTime > e.expirationTime) &&
          (t.expirationTime = e.expirationTime);
    }
    function be(t, e) {
      var n = t.alternate,
        r = t.updateQueue;
      null === r && (r = t.updateQueue = ye(null)),
        null !== n
          ? null === (t = n.updateQueue) && (t = n.updateQueue = ye(null))
          : (t = null),
        null === (t = t !== r ? t : null)
          ? ge(r, e)
          : null === r.last || null === t.last
          ? (ge(r, e), ge(t, e))
          : (ge(r, e), (t.last = e));
    }
    function we(t, e, n, r) {
      return "function" == typeof (t = t.partialState) ? t.call(e, n, r) : t;
    }
    function _e(t, e, n, r, i, o) {
      null !== t &&
        t.updateQueue === n &&
        (n = e.updateQueue =
          {
            baseState: n.baseState,
            expirationTime: n.expirationTime,
            first: n.first,
            last: n.last,
            isInitialized: n.isInitialized,
            callbackList: null,
            hasForceUpdate: !1,
          }),
        (n.expirationTime = 0),
        n.isInitialized
          ? (t = n.baseState)
          : ((t = n.baseState = e.memoizedState), (n.isInitialized = !0));
      for (var a = !0, s = n.first, u = !1; null !== s; ) {
        var c = s.expirationTime;
        if (c > o) {
          var l = n.expirationTime;
          (0 === l || l > c) && (n.expirationTime = c),
            u || ((u = !0), (n.baseState = t));
        } else
          u || ((n.first = s.next), null === n.first && (n.last = null)),
            s.isReplace
              ? ((t = we(s, r, t, i)), (a = !0))
              : (c = we(s, r, t, i)) &&
                ((t = a ? wn({}, t, c) : wn(t, c)), (a = !1)),
            s.isForced && (n.hasForceUpdate = !0),
            null !== s.callback &&
              (null === (c = n.callbackList) && (c = n.callbackList = []),
              c.push(s));
        s = s.next;
      }
      return (
        null !== n.callbackList
          ? (e.effectTag |= 32)
          : null !== n.first || n.hasForceUpdate || (e.updateQueue = null),
        u || (n.baseState = t),
        t
      );
    }
    function Ee(t, e) {
      var n = t.callbackList;
      if (null !== n)
        for (t.callbackList = null, t = 0; t < n.length; t++) {
          var i = n[t],
            o = i.callback;
          (i.callback = null), "function" != typeof o && r("191", o), o.call(e);
        }
    }
    function Te(t, e, n, i) {
      function o(t, e) {
        (e.updater = a), (t.stateNode = e), (e._reactInternalFiber = t);
      }
      var a = {
        isMounted: Tt,
        enqueueSetState: function (n, r, i) {
          (n = n._reactInternalFiber), (i = void 0 === i ? null : i);
          var o = e(n);
          be(n, {
            expirationTime: o,
            partialState: r,
            callback: i,
            isReplace: !1,
            isForced: !1,
            nextCallback: null,
            next: null,
          }),
            t(n, o);
        },
        enqueueReplaceState: function (n, r, i) {
          (n = n._reactInternalFiber), (i = void 0 === i ? null : i);
          var o = e(n);
          be(n, {
            expirationTime: o,
            partialState: r,
            callback: i,
            isReplace: !0,
            isForced: !1,
            nextCallback: null,
            next: null,
          }),
            t(n, o);
        },
        enqueueForceUpdate: function (n, r) {
          (n = n._reactInternalFiber), (r = void 0 === r ? null : r);
          var i = e(n);
          be(n, {
            expirationTime: i,
            partialState: null,
            callback: r,
            isReplace: !1,
            isForced: !0,
            nextCallback: null,
            next: null,
          }),
            t(n, i);
        },
      };
      return {
        adoptClassInstance: o,
        constructClassInstance: function (t, e) {
          var n = t.type,
            r = Jt(t),
            i = 2 === t.tag && null != t.type.contextTypes,
            a = i ? Qt(t, r) : Pn;
          return (
            (e = new n(e, a)),
            o(t, e),
            i &&
              ((t = t.stateNode),
              (t.__reactInternalMemoizedUnmaskedChildContext = r),
              (t.__reactInternalMemoizedMaskedChildContext = a)),
            e
          );
        },
        mountClassInstance: function (t, e) {
          var n = t.alternate,
            i = t.stateNode,
            o = i.state || null,
            s = t.pendingProps;
          s || r("158");
          var u = Jt(t);
          (i.props = s),
            (i.state = t.memoizedState = o),
            (i.refs = Pn),
            (i.context = Qt(t, u)),
            null != t.type &&
              null != t.type.prototype &&
              !0 === t.type.prototype.unstable_isAsyncReactComponent &&
              (t.internalContextTag |= 1),
            "function" == typeof i.componentWillMount &&
              ((o = i.state),
              i.componentWillMount(),
              o !== i.state && a.enqueueReplaceState(i, i.state, null),
              null !== (o = t.updateQueue) && (i.state = _e(n, t, o, i, s, e))),
            "function" == typeof i.componentDidMount && (t.effectTag |= 4);
        },
        updateClassInstance: function (t, e, o) {
          var s = e.stateNode;
          (s.props = e.memoizedProps), (s.state = e.memoizedState);
          var u = e.memoizedProps,
            c = e.pendingProps;
          c || (null == (c = u) && r("159"));
          var l = s.context,
            f = Jt(e);
          if (
            ((f = Qt(e, f)),
            "function" != typeof s.componentWillReceiveProps ||
              (u === c && l === f) ||
              ((l = s.state),
              s.componentWillReceiveProps(c, f),
              s.state !== l && a.enqueueReplaceState(s, s.state, null)),
            (l = e.memoizedState),
            (o = null !== e.updateQueue ? _e(t, e, e.updateQueue, s, c, o) : l),
            !(
              u !== c ||
              l !== o ||
              yi.current ||
              (null !== e.updateQueue && e.updateQueue.hasForceUpdate)
            ))
          )
            return (
              "function" != typeof s.componentDidUpdate ||
                (u === t.memoizedProps && l === t.memoizedState) ||
                (e.effectTag |= 4),
              !1
            );
          var h = c;
          if (
            null === u ||
            (null !== e.updateQueue && e.updateQueue.hasForceUpdate)
          )
            h = !0;
          else {
            var p = e.stateNode,
              d = e.type;
            h =
              "function" == typeof p.shouldComponentUpdate
                ? p.shouldComponentUpdate(h, o, f)
                : !d.prototype ||
                  !d.prototype.isPureReactComponent ||
                  !Sn(u, h) ||
                  !Sn(l, o);
          }
          return (
            h
              ? ("function" == typeof s.componentWillUpdate &&
                  s.componentWillUpdate(c, o, f),
                "function" == typeof s.componentDidUpdate && (e.effectTag |= 4))
              : ("function" != typeof s.componentDidUpdate ||
                  (u === t.memoizedProps && l === t.memoizedState) ||
                  (e.effectTag |= 4),
                n(e, c),
                i(e, o)),
            (s.props = c),
            (s.state = o),
            (s.context = f),
            h
          );
        },
      };
    }
    function Se(t, e, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: _i,
        key: null == r ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n,
      };
    }
    function xe(t) {
      return null === t || void 0 === t
        ? null
        : "function" == typeof (t = (Ti && t[Ti]) || t["@@iterator"])
        ? t
        : null;
    }
    function Oe(t, e) {
      var n = e.ref;
      if (null !== n && "function" != typeof n) {
        if (e._owner) {
          var i = void 0;
          (e = e._owner) && (2 !== e.tag && r("110"), (i = e.stateNode)),
            i || r("147", n);
          var o = "" + n;
          return null !== t && null !== t.ref && t.ref._stringRef === o
            ? t.ref
            : ((t = function (t) {
                var e = i.refs === Pn ? (i.refs = {}) : i.refs;
                null === t ? delete e[o] : (e[o] = t);
              }),
              (t._stringRef = o),
              t);
        }
        "string" != typeof n && r("148"), e._owner || r("149", n);
      }
      return n;
    }
    function Pe(t, e) {
      "textarea" !== t.type &&
        r(
          "31",
          "[object Object]" === Object.prototype.toString.call(e)
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : e,
          ""
        );
    }
    function ke(t, e) {
      function n(n, r) {
        if (e) {
          if (!t) {
            if (null === r.alternate) return;
            r = r.alternate;
          }
          var i = n.lastEffect;
          null !== i
            ? ((i.nextEffect = r), (n.lastEffect = r))
            : (n.firstEffect = n.lastEffect = r),
            (r.nextEffect = null),
            (r.effectTag = 8);
        }
      }
      function i(t, r) {
        if (!e) return null;
        for (; null !== r; ) n(t, r), (r = r.sibling);
        return null;
      }
      function o(t, e) {
        for (t = new Map(); null !== e; )
          null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
      }
      function a(e, n, r) {
        return t
          ? ((e = ae(e, n, r)), (e.index = 0), (e.sibling = null), e)
          : ((e.expirationTime = r),
            (e.effectTag = 0),
            (e.index = 0),
            (e.sibling = null),
            (e.pendingProps = n),
            e);
      }
      function s(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function u(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function c(t, e, n, r) {
        return null === e || 6 !== e.tag
          ? ((e = ce(n, t.internalContextTag, r)), (e.return = t), e)
          : ((e = a(e, n, r)), (e.return = t), e);
      }
      function l(t, e, n, r) {
        return null !== e && e.type === n.type
          ? ((r = a(e, n.props, r)), (r.ref = Oe(e, n)), (r.return = t), r)
          : ((r = se(n, t.internalContextTag, r)),
            (r.ref = Oe(e, n)),
            (r.return = t),
            r);
      }
      function f(t, e, n, r) {
        return null === e || 7 !== e.tag
          ? ((e = le(n, t.internalContextTag, r)), (e.return = t), e)
          : ((e = a(e, n, r)), (e.return = t), e);
      }
      function h(t, e, n, r) {
        return null === e || 9 !== e.tag
          ? ((e = fe(n, t.internalContextTag, r)),
            (e.type = n.value),
            (e.return = t),
            e)
          : ((e = a(e, null, r)), (e.type = n.value), (e.return = t), e);
      }
      function p(t, e, n, r) {
        return null === e ||
          4 !== e.tag ||
          e.stateNode.containerInfo !== n.containerInfo ||
          e.stateNode.implementation !== n.implementation
          ? ((e = he(n, t.internalContextTag, r)), (e.return = t), e)
          : ((e = a(e, n.children || [], r)), (e.return = t), e);
      }
      function d(t, e, n, r, i) {
        return null === e || 10 !== e.tag
          ? ((e = ue(n, t.internalContextTag, r, i)), (e.return = t), e)
          : ((e = a(e, n, r)), (e.return = t), e);
      }
      function m(t, e, n) {
        if ("string" == typeof e || "number" == typeof e)
          return (e = ce("" + e, t.internalContextTag, n)), (e.return = t), e;
        if ("object" == typeof e && null !== e) {
          switch (e.$$typeof) {
            case hi:
              return e.type === mi
                ? ((e = ue(e.props.children, t.internalContextTag, n, e.key)),
                  (e.return = t),
                  e)
                : ((n = se(e, t.internalContextTag, n)),
                  (n.ref = Oe(null, e)),
                  (n.return = t),
                  n);
            case pi:
              return (e = le(e, t.internalContextTag, n)), (e.return = t), e;
            case di:
              return (
                (n = fe(e, t.internalContextTag, n)),
                (n.type = e.value),
                (n.return = t),
                n
              );
            case _i:
              return (e = he(e, t.internalContextTag, n)), (e.return = t), e;
          }
          if (Ei(e) || xe(e))
            return (
              (e = ue(e, t.internalContextTag, n, null)), (e.return = t), e
            );
          Pe(t, e);
        }
        return null;
      }
      function v(t, e, n, r) {
        var i = null !== e ? e.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== i ? null : c(t, e, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case hi:
              return n.key === i
                ? n.type === mi
                  ? d(t, e, n.props.children, r, i)
                  : l(t, e, n, r)
                : null;
            case pi:
              return n.key === i ? f(t, e, n, r) : null;
            case di:
              return null === i ? h(t, e, n, r) : null;
            case _i:
              return n.key === i ? p(t, e, n, r) : null;
          }
          if (Ei(n) || xe(n)) return null !== i ? null : d(t, e, n, r, null);
          Pe(t, n);
        }
        return null;
      }
      function y(t, e, n, r, i) {
        if ("string" == typeof r || "number" == typeof r)
          return (t = t.get(n) || null), c(e, t, "" + r, i);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case hi:
              return (
                (t = t.get(null === r.key ? n : r.key) || null),
                r.type === mi
                  ? d(e, t, r.props.children, i, r.key)
                  : l(e, t, r, i)
              );
            case pi:
              return (
                (t = t.get(null === r.key ? n : r.key) || null), f(e, t, r, i)
              );
            case di:
              return (t = t.get(n) || null), h(e, t, r, i);
            case _i:
              return (
                (t = t.get(null === r.key ? n : r.key) || null), p(e, t, r, i)
              );
          }
          if (Ei(r) || xe(r))
            return (t = t.get(n) || null), d(e, t, r, i, null);
          Pe(e, r);
        }
        return null;
      }
      function g(t, r, a, u) {
        for (
          var c = null, l = null, f = r, h = (r = 0), p = null;
          null !== f && h < a.length;
          h++
        ) {
          f.index > h ? ((p = f), (f = null)) : (p = f.sibling);
          var d = v(t, f, a[h], u);
          if (null === d) {
            null === f && (f = p);
            break;
          }
          e && f && null === d.alternate && n(t, f),
            (r = s(d, r, h)),
            null === l ? (c = d) : (l.sibling = d),
            (l = d),
            (f = p);
        }
        if (h === a.length) return i(t, f), c;
        if (null === f) {
          for (; h < a.length; h++)
            (f = m(t, a[h], u)) &&
              ((r = s(f, r, h)),
              null === l ? (c = f) : (l.sibling = f),
              (l = f));
          return c;
        }
        for (f = o(t, f); h < a.length; h++)
          (p = y(f, t, h, a[h], u)) &&
            (e && null !== p.alternate && f.delete(null === p.key ? h : p.key),
            (r = s(p, r, h)),
            null === l ? (c = p) : (l.sibling = p),
            (l = p));
        return (
          e &&
            f.forEach(function (e) {
              return n(t, e);
            }),
          c
        );
      }
      function b(t, a, u, c) {
        var l = xe(u);
        "function" != typeof l && r("150"), null == (u = l.call(u)) && r("151");
        for (
          var f = (l = null), h = a, p = (a = 0), d = null, g = u.next();
          null !== h && !g.done;
          p++, g = u.next()
        ) {
          h.index > p ? ((d = h), (h = null)) : (d = h.sibling);
          var b = v(t, h, g.value, c);
          if (null === b) {
            h || (h = d);
            break;
          }
          e && h && null === b.alternate && n(t, h),
            (a = s(b, a, p)),
            null === f ? (l = b) : (f.sibling = b),
            (f = b),
            (h = d);
        }
        if (g.done) return i(t, h), l;
        if (null === h) {
          for (; !g.done; p++, g = u.next())
            null !== (g = m(t, g.value, c)) &&
              ((a = s(g, a, p)),
              null === f ? (l = g) : (f.sibling = g),
              (f = g));
          return l;
        }
        for (h = o(t, h); !g.done; p++, g = u.next())
          null !== (g = y(h, t, p, g.value, c)) &&
            (e && null !== g.alternate && h.delete(null === g.key ? p : g.key),
            (a = s(g, a, p)),
            null === f ? (l = g) : (f.sibling = g),
            (f = g));
        return (
          e &&
            h.forEach(function (e) {
              return n(t, e);
            }),
          l
        );
      }
      return function (t, e, o, s) {
        var c = "object" == typeof o && null !== o;
        if (c)
          switch (o.$$typeof) {
            case hi:
              t: {
                var l = o.key;
                for (c = e; null !== c; ) {
                  if (c.key === l) {
                    if (10 === c.tag ? o.type === mi : c.type === o.type) {
                      i(t, c.sibling),
                        ((e = a(
                          c,
                          o.type === mi ? o.props.children : o.props,
                          s
                        )).ref = Oe(c, o)),
                        (e.return = t),
                        (t = e);
                      break t;
                    }
                    i(t, c);
                    break;
                  }
                  n(t, c), (c = c.sibling);
                }
                o.type === mi
                  ? ((o = ue(o.props.children, t.internalContextTag, s, o.key)),
                    (o.return = t),
                    (t = o))
                  : ((s = se(o, t.internalContextTag, s)),
                    (s.ref = Oe(e, o)),
                    (s.return = t),
                    (t = s));
              }
              return u(t);
            case pi:
              t: {
                for (c = o.key; null !== e; ) {
                  if (e.key === c) {
                    if (7 === e.tag) {
                      i(t, e.sibling), ((o = a(e, o, s)).return = t), (t = o);
                      break t;
                    }
                    i(t, e);
                    break;
                  }
                  n(t, e), (e = e.sibling);
                }
                ((o = le(o, t.internalContextTag, s)).return = t), (t = o);
              }
              return u(t);
            case di:
              t: {
                if (null !== e) {
                  if (9 === e.tag) {
                    i(t, e.sibling),
                      ((e = a(e, null, s)).type = o.value),
                      (e.return = t),
                      (t = e);
                    break t;
                  }
                  i(t, e);
                }
                ((e = fe(o, t.internalContextTag, s)).type = o.value),
                  (e.return = t),
                  (t = e);
              }
              return u(t);
            case _i:
              t: {
                for (c = o.key; null !== e; ) {
                  if (e.key === c) {
                    if (
                      4 === e.tag &&
                      e.stateNode.containerInfo === o.containerInfo &&
                      e.stateNode.implementation === o.implementation
                    ) {
                      i(t, e.sibling),
                        ((o = a(e, o.children || [], s)).return = t),
                        (t = o);
                      break t;
                    }
                    i(t, e);
                    break;
                  }
                  n(t, e), (e = e.sibling);
                }
                ((o = he(o, t.internalContextTag, s)).return = t), (t = o);
              }
              return u(t);
          }
        if ("string" == typeof o || "number" == typeof o)
          return (
            (o = "" + o),
            null !== e && 6 === e.tag
              ? (i(t, e.sibling), (o = a(e, o, s)))
              : (i(t, e), (o = ce(o, t.internalContextTag, s))),
            (o.return = t),
            (t = o),
            u(t)
          );
        if (Ei(o)) return g(t, e, o, s);
        if (xe(o)) return b(t, e, o, s);
        if ((c && Pe(t, o), void 0 === o))
          switch (t.tag) {
            case 2:
            case 1:
              r("152", (o = t.type).displayName || o.name || "Component");
          }
        return i(t, e);
      };
    }
    function Ce(t, e, n, i, o) {
      function a(t, e, n) {
        s(t, e, n, e.expirationTime);
      }
      function s(t, e, n, r) {
        e.child =
          null === t
            ? Oi(e, e.child, n, r)
            : t.child === e.child
            ? Si(e, e.child, n, r)
            : xi(e, e.child, n, r);
      }
      function u(t, e) {
        var n = e.ref;
        null === n || (t && t.ref === n) || (e.effectTag |= 128);
      }
      function c(t, e, n, r) {
        if ((u(t, e), !n)) return r && ie(e, !1), f(t, e);
        (n = e.stateNode), (Br.current = e);
        var i = n.render();
        return (
          (e.effectTag |= 1),
          a(t, e, i),
          (e.memoizedState = n.state),
          (e.memoizedProps = n.props),
          r && ie(e, !0),
          e.child
        );
      }
      function l(t) {
        var e = t.stateNode;
        e.pendingContext
          ? ee(t, e.pendingContext, e.pendingContext !== e.context)
          : e.context && ee(t, e.context, !1),
          y(t, e.containerInfo);
      }
      function f(t, e) {
        if ((null !== t && e.child !== t.child && r("153"), null !== e.child)) {
          var n = ae((t = e.child), t.pendingProps, t.expirationTime);
          for (e.child = n, n.return = e; null !== t.sibling; )
            (t = t.sibling),
              (n = n.sibling = ae(t, t.pendingProps, t.expirationTime)),
              (n.return = e);
          n.sibling = null;
        }
        return e.child;
      }
      function h(t, e) {
        switch (e.tag) {
          case 3:
            l(e);
            break;
          case 2:
            re(e);
            break;
          case 4:
            y(e, e.stateNode.containerInfo);
        }
        return null;
      }
      var p = t.shouldSetTextContent,
        d = t.useSyncScheduling,
        m = t.shouldDeprioritizeSubtree,
        v = e.pushHostContext,
        y = e.pushHostContainer,
        g = n.enterHydrationState,
        b = n.resetHydrationState,
        w = n.tryToClaimNextHydratableInstance,
        _ = (t = Te(
          i,
          o,
          function (t, e) {
            t.memoizedProps = e;
          },
          function (t, e) {
            t.memoizedState = e;
          }
        )).adoptClassInstance,
        E = t.constructClassInstance,
        T = t.mountClassInstance,
        S = t.updateClassInstance;
      return {
        beginWork: function (t, e, n) {
          if (0 === e.expirationTime || e.expirationTime > n) return h(0, e);
          switch (e.tag) {
            case 0:
              null !== t && r("155");
              var i = e.type,
                o = e.pendingProps,
                s = Jt(e);
              return (
                (s = Qt(e, s)),
                (i = i(o, s)),
                (e.effectTag |= 1),
                "object" == typeof i &&
                null !== i &&
                "function" == typeof i.render
                  ? ((e.tag = 2),
                    (o = re(e)),
                    _(e, i),
                    T(e, n),
                    (e = c(t, e, !0, o)))
                  : ((e.tag = 1),
                    a(t, e, i),
                    (e.memoizedProps = o),
                    (e = e.child)),
                e
              );
            case 1:
              t: {
                if (
                  ((o = e.type),
                  (n = e.pendingProps),
                  (i = e.memoizedProps),
                  yi.current)
                )
                  null === n && (n = i);
                else if (null === n || i === n) {
                  e = f(t, e);
                  break t;
                }
                (o = o(n, (i = Qt(e, (i = Jt(e)))))),
                  (e.effectTag |= 1),
                  a(t, e, o),
                  (e.memoizedProps = n),
                  (e = e.child);
              }
              return e;
            case 2:
              return (
                (o = re(e)),
                (i = void 0),
                null === t
                  ? e.stateNode
                    ? r("153")
                    : (E(e, e.pendingProps), T(e, n), (i = !0))
                  : (i = S(t, e, n)),
                c(t, e, i, o)
              );
            case 3:
              return (
                l(e),
                null !== (o = e.updateQueue)
                  ? ((i = e.memoizedState),
                    (o = _e(t, e, o, null, null, n)),
                    i === o
                      ? (b(), (e = f(t, e)))
                      : ((i = o.element),
                        (s = e.stateNode),
                        (null === t || null === t.child) && s.hydrate && g(e)
                          ? ((e.effectTag |= 2),
                            (e.child = Oi(e, e.child, i, n)))
                          : (b(), a(t, e, i)),
                        (e.memoizedState = o),
                        (e = e.child)))
                  : (b(), (e = f(t, e))),
                e
              );
            case 5:
              v(e), null === t && w(e), (o = e.type);
              var x = e.memoizedProps;
              return (
                null === (i = e.pendingProps) && null === (i = x) && r("154"),
                (s = null !== t ? t.memoizedProps : null),
                yi.current || (null !== i && x !== i)
                  ? ((x = i.children),
                    p(o, i) ? (x = null) : s && p(o, s) && (e.effectTag |= 16),
                    u(t, e),
                    2147483647 !== n && !d && m(o, i)
                      ? ((e.expirationTime = 2147483647), (e = null))
                      : (a(t, e, x), (e.memoizedProps = i), (e = e.child)))
                  : (e = f(t, e)),
                e
              );
            case 6:
              return (
                null === t && w(e),
                null === (t = e.pendingProps) && (t = e.memoizedProps),
                (e.memoizedProps = t),
                null
              );
            case 8:
              e.tag = 7;
            case 7:
              return (
                (o = e.pendingProps),
                yi.current
                  ? null === o &&
                    null === (o = t && t.memoizedProps) &&
                    r("154")
                  : (null !== o && e.memoizedProps !== o) ||
                    (o = e.memoizedProps),
                (i = o.children),
                (e.stateNode =
                  null === t
                    ? Oi(e, e.stateNode, i, n)
                    : t.child === e.child
                    ? Si(e, e.stateNode, i, n)
                    : xi(e, e.stateNode, i, n)),
                (e.memoizedProps = o),
                e.stateNode
              );
            case 9:
              return null;
            case 4:
              t: {
                if (
                  (y(e, e.stateNode.containerInfo),
                  (o = e.pendingProps),
                  yi.current)
                )
                  null === o && null == (o = t && t.memoizedProps) && r("154");
                else if (null === o || e.memoizedProps === o) {
                  e = f(t, e);
                  break t;
                }
                null === t ? (e.child = xi(e, e.child, o, n)) : a(t, e, o),
                  (e.memoizedProps = o),
                  (e = e.child);
              }
              return e;
            case 10:
              t: {
                if (((n = e.pendingProps), yi.current))
                  null === n && (n = e.memoizedProps);
                else if (null === n || e.memoizedProps === n) {
                  e = f(t, e);
                  break t;
                }
                a(t, e, n), (e.memoizedProps = n), (e = e.child);
              }
              return e;
            default:
              r("156");
          }
        },
        beginFailedWork: function (t, e, n) {
          switch (e.tag) {
            case 2:
              re(e);
              break;
            case 3:
              l(e);
              break;
            default:
              r("157");
          }
          return (
            (e.effectTag |= 64),
            null === t
              ? (e.child = null)
              : e.child !== t.child && (e.child = t.child),
            0 === e.expirationTime || e.expirationTime > n
              ? h(0, e)
              : ((e.firstEffect = null),
                (e.lastEffect = null),
                s(t, e, null, n),
                2 === e.tag &&
                  ((t = e.stateNode),
                  (e.memoizedProps = t.props),
                  (e.memoizedState = t.state)),
                e.child)
          );
        },
      };
    }
    function Ie(t, e, n) {
      function i(t) {
        t.effectTag |= 4;
      }
      var o = t.createInstance,
        a = t.createTextInstance,
        s = t.appendInitialChild,
        u = t.finalizeInitialChildren,
        c = t.prepareUpdate,
        l = t.persistence,
        f = e.getRootHostContainer,
        h = e.popHostContext,
        p = e.getHostContext,
        d = e.popHostContainer,
        m = n.prepareToHydrateHostInstance,
        v = n.prepareToHydrateHostTextInstance,
        y = n.popHydrationState,
        g = void 0,
        b = void 0,
        w = void 0;
      return (
        t.mutation
          ? ((g = function () {}),
            (b = function (t, e, n) {
              (e.updateQueue = n) && i(e);
            }),
            (w = function (t, e, n, r) {
              n !== r && i(e);
            }))
          : r(l ? "235" : "236"),
        {
          completeWork: function (t, e, n) {
            var l = e.pendingProps;
            switch (
              (null === l
                ? (l = e.memoizedProps)
                : (2147483647 === e.expirationTime && 2147483647 !== n) ||
                  (e.pendingProps = null),
              e.tag)
            ) {
              case 1:
                return null;
              case 2:
                return te(e), null;
              case 3:
                return (
                  d(e),
                  $t(yi, e),
                  $t(vi, e),
                  (l = e.stateNode).pendingContext &&
                    ((l.context = l.pendingContext), (l.pendingContext = null)),
                  (null !== t && null !== t.child) ||
                    (y(e), (e.effectTag &= -3)),
                  g(e),
                  null
                );
              case 5:
                h(e), (n = f());
                var _ = e.type;
                if (null !== t && null != e.stateNode) {
                  var E = t.memoizedProps,
                    T = e.stateNode,
                    S = p();
                  (T = c(T, _, E, l, n, S)),
                    b(t, e, T, _, E, l, n),
                    t.ref !== e.ref && (e.effectTag |= 128);
                } else {
                  if (!l) return null === e.stateNode && r("166"), null;
                  if (((t = p()), y(e))) m(e, n, t) && i(e);
                  else {
                    t = o(_, l, n, t, e);
                    t: for (E = e.child; null !== E; ) {
                      if (5 === E.tag || 6 === E.tag) s(t, E.stateNode);
                      else if (4 !== E.tag && null !== E.child) {
                        (E.child.return = E), (E = E.child);
                        continue;
                      }
                      if (E === e) break;
                      for (; null === E.sibling; ) {
                        if (null === E.return || E.return === e) break t;
                        E = E.return;
                      }
                      (E.sibling.return = E.return), (E = E.sibling);
                    }
                    u(t, _, l, n) && i(e), (e.stateNode = t);
                  }
                  null !== e.ref && (e.effectTag |= 128);
                }
                return null;
              case 6:
                if (t && null != e.stateNode) w(t, e, t.memoizedProps, l);
                else {
                  if ("string" != typeof l)
                    return null === e.stateNode && r("166"), null;
                  (t = f()),
                    (n = p()),
                    y(e) ? v(e) && i(e) : (e.stateNode = a(l, t, n, e));
                }
                return null;
              case 7:
                (l = e.memoizedProps) || r("165"), (e.tag = 8), (_ = []);
                t: for ((E = e.stateNode) && (E.return = e); null !== E; ) {
                  if (5 === E.tag || 6 === E.tag || 4 === E.tag) r("247");
                  else if (9 === E.tag) _.push(E.type);
                  else if (null !== E.child) {
                    (E.child.return = E), (E = E.child);
                    continue;
                  }
                  for (; null === E.sibling; ) {
                    if (null === E.return || E.return === e) break t;
                    E = E.return;
                  }
                  (E.sibling.return = E.return), (E = E.sibling);
                }
                return (
                  (E = l.handler),
                  (l = E(l.props, _)),
                  (e.child = Si(e, null !== t ? t.child : null, l, n)),
                  e.child
                );
              case 8:
                return (e.tag = 7), null;
              case 9:
              case 10:
                return null;
              case 4:
                return d(e), g(e), null;
              case 0:
                r("167");
              default:
                r("156");
            }
          },
        }
      );
    }
    function Me(t, e) {
      function n(t) {
        var n = t.ref;
        if (null !== n)
          try {
            n(null);
          } catch (n) {
            e(t, n);
          }
      }
      function i(t) {
        switch (("function" == typeof ve && ve(t), t.tag)) {
          case 2:
            n(t);
            var r = t.stateNode;
            if ("function" == typeof r.componentWillUnmount)
              try {
                (r.props = t.memoizedProps),
                  (r.state = t.memoizedState),
                  r.componentWillUnmount();
              } catch (n) {
                e(t, n);
              }
            break;
          case 5:
            n(t);
            break;
          case 7:
            o(t.stateNode);
            break;
          case 4:
            c && s(t);
        }
      }
      function o(t) {
        for (var e = t; ; )
          if ((i(e), null === e.child || (c && 4 === e.tag))) {
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          } else (e.child.return = e), (e = e.child);
      }
      function a(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag;
      }
      function s(t) {
        for (var e = t, n = !1, a = void 0, s = void 0; ; ) {
          if (!n) {
            n = e.return;
            t: for (;;) {
              switch ((null === n && r("160"), n.tag)) {
                case 5:
                  (a = n.stateNode), (s = !1);
                  break t;
                case 3:
                case 4:
                  (a = n.stateNode.containerInfo), (s = !0);
                  break t;
              }
              n = n.return;
            }
            n = !0;
          }
          if (5 === e.tag || 6 === e.tag)
            o(e), s ? b(a, e.stateNode) : g(a, e.stateNode);
          else if (
            (4 === e.tag ? (a = e.stateNode.containerInfo) : i(e),
            null !== e.child)
          ) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) return;
            4 === (e = e.return).tag && (n = !1);
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      }
      var u = t.getPublicInstance,
        c = t.mutation;
      (t = t.persistence), c || r(t ? "235" : "236");
      var l = c.commitMount,
        f = c.commitUpdate,
        h = c.resetTextContent,
        p = c.commitTextUpdate,
        d = c.appendChild,
        m = c.appendChildToContainer,
        v = c.insertBefore,
        y = c.insertInContainerBefore,
        g = c.removeChild,
        b = c.removeChildFromContainer;
      return {
        commitResetTextContent: function (t) {
          h(t.stateNode);
        },
        commitPlacement: function (t) {
          t: {
            for (var e = t.return; null !== e; ) {
              if (a(e)) {
                var n = e;
                break t;
              }
              e = e.return;
            }
            r("160"), (n = void 0);
          }
          var i = (e = void 0);
          switch (n.tag) {
            case 5:
              (e = n.stateNode), (i = !1);
              break;
            case 3:
            case 4:
              (e = n.stateNode.containerInfo), (i = !0);
              break;
            default:
              r("161");
          }
          16 & n.effectTag && (h(e), (n.effectTag &= -17));
          t: e: for (n = t; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || a(n.return)) {
                n = null;
                break t;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag;

            ) {
              if (2 & n.effectTag) continue e;
              if (null === n.child || 4 === n.tag) continue e;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break t;
            }
          }
          for (var o = t; ; ) {
            if (5 === o.tag || 6 === o.tag)
              n
                ? i
                  ? y(e, o.stateNode, n)
                  : v(e, o.stateNode, n)
                : i
                ? m(e, o.stateNode)
                : d(e, o.stateNode);
            else if (4 !== o.tag && null !== o.child) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        },
        commitDeletion: function (t) {
          s(t),
            (t.return = null),
            (t.child = null),
            t.alternate &&
              ((t.alternate.child = null), (t.alternate.return = null));
        },
        commitWork: function (t, e) {
          switch (e.tag) {
            case 2:
              break;
            case 5:
              var n = e.stateNode;
              if (null != n) {
                var i = e.memoizedProps;
                t = null !== t ? t.memoizedProps : i;
                var o = e.type,
                  a = e.updateQueue;
                (e.updateQueue = null), null !== a && f(n, a, o, t, i, e);
              }
              break;
            case 6:
              null === e.stateNode && r("162"),
                (n = e.memoizedProps),
                p(e.stateNode, null !== t ? t.memoizedProps : n, n);
              break;
            case 3:
              break;
            default:
              r("163");
          }
        },
        commitLifeCycles: function (t, e) {
          switch (e.tag) {
            case 2:
              var n = e.stateNode;
              if (4 & e.effectTag)
                if (null === t)
                  (n.props = e.memoizedProps),
                    (n.state = e.memoizedState),
                    n.componentDidMount();
                else {
                  var i = t.memoizedProps;
                  (t = t.memoizedState),
                    (n.props = e.memoizedProps),
                    (n.state = e.memoizedState),
                    n.componentDidUpdate(i, t);
                }
              null !== (e = e.updateQueue) && Ee(e, n);
              break;
            case 3:
              null !== (n = e.updateQueue) &&
                Ee(n, null !== e.child ? e.child.stateNode : null);
              break;
            case 5:
              (n = e.stateNode),
                null === t &&
                  4 & e.effectTag &&
                  l(n, e.type, e.memoizedProps, e);
              break;
            case 6:
            case 4:
              break;
            default:
              r("163");
          }
        },
        commitAttachRef: function (t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            switch (t.tag) {
              case 5:
                e(u(n));
                break;
              default:
                e(n);
            }
          }
        },
        commitDetachRef: function (t) {
          null !== (t = t.ref) && t(null);
        },
      };
    }
    function Ae(t) {
      function e(t) {
        return t === Pi && r("174"), t;
      }
      var n = t.getChildHostContext,
        i = t.getRootHostContext,
        o = { current: Pi },
        a = { current: Pi },
        s = { current: Pi };
      return {
        getHostContext: function () {
          return e(o.current);
        },
        getRootHostContainer: function () {
          return e(s.current);
        },
        popHostContainer: function (t) {
          $t(o, t), $t(a, t), $t(s, t);
        },
        popHostContext: function (t) {
          a.current === t && ($t(o, t), $t(a, t));
        },
        pushHostContainer: function (t, e) {
          Xt(s, e, t), (e = i(e)), Xt(a, t, t), Xt(o, e, t);
        },
        pushHostContext: function (t) {
          var r = e(s.current),
            i = e(o.current);
          i !== (r = n(i, t.type, r)) && (Xt(a, t, t), Xt(o, r, t));
        },
        resetHostContainer: function () {
          (o.current = Pi), (s.current = Pi);
        },
      };
    }
    function Re(t) {
      function e(t, e) {
        var n = new oe(5, null, 0);
        (n.type = "DELETED"),
          (n.stateNode = e),
          (n.return = t),
          (n.effectTag = 8),
          null !== t.lastEffect
            ? ((t.lastEffect.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n);
      }
      function n(t, e) {
        switch (t.tag) {
          case 5:
            return (
              null !== (e = a(e, t.type, t.pendingProps)) &&
              ((t.stateNode = e), !0)
            );
          case 6:
            return (
              null !== (e = s(e, t.pendingProps)) && ((t.stateNode = e), !0)
            );
          default:
            return !1;
        }
      }
      function i(t) {
        for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag; )
          t = t.return;
        h = t;
      }
      var o = t.shouldSetTextContent;
      if (!(t = t.hydration))
        return {
          enterHydrationState: function () {
            return !1;
          },
          resetHydrationState: function () {},
          tryToClaimNextHydratableInstance: function () {},
          prepareToHydrateHostInstance: function () {
            r("175");
          },
          prepareToHydrateHostTextInstance: function () {
            r("176");
          },
          popHydrationState: function () {
            return !1;
          },
        };
      var a = t.canHydrateInstance,
        s = t.canHydrateTextInstance,
        u = t.getNextHydratableSibling,
        c = t.getFirstHydratableChild,
        l = t.hydrateInstance,
        f = t.hydrateTextInstance,
        h = null,
        p = null,
        d = !1;
      return {
        enterHydrationState: function (t) {
          return (p = c(t.stateNode.containerInfo)), (h = t), (d = !0);
        },
        resetHydrationState: function () {
          (p = h = null), (d = !1);
        },
        tryToClaimNextHydratableInstance: function (t) {
          if (d) {
            var r = p;
            if (r) {
              if (!n(t, r)) {
                if (!(r = u(r)) || !n(t, r))
                  return (t.effectTag |= 2), (d = !1), void (h = t);
                e(h, p);
              }
              (h = t), (p = c(r));
            } else (t.effectTag |= 2), (d = !1), (h = t);
          }
        },
        prepareToHydrateHostInstance: function (t, e, n) {
          return (
            (e = l(t.stateNode, t.type, t.memoizedProps, e, n, t)),
            (t.updateQueue = e),
            null !== e
          );
        },
        prepareToHydrateHostTextInstance: function (t) {
          return f(t.stateNode, t.memoizedProps, t);
        },
        popHydrationState: function (t) {
          if (t !== h) return !1;
          if (!d) return i(t), (d = !0), !1;
          var n = t.type;
          if (
            5 !== t.tag ||
            ("head" !== n && "body" !== n && !o(n, t.memoizedProps))
          )
            for (n = p; n; ) e(t, n), (n = u(n));
          return i(t), (p = h ? u(t.stateNode) : null), !0;
        },
      };
    }
    function Ne(t) {
      function e(t) {
        rt = G = !0;
        var e = t.stateNode;
        if (
          (e.current === t && r("177"),
          (e.isReadyForCommit = !1),
          (Br.current = null),
          1 < t.effectTag)
        )
          if (null !== t.lastEffect) {
            t.lastEffect.nextEffect = t;
            var n = t.firstEffect;
          } else n = t;
        else n = t.firstEffect;
        for (H(), J = n; null !== J; ) {
          var i = !1,
            o = void 0;
          try {
            for (; null !== J; ) {
              var a = J.effectTag;
              if ((16 & a && A(J), 128 & a)) {
                var s = J.alternate;
                null !== s && U(s);
              }
              switch (-242 & a) {
                case 2:
                  R(J), (J.effectTag &= -3);
                  break;
                case 6:
                  R(J), (J.effectTag &= -3), j(J.alternate, J);
                  break;
                case 4:
                  j(J.alternate, J);
                  break;
                case 8:
                  (it = !0), N(J), (it = !1);
              }
              J = J.nextEffect;
            }
          } catch (t) {
            (i = !0), (o = t);
          }
          i &&
            (null === J && r("178"), u(J, o), null !== J && (J = J.nextEffect));
        }
        for (q(), e.current = t, J = n; null !== J; ) {
          (n = !1), (i = void 0);
          try {
            for (; null !== J; ) {
              var c = J.effectTag;
              if ((36 & c && D(J.alternate, J), 128 & c && L(J), 64 & c))
                switch (
                  ((o = J),
                  (a = void 0),
                  null !== Q &&
                    ((a = Q.get(o)),
                    Q.delete(o),
                    null == a &&
                      null !== o.alternate &&
                      ((o = o.alternate), (a = Q.get(o)), Q.delete(o))),
                  null == a && r("184"),
                  o.tag)
                ) {
                  case 2:
                    o.stateNode.componentDidCatch(a.error, {
                      componentStack: a.componentStack,
                    });
                    break;
                  case 3:
                    null === et && (et = a.error);
                    break;
                  default:
                    r("157");
                }
              var l = J.nextEffect;
              (J.nextEffect = null), (J = l);
            }
          } catch (t) {
            (n = !0), (i = t);
          }
          n &&
            (null === J && r("178"), u(J, i), null !== J && (J = J.nextEffect));
        }
        return (
          (G = rt = !1),
          "function" == typeof me && me(t.stateNode),
          tt && (tt.forEach(m), (tt = null)),
          null !== et && ((t = et), (et = null), E(t)),
          0 === (e = e.current.expirationTime) && (Z = Q = null),
          e
        );
      }
      function n(t) {
        for (;;) {
          var e = M(t.alternate, t, X),
            n = t.return,
            r = t.sibling,
            i = t;
          if (2147483647 === X || 2147483647 !== i.expirationTime) {
            if (2 !== i.tag && 3 !== i.tag) var o = 0;
            else (o = i.updateQueue), (o = null === o ? 0 : o.expirationTime);
            for (var a = i.child; null !== a; )
              0 !== a.expirationTime &&
                (0 === o || o > a.expirationTime) &&
                (o = a.expirationTime),
                (a = a.sibling);
            i.expirationTime = o;
          }
          if (null !== e) return e;
          if (
            (null !== n &&
              (null === n.firstEffect && (n.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== n.lastEffect &&
                  (n.lastEffect.nextEffect = t.firstEffect),
                (n.lastEffect = t.lastEffect)),
              1 < t.effectTag &&
                (null !== n.lastEffect
                  ? (n.lastEffect.nextEffect = t)
                  : (n.firstEffect = t),
                (n.lastEffect = t))),
            null !== r)
          )
            return r;
          if (null === n) {
            t.stateNode.isReadyForCommit = !0;
            break;
          }
          t = n;
        }
        return null;
      }
      function i(t) {
        var e = C(t.alternate, t, X);
        return null === e && (e = n(t)), (Br.current = null), e;
      }
      function o(t) {
        var e = I(t.alternate, t, X);
        return null === e && (e = n(t)), (Br.current = null), e;
      }
      function a(t) {
        if (null !== Q) {
          if (!(0 === X || X > t))
            if (X <= K) for (; null !== Y; ) Y = c(Y) ? o(Y) : i(Y);
            else for (; null !== Y && !_(); ) Y = c(Y) ? o(Y) : i(Y);
        } else if (!(0 === X || X > t))
          if (X <= K) for (; null !== Y; ) Y = i(Y);
          else for (; null !== Y && !_(); ) Y = i(Y);
      }
      function s(t, e) {
        if (
          (G && r("243"),
          (G = !0),
          (t.isReadyForCommit = !1),
          t !== $ || e !== X || null === Y)
        ) {
          for (; -1 < fi; ) (li[fi] = null), fi--;
          (gi = Pn),
            (vi.current = Pn),
            (yi.current = !1),
            P(),
            (X = e),
            (Y = ae(($ = t).current, null, e));
        }
        var n = !1,
          i = null;
        try {
          a(e);
        } catch (t) {
          (n = !0), (i = t);
        }
        for (; n; ) {
          if (nt) {
            et = i;
            break;
          }
          var s = Y;
          if (null === s) nt = !0;
          else {
            var c = u(s, i);
            if ((null === c && r("183"), !nt)) {
              try {
                for (i = e, c = n = c; null !== s; ) {
                  switch (s.tag) {
                    case 2:
                      te(s);
                      break;
                    case 5:
                      O(s);
                      break;
                    case 3:
                      x(s);
                      break;
                    case 4:
                      x(s);
                  }
                  if (s === c || s.alternate === c) break;
                  s = s.return;
                }
                (Y = o(n)), a(i);
              } catch (t) {
                (n = !0), (i = t);
                continue;
              }
              break;
            }
          }
        }
        return (
          (e = et),
          (nt = G = !1),
          (et = null),
          null !== e && E(e),
          t.isReadyForCommit ? t.current.alternate : null
        );
      }
      function u(t, e) {
        var n = (Br.current = null),
          r = !1,
          i = !1,
          o = null;
        if (3 === t.tag) (n = t), l(t) && (nt = !0);
        else
          for (var a = t.return; null !== a && null === n; ) {
            if (
              (2 === a.tag
                ? "function" == typeof a.stateNode.componentDidCatch &&
                  ((r = !0), (o = _t(a)), (n = a), (i = !0))
                : 3 === a.tag && (n = a),
              l(a))
            ) {
              if (
                it ||
                (null !== tt &&
                  (tt.has(a) || (null !== a.alternate && tt.has(a.alternate))))
              )
                return null;
              (n = null), (i = !1);
            }
            a = a.return;
          }
        if (null !== n) {
          null === Z && (Z = new Set()), Z.add(n);
          var s = "";
          a = t;
          do {
            t: switch (a.tag) {
              case 0:
              case 1:
              case 2:
              case 5:
                var u = a._debugOwner,
                  c = a._debugSource,
                  f = _t(a),
                  h = null;
                u && (h = _t(u)),
                  (u = c),
                  (f =
                    "\n    in " +
                    (f || "Unknown") +
                    (u
                      ? " (at " +
                        u.fileName.replace(/^.*[\\\/]/, "") +
                        ":" +
                        u.lineNumber +
                        ")"
                      : h
                      ? " (created by " + h + ")"
                      : ""));
                break t;
              default:
                f = "";
            }
            (s += f), (a = a.return);
          } while (a);
          (a = s),
            (t = _t(t)),
            null === Q && (Q = new Map()),
            (e = {
              componentName: t,
              componentStack: a,
              error: e,
              errorBoundary: r ? n.stateNode : null,
              errorBoundaryFound: r,
              errorBoundaryName: o,
              willRetry: i,
            }),
            Q.set(n, e);
          try {
            console.error(e.error);
          } catch (t) {
            console.error(t);
          }
          return rt ? (null === tt && (tt = new Set()), tt.add(n)) : m(n), n;
        }
        return null === et && (et = e), null;
      }
      function c(t) {
        return (
          null !== Q &&
          (Q.has(t) || (null !== t.alternate && Q.has(t.alternate)))
        );
      }
      function l(t) {
        return (
          null !== Z &&
          (Z.has(t) || (null !== t.alternate && Z.has(t.alternate)))
        );
      }
      function f() {
        return 20 * (1 + (((v() + 100) / 20) | 0));
      }
      function h(t) {
        return 0 !== W
          ? W
          : G
          ? rt
            ? 1
            : X
          : !z || 1 & t.internalContextTag
          ? f()
          : 1;
      }
      function p(t, e) {
        return d(t, e, !1);
      }
      function d(t, e) {
        for (; null !== t; ) {
          if (
            ((0 === t.expirationTime || t.expirationTime > e) &&
              (t.expirationTime = e),
            null !== t.alternate &&
              (0 === t.alternate.expirationTime ||
                t.alternate.expirationTime > e) &&
              (t.alternate.expirationTime = e),
            null === t.return)
          ) {
            if (3 !== t.tag) break;
            var n = t.stateNode;
            !G && n === $ && e <= X && ((Y = $ = null), (X = 0));
            var i = e;
            if ((gt > yt && r("185"), null === n.nextScheduledRoot))
              (n.remainingExpirationTime = i),
                null === at
                  ? ((ot = at = n), (n.nextScheduledRoot = n))
                  : ((at = at.nextScheduledRoot = n),
                    (at.nextScheduledRoot = ot));
            else {
              var o = n.remainingExpirationTime;
              (0 === o || i < o) && (n.remainingExpirationTime = i);
            }
            ut ||
              (mt
                ? vt && w(n, 1)
                : 1 === i
                ? b(1, null)
                : st || ((st = !0), B(g)));
          }
          t = t.return;
        }
      }
      function m(t) {
        d(t, 1, !0);
      }
      function v() {
        return (K = 2 + (((F() - V) / 10) | 0));
      }
      function y() {
        var t = 0,
          e = null;
        if (null !== at)
          for (var n = at, i = ot; null !== i; ) {
            var o = i.remainingExpirationTime;
            if (0 === o) {
              if (
                ((null === n || null === at) && r("244"),
                i === i.nextScheduledRoot)
              ) {
                ot = at = i.nextScheduledRoot = null;
                break;
              }
              if (i === ot)
                (ot = o = i.nextScheduledRoot),
                  (at.nextScheduledRoot = o),
                  (i.nextScheduledRoot = null);
              else {
                if (i === at) {
                  ((at = n).nextScheduledRoot = ot),
                    (i.nextScheduledRoot = null);
                  break;
                }
                (n.nextScheduledRoot = i.nextScheduledRoot),
                  (i.nextScheduledRoot = null);
              }
              i = n.nextScheduledRoot;
            } else {
              if (((0 === t || o < t) && ((t = o), (e = i)), i === at)) break;
              (n = i), (i = i.nextScheduledRoot);
            }
          }
        null !== (n = ct) && n === e ? gt++ : (gt = 0), (ct = e), (lt = t);
      }
      function g(t) {
        b(0, t);
      }
      function b(t, e) {
        for (
          dt = e, y();
          null !== ct && 0 !== lt && (0 === t || lt <= t) && !ft;

        )
          w(ct, lt), y();
        if (
          (null !== dt && (st = !1),
          null === ct || st || ((st = !0), B(g)),
          (dt = null),
          (ft = !1),
          (gt = 0),
          ht)
        )
          throw ((t = pt), (pt = null), (ht = !1), t);
      }
      function w(t, n) {
        if ((ut && r("245"), (ut = !0), n <= v())) {
          var i = t.finishedWork;
          null !== i
            ? ((t.finishedWork = null), (t.remainingExpirationTime = e(i)))
            : ((t.finishedWork = null),
              null !== (i = s(t, n)) && (t.remainingExpirationTime = e(i)));
        } else
          null !== (i = t.finishedWork)
            ? ((t.finishedWork = null), (t.remainingExpirationTime = e(i)))
            : ((t.finishedWork = null),
              null !== (i = s(t, n)) &&
                (_()
                  ? (t.finishedWork = i)
                  : (t.remainingExpirationTime = e(i))));
        ut = !1;
      }
      function _() {
        return !(null === dt || dt.timeRemaining() > bt) && (ft = !0);
      }
      function E(t) {
        null === ct && r("246"),
          (ct.remainingExpirationTime = 0),
          ht || ((ht = !0), (pt = t));
      }
      var T = Ae(t),
        S = Re(t),
        x = T.popHostContainer,
        O = T.popHostContext,
        P = T.resetHostContainer,
        k = Ce(t, T, S, p, h),
        C = k.beginWork,
        I = k.beginFailedWork,
        M = Ie(t, T, S).completeWork,
        A = (T = Me(t, u)).commitResetTextContent,
        R = T.commitPlacement,
        N = T.commitDeletion,
        j = T.commitWork,
        D = T.commitLifeCycles,
        L = T.commitAttachRef,
        U = T.commitDetachRef,
        F = t.now,
        B = t.scheduleDeferredCallback,
        z = t.useSyncScheduling,
        H = t.prepareForCommit,
        q = t.resetAfterCommit,
        V = F(),
        K = 2,
        W = 0,
        G = !1,
        Y = null,
        $ = null,
        X = 0,
        J = null,
        Q = null,
        Z = null,
        tt = null,
        et = null,
        nt = !1,
        rt = !1,
        it = !1,
        ot = null,
        at = null,
        st = !1,
        ut = !1,
        ct = null,
        lt = 0,
        ft = !1,
        ht = !1,
        pt = null,
        dt = null,
        mt = !1,
        vt = !1,
        yt = 1e3,
        gt = 0,
        bt = 1;
      return {
        computeAsyncExpiration: f,
        computeExpirationForFiber: h,
        scheduleWork: p,
        batchedUpdates: function (t, e) {
          var n = mt;
          mt = !0;
          try {
            return t(e);
          } finally {
            (mt = n) || ut || b(1, null);
          }
        },
        unbatchedUpdates: function (t) {
          if (mt && !vt) {
            vt = !0;
            try {
              return t();
            } finally {
              vt = !1;
            }
          }
          return t();
        },
        flushSync: function (t) {
          var e = mt;
          mt = !0;
          try {
            t: {
              var n = W;
              W = 1;
              try {
                var i = t();
                break t;
              } finally {
                W = n;
              }
              i = void 0;
            }
            return i;
          } finally {
            (mt = e), ut && r("187"), b(1, null);
          }
        },
        deferredUpdates: function (t) {
          var e = W;
          W = f();
          try {
            return t();
          } finally {
            W = e;
          }
        },
      };
    }
    function je(t) {
      function e(t) {
        return null === (t = Ot(t)) ? null : t.stateNode;
      }
      var n = t.getPublicInstance,
        i = (t = Ne(t)).computeAsyncExpiration,
        o = t.computeExpirationForFiber,
        a = t.scheduleWork;
      return {
        createContainer: function (t, e) {
          var n = new oe(3, null, 0);
          return (
            (t = {
              current: n,
              containerInfo: t,
              pendingChildren: null,
              remainingExpirationTime: 0,
              isReadyForCommit: !1,
              finishedWork: null,
              context: null,
              pendingContext: null,
              hydrate: e,
              nextScheduledRoot: null,
            }),
            (n.stateNode = t)
          );
        },
        updateContainer: function (t, e, n, s) {
          var u = e.current;
          if (n) {
            var c;
            t: {
              for (
                (2 === Et((n = n._reactInternalFiber)) && 2 === n.tag) ||
                  r("170"),
                  c = n;
                3 !== c.tag;

              ) {
                if (Zt(c)) {
                  c = c.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
                (c = c.return) || r("171");
              }
              c = c.stateNode.context;
            }
            n = Zt(n) ? ne(n, c) : c;
          } else n = Pn;
          null === e.context ? (e.context = n) : (e.pendingContext = n),
            (e = void 0 === (e = s) ? null : e),
            be(u, {
              expirationTime: (s =
                null != t &&
                null != t.type &&
                null != t.type.prototype &&
                !0 === t.type.prototype.unstable_isAsyncReactComponent
                  ? i()
                  : o(u)),
              partialState: { element: t },
              callback: e,
              isReplace: !1,
              isForced: !1,
              nextCallback: null,
              next: null,
            }),
            a(u, s);
        },
        batchedUpdates: t.batchedUpdates,
        unbatchedUpdates: t.unbatchedUpdates,
        deferredUpdates: t.deferredUpdates,
        flushSync: t.flushSync,
        getPublicRootInstance: function (t) {
          if (!(t = t.current).child) return null;
          switch (t.child.tag) {
            case 5:
              return n(t.child.stateNode);
            default:
              return t.child.stateNode;
          }
        },
        findHostInstance: e,
        findHostInstanceWithNoPortals: function (t) {
          return null === (t = Pt(t)) ? null : t.stateNode;
        },
        injectIntoDevTools: function (t) {
          var n = t.findFiberByHostInstance;
          return de(
            wn({}, t, {
              findHostInstanceByFiber: function (t) {
                return e(t);
              },
              findFiberByHostInstance: function (t) {
                return n ? n(t) : null;
              },
            })
          );
        },
      };
    }
    function De(t) {
      return (
        !!Ki.hasOwnProperty(t) ||
        (!Vi.hasOwnProperty(t) &&
          (qi.test(t) ? (Ki[t] = !0) : ((Vi[t] = !0), !1)))
      );
    }
    function Le(t, e, n) {
      var r = a(e);
      if (r && o(e, n)) {
        var i = r.mutationMethod;
        i
          ? i(t, n)
          : null == n ||
            (r.hasBooleanValue && !n) ||
            (r.hasNumericValue && isNaN(n)) ||
            (r.hasPositiveNumericValue && 1 > n) ||
            (r.hasOverloadedBooleanValue && !1 === n)
          ? Fe(t, e)
          : r.mustUseProperty
          ? (t[r.propertyName] = n)
          : ((e = r.attributeName),
            (i = r.attributeNamespace)
              ? t.setAttributeNS(i, e, "" + n)
              : r.hasBooleanValue || (r.hasOverloadedBooleanValue && !0 === n)
              ? t.setAttribute(e, "")
              : t.setAttribute(e, "" + n));
      } else Ue(t, e, o(e, n) ? n : null);
    }
    function Ue(t, e, n) {
      De(e) && (null == n ? t.removeAttribute(e) : t.setAttribute(e, "" + n));
    }
    function Fe(t, e) {
      var n = a(e);
      n
        ? (e = n.mutationMethod)
          ? e(t, void 0)
          : n.mustUseProperty
          ? (t[n.propertyName] = !n.hasBooleanValue && "")
          : t.removeAttribute(n.attributeName)
        : t.removeAttribute(e);
    }
    function Be(t, e) {
      var n = e.value,
        r = e.checked;
      return wn({ type: void 0, step: void 0, min: void 0, max: void 0 }, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: null != n ? n : t._wrapperState.initialValue,
        checked: null != r ? r : t._wrapperState.initialChecked,
      });
    }
    function ze(t, e) {
      var n = e.defaultValue;
      t._wrapperState = {
        initialChecked: null != e.checked ? e.checked : e.defaultChecked,
        initialValue: null != e.value ? e.value : n,
        controlled:
          "checkbox" === e.type || "radio" === e.type
            ? null != e.checked
            : null != e.value,
      };
    }
    function He(t, e) {
      var n = e.checked;
      null != n && Le(t, "checked", n || !1),
        null != (n = e.value)
          ? 0 === n && "" === t.value
            ? (t.value = "0")
            : "number" === e.type
            ? (n != (e = parseFloat(t.value) || 0) ||
                (n == e && t.value != n)) &&
              (t.value = "" + n)
            : t.value !== "" + n && (t.value = "" + n)
          : (null == e.value &&
              null != e.defaultValue &&
              t.defaultValue !== "" + e.defaultValue &&
              (t.defaultValue = "" + e.defaultValue),
            null == e.checked &&
              null != e.defaultChecked &&
              (t.defaultChecked = !!e.defaultChecked));
    }
    function qe(t, e) {
      switch (e.type) {
        case "submit":
        case "reset":
          break;
        case "color":
        case "date":
        case "datetime":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          (t.value = ""), (t.value = t.defaultValue);
          break;
        default:
          t.value = t.value;
      }
      "" !== (e = t.name) && (t.name = ""),
        (t.defaultChecked = !t.defaultChecked),
        (t.defaultChecked = !t.defaultChecked),
        "" !== e && (t.name = e);
    }
    function Ve(t) {
      var e = "";
      return (
        gn.Children.forEach(t, function (t) {
          null == t ||
            ("string" != typeof t && "number" != typeof t) ||
            (e += t);
        }),
        e
      );
    }
    function Ke(t, e) {
      return (
        (t = wn({ children: void 0 }, e)),
        (e = Ve(e.children)) && (t.children = e),
        t
      );
    }
    function We(t, e, n, r) {
      if (((t = t.options), e)) {
        e = {};
        for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
          (i = e.hasOwnProperty("$" + t[n].value)),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0);
      } else {
        for (n = "" + n, e = null, i = 0; i < t.length; i++) {
          if (t[i].value === n)
            return (
              (t[i].selected = !0), void (r && (t[i].defaultSelected = !0))
            );
          null !== e || t[i].disabled || (e = t[i]);
        }
        null !== e && (e.selected = !0);
      }
    }
    function Ge(t, e) {
      var n = e.value;
      t._wrapperState = {
        initialValue: null != n ? n : e.defaultValue,
        wasMultiple: !!e.multiple,
      };
    }
    function Ye(t, e) {
      return (
        null != e.dangerouslySetInnerHTML && r("91"),
        wn({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: "" + t._wrapperState.initialValue,
        })
      );
    }
    function $e(t, e) {
      var n = e.value,
        i = n;
      null == n &&
        ((n = e.defaultValue),
        null != (e = e.children) &&
          (null != n && r("92"),
          Array.isArray(e) && (1 >= e.length || r("93"), (e = e[0])),
          (n = "" + e)),
        null == n && (n = ""),
        (i = n)),
        (t._wrapperState = { initialValue: "" + i });
    }
    function Xe(t, e) {
      var n = e.value;
      null != n &&
        ((n = "" + n) !== t.value && (t.value = n),
        null == e.defaultValue && (t.defaultValue = n)),
        null != e.defaultValue && (t.defaultValue = e.defaultValue);
    }
    function Je(t) {
      var e = t.textContent;
      e === t._wrapperState.initialValue && (t.value = e);
    }
    function Qe(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Ze(t, e) {
      return null == t || "http://www.w3.org/1999/xhtml" === t
        ? Qe(e)
        : "http://www.w3.org/2000/svg" === t && "foreignObject" === e
        ? "http://www.w3.org/1999/xhtml"
        : t;
    }
    function tn(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = e);
      }
      t.textContent = e;
    }
    function en(t, e) {
      t = t.style;
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            i = n,
            o = e[n];
          (i =
            null == o || "boolean" == typeof o || "" === o
              ? ""
              : r ||
                "number" != typeof o ||
                0 === o ||
                (Ji.hasOwnProperty(i) && Ji[i])
              ? ("" + o).trim()
              : o + "px"),
            "float" === n && (n = "cssFloat"),
            r ? t.setProperty(n, i) : (t[n] = i);
        }
    }
    function nn(t, e, n) {
      e &&
        (Zi[t] &&
          (null != e.children || null != e.dangerouslySetInnerHTML) &&
          r("137", t, n()),
        null != e.dangerouslySetInnerHTML &&
          (null != e.children && r("60"),
          ("object" == typeof e.dangerouslySetInnerHTML &&
            "__html" in e.dangerouslySetInnerHTML) ||
            r("61")),
        null != e.style && "object" != typeof e.style && r("62", n()));
    }
    function rn(t, e) {
      if (-1 === t.indexOf("-")) return "string" == typeof e.is;
      switch (t) {
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
    function on(t, e) {
      var n = jt(
        (t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument)
      );
      e = $n[e];
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        (n.hasOwnProperty(i) && n[i]) ||
          ("topWheel" === i
            ? nt("wheel")
              ? It("topWheel", "wheel", t)
              : nt("mousewheel")
              ? It("topWheel", "mousewheel", t)
              : It("topWheel", "DOMMouseScroll", t)
            : "topScroll" === i
            ? Mt("topScroll", "scroll", t)
            : "topFocus" === i || "topBlur" === i
            ? (Mt("topFocus", "focus", t),
              Mt("topBlur", "blur", t),
              (n.topBlur = !0),
              (n.topFocus = !0))
            : "topCancel" === i
            ? (nt("cancel", !0) && Mt("topCancel", "cancel", t),
              (n.topCancel = !0))
            : "topClose" === i
            ? (nt("close", !0) && Mt("topClose", "close", t), (n.topClose = !0))
            : Yr.hasOwnProperty(i) && It(i, Yr[i], t),
          (n[i] = !0));
      }
    }
    function an(t, e, n, r) {
      return (
        (n = 9 === n.nodeType ? n : n.ownerDocument),
        r === to && (r = Qe(t)),
        r === to
          ? "script" === t
            ? ((t = n.createElement("div")),
              (t.innerHTML = "<script></script>"),
              (t = t.removeChild(t.firstChild)))
            : (t =
                "string" == typeof e.is
                  ? n.createElement(t, { is: e.is })
                  : n.createElement(t))
          : (t = n.createElementNS(r, t)),
        t
      );
    }
    function sn(t, e) {
      return (9 === e.nodeType ? e : e.ownerDocument).createTextNode(t);
    }
    function un(t, e, n, r) {
      var i = rn(e, n);
      switch (e) {
        case "iframe":
        case "object":
          It("topLoad", "load", t);
          var o = n;
          break;
        case "video":
        case "audio":
          for (o in no) no.hasOwnProperty(o) && It(o, no[o], t);
          o = n;
          break;
        case "source":
          It("topError", "error", t), (o = n);
          break;
        case "img":
        case "image":
          It("topError", "error", t), It("topLoad", "load", t), (o = n);
          break;
        case "form":
          It("topReset", "reset", t), It("topSubmit", "submit", t), (o = n);
          break;
        case "details":
          It("topToggle", "toggle", t), (o = n);
          break;
        case "input":
          ze(t, n),
            (o = Be(t, n)),
            It("topInvalid", "invalid", t),
            on(r, "onChange");
          break;
        case "option":
          o = Ke(t, n);
          break;
        case "select":
          Ge(t, n),
            (o = wn({}, n, { value: void 0 })),
            It("topInvalid", "invalid", t),
            on(r, "onChange");
          break;
        case "textarea":
          $e(t, n),
            (o = Ye(t, n)),
            It("topInvalid", "invalid", t),
            on(r, "onChange");
          break;
        default:
          o = n;
      }
      nn(e, o, eo);
      var a,
        s = o;
      for (a in s)
        if (s.hasOwnProperty(a)) {
          var u = s[a];
          "style" === a
            ? en(t, u, eo)
            : "dangerouslySetInnerHTML" === a
            ? null != (u = u ? u.__html : void 0) && Yi(t, u)
            : "children" === a
            ? "string" == typeof u
              ? ("textarea" !== e || "" !== u) && Xi(t, u)
              : "number" == typeof u && Xi(t, "" + u)
            : "suppressContentEditableWarning" !== a &&
              "suppressHydrationWarning" !== a &&
              "autoFocus" !== a &&
              (Yn.hasOwnProperty(a)
                ? null != u && on(r, a)
                : i
                ? Ue(t, a, u)
                : null != u && Le(t, a, u));
        }
      switch (e) {
        case "input":
          ot(t), qe(t, n);
          break;
        case "textarea":
          ot(t), Je(t, n);
          break;
        case "option":
          null != n.value && t.setAttribute("value", n.value);
          break;
        case "select":
          (t.multiple = !!n.multiple),
            null != (e = n.value)
              ? We(t, !!n.multiple, e, !1)
              : null != n.defaultValue &&
                We(t, !!n.multiple, n.defaultValue, !0);
          break;
        default:
          "function" == typeof o.onClick && (t.onclick = _n);
      }
    }
    function cn(t, e, n, r, i) {
      var o = null;
      switch (e) {
        case "input":
          (n = Be(t, n)), (r = Be(t, r)), (o = []);
          break;
        case "option":
          (n = Ke(t, n)), (r = Ke(t, r)), (o = []);
          break;
        case "select":
          (n = wn({}, n, { value: void 0 })),
            (r = wn({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (n = Ye(t, n)), (r = Ye(t, r)), (o = []);
          break;
        default:
          "function" != typeof n.onClick &&
            "function" == typeof r.onClick &&
            (t.onclick = _n);
      }
      nn(e, r, eo);
      var a, s;
      t = null;
      for (a in n)
        if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && null != n[a])
          if ("style" === a)
            for (s in (e = n[a]))
              e.hasOwnProperty(s) && (t || (t = {}), (t[s] = ""));
          else
            "dangerouslySetInnerHTML" !== a &&
              "children" !== a &&
              "suppressContentEditableWarning" !== a &&
              "suppressHydrationWarning" !== a &&
              "autoFocus" !== a &&
              (Yn.hasOwnProperty(a)
                ? o || (o = [])
                : (o = o || []).push(a, null));
      for (a in r) {
        var u = r[a];
        if (
          ((e = null != n ? n[a] : void 0),
          r.hasOwnProperty(a) && u !== e && (null != u || null != e))
        )
          if ("style" === a)
            if (e) {
              for (s in e)
                !e.hasOwnProperty(s) ||
                  (u && u.hasOwnProperty(s)) ||
                  (t || (t = {}), (t[s] = ""));
              for (s in u)
                u.hasOwnProperty(s) &&
                  e[s] !== u[s] &&
                  (t || (t = {}), (t[s] = u[s]));
            } else t || (o || (o = []), o.push(a, t)), (t = u);
          else
            "dangerouslySetInnerHTML" === a
              ? ((u = u ? u.__html : void 0),
                (e = e ? e.__html : void 0),
                null != u && e !== u && (o = o || []).push(a, "" + u))
              : "children" === a
              ? e === u ||
                ("string" != typeof u && "number" != typeof u) ||
                (o = o || []).push(a, "" + u)
              : "suppressContentEditableWarning" !== a &&
                "suppressHydrationWarning" !== a &&
                (Yn.hasOwnProperty(a)
                  ? (null != u && on(i, a), o || e === u || (o = []))
                  : (o = o || []).push(a, u));
      }
      return t && (o = o || []).push("style", t), o;
    }
    function ln(t, e, n, r, i) {
      rn(n, r), (r = rn(n, i));
      for (var o = 0; o < e.length; o += 2) {
        var a = e[o],
          s = e[o + 1];
        "style" === a
          ? en(t, s, eo)
          : "dangerouslySetInnerHTML" === a
          ? Yi(t, s)
          : "children" === a
          ? Xi(t, s)
          : r
          ? null != s
            ? Ue(t, a, s)
            : t.removeAttribute(a)
          : null != s
          ? Le(t, a, s)
          : Fe(t, a);
      }
      switch (n) {
        case "input":
          He(t, i), at(t);
          break;
        case "textarea":
          Xe(t, i);
          break;
        case "select":
          (t._wrapperState.initialValue = void 0),
            (e = t._wrapperState.wasMultiple),
            (t._wrapperState.wasMultiple = !!i.multiple),
            null != (n = i.value)
              ? We(t, !!i.multiple, n, !1)
              : e !== !!i.multiple &&
                (null != i.defaultValue
                  ? We(t, !!i.multiple, i.defaultValue, !0)
                  : We(t, !!i.multiple, i.multiple ? [] : "", !1));
      }
    }
    function fn(t, e, n, r, i) {
      switch (e) {
        case "iframe":
        case "object":
          It("topLoad", "load", t);
          break;
        case "video":
        case "audio":
          for (var o in no) no.hasOwnProperty(o) && It(o, no[o], t);
          break;
        case "source":
          It("topError", "error", t);
          break;
        case "img":
        case "image":
          It("topError", "error", t), It("topLoad", "load", t);
          break;
        case "form":
          It("topReset", "reset", t), It("topSubmit", "submit", t);
          break;
        case "details":
          It("topToggle", "toggle", t);
          break;
        case "input":
          ze(t, n), It("topInvalid", "invalid", t), on(i, "onChange");
          break;
        case "select":
          Ge(t, n), It("topInvalid", "invalid", t), on(i, "onChange");
          break;
        case "textarea":
          $e(t, n), It("topInvalid", "invalid", t), on(i, "onChange");
      }
      nn(e, n, eo), (r = null);
      for (var a in n)
        n.hasOwnProperty(a) &&
          ((o = n[a]),
          "children" === a
            ? "string" == typeof o
              ? t.textContent !== o && (r = ["children", o])
              : "number" == typeof o &&
                t.textContent !== "" + o &&
                (r = ["children", "" + o])
            : Yn.hasOwnProperty(a) && null != o && on(i, a));
      switch (e) {
        case "input":
          ot(t), qe(t, n);
          break;
        case "textarea":
          ot(t), Je(t, n);
          break;
        case "select":
        case "option":
          break;
        default:
          "function" == typeof n.onClick && (t.onclick = _n);
      }
      return r;
    }
    function hn(t, e) {
      return t.nodeValue !== e;
    }
    function pn(t) {
      return !(
        !t ||
        (1 !== t.nodeType &&
          9 !== t.nodeType &&
          11 !== t.nodeType &&
          (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
      );
    }
    function dn(t) {
      return !(
        !(t = t
          ? 9 === t.nodeType
            ? t.documentElement
            : t.firstChild
          : null) ||
        1 !== t.nodeType ||
        !t.hasAttribute("data-reactroot")
      );
    }
    function mn(t, e, n, i, o) {
      pn(n) || r("200");
      var a = n._reactRootContainer;
      if (a) ao.updateContainer(e, a, t, o);
      else {
        if (!(i = i || dn(n)))
          for (a = void 0; (a = n.lastChild); ) n.removeChild(a);
        var s = ao.createContainer(n, i);
        (a = n._reactRootContainer = s),
          ao.unbatchedUpdates(function () {
            ao.updateContainer(e, s, t, o);
          });
      }
      return ao.getPublicRootInstance(a);
    }
    function vn(t, e) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      return pn(e) || r("200"), Se(t, e, null, n);
    }
    function yn(t, e) {
      this._reactRootContainer = ao.createContainer(t, e);
    }
    /** @license React v16.1.1
     * react-dom.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var gn = n(0),
      bn = n(47),
      wn = n(16),
      _n = n(6),
      En = n(48),
      Tn = n(49),
      Sn = n(50),
      xn = n(51),
      On = n(54),
      Pn = n(17);
    gn || r("227");
    var kn = {
        children: !0,
        dangerouslySetInnerHTML: !0,
        defaultValue: !0,
        defaultChecked: !0,
        innerHTML: !0,
        suppressContentEditableWarning: !0,
        suppressHydrationWarning: !0,
        style: !0,
      },
      Cn = {
        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
        HAS_STRING_BOOLEAN_VALUE: 64,
        injectDOMPropertyConfig: function (t) {
          var e = Cn,
            n = t.Properties || {},
            o = t.DOMAttributeNamespaces || {},
            a = t.DOMAttributeNames || {};
          t = t.DOMMutationMethods || {};
          for (var s in n) {
            In.hasOwnProperty(s) && r("48", s);
            var u = s.toLowerCase(),
              c = n[s];
            1 >=
              (u = {
                attributeName: u,
                attributeNamespace: null,
                propertyName: s,
                mutationMethod: null,
                mustUseProperty: i(c, e.MUST_USE_PROPERTY),
                hasBooleanValue: i(c, e.HAS_BOOLEAN_VALUE),
                hasNumericValue: i(c, e.HAS_NUMERIC_VALUE),
                hasPositiveNumericValue: i(c, e.HAS_POSITIVE_NUMERIC_VALUE),
                hasOverloadedBooleanValue: i(c, e.HAS_OVERLOADED_BOOLEAN_VALUE),
                hasStringBooleanValue: i(c, e.HAS_STRING_BOOLEAN_VALUE),
              }).hasBooleanValue +
                u.hasNumericValue +
                u.hasOverloadedBooleanValue || r("50", s),
              a.hasOwnProperty(s) && (u.attributeName = a[s]),
              o.hasOwnProperty(s) && (u.attributeNamespace = o[s]),
              t.hasOwnProperty(s) && (u.mutationMethod = t[s]),
              (In[s] = u);
          }
        },
      },
      In = {},
      Mn = Cn,
      An = Mn.MUST_USE_PROPERTY,
      Rn = Mn.HAS_BOOLEAN_VALUE,
      Nn = Mn.HAS_NUMERIC_VALUE,
      jn = Mn.HAS_POSITIVE_NUMERIC_VALUE,
      Dn = Mn.HAS_OVERLOADED_BOOLEAN_VALUE,
      Ln = Mn.HAS_STRING_BOOLEAN_VALUE,
      Un = {
        Properties: {
          allowFullScreen: Rn,
          async: Rn,
          autoFocus: Rn,
          autoPlay: Rn,
          capture: Dn,
          checked: An | Rn,
          cols: jn,
          contentEditable: Ln,
          controls: Rn,
          default: Rn,
          defer: Rn,
          disabled: Rn,
          download: Dn,
          draggable: Ln,
          formNoValidate: Rn,
          hidden: Rn,
          loop: Rn,
          multiple: An | Rn,
          muted: An | Rn,
          noValidate: Rn,
          open: Rn,
          playsInline: Rn,
          readOnly: Rn,
          required: Rn,
          reversed: Rn,
          rows: jn,
          rowSpan: Nn,
          scoped: Rn,
          seamless: Rn,
          selected: An | Rn,
          size: jn,
          start: Nn,
          span: jn,
          spellCheck: Ln,
          style: 0,
          tabIndex: 0,
          itemScope: Rn,
          acceptCharset: 0,
          className: 0,
          htmlFor: 0,
          httpEquiv: 0,
          value: Ln,
        },
        DOMAttributeNames: {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
        },
        DOMMutationMethods: {
          value: function (t, e) {
            if (null == e) return t.removeAttribute("value");
            "number" !== t.type || !1 === t.hasAttribute("value")
              ? t.setAttribute("value", "" + e)
              : t.validity &&
                !t.validity.badInput &&
                t.ownerDocument.activeElement !== t &&
                t.setAttribute("value", "" + e);
          },
        },
      },
      Fn = Mn.HAS_STRING_BOOLEAN_VALUE,
      Bn = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
      },
      zn = {
        Properties: {
          autoReverse: Fn,
          externalResourcesRequired: Fn,
          preserveAlpha: Fn,
        },
        DOMAttributeNames: {
          autoReverse: "autoReverse",
          externalResourcesRequired: "externalResourcesRequired",
          preserveAlpha: "preserveAlpha",
        },
        DOMAttributeNamespaces: {
          xlinkActuate: Bn.xlink,
          xlinkArcrole: Bn.xlink,
          xlinkHref: Bn.xlink,
          xlinkRole: Bn.xlink,
          xlinkShow: Bn.xlink,
          xlinkTitle: Bn.xlink,
          xlinkType: Bn.xlink,
          xmlBase: Bn.xml,
          xmlLang: Bn.xml,
          xmlSpace: Bn.xml,
        },
      },
      Hn = /[\-\:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space"
      .split(" ")
      .forEach(function (t) {
        var e = t.replace(Hn, s);
        (zn.Properties[e] = 0), (zn.DOMAttributeNames[e] = t);
      }),
      Mn.injectDOMPropertyConfig(Un),
      Mn.injectDOMPropertyConfig(zn);
    var qn = {
        _caughtError: null,
        _hasCaughtError: !1,
        _rethrowError: null,
        _hasRethrowError: !1,
        injection: {
          injectErrorUtils: function (t) {
            "function" != typeof t.invokeGuardedCallback && r("197"),
              (u = t.invokeGuardedCallback);
          },
        },
        invokeGuardedCallback: function (t, e, n, r, i, o, a, s, c) {
          u.apply(qn, arguments);
        },
        invokeGuardedCallbackAndCatchFirstError: function (
          t,
          e,
          n,
          r,
          i,
          o,
          a,
          s,
          u
        ) {
          if (
            (qn.invokeGuardedCallback.apply(this, arguments),
            qn.hasCaughtError())
          ) {
            var c = qn.clearCaughtError();
            qn._hasRethrowError ||
              ((qn._hasRethrowError = !0), (qn._rethrowError = c));
          }
        },
        rethrowCaughtError: function () {
          return c.apply(qn, arguments);
        },
        hasCaughtError: function () {
          return qn._hasCaughtError;
        },
        clearCaughtError: function () {
          if (qn._hasCaughtError) {
            var t = qn._caughtError;
            return (qn._caughtError = null), (qn._hasCaughtError = !1), t;
          }
          r("198");
        },
      },
      Vn = null,
      Kn = {},
      Wn = [],
      Gn = {},
      Yn = {},
      $n = {},
      Xn = Object.freeze({
        plugins: Wn,
        eventNameDispatchConfigs: Gn,
        registrationNameModules: Yn,
        registrationNameDependencies: $n,
        possibleRegistrationNames: null,
        injectEventPluginOrder: h,
        injectEventPluginsByName: p,
      }),
      Jn = null,
      Qn = null,
      Zn = null,
      tr = null,
      er = { injectEventPluginOrder: h, injectEventPluginsByName: p },
      nr = Object.freeze({
        injection: er,
        getListener: w,
        extractEvents: _,
        enqueueEvents: E,
        processEventQueue: T,
      }),
      rr = Math.random().toString(36).slice(2),
      ir = "__reactInternalInstance$" + rr,
      or = "__reactEventHandlers$" + rr,
      ar = Object.freeze({
        precacheFiberNode: function (t, e) {
          e[ir] = t;
        },
        getClosestInstanceFromNode: S,
        getInstanceFromNode: function (t) {
          return !(t = t[ir]) || (5 !== t.tag && 6 !== t.tag) ? null : t;
        },
        getNodeFromInstance: x,
        getFiberCurrentPropsFromNode: O,
        updateFiberProps: function (t, e) {
          t[or] = e;
        },
      }),
      sr = Object.freeze({
        accumulateTwoPhaseDispatches: N,
        accumulateTwoPhaseDispatchesSkipTarget: function (t) {
          v(t, M);
        },
        accumulateEnterLeaveDispatches: j,
        accumulateDirectDispatches: function (t) {
          v(t, R);
        },
      }),
      ur = null,
      cr = { _root: null, _startText: null, _fallbackText: null },
      lr =
        "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(
          " "
        ),
      fr = {
        type: null,
        target: null,
        currentTarget: _n.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      };
    wn(F.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : "unknown" != typeof t.returnValue && (t.returnValue = !1),
          (this.isDefaultPrevented = _n.thatReturnsTrue));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0),
          (this.isPropagationStopped = _n.thatReturnsTrue));
      },
      persist: function () {
        this.isPersistent = _n.thatReturnsTrue;
      },
      isPersistent: _n.thatReturnsFalse,
      destructor: function () {
        var t,
          e = this.constructor.Interface;
        for (t in e) this[t] = null;
        for (e = 0; e < lr.length; e++) this[lr[e]] = null;
      },
    }),
      (F.Interface = fr),
      (F.augmentClass = function (t, e) {
        function n() {}
        n.prototype = this.prototype;
        var r = new n();
        wn(r, t.prototype),
          (t.prototype = r),
          (t.prototype.constructor = t),
          (t.Interface = wn({}, this.Interface, e)),
          (t.augmentClass = this.augmentClass),
          H(t);
      }),
      H(F),
      F.augmentClass(q, { data: null }),
      F.augmentClass(V, { data: null });
    var hr = [9, 13, 27, 32],
      pr = bn.canUseDOM && "CompositionEvent" in window,
      dr = null;
    bn.canUseDOM && "documentMode" in document && (dr = document.documentMode);
    var mr;
    if ((mr = bn.canUseDOM && "TextEvent" in window && !dr)) {
      var vr = window.opera;
      mr = !(
        "object" == typeof vr &&
        "function" == typeof vr.version &&
        12 >= parseInt(vr.version(), 10)
      );
    }
    var yr,
      gr = mr,
      br = bn.canUseDOM && (!pr || (dr && 8 < dr && 11 >= dr)),
      wr = String.fromCharCode(32),
      _r = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture",
          },
          dependencies: [
            "topCompositionEnd",
            "topKeyPress",
            "topTextInput",
            "topPaste",
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture",
          },
          dependencies:
            "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " "
            ),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies:
            "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " "
            ),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies:
            "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " "
            ),
        },
      },
      Er = !1,
      Tr = !1,
      Sr = {
        eventTypes: _r,
        extractEvents: function (t, e, n, r) {
          var i;
          if (pr)
            t: {
              switch (t) {
                case "topCompositionStart":
                  var o = _r.compositionStart;
                  break t;
                case "topCompositionEnd":
                  o = _r.compositionEnd;
                  break t;
                case "topCompositionUpdate":
                  o = _r.compositionUpdate;
                  break t;
              }
              o = void 0;
            }
          else
            Tr
              ? K(t, n) && (o = _r.compositionEnd)
              : "topKeyDown" === t &&
                229 === n.keyCode &&
                (o = _r.compositionStart);
          return (
            o
              ? (br &&
                  (Tr || o !== _r.compositionStart
                    ? o === _r.compositionEnd && Tr && (i = L())
                    : ((cr._root = r), (cr._startText = U()), (Tr = !0))),
                (o = q.getPooled(o, e, n, r)),
                i ? (o.data = i) : null !== (i = W(n)) && (o.data = i),
                N(o),
                (i = o))
              : (i = null),
            (t = gr ? G(t, n) : Y(t, n))
              ? ((e = V.getPooled(_r.beforeInput, e, n, r)), (e.data = t), N(e))
              : (e = null),
            [i, e]
          );
        },
      },
      xr = null,
      Or = null,
      Pr = null,
      kr = {
        injectFiberControlledHostComponent: function (t) {
          xr = t;
        },
      },
      Cr = Object.freeze({
        injection: kr,
        enqueueStateRestore: X,
        restoreStateIfNeeded: J,
      }),
      Ir = !1,
      Mr = {
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
    bn.canUseDOM &&
      (yr =
        document.implementation &&
        document.implementation.hasFeature &&
        !0 !== document.implementation.hasFeature("", ""));
    var Ar = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(
              " "
            ),
        },
      },
      Rr = null,
      Nr = null,
      jr = !1;
    bn.canUseDOM &&
      (jr =
        nt("input") && (!document.documentMode || 9 < document.documentMode));
    var Dr = {
      eventTypes: Ar,
      _isInputEventSupported: jr,
      extractEvents: function (t, e, n, r) {
        var i = e ? x(e) : window,
          o = i.nodeName && i.nodeName.toLowerCase();
        if ("select" === o || ("input" === o && "file" === i.type)) var a = lt;
        else if (tt(i))
          if (jr) a = vt;
          else {
            a = dt;
            var s = pt;
          }
        else
          !(o = i.nodeName) ||
            "input" !== o.toLowerCase() ||
            ("checkbox" !== i.type && "radio" !== i.type) ||
            (a = mt);
        if (a && (a = a(t, e))) return st(a, n, r);
        s && s(t, i, e),
          "topBlur" === t &&
            null != e &&
            (t = e._wrapperState || i._wrapperState) &&
            t.controlled &&
            "number" === i.type &&
            ((t = "" + i.value),
            i.getAttribute("value") !== t && i.setAttribute("value", t));
      },
    };
    F.augmentClass(yt, { view: null, detail: null });
    var Lr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
    yt.augmentClass(wt, {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: bt,
      button: null,
      buttons: null,
      relatedTarget: function (t) {
        return (
          t.relatedTarget ||
          (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
        );
      },
    });
    var Ur = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["topMouseOut", "topMouseOver"],
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["topMouseOut", "topMouseOver"],
        },
      },
      Fr = {
        eventTypes: Ur,
        extractEvents: function (t, e, n, r) {
          if (
            ("topMouseOver" === t && (n.relatedTarget || n.fromElement)) ||
            ("topMouseOut" !== t && "topMouseOver" !== t)
          )
            return null;
          var i =
            r.window === r
              ? r
              : (i = r.ownerDocument)
              ? i.defaultView || i.parentWindow
              : window;
          if (
            ("topMouseOut" === t
              ? ((t = e),
                (e = (e = n.relatedTarget || n.toElement) ? S(e) : null))
              : (t = null),
            t === e)
          )
            return null;
          var o = null == t ? i : x(t);
          i = null == e ? i : x(e);
          var a = wt.getPooled(Ur.mouseLeave, t, n, r);
          return (
            (a.type = "mouseleave"),
            (a.target = o),
            (a.relatedTarget = i),
            (n = wt.getPooled(Ur.mouseEnter, e, n, r)),
            (n.type = "mouseenter"),
            (n.target = i),
            (n.relatedTarget = o),
            j(a, n, t, e),
            [a, n]
          );
        },
      },
      Br =
        gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      zr = [],
      Hr = !0,
      qr = void 0,
      Vr = Object.freeze({
        get _enabled() {
          return Hr;
        },
        get _handleTopLevel() {
          return qr;
        },
        setHandleTopLevel: function (t) {
          qr = t;
        },
        setEnabled: Ct,
        isEnabled: function () {
          return Hr;
        },
        trapBubbledEvent: It,
        trapCapturedEvent: Mt,
        dispatchEvent: At,
      }),
      Kr = {
        animationend: Rt("Animation", "AnimationEnd"),
        animationiteration: Rt("Animation", "AnimationIteration"),
        animationstart: Rt("Animation", "AnimationStart"),
        transitionend: Rt("Transition", "TransitionEnd"),
      },
      Wr = {},
      Gr = {};
    bn.canUseDOM &&
      ((Gr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Kr.animationend.animation,
        delete Kr.animationiteration.animation,
        delete Kr.animationstart.animation),
      "TransitionEvent" in window || delete Kr.transitionend.transition);
    var Yr = {
        topAbort: "abort",
        topAnimationEnd: Nt("animationend") || "animationend",
        topAnimationIteration: Nt("animationiteration") || "animationiteration",
        topAnimationStart: Nt("animationstart") || "animationstart",
        topBlur: "blur",
        topCancel: "cancel",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topClose: "close",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoad: "load",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topToggle: "toggle",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topTransitionEnd: Nt("transitionend") || "transitionend",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel",
      },
      $r = {},
      Xr = 0,
      Jr = "_reactListenersID" + ("" + Math.random()).slice(2),
      Qr =
        bn.canUseDOM &&
        "documentMode" in document &&
        11 >= document.documentMode,
      Zr = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies:
            "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(
              " "
            ),
        },
      },
      ti = null,
      ei = null,
      ni = null,
      ri = !1,
      ii = {
        eventTypes: Zr,
        extractEvents: function (t, e, n, r) {
          var i,
            o =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument;
          if (!(i = !o)) {
            t: {
              (o = jt(o)), (i = $n.onSelect);
              for (var a = 0; a < i.length; a++) {
                var s = i[a];
                if (!o.hasOwnProperty(s) || !o[s]) {
                  o = !1;
                  break t;
                }
              }
              o = !0;
            }
            i = !o;
          }
          if (i) return null;
          switch (((o = e ? x(e) : window), t)) {
            case "topFocus":
              (tt(o) || "true" === o.contentEditable) &&
                ((ti = o), (ei = e), (ni = null));
              break;
            case "topBlur":
              ni = ei = ti = null;
              break;
            case "topMouseDown":
              ri = !0;
              break;
            case "topContextMenu":
            case "topMouseUp":
              return (ri = !1), Ft(n, r);
            case "topSelectionChange":
              if (Qr) break;
            case "topKeyDown":
            case "topKeyUp":
              return Ft(n, r);
          }
          return null;
        },
      };
    F.augmentClass(Bt, {
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    }),
      F.augmentClass(zt, {
        clipboardData: function (t) {
          return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
      }),
      yt.augmentClass(Ht, { relatedTarget: null });
    var oi = {
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
      ai = {
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
      };
    yt.augmentClass(Vt, {
      key: function (t) {
        if (t.key) {
          var e = oi[t.key] || t.key;
          if ("Unidentified" !== e) return e;
        }
        return "keypress" === t.type
          ? 13 === (t = qt(t))
            ? "Enter"
            : String.fromCharCode(t)
          : "keydown" === t.type || "keyup" === t.type
          ? ai[t.keyCode] || "Unidentified"
          : "";
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: bt,
      charCode: function (t) {
        return "keypress" === t.type ? qt(t) : 0;
      },
      keyCode: function (t) {
        return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
      },
      which: function (t) {
        return "keypress" === t.type
          ? qt(t)
          : "keydown" === t.type || "keyup" === t.type
          ? t.keyCode
          : 0;
      },
    }),
      wt.augmentClass(Kt, { dataTransfer: null }),
      yt.augmentClass(Wt, {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: bt,
      }),
      F.augmentClass(Gt, {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      wt.augmentClass(Yt, {
        deltaX: function (t) {
          return "deltaX" in t
            ? t.deltaX
            : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t
            ? t.deltaY
            : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      });
    var si = {},
      ui = {};
    "abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel"
      .split(" ")
      .forEach(function (t) {
        var e = t[0].toUpperCase() + t.slice(1),
          n = "on" + e;
        (n = {
          phasedRegistrationNames: { bubbled: n, captured: n + "Capture" },
          dependencies: [(e = "top" + e)],
        }),
          (si[t] = n),
          (ui[e] = n);
      });
    var ci = {
      eventTypes: si,
      extractEvents: function (t, e, n, r) {
        var i = ui[t];
        if (!i) return null;
        switch (t) {
          case "topKeyPress":
            if (0 === qt(n)) return null;
          case "topKeyDown":
          case "topKeyUp":
            t = Vt;
            break;
          case "topBlur":
          case "topFocus":
            t = Ht;
            break;
          case "topClick":
            if (2 === n.button) return null;
          case "topDoubleClick":
          case "topMouseDown":
          case "topMouseMove":
          case "topMouseUp":
          case "topMouseOut":
          case "topMouseOver":
          case "topContextMenu":
            t = wt;
            break;
          case "topDrag":
          case "topDragEnd":
          case "topDragEnter":
          case "topDragExit":
          case "topDragLeave":
          case "topDragOver":
          case "topDragStart":
          case "topDrop":
            t = Kt;
            break;
          case "topTouchCancel":
          case "topTouchEnd":
          case "topTouchMove":
          case "topTouchStart":
            t = Wt;
            break;
          case "topAnimationEnd":
          case "topAnimationIteration":
          case "topAnimationStart":
            t = Bt;
            break;
          case "topTransitionEnd":
            t = Gt;
            break;
          case "topScroll":
            t = yt;
            break;
          case "topWheel":
            t = Yt;
            break;
          case "topCopy":
          case "topCut":
          case "topPaste":
            t = zt;
            break;
          default:
            t = F;
        }
        return (e = t.getPooled(i, e, n, r)), N(e), e;
      },
    };
    (qr = function (t, e, n, r) {
      E((t = _(t, e, n, r))), T(!1);
    }),
      er.injectEventPluginOrder(
        "ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      ),
      (Jn = ar.getFiberCurrentPropsFromNode),
      (Qn = ar.getInstanceFromNode),
      (Zn = ar.getNodeFromInstance),
      er.injectEventPluginsByName({
        SimpleEventPlugin: ci,
        EnterLeaveEventPlugin: Fr,
        ChangeEventPlugin: Dr,
        SelectEventPlugin: ii,
        BeforeInputEventPlugin: Sr,
      });
    var li = [],
      fi = -1;
    new Set();
    var hi,
      pi,
      di,
      mi,
      vi = { current: Pn },
      yi = { current: !1 },
      gi = Pn,
      bi = null,
      wi = null,
      _i =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.portal")) ||
        60106,
      Ei = Array.isArray,
      Ti = "function" == typeof Symbol && Symbol.iterator;
    "function" == typeof Symbol && Symbol.for
      ? ((hi = Symbol.for("react.element")),
        (pi = Symbol.for("react.call")),
        (di = Symbol.for("react.return")),
        (mi = Symbol.for("react.fragment")))
      : ((hi = 60103), (pi = 60104), (di = 60105), (mi = 60107));
    var Si = ke(!0, !0),
      xi = ke(!1, !0),
      Oi = ke(!1, !1),
      Pi = {},
      ki = Object.freeze({ default: je }),
      Ci = (ki && je) || ki,
      Ii = Ci.default ? Ci.default : Ci,
      Mi =
        "object" == typeof performance && "function" == typeof performance.now,
      Ai = void 0;
    Ai = Mi
      ? function () {
          return performance.now();
        }
      : function () {
          return Date.now();
        };
    var Ri = void 0;
    if (bn.canUseDOM)
      if ("function" != typeof requestIdleCallback) {
        var Ni,
          ji = null,
          Di = !1,
          Li = !1,
          Ui = 0,
          Fi = 33,
          Bi = 33;
        Ni = Mi
          ? {
              timeRemaining: function () {
                return Ui - performance.now();
              },
            }
          : {
              timeRemaining: function () {
                return Ui - Date.now();
              },
            };
        var zi = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener(
          "message",
          function (t) {
            t.source === window &&
              t.data === zi &&
              ((Di = !1), (t = ji), (ji = null), null !== t && t(Ni));
          },
          !1
        );
        var Hi = function (t) {
          Li = !1;
          var e = t - Ui + Bi;
          e < Bi && Fi < Bi
            ? (8 > e && (e = 8), (Bi = e < Fi ? Fi : e))
            : (Fi = e),
            (Ui = t + Bi),
            Di || ((Di = !0), window.postMessage(zi, "*"));
        };
        Ri = function (t) {
          return (ji = t), Li || ((Li = !0), requestAnimationFrame(Hi)), 0;
        };
      } else Ri = requestIdleCallback;
    else
      Ri = function (t) {
        return (
          setTimeout(function () {
            t({
              timeRemaining: function () {
                return 1 / 0;
              },
            });
          }),
          0
        );
      };
    var qi =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Vi = {},
      Ki = {},
      Wi = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
      },
      Gi = void 0,
      Yi = (function (t) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return t(e, n);
              });
            }
          : t;
      })(function (t, e) {
        if (t.namespaceURI !== Wi.svg || "innerHTML" in t) t.innerHTML = e;
        else {
          for (
            (Gi = Gi || document.createElement("div")).innerHTML =
              "<svg>" + e + "</svg>",
              e = Gi.firstChild;
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (; e.firstChild; ) t.appendChild(e.firstChild);
        }
      }),
      $i = /["'&<>]/;
    bn.canUseDOM &&
      ("textContent" in document.documentElement ||
        (tn = function (t, e) {
          if (3 === t.nodeType) t.nodeValue = e;
          else {
            if ("boolean" == typeof e || "number" == typeof e) e = "" + e;
            else {
              e = "" + e;
              var n = $i.exec(e);
              if (n) {
                var r,
                  i = "",
                  o = 0;
                for (r = n.index; r < e.length; r++) {
                  switch (e.charCodeAt(r)) {
                    case 34:
                      n = "&quot;";
                      break;
                    case 38:
                      n = "&amp;";
                      break;
                    case 39:
                      n = "&#x27;";
                      break;
                    case 60:
                      n = "&lt;";
                      break;
                    case 62:
                      n = "&gt;";
                      break;
                    default:
                      continue;
                  }
                  o !== r && (i += e.substring(o, r)), (o = r + 1), (i += n);
                }
                e = o !== r ? i + e.substring(o, r) : i;
              }
            }
            Yi(t, e);
          }
        }));
    var Xi = tn,
      Ji = {
        animationIterationCount: !0,
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
      Qi = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ji).forEach(function (t) {
      Qi.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ji[e] = Ji[t]);
      });
    });
    var Zi = wn(
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
      ),
      to = Wi.html,
      eo = _n.thatReturns(""),
      no = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
      },
      ro = Object.freeze({
        createElement: an,
        createTextNode: sn,
        setInitialProperties: un,
        diffProperties: cn,
        updateProperties: ln,
        diffHydratedProperties: fn,
        diffHydratedText: hn,
        warnForUnmatchedText: function () {},
        warnForDeletedHydratableElement: function () {},
        warnForDeletedHydratableText: function () {},
        warnForInsertedHydratedElement: function () {},
        warnForInsertedHydratedText: function () {},
        restoreControlledState: function (t, e, n) {
          switch (e) {
            case "input":
              if ((He(t, n), (e = n.name), "radio" === n.type && null != e)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
                  ),
                    e = 0;
                  e < n.length;
                  e++
                ) {
                  var i = n[e];
                  if (i !== t && i.form === t.form) {
                    var o = O(i);
                    o || r("90"), He(i, o);
                  }
                }
              }
              break;
            case "textarea":
              Xe(t, n);
              break;
            case "select":
              null != (e = n.value) && We(t, !!n.multiple, e, !1);
          }
        },
      });
    kr.injectFiberControlledHostComponent(ro);
    var io = null,
      oo = null,
      ao = Ii({
        getRootHostContext: function (t) {
          var e = t.nodeType;
          switch (e) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : Ze(null, "");
              break;
            default:
              t = Ze(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          return t;
        },
        getChildHostContext: function (t, e) {
          return Ze(t, e);
        },
        getPublicInstance: function (t) {
          return t;
        },
        prepareForCommit: function () {
          io = Hr;
          var t = Tn();
          if (Ut(t)) {
            if ("selectionStart" in t)
              var e = { start: t.selectionStart, end: t.selectionEnd };
            else
              t: {
                var n = window.getSelection && window.getSelection();
                if (n && 0 !== n.rangeCount) {
                  e = n.anchorNode;
                  var r = n.anchorOffset,
                    i = n.focusNode;
                  n = n.focusOffset;
                  try {
                    e.nodeType, i.nodeType;
                  } catch (t) {
                    e = null;
                    break t;
                  }
                  var o = 0,
                    a = -1,
                    s = -1,
                    u = 0,
                    c = 0,
                    l = t,
                    f = null;
                  e: for (;;) {
                    for (
                      var h;
                      l !== e || (0 !== r && 3 !== l.nodeType) || (a = o + r),
                        l !== i || (0 !== n && 3 !== l.nodeType) || (s = o + n),
                        3 === l.nodeType && (o += l.nodeValue.length),
                        null !== (h = l.firstChild);

                    )
                      (f = l), (l = h);
                    for (;;) {
                      if (l === t) break e;
                      if (
                        (f === e && ++u === r && (a = o),
                        f === i && ++c === n && (s = o),
                        null !== (h = l.nextSibling))
                      )
                        break;
                      f = (l = f).parentNode;
                    }
                    l = h;
                  }
                  e = -1 === a || -1 === s ? null : { start: a, end: s };
                } else e = null;
              }
            e = e || { start: 0, end: 0 };
          } else e = null;
          (oo = { focusedElem: t, selectionRange: e }), Ct(!1);
        },
        resetAfterCommit: function () {
          var t = oo,
            e = Tn(),
            n = t.focusedElem,
            r = t.selectionRange;
          if (e !== n && xn(document.documentElement, n)) {
            if (Ut(n))
              if (
                ((e = r.start),
                void 0 === (t = r.end) && (t = e),
                "selectionStart" in n)
              )
                (n.selectionStart = e),
                  (n.selectionEnd = Math.min(t, n.value.length));
              else if (window.getSelection) {
                e = window.getSelection();
                var i = n[D()].length;
                (t = Math.min(r.start, i)),
                  (r = void 0 === r.end ? t : Math.min(r.end, i)),
                  !e.extend && t > r && ((i = r), (r = t), (t = i)),
                  (i = Lt(n, t));
                var o = Lt(n, r);
                if (
                  i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset)
                ) {
                  var a = document.createRange();
                  a.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    t > r
                      ? (e.addRange(a), e.extend(o.node, o.offset))
                      : (a.setEnd(o.node, o.offset), e.addRange(a));
                }
              }
            for (e = [], t = n; (t = t.parentNode); )
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            for (On(n), n = 0; n < e.length; n++)
              (t = e[n]),
                (t.element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
          }
          (oo = null), Ct(io), (io = null);
        },
        createInstance: function (t, e, n, r, i) {
          return (t = an(t, e, n, r)), (t[ir] = i), (t[or] = e), t;
        },
        appendInitialChild: function (t, e) {
          t.appendChild(e);
        },
        finalizeInitialChildren: function (t, e, n, r) {
          un(t, e, n, r);
          t: {
            switch (e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!n.autoFocus;
                break t;
            }
            t = !1;
          }
          return t;
        },
        prepareUpdate: function (t, e, n, r, i) {
          return cn(t, e, n, r, i);
        },
        shouldSetTextContent: function (t, e) {
          return (
            "textarea" === t ||
            "string" == typeof e.children ||
            "number" == typeof e.children ||
            ("object" == typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              "string" == typeof e.dangerouslySetInnerHTML.__html)
          );
        },
        shouldDeprioritizeSubtree: function (t, e) {
          return !!e.hidden;
        },
        createTextInstance: function (t, e, n, r) {
          return (t = sn(t, e)), (t[ir] = r), t;
        },
        now: Ai,
        mutation: {
          commitMount: function (t) {
            t.focus();
          },
          commitUpdate: function (t, e, n, r, i) {
            (t[or] = i), ln(t, e, n, r, i);
          },
          resetTextContent: function (t) {
            t.textContent = "";
          },
          commitTextUpdate: function (t, e, n) {
            t.nodeValue = n;
          },
          appendChild: function (t, e) {
            t.appendChild(e);
          },
          appendChildToContainer: function (t, e) {
            8 === t.nodeType
              ? t.parentNode.insertBefore(e, t)
              : t.appendChild(e);
          },
          insertBefore: function (t, e, n) {
            t.insertBefore(e, n);
          },
          insertInContainerBefore: function (t, e, n) {
            8 === t.nodeType
              ? t.parentNode.insertBefore(e, n)
              : t.insertBefore(e, n);
          },
          removeChild: function (t, e) {
            t.removeChild(e);
          },
          removeChildFromContainer: function (t, e) {
            8 === t.nodeType ? t.parentNode.removeChild(e) : t.removeChild(e);
          },
        },
        hydration: {
          canHydrateInstance: function (t, e) {
            return 1 !== t.nodeType ||
              e.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t;
          },
          canHydrateTextInstance: function (t, e) {
            return "" === e || 3 !== t.nodeType ? null : t;
          },
          getNextHydratableSibling: function (t) {
            for (t = t.nextSibling; t && 1 !== t.nodeType && 3 !== t.nodeType; )
              t = t.nextSibling;
            return t;
          },
          getFirstHydratableChild: function (t) {
            for (t = t.firstChild; t && 1 !== t.nodeType && 3 !== t.nodeType; )
              t = t.nextSibling;
            return t;
          },
          hydrateInstance: function (t, e, n, r, i, o) {
            return (t[ir] = o), (t[or] = n), fn(t, e, n, i, r);
          },
          hydrateTextInstance: function (t, e, n) {
            return (t[ir] = n), hn(t, e);
          },
          didNotMatchHydratedContainerTextInstance: function () {},
          didNotMatchHydratedTextInstance: function () {},
          didNotHydrateContainerInstance: function () {},
          didNotHydrateInstance: function () {},
          didNotFindHydratableContainerInstance: function () {},
          didNotFindHydratableContainerTextInstance: function () {},
          didNotFindHydratableInstance: function () {},
          didNotFindHydratableTextInstance: function () {},
        },
        scheduleDeferredCallback: Ri,
        useSyncScheduling: !0,
      });
    (Q = ao.batchedUpdates),
      (yn.prototype.render = function (t, e) {
        ao.updateContainer(t, this._reactRootContainer, null, e);
      }),
      (yn.prototype.unmount = function (t) {
        ao.updateContainer(null, this._reactRootContainer, null, t);
      });
    var so = {
      createPortal: vn,
      findDOMNode: function (t) {
        if (null == t) return null;
        if (1 === t.nodeType) return t;
        var e = t._reactInternalFiber;
        if (e) return ao.findHostInstance(e);
        "function" == typeof t.render ? r("188") : r("213", Object.keys(t));
      },
      hydrate: function (t, e, n) {
        return mn(null, t, e, !0, n);
      },
      render: function (t, e, n) {
        return mn(null, t, e, !1, n);
      },
      unstable_renderSubtreeIntoContainer: function (t, e, n, i) {
        return (
          (null == t || void 0 === t._reactInternalFiber) && r("38"),
          mn(t, e, n, !1, i)
        );
      },
      unmountComponentAtNode: function (t) {
        return (
          pn(t) || r("40"),
          !!t._reactRootContainer &&
            (ao.unbatchedUpdates(function () {
              mn(null, null, t, !1, function () {
                t._reactRootContainer = null;
              });
            }),
            !0)
        );
      },
      unstable_createPortal: vn,
      unstable_batchedUpdates: Z,
      unstable_deferredUpdates: ao.deferredUpdates,
      flushSync: ao.flushSync,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        EventPluginHub: nr,
        EventPluginRegistry: Xn,
        EventPropagators: sr,
        ReactControlledComponent: Cr,
        ReactDOMComponentTree: ar,
        ReactDOMEventListener: Vr,
      },
    };
    ao.injectIntoDevTools({
      findFiberByHostInstance: S,
      bundleType: 0,
      version: "16.1.1",
      rendererPackageName: "react-dom",
    });
    var uo = Object.freeze({ default: so }),
      co = (uo && so) || uo;
    t.exports = co.default ? co.default : co;
  },
  function (t, e, n) {
    "use strict";
    var r = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      i = {
        canUseDOM: r,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners:
          r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r,
      };
    t.exports = i;
  },
  function (t, e, n) {
    "use strict";
    var r = n(6),
      i = {
        listen: function (t, e, n) {
          return t.addEventListener
            ? (t.addEventListener(e, n, !1),
              {
                remove: function () {
                  t.removeEventListener(e, n, !1);
                },
              })
            : t.attachEvent
            ? (t.attachEvent("on" + e, n),
              {
                remove: function () {
                  t.detachEvent("on" + e, n);
                },
              })
            : void 0;
        },
        capture: function (t, e, n) {
          return t.addEventListener
            ? (t.addEventListener(e, n, !0),
              {
                remove: function () {
                  t.removeEventListener(e, n, !0);
                },
              })
            : { remove: r };
        },
        registerDefault: function () {},
      };
    t.exports = i;
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      if (
        void 0 ===
        (t = t || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch (e) {
        return t.body;
      }
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t === e
        ? 0 !== t || 0 !== e || 1 / t == 1 / e
        : t !== t && e !== e;
    }
    var i = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      if (r(t, e)) return !0;
      if (
        "object" != typeof t ||
        null === t ||
        "object" != typeof e ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        o = Object.keys(e);
      if (n.length !== o.length) return !1;
      for (var a = 0; a < n.length; a++)
        if (!i.call(e, n[a]) || !r(t[n[a]], e[n[a]])) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return (
        !(!t || !e) &&
        (t === e ||
          (!i(t) &&
            (i(e)
              ? r(t, e.parentNode)
              : "contains" in t
              ? t.contains(e)
              : !!t.compareDocumentPosition &&
                !!(16 & t.compareDocumentPosition(e)))))
      );
    }
    var i = n(52);
    t.exports = r;
  },
  function (t, e, n) {
    "use strict";
    var r = n(53);
    t.exports = function (t) {
      return r(t) && 3 == t.nodeType;
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = (t ? t.ownerDocument || t : document).defaultView || window;
      return !(
        !t ||
        !("function" == typeof e.Node
          ? t instanceof e.Node
          : "object" == typeof t &&
            "number" == typeof t.nodeType &&
            "string" == typeof t.nodeName)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      try {
        t.focus();
      } catch (t) {}
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(56),
      i = n(19),
      o = n(61);
    n.d(e, "Provider", function () {
      return r.default;
    }),
      n.d(e, "createProvider", function () {
        return r.createProvider;
      }),
      n.d(e, "connectAdvanced", function () {
        return i.default;
      }),
      n.d(e, "connect", function () {
        return o.default;
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function a() {
      var t,
        e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "store",
        n = arguments[1] || e + "Subscription",
        a = (function (t) {
          function a(n, o) {
            r(this, a);
            var s = i(this, t.call(this, n, o));
            return (s[e] = n.store), s;
          }
          return (
            o(a, t),
            (a.prototype.getChildContext = function () {
              var t;
              return (t = {}), (t[e] = this[e]), (t[n] = null), t;
            }),
            (a.prototype.render = function () {
              return s.Children.only(this.props.children);
            }),
            a
          );
        })(s.Component);
      return (
        (a.propTypes = {
          store: l.storeShape.isRequired,
          children: c.a.element.isRequired,
        }),
        (a.childContextTypes =
          ((t = {}),
          (t[e] = l.storeShape.isRequired),
          (t[n] = l.subscriptionShape),
          t)),
        a
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createProvider = a);
    var s = n(0),
      u = (n.n(s), n(2)),
      c = n.n(u),
      l = n(18);
    n(8);
    e.default = a();
  },
  function (t, e, n) {
    "use strict";
    var r = n(6),
      i = n(58),
      o = n(59);
    t.exports = function () {
      function t(t, e, n, r, a, s) {
        s !== o &&
          i(
            !1,
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
      }
      function e() {
        return t;
      }
      t.isRequired = t;
      var n = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
      };
      return (n.checkPropTypes = r), (n.PropTypes = n), n;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = function (t) {};
    t.exports = function (t, e, n, i, o, a, s, u) {
      if ((r(e), !t)) {
        var c;
        if (void 0 === e)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var l = [n, i, o, a, s, u],
            f = 0;
          (c = new Error(
            e.replace(/%s/g, function () {
              return l[f++];
            })
          )).name = "Invariant Violation";
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i() {
      var t = [],
        e = [];
      return {
        clear: function () {
          (e = o), (t = o);
        },
        notify: function () {
          for (var n = (t = e), r = 0; r < n.length; r++) n[r]();
        },
        get: function () {
          return e;
        },
        subscribe: function (n) {
          var r = !0;
          return (
            e === t && (e = t.slice()),
            e.push(n),
            function () {
              r &&
                t !== o &&
                ((r = !1),
                e === t && (e = t.slice()),
                e.splice(e.indexOf(n), 1));
            }
          );
        },
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      n.d(e, "default", function () {
        return s;
      });
    var o = null,
      a = { notify: function () {} },
      s = (function () {
        function t(e, n, i) {
          r(this, t),
            (this.store = e),
            (this.parentSub = n),
            (this.onStateChange = i),
            (this.unsubscribe = null),
            (this.listeners = a);
        }
        return (
          (t.prototype.addNestedSub = function (t) {
            return this.trySubscribe(), this.listeners.subscribe(t);
          }),
          (t.prototype.notifyNestedSubs = function () {
            this.listeners.notify();
          }),
          (t.prototype.isSubscribed = function () {
            return Boolean(this.unsubscribe);
          }),
          (t.prototype.trySubscribe = function () {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.onStateChange)
                : this.store.subscribe(this.onStateChange)),
              (this.listeners = i()));
          }),
          (t.prototype.tryUnsubscribe = function () {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = a));
          }),
          t
        );
      })();
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    function i(t, e, n) {
      for (var r = e.length - 1; r >= 0; r--) {
        var i = e[r](t);
        if (i) return i;
      }
      return function (e, r) {
        throw new Error(
          "Invalid value of type " +
            typeof t +
            " for " +
            n +
            " argument when connecting component " +
            r.wrappedComponentName +
            "."
        );
      };
    }
    function o(t, e) {
      return t === e;
    }
    function a() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.connectHOC,
        n = void 0 === e ? s.default : e,
        a = t.mapStateToPropsFactories,
        d = void 0 === a ? l.default : a,
        m = t.mapDispatchToPropsFactories,
        v = void 0 === m ? c.default : m,
        y = t.mergePropsFactories,
        g = void 0 === y ? f.default : y,
        b = t.selectorFactory,
        w = void 0 === b ? h.default : b;
      return function (t, e, a) {
        var s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          c = s.pure,
          l = void 0 === c || c,
          f = s.areStatesEqual,
          h = void 0 === f ? o : f,
          m = s.areOwnPropsEqual,
          y = void 0 === m ? u.default : m,
          b = s.areStatePropsEqual,
          _ = void 0 === b ? u.default : b,
          E = s.areMergedPropsEqual,
          T = void 0 === E ? u.default : E,
          S = r(s, [
            "pure",
            "areStatesEqual",
            "areOwnPropsEqual",
            "areStatePropsEqual",
            "areMergedPropsEqual",
          ]),
          x = i(t, d, "mapStateToProps"),
          O = i(e, v, "mapDispatchToProps"),
          P = i(a, g, "mergeProps");
        return n(
          w,
          p(
            {
              methodName: "connect",
              getDisplayName: function (t) {
                return "Connect(" + t + ")";
              },
              shouldHandleStateChanges: Boolean(t),
              initMapStateToProps: x,
              initMapDispatchToProps: O,
              initMergeProps: P,
              pure: l,
              areStatesEqual: h,
              areOwnPropsEqual: y,
              areStatePropsEqual: _,
              areMergedPropsEqual: T,
            },
            S
          )
        );
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createConnect = a);
    var s = n(19),
      u = n(62),
      c = n(63),
      l = n(79),
      f = n(80),
      h = n(81),
      p =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    e.default = a();
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t === e
        ? 0 !== t || 0 !== e || 1 / t == 1 / e
        : t !== t && e !== e;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e) {
        if (r(t, e)) return !0;
        if (
          "object" != typeof t ||
          null === t ||
          "object" != typeof e ||
          null === e
        )
          return !1;
        var n = Object.keys(t),
          o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
          if (!i.call(e, n[a]) || !r(t[n[a]], e[n[a]])) return !1;
        return !0;
      });
    var i = Object.prototype.hasOwnProperty;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return "function" == typeof t
        ? Object(s.wrapMapToPropsFunc)(t, "mapDispatchToProps")
        : void 0;
    }
    function i(t) {
      return t
        ? void 0
        : Object(s.wrapMapToPropsConstant)(function (t) {
            return { dispatch: t };
          });
    }
    function o(t) {
      return t && "object" == typeof t
        ? Object(s.wrapMapToPropsConstant)(function (e) {
            return Object(a.bindActionCreators)(t, e);
          })
        : void 0;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.whenMapDispatchToPropsIsFunction = r),
      (e.whenMapDispatchToPropsIsMissing = i),
      (e.whenMapDispatchToPropsIsObject = o);
    var a = n(21),
      s = n(27);
    e.default = [r, i, o];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(23),
      i = n(67),
      o = n(68),
      a = "[object Null]",
      s = "[object Undefined]",
      u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      return null == t
        ? void 0 === t
          ? s
          : a
        : ((t = Object(t)),
          u && u in t ? Object(i.default)(t) : Object(o.default)(t));
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(66),
      i = "object" == typeof self && self && self.Object === Object && self,
      o = r.default || i || Function("return this")();
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.default = n;
      }.call(e, n(24));
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(23),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      s = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      var e = o.call(t, s),
        n = t[s];
      try {
        t[s] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[s] = n) : delete t[s]), i;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = Object.prototype.toString;
    e.default = function (t) {
      return r.call(t);
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(70),
      i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        return null != t && "object" == typeof t;
      });
  },
  function (t, e, n) {
    t.exports = n(73);
  },
  function (t, e, n) {
    "use strict";
    (function (t, r) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i,
        o = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(75));
      i =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== t
          ? t
          : r;
      var a = (0, o.default)(i);
      e.default = a;
    }).call(e, n(24), n(74)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e,
          n = t.Symbol;
        return (
          "function" == typeof n
            ? n.observable
              ? (e = n.observable)
              : ((e = n("observable")), (n.observable = e))
            : (e = "@@observable"),
          e
        );
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = e && e.type;
      return (
        "Given action " +
        ((n && '"' + n.toString() + '"') || "an action") +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function i(t) {
      Object.keys(t).forEach(function (e) {
        var n = t[e];
        if (void 0 === n(void 0, { type: o.ActionTypes.INIT }))
          throw new Error(
            'Reducer "' +
              e +
              "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
          );
        if (
          void 0 ===
          n(void 0, {
            type:
              "@@redux/PROBE_UNKNOWN_ACTION_" +
              Math.random().toString(36).substring(7).split("").join("."),
          })
        )
          throw new Error(
            'Reducer "' +
              e +
              "\" returned undefined when probed with a random type. Don't try to handle " +
              o.ActionTypes.INIT +
              ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
          );
      });
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
          var a = e[o];
          "function" == typeof t[a] && (n[a] = t[a]);
        }
        var s = Object.keys(n),
          u = void 0;
        try {
          i(n);
        } catch (t) {
          u = t;
        }
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = arguments[1];
          if (u) throw u;
          for (var i = !1, o = {}, a = 0; a < s.length; a++) {
            var c = s[a],
              l = n[c],
              f = t[c],
              h = l(f, e);
            if (void 0 === h) {
              var p = r(c, e);
              throw new Error(p);
            }
            (o[c] = h), (i = i || h !== f);
          }
          return i ? o : t;
        };
      });
    var o = n(22);
    n(9), n(25);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t)
          throw new Error(
            "bindActionCreators expected an object or a function, instead received " +
              (null === t ? "null" : typeof t) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
          );
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
          var a = n[o],
            s = t[a];
          "function" == typeof s && (i[a] = r(s, e));
        }
        return i;
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          return function (n, o, a) {
            var s = t(n, o, a),
              u = s.dispatch,
              c = [],
              l = {
                getState: s.getState,
                dispatch: function (t) {
                  return u(t);
                },
              };
            return (
              (c = e.map(function (t) {
                return t(l);
              })),
              (u = r.default.apply(void 0, c)(s.dispatch)),
              i({}, s, { dispatch: u })
            );
          };
        };
      });
    var r = n(26),
      i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return "function" == typeof t
        ? Object(o.wrapMapToPropsFunc)(t, "mapStateToProps")
        : void 0;
    }
    function i(t) {
      return t
        ? void 0
        : Object(o.wrapMapToPropsConstant)(function () {
            return {};
          });
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.whenMapStateToPropsIsFunction = r),
      (e.whenMapStateToPropsIsMissing = i);
    var o = n(27);
    e.default = [r, i];
  },
  function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      return s({}, n, t, e);
    }
    function i(t) {
      return function (e, n) {
        n.displayName;
        var r = n.pure,
          i = n.areMergedPropsEqual,
          o = !1,
          a = void 0;
        return function (e, n, s) {
          var u = t(e, n, s);
          return o ? (r && i(u, a)) || (a = u) : ((o = !0), (a = u)), a;
        };
      };
    }
    function o(t) {
      return "function" == typeof t ? i(t) : void 0;
    }
    function a(t) {
      return t
        ? void 0
        : function () {
            return r;
          };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.defaultMergeProps = r),
      (e.wrapMergePropsFunc = i),
      (e.whenMergePropsIsFunction = o),
      (e.whenMergePropsIsOmitted = a);
    n(28);
    var s =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      };
    e.default = [o, a];
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    function i(t, e, n, r) {
      return function (i, o) {
        return n(t(i, o), e(r, o), o);
      };
    }
    function o(t, e, n, r, i) {
      function o(i, o) {
        return (
          (d = i),
          (m = o),
          (v = t(d, m)),
          (y = e(r, m)),
          (g = n(v, y, m)),
          (p = !0),
          g
        );
      }
      function a() {
        return (
          (v = t(d, m)), e.dependsOnOwnProps && (y = e(r, m)), (g = n(v, y, m))
        );
      }
      function s() {
        return (
          t.dependsOnOwnProps && (v = t(d, m)),
          e.dependsOnOwnProps && (y = e(r, m)),
          (g = n(v, y, m))
        );
      }
      function u() {
        var e = t(d, m),
          r = !h(e, v);
        return (v = e), r && (g = n(v, y, m)), g;
      }
      function c(t, e) {
        var n = !f(e, m),
          r = !l(t, d);
        return (d = t), (m = e), n && r ? a() : n ? s() : r ? u() : g;
      }
      var l = i.areStatesEqual,
        f = i.areOwnPropsEqual,
        h = i.areStatePropsEqual,
        p = !1,
        d = void 0,
        m = void 0,
        v = void 0,
        y = void 0,
        g = void 0;
      return function (t, e) {
        return p ? c(t, e) : o(t, e);
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.impureFinalPropsSelectorFactory = i),
      (e.pureFinalPropsSelectorFactory = o),
      (e.default = function (t, e) {
        var n = e.initMapStateToProps,
          a = e.initMapDispatchToProps,
          s = e.initMergeProps,
          u = r(e, [
            "initMapStateToProps",
            "initMapDispatchToProps",
            "initMergeProps",
          ]),
          c = n(t, u),
          l = a(t, u),
          f = s(t, u);
        return (u.pure ? o : i)(c, l, f, t, u);
      });
    n(82);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      if (!t) throw new Error("Unexpected value for " + e + " in " + n + ".");
      ("mapStateToProps" !== e && "mapDispatchToProps" !== e) ||
        t.hasOwnProperty("dependsOnOwnProps") ||
        Object(i.default)(
          "The selector for " +
            e +
            " of " +
            n +
            " did not specify a value for dependsOnOwnProps."
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e, n, i) {
        r(t, "mapStateToProps", i),
          r(e, "mapDispatchToProps", i),
          r(n, "mergeProps", i);
      });
    var i = n(8);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(84);
    n.d(e, "BrowserRouter", function () {
      return r.default;
    });
    var i = n(86);
    n.d(e, "HashRouter", function () {
      return i.default;
    });
    var o = n(32);
    n.d(e, "Link", function () {
      return o.default;
    });
    var a = n(88);
    n.d(e, "MemoryRouter", function () {
      return a.default;
    });
    var s = n(91);
    n.d(e, "NavLink", function () {
      return s.default;
    });
    var u = n(94);
    n.d(e, "Prompt", function () {
      return u.default;
    });
    var c = n(96);
    n.d(e, "Redirect", function () {
      return c.default;
    });
    var l = n(33);
    n.d(e, "Route", function () {
      return l.default;
    });
    var f = n(12);
    n.d(e, "Router", function () {
      return f.default;
    });
    var h = n(102);
    n.d(e, "StaticRouter", function () {
      return h.default;
    });
    var p = n(104);
    n.d(e, "Switch", function () {
      return p.default;
    });
    var d = n(106);
    n.d(e, "matchPath", function () {
      return d.default;
    });
    var m = n(107);
    n.d(e, "withRouter", function () {
      return m.default;
    });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n.n(a),
      u = n(0),
      c = n.n(u),
      l = n(2),
      f = n.n(l),
      h = n(85),
      p = n.n(h),
      d = n(12),
      m = (function (t) {
        function e() {
          var n, o, a;
          r(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = o = i(this, t.call.apply(t, [this].concat(u)))),
            (o.history = p()(o.props)),
            (a = n),
            i(o, a)
          );
        }
        return (
          o(e, t),
          (e.prototype.componentWillMount = function () {
            s()(
              !this.props.history,
              "<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`."
            );
          }),
          (e.prototype.render = function () {
            return c.a.createElement(d.default, {
              history: this.history,
              children: this.props.children,
            });
          }),
          e
        );
      })(c.a.Component);
    (m.propTypes = {
      basename: f.a.string,
      forceRefresh: f.a.bool,
      getUserConfirmation: f.a.func,
      keyLength: f.a.number,
      children: f.a.node,
    }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.__esModule = !0;
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      a = r(n(1)),
      s = r(n(3)),
      u = n(10),
      c = n(4),
      l = r(n(11)),
      f = n(31),
      h = function () {
        try {
          return window.history.state || {};
        } catch (t) {
          return {};
        }
      };
    e.default = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, s.default)(f.canUseDOM, "Browser history needs a DOM");
      var e = window.history,
        n = (0, f.supportsHistory)(),
        r = !(0, f.supportsPopStateOnHashChange)(),
        p = t.forceRefresh,
        d = void 0 !== p && p,
        m = t.getUserConfirmation,
        v = void 0 === m ? f.getConfirmation : m,
        y = t.keyLength,
        g = void 0 === y ? 6 : y,
        b = t.basename
          ? (0, c.stripTrailingSlash)((0, c.addLeadingSlash)(t.basename))
          : "",
        w = function (t) {
          var e = t || {},
            n = e.key,
            r = e.state,
            i = window.location,
            o = i.pathname + i.search + i.hash;
          return (
            (0, a.default)(
              !b || (0, c.hasBasename)(o, b),
              'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' +
                o +
                '" to begin with "' +
                b +
                '".'
            ),
            b && (o = (0, c.stripBasename)(o, b)),
            (0, u.createLocation)(o, r, n)
          );
        },
        _ = function () {
          return Math.random().toString(36).substr(2, g);
        },
        E = (0, l.default)(),
        T = function (t) {
          o(D, t),
            (D.length = e.length),
            E.notifyListeners(D.location, D.action);
        },
        S = function (t) {
          (0, f.isExtraneousPopstateEvent)(t) || P(w(t.state));
        },
        x = function () {
          P(w(h()));
        },
        O = !1,
        P = function (t) {
          O
            ? ((O = !1), T())
            : E.confirmTransitionTo(t, "POP", v, function (e) {
                e ? T({ action: "POP", location: t }) : k(t);
              });
        },
        k = function (t) {
          var e = D.location,
            n = I.indexOf(e.key);
          -1 === n && (n = 0);
          var r = I.indexOf(t.key);
          -1 === r && (r = 0);
          var i = n - r;
          i && ((O = !0), A(i));
        },
        C = w(h()),
        I = [C.key],
        M = function (t) {
          return b + (0, c.createPath)(t);
        },
        A = function (t) {
          e.go(t);
        },
        R = 0,
        N = function (t) {
          1 === (R += t)
            ? ((0, f.addEventListener)(window, "popstate", S),
              r && (0, f.addEventListener)(window, "hashchange", x))
            : 0 === R &&
              ((0, f.removeEventListener)(window, "popstate", S),
              r && (0, f.removeEventListener)(window, "hashchange", x));
        },
        j = !1,
        D = {
          length: e.length,
          action: "POP",
          location: C,
          createHref: M,
          push: function (t, r) {
            (0, a.default)(
              !(
                "object" === (void 0 === t ? "undefined" : i(t)) &&
                void 0 !== t.state &&
                void 0 !== r
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var o = (0, u.createLocation)(t, r, _(), D.location);
            E.confirmTransitionTo(o, "PUSH", v, function (t) {
              if (t) {
                var r = M(o),
                  i = o.key,
                  s = o.state;
                if (n)
                  if ((e.pushState({ key: i, state: s }, null, r), d))
                    window.location.href = r;
                  else {
                    var u = I.indexOf(D.location.key),
                      c = I.slice(0, -1 === u ? 0 : u + 1);
                    c.push(o.key), (I = c), T({ action: "PUSH", location: o });
                  }
                else
                  (0, a.default)(
                    void 0 === s,
                    "Browser history cannot push state in browsers that do not support HTML5 history"
                  ),
                    (window.location.href = r);
              }
            });
          },
          replace: function (t, r) {
            (0, a.default)(
              !(
                "object" === (void 0 === t ? "undefined" : i(t)) &&
                void 0 !== t.state &&
                void 0 !== r
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var o = (0, u.createLocation)(t, r, _(), D.location);
            E.confirmTransitionTo(o, "REPLACE", v, function (t) {
              if (t) {
                var r = M(o),
                  i = o.key,
                  s = o.state;
                if (n)
                  if ((e.replaceState({ key: i, state: s }, null, r), d))
                    window.location.replace(r);
                  else {
                    var u = I.indexOf(D.location.key);
                    -1 !== u && (I[u] = o.key),
                      T({ action: "REPLACE", location: o });
                  }
                else
                  (0, a.default)(
                    void 0 === s,
                    "Browser history cannot replace state in browsers that do not support HTML5 history"
                  ),
                    window.location.replace(r);
              }
            });
          },
          go: A,
          goBack: function () {
            return A(-1);
          },
          goForward: function () {
            return A(1);
          },
          block: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = E.setPrompt(t);
            return (
              j || (N(1), (j = !0)),
              function () {
                return j && ((j = !1), N(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = E.appendListener(t);
            return (
              N(1),
              function () {
                N(-1), e();
              }
            );
          },
        };
      return D;
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n.n(a),
      u = n(0),
      c = n.n(u),
      l = n(2),
      f = n.n(l),
      h = n(87),
      p = n.n(h),
      d = n(12),
      m = (function (t) {
        function e() {
          var n, o, a;
          r(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = o = i(this, t.call.apply(t, [this].concat(u)))),
            (o.history = p()(o.props)),
            (a = n),
            i(o, a)
          );
        }
        return (
          o(e, t),
          (e.prototype.componentWillMount = function () {
            s()(
              !this.props.history,
              "<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`."
            );
          }),
          (e.prototype.render = function () {
            return c.a.createElement(d.default, {
              history: this.history,
              children: this.props.children,
            });
          }),
          e
        );
      })(c.a.Component);
    (m.propTypes = {
      basename: f.a.string,
      getUserConfirmation: f.a.func,
      hashType: f.a.oneOf(["hashbang", "noslash", "slash"]),
      children: f.a.node,
    }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.__esModule = !0;
    var i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      o = r(n(1)),
      a = r(n(3)),
      s = n(10),
      u = n(4),
      c = r(n(11)),
      l = n(31),
      f = {
        hashbang: {
          encodePath: function (t) {
            return "!" === t.charAt(0) ? t : "!/" + (0, u.stripLeadingSlash)(t);
          },
          decodePath: function (t) {
            return "!" === t.charAt(0) ? t.substr(1) : t;
          },
        },
        noslash: {
          encodePath: u.stripLeadingSlash,
          decodePath: u.addLeadingSlash,
        },
        slash: { encodePath: u.addLeadingSlash, decodePath: u.addLeadingSlash },
      },
      h = function () {
        var t = window.location.href,
          e = t.indexOf("#");
        return -1 === e ? "" : t.substring(e + 1);
      },
      p = function (t) {
        return (window.location.hash = t);
      },
      d = function (t) {
        var e = window.location.href.indexOf("#");
        window.location.replace(
          window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t
        );
      };
    e.default = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, a.default)(l.canUseDOM, "Hash history needs a DOM");
      var e = window.history,
        n = (0, l.supportsGoWithoutReloadUsingHash)(),
        r = t.getUserConfirmation,
        m = void 0 === r ? l.getConfirmation : r,
        v = t.hashType,
        y = void 0 === v ? "slash" : v,
        g = t.basename
          ? (0, u.stripTrailingSlash)((0, u.addLeadingSlash)(t.basename))
          : "",
        b = f[y],
        w = b.encodePath,
        _ = b.decodePath,
        E = function () {
          var t = _(h());
          return (
            (0, o.default)(
              !g || (0, u.hasBasename)(t, g),
              'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' +
                t +
                '" to begin with "' +
                g +
                '".'
            ),
            g && (t = (0, u.stripBasename)(t, g)),
            (0, s.createLocation)(t)
          );
        },
        T = (0, c.default)(),
        S = function (t) {
          i(U, t),
            (U.length = e.length),
            T.notifyListeners(U.location, U.action);
        },
        x = !1,
        O = null,
        P = function () {
          var t = h(),
            e = w(t);
          if (t !== e) d(e);
          else {
            var n = E(),
              r = U.location;
            if (!x && (0, s.locationsAreEqual)(r, n)) return;
            if (O === (0, u.createPath)(n)) return;
            (O = null), k(n);
          }
        },
        k = function (t) {
          x
            ? ((x = !1), S())
            : T.confirmTransitionTo(t, "POP", m, function (e) {
                e ? S({ action: "POP", location: t }) : C(t);
              });
        },
        C = function (t) {
          var e = U.location,
            n = R.lastIndexOf((0, u.createPath)(e));
          -1 === n && (n = 0);
          var r = R.lastIndexOf((0, u.createPath)(t));
          -1 === r && (r = 0);
          var i = n - r;
          i && ((x = !0), N(i));
        },
        I = h(),
        M = w(I);
      I !== M && d(M);
      var A = E(),
        R = [(0, u.createPath)(A)],
        N = function (t) {
          (0, o.default)(
            n,
            "Hash history go(n) causes a full page reload in this browser"
          ),
            e.go(t);
        },
        j = 0,
        D = function (t) {
          1 === (j += t)
            ? (0, l.addEventListener)(window, "hashchange", P)
            : 0 === j && (0, l.removeEventListener)(window, "hashchange", P);
        },
        L = !1,
        U = {
          length: e.length,
          action: "POP",
          location: A,
          createHref: function (t) {
            return "#" + w(g + (0, u.createPath)(t));
          },
          push: function (t, e) {
            (0, o.default)(
              void 0 === e,
              "Hash history cannot push state; it is ignored"
            );
            var n = (0, s.createLocation)(t, void 0, void 0, U.location);
            T.confirmTransitionTo(n, "PUSH", m, function (t) {
              if (t) {
                var e = (0, u.createPath)(n),
                  r = w(g + e);
                if (h() !== r) {
                  (O = e), p(r);
                  var i = R.lastIndexOf((0, u.createPath)(U.location)),
                    a = R.slice(0, -1 === i ? 0 : i + 1);
                  a.push(e), (R = a), S({ action: "PUSH", location: n });
                } else
                  (0, o.default)(
                    !1,
                    "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"
                  ),
                    S();
              }
            });
          },
          replace: function (t, e) {
            (0, o.default)(
              void 0 === e,
              "Hash history cannot replace state; it is ignored"
            );
            var n = (0, s.createLocation)(t, void 0, void 0, U.location);
            T.confirmTransitionTo(n, "REPLACE", m, function (t) {
              if (t) {
                var e = (0, u.createPath)(n),
                  r = w(g + e);
                h() !== r && ((O = e), d(r));
                var i = R.indexOf((0, u.createPath)(U.location));
                -1 !== i && (R[i] = e), S({ action: "REPLACE", location: n });
              }
            });
          },
          go: N,
          goBack: function () {
            return N(-1);
          },
          goForward: function () {
            return N(1);
          },
          block: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = T.setPrompt(t);
            return (
              L || (D(1), (L = !0)),
              function () {
                return L && ((L = !1), D(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = T.appendListener(t);
            return (
              D(1),
              function () {
                D(-1), e();
              }
            );
          },
        };
      return U;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(89);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n.n(a),
      u = n(0),
      c = n.n(u),
      l = n(2),
      f = n.n(l),
      h = n(90),
      p = n.n(h),
      d = n(13),
      m = (function (t) {
        function e() {
          var n, o, a;
          r(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = o = i(this, t.call.apply(t, [this].concat(u)))),
            (o.history = p()(o.props)),
            (a = n),
            i(o, a)
          );
        }
        return (
          o(e, t),
          (e.prototype.componentWillMount = function () {
            s()(
              !this.props.history,
              "<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`."
            );
          }),
          (e.prototype.render = function () {
            return c.a.createElement(d.default, {
              history: this.history,
              children: this.props.children,
            });
          }),
          e
        );
      })(c.a.Component);
    (m.propTypes = {
      initialEntries: f.a.array,
      initialIndex: f.a.number,
      getUserConfirmation: f.a.func,
      keyLength: f.a.number,
      children: f.a.node,
    }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.__esModule = !0;
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      o =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      a = r(n(1)),
      s = n(4),
      u = n(10),
      c = r(n(11)),
      l = function (t, e, n) {
        return Math.min(Math.max(t, e), n);
      };
    e.default = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.getUserConfirmation,
        n = t.initialEntries,
        r = void 0 === n ? ["/"] : n,
        f = t.initialIndex,
        h = void 0 === f ? 0 : f,
        p = t.keyLength,
        d = void 0 === p ? 6 : p,
        m = (0, c.default)(),
        v = function (t) {
          o(E, t),
            (E.length = E.entries.length),
            m.notifyListeners(E.location, E.action);
        },
        y = function () {
          return Math.random().toString(36).substr(2, d);
        },
        g = l(h, 0, r.length - 1),
        b = r.map(function (t) {
          return "string" == typeof t
            ? (0, u.createLocation)(t, void 0, y())
            : (0, u.createLocation)(t, void 0, t.key || y());
        }),
        w = s.createPath,
        _ = function (t) {
          var n = l(E.index + t, 0, E.entries.length - 1),
            r = E.entries[n];
          m.confirmTransitionTo(r, "POP", e, function (t) {
            t ? v({ action: "POP", location: r, index: n }) : v();
          });
        },
        E = {
          length: b.length,
          action: "POP",
          location: b[g],
          index: g,
          entries: b,
          createHref: w,
          push: function (t, n) {
            (0, a.default)(
              !(
                "object" === (void 0 === t ? "undefined" : i(t)) &&
                void 0 !== t.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = (0, u.createLocation)(t, n, y(), E.location);
            m.confirmTransitionTo(r, "PUSH", e, function (t) {
              if (t) {
                var e = E.index + 1,
                  n = E.entries.slice(0);
                n.length > e ? n.splice(e, n.length - e, r) : n.push(r),
                  v({ action: "PUSH", location: r, index: e, entries: n });
              }
            });
          },
          replace: function (t, n) {
            (0, a.default)(
              !(
                "object" === (void 0 === t ? "undefined" : i(t)) &&
                void 0 !== t.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = (0, u.createLocation)(t, n, y(), E.location);
            m.confirmTransitionTo(r, "REPLACE", e, function (t) {
              t &&
                ((E.entries[E.index] = r),
                v({ action: "REPLACE", location: r }));
            });
          },
          go: _,
          goBack: function () {
            return _(-1);
          },
          goForward: function () {
            return _(1);
          },
          canGo: function (t) {
            var e = E.index + t;
            return e >= 0 && e < E.entries.length;
          },
          block: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return m.setPrompt(t);
          },
          listen: function (t) {
            return m.appendListener(t);
          },
        };
      return E;
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(0),
      o = n.n(i),
      a = n(2),
      s = n.n(a),
      u = n(33),
      c = n(32),
      l =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      h = function (t) {
        var e = t.to,
          n = t.exact,
          i = t.strict,
          a = t.location,
          s = t.activeClassName,
          h = t.className,
          p = t.activeStyle,
          d = t.style,
          m = t.isActive,
          v = t.ariaCurrent,
          y = r(t, [
            "to",
            "exact",
            "strict",
            "location",
            "activeClassName",
            "className",
            "activeStyle",
            "style",
            "isActive",
            "ariaCurrent",
          ]);
        return o.a.createElement(u.default, {
          path:
            "object" === (void 0 === e ? "undefined" : f(e)) ? e.pathname : e,
          exact: n,
          strict: i,
          location: a,
          children: function (t) {
            var n = t.location,
              r = t.match,
              i = !!(m ? m(r, n) : r);
            return o.a.createElement(
              c.default,
              l(
                {
                  to: e,
                  className: i
                    ? [h, s]
                        .filter(function (t) {
                          return t;
                        })
                        .join(" ")
                    : h,
                  style: i ? l({}, d, p) : d,
                  "aria-current": i && v,
                },
                y
              )
            );
          },
        });
      };
    (h.propTypes = {
      to: c.default.propTypes.to,
      exact: s.a.bool,
      strict: s.a.bool,
      location: s.a.object,
      activeClassName: s.a.string,
      className: s.a.string,
      activeStyle: s.a.object,
      style: s.a.object,
      isActive: s.a.func,
      ariaCurrent: s.a.oneOf(["page", "step", "location", "true"]),
    }),
      (h.defaultProps = { activeClassName: "active", ariaCurrent: "true" }),
      (e.default = h);
  },
  function (t, e, n) {
    function r(t, e) {
      for (
        var n, r = [], i = 0, o = 0, a = "", c = (e && e.delimiter) || "/";
        null != (n = y.exec(t));

      ) {
        var l = n[0],
          f = n[1],
          h = n.index;
        if (((a += t.slice(o, h)), (o = h + l.length), f)) a += f[1];
        else {
          var p = t[o],
            d = n[2],
            m = n[3],
            v = n[4],
            g = n[5],
            b = n[6],
            w = n[7];
          a && (r.push(a), (a = ""));
          var _ = null != d && null != p && p !== d,
            E = "+" === b || "*" === b,
            T = "?" === b || "*" === b,
            S = n[2] || c,
            x = v || g;
          r.push({
            name: m || i++,
            prefix: d || "",
            delimiter: S,
            optional: T,
            repeat: E,
            partial: _,
            asterisk: !!w,
            pattern: x ? u(x) : w ? ".*" : "[^" + s(S) + "]+?",
          });
        }
      }
      return o < t.length && (a += t.substr(o)), a && r.push(a), r;
    }
    function i(t) {
      return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function o(t) {
      return encodeURI(t).replace(/[?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function a(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++)
        "object" == typeof t[n] &&
          (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
      return function (n, r) {
        for (
          var a = "",
            s = n || {},
            u = (r || {}).pretty ? i : encodeURIComponent,
            c = 0;
          c < t.length;
          c++
        ) {
          var l = t[c];
          if ("string" != typeof l) {
            var f,
              h = s[l.name];
            if (null == h) {
              if (l.optional) {
                l.partial && (a += l.prefix);
                continue;
              }
              throw new TypeError('Expected "' + l.name + '" to be defined');
            }
            if (v(h)) {
              if (!l.repeat)
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(h) +
                    "`"
                );
              if (0 === h.length) {
                if (l.optional) continue;
                throw new TypeError(
                  'Expected "' + l.name + '" to not be empty'
                );
              }
              for (var p = 0; p < h.length; p++) {
                if (((f = u(h[p])), !e[c].test(f)))
                  throw new TypeError(
                    'Expected all "' +
                      l.name +
                      '" to match "' +
                      l.pattern +
                      '", but received `' +
                      JSON.stringify(f) +
                      "`"
                  );
                a += (0 === p ? l.prefix : l.delimiter) + f;
              }
            } else {
              if (((f = l.asterisk ? o(h) : u(h)), !e[c].test(f)))
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to match "' +
                    l.pattern +
                    '", but received "' +
                    f +
                    '"'
                );
              a += l.prefix + f;
            }
          } else a += l;
        }
        return a;
      };
    }
    function s(t) {
      return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function u(t) {
      return t.replace(/([=!:$\/()])/g, "\\$1");
    }
    function c(t, e) {
      return (t.keys = e), t;
    }
    function l(t) {
      return t.sensitive ? "" : "i";
    }
    function f(t, e) {
      var n = t.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++)
          e.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return c(t, e);
    }
    function h(t, e, n) {
      for (var r = [], i = 0; i < t.length; i++) r.push(m(t[i], e, n).source);
      return c(new RegExp("(?:" + r.join("|") + ")", l(n)), e);
    }
    function p(t, e, n) {
      return d(r(t, n), e, n);
    }
    function d(t, e, n) {
      v(e) || ((n = e || n), (e = []));
      for (
        var r = (n = n || {}).strict, i = !1 !== n.end, o = "", a = 0;
        a < t.length;
        a++
      ) {
        var u = t[a];
        if ("string" == typeof u) o += s(u);
        else {
          var f = s(u.prefix),
            h = "(?:" + u.pattern + ")";
          e.push(u),
            u.repeat && (h += "(?:" + f + h + ")*"),
            (o += h =
              u.optional
                ? u.partial
                  ? f + "(" + h + ")?"
                  : "(?:" + f + "(" + h + "))?"
                : f + "(" + h + ")");
        }
      }
      var p = s(n.delimiter || "/"),
        d = o.slice(-p.length) === p;
      return (
        r || (o = (d ? o.slice(0, -p.length) : o) + "(?:" + p + "(?=$))?"),
        (o += i ? "$" : r && d ? "" : "(?=" + p + "|$)"),
        c(new RegExp("^" + o, l(n)), e)
      );
    }
    function m(t, e, n) {
      return (
        v(e) || ((n = e || n), (e = [])),
        (n = n || {}),
        t instanceof RegExp ? f(t, e) : v(t) ? h(t, e, n) : p(t, e, n)
      );
    }
    var v = n(93);
    (t.exports = m),
      (t.exports.parse = r),
      (t.exports.compile = function (t, e) {
        return a(r(t, e));
      }),
      (t.exports.tokensToFunction = a),
      (t.exports.tokensToRegExp = d);
    var y = new RegExp(
      [
        "(\\\\.)",
        "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
      ].join("|"),
      "g"
    );
  },
  function (t, e) {
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == Object.prototype.toString.call(t);
      };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(95);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(0),
      s = n.n(a),
      u = n(2),
      c = n.n(u),
      l = n(3),
      f = n.n(l),
      h = (function (t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments));
        }
        return (
          o(e, t),
          (e.prototype.enable = function (t) {
            this.unblock && this.unblock(),
              (this.unblock = this.context.router.history.block(t));
          }),
          (e.prototype.disable = function () {
            this.unblock && (this.unblock(), (this.unblock = null));
          }),
          (e.prototype.componentWillMount = function () {
            f()(
              this.context.router,
              "You should not use <Prompt> outside a <Router>"
            ),
              this.props.when && this.enable(this.props.message);
          }),
          (e.prototype.componentWillReceiveProps = function (t) {
            t.when
              ? (this.props.when && this.props.message === t.message) ||
                this.enable(t.message)
              : this.disable();
          }),
          (e.prototype.componentWillUnmount = function () {
            this.disable();
          }),
          (e.prototype.render = function () {
            return null;
          }),
          e
        );
      })(s.a.Component);
    (h.propTypes = {
      when: c.a.bool,
      message: c.a.oneOfType([c.a.func, c.a.string]).isRequired,
    }),
      (h.defaultProps = { when: !0 }),
      (h.contextTypes = {
        router: c.a.shape({
          history: c.a.shape({ block: c.a.func.isRequired }).isRequired,
        }).isRequired,
      }),
      (e.default = h);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(97);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(0),
      s = n.n(a),
      u = n(2),
      c = n.n(u),
      l = n(1),
      f = n.n(l),
      h = n(3),
      p = n.n(h),
      d = n(98),
      m = (function (t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments));
        }
        return (
          o(e, t),
          (e.prototype.isStatic = function () {
            return this.context.router && this.context.router.staticContext;
          }),
          (e.prototype.componentWillMount = function () {
            p()(
              this.context.router,
              "You should not use <Redirect> outside a <Router>"
            ),
              this.isStatic() && this.perform();
          }),
          (e.prototype.componentDidMount = function () {
            this.isStatic() || this.perform();
          }),
          (e.prototype.componentDidUpdate = function (t) {
            var e = Object(d.createLocation)(t.to),
              n = Object(d.createLocation)(this.props.to);
            Object(d.locationsAreEqual)(e, n)
              ? f()(
                  !1,
                  "You tried to redirect to the same route you're currently on: \"" +
                    n.pathname +
                    n.search +
                    '"'
                )
              : this.perform();
          }),
          (e.prototype.perform = function () {
            var t = this.context.router.history,
              e = this.props,
              n = e.push,
              r = e.to;
            n ? t.push(r) : t.replace(r);
          }),
          (e.prototype.render = function () {
            return null;
          }),
          e
        );
      })(s.a.Component);
    (m.propTypes = {
      push: c.a.bool,
      from: c.a.string,
      to: c.a.oneOfType([c.a.string, c.a.object]).isRequired,
    }),
      (m.defaultProps = { push: !1 }),
      (m.contextTypes = {
        router: c.a.shape({
          history: c.a.shape({
            push: c.a.func.isRequired,
            replace: c.a.func.isRequired,
          }).isRequired,
          staticContext: c.a.object,
        }).isRequired,
      }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(99);
    n.d(e, "createBrowserHistory", function () {
      return r.default;
    });
    var i = n(100);
    n.d(e, "createHashHistory", function () {
      return i.default;
    });
    var o = n(101);
    n.d(e, "createMemoryHistory", function () {
      return o.default;
    });
    var a = n(7);
    n.d(e, "createLocation", function () {
      return a.createLocation;
    }),
      n.d(e, "locationsAreEqual", function () {
        return a.locationsAreEqual;
      });
    var s = n(5);
    n.d(e, "parsePath", function () {
      return s.parsePath;
    }),
      n.d(e, "createPath", function () {
        return s.createPath;
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      i = n.n(r),
      o = n(3),
      a = n.n(o),
      s = n(7),
      u = n(5),
      c = n(15),
      l = n(35),
      f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      h =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      p = function () {
        try {
          return window.history.state || {};
        } catch (t) {
          return {};
        }
      };
    e.default = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      a()(l.canUseDOM, "Browser history needs a DOM");
      var e = window.history,
        n = Object(l.supportsHistory)(),
        r = !Object(l.supportsPopStateOnHashChange)(),
        o = t.forceRefresh,
        d = void 0 !== o && o,
        m = t.getUserConfirmation,
        v = void 0 === m ? l.getConfirmation : m,
        y = t.keyLength,
        g = void 0 === y ? 6 : y,
        b = t.basename
          ? Object(u.stripTrailingSlash)(Object(u.addLeadingSlash)(t.basename))
          : "",
        w = function (t) {
          var e = t || {},
            n = e.key,
            r = e.state,
            o = window.location,
            a = o.pathname + o.search + o.hash;
          return (
            i()(
              !b || Object(u.hasBasename)(a, b),
              'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' +
                a +
                '" to begin with "' +
                b +
                '".'
            ),
            b && (a = Object(u.stripBasename)(a, b)),
            Object(s.createLocation)(a, r, n)
          );
        },
        _ = function () {
          return Math.random().toString(36).substr(2, g);
        },
        E = Object(c.default)(),
        T = function (t) {
          h(D, t),
            (D.length = e.length),
            E.notifyListeners(D.location, D.action);
        },
        S = function (t) {
          Object(l.isExtraneousPopstateEvent)(t) || P(w(t.state));
        },
        x = function () {
          P(w(p()));
        },
        O = !1,
        P = function (t) {
          O
            ? ((O = !1), T())
            : E.confirmTransitionTo(t, "POP", v, function (e) {
                e ? T({ action: "POP", location: t }) : k(t);
              });
        },
        k = function (t) {
          var e = D.location,
            n = I.indexOf(e.key);
          -1 === n && (n = 0);
          var r = I.indexOf(t.key);
          -1 === r && (r = 0);
          var i = n - r;
          i && ((O = !0), A(i));
        },
        C = w(p()),
        I = [C.key],
        M = function (t) {
          return b + Object(u.createPath)(t);
        },
        A = function (t) {
          e.go(t);
        },
        R = 0,
        N = function (t) {
          1 === (R += t)
            ? (Object(l.addEventListener)(window, "popstate", S),
              r && Object(l.addEventListener)(window, "hashchange", x))
            : 0 === R &&
              (Object(l.removeEventListener)(window, "popstate", S),
              r && Object(l.removeEventListener)(window, "hashchange", x));
        },
        j = !1,
        D = {
          length: e.length,
          action: "POP",
          location: C,
          createHref: M,
          push: function (t, r) {
            i()(
              !(
                "object" === (void 0 === t ? "undefined" : f(t)) &&
                void 0 !== t.state &&
                void 0 !== r
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var o = Object(s.createLocation)(t, r, _(), D.location);
            E.confirmTransitionTo(o, "PUSH", v, function (t) {
              if (t) {
                var r = M(o),
                  a = o.key,
                  s = o.state;
                if (n)
                  if ((e.pushState({ key: a, state: s }, null, r), d))
                    window.location.href = r;
                  else {
                    var u = I.indexOf(D.location.key),
                      c = I.slice(0, -1 === u ? 0 : u + 1);
                    c.push(o.key), (I = c), T({ action: "PUSH", location: o });
                  }
                else
                  i()(
                    void 0 === s,
                    "Browser history cannot push state in browsers that do not support HTML5 history"
                  ),
                    (window.location.href = r);
              }
            });
          },
          replace: function (t, r) {
            i()(
              !(
                "object" === (void 0 === t ? "undefined" : f(t)) &&
                void 0 !== t.state &&
                void 0 !== r
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var o = Object(s.createLocation)(t, r, _(), D.location);
            E.confirmTransitionTo(o, "REPLACE", v, function (t) {
              if (t) {
                var r = M(o),
                  a = o.key,
                  s = o.state;
                if (n)
                  if ((e.replaceState({ key: a, state: s }, null, r), d))
                    window.location.replace(r);
                  else {
                    var u = I.indexOf(D.location.key);
                    -1 !== u && (I[u] = o.key),
                      T({ action: "REPLACE", location: o });
                  }
                else
                  i()(
                    void 0 === s,
                    "Browser history cannot replace state in browsers that do not support HTML5 history"
                  ),
                    window.location.replace(r);
              }
            });
          },
          go: A,
          goBack: function () {
            return A(-1);
          },
          goForward: function () {
            return A(1);
          },
          block: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = E.setPrompt(t);
            return (
              j || (N(1), (j = !0)),
              function () {
                return j && ((j = !1), N(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = E.appendListener(t);
            return (
              N(1),
              function () {
                N(-1), e();
              }
            );
          },
        };
      return D;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      i = n.n(r),
      o = n(3),
      a = n.n(o),
      s = n(7),
      u = n(5),
      c = n(15),
      l = n(35),
      f =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      h = {
        hashbang: {
          encodePath: function (t) {
            return "!" === t.charAt(0)
              ? t
              : "!/" + Object(u.stripLeadingSlash)(t);
          },
          decodePath: function (t) {
            return "!" === t.charAt(0) ? t.substr(1) : t;
          },
        },
        noslash: {
          encodePath: u.stripLeadingSlash,
          decodePath: u.addLeadingSlash,
        },
        slash: { encodePath: u.addLeadingSlash, decodePath: u.addLeadingSlash },
      },
      p = function () {
        var t = window.location.href,
          e = t.indexOf("#");
        return -1 === e ? "" : t.substring(e + 1);
      },
      d = function (t) {
        return (window.location.hash = t);
      },
      m = function (t) {
        var e = window.location.href.indexOf("#");
        window.location.replace(
          window.location.href.slice(0, e >= 0 ? e : 0) + "#" + t
        );
      };
    e.default = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      a()(l.canUseDOM, "Hash history needs a DOM");
      var e = window.history,
        n = Object(l.supportsGoWithoutReloadUsingHash)(),
        r = t.getUserConfirmation,
        o = void 0 === r ? l.getConfirmation : r,
        v = t.hashType,
        y = void 0 === v ? "slash" : v,
        g = t.basename
          ? Object(u.stripTrailingSlash)(Object(u.addLeadingSlash)(t.basename))
          : "",
        b = h[y],
        w = b.encodePath,
        _ = b.decodePath,
        E = function () {
          var t = _(p());
          return (
            i()(
              !g || Object(u.hasBasename)(t, g),
              'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' +
                t +
                '" to begin with "' +
                g +
                '".'
            ),
            g && (t = Object(u.stripBasename)(t, g)),
            Object(s.createLocation)(t)
          );
        },
        T = Object(c.default)(),
        S = function (t) {
          f(U, t),
            (U.length = e.length),
            T.notifyListeners(U.location, U.action);
        },
        x = !1,
        O = null,
        P = function () {
          var t = p(),
            e = w(t);
          if (t !== e) m(e);
          else {
            var n = E(),
              r = U.location;
            if (!x && Object(s.locationsAreEqual)(r, n)) return;
            if (O === Object(u.createPath)(n)) return;
            (O = null), k(n);
          }
        },
        k = function (t) {
          x
            ? ((x = !1), S())
            : T.confirmTransitionTo(t, "POP", o, function (e) {
                e ? S({ action: "POP", location: t }) : C(t);
              });
        },
        C = function (t) {
          var e = U.location,
            n = R.lastIndexOf(Object(u.createPath)(e));
          -1 === n && (n = 0);
          var r = R.lastIndexOf(Object(u.createPath)(t));
          -1 === r && (r = 0);
          var i = n - r;
          i && ((x = !0), N(i));
        },
        I = p(),
        M = w(I);
      I !== M && m(M);
      var A = E(),
        R = [Object(u.createPath)(A)],
        N = function (t) {
          i()(
            n,
            "Hash history go(n) causes a full page reload in this browser"
          ),
            e.go(t);
        },
        j = 0,
        D = function (t) {
          1 === (j += t)
            ? Object(l.addEventListener)(window, "hashchange", P)
            : 0 === j && Object(l.removeEventListener)(window, "hashchange", P);
        },
        L = !1,
        U = {
          length: e.length,
          action: "POP",
          location: A,
          createHref: function (t) {
            return "#" + w(g + Object(u.createPath)(t));
          },
          push: function (t, e) {
            i()(void 0 === e, "Hash history cannot push state; it is ignored");
            var n = Object(s.createLocation)(t, void 0, void 0, U.location);
            T.confirmTransitionTo(n, "PUSH", o, function (t) {
              if (t) {
                var e = Object(u.createPath)(n),
                  r = w(g + e);
                if (p() !== r) {
                  (O = e), d(r);
                  var o = R.lastIndexOf(Object(u.createPath)(U.location)),
                    a = R.slice(0, -1 === o ? 0 : o + 1);
                  a.push(e), (R = a), S({ action: "PUSH", location: n });
                } else
                  i()(
                    !1,
                    "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"
                  ),
                    S();
              }
            });
          },
          replace: function (t, e) {
            i()(
              void 0 === e,
              "Hash history cannot replace state; it is ignored"
            );
            var n = Object(s.createLocation)(t, void 0, void 0, U.location);
            T.confirmTransitionTo(n, "REPLACE", o, function (t) {
              if (t) {
                var e = Object(u.createPath)(n),
                  r = w(g + e);
                p() !== r && ((O = e), m(r));
                var i = R.indexOf(Object(u.createPath)(U.location));
                -1 !== i && (R[i] = e), S({ action: "REPLACE", location: n });
              }
            });
          },
          go: N,
          goBack: function () {
            return N(-1);
          },
          goForward: function () {
            return N(1);
          },
          block: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = T.setPrompt(t);
            return (
              L || (D(1), (L = !0)),
              function () {
                return L && ((L = !1), D(-1)), e();
              }
            );
          },
          listen: function (t) {
            var e = T.appendListener(t);
            return (
              D(1),
              function () {
                D(-1), e();
              }
            );
          },
        };
      return U;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      i = n.n(r),
      o = n(5),
      a = n(7),
      s = n(15),
      u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      c =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      l = function (t, e, n) {
        return Math.min(Math.max(t, e), n);
      };
    e.default = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.getUserConfirmation,
        n = t.initialEntries,
        r = void 0 === n ? ["/"] : n,
        f = t.initialIndex,
        h = void 0 === f ? 0 : f,
        p = t.keyLength,
        d = void 0 === p ? 6 : p,
        m = Object(s.default)(),
        v = function (t) {
          c(E, t),
            (E.length = E.entries.length),
            m.notifyListeners(E.location, E.action);
        },
        y = function () {
          return Math.random().toString(36).substr(2, d);
        },
        g = l(h, 0, r.length - 1),
        b = r.map(function (t) {
          return "string" == typeof t
            ? Object(a.createLocation)(t, void 0, y())
            : Object(a.createLocation)(t, void 0, t.key || y());
        }),
        w = o.createPath,
        _ = function (t) {
          var n = l(E.index + t, 0, E.entries.length - 1),
            r = E.entries[n];
          m.confirmTransitionTo(r, "POP", e, function (t) {
            t ? v({ action: "POP", location: r, index: n }) : v();
          });
        },
        E = {
          length: b.length,
          action: "POP",
          location: b[g],
          index: g,
          entries: b,
          createHref: w,
          push: function (t, n) {
            i()(
              !(
                "object" === (void 0 === t ? "undefined" : u(t)) &&
                void 0 !== t.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = Object(a.createLocation)(t, n, y(), E.location);
            m.confirmTransitionTo(r, "PUSH", e, function (t) {
              if (t) {
                var e = E.index + 1,
                  n = E.entries.slice(0);
                n.length > e ? n.splice(e, n.length - e, r) : n.push(r),
                  v({ action: "PUSH", location: r, index: e, entries: n });
              }
            });
          },
          replace: function (t, n) {
            i()(
              !(
                "object" === (void 0 === t ? "undefined" : u(t)) &&
                void 0 !== t.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = Object(a.createLocation)(t, n, y(), E.location);
            m.confirmTransitionTo(r, "REPLACE", e, function (t) {
              t &&
                ((E.entries[E.index] = r),
                v({ action: "REPLACE", location: r }));
            });
          },
          go: _,
          goBack: function () {
            return _(-1);
          },
          goForward: function () {
            return _(1);
          },
          canGo: function (t) {
            var e = E.index + t;
            return e >= 0 && e < E.entries.length;
          },
          block: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return m.setPrompt(t);
          },
          listen: function (t) {
            return m.appendListener(t);
          },
        };
      return E;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(103);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = n(1),
      u = n.n(s),
      c = n(3),
      l = n.n(c),
      f = n(0),
      h = n.n(f),
      p = n(2),
      d = n.n(p),
      m = n(4),
      v = (n.n(m), n(13)),
      y =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      g = function (t) {
        var e = t.pathname,
          n = void 0 === e ? "/" : e,
          r = t.search,
          i = void 0 === r ? "" : r,
          o = t.hash,
          a = void 0 === o ? "" : o;
        return {
          pathname: n,
          search: "?" === i ? "" : i,
          hash: "#" === a ? "" : a,
        };
      },
      b = function (t, e) {
        return t
          ? y({}, e, { pathname: Object(m.addLeadingSlash)(t) + e.pathname })
          : e;
      },
      w = function (t, e) {
        if (!t) return e;
        var n = Object(m.addLeadingSlash)(t);
        return 0 !== e.pathname.indexOf(n)
          ? e
          : y({}, e, { pathname: e.pathname.substr(n.length) });
      },
      _ = function (t) {
        return "string" == typeof t ? Object(m.parsePath)(t) : g(t);
      },
      E = function (t) {
        return "string" == typeof t ? t : Object(m.createPath)(t);
      },
      T = function (t) {
        return function () {
          l()(!1, "You cannot %s with <StaticRouter>", t);
        };
      },
      S = function () {},
      x = (function (t) {
        function e() {
          var n, r, a;
          i(this, e);
          for (var s = arguments.length, u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c];
          return (
            (n = r = o(this, t.call.apply(t, [this].concat(u)))),
            (r.createHref = function (t) {
              return Object(m.addLeadingSlash)(r.props.basename + E(t));
            }),
            (r.handlePush = function (t) {
              var e = r.props,
                n = e.basename,
                i = e.context;
              (i.action = "PUSH"),
                (i.location = b(n, _(t))),
                (i.url = E(i.location));
            }),
            (r.handleReplace = function (t) {
              var e = r.props,
                n = e.basename,
                i = e.context;
              (i.action = "REPLACE"),
                (i.location = b(n, _(t))),
                (i.url = E(i.location));
            }),
            (r.handleListen = function () {
              return S;
            }),
            (r.handleBlock = function () {
              return S;
            }),
            (a = n),
            o(r, a)
          );
        }
        return (
          a(e, t),
          (e.prototype.getChildContext = function () {
            return { router: { staticContext: this.props.context } };
          }),
          (e.prototype.componentWillMount = function () {
            u()(
              !this.props.history,
              "<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`."
            );
          }),
          (e.prototype.render = function () {
            var t = this.props,
              e = t.basename,
              n = (t.context, t.location),
              i = r(t, ["basename", "context", "location"]),
              o = {
                createHref: this.createHref,
                action: "POP",
                location: w(e, _(n)),
                push: this.handlePush,
                replace: this.handleReplace,
                go: T("go"),
                goBack: T("goBack"),
                goForward: T("goForward"),
                listen: this.handleListen,
                block: this.handleBlock,
              };
            return h.a.createElement(v.default, y({}, i, { history: o }));
          }),
          e
        );
      })(h.a.Component);
    (x.propTypes = {
      basename: d.a.string,
      context: d.a.object.isRequired,
      location: d.a.oneOfType([d.a.string, d.a.object]),
    }),
      (x.defaultProps = { basename: "", location: "/" }),
      (x.childContextTypes = { router: d.a.object.isRequired }),
      (e.default = x);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(105);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(0),
      s = n.n(a),
      u = n(2),
      c = n.n(u),
      l = n(1),
      f = n.n(l),
      h = n(3),
      p = n.n(h),
      d = n(14),
      m = (function (t) {
        function e() {
          return r(this, e), i(this, t.apply(this, arguments));
        }
        return (
          o(e, t),
          (e.prototype.componentWillMount = function () {
            p()(
              this.context.router,
              "You should not use <Switch> outside a <Router>"
            );
          }),
          (e.prototype.componentWillReceiveProps = function (t) {
            f()(
              !(t.location && !this.props.location),
              '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
            ),
              f()(
                !(!t.location && this.props.location),
                '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
              );
          }),
          (e.prototype.render = function () {
            var t = this.context.router.route,
              e = this.props.children,
              n = this.props.location || t.location,
              r = void 0,
              i = void 0;
            return (
              s.a.Children.forEach(e, function (e) {
                if (s.a.isValidElement(e)) {
                  var o = e.props,
                    a = o.path,
                    u = o.exact,
                    c = o.strict,
                    l = o.sensitive,
                    f = o.from,
                    h = a || f;
                  null == r &&
                    ((i = e),
                    (r = h
                      ? Object(d.default)(n.pathname, {
                          path: h,
                          exact: u,
                          strict: c,
                          sensitive: l,
                        })
                      : t.match));
                }
              }),
              r ? s.a.cloneElement(i, { location: n, computedMatch: r }) : null
            );
          }),
          e
        );
      })(s.a.Component);
    (m.contextTypes = {
      router: c.a.shape({ route: c.a.object.isRequired }).isRequired,
    }),
      (m.propTypes = { children: c.a.node, location: c.a.object }),
      (e.default = m);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(14);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(108);
    e.default = r.default;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = {};
      for (var r in t)
        e.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
      return n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(0),
      o = n.n(i),
      a = n(2),
      s = n.n(a),
      u = n(20),
      c = n.n(u),
      l = n(34),
      f =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    e.default = function (t) {
      var e = function (e) {
        var n = e.wrappedComponentRef,
          i = r(e, ["wrappedComponentRef"]);
        return o.a.createElement(l.default, {
          render: function (e) {
            return o.a.createElement(t, f({}, i, e, { ref: n }));
          },
        });
      };
      return (
        (e.displayName = "withRouter(" + (t.displayName || t.name) + ")"),
        (e.WrappedComponent = t),
        (e.propTypes = { wrappedComponentRef: s.a.func }),
        c()(e, t)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return function (e) {
        var n = e.dispatch,
          r = e.getState;
        return function (e) {
          return function (i) {
            return "function" == typeof i ? i(n, r, t) : e(i);
          };
        };
      };
    }
    e.__esModule = !0;
    var i = r();
    (i.withExtraArgument = r), (e.default = i);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return t === e;
    }
    function i(t, e, n) {
      if (null === e || null === n || e.length !== n.length) return !1;
      for (var r = e.length, i = 0; i < r; i++) if (!t(e[i], n[i])) return !1;
      return !0;
    }
    function o(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
        n = null,
        o = null;
      return function () {
        return (
          i(e, n, arguments) || (o = t.apply(null, arguments)),
          (n = arguments),
          o
        );
      };
    }
    function a(t) {
      var e = Array.isArray(t[0]) ? t[0] : t;
      if (
        !e.every(function (t) {
          return "function" == typeof t;
        })
      ) {
        var n = e
          .map(function (t) {
            return typeof t;
          })
          .join(", ");
        throw new Error(
          "Selector creators expect all input-selectors to be functions, instead received the following types: [" +
            n +
            "]"
        );
      }
      return e;
    }
    function s(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      return function () {
        for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
          r[i] = arguments[i];
        var s = 0,
          u = r.pop(),
          c = a(r),
          l = t.apply(
            void 0,
            [
              function () {
                return s++, u.apply(null, arguments);
              },
            ].concat(n)
          ),
          f = o(function () {
            for (var t = [], e = c.length, n = 0; n < e; n++)
              t.push(c[n].apply(null, arguments));
            return l.apply(null, t);
          });
        return (
          (f.resultFunc = u),
          (f.recomputations = function () {
            return s;
          }),
          (f.resetRecomputations = function () {
            return (s = 0);
          }),
          f
        );
      };
    }
    (e.__esModule = !0),
      (e.defaultMemoize = o),
      (e.createSelectorCreator = s),
      (e.createStructuredSelector = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        if ("object" != typeof t)
          throw new Error(
            "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
              typeof t
          );
        var n = Object.keys(t);
        return e(
          n.map(function (e) {
            return t[e];
          }),
          function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return e.reduce(function (t, e, r) {
              return (t[n[r]] = e), t;
            }, {});
          }
        );
      });
    var u = (e.createSelector = s(o));
  },
  function (t, e, n) {
    var r;
    !(function () {
      var i = {};
      (function (t) {
        function e(t, e) {
          var n = t.split("."),
            r = Fa;
          n[0] in r || !r.execScript || r.execScript("var " + n[0]);
          for (var i; n.length && (i = n.shift()); )
            n.length || void 0 === e
              ? (r = r[i] ? r[i] : (r[i] = {}))
              : (r[i] = e);
        }
        function n(t) {
          function e() {}
          var n = ye;
          (e.prototype = n.prototype),
            (t.Ze = n.prototype),
            (t.prototype = new e()),
            (t.prototype.constructor = t),
            (t.Xe = function (t, e, r) {
              return n.prototype[e].apply(
                t,
                Array.prototype.slice.call(arguments, 2)
              );
            });
        }
        function r(t) {
          (this.c = Math.exp(Math.log(0.5) / t)), (this.b = this.a = 0);
        }
        function i(t, e, n) {
          var r = Math.pow(t.c, e);
          (n = n * (1 - r) + r * t.a), isNaN(n) || ((t.a = n), (t.b += e));
        }
        function o(t) {
          return t.a / (1 - Math.pow(t.c, t.b));
        }
        function a() {
          (this.b = new r(2)), (this.c = new r(5)), (this.a = 0);
        }
        function s() {}
        function u(t, e, n, r) {
          (this.severity = t),
            (this.category = e),
            (this.code = n),
            (this.data = Array.prototype.slice.call(arguments, 3)),
            (this.handled = !1);
        }
        function c(t) {
          var e;
          t instanceof c
            ? (l(this, t.ca),
              (this.Ba = t.Ba),
              (this.ha = t.ha),
              f(this, t.Ia),
              (this.$ = t.$),
              h(this, y(t.a)),
              (this.ua = t.ua))
            : t && (e = String(t).match(Ba))
            ? (l(this, e[1] || "", !0),
              (this.Ba = p(e[2] || "")),
              (this.ha = p(e[3] || "", !0)),
              f(this, e[4]),
              (this.$ = p(e[5] || "", !0)),
              h(this, e[6] || "", !0),
              (this.ua = p(e[7] || "")))
            : (this.a = new v(null));
        }
        function l(t, e, n) {
          (t.ca = n ? p(e, !0) : e), t.ca && (t.ca = t.ca.replace(/:$/, ""));
        }
        function f(t, e) {
          if (e) {
            if (((e = Number(e)), isNaN(e) || 0 > e))
              throw Error("Bad port number " + e);
            t.Ia = e;
          } else t.Ia = null;
        }
        function h(t, e, n) {
          e instanceof v ? (t.a = e) : (n || (e = d(e, Va)), (t.a = new v(e)));
        }
        function p(t, e) {
          return t ? (e ? decodeURI(t) : decodeURIComponent(t)) : "";
        }
        function d(t, e, n) {
          return "string" == typeof t
            ? ((t = encodeURI(t).replace(e, m)),
              n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
              t)
            : null;
        }
        function m(t) {
          return (
            "%" +
            (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & t).toString(16)
          );
        }
        function v(t) {
          this.b = t || null;
        }
        function y(t) {
          var e = new v();
          if (((e.b = t.b), t.a)) {
            var n,
              r = {};
            for (n in t.a) r[n] = t.a[n].concat();
            (e.a = r), (e.c = t.c);
          }
          return e;
        }
        function g() {
          var t,
            e,
            n = new Promise(function (n, r) {
              (t = n), (e = r);
            });
          return (n.resolve = t), (n.reject = e), n;
        }
        function b(t, e) {
          var n = _();
          (this.i = null == t.maxAttempts ? n.maxAttempts : t.maxAttempts),
            (this.f = null == t.baseDelay ? n.baseDelay : t.baseDelay),
            (this.h = null == t.fuzzFactor ? n.fuzzFactor : t.fuzzFactor),
            (this.g =
              null == t.backoffFactor ? n.backoffFactor : t.backoffFactor),
            (this.a = 0),
            (this.b = this.f),
            (this.c = e || !1) && (this.a = 1);
        }
        function w(e) {
          if (e.a >= e.i) {
            if (!e.c) return Promise.reject();
            (e.a = 1), (e.b = e.f);
          }
          var n = new g();
          return (
            e.a
              ? (t.setTimeout(
                  n.resolve,
                  e.b * (1 + (2 * Math.random() - 1) * e.h)
                ),
                (e.b *= e.g))
              : n.resolve(),
            e.a++,
            n
          );
        }
        function _() {
          return {
            maxAttempts: 2,
            baseDelay: 1e3,
            backoffFactor: 2,
            fuzzFactor: 0.5,
            timeout: 0,
          };
        }
        function E(t, e, n, r, i) {
          var o,
            a = i in r;
          for (o in e) {
            var s = i + "." + o,
              u = a ? r[i] : n[o];
            (a || o in t) &&
              (void 0 === e[o]
                ? void 0 === u || a
                  ? delete t[o]
                  : (t[o] = u)
                : u.constructor == Object && e[o] && e[o].constructor == Object
                ? (t[o] || (t[o] = u), E(t[o], e[o], u, r, s))
                : typeof e[o] == typeof u &&
                  null != e[o] &&
                  e[o].constructor == u.constructor &&
                  (t[o] = e[o]));
          }
        }
        function T(t) {
          return JSON.parse(JSON.stringify(t));
        }
        function S(t, e) {
          return t.reduce(
            function (t, e, n) {
              return e.catch(t.bind(null, n));
            }.bind(null, e),
            Promise.reject()
          );
        }
        function x(t, e) {
          return t.concat(e);
        }
        function O() {}
        function P(t) {
          return null != t;
        }
        function k(t, e, n) {
          return n.indexOf(t) == e;
        }
        function C(t) {
          (this.f = !1),
            (this.a = []),
            (this.b = []),
            (this.c = []),
            (this.g = t || null);
        }
        function I(t, e) {
          return {
            uris: t,
            method: "GET",
            body: null,
            headers: {},
            allowCrossSiteCredentials: !1,
            retryParameters: e,
          };
        }
        function M(t, e, n, r, i, o) {
          if (t.f) return Promise.reject();
          var a = new c(n.uris[i]),
            s = a.ca;
          if (
            (s ||
              ((s = location.protocol),
              (s = s.slice(0, -1)),
              l(a, s),
              (n.uris[i] = a.toString())),
            !(s = Wa[s]))
          )
            return Promise.reject(new u(2, 1, 1e3, a));
          var f = Date.now();
          return s(n.uris[i], n, e)
            .then(
              function (t) {
                void 0 == t.timeMs && (t.timeMs = Date.now() - f);
                var n = Date.now(),
                  r = Promise.resolve();
                return (
                  this.c.forEach(function (n) {
                    r = r.then(
                      function () {
                        return Promise.resolve(n(e, t));
                      }.bind(this)
                    );
                  }),
                  (r = r.catch(function (t) {
                    var e = 2;
                    throw (
                      (t instanceof u && (e = t.severity), new u(e, 1, 1007, t))
                    );
                  })).then(function () {
                    return (t.timeMs += Date.now() - n), (t.timeMs += o), t;
                  })
                );
              }.bind(t)
            )
            .catch(
              function (t) {
                if (t && 1 == t.severity)
                  return (
                    (i = (i + 1) % n.uris.length),
                    w(r).then(
                      function () {
                        return M(this, e, n, r, i, o);
                      }.bind(this),
                      function () {
                        throw t;
                      }
                    )
                  );
                throw t;
              }.bind(t)
            );
        }
        function A(t, e) {
          for (var n = [], r = 0; r < t.length; ++r) {
            for (
              var i = !1, o = 0;
              o < n.length && !(i = e ? e(t[r], n[o]) : t[r] === n[o]);
              ++o
            );
            i || n.push(t[r]);
          }
          return n;
        }
        function R(t, e, n) {
          for (var r = 0; r < t.length; ++r) if (n(t[r], e)) return r;
          return -1;
        }
        function N(t, e) {
          var n = t.indexOf(e);
          -1 < n && t.splice(n, 1);
        }
        function j() {
          this.a = {};
        }
        function D() {
          this.a = new j();
        }
        function L(t, e, n, r) {
          t.a && ((e = new B(e, n, r)), t.a.push(n, e));
        }
        function U(t, e, n, r) {
          L(
            t,
            e,
            n,
            function (t) {
              this.la(e, n), r(t);
            }.bind(t)
          );
        }
        function F(t) {
          if (t.a) {
            var e,
              n = t.a,
              r = [];
            for (e in n.a) r.push.apply(r, n.a[e]);
            for (n = 0; n < r.length; ++n) r[n].la();
            t.a.a = {};
          }
        }
        function B(t, e, n) {
          (this.target = t),
            (this.type = e),
            (this.a = n),
            this.target.addEventListener(e, n, !1);
        }
        function z(t, e) {
          if (!e.length) return t;
          var n = e.map(function (t) {
            return new c(t);
          });
          return t
            .map(function (t) {
              return new c(t);
            })
            .map(function (t) {
              return n.map(t.resolve.bind(t));
            })
            .reduce(x, [])
            .map(function (t) {
              return t.toString();
            });
        }
        function H(t, e) {
          return {
            keySystem: t,
            licenseServerUri: "",
            distinctiveIdentifierRequired: !1,
            persistentStateRequired: !1,
            audioRobustness: "",
            videoRobustness: "",
            serverCertificate: null,
            initData: e || [],
            keyIds: [],
          };
        }
        function q(t) {
          return !t || !Object.keys(t).length;
        }
        function V(t) {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        }
        function K(t, e) {
          return Object.keys(t).reduce(function (n, r) {
            return (n[r] = e(t[r], r)), n;
          }, {});
        }
        function W(t, e) {
          return Object.keys(t).every(function (n) {
            return e(n, t[n]);
          });
        }
        function G(t, e) {
          Object.keys(t).forEach(function (n) {
            e(n, t[n]);
          });
        }
        function Y(t, e) {
          var n = t;
          return e && (n += '; codecs="' + e + '"'), n;
        }
        function $(t) {
          if (!t) return "";
          239 == (t = new Uint8Array(t))[0] &&
            187 == t[1] &&
            191 == t[2] &&
            (t = t.subarray(3)),
            (t = escape(Z(t)));
          try {
            return decodeURIComponent(t);
          } catch (t) {
            throw new u(2, 2, 2004);
          }
        }
        function X(t, e, n) {
          if (!t) return "";
          if (!n && t.byteLength % 2) throw new u(2, 2, 2004);
          if (t instanceof ArrayBuffer) var r = t;
          else
            (n = new Uint8Array(t.byteLength)).set(new Uint8Array(t)),
              (r = n.buffer);
          (t = Math.floor(t.byteLength / 2)),
            (n = new Uint16Array(t)),
            (r = new DataView(r));
          for (var i = 0; i < t; i++) n[i] = r.getUint16(2 * i, e);
          return Z(n);
        }
        function J(t) {
          var e = new Uint8Array(t);
          if (239 == e[0] && 187 == e[1] && 191 == e[2]) return $(e);
          if (254 == e[0] && 255 == e[1]) return X(e.subarray(2), !1);
          if (255 == e[0] && 254 == e[1]) return X(e.subarray(2), !0);
          var n = function (t, e) {
            return t.byteLength <= e || (32 <= t[e] && 126 >= t[e]);
          }.bind(null, e);
          if (!e[0] && !e[2]) return X(t, !1);
          if (!e[1] && !e[3]) return X(t, !0);
          if (n(0) && n(1) && n(2) && n(3)) return $(t);
          throw new u(2, 2, 2003);
        }
        function Q(t) {
          t = unescape(encodeURIComponent(t));
          for (var e = new Uint8Array(t.length), n = 0; n < t.length; ++n)
            e[n] = t.charCodeAt(n);
          return e.buffer;
        }
        function Z(t) {
          for (var e = "", n = 0; n < t.length; n += 16e3)
            e += String.fromCharCode.apply(null, t.subarray(n, n + 16e3));
          return e;
        }
        function tt(t) {
          (this.a = null),
            (this.b = function () {
              (this.a = null), t();
            }.bind(this));
        }
        function et(t) {
          t.cancel(), (t.a = setTimeout(t.b, 500));
        }
        function nt(e, n) {
          var r = void 0 == n || n,
            i = t
              .btoa(String.fromCharCode.apply(null, e))
              .replace(/\+/g, "-")
              .replace(/\//g, "_");
          return r ? i : i.replace(/=*$/, "");
        }
        function rt(e) {
          e = t.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
          for (var n = new Uint8Array(e.length), r = 0; r < e.length; ++r)
            n[r] = e.charCodeAt(r);
          return n;
        }
        function it(e) {
          for (
            var n = new Uint8Array(e.length / 2), r = 0;
            r < e.length;
            r += 2
          )
            n[r / 2] = t.parseInt(e.substr(r, 2), 16);
          return n;
        }
        function ot(t) {
          for (var e = "", n = 0; n < t.length; ++n) {
            var r = t[n].toString(16);
            1 == r.length && (r = "0" + r), (e += r);
          }
          return e;
        }
        function at(t, e) {
          if (!t && !e) return !0;
          if (!t || !e || t.length != e.length) return !1;
          for (var n = 0; n < t.length; ++n) if (t[n] != e[n]) return !1;
          return !0;
        }
        function st(t, e, n, r) {
          (this.l = this.j = this.s = null),
            (this.D = !1),
            (this.b = null),
            (this.f = new D()),
            (this.a = []),
            (this.m = []),
            (this.i = new g()),
            (this.ga = t),
            (this.h = null),
            (this.g = function (t) {
              this.i.reject(t), e(t);
            }.bind(this)),
            (this.w = {}),
            (this.sa = n),
            (this.na = r),
            (this.B = new tt(this.Td.bind(this))),
            (this.fa = this.c = !1),
            (this.C = []),
            (this.O = !1),
            (this.I = setInterval(this.Sd.bind(this), 1e3)),
            this.i.catch(function () {});
        }
        function ut(t, e) {
          if (!t.j)
            return (
              U(
                t.f,
                e,
                "encrypted",
                function () {
                  this.g(new u(2, 6, 6010));
                }.bind(t)
              ),
              Promise.resolve()
            );
          (t.l = e), U(t.f, t.l, "play", t.zd.bind(t));
          var n = (n = t.l.setMediaKeys(t.j)).catch(function (t) {
              return Promise.reject(new u(2, 6, 6003, t.message));
            }),
            r = null;
          return (
            t.b.serverCertificate &&
              t.b.serverCertificate.length &&
              (r = t.j
                .setServerCertificate(t.b.serverCertificate)
                .then(function () {})
                .catch(function (t) {
                  return Promise.reject(new u(2, 6, 6004, t.message));
                })),
            Promise.all([n, r])
              .then(
                function () {
                  if (this.c) return Promise.reject();
                  lt(this),
                    this.b.initData.length ||
                      this.m.length ||
                      L(this.f, this.l, "encrypted", this.pd.bind(this));
                }.bind(t)
              )
              .catch(
                function (t) {
                  return this.c ? Promise.resolve() : Promise.reject(t);
                }.bind(t)
              )
          );
        }
        function ct(t, e) {
          return Promise.all(
            e.map(
              function (t) {
                return gt(this, t).then(
                  function (t) {
                    if (t) {
                      for (var e = new g(), n = 0; n < this.a.length; n++)
                        if (this.a[n].da == t) {
                          this.a[n].ma = e;
                          break;
                        }
                      return Promise.all([t.remove(), e]);
                    }
                  }.bind(this)
                );
              }.bind(t)
            )
          );
        }
        function lt(t) {
          var e = t.b ? t.b.initData : [];
          return (
            e.forEach(
              function (t) {
                bt(this, t.initDataType, t.initData);
              }.bind(t)
            ),
            t.m.forEach(
              function (t) {
                gt(this, t);
              }.bind(t)
            ),
            e.length || t.m.length || t.i.resolve(),
            t.i
          );
        }
        function ft(t) {
          return t.a.map(function (t) {
            return t.da.sessionId;
          });
        }
        function ht(e, n, r, i, o) {
          var a = mt(e);
          n.periods.forEach(
            function (e) {
              e.variants.forEach(
                function (e) {
                  a && (e.drmInfos = [a]),
                    e.drmInfos.forEach(
                      function (n) {
                        dt(this, n),
                          t.cast &&
                            t.cast.__platform__ &&
                            "com.microsoft.playready" == n.keySystem &&
                            (n.keySystem = "com.chromecast.playready");
                        var a = i[n.keySystem];
                        a ||
                          ((a = {
                            audioCapabilities: [],
                            videoCapabilities: [],
                            distinctiveIdentifier: "optional",
                            persistentState: r ? "required" : "optional",
                            sessionTypes: [
                              r ? "persistent-license" : "temporary",
                            ],
                            label: n.keySystem,
                            drmInfos: [],
                          }),
                          (i[n.keySystem] = a),
                          o.push(n.keySystem)),
                          a.drmInfos.push(n),
                          n.distinctiveIdentifierRequired &&
                            (a.distinctiveIdentifier = "required"),
                          n.persistentStateRequired &&
                            (a.persistentState = "required");
                        var s = [];
                        e.video && s.push(e.video),
                          e.audio && s.push(e.audio),
                          s.forEach(
                            function (t) {
                              ("video" == t.type
                                ? a.videoCapabilities
                                : a.audioCapabilities
                              ).push({
                                robustness:
                                  ("video" == t.type
                                    ? n.videoRobustness
                                    : n.audioRobustness) || "",
                                contentType: Y(t.mimeType, t.codecs),
                              });
                            }.bind(this)
                          );
                      }.bind(this)
                    );
                }.bind(this)
              );
            }.bind(e)
          );
        }
        function pt(t, e, n) {
          if (1 == n.length && "" == n[0])
            return Promise.reject(new u(2, 6, 6e3));
          var r = new g(),
            i = r;
          return (
            [!0, !1].forEach(
              function (t) {
                n.forEach(
                  function (n) {
                    var r = e[n];
                    r.drmInfos.some(function (t) {
                      return !!t.licenseServerUri;
                    }) == t &&
                      (r.audioCapabilities.length || delete r.audioCapabilities,
                      r.videoCapabilities.length || delete r.videoCapabilities,
                      (i = i.catch(
                        function () {
                          return this.c
                            ? Promise.reject()
                            : navigator.requestMediaKeySystemAccess(n, [r]);
                        }.bind(this)
                      )));
                  }.bind(this)
                );
              }.bind(t)
            ),
            (i = i.catch(function () {
              return Promise.reject(new u(2, 6, 6001));
            })),
            (i = i
              .then(
                function (t) {
                  if (this.c) return Promise.reject();
                  var n = 0 <= navigator.userAgent.indexOf("Edge/"),
                    r = t.getConfiguration();
                  return (
                    (this.s = (r.audioCapabilities || [])
                      .concat(r.videoCapabilities || [])
                      .map(function (t) {
                        return t.contentType;
                      })),
                    n && (this.s = null),
                    (n = e[t.keySystem]),
                    vt(this, t.keySystem, n, n.drmInfos),
                    this.b.licenseServerUri
                      ? t.createMediaKeys()
                      : Promise.reject(new u(2, 6, 6012))
                  );
                }.bind(t)
              )
              .then(
                function (t) {
                  if (this.c) return Promise.reject();
                  (this.j = t), (this.D = !0);
                }.bind(t)
              )
              .catch(
                function (t) {
                  return this.c
                    ? Promise.resolve()
                    : ((this.s = this.b = null),
                      t instanceof u
                        ? Promise.reject(t)
                        : Promise.reject(new u(2, 6, 6002, t.message)));
                }.bind(t)
              )),
            r.reject(),
            i
          );
        }
        function dt(t, e) {
          var n = e.keySystem;
          if (n) {
            if (!e.licenseServerUri) {
              var r = t.h.servers[n];
              r && (e.licenseServerUri = r);
            }
            e.keyIds || (e.keyIds = []),
              (n = t.h.advanced[n]) &&
                (e.distinctiveIdentifierRequired ||
                  (e.distinctiveIdentifierRequired =
                    n.distinctiveIdentifierRequired),
                e.persistentStateRequired ||
                  (e.persistentStateRequired = n.persistentStateRequired),
                e.videoRobustness || (e.videoRobustness = n.videoRobustness),
                e.audioRobustness || (e.audioRobustness = n.audioRobustness),
                e.serverCertificate ||
                  (e.serverCertificate = n.serverCertificate));
          }
        }
        function mt(e) {
          if (q(e.h.clearKeys)) return null;
          var n,
            r = [],
            i = [];
          for (n in e.h.clearKeys) {
            var o = e.h.clearKeys[n],
              a = it(n),
              o = it(o),
              a = { kty: "oct", kid: nt(a, !1), k: nt(o, !1) };
            r.push(a), i.push(a.kid);
          }
          return (
            (e = JSON.stringify({ keys: r })),
            (i = JSON.stringify({ kids: i })),
            (i = [{ initData: new Uint8Array(Q(i)), initDataType: "keyids" }]),
            {
              keySystem: "org.w3.clearkey",
              licenseServerUri: "data:application/json;base64," + t.btoa(e),
              distinctiveIdentifierRequired: !1,
              persistentStateRequired: !1,
              audioRobustness: "",
              videoRobustness: "",
              serverCertificate: null,
              initData: i,
              keyIds: [],
            }
          );
        }
        function vt(t, e, n, r) {
          var i = [],
            o = [],
            a = [],
            s = [];
          yt(r, i, o, a, s),
            (t.b = {
              keySystem: e,
              licenseServerUri: i[0],
              distinctiveIdentifierRequired:
                "required" == n.distinctiveIdentifier,
              persistentStateRequired: "required" == n.persistentState,
              audioRobustness: n.audioCapabilities
                ? n.audioCapabilities[0].robustness
                : "",
              videoRobustness: n.videoCapabilities
                ? n.videoCapabilities[0].robustness
                : "",
              serverCertificate: o[0],
              initData: a,
              keyIds: s,
            });
        }
        function yt(t, e, n, r, i) {
          function o(t, e) {
            return (
              !(!t.keyId || t.keyId != e.keyId) ||
              (t.initDataType == e.initDataType && at(t.initData, e.initData))
            );
          }
          t.forEach(function (t) {
            if (
              (-1 == e.indexOf(t.licenseServerUri) &&
                e.push(t.licenseServerUri),
              t.serverCertificate &&
                -1 == R(n, t.serverCertificate, at) &&
                n.push(t.serverCertificate),
              t.initData &&
                t.initData.forEach(function (t) {
                  -1 == R(r, t, o) && r.push(t);
                }),
              t.keyIds)
            )
              for (var a = 0; a < t.keyIds.length; ++a)
                -1 == i.indexOf(t.keyIds[a]) && i.push(t.keyIds[a]);
          });
        }
        function gt(t, e) {
          try {
            var n = t.j.createSession("persistent-license");
          } catch (e) {
            var r = new u(2, 6, 6005, e.message);
            return t.g(r), Promise.reject(r);
          }
          L(t.f, n, "message", t.pc.bind(t)),
            L(t.f, n, "keystatuseschange", t.jc.bind(t));
          var i = { initData: null, da: n, loaded: !1, Eb: 1 / 0, ma: null };
          return (
            t.a.push(i),
            n.load(e).then(
              function (t) {
                if (!this.c) {
                  if (t)
                    return (
                      (i.loaded = !0),
                      this.a.every(function (t) {
                        return t.loaded;
                      }) && this.i.resolve(),
                      n
                    );
                  this.a.splice(this.a.indexOf(i), 1),
                    this.g(new u(2, 6, 6013));
                }
              }.bind(t),
              function (t) {
                this.c ||
                  (this.a.splice(this.a.indexOf(i), 1),
                  this.g(new u(2, 6, 6005, t.message)));
              }.bind(t)
            )
          );
        }
        function bt(t, e, n) {
          try {
            var r = t.fa
              ? t.j.createSession("persistent-license")
              : t.j.createSession();
          } catch (e) {
            return void t.g(new u(2, 6, 6005, e.message));
          }
          L(t.f, r, "message", t.pc.bind(t)),
            L(t.f, r, "keystatuseschange", t.jc.bind(t)),
            t.a.push({ initData: n, da: r, loaded: !1, Eb: 1 / 0, ma: null }),
            r.generateRequest(e, n.buffer).catch(
              function (t) {
                if (!this.c) {
                  for (var e = 0; e < this.a.length; ++e)
                    if (this.a[e].da == r) {
                      this.a.splice(e, 1);
                      break;
                    }
                  this.g(new u(2, 6, 6006, t.message));
                }
              }.bind(t)
            );
        }
        function wt(t, e) {
          for (var n, r = e.target, i = 0; i < t.a.length; i++)
            if (t.a[i].da == r) {
              n = t.a[i];
              break;
            }
          ((i = I([t.b.licenseServerUri], t.h.retryParameters)).body =
            e.message),
            (i.method = "POST"),
            ("com.microsoft.playready" != t.b.keySystem &&
              "com.chromecast.playready" != t.b.keySystem) ||
              _t(i),
            t.ga
              .request(2, i)
              .then(
                function (t) {
                  return this.c
                    ? Promise.reject()
                    : r.update(t.data).then(
                        function () {
                          n &&
                            (n.ma && n.ma.resolve(),
                            setTimeout(
                              function () {
                                (n.loaded = !0),
                                  this.a.every(function (t) {
                                    return t.loaded;
                                  }) && this.i.resolve();
                              }.bind(this),
                              5e3
                            ));
                        }.bind(this)
                      );
                }.bind(t),
                function (t) {
                  if (this.c) return Promise.resolve();
                  (t = new u(2, 6, 6007, t)),
                    this.g(t),
                    n && n.ma && n.ma.reject(t);
                }.bind(t)
              )
              .catch(
                function (t) {
                  if (this.c) return Promise.resolve();
                  (t = new u(2, 6, 6008, t.message)),
                    this.g(t),
                    n && n.ma && n.ma.reject(t);
                }.bind(t)
              );
        }
        function _t(t) {
          var e = X(t.body, !0, !0);
          if (-1 == e.indexOf("PlayReadyKeyMessage"))
            t.headers["Content-Type"] = "text/xml; charset=utf-8";
          else {
            for (
              var n = (e = new DOMParser().parseFromString(
                  e,
                  "application/xml"
                )).getElementsByTagName("HttpHeader"),
                r = 0;
              r < n.length;
              ++r
            )
              t.headers[n[r].querySelector("name").textContent] =
                n[r].querySelector("value").textContent;
            t.body = rt(e.querySelector("Challenge").textContent).buffer;
          }
        }
        function Et() {
          var t = [],
            e = [
              { contentType: 'video/mp4; codecs="avc1.42E01E"' },
              { contentType: 'video/webm; codecs="vp8"' },
            ],
            n = [
              {
                videoCapabilities: e,
                persistentState: "required",
                sessionTypes: ["persistent-license"],
              },
              { videoCapabilities: e },
            ],
            r = {};
          return (
            "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime"
              .split(" ")
              .forEach(function (e) {
                var i = navigator
                  .requestMediaKeySystemAccess(e, n)
                  .then(function (t) {
                    var n =
                      !!(n = t.getConfiguration().sessionTypes) &&
                      0 <= n.indexOf("persistent-license");
                    return (
                      0 <= navigator.userAgent.indexOf("Tizen 3") && (n = !1),
                      (r[e] = { persistentState: n }),
                      t.createMediaKeys()
                    );
                  })
                  .catch(function () {
                    r[e] = null;
                  });
                t.push(i);
              }),
            Promise.all(t).then(function () {
              return r;
            })
          );
        }
        function Tt(t, e) {
          var n = t.keySystem();
          return (
            !e.drmInfos.length ||
            e.drmInfos.some(function (t) {
              return t.keySystem == n;
            })
          );
        }
        function St(t, e) {
          if (!t.length) return e;
          if (!e.length) return t;
          for (var n = [], r = 0; r < t.length; r++)
            for (o = 0; o < e.length; o++)
              if (t[r].keySystem == e[o].keySystem) {
                var i = t[r],
                  o = e[o],
                  a = (a = (a = []).concat(i.initData || [])).concat(
                    o.initData || []
                  ),
                  s = (s = (s = []).concat(i.keyIds)).concat(o.keyIds);
                n.push({
                  keySystem: i.keySystem,
                  licenseServerUri: i.licenseServerUri || o.licenseServerUri,
                  distinctiveIdentifierRequired:
                    i.distinctiveIdentifierRequired ||
                    o.distinctiveIdentifierRequired,
                  persistentStateRequired:
                    i.persistentStateRequired || o.persistentStateRequired,
                  videoRobustness: i.videoRobustness || o.videoRobustness,
                  audioRobustness: i.audioRobustness || o.audioRobustness,
                  serverCertificate: i.serverCertificate || o.serverCertificate,
                  initData: a,
                  keyIds: s,
                });
                break;
              }
          return n;
        }
        function xt(t) {
          return !t || (1 == t.length && 1e-6 > t.end(0) - t.start(0))
            ? null
            : t.length
            ? t.end(t.length - 1)
            : null;
        }
        function Ot(t, e) {
          return (
            !(
              !t ||
              !t.length ||
              (1 == t.length && 1e-6 > t.end(0) - t.start(0))
            ) &&
            e >= t.start(0) &&
            e <= t.end(t.length - 1)
          );
        }
        function Pt(t, e) {
          if (
            !t ||
            !t.length ||
            (1 == t.length && 1e-6 > t.end(0) - t.start(0))
          )
            return 0;
          for (var n = 0, r = t.length - 1; 0 <= r && t.end(r) > e; --r)
            n += t.end(r) - Math.max(t.start(r), e);
          return n;
        }
        function kt(t) {
          (this.f = null),
            (this.c = t),
            (this.h = 0),
            (this.g = 1 / 0),
            (this.a = this.b = null);
        }
        function Ct(t, e) {
          $a[t] = e.length ? Mt.bind(null, e) : e;
        }
        function It(t, e, n, r) {
          return Promise.resolve().then(
            function () {
              if (this.f && this.c)
                if (null == n || null == r) this.f.parseInit(e);
                else {
                  var t = this.f
                    .parseMedia(e, {
                      periodStart: this.h,
                      segmentStart: n,
                      segmentEnd: r,
                    })
                    .filter(
                      function (t) {
                        return t.startTime < this.g;
                      }.bind(this)
                    );
                  this.c.append(t),
                    null == this.b && (this.b = n),
                    (this.a = Math.min(r, this.g));
                }
            }.bind(t)
          );
        }
        function Mt(t) {
          this.Ra = t;
        }
        function At(t, e, n) {
          (this.g = t),
            (this.f = e),
            (this.j = n),
            (this.c = {}),
            (this.a = null),
            (this.b = {}),
            (this.h = new D()),
            (this.i = !1);
        }
        function Rt() {
          var t = {};
          return (
            'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'
              .split(",")
              .forEach(function (e) {
                t[e] = !!$a[e] || MediaSource.isTypeSupported(e);
                var n = e.split(";")[0];
                t[n] = t[n] || t[e];
              }),
            t
          );
        }
        function Nt(t, e) {
          t.a || (t.a = new kt(t.j)), (t.a.f = new $a[e]());
        }
        function jt(t, e) {
          if ("text" == e) var n = t.a.b;
          else
            (n = Dt(t, e)),
              (n =
                !n || (1 == n.length && 1e-6 > n.end(0) - n.start(0))
                  ? null
                  : 1 == n.length && 0 > n.start(0)
                  ? 0
                  : n.length
                  ? n.start(0)
                  : null);
          return n;
        }
        function Dt(t, e) {
          try {
            return t.c[e].buffered;
          } catch (t) {
            return null;
          }
        }
        function Lt(t, e, n, r, i) {
          return "text" == e ? It(t.a, n, r, i) : Bt(t, e, t.ve.bind(t, e, n));
        }
        function Ut(t, e) {
          return "text" == e
            ? t.a.remove(0, 1 / 0)
            : Bt(t, e, t.vc.bind(t, e, 0, t.f.duration));
        }
        function Ft(t, e, n, r) {
          return "text" == e
            ? ((t.a.h = n), null != r && (t.a.g = r), Promise.resolve())
            : (null == r && (r = 1 / 0),
              Promise.all([
                Bt(t, e, t.Kc.bind(t, e)),
                Bt(t, e, t.ke.bind(t, e, n)),
                Bt(t, e, t.he.bind(t, e, r)),
              ]));
        }
        function Bt(t, e, n) {
          if (t.i) return Promise.reject();
          if (
            ((n = { start: n, p: new g() }), t.b[e].push(n), 1 == t.b[e].length)
          )
            try {
              n.start();
            } catch (r) {
              "QuotaExceededError" == r.name
                ? n.p.reject(new u(2, 3, 3017, e))
                : n.p.reject(new u(2, 3, 3015, r)),
                Ht(t, e);
            }
          return n.p;
        }
        function zt(t, e) {
          if (t.i) return Promise.reject();
          var n,
            r = [];
          for (n in t.c) {
            var i = new g(),
              o = {
                start: function (t) {
                  t.resolve();
                }.bind(null, i),
                p: i,
              };
            t.b[n].push(o), r.push(i), 1 == t.b[n].length && o.start();
          }
          return Promise.all(r).then(
            function () {
              var t;
              try {
                e();
              } catch (t) {
                var n = Promise.reject(new u(2, 3, 3015, t));
              }
              for (t in this.c) Ht(this, t);
              return n;
            }.bind(t),
            function () {
              return Promise.reject();
            }.bind(t)
          );
        }
        function Ht(t, e) {
          t.b[e].shift();
          var n = t.b[e][0];
          if (n)
            try {
              n.start();
            } catch (r) {
              n.p.reject(new u(2, 3, 3015, r)), Ht(t, e);
            }
        }
        function qt(t, e, n) {
          return (
            n == e ||
            (t >= Xa && n == e.split("-")[0]) ||
            (t >= Ja && n.split("-")[0] == e.split("-")[0])
          );
        }
        function Vt(t) {
          t = t.toLowerCase().split("-");
          var e = Qa[t[0]];
          return e && (t[0] = e), t.join("-");
        }
        function Kt(t, e, n) {
          var r = t.video;
          return !(
            (r &&
              (r.width < e.minWidth ||
                r.width > e.maxWidth ||
                r.width > n.width ||
                r.height < e.minHeight ||
                r.height > e.maxHeight ||
                r.height > n.height ||
                r.width * r.height < e.minPixels ||
                r.width * r.height > e.maxPixels)) ||
            t.bandwidth < e.minBandwidth ||
            t.bandwidth > e.maxBandwidth
          );
        }
        function Wt(t, e, n) {
          var r = !1;
          return (
            t.variants.forEach(function (t) {
              var i = t.allowedByApplication;
              (t.allowedByApplication = Kt(t, e, n)),
                i != t.allowedByApplication && (r = !0);
            }),
            r
          );
        }
        function Gt(t, e, n) {
          var r = e.video,
            i = e.audio;
          for (e = 0; e < n.variants.length; ++e) {
            var o = n.variants[e],
              a = t,
              s = i,
              u = r;
            (a && a.D && !Tt(a, o)
              ? 0
              : Yt(o.audio, a, s) && Yt(o.video, a, u)) ||
              (n.variants.splice(e, 1), --e);
          }
          for (e = 0; e < n.textStreams.length; ++e)
            (t = n.textStreams[e]),
              $a[Y(t.mimeType, t.codecs)] || (n.textStreams.splice(e, 1), --e);
        }
        function Yt(t, e, n) {
          if (!t) return !0;
          var r = null;
          e && e.D && (r = e.s), (e = Y(t.mimeType, t.codecs));
          var i,
            o = t.mimeType;
          for (i in Ya) {
            var a = t[i],
              s = Ya[i];
            a && (o += "; " + s + '="' + a + '"');
          }
          return !(
            (!$a[Y(t.mimeType, t.codecs)] && !MediaSource.isTypeSupported(o)) ||
            (r && t.encrypted && 0 > r.indexOf(e)) ||
            (n &&
              (t.mimeType != n.mimeType ||
                t.codecs.split(".")[0] != n.codecs.split(".")[0]))
          );
        }
        function $t(t, e, n) {
          var r = null;
          return Zt(t.variants).map(function (t) {
            var i;
            i =
              t.video && t.audio
                ? n == t.video.id && e == t.audio.id
                : (t.video && n == t.video.id) || (t.audio && e == t.audio.id);
            var o = "";
            t.video && (o += t.video.codecs),
              t.audio &&
                ("" != o && (o += ", "),
                (o += t.audio.codecs),
                (r = t.audio.label));
            var a = t.audio ? t.audio.codecs : null,
              s = t.video ? t.video.codecs : null,
              u = null;
            t.video
              ? (u = t.video.mimeType)
              : t.audio && (u = t.audio.mimeType);
            var c = null;
            t.audio ? (c = t.audio.kind) : t.video && (c = t.video.kind);
            var l = A(
              (t.audio ? t.audio.roles : []).concat(
                t.video ? t.video.roles : []
              )
            );
            return {
              id: t.id,
              active: i,
              type: "variant",
              bandwidth: t.bandwidth,
              language: t.language,
              label: r,
              kind: c || null,
              width: t.video ? t.video.width : null,
              height: t.video ? t.video.height : null,
              frameRate: t.video ? t.video.frameRate : void 0,
              mimeType: u,
              codecs: o,
              audioCodec: a,
              videoCodec: s,
              primary: t.primary,
              roles: l,
              videoId: t.video ? t.video.id : null,
              audioId: t.audio ? t.audio.id : null,
              channelsCount: t.audio ? t.audio.channelsCount : null,
              audioBandwidth:
                t.audio && t.audio.bandwidth ? t.audio.bandwidth : null,
              videoBandwidth:
                t.video && t.video.bandwidth ? t.video.bandwidth : null,
            };
          });
        }
        function Xt(t, e) {
          return t.textStreams.map(function (t) {
            return {
              id: t.id,
              active: e == t.id,
              type: "text",
              language: t.language,
              label: t.label,
              kind: t.kind,
              mimeType: t.mimeType,
              codecs: t.codecs || null,
              audioCodec: null,
              videoCodec: null,
              primary: t.primary,
              roles: t.roles,
              channelsCount: null,
              audioBandwidth: null,
              videoBandwidth: null,
            };
          });
        }
        function Jt(t, e) {
          for (var n = 0; n < t.variants.length; n++)
            if (t.variants[n].id == e.id) return t.variants[n];
          return null;
        }
        function Qt(t, e) {
          for (var n = 0; n < t.textStreams.length; n++)
            if (t.textStreams[n].id == e.id) return t.textStreams[n];
          return null;
        }
        function Zt(t) {
          return t.filter(function (t) {
            return t.allowedByApplication && t.allowedByKeySystem;
          });
        }
        function te(t, e, n, r) {
          var i = Zt(t.variants);
          (a = i.filter(function (t) {
            return t.primary;
          })).length || (a = i);
          var o = a.length ? a[0].language : "",
            a = a.filter(function (t) {
              return t.language == o;
            });
          if (e) {
            var s = Vt(e);
            [Ja, Xa, 0].forEach(function (t) {
              var e = !1;
              i.forEach(function (n) {
                s = Vt(s);
                var i = Vt(n.language);
                qt(t, s, i) &&
                  (e ? a.push(n) : ((a = [n]), (e = !0)), r && (r.audio = !0));
              });
            });
          }
          return n && (t = ne(a, n)).length
            ? t
            : (t = a
                .map(function (t) {
                  return (t.audio ? t.audio.roles : []).concat(
                    t.video ? t.video.roles : []
                  );
                })
                .reduce(x, [])).length
            ? ne(a, t[0])
            : a;
        }
        function ee(t, e, n, r) {
          var i = t.textStreams;
          (a = i.filter(function (t) {
            return t.primary;
          })).length || (a = i);
          var o = a.length ? a[0].language : "",
            a = a.filter(function (t) {
              return t.language == o;
            });
          if (e) {
            var s = Vt(e);
            [Ja, Xa, 0].forEach(function (t) {
              var e = !1;
              i.forEach(function (n) {
                var i = Vt(n.language);
                qt(t, s, i) &&
                  (e ? a.push(n) : ((a = [n]), (e = !0)), r && (r.text = !0));
              });
            });
          }
          return n && (t = re(a, n)).length
            ? t
            : (t = a
                .map(function (t) {
                  return t.roles;
                })
                .reduce(x, [])).length
            ? re(a, t[0])
            : a;
        }
        function ne(t, e) {
          return t.filter(function (t) {
            return (
              (t.audio && 0 <= t.audio.roles.indexOf(e)) ||
              (t.video && 0 <= t.video.roles.indexOf(e))
            );
          });
        }
        function re(t, e) {
          return t.filter(function (t) {
            return 0 <= t.roles.indexOf(e);
          });
        }
        function ie(t, e, n) {
          for (var r = 0; r < n.length; r++)
            if (n[r].audio == t && n[r].video == e) return n[r];
          return null;
        }
        function oe(t, e, n) {
          function r(t, e) {
            return null == t ? null == e : e.id == t;
          }
          for (var i = 0; i < n.length; i++)
            if (r(t, n[i].audio) && r(e, n[i].video)) return n[i];
          return null;
        }
        function ae(t, e) {
          for (var n = t.periods.length - 1; 0 < n; --n)
            if (e + Ga >= t.periods[n].startTime) return n;
          return 0;
        }
        function se(t, e) {
          for (var n = 0; n < t.periods.length; ++n) {
            var r = t.periods[n];
            if ("text" == e.type) {
              for (var i = 0; i < r.textStreams.length; ++i)
                if (r.textStreams[i] == e) return n;
            } else
              for (i = 0; i < r.variants.length; ++i) {
                var o = r.variants[i];
                if (
                  o.audio == e ||
                  o.video == e ||
                  (o.video && o.video.trickModeVideo == e)
                )
                  return n;
              }
          }
          return -1;
        }
        function ue() {
          (this.h = null),
            (this.c = !1),
            (this.b = new a()),
            (this.g = []),
            (this.i = !1),
            (this.a = this.f = null);
        }
        function ce(t, e) {
          return e
            .filter(function (e) {
              return Kt(e, t, { width: 1 / 0, height: 1 / 0 });
            })
            .sort(function (t, e) {
              return t.bandwidth - e.bandwidth;
            });
        }
        function le(e, n) {
          var r,
            i = n || {};
          for (r in i) this[r] = i[r];
          (this.defaultPrevented = this.cancelable = this.bubbles = !1),
            (this.timeStamp =
              t.performance && t.performance.now
                ? t.performance.now()
                : Date.now()),
            (this.type = e),
            (this.isTrusted = !1),
            (this.target = this.currentTarget = null),
            (this.a = !1);
        }
        function fe(t) {
          return JSON.stringify(t, function (t, e) {
            if ("manager" != t && "function" != typeof e) {
              if (e instanceof Event || e instanceof le) {
                var n,
                  r = {};
                for (n in e) {
                  var i = e[n];
                  (i && "object" == typeof i) || n in Event || (r[n] = i);
                }
                return r;
              }
              if (e instanceof TimeRanges)
                for (
                  r = {
                    __type__: "TimeRanges",
                    length: e.length,
                    start: [],
                    end: [],
                  },
                    n = 0;
                  n < e.length;
                  ++n
                )
                  r.start.push(e.start(n)), r.end.push(e.end(n));
              else
                r =
                  "number" == typeof e
                    ? isNaN(e)
                      ? "NaN"
                      : isFinite(e)
                      ? e
                      : 0 > e
                      ? "-Infinity"
                      : "Infinity"
                    : e;
              return r;
            }
          });
        }
        function he(t) {
          return JSON.parse(t, function (t, e) {
            return "NaN" == e
              ? NaN
              : "-Infinity" == e
              ? -1 / 0
              : "Infinity" == e
              ? 1 / 0
              : e && "object" == typeof e && "TimeRanges" == e.__type__
              ? pe(e)
              : e;
          });
        }
        function pe(t) {
          return {
            length: t.length,
            start: function (e) {
              return t.start[e];
            },
            end: function (e) {
              return t.end[e];
            },
          };
        }
        function de(t, e, n, r, i, o) {
          (this.D = t),
            (this.h = e),
            (this.I = n),
            (this.l = !1),
            (this.B = r),
            (this.C = i),
            (this.s = o),
            (this.c = this.i = !1),
            (this.w = ""),
            (this.a = this.j = null),
            (this.b = { video: {}, player: {} }),
            (this.m = 0),
            (this.f = {}),
            (this.g = null);
        }
        function me(t) {
          for (var e in t.f) {
            var n = t.f[e];
            delete t.f[e], n.reject(new u(1, 7, 7e3));
          }
        }
        function ve(t, e) {
          var n = fe(e);
          t.a.sendMessage(
            "urn:x-cast:com.google.shaka.v2",
            n,
            function () {},
            s
          );
        }
        function ye() {
          (this.ub = new j()), (this.Za = this);
        }
        function ge(t, e, n) {
          ye.call(this),
            (this.c = t),
            (this.b = e),
            (this.i = this.g = this.f = this.j = this.h = null),
            (this.a = new de(
              n,
              this.qe.bind(this),
              this.re.bind(this),
              this.se.bind(this),
              this.te.bind(this),
              this.bc.bind(this)
            )),
            be(this);
        }
        function be(t) {
          t.a.init(),
            (t.i = new D()),
            Za.forEach(
              function (t) {
                L(this.i, this.c, t, this.He.bind(this));
              }.bind(t)
            ),
            rs.forEach(
              function (t) {
                L(this.i, this.b, t, this.Rd.bind(this));
              }.bind(t)
            ),
            (t.h = {});
          for (var e in t.c)
            Object.defineProperty(t.h, e, {
              configurable: !1,
              enumerable: !0,
              get: t.Ge.bind(t, e),
              set: t.Ie.bind(t, e),
            });
          t.j = {};
          for (e in t.b)
            Object.defineProperty(t.j, e, {
              configurable: !1,
              enumerable: !0,
              get: t.Qd.bind(t, e),
            });
          (t.f = new ye()), (t.f.Za = t.h), (t.g = new ye()), (t.g.Za = t.j);
        }
        function we(t, e, n, r) {
          ye.call(this),
            (this.a = t),
            (this.b = e),
            (this.j = { video: t, player: e }),
            (this.l = n || function () {}),
            (this.m =
              r ||
              function (t) {
                return t;
              }),
            (this.i = !1),
            (this.f = !0),
            (this.h = this.g = this.c = null),
            _e(this);
        }
        function _e(e) {
          var n = cast.receiver.CastReceiverManager.getInstance();
          (n.onSenderConnected = e.oc.bind(e)),
            (n.onSenderDisconnected = e.oc.bind(e)),
            (n.onSystemVolumeChanged = e.Sc.bind(e)),
            (e.g = n.getCastMessageBus("urn:x-cast:com.google.cast.media")),
            (e.g.onMessage = e.rd.bind(e)),
            (e.c = n.getCastMessageBus("urn:x-cast:com.google.shaka.v2")),
            (e.c.onMessage = e.Ed.bind(e)),
            n.start(),
            Za.forEach(
              function (t) {
                this.a.addEventListener(t, this.rc.bind(this, "video"));
              }.bind(e)
            ),
            rs.forEach(
              function (t) {
                this.b.addEventListener(t, this.rc.bind(this, "player"));
              }.bind(e)
            ),
            cast.__platform__ &&
            cast.__platform__.canDisplayType(
              'video/mp4; codecs="avc1.640028"; width=3840; height=2160'
            )
              ? e.b.Pb(3840, 2160)
              : e.b.Pb(1920, 1080),
            e.b.addEventListener(
              "loading",
              function () {
                (this.f = !1), Ee(this);
              }.bind(e)
            ),
            e.a.addEventListener(
              "playing",
              function () {
                (this.f = !1), Ee(this);
              }.bind(e)
            ),
            e.a.addEventListener(
              "pause",
              function () {
                Ee(this);
              }.bind(e)
            ),
            e.b.addEventListener(
              "unloading",
              function () {
                (this.f = !0), Ee(this);
              }.bind(e)
            ),
            e.a.addEventListener(
              "ended",
              function () {
                t.setTimeout(
                  function () {
                    this.a && this.a.ended && ((this.f = !0), Ee(this));
                  }.bind(this),
                  5e3
                );
              }.bind(e)
            );
        }
        function Ee(t) {
          Promise.resolve().then(
            function () {
              this.dispatchEvent(new le("caststatuschanged")), xe(this, 0);
            }.bind(t)
          );
        }
        function Te(t, e, n) {
          for (var r in e.player) t.b[r](e.player[r]);
          t.l(n), (n = Promise.resolve());
          var i = t.a.autoplay;
          e.manifest &&
            ((t.a.autoplay = !1),
            (n = t.b.load(e.manifest, e.startTime)).catch(
              function (t) {
                this.b.dispatchEvent(new le("error", { detail: t }));
              }.bind(t)
            )),
            n.then(
              function () {
                var t;
                for (t in e.video) {
                  var n = e.video[t];
                  this.a[t] = n;
                }
                for (t in e.playerAfterLoad)
                  (n = e.playerAfterLoad[t]), this.b[t](n);
                (this.a.autoplay = i),
                  e.manifest && (this.a.play(), xe(this, 0));
              }.bind(t)
            );
        }
        function Se(t, e, n, r) {
          t.i &&
            ((t = fe(e)), r ? n.getCastChannel(r).send(t) : n.broadcast(t));
        }
        function xe(t, e, n) {
          var r = fs,
            r = {
              mediaSessionId: 0,
              playbackRate: t.a.playbackRate,
              playerState: t.f
                ? r.IDLE
                : t.b.Na
                ? r.Gc
                : t.a.paused
                ? r.Hc
                : r.Ic,
              currentTime: t.a.currentTime,
              supportedMediaCommands: 15,
              volume: { level: t.a.volume, muted: t.a.muted },
            };
          n && (r.media = n),
            Se(t, { requestId: e, type: "MEDIA_STATUS", status: [r] }, t.g);
        }
        function Oe(t, e) {
          var n = Pe(t, e);
          return 1 != n.length ? null : n[0];
        }
        function Pe(t, e) {
          return Array.prototype.filter.call(t.childNodes, function (t) {
            return t.tagName == e;
          });
        }
        function ke(t) {
          var e = t.firstChild;
          return e && e.nodeType == Node.TEXT_NODE
            ? t.textContent.trim()
            : null;
        }
        function Ce(t, e, n, r) {
          var i = null;
          return (
            null != (t = t.getAttribute(e)) && (i = n(t)),
            null == i ? (void 0 != r ? r : null) : i
          );
        }
        function Ie(t) {
          return t
            ? (/^\d+\-\d+\-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t) && (t += "Z"),
              (t = Date.parse(t)),
              isNaN(t) ? null : Math.floor(t / 1e3))
            : null;
        }
        function Me(t) {
          return t &&
            (t =
              /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(
                t
              ))
            ? ((t =
                31536e3 * Number(t[1] || null) +
                2592e3 * Number(t[2] || null) +
                86400 * Number(t[3] || null) +
                3600 * Number(t[4] || null) +
                60 * Number(t[5] || null) +
                Number(t[6] || null)),
              isFinite(t) ? t : null)
            : null;
        }
        function Ae(t) {
          var e = /([0-9]+)-([0-9]+)/.exec(t);
          return e
            ? ((t = Number(e[1])),
              isFinite(t)
                ? ((e = Number(e[2])),
                  isFinite(e) ? { start: t, end: e } : null)
                : null)
            : null;
        }
        function Re(t) {
          return (t = Number(t)) % 1 ? null : t;
        }
        function Ne(t) {
          return !((t = Number(t)) % 1) && 0 < t ? t : null;
        }
        function je(t) {
          return !((t = Number(t)) % 1) && 0 <= t ? t : null;
        }
        function De(t) {
          var e;
          return (
            (t = (e = t.match(/^(\d+)\/(\d+)$/))
              ? Number(e[1] / e[2])
              : Number(t)),
            isNaN(t) ? null : t
          );
        }
        function Le(t, e, n) {
          var r = null,
            i = [],
            o = [],
            a = (t = Be(t))
              .map(function (t) {
                return t.keyId;
              })
              .filter(P);
          if (a.length && 1 < a.filter(k).length) throw new u(2, 4, 4010);
          n ||
            ((o = t.filter(function (t) {
              return (
                "urn:mpeg:dash:mp4protection:2011" != t.yc ||
                ((r = t.init || r), !1)
              );
            })).length &&
              ((i = Fe(r, e, o)).length || (i = [H("", r)]))),
            !t.length ||
              (!n && o.length) ||
              (i = V(hs).map(function (t) {
                return H(t, r);
              }));
          var s = a[0] || null;
          return (
            s &&
              i.forEach(function (t) {
                t.initData.forEach(function (t) {
                  t.keyId = s;
                });
              }),
            { Yb: s, Ye: r, drmInfos: i, $b: !0 }
          );
        }
        function Ue(t, e, n, r) {
          var i = Le(t, e, r);
          if (n.$b)
            (t = 1 == n.drmInfos.length && !n.drmInfos[0].keySystem),
              (e = !i.drmInfos.length),
              (!n.drmInfos.length || (t && !e)) && (n.drmInfos = i.drmInfos),
              (n.$b = !1);
          else if (
            0 < i.drmInfos.length &&
            ((n.drmInfos = n.drmInfos.filter(function (t) {
              return i.drmInfos.some(function (e) {
                return e.keySystem == t.keySystem;
              });
            })),
            !n.drmInfos.length)
          )
            throw new u(2, 4, 4008);
          return i.Yb || n.Yb;
        }
        function Fe(t, e, n) {
          return n
            .map(function (n) {
              var r = hs[n.yc];
              return r ? [H(r, n.init || t)] : e(n.node) || [];
            })
            .reduce(x, []);
        }
        function Be(t) {
          return t
            .map(function (t) {
              var e = t.getAttribute("schemeIdUri"),
                n = t.getAttribute("cenc:default_KID"),
                r = Pe(t, "cenc:pssh").map(ke);
              if (!e) return null;
              if (
                ((e = e.toLowerCase()),
                n && 0 <= (n = n.replace(/-/g, "").toLowerCase()).indexOf(" "))
              )
                throw new u(2, 4, 4009);
              var i = [];
              try {
                i = r.map(function (t) {
                  return { initDataType: "cenc", initData: rt(t), keyId: null };
                });
              } catch (t) {
                throw new u(2, 4, 4007);
              }
              return {
                node: t,
                yc: e,
                keyId: n,
                init: 0 < i.length ? i : null,
              };
            })
            .filter(P);
        }
        function ze(e, n, r, i, o) {
          null != o && (o = Math.round(o));
          var a = { RepresentationID: n, Number: r, Bandwidth: i, Time: o };
          return e.replace(
            /\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,
            function (e, n, r) {
              if ("$$" == e) return "$";
              var i = a[n];
              return null == i
                ? e
                : ("RepresentationID" == n && r && (r = void 0),
                  (e = i.toString()),
                  (r = t.parseInt(r, 10) || 1),
                  Array(Math.max(0, r - e.length) + 1).join("0") + e);
            }
          );
        }
        function He(t, e) {
          var n = qe(t, e, "timescale"),
            r = 1;
          n && (r = Ne(n) || 1),
            (n = Ne((n = qe(t, e, "duration")) || "")) && (n /= r);
          var i = qe(t, e, "startNumber"),
            o = qe(t, e, "presentationTimeOffset"),
            a = je(i || "");
          (null != i && null != a) || (a = 1);
          i = null;
          if ((c = Ve(t, e, "SegmentTimeline"))) {
            for (
              var i = r,
                s = Number(o),
                u = t.S.duration || 1 / 0,
                c = Pe(c, "S"),
                l = [],
                f = 0,
                h = 0;
              h < c.length;
              ++h
            ) {
              var p = Ce((m = c[h]), "t", je),
                d = Ce(m, "d", je),
                m = Ce(m, "r", Re);
              if ((null != p && (p -= s), !d)) break;
              if (((p = null != p ? p : f), 0 > (m = m || 0)))
                if (h + 1 < c.length) {
                  if (null == (m = Ce(c[h + 1], "t", je))) break;
                  if (p >= m) break;
                  m = Math.ceil((m - p) / d) - 1;
                } else {
                  if (1 / 0 == u) break;
                  if (p / i >= u) break;
                  m = Math.ceil((u * i - p) / d) - 1;
                }
              0 < l.length && p != f && (l[l.length - 1].end = p / i);
              for (var v = 0; v <= m; ++v)
                (f = p + d),
                  l.push({ start: p / i, end: f / i, Ee: p }),
                  (p = f);
            }
            i = l;
          }
          return {
            timescale: r,
            P: n,
            za: a,
            presentationTimeOffset: Number(o) / r || 0,
            Ub: Number(o),
            H: i,
          };
        }
        function qe(t, e, n) {
          return [e(t.A), e(t.U), e(t.W)]
            .filter(P)
            .map(function (t) {
              return t.getAttribute(n);
            })
            .reduce(function (t, e) {
              return t || e;
            });
        }
        function Ve(t, e, n) {
          return [e(t.A), e(t.U), e(t.W)]
            .filter(P)
            .map(function (t) {
              return Oe(t, n);
            })
            .reduce(function (t, e) {
              return t || e;
            });
        }
        function Ke(t, e) {
          var n = new DOMParser();
          try {
            var r = $(t),
              i = n.parseFromString(r, "text/xml");
          } catch (t) {}
          if (i && i.documentElement.tagName == e) var o = i.documentElement;
          return o && 0 < o.getElementsByTagName("parsererror").length
            ? null
            : o;
        }
        function We(t, e, n, r, i, o) {
          for (
            var a = t.getAttribute("xlink:href"),
              s = t.getAttribute("xlink:actuate") || "onRequest",
              c = 0;
            c < t.attributes.length;
            c++
          ) {
            var l = t.attributes[c].nodeName;
            -1 != l.indexOf("xlink:") && (t.removeAttribute(l), --c);
          }
          if (5 <= o) return Promise.reject(new u(2, 4, 4028));
          if ("onLoad" != s) return Promise.reject(new u(2, 4, 4027));
          var f = z([r], [a]);
          return i.request(0, I(f, e)).then(
            function (r) {
              if (!(r = Ke(r.data, t.tagName)))
                return Promise.reject(new u(2, 4, 4001, a));
              for (; t.childNodes.length; ) t.removeChild(t.childNodes[0]);
              for (; r.childNodes.length; ) {
                var s = r.childNodes[0];
                r.removeChild(s), t.appendChild(s);
              }
              for (s = 0; s < r.attributes.length; s++) {
                var c = r.attributes[s].nodeName,
                  l = r.getAttribute(c);
                t.setAttribute(c, l);
              }
              return Ge(t, e, n, f[0], i, o + 1);
            }.bind(t)
          );
        }
        function Ge(t, e, n, r, i, o) {
          if (((o = o || 0), t.getAttribute("xlink:href"))) {
            u = We(t, e, n, r, i, o);
            return (
              n &&
                (u = u.catch(function () {
                  return Ge(t, e, n, r, i, o);
                })),
              u
            );
          }
          for (u = 0; u < t.childNodes.length; u++) {
            var a = t.childNodes[u];
            a instanceof Element &&
              "urn:mpeg:dash:resolve-to-zero:2013" ==
                a.getAttribute("xlink:href") &&
              (t.removeChild(a), --u);
          }
          for (var s = [], u = 0; u < t.childNodes.length; u++)
            (a = t.childNodes[u]).nodeType == Node.ELEMENT_NODE &&
              ((a = Ge(a, e, n, r, i, o)), s.push(a));
          return Promise.all(s).then(function () {
            return t;
          });
        }
        function Ye(t, e, n) {
          (this.a = t), (this.V = e), (this.K = n);
        }
        function $e(t, e, n, r, i, o) {
          (this.position = t),
            (this.startTime = e),
            (this.endTime = n),
            (this.a = r),
            (this.V = i),
            (this.K = o);
        }
        function Xe(t, e) {
          (this.L = t), (this.a = e == ps), (this.v = 0);
        }
        function Je() {
          throw new u(2, 3, 3e3);
        }
        function Qe() {
          (this.b = []), (this.a = []);
        }
        function Ze(t) {
          for (; t.u.ba(); ) t.Ra.nb(t.start, t.u);
        }
        function tn(t) {
          for (var e = t.u.F(); 0 < e; --e) t.Ra.nb(t.start, t.u);
        }
        function en(t) {
          return function (e) {
            t(e.u.Ja(e.u.L.byteLength - e.u.v));
          };
        }
        function nn(t) {
          for (var e = 0, n = 0; n < t.length; n++)
            e = (e << 8) | t.charCodeAt(n);
          return e;
        }
        function rn(t, e, n, r) {
          var i,
            o = new Qe().aa("sidx", function (t) {
              i = on(e, r, n, t);
            });
          if ((t && o.parse(t), i)) return i;
          throw new u(2, 3, 3004);
        }
        function on(t, e, n, r) {
          var i = [];
          r.u.J(4);
          var o = r.u.F();
          if (!o) throw new u(2, 3, 3005);
          if (r.version)
            var a = r.u.Ta(),
              s = r.u.Ta();
          else (a = r.u.F()), (s = r.u.F());
          r.u.J(2);
          var c = r.u.tc();
          for (e = a - e, t = t + r.size + s, s = 0; s < c; s++) {
            a = (2147483648 & (l = r.u.F())) >>> 31;
            var l = 2147483647 & l,
              f = r.u.F();
            if ((r.u.J(4), 1 == a)) throw new u(2, 3, 3006);
            i.push(
              new $e(
                i.length,
                e / o,
                (e + f) / o,
                function () {
                  return n;
                },
                t,
                t + l - 1
              )
            ),
              (e += f),
              (t += l);
          }
          return i;
        }
        function an(t) {
          this.a = t;
        }
        function sn(t, e) {
          if (t.a.length) {
            var n = t.a[t.a.length - 1];
            n.startTime > e ||
              (t.a[t.a.length - 1] = new $e(
                n.position,
                n.startTime,
                e,
                n.a,
                n.V,
                n.K
              ));
          }
        }
        function un(t) {
          (this.b = t),
            (this.a = new Xe(t, 0)),
            ds ||
              (ds = [
                new Uint8Array([255]),
                new Uint8Array([127, 255]),
                new Uint8Array([63, 255, 255]),
                new Uint8Array([31, 255, 255, 255]),
                new Uint8Array([15, 255, 255, 255, 255]),
                new Uint8Array([7, 255, 255, 255, 255, 255]),
                new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
                new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
              ]);
        }
        function cn(t) {
          var e = ln(t);
          if (7 < e.length) throw new u(2, 3, 3002);
          for (var n = 0, r = 0; r < e.length; r++) n = 256 * n + e[r];
          (e = n), (n = ln(t));
          t: {
            for (r = 0; r < ds.length; r++)
              if (at(n, ds[r])) {
                r = !0;
                break t;
              }
            r = !1;
          }
          if (r) n = t.b.byteLength - t.a.v;
          else {
            if (8 == n.length && 224 & n[1]) throw new u(2, 3, 3001);
            for (
              var r = n[0] & ((1 << (8 - n.length)) - 1), i = 1;
              i < n.length;
              i++
            )
              r = 256 * r + n[i];
            n = r;
          }
          return (
            (n = t.a.v + n <= t.b.byteLength ? n : t.b.byteLength - t.a.v),
            (r = new DataView(t.b.buffer, t.b.byteOffset + t.a.v, n)),
            t.a.J(n),
            new fn(e, r)
          );
        }
        function ln(t) {
          var e,
            n = t.a.Jb();
          for (e = 1; 8 >= e && !(n & (1 << (8 - e))); e++);
          if (8 < e) throw new u(2, 3, 3002);
          var r = new Uint8Array(e);
          for (r[0] = n, n = 1; n < e; n++) r[n] = t.a.Jb();
          return r;
        }
        function fn(t, e) {
          (this.id = t), (this.a = e);
        }
        function hn(t) {
          if (8 < t.a.byteLength) throw new u(2, 3, 3002);
          if (8 == t.a.byteLength && 224 & t.a.getUint8(0))
            throw new u(2, 3, 3001);
          for (var e = 0, n = 0; n < t.a.byteLength; n++)
            var r = t.a.getUint8(n), e = 256 * e + r;
          return e;
        }
        function pn() {}
        function dn(t, e, n, r, i, o) {
          function a() {
            return i;
          }
          var s = [];
          t = new un(t.a);
          for (var u = -1, c = -1; t.ba(); ) {
            var l = cn(t);
            if (187 == l.id) {
              var f = mn(l);
              f &&
                ((l = n * (f.Fe - o)),
                (f = e + f.Wd),
                0 <= u && s.push(new $e(s.length, u, l, a, c, f - 1)),
                (u = l),
                (c = f));
            }
          }
          return 0 <= u && s.push(new $e(s.length, u, r, a, c, null)), s;
        }
        function mn(t) {
          if (179 != (t = cn((e = new un(t.a)))).id) throw new u(2, 3, 3013);
          if (((t = hn(t)), 183 != (e = cn(e)).id)) throw new u(2, 3, 3012);
          for (var e = new un(e.a), n = 0; e.ba(); ) {
            var r = cn(e);
            if (241 == r.id) {
              n = hn(r);
              break;
            }
          }
          return { Fe: t, Wd: n };
        }
        function vn(t, e) {
          var n = Ve(t, e, "Initialization");
          if (!n) return null;
          var r = t.A.X;
          (i = n.getAttribute("sourceURL")) && (r = z(t.A.X, [i]));
          var i = 0,
            o = null;
          return (
            (n = Ce(n, "range", Ae)) && ((i = n.start), (o = n.end)),
            new Ye(
              function () {
                return r;
              },
              i,
              o
            )
          );
        }
        function yn(t, e) {
          var n = qe(t, bn, "presentationTimeOffset"),
            r = vn(t, bn),
            i = Number(n),
            o = t.A.contentType,
            a = t.A.mimeType.split("/")[1];
          if ("text" != o && "mp4" != a && "webm" != a) throw new u(2, 4, 4006);
          if ("webm" == a && !r) throw new u(2, 4, 4005);
          var o = Ve(t, bn, "RepresentationIndex"),
            s = qe(t, bn, "indexRange"),
            c = t.A.X,
            s = Ae(s || "");
          if (o) {
            var l = o.getAttribute("sourceURL");
            l && (c = z(t.A.X, [l])), (s = Ce(o, "range", Ae, s));
          }
          if (!s) throw new u(2, 4, 4002);
          return (
            (i = gn(t, e, r, c, s.start, s.end, a, i)),
            {
              createSegmentIndex: i.createSegmentIndex,
              findSegmentPosition: i.findSegmentPosition,
              getSegmentReference: i.getSegmentReference,
              initSegmentReference: r,
              presentationTimeOffset: Number(n) || 0,
            }
          );
        }
        function gn(t, e, n, r, i, o, a, s) {
          var u = t.presentationTimeline,
            c = !t.Ca || !t.S.yb,
            l = t.S.duration,
            f = e,
            h = null;
          return {
            createSegmentIndex: function () {
              var t = [f(r, i, o), "webm" == a ? f(n.a(), n.V, n.K) : null];
              return (
                (f = null),
                Promise.all(t).then(function (t) {
                  var e = t[0];
                  (t = t[1] || null),
                    (e =
                      "mp4" == a ? rn(e, i, r, s) : new pn().parse(e, t, r, s)),
                    u.Ga(0, e),
                    (h = new an(e)),
                    c && sn(h, l);
                })
              );
            },
            findSegmentPosition: function (t) {
              return h.find(t);
            },
            getSegmentReference: function (t) {
              return h.get(t);
            },
          };
        }
        function bn(t) {
          return t.Ua;
        }
        function wn(t, e) {
          var n = vn(t, _n),
            r = Tn(t),
            i = He(t, _n),
            o = i.za;
          o || (o = 1);
          var a = 0;
          if (
            (i.P
              ? (a = i.P * (o - 1))
              : i.H && 0 < i.H.length && (a = i.H[0].start),
            !(r = {
              P: i.P,
              startTime: a,
              za: o,
              presentationTimeOffset: i.presentationTimeOffset,
              H: i.H,
              Fa: r,
            }).P &&
              !r.H &&
              1 < r.Fa.length)
          )
            throw new u(2, 4, 4002);
          if (!r.P && !t.S.duration && !r.H && 1 == r.Fa.length)
            throw new u(2, 4, 4002);
          if (r.H && !r.H.length) throw new u(2, 4, 4002);
          return (
            (o = i = null),
            t.W.id && t.A.id && ((o = t.W.id + "," + t.A.id), (i = e[o])),
            (a = En(t.S.duration, r.za, t.A.X, r)),
            i
              ? (i.lb(a), i.wb(t.presentationTimeline.ia() - t.S.start))
              : (t.presentationTimeline.Ga(0, a),
                (i = new an(a)),
                o && t.Ca && (e[o] = i)),
            (t.Ca && t.S.yb) || sn(i, t.S.duration),
            {
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: i.find.bind(i),
              getSegmentReference: i.get.bind(i),
              initSegmentReference: n,
              presentationTimeOffset: r.presentationTimeOffset,
            }
          );
        }
        function _n(t) {
          return t.pa;
        }
        function En(t, e, n, r) {
          var i = r.Fa.length;
          r.H &&
            r.H.length != r.Fa.length &&
            (i = Math.min(r.H.length, r.Fa.length));
          for (var o = [], a = r.startTime, s = 0; s < i; s++) {
            var u = r.Fa[s],
              c = z(n, [u.md]),
              l = null != r.P ? a + r.P : r.H ? r.H[s].end : a + t;
            o.push(
              new $e(
                s + e,
                a,
                l,
                function (t) {
                  return t;
                }.bind(null, c),
                u.start,
                u.end
              )
            ),
              (a = l);
          }
          return o;
        }
        function Tn(t) {
          return [t.A.pa, t.U.pa, t.W.pa]
            .filter(P)
            .map(function (t) {
              return Pe(t, "SegmentURL");
            })
            .reduce(function (t, e) {
              return 0 < t.length ? t : e;
            })
            .map(function (e) {
              e.getAttribute("indexRange") && !t.ec && (t.ec = !0);
              var n = e.getAttribute("media");
              return (
                (e = Ce(e, "mediaRange", Ae, { start: 0, end: null })),
                { md: n, start: e.start, end: e.end }
              );
            });
        }
        function Sn(t, e, n, r) {
          var i = kn(t),
            o = He(t, xn),
            a = qe(t, xn, "media"),
            s = qe(t, xn, "index");
          if (
            ((o = {
              P: o.P,
              timescale: o.timescale,
              za: o.za,
              presentationTimeOffset: o.presentationTimeOffset,
              Ub: o.Ub,
              H: o.H,
              Bb: a,
              Qa: s,
            }),
            (a = 0 + (o.Qa ? 1 : 0)),
            (a += o.H ? 1 : 0),
            !(a += o.P ? 1 : 0))
          )
            throw new u(2, 4, 4002);
          if ((1 != a && (o.Qa && (o.H = null), (o.P = null)), !o.Qa && !o.Bb))
            throw new u(2, 4, 4002);
          if (o.Qa) {
            if ("mp4" != (n = t.A.mimeType.split("/")[1]) && "webm" != n)
              throw new u(2, 4, 4006);
            if ("webm" == n && !i) throw new u(2, 4, 4005);
            (r = ze(o.Qa, t.A.id, null, t.bandwidth || null, null)),
              (t = gn(
                t,
                e,
                i,
                (r = z(t.A.X, [r])),
                0,
                null,
                n,
                o.presentationTimeOffset
              ));
          } else
            o.P
              ? (r || t.presentationTimeline.Cb(o.P), (t = On(t, o)))
              : ((r = e = null),
                t.W.id && t.A.id && ((r = t.W.id + "," + t.A.id), (e = n[r])),
                (a = Pn(t, o)),
                e
                  ? (e.lb(a), e.wb(t.presentationTimeline.ia() - t.S.start))
                  : (t.presentationTimeline.Ga(0, a),
                    (e = new an(a)),
                    r && t.Ca && (n[r] = e)),
                (t.Ca && t.S.yb) || sn(e, t.S.duration),
                (t = {
                  createSegmentIndex: Promise.resolve.bind(Promise),
                  findSegmentPosition: e.find.bind(e),
                  getSegmentReference: e.get.bind(e),
                }));
          return {
            createSegmentIndex: t.createSegmentIndex,
            findSegmentPosition: t.findSegmentPosition,
            getSegmentReference: t.getSegmentReference,
            initSegmentReference: i,
            presentationTimeOffset: o.presentationTimeOffset,
          };
        }
        function xn(t) {
          return t.Va;
        }
        function On(t, e) {
          var n = t.S.duration,
            r = e.P,
            i = e.za,
            o = e.timescale,
            a = e.Bb,
            s = t.bandwidth || null,
            u = t.A.id,
            c = t.A.X;
          return {
            createSegmentIndex: Promise.resolve.bind(Promise),
            findSegmentPosition: function (t) {
              return 0 > t || (n && t >= n) ? null : Math.floor(t / r);
            },
            getSegmentReference: function (t) {
              var e = t * r;
              return 0 > e || (n && e >= n)
                ? null
                : new $e(
                    t,
                    e,
                    e + r,
                    function () {
                      var n = ze(a, u, t + i, s, e * o);
                      return z(c, [n]);
                    },
                    0,
                    null
                  );
            },
          };
        }
        function Pn(t, e) {
          for (var n = [], r = 0; r < e.H.length; r++) {
            var i = r + e.za;
            n.push(
              new $e(
                i,
                e.H[r].start,
                e.H[r].end,
                function (t, e, n, r, i, o) {
                  return (
                    (t = ze(t, e, i, n, o)),
                    z(r, [t]).map(function (t) {
                      return t.toString();
                    })
                  );
                }.bind(
                  null,
                  e.Bb,
                  t.A.id,
                  t.bandwidth || null,
                  t.A.X,
                  i,
                  e.H[r].Ee + e.Ub
                ),
                0,
                null
              )
            );
          }
          return n;
        }
        function kn(t) {
          var e = qe(t, xn, "initialization");
          if (!e) return null;
          var n = t.A.id,
            r = t.bandwidth || null,
            i = t.A.X;
          return new Ye(
            function () {
              var t = ze(e, n, null, r, null);
              return z(i, [t]);
            },
            0,
            null
          );
        }
        function Cn() {
          var t,
            e = {};
          for (t in ms) e[t] = !0;
          for (t in vs) e[t] = !0;
          return (
            [
              "application/dash+xml",
              "application/x-mpegurl",
              "application/vnd.apple.mpegurl",
              "application/vnd.ms-sstr+xml",
            ].forEach(function (t) {
              e[t] = !!ms[t];
            }),
            ["mpd", "m3u8", "ism"].forEach(function (t) {
              e[t] = !!vs[t];
            }),
            e
          );
        }
        function In(t, e, n, r) {
          var i = r;
          return (
            i ||
              (1 < (r = new c(t).$.split("/").pop().split(".")).length &&
                ((r = r.pop().toLowerCase()), (i = vs[r]))),
            i
              ? Promise.resolve(i)
              : ((n = I([t], n)),
                (n.method = "HEAD"),
                e.request(0, n).then(
                  function (e) {
                    return (
                      (e = e.headers["content-type"]) && (e = e.toLowerCase()),
                      (i = ms[e]) ? i : Promise.reject(new u(2, 4, 4e3, t))
                    );
                  },
                  function (t) {
                    return (t.severity = 2), Promise.reject(t);
                  }
                ))
          );
        }
        function Mn(t, e) {
          (this.c = t),
            (this.j = e),
            (this.f = this.a = 1 / 0),
            (this.b = 1),
            (this.i = 0),
            (this.h = !0),
            (this.g = 0);
        }
        function An() {
          (this.a = this.b = null),
            (this.g = []),
            (this.c = null),
            (this.i = []),
            (this.h = 1),
            (this.j = {}),
            (this.l = 0),
            (this.f = null);
        }
        function Rn(t) {
          return t.a.networkingEngine
            .request(0, I(t.g, t.b.retryParameters))
            .then(
              function (t) {
                if (this.a) return Nn(this, t.data, t.uri);
              }.bind(t)
            );
        }
        function Nn(t, e, n) {
          if (!(e = Ke(e, "MPD"))) throw new u(2, 4, 4001, n);
          return Ge(
            e,
            t.b.retryParameters,
            t.b.dash.xlinkFailGracefully,
            n,
            t.a.networkingEngine
          ).then(
            function (t) {
              return jn(this, t, n);
            }.bind(t)
          );
        }
        function jn(t, e, n) {
          (n = [n]),
            0 < (o = Pe(e, "Location").map(ke).filter(P)).length &&
              (n = t.g = o),
            (n = z(n, (o = Pe(e, "BaseURL").map(ke))));
          var r = Ce(e, "minBufferTime", Me);
          t.l = Ce(e, "minimumUpdatePeriod", Me, -1);
          var i = Ce(e, "availabilityStartTime", Ie),
            o = Ce(e, "timeShiftBufferDepth", Me),
            a = Ce(e, "suggestedPresentationDelay", Me),
            s = Ce(e, "maxSegmentDuration", Me),
            u = e.getAttribute("type") || "static";
          if (t.c) var c = t.c.presentationTimeline;
          else {
            var l = Math.max(10, 1.5 * r);
            c = new Mn(i, null != a ? a : l);
          }
          var a = (i = Dn(
              t,
              {
                Ca: "static" != u,
                presentationTimeline: c,
                W: null,
                S: null,
                U: null,
                A: null,
                bandwidth: 0,
                ec: !1,
              },
              n,
              e
            )).duration,
            f = i.periods;
          return (
            c.ob("static" == u),
            c.ea(a || 1 / 0),
            c.Dc(null != o ? o : 1 / 0),
            c.Cb(s || 1),
            t.c
              ? Promise.resolve()
              : ((e = Pe(e, "UTCTiming")),
                Kn(t, n, e, c.R()).then(
                  function (t) {
                    this.a &&
                      (c.Bc(t),
                      (this.c = {
                        presentationTimeline: c,
                        periods: f,
                        offlineSessionIds: [],
                        minBufferTime: r || 0,
                      }));
                  }.bind(t)
                ))
          );
        }
        function Dn(t, e, n, r) {
          var i = Ce(r, "mediaPresentationDuration", Me),
            o = [],
            a = 0;
          r = Pe(r, "Period");
          for (var s = 0; s < r.length; s++) {
            var u = r[s],
              a = Ce(u, "start", Me, a),
              c = Ce(u, "duration", Me),
              l = null;
            if (s != r.length - 1) {
              var f = Ce(r[s + 1], "start", Me);
              null != f && (l = f - a);
            } else null != i && (l = i - a);
            if (
              (null == l && (l = c),
              (u = Ln(t, e, n, {
                start: a,
                duration: l,
                node: u,
                yb: null == l || s == r.length - 1,
              })),
              o.push(u),
              (c = e.W.id),
              -1 == t.i.indexOf(c) &&
                (t.i.push(c),
                t.c && (t.a.filterNewPeriod(u), t.c.periods.push(u))),
              null == l)
            ) {
              a = null;
              break;
            }
            a += l;
          }
          return (
            t.c || t.a.filterAllPeriods(o),
            null != i
              ? { periods: o, duration: i }
              : { periods: o, duration: a }
          );
        }
        function Ln(t, e, n, r) {
          (e.W = zn(r.node, null, n)),
            (e.S = r),
            e.W.id || (e.W.id = "__shaka_period_" + r.start),
            Pe(r.node, "EventStream").forEach(
              t.Od.bind(t, r.start, r.duration)
            );
          var i = (n = Pe(r.node, "AdaptationSet")
              .map(t.Md.bind(t, e))
              .filter(P))
              .map(function (t) {
                return t.Yd;
              })
              .reduce(x, []),
            o = i.filter(k);
          if (e.Ca && i.length != o.length) throw new u(2, 4, 4018);
          var a = n.filter(function (t) {
            return !t.Tb;
          });
          if (
            (n
              .filter(function (t) {
                return t.Tb;
              })
              .forEach(function (t) {
                var e = t.streams[0],
                  n = t.Tb;
                a.forEach(function (t) {
                  t.id == n &&
                    t.streams.forEach(function (t) {
                      t.trickModeVideo = e;
                    });
                });
              }),
            (i = Un(a, "video")),
            (o = Un(a, "audio")),
            !i.length && !o.length)
          )
            throw new u(2, 4, 4004);
          for (
            o.length || (o = [null]), i.length || (i = [null]), e = [], n = 0;
            n < o.length;
            n++
          )
            for (var s = 0; s < i.length; s++) Fn(t, o[n], i[s], e);
          for (t = Un(a, "text"), i = [], n = 0; n < t.length; n++)
            i.push.apply(i, t[n].streams);
          return { startTime: r.start, textStreams: i, variants: e };
        }
        function Un(t, e) {
          return t.filter(function (t) {
            return t.contentType == e;
          });
        }
        function Fn(t, e, n, r) {
          if (e || n)
            if (e && n) {
              var i = e.drmInfos,
                o = n.drmInfos;
              if (i.length && o.length ? 0 < St(i, o).length : 1)
                for (
                  var a = St(e.drmInfos, n.drmInfos), i = 0;
                  i < e.streams.length;
                  i++
                )
                  for (var s = 0; s < n.streams.length; s++)
                    (o =
                      (n.streams[s].bandwidth || 0) +
                      (e.streams[i].bandwidth || 0)),
                      (o = {
                        id: t.h++,
                        language: e.language,
                        primary: e.Ab || n.Ab,
                        audio: e.streams[i],
                        video: n.streams[s],
                        bandwidth: o,
                        drmInfos: a,
                        allowedByApplication: !0,
                        allowedByKeySystem: !0,
                      }),
                      r.push(o);
            } else
              for (a = e || n, i = 0; i < a.streams.length; i++)
                (o = a.streams[i].bandwidth || 0),
                  (o = {
                    id: t.h++,
                    language: a.language || "und",
                    primary: a.Ab,
                    audio: e ? a.streams[i] : null,
                    video: n ? a.streams[i] : null,
                    bandwidth: o,
                    drmInfos: a.drmInfos,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0,
                  }),
                  r.push(o);
        }
        function Bn(e, n) {
          0 > e.l ||
            (e.f = t.setTimeout(
              e.ue.bind(e),
              1e3 * Math.max(Math.max(3, e.l) - n, 0)
            ));
        }
        function zn(t, e, n) {
          (e = e || {
            contentType: "",
            mimeType: "",
            codecs: "",
            containsEmsgBoxes: !1,
            frameRate: void 0,
            Db: null,
          }),
            (n = n || e.X);
          var r = Pe(t, "BaseURL").map(ke),
            i = t.getAttribute("contentType") || e.contentType,
            o = t.getAttribute("mimeType") || e.mimeType,
            a = t.getAttribute("codecs") || e.codecs,
            s = Ce(t, "frameRate", De) || e.frameRate,
            u = !!Pe(t, "InbandEventStream").length,
            c = Hn((c = Pe(t, "AudioChannelConfiguration"))) || e.Db;
          return (
            i || (i = Wn(o, a)),
            {
              X: z(n, r),
              Ua: Oe(t, "SegmentBase") || e.Ua,
              pa: Oe(t, "SegmentList") || e.pa,
              Va: Oe(t, "SegmentTemplate") || e.Va,
              width: Ce(t, "width", je) || e.width,
              height: Ce(t, "height", je) || e.height,
              contentType: i,
              mimeType: o,
              codecs: a,
              frameRate: s,
              containsEmsgBoxes: u || e.containsEmsgBoxes,
              id: t.getAttribute("id"),
              Db: c,
            }
          );
        }
        function Hn(t) {
          for (var e = 0; e < t.length; ++e) {
            var n = t[e],
              r = n.getAttribute("schemeIdUri");
            if (r && (n = n.getAttribute("value")))
              switch (r) {
                case "urn:mpeg:dash:outputChannelPositionList:2012":
                  return n.trim().split(/ +/).length;
                case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                case "urn:dts:dash:audio_channel_configuration:2012":
                  if (!(r = parseInt(n, 10))) continue;
                  return r;
                case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                case "urn:dolby:dash:audio_channel_configuration:2011":
                  if ((r = parseInt(n, 16))) {
                    for (t = 0; r; ) 1 & r && ++t, (r >>= 1);
                    return t;
                  }
              }
          }
          return null;
        }
        function qn(t) {
          var e = 0 + (t.Ua ? 1 : 0);
          return (
            (e += t.pa ? 1 : 0),
            (e += t.Va ? 1 : 0)
              ? (1 != e && (t.Ua && (t.pa = null), (t.Va = null)), !0)
              : "text" == t.contentType || "application" == t.contentType
          );
        }
        function Vn(t, e, n, r) {
          return (
            (e = z(e, [n])),
            (e = I(e, t.b.retryParameters)),
            (e.method = r),
            t.a.networkingEngine.request(0, e).then(function (t) {
              if ("HEAD" == r) {
                if (!t.headers || !t.headers.date) return 0;
                t = t.headers.date;
              } else t = $(t.data);
              return (t = Date.parse(t)), isNaN(t) ? 0 : t - Date.now();
            })
          );
        }
        function Kn(t, e, n, r) {
          n = n.map(function (t) {
            return {
              scheme: t.getAttribute("schemeIdUri"),
              value: t.getAttribute("value"),
            };
          });
          var i = t.b.dash.clockSyncUri;
          return (
            r &&
              !n.length &&
              i &&
              n.push({ scheme: "urn:mpeg:dash:utc:http-head:2014", value: i }),
            S(
              n,
              function (t) {
                var n = t.value;
                switch (t.scheme) {
                  case "urn:mpeg:dash:utc:http-head:2014":
                  case "urn:mpeg:dash:utc:http-head:2012":
                    return Vn(this, e, n, "HEAD");
                  case "urn:mpeg:dash:utc:http-xsdate:2014":
                  case "urn:mpeg:dash:utc:http-iso:2014":
                  case "urn:mpeg:dash:utc:http-xsdate:2012":
                  case "urn:mpeg:dash:utc:http-iso:2012":
                    return Vn(this, e, n, "GET");
                  case "urn:mpeg:dash:utc:direct:2014":
                  case "urn:mpeg:dash:utc:direct:2012":
                    return (t = Date.parse(n)), isNaN(t) ? 0 : t - Date.now();
                  case "urn:mpeg:dash:utc:http-ntp:2014":
                  case "urn:mpeg:dash:utc:ntp:2014":
                  case "urn:mpeg:dash:utc:sntp:2014":
                  default:
                    return Promise.reject();
                }
              }.bind(t)
            ).catch(function () {
              return 0;
            })
          );
        }
        function Wn(t, e) {
          return $a[Y(t, e)] ? "text" : t.split("/")[0];
        }
        function Gn(t, e, n, r) {
          (this.uri = t),
            (this.type = e),
            (this.T = n),
            (this.segments = r || null);
        }
        function Yn(t, e, n, r) {
          (this.id = t),
            (this.name = e),
            (this.a = n),
            (this.value = r || null);
        }
        function $n(t, e) {
          (this.name = t), (this.value = e);
        }
        function Xn(t, e, n) {
          return (n = n || null), (t = t.getAttribute(e)) ? t.value : n;
        }
        function Jn(t, e) {
          (this.T = e), (this.uri = t);
        }
        function Qn(t, e) {
          return t.filter(function (t) {
            return t.name == e;
          });
        }
        function Zn(t, e) {
          var n = Qn(t, e);
          return n.length ? n[0] : null;
        }
        function tr(t, e, n) {
          return t.filter(function (t) {
            var r = t.getAttribute("TYPE");
            return (
              (t = t.getAttribute("GROUP-ID")), r.value == e && t.value == n
            );
          });
        }
        function er(t) {
          (this.b = t), (this.a = 0);
        }
        function nr(t, e) {
          e.lastIndex = t.a;
          var n = (n = e.exec(t.b))
            ? { position: n.index, length: n[0].length, ae: n }
            : null;
          return t.a != t.b.length && n && n.position == t.a
            ? ((t.a += n.length), n.ae)
            : null;
        }
        function rr(t) {
          return t.a == t.b.length
            ? null
            : (t = nr(t, /[^ \t\n]*/gm))
            ? t[0]
            : null;
        }
        function ir() {
          this.a = 0;
        }
        function or(t, e, n) {
          var r = (e = (e = $(e))
            .replace(/\r\n|\r(?=[^\n]|$)/gm, "\n")
            .trim()).split(/\n+/m);
          if (!/^#EXTM3U($|[ \t\n])/m.test(r[0])) throw new u(2, 4, 4015);
          e = 0;
          for (var i = [], o = 1; o < r.length; )
            if (/^#(?!EXT)/m.test(r[o])) o += 1;
            else {
              var a = r[o];
              if (((a = sr(t.a++, a)), 0 <= ys.indexOf(a.name))) e = 1;
              else if (0 <= gs.indexOf(a.name)) {
                if (1 != e) throw new u(2, 4, 4017);
                return (
                  (r = r.splice(o, r.length - o)),
                  (t = ar(t, r, i)),
                  new Gn(n, e, i, t)
                );
              }
              i.push(a),
                (o += 1),
                "EXT-X-STREAM-INF" == a.name &&
                  (a.a.push(new $n("URI", r[o])), (o += 1));
            }
          return new Gn(n, e, i);
        }
        function ar(t, e, n) {
          var r = [],
            i = [];
          return (
            e.forEach(
              function (t) {
                /^(#EXT)/.test(t)
                  ? ((t = sr(this.a++, t)),
                    0 <= ys.indexOf(t.name) ? n.push(t) : i.push(t))
                  : /^#(?!EXT)/m.test(t) ||
                    (r.push(new Jn(t.trim(), i)), (i = []));
              }.bind(t)
            ),
            r
          );
        }
        function sr(t, e) {
          if (!(i = e.match(/^#(EXT[^:]*)(?::(.*))?$/)))
            throw new u(2, 4, 4016);
          var n = i[1],
            r = i[2],
            i = [];
          if (r && 0 <= r.indexOf("="))
            for (
              var o,
                r = new er(r),
                a = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;
              (o = nr(r, a));

            )
              i.push(new $n(o[1], o[2] || o[3]));
          else if (r) return new Yn(t, n, i, r);
          return new Yn(t, n, i);
        }
        function ur(t) {
          return new Promise(function (e) {
            var n = ur.parse(t);
            e({
              uri: t,
              data: n.data,
              headers: { "content-type": n.contentType },
            });
          });
        }
        function cr() {
          (this.h = this.b = null),
            (this.D = 1),
            (this.g = {}),
            (this.C = {}),
            (this.j = {}),
            (this.s = {}),
            (this.a = null),
            (this.m = ""),
            (this.w = new ir()),
            (this.i = this.c = null),
            (this.f = !1),
            (this.B = null),
            (this.l = 0);
        }
        function lr(t, e, n) {
          Ar(t, n).then(
            function (t) {
              if (1 != (t = or(this.w, t.data, t.uri)).type)
                throw new u(2, 4, 4017);
              for (
                var n = Sr(
                    this,
                    t,
                    (n = Zn(t.T, "EXT-X-MEDIA-SEQUENCE")) ? Number(n.value) : 0
                  ),
                  r = e.zb,
                  i = [],
                  o = r.endTime,
                  a = 0;
                a < n.length;
                a++
              ) {
                var s = n[a];
                if (s.position > r.position) {
                  var c = s.endTime - s.startTime,
                    l = o,
                    f = o + c,
                    o = o + c;
                  i.push(new $e(s.position, l, f, s.a, s.V, s.K));
                }
              }
              (n = i),
                e.ce.lb(n),
                n.length && (e.zb = n[n.length - 1]),
                Zn(t.T, "EXT-X-ENDLIST") &&
                  ((t = e.zb.endTime), Nr(this, !1), this.a.ea(t));
            }.bind(t)
          );
        }
        function fr(t, e, n) {
          if (0 != (e = or(t.w, e, n)).type) throw new u(2, 4, 4022);
          return hr(t, e).then(
            function (t) {
              this.b.filterAllPeriods([t]),
                this.f && this.a.Cc(3 * this.l),
                (this.B = {
                  presentationTimeline: this.a,
                  periods: [t],
                  offlineSessionIds: [],
                  minBufferTime: 0,
                });
            }.bind(t)
          );
        }
        function hr(t, e) {
          var n = e.T,
            r = Qn(e.T, "EXT-X-MEDIA")
              .filter(
                function (t) {
                  return "SUBTITLES" == Ir(t, "TYPE");
                }.bind(t)
              )
              .map(
                function (t) {
                  return vr(this, t, e);
                }.bind(t)
              );
          return Promise.all(r).then(
            function (t) {
              var r = Qn(n, "EXT-X-STREAM-INF").map(
                function (t) {
                  return pr(this, t, e);
                }.bind(this)
              );
              return Promise.all(r).then(
                function (e) {
                  return (
                    (e = e.reduce(x, [])),
                    this.f || xr(this, e),
                    { startTime: 0, variants: e, textStreams: t }
                  );
                }.bind(this)
              );
            }.bind(t)
          );
        }
        function pr(t, e, n) {
          var r = Xn(e, "CODECS", "avc1.42E01E,mp4a.40.2").split(","),
            i = e.getAttribute("RESOLUTION"),
            o = null,
            a = null,
            s = Xn(e, "FRAME-RATE"),
            u = Number(Ir(e, "BANDWIDTH"));
          if (i)
            var c = i.value.split("x"),
              o = c[0],
              a = c[1];
          var l = Cr(t, n);
          n = Qn(n.T, "EXT-X-MEDIA");
          var f = Xn(e, "AUDIO"),
            h = Xn(e, "VIDEO");
          if (
            (f ? (n = tr(n, "AUDIO", f)) : h && (n = tr(n, "VIDEO", h)),
            (c = Or("text", r)))
          ) {
            var p = Xn(e, "SUBTITLES");
            p &&
              (p = tr(n, "SUBTITLES", p)).length &&
              (t.g[p[0].id].stream.codecs = c),
              r.splice(r.indexOf(c), 1);
          }
          n = n.map(
            function (t) {
              return yr(this, t, r, l);
            }.bind(t)
          );
          var d = [],
            m = [];
          return Promise.all(n)
            .then(
              function (t) {
                if ((f ? (d = t) : h && (m = t), d.length || m.length))
                  if (d.length)
                    if (Ir(e, "URI") == d[0].Mb) {
                      t = "audio";
                      var n = !0;
                    } else t = "video";
                  else t = "audio";
                else
                  (n = !1),
                    1 == r.length
                      ? ((t = Or("video", r)),
                        (t = i || s || t ? "video" : "audio"))
                      : ((t = "video"), (r = [r.join(",")]));
                return n ? Promise.resolve() : br(this, e, r, t, l);
              }.bind(t)
            )
            .then(
              function (t) {
                return (
                  t && ("audio" == t.stream.type ? (d = [t]) : (m = [t])),
                  dr(this, d, m, u, o, a, s)
                );
              }.bind(t)
            );
        }
        function dr(t, e, n, r, i, o, a) {
          n.forEach(
            function (t) {
              (t = t.stream) &&
                ((t.width = Number(i) || void 0),
                (t.height = Number(o) || void 0),
                (t.frameRate = Number(a) || void 0));
            }.bind(t)
          ),
            e.length || (e = [null]),
            n.length || (n = [null]);
          for (var s = [], u = 0; u < e.length; u++)
            for (var c = 0; c < n.length; c++) {
              var l = e[u] ? e[u].stream : null,
                f = n[c] ? n[c].stream : null,
                h = e[u] ? e[u].drmInfos : null,
                p = n[c] ? n[c].drmInfos : null;
              if (l && f) {
                if (!(h.length && p.length ? 0 < St(h, p).length : 1)) continue;
                var d = St(h, p);
              } else l ? (d = h) : f && (d = p);
              (h = (n[u] ? n[u].Mb : "") + " - " + (e[u] ? e[u].Mb : "")),
                t.C[h] || ((l = mr(t, l, f, r, d)), s.push(l), (t.C[h] = l));
            }
          return s;
        }
        function mr(t, e, n, r, i) {
          return {
            id: t.D++,
            language: e ? e.language : "und",
            primary: (!!e && e.primary) || (!!n && n.primary),
            audio: e,
            video: n,
            bandwidth: r,
            drmInfos: i,
            allowedByApplication: !0,
            allowedByKeySystem: !0,
          };
        }
        function vr(t, e, n) {
          return (
            Ir(e, "TYPE"),
            (n = Cr(t, n)),
            yr(t, e, [], n).then(function (t) {
              return t.stream;
            })
          );
        }
        function yr(t, e, n, r) {
          if (t.g[e.id])
            return Promise.resolve().then(
              function () {
                return this.g[e.id];
              }.bind(t)
            );
          var i = Ir(e, "TYPE").toLowerCase();
          "subtitles" == i && (i = "text");
          var o = Vt(Xn(e, "LANGUAGE", "und")),
            a = Xn(e, "NAME"),
            s = e.getAttribute("DEFAULT"),
            u = e.getAttribute("AUTOSELECT"),
            c = Xn(e, "CHANNELS"),
            c = "audio" == i ? gr(c) : null,
            l = Ir(e, "URI");
          return wr(
            t,
            (l = z([t.m], [l])[0]),
            n,
            i,
            r,
            o,
            !!s || !!u,
            a,
            c
          ).then(
            function (t) {
              return (this.g[e.id] = t), (this.s[l] = t);
            }.bind(t)
          );
        }
        function gr(t) {
          return t ? ((t = t.split("/")[0]), parseInt(t, 10)) : null;
        }
        function br(t, e, n, r, i) {
          var o = Ir(e, "URI");
          return wr(
            t,
            (o = z([t.m], [o])[0]),
            n,
            r,
            i,
            "und",
            !1,
            null,
            null
          ).then(
            function (t) {
              return (this.s[o] = t);
            }.bind(t)
          );
        }
        function wr(t, e, n, r, i, o, a, s, c) {
          var l = e;
          return (
            (e = z([t.m], [e])[0]),
            Ar(t, e).then(
              function (t) {
                if (1 != (t = or(this.w, t.data, t.uri)).type)
                  throw new u(2, 4, 4017);
                var e = Sr(
                    this,
                    t,
                    (p = Zn(t.T, "EXT-X-MEDIA-SEQUENCE")) ? Number(p.value) : 0
                  ),
                  f = new an(e);
                _r(this, t),
                  this.a || Er(this, e[e.length - 1].endTime),
                  (i = Cr(this, t) || i);
                var h = null;
                if (("text" != r && (h = Tr(t)), this.a.Ga(0, e), !this.f)) {
                  var p = e[e.length - 1].endTime - e[0].startTime,
                    d = this.a.Y();
                  (1 / 0 == d || d < p) && this.a.ea(p);
                }
                var m = Pr(r, n),
                  v = void 0;
                "text" == r && (v = "subtitle");
                var y = [];
                t.segments.forEach(function (t) {
                  (t = Qn(t.T, "EXT-X-KEY")), y.push.apply(y, t);
                });
                var g = !1,
                  b = [],
                  w = null;
                if (
                  (y.forEach(function (t) {
                    if ("NONE" != Ir(t, "METHOD")) {
                      g = !0;
                      var e = Ir(t, "KEYFORMAT");
                      (t = (e = _s[e]) ? e(t) : null) &&
                        (t.keyIds.length && (w = t.keyIds[0]), b.push(t));
                    }
                  }),
                  g && !b.length)
                )
                  throw new u(2, 4, 4026);
                return kr(this, r, m, e[0].a()[0]).then(
                  function (t) {
                    return (
                      (t = {
                        id: this.D++,
                        createSegmentIndex: Promise.resolve.bind(Promise),
                        findSegmentPosition: f.find.bind(f),
                        getSegmentReference: f.get.bind(f),
                        initSegmentReference: h,
                        presentationTimeOffset: i || 0,
                        mimeType: t,
                        codecs: m,
                        kind: v,
                        encrypted: g,
                        keyId: w,
                        language: o,
                        label: s || null,
                        type: r,
                        primary: a,
                        trickModeVideo: null,
                        containsEmsgBoxes: !1,
                        frameRate: void 0,
                        width: void 0,
                        height: void 0,
                        bandwidth: void 0,
                        roles: [],
                        channelsCount: c,
                      }),
                      (this.j[t.id] = f),
                      {
                        stream: t,
                        ce: f,
                        drmInfos: b,
                        Mb: l,
                        zb: e[e.length - 1],
                      }
                    );
                  }.bind(this)
                );
              }.bind(t)
            )
          );
        }
        function _r(t, e) {
          var n = Zn(e.T, "EXT-X-PLAYLIST-TYPE");
          if (Zn(e.T, "EXT-X-ENDLIST") || (n && "VOD" == n.value)) Nr(t, !1);
          else {
            if (!n) throw new u(2, 4, 4029);
            (n = Mr(e.T, "EXT-X-TARGETDURATION")),
              (n = Number(n.value)),
              t.c ? t.c > n && (t.c = n) : (Nr(t, !0), (t.c = n)),
              (t.l = Math.max(n, t.l));
          }
        }
        function Er(t, e) {
          var n = null,
            r = 0;
          t.f && ((n = Date.now() / 1e3 - e), (r = 3 * t.l)),
            (t.a = new Mn(n, r)),
            t.a.ob(!t.f);
        }
        function Tr(t) {
          var e = Qn(t.T, "EXT-X-MAP");
          if (!e.length) return null;
          if (1 < e.length) throw new u(2, 4, 4020);
          var n = Ir((e = e[0]), "URI"),
            r = z([t.uri], [n])[0];
          return (
            (t = 0),
            (n = null),
            (e = Xn(e, "BYTERANGE")) &&
              ((t = e.split("@")),
              (e = Number(t[0])),
              (t = Number(t[1])),
              (n = t + e - 1)),
            new Ye(
              function () {
                return [r];
              },
              t,
              n
            )
          );
        }
        function Sr(t, e, n) {
          var r = e.segments,
            i = [];
          return (
            r.forEach(
              function (t) {
                var o,
                  a = t.T,
                  s = z([e.uri], [t.uri])[0],
                  u = Mr(a, "EXTINF").value.split(","),
                  u = Number(u[0]),
                  u = (o = (t = r.indexOf(t)) ? i[t - 1].endTime : 0) + u,
                  c = 0,
                  l = null;
                (a = Zn(a, "EXT-X-BYTERANGE")) &&
                  ((a = a.value.split("@")),
                  (l = Number(a[0])),
                  (c = a[1] ? Number(a[1]) : i[t - 1].K + 1),
                  (l = c + l - 1),
                  t == r.length - 1 && (l = null)),
                  i.push(
                    new $e(
                      n + t,
                      o,
                      u,
                      function () {
                        return [s];
                      },
                      c,
                      l
                    )
                  );
              }.bind(t)
            ),
            i
          );
        }
        function xr(t, e) {
          e.forEach(
            function (t) {
              var e = this.a.Y(),
                n = t.video;
              (t = t.audio),
                n && this.j[n.id] && sn(this.j[n.id], e),
                t && this.j[t.id] && sn(this.j[t.id], e);
            }.bind(t)
          );
        }
        function Or(t, e) {
          for (var n = bs[t], r = 0; r < n.length; r++)
            for (var i = 0; i < e.length; i++)
              if (n[r].test(e[i].trim())) return e[i].trim();
          return "text" == t ? "" : null;
        }
        function Pr(t, e) {
          if (1 == e.length) return e[0];
          var n = Or(t, e);
          if (null != n) return n;
          throw new u(2, 4, 4025, e);
        }
        function kr(t, e, n, r) {
          var i = r.split("."),
            o = i[i.length - 1];
          return (i = ws[e][o])
            ? Promise.resolve(i)
            : "text" == e
            ? n && "vtt" != n
              ? Promise.resolve("application/mp4")
              : Promise.resolve("text/vtt")
            : ((e = I([r], t.h.retryParameters)),
              (e.method = "HEAD"),
              t.b.networkingEngine.request(1, e).then(function (t) {
                if (!(t = t.headers["content-type"]))
                  throw new u(2, 4, 4021, o);
                return t.split(";")[0];
              }));
        }
        function Cr(t, e) {
          var n = Zn(e.T, "EXT-X-START");
          return n ? Number(Ir(n, "TIME-OFFSET")) : t.h.hls.defaultTimeOffset;
        }
        function Ir(t, e) {
          var n = t.getAttribute(e);
          if (!n) throw new u(2, 4, 4023, e);
          return n.value;
        }
        function Mr(t, e) {
          var n = Zn(t, e);
          if (!n) throw new u(2, 4, 4024, e);
          return n;
        }
        function Ar(t, e) {
          return t.b.networkingEngine.request(0, I([e], t.h.retryParameters));
        }
        function Rr(e, n) {
          null != e.c &&
            null != n &&
            (e.i = t.setTimeout(e.I.bind(e), 1e3 * n));
        }
        function Nr(e, n) {
          (e.f = n),
            e.a && e.a.ob(!n),
            n ||
              null == e.i ||
              (t.clearTimeout(e.i), (e.i = null), (e.c = null));
        }
        function jr(t, e, n, r, i, o) {
          (this.a = t),
            (this.c = e),
            (this.l = n),
            (this.B = r),
            (this.I = i),
            (this.D = o),
            (this.b = new D()),
            (this.h = !1),
            (this.g = 1),
            (this.j = this.f = null),
            (this.C = t.readyState),
            (this.i = !1),
            (this.w = this.O = -1),
            (this.m = this.s = !1),
            0 < t.readyState
              ? this.kc()
              : U(this.b, t, "loadedmetadata", this.kc.bind(this)),
            (e = this.mc.bind(this)),
            L(this.b, t, "ratechange", this.Ad.bind(this)),
            L(this.b, t, "waiting", e),
            (this.j = setInterval(e, 250));
        }
        function Dr(t, e) {
          0 < t.a.readyState ? (t.a.currentTime = Hr(t, e)) : (t.B = e);
        }
        function Lr(t) {
          return 0 < t.a.readyState ? Hr(t, t.a.currentTime) : Ur(t);
        }
        function Ur(t) {
          return t.B
            ? Hr(t, t.B)
            : ((t = t.c.presentationTimeline), 1 / 0 > t.Y() ? t.ia() : t.kb());
        }
        function Fr(e, n) {
          null != e.f && (t.clearInterval(e.f), (e.f = null)),
            (e.g = n),
            (e.a.playbackRate = e.h || 0 > n ? 0 : n),
            !e.h &&
              0 > n &&
              (e.f = t.setInterval(
                function () {
                  this.a.currentTime += n / 4;
                }.bind(e),
                250
              ));
        }
        function Br(t, e) {
          var n = Ot.bind(null, t.a.buffered),
            r = 1 * Math.max(t.c.minBufferTime || 0, t.l.rebufferingGoal),
            i = t.c.presentationTimeline,
            o = i.va(),
            a = i.Da(r),
            s = i.Da(5),
            r = i.Da(r + 5);
          return e > o
            ? o
            : e < i.Da(0)
            ? n(s)
              ? s
              : r
            : e >= a || n(e)
            ? e
            : r;
        }
        function zr(t, e, n) {
          t.a.currentTime = n;
          var r = 0,
            i = function () {
              !this.a ||
                10 <= r++ ||
                this.a.currentTime != e ||
                ((this.a.currentTime = n), setTimeout(i, 100));
            }.bind(t);
          setTimeout(i, 100);
        }
        function Hr(t, e) {
          var n = t.c.presentationTimeline.ia();
          return e < n
            ? n
            : ((n = t.c.presentationTimeline.va()), e > n ? n : e);
        }
        function qr(t, e, n, r, i, o, a) {
          (this.a = t),
            (this.B = e),
            (this.g = n),
            (this.w = r),
            (this.l = i),
            (this.h = o),
            (this.C = a),
            (this.c = []),
            (this.j = new D()),
            (this.b = !1),
            (this.i = -1),
            (this.f = null),
            Kr(this);
        }
        function Vr(t) {
          var e = T(t);
          return (e.eventElement = t.eventElement), e;
        }
        function Kr(e) {
          Wr(e), (e.f = t.setTimeout(e.D.bind(e), 250));
        }
        function Wr(e) {
          e.f && (t.clearTimeout(e.f), (e.f = null));
        }
        function Gr(t, e) {
          (this.a = e),
            (this.b = t),
            (this.h = null),
            (this.i = 1),
            (this.m = Promise.resolve()),
            (this.g = []),
            (this.j = {}),
            (this.c = {}),
            (this.s = !1),
            (this.w = null),
            (this.f = this.l = !1);
        }
        function Yr(t) {
          return t.b.periods[ae(t.b, Lr(t.a.Sa))];
        }
        function $r(t) {
          var e = t.c.video || t.c.audio;
          return e ? t.b.periods[e.xa] : null;
        }
        function Xr(t) {
          return K(t.c, function (t) {
            return t.oa || t.stream;
          });
        }
        function Jr(t, e) {
          var n = t.c.video;
          if (n) {
            var r = n.stream;
            if (r)
              if (e) {
                var i = r.trickModeVideo;
                if (i) {
                  var o = n.oa;
                  o || (Zr(t, i, !1), (n.oa = r));
                }
              } else (o = n.oa) && ((n.oa = null), Zr(t, o, !0));
          }
        }
        function Qr(t, e, n) {
          e.video && Zr(t, e.video, n), e.audio && Zr(t, e.audio, n);
        }
        function Zr(t, e, n) {
          var r = t.c[e.type];
          if (!r && "text" == e.type && t.h.ignoreTextStreamFailures)
            ni(t, { text: e });
          else if (r) {
            var i = se(t.b, e);
            n && i != r.xa
              ? ei(t)
              : (r.oa &&
                  (e.trickModeVideo
                    ? ((r.oa = e), (e = e.trickModeVideo))
                    : (r.oa = null)),
                (i = t.g[i]) &&
                  i.Ka &&
                  (i = t.j[e.id]) &&
                  i.Ka &&
                  r.stream != e &&
                  ("text" == e.type && Nt(t.a.M, Y(e.mimeType, e.codecs)),
                  (r.stream = e),
                  (r.mb = !0),
                  n &&
                    (r.ta
                      ? (r.sb = !0)
                      : r.ya
                      ? ((r.ra = !0), (r.sb = !0))
                      : (bi(r), yi(t, r, !0)))));
          }
        }
        function ti(t) {
          var e = Lr(t.a.Sa);
          Object.keys(t.c).every(
            function (t) {
              var n = this.a.M;
              return (
                "text" == t
                  ? ((t = n.a), (t = e >= t.b && e < t.a))
                  : ((t = Dt(n, t)), (t = Ot(t, e))),
                t
              );
            }.bind(t)
          ) || ei(t);
        }
        function ei(t) {
          for (var e in t.c) {
            var n = t.c[e];
            n.ta ||
              n.ra ||
              (n.ya
                ? (n.ra = !0)
                : null == jt(t.a.M, e)
                ? null == n.qa && gi(t, n, 0)
                : (bi(n), yi(t, n, !1)));
          }
        }
        function ni(t, e, n) {
          var r = ae(t.b, Lr(t.a.Sa)),
            i = {},
            o = [];
          return (
            e.variant &&
              e.variant.audio &&
              ((i.audio = e.variant.audio), o.push(e.variant.audio)),
            e.variant &&
              e.variant.video &&
              ((i.video = e.variant.video), o.push(e.variant.video)),
            e.text && ((i.text = e.text), o.push(e.text)),
            t.a.M.init(i),
            oi(t),
            ii(t, o).then(
              function () {
                if (!this.f)
                  for (var t in i) {
                    var e = i[t];
                    this.c[t] ||
                      ((this.c[t] = {
                        stream: e,
                        type: t,
                        Ea: null,
                        ja: null,
                        oa: null,
                        mb: !0,
                        xa: r,
                        endOfStream: !1,
                        ya: !1,
                        qa: null,
                        ra: !1,
                        sb: !1,
                        ta: !1,
                        Lb: !1,
                        Pa: !1,
                        wc: n || 0,
                      }),
                      gi(this, this.c[t], 0));
                  }
              }.bind(t)
            )
          );
        }
        function ri(t, e) {
          var n = t.g[e];
          if (n) return n.N;
          (n = { N: new g(), Ka: !1 }), (t.g[e] = n);
          var r = t.b.periods[e].variants
            .map(function (t) {
              var e = [];
              return (
                t.audio && e.push(t.audio),
                t.video && e.push(t.video),
                t.video &&
                  t.video.trickModeVideo &&
                  e.push(t.video.trickModeVideo),
                e
              );
            })
            .reduce(x, [])
            .filter(k);
          return (
            r.push.apply(r, t.b.periods[e].textStreams),
            (t.m = t.m
              .then(
                function () {
                  if (!this.f) return ii(this, r);
                }.bind(t)
              )
              .then(
                function () {
                  this.f || (this.g[e].N.resolve(), (this.g[e].Ka = !0));
                }.bind(t)
              )
              .catch(
                function (t) {
                  this.f ||
                    (this.g[e].N.reject(), delete this.g[e], this.a.onError(t));
                }.bind(t)
              )),
            n.N
          );
        }
        function ii(t, e) {
          e.map(function (t) {
            return t.id;
          }).filter(k);
          for (var n = [], r = 0; r < e.length; ++r) {
            var i = e[r],
              o = t.j[i.id];
            o
              ? n.push(o.N)
              : ((t.j[i.id] = { N: new g(), Ka: !1 }),
                n.push(i.createSegmentIndex()));
          }
          return Promise.all(n)
            .then(
              function () {
                if (!this.f)
                  for (var t = 0; t < e.length; ++t) {
                    var n = this.j[e[t].id];
                    n.Ka || (n.N.resolve(), (n.Ka = !0));
                  }
              }.bind(t)
            )
            .catch(
              function (t) {
                if (!this.f)
                  return (
                    this.j[i.id].N.reject(),
                    delete this.j[i.id],
                    Promise.reject(t)
                  );
              }.bind(t)
            );
        }
        function oi(t) {
          var e = t.b.presentationTimeline.Y();
          1 / 0 > e ? t.a.M.ea(e) : t.a.M.ea(Math.pow(2, 32));
        }
        function ai(t, e) {
          var n = Lr(t.a.Sa),
            r =
              e.Ea && e.ja
                ? t.b.periods[se(t.b, e.Ea)].startTime + e.ja.endTime
                : Math.max(n, e.wc),
            i = se(t.b, e.stream),
            o = ae(t.b, r),
            a = t.a.M,
            s = e.type;
          return (
            "text" == s
              ? ((a = a.a),
                (a = null == a.a || a.a < n ? 0 : a.a - Math.max(n, a.b)))
              : ((a = Dt(a, s)), (a = Pt(a, n))),
            (s = Math.max(
              t.i * Math.max(t.b.minBufferTime || 0, t.h.rebufferingGoal),
              t.i * t.h.bufferingGoal
            )),
            r >= t.b.presentationTimeline.Y()
              ? ((e.endOfStream = !0), null)
              : ((e.endOfStream = !1),
                (e.xa = o),
                o != i
                  ? null
                  : a >= s
                  ? 0.5
                  : ((r = t.a.M),
                    (o = e.type),
                    (r = "text" == o ? r.a.a : xt(Dt(r, o))),
                    e.ja && e.stream == e.Ea
                      ? ((o = e.ja.position + 1), (r = si(t, e, i, o)))
                      : null ==
                        (o = e.ja
                          ? e.stream.findSegmentPosition(
                              Math.max(
                                0,
                                t.b.periods[se(t.b, e.Ea)].startTime +
                                  e.ja.endTime -
                                  t.b.periods[i].startTime
                              )
                            )
                          : e.stream.findSegmentPosition(
                              Math.max(0, (r || n) - t.b.periods[i].startTime)
                            ))
                      ? (r = null)
                      : ((a = null),
                        null == r && (a = si(t, e, i, Math.max(0, o - 1))),
                        (r = a || si(t, e, i, o))),
                    r ? ((e.wc = 0), ui(t, e, n, i, r), null) : 1))
          );
        }
        function si(t, e, n, r) {
          return (
            (n = t.b.periods[n]),
            (e = e.stream.getSegmentReference(r))
              ? ((t = t.b.presentationTimeline),
                (r = t.va()),
                n.startTime + e.endTime < t.ia() ||
                n.startTime + e.startTime > r
                  ? null
                  : e)
              : null
          );
        }
        function ui(t, e, n, r, i) {
          var o = t.b.periods[r],
            a = e.stream,
            s = t.b.periods[r + 1],
            u = null,
            u = s ? s.startTime : t.b.presentationTimeline.Y();
          (r = li(t, e, r, u)),
            (e.ya = !0),
            (e.mb = !1),
            (s = vi(t, i)),
            Promise.all([r, s])
              .then(
                function (t) {
                  if (!this.f && !this.l) return fi(this, e, n, o, a, i, t[1]);
                }.bind(t)
              )
              .then(
                function () {
                  this.f ||
                    this.l ||
                    ((e.ya = !1),
                    (e.Lb = !1),
                    e.ra || this.a.Fb(),
                    gi(this, e, 0),
                    pi(this, a));
                }.bind(t)
              )
              .catch(
                function (t) {
                  this.f ||
                    this.l ||
                    ((e.ya = !1),
                    "text" == e.type && this.h.ignoreTextStreamFailures
                      ? delete this.c.text
                      : 3017 == t.code
                      ? ci(this, e, t)
                      : ((e.Pa = !0), (t.severity = 2), wi(this, t)));
                }.bind(t)
              );
        }
        function ci(t, e, n) {
          if (
            !V(t.c).some(function (t) {
              return t != e && t.Lb;
            })
          ) {
            var r = Math.round(100 * t.i);
            if (20 < r) t.i -= 0.2;
            else {
              if (!(4 < r)) return (e.Pa = !0), (t.l = !0), void t.a.onError(n);
              t.i -= 0.04;
            }
            e.Lb = !0;
          }
          gi(t, e, 4);
        }
        function li(t, e, n, r) {
          return e.mb
            ? ((n = Ft(
                t.a.M,
                e.type,
                t.b.periods[n].startTime - e.stream.presentationTimeOffset,
                r
              )),
              e.stream.initSegmentReference
                ? ((t = vi(t, e.stream.initSegmentReference)
                    .then(
                      function (t) {
                        if (!this.f) return Lt(this.a.M, e.type, t, null, null);
                      }.bind(t)
                    )
                    .catch(function (t) {
                      return (e.mb = !0), Promise.reject(t);
                    })),
                  Promise.all([n, t]))
                : n)
            : Promise.resolve();
        }
        function fi(t, e, n, r, i, o, a) {
          return (
            i.containsEmsgBoxes &&
              new Qe().aa("emsg", t.Nd.bind(t, r, o)).parse(a),
            hi(t, e, n)
              .then(
                function () {
                  if (!this.f)
                    return Lt(
                      this.a.M,
                      e.type,
                      a,
                      o.startTime + r.startTime,
                      o.endTime + r.startTime
                    );
                }.bind(t)
              )
              .then(
                function () {
                  if (!this.f) return (e.Ea = i), (e.ja = o), Promise.resolve();
                }.bind(t)
              )
          );
        }
        function hi(t, e, n) {
          var r = jt(t.a.M, e.type);
          return null == r
            ? Promise.resolve()
            : 0 >= (n = n - r - t.h.bufferBehind)
            ? Promise.resolve()
            : t.a.M.remove(e.type, r, r + n).then(function () {}.bind(t));
        }
        function pi(t, e) {
          if (
            !t.s &&
            ((t.s = V(t.c).every(function (t) {
              return "text" == t.type || (!t.ra && !t.ta && t.ja);
            })),
            t.s)
          ) {
            var n = se(t.b, e);
            for (
              t.g[n] ||
                ri(t, n)
                  .then(
                    function () {
                      this.a.fc();
                    }.bind(t)
                  )
                  .catch(O),
                n = 0;
              n < t.b.periods.length;
              ++n
            )
              ri(t, n).catch(O);
            t.a.Fd && t.a.Fd();
          }
        }
        function di(t, e) {
          if (e.xa != se(t.b, e.stream)) {
            var n = e.xa,
              r = V(t.c);
            r.every(function (t) {
              return t.xa == n;
            }) &&
              r.every(mi) &&
              ri(t, n)
                .then(
                  function () {
                    if (
                      !this.f &&
                      r.every(
                        function (t) {
                          var e = se(this.b, t.stream);
                          return mi(t) && t.xa == n && e != n;
                        }.bind(this)
                      )
                    ) {
                      var t = this.b.periods[n],
                        e = this.a.gc(t),
                        i = {};
                      e.variant &&
                        e.variant.video &&
                        (i.video = e.variant.video),
                        e.variant &&
                          e.variant.audio &&
                          (i.audio = e.variant.audio),
                        e.text && (i.text = e.text);
                      for (var o in this.c)
                        if (!i[o] && "text" != o)
                          return void this.a.onError(new u(2, 5, 5005));
                      for (o in i)
                        if (!this.c[o]) {
                          if ("text" != o)
                            return void this.a.onError(new u(2, 5, 5005));
                          ni(this, { text: i.text }, t.startTime), delete i[o];
                        }
                      for (o in this.c)
                        (t = i[o])
                          ? (Zr(this, t, !1), gi(this, this.c[o], 0))
                          : delete this.c[o];
                      this.a.fc();
                    }
                  }.bind(t)
                )
                .catch(O);
          }
        }
        function mi(t) {
          return !t.ya && null == t.qa && !t.ra && !t.ta;
        }
        function vi(t, e) {
          var n = I(e.a(), t.h.retryParameters);
          if (e.V || null != e.K) {
            var r = "bytes=" + e.V + "-";
            null != e.K && (r += e.K), (n.headers.Range = r);
          }
          return t.a.nd.request(1, n).then(function (t) {
            return t.data;
          });
        }
        function yi(t, e, n) {
          (e.ra = !1),
            (e.sb = !1),
            (e.ta = !0),
            Ut(t.a.M, e.type)
              .then(
                function () {
                  if (!this.f && n) {
                    var t = this.a.M,
                      r = e.type;
                    return "text" == r
                      ? Promise.resolve()
                      : Bt(t, r, t.Tc.bind(t, r));
                  }
                }.bind(t)
              )
              .then(
                function () {
                  this.f ||
                    ((e.Ea = null),
                    (e.ja = null),
                    (e.ta = !1),
                    (e.endOfStream = !1),
                    gi(this, e, 0));
                }.bind(t)
              );
        }
        function gi(e, n, r) {
          n.qa = t.setTimeout(e.xe.bind(e, n), 1e3 * r);
        }
        function bi(e) {
          null != e.qa && (t.clearTimeout(e.qa), (e.qa = null));
        }
        function wi(t, e) {
          w(t.w).then(
            function () {
              this.a.onError(e), e.handled || this.h.failureCallback(e);
            }.bind(t)
          );
        }
        function _i(t, e) {
          return new Promise(function (n, r) {
            var i = new XMLHttpRequest();
            i.open(e.method, t, !0),
              (i.responseType = "arraybuffer"),
              (i.timeout = e.retryParameters.timeout),
              (i.withCredentials = e.allowCrossSiteCredentials),
              (i.onload = function (e) {
                var i = (e = e.target)
                  .getAllResponseHeaders()
                  .split("\r\n")
                  .reduce(function (t, e) {
                    var n = e.split(": ");
                    return (t[n[0].toLowerCase()] = n.slice(1).join(": ")), t;
                  }, {});
                if (200 <= e.status && 299 >= e.status && 202 != e.status)
                  e.responseURL && (t = e.responseURL),
                    n({
                      uri: t,
                      data: e.response,
                      headers: i,
                      fromCache: !!i["x-shaka-from-cache"],
                    });
                else {
                  var o = null;
                  try {
                    o = J(e.response);
                  } catch (t) {}
                  r(
                    new u(
                      401 == e.status || 403 == e.status ? 2 : 1,
                      1,
                      1001,
                      t,
                      e.status,
                      o,
                      i
                    )
                  );
                }
              }),
              (i.onerror = function () {
                r(new u(1, 1, 1002, t));
              }),
              (i.ontimeout = function () {
                r(new u(1, 1, 1003, t));
              });
            for (var o in e.headers) i.setRequestHeader(o, e.headers[o]);
            i.send(e.body);
          });
        }
        function Ei() {
          (this.a = null), (this.b = []), (this.c = {});
        }
        function Ti(t, e, n) {
          return Oi(t, e, "readwrite", function (t) {
            t.put(n);
          });
        }
        function Si(t, e, n) {
          return Oi(t, "segment", "readwrite", function (t) {
            for (var r = 0; r < e.length; r++)
              t.delete(e[r]).onsuccess = n || function () {};
          });
        }
        function xi(t, e) {
          var n = 0;
          return Oi(t, e, "readonly", function (t) {
            t.openCursor(null, "prev").onsuccess = function (t) {
              (t = t.target.result) && (n = t.key + 1);
            };
          }).then(function () {
            return n;
          });
        }
        function Oi(t, e, n, r) {
          var i = { transaction: t.a.transaction([e], n), N: new g() };
          return (
            (i.transaction.oncomplete = function () {
              this.b.splice(this.b.indexOf(i), 1), i.N.resolve();
            }.bind(t)),
            (i.transaction.onabort = function (t) {
              this.b.splice(this.b.indexOf(i), 1), ki(i.transaction, i.N, t);
            }.bind(t)),
            (i.transaction.onerror = function (t) {
              t.preventDefault();
            }.bind(t)),
            (e = i.transaction.objectStore(e)),
            r(e),
            t.b.push(i),
            i.N
          );
        }
        function Pi(e, n, r) {
          var i = t.indexedDB.open("shaka_offline_db", 1),
            o = !1,
            a = new g();
          return (
            (i.onupgradeneeded = function (t) {
              (o = !0), (t = t.target.result);
              for (var e in n) t.createObjectStore(e, { keyPath: n[e] });
            }),
            (i.onsuccess = function (t) {
              r && !o
                ? (t.target.result.close(),
                  setTimeout(
                    function () {
                      Pi(this, n, r - 1).then(a.resolve, a.reject);
                    }.bind(this),
                    1e3
                  ))
                : ((this.a = t.target.result), a.resolve());
            }.bind(e)),
            (i.onerror = ki.bind(null, i, a)),
            a
          );
        }
        function ki(t, e, n) {
          t.error
            ? e.reject(new u(2, 9, 9001, t.error))
            : e.reject(new u(2, 9, 9002)),
            n.preventDefault();
        }
        function Ci(t) {
          var e = $t((n = Ii(t.periods[0], [], new Mn(null, 0))), null, null),
            n = Xt(n, null);
          return (
            e.push.apply(e, n),
            {
              offlineUri: "offline:" + t.key,
              originalManifestUri: t.originalManifestUri,
              duration: t.duration,
              size: t.size,
              expiration: void 0 == t.expiration ? 1 / 0 : t.expiration,
              tracks: e,
              appMetadata: t.appMetadata,
            }
          );
        }
        function Ii(t, e, n) {
          var r = t.streams.filter(function (t) {
            return "text" == t.contentType;
          });
          return (
            (e = Ai(
              t.streams.filter(function (t) {
                return "audio" == t.contentType;
              }),
              t.streams.filter(function (t) {
                return "video" == t.contentType;
              }),
              e
            )),
            (r = r.map(Ni)),
            t.streams.forEach(function (t) {
              (t = Mi(t)), n.Ga(0, t);
            }),
            { startTime: t.startTime, variants: e, textStreams: r }
          );
        }
        function Mi(t) {
          return t.segments.map(function (t, e) {
            return new $e(
              e,
              t.startTime,
              t.endTime,
              function () {
                return [t.uri];
              },
              0,
              null
            );
          });
        }
        function Ai(t, e, n) {
          var r = [];
          if (!t.length && !e.length) return r;
          t.length ? e.length || (e = [null]) : (t = [null]);
          for (var i = 0, o = 0; o < t.length; o++)
            for (var a = 0; a < e.length; a++)
              if (Ri(t[o], e[a])) {
                var s = t[o],
                  u = e[a],
                  c = n;
                (s = {
                  id: i++,
                  language: s ? s.language : "",
                  primary: (!!s && s.primary) || (!!u && u.primary),
                  audio: Ni(s),
                  video: Ni(u),
                  bandwidth: 0,
                  drmInfos: c,
                  allowedByApplication: !0,
                  allowedByKeySystem: !0,
                }),
                  r.push(s);
              }
          return r;
        }
        function Ri(t, e) {
          if (!(t && e && t.variantIds && e.variantIds)) return !0;
          for (var n = 0; n < t.variantIds.length; n++)
            if (
              e.variantIds.some(function (e) {
                return e == t.variantIds[n];
              })
            )
              return !0;
          return !1;
        }
        function Ni(t) {
          if (!t) return null;
          var e = new an((e = Mi(t)));
          return {
            id: t.id,
            createSegmentIndex: Promise.resolve.bind(Promise),
            findSegmentPosition: e.find.bind(e),
            getSegmentReference: e.get.bind(e),
            initSegmentReference: t.initSegmentUri
              ? new Ye(
                  function () {
                    return [t.initSegmentUri];
                  },
                  0,
                  null
                )
              : null,
            presentationTimeOffset: t.presentationTimeOffset,
            mimeType: t.mimeType,
            codecs: t.codecs,
            width: t.width || void 0,
            height: t.height || void 0,
            frameRate: t.frameRate || void 0,
            kind: t.kind,
            encrypted: t.encrypted,
            keyId: t.keyId,
            language: t.language,
            label: t.label || null,
            type: t.contentType,
            primary: t.primary,
            trickModeVideo: null,
            containsEmsgBoxes: !1,
            roles: [],
            channelsCount: null,
          };
        }
        function ji() {
          return t.indexedDB ? new Ei() : null;
        }
        function Di(t, e, n, r) {
          (this.b = {}),
            (this.l = []),
            (this.m = r),
            (this.j = t),
            (this.s = e),
            (this.w = n),
            (this.i = this.a = null),
            (this.f = this.g = this.h = this.c = 0);
        }
        function Li(t, e, n, r, i) {
          (t.b[e] = t.b[e] || []),
            t.b[e].push({ uris: n.a(), V: n.V, K: n.K, Xb: r, Nb: i });
        }
        function Ui(t, e) {
          (t.c = 0),
            (t.h = 0),
            (t.g = 0),
            (t.f = 0),
            V(t.b).forEach(
              function (t) {
                t.forEach(
                  function (t) {
                    null != t.K ? (this.c += t.K - t.V + 1) : (this.g += t.Xb);
                  }.bind(this)
                );
              }.bind(t)
            ),
            (t.a = e),
            (t.a.size = t.c);
          var n = V(t.b).map(
            function (t) {
              var e = 0,
                n = function () {
                  return this.m
                    ? e >= t.length
                      ? Promise.resolve()
                      : Fi(this, t[e++]).then(n)
                    : Promise.reject(new u(2, 9, 9002));
                }.bind(this);
              return n();
            }.bind(t)
          );
          return (
            (t.b = {}),
            (t.i = Promise.all(n)
              .then(
                function () {
                  return Ti(this.j, "manifest", e);
                }.bind(t)
              )
              .then(
                function () {
                  this.l = [];
                }.bind(t)
              )),
            t.i
          );
        }
        function Fi(t, e) {
          var n = I(e.uris, t.w);
          (e.V || null != e.K) &&
            (n.headers.Range = "bytes=" + e.V + "-" + (null == e.K ? "" : e.K));
          var r;
          return t.s
            .request(1, n)
            .then(
              function (t) {
                return this.a
                  ? ((r = t.data.byteLength),
                    this.l.push(e.Nb.key),
                    (e.Nb.data = t.data),
                    Ti(this.j, "segment", e.Nb))
                  : Promise.reject(new u(2, 9, 9002));
              }.bind(t)
            )
            .then(
              function () {
                if (!this.a) return Promise.reject(new u(2, 9, 9002));
                null == e.K
                  ? ((this.a.size += r), (this.f += e.Xb))
                  : (this.h += r);
                var t = (this.h + this.f) / (this.c + this.g),
                  n = Ci(this.a);
                this.m.progressCallback(n, t);
              }.bind(t)
            );
        }
        function Bi() {
          this.a = -1;
        }
        function zi(t) {
          var e = new Mn(null, 0);
          e.ea(t.duration);
          var n = t.drmInfo ? [t.drmInfo] : [];
          return {
            presentationTimeline: e,
            minBufferTime: 10,
            offlineSessionIds: t.sessionIds,
            periods: t.periods.map(function (t) {
              return Ii(t, n, e);
            }),
          };
        }
        function Hi(t) {
          if (/^offline:([0-9]+)$/.exec(t)) {
            var e = {
              uri: t,
              data: new ArrayBuffer(0),
              headers: { "content-type": "application/x-offline-manifest" },
            };
            return Promise.resolve(e);
          }
          if ((e = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(t))) {
            var n = Number(e[1]),
              r = ji();
            return r
              ? r
                  .init(Es)
                  .then(function () {
                    return r.get("segment", n);
                  })
                  .then(function (e) {
                    return r.o().then(function () {
                      if (!e) throw new u(2, 9, 9003, n);
                      return { uri: t, data: e.data, headers: {} };
                    });
                  })
              : Promise.reject(new u(2, 9, 9e3));
          }
          return Promise.reject(new u(2, 1, 9004, t));
        }
        function qi(t) {
          this.a = null;
          for (var e = 0; e < t.textTracks.length; ++e) {
            var n = t.textTracks[e];
            (n.mode = "disabled"),
              "Shaka Player TextTrack" == n.label && (this.a = n);
          }
          this.a ||
            (this.a = t.addTextTrack("subtitles", "Shaka Player TextTrack")),
            (this.a.mode = "hidden");
        }
        function Vi(t) {
          if (t.startTime >= t.endTime) return null;
          var e = new VTTCue(t.startTime, t.endTime, t.l);
          (e.lineAlign = t.h), (e.positionAlign = t.i), (e.size = t.size);
          try {
            e.align = t.f;
          } catch (t) {}
          return (
            "center" == t.f &&
              "center" != e.align &&
              ((e.position = "auto"), (e.align = "middle")),
            t.b == Us ? (e.vertical = "lr") : t.b == Fs && (e.vertical = "rl"),
            t.g == zs && (e.snapToLines = !1),
            null != t.c && (e.line = t.c),
            null != t.position && (e.position = t.position),
            e
          );
        }
        function Ki(t, e) {
          for (var n = t.a.cues, r = [], i = 0; i < n.length; ++i)
            e(n[i]) && r.push(n[i]);
          for (i = 0; i < r.length; ++i) t.a.removeCue(r[i]);
        }
        function Wi() {
          (this.a = Promise.resolve()),
            (this.b = this.c = this.f = !1),
            (this.i = new Promise(
              function (t) {
                this.g = t;
              }.bind(this)
            ));
        }
        function Gi(t) {
          return (
            t.f ||
              (t.a = t.a.then(
                function (t) {
                  return (this.c = !0), Promise.resolve(t);
                }.bind(t),
                function (t) {
                  return (
                    (this.c = !0),
                    this.b
                      ? (this.g(), Promise.reject(this.h))
                      : Promise.reject(t)
                  );
                }.bind(t)
              )),
            (t.f = !0),
            t.a
          );
        }
        function Yi(t, e) {
          ye.call(this),
            (this.I = !1),
            (this.f = t),
            (this.gb = !1),
            (this.w = null),
            (this.m = new D()),
            (this.g =
              this.fb =
              this.b =
              this.l =
              this.a =
              this.B =
              this.h =
              this.cb =
              this.Ma =
              this.O =
              this.j =
              this.s =
                null),
            (this.Jc = 1e9),
            (this.ab = []),
            (this.Na = !1),
            (this.ga = !0),
            (this.sa = this.Oa = this.D = null),
            (this.Vb = !1),
            (this.fa = null),
            (this.eb = []),
            (this.C = {}),
            (this.c = oo(this)),
            (this.bb = { width: 1 / 0, height: 1 / 0 }),
            (this.i = ao()),
            (this.$a = 0),
            (this.na = this.c.preferredAudioLanguage),
            (this.Xa = this.c.preferredTextLanguage),
            (this.tb = this.Ya = ""),
            (this.Wb = !0),
            e && e(this),
            (this.s = new C(this.pe.bind(this))),
            (this.cb = Xi(this)),
            L(this.m, this.f, "error", this.Hd.bind(this));
        }
        function $i(t) {
          function e(t) {
            return (
              (t.video ? t.video.codecs.split(".")[0] : "") +
              "-" +
              (t.audio ? t.audio.codecs.split(".")[0] : "")
            );
          }
          var n = {};
          t.b.periods.forEach(function (t) {
            t.variants.forEach(function (t) {
              var r = e(t);
              r in n || (n[r] = []), n[r].push(t);
            });
          });
          var r = null,
            i = 1 / 0;
          G(n, function (t, e) {
            var n = 0,
              o = 0;
            e.forEach(function (t) {
              (n += t.bandwidth || 0), ++o;
            });
            var a = n / o;
            a < i && ((r = t), (i = a));
          }),
            t.b.periods.forEach(function (t) {
              t.variants = t.variants.filter(function (t) {
                return e(t) == r;
              });
            });
        }
        function Xi(e) {
          e.O = new MediaSource();
          var n = new g();
          return (
            L(e.m, e.O, "sourceopen", n.resolve),
            (e.f.src = t.URL.createObjectURL(e.O)),
            n
          );
        }
        function Ji(t) {
          if (
            (t.l && t.l.configure(t.c.manifest),
            t.j && t.j.configure(t.c.drm),
            t.a)
          ) {
            t.a.configure(t.c.streaming);
            try {
              t.b.periods.forEach(t.hb.bind(t));
            } catch (e) {
              t.La(e);
            }
            fo(t, Yr(t.a));
          }
          t.g &&
            (Qi(t), t.c.abr.enabled && !t.ga ? t.g.enable() : t.g.disable());
        }
        function Qi(t) {
          t.g.configure
            ? t.g.configure(t.c.abr)
            : (t.g.setDefaultEstimate(t.c.abr.defaultBandwidthEstimate),
              t.g.setRestrictions(t.c.abr.restrictions));
        }
        function Zi(t, e, n) {
          e.video && eo(t, e.video), e.audio && eo(t, e.audio);
          var r = $r(t.a),
            i = Xr(t.a);
          e != ie(i.audio, i.video, r ? r.variants : []) &&
            t.i.switchHistory.push({
              timestamp: Date.now() / 1e3,
              id: e.id,
              type: "variant",
              fromAdaptation: n,
              bandwidth: e.bandwidth,
            });
        }
        function to(t, e, n) {
          eo(t, e),
            t.i.switchHistory.push({
              timestamp: Date.now() / 1e3,
              id: e.id,
              type: "text",
              fromAdaptation: n,
              bandwidth: null,
            });
        }
        function eo(t, e) {
          var n = se(t.b, e);
          t.C[n] || (t.C[n] = {}), (t.C[n][e.type] = e.id);
        }
        function no(t) {
          t.m &&
            (t.m.la(t.O, "sourceopen"),
            t.m.la(t.f, "loadeddata"),
            t.m.la(t.f, "playing"),
            t.m.la(t.f, "pause"),
            t.m.la(t.f, "ended")),
            t.f && (t.f.removeAttribute("src"), t.f.load());
          var e = Promise.all([
            t.g ? t.g.stop() : null,
            t.j ? t.j.o() : null,
            t.Ma ? t.Ma.o() : null,
            t.h ? t.h.o() : null,
            t.B ? t.B.o() : null,
            t.a ? t.a.o() : null,
            t.l ? t.l.stop() : null,
            t.w ? t.w.o() : null,
          ]);
          return (
            (t.j = null),
            (t.Ma = null),
            (t.h = null),
            (t.B = null),
            (t.a = null),
            (t.l = null),
            (t.w = null),
            (t.b = null),
            (t.fb = null),
            (t.cb = null),
            (t.O = null),
            (t.eb = []),
            (t.C = {}),
            (t.i = ao()),
            e
          );
        }
        function ro(t) {
          return t.l
            ? no(t).then(
                function () {
                  this.I || (this.Ec(!1), (this.cb = Xi(this)));
                }.bind(t)
              )
            : Promise.resolve();
        }
        function io() {
          return {
            ".drm.servers": "",
            ".drm.clearKeys": "",
            ".drm.advanced": {
              distinctiveIdentifierRequired: !1,
              persistentStateRequired: !1,
              videoRobustness: "",
              audioRobustness: "",
              serverCertificate: new Uint8Array(0),
            },
          };
        }
        function oo(t) {
          return {
            drm: {
              retryParameters: _(),
              servers: {},
              clearKeys: {},
              advanced: {},
              delayLicenseRequestUntilPlayed: !1,
            },
            manifest: {
              retryParameters: _(),
              dash: {
                customScheme: function (t) {
                  if (t) return null;
                },
                clockSyncUri: "",
                ignoreDrmInfo: !1,
                xlinkFailGracefully: !1,
              },
              hls: { defaultTimeOffset: 0 },
            },
            streaming: {
              retryParameters: _(),
              failureCallback: t.Qc.bind(t),
              rebufferingGoal: 2,
              bufferingGoal: 10,
              bufferBehind: 30,
              ignoreTextStreamFailures: !1,
              startAtSegmentBoundary: !1,
              smallGapLimit: 0.5,
              jumpLargeGaps: !1,
            },
            abrFactory: ue,
            textDisplayFactory: function (t) {
              return new qi(t);
            }.bind(null, t.f),
            abr: {
              enabled: !0,
              defaultBandwidthEstimate: 5e5,
              switchInterval: 8,
              bandwidthUpgradeTarget: 0.85,
              bandwidthDowngradeTarget: 0.95,
              restrictions: {
                minWidth: 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                maxHeight: 1 / 0,
                minPixels: 0,
                maxPixels: 1 / 0,
                minBandwidth: 0,
                maxBandwidth: 1 / 0,
              },
            },
            preferredAudioLanguage: "",
            preferredTextLanguage: "",
            restrictions: {
              minWidth: 0,
              maxWidth: 1 / 0,
              minHeight: 0,
              maxHeight: 1 / 0,
              minPixels: 0,
              maxPixels: 1 / 0,
              minBandwidth: 0,
              maxBandwidth: 1 / 0,
            },
            playRangeStart: 0,
            playRangeEnd: 1 / 0,
          };
        }
        function ao() {
          return {
            width: NaN,
            height: NaN,
            streamBandwidth: NaN,
            decodedFrames: NaN,
            droppedFrames: NaN,
            estimatedBandwidth: NaN,
            loadLatency: NaN,
            playTime: 0,
            bufferingTime: 0,
            switchHistory: [],
            stateHistory: [],
          };
        }
        function so(t, e, n) {
          t.ga ? ((t.sa = e), (t.Vb = n || !1)) : Qr(t.a, e, n || !1);
        }
        function uo(t) {
          if (t.b) {
            var e = Date.now() / 1e3;
            t.Na ? (t.i.bufferingTime += e - t.$a) : (t.i.playTime += e - t.$a),
              (t.$a = e);
          }
        }
        function co(t, e) {
          function n(t, e) {
            if (!t) return null;
            var n = t.findSegmentPosition(e - i.startTime);
            return null == n
              ? null
              : (n = t.getSegmentReference(n))
              ? n.startTime + i.startTime
              : null;
          }
          var r = Xr(t.a),
            i = Yr(t.a),
            o = n(r.video, e),
            r = n(r.audio, e);
          return null != o && null != r
            ? Math.max(o, r)
            : null != o
            ? o
            : null != r
            ? r
            : e;
        }
        function lo(t, e) {
          if (!e || !e.length) return t.La(new u(2, 4, 4012)), null;
          if ((t.g.setVariants(e), t.g.chooseStreams)) {
            var n = t.g.chooseStreams(["video", "audio"]);
            return ie(n.audio, n.video, e);
          }
          return t.g.chooseVariant();
        }
        function fo(t, e) {
          var n = te(e, t.na, t.Ya),
            r = ee(e, t.Xa, t.tb);
          (n = lo(t, n)) && (Zi(t, n, !0), so(t, n, !0)),
            (r = r[0]) && (to(t, r, !0), t.ga ? (t.fa = r) : Zr(t.a, r, !0)),
            ho(t);
        }
        function ho(t) {
          Promise.resolve().then(
            function () {
              this.I || this.dispatchEvent(new le("adaptation"));
            }.bind(t)
          );
        }
        function po(t) {
          Promise.resolve().then(
            function () {
              this.I || this.dispatchEvent(new le("trackschanged"));
            }.bind(t)
          );
        }
        function mo(t) {
          t.dispatchEvent(new le("texttrackvisibility"));
        }
        function vo(t) {
          if (!t || t.constructor != Yi) throw new u(2, 9, 9008);
          (this.a = ji()),
            (this.g = t),
            (this.b = bo(this)),
            (this.c = null),
            (this.s = !1),
            (this.j = null),
            (this.h = -1),
            (this.l = 0),
            (this.f = null),
            (this.i = new Di(
              this.a,
              t.s,
              t.getConfiguration().streaming.retryParameters,
              this.b
            ));
        }
        function yo() {
          return !!t.indexedDB;
        }
        function go(t, e, n, r) {
          function i() {}
          var o,
            a,
            s,
            u = t.g.s,
            c = t.g.getConfiguration();
          return In(e, u, c.manifest.retryParameters, r)
            .then(
              function (t) {
                return (
                  So(this),
                  (s = new t()).configure(c.manifest),
                  s.start(e, {
                    networkingEngine: u,
                    filterAllPeriods: this.m.bind(this),
                    filterNewPeriod: this.w.bind(this),
                    onTimelineRegionAdded: function () {},
                    onEvent: function () {},
                    onError: n,
                  })
                );
              }.bind(t)
            )
            .then(
              function (t) {
                return (
                  So(this),
                  (o = t),
                  (a = new st(u, n, i, function () {})).configure(c.drm),
                  a.init(o, this.b.usePersistentLicense || !1)
                );
              }.bind(t)
            )
            .then(
              function () {
                return So(this), Eo(o);
              }.bind(t)
            )
            .then(
              function () {
                return So(this), lt(a);
              }.bind(t)
            )
            .then(
              function () {
                return So(this), s.stop();
              }.bind(t)
            )
            .then(
              function () {
                return So(this), { manifest: o, Rc: a };
              }.bind(t)
            )
            .catch(function (t) {
              if (s)
                return s.stop().then(function () {
                  throw t;
                });
              throw t;
            });
        }
        function bo(t) {
          return {
            trackSelectionCallback: t.B.bind(t),
            progressCallback: function (t, e) {
              if (t || e) return null;
            },
            usePersistentLicense: !0,
          };
        }
        function wo(t) {
          return t.a
            ? t.a.a
              ? Promise.resolve()
              : t.a.init(Es)
            : Promise.reject(new u(2, 9, 9e3));
        }
        function _o(t) {
          var e = t.c ? t.c.o() : Promise.resolve();
          return (
            (t.c = null), (t.f = null), (t.s = !1), (t.j = null), (t.h = -1), e
          );
        }
        function Eo(t) {
          var e = t.periods
            .map(function (t) {
              return t.variants;
            })
            .reduce(x, [])
            .map(function (t) {
              var e = [];
              return t.audio && e.push(t.audio), t.video && e.push(t.video), e;
            })
            .reduce(x, [])
            .filter(k);
          return (
            (t = t.periods
              .map(function (t) {
                return t.textStreams;
              })
              .reduce(x, [])),
            e.push.apply(e, t),
            Promise.all(
              e.map(function (t) {
                return t.createSegmentIndex();
              })
            )
          );
        }
        function To(t, e, n, r, i) {
          for (
            var o = [],
              a = t.f.presentationTimeline.ia(),
              s = a,
              u = n.findSegmentPosition(a),
              c = null != u ? n.getSegmentReference(u) : null;
            c;

          )
            (s = t.a.c.segment++),
              Li(t.i, n.type, c, ((c.endTime - c.startTime) * r) / 8, {
                key: s,
                data: null,
                manifestKey: t.h,
                streamNumber: n.id,
                segmentNumber: s,
              }),
              o.push({
                startTime: c.startTime,
                endTime: c.endTime,
                uri: "offline:" + t.h + "/" + n.id + "/" + s,
              }),
              (s = c.endTime + e.startTime),
              (c = n.getSegmentReference(++u));
          return (
            (t.l = Math.max(t.l, s - a)),
            (e = null),
            n.initSegmentReference &&
              ((s = t.a.c.segment++),
              (e = "offline:" + t.h + "/" + n.id + "/" + s),
              Li(t.i, n.contentType, n.initSegmentReference, 0, {
                key: s,
                data: null,
                manifestKey: t.h,
                streamNumber: n.id,
                segmentNumber: -1,
              })),
            (t = []),
            null != i && t.push(i),
            {
              id: n.id,
              primary: n.primary,
              presentationTimeOffset: n.presentationTimeOffset || 0,
              contentType: n.type,
              mimeType: n.mimeType,
              codecs: n.codecs,
              frameRate: n.frameRate,
              kind: n.kind,
              language: n.language,
              label: n.label,
              width: n.width || null,
              height: n.height || null,
              initSegmentUri: e,
              encrypted: n.encrypted,
              keyId: n.keyId,
              segments: o,
              variantIds: t,
            }
          );
        }
        function So(t) {
          if (!t.g) throw new u(2, 9, 9002);
        }
        function xo(t) {
          Ss.push(t);
        }
        function Oo(t) {
          var e = t.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
          if ("function" == typeof Event) var n = new Event(e, t);
          else
            (n = document.createEvent("Event")).initEvent(
              e,
              t.bubbles,
              t.cancelable
            );
          t.target.dispatchEvent(n);
        }
        function Po(t, e, n) {
          if ("input" == t)
            switch (this.type) {
              case "range":
                t = "change";
            }
          xs.call(this, t, e, n);
        }
        function ko(t) {
          (this.f = []),
            (this.b = []),
            (this.a = []),
            new Qe().aa("pssh", this.c.bind(this)).parse(t.buffer);
        }
        function Co(t, e) {
          try {
            var n = new Io(t, e);
            return Promise.resolve(n);
          } catch (t) {
            return Promise.reject(t);
          }
        }
        function Io(t, e) {
          this.keySystem = t;
          for (var n = !1, r = 0; r < e.length; ++r) {
            var i = e[r],
              o = {
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                initDataTypes: i.initDataTypes,
                sessionTypes: ["temporary"],
                label: i.label,
              },
              a = !1;
            if (i.audioCapabilities)
              for (var s = 0; s < i.audioCapabilities.length; ++s) {
                var u = i.audioCapabilities[s];
                if (u.contentType) {
                  a = !0;
                  var c = u.contentType.split(";")[0];
                  MSMediaKeys.isTypeSupported(this.keySystem, c) &&
                    (o.audioCapabilities.push(u), (n = !0));
                }
              }
            if (i.videoCapabilities)
              for (s = 0; s < i.videoCapabilities.length; ++s)
                (u = i.videoCapabilities[s]).contentType &&
                  ((a = !0),
                  (c = u.contentType.split(";")[0]),
                  MSMediaKeys.isTypeSupported(this.keySystem, c) &&
                    (o.videoCapabilities.push(u), (n = !0)));
            if (
              (a ||
                (n = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4")),
              "required" == i.persistentState && (n = !1),
              n)
            )
              return void (this.a = o);
          }
          throw (
            ((i = Error("Unsupported keySystem")),
            (i.name = "NotSupportedError"),
            (i.code = DOMException.NOT_SUPPORTED_ERR),
            i)
          );
        }
        function Mo(t) {
          var e = this.mediaKeys;
          return (
            e && e != t && Ro(e, null),
            delete this.mediaKeys,
            (this.mediaKeys = t) ? Ro(t, this) : Promise.resolve()
          );
        }
        function Ao(t) {
          (this.a = new MSMediaKeys(t)), (this.b = new D());
        }
        function Ro(t, e) {
          function n() {
            e.msSetMediaKeys(r.a), e.removeEventListener("loadedmetadata", n);
          }
          if ((F(t.b), !e)) return Promise.resolve();
          L(t.b, e, "msneedkey", jo);
          var r = t;
          try {
            return (
              1 <= e.readyState
                ? e.msSetMediaKeys(t.a)
                : e.addEventListener("loadedmetadata", n),
              Promise.resolve()
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }
        function No(t) {
          ye.call(this),
            (this.c = null),
            (this.g = t),
            (this.b = this.a = null),
            (this.f = new D()),
            (this.sessionId = ""),
            (this.expiration = NaN),
            (this.closed = new g()),
            (this.keyStatuses = new Uo());
        }
        function jo(t) {
          var e = document.createEvent("CustomEvent");
          e.initCustomEvent("encrypted", !1, !1, null),
            (e.initDataType = "cenc");
          var n = t.initData;
          if (n) {
            var r = new ko(n);
            if (1 >= r.a.length) t = n;
            else {
              var i = [];
              for (t = 0; t < r.a.length; t++)
                i.push(n.subarray(r.a[t].start, r.a[t].end + 1));
              for (n = A(i, Do), t = r = 0; t < n.length; t++) r += n[t].length;
              for (r = new Uint8Array(r), t = i = 0; t < n.length; t++)
                r.set(n[t], i), (i += n[t].length);
              t = r;
            }
          } else t = n;
          (e.initData = t), this.dispatchEvent(e);
        }
        function Do(t, e) {
          return at(t, e);
        }
        function Lo(t, e) {
          var n = t.keyStatuses;
          (n.size = void 0 == e ? 0 : 1),
            (n.a = e),
            t.dispatchEvent(new le("keystatuseschange"));
        }
        function Uo() {
          (this.size = 0), (this.a = void 0);
        }
        function Fo() {
          return Promise.reject(
            Error("The key system specified is not supported.")
          );
        }
        function Bo(t) {
          return t
            ? Promise.reject(Error("MediaKeys not supported."))
            : Promise.resolve();
        }
        function zo() {
          throw new TypeError("Illegal constructor.");
        }
        function Ho() {
          throw new TypeError("Illegal constructor.");
        }
        function qo(e) {
          (Ps = e),
            (ks = new Uint8Array([0]).buffer),
            (navigator.requestMediaKeySystemAccess = Ko),
            delete HTMLMediaElement.prototype.mediaKeys,
            (HTMLMediaElement.prototype.mediaKeys = null),
            (HTMLMediaElement.prototype.setMediaKeys = Wo),
            (t.MediaKeys = Yo),
            (t.MediaKeySystemAccess = Go);
        }
        function Vo(t) {
          var e = Ps;
          return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t;
        }
        function Ko(t, e) {
          try {
            var n = new Go(t, e);
            return Promise.resolve(n);
          } catch (t) {
            return Promise.reject(t);
          }
        }
        function Wo(t) {
          var e = this.mediaKeys;
          return (
            e && e != t && $o(e, null),
            delete this.mediaKeys,
            (this.mediaKeys = t) && $o(t, this),
            Promise.resolve()
          );
        }
        function Go(t, e) {
          this.a = this.keySystem = t;
          var n = !1;
          "org.w3.clearkey" == t &&
            ((this.a = "webkit-org.w3.clearkey"), (n = !1));
          for (
            var r = !1,
              i = document.getElementsByTagName("video"),
              o = i.length ? i[0] : document.createElement("video"),
              a = 0;
            a < e.length;
            ++a
          ) {
            var s = {
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                initDataTypes: (i = e[a]).initDataTypes,
                sessionTypes: ["temporary"],
                label: i.label,
              },
              u = !1;
            if (i.audioCapabilities)
              for (var c = 0; c < i.audioCapabilities.length; ++c) {
                var l = i.audioCapabilities[c];
                if (l.contentType) {
                  var u = !0,
                    f = l.contentType.split(";")[0];
                  o.canPlayType(f, this.a) &&
                    (s.audioCapabilities.push(l), (r = !0));
                }
              }
            if (i.videoCapabilities)
              for (c = 0; c < i.videoCapabilities.length; ++c)
                (l = i.videoCapabilities[c]).contentType &&
                  ((u = !0),
                  o.canPlayType(l.contentType, this.a) &&
                    (s.videoCapabilities.push(l), (r = !0)));
            if (
              (u ||
                (r =
                  o.canPlayType("video/mp4", this.a) ||
                  o.canPlayType("video/webm", this.a)),
              "required" == i.persistentState &&
                (n
                  ? ((s.persistentState = "required"),
                    (s.sessionTypes = ["persistent-license"]))
                  : (r = !1)),
              r)
            )
              return void (this.b = s);
          }
          throw (
            ((n = "Unsupported keySystem"),
            ("org.w3.clearkey" != t && "com.widevine.alpha" != t) ||
              (n = "None of the requested configurations were supported."),
            (n = Error(n)),
            (n.name = "NotSupportedError"),
            (n.code = DOMException.NOT_SUPPORTED_ERR),
            n)
          );
        }
        function Yo(t) {
          (this.g = t),
            (this.b = null),
            (this.a = new D()),
            (this.c = []),
            (this.f = {});
        }
        function $o(t, e) {
          (t.b = e), F(t.a);
          var n = Ps;
          e &&
            (L(t.a, e, n + "needkey", t.Ld.bind(t)),
            L(t.a, e, n + "keymessage", t.Kd.bind(t)),
            L(t.a, e, n + "keyadded", t.Id.bind(t)),
            L(t.a, e, n + "keyerror", t.Jd.bind(t)));
        }
        function Xo(t, e) {
          var n = t.f[e];
          return (
            n || ((n = t.c.shift()) ? ((n.sessionId = e), (t.f[e] = n)) : null)
          );
        }
        function Jo(t, e, n) {
          ye.call(this),
            (this.f = t),
            (this.h = !1),
            (this.a = this.b = null),
            (this.c = e),
            (this.g = n),
            (this.sessionId = ""),
            (this.expiration = NaN),
            (this.closed = new g()),
            (this.keyStatuses = new ta());
        }
        function Qo(t, e, n) {
          if (t.h)
            return Promise.reject(Error("The session is already initialized."));
          t.h = !0;
          try {
            if ("persistent-license" == t.g)
              if (n) var r = new Uint8Array(Q("LOAD_SESSION|" + n));
              else {
                var i = Q("PERSISTENT|"),
                  o = new Uint8Array(i.byteLength + e.byteLength);
                o.set(new Uint8Array(i), 0),
                  o.set(new Uint8Array(e), i.byteLength),
                  (r = o);
              }
            else r = new Uint8Array(e);
          } catch (t) {
            return Promise.reject(t);
          }
          t.b = new g();
          var a = Vo("generateKeyRequest");
          try {
            t.f[a](t.c, r);
          } catch (e) {
            if ("InvalidStateError" != e.name)
              return (t.b = null), Promise.reject(e);
            setTimeout(
              function () {
                try {
                  this.f[a](this.c, r);
                } catch (t) {
                  this.b.reject(t), (this.b = null);
                }
              }.bind(t),
              10
            );
          }
          return t.b;
        }
        function Zo(t, e) {
          var n = t.keyStatuses;
          (n.size = void 0 == e ? 0 : 1),
            (n.a = e),
            t.dispatchEvent(new le("keystatuseschange"));
        }
        function ta() {
          (this.size = 0), (this.a = void 0);
        }
        function ea() {
          var t = MediaSource.prototype.addSourceBuffer;
          MediaSource.prototype.addSourceBuffer = function () {
            var e = t.apply(this, arguments);
            return (e.abort = function () {}), e;
          };
        }
        function na() {
          var t = MediaSource.prototype.endOfStream;
          MediaSource.prototype.endOfStream = function () {
            for (var e, n = 0, r = 0; r < this.sourceBuffers.length; ++r)
              (e = this.sourceBuffers[r]),
                (e = e.buffered.end(e.buffered.length - 1)),
                (n = Math.max(n, e));
            if (!isNaN(this.duration) && n < this.duration)
              for (this.dc = !0, r = 0; r < this.sourceBuffers.length; ++r)
                (e = this.sourceBuffers[r]), (e.Zb = !1);
            return t.apply(this, arguments);
          };
          var e = !1,
            n = MediaSource.prototype.addSourceBuffer;
          MediaSource.prototype.addSourceBuffer = function () {
            var t = n.apply(this, arguments);
            return (
              (t.mediaSource_ = this),
              t.addEventListener("updateend", ra, !1),
              e || (this.addEventListener("sourceclose", ia, !1), (e = !0)),
              t
            );
          };
        }
        function ra(t) {
          var e = t.target,
            n = e.mediaSource_;
          if (n.dc) {
            for (
              t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation(),
                e.Zb = !0,
                t = 0;
              t < n.sourceBuffers.length;
              ++t
            )
              if (0 == n.sourceBuffers[t].Zb) return;
            n.dc = !1;
          }
        }
        function ia(t) {
          t = t.target;
          for (var e = 0; e < t.sourceBuffers.length; ++e)
            t.sourceBuffers[e].removeEventListener("updateend", ra, !1);
          t.removeEventListener("sourceclose", ia, !1);
        }
        function oa() {
          var t = MediaSource.isTypeSupported,
            e = /^dv(?:he|av)\./;
          MediaSource.isTypeSupported = function (n) {
            for (
              var r, i, o = n.split(/ *; */), a = o[0], s = {}, u = 1;
              u < o.length;
              ++u
            )
              (r = o[u].split("=")),
                (i = r[0]),
                (r = r[1].replace(/"(.*)"/, "$1")),
                (s[i] = r);
            if (!(r = s.codecs)) return t(n);
            var c = !1,
              l = !1;
            (n = r.split(",").filter(function (t) {
              return e.test(t)
                ? ((l = !0), !1)
                : (/^(hev|hvc)1\.2/.test(t) && (c = !0), !0);
            })),
              l && (c = !1),
              (s.codecs = n.join(",")),
              c && (s.eotf = "smpte2084");
            for (i in s) (r = s[i]), (a += "; " + i + '="' + r + '"');
            return cast.__platform__.canDisplayType(a);
          };
        }
        function aa(t) {
          if (((this.c = []), (this.b = []), (this.Aa = Cs), t))
            try {
              t(this.ka.bind(this), this.a.bind(this));
            } catch (t) {
              this.a(t);
            }
        }
        function sa(t) {
          var e = new aa();
          return (
            e.ka(void 0),
            e.then(function () {
              return t;
            })
          );
        }
        function ua(t) {
          var e = new aa();
          return e.a(t), e;
        }
        function ca(t) {
          function e(t, e, n) {
            t.Aa == Cs && ((i[e] = n), ++r == i.length && t.ka(i));
          }
          var n = new aa();
          if (!t.length) return n.ka([]), n;
          for (
            var r = 0, i = Array(t.length), o = n.a.bind(n), a = 0;
            a < t.length;
            ++a
          )
            t[a] && t[a].then
              ? t[a].then(e.bind(null, n, a), o)
              : e(n, a, t[a]);
          return n;
        }
        function la(t) {
          for (
            var e = new aa(), n = e.ka.bind(e), r = e.a.bind(e), i = 0;
            i < t.length;
            ++i
          )
            t[i] && t[i].then ? t[i].then(n, r) : n(t[i]);
          return e;
        }
        function fa(t, e, n) {
          Ms.push(
            function () {
              if (n && "function" == typeof n) {
                try {
                  var t = n(this.rb);
                } catch (t) {
                  return void e.a(t);
                }
                try {
                  var r = t && t.then;
                } catch (t) {
                  return void e.a(t);
                }
                t instanceof aa
                  ? t == e
                    ? e.a(new TypeError("Chaining cycle detected"))
                    : t.then(e.ka.bind(e), e.a.bind(e))
                  : r
                  ? ha(t, r, e)
                  : e.ka(t);
              } else 1 == this.Aa ? e.ka(this.rb) : e.a(this.rb);
            }.bind(t)
          ),
            null == Is && (Is = da(pa));
        }
        function ha(t, e, n) {
          try {
            var r = !1;
            e.call(
              t,
              function (t) {
                if (!r) {
                  r = !0;
                  try {
                    var e = t && t.then;
                  } catch (t) {
                    return void n.a(t);
                  }
                  e ? ha(t, e, n) : n.ka(t);
                }
              },
              n.a.bind(n)
            );
          } catch (t) {
            n.a(t);
          }
        }
        function pa() {
          for (; Ms.length; ) {
            null != Is && (ma(Is), (Is = null));
            var t = Ms;
            Ms = [];
            for (var e = 0; e < t.length; ++e) t[e]();
          }
        }
        function da() {
          return 0;
        }
        function ma() {}
        function va() {
          return {
            droppedVideoFrames: this.webkitDroppedFrameCount,
            totalVideoFrames: this.webkitDecodedFrameCount,
            corruptedVideoFrames: 0,
            creationTime: NaN,
            totalFrameDelay: 0,
          };
        }
        function ya(e, n, r) {
          return new t.TextTrackCue(e, n, r);
        }
        function ga(e, n, r) {
          return new t.TextTrackCue(e + "-" + n + "-" + r, e, n, r);
        }
        function ba(t, e, n) {
          (this.startTime = t),
            (this.endTime = e),
            (this.l = n),
            (this.position = null),
            (this.i = As),
            (this.size = 100),
            (this.f = Rs),
            (this.b = Ls),
            (this.g = Bs),
            (this.c = null),
            (this.I = ""),
            (this.h = Hs),
            (this.j = js),
            (this.B = this.m = this.s = ""),
            (this.D = Vs),
            (this.C = Ks),
            (this.w = ""),
            (this.a = []),
            (this.O = !0),
            (this.id = "");
        }
        function wa() {}
        function _a(t) {
          var e = [];
          if (!t) return e;
          for (var n = t.childNodes, r = 0; r < n.length; r++) {
            var i = "span" == n[r].nodeName && "p" == t.nodeName;
            n[r].nodeType != Node.ELEMENT_NODE ||
              "br" == n[r].nodeName ||
              i ||
              ((i = _a(n[r])), (e = e.concat(i)));
          }
          return e.length || e.push(t), e;
        }
        function Ea(t, e) {
          for (var n = t.childNodes, r = 0; r < n.length; r++)
            if ("br" == n[r].nodeName && 0 < r) n[r - 1].textContent += "\n";
            else if (0 < n[r].childNodes.length) Ea(n[r], e);
            else if (e) {
              var i = (i = n[r].textContent.trim()).replace(/\s+/g, " ");
              n[r].textContent = i;
            }
        }
        function Ta(t, e) {
          for (var n = e.split(" "), r = 0; r < n.length; r++)
            switch (n[r]) {
              case "underline":
                0 > t.a.indexOf("underline") && t.a.push("underline");
                break;
              case "noUnderline":
                0 <= t.a.indexOf("underline") && N(t.a, "underline");
                break;
              case "lineThrough":
                0 > t.a.indexOf("lineThrough") && t.a.push("lineThrough");
                break;
              case "noLineThrough":
                0 <= t.a.indexOf("lineThrough") && N(t.a, "lineThrough");
                break;
              case "overline":
                0 > t.a.indexOf("overline") && t.a.push("overline");
                break;
              case "noOverline":
                0 <= t.a.indexOf("overline") && N(t.a, "overline");
            }
        }
        function Sa(t, e, n, r) {
          return (t = Oa(t, n, r)) ? t : xa(e, n, r);
        }
        function xa(t, e, n) {
          for (var r = _a(t), i = 0; i < r.length; i++) {
            var o = r[i].getAttribute(n);
            if (o) return o;
          }
          return (t = Pa(t, "style", e)) ? t.getAttribute(n) : null;
        }
        function Oa(t, e, n) {
          return (t = Pa(t, "style", e)) ? t.getAttribute(n) : null;
        }
        function Pa(t, e, n) {
          if (!t || 1 > n.length) return null;
          var r = null,
            i = t;
          for (
            t = null;
            i &&
            !(t = i.getAttribute(e)) &&
            (i = i.parentNode) instanceof Element;

          );
          if ((e = t))
            for (t = 0; t < n.length; t++)
              if (n[t].getAttribute("xml:id") == e) {
                r = n[t];
                break;
              }
          return r;
        }
        function ka(t, e) {
          n = null;
          if (Gs.test(t))
            var n = Gs.exec(t),
              r = Number(n[1]),
              i = Number(n[2]),
              o = Number(n[3]),
              a = Number(n[4]),
              a = a + (Number(n[5]) || 0) / e.b,
              o = o + a / e.frameRate,
              n = o + 60 * i + 3600 * r;
          else
            Ys.test(t)
              ? (n = Ca(Ys, t))
              : $s.test(t)
              ? (n = Ca($s, t))
              : Xs.test(t)
              ? ((n = Xs.exec(t)), (n = Number(n[1]) / e.frameRate))
              : Js.test(t)
              ? ((n = Js.exec(t)), (n = Number(n[1]) / e.a))
              : Qs.test(t) && (n = Ca(Qs, t));
          return n;
        }
        function Ca(t, e) {
          var n = t.exec(e);
          return n && "" != n[0]
            ? (Number(n[4]) || 0) / 1e3 +
                (Number(n[3]) || 0) +
                60 * (Number(n[2]) || 0) +
                3600 * (Number(n[1]) || 0)
            : null;
        }
        function Ia(t, e, n, r) {
          (this.frameRate = Number(t) || 30),
            (this.b = Number(e) || 1),
            (this.a = Number(r)),
            this.a || (this.a = t ? this.frameRate * this.b : 1),
            n &&
              (t = /^(\d+) (\d+)$/g.exec(n)) &&
              (this.frameRate *= t[1] / t[2]);
        }
        function Ma() {
          this.a = new wa();
        }
        function Aa() {}
        function Ra(t, e) {
          var n;
          (n = /^align:(start|middle|center|end|left|right)$/.exec(e))
            ? ((n = n[1]), (t.f = "middle" == n ? Rs : Ns[n.toUpperCase()]))
            : (n = /^vertical:(lr|rl)$/.exec(e))
            ? (t.b = "lr" == n[1] ? Us : Fs)
            : (n = /^size:([\d\.]+)%$/.exec(e))
            ? (t.size = Number(n[1]))
            : (n =
                /^position:([\d\.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(
                  e
                ))
            ? ((t.position = Number(n[1])),
              n[2] &&
                ((n = n[2]),
                (t.i =
                  "line-left" == n || "start" == n
                    ? "line-left"
                    : "line-right" == n || "end" == n
                    ? "line-right"
                    : "center")))
            : (n = /^line:([\d\.]+)%(?:,(start|end|center))?$/.exec(e))
            ? ((t.g = zs),
              (t.c = Number(n[1])),
              n[2] && (t.h = qs[n[2].toUpperCase()]))
            : (n = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(e)) &&
              ((t.g = Bs),
              (t.c = Number(n[1])),
              n[2] && (t.h = qs[n[2].toUpperCase()]));
        }
        function Na(t) {
          if (!(t = nr(t, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g)))
            return null;
          var e = Number(t[2]),
            n = Number(t[3]);
          return 59 < e || 59 < n
            ? null
            : Number(t[4]) / 1e3 + n + 60 * e + 3600 * (Number(t[1]) || 0);
        }
        function ja() {
          this.a = null;
        }
        function Da(t, e, n) {
          var r, i, o;
          return (
            new Qe()
              .G(
                "payl",
                en(function (t) {
                  r = $(t);
                })
              )
              .G(
                "iden",
                en(function (t) {
                  i = $(t);
                })
              )
              .G(
                "sttg",
                en(function (t) {
                  o = $(t);
                })
              )
              .parse(t),
            r ? La(r, i, o, e, n) : null
          );
        }
        function La(t, e, n, r, i) {
          if (((t = new ba(r, i, t)), e && (t.id = e), n))
            for (e = new er(n), n = rr(e); n; )
              Ra(t, n), nr(e, /[ \t]+/gm), (n = rr(e));
          return t;
        }
        var Ua,
          Fa = this;
        (Fa.Le = !0),
          (a.prototype.getBandwidthEstimate = function (t) {
            return 128e3 > this.a ? t : Math.min(o(this.b), o(this.c));
          }),
          e("shaka.util.Error", u),
          (u.prototype.toString = function () {
            return "shaka.util.Error " + JSON.stringify(this, null, "  ");
          }),
          (u.Severity = { RECOVERABLE: 1, CRITICAL: 2 }),
          (u.Category = {
            NETWORK: 1,
            TEXT: 2,
            MEDIA: 3,
            MANIFEST: 4,
            STREAMING: 5,
            DRM: 6,
            PLAYER: 7,
            CAST: 8,
            STORAGE: 9,
          }),
          (u.Code = {
            UNSUPPORTED_SCHEME: 1e3,
            BAD_HTTP_STATUS: 1001,
            HTTP_ERROR: 1002,
            TIMEOUT: 1003,
            MALFORMED_DATA_URI: 1004,
            UNKNOWN_DATA_URI_ENCODING: 1005,
            REQUEST_FILTER_ERROR: 1006,
            RESPONSE_FILTER_ERROR: 1007,
            INVALID_TEXT_HEADER: 2e3,
            INVALID_TEXT_CUE: 2001,
            UNABLE_TO_DETECT_ENCODING: 2003,
            BAD_ENCODING: 2004,
            INVALID_XML: 2005,
            INVALID_MP4_TTML: 2007,
            INVALID_MP4_VTT: 2008,
            BUFFER_READ_OUT_OF_BOUNDS: 3e3,
            JS_INTEGER_OVERFLOW: 3001,
            EBML_OVERFLOW: 3002,
            EBML_BAD_FLOATING_POINT_SIZE: 3003,
            MP4_SIDX_WRONG_BOX_TYPE: 3004,
            MP4_SIDX_INVALID_TIMESCALE: 3005,
            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
            WEBM_CUES_ELEMENT_MISSING: 3007,
            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
            WEBM_INFO_ELEMENT_MISSING: 3010,
            WEBM_DURATION_ELEMENT_MISSING: 3011,
            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
            MEDIA_SOURCE_OPERATION_FAILED: 3014,
            MEDIA_SOURCE_OPERATION_THREW: 3015,
            VIDEO_ERROR: 3016,
            QUOTA_EXCEEDED_ERROR: 3017,
            UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
            DASH_INVALID_XML: 4001,
            DASH_NO_SEGMENT_INFO: 4002,
            DASH_EMPTY_ADAPTATION_SET: 4003,
            DASH_EMPTY_PERIOD: 4004,
            DASH_WEBM_MISSING_INIT: 4005,
            DASH_UNSUPPORTED_CONTAINER: 4006,
            DASH_PSSH_BAD_ENCODING: 4007,
            DASH_NO_COMMON_KEY_SYSTEM: 4008,
            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
            DASH_CONFLICTING_KEY_IDS: 4010,
            UNPLAYABLE_PERIOD: 4011,
            RESTRICTIONS_CANNOT_BE_MET: 4012,
            NO_PERIODS: 4014,
            HLS_PLAYLIST_HEADER_MISSING: 4015,
            INVALID_HLS_TAG: 4016,
            HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
            DASH_DUPLICATE_REPRESENTATION_ID: 4018,
            HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
            HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
            HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
            HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
            HLS_REQUIRED_TAG_MISSING: 4024,
            HLS_COULD_NOT_GUESS_CODECS: 4025,
            HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
            DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
            DASH_XLINK_DEPTH_LIMIT: 4028,
            HLS_LIVE_CONTENT_NOT_SUPPORTED: 4029,
            INVALID_STREAMS_CHOSEN: 5005,
            NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
            FAILED_TO_CREATE_CDM: 6002,
            FAILED_TO_ATTACH_TO_VIDEO: 6003,
            INVALID_SERVER_CERTIFICATE: 6004,
            FAILED_TO_CREATE_SESSION: 6005,
            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
            LICENSE_REQUEST_FAILED: 6007,
            LICENSE_RESPONSE_REJECTED: 6008,
            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
            NO_LICENSE_SERVER_GIVEN: 6012,
            OFFLINE_SESSION_REMOVED: 6013,
            EXPIRED: 6014,
            LOAD_INTERRUPTED: 7e3,
            CAST_API_UNAVAILABLE: 8e3,
            NO_CAST_RECEIVERS: 8001,
            ALREADY_CASTING: 8002,
            UNEXPECTED_CAST_ERROR: 8003,
            CAST_CANCELED_BY_USER: 8004,
            CAST_CONNECTION_TIMED_OUT: 8005,
            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
            STORAGE_NOT_SUPPORTED: 9e3,
            INDEXED_DB_ERROR: 9001,
            OPERATION_ABORTED: 9002,
            REQUESTED_ITEM_NOT_FOUND: 9003,
            MALFORMED_OFFLINE_URI: 9004,
            CANNOT_STORE_LIVE_OFFLINE: 9005,
            STORE_ALREADY_IN_PROGRESS: 9006,
            NO_INIT_DATA_FOR_OFFLINE: 9007,
            LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
            CONTENT_UNSUPPORTED_BY_BROWSER: 9009,
          });
        var Ba =
          /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
        ((Ua = c.prototype).ca = ""),
          (Ua.Ba = ""),
          (Ua.ha = ""),
          (Ua.Ia = null),
          (Ua.$ = ""),
          (Ua.ua = ""),
          (Ua.toString = function () {
            var t = [],
              e = this.ca;
            if ((e && t.push(d(e, za, !0), ":"), (e = this.ha))) {
              t.push("//");
              var n = this.Ba;
              n && t.push(d(n, za, !0), "@"),
                t.push(
                  encodeURIComponent(e).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
                ),
                null != (e = this.Ia) && t.push(":", String(e));
            }
            return (
              (e = this.$) &&
                (this.ha && "/" != e.charAt(0) && t.push("/"),
                t.push(d(e, "/" == e.charAt(0) ? qa : Ha, !0))),
              (e = this.a.toString()) && t.push("?", e),
              (e = this.ua) && t.push("#", d(e, Ka)),
              t.join("")
            );
          }),
          (Ua.resolve = function (t) {
            var e = new c(this);
            "data" === e.ca && (e = new c());
            var n = !!t.ca;
            n ? l(e, t.ca) : (n = !!t.Ba),
              n ? (e.Ba = t.Ba) : (n = !!t.ha),
              n ? (e.ha = t.ha) : (n = null != t.Ia);
            i = t.$;
            if (n) f(e, t.Ia);
            else if ((n = !!t.$))
              if (
                ("/" != i.charAt(0) &&
                  (this.ha && !this.$
                    ? (i = "/" + i)
                    : -1 != (r = e.$.lastIndexOf("/")) &&
                      (i = e.$.substr(0, r + 1) + i)),
                ".." == i || "." == i)
              )
                i = "";
              else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                for (
                  var r = !i.lastIndexOf("/", 0),
                    i = i.split("/"),
                    o = [],
                    a = 0;
                  a < i.length;

                ) {
                  var s = i[a++];
                  "." == s
                    ? r && a == i.length && o.push("")
                    : ".." == s
                    ? ((1 < o.length || (1 == o.length && "" != o[0])) &&
                        o.pop(),
                      r && a == i.length && o.push(""))
                    : (o.push(s), (r = !0));
                }
                i = o.join("/");
              }
            return (
              n ? (e.$ = i) : (n = "" !== t.a.toString()),
              n ? h(e, y(t.a)) : (n = !!t.ua),
              n && (e.ua = t.ua),
              e
            );
          });
        var za = /[#\/\?@]/g,
          Ha = /[\#\?:]/g,
          qa = /[\#\?]/g,
          Va = /[\#\?@]/g,
          Ka = /#/g;
        (v.prototype.a = null),
          (v.prototype.c = null),
          (v.prototype.toString = function () {
            if (this.b) return this.b;
            if (!this.a) return "";
            var t,
              e = [];
            for (t in this.a)
              for (
                var n = encodeURIComponent(t), r = this.a[t], i = 0;
                i < r.length;
                i++
              ) {
                var o = n;
                "" !== r[i] && (o += "=" + encodeURIComponent(r[i])), e.push(o);
              }
            return (this.b = e.join("&"));
          }),
          e("shaka.net.NetworkingEngine", C),
          (C.RequestType = { MANIFEST: 0, SEGMENT: 1, LICENSE: 2, APP: 3 });
        var Wa = {};
        (C.registerScheme = function (t, e) {
          Wa[t] = e;
        }),
          (C.unregisterScheme = function (t) {
            delete Wa[t];
          }),
          (C.prototype.Ud = function (t) {
            this.b.push(t);
          }),
          (C.prototype.registerRequestFilter = C.prototype.Ud),
          (C.prototype.Ce = function (t) {
            var e = this.b;
            0 <= (t = e.indexOf(t)) && e.splice(t, 1);
          }),
          (C.prototype.unregisterRequestFilter = C.prototype.Ce),
          (C.prototype.Oc = function () {
            this.b = [];
          }),
          (C.prototype.clearAllRequestFilters = C.prototype.Oc),
          (C.prototype.Vd = function (t) {
            this.c.push(t);
          }),
          (C.prototype.registerResponseFilter = C.prototype.Vd),
          (C.prototype.De = function (t) {
            var e = this.c;
            0 <= (t = e.indexOf(t)) && e.splice(t, 1);
          }),
          (C.prototype.unregisterResponseFilter = C.prototype.De),
          (C.prototype.Pc = function () {
            this.c = [];
          }),
          (C.prototype.clearAllResponseFilters = C.prototype.Pc),
          (C.prototype.o = function () {
            (this.f = !0), (this.b = []), (this.c = []);
            for (var t = [], e = 0; e < this.a.length; ++e)
              t.push(this.a[e].catch(O));
            return Promise.all(t);
          }),
          (C.prototype.destroy = C.prototype.o),
          (C.prototype.request = function (t, e) {
            if (this.f) return Promise.reject();
            (e.method = e.method || "GET"),
              (e.headers = e.headers || {}),
              (e.retryParameters = e.retryParameters
                ? T(e.retryParameters)
                : _()),
              (e.uris = T(e.uris));
            var n = Date.now(),
              r = Promise.resolve();
            return (
              this.b.forEach(function (n) {
                r = r.then(n.bind(null, t, e));
              }),
              (r = r.catch(function (t) {
                throw new u(2, 1, 1006, t);
              })),
              (r = r.then(
                function () {
                  var r = Date.now() - n,
                    i = new b(e.retryParameters);
                  return w(i).then(
                    function () {
                      return M(this, t, e, i, 0, r);
                    }.bind(this)
                  );
                }.bind(this)
              )),
              this.a.push(r),
              r
                .then(
                  function (e) {
                    return (
                      0 <= this.a.indexOf(r) &&
                        this.a.splice(this.a.indexOf(r), 1),
                      this.g &&
                        !e.fromCache &&
                        1 == t &&
                        this.g(e.timeMs, e.data.byteLength),
                      e
                    );
                  }.bind(this)
                )
                .catch(
                  function (t) {
                    return (
                      t && (t.severity = 2),
                      0 <= this.a.indexOf(r) &&
                        this.a.splice(this.a.indexOf(r), 1),
                      Promise.reject(t)
                    );
                  }.bind(this)
                )
            );
          }),
          (C.prototype.request = C.prototype.request),
          (j.prototype.push = function (t, e) {
            this.a.hasOwnProperty(t) ? this.a[t].push(e) : (this.a[t] = [e]);
          }),
          (j.prototype.get = function (t) {
            return (t = this.a[t]) ? t.slice() : null;
          }),
          (j.prototype.remove = function (t, e) {
            var n = this.a[t];
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r] == e && (n.splice(r, 1), --r);
          }),
          (D.prototype.o = function () {
            return F(this), (this.a = null), Promise.resolve();
          }),
          (D.prototype.la = function (t, e) {
            if (this.a)
              for (var n = this.a.get(e) || [], r = 0; r < n.length; ++r) {
                var i = n[r];
                i.target == t && (i.la(), this.a.remove(e, i));
              }
          }),
          (B.prototype.la = function () {
            this.target.removeEventListener(this.type, this.a, !1),
              (this.a = this.target = null);
          });
        var Ga = 1 / 15,
          Ya = {
            codecs: "codecs",
            frameRate: "framerate",
            bandwidth: "bitrate",
            width: "width",
            height: "height",
            channelsCount: "channels",
          };
        e("shaka.util.StringUtils.fromUTF8", $),
          e("shaka.util.StringUtils.fromUTF16", X),
          e("shaka.util.StringUtils.fromBytesAutoDetect", J),
          e("shaka.util.StringUtils.toUTF8", Q),
          (tt.prototype.cancel = function () {
            null != this.a && (clearTimeout(this.a), (this.a = null));
          }),
          e("shaka.util.Uint8ArrayUtils.toBase64", nt),
          e("shaka.util.Uint8ArrayUtils.fromBase64", rt),
          e("shaka.util.Uint8ArrayUtils.fromHex", it),
          e("shaka.util.Uint8ArrayUtils.toHex", ot),
          e("shaka.util.Uint8ArrayUtils.equal", at),
          e("shaka.util.Uint8ArrayUtils.concat", function (t) {
            for (var e = 0, n = 0; n < arguments.length; ++n)
              e += arguments[n].length;
            for (
              var e = new Uint8Array(e), r = 0, n = 0;
              n < arguments.length;
              ++n
            )
              e.set(arguments[n], r), (r += arguments[n].length);
            return e;
          }),
          ((Ua = st.prototype).o = function () {
            this.c = !0;
            var t = this.a.map(function (t) {
              return (t.da.close() || Promise.resolve()).catch(O);
            });
            return (
              this.i.reject(),
              this.f && t.push(this.f.o()),
              this.l && t.push(this.l.setMediaKeys(null).catch(O)),
              this.I && (clearInterval(this.I), (this.I = null)),
              this.B && this.B.cancel(),
              (this.f = this.l = this.j = this.s = this.b = this.B = null),
              (this.a = []),
              (this.m = []),
              (this.na = this.g = this.h = this.ga = null),
              Promise.all(t)
            );
          }),
          (Ua.configure = function (t) {
            this.h = t;
          }),
          (Ua.init = function (t, e) {
            var n = {},
              r = [];
            return (
              (this.fa = e),
              (this.m = t.offlineSessionIds),
              ht(this, t, e || 0 < t.offlineSessionIds.length, n, r),
              r.length ? pt(this, n, r) : ((this.D = !0), Promise.resolve())
            );
          }),
          (Ua.keySystem = function () {
            return this.b ? this.b.keySystem : "";
          }),
          (Ua.jb = function () {
            var t = this.a.map(function (t) {
              return (t = t.da.expiration), isNaN(t) ? 1 / 0 : t;
            });
            return Math.min.apply(Math, t);
          }),
          (Ua.pd = function (t) {
            for (
              var e = new Uint8Array(t.initData), n = 0;
              n < this.a.length;
              ++n
            )
              if (at(e, this.a[n].initData)) return;
            bt(this, t.initDataType, e);
          }),
          (Ua.pc = function (t) {
            this.h.delayLicenseRequestUntilPlayed && this.l.paused && !this.O
              ? this.C.push(t)
              : wt(this, t);
          }),
          (Ua.jc = function (t) {
            t = t.target;
            var e;
            for (e = 0; e < this.a.length && this.a[e].da != t; ++e);
            if (e != this.a.length) {
              var n = !1;
              t.keyStatuses.forEach(
                function (t, r) {
                  if ("string" == typeof r) {
                    var i = r;
                    (r = t), (t = i);
                  }
                  if (
                    "com.microsoft.playready" == this.b.keySystem &&
                    16 == r.byteLength
                  ) {
                    var o = (i = new DataView(r)).getUint32(0, !0),
                      a = i.getUint16(4, !0),
                      s = i.getUint16(6, !0);
                    i.setUint32(0, o, !1),
                      i.setUint16(4, a, !1),
                      i.setUint16(6, s, !1);
                  }
                  "com.microsoft.playready" == this.b.keySystem &&
                    "status-pending" == t &&
                    (t = "usable"),
                    "status-pending" != t &&
                      ((this.a[e].loaded = !0),
                      this.a.every(function (t) {
                        return t.loaded;
                      }) && this.i.resolve()),
                    "expired" == t && (n = !0),
                    (i = ot(new Uint8Array(r))),
                    (this.w[i] = t);
                }.bind(this)
              );
              var r = t.expiration - Date.now();
              (0 > r || (n && 1e3 > r)) &&
                !this.a[e].ma &&
                (this.a.splice(e, 1), t.close()),
                et(this.B);
            }
          }),
          (Ua.Td = function () {
            !q(this.w) &&
              W(this.w, function (t, e) {
                return "expired" == e;
              }) &&
              this.g(new u(2, 6, 6014)),
              this.sa(this.w);
          }),
          (Ua.zd = function () {
            for (var t = 0; t < this.C.length; t++) wt(this, this.C[t]);
            (this.O = !0), (this.C = []);
          }),
          (Ua.Sd = function () {
            this.a.forEach(
              function (t) {
                var e = t.Eb,
                  n = t.da.expiration;
                isNaN(n) && (n = 1 / 0),
                  n != e && (this.na(t.da.sessionId, n), (t.Eb = n));
              }.bind(this)
            );
          });
        var $a = {};
        e("shaka.text.TextEngine.registerParser", Ct),
          e("shaka.text.TextEngine.unregisterParser", function (t) {
            delete $a[t];
          }),
          (kt.prototype.o = function () {
            return (this.c = this.f = null), Promise.resolve();
          }),
          (kt.prototype.ie = function (t) {
            this.c = t;
          }),
          (kt.prototype.setDisplayer = kt.prototype.ie),
          (kt.prototype.remove = function (t, e) {
            return Promise.resolve().then(
              function () {
                !this.c ||
                  !this.c.remove(t, e) ||
                  null == this.b ||
                  e <= this.b ||
                  t >= this.a ||
                  (t <= this.b && e >= this.a
                    ? (this.b = this.a = null)
                    : t <= this.b && e < this.a
                    ? (this.b = e)
                    : t > this.b && e >= this.a && (this.a = t));
              }.bind(this)
            );
          }),
          (Mt.prototype.parseInit = function (t) {
            this.Ra(t, 0, null, null);
          }),
          (Mt.prototype.parseMedia = function (t, e) {
            return this.Ra(t, e.periodStart, e.segmentStart, e.segmentEnd);
          }),
          ((Ua = At.prototype).o = function () {
            this.i = !0;
            var t,
              e = [];
            for (t in this.b) {
              var n = this.b[t],
                r = n[0];
              for (
                this.b[t] = n.slice(0, 1), r && e.push(r.p.catch(O)), r = 1;
                r < n.length;
                ++r
              )
                n[r].p.catch(O), n[r].p.reject();
            }
            return (
              this.a && e.push(this.a.o()),
              Promise.all(e).then(
                function () {
                  this.h.o(),
                    (this.j = this.a = this.f = this.g = this.h = null),
                    (this.c = {}),
                    (this.b = {});
                }.bind(this)
              )
            );
          }),
          (Ua.init = function (t) {
            for (var e in t) {
              var n = Y((n = t[e]).mimeType, n.codecs);
              "text" == e
                ? Nt(this, n)
                : ((n = this.f.addSourceBuffer(n)),
                  L(this.h, n, "error", this.we.bind(this, e)),
                  L(this.h, n, "updateend", this.Ha.bind(this, e)),
                  (this.c[e] = n),
                  (this.b[e] = []));
            }
          }),
          (Ua.remove = function (t, e, n) {
            return "text" == t
              ? this.a.remove(e, n)
              : Bt(this, t, this.vc.bind(this, t, e, n));
          }),
          (Ua.endOfStream = function (t) {
            return zt(
              this,
              function () {
                t ? this.f.endOfStream(t) : this.f.endOfStream();
              }.bind(this)
            );
          }),
          (Ua.ea = function (t) {
            return zt(
              this,
              function () {
                this.f.duration = t;
              }.bind(this)
            );
          }),
          (Ua.Y = function () {
            return this.f.duration;
          }),
          (Ua.ve = function (t, e) {
            this.c[t].appendBuffer(e);
          }),
          (Ua.vc = function (t, e, n) {
            n <= e ? this.Ha(t) : this.c[t].remove(e, n);
          }),
          (Ua.Kc = function (t) {
            var e = this.c[t].appendWindowEnd;
            this.c[t].abort(), (this.c[t].appendWindowEnd = e), this.Ha(t);
          }),
          (Ua.Tc = function (t) {
            (this.g.currentTime -= 0.001), this.Ha(t);
          }),
          (Ua.ke = function (t, e) {
            (this.c[t].timestampOffset = e), this.Ha(t);
          }),
          (Ua.he = function (t, e) {
            (this.c[t].appendWindowEnd = e + 0.04), this.Ha(t);
          }),
          (Ua.we = function (t) {
            this.b[t][0].p.reject(
              new u(2, 3, 3014, this.g.error ? this.g.error.code : 0)
            );
          }),
          (Ua.Ha = function (t) {
            var e = this.b[t][0];
            e && (e.p.resolve(), Ht(this, t));
          });
        var Xa = 1,
          Ja = 2,
          Qa = {
            aar: "aa",
            abk: "ab",
            afr: "af",
            aka: "ak",
            alb: "sq",
            amh: "am",
            ara: "ar",
            arg: "an",
            arm: "hy",
            asm: "as",
            ava: "av",
            ave: "ae",
            aym: "ay",
            aze: "az",
            bak: "ba",
            bam: "bm",
            baq: "eu",
            bel: "be",
            ben: "bn",
            bih: "bh",
            bis: "bi",
            bod: "bo",
            bos: "bs",
            bre: "br",
            bul: "bg",
            bur: "my",
            cat: "ca",
            ces: "cs",
            cha: "ch",
            che: "ce",
            chi: "zh",
            chu: "cu",
            chv: "cv",
            cor: "kw",
            cos: "co",
            cre: "cr",
            cym: "cy",
            cze: "cs",
            dan: "da",
            deu: "de",
            div: "dv",
            dut: "nl",
            dzo: "dz",
            ell: "el",
            eng: "en",
            epo: "eo",
            est: "et",
            eus: "eu",
            ewe: "ee",
            fao: "fo",
            fas: "fa",
            fij: "fj",
            fin: "fi",
            fra: "fr",
            fre: "fr",
            fry: "fy",
            ful: "ff",
            geo: "ka",
            ger: "de",
            gla: "gd",
            gle: "ga",
            glg: "gl",
            glv: "gv",
            gre: "el",
            grn: "gn",
            guj: "gu",
            hat: "ht",
            hau: "ha",
            heb: "he",
            her: "hz",
            hin: "hi",
            hmo: "ho",
            hrv: "hr",
            hun: "hu",
            hye: "hy",
            ibo: "ig",
            ice: "is",
            ido: "io",
            iii: "ii",
            iku: "iu",
            ile: "ie",
            ina: "ia",
            ind: "id",
            ipk: "ik",
            isl: "is",
            ita: "it",
            jav: "jv",
            jpn: "ja",
            kal: "kl",
            kan: "kn",
            kas: "ks",
            kat: "ka",
            kau: "kr",
            kaz: "kk",
            khm: "km",
            kik: "ki",
            kin: "rw",
            kir: "ky",
            kom: "kv",
            kon: "kg",
            kor: "ko",
            kua: "kj",
            kur: "ku",
            lao: "lo",
            lat: "la",
            lav: "lv",
            lim: "li",
            lin: "ln",
            lit: "lt",
            ltz: "lb",
            lub: "lu",
            lug: "lg",
            mac: "mk",
            mah: "mh",
            mal: "ml",
            mao: "mi",
            mar: "mr",
            may: "ms",
            mkd: "mk",
            mlg: "mg",
            mlt: "mt",
            mon: "mn",
            mri: "mi",
            msa: "ms",
            mya: "my",
            nau: "na",
            nav: "nv",
            nbl: "nr",
            nde: "nd",
            ndo: "ng",
            nep: "ne",
            nld: "nl",
            nno: "nn",
            nob: "nb",
            nor: "no",
            nya: "ny",
            oci: "oc",
            oji: "oj",
            ori: "or",
            orm: "om",
            oss: "os",
            pan: "pa",
            per: "fa",
            pli: "pi",
            pol: "pl",
            por: "pt",
            pus: "ps",
            que: "qu",
            roh: "rm",
            ron: "ro",
            rum: "ro",
            run: "rn",
            rus: "ru",
            sag: "sg",
            san: "sa",
            sin: "si",
            slk: "sk",
            slo: "sk",
            slv: "sl",
            sme: "se",
            smo: "sm",
            sna: "sn",
            snd: "sd",
            som: "so",
            sot: "st",
            spa: "es",
            sqi: "sq",
            srd: "sc",
            srp: "sr",
            ssw: "ss",
            sun: "su",
            swa: "sw",
            swe: "sv",
            tah: "ty",
            tam: "ta",
            tat: "tt",
            tel: "te",
            tgk: "tg",
            tgl: "tl",
            tha: "th",
            tib: "bo",
            tir: "ti",
            ton: "to",
            tsn: "tn",
            tso: "ts",
            tuk: "tk",
            tur: "tr",
            twi: "tw",
            uig: "ug",
            ukr: "uk",
            urd: "ur",
            uzb: "uz",
            ven: "ve",
            vie: "vi",
            vol: "vo",
            wel: "cy",
            wln: "wa",
            wol: "wo",
            xho: "xh",
            yid: "yi",
            yor: "yo",
            zha: "za",
            zho: "zh",
            zul: "zu",
          };
        e("shaka.abr.SimpleAbrManager", ue),
          (ue.prototype.stop = function () {
            (this.h = null), (this.c = !1), (this.g = []), (this.f = null);
          }),
          (ue.prototype.stop = ue.prototype.stop),
          (ue.prototype.init = function (t) {
            this.h = t;
          }),
          (ue.prototype.init = ue.prototype.init),
          (ue.prototype.chooseVariant = function () {
            var t = ce(this.a.restrictions, this.g),
              e = this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);
            if (this.g.length && !t.length) throw new u(2, 4, 4012);
            for (var n = t[0] || null, r = 0; r < t.length; ++r) {
              var i = t[r],
                o =
                  (t[r + 1] || { bandwidth: 1 / 0 }).bandwidth /
                  this.a.bandwidthUpgradeTarget;
              e >= i.bandwidth / this.a.bandwidthDowngradeTarget &&
                e <= o &&
                (n = i);
            }
            return (this.f = Date.now()), n;
          }),
          (ue.prototype.chooseVariant = ue.prototype.chooseVariant),
          (ue.prototype.enable = function () {
            this.c = !0;
          }),
          (ue.prototype.enable = ue.prototype.enable),
          (ue.prototype.disable = function () {
            this.c = !1;
          }),
          (ue.prototype.disable = ue.prototype.disable),
          (ue.prototype.segmentDownloaded = function (t, e) {
            var n = this.b;
            if (!(16e3 > e)) {
              var r = (8e3 * e) / t,
                o = t / 1e3;
              (n.a += e), i(n.b, o, r), i(n.c, o, r);
            }
            if (null != this.f && this.c)
              t: {
                if (this.i) {
                  if (Date.now() - this.f < 1e3 * this.a.switchInterval)
                    break t;
                } else {
                  if (!(128e3 <= this.b.a)) break t;
                  this.i = !0;
                }
                (n = this.chooseVariant()),
                  this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate),
                  this.h(n);
              }
          }),
          (ue.prototype.segmentDownloaded = ue.prototype.segmentDownloaded),
          (ue.prototype.getBandwidthEstimate = function () {
            return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);
          }),
          (ue.prototype.getBandwidthEstimate =
            ue.prototype.getBandwidthEstimate),
          (ue.prototype.setVariants = function (t) {
            this.g = t;
          }),
          (ue.prototype.setVariants = ue.prototype.setVariants),
          (ue.prototype.configure = function (t) {
            this.a = t;
          }),
          (ue.prototype.configure = ue.prototype.configure),
          (le.prototype.preventDefault = function () {
            this.cancelable && (this.defaultPrevented = !0);
          }),
          (le.prototype.stopImmediatePropagation = function () {
            this.a = !0;
          }),
          (le.prototype.stopPropagation = function () {});
        var Za =
            "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(
              " "
            ),
          ts =
            "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(
              " "
            ),
          es = ["loop", "playbackRate"],
          ns = ["pause", "play"],
          rs =
            "adaptation buffering emsg error loading unloading texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged".split(
              " "
            ),
          is =
            "drmInfo getAudioLanguages getConfiguration getExpiration getManifestUri getPlaybackRate getTextLanguages getTextTracks getStats getVariantTracks isAudioOnly isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(
              " "
            ),
          os = ["getPlayheadTimeAsDate", "getPresentationStartTimeAsDate"],
          as = [["getConfiguration", "configure"]],
          ss = [["isTextTrackVisible", "setTextTrackVisibility"]],
          us =
            "addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(
              " "
            ),
          cs = ["load", "unload"],
          ls = !1;
        ((Ua = de.prototype).o = function () {
          return (
            me(this),
            this.a &&
              (this.a.leave(
                function () {},
                function () {}
              ),
              (this.a = null)),
            (this.C = this.B = this.h = null),
            (this.c = this.i = !1),
            (this.g = this.f = this.b = this.j = null),
            Promise.resolve()
          );
        }),
          (Ua.Z = function () {
            return this.c;
          }),
          (Ua.Kb = function () {
            return this.w;
          }),
          (Ua.init = function () {
            if (t.chrome && chrome.cast && chrome.cast.isAvailable) {
              delete t.__onGCastApiAvailable, (this.i = !0), this.h();
              var e = new chrome.cast.SessionRequest(this.D),
                e = new chrome.cast.ApiConfig(
                  e,
                  this.qd.bind(this),
                  this.Bd.bind(this),
                  "origin_scoped"
                );
              chrome.cast.initialize(
                e,
                function () {},
                function () {}
              ),
                ls && setTimeout(this.h.bind(this), 20);
            } else
              t.__onGCastApiAvailable = function (t) {
                t && this.init();
              }.bind(this);
          }),
          (Ua.Ob = function (t) {
            (this.j = t),
              this.c && ve(this, { type: "appData", appData: this.j });
          }),
          (Ua.cast = function (t) {
            return this.i
              ? ls
                ? this.c
                  ? Promise.reject(new u(1, 8, 8002))
                  : ((this.g = new g()),
                    chrome.cast.requestSession(
                      this.Gb.bind(this, t),
                      this.hc.bind(this)
                    ),
                    this.g)
                : Promise.reject(new u(1, 8, 8001))
              : Promise.reject(new u(1, 8, 8e3));
          }),
          (Ua.ib = function () {
            this.c &&
              (me(this),
              this.a &&
                (this.a.stop(
                  function () {},
                  function () {}
                ),
                (this.a = null)));
          }),
          (Ua.get = function (t, e) {
            if ("video" == t) {
              if (0 <= ns.indexOf(e)) return this.uc.bind(this, t, e);
            } else if ("player" == t) {
              if (0 <= os.indexOf(e) && !this.get("player", "isLive")())
                return function () {};
              if (0 <= us.indexOf(e)) return this.uc.bind(this, t, e);
              if (0 <= cs.indexOf(e)) return this.Xd.bind(this, t, e);
              if (0 <= is.indexOf(e)) return this.qc.bind(this, t, e);
            }
            return this.qc(t, e);
          }),
          (Ua.set = function (t, e, n) {
            (this.b[t][e] = n),
              ve(this, { type: "set", targetName: t, property: e, value: n });
          }),
          (Ua.Gb = function (t, e) {
            (this.a = e),
              this.a.addUpdateListener(this.ic.bind(this)),
              this.a.addMessageListener(
                "urn:x-cast:com.google.shaka.v2",
                this.vd.bind(this)
              ),
              this.ic(),
              ve(this, { type: "init", initState: t, appData: this.j }),
              this.g.resolve();
          }),
          (Ua.hc = function (t) {
            var e = 8003;
            switch (t.code) {
              case "cancel":
                e = 8004;
                break;
              case "timeout":
                e = 8005;
                break;
              case "receiver_unavailable":
                e = 8006;
            }
            this.g.reject(new u(2, 8, e, t));
          }),
          (Ua.qc = function (t, e) {
            return this.b[t][e];
          }),
          (Ua.uc = function (t, e) {
            ve(this, {
              type: "call",
              targetName: t,
              methodName: e,
              args: Array.prototype.slice.call(arguments, 2),
            });
          }),
          (Ua.Xd = function (t, e) {
            var n = Array.prototype.slice.call(arguments, 2),
              r = new g(),
              i = this.m.toString();
            return (
              this.m++,
              (this.f[i] = r),
              ve(this, {
                type: "asyncCall",
                targetName: t,
                methodName: e,
                args: n,
                id: i,
              }),
              r
            );
          }),
          (Ua.qd = function (t) {
            var e = this.s();
            (this.g = new g()), (this.l = !0), this.Gb(e, t);
          }),
          (Ua.Bd = function (t) {
            (ls = "available" == t), this.h();
          }),
          (Ua.ic = function () {
            var t = !!this.a && "connected" == this.a.status;
            if (this.c && !t) {
              this.C();
              for (var e in this.b) this.b[e] = {};
              me(this);
            }
            (this.w = (this.c = t) ? this.a.receiver.friendlyName : ""),
              this.h();
          }),
          (Ua.vd = function (t, e) {
            switch ((i = he(e)).type) {
              case "event":
                var n = i.targetName,
                  r = i.event;
                this.B(n, new le(r.type, r));
                break;
              case "update":
                r = i.update;
                for (n in r) {
                  var i = this.b[n] || {};
                  for (o in r[n]) i[o] = r[n][o];
                }
                this.l && (this.I(), (this.l = !1));
                break;
              case "asyncComplete":
                n = i.id;
                var o = i.error;
                if (((i = this.f[n]), delete this.f[n], i))
                  if (o) {
                    n = new u(o.severity, o.category, o.code);
                    for (r in o) n[r] = o[r];
                    i.reject(n);
                  } else i.resolve();
            }
          }),
          (ye.prototype.addEventListener = function (t, e) {
            this.ub.push(t, e);
          }),
          (ye.prototype.removeEventListener = function (t, e) {
            this.ub.remove(t, e);
          }),
          (ye.prototype.dispatchEvent = function (t) {
            for (var e = this.ub.get(t.type) || [], n = 0; n < e.length; ++n) {
              (t.target = this.Za), (t.currentTarget = this.Za);
              var r = e[n];
              try {
                r.handleEvent ? r.handleEvent(t) : r.call(this, t);
              } catch (t) {}
              if (t.a) break;
            }
            return t.defaultPrevented;
          }),
          n(ge),
          e("shaka.cast.CastProxy", ge),
          (ge.prototype.o = function (t) {
            return (
              t && this.a && this.a.ib(),
              (t = [
                this.i ? this.i.o() : null,
                this.b ? this.b.o() : null,
                this.a ? this.a.o() : null,
              ]),
              (this.a = this.i = this.j = this.h = this.b = this.c = null),
              Promise.all(t)
            );
          }),
          (ge.prototype.destroy = ge.prototype.o),
          (ge.prototype.gd = function () {
            return this.h;
          }),
          (ge.prototype.getVideo = ge.prototype.gd),
          (ge.prototype.Yc = function () {
            return this.j;
          }),
          (ge.prototype.getPlayer = ge.prototype.Yc),
          (ge.prototype.Lc = function () {
            return !!this.a && this.a.i && ls;
          }),
          (ge.prototype.canCast = ge.prototype.Lc),
          (ge.prototype.Z = function () {
            return !!this.a && this.a.Z();
          }),
          (ge.prototype.isCasting = ge.prototype.Z),
          (ge.prototype.Kb = function () {
            return this.a ? this.a.Kb() : "";
          }),
          (ge.prototype.receiverName = ge.prototype.Kb),
          (ge.prototype.cast = function () {
            var t = this.bc();
            return this.a.cast(t).then(
              function () {
                return this.b.qb();
              }.bind(this)
            );
          }),
          (ge.prototype.cast = ge.prototype.cast),
          (ge.prototype.Ob = function (t) {
            this.a.Ob(t);
          }),
          (ge.prototype.setAppData = ge.prototype.Ob),
          (ge.prototype.ze = function () {
            var t = this.a;
            if (t.c) {
              var e = t.s();
              chrome.cast.requestSession(t.Gb.bind(t, e), t.hc.bind(t));
            }
          }),
          (ge.prototype.suggestDisconnect = ge.prototype.ze),
          (ge.prototype.ib = function () {
            this.a.ib();
          }),
          (ge.prototype.forceDisconnect = ge.prototype.ib),
          ((Ua = ge.prototype).bc = function () {
            var t = {
              video: {},
              player: {},
              playerAfterLoad: {},
              manifest: this.b.fb,
              startTime: null,
            };
            return (
              this.c.pause(),
              es.forEach(
                function (e) {
                  t.video[e] = this.c[e];
                }.bind(this)
              ),
              this.c.ended || (t.startTime = this.c.currentTime),
              as.forEach(
                function (e) {
                  var n = e[1];
                  (e = this.b[e[0]]()), (t.player[n] = e);
                }.bind(this)
              ),
              ss.forEach(
                function (e) {
                  var n = e[1];
                  (e = this.b[e[0]]()), (t.playerAfterLoad[n] = e);
                }.bind(this)
              ),
              t
            );
          }),
          (Ua.qe = function () {
            this.dispatchEvent(new le("caststatuschanged"));
          }),
          (Ua.re = function () {
            this.f.dispatchEvent(new le(this.h.paused ? "pause" : "play"));
          }),
          (Ua.te = function () {
            as.forEach(
              function (t) {
                var e = t[1];
                (t = this.a.get("player", t[0])()), this.b[e](t);
              }.bind(this)
            );
            var t = this.a.get("player", "getManifestUri")(),
              e = this.a.get("video", "ended"),
              n = Promise.resolve(),
              r = this.c.autoplay,
              i = null;
            e || (i = this.a.get("video", "currentTime")),
              t &&
                ((this.c.autoplay = !1),
                (n = this.b.load(t, i)).catch(
                  function (t) {
                    this.b.dispatchEvent(new le("error", { detail: t }));
                  }.bind(this)
                ));
            var o = {};
            es.forEach(
              function (t) {
                o[t] = this.a.get("video", t);
              }.bind(this)
            ),
              n.then(
                function () {
                  es.forEach(
                    function (t) {
                      this.c[t] = o[t];
                    }.bind(this)
                  ),
                    ss.forEach(
                      function (t) {
                        var e = t[1];
                        (t = this.a.get("player", t[0])()), this.b[e](t);
                      }.bind(this)
                    ),
                    (this.c.autoplay = r),
                    t && this.c.play();
                }.bind(this)
              );
          }),
          (Ua.Ge = function (t) {
            if ("addEventListener" == t)
              return this.f.addEventListener.bind(this.f);
            if ("removeEventListener" == t)
              return this.f.removeEventListener.bind(this.f);
            if (this.a.Z() && !Object.keys(this.a.b.video).length) {
              var e = this.c[t];
              if ("function" != typeof e) return e;
            }
            return this.a.Z()
              ? this.a.get("video", t)
              : ("function" == typeof (e = this.c[t]) && (e = e.bind(this.c)),
                e);
          }),
          (Ua.Ie = function (t, e) {
            this.a.Z() ? this.a.set("video", t, e) : (this.c[t] = e);
          }),
          (Ua.He = function (t) {
            this.a.Z() || this.f.dispatchEvent(new le(t.type, t));
          }),
          (Ua.Qd = function (t) {
            return "addEventListener" == t
              ? this.g.addEventListener.bind(this.g)
              : "removeEventListener" == t
              ? this.g.removeEventListener.bind(this.g)
              : "getMediaElement" == t
              ? function () {
                  return this.h;
                }.bind(this)
              : "getNetworkingEngine" == t
              ? this.b.cc.bind(this.b)
              : (this.a.Z() &&
                  !Object.keys(this.a.b.video).length &&
                  0 <= is.indexOf(t)) ||
                !this.a.Z()
              ? (t = this.b[t]).bind(this.b)
              : this.a.get("player", t);
          }),
          (Ua.Rd = function (t) {
            this.a.Z() || this.g.dispatchEvent(t);
          }),
          (Ua.se = function (t, e) {
            this.a.Z() &&
              ("video" == t
                ? this.f.dispatchEvent(e)
                : "player" == t && this.g.dispatchEvent(e));
          }),
          n(we),
          e("shaka.cast.CastReceiver", we),
          (we.prototype.isConnected = function () {
            return this.i;
          }),
          (we.prototype.isConnected = we.prototype.isConnected),
          (we.prototype.kd = function () {
            return this.f;
          }),
          (we.prototype.isIdle = we.prototype.kd),
          (we.prototype.o = function () {
            var e = this.b ? this.b.o() : Promise.resolve();
            return (
              null != this.h && t.clearTimeout(this.h),
              (this.l = this.j = this.b = this.a = null),
              (this.i = !1),
              (this.f = !0),
              (this.h = this.g = this.c = null),
              e.then(function () {
                cast.receiver.CastReceiverManager.getInstance().stop();
              })
            );
          }),
          (we.prototype.destroy = we.prototype.o),
          ((Ua = we.prototype).oc = function () {
            (this.i =
              !!cast.receiver.CastReceiverManager.getInstance().getSenders()
                .length),
              Ee(this);
          }),
          (Ua.rc = function (t, e) {
            this.Hb(),
              Se(this, { type: "event", targetName: t, event: e }, this.c);
          }),
          (Ua.Hb = function () {
            null != this.h && t.clearTimeout(this.h),
              (this.h = t.setTimeout(this.Hb.bind(this), 500));
            var e = { video: {}, player: {} };
            ts.forEach(
              function (t) {
                e.video[t] = this.a[t];
              }.bind(this)
            );
            var n = is;
            this.b.R() && (n = n.concat(os)),
              n.forEach(
                function (t) {
                  e.player[t] = this.b[t]();
                }.bind(this)
              ),
              (n =
                cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) &&
                ((e.video.volume = n.level), (e.video.muted = n.muted)),
              Se(this, { type: "update", update: e }, this.c);
          }),
          (Ua.Sc = function () {
            var t =
              cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            t &&
              Se(
                this,
                {
                  type: "update",
                  update: { video: { volume: t.level, muted: t.muted } },
                },
                this.c
              ),
              Se(
                this,
                {
                  type: "event",
                  targetName: "video",
                  event: { type: "volumechange" },
                },
                this.c
              );
          }),
          (Ua.Ed = function (t) {
            var e = he(t.data);
            switch (e.type) {
              case "init":
                Te(this, e.initState, e.appData), this.Hb();
                break;
              case "appData":
                this.l(e.appData);
                break;
              case "set":
                var n = e.targetName,
                  r = e.property,
                  i = e.value;
                if ("video" == n) {
                  if (
                    ((e = cast.receiver.CastReceiverManager.getInstance()),
                    "volume" == r)
                  ) {
                    e.setSystemVolumeLevel(i);
                    break;
                  }
                  if ("muted" == r) {
                    e.setSystemVolumeMuted(i);
                    break;
                  }
                }
                this.j[n][r] = i;
                break;
              case "call":
                (n = e.targetName),
                  (r = e.methodName),
                  (i = e.args),
                  (n = this.j[n])[r].apply(n, i);
                break;
              case "asyncCall":
                (n = e.targetName),
                  (r = e.methodName),
                  (i = e.args),
                  (e = e.id),
                  (t = t.senderId),
                  (n = this.j[n])[r]
                    .apply(n, i)
                    .then(
                      this.zc.bind(this, t, e, null),
                      this.zc.bind(this, t, e)
                    );
            }
          }),
          (Ua.rd = function (t) {
            var e = he(t.data);
            switch (e.type) {
              case "PLAY":
                this.a.play(), xe(this, 0);
                break;
              case "PAUSE":
                this.a.pause(), xe(this, 0);
                break;
              case "SEEK":
                t = e.currentTime;
                n = e.resumeState;
                null != t && (this.a.currentTime = Number(t)),
                  n && "PLAYBACK_START" == n
                    ? (this.a.play(), xe(this, 0))
                    : n &&
                      "PLAYBACK_PAUSE" == n &&
                      (this.a.pause(), xe(this, 0));
                break;
              case "STOP":
                this.b.qb().then(
                  function () {
                    xe(this, 0);
                  }.bind(this)
                );
                break;
              case "GET_STATUS":
                xe(this, Number(e.requestId));
                break;
              case "VOLUME":
                t = (n = e.volume).level;
                var n = n.muted,
                  r = this.a.volume,
                  i = this.a.muted;
                null != t && (this.a.volume = Number(t)),
                  null != n && (this.a.muted = n),
                  (r == this.a.volume && i == this.a.muted) || xe(this, 0);
                break;
              case "LOAD":
                (n = e.media.contentId), (t = e.currentTime);
                var o = this.m(n);
                (this.a.autoplay = !0),
                  this.b
                    .load(o, t)
                    .then(
                      function () {
                        xe(this, 0, {
                          contentId: o,
                          streamType: this.b.R() ? "LIVE" : "BUFFERED",
                          contentType: "",
                        });
                      }.bind(this)
                    )
                    .catch(
                      function (t) {
                        var n = "LOAD_FAILED";
                        7 == t.category &&
                          7e3 == t.code &&
                          (n = "LOAD_CANCELLED"),
                          Se(
                            this,
                            { requestId: Number(e.requestId), type: n },
                            this.g
                          );
                      }.bind(this)
                    );
                break;
              default:
                Se(
                  this,
                  {
                    requestId: Number(e.requestId),
                    type: "INVALID_REQUEST",
                    reason: "INVALID_COMMAND",
                  },
                  this.g
                );
            }
          }),
          (Ua.zc = function (t, e, n) {
            Se(this, { type: "asyncComplete", id: e, error: n }, this.c, t);
          });
        var fs = { IDLE: "IDLE", Ic: "PLAYING", Gc: "BUFFERING", Hc: "PAUSED" },
          hs = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":
              "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":
              "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":
              "com.adobe.primetime",
          };
        e("shaka.media.InitSegmentReference", Ye),
          e("shaka.media.SegmentReference", $e),
          e("shaka.util.DataViewReader", Xe);
        var ps = 1;
        (Xe.Endianness = { Je: 0, Qe: ps }),
          (Xe.prototype.ba = function () {
            return this.v < this.L.byteLength;
          }),
          (Xe.prototype.hasMoreData = Xe.prototype.ba),
          (Xe.prototype.$c = function () {
            return this.v;
          }),
          (Xe.prototype.getPosition = Xe.prototype.$c),
          (Xe.prototype.Vc = function () {
            return this.L.byteLength;
          }),
          (Xe.prototype.getLength = Xe.prototype.Vc),
          (Xe.prototype.Jb = function () {
            try {
              var t = this.L.getUint8(this.v);
            } catch (t) {
              Je();
            }
            return (this.v += 1), t;
          }),
          (Xe.prototype.readUint8 = Xe.prototype.Jb),
          (Xe.prototype.tc = function () {
            try {
              var t = this.L.getUint16(this.v, this.a);
            } catch (t) {
              Je();
            }
            return (this.v += 2), t;
          }),
          (Xe.prototype.readUint16 = Xe.prototype.tc),
          (Xe.prototype.F = function () {
            try {
              var t = this.L.getUint32(this.v, this.a);
            } catch (t) {
              Je();
            }
            return (this.v += 4), t;
          }),
          (Xe.prototype.readUint32 = Xe.prototype.F),
          (Xe.prototype.sc = function () {
            try {
              var t = this.L.getInt32(this.v, this.a);
            } catch (t) {
              Je();
            }
            return (this.v += 4), t;
          }),
          (Xe.prototype.readInt32 = Xe.prototype.sc),
          (Xe.prototype.Ta = function () {
            try {
              if (this.a)
                var t = this.L.getUint32(this.v, !0),
                  e = this.L.getUint32(this.v + 4, !0);
              else
                (e = this.L.getUint32(this.v, !1)),
                  (t = this.L.getUint32(this.v + 4, !1));
            } catch (t) {
              Je();
            }
            if (2097151 < e) throw new u(2, 3, 3001);
            return (this.v += 8), e * Math.pow(2, 32) + t;
          }),
          (Xe.prototype.readUint64 = Xe.prototype.Ta),
          (Xe.prototype.Ja = function (t) {
            this.v + t > this.L.byteLength && Je();
            var e = this.L.buffer.slice(this.v, this.v + t);
            return (this.v += t), new Uint8Array(e);
          }),
          (Xe.prototype.readBytes = Xe.prototype.Ja),
          (Xe.prototype.J = function (t) {
            this.v + t > this.L.byteLength && Je(), (this.v += t);
          }),
          (Xe.prototype.skip = Xe.prototype.J),
          (Xe.prototype.Ib = function () {
            for (var t = this.v; this.ba() && this.L.getUint8(this.v); )
              this.v += 1;
            return (t = this.L.buffer.slice(t, this.v)), (this.v += 1), $(t);
          }),
          (Xe.prototype.readTerminatedString = Xe.prototype.Ib),
          e("shaka.util.Mp4Parser", Qe),
          (Qe.prototype.G = function (t, e) {
            var n = nn(t);
            return (this.b[n] = 0), (this.a[n] = e), this;
          }),
          (Qe.prototype.box = Qe.prototype.G),
          (Qe.prototype.aa = function (t, e) {
            var n = nn(t);
            return (this.b[n] = 1), (this.a[n] = e), this;
          }),
          (Qe.prototype.fullBox = Qe.prototype.aa),
          (Qe.prototype.parse = function (t) {
            for (t = new Xe(new DataView(t), 0); t.ba(); ) this.nb(0, t);
          }),
          (Qe.prototype.parse = Qe.prototype.parse),
          (Qe.prototype.nb = function (t, e) {
            var n = e.v,
              r = e.F(),
              i = e.F();
            switch (r) {
              case 0:
                r = e.L.byteLength - n;
                break;
              case 1:
                r = e.Ta();
            }
            var o = this.a[i];
            if (o) {
              var a = null,
                s = null;
              1 == this.b[i] && ((s = e.F()), (a = s >>> 24), (s &= 16777215)),
                (i =
                  0 < (i = n + r - e.v) ? e.Ja(i).buffer : new ArrayBuffer(0)),
                o({
                  Ra: this,
                  version: a,
                  ac: s,
                  u: (i = new Xe(new DataView(i), 0)),
                  size: r,
                  start: n + t,
                });
            } else e.J(n + r - e.v);
          }),
          (Qe.prototype.parseNext = Qe.prototype.nb),
          (Qe.children = Ze),
          (Qe.sampleDescription = tn),
          (Qe.allData = en),
          e("shaka.media.SegmentIndex", an),
          (an.prototype.o = function () {
            return (this.a = null), Promise.resolve();
          }),
          (an.prototype.destroy = an.prototype.o),
          (an.prototype.find = function (t) {
            for (var e = this.a.length - 1; 0 <= e; --e) {
              var n = this.a[e];
              if (t >= n.startTime && t < n.endTime) return n.position;
            }
            return this.a.length && t < this.a[0].startTime
              ? this.a[0].position
              : null;
          }),
          (an.prototype.find = an.prototype.find),
          (an.prototype.get = function (t) {
            return this.a.length
              ? 0 > (t -= this.a[0].position) || t >= this.a.length
                ? null
                : this.a[t]
              : null;
          }),
          (an.prototype.get = an.prototype.get),
          (an.prototype.lb = function (t) {
            for (
              var e, n, r, i = [], o = (e = 0);
              e < this.a.length && o < t.length;

            )
              (n = this.a[e]),
                (r = t[o]),
                n.startTime < r.startTime
                  ? (i.push(n), e++)
                  : (n.startTime > r.startTime ||
                      (0.1 < Math.abs(n.endTime - r.endTime)
                        ? ((r = new $e(
                            n.position,
                            r.startTime,
                            r.endTime,
                            r.a,
                            r.V,
                            r.K
                          )),
                          i.push(r))
                        : i.push(n),
                      e++),
                    o++);
            for (; e < this.a.length; ) i.push(this.a[e++]);
            if (i.length)
              for (e = i[i.length - 1].position + 1; o < t.length; )
                (r = t[o++]),
                  (r = new $e(e++, r.startTime, r.endTime, r.a, r.V, r.K)),
                  i.push(r);
            else i = t;
            this.a = i;
          }),
          (an.prototype.merge = an.prototype.lb),
          (an.prototype.wb = function (t) {
            for (var e = 0; e < this.a.length && !(this.a[e].endTime > t); ++e);
            this.a.splice(0, e);
          }),
          (an.prototype.evict = an.prototype.wb);
        var ds;
        (un.prototype.ba = function () {
          return this.a.ba();
        }),
          (pn.prototype.parse = function (t, e, n, r) {
            var i;
            if (((e = new un(new DataView(e))), 440786851 != cn(e).id))
              throw new u(2, 3, 3008);
            var o = cn(e);
            if (408125543 != o.id) throw new u(2, 3, 3009);
            for (e = o.a.byteOffset, o = new un(o.a), i = null; o.ba(); ) {
              var a = cn(o);
              if (357149030 == a.id) {
                i = a;
                break;
              }
            }
            if (!i) throw new u(2, 3, 3010);
            for (o = new un(i.a), i = 1e6, a = null; o.ba(); ) {
              var s = cn(o);
              if (2807729 == s.id) i = hn(s);
              else if (17545 == s.id)
                if (4 == (a = s).a.byteLength) a = a.a.getFloat32(0);
                else {
                  if (8 != a.a.byteLength) throw new u(2, 3, 3003);
                  a = a.a.getFloat64(0);
                }
            }
            if (null == a) throw new u(2, 3, 3011);
            if (
              ((o = i / 1e9),
              (i = a * o),
              475249515 != (t = cn(new un(new DataView(t)))).id)
            )
              throw new u(2, 3, 3007);
            return dn(t, e, o, i, n, r);
          });
        var ms = {},
          vs = {};
        e(
          "shaka.media.ManifestParser.registerParserByExtension",
          function (t, e) {
            vs[t] = e;
          }
        ),
          e("shaka.media.ManifestParser.registerParserByMime", function (t, e) {
            ms[t] = e;
          }),
          e("shaka.media.PresentationTimeline", Mn),
          (Mn.prototype.Y = function () {
            return this.a;
          }),
          (Mn.prototype.getDuration = Mn.prototype.Y),
          (Mn.prototype.ea = function (t) {
            this.a = t;
          }),
          (Mn.prototype.setDuration = Mn.prototype.ea),
          (Mn.prototype.ad = function () {
            return this.c;
          }),
          (Mn.prototype.getPresentationStartTime = Mn.prototype.ad),
          (Mn.prototype.Bc = function (t) {
            this.i = t;
          }),
          (Mn.prototype.setClockOffset = Mn.prototype.Bc),
          (Mn.prototype.ob = function (t) {
            this.h = t;
          }),
          (Mn.prototype.setStatic = Mn.prototype.ob),
          (Mn.prototype.cd = function () {
            return this.f;
          }),
          (Mn.prototype.getSegmentAvailabilityDuration = Mn.prototype.cd),
          (Mn.prototype.Dc = function (t) {
            this.f = t;
          }),
          (Mn.prototype.setSegmentAvailabilityDuration = Mn.prototype.Dc),
          (Mn.prototype.Cc = function (t) {
            this.j = t;
          }),
          (Mn.prototype.setDelay = Mn.prototype.Cc),
          (Mn.prototype.Ga = function (t, e) {
            e.length &&
              (this.b = e.reduce(function (t, e) {
                return Math.max(t, e.endTime - e.startTime);
              }, this.b));
          }),
          (Mn.prototype.notifySegments = Mn.prototype.Ga),
          (Mn.prototype.Cb = function (t) {
            this.b = Math.max(this.b, t);
          }),
          (Mn.prototype.notifyMaxSegmentDuration = Mn.prototype.Cb),
          (Mn.prototype.R = function () {
            return 1 / 0 == this.a && !this.h;
          }),
          (Mn.prototype.isLive = Mn.prototype.R),
          (Mn.prototype.wa = function () {
            return 1 / 0 != this.a && !this.h;
          }),
          (Mn.prototype.isInProgress = Mn.prototype.wa),
          (Mn.prototype.ia = function () {
            return this.Da(0);
          }),
          (Mn.prototype.getSegmentAvailabilityStart = Mn.prototype.ia),
          (Mn.prototype.Da = function (t) {
            if (1 / 0 == this.f) return this.g;
            var e = this.va();
            return Math.max(this.g, Math.min(e - this.f + t, e));
          }),
          (Mn.prototype.getSafeAvailabilityStart = Mn.prototype.Da),
          (Mn.prototype.Ac = function (t) {
            this.g = t;
          }),
          (Mn.prototype.setAvailabilityStart = Mn.prototype.Ac),
          (Mn.prototype.va = function () {
            return this.R() || this.wa()
              ? Math.min(
                  Math.max(0, (Date.now() + this.i) / 1e3 - this.b - this.c),
                  this.a
                )
              : this.a;
          }),
          (Mn.prototype.getSegmentAvailabilityEnd = Mn.prototype.va),
          (Mn.prototype.kb = function () {
            return Math.max(
              0,
              this.va() - (this.R() || this.wa() ? this.j : 0)
            );
          }),
          (Mn.prototype.getSeekRangeEnd = Mn.prototype.kb),
          e("shaka.dash.DashParser", An),
          ((Ua = An.prototype).configure = function (t) {
            this.b = t;
          }),
          (Ua.start = function (t, e) {
            return (
              (this.g = [t]),
              (this.a = e),
              Rn(this).then(
                function () {
                  return this.a && Bn(this, 0), this.c;
                }.bind(this)
              )
            );
          }),
          (Ua.stop = function () {
            return (
              (this.b = this.a = null),
              (this.g = []),
              (this.c = null),
              (this.i = []),
              (this.j = {}),
              null != this.f && (t.clearTimeout(this.f), (this.f = null)),
              Promise.resolve()
            );
          }),
          (Ua.update = function () {
            Rn(this).catch(
              function (t) {
                this.a && this.a.onError(t);
              }.bind(this)
            );
          }),
          (Ua.onExpirationUpdated = function () {}),
          (Ua.Md = function (t, e) {
            t.U = zn(e, t.W, null);
            var n = !1,
              r = (l = Pe(e, "Role"))
                .map(function (t) {
                  return t.getAttribute("value");
                })
                .filter(P),
              i = void 0;
            "text" == t.U.contentType && (i = "subtitle");
            for (var o = 0; o < l.length; o++)
              if (
                null == (f = l[o].getAttribute("schemeIdUri")) ||
                "urn:mpeg:dash:role:2011" == f
              )
                switch ((f = l[o].getAttribute("value"))) {
                  case "main":
                    n = !0;
                    break;
                  case "caption":
                  case "subtitle":
                    i = f;
                }
            var a = null,
              s = !1;
            if (
              (Pe(e, "EssentialProperty").forEach(function (t) {
                "http://dashif.org/guidelines/trickmode" ==
                t.getAttribute("schemeIdUri")
                  ? (a = t.getAttribute("value"))
                  : (s = !0);
              }),
              s)
            )
              return null;
            var c = Le(
                (l = Pe(e, "ContentProtection")),
                this.b.dash.customScheme,
                this.b.dash.ignoreDrmInfo
              ),
              l = Vt(e.getAttribute("lang") || "und"),
              f = e.getAttribute("label");
            if (
              !(r = (o = Pe(e, "Representation"))
                .map(this.Pd.bind(this, t, c, i, l, f, n, r))
                .filter(function (t) {
                  return !!t;
                })).length
            )
              throw new u(2, 4, 4003);
            return (
              (t.U.contentType && "application" != t.U.contentType) ||
                ((t.U.contentType = Wn(r[0].mimeType, r[0].codecs)),
                r.forEach(function (e) {
                  e.type = t.U.contentType;
                })),
              r.forEach(function (t) {
                c.drmInfos.forEach(function (e) {
                  t.keyId && e.keyIds.push(t.keyId);
                });
              }),
              (i = o
                .map(function (t) {
                  return t.getAttribute("id");
                })
                .filter(P)),
              {
                id: t.U.id || "__fake__" + this.h++,
                contentType: t.U.contentType,
                language: l,
                Ab: n,
                streams: r,
                drmInfos: c.drmInfos,
                Tb: a,
                Yd: i,
              }
            );
          }),
          (Ua.Pd = function (t, e, n, r, i, o, a, s) {
            if (((t.A = zn(s, t.U, null)), !qn(t.A))) return null;
            t.bandwidth = Ce(s, "bandwidth", Ne) || 0;
            var u = this.Zd.bind(this);
            if (t.A.Ua) u = yn(t, u);
            else if (t.A.pa) u = wn(t, this.j);
            else if (t.A.Va) u = Sn(t, u, this.j, !!this.c);
            else {
              var c = t.A.X,
                l = t.S.duration || 0;
              u = {
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: function (t) {
                  return 0 <= t && t < l ? 1 : null;
                },
                getSegmentReference: function (t) {
                  return 1 != t
                    ? null
                    : new $e(
                        1,
                        0,
                        l,
                        function () {
                          return c;
                        },
                        0,
                        null
                      );
                },
                initSegmentReference: null,
                presentationTimeOffset: 0,
              };
            }
            return (
              (s = Pe(s, "ContentProtection")),
              (s = Ue(
                s,
                this.b.dash.customScheme,
                e,
                this.b.dash.ignoreDrmInfo
              )),
              {
                id: this.h++,
                createSegmentIndex: u.createSegmentIndex,
                findSegmentPosition: u.findSegmentPosition,
                getSegmentReference: u.getSegmentReference,
                initSegmentReference: u.initSegmentReference,
                presentationTimeOffset: u.presentationTimeOffset,
                mimeType: t.A.mimeType,
                codecs: t.A.codecs,
                frameRate: t.A.frameRate,
                bandwidth: t.bandwidth,
                width: t.A.width,
                height: t.A.height,
                kind: n,
                encrypted: 0 < e.drmInfos.length,
                keyId: s,
                language: r,
                label: i,
                type: t.U.contentType,
                primary: o,
                trickModeVideo: null,
                containsEmsgBoxes: t.A.containsEmsgBoxes,
                roles: a,
                channelsCount: t.A.Db,
              }
            );
          }),
          (Ua.ue = function () {
            this.f = null;
            var t = Date.now();
            Rn(this)
              .then(
                function () {
                  this.a && Bn(this, (Date.now() - t) / 1e3);
                }.bind(this)
              )
              .catch(
                function (t) {
                  this.a && ((t.severity = 1), this.a.onError(t), Bn(this, 0));
                }.bind(this)
              );
          }),
          (Ua.Od = function (t, e, n) {
            var r = n.getAttribute("schemeIdUri") || "",
              i = n.getAttribute("value") || "",
              o = Ce(n, "timescale", je) || 1;
            Pe(n, "Event").forEach(
              function (n) {
                var a = Ce(n, "presentationTime", je) || 0,
                  s = Ce(n, "duration", je) || 0,
                  s = (a = a / o + t) + s / o;
                null != e &&
                  ((a = Math.min(a, t + e)), (s = Math.min(s, t + e))),
                  (n = {
                    schemeIdUri: r,
                    value: i,
                    startTime: a,
                    endTime: s,
                    id: n.getAttribute("id") || "",
                    eventElement: n,
                  }),
                  this.a.onTimelineRegionAdded(n);
              }.bind(this)
            );
          }),
          (Ua.Zd = function (t, e, n) {
            return (
              (t = I(t, this.b.retryParameters)),
              null != e &&
                (t.headers.Range = "bytes=" + e + "-" + (null != n ? n : "")),
              this.a.networkingEngine.request(1, t).then(function (t) {
                return t.data;
              })
            );
          }),
          (vs.mpd = An),
          (ms["application/dash+xml"] = An),
          (Yn.prototype.toString = function () {
            return this.value
              ? "#" + this.name + ":" + this.value
              : 0 < this.a.length
              ? "#" +
                this.name +
                ":" +
                this.a
                  .map(function (t) {
                    return t.name + '="' + t.value + '"';
                  })
                  .join(",")
              : "#" + this.name;
          }),
          (Yn.prototype.getAttribute = function (t) {
            var e = this.a.filter(function (e) {
              return e.name == t;
            });
            return e.length ? e[0] : null;
          });
        var ys =
            "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(
              " "
            ),
          gs =
            "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(
              " "
            );
        e("shaka.net.DataUriPlugin", ur),
          (ur.parse = function (e) {
            if (2 > (r = e.split(":")).length || "data" != r[0])
              throw new u(2, 1, 1004, e);
            if (2 > (r = r.slice(1).join(":").split(",")).length)
              throw new u(2, 1, 1004, e);
            var n = r[0],
              r = t.decodeURIComponent(r.slice(1).join(",")),
              i = null;
            if ((1 < (n = n.split(";")).length && (i = n[1]), "base64" == i))
              e = rt(r).buffer;
            else {
              if (i) throw new u(2, 1, 1005, e);
              e = Q(r);
            }
            return { data: e, contentType: n[0] };
          }),
          (Wa.data = ur),
          e("shaka.hls.HlsParser", cr),
          ((Ua = cr.prototype).configure = function (t) {
            this.h = t;
          }),
          (Ua.start = function (t, e) {
            return (
              (this.b = e),
              (this.m = t),
              Ar(this, t).then(
                function (e) {
                  return fr(this, e.data, t).then(
                    function () {
                      return Rr(this, this.c), this.B;
                    }.bind(this)
                  );
                }.bind(this)
              )
            );
          }),
          (Ua.stop = function () {
            return (
              (this.h = this.b = null),
              (this.g = {}),
              (this.C = {}),
              (this.B = null),
              Promise.resolve()
            );
          }),
          (Ua.update = function () {
            if (this.f) {
              for (
                var t = [], e = Object.keys(this.s), n = 0;
                n < e.length;
                n++
              ) {
                var r = e[n];
                t.push(lr(this, this.s[r], r));
              }
              return Promise.all(t);
            }
          }),
          (Ua.onExpirationUpdated = function () {});
        var bs = {
            audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
            video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
            text: [/^vtt$/, /^wvtt/, /^stpp/],
          },
          ws = {
            audio: {
              mp4: "audio/mp4",
              m4s: "audio/mp4",
              m4i: "audio/mp4",
              m4a: "audio/mp4",
              ts: "video/mp2t",
            },
            video: {
              mp4: "video/mp4",
              m4s: "video/mp4",
              m4i: "video/mp4",
              m4v: "video/mp4",
              ts: "video/mp2t",
            },
            text: {
              mp4: "application/mp4",
              m4s: "application/mp4",
              m4i: "application/mp4",
              vtt: "text/vtt",
              ttml: "application/ttml+xml",
            },
          };
        cr.prototype.I = function () {
          this.b &&
            ((this.i = null),
            this.update()
              .then(
                function () {
                  Rr(this, this.c);
                }.bind(this)
              )
              .catch(
                function (t) {
                  this.b && ((t.severity = 1), this.b.onError(t), Rr(this, 0));
                }.bind(this)
              ));
        };
        var _s = {
          "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (t) {
            if ("SAMPLE-AES-CENC" != Ir(t, "METHOD")) return null;
            var e = Ir(t, "URI"),
              e = ur.parse(e),
              e = H("com.widevine.alpha", [
                {
                  initDataType: "cenc",
                  initData: (e = new Uint8Array(e.data)),
                },
              ]);
            return (
              (t = Xn(t, "KEYID")) && (e.keyIds = [t.substr(2).toLowerCase()]),
              e
            );
          },
        };
        (vs.m3u8 = cr),
          (ms["application/x-mpegurl"] = cr),
          (ms["application/vnd.apple.mpegurl"] = cr),
          ((Ua = jr.prototype).o = function () {
            var e = this.b.o();
            return (
              (this.b = null),
              null != this.f && (t.clearInterval(this.f), (this.f = null)),
              null != this.j && (t.clearInterval(this.j), (this.j = null)),
              (this.D = this.I = this.l = this.c = this.a = null),
              e
            );
          }),
          (Ua.xb = function () {
            return this.g;
          }),
          (Ua.Fb = function () {
            (this.m = !0), this.mc();
          }),
          (Ua.Ad = function () {
            var t = this.h || 0 > this.g ? 0 : this.g;
            this.a.playbackRate &&
              this.a.playbackRate != t &&
              Fr(this, this.a.playbackRate);
          }),
          (Ua.kc = function () {
            var t = Ur(this);
            0.001 > Math.abs(this.a.currentTime - t)
              ? (L(this.b, this.a, "seeking", this.nc.bind(this)),
                L(this.b, this.a, "playing", this.lc.bind(this)))
              : (U(this.b, this.a, "seeking", this.Cd.bind(this)),
                (this.a.currentTime = t));
          }),
          (Ua.Cd = function () {
            L(this.b, this.a, "seeking", this.nc.bind(this)),
              L(this.b, this.a, "playing", this.lc.bind(this));
          }),
          (Ua.mc = function () {
            if (this.a.readyState) {
              this.a.readyState != this.C &&
                ((this.i = !1), (this.C = this.a.readyState));
              var t = this.l.smallGapLimit,
                e = this.a.currentTime,
                n = this.a.buffered;
              if (e < this.c.presentationTimeline.ia())
                (n = Br(this, e)), zr(this, e, n);
              else {
                t: {
                  if (
                    n &&
                    n.length &&
                    !(1 == n.length && 1e-6 > n.end(0) - n.start(0))
                  ) {
                    var r = 0.1;
                    /(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent) &&
                      (r = 0.5);
                    for (var i = 0; i < n.length; i++)
                      if (n.start(i) > e && (!i || n.end(i - 1) - e <= r)) {
                        r = i;
                        break t;
                      }
                  }
                  r = null;
                }
                if (null == r) {
                  if (3 > this.a.readyState && 0 < this.a.playbackRate)
                    if (this.w != e)
                      (this.w = e), (this.O = Date.now()), (this.s = !1);
                    else if (!this.s && this.O < Date.now() - 1e3)
                      for (r = 0; r < n.length; r++)
                        if (e >= n.start(r) && e < n.end(r) - 0.5) {
                          (this.a.currentTime += 0.1),
                            (this.w = this.a.currentTime),
                            (this.s = !0);
                          break;
                        }
                } else if (
                  (r || this.m) &&
                  !((i = n.start(r)) >= this.c.presentationTimeline.kb())
                ) {
                  var o = i - e,
                    a = !1;
                  (t = o <= t) ||
                    this.i ||
                    ((this.i = !0),
                    (o = new le("largegap", { currentTime: e, gapSize: o })),
                    (o.cancelable = !0),
                    this.D(o),
                    this.l.jumpLargeGaps && !o.defaultPrevented && (a = !0)),
                    (t || a) && (r && n.end(r - 1), zr(this, e, i));
                }
              }
            }
          }),
          (Ua.nc = function () {
            this.m = !1;
            var t = this.a.currentTime,
              e = Br(this, t);
            0.001 < Math.abs(e - t)
              ? zr(this, t, e)
              : ((this.i = !1), this.I());
          }),
          (Ua.lc = function () {
            var t = this.a.currentTime,
              e = Br(this, t);
            0.001 < Math.abs(e - t) && zr(this, t, e);
          }),
          (qr.prototype.o = function () {
            var t = this.j ? this.j.o() : Promise.resolve();
            return (
              (this.j = null),
              Wr(this),
              (this.C =
                this.h =
                this.l =
                this.w =
                this.g =
                this.B =
                this.a =
                  null),
              (this.c = []),
              t
            );
          }),
          (qr.prototype.s = function (t) {
            if (
              !this.c.some(function (e) {
                return (
                  e.info.schemeIdUri == t.schemeIdUri &&
                  e.info.startTime == t.startTime &&
                  e.info.endTime == t.endTime
                );
              })
            ) {
              var e = { info: t, status: 1 };
              this.c.push(e);
              var n = new le("timelineregionadded", { detail: Vr(t) });
              this.h(n), this.m(!0, e);
            }
          }),
          (qr.prototype.m = function (t, e) {
            var n =
                e.info.startTime > this.a.currentTime
                  ? 1
                  : e.info.endTime < this.a.currentTime
                  ? 3
                  : 2,
              r = 2 == e.status,
              i = 2 == n;
            n != e.status &&
              ((!t || r || i) &&
                (r ||
                  this.h(new le("timelineregionenter", { detail: Vr(e.info) })),
                i ||
                  this.h(new le("timelineregionexit", { detail: Vr(e.info) }))),
              (e.status = n));
          }),
          (qr.prototype.D = function () {
            (this.f = null),
              Kr(this),
              (t = ae(this.g, this.a.currentTime)) != this.i &&
                (-1 != this.i && this.C(), (this.i = t));
            var t = Pt(this.a.buffered, this.a.currentTime),
              e = xt(this.a.buffered),
              n = this.g.presentationTimeline,
              r = n.va(),
              i = "ended" == this.B.readyState,
              e = (n.R() && e >= r) || this.a.ended || i;
            this.b
              ? ((n =
                  1 *
                  Math.max(this.g.minBufferTime || 0, this.w.rebufferingGoal)),
                (e || t >= n) && 0 != this.b && ((this.b = !1), this.l(!1)))
              : !e && 0.5 > t && 1 != this.b && ((this.b = !0), this.l(!0)),
              this.c.forEach(this.m.bind(this, !1));
          }),
          ((Ua = Gr.prototype).o = function () {
            for (var t in this.c) bi(this.c[t]);
            return (
              (this.h =
                this.c =
                this.j =
                this.g =
                this.m =
                this.b =
                this.a =
                  null),
              (this.f = !0),
              Promise.resolve()
            );
          }),
          (Ua.configure = function (t) {
            (this.h = t),
              (this.w = new b(
                {
                  maxAttempts: Math.max(t.retryParameters.maxAttempts, 2),
                  baseDelay: t.retryParameters.baseDelay,
                  backoffFactor: t.retryParameters.backoffFactor,
                  fuzzFactor: t.retryParameters.fuzzFactor,
                  timeout: 0,
                },
                !0
              ));
          }),
          (Ua.init = function () {
            var t = this.a.gc(this.b.periods[ae(this.b, Lr(this.a.Sa))]);
            return t.variant || t.text
              ? ni(this, t).then(
                  function () {
                    this.a && this.a.sd && this.a.sd();
                  }.bind(this)
                )
              : Promise.reject(new u(2, 5, 5005));
          }),
          (Ua.xe = function (t) {
            if (!this.f && !t.ya && null != t.qa && !t.ta)
              if (((t.qa = null), t.ra)) yi(this, t, t.sb);
              else {
                try {
                  var e = ai(this, t);
                  null != e && (gi(this, t, e), (t.Pa = !1));
                } catch (t) {
                  return void wi(this, t);
                }
                (e = V(this.c)),
                  di(this, t),
                  e.every(function (t) {
                    return t.endOfStream;
                  }) &&
                    this.a.M.endOfStream().then(
                      function () {
                        this.b.presentationTimeline.ea(this.a.M.Y());
                      }.bind(this)
                    );
              }
          }),
          (Ua.Nd = function (t, e, n) {
            var r = n.u.Ib(),
              i = n.u.Ib(),
              o = n.u.F(),
              a = n.u.F(),
              s = n.u.F(),
              u = n.u.F();
            (n = n.u.Ja(n.u.L.byteLength - n.u.v)),
              (t = t.startTime + e.startTime + a / o),
              "urn:mpeg:dash:event:2012" == r
                ? this.a.td()
                : this.a.onEvent(
                    new le("emsg", {
                      detail: {
                        startTime: t,
                        endTime: t + s / o,
                        schemeIdUri: r,
                        value: i,
                        timescale: o,
                        presentationTimeDelta: a,
                        eventDuration: s,
                        id: u,
                        messageData: n,
                      },
                    })
                  );
          }),
          e("shaka.net.HttpPlugin", _i),
          (Wa.http = _i),
          (Wa.https = _i),
          ((Ua = Ei.prototype).init = function (t, e) {
            return Pi(this, t, e).then(
              function () {
                var e = Object.keys(t);
                return Promise.all(
                  e.map(
                    function (t) {
                      return xi(this, t).then(
                        function (e) {
                          this.c[t] = e;
                        }.bind(this)
                      );
                    }.bind(this)
                  )
                );
              }.bind(this)
            );
          }),
          (Ua.o = function () {
            return Promise.all(
              this.b.map(function (t) {
                try {
                  t.transaction.abort();
                } catch (t) {}
                return t.N.catch(O);
              })
            ).then(
              function () {
                this.a && (this.a.close(), (this.a = null));
              }.bind(this)
            );
          }),
          (Ua.get = function (t, e) {
            var n;
            return Oi(this, t, "readonly", function (t) {
              n = t.get(e);
            }).then(function () {
              return n.result;
            });
          }),
          (Ua.forEach = function (t, e) {
            return Oi(this, t, "readonly", function (t) {
              t.openCursor().onsuccess = function (t) {
                (t = t.target.result) && (e(t.value), t.continue());
              };
            });
          }),
          (Ua.remove = function (t, e) {
            return Oi(this, t, "readwrite", function (t) {
              t.delete(e);
            });
          });
        var Es = { manifest: "key", segment: "key" };
        (Di.prototype.o = function () {
          var t = this.j,
            e = this.l,
            n = this.i || Promise.resolve();
          return (
            e.length &&
              (n = n.then(function () {
                return Si(t, e);
              })),
            (this.b = {}),
            (this.l = []),
            (this.i = this.a = this.w = this.s = this.j = this.m = null),
            n
          );
        }),
          ((Ua = Bi.prototype).configure = function () {}),
          (Ua.start = function (t) {
            var e = /^offline:([0-9]+)$/.exec(t);
            if (!e) return Promise.reject(new u(2, 1, 9004, t));
            var n = Number(e[1]),
              r = ji();
            return (
              (this.a = n),
              r
                ? r
                    .init(Es)
                    .then(function () {
                      return r.get("manifest", n);
                    })
                    .then(function (t) {
                      if (!t) throw new u(2, 9, 9003, n);
                      return zi(t);
                    })
                    .then(
                      function (t) {
                        return r.o().then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return r.o().then(function () {
                          throw t;
                        });
                      }
                    )
                : Promise.reject(new u(2, 9, 9e3))
            );
          }),
          (Ua.stop = function () {
            return Promise.resolve();
          }),
          (Ua.update = function () {}),
          (Ua.onExpirationUpdated = function (t, e) {
            var n = ji();
            n.init(Es)
              .then(
                function () {
                  return n.get("manifest", this.a);
                }.bind(this)
              )
              .then(function (r) {
                if (
                  r &&
                  !(0 > r.sessionIds.indexOf(t)) &&
                  (void 0 == r.expiration || r.expiration > e)
                )
                  return (r.expiration = e), Ti(n, "manifest", r);
              })
              .catch(function () {})
              .then(function () {
                return n.o();
              });
          }),
          (ms["application/x-offline-manifest"] = Bi),
          e("shaka.offline.OfflineScheme", Hi),
          (Wa.offline = Hi),
          e("shaka.text.SimpleTextDisplayer", qi),
          (qi.prototype.remove = function (t, e) {
            return (
              !!this.a &&
              (Ki(this, function (n) {
                return !(n.startTime >= e || n.endTime <= t);
              }),
              !0)
            );
          }),
          (qi.prototype.remove = qi.prototype.remove),
          (qi.prototype.append = function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = Vi(t[n]);
              r && e.push(r);
            }
            e.slice()
              .sort(function (t, n) {
                return t.startTime != n.startTime
                  ? t.startTime - n.startTime
                  : t.endTime != n.endTime
                  ? t.endTime - n.startTime
                  : e.indexOf(n) - e.indexOf(t);
              })
              .forEach(
                function (t) {
                  this.a.addCue(t);
                }.bind(this)
              );
          }),
          (qi.prototype.append = qi.prototype.append),
          (qi.prototype.o = function () {
            return (
              this.a &&
                Ki(this, function () {
                  return !0;
                }),
              (this.a = null),
              Promise.resolve()
            );
          }),
          (qi.prototype.destroy = qi.prototype.o),
          (qi.prototype.isTextVisible = function () {
            return "showing" == this.a.mode;
          }),
          (qi.prototype.isTextVisible = qi.prototype.isTextVisible),
          (qi.prototype.setTextVisibility = function (t) {
            this.a.mode = t ? "showing" : "hidden";
          }),
          (qi.prototype.setTextVisibility = qi.prototype.setTextVisibility),
          (Wi.prototype.then = function (t) {
            return (
              (this.a = this.a.then(t).then(
                function (t) {
                  return this.b
                    ? (this.g(), Promise.reject(this.h))
                    : Promise.resolve(t);
                }.bind(this)
              )),
              this
            );
          }),
          (Wi.prototype.cancel = function (t) {
            return this.c
              ? Promise.resolve()
              : ((this.b = !0), (this.h = t), this.i);
          }),
          n(Yi),
          e("shaka.Player", Yi),
          (Yi.prototype.o = function () {
            this.I = !0;
            var t = Promise.resolve();
            return (
              this.D && (t = this.D.cancel(new u(2, 7, 7e3))),
              t.then(
                function () {
                  var t = Promise.all([
                    this.Oa,
                    no(this),
                    this.m ? this.m.o() : null,
                    this.s ? this.s.o() : null,
                  ]);
                  return (
                    (this.f = null),
                    (this.gb = !1),
                    (this.c = this.s = this.g = this.m = null),
                    t
                  );
                }.bind(this)
              )
            );
          }),
          (Yi.prototype.destroy = Yi.prototype.o),
          (Yi.version = "v2.2.1");
        var Ts = {};
        (Yi.registerSupportPlugin = function (t, e) {
          Ts[t] = e;
        }),
          (Yi.isBrowserSupported = function () {
            return !!(
              t.Promise &&
              t.Uint8Array &&
              Array.prototype.forEach &&
              t.MediaSource &&
              MediaSource.isTypeSupported &&
              t.MediaKeys &&
              t.navigator &&
              t.navigator.requestMediaKeySystemAccess &&
              t.MediaKeySystemAccess &&
              t.MediaKeySystemAccess.prototype.getConfiguration
            );
          }),
          (Yi.probeSupport = function () {
            return Et().then(function (t) {
              t = { manifest: Cn(), media: Rt(), drm: t };
              for (var e in Ts) t[e] = Ts[e]();
              return t;
            });
          }),
          (Yi.prototype.load = function (t, e, n) {
            var r = this.qb(),
              i = new Wi();
            (this.D = i), this.dispatchEvent(new le("loading"));
            var o = Date.now();
            return Gi(
              i
                .then(function () {
                  return r;
                })
                .then(
                  function () {
                    return (
                      (this.i = {
                        width: NaN,
                        height: NaN,
                        streamBandwidth: NaN,
                        decodedFrames: NaN,
                        droppedFrames: NaN,
                        estimatedBandwidth: NaN,
                        loadLatency: NaN,
                        playTime: 0,
                        bufferingTime: 0,
                        switchHistory: [],
                        stateHistory: [],
                      }),
                      L(this.m, this.f, "playing", this.Wa.bind(this)),
                      L(this.m, this.f, "pause", this.Wa.bind(this)),
                      L(this.m, this.f, "ended", this.Wa.bind(this)),
                      (this.g = new this.c.abrFactory()),
                      Qi(this),
                      (this.w = new this.c.textDisplayFactory()),
                      this.w.setTextVisibility(this.gb),
                      In(t, this.s, this.c.manifest.retryParameters, n)
                    );
                  }.bind(this)
                )
                .then(
                  function (e) {
                    return (
                      (this.l = new e()),
                      this.l.configure(this.c.manifest),
                      (e = {
                        networkingEngine: this.s,
                        filterNewPeriod: this.hb.bind(this),
                        filterAllPeriods: this.Qb.bind(this),
                        onTimelineRegionAdded: this.Gd.bind(this),
                        onEvent: this.pb.bind(this),
                        onError: this.La.bind(this),
                      }),
                      2 < this.l.start.length
                        ? this.l.start(
                            t,
                            this.s,
                            e.filterNewPeriod,
                            e.onError,
                            e.onEvent
                          )
                        : this.l.start(t, e)
                    );
                  }.bind(this)
                )
                .then(
                  function (e) {
                    if (
                      (e.periods.some(function (t) {
                        return t.variants.some(function (t) {
                          return t.video && t.audio;
                        });
                      }) &&
                        e.periods.forEach(function (t) {
                          t.variants = t.variants.filter(function (t) {
                            return t.video && t.audio;
                          });
                        }),
                      0 == e.periods.length)
                    )
                      throw new u(2, 4, 4014);
                    return (
                      (this.b = e),
                      (this.fb = t),
                      (this.j = new st(
                        this.s,
                        this.La.bind(this),
                        this.ne.bind(this),
                        this.me.bind(this)
                      )),
                      this.j.configure(this.c.drm),
                      this.j.init(e, !1)
                    );
                  }.bind(this)
                )
                .then(
                  function () {
                    this.Qb(this.b.periods),
                      (this.$a = Date.now() / 1e3),
                      (this.na = this.c.preferredAudioLanguage),
                      (this.Xa = this.c.preferredTextLanguage);
                    var t = this.b.presentationTimeline.Y(),
                      e = this.c.playRangeEnd,
                      n = this.c.playRangeStart;
                    return (
                      0 < n && (this.R() || this.b.presentationTimeline.Ac(n)),
                      e < t && (this.R() || this.b.presentationTimeline.ea(e)),
                      Promise.all([ut(this.j, this.f), this.cb])
                    );
                  }.bind(this)
                )
                .then(
                  function () {
                    return (
                      this.g.chooseStreams
                        ? this.g.init(this.Ae.bind(this))
                        : this.g.init(this.Fc.bind(this)),
                      (this.h = new jr(
                        this.f,
                        this.b,
                        this.c.streaming,
                        e || this.c.playRangeStart || null,
                        this.oe.bind(this),
                        this.pb.bind(this)
                      )),
                      (this.B = new qr(
                        this.f,
                        this.O,
                        this.b,
                        this.c.streaming,
                        this.Ec.bind(this),
                        this.pb.bind(this),
                        this.le.bind(this)
                      )),
                      (this.Ma = new At(this.f, this.O, this.w)),
                      (this.a = new Gr(this.b, {
                        Sa: this.h,
                        M: this.Ma,
                        nd: this.s,
                        gc: this.od.bind(this),
                        fc: this.Mc.bind(this),
                        onError: this.La.bind(this),
                        onEvent: this.pb.bind(this),
                        td: this.ud.bind(this),
                        Fb: this.Dd.bind(this),
                        filterNewPeriod: this.hb.bind(this),
                        filterAllPeriods: this.Qb.bind(this),
                      })),
                      this.a.configure(this.c.streaming),
                      $i(this),
                      this.a.init()
                    );
                  }.bind(this)
                )
                .then(
                  function () {
                    if (this.c.streaming.startAtSegmentBoundary) {
                      var t = co(this, Lr(this.h));
                      Dr(this.h, t);
                    }
                    this.b.periods.forEach(this.hb.bind(this)),
                      po(this),
                      ho(this);
                    var e = te((t = Yr(this.a)), this.na, this.Ya);
                    this.g.setVariants(e),
                      t.variants.some(function (t) {
                        return t.primary;
                      }),
                      this.eb.forEach(this.B.s.bind(this.B)),
                      (this.eb = []),
                      U(
                        this.m,
                        this.f,
                        "loadeddata",
                        function () {
                          this.i.loadLatency = (Date.now() - o) / 1e3;
                        }.bind(this)
                      ),
                      (this.D = null);
                  }.bind(this)
                )
            ).catch(
              function (t) {
                return (
                  this.D == i &&
                    ((this.D = null), this.dispatchEvent(new le("unloading"))),
                  Promise.reject(t)
                );
              }.bind(this)
            );
          }),
          (Yi.prototype.load = Yi.prototype.load),
          (Yi.prototype.configure = function (t) {
            if (t.abr && t.abr.manager) {
              var e = t.abr.manager;
              delete t.abr.manager,
                (t.abrFactory = function () {
                  return e;
                });
            }
            t.streaming &&
              null != t.streaming.infiniteRetriesForLiveStreams &&
              ((this.Wb = !!t.streaming.infiniteRetriesForLiveStreams),
              delete t.streaming.infiniteRetriesForLiveStreams),
              E(this.c, t, oo(this), io(), ""),
              Ji(this);
          }),
          (Yi.prototype.configure = Yi.prototype.configure),
          (Yi.prototype.getConfiguration = function () {
            var t = oo(this);
            return E(t, this.c, oo(this), io(), ""), t;
          }),
          (Yi.prototype.getConfiguration = Yi.prototype.getConfiguration),
          (Yi.prototype.$d = function () {
            (this.c = oo(this)), Ji(this);
          }),
          (Yi.prototype.resetConfiguration = Yi.prototype.$d),
          (Yi.prototype.Xc = function () {
            return this.f;
          }),
          (Yi.prototype.getMediaElement = Yi.prototype.Xc),
          (Yi.prototype.cc = function () {
            return this.s;
          }),
          (Yi.prototype.getNetworkingEngine = Yi.prototype.cc),
          (Yi.prototype.Wc = function () {
            return this.fb;
          }),
          (Yi.prototype.getManifestUri = Yi.prototype.Wc),
          (Yi.prototype.R = function () {
            return !!this.b && this.b.presentationTimeline.R();
          }),
          (Yi.prototype.isLive = Yi.prototype.R),
          (Yi.prototype.wa = function () {
            return !!this.b && this.b.presentationTimeline.wa();
          }),
          (Yi.prototype.isInProgress = Yi.prototype.wa),
          (Yi.prototype.hd = function () {
            if (!this.b || !this.b.periods.length) return !1;
            var t = this.b.periods[0].variants;
            return !!t.length && !t[0].video;
          }),
          (Yi.prototype.isAudioOnly = Yi.prototype.hd),
          (Yi.prototype.be = function () {
            var t = 0,
              e = 0;
            return (
              this.b &&
                ((e = this.b.presentationTimeline), (t = e.ia()), (e = e.kb())),
              { start: t, end: e }
            );
          }),
          (Yi.prototype.seekRange = Yi.prototype.be),
          (Yi.prototype.keySystem = function () {
            return this.j ? this.j.keySystem() : "";
          }),
          (Yi.prototype.keySystem = Yi.prototype.keySystem),
          (Yi.prototype.drmInfo = function () {
            return this.j ? this.j.b : null;
          }),
          (Yi.prototype.drmInfo = Yi.prototype.drmInfo),
          (Yi.prototype.jb = function () {
            return this.j ? this.j.jb() : 1 / 0;
          }),
          (Yi.prototype.getExpiration = Yi.prototype.jb),
          (Yi.prototype.jd = function () {
            return this.Na;
          }),
          (Yi.prototype.isBuffering = Yi.prototype.jd),
          (Yi.prototype.qb = function () {
            if (this.I) return Promise.resolve();
            this.dispatchEvent(new le("unloading"));
            var t = Promise.resolve();
            return (
              this.D && (t = this.D.cancel(new u(2, 7, 7e3))),
              t.then(
                function () {
                  return (
                    this.Oa ||
                      (this.Oa = ro(this).then(
                        function () {
                          this.Oa = null;
                        }.bind(this)
                      )),
                    this.Oa
                  );
                }.bind(this)
              )
            );
          }),
          (Yi.prototype.unload = Yi.prototype.qb),
          (Yi.prototype.xb = function () {
            return this.h ? this.h.xb() : 0;
          }),
          (Yi.prototype.getPlaybackRate = Yi.prototype.xb),
          (Yi.prototype.Be = function (t) {
            this.h && Fr(this.h, t), this.a && Jr(this.a, 1 != t);
          }),
          (Yi.prototype.trickPlay = Yi.prototype.Be),
          (Yi.prototype.Nc = function () {
            this.h && Fr(this.h, 1), this.a && Jr(this.a, !1);
          }),
          (Yi.prototype.cancelTrickPlay = Yi.prototype.Nc),
          (Yi.prototype.fd = function () {
            if (!this.b) return [];
            var t = ae(this.b, Lr(this.h)),
              e = this.C[t] || {};
            return $t(this.b.periods[t], e.audio, e.video);
          }),
          (Yi.prototype.getVariantTracks = Yi.prototype.fd),
          (Yi.prototype.ed = function () {
            if (!this.b) return [];
            var t = ae(this.b, Lr(this.h));
            return Xt(this.b.periods[t], (this.C[t] || {}).text).filter(
              function (t) {
                return 0 > this.ab.indexOf(t.id);
              }.bind(this)
            );
          }),
          (Yi.prototype.getTextTracks = Yi.prototype.ed),
          (Yi.prototype.fe = function (t) {
            this.a &&
              (t = Qt(Yr(this.a), t)) &&
              (to(this, t, !1), this.ga ? (this.fa = t) : Zr(this.a, t, !0));
          }),
          (Yi.prototype.selectTextTrack = Yi.prototype.fe),
          (Yi.prototype.ge = function (t, e) {
            if (this.a) {
              var n = Jt(Yr(this.a), t);
              n &&
                n.allowedByApplication &&
                n.allowedByKeySystem &&
                (Zi(this, n, !1), so(this, n, e));
            }
          }),
          (Yi.prototype.selectVariantTrack = Yi.prototype.ge),
          (Yi.prototype.Uc = function () {
            return this.a
              ? Zt(Yr(this.a).variants)
                  .map(function (t) {
                    return t.language;
                  })
                  .filter(k)
              : [];
          }),
          (Yi.prototype.getAudioLanguages = Yi.prototype.Uc),
          (Yi.prototype.dd = function () {
            return this.a
              ? Yr(this.a)
                  .textStreams.map(function (t) {
                    return t.language;
                  })
                  .filter(k)
              : [];
          }),
          (Yi.prototype.getTextLanguages = Yi.prototype.dd),
          (Yi.prototype.de = function (t, e) {
            if (this.a) {
              var n = Yr(this.a);
              (this.na = t), (this.Ya = e || ""), fo(this, n);
            }
          }),
          (Yi.prototype.selectAudioLanguage = Yi.prototype.de),
          (Yi.prototype.ee = function (t, e) {
            if (this.a) {
              var n = Yr(this.a);
              (this.Xa = t), (this.tb = e || ""), fo(this, n);
            }
          }),
          (Yi.prototype.selectTextLanguage = Yi.prototype.ee),
          (Yi.prototype.ld = function () {
            return this.w ? this.w.isTextVisible() : this.gb;
          }),
          (Yi.prototype.isTextTrackVisible = Yi.prototype.ld),
          (Yi.prototype.je = function (t) {
            this.w ? this.w.setTextVisibility(t) : (this.gb = t), mo(this);
          }),
          (Yi.prototype.setTextTrackVisibility = Yi.prototype.je),
          (Yi.prototype.Zc = function () {
            return this.b
              ? new Date(
                  1e3 * this.b.presentationTimeline.c + 1e3 * this.f.currentTime
                )
              : null;
          }),
          (Yi.prototype.getPlayheadTimeAsDate = Yi.prototype.Zc),
          (Yi.prototype.bd = function () {
            return this.b
              ? new Date(1e3 * this.b.presentationTimeline.c)
              : null;
          }),
          (Yi.prototype.getPresentationStartTimeAsDate = Yi.prototype.bd),
          (Yi.prototype.getStats = function () {
            uo(this), this.Wa();
            var t = null,
              e = null,
              n =
                (n = this.f) && n.getVideoPlaybackQuality
                  ? n.getVideoPlaybackQuality()
                  : {};
            return (
              this.h &&
                this.b &&
                ((t = ae(this.b, Lr(this.h))),
                (e = this.C[t]),
                (e = oe(e.audio, e.video, this.b.periods[t].variants)),
                (t = e.video || {})),
              t || (t = {}),
              e || (e = {}),
              {
                width: t.width || 0,
                height: t.height || 0,
                streamBandwidth: e.bandwidth || 0,
                decodedFrames: Number(n.totalVideoFrames),
                droppedFrames: Number(n.droppedVideoFrames),
                estimatedBandwidth: this.g
                  ? this.g.getBandwidthEstimate()
                  : NaN,
                loadLatency: this.i.loadLatency,
                playTime: this.i.playTime,
                bufferingTime: this.i.bufferingTime,
                switchHistory: T(this.i.switchHistory),
                stateHistory: T(this.i.stateHistory),
              }
            );
          }),
          (Yi.prototype.getStats = Yi.prototype.getStats),
          (Yi.prototype.addTextTrack = function (t, e, n, r, i, o) {
            if (!this.a) return Promise.reject();
            for (var a, s = Yr(this.a), u = 0; u < this.b.periods.length; u++)
              if (this.b.periods[u] == s) {
                if (u == this.b.periods.length - 1) {
                  if (
                    ((a = this.b.presentationTimeline.Y() - s.startTime),
                    1 / 0 == a)
                  )
                    return Promise.reject();
                } else a = this.b.periods[u + 1].startTime - s.startTime;
                break;
              }
            var c = {
              id: this.Jc++,
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: function () {
                return 1;
              },
              getSegmentReference: function (e) {
                return 1 != e
                  ? null
                  : new $e(
                      1,
                      0,
                      a,
                      function () {
                        return [t];
                      },
                      0,
                      null
                    );
              },
              initSegmentReference: null,
              presentationTimeOffset: 0,
              mimeType: r,
              codecs: i || "",
              kind: n,
              encrypted: !1,
              keyId: null,
              language: e,
              label: o || null,
              type: "text",
              primary: !1,
              trickModeVideo: null,
              containsEmsgBoxes: !1,
              roles: [],
              channelsCount: null,
            };
            return (
              this.ab.push(c.id),
              s.textStreams.push(c),
              ni(this.a, { text: c }).then(
                function () {
                  if (!this.I) {
                    var t = this.b.periods.indexOf(s),
                      r = Xr(this.a);
                    return (
                      r.text && (this.C[t].text = r.text.id),
                      this.ab.splice(this.ab.indexOf(c.id), 1),
                      fo(this, s),
                      po(this),
                      {
                        id: c.id,
                        active: !1,
                        type: "text",
                        bandwidth: 0,
                        language: e,
                        label: o || null,
                        kind: n,
                        width: null,
                        height: null,
                      }
                    );
                  }
                }.bind(this)
              )
            );
          }),
          (Yi.prototype.addTextTrack = Yi.prototype.addTextTrack),
          (Yi.prototype.Pb = function (t, e) {
            (this.bb.width = t), (this.bb.height = e);
          }),
          (Yi.prototype.setMaxHardwareResolution = Yi.prototype.Pb),
          (Yi.prototype.xc = function () {
            if (this.a) {
              var t = this.a;
              if (t.f) t = !1;
              else if (t.l) t = !1;
              else {
                for (var e in t.c) {
                  var n = t.c[e];
                  n.Pa && ((n.Pa = !1), gi(t, n, 0.1));
                }
                t = !0;
              }
            } else t = !1;
            return t;
          }),
          (Yi.prototype.retryStreaming = Yi.prototype.xc),
          ((Ua = Yi.prototype).Qc = function (t) {
            var e = [1001, 1002, 1003];
            this.R() &&
              this.Wb &&
              0 <= e.indexOf(t.code) &&
              ((t.severity = 1), this.xc());
          }),
          (Ua.Qb = function (t) {
            var e = this.a ? Xr(this.a) : {};
            t.forEach(
              function (t) {
                Gt(this.j, e, t);
              }.bind(this)
            );
            var n = 0;
            if (
              (t.forEach(
                function (t) {
                  0 < Zt(t.variants).length && n++;
                }.bind(this)
              ),
              !n)
            )
              throw new u(2, 4, 9009);
            if (n < t.length) throw new u(2, 4, 4011);
            t.forEach(
              function (t) {
                if (
                  (Wt(t, this.c.restrictions, this.bb) &&
                    this.a &&
                    Yr(this.a) == t &&
                    po(this),
                  1 > Zt(t.variants).length)
                )
                  throw new u(2, 4, 4012);
              }.bind(this)
            );
          }),
          (Ua.hb = function (t) {
            var e = this.a ? Xr(this.a) : {};
            if (
              (Gt(this.j, e, t),
              (e = 0 < Zt(t.variants).length),
              Wt(t, this.c.restrictions, this.bb) &&
                this.a &&
                Yr(this.a) == t &&
                po(this),
              (t = 1 > Zt(t.variants).length),
              !e)
            )
              throw new u(2, 4, 4011);
            if (t) throw new u(2, 4, 4012);
          }),
          (Ua.pe = function (t, e) {
            this.g && this.g.segmentDownloaded(t, e);
          }),
          (Ua.Ec = function (t) {
            if ((uo(this), (this.Na = t), this.Wa(), this.h)) {
              var e = this.h;
              t != e.h && ((e.h = t), Fr(e, e.g));
            }
            this.dispatchEvent(new le("buffering", { buffering: t }));
          }),
          (Ua.le = function () {
            po(this);
          }),
          (Ua.Wa = function () {
            if (!this.I) {
              var t = this.Na
                  ? "buffering"
                  : this.f.ended
                  ? "ended"
                  : this.f.paused
                  ? "paused"
                  : "playing",
                e = Date.now() / 1e3;
              if (this.i.stateHistory.length) {
                var n = this.i.stateHistory[this.i.stateHistory.length - 1];
                if (((n.duration = e - n.timestamp), t == n.state)) return;
              }
              this.i.stateHistory.push({ timestamp: e, state: t, duration: 0 });
            }
          }),
          (Ua.oe = function () {
            if (this.B) {
              var t = this.B;
              t.c.forEach(t.m.bind(t, !0));
            }
            this.a && ti(this.a);
          }),
          (Ua.od = function (t) {
            (this.ga = !0), this.g.disable();
            var e = { audio: !1, text: !1 },
              n = te(t, this.na, this.Ya, e);
            return (
              (t = ee(t, this.Xa, this.tb, e)),
              (n = lo(this, n)),
              (t = t[0] || null),
              (this.fa = this.sa = null),
              n && Zi(this, n, !0),
              t &&
                (to(this, t, !0),
                !$r(this.a) &&
                  n &&
                  n.audio &&
                  e.text &&
                  t.language != n.audio.language &&
                  (this.w.setTextVisibility(!0), mo(this))),
              { variant: n, text: t }
            );
          }),
          (Ua.Mc = function () {
            (this.ga = !1),
              this.c.abr.enabled && this.g.enable(),
              this.sa && (Qr(this.a, this.sa, this.Vb), (this.sa = null)),
              this.fa && (Zr(this.a, this.fa, !0), (this.fa = null));
          }),
          (Ua.ud = function () {
            this.l && this.l.update && this.l.update();
          }),
          (Ua.Dd = function () {
            this.h && this.h.Fb();
          }),
          (Ua.Fc = function (t, e) {
            Zi(this, t, !0), this.a && (Qr(this.a, t, e || !1), ho(this));
          }),
          (Ua.Ae = function (t, e) {
            if (this.a) {
              var n = $r(this.a);
              (n = ie(t.audio, t.video, n ? n.variants : [])) && this.Fc(n, e);
            }
          }),
          (Ua.La = function (t) {
            if (!this.I) {
              var e = new le("error", { detail: t });
              this.dispatchEvent(e), e.defaultPrevented && (t.handled = !0);
            }
          }),
          (Ua.Gd = function (t) {
            this.B ? this.B.s(t) : this.eb.push(t);
          }),
          (Ua.pb = function (t) {
            this.dispatchEvent(t);
          }),
          (Ua.Hd = function () {
            if (this.f.error) {
              var t = this.f.error.code;
              if (1 != t) {
                var e = this.f.error.msExtendedCode;
                e && (0 > e && (e += Math.pow(2, 32)), (e = e.toString(16))),
                  this.La(new u(2, 3, 3016, t, e, this.f.error.message));
              }
            }
          }),
          (Ua.ne = function (t) {
            var e = ["output-restricted", "internal-error"],
              n = Yr(this.a),
              r = !1,
              i = 1 == Object.keys(t).length && "00" == Object.keys(t)[0];
            n.variants.forEach(function (n) {
              var o = [];
              n.audio && o.push(n.audio),
                n.video && o.push(n.video),
                o.forEach(function (o) {
                  var a = n.allowedByKeySystem;
                  o.keyId &&
                    ((o = t[i ? "00" : o.keyId]),
                    (n.allowedByKeySystem = !!o && 0 > e.indexOf(o))),
                    a != n.allowedByKeySystem && (r = !0);
                });
            });
            var o = Xr(this.a);
            (o = ie(o.audio, o.video, n.variants)) &&
              !o.allowedByKeySystem &&
              fo(this, n),
              r && po(this);
          }),
          (Ua.me = function (t, e) {
            this.l &&
              this.l.onExpirationUpdated &&
              this.l.onExpirationUpdated(t, e),
              this.dispatchEvent(new le("expirationupdated"));
          }),
          e("shaka.offline.Storage", vo),
          (vo.support = yo),
          (vo.prototype.o = function () {
            var t = this.a,
              e = this.i
                ? this.i
                    .o()
                    .catch(function () {})
                    .then(function () {
                      if (t) return t.o();
                    })
                : Promise.resolve();
            return (this.b = this.g = this.i = this.a = null), e;
          }),
          (vo.prototype.destroy = vo.prototype.o),
          (vo.prototype.configure = function (t) {
            E(this.b, t, bo(this), {}, "");
          }),
          (vo.prototype.configure = vo.prototype.configure),
          (vo.prototype.ye = function (t, e, n) {
            function r(t) {
              o = t;
            }
            if (this.s) return Promise.reject(new u(2, 9, 9006));
            this.s = !0;
            var i,
              o = null;
            return wo(this)
              .then(
                function () {
                  return So(this), go(this, t, r, n);
                }.bind(this)
              )
              .then(
                function (n) {
                  if (
                    (So(this),
                    (this.f = n.manifest),
                    (this.c = n.Rc),
                    this.f.presentationTimeline.R() ||
                      this.f.presentationTimeline.wa())
                  )
                    throw new u(2, 9, 9005, t);
                  this.m(this.f.periods),
                    (this.h = this.a.c.manifest++),
                    (this.l = 0),
                    (n = e || {});
                  var r = this.f.periods.map(this.C.bind(this)),
                    o = this.c.b,
                    a = ft(this.c);
                  if (o) {
                    if (!a.length) throw new u(2, 9, 9007, t);
                    o.initData = [];
                  }
                  return (
                    (i = {
                      key: this.h,
                      originalManifestUri: t,
                      duration: this.l,
                      size: 0,
                      expiration: this.c.jb(),
                      periods: r,
                      sessionIds: this.b.usePersistentLicense ? a : [],
                      drmInfo: o,
                      appMetadata: n,
                    }),
                    Ui(this.i, i)
                  );
                }.bind(this)
              )
              .then(
                function () {
                  if ((So(this), o)) throw o;
                  return _o(this);
                }.bind(this)
              )
              .then(
                function () {
                  return Ci(i);
                }.bind(this)
              )
              .catch(
                function (t) {
                  return _o(this)
                    .catch(O)
                    .then(function () {
                      throw t;
                    });
                }.bind(this)
              );
          }),
          (vo.prototype.store = vo.prototype.ye),
          (vo.prototype.remove = function (t) {
            function e(t) {
              6013 != t.code && (a = t);
            }
            var n = t.offlineUri,
              r = /^offline:([0-9]+)$/.exec(n);
            if (!r) return Promise.reject(new u(2, 9, 9004, n));
            var i,
              o,
              a = null,
              s = Number(r[1]);
            return wo(this)
              .then(
                function () {
                  return So(this), this.a.get("manifest", s);
                }.bind(this)
              )
              .then(
                function (t) {
                  if ((So(this), !t)) throw new u(2, 9, 9003, n);
                  return (
                    (i = t),
                    (t = zi(i)),
                    (o = new st(
                      this.g.s,
                      e,
                      function () {},
                      function () {}
                    )).configure(this.g.getConfiguration().drm),
                    o.init(t, this.b.usePersistentLicense || !1)
                  );
                }.bind(this)
              )
              .then(
                function () {
                  return ct(o, i.sessionIds);
                }.bind(this)
              )
              .then(
                function () {
                  return o.o();
                }.bind(this)
              )
              .then(
                function () {
                  if ((So(this), a)) throw a;
                  var e = i.periods
                      .map(function (t) {
                        return t.streams
                          .map(function (t) {
                            var e = t.segments.map(function (t) {
                              return (
                                (t = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(
                                  t.uri
                                )),
                                Number(t[1])
                              );
                            });
                            return (
                              t.initSegmentUri &&
                                ((t = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(
                                  t.initSegmentUri
                                )),
                                e.push(Number(t[1]))),
                              e
                            );
                          })
                          .reduce(x, []);
                      })
                      .reduce(x, []),
                    n = 0,
                    r = e.length,
                    o = this.b.progressCallback;
                  return Si(this.a, e, function () {
                    o(t, ++n / r);
                  });
                }.bind(this)
              )
              .then(
                function () {
                  return (
                    So(this),
                    this.b.progressCallback(t, 1),
                    this.a.remove("manifest", s)
                  );
                }.bind(this)
              );
          }),
          (vo.prototype.remove = vo.prototype.remove),
          (vo.prototype.list = function () {
            var t = [];
            return wo(this)
              .then(
                function () {
                  return (
                    So(this),
                    this.a.forEach("manifest", function (e) {
                      t.push(Ci(e));
                    })
                  );
                }.bind(this)
              )
              .then(function () {
                return t;
              });
          }),
          (vo.prototype.list = vo.prototype.list),
          (vo.prototype.B = function (t) {
            for (
              var e,
                n = [],
                r = Vt(this.g.getConfiguration().preferredAudioLanguage),
                i = [0, Xa, Ja],
                o = t.filter(function (t) {
                  return "variant" == t.type;
                }),
                i = i.map(function (t) {
                  return o.filter(function (e) {
                    return (e = Vt(e.language)), qt(t, r, e);
                  });
                }),
                a = 0;
              a < i.length;
              a++
            )
              if (i[a].length) {
                e = i[a];
                break;
              }
            e ||
              ((i = o.filter(function (t) {
                return t.primary;
              })).length &&
                (e = i)),
              e ||
                ((e = o),
                o
                  .map(function (t) {
                    return t.language;
                  })
                  .filter(k));
            var s = e.filter(function (t) {
              return t.height && 480 >= t.height;
            });
            return (
              s.length &&
                (s.sort(function (t, e) {
                  return e.height - t.height;
                }),
                (e = s.filter(function (t) {
                  return t.height == s[0].height;
                }))),
              e.sort(function (t, e) {
                return t.bandwidth - e.bandwidth;
              }),
              e.length && n.push(e[Math.floor(e.length / 2)]),
              n.push.apply(
                n,
                t.filter(function (t) {
                  return "text" == t.type;
                })
              ),
              n
            );
          }),
          (vo.prototype.m = function (t) {
            t.forEach(this.w.bind(this));
          }),
          (vo.prototype.w = function (t) {
            var e = {};
            if (this.j) {
              var n = this.j.filter(function (t) {
                  return "variant" == t.type;
                }),
                r = null;
              n.length && (r = Jt(t, n[0])),
                r &&
                  (r.video && (e.video = r.video),
                  r.audio && (e.audio = r.audio));
            }
            Gt(this.c, e, t),
              Wt(t, this.g.getConfiguration().restrictions, {
                width: 1 / 0,
                height: 1 / 0,
              });
          }),
          (vo.prototype.C = function (t) {
            var e,
              n,
              r = $t(t, null, null),
              i = Xt(t, null),
              r = this.b.trackSelectionCallback(r.concat(i));
            for (
              this.j || ((this.j = r), this.m(this.f.periods)),
                i = r.length - 1;
              0 < i;
              --i
            ) {
              var o = !1;
              for (n = i - 1; 0 <= n; --n)
                if (
                  r[i].type == r[n].type &&
                  r[i].kind == r[n].kind &&
                  r[i].language == r[n].language
                ) {
                  o = !0;
                  break;
                }
              if (o) break;
            }
            for (o = [], i = 0; i < r.length; i++)
              (e = Jt(t, r[i]))
                ? (e.audio &&
                    ((n = o.filter(function (t) {
                      return t.id == e.audio.id;
                    })[0])
                      ? n.variantIds.push(e.id)
                      : ((n = e.video ? e.bandwidth / 2 : e.bandwidth),
                        o.push(To(this, t, e.audio, n, e.id)))),
                  e.video &&
                    ((n = o.filter(function (t) {
                      return t.id == e.video.id;
                    })[0])
                      ? n.variantIds.push(e.id)
                      : ((n = e.audio ? e.bandwidth / 2 : e.bandwidth),
                        o.push(To(this, t, e.video, n, e.id)))))
                : o.push(To(this, t, Qt(t, r[i]), 0));
            return { startTime: t.startTime, streams: o };
          }),
          (Ts.offline = yo),
          e("shaka.polyfill.installAll", function () {
            for (var t = 0; t < Ss.length; ++t) Ss[t]();
          });
        var Ss = [];
        e("shaka.polyfill.register", xo),
          xo(function () {
            if (t.Document) {
              var e = Element.prototype;
              (e.requestFullscreen =
                e.requestFullscreen ||
                e.mozRequestFullScreen ||
                e.msRequestFullscreen ||
                e.webkitRequestFullscreen),
                ((e = Document.prototype).exitFullscreen =
                  e.exitFullscreen ||
                  e.mozCancelFullScreen ||
                  e.msExitFullscreen ||
                  e.webkitExitFullscreen),
                "fullscreenElement" in document ||
                  (Object.defineProperty(document, "fullscreenElement", {
                    get: function () {
                      return (
                        document.mozFullScreenElement ||
                        document.msFullscreenElement ||
                        document.webkitFullscreenElement
                      );
                    },
                  }),
                  Object.defineProperty(document, "fullscreenEnabled", {
                    get: function () {
                      return (
                        document.mozFullScreenEnabled ||
                        document.msFullscreenEnabled ||
                        document.webkitFullscreenEnabled
                      );
                    },
                  })),
                document.addEventListener("webkitfullscreenchange", Oo),
                document.addEventListener("webkitfullscreenerror", Oo),
                document.addEventListener("mozfullscreenchange", Oo),
                document.addEventListener("mozfullscreenerror", Oo),
                document.addEventListener("MSFullscreenChange", Oo),
                document.addEventListener("MSFullscreenError", Oo);
            }
          }),
          xo(function () {
            var e = navigator.userAgent;
            e && 0 <= e.indexOf("CrKey") && delete t.indexedDB;
          });
        var xs;
        xo(function () {
          0 > navigator.userAgent.indexOf("Trident/") ||
            HTMLInputElement.prototype.addEventListener == Po ||
            ((xs = HTMLInputElement.prototype.addEventListener),
            (HTMLInputElement.prototype.addEventListener = Po));
        }),
          xo(function () {
            if (4503599627370497 != Math.round(4503599627370497)) {
              var t = Math.round;
              Math.round = function (e) {
                var n = e;
                return 4503599627370496 >= e && (n = t(e)), n;
              };
            }
          }),
          (ko.prototype.c = function (t) {
            if (!(1 < t.version)) {
              var e = ot(t.u.Ja(16)),
                n = [];
              if (0 < t.version)
                for (var r = t.u.F(), i = 0; i < r; ++i) {
                  var o = ot(t.u.Ja(16));
                  n.push(o);
                }
              (r = t.u.F()),
                t.u.J(r),
                this.b.push.apply(this.b, n),
                this.f.push(e),
                this.a.push({ start: t.start, end: t.start + t.size - 1 });
            }
          }),
          (Io.prototype.createMediaKeys = function () {
            var t = new Ao(this.keySystem);
            return Promise.resolve(t);
          }),
          (Io.prototype.getConfiguration = function () {
            return this.a;
          }),
          (Ao.prototype.createSession = function (t) {
            if ("temporary" != (t || "temporary"))
              throw new TypeError(
                "Session type " + t + " is unsupported on this platform."
              );
            return new No(this.a);
          }),
          (Ao.prototype.setServerCertificate = function () {
            return Promise.resolve(!1);
          }),
          n(No),
          ((Ua = No.prototype).generateRequest = function (t, e) {
            this.a = new g();
            try {
              (this.c = this.g.createSession(
                "video/mp4",
                new Uint8Array(e),
                null
              )),
                L(this.f, this.c, "mskeymessage", this.yd.bind(this)),
                L(this.f, this.c, "mskeyadded", this.wd.bind(this)),
                L(this.f, this.c, "mskeyerror", this.xd.bind(this)),
                Lo(this, "status-pending");
            } catch (t) {
              this.a.reject(t);
            }
            return this.a;
          }),
          (Ua.load = function () {
            return Promise.reject(
              Error("MediaKeySession.load not yet supported")
            );
          }),
          (Ua.update = function (t) {
            this.b = new g();
            try {
              this.c.update(new Uint8Array(t));
            } catch (t) {
              this.b.reject(t);
            }
            return this.b;
          }),
          (Ua.close = function () {
            try {
              this.c.close(), this.closed.resolve(), F(this.f);
            } catch (t) {
              this.closed.reject(t);
            }
            return this.closed;
          }),
          (Ua.remove = function () {
            return Promise.reject(
              Error(
                "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"
              )
            );
          }),
          (Ua.yd = function (t) {
            this.a && (this.a.resolve(), (this.a = null)),
              this.dispatchEvent(
                new le("message", {
                  messageType:
                    void 0 == this.keyStatuses.a
                      ? "licenserequest"
                      : "licenserenewal",
                  message: t.message.buffer,
                })
              );
          }),
          (Ua.wd = function () {
            this.a
              ? (Lo(this, "usable"), this.a.resolve(), (this.a = null))
              : this.b &&
                (Lo(this, "usable"), this.b.resolve(), (this.b = null));
          }),
          (Ua.xd = function () {
            var t = Error("EME PatchedMediaKeysMs key error");
            if (((t.errorCode = this.c.error), this.a))
              this.a.reject(t), (this.a = null);
            else if (this.b) this.b.reject(t), (this.b = null);
            else
              switch (this.c.error.code) {
                case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                  Lo(this, "output-not-allowed");
                default:
                  Lo(this, "internal-error");
              }
          });
        var Os;
        ((Ua = Uo.prototype).forEach = function (t) {
          this.a && t(this.a, Os);
        }),
          (Ua.get = function (t) {
            if (this.has(t)) return this.a;
          }),
          (Ua.has = function (t) {
            var e = Os;
            return !(!this.a || !at(new Uint8Array(t), new Uint8Array(e)));
          }),
          (Ua.entries = function () {}),
          (Ua.keys = function () {}),
          (Ua.values = function () {}),
          (zo.prototype.createSession = function () {}),
          (zo.prototype.setServerCertificate = function () {}),
          (Ho.prototype.getConfiguration = function () {}),
          (Ho.prototype.createMediaKeys = function () {});
        var Ps = "";
        (Go.prototype.createMediaKeys = function () {
          var t = new Yo(this.a);
          return Promise.resolve(t);
        }),
          (Go.prototype.getConfiguration = function () {
            return this.b;
          }),
          ((Ua = Yo.prototype).createSession = function (t) {
            var e = t || "temporary";
            if ("temporary" != e && "persistent-license" != e)
              throw new TypeError(
                "Session type " + t + " is unsupported on this platform."
              );
            return (
              (t = this.b || document.createElement("video")).src ||
                (t.src = "about:blank"),
              (e = new Jo(t, this.g, e)),
              this.c.push(e),
              e
            );
          }),
          (Ua.setServerCertificate = function () {
            return Promise.resolve(!1);
          }),
          (Ua.Ld = function (t) {
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent("encrypted", !1, !1, null),
              (e.initDataType = "webm"),
              (e.initData = t.initData),
              this.b.dispatchEvent(e);
          }),
          (Ua.Kd = function (t) {
            var e = Xo(this, t.sessionId);
            e &&
              ((t = new le("message", {
                messageType:
                  void 0 == e.keyStatuses.a
                    ? "licenserequest"
                    : "licenserenewal",
                message: t.message,
              })),
              e.b && (e.b.resolve(), (e.b = null)),
              e.dispatchEvent(t));
          }),
          (Ua.Id = function (t) {
            (t = Xo(this, t.sessionId)) &&
              (Zo(t, "usable"), t.a && t.a.resolve(), (t.a = null));
          }),
          (Ua.Jd = function (t) {
            var e = Xo(this, t.sessionId);
            if (e) {
              var n = Error("EME v0.1b key error");
              (n.errorCode = t.errorCode),
                (n.errorCode.systemCode = t.systemCode),
                !t.sessionId && e.b
                  ? ((n.method = "generateRequest"),
                    45 == t.systemCode &&
                      (n.message = "Unsupported session type."),
                    e.b.reject(n),
                    (e.b = null))
                  : t.sessionId && e.a
                  ? ((n.method = "update"), e.a.reject(n), (e.a = null))
                  : ((n = t.systemCode),
                    t.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT
                      ? Zo(e, "output-restricted")
                      : 1 == n
                      ? Zo(e, "expired")
                      : Zo(e, "internal-error"));
            }
          }),
          n(Jo),
          ((Ua = Jo.prototype).Rb = function (t, e) {
            if (this.a)
              this.a
                .then(this.Rb.bind(this, t, e))
                .catch(this.Rb.bind(this, t, e));
            else {
              if (((this.a = t), "webkit-org.w3.clearkey" == this.c)) {
                var n = $(e),
                  r = JSON.parse(n);
                "oct" != r.keys[0].kty &&
                  (this.a.reject(
                    Error("Response is not a valid JSON Web Key Set.")
                  ),
                  (this.a = null)),
                  (n = rt(r.keys[0].k)),
                  (r = rt(r.keys[0].kid));
              } else (n = new Uint8Array(e)), (r = null);
              var i = Vo("addKey");
              try {
                this.f[i](this.c, n, r, this.sessionId);
              } catch (t) {
                this.a.reject(t), (this.a = null);
              }
            }
          }),
          (Ua.generateRequest = function (t, e) {
            return Qo(this, e, null);
          }),
          (Ua.load = function (t) {
            return "persistent-license" == this.g
              ? Qo(this, null, t)
              : Promise.reject(Error("Not a persistent session."));
          }),
          (Ua.update = function (t) {
            var e = new g();
            return this.Rb(e, t), e;
          }),
          (Ua.close = function () {
            if ("persistent-license" != this.g) {
              if (!this.sessionId)
                return (
                  this.closed.reject(Error("The session is not callable.")),
                  this.closed
                );
              var t = Vo("cancelKeyRequest");
              try {
                this.f[t](this.c, this.sessionId);
              } catch (t) {}
            }
            return this.closed.resolve(), this.closed;
          }),
          (Ua.remove = function () {
            return "persistent-license" != this.g
              ? Promise.reject(Error("Not a persistent session."))
              : this.close();
          });
        var ks;
        ((Ua = ta.prototype).forEach = function (t) {
          this.a && t(this.a, ks);
        }),
          (Ua.get = function (t) {
            if (this.has(t)) return this.a;
          }),
          (Ua.has = function (t) {
            var e = ks;
            return !(!this.a || !at(new Uint8Array(t), new Uint8Array(e)));
          }),
          (Ua.entries = function () {}),
          (Ua.keys = function () {}),
          (Ua.values = function () {}),
          xo(function () {
            !t.HTMLVideoElement ||
              (navigator.requestMediaKeySystemAccess &&
                MediaKeySystemAccess.prototype.getConfiguration) ||
              (HTMLMediaElement.prototype.webkitGenerateKeyRequest
                ? qo("webkit")
                : HTMLMediaElement.prototype.generateKeyRequest
                ? qo("")
                : t.MSMediaKeys
                ? ((Os = new Uint8Array([0]).buffer),
                  delete HTMLMediaElement.prototype.mediaKeys,
                  (HTMLMediaElement.prototype.mediaKeys = null),
                  (HTMLMediaElement.prototype.setMediaKeys = Mo),
                  (t.MediaKeys = Ao),
                  (t.MediaKeySystemAccess = Io),
                  (navigator.requestMediaKeySystemAccess = Co))
                : ((navigator.requestMediaKeySystemAccess = Fo),
                  delete HTMLMediaElement.prototype.mediaKeys,
                  (HTMLMediaElement.prototype.mediaKeys = null),
                  (HTMLMediaElement.prototype.setMediaKeys = Bo),
                  (t.MediaKeys = zo),
                  (t.MediaKeySystemAccess = Ho)));
          }),
          xo(function () {
            if (t.MediaSource)
              if (
                t.cast &&
                cast.__platform__ &&
                cast.__platform__.canDisplayType
              )
                oa();
              else if (
                navigator.vendor &&
                0 <= navigator.vendor.indexOf("Apple")
              ) {
                var e = navigator.appVersion;
                0 <= e.indexOf("Version/8")
                  ? (t.MediaSource = null)
                  : 0 <= e.indexOf("Version/9")
                  ? ea()
                  : 0 <= e.indexOf("Version/10") && (ea(), na());
              }
          });
        var Cs = 0;
        (aa.prototype.then = function (t, e) {
          var n = new aa();
          switch (this.Aa) {
            case 1:
              fa(this, n, t);
              break;
            case 2:
              fa(this, n, e);
              break;
            case Cs:
              this.c.push({ N: n, vb: t }), this.b.push({ N: n, vb: e });
          }
          return n;
        }),
          (aa.prototype.catch = function (t) {
            return this.then(void 0, t);
          }),
          (aa.prototype.ka = function (t) {
            if (this.Aa == Cs) {
              for (this.rb = t, this.Aa = 1, t = 0; t < this.c.length; ++t)
                fa(this, this.c[t].N, this.c[t].vb);
              (this.c = []), (this.b = []);
            }
          }),
          (aa.prototype.a = function (t) {
            if (this.Aa == Cs) {
              for (this.rb = t, this.Aa = 2, t = 0; t < this.b.length; ++t)
                fa(this, this.b[t].N, this.b[t].vb);
              (this.c = []), (this.b = []);
            }
          });
        var Is = null,
          Ms = [];
        xo(function (e) {
          t.setImmediate
            ? ((da = function (e) {
                return t.setImmediate(e);
              }),
              (ma = function (e) {
                return t.clearImmediate(e);
              }))
            : ((da = function (e) {
                return t.setTimeout(e, 0);
              }),
              (ma = function (e) {
                return t.clearTimeout(e);
              })),
            (t.Promise && !e) ||
              ((t.Promise = aa),
              (t.Promise.resolve = sa),
              (t.Promise.reject = ua),
              (t.Promise.all = ca),
              (t.Promise.race = la),
              (t.Promise.prototype.then = aa.prototype.then),
              (t.Promise.prototype.catch = aa.prototype.catch));
        }),
          xo(function () {
            if (t.HTMLMediaElement) {
              var e = HTMLMediaElement.prototype.play;
              HTMLMediaElement.prototype.play = function () {
                var t = e.apply(this, arguments);
                return t && t.catch(function () {}), t;
              };
            }
          }),
          xo(function () {
            if (t.HTMLVideoElement) {
              var e = HTMLVideoElement.prototype;
              !e.getVideoPlaybackQuality &&
                "webkitDroppedFrameCount" in e &&
                (e.getVideoPlaybackQuality = va);
            }
          }),
          xo(function () {
            if (!t.VTTCue && t.TextTrackCue) {
              var e = TextTrackCue.length;
              if (3 == e) t.VTTCue = ya;
              else if (6 == e) t.VTTCue = ga;
              else {
                try {
                  var n = !!ya(1, 2, "");
                } catch (t) {
                  n = !1;
                }
                n && (t.VTTCue = ya);
              }
            }
          }),
          e("shaka.text.Cue", ba);
        var As = "auto";
        ba.positionAlign = {
          LEFT: "line-left",
          RIGHT: "line-right",
          CENTER: "center",
          AUTO: As,
        };
        var Rs = "center",
          Ns = {
            LEFT: "left",
            RIGHT: "right",
            CENTER: Rs,
            START: "start",
            END: "end",
          };
        ba.textAlign = Ns;
        var js = "before",
          Ds = { BEFORE: js, CENTER: "center", AFTER: "after" };
        ba.displayAlign = Ds;
        var Ls = 0,
          Us = 2,
          Fs = 3;
        ba.writingDirection = { Me: Ls, Ne: 1, Ve: Us, We: Fs };
        var Bs = 0,
          zs = 1;
        ba.lineInterpretation = { Oe: Bs, Te: zs };
        var Hs = "center",
          qs = { CENTER: Hs, START: "start", END: "end" };
        ba.lineAlign = qs;
        var Vs = 400;
        ba.fontWeight = { Re: Vs, Ke: 700 };
        var Ks = "normal",
          Ws = { NORMAL: Ks, ITALIC: "italic", OBLIQUE: "oblique" };
        (ba.fontStyle = Ws),
          (ba.textDecoration = {
            Ue: "underline",
            Pe: "lineThrough",
            Se: "overline",
          }),
          (wa.prototype.parseInit = function () {}),
          (wa.prototype.parseMedia = function (t, e) {
            var n = $(t),
              r = [],
              i = new DOMParser(),
              o = null;
            try {
              o = i.parseFromString(n, "text/xml");
            } catch (t) {
              throw new u(2, 2, 2005);
            }
            if (o) {
              var a = o.getElementsByTagName("tt")[0];
              if (!a) throw new u(2, 2, 2005);
              (i = a.getAttribute("ttp:frameRate")),
                (o = a.getAttribute("ttp:subFrameRate"));
              var s = a.getAttribute("ttp:frameRateMultiplier"),
                c = a.getAttribute("ttp:tickRate");
              if (
                "default" != (n = a.getAttribute("xml:space") || "default") &&
                "preserve" != n
              )
                throw new u(2, 2, 2005);
              for (
                n = "default" == n,
                  i = new Ia(i, o, s, c),
                  o = _a(a.getElementsByTagName("styling")[0]),
                  s = _a(a.getElementsByTagName("layout")[0]),
                  a = _a(a.getElementsByTagName("body")[0]),
                  c = 0;
                c < a.length;
                c++
              ) {
                var l = a[c],
                  f = e.periodStart,
                  h = i,
                  p = o,
                  d = s,
                  m = n;
                if (
                  l.hasAttribute("begin") ||
                  l.hasAttribute("end") ||
                  !/^\s*$/.test(l.textContent)
                ) {
                  Ea(l, m);
                  var m = ka(l.getAttribute("begin"), h),
                    v = ka(l.getAttribute("end"), h),
                    h = ka(l.getAttribute("dur"), h),
                    y = l.textContent;
                  if (
                    (null == v && null != h && (v = m + h),
                    null == m || null == v)
                  )
                    throw new u(2, 2, 2001);
                  (f = new ba(m + f, v + f, y)),
                    (m = Pa(l, "region", d)),
                    (d = f),
                    (v = Sa(l, m, p, "tts:extent")) &&
                      (v = Zs.exec(v)) &&
                      (d.size = Number(v[1])),
                    "rtl" == Sa(l, m, p, "tts:direction") && (d.b = 1),
                    "tb" == (v = Sa(l, m, p, "tts:writingMode")) || "tblr" == v
                      ? (d.b = Us)
                      : "tbrl" == v
                      ? (d.b = Fs)
                      : "rltb" == v || "rl" == v
                      ? (d.b = 1)
                      : v && (d.b = Ls),
                    (v = Sa(l, m, p, "tts:origin")) &&
                      (v = Zs.exec(v)) &&
                      (d.b == Ls || 1 == d.b
                        ? ((d.position = Number(v[1])), (d.c = Number(v[2])))
                        : ((d.position = Number(v[2])), (d.c = Number(v[1]))),
                      (d.g = zs)),
                    (v = Sa(l, m, p, "tts:textAlign")) &&
                      ((d.i = nu[v]),
                      (d.h = eu[v]),
                      (d.f = Ns[v.toUpperCase()])),
                    (v = Sa(l, m, p, "tts:displayAlign")) &&
                      (d.j = Ds[v.toUpperCase()]),
                    (v = Sa(l, m, p, "tts:color")) && (d.s = v),
                    (v = Sa(l, m, p, "tts:backgroundColor")) && (d.m = v),
                    (v = Sa(l, m, p, "tts:fontFamily")) && (d.w = v),
                    (v = Sa(l, m, p, "tts:fontWeight")) &&
                      "bold" == v &&
                      (d.D = 700),
                    (v = Sa(l, m, p, "tts:wrapOption")) &&
                      "noWrap" == v &&
                      (d.O = !1),
                    (v = Sa(l, m, p, "tts:lineHeight")) &&
                      v.match(tu) &&
                      (d.I = v),
                    (v = Sa(l, m, p, "tts:fontSize")) &&
                      v.match(tu) &&
                      (d.B = v),
                    (v = Sa(l, m, p, "tts:fontStyle")) &&
                      (d.C = Ws[v.toUpperCase()]),
                    (m = xa(m, p, "tts:textDecoration")) && Ta(d, m),
                    (l = Oa(l, p, "tts:textDecoration")) && Ta(d, l);
                } else f = null;
                f && r.push(f);
              }
            }
            return r;
          });
        var Gs = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
          Ys = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
          $s = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
          Xs = /^(\d*\.?\d*)f$/,
          Js = /^(\d*\.?\d*)t$/,
          Qs =
            /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/,
          Zs = /^(\d{1,2}|100)% (\d{1,2}|100)%$/,
          tu = /^(\d+px|\d+em)$/,
          eu = {
            left: "start",
            center: "center",
            right: "end",
            start: "start",
            end: "end",
          },
          nu = { left: "line-left", center: "center", right: "line-right" };
        Ct("application/ttml+xml", wa),
          (Ma.prototype.parseInit = function (t) {
            var e = !1;
            if (
              (new Qe()
                .G("moov", Ze)
                .G("trak", Ze)
                .G("mdia", Ze)
                .G("minf", Ze)
                .G("stbl", Ze)
                .aa("stsd", tn)
                .G("stpp", function () {
                  e = !0;
                })
                .parse(t),
              !e)
            )
              throw new u(2, 2, 2007);
          }),
          (Ma.prototype.parseMedia = function (t, e) {
            var n = !1,
              r = [];
            if (
              (new Qe()
                .G(
                  "mdat",
                  en(
                    function (t) {
                      (n = !0), (r = this.a.parseMedia(t.buffer, e));
                    }.bind(this)
                  )
                )
                .parse(t),
              !n)
            )
              throw new u(2, 2, 2007);
            return r;
          }),
          Ct('application/mp4; codecs="stpp"', Ma),
          Ct('application/mp4; codecs="stpp.TTML.im1t"', Ma),
          (Aa.prototype.parseInit = function () {}),
          (Aa.prototype.parseMedia = function (t, e) {
            var n = (n = (n = $(t)).replace(
              /\r\n|\r(?=[^\n]|$)/gm,
              "\n"
            )).split(/\n{2,}/m);
            if (!/^WEBVTT($|[ \t\n])/m.test(n[0])) throw new u(2, 2, 2e3);
            var r = e.segmentStart;
            if (0 <= n[0].indexOf("X-TIMESTAMP-MAP")) {
              var i = n[0].match(
                  /LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m
                ),
                o = n[0].match(/MPEGTS:(\d+)/m);
              i &&
                o &&
                ((r = Na(new er(i[1]))),
                (r = e.periodStart + (Number(o[1]) / 9e4 - r)));
            }
            for (o = [], i = 1; i < n.length; i++) {
              var a = n[i].split("\n"),
                s = r;
              if ((1 == a.length && !a[0]) || /^NOTE($|[ \t])/.test(a[0]))
                var c = null;
              else {
                (c = null),
                  0 > a[0].indexOf("--\x3e") && ((c = a[0]), a.splice(0, 1));
                var l = new er(a[0]),
                  f = Na(l),
                  h = nr(l, /[ \t]+--\x3e[ \t]+/g),
                  p = Na(l);
                if (null == f || !h || null == p) throw new u(2, 2, 2001);
                for (
                  a = new ba(f + s, p + s, a.slice(1).join("\n").trim()),
                    nr(l, /[ \t]+/gm),
                    s = rr(l);
                  s;

                )
                  Ra(a, s), nr(l, /[ \t]+/gm), (s = rr(l));
                null != c && (a.id = c), (c = a);
              }
              c && o.push(c);
            }
            return o;
          }),
          Ct("text/vtt", Aa),
          Ct('text/vtt; codecs="vtt"', Aa),
          (ja.prototype.parseInit = function (t) {
            var e = !1;
            if (
              (new Qe()
                .G("moov", Ze)
                .G("trak", Ze)
                .G("mdia", Ze)
                .aa(
                  "mdhd",
                  function (t) {
                    0 == t.version
                      ? (t.u.J(4), t.u.J(4), (this.a = t.u.F()), t.u.J(4))
                      : (t.u.J(8), t.u.J(8), (this.a = t.u.F()), t.u.J(8)),
                      t.u.J(4);
                  }.bind(this)
                )
                .G("minf", Ze)
                .G("stbl", Ze)
                .aa("stsd", tn)
                .G("wvtt", function () {
                  e = !0;
                })
                .parse(t),
              !this.a)
            )
              throw new u(2, 2, 2008);
            if (!e) throw new u(2, 2, 2008);
          }),
          (ja.prototype.parseMedia = function (t, e) {
            var n = 0,
              r = [],
              i = [],
              o = [],
              a = !1,
              s = !1,
              c = !1,
              l = null;
            if (
              (new Qe()
                .G("moof", Ze)
                .G("traf", Ze)
                .aa("tfdt", function (t) {
                  (a = !0), (n = t.version ? t.u.Ta() : t.u.F());
                })
                .aa("tfhd", function (t) {
                  var e = t.ac;
                  (t = t.u).J(4),
                    1 & e && t.J(8),
                    2 & e && t.J(4),
                    (l = 8 & e ? t.F() : null);
                })
                .aa("trun", function (t) {
                  s = !0;
                  var e = t.version,
                    n = t.ac,
                    i = (t = t.u).F();
                  1 & n && t.J(4), 4 & n && t.J(4);
                  for (var o = [], a = 0; a < i; a++) {
                    var u = { duration: null, Sb: null };
                    256 & n && (u.duration = t.F()),
                      512 & n && t.J(4),
                      1024 & n && t.J(4),
                      2048 & n && (u.Sb = e ? t.sc() : t.F()),
                      o.push(u);
                  }
                  r = o;
                })
                .G("vtte", function () {
                  i.push(null);
                })
                .G(
                  "vttc",
                  en(function (t) {
                    i.push(t.buffer);
                  })
                )
                .G("mdat", function (t) {
                  (c = !0), Ze(t);
                })
                .parse(t),
              !c && !a && !s)
            )
              throw new u(2, 2, 2008);
            for (var f = n, h = 0; h < r.length; h++) {
              var p = r[h],
                d = i[h],
                m = p.duration || l;
              m &&
                ((p = p.Sb ? n + p.Sb : f),
                (f = p + m),
                d &&
                  o.push(
                    Da(
                      d,
                      e.periodStart + p / this.a,
                      e.periodStart + f / this.a
                    )
                  ));
            }
            return o.filter(P);
          }),
          Ct('application/mp4; codecs="wvtt"', ja);
      }).call(i, this),
        void 0 !== t && t.exports
          ? (t.exports = i.shaka)
          : void 0 !==
              (r = function () {
                return i.shaka;
              }.call(e, n, e, t)) && (t.exports = r);
    })();
  },
]);
