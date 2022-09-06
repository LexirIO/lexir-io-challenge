import React from "react";
import Image from "next/image";
import NoseIcon from "@assets/nose.svg";
import TongueIcon from "@assets/tongue.svg";
import WineIcon from "@assets/wine.svg";
import DacingIcon from "@assets/dancing.svg";
import DotIcon from "@assets/dot.svg";

const ProductDescription = () => {
    return (
        <section className="mt-32">
            <p>Tasting notes</p>
            <div className="flex justify-between mt-12">
                <Image src={NoseIcon} alt="icon" />
                <ul className="flex list-outside list-disc">
                    <li className="text-[#8F8F8F]-500">
                        <span>ASTRINGENT</span>
                    </li>
                    <li className="text-[#8F8F8F]-500">
                        <span>FRUITY</span>
                    </li>
                    <li className="text-[#8F8F8F]-500">
                        <span>COMPLEX</span>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between mt-12">
                <Image src={TongueIcon} alt="icon" />
                <ul className="flex list-outside list-disc">
                    <li className="text-[#8F8F8F]-500">
                        <span>BITTER</span>
                    </li>
                    <li className="text-[#8F8F8F]-500">
                        <span>FLAMBOYANT</span>
                    </li>
                    <li className="text-[#8F8F8F]-500">
                        <span>BRIGHT</span>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <h3>Flavour Intensity</h3>
                <div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className="mt-12">
                <h3>Suggested Use</h3>
                <div className="flex justify-between mt-10">
                    <div className="flex">
                        <p>In a cocktail</p>
                        <Image src={WineIcon} alt="icon" />
                    </div>
                    <div className="flex">
                        <p>At a party</p>
                        <Image src={DacingIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
