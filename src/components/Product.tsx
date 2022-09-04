import Image from 'next/image';
import product from '../assets/images/product.png';
import belgium from '../assets/images/belgium.svg';

export default function Product() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-twoToOne gap-20">
      <Image src={product} alt="kiss my rhubarb" className="object-contain" />

      <div>
        <h1 className="font-sourceSerif text-5xl leading-tight">
          Kiss My Rhubarb
        </h1>
        <p className="font-bold text-xl text-ccc">APERITIF</p>
        <p className="flex justify-between items-center mt-10">
          <span className="flex gap-2 items-center">
            <Image src={belgium} alt="belgium flag" className="z-0" />
            <p className="font-bold text-base leading-5">IZEGEM, BELGIUM</p>
          </span>
          <span className="font-bold text-base leading-5">21% ABV</span>
        </p>
        <p className="font-regular leading-6">
          Kiss My Rhubarb is a fresh and aromatic Belgian aperitif.
          It uses bright and zesty supporting ingredients like pink grapefruit
          and lemon verbena to create an aperitif perfectly designed to
          pair with hot summery nights. 
        </p>
      </div>
    </div>
  )
}
