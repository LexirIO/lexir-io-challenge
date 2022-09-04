import Destination from "@components/Destination";
import NavBar from "@components/NavBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray">
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <header>
          <NavBar />
          <Destination />
        </header>
      </main>
    </div>
  );
}
