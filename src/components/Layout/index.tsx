import Footer from "@components/Layout/footer";
import NavBar from "@components/Layout/navbar";
import Head from "next/head";

interface ContainerProps {
    children: React.ReactNode;
    title?: string;
}

const Container = ({children, title}: ContainerProps) => {
    return (
        <>
            <Head>
                <title>Lexir App - {title ? title : 'Store'}</title>
            </Head>
            <NavBar />
            <div className="font-lato">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Container;