import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'
import user from '../public/user.svg'
import cart from '../public/CART.svg'
import menu from '../public/menu.svg'
import { useState } from "react"
import { useSelector } from "react-redux"
import {  RootState } from "src/app/store"
import { CartCard } from "./CartCard"

export function Navigation() {
  
  const [showMenu,setShowMenu] = useState(false)
  const [showCart,setShowCart] = useState(false)
  
  const togleShow = ()=> {
    setShowMenu(!showMenu)
  }
  const togleShowCart = ()=> {
    setShowCart(!showCart)
  }

  // redux states and actions
  const cartProducts = useSelector((state:RootState) => state.cartProducts.value)
  
  
  return (
  <div className="relative max-w-[1280px] m-auto flex justify-end p-8 gap-8 items-center ">
      <div className=" sm:hidden flex cursor-pointer" onClick={togleShow}>
        <Image   src={menu} alt="menu" />
      </div>
      <div className=" flex flex-grow">
        <Image   src={logo} alt="logo" objectFit="contain" />
      </div>

      <nav className="  hidden sm:flex gap-6 text-sm font-medium ">
          <Link href='/'><a>PRODUCTS</a></Link>
          <Link href='/'><a>BRANDS</a></Link>
          <Link href='/'>
          <a className="flex items-center gap-2">
              <Image src={user} alt='user'/>
              <span >HELLO, LEANDRO</span>
          </a>
          </Link>
      </nav>

      <div className="relative flex items-center gap-2 cursor-pointer" onClick={togleShowCart}>
              <span className="absolute z-10 left-3 -top-1 border border-white bg-cartgreen rounded-[50%] text-[0.5rem] text-white px-1">{cartProducts.length}</span>
              <Image src={cart} alt='cart'/>
              <span className="text-sm font-medium">CART</span>
      </div>
      {showMenu && (
         <div className=" absolute z-10 p-8 top-20 left-0 bg-white w-full shadow-md ">
         <nav className="list-none flex flex-col gap-4 text-sm font-medium ">
         <Link href='/'><a>PRODUCTS</a></Link>
          <Link href='/'><a>BRANDS</a></Link>
          <Link href='/'>
          <a className="flex items-center gap-2">
              <Image src={user} alt='user'/>
              <span >HELLO, LEANDRO</span>
          </a>
          </Link>
         </nav>
       </div>
      )}

      {showCart && <div className="w-full sm:w-[500px] absolute z-50 shadow-lg top-[88px] right-0 sm:right-10 flex flex-col bg-white border p-6  ">
        {cartProducts.length > 0 ? 
        <div>
          {cartProducts.map((product, index: number) => {
            return (
              <CartCard key={product.id} index={index} { ...product} />
              )
            
          })}
          <button className="w-full bg-cartgreen mt-4 p-3 text-white rounded-sm">Checkout</button>
        </div> : <p className="my-8 mx-auto">Your Cart is empty</p> 
        }
      </div>}
     
      
  </div>
  )
}
