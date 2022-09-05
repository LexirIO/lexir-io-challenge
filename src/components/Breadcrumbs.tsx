import { BiChevronRight, BiHomeAlt } from "react-icons/bi";

const pages = [
  { name: "Spirits", href: "#", current: false },
  { name: "Kiss My", href: "#", current: false },
  { name: "Kiss My Rhubarb", href: "#", current: true },
];

const Breadcrumbs: React.FC<any> = () => {
  return (
    <nav className="my-5 sm:my-11 ml-8">
      <ul className="flex items-center font-Lato text-xs sm:text-base">
        <li>
          <div>
            <a href="#" className="flex items-center">
              <BiHomeAlt
                className="h-5 w-5 flex-shrink-0 mr-1 sm:mr-4"
                aria-hidden="true"
              />
              <span className="mr-1 sm:mr-5">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <BiChevronRight className="h-5 w-5" aria-hidden="true" />
              <a
                href={page.href}
                className="mx-1 sm:mx-5"
                aria-current={page.current ? "page" : undefined}
              >
                <span className={page.current ? "font-bold" : ""}>
                  {page.name}
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
