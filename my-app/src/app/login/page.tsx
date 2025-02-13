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
    <div className="border border-[#4A4E69] rounded-md place-items-center size-96 p-5">
      <h2 className="text-2xl h-10">Sign-in to your account</h2>
      <form className="w-96 p-2 inline-block" action={formAction}>
        <div aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
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

        <label className="block mt-2" htmlFor="password">
          password
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="password"
          name="password"
          type="password"
          required
        />
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          className="block border bg-[#4A4E69] text-[#F2E9E4] p-1 rounded-md mt-6 mb-2 w-full hover:bg-[#F2E9E4] hover:text-[#4A4E69]"
          aria-disabled={isPending}
        >
          Login
        </button>
        <a href="/register" className="mt-2 text-center hover:underline">
          Doesn&#39;t Have an account?
        </a>
      </form>
    </div>
  );
}
