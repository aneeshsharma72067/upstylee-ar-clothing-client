import Image from "next/image";
import React from "react";
import { Bitter, Playfair_Display } from "next/font/google";
import FeaturedProducts from "@/components/FeaturedProducts";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const bitter = Bitter({ subsets: ["latin"], weight: "500" });

const KidsFashionPage = () => {
  const featuredProductsForKids = [
    {
      id: "q1faonwufbn0091s3",
      name: "Boys Typography Printed Mid-Rise Cotton Shorts",
      brand: "A.T.U.N",
      price: "99",
      rating: "3.8",
      imageUrl: "/assets/images/kids-1.png",
      category: "Kids",
    },
    {
      id: "wadfec3en398fe63",
      name: "Boys 2-Pack Pull-On Shorts",
      brand: "H&M",
      price: "799",
      rating: "4.2",
      imageUrl: "/assets/images/kids-2.webp",
      category: "Kids",
    },
    {
      id: "19pnfna923lawedf",
      name: "Boys Cotton Chino Shorts",
      brand: "H&M",
      price: "799",
      rating: "4.7",
      imageUrl: "/assets/images/kids-3.webp",
      category: "Kids",
    },
    {
      id: "p0chb12dganev27nv",
      name: "Boys Mid-Rise Washed Denim Shorts",
      brand: "Gini and Jony",
      price: "740",
      rating: "4.6",
      imageUrl: "/assets/images/kids-4.webp",
      category: "Kids",
    },
    {
      id: "8mfeatfo2nofggbqp",
      name: "Boys Washed Denim Shorts",
      brand: "Zalio",
      price: "439",
      rating: "4.4",
      imageUrl: "/assets/images/kids-5.webp",
      category: "Kids",
    },
  ];
  return (
    <>
      <div className="text-slate-900 flex w-4/5 mx-auto my-10">
        <div className="flex-1">
          <div className="flex flex-col gap-10 my-6">
            <h1 className="text-7xl font-bold text-indigo-500">
              Kids Clothing
            </h1>
            <h2 className="text-5xl font-bold text-rose-300">
              Find the lasted collection
            </h2>
            <p className={`${bitter.className} text-slate-600`}>
              Within our virtual storefront, you'll find a vibrant array of
              kid-friendly brands, each dedicated to bringing comfort and style
              to children's wardrobes. Explore the playful designs of brands
              like Gymboree, the timeless classics of Ralph Lauren Kids, the
              whimsical creations of Cat & Jack, and much more. Our collection
              is designed to make dressing your little ones a joyous experience.
            </p>
          </div>
        </div>
        <div className="flex-1 items-center justify-start">
          <div className="relative flex items-center justify-center before:content-[''] before:bg-indigo-500 before:rounded-full before:w-3/5 before:aspect-square before:h-auto before:absolute before:top-20 before:left-[6.5rem] before:-z-10 before:shadow-[0_0_30px_var(--indigo)]">
            <Image
              src="/assets/images/kids-clothing.png"
              alt="Image Not Found"
              width={1000}
              height={1000}
              className="!w-[70%] !h-auto z-10"
            />
            <div className="w-10 h-10 rounded-full border-4 border-indigo-500 absolute top-20 left-20"></div>
            <div className="w-10 h-10 rounded-full bg-slate-200 absolute top-12 right-10"></div>
            <div className="w-10 h-10 rounded-full bg-indigo-600 absolute bottom-16 left-20"></div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedProducts productList={featuredProductsForKids} />
      </div>
    </>
  );
};

export default KidsFashionPage;
