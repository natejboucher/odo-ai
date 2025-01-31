var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = require("isbot"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.isbot)(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-36J4SAYT.css";

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set in your environment variables");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "remix_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getUserId(request) {
  return (await storage.getSession(request.headers.get("Cookie"))).get("userId") || null;
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function logout(request) {
  let session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], loader = async ({ request }) => !await getUserId(request) && new URL(request.url).pathname !== "/login" ? (0, import_react2.redirect)("/login") : null;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/join-campaign.tsx
var join_campaign_exports = {};
__export(join_campaign_exports, {
  default: () => JoinCampaign,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Join Campaign | ODO AI" },
  { name: "description", content: "Join an existing campaign" }
];
function JoinCampaign() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-2xl font-bold text-indigo-600", children: "ODO AI" }, void 0, !1, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react3.Link,
          {
            to: "/dashboard",
            className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
            children: "Dashboard"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 23,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react3.Link,
          {
            to: "/join-campaign",
            className: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
            children: "Join Campaign"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 29,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mt-6 text-3xl font-bold text-gray-900", children: "Join a Campaign" }, void 0, !1, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Enter the campaign code provided by your Dungeon Master" }, void 0, !1, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "label",
              {
                htmlFor: "campaign-code",
                className: "block text-sm font-medium text-gray-700",
                children: "Campaign Code"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 56,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                id: "campaign-code",
                name: "campaign-code",
                type: "text",
                required: !0,
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                placeholder: "Enter your campaign code"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 63,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "label",
              {
                htmlFor: "character-name",
                className: "block text-sm font-medium text-gray-700",
                children: "Character Name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 75,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                id: "character-name",
                name: "character-name",
                type: "text",
                required: !0,
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                placeholder: "Enter your character name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 82,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "label",
              {
                htmlFor: "character-sheet",
                className: "block text-sm font-medium text-gray-700",
                children: "Character Sheet URL (Optional)"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                id: "character-sheet",
                name: "character-sheet",
                type: "url",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                placeholder: "https://dndbeyond.com/characters/..."
              },
              void 0,
              !1,
              {
                fileName: "app/routes/join-campaign.tsx",
                lineNumber: 101,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: "Supports D&D Beyond character sheets" }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Join Campaign"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 115,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Or create your own" }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_react3.Link,
            {
              to: "/dashboard",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Create a New Campaign"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/join-campaign.tsx",
              lineNumber: 137,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/join-campaign.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/join-campaign.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join-campaign.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/join-campaign.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join-campaign.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  meta: () => meta2
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Dashboard | ODO AI" },
  { name: "description", content: "Campaign dashboard" }
];
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-2xl font-bold text-indigo-600", children: "ODO AI" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/dashboard",
              className: "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              children: "Dashboard"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 23,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react4.Link,
            {
              to: "/join-campaign",
              className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              children: "Join Campaign"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 29,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 22,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700", children: "New Campaign" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate", children: "Active Campaigns" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "The Lost Mines" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 63,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "DM: Chris Peterson" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 66,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Next Session: Friday, 7:00 PM" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 72,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: "Players: 4/6" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-gray-50 px-5 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "font-medium text-indigo-600 hover:text-indigo-500", children: "Enter Campaign" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-gray-50 overflow-hidden shadow rounded-lg border-2 border-dashed border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "-ml-1 mr-2 h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { fillRule: "evenodd", d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", clipRule: "evenodd" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          "New Campaign"
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 mb-4", children: "Recent Activity" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white shadow overflow-hidden sm:rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: [1, 2, 3].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "px-4 py-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-medium text-indigo-600 truncate", children: "New message in The Lost Mines" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 112,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: "2 min ago" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 116,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 115,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 111,
          columnNumber: 19
        }, this) }, item, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexPage
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function IndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Hello World" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", children: "Logout" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var action = async ({ request }) => logout(request), loader2 = async () => (0, import_node3.redirect)("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient()), prisma = global.__db;

// app/routes/login.tsx
var import_react6 = require("@remix-run/react");
var import_react7 = require("react"), import_react_toastify = require("react-toastify"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUserId(request) ? (0, import_node4.redirect)("/") : null;
async function handleCreateUser(userArgs) {
  let { userName, password, email } = userArgs;
  if (await prisma.user.findUnique({ where: { userName } }))
    return Response.json(
      { error: "Username already exists." },
      { status: 400 }
    );
  let hashedPassword = await import_bcryptjs.default.hash(password, 10), newUser = await prisma.user.create({
    data: { userName, password: hashedPassword, email }
    // Save email too
  });
  return createUserSession(newUser.id, "/");
}
async function handleLogin(userArgs) {
  let { userName, password } = userArgs, user = await prisma.user.findUnique({ where: { userName } });
  return !user || !await import_bcryptjs.default.compare(password, user.password) ? (import_react_toastify.toast.error("Invalid username or password!"), Response.json(
    { error: "All fields are required." },
    { status: 400 }
  )) : createUserSession(user.id, "/");
}
var action2 = async ({ request }) => {
  let formData = await request.formData(), actionType = formData.get("actionType"), userName = formData.get("userName")?.toString(), password = formData.get("password")?.toString(), email = formData.get("email")?.toString();
  if (!userName || !password) {
    import_react_toastify.toast.error("Missing Username or Password!");
    return;
  }
  return actionType === "register" && email ? handleCreateUser({ userName, password, email }) : actionType === "login" && userName && password ? handleLogin({ userName, password }) : Response.json({ error: "Invalid action." }, { status: 400 });
};
function LoginPage() {
  let actionData = (0, import_react6.useActionData)(), [isRegistering, setIsRegistering] = (0, import_react7.useState)(!1), [open, setOpen] = (0, import_react7.useState)(!0);
  return (
    // <Dialog open={open} onClose={setOpen} className='relative z-10'>
    //   <DialogBackdrop
    //     transition
    //     className='fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
    //   />
    //   <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
    //     <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
    //       <DialogPanel
    //         transition
    //         className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
    //       >
    //         <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
    //           <div className='sm:flex sm:items-start'>
    //             <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
    //               <DialogTitle
    //                 as='h3'
    //                 className='text-base font-semibold text-gray-900'
    //               >
    //                 Deactivate account
    //               </DialogTitle>
    //               <div className='mt-2'>
    //                 <p className='text-sm text-gray-500'>
    //                   Are you sure you want to deactivate your account? All of
    //                   your data will be permanently removed. This action cannot
    //                   be undone.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
    //           <button
    //             type='button'
    //             onClick={() => setOpen(false)}
    //             className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto'
    //           >
    //             Deactivate
    //           </button>
    //           <button
    //             type='button'
    //             data-autofocus
    //             onClick={() => setOpen(false)}
    //             className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
    //           >
    //             Cancel
    //           </button>
    //         </div>
    //       </DialogPanel>
    //     </div>
    //   </div>
    // </Dialog>
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: isRegistering ? "Register" : "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 151,
        columnNumber: 7
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "red" }, children: actionData.error }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 152,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-3xl font-bold text-blue-500", children: "Welcome to Remix with Tailwind!" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this),
      isRegistering ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "userName", placeholder: "Username", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 159,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", name: "actionType", value: "register", children: "Register" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => setIsRegistering(!1), children: "Log In" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "userName", placeholder: "Username", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", name: "actionType", value: "login", children: "Log In" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
          "Don\u2019t have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => setIsRegistering(!0), children: "Register" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 190,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 150,
      columnNumber: 5
    }, this)
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MLBFGVRK.js", imports: ["/build/_shared/chunk-X3PXDGUE.js", "/build/_shared/chunk-VDSBIO6G.js", "/build/_shared/chunk-5GTPY5QC.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PLT55Z5M.js", "/build/_shared/chunk-F4KNNEUR.js", "/build/_shared/chunk-2Z2JGDFU.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J5S5P7F7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-22PBKHSV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-YE3V24B7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/join-campaign": { id: "routes/join-campaign", parentId: "root", path: "join-campaign", index: void 0, caseSensitive: void 0, module: "/build/routes/join-campaign-4VHIIFLL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-HAYGPXJK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-5GTPI7EF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "45f1e4a3", hmr: { runtime: "/build/_shared/chunk-5GTPY5QC.js", timestamp: 1738367846771 }, url: "/build/manifest-45F1E4A3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/join-campaign": {
    id: "routes/join-campaign",
    parentId: "root",
    path: "join-campaign",
    index: void 0,
    caseSensitive: void 0,
    module: join_campaign_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
