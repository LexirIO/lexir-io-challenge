import { Fragment } from "react";

import getProducts from "./api/productById";
import { Product } from "src/interfaces/product";

import Navbar from "@components/Navbar";
import Breadcrumbs from "@components/Breadcrumbs";
import Packshot from "@components/Packshot";
import ProductDescription from "@components/ProductDescription";
import AddToCart from "@components/AddToCart";
import ProductDetails from "@components/ProductDetails";
import TastingNotes from "@components/TastingNotes";
import SuggestBrand from "@components/SuggestBrand";
import Footer from "@components/Footer";

interface Props {
  url: string;
  product: Product;
}

const sectionClasses = "max-w-[1210px] flex justify-between w-screen mx-auto  ";

export default function Home({ url, product }: Props) {
  return (
    <Fragment>
      <Navbar />
      <Breadcrumbs url={url} />

      {/* Product Description and Add to Cart */}
      <section className={`${sectionClasses} mt-10`}>
        <Packshot packshot={product.packshot} />
        <div>
          <ProductDescription product={product} />
          <AddToCart price={product.price} volume={product.volume} />
        </div>
      </section>

      {/* Product Details and Tasting Notes */}
      <section className={`${sectionClasses} mt-20`}>
        <ProductDetails details={product.details} />
        <TastingNotes
          intensity={product.intensity}
          smell={product.smell}
          taste={product.taste}
          use={product.use}
          useIcons={product.useIcons}
        />
      </section>
      {/* Suggest a brand */}
      <section className={`${sectionClasses} mt-[105px]`}>
        <SuggestBrand />
      </section>

      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const productId = "p1"; // in a real setting this would be extracted i.e. from the url slug

  // I made a simple API in firebase to facilitate the process, fetched the product by ID
  // This entire page's behavior is dynamic
  const productData = await getProducts(productId);

  if (!productData) {
    return { notFound: true };
  }

  return {
    props: {
      // to use in breadcrumbs, in a real situation the url would be extracted from context
      url: "/spirits/kiss-my/kiss-my-rhubarb",
      product: productData,
    },
  };
}
