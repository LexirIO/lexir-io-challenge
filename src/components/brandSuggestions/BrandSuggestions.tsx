import suggestionImage from "@assets/brandSuggestions/pexels-cottonbro-4254032 (1).png";
import Image from "next/image";
import React from "react";

export const BrandSuggestions = () => {
  return (
    <section className="min-h-[39.4rem] max-h-[100%]  pr-[3.35rem] flex flex-row items-start p-0 w-[100%] pl-[3.35rem] mlg:flex-col mlg:items-center ">
      <article className=" h-[100%] min-h-[39.4rem] flex flex-col justify-center  gap-[2.8rem] items-start pl-[3.4rem] bg-[#F9F9F9] flex-1">
        <div className="  flex flex-col justify-center  gap-[2.3rem] pr-[1.5rem] pt-[5.45rem]">
          <header>
            <h1 className=" text-[#2D2D2D] font-sourceSerif font-[700] leading-[5.6rem] text-[5.0rem]">
              Have a brand you'd like to see on{" "}
              <span className="text-[#1C8C64]">Lexir</span>?
            </h1>
          </header>
          <p className=" text-[#000000] text-opacity-70 font-Lato font-[400] text-[1.6rem] leading-[2.5rem]">
            Lexir is always looking to connect with new exciting craft brands
            from around the world. If you have a brand in mind that you'd like
            to see on Lexir, let us know.
          </p>
          <button
            type="button"
            className="flex flex-row justify-center bg-[#2D2D2D] rounded-[0.4rem] border border-[#F2F2F2] border-solid  w-[100%] max-w-[24.4rem]  py-[1.2rem]  mlg:self-center"
          >
            <span className="text-white font-Lato font-[700] text-[1.6rem] leading-[2.5rem]">
              Suggest a Brand
            </span>
          </button>
        </div>
      </article>

      <Image src={suggestionImage} objectFit="contain" />
    </section>
  );
};

export default BrandSuggestions;
