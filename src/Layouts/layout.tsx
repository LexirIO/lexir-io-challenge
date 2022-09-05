// components/layout.js
import { FC, ReactNode } from "react";
import { Header } from "@components/Header/Header";
import { Navbar } from "@components/Navbar/Navbar";
import { LexirFooter } from "@components/footer/LexirFooter";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <main className="flex flex-col items-center p-0 relative   max-w-[128rem] m-auto">
        <Header />
        <Navbar />
        {children}
        <LexirFooter />
      </main>
    </>
  );
};

export default Layout;
