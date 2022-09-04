import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsSnapchat,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="px-12 py-8 bg-[#2D2D2D] text-white">
      <div className="max-w-screen-xl mx-auto">
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
              <li className="mb-2 hover:underline w-fit">Lexir for Brands</li>
              <li className="mb-2 hover:underline w-fit">Business Buyers</li>
              <li className="mb-2 hover:underline w-fit">Sales Afiliates</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Platform
            </h2>
            <ul className="text-white">
              <li className="mb-2 hover:underline w-fit">Resources</li>
              <li className="mb-2 hover:underline w-fit">Pricing</li>
              <li className="mb-2 hover:underline w-fit">Get Started</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Company
            </h2>
            <ul className="text-white">
              <li className="mb-2 hover:underline w-fit">About</li>
              <li className="mb-2 hover:underline w-fit">Contact</li>
              <li className="mb-2 hover:underline w-fit">Legal</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Lexir Shop
            </h2>
            <ul className="text-white">
              <li className="mb-2 hover:underline w-fit">Brands</li>
              <li className="mb-2 hover:underline w-fit">Spirits</li>
              <li className="mb-2 hover:underline w-fit">Wine</li>
              <li className="mb-2 hover:underline w-fit">Blog</li>
            </ul>
          </div>
          <div>
            <ul className="text-white flex text-gray-400">
              <li className="mb-4ml-3">
                <BsInstagram className="mr-2  hover:text-white" />
              </li>
              <li className="mb-4 ml-3">
                <BsFacebook className="mr-2  hover:text-white" />
              </li>
              <li className="mb-4 ml-3">
                <BsLinkedin className="mr-2  hover:text-white" />
              </li>
              <li className="mb-4 ml-3">
                <BsSnapchat className="mr-2  hover:text-white" />
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </footer>
  );
}
export default Footer;
