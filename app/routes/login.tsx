import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { prisma } from "../utils/db.server";

import { useActionData, Form } from "@remix-run/react";
import { createUserSession, getUserId } from "../utils/session.server";
import { useState } from "react";
import { toast } from "react-toastify";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";

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
  const [open, setOpen] = useState(true);

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
    <div>
      <h1>{isRegistering ? "Register" : "Login"}</h1>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      <h1 className='text-3xl font-bold text-blue-500'>
        Welcome to Remix with Tailwind!
      </h1>
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
