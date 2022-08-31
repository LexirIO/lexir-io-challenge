import Image from "next/image"

type productProp = {
    image:string,
    name:string,
    company:string,
    price:number,
    id:number
  }

export function ProductCard(prop : productProp) {


  return (
    <div className="flex flex-col shadow-md">
        <div className="bg-productgrey w-full py-4 flex justify-center ">
        <Image src={prop.image} alt={prop.image} objectFit="contain" />
        </div>
        <div className="px-2 pt-2 flex justify-between">
        <h2 className="font-semibold">{prop.name}</h2>
        <span className="text-producttext">${prop.price}</span>
        </div>
        <div className="p-2 flex justify-between">
        <h2 className="text-md text-producttext">{prop.company}</h2>
        <button className="bg-productgrey font-bold px-2 pb-1 text-center rounded-md">+</button>
        </div>
    </div>
  )
}
