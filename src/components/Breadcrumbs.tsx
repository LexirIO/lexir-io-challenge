import Link from "next/link";
import Image from "next/image";

import HouseIcon from "../public/assets/house.svg";
import ArrowRightIcon from "../public/assets/arrow-right.svg";

interface Props {
  url: string;
}

function Breadcrumbs({ url }: Props) {
  // Breaking up the url to create dynamic breadcrumbs
  const parsedUrl = url.replaceAll("-", " ").split("/");
  parsedUrl[0] = "home";

  // Pre render breadcrumbs
  const renderedBreadcrumbs = parsedUrl.map((text, i) => {
    const isLast = i === parsedUrl.length - 1;

    return (
      <li key={text} className="flex text-base capitalize">
        <div className={`${isLast ? "font-bold" : ""} mx-5`}>
          <Link href="#">
            <a>{text}</a>
          </Link>
        </div>
        {!isLast ? <Image alt="arrow-right" src={ArrowRightIcon} height={14} width={8} /> : ""}
      </li>
    );
  });

  return (
    <div className="flex items-end w-screen h-breadcrumbs">
      <div className="flex justify-start w-full max-w-[1210px] mx-auto">
        <div className="flex">
          <Image alt="house" src={HouseIcon} height={23} width={21} />
          <ul className="flex">{renderedBreadcrumbs}</ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
