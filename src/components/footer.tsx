import { PropsWithChildren } from 'react';

import Image from 'next/image';

import LogoWhite from '../assets/logo-white.png';
import MediumLogo from '../assets/medium-icon.png';
import LinkedinLogo from '../assets/linkedin-icon.png';
import InstagramLogo from '../assets/instagram-icon.png';
import FacebookLogo from '../assets/facebook-icon.png';

type FooterSectionProps = {
    header: string
}

const FooterSection: React.FC<PropsWithChildren<FooterSectionProps>> = ({header, children}) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <h3 className='font-medium uppercase text-medium-grey'>{header}</h3>
            {children}
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="h-80 bg-light-black font-lato flex flex-col items-center justify-between px-5 py-6 text-white">
                    <div className="w-full h-full flex justify-between">
                        <div>
                            <Image src={LogoWhite} alt='Logo' />
                        </div>
                        <div className='flex items-start p-0 gap-20 leading-8'>
                            <FooterSection header='Community'>
                                <div>Lexir for Brands</div>
                                <div>Business Buyers</div>
                                <div>Sales Affiliates</div>
                            </FooterSection>
                            <FooterSection header='Platform'>
                                <div>Resourcer</div>
                                <div>Pricing</div>
                                <div>Get Started</div>
                            </FooterSection>
                            <FooterSection header='Company'>
                                <div>About</div>
                                <div>Contact</div>
                                <div>Legal</div>
                            </FooterSection>
                            <FooterSection header='Lexir Shop'>
                                <div>Brands</div>
                                <div>Spirits</div>
                                <div>Wine</div>
                                <div>Blog</div>
                            </FooterSection>
                        </div>
                        <div>
                            <Image src={MediumLogo} alt='Logo' />
                            <Image src={FacebookLogo} alt='Logo' />
                            <Image src={InstagramLogo} alt='Logo' />
                            <Image src={LinkedinLogo} alt='Logo' />
                        </div>
                    </div>
                    <div className="w-full border-t pt-5 flex justify-between">
                        <span className="font-light text-base">© 2022 Lexir Inc.</span>
                        <div className="w-56 mr-3 font-medium text-base flex justify-between items-center">
                            <span>Privacy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
            </footer>
    );
}

export default Footer;