import React, { FC } from 'react';
import Image from 'next/image';
import PlusIcon from '@assets/Frame1405.svg';
import { IBottle } from '../types/bottles';

interface IProps {
  item: IBottle;
}

const BottleItem: FC<IProps> = ({ item }) => {

  return (
    <div className="w-44 shadow-md mb-10">
      <div className="bg-gray-100 py-5 text-center">
        <Image src={item.icon} />
      </div>
      <div className="p-2">
        <div className="flex justify-between bg-none">
          <div className="font-bold uppercase">{item.title}</div>
          <div className="text-gray-500">€{item.price}</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="font-bold uppercase text-gray-500 ">{item.subtitle}</div>
          <div>
            <Image src={PlusIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleItem;
