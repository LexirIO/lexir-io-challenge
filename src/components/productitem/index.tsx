import Image from "next/image";
import { Product } from "src/types/product";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="min-w-0 w-44 h-72 shadow-lg mr-8 mb-16">
            <div className="flex justify-center items-center bg-cgreydefault w-full h-56 relative">
                <Image 
                    src={`/images/${product.image}.png`} 
                    alt={product.image} 
                    objectFit="contain"
                    layout="fill"
                    priority />
            </div>
            <div className="flex flex-col p-2">
                <div className="flex flex-row justify-between">
                    <span className="text-center font-semibold">{product.title}</span>
                    <span className="text-center text-cgreyter">${product.value}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <span className="text-center text-cgreyter">{product.brand}</span>
                    <button className="bg-cgreydefault font-bold px-2 pb-1 text-center rounded-md">+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;