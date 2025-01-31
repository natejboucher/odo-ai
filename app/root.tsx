import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

// import tailwindStyles from "~/tailwind.css?url";
import { getUserId } from "./utils/session.server";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: tailwindStyles },
// ];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserId(request);

  // If no session and NOT on the login page, redirect to login
  if (!userId && new URL(request.url).pathname !== "/login") {
    return redirect("/login");
  }

  return null; // Allow access if logged in or on the login page
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
