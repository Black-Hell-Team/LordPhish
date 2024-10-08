// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",
      macros: [],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [[], []],
  };

  var ba = this,
    ea = function () {
      if (null === ca) {
        var a;
        a: {
          var b = ba.document.querySelector("script[nonce]");
          if (b) {
            var c = b.nonce || b.getAttribute("nonce");
            if (c && da.test(c)) {
              a = c;
              break a;
            }
          }
          a = null;
        }
        ca = a || "";
      }
      return ca;
    },
    da = /^[\w+/_-]+[=]{0,2}$/,
    ca = null,
    fa = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Ge = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.oe = function (a, c, f) {
        for (
          var d = Array(arguments.length - 2), e = 2;
          e < arguments.length;
          e++
        )
          d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d);
      };
    };
  var g = function (a, b) {
    this.s = a;
    this.Wc = b;
  };
  g.prototype.jd = function () {
    return this.s;
  };
  g.prototype.getType = g.prototype.jd;
  g.prototype.getData = function () {
    return this.Wc;
  };
  g.prototype.getData = g.prototype.getData;
  var ha = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    ia = function () {
      this.fa = {};
      this.sa = !1;
    };
  ia.prototype.get = function (a) {
    return this.fa["dust." + a];
  };
  ia.prototype.set = function (a, b) {
    !this.sa && (this.fa["dust." + a] = b);
  };
  ia.prototype.has = function (a) {
    return this.fa.hasOwnProperty("dust." + a);
  };
  var ja = function (a) {
    var b = [],
      c;
    for (c in a.fa) a.fa.hasOwnProperty(c) && b.push(c.substr(5));
    return b;
  };
  ia.prototype.remove = function (a) {
    !this.sa && delete this.fa["dust." + a];
  };
  ia.prototype.F = function () {
    this.sa = !0;
  };
  var u = function (a) {
    this.ia = new ia();
    this.h = [];
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (ha(b) ? (this.h[Number(b)] = a[Number(b)]) : this.ia.set(b, a[b]));
  };
  u.prototype.toString = function () {
    for (var a = [], b = 0; b < this.h.length; b++) {
      var c = this.h[b];
      null === c || void 0 === c ? a.push("") : a.push(c.toString());
    }
    return a.join(",");
  };
  u.prototype.set = function (a, b) {
    if ("length" == a) {
      if (!ha(b)) throw "RangeError: Length property must be a valid integer.";
      this.h.length = Number(b);
    } else ha(a) ? (this.h[Number(a)] = b) : this.ia.set(a, b);
  };
  u.prototype.set = u.prototype.set;
  u.prototype.get = function (a) {
    return "length" == a
      ? this.length()
      : ha(a)
      ? this.h[Number(a)]
      : this.ia.get(a);
  };
  u.prototype.get = u.prototype.get;
  u.prototype.length = function () {
    return this.h.length;
  };
  u.prototype.N = function () {
    for (var a = ja(this.ia), b = 0; b < this.h.length; b++) a.push(b + "");
    return new u(a);
  };
  u.prototype.getKeys = u.prototype.N;
  u.prototype.remove = function (a) {
    ha(a) ? delete this.h[Number(a)] : this.ia.remove(a);
  };
  u.prototype.remove = u.prototype.remove;
  u.prototype.pop = function () {
    return this.h.pop();
  };
  u.prototype.pop = u.prototype.pop;
  u.prototype.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  u.prototype.push = u.prototype.push;
  u.prototype.shift = function () {
    return this.h.shift();
  };
  u.prototype.shift = u.prototype.shift;
  u.prototype.splice = function (a, b, c) {
    return new u(this.h.splice.apply(this.h, arguments));
  };
  u.prototype.splice = u.prototype.splice;
  u.prototype.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  u.prototype.unshift = u.prototype.unshift;
  u.prototype.has = function (a) {
    return (ha(a) && this.h.hasOwnProperty(a)) || this.ia.has(a);
  };
  var ka = function () {
    function a(a, b) {
      c[a] = b;
    }
    function b() {
      c = {};
    }
    var c = {},
      d = {
        add: a,
        reset: b,
        create: function (d) {
          var e = {
            add: a,
            request: function (a, b) {
              return c[a]
                ? c[a].apply(d, Array.prototype.slice.call(arguments, 1))
                : !1;
            },
            reset: b,
          };
          e.add = e.add;
          e.request = e.request;
          e.reset = e.reset;
          return e;
        },
      };
    d.add = d.add;
    d.reset = d.reset;
    return d;
  };
  var la = function () {
    function a(a, c) {
      if (b[a]) {
        if (b[a].Ha + c > b[a].max) throw Error("Quota exceeded");
        b[a].Ha += c;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Ed: function (a) {
          c = a;
        },
        Jb: function () {
          c && a(c, 1);
        },
        Fd: function (a) {
          d = a;
        },
        P: function (b) {
          d && a(d, b);
        },
        Xd: function (a, c) {
          b[a] = b[a] || { Ha: 0 };
          b[a].max = c;
        },
        hd: function (a) {
          return (b[a] && b[a].Ha) || 0;
        },
        reset: function () {
          b = {};
        },
        Qc: a,
      };
    e.onFnConsume = e.Ed;
    e.consumeFn = e.Jb;
    e.onStorageConsume = e.Fd;
    e.consumeStorage = e.P;
    e.setMax = e.Xd;
    e.getConsumed = e.hd;
    e.reset = e.reset;
    e.consume = e.Qc;
    return e;
  };
  var ma = function (a, b, c) {
    this.G = a;
    this.V = b;
    this.U = c;
    this.h = new ia();
  };
  ma.prototype.add = function (a, b) {
    this.h.sa ||
      (this.G.P(
        ("string" === typeof a ? a.length : 1) +
          ("string" === typeof b ? b.length : 1)
      ),
      this.h.set(a, b));
  };
  ma.prototype.add = ma.prototype.add;
  ma.prototype.set = function (a, b) {
    this.h.sa ||
      (this.U && this.U.has(a)
        ? this.U.set(a, b)
        : (this.G.P(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.h.set(a, b)));
  };
  ma.prototype.set = ma.prototype.set;
  ma.prototype.get = function (a) {
    return this.h.has(a) ? this.h.get(a) : this.U ? this.U.get(a) : void 0;
  };
  ma.prototype.get = ma.prototype.get;
  ma.prototype.has = function (a) {
    return !!this.h.has(a) || !(!this.U || !this.U.has(a));
  };
  ma.prototype.has = ma.prototype.has;
  ma.prototype.C = function () {
    return this.G;
  };
  ma.prototype.F = function () {
    this.h.F();
  };
  var na = function (a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a));
    },
    oa = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    };
  var v = function (a, b) {
    ia.call(this);
    this.Vb = a;
    this.fd = b;
  };
  fa(v, ia);
  var qa = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = pa(a, b[d])), c instanceof g);
        d++
      );
      return c;
    },
    pa = function (a, b) {
      var c = a.get(String(b[0]));
      if (!(c && c instanceof v))
        throw "Attempting to execute non-function " + b[0] + ".";
      return c.i.apply(c, [a].concat(b.slice(1)));
    };
  v.prototype.toString = function () {
    return this.Vb;
  };
  v.prototype.getName = function () {
    return this.Vb;
  };
  v.prototype.getName = v.prototype.getName;
  v.prototype.N = function () {
    return new u(ja(this));
  };
  v.prototype.getKeys = v.prototype.N;
  v.prototype.i = function (a, b) {
    var c,
      d = {
        A: function () {
          return a;
        },
        evaluate: function (b) {
          var c = a;
          return na(b) ? pa(c, b) : b;
        },
        oa: function (b) {
          return qa(a, b);
        },
        C: function () {
          return a.C();
        },
        ve: function () {
          c || (c = a.V.create(d));
          return c;
        },
      };
    a.C().Jb();
    return this.fd.apply(d, Array.prototype.slice.call(arguments, 1));
  };
  v.prototype.invoke = v.prototype.i;
  var x = function () {
    ia.call(this);
  };
  fa(x, ia);
  x.prototype.N = function () {
    return new u(ja(this));
  };
  x.prototype.getKeys = x.prototype.N; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ra = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    sa = function (a) {
      if (null == a) return String(a);
      var b = ra.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    ta = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    ua = function (a) {
      if (!a || "object" != sa(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !ta(a, "constructor") &&
          !ta(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || ta(a, b);
    },
    y = function (a, b) {
      var c = b || ("array" == sa(a) ? [] : {}),
        d;
      for (d in a)
        if (ta(a, d)) {
          var e = a[d];
          "array" == sa(e)
            ? ("array" != sa(c[d]) && (c[d] = []), (c[d] = y(e, c[d])))
            : ua(e)
            ? (ua(c[d]) || (c[d] = {}), (c[d] = y(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var va = function (a) {
      if (a instanceof u) {
        for (var b = [], c = a.length(), d = 0; d < c; d++)
          a.has(d) && (b[d] = va(a.get(d)));
        return b;
      }
      if (a instanceof x) {
        for (var e = {}, f = a.N(), h = f.length(), k = 0; k < h; k++)
          e[f.get(k)] = va(a.get(f.get(k)));
        return e;
      }
      return a instanceof v
        ? function () {
            for (
              var b = Array.prototype.slice.call(arguments, 0), c = 0;
              c < b.length;
              c++
            )
              b[c] = wa(b[c]);
            var d = new ma(la(), ka());
            return va(a.i.apply(a, [d].concat(b)));
          }
        : a;
    },
    wa = function (a) {
      if (na(a)) {
        for (var b = [], c = 0; c < a.length; c++)
          a.hasOwnProperty(c) && (b[c] = wa(a[c]));
        return new u(b);
      }
      if (ua(a)) {
        var d = new x(),
          e;
        for (e in a) a.hasOwnProperty(e) && d.set(e, wa(a[e]));
        return d;
      }
      if ("function" === typeof a)
        return new v("", function (b) {
          for (
            var c = Array.prototype.slice.call(arguments, 0), d = 0;
            d < c.length;
            d++
          )
            c[d] = va(this.evaluate(c[d]));
          return wa(a.apply(a, c));
        });
      var f = typeof a;
      if (null === a || "string" === f || "number" === f || "boolean" === f)
        return a;
    };
  var xa = {
    control: function (a, b) {
      return new g(a, this.evaluate(b));
    },
    fn: function (a, b, c) {
      var d = this.A(),
        e = this.evaluate(b);
      if (!(e instanceof u))
        throw "Error: non-List value given for Fn argument names.";
      var f = Array.prototype.slice.call(arguments, 2);
      this.C().P(a.length + f.length);
      return new v(
        a,
        (function () {
          return function (a) {
            for (
              var b = new ma(d.G, d.V, d),
                c = Array.prototype.slice.call(arguments, 0),
                h = 0;
              h < c.length;
              h++
            )
              if (((c[h] = this.evaluate(c[h])), c[h] instanceof g))
                return c[h];
            for (var n = e.get("length"), p = 0; p < n; p++)
              p < c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
            b.set("arguments", new u(c));
            var q = qa(b, f);
            if (q instanceof g) return "return" === q.s ? q.getData() : q;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.C();
      b.P(arguments.length);
      for (var c = new u(), d = 0; d < arguments.length; d++) {
        var e = this.evaluate(arguments[d]);
        "string" === typeof e && b.P(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.C(), c = new x(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = this.evaluate(arguments[d]) + "",
          f = this.evaluate(arguments[d + 1]),
          h = e.length;
        h += "string" === typeof f ? f.length : 1;
        b.P(h);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var z = function () {
    this.G = la();
    this.V = ka();
    this.qa = new ma(this.G, this.V);
  };
  z.prototype.O = function (a, b) {
    var c = new v(a, b);
    c.F();
    this.qa.set(a, c);
  };
  z.prototype.addInstruction = z.prototype.O;
  z.prototype.Ib = function (a, b) {
    xa.hasOwnProperty(a) && this.O(b || a, xa[a]);
  };
  z.prototype.addNativeInstruction = z.prototype.Ib;
  z.prototype.C = function () {
    return this.G;
  };
  z.prototype.getQuota = z.prototype.C;
  z.prototype.Na = function () {
    this.G = la();
    this.qa.G = this.G;
  };
  z.prototype.resetQuota = z.prototype.Na;
  z.prototype.Td = function () {
    this.V = ka();
    this.qa.V = this.V;
  };
  z.prototype.resetPermissions = z.prototype.Td;
  z.prototype.L = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.nb(c);
  };
  z.prototype.execute = z.prototype.L;
  z.prototype.nb = function (a) {
    for (var b, c = 0; c < arguments.length; c++) {
      var d = pa(this.qa, arguments[c]);
      b =
        d instanceof g ||
        d instanceof v ||
        d instanceof u ||
        d instanceof x ||
        null === d ||
        void 0 === d ||
        "string" === typeof d ||
        "number" === typeof d ||
        "boolean" === typeof d
          ? d
          : void 0;
    }
    return b;
  };
  z.prototype.run = z.prototype.nb;
  z.prototype.F = function () {
    this.qa.F();
  };
  z.prototype.makeImmutable = z.prototype.F;
  var Ba = function (a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  };
  var Ca = {
    $d: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
      " "
    ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof u)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            c.push(e.get(f));
        else c.push(arguments[d]);
      return new u(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.i(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.i(a, this.get(e), e, this) && d.push(this.get(e));
      return new u(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.i(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.i(a, this.get(e), e, this));
      return new u(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f;
      if (void 0 !== c) (e = c), (f = 0);
      else {
        if (0 == d) throw "TypeError: Reduce on List with no elements.";
        for (var h = 0; h < d; h++)
          if (this.has(h)) {
            e = this.get(h);
            f = h + 1;
            break;
          }
        if (h == d) throw "TypeError: Reduce on List with no elements.";
      }
      for (h = f; h < d; h++)
        this.has(h) && (e = b.i(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f;
      if (void 0 !== c) (e = c), (f = d - 1);
      else {
        if (0 == d) throw "TypeError: ReduceRight on List with no elements.";
        for (var h = 1; h <= d; h++)
          if (this.has(d - h)) {
            e = this.get(d - h);
            f = d - (h + 1);
            break;
          }
        if (h > d) throw "TypeError: ReduceRight on List with no elements.";
      }
      for (h = f; 0 <= h; h--)
        this.has(h) && (e = b.i(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Ba(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new u(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.i(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Ba(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (c, d) {
            return Number(b.i(a, c, d));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var B = {
      Tb: {
        ADD: 0,
        AND: 1,
        APPLY: 2,
        ASSIGN: 3,
        BREAK: 4,
        CASE: 5,
        CONTINUE: 6,
        CONTROL: 49,
        CREATE_ARRAY: 7,
        CREATE_OBJECT: 8,
        DEFAULT: 9,
        DEFN: 50,
        DIVIDE: 10,
        DO: 11,
        EQUALS: 12,
        EXPRESSION_LIST: 13,
        FN: 51,
        FOR: 14,
        FOR_IN: 47,
        GET: 15,
        GET_CONTAINER_VARIABLE: 48,
        GET_INDEX: 16,
        GET_PROPERTY: 17,
        GREATER_THAN: 18,
        GREATER_THAN_EQUALS: 19,
        IDENTITY_EQUALS: 20,
        IDENTITY_NOT_EQUALS: 21,
        IF: 22,
        LESS_THAN: 23,
        LESS_THAN_EQUALS: 24,
        MODULUS: 25,
        MULTIPLY: 26,
        NEGATE: 27,
        NOT: 28,
        NOT_EQUALS: 29,
        NULL: 45,
        OR: 30,
        PLUS_EQUALS: 31,
        POST_DECREMENT: 32,
        POST_INCREMENT: 33,
        PRE_DECREMENT: 34,
        PRE_INCREMENT: 35,
        QUOTE: 46,
        RETURN: 36,
        SET_PROPERTY: 43,
        SUBTRACT: 37,
        SWITCH: 38,
        TERNARY: 39,
        TYPEOF: 40,
        UNDEFINED: 44,
        VAR: 41,
        WHILE: 42,
      },
    },
    Da =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    Ea = new g("break"),
    Fa = new g("continue");
  B.add = function (a, b) {
    return this.evaluate(a) + this.evaluate(b);
  };
  B.and = function (a, b) {
    return this.evaluate(a) && this.evaluate(b);
  };
  B.apply = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof u))
      throw "Error: Non-List argument given to Apply instruction.";
    if (null === a || void 0 === a)
      throw "TypeError: Can't read property " + b + " of " + a + ".";
    if ("boolean" == typeof a || "number" == typeof a) {
      if ("toString" == b) return a.toString();
      throw "TypeError: " + a + "." + b + " is not a function.";
    }
    if ("string" == typeof a) {
      if (0 <= oa(Da, b)) return wa(a[b].apply(a, Ba(c)));
      throw "TypeError: " + b + " is not a function";
    }
    if (a instanceof u) {
      if (a.has(b)) {
        var d = a.get(b);
        if (d instanceof v) {
          var e = Ba(c);
          e.unshift(this.A());
          return d.i.apply(d, e);
        }
        throw "TypeError: " + b + " is not a function";
      }
      if (0 <= oa(Ca.$d, b))
        return (e = Ba(c)), e.unshift(this.A()), Ca[b].apply(a, e);
    }
    if (a instanceof v || a instanceof x) {
      if (a.has(b)) {
        d = a.get(b);
        if (d instanceof v)
          return (e = Ba(c)), e.unshift(this.A()), d.i.apply(d, e);
        throw "TypeError: " + b + " is not a function";
      }
      if ("toString" == b) return a instanceof v ? a.getName() : a.toString();
      if ("hasOwnProperty" == b) return a.has.apply(a, Ba(c));
    }
    throw "TypeError: Object has no '" + b + "' property.";
  };
  B.assign = function (a, b) {
    a = this.evaluate(a);
    if ("string" != typeof a) throw "Invalid key name given for assignment.";
    var c = this.A();
    if (!c.has(a)) throw "Attempting to assign to undefined value " + b;
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  };
  B["break"] = function () {
    return Ea;
  };
  B["case"] = function (a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof g) return d;
    }
  };
  B["continue"] = function () {
    return Fa;
  };
  B.Xc = function (a, b, c) {
    var d = new u();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [B.Tb.FN, a, d].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.A().set(a, this.evaluate(f));
  };
  B.$c = function (a, b) {
    return this.evaluate(a) / this.evaluate(b);
  };
  B.cd = function (a, b) {
    return this.evaluate(a) == this.evaluate(b);
  };
  B.dd = function (a) {
    for (var b, c = 0; c < arguments.length; c++)
      b = this.evaluate(arguments[c]);
    return b;
  };
  B.gd = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.A();
    if ("string" == typeof b)
      for (var e = 0; e < b.length; e++) {
        d.set(a, e);
        var f = this.oa(c);
        if (f instanceof g) {
          if ("break" == f.s) break;
          if ("return" == f.s) return f;
        }
      }
    else if (b instanceof x || b instanceof u || b instanceof v) {
      var h = b.N(),
        k = h.length();
      for (e = 0; e < k; e++)
        if ((d.set(a, h.get(e)), (f = this.oa(c)), f instanceof g)) {
          if ("break" == f.s) break;
          if ("return" == f.s) return f;
        }
    }
  };
  B.get = function (a) {
    return this.A().get(this.evaluate(a));
  };
  B.Rb = function (a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (void 0 === a || null === a)
      throw "TypeError: cannot access property of " + a + ".";
    a instanceof x || a instanceof u || a instanceof v
      ? (c = a.get(b))
      : "string" == typeof a &&
        ("length" == b ? (c = a.length) : ha(b) && (c = a[b]));
    return c;
  };
  B.kd = function (a, b) {
    return this.evaluate(a) > this.evaluate(b);
  };
  B.ld = function (a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  };
  B.pd = function (a, b) {
    return this.evaluate(a) === this.evaluate(b);
  };
  B.qd = function (a, b) {
    return this.evaluate(a) !== this.evaluate(b);
  };
  B["if"] = function (a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = this.oa(d);
    if (e instanceof g) return e;
  };
  B.xd = function (a, b) {
    return this.evaluate(a) < this.evaluate(b);
  };
  B.yd = function (a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  };
  B.zd = function (a, b) {
    return this.evaluate(a) % this.evaluate(b);
  };
  B.multiply = function (a, b) {
    return this.evaluate(a) * this.evaluate(b);
  };
  B.Ad = function (a) {
    return -this.evaluate(a);
  };
  B.Bd = function (a) {
    return !this.evaluate(a);
  };
  B.Cd = function (a, b) {
    return this.evaluate(a) != this.evaluate(b);
  };
  B["null"] = function () {
    return null;
  };
  B.or = function (a, b) {
    return this.evaluate(a) || this.evaluate(b);
  };
  B.ac = function (a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  };
  B.bc = function (a) {
    return this.evaluate(a);
  };
  B.quote = function (a) {
    return Array.prototype.slice.apply(arguments);
  };
  B["return"] = function (a) {
    return new g("return", this.evaluate(a));
  };
  B.setProperty = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (null === a || void 0 === a)
      throw "TypeError: Can't set property " + b + " of " + a + ".";
    (a instanceof v || a instanceof u || a instanceof x) && a.set(b, c);
    return c;
  };
  B.Zd = function (a, b) {
    return this.evaluate(a) - this.evaluate(b);
  };
  B["switch"] = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!na(b) || !na(c)) throw "Error: Malformed switch instruction.";
    for (var d, e = !1, f = 0; f < b.length; f++)
      if (e || a === this.evaluate(b[f]))
        if (((d = this.evaluate(c[f])), d instanceof g)) {
          var h = d.s;
          if ("break" == h) return;
          if ("return" == h || "continue" == h) return d;
        } else e = !0;
    if (
      c.length == b.length + 1 &&
      ((d = this.evaluate(c[c.length - 1])),
      d instanceof g && ("return" == d.s || "continue" == d.s))
    )
      return d;
  };
  B.ae = function (a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  };
  B["typeof"] = function (a) {
    a = this.evaluate(a);
    return a instanceof v ? "function" : typeof a;
  };
  B.undefined = function () {};
  B["var"] = function (a) {
    for (var b = this.A(), c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      "string" != typeof d || b.add(d, void 0);
    }
  };
  B["while"] = function (a, b, c, d) {
    var e,
      f = this.evaluate(d);
    if (this.evaluate(c) && ((e = this.oa(f)), e instanceof g)) {
      if ("break" == e.s) return;
      if ("return" == e.s) return e;
    }
    for (; this.evaluate(a); ) {
      e = this.oa(f);
      if (e instanceof g) {
        if ("break" == e.s) break;
        if ("return" == e.s) return e;
      }
      this.evaluate(b);
    }
  };
  var Ha = function () {
    this.Sb = !1;
    this.R = new z();
    Ga(this);
    this.Sb = !0;
  };
  Ha.prototype.vd = function () {
    return this.Sb;
  };
  Ha.prototype.isInitialized = Ha.prototype.vd;
  Ha.prototype.L = function (a) {
    return this.R.nb(a);
  };
  Ha.prototype.execute = Ha.prototype.L;
  Ha.prototype.F = function () {
    this.R.F();
  };
  Ha.prototype.makeImmutable = Ha.prototype.F;
  var Ga = function (a) {
    function b(a, b) {
      e.R.Ib(a, String(b));
    }
    function c(a, b) {
      e.R.O(String(d[a]), b);
    }
    var d = B.Tb,
      e = a;
    b("control", d.CONTROL);
    b("fn", d.FN);
    b("list", d.CREATE_ARRAY);
    b("map", d.CREATE_OBJECT);
    b("undefined", d.UNDEFINED);
    c("ADD", B.add);
    c("AND", B.and);
    c("APPLY", B.apply);
    c("ASSIGN", B.assign);
    c("BREAK", B["break"]);
    c("CASE", B["case"]);
    c("CONTINUE", B["continue"]);
    c("DEFAULT", B["case"]);
    c("DEFN", B.Xc);
    c("DIVIDE", B.$c);
    c("EQUALS", B.cd);
    c("EXPRESSION_LIST", B.dd);
    c("FOR_IN", B.gd);
    c("GET", B.get);
    c("GET_INDEX", B.Rb);
    c("GET_PROPERTY", B.Rb);
    c("GREATER_THAN", B.kd);
    c("GREATER_THAN_EQUALS", B.ld);
    c("IDENTITY_EQUALS", B.pd);
    c("IDENTITY_NOT_EQUALS", B.qd);
    c("IF", B["if"]);
    c("LESS_THAN", B.xd);
    c("LESS_THAN_EQUALS", B.yd);
    c("MODULUS", B.zd);
    c("MULTIPLY", B.multiply);
    c("NEGATE", B.Ad);
    c("NOT", B.Bd);
    c("NOT_EQUALS", B.Cd);
    c("NULL", B["null"]);
    c("OR", B.or);
    c("POST_DECREMENT", B.ac);
    c("POST_INCREMENT", B.ac);
    c("PRE_DECREMENT", B.bc);
    c("PRE_INCREMENT", B.bc);
    c("QUOTE", B.quote);
    c("RETURN", B["return"]);
    c("SET_PROPERTY", B.setProperty);
    c("SUBTRACT", B.Zd);
    c("SWITCH", B["switch"]);
    c("TERNARY", B.ae);
    c("TYPEOF", B["typeof"]);
    c("VAR", B["var"]);
    c("WHILE", B["while"]);
  };
  Ha.prototype.O = function (a, b) {
    this.R.O(a, b);
  };
  Ha.prototype.addInstruction = Ha.prototype.O;
  Ha.prototype.C = function () {
    return this.R.C();
  };
  Ha.prototype.getQuota = Ha.prototype.C;
  Ha.prototype.Na = function () {
    this.R.Na();
  };
  Ha.prototype.resetQuota = Ha.prototype.Na;
  var Ia = function () {
    this.Ka = {};
  };
  Ia.prototype.get = function (a) {
    return this.Ka.hasOwnProperty(a) ? this.Ka[a] : void 0;
  };
  Ia.prototype.add = function (a, b) {
    if (this.Ka.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    var c = new v(a, function () {
      for (
        var a = Array.prototype.slice.call(arguments, 0), c = 0;
        c < a.length;
        c++
      )
        a[c] = this.evaluate(a[c]);
      return b.apply(this, a);
    });
    c.F();
    this.Ka[a] = c;
  };
  Ia.prototype.addAll = function (a) {
    for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b]);
  };
  var C = window,
    G = document,
    Ja = navigator,
    Ka = function (a, b) {
      var c = C[a];
      C[a] = void 0 === c ? b : c;
      return C[a];
    },
    La = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    I = function (a, b, c) {
      var d = G.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      d.src = a;
      La(d, b);
      c && (d.onerror = c);
      ea() && d.setAttribute("nonce", ea());
      var e = G.getElementsByTagName("script")[0] || G.body || G.head;
      e.parentNode.insertBefore(d, e);
      return d;
    },
    Ma = function (a, b) {
      var c = G.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (G.body && G.body.lastChild) || G.body || G.head;
      d.parentNode.insertBefore(c, d);
      La(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    K = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    Na = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Oa = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    P = function (a) {
      C.setTimeout(a, 0);
    },
    Ra = function (a) {
      var b = G.getElementById(a);
      if (b && Pa(b, "id") != a)
        for (var c = 1; c < document.all[a].length; c++)
          if (Pa(document.all[a][c], "id") == a) return document.all[a][c];
      return b;
    },
    Pa = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Sa = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ta = function (a) {
      var b = G.createElement("div");
      b.innerHTML = "A<div>" + a + "</div>";
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    };
  var Ua = function (a, b) {
      for (var c = a.split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b)
          return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ");
      }
    },
    Q = function (a, b, c, d, e) {
      var f,
        h = a.protocol || C.location.protocol;
      h = h.replace(":", "").toLowerCase();
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "protocol":
          f = h;
          break;
        case "host":
          f = (a.hostname || C.location.hostname).split(":")[0].toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            1 * (a.hostname ? a.port : C.location.port) ||
              ("http" == h ? 80 : "https" == h ? 443 : "")
          );
          break;
        case "path":
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= oa(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Ua(f, e));
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Va = function (a) {
      var b = "";
      a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
      return b;
    },
    S = function (a) {
      var b = G.createElement("a");
      a && (b.href = a);
      return b;
    };
  var Ya = function () {
      this.$b = new Ha();
      var a = new Ia();
      a.addAll(Wa());
      Xa(this, function (b) {
        return a.get(b);
      });
    },
    Wa = function () {
      return {
        callInWindow: Za,
        getCurrentUrl: $a,
        getInWindow: ab,
        getReferrer: bb,
        getUrlComponent: db,
        getUrlFragment: eb,
        isPlainObject: fb,
        loadIframe: gb,
        loadJavaScript: hb,
        removeUrlFragment: ib,
        replaceAll: jb,
        sendTrackingBeacon: mb,
        setInWindow: nb,
      };
    };
  Ya.prototype.L = function (a) {
    return this.$b.L(a);
  };
  Ya.prototype.execute = Ya.prototype.L;
  var Xa = function (a, b) {
    a.$b.O("require", b);
  };
  function Za(a, b) {
    for (
      var c = a.split("."), d = C, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      (d = e), (e = e[c[f]]);
    if ("function" == sa(e)) {
      var h = [];
      for (f = 1; f < arguments.length; f++) h.push(va(arguments[f]));
      e.apply(d, h);
    }
  }
  function $a() {
    return C.location.href;
  }
  function ab(a, b, c) {
    for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++)
      if (((e = e[d[f]]), void 0 === e || null === e)) return;
    b && (void 0 === e[d[f]] || (c && !e[d[f]])) && (e[d[f]] = va(b));
    return wa(e[d[f]]);
  }
  function bb() {
    return G.referrer;
  }
  function db(a, b, c, d, e) {
    var f;
    if (d && d instanceof u) {
      f = [];
      for (var h = 0; h < d.length(); h++) {
        var k = d.get(h);
        "string" == typeof k && f.push(k);
      }
    }
    return Q(S(a), b, c, f, e);
  }
  function eb(a) {
    return Q(S(a), "fragment");
  }
  function fb(a) {
    return a instanceof x;
  }
  function gb(a, b) {
    var c = this.A();
    Ma(a, function () {
      b instanceof v && b.i(c);
    });
  }
  var ob = {};
  function hb(a, b, c, d) {
    var e = this.A(),
      f = function () {
        b instanceof v && b.i(e);
      },
      h = function () {
        c instanceof v && c.i(e);
      };
    d
      ? ob[d]
        ? (ob[d].onSuccess.push(f), ob[d].onFailure.push(h))
        : ((ob[d] = { onSuccess: [f], onFailure: [h] }),
          (f = function () {
            for (var a = ob[d].onSuccess, b = 0; b < a.length; b++) P(a[b]);
            a.push = function (a) {
              P(a);
              return 0;
            };
          }),
          (h = function () {
            for (var a = ob[d].onFailure, b = 0; b < a.length; b++) P(a[b]);
            ob[d] = null;
          }),
          I(a, f, h))
      : I(a, f, h);
  }
  function ib(a) {
    return Va(S(a));
  }
  function jb(a, b, c) {
    return a.replace(new RegExp(b, "g"), c);
  }
  function mb(a, b, c) {
    var d = this.A();
    K(
      a,
      function () {
        b instanceof v && b.i(d);
      },
      function () {
        c instanceof v && c.i(d);
      }
    );
  }
  function nb(a, b, c) {
    for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++)
      if (((e = e[d[f]]), void 0 === e)) return !1;
    return void 0 === e[d[f]] || c ? ((e[d[f]] = va(b)), !0) : !1;
  }
  var Lb,
    Mb = [],
    Nb = [],
    Ob = [],
    Pb = [],
    Qb = [],
    Rb = {},
    Sb,
    Wb,
    Xb,
    Yb = function (a) {
      var b = a["function"];
      if (!b) throw "Error: No function name given for function call.";
      var c = !!Rb[b],
        d = {},
        e;
      for (e in a)
        a.hasOwnProperty(e) &&
          0 === e.indexOf("vtp_") &&
          (d[c ? e : e.substr(4)] = a[e]);
      return c ? Rb[b](d) : Lb(b, d);
    },
    $b = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Zb(a[e], b, c));
      return d;
    },
    Zb = function (a, b, c) {
      if (na(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Zb(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Mb[f];
            if (!h || b(h)) return;
            c[f] = !0;
            try {
              var k = $b(h, b, c);
              d = Yb(k);
              Xb && (d = Xb.Sc(d, k));
            } catch (w) {
              d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Zb(a[l], b, c)] = Zb(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var m = !1, n = 1; n < a.length; n++) {
              var p = Zb(a[n], b, c);
              Wb && (m = m || p === Wb.Aa);
              d.push(p);
            }
            return Wb && m ? Wb.Tc(d) : d.join("");
          case "escape":
            d = Zb(a[1], b, c);
            if (Wb && na(a[1]) && "macro" === a[1][0] && Wb.wd(a))
              return Wb.Jd(d);
            d = String(d);
            for (var q = 2; q < a.length; q++) pb[a[q]] && (d = pb[a[q]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!Pb[t])
              throw Error("Unable to resolve tag reference " + t + ".");
            return (d = { Ob: a[2], index: t });
          case "zb":
            var r = ac(
              { function: a[1], arg0: a[2], arg1: a[3], ignore_case: a[5] },
              b,
              c
            );
            a[4] && (r = !r);
            return r;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    ac = function (a, b, c) {
      try {
        return Sb($b(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return null;
    };
  var bc = null,
    ec = function (a) {
      function b(a) {
        for (var b = 0; b < a.length; b++) d[a[b]] = !0;
      }
      var c = [],
        d = [];
      bc = cc(a);
      for (var e = 0; e < Nb.length; e++) {
        var f = Nb[e],
          h = dc(f);
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(f.block || []);
        } else null === h && b(f.block || []);
      }
      var m = [];
      for (e = 0; e < Pb.length; e++) c[e] && !d[e] && (m[e] = !0);
      return m;
    },
    dc = function (a) {
      for (var b = a["if"] || [], c = 0; c < b.length; c++) {
        var d = bc(b[c]);
        if (!d) return null === d ? null : !1;
      }
      var e = a.unless || [];
      for (c = 0; c < e.length; c++) {
        d = bc(e[c]);
        if (null === d) return null;
        if (d) return !1;
      }
      return !0;
    };
  var cc = function (a) {
    var b = [];
    return function (c) {
      void 0 === b[c] && (b[c] = ac(Ob[c], a));
      return b[c];
    };
  }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var hc = {},
    ic = null;
  hc.m = "UA-108348248-1";
  var jc = null,
    kc = "//www.googletagmanager.com/a?id=" + hc.m + "&cv=1",
    lc = {},
    mc = {};
  var nc = function () {},
    oc = function (a) {
      return "function" == typeof a;
    },
    pc = function (a) {
      return "string" == sa(a);
    },
    qc = function (a) {
      return "number" == sa(a) && !isNaN(a);
    },
    rc = function (a) {
      return Math.round(Number(a)) || 0;
    },
    sc = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    tc = function (a) {
      var b = [];
      if (na(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    uc = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    vc = function (a, b) {
      if (!qc(a) || !qc(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    wc = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  wc.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wc.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  wc.prototype.contains = function (a) {
    return void 0 !== this.get(a);
  };
  var xc = function () {
      var a = ic.sequence || 0;
      ic.sequence = a + 1;
      return a;
    },
    yc = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    zc = function (a) {
      var b = !1;
      return function () {
        if (!b)
          try {
            a();
          } catch (c) {}
        b = !0;
      };
    };
  var T = (function () {
    var a = function (a) {
      return {
        toString: function () {
          return a;
        },
      };
    };
    return {
      xb: a("convert_case_to"),
      yb: a("convert_false_to"),
      zb: a("convert_null_to"),
      Ab: a("convert_true_to"),
      Bb: a("convert_undefined_to"),
      J: a("function"),
      jc: a("instance_name"),
      kc: a("live_only"),
      mc: a("malware_disabled"),
      nc: a("once_per_event"),
      Db: a("once_per_load"),
      Eb: a("setup_tags"),
      oc: a("tag_id"),
      Fb: a("teardown_tags"),
    };
  })();
  var Ac = new wc(),
    Bc = {},
    Ec = {
      set: function (a, b) {
        y(Cc(a, b), Bc);
      },
      get: function (a) {
        return Dc(a, 2);
      },
      reset: function () {
        Ac = new wc();
        Bc = {};
      },
    },
    Dc = function (a, b) {
      return 2 != b ? Ac.get(a) : Fc(a);
    },
    Fc = function (a, b, c) {
      var d = a.split(".");
      var e = function (a, b) {
        for (var c = 0; void 0 !== a && c < d.length; c++) {
          if (null === a) return !1;
          a = a[d[c]];
        }
        return void 0 !== a || 1 < c ? a : b.length ? e(Gc(b.pop()), b) : Hc(d);
      };
      return e(Bc.eventModel, [b, c]);
      return Hc(d);
    },
    Hc = function (a) {
      for (var b = Bc, c = 0; c < a.length; c++) {
        if (null === b) return !1;
        if (void 0 === b) break;
        b = b[a[c]];
      }
      return b;
    };
  var Gc = function (a) {
      if (a) {
        var b = Hc(["gtag", "targets", a]);
        return ua(b) ? b : void 0;
      }
    },
    Kc = function (a, b) {
      function c(a) {
        if (a) for (var b in a) a.hasOwnProperty(b) && (d[b] = null);
      }
      var d = {};
      c(Bc);
      delete d.eventModel;
      c(Gc(a));
      c(Gc(b));
      c(Bc.eventModel);
      var e = [],
        f;
      for (f in d) d.hasOwnProperty(f) && e.push(f);
      return e;
    };
  var Lc = function (a, b) {
      Ac.set(a, b);
      y(Cc(a, b), Bc);
    },
    Cc = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    };
  var Mc = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Nc = {
      customPixels: ["nonGooglePixels"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Oc = {
      customPixels: ["customScripts", "html"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Pc = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    };
  var Qc = function (a) {
    var b = Dc("gtm.whitelist");
    b = ["google", "gtagfl", "oid", "op"];
    var c = b && Pc(tc(b), Nc),
      d = Dc("gtm.blacklist") || Dc("tagTypeBlacklist") || [];
    Mc.test(C.location && C.location.hostname) &&
      ((d = tc(d)), d.push("nonGooglePixels", "nonGoogleScripts"));
    var e = d && Pc(tc(d), Oc),
      f = {};
    return function (h) {
      var k = h && h[T.J];
      if (!k || "string" != typeof k) return !0;
      k = k.replace(/_/g, "");
      if (void 0 !== f[k]) return f[k];
      var l = mc[k] || [],
        m = a(k);
      if (b) {
        var n;
        if ((n = m))
          a: {
            if (0 > oa(c, k))
              if (l && 0 < l.length)
                for (var p = 0; p < l.length; p++) {
                  if (0 > oa(c, l[p])) {
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (d) {
        var t;
        if (!(t = 0 <= oa(e, k)))
          a: {
            for (var r = l || [], w = new wc(), E = 0; E < e.length; E++)
              w.set(e[E], !0);
            for (E = 0; E < r.length; E++)
              if (w.get(r[E])) {
                t = !0;
                break a;
              }
            t = !1;
          }
        q = t;
      }
      return (f[k] = !m || q);
    };
  };
  var Rc = {
    Sc: function (a, b) {
      b[T.xb] &&
        "string" === typeof a &&
        (a = 1 == b[T.xb] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(T.zb) && null === a && (a = b[T.zb]);
      b.hasOwnProperty(T.Bb) && void 0 === a && (a = b[T.Bb]);
      b.hasOwnProperty(T.Ab) && !0 === a && (a = b[T.Ab]);
      b.hasOwnProperty(T.yb) && !1 === a && (a = b[T.yb]);
      return a;
    },
  };
  var Sc = function (a) {
      var b = ic.zones;
      !b && a && (b = ic.zones = a());
      return b;
    },
    Tc = {
      active: !0,
      isWhitelisted: function () {
        return !0;
      },
    };
  var Uc = !1,
    Vc = 0,
    Wc = [];
  function Xc(a) {
    if (!Uc) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Uc = !0;
        for (var e = 0; e < Wc.length; e++) P(Wc[e]);
      }
      Wc.push = function () {
        for (var a = 0; a < arguments.length; a++) P(arguments[a]);
        return 0;
      };
    }
  }
  function Yc() {
    if (!Uc && 140 > Vc) {
      Vc++;
      try {
        G.documentElement.doScroll("left"), Xc();
      } catch (a) {
        C.setTimeout(Yc, 50);
      }
    }
  }
  var Zc = function (a) {
    Uc ? a() : Wc.push(a);
  };
  var $c = !1,
    ad = function () {
      return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject];
    };
  var bd = function (a) {
      C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
      var b = C.GoogleAnalyticsObject;
      if (!C[b]) {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(new Date());
        C[b] = c;
      }
      return C[b];
    },
    cd = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = ad();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    };
  var gd = function () {
      return (
        "&tc=" +
        Pb.filter(function (a) {
          return a;
        }).length
      );
    },
    hd = "0.005000" > Math.random(),
    id = "",
    jd = function () {
      id = [kc, "&v=3&t=t", "&pid=" + vc(), "&rv=6c"].join("");
    },
    kd = {},
    ld = "",
    md = void 0,
    nd = {},
    od = {},
    pd = void 0,
    qd = 2,
    rd = 1e3,
    sd = function () {
      qd = 2;
    },
    td = function () {
      var a = md;
      return void 0 === a
        ? ""
        : [id, kd[a] ? "" : "&es=1", nd[a], gd(), ld, "&z=0"].join("");
    },
    ud = function () {
      pd && (C.clearTimeout(pd), (pd = void 0));
      void 0 === md ||
        (kd[md] && !ld) ||
        (od[md] || 0 >= qd-- || 0 >= rd--
          ? (od[md] = !0)
          : (K(td()), (kd[md] = !0), (ld = "")));
    },
    vd = function (a, b, c) {
      if (hd && !od[a] && b) {
        a !== md && (ud(), (md = a));
        var d = c + String(b[T.J] || "").replace(/_/g, "");
        ld = ld ? ld + "." + d : "&tr=" + d;
        pd || (pd = C.setTimeout(ud, 500));
        2022 <= td().length && ud();
      }
    };
  function wd(a, b, c, d, e, f) {
    var h = Pb[a],
      k = xd(a, b, c, d, e, f);
    if (!k) return null;
    var l = Zb(h[T.Eb], f.S, []);
    if (l && l.length) {
      var m = l[0];
      k = wd(m.index, b, k, 1 === m.Ob ? e : k, e, f);
    }
    return k;
  }
  function xd(a, b, c, d, e, f) {
    function h() {
      var b = $b(k, f.S);
      b.vtp_gtmOnSuccess = function () {
        vd(f.id, Pb[a], "5");
        c();
      };
      b.vtp_gtmOnFailure = function () {
        vd(f.id, Pb[a], "6");
        d();
      };
      b.vtp_gtmTagId = k.tag_id;
      if (k[T.mc]) d();
      else {
        vd(f.id, k, "1");
        try {
          Yb(b);
        } catch (E) {
          vd(f.id, k, "7");
          e();
        }
      }
    }
    var k = Pb[a];
    if (f.S(k)) return null;
    var l = Zb(k[T.Fb], f.S, []);
    if (l && l.length) {
      var m = l[0],
        n = wd(m.index, b, c, d, e, f);
      if (!n) return null;
      c = n;
      d = 2 === m.Ob ? e : n;
    }
    if (k[T.Db] || k[T.nc]) {
      var p = k[T.Db] ? Qb : b,
        q = c,
        t = d;
      if (!p[a]) {
        h = zc(h);
        var r = yd(a, p, h);
        c = r.I;
        d = r.T;
      }
      return function () {
        p[a](q, t);
      };
    }
    return h;
  }
  function yd(a, b, c) {
    var d = [],
      e = [];
    b[a] = zd(d, e, c);
    return {
      I: function () {
        b[a] = Ad;
        for (var c = 0; c < d.length; c++) d[c]();
      },
      T: function () {
        b[a] = Bd;
        for (var c = 0; c < e.length; c++) e[c]();
      },
    };
  }
  function zd(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Ad(a) {
    a();
  }
  function Bd(a, b) {
    b();
  }
  function Cd(a) {
    var b = 0,
      c = 0,
      d = !1;
    return {
      add: function () {
        c++;
        return zc(function () {
          b++;
          d && b >= c && a();
        });
      },
      zc: function () {
        d = !0;
        b >= c && a();
      },
    };
  }
  function Dd(a, b) {
    if (!hd) return;
    var c = function (a) {
      var d = b.S(Pb[a]) ? "3" : "4",
        f = Zb(Pb[a][T.Eb], b.S, []);
      f && f.length && c(f[0].index);
      vd(b.id, Pb[a], d);
      var h = Zb(Pb[a][T.Fb], b.S, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var Ed = !1;
  var Fd = function (a, b) {
    var c = {};
    c[T.J] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    for (d in void 0) (void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
    Pb.push(c);
    return Pb.length - 1;
  };
  var Gd = /[A-Z]+/,
    Hd = /\s/,
    Id = function (a) {
      if (pc(a) && ((a = a.trim()), !Hd.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Gd.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], ea: d };
          }
        }
      }
    };
  var Jd = null,
    Kd = {},
    Ld = {},
    Md;
  function Nd() {
    Jd = Jd || !ic.gtagRegistered;
    ic.gtagRegistered = !0;
    return Jd;
  }
  var Od = function (a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = y(b, void 0)),
      b.event_callback && (c.eventCallback = b.event_callback),
      b.event_timeout && (c.eventTimeout = b.event_timeout));
    return c;
  };
  function Pd(a) {
    if (void 0 === Ld[a.id]) {
      var b;
      if ("UA" == a.prefix) b = Fd("gtagua", { trackingId: a.id });
      else if ("AW" == a.prefix) b = Fd("gtagaw", { conversionId: a });
      else if ("DC" == a.prefix) b = Fd("gtagfl", { targetId: a.id });
      else if ("GF" == a.prefix) b = Fd("gtaggf", { conversionId: a });
      else if ("G" == a.prefix)
        b = Fd("get", { trackingId: a.id, isAutoTag: !0 });
      else return;
      if (!Md) {
        var c = { name: "send_to", dataLayerVersion: 2 },
          d = {};
        d[T.J] = "__v";
        for (var e in c) c.hasOwnProperty(e) && (d["vtp_" + e] = c[e]);
        Mb.push(d);
        Md = ["macro", Mb.length - 1];
      }
      var f = { arg0: Md, arg1: a.id, ignore_case: !1 };
      f[T.J] = "_lc";
      Ob.push(f);
      var h = { if: [Ob.length - 1], add: [b] };
      h["if"] && (h.add || h.block) && Nb.push(h);
      Ld[a.id] = b;
    }
  }
  var Rd = {
      event: function (a) {
        var b = a[1];
        if (pc(b) && !(3 < a.length)) {
          var c;
          if (2 < a.length) {
            if (!ua(a[2])) return;
            c = a[2];
          }
          var d = Od(b, c);
          var e;
          var f = c,
            h = Dc("gtag.fields.send_to", 2);
          pc(h) || (h = "send_to");
          var k = f && f[h];
          void 0 === k && ((k = Dc(h, 2)), void 0 === k && (k = "default"));
          if (pc(k) || na(k)) {
            for (
              var l,
                m = k.toString().replace(/\s+/g, "").split(","),
                n = [],
                p = 0;
              p < m.length;
              p++
            )
              0 <= m[p].indexOf("-")
                ? n.push(m[p])
                : (n = n.concat(Kd[m[p]] || []));
            l = n;
            for (var q = {}, t = 0; t < l.length; ++t) {
              var r = Id(l[t]);
              r && (q[r.id] = r);
            }
            var w = [],
              E;
            for (E in q)
              if (q.hasOwnProperty(E)) {
                var M = q[E];
                "AW" === M.prefix && M.ea[1] && w.push(M.containerId);
              }
            for (var A = 0; A < w.length; ++A) delete q[w[A]];
            var R = [],
              D;
            for (D in q) q.hasOwnProperty(D) && R.push(q[D]);
            e = R;
          } else e = void 0;
          if (!e) return;
          var O = Nd();
          O || Qd();
          for (var H = [], J = 0; O && J < e.length; J++) {
            var L = e[J];
            H.push(L.id);
            Pd(L);
          }
          d.eventModel = d.eventModel || {};
          0 < e.length
            ? (d.eventModel.send_to = H.join())
            : delete d.eventModel.send_to;
          return d;
        }
      },
      set: function (a) {
        var b;
        2 == a.length && ua(a[1])
          ? (b = y(a[1], void 0))
          : 3 == a.length && pc(a[1]) && ((b = {}), (b[a[1]] = a[2]));
        if (b)
          return (
            (b.eventModel = y(b, void 0)),
            (b.event = "gtag.set"),
            (b._clear = !0),
            b
          );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime)
          return { event: "gtm.js", "gtm.start": a[1].getTime() };
      },
      config: function (a) {
        var b = a[2] || {};
        if (2 > a.length || !pc(a[1]) || !ua(b)) return;
        var c = Id(a[1]);
        if (!c) return;
        Nd() ? Pd(c) : Qd();
        var d = c.id,
          e;
        for (e in Kd)
          if (Kd.hasOwnProperty(e)) {
            var f = oa(Kd[e], d);
            0 <= f && Kd[e].splice(f, 1);
          }
        var h = c.id,
          k = b.groups || "default";
        k = k.toString().split(",");
        for (var l = 0; l < k.length; l++)
          (Kd[k[l]] = Kd[k[l]] || []), Kd[k[l]].push(h);
        delete b.groups;
        Lc("gtag.targets." + c.id, void 0);
        Lc("gtag.targets." + c.id, y(b, void 0));
        return Od("gtag.config", { send_to: c.id });
      },
    },
    Qd = zc(function () {});
  var Sd = !1,
    Zd = [];
  function $d() {
    if (!Sd) {
      Sd = !0;
      for (var a = 0; a < Zd.length; a++) P(Zd[a]);
    }
  }
  var ae = [],
    be = !1,
    ce = function (a) {
      var b = a.eventCallback,
        c = zc(function () {
          oc(b) &&
            P(function () {
              b(hc.m);
            });
        }),
        d = a.eventTimeout;
      d && C.setTimeout(c, Number(d));
      return c;
    },
    de = function () {
      for (var a = !1; !be && 0 < ae.length; ) {
        be = !0;
        delete Bc.eventModel;
        var b = ae.shift();
        if (oc(b))
          try {
            b.call(Ec);
          } catch (Td) {}
        else if (na(b)) {
          var c = b;
          if (pc(c[0])) {
            var d = c[0].split("."),
              e = d.pop(),
              f = c.slice(1),
              h = Dc(d.join("."), 2);
            if (void 0 !== h && null !== h)
              try {
                h[e].apply(h, f);
              } catch (Td) {}
          }
        } else {
          var k = b;
          if (
            k &&
            ("[object Arguments]" == Object.prototype.toString.call(k) ||
              Object.prototype.hasOwnProperty.call(k, "callee"))
          ) {
            a: {
              var l = b;
              if (l.length && pc(l[0])) {
                var m = Rd[l[0]];
                if (m) {
                  b = m(l);
                  break a;
                }
              }
              b = void 0;
            }
            if (!b) {
              be = !1;
              continue;
            }
          }
          var n;
          var p = void 0,
            q = b,
            t = q._clear;
          for (p in q)
            q.hasOwnProperty(p) &&
              "_clear" !== p &&
              (t && Lc(p, void 0), Lc(p, q[p]));
          var r = q.event;
          if (r) {
            var w = q["gtm.uniqueEventId"];
            w ||
              ((w = xc()),
              (q["gtm.uniqueEventId"] = w),
              Lc("gtm.uniqueEventId", w));
            jc = r;
            var E;
            var M,
              A,
              R = q,
              D = R.event,
              O = R["gtm.uniqueEventId"],
              H = ic.zones;
            A = H ? H.checkState(hc.m, O) : Tc;
            if (A.active) {
              var J = ce(R);
              c: {
                var L = A.isWhitelisted;
                if ("gtm.js" == D) {
                  if (Ed) {
                    M = !1;
                    break c;
                  }
                  Ed = !0;
                }
                var W = O,
                  F = D;
                if (hd && !(0 >= rd) && md !== W) {
                  ud();
                  md = W;
                  ld = "";
                  var N = nd,
                    aa = W,
                    ya,
                    za = F;
                  ya = 0 === za.indexOf("gtm.") ? encodeURIComponent(za) : "*";
                  N[aa] = "&e=" + ya + "&eid=" + W;
                  pd || (pd = C.setTimeout(ud, 500));
                }
                var Aa = Qc(L),
                  Qa = { id: O, name: D, Mc: J || nc, S: Aa, Oa: ec(Aa) };
                for (
                  var Ic, Tb = Qa, Vd = Cd(Tb.Mc), Jf = [], Ub = [], lb = 0;
                  lb < Pb.length;
                  lb++
                )
                  if (Tb.Oa[lb]) {
                    var Kf = Pb[lb];
                    var xb = Vd.add();
                    try {
                      var Wd = wd(lb, Jf, xb, xb, xb, Tb);
                      Wd ? Ub.push(Wd) : (Dd(lb, Tb), xb());
                    } catch (Td) {
                      xb();
                    }
                  }
                Vd.zc();
                for (var Jc = 0; Jc < Ub.length; Jc++) Ub[Jc]();
                Ic = 0 < Ub.length;
                if ("gtm.js" === D || "gtm.sync" === D)
                  d: {
                  }
                if (Ic) {
                  for (
                    var Lf = {
                        __cl: !0,
                        __evl: !0,
                        __fsl: !0,
                        __hl: !0,
                        __jel: !0,
                        __lcl: !0,
                        __sdl: !0,
                        __tl: !0,
                        __ytl: !0,
                      },
                      Vb = 0;
                    Vb < Qa.Oa.length;
                    Vb++
                  )
                    if (Qa.Oa[Vb]) {
                      var Yd = Pb[Vb];
                      if (Yd && !Lf[Yd[T.J]]) {
                        M = !0;
                        break c;
                      }
                    }
                  M = !1;
                } else M = Ic;
              }
              E = M ? !0 : !1;
            } else E = !1;
            jc = null;
            n = E;
          } else n = !1;
          a = n || a;
        }
        be = !1;
      }
      return !a;
    },
    ee = function () {
      var a = de();
      try {
        var b = C["dataLayer"].hide;
        if (b && void 0 !== b[hc.m] && b.end) {
          b[hc.m] = !1;
          var c = !0,
            d;
          for (d in b)
            if (b.hasOwnProperty(d) && !0 === b[d]) {
              c = !1;
              break;
            }
          c && (b.end(), (b.end = null));
        }
      } catch (e) {}
      return a;
    },
    fe = function () {
      var a = Ka("dataLayer", []),
        b = Ka("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Wc.push(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Zd.push(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      var c = a.push;
      a.push = function () {
        var b = [].slice.call(arguments, 0);
        c.apply(a, b);
        for (ae.push.apply(ae, b); 300 < this.length; ) this.shift();
        return de();
      };
      ae.push.apply(ae, a.slice(0));
      P(ee);
    };
  var ge = {};
  ge.Aa = new String("undefined");
  ge.Ta = {};
  var he = function (a) {
    this.resolve = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === ge.Aa ? b : a[d]);
      return c.join("");
    };
  };
  he.prototype.toString = function () {
    return this.resolve("undefined");
  };
  he.prototype.valueOf = he.prototype.toString;
  ge.Tc = function (a) {
    return new he(a);
  };
  var ie = {};
  ge.Qd = function (a, b) {
    var c = xc();
    ie[c] = [a, b];
    return c;
  };
  ge.Kb = function (a) {
    var b = a ? 0 : 1;
    return function (a) {
      var c = ie[a];
      if (c && "function" === typeof c[b]) c[b]();
      ie[a] = void 0;
    };
  };
  ge.wd = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  ge.Jd = function (a) {
    if (a === ge.Aa) return a;
    var b = xc();
    ge.Ta[b] = a;
    return 'google_tag_manager["' + hc.m + '"].macro(' + b + ")";
  };
  ge.qc = he;
  var je = new wc(),
    ke = function (a, b) {
      function c(a) {
        var b = S(a),
          c = Q(b, "protocol"),
          d = Q(b, "host", !0),
          e = Q(b, "port"),
          f = Q(b, "path").toLowerCase().replace(/\/$/, "");
        if (
          void 0 === c ||
          ("http" == c && "80" == e) ||
          ("https" == c && "443" == e)
        )
          (c = "web"), (e = "default");
        return [c, d, e, f];
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
        if (d[f] !== e[f]) return !1;
      return !0;
    };
  function le(a) {
    var b = a.arg0,
      c = a.arg1;
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var d;
        a: {
          if (b) {
            var e = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var f = 0; f < e.length; f++)
                if (b[e[f]]) {
                  d = b[e[f]](c);
                  break a;
                }
            } catch (r) {}
          }
          d = !1;
        }
        return d;
      case "_ew":
        var h, k;
        h = String(b);
        k = String(c);
        var l = h.length - k.length;
        return 0 <= l && h.indexOf(k, l) == l;
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var m;
        m = String(b).split(",");
        return 0 <= oa(m, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var n;
        var p = a.ignore_case ? "i" : void 0;
        try {
          var q = String(c) + p,
            t = je.get(q);
          t || ((t = new RegExp(c, p)), je.set(q, t));
          n = t.test(b);
        } catch (r) {
          n = !1;
        }
        return n;
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return ke(b, c);
    }
    return !1;
  }
  function me(a, b, c, d) {
    return (d || "https:" == C.location.protocol ? a : b) + c;
  }
  function ne(a, b) {
    for (
      var c = b || (a instanceof u ? new u() : new x()), d = a.N(), e = 0;
      e < d.length();
      e++
    ) {
      var f = d.get(e);
      if (a.has(f)) {
        var h = a.get(f);
        h instanceof u
          ? (c.get(f) instanceof u || c.set(f, new u()), ne(h, c.get(f)))
          : h instanceof x
          ? (c.get(f) instanceof x || c.set(f, new x()), ne(h, c.get(f)))
          : c.set(f, h);
      }
    }
    return c;
  }
  function oe() {
    return hc.m;
  }
  function pe() {
    return new Date().getTime();
  }
  function qe(a, b) {
    return wa(Dc(a, b || 2));
  }
  function re() {
    return jc;
  }
  function se(a) {
    return Ta('<a href="' + a + '"></a>')[0].href;
  }
  function te(a) {
    return rc(va(a));
  }
  function ue(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  }
  function ve(a, b) {
    return vc(a, b);
  }
  function we(a, b, c) {
    if (!(a instanceof u)) return null;
    for (var d = new x(), e = !1, f = 0; f < a.length(); f++) {
      var h = a.get(f);
      h instanceof x &&
        h.has(b) &&
        h.has(c) &&
        (d.set(h.get(b), h.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var xe = function () {
    var a = new Ia();
    a.addAll(Wa());
    a.addAll({
      buildSafeUrl: me,
      decodeHtmlUrl: se,
      copy: ne,
      generateUniqueNumber: xc,
      getContainerId: oe,
      getCurrentTime: pe,
      getDataLayerValue: qe,
      getEventName: re,
      makeInteger: te,
      makeString: ue,
      randomInteger: ve,
      tableToMap: we,
    });
    return function (b) {
      return a.get(b);
    };
  };
  var ye = new Ya(),
    ze = function () {
      var a = data.runtime || [];
      Lb = function (a, b) {
        var c = new x(),
          d;
        for (d in b) b.hasOwnProperty(d) && c.set(d, wa(b[d]));
        var e = ye.L([a, c]);
        e instanceof g && "return" === e.s && (e = e.getData());
        return va(e);
      };
      Sb = le;
      Xa(ye, xe());
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (!na(c) || 3 > c.length) {
          if (0 == c.length) continue;
          break;
        }
        ye.L(c);
      }
    };
  var Ae = function (a, b) {
    var c = function () {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  };
  var Be = function (a) {
      return encodeURIComponent(a);
    },
    Ce = function (a) {
      var b = ["veinteractive.com", "ve-interactive.cn"];
      if (!a) return !1;
      var c = Q(S(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    };
  var U = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    },
    De = function (a, b) {
      y(a, b);
    },
    Ee = function (a) {
      return rc(a);
    },
    Fe = function (a, b) {
      return oa(a, b);
    };
  var Ge = function (a) {
      var b = {
        "gtm.element": a,
        "gtm.elementClasses": a.className,
        "gtm.elementId": a["for"] || Pa(a, "id") || "",
        "gtm.elementTarget": a.formTarget || a.target || "",
      };
      b["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        a.href ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return b;
    },
    He = function (a) {
      ic.hasOwnProperty("autoEventsSettings") || (ic.autoEventsSettings = {});
      var b = ic.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Ie = function (a, b, c, d) {
      var e = He(a),
        f = yc(e, b, d);
      e[b] = c(f);
    },
    Je = function (a, b, c) {
      var d = He(a);
      return yc(d, b, c);
    };
  var Ke = /(^|\.)doubleclick\.net$/i,
    Le = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Me = function (a, b, c) {
      for (
        var d = String(b || G.cookie).split(";"), e = [], f = 0;
        f < d.length;
        f++
      ) {
        var h = d[f].split("="),
          k = uc(h[0]);
        if (k && k == a) {
          var l = uc(h.slice(1).join("="));
          l && !1 !== c && (l = decodeURIComponent(l));
          e.push(l);
        }
      }
      return e;
    },
    Ne = function (a, b, c, d, e, f) {
      f && (b = encodeURIComponent(b));
      var h = a + "=" + b + "; ";
      c && (h += "path=" + c + "; ");
      e && (h += "expires=" + e.toGMTString() + "; ");
      var k, l;
      if ("auto" == d) {
        var m = Q(C.location, "host", !0).split(".");
        if (4 == m.length && /^[0-9]*$/.exec(m[3])) l = ["none"];
        else {
          for (var n = [], p = m.length - 2; 0 <= p; p--)
            n.push(m.slice(p).join("."));
          n.push("none");
          l = n;
        }
      } else l = [d || "none"];
      k = l;
      for (var q = G.cookie, t = 0; t < k.length; t++) {
        var r = h,
          w = k[t],
          E = c;
        if (Ke.test(C.location.hostname) || ("/" == E && Le.test(w))) break;
        "none" != k[t] && (r += "domain=" + k[t] + ";");
        G.cookie = r;
        if (q != G.cookie || 0 <= oa(Me(a), b)) break;
      }
    };
  var Oe = !1;
  if (G.querySelectorAll)
    try {
      var Pe = G.querySelectorAll(":root");
      Pe && 1 == Pe.length && Pe[0] == G.documentElement && (Oe = !0);
    } catch (a) {}
  var Qe = Oe;
  var Re = function (a) {
      for (
        var b = [],
          c = document.cookie.split(";"),
          d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"),
          e = 0;
        e < c.length;
        e++
      ) {
        var f = c[e].match(d);
        f && b.push(f[1]);
      }
      return b;
    },
    Ue = function (a, b, c) {
      var d = Se(a);
      if (1 === d.length) return d[0].id;
      if (0 !== d.length) {
        d = Te(
          d,
          function (a) {
            return a.ad;
          },
          b
        );
        if (1 === d.length) return d[0].id;
        d = Te(
          d,
          function (a) {
            return a.Hd;
          },
          c
        );
        return d[0] ? d[0].id : void 0;
      }
    },
    Xe = function (a, b, c, d, e) {
      c = void 0 === c ? "/" : c;
      var f = (d = void 0 === d ? "auto" : d),
        h = c;
      if (Ve.test(document.location.hostname) || ("/" === h && We.test(f)))
        return !1;
      var k = b;
      k && 1200 < k.length && (k = k.substring(0, 1200));
      b = k;
      var l = a + "=" + b + "; path=" + c + "; ";
      void 0 !== e &&
        (l +=
          "expires=" + new Date(new Date().getTime() + e).toGMTString() + "; ");
      if ("auto" === d) {
        var m = !1,
          n;
        a: {
          var p = [],
            q = document.location.hostname.split(".");
          if (4 === q.length) {
            var t = q[q.length - 1];
            if (parseInt(t, 10).toString() === t) {
              n = ["none"];
              break a;
            }
          }
          for (var r = q.length - 2; 0 <= r; r--) p.push(q.slice(r).join("."));
          p.push("none");
          n = p;
        }
        for (var w = n, E = 0; E < w.length && !m; E++)
          m = Xe(a, b, c, w[E], e);
        return m;
      }
      d && "none" !== d && (l += "domain=" + d + ";");
      var M = document.cookie;
      document.cookie = l;
      return M != document.cookie || 0 <= Re(a).indexOf(b);
    };
  function Te(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Se(a) {
    for (var b = Ye, c = [], d = Re(a), e = 0; e < d.length; e++) {
      var f = d[e].split("."),
        h = f.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = f.shift();
        k &&
          ((k = k.split("-")),
          c.push({ id: f.join("."), ad: 1 * k[0] || 1, Hd: 1 * k[1] || 1 }));
      }
    }
    return c;
  }
  var We = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ve = /(^|\.)doubleclick\.net$/i;
  var Ze = window,
    $e = document;
  function af(a) {
    if (!a) return 1;
    a = 0 === a.indexOf(".") ? a.substr(1) : a;
    return a.split(".").length;
  }
  function bf(a) {
    if (!a || "/" === a) return 1;
    "/" !== a[0] && (a = "/" + a);
    "/" !== a[a.length - 1] && (a += "/");
    return a.split("/").length - 1;
  }
  var Ye = ["1"],
    cf = {},
    df = function (a) {
      return cf[(void 0 === a ? "_gcl" : a) + "_dcu"];
    },
    ff = function (a, b, c) {
      b = void 0 === b ? "auto" : b;
      c = void 0 === c ? "/" : c;
      var d,
        e = void 0 === a ? "_gcl" : a;
      d = (void 0 === e ? "_gcl" : e) + "_dcu";
      if (!cf[d] && !ef(d, b, c)) {
        for (
          var f,
            h =
              Ze.navigator.userAgent + ($e.cookie || "") + ($e.referrer || ""),
            k = h.length,
            l = Ze.history.length;
          0 < l;

        )
          h += l-- ^ k++;
        var m = 1,
          n,
          p,
          q;
        if (h)
          for (m = 0, p = h.length - 1; 0 <= p; p--)
            (q = h.charCodeAt(p)),
              (m = ((m << 6) & 268435455) + q + (q << 14)),
              (n = m & 266338304),
              (m = 0 != n ? m ^ (n >> 21) : m);
        var t = [
            Math.round(2147483647 * Math.random()) ^ (m & 2147483647),
            Math.round(Date.now() / 1e3),
          ].join("."),
          r = "" + af(void 0),
          w = bf(void 0);
        1 < w && (r += "-" + w);
        f = ["1", r, t].join(".");
        Xe(d, f, c, b, 7776e6);
        ef(d, b, c);
      }
    };
  function ef(a, b, c) {
    var d,
      e = af(b);
    (d = Ue(a, e, bf(c))) && (cf[a] = d);
    return d;
  }
  var gf = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f && b.push(f[1]);
    }
    var h = [];
    if (!b || 0 == b.length) return h;
    for (var k = 0; k < b.length; k++) {
      var l = b[k].split(".");
      3 == l.length && "GCL" == l[0] && l[1] && h.push(l[2]);
    }
    return h;
  };
  var hf = /^\w+$/,
    jf = /^[\w-]+$/,
    kf = /^\d+\.fls\.doubleclick\.net$/;
  function lf(a) {
    return a && "string" == typeof a && a.match(hf) ? a : "_gcl";
  }
  function mf(a) {
    if (a) {
      if ("string" == typeof a) {
        var b = lf(a);
        return { na: b, ma: b };
      }
      if (a && "object" == typeof a) return { na: lf(a.dc), ma: lf(a.aw) };
    }
    return { na: "_gcl", ma: "_gcl" };
  }
  function nf(a) {
    var b = S(C.location.href),
      c = Q(b, "host", !1);
    if (c && c.match(kf)) {
      var d = Q(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function of(a) {
    return a.filter(function (a) {
      return jf.test(a);
    });
  }
  var qf = function (a) {
      var b = nf("gclaw");
      if (b) return b.split(".");
      var c = mf(a);
      if ("_gcl" == c.ma) {
        var d = pf();
        if (d && (null == d.H || "aw.ds" == d.H)) return [d.da];
      }
      return of(gf(c.ma + "_aw"));
    },
    rf = function (a) {
      var b = nf("gcldc");
      if (b) return b.split(".");
      var c = mf(a);
      if ("_gcl" == c.na) {
        var d = pf();
        if (d && ("ds" == d.H || "aw.ds" == d.H)) return [d.da];
      }
      return of(gf(c.na + "_dc"));
    };
  function pf() {
    var a = S(C.location.href),
      b = Q(a, "query", !1, void 0, "gclid"),
      c = Q(a, "query", !1, void 0, "gclsrc");
    if (!b || !c) {
      var d = Q(a, "fragment");
      b = b || Ua(d, "gclid");
      c = c || Ua(d, "gclsrc");
    }
    return void 0 !== b && b.match(jf) ? { da: b, H: c } : null;
  }
  var sf = function (a, b, c) {
      var d = mf(a);
      c = c || "auto";
      b = b || "/";
      var e = pf();
      if (null != e) {
        var f = new Date().getTime(),
          h = new Date(f + 7776e6),
          k = ["GCL", Math.round(f / 1e3), e.da].join(".");
        (e.H && "aw.ds" != e.H) || Ne(d.ma + "_aw", k, b, c, h, !0);
        ("aw.ds" != e.H && "ds" != e.H) || Ne(d.na + "_dc", k, b, c, h, !0);
      }
    },
    tf = function () {
      var a = nf("gac");
      if (a) return decodeURIComponent(a);
      for (
        var b = [],
          c = G.cookie.split(";"),
          d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
          e = 0;
        e < c.length;
        e++
      ) {
        var f = c[e].match(d);
        f && b.push({ qb: f[1], value: f[2] });
      }
      var h = {};
      if (b && b.length)
        for (var k = 0; k < b.length; k++) {
          var l = b[k].value.split(".");
          "1" == l[0] &&
            3 == l.length &&
            l[1] &&
            (h[b[k].qb] || (h[b[k].qb] = []),
            h[b[k].qb].push({ timestamp: l[1], da: l[2] }));
        }
      var m = [],
        n;
      for (n in h)
        if (h.hasOwnProperty(n)) {
          for (var p = [], q = h[n], t = 0; t < q.length; t++) p.push(q[t].da);
          p = of(p);
          p.length && m.push(n + ":" + p.join(","));
        }
      return m.join(";");
    },
    uf = function (a, b, c) {};
  var vf;
  a: {
    vf = "g";
    break a;
    vf = "G";
  }
  var wf = { "": "n", UA: "u", AW: "a", DC: "d", GTM: vf },
    xf = function (a) {
      var b = hc.m.split("-"),
        c = b[0].toUpperCase();
      return (wf[c] || "i") + "6c" + (a && "GTM" === c ? b[1] : "");
    };
  var yf = function (a) {
      return !(void 0 === a || null === a || 0 === (a + "").length);
    },
    zf = function (a, b) {
      var c;
      if (2 === b.B) return a("ord", vc(1e11, 1e13)), !0;
      if (3 === b.B) return a("ord", "1"), a("num", vc(1e11, 1e13)), !0;
      if (4 === b.B) return yf(b.sessionId) && a("ord", b.sessionId), !0;
      if (5 === b.B) c = "1";
      else if (6 === b.B) c = b.cc;
      else return !1;
      yf(c) && a("qty", c);
      yf(b.Xa) && a("cost", b.Xa);
      yf(b.rb) && a("ord", b.rb);
      return !0;
    },
    Af = encodeURIComponent,
    Bf = function (a, b) {
      function c(a, b, c) {
        f.hasOwnProperty(a) ||
          ((b += ""), (e += ";" + a + "=" + (c ? b : Af(b))));
      }
      var d = a.$a,
        e = a.protocol;
      e += a.Pa
        ? "//" + d + ".fls.doubleclick.net/activityi"
        : "//ad.doubleclick.net/activity";
      e += ";src=" + Af(d) + (";type=" + Af(a.ab)) + (";cat=" + Af(a.la));
      var f = a.Vc || {},
        h;
      for (h in f)
        f.hasOwnProperty(h) && (e += ";" + Af(h) + "=" + Af(f[h] + ""));
      if (zf(c, a)) {
        yf(a.tb) && c("u", a.tb);
        yf(a.tran) && c("tran", a.tran);
        c("gtm", xf());
        if (a.Wa) {
          var k = rf(a.ba);
          k && k.length && c("gcldc", k.join("."));
          var l = qf(a.ba);
          l && l.length && c("gclaw", l.join("."));
          var m = tf();
          m && c("gac", m);
        }
        yf(a.jb) && c("prd", a.jb, !0);
        for (var p in a.xa) a.xa.hasOwnProperty(p) && c(p, a.xa[p]);
        e += b || "";
        yf(a.La) && c("~oref", a.La);
        a.Pa ? Ma(e + "?", a.I) : K(e + "?", a.I, a.T);
      } else P(a.T);
    };
  var Cf = function (a) {
    return null === a || void 0 === a || 0 === String(a).length
      ? ""
      : encodeURIComponent(String(a));
  };
  var Df = !!C.MutationObserver,
    Ef = void 0,
    Ff = function (a) {
      if (!Ef) {
        var b = function () {
          var a = G.body;
          if (a)
            if (Df)
              new MutationObserver(function () {
                for (var a = 0; a < Ef.length; a++) P(Ef[a]);
              }).observe(a, { childList: !0, subtree: !0 });
            else {
              var b = !1;
              Na(a, "DOMNodeInserted", function () {
                b ||
                  ((b = !0),
                  P(function () {
                    b = !1;
                    for (var a = 0; a < Ef.length; a++) P(Ef[a]);
                  }));
              });
            }
        };
        Ef = [];
        G.body ? b() : P(b);
      }
      Ef.push(a);
    };
  var Tf = "www.googletagmanager.com/gtm.js";
  Tf = "www.googletagmanager.com/gtag/js";
  var Uf = Tf,
    Vf = function (a, b, c, d) {
      Na(a, b, c, d);
    },
    Wf = function (a, b) {
      return C.setTimeout(a, b);
    },
    Xf = function (a, b, c) {
      I(a, b, c);
    },
    Yf = {},
    Zf = function (a, b, c) {
      var d = Yf[a];
      if (void 0 === d) {
        var e = function (a, b) {
          return function () {
            a.status = b;
            for (var c = 2 == b ? a.hc : a.Nb, d = 0; d < c.length; d++)
              C.setTimeout(c[d], 0);
          };
        };
        d = { status: 1, hc: [], Nb: [], Vd: void 0 };
        d.Ee = I(a, e(d, 2), e(d, 3));
        Yf[a] = d;
      }
      0 === d.status && (d.Vd(), (d.status = 2));
      2 === d.status
        ? b && b()
        : 3 === d.status
        ? c && c()
        : 1 === d.status && (b && d.hc.push(b), c && d.Nb.push(c));
    },
    $f = function () {
      return C.location.href;
    },
    ag = function (a) {
      return Q(S(a), "fragment");
    },
    V = function (a, b) {
      return Dc(a, b || 2);
    },
    bg = function (a, b, c) {
      b && ((a.eventCallback = b), c && (a.eventTimeout = c));
      return C["dataLayer"].push(a);
    },
    cg = function (a, b) {
      C[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === C[a] || (c && !C[a])) && (C[a] = b);
      return C[a];
    },
    dg = function (a, b) {
      var c;
      a: {
        var d;
        d = 100;
        for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
        for (var h = a, k = 0; h && k <= d; k++) {
          if (e[String(h.tagName).toLowerCase()]) {
            c = h;
            break a;
          }
          h = h.parentElement;
        }
        c = null;
      }
      return c;
    },
    Y = function (a, b, c, d) {
      var e = !d && "http:" == C.location.protocol;
      e && (e = 2 !== eg());
      return (e ? b : a) + c;
    };
  var fg = function (a) {
      var b = 0;
      return b;
    },
    gg = function (a) {},
    hg = function (a) {
      var b = !1;
      return b;
    },
    ig = function (a, b) {
      var c;
      a: {
        if (a && na(a))
          for (var d = 0; d < a.length; d++)
            if (a[d] && b(a[d])) {
              c = a[d];
              break a;
            }
        c = void 0;
      }
      return c;
    },
    jg = function (a, b, c, d) {
      Ie(a, b, c, d);
    },
    kg = function (a, b, c) {
      return Je(a, b, c);
    },
    lg = function (a) {
      return !!Je(a, "init", !1);
    },
    mg = function (a) {
      He(a).init = !0;
    };
  var eg = function () {
    var a = Uf;
    a = a.toLowerCase();
    for (
      var b = "https://" + a,
        c = "http://" + a,
        d = 1,
        e = G.getElementsByTagName("script"),
        f = 0;
      f < e.length && 100 > f;
      f++
    ) {
      var h = e[f].src;
      if (h) {
        h = h.toLowerCase();
        if (0 === h.indexOf(c)) return 3;
        1 === d && 0 === h.indexOf(b) && (d = 2);
      }
    }
    return d;
  };
  var og = function (a, b) {
    return Fc(a, b, void 0);
  };
  var pg = function (a, b) {
    var c = Uf + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
    if (b)
      for (var d in b)
        b[d] &&
          b.hasOwnProperty(d) &&
          (c += "&" + d + "=" + encodeURIComponent(b[d]));
    var e = Y("https://", "http://", c);
    I(e, void 0, void 0);
  };
  var rg = function (a, b, c) {
    a instanceof ge.qc && ((a = a.resolve(ge.Qd(b, c))), (b = nc));
    return { cb: a, I: b };
  };
  var sg = function (a, b) {
      var c = new Date().getTime();
      this.n = a;
      this.t = c;
      this.p = b;
    },
    tg = function () {
      this.c = 1;
      this.e = [];
      this.p = null;
    };
  function ug(a) {
    var b = ic,
      c = (b.gss = b.gss || {});
    return (c[a] = c[a] || new tg());
  }
  var vg = function (a, b) {
      ug(a).p = b;
    },
    wg = function (a) {};
  var Fg = function (a) {
      if (1 === ug(a).c) {
        ug(a).c = 2;
        var b = encodeURIComponent(a);
        I(
          ("http:" != C.location.protocol ? "https:" : "http:") +
            ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c")
        );
      }
    },
    Gg = function (a, b) {};
  var Z = { a: {} };
  (Z.a.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.b = "e";
        Z.__e.g = !0;
      })(function () {
        return jc;
      });
    })();

  (Z.a.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.b = "v";
        Z.__v.g = !0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = V(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Z.a.gtagaw = ["google"]),
    (function () {
      var a = !1,
        b = !1,
        c = [],
        d =
          "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases".split(
            " "
          ),
        e = function (a) {
          var b = X("google_trackConversion"),
            c = a.gtm_onFailure;
          "function" == typeof b ? b(a) || c() : c();
        },
        f = function () {
          for (; 0 < c.length; ) e(c.shift());
        },
        h = function () {
          a ||
            ((a = !0),
            Xf(
              Y(
                "https://",
                "http://",
                "www.googleadservices.com/pagead/conversion_async.js"
              ),
              function () {
                f();
                c = { push: e };
              },
              function () {
                f();
                a = !1;
              }
            ));
        },
        k = function (a, c, d, e) {
          if (c) {
            var f = a.ea[0],
              h = a.ea[1],
              k = X("_googWcmImpl", function () {
                k.q = k.q || [];
                k.q.push(arguments);
              });
            X("_googWcmAk", f);
            b ||
              ((b = !0),
              Xf(Y("https://", "http://", "www.gstatic.com/wcm/loader.js")));
            var l = { ak: f, cl: h };
            void 0 === d && (l.autoreplace = c);
            k(2, d, l, c, e, new Date(), e);
          }
        },
        l = function (a) {
          if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
              var d = a[c];
              d &&
                b.push({ item_id: d.id, quantity: d.quantity, value: d.price });
            }
            return b;
          }
        };
      (function (a) {
        Z.__gtagaw = a;
        Z.__gtagaw.b = "gtagaw";
        Z.__gtagaw.g = !0;
      })(function (a) {
        var b = a.vtp_conversionId,
          e = jc,
          f = "gtag.config" == e,
          m = b.ea[0],
          r = b.ea[1],
          w = void 0 !== r,
          E = b.containerId,
          M = w ? b.id : void 0,
          A = function (a) {
            return Fc(a, E, M);
          },
          R = !1 !== A("conversion_linker"),
          D = A("conversion_cookie_prefix");
        f && R && sf(D, void 0, void 0);
        if (f && w) {
          var O = A("phone_conversion_number"),
            H = A("phone_conversion_callback"),
            J = A("phone_conversion_css_class"),
            L = A("phone_conversion_options");
          k(b, O, H || J, L);
        }
        var W = !1 === A("aw_remarketing") || !1 === A("send_page_view");
        if (!f || (!w && !W)) {
          !0 === A("aw_remarketing_only") && (w = !1);
          var F = {
            google_conversion_id: m,
            google_remarketing_only: !w,
            onload_callback: a.vtp_gtmOnSuccess,
            gtm_onFailure: a.vtp_gtmOnFailure,
            google_conversion_format: "3",
            google_conversion_color: "ffffff",
            google_conversion_domain: "",
            google_conversion_label: r,
            google_conversion_language: A("language"),
            google_conversion_value: A("value"),
            google_conversion_currency: A("currency"),
            google_conversion_order_id: A("transaction_id"),
            google_user_id: A("user_id"),
            google_conversion_page_url: A("page_location"),
            google_conversion_referrer_url: A("page_referrer"),
            google_gtm: xf(void 0),
            google_read_gcl_cookie_opt_out: !R,
          };
          R &&
            D &&
            (ua(D)
              ? (F.google_gcl_cookie_prefix = D.aw)
              : (F.google_gcl_cookie_prefix = D));
          var N = (function () {
            var a = A("custom_params"),
              b = { event: e };
            if (na(a)) {
              for (var c = 0; c < a.length; ++c) {
                var f = a[c],
                  h = A(f);
                void 0 !== h && (b[f] = h);
              }
              return b;
            }
            var k = A("eventModel");
            if (!k) return null;
            y(k, b);
            for (var l = 0; l < d.length; ++l) delete b[d[l]];
            return b;
          })();
          N && (F.google_custom_params = N);
          if (w && "purchase" == e && A("aw_merchant_id")) {
            F.google_conversion_merchant_id = A("aw_merchant_id");
            F.google_basket_feed_country = A("aw_feed_country");
            F.google_basket_feed_language = A("aw_feed_language");
            F.google_basket_discount = A("discount");
            F.google_basket_transaction_type = e;
            F.google_disable_merchant_reported_conversions =
              !0 === A("disable_merchant_reported_purchases");
            var aa = l(A("items"));
            aa && (F.google_conversion_items = aa);
          }
          c.push(F);
        }
        h();
      });
    })();

  (Z.a.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.b = "get";
        Z.__get.g = !0;
      })(function (a) {
        if (a.vtp_isAutoTag) {
          var b = String(a.vtp_trackingId),
            c = jc || "",
            d = {},
            e = Fc("eventModel", b, void 0);
          y(e, d);
          Fg(b);
          ug(b).e.push(new sg(c, d));
          wg(b);
        } else {
          var f = a.vtp_settings,
            h = f.eventParameters,
            k = f.userProperties,
            l = U(a.vtp_eventParameters, "name", "value");
          y(l, h);
          var m = U(a.vtp_userProperties, "name", "value");
          y(m, k);
          h.user_properties = k;
          var n = String(f.streamId),
            p = String(a.vtp_eventName);
          Fg(n);
          ug(n).e.push(new sg(p, h));
          wg(n);
        }
        a.vtp_gtmOnSuccess();
      });
    })();

  (Z.a.gtagfl = []),
    (function () {
      function a(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
          var c = {
            standard: 2,
            unique: 3,
            per_session: 4,
            transactions: 5,
            items_sold: 6,
            "": 1,
          }[(b[5] || "").toLowerCase()];
          if (c)
            return {
              containerId: "DC-" + b[1],
              ic: b[3] ? a : "",
              uc: b[1],
              sc: b[3] || "",
              la: b[4] || "",
              B: c,
            };
        }
      }
      function b(a, b) {
        function c(b, c, e) {
          void 0 !== e &&
            0 !== (e + "").length &&
            d.push(b + c + ":" + a(e + ""));
        }
        var d = [],
          e = b("items") || [];
        if (na(e))
          for (var l = 0; l < e.length; l++) {
            var m = e[l],
              n = l + 1;
            c("i", n, m.id);
            c("p", n, m.price);
            c("q", n, m.quantity);
            c("c", n, b("country"));
            c("l", n, b("language"));
          }
        return d.join("|");
      }
      function c(a, b, c) {
        var d = /^u([1-9]\d?|100)$/,
          e = a("custom_map") || {},
          f = Kc(b, c),
          m = {},
          n = {};
        if (ua(e))
          for (var p in e)
            if (e.hasOwnProperty(p) && d.test(p)) {
              var q = e[p];
              pc(q) && (m[p] = q);
            }
        for (var t = 0; t < f.length; t++) {
          var r = f[t];
          d.test(r) && (m[r] = r);
        }
        for (var w in m) m.hasOwnProperty(w) && (n[w] = a(m[w]));
        return n;
      }
      (function (a) {
        Z.__gtagfl = a;
        Z.__gtagfl.b = "gtagfl";
        Z.__gtagfl.g = !0;
      })(function (d) {
        var e = d.vtp_gtmOnSuccess,
          f = d.vtp_gtmOnFailure,
          h = a(d.vtp_targetId);
        if (h) {
          var k = function (a) {
              return Fc(a, h.containerId, h.ic || void 0);
            },
            l = !1 !== k("conversion_linker"),
            m = k("conversion_cookie_prefix");
          if ("gtag.config" === jc)
            l && (sf(m, void 0, void 0), uf(m, void 0, void 0)), P(e);
          else {
            var n = {},
              p = k("dc_custom_params");
            if (ua(p))
              for (var q in p)
                if (p.hasOwnProperty(q)) {
                  var t = p[q];
                  void 0 !== t && null !== t && (n[q] = t);
                }
            var r = "";
            if (5 === h.B || 6 === h.B) r = b(Be, k);
            var w = c(k, h.containerId, h.ic),
              E = 3 === eg(),
              M = !0 === k("allow_custom_scripts"),
              A = {
                la: h.la,
                Wa: l,
                ba: m,
                Xa: k("value"),
                B: h.B,
                Vc: n,
                $a: h.uc,
                ab: h.sc,
                T: f,
                I: e,
                La: Va(S($f())),
                jb: r,
                protocol: E ? "http:" : "https:",
                cc: k("quantity"),
                Pa: M,
                sessionId: k("session_id"),
                rb: k("transaction_id"),
                xa: w,
              };
            Bf(A, void 0);
          }
        } else P(f);
      });
    })();
  (Z.a.gtaggf = ["google"]),
    (function () {
      var a = function (a) {
        if (a) {
          for (var b = [], d = 0, e = 0; e < a.length; ++e) {
            var f = a[e];
            f &&
              "FlightSegment" === f.category &&
              ((b[d] = {
                cabin: f.cabin,
                fare_product: f.fare_product,
                booking_code: f.booking_code,
                flight_number: f.flight_number,
                origin: f.origin,
                destination: f.destination,
                departure_date_time: f.start_date,
              }),
              d++);
          }
          return b;
        }
      };
      (function (a) {
        Z.__gtaggf = a;
        Z.__gtaggf.b = "gtaggf";
        Z.__gtaggf.g = !0;
      })(function (b) {
        var c = jc,
          d = b.vtp_gtmOnSuccess,
          e = b.vtp_gtmOnFailure,
          f = function (a) {
            return Fc(a, k, h.id);
          };
        if ("gtag.config" === c) P(d);
        else {
          var h = b.vtp_conversionId,
            k = h.containerId,
            l = { conversion_id: h.ea[0], onFailure: e, onSuccess: d };
          if ("purchase" === c) {
            var m = {
                partner_id: f("client_id"),
                trip_type: f("trip_type"),
                total_price: f("value"),
                currency: f("currency"),
                flight_segment: a(f("items")),
              },
              n = f("passengers");
            n &&
              "object" === typeof n &&
              ((m.passengers_total = n.total),
              (m.passengers_adult = n.adult),
              (m.passengers_child = n.child),
              (m.passengers_infant_in_seat = n.infant_in_seat),
              (m.passengers_infant_on_lap = n.infant_on_lap),
              (m.passengers_senior = n.senior));
            l.conversion_data = m;
          }
          if (l)
            try {
              l.conversion_id &&
                l.conversion_data &&
                K(
                  "https://www.googletraveladservices.com/travel/flights/clk" +
                    ("/pagead/conversion/" + Cf(l.conversion_id) + "/?") +
                    "&conversion_data=" +
                    Cf(JSON.stringify(l.conversion_data)),
                  l.I,
                  l.T
                );
            } catch (p) {}
        }
      });
    })();

  (Z.a.gtagua = ["google"]),
    (function () {
      var a,
        b = {
          client_id: 1,
          client_storage: "storage",
          cookie_name: 1,
          cookie_domain: 1,
          cookie_expires: 1,
          cookie_path: 1,
          cookie_update: 1,
          sample_rate: 1,
          site_speed_sample_rate: 1,
          use_amp_client_id: 1,
          store_gac: 1,
          conversion_linker: "storeGac",
        },
        c = {
          anonymize_ip: 1,
          app_id: 1,
          app_installer_id: 1,
          app_name: 1,
          app_version: 1,
          campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignTerm",
            content: "campaignContent",
            id: "campaignId",
          },
          currency: "currencyCode",
          description: "exDescription",
          fatal: "exFatal",
          language: 1,
          non_interaction: 1,
          page_hostname: "hostname",
          page_referrer: "referrer",
          page_path: "page",
          page_location: "location",
          page_title: "title",
          screen_name: 1,
          transport_type: "transport",
          user_id: 1,
        },
        d = {
          content_id: 1,
          event_category: 1,
          event_action: 1,
          event_label: 1,
          link_attribution: 1,
          linker: 1,
          method: 1,
          name: 1,
          send_page_view: 1,
          value: 1,
        },
        e = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
        f = {
          anonymize_ip: 1,
          fatal: 1,
          non_interaction: 1,
          use_amp_client_id: 1,
          send_page_view: 1,
          store_gac: 1,
          conversion_linker: 1,
        },
        h = function (a, b, c, d) {
          if (void 0 !== c)
            if (
              (f[b] && (c = sc(c)),
              "anonymize_ip" != b || c || (c = void 0),
              1 === a)
            )
              d[k(b)] = c;
            else if (pc(a)) d[a] = c;
            else
              for (var e in a)
                a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        k = function (a) {
          return a && pc(a)
            ? a.replace(/(_[a-z])/g, function (a) {
                return a[1].toUpperCase();
              })
            : a;
        },
        l = function (a, b, c) {
          a.hasOwnProperty(b) || (a[b] = c);
        },
        m = function (a, e, f) {
          var k = {},
            m = {},
            n = {},
            p = og("custom_map", a);
          if (ua(p))
            for (var q in p)
              if (p.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q)) {
                var r = og(p[q], a);
                void 0 !== r && l(m, q, r);
              }
          for (var t = Kc(a, void 0), w = 0; w < t.length; ++w) {
            var L = t[w],
              W = og(L, a);
            d.hasOwnProperty(L)
              ? h(d[L], L, W, k)
              : c.hasOwnProperty(L)
              ? h(c[L], L, W, m)
              : b.hasOwnProperty(L)
              ? h(b[L], L, W, n)
              : /^(dimension|metric|content_group)\d+$/.test(L) &&
                h(1, L, W, m);
          }
          var F = String(jc);
          l(n, "cookieDomain", "auto");
          l(m, "forceSSL", !0);
          var N = "general";
          0 <=
          Fe(
            "add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(
              " "
            ),
            F
          )
            ? (N = "ecommerce")
            : 0 <=
              Fe(
                "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
                  " "
                ),
                F
              )
            ? (N = "engagement")
            : "exception" == F && (N = "error");
          l(k, "eventCategory", N);
          0 <=
            Fe(
              [
                "view_item",
                "view_item_list",
                "view_promotion",
                "view_search_results",
              ],
              F
            ) && l(m, "nonInteraction", !0);
          "login" == F || "sign_up" == F || "share" == F
            ? l(k, "eventLabel", og("method", a))
            : "search" == F || "view_search_results" == F
            ? l(k, "eventLabel", og("search_term", a))
            : "select_content" == F &&
              l(k, "eventLabel", og("content_type", a));
          var aa = k.linker || {};
          if (aa.accept_incoming || (0 != aa.accept_incoming && aa.domains))
            n.allowLinker = !0;
          !1 === og("allow_display_features", a) &&
            (m.displayFeaturesTask = null);
          n.name = e;
          m["&gtm"] = xf(!0);
          m.hitCallback = f;
          k.M = m;
          k.Lb = n;
          return k;
        },
        n = function (a) {
          function b(a) {
            var b = y(a, void 0);
            b.list = a.list_name;
            b.listPosition = a.list_position;
            b.position = a.list_position || a.creative_slot;
            b.creative = a.creative_name;
            return b;
          }
          function c(a) {
            for (var c = [], d = 0; a && d < a.length; d++)
              a[d] && c.push(b(a[d]));
            return c.length ? c : void 0;
          }
          function d(a) {
            return {
              id: e("transaction_id"),
              affiliation: e("affiliation"),
              revenue: e("value"),
              tax: e("tax"),
              shipping: e("shipping"),
              coupon: e("coupon"),
              list: e("list_name") || a,
            };
          }
          for (
            var e = function (b) {
                return Fc(b, a, void 0);
              },
              f = e("items"),
              h,
              k = 0;
            f && k < f.length && !(h = f[k].list_name);
            k++
          );
          var m = e("custom_map");
          if (ua(m))
            for (k = 0; f && k < f.length; ++k) {
              var n = f[k],
                p;
              for (p in m)
                m.hasOwnProperty(p) &&
                  /^(dimension|metric)\d+$/.test(p) &&
                  l(n, p, n[m[p]]);
            }
          var q = null,
            t = jc,
            F = e("promotions");
          "purchase" == t || "refund" == t
            ? (q = { action: t, ka: d(), ha: c(f) })
            : "add_to_cart" == t
            ? (q = { action: "add", ha: c(f) })
            : "remove_from_cart" == t
            ? (q = { action: "remove", ha: c(f) })
            : "view_item" == t
            ? (q = { action: "detail", ka: d(h), ha: c(f) })
            : "view_item_list" == t
            ? (q = { action: "impressions", rd: c(f) })
            : "view_promotion" == t
            ? (q = { action: "promo_view", kb: c(F) })
            : "select_content" == t && F && 0 < F.length
            ? (q = { action: "promo_click", kb: c(F) })
            : "select_content" == t
            ? (q = {
                action: "click",
                ka: { list: e("list_name") || h },
                ha: c(f),
              })
            : "begin_checkout" == t || "checkout_progress" == t
            ? (q = {
                action: "checkout",
                ha: c(f),
                ka: {
                  step: "begin_checkout" == t ? 1 : e("checkout_step"),
                  option: e("checkout_option"),
                },
              })
            : "set_checkout_option" == t &&
              (q = {
                action: "checkout_option",
                ka: { step: e("checkout_step"), option: e("checkout_option") },
              });
          q && (q.se = e("currency"));
          return q;
        },
        p = {},
        q = function (a, b) {
          var c = p[a];
          p[a] = y(b, void 0);
          if (!c) return !1;
          for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
          for (d in c) if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
          return !1;
        };
      (function (a) {
        Z.__gtagua = a;
        Z.__gtagua.b = "gtagua";
        Z.__gtagua.g = !0;
      })(function (b) {
        var c = b.vtp_trackingId,
          d = bd(void 0),
          f = "gtag_" + c.split("-").join("_"),
          p = function (a) {
            var b = [].slice.call(arguments, 0);
            b[0] = f + "." + b[0];
            d.apply(window, b);
          },
          t = function () {
            var a = function (a, b) {
                for (var c = 0; b && c < b.length; c++) p(a, b[c]);
              },
              b = n(c);
            if (b) {
              var d = b.action;
              if ("impressions" == d) a("ec:addImpression", b.rd);
              else if ("promo_click" == d || "promo_view" == d) {
                var e = b.kb;
                a("ec:addPromo", b.kb);
                e && 0 < e.length && "promo_click" == d && p("ec:setAction", d);
              } else a("ec:addProduct", b.ha), p("ec:setAction", d, b.ka);
            }
          },
          R = function () {
            var a = og("optimize_id", c);
            a &&
              (p("require", a, { dataLayer: "dataLayer" }),
              p("require", "render"));
          },
          D = m(c, f, b.vtp_gtmOnSuccess);
        q(f, D.Lb) &&
          d(function () {
            ad() && ad().remove(f);
          });
        d("create", c, D.Lb);
        (function () {
          var a = og("custom_map", c);
          d(function () {
            if (ua(a)) {
              var b = D.M,
                c = ad().getByName(f),
                d;
              for (d in a)
                if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                  var e = c.get(k(a[d]));
                  l(b, d, e);
                }
            }
          });
        })();
        (function (a) {
          if (a) {
            var b = {};
            if (ua(a))
              for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
            p("require", "linkid", b);
          }
        })(D.linkAttribution);
        var O = D.linker;
        O &&
          O.domains &&
          cd(f + ".", O.domains, !!O.use_anchor, !!O.decorate_forms);
        var H = function (a, b, c) {
            c && (b = "" + b);
            D.M[a] = b;
          },
          J = jc;
        "page_view" == J
          ? (R(), p("send", "pageview", D.M))
          : "gtag.config" == J
          ? (R(), 0 != D.sendPageView && p("send", "pageview", D.M))
          : "screen_view" == J
          ? p("send", "screenview", D.M)
          : "timing_complete" == J
          ? (H("timingCategory", D.eventCategory, !0),
            H("timingVar", D.name, !0),
            H("timingValue", rc(D.value)),
            void 0 !== D.eventLabel && H("timingLabel", D.eventLabel, !0),
            p("send", "timing", D.M))
          : "exception" == J
          ? p("send", "exception", D.M)
          : (0 <=
              Fe(
                "view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(
                  " "
                ),
                J
              ) && (p("require", "ec", "ec.js"), t()),
            H("eventCategory", D.eventCategory, !0),
            H("eventAction", D.eventAction || J, !0),
            void 0 !== D.eventLabel && H("eventLabel", D.eventLabel, !0),
            void 0 !== D.value && H("eventValue", rc(D.value)),
            p("send", "event", D.M));
        a ||
          ((a = !0),
          Xf(
            "https://www.google-analytics.com/analytics.js",
            function () {
              ad().loaded || b.vtp_gtmOnFailure();
            },
            b.vtp_gtmOnFailure
          ));
      });
    })();

  var Hg = {
    macro: function (a) {
      if (ge.Ta.hasOwnProperty(a)) return ge.Ta[a];
    },
  };
  Hg.dataLayer = Ec;
  Hg.onHtmlSuccess = ge.Kb(!0);
  Hg.onHtmlFailure = ge.Kb(!1);
  Hg.callback = function (a) {
    lc.hasOwnProperty(a) && oc(lc[a]) && lc[a]();
    delete lc[a];
  };
  Hg.Ec = function () {
    ic[hc.m] = Hg;
    mc = Z.a;
    Wb = Wb || ge;
    Xb = Rc;
  };
  Hg.sd = function () {
    ic = C.google_tag_manager = C.google_tag_manager || {};
    if (ic[hc.m]) {
      var a = ic.zones;
      a && a.unregisterChild(hc.m);
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        Mb.push(c[d]);
      for (var e = b.tags || [], f = 0; f < e.length; f++) Pb.push(e[f]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) Ob.push(h[k]);
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var n = l[m], p = {}, q = 0; q < n.length; q++)
          p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
        Nb.push(p);
      }
      Rb = Z;
      ze();
      Hg.Ec();
      fe();
      Uc = !1;
      Vc = 0;
      if (
        ("interactive" == G.readyState && !G.createEventObject) ||
        "complete" == G.readyState
      )
        Xc();
      else {
        Na(G, "DOMContentLoaded", Xc);
        Na(G, "readystatechange", Xc);
        if (G.createEventObject && G.documentElement.doScroll) {
          var t = !0;
          try {
            t = !C.frameElement;
          } catch (w) {}
          t && Yc();
        }
        Na(C, "load", Xc);
      }
      Sd = !1;
      "complete" === G.readyState ? $d() : Na(C, "load", $d);
      a: {
        if (!hd) break a;
        jd();
        qd = 2;
        md = void 0;
        nd = {};
        kd = {};
        pd = void 0;
        od = {};
        ld = "";
        C.setInterval(jd, 864e5);
        C.setInterval(sd, 1e3);
      }
    }
  };
  Hg.sd();
})();
