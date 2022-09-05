import React from "react";
import Image from "next/image";
import productSMellVector from "@assets/productDetails/productDetailsSmell.svg";
import productTasteVector from "@assets/productDetails/productDetailsTaste.svg";
import cocktailVector from "@assets/productDetails/cocktailVector.svg";
import partyVector from "@assets/productDetails/partyVector.svg";

export const ProductDetails = (): JSX.Element => {
  return (
    <section className="py-[4rem] pr-[3.4rem] pl-[2.4rem] w-[100%] h-[100%] flex flex-row items-start mlg:flex-col  ">
      <article className="pl-[1rem] pb-[1rem] pr-[2rem] flex flex-col items-start gap-[3.41rem] w-[100%] max-w-[84.1rem] h-[100%] ">
        <header className="">
          <h1 className=" font-Lato font-[700] text-[2.4rem] leading-[3rem]">
            Product Details
          </h1>
        </header>
        <div className="flex flex-row items-start gap-[1rem] max-w-[69.7rem] w-[100%] h-[100%]">
          <p className="text-[#2D2D2D] font-Lato font-[400] text-[1.6rem] leading-[2.5rem] ">
            Kiss My Rhubarb takes its origins from an old handwritten recipe
            from co-creators Niels’ and Wouters’ rebellious grandparents. Using
            carefully hand-selected stalks of rhubarb, and locally-sourced
            flowers and herbs, this summery aperitif perfectly expresses the
            brimming liveliness that characterizes the Belgian countryside in
            bloom.
            <br />
            <br />
            Kiss My Rhubarb is created in collaboration with local producers in
            Izegem that select only the freshest stalks of rhubarb using
            attentive and sustainable practices. By avoiding the pitfalls of
            overproduction and diminished flavour that large-scale harvesting
            methods can bring, Kiss My’s careful foraging process results in an
            aperitif that emphasises the tangy juiciness of its primary
            ingredient.
          </p>
        </div>
      </article>
      <article className="flex flex-col items-start pl-[0.9rem] gap-[3rem]  w-[100%] max-w-[35.5rem]">
        <header>
          <h1 className="font-Lato text-[1.6rem] font-[700] leading-[2rem]  text-[#2D2D2D]">
            Tasting Notes
          </h1>
        </header>
        <div className="flex flex-row items-center gap-[3.8rem]  ">
          <div className="relative w-[2.2rem] h-[2.7rem]">
            <Image src={productSMellVector} layout="fill" />
          </div>
          <ul className="flex flex-row items-center gap-[0.8rem] font-Lato text-[#2D2D2D] leading-[2.5rem] font-[400] text-[1.6rem] uppercase hover:cursor-default  m2vsm:text-[1.1rem]">
            <li>Astrigent</li>
            <li className="w-[0.4rem] h-[0.4rem] bg-[#8F8F8F] rounded-[50%]"></li>
            <li>Fruity</li>
            <li className="w-[0.4rem] h-[0.4rem] bg-[#8F8F8F] rounded-[50%]"></li>
            <li>Complex</li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-[3.8rem] ">
          <div className="relative w-[2.2rem] h-[2.7rem]">
            <Image src={productTasteVector} layout="fill" />
          </div>

          <ul className="flex flex-row items-center gap-[0.8rem] font-Lato text-[#2D2D2D] leading-[2.5rem] font-[400] text-[1.6rem] uppercase hover:cursor-default m2vsm:text-[1.1rem]">
            <li>Bitter</li>
            <li className="w-[0.4rem] h-[0.4rem] bg-[#8F8F8F] rounded-[50%]"></li>
            <li>Flamboyant</li>
            <li className="w-[0.4rem] h-[0.4rem] bg-[#8F8F8F] rounded-[50%]"></li>
            <li>Bright</li>
          </ul>
        </div>
        <div className="flex flex-col items-start p-0 gap-[1.6rem] w-[100%] m2vsm:gap-0 ">
          <header>
            <h1 className="font-Lato text-[1.6rem] font-[700] leading-[2rem]  text-[#2D2D2D]">
              Flavour Intensity
            </h1>
          </header>
          <span className="flex flex-row items-start justify-start  w-[100%] max-w-[37.3rem] h-[0.2rem] gap-[0.36rem] ">
            <span className="flex-1 max-w-[7.2rem] h-[0.2rem] bg-[#8F8F8F] "></span>
            <span className="flex-1 max-w-[7.2rem] h-[0.2rem] bg-[#8F8F8F] "></span>
            <span className="flex-1 max-w-[7.2rem] h-[0.2rem] bg-[#8F8F8F] "></span>
            <span className="flex-1 max-w-[7.2rem] h-[0.2rem] bg-[#CACACA] "></span>
            <span className="flex-1 max-w-[7.2rem] h-[0.2rem] bg-[#CACACA] "></span>
          </span>
        </div>
        <h5 className="font-Lato text-[1.6rem] font-[700] leading-[2rem]  text-[#2D2D2D]">
          Suggested Use
        </h5>
        <div className="flex flex-row items-start p-0 gap-[0.8rem]">
          <div className="rounded-[0.4rem] w-[10.3rem] h-[3.2rem] bg-[#F9F9F9] flex flex-row items-center justify-center gap-[0.8rem]">
            <span className="font-Lato font-[400] text-[1.2rem] leading-[2rem] text-[#2D2D2D]">
              In a Cocktail
            </span>
            <Image
              className=""
              src={cocktailVector}
              objectFit="contain"
              alt=""
            ></Image>
          </div>

          <div className=" rounded-[0.4rem] w-[10.3rem] h-[3.2rem] bg-[#F9F9F9] flex flex-row items-center justify-center gap-[0.8rem]">
            <span className="font-Lato font-[400] text-[1.2rem] leading-[2rem] text-[#2D2D2D]">
              At a party
            </span>
            <Image
              className=""
              src={partyVector}
              objectFit="contain"
              alt=""
            ></Image>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
