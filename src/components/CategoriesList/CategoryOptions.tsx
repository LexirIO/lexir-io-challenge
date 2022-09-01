import React, { FC } from 'react';
import Link from 'next/link';

interface IProps {
  options: string[];
}

const CategoryOptions: FC<IProps> = ({ options }) => {
  return (
    <>
      {options.map((option, index) => (
        <Link key={index} href={'/'}>
          <a className='py-2'>{option}</a>
        </Link>
      ))}
    </>
  );
};

export default CategoryOptions;
