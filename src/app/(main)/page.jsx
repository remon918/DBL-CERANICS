import AboutUs from "@/components/shared/AboutUs";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import HomeTilesCards from "@/components/shared/HomeTilesCards";
import Offers from "@/components/shared/Offers";
import PopularSection from "@/components/shared/PopularSection";
import UpperBanner from "@/components/shared/UpperBanner";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div>
      <Offers />
      <UpperBanner />
      <Banner />
      <HomeTilesCards />
      <Link href={"/alltiles"} className="flex justify-center mt-2 mb-9">
        <button className="bg-gray-100 px-5 md:px-9 hover:bg-blue-400 hover:text-white btn">Browse More Tiles <FaArrowRight/> </button>
      </Link>
      <PopularSection />
      <AboutUs />
      <Footer />
    </div>
  );
}
