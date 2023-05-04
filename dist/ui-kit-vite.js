function qt($, d) {
  return $ + d;
}
function Ht($, d) {
  return $ - d;
}
var Nr = { exports: {} }, Ge = {}, Mr = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Wt() {
  if (ft)
    return _;
  ft = 1;
  var $ = Symbol.for("react.element"), d = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ae = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Ie = {};
  function oe(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = oe.prototype;
  function I(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  var he = I.prototype = new ue();
  he.constructor = I, fe(he, oe.prototype), he.isPureReactComponent = !0;
  var ie = Array.isArray, M = Object.prototype.hasOwnProperty, H = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, h) {
    var C, g = {}, P = null, k = null;
    if (s != null)
      for (C in s.ref !== void 0 && (k = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        M.call(s, C) && !le.hasOwnProperty(C) && (g[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      g.children = h;
    else if (1 < T) {
      for (var w = Array(T), U = 0; U < T; U++)
        w[U] = arguments[U + 2];
      g.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        g[C] === void 0 && (g[C] = T[C]);
    return { $$typeof: $, type: n, key: P, ref: k, props: g, _owner: H.current };
  }
  function Re(n, s) {
    return { $$typeof: $, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === $;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var we = /\/+/g;
  function G(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function J(n, s, h, C, g) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var k = !1;
    if (n === null)
      k = !0;
    else
      switch (P) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case $:
            case d:
              k = !0;
          }
      }
    if (k)
      return k = n, g = g(k), n = C === "" ? "." + G(k, 0) : C, ie(g) ? (h = "", n != null && (h = n.replace(we, "$&/") + "/"), J(g, s, h, "", function(U) {
        return U;
      })) : g != null && (Ce(g) && (g = Re(g, h + (!g.key || k && k.key === g.key ? "" : ("" + g.key).replace(we, "$&/") + "/") + n)), s.push(g)), 1;
    if (k = 0, C = C === "" ? "." : C + ":", ie(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + G(P, T);
        k += J(P, s, h, w, g);
      }
    else if (w = re(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + G(P, T++), k += J(P, s, h, w, g);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function B(n, s, h) {
    if (n == null)
      return n;
    var C = [], g = 0;
    return J(n, C, "", "", function(P) {
      return s.call(h, P, g++);
    }), C;
  }
  function se(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var p = { current: null }, de = { transition: null }, Se = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: de, ReactCurrentOwner: H };
  return _.Children = { map: B, forEach: function(n, s, h) {
    B(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return B(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return B(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, _.Component = oe, _.Fragment = te, _.Profiler = ne, _.PureComponent = I, _.StrictMode = V, _.Suspense = L, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, _.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = fe({}, n.props), g = n.key, P = n.ref, k = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, k = H.current), s.key !== void 0 && (g = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        M.call(s, w) && !le.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var U = 0; U < w; U++)
        T[U] = arguments[U + 2];
      C.children = T;
    }
    return { $$typeof: $, type: n.type, key: g, ref: P, props: C, _owner: k };
  }, _.createContext = function(n) {
    return n = { $$typeof: ae, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: Q, _context: n }, n.Consumer = n;
  }, _.createElement = ve, _.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, _.isValidElement = Ce, _.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: se };
  }, _.memo = function(n, s) {
    return { $$typeof: ee, type: n, compare: s === void 0 ? null : s };
  }, _.startTransition = function(n) {
    var s = de.transition;
    de.transition = {};
    try {
      n();
    } finally {
      de.transition = s;
    }
  }, _.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _.useCallback = function(n, s) {
    return p.current.useCallback(n, s);
  }, _.useContext = function(n) {
    return p.current.useContext(n);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, _.useEffect = function(n, s) {
    return p.current.useEffect(n, s);
  }, _.useId = function() {
    return p.current.useId();
  }, _.useImperativeHandle = function(n, s, h) {
    return p.current.useImperativeHandle(n, s, h);
  }, _.useInsertionEffect = function(n, s) {
    return p.current.useInsertionEffect(n, s);
  }, _.useLayoutEffect = function(n, s) {
    return p.current.useLayoutEffect(n, s);
  }, _.useMemo = function(n, s) {
    return p.current.useMemo(n, s);
  }, _.useReducer = function(n, s, h) {
    return p.current.useReducer(n, s, h);
  }, _.useRef = function(n) {
    return p.current.useRef(n);
  }, _.useState = function(n) {
    return p.current.useState(n);
  }, _.useSyncExternalStore = function(n, s, h) {
    return p.current.useSyncExternalStore(n, s, h);
  }, _.useTransition = function() {
    return p.current.useTransition();
  }, _.version = "18.2.0", _;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var lt;
function Vt() {
  return lt || (lt = 1, function($, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var te = "18.2.0", V = Symbol.for("react.element"), ne = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), ee = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), oe = Symbol.iterator, ue = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {}, ve = null;
      function Re(e) {
        ve = e;
      }
      le.setExtraStackFrame = function(e) {
        ve = e;
      }, le.getCurrentStack = null, le.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = le.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ye = !1, we = !1, G = !1, J = !1, B = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: H
      };
      B.ReactDebugCurrentFrame = le, B.ReactCurrentActQueue = M;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("error", e, a);
        }
      }
      function de(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var v = a.map(function(l) {
            return String(l);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Se[i])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function g(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      g.prototype.isReactComponent = {}, g.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, g.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(g.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in P)
          P.hasOwnProperty(T) && k(T, P[T]);
      }
      function w() {
      }
      w.prototype = g.prototype;
      function U(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var me = U.prototype = new w();
      me.constructor = U, h(me, g.prototype), me.isPureReactComponent = !0;
      function hr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function Fe(e) {
        return Xe(e);
      }
      function mr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Te(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case Q:
            return "Fragment";
          case ne:
            return "Portal";
          case Z:
            return "Profiler";
          case ae:
            return "StrictMode";
          case Y:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return Pe(r) + ".Consumer";
            case L:
              var a = e;
              return Pe(a._context) + ".Provider";
            case N:
              return Qe(e, e.render, "ForwardRef");
            case K:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case fe: {
              var i = e, v = i._payload, l = i._init;
              try {
                return pe(l(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ke = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Ne;
      Ne = {};
      function Be(e) {
        if (ke.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (ke.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Ze || (Ze = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = pe(H.current.type);
          Ne[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var je = function(e, r, a, o, i, v, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: V,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function gr(e, r, a) {
        var o, i = {}, v = null, l = null, y = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), _e(r) && (Oe(r.key), v = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          i.children = a;
        else if (O > 1) {
          for (var j = Array(O), A = 0; A < O; A++)
            j[A] = arguments[A + 2];
          Object.freeze && Object.freeze(j), i.children = j;
        }
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (o in D)
            i[o] === void 0 && (i[o] = D[o]);
        }
        if (v || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _r(i, W), l && rr(i, W);
        }
        return je(e, v, l, y, E, H.current, i);
      }
      function br(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Er(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), v = e.key, l = e.ref, y = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, O = H.current), _e(r) && (Oe(r.key), v = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? i[o] = j[o] : i[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          i.children = a;
        else if (A > 1) {
          for (var D = Array(A), W = 0; W < A; W++)
            D[W] = arguments[W + 2];
          i.children = D;
        }
        return je(e.type, v, l, y, E, O, i);
      }
      function ge(e) {
        return typeof e == "object" && e !== null && e.$$typeof === V;
      }
      var nr = ".", Rr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (v) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case V:
                case ne:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), O = o === "" ? nr + Ae(y, 0) : o;
          if (Fe(E)) {
            var j = "";
            O != null && (j = ye(O) + "/"), be(E, r, j, "", function(Mt) {
              return Mt;
            });
          } else
            E != null && (ge(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = br(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var A, D, W = 0, q = o === "" ? nr : o + Rr;
        if (Fe(e))
          for (var yr = 0; yr < e.length; yr++)
            A = e[yr], D = q + Ae(A, yr), W += be(A, r, a, D, i);
        else {
          var Lr = I(e);
          if (typeof Lr == "function") {
            var it = e;
            Lr === it.entries && (Me || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Lt = Lr.call(it), st, Nt = 0; !(st = Lt.next()).done; )
              A = st.value, D = q + Ae(A, Nt++), W += be(A, r, a, D, i);
          } else if (v === "object") {
            var ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function xe(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(v) {
          return r.call(a, v, i++);
        }), o;
      }
      function wr(e) {
        var r = 0;
        return xe(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        xe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Sr(e) {
        return xe(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!ge(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var v = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, ze = 0, qe = 1, Tr = 2;
      function Or(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = qe, l._result = v;
            }
          }, function(v) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = Tr, l._result = v;
            }
          }), e._status === De) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function Pr(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: Or
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function kr(e) {
        e != null && e.$$typeof === K ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === Q || e === Z || J || e === ae || e === Y || e === re || G || e === Ie || Ce || Ye || we || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === K || e.$$typeof === L || e.$$typeof === ee || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: K,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function x(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function F(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ce(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function vt() {
        var e = f();
        return e.useTransition();
      }
      function yt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function ht() {
        var e = f();
        return e.useId();
      }
      function mt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Ur, Yr, Br, zr, qr, Hr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function _t() {
        {
          if (He === 0) {
            Vr = console.log, Ur = console.info, Yr = console.warn, Br = console.error, zr = console.group, qr = console.groupCollapsed, Hr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function gt() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Vr
              }),
              info: h({}, e, {
                value: Ur
              }),
              warn: h({}, e, {
                value: Yr
              }),
              error: h({}, e, {
                value: Br
              }),
              group: h({}, e, {
                value: zr
              }),
              groupCollapsed: h({}, e, {
                value: qr
              }),
              groupEnd: h({}, e, {
                value: Hr
              })
            });
          }
          He < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var jr = B.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var xr = !1, fr;
      {
        var bt = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new bt();
      }
      function Kr(e, r) {
        if (!e || xr)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        xr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = jr.current, jr.current = null, _t();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (q) {
                o = q;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var y = q.stack.split(`
`), E = o.stack.split(`
`), O = y.length - 1, j = E.length - 1; O >= 1 && j >= 0 && y[O] !== E[j]; )
              j--;
            for (; O >= 1 && j >= 0; O--, j--)
              if (y[O] !== E[j]) {
                if (O !== 1 || j !== 1)
                  do
                    if (O--, j--, j < 0 || y[O] !== E[j]) {
                      var A = `
` + y[O].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, A), A;
                    }
                  while (O >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          xr = !1, jr.current = v, gt(), Error.prepareStackTrace = i;
        }
        var D = e ? e.displayName || e.name : "", W = D ? cr(D) : "";
        return typeof e == "function" && fr.set(e, W), W;
      }
      function Et(e, r, a) {
        return Kr(e, !1);
      }
      function Rt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, Rt(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case Y:
            return cr("Suspense");
          case re:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Et(e.render);
            case K:
              return lr(e.type, r, a);
            case fe: {
              var o = e, i = o._payload, v = o._init;
              try {
                return lr(v(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Xr = B.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Xr.setExtraStackFrame(a);
        } else
          Xr.setExtraStackFrame(null);
      }
      function Ct(e, r, a, o, i) {
        {
          var v = Function.call.bind(ke);
          for (var l in e)
            if (v(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                y = O;
              }
              y && !(y instanceof Error) && (dr(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), dr(null)), y instanceof Error && !(y.message in Jr) && (Jr[y.message] = !0, dr(i), p("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var Dr;
      Dr = !1;
      function Qr() {
        if (H.current) {
          var e = pe(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function St(e) {
        return e != null ? wt(e.__source) : "";
      }
      var Zr = {};
      function Tt(e) {
        var r = Qr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Tt(r);
          if (!Zr[a]) {
            Zr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), We(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function rt(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              ge(o) && et(o, r);
            }
          else if (ge(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = I(e);
            if (typeof i == "function" && i !== e.entries)
              for (var v = i.call(e), l; !(l = v.next()).done; )
                ge(l.value) && et(l.value, r);
          }
        }
      }
      function tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === K))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            Ct(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var i = pe(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ot(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function nt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = St(r);
          v ? i += v : i += Qr();
          var l;
          e === null ? l = "null" : Fe(e) ? l = "array" : e !== void 0 && e.$$typeof === V ? (l = "<" + (pe(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = gr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            rt(arguments[E], e);
        return e === Q ? Ot(y) : tt(y), y;
      }
      var at = !1;
      function Pt(e) {
        var r = nt.bind(null, e);
        return r.type = e, at || (at = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function kt(e, r, a) {
        for (var o = Er.apply(this, arguments), i = 2; i < arguments.length; i++)
          rt(arguments[i], o.type);
        return tt(o), o;
      }
      function jt(e, r) {
        var a = ie.transition;
        ie.transition = {};
        var o = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ot = !1, pr = null;
      function At(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = $ && $[r];
            pr = a.call($, "timers").setImmediate;
          } catch {
            pr = function(i) {
              ot === !1 && (ot = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = i, v.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ve = 0, ut = !1;
      function xt(e) {
        {
          var r = Ve;
          Ve++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var i = M.current;
              i !== null && (M.didScheduleLegacyUpdate = !1, $r(i));
            }
          } catch (D) {
            throw vr(r), D;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, l = !1, y = {
              then: function(D, W) {
                l = !0, v.then(function(q) {
                  vr(r), Ve === 0 ? Ir(q, D, W) : D(q);
                }, function(q) {
                  vr(r), W(q);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ut = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (vr(r), Ve === 0) {
              var O = M.current;
              O !== null && ($r(O), M.current = null);
              var j = {
                then: function(D, W) {
                  M.current === null ? (M.current = [], Ir(E, D, W)) : D(E);
                }
              };
              return j;
            } else {
              var A = {
                then: function(D, W) {
                  D(E);
                }
              };
              return A;
            }
          }
        }
      }
      function vr(e) {
        e !== Ve - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Ir(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              $r(o), At(function() {
                o.length === 0 ? (M.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var Fr = !1;
      function $r(e) {
        if (!Fr) {
          Fr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Fr = !1;
          }
        }
      }
      var Dt = nt, It = kt, Ft = Pt, $t = {
        map: xe,
        forEach: or,
        count: wr,
        toArray: Sr,
        only: ur
      };
      d.Children = $t, d.Component = g, d.Fragment = Q, d.Profiler = Z, d.PureComponent = U, d.StrictMode = ae, d.Suspense = Y, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, d.cloneElement = It, d.createContext = ir, d.createElement = Dt, d.createFactory = Ft, d.createRef = hr, d.forwardRef = kr, d.isValidElement = ge, d.lazy = Pr, d.memo = c, d.startTransition = jt, d.unstable_act = xt, d.useCallback = X, d.useContext = R, d.useDebugValue = ce, d.useDeferredValue = yt, d.useEffect = z, d.useId = ht, d.useImperativeHandle = sr, d.useInsertionEffect = x, d.useLayoutEffect = F, d.useMemo = Ee, d.useReducer = b, d.useRef = m, d.useState = S, d.useSyncExternalStore = mt, d.useTransition = vt, d.version = te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
process.env.NODE_ENV === "production" ? Mr.exports = Wt() : Mr.exports = Vt();
var Wr = Mr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Ut() {
  if (dt)
    return Ge;
  dt = 1;
  var $ = Wr, d = Symbol.for("react.element"), te = Symbol.for("react.fragment"), V = Object.prototype.hasOwnProperty, ne = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(Z, L, ee) {
    var N, Y = {}, re = null, K = null;
    ee !== void 0 && (re = "" + ee), L.key !== void 0 && (re = "" + L.key), L.ref !== void 0 && (K = L.ref);
    for (N in L)
      V.call(L, N) && !Q.hasOwnProperty(N) && (Y[N] = L[N]);
    if (Z && Z.defaultProps)
      for (N in L = Z.defaultProps, L)
        Y[N] === void 0 && (Y[N] = L[N]);
    return { $$typeof: d, type: Z, key: re, ref: K, props: Y, _owner: ne.current };
  }
  return Ge.Fragment = te, Ge.jsx = ae, Ge.jsxs = ae, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Yt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Wr, d = Symbol.for("react.element"), te = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), Z = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = fe && t[fe] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ue = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = ue.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ie = !1, M = !1, H = !1, le = !1, ve = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === V || t === Q || ve || t === ne || t === ee || t === N || le || t === K || ie || M || H || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === Y || t.$$typeof === ae || t.$$typeof === Z || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case V:
          return "Fragment";
        case te:
          return "Portal";
        case Q:
          return "Profiler";
        case ne:
          return "StrictMode";
        case ee:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var u = t;
            return we(u) + ".Consumer";
          case ae:
            var c = t;
            return we(c._context) + ".Provider";
          case L:
            return Ye(t, t.render, "ForwardRef");
          case Y:
            var f = t.displayName || null;
            return f !== null ? f : G(t.type) || "Memo";
          case re: {
            var R = t, S = R._payload, b = R._init;
            try {
              return G(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, B = 0, se, p, de, Se, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function g() {
      {
        if (B === 0) {
          se = console.log, p = console.info, de = console.warn, Se = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function P() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: se
            }),
            info: J({}, t, {
              value: p
            }),
            warn: J({}, t, {
              value: de
            }),
            error: J({}, t, {
              value: Se
            }),
            group: J({}, t, {
              value: n
            }),
            groupCollapsed: J({}, t, {
              value: s
            }),
            groupEnd: J({}, t, {
              value: h
            })
          });
        }
        B < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = ue.ReactCurrentDispatcher, T;
    function w(t, u, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            T = f && f[1] || "";
          }
        return `
` + T + t;
      }
    }
    var U = !1, me;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new hr();
    }
    function Xe(t, u) {
      if (!t || U)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      U = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, g();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ce) {
              f = ce;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ce) {
              f = ce;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            f = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && f && typeof ce.stack == "string") {
          for (var m = ce.stack.split(`
`), z = f.stack.split(`
`), x = m.length - 1, F = z.length - 1; x >= 1 && F >= 0 && m[x] !== z[F]; )
            F--;
          for (; x >= 1 && F >= 0; x--, F--)
            if (m[x] !== z[F]) {
              if (x !== 1 || F !== 1)
                do
                  if (x--, F--, F < 0 || m[x] !== z[F]) {
                    var X = `
` + m[x].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, X), X;
                  }
                while (x >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        U = !1, k.current = S, P(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", sr = Ee ? w(Ee) : "";
      return typeof t == "function" && me.set(t, sr), sr;
    }
    function Fe(t, u, c) {
      return Xe(t, !1);
    }
    function mr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function $e(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, mr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case ee:
          return w("Suspense");
        case N:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return Fe(t.render);
          case Y:
            return $e(t.type, u, c);
          case re: {
            var f = t, R = f._payload, S = f._init;
            try {
              return $e(S(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Oe = {}, Qe = ue.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function pe(t, u, c, f, R) {
      {
        var S = Function.call.bind(Te);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var z = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Pe(R), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Pe(R), I("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var ke = Array.isArray;
    function Le(t) {
      return ke(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ne(t);
    }
    var _e = ue.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, je;
    je = {};
    function gr(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function br(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Er(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var c = G(_e.current.type);
        je[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(_e.current.type), t.ref), je[c] = !0);
      }
    }
    function ge(t, u) {
      {
        var c = function() {
          rr || (rr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rr = function(t, u, c, f, R, S, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Cr(t, u, c, f, R) {
      {
        var S, b = {}, m = null, z = null;
        c !== void 0 && (Be(c), m = "" + c), br(u) && (Be(u.key), m = "" + u.key), gr(u) && (z = u.ref, Er(u, R));
        for (S in u)
          Te.call(u, S) && !_r.hasOwnProperty(S) && (b[S] = u[S]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (S in x)
            b[S] === void 0 && (b[S] = x[S]);
        }
        if (m || z) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ge(b, F), z && nr(b, F);
        }
        return Rr(t, m, z, R, f, _e.current, b);
      }
    }
    var Me = ue.ReactCurrentOwner, ar = ue.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function xe() {
      {
        if (Me.current) {
          var t = G(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function wr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Sr(t) {
      {
        var u = xe();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Sr(u);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + G(t._owner.type) + "."), ye(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && ur(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = oe(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              be(b.value) && ur(b.value, u);
        }
      }
    }
    function De(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === Y))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = G(u);
          pe(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = G(u);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, u, c, f, R, S) {
      {
        var b = Ce(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = wr(R);
          z ? m += z : m += xe();
          var x;
          t === null ? x = "null" : Le(t) ? x = "array" : t !== void 0 && t.$$typeof === d ? (x = "<" + (G(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var F = Cr(t, u, c, R, S);
        if (F == null)
          return F;
        if (b) {
          var X = u.children;
          if (X !== void 0)
            if (f)
              if (Le(X)) {
                for (var Ee = 0; Ee < X.length; Ee++)
                  ir(X[Ee], t);
                Object.freeze && Object.freeze(X);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(X, t);
        }
        return t === V ? ze(F) : De(F), F;
      }
    }
    function Tr(t, u, c) {
      return qe(t, u, c, !0);
    }
    function Or(t, u, c) {
      return qe(t, u, c, !1);
    }
    var Pr = Or, kr = Tr;
    Ke.Fragment = V, Ke.jsx = Pr, Ke.jsxs = kr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Nr.exports = Ut() : Nr.exports = Yt();
var Ue = Nr.exports;
const Bt = "_button_1f6pz_1", zt = {
  button: Bt
}, Gt = ($) => {
  const {
    children: d,
    onClick: te,
    id: V
  } = $;
  return /* @__PURE__ */ Ue.jsx(
    "button",
    {
      id: V,
      className: zt.button,
      onClick: te,
      children: d
    }
  );
}, Kt = ($) => {
  const { title: d, children: te } = $, [V, ne] = Wr.useState(!1), Q = () => {
    ne(!V);
  };
  return /* @__PURE__ */ Ue.jsxs("div", { className: "accordion", children: [
    /* @__PURE__ */ Ue.jsxs("div", { className: "accordion-title", children: [
      /* @__PURE__ */ Ue.jsx("h3", { children: d }),
      /* @__PURE__ */ Ue.jsx(
        "button",
        {
          onClick: () => Q(),
          children: V ? "Hide" : "Show"
        }
      )
    ] }),
    V && /* @__PURE__ */ Ue.jsx("div", { children: te })
  ] });
};
export {
  Kt as Accordion,
  Gt as Button,
  Ht as subtract,
  qt as sum
};
