import Section from "@components/layout/main";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import Brand from "@components/brand/Brand";
import Product from "@components/product";
import Header from "@components/header/Header";

export default function Home() {
    return (
        <main className=" bg-white 2xl:w-[60%] 2xl:m-auto 2xl:bg-[#ffffff]">
            <Navbar />
            <Section>
                <Header />
                <Product />
                <Brand />
            </Section>
            <Footer />
        </main>
    );
}
