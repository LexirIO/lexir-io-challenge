import Image, { StaticImageData } from "next/image";
import React from "react";
import { IProduct } from "src/interfaces/IProduct";

export default function ProductCard(product: IProduct) {
  return (
    <div className="w-[175px] max-w-[175px] h-[305px] max-h-[305px] shadow-[0_4px_8px_rgb(0,0,0,6%)]">
      <div className="flex justify-center w-[175px] max-w-[175px] h-[233px] max-h-[233px] p-5 bg-secondaryMain">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="p-2.5">
        <div className="flex justify-between mb-2">
          <p className="uppercase font-bold text-sm">{product.productName}</p>
          <p className="text-primaryMain font-medium text-[15px] tracking-wide">
            €{product.price}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="uppercase font-bold text-sm text-secondary">
            {product.brand}
          </p>
          <button className=" bg-secondaryMain px-2 rounded text-md hover:bg-[#e5e5e5] transition-all ease-in duration-75">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
