import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.intro}>Welcome! click on brands to discover our partners</h1>
      
    </div>
  );
}
