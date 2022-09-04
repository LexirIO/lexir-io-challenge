import Head from "next/head";

import BrandCollection from "./brandCollection";
import Navigation from "./navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />      
      <BrandCollection />  
    </>
  );
}
