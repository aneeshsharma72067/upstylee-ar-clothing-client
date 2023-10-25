import { useState } from "react";
import { Copse } from "next/font/google";
import FeaturedProducts from "@/components/FeaturedProducts";

const copse = Copse({ subsets: ["latin"], weight: "400" });

const MensClothing = () => {
  const [discount, setDiscount] = useState(10);
  const featuredProductsForMen = [
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
      id: "naifgch09e7gru3",
      name: "Men Black Solid Brand Logo Puffer Jacket",
      brand: "U.S. Polo Assn",
      price: "2,999",
      rating: "4.3",
      imageUrl: "/assets/images/mens-1.webp",
      category: "Men",
    },
    {
      id: "cnw3uifiu83vf0",
      name: "Jeans Induspolo Men’s Denim Jeans Balloon Fit Black",
      brand: "Denim",
      price: "999",
      rating: "4.5",
      imageUrl: "/assets/images/mens-2.webp",
      category: "Men",
    },
  ];
  return (
    <>
      <div className="text-slate-800 relative w-[90%] px-5 mx-auto py-2 flex gap-4">
        <div className="absolute bg-indigo-500 top-10 -left-20 -z-10 w-screen h-60"></div>
        <div className="flex-[0.4] flex items-start justify-center">
          <img
            src="/assets/images/featured-product-1.png"
            alt="image-not-found"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-[0.6] flex-col gap-10 py-10">
          <div className="flex flex-col gap-3 items-end">
            <h1 className="text-7xl text-right font-bold text-white">
              MENS LATEST FASHION
            </h1>
            <h3 className="text-5xl font-bold text-red-500">
              MIN {discount}% OFF{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-10">
            <div className="brand-image-container flex gap-1 items-center justify-between">
              <img src="/assets/images/levis.png" alt="" />
              <img src="/assets/images/prada.png" alt="" />
              <img src="/assets/images/nike.png" alt="" />
              <img src="/assets/images/gucci.png" alt="" />
              <img src="/assets/images/reebok.png" alt="" />
              <img src="/assets/images/puma.png" alt="" />
            </div>
            <div>
              <p className={`${copse.className} text-slate-500`}>
                We understand that the modern man seeks style, comfort, and
                quality, and that's why we've curated a collection of the most
                popular and coveted brands in the industry. Our mission is to
                bring you a shopping experience that transcends traditional
                boundaries and elevates your sense of style to a whole new
                dimension. Dive into our menswear collection, explore the finest
                in men's fashion, and redefine your style with the ease and
                convenience of our AR-based ecommerce site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedProducts productList={featuredProductsForMen} />
      </div>
    </>
  );
};

export default MensClothing;
