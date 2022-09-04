import Image from 'next/image';
import product from '../assets/images/product.png';
import belgium from '../assets/images/belgium.svg';
import plus from '../assets/images/plus.svg';
import minus from '../assets/images/minus.svg';
import cn from 'classnames';
import { useEffect, useState } from 'react';

type Props = {
  isDesktop: boolean;
  handleChart: (value: boolean) => void;
};

export default function Product({isDesktop, handleChart}: Props) {
  const [productCount, setProductCount] = useState(2);

  const oneBottle = 115.165;
  const [amount, setAmount] = useState(
    Number((oneBottle * productCount).toFixed(2))
  );

  useEffect(
    () => {
      setAmount(Number((oneBottle * productCount).toFixed(2)))
    },
    [productCount],
  );

  const chartAction = () => {
    if (productCount > 0) {
      handleChart(true);
      setAmount(0);
      setProductCount(0);
    }
  };

  const decreaseCount = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    } else (
      setProductCount(0)
    )
  };

  return (
    <div className={cn("max-w-7xl mx-auto px-8 py-10 grid gap-20", {'grid-cols-twoToOne': isDesktop, 'grid-rows-2': !isDesktop})}>
      <Image src={product} alt="kiss my rhubarb" className={cn("object-contain absolute z-0", {'row-start-2': !isDesktop})} />

      <div className={cn({'row-start-1': !isDesktop})}>
        <h1 className="font-sourceSerif text-5xl leading-tight">
          Kiss My Rhubarb
        </h1>

        <p className="font-bold text-xl text-ccc">APERITIF</p>

        <p className="flex justify-between items-center mt-10">
          <span className="flex gap-2 items-center">
            <Image src={belgium} alt="belgium flag" className="z-0" />
            <span className="font-bold text-base leading-5">IZEGEM, BELGIUM</span>
          </span>
          <span className="font-bold text-base leading-5">21% ABV</span>
        </p>

        <p className="font-regular leading-6 mt-3">
          Kiss My Rhubarb is a fresh and aromatic Belgian aperitif.
          It uses bright and zesty supporting ingredients like pink grapefruit
          and lemon verbena to create an aperitif perfectly designed to
          pair with hot summery nights. 
        </p>

        <div className="grid grid-cols-twoToOne gap-10 mt-10">
          <div className="flex justify-center items-center px-11 py-3
            border border-border rounded leading-6"
          >
            700ml
          </div>

          <div className="flex items-center justify-around border
          border-border rounded py-3"
          >
            <button 
              type='button' 
              onClick={decreaseCount}
              className="flex items-center p-1 border-r"
            >
              <Image src={minus} alt="minus image" />
            </button>
            <span className="w-9 flex justify-center">
              {productCount}
            </span>
            <button 
              type='button' 
              onClick={() => setProductCount(productCount + 1)}
              className="flex items-center p-1 border-l"
            >
              <Image src={plus} alt="plus image" />
            </button>
          </div>
        </div>

        <button 
            type='button'
            className="flex justify-between items-center px-10 py-3 w-full mt-3 bg-primary"
            onClick={chartAction}
          >
            <p className="text-white font-regular" >Add to Cart</p>
            <p className="text-white font-regular" >{`$${amount}`}</p>
        </button>
      </div>
    </div>
  )
}
