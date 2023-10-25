import { Dosis } from "next/font/google";
import { useRef, useState } from "react";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

const SignUpModal = ({ isOpen }) => {
  const [currentForm, setCurrentForm] = useState("signup");
  function goToLogin() {
    if (currentForm === "signup") {
      setCurrentForm("login");
    } else {
      setCurrentForm("signup");
    }
  }
  return (
    <div
      className="h-full flex flex-col w-2/5 shadow-[0_0_20px_#000] fixed bg-indigo-700 z-20 duration-500 top-0"
      style={isOpen ? { right: "0" } : { right: "-40%" }}
    >
      {currentForm === "signup" ? (
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
                id="first_name"
                placeholder="First Name"
              />
              <input
                className="flex-1 w-1/2"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="text"
                name="password_verify"
                id="password_verify"
                placeholder="Verify Password"
              />
            </div>
            <button className="w-full px-4 py-2 rounded-md bg-green-500 text-white font-medium text-lg duration-300 hover:bg-green-600">
              SIGN UP
            </button>{" "}
            <div className="font-normal flex gap-2">
              <span>Already a Customer ?</span>
              <button className="underline text-green-400" onClick={goToLogin}>
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
      ) : (
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
              />
            </div>
            <div className="w-full">
              <input
                className="w-full"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full px-4 py-2 rounded-md bg-green-500 text-white font-medium text-lg duration-300 hover:bg-green-600">
              LOGIN
            </button>
            <div className="font-normal flex gap-2">
              <span>New Here ?</span>
              <button className="underline text-green-400" onClick={goToLogin}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpModal;
