import { BsBasket3 } from "react-icons/bs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import logoBlk from "../public/logoBlk.png";

const Header = () => {
    return (
        <header>
            <div
                id="header__container"
                className="flex justify-between items-center w-full h-[104px] px-4 text-black bg-white fixed shadow-lg shadow-rose-100 "
            >
                <Link href="/">
                    <div>
                        <Image className="ml-[34px]" src={logoBlk} alt="logo" />
                    </div>
                </Link>
                <div className="flex flex-row items-center justify-between mr-[34px]">
                    <Link href="/products">
                        <div className="mr-10">PRODUCTS</div>
                    </Link>
                    <Link href="/brands">
                        <div className="mr-10">BRANDS</div>
                    </Link>
                    <Link href="/signIn">
                        <div className="flex flex-row mr-10 ">
                            <Icon
                                id="user-icon"
                                icon="carbon:user-avatar"
                                className="text-xl mr-2 mt-[2px]"
                            />
                            <span>SIGN IN</span>
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex flex-row">
                            <BsBasket3
                                id="cart-icon"
                                className="text-lg  mr-2 mt-[2px] "
                            />
                            <span>CART</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
