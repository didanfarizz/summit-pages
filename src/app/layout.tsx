'use client';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
});

// export const metadata = {
//   title: 'Summit Pages',
//   description: 'Summit Pages',
//   icons: {
//     icon: '/logo.png',
//   },
// };

const disableNavbar = ['/auth/login', '/auth/register', '/main', '/pages'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <title>Summit Pages</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <SessionProvider>
        <body>
          {pathname && !disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
