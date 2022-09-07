import "../styles/Home.module.css";
import Header from "@components/Headers";
import Navbar from "@components/Navbar";
import Counter from "@components/Counter";
import ProductImage from "@components/ProductCard";
import BottlesImage from "@components/GitBucketPhoto";

export default function Home() {
  return (
    <>
        <Header/>
                
        <br></br>
                
        <Navbar/>
      
        <br></br>
                
        <div className="inline-flex pt-[42.5px] ml-[34px]">
          <div className="ml-[34px]">
            <ProductImage/>
          </div>

          <div className="inline-flex flex-col ml-[25px]">
            <div className="w-[377px] h-[56px] text-[48px] font-[700] leading-[56px] pb-[0px] pt-[52.5]  truncate">
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
           {/* End of product image and cart div*/}

           {/* Start of product details  and tasting notes div */}
        <div className="inline-flex mt-[80] ml-[34px] pt-[80px]">
            {/* Start of product details div */}
          <div className="inline-flex flex-col">
            <div className="flex items-start ml-[34px] pt-[80px] pb-[34px] w-[178px] h-[30px] text-[24px] font-[700] leading-[30px] truncate">
              Product Details
            </div>

            <div className="w-[697px] h-[250px] text-[16px] font-[400] leading-[25px] mt-[34px] ml-[34px]">
              Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents. Using carefully hand-selected stalks of rhubarb, and locally-sourced flowers and herbs, this summery aperitif perfectly expresses the brimming liveliness that characterizes the Belgian countryside in bloom. Kiss My Rhubarb is created in collaboration with local producers in Izegem that select only the freshest stalks of rhubarb using attentive and sustainable practices. By avoiding the pitfalls of overproduction and diminished flavour that large-scale harvesting methods can bring, Kiss My’s careful foraging process results in an aperitif that emphasises the tangy juiciness of its primary ingredient.
            </div>
          </div>
        
            {/* End of product details div*/}

            {/* Start of tasting notes div */}  

        <div className="inline-flex flex-col ml-[143px]">
          <div className="mt-[80px] text-[16px] font-[700] leading-[20px] text-[#2D2D2D]">
            Tasting Notes
          </div>
            
          {/* Start of tasting notes 1st row */}
          <div className="inline-flex flex-col pt-[30px]">
            <div className="inline-flex items-center">
              <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.45108 21.6199C0.687182 20.9136 0.3 19.966 0.3 18.8039C0.3 14.9772 3.32953 13.2149 4.16086 12.8036L6.44617 0.300052L7.23713 0.444613L4.87444 13.3707L4.6686 13.4532C4.52367 13.512 1.10389 14.9436 1.10389 18.8039C1.10389 19.7318 1.40384 20.48 1.99501 21.0279C3.43029 22.3575 6.1253 22.168 6.15274 22.1657L6.45712 22.1423L6.56169 22.4294C6.60746 22.554 7.722 25.496 10.6983 25.496C13.6872 25.496 14.8236 22.4599 14.8348 22.4294L14.9391 22.1418L15.2441 22.1657C15.271 22.1682 17.9666 22.3574 19.4015 21.0279C19.9928 20.48 20.2926 19.7318 20.2926 18.8039C20.2926 14.9285 16.7636 13.4675 16.728 13.4532L16.5202 13.3699L14.2604 0.441414L15.0522 0.303003L17.2376 12.8045C18.0713 13.2174 21.0966 14.9798 21.0966 18.8039C21.0966 19.966 20.7093 20.9136 19.9455 21.6199C18.539 22.9205 16.2734 22.9981 15.4711 22.98C15.0745 23.8226 13.6562 26.3001 10.6983 26.3001C7.74033 26.3001 6.3219 23.8226 5.92537 22.98C5.12358 22.9979 2.85758 22.9205 1.45108 21.6199ZM5.73928 23.282C5.297 23.2817 4.60482 23.2483 3.85242 23.0878C2.98219 22.9022 2.00559 22.5413 1.24741 21.8402C0.414537 21.0701 0 20.0388 0 18.8039C0 14.9833 2.88326 13.1345 3.89239 12.6039L6.15106 0.246114C6.18085 0.0831295 6.33712 -0.0248473 6.5001 0.00494066L7.29107 0.149501C7.36934 0.163806 7.43872 0.208618 7.48395 0.274078C7.52918 0.339539 7.54655 0.420286 7.53224 0.498555L5.16955 13.4246C5.15102 13.526 5.08176 13.6107 4.98611 13.6491L4.7814 13.7312C4.78124 13.7313 4.78157 13.7311 4.7814 13.7312C4.72284 13.755 3.8729 14.1103 3.04089 14.9182C2.21145 15.7237 1.40389 16.9731 1.40389 18.8039C1.40389 19.662 1.67845 20.3255 2.19888 20.8078C2.84857 21.4097 3.80649 21.6834 4.64294 21.7991C5.4623 21.9125 6.11423 21.8677 6.12708 21.8668L6.12976 21.8666L6.43414 21.8432C6.56831 21.8329 6.69293 21.9132 6.73899 22.0396L6.8433 22.3259C6.84336 22.3261 6.84324 22.3258 6.8433 22.3259C6.86188 22.3764 7.13693 23.1026 7.75693 23.812C8.37527 24.5196 9.32181 25.196 10.6983 25.196C12.0783 25.196 13.0335 24.4987 13.6562 23.778C14.2768 23.0597 14.5491 22.3368 14.5531 22.3261C14.5531 22.3261 14.5531 22.3261 14.5531 22.3261L14.6571 22.0395C14.7031 21.9127 14.8281 21.8322 14.9626 21.8427L15.2716 21.8669C15.2979 21.8687 15.9442 21.9112 16.7537 21.7991C17.5902 21.6833 18.5481 21.4096 19.1976 20.8078C19.7181 20.3255 19.9926 19.6621 19.9926 18.8039C19.9926 16.9681 19.16 15.7076 18.3159 14.897C17.4744 14.089 16.629 13.7369 16.6164 13.7317L16.4086 13.6484C16.3122 13.6097 16.2426 13.5239 16.2247 13.4216L13.9649 0.493069C13.9363 0.329859 14.0455 0.174424 14.2087 0.145895L15.0006 0.00748423C15.1638 -0.0210446 15.3192 0.0881344 15.3477 0.251343L17.5074 12.6055C18.519 13.1381 21.3966 14.987 21.3966 18.8039C21.3966 20.0388 20.982 21.0701 20.1492 21.8402C19.3911 22.5413 18.4146 22.9023 17.5443 23.0879C16.7919 23.2484 16.0997 23.2819 15.6572 23.282C15.1526 24.2737 13.6567 26.6001 10.6983 26.6001C7.73981 26.6001 6.24374 24.2736 5.73928 23.282Z" fill="#2D2D2D"/>
              </svg>

              <p className="pl-[38px] text-[16px] font-[400] leading-[25px]">ASTRIGENT</p>

              <span className="pl-[8px] justify-center items-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.39664" cy="2.30003" r="2" fill="#8F8F8F"/>
                </svg>
              </span>

              <p className="pl-[8px] text-[16px] font-[400] leading-[25px]">FRUITY</p>

              <span className="pl-[8px] justify-center items-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.39664" cy="2.30003" r="2" fill="#8F8F8F"/>
                </svg>
              </span>

              <p className="pl-[8px] text-[16px] font-[400] leading-[25px]">COMPLEX</p>

            </div>
                {/* Start of tasting notes 2nd row */}
            <div className="inline-flex items-center pt-[30.8px]">
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.391602 0.600049C0.391602 0.434363 0.525916 0.300049 0.691602 0.300049H15.3328C15.4984 0.300049 15.6328 0.434363 15.6328 0.600049V14.6122C15.6328 18.6439 12.2012 21.9 8.01224 21.9C3.8232 21.9 0.391602 18.6439 0.391602 14.6122V0.600049ZM1.75528 1.62901V14.6122C1.75528 17.8846 4.54906 20.5709 8.01224 20.5709C11.4753 20.5709 14.269 17.8846 14.269 14.6122V1.62901H1.75528ZM1.45528 14.6122C1.45528 18.0633 4.39669 20.8709 8.01224 20.8709C11.6277 20.8709 14.569 18.0633 14.569 14.6122V1.32901H1.45528V14.6122ZM0.691602 14.6122C0.691602 18.4652 3.97558 21.6 8.01224 21.6C12.0488 21.6 15.3328 18.4652 15.3328 14.6122V0.600049H0.691602V14.6122Z" fill="#2D2D2D"/>
              </svg>

              <p className="pl-[38px] text-[16px] font-[400] leading-[25px]">BITTER</p>

              <span className="pl-[8px] justify-center items-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.39664" cy="2.30003" r="2" fill="#8F8F8F"/>
                </svg>
              </span>

              <p className="pl-[8px] text-[16px] font-[400] leading-[25px]">FLAMBOYANT</p>

              <span className="pl-[8px] justify-center items-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.39664" cy="2.30003" r="2" fill="#8F8F8F"/>
                </svg>
              </span>

              <p className="pl-[8px] text-[16px] font-[400] leading-[25px]">BRIGHT</p>

            </div>
            {/* Start of tasting notes 3rd row */}
            <div className="inline-flex mt-[16px] gap-x-[3.6px]">
              <svg width="73" height="3" viewBox="0 0 73 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.600052" width="72.0773" height="2" fill="#2D2D2D"/>
              </svg>

              <svg width="73" height="3" viewBox="0 0 73 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.600052" width="72.0773" height="2" fill="#2D2D2D"/>
              </svg>

              <svg width="73" height="3" viewBox="0 0 73 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.600052" width="72.0773" height="2" fill="#2D2D2D"/>
              </svg>

              <svg width="73" height="3" viewBox="0 0 73 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.241333" y="0.600052" width="72.0773" height="2" fill="#CACACA"/>
              </svg>

              <svg width="73" height="3" viewBox="0 0 73 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.241333" y="0.600052" width="72.0773" height="2" fill="#CACACA"/>
              </svg>

            </div>
            {/* Start of tasting notes last rows */}
            <div className="mt-[30px] text-[16px] font-[700] leading-[20px] text-[#2D2D2D]">
              Suggested Use
            </div>

            <div className="inline-flex mt-[36px] text-[12px] font-[400] leading-[20px] text-[#2D2D2D]">
              <p className="mr-[10px]">In a cocktail</p>

              <span className="mr-[26px]">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3 0.600037C1.47891 0.600037 0 2.07894 0 3.90004C0 5.72113 1.47891 7.20004 3.3 7.20004C3.89297 7.20004 4.46016 7.02894 4.95 6.75004L6.6 8.62504V11.4H4.2V12.6H10.2V11.4H7.8V8.62504L11.85 4.05004L12 3.88129V3.00004H6.45C6.08672 1.60785 4.79063 0.600037 3.3 0.600037ZM3.3 1.80004C4.13438 1.80004 4.85391 2.30394 5.175 3.00004H2.4V3.88129L2.55 4.05004L4.10625 5.81254C3.84141 5.92972 3.5625 6.00004 3.3 6.00004C2.12109 6.00004 1.2 5.07894 1.2 3.90004C1.2 2.72113 2.12109 1.80004 3.3 1.80004ZM4.275 4.20004H10.125L9.6 4.80004H6L7.8375 6.78754L7.2 7.50004L4.275 4.20004Z" fill="#2D2D2D"/>
                </svg>
              </span>

              <p className="mr-[6.69px]">At a party</p>

              <span>
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0.600037C4.26302 0.600037 3.66667 1.19639 3.66667 1.93337C3.66667 2.67035 4.26302 3.2667 5 3.2667C5.73698 3.2667 6.33333 2.67035 6.33333 1.93337C6.33333 1.19639 5.73698 0.600037 5 0.600037ZM6.72917 3.3917C6.6276 3.3917 6.51823 3.40993 6.41667 3.43337V3.41254L6.3125 3.43337L4.89583 3.68337H4.83333L4.79167 3.7042C4.46615 3.81358 4.14583 4.02972 3.91667 4.37087L3.875 4.41254L2.95833 6.0792H2.9375V6.10004C2.8099 6.35525 2.53385 6.48545 2.20833 6.41254L1.04167 6.10004L0.6875 7.37087L1.89583 7.7042L1.91667 7.72504C2.78125 7.91775 3.6901 7.5167 4.10417 6.72504H4.125C4.1276 6.71983 4.1224 6.70941 4.125 6.7042L4.33333 6.3292V8.53754L3.27083 10.1417C3.00521 10.5427 2.99219 10.9907 3.125 11.3917L4.20833 13.9334H5.60417L4.54167 11.1417C4.47396 10.9412 4.47135 10.7328 4.60417 10.6L5.45833 9.30837L5.66667 9.2667V9.99587C5.66667 10.5427 5.875 11.0558 6.20833 11.475L7.8125 13.475L8.85417 12.6417L7.27083 10.6625L7.25 10.6417C7.05208 10.3943 7 10.2485 7 9.99587V5.03754L7.41667 5.43337H7.4375C8.11458 6.0141 9.11719 6.12868 9.89583 5.6417L9.9375 5.60004L10.7292 4.99587L9.9375 3.93337L9.1875 4.49587C8.90625 4.67035 8.5651 4.6391 8.3125 4.43337H8.29167L7.54167 3.72504C7.53385 3.71722 7.52865 3.70941 7.52083 3.7042C7.31771 3.5115 7.03385 3.39431 6.72917 3.3917ZM11 6.72504V7.30837C10.9974 7.33702 10.9974 7.36306 11 7.3917V9.43337C10.8932 9.42556 10.7865 9.44639 10.6667 9.47504C10.1328 9.60785 9.66667 10.0714 9.66667 10.5375C9.66667 11.0037 10.1328 11.2745 10.6667 11.1417C11.1562 11.0193 11.5755 10.6079 11.6458 10.1834C11.6536 10.1625 11.6615 10.1417 11.6667 10.1209C11.6667 10.1079 11.6667 10.0922 11.6667 10.0792C11.6667 10.0714 11.6667 10.0662 11.6667 10.0584V8.0167C12.7995 8.30316 13 9.2667 13 9.2667V8.60004C13 7.66775 12.2656 6.72504 11 6.72504Z" fill="#2D2D2D"/>
                </svg>
              </span>
          </div>
          {/* End of tasting notes rows */}
        </div>
        {/* End of tasting notes div */}
            </div>
        </div>
              {/* End of product details and notes */}

          <div className="inline-flex pt-[105px] gap-0">
            <div className="inline-flex flex-col pl-[33.5px] w-[660px] h-[394px]">
              <div className="pl-[34px] text-[48px] font-[700] leading-[56px]">
                Have a brand you`d like to see on <span className="text-[#1C8C64]">Lexir</span>?
                <p className="text-[16px] font-[400] leading-[25px] pt-[23px]">Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you'd like to see on Lexir, let us know.</p>
              </div>
                      
              <div className="flex items-center justify-center ml-[34px] w-[244px] h-[49px] mt-[28px] p-[12,0,12,0] text-[16px] text-[#fff] leading-[25px] font-700 bg-[#2D2D2D]">
                Suggest a Brand
              </div>
            </div>
            <div className="">
              <BottlesImage/>
            </div>
          </div>

          
        
          <div className="inline-flex w-[1280px] h-[337.33px] bg-[#2D2D2D]">
            <div className="inline-flex items-start ml-[36.55px] mt-[42.21px]">
              <span>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3558 15.8106L19.388 23.9016L0.583225 23.9338V23.418C1.61363 22.7411 2.12883 21.355 2.12883 19.2597L2.09663 4.91517C2.09663 2.81989 1.58143 1.43379 0.551025 0.756856V0.241097L9.79244 0.208862V0.724621C8.76203 1.46603 8.24683 2.85213 8.24683 4.88293L8.27903 19.2597C8.27903 20.5169 8.53663 21.3872 9.05184 21.903C9.56704 22.4188 10.4042 22.6766 11.5634 22.6766H11.66C13.4954 22.6766 15.0088 22.0319 16.2324 20.7748C17.456 19.5176 18.3254 17.8414 18.8406 15.7784L19.3558 15.8106Z" fill="white"/>
                </svg>
              </span>

              <span>
                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5742 17.5125V23.8306L0.509983 23.8628V23.347C1.54038 22.6701 2.05559 21.284 2.05559 19.1887L2.02339 4.84418C2.02339 2.74891 1.50818 1.36281 0.477783 0.685873V0.170114L17.7048 0.137878V6.45593H17.1896C16.5134 4.94089 15.5796 3.68372 14.3882 2.74891C13.1646 1.8141 11.78 1.33057 10.1378 1.33057H8.1736L8.2058 11.3234L9.7514 11.1945C10.7818 11.0978 11.619 10.7432 12.2308 10.1307C12.8748 9.51825 13.4222 8.68014 13.9374 7.64862H14.4526L14.4848 15.9008H13.9696C13.4222 14.9015 12.8426 14.0956 12.2308 13.4509C11.619 12.8385 10.7818 12.4839 9.7514 12.3872L8.2058 12.2582L8.238 19.221C8.238 20.4459 8.4634 21.3162 8.9142 21.8642C9.365 22.4122 10.0734 22.6701 11.0394 22.6701H11.1038C12.6816 22.6701 14.0984 22.1866 15.2898 21.2195C16.4812 20.2525 17.415 19.0276 18.059 17.5125H18.5742Z" fill="white"/>
                </svg>
              </span>

              <span>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0585 17.95L15.8099 9.9557L18.3859 6.02304C20.2535 3.2186 22.3143 1.3812 24.5361 0.57533V0.0595703L16.5505 0.0918054V0.607565C17.1945 1.25226 17.5165 2.15484 17.5165 3.28307C17.5487 4.41129 17.2911 5.41057 16.8081 6.28092L15.2625 9.18206L13.1051 5.92633C11.6239 3.63765 11.4951 1.86473 12.7509 0.607565V0.0918054L0.965637 0.12404V0.639799C1.51304 0.865444 2.09264 1.31673 2.70444 1.9292C3.31624 2.5739 3.79924 3.15413 4.21784 3.66989C4.60424 4.21788 5.11945 4.95928 5.76345 5.92633L13.5881 17.7888C14.3287 18.917 14.7795 19.9485 14.8761 20.9478C14.9727 21.9149 14.7151 22.6885 14.0711 23.2687V23.7845L26.1783 23.7523V23.2365C24.6327 22.5273 22.9261 20.7867 21.0585 17.95Z" fill="white"/>
                </svg>
              </span>

              <span>
                <svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.1408 19.056C8.1408 21.0868 8.656 22.4407 9.6864 23.2144V23.7301L0.445011 23.7623V23.2466C1.47541 22.5697 1.99061 21.1835 1.99061 19.0883L1.95841 4.74372C1.95841 2.64845 1.44321 1.26234 0.412811 0.585409V0.0696496L9.6542 0.0374146V0.553174C8.6238 1.29458 8.1086 2.68068 8.1086 4.71148L8.1408 19.056Z" fill="white"/>
                </svg>
              </span>

              <span>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4338 22.854C14.3068 22.0803 13.1476 20.8876 11.8918 19.1792C11.602 18.7924 11.3122 18.3733 11.0224 17.8898C10.7326 17.4063 10.4428 16.9872 10.2496 16.6326C10.0242 16.278 9.73435 15.7301 9.34795 14.9886C8.96155 14.2472 8.63955 13.6992 8.44635 13.3447V12.8611C11.5698 11.9908 13.1154 9.79882 13.1154 6.34968C13.1154 2.90054 11.6342 1.19208 8.67175 1.19208H7.89895L7.93115 19.018C7.93115 21.0488 8.44635 22.4349 9.47675 23.1763V23.6921L0.235325 23.7243V23.2086C1.26573 22.5639 1.78093 21.1778 1.78093 19.0503L1.74873 4.70569C1.74873 2.61042 1.23353 1.22432 0.203125 0.547384V0.0316247L9.95976 -0.000610352C16.4642 -0.000610352 19.7486 2.1269 19.7486 6.44638C19.7486 8.18707 19.2012 9.5087 18.1386 10.4758C17.076 11.4106 15.788 12.0553 14.2746 12.3454L15.7558 14.4407C18.4606 18.2444 20.8434 20.9521 22.872 22.4994L22.7432 23.0152C21.6806 23.6599 20.5536 23.9822 19.2978 23.9822C17.8166 24.0144 16.5608 23.6276 15.4338 22.854Z" fill="white"/>
                </svg>
              </span>
            </div>

            <div className="inline-flex flex-col text-[16px] leading-[32px] mt-[42px] pl-[121.13px]">
              <p className="text-[#8F8F8F]">COMMUNITY</p>
              <p className="pt-[21.34px] text-white">Lexir for Brands</p>
              <p className="pt-[21.34px] text-white">Business Buyers</p>
              <p className="pt-[21.34px] text-white">Sales Affiliates</p>
            </div>

            <div className="inline-flex flex-col text-[16px] leading-[32px] mt-[42px] pl-[96px]">
              <p className="text-[#8F8F8F]">PLATFORM</p>
              <p className="pt-[21.34px] text-white">Resources</p>
              <p className="pt-[21.34px] text-white">Pricing</p>
              <p className="pt-[21.34px] text-white">Get Started</p>
            </div>
      
            <div className="inline-flex flex-col text-[16px] leading-[32px] mt-[42px] pl-[80px]">
              <p className="text-[#8F8F8F]">COMPANY</p>
              <p className="pt-[21.34px] text-white">About</p>
              <p className="pt-[21.34px] text-white">Contact</p>
              <p className="pt-[21.34px] text-white">Legal</p>
            </div>

            <div className="inline-flex flex-col text-[16px] leading-[32px] mt-[42px] pl-[80px]">
              <p className="text-[#8F8F8F]">LEXIR SHOP</p>
              <p className="pt-[21.34px] text-white">Brands</p>
              <p className="pt-[21.34px] text-white">Spirits</p>
              <p className="pt-[21.34px] text-white">Wines</p>
              <p className="pt-[21.34px] text-white">Blog</p>
            </div>

            <div className="inline-flex pl-[121.17px] pt-[40px]">
              <svg width="133" height="24" viewBox="0 0 133 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2228_2068)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M115.5 3C113.291 3 111.5 4.79086 111.5 7V17C111.5 19.2091 113.291 21 115.5 21H125.5C127.709 21 129.5 19.2091 129.5 17V7C129.5 4.79086 127.709 3 125.5 3H115.5ZM114.5 12C114.5 11.3 115.1 10.7 115.8 10.7C116.5 10.7 117.1 11.2 117.1 11.9V16.5C117.1 17.2 116.5 17.8 115.8 17.8C115.1 17.8 114.5 17.2 114.5 16.5V12ZM115.9 7C115 7 114.5 7.5 114.5 8.2C114.5 8.9 115 9.4 115.8 9.4C116.7 9.4 117.2 8.9 117.2 8.2C117.2 7.5 116.6 7 115.9 7ZM121.7 12C121.7 12 122 10.7 123.9 10.7C125.1 10.7 126.1 11.7 126.1 13.9V16.5C126.1 17.2 125.6 17.7 124.9 17.7C124.2 17.7 123.7 17.2 123.7 16.5V13.9C123.7 12.8 123.1 12.7 122.8 12.7C122.5 12.7 121.7 12.8 121.7 13.9V16.5C121.7 17.2 121.2 17.7 120.5 17.7H120.3C119.6 17.7 119.1 17.2 119.1 16.5V12C119.1 11.3 119.7 10.7 120.4 10.7C121.1 10.7 121.7 11.3 121.7 12Z" fill="white"/>
                </g>
                <path d="M80.5 3C77.739 3 75.5 5.239 75.5 8V16C75.5 18.761 77.739 21 80.5 21H88.5C91.261 21 93.5 18.761 93.5 16V8C93.5 5.239 91.261 3 88.5 3H80.5ZM90.5 5C91.052 5 91.5 5.448 91.5 6C91.5 6.552 91.052 7 90.5 7C89.948 7 89.5 6.552 89.5 6C89.5 5.448 89.948 5 90.5 5ZM84.5 7C87.261 7 89.5 9.239 89.5 12C89.5 14.761 87.261 17 84.5 17C81.739 17 79.5 14.761 79.5 12C79.5 9.239 81.739 7 84.5 7ZM84.5 9C83.7044 9 82.9413 9.31607 82.3787 9.87868C81.8161 10.4413 81.5 11.2044 81.5 12C81.5 12.7956 81.8161 13.5587 82.3787 14.1213C82.9413 14.6839 83.7044 15 84.5 15C85.2956 15 86.0587 14.6839 86.6213 14.1213C87.1839 13.5587 87.5 12.7956 87.5 12C87.5 11.2044 87.1839 10.4413 86.6213 9.87868C86.0587 9.31607 85.2956 9 84.5 9Z" fill="white"/>
                <path d="M53.5 3H43.5C41.291 3 39.5 4.791 39.5 7V17C39.5 19.209 41.291 21 43.5 21H49.121V14.039H46.778V11.314H49.121V9.309C49.121 6.985 50.542 5.718 52.616 5.718C53.315 5.716 54.013 5.752 54.708 5.823V8.253H53.28C52.15 8.253 51.93 8.787 51.93 9.575V11.31H54.63L54.279 14.035H51.914V21H53.5C55.709 21 57.5 19.209 57.5 17V7C57.5 4.791 55.709 3 53.5 3Z" fill="white"/>
                <g clipPath="url(#clip1_2228_2068)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3H7.5ZM9.44788 16C11.6277 16 13.3958 14.2092 13.3958 12C13.3958 9.79082 11.6277 8 9.44788 8C7.26803 8 5.5 9.79217 5.5 12C5.5 14.2078 7.26803 16 9.44788 16ZM17.7285 12.0005C17.7285 14.0801 16.8445 15.7657 15.7539 15.7657C14.6633 15.7657 13.7793 14.0801 13.7793 12.0005C13.7793 9.92087 14.6633 8.2353 15.7539 8.2353C16.8445 8.2353 17.7285 9.92087 17.7285 12.0005ZM18.8062 15.3763C19.1899 15.3763 19.5011 13.8662 19.5011 12.0039C19.5011 10.1402 19.1899 8.6314 18.8062 8.6314C18.4225 8.6314 18.1113 10.1415 18.1113 12.0039C18.1113 13.8662 18.4225 15.3763 18.8062 15.3763Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2228_2068">
                    <rect width="24" height="24" fill="white" transform="translate(108.5)"/>
                  </clipPath>
                  <clipPath id="clip1_2228_2068">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
      </>
  );
}