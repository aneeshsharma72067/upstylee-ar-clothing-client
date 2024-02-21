import "@/styles/globals.css";
import "@/styles/index.css";
import App from "./App";
import { UserContextProvider } from "@/context/UserContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <App Component={Component} pageProps={pageProps} />
      </UserContextProvider>
    </>
  );
}
