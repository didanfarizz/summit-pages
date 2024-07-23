// client/login.ts
'use client';

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

export const validateLogin = (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Password/Email anda salah' };
  }

  return { data: validatedFields.data };
};
