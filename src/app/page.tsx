import NavbarPage from '@/components/navbar';
import Image from 'next/image';
import Dashboard from '@/components/dashboard';
import React from 'react';
import { getSession } from '@auth0/nextjs-auth0';

export const metadata = {
    title: 'Summit Pages',
    description: 'Summit Pages',
    icons: {
      icon: '/logo.png',
    },
  };

export default async function Home() {
  const session = await getSession

  return (
    <main className="bg-[#353535] w-full py-[17.8px]">
      <section className="">
        <Dashboard />
      </section>
    </main>
  );
}

