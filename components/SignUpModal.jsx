import { Dosis } from "next/font/google";
import { useContext, useRef, useState } from "react";
import Toast from "./Toast";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const dosis = Dosis({ subsets: ["latin"], weight: "600" });

const SignUpModal = ({ isOpen }) => {
  const { user, setUser } = useContext(UserDataContext);

  const [currentForm, setCurrentForm] = useState("signup");
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    verify_password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const onChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const onLoginDataChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const signUpHandle = () => {
    if (signUpData.first_name === "") {
      showError("Please enter your first name !!");
      return;
    }
    if (signUpData.last_name === "") {
      showError("Please enter your last name !!");
      return;
    }
    if (signUpData.email === "") {
      showError("Please enter your Email !!!");
      return;
    }
    if (signUpData.phone === "") {
      showError("Please enter your Phone Number");
      return;
    }
    if (signUpData.password === "") {
      showError("Please enter a Password");
      return;
    }
    axios
      .post("/api/register", signUpData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        showError(err.response.data.error + " !!!");
        console.log(err.response.data.error);
      });
  };

  const loginHandle = () => {
    if (loginData.email === "") {
      showError("Please enter the Email !!!");
      return;
    }
    if (loginData.password === "") {
      showError("Please enter the Password");
      return;
    }
    axios
      .post("/api/login", loginData)
      .then((res) => {
        console.log(res.data.user);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        showError(err.response.data.error + " !!!");
      });
  };

  const showError = (error) => {
    setError(error);
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 3000);
  };

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
      {<Toast error={error} isError={isError} />}
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
