import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LoginButton } from './auth/login-button';

export default function Navbar() {
  return (
    <nav className="w-full h-28 bg-[#558ED5] flex justify-between items-center px-20 top-0 sticky z-20">
      <Link href={'/'} className="">
        <Image src={'/logo-summit.png'} alt="logo summit" width={150} height={80} />
      </Link>
      <div className="flex gap-4">
        <LoginButton>
          <div className="text-white font-semibold text-2xl flex justify-center items-center hover:text-[#9fc0e9]">
            <p>Sign In</p>
          </div>
        </LoginButton>
        {/* <Link href={'/auth/signup'} className="w-32 h-10 flex justify-center items-center bg-white rounded-full text-[#558ED5] text-2xl font-semibold hover:text-white hover:bg-[#9fc0e9]">
          <p>Sign Up</p>
        </Link> */}
      </div>
    </nav>
  );
}
