import React from "react";
import ProductCard from "../Common/ProductCard";
import { Product } from "src/types";

interface Props {
  data: Product[];
}

const Shop = ({ data }: Props) => {
  return (
    <section className="flex flex-wrap justify-center sm:items-start sm:justify-center gap-9">
      {data.map((product: Product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            alt={product.alt}
            brand={product.brand}
            image={product.image}
          />
        );
      })}
    </section>
  );
};

export default Shop;
