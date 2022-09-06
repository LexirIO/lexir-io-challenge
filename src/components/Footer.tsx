import iconMedium from "../assets/icons/socials/medium.png"
import iconFacebook from "../assets/icons/socials/facebook.png"
import iconLinkedin from "../assets/icons/socials/linkedin.png"
import iconInsta from "../assets/icons/socials/instagram.png"
import Image, { StaticImageData } from "next/image"


export const Footer = ({ logo }: FooterProps) => {

  const Link = ({ label, icon }: LinkProps) => {
    return (
      icon ?
        <li><a href="#" className=" m-4 lg:m-0"><Image src={icon} className=" w-5 h-5" /><span className="sr-only">{label}</span></a></li>
        : <li><a href="#" className=" capitalize text-white">{label}</a></li>)

  }

  return (
    <div className=" bg-primary py-5 px-6 text-fontXS leading-8 font-medium ">
      <div className="lg:flex ">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div className="md:flex md:justify-between  lg:w-5/6 lg:px-32" >
          <ul >
            <li className="text-smallHeader uppercase mt-10 md:mt-20 lg:mt-0">Community</li>
            <Link label="Lexir for Brands" icon={null} />
            <Link label="Business Buyers" icon={null} />
            <Link label="Sales Affiliates" icon={null} />
          </ul>
          <ul >
            <li className="text-smallHeader uppercase mt-20 lg:mt-0">Platform</li>
            <Link label="Resources" icon={null} />
            <Link label="Pricing" icon={null} />
            <Link label="Get Started" icon={null} />
          </ul>
          <ul >
            <li className="text-smallHeader uppercase mt-20 lg:mt-0">Company</li>
            <Link label="About" icon={null} />
            <Link label="Contact" icon={null} />
            <Link label="Legal" icon={null} />
          </ul>
          <ul >
            <li className="text-smallHeader uppercase mt-20 lg:mt-0">Lexir shop</li>
            <Link label="Brands" icon={null} />
            <Link label="Spirits" icon={null} />
            <Link label="Wine" icon={null} />
            <Link label="Blog" icon={null} />
          </ul>
        </div>
        <div className=" lg:w-1/12">
          <ul className="flex mt-20 lg:mt-0 lg:justify-between ">
            <Link label="medium" icon={iconMedium} />
            <Link label="facebook" icon={iconFacebook} />
            <Link label="instagam" icon={iconInsta} />
            <Link label="linkedin" icon={iconLinkedin} />
          </ul>
        </div>
      </div>
      <div className=" border-t-2 border-t-smallHeader lg:flex lg:justify-between mt-5 pt-2">
        <p className="text-smallHeader">@2022 Lexir Inc.</p>
        <ul className="lg:flex lg:w-60 justify-between">
          <Link label="privacy" icon={null} />
          <Link label="terms of service" icon={null} />
        </ul>
      </div>
    </div>
  );
};

interface LinkProps {
  label: string,
  icon: StaticImageData | null
}

interface FooterProps {
  logo: StaticImageData,
}
