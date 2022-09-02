import { ButtonComponent } from "@components/util/Button";
import Image from "next/image";
import React from "react";
import ListAnchorComponent from "./listAnchor";

export default function FooterComponent() {
  return (
    <footer
      className="
      bg-footerBg 
      
      flex flex-col justify-center items-center md:justify-start md:items-start
      pt-[42px] md:px-[35px] 
      "
    >
      <div
        className="
        flex flex-col justify-center items-center lg:flex-row md:justify-between md:items-start 
        w-[100%] mb-[21px]"
      >
        <div
          className="w-[500px]  lg:w-[105px] h-[40px] md:h-[24px] ml-[13px] relative 
            md:flex md:justify-center md:w-[100%] md:mb-10"
        >
          <Image
            src={"/images/logoWhite.svg"}
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        </div>
        <div
          className="
            flex flex-col justify-center items-center md:items-start md:justify-center md:flex-row md:w-[100%]
            lg:ml-[120px] gap-y-[55px] md:gap-[110px] mt-[40px] md:mt-0"
        >
          <ListAnchorComponent
            title="community"
            listAnchor={[
              "lexir for brands",
              "business buyers",
              "sales affiliates",
            ]}
          />
          <ListAnchorComponent
            title="Plataform"
            listAnchor={["resources", "pricing", "get started"]}
          />
          <ListAnchorComponent
            title="company"
            listAnchor={["about", "contact", "legal"]}
          />
          <ListAnchorComponent
            title="lexir shop"
            listAnchor={["brands", "spirits", "wine", "blog"]}
          />
        </div>
        <div
          className="
          flex justify-center items-center gap-x-4 mt-10 lg:mt-0 md:w-[100%] md:mt-5
          mb-[10px] md:mb-[0] lg:w-[132px] md:gap-x-[12px]"
        >
          <ButtonComponent
            className="relative   h-[40px] w-[40px] md:h-[35px] md:w-[35px] cursor-pointer"
            icon={
              <Image
                src={"/images/footer/mediumIcon.svg"}
                alt="medium icon"
                layout="fill"
                objectFit="contain"
                className="h-full w-full"
              />
            }
          />
          <ButtonComponent
            className="relative  h-[40px] w-[40px] md:h-[35px] md:w-[35px] cursor-pointer"
            icon={
              <Image
                src={"/images/footer/facebookIcon.svg"}
                alt="facebook icon"
                layout="fill"
                objectFit="contain"
                className="h-full w-full"
              />
            }
          />
          <ButtonComponent
            className="relative  h-[32px] w-[32px] md:h-[27px] md:w-[27px] cursor-pointer"
            icon={
              <Image
                src={"/images/footer/instagramIcon.svg"}
                alt="instagram icon"
                layout="fill"
                objectFit="contain"
                className="h-full w-full"
              />
            }
          />
          <ButtonComponent
            className="relative   h-[40px] w-[40px] md:h-[35px] md:w-[35px] cursor-pointer"
            icon={
              <Image
                src={"/images/footer/linkedinIcon.svg"}
                alt="exclude icon"
                layout="fill"
                objectFit="contain"
                className="h-full w-full"
              />
            }
          />
        </div>
      </div>
      <hr className="text-secundaryFont w-[100%]" />
      <div className="flex justify-between items-center w-[100%] text-[16px] h-full p-5 md:my-[8px]  md:p-0">
        <p className="text-white font-light">© 2022 Lexir Inc.</p>
        <div className="flex gap-x-[64px] text-white">
          <a href="#" className="cursor-poiter">
            Privacy
          </a>
          <a href="#" className="cursor-poiter">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
}
