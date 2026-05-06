"use client";
import Image from "next/image";
import tile1 from "@/assets/tile1.jpg";
import Link from "next/link";

const UpperBanner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] my-4">
      <Image
        src={tile1}
        alt="Tile Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        <Link href={"/alltiles"}>
          <button
            suppressHydrationWarning={true}
            className="bg-white text-gray-800 px-6 py-3 text-sm tracking-widest btn hover:bg-purple-500 hover:text-white transition"
          >
            Browse More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpperBanner;
