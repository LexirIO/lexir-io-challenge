import React from "react";
import Head from "next/head";

import ProductsPage from "./ProductsPage";


export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* My App Starts Here */}
      <ProductsPage />
     
    </div>
  );
}
