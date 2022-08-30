import React from "react";
import Link from "next/link";

interface Props {
  texts: string[];
}

const Row = ({ texts }: Props) => {
  return (
    <div className={`${texts[0] === "LEXIR SHOP" && "mb-5"}`}>
      <Link href="/">
        <a className="font-normal block text-portal pb-2 text-neutral-450">
          {texts[0]}
        </a>
      </Link>
      {texts.slice(1).map((item) => (
        <Link href="/" key={item}>
          <a className="font-normal block text-portal pb-2 text-white">
            {item}
          </a>
        </Link>
      ))}
    </div>
  );
};

const Portals = () => {
  return (
    <div className="flex gap-20  flex-wrap">
      <Row
        texts={[
          "COMMUNITY",
          "Lexir for Brands",
          "Business Buyers",
          "Sales Affiliates",
        ]}
      />
      <Row texts={["PLATFORM", "Resources", "Pricing", "Get Started"]} />
      <Row texts={["COMPANY", "About", "Contact", "Legal"]} />
      <Row texts={["LEXIR SHOP", "Brands", "Spirits", "Wine", "Blog"]} />
    </div>
  );
};

export default Portals;
