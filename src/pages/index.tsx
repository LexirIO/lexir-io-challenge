import { ReactElement } from "react";
import Head from "next/head";
import Layout from "@components/Layout";
import Sidebar from "@components/Sidebar";
import Products from "@components/Products";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="preconnect" key="googleapis" href="https://fonts.googleapis.com" />
        <link rel="preconnect" key="gstatic" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={`flex flex-row w-full pt-10 ${styles.main}`}>
        <Sidebar />
        <Products />
      </main>

    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{ page }</Layout>
}
