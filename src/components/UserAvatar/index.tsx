import Image, { StaticImageData } from "next/image";
import DefaultImage from "src/public/defaultUserImage.png";

import { useState } from "react";

export default function UserAvatar({
  width,
  height,
  image,
  name,
  company,
  className,
}: {
  width: string;
  height: string;
  image: string | StaticImageData;
  name: string;
  company: string;
  className: string;
}) {
  const [imageSource, setImageSource] = useState(DefaultImage);
  return (
    <div className="flex mt-[100px] items-center">
      <Image
        src={image}
        alt="user avatar"
        width={width}
        height={height}
        className={className}
        onError={() => {
          setImageSource(DefaultImage);
        }}
      />
      <div className="flex ml-[11px] flex-col">
        <p className="text-primary-700 text-[22px] font-bold">{name}</p>
        <p className="text-primary-100">{company}</p>
      </div>
    </div>
  );
}
