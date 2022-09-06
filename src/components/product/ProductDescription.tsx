import React from "react";
import Image from "next/image";
import NoseIcon from "@assets/nose.svg";
import TongueIcon from "@assets/tongue.svg";
import WineIcon from "@assets/wine.svg";
import DacingIcon from "@assets/dancing.svg";

const ProductDescription = () => {
    return (
        <section className="mt-32">
            <p>Tasting notes</p>
            <div className="flex justify-between mt-12">
                <Image src={NoseIcon} alt="icon" />
                <ul className="flex">
                    <li>ASTRINGENT</li>
                    <li>FRUITY</li>
                    <li>COMPLEX</li>
                </ul>
            </div>
            <div className="flex justify-between mt-12">
                <Image src={TongueIcon} alt="icon" />
                <ul className="flex">
                    <li>BITTER</li>
                    <li>FLAMBOYANT</li>
                    <li>BRIGHT</li>
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
