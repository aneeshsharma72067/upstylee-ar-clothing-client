import BannerDisplayCard from "@/components/BannerDisplayCard";
import CategoryCard from "@/components/CategoryCard";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });

import Image from "next/image";
export default function Home() {
  const featuredProducts = [
    {
      id: "sodfhohbnh938bqv9",
      name: "Kurta for Men",
      brand: "H&M",
      price: "799",
      rating: "4.1",
      imageUrl: "/assets/images/featured-product-1.png",
    },
    {
      id: "iobf78qvd3198fh9",
      name: "Sapphire Blue Jacquard Kurta Set",
      brand: null,
      price: "2,999",
      rating: "4.3",
      imageUrl: "/assets/images/featured-product-2.png",
    },
    {
      id: "0n3gv93nab39321f",
      name: "VK EMBRODRY MENS KURTA ONLY",
      brand: null,
      price: "1,199",
      rating: "4.7",
      imageUrl: "/assets/images/featured-product-3.png",
    },
    {
      id: "pl10cuem6bz0m1827nv",
      name: "Anubhutee Women Mauve Ethnic Motifs Yoke Design Regular Mirror Work Kurta with Trousers",
      brand: "Anubhutee",
      price: "999",
      rating: "4.4",
      imageUrl: "/assets/images/featured-product-4.webp",
    },
    {
      id: "8mxla00oc4nzuuuqbqp",
      name: "Rudraaksha Women A-line Multicolor Dress",
      brand: "Rudraaksha",
      price: "379",
      rating: "4",
      imageUrl: "/assets/images/featured-product-5.jpeg",
    },
  ];
  return (
    <>
      <style jsx global>
        {`
          .link-container::before {
            background: #fff;
          }
          .link-container::after {
            background: #fff;
          }
          .link-container svg {
            stroke: #fff;
          }
          .link-container > a {
            color: #fff !important;
          }
          .link-container > button {
            color: #fff !important;
          }
        `}
      </style>
      <div className="flex flex-col gap-20">
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
          <div className="banner-image relative  flex-[0.7]">
            <Image
              src="/assets/images/banner.png"
              fill
              alt="image-not-found"
              className="!h-auto"
              priority
            />
          </div>

          <div className="flex-1 flex justify-end px-5 py-3 text-white">
            <div className="absolute h-screen w-1/2 right-0 bg-indigo-700 top-0 -z-10"></div>
            <div className="flex flex-col gap-2 items-center ">
              <div className="w-full flex items-center justify-start">
                <h1
                  className={`text-[7rem] leading-tight w-1/2 ${cormorant.className}`}
                >
                  New Fashion
                </h1>
              </div>
              <div className="flex w-full flex-col gap-1">
                <div className="w-full flex items-center justify-start">
                  <BannerDisplayCard
                    rating={4.5}
                    imageUrl={"/assets/images/card-image-2.jpeg"}
                    description="Top Gun Maverick Movie Shirt for Men"
                  />
                </div>
                <div className="w-full flex items-center justify-end">
                  <BannerDisplayCard
                    rating={4}
                    imageUrl={"/assets/images/card-image-1.jpg"}
                    description="JDY by ONLY Women Dress with V-Neck and flower print white orange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-700 mx-20 flex flex-col gap-9 my-10">
          <div className="flex relative w-max flex-col after:absolute after:content-[''] after:w-32 after:h-2 after:rounded-lg after:bg-indigo-700 after:top-1/2 after:-right-1/2">
            <h1 className="text-4xl font-bold text-slate-800 w-max">
              Shop by Category
            </h1>
          </div>
          <div className="flex w-full px-3 gap-10">
            <CategoryCard
              title="Mens Clothing"
              imageUrl="/assets/images/mens-fashion.png"
              color="orange"
              href="/mens-clothing"
            />
            <CategoryCard
              title="Womens Clothing"
              imageUrl="/assets/images/womens-fashion.png"
              color="indigo"
              href="/womens-clothing"
            />
            <CategoryCard
              title="Kids Clothing"
              imageUrl={"/assets/images/kids-fashion.png"}
              color="red"
              href="/kids-clothing"
            />
          </div>
        </div>
        <FeaturedProducts productList={featuredProducts} />
      </div>
    </>
  );
}
