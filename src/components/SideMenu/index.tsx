export const SideMenu = () => {
  return (
    <div className=" shadow px-10 pt-5 pb-10 flex flex-col items-center max-w-2xl h-fit">
      <img src="/assets/img/baldoria-logo.png" className="w-80 pb-16" />
      <div className="font-bold text-5xl p-5">Baldoria Vermouth</div>
      <div className=" text-2xl  p-6">
        Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten
        recipe from co-creators Niels’ and Wouters’ rebellious grandparents.
      </div>
      <button className=" text-2xl pt-8 pb-20 text-green-600">Read More</button>
      <div className="w-full">
        <div className="flex items-start pb-16">
          <img src="/assets/icons/location-pin.svg" className="w-14 pr-4" />
          <div>
            <div className="text-xl">Location</div>
            <div className="text-2xl text-gray-700">London, United Kingdom</div>
          </div>
        </div>
        <div className="flex items-start">
          <img src="/assets/icons/box.svg" className="w-14 pr-4" />
          <div>
            <div className="text-xl">Product Categories</div>
            <div className="flex pt-4">
              <div className="text-gray-700 text-xl py-2 px-6 bg-gray-100	mr-2 rounded-lg">Gin</div>
              <div className="text-gray-700  text-xl py-2 px-6 bg-gray-100	rounded-lg">Vodka</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
