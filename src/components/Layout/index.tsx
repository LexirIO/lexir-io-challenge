import Footer from "./Footer"
import Header from "./Header"

type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}

const index = ({children}: LayoutProps) => {
  return (
    <>
      <Header />       
        <main>{children}</main>
      <Footer />
    </>
  );
}

export default index