import Header from "../components/header";
import Navbar from "../components/navbar";
import Highlight from "../components/highlight";
import SuggestBrand from "../components/suggestBrand";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Navbar />

      <main className='max-w-7xl mx-auto'>
        <Highlight />
      </main>

      <SuggestBrand />

      <Footer />
    </>
  );
}
