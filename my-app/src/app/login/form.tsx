'use client';

import { signIn } from 'next-auth/react';
import { authenticate } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form() {
  const [state, action] = useActionState(authenticate, undefined);
  return (
    <form>
      <div className="p-2 border border-[#9A8C98] rounded-md w-xs">
        <div className="mt-2">
          <label htmlFor="email">Email</label>
          <input
            className="p-1 block rounded-md border border-[#9A8C98] text-black focus:border-black"
            type="email"
            id="email"
            name="email"
            required
          />
          {state?.errors?.email && (
            <div className="mt-2" text-red-600>
              {state.errors.email}
            </div>
          )}
        </div>
        <div className="mt-2 w-full">
          <label htmlFor="password">Password</label>
          <input
            className="p-1 block rounded-md border border-[#9A8C98] text-black focus:border-black"
            type="password"
            id="password"
            name="password"
            required
          />
          {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>
        <button onClick={() => signIn('google')}>Google Sign In</button>
      </div>
    </form>
  );
}
