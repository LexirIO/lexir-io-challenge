import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Common/ProductCard";
import { Product } from "src/types";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap justify-center sm:items-start sm:justify-center gap-9">
      {products.map((product: Product) => {
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
