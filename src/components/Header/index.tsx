import React from 'react';
// importing Image from 'next/image' --> injects inline styles like position: absolute, ...
// import logoSrc from '../assets/logo-icons/logo.svg' --> didn't work either, then I chose to play safe and solve it when I have time

interface HeaderProps {
  count: number;
}

const Header = ({ count }: HeaderProps): JSX.Element => {
  return (
    <>
      <div className="header-container flex-row">
        <img
          className="logo"
          src="/static/assets/logo-icons/logo.svg"
          alt="logo"
        />
        <div className="nav-and-cart flex-row">
          <div className="nav flex-row">
            <div className="products">Products</div>
            <div className="brands">Brands</div>
            <div className="user-profile flex-row">
              <img
                src="/static/assets/page-element-icons/user-avatar.svg"
                alt="avatar icon"
              />
              <span className="greeting">Hello,&nbsp;</span>
              <span className="user-name">Leandro</span>
            </div>
          </div>
          <div className="cart flex-row">
            <div className="cart-and-item-count">
              <div className="item-count">{count}</div>
              <img
                className="cart-icon"
                src="/static/assets/page-element-icons/cart.svg"
                alt="cart icon"
              />
            </div>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
