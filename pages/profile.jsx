import { HeartIcon, PencilIcon, StarFullIcon, UserIcon } from "@/assets/Icons";
import OrdersCard from "@/components/OrdersCard";
import { UserDataContext } from "@/context/UserContext";
import { logout } from "@/services/authentication";
import { useRouter } from "next/router";
import { useContext } from "react";

const ProfilePage = () => {
  const { user, setUser, setLoading } = useContext(UserDataContext);
  const router = useRouter();
  const logoutHandle = async () => {
    setLoading(true);
    try {
      const res = await logout();
      if (res.success) {
        router.push("/");
        setLoading(false);
        setUser(null);
      } else {
        setLoading(false);
        alert("Something Went Wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  if (!user) {
    return (
      <>
        <div className="my-10 text-center text-7xl font-bold text-red-500">
          Unauthorized
        </div>
      </>
    );
  }

  return (
    <div className="w-full mx-auto my-10 text-slate-800">
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-500">
        <div className="flex gap-5 items-end pt-24 pb-4 mx-4">
          <button className="flex gap-3 text-base font-bold text-blue-500 bg-white items-center justify-center px-3 py-2 rounded-md btn-svg-indigo duration-300 hover:bg-blue-500 hover:text-white">
            <PencilIcon />
            <span>Edit</span>
          </button>{" "}
          <button className="flex gap-3 text-base font-bold text-pink-700 bg-white items-center justify-center px-3 py-2 rounded-md btn-svg-fill duration-300 hover:bg-pink-700 hover:text-white">
            <HeartIcon />
            <span>WISHLIST</span>
          </button>{" "}
        </div>
        <button
          onClick={logoutHandle}
          className="flex self-end mb-4 gap-3 text-base font-bold text-blue-500 bg-white items-center justify-center px-3 py-2 rounded-md btn-svg-indigo duration-300 hover:bg-blue-500 hover:text-white"
        >
          Logout
        </button>
      </div>
      <div className="flex gap-10 w-4/5 mx-auto">
        <div className="flex flex-1 flex-col gap-2 items-center mx-auto ">
          <div className="p-10 rounded-full w-max bg-gradient-to-r from-indigo-500 to-purple-700 -mt-32 border-8 border-white">
            <UserIcon size={180} strokeWidth={0.7} />
          </div>
          <div className="text-4xl font-medium text-center w-3/5">
            {user.first_name + " " + user.last_name}
          </div>
          <div className="font-medium my-2 text-center w-3/5">{user.email}</div>
          <div className="text-xl text-center w-3/5">{user.phone}</div>
          <div className="text-lg text-slate-500 font-light w-3/5 text-center">
            {user.address}
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
