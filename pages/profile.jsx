import {
  HeartIcon,
  PencilIcon,
  StarFullIcon,
  UserIcon,
} from "@/components/Icons";
import OrdersCard from "@/components/OrdersCard";

const ProfilePage = () => {
  return (
    <div className="w-full mx-auto my-10 text-slate-800">
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-500">
        <div className="flex gap-5 items-end pt-24 pb-4">
          <button className="flex gap-3 text-base font-bold text-blue-500 bg-white items-center justify-center px-3 py-2 rounded-md btn-svg-indigo duration-300 hover:bg-blue-500 hover:text-white">
            <PencilIcon />
            <span>Edit</span>
          </button>{" "}
          <button className="flex gap-3 text-base font-bold text-pink-700 bg-white items-center justify-center px-3 py-2 rounded-md btn-svg-fill duration-300 hover:bg-pink-700 hover:text-white">
            <HeartIcon />
            <span>WISHLIST</span>
          </button>{" "}
        </div>
      </div>
      <div className="flex gap-10 w-4/5 mx-auto">
        <div className="flex flex-1 flex-col gap-2 items-center mx-auto ">
          <div className="p-10 rounded-full w-max bg-gradient-to-r from-indigo-500 to-purple-700 -mt-32 border-8 border-white">
            <UserIcon size={180} strokeWidth={0.7} />
          </div>
          <div className="text-4xl font-medium text-center w-3/5">
            Kasper Anderson
          </div>
          <div className="font-medium my-2 text-center w-3/5">
            kasper.anderson@example.com
          </div>
          <div className="text-xl text-center w-3/5">+1 933-423-3451</div>
          <div className="text-lg text-slate-500 font-light w-3/5 text-center">
            S no- 4094, Tehtaakuta Street, Espoo, Southern Ostrobothnia, Finland
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 items-start py-10 bg-slate-200 px-10 mt-3 rounded-lg">
          <h1 className="text-4xl font-medium">Your Orders</h1>
          <div className="w-full flex flex-col gap-4">
            <OrdersCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
