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

  const p = document.createElement("p");

  p.id = "formValidation";

  const formHandler = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const pwd1 = (document.getElementById("password1") as HTMLInputElement)
      .value;
    const pwd2 = (document.getElementById("password2") as HTMLInputElement)
      .value;

    p.innerHTML =
      "All fields are required, and password must have 6 characters";
    p.className = "text-red-500";
    document.getElementsByTagName("form")[0].appendChild(p);

    if (
      pwd1 == pwd2 &&
      pwd1.length > 5 &&
      name.length >= 3 &&
      email.includes("@")
    ) {
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
          Name<span className="text-red-500">*</span>
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="name"
          name="name"
          type="text"
          required
          onChange={formHandler}
        ></input>
        <label className="block mt-2" htmlFor="email">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="email"
          name="email"
          type="email"
          required
          onChange={formHandler}
        ></input>

        <label className="block mt-2" htmlFor="password1">
          password<span className="text-red-500">*</span>
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="password1"
          name="password1"
          type="password"
          required
          onChange={formHandler}
        ></input>
        <label className="block mt-2" htmlFor="password2">
          confirm Password<span className="text-red-500">*</span>
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          id="password2"
          name="password2"
          type="password"
          required
          onChange={formHandler}
        ></input>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          className="block border bg-[#F2E9E4] text-[#4A4E69] p-1 rounded-md mt-6 mb-2 w-full enabled:hover:bg-[#4A4E69] enabled:hover:text-[#F2E9E4]"
          disabled
          id="submitBtn"
          aria-disabled={isPending}
        >
          Create Your Account
        </button>
      </form>
    </div>
  );
}
