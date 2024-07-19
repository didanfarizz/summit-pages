// 'use client';

// import * as z from 'zod';
// import { RegisterSchema } from '@/schemas';
// import bcrypt from 'bcryptjs';
// import { db } from '@/schemas/db';

// export const register = async (values: z.infer<typeof RegisterSchema>) => {
//   const validatedFields = RegisterSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return { error: 'Password/Email anda salah' };
//   }

//   const { username, email, password } = validatedFields.data;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const existingUser = await db.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (existingUser) {
//     return { error: 'Email yang anda gunakan sudah terdaftar' };
//   }

//   await db.user.create({
//     data: {
//       username,
//       email,
//       password: hashedPassword,
//     },
//   });

//   // TODO: Mengirimkan token verifikasi email

//   return { success: 'Berhasil Terdaftar' };
// };

'use client';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const response = await fetch('../api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const result = await response.json();

  if (!response.ok) {
    return { error: result.error };
  }

  return { success: result.success };
};
