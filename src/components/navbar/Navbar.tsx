import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import CartIcon from '../../assets/cart-icon.svg';
import UserIcon from '../../assets/user.svg';

const Navbar = () => {
    return (
        <nav className="d-flex">
            <img src={Logo} alt="brand-logo" />
            <div>
                <Link to="/" className="p-4 text-gray-600 text-sm">
                    PRODUCTS
                </Link>
                <Link to="/" className="p-4 text-gray-600 text-sm">
                    BRANDS
                </Link>
                <div>
                <img src={CartIcon} alt="brand-logo" />
                    <Link to="/" className="p-4 text-gray-600 text-sm">
                        SIGN IN
                    </Link>
                </div>
                <div>
                <img src={UserIcon} alt="brand-logo" />
                    <Link to="/" className="p-4 text-gray-600 text-sm">
                        CART
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
