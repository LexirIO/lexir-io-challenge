import React from 'react';

import NavLinks from './NavLinks';
// prettier-ignore
const links1 = ['COMMUNITY', 'Lexis for Brands', 'Business Buyers', 'Sales Affiliates'];
const links2 = ['PLATFORM', 'Resources', 'Pricing', 'Get Started'];
const links3 = ['COMPANY', 'About', 'Contact', 'Legal'];
const links4 = ['LEXIR SHOP', 'Brands', 'Spirits', 'Wine', 'Blog'];

const Footer = (): JSX.Element => {
  // full expresive arrow function return statement, so I can add logic later easily.
  return (
    // Main Footer Container
    <footer className="footer-container">
      {/* Upper Footer */}
      <header className="upper-footer">
        <img
          className="logo-light"
          src="/static/assets/logo-icons/logo-light.svg"
          alt="light colored company logo"
        />
        <nav className="navs">
          <NavLinks key="community" links={links1} />
          <NavLinks key="platform" links={links2} />
          <NavLinks key="company" links={links3} />
          <NavLinks key="lexirshop" links={links4} />
        </nav>

        {/* Social Icons */}
        <ul className="socials flex-row">
          <li>
            <img
              src="/static/assets/social-icons/medium.svg"
              alt="medium icon"
            />
          </li>
          <li>
            <img
              src="/static/assets/social-icons/facebook.svg"
              alt="facebook icon"
            />
          </li>
          <li>
            <img
              src="/static/assets/social-icons/instagram.svg"
              alt="instagram icon"
            />
          </li>
          <li>
            <img
              src="/static/assets/social-icons/linkedin.svg"
              alt="linkedin icon"
            />
          </li>
        </ul>
        {/*  */}
      </header>
      {/*  */}

      {/* Lower Footer */}
      <footer className="lower-footer">
        <div className="copyright">© 2022 Lexir Inc.</div>
        <div className="lower-right-footer">
          <div className="privacy">Privacy</div>
          <div className="terms-of-service">Terms of service</div>
        </div>
      </footer>
      {/*  */}
    </footer>
  );
};

export default Footer;
