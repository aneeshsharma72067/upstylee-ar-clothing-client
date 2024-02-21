import { useState } from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

const AuthInterfaceModal = ({ isOpen }) => {
  const [currentForm, setCurrentForm] = useState("signup");

  function switchModal() {
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
        <SignUpModal onModalChange={switchModal} />
      ) : (
        <LoginModal onModalChange={switchModal} />
      )}
    </div>
  );
};

export default AuthInterfaceModal;
