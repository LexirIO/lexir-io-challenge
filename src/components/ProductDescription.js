import Image from "next/image";
import productImage from "../public/assets/productDescription/packshot-kiss-my-rhubarb.png";
import BelFlag from "../public/assets/productDescription/icons8-netherlands.png";

const ProductDescription = () => {
    return (
        <div className="flex w-full h-[568px] text-black ">
            <div className="flex flex-col items-center w-[748px] h-[488px] my-10 ml-[34px] bg-rose-100 border border-rose-200">
                <div className=" w-[141px] h-[403px] pt-10 py-[303.5px] pb-[45px] ">
                    <Image src={productImage} alt="product" />
                </div>
            </div>
            <div className="  flex flex-col items-center w-[389px] h-[440px] mt-10 mr-[35px] mb-[88px] ml-[74px] ">
                <div className=" text-5xl font-bold">
                    <h1 className="font-title pt-2.5">Kiss My Rhubarb</h1>
                    <div className=" text-[20px]  uppercase font-bold text-gray-200">
                        Aperitif
                    </div>
                </div>
                <div className=" w-[371px] h-[24px] mt-[25px] mr-1 mb-[11px] flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center mr-[7px]">
                            {" "}
                            <Image src={BelFlag} alt="flag" />
                        </div>
                        <div className=" uppercase flex items-center font-medium w-[142px]">
                            Izegem, belgium
                        </div>
                    </div>
                    <div className="font-medium">21% ABV</div>
                </div>
                <div className=" w-[371px] h-[126px] mb-10   ">
                    <p>
                        Kiss My Rhubarb is a fresh and aromatic Belgian
                        aperitif. It uses bright and zesty supporting
                        ingredients like pink grapefruit and lemon verbena to
                        create an aperitif perfectly desighned to pair with hot
                        summer nights.
                    </p>
                </div>
                <div className="flex justify-between h-[50px] mb-2.5 w-[371px] bg-white">
                    <div className="  py-[12px] px-[79px] mr-[41px] flex flex-col justify-center items-center">
                        700ml
                    </div>
                    <div className="flex justify-between items-center  h-[50px] w-[136px]">
                        <div className="flex justify-center pb-1 px-3 items-center text-3xl font-base">
                            -
                        </div>
                        <div className="flex justify-center py-3 px-3 items-center text-lg  font-base">
                            2
                        </div>
                        <div className=" flex justify-center pb-1 px-3 items-center text-2xl font-base">
                            +
                        </div>
                    </div>
                </div>
                <button className=" flex justify-around items-center bg-black w-[371px] h-[50px] rounded-[5px]">
                    <div className="text-white">Add to Cart</div>
                    <div className="text-white">$230.33</div>
                </button>
            </div>
        </div>
    );
};

export default ProductDescription;
