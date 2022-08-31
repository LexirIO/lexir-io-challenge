import React from 'react';

interface ProductItemProps {
  index: number;
  addItemHandler: (productId: number) => void;
}

const id = 7;

const src0 = '/static/assets/product-images/umami.png';
const src1 = '/static/assets/product-images/silent.png';
const src2 = '/static/assets/product-images/gin.png';
const src3 = '/static/assets/product-images/packshot.png';

const ProductItem = ({
  index,
  addItemHandler,
}: ProductItemProps): JSX.Element => {
  return (
    <div className="product-item flex-column">
      <div className="product-image">
        <img
          className="product-img"
          src={
            index === 0 ? src0 : index === 1 ? src1 : index === 2 ? src2 : src3
          }
          alt="product image"
        />
      </div>
      <div className="product-infos">
        <div className="name-and-price">
          <div className="name">Mr Gaston</div>
          <div className="price">€32</div>
        </div>

        <div className="type-and-icon">
          <div className="type">Brandy</div>
          <img
            onClick={() => addItemHandler(id)}
            className="add-to-cart"
            src="/static/assets/page-element-icons/add-to-cart-icon.svg"
            alt="add to cart icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
