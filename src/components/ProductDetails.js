import Image from "next/image";
import cocktail from "../public/assets/productDetails/cocktail.png";
import dancing from "../public/assets/productDetails/dancing.png";
import dot from "../public/assets/productDetails/dot.png";
import nose from "../public/assets/productDetails/nose.png";
import tongue from "../public/assets/productDetails/tongue.png";

const ProductDetails = () => {
    return (
        <div className=" flex flex-col w-[1280px] h-[424px] py-10 pr-[34px] pl-6 font-main">
            <div className="  flex w-[1222px] h-[379px]   ">
                <div className=" flex  w-[841px] h-[344px]">
                    <div className=" pr-5 pb-2.5 pl-2.5  ">
                        <p className=" text-2xl font-semibold mb-[34px]">
                            Product Details
                        </p>{" "}
                        <div className="flex flex-col w-[697px] h-[249px]  ">
                            <p>
                                Kiss My Rhubarb takes its origins from an old
                                handwritten recipe from co-creators Niels and
                                Wouters rebellious grandparents. Using carefully
                                hand-selected stalks of rhubarb. and locally-
                                sourced flowers amd herbs, this summery aperitif
                                perfectly expressesthe brimming liveliness that
                                characterizes the Belgian countyside in bloom.{" "}
                            </p>
                            <br />
                            <p>
                                Kiss My Rhubarb is created in collabertion local
                                producers in Izegem that select only the
                                freshest stalks of rhubarb using attentive and
                                sustainable practices. By avoiding the pitfalls
                                of overproduction and diminished flavour that
                                large-scale harvesting methods can bring, Kiss
                                My careful foraging process results in an
                                aperitif that emphasises the tangy juciness of
                                it primary ingredient.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[355px] h-[311px] pl-[9px]">
                    <div className=" flex flex-col justify-between w-[346px] h-[311px]">
                        <p
                            className=" flex items-center font-semibold
                            w-content h-[20px]"
                        >
                            {" "}
                            Tasting Notes
                        </p>
                        <div className="w-[338px] h-[26px] flex justify-between">
                            <div className="">
                                <Image src={nose} alt="nose" />
                            </div>
                            <div className=" flex justify-between items-center w-[279px] h-[25px]  ">
                                <div className=" uppercase">Astringent</div>
                                <div className=" flex items-center">
                                    <Image src={dot} alt="dot" />
                                </div>
                                <div className="uppercase">Fruity</div>
                                <div className="flex items-center">
                                    <Image src={dot} alt="dot" />
                                </div>
                                <div className="uppercase">Complex</div>
                            </div>
                        </div>
                        <div className=" w-[319px] h-[25px] flex justify-between">
                            <div className="flex items-center">
                                <Image src={tongue} alt="tongue" />
                            </div>
                            <div className=" flex justify-between items-center w-[259px] h-[25px]  ">
                                <div className=" uppercase">Bitter</div>
                                <div className=" flex items-center">
                                    <Image src={dot} alt="dot" />
                                </div>
                                <div className="uppercase">Flamboyant</div>
                                <div className="flex items-center">
                                    <Image src={dot} alt="dot" />
                                </div>
                                <div className="uppercase">Bright</div>
                            </div>
                        </div>
                        <div className="b w-[346px] h-[38px]">
                            <p className="flex items-center font-semibold w-content h-[20px] mb-4">
                                Flavour Intensity
                            </p>
                            <div className="  flex jusdtify-between w-[373px] h-[2px]">
                                <div className="bg-rose-400 w-[70px] h-[2px] ml-[3px] "></div>
                                <div className="bg-rose-400 w-[70px] h-[2px] ml-[3px] "></div>
                                <div className="bg-rose-400 w-[70px] h-[2px] ml-[3px] "></div>
                                <div className="bg-gray-300 w-[70px] h-[2px] ml-[3px] "></div>
                                <div className="bg-gray-300 w-[70px] h-[2px] ml-[3px] "></div>
                            </div>
                        </div>
                        <p className=" w-content h-[20px] flex items-center font-semibold">
                            Suggested Use
                        </p>
                        <div className=" w-[201px] h-[32px] flex justify-between items-center">
                            <div className=" bg-rose-100 w-[103px] h-[32px] flex items-center justify-around">
                                <div className="text-[12px] flex">
                                    In a cocktail
                                </div>
                                <div className="pr-1  ">
                                    <Image
                                        src={cocktail}
                                        alt="cocktail drink"
                                    />
                                </div>
                            </div>
                            <div className=" bg-rose-100 w-[90px] h-[32px] flex items-center justify-around ">
                                <div className=" text-[12px] flex items-center">
                                    At a Party
                                </div>
                                <div className="pr-1">
                                    <Image src={dancing} alt="dancing person" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
