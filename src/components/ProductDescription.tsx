import Image from "next/image";

import { Product } from "../interfaces/product";

interface Props {
  product: Product;
}

function ProductDescription({ product }: Props) {
  return (
    <div className="flex-col mb-10 w-productDescription">
      {/* Heading and subheading */}
      <h1 className="text-5xl font-bold font-heading leading-[56px]">
        {product.name}
      </h1>
      <p className="text-xl font-bold leading-6 uppercase text-subHeading mb-[33px]">
        {product.category}
      </p>
      {/* Flag, country of origin and ABV */}
      <div className="flex justify-between mb-4 text-base font-bold leading-5 uppercase">
        <div className="flex items-center">
          <Image
            src={require(`../public/assets/${product.flag}.svg`)}
            width={18}
            height={20}
          />
          <p className="ml-2.5">{product.origin}</p>
        </div>
        <p>{product.abv}% ABV</p>
      </div>
      {/* Description */}
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDescription;
