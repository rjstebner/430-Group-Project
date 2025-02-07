"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <div className="border border-[#4A4E69] rounded-md flex flex-col w-xs mt-5">
      <h2 className="text-2xl text-center">Create your account</h2>
      <form className="w-96 p-2 inline-block" action={formAction}>
        <label className="block mt-2" htmlFor="email">
          Email
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="email"
          name="email"
          type="email"
          required
        ></input>

        <label className="block mt-2" htmlFor="password">
          password
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="password"
          name="password"
          type="password"
          required
        />
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          className="block border rounded-md mt-6 mb-2 w-full"
          aria-disabled={isPending}
        >
          Login
        </button>
        <a href="/register" className="mt-2 text-center hover:underline">
          Doesn't Have an account?
        </a>
      </form>
    </div>
  );
}
