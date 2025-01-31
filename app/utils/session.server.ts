import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { prisma } from "../utils/db.server";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set in your environment variables");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "remix_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

// Get the user ID from the session
export async function getUserId(request: Request): Promise<string | null> {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return session.get("userId") || null;
}

// Require the user to be logged in, otherwise redirect to login
export async function requireUserId(request: Request): Promise<string> {
  const userId = await getUserId(request);
  if (!userId) {
    throw redirect("/login");
  }
  return userId;
}

// Log the user in by setting their ID in the session
export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

// Destroy the session on logout
export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
