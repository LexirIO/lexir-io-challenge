import React from "react";

export const SideMenu = () => {
  return (
    <div className=" border-2 border-gray-600 px-8 pt-5 pb-20 flex flex-col items-center ">
      <img src="/assets/img/baldoria-logo.png" className="w-50 pb-10" />
      <div className="font-bold text-4xl p-5">Baldoria Vermouth</div>
      <div className="px-6">
        Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten
        recipe from co-creators Niels’ and Wouters’ rebellious grandparents.
      </div>
      <button className="font-bold text-xl py-10 text-green-600">Read More</button>
      <div>
        <div className="flex items-start pb-5">
          <img src="/assets/icons/location-pin.svg" className="pr-4" />
          <div>
            <div>Location</div>
            <div className="text-2xl text-gray-700">London, United Kingdom</div>
          </div>
        </div>
        <div className="flex  items-start">
          <img src="/assets/icons/box.svg" className="pr-4" />
          <div>
            <div>Product Categories</div>
            <div className="flex pt-4">
              <div className="text-gray-700 py-2 px-6 bg-gray-100	mr-2 rounded-lg">Gin</div>
              <div className="text-gray-700 py-2 px-6 bg-gray-100	rounded-lg">Vodka</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
