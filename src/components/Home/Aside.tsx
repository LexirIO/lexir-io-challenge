import React from "react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "../../assets/logos/baldoria-logo.png";
import Location from "../Common/Location";
import ProductCategories from "../Common/ProductCategories";

const Aside = () => {
  return (
    <aside className=" border-solid border border-gray-110 flex flex-none flex-col justify-start items-center lg:w-95">
      <div className="mt-5 mb-17">
        <Image src={brandLogo} alt="baldoria logo" />
      </div>
      <h3 className="font-bold font-serif text-3.5xl mb-4.5 text-center">
        Baldoria Vermouth
      </h3>
      <p className="px-10.5 font-normal text-base mb-8">
        Badoria rosso is a red vermouth that balances fresh, herby bitter notes
        against. Kiss My Rhubarb takes its origins from an old handwritten
        recipe from co-creators Niels’ and Wouters’ rebellious grandparents.
      </p>
      <Link href="/" passHref>
        <a className="font-bold text-xl text-green-500 mb-16">Read More</a>
      </Link>
      <Location title={"London, United Kingdom"} />
      <ProductCategories titles={["Gin", "Vodka"]} />
    </aside>
  );
};

export default Aside;
