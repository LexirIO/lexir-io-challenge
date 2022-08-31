import Head from "next/head";
import NavBar from "@components/NavBar";
import BrandInfo from "@components/BrandInfo";
import Products from "@components/BrandProducts";
import Footer from "@components/Footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={"flex flex-col md:flex-row justify-center items-center"+styles.main + styles.container}>
        <article className={"px-8 inline-block mx-auto md:mx-0 text-center md:text-left"+styles.article}>
          <BrandInfo name="baldoria"/> 
        </article>
        <section className={"inline-block mt-10 md:mt-0 "+styles.section}>
          <Products search="baldoria"/>
        </section>
      </main>

      <Footer />
    </div>
  );
}
