"use server";
import { auth } from "../../../auth";
import { UserIcon } from "@heroicons/react/24/solid";

export default async function LoginSection() {
  const session = await auth();
  return (
    <>
      {session ? (
        <div className="w-40 text-right">
          <span>Hello, {JSON.stringify(session.user?.name)}</span>
          <button className="text-[#F2E9E4] hover:underline">
            <UserIcon className="text-[#F2E9E4] size-3 inline me-1" />
            Logout
          </button>
        </div>
      ) : (
        <div>
          <a href="/login" className="text-[#F2E9E4] hover:underline">
            <UserIcon className="text-[#F2E9E4] size-3 inline me-1" />
            Login
          </a>
        </div>
      )}
    </>
  );
}
