import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductDescription";
import BrandSuggestion from "../components/BrandSuggest";
import ProductDetails from "../components/ProductDetails";

export default function Home() {
    return (
        <>
            <Navbar />
            <ProductDescription />
            <ProductDetails />
            <BrandSuggestion />
        </>
    );
}
