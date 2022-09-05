import Image from "next/image";

const ProductDetails = () => {
    return (
        <div className="bg-gray-400 flex flex-col w-[1280px] h-[424px] py-10 pr-[34px] pl-6 ">
            <div className=" bg-slate-200 flex w-[1222px] h-[379px]   ">
                <div className="bg-gray-500 flex  w-[841px] h-[344px]">
                    <div className="bg-gray-200 pr-5 pb-2.5 pl-2.5  ">
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
                <div className="bg-gray-700 flex flex-col w-[355px] h-[311px] pl-[9px]">
                    <div className="bg-gray-400 flex flex-col justify-between w-[346px] h-[311px]">
                        <div className="bg-rose-100 flex items-center font-medium  w-[100px] h-[20px]">
                            Tasting Notes
                        </div>
                        <div className="bg-rose-200 w-[338px] h-[26px]"></div>
                        <div className="bg-rose-300 w-[319px] h-[25px]"></div>
                        <div className="bg-rose-400 w-[346px] h-[38px]"></div>
                        <div className="bg-rose-100 w-[105px] h-[20px]"></div>
                        <div className="bg-rose-300 w-[201px] h-[32px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
