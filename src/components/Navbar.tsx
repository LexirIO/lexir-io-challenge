import Link from "next/link";
import Image from "next/image";

import NavMenu from "./NavMenu";

import Logo from "../public/assets/logo.svg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={`${styles.navbar} w-screen h-navbar`}>
      <div className="max-w-[1210px] flex items-center justify-between mx-auto h-navbar">
        <Link href="#">
          <a>
            <Image src={Logo} alt="Lexir Logo" height={24} width={103} />
          </a>
        </Link>
        <NavMenu />
      </div>
    </div>
  );
}

export default Navbar;
