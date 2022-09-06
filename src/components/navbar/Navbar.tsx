import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Logo from "@assets/logo.svg";
import CartIcon from '@assets/cart-icon.svg';
import UserIcon from '@assets/user.svg';

const Navbar = () => {
    return (
        <nav className="flex justify-between box-shadow p-8 pb-8">
            <Image src={Logo} alt="brand-logo" />
            <div className="flex justify-between w-[50%] xl:w-[30%]">
                <Link href="/product" className="nav-link">
                    <a>PRODUCTS</a>
                </Link>
                <Link href="/brands" className="nav-link">
                <a>BRANDS</a>
                </Link>
                <div className="flex items-center">
                <Image src={CartIcon} alt="brand-logo" />
                    <Link href="/signin" className="nav-link">
                    <a className="ml-2">SIGN IN</a>
                    </Link>
                </div>
                <div className="flex items-center">
                <Image src={UserIcon} alt="brand-logo" />
                    <Link href="/cart" className="nav-link">
                    <a className="ml-2">CART</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
