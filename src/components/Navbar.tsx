import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/imgs/logo-lexir.png";
import SigninIcon from "../public/icons/signin-icon.svg";
import CartIcon from "../public/icons/cart-icon.svg";
import { BiMenu, BiX } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-8 border-b-2 shadow-LexirSh ">
        <div className="flex h-28 justify-between ">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Image
              className="block h-8 w-auto"
              src={Logo}
              width="103px"
              height="24px"
              alt="lexir logo"
            />
          </div>
          {/* Desktop */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center uppercase text-sm leading-5 font-Lato">
            <ul className="flex justify-center items-center gap-10">
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
          {/*Mobile */}
          <div className="flex sm:hidden justify-center items-center">
            <button type="button" onClick={handleToggleMobileMenu}>
              {toggleMobileMenu ? (
                <BiX className="w-8 h-8" />
              ) : (
                <BiMenu className="w-8 h-8" />
              )}
            </button>
          </div>
          {toggleMobileMenu ? <MobileMenu /> : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
