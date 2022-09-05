import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const FixedLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta
          name="description"
          content="Lexir Frontend Assessment! initial-scale=1.0, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="mx-auto max-w-7xl">{children}</div>
      <Footer />
    </>
  );
};

export default FixedLayout;
