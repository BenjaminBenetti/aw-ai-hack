var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/react@19.1.0/denonext/jsx-runtime.mjs
var p = Object.create;
var j = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf;
var T = Object.prototype.hasOwnProperty;
var n = (e, r) => () => (r || e((r = {
  exports: {}
}).exports, r), r.exports);
var f = (e, r, t, o) => {
  if (r && typeof r == "object" || typeof r == "function") for (let s of a(r)) !T.call(e, s) && s !== t && j(e, s, {
    get: () => r[s],
    enumerable: !(o = v(r, s)) || o.enumerable
  });
  return e;
};
var m = (e, r, t) => (t = e != null ? p(k(e)) : {}, f(r || !e || !e.__esModule ? j(t, "default", {
  value: e,
  enumerable: true
}) : t, e));
var E = n((l2) => {
  "use strict";
  var _2 = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function x4(e, r, t) {
    var o = null;
    if (t !== void 0 && (o = "" + t), r.key !== void 0 && (o = "" + r.key), "key" in r) {
      t = {};
      for (var s in r) s !== "key" && (t[s] = r[s]);
    } else t = r;
    return r = t.ref, {
      $$typeof: _2,
      type: e,
      key: o,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  l2.Fragment = c;
  l2.jsx = x4;
  l2.jsxs = x4;
});
var i = n((P, d2) => {
  "use strict";
  d2.exports = E();
});
var u = m(i());
var { Fragment: R, jsx: q, jsxs: C } = u;
var M = u.default ?? u;

// deno:https://esm.sh/react@19.1.0/denonext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => ce,
  Component: () => pe,
  Fragment: () => ae,
  Profiler: () => _e,
  PureComponent: () => le,
  StrictMode: () => Ee,
  Suspense: () => ye,
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => ve,
  __COMPILER_RUNTIME: () => Re,
  cache: () => me,
  cloneElement: () => Te,
  createContext: () => de,
  createElement: () => Ce,
  createRef: () => Se,
  default: () => Qe,
  forwardRef: () => Ae,
  isValidElement: () => we,
  lazy: () => he,
  memo: () => Oe,
  startTransition: () => ge,
  unstable_useCacheRefresh: () => Ne,
  use: () => je,
  useActionState: () => Pe,
  useCallback: () => He,
  useContext: () => Ie,
  useDebugValue: () => $e,
  useDeferredValue: () => Me,
  useEffect: () => Le,
  useId: () => Ue,
  useImperativeHandle: () => Ye,
  useInsertionEffect: () => xe,
  useLayoutEffect: () => De,
  useMemo: () => be,
  useOptimistic: () => ke,
  useReducer: () => qe,
  useRef: () => ze,
  useState: () => Ge,
  useSyncExternalStore: () => Ke,
  useTransition: () => We,
  version: () => Be
});
import __Process$ from "node:process";
var x = Object.create;
var C2 = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var k2 = Object.getPrototypeOf;
var q2 = Object.prototype.hasOwnProperty;
var S = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var z = (e, t, n2, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let u2 of b(t)) !q2.call(e, u2) && u2 !== n2 && C2(e, u2, {
    get: () => t[u2],
    enumerable: !(r = D(t, u2)) || r.enumerable
  });
  return e;
};
var G = (e, t, n2) => (n2 = e != null ? x(k2(e)) : {}, z(t || !e || !e.__esModule ? C2(n2, "default", {
  value: e,
  enumerable: true
}) : n2, e));
var M2 = S((o) => {
  "use strict";
  var v3 = Symbol.for("react.transitional.element"), K3 = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), B2 = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), V2 = Symbol.for("react.consumer"), X2 = Symbol.for("react.context"), Z2 = Symbol.for("react.forward_ref"), J2 = Symbol.for("react.suspense"), F3 = Symbol.for("react.memo"), N2 = Symbol.for("react.lazy"), A2 = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = A2 && e[A2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var j3 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P = Object.assign, H2 = {};
  function _2(e, t, n2) {
    this.props = e, this.context = t, this.refs = H2, this.updater = n2 || j3;
  }
  _2.prototype.isReactComponent = {};
  _2.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  _2.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function I2() {
  }
  I2.prototype = _2.prototype;
  function R3(e, t, n2) {
    this.props = e, this.context = t, this.refs = H2, this.updater = n2 || j3;
  }
  var m2 = R3.prototype = new I2();
  m2.constructor = R3;
  P(m2, _2.prototype);
  m2.isPureReactComponent = true;
  var w2 = Array.isArray, i2 = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  }, $2 = Object.prototype.hasOwnProperty;
  function T3(e, t, n2, r, u2, f2) {
    return n2 = f2.ref, {
      $$typeof: v3,
      type: e,
      key: t,
      ref: n2 !== void 0 ? n2 : null,
      props: f2
    };
  }
  function te(e, t) {
    return T3(e.type, t, void 0, void 0, void 0, e.props);
  }
  function d2(e) {
    return typeof e == "object" && e !== null && e.$$typeof === v3;
  }
  function ne(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n2) {
      return t[n2];
    });
  }
  var h2 = /\/+/g;
  function y2(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ne("" + e.key) : t.toString(36);
  }
  function O() {
  }
  function re2(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(O, O) : (e.status = "pending", e.then(function(t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        }, function(t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        })), e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function a2(e, t, n2, r, u2) {
    var f2 = typeof e;
    (f2 === "undefined" || f2 === "boolean") && (e = null);
    var s = false;
    if (e === null) s = true;
    else switch (f2) {
      case "bigint":
      case "string":
      case "number":
        s = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case v3:
          case K3:
            s = true;
            break;
          case N2:
            return s = e._init, a2(s(e._payload), t, n2, r, u2);
        }
    }
    if (s) return u2 = u2(e), s = r === "" ? "." + y2(e, 0) : r, w2(u2) ? (n2 = "", s != null && (n2 = s.replace(h2, "$&/") + "/"), a2(u2, t, n2, "", function(Y3) {
      return Y3;
    })) : u2 != null && (d2(u2) && (u2 = te(u2, n2 + (u2.key == null || e && e.key === u2.key ? "" : ("" + u2.key).replace(h2, "$&/") + "/") + s)), t.push(u2)), 1;
    s = 0;
    var p3 = r === "" ? "." : r + ":";
    if (w2(e)) for (var c = 0; c < e.length; c++) r = e[c], f2 = p3 + y2(r, c), s += a2(r, t, n2, f2, u2);
    else if (c = ee(e), typeof c == "function") for (e = c.call(e), c = 0; !(r = e.next()).done; ) r = r.value, f2 = p3 + y2(r, c++), s += a2(r, t, n2, f2, u2);
    else if (f2 === "object") {
      if (typeof e.then == "function") return a2(re2(e), t, n2, r, u2);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return s;
  }
  function l2(e, t, n2) {
    if (e == null) return e;
    var r = [], u2 = 0;
    return a2(e, r, "", "", function(f2) {
      return t.call(n2, f2, u2++);
    }), r;
  }
  function oe2(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n2) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n2);
      }, function(n2) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n2);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var g2 = typeof reportError == "function" ? reportError : function(e) {
    if (typeof globalThis == "object" && typeof globalThis.ErrorEvent == "function") {
      var t = new globalThis.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!globalThis.dispatchEvent(t)) return;
    } else if (typeof __Process$ == "object" && typeof __Process$.emit == "function") {
      __Process$.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function ue2() {
  }
  o.Children = {
    map: l2,
    forEach: function(e, t, n2) {
      l2(e, function() {
        t.apply(this, arguments);
      }, n2);
    },
    count: function(e) {
      var t = 0;
      return l2(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return l2(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!d2(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  o.Component = _2;
  o.Fragment = W;
  o.Profiler = Q;
  o.PureComponent = R3;
  o.StrictMode = B2;
  o.Suspense = J2;
  o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2;
  o.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e) {
      return i2.H.useMemoCache(e);
    }
  };
  o.cache = function(e) {
    return function() {
      return e.apply(null, arguments);
    };
  };
  o.cloneElement = function(e, t, n2) {
    if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
    var r = P({}, e.props), u2 = e.key, f2 = void 0;
    if (t != null) for (s in t.ref !== void 0 && (f2 = void 0), t.key !== void 0 && (u2 = "" + t.key), t) !$2.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
    var s = arguments.length - 2;
    if (s === 1) r.children = n2;
    else if (1 < s) {
      for (var p3 = Array(s), c = 0; c < s; c++) p3[c] = arguments[c + 2];
      r.children = p3;
    }
    return T3(e.type, u2, void 0, void 0, f2, r);
  };
  o.createContext = function(e) {
    return e = {
      $$typeof: X2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = e, e.Consumer = {
      $$typeof: V2,
      _context: e
    }, e;
  };
  o.createElement = function(e, t, n2) {
    var r, u2 = {}, f2 = null;
    if (t != null) for (r in t.key !== void 0 && (f2 = "" + t.key), t) $2.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (u2[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) u2.children = n2;
    else if (1 < s) {
      for (var p3 = Array(s), c = 0; c < s; c++) p3[c] = arguments[c + 2];
      u2.children = p3;
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps, s) u2[r] === void 0 && (u2[r] = s[r]);
    return T3(e, f2, void 0, void 0, null, u2);
  };
  o.createRef = function() {
    return {
      current: null
    };
  };
  o.forwardRef = function(e) {
    return {
      $$typeof: Z2,
      render: e
    };
  };
  o.isValidElement = d2;
  o.lazy = function(e) {
    return {
      $$typeof: N2,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: oe2
    };
  };
  o.memo = function(e, t) {
    return {
      $$typeof: F3,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  o.startTransition = function(e) {
    var t = i2.T, n2 = {};
    i2.T = n2;
    try {
      var r = e(), u2 = i2.S;
      u2 !== null && u2(n2, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(ue2, g2);
    } catch (f2) {
      g2(f2);
    } finally {
      i2.T = t;
    }
  };
  o.unstable_useCacheRefresh = function() {
    return i2.H.useCacheRefresh();
  };
  o.use = function(e) {
    return i2.H.use(e);
  };
  o.useActionState = function(e, t, n2) {
    return i2.H.useActionState(e, t, n2);
  };
  o.useCallback = function(e, t) {
    return i2.H.useCallback(e, t);
  };
  o.useContext = function(e) {
    return i2.H.useContext(e);
  };
  o.useDebugValue = function() {
  };
  o.useDeferredValue = function(e, t) {
    return i2.H.useDeferredValue(e, t);
  };
  o.useEffect = function(e, t, n2) {
    var r = i2.H;
    if (typeof n2 == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return r.useEffect(e, t);
  };
  o.useId = function() {
    return i2.H.useId();
  };
  o.useImperativeHandle = function(e, t, n2) {
    return i2.H.useImperativeHandle(e, t, n2);
  };
  o.useInsertionEffect = function(e, t) {
    return i2.H.useInsertionEffect(e, t);
  };
  o.useLayoutEffect = function(e, t) {
    return i2.H.useLayoutEffect(e, t);
  };
  o.useMemo = function(e, t) {
    return i2.H.useMemo(e, t);
  };
  o.useOptimistic = function(e, t) {
    return i2.H.useOptimistic(e, t);
  };
  o.useReducer = function(e, t, n2) {
    return i2.H.useReducer(e, t, n2);
  };
  o.useRef = function(e) {
    return i2.H.useRef(e);
  };
  o.useState = function(e) {
    return i2.H.useState(e);
  };
  o.useSyncExternalStore = function(e, t, n2) {
    return i2.H.useSyncExternalStore(e, t, n2);
  };
  o.useTransition = function() {
    return i2.H.useTransition();
  };
  o.version = "19.1.0";
});
var U = S((fe2, L) => {
  "use strict";
  L.exports = M2();
});
var E2 = G(U());
var { Children: ce, Component: pe, Fragment: ae, Profiler: _e, PureComponent: le, StrictMode: Ee, Suspense: ye, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: ve, __COMPILER_RUNTIME: Re, cache: me, cloneElement: Te, createContext: de, createElement: Ce, createRef: Se, forwardRef: Ae, isValidElement: we, lazy: he, memo: Oe, startTransition: ge, unstable_useCacheRefresh: Ne, use: je, useActionState: Pe, useCallback: He, useContext: Ie, useDebugValue: $e, useDeferredValue: Me, useEffect: Le, useId: Ue, useImperativeHandle: Ye, useInsertionEffect: xe, useLayoutEffect: De, useMemo: be, useOptimistic: ke, useReducer: qe, useRef: ze, useState: Ge, useSyncExternalStore: Ke, useTransition: We, version: Be } = E2;
var Qe = E2.default ?? E2;

// deno:https://esm.sh/react-dom@19.1.0/denonext/react-dom.mjs
var react_dom_exports = {};
__export(react_dom_exports, {
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => H,
  createPortal: () => I,
  default: () => K,
  flushSync: () => b2,
  preconnect: () => F,
  prefetchDNS: () => j2,
  preinit: () => k3,
  preinitModule: () => G2,
  preload: () => q3,
  preloadModule: () => w,
  requestFormReset: () => V,
  unstable_batchedUpdates: () => x2,
  useFormState: () => Y,
  useFormStatus: () => z2,
  version: () => B
});
var require2 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({
    __esModule: true
  }, m2);
  switch (n2) {
    case "react":
      return e(react_exports);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var S2 = Object.create;
var l = Object.defineProperty;
var E3 = Object.getOwnPropertyDescriptor;
var T2 = Object.getOwnPropertyNames;
var R2 = Object.getPrototypeOf;
var N = Object.prototype.hasOwnProperty;
var p2 = ((r) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(r, {
  get: (e, t) => (typeof require2 < "u" ? require2 : e)[t]
}) : r)(function(r) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
var y = (r, e) => () => (e || r((e = {
  exports: {}
}).exports, e), e.exports);
var A = (r, e, t, c) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a2 of T2(e)) !N.call(r, a2) && a2 !== t && l(r, a2, {
    get: () => e[a2],
    enumerable: !(c = E3(e, a2)) || c.enumerable
  });
  return r;
};
var D2 = (r, e, t) => (t = r != null ? S2(R2(r)) : {}, A(e || !r || !r.__esModule ? l(t, "default", {
  value: r,
  enumerable: true
}) : t, r));
var _ = y((i2) => {
  "use strict";
  var h2 = p2("react");
  function o(r) {
    var e = "https://react.dev/errors/" + r;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f2() {
  }
  var n2 = {
    d: {
      f: f2,
      r: function() {
        throw Error(o(522));
      },
      D: f2,
      C: f2,
      L: f2,
      m: f2,
      X: f2,
      S: f2,
      M: f2
    },
    p: 0,
    findDOMNode: null
  }, P = Symbol.for("react.portal");
  function C3(r, e, t) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P,
      key: c == null ? null : "" + c,
      children: r,
      containerInfo: e,
      implementation: t
    };
  }
  var u2 = h2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(r, e) {
    if (r === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  i2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n2;
  i2.createPortal = function(r, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(o(299));
    return C3(r, e, null, t);
  };
  i2.flushSync = function(r) {
    var e = u2.T, t = n2.p;
    try {
      if (u2.T = null, n2.p = 2, r) return r();
    } finally {
      u2.T = e, n2.p = t, n2.d.f();
    }
  };
  i2.preconnect = function(r, e) {
    typeof r == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n2.d.C(r, e));
  };
  i2.prefetchDNS = function(r) {
    typeof r == "string" && n2.d.D(r);
  };
  i2.preinit = function(r, e) {
    if (typeof r == "string" && e && typeof e.as == "string") {
      var t = e.as, c = s(t, e.crossOrigin), a2 = typeof e.integrity == "string" ? e.integrity : void 0, g2 = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      t === "style" ? n2.d.S(r, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: c,
        integrity: a2,
        fetchPriority: g2
      }) : t === "script" && n2.d.X(r, {
        crossOrigin: c,
        integrity: a2,
        fetchPriority: g2,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  i2.preinitModule = function(r, e) {
    if (typeof r == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var t = s(e.as, e.crossOrigin);
        n2.d.M(r, {
          crossOrigin: t,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && n2.d.M(r);
  };
  i2.preload = function(r, e) {
    if (typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var t = e.as, c = s(t, e.crossOrigin);
      n2.d.L(r, t, {
        crossOrigin: c,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0
      });
    }
  };
  i2.preloadModule = function(r, e) {
    if (typeof r == "string") if (e) {
      var t = s(e.as, e.crossOrigin);
      n2.d.m(r, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: t,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else n2.d.m(r);
  };
  i2.requestFormReset = function(r) {
    n2.d.r(r);
  };
  i2.unstable_batchedUpdates = function(r, e) {
    return r(e);
  };
  i2.useFormState = function(r, e, t) {
    return u2.H.useFormState(r, e, t);
  };
  i2.useFormStatus = function() {
    return u2.H.useHostTransitionStatus();
  };
  i2.version = "19.1.0";
});
var v2 = y((M3, O) => {
  "use strict";
  function m2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m2);
    } catch (r) {
      console.error(r);
    }
  }
  m2(), O.exports = _();
});
var d = D2(v2());
var { __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: H, createPortal: I, flushSync: b2, preconnect: F, prefetchDNS: j2, preinit: k3, preinitModule: G2, preload: q3, preloadModule: w, requestFormReset: V, unstable_batchedUpdates: x2, useFormState: Y, useFormStatus: z2, version: B } = d;
var K = d.default ?? d;

// deno:https://esm.sh/scheduler@0.26.0?target=denonext
var scheduler_0_26_exports = {};
__export(scheduler_0_26_exports, {
  default: () => we2,
  unstable_IdlePriority: () => re,
  unstable_ImmediatePriority: () => ue,
  unstable_LowPriority: () => se,
  unstable_NormalPriority: () => oe,
  unstable_Profiling: () => ie,
  unstable_UserBlockingPriority: () => ce2,
  unstable_cancelCallback: () => fe,
  unstable_forceFrameRate: () => be2,
  unstable_getCurrentPriorityLevel: () => _e2,
  unstable_next: () => de2,
  unstable_now: () => ae2,
  unstable_requestPaint: () => ve2,
  unstable_runWithPriority: () => ye2,
  unstable_scheduleCallback: () => ke2,
  unstable_shouldYield: () => me2,
  unstable_wrapCallback: () => Pe2
});

// deno:https://esm.sh/scheduler@0.26.0/denonext/scheduler.mjs
var __setImmediate$ = (cb, ...args) => ({
  $t: setTimeout(cb, 0, ...args),
  [Symbol.dispose]() {
    clearTimeout(this.t);
  }
});
var J = Object.create;
var F2 = Object.defineProperty;
var K2 = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var Z = Object.getPrototypeOf;
var $ = Object.prototype.hasOwnProperty;
var Y2 = (e, n2) => () => (n2 || e((n2 = {
  exports: {}
}).exports, n2), n2.exports);
var x3 = (e, n2, l2, t) => {
  if (n2 && typeof n2 == "object" || typeof n2 == "function") for (let a2 of X(n2)) !$.call(e, a2) && a2 !== l2 && F2(e, a2, {
    get: () => n2[a2],
    enumerable: !(t = K2(n2, a2)) || t.enumerable
  });
  return e;
};
var h = (e, n2, l2) => (l2 = e != null ? J(Z(e)) : {}, x3(n2 || !e || !e.__esModule ? F2(l2, "default", {
  value: e,
  enumerable: true
}) : l2, e));
var z3 = Y2((r) => {
  "use strict";
  function H2(e, n2) {
    var l2 = e.length;
    e.push(n2);
    e: for (; 0 < l2; ) {
      var t = l2 - 1 >>> 1, a2 = e[t];
      if (0 < w2(a2, n2)) e[t] = n2, e[l2] = a2, l2 = t;
      else break e;
    }
  }
  function o(e) {
    return e.length === 0 ? null : e[0];
  }
  function T3(e) {
    if (e.length === 0) return null;
    var n2 = e[0], l2 = e.pop();
    if (l2 !== n2) {
      e[0] = l2;
      e: for (var t = 0, a2 = e.length, k4 = a2 >>> 1; t < k4; ) {
        var m2 = 2 * (t + 1) - 1, j3 = e[m2], f2 = m2 + 1, P = e[f2];
        if (0 > w2(j3, l2)) f2 < a2 && 0 > w2(P, j3) ? (e[t] = P, e[f2] = l2, t = f2) : (e[t] = j3, e[m2] = l2, t = m2);
        else if (f2 < a2 && 0 > w2(P, l2)) e[t] = P, e[f2] = l2, t = f2;
        else break e;
      }
    }
    return n2;
  }
  function w2(e, n2) {
    var l2 = e.sortIndex - n2.sortIndex;
    return l2 !== 0 ? l2 : e.id - n2.id;
  }
  r.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function" ? (B2 = performance, r.unstable_now = function() {
    return B2.now();
  }) : (q4 = Date, D3 = q4.now(), r.unstable_now = function() {
    return q4.now() - D3;
  });
  var B2, q4, D3, i2 = [], c = [], ee = 1, s = null, u2 = 3, N2 = false, d2 = false, v3 = false, R3 = false, L = typeof setTimeout == "function" ? setTimeout : null, M3 = typeof clearTimeout == "function" ? clearTimeout : null, E4 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  function C3(e) {
    for (var n2 = o(c); n2 !== null; ) {
      if (n2.callback === null) T3(c);
      else if (n2.startTime <= e) T3(c), n2.sortIndex = n2.expirationTime, H2(i2, n2);
      else break;
      n2 = o(c);
    }
  }
  function S3(e) {
    if (v3 = false, C3(e), !d2) if (o(i2) !== null) d2 = true, _2 || (_2 = true, b3());
    else {
      var n2 = o(c);
      n2 !== null && U2(S3, n2.startTime - e);
    }
  }
  var _2 = false, y2 = -1, O = 5, V2 = -1;
  function W() {
    return R3 ? true : !(r.unstable_now() - V2 < O);
  }
  function I2() {
    if (R3 = false, _2) {
      var e = r.unstable_now();
      V2 = e;
      var n2 = true;
      try {
        e: {
          d2 = false, v3 && (v3 = false, M3(y2), y2 = -1), N2 = true;
          var l2 = u2;
          try {
            n: {
              for (C3(e), s = o(i2); s !== null && !(s.expirationTime > e && W()); ) {
                var t = s.callback;
                if (typeof t == "function") {
                  s.callback = null, u2 = s.priorityLevel;
                  var a2 = t(s.expirationTime <= e);
                  if (e = r.unstable_now(), typeof a2 == "function") {
                    s.callback = a2, C3(e), n2 = true;
                    break n;
                  }
                  s === o(i2) && T3(i2), C3(e);
                } else T3(i2);
                s = o(i2);
              }
              if (s !== null) n2 = true;
              else {
                var k4 = o(c);
                k4 !== null && U2(S3, k4.startTime - e), n2 = false;
              }
            }
            break e;
          } finally {
            s = null, u2 = l2, N2 = false;
          }
          n2 = void 0;
        }
      } finally {
        n2 ? b3() : _2 = false;
      }
    }
  }
  var b3;
  typeof E4 == "function" ? b3 = function() {
    E4(I2);
  } : typeof MessageChannel < "u" ? (p3 = new MessageChannel(), Q = p3.port2, p3.port1.onmessage = I2, b3 = function() {
    Q.postMessage(null);
  }) : b3 = function() {
    L(I2, 0);
  };
  var p3, Q;
  function U2(e, n2) {
    y2 = L(function() {
      e(r.unstable_now());
    }, n2);
  }
  r.unstable_IdlePriority = 5;
  r.unstable_ImmediatePriority = 1;
  r.unstable_LowPriority = 4;
  r.unstable_NormalPriority = 3;
  r.unstable_Profiling = null;
  r.unstable_UserBlockingPriority = 2;
  r.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  r.unstable_getCurrentPriorityLevel = function() {
    return u2;
  };
  r.unstable_next = function(e) {
    switch (u2) {
      case 1:
      case 2:
      case 3:
        var n2 = 3;
        break;
      default:
        n2 = u2;
    }
    var l2 = u2;
    u2 = n2;
    try {
      return e();
    } finally {
      u2 = l2;
    }
  };
  r.unstable_requestPaint = function() {
    R3 = true;
  };
  r.unstable_runWithPriority = function(e, n2) {
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
    var l2 = u2;
    u2 = e;
    try {
      return n2();
    } finally {
      u2 = l2;
    }
  };
  r.unstable_scheduleCallback = function(e, n2, l2) {
    var t = r.unstable_now();
    switch (typeof l2 == "object" && l2 !== null ? (l2 = l2.delay, l2 = typeof l2 == "number" && 0 < l2 ? t + l2 : t) : l2 = t, e) {
      case 1:
        var a2 = -1;
        break;
      case 2:
        a2 = 250;
        break;
      case 5:
        a2 = 1073741823;
        break;
      case 4:
        a2 = 1e4;
        break;
      default:
        a2 = 5e3;
    }
    return a2 = l2 + a2, e = {
      id: ee++,
      callback: n2,
      priorityLevel: e,
      startTime: l2,
      expirationTime: a2,
      sortIndex: -1
    }, l2 > t ? (e.sortIndex = l2, H2(c, e), o(i2) === null && e === o(c) && (v3 ? (M3(y2), y2 = -1) : v3 = true, U2(S3, l2 - t))) : (e.sortIndex = a2, H2(i2, e), d2 || N2 || (d2 = true, _2 || (_2 = true, b3()))), e;
  };
  r.unstable_shouldYield = W;
  r.unstable_wrapCallback = function(e) {
    var n2 = u2;
    return function() {
      var l2 = u2;
      u2 = n2;
      try {
        return e.apply(this, arguments);
      } finally {
        u2 = l2;
      }
    };
  };
});
var G3 = Y2((te, A2) => {
  "use strict";
  A2.exports = z3();
});
var g = h(G3());
var { unstable_now: ae2, unstable_IdlePriority: re, unstable_ImmediatePriority: ue, unstable_LowPriority: se, unstable_NormalPriority: oe, unstable_Profiling: ie, unstable_UserBlockingPriority: ce2, unstable_cancelCallback: fe, unstable_forceFrameRate: be2, unstable_getCurrentPriorityLevel: _e2, unstable_next: de2, unstable_requestPaint: ve2, unstable_runWithPriority: ye2, unstable_scheduleCallback: ke2, unstable_shouldYield: me2, unstable_wrapCallback: Pe2 } = g;
var we2 = g.default ?? g;

// deno:https://esm.sh/react-dom@19.1.0/denonext/client.mjs
import __Process$2 from "node:process";
var require3 = (n2) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({
    __esModule: true
  }, m2);
  switch (n2) {
    case "scheduler":
      return e(scheduler_0_26_exports);
    case "react":
      return e(react_exports);
    case "react-dom":
      return e(react_dom_exports);
    default:
      console.error('module "' + n2 + '" not found');
      return null;
  }
};
var Cv = Object.create;
var Xe = Object.defineProperty;
var Lv = Object.getOwnPropertyDescriptor;
var pv = Object.getOwnPropertyNames;
var Jv = Object.getPrototypeOf;
var Wv = Object.prototype.hasOwnProperty;
var Sf = ((l2) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(l2, {
  get: (u2, a2) => (typeof require3 < "u" ? require3 : u2)[a2]
}) : l2)(function(l2) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + l2 + '" is not supported');
});
var Ge2 = (l2, u2) => () => (u2 || l2((u2 = {
  exports: {}
}).exports, u2), u2.exports);
var wv = (l2, u2, a2, t) => {
  if (u2 && typeof u2 == "object" || typeof u2 == "function") for (let n2 of pv(u2)) !Wv.call(l2, n2) && n2 !== a2 && Xe(l2, n2, {
    get: () => u2[n2],
    enumerable: !(t = Lv(u2, n2)) || t.enumerable
  });
  return l2;
};
var $v = (l2, u2, a2) => (a2 = l2 != null ? Cv(Jv(l2)) : {}, wv(u2 || !l2 || !l2.__esModule ? Xe(a2, "default", {
  value: l2,
  enumerable: true
}) : a2, l2));
var Zv = Ge2((yf) => {
  "use strict";
  var I2 = Sf("scheduler"), t0 = Sf("react"), Fv = Sf("react-dom");
  function A2(l2) {
    var u2 = "https://react.dev/errors/" + l2;
    if (1 < arguments.length) {
      u2 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a2 = 2; a2 < arguments.length; a2++) u2 += "&args[]=" + encodeURIComponent(arguments[a2]);
    }
    return "Minified React error #" + l2 + "; visit " + u2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n0(l2) {
    return !(!l2 || l2.nodeType !== 1 && l2.nodeType !== 9 && l2.nodeType !== 11);
  }
  function Ht(l2) {
    var u2 = l2, a2 = l2;
    if (l2.alternate) for (; u2.return; ) u2 = u2.return;
    else {
      l2 = u2;
      do
        u2 = l2, (u2.flags & 4098) !== 0 && (a2 = u2.return), l2 = u2.return;
      while (l2);
    }
    return u2.tag === 3 ? a2 : null;
  }
  function f0(l2) {
    if (l2.tag === 13) {
      var u2 = l2.memoizedState;
      if (u2 === null && (l2 = l2.alternate, l2 !== null && (u2 = l2.memoizedState)), u2 !== null) return u2.dehydrated;
    }
    return null;
  }
  function Qe2(l2) {
    if (Ht(l2) !== l2) throw Error(A2(188));
  }
  function kv(l2) {
    var u2 = l2.alternate;
    if (!u2) {
      if (u2 = Ht(l2), u2 === null) throw Error(A2(188));
      return u2 !== l2 ? null : l2;
    }
    for (var a2 = l2, t = u2; ; ) {
      var n2 = a2.return;
      if (n2 === null) break;
      var f2 = n2.alternate;
      if (f2 === null) {
        if (t = n2.return, t !== null) {
          a2 = t;
          continue;
        }
        break;
      }
      if (n2.child === f2.child) {
        for (f2 = n2.child; f2; ) {
          if (f2 === a2) return Qe2(n2), l2;
          if (f2 === t) return Qe2(n2), u2;
          f2 = f2.sibling;
        }
        throw Error(A2(188));
      }
      if (a2.return !== t.return) a2 = n2, t = f2;
      else {
        for (var c = false, e = n2.child; e; ) {
          if (e === a2) {
            c = true, a2 = n2, t = f2;
            break;
          }
          if (e === t) {
            c = true, t = n2, a2 = f2;
            break;
          }
          e = e.sibling;
        }
        if (!c) {
          for (e = f2.child; e; ) {
            if (e === a2) {
              c = true, a2 = f2, t = n2;
              break;
            }
            if (e === t) {
              c = true, t = f2, a2 = n2;
              break;
            }
            e = e.sibling;
          }
          if (!c) throw Error(A2(189));
        }
      }
      if (a2.alternate !== t) throw Error(A2(190));
    }
    if (a2.tag !== 3) throw Error(A2(188));
    return a2.stateNode.current === a2 ? l2 : u2;
  }
  function c0(l2) {
    var u2 = l2.tag;
    if (u2 === 5 || u2 === 26 || u2 === 27 || u2 === 6) return l2;
    for (l2 = l2.child; l2 !== null; ) {
      if (u2 = c0(l2), u2 !== null) return u2;
      l2 = l2.sibling;
    }
    return null;
  }
  var j3 = Object.assign, rv = Symbol.for("react.element"), Ct = Symbol.for("react.transitional.element"), $a = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), e0 = Symbol.for("react.strict_mode"), Jf = Symbol.for("react.profiler"), Iv = Symbol.for("react.provider"), i0 = Symbol.for("react.consumer"), $l = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Wf = Symbol.for("react.suspense"), wf = Symbol.for("react.suspense_list"), Kc = Symbol.for("react.memo"), vu = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var $f = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var Pv = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var Ze = Symbol.iterator;
  function ja(l2) {
    return l2 === null || typeof l2 != "object" ? null : (l2 = Ze && l2[Ze] || l2["@@iterator"], typeof l2 == "function" ? l2 : null);
  }
  var lh = Symbol.for("react.client.reference");
  function Ff(l2) {
    if (l2 == null) return null;
    if (typeof l2 == "function") return l2.$$typeof === lh ? null : l2.displayName || l2.name || null;
    if (typeof l2 == "string") return l2;
    switch (l2) {
      case ta:
        return "Fragment";
      case Jf:
        return "Profiler";
      case e0:
        return "StrictMode";
      case Wf:
        return "Suspense";
      case wf:
        return "SuspenseList";
      case $f:
        return "Activity";
    }
    if (typeof l2 == "object") switch (l2.$$typeof) {
      case $a:
        return "Portal";
      case $l:
        return (l2.displayName || "Context") + ".Provider";
      case i0:
        return (l2._context.displayName || "Context") + ".Consumer";
      case jc:
        var u2 = l2.render;
        return l2 = l2.displayName, l2 || (l2 = u2.displayName || u2.name || "", l2 = l2 !== "" ? "ForwardRef(" + l2 + ")" : "ForwardRef"), l2;
      case Kc:
        return u2 = l2.displayName || null, u2 !== null ? u2 : Ff(l2.type) || "Memo";
      case vu:
        u2 = l2._payload, l2 = l2._init;
        try {
          return Ff(l2(u2));
        } catch {
        }
    }
    return null;
  }
  var Fa = Array.isArray, s = t0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, o = Fv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qu = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, kf = [], na = -1;
  function Cl(l2) {
    return {
      current: l2
    };
  }
  function tl(l2) {
    0 > na || (l2.current = kf[na], kf[na] = null, na--);
  }
  function C3(l2, u2) {
    na++, kf[na] = l2.current, l2.current = u2;
  }
  var Vl = Cl(null), dt = Cl(null), Tu = Cl(null), Tn = Cl(null);
  function Mn(l2, u2) {
    switch (C3(Tu, u2), C3(dt, l2), C3(Vl, null), u2.nodeType) {
      case 9:
      case 11:
        l2 = (l2 = u2.documentElement) && (l2 = l2.namespaceURI) ? Li(l2) : 0;
        break;
      default:
        if (l2 = u2.tagName, u2 = u2.namespaceURI) u2 = Li(u2), l2 = Uv(u2, l2);
        else switch (l2) {
          case "svg":
            l2 = 1;
            break;
          case "math":
            l2 = 2;
            break;
          default:
            l2 = 0;
        }
    }
    tl(Vl), C3(Vl, l2);
  }
  function Oa() {
    tl(Vl), tl(dt), tl(Tu);
  }
  function rf(l2) {
    l2.memoizedState !== null && C3(Tn, l2);
    var u2 = Vl.current, a2 = Uv(u2, l2.type);
    u2 !== a2 && (C3(dt, l2), C3(Vl, a2));
  }
  function En(l2) {
    dt.current === l2 && (tl(Vl), tl(dt)), Tn.current === l2 && (tl(Tn), Dt._currentValue = Qu);
  }
  var If = Object.prototype.hasOwnProperty, Cc = I2.unstable_scheduleCallback, mf = I2.unstable_cancelCallback, uh = I2.unstable_shouldYield, ah = I2.unstable_requestPaint, jl = I2.unstable_now, th = I2.unstable_getCurrentPriorityLevel, v0 = I2.unstable_ImmediatePriority, h0 = I2.unstable_UserBlockingPriority, Dn = I2.unstable_NormalPriority, nh = I2.unstable_LowPriority, y0 = I2.unstable_IdlePriority, fh = I2.log, ch = I2.unstable_setDisableYieldValue, Nt = null, Tl = null;
  function gu(l2) {
    if (typeof fh == "function" && ch(l2), Tl && typeof Tl.setStrictMode == "function") try {
      Tl.setStrictMode(Nt, l2);
    } catch {
    }
  }
  var Ml = Math.clz32 ? Math.clz32 : vh, eh = Math.log, ih = Math.LN2;
  function vh(l2) {
    return l2 >>>= 0, l2 === 0 ? 32 : 31 - (eh(l2) / ih | 0) | 0;
  }
  var Lt = 256, pt = 4194304;
  function _u(l2) {
    var u2 = l2 & 42;
    if (u2 !== 0) return u2;
    switch (l2 & -l2) {
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
        return 64;
      case 128:
        return 128;
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
        return l2 & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l2 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l2;
    }
  }
  function Fn(l2, u2, a2) {
    var t = l2.pendingLanes;
    if (t === 0) return 0;
    var n2 = 0, f2 = l2.suspendedLanes, c = l2.pingedLanes;
    l2 = l2.warmLanes;
    var e = t & 134217727;
    return e !== 0 ? (t = e & ~f2, t !== 0 ? n2 = _u(t) : (c &= e, c !== 0 ? n2 = _u(c) : a2 || (a2 = e & ~l2, a2 !== 0 && (n2 = _u(a2))))) : (e = t & ~f2, e !== 0 ? n2 = _u(e) : c !== 0 ? n2 = _u(c) : a2 || (a2 = t & ~l2, a2 !== 0 && (n2 = _u(a2)))), n2 === 0 ? 0 : u2 !== 0 && u2 !== n2 && (u2 & f2) === 0 && (f2 = n2 & -n2, a2 = u2 & -u2, f2 >= a2 || f2 === 32 && (a2 & 4194048) !== 0) ? u2 : n2;
  }
  function qt(l2, u2) {
    return (l2.pendingLanes & ~(l2.suspendedLanes & ~l2.pingedLanes) & u2) === 0;
  }
  function hh(l2, u2) {
    switch (l2) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return u2 + 250;
      case 16:
      case 32:
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
        return u2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function d0() {
    var l2 = Lt;
    return Lt <<= 1, (Lt & 4194048) === 0 && (Lt = 256), l2;
  }
  function S0() {
    var l2 = pt;
    return pt <<= 1, (pt & 62914560) === 0 && (pt = 4194304), l2;
  }
  function gf(l2) {
    for (var u2 = [], a2 = 0; 31 > a2; a2++) u2.push(l2);
    return u2;
  }
  function Bt(l2, u2) {
    l2.pendingLanes |= u2, u2 !== 268435456 && (l2.suspendedLanes = 0, l2.pingedLanes = 0, l2.warmLanes = 0);
  }
  function yh(l2, u2, a2, t, n2, f2) {
    var c = l2.pendingLanes;
    l2.pendingLanes = a2, l2.suspendedLanes = 0, l2.pingedLanes = 0, l2.warmLanes = 0, l2.expiredLanes &= a2, l2.entangledLanes &= a2, l2.errorRecoveryDisabledLanes &= a2, l2.shellSuspendCounter = 0;
    var e = l2.entanglements, i2 = l2.expirationTimes, d2 = l2.hiddenUpdates;
    for (a2 = c & ~a2; 0 < a2; ) {
      var g2 = 31 - Ml(a2), z4 = 1 << g2;
      e[g2] = 0, i2[g2] = -1;
      var S3 = d2[g2];
      if (S3 !== null) for (d2[g2] = null, g2 = 0; g2 < S3.length; g2++) {
        var m2 = S3[g2];
        m2 !== null && (m2.lane &= -536870913);
      }
      a2 &= ~z4;
    }
    t !== 0 && m0(l2, t, 0), f2 !== 0 && n2 === 0 && l2.tag !== 0 && (l2.suspendedLanes |= f2 & ~(c & ~u2));
  }
  function m0(l2, u2, a2) {
    l2.pendingLanes |= u2, l2.suspendedLanes &= ~u2;
    var t = 31 - Ml(u2);
    l2.entangledLanes |= u2, l2.entanglements[t] = l2.entanglements[t] | 1073741824 | a2 & 4194090;
  }
  function g0(l2, u2) {
    var a2 = l2.entangledLanes |= u2;
    for (l2 = l2.entanglements; a2; ) {
      var t = 31 - Ml(a2), n2 = 1 << t;
      n2 & u2 | l2[t] & u2 && (l2[t] |= u2), a2 &= ~n2;
    }
  }
  function Lc(l2) {
    switch (l2) {
      case 2:
        l2 = 1;
        break;
      case 8:
        l2 = 4;
        break;
      case 32:
        l2 = 16;
        break;
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
        l2 = 128;
        break;
      case 268435456:
        l2 = 134217728;
        break;
      default:
        l2 = 0;
    }
    return l2;
  }
  function pc(l2) {
    return l2 &= -l2, 2 < l2 ? 8 < l2 ? (l2 & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function b0() {
    var l2 = o.p;
    return l2 !== 0 ? l2 : (l2 = globalThis.event, l2 === void 0 ? 32 : Gv(l2.type));
  }
  function dh(l2, u2) {
    var a2 = o.p;
    try {
      return o.p = l2, u2();
    } finally {
      o.p = a2;
    }
  }
  var Ru = Math.random().toString(36).slice(2), el = "__reactFiber$" + Ru, Sl = "__reactProps$" + Ru, Xa = "__reactContainer$" + Ru, Pf = "__reactEvents$" + Ru, Sh = "__reactListeners$" + Ru, mh = "__reactHandles$" + Ru, xe2 = "__reactResources$" + Ru, Rt = "__reactMarker$" + Ru;
  function Jc(l2) {
    delete l2[el], delete l2[Sl], delete l2[Pf], delete l2[Sh], delete l2[mh];
  }
  function fa(l2) {
    var u2 = l2[el];
    if (u2) return u2;
    for (var a2 = l2.parentNode; a2; ) {
      if (u2 = a2[Xa] || a2[el]) {
        if (a2 = u2.alternate, u2.child !== null || a2 !== null && a2.child !== null) for (l2 = Wi(l2); l2 !== null; ) {
          if (a2 = l2[el]) return a2;
          l2 = Wi(l2);
        }
        return u2;
      }
      l2 = a2, a2 = l2.parentNode;
    }
    return null;
  }
  function Ga(l2) {
    if (l2 = l2[el] || l2[Xa]) {
      var u2 = l2.tag;
      if (u2 === 5 || u2 === 6 || u2 === 13 || u2 === 26 || u2 === 27 || u2 === 3) return l2;
    }
    return null;
  }
  function ka(l2) {
    var u2 = l2.tag;
    if (u2 === 5 || u2 === 26 || u2 === 27 || u2 === 6) return l2.stateNode;
    throw Error(A2(33));
  }
  function ga(l2) {
    var u2 = l2[xe2];
    return u2 || (u2 = l2[xe2] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), u2;
  }
  function ul(l2) {
    l2[Rt] = true;
  }
  var z0 = /* @__PURE__ */ new Set(), A0 = {};
  function wu(l2, u2) {
    sa(l2, u2), sa(l2 + "Capture", u2);
  }
  function sa(l2, u2) {
    for (A0[l2] = u2, l2 = 0; l2 < u2.length; l2++) z0.add(u2[l2]);
  }
  var gh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ve = {}, je2 = {};
  function bh(l2) {
    return If.call(je2, l2) ? true : If.call(Ve, l2) ? false : gh.test(l2) ? je2[l2] = true : (Ve[l2] = true, false);
  }
  function fn(l2, u2, a2) {
    if (bh(u2)) if (a2 === null) l2.removeAttribute(u2);
    else {
      switch (typeof a2) {
        case "undefined":
        case "function":
        case "symbol":
          l2.removeAttribute(u2);
          return;
        case "boolean":
          var t = u2.toLowerCase().slice(0, 5);
          if (t !== "data-" && t !== "aria-") {
            l2.removeAttribute(u2);
            return;
          }
      }
      l2.setAttribute(u2, "" + a2);
    }
  }
  function Jt(l2, u2, a2) {
    if (a2 === null) l2.removeAttribute(u2);
    else {
      switch (typeof a2) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l2.removeAttribute(u2);
          return;
      }
      l2.setAttribute(u2, "" + a2);
    }
  }
  function pl(l2, u2, a2, t) {
    if (t === null) l2.removeAttribute(a2);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l2.removeAttribute(a2);
          return;
      }
      l2.setAttributeNS(u2, a2, "" + t);
    }
  }
  var bf, Ke2;
  function la(l2) {
    if (bf === void 0) try {
      throw Error();
    } catch (a2) {
      var u2 = a2.stack.trim().match(/\n( *(at )?)/);
      bf = u2 && u2[1] || "", Ke2 = -1 < a2.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a2.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + bf + l2 + Ke2;
  }
  var zf = false;
  function Af(l2, u2) {
    if (!l2 || zf) return "";
    zf = true;
    var a2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u2) {
              var z4 = function() {
                throw Error();
              };
              if (Object.defineProperty(z4.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z4, []);
                } catch (m2) {
                  var S3 = m2;
                }
                Reflect.construct(l2, [], z4);
              } else {
                try {
                  z4.call();
                } catch (m2) {
                  S3 = m2;
                }
                l2.call(z4.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m2) {
                S3 = m2;
              }
              (z4 = l2()) && typeof z4.catch == "function" && z4.catch(function() {
              });
            }
          } catch (m2) {
            if (m2 && S3 && typeof m2.stack == "string") return [
              m2.stack,
              S3.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n2 = Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot, "name");
      n2 && n2.configurable && Object.defineProperty(t.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var f2 = t.DetermineComponentFrameRoot(), c = f2[0], e = f2[1];
      if (c && e) {
        var i2 = c.split(`
`), d2 = e.split(`
`);
        for (n2 = t = 0; t < i2.length && !i2[t].includes("DetermineComponentFrameRoot"); ) t++;
        for (; n2 < d2.length && !d2[n2].includes("DetermineComponentFrameRoot"); ) n2++;
        if (t === i2.length || n2 === d2.length) for (t = i2.length - 1, n2 = d2.length - 1; 1 <= t && 0 <= n2 && i2[t] !== d2[n2]; ) n2--;
        for (; 1 <= t && 0 <= n2; t--, n2--) if (i2[t] !== d2[n2]) {
          if (t !== 1 || n2 !== 1) do
            if (t--, n2--, 0 > n2 || i2[t] !== d2[n2]) {
              var g2 = `
` + i2[t].replace(" at new ", " at ");
              return l2.displayName && g2.includes("<anonymous>") && (g2 = g2.replace("<anonymous>", l2.displayName)), g2;
            }
          while (1 <= t && 0 <= n2);
          break;
        }
      }
    } finally {
      zf = false, Error.prepareStackTrace = a2;
    }
    return (a2 = l2 ? l2.displayName || l2.name : "") ? la(a2) : "";
  }
  function zh(l2) {
    switch (l2.tag) {
      case 26:
      case 27:
      case 5:
        return la(l2.type);
      case 16:
        return la("Lazy");
      case 13:
        return la("Suspense");
      case 19:
        return la("SuspenseList");
      case 0:
      case 15:
        return Af(l2.type, false);
      case 11:
        return Af(l2.type.render, false);
      case 1:
        return Af(l2.type, true);
      case 31:
        return la("Activity");
      default:
        return "";
    }
  }
  function Ce2(l2) {
    try {
      var u2 = "";
      do
        u2 += zh(l2), l2 = l2.return;
      while (l2);
      return u2;
    } catch (a2) {
      return `
Error generating stack: ` + a2.message + `
` + a2.stack;
    }
  }
  function Ul(l2) {
    switch (typeof l2) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l2;
      case "object":
        return l2;
      default:
        return "";
    }
  }
  function T0(l2) {
    var u2 = l2.type;
    return (l2 = l2.nodeName) && l2.toLowerCase() === "input" && (u2 === "checkbox" || u2 === "radio");
  }
  function Ah(l2) {
    var u2 = T0(l2) ? "checked" : "value", a2 = Object.getOwnPropertyDescriptor(l2.constructor.prototype, u2), t = "" + l2[u2];
    if (!l2.hasOwnProperty(u2) && typeof a2 < "u" && typeof a2.get == "function" && typeof a2.set == "function") {
      var n2 = a2.get, f2 = a2.set;
      return Object.defineProperty(l2, u2, {
        configurable: true,
        get: function() {
          return n2.call(this);
        },
        set: function(c) {
          t = "" + c, f2.call(this, c);
        }
      }), Object.defineProperty(l2, u2, {
        enumerable: a2.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c) {
          t = "" + c;
        },
        stopTracking: function() {
          l2._valueTracker = null, delete l2[u2];
        }
      };
    }
  }
  function On(l2) {
    l2._valueTracker || (l2._valueTracker = Ah(l2));
  }
  function M0(l2) {
    if (!l2) return false;
    var u2 = l2._valueTracker;
    if (!u2) return true;
    var a2 = u2.getValue(), t = "";
    return l2 && (t = T0(l2) ? l2.checked ? "true" : "false" : l2.value), l2 = t, l2 !== a2 ? (u2.setValue(l2), true) : false;
  }
  function sn(l2) {
    if (l2 = l2 || (typeof document < "u" ? document : void 0), typeof l2 > "u") return null;
    try {
      return l2.activeElement || l2.body;
    } catch {
      return l2.body;
    }
  }
  var Th = /[\n"\\]/g;
  function ql(l2) {
    return l2.replace(Th, function(u2) {
      return "\\" + u2.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l2, u2, a2, t, n2, f2, c, e) {
    l2.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l2.type = c : l2.removeAttribute("type"), u2 != null ? c === "number" ? (u2 === 0 && l2.value === "" || l2.value != u2) && (l2.value = "" + Ul(u2)) : l2.value !== "" + Ul(u2) && (l2.value = "" + Ul(u2)) : c !== "submit" && c !== "reset" || l2.removeAttribute("value"), u2 != null ? uc(l2, c, Ul(u2)) : a2 != null ? uc(l2, c, Ul(a2)) : t != null && l2.removeAttribute("value"), n2 == null && f2 != null && (l2.defaultChecked = !!f2), n2 != null && (l2.checked = n2 && typeof n2 != "function" && typeof n2 != "symbol"), e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" ? l2.name = "" + Ul(e) : l2.removeAttribute("name");
  }
  function E0(l2, u2, a2, t, n2, f2, c, e) {
    if (f2 != null && typeof f2 != "function" && typeof f2 != "symbol" && typeof f2 != "boolean" && (l2.type = f2), u2 != null || a2 != null) {
      if (!(f2 !== "submit" && f2 !== "reset" || u2 != null)) return;
      a2 = a2 != null ? "" + Ul(a2) : "", u2 = u2 != null ? "" + Ul(u2) : a2, e || u2 === l2.value || (l2.value = u2), l2.defaultValue = u2;
    }
    t = t ?? n2, t = typeof t != "function" && typeof t != "symbol" && !!t, l2.checked = e ? l2.checked : !!t, l2.defaultChecked = !!t, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l2.name = c);
  }
  function uc(l2, u2, a2) {
    u2 === "number" && sn(l2.ownerDocument) === l2 || l2.defaultValue === "" + a2 || (l2.defaultValue = "" + a2);
  }
  function ba(l2, u2, a2, t) {
    if (l2 = l2.options, u2) {
      u2 = {};
      for (var n2 = 0; n2 < a2.length; n2++) u2["$" + a2[n2]] = true;
      for (a2 = 0; a2 < l2.length; a2++) n2 = u2.hasOwnProperty("$" + l2[a2].value), l2[a2].selected !== n2 && (l2[a2].selected = n2), n2 && t && (l2[a2].defaultSelected = true);
    } else {
      for (a2 = "" + Ul(a2), u2 = null, n2 = 0; n2 < l2.length; n2++) {
        if (l2[n2].value === a2) {
          l2[n2].selected = true, t && (l2[n2].defaultSelected = true);
          return;
        }
        u2 !== null || l2[n2].disabled || (u2 = l2[n2]);
      }
      u2 !== null && (u2.selected = true);
    }
  }
  function D0(l2, u2, a2) {
    if (u2 != null && (u2 = "" + Ul(u2), u2 !== l2.value && (l2.value = u2), a2 == null)) {
      l2.defaultValue !== u2 && (l2.defaultValue = u2);
      return;
    }
    l2.defaultValue = a2 != null ? "" + Ul(a2) : "";
  }
  function O0(l2, u2, a2, t) {
    if (u2 == null) {
      if (t != null) {
        if (a2 != null) throw Error(A2(92));
        if (Fa(t)) {
          if (1 < t.length) throw Error(A2(93));
          t = t[0];
        }
        a2 = t;
      }
      a2 == null && (a2 = ""), u2 = a2;
    }
    a2 = Ul(u2), l2.defaultValue = a2, t = l2.textContent, t === a2 && t !== "" && t !== null && (l2.value = t);
  }
  function Ua(l2, u2) {
    if (u2) {
      var a2 = l2.firstChild;
      if (a2 && a2 === l2.lastChild && a2.nodeType === 3) {
        a2.nodeValue = u2;
        return;
      }
    }
    l2.textContent = u2;
  }
  var Mh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Le2(l2, u2, a2) {
    var t = u2.indexOf("--") === 0;
    a2 == null || typeof a2 == "boolean" || a2 === "" ? t ? l2.setProperty(u2, "") : u2 === "float" ? l2.cssFloat = "" : l2[u2] = "" : t ? l2.setProperty(u2, a2) : typeof a2 != "number" || a2 === 0 || Mh.has(u2) ? u2 === "float" ? l2.cssFloat = a2 : l2[u2] = ("" + a2).trim() : l2[u2] = a2 + "px";
  }
  function s0(l2, u2, a2) {
    if (u2 != null && typeof u2 != "object") throw Error(A2(62));
    if (l2 = l2.style, a2 != null) {
      for (var t in a2) !a2.hasOwnProperty(t) || u2 != null && u2.hasOwnProperty(t) || (t.indexOf("--") === 0 ? l2.setProperty(t, "") : t === "float" ? l2.cssFloat = "" : l2[t] = "");
      for (var n2 in u2) t = u2[n2], u2.hasOwnProperty(n2) && a2[n2] !== t && Le2(l2, n2, t);
    } else for (var f2 in u2) u2.hasOwnProperty(f2) && Le2(l2, f2, u2[f2]);
  }
  function Wc(l2) {
    if (l2.indexOf("-") === -1) return false;
    switch (l2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Eh = /* @__PURE__ */ new Map([
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ],
    [
      "crossOrigin",
      "crossorigin"
    ],
    [
      "accentHeight",
      "accent-height"
    ],
    [
      "alignmentBaseline",
      "alignment-baseline"
    ],
    [
      "arabicForm",
      "arabic-form"
    ],
    [
      "baselineShift",
      "baseline-shift"
    ],
    [
      "capHeight",
      "cap-height"
    ],
    [
      "clipPath",
      "clip-path"
    ],
    [
      "clipRule",
      "clip-rule"
    ],
    [
      "colorInterpolation",
      "color-interpolation"
    ],
    [
      "colorInterpolationFilters",
      "color-interpolation-filters"
    ],
    [
      "colorProfile",
      "color-profile"
    ],
    [
      "colorRendering",
      "color-rendering"
    ],
    [
      "dominantBaseline",
      "dominant-baseline"
    ],
    [
      "enableBackground",
      "enable-background"
    ],
    [
      "fillOpacity",
      "fill-opacity"
    ],
    [
      "fillRule",
      "fill-rule"
    ],
    [
      "floodColor",
      "flood-color"
    ],
    [
      "floodOpacity",
      "flood-opacity"
    ],
    [
      "fontFamily",
      "font-family"
    ],
    [
      "fontSize",
      "font-size"
    ],
    [
      "fontSizeAdjust",
      "font-size-adjust"
    ],
    [
      "fontStretch",
      "font-stretch"
    ],
    [
      "fontStyle",
      "font-style"
    ],
    [
      "fontVariant",
      "font-variant"
    ],
    [
      "fontWeight",
      "font-weight"
    ],
    [
      "glyphName",
      "glyph-name"
    ],
    [
      "glyphOrientationHorizontal",
      "glyph-orientation-horizontal"
    ],
    [
      "glyphOrientationVertical",
      "glyph-orientation-vertical"
    ],
    [
      "horizAdvX",
      "horiz-adv-x"
    ],
    [
      "horizOriginX",
      "horiz-origin-x"
    ],
    [
      "imageRendering",
      "image-rendering"
    ],
    [
      "letterSpacing",
      "letter-spacing"
    ],
    [
      "lightingColor",
      "lighting-color"
    ],
    [
      "markerEnd",
      "marker-end"
    ],
    [
      "markerMid",
      "marker-mid"
    ],
    [
      "markerStart",
      "marker-start"
    ],
    [
      "overlinePosition",
      "overline-position"
    ],
    [
      "overlineThickness",
      "overline-thickness"
    ],
    [
      "paintOrder",
      "paint-order"
    ],
    [
      "panose-1",
      "panose-1"
    ],
    [
      "pointerEvents",
      "pointer-events"
    ],
    [
      "renderingIntent",
      "rendering-intent"
    ],
    [
      "shapeRendering",
      "shape-rendering"
    ],
    [
      "stopColor",
      "stop-color"
    ],
    [
      "stopOpacity",
      "stop-opacity"
    ],
    [
      "strikethroughPosition",
      "strikethrough-position"
    ],
    [
      "strikethroughThickness",
      "strikethrough-thickness"
    ],
    [
      "strokeDasharray",
      "stroke-dasharray"
    ],
    [
      "strokeDashoffset",
      "stroke-dashoffset"
    ],
    [
      "strokeLinecap",
      "stroke-linecap"
    ],
    [
      "strokeLinejoin",
      "stroke-linejoin"
    ],
    [
      "strokeMiterlimit",
      "stroke-miterlimit"
    ],
    [
      "strokeOpacity",
      "stroke-opacity"
    ],
    [
      "strokeWidth",
      "stroke-width"
    ],
    [
      "textAnchor",
      "text-anchor"
    ],
    [
      "textDecoration",
      "text-decoration"
    ],
    [
      "textRendering",
      "text-rendering"
    ],
    [
      "transformOrigin",
      "transform-origin"
    ],
    [
      "underlinePosition",
      "underline-position"
    ],
    [
      "underlineThickness",
      "underline-thickness"
    ],
    [
      "unicodeBidi",
      "unicode-bidi"
    ],
    [
      "unicodeRange",
      "unicode-range"
    ],
    [
      "unitsPerEm",
      "units-per-em"
    ],
    [
      "vAlphabetic",
      "v-alphabetic"
    ],
    [
      "vHanging",
      "v-hanging"
    ],
    [
      "vIdeographic",
      "v-ideographic"
    ],
    [
      "vMathematical",
      "v-mathematical"
    ],
    [
      "vectorEffect",
      "vector-effect"
    ],
    [
      "vertAdvY",
      "vert-adv-y"
    ],
    [
      "vertOriginX",
      "vert-origin-x"
    ],
    [
      "vertOriginY",
      "vert-origin-y"
    ],
    [
      "wordSpacing",
      "word-spacing"
    ],
    [
      "writingMode",
      "writing-mode"
    ],
    [
      "xmlnsXlink",
      "xmlns:xlink"
    ],
    [
      "xHeight",
      "x-height"
    ]
  ]), Dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cn(l2) {
    return Dh.test("" + l2) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l2;
  }
  var ac = null;
  function wc(l2) {
    return l2 = l2.target || l2.srcElement || globalThis, l2.correspondingUseElement && (l2 = l2.correspondingUseElement), l2.nodeType === 3 ? l2.parentNode : l2;
  }
  var ca = null, za = null;
  function pe2(l2) {
    var u2 = Ga(l2);
    if (u2 && (l2 = u2.stateNode)) {
      var a2 = l2[Sl] || null;
      l: switch (l2 = u2.stateNode, u2.type) {
        case "input":
          if (lc(l2, a2.value, a2.defaultValue, a2.defaultValue, a2.checked, a2.defaultChecked, a2.type, a2.name), u2 = a2.name, a2.type === "radio" && u2 != null) {
            for (a2 = l2; a2.parentNode; ) a2 = a2.parentNode;
            for (a2 = a2.querySelectorAll('input[name="' + ql("" + u2) + '"][type="radio"]'), u2 = 0; u2 < a2.length; u2++) {
              var t = a2[u2];
              if (t !== l2 && t.form === l2.form) {
                var n2 = t[Sl] || null;
                if (!n2) throw Error(A2(90));
                lc(t, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name);
              }
            }
            for (u2 = 0; u2 < a2.length; u2++) t = a2[u2], t.form === l2.form && M0(t);
          }
          break l;
        case "textarea":
          D0(l2, a2.value, a2.defaultValue);
          break l;
        case "select":
          u2 = a2.value, u2 != null && ba(l2, !!a2.multiple, u2, false);
      }
    }
  }
  var Tf = false;
  function U0(l2, u2, a2) {
    if (Tf) return l2(u2, a2);
    Tf = true;
    try {
      var t = l2(u2);
      return t;
    } finally {
      if (Tf = false, (ca !== null || za !== null) && (ff(), ca && (u2 = ca, l2 = za, za = ca = null, pe2(u2), l2))) for (u2 = 0; u2 < l2.length; u2++) pe2(l2[u2]);
    }
  }
  function St(l2, u2) {
    var a2 = l2.stateNode;
    if (a2 === null) return null;
    var t = a2[Sl] || null;
    if (t === null) return null;
    a2 = t[u2];
    l: switch (u2) {
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
        (t = !t.disabled) || (l2 = l2.type, t = !(l2 === "button" || l2 === "input" || l2 === "select" || l2 === "textarea")), l2 = !t;
        break l;
      default:
        l2 = false;
    }
    if (l2) return null;
    if (a2 && typeof a2 != "function") throw Error(A2(231, u2, typeof a2));
    return a2;
  }
  var uu = !(typeof globalThis > "u" || typeof globalThis.document > "u" || typeof globalThis.document.createElement > "u"), tc = false;
  if (uu) try {
    ru = {}, Object.defineProperty(ru, "passive", {
      get: function() {
        tc = true;
      }
    }), globalThis.addEventListener("test", ru, ru), globalThis.removeEventListener("test", ru, ru);
  } catch {
    tc = false;
  }
  var ru, bu = null, $c = null, en = null;
  function H0() {
    if (en) return en;
    var l2, u2 = $c, a2 = u2.length, t, n2 = "value" in bu ? bu.value : bu.textContent, f2 = n2.length;
    for (l2 = 0; l2 < a2 && u2[l2] === n2[l2]; l2++) ;
    var c = a2 - l2;
    for (t = 1; t <= c && u2[a2 - t] === n2[f2 - t]; t++) ;
    return en = n2.slice(l2, 1 < t ? 1 - t : void 0);
  }
  function vn(l2) {
    var u2 = l2.keyCode;
    return "charCode" in l2 ? (l2 = l2.charCode, l2 === 0 && u2 === 13 && (l2 = 13)) : l2 = u2, l2 === 10 && (l2 = 13), 32 <= l2 || l2 === 13 ? l2 : 0;
  }
  function Wt() {
    return true;
  }
  function Je() {
    return false;
  }
  function ml(l2) {
    function u2(a2, t, n2, f2, c) {
      this._reactName = a2, this._targetInst = n2, this.type = t, this.nativeEvent = f2, this.target = c, this.currentTarget = null;
      for (var e in l2) l2.hasOwnProperty(e) && (a2 = l2[e], this[e] = a2 ? a2(f2) : f2[e]);
      return this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? Wt : Je, this.isPropagationStopped = Je, this;
    }
    return j3(u2.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue != "unknown" && (a2.returnValue = false), this.isDefaultPrevented = Wt);
      },
      stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble != "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = Wt);
      },
      persist: function() {
      },
      isPersistent: Wt
    }), u2;
  }
  var $u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l2) {
      return l2.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = ml($u), Yt = j3({}, $u, {
    view: 0,
    detail: 0
  }), Oh = ml(Yt), Mf, Ef, Ka, rn = j3({}, Yt, {
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
    getModifierState: Fc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l2) {
      return l2.relatedTarget === void 0 ? l2.fromElement === l2.srcElement ? l2.toElement : l2.fromElement : l2.relatedTarget;
    },
    movementX: function(l2) {
      return "movementX" in l2 ? l2.movementX : (l2 !== Ka && (Ka && l2.type === "mousemove" ? (Mf = l2.screenX - Ka.screenX, Ef = l2.screenY - Ka.screenY) : Ef = Mf = 0, Ka = l2), Mf);
    },
    movementY: function(l2) {
      return "movementY" in l2 ? l2.movementY : Ef;
    }
  }), We2 = ml(rn), sh = j3({}, rn, {
    dataTransfer: 0
  }), Uh = ml(sh), Hh = j3({}, Yt, {
    relatedTarget: 0
  }), Df = ml(Hh), Nh = j3({}, $u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qh = ml(Nh), Bh = j3({}, $u, {
    clipboardData: function(l2) {
      return "clipboardData" in l2 ? l2.clipboardData : globalThis.clipboardData;
    }
  }), Rh = ml(Bh), Yh = j3({}, $u, {
    data: 0
  }), we3 = ml(Yh), oh = {
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
    MozPrintableKey: "Unidentified"
  }, _h = {
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
    224: "Meta"
  }, Xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gh(l2) {
    var u2 = this.nativeEvent;
    return u2.getModifierState ? u2.getModifierState(l2) : (l2 = Xh[l2]) ? !!u2[l2] : false;
  }
  function Fc() {
    return Gh;
  }
  var Qh = j3({}, Yt, {
    key: function(l2) {
      if (l2.key) {
        var u2 = oh[l2.key] || l2.key;
        if (u2 !== "Unidentified") return u2;
      }
      return l2.type === "keypress" ? (l2 = vn(l2), l2 === 13 ? "Enter" : String.fromCharCode(l2)) : l2.type === "keydown" || l2.type === "keyup" ? _h[l2.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fc,
    charCode: function(l2) {
      return l2.type === "keypress" ? vn(l2) : 0;
    },
    keyCode: function(l2) {
      return l2.type === "keydown" || l2.type === "keyup" ? l2.keyCode : 0;
    },
    which: function(l2) {
      return l2.type === "keypress" ? vn(l2) : l2.type === "keydown" || l2.type === "keyup" ? l2.keyCode : 0;
    }
  }), Zh = ml(Qh), xh = j3({}, rn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $e2 = ml(xh), Vh = j3({}, Yt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc
  }), jh = ml(Vh), Kh = j3({}, $u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = ml(Kh), Lh = j3({}, rn, {
    deltaX: function(l2) {
      return "deltaX" in l2 ? l2.deltaX : "wheelDeltaX" in l2 ? -l2.wheelDeltaX : 0;
    },
    deltaY: function(l2) {
      return "deltaY" in l2 ? l2.deltaY : "wheelDeltaY" in l2 ? -l2.wheelDeltaY : "wheelDelta" in l2 ? -l2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ph = ml(Lh), Jh = j3({}, $u, {
    newState: 0,
    oldState: 0
  }), Wh = ml(Jh), wh = [
    9,
    13,
    27,
    32
  ], kc = uu && "CompositionEvent" in globalThis, Ia = null;
  uu && "documentMode" in document && (Ia = document.documentMode);
  var $h = uu && "TextEvent" in globalThis && !Ia, N0 = uu && (!kc || Ia && 8 < Ia && 11 >= Ia), Fe = " ", ke3 = false;
  function q0(l2, u2) {
    switch (l2) {
      case "keyup":
        return wh.indexOf(u2.keyCode) !== -1;
      case "keydown":
        return u2.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function B0(l2) {
    return l2 = l2.detail, typeof l2 == "object" && "data" in l2 ? l2.data : null;
  }
  var ea = false;
  function Fh(l2, u2) {
    switch (l2) {
      case "compositionend":
        return B0(u2);
      case "keypress":
        return u2.which !== 32 ? null : (ke3 = true, Fe);
      case "textInput":
        return l2 = u2.data, l2 === Fe && ke3 ? null : l2;
      default:
        return null;
    }
  }
  function kh(l2, u2) {
    if (ea) return l2 === "compositionend" || !kc && q0(l2, u2) ? (l2 = H0(), en = $c = bu = null, ea = false, l2) : null;
    switch (l2) {
      case "paste":
        return null;
      case "keypress":
        if (!(u2.ctrlKey || u2.altKey || u2.metaKey) || u2.ctrlKey && u2.altKey) {
          if (u2.char && 1 < u2.char.length) return u2.char;
          if (u2.which) return String.fromCharCode(u2.which);
        }
        return null;
      case "compositionend":
        return N0 && u2.locale !== "ko" ? null : u2.data;
      default:
        return null;
    }
  }
  var rh = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function re2(l2) {
    var u2 = l2 && l2.nodeName && l2.nodeName.toLowerCase();
    return u2 === "input" ? !!rh[l2.type] : u2 === "textarea";
  }
  function R0(l2, u2, a2, t) {
    ca ? za ? za.push(t) : za = [
      t
    ] : ca = t, u2 = Cn(u2, "onChange"), 0 < u2.length && (a2 = new kn("onChange", "change", null, a2, t), l2.push({
      event: a2,
      listeners: u2
    }));
  }
  var Pa = null, mt = null;
  function Ih(l2) {
    Dv(l2, 0);
  }
  function In(l2) {
    var u2 = ka(l2);
    if (M0(u2)) return l2;
  }
  function Ie2(l2, u2) {
    if (l2 === "change") return u2;
  }
  var Y0 = false;
  uu && (uu ? ($t = "oninput" in document, $t || (Of = document.createElement("div"), Of.setAttribute("oninput", "return;"), $t = typeof Of.oninput == "function"), wt = $t) : wt = false, Y0 = wt && (!document.documentMode || 9 < document.documentMode));
  var wt, $t, Of;
  function Pe3() {
    Pa && (Pa.detachEvent("onpropertychange", o0), mt = Pa = null);
  }
  function o0(l2) {
    if (l2.propertyName === "value" && In(mt)) {
      var u2 = [];
      R0(u2, mt, l2, wc(l2)), U0(Ih, u2);
    }
  }
  function Ph(l2, u2, a2) {
    l2 === "focusin" ? (Pe3(), Pa = u2, mt = a2, Pa.attachEvent("onpropertychange", o0)) : l2 === "focusout" && Pe3();
  }
  function ly(l2) {
    if (l2 === "selectionchange" || l2 === "keyup" || l2 === "keydown") return In(mt);
  }
  function uy(l2, u2) {
    if (l2 === "click") return In(u2);
  }
  function ay(l2, u2) {
    if (l2 === "input" || l2 === "change") return In(u2);
  }
  function ty(l2, u2) {
    return l2 === u2 && (l2 !== 0 || 1 / l2 === 1 / u2) || l2 !== l2 && u2 !== u2;
  }
  var Ol = typeof Object.is == "function" ? Object.is : ty;
  function gt(l2, u2) {
    if (Ol(l2, u2)) return true;
    if (typeof l2 != "object" || l2 === null || typeof u2 != "object" || u2 === null) return false;
    var a2 = Object.keys(l2), t = Object.keys(u2);
    if (a2.length !== t.length) return false;
    for (t = 0; t < a2.length; t++) {
      var n2 = a2[t];
      if (!If.call(u2, n2) || !Ol(l2[n2], u2[n2])) return false;
    }
    return true;
  }
  function li(l2) {
    for (; l2 && l2.firstChild; ) l2 = l2.firstChild;
    return l2;
  }
  function ui(l2, u2) {
    var a2 = li(l2);
    l2 = 0;
    for (var t; a2; ) {
      if (a2.nodeType === 3) {
        if (t = l2 + a2.textContent.length, l2 <= u2 && t >= u2) return {
          node: a2,
          offset: u2 - l2
        };
        l2 = t;
      }
      l: {
        for (; a2; ) {
          if (a2.nextSibling) {
            a2 = a2.nextSibling;
            break l;
          }
          a2 = a2.parentNode;
        }
        a2 = void 0;
      }
      a2 = li(a2);
    }
  }
  function _0(l2, u2) {
    return l2 && u2 ? l2 === u2 ? true : l2 && l2.nodeType === 3 ? false : u2 && u2.nodeType === 3 ? _0(l2, u2.parentNode) : "contains" in l2 ? l2.contains(u2) : l2.compareDocumentPosition ? !!(l2.compareDocumentPosition(u2) & 16) : false : false;
  }
  function X0(l2) {
    l2 = l2 != null && l2.ownerDocument != null && l2.ownerDocument.defaultView != null ? l2.ownerDocument.defaultView : globalThis;
    for (var u2 = sn(l2.document); u2 instanceof l2.HTMLIFrameElement; ) {
      try {
        var a2 = typeof u2.contentWindow.location.href == "string";
      } catch {
        a2 = false;
      }
      if (a2) l2 = u2.contentWindow;
      else break;
      u2 = sn(l2.document);
    }
    return u2;
  }
  function rc(l2) {
    var u2 = l2 && l2.nodeName && l2.nodeName.toLowerCase();
    return u2 && (u2 === "input" && (l2.type === "text" || l2.type === "search" || l2.type === "tel" || l2.type === "url" || l2.type === "password") || u2 === "textarea" || l2.contentEditable === "true");
  }
  var ny = uu && "documentMode" in document && 11 >= document.documentMode, ia = null, nc = null, lt = null, fc = false;
  function ai(l2, u2, a2) {
    var t = a2.window === a2 ? a2.document : a2.nodeType === 9 ? a2 : a2.ownerDocument;
    fc || ia == null || ia !== sn(t) || (t = ia, "selectionStart" in t && rc(t) ? t = {
      start: t.selectionStart,
      end: t.selectionEnd
    } : (t = (t.ownerDocument && t.ownerDocument.defaultView || globalThis).getSelection(), t = {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    }), lt && gt(lt, t) || (lt = t, t = Cn(nc, "onSelect"), 0 < t.length && (u2 = new kn("onSelect", "select", null, u2, a2), l2.push({
      event: u2,
      listeners: t
    }), u2.target = ia)));
  }
  function ou(l2, u2) {
    var a2 = {};
    return a2[l2.toLowerCase()] = u2.toLowerCase(), a2["Webkit" + l2] = "webkit" + u2, a2["Moz" + l2] = "moz" + u2, a2;
  }
  var va = {
    animationend: ou("Animation", "AnimationEnd"),
    animationiteration: ou("Animation", "AnimationIteration"),
    animationstart: ou("Animation", "AnimationStart"),
    transitionrun: ou("Transition", "TransitionRun"),
    transitionstart: ou("Transition", "TransitionStart"),
    transitioncancel: ou("Transition", "TransitionCancel"),
    transitionend: ou("Transition", "TransitionEnd")
  }, sf = {}, G0 = {};
  uu && (G0 = document.createElement("div").style, "AnimationEvent" in globalThis || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in globalThis || delete va.transitionend.transition);
  function Fu(l2) {
    if (sf[l2]) return sf[l2];
    if (!va[l2]) return l2;
    var u2 = va[l2], a2;
    for (a2 in u2) if (u2.hasOwnProperty(a2) && a2 in G0) return sf[l2] = u2[a2];
    return l2;
  }
  var Q0 = Fu("animationend"), Z0 = Fu("animationiteration"), x0 = Fu("animationstart"), fy = Fu("transitionrun"), cy = Fu("transitionstart"), ey = Fu("transitioncancel"), V0 = Fu("transitionend"), j0 = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cc.push("scrollEnd");
  function Gl(l2, u2) {
    j0.set(l2, u2), wu(u2, [
      l2
    ]);
  }
  var ti = /* @__PURE__ */ new WeakMap();
  function Bl(l2, u2) {
    if (typeof l2 == "object" && l2 !== null) {
      var a2 = ti.get(l2);
      return a2 !== void 0 ? a2 : (u2 = {
        value: l2,
        source: u2,
        stack: Ce2(u2)
      }, ti.set(l2, u2), u2);
    }
    return {
      value: l2,
      source: u2,
      stack: Ce2(u2)
    };
  }
  var sl = [], ha = 0, Ic = 0;
  function Pn() {
    for (var l2 = ha, u2 = Ic = ha = 0; u2 < l2; ) {
      var a2 = sl[u2];
      sl[u2++] = null;
      var t = sl[u2];
      sl[u2++] = null;
      var n2 = sl[u2];
      sl[u2++] = null;
      var f2 = sl[u2];
      if (sl[u2++] = null, t !== null && n2 !== null) {
        var c = t.pending;
        c === null ? n2.next = n2 : (n2.next = c.next, c.next = n2), t.pending = n2;
      }
      f2 !== 0 && K0(a2, n2, f2);
    }
  }
  function lf(l2, u2, a2, t) {
    sl[ha++] = l2, sl[ha++] = u2, sl[ha++] = a2, sl[ha++] = t, Ic |= t, l2.lanes |= t, l2 = l2.alternate, l2 !== null && (l2.lanes |= t);
  }
  function Pc(l2, u2, a2, t) {
    return lf(l2, u2, a2, t), Un(l2);
  }
  function Qa(l2, u2) {
    return lf(l2, null, null, u2), Un(l2);
  }
  function K0(l2, u2, a2) {
    l2.lanes |= a2;
    var t = l2.alternate;
    t !== null && (t.lanes |= a2);
    for (var n2 = false, f2 = l2.return; f2 !== null; ) f2.childLanes |= a2, t = f2.alternate, t !== null && (t.childLanes |= a2), f2.tag === 22 && (l2 = f2.stateNode, l2 === null || l2._visibility & 1 || (n2 = true)), l2 = f2, f2 = f2.return;
    return l2.tag === 3 ? (f2 = l2.stateNode, n2 && u2 !== null && (n2 = 31 - Ml(a2), l2 = f2.hiddenUpdates, t = l2[n2], t === null ? l2[n2] = [
      u2
    ] : t.push(u2), u2.lane = a2 | 536870912), f2) : null;
  }
  function Un(l2) {
    if (50 < ht) throw ht = 0, Nc = null, Error(A2(185));
    for (var u2 = l2.return; u2 !== null; ) l2 = u2, u2 = l2.return;
    return l2.tag === 3 ? l2.stateNode : null;
  }
  var ya = {};
  function iy(l2, u2, a2, t) {
    this.tag = l2, this.key = a2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Al(l2, u2, a2, t) {
    return new iy(l2, u2, a2, t);
  }
  function le2(l2) {
    return l2 = l2.prototype, !(!l2 || !l2.isReactComponent);
  }
  function Pl(l2, u2) {
    var a2 = l2.alternate;
    return a2 === null ? (a2 = Al(l2.tag, u2, l2.key, l2.mode), a2.elementType = l2.elementType, a2.type = l2.type, a2.stateNode = l2.stateNode, a2.alternate = l2, l2.alternate = a2) : (a2.pendingProps = u2, a2.type = l2.type, a2.flags = 0, a2.subtreeFlags = 0, a2.deletions = null), a2.flags = l2.flags & 65011712, a2.childLanes = l2.childLanes, a2.lanes = l2.lanes, a2.child = l2.child, a2.memoizedProps = l2.memoizedProps, a2.memoizedState = l2.memoizedState, a2.updateQueue = l2.updateQueue, u2 = l2.dependencies, a2.dependencies = u2 === null ? null : {
      lanes: u2.lanes,
      firstContext: u2.firstContext
    }, a2.sibling = l2.sibling, a2.index = l2.index, a2.ref = l2.ref, a2.refCleanup = l2.refCleanup, a2;
  }
  function C0(l2, u2) {
    l2.flags &= 65011714;
    var a2 = l2.alternate;
    return a2 === null ? (l2.childLanes = 0, l2.lanes = u2, l2.child = null, l2.subtreeFlags = 0, l2.memoizedProps = null, l2.memoizedState = null, l2.updateQueue = null, l2.dependencies = null, l2.stateNode = null) : (l2.childLanes = a2.childLanes, l2.lanes = a2.lanes, l2.child = a2.child, l2.subtreeFlags = 0, l2.deletions = null, l2.memoizedProps = a2.memoizedProps, l2.memoizedState = a2.memoizedState, l2.updateQueue = a2.updateQueue, l2.type = a2.type, u2 = a2.dependencies, l2.dependencies = u2 === null ? null : {
      lanes: u2.lanes,
      firstContext: u2.firstContext
    }), l2;
  }
  function hn(l2, u2, a2, t, n2, f2) {
    var c = 0;
    if (t = l2, typeof l2 == "function") le2(l2) && (c = 1);
    else if (typeof l2 == "string") c = id(l2, a2, Vl.current) ? 26 : l2 === "html" || l2 === "head" || l2 === "body" ? 27 : 5;
    else l: switch (l2) {
      case $f:
        return l2 = Al(31, a2, u2, n2), l2.elementType = $f, l2.lanes = f2, l2;
      case ta:
        return Zu(a2.children, n2, f2, u2);
      case e0:
        c = 8, n2 |= 24;
        break;
      case Jf:
        return l2 = Al(12, a2, u2, n2 | 2), l2.elementType = Jf, l2.lanes = f2, l2;
      case Wf:
        return l2 = Al(13, a2, u2, n2), l2.elementType = Wf, l2.lanes = f2, l2;
      case wf:
        return l2 = Al(19, a2, u2, n2), l2.elementType = wf, l2.lanes = f2, l2;
      default:
        if (typeof l2 == "object" && l2 !== null) switch (l2.$$typeof) {
          case Iv:
          case $l:
            c = 10;
            break l;
          case i0:
            c = 9;
            break l;
          case jc:
            c = 11;
            break l;
          case Kc:
            c = 14;
            break l;
          case vu:
            c = 16, t = null;
            break l;
        }
        c = 29, a2 = Error(A2(130, l2 === null ? "null" : typeof l2, "")), t = null;
    }
    return u2 = Al(c, a2, u2, n2), u2.elementType = l2, u2.type = t, u2.lanes = f2, u2;
  }
  function Zu(l2, u2, a2, t) {
    return l2 = Al(7, l2, t, u2), l2.lanes = a2, l2;
  }
  function Uf(l2, u2, a2) {
    return l2 = Al(6, l2, null, u2), l2.lanes = a2, l2;
  }
  function Hf(l2, u2, a2) {
    return u2 = Al(4, l2.children !== null ? l2.children : [], l2.key, u2), u2.lanes = a2, u2.stateNode = {
      containerInfo: l2.containerInfo,
      pendingChildren: null,
      implementation: l2.implementation
    }, u2;
  }
  var da = [], Sa = 0, Hn = null, Nn = 0, Hl = [], Nl = 0, xu = null, Fl = 1, kl = "";
  function Xu(l2, u2) {
    da[Sa++] = Nn, da[Sa++] = Hn, Hn = l2, Nn = u2;
  }
  function L0(l2, u2, a2) {
    Hl[Nl++] = Fl, Hl[Nl++] = kl, Hl[Nl++] = xu, xu = l2;
    var t = Fl;
    l2 = kl;
    var n2 = 32 - Ml(t) - 1;
    t &= ~(1 << n2), a2 += 1;
    var f2 = 32 - Ml(u2) + n2;
    if (30 < f2) {
      var c = n2 - n2 % 5;
      f2 = (t & (1 << c) - 1).toString(32), t >>= c, n2 -= c, Fl = 1 << 32 - Ml(u2) + n2 | a2 << n2 | t, kl = f2 + l2;
    } else Fl = 1 << f2 | a2 << n2 | t, kl = l2;
  }
  function ue2(l2) {
    l2.return !== null && (Xu(l2, 1), L0(l2, 1, 0));
  }
  function ae3(l2) {
    for (; l2 === Hn; ) Hn = da[--Sa], da[Sa] = null, Nn = da[--Sa], da[Sa] = null;
    for (; l2 === xu; ) xu = Hl[--Nl], Hl[Nl] = null, kl = Hl[--Nl], Hl[Nl] = null, Fl = Hl[--Nl], Hl[Nl] = null;
  }
  var vl = null, p3 = null, Y3 = false, Vu = null, Zl = false, ec = Error(A2(519));
  function Lu(l2) {
    var u2 = Error(A2(418, ""));
    throw bt(Bl(u2, l2)), ec;
  }
  function ni(l2) {
    var u2 = l2.stateNode, a2 = l2.type, t = l2.memoizedProps;
    switch (u2[el] = l2, u2[Sl] = t, a2) {
      case "dialog":
        N2("cancel", u2), N2("close", u2);
        break;
      case "iframe":
      case "object":
      case "embed":
        N2("load", u2);
        break;
      case "video":
      case "audio":
        for (a2 = 0; a2 < Tt.length; a2++) N2(Tt[a2], u2);
        break;
      case "source":
        N2("error", u2);
        break;
      case "img":
      case "image":
      case "link":
        N2("error", u2), N2("load", u2);
        break;
      case "details":
        N2("toggle", u2);
        break;
      case "input":
        N2("invalid", u2), E0(u2, t.value, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name, true), On(u2);
        break;
      case "select":
        N2("invalid", u2);
        break;
      case "textarea":
        N2("invalid", u2), O0(u2, t.value, t.defaultValue, t.children), On(u2);
    }
    a2 = t.children, typeof a2 != "string" && typeof a2 != "number" && typeof a2 != "bigint" || u2.textContent === "" + a2 || t.suppressHydrationWarning === true || sv(u2.textContent, a2) ? (t.popover != null && (N2("beforetoggle", u2), N2("toggle", u2)), t.onScroll != null && N2("scroll", u2), t.onScrollEnd != null && N2("scrollend", u2), t.onClick != null && (u2.onclick = vf), u2 = true) : u2 = false, u2 || Lu(l2);
  }
  function fi(l2) {
    for (vl = l2.return; vl; ) switch (vl.tag) {
      case 5:
      case 13:
        Zl = false;
        return;
      case 27:
      case 3:
        Zl = true;
        return;
      default:
        vl = vl.return;
    }
  }
  function Ca(l2) {
    if (l2 !== vl) return false;
    if (!Y3) return fi(l2), Y3 = true, false;
    var u2 = l2.tag, a2;
    if ((a2 = u2 !== 3 && u2 !== 27) && ((a2 = u2 === 5) && (a2 = l2.type, a2 = !(a2 !== "form" && a2 !== "button") || _c(l2.type, l2.memoizedProps)), a2 = !a2), a2 && p3 && Lu(l2), fi(l2), u2 === 13) {
      if (l2 = l2.memoizedState, l2 = l2 !== null ? l2.dehydrated : null, !l2) throw Error(A2(317));
      l: {
        for (l2 = l2.nextSibling, u2 = 0; l2; ) {
          if (l2.nodeType === 8) if (a2 = l2.data, a2 === "/$") {
            if (u2 === 0) {
              p3 = Xl(l2.nextSibling);
              break l;
            }
            u2--;
          } else a2 !== "$" && a2 !== "$!" && a2 !== "$?" || u2++;
          l2 = l2.nextSibling;
        }
        p3 = null;
      }
    } else u2 === 27 ? (u2 = p3, Yu(l2.type) ? (l2 = Qc, Qc = null, p3 = l2) : p3 = u2) : p3 = vl ? Xl(l2.stateNode.nextSibling) : null;
    return true;
  }
  function ot() {
    p3 = vl = null, Y3 = false;
  }
  function ci() {
    var l2 = Vu;
    return l2 !== null && (dl === null ? dl = l2 : dl.push.apply(dl, l2), Vu = null), l2;
  }
  function bt(l2) {
    Vu === null ? Vu = [
      l2
    ] : Vu.push(l2);
  }
  var ic = Cl(null), ku = null, rl = null;
  function yu(l2, u2, a2) {
    C3(ic, u2._currentValue), u2._currentValue = a2;
  }
  function lu(l2) {
    l2._currentValue = ic.current, tl(ic);
  }
  function vc(l2, u2, a2) {
    for (; l2 !== null; ) {
      var t = l2.alternate;
      if ((l2.childLanes & u2) !== u2 ? (l2.childLanes |= u2, t !== null && (t.childLanes |= u2)) : t !== null && (t.childLanes & u2) !== u2 && (t.childLanes |= u2), l2 === a2) break;
      l2 = l2.return;
    }
  }
  function hc(l2, u2, a2, t) {
    var n2 = l2.child;
    for (n2 !== null && (n2.return = l2); n2 !== null; ) {
      var f2 = n2.dependencies;
      if (f2 !== null) {
        var c = n2.child;
        f2 = f2.firstContext;
        l: for (; f2 !== null; ) {
          var e = f2;
          f2 = n2;
          for (var i2 = 0; i2 < u2.length; i2++) if (e.context === u2[i2]) {
            f2.lanes |= a2, e = f2.alternate, e !== null && (e.lanes |= a2), vc(f2.return, a2, l2), t || (c = null);
            break l;
          }
          f2 = e.next;
        }
      } else if (n2.tag === 18) {
        if (c = n2.return, c === null) throw Error(A2(341));
        c.lanes |= a2, f2 = c.alternate, f2 !== null && (f2.lanes |= a2), vc(c, a2, l2), c = null;
      } else c = n2.child;
      if (c !== null) c.return = n2;
      else for (c = n2; c !== null; ) {
        if (c === l2) {
          c = null;
          break;
        }
        if (n2 = c.sibling, n2 !== null) {
          n2.return = c.return, c = n2;
          break;
        }
        c = c.return;
      }
      n2 = c;
    }
  }
  function _t(l2, u2, a2, t) {
    l2 = null;
    for (var n2 = u2, f2 = false; n2 !== null; ) {
      if (!f2) {
        if ((n2.flags & 524288) !== 0) f2 = true;
        else if ((n2.flags & 262144) !== 0) break;
      }
      if (n2.tag === 10) {
        var c = n2.alternate;
        if (c === null) throw Error(A2(387));
        if (c = c.memoizedProps, c !== null) {
          var e = n2.type;
          Ol(n2.pendingProps.value, c.value) || (l2 !== null ? l2.push(e) : l2 = [
            e
          ]);
        }
      } else if (n2 === Tn.current) {
        if (c = n2.alternate, c === null) throw Error(A2(387));
        c.memoizedState.memoizedState !== n2.memoizedState.memoizedState && (l2 !== null ? l2.push(Dt) : l2 = [
          Dt
        ]);
      }
      n2 = n2.return;
    }
    l2 !== null && hc(u2, l2, a2, t), u2.flags |= 262144;
  }
  function qn(l2) {
    for (l2 = l2.firstContext; l2 !== null; ) {
      if (!Ol(l2.context._currentValue, l2.memoizedValue)) return true;
      l2 = l2.next;
    }
    return false;
  }
  function pu(l2) {
    ku = l2, rl = null, l2 = l2.dependencies, l2 !== null && (l2.firstContext = null);
  }
  function il(l2) {
    return p0(ku, l2);
  }
  function Ft(l2, u2) {
    return ku === null && pu(l2), p0(l2, u2);
  }
  function p0(l2, u2) {
    var a2 = u2._currentValue;
    if (u2 = {
      context: u2,
      memoizedValue: a2,
      next: null
    }, rl === null) {
      if (l2 === null) throw Error(A2(308));
      rl = u2, l2.dependencies = {
        lanes: 0,
        firstContext: u2
      }, l2.flags |= 524288;
    } else rl = rl.next = u2;
    return a2;
  }
  var vy = typeof AbortController < "u" ? AbortController : function() {
    var l2 = [], u2 = this.signal = {
      aborted: false,
      addEventListener: function(a2, t) {
        l2.push(t);
      }
    };
    this.abort = function() {
      u2.aborted = true, l2.forEach(function(a2) {
        return a2();
      });
    };
  }, hy = I2.unstable_scheduleCallback, yy = I2.unstable_NormalPriority, k4 = {
    $$typeof: $l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function te() {
    return {
      controller: new vy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xt(l2) {
    l2.refCount--, l2.refCount === 0 && hy(yy, function() {
      l2.controller.abort();
    });
  }
  var ut = null, yc = 0, Ha = 0, Aa = null;
  function dy(l2, u2) {
    if (ut === null) {
      var a2 = ut = [];
      yc = 0, Ha = He2(), Aa = {
        status: "pending",
        value: void 0,
        then: function(t) {
          a2.push(t);
        }
      };
    }
    return yc++, u2.then(ei, ei), u2;
  }
  function ei() {
    if (--yc === 0 && ut !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var l2 = ut;
      ut = null, Ha = 0, Aa = null;
      for (var u2 = 0; u2 < l2.length; u2++) (0, l2[u2])();
    }
  }
  function Sy(l2, u2) {
    var a2 = [], t = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n2) {
        a2.push(n2);
      }
    };
    return l2.then(function() {
      t.status = "fulfilled", t.value = u2;
      for (var n2 = 0; n2 < a2.length; n2++) (0, a2[n2])(u2);
    }, function(n2) {
      for (t.status = "rejected", t.reason = n2, n2 = 0; n2 < a2.length; n2++) (0, a2[n2])(void 0);
    }), t;
  }
  var ii = s.S;
  s.S = function(l2, u2) {
    typeof u2 == "object" && u2 !== null && typeof u2.then == "function" && dy(l2, u2), ii !== null && ii(l2, u2);
  };
  var ju = Cl(null);
  function ne() {
    var l2 = ju.current;
    return l2 !== null ? l2 : V2.pooledCache;
  }
  function yn(l2, u2) {
    u2 === null ? C3(ju, ju.current) : C3(ju, u2.pool);
  }
  function J0() {
    var l2 = ne();
    return l2 === null ? null : {
      parent: k4._currentValue,
      pool: l2
    };
  }
  var Gt = Error(A2(460)), W0 = Error(A2(474)), uf = Error(A2(542)), dc = {
    then: function() {
    }
  };
  function vi(l2) {
    return l2 = l2.status, l2 === "fulfilled" || l2 === "rejected";
  }
  function kt() {
  }
  function w0(l2, u2, a2) {
    switch (a2 = l2[a2], a2 === void 0 ? l2.push(u2) : a2 !== u2 && (u2.then(kt, kt), u2 = a2), u2.status) {
      case "fulfilled":
        return u2.value;
      case "rejected":
        throw l2 = u2.reason, yi(l2), l2;
      default:
        if (typeof u2.status == "string") u2.then(kt, kt);
        else {
          if (l2 = V2, l2 !== null && 100 < l2.shellSuspendCounter) throw Error(A2(482));
          l2 = u2, l2.status = "pending", l2.then(function(t) {
            if (u2.status === "pending") {
              var n2 = u2;
              n2.status = "fulfilled", n2.value = t;
            }
          }, function(t) {
            if (u2.status === "pending") {
              var n2 = u2;
              n2.status = "rejected", n2.reason = t;
            }
          });
        }
        switch (u2.status) {
          case "fulfilled":
            return u2.value;
          case "rejected":
            throw l2 = u2.reason, yi(l2), l2;
        }
        throw at = u2, Gt;
    }
  }
  var at = null;
  function hi() {
    if (at === null) throw Error(A2(459));
    var l2 = at;
    return at = null, l2;
  }
  function yi(l2) {
    if (l2 === Gt || l2 === uf) throw Error(A2(483));
  }
  var hu = false;
  function fe2(l2) {
    l2.updateQueue = {
      baseState: l2.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Sc(l2, u2) {
    l2 = l2.updateQueue, u2.updateQueue === l2 && (u2.updateQueue = {
      baseState: l2.baseState,
      firstBaseUpdate: l2.firstBaseUpdate,
      lastBaseUpdate: l2.lastBaseUpdate,
      shared: l2.shared,
      callbacks: null
    });
  }
  function Mu(l2) {
    return {
      lane: l2,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Eu(l2, u2, a2) {
    var t = l2.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (X2 & 2) !== 0) {
      var n2 = t.pending;
      return n2 === null ? u2.next = u2 : (u2.next = n2.next, n2.next = u2), t.pending = u2, u2 = Un(l2), K0(l2, null, a2), u2;
    }
    return lf(l2, t, u2, a2), Un(l2);
  }
  function tt(l2, u2, a2) {
    if (u2 = u2.updateQueue, u2 !== null && (u2 = u2.shared, (a2 & 4194048) !== 0)) {
      var t = u2.lanes;
      t &= l2.pendingLanes, a2 |= t, u2.lanes = a2, g0(l2, a2);
    }
  }
  function Nf(l2, u2) {
    var a2 = l2.updateQueue, t = l2.alternate;
    if (t !== null && (t = t.updateQueue, a2 === t)) {
      var n2 = null, f2 = null;
      if (a2 = a2.firstBaseUpdate, a2 !== null) {
        do {
          var c = {
            lane: a2.lane,
            tag: a2.tag,
            payload: a2.payload,
            callback: null,
            next: null
          };
          f2 === null ? n2 = f2 = c : f2 = f2.next = c, a2 = a2.next;
        } while (a2 !== null);
        f2 === null ? n2 = f2 = u2 : f2 = f2.next = u2;
      } else n2 = f2 = u2;
      a2 = {
        baseState: t.baseState,
        firstBaseUpdate: n2,
        lastBaseUpdate: f2,
        shared: t.shared,
        callbacks: t.callbacks
      }, l2.updateQueue = a2;
      return;
    }
    l2 = a2.lastBaseUpdate, l2 === null ? a2.firstBaseUpdate = u2 : l2.next = u2, a2.lastBaseUpdate = u2;
  }
  var mc = false;
  function nt() {
    if (mc) {
      var l2 = Aa;
      if (l2 !== null) throw l2;
    }
  }
  function ft(l2, u2, a2, t) {
    mc = false;
    var n2 = l2.updateQueue;
    hu = false;
    var f2 = n2.firstBaseUpdate, c = n2.lastBaseUpdate, e = n2.shared.pending;
    if (e !== null) {
      n2.shared.pending = null;
      var i2 = e, d2 = i2.next;
      i2.next = null, c === null ? f2 = d2 : c.next = d2, c = i2;
      var g2 = l2.alternate;
      g2 !== null && (g2 = g2.updateQueue, e = g2.lastBaseUpdate, e !== c && (e === null ? g2.firstBaseUpdate = d2 : e.next = d2, g2.lastBaseUpdate = i2));
    }
    if (f2 !== null) {
      var z4 = n2.baseState;
      c = 0, g2 = d2 = i2 = null, e = f2;
      do {
        var S3 = e.lane & -536870913, m2 = S3 !== e.lane;
        if (m2 ? (B2 & S3) === S3 : (t & S3) === S3) {
          S3 !== 0 && S3 === Ha && (mc = true), g2 !== null && (g2 = g2.next = {
            lane: 0,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l2, E4 = e;
            S3 = u2;
            var G4 = a2;
            switch (E4.tag) {
              case 1:
                if (O = E4.payload, typeof O == "function") {
                  z4 = O.call(G4, z4, S3);
                  break l;
                }
                z4 = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = E4.payload, S3 = typeof O == "function" ? O.call(G4, z4, S3) : O, S3 == null) break l;
                z4 = j3({}, z4, S3);
                break l;
              case 2:
                hu = true;
            }
          }
          S3 = e.callback, S3 !== null && (l2.flags |= 64, m2 && (l2.flags |= 8192), m2 = n2.callbacks, m2 === null ? n2.callbacks = [
            S3
          ] : m2.push(S3));
        } else m2 = {
          lane: S3,
          tag: e.tag,
          payload: e.payload,
          callback: e.callback,
          next: null
        }, g2 === null ? (d2 = g2 = m2, i2 = z4) : g2 = g2.next = m2, c |= S3;
        if (e = e.next, e === null) {
          if (e = n2.shared.pending, e === null) break;
          m2 = e, e = m2.next, m2.next = null, n2.lastBaseUpdate = m2, n2.shared.pending = null;
        }
      } while (true);
      g2 === null && (i2 = z4), n2.baseState = i2, n2.firstBaseUpdate = d2, n2.lastBaseUpdate = g2, f2 === null && (n2.shared.lanes = 0), Bu |= c, l2.lanes = c, l2.memoizedState = z4;
    }
  }
  function $0(l2, u2) {
    if (typeof l2 != "function") throw Error(A2(191, l2));
    l2.call(u2);
  }
  function F0(l2, u2) {
    var a2 = l2.callbacks;
    if (a2 !== null) for (l2.callbacks = null, l2 = 0; l2 < a2.length; l2++) $0(a2[l2], u2);
  }
  var Na = Cl(null), Bn = Cl(0);
  function di(l2, u2) {
    l2 = nu, C3(Bn, l2), C3(Na, u2), nu = l2 | u2.baseLanes;
  }
  function gc() {
    C3(Bn, nu), C3(Na, Na.current);
  }
  function ce3() {
    nu = Bn.current, tl(Na), tl(Bn);
  }
  var Nu = 0, U2 = null, Z2 = null, $2 = null, Rn = false, Ta = false, Ju = false, Yn = 0, zt = 0, Ma = null, my = 0;
  function W() {
    throw Error(A2(321));
  }
  function ee(l2, u2) {
    if (u2 === null) return false;
    for (var a2 = 0; a2 < u2.length && a2 < l2.length; a2++) if (!Ol(l2[a2], u2[a2])) return false;
    return true;
  }
  function ie2(l2, u2, a2, t, n2, f2) {
    return Nu = f2, U2 = u2, u2.memoizedState = null, u2.updateQueue = null, u2.lanes = 0, s.H = l2 === null || l2.memoizedState === null ? H1 : N1, Ju = false, f2 = a2(t, n2), Ju = false, Ta && (f2 = r0(u2, a2, t, n2)), k0(l2), f2;
  }
  function k0(l2) {
    s.H = on;
    var u2 = Z2 !== null && Z2.next !== null;
    if (Nu = 0, $2 = Z2 = U2 = null, Rn = false, zt = 0, Ma = null, u2) throw Error(A2(300));
    l2 === null || al || (l2 = l2.dependencies, l2 !== null && qn(l2) && (al = true));
  }
  function r0(l2, u2, a2, t) {
    U2 = l2;
    var n2 = 0;
    do {
      if (Ta && (Ma = null), zt = 0, Ta = false, 25 <= n2) throw Error(A2(301));
      if (n2 += 1, $2 = Z2 = null, l2.updateQueue != null) {
        var f2 = l2.updateQueue;
        f2.lastEffect = null, f2.events = null, f2.stores = null, f2.memoCache != null && (f2.memoCache.index = 0);
      }
      s.H = Ey, f2 = u2(a2, t);
    } while (Ta);
    return f2;
  }
  function gy() {
    var l2 = s.H, u2 = l2.useState()[0];
    return u2 = typeof u2.then == "function" ? Qt(u2) : u2, l2 = l2.useState()[0], (Z2 !== null ? Z2.memoizedState : null) !== l2 && (U2.flags |= 1024), u2;
  }
  function ve3() {
    var l2 = Yn !== 0;
    return Yn = 0, l2;
  }
  function he2(l2, u2, a2) {
    u2.updateQueue = l2.updateQueue, u2.flags &= -2053, l2.lanes &= ~a2;
  }
  function ye3(l2) {
    if (Rn) {
      for (l2 = l2.memoizedState; l2 !== null; ) {
        var u2 = l2.queue;
        u2 !== null && (u2.pending = null), l2 = l2.next;
      }
      Rn = false;
    }
    Nu = 0, $2 = Z2 = U2 = null, Ta = false, zt = Yn = 0, Ma = null;
  }
  function hl() {
    var l2 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $2 === null ? U2.memoizedState = $2 = l2 : $2 = $2.next = l2, $2;
  }
  function F3() {
    if (Z2 === null) {
      var l2 = U2.alternate;
      l2 = l2 !== null ? l2.memoizedState : null;
    } else l2 = Z2.next;
    var u2 = $2 === null ? U2.memoizedState : $2.next;
    if (u2 !== null) $2 = u2, Z2 = l2;
    else {
      if (l2 === null) throw U2.alternate === null ? Error(A2(467)) : Error(A2(310));
      Z2 = l2, l2 = {
        memoizedState: Z2.memoizedState,
        baseState: Z2.baseState,
        baseQueue: Z2.baseQueue,
        queue: Z2.queue,
        next: null
      }, $2 === null ? U2.memoizedState = $2 = l2 : $2 = $2.next = l2;
    }
    return $2;
  }
  function de3() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Qt(l2) {
    var u2 = zt;
    return zt += 1, Ma === null && (Ma = []), l2 = w0(Ma, l2, u2), u2 = U2, ($2 === null ? u2.memoizedState : $2.next) === null && (u2 = u2.alternate, s.H = u2 === null || u2.memoizedState === null ? H1 : N1), l2;
  }
  function af(l2) {
    if (l2 !== null && typeof l2 == "object") {
      if (typeof l2.then == "function") return Qt(l2);
      if (l2.$$typeof === $l) return il(l2);
    }
    throw Error(A2(438, String(l2)));
  }
  function Se2(l2) {
    var u2 = null, a2 = U2.updateQueue;
    if (a2 !== null && (u2 = a2.memoCache), u2 == null) {
      var t = U2.alternate;
      t !== null && (t = t.updateQueue, t !== null && (t = t.memoCache, t != null && (u2 = {
        data: t.data.map(function(n2) {
          return n2.slice();
        }),
        index: 0
      })));
    }
    if (u2 == null && (u2 = {
      data: [],
      index: 0
    }), a2 === null && (a2 = de3(), U2.updateQueue = a2), a2.memoCache = u2, a2 = u2.data[u2.index], a2 === void 0) for (a2 = u2.data[u2.index] = Array(l2), t = 0; t < l2; t++) a2[t] = Pv;
    return u2.index++, a2;
  }
  function au(l2, u2) {
    return typeof u2 == "function" ? u2(l2) : u2;
  }
  function dn(l2) {
    var u2 = F3();
    return me3(u2, Z2, l2);
  }
  function me3(l2, u2, a2) {
    var t = l2.queue;
    if (t === null) throw Error(A2(311));
    t.lastRenderedReducer = a2;
    var n2 = l2.baseQueue, f2 = t.pending;
    if (f2 !== null) {
      if (n2 !== null) {
        var c = n2.next;
        n2.next = f2.next, f2.next = c;
      }
      u2.baseQueue = n2 = f2, t.pending = null;
    }
    if (f2 = l2.baseState, n2 === null) l2.memoizedState = f2;
    else {
      u2 = n2.next;
      var e = c = null, i2 = null, d2 = u2, g2 = false;
      do {
        var z4 = d2.lane & -536870913;
        if (z4 !== d2.lane ? (B2 & z4) === z4 : (Nu & z4) === z4) {
          var S3 = d2.revertLane;
          if (S3 === 0) i2 !== null && (i2 = i2.next = {
            lane: 0,
            revertLane: 0,
            action: d2.action,
            hasEagerState: d2.hasEagerState,
            eagerState: d2.eagerState,
            next: null
          }), z4 === Ha && (g2 = true);
          else if ((Nu & S3) === S3) {
            d2 = d2.next, S3 === Ha && (g2 = true);
            continue;
          } else z4 = {
            lane: 0,
            revertLane: d2.revertLane,
            action: d2.action,
            hasEagerState: d2.hasEagerState,
            eagerState: d2.eagerState,
            next: null
          }, i2 === null ? (e = i2 = z4, c = f2) : i2 = i2.next = z4, U2.lanes |= S3, Bu |= S3;
          z4 = d2.action, Ju && a2(f2, z4), f2 = d2.hasEagerState ? d2.eagerState : a2(f2, z4);
        } else S3 = {
          lane: z4,
          revertLane: d2.revertLane,
          action: d2.action,
          hasEagerState: d2.hasEagerState,
          eagerState: d2.eagerState,
          next: null
        }, i2 === null ? (e = i2 = S3, c = f2) : i2 = i2.next = S3, U2.lanes |= z4, Bu |= z4;
        d2 = d2.next;
      } while (d2 !== null && d2 !== u2);
      if (i2 === null ? c = f2 : i2.next = e, !Ol(f2, l2.memoizedState) && (al = true, g2 && (a2 = Aa, a2 !== null))) throw a2;
      l2.memoizedState = f2, l2.baseState = c, l2.baseQueue = i2, t.lastRenderedState = f2;
    }
    return n2 === null && (t.lanes = 0), [
      l2.memoizedState,
      t.dispatch
    ];
  }
  function qf(l2) {
    var u2 = F3(), a2 = u2.queue;
    if (a2 === null) throw Error(A2(311));
    a2.lastRenderedReducer = l2;
    var t = a2.dispatch, n2 = a2.pending, f2 = u2.memoizedState;
    if (n2 !== null) {
      a2.pending = null;
      var c = n2 = n2.next;
      do
        f2 = l2(f2, c.action), c = c.next;
      while (c !== n2);
      Ol(f2, u2.memoizedState) || (al = true), u2.memoizedState = f2, u2.baseQueue === null && (u2.baseState = f2), a2.lastRenderedState = f2;
    }
    return [
      f2,
      t
    ];
  }
  function I0(l2, u2, a2) {
    var t = U2, n2 = F3(), f2 = Y3;
    if (f2) {
      if (a2 === void 0) throw Error(A2(407));
      a2 = a2();
    } else a2 = u2();
    var c = !Ol((Z2 || n2).memoizedState, a2);
    c && (n2.memoizedState = a2, al = true), n2 = n2.queue;
    var e = u1.bind(null, t, n2, l2);
    if (Zt(2048, 8, e, [
      l2
    ]), n2.getSnapshot !== u2 || c || $2 !== null && $2.memoizedState.tag & 1) {
      if (t.flags |= 2048, qa(9, tf(), l1.bind(null, t, n2, a2, u2), null), V2 === null) throw Error(A2(349));
      f2 || (Nu & 124) !== 0 || P0(t, u2, a2);
    }
    return a2;
  }
  function P0(l2, u2, a2) {
    l2.flags |= 16384, l2 = {
      getSnapshot: u2,
      value: a2
    }, u2 = U2.updateQueue, u2 === null ? (u2 = de3(), U2.updateQueue = u2, u2.stores = [
      l2
    ]) : (a2 = u2.stores, a2 === null ? u2.stores = [
      l2
    ] : a2.push(l2));
  }
  function l1(l2, u2, a2, t) {
    u2.value = a2, u2.getSnapshot = t, a1(u2) && t1(l2);
  }
  function u1(l2, u2, a2) {
    return a2(function() {
      a1(u2) && t1(l2);
    });
  }
  function a1(l2) {
    var u2 = l2.getSnapshot;
    l2 = l2.value;
    try {
      var a2 = u2();
      return !Ol(l2, a2);
    } catch {
      return true;
    }
  }
  function t1(l2) {
    var u2 = Qa(l2, 2);
    u2 !== null && Dl(u2, l2, 2);
  }
  function bc(l2) {
    var u2 = hl();
    if (typeof l2 == "function") {
      var a2 = l2;
      if (l2 = a2(), Ju) {
        gu(true);
        try {
          a2();
        } finally {
          gu(false);
        }
      }
    }
    return u2.memoizedState = u2.baseState = l2, u2.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: au,
      lastRenderedState: l2
    }, u2;
  }
  function n1(l2, u2, a2, t) {
    return l2.baseState = a2, me3(l2, Z2, typeof t == "function" ? t : au);
  }
  function by(l2, u2, a2, t, n2) {
    if (nf(l2)) throw Error(A2(485));
    if (l2 = u2.action, l2 !== null) {
      var f2 = {
        payload: n2,
        action: l2,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          f2.listeners.push(c);
        }
      };
      s.T !== null ? a2(true) : f2.isTransition = false, t(f2), a2 = u2.pending, a2 === null ? (f2.next = u2.pending = f2, f1(u2, f2)) : (f2.next = a2.next, u2.pending = a2.next = f2);
    }
  }
  function f1(l2, u2) {
    var a2 = u2.action, t = u2.payload, n2 = l2.state;
    if (u2.isTransition) {
      var f2 = s.T, c = {};
      s.T = c;
      try {
        var e = a2(n2, t), i2 = s.S;
        i2 !== null && i2(c, e), Si(l2, u2, e);
      } catch (d2) {
        zc(l2, u2, d2);
      } finally {
        s.T = f2;
      }
    } else try {
      f2 = a2(n2, t), Si(l2, u2, f2);
    } catch (d2) {
      zc(l2, u2, d2);
    }
  }
  function Si(l2, u2, a2) {
    a2 !== null && typeof a2 == "object" && typeof a2.then == "function" ? a2.then(function(t) {
      mi(l2, u2, t);
    }, function(t) {
      return zc(l2, u2, t);
    }) : mi(l2, u2, a2);
  }
  function mi(l2, u2, a2) {
    u2.status = "fulfilled", u2.value = a2, c1(u2), l2.state = a2, u2 = l2.pending, u2 !== null && (a2 = u2.next, a2 === u2 ? l2.pending = null : (a2 = a2.next, u2.next = a2, f1(l2, a2)));
  }
  function zc(l2, u2, a2) {
    var t = l2.pending;
    if (l2.pending = null, t !== null) {
      t = t.next;
      do
        u2.status = "rejected", u2.reason = a2, c1(u2), u2 = u2.next;
      while (u2 !== t);
    }
    l2.action = null;
  }
  function c1(l2) {
    l2 = l2.listeners;
    for (var u2 = 0; u2 < l2.length; u2++) (0, l2[u2])();
  }
  function e1(l2, u2) {
    return u2;
  }
  function gi(l2, u2) {
    if (Y3) {
      var a2 = V2.formState;
      if (a2 !== null) {
        l: {
          var t = U2;
          if (Y3) {
            if (p3) {
              u: {
                for (var n2 = p3, f2 = Zl; n2.nodeType !== 8; ) {
                  if (!f2) {
                    n2 = null;
                    break u;
                  }
                  if (n2 = Xl(n2.nextSibling), n2 === null) {
                    n2 = null;
                    break u;
                  }
                }
                f2 = n2.data, n2 = f2 === "F!" || f2 === "F" ? n2 : null;
              }
              if (n2) {
                p3 = Xl(n2.nextSibling), t = n2.data === "F!";
                break l;
              }
            }
            Lu(t);
          }
          t = false;
        }
        t && (u2 = a2[0]);
      }
    }
    return a2 = hl(), a2.memoizedState = a2.baseState = u2, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e1,
      lastRenderedState: u2
    }, a2.queue = t, a2 = O1.bind(null, U2, t), t.dispatch = a2, t = bc(false), f2 = Ae2.bind(null, U2, false, t.queue), t = hl(), n2 = {
      state: u2,
      dispatch: null,
      action: l2,
      pending: null
    }, t.queue = n2, a2 = by.bind(null, U2, n2, f2, a2), n2.dispatch = a2, t.memoizedState = l2, [
      u2,
      a2,
      false
    ];
  }
  function bi(l2) {
    var u2 = F3();
    return i1(u2, Z2, l2);
  }
  function i1(l2, u2, a2) {
    if (u2 = me3(l2, u2, e1)[0], l2 = dn(au)[0], typeof u2 == "object" && u2 !== null && typeof u2.then == "function") try {
      var t = Qt(u2);
    } catch (c) {
      throw c === Gt ? uf : c;
    }
    else t = u2;
    u2 = F3();
    var n2 = u2.queue, f2 = n2.dispatch;
    return a2 !== u2.memoizedState && (U2.flags |= 2048, qa(9, tf(), zy.bind(null, n2, a2), null)), [
      t,
      f2,
      l2
    ];
  }
  function zy(l2, u2) {
    l2.action = u2;
  }
  function zi(l2) {
    var u2 = F3(), a2 = Z2;
    if (a2 !== null) return i1(u2, a2, l2);
    F3(), u2 = u2.memoizedState, a2 = F3();
    var t = a2.queue.dispatch;
    return a2.memoizedState = l2, [
      u2,
      t,
      false
    ];
  }
  function qa(l2, u2, a2, t) {
    return l2 = {
      tag: l2,
      create: a2,
      deps: t,
      inst: u2,
      next: null
    }, u2 = U2.updateQueue, u2 === null && (u2 = de3(), U2.updateQueue = u2), a2 = u2.lastEffect, a2 === null ? u2.lastEffect = l2.next = l2 : (t = a2.next, a2.next = l2, l2.next = t, u2.lastEffect = l2), l2;
  }
  function tf() {
    return {
      destroy: void 0,
      resource: void 0
    };
  }
  function v1() {
    return F3().memoizedState;
  }
  function Sn(l2, u2, a2, t) {
    var n2 = hl();
    t = t === void 0 ? null : t, U2.flags |= l2, n2.memoizedState = qa(1 | u2, tf(), a2, t);
  }
  function Zt(l2, u2, a2, t) {
    var n2 = F3();
    t = t === void 0 ? null : t;
    var f2 = n2.memoizedState.inst;
    Z2 !== null && t !== null && ee(t, Z2.memoizedState.deps) ? n2.memoizedState = qa(u2, f2, a2, t) : (U2.flags |= l2, n2.memoizedState = qa(1 | u2, f2, a2, t));
  }
  function Ai(l2, u2) {
    Sn(8390656, 8, l2, u2);
  }
  function h1(l2, u2) {
    Zt(2048, 8, l2, u2);
  }
  function y1(l2, u2) {
    return Zt(4, 2, l2, u2);
  }
  function d1(l2, u2) {
    return Zt(4, 4, l2, u2);
  }
  function S1(l2, u2) {
    if (typeof u2 == "function") {
      l2 = l2();
      var a2 = u2(l2);
      return function() {
        typeof a2 == "function" ? a2() : u2(null);
      };
    }
    if (u2 != null) return l2 = l2(), u2.current = l2, function() {
      u2.current = null;
    };
  }
  function m1(l2, u2, a2) {
    a2 = a2 != null ? a2.concat([
      l2
    ]) : null, Zt(4, 4, S1.bind(null, u2, l2), a2);
  }
  function ge2() {
  }
  function g1(l2, u2) {
    var a2 = F3();
    u2 = u2 === void 0 ? null : u2;
    var t = a2.memoizedState;
    return u2 !== null && ee(u2, t[1]) ? t[0] : (a2.memoizedState = [
      l2,
      u2
    ], l2);
  }
  function b1(l2, u2) {
    var a2 = F3();
    u2 = u2 === void 0 ? null : u2;
    var t = a2.memoizedState;
    if (u2 !== null && ee(u2, t[1])) return t[0];
    if (t = l2(), Ju) {
      gu(true);
      try {
        l2();
      } finally {
        gu(false);
      }
    }
    return a2.memoizedState = [
      t,
      u2
    ], t;
  }
  function be3(l2, u2, a2) {
    return a2 === void 0 || (Nu & 1073741824) !== 0 ? l2.memoizedState = u2 : (l2.memoizedState = a2, l2 = cv(), U2.lanes |= l2, Bu |= l2, a2);
  }
  function z1(l2, u2, a2, t) {
    return Ol(a2, u2) ? a2 : Na.current !== null ? (l2 = be3(l2, a2, t), Ol(l2, u2) || (al = true), l2) : (Nu & 42) === 0 ? (al = true, l2.memoizedState = a2) : (l2 = cv(), U2.lanes |= l2, Bu |= l2, u2);
  }
  function A1(l2, u2, a2, t, n2) {
    var f2 = o.p;
    o.p = f2 !== 0 && 8 > f2 ? f2 : 8;
    var c = s.T, e = {};
    s.T = e, Ae2(l2, false, u2, a2);
    try {
      var i2 = n2(), d2 = s.S;
      if (d2 !== null && d2(e, i2), i2 !== null && typeof i2 == "object" && typeof i2.then == "function") {
        var g2 = Sy(i2, t);
        ct(l2, u2, g2, El(l2));
      } else ct(l2, u2, t, El(l2));
    } catch (z4) {
      ct(l2, u2, {
        then: function() {
        },
        status: "rejected",
        reason: z4
      }, El());
    } finally {
      o.p = f2, s.T = c;
    }
  }
  function Ay() {
  }
  function Ac(l2, u2, a2, t) {
    if (l2.tag !== 5) throw Error(A2(476));
    var n2 = T1(l2).queue;
    A1(l2, n2, u2, Qu, a2 === null ? Ay : function() {
      return M1(l2), a2(t);
    });
  }
  function T1(l2) {
    var u2 = l2.memoizedState;
    if (u2 !== null) return u2;
    u2 = {
      memoizedState: Qu,
      baseState: Qu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: Qu
      },
      next: null
    };
    var a2 = {};
    return u2.next = {
      memoizedState: a2,
      baseState: a2,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: a2
      },
      next: null
    }, l2.memoizedState = u2, l2 = l2.alternate, l2 !== null && (l2.memoizedState = u2), u2;
  }
  function M1(l2) {
    var u2 = T1(l2).next.queue;
    ct(l2, u2, {}, El());
  }
  function ze2() {
    return il(Dt);
  }
  function E1() {
    return F3().memoizedState;
  }
  function D1() {
    return F3().memoizedState;
  }
  function Ty(l2) {
    for (var u2 = l2.return; u2 !== null; ) {
      switch (u2.tag) {
        case 24:
        case 3:
          var a2 = El();
          l2 = Mu(a2);
          var t = Eu(u2, l2, a2);
          t !== null && (Dl(t, u2, a2), tt(t, u2, a2)), u2 = {
            cache: te()
          }, l2.payload = u2;
          return;
      }
      u2 = u2.return;
    }
  }
  function My(l2, u2, a2) {
    var t = El();
    a2 = {
      lane: t,
      revertLane: 0,
      action: a2,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l2) ? s1(u2, a2) : (a2 = Pc(l2, u2, a2, t), a2 !== null && (Dl(a2, l2, t), U1(a2, u2, t)));
  }
  function O1(l2, u2, a2) {
    var t = El();
    ct(l2, u2, a2, t);
  }
  function ct(l2, u2, a2, t) {
    var n2 = {
      lane: t,
      revertLane: 0,
      action: a2,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (nf(l2)) s1(u2, n2);
    else {
      var f2 = l2.alternate;
      if (l2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = u2.lastRenderedReducer, f2 !== null)) try {
        var c = u2.lastRenderedState, e = f2(c, a2);
        if (n2.hasEagerState = true, n2.eagerState = e, Ol(e, c)) return lf(l2, u2, n2, 0), V2 === null && Pn(), false;
      } catch {
      } finally {
      }
      if (a2 = Pc(l2, u2, n2, t), a2 !== null) return Dl(a2, l2, t), U1(a2, u2, t), true;
    }
    return false;
  }
  function Ae2(l2, u2, a2, t) {
    if (t = {
      lane: 2,
      revertLane: He2(),
      action: t,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l2)) {
      if (u2) throw Error(A2(479));
    } else u2 = Pc(l2, a2, t, 2), u2 !== null && Dl(u2, l2, 2);
  }
  function nf(l2) {
    var u2 = l2.alternate;
    return l2 === U2 || u2 !== null && u2 === U2;
  }
  function s1(l2, u2) {
    Ta = Rn = true;
    var a2 = l2.pending;
    a2 === null ? u2.next = u2 : (u2.next = a2.next, a2.next = u2), l2.pending = u2;
  }
  function U1(l2, u2, a2) {
    if ((a2 & 4194048) !== 0) {
      var t = u2.lanes;
      t &= l2.pendingLanes, a2 |= t, u2.lanes = a2, g0(l2, a2);
    }
  }
  var on = {
    readContext: il,
    use: af,
    useCallback: W,
    useContext: W,
    useEffect: W,
    useImperativeHandle: W,
    useLayoutEffect: W,
    useInsertionEffect: W,
    useMemo: W,
    useReducer: W,
    useRef: W,
    useState: W,
    useDebugValue: W,
    useDeferredValue: W,
    useTransition: W,
    useSyncExternalStore: W,
    useId: W,
    useHostTransitionStatus: W,
    useFormState: W,
    useActionState: W,
    useOptimistic: W,
    useMemoCache: W,
    useCacheRefresh: W
  }, H1 = {
    readContext: il,
    use: af,
    useCallback: function(l2, u2) {
      return hl().memoizedState = [
        l2,
        u2 === void 0 ? null : u2
      ], l2;
    },
    useContext: il,
    useEffect: Ai,
    useImperativeHandle: function(l2, u2, a2) {
      a2 = a2 != null ? a2.concat([
        l2
      ]) : null, Sn(4194308, 4, S1.bind(null, u2, l2), a2);
    },
    useLayoutEffect: function(l2, u2) {
      return Sn(4194308, 4, l2, u2);
    },
    useInsertionEffect: function(l2, u2) {
      Sn(4, 2, l2, u2);
    },
    useMemo: function(l2, u2) {
      var a2 = hl();
      u2 = u2 === void 0 ? null : u2;
      var t = l2();
      if (Ju) {
        gu(true);
        try {
          l2();
        } finally {
          gu(false);
        }
      }
      return a2.memoizedState = [
        t,
        u2
      ], t;
    },
    useReducer: function(l2, u2, a2) {
      var t = hl();
      if (a2 !== void 0) {
        var n2 = a2(u2);
        if (Ju) {
          gu(true);
          try {
            a2(u2);
          } finally {
            gu(false);
          }
        }
      } else n2 = u2;
      return t.memoizedState = t.baseState = n2, l2 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l2,
        lastRenderedState: n2
      }, t.queue = l2, l2 = l2.dispatch = My.bind(null, U2, l2), [
        t.memoizedState,
        l2
      ];
    },
    useRef: function(l2) {
      var u2 = hl();
      return l2 = {
        current: l2
      }, u2.memoizedState = l2;
    },
    useState: function(l2) {
      l2 = bc(l2);
      var u2 = l2.queue, a2 = O1.bind(null, U2, u2);
      return u2.dispatch = a2, [
        l2.memoizedState,
        a2
      ];
    },
    useDebugValue: ge2,
    useDeferredValue: function(l2, u2) {
      var a2 = hl();
      return be3(a2, l2, u2);
    },
    useTransition: function() {
      var l2 = bc(false);
      return l2 = A1.bind(null, U2, l2.queue, true, false), hl().memoizedState = l2, [
        false,
        l2
      ];
    },
    useSyncExternalStore: function(l2, u2, a2) {
      var t = U2, n2 = hl();
      if (Y3) {
        if (a2 === void 0) throw Error(A2(407));
        a2 = a2();
      } else {
        if (a2 = u2(), V2 === null) throw Error(A2(349));
        (B2 & 124) !== 0 || P0(t, u2, a2);
      }
      n2.memoizedState = a2;
      var f2 = {
        value: a2,
        getSnapshot: u2
      };
      return n2.queue = f2, Ai(u1.bind(null, t, f2, l2), [
        l2
      ]), t.flags |= 2048, qa(9, tf(), l1.bind(null, t, f2, a2, u2), null), a2;
    },
    useId: function() {
      var l2 = hl(), u2 = V2.identifierPrefix;
      if (Y3) {
        var a2 = kl, t = Fl;
        a2 = (t & ~(1 << 32 - Ml(t) - 1)).toString(32) + a2, u2 = "\xAB" + u2 + "R" + a2, a2 = Yn++, 0 < a2 && (u2 += "H" + a2.toString(32)), u2 += "\xBB";
      } else a2 = my++, u2 = "\xAB" + u2 + "r" + a2.toString(32) + "\xBB";
      return l2.memoizedState = u2;
    },
    useHostTransitionStatus: ze2,
    useFormState: gi,
    useActionState: gi,
    useOptimistic: function(l2) {
      var u2 = hl();
      u2.memoizedState = u2.baseState = l2;
      var a2 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return u2.queue = a2, u2 = Ae2.bind(null, U2, true, a2), a2.dispatch = u2, [
        l2,
        u2
      ];
    },
    useMemoCache: Se2,
    useCacheRefresh: function() {
      return hl().memoizedState = Ty.bind(null, U2);
    }
  }, N1 = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d1,
    useMemo: b1,
    useReducer: dn,
    useRef: v1,
    useState: function() {
      return dn(au);
    },
    useDebugValue: ge2,
    useDeferredValue: function(l2, u2) {
      var a2 = F3();
      return z1(a2, Z2.memoizedState, l2, u2);
    },
    useTransition: function() {
      var l2 = dn(au)[0], u2 = F3().memoizedState;
      return [
        typeof l2 == "boolean" ? l2 : Qt(l2),
        u2
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze2,
    useFormState: bi,
    useActionState: bi,
    useOptimistic: function(l2, u2) {
      var a2 = F3();
      return n1(a2, Z2, l2, u2);
    },
    useMemoCache: Se2,
    useCacheRefresh: D1
  }, Ey = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d1,
    useMemo: b1,
    useReducer: qf,
    useRef: v1,
    useState: function() {
      return qf(au);
    },
    useDebugValue: ge2,
    useDeferredValue: function(l2, u2) {
      var a2 = F3();
      return Z2 === null ? be3(a2, l2, u2) : z1(a2, Z2.memoizedState, l2, u2);
    },
    useTransition: function() {
      var l2 = qf(au)[0], u2 = F3().memoizedState;
      return [
        typeof l2 == "boolean" ? l2 : Qt(l2),
        u2
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze2,
    useFormState: zi,
    useActionState: zi,
    useOptimistic: function(l2, u2) {
      var a2 = F3();
      return Z2 !== null ? n1(a2, Z2, l2, u2) : (a2.baseState = l2, [
        l2,
        a2.queue.dispatch
      ]);
    },
    useMemoCache: Se2,
    useCacheRefresh: D1
  }, Ea = null, At = 0;
  function rt(l2) {
    var u2 = At;
    return At += 1, Ea === null && (Ea = []), w0(Ea, l2, u2);
  }
  function La(l2, u2) {
    u2 = u2.props.ref, l2.ref = u2 !== void 0 ? u2 : null;
  }
  function It(l2, u2) {
    throw u2.$$typeof === rv ? Error(A2(525)) : (l2 = Object.prototype.toString.call(u2), Error(A2(31, l2 === "[object Object]" ? "object with keys {" + Object.keys(u2).join(", ") + "}" : l2)));
  }
  function Ti(l2) {
    var u2 = l2._init;
    return u2(l2._payload);
  }
  function q1(l2) {
    function u2(h2, v3) {
      if (l2) {
        var y2 = h2.deletions;
        y2 === null ? (h2.deletions = [
          v3
        ], h2.flags |= 16) : y2.push(v3);
      }
    }
    function a2(h2, v3) {
      if (!l2) return null;
      for (; v3 !== null; ) u2(h2, v3), v3 = v3.sibling;
      return null;
    }
    function t(h2) {
      for (var v3 = /* @__PURE__ */ new Map(); h2 !== null; ) h2.key !== null ? v3.set(h2.key, h2) : v3.set(h2.index, h2), h2 = h2.sibling;
      return v3;
    }
    function n2(h2, v3) {
      return h2 = Pl(h2, v3), h2.index = 0, h2.sibling = null, h2;
    }
    function f2(h2, v3, y2) {
      return h2.index = y2, l2 ? (y2 = h2.alternate, y2 !== null ? (y2 = y2.index, y2 < v3 ? (h2.flags |= 67108866, v3) : y2) : (h2.flags |= 67108866, v3)) : (h2.flags |= 1048576, v3);
    }
    function c(h2) {
      return l2 && h2.alternate === null && (h2.flags |= 67108866), h2;
    }
    function e(h2, v3, y2, b3) {
      return v3 === null || v3.tag !== 6 ? (v3 = Uf(y2, h2.mode, b3), v3.return = h2, v3) : (v3 = n2(v3, y2), v3.return = h2, v3);
    }
    function i2(h2, v3, y2, b3) {
      var T3 = y2.type;
      return T3 === ta ? g2(h2, v3, y2.props.children, b3, y2.key) : v3 !== null && (v3.elementType === T3 || typeof T3 == "object" && T3 !== null && T3.$$typeof === vu && Ti(T3) === v3.type) ? (v3 = n2(v3, y2.props), La(v3, y2), v3.return = h2, v3) : (v3 = hn(y2.type, y2.key, y2.props, null, h2.mode, b3), La(v3, y2), v3.return = h2, v3);
    }
    function d2(h2, v3, y2, b3) {
      return v3 === null || v3.tag !== 4 || v3.stateNode.containerInfo !== y2.containerInfo || v3.stateNode.implementation !== y2.implementation ? (v3 = Hf(y2, h2.mode, b3), v3.return = h2, v3) : (v3 = n2(v3, y2.children || []), v3.return = h2, v3);
    }
    function g2(h2, v3, y2, b3, T3) {
      return v3 === null || v3.tag !== 7 ? (v3 = Zu(y2, h2.mode, b3, T3), v3.return = h2, v3) : (v3 = n2(v3, y2), v3.return = h2, v3);
    }
    function z4(h2, v3, y2) {
      if (typeof v3 == "string" && v3 !== "" || typeof v3 == "number" || typeof v3 == "bigint") return v3 = Uf("" + v3, h2.mode, y2), v3.return = h2, v3;
      if (typeof v3 == "object" && v3 !== null) {
        switch (v3.$$typeof) {
          case Ct:
            return y2 = hn(v3.type, v3.key, v3.props, null, h2.mode, y2), La(y2, v3), y2.return = h2, y2;
          case $a:
            return v3 = Hf(v3, h2.mode, y2), v3.return = h2, v3;
          case vu:
            var b3 = v3._init;
            return v3 = b3(v3._payload), z4(h2, v3, y2);
        }
        if (Fa(v3) || ja(v3)) return v3 = Zu(v3, h2.mode, y2, null), v3.return = h2, v3;
        if (typeof v3.then == "function") return z4(h2, rt(v3), y2);
        if (v3.$$typeof === $l) return z4(h2, Ft(h2, v3), y2);
        It(h2, v3);
      }
      return null;
    }
    function S3(h2, v3, y2, b3) {
      var T3 = v3 !== null ? v3.key : null;
      if (typeof y2 == "string" && y2 !== "" || typeof y2 == "number" || typeof y2 == "bigint") return T3 !== null ? null : e(h2, v3, "" + y2, b3);
      if (typeof y2 == "object" && y2 !== null) {
        switch (y2.$$typeof) {
          case Ct:
            return y2.key === T3 ? i2(h2, v3, y2, b3) : null;
          case $a:
            return y2.key === T3 ? d2(h2, v3, y2, b3) : null;
          case vu:
            return T3 = y2._init, y2 = T3(y2._payload), S3(h2, v3, y2, b3);
        }
        if (Fa(y2) || ja(y2)) return T3 !== null ? null : g2(h2, v3, y2, b3, null);
        if (typeof y2.then == "function") return S3(h2, v3, rt(y2), b3);
        if (y2.$$typeof === $l) return S3(h2, v3, Ft(h2, y2), b3);
        It(h2, y2);
      }
      return null;
    }
    function m2(h2, v3, y2, b3, T3) {
      if (typeof b3 == "string" && b3 !== "" || typeof b3 == "number" || typeof b3 == "bigint") return h2 = h2.get(y2) || null, e(v3, h2, "" + b3, T3);
      if (typeof b3 == "object" && b3 !== null) {
        switch (b3.$$typeof) {
          case Ct:
            return h2 = h2.get(b3.key === null ? y2 : b3.key) || null, i2(v3, h2, b3, T3);
          case $a:
            return h2 = h2.get(b3.key === null ? y2 : b3.key) || null, d2(v3, h2, b3, T3);
          case vu:
            var H2 = b3._init;
            return b3 = H2(b3._payload), m2(h2, v3, y2, b3, T3);
        }
        if (Fa(b3) || ja(b3)) return h2 = h2.get(y2) || null, g2(v3, h2, b3, T3, null);
        if (typeof b3.then == "function") return m2(h2, v3, y2, rt(b3), T3);
        if (b3.$$typeof === $l) return m2(h2, v3, y2, Ft(v3, b3), T3);
        It(v3, b3);
      }
      return null;
    }
    function O(h2, v3, y2, b3) {
      for (var T3 = null, H2 = null, M3 = v3, D3 = v3 = 0, P = null; M3 !== null && D3 < y2.length; D3++) {
        M3.index > D3 ? (P = M3, M3 = null) : P = M3.sibling;
        var R3 = S3(h2, M3, y2[D3], b3);
        if (R3 === null) {
          M3 === null && (M3 = P);
          break;
        }
        l2 && M3 && R3.alternate === null && u2(h2, M3), v3 = f2(R3, v3, D3), H2 === null ? T3 = R3 : H2.sibling = R3, H2 = R3, M3 = P;
      }
      if (D3 === y2.length) return a2(h2, M3), Y3 && Xu(h2, D3), T3;
      if (M3 === null) {
        for (; D3 < y2.length; D3++) M3 = z4(h2, y2[D3], b3), M3 !== null && (v3 = f2(M3, v3, D3), H2 === null ? T3 = M3 : H2.sibling = M3, H2 = M3);
        return Y3 && Xu(h2, D3), T3;
      }
      for (M3 = t(M3); D3 < y2.length; D3++) P = m2(M3, h2, D3, y2[D3], b3), P !== null && (l2 && P.alternate !== null && M3.delete(P.key === null ? D3 : P.key), v3 = f2(P, v3, D3), H2 === null ? T3 = P : H2.sibling = P, H2 = P);
      return l2 && M3.forEach(function(cu) {
        return u2(h2, cu);
      }), Y3 && Xu(h2, D3), T3;
    }
    function E4(h2, v3, y2, b3) {
      if (y2 == null) throw Error(A2(151));
      for (var T3 = null, H2 = null, M3 = v3, D3 = v3 = 0, P = null, R3 = y2.next(); M3 !== null && !R3.done; D3++, R3 = y2.next()) {
        M3.index > D3 ? (P = M3, M3 = null) : P = M3.sibling;
        var cu = S3(h2, M3, R3.value, b3);
        if (cu === null) {
          M3 === null && (M3 = P);
          break;
        }
        l2 && M3 && cu.alternate === null && u2(h2, M3), v3 = f2(cu, v3, D3), H2 === null ? T3 = cu : H2.sibling = cu, H2 = cu, M3 = P;
      }
      if (R3.done) return a2(h2, M3), Y3 && Xu(h2, D3), T3;
      if (M3 === null) {
        for (; !R3.done; D3++, R3 = y2.next()) R3 = z4(h2, R3.value, b3), R3 !== null && (v3 = f2(R3, v3, D3), H2 === null ? T3 = R3 : H2.sibling = R3, H2 = R3);
        return Y3 && Xu(h2, D3), T3;
      }
      for (M3 = t(M3); !R3.done; D3++, R3 = y2.next()) R3 = m2(M3, h2, D3, R3.value, b3), R3 !== null && (l2 && R3.alternate !== null && M3.delete(R3.key === null ? D3 : R3.key), v3 = f2(R3, v3, D3), H2 === null ? T3 = R3 : H2.sibling = R3, H2 = R3);
      return l2 && M3.forEach(function(Kv) {
        return u2(h2, Kv);
      }), Y3 && Xu(h2, D3), T3;
    }
    function G4(h2, v3, y2, b3) {
      if (typeof y2 == "object" && y2 !== null && y2.type === ta && y2.key === null && (y2 = y2.props.children), typeof y2 == "object" && y2 !== null) {
        switch (y2.$$typeof) {
          case Ct:
            l: {
              for (var T3 = y2.key; v3 !== null; ) {
                if (v3.key === T3) {
                  if (T3 = y2.type, T3 === ta) {
                    if (v3.tag === 7) {
                      a2(h2, v3.sibling), b3 = n2(v3, y2.props.children), b3.return = h2, h2 = b3;
                      break l;
                    }
                  } else if (v3.elementType === T3 || typeof T3 == "object" && T3 !== null && T3.$$typeof === vu && Ti(T3) === v3.type) {
                    a2(h2, v3.sibling), b3 = n2(v3, y2.props), La(b3, y2), b3.return = h2, h2 = b3;
                    break l;
                  }
                  a2(h2, v3);
                  break;
                } else u2(h2, v3);
                v3 = v3.sibling;
              }
              y2.type === ta ? (b3 = Zu(y2.props.children, h2.mode, b3, y2.key), b3.return = h2, h2 = b3) : (b3 = hn(y2.type, y2.key, y2.props, null, h2.mode, b3), La(b3, y2), b3.return = h2, h2 = b3);
            }
            return c(h2);
          case $a:
            l: {
              for (T3 = y2.key; v3 !== null; ) {
                if (v3.key === T3) if (v3.tag === 4 && v3.stateNode.containerInfo === y2.containerInfo && v3.stateNode.implementation === y2.implementation) {
                  a2(h2, v3.sibling), b3 = n2(v3, y2.children || []), b3.return = h2, h2 = b3;
                  break l;
                } else {
                  a2(h2, v3);
                  break;
                }
                else u2(h2, v3);
                v3 = v3.sibling;
              }
              b3 = Hf(y2, h2.mode, b3), b3.return = h2, h2 = b3;
            }
            return c(h2);
          case vu:
            return T3 = y2._init, y2 = T3(y2._payload), G4(h2, v3, y2, b3);
        }
        if (Fa(y2)) return O(h2, v3, y2, b3);
        if (ja(y2)) {
          if (T3 = ja(y2), typeof T3 != "function") throw Error(A2(150));
          return y2 = T3.call(y2), E4(h2, v3, y2, b3);
        }
        if (typeof y2.then == "function") return G4(h2, v3, rt(y2), b3);
        if (y2.$$typeof === $l) return G4(h2, v3, Ft(h2, y2), b3);
        It(h2, y2);
      }
      return typeof y2 == "string" && y2 !== "" || typeof y2 == "number" || typeof y2 == "bigint" ? (y2 = "" + y2, v3 !== null && v3.tag === 6 ? (a2(h2, v3.sibling), b3 = n2(v3, y2), b3.return = h2, h2 = b3) : (a2(h2, v3), b3 = Uf(y2, h2.mode, b3), b3.return = h2, h2 = b3), c(h2)) : a2(h2, v3);
    }
    return function(h2, v3, y2, b3) {
      try {
        At = 0;
        var T3 = G4(h2, v3, y2, b3);
        return Ea = null, T3;
      } catch (M3) {
        if (M3 === Gt || M3 === uf) throw M3;
        var H2 = Al(29, M3, null, h2.mode);
        return H2.lanes = b3, H2.return = h2, H2;
      } finally {
      }
    };
  }
  var Ba = q1(true), B1 = q1(false), Yl = Cl(null), Kl = null;
  function du(l2) {
    var u2 = l2.alternate;
    C3(r, r.current & 1), C3(Yl, l2), Kl === null && (u2 === null || Na.current !== null || u2.memoizedState !== null) && (Kl = l2);
  }
  function R1(l2) {
    if (l2.tag === 22) {
      if (C3(r, r.current), C3(Yl, l2), Kl === null) {
        var u2 = l2.alternate;
        u2 !== null && u2.memoizedState !== null && (Kl = l2);
      }
    } else Su(l2);
  }
  function Su() {
    C3(r, r.current), C3(Yl, Yl.current);
  }
  function Il(l2) {
    tl(Yl), Kl === l2 && (Kl = null), tl(r);
  }
  var r = Cl(0);
  function _n(l2) {
    for (var u2 = l2; u2 !== null; ) {
      if (u2.tag === 13) {
        var a2 = u2.memoizedState;
        if (a2 !== null && (a2 = a2.dehydrated, a2 === null || a2.data === "$?" || Gc(a2))) return u2;
      } else if (u2.tag === 19 && u2.memoizedProps.revealOrder !== void 0) {
        if ((u2.flags & 128) !== 0) return u2;
      } else if (u2.child !== null) {
        u2.child.return = u2, u2 = u2.child;
        continue;
      }
      if (u2 === l2) break;
      for (; u2.sibling === null; ) {
        if (u2.return === null || u2.return === l2) return null;
        u2 = u2.return;
      }
      u2.sibling.return = u2.return, u2 = u2.sibling;
    }
    return null;
  }
  function Bf(l2, u2, a2, t) {
    u2 = l2.memoizedState, a2 = a2(t, u2), a2 = a2 == null ? u2 : j3({}, u2, a2), l2.memoizedState = a2, l2.lanes === 0 && (l2.updateQueue.baseState = a2);
  }
  var Tc = {
    enqueueSetState: function(l2, u2, a2) {
      l2 = l2._reactInternals;
      var t = El(), n2 = Mu(t);
      n2.payload = u2, a2 != null && (n2.callback = a2), u2 = Eu(l2, n2, t), u2 !== null && (Dl(u2, l2, t), tt(u2, l2, t));
    },
    enqueueReplaceState: function(l2, u2, a2) {
      l2 = l2._reactInternals;
      var t = El(), n2 = Mu(t);
      n2.tag = 1, n2.payload = u2, a2 != null && (n2.callback = a2), u2 = Eu(l2, n2, t), u2 !== null && (Dl(u2, l2, t), tt(u2, l2, t));
    },
    enqueueForceUpdate: function(l2, u2) {
      l2 = l2._reactInternals;
      var a2 = El(), t = Mu(a2);
      t.tag = 2, u2 != null && (t.callback = u2), u2 = Eu(l2, t, a2), u2 !== null && (Dl(u2, l2, a2), tt(u2, l2, a2));
    }
  };
  function Mi(l2, u2, a2, t, n2, f2, c) {
    return l2 = l2.stateNode, typeof l2.shouldComponentUpdate == "function" ? l2.shouldComponentUpdate(t, f2, c) : u2.prototype && u2.prototype.isPureReactComponent ? !gt(a2, t) || !gt(n2, f2) : true;
  }
  function Ei(l2, u2, a2, t) {
    l2 = u2.state, typeof u2.componentWillReceiveProps == "function" && u2.componentWillReceiveProps(a2, t), typeof u2.UNSAFE_componentWillReceiveProps == "function" && u2.UNSAFE_componentWillReceiveProps(a2, t), u2.state !== l2 && Tc.enqueueReplaceState(u2, u2.state, null);
  }
  function Wu(l2, u2) {
    var a2 = u2;
    if ("ref" in u2) {
      a2 = {};
      for (var t in u2) t !== "ref" && (a2[t] = u2[t]);
    }
    if (l2 = l2.defaultProps) {
      a2 === u2 && (a2 = j3({}, a2));
      for (var n2 in l2) a2[n2] === void 0 && (a2[n2] = l2[n2]);
    }
    return a2;
  }
  var Xn = typeof reportError == "function" ? reportError : function(l2) {
    if (typeof globalThis == "object" && typeof globalThis.ErrorEvent == "function") {
      var u2 = new globalThis.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof l2 == "object" && l2 !== null && typeof l2.message == "string" ? String(l2.message) : String(l2),
        error: l2
      });
      if (!globalThis.dispatchEvent(u2)) return;
    } else if (typeof __Process$2 == "object" && typeof __Process$2.emit == "function") {
      __Process$2.emit("uncaughtException", l2);
      return;
    }
    console.error(l2);
  };
  function Y1(l2) {
    Xn(l2);
  }
  function o1(l2) {
    console.error(l2);
  }
  function _1(l2) {
    Xn(l2);
  }
  function Gn(l2, u2) {
    try {
      var a2 = l2.onUncaughtError;
      a2(u2.value, {
        componentStack: u2.stack
      });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function Di(l2, u2, a2) {
    try {
      var t = l2.onCaughtError;
      t(a2.value, {
        componentStack: a2.stack,
        errorBoundary: u2.tag === 1 ? u2.stateNode : null
      });
    } catch (n2) {
      setTimeout(function() {
        throw n2;
      });
    }
  }
  function Mc(l2, u2, a2) {
    return a2 = Mu(a2), a2.tag = 3, a2.payload = {
      element: null
    }, a2.callback = function() {
      Gn(l2, u2);
    }, a2;
  }
  function X1(l2) {
    return l2 = Mu(l2), l2.tag = 3, l2;
  }
  function G1(l2, u2, a2, t) {
    var n2 = a2.type.getDerivedStateFromError;
    if (typeof n2 == "function") {
      var f2 = t.value;
      l2.payload = function() {
        return n2(f2);
      }, l2.callback = function() {
        Di(u2, a2, t);
      };
    }
    var c = a2.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l2.callback = function() {
      Di(u2, a2, t), typeof n2 != "function" && (Du === null ? Du = /* @__PURE__ */ new Set([
        this
      ]) : Du.add(this));
      var e = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: e !== null ? e : ""
      });
    });
  }
  function Dy(l2, u2, a2, t, n2) {
    if (a2.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (u2 = a2.alternate, u2 !== null && _t(u2, a2, n2, true), a2 = Yl.current, a2 !== null) {
        switch (a2.tag) {
          case 13:
            return Kl === null ? qc() : a2.alternate === null && J2 === 0 && (J2 = 3), a2.flags &= -257, a2.flags |= 65536, a2.lanes = n2, t === dc ? a2.flags |= 16384 : (u2 = a2.updateQueue, u2 === null ? a2.updateQueue = /* @__PURE__ */ new Set([
              t
            ]) : u2.add(t), jf(l2, t, n2)), false;
          case 22:
            return a2.flags |= 65536, t === dc ? a2.flags |= 16384 : (u2 = a2.updateQueue, u2 === null ? (u2 = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                t
              ])
            }, a2.updateQueue = u2) : (a2 = u2.retryQueue, a2 === null ? u2.retryQueue = /* @__PURE__ */ new Set([
              t
            ]) : a2.add(t)), jf(l2, t, n2)), false;
        }
        throw Error(A2(435, a2.tag));
      }
      return jf(l2, t, n2), qc(), false;
    }
    if (Y3) return u2 = Yl.current, u2 !== null ? ((u2.flags & 65536) === 0 && (u2.flags |= 256), u2.flags |= 65536, u2.lanes = n2, t !== ec && (l2 = Error(A2(422), {
      cause: t
    }), bt(Bl(l2, a2)))) : (t !== ec && (u2 = Error(A2(423), {
      cause: t
    }), bt(Bl(u2, a2))), l2 = l2.current.alternate, l2.flags |= 65536, n2 &= -n2, l2.lanes |= n2, t = Bl(t, a2), n2 = Mc(l2.stateNode, t, n2), Nf(l2, n2), J2 !== 4 && (J2 = 2)), false;
    var f2 = Error(A2(520), {
      cause: t
    });
    if (f2 = Bl(f2, a2), vt === null ? vt = [
      f2
    ] : vt.push(f2), J2 !== 4 && (J2 = 2), u2 === null) return true;
    t = Bl(t, a2), a2 = u2;
    do {
      switch (a2.tag) {
        case 3:
          return a2.flags |= 65536, l2 = n2 & -n2, a2.lanes |= l2, l2 = Mc(a2.stateNode, t, l2), Nf(a2, l2), false;
        case 1:
          if (u2 = a2.type, f2 = a2.stateNode, (a2.flags & 128) === 0 && (typeof u2.getDerivedStateFromError == "function" || f2 !== null && typeof f2.componentDidCatch == "function" && (Du === null || !Du.has(f2)))) return a2.flags |= 65536, n2 &= -n2, a2.lanes |= n2, n2 = X1(n2), G1(n2, l2, a2, t), Nf(a2, n2), false;
      }
      a2 = a2.return;
    } while (a2 !== null);
    return false;
  }
  var Q1 = Error(A2(461)), al = false;
  function nl(l2, u2, a2, t) {
    u2.child = l2 === null ? B1(u2, null, a2, t) : Ba(u2, l2.child, a2, t);
  }
  function Oi(l2, u2, a2, t, n2) {
    a2 = a2.render;
    var f2 = u2.ref;
    if ("ref" in t) {
      var c = {};
      for (var e in t) e !== "ref" && (c[e] = t[e]);
    } else c = t;
    return pu(u2), t = ie2(l2, u2, a2, c, f2, n2), e = ve3(), l2 !== null && !al ? (he2(l2, u2, n2), tu(l2, u2, n2)) : (Y3 && e && ue2(u2), u2.flags |= 1, nl(l2, u2, t, n2), u2.child);
  }
  function si(l2, u2, a2, t, n2) {
    if (l2 === null) {
      var f2 = a2.type;
      return typeof f2 == "function" && !le2(f2) && f2.defaultProps === void 0 && a2.compare === null ? (u2.tag = 15, u2.type = f2, Z1(l2, u2, f2, t, n2)) : (l2 = hn(a2.type, null, t, u2, u2.mode, n2), l2.ref = u2.ref, l2.return = u2, u2.child = l2);
    }
    if (f2 = l2.child, !Te2(l2, n2)) {
      var c = f2.memoizedProps;
      if (a2 = a2.compare, a2 = a2 !== null ? a2 : gt, a2(c, t) && l2.ref === u2.ref) return tu(l2, u2, n2);
    }
    return u2.flags |= 1, l2 = Pl(f2, t), l2.ref = u2.ref, l2.return = u2, u2.child = l2;
  }
  function Z1(l2, u2, a2, t, n2) {
    if (l2 !== null) {
      var f2 = l2.memoizedProps;
      if (gt(f2, t) && l2.ref === u2.ref) if (al = false, u2.pendingProps = t = f2, Te2(l2, n2)) (l2.flags & 131072) !== 0 && (al = true);
      else return u2.lanes = l2.lanes, tu(l2, u2, n2);
    }
    return Ec(l2, u2, a2, t, n2);
  }
  function x1(l2, u2, a2) {
    var t = u2.pendingProps, n2 = t.children, f2 = l2 !== null ? l2.memoizedState : null;
    if (t.mode === "hidden") {
      if ((u2.flags & 128) !== 0) {
        if (t = f2 !== null ? f2.baseLanes | a2 : a2, l2 !== null) {
          for (n2 = u2.child = l2.child, f2 = 0; n2 !== null; ) f2 = f2 | n2.lanes | n2.childLanes, n2 = n2.sibling;
          u2.childLanes = f2 & ~t;
        } else u2.childLanes = 0, u2.child = null;
        return Ui(l2, u2, t, a2);
      }
      if ((a2 & 536870912) !== 0) u2.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l2 !== null && yn(u2, f2 !== null ? f2.cachePool : null), f2 !== null ? di(u2, f2) : gc(), R1(u2);
      else return u2.lanes = u2.childLanes = 536870912, Ui(l2, u2, f2 !== null ? f2.baseLanes | a2 : a2, a2);
    } else f2 !== null ? (yn(u2, f2.cachePool), di(u2, f2), Su(u2), u2.memoizedState = null) : (l2 !== null && yn(u2, null), gc(), Su(u2));
    return nl(l2, u2, n2, a2), u2.child;
  }
  function Ui(l2, u2, a2, t) {
    var n2 = ne();
    return n2 = n2 === null ? null : {
      parent: k4._currentValue,
      pool: n2
    }, u2.memoizedState = {
      baseLanes: a2,
      cachePool: n2
    }, l2 !== null && yn(u2, null), gc(), R1(u2), l2 !== null && _t(l2, u2, t, true), null;
  }
  function mn(l2, u2) {
    var a2 = u2.ref;
    if (a2 === null) l2 !== null && l2.ref !== null && (u2.flags |= 4194816);
    else {
      if (typeof a2 != "function" && typeof a2 != "object") throw Error(A2(284));
      (l2 === null || l2.ref !== a2) && (u2.flags |= 4194816);
    }
  }
  function Ec(l2, u2, a2, t, n2) {
    return pu(u2), a2 = ie2(l2, u2, a2, t, void 0, n2), t = ve3(), l2 !== null && !al ? (he2(l2, u2, n2), tu(l2, u2, n2)) : (Y3 && t && ue2(u2), u2.flags |= 1, nl(l2, u2, a2, n2), u2.child);
  }
  function Hi(l2, u2, a2, t, n2, f2) {
    return pu(u2), u2.updateQueue = null, a2 = r0(u2, t, a2, n2), k0(l2), t = ve3(), l2 !== null && !al ? (he2(l2, u2, f2), tu(l2, u2, f2)) : (Y3 && t && ue2(u2), u2.flags |= 1, nl(l2, u2, a2, f2), u2.child);
  }
  function Ni(l2, u2, a2, t, n2) {
    if (pu(u2), u2.stateNode === null) {
      var f2 = ya, c = a2.contextType;
      typeof c == "object" && c !== null && (f2 = il(c)), f2 = new a2(t, f2), u2.memoizedState = f2.state !== null && f2.state !== void 0 ? f2.state : null, f2.updater = Tc, u2.stateNode = f2, f2._reactInternals = u2, f2 = u2.stateNode, f2.props = t, f2.state = u2.memoizedState, f2.refs = {}, fe2(u2), c = a2.contextType, f2.context = typeof c == "object" && c !== null ? il(c) : ya, f2.state = u2.memoizedState, c = a2.getDerivedStateFromProps, typeof c == "function" && (Bf(u2, a2, c, t), f2.state = u2.memoizedState), typeof a2.getDerivedStateFromProps == "function" || typeof f2.getSnapshotBeforeUpdate == "function" || typeof f2.UNSAFE_componentWillMount != "function" && typeof f2.componentWillMount != "function" || (c = f2.state, typeof f2.componentWillMount == "function" && f2.componentWillMount(), typeof f2.UNSAFE_componentWillMount == "function" && f2.UNSAFE_componentWillMount(), c !== f2.state && Tc.enqueueReplaceState(f2, f2.state, null), ft(u2, t, f2, n2), nt(), f2.state = u2.memoizedState), typeof f2.componentDidMount == "function" && (u2.flags |= 4194308), t = true;
    } else if (l2 === null) {
      f2 = u2.stateNode;
      var e = u2.memoizedProps, i2 = Wu(a2, e);
      f2.props = i2;
      var d2 = f2.context, g2 = a2.contextType;
      c = ya, typeof g2 == "object" && g2 !== null && (c = il(g2));
      var z4 = a2.getDerivedStateFromProps;
      g2 = typeof z4 == "function" || typeof f2.getSnapshotBeforeUpdate == "function", e = u2.pendingProps !== e, g2 || typeof f2.UNSAFE_componentWillReceiveProps != "function" && typeof f2.componentWillReceiveProps != "function" || (e || d2 !== c) && Ei(u2, f2, t, c), hu = false;
      var S3 = u2.memoizedState;
      f2.state = S3, ft(u2, t, f2, n2), nt(), d2 = u2.memoizedState, e || S3 !== d2 || hu ? (typeof z4 == "function" && (Bf(u2, a2, z4, t), d2 = u2.memoizedState), (i2 = hu || Mi(u2, a2, i2, t, S3, d2, c)) ? (g2 || typeof f2.UNSAFE_componentWillMount != "function" && typeof f2.componentWillMount != "function" || (typeof f2.componentWillMount == "function" && f2.componentWillMount(), typeof f2.UNSAFE_componentWillMount == "function" && f2.UNSAFE_componentWillMount()), typeof f2.componentDidMount == "function" && (u2.flags |= 4194308)) : (typeof f2.componentDidMount == "function" && (u2.flags |= 4194308), u2.memoizedProps = t, u2.memoizedState = d2), f2.props = t, f2.state = d2, f2.context = c, t = i2) : (typeof f2.componentDidMount == "function" && (u2.flags |= 4194308), t = false);
    } else {
      f2 = u2.stateNode, Sc(l2, u2), c = u2.memoizedProps, g2 = Wu(a2, c), f2.props = g2, z4 = u2.pendingProps, S3 = f2.context, d2 = a2.contextType, i2 = ya, typeof d2 == "object" && d2 !== null && (i2 = il(d2)), e = a2.getDerivedStateFromProps, (d2 = typeof e == "function" || typeof f2.getSnapshotBeforeUpdate == "function") || typeof f2.UNSAFE_componentWillReceiveProps != "function" && typeof f2.componentWillReceiveProps != "function" || (c !== z4 || S3 !== i2) && Ei(u2, f2, t, i2), hu = false, S3 = u2.memoizedState, f2.state = S3, ft(u2, t, f2, n2), nt();
      var m2 = u2.memoizedState;
      c !== z4 || S3 !== m2 || hu || l2 !== null && l2.dependencies !== null && qn(l2.dependencies) ? (typeof e == "function" && (Bf(u2, a2, e, t), m2 = u2.memoizedState), (g2 = hu || Mi(u2, a2, g2, t, S3, m2, i2) || l2 !== null && l2.dependencies !== null && qn(l2.dependencies)) ? (d2 || typeof f2.UNSAFE_componentWillUpdate != "function" && typeof f2.componentWillUpdate != "function" || (typeof f2.componentWillUpdate == "function" && f2.componentWillUpdate(t, m2, i2), typeof f2.UNSAFE_componentWillUpdate == "function" && f2.UNSAFE_componentWillUpdate(t, m2, i2)), typeof f2.componentDidUpdate == "function" && (u2.flags |= 4), typeof f2.getSnapshotBeforeUpdate == "function" && (u2.flags |= 1024)) : (typeof f2.componentDidUpdate != "function" || c === l2.memoizedProps && S3 === l2.memoizedState || (u2.flags |= 4), typeof f2.getSnapshotBeforeUpdate != "function" || c === l2.memoizedProps && S3 === l2.memoizedState || (u2.flags |= 1024), u2.memoizedProps = t, u2.memoizedState = m2), f2.props = t, f2.state = m2, f2.context = i2, t = g2) : (typeof f2.componentDidUpdate != "function" || c === l2.memoizedProps && S3 === l2.memoizedState || (u2.flags |= 4), typeof f2.getSnapshotBeforeUpdate != "function" || c === l2.memoizedProps && S3 === l2.memoizedState || (u2.flags |= 1024), t = false);
    }
    return f2 = t, mn(l2, u2), t = (u2.flags & 128) !== 0, f2 || t ? (f2 = u2.stateNode, a2 = t && typeof a2.getDerivedStateFromError != "function" ? null : f2.render(), u2.flags |= 1, l2 !== null && t ? (u2.child = Ba(u2, l2.child, null, n2), u2.child = Ba(u2, null, a2, n2)) : nl(l2, u2, a2, n2), u2.memoizedState = f2.state, l2 = u2.child) : l2 = tu(l2, u2, n2), l2;
  }
  function qi(l2, u2, a2, t) {
    return ot(), u2.flags |= 256, nl(l2, u2, a2, t), u2.child;
  }
  var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yf(l2) {
    return {
      baseLanes: l2,
      cachePool: J0()
    };
  }
  function of(l2, u2, a2) {
    return l2 = l2 !== null ? l2.childLanes & ~a2 : 0, u2 && (l2 |= Rl), l2;
  }
  function V1(l2, u2, a2) {
    var t = u2.pendingProps, n2 = false, f2 = (u2.flags & 128) !== 0, c;
    if ((c = f2) || (c = l2 !== null && l2.memoizedState === null ? false : (r.current & 2) !== 0), c && (n2 = true, u2.flags &= -129), c = (u2.flags & 32) !== 0, u2.flags &= -33, l2 === null) {
      if (Y3) {
        if (n2 ? du(u2) : Su(u2), Y3) {
          var e = p3, i2;
          if (i2 = e) {
            l: {
              for (i2 = e, e = Zl; i2.nodeType !== 8; ) {
                if (!e) {
                  e = null;
                  break l;
                }
                if (i2 = Xl(i2.nextSibling), i2 === null) {
                  e = null;
                  break l;
                }
              }
              e = i2;
            }
            e !== null ? (u2.memoizedState = {
              dehydrated: e,
              treeContext: xu !== null ? {
                id: Fl,
                overflow: kl
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i2 = Al(18, null, null, 0), i2.stateNode = e, i2.return = u2, u2.child = i2, vl = u2, p3 = null, i2 = true) : i2 = false;
          }
          i2 || Lu(u2);
        }
        if (e = u2.memoizedState, e !== null && (e = e.dehydrated, e !== null)) return Gc(e) ? u2.lanes = 32 : u2.lanes = 536870912, null;
        Il(u2);
      }
      return e = t.children, t = t.fallback, n2 ? (Su(u2), n2 = u2.mode, e = Qn({
        mode: "hidden",
        children: e
      }, n2), t = Zu(t, n2, a2, null), e.return = u2, t.return = u2, e.sibling = t, u2.child = e, n2 = u2.child, n2.memoizedState = Yf(a2), n2.childLanes = of(l2, c, a2), u2.memoizedState = Rf, t) : (du(u2), Dc(u2, e));
    }
    if (i2 = l2.memoizedState, i2 !== null && (e = i2.dehydrated, e !== null)) {
      if (f2) u2.flags & 256 ? (du(u2), u2.flags &= -257, u2 = _f(l2, u2, a2)) : u2.memoizedState !== null ? (Su(u2), u2.child = l2.child, u2.flags |= 128, u2 = null) : (Su(u2), n2 = t.fallback, e = u2.mode, t = Qn({
        mode: "visible",
        children: t.children
      }, e), n2 = Zu(n2, e, a2, null), n2.flags |= 2, t.return = u2, n2.return = u2, t.sibling = n2, u2.child = t, Ba(u2, l2.child, null, a2), t = u2.child, t.memoizedState = Yf(a2), t.childLanes = of(l2, c, a2), u2.memoizedState = Rf, u2 = n2);
      else if (du(u2), Gc(e)) {
        if (c = e.nextSibling && e.nextSibling.dataset, c) var d2 = c.dgst;
        c = d2, t = Error(A2(419)), t.stack = "", t.digest = c, bt({
          value: t,
          source: null,
          stack: null
        }), u2 = _f(l2, u2, a2);
      } else if (al || _t(l2, u2, a2, false), c = (a2 & l2.childLanes) !== 0, al || c) {
        if (c = V2, c !== null && (t = a2 & -a2, t = (t & 42) !== 0 ? 1 : Lc(t), t = (t & (c.suspendedLanes | a2)) !== 0 ? 0 : t, t !== 0 && t !== i2.retryLane)) throw i2.retryLane = t, Qa(l2, t), Dl(c, l2, t), Q1;
        e.data === "$?" || qc(), u2 = _f(l2, u2, a2);
      } else e.data === "$?" ? (u2.flags |= 192, u2.child = l2.child, u2 = null) : (l2 = i2.treeContext, p3 = Xl(e.nextSibling), vl = u2, Y3 = true, Vu = null, Zl = false, l2 !== null && (Hl[Nl++] = Fl, Hl[Nl++] = kl, Hl[Nl++] = xu, Fl = l2.id, kl = l2.overflow, xu = u2), u2 = Dc(u2, t.children), u2.flags |= 4096);
      return u2;
    }
    return n2 ? (Su(u2), n2 = t.fallback, e = u2.mode, i2 = l2.child, d2 = i2.sibling, t = Pl(i2, {
      mode: "hidden",
      children: t.children
    }), t.subtreeFlags = i2.subtreeFlags & 65011712, d2 !== null ? n2 = Pl(d2, n2) : (n2 = Zu(n2, e, a2, null), n2.flags |= 2), n2.return = u2, t.return = u2, t.sibling = n2, u2.child = t, t = n2, n2 = u2.child, e = l2.child.memoizedState, e === null ? e = Yf(a2) : (i2 = e.cachePool, i2 !== null ? (d2 = k4._currentValue, i2 = i2.parent !== d2 ? {
      parent: d2,
      pool: d2
    } : i2) : i2 = J0(), e = {
      baseLanes: e.baseLanes | a2,
      cachePool: i2
    }), n2.memoizedState = e, n2.childLanes = of(l2, c, a2), u2.memoizedState = Rf, t) : (du(u2), a2 = l2.child, l2 = a2.sibling, a2 = Pl(a2, {
      mode: "visible",
      children: t.children
    }), a2.return = u2, a2.sibling = null, l2 !== null && (c = u2.deletions, c === null ? (u2.deletions = [
      l2
    ], u2.flags |= 16) : c.push(l2)), u2.child = a2, u2.memoizedState = null, a2);
  }
  function Dc(l2, u2) {
    return u2 = Qn({
      mode: "visible",
      children: u2
    }, l2.mode), u2.return = l2, l2.child = u2;
  }
  function Qn(l2, u2) {
    return l2 = Al(22, l2, null, u2), l2.lanes = 0, l2.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l2;
  }
  function _f(l2, u2, a2) {
    return Ba(u2, l2.child, null, a2), l2 = Dc(u2, u2.pendingProps.children), l2.flags |= 2, u2.memoizedState = null, l2;
  }
  function Bi(l2, u2, a2) {
    l2.lanes |= u2;
    var t = l2.alternate;
    t !== null && (t.lanes |= u2), vc(l2.return, u2, a2);
  }
  function Xf(l2, u2, a2, t, n2) {
    var f2 = l2.memoizedState;
    f2 === null ? l2.memoizedState = {
      isBackwards: u2,
      rendering: null,
      renderingStartTime: 0,
      last: t,
      tail: a2,
      tailMode: n2
    } : (f2.isBackwards = u2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = t, f2.tail = a2, f2.tailMode = n2);
  }
  function j1(l2, u2, a2) {
    var t = u2.pendingProps, n2 = t.revealOrder, f2 = t.tail;
    if (nl(l2, u2, t.children, a2), t = r.current, (t & 2) !== 0) t = t & 1 | 2, u2.flags |= 128;
    else {
      if (l2 !== null && (l2.flags & 128) !== 0) l: for (l2 = u2.child; l2 !== null; ) {
        if (l2.tag === 13) l2.memoizedState !== null && Bi(l2, a2, u2);
        else if (l2.tag === 19) Bi(l2, a2, u2);
        else if (l2.child !== null) {
          l2.child.return = l2, l2 = l2.child;
          continue;
        }
        if (l2 === u2) break l;
        for (; l2.sibling === null; ) {
          if (l2.return === null || l2.return === u2) break l;
          l2 = l2.return;
        }
        l2.sibling.return = l2.return, l2 = l2.sibling;
      }
      t &= 1;
    }
    switch (C3(r, t), n2) {
      case "forwards":
        for (a2 = u2.child, n2 = null; a2 !== null; ) l2 = a2.alternate, l2 !== null && _n(l2) === null && (n2 = a2), a2 = a2.sibling;
        a2 = n2, a2 === null ? (n2 = u2.child, u2.child = null) : (n2 = a2.sibling, a2.sibling = null), Xf(u2, false, n2, a2, f2);
        break;
      case "backwards":
        for (a2 = null, n2 = u2.child, u2.child = null; n2 !== null; ) {
          if (l2 = n2.alternate, l2 !== null && _n(l2) === null) {
            u2.child = n2;
            break;
          }
          l2 = n2.sibling, n2.sibling = a2, a2 = n2, n2 = l2;
        }
        Xf(u2, true, a2, null, f2);
        break;
      case "together":
        Xf(u2, false, null, null, void 0);
        break;
      default:
        u2.memoizedState = null;
    }
    return u2.child;
  }
  function tu(l2, u2, a2) {
    if (l2 !== null && (u2.dependencies = l2.dependencies), Bu |= u2.lanes, (a2 & u2.childLanes) === 0) if (l2 !== null) {
      if (_t(l2, u2, a2, false), (a2 & u2.childLanes) === 0) return null;
    } else return null;
    if (l2 !== null && u2.child !== l2.child) throw Error(A2(153));
    if (u2.child !== null) {
      for (l2 = u2.child, a2 = Pl(l2, l2.pendingProps), u2.child = a2, a2.return = u2; l2.sibling !== null; ) l2 = l2.sibling, a2 = a2.sibling = Pl(l2, l2.pendingProps), a2.return = u2;
      a2.sibling = null;
    }
    return u2.child;
  }
  function Te2(l2, u2) {
    return (l2.lanes & u2) !== 0 ? true : (l2 = l2.dependencies, !!(l2 !== null && qn(l2)));
  }
  function Oy(l2, u2, a2) {
    switch (u2.tag) {
      case 3:
        Mn(u2, u2.stateNode.containerInfo), yu(u2, k4, l2.memoizedState.cache), ot();
        break;
      case 27:
      case 5:
        rf(u2);
        break;
      case 4:
        Mn(u2, u2.stateNode.containerInfo);
        break;
      case 10:
        yu(u2, u2.type, u2.memoizedProps.value);
        break;
      case 13:
        var t = u2.memoizedState;
        if (t !== null) return t.dehydrated !== null ? (du(u2), u2.flags |= 128, null) : (a2 & u2.child.childLanes) !== 0 ? V1(l2, u2, a2) : (du(u2), l2 = tu(l2, u2, a2), l2 !== null ? l2.sibling : null);
        du(u2);
        break;
      case 19:
        var n2 = (l2.flags & 128) !== 0;
        if (t = (a2 & u2.childLanes) !== 0, t || (_t(l2, u2, a2, false), t = (a2 & u2.childLanes) !== 0), n2) {
          if (t) return j1(l2, u2, a2);
          u2.flags |= 128;
        }
        if (n2 = u2.memoizedState, n2 !== null && (n2.rendering = null, n2.tail = null, n2.lastEffect = null), C3(r, r.current), t) break;
        return null;
      case 22:
      case 23:
        return u2.lanes = 0, x1(l2, u2, a2);
      case 24:
        yu(u2, k4, l2.memoizedState.cache);
    }
    return tu(l2, u2, a2);
  }
  function K1(l2, u2, a2) {
    if (l2 !== null) if (l2.memoizedProps !== u2.pendingProps) al = true;
    else {
      if (!Te2(l2, a2) && (u2.flags & 128) === 0) return al = false, Oy(l2, u2, a2);
      al = (l2.flags & 131072) !== 0;
    }
    else al = false, Y3 && (u2.flags & 1048576) !== 0 && L0(u2, Nn, u2.index);
    switch (u2.lanes = 0, u2.tag) {
      case 16:
        l: {
          l2 = u2.pendingProps;
          var t = u2.elementType, n2 = t._init;
          if (t = n2(t._payload), u2.type = t, typeof t == "function") le2(t) ? (l2 = Wu(t, l2), u2.tag = 1, u2 = Ni(null, u2, t, l2, a2)) : (u2.tag = 0, u2 = Ec(null, u2, t, l2, a2));
          else {
            if (t != null) {
              if (n2 = t.$$typeof, n2 === jc) {
                u2.tag = 11, u2 = Oi(null, u2, t, l2, a2);
                break l;
              } else if (n2 === Kc) {
                u2.tag = 14, u2 = si(null, u2, t, l2, a2);
                break l;
              }
            }
            throw u2 = Ff(t) || t, Error(A2(306, u2, ""));
          }
        }
        return u2;
      case 0:
        return Ec(l2, u2, u2.type, u2.pendingProps, a2);
      case 1:
        return t = u2.type, n2 = Wu(t, u2.pendingProps), Ni(l2, u2, t, n2, a2);
      case 3:
        l: {
          if (Mn(u2, u2.stateNode.containerInfo), l2 === null) throw Error(A2(387));
          t = u2.pendingProps;
          var f2 = u2.memoizedState;
          n2 = f2.element, Sc(l2, u2), ft(u2, t, null, a2);
          var c = u2.memoizedState;
          if (t = c.cache, yu(u2, k4, t), t !== f2.cache && hc(u2, [
            k4
          ], a2, true), nt(), t = c.element, f2.isDehydrated) if (f2 = {
            element: t,
            isDehydrated: false,
            cache: c.cache
          }, u2.updateQueue.baseState = f2, u2.memoizedState = f2, u2.flags & 256) {
            u2 = qi(l2, u2, t, a2);
            break l;
          } else if (t !== n2) {
            n2 = Bl(Error(A2(424)), u2), bt(n2), u2 = qi(l2, u2, t, a2);
            break l;
          } else {
            switch (l2 = u2.stateNode.containerInfo, l2.nodeType) {
              case 9:
                l2 = l2.body;
                break;
              default:
                l2 = l2.nodeName === "HTML" ? l2.ownerDocument.body : l2;
            }
            for (p3 = Xl(l2.firstChild), vl = u2, Y3 = true, Vu = null, Zl = true, a2 = B1(u2, null, t, a2), u2.child = a2; a2; ) a2.flags = a2.flags & -3 | 4096, a2 = a2.sibling;
          }
          else {
            if (ot(), t === n2) {
              u2 = tu(l2, u2, a2);
              break l;
            }
            nl(l2, u2, t, a2);
          }
          u2 = u2.child;
        }
        return u2;
      case 26:
        return mn(l2, u2), l2 === null ? (a2 = $i(u2.type, null, u2.pendingProps, null)) ? u2.memoizedState = a2 : Y3 || (a2 = u2.type, l2 = u2.pendingProps, t = Ln(Tu.current).createElement(a2), t[el] = u2, t[Sl] = l2, cl(t, a2, l2), ul(t), u2.stateNode = t) : u2.memoizedState = $i(u2.type, l2.memoizedProps, u2.pendingProps, l2.memoizedState), null;
      case 27:
        return rf(u2), l2 === null && Y3 && (t = u2.stateNode = Nv(u2.type, u2.pendingProps, Tu.current), vl = u2, Zl = true, n2 = p3, Yu(u2.type) ? (Qc = n2, p3 = Xl(t.firstChild)) : p3 = n2), nl(l2, u2, u2.pendingProps.children, a2), mn(l2, u2), l2 === null && (u2.flags |= 4194304), u2.child;
      case 5:
        return l2 === null && Y3 && ((n2 = t = p3) && (t = Fy(t, u2.type, u2.pendingProps, Zl), t !== null ? (u2.stateNode = t, vl = u2, p3 = Xl(t.firstChild), Zl = false, n2 = true) : n2 = false), n2 || Lu(u2)), rf(u2), n2 = u2.type, f2 = u2.pendingProps, c = l2 !== null ? l2.memoizedProps : null, t = f2.children, _c(n2, f2) ? t = null : c !== null && _c(n2, c) && (u2.flags |= 32), u2.memoizedState !== null && (n2 = ie2(l2, u2, gy, null, null, a2), Dt._currentValue = n2), mn(l2, u2), nl(l2, u2, t, a2), u2.child;
      case 6:
        return l2 === null && Y3 && ((l2 = a2 = p3) && (a2 = ky(a2, u2.pendingProps, Zl), a2 !== null ? (u2.stateNode = a2, vl = u2, p3 = null, l2 = true) : l2 = false), l2 || Lu(u2)), null;
      case 13:
        return V1(l2, u2, a2);
      case 4:
        return Mn(u2, u2.stateNode.containerInfo), t = u2.pendingProps, l2 === null ? u2.child = Ba(u2, null, t, a2) : nl(l2, u2, t, a2), u2.child;
      case 11:
        return Oi(l2, u2, u2.type, u2.pendingProps, a2);
      case 7:
        return nl(l2, u2, u2.pendingProps, a2), u2.child;
      case 8:
        return nl(l2, u2, u2.pendingProps.children, a2), u2.child;
      case 12:
        return nl(l2, u2, u2.pendingProps.children, a2), u2.child;
      case 10:
        return t = u2.pendingProps, yu(u2, u2.type, t.value), nl(l2, u2, t.children, a2), u2.child;
      case 9:
        return n2 = u2.type._context, t = u2.pendingProps.children, pu(u2), n2 = il(n2), t = t(n2), u2.flags |= 1, nl(l2, u2, t, a2), u2.child;
      case 14:
        return si(l2, u2, u2.type, u2.pendingProps, a2);
      case 15:
        return Z1(l2, u2, u2.type, u2.pendingProps, a2);
      case 19:
        return j1(l2, u2, a2);
      case 31:
        return t = u2.pendingProps, a2 = u2.mode, t = {
          mode: t.mode,
          children: t.children
        }, l2 === null ? (a2 = Qn(t, a2), a2.ref = u2.ref, u2.child = a2, a2.return = u2, u2 = a2) : (a2 = Pl(l2.child, t), a2.ref = u2.ref, u2.child = a2, a2.return = u2, u2 = a2), u2;
      case 22:
        return x1(l2, u2, a2);
      case 24:
        return pu(u2), t = il(k4), l2 === null ? (n2 = ne(), n2 === null && (n2 = V2, f2 = te(), n2.pooledCache = f2, f2.refCount++, f2 !== null && (n2.pooledCacheLanes |= a2), n2 = f2), u2.memoizedState = {
          parent: t,
          cache: n2
        }, fe2(u2), yu(u2, k4, n2)) : ((l2.lanes & a2) !== 0 && (Sc(l2, u2), ft(u2, null, null, a2), nt()), n2 = l2.memoizedState, f2 = u2.memoizedState, n2.parent !== t ? (n2 = {
          parent: t,
          cache: t
        }, u2.memoizedState = n2, u2.lanes === 0 && (u2.memoizedState = u2.updateQueue.baseState = n2), yu(u2, k4, t)) : (t = f2.cache, yu(u2, k4, t), t !== n2.cache && hc(u2, [
          k4
        ], a2, true))), nl(l2, u2, u2.pendingProps.children, a2), u2.child;
      case 29:
        throw u2.pendingProps;
    }
    throw Error(A2(156, u2.tag));
  }
  function Jl(l2) {
    l2.flags |= 4;
  }
  function Ri(l2, u2) {
    if (u2.type !== "stylesheet" || (u2.state.loading & 4) !== 0) l2.flags &= -16777217;
    else if (l2.flags |= 16777216, !Rv(u2)) {
      if (u2 = Yl.current, u2 !== null && ((B2 & 4194048) === B2 ? Kl !== null : (B2 & 62914560) !== B2 && (B2 & 536870912) === 0 || u2 !== Kl)) throw at = dc, W0;
      l2.flags |= 8192;
    }
  }
  function Pt(l2, u2) {
    u2 !== null && (l2.flags |= 4), l2.flags & 16384 && (u2 = l2.tag !== 22 ? S0() : 536870912, l2.lanes |= u2, Ra |= u2);
  }
  function pa(l2, u2) {
    if (!Y3) switch (l2.tailMode) {
      case "hidden":
        u2 = l2.tail;
        for (var a2 = null; u2 !== null; ) u2.alternate !== null && (a2 = u2), u2 = u2.sibling;
        a2 === null ? l2.tail = null : a2.sibling = null;
        break;
      case "collapsed":
        a2 = l2.tail;
        for (var t = null; a2 !== null; ) a2.alternate !== null && (t = a2), a2 = a2.sibling;
        t === null ? u2 || l2.tail === null ? l2.tail = null : l2.tail.sibling = null : t.sibling = null;
    }
  }
  function L(l2) {
    var u2 = l2.alternate !== null && l2.alternate.child === l2.child, a2 = 0, t = 0;
    if (u2) for (var n2 = l2.child; n2 !== null; ) a2 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags & 65011712, t |= n2.flags & 65011712, n2.return = l2, n2 = n2.sibling;
    else for (n2 = l2.child; n2 !== null; ) a2 |= n2.lanes | n2.childLanes, t |= n2.subtreeFlags, t |= n2.flags, n2.return = l2, n2 = n2.sibling;
    return l2.subtreeFlags |= t, l2.childLanes = a2, u2;
  }
  function sy(l2, u2, a2) {
    var t = u2.pendingProps;
    switch (ae3(u2), u2.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return L(u2), null;
      case 1:
        return L(u2), null;
      case 3:
        return a2 = u2.stateNode, t = null, l2 !== null && (t = l2.memoizedState.cache), u2.memoizedState.cache !== t && (u2.flags |= 2048), lu(k4), Oa(), a2.pendingContext && (a2.context = a2.pendingContext, a2.pendingContext = null), (l2 === null || l2.child === null) && (Ca(u2) ? Jl(u2) : l2 === null || l2.memoizedState.isDehydrated && (u2.flags & 256) === 0 || (u2.flags |= 1024, ci())), L(u2), null;
      case 26:
        return a2 = u2.memoizedState, l2 === null ? (Jl(u2), a2 !== null ? (L(u2), Ri(u2, a2)) : (L(u2), u2.flags &= -16777217)) : a2 ? a2 !== l2.memoizedState ? (Jl(u2), L(u2), Ri(u2, a2)) : (L(u2), u2.flags &= -16777217) : (l2.memoizedProps !== t && Jl(u2), L(u2), u2.flags &= -16777217), null;
      case 27:
        En(u2), a2 = Tu.current;
        var n2 = u2.type;
        if (l2 !== null && u2.stateNode != null) l2.memoizedProps !== t && Jl(u2);
        else {
          if (!t) {
            if (u2.stateNode === null) throw Error(A2(166));
            return L(u2), null;
          }
          l2 = Vl.current, Ca(u2) ? ni(u2, l2) : (l2 = Nv(n2, t, a2), u2.stateNode = l2, Jl(u2));
        }
        return L(u2), null;
      case 5:
        if (En(u2), a2 = u2.type, l2 !== null && u2.stateNode != null) l2.memoizedProps !== t && Jl(u2);
        else {
          if (!t) {
            if (u2.stateNode === null) throw Error(A2(166));
            return L(u2), null;
          }
          if (l2 = Vl.current, Ca(u2)) ni(u2, l2);
          else {
            switch (n2 = Ln(Tu.current), l2) {
              case 1:
                l2 = n2.createElementNS("http://www.w3.org/2000/svg", a2);
                break;
              case 2:
                l2 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a2);
                break;
              default:
                switch (a2) {
                  case "svg":
                    l2 = n2.createElementNS("http://www.w3.org/2000/svg", a2);
                    break;
                  case "math":
                    l2 = n2.createElementNS("http://www.w3.org/1998/Math/MathML", a2);
                    break;
                  case "script":
                    l2 = n2.createElement("div"), l2.innerHTML = "<script></script>", l2 = l2.removeChild(l2.firstChild);
                    break;
                  case "select":
                    l2 = typeof t.is == "string" ? n2.createElement("select", {
                      is: t.is
                    }) : n2.createElement("select"), t.multiple ? l2.multiple = true : t.size && (l2.size = t.size);
                    break;
                  default:
                    l2 = typeof t.is == "string" ? n2.createElement(a2, {
                      is: t.is
                    }) : n2.createElement(a2);
                }
            }
            l2[el] = u2, l2[Sl] = t;
            l: for (n2 = u2.child; n2 !== null; ) {
              if (n2.tag === 5 || n2.tag === 6) l2.appendChild(n2.stateNode);
              else if (n2.tag !== 4 && n2.tag !== 27 && n2.child !== null) {
                n2.child.return = n2, n2 = n2.child;
                continue;
              }
              if (n2 === u2) break l;
              for (; n2.sibling === null; ) {
                if (n2.return === null || n2.return === u2) break l;
                n2 = n2.return;
              }
              n2.sibling.return = n2.return, n2 = n2.sibling;
            }
            u2.stateNode = l2;
            l: switch (cl(l2, a2, t), a2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l2 = !!t.autoFocus;
                break l;
              case "img":
                l2 = true;
                break l;
              default:
                l2 = false;
            }
            l2 && Jl(u2);
          }
        }
        return L(u2), u2.flags &= -16777217, null;
      case 6:
        if (l2 && u2.stateNode != null) l2.memoizedProps !== t && Jl(u2);
        else {
          if (typeof t != "string" && u2.stateNode === null) throw Error(A2(166));
          if (l2 = Tu.current, Ca(u2)) {
            if (l2 = u2.stateNode, a2 = u2.memoizedProps, t = null, n2 = vl, n2 !== null) switch (n2.tag) {
              case 27:
              case 5:
                t = n2.memoizedProps;
            }
            l2[el] = u2, l2 = !!(l2.nodeValue === a2 || t !== null && t.suppressHydrationWarning === true || sv(l2.nodeValue, a2)), l2 || Lu(u2);
          } else l2 = Ln(l2).createTextNode(t), l2[el] = u2, u2.stateNode = l2;
        }
        return L(u2), null;
      case 13:
        if (t = u2.memoizedState, l2 === null || l2.memoizedState !== null && l2.memoizedState.dehydrated !== null) {
          if (n2 = Ca(u2), t !== null && t.dehydrated !== null) {
            if (l2 === null) {
              if (!n2) throw Error(A2(318));
              if (n2 = u2.memoizedState, n2 = n2 !== null ? n2.dehydrated : null, !n2) throw Error(A2(317));
              n2[el] = u2;
            } else ot(), (u2.flags & 128) === 0 && (u2.memoizedState = null), u2.flags |= 4;
            L(u2), n2 = false;
          } else n2 = ci(), l2 !== null && l2.memoizedState !== null && (l2.memoizedState.hydrationErrors = n2), n2 = true;
          if (!n2) return u2.flags & 256 ? (Il(u2), u2) : (Il(u2), null);
        }
        if (Il(u2), (u2.flags & 128) !== 0) return u2.lanes = a2, u2;
        if (a2 = t !== null, l2 = l2 !== null && l2.memoizedState !== null, a2) {
          t = u2.child, n2 = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (n2 = t.alternate.memoizedState.cachePool.pool);
          var f2 = null;
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (f2 = t.memoizedState.cachePool.pool), f2 !== n2 && (t.flags |= 2048);
        }
        return a2 !== l2 && a2 && (u2.child.flags |= 8192), Pt(u2, u2.updateQueue), L(u2), null;
      case 4:
        return Oa(), l2 === null && Ne2(u2.stateNode.containerInfo), L(u2), null;
      case 10:
        return lu(u2.type), L(u2), null;
      case 19:
        if (tl(r), n2 = u2.memoizedState, n2 === null) return L(u2), null;
        if (t = (u2.flags & 128) !== 0, f2 = n2.rendering, f2 === null) if (t) pa(n2, false);
        else {
          if (J2 !== 0 || l2 !== null && (l2.flags & 128) !== 0) for (l2 = u2.child; l2 !== null; ) {
            if (f2 = _n(l2), f2 !== null) {
              for (u2.flags |= 128, pa(n2, false), l2 = f2.updateQueue, u2.updateQueue = l2, Pt(u2, l2), u2.subtreeFlags = 0, l2 = a2, a2 = u2.child; a2 !== null; ) C0(a2, l2), a2 = a2.sibling;
              return C3(r, r.current & 1 | 2), u2.child;
            }
            l2 = l2.sibling;
          }
          n2.tail !== null && jl() > xn && (u2.flags |= 128, t = true, pa(n2, false), u2.lanes = 4194304);
        }
        else {
          if (!t) if (l2 = _n(f2), l2 !== null) {
            if (u2.flags |= 128, t = true, l2 = l2.updateQueue, u2.updateQueue = l2, Pt(u2, l2), pa(n2, true), n2.tail === null && n2.tailMode === "hidden" && !f2.alternate && !Y3) return L(u2), null;
          } else 2 * jl() - n2.renderingStartTime > xn && a2 !== 536870912 && (u2.flags |= 128, t = true, pa(n2, false), u2.lanes = 4194304);
          n2.isBackwards ? (f2.sibling = u2.child, u2.child = f2) : (l2 = n2.last, l2 !== null ? l2.sibling = f2 : u2.child = f2, n2.last = f2);
        }
        return n2.tail !== null ? (u2 = n2.tail, n2.rendering = u2, n2.tail = u2.sibling, n2.renderingStartTime = jl(), u2.sibling = null, l2 = r.current, C3(r, t ? l2 & 1 | 2 : l2 & 1), u2) : (L(u2), null);
      case 22:
      case 23:
        return Il(u2), ce3(), t = u2.memoizedState !== null, l2 !== null ? l2.memoizedState !== null !== t && (u2.flags |= 8192) : t && (u2.flags |= 8192), t ? (a2 & 536870912) !== 0 && (u2.flags & 128) === 0 && (L(u2), u2.subtreeFlags & 6 && (u2.flags |= 8192)) : L(u2), a2 = u2.updateQueue, a2 !== null && Pt(u2, a2.retryQueue), a2 = null, l2 !== null && l2.memoizedState !== null && l2.memoizedState.cachePool !== null && (a2 = l2.memoizedState.cachePool.pool), t = null, u2.memoizedState !== null && u2.memoizedState.cachePool !== null && (t = u2.memoizedState.cachePool.pool), t !== a2 && (u2.flags |= 2048), l2 !== null && tl(ju), null;
      case 24:
        return a2 = null, l2 !== null && (a2 = l2.memoizedState.cache), u2.memoizedState.cache !== a2 && (u2.flags |= 2048), lu(k4), L(u2), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A2(156, u2.tag));
  }
  function Uy(l2, u2) {
    switch (ae3(u2), u2.tag) {
      case 1:
        return l2 = u2.flags, l2 & 65536 ? (u2.flags = l2 & -65537 | 128, u2) : null;
      case 3:
        return lu(k4), Oa(), l2 = u2.flags, (l2 & 65536) !== 0 && (l2 & 128) === 0 ? (u2.flags = l2 & -65537 | 128, u2) : null;
      case 26:
      case 27:
      case 5:
        return En(u2), null;
      case 13:
        if (Il(u2), l2 = u2.memoizedState, l2 !== null && l2.dehydrated !== null) {
          if (u2.alternate === null) throw Error(A2(340));
          ot();
        }
        return l2 = u2.flags, l2 & 65536 ? (u2.flags = l2 & -65537 | 128, u2) : null;
      case 19:
        return tl(r), null;
      case 4:
        return Oa(), null;
      case 10:
        return lu(u2.type), null;
      case 22:
      case 23:
        return Il(u2), ce3(), l2 !== null && tl(ju), l2 = u2.flags, l2 & 65536 ? (u2.flags = l2 & -65537 | 128, u2) : null;
      case 24:
        return lu(k4), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function C1(l2, u2) {
    switch (ae3(u2), u2.tag) {
      case 3:
        lu(k4), Oa();
        break;
      case 26:
      case 27:
      case 5:
        En(u2);
        break;
      case 4:
        Oa();
        break;
      case 13:
        Il(u2);
        break;
      case 19:
        tl(r);
        break;
      case 10:
        lu(u2.type);
        break;
      case 22:
      case 23:
        Il(u2), ce3(), l2 !== null && tl(ju);
        break;
      case 24:
        lu(k4);
    }
  }
  function xt(l2, u2) {
    try {
      var a2 = u2.updateQueue, t = a2 !== null ? a2.lastEffect : null;
      if (t !== null) {
        var n2 = t.next;
        a2 = n2;
        do {
          if ((a2.tag & l2) === l2) {
            t = void 0;
            var f2 = a2.create, c = a2.inst;
            t = f2(), c.destroy = t;
          }
          a2 = a2.next;
        } while (a2 !== n2);
      }
    } catch (e) {
      x4(u2, u2.return, e);
    }
  }
  function qu(l2, u2, a2) {
    try {
      var t = u2.updateQueue, n2 = t !== null ? t.lastEffect : null;
      if (n2 !== null) {
        var f2 = n2.next;
        t = f2;
        do {
          if ((t.tag & l2) === l2) {
            var c = t.inst, e = c.destroy;
            if (e !== void 0) {
              c.destroy = void 0, n2 = u2;
              var i2 = a2, d2 = e;
              try {
                d2();
              } catch (g2) {
                x4(n2, i2, g2);
              }
            }
          }
          t = t.next;
        } while (t !== f2);
      }
    } catch (g2) {
      x4(u2, u2.return, g2);
    }
  }
  function L1(l2) {
    var u2 = l2.updateQueue;
    if (u2 !== null) {
      var a2 = l2.stateNode;
      try {
        F0(u2, a2);
      } catch (t) {
        x4(l2, l2.return, t);
      }
    }
  }
  function p1(l2, u2, a2) {
    a2.props = Wu(l2.type, l2.memoizedProps), a2.state = l2.memoizedState;
    try {
      a2.componentWillUnmount();
    } catch (t) {
      x4(l2, u2, t);
    }
  }
  function et(l2, u2) {
    try {
      var a2 = l2.ref;
      if (a2 !== null) {
        switch (l2.tag) {
          case 26:
          case 27:
          case 5:
            var t = l2.stateNode;
            break;
          case 30:
            t = l2.stateNode;
            break;
          default:
            t = l2.stateNode;
        }
        typeof a2 == "function" ? l2.refCleanup = a2(t) : a2.current = t;
      }
    } catch (n2) {
      x4(l2, u2, n2);
    }
  }
  function xl(l2, u2) {
    var a2 = l2.ref, t = l2.refCleanup;
    if (a2 !== null) if (typeof t == "function") try {
      t();
    } catch (n2) {
      x4(l2, u2, n2);
    } finally {
      l2.refCleanup = null, l2 = l2.alternate, l2 != null && (l2.refCleanup = null);
    }
    else if (typeof a2 == "function") try {
      a2(null);
    } catch (n2) {
      x4(l2, u2, n2);
    }
    else a2.current = null;
  }
  function J1(l2) {
    var u2 = l2.type, a2 = l2.memoizedProps, t = l2.stateNode;
    try {
      l: switch (u2) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a2.autoFocus && t.focus();
          break l;
        case "img":
          a2.src ? t.src = a2.src : a2.srcSet && (t.srcset = a2.srcSet);
      }
    } catch (n2) {
      x4(l2, l2.return, n2);
    }
  }
  function Gf(l2, u2, a2) {
    try {
      var t = l2.stateNode;
      py(t, l2.type, a2, u2), t[Sl] = u2;
    } catch (n2) {
      x4(l2, l2.return, n2);
    }
  }
  function W1(l2) {
    return l2.tag === 5 || l2.tag === 3 || l2.tag === 26 || l2.tag === 27 && Yu(l2.type) || l2.tag === 4;
  }
  function Qf(l2) {
    l: for (; ; ) {
      for (; l2.sibling === null; ) {
        if (l2.return === null || W1(l2.return)) return null;
        l2 = l2.return;
      }
      for (l2.sibling.return = l2.return, l2 = l2.sibling; l2.tag !== 5 && l2.tag !== 6 && l2.tag !== 18; ) {
        if (l2.tag === 27 && Yu(l2.type) || l2.flags & 2 || l2.child === null || l2.tag === 4) continue l;
        l2.child.return = l2, l2 = l2.child;
      }
      if (!(l2.flags & 2)) return l2.stateNode;
    }
  }
  function Oc(l2, u2, a2) {
    var t = l2.tag;
    if (t === 5 || t === 6) l2 = l2.stateNode, u2 ? (a2.nodeType === 9 ? a2.body : a2.nodeName === "HTML" ? a2.ownerDocument.body : a2).insertBefore(l2, u2) : (u2 = a2.nodeType === 9 ? a2.body : a2.nodeName === "HTML" ? a2.ownerDocument.body : a2, u2.appendChild(l2), a2 = a2._reactRootContainer, a2 != null || u2.onclick !== null || (u2.onclick = vf));
    else if (t !== 4 && (t === 27 && Yu(l2.type) && (a2 = l2.stateNode, u2 = null), l2 = l2.child, l2 !== null)) for (Oc(l2, u2, a2), l2 = l2.sibling; l2 !== null; ) Oc(l2, u2, a2), l2 = l2.sibling;
  }
  function Zn(l2, u2, a2) {
    var t = l2.tag;
    if (t === 5 || t === 6) l2 = l2.stateNode, u2 ? a2.insertBefore(l2, u2) : a2.appendChild(l2);
    else if (t !== 4 && (t === 27 && Yu(l2.type) && (a2 = l2.stateNode), l2 = l2.child, l2 !== null)) for (Zn(l2, u2, a2), l2 = l2.sibling; l2 !== null; ) Zn(l2, u2, a2), l2 = l2.sibling;
  }
  function w1(l2) {
    var u2 = l2.stateNode, a2 = l2.memoizedProps;
    try {
      for (var t = l2.type, n2 = u2.attributes; n2.length; ) u2.removeAttributeNode(n2[0]);
      cl(u2, t, a2), u2[el] = l2, u2[Sl] = a2;
    } catch (f2) {
      x4(l2, l2.return, f2);
    }
  }
  var wl = false, w2 = false, Zf = false, Yi = typeof WeakSet == "function" ? WeakSet : Set, ll = null;
  function Hy(l2, u2) {
    if (l2 = l2.containerInfo, Yc = wn, l2 = X0(l2), rc(l2)) {
      if ("selectionStart" in l2) var a2 = {
        start: l2.selectionStart,
        end: l2.selectionEnd
      };
      else l: {
        a2 = (a2 = l2.ownerDocument) && a2.defaultView || globalThis;
        var t = a2.getSelection && a2.getSelection();
        if (t && t.rangeCount !== 0) {
          a2 = t.anchorNode;
          var n2 = t.anchorOffset, f2 = t.focusNode;
          t = t.focusOffset;
          try {
            a2.nodeType, f2.nodeType;
          } catch {
            a2 = null;
            break l;
          }
          var c = 0, e = -1, i2 = -1, d2 = 0, g2 = 0, z4 = l2, S3 = null;
          u: for (; ; ) {
            for (var m2; z4 !== a2 || n2 !== 0 && z4.nodeType !== 3 || (e = c + n2), z4 !== f2 || t !== 0 && z4.nodeType !== 3 || (i2 = c + t), z4.nodeType === 3 && (c += z4.nodeValue.length), (m2 = z4.firstChild) !== null; ) S3 = z4, z4 = m2;
            for (; ; ) {
              if (z4 === l2) break u;
              if (S3 === a2 && ++d2 === n2 && (e = c), S3 === f2 && ++g2 === t && (i2 = c), (m2 = z4.nextSibling) !== null) break;
              z4 = S3, S3 = z4.parentNode;
            }
            z4 = m2;
          }
          a2 = e === -1 || i2 === -1 ? null : {
            start: e,
            end: i2
          };
        } else a2 = null;
      }
      a2 = a2 || {
        start: 0,
        end: 0
      };
    } else a2 = null;
    for (oc = {
      focusedElem: l2,
      selectionRange: a2
    }, wn = false, ll = u2; ll !== null; ) if (u2 = ll, l2 = u2.child, (u2.subtreeFlags & 1024) !== 0 && l2 !== null) l2.return = u2, ll = l2;
    else for (; ll !== null; ) {
      switch (u2 = ll, f2 = u2.alternate, l2 = u2.flags, u2.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l2 & 1024) !== 0 && f2 !== null) {
            l2 = void 0, a2 = u2, n2 = f2.memoizedProps, f2 = f2.memoizedState, t = a2.stateNode;
            try {
              var O = Wu(a2.type, n2, a2.elementType === a2.type);
              l2 = t.getSnapshotBeforeUpdate(O, f2), t.__reactInternalSnapshotBeforeUpdate = l2;
            } catch (E4) {
              x4(a2, a2.return, E4);
            }
          }
          break;
        case 3:
          if ((l2 & 1024) !== 0) {
            if (l2 = u2.stateNode.containerInfo, a2 = l2.nodeType, a2 === 9) Xc(l2);
            else if (a2 === 1) switch (l2.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Xc(l2);
                break;
              default:
                l2.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l2 & 1024) !== 0) throw Error(A2(163));
      }
      if (l2 = u2.sibling, l2 !== null) {
        l2.return = u2.return, ll = l2;
        break;
      }
      ll = u2.return;
    }
  }
  function $1(l2, u2, a2) {
    var t = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 15:
        eu(l2, a2), t & 4 && xt(5, a2);
        break;
      case 1:
        if (eu(l2, a2), t & 4) if (l2 = a2.stateNode, u2 === null) try {
          l2.componentDidMount();
        } catch (c) {
          x4(a2, a2.return, c);
        }
        else {
          var n2 = Wu(a2.type, u2.memoizedProps);
          u2 = u2.memoizedState;
          try {
            l2.componentDidUpdate(n2, u2, l2.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            x4(a2, a2.return, c);
          }
        }
        t & 64 && L1(a2), t & 512 && et(a2, a2.return);
        break;
      case 3:
        if (eu(l2, a2), t & 64 && (l2 = a2.updateQueue, l2 !== null)) {
          if (u2 = null, a2.child !== null) switch (a2.child.tag) {
            case 27:
            case 5:
              u2 = a2.child.stateNode;
              break;
            case 1:
              u2 = a2.child.stateNode;
          }
          try {
            F0(l2, u2);
          } catch (c) {
            x4(a2, a2.return, c);
          }
        }
        break;
      case 27:
        u2 === null && t & 4 && w1(a2);
      case 26:
      case 5:
        eu(l2, a2), u2 === null && t & 4 && J1(a2), t & 512 && et(a2, a2.return);
        break;
      case 12:
        eu(l2, a2);
        break;
      case 13:
        eu(l2, a2), t & 4 && r1(l2, a2), t & 64 && (l2 = a2.memoizedState, l2 !== null && (l2 = l2.dehydrated, l2 !== null && (a2 = Gy.bind(null, a2), ry(l2, a2))));
        break;
      case 22:
        if (t = a2.memoizedState !== null || wl, !t) {
          u2 = u2 !== null && u2.memoizedState !== null || w2, n2 = wl;
          var f2 = w2;
          wl = t, (w2 = u2) && !f2 ? iu(l2, a2, (a2.subtreeFlags & 8772) !== 0) : eu(l2, a2), wl = n2, w2 = f2;
        }
        break;
      case 30:
        break;
      default:
        eu(l2, a2);
    }
  }
  function F1(l2) {
    var u2 = l2.alternate;
    u2 !== null && (l2.alternate = null, F1(u2)), l2.child = null, l2.deletions = null, l2.sibling = null, l2.tag === 5 && (u2 = l2.stateNode, u2 !== null && Jc(u2)), l2.stateNode = null, l2.return = null, l2.dependencies = null, l2.memoizedProps = null, l2.memoizedState = null, l2.pendingProps = null, l2.stateNode = null, l2.updateQueue = null;
  }
  var K3 = null, yl = false;
  function Wl(l2, u2, a2) {
    for (a2 = a2.child; a2 !== null; ) k1(l2, u2, a2), a2 = a2.sibling;
  }
  function k1(l2, u2, a2) {
    if (Tl && typeof Tl.onCommitFiberUnmount == "function") try {
      Tl.onCommitFiberUnmount(Nt, a2);
    } catch {
    }
    switch (a2.tag) {
      case 26:
        w2 || xl(a2, u2), Wl(l2, u2, a2), a2.memoizedState ? a2.memoizedState.count-- : a2.stateNode && (a2 = a2.stateNode, a2.parentNode.removeChild(a2));
        break;
      case 27:
        w2 || xl(a2, u2);
        var t = K3, n2 = yl;
        Yu(a2.type) && (K3 = a2.stateNode, yl = false), Wl(l2, u2, a2), yt(a2.stateNode), K3 = t, yl = n2;
        break;
      case 5:
        w2 || xl(a2, u2);
      case 6:
        if (t = K3, n2 = yl, K3 = null, Wl(l2, u2, a2), K3 = t, yl = n2, K3 !== null) if (yl) try {
          (K3.nodeType === 9 ? K3.body : K3.nodeName === "HTML" ? K3.ownerDocument.body : K3).removeChild(a2.stateNode);
        } catch (f2) {
          x4(a2, u2, f2);
        }
        else try {
          K3.removeChild(a2.stateNode);
        } catch (f2) {
          x4(a2, u2, f2);
        }
        break;
      case 18:
        K3 !== null && (yl ? (l2 = K3, Ji(l2.nodeType === 9 ? l2.body : l2.nodeName === "HTML" ? l2.ownerDocument.body : l2, a2.stateNode), Ut(l2)) : Ji(K3, a2.stateNode));
        break;
      case 4:
        t = K3, n2 = yl, K3 = a2.stateNode.containerInfo, yl = true, Wl(l2, u2, a2), K3 = t, yl = n2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        w2 || qu(2, a2, u2), w2 || qu(4, a2, u2), Wl(l2, u2, a2);
        break;
      case 1:
        w2 || (xl(a2, u2), t = a2.stateNode, typeof t.componentWillUnmount == "function" && p1(a2, u2, t)), Wl(l2, u2, a2);
        break;
      case 21:
        Wl(l2, u2, a2);
        break;
      case 22:
        w2 = (t = w2) || a2.memoizedState !== null, Wl(l2, u2, a2), w2 = t;
        break;
      default:
        Wl(l2, u2, a2);
    }
  }
  function r1(l2, u2) {
    if (u2.memoizedState === null && (l2 = u2.alternate, l2 !== null && (l2 = l2.memoizedState, l2 !== null && (l2 = l2.dehydrated, l2 !== null)))) try {
      Ut(l2);
    } catch (a2) {
      x4(u2, u2.return, a2);
    }
  }
  function Ny(l2) {
    switch (l2.tag) {
      case 13:
      case 19:
        var u2 = l2.stateNode;
        return u2 === null && (u2 = l2.stateNode = new Yi()), u2;
      case 22:
        return l2 = l2.stateNode, u2 = l2._retryCache, u2 === null && (u2 = l2._retryCache = new Yi()), u2;
      default:
        throw Error(A2(435, l2.tag));
    }
  }
  function xf(l2, u2) {
    var a2 = Ny(l2);
    u2.forEach(function(t) {
      var n2 = Qy.bind(null, l2, t);
      a2.has(t) || (a2.add(t), t.then(n2, n2));
    });
  }
  function gl(l2, u2) {
    var a2 = u2.deletions;
    if (a2 !== null) for (var t = 0; t < a2.length; t++) {
      var n2 = a2[t], f2 = l2, c = u2, e = c;
      l: for (; e !== null; ) {
        switch (e.tag) {
          case 27:
            if (Yu(e.type)) {
              K3 = e.stateNode, yl = false;
              break l;
            }
            break;
          case 5:
            K3 = e.stateNode, yl = false;
            break l;
          case 3:
          case 4:
            K3 = e.stateNode.containerInfo, yl = true;
            break l;
        }
        e = e.return;
      }
      if (K3 === null) throw Error(A2(160));
      k1(f2, c, n2), K3 = null, yl = false, f2 = n2.alternate, f2 !== null && (f2.return = null), n2.return = null;
    }
    if (u2.subtreeFlags & 13878) for (u2 = u2.child; u2 !== null; ) I1(u2, l2), u2 = u2.sibling;
  }
  var _l = null;
  function I1(l2, u2) {
    var a2 = l2.alternate, t = l2.flags;
    switch (l2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl(u2, l2), bl(l2), t & 4 && (qu(3, l2, l2.return), xt(3, l2), qu(5, l2, l2.return));
        break;
      case 1:
        gl(u2, l2), bl(l2), t & 512 && (w2 || a2 === null || xl(a2, a2.return)), t & 64 && wl && (l2 = l2.updateQueue, l2 !== null && (t = l2.callbacks, t !== null && (a2 = l2.shared.hiddenCallbacks, l2.shared.hiddenCallbacks = a2 === null ? t : a2.concat(t))));
        break;
      case 26:
        var n2 = _l;
        if (gl(u2, l2), bl(l2), t & 512 && (w2 || a2 === null || xl(a2, a2.return)), t & 4) {
          var f2 = a2 !== null ? a2.memoizedState : null;
          if (t = l2.memoizedState, a2 === null) if (t === null) if (l2.stateNode === null) {
            l: {
              t = l2.type, a2 = l2.memoizedProps, n2 = n2.ownerDocument || n2;
              u: switch (t) {
                case "title":
                  f2 = n2.getElementsByTagName("title")[0], (!f2 || f2[Rt] || f2[el] || f2.namespaceURI === "http://www.w3.org/2000/svg" || f2.hasAttribute("itemprop")) && (f2 = n2.createElement(t), n2.head.insertBefore(f2, n2.querySelector("head > title"))), cl(f2, t, a2), f2[el] = l2, ul(f2), t = f2;
                  break l;
                case "link":
                  var c = ki("link", "href", n2).get(t + (a2.href || ""));
                  if (c) {
                    for (var e = 0; e < c.length; e++) if (f2 = c[e], f2.getAttribute("href") === (a2.href == null || a2.href === "" ? null : a2.href) && f2.getAttribute("rel") === (a2.rel == null ? null : a2.rel) && f2.getAttribute("title") === (a2.title == null ? null : a2.title) && f2.getAttribute("crossorigin") === (a2.crossOrigin == null ? null : a2.crossOrigin)) {
                      c.splice(e, 1);
                      break u;
                    }
                  }
                  f2 = n2.createElement(t), cl(f2, t, a2), n2.head.appendChild(f2);
                  break;
                case "meta":
                  if (c = ki("meta", "content", n2).get(t + (a2.content || ""))) {
                    for (e = 0; e < c.length; e++) if (f2 = c[e], f2.getAttribute("content") === (a2.content == null ? null : "" + a2.content) && f2.getAttribute("name") === (a2.name == null ? null : a2.name) && f2.getAttribute("property") === (a2.property == null ? null : a2.property) && f2.getAttribute("http-equiv") === (a2.httpEquiv == null ? null : a2.httpEquiv) && f2.getAttribute("charset") === (a2.charSet == null ? null : a2.charSet)) {
                      c.splice(e, 1);
                      break u;
                    }
                  }
                  f2 = n2.createElement(t), cl(f2, t, a2), n2.head.appendChild(f2);
                  break;
                default:
                  throw Error(A2(468, t));
              }
              f2[el] = l2, ul(f2), t = f2;
            }
            l2.stateNode = t;
          } else ri(n2, l2.type, l2.stateNode);
          else l2.stateNode = Fi(n2, t, l2.memoizedProps);
          else f2 !== t ? (f2 === null ? a2.stateNode !== null && (a2 = a2.stateNode, a2.parentNode.removeChild(a2)) : f2.count--, t === null ? ri(n2, l2.type, l2.stateNode) : Fi(n2, t, l2.memoizedProps)) : t === null && l2.stateNode !== null && Gf(l2, l2.memoizedProps, a2.memoizedProps);
        }
        break;
      case 27:
        gl(u2, l2), bl(l2), t & 512 && (w2 || a2 === null || xl(a2, a2.return)), a2 !== null && t & 4 && Gf(l2, l2.memoizedProps, a2.memoizedProps);
        break;
      case 5:
        if (gl(u2, l2), bl(l2), t & 512 && (w2 || a2 === null || xl(a2, a2.return)), l2.flags & 32) {
          n2 = l2.stateNode;
          try {
            Ua(n2, "");
          } catch (m2) {
            x4(l2, l2.return, m2);
          }
        }
        t & 4 && l2.stateNode != null && (n2 = l2.memoizedProps, Gf(l2, n2, a2 !== null ? a2.memoizedProps : n2)), t & 1024 && (Zf = true);
        break;
      case 6:
        if (gl(u2, l2), bl(l2), t & 4) {
          if (l2.stateNode === null) throw Error(A2(162));
          t = l2.memoizedProps, a2 = l2.stateNode;
          try {
            a2.nodeValue = t;
          } catch (m2) {
            x4(l2, l2.return, m2);
          }
        }
        break;
      case 3:
        if (zn = null, n2 = _l, _l = pn(u2.containerInfo), gl(u2, l2), _l = n2, bl(l2), t & 4 && a2 !== null && a2.memoizedState.isDehydrated) try {
          Ut(u2.containerInfo);
        } catch (m2) {
          x4(l2, l2.return, m2);
        }
        Zf && (Zf = false, P1(l2));
        break;
      case 4:
        t = _l, _l = pn(l2.stateNode.containerInfo), gl(u2, l2), bl(l2), _l = t;
        break;
      case 12:
        gl(u2, l2), bl(l2);
        break;
      case 13:
        gl(u2, l2), bl(l2), l2.child.flags & 8192 && l2.memoizedState !== null != (a2 !== null && a2.memoizedState !== null) && (se2 = jl()), t & 4 && (t = l2.updateQueue, t !== null && (l2.updateQueue = null, xf(l2, t)));
        break;
      case 22:
        n2 = l2.memoizedState !== null;
        var i2 = a2 !== null && a2.memoizedState !== null, d2 = wl, g2 = w2;
        if (wl = d2 || n2, w2 = g2 || i2, gl(u2, l2), w2 = g2, wl = d2, bl(l2), t & 8192) l: for (u2 = l2.stateNode, u2._visibility = n2 ? u2._visibility & -2 : u2._visibility | 1, n2 && (a2 === null || i2 || wl || w2 || Gu(l2)), a2 = null, u2 = l2; ; ) {
          if (u2.tag === 5 || u2.tag === 26) {
            if (a2 === null) {
              i2 = a2 = u2;
              try {
                if (f2 = i2.stateNode, n2) c = f2.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  e = i2.stateNode;
                  var z4 = i2.memoizedProps.style, S3 = z4 != null && z4.hasOwnProperty("display") ? z4.display : null;
                  e.style.display = S3 == null || typeof S3 == "boolean" ? "" : ("" + S3).trim();
                }
              } catch (m2) {
                x4(i2, i2.return, m2);
              }
            }
          } else if (u2.tag === 6) {
            if (a2 === null) {
              i2 = u2;
              try {
                i2.stateNode.nodeValue = n2 ? "" : i2.memoizedProps;
              } catch (m2) {
                x4(i2, i2.return, m2);
              }
            }
          } else if ((u2.tag !== 22 && u2.tag !== 23 || u2.memoizedState === null || u2 === l2) && u2.child !== null) {
            u2.child.return = u2, u2 = u2.child;
            continue;
          }
          if (u2 === l2) break l;
          for (; u2.sibling === null; ) {
            if (u2.return === null || u2.return === l2) break l;
            a2 === u2 && (a2 = null), u2 = u2.return;
          }
          a2 === u2 && (a2 = null), u2.sibling.return = u2.return, u2 = u2.sibling;
        }
        t & 4 && (t = l2.updateQueue, t !== null && (a2 = t.retryQueue, a2 !== null && (t.retryQueue = null, xf(l2, a2))));
        break;
      case 19:
        gl(u2, l2), bl(l2), t & 4 && (t = l2.updateQueue, t !== null && (l2.updateQueue = null, xf(l2, t)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gl(u2, l2), bl(l2);
    }
  }
  function bl(l2) {
    var u2 = l2.flags;
    if (u2 & 2) {
      try {
        for (var a2, t = l2.return; t !== null; ) {
          if (W1(t)) {
            a2 = t;
            break;
          }
          t = t.return;
        }
        if (a2 == null) throw Error(A2(160));
        switch (a2.tag) {
          case 27:
            var n2 = a2.stateNode, f2 = Qf(l2);
            Zn(l2, f2, n2);
            break;
          case 5:
            var c = a2.stateNode;
            a2.flags & 32 && (Ua(c, ""), a2.flags &= -33);
            var e = Qf(l2);
            Zn(l2, e, c);
            break;
          case 3:
          case 4:
            var i2 = a2.stateNode.containerInfo, d2 = Qf(l2);
            Oc(l2, d2, i2);
            break;
          default:
            throw Error(A2(161));
        }
      } catch (g2) {
        x4(l2, l2.return, g2);
      }
      l2.flags &= -3;
    }
    u2 & 4096 && (l2.flags &= -4097);
  }
  function P1(l2) {
    if (l2.subtreeFlags & 1024) for (l2 = l2.child; l2 !== null; ) {
      var u2 = l2;
      P1(u2), u2.tag === 5 && u2.flags & 1024 && u2.stateNode.reset(), l2 = l2.sibling;
    }
  }
  function eu(l2, u2) {
    if (u2.subtreeFlags & 8772) for (u2 = u2.child; u2 !== null; ) $1(l2, u2.alternate, u2), u2 = u2.sibling;
  }
  function Gu(l2) {
    for (l2 = l2.child; l2 !== null; ) {
      var u2 = l2;
      switch (u2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qu(4, u2, u2.return), Gu(u2);
          break;
        case 1:
          xl(u2, u2.return);
          var a2 = u2.stateNode;
          typeof a2.componentWillUnmount == "function" && p1(u2, u2.return, a2), Gu(u2);
          break;
        case 27:
          yt(u2.stateNode);
        case 26:
        case 5:
          xl(u2, u2.return), Gu(u2);
          break;
        case 22:
          u2.memoizedState === null && Gu(u2);
          break;
        case 30:
          Gu(u2);
          break;
        default:
          Gu(u2);
      }
      l2 = l2.sibling;
    }
  }
  function iu(l2, u2, a2) {
    for (a2 = a2 && (u2.subtreeFlags & 8772) !== 0, u2 = u2.child; u2 !== null; ) {
      var t = u2.alternate, n2 = l2, f2 = u2, c = f2.flags;
      switch (f2.tag) {
        case 0:
        case 11:
        case 15:
          iu(n2, f2, a2), xt(4, f2);
          break;
        case 1:
          if (iu(n2, f2, a2), t = f2, n2 = t.stateNode, typeof n2.componentDidMount == "function") try {
            n2.componentDidMount();
          } catch (d2) {
            x4(t, t.return, d2);
          }
          if (t = f2, n2 = t.updateQueue, n2 !== null) {
            var e = t.stateNode;
            try {
              var i2 = n2.shared.hiddenCallbacks;
              if (i2 !== null) for (n2.shared.hiddenCallbacks = null, n2 = 0; n2 < i2.length; n2++) $0(i2[n2], e);
            } catch (d2) {
              x4(t, t.return, d2);
            }
          }
          a2 && c & 64 && L1(f2), et(f2, f2.return);
          break;
        case 27:
          w1(f2);
        case 26:
        case 5:
          iu(n2, f2, a2), a2 && t === null && c & 4 && J1(f2), et(f2, f2.return);
          break;
        case 12:
          iu(n2, f2, a2);
          break;
        case 13:
          iu(n2, f2, a2), a2 && c & 4 && r1(n2, f2);
          break;
        case 22:
          f2.memoizedState === null && iu(n2, f2, a2), et(f2, f2.return);
          break;
        case 30:
          break;
        default:
          iu(n2, f2, a2);
      }
      u2 = u2.sibling;
    }
  }
  function Me2(l2, u2) {
    var a2 = null;
    l2 !== null && l2.memoizedState !== null && l2.memoizedState.cachePool !== null && (a2 = l2.memoizedState.cachePool.pool), l2 = null, u2.memoizedState !== null && u2.memoizedState.cachePool !== null && (l2 = u2.memoizedState.cachePool.pool), l2 !== a2 && (l2 != null && l2.refCount++, a2 != null && Xt(a2));
  }
  function Ee2(l2, u2) {
    l2 = null, u2.alternate !== null && (l2 = u2.alternate.memoizedState.cache), u2 = u2.memoizedState.cache, u2 !== l2 && (u2.refCount++, l2 != null && Xt(l2));
  }
  function Ql(l2, u2, a2, t) {
    if (u2.subtreeFlags & 10256) for (u2 = u2.child; u2 !== null; ) lv(l2, u2, a2, t), u2 = u2.sibling;
  }
  function lv(l2, u2, a2, t) {
    var n2 = u2.flags;
    switch (u2.tag) {
      case 0:
      case 11:
      case 15:
        Ql(l2, u2, a2, t), n2 & 2048 && xt(9, u2);
        break;
      case 1:
        Ql(l2, u2, a2, t);
        break;
      case 3:
        Ql(l2, u2, a2, t), n2 & 2048 && (l2 = null, u2.alternate !== null && (l2 = u2.alternate.memoizedState.cache), u2 = u2.memoizedState.cache, u2 !== l2 && (u2.refCount++, l2 != null && Xt(l2)));
        break;
      case 12:
        if (n2 & 2048) {
          Ql(l2, u2, a2, t), l2 = u2.stateNode;
          try {
            var f2 = u2.memoizedProps, c = f2.id, e = f2.onPostCommit;
            typeof e == "function" && e(c, u2.alternate === null ? "mount" : "update", l2.passiveEffectDuration, -0);
          } catch (i2) {
            x4(u2, u2.return, i2);
          }
        } else Ql(l2, u2, a2, t);
        break;
      case 13:
        Ql(l2, u2, a2, t);
        break;
      case 23:
        break;
      case 22:
        f2 = u2.stateNode, c = u2.alternate, u2.memoizedState !== null ? f2._visibility & 2 ? Ql(l2, u2, a2, t) : it(l2, u2) : f2._visibility & 2 ? Ql(l2, u2, a2, t) : (f2._visibility |= 2, ua(l2, u2, a2, t, (u2.subtreeFlags & 10256) !== 0)), n2 & 2048 && Me2(c, u2);
        break;
      case 24:
        Ql(l2, u2, a2, t), n2 & 2048 && Ee2(u2.alternate, u2);
        break;
      default:
        Ql(l2, u2, a2, t);
    }
  }
  function ua(l2, u2, a2, t, n2) {
    for (n2 = n2 && (u2.subtreeFlags & 10256) !== 0, u2 = u2.child; u2 !== null; ) {
      var f2 = l2, c = u2, e = a2, i2 = t, d2 = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ua(f2, c, e, i2, n2), xt(8, c);
          break;
        case 23:
          break;
        case 22:
          var g2 = c.stateNode;
          c.memoizedState !== null ? g2._visibility & 2 ? ua(f2, c, e, i2, n2) : it(f2, c) : (g2._visibility |= 2, ua(f2, c, e, i2, n2)), n2 && d2 & 2048 && Me2(c.alternate, c);
          break;
        case 24:
          ua(f2, c, e, i2, n2), n2 && d2 & 2048 && Ee2(c.alternate, c);
          break;
        default:
          ua(f2, c, e, i2, n2);
      }
      u2 = u2.sibling;
    }
  }
  function it(l2, u2) {
    if (u2.subtreeFlags & 10256) for (u2 = u2.child; u2 !== null; ) {
      var a2 = l2, t = u2, n2 = t.flags;
      switch (t.tag) {
        case 22:
          it(a2, t), n2 & 2048 && Me2(t.alternate, t);
          break;
        case 24:
          it(a2, t), n2 & 2048 && Ee2(t.alternate, t);
          break;
        default:
          it(a2, t);
      }
      u2 = u2.sibling;
    }
  }
  var ra = 8192;
  function Iu(l2) {
    if (l2.subtreeFlags & ra) for (l2 = l2.child; l2 !== null; ) uv(l2), l2 = l2.sibling;
  }
  function uv(l2) {
    switch (l2.tag) {
      case 26:
        Iu(l2), l2.flags & ra && l2.memoizedState !== null && hd(_l, l2.memoizedState, l2.memoizedProps);
        break;
      case 5:
        Iu(l2);
        break;
      case 3:
      case 4:
        var u2 = _l;
        _l = pn(l2.stateNode.containerInfo), Iu(l2), _l = u2;
        break;
      case 22:
        l2.memoizedState === null && (u2 = l2.alternate, u2 !== null && u2.memoizedState !== null ? (u2 = ra, ra = 16777216, Iu(l2), ra = u2) : Iu(l2));
        break;
      default:
        Iu(l2);
    }
  }
  function av(l2) {
    var u2 = l2.alternate;
    if (u2 !== null && (l2 = u2.child, l2 !== null)) {
      u2.child = null;
      do
        u2 = l2.sibling, l2.sibling = null, l2 = u2;
      while (l2 !== null);
    }
  }
  function Ja(l2) {
    var u2 = l2.deletions;
    if ((l2.flags & 16) !== 0) {
      if (u2 !== null) for (var a2 = 0; a2 < u2.length; a2++) {
        var t = u2[a2];
        ll = t, nv(t, l2);
      }
      av(l2);
    }
    if (l2.subtreeFlags & 10256) for (l2 = l2.child; l2 !== null; ) tv(l2), l2 = l2.sibling;
  }
  function tv(l2) {
    switch (l2.tag) {
      case 0:
      case 11:
      case 15:
        Ja(l2), l2.flags & 2048 && qu(9, l2, l2.return);
        break;
      case 3:
        Ja(l2);
        break;
      case 12:
        Ja(l2);
        break;
      case 22:
        var u2 = l2.stateNode;
        l2.memoizedState !== null && u2._visibility & 2 && (l2.return === null || l2.return.tag !== 13) ? (u2._visibility &= -3, gn(l2)) : Ja(l2);
        break;
      default:
        Ja(l2);
    }
  }
  function gn(l2) {
    var u2 = l2.deletions;
    if ((l2.flags & 16) !== 0) {
      if (u2 !== null) for (var a2 = 0; a2 < u2.length; a2++) {
        var t = u2[a2];
        ll = t, nv(t, l2);
      }
      av(l2);
    }
    for (l2 = l2.child; l2 !== null; ) {
      switch (u2 = l2, u2.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, u2, u2.return), gn(u2);
          break;
        case 22:
          a2 = u2.stateNode, a2._visibility & 2 && (a2._visibility &= -3, gn(u2));
          break;
        default:
          gn(u2);
      }
      l2 = l2.sibling;
    }
  }
  function nv(l2, u2) {
    for (; ll !== null; ) {
      var a2 = ll;
      switch (a2.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, a2, u2);
          break;
        case 23:
        case 22:
          if (a2.memoizedState !== null && a2.memoizedState.cachePool !== null) {
            var t = a2.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          Xt(a2.memoizedState.cache);
      }
      if (t = a2.child, t !== null) t.return = a2, ll = t;
      else l: for (a2 = l2; ll !== null; ) {
        t = ll;
        var n2 = t.sibling, f2 = t.return;
        if (F1(t), t === a2) {
          ll = null;
          break l;
        }
        if (n2 !== null) {
          n2.return = f2, ll = n2;
          break l;
        }
        ll = f2;
      }
    }
  }
  var qy = {
    getCacheForType: function(l2) {
      var u2 = il(k4), a2 = u2.data.get(l2);
      return a2 === void 0 && (a2 = l2(), u2.data.set(l2, a2)), a2;
    }
  }, By = typeof WeakMap == "function" ? WeakMap : Map, X2 = 0, V2 = null, q4 = null, B2 = 0, _2 = 0, zl = null, zu = false, Za = false, De2 = false, nu = 0, J2 = 0, Bu = 0, Ku = 0, Oe2 = 0, Rl = 0, Ra = 0, vt = null, dl = null, sc = false, se2 = 0, xn = 1 / 0, Vn = null, Du = null, fl = 0, Ou = null, Ya = null, Da = 0, Uc = 0, Hc = null, fv = null, ht = 0, Nc = null;
  function El() {
    if ((X2 & 2) !== 0 && B2 !== 0) return B2 & -B2;
    if (s.T !== null) {
      var l2 = Ha;
      return l2 !== 0 ? l2 : He2();
    }
    return b0();
  }
  function cv() {
    Rl === 0 && (Rl = (B2 & 536870912) === 0 || Y3 ? d0() : 536870912);
    var l2 = Yl.current;
    return l2 !== null && (l2.flags |= 32), Rl;
  }
  function Dl(l2, u2, a2) {
    (l2 === V2 && (_2 === 2 || _2 === 9) || l2.cancelPendingCommit !== null) && (oa(l2, 0), Au(l2, B2, Rl, false)), Bt(l2, a2), ((X2 & 2) === 0 || l2 !== V2) && (l2 === V2 && ((X2 & 2) === 0 && (Ku |= a2), J2 === 4 && Au(l2, B2, Rl, false)), Ll(l2));
  }
  function ev(l2, u2, a2) {
    if ((X2 & 6) !== 0) throw Error(A2(327));
    var t = !a2 && (u2 & 124) === 0 && (u2 & l2.expiredLanes) === 0 || qt(l2, u2), n2 = t ? oy(l2, u2) : Vf(l2, u2, true), f2 = t;
    do {
      if (n2 === 0) {
        Za && !t && Au(l2, u2, 0, false);
        break;
      } else {
        if (a2 = l2.current.alternate, f2 && !Ry(a2)) {
          n2 = Vf(l2, u2, false), f2 = false;
          continue;
        }
        if (n2 === 2) {
          if (f2 = u2, l2.errorRecoveryDisabledLanes & f2) var c = 0;
          else c = l2.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            u2 = c;
            l: {
              var e = l2;
              n2 = vt;
              var i2 = e.current.memoizedState.isDehydrated;
              if (i2 && (oa(e, c).flags |= 256), c = Vf(e, c, false), c !== 2) {
                if (De2 && !i2) {
                  e.errorRecoveryDisabledLanes |= f2, Ku |= f2, n2 = 4;
                  break l;
                }
                f2 = dl, dl = n2, f2 !== null && (dl === null ? dl = f2 : dl.push.apply(dl, f2));
              }
              n2 = c;
            }
            if (f2 = false, n2 !== 2) continue;
          }
        }
        if (n2 === 1) {
          oa(l2, 0), Au(l2, u2, 0, true);
          break;
        }
        l: {
          switch (t = l2, f2 = n2, f2) {
            case 0:
            case 1:
              throw Error(A2(345));
            case 4:
              if ((u2 & 4194048) !== u2) break;
            case 6:
              Au(t, u2, Rl, !zu);
              break l;
            case 2:
              dl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A2(329));
          }
          if ((u2 & 62914560) === u2 && (n2 = se2 + 300 - jl(), 10 < n2)) {
            if (Au(t, u2, Rl, !zu), Fn(t, 0, true) !== 0) break l;
            t.timeoutHandle = Hv(oi.bind(null, t, a2, dl, Vn, sc, u2, Rl, Ku, Ra, zu, f2, 2, -0, 0), n2);
            break l;
          }
          oi(t, a2, dl, Vn, sc, u2, Rl, Ku, Ra, zu, f2, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Ll(l2);
  }
  function oi(l2, u2, a2, t, n2, f2, c, e, i2, d2, g2, z4, S3, m2) {
    if (l2.timeoutHandle = -1, z4 = u2.subtreeFlags, (z4 & 8192 || (z4 & 16785408) === 16785408) && (Et = {
      stylesheets: null,
      count: 0,
      unsuspend: vd
    }, uv(u2), z4 = yd(), z4 !== null)) {
      l2.cancelPendingCommit = z4(Xi.bind(null, l2, u2, f2, a2, t, n2, c, e, i2, g2, 1, S3, m2)), Au(l2, f2, c, !d2);
      return;
    }
    Xi(l2, u2, f2, a2, t, n2, c, e, i2);
  }
  function Ry(l2) {
    for (var u2 = l2; ; ) {
      var a2 = u2.tag;
      if ((a2 === 0 || a2 === 11 || a2 === 15) && u2.flags & 16384 && (a2 = u2.updateQueue, a2 !== null && (a2 = a2.stores, a2 !== null))) for (var t = 0; t < a2.length; t++) {
        var n2 = a2[t], f2 = n2.getSnapshot;
        n2 = n2.value;
        try {
          if (!Ol(f2(), n2)) return false;
        } catch {
          return false;
        }
      }
      if (a2 = u2.child, u2.subtreeFlags & 16384 && a2 !== null) a2.return = u2, u2 = a2;
      else {
        if (u2 === l2) break;
        for (; u2.sibling === null; ) {
          if (u2.return === null || u2.return === l2) return true;
          u2 = u2.return;
        }
        u2.sibling.return = u2.return, u2 = u2.sibling;
      }
    }
    return true;
  }
  function Au(l2, u2, a2, t) {
    u2 &= ~Oe2, u2 &= ~Ku, l2.suspendedLanes |= u2, l2.pingedLanes &= ~u2, t && (l2.warmLanes |= u2), t = l2.expirationTimes;
    for (var n2 = u2; 0 < n2; ) {
      var f2 = 31 - Ml(n2), c = 1 << f2;
      t[f2] = -1, n2 &= ~c;
    }
    a2 !== 0 && m0(l2, a2, u2);
  }
  function ff() {
    return (X2 & 6) === 0 ? (Vt(0, false), false) : true;
  }
  function Ue2() {
    if (q4 !== null) {
      if (_2 === 0) var l2 = q4.return;
      else l2 = q4, rl = ku = null, ye3(l2), Ea = null, At = 0, l2 = q4;
      for (; l2 !== null; ) C1(l2.alternate, l2), l2 = l2.return;
      q4 = null;
    }
  }
  function oa(l2, u2) {
    var a2 = l2.timeoutHandle;
    a2 !== -1 && (l2.timeoutHandle = -1, Wy(a2)), a2 = l2.cancelPendingCommit, a2 !== null && (l2.cancelPendingCommit = null, a2()), Ue2(), V2 = l2, q4 = a2 = Pl(l2.current, null), B2 = u2, _2 = 0, zl = null, zu = false, Za = qt(l2, u2), De2 = false, Ra = Rl = Oe2 = Ku = Bu = J2 = 0, dl = vt = null, sc = false, (u2 & 8) !== 0 && (u2 |= u2 & 32);
    var t = l2.entangledLanes;
    if (t !== 0) for (l2 = l2.entanglements, t &= u2; 0 < t; ) {
      var n2 = 31 - Ml(t), f2 = 1 << n2;
      u2 |= l2[n2], t &= ~f2;
    }
    return nu = u2, Pn(), a2;
  }
  function iv(l2, u2) {
    U2 = null, s.H = on, u2 === Gt || u2 === uf ? (u2 = hi(), _2 = 3) : u2 === W0 ? (u2 = hi(), _2 = 4) : _2 = u2 === Q1 ? 8 : u2 !== null && typeof u2 == "object" && typeof u2.then == "function" ? 6 : 1, zl = u2, q4 === null && (J2 = 1, Gn(l2, Bl(u2, l2.current)));
  }
  function vv() {
    var l2 = s.H;
    return s.H = on, l2 === null ? on : l2;
  }
  function hv() {
    var l2 = s.A;
    return s.A = qy, l2;
  }
  function qc() {
    J2 = 4, zu || (B2 & 4194048) !== B2 && Yl.current !== null || (Za = true), (Bu & 134217727) === 0 && (Ku & 134217727) === 0 || V2 === null || Au(V2, B2, Rl, false);
  }
  function Vf(l2, u2, a2) {
    var t = X2;
    X2 |= 2;
    var n2 = vv(), f2 = hv();
    (V2 !== l2 || B2 !== u2) && (Vn = null, oa(l2, u2)), u2 = false;
    var c = J2;
    l: do
      try {
        if (_2 !== 0 && q4 !== null) {
          var e = q4, i2 = zl;
          switch (_2) {
            case 8:
              Ue2(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Yl.current === null && (u2 = true);
              var d2 = _2;
              if (_2 = 0, zl = null, ma(l2, e, i2, d2), a2 && Za) {
                c = 0;
                break l;
              }
              break;
            default:
              d2 = _2, _2 = 0, zl = null, ma(l2, e, i2, d2);
          }
        }
        Yy(), c = J2;
        break;
      } catch (g2) {
        iv(l2, g2);
      }
    while (true);
    return u2 && l2.shellSuspendCounter++, rl = ku = null, X2 = t, s.H = n2, s.A = f2, q4 === null && (V2 = null, B2 = 0, Pn()), c;
  }
  function Yy() {
    for (; q4 !== null; ) yv(q4);
  }
  function oy(l2, u2) {
    var a2 = X2;
    X2 |= 2;
    var t = vv(), n2 = hv();
    V2 !== l2 || B2 !== u2 ? (Vn = null, xn = jl() + 500, oa(l2, u2)) : Za = qt(l2, u2);
    l: do
      try {
        if (_2 !== 0 && q4 !== null) {
          u2 = q4;
          var f2 = zl;
          u: switch (_2) {
            case 1:
              _2 = 0, zl = null, ma(l2, u2, f2, 1);
              break;
            case 2:
            case 9:
              if (vi(f2)) {
                _2 = 0, zl = null, _i(u2);
                break;
              }
              u2 = function() {
                _2 !== 2 && _2 !== 9 || V2 !== l2 || (_2 = 7), Ll(l2);
              }, f2.then(u2, u2);
              break l;
            case 3:
              _2 = 7;
              break l;
            case 4:
              _2 = 5;
              break l;
            case 7:
              vi(f2) ? (_2 = 0, zl = null, _i(u2)) : (_2 = 0, zl = null, ma(l2, u2, f2, 7));
              break;
            case 5:
              var c = null;
              switch (q4.tag) {
                case 26:
                  c = q4.memoizedState;
                case 5:
                case 27:
                  var e = q4;
                  if (!c || Rv(c)) {
                    _2 = 0, zl = null;
                    var i2 = e.sibling;
                    if (i2 !== null) q4 = i2;
                    else {
                      var d2 = e.return;
                      d2 !== null ? (q4 = d2, cf(d2)) : q4 = null;
                    }
                    break u;
                  }
              }
              _2 = 0, zl = null, ma(l2, u2, f2, 5);
              break;
            case 6:
              _2 = 0, zl = null, ma(l2, u2, f2, 6);
              break;
            case 8:
              Ue2(), J2 = 6;
              break l;
            default:
              throw Error(A2(462));
          }
        }
        _y();
        break;
      } catch (g2) {
        iv(l2, g2);
      }
    while (true);
    return rl = ku = null, s.H = t, s.A = n2, X2 = a2, q4 !== null ? 0 : (V2 = null, B2 = 0, Pn(), J2);
  }
  function _y() {
    for (; q4 !== null && !uh(); ) yv(q4);
  }
  function yv(l2) {
    var u2 = K1(l2.alternate, l2, nu);
    l2.memoizedProps = l2.pendingProps, u2 === null ? cf(l2) : q4 = u2;
  }
  function _i(l2) {
    var u2 = l2, a2 = u2.alternate;
    switch (u2.tag) {
      case 15:
      case 0:
        u2 = Hi(a2, u2, u2.pendingProps, u2.type, void 0, B2);
        break;
      case 11:
        u2 = Hi(a2, u2, u2.pendingProps, u2.type.render, u2.ref, B2);
        break;
      case 5:
        ye3(u2);
      default:
        C1(a2, u2), u2 = q4 = C0(u2, nu), u2 = K1(a2, u2, nu);
    }
    l2.memoizedProps = l2.pendingProps, u2 === null ? cf(l2) : q4 = u2;
  }
  function ma(l2, u2, a2, t) {
    rl = ku = null, ye3(u2), Ea = null, At = 0;
    var n2 = u2.return;
    try {
      if (Dy(l2, n2, u2, a2, B2)) {
        J2 = 1, Gn(l2, Bl(a2, l2.current)), q4 = null;
        return;
      }
    } catch (f2) {
      if (n2 !== null) throw q4 = n2, f2;
      J2 = 1, Gn(l2, Bl(a2, l2.current)), q4 = null;
      return;
    }
    u2.flags & 32768 ? (Y3 || t === 1 ? l2 = true : Za || (B2 & 536870912) !== 0 ? l2 = false : (zu = l2 = true, (t === 2 || t === 9 || t === 3 || t === 6) && (t = Yl.current, t !== null && t.tag === 13 && (t.flags |= 16384))), dv(u2, l2)) : cf(u2);
  }
  function cf(l2) {
    var u2 = l2;
    do {
      if ((u2.flags & 32768) !== 0) {
        dv(u2, zu);
        return;
      }
      l2 = u2.return;
      var a2 = sy(u2.alternate, u2, nu);
      if (a2 !== null) {
        q4 = a2;
        return;
      }
      if (u2 = u2.sibling, u2 !== null) {
        q4 = u2;
        return;
      }
      q4 = u2 = l2;
    } while (u2 !== null);
    J2 === 0 && (J2 = 5);
  }
  function dv(l2, u2) {
    do {
      var a2 = Uy(l2.alternate, l2);
      if (a2 !== null) {
        a2.flags &= 32767, q4 = a2;
        return;
      }
      if (a2 = l2.return, a2 !== null && (a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null), !u2 && (l2 = l2.sibling, l2 !== null)) {
        q4 = l2;
        return;
      }
      q4 = l2 = a2;
    } while (l2 !== null);
    J2 = 6, q4 = null;
  }
  function Xi(l2, u2, a2, t, n2, f2, c, e, i2) {
    l2.cancelPendingCommit = null;
    do
      ef();
    while (fl !== 0);
    if ((X2 & 6) !== 0) throw Error(A2(327));
    if (u2 !== null) {
      if (u2 === l2.current) throw Error(A2(177));
      if (f2 = u2.lanes | u2.childLanes, f2 |= Ic, yh(l2, a2, f2, c, e, i2), l2 === V2 && (q4 = V2 = null, B2 = 0), Ya = u2, Ou = l2, Da = a2, Uc = f2, Hc = n2, fv = t, (u2.subtreeFlags & 10256) !== 0 || (u2.flags & 10256) !== 0 ? (l2.callbackNode = null, l2.callbackPriority = 0, Zy(Dn, function() {
        return zv(true), null;
      })) : (l2.callbackNode = null, l2.callbackPriority = 0), t = (u2.flags & 13878) !== 0, (u2.subtreeFlags & 13878) !== 0 || t) {
        t = s.T, s.T = null, n2 = o.p, o.p = 2, c = X2, X2 |= 4;
        try {
          Hy(l2, u2, a2);
        } finally {
          X2 = c, o.p = n2, s.T = t;
        }
      }
      fl = 1, Sv(), mv(), gv();
    }
  }
  function Sv() {
    if (fl === 1) {
      fl = 0;
      var l2 = Ou, u2 = Ya, a2 = (u2.flags & 13878) !== 0;
      if ((u2.subtreeFlags & 13878) !== 0 || a2) {
        a2 = s.T, s.T = null;
        var t = o.p;
        o.p = 2;
        var n2 = X2;
        X2 |= 4;
        try {
          I1(u2, l2);
          var f2 = oc, c = X0(l2.containerInfo), e = f2.focusedElem, i2 = f2.selectionRange;
          if (c !== e && e && e.ownerDocument && _0(e.ownerDocument.documentElement, e)) {
            if (i2 !== null && rc(e)) {
              var d2 = i2.start, g2 = i2.end;
              if (g2 === void 0 && (g2 = d2), "selectionStart" in e) e.selectionStart = d2, e.selectionEnd = Math.min(g2, e.value.length);
              else {
                var z4 = e.ownerDocument || document, S3 = z4 && z4.defaultView || globalThis;
                if (S3.getSelection) {
                  var m2 = S3.getSelection(), O = e.textContent.length, E4 = Math.min(i2.start, O), G4 = i2.end === void 0 ? E4 : Math.min(i2.end, O);
                  !m2.extend && E4 > G4 && (c = G4, G4 = E4, E4 = c);
                  var h2 = ui(e, E4), v3 = ui(e, G4);
                  if (h2 && v3 && (m2.rangeCount !== 1 || m2.anchorNode !== h2.node || m2.anchorOffset !== h2.offset || m2.focusNode !== v3.node || m2.focusOffset !== v3.offset)) {
                    var y2 = z4.createRange();
                    y2.setStart(h2.node, h2.offset), m2.removeAllRanges(), E4 > G4 ? (m2.addRange(y2), m2.extend(v3.node, v3.offset)) : (y2.setEnd(v3.node, v3.offset), m2.addRange(y2));
                  }
                }
              }
            }
            for (z4 = [], m2 = e; m2 = m2.parentNode; ) m2.nodeType === 1 && z4.push({
              element: m2,
              left: m2.scrollLeft,
              top: m2.scrollTop
            });
            for (typeof e.focus == "function" && e.focus(), e = 0; e < z4.length; e++) {
              var b3 = z4[e];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          wn = !!Yc, oc = Yc = null;
        } finally {
          X2 = n2, o.p = t, s.T = a2;
        }
      }
      l2.current = u2, fl = 2;
    }
  }
  function mv() {
    if (fl === 2) {
      fl = 0;
      var l2 = Ou, u2 = Ya, a2 = (u2.flags & 8772) !== 0;
      if ((u2.subtreeFlags & 8772) !== 0 || a2) {
        a2 = s.T, s.T = null;
        var t = o.p;
        o.p = 2;
        var n2 = X2;
        X2 |= 4;
        try {
          $1(l2, u2.alternate, u2);
        } finally {
          X2 = n2, o.p = t, s.T = a2;
        }
      }
      fl = 3;
    }
  }
  function gv() {
    if (fl === 4 || fl === 3) {
      fl = 0, ah();
      var l2 = Ou, u2 = Ya, a2 = Da, t = fv;
      (u2.subtreeFlags & 10256) !== 0 || (u2.flags & 10256) !== 0 ? fl = 5 : (fl = 0, Ya = Ou = null, bv(l2, l2.pendingLanes));
      var n2 = l2.pendingLanes;
      if (n2 === 0 && (Du = null), pc(a2), u2 = u2.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function") try {
        Tl.onCommitFiberRoot(Nt, u2, void 0, (u2.current.flags & 128) === 128);
      } catch {
      }
      if (t !== null) {
        u2 = s.T, n2 = o.p, o.p = 2, s.T = null;
        try {
          for (var f2 = l2.onRecoverableError, c = 0; c < t.length; c++) {
            var e = t[c];
            f2(e.value, {
              componentStack: e.stack
            });
          }
        } finally {
          s.T = u2, o.p = n2;
        }
      }
      (Da & 3) !== 0 && ef(), Ll(l2), n2 = l2.pendingLanes, (a2 & 4194090) !== 0 && (n2 & 42) !== 0 ? l2 === Nc ? ht++ : (ht = 0, Nc = l2) : ht = 0, Vt(0, false);
    }
  }
  function bv(l2, u2) {
    (l2.pooledCacheLanes &= u2) === 0 && (u2 = l2.pooledCache, u2 != null && (l2.pooledCache = null, Xt(u2)));
  }
  function ef(l2) {
    return Sv(), mv(), gv(), zv(l2);
  }
  function zv() {
    if (fl !== 5) return false;
    var l2 = Ou, u2 = Uc;
    Uc = 0;
    var a2 = pc(Da), t = s.T, n2 = o.p;
    try {
      o.p = 32 > a2 ? 32 : a2, s.T = null, a2 = Hc, Hc = null;
      var f2 = Ou, c = Da;
      if (fl = 0, Ya = Ou = null, Da = 0, (X2 & 6) !== 0) throw Error(A2(331));
      var e = X2;
      if (X2 |= 4, tv(f2.current), lv(f2, f2.current, c, a2), X2 = e, Vt(0, false), Tl && typeof Tl.onPostCommitFiberRoot == "function") try {
        Tl.onPostCommitFiberRoot(Nt, f2);
      } catch {
      }
      return true;
    } finally {
      o.p = n2, s.T = t, bv(l2, u2);
    }
  }
  function Gi(l2, u2, a2) {
    u2 = Bl(a2, u2), u2 = Mc(l2.stateNode, u2, 2), l2 = Eu(l2, u2, 2), l2 !== null && (Bt(l2, 2), Ll(l2));
  }
  function x4(l2, u2, a2) {
    if (l2.tag === 3) Gi(l2, l2, a2);
    else for (; u2 !== null; ) {
      if (u2.tag === 3) {
        Gi(u2, l2, a2);
        break;
      } else if (u2.tag === 1) {
        var t = u2.stateNode;
        if (typeof u2.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (Du === null || !Du.has(t))) {
          l2 = Bl(a2, l2), a2 = X1(2), t = Eu(u2, a2, 2), t !== null && (G1(a2, t, u2, l2), Bt(t, 2), Ll(t));
          break;
        }
      }
      u2 = u2.return;
    }
  }
  function jf(l2, u2, a2) {
    var t = l2.pingCache;
    if (t === null) {
      t = l2.pingCache = new By();
      var n2 = /* @__PURE__ */ new Set();
      t.set(u2, n2);
    } else n2 = t.get(u2), n2 === void 0 && (n2 = /* @__PURE__ */ new Set(), t.set(u2, n2));
    n2.has(a2) || (De2 = true, n2.add(a2), l2 = Xy.bind(null, l2, u2, a2), u2.then(l2, l2));
  }
  function Xy(l2, u2, a2) {
    var t = l2.pingCache;
    t !== null && t.delete(u2), l2.pingedLanes |= l2.suspendedLanes & a2, l2.warmLanes &= ~a2, V2 === l2 && (B2 & a2) === a2 && (J2 === 4 || J2 === 3 && (B2 & 62914560) === B2 && 300 > jl() - se2 ? (X2 & 2) === 0 && oa(l2, 0) : Oe2 |= a2, Ra === B2 && (Ra = 0)), Ll(l2);
  }
  function Av(l2, u2) {
    u2 === 0 && (u2 = S0()), l2 = Qa(l2, u2), l2 !== null && (Bt(l2, u2), Ll(l2));
  }
  function Gy(l2) {
    var u2 = l2.memoizedState, a2 = 0;
    u2 !== null && (a2 = u2.retryLane), Av(l2, a2);
  }
  function Qy(l2, u2) {
    var a2 = 0;
    switch (l2.tag) {
      case 13:
        var t = l2.stateNode, n2 = l2.memoizedState;
        n2 !== null && (a2 = n2.retryLane);
        break;
      case 19:
        t = l2.stateNode;
        break;
      case 22:
        t = l2.stateNode._retryCache;
        break;
      default:
        throw Error(A2(314));
    }
    t !== null && t.delete(u2), Av(l2, a2);
  }
  function Zy(l2, u2) {
    return Cc(l2, u2);
  }
  var jn = null, aa = null, Bc = false, Kn = false, Kf = false, Cu = 0;
  function Ll(l2) {
    l2 !== aa && l2.next === null && (aa === null ? jn = aa = l2 : aa = aa.next = l2), Kn = true, Bc || (Bc = true, Vy());
  }
  function Vt(l2, u2) {
    if (!Kf && Kn) {
      Kf = true;
      do
        for (var a2 = false, t = jn; t !== null; ) {
          if (!u2) if (l2 !== 0) {
            var n2 = t.pendingLanes;
            if (n2 === 0) var f2 = 0;
            else {
              var c = t.suspendedLanes, e = t.pingedLanes;
              f2 = (1 << 31 - Ml(42 | l2) + 1) - 1, f2 &= n2 & ~(c & ~e), f2 = f2 & 201326741 ? f2 & 201326741 | 1 : f2 ? f2 | 2 : 0;
            }
            f2 !== 0 && (a2 = true, Qi(t, f2));
          } else f2 = B2, f2 = Fn(t, t === V2 ? f2 : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), (f2 & 3) === 0 || qt(t, f2) || (a2 = true, Qi(t, f2));
          t = t.next;
        }
      while (a2);
      Kf = false;
    }
  }
  function xy() {
    Tv();
  }
  function Tv() {
    Kn = Bc = false;
    var l2 = 0;
    Cu !== 0 && (Jy() && (l2 = Cu), Cu = 0);
    for (var u2 = jl(), a2 = null, t = jn; t !== null; ) {
      var n2 = t.next, f2 = Mv(t, u2);
      f2 === 0 ? (t.next = null, a2 === null ? jn = n2 : a2.next = n2, n2 === null && (aa = a2)) : (a2 = t, (l2 !== 0 || (f2 & 3) !== 0) && (Kn = true)), t = n2;
    }
    Vt(l2, false);
  }
  function Mv(l2, u2) {
    for (var a2 = l2.suspendedLanes, t = l2.pingedLanes, n2 = l2.expirationTimes, f2 = l2.pendingLanes & -62914561; 0 < f2; ) {
      var c = 31 - Ml(f2), e = 1 << c, i2 = n2[c];
      i2 === -1 ? ((e & a2) === 0 || (e & t) !== 0) && (n2[c] = hh(e, u2)) : i2 <= u2 && (l2.expiredLanes |= e), f2 &= ~e;
    }
    if (u2 = V2, a2 = B2, a2 = Fn(l2, l2 === u2 ? a2 : 0, l2.cancelPendingCommit !== null || l2.timeoutHandle !== -1), t = l2.callbackNode, a2 === 0 || l2 === u2 && (_2 === 2 || _2 === 9) || l2.cancelPendingCommit !== null) return t !== null && t !== null && mf(t), l2.callbackNode = null, l2.callbackPriority = 0;
    if ((a2 & 3) === 0 || qt(l2, a2)) {
      if (u2 = a2 & -a2, u2 === l2.callbackPriority) return u2;
      switch (t !== null && mf(t), pc(a2)) {
        case 2:
        case 8:
          a2 = h0;
          break;
        case 32:
          a2 = Dn;
          break;
        case 268435456:
          a2 = y0;
          break;
        default:
          a2 = Dn;
      }
      return t = Ev.bind(null, l2), a2 = Cc(a2, t), l2.callbackPriority = u2, l2.callbackNode = a2, u2;
    }
    return t !== null && t !== null && mf(t), l2.callbackPriority = 2, l2.callbackNode = null, 2;
  }
  function Ev(l2, u2) {
    if (fl !== 0 && fl !== 5) return l2.callbackNode = null, l2.callbackPriority = 0, null;
    var a2 = l2.callbackNode;
    if (ef(true) && l2.callbackNode !== a2) return null;
    var t = B2;
    return t = Fn(l2, l2 === V2 ? t : 0, l2.cancelPendingCommit !== null || l2.timeoutHandle !== -1), t === 0 ? null : (ev(l2, t, u2), Mv(l2, jl()), l2.callbackNode != null && l2.callbackNode === a2 ? Ev.bind(null, l2) : null);
  }
  function Qi(l2, u2) {
    if (ef()) return null;
    ev(l2, u2, true);
  }
  function Vy() {
    wy(function() {
      (X2 & 6) !== 0 ? Cc(v0, xy) : Tv();
    });
  }
  function He2() {
    return Cu === 0 && (Cu = d0()), Cu;
  }
  function Zi(l2) {
    return l2 == null || typeof l2 == "symbol" || typeof l2 == "boolean" ? null : typeof l2 == "function" ? l2 : cn("" + l2);
  }
  function xi(l2, u2) {
    var a2 = u2.ownerDocument.createElement("input");
    return a2.name = u2.name, a2.value = u2.value, l2.id && a2.setAttribute("form", l2.id), u2.parentNode.insertBefore(a2, u2), l2 = new FormData(l2), a2.parentNode.removeChild(a2), l2;
  }
  function jy(l2, u2, a2, t, n2) {
    if (u2 === "submit" && a2 && a2.stateNode === n2) {
      var f2 = Zi((n2[Sl] || null).action), c = t.submitter;
      c && (u2 = (u2 = c[Sl] || null) ? Zi(u2.formAction) : c.getAttribute("formAction"), u2 !== null && (f2 = u2, c = null));
      var e = new kn("action", "action", null, t, n2);
      l2.push({
        event: e,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t.defaultPrevented) {
                if (Cu !== 0) {
                  var i2 = c ? xi(n2, c) : new FormData(n2);
                  Ac(a2, {
                    pending: true,
                    data: i2,
                    method: n2.method,
                    action: f2
                  }, null, i2);
                }
              } else typeof f2 == "function" && (e.preventDefault(), i2 = c ? xi(n2, c) : new FormData(n2), Ac(a2, {
                pending: true,
                data: i2,
                method: n2.method,
                action: f2
              }, f2, i2));
            },
            currentTarget: n2
          }
        ]
      });
    }
  }
  for (ln = 0; ln < cc.length; ln++) un = cc[ln], Vi = un.toLowerCase(), ji = un[0].toUpperCase() + un.slice(1), Gl(Vi, "on" + ji);
  var un, Vi, ji, ln;
  Gl(Q0, "onAnimationEnd");
  Gl(Z0, "onAnimationIteration");
  Gl(x0, "onAnimationStart");
  Gl("dblclick", "onDoubleClick");
  Gl("focusin", "onFocus");
  Gl("focusout", "onBlur");
  Gl(fy, "onTransitionRun");
  Gl(cy, "onTransitionStart");
  Gl(ey, "onTransitionCancel");
  Gl(V0, "onTransitionEnd");
  sa("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  sa("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  sa("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  sa("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  wu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  wu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  wu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ky = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tt));
  function Dv(l2, u2) {
    u2 = (u2 & 4) !== 0;
    for (var a2 = 0; a2 < l2.length; a2++) {
      var t = l2[a2], n2 = t.event;
      t = t.listeners;
      l: {
        var f2 = void 0;
        if (u2) for (var c = t.length - 1; 0 <= c; c--) {
          var e = t[c], i2 = e.instance, d2 = e.currentTarget;
          if (e = e.listener, i2 !== f2 && n2.isPropagationStopped()) break l;
          f2 = e, n2.currentTarget = d2;
          try {
            f2(n2);
          } catch (g2) {
            Xn(g2);
          }
          n2.currentTarget = null, f2 = i2;
        }
        else for (c = 0; c < t.length; c++) {
          if (e = t[c], i2 = e.instance, d2 = e.currentTarget, e = e.listener, i2 !== f2 && n2.isPropagationStopped()) break l;
          f2 = e, n2.currentTarget = d2;
          try {
            f2(n2);
          } catch (g2) {
            Xn(g2);
          }
          n2.currentTarget = null, f2 = i2;
        }
      }
    }
  }
  function N2(l2, u2) {
    var a2 = u2[Pf];
    a2 === void 0 && (a2 = u2[Pf] = /* @__PURE__ */ new Set());
    var t = l2 + "__bubble";
    a2.has(t) || (Ov(u2, l2, 2, false), a2.add(t));
  }
  function Cf(l2, u2, a2) {
    var t = 0;
    u2 && (t |= 4), Ov(a2, l2, t, u2);
  }
  var an = "_reactListening" + Math.random().toString(36).slice(2);
  function Ne2(l2) {
    if (!l2[an]) {
      l2[an] = true, z0.forEach(function(a2) {
        a2 !== "selectionchange" && (Ky.has(a2) || Cf(a2, false, l2), Cf(a2, true, l2));
      });
      var u2 = l2.nodeType === 9 ? l2 : l2.ownerDocument;
      u2 === null || u2[an] || (u2[an] = true, Cf("selectionchange", false, u2));
    }
  }
  function Ov(l2, u2, a2, t) {
    switch (Gv(u2)) {
      case 2:
        var n2 = md;
        break;
      case 8:
        n2 = gd;
        break;
      default:
        n2 = Ye2;
    }
    a2 = n2.bind(null, u2, a2, l2), n2 = void 0, !tc || u2 !== "touchstart" && u2 !== "touchmove" && u2 !== "wheel" || (n2 = true), t ? n2 !== void 0 ? l2.addEventListener(u2, a2, {
      capture: true,
      passive: n2
    }) : l2.addEventListener(u2, a2, true) : n2 !== void 0 ? l2.addEventListener(u2, a2, {
      passive: n2
    }) : l2.addEventListener(u2, a2, false);
  }
  function Lf(l2, u2, a2, t, n2) {
    var f2 = t;
    if ((u2 & 1) === 0 && (u2 & 2) === 0 && t !== null) l: for (; ; ) {
      if (t === null) return;
      var c = t.tag;
      if (c === 3 || c === 4) {
        var e = t.stateNode.containerInfo;
        if (e === n2) break;
        if (c === 4) for (c = t.return; c !== null; ) {
          var i2 = c.tag;
          if ((i2 === 3 || i2 === 4) && c.stateNode.containerInfo === n2) return;
          c = c.return;
        }
        for (; e !== null; ) {
          if (c = fa(e), c === null) return;
          if (i2 = c.tag, i2 === 5 || i2 === 6 || i2 === 26 || i2 === 27) {
            t = f2 = c;
            continue l;
          }
          e = e.parentNode;
        }
      }
      t = t.return;
    }
    U0(function() {
      var d2 = f2, g2 = wc(a2), z4 = [];
      l: {
        var S3 = j0.get(l2);
        if (S3 !== void 0) {
          var m2 = kn, O = l2;
          switch (l2) {
            case "keypress":
              if (vn(a2) === 0) break l;
            case "keydown":
            case "keyup":
              m2 = Zh;
              break;
            case "focusin":
              O = "focus", m2 = Df;
              break;
            case "focusout":
              O = "blur", m2 = Df;
              break;
            case "beforeblur":
            case "afterblur":
              m2 = Df;
              break;
            case "click":
              if (a2.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m2 = We2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m2 = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m2 = jh;
              break;
            case Q0:
            case Z0:
            case x0:
              m2 = qh;
              break;
            case V0:
              m2 = Ch;
              break;
            case "scroll":
            case "scrollend":
              m2 = Oh;
              break;
            case "wheel":
              m2 = ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              m2 = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m2 = $e2;
              break;
            case "toggle":
            case "beforetoggle":
              m2 = Wh;
          }
          var E4 = (u2 & 4) !== 0, G4 = !E4 && (l2 === "scroll" || l2 === "scrollend"), h2 = E4 ? S3 !== null ? S3 + "Capture" : null : S3;
          E4 = [];
          for (var v3 = d2, y2; v3 !== null; ) {
            var b3 = v3;
            if (y2 = b3.stateNode, b3 = b3.tag, b3 !== 5 && b3 !== 26 && b3 !== 27 || y2 === null || h2 === null || (b3 = St(v3, h2), b3 != null && E4.push(Mt(v3, b3, y2))), G4) break;
            v3 = v3.return;
          }
          0 < E4.length && (S3 = new m2(S3, O, null, a2, g2), z4.push({
            event: S3,
            listeners: E4
          }));
        }
      }
      if ((u2 & 7) === 0) {
        l: {
          if (S3 = l2 === "mouseover" || l2 === "pointerover", m2 = l2 === "mouseout" || l2 === "pointerout", S3 && a2 !== ac && (O = a2.relatedTarget || a2.fromElement) && (fa(O) || O[Xa])) break l;
          if ((m2 || S3) && (S3 = g2.window === g2 ? g2 : (S3 = g2.ownerDocument) ? S3.defaultView || S3.parentWindow : globalThis, m2 ? (O = a2.relatedTarget || a2.toElement, m2 = d2, O = O ? fa(O) : null, O !== null && (G4 = Ht(O), E4 = O.tag, O !== G4 || E4 !== 5 && E4 !== 27 && E4 !== 6) && (O = null)) : (m2 = null, O = d2), m2 !== O)) {
            if (E4 = We2, b3 = "onMouseLeave", h2 = "onMouseEnter", v3 = "mouse", (l2 === "pointerout" || l2 === "pointerover") && (E4 = $e2, b3 = "onPointerLeave", h2 = "onPointerEnter", v3 = "pointer"), G4 = m2 == null ? S3 : ka(m2), y2 = O == null ? S3 : ka(O), S3 = new E4(b3, v3 + "leave", m2, a2, g2), S3.target = G4, S3.relatedTarget = y2, b3 = null, fa(g2) === d2 && (E4 = new E4(h2, v3 + "enter", O, a2, g2), E4.target = y2, E4.relatedTarget = G4, b3 = E4), G4 = b3, m2 && O) u: {
              for (E4 = m2, h2 = O, v3 = 0, y2 = E4; y2; y2 = Pu(y2)) v3++;
              for (y2 = 0, b3 = h2; b3; b3 = Pu(b3)) y2++;
              for (; 0 < v3 - y2; ) E4 = Pu(E4), v3--;
              for (; 0 < y2 - v3; ) h2 = Pu(h2), y2--;
              for (; v3--; ) {
                if (E4 === h2 || h2 !== null && E4 === h2.alternate) break u;
                E4 = Pu(E4), h2 = Pu(h2);
              }
              E4 = null;
            }
            else E4 = null;
            m2 !== null && Ki(z4, S3, m2, E4, false), O !== null && G4 !== null && Ki(z4, G4, O, E4, true);
          }
        }
        l: {
          if (S3 = d2 ? ka(d2) : globalThis, m2 = S3.nodeName && S3.nodeName.toLowerCase(), m2 === "select" || m2 === "input" && S3.type === "file") var T3 = Ie2;
          else if (re2(S3)) if (Y0) T3 = ay;
          else {
            T3 = ly;
            var H2 = Ph;
          }
          else m2 = S3.nodeName, !m2 || m2.toLowerCase() !== "input" || S3.type !== "checkbox" && S3.type !== "radio" ? d2 && Wc(d2.elementType) && (T3 = Ie2) : T3 = uy;
          if (T3 && (T3 = T3(l2, d2))) {
            R0(z4, T3, a2, g2);
            break l;
          }
          H2 && H2(l2, S3, d2), l2 === "focusout" && d2 && S3.type === "number" && d2.memoizedProps.value != null && uc(S3, "number", S3.value);
        }
        switch (H2 = d2 ? ka(d2) : globalThis, l2) {
          case "focusin":
            (re2(H2) || H2.contentEditable === "true") && (ia = H2, nc = d2, lt = null);
            break;
          case "focusout":
            lt = nc = ia = null;
            break;
          case "mousedown":
            fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = false, ai(z4, a2, g2);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            ai(z4, a2, g2);
        }
        var M3;
        if (kc) l: {
          switch (l2) {
            case "compositionstart":
              var D3 = "onCompositionStart";
              break l;
            case "compositionend":
              D3 = "onCompositionEnd";
              break l;
            case "compositionupdate":
              D3 = "onCompositionUpdate";
              break l;
          }
          D3 = void 0;
        }
        else ea ? q0(l2, a2) && (D3 = "onCompositionEnd") : l2 === "keydown" && a2.keyCode === 229 && (D3 = "onCompositionStart");
        D3 && (N0 && a2.locale !== "ko" && (ea || D3 !== "onCompositionStart" ? D3 === "onCompositionEnd" && ea && (M3 = H0()) : (bu = g2, $c = "value" in bu ? bu.value : bu.textContent, ea = true)), H2 = Cn(d2, D3), 0 < H2.length && (D3 = new we3(D3, l2, null, a2, g2), z4.push({
          event: D3,
          listeners: H2
        }), M3 ? D3.data = M3 : (M3 = B0(a2), M3 !== null && (D3.data = M3)))), (M3 = $h ? Fh(l2, a2) : kh(l2, a2)) && (D3 = Cn(d2, "onBeforeInput"), 0 < D3.length && (H2 = new we3("onBeforeInput", "beforeinput", null, a2, g2), z4.push({
          event: H2,
          listeners: D3
        }), H2.data = M3)), jy(z4, l2, d2, a2, g2);
      }
      Dv(z4, u2);
    });
  }
  function Mt(l2, u2, a2) {
    return {
      instance: l2,
      listener: u2,
      currentTarget: a2
    };
  }
  function Cn(l2, u2) {
    for (var a2 = u2 + "Capture", t = []; l2 !== null; ) {
      var n2 = l2, f2 = n2.stateNode;
      if (n2 = n2.tag, n2 !== 5 && n2 !== 26 && n2 !== 27 || f2 === null || (n2 = St(l2, a2), n2 != null && t.unshift(Mt(l2, n2, f2)), n2 = St(l2, u2), n2 != null && t.push(Mt(l2, n2, f2))), l2.tag === 3) return t;
      l2 = l2.return;
    }
    return [];
  }
  function Pu(l2) {
    if (l2 === null) return null;
    do
      l2 = l2.return;
    while (l2 && l2.tag !== 5 && l2.tag !== 27);
    return l2 || null;
  }
  function Ki(l2, u2, a2, t, n2) {
    for (var f2 = u2._reactName, c = []; a2 !== null && a2 !== t; ) {
      var e = a2, i2 = e.alternate, d2 = e.stateNode;
      if (e = e.tag, i2 !== null && i2 === t) break;
      e !== 5 && e !== 26 && e !== 27 || d2 === null || (i2 = d2, n2 ? (d2 = St(a2, f2), d2 != null && c.unshift(Mt(a2, d2, i2))) : n2 || (d2 = St(a2, f2), d2 != null && c.push(Mt(a2, d2, i2)))), a2 = a2.return;
    }
    c.length !== 0 && l2.push({
      event: u2,
      listeners: c
    });
  }
  var Cy = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
  function Ci(l2) {
    return (typeof l2 == "string" ? l2 : "" + l2).replace(Cy, `
`).replace(Ly, "");
  }
  function sv(l2, u2) {
    return u2 = Ci(u2), Ci(l2) === u2;
  }
  function vf() {
  }
  function Q(l2, u2, a2, t, n2, f2) {
    switch (a2) {
      case "children":
        typeof t == "string" ? u2 === "body" || u2 === "textarea" && t === "" || Ua(l2, t) : (typeof t == "number" || typeof t == "bigint") && u2 !== "body" && Ua(l2, "" + t);
        break;
      case "className":
        Jt(l2, "class", t);
        break;
      case "tabIndex":
        Jt(l2, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jt(l2, a2, t);
        break;
      case "style":
        s0(l2, t, f2);
        break;
      case "data":
        if (u2 !== "object") {
          Jt(l2, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (u2 !== "a" || a2 !== "href")) {
          l2.removeAttribute(a2);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          l2.removeAttribute(a2);
          break;
        }
        t = cn("" + t), l2.setAttribute(a2, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          l2.setAttribute(a2, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f2 == "function" && (a2 === "formAction" ? (u2 !== "input" && Q(l2, u2, "name", n2.name, n2, null), Q(l2, u2, "formEncType", n2.formEncType, n2, null), Q(l2, u2, "formMethod", n2.formMethod, n2, null), Q(l2, u2, "formTarget", n2.formTarget, n2, null)) : (Q(l2, u2, "encType", n2.encType, n2, null), Q(l2, u2, "method", n2.method, n2, null), Q(l2, u2, "target", n2.target, n2, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          l2.removeAttribute(a2);
          break;
        }
        t = cn("" + t), l2.setAttribute(a2, t);
        break;
      case "onClick":
        t != null && (l2.onclick = vf);
        break;
      case "onScroll":
        t != null && N2("scroll", l2);
        break;
      case "onScrollEnd":
        t != null && N2("scrollend", l2);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A2(61));
          if (a2 = t.__html, a2 != null) {
            if (n2.children != null) throw Error(A2(60));
            l2.innerHTML = a2;
          }
        }
        break;
      case "multiple":
        l2.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        l2.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t == null || typeof t == "function" || typeof t == "boolean" || typeof t == "symbol") {
          l2.removeAttribute("xlink:href");
          break;
        }
        a2 = cn("" + t), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a2);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? l2.setAttribute(a2, "" + t) : l2.removeAttribute(a2);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol" ? l2.setAttribute(a2, "") : l2.removeAttribute(a2);
        break;
      case "capture":
      case "download":
        t === true ? l2.setAttribute(a2, "") : t !== false && t != null && typeof t != "function" && typeof t != "symbol" ? l2.setAttribute(a2, t) : l2.removeAttribute(a2);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? l2.setAttribute(a2, t) : l2.removeAttribute(a2);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? l2.removeAttribute(a2) : l2.setAttribute(a2, t);
        break;
      case "popover":
        N2("beforetoggle", l2), N2("toggle", l2), fn(l2, "popover", t);
        break;
      case "xlinkActuate":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
        break;
      case "xlinkArcrole":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
        break;
      case "xlinkRole":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:role", t);
        break;
      case "xlinkShow":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:show", t);
        break;
      case "xlinkTitle":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:title", t);
        break;
      case "xlinkType":
        pl(l2, "http://www.w3.org/1999/xlink", "xlink:type", t);
        break;
      case "xmlBase":
        pl(l2, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
        break;
      case "xmlLang":
        pl(l2, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
        break;
      case "xmlSpace":
        pl(l2, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
        break;
      case "is":
        fn(l2, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a2.length) || a2[0] !== "o" && a2[0] !== "O" || a2[1] !== "n" && a2[1] !== "N") && (a2 = Eh.get(a2) || a2, fn(l2, a2, t));
    }
  }
  function Rc(l2, u2, a2, t, n2, f2) {
    switch (a2) {
      case "style":
        s0(l2, t, f2);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(A2(61));
          if (a2 = t.__html, a2 != null) {
            if (n2.children != null) throw Error(A2(60));
            l2.innerHTML = a2;
          }
        }
        break;
      case "children":
        typeof t == "string" ? Ua(l2, t) : (typeof t == "number" || typeof t == "bigint") && Ua(l2, "" + t);
        break;
      case "onScroll":
        t != null && N2("scroll", l2);
        break;
      case "onScrollEnd":
        t != null && N2("scrollend", l2);
        break;
      case "onClick":
        t != null && (l2.onclick = vf);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!A0.hasOwnProperty(a2)) l: {
          if (a2[0] === "o" && a2[1] === "n" && (n2 = a2.endsWith("Capture"), u2 = a2.slice(2, n2 ? a2.length - 7 : void 0), f2 = l2[Sl] || null, f2 = f2 != null ? f2[a2] : null, typeof f2 == "function" && l2.removeEventListener(u2, f2, n2), typeof t == "function")) {
            typeof f2 != "function" && f2 !== null && (a2 in l2 ? l2[a2] = null : l2.hasAttribute(a2) && l2.removeAttribute(a2)), l2.addEventListener(u2, t, n2);
            break l;
          }
          a2 in l2 ? l2[a2] = t : t === true ? l2.setAttribute(a2, "") : fn(l2, a2, t);
        }
    }
  }
  function cl(l2, u2, a2) {
    switch (u2) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        N2("error", l2), N2("load", l2);
        var t = false, n2 = false, f2;
        for (f2 in a2) if (a2.hasOwnProperty(f2)) {
          var c = a2[f2];
          if (c != null) switch (f2) {
            case "src":
              t = true;
              break;
            case "srcSet":
              n2 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(A2(137, u2));
            default:
              Q(l2, u2, f2, c, a2, null);
          }
        }
        n2 && Q(l2, u2, "srcSet", a2.srcSet, a2, null), t && Q(l2, u2, "src", a2.src, a2, null);
        return;
      case "input":
        N2("invalid", l2);
        var e = f2 = c = n2 = null, i2 = null, d2 = null;
        for (t in a2) if (a2.hasOwnProperty(t)) {
          var g2 = a2[t];
          if (g2 != null) switch (t) {
            case "name":
              n2 = g2;
              break;
            case "type":
              c = g2;
              break;
            case "checked":
              i2 = g2;
              break;
            case "defaultChecked":
              d2 = g2;
              break;
            case "value":
              f2 = g2;
              break;
            case "defaultValue":
              e = g2;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g2 != null) throw Error(A2(137, u2));
              break;
            default:
              Q(l2, u2, t, g2, a2, null);
          }
        }
        E0(l2, f2, e, i2, d2, c, n2, false), On(l2);
        return;
      case "select":
        N2("invalid", l2), t = c = f2 = null;
        for (n2 in a2) if (a2.hasOwnProperty(n2) && (e = a2[n2], e != null)) switch (n2) {
          case "value":
            f2 = e;
            break;
          case "defaultValue":
            c = e;
            break;
          case "multiple":
            t = e;
          default:
            Q(l2, u2, n2, e, a2, null);
        }
        u2 = f2, a2 = c, l2.multiple = !!t, u2 != null ? ba(l2, !!t, u2, false) : a2 != null && ba(l2, !!t, a2, true);
        return;
      case "textarea":
        N2("invalid", l2), f2 = n2 = t = null;
        for (c in a2) if (a2.hasOwnProperty(c) && (e = a2[c], e != null)) switch (c) {
          case "value":
            t = e;
            break;
          case "defaultValue":
            n2 = e;
            break;
          case "children":
            f2 = e;
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(A2(91));
            break;
          default:
            Q(l2, u2, c, e, a2, null);
        }
        O0(l2, t, n2, f2), On(l2);
        return;
      case "option":
        for (i2 in a2) if (a2.hasOwnProperty(i2) && (t = a2[i2], t != null)) switch (i2) {
          case "selected":
            l2.selected = t && typeof t != "function" && typeof t != "symbol";
            break;
          default:
            Q(l2, u2, i2, t, a2, null);
        }
        return;
      case "dialog":
        N2("beforetoggle", l2), N2("toggle", l2), N2("cancel", l2), N2("close", l2);
        break;
      case "iframe":
      case "object":
        N2("load", l2);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Tt.length; t++) N2(Tt[t], l2);
        break;
      case "image":
        N2("error", l2), N2("load", l2);
        break;
      case "details":
        N2("toggle", l2);
        break;
      case "embed":
      case "source":
      case "link":
        N2("error", l2), N2("load", l2);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d2 in a2) if (a2.hasOwnProperty(d2) && (t = a2[d2], t != null)) switch (d2) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A2(137, u2));
          default:
            Q(l2, u2, d2, t, a2, null);
        }
        return;
      default:
        if (Wc(u2)) {
          for (g2 in a2) a2.hasOwnProperty(g2) && (t = a2[g2], t !== void 0 && Rc(l2, u2, g2, t, a2, void 0));
          return;
        }
    }
    for (e in a2) a2.hasOwnProperty(e) && (t = a2[e], t != null && Q(l2, u2, e, t, a2, null));
  }
  function py(l2, u2, a2, t) {
    switch (u2) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n2 = null, f2 = null, c = null, e = null, i2 = null, d2 = null, g2 = null;
        for (m2 in a2) {
          var z4 = a2[m2];
          if (a2.hasOwnProperty(m2) && z4 != null) switch (m2) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i2 = z4;
            default:
              t.hasOwnProperty(m2) || Q(l2, u2, m2, null, t, z4);
          }
        }
        for (var S3 in t) {
          var m2 = t[S3];
          if (z4 = a2[S3], t.hasOwnProperty(S3) && (m2 != null || z4 != null)) switch (S3) {
            case "type":
              f2 = m2;
              break;
            case "name":
              n2 = m2;
              break;
            case "checked":
              d2 = m2;
              break;
            case "defaultChecked":
              g2 = m2;
              break;
            case "value":
              c = m2;
              break;
            case "defaultValue":
              e = m2;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m2 != null) throw Error(A2(137, u2));
              break;
            default:
              m2 !== z4 && Q(l2, u2, S3, m2, t, z4);
          }
        }
        lc(l2, c, e, i2, d2, g2, f2, n2);
        return;
      case "select":
        m2 = c = e = S3 = null;
        for (f2 in a2) if (i2 = a2[f2], a2.hasOwnProperty(f2) && i2 != null) switch (f2) {
          case "value":
            break;
          case "multiple":
            m2 = i2;
          default:
            t.hasOwnProperty(f2) || Q(l2, u2, f2, null, t, i2);
        }
        for (n2 in t) if (f2 = t[n2], i2 = a2[n2], t.hasOwnProperty(n2) && (f2 != null || i2 != null)) switch (n2) {
          case "value":
            S3 = f2;
            break;
          case "defaultValue":
            e = f2;
            break;
          case "multiple":
            c = f2;
          default:
            f2 !== i2 && Q(l2, u2, n2, f2, t, i2);
        }
        u2 = e, a2 = c, t = m2, S3 != null ? ba(l2, !!a2, S3, false) : !!t != !!a2 && (u2 != null ? ba(l2, !!a2, u2, true) : ba(l2, !!a2, a2 ? [] : "", false));
        return;
      case "textarea":
        m2 = S3 = null;
        for (e in a2) if (n2 = a2[e], a2.hasOwnProperty(e) && n2 != null && !t.hasOwnProperty(e)) switch (e) {
          case "value":
            break;
          case "children":
            break;
          default:
            Q(l2, u2, e, null, t, n2);
        }
        for (c in t) if (n2 = t[c], f2 = a2[c], t.hasOwnProperty(c) && (n2 != null || f2 != null)) switch (c) {
          case "value":
            S3 = n2;
            break;
          case "defaultValue":
            m2 = n2;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n2 != null) throw Error(A2(91));
            break;
          default:
            n2 !== f2 && Q(l2, u2, c, n2, t, f2);
        }
        D0(l2, S3, m2);
        return;
      case "option":
        for (var O in a2) if (S3 = a2[O], a2.hasOwnProperty(O) && S3 != null && !t.hasOwnProperty(O)) switch (O) {
          case "selected":
            l2.selected = false;
            break;
          default:
            Q(l2, u2, O, null, t, S3);
        }
        for (i2 in t) if (S3 = t[i2], m2 = a2[i2], t.hasOwnProperty(i2) && S3 !== m2 && (S3 != null || m2 != null)) switch (i2) {
          case "selected":
            l2.selected = S3 && typeof S3 != "function" && typeof S3 != "symbol";
            break;
          default:
            Q(l2, u2, i2, S3, t, m2);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var E4 in a2) S3 = a2[E4], a2.hasOwnProperty(E4) && S3 != null && !t.hasOwnProperty(E4) && Q(l2, u2, E4, null, t, S3);
        for (d2 in t) if (S3 = t[d2], m2 = a2[d2], t.hasOwnProperty(d2) && S3 !== m2 && (S3 != null || m2 != null)) switch (d2) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S3 != null) throw Error(A2(137, u2));
            break;
          default:
            Q(l2, u2, d2, S3, t, m2);
        }
        return;
      default:
        if (Wc(u2)) {
          for (var G4 in a2) S3 = a2[G4], a2.hasOwnProperty(G4) && S3 !== void 0 && !t.hasOwnProperty(G4) && Rc(l2, u2, G4, void 0, t, S3);
          for (g2 in t) S3 = t[g2], m2 = a2[g2], !t.hasOwnProperty(g2) || S3 === m2 || S3 === void 0 && m2 === void 0 || Rc(l2, u2, g2, S3, t, m2);
          return;
        }
    }
    for (var h2 in a2) S3 = a2[h2], a2.hasOwnProperty(h2) && S3 != null && !t.hasOwnProperty(h2) && Q(l2, u2, h2, null, t, S3);
    for (z4 in t) S3 = t[z4], m2 = a2[z4], !t.hasOwnProperty(z4) || S3 === m2 || S3 == null && m2 == null || Q(l2, u2, z4, S3, t, m2);
  }
  var Yc = null, oc = null;
  function Ln(l2) {
    return l2.nodeType === 9 ? l2 : l2.ownerDocument;
  }
  function Li(l2) {
    switch (l2) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l2, u2) {
    if (l2 === 0) switch (u2) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l2 === 1 && u2 === "foreignObject" ? 0 : l2;
  }
  function _c(l2, u2) {
    return l2 === "textarea" || l2 === "noscript" || typeof u2.children == "string" || typeof u2.children == "number" || typeof u2.children == "bigint" || typeof u2.dangerouslySetInnerHTML == "object" && u2.dangerouslySetInnerHTML !== null && u2.dangerouslySetInnerHTML.__html != null;
  }
  var pf = null;
  function Jy() {
    var l2 = globalThis.event;
    return l2 && l2.type === "popstate" ? l2 === pf ? false : (pf = l2, true) : (pf = null, false);
  }
  var Hv = typeof setTimeout == "function" ? setTimeout : void 0, Wy = typeof clearTimeout == "function" ? clearTimeout : void 0, pi = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof pi < "u" ? function(l2) {
    return pi.resolve(null).then(l2).catch($y);
  } : Hv;
  function $y(l2) {
    setTimeout(function() {
      throw l2;
    });
  }
  function Yu(l2) {
    return l2 === "head";
  }
  function Ji(l2, u2) {
    var a2 = u2, t = 0, n2 = 0;
    do {
      var f2 = a2.nextSibling;
      if (l2.removeChild(a2), f2 && f2.nodeType === 8) if (a2 = f2.data, a2 === "/$") {
        if (0 < t && 8 > t) {
          a2 = t;
          var c = l2.ownerDocument;
          if (a2 & 1 && yt(c.documentElement), a2 & 2 && yt(c.body), a2 & 4) for (a2 = c.head, yt(a2), c = a2.firstChild; c; ) {
            var e = c.nextSibling, i2 = c.nodeName;
            c[Rt] || i2 === "SCRIPT" || i2 === "STYLE" || i2 === "LINK" && c.rel.toLowerCase() === "stylesheet" || a2.removeChild(c), c = e;
          }
        }
        if (n2 === 0) {
          l2.removeChild(f2), Ut(u2);
          return;
        }
        n2--;
      } else a2 === "$" || a2 === "$?" || a2 === "$!" ? n2++ : t = a2.charCodeAt(0) - 48;
      else t = 0;
      a2 = f2;
    } while (a2);
    Ut(u2);
  }
  function Xc(l2) {
    var u2 = l2.firstChild;
    for (u2 && u2.nodeType === 10 && (u2 = u2.nextSibling); u2; ) {
      var a2 = u2;
      switch (u2 = u2.nextSibling, a2.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a2), Jc(a2);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a2.rel.toLowerCase() === "stylesheet") continue;
      }
      l2.removeChild(a2);
    }
  }
  function Fy(l2, u2, a2, t) {
    for (; l2.nodeType === 1; ) {
      var n2 = a2;
      if (l2.nodeName.toLowerCase() !== u2.toLowerCase()) {
        if (!t && (l2.nodeName !== "INPUT" || l2.type !== "hidden")) break;
      } else if (t) {
        if (!l2[Rt]) switch (u2) {
          case "meta":
            if (!l2.hasAttribute("itemprop")) break;
            return l2;
          case "link":
            if (f2 = l2.getAttribute("rel"), f2 === "stylesheet" && l2.hasAttribute("data-precedence")) break;
            if (f2 !== n2.rel || l2.getAttribute("href") !== (n2.href == null || n2.href === "" ? null : n2.href) || l2.getAttribute("crossorigin") !== (n2.crossOrigin == null ? null : n2.crossOrigin) || l2.getAttribute("title") !== (n2.title == null ? null : n2.title)) break;
            return l2;
          case "style":
            if (l2.hasAttribute("data-precedence")) break;
            return l2;
          case "script":
            if (f2 = l2.getAttribute("src"), (f2 !== (n2.src == null ? null : n2.src) || l2.getAttribute("type") !== (n2.type == null ? null : n2.type) || l2.getAttribute("crossorigin") !== (n2.crossOrigin == null ? null : n2.crossOrigin)) && f2 && l2.hasAttribute("async") && !l2.hasAttribute("itemprop")) break;
            return l2;
          default:
            return l2;
        }
      } else if (u2 === "input" && l2.type === "hidden") {
        var f2 = n2.name == null ? null : "" + n2.name;
        if (n2.type === "hidden" && l2.getAttribute("name") === f2) return l2;
      } else return l2;
      if (l2 = Xl(l2.nextSibling), l2 === null) break;
    }
    return null;
  }
  function ky(l2, u2, a2) {
    if (u2 === "") return null;
    for (; l2.nodeType !== 3; ) if ((l2.nodeType !== 1 || l2.nodeName !== "INPUT" || l2.type !== "hidden") && !a2 || (l2 = Xl(l2.nextSibling), l2 === null)) return null;
    return l2;
  }
  function Gc(l2) {
    return l2.data === "$!" || l2.data === "$?" && l2.ownerDocument.readyState === "complete";
  }
  function ry(l2, u2) {
    var a2 = l2.ownerDocument;
    if (l2.data !== "$?" || a2.readyState === "complete") u2();
    else {
      var t = function() {
        u2(), a2.removeEventListener("DOMContentLoaded", t);
      };
      a2.addEventListener("DOMContentLoaded", t), l2._reactRetry = t;
    }
  }
  function Xl(l2) {
    for (; l2 != null; l2 = l2.nextSibling) {
      var u2 = l2.nodeType;
      if (u2 === 1 || u2 === 3) break;
      if (u2 === 8) {
        if (u2 = l2.data, u2 === "$" || u2 === "$!" || u2 === "$?" || u2 === "F!" || u2 === "F") break;
        if (u2 === "/$") return null;
      }
    }
    return l2;
  }
  var Qc = null;
  function Wi(l2) {
    l2 = l2.previousSibling;
    for (var u2 = 0; l2; ) {
      if (l2.nodeType === 8) {
        var a2 = l2.data;
        if (a2 === "$" || a2 === "$!" || a2 === "$?") {
          if (u2 === 0) return l2;
          u2--;
        } else a2 === "/$" && u2++;
      }
      l2 = l2.previousSibling;
    }
    return null;
  }
  function Nv(l2, u2, a2) {
    switch (u2 = Ln(a2), l2) {
      case "html":
        if (l2 = u2.documentElement, !l2) throw Error(A2(452));
        return l2;
      case "head":
        if (l2 = u2.head, !l2) throw Error(A2(453));
        return l2;
      case "body":
        if (l2 = u2.body, !l2) throw Error(A2(454));
        return l2;
      default:
        throw Error(A2(451));
    }
  }
  function yt(l2) {
    for (var u2 = l2.attributes; u2.length; ) l2.removeAttributeNode(u2[0]);
    Jc(l2);
  }
  var ol = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Set();
  function pn(l2) {
    return typeof l2.getRootNode == "function" ? l2.getRootNode() : l2.nodeType === 9 ? l2 : l2.ownerDocument;
  }
  var fu = o.d;
  o.d = {
    f: Iy,
    r: Py,
    D: ld,
    C: ud,
    L: ad,
    m: td,
    X: fd,
    S: nd,
    M: cd
  };
  function Iy() {
    var l2 = fu.f(), u2 = ff();
    return l2 || u2;
  }
  function Py(l2) {
    var u2 = Ga(l2);
    u2 !== null && u2.tag === 5 && u2.type === "form" ? M1(u2) : fu.r(l2);
  }
  var xa = typeof document > "u" ? null : document;
  function qv(l2, u2, a2) {
    var t = xa;
    if (t && typeof u2 == "string" && u2) {
      var n2 = ql(u2);
      n2 = 'link[rel="' + l2 + '"][href="' + n2 + '"]', typeof a2 == "string" && (n2 += '[crossorigin="' + a2 + '"]'), wi.has(n2) || (wi.add(n2), l2 = {
        rel: l2,
        crossOrigin: a2,
        href: u2
      }, t.querySelector(n2) === null && (u2 = t.createElement("link"), cl(u2, "link", l2), ul(u2), t.head.appendChild(u2)));
    }
  }
  function ld(l2) {
    fu.D(l2), qv("dns-prefetch", l2, null);
  }
  function ud(l2, u2) {
    fu.C(l2, u2), qv("preconnect", l2, u2);
  }
  function ad(l2, u2, a2) {
    fu.L(l2, u2, a2);
    var t = xa;
    if (t && l2 && u2) {
      var n2 = 'link[rel="preload"][as="' + ql(u2) + '"]';
      u2 === "image" && a2 && a2.imageSrcSet ? (n2 += '[imagesrcset="' + ql(a2.imageSrcSet) + '"]', typeof a2.imageSizes == "string" && (n2 += '[imagesizes="' + ql(a2.imageSizes) + '"]')) : n2 += '[href="' + ql(l2) + '"]';
      var f2 = n2;
      switch (u2) {
        case "style":
          f2 = _a(l2);
          break;
        case "script":
          f2 = Va(l2);
      }
      ol.has(f2) || (l2 = j3({
        rel: "preload",
        href: u2 === "image" && a2 && a2.imageSrcSet ? void 0 : l2,
        as: u2
      }, a2), ol.set(f2, l2), t.querySelector(n2) !== null || u2 === "style" && t.querySelector(jt(f2)) || u2 === "script" && t.querySelector(Kt(f2)) || (u2 = t.createElement("link"), cl(u2, "link", l2), ul(u2), t.head.appendChild(u2)));
    }
  }
  function td(l2, u2) {
    fu.m(l2, u2);
    var a2 = xa;
    if (a2 && l2) {
      var t = u2 && typeof u2.as == "string" ? u2.as : "script", n2 = 'link[rel="modulepreload"][as="' + ql(t) + '"][href="' + ql(l2) + '"]', f2 = n2;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f2 = Va(l2);
      }
      if (!ol.has(f2) && (l2 = j3({
        rel: "modulepreload",
        href: l2
      }, u2), ol.set(f2, l2), a2.querySelector(n2) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a2.querySelector(Kt(f2))) return;
        }
        t = a2.createElement("link"), cl(t, "link", l2), ul(t), a2.head.appendChild(t);
      }
    }
  }
  function nd(l2, u2, a2) {
    fu.S(l2, u2, a2);
    var t = xa;
    if (t && l2) {
      var n2 = ga(t).hoistableStyles, f2 = _a(l2);
      u2 = u2 || "default";
      var c = n2.get(f2);
      if (!c) {
        var e = {
          loading: 0,
          preload: null
        };
        if (c = t.querySelector(jt(f2))) e.loading = 5;
        else {
          l2 = j3({
            rel: "stylesheet",
            href: l2,
            "data-precedence": u2
          }, a2), (a2 = ol.get(f2)) && qe2(l2, a2);
          var i2 = c = t.createElement("link");
          ul(i2), cl(i2, "link", l2), i2._p = new Promise(function(d2, g2) {
            i2.onload = d2, i2.onerror = g2;
          }), i2.addEventListener("load", function() {
            e.loading |= 1;
          }), i2.addEventListener("error", function() {
            e.loading |= 2;
          }), e.loading |= 4, bn(c, u2, t);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: e
        }, n2.set(f2, c);
      }
    }
  }
  function fd(l2, u2) {
    fu.X(l2, u2);
    var a2 = xa;
    if (a2 && l2) {
      var t = ga(a2).hoistableScripts, n2 = Va(l2), f2 = t.get(n2);
      f2 || (f2 = a2.querySelector(Kt(n2)), f2 || (l2 = j3({
        src: l2,
        async: true
      }, u2), (u2 = ol.get(n2)) && Be2(l2, u2), f2 = a2.createElement("script"), ul(f2), cl(f2, "link", l2), a2.head.appendChild(f2)), f2 = {
        type: "script",
        instance: f2,
        count: 1,
        state: null
      }, t.set(n2, f2));
    }
  }
  function cd(l2, u2) {
    fu.M(l2, u2);
    var a2 = xa;
    if (a2 && l2) {
      var t = ga(a2).hoistableScripts, n2 = Va(l2), f2 = t.get(n2);
      f2 || (f2 = a2.querySelector(Kt(n2)), f2 || (l2 = j3({
        src: l2,
        async: true,
        type: "module"
      }, u2), (u2 = ol.get(n2)) && Be2(l2, u2), f2 = a2.createElement("script"), ul(f2), cl(f2, "link", l2), a2.head.appendChild(f2)), f2 = {
        type: "script",
        instance: f2,
        count: 1,
        state: null
      }, t.set(n2, f2));
    }
  }
  function $i(l2, u2, a2, t) {
    var n2 = (n2 = Tu.current) ? pn(n2) : null;
    if (!n2) throw Error(A2(446));
    switch (l2) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a2.precedence == "string" && typeof a2.href == "string" ? (u2 = _a(a2.href), a2 = ga(n2).hoistableStyles, t = a2.get(u2), t || (t = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a2.set(u2, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a2.rel === "stylesheet" && typeof a2.href == "string" && typeof a2.precedence == "string") {
          l2 = _a(a2.href);
          var f2 = ga(n2).hoistableStyles, c = f2.get(l2);
          if (c || (n2 = n2.ownerDocument || n2, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f2.set(l2, c), (f2 = n2.querySelector(jt(l2))) && !f2._p && (c.instance = f2, c.state.loading = 5), ol.has(l2) || (a2 = {
            rel: "preload",
            as: "style",
            href: a2.href,
            crossOrigin: a2.crossOrigin,
            integrity: a2.integrity,
            media: a2.media,
            hrefLang: a2.hrefLang,
            referrerPolicy: a2.referrerPolicy
          }, ol.set(l2, a2), f2 || ed(n2, l2, a2, c.state))), u2 && t === null) throw Error(A2(528, ""));
          return c;
        }
        if (u2 && t !== null) throw Error(A2(529, ""));
        return null;
      case "script":
        return u2 = a2.async, a2 = a2.src, typeof a2 == "string" && u2 && typeof u2 != "function" && typeof u2 != "symbol" ? (u2 = Va(a2), a2 = ga(n2).hoistableScripts, t = a2.get(u2), t || (t = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a2.set(u2, t)), t) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(A2(444, l2));
    }
  }
  function _a(l2) {
    return 'href="' + ql(l2) + '"';
  }
  function jt(l2) {
    return 'link[rel="stylesheet"][' + l2 + "]";
  }
  function Bv(l2) {
    return j3({}, l2, {
      "data-precedence": l2.precedence,
      precedence: null
    });
  }
  function ed(l2, u2, a2, t) {
    l2.querySelector('link[rel="preload"][as="style"][' + u2 + "]") ? t.loading = 1 : (u2 = l2.createElement("link"), t.preload = u2, u2.addEventListener("load", function() {
      return t.loading |= 1;
    }), u2.addEventListener("error", function() {
      return t.loading |= 2;
    }), cl(u2, "link", a2), ul(u2), l2.head.appendChild(u2));
  }
  function Va(l2) {
    return '[src="' + ql(l2) + '"]';
  }
  function Kt(l2) {
    return "script[async]" + l2;
  }
  function Fi(l2, u2, a2) {
    if (u2.count++, u2.instance === null) switch (u2.type) {
      case "style":
        var t = l2.querySelector('style[data-href~="' + ql(a2.href) + '"]');
        if (t) return u2.instance = t, ul(t), t;
        var n2 = j3({}, a2, {
          "data-href": a2.href,
          "data-precedence": a2.precedence,
          href: null,
          precedence: null
        });
        return t = (l2.ownerDocument || l2).createElement("style"), ul(t), cl(t, "style", n2), bn(t, a2.precedence, l2), u2.instance = t;
      case "stylesheet":
        n2 = _a(a2.href);
        var f2 = l2.querySelector(jt(n2));
        if (f2) return u2.state.loading |= 4, u2.instance = f2, ul(f2), f2;
        t = Bv(a2), (n2 = ol.get(n2)) && qe2(t, n2), f2 = (l2.ownerDocument || l2).createElement("link"), ul(f2);
        var c = f2;
        return c._p = new Promise(function(e, i2) {
          c.onload = e, c.onerror = i2;
        }), cl(f2, "link", t), u2.state.loading |= 4, bn(f2, a2.precedence, l2), u2.instance = f2;
      case "script":
        return f2 = Va(a2.src), (n2 = l2.querySelector(Kt(f2))) ? (u2.instance = n2, ul(n2), n2) : (t = a2, (n2 = ol.get(f2)) && (t = j3({}, a2), Be2(t, n2)), l2 = l2.ownerDocument || l2, n2 = l2.createElement("script"), ul(n2), cl(n2, "link", t), l2.head.appendChild(n2), u2.instance = n2);
      case "void":
        return null;
      default:
        throw Error(A2(443, u2.type));
    }
    else u2.type === "stylesheet" && (u2.state.loading & 4) === 0 && (t = u2.instance, u2.state.loading |= 4, bn(t, a2.precedence, l2));
    return u2.instance;
  }
  function bn(l2, u2, a2) {
    for (var t = a2.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n2 = t.length ? t[t.length - 1] : null, f2 = n2, c = 0; c < t.length; c++) {
      var e = t[c];
      if (e.dataset.precedence === u2) f2 = e;
      else if (f2 !== n2) break;
    }
    f2 ? f2.parentNode.insertBefore(l2, f2.nextSibling) : (u2 = a2.nodeType === 9 ? a2.head : a2, u2.insertBefore(l2, u2.firstChild));
  }
  function qe2(l2, u2) {
    l2.crossOrigin == null && (l2.crossOrigin = u2.crossOrigin), l2.referrerPolicy == null && (l2.referrerPolicy = u2.referrerPolicy), l2.title == null && (l2.title = u2.title);
  }
  function Be2(l2, u2) {
    l2.crossOrigin == null && (l2.crossOrigin = u2.crossOrigin), l2.referrerPolicy == null && (l2.referrerPolicy = u2.referrerPolicy), l2.integrity == null && (l2.integrity = u2.integrity);
  }
  var zn = null;
  function ki(l2, u2, a2) {
    if (zn === null) {
      var t = /* @__PURE__ */ new Map(), n2 = zn = /* @__PURE__ */ new Map();
      n2.set(a2, t);
    } else n2 = zn, t = n2.get(a2), t || (t = /* @__PURE__ */ new Map(), n2.set(a2, t));
    if (t.has(l2)) return t;
    for (t.set(l2, null), a2 = a2.getElementsByTagName(l2), n2 = 0; n2 < a2.length; n2++) {
      var f2 = a2[n2];
      if (!(f2[Rt] || f2[el] || l2 === "link" && f2.getAttribute("rel") === "stylesheet") && f2.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = f2.getAttribute(u2) || "";
        c = l2 + c;
        var e = t.get(c);
        e ? e.push(f2) : t.set(c, [
          f2
        ]);
      }
    }
    return t;
  }
  function ri(l2, u2, a2) {
    l2 = l2.ownerDocument || l2, l2.head.insertBefore(a2, u2 === "title" ? l2.querySelector("head > title") : null);
  }
  function id(l2, u2, a2) {
    if (a2 === 1 || u2.itemProp != null) return false;
    switch (l2) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof u2.precedence != "string" || typeof u2.href != "string" || u2.href === "") break;
        return true;
      case "link":
        if (typeof u2.rel != "string" || typeof u2.href != "string" || u2.href === "" || u2.onLoad || u2.onError) break;
        switch (u2.rel) {
          case "stylesheet":
            return l2 = u2.disabled, typeof u2.precedence == "string" && l2 == null;
          default:
            return true;
        }
      case "script":
        if (u2.async && typeof u2.async != "function" && typeof u2.async != "symbol" && !u2.onLoad && !u2.onError && u2.src && typeof u2.src == "string") return true;
    }
    return false;
  }
  function Rv(l2) {
    return !(l2.type === "stylesheet" && (l2.state.loading & 3) === 0);
  }
  var Et = null;
  function vd() {
  }
  function hd(l2, u2, a2) {
    if (Et === null) throw Error(A2(475));
    var t = Et;
    if (u2.type === "stylesheet" && (typeof a2.media != "string" || matchMedia(a2.media).matches !== false) && (u2.state.loading & 4) === 0) {
      if (u2.instance === null) {
        var n2 = _a(a2.href), f2 = l2.querySelector(jt(n2));
        if (f2) {
          l2 = f2._p, l2 !== null && typeof l2 == "object" && typeof l2.then == "function" && (t.count++, t = Jn.bind(t), l2.then(t, t)), u2.state.loading |= 4, u2.instance = f2, ul(f2);
          return;
        }
        f2 = l2.ownerDocument || l2, a2 = Bv(a2), (n2 = ol.get(n2)) && qe2(a2, n2), f2 = f2.createElement("link"), ul(f2);
        var c = f2;
        c._p = new Promise(function(e, i2) {
          c.onload = e, c.onerror = i2;
        }), cl(f2, "link", a2), u2.instance = f2;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(u2, l2), (l2 = u2.state.preload) && (u2.state.loading & 3) === 0 && (t.count++, u2 = Jn.bind(t), l2.addEventListener("load", u2), l2.addEventListener("error", u2));
    }
  }
  function yd() {
    if (Et === null) throw Error(A2(475));
    var l2 = Et;
    return l2.stylesheets && l2.count === 0 && Zc(l2, l2.stylesheets), 0 < l2.count ? function(u2) {
      var a2 = setTimeout(function() {
        if (l2.stylesheets && Zc(l2, l2.stylesheets), l2.unsuspend) {
          var t = l2.unsuspend;
          l2.unsuspend = null, t();
        }
      }, 6e4);
      return l2.unsuspend = u2, function() {
        l2.unsuspend = null, clearTimeout(a2);
      };
    } : null;
  }
  function Jn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l2 = this.unsuspend;
        this.unsuspend = null, l2();
      }
    }
  }
  var Wn = null;
  function Zc(l2, u2) {
    l2.stylesheets = null, l2.unsuspend !== null && (l2.count++, Wn = /* @__PURE__ */ new Map(), u2.forEach(dd, l2), Wn = null, Jn.call(l2));
  }
  function dd(l2, u2) {
    if (!(u2.state.loading & 4)) {
      var a2 = Wn.get(l2);
      if (a2) var t = a2.get(null);
      else {
        a2 = /* @__PURE__ */ new Map(), Wn.set(l2, a2);
        for (var n2 = l2.querySelectorAll("link[data-precedence],style[data-precedence]"), f2 = 0; f2 < n2.length; f2++) {
          var c = n2[f2];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a2.set(c.dataset.precedence, c), t = c);
        }
        t && a2.set(null, t);
      }
      n2 = u2.instance, c = n2.getAttribute("data-precedence"), f2 = a2.get(c) || t, f2 === t && a2.set(null, n2), a2.set(c, n2), this.count++, t = Jn.bind(this), n2.addEventListener("load", t), n2.addEventListener("error", t), f2 ? f2.parentNode.insertBefore(n2, f2.nextSibling) : (l2 = l2.nodeType === 9 ? l2.head : l2, l2.insertBefore(n2, l2.firstChild)), u2.state.loading |= 4;
    }
  }
  var Dt = {
    $$typeof: $l,
    Provider: null,
    Consumer: null,
    _currentValue: Qu,
    _currentValue2: Qu,
    _threadCount: 0
  };
  function Sd(l2, u2, a2, t, n2, f2, c, e) {
    this.tag = 1, this.containerInfo = l2, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.hiddenUpdates = gf(null), this.identifierPrefix = t, this.onUncaughtError = n2, this.onCaughtError = f2, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = e, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yv(l2, u2, a2, t, n2, f2, c, e, i2, d2, g2, z4) {
    return l2 = new Sd(l2, u2, a2, c, e, i2, d2, z4), u2 = 1, f2 === true && (u2 |= 24), f2 = Al(3, null, null, u2), l2.current = f2, f2.stateNode = l2, u2 = te(), u2.refCount++, l2.pooledCache = u2, u2.refCount++, f2.memoizedState = {
      element: t,
      isDehydrated: a2,
      cache: u2
    }, fe2(f2), l2;
  }
  function ov(l2) {
    return l2 ? (l2 = ya, l2) : ya;
  }
  function _v(l2, u2, a2, t, n2, f2) {
    n2 = ov(n2), t.context === null ? t.context = n2 : t.pendingContext = n2, t = Mu(u2), t.payload = {
      element: a2
    }, f2 = f2 === void 0 ? null : f2, f2 !== null && (t.callback = f2), a2 = Eu(l2, t, u2), a2 !== null && (Dl(a2, l2, u2), tt(a2, l2, u2));
  }
  function Ii(l2, u2) {
    if (l2 = l2.memoizedState, l2 !== null && l2.dehydrated !== null) {
      var a2 = l2.retryLane;
      l2.retryLane = a2 !== 0 && a2 < u2 ? a2 : u2;
    }
  }
  function Re2(l2, u2) {
    Ii(l2, u2), (l2 = l2.alternate) && Ii(l2, u2);
  }
  function Xv(l2) {
    if (l2.tag === 13) {
      var u2 = Qa(l2, 67108864);
      u2 !== null && Dl(u2, l2, 67108864), Re2(l2, 67108864);
    }
  }
  var wn = true;
  function md(l2, u2, a2, t) {
    var n2 = s.T;
    s.T = null;
    var f2 = o.p;
    try {
      o.p = 2, Ye2(l2, u2, a2, t);
    } finally {
      o.p = f2, s.T = n2;
    }
  }
  function gd(l2, u2, a2, t) {
    var n2 = s.T;
    s.T = null;
    var f2 = o.p;
    try {
      o.p = 8, Ye2(l2, u2, a2, t);
    } finally {
      o.p = f2, s.T = n2;
    }
  }
  function Ye2(l2, u2, a2, t) {
    if (wn) {
      var n2 = xc(t);
      if (n2 === null) Lf(l2, u2, t, $n, a2), Pi(l2, t);
      else if (zd(n2, l2, u2, a2, t)) t.stopPropagation();
      else if (Pi(l2, t), u2 & 4 && -1 < bd.indexOf(l2)) {
        for (; n2 !== null; ) {
          var f2 = Ga(n2);
          if (f2 !== null) switch (f2.tag) {
            case 3:
              if (f2 = f2.stateNode, f2.current.memoizedState.isDehydrated) {
                var c = _u(f2.pendingLanes);
                if (c !== 0) {
                  var e = f2;
                  for (e.pendingLanes |= 2, e.entangledLanes |= 2; c; ) {
                    var i2 = 1 << 31 - Ml(c);
                    e.entanglements[1] |= i2, c &= ~i2;
                  }
                  Ll(f2), (X2 & 6) === 0 && (xn = jl() + 500, Vt(0, false));
                }
              }
              break;
            case 13:
              e = Qa(f2, 2), e !== null && Dl(e, f2, 2), ff(), Re2(f2, 2);
          }
          if (f2 = xc(t), f2 === null && Lf(l2, u2, t, $n, a2), f2 === n2) break;
          n2 = f2;
        }
        n2 !== null && t.stopPropagation();
      } else Lf(l2, u2, t, null, a2);
    }
  }
  function xc(l2) {
    return l2 = wc(l2), oe2(l2);
  }
  var $n = null;
  function oe2(l2) {
    if ($n = null, l2 = fa(l2), l2 !== null) {
      var u2 = Ht(l2);
      if (u2 === null) l2 = null;
      else {
        var a2 = u2.tag;
        if (a2 === 13) {
          if (l2 = f0(u2), l2 !== null) return l2;
          l2 = null;
        } else if (a2 === 3) {
          if (u2.stateNode.current.memoizedState.isDehydrated) return u2.tag === 3 ? u2.stateNode.containerInfo : null;
          l2 = null;
        } else u2 !== l2 && (l2 = null);
      }
    }
    return $n = l2, null;
  }
  function Gv(l2) {
    switch (l2) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (th()) {
          case v0:
            return 2;
          case h0:
            return 8;
          case Dn:
          case nh:
            return 32;
          case y0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = false, su = null, Uu = null, Hu = null, Ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), mu = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Pi(l2, u2) {
    switch (l2) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Hu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ot.delete(u2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        st.delete(u2.pointerId);
    }
  }
  function Wa(l2, u2, a2, t, n2, f2) {
    return l2 === null || l2.nativeEvent !== f2 ? (l2 = {
      blockedOn: u2,
      domEventName: a2,
      eventSystemFlags: t,
      nativeEvent: f2,
      targetContainers: [
        n2
      ]
    }, u2 !== null && (u2 = Ga(u2), u2 !== null && Xv(u2)), l2) : (l2.eventSystemFlags |= t, u2 = l2.targetContainers, n2 !== null && u2.indexOf(n2) === -1 && u2.push(n2), l2);
  }
  function zd(l2, u2, a2, t, n2) {
    switch (u2) {
      case "focusin":
        return su = Wa(su, l2, u2, a2, t, n2), true;
      case "dragenter":
        return Uu = Wa(Uu, l2, u2, a2, t, n2), true;
      case "mouseover":
        return Hu = Wa(Hu, l2, u2, a2, t, n2), true;
      case "pointerover":
        var f2 = n2.pointerId;
        return Ot.set(f2, Wa(Ot.get(f2) || null, l2, u2, a2, t, n2)), true;
      case "gotpointercapture":
        return f2 = n2.pointerId, st.set(f2, Wa(st.get(f2) || null, l2, u2, a2, t, n2)), true;
    }
    return false;
  }
  function Qv(l2) {
    var u2 = fa(l2.target);
    if (u2 !== null) {
      var a2 = Ht(u2);
      if (a2 !== null) {
        if (u2 = a2.tag, u2 === 13) {
          if (u2 = f0(a2), u2 !== null) {
            l2.blockedOn = u2, dh(l2.priority, function() {
              if (a2.tag === 13) {
                var t = El();
                t = Lc(t);
                var n2 = Qa(a2, t);
                n2 !== null && Dl(n2, a2, t), Re2(a2, t);
              }
            });
            return;
          }
        } else if (u2 === 3 && a2.stateNode.current.memoizedState.isDehydrated) {
          l2.blockedOn = a2.tag === 3 ? a2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l2.blockedOn = null;
  }
  function An(l2) {
    if (l2.blockedOn !== null) return false;
    for (var u2 = l2.targetContainers; 0 < u2.length; ) {
      var a2 = xc(l2.nativeEvent);
      if (a2 === null) {
        a2 = l2.nativeEvent;
        var t = new a2.constructor(a2.type, a2);
        ac = t, a2.target.dispatchEvent(t), ac = null;
      } else return u2 = Ga(a2), u2 !== null && Xv(u2), l2.blockedOn = a2, false;
      u2.shift();
    }
    return true;
  }
  function l0(l2, u2, a2) {
    An(l2) && a2.delete(u2);
  }
  function Ad() {
    Vc = false, su !== null && An(su) && (su = null), Uu !== null && An(Uu) && (Uu = null), Hu !== null && An(Hu) && (Hu = null), Ot.forEach(l0), st.forEach(l0);
  }
  function tn(l2, u2) {
    l2.blockedOn === u2 && (l2.blockedOn = null, Vc || (Vc = true, I2.unstable_scheduleCallback(I2.unstable_NormalPriority, Ad)));
  }
  var nn = null;
  function u0(l2) {
    nn !== l2 && (nn = l2, I2.unstable_scheduleCallback(I2.unstable_NormalPriority, function() {
      nn === l2 && (nn = null);
      for (var u2 = 0; u2 < l2.length; u2 += 3) {
        var a2 = l2[u2], t = l2[u2 + 1], n2 = l2[u2 + 2];
        if (typeof t != "function") {
          if (oe2(t || a2) === null) continue;
          break;
        }
        var f2 = Ga(a2);
        f2 !== null && (l2.splice(u2, 3), u2 -= 3, Ac(f2, {
          pending: true,
          data: n2,
          method: a2.method,
          action: t
        }, t, n2));
      }
    }));
  }
  function Ut(l2) {
    function u2(i2) {
      return tn(i2, l2);
    }
    su !== null && tn(su, l2), Uu !== null && tn(Uu, l2), Hu !== null && tn(Hu, l2), Ot.forEach(u2), st.forEach(u2);
    for (var a2 = 0; a2 < mu.length; a2++) {
      var t = mu[a2];
      t.blockedOn === l2 && (t.blockedOn = null);
    }
    for (; 0 < mu.length && (a2 = mu[0], a2.blockedOn === null); ) Qv(a2), a2.blockedOn === null && mu.shift();
    if (a2 = (l2.ownerDocument || l2).$$reactFormReplay, a2 != null) for (t = 0; t < a2.length; t += 3) {
      var n2 = a2[t], f2 = a2[t + 1], c = n2[Sl] || null;
      if (typeof f2 == "function") c || u0(a2);
      else if (c) {
        var e = null;
        if (f2 && f2.hasAttribute("formAction")) {
          if (n2 = f2, c = f2[Sl] || null) e = c.formAction;
          else if (oe2(n2) !== null) continue;
        } else e = c.action;
        typeof e == "function" ? a2[t + 1] = e : (a2.splice(t, 3), t -= 3), u0(a2);
      }
    }
  }
  function _e3(l2) {
    this._internalRoot = l2;
  }
  hf.prototype.render = _e3.prototype.render = function(l2) {
    var u2 = this._internalRoot;
    if (u2 === null) throw Error(A2(409));
    var a2 = u2.current, t = El();
    _v(a2, t, l2, u2, null, null);
  };
  hf.prototype.unmount = _e3.prototype.unmount = function() {
    var l2 = this._internalRoot;
    if (l2 !== null) {
      this._internalRoot = null;
      var u2 = l2.containerInfo;
      _v(l2.current, 2, null, l2, null, null), ff(), u2[Xa] = null;
    }
  };
  function hf(l2) {
    this._internalRoot = l2;
  }
  hf.prototype.unstable_scheduleHydration = function(l2) {
    if (l2) {
      var u2 = b0();
      l2 = {
        blockedOn: null,
        target: l2,
        priority: u2
      };
      for (var a2 = 0; a2 < mu.length && u2 !== 0 && u2 < mu[a2].priority; a2++) ;
      mu.splice(a2, 0, l2), a2 === 0 && Qv(l2);
    }
  };
  var a0 = t0.version;
  if (a0 !== "19.1.0") throw Error(A2(527, a0, "19.1.0"));
  o.findDOMNode = function(l2) {
    var u2 = l2._reactInternals;
    if (u2 === void 0) throw typeof l2.render == "function" ? Error(A2(188)) : (l2 = Object.keys(l2).join(","), Error(A2(268, l2)));
    return l2 = kv(u2), l2 = l2 !== null ? c0(l2) : null, l2 = l2 === null ? null : l2.stateNode, l2;
  };
  var Td = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: s,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (wa = __REACT_DEVTOOLS_GLOBAL_HOOK__, !wa.isDisabled && wa.supportsFiber)) try {
    Nt = wa.inject(Td), Tl = wa;
  } catch {
  }
  var wa;
  yf.createRoot = function(l2, u2) {
    if (!n0(l2)) throw Error(A2(299));
    var a2 = false, t = "", n2 = Y1, f2 = o1, c = _1, e = null;
    return u2 != null && (u2.unstable_strictMode === true && (a2 = true), u2.identifierPrefix !== void 0 && (t = u2.identifierPrefix), u2.onUncaughtError !== void 0 && (n2 = u2.onUncaughtError), u2.onCaughtError !== void 0 && (f2 = u2.onCaughtError), u2.onRecoverableError !== void 0 && (c = u2.onRecoverableError), u2.unstable_transitionCallbacks !== void 0 && (e = u2.unstable_transitionCallbacks)), u2 = Yv(l2, 1, false, null, null, a2, t, n2, f2, c, e, null), l2[Xa] = u2.current, Ne2(l2), new _e3(u2);
  };
  yf.hydrateRoot = function(l2, u2, a2) {
    if (!n0(l2)) throw Error(A2(299));
    var t = false, n2 = "", f2 = Y1, c = o1, e = _1, i2 = null, d2 = null;
    return a2 != null && (a2.unstable_strictMode === true && (t = true), a2.identifierPrefix !== void 0 && (n2 = a2.identifierPrefix), a2.onUncaughtError !== void 0 && (f2 = a2.onUncaughtError), a2.onCaughtError !== void 0 && (c = a2.onCaughtError), a2.onRecoverableError !== void 0 && (e = a2.onRecoverableError), a2.unstable_transitionCallbacks !== void 0 && (i2 = a2.unstable_transitionCallbacks), a2.formState !== void 0 && (d2 = a2.formState)), u2 = Yv(l2, 1, true, u2, a2 ?? null, t, n2, f2, c, e, i2, d2), u2.context = ov(null), a2 = u2.current, t = El(), t = Lc(t), n2 = Mu(t), n2.callback = null, Eu(a2, n2, t), a2 = t, u2.current.lanes = a2, Bt(u2, a2), Ll(u2), l2[Xa] = u2.current, Ne2(l2), new hf(u2);
  };
  yf.version = "19.1.0";
});
var jv = Ge2((Dd, Vv) => {
  "use strict";
  function xv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv);
    } catch (l2) {
      console.error(l2);
    }
  }
  xv(), Vv.exports = Zv();
});
var df = $v(jv());
var { createRoot: Od, hydrateRoot: sd, version: Ud } = df;
var Hd = df.default ?? df;

// src/app/components/HelloWorld.tsx
var HelloWorld = () => {
  return /* @__PURE__ */ C("div", {
    children: [
      /* @__PURE__ */ q("h1", {
        children: "Hello World!"
      }),
      /* @__PURE__ */ q("p", {
        children: "Welcome to React 19.1"
      })
    ]
  });
};

// src/main.tsx
var root = Hd.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ q(Qe.StrictMode, {
  children: /* @__PURE__ */ q(HelloWorld, {})
}));
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
