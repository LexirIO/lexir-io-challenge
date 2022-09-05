import React from "react";
import Image from "next/image";
import SigninIcon from "../public/icons/signin-icon.svg";
import CartIcon from "../public/icons/cart-icon.svg";

const MobileMenu: React.FC = () => {
  return (
    <>
      <div className="bg-white w-full h-full absolute top-32 left-0 z-50">
        <div className="flex justify-center items-start mt-12 h-full uppercase text-base leading-5 font-Lato">
          <ul className="flex flex-col justify-center items-start gap-10">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <button type="button" className="flex mr-2">
                  <Image
                    className=""
                    src={SigninIcon}
                    width="21px"
                    height="21px"
                    alt="lexir logo"
                  />
                </button>
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <button type="button" className="flex mr-2">
                  <Image
                    className=""
                    src={CartIcon}
                    width="21px"
                    height="21px"
                    alt="lexir logo"
                  />
                </button>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
