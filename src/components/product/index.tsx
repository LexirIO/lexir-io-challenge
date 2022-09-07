import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import Cart from "@components/cart/Cart";

const Product = () => {
    return (
        <section className="flex mt-8">
            <ProductDetails />
            <div className="flex flex-col w-[80%]">
                <Cart />
                <ProductDescription />
            </div>
        </section>
    );
};

export default Product;
