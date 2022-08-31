import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/logo-black.png";
import BasketAdd from "../assets/icons/basket-add.png";
import UserAvatar from "../assets/icons/carbon_user-avatar.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-24 px-8 shadow-[0_4px_8px_rgb(0,0,0,6%)]">
      <Link href="/">
        <a>
          <Image src={logo} alt="Lexir logo" width={103} height={24} />
        </a>
      </Link>
      <div className="flex items-center gap-10 text-sm	text-primary">
        <Link href="/" className="effect-underline">
          PRODUCT
        </Link>
        <Link href="/">BRANDS</Link>
        <Link href="/">
          <a className="flex items-center">
            <Image src={UserAvatar} width={24} height={24} />
            <span className="ml-2">HELLO, LEANDRO</span>
          </a>
        </Link>
        <Link href="/">
          <a className="flex items-center">
            <Image src={BasketAdd} width={30} height={26} />
            <span className="ml-2">CART</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
