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
                        <a className="footer-link">Lexir for Brands</a>
                    </Link>
                    <Link
                        href="/business"
                    >
                        <a className="footer-link">Business Buyers</a>
                    </Link>
                    <Link href="/sales">
                        <a className="footer-link">Sales Affiliates</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Platform
                    </h3>
                    <Link
                        href="/resources"
                    >
                        <a className="footer-link">Resources</a>
                    </Link>
                    <Link href="/pricing">
                        <a className="footer-link">Pricing</a>
                    </Link>
                    <Link href="/signup">
                        <a className="footer-link">Get Started</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Company
                    </h3>
                    <Link href="/about">
                        <a className="footer-link">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="footer-link">Contact</a>
                    </Link>
                    <Link href="/legal">
                        <a className="footer-link">Legal</a>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#8F8F8F] uppercase font-medium pb-3">
                        Lexir Shop
                    </h3>
                    <Link href="/brands">
                        <a className="footer-link">Brands</a>
                    </Link>
                    <Link href="/spirits">
                        <a className="footer-link">Spirits</a>
                    </Link>
                    <Link href="/wine">
                        <a className="footer-link">Wine</a>
                    </Link>
                    <Link href="/blog">
                        <a className="footer-link">Blog</a>
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
                <p className="font-light">© 2022 Lexir Inc.</p>
                <div className="flex justify-between w-[200px]">
                    <p className="font-medium">Privacy</p>
                    <p className="font-medium">Terms of service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
