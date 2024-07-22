'use client';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { createUser } from '@/data/crateUser';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Password/Email anda salah' };
  }

  const { username, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email yang anda gunakan sudah terdaftar' };
  }

  await createUser(email, username, hashedPassword);

  // TODO: Mengirimkan token verifikasi email

  return { success: 'Berhasil Terdaftar' };
};