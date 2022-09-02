import React from "react";
import { dummyData } from "../../constants/dummy_data/dummy_data";
import ProductCard from "../ProductCard/ProductCard";

const ProductsSection = () => {
  return (
    <div className='flex-1 flex justify-center items-center gap-5 flex-wrap'>
      {dummyData.map((item, i) => (
        <ProductCard productData={item} key={i} />
      ))}
    </div>
  );
};

export default ProductsSection;
