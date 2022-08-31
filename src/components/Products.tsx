import React, { useEffect, useState } from "react";
import { IProduct } from "src/interfaces/IProduct";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState<null | IProduct[]>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    void fetch("/api/products")
      .then(async (res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex w-[810px] max-w-[810px] flex-wrap gap-2 gap-x-9	gap-y-10	ml-5">
      {isLoading ? (
        <div className="w-full flex justify-center">
          <iframe
            className="w-25"
            src="https://embed.lottiefiles.com/animation/99274"
          ></iframe>
        </div>
      ) : isError ? (
        <p className="w-full flex justify-center">
          Ups! Something wrong happened
        </p>
      ) : !products || products.length == 0 ? (
        <p className="w-full flex justify-center">No products</p>
      ) : (
        products.map((p) => <ProductCard key={p.id} {...p} />)
      )}
    </div>
  );
}
