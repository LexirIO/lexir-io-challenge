import React from 'react';
import LexirIcon from '@assets/Frame.svg';
import Image from 'next/image';
import { socialIcon } from '../../constant';
import CategoriesList from '@components/CategoriesList';

const FooterContent = () => {
  return (
    <div className="bg-slate-900 text-white flex justify-between px-9 pt-10 pb-5">
      <div className="w-3/12">
        <Image src={LexirIcon} />
      </div>
      <CategoriesList />
      <div className="w-3/12 flex justify-end">
        {socialIcon.map((item, index) => (
          <div key={index} className='mx-2 '>
            <Image  src={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
