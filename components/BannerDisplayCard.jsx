import { StarEmptyIcon, StarFullIcon, StarHalfIcon } from "./Icons";

const BannerDisplayCard = (props) => {
  const { rating } = props;
  const ratingFullStars = Array.from(
    { length: Math.floor(rating) },
    (_, index) => {
      return <StarFullIcon key={index} />;
    }
  );

  const ratingEmptyStars = Array.from(
    { length: 5 - Math.ceil(rating) },
    (_, index) => {
      return <StarEmptyIcon key={index} />;
    }
  );

  return (
    <div className="flex gap-2 max-w-[20rem] bg-white text-slate-800 p-1 rounded-lg scale-[0.6]">
      <div className="flex-[0.3] flex items-center justify-center">
        <img
          src="/assets/images/card-image-2.jpeg"
          alt="image-not-found"
          className="w-full "
        />
      </div>
      <div className="flex-[0.7] flex flex-col gap-2">
        <div>Top Gun Maverick Movie Shirt for Men</div>
        <div className="flex gap-2">
          {ratingFullStars} {rating !== Math.floor(rating) && <StarHalfIcon />}{" "}
          {ratingEmptyStars}
        </div>
      </div>
    </div>
  );
};

export default BannerDisplayCard;
