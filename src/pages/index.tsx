import "../styles/Home.module.css";
import Header from "@components/Headers";
import Navbar from "@components/Navbar";
import Counter from "@components/Counter";
import ProductImage from "@components/ProductCard";

export default function Home() {
  return (
    <>
    <>
      <Header />
      <br></br>
      <Navbar />
      <br></br>
      <div className="inline-flex pt-[42.5px] ml-[34px]">
        <div className="pr-[83px]">
          <ProductImage/>
        </div>
        <div className="inline-flex flex-col">
          <div className="w-[377px] h-[56px] text-[48px] font-[700] leading-[56px] pb-[0px] pt-[52.5] mr-[38] truncate">
            <h1>Kiss My Rhubarb</h1>
          </div>
          <p className="text-[20px] leading-[24px] font-[700] text-[#cccccc] w-[86] h-[24]">APERITIF</p>
          <div className="inline-flex w-[385px] h-[20px] pt-[33px] pb-[16.89px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1573_852)">
                  <path d="M9.00006 6H14.6001V18.1091H9.00006V6Z" fill="#FFC107"/>
                  <path d="M14.5999 6H20.6V18.1091H14.5999V6Z" fill="#FF3D00"/>
                  <path d="M3 6H9.00002V18.1091H3V6Z" fill="#455A64"/>
              </g>
              <defs>
                <clipPath id="clip0_1573_852">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[14px] leading-5 font-[700] pl-[7px] ">IZEGEM, BELGIUM</p>
            <p className="text-[16px] leading-5 font-[700] ml-[138px] ">21%ABV</p>
          </div>
          <div className="pt-[13px] text-[16px] leading-[25px] font-[400] w-[380px] h-[166px]">
            <p>Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty supporting ingredients like pink grapefruit and lemon verbena to create an aperitif perfectly designed to pair with hot summery nights. </p>
          </div>
          <div className="inline-flex items-center">
            <div className="flex w-[203px] h-[48px] text-[16px] leading-[25px] font-[400] items-center justify-center border border-[#f2f2f2]">
              700ml
            </div>
            <div className="pl-[41px]">
            <Counter/>
            </div>
          </div>
          <div className="inline-flex columns-1 gap-x-[157px] items-center justify-center w-[380px] h-[49px] bg-[#2d2d2d] mt-[10px] text-[16px] leading-[25px] font-[700] text-white">
            <p>Add to Cart</p>
            <p>$230.33</p>
          </div>
            
        </div>
      </div>
      
      </>
      </>
  );
}
