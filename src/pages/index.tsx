import { useIsDesktop } from "@components/context/DesktopWidthProvider";
import Destination from "@components/Destination";
import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar";
import Product from "@components/Product";
import ProductDetails from "@components/ProductDetails";
import SuggestBrand from "@components/SuggestBrand";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isChartFull, setIsChartFull] = useState(false);
  const { isDesktop } = useIsDesktop();

  const handleChart = (value: boolean) => {
    setIsChartFull(value);
  }; 

  return (
    <div className="bg-white">
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className="bg-white">
        <header>
          <NavBar isChartFull={isChartFull} />
          <Destination />
        </header>
        <Product handleChart={handleChart} />
        <ProductDetails />
        <SuggestBrand />
        <Footer />
      </main>
    </div>
  );
}
