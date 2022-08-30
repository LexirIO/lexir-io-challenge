import { BrandCard, ProductsSection } from "../components";

export default function Home() {
  return (
    <div className='w-[95%] mx-auto flex justify-around gap-16 mt-8 mb-20'>
      <BrandCard />
      <ProductsSection />
    </div>
  );
}
