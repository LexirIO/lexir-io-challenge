import { BsBasket3 } from "react-icons/bs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import logoBlk from "../public/assets/logoBlk.png";
import basket from "../public/assets/shopBasket.png";
import avatar from "../public/assets/userAvatar.png";

const Header = () => {
    return (
        <header>
            <div
                id="header__container"
                className="flex justify-between items-center w-full h-[104px] px-4 text-black bg-white  shadow-lg shadow-rose-100  "
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
                            <Image src={avatar} alt="logo" />
                            <span className="ml-[8px]">SIGN IN</span>
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex flex-row">
                            <Image src={basket} alt="basket" />
                            <span className="ml-[8px]">CART</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
