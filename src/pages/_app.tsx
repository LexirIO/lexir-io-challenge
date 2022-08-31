import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
