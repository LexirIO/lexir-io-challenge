import Head from "next/head";
import Aside from "../components/Home/Aside";
import Shop from "../components/Home/Shop";

export default function Home() {
  return (
    <div className="mt-10 mb-20 mx-8.5 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-2 ">
      <Aside />
      <Shop />
    </div>
  );
}
