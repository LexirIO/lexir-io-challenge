import Link from "next/link"
import Image from "next/image"

import logoImgUrl from '../assets/images/logo.svg'
import profileImgUrl from '../assets/images/profile.png'
import cardImgUrl from '../assets/images/card.png'
import styles from '../styles/Navbar.module.css'

const Header = () => {
  return(
    <>
      <nav className={`bg-white border-gray-200 px-2 py-10 rounded ${styles.menuContainer}`}>
        <div className={`flex flex-wrap justify-between items-center mx-8`}>
          <Link href="/" className="flex items-center">
            <Image
              src={logoImgUrl}
              alt="Logo"
              width="103"
              height="24"
              className="mr-3 h-6"
            />
          </Link>
          <div className="flex justify-between items-center hidden w-full md:flex w-auto">
            <ul className="flex flex-col mr-12 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex items-center">
                <Link
                  href="#"
                  className={`block py-2 pr-10 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0`}
                >
                  <p className={`uppercase text-sm ${styles.menuItems}`}>Products</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="#"
                  className={`block py-2 pr-10 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ${styles.menuItems}`}
                >
                  <p className="uppercase text-sm">Brands</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`block py-2 pr-10 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 ${styles.menuItems}`}
                >
                  <span className="flex items-center">
                    <Image
                      src={profileImgUrl}
                      alt="Logo"
                      width="24"
                      height="24"
                    />
                    <p className="ml-2 uppercase text-sm">Hello, Leandro</p>
                  </span>
                </Link>
              </li>
            </ul>

            <span className="flex items-center">
              <Image
                src={cardImgUrl}
                alt="Logo"
                width="25"
                height="25"
              />
              <p className="ml-2 uppercase text-sm">Cart</p>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
