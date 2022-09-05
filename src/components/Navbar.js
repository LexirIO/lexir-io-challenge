import Image from "next/image";
import houseIcon from "../public/assets/navbar/IconsHouse.png";
import ChevronRightIcon from "../public/assets/navbar/IconsChevronRight.png";

const Navbar = () => {
    return (
        <nav>
            <div className="text-black w-full h-[64px] relative font-main ">
                <div className=" flex absolute bottom-0 left-[34px]  h-5 w-[458px]">
                    <div className="flex items-center justify-between  h-full w-[81px] mr-[14px]">
                        <div className="pt-1">
                            <Image src={houseIcon} alt="house icon" />
                        </div>
                        <div className=" hover:text-rose-300 duration-100 hover:scale-105 ">
                            Home
                        </div>
                    </div>
                    <div className="flex items-center justify-between  h-full w-[82px] mr-[14px]">
                        <div className="pt-1">
                            <Image
                                src={ChevronRightIcon}
                                alt="right arrow icon"
                            />
                        </div>
                        <div className=" hover:text-rose-300 duration-100 hover:scale-105 ">
                            Spirits
                        </div>
                    </div>
                    <div className="flex items-center justify-between  h-full w-[94px] mr-[14px]">
                        <div className="pt-1">
                            <Image
                                src={ChevronRightIcon}
                                alt="right arrow icon"
                            />
                        </div>
                        <div className=" hover:text-rose-300 duration-100 hover:scale-105 ">
                            Kiss My
                        </div>
                    </div>
                    <div className="flex items-center justify-between  h-full w-[158px]">
                        <div className="pt-1">
                            <Image
                                src={ChevronRightIcon}
                                alt="right arrow icon"
                            />
                        </div>
                        <div className=" hover:text-rose-300 duration-100 hover:scale-105 ">
                            Kiss My Rhubarb
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
