import Image from "next/image";
import React from "react";
import Link from "next/link";
import profile from "../../../assets/icons/carbon_user-avatar.svg";
import cart from "../../../assets/icons/cart-icon.svg";

const Overlay = () => {
  return (
    <div className="bg-gray-100 w-60 h-screen fixed right-0 top-0 z-10 flex flex-col justify-start items-end gap-10 pr-9 pt-36">
      <Link href="/" passHref>
        <a className="font-medium uppercase">Products</a>
      </Link>
      <Link href="/" passHref>
        <a className="font-medium uppercase">Brands</a>
      </Link>
      <Link href="/" passHref>
        <a className="font-medium flex justify-center items-center">
          <Image src={profile} alt="profile" />
          <span className="ml-2 uppercase">Hello, Leandro</span>
        </a>
      </Link>
      <Link href="/" passHref>
        <a className="font-medium flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image src={cart} alt="cart" />
            <span className=" absolute font-bold text-sxs w-2.5 h-2.5 bg-green-700 text-center flex justify-center items-center rounded-full text-white translate-x-2 -translate-y-2">
              1
            </span>
          </div>
          <span className="ml-2 uppercase">Cart</span>
        </a>
      </Link>
    </div>
  );
};

export default Overlay;
