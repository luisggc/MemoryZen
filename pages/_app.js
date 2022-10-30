import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
        <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
