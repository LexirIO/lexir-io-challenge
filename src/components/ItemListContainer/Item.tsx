import { BsPlusLg } from "react-icons/bs";

function Item({ product }: any) {
  return (
    <div className="w-40 rounded overflow-hidden shadow-md">
      <div className="image bg-[#F2F2F2] flex justify-center py-4">
        <img src={product.image} alt="bed" width={40} />
      </div>
      <div className="flex justify-between px-4 pt-4">
        <p className="font-bold text-xs mb-2">{product.brand}</p>
        <p className="text-gray-700 text-xs text-gray-500">€{product.price}</p>
      </div>
      <div className="flex justify-between px-4 pb-4">
        <p className="font-semibold text-xs text-gray-500 mb-2">{product.category}</p>
        <BsPlusLg className=" text-gray-400 bg-[#F2F2F2] h-5 w-5 p-1 rounded text-center" />
      </div>
    </div>
  );
}
export default Item;
