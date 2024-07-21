import React from 'react';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

export default function Dashboard() {
  // const { data: session } = useSession;

  return (
    <div className="overflow-y-hidden">
      <div className="w-full flex justify-between items-center absolute py-32 px-20">
        <div className="">
          <div className="w-10/12 h-0.5 bg-white my-4"></div>
          <div className="">
            <p className="text-6xl text-white font-bold text-shadow">
              There&apos;s no friend <br /> as loyal as <br /> a book
            </p>
          </div>
          <div className="py-2">
            <p className="text-white text-lg">- Ernest Hermingway</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <p className="text-white font-bold text-2xl text-shadow-sm">About Summit Pages</p>
              <p className="text-white text-sm py-2 text-shadow-sm">
                Selamat Datang di Summit Pages! <br /> Rumah bagi Anda yang gemar Membaca dan Menjelajahi <br /> Dunia melalui Buku. Kami menyediakan Akses Tanpa Batas <br /> ke berbagai Genre, mulai dari Biografi hingga <br /> Pengembangan
                Diri yang dirancang untuk Kebutuhan Anda. <br /> Mari Eksplorasi dimanapun Anda berada. <br /> <br /> Summit Pages, The More You Read The More You Know!
              </p>
            </div>
            <div className="w-3/4 h-0.5 bg-white mt-5"></div>
          </div>
          <div className="py-3">
            <div className="">
              <p className="text-white font-bold text-2xl text-shadow-sm">What&apos;s on Summit Pages?</p>
              <p className="text-white text-sm py-2 text-shadow-sm">
                &quot;Summit Pages adalah platform perpustakaan yang <br /> membantu Anda menemukan buku yang sesuai dengan <br /> minat dan kebutuhan Anda. Cari, baca, dan nikmati!&quot;
              </p>
            </div>
            <div className="w-3/4 h-0.5 bg-white mt-5"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-[19px]">
        <Image src={'/buku.png'} alt="tumpukan buku" width={672} height={267} className="" />
      </div>
    </div>
  );
}
