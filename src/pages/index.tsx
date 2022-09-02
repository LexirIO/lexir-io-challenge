import Container from "@components/Layout";
import CardInfo from "@components/cardinfo";
import ProductList from "@components/productlist";

import { Product } from "src/types/product";
import { productList } from "src/services/products";

interface HomeProps {
  products: Product[];
}

function Home({products}: HomeProps) {
  return (
    <Container title="Home">
      <div className="flex flex-row px-8 mt-10">
        <CardInfo />
        <ProductList products={products} />
      </div>
    </Container>
  )
}

export async function getServerSideProps () {
  const res = await productList();
  return {
    props: {
      products: res.data,
    }
  }
}

export default Home;