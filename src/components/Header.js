function Header() {
  return (
    <>
      <header>
        <div className="flex items-center bg-[white] justify-between p-8 shadow-lg">
          <div className="font-bold text-3xl">LEXIR</div>
          <nav>
            <ul className="uppercase flex flex-row gap-9">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Brands</li>
              <li className="cursor-pointer">
                <i className="fa-solid fa-circle-user mr-2 cursor-pointer"></i>
                Hello, Leandro
              </li>
              <li className="cursor-pointer">
                <i className="fa-solid fa-cart-shopping mr-2 relative">
                  <span className="absolute bottom-3 left-3 bg-[green] text-white border-[2px] border-white flex items-center justify-center rounded-full h-4 w-4 text-[6px] ">
                    3
                  </span>
                </i>{" "}
                Cart
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
