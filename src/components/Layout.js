import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="h-[104px]">
                Spacer div to keep page uniform apperance
            </div>
            {children}
            <Footer />
        </>
    );
};

export default Layout;
