import React from "react";

export default function LoadinsProductsComponent() {
  const handleRender = () => {
    return (
      <div className="w-[90%] md:w-[174px] h-[305px] shadow-pattern cursor-pointer">
        <div className="w-full h-[230px] relative bg-grayPattern animate-pulse"></div>
        <div className="p-[10px] flex flex-col gap-y-2">
          <div className="flex justify-between items-center w-[100%]">
            <div className="w-[40px] leading-[25px] h-3 bg-gray-300 animate-pulse"></div>
            <div className="w-[40px] leading-[25px]  h-3 bg-gray-300 animate-pulse"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40px] leading-[25px]  h-3 bg-gray-300 animate-pulse"></div>
            <button className="bg-gray-300 rounded-[4px] w-[20px] h-3 hover:brightness-90 relative animate-pulse"></button>
          </div>
        </div>
      </div>
    );
  };

  const list = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <>
      {list.map(() => {
        return handleRender();
      })}
    </>
  );
}
