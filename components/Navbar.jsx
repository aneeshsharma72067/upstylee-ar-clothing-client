import Link from "next/link";
import { BagIcon, HeartIcon, UserIcon } from "./Icons";
import { useState } from "react";

const Navbar = ({ onSignUpClick }) => {
  const [user, setUser] = useState(null);
  return (
    <div className="text-slate-900 flex px-4">
      <div className="flex flex-1">
        <Link href={"/"} className="flex-[0.3] h-20">
          <img
            src="/assets/images/logo.png"
            className="w-full h-full"
            alt="image-not-found"
          />
        </Link>
        <div className="flex-[0.7] flex items-center justify-center gap-10">
          <Link href="/mens-clothing" className="link">
            Men
          </Link>
          <Link href="/womens-clothing" className="link">
            Women
          </Link>
          <Link href="/kids-clothing" className="link">
            Kids
          </Link>
          <Link href="/shop" className="link">
            Shop
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center ">
        <div className="link-container relative flex duration-300 px-10 gap-10 w-max mx-14 before:absolute before:content-[''] before:w-full before:h-1 before:rounded-lg before:bg-indigo-600 before:duration-300 before:top-4 before:-left-full after:absolute after:content-[''] after:w-32 after:h-1 after:rounded-lg after:duration-300 after:bg-indigo-600 after:top-4 after:-right-1/2">
          {user ? (
            <Link href="/profile">
              <UserIcon />
              <span>Profile</span>
            </Link>
          ) : (
            <button onClick={onSignUpClick}>
              <UserIcon color="#222" />
              <span className="">Profile</span>
            </button>
          )}
          <Link href="/wishlist">
            <HeartIcon />
            <span>Wishlist</span>
          </Link>
          <Link href="/cart">
            <BagIcon />
            <span>Bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
