import Image from "next/image";
import Rhubharb from '../public/Rhubharb.jpg'

export default function ProductImage() {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] ">
      <div className="">
        <div className="">
          <Image
            src={Rhubharb}
            alt = ''
            objectFit="cover"
            width={748}
            height={644}
          />
        </div>
      </div>
      </div>

  );
}