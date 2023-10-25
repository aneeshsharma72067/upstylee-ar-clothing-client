import { useState } from "react";
import { Bitter } from "next/font/google";
import FeaturedProducts from "@/components/FeaturedProducts";
import Image from "next/image";

const bitter = Bitter({ subsets: ["latin"], weight: "500" });

const MensClothing = () => {
  const [discount, setDiscount] = useState(15);
  const featuredProductsForMen = [
    {
      id: "qf239n8bq0nnej9n3",
      name: "Women Wrap Orange Dress",
      brand: "Allen Solly ",
      price: "1,264",
      rating: "4.1",
      imageUrl: "/assets/images/womens-3.jpg",
    },
    {
      id: "90vner89fngbape63",
      name: "BIBA Women Printed Ethnic Maxi Skirt",
      brand: "BIBA",
      price: "1,799",
      rating: "4.3",
      imageUrl: "/assets/images/womens-4.jpg",
    },
    {
      id: "091u74bnabplmqaewu2",
      name: "BLUE HIGH RISE DISTRESSED SKINNY JEANS",
      brand: null,
      price: "1,199",
      rating: "4.7",
      imageUrl: "/assets/images/womens-2.webp",
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
      <div className="text-slate-800 relative w-[90%] px-5 mx-auto py-2 flex flex-row-reverse gap-4">
        <div className="absolute bg-indigo-500 top-10 -left-20 -z-10 w-screen h-60"></div>
        <div className="flex-[0.4] flex items-start justify-center">
          <Image
            src="/assets/images/womens-1.jpg"
            alt="image-not-found"
            width={800}
            height={800}
            className="rounded-xl !w-4/5 !h-auto"
            priority
          />
        </div>
        <div className="flex flex-[0.6] flex-col gap-10 py-10">
          <div className="flex flex-col gap-3 items-end">
            <h1 className="text-7xl text-right font-bold text-white">
              WOMENS LATEST FASHION
            </h1>
            <h3 className="text-5xl font-bold text-red-500">
              MIN {discount}% OFF{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-16">
            <div className="brand-image-container flex gap-1 items-center justify-between">
              <img src="/assets/images/levis.png" alt="" />
              <img src="/assets/images/prada.png" alt="" />
              <img src="/assets/images/nike.png" alt="" />
              <img src="/assets/images/gucci.png" alt="" />
              <img src="/assets/images/reebok.png" alt="" />
              <img src="/assets/images/puma.png" alt="" />
            </div>
            <div>
              <p className={`${bitter.className} text-slate-600  `}>
                Within our virtual boutique, you'll discover an array of
                prestigious brands that have redefined the world of women's
                fashion. From the timeless elegance of Chanel and the
                sophistication of Versace to the chic modernity of Prada and the
                innovation of Stella McCartney, our collection showcases an
                array of styles to suit every taste. Welcome to a shopping
                experience that fuses technology with style, bringing you closer
                to the future of fashion retail.
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
