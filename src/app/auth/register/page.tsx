import Register from '@/components/register';
import React from 'react';

export const metadata = {
  title: 'Summit Pages',
  description: 'Summit Pages',
  icons: {
    icon: '/logo.png',
  },
};

export default function signUpPage() {
  return (
    <div className="w-full">
      <Register />
    </div>
  );
}
