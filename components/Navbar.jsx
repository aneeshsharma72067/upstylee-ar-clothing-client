import Link from "next/link";
import { BagIcon, HeartIcon, UserIcon } from "./Icons";

const Navbar = () => {
  return (
    <div className="text-slate-900 flex px-4">
      <div className="flex flex-1">
        <div className="flex-[0.3] h-20">
          <img
            src="/assets/images/logo.png"
            className="w-full h-full"
            alt="image-not-found"
          />
        </div>
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
          <Link href="/help" className="link">
            Help
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center ">
        <div className="link-container relative flex px-10 gap-10 w-max mx-14 before:absolute before:content-[''] before:w-full before:h-1 before:rounded-lg before:bg-white before:top-4 before:-left-full after:absolute after:content-[''] after:w-32 after:h-1 after:rounded-lg after:bg-white after:top-4 after:-right-1/2">
          <Link href="/profile">
            <UserIcon />
            <span>Profile</span>
          </Link>
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
