import React from "react";
import BaldoriaLogo from "../assets/images/baldoria-logo.png";
import LocationIcon from "../assets/icons/location.png";
import BoxIcon from "../assets/icons/box.png";

export default function BrandCard() {
  return (
    <div className="flex flex-col items-center border-2 border-[#F2F2F2] w-[379px] max-w-[379px] h-[650px] pb-10">
      <img
        className="pt-4 pb-10"
        src={BaldoriaLogo.src}
        alt="Baldoria logo"
        width={215}
        height={76}
      />
      <div className="w-[300px] max-w-[300px]">
        <p className="font-bold	text-[34px] font-brand">Baldoria Vermouth</p>
        <p className="text-primary">
          Badoria rosso is a red vermouth that balances fresh, herby bitter
          notes against. Kiss My Rhubarb takes its origins from an old
          handwritten recipe from co-creators Niels’ and Wouters’ rebellious
          grandparents.
        </p>
        <button className="text-[color:#1C8C64] text-center	w-full my-5 font-bold	text-lg">
          Read more
        </button>
      </div>
      <div className="w-[359px] flex pt-10">
        <img
          src={LocationIcon.src}
          className="pt-1.5 px-2.5 h-7"
          alt="Location"
        />
        <div>
          <p>Location</p>
          <p className="text-thirdMain text-[20px]">London, United Kingdom</p>
        </div>
      </div>
      <div className="w-[359px] flex pt-10">
        <img src={BoxIcon.src} alt="Location" className="pt-1.5 px-2.5 h-7" />
        <div>
          <p className="mb-2">Product Categories</p>
          <div className="flex gap-2">
            <span className="bg-[#F9F9F9] px-6 py-1 text-thirdMain rounded">
              Gin
            </span>
            <span className="bg-[#F9F9F9] px-6 py-1 text-thirdMain rounded">
              Vodka
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
