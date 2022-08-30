function Item({ product }) {
  return (
    <div class="w-40 rounded overflow-hidden shadow-md">
      <div className="image bg-[#F2F2F2] flex justify-center py-4">
        <img src={product.image} alt="bed" width={40} />
      </div>
      <div className="flex justify-between px-4 pt-4">
        <div className="font-bold text-xs mb-2">{product.brand}</div>
        <p className="text-gray-700 text-xs text-gray-500 ">{product.price}</p>
      </div>
      <div className="flex justify-between px-4 pb-4">
        <div className="font-semibold text-xs text-gray-500 mb-2">{product.category}</div>
        <p className="text-gray-700 text-xs bg-[#F2F2F2] h-5 w-5 rounded text-center ">
          <i class="fa-solid fa-plus text-gray-500 align-middle	"></i>
        </p>
      </div>
    </div>
  );
}
export default Item;
