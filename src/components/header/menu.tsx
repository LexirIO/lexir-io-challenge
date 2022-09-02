import { AnchorComponent } from "@components/util/Anchor";
import Image from "next/image";
import React from "react";

export function MenuComponent() {
  return (
    <nav className="flex flex-col md:flex-row md:gap-x-[40px]">
      <AnchorComponent
        styled="flex md:hidden"
        title="HELLO, LEANDRO"
        image={
          <Image
            src={"/images/header/userIcon.svg"}
            alt="cart icon"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        }
        href="#"
      />
      <AnchorComponent title="PRODUCTS" href="#" styled="flex " />
      <AnchorComponent title="BRANDS" href="#" styled="flex " />
      <AnchorComponent
        styled="hidden md:flex"
        title="HELLO, LEANDRO"
        image={
          <Image
            src={"/images/header/userIcon.svg"}
            alt="cart icon"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        }
        href="#"
      />
      <AnchorComponent
        styled="flex "
        title="CART"
        image={
          <Image
            src={"/images/header/cartIcon.svg"}
            alt="cart icon"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        }
        href="#"
      />
    </nav>
  );
}
