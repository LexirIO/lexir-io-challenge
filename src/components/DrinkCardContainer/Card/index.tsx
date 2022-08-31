import React from "react";

interface CardProps {
  bottle: "gaston" | "silentpool" | "stockholms" | "umami";
}
export const Card: React.FC<CardProps> = ({ bottle }) => {
  return (
    <div className="w-52 mx-4 shadow">
      <div className="bg-gray-100 flex justify-center py-5">
        <img src={`assets/img/bottles/${bottle}.png `} />
      </div>

      <div className="shadow px-2 py-3">
        <div className="flex justify-between pb-3 ">
          <p>MR GASTON</p>
          <p className="text-gray-400">€32</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-400">BRANDY</p>
          <button className="text-gray-700 px-2 bg-gray-100 rounded-lg">+</button>
        </div>
      </div>
    </div>
  );
};
