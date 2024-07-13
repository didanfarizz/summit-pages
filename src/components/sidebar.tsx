import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function sidebarProfile() {
  return (
    <div className="">
      <aside className="bg-[#353535] h-screen w-84 top-0 sticky z-10">
        <div className="pt-16">
          <Link href={'/'} className="flex justify-center items-center">
            <Image src={'/logo-summit.png'} alt="logo summit" width={150} height={80} />
          </Link>
          <div className="flex gap-1 pt-10 px-5">
            <input type="text" placeholder="Search" className="w-52 h-10 bg-[#d9d9d9] px-5 rounded-l-full" />
            <button className="bg-[#d9d9d9] w-12 px-3 rounded-r-full">
              <Image src={'/search.png'} alt="search icon" width={20} height={20} className="" />
            </button>
          </div>
        </div>
        <div className="py-12 flex justify-center items-center">
          <div className="w-52 h-96 bg-[#8b8b8b] rounded-[50px]">
            <div className="w-52 h-72 bg-[#d9d9d9] rounded-[50px]">
              <div className="flex flex-col justify-center py-6 px-9">
                <Image src={'/profile.png'} alt="profile" width={150} height={150} />
                <div className="text-sm py-5">
                  <p className="">Hello,</p>
                  <p className="font-bold text-xl">*Your Name</p>
                  <p>Status: Visitor</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-3">
                <div className="flex gap-1">
                  <Image src="/history.png" alt="history" width={25} height={25} />
                  <p className="font-bold text-white">History</p>
                </div>
                <div className="flex gap-1 py-3">
                  <Image src="/collection.png" alt="collection" width={25} height={25} />
                  <p className="font-bold text-white">Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-10">
          <Link href='/' className="bg-[#c21c1c] w-32 h-12 flex justify-center items-center gap-1 rounded-[15px] hover:bg-[#9E1111]">
            <Image src={'/logout.png'} alt="logout icon" width={30} height={30} />
            <p className="text-center font-semibold text-white text-lg">Log Out</p>
          </Link>
        </div>
      </aside>
    </div>
  );
}
