import Main from "@components/layout/main";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import Brand from "@components/brand/Brand";
import Product from "@components/product";

export default function Home() {
    return (
        <Main>
            <Navbar />
            <Product />
            <Brand />
            <Footer />
        </Main>
    );
}
