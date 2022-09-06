import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";

export const CallToAction = ({ image }: CallToActionProps) => {
  return (
    <div className=" bg-secondary lg:flex lg:justify-between ">
      <div className=" lg:w-1/2">
        <div className=" pl-9 pr-4 py-16 h-full flex flex-col justify-between">
          <div>
            <h2 className=" text-5xl text-primary font-bold font-mainFont mb-6" >
              Have a brand you’d like to see on <span className=" text-sucess">Lexir</span>?
            </h2>
            <p className=" text-paragrah text-fontXS font-secondaryFont font-normal mb-7">
              Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you'd like to see on Lexir, let us know.
            </p>
          </div>
          <div>
            <Button label="Suggest a Brand" handleClick={() => console.log("click")} />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image src={image} alt="#" layout="responsive" />
      </div>
    </div>
  );
};
interface CallToActionProps {
  image: StaticImageData

}
