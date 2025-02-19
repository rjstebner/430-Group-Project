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

  const p = document.createElement("p");

  p.id = "formValidation";

  const formHandler = () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password1") as HTMLInputElement)
      .value;

    p.innerHTML = "All fields are required";
    p.className = "text-red-500";
    document.getElementsByTagName("form")[0].appendChild(p);

    if (password.length >= 6 && email.includes("@")) {
      (document.getElementById("submitBtn") as HTMLInputElement).disabled =
        false;
      document.getElementById("formValidation")?.remove();
    } else {
      (document.getElementById("submitBtn") as HTMLInputElement).disabled =
        true;
    }
  };

  return (
    <div className="p-2 border border-[#4A4E69] rounded-md flex flex-col w-xs">
      <h2 className="text-2xl h-10 text-center">Sign-in to your account</h2>
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
          onChange={() => formHandler()}
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
          onChange={() => formHandler()}
        />
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          className="block border bg-[#F2E9E4] text-[#4A4E69] p-1 rounded-md mt-6 mb-2 w-full enabled:hover:bg-[#4A4E69] enabled:hover:text-[#F2E9E4]"
          disabled
          aria-disabled={isPending}
        >
          Login
        </button>
        <a href="/register" className="block mt-6 hover:underline">
          Doesn&#39;t Have an account?
        </a>
      </form>
    </div>
  );
}
