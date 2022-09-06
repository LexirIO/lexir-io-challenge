import React from "react";
import Image from "next/image";
import WhiteLogo from "@assets/logo-white.svg";

const Footer = () => {
    return (
        <footer className="bg-[#2D2D2D] text-white justify-between p-8">
            <div className="flex items-start">
            <Image src={WhiteLogo} alt="brand-logo" />
            <div>
                <h3>COMMUNITY</h3>
                <p>Lexir for Brands</p>
                <p>Business Buyers</p>
                <p>Sales Affiliates</p>
            </div>
            <div>
                <h3>Platform</h3>
                <p>Resources</p>
                <p>Pricing</p>
                <p>Get Started</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Contact</p>
                <p>Legal</p>
            </div>
            <div>
                <h3>Lexir Shop</h3>
                <p>Brands</p>
                <p>Spirits</p>
                <p>Wine</p>
                <p>Blog</p>
            </div>
            <div></div>
            </div>
            <div className="flex">
                <p>© 2022 Lexir Inc.</p>
                <div className="flex">
                    <p>Privacy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
