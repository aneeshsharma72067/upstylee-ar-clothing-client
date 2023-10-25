import OrdersCard from "@/components/OrdersCard";

const CartPage = () => {
  return (
    <div className="flex w-4/5 mx-auto my-3 text-slate-700 ">
      <div className="w-1/2 flex-1 mx-auto gap-6 my-10 flex flex-col text-slate-800 items-center justify-start">
        <div className="flex w-full gap-4 justify-center">
          <h1 className="text-4xl font-bold w-max text-center">Cart Items</h1>
        </div>
        <div className="flex flex-col gap-3">
          <OrdersCard />
          <OrdersCard />
          <OrdersCard />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-center my-10">
          <h1 className="text-4xl font-bold w-max text-center">Total</h1>
        </div>
        <div className="flex flex-col gap-5 bg-gray-200 px-10 py-6 w-4/5 text-center mx-auto rounded-xl">
          <div className="flex items-center justify-center gap-1 text-xl">
            <h2 className="text-3xl font-medium"> ₹ 4299</h2>
          </div>
          <button className="bg-indigo-600 text-white px-10 py-3 duration-300 hover:bg-indigo-800 rounded-lg mx-auto w-max font-medium">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
