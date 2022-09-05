import React from "react";
import Image from "next/image";
import Button from "@components/button/Button";
import MenBottles from "../../assets/men-bottles.svg";

const Brand = () => {
    return (
        <section className="d-flex">
            <div>
                <h2>
                    Have a brand you’d like to see on<span>Lexir?</span>
                </h2>
                <p>
                    Lexir is always looking to connect with new exciting craft
                    brands from around the world. If you have a brand in mind
                    that you&aposd like to see on Lexir, let us know.
                </p>
                <Button type="button">Suggest a Brand</Button>
            </div>
            <Image src={MenBottles} alt="brand-logo" />
        </section>
    );
};

export default Brand;
