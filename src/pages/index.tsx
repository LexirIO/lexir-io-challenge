import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="flex justify-between pl-10 pr-10">
         <Sidebar />
         <Card />
        </div>
        <Footer />
      </main>
    </div>
  );
}
