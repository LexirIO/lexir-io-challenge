import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
    
  <Component {...pageProps} />
  </>
)}

export default MyApp;
