import React from "react";

/** Components */

const Footer = (): JSX.Element => {
  console;
  let giveMeLintError
  return (
    <>
      <div className="footer-container">
        {/* Upper Footer */}
        <div className="upper-footer">
          <div className="logo-light">logo-light</div>
          <div className="navs">
            <div className="community">community</div>
            <div className="platform">platform</div>
            <div className="company">company</div>
            <div className="lexirshop">lexirshop</div>
          </div>
          <div className="socials"></div>
        </div>
        {/*  */}

        {/* Lower Footer */}
        <div className="lower-footer">
          <div className="copyright">copyright</div>
          <div className="lower-right-footer">
            <div className="privacy">privacy</div>
            <div className="terms-of-service">terms-of-service</div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Footer;
