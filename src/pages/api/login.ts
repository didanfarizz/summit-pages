// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import getServerSession from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';// Sesuaikan dengan path authOptions Anda
import { LoginSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '@/data/user'; // Sesuaikan dengan path Anda

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const validatedFields = LoginSchema.safeParse(req.body);

  if (!validatedFields.success) {
    return res.status(400).json({ error: 'Password/Email anda salah' });
  }

  const { email, password } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password ?? ''))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const session = await getServerSession({req, res});

  if (session) {
    return res.status(200).json({ message: 'Already logged in' });
  }

  // Buat sesi baru untuk pengguna
  // Implementasikan logika pembuatan sesi di sini jika diperlukan

  return res.status(200).json({ success: 'Berhasil Login' });
}
