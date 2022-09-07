import React from "react";
import Image from "next/image";
import NoseIcon from "@assets/nose.svg";
import TongueIcon from "@assets/tongue.svg";
import WineIcon from "@assets/wine.svg";
import DacingIcon from "@assets/dancing.svg";

const ProductDescription = () => {
    return (
        <section className="mt-20">
            <h3 className="font-bold">Tasting notes</h3>
            <div className="flex justify-between mt-8 w-[90%]">
                <Image src={NoseIcon} alt="icon" />
                <ul className="w-full flex justify-between list-outside list-disc ml-8">
                    <li className="text-white">
                        <span className="list">ASTRINGENT</span>
                    </li>
                    <li className="text-[#8F8F8F]">
                        <span className="list">FRUITY</span>
                    </li>
                    <li className="text-[#8F8F8F]">
                        <span className="list">COMPLEX</span>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between mt-8 w-[90%]">
                <Image src={TongueIcon} alt="icon" />
                <ul className="w-full flex justify-between list-outside list-disc ml-8">
                    <li className="text-white">
                        <span className="list">BITTER</span>
                    </li>
                    <li className="text-[#8F8F8F]">
                        <span className="list">FLAMBOYANT</span>
                    </li>
                    <li className="text-[#8F8F8F]">
                        <span className="list">BRIGHT</span>
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <h3 className="font-bold">Flavour Intensity</h3>
                <div className="flex justify-between mt-4">
                    <div className="level-dark"/>
                    <div className="level-dark"/>
                    <div className="level-dark"/>
                    <div className="level-grey"/>
                    <div className="level-grey"/>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-bold">Suggested Use</h3>
                <div className="flex justify-between mt-8 w-[63%] xl:w-[55%]">
                    <div className="flex justify-between items-center p-4 h-[32px] bg-[#F9F9F9]">
                        <p className="text-xs mr-1.5">In a cocktail</p>
                        <Image src={WineIcon} alt="icon" />
                    </div>
                    <div className="flex justify-between items-center p-4 h-[32px] bg-[#F9F9F9]">
                        <p className="text-xs mr-1.5">At a party</p>
                        <Image src={DacingIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
