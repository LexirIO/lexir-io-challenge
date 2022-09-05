import React from "react";
import Image from "next/image";
import logoVector from "@assets/footer/logo (1).svg";
import linkedInVector from "@assets/footer/social_media/linkedIn.svg";
import mediumVector from "@assets/footer/social_media/medium.svg";
import facebookVector from "@assets/footer/social_media/facebook.svg";
import instagramVector from "@assets/footer/social_media/instagram.svg";

export const LexirFooter = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center py-[2rem]  gap-[0.8rem] bg-[#2D2D2D] w-[100%] px-[3.05rem] m2vsm:px-0">
      <div className=" w-[100%] flex flex-col justify-between items-start pt-[2.2rem] pr-[0.2rem] pb-0  m2vsm:px-0 ">
        <div className="w-[100%] border-b-[0.1rem] border-[#8F8F8F] flex flex-row justify-between items-start    pb-[2.1rem] mmd:flex-col">
          <div className="relative w-[100px] h-[100px] cursor-pointer">
            <Image src={logoVector} layout="responsive"></Image>
          </div>

          <div className="  flex flex-row items-start p-0 gap-[8rem] mmd:self-center msm:gap-[4rem] mvsm:text-[1.2rem] m2vsm:gap-[0rem] m2vsm:w-[100%] m2vsm:justify-between">
            <ul className="flex flex-col items-start p-0 text-[#FFFFFF] font-Lato font-[500] text-[1.6rem] leading-[3.2rem] mvsm:text-[1.2rem]">
              <li className="uppercase text-[#8F8F8F]">Community</li>
              <li className="cursor-pointer">Lexir for Brands</li>
              <li className="cursor-pointer">Bussiness Buyers</li>
              <li className="cursor-pointer">Sales Affiliates</li>
            </ul>

            <ul className="flex flex-col items-start p-0 text-[#FFFFFF] font-Lato font-[500] text-[1.6rem] leading-[3.2rem] mvsm:text-[1.2rem]">
              <li className="uppercase text-[#8F8F8F]">Platform</li>
              <li className="cursor-pointer">Resources</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Get Started</li>
            </ul>

            <ul className="flex flex-col items-start p-0 text-[#FFFFFF] font-Lato font-[500] text-[1.6rem] leading-[3.2rem] mvsm:text-[1.2rem]">
              <li className="uppercase text-[#8F8F8F]">Company</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Legal</li>
            </ul>

            <ul className="flex flex-col items-start p-0 text-[#FFFFFF] font-Lato font-[500] text-[1.6rem] leading-[3.2rem] mvsm:text-[1.2rem]">
              <li className="uppercase text-[#8F8F8F]">Lexir Shop</li>
              <li className="cursor-pointer">Brand</li>
              <li className="cursor-pointer">Spirits</li>
              <li className="cursor-pointer">Wine</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="flex flex-row items-start gap-[0.96rem]">
            <Image className="cursor-pointer" src={mediumVector}></Image>
            <Image className="cursor-pointer" src={facebookVector}></Image>
            <Image className="cursor-pointer" src={instagramVector}></Image>
            <Image className="cursor-pointer" src={linkedInVector}></Image>
          </div>
        </div>
      </div>
      <div className=" w-[100%] flex flex-row  justify-between items-start px-[0.4rem]   cursor-default">
        <span className="font-Lato font-[300] text-[1.6rem] leading-[3.2rem] text-[#FFFFFF] mvsm:text-[1.2rem]">
          © 2022 Lexir Inc.
        </span>
        <div className="font-Lato font-[500] text-[1.6rem] leading-[3.2rem] text-[#FFFFFF] flex flex-row gap-[6.4rem]  mvsm:gap-[0.5rem]  mvsm:text-[1.2rem] cursor-pointer">
          <span>Privacy</span>
          <span>Terms of service</span>
        </div>
      </div>
    </footer>
  );
};

export default LexirFooter;
