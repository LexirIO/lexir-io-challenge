import Image from "next/image";
import React from "react";
import { ButtonComponent } from "../util/Button";

export function AsideComponent() {
  return (
    <div
      className="
        h-[708px] w-full lg:w-[80%] md:m-auto px-3
        mb-[20px] md:mt-0 lg:mr-[20px]
        p-[10px]
        flex flex-col justify-start items-center
        border-[1px] boder-[#F2F2F2]
        "
    >
      <div className="w-[215px] h-[75px] relative mx-auto">
        <Image
          src={"/images/aside/baldoriaLogo.svg"}
          alt="cart icon"
          layout="fill"
          objectFit="contain"
          className="h-full w-full"
        />
      </div>
      <div className=" w-[300px] h-[290px] p-0 mt-[65px]">
        <div className="w-[299px] h-[38px] relative mx-auto">
          <Image
            src={"/images/aside/baldoriaVermouth.svg"}
            alt="cart icon"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        </div>
        <p className="text-[16px] font-[400] leading-[25px] justify-start mt-[20px] h-[150px]">
          Badoria rosso is a red vermouth that balances fresh, herby bitter
          notes against. Kiss My Rhubarb takes its origins from an old
          handwritten recipe from co-creators Niels’ and Wouters’ rebellious
          grandparents.
        </p>
        <ButtonComponent
          title="Read More"
          className="
            w-full
            mt-[32px]
            text-neutralMain-500  text-center text-[20px]
            font-[500]"
        />
      </div>
      <div>
        <div
          className="
            flex justify-start items-center gap-x-[17px] 
            h-[100px]
            text-dafaultText 
            "
        >
          <div className="w-[24px] h-[24px] mt-[18px] ml-10 md:ml-0 relative ">
            <Image
              src={"/images/aside/locationPin.svg"}
              alt="cart icon"
              layout="fill"
              objectFit="contain"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center">
            <p
              className="`
                w-full flex justify-start items-center 
                text-[16px] font-[400] leading-[25px]
                mt-[40px] 
                "
            >
              Location
            </p>
            <p className="text-[20px]">London, United Kingdom</p>
          </div>
        </div>
        <div
          className="
            flex justify-start items-center gap-x-[17px] 
            w-[359px] h-[100px]
            text-dafaultText 
            "
        >
          <div className="w-[24px] h-[24px] mt-[18px] ml-10 md:ml-0  relative ">
            <Image
              src={"/images/aside/boxIcon.svg"}
              alt="cart icon"
              layout="fill"
              objectFit="contain"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center ">
            <p
              className="`
                w-full flex justify-start items-center 
                text-[16px] font-[400] leading-[25px]
                mt-[50px] mb-[12px]"
            >
              Product Categories
            </p>
            <div className="flex justify-center items-center gap-x-[8px]">
              <ButtonComponent
                title="Gin"
                className="
                h-[35px] w-[73px] 
                bg-grayPattern 
                flex justify-center items-center
                rounded-[4px] hover:brightness-90
                "
              />
              <ButtonComponent
                title="Vodka"
                className="
                h-[35px] w-[73px] 
                bg-grayPattern 
                flex justify-center items-center
                rounded-[4px] hover:brightness-90
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
