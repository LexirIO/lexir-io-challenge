import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logos/logo-white.png";
import Portals from "../Others/Portals/Index";
import SocialMedia from "../Others/SocialMedia";

const Copyright = () => {
  return (
    <div className="mx-8.5 mt-2 pb-5 flex justify-between items-center flex-wrap">
      <p className="font-light text-portal text-white">© 2022 Lexir Inc.</p>
      <div className="flex gap-16">
        <Link href="/">
          <a className="font-normal block text-portal pb-2 text-white">
            Privacy
          </a>
        </Link>
        <Link href="/">
          <a className="font-normal block text-portal pb-2 text-white">
            Terms of service
          </a>
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-750">
      <div className="flex text-sm pt-10 mx-8.5 justify-between items-start  shadow-nav flex-wrap gap-5 border-solid border-b border-b-neutral-450">
        <div className="mb-5">
          <Image src={logo} alt="logo" />
        </div>
        <Portals />
        <SocialMedia />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
