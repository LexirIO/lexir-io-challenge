import Image from "next/image";
import productImage from "../public/assets/packshot-kiss-my-rhubarb.png";

const ProductDescription = () => {
    return (
        <div className="flex w-full h-[568px] text-black ">
            <div className="flex flex-col items-center w-[748px] h-[488px] my-10 ml-[34px] bg-rose-100 border border-rose-200">
                <div className=" w-[141px] h-[403px] pt-10 py-[303.5px] pb-[45px] ">
                    <Image src={productImage} alt="product" />
                </div>
            </div>
            <div className="  flex flex-col items-center w-[389px] h-[440px] mt-10 mr-[35px] mb-[88px] ml-[74px] bg-slate-400 ">
                <div className="bg-red-400 text-5xl font-bold">
                    <h1 className="font-title pt-2.5">Kiss My Rhubarb</h1>
                    <div className=" text-base  uppercase font-bold text-gray-200">
                        Aperitif
                    </div>
                </div>
                <div className="bg-red-100 w-[371px] h-[24px] mr-1 flex justify-between items-center">
                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
