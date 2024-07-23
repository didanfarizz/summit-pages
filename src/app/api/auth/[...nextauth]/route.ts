// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Partial<Record<"email" | "password", unknown>>, request: Request) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        });
      
        if (user && user.password && await compare(credentials.password as string, user.password)) {
            return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOptions);
