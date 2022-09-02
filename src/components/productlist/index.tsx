import ProductItem from "@components/productitem";
import Image from "next/image";
import { Product } from "src/types/product";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({products}:ProductListProps) => {
    return (
        <div className="flex justify-end flex-wrap flex-row max-w-max pl-5 pr-8">
            {products?.map((product, key) => (
               <ProductItem key={key} product={product} /> 
            ))}
        </div>
    )
}

export default ProductList;