import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ProductHighlight } from "@components/productHighlight/ProductHighlight";
import { ProductDetails } from "@components/productDetails/ProductDetails";
import BrandSuggestions from "@components/brandSuggestions/BrandSuggestions";

export default function Home(): JSX.Element {
  return (
    <>
      <ProductHighlight />
      <ProductDetails />
      <BrandSuggestions />
    </>
  );
}
