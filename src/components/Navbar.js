import { BsBasket3 } from "react-icons/bs";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <nav>
            <div
                id="navbar__container"
                className="flex justify-between items-center w-full h-[104px] px-4 text-black bg-white fixed shadow-lg shadow-black "
            >
                <div>
                    <picture>
                        <img
                            className="ml-[34px]"
                            src="/src/assets/logoBlk.png"
                            alt="logo"
                        />
                    </picture>
                </div>
                <div className="flex flex-row items-center justify-between mr-[34px]">
                    <div className="mr-10">PRODUCTS</div>
                    <div className="mr-10">BRANDS</div>
                    <div className="flex flex-row mr-10 ">
                        <Icon
                            id="user-icon"
                            icon="carbon:user-avatar"
                            className="text-xl mr-2 mt-[2px]"
                        />
                        <span>SIGN IN</span>
                    </div>
                    <div className="flex flex-row">
                        <BsBasket3
                            id="cart-icon"
                            className="text-lg  mr-2 mt-[2px] "
                        />
                        <span>CART</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
