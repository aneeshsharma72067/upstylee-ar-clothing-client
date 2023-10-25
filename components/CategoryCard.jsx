import Link from "next/link";

const CategoryCard = ({ title, imageUrl, color, href }) => {
  return (
    <Link
      href={href}
      className={`${color}-gradient px-6 flex-1 h-40 flex items-center justify-start neuromorphism rounded-xl`}
    >
      <p className="text-3xl flex-1 font-medium w-1/2 leading-normal text-white">
        {title}
      </p>
      <div className="flex-1 overflow-hidden h-full flex items-center justify-center">
        <img src={imageUrl} alt="Image Not Found" className="w-auto h-full " />
      </div>
    </Link>
  );
};

export default CategoryCard;
