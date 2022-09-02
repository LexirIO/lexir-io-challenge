import React, { useEffect } from "react";
import { products } from "../../database/products";
import { Product } from "src/interfaces";
import { ItemComponent } from "./itemComponent";
import useProductContext from "src/hook/useProductContext";
import LoadinsProductsComponent from "./loadinsProducts";

export default function ProductsComponent() {
  const { productsList, loadingProducts } = useProductContext();
  return (
    <div
      className="
      flex flex-wrap justify-center md:justify-center lg:justify-center items-center 
      gap-[70px] lg:gap-[40px] md:gap-[80px] 
      w-[full] pb-[42px] mb-[40px]
      "
    >
      {loadingProducts ? (
        <LoadinsProductsComponent />
      ) : (
        productsList?.map((prod: Product) => {
          return (
            <>
              <ItemComponent product={prod} key={prod.id} />
            </>
          );
        })
      )}
    </div>
  );
}
