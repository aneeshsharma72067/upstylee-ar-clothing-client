import {
  BagIcon,
  HeartIcon,
  StarEmptyIcon,
  StarFullIcon,
  StarHalfIcon,
} from "@/assets/Icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const sizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  const productsList = [
    {
      id: "dnnv903ntgba820n",
      name: "Kurta for Men",
      brand: "H&M",
      price: "3699",
      rating: "4.1",
      imageUrl: "/assets/images/featured-product-1.png",
      category: "Men",
      discount: 79,
    },
    {
      id: "0vb4ai28b38gbn21",
      name: "Sapphire Blue Jacquard Kurta Set",
      brand: null,
      price: "2,999",
      rating: "4.3",
      imageUrl: "/assets/images/featured-product-2.png",
      category: "Men",
    },
    {
      id: "0n3gv93nab39321f",
      name: "VK EMBRODRY MENS KURTA ONLY",
      brand: null,
      price: "1,199",
      rating: "4.7",
      imageUrl: "/assets/images/featured-product-3.png",
      category: "Men",
    },
    {
      id: "2nc0n47gbp2ncmwrnp",
      name: "Anubhutee Women Mauve Ethnic Motifs Yoke Design Regular Mirror Work Kurta with Trousers",
      brand: "Anubhutee",
      price: "999",
      rating: "4.4",
      imageUrl: "/assets/images/featured-product-4.webp",
      category: "Women",
      discount: 24,
    },
    {
      id: "nxcn2o4y220vbnxqoffd",
      name: "Rudraaksha Women A-line Multicolor Dress",
      brand: "Rudraaksha",
      price: "379",
      rating: "4",
      imageUrl: "/assets/images/featured-product-5.jpeg",
      category: "Women",
    },
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
  const product = productsList.find((p) => p.id === router.query.id);
  const ratingFullStars = Array.from(
    { length: Math.floor(product.rating) },
    (_, index) => {
      return <StarFullIcon key={index} />;
    }
  );

  const ratingEmptyStars = Array.from(
    { length: 5 - Math.ceil(product.rating) },
    (_, index) => {
      return <StarEmptyIcon key={index} />;
    }
  );

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="text-slate-700 w-4/5 mx-auto my-10 flex flex-col gap-5">
      <div className="flex">
        <span>Home / Clothing & Apparels /</span>
        <span className="font-medium">
          {product.name.length > 20
            ? product.name.slice(0, 20) + "..."
            : product.name}
        </span>
      </div>
      <div className="w-full flex gap-10">
        <div className="flex-[0.4]">
          <div className="w-full flex items-center justify-end before:content-[''] relative before:absolute before:bg-indigo-300 before:w-4/5 before:h-full before:-bottom-5 before:left-14 before:rounded-xl before:-z-10">
            <Image
              src={product.imageUrl}
              width={800}
              height={800}
              className="!w-4/5 !h-auto rounded-lg"
              alt="Image Not Found"
            />
          </div>
        </div>
        <div className="flex-[0.6] flex flex-col gap-3">
          <div className="flex gap-4 items-center w-max">
            {product.brand ? (
              <span className="text-2xl font-medium">{product.brand}</span>
            ) : (
              <span className="text-2xl font-medium">
                {product.name.split(" ")[0]}
              </span>
            )}
            {product.category && (
              <span className="text-white bg-indigo-500 px-4 py-1 rounded-lg font-medium">
                {product.category}
              </span>
            )}
          </div>
          <div className="text-slate-600 font-normal text-xl ">
            {product.name}
          </div>
          <div className="flex gap-2 border border-slate-600 w-max items-center justify-center">
            <span className="py-2 px-4 text-2xl font-medium border-r border-slate-600">
              {product.rating}
            </span>
            <span className="flex gap-1 px-4">
              {ratingFullStars}
              {product.rating !== Math.floor(product.rating) && (
                <StarHalfIcon />
              )}
              {ratingEmptyStars}
            </span>
          </div>
          <hr className="my-5 border border-slate-400" />
          <div className="flex gap-6 items-end w-max ">
            <span className="font-medium text-4xl">
              ₹{" "}
              {product.discount
                ? Math.floor(
                    product.price - (product.discount * product.price) / 100
                  )
                : product.price}
            </span>
            {product.discount && (
              <span className="line-through decoration-red-500 decoration-2 text-2xl">
                MRP ₹ {product.price}
              </span>
            )}
            {product.discount && (
              <span className="text-red-500 text-2xl">
                ({product.discount}% OFF)
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl my-3 font-medium">SELECT SIZE</h2>
            <div className="flex gap-6 size-selector">
              {sizes.map((size) => {
                return (
                  <div
                    key={size + `_${Math.random()}`}
                    onClick={(e) => setSelectedSize(size)}
                    style={
                      selectedSize === size
                        ? { background: "#000030", color: "white" }
                        : {}
                    }
                  >
                    <span>{size}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-5 my-4">
            <button className="flex gap-3 font-bold text-white bg-indigo-500 items-center justify-center px-5 py-3 rounded-md duration-300 hover:bg-indigo-700">
              <BagIcon />
              <span>ADD TO BAG</span>
            </button>
            <button className="flex gap-3 font-bold text-blue-950 bg-white border-2 border-blue-950 items-center justify-center px-5 py-3 rounded-md btn-svg-stroke duration-300 hover:bg-blue-950 hover:text-white">
              <HeartIcon />
              <span>WISHLIST</span>
            </button>{" "}
            <button className="flex gap-3 font-bold duration-300 hover:bg-indigo-700 text-white bg-indigo-500 items-center justify-center px-5 py-3 rounded-md">
              <BagIcon />
              <span>TRY ON</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
