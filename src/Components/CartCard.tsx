import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartProp, removeProduct } from "src/features/CartSlice";

export function CartCard(product : cartProp){

  const dispatch = useDispatch()
  const handleRmoveProduct = ()=>{
    dispatch(removeProduct(product.index!))
  }

  return (
    <div className="flex  gap-4 bg-productgrey p-2 items-center mb-2">
      <div className="w-10">
        <Image src={product.productImg} alt="product"/>
      </div>
      <div className="flex-grow font-bold">
        <h2>{product.name}</h2>
        <div className="flex gap-4 text-sm text-locationgrey">
          <span>{product.company}</span>
          <span>x1</span>
        </div>
        <div>
          <span>Total ${product.price}</span>
        </div>
      </div>
      
      <div className="bg-white px-2 rounded-md font-semibold text-locationgrey self-start cursor-pointer" onClick={handleRmoveProduct}>
        <span>X</span>
      </div>

    </div>
  )
}
