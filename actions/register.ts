// actions/register.ts (client-side)
'use client';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Password/Email anda salah' };
  }

  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(validatedFields.data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { error: errorData.error };
  }

  const successData = await response.json();
  return { success: successData.success };
};
