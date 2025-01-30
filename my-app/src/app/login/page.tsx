import { Metadata } from 'next';
import { Suspense } from 'react';
import Form from '@/app/login/form';

export const metadata: Metadata = { title: 'Login' };

export default function LoginPage() {
  return (
    <div className="mt-20">
      <Suspense>
        <Form />
      </Suspense>
    </div>
  );
}
