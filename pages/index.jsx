import BannerDisplayCard from "@/components/BannerDisplayCard";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });

import Image from "next/image";
export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .link-container > a {
            color: red !important;
          }
        `}
      </style>
      <div className="flex text-slate-900">
        <div className="flex-1 flex justify-center py-5 pl-20">
          <div className="flex flex-col gap-10 items-start w-full py-10">
            <h1 className="text-5xl font-semibold leading-snug">
              Discover Fashion That Speaks Your Story
            </h1>
            <p>
              Welcome to Upstylee, where fashion meets innovation! Say goodbye
              to the traditional way of shopping for clothes and embrace the
              future with our cutting-edge Augmented Reality (AR) Try-On
              experience. At Upstylee, we're redefining the way you shop for
              clothing.
            </p>
            <button className="bg-indigo-600 text-white font-medium text-lg px-6 py-2 rounded-md duration-300 hover:bg-indigo-800">
              Discover More
            </button>
          </div>
        </div>
        <div className="banner-image relative flex-[0.7]">
          <Image
            src="/assets/images/banner.png"
            fill
            alt="image-not-found"
            className="!h-auto"
          />
        </div>

        <div className="flex-1 flex justify-end px-5 py-3 text-white">
          <div className="absolute h-screen w-1/2 right-0 bg-indigo-700 top-0 -z-10"></div>
          <div className="flex flex-col gap-8 items-center ">
            <div className="w-full flex items-center justify-start">
              <h1
                className={`text-[7rem] leading-tight w-1/2 ${cormorant.className}`}
              >
                New Fashion
              </h1>
            </div>
            <div className="">
              <BannerDisplayCard rating={4.5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
