import Head from "next/head";
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';


const Page: NextPageWithLayout = () => {
    const titleName = "Lexir Frontend Assessment!";
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
    {page}   
    </div>
  )
}

export default Page;


  
