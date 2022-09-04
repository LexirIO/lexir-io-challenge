import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  head: ReactElement;
  title?: string;
};

const AuthLayout = ({ children, head, title }: Props) => {
  return (
    <>
      <Header />
      {/* <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head> */}
      {head}
      <main className="max-w-7xl mx-auto content">{children}</main>
      <Footer />
    </>
  );
};

export default AuthLayout;
