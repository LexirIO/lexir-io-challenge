import Image from "next/image";
import logoWht from "../public/assets/footer/logoWht.png";
import socials from "../public/assets/footer/social-media.png";
import copyRight from "../public/assets/footer/copyright.png";

const Footer = () => {
    return (
        <div className="flex justify-cemter w-full font-main">
            <div className="flex flex-col items-center justify-center ml-[40px]  py-6 bg-[#2D2D2D] w-[1280px] h-[337px]">
                <div className="flex flex-col items-center justify-between pt-[20px] py-[30px] w-[1219px] h-[257px]  border-b border-[#8F8F8F]">
                    <div className="flex  items-start justify-between  py-[30px] pt-[0px] w-[1212px] h-[213px] ">
                        <div id="logoWht" className=" cursor-pointer">
                            {" "}
                            <Image src={logoWht} className="" alt="logo" />
                        </div>
                        <div className=" flex flex-row text-white justify-between  pt-2 w-[733px]">
                            <div
                                id="community"
                                className="flex flex-col items-start  space-y-4 "
                            >
                                <p className="text-[#8F8F8F] uppercase">
                                    Community
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Lexir for Brands
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Business Buyers
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Sales Affiliates
                                </p>
                            </div>
                            <div
                                id="platform"
                                className="flex flex-col items-start space-y-4"
                            >
                                <p className="text-[#8F8F8F] uppercase">
                                    Platform
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Resources
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Pricing
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Get Started
                                </p>
                            </div>
                            <div
                                id="company"
                                className="flex flex-col items-start space-y-4"
                            >
                                {" "}
                                <p className="text-[#8F8F8F] uppercase">
                                    Company
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    About
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Contact
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Legal
                                </p>
                            </div>
                            <div
                                id="shop"
                                className="flex flex-col items-start space-y-4"
                            >
                                {" "}
                                <p className="text-[#8F8F8F] uppercase">
                                    Lexir shop
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Brands
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Spirits
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Wine
                                </p>
                                <p className="hover:scale-105 duration-75 hover:text-rose-300 cursor-pointer">
                                    Blog
                                </p>
                            </div>
                        </div>
                        <div
                            id="socials"
                            className="flex flex-row  items-start justify-end cursor-pointer"
                        >
                            <Image src={socials} alt="socals" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[1219px] pt h-[32px] mt-3">
                    <div>
                        <Image src={copyRight} alt="copyright" />
                    </div>
                    <div className="flex items-center ">
                        <div className=" text-gray-500">Privacy</div>
                        <div className="pl-[64px] text-gray-500">
                            Terms of Service
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
