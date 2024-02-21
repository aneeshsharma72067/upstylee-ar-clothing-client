import Navbar from "@/components/Navbar";
import SignUpModal from "@/components/SignUpModal";
import { useContext, useState } from "react";
import Loader from "@/components/Loader";
import { UserDataContext } from "@/context/UserContext";
const App = ({ Component, pageProps }) => {
  const { loading } = useContext(UserDataContext);
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
    <div>
      {loading && <Loader />}
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
    </div>
  );
};

export default App;
