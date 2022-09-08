
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import orders from '../../assets/cart-icon.svg'
import settings from '../../assets/settings.svg';
import logout from '../../assets/logout.svg';
import address from '../../assets/address.svg';
import helpCenter from '../../assets/help-center.svg';
import Image from "next/image";
import Link from "next/link";


const people = [
  { id: 1, name: "Account", href: "#" },
  { id: 2, name: "Orders", href: "#" },
  { id: 3, name: "Address", href: "#" },
  { id: 4, name: "Help Center" , href: "#" },
  { id: 5, name: "Logout", href: "#" },
];

const MyAccountSidebar = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      {/* Sidebar for mobile devices created with headless ui package*/}
      <aside className="md:hidden mobile-sidebar m-2">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative flex justify-start mt-1 ">
            <div>
              <Listbox.Button className="relative  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((link) => (
                  <Listbox.Option
                    key={link.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={link}
                  >
                    {({ selected }) => (
                      <>
                        <Link
                          href={link.href}
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <a>
                            {link.name}
                          </a>
                        </Link>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </aside>

      {/* Sidebar for Desktop devices created with headless ui package*/}
      <aside className="hidden md:flex p-5 w-1/4 min-h-screen">
        <ul className="w-full">
          <li className="p-2 border hover:bg-gray-100 bg-gray-100">
            <Link href="/my-account">
              <a className="flex gap-2 justify-start">
                <Image
                  src={settings.src}
                  alt="account"
                  width={25}
                  height={24}
                  className=""
                />
                Account
              </a>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="#">
              <a className="flex gap-2 justify-start">
                <Image
                  src={orders.src}
                  alt="order"
                  width={25}
                  height={24}
                />
                Orders
              </a>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="#">
              <a className="flex gap-2 justify-start">
                <Image
                  src={address.src}
                  alt="address"
                  width={25}
                  height={24}
                />
                Address
              </a>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <Link href="#">
              <a className="flex gap-2 justify-start">
                <Image
                  src={helpCenter.src}
                  alt="help-center"
                  width={25}
                  height={24}
                />
                Help Center
              </a>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-100 active:bg-gray-100">
            <Link href="#">
              <a className="flex gap-2 justify-start">
                <Image
                  src={logout.src}
                  alt="logout"
                  width={25}
                  height={24}
                />
                Logout
              </a>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default MyAccountSidebar;
