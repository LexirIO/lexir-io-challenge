import BrandCard from "@components/BrandCard";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Products from "@components/Products";

export default function Home() {
  
  return (
    <div>
      <Header />
      <main className='flex py-10 px-8 lg:justify-center'>  
        <BrandCard />
        <Products />
      </main>
      <Footer />
    </div>
  );
}