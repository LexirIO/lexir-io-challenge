import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import Cart from "@components/cart/Cart";

const Product = () => {
    return (
        <section className="d-flex">
            <ProductDetails />
            <div className="d-flex">
                <Cart />
                <ProductDescription />
            </div>
        </section>
    );
};

export default Product;
