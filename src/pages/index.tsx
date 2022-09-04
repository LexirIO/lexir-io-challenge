import Head from "next/head";

import Brands from "./brands";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Brands />  
    </>
  );
}
