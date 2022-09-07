import logo from "../../assets/logo.png";
import person from "../../assets/person.svg";
import shopcart from "../../assets/cart-icon.svg";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); { /* Initiated isNavOpen state with false */}
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <section className="shadow flex items-center justify-between border-b border-gray-100 box-shadow p-8">
        <a href="/">
          <img src={logo.src} alt="logo" />
        </a>
        <nav>
          {/* Mobile Users navigation bar */}
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {/* toggle isNavOpen state on click */}
              <span
                className={`${genericHamburgerLine} ${
                  isNavOpen ? "animate-y" : "animate-x"
                } block h-0.5 w-8 bg-gray-600 `}
              ></span>
              <span
                className={`${genericHamburgerLine} ${
                  isNavOpen ? "opacity-0" : "animate-x"
                } block h-0.5 w-8 bg-gray-600`}
              ></span>
              <span
                className={`${genericHamburgerLine} ${
                  isNavOpen ? "animate-y" : "animate-x"
                } block h-0.5 w-8 bg-gray-600`}
              ></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hidden"}>
              {" "}
              {/* toggle class based on isNavOpen state */}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                {/* change isNavOpen state to false to close the menu */}
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Product</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#" className="no-underline">
                    Brands
                  </a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Sign In</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Cart</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Desktop users navigation bar */}
          <section className="DESKTOP-MENU">
            <ul className=" hidden space-x-8 lg:flex uppercase">
              <li className="mx-5">
                <a href="#">Product</a>
              </li>
              <li className="mx-5">
                <a href="#">Brands</a>
              </li>
              <li className="mx-5">
                <a href="#" className="flex gap-2">
                  <span>
                    <img src={person.src} alt="" />
                  </span>
                  Sign In
                </a>
              </li>
              <li className="mx-5">
                <a href="#" className="flex gap-2">
                  <span>
                    <img src={shopcart.src} alt="" />
                  </span>
                  Cart
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </>
  );
};

export default Header;
