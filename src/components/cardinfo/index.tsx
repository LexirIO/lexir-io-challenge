import Image from 'next/image';
import BaldoriaLogo from 'src/assets/imgs/baldoria_logo.svg';
import LocationIcon from 'src/assets/icons/locationico.svg';
import BoxIcon from 'src/assets/icons/boxico.svg';

const CardInfo = () => {
    return (
        <div className="border border-inherit max-w-sm min-w-[379px] px-10 py-5 gap-4">
            <div className="flex justify-center flex-col">
                <Image className="w-54 h-18" src={BaldoriaLogo} alt="Baldoria_logo" />
                <div className="flex flex-col gap-4.5 items-center mt-[66.8px] w-[299px]2">
                    <span className="font-bold text-3xl text-center font-source w-full">Baldoria Vermouth</span>
                    <span className="font-lato text-base max-w-[295px]">Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.</span>
                    <span className="font-lato font-bold text-green-neutral text-xl text-center mt-8">Read More</span>
                </div>

                <div className="flex flex-row items-start align-middle mt-16 space-x-4">
                    <Image className="fill-white" src={LocationIcon} alt="locationico" />
                    <div className="flex flex-col">
                        <span>Location</span>
                        <span>London, United Kingdom</span>
                    </div>
                </div> 

                <div className="flex flex-row items-start mt-10 mb-12 space-x-4">
                    <Image src={BoxIcon} alt="boxico" />
                    <div>
                        <span>Product Categories</span>
                        <div className="flex flex-row space-x-2 mt-3">
                            <div className="flex justify-center items-center h-8.5 w-16 bg-cgreysec">
                                <span>Gin</span>
                            </div>
                            <div className="flex justify-center items-center h-8.5 w-24 bg-cgreysec">
                                <span>Vodka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;