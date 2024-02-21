import Navbar from "@/components/Navbar";
import { useContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { UserDataContext } from "@/context/UserContext";
import AuthInterfaceModal from "@/components/AuthInterfaceModal";
import { checkIfUserLoggedIn } from "@/services/authentication";
const App = ({ Component, pageProps }) => {
  const { user, setUser, loading } = useContext(UserDataContext);
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

  useEffect(() => {
    const checkForUser = async () => {
      const res = await checkIfUserLoggedIn();
      if (res.user) {
        setUser(res.user);
      } else {
        console.log(res);
      }
    };
    checkForUser();
    return () => {};
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <AuthInterfaceModal isOpen={isSignUpModalOpen} />
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
