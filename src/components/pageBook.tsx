import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function pageBooks() {
  return (
    <div className="w-full h-screen bg-[#5C5C5C] p-16 flex justify-between">
      <div className="">
        <Link href={'/main'} className="w-32 h-12 bg-[#5c5c5c] flex justify-center items-center gap-3 border border-white rounded-full hover:bg-[#c0bbbb]">
          <Image src={'/back.png'} alt="back" width={30} height={30} className="w-6 h-5" />
          <p className="text-2xl text-white font-bold">Back</p>
        </Link>
        <div className="w-full h-0.5 bg-white my-5"></div>
        <div className="px-14">
          <div className="text-white">
            <p className="text-5xl font-bold">Judul Buku</p>
            <p className="py-7 text-xl font-semibold">Penulis</p>
            <div className="pt-6">
              <p>Number of books available:</p>
              <p>Jumlah total buku</p>
            </div>
          </div>
          <div className="flex gap-4 py-7">
            <div className="w-56 h-12 text-white text-lg font-bold bg-[#00B21C] flex justify-center items-center rounded-lg">Borrow Now!</div>
            <div className="w-56 h-12 text-white text-lg font-bold bg-[#558ED5] flex justify-center items-center rounded-lg">Add to Favourite</div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-white my-5"></div>
        <div className="text-white px-14">
          <p className="text-2xl font-bold">Synopsis</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui eum distinctio pariatur <br /> ad iste libero facere dolorem amet, voluptates magnam similique tenetur? Laboriosam nihil placeat <br /> magni libero, quisquam
            aliquid.
          </p>
        </div>
      </div>
      <div className="w-72 h-96 bg-black flex justify-center items-center mt-14">
        <p className="text-white py-auto text-center font-semibold text-xl">Cover Book</p>
      </div>
    </div>
  );
}
