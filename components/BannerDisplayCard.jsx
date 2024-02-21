import { StarEmptyIcon, StarFullIcon, StarHalfIcon } from "../assets/Icons";

const BannerDisplayCard = (props) => {
  const { rating, imageUrl, description } = props;

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
          src={imageUrl}
          alt="image-not-found"
          className="w-full aspect-square"
        />
      </div>
      <div className="flex-[0.7] flex flex-col gap-2">
        <div>{description}</div>
        <div className="flex gap-2">
          {ratingFullStars} {rating !== Math.floor(rating) && <StarHalfIcon />}{" "}
          {ratingEmptyStars}
        </div>
      </div>
    </div>
  );
};

export default BannerDisplayCard;
