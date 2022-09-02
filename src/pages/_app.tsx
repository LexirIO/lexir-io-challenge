import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout";
import Router from "next/router";
import Loader from "../components/loader";

function MyApp({ Component, pageProps } : any) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      // console.log("start");
      setLoading(true);
    };
    const end = () => {
      // console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const getLayout = Component.getLayout || (({page} : any) => page);
  return getLayout(

      <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>
  );
}

export default MyApp;
