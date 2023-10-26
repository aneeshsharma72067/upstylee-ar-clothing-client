import ProductCard from "@/components/ProductCard";

const ShoppingPage = () => {
  const categories = [
    "T-shirt",
    "Shirts",
    "Sarees",
    "Jeans",
    "Kurta",
    "Trousers",
  ];
  const brands = ["H&M", "Highlander", "Flying Machine", "ADIDAS", "Levis"];
  const productsList = [
    {
      id: "dnnv903ntgba820n",
      name: "Kurta for Men",
      brand: "H&M",
      price: "799",
      rating: "4.1",
      imageUrl: "/assets/images/featured-product-1.png",
      category: "Men",
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
      <style jsx global>
        {`
          .product-card {
            flex-grow: 0;
          }
        `}
      </style>
      <div className="w-[90%] py-2 text-slate-700 mx-auto flex flex-col">
        <div>
          Home/{" "}
          <span className="text-slate-700 font-medium ">
            Clothing & Apparels
          </span>
        </div>
        <div className="flex my-6">
          <div className="flex-[0.2] flex flex-col items-start justify-start text-lg">
            <div className="flex gap-4 my-3 items-end justify-between w-full px-4">
              <h2 className="text-2xl font-medium text-zinc-700">FILTERS</h2>
              <button className="text-indigo-400 font-medium">CLEAR ALL</button>
            </div>
            <div className="w-full px-5 py-6 border border-gray-300">
              <ul className="category-container flex flex-col gap-2">
                <li>
                  <input type="radio" name="category" />
                  <span>Men</span>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <span>Women</span>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <span>Boys</span>
                </li>
                <li>
                  <input type="radio" name="category" />
                  <span>Girls</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 w-full px-5 py-6 border border-gray-300">
              <h2 className="font-medium">Categories</h2>
              <div>
                <ul className="flex flex-col gap-2 category-container ">
                  {categories.map((category, index) => {
                    return (
                      <li>
                        <input
                          type="checkbox"
                          key={index}
                          name={category}
                          className="bg-white"
                        />
                        <span>{category}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full px-5 py-6 border border-gray-300">
              <h2 className="font-medium">Brands</h2>
              <div>
                <ul className="category-container flex flex-col gap-2">
                  {brands.map((brand, index) => {
                    return (
                      <li>
                        <input
                          key={brand + Math.random()}
                          type="checkbox"
                          name={index}
                          className="bg-white"
                        />
                        <span>{brand}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-[0.8]">
            <div className="flex items-center justify-end">
              <div className="flex gap-2 items-center justify-center w-max">
                <label htmlFor="sort">Sort By</label>
                <select
                  name="sort_by"
                  id="sort_by"
                  className="bg-white px-3 py-1 border border-slate-700 outline-none"
                >
                  <option value="recommended">Recommended</option>
                  <option value="name-up">Name (A to Z)</option>
                  <option value="name-down">Name (Z to A)</option>
                  <option value="rating-up">Rating (Low to High)</option>
                  <option value="rating-down">Rating (High to Low)</option>
                  <option value="price-up">Price (Low to High)</option>
                  <option value="price-down">Price (High to Low)</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 px-6 py-10">
              {productsList.map((product) => {
                return (
                  <ProductCard
                    key={product.id + `${Math.random()}`}
                    id={product.id}
                    title={product.name}
                    imageUrl={product.imageUrl}
                    rating={product.rating}
                    brand={product.brand}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
