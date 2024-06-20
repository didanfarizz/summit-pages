import NavbarPage from '@/components/navbar';
import Image from 'next/image';
import Dashboard from '@/components/dashboard';
import React from 'react';

export const metadata = {
    title: 'Summit Pages',
    description: 'Summit Pages',
    icons: {
      icon: '/logo.png',
    },
  };

export default function Home() {
  return (
    <main className="bg-[#353535] w-full py-4">
      <section className="">
        <Dashboard />
      </section>
    </main>
  );
}

