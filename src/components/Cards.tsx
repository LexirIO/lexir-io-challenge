import { StaticImageData } from "next/image";
import Image from "next/image";

export const Cards = ({ logo, title, subTitle, city, country, flag }: CardsProps) => {
  return (
    <div className="flex p-2 font-secondaryFont text-cardTextContent border border-cardsBorder rounded-radiusS hover:bg-secondary mb-5">
      <div className=" w-1/4 flex  justify-center items-center ml-1">
        <Image src={logo} alt="" className="object-contain" />
      </div>
      <div className=" w-2/3 h-full border-l-cardsSeparator border-l-2 ml-5 pl-5">
        <h3 className=" font-bold text-fontS capitalize text-primary">{title}</h3>
        <p className=" text-fontXS ">{subTitle}</p>
        <figure className="flex md:items-center items-start">
          <Image src={flag} alt="" className=" mr-3" />
          <figcaption className="md:whitespace-nowrap">{city}, {country}</figcaption>
        </figure>
      </div>
    </div>
  );
};
interface CardsProps {
  logo: StaticImageData,
  flag: StaticImageData,
  title: string,
  subTitle: string,
  city: string,
  country: string


}
