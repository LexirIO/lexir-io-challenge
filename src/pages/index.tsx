import { DrinkCardContainer } from "@components/DrinkCardContainer";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { SideMenu } from "@components/SideMenu";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex m-10 space-x-6">
        <div className="w-3/12">
          <SideMenu />
        </div>
        <div className="w-9/12">
          <DrinkCardContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}
