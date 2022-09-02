import React from "react";
import { v4 as uuidv4 } from "uuid";

interface AnchorPropsList {
  title: string;
  listAnchor: string[];
}

export default function ListAnchorComponent({
  title,
  listAnchor,
}: AnchorPropsList) {
  return (
    <div className="flex md:flex-col space-y-5 md:space-y-0 space-x-5 md:space-x-0 md:h-full ">
      <h2
        className="text-[16px] leading-[35px] text-secundaryFont font-[500] flex justify-start items-center
      "
      >
        {title.toUpperCase()}
      </h2>
      <ul>
        {listAnchor.map((item) => {
          return (
            <div
              key={uuidv4()}
              className={"flex flex-col justify-start items-start"}
            >
              <a
                className={
                  "leading-[32px] font-[500] text-[16px] text-white capitalize cursor-pointer"
                }
              >
                {item}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
