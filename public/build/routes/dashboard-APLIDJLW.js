import {
  Link
} from "/build/_shared/chunk-JV7ZNS7M.js";
import {
  createHotContext
} from "/build/_shared/chunk-5GTPY5QC.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1738366806226.0808";
}
var meta = () => {
  return [{
    title: "Dashboard | ODO AI"
  }, {
    name: "description",
    content: "Campaign dashboard"
  }];
};
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-indigo-600", children: "ODO AI" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/join-campaign", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Join Campaign" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700", children: "New Campaign" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 50,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate", children: "Active Campaigns" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "The Lost Mines" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "DM: Chris Peterson" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 78,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Next Session: Friday, 7:00 PM" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: "Players: 4/6" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 px-5 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "font-medium text-indigo-600 hover:text-indigo-500", children: "Enter Campaign" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          "New Campaign"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 mb-4", children: "Recent Activity" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow overflow-hidden sm:rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: [1, 2, 3].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "px-4 py-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-indigo-600 truncate", children: "New message in The Lost Mines" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: "2 min ago" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 127,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 126,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 122,
          columnNumber: 19
        }, this) }, item, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 121,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard-APLIDJLW.js.map
