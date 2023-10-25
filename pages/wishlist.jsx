import OrdersCard from "@/components/OrdersCard";

const WishListPage = () => {
  return (
    <div className="w-1/2 mx-auto gap-6 my-10 flex flex-col text-slate-800 items-center justify-start">
      <div className="flex w-full gap-4 justify-center">
        <span className="py-4 flex-[0.21] bg-indigo-500 rounded-s-md"></span>
        <h1 className="text-4xl font-bold text-slate-700 flex-[0.5] w-max text-center">
          YOUR WISHLIST
        </h1>
        <span className="py-4 bg-indigo-500 flex-[0.21] rounded-e-md"></span>
      </div>
      <div className="flex flex-col gap-3">
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
      </div>
    </div>
  );
};

export default WishListPage;
