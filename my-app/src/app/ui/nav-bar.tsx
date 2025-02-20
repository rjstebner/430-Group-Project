import Link from 'next/link';
// import { useState } from "react";
import HavenLogo from '@/app/ui/havenLogo';
import { UserIcon } from '@heroicons/react/24/solid';
import { auth, signOut } from '../../../auth';

// interface NavBarProps {
// }

function EndSession() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="hover:underline">
        Sign out
      </button>
    </form>
  );
}

export default async function NavBar() {
  const session = await auth();
  return (
    <div className="border-b-2 border-[#4A4E69]">
      <nav className="p-2  items-center w-full flex h-20 justify-around bb">
        <HavenLogo />
        <div>
          <Link href="/">Catalog</Link>
        </div>
        <div>
          <Link href="/admin">Admin</Link>
        </div>
        <div>
          <Link href="/contact">Contact Us</Link>
        </div>
        {session ? (
          <div className="w-40 text-right">
            <span className="hover:underline">
              Hello, {JSON.stringify(session.user?.name)}
            </span>
            <EndSession />
          </div>
        ) : (
          <div>
            <a href="/login" className="hover:underline">
              <UserIcon className="size-3 inline me-1" />
              Login
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
