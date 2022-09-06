import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import Cart from "@components/cart/Cart";

const Product = () => {
    return (
        <section className="flex">
            <ProductDetails />
            <div className="flex flex-col">
                <Cart />
                <ProductDescription />
            </div>
        </section>
    );
};

export default Product;
