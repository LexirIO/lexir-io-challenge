import Link from "next/link";
import Image from "next/image";

import Logo from "../public/assets/logo-white.svg";

// Footer links data
const linksConfig = [
  {
    title: "Community",
    links: ["Lexir for Brands", "Business Buyers", "Sales Affiliates"],
  },
  {
    title: "Platform",
    links: ["Resources", "Pricing", "Get Started"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Legal"],
  },
  {
    title: "Lexir Shop",
    links: ["Brands", "Spirits", "Wine", "Blog"],
  },
];

// Socials to render
const socialsConfig = ["cam", "facebook", "instagram", "linkedin"];

function Footer() {
  // Pre render the links
  function renderLinks() {
    const renderedLinks = linksConfig.map((item, i) => {
      const isFirst = i === 0;
      return (
        <div
          key={i}
          className={`${!isFirst && "ml-20"} flex flex-col w-[150px] `}
        >
          <p className="uppercase text-faded mb-[10px]">{item.title}</p>
          {item.links.map(link => {
            return (
              <div key={link} className="my-[9px]">
                <Link href="#">
                  <a className="text-white">{link}</a>
                </Link>
              </div>
            );
          })}
        </div>
      );
    });

    return renderedLinks;
  }

  // Pre render the social icons
  function renderSocials() {
    const renderedSocials = socialsConfig.map(item => {
      return (
        <Link key={item} href="#">
          <div className="cursor-pointer h-[46px] ml-[18px]">
            <a>
              <Image
                src={require(`../public/assets/social-${item}.svg`)}
                height={18}
                width={18}
              />
            </a>
          </div>
        </Link>
      );
    });

    return renderedSocials;
  }

  return (
    <div className="h-[337px] bg-primary">
      <div className="max-w-[1210px] flex justify-between mx-auto">
        {/* Logo */}
        <div className="mt-[42px]">
          <Image src={Logo} height={24} width={105} />
        </div>
        {/* Socials */}
        <div className="flex mt-[42px]">{renderSocials()}</div>
      </div>
      {/* Links */}
      <div className="flex mt-[-26px] absolute w-screen justify-center">
        {renderLinks()}
      </div>
      {/* Copyright */}
      <div className="max-w-[1210px] flex justify-between mx-auto border-t border-faded mt-[188px]">
        <p className="leading-8 text-white pt-[8px] font-light">
          © 2022 Lexir Inc.
        </p>
        <div className="pt-[8px] flex">
          <a href="#" className="mr-[64px]">
            <p className="text-white">Privacy</p>
          </a>
          <a href="#">
            <p className="text-white ">Terms of service</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
