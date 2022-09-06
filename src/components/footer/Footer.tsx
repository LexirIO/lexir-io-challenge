import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@assets/logo-white.svg";
import DottedIcon from "@assets/dotted-icon.svg";
import LinkedInIcon from "@assets/linkedin.svg";
import InstagramIcon from "@assets/instagram.svg";
import FacebookIcon from "@assets/facebook.svg";

const Footer = () => {
    return (
        <footer className="bg-[#2D2D2D] text-white p-8">
            <div className="flex justify-between items-start pb-6">
                <Image src={WhiteLogo} alt="brand-logo" />
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        COMMUNITY
                    </h3>
                    <Link href="/brands">
                        <a className="font-medium text-white leading-8 pb-3">Lexir for Brands</a>
                    </Link>
                    <Link
                        href="/business"
                    >
                        <a className="font-medium text-white leading-8 pb-3">Business Buyers</a>
                    </Link>
                    <Link href="/sales">
                        <a className="font-medium text-white leading-8 pb-3">Sales Affiliates</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Platform
                    </h3>
                    <Link
                        href="/resources"
                    >
                        <a className="font-medium text-white leading-8 pb-3">Resources</a>
                    </Link>
                    <Link href="/pricing">
                        <a className="font-medium text-white leading-8 pb-3">Pricing</a>
                    </Link>
                    <Link href="/signup">
                        <a className="font-medium text-white leading-8 pb-3">Get Started</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Company
                    </h3>
                    <Link href="/about">
                        <a className="font-medium text-white leading-8 pb-3">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="font-medium text-white leading-8 pb-3">Contact</a>
                    </Link>
                    <Link href="/legal">
                        <a className="font-medium text-white leading-8 pb-3">Legal</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Lexir Shop
                    </h3>
                    <Link href="/brands">
                        <a className="font-medium text-white leading-8 pb-3">Brands</a>
                    </Link>
                    <Link href="/spirits">
                        <a className="font-medium text-white leading-8 pb-3">Spirits</a>
                    </Link>
                    <Link href="/wine">
                        <a className="font-medium text-white leading-8 pb-3">Wine</a>
                    </Link>
                    <Link href="/blog">
                        <a className="font-medium text-white leading-8 pb-3">Blog</a>
                    </Link>
                </div>
                <div className="flex justify-between w-[150px]">
                    <Image src={DottedIcon} alt="dotted icon" className="cursor-pointer"/>
                    <Image src={FacebookIcon} alt="facebook icon" className="cursor-pointer"/>
                    <Image src={InstagramIcon} alt="instagram icon" className="cursor-pointer"/>
                    <Image src={LinkedInIcon} alt="linkedin icon" className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex justify-between border-t pt-4 border-[#8F8F8F]">
                <p>© 2022 Lexir Inc.</p>
                <div className="flex justify-between w-[200px]">
                    <p>Privacy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
