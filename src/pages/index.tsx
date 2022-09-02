import fetcher from "@utils/fetcher";
import Head from "next/head";
import { Product } from "src/types";
import Aside from "../components/Home/Aside";
import Shop from "../components/Home/Shop";

interface Props {
  data: Product[];
}

const Home = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>Lexir - Farhad Faraji</title>
      </Head>
      <div className="mt-10 mb-20 mx-8.5 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-2 ">
        <Aside />
        <Shop data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetcher("/api/products");
  return {
    props: {
      data,
    },
  };
}

export default Home;
