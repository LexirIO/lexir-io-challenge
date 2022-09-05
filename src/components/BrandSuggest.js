import Image from "next/image";
import BrandSuggestion from "../public/assets/brandSuggestion/brandSuggest.png";
import BrandTitle from "../public/assets/brandSuggestion/brandTitle.png";

const BrandSuggest = () => {
    return (
        <div className="flex justify-center w-[1280] h-[392px] ">
            <div className="flex w-[1280px] h-[392px] mx-[33px]  ">
                <div className="flex  flex-col w-[606px] h-[392px] bg-rose-100  ">
                    <div className="  flex flex-col w-[556px] h-[216px] mt-[50px] mr-[15px] mb-[28px] ml-[34px]  ">
                        <div>
                            <Image src={BrandTitle} alt="suggestion title" />
                        </div>
                        <div>
                            <p className="mt-[23px]">
                                Lewir is always looking to connect with new
                                wxciting craft brands from around the world. If
                                you have a brand in mind that you would like to
                                see on Lexir, let us know.
                            </p>
                        </div>
                    </div>
                    <button className=" w-[244px] h-[50px] ml-[34px] rounded-[5px] bg-black text-white">
                        {" "}
                        Suggest a Brand
                    </button>
                </div>
                <div className="flex w-[606px] h-[392px]  ">
                    <Image src={BrandSuggestion} alt="brandsuggest" />
                </div>
            </div>
        </div>
    );
};

export default BrandSuggest;
