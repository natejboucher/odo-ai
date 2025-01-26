import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { prisma } from "~/utils/db.server";

import { useActionData, Form } from "@remix-run/react";
import { createUserSession, getUserId } from "~/utils/session.server";
import { useState } from "react";
import { toast } from "react-toastify";

type ActionData = {
  error?: string;
};

type UserLogin = {
  userName: string;
  password: string;
};

type CreateUser = UserLogin & {
  email: string;
};

export const loader = async ({ request }: { request: Request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/"); // Redirect logged-in users to the home page
  }
  return null;
};

async function handleCreateUser(userArgs: CreateUser) {
  const { userName, password, email } = userArgs;
  const existingUser = await prisma.user.findUnique({ where: { userName } });
  if (existingUser) {
    return Response.json(
      { error: "Username already exists." },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { userName, password: hashedPassword, email }, // Save email too
  });

  return createUserSession(newUser.id, "/");
}

async function handleLogin(userArgs: UserLogin) {
  const { userName, password } = userArgs;
  const user = await prisma.user.findUnique({ where: { userName } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    toast.error("Invalid username or password!");
    return Response.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  return createUserSession(user.id, "/");
}

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  const userName = formData.get("userName")?.toString();
  const password = formData.get("password")?.toString();
  const email = formData.get("email")?.toString(); // Only used for registration

  if (!userName || !password) {
    toast.error("Missing Username or Password!");
    return;
  }

  if (actionType === "register" && email) {
    return handleCreateUser({ userName, password, email });
  }

  if (actionType === "login" && userName && password) {
    return handleLogin({ userName, password });
  }

  return Response.json({ error: "Invalid action." }, { status: 400 });
};

export default function LoginPage() {
  const actionData = useActionData<ActionData>();
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div>
      <h1>{isRegistering ? "Register" : "Login"}</h1>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}

      {isRegistering ? (
        <Form method='post'>
          <input type='text' name='userName' placeholder='Username' required />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <input type='email' name='email' placeholder='Email' required />
          <button type='submit' name='actionType' value='register'>
            Register
          </button>
          <p>
            Already have an account?{" "}
            <button type='button' onClick={() => setIsRegistering(false)}>
              Log In
            </button>
          </p>
        </Form>
      ) : (
        <Form method='post'>
          <input type='text' name='userName' placeholder='Username' required />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <button type='submit' name='actionType' value='login'>
            Log In
          </button>
          <p>
            Don’t have an account?{" "}
            <button type='button' onClick={() => setIsRegistering(true)}>
              Register
            </button>
          </p>
        </Form>
      )}
    </div>
  );
}
