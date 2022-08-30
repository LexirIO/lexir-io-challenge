import React from "react";

/** Components */

const Header = (): JSX.Element => {
  //
  return (
    <>
      <div className="header-container">
        <div className="logo">logo</div>
        <div className="flex-wrapper">
          <div className="nav">nav</div>
          <div className="cart">cart</div>
        </div>
      </div>
    </>
  );
};

export default Header;
