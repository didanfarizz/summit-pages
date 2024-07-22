import Image from 'next/image';
import React from 'react';
import convert from '@/app/db/convert.json';

export default function App() {
  return (
    <div className="">
      <div className="w-full bg-[#5c5c5c] px-10 overflow-hidden">
        <div className="flex gap-32">
          <div className="flex flex-col">
            <div className="py-14">
              <p className="text-[#d9d9d9] text-xl font-bold">Recent Books</p>
              <div className="flex py-2 gap-7">
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-[#d9d9d9] text-xl font-bold">Summit Pages Book Lists</p>
              <div className="grid grid-flow-col py-5 gap-7 overflow-x-auto">
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4 ">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4 ">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4 ">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
              </div>
              <div className="flex py-5 gap-7">
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
                <div className="w-60 h-72 bg-white rounded-[16px] p-4">
                  <div className="w-52 h-40 bg-black rounded-[16px] flex justify-center items-center">
                    <p className="text-white text-center">Image</p>
                  </div>
                  <div className="">
                    <p className="text-blue-500 text-lg font-bold">*book title</p>
                    <p className="text-black ">*book description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
