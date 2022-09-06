import React from "react";
import Image from "next/image";
import Button from "@components/button/Button";
import MenBottles from "@assets/men-bottles.svg";

const Brand = () => {
    return (
        <section className="flex mt-32">
            <div className="bg-[#F9F9F9] p-8">
                <h2 className="text-5xl font-bold">
                    Have a brand you’d like <br/> to see on <span className="text-[#1C8C64]">Lexir?</span>
                </h2>
                <p className="w-[93%] mt-8 leading-6">
                    Lexir is always looking to connect with new exciting craft
                    brands from around the world. If you have a brand in mind
                    that you&aposd like to see on Lexir, let us know.
                </p>
                <Button type="button" className="w-[244px] h-[49px] bg-[#2D2D2D] rounded text-white mt-20">Suggest a Brand</Button>
            </div>
            <div className="w-full relative">
            <Image src={MenBottles} alt="brand-logo" layout="responsive"/>
            </div>
        </section>
    );
};

export default Brand;
