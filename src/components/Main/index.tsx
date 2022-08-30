import React from "react";

/** Components */

const Main = (): JSX.Element => {
  // 
  return (
    <>
      <div className="main-container">
        {/* Product Info */}
        <div className="product-info">
          <div className="product-logo">product-logo</div>
          <div className="product-name">product-name</div>
          <div className="product-story">product-story</div>
          <div className="read-more">read-more</div>
          <div className="product-location">product-location</div>
          <div className="product-categories">
            <div className="category-1">category-1</div>
            <div className="category-2">category-2</div>
          </div>
        </div>
        {/*  */}

        {/* Product Items */}
        <div className="product-items">
          <div className="product-item">implement me I am product item</div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Main;
