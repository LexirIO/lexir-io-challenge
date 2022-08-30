import React from "react";
import Image from "next/image";
import box from "../../../assets/icons/box.svg";

interface Props {
  titles: string[];
}

const ProductCategories = ({ titles }: Props) => {
  return (
    <div className="flex self-start mb-8">
      <div className="mt-1.7 ml-6 ">
        <Image src={box} alt="location-pin" />
      </div>

      <div className="ml-3.5">
        <p className="text-location font-normal">Location</p>
        <div className="mt-3 flex flex-wrap">
          {titles.map((item) => (
            <p
              key={item}
              className="text-neutral-550 px-6 py-1 bg-neutral-70 mr-2 mb-2"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
