import type { StaticImageData } from 'next/image';

import Image from 'next/image';


interface BrandProps {
    logo: StaticImageData,
    title: string,
    subtitle: string,
    flag: string,
    place: string
}

const Brand = ({logo, title, subtitle, flag, place}: BrandProps) => {
    return (
        <div className="w-80 h-28 bg-light-grey flex items-center">
            <div className='px-6'>
                <Image src={logo} alt={title} height={35} width={72}/>
            </div>
            <div className='pr-6 border-l-2'>
                <div className='ml-4 flex flex-col'>
                    <div className='uppercase font-lato font-bold text-xl text-light-black'>
                        {title}
                    </div>
                    <div>
                        {subtitle}
                    </div>
                    <div>
                        {flag}
                    </div>
                    <div>
                        {place}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;