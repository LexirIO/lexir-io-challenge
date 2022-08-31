import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'
import user from '../public/user.svg'
import cart from '../public/CART.svg'

export function Navigation() {
  return (<div className="max-w-[1280px] m-auto flex justify-end p-8 gap-8 items-center">
  <div className=" flex flex-grow">
    <Image   src={logo} alt="logo" objectFit="contain" ></Image>
  </div>
    <nav className="  hidden sm:flex gap-6  list-none ">
        <Link href='/'>
        <li className="text-sm font-medium">PRODUCTS</li>
        </Link>
        <Link href='/'>
        <li className="text-sm font-medium">BRANDS</li>
        </Link>
        <Link href='/'>
        <li className="flex items-center gap-2">
            <Image src={user} alt='user'></Image>
            <span className="text-sm font-medium">HELLO, LEANDRO</span>
        </li>
        </Link>
    </nav>

    <div className="relative flex items-center gap-2">
            <span className="absolute z-10 left-3 -top-1 border border-white bg-cartgreen rounded-[50%] text-[0.5rem] text-white px-1">3</span>
            <Image src={cart} alt='cart'></Image>
            <span className="text-sm font-medium">CART</span>
    </div>
  </div>
  )
}
