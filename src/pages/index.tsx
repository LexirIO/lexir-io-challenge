import Head from "next/head";
import { CompanyCard } from "src/Components/CompanyCard";
import { Footer } from "src/Components/Footer";
import { Navigation } from "src/Components/Navigation";
import { ProductCard } from "src/Components/ProductCard";
import { products } from "src/Data/Products"; 




export default function Home() {
   


  return (
    <>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" shadow-md  ">
        <Navigation />
      </header>

      <main className="p-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[1280px] m-auto">
        <CompanyCard/>
        <div className="col-span-2 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map(product => (
            <div key={product.id}>
              <ProductCard {...product}/>

            </div>
          ))}
        </div>
      </main>
      <footer className="bg-companytext ">
        <Footer/>
      </footer>
    </>
  );
}
