import React from "react";
import Image from "next/image";
import pin from "../../../assets/icons/cil_location-pin.svg";

interface Props {
  title: string;
}

const Location = ({ title }: Props) => {
  return (
    <div className="flex self-start mb-8">
      <div className="mt-1.7 ml-6 ">
        <Image src={pin} alt="location-pin" />
      </div>

      <div className="ml-3.5">
        <p className="text-location font-normal">Location</p>
        <p className="text-city font-normal text-neutral-550">{title}</p>
      </div>
    </div>
  );
};

export default Location;
