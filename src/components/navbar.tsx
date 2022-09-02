import ThemeSwitch from "./theme";
import Image from "next/image";
import avatar from "/public/avatar.png";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 shadow-sm dark:shadow-slate-500 transition-all duration-75 lg:duration-500 sticky lg:sticky min-w-full max-w-full inset-x-0 top-0 z-10">
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <div className="text-dark dark:text-light inline-flex gap-2">
          <Image
            src={avatar}
            alt="Avatar as a logo"
            width={40}
            height={40}
            className="rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-sky-500 dark:via-sky-600 dark:to-sky-500 scale-95"
          />
          <Link href="/" passHref>
            <a className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Filipe Martins
            </a>
          </Link>
        </div>

        <div className="text-dark dark:text-light inline-flex items-center border-0 transition-none">
          <section className="mx-1 p-1 text-xl border-0 rounded-full cursor-pointer hover:text-indigo-600 dark:hover:text-sky-400">
            <Link href="/contact-form" passHref>
              <FiSend alt="Contact me" />
            </Link>
          </section>
          <section
            className="mx-1 p-1 text-xl border-0 rounded-full cursor-pointer hover:text-indigo-600 dark:hover:text-sky-400"
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
