import Head from "next/head";
import Layout from "../components/layout";
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
    <Layout>
      {page}      
    </Layout>
  )
}

export default Page;


  
