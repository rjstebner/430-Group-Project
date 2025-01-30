'use server';

import { z } from 'zod';

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email format',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, { message: 'Password must have at least 6 characters' }),
});

export async function authenticate(state, formData) {
  const valdiationResult = loginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!valdiationResult.success) {
    return {
      errors: valdiationResult.error.flatten().fieldErrors,
    };
  }
}
