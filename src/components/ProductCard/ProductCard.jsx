import React from "react";
import Image from "next/image";
import { Add } from "../../constants/icons";

const ProductCard = ({ productData }) => {
  const { productName, category, price, image } = productData;
  return (
    <div className='w-[200px] h-71 shadow-lg shadow-[#F2F2F2] font-lato'>
      {/* Product Image */}
      <div className='w-full h-3/4 flex justify-center items-center bg-[#F2F2F2] py-3'>
        <Image src={image} alt={productName} height={200} />
      </div>

      {/* Product name and Price */}
      <div className='flex justify-between items-center px-3 py-1.5'>
        <h4 className='uppercase font-semibold text-primary'>{productName}</h4>
        <p className='text-[#6B6B6B] font-semibold'>{price}</p>
      </div>

      {/* Product Category and Add to cart button */}
      <div className='flex justify-between items-center px-3 py-1.5'>
        <h4 className='uppercase font-semibold text-[#6B6B6B] text-sm'>
          {category}
        </h4>
        <button className='p-1.5 bg-[#F2F2F2] rounded-md'>
          <Add />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
