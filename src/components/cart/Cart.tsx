import React from "react";
import Image from "next/image";
import PlusIcon from "@assets/plus.svg";
import MinusIcon from "@assets/minus.svg";
import Button from "@components/button/Button";

const Cart = () => {
    return (
        <section>
            <h2 className="text-5xl leading-10 font-bold">Kiss My Rhubarb</h2>
            <p className="text-[#CCCCCC] font-bold text-xl leading-6 mt-4">APERITIF</p>
            <div>
                <div></div>
            </div>
            <p className="leading-6 mt-4">
                Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It
                uses bright and zesty supporting ingredients like pink
                grapefruit and lemon verbena to create an aperitif perfectly
                designed to pair with hot summery nights.
            </p>
            <div className="flex justify-between mt-12 mb-16">
                <div className="w-[203px] h-[49px] flex justify-center items-center border border-[#F2F2F2] rounded">700ml</div>
                <div className="w-[160px] h-[48px] flex justify-between items-center border border-[#F2F2F2] rounded p-4">
                    <Image src={PlusIcon} alt="plus icon" className="cursor-pointer"/>
                    <p className="w-[50px] flex justify-center border-x-2 border-[#F2F2F2]">2</p>
                    <Image src={MinusIcon} alt="plus icon" className="cursor-pointer"/>
                </div>
            </div>
            <Button type="button" className="w-full h-[49px] px-4 bg-black text-white flex justify-between items-center rounded">
                    <p>Add to Cart</p>
                    <p>$230.33</p>
            </Button>
        </section>
    );
};

export default Cart;
