import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT, publicRoutes } from './routes';
import NextAuth from 'next-auth';
import authOptions from './auth.config';

const {auth} = NextAuth(authOptions)

interface MyRequest {
    [x: string]: string | URL | undefined;
    auth: any
    nextUrl: any
}

export async function middleware(req: MyRequest) {
//   const token = await getToken({
//     req,
//     salt: '',
//     secret: '',
//   });
//   const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

//   const isApiAuthRoutes = nextUrl.pathname.startsWith(prefix => nextUrl.pathname.startsWith(prefix))
const isApiAuthRoutes = apiAuthPrefix.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoutes) {
    return NextResponse.next();
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
