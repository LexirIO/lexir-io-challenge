import React, { useEffect } from "react";
import Image from "next/image";
import logo from "./../../assets/logo.svg";
import carbonUserAvatar from "./../../assets/header/carbon_user-avatar.svg";
import cartVector from "./../../assets/header/cart_vector.svg";
import { useRef } from "react";
import useWindowDimensions from "@components/tools/useWindowDimensions";

export const Header = (): JSX.Element => {
  const menuRef = useRef<HTMLUListElement>(null);

  //custom dimensions hook component
  const width = useWindowDimensions();
  //reset the menu if screen changes to desktop mode
  useEffect(() => {
    //the size we declared as the breakpoint to make the menu icon appear instead of the whole menu.
    if (width > 639) {
      hideMenu();
    }
  }, [width]);

  //toggling on and off the dropdown by adding and removing the hidden className
  //attribute
  const toggleMenu = () => {
    menuRef?.current?.className.includes(" hidden ")
      ? (menuRef.current.className = menuRef.current.className.replace(
          " hidden ",
          ""
        ))
      : menuRef?.current?.className
      ? (menuRef.current.className += " hidden ")
      : "";
  };

  const hideMenu = () => {
    if (menuRef?.current?.className.includes(" hidden ") === false) {
      menuRef.current.className += " hidden ";
    }
  };

  //Start the page with closed dropdown component
  useEffect(() => {
    hideMenu();
  }, []);

  return (
    <>
      <header className=" bg-white  h-[10.4rem] flex flex-row items-center w-[100%] shadow-small z-10">
        <menu className="flex flex-row justify-between items-end px-[4rem] w-[100%] ">
          <div className="relative w-[10.3rem] h-[2.4rem] hover:cursor-pointer">
            <Image className="" src={logo} layout="fixed" alt=""></Image>
          </div>

          <menu className="flex flex-row py-[0.2rem] justify-center items-center gap-[4rem] p-0 text-[1.4rem]  leading-[2rem] text-[#2D2D2D] font-Lato font-[500] msm:hidden ">
            <li className="transition duration-180 border-b-2  hover:border-[#2D2D2D]">
              <a href="/">PRODUCTS</a>
            </li>
            <li className="transition duration-180 border-b-2  hover:border-[#2D2D2D]">
              <a href="/">BRANDS</a>
            </li>
            <li className="transition duration-180 border-b-2  hover:border-[#2D2D2D]">
              <a
                href="/"
                className="flex flex-row gap-[0.8rem] justify-center items-center"
              >
                <div className="relative w-[2.4rem] h-[2.4rem]">
                  <Image
                    className=""
                    src={carbonUserAvatar}
                    layout="fixed"
                    alt=""
                  ></Image>
                </div>

                <h1>SIGN IN</h1>
              </a>
            </li>
            <li className="transition duration-180 border-b-2  hover:border-[#2D2D2D]">
              <a
                href="/"
                className="flex flex-row gap-[0.8rem]  justify-center items-start "
              >
                <div className="relative w-[2.4rem] h-[2.4rem]">
                  <Image
                    className=""
                    src={cartVector}
                    layout="fixed"
                    alt=""
                  ></Image>
                </div>

                <h1>CART</h1>
              </a>
            </li>
          </menu>

          <div
            className="space-y-2 cursor-pointer hidden msm:block"
            onClick={toggleMenu}
          >
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
          </div>
        </menu>
      </header>
      <ul
        className="bg-[#2D2D2D]  rounded-[0.2rem]  w-[100%] flex flex-col align-middle justify-center text-Lato text-center text-white transition-all reversemsm:hidden "
        ref={menuRef}
      >
        <li className="py-[1rem] cursor-pointer transition-colors hover:bg-[#7d7575] ">
          <a href="/">PRODUCTS</a>
        </li>
        <li className="py-[1rem] cursor-pointer transition-colors hover:bg-[#7d7575]">
          <a href="/">BRANDS</a>
        </li>
        <li className="py-[1rem] cursor-pointer transition-colors hover:bg-[#7d7575]">
          <a href="/">SIGN IN</a>
        </li>
        <li className="py-[1rem] cursor-pointer transition-colors hover:bg-[#7d7575]">
          <a href="/">CART</a>
        </li>
      </ul>
    </>
  );
};

export default Header;
