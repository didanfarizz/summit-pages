import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className="">
      <footer className="w-full bg-black">
        <div className="flex justify-between items-center px-16 py-16">
          <Image src={'/logo-summit.png'} alt="logo summit" width={200} height={200} />
          <div className="text-white text-end">
            <p className="font-bold text-3xl pb-3">
              The More You Read, <br /> The More You Know.
            </p>
            <small className="">&copy;June {new Date().getFullYear()} Check Point Group 1 Technology Ltd. All rights reserved</small>
            <p className='text-sm pt-3'>
              Ali Reza Bahtiar | Didan Fariz Abqari | Muhammad Ilham Rizalul Fath <br />
              Salma Amanda Kharisma | Yudha Ari Prasetyo
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <p className='text-white font-bold text-lg'>Made with 💛 by Group 1</p>
        </div>
      </footer>
    </div>
  );
}
