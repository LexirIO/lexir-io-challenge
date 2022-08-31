import Logo from "../assets/logo";
import ProfileIcon from "../assets/icons/profileIcon";
import BasketIcon from "../assets/icons/basketIcon";
import Link from 'next/link'


import styles from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <div>
            <nav className="flex flex-row justify-between mx-auto px-8 py-8">

                {/* H1 Lexir is "here" but invisible in order to get SEO advantages */}
                <h1 className="invisible absolute"> Lexir </h1>

                <Link href={`/`}><div className="hover:cursor-pointer"> <Logo /> </div></Link>
                
                <div className={styles.hamburguer}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

                <ul className={`md:flex flex-row justify-evenly gap-10 hidden ` + styles.navList}>
                    <li>PRODUCTS</li>
                    <li><Link href="/brand">BRANDS</Link></li>
                    <li><ProfileIcon /> HELLO, LEONARDO</li>
                    <li><BasketIcon /> CART</li>
                </ul>

            </nav>
            <hr className="drop-shadow"/>
        </div>
    );
}