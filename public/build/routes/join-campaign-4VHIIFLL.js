import {
  Link
} from "/build/_shared/chunk-VDSBIO6G.js";
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

// app/routes/join-campaign.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/join-campaign.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/join-campaign.tsx"
  );
  import.meta.hot.lastModified = "1738366828490.7593";
}
var meta = () => {
  return [{
    title: "Join Campaign | ODO AI"
  }, {
    name: "description",
    content: "Join an existing campaign"
  }];
};
function JoinCampaign() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-indigo-600", children: "ODO AI" }, void 0, false, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/join-campaign", className: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Join Campaign" }, void 0, false, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-3xl font-bold text-gray-900", children: "Join a Campaign" }, void 0, false, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Enter the campaign code provided by your Dungeon Master" }, void 0, false, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "campaign-code", className: "block text-sm font-medium text-gray-700", children: "Campaign Code" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "campaign-code", name: "campaign-code", type: "text", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "Enter your campaign code" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "character-name", className: "block text-sm font-medium text-gray-700", children: "Character Name" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "character-name", name: "character-name", type: "text", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "Enter your character name" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "character-sheet", className: "block text-sm font-medium text-gray-700", children: "Character Sheet URL (Optional)" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 86,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "character-sheet", name: "character-sheet", type: "url", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "https://dndbeyond.com/characters/..." }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: "Supports D&D Beyond character sheets" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Join Campaign" }, void 0, false, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Or create your own" }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Create a New Campaign" }, void 0, false, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/join-campaign.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = JoinCampaign;
var _c;
$RefreshReg$(_c, "JoinCampaign");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  JoinCampaign as default,
  meta
};
//# sourceMappingURL=/build/routes/join-campaign-4VHIIFLL.js.map
