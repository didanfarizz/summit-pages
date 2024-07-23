import { signIn } from 'next-auth/react';
import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: 'Invalid input. Please check your email and password.' };
    }

    const { email, password } = validatedFields.data;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      if (result.error === 'Configuration') {
        console.error('NextAuth configuration error:', result.error);
        return { error: "There's an issue with the login system. Please contact support." };
      }
      return { error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
};
