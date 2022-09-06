import React from "react";
import Image from "next/image";
import Bottle from "@assets/bottle.svg";

const ProductDetails = () => {
    return (
        <section>
            <div className="w-[90%] flex justify-center bg-[#F9F9F9] rounded-md border border-[#E7E7E7] p-8"><Image src={Bottle} alt="brand-logo" /></div>
            <div className="w-[90%] mt-20">
                <h3 className="">Product Details</h3>
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