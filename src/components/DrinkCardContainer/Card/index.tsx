import React from "react";

interface CardProps {
  bottle: "gaston" | "silentpool" | "stockholms" | "umami";
}
export const Card: React.FC<CardProps> = ({ bottle }) => {
  return (
    <div className="w-72 mx-5 shadow mb-6">
      <div className="bg-gray-100 flex justify-center py-5">
        <img src={`assets/img/bottles/${bottle}.png `} />
      </div>

      <div className="shadow p-4">
        <div className="flex justify-between items-center pb-3 ">
          <p className="text-xl">MR GASTON</p>
          <p className="text-gray-400 text-xl">€32</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-xl">BRANDY</p>
          <button className="text-gray-700 px-2 bg-gray-100 rounded-lg text-2xl">+</button>
        </div>
      </div>
    </div>
  );
};
