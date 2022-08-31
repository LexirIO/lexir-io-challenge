import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/Ai";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(true);
  console.log(open);

  return (
    <>
      <header className="flex md:flex-row bg-[white] justify-between p-8 shadow-lg">
        <div>
          <div className="font-bold text-3xl">LEXIR</div>
        </div>

        <AiOutlineMenu
          onClick={() => setOpen(!open)}
          className="mx-2 text-3xl cursor-pointer md:hidden"
        />

        <ul
          className={`absolute shadow-xl uppercase flex flex-col items-end bg-white md:flex-row md:static md:shadow-none md:items-center md:pb-0 ${
            open ? "top-24 right-0 left-0" : "top-[-500px]"
          }`}
        >
          <li className="mr-8 text-xl md:my-0 my-4">
            <a href="#">Products</a>
          </li>
          <li className="mr-8 text-xl md:my-0 my-4">
            <a href="#">Brand</a>
          </li>
          <li className="mr-8 text-xl md:my-0 my-4 flex flex-row items-center">
            <FaUserCircle className="mr-2" />
            Hello, Leandro
          </li>
          <li className="mr-8 text-xl md:my-0 my-4 flex flex-row items-center relative">
            <FaShoppingCart className="mr-2" />
            <span className="absolute bottom-[15px] left-[15px] bg-[green] text-white border-[2px] border-white flex items-center justify-center rounded-full h-4 w-4 text-[6px] ">
              3
            </span>
            Cart
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
