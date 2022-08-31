import { BsInstagram, BsLinkedin, BsFacebook, BsSnapchat } from "react-icons/Bs";

function Footer() {
  return (
    <footer className="px-12 py-8 bg-[#2D2D2D] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        <div className="mb-6">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold">LEXIR</span>
          </a>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Community
          </h2>
          <ul className="text-white">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Lexir for Brands
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Business Buyers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Sales Afiliates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Platform</h2>
          <ul className="text-white">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
          <ul className="text-white">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
            Lexir Shop
          </h2>
          <ul className="text-white">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Brands
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Spirits
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Wine
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white flex text-gray-400">
            <li className="mb-4ml-3">
              <a href="#" className="hover:underline">
                <BsInstagram className="mr-2" />
              </a>
            </li>
            <li className="mb-4 ml-3">
              <a href="#" className="hover:underline">
                <BsFacebook className="mr-2" />
              </a>
            </li>
            <li className="mb-4 ml-3">
              <a href="#" className="hover:underline">
                <BsLinkedin className="mr-2" />
              </a>
            </li>
            <li className="mb-4 ml-3">
              <a href="#" className="hover:underline">
                <BsSnapchat className="mr-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------ */}
      <hr className="my-6 border-gray-200"></hr>
      <div className="flex justify-between">
        <span className=" text-gray-500">
          © 2022{" "}
          <a href="#" className="hover:underline">
            Lexir Inc.
          </a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-white hover:text-gray-400">
            Privacy
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
