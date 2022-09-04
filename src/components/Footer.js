import Image from "next/image";
import logoWht from "../public/assets/logoWht.png";
import socials from "../public/assets/social-media.png";
import copyRight from "../public/assets/copyright.png";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center px-5 py-6 bg-[#2D2D2D] w-[1280px] h-[337px]">
                <div className="flex flex-col items-center justify-between pt-[20px] py-[30px] w-[1219px] h-[257px]  border-b border-[#8F8F8F]">
                    <div className="flex  items-start justify-between  py-[30px] pt-[0px] w-[1212px] h-[213px] ">
                        <div id="logoWht" className="">
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
                                <p>Lexir for Brands</p>
                                <p>Business Buyers</p>
                                <p>Sales Affiliates</p>
                            </div>
                            <div
                                id="platform"
                                className="flex flex-col items-start space-y-4"
                            >
                                <p className="text-[#8F8F8F] uppercase">
                                    Platform
                                </p>
                                <p>Resources</p>
                                <p>Pricing</p>
                                <p>Get Started</p>
                            </div>
                            <div
                                id="company"
                                className="flex flex-col items-start space-y-4"
                            >
                                {" "}
                                <p className="text-[#8F8F8F] uppercase">
                                    Company
                                </p>
                                <p>About</p>
                                <p>Contact</p>
                                <p>Legal</p>
                            </div>
                            <div
                                id="shop"
                                className="flex flex-col items-start space-y-4"
                            >
                                {" "}
                                <p className="text-[#8F8F8F] uppercase">
                                    Lexir shop
                                </p>
                                <p>Brands</p>
                                <p>Spirits</p>
                                <p>Wine</p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div
                            id="socials"
                            className="flex flex-row  items-start justify-end"
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
        </>
    );
};

export default Footer;
