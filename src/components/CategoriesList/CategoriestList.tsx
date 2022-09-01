import React from 'react';
import { arrayCategories } from '../../constant';
import CategoryOptions from '@components/CategoriesList/CategoryOptions';

const CategoriesList = () => {
  return (
    <div className="flex w-1/2 justify-between">
      {arrayCategories.map((item, index) => (
        <div key={index} className="flex flex-col">
          <h2 className="text-gray-400 h-10">
            {item.title}
          </h2>
          <CategoryOptions options={item.options} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
