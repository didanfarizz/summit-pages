import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { RegisterSchema } from '@/schemas';

const prisma = new PrismaClient();

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const validatedFields = RegisterSchema.safeParse(req.body);

  if (!validatedFields.success) {
    return res.status(400).json({ error: 'Password/Email invalid' });
  }

  const { username, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return res.status(201).json({ success: 'User registered successfully' });
}
