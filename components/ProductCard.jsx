import Link from "next/link";
import { StarFullIcon } from "../assets/Icons";

const ProductCard = ({ id, title, rating, imageUrl, brand, price }) => {
  return (
    <Link
      href={`/products/${id}`}
      className="product-card flex-1 flex-grow flex flex-col items-start justify-start gap-2 rounded-lg"
      style={{ flexBasis: 150 }}
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <img src={imageUrl} alt="" className="h-auto rounded-lg w-full" />
        <span className="absolute flex gap-1 backdrop-blur-md bg-opacity-75 text-slate-100 bg-gray-400 px-3 py-1 rounded-md bottom-2 left-2">
          <span>{rating}</span>
          <span>
            <StarFullIcon />
          </span>
        </span>
      </div>
      <div className="font-bold text-xl">{brand}</div>
      <div className="text-base ">
        {title.length > 45 ? title.slice(0, 45) + "..." : title}
      </div>
      <div className="font-medium text-lg">₹ {[price]}</div>
    </Link>
  );
};

export default ProductCard;
