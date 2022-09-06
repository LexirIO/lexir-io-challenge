import Image from 'next/image';
import packshot from '../assets/Images/packshot-kiss-my-rhubarb.png';

const Hightlight = () => {
    return (
        <>
            <section className="flex flex-col lg:grid lg:grid-cols-5 px-9 pt-11 lg:py-11 gap-y-11 lg:gap-x-20">
                <div className='col-span-3 bg-background flex justify-center pt-10 pb-11 border-2 border-stone-200 rounded-md -z-10'>
                    <Image src={packshot.src} alt="kiss-my-rhubarb-packshot" width='142' height='403' className='object-cover'/>
                </div>
                <div className='h-fit col-span-2'>
                    <h1 className='text-5xl text-primary font-Source-Sans-Pro-Bold'>Kiss My Rhubarb</h1>
                    <h2 className='uppercase text-xl text-secondary'>Aperitif</h2>
                    <div className='uppercase mt-8 text-base font-semibold flex justify-between mb-3'>
                        <div className='inline-flex gap-x-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1648_851)">
                            <path d="M9.00006 6H14.6001V18.1091H9.00006V6Z" fill="#FFC107"/>
                            <path d="M14.5999 6H20.6V18.1091H14.5999V6Z" fill="#FF3D00"/>
                            <path d="M3 6H9.00002V18.1091H3V6Z" fill="#455A64"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1648_851">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                            <span>
                                Izegem, Belgium
                            </span>
                        </div>
                        <span>21% ABV</span>
                    </div>
                    <p className='text-base'>Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty supporting ingredients like pink grapefruit and lemon verbena to create an aperitif perfectly designed to pair with hot summery nights.</p>

                    <div className='pt-10 pb-2.5 flex flex-col lg:flex-row lg:justify-between'>
                        <div className='border border-slate-200 rounded-md h-12 overflow-hidden mb-2 lg:mb-0'>
                            <input type="text" value={'700ml'} className='text-center h-full w-full' readOnly/>
                        </div>
                        <div className='flex items-center border border-slate-200 rounded-md mx-auto lg:mx-0 h-12'>
                            <button className='text-center text-lg w-12 h-12'>
                                -
                            </button>
                            <input type="text" value={'2'} className='w-9 text-center border-x-2 border-x-border-light h-8' readOnly/>
                            <button className='w-12 text-center text-lg w-12 h-12'>
                                +
                            </button>
                        </div>
                    </div>
                    <button className='w-full h-12 bg-primary text-white rounded-md flex justify-between items-center px-10 text-base hover:shadow-primary/60 hover:shadow-lg'>
                        <span>
                            Add to Cart
                        </span>
                        <span>
                            $230.33
                        </span>
                    </button>
                </div>
            </section>

            <section className="flex flex-col gap-y-11 lg:grid lg:grid-rows-1 lg:grid-cols-5 px-9 py-11 lg:gap-x-20">
                <div className="col-span-5 lg:col-span-3 mx-auto lg:mx-0 flex flex-col gap-y-9 lg:pr-14">
                    <span className="text-2xl font-semibold">
                        Product Details
                    </span>
                    <div className="text-base flex flex-col gap-y-5">
                        <p>
                            Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents. Using carefully hand-selected stalks of rhubarb, and locally-sourced flowers and herbs, this summery aperitif perfectly expresses the brimming liveliness that characterizes the Belgian countryside in bloom. 
                        </p>
                        <p>
                            Kiss My Rhubarb is created in collaboration with local producers in Izegem that select only the freshest stalks of rhubarb using attentive and sustainable practices. By avoiding the pitfalls of overproduction and diminished flavour that large-scale harvesting methods can bring, Kiss My’s careful foraging process results in an aperitif that emphasises the tangy juiciness of its primary ingredient. 
                        </p>
                    </div>
                </div>

                <div className="w-full col-span-5 grid grid-cols-1 gap-y-11 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-2 mx-auto lg:mx-0">
                    <div className='cols-span-1 flex flex-col gap-y-7'>
                        <span className="font-semibold">Tasting Notes</span>
                        <div className="flex gap-x-10 w-full text-xs lg:text-base">
                            <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.699 26.3008C7.74111 26.3008 6.32268 23.8233 5.92615 22.9808C5.12436 22.9986 2.85836 22.9212 1.45187 21.6207C0.687964 20.9143 0.300781 19.9667 0.300781 18.8046C0.300781 14.9779 3.33031 13.2156 4.16164 12.8043L6.44695 0.300781L7.23791 0.445342L4.87522 13.3714L4.66938 13.454C4.52445 13.5128 1.10467 14.9444 1.10467 18.8046C1.10467 19.7325 1.40462 20.4808 1.99579 21.0286C3.43108 22.3582 6.12608 22.1688 6.15352 22.1664L6.4579 22.1431L6.56247 22.4301C6.60824 22.5547 7.72278 25.4968 10.699 25.4968C13.688 25.4968 14.8244 22.4606 14.8356 22.4301L14.9399 22.1426L15.2449 22.1664C15.2717 22.1689 17.9674 22.3581 19.4023 21.0286C19.9936 20.4808 20.2934 19.7325 20.2934 18.8046C20.2934 14.9292 16.7644 13.4682 16.7288 13.454L16.521 13.3707L14.2612 0.442143L15.053 0.303732L17.2384 12.8052C18.0721 13.2181 21.0974 14.9805 21.0974 18.8046C21.0974 19.9667 20.7101 20.9143 19.9463 21.6207C18.5398 22.9212 16.2742 22.9989 15.4719 22.9808C15.0753 23.8233 13.657 26.3008 10.699 26.3008Z" fill="#2D2D2D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.45108 21.6199C0.687182 20.9136 0.3 19.966 0.3 18.8039C0.3 14.9772 3.32953 13.2149 4.16086 12.8036L6.44617 0.300052L7.23713 0.444613L4.87444 13.3707L4.6686 13.4532C4.52367 13.512 1.10389 14.9436 1.10389 18.8039C1.10389 19.7318 1.40384 20.48 1.99501 21.0279C3.43029 22.3575 6.1253 22.168 6.15274 22.1657L6.45712 22.1423L6.56169 22.4294C6.60746 22.554 7.722 25.496 10.6983 25.496C13.6872 25.496 14.8236 22.4599 14.8348 22.4294L14.9391 22.1418L15.2441 22.1657C15.271 22.1682 17.9666 22.3574 19.4015 21.0279C19.9928 20.48 20.2926 19.7318 20.2926 18.8039C20.2926 14.9285 16.7636 13.4675 16.728 13.4532L16.5202 13.3699L14.2604 0.441414L15.0522 0.303003L17.2376 12.8045C18.0713 13.2174 21.0966 14.9798 21.0966 18.8039C21.0966 19.966 20.7093 20.9136 19.9455 21.6199C18.539 22.9205 16.2734 22.9981 15.4711 22.98C15.0745 23.8226 13.6562 26.3001 10.6983 26.3001C7.74033 26.3001 6.3219 23.8226 5.92537 22.98C5.12358 22.9979 2.85758 22.9205 1.45108 21.6199ZM5.73928 23.282C5.297 23.2817 4.60482 23.2483 3.85242 23.0878C2.98219 22.9022 2.00559 22.5413 1.24741 21.8402C0.414537 21.0701 0 20.0388 0 18.8039C0 14.9833 2.88326 13.1345 3.89239 12.6039L6.15106 0.246114C6.18085 0.0831295 6.33712 -0.0248473 6.5001 0.00494066L7.29107 0.149501C7.36934 0.163806 7.43872 0.208618 7.48395 0.274078C7.52918 0.339539 7.54655 0.420286 7.53224 0.498555L5.16955 13.4246C5.15102 13.526 5.08176 13.6107 4.98611 13.6491L4.7814 13.7312C4.78124 13.7313 4.78157 13.7311 4.7814 13.7312C4.72284 13.755 3.8729 14.1103 3.04089 14.9182C2.21145 15.7237 1.40389 16.9731 1.40389 18.8039C1.40389 19.662 1.67845 20.3255 2.19888 20.8078C2.84857 21.4097 3.80649 21.6834 4.64294 21.7991C5.4623 21.9125 6.11423 21.8677 6.12708 21.8668L6.12976 21.8666L6.43414 21.8432C6.56831 21.8329 6.69293 21.9132 6.73899 22.0396L6.8433 22.3259C6.84336 22.3261 6.84324 22.3258 6.8433 22.3259C6.86188 22.3764 7.13693 23.1026 7.75693 23.812C8.37527 24.5196 9.32181 25.196 10.6983 25.196C12.0783 25.196 13.0335 24.4987 13.6562 23.778C14.2768 23.0597 14.5491 22.3368 14.5531 22.3261C14.5531 22.3261 14.5531 22.3261 14.5531 22.3261L14.6571 22.0395C14.7031 21.9127 14.8281 21.8322 14.9626 21.8427L15.2716 21.8669C15.2979 21.8687 15.9442 21.9112 16.7537 21.7991C17.5902 21.6833 18.5481 21.4096 19.1976 20.8078C19.7181 20.3255 19.9926 19.6621 19.9926 18.8039C19.9926 16.9681 19.16 15.7076 18.3159 14.897C17.4744 14.089 16.629 13.7369 16.6164 13.7317L16.4086 13.6484C16.3122 13.6097 16.2426 13.5239 16.2247 13.4216L13.9649 0.493069C13.9363 0.329859 14.0455 0.174424 14.2087 0.145895L15.0006 0.00748423C15.1638 -0.0210446 15.3192 0.0881344 15.3477 0.251343L17.5074 12.6055C18.519 13.1381 21.3966 14.987 21.3966 18.8039C21.3966 20.0388 20.982 21.0701 20.1492 21.8402C19.3911 22.5413 18.4146 22.9023 17.5443 23.0879C16.7919 23.2484 16.0997 23.2819 15.6572 23.282C15.1526 24.2737 13.6567 26.6001 10.6983 26.6001C7.73981 26.6001 6.24374 24.2736 5.73928 23.282Z" fill="#2D2D2D"/>
                            </svg>
                            <div className="uppercase">
                                <span className="mr-2">Astringent</span>
                                <span className="align-middle mr-2">*</span>
                                <span className="mr-2">Fruity</span>
                                <span className="align-middle mr-2">*</span>
                                <span>Complex</span>
                            </div>
                        </div>
                        <div className="flex gap-x-10 w-full text-xs lg:text-base">
                            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3858 0.983643H11.6221V11.93H12.3858V0.983643Z" fill="#2D2D2D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3223 0.984814C11.3223 0.819129 11.4566 0.684814 11.6223 0.684814H12.386C12.5517 0.684814 12.686 0.819129 12.686 0.984814V11.9312C12.686 12.0969 12.5517 12.2312 12.386 12.2312H11.6223C11.4566 12.2312 11.3223 12.0969 11.3223 11.9312V0.984814ZM12.386 0.984814V11.9312H11.6223V0.984814H12.386Z" fill="#2D2D2D"/>
                            <path d="M23.7176 0.60083H0.299805V1.3645H23.7176V0.60083Z" fill="#2D2D2D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.600049C0 0.434363 0.134315 0.300049 0.3 0.300049H23.7178C23.8835 0.300049 24.0178 0.434363 24.0178 0.600049V1.36372C24.0178 1.5294 23.8835 1.66372 23.7178 1.66372H0.3C0.134315 1.66372 0 1.5294 0 1.36372V0.600049ZM23.7178 0.600049V1.36372H0.3V0.600049H23.7178Z" fill="#2D2D2D"/>
                            <path d="M5.45508 1.32979V14.613C5.45508 18.0641 8.39649 20.8717 12.012 20.8717C15.6275 20.8717 18.5688 18.0641 18.5688 14.613V1.32979H5.45508ZM12.012 21.6008C7.97539 21.6008 4.69141 18.466 4.69141 14.613V0.60083H19.3326V14.613C19.3326 18.466 16.0486 21.6008 12.012 21.6008Z" fill="#2D2D2D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.3916 0.600049C4.3916 0.434363 4.52592 0.300049 4.6916 0.300049H19.3328C19.4984 0.300049 19.6328 0.434363 19.6328 0.600049V14.6122C19.6328 18.6439 16.2012 21.9 12.0122 21.9C7.8232 21.9 4.3916 18.6439 4.3916 14.6122V0.600049ZM5.75528 1.62901V14.6122C5.75528 17.8846 8.54906 20.5709 12.0122 20.5709C15.4753 20.5709 18.269 17.8846 18.269 14.6122V1.62901H5.75528ZM5.45528 14.6122C5.45528 18.0633 8.39669 20.8709 12.0122 20.8709C15.6277 20.8709 18.569 18.0633 18.569 14.6122V1.32901H5.45528V14.6122ZM4.6916 14.6122C4.6916 18.4652 7.97558 21.6 12.0122 21.6C16.0488 21.6 19.3328 18.4652 19.3328 14.6122V0.600049H4.6916V14.6122Z" fill="#2D2D2D"/>
                            </svg>
                            <div className="uppercase">
                                <span className="mr-2">Bitter</span>
                                <span className="align-middle mr-2">*</span>
                                <span className="mr-2">Flamboyant</span>
                                <span className="align-middle mr-2">*</span>
                                <span>Bright</span>
                            </div>
                        </div>
                    </div>
                    <div className='cols-span-1 flex flex-col gap-y-7'>

                    <div>
                        <span className="font-semibold">Flavour Intensity</span>
                        <div className="flex gap-x-1">
                        <div className="w-full h-4 border-b-2 border-b-primary"></div>
                        <div className="w-full h-4 border-b-2 border-b-primary"></div>
                        <div className="w-full h-4 border-b-2 border-b-primary"></div>
                        <div className="w-full h-4 border-b-2 border-b-secondary"></div>
                        <div className="w-full h-4 border-b-2 border-b-secondary"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <span className="font-semibold">Suggested Use</span>
                        <div className="flex gap-x-2">
                            <div className="flex items-center gap-x-2.5 bg-background w-fit px-2 py-1.5 rounded-lg">
                                <span>In a cocktail</span>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.3 0.600037C1.47891 0.600037 0 2.07894 0 3.90004C0 5.72113 1.47891 7.20004 3.3 7.20004C3.89297 7.20004 4.46016 7.02894 4.95 6.75004L6.6 8.62504V11.4H4.2V12.6H10.2V11.4H7.8V8.62504L11.85 4.05004L12 3.88129V3.00004H6.45C6.08672 1.60785 4.79063 0.600037 3.3 0.600037ZM3.3 1.80004C4.13438 1.80004 4.85391 2.30394 5.175 3.00004H2.4V3.88129L2.55 4.05004L4.10625 5.81254C3.84141 5.92972 3.5625 6.00004 3.3 6.00004C2.12109 6.00004 1.2 5.07894 1.2 3.90004C1.2 2.72113 2.12109 1.80004 3.3 1.80004ZM4.275 4.20004H10.125L9.6 4.80004H6L7.8375 6.78754L7.2 7.50004L4.275 4.20004Z" fill="#2D2D2D"/>
                                </svg>
                            </div>
                            <div className="flex items-center gap-x-2.5 bg-background w-fit px-2 py-1.5 rounded-lg">
                                <span>At a party</span>
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0.600037C4.26302 0.600037 3.66667 1.19639 3.66667 1.93337C3.66667 2.67035 4.26302 3.2667 5 3.2667C5.73698 3.2667 6.33333 2.67035 6.33333 1.93337C6.33333 1.19639 5.73698 0.600037 5 0.600037ZM6.72917 3.3917C6.6276 3.3917 6.51823 3.40993 6.41667 3.43337V3.41254L6.3125 3.43337L4.89583 3.68337H4.83333L4.79167 3.7042C4.46615 3.81358 4.14583 4.02972 3.91667 4.37087L3.875 4.41254L2.95833 6.0792H2.9375V6.10004C2.8099 6.35525 2.53385 6.48545 2.20833 6.41254L1.04167 6.10004L0.6875 7.37087L1.89583 7.7042L1.91667 7.72504C2.78125 7.91775 3.6901 7.5167 4.10417 6.72504H4.125C4.1276 6.71983 4.1224 6.70941 4.125 6.7042L4.33333 6.3292V8.53754L3.27083 10.1417C3.00521 10.5427 2.99219 10.9907 3.125 11.3917L4.20833 13.9334H5.60417L4.54167 11.1417C4.47396 10.9412 4.47135 10.7328 4.60417 10.6L5.45833 9.30837L5.66667 9.2667V9.99587C5.66667 10.5427 5.875 11.0558 6.20833 11.475L7.8125 13.475L8.85417 12.6417L7.27083 10.6625L7.25 10.6417C7.05208 10.3943 7 10.2485 7 9.99587V5.03754L7.41667 5.43337H7.4375C8.11458 6.0141 9.11719 6.12868 9.89583 5.6417L9.9375 5.60004L10.7292 4.99587L9.9375 3.93337L9.1875 4.49587C8.90625 4.67035 8.5651 4.6391 8.3125 4.43337H8.29167L7.54167 3.72504C7.53385 3.71722 7.52865 3.70941 7.52083 3.7042C7.31771 3.5115 7.03385 3.39431 6.72917 3.3917ZM11 6.72504V7.30837C10.9974 7.33702 10.9974 7.36306 11 7.3917V9.43337C10.8932 9.42556 10.7865 9.44639 10.6667 9.47504C10.1328 9.60785 9.66667 10.0714 9.66667 10.5375C9.66667 11.0037 10.1328 11.2745 10.6667 11.1417C11.1562 11.0193 11.5755 10.6079 11.6458 10.1834C11.6536 10.1625 11.6615 10.1417 11.6667 10.1209C11.6667 10.1079 11.6667 10.0922 11.6667 10.0792C11.6667 10.0714 11.6667 10.0662 11.6667 10.0584V8.0167C12.7995 8.30316 13 9.2667 13 9.2667V8.60004C13 7.66775 12.2656 6.72504 11 6.72504Z" fill="#2D2D2D"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default Hightlight;