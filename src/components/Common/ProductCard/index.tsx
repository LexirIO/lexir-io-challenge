import React from "react";
import Image from "next/image";
import addToCart from "../../../assets/icons/add-to-cart.svg";
import { Product } from "src/types";

const ProductCard = ({ alt, name, price, brand, image }: Product) => {
  return (
    <article className="h-75 w-43.5 flex flex-col items-center shadow-product-card">
      <div className="w-full h-58  flex bg-gray-110 justify-center items-center relative">
        <Image
          src={`/images/${image}.png`}
          alt={alt}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-center px-2.5 mt-2.5 w-full">
        <div className="flex justify-between items-center mb-1.5">
          <p className="text-productTitle font-bold">{name}</p>
          <p className="text-productPrice font-medium text-neutral-560">
            €{price}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-productTitle font-bold text-neutral-450">
            {brand}
          </p>
          <button className="flex">
            <Image src={addToCart} alt="add-to-cart" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
