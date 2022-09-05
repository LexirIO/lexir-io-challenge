import React from "react";
import WhiteLogo from "../../assets/logo-white.svg";

const Footer = () => {
    return (
        <footer className="d-flex">
            <img src={WhiteLogo} alt="brand-logo" />
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
            <div className="d-flex">
                <p>© 2022 Lexir Inc.</p>
                <div className="d-flex">
                    <p>Privacy</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
