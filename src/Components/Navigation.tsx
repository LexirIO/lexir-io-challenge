import Image from "next/image"
import Link from "next/Link"
import logo from '../public/logo.png'
import user from '../public/user.svg'
import cart from '../public/CART.svg'
import menu from '../public/menu.svg'
import { useState } from "react"

export function Navigation() {

  const [showMenu,setShowMenu] = useState(false)

  const togleShow = ()=> {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  let visible = {display:'block'}
  let hiding = {display:'hidden'}
  return (
  <div className="relative max-w-[1280px] m-auto flex justify-end p-8 gap-8 items-center ">
      <div className=" sm:hidden flex cursor-pointer" onClick={togleShow}>
        <Image   src={menu} alt="menu" />
      </div>
      <div className=" flex flex-grow">
        <Image   src={logo} alt="logo" objectFit="contain" />
      </div>

      <nav className="  hidden sm:flex gap-6 text-sm font-medium list-none ">
          <Link href='/'>
          <li >PRODUCTS</li>
          </Link>
          <Link href='/'>
          <li >BRANDS</li>
          </Link>
          <Link href='/'>
          <li className="flex items-center gap-2">
              <Image src={user} alt='user'/>
              <span >HELLO, LEANDRO</span>
          </li>
          </Link>
      </nav>

      <div className="relative flex items-center gap-2">
              <span className="absolute z-10 left-3 -top-1 border border-white bg-cartgreen rounded-[50%] text-[0.5rem] text-white px-1">3</span>
              <Image src={cart} alt='cart'/>
              <span className="text-sm font-medium">CART</span>
      </div>
      {showMenu && (
         <div className=" absolute z-10 p-8 top-20 left-0 bg-white w-full shadow-md ">
         <nav className="list-none flex flex-col gap-4 text-sm font-medium ">
             <Link href='/'>
             <li >PRODUCTS</li>
             </Link>
             <Link href='/'>
             <li >BRANDS</li>
             </Link>
             <Link href='/'>
             <li className="flex items-center gap-2">
                 <Image src={user} alt='user'/>
                 <span >HELLO, LEANDRO</span>
             </li>
             </Link>
         </nav>
       </div>
      )}
     
      
  </div>
  )
}
