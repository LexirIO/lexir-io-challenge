import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

interface routes {
  name: string;
  path: string;
  key: number;
  icon: string;
}

export default function Routes({
  routes,
  spacing,
}: {
  routes: routes[];
  spacing: string;
}) {
  const router = useRouter();

  return (
    <ul className="flex flex-grow-1 flex-col  h-full w-full  mt-[80px]">
      {routes.map((route, index) => (
        <Link key={route.key} href={route.path}>
          <div
            className={
              router.pathname == route.path
                ? `flex items-center pl-[27px]  pt-[16px] pb-[16px] bg-secondary-100 hover:cursor-pointer`
                : `flex items-center pl-[27px] pt-[16px] pb-[16px]  hover:cursor-pointer hover:bg-secondary-100`
            }
          >
            <Image src={route.icon} />
            <li key={route.key} className="ml-[15px] text-primary-700 ">
              <p>{route.name}</p>
            </li>
          </div>
        </Link>
      ))}
    </ul>
  );
}
