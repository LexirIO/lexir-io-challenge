import Image from "next/image";
import GitBucketPhoto from '../public/BottlesImage.jpg'

export default function BottlesImage() {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] ">
      <div className="">
        <div className="">
          <Image
            src={GitBucketPhoto}
            alt = ''
            objectFit="cover"
            width={608}
            height={394}
          />
        </div>
      </div>
    </div>
  )}