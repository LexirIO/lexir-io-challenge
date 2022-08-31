import React, { useState } from 'react';

/** Components */
import Header from '@components/Header';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Main from '@components/Main';
import Footer from '@components/Footer';

const ProductsPage = (): JSX.Element => {
  const [itemAdded, setItemAdded] = useState(3);

  const handleAddItem = (productId: number): void => {
    setItemAdded(itemAdded + 1);
    // do smt with product id
  };
  return (
    <>
      <Header count={itemAdded} />
      <Main addItemHandler={handleAddItem} />
      <Footer />
    </>
  );
};

export default ProductsPage;
