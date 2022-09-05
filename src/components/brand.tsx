import type { StaticImageData } from 'next/image';

import Image from 'next/image';


export interface BrandProps {
    logo: StaticImageData,
    title: string,
    subtitle: string,
    flag: StaticImageData,
    place: string
}

const Brand = ({logo, title, subtitle, flag, place}: BrandProps) => {
    return (
        <div className="w-96 h-28 bg-light-grey flex items-center">
            <div className='px-5'>
                <Image src={logo} alt={title} height={35} width={72}/>
            </div>
            <div className='pr-5 border-l-2'>
                <div className='font-lato ml-4 flex flex-col'>
                    <div className='uppercase font-bold text-xl text-light-black'>
                        {title}
                    </div>
                    <div className='mt-1 font-normal text-base text-primary'>
                        <div>
                            {subtitle}
                        </div>
                        <div className='flex items-center mt-1'>
                            <Image src={flag} alt={place} height={15} width={22}/>
                            <div className='ml-3'>
                                {place}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;