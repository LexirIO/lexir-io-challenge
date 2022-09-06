import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Image from "next/image";
export const Header = ({ logo, userIcon, cartIcon }: HeaderProps) => {

  const [screenSize, setScreenSize] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {

    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => setIsOpen(false))
    window.addEventListener("resize", () => handleResize())

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const NavLink = ({ label, icon }: NavLinkProps) => {
    return (
      icon ?
        <li ><a href="#" className="flex uppercase md:ml-10 ">
          <Image src={icon} className=" w-5 h-5" />
          <span className=" ml-2">{label}</span>
        </a></li> :
        <li><a href="#" className=" uppercase md:ml-10">{label}</a></li>)

  }

  const DesktopHeader = () => {

    return (

      <nav className="">
        <ul className="flex">
          <NavLink label="Products" icon={null} />
          <NavLink label="Brands" icon={null} />
          <NavLink label="Sign in" icon={userIcon} />
          <NavLink label="Cart" icon={cartIcon} />

        </ul>
      </nav>


    );

  }

  const MobileHeader = () => {
    return (

      <>
        {
          isOpen ? <div>
            <button onClick={(() => setIsOpen(false))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className=" absolute left-0 right-0 top-32 z-10  h-screen w-full bg-white border-t-2 border-shadow animate-fade-in-down ">
              <nav className="ml-11 h-1/2 " >
                <ul className=" h-1/2 flex flex-col justify-evenly ">
                  <NavLink label="Products" icon={null} />
                  <NavLink label="Brands" icon={null} />
                  <NavLink label="Sign in" icon={userIcon} />
                  <NavLink label="Cart" icon={cartIcon} />

                </ul>
              </nav>
            </div>

          </div> :
            <button onClick={(() => setIsOpen(true))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
        }
      </>




    )
  }

  return (

    <div className="flex justify-between py-10 px-8 box-s md:border-b-2 border-b-shadow md:text-fontXXS text-fontS">
      <div>
        <a href="#"><Image src={logo} alt="" /></a>
      </div>
      {screenSize < 768 ? <MobileHeader /> : <DesktopHeader />}
    </div>


  )

};


interface NavLinkProps {
  label: string,
  icon: StaticImageData | null
}
interface HeaderProps {
  userIcon: StaticImageData,
  cartIcon: StaticImageData
  logo: StaticImageData

}
