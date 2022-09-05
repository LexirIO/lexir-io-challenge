import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout";
import Router from "next/router";
import Loader from "../components/loader";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [loading, setLoading] = React.useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);
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
  

  return getLayout(
    <Layout>
          {loading ? <Loader /> : <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;
