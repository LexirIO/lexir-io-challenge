import React, { FC } from 'react';
import BottleItem from '@components/BottleItem';
import { IBottlesProps } from '../types/bottles';

const RightContent: FC<IBottlesProps> = ({ bottles }) => {
  return (
    <div className="w-2/3 flex flex-col">
      <div className="flex justify-between pl-4 flex-wrap">
        {bottles.map((item, index) => (
          <BottleItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RightContent;


