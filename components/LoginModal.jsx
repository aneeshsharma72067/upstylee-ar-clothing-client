import { Dosis } from "next/font/google";
import { useContext, useState } from "react";
import Toast from "./Toast";
import { UserDataContext } from "../context/UserContext";
import { login } from "@/services/authentication";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

const LoginModal = ({ onModalChange }) => {
  const { user, setUser, setLoading } = useContext(UserDataContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [toast, setToast] = useState({
    toastMessage: null,
    isActive: false,
    status: "error",
  });

  const onLoginDataChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  const showToast = (message, status) => {
    setToast({
      toastMessage: message,
      isActive: true,
      status: status,
    });
    setTimeout(() => {
      setToast({
        toastMessage: message,
        isActive: false,
        status: status,
      });
    }, 3000);
  };

  const loginHandle = async () => {
    setLoading(true);
    try {
      const res = await login(loginData);
      if (!res.success) {
        showToast(res.message, "error");
      } else {
        setUser(res.data);
        showToast(res.message, "success");
        resetForm();
      }
    } catch (err) {
      showToast("Something Went Wrong", "error");
    }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col w-2/5 shadow-[0_0_20px_#000] fixed bg-indigo-700 z-20 duration-500 top-0">
      {
        <Toast
          toastMessage={toast.toastMessage}
          isActive={toast.isActive}
          status={toast.status}
        />
      }
      <div className="w-full flex flex-col gap-4 min-h-full">
        <div className="w-full h-32 bg-zinc-800"></div>
        <h1
          className={
            "text-white font-bold text-center text-7xl -mt-14" +
            " " +
            dosis.className
          }
        >
          LOGIN
        </h1>
        <div className="signup_form gap-3 py-2 items-center w-3/5 mx-auto my-4 flex flex-col">
          <div className="w-full">
            <input
              className="w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={loginData.email}
              onChange={onLoginDataChange}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={loginData.password}
              onChange={onLoginDataChange}
            />
          </div>
          <button
            onClick={loginHandle}
            className="w-full px-4 py-2 rounded-md bg-green-500 text-white font-medium text-lg duration-300 hover:bg-green-600"
          >
            LOGIN
          </button>
          <div className="font-normal flex gap-2">
            <span>New Here ?</span>
            <button
              className="underline text-green-400"
              onClick={onModalChange}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
