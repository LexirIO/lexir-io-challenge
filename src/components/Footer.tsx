import Image from "next/image";
import Logo from "../public/imgs/logo-white-lexir.png";

const navigation = {
  community: [
    { name: "Lexir for Brands", href: "#" },
    { name: "Business Buyers", href: "#" },
    { name: "Sales Affiliates", href: "#" },
  ],
  platform: [
    { name: "Resources", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Get Started", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Legal", href: "#" },
  ],
  lexirshop: [
    { name: "Brands", href: "#" },
    { name: "Spirits", href: "#" },
    { name: "Wine", href: "#" },
    { name: "Blog", href: "#" },
  ],
  social: [
    {
      name: "Medium",
      href: "#",
      icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 3C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3H7.5ZM9.44788 16C11.6277 16 13.3958 14.2092 13.3958 12C13.3958 9.79082 11.6277 8 9.44788 8C7.26803 8 5.5 9.79217 5.5 12C5.5 14.2078 7.26803 16 9.44788 16ZM17.7285 12.0005C17.7285 14.0801 16.8445 15.7657 15.7539 15.7657C14.6633 15.7657 13.7793 14.0801 13.7793 12.0005C13.7793 9.92087 14.6633 8.2353 15.7539 8.2353C16.8445 8.2353 17.7285 9.92087 17.7285 12.0005ZM18.8062 15.3763C19.1899 15.3763 19.5011 13.8662 19.5011 12.0039C19.5011 10.1402 19.1899 8.6314 18.8062 8.6314C18.4225 8.6314 18.1113 10.1415 18.1113 12.0039C18.1113 13.8662 18.4225 15.3763 18.8062 15.3763Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M17.5 3H7.5C5.291 3 3.5 4.791 3.5 7V17C3.5 19.209 5.291 21 7.5 21H13.121V14.039H10.778V11.314H13.121V9.309C13.121 6.985 14.542 5.718 16.616 5.718C17.315 5.716 18.013 5.752 18.708 5.823V8.253H17.28C16.15 8.253 15.93 8.787 15.93 9.575V11.31H18.63L18.279 14.035H15.914V21H17.5C19.709 21 21.5 19.209 21.5 17V7C21.5 4.791 19.709 3 17.5 3Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M8.5 3C5.739 3 3.5 5.239 3.5 8V16C3.5 18.761 5.739 21 8.5 21H16.5C19.261 21 21.5 18.761 21.5 16V8C21.5 5.239 19.261 3 16.5 3H8.5ZM18.5 5C19.052 5 19.5 5.448 19.5 6C19.5 6.552 19.052 7 18.5 7C17.948 7 17.5 6.552 17.5 6C17.5 5.448 17.948 5 18.5 5ZM12.5 7C15.261 7 17.5 9.239 17.5 12C17.5 14.761 15.261 17 12.5 17C9.739 17 7.5 14.761 7.5 12C7.5 9.239 9.739 7 12.5 7ZM12.5 9C11.7044 9 10.9413 9.31607 10.3787 9.87868C9.81607 10.4413 9.5 11.2044 9.5 12C9.5 12.7956 9.81607 13.5587 10.3787 14.1213C10.9413 14.6839 11.7044 15 12.5 15C13.2956 15 14.0587 14.6839 14.6213 14.1213C15.1839 13.5587 15.5 12.7956 15.5 12C15.5 11.2044 15.1839 10.4413 14.6213 9.87868C14.0587 9.31607 13.2956 9 12.5 9Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 3C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3H7.5ZM6.5 12C6.5 11.3 7.1 10.7 7.8 10.7C8.5 10.7 9.1 11.2 9.1 11.9V16.5C9.1 17.2 8.5 17.8 7.8 17.8C7.1 17.8 6.5 17.2 6.5 16.5V12ZM7.9 7C7 7 6.5 7.5 6.5 8.2C6.5 8.9 7 9.4 7.8 9.4C8.7 9.4 9.2 8.9 9.2 8.2C9.2 7.5 8.6 7 7.9 7ZM13.7 12C13.7 12 14 10.7 15.9 10.7C17.1 10.7 18.1 11.7 18.1 13.9V16.5C18.1 17.2 17.6 17.7 16.9 17.7C16.2 17.7 15.7 17.2 15.7 16.5V13.9C15.7 12.8 15.1 12.7 14.8 12.7C14.5 12.7 13.7 12.8 13.7 13.9V16.5C13.7 17.2 13.2 17.7 12.5 17.7H12.3C11.6 17.7 11.1 17.2 11.1 16.5V12C11.1 11.3 11.7 10.7 12.4 10.7C13.1 10.7 13.7 11.3 13.7 12Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
};

const Footer: React.FC<any> = () => {
  return (
    <>
      <footer
        className="footer-bg-color font-Lato"
        aria-labelledby="footer-heading"
      >
        <div className="mx-auto max-w-7xl py-11 px-0 pl-9 sm:px-9">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0">
            <div>
              <Image
                className="block h-8 w-auto"
                src={Logo}
                width="103px"
                height="24px"
                alt="lexir logo"
              />
            </div>

            <div>
              <h3 className="text-base font-medium footer-navigation-text-color uppercase">
                Community
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.community.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium footer-navigation-text-color uppercase">
                Platform
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium footer-navigation-text-color uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium footer-navigation-text-color uppercase">
                Lexir Shop
              </h3>
              <ul role="list" className="mt-4 space-y-4 ">
                {navigation.lexirshop.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base  text-white hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="flex gap-4">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href}>
                    <item.icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*company rights */}
          <div className="mt-12 border-t border-gray-400 pt-8 flex justify-between items-center mr-10 sm:mr-0">
            <p className="text-xs sm:text-base font-light text-white leading-8">
              &copy; 2022 Lexir Inc.
            </p>
            <ul className="flex justify-center items-center text-white text-xs sm:text-base leading-8">
              <li className="mr-6 sm:mr-16 cursor-pointer">
                <a>Privacy</a>
              </li>
              <li className="cursor-pointer mr-10 sm:mr-0">
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
