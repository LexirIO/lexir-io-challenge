import Image from "next/image";
import Link from "next/link";
import UserAvatar from "src/components/UserAvatar";
import Leandro from "src/public/Leandro.png";
import Routes from "src/components/DashboardRoutes";
import {
  Card,
  Customers,
  Dashboard,
  Details,
  Logout,
  Orders,
  ProductBox,
  ProductTag,
} from "src/public/svgs";
import LexirLogo from "src/public/logo.png";

interface routes {
  name: string;
  path: string;
  icon: string;
  key: number;
}

const routes: routes[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
    key: 1,
  },
  {
    name: "Brands",
    path: "/brands",
    icon: ProductTag,
    key: 2,
  },
  {
    name: "Products",
    path: "/products",
    icon: ProductBox,
    key: 3,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Customers,
    key: 4,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: Orders,
    key: 5,
  },
  {
    name: "Billing Profile",
    path: "/",
    icon: Card,
    key: 6,
  },
  {
    name: "Account details",
    path: "/details",
    icon: Details,
    key: 7,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: Logout,
    key: 8,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-full flex ">
      <div className="py-[60px] w-[37.5%] ">
        <div className="flex flex-col items-center px-[30px] ">
          <Link href="/">
            <Image
              width={145}
              height={34}
              className="hover:cursor-pointer "
              src={LexirLogo}
            />
          </Link>
          <UserAvatar
            image={Leandro}
            name="Leandro Alves"
            company="Company Name"
            className="rounded-full"
            width="66px"
            height="66px"
          />
          <Routes spacing="4" routes={routes} />
        </div>
      </div>
      {children}
    </div>
  );
}
