import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/logo-white.png";
import FooterNavigation from "./FooterNavigation";
import FooterSocialNetwork from "./FooterSocialNetwork";

export default function Footer() {
  let year: number = new Date().getFullYear();

  return (
    <footer className="w-full h-[330px]  inset-x-0 bottom-0 bg-primary py-[20px] px-[30px] md:flex-wrap sm:flex-wrap">
      <div className="flex justify-between py-[22px]">
        <Link href="/">
          <a>
            <Image
              src={logo}
              width={105}
              height={24}
              alt="Lexir logo"
              layout="fixed"
            />
          </a>
        </Link>
        <FooterNavigation />
        <FooterSocialNetwork />
      </div>
      <hr className="mt-5 border-t-indigo-500 border-secondary" />
      <div className="flex justify-between text-[color:white] mt-6">
        <div className="font-light">© {year} Lexir Inc.</div>
        <div className="flex gap-2">
          <Link href="/">Privacy</Link>
          <Link href="/">Terms of service</Link>
        </div>
      </div>
    </footer>
  );
}
