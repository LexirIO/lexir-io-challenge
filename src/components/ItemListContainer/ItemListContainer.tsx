import { getProducts } from "../../pages/products/products";
import { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList";
import ItemInfo from "./ItemInfo/ItemInfo";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products as any);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 className="min-h-screen text-center text-6xl mt-6">Loading...</h1>;
  }

  return (
    <div className="bg-[white] grid grid-cols-1 justify-items-center my-20 mx-8 ">
      <ItemInfo />
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
