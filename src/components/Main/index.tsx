import React from 'react';

import ProductItem from './ProductItem';

interface MainProps {
  addItemHandler: (productId: number) => void;
}

const Main = ({ addItemHandler }: MainProps): JSX.Element => {
  return (
    <div className="main-container flex-row">
      {/* Product Info */}

      {/* Upper Part of Product Info */}
      <div className="product-info">
        <img
          src="/static/assets/logo-icons/baldoria-logo.svg"
          alt="avatar icon"
        />
        <div className="product-name">Baldoria Vermouth</div>
        <div className="story-wrapper">
          <div className="product-story">
            Badoria rosso is a red vermouth that balances fresh, herby bitter
            notes against. Kiss My Rhubarb takes its origins from an old
            handwritten recipe from co-creators Niels’ and Wouters’ rebellious
            grandparents.
          </div>
          <div className="read-more">Read More</div>
        </div>

        {/*  */}

        {/* Bottom of Product Info */}
        <div className="product-location">
          <div className="product-location-label flex-row">
            <img
              src="/static/assets/page-element-icons/pin.svg"
              alt="location icon"
            />
            <div className="location-title">Location</div>
          </div>
          <div className="location-name">London, United Kingdom</div>
        </div>
        <div className="product-categories">
          <div className="product-categories-label flex-row">
            <img
              src="/static/assets/page-element-icons/category-box.svg"
              alt="location icon"
            />
            <div className="categories-title">Product Categories</div>
          </div>
          <div className="category-cards">
            <div className="category-card">Gin</div>
            <div className="category-card">Vodka</div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* Product Items */}
      <div className="product-items flex-row">
        {Array.from(Array(20).keys()).map((_, idx) => {
          return (
            <ProductItem
              addItemHandler={addItemHandler}
              key={idx}
              index={idx % 4}
            />
          );
        })}
      </div>
      {/*  */}
    </div>
  );
};

export default Main;
