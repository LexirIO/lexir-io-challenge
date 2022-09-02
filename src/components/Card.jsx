import React from "react";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";

function Card() {
  return (
    <div>
      <div className="flex flex-row justify-between mt-10 mb-28 rounded-md">
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product1} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product2} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product3} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product4} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-18 mb-28 rounded-md">
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product1} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product2} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product3} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product4} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-18 mb-28 rounded-md">
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product1} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product2} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product3} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product4} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-18 mb-28 rounded-md">
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product1} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product2} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product3} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product4} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-18 mb-28 rounded-md">
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product1} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product2} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product3} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm w-44 h-56 ml-8">
          <div className="bg-third p-3 flex justify-center">
            <Image src={product4} alt="logo" />
          </div>
          <div className="bg-white shadow-md">
            <div className="flex w-44 h-10 justify-between pt-1 pl-2 pr-2 ">
              <p className="text-xs font-semibold">MR GASTON</p>
              <p className="text-xs text-fourth font-semibold">€32</p>
            </div>
            <div className="flex justify-between pt-1 pl-2 pr-2 pb-3 ">
              <p className="text-xs text-secondary font-semibold ">BRANDY</p>
              <p className="text-xs bg-third rounded-md p-1">
                <BsPlusLg />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
