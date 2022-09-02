import Image from "next/image";
import React from "react";
import { Product } from "src/interfaces";

interface ItemProps {
  product: Product;
}

export function ItemComponent({ product }: ItemProps) {
  return (
    <div className="w-[90%] md:w-[174px] h-[305px] shadow-pattern cursor-pointer">
      <div className="w-full h-[230px] relative bg-grayPattern">
        <Image
          src={product.image}
          alt="cart icon"
          layout="fill"
          objectFit="scale-down"
          className="h-full w-full"
        />
      </div>
      <div className="p-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[14px] leading-[25px] text-primaryFont font-[700]">
            {product.name.toUpperCase()}
          </p>
          <p className="text-darkGray font-[500]">{`€ ${product.price}`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[14px] leading-[25px] text-secundaryFont font-[700]">
            {product.brand.toUpperCase()}
          </p>
          <button className="bg-grayPattern rounded-[4px] w-[19px] h-[19px] hover:brightness-90 relative">
            <Image
              src={"/images/products/plusIcon.svg"}
              alt="plus icon"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
