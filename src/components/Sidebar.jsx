import React from "react";
import baldoria from "../assets/images/baldoria-logo.png";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import {BsBox} from 'react-icons/bs';

function Sidebar() {
  return (
    <div className="flex flex-col mt-10 mx-auto border p-3 h-3/5 w-1/4">
      <div className="flex justify-center">
        <Image src={baldoria} alt="baldoria" className="flex justify-center" />
      </div>
      <div>
        <div className="mt-10">
          <h4 className="font-bold text-[34px] text-center ">
            Baldoria Vermouth
          </h4>
        </div>
        <div className="mt-2 flex justify-center">
          <p className="text-left text-[16px] w-72">
            Badoria rosso is a red vermouth that balances fresh, herby bitter
            notes against. Kiss My Rhubarb takes its origins from an old
            handwritten recipe from co-creators Niels’ and Wouters’ rebellious
            grandparents.
          </p>
        </div>
        <div className="mt-8 flex justify-center font-semibold text-fifth">
          <Link href="/">Read More</Link>
        </div>
      </div>
      <div className="mt-10 flex justify-start ml-6">
        <div className="flex justify-start relative right-2">
          <GrLocation size={22} />
        </div>
        <div className="flex flex-col">
          <p className="text-[16px]"> Location</p>
          <p className="text-[22px] font-medium text-sixth">
            {" "}
            London, United Kingdom
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-start ml-6">
        <div className="flex justify-start relative right-2">
          <BsBox size={22} />
        </div>
        <div className="flex flex-col">
          <p className="text-[16px]"> Product Categories</p>
          <div className="flex justify-around">
            <p className="text-[16px] font-semibold text-center bg-seventh rounded-sm text-sixth pl-4 pr-4">
              Gin
              </p>
              <p className="text-[16px] font-semibold text-center bg-seventh rounded-sm text-sixth pl-2 pr-2">
              Vodka
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
