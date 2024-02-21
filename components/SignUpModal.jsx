import { Dosis } from "next/font/google";
import { useContext, useState } from "react";
import Toast from "./Toast";
import { UserDataContext } from "../context/UserContext";
import { signup } from "@/services/authentication";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

const SignUpModal = ({ onModalChange }) => {
  const { setLoading } = useContext(UserDataContext);

  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    verify_password: "",
  });

  const [toast, setToast] = useState({
    toastMessage: null,
    isActive: false,
    status: "error",
  });

  const resetForm = () => {
    setSignUpData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      verify_password: "",
    });
  };

  const onChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const signUpHandle = async () => {
    setLoading(true);
    try {
      const res = await signup(signUpData);
      if (!res.success) {
        showToast(res.message, "error");
      } else {
        showToast(res.message, "success");
        resetForm();
      }
    } catch (error) {
      showToast("Something Went Wrong", "error");
      console.log(error);
    }
    setLoading(false);
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
          SIGNUP
        </h1>
        <div className="signup_form gap-3 py-2 items-center w-3/5 mx-auto my-4 flex flex-col">
          <div className="flex gap-2 mx-auto items-center justify-center">
            <input
              className="flex-1 w-1/2"
              type="text"
              name="first_name"
              required
              id="first_name"
              placeholder="First Name"
              value={signUpData.first_name}
              onChange={onChange}
            />
            <input
              className="flex-1 w-1/2"
              type="text"
              required
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              value={signUpData.last_name}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full"
              type="email"
              required
              name="email"
              id="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full"
              type="text"
              required
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={signUpData.phone}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              value={signUpData.password}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full"
              type="password"
              name="verify_password"
              id="verify_password"
              placeholder="Verify Password"
              value={signUpData.verify_password}
              required
              onChange={onChange}
            />
            <p
              hidden={
                signUpData.verify_password === "" ||
                signUpData.password === signUpData.verify_password
              }
              className="text-red-600"
            >
              Password does not matches !!!
            </p>
          </div>
          <button
            onClick={signUpHandle}
            disabled={signUpData.password !== signUpData.verify_password}
            className="w-full px-4 disabled:bg-green-800 py-2 rounded-md bg-green-500 text-white font-medium text-lg duration-300 hover:bg-green-600"
          >
            SIGN UP
          </button>{" "}
          <div className="font-normal flex gap-2">
            <span>Already a Customer ?</span>
            <button
              className="underline text-green-400"
              onClick={onModalChange}
            >
              Log In
            </button>
          </div>
        </div>

        <p className="text-sm w-3/5 mx-auto font-light text-white text-center">
          By signing up, you agree to our terms and conditions, which include
          maintaining account confidentiality, providing accurate information,
          and adhering to our community guidelines. Please review the complete
          terms for more details.
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
