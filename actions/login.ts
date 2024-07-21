// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GoogleProvider from 'next-auth/providers/google';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || 'DEFAULT_VALUE',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'DEFAULT_SECRET_VALUE',
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       console.log('JWT Callback:', token);
//       return token;
//     },
//     async session({ session, token }) {
//       if (token.id) {
//         session.user.id = token.id as string;
//       }
//       console.log('Session Callback:', session);
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error',
//     verifyRequest: '/auth/verify-request',
//     newUser: '/auth/new-user',
//   },
//   secret: process.env.NEXTAUTH_SECRET || 'DEFAULT_SECRET',
// });
