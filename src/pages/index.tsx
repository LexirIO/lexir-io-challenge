import Destination from "@components/Destination";
import NavBar from "@components/NavBar";
import Product from "@components/Product";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setDesktop] = useState(true);

  // useEffect is used just to avoid window is not defined error on Next.js
  useEffect(
    () => {
      setDesktop(window.innerWidth >= 768);
    },
    [],
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="bg-white">
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <header>
          <NavBar isDesktop={isDesktop} />
          <Destination />
        </header>
        <section>
          <Product />
        </section>
      </main>
    </div>
  );
}
