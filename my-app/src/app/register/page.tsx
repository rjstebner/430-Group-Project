"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { createUser } from "@/app/lib/actions";

export default function Register() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    createUser,
    undefined
  );
  return (
    <div className="p-2 border border-[#4A4E69] rounded-md flex flex-col w-xs">
      <h2 className="text-2xl text-center">Create your account</h2>
      <form className="w-96 p-2 inline-block" action={formAction}>
        <div aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <label className="block mt-2" htmlFor="name">
          Name
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="name"
          name="name"
          type="text"
          required
        ></input>
        <label className="block mt-2" htmlFor="email">
          Email
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="email"
          name="email"
          type="email"
          required
        ></input>

        <label className="block mt-2" htmlFor="password1">
          password
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="password1"
          name="password1"
          type="password"
          required
        ></input>
        <label className="block mt-2" htmlFor="password2">
          confirm Password
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="password2"
          name="password2"
          type="password"
          required
        ></input>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          className="block border bg-[#4A4E69] text-[#F2E9E4] p-1 rounded-md mt-6 mb-2 w-full hover:bg-[#F2E9E4] hover:text-[#4A4E69]"
          aria-disabled={isPending}
        >
          Create Your Account
        </button>
      </form>
    </div>
  );
}
