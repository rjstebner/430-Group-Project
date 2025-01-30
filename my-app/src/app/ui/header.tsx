'use client';

import HavenLogo from '@/app/ui/havenLogo';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="p-2 bg-[#4A4E69] items-center flex flex-row flex-justify h-20 justify-between">
        <Link href="/">
          <HavenLogo />
        </Link>
        {session ? (
          <div className="w-40 text-right">
            <span>Hello, {JSON.stringify(session.user?.name)}</span>
            <button
              onClick={() => signOut()}
              className="text-[#F2E9E4] hover:underline"
            >
              <UserIcon className="text-[#F2E9E4] size-3 inline me-1" />
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link href="/login" className="text-[#F2E9E4] hover:underline">
              <UserIcon className="text-[#F2E9E4] size-3 inline me-1" />
              Login
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
