import { DrinkCardContainer } from "@components/DrinkCardContainer";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { SideMenu } from "@components/SideMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex mx-10 mt-36 mb-16 space-x-6">
        <SideMenu />
        <DrinkCardContainer />
      </div>
      <Footer />
    </>
  );
}
