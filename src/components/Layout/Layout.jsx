import React from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name='description' content='Lexir Frontend Assessment!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
