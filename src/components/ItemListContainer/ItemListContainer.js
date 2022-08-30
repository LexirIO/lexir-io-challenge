import { getProducts } from "../../api/products";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import ItemInfo from "./ItemInfo/ItemInfo";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 className="min-h-screen text-center text-6xl mt-6">Loading...</h1>;
  }

  return (
    <div className="bg-[white] grid grid-cols-6 gap-12 m-20 ">
      <ItemInfo />
      <div className="col-start-3 col-end-7">
        <ItemList products={products} />
      </div>
    </div>
  );
}
export default ItemListContainer;
