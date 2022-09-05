import React from "react";
import Image from "next/image";
import Bottle from "../../assets/bottle.svg";

const ProductDetails = () => {
    return (
        <section>
            <Image src={Bottle} alt="brand-logo" />
            <div>
                <h3>Product Details</h3>
                <p>
                    Kiss My Rhubarb takes its origins from an old handwritten
                    recipe from co-creators Niels’ and Wouters’ rebellious
                    grandparents. Using carefully hand-selected stalks of
                    rhubarb, and locally-sourced flowers and herbs, this summery
                    aperitif perfectly expresses the brimming liveliness that
                    characterizes the Belgian countryside in bloom.
                </p>
                <p>
                    Kiss My Rhubarb is created in collaboration with local
                    producers in Izegem that select only the freshest stalks of
                    rhubarb using attentive and sustainable practices. By
                    avoiding the pitfalls of overproduction and diminished
                    flavour that large-scale harvesting methods can bring, Kiss
                    My’s careful foraging process results in an aperitif that
                    emphasises the tangy juiciness of its primary ingredient.
                </p>
            </div>
        </section>
    );
};

export default ProductDetails;