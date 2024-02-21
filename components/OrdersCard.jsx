import Link from "next/link";
import { StarFullIcon } from "../assets/Icons";

const OrdersCard = () => {
  return (
    <Link
      href="/products/naifgch09e7gru3"
      className="flex gap-4 bg-indigo-200 px-4 py-3 rounded-md text-slate-800"
    >
      <div className="flex-[0.15]">
        <img
          src="/assets/images/mens-1.webp"
          alt="Image Not Found"
          className="rounded-md"
        />
      </div>
      <div className="flex-[0.85] text-sm font-medium flex flex-col gap-1">
        <p>Men Black Solid Brand Logo Puffer Jacket</p>
        <span className="text-lg text-zinc-700">₹ 2,999</span>
        <p className="flex gap-2 items-center ">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span className="text-slate-600 text-xs">
            Delivered on Aug 13, 2023
          </span>
        </p>
        <p className="flex gap-1 items-center text-blue-500 font-medium">
          <StarFullIcon color="#0072cf" size={17} />
          <span>Rate & Review Product</span>
        </p>
      </div>
    </Link>
  );
};

export default OrdersCard;
