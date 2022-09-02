import axios from "axios";
import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { Product } from "src/interfaces";
import { products } from "../database/products";

interface ProductContextProvider {
  children: ReactNode;
}
interface ProductContext {
  productsList?: any;
  loadingProducts?: boolean;
  getAllProducts?: () => void;
}

export const ProductContext = createContext<ProductContext>({});

export function ProductContextProvider({ children }: ProductContextProvider) {
  const [productsList, setProductsList] = useState<any>();
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  function getAllProducts() {
    setProductsList(() => products);
  }

  function getAllProductsFromApi() {
    setLoadingProducts(true);
    const url = "/api/products";
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setProductsList(() => data);
      })
      .catch((error) => console.log(error));
    setTimeout(() => setLoadingProducts(() => false), 1000);
  }

  useEffect(() => {
    // getAllProducts ( From Fake data Base)
    getAllProductsFromApi(); // (From json file by api)
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsList,
        loadingProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
