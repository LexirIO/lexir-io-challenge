import Head from "next/head";
import { Header } from "@components/Header";
import lexirlogoDark from "../assets/logo/lexir/lexir-logo-dark.png"
import lexirlogoLight from "../assets/logo/lexir/lexir-logo-light.png"
import signIn from "../assets/icons/socials/sign-in.png"
import cart from "../assets/icons/socials/cart.png"
import { Footer } from "@components/Footer";
import { CallToAction } from "@components/CallToAction";
import wineCeller from "../assets/img/wine-celler.png";
import { Cards } from "@components/Cards";
import argelaLogo from "../assets/logo/brands/argala-logo.png"
import baldoriaLogo from "../assets/logo/brands/baldoria-logo.png"
import erikaLogo from "../assets/logo/brands/erika-logo.png"
import kissmyLogo from "../assets/logo/brands/kiss-my-logo.png"
import ninefoldLogo from "../assets/logo/brands/ninefold-distillery-logo.png"
import siwuLogo from "../assets/logo/brands/SiWu-logo.png"
import belgiumFlag from "../assets/icons/flags/belgium.png"
import denmarkFlag from "../assets/icons/flags/denmark.png"
import franceFlag from "../assets/icons/flags/france.png"
import italyFlag from "../assets/icons/flags/italy.png"
import scotlandFlag from "../assets/icons/flags/scotland.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header logo={lexirlogoDark} userIcon={signIn} cartIcon={cart} />
      </header>
      <main className="mx-9">
        <section className=" mb-20">
          <h2 className=" text-fontL font-mainFont my-10 font-bold">Brands</h2>
          <div className="md:grid xl:grid-cols-3 xl:gap-12 md:gap-6 md:grid-cols-2">
            <Cards logo={siwuLogo} title="SIWU DISTILLET" subTitle="Aquavit & Gin" city="Copenhagen" country="Denmark" flag={denmarkFlag} />
            <Cards logo={erikaLogo} title="Erika Spirits" subTitle="Vodka & Gin " city="Cognac" country="France" flag={franceFlag} />
            <Cards logo={ninefoldLogo} title="Ninefold" subTitle="Rum" city="D&G" country="Scotland" flag={scotlandFlag} />
            <Cards logo={argelaLogo} title="Argala" subTitle="Pastis, Bitters & Liqueurs" city="Boves" country="Italy" flag={italyFlag} />
            <Cards logo={baldoriaLogo} title="Baldoria " subTitle="Vermouth" city="Boves" country="Italy" flag={italyFlag} />
            <Cards logo={kissmyLogo} title="Kiss My" subTitle="Aperitif" city="Izegem" country="Belgium" flag={belgiumFlag} />
          </div>
        </section>
        <CallToAction image={wineCeller} />
      </main>
      <footer>
        <Footer logo={lexirlogoLight} />
      </footer>
    </div>
  );
}


