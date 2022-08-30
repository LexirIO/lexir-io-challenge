import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-5 bg-white relative flex items-center w-full justify-between">
      <div className="flex justify-between items-center w-full px-10 py-2">
        <img src="/assets/img/lexir-logo-black.svg" className="h-8"/>
        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
          <ul className="navbar-nav flex justify-end">
            <li className="nav-item">
              <a
                className="nav-link block pr-2 lg:px-10 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link block pr-2 lg:px-10 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                BRANDS
              </a>
            </li>
            <li className="nav-item mb-2 flex">
              <img src="/assets/icons/user-avatar.svg" width="30px" />
              <a
                className="nav-link pl-3 pr-10 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out flex align-middle"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                HELLO, LEANDRO
              </a>
            </li>
            <li className="nav-item mb-2 flex">
              <img src="/assets/icons/basket-add.svg" width="30px" />
              <a
                className="nav-link pl-3 pr-10 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                CART
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
