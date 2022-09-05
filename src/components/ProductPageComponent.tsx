import Breadcrumbs from "@components/Breadcrumbs";
import ProductDetails from "@components/ProductDetails";
import Cta from "@components/Cta";

const ProductPageComponent: React.FC<any> = () => {
  return (
    <>
      <Breadcrumbs />
      <ProductDetails />
      <Cta />
    </>
  );
};

export default ProductPageComponent;
