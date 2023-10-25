import ProductCard from "./ProductCard";

const FeaturedProducts = ({ productList }) => {
  return (
    <div className="text-slate-700 mx-20 flex flex-col gap-9 my-10 ">
      <div className="flex relative w-max flex-col after:absolute after:content-[''] after:w-32 after:h-2 after:rounded-lg after:bg-indigo-700 after:top-1/2 after:-right-1/2">
        <h1 className="text-4xl font-bold text-slate-800 w-max">
          Featured Products
        </h1>
      </div>
      <div className="flex w-full px-3 gap-10">
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.id}
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
  );
};

export default FeaturedProducts;
