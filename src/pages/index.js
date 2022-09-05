import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductDescription";
import BrandSuggestion from "../components/BrandSuggest";
import ProductDetails from "../components/ProductDetails";

export default function Home() {
    return (
        <div className=" flex ml-[40px] flex-col justify-center max-w-[1280px]">
            <Navbar />
            <ProductDescription />
            <ProductDetails />
            <BrandSuggestion />
        </div>
    );
}
