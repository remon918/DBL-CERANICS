"use client";

import Image from "next/image";
import tile1 from "@/assets/tile1.jpg";
import tile2 from "@/assets/tile2.jpg";
import tile3 from "@/assets/tile3.jpg";
import tile4 from "@/assets/tile4.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const tiles = [
  { title: "Nano Crystal Polish", img: tile1, soldPerWeek: 455 },
  { title: "Glazed Porcelain", img: tile2, soldPerWeek: 679 },
  { title: "Glossy Wall", img: tile3, soldPerWeek: 947 },
  { title: "High Definition Relief", img: tile4, soldPerWeek: 856 },
  { title: "Nano Crystal Polish", img: tile1, soldPerWeek: 312 },
  { title: "Glazed Porcelain", img: tile2, soldPerWeek: 540 },
  { title: "Glossy Wall", img: tile3, soldPerWeek: 820 },
  { title: "High Definition Relief", img: tile4, soldPerWeek: 715 },
];

export default function Banner() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 tracking-wide">
        TOP SELLING TILES
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1700,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            360: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {tiles.map((tile, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div
                className="h-full bg-white p-3 rounded-md shadow-md 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-1 hover:shadow-lg hover:bg-cyan-50 
                flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-[155px] md:h-[190px] group flex-shrink-0">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={tile.img}
                      alt={tile.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-center mt-4 text-lg">
                      {tile.title}
                    </h3>

                    <div className="w-8 h-[2px] bg-green-400 mx-auto my-2"></div>
                  </div>

                  <p className="text-gray-500 text-center text-[14px] mt-auto">
                    {tile.soldPerWeek}
                    <span className="text-xs">/sold last week</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}