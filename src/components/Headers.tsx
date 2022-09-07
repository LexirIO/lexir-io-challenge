/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';


const products = [
  {
    name: 'Product 1',
    description: 'Lorem.',
    href: '#',
  },
  {
    name: 'Product 2',
    description: 'Ipsum.',
    href: '#',
  },
]

const brands = [
  {
    name: 'Brand 1',
    description: 'Ipsum.',
    href: '#',
  },
  {
    name: 'Brand 2',
    description: 'Lorem.',
    href: '#',
  },
]

function classNames(...classes :any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white max-h-[104px] shadow">
      <div className="mx-0 sm:px-6">
        <div className="flex items-center justify-center py-10 md:justify-start md:space-x-10">
          <div className="flex justify-start ml-[34px] lg:w-0 lg:flex-1">
            <a href="https://shop.lexir.com/">
              <span className="sr-only"></span>
              {/* Logo URL */}
                <svg width="103" height="24" viewBox="0 0 103 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4189 15.7973L18.438 23.8862L0.0566154 23.9321L0.0550841 23.4045C1.06039 22.7221 1.56177 21.3375 1.55692 19.2508L1.523 4.90123C1.5179 2.79031 1.00964 1.40827 0.00127442 0.753792L0 0.226714L9.0355 0.204524L9.03677 0.73134C8.03198 1.46074 7.53009 2.84618 7.53494 4.88609L7.56911 19.2707C7.57217 20.5133 7.82006 21.3986 8.31506 21.9243C8.80802 22.4504 9.62792 22.7127 10.7732 22.7099H10.8758C12.6627 22.7054 14.15 22.0682 15.3377 20.7994C16.5268 19.5302 17.3814 17.863 17.9027 15.7986L18.4189 15.7973Z" fill="#2D2D2D"/>
                <path d="M39.1748 17.5034L39.1898 23.8346L21.5299 23.8785L21.5287 23.3504C22.5334 22.6687 23.0353 21.2833 23.0302 19.1964L22.9963 4.84732C22.9912 2.75937 22.483 1.37759 21.4748 0.700142L21.4736 0.172803L38.3092 0.131295L38.3243 6.46144L37.8081 6.46275C37.1624 4.94026 36.2491 3.70597 35.0676 2.75911C33.8861 1.81277 32.5054 1.3413 30.9237 1.34496L29.0001 1.34992L29.0236 11.3385L30.5348 11.1937C31.5429 11.0978 32.3549 10.7381 32.9726 10.1152C33.59 9.49233 34.1483 8.66452 34.6509 7.63203L35.1653 7.63073L35.1849 15.8961L34.6703 15.8974C34.1404 14.8895 33.5714 14.0765 32.9624 13.457C32.3552 12.8365 31.5463 12.4809 30.5379 12.3901L29.0258 12.253L29.0424 19.2165C29.0452 20.4362 29.2704 21.3149 29.7182 21.8529C30.1673 22.3915 30.8602 22.6596 31.8 22.657H31.8686C33.4258 22.6533 34.7879 22.1748 35.9536 21.2222C37.119 20.2699 38.0218 19.0304 38.6584 17.5047L39.1748 17.5034Z" fill="#2D2D2D"/>
                <path d="M75.917 19.0642C75.9218 21.0808 76.4301 22.4629 77.4385 23.2105L77.4398 23.7379L68.4045 23.7603L68.4032 23.233C69.4083 22.5506 69.9097 21.1659 69.9051 19.079L69.8709 4.72943C69.8655 2.64201 69.3575 1.25996 68.3494 0.582256L68.3481 0.0554403L77.3834 0.0329891L77.3847 0.559805C76.3796 1.2892 75.8782 2.67438 75.8828 4.71429L75.917 19.0642Z" fill="#2D2D2D"/>
                <path d="M95.7693 22.8662C94.6796 22.107 93.5248 20.884 92.3073 19.1989C92.0314 18.8248 91.7435 18.3914 91.4443 17.8998C91.1467 17.408 90.8932 16.9866 90.6854 16.6353C90.4796 16.2836 90.1799 15.7403 89.789 15.0026C89.398 14.2651 89.0986 13.7205 88.8926 13.3689L88.8913 12.876C91.9353 12.002 93.4532 9.82894 93.4447 6.35895C93.4368 2.91141 91.9893 1.19208 89.103 1.19912L88.3471 1.20095L88.3897 19.0326C88.3945 21.073 88.9025 22.4548 89.9109 23.179L89.9121 23.7071L80.8769 23.7295L80.8759 23.2014C81.8809 22.5433 82.3826 21.1578 82.3775 19.048L82.3433 4.69783C82.3384 2.61041 81.8302 1.22862 80.8221 0.551177L80.8208 0.0240996L90.3725 8.22145e-05C96.7397 -0.0153202 99.9292 2.13345 99.9394 6.44745C99.9433 8.1827 99.4189 9.52037 98.3672 10.4615C97.317 11.4016 96.058 12.0268 94.5929 12.3343L96.0404 14.4416C98.684 18.257 101.005 20.9469 103 22.5135L102.865 23.0422C101.836 23.6771 100.714 23.9968 99.4988 24C98.1025 24.0031 96.8587 23.6251 95.7693 22.8662Z" fill="#2D2D2D"/>
                <path d="M49.8869 16.0276L49.27 15.0629L47.2838 17.8701C45.2074 20.7833 43.1953 22.5927 41.2505 23.3012L41.2518 23.8293L49.0506 23.81L49.0494 23.2821C47.7184 21.8554 47.7595 19.897 49.1738 17.4086L49.8869 16.0276Z" fill="#2D2D2D"/>
                <path d="M61.1657 17.9416L56.0275 9.96995L58.5607 6.02457C60.3864 3.20618 62.3873 1.39626 64.5611 0.592986L64.5603 0.0656474L56.7597 0.0854879L56.7609 0.612043C57.3814 1.26782 57.6979 2.16378 57.7119 3.30121C57.7277 4.43786 57.4941 5.44084 57.0155 6.30965L55.5108 9.19774L53.4066 5.93216C51.9581 3.63745 51.84 1.86773 53.0504 0.62118L53.0491 0.0948859L41.5396 0.123342L41.5409 0.650419C42.0675 0.883805 42.6306 1.31586 43.2266 1.9471C43.8243 2.57938 44.3127 3.16467 44.6917 3.70298C45.0712 4.24154 45.5713 4.99052 46.1925 5.94991L53.847 17.8187C54.5828 18.9425 55.0038 19.9912 55.1087 20.9639C55.2153 21.9366 54.9467 22.7049 54.3079 23.2691L54.3091 23.7972L66.1624 23.7672L66.1611 23.2398C64.6476 22.5397 62.982 20.7744 61.1657 17.9416Z" fill="#2D2D2D"/>
                </svg>
            </a>
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        <div className='inline-flex justify-center items-center'>
          <Popover.Group as="nav" className="hidden items-end justify-end md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open 
                    )}
                  >
                    <span className='pr-[40px] text-[14px] font-[500] leading-5 text-[#2D2D2D]'>Products</span>
                  
                  </Popover.Button>
                  <Popover.Button
                    className={classNames(
                      open  
                    )}
                  >
                    <span className='pr-[41.5px] text-[14px] font-[500] leading-5 text-[#2D2D2D]'>Brands</span>
                    
                    
                  </Popover.Button>
                  

                  
            <a href="#" className="inline-flex pr-[42px] gap-x-[9.5px] leading-5 text-[14px] text-[#2D2D2D] font-[500] ">
            
            <span>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0.5C8.9233 0.5 6.89323 1.11581 5.16652 2.26957C3.4398 3.42332 2.09399 5.0632 1.29927 6.98182C0.504549 8.90045 0.296614 11.0116 0.701759 13.0484C1.1069 15.0852 2.10693 16.9562 3.57538 18.4246C5.04383 19.8931 6.91476 20.8931 8.95156 21.2982C10.9884 21.7034 13.0996 21.4955 15.0182 20.7007C16.9368 19.906 18.5767 18.5602 19.7304 16.8335C20.8842 15.1068 21.5 13.0767 21.5 11C21.4968 8.2162 20.3896 5.54733 18.4211 3.57889C16.4527 1.61044 13.7838 0.503176 11 0.5V0.5ZM6.50001 18.7828V17.75C6.5006 17.1534 6.73784 16.5815 7.15967 16.1597C7.5815 15.7378 8.15345 15.5006 8.75001 15.5H13.25C13.8466 15.5006 14.4185 15.7378 14.8403 16.1597C15.2622 16.5815 15.4994 17.1534 15.5 17.75V18.7828C14.1344 19.5802 12.5814 20.0004 11 20.0004C9.41862 20.0004 7.86563 19.5802 6.50001 18.7828V18.7828ZM16.994 17.6945C16.9791 16.7107 16.5782 15.7722 15.8779 15.0812C15.1776 14.3901 14.2339 14.0019 13.25 14H8.75001C7.76614 14.0019 6.82238 14.3901 6.12207 15.0812C5.42176 15.7722 5.02095 16.7107 5.006 17.6945C3.64593 16.4801 2.6868 14.8812 2.25563 13.1095C1.82446 11.3378 1.94158 9.47701 2.59148 7.77339C3.24139 6.06978 4.39342 4.60375 5.89503 3.56942C7.39665 2.5351 9.17701 1.98127 11.0004 1.98127C12.8237 1.98127 14.6041 2.5351 16.1057 3.56942C17.6073 4.60375 18.7594 6.06978 19.4093 7.77339C20.0592 9.47701 20.1763 11.3378 19.7451 13.1095C19.314 14.8812 18.3548 16.4801 16.9948 17.6945H16.994Z" fill="#2D2D2D"/>
              </svg>
            </span>
              Sign in
            </a>
            
            <a
              href="#"
              className="pr-[34px] text-[14px] text-[#2D2D2D] leading-5 font-[500] items-center justify-center gap-[10px] inline-flex"
            >
              <span>
              <svg className = 'self-center' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1429 7.09917L12 1H9.85714L6.85714 7.09917H1L3.57143 14.9835C4 16.3223 5.28571 17.3636 6.71429 17.3636H15.2857C16.7143 17.3636 17.8571 16.4711 18.4286 14.9835L21 7.09917H15.1429ZM10.7143 2.4876H11.1429L13.4286 7.09917H8.42857L10.7143 2.4876ZM17 14.5372C16.7143 15.281 16 15.876 15.2857 15.876H6.71429C6 15.876 5.28571 15.281 5 14.5372L3 8.58678H18.8571L17 14.5372Z" fill="#2D2D2D" stroke="#2D2D2D" strokeWidth="0.2"/>
          </svg>
          </span>
              Cart
            </a>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {/* Products dropwdown menu options */}
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {products.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {/* Brands dropdown menu options */}
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {brands.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        
          
          </div>
        </div>
        
      </div>
      
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                 
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {brands.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
