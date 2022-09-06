import { useState, useEffect } from "react";
import Image from 'next/image';

import Cottonbro from "../assets/pexels-cottonbro.png";

import Navigation from "./navigation";
import Brand from "@components/brand";
import Button from "@components/button";

import { BrandType } from "@components/brand";

import { brandsCollection } from "brands-data";

const Brands = () => {
    const [brands, setBrands] = useState<BrandType[]>([]);

    useEffect(() => {
        setBrands(brandsCollection);
    }, []);

    return (
        <>
            <Navigation />
            <div className="p-9">
                <h1 className="font-serifpro font-bold text-5xl not-italic text-light-black">
                    Brands
                </h1>
                <main className="mt-10 grid grid-cols-3 gap-x-20 gap-y-5">
                    {
                        brands &&
                            brands.map((brand, idx) => {
                                const {logo, title, subtitle, flag, place} = brand;

                                return (
                                    <div key={idx} className="">      
                                        <Brand logo={logo} title={title} subtitle={subtitle} flag={flag} place={place} />
                                    </div>
                                );
                            })
                    }
                </main>
                <section className="bg-light-grey mt-20 flex">
                <div className="p-6 ml-2 mr-5 mt-10">
                    <h2 className="mb-4 font-serifpro font-bold text-5xl text-light-black">
                        Have a brand you’d like to see on <span className="text-success">Lexir</span>?
                    </h2>
                    <p className="font-lato text-base font-normal">Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you'd like to see on Lexir, let us know.</p>
                    <div className="mt-20">
                        <Button>Suggest a Brand</Button>
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <Image className="absolute" src={Cottonbro} alt="Cottonbro" layout="responsive" objectFit="fill" height={394} width={608}/>
                </div>
            </section>
            </div>
        </>
    );
}

export default Brands;