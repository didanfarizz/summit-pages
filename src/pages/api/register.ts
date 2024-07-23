'use server';

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { RegisterSchema } from '@/schemas';

const prisma = new PrismaClient();

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const parsed = RegisterSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: 'Password/Email invalid' });
  }

  const { username, email, password } = parsed.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Email Telah Digunakan' });
    }

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ success: 'Berhasil Terdaftar' });
  } catch (error) {
    return res.status(500).json({ error: 'Terdapat Kesalahan' });
  }
}
