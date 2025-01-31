var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
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
  loader: () => loader
});
import {
  Links,
  Meta,
  Outlet,
  redirect as redirect2,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set in your environment variables");
var storage = createCookieSessionStorage({
  cookie: {
    name: "remix_session",
    secure: !0,
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
  return session.set("userId", userId), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function logout(request) {
  let session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var loader = async ({ request }) => !await getUserId(request) && new URL(request.url).pathname !== "/login" ? redirect2("/login") : null;
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexPage
});
import { Form } from "@remix-run/react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function IndexPage() {
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx3("p", { children: "Hello World" }),
    /* @__PURE__ */ jsx3(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ jsx3("button", { type: "submit", children: "Logout" }) })
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
import { redirect as redirect3 } from "@remix-run/node";
var action = async ({ request }) => logout(request), loader2 = async () => redirect3("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader3
});
import { redirect as redirect4 } from "@remix-run/node";
import bcrypt from "bcryptjs";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var prisma;
prisma = new PrismaClient();

// app/routes/login.tsx
import { useActionData, Form as Form2 } from "@remix-run/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var loader3 = async ({ request }) => await getUserId(request) ? redirect4("/") : null;
async function handleCreateUser(userArgs) {
  let { userName, password, email } = userArgs;
  if (await prisma.user.findUnique({ where: { userName } }))
    return Response.json(
      { error: "Username already exists." },
      { status: 400 }
    );
  let hashedPassword = await bcrypt.hash(password, 10), newUser = await prisma.user.create({
    data: { userName, password: hashedPassword, email }
    // Save email too
  });
  return createUserSession(newUser.id, "/");
}
async function handleLogin(userArgs) {
  let { userName, password } = userArgs, user = await prisma.user.findUnique({ where: { userName } });
  return !user || !await bcrypt.compare(password, user.password) ? (toast.error("Invalid username or password!"), Response.json(
    { error: "All fields are required." },
    { status: 400 }
  )) : createUserSession(user.id, "/");
}
var action2 = async ({ request }) => {
  let formData = await request.formData(), actionType = formData.get("actionType"), userName = formData.get("userName")?.toString(), password = formData.get("password")?.toString(), email = formData.get("email")?.toString();
  if (!userName || !password) {
    toast.error("Missing Username or Password!");
    return;
  }
  return actionType === "register" && email ? handleCreateUser({ userName, password, email }) : actionType === "login" && userName && password ? handleLogin({ userName, password }) : Response.json({ error: "Invalid action." }, { status: 400 });
};
function LoginPage() {
  let actionData = useActionData(), [isRegistering, setIsRegistering] = useState(!1), [open, setOpen] = useState(!0);
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
    /* @__PURE__ */ jsxs3("div", { children: [
      /* @__PURE__ */ jsx4("h1", { children: isRegistering ? "Register" : "Login" }),
      actionData?.error && /* @__PURE__ */ jsx4("p", { style: { color: "red" }, children: actionData.error }),
      /* @__PURE__ */ jsx4("h1", { className: "text-3xl font-bold text-blue-500", children: "Welcome to Remix with Tailwind!" }),
      isRegistering ? /* @__PURE__ */ jsxs3(Form2, { method: "post", children: [
        /* @__PURE__ */ jsx4("input", { type: "text", name: "userName", placeholder: "Username", required: !0 }),
        /* @__PURE__ */ jsx4(
          "input",
          {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: !0
          }
        ),
        /* @__PURE__ */ jsx4("input", { type: "email", name: "email", placeholder: "Email", required: !0 }),
        /* @__PURE__ */ jsx4("button", { type: "submit", name: "actionType", value: "register", children: "Register" }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx4("button", { type: "button", onClick: () => setIsRegistering(!1), children: "Log In" })
        ] })
      ] }) : /* @__PURE__ */ jsxs3(Form2, { method: "post", children: [
        /* @__PURE__ */ jsx4("input", { type: "text", name: "userName", placeholder: "Username", required: !0 }),
        /* @__PURE__ */ jsx4(
          "input",
          {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: !0
          }
        ),
        /* @__PURE__ */ jsx4("button", { type: "submit", name: "actionType", value: "login", children: "Log In" }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Don\u2019t have an account?",
          " ",
          /* @__PURE__ */ jsx4("button", { type: "button", onClick: () => setIsRegistering(!0), children: "Register" })
        ] })
      ] })
    ] })
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ARWQEYKA.js", imports: ["/build/_shared/chunk-NVXVX3XK.js", "/build/_shared/chunk-2QEWK57A.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XR2DSEIS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Y3R3YLHK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ROCT76UU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-77BJZWXP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "7d019eed", hmr: void 0, url: "/build/manifest-7D019EED.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
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
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
