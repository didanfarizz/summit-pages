'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function signUp() {
  return (
    <div className="w-full h-screen bg-[#558ED5]">
      <div className="flex justify-center items-center py-7">
        <div className="w-1/2 bg-[#353535] rounded-3xl">
          <Link href={'/'} className="flex justify-center items-center py-16">
            <Image src={'/logo-summit.png'} alt="logo-summit" width={200} height={100} />
          </Link>
          <div className="">
            <form action="#" method="post" className="flex flex-col justify-center items-center">
              <input type="text" id="fullname" name="fullname" placeholder="Fullname" className="bg-[#d9d9d9] w-9/12 h-16 px-5 rounded-2xl" />
              <input type="text" id="username" name="username" placeholder="Username" className="bg-[#d9d9d9] w-9/12 h-16 px-5 rounded-2xl my-3" />
              <input type="email" id="email" name="email" placeholder="Email" className="bg-[#d9d9d9] w-9/12 h-16 px-5 rounded-2xl" />
              <div className="flex justify-center items-center gap-9">
                <input type="password" id="password" name="password" placeholder="Password" className="bg-[#d9d9d9] w-1/2 h-16 px-5 rounded-2xl my-3" />
                <input type="password" id="password" name="confpass" placeholder="Confirm Password" className="bg-[#d9d9d9] w-1/2 h-16 px-5 rounded-2xl my-3" />
              </div>
              <input type="text" id="phone" name="phone" placeholder="Phone Number" className="bg-[#d9d9d9] w-9/12 h-16 px-5 rounded-2xl" />

              <Link href={'/main'} className="w-64 h-12 bg-[#558ED5] my-4 text-white text-2xl font-bold rounded-[15px] flex justify-center items-center hover:bg-[#9fc0e9] hover:text-black">
                <p>Sign Up</p>
              </Link>
            </form>
            <div className="flex justify-center items-center opacity-60">
              <div className="bg-white w-1/3 h-0.5"></div>
              <p className="text-white px-8">OR</p>
              <div className="bg-white w-1/3 h-0.5"></div>
            </div>
            <Link href={'/auth/login'} className="text-white font-bold text-xl flex justify-center items-center py-7 hover:text-gray-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
