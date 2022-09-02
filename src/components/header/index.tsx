import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalMenuComponent } from "../modal/modalMenu";
import { MenuComponent } from "./menu";

interface HeaderProps {
  handleOpenModal: () => void;
}

export default function HeaderComponent({ handleOpenModal }: HeaderProps) {
  return (
    <header
      className="
        h-[104px] py-[40px] px-[34px]
        bg-default
        flex justify-between items-center
        shadow-pattern
      "
    >
      <div className="w-[103px] h-[24px] relative ">
        <Image
          src={"/images/logoBlack.svg"}
          alt="cart icon"
          layout="fill"
          objectFit="contain"
          className="h-full w-full"
        />
      </div>
      <div className="hidden md:flex">
        <MenuComponent />
      </div>
      <div className="md:hidden cursor-pointer">
        <GiHamburgerMenu size={30} onClick={() => handleOpenModal()} />
      </div>
    </header>
  );
}
