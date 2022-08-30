import Head from "next/head";
import NavBar from "@components/NavBar";
import Brand from "@components/Brand";
import Products from "@components/Products";
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

      <main className={styles.main + styles.container}>
        <article className={"px-10 inline-block "+styles.article}>
          <Brand name="baldoria"/> 
        </article>
        <section className={"inline-block "+styles.section}>
          <Products search="baldoria"/>
        </section>
      </main>

      <Footer />
    </div>
  );
}
