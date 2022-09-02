import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logos/logo.png";
import profile from "../../assets/icons/carbon_user-avatar.svg";
import cart from "../../assets/icons/cart-icon.svg";
import Hamburger from "../Common/Hamburger";

const Navbar = () => {
  return (
    <nav className="flex text-sm py-10 px-8.5 justify-between items-center antialiased shadow-nav">
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" />
        </a>
      </Link>
      <Hamburger />
      <div className="hidden  gap-10 justify-center items-center md:flex">
        <Link href="/" passHref>
          <a className="font-medium uppercase">Products</a>
        </Link>
        <Link href="/" passHref>
          <a className="font-medium uppercase">Brands</a>
        </Link>
        <Link href="/" passHref>
          <a className="font-medium flex justify-center items-center">
            <Image src={profile} alt="profile" />
            <span className="ml-2 uppercase">Hello, Leandro</span>
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="font-medium flex justify-center items-center">
            <div className="flex justify-center items-center">
              <Image src={cart} alt="profile" />
              <span className=" absolute font-bold text-sxs w-2.5 h-2.5 bg-green-700 text-center flex justify-center items-center rounded-full text-white translate-x-2 -translate-y-2">
                1
              </span>
            </div>
            <span className="ml-2 uppercase">Cart</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
