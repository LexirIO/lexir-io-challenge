import { useState } from "react";

import Image from "next/image";

import MinusIcon from "../public/assets/minus.svg";
import PlusIcon from "../public/assets/plus.svg";

interface Props {
  volume: number;
  price: number;
}

const borderClasses = "border border-addToCartBorder rounded";
const amountButtonClasses = "flex justify-center basis-1/3 h-[48px]";

function AddToCart({ volume, price }: Props) {
  const [amount, setAmount] = useState(2); // Number of units to add to cart

  return (
    <div className="w-addToCart">
      {/* Row to select amount of units */}
      <div className="flex justify-between mb-2.5">
        {/* Bottle volume */}
        <div>
          <p
            className={`flex justify-center items-center w-[203px] h-[49px] ${borderClasses}`}
          >
            {volume}ml
          </p>
        </div>
        {/* Buttons to change amount */}
        <div
          className={`flex items-center h-[48px] w-[136px] border border-addToCartBorder rounded ${borderClasses}`}
        >
          <button
            className={amountButtonClasses}
            onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1);
              }
            }}
          >
            <Image src={MinusIcon} width={16} height={4} />
          </button>
          <div className="flex items-center justify-center basis-1/3 h-[32px] border-x border-addToCartBorder">
            {amount}
          </div>
          <button
            className={amountButtonClasses}
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            <Image src={PlusIcon} height={16} />
          </button>
        </div>
      </div>
      {/* Add to cart  */}
      <button className="flex items-center h-[49px] bg-primary rounded">
        <div className="flex justify-between px-10 font-bold w-addToCart">
          <p className="text-white ">Add to Cart</p>
          <p className="text-white">${(amount * price).toFixed(2)}</p>
        </div>
      </button>
    </div>
  );
}

export default AddToCart;
