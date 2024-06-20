import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLogin() {
  return (
    <div className="overflow-x-hidden">
      <div className=""></div>
      <nav className="w-full h-28 bg-[#558ED5] flex justify-between items-center top-0 sticky z-10 px-16">
        <Link href={'/'} className="">
          <Image src={'/logo-summit.png'} alt="logo summit" width={150} height={80} />
        </Link>
        {/* <div class="flex gap-1">
          <input type="text" placeholder="Search" className="w-72 h-10 bg-[#d9d9d9] px-5 rounded-l-full" />
          <button className="bg-[#d9d9d9] w-12 px-3 rounded-r-full">
            <Image src={'/search.png'} alt="search icon" width={20} height={20} className="" />
          </button>
        </div> */}
      </nav>
    </div>
  );
}
