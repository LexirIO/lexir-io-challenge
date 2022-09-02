import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkPorps extends AnchorHTMLAttributes<any> {
  styled?: string;
  imageClassname?: String;
  title: string;
  image?: ReactNode;
}

export function AnchorComponent({
  title,
  styled,
  image,
  imageClassname,
  ...rest
}: LinkPorps) {
  return (
    <a
      {...rest}
      className={`${styled} justify-start items-center min-w-[160px]
       md:justify-center md:items-center text-[14px] leading-[30px] w-auto 
       md:w-[100%] font-[500] gap-x-[10px] text-dafaultText md:flex-row-reverse
        lg:w-[158px]`}
    >
      <p className="text-left">{title}</p>
      <div
        className={`h-[30px] w-[30px] relative ${image ? "flex" : "hidden"}`}
      >
        {image ? image : null}
      </div>
    </a>
  );
}
