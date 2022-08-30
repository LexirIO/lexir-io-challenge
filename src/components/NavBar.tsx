import Logo from "../assets/logo";
import ProfileIcon from "../assets/icons/profileIcon";
import BasketIcon from "../assets/icons/basketIcon";

import styles from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <div>
            <nav className="container flex flex-row justify-between mx-auto py-8">

                {/* H1 Lexir is "here" but invisible in order to get SEO advantages */}
                <h1 className="invisible absolute"> Lexir </h1>

                <Logo />

                <ul className={`flex flex-row justify-evenly gap-10 ` + styles.navList}>
                    <li>PRODUCTS</li>
                    <li>BRANDS</li>
                    <li><ProfileIcon /> HELLO, LEONARDO</li>
                    <li><BasketIcon /> CART</li>
                </ul>

            </nav>
            <hr className="drop-shadow"/>
        </div>
    );
}