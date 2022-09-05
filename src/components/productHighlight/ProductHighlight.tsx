import React, { useEffect, useState } from "react";
import Image from "next/image";
import highlightedProduct from "@assets/productHighlights/packshot-kiss-my-rhubarb.svg";
import belgiumFlag from "@assets/productHighlights/belgium.svg";
import plusIcon from "@assets/productHighlights/Icons B2B_plus.svg";
import minusIcon from "@assets/productHighlights/Icons B2B_minus.svg";
import { Snackbar } from "@mui/material";
import CustomizedAddtoCartWithSnackbar from "@components/snackBar/CustomAddtoCartWithSnackBar";

export const ProductHighlight = (): JSX.Element => {
  //initial state for the amount of products the user wants to add to cart. could be values from an external API-CMS.
  const [amount, setAmount] = useState<number>(1);
  //the price of one unit. not needed to add it as state. could be provided from an api call
  const unitPrice: number = 115.165;
  //Products price as of total. We declare it as string to make use of the .toFixed() method so we only have 2 decimals.
  const [productsPrice, setProductsPrice] = useState<string>(
    unitPrice.toFixed(2)
  );

  const increment = (): void => {
    setAmount((prevstate) => prevstate + 1);
  };

  const decrement = (): void => {
    //prevent from "hacky approaches to change the amount like javascript from the browser"
    //Defensive programming approach
    amount < 1 ? setAmount(1) : "";
    //prevent from decrementing below 1
    amount === 1 ? "" : setAmount((prevstate) => prevstate - 1);
  };
  // whenever the amount changes , calculate the sum total of price.

  useEffect(() => {
    setProductsPrice((amount * unitPrice).toFixed(2));
  }, [amount]);

  return (
    <section className="flex flex-row align-start pt-[4rem] pb-[4rem] pl-[3.4rem] w-[100%] gap-[7.4rem] pr-[3.5rem] mlg:flex-col mlg:items-center">
      <figure className="pt-[4rem] pb-[4.5rem] bg-[#F9F9F9] max-w-[74.8rem] w-[100%]  flex justify-center rounded-[0.6rem] border-solid border-2 border-[#E7E7E7]">
        <div className="">
          <Image
            className=""
            src={highlightedProduct}
            objectFit="contain"
            alt=""
          ></Image>
        </div>
      </figure>
      <article className="flex flex-col items-start p-0  max-w-[38.9rem] ">
        <div className="flex flex-col items-start pt-[1rem] pr-[1rem] pb-[1rem] pl-[0.9rem] ">
          <h1 className=" font-sourceSerif font-[600] text-[4.8rem] leading-[5.6rem] p-0">
            Kiss My Rhubarb
          </h1>
          <h5
            className=" font-Lato font-[700] text-[2rem] leading-[2.4rem] text-[#CCCCCC] uppercase
"
          >
            Aperatif
          </h5>
        </div>
        <div className="flex flex-row items-center justify-between w-[100%] max-w-[37.9rem] pb-[1rem]">
          <div className="flex flex-column  pt-[1rem] pl-[1rem] justify-start items-center  gap-[1.7rem] ">
            <Image
              className=""
              src={belgiumFlag}
              objectFit="contain"
              alt=""
            ></Image>

            <h5 className=" font-Lato font-[700] text-[1.6rem] leading-[2rem] uppercase">
              Izegem, Belgium{" "}
            </h5>
          </div>
          <div className="flex flex-row p-0 gap-[20rem]  pt-[1rem] font-Lato font-[700] text-[1.6rem] leading-[2rem] uppercase pr-[0.4rem] text-[#2D2D2D] ">
            <h1>21% abv</h1>
          </div>
        </div>
        <p className="pl-[0.9rem] pr-[0.9rem] pb-[1rem] font-Lato font-[400] text-[1.6rem] leading-[2.5rem]">
          Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses
          bright and zesty supporting ingredients like pink grapefruit and lemon
          verbena to create an aperitif perfectly designed to pair with hot
          summery nights.
        </p>
        <div className="flex flex-row items-start pt-[4rem] gap-[4.1rem] pl-[0.9rem] w-[100%] m2vsm:gap-0 m2vsm:justify-between">
          <div className="border-solid border-[0.2rem] border-[#F2F2F2] py-[1.2rem] px-[7.9rem] rounded-[0.4rem] font-Lato font-[400] text-[1.6rem] leading-[2.5rem] h-[4.8rem] m2vsm:px-[4rem]">
            700ml
          </div>
          <div className=" w-[100%] max-w-[13.6rem] h-[4.8rem] justify-self-end border-solid border-[0.2rem] border-[#F2F2F2]  rounded-[0.4rem] flex flex-row items-center">
            <button
              type="button"
              className="flex-1 border-r-[0.2rem] border-solid border-[#F2F2F2]"
            >
              <div
                className="relative w-[2.4rem] h-[2.4rem] m-auto"
                onClick={decrement}
              >
                <Image
                  className=""
                  src={minusIcon}
                  layout="fill"
                  alt=""
                ></Image>
              </div>
            </button>
            <p className="flex-1 text-[1.6rem] leading-[2.5rem] flex flex-col items-center">
              {amount}
            </p>
            <button
              type="button"
              className="inline-block flex-1 border-l-[0.2rem] border-[#F2F2F2] border-solid "
            >
              <div
                className="relative w-[2.4rem] h-[2.4rem] m-auto"
                onClick={increment}
              >
                <Image className="" src={plusIcon} layout="fill" alt=""></Image>
              </div>
            </button>
          </div>
        </div>
        {/* button with the desired functionallity plus a snackbar on click, showing a successful addition to the cart. */}
        <CustomizedAddtoCartWithSnackbar
          productsPrice={productsPrice}
        ></CustomizedAddtoCartWithSnackbar>
      </article>
    </section>
  );
};

export default ProductHighlight;
