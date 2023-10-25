import Navbar from "@/components/Navbar";
import SignUpModal from "@/components/SignUpModal";
import "@/styles/globals.css";
import "@/styles/index.css";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isReadyToClose, setIsReadyToClose] = useState(false);
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setTimeout(() => {
      setIsReadyToClose(true);
    }, 500);
  };
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
    setIsReadyToClose(false);
  };

  return (
    <>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
      <div
        onClick={isReadyToClose ? closeSignUpModal : null}
        className="duration-500"
        style={
          isSignUpModalOpen
            ? {
                filter: "brightness(50%)",
                backdropFilter: "brightness(75%)",
                transition: "backdrop-filter 0.5s ease",
              }
            : { transition: "backdrop-filter 0.5s ease" }
        }
      >
        <Navbar onSignUpClick={openSignUpModal} />
        <Component {...pageProps} />
      </div>
    </>
  );
}
