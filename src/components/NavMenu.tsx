import Link from "next/link";
import Image from "next/image";

import UserIcon from "../public/assets/user.svg";
import CartIcon from "../public/assets/cart.svg";

// Data for the nav menu links
const menuItemsConfig: { text: string; url: string; icon: string }[] = [
  { text: "PRODUCTS", url: "#", icon: "" },
  { text: "BRANDS", url: "#", icon: "" },
  { text: "SIGN IN", url: "#", icon: UserIcon },
  { text: "CARD", url: "#", icon: CartIcon },
];

// Menu with links in the navbar
function NavMenu() {
  // Pre render the menu
  const renderedMenuItems = menuItemsConfig.map(item => {
    return (
      <li key={item.text} className="flex">
        {item.icon ? <Image src={item.icon} height={21} width={21} /> : ""}
        <Link href={item.url}>
          <a className={item.icon ? "ml-[9px]" : ""}>{item.text}</a>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul className="flex text-sm font-medium w-[375px] justify-between">
        {renderedMenuItems}
      </ul>
    </div>
  );
}

export default NavMenu;
