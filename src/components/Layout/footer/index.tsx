import Image from 'next/image';
import LogoWhite from 'src/assets/imgs/logo-white.svg';

import MediumIco from 'src/assets/icons/mediumico.svg';
import FacebookIco from 'src/assets/icons/facebookico.svg';
import InstagramIco from 'src/assets/icons/instagramico.svg';
import LinkedinIco from 'src/assets/icons/linkedinico.svg';


interface ShortcutListProps {
    title: string;
    shortcuts: string[];
}

const ShortcutList = ({title, shortcuts}: ShortcutListProps) => {
    return (
        <div>
            <h3 className="text-cgreyter font-medium uppercase">{title}</h3>
            <ul className="flex flex-col space-y-7 mt-7">
            {shortcuts.map((shortcut, key) => (
                <li key={key}>
                    <span className="text-white">{shortcut}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="bg-cgreydark px-8 pb-14">
            <div className="flex flex-row items-start justify-between pt-5 pb-16 border-b-2 border-cgreyter">
                <Image src={LogoWhite} alt="logo white" />
                <ShortcutList title="comunities" shortcuts={['Lexir for brands', 'Business Buyer', 'Sales Affiliates']} />
                <ShortcutList title="platform" shortcuts={['Resources', 'Pricing', 'Get Started']} />
                <ShortcutList title="company" shortcuts={['About', 'Contract', 'Legal']} />
                <ShortcutList title="lexis shop" shortcuts={['Brands', 'Spirits', 'Wine', 'Blog']} />
                <div className="flex flex-row space-x-4">
                    <Image src={MediumIco} alt="medium" />
                    <Image src={FacebookIco} alt="facebook" />
                    <Image src={InstagramIco} alt="instagram" />
                    <Image src={LinkedinIco} alt="linkedin" />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-2">
                <span className="text-white">© 2022 Lexir Inc.</span>
                <div className="flex flex-row space-x-16">
                    <span className="text-white">Privacy</span>
                    <span className="text-white">Terms of service</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
