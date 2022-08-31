export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-7 shadow-md fixed top-0 w-full bg-white">
      <img src="/assets/img/lexir-logo-black.svg" className="h-8" />
      <ul className="flex">
        <li>
          <a
            className="nav-link block py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
            href="#"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            PRODUCTS
          </a>
        </li>
        <li>
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
          <a className="pl-3 pr-10 py-2" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            HELLO, LEANDRO
          </a>
        </li>
        <li className="nav-item mb-2 flex">
          <img src="/assets/icons/basket-add.svg" width="30px" />
          <a className="pl-3 pr-10 py-2 " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            CART
          </a>
        </li>
      </ul>
    </div>
  );
};
