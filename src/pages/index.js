import { BrandCard, ProductsSection } from "../components";

export default function Home() {
  return (
    <div className='w-[85%] mx-auto flex justify-center gap-8 mt-8 mb-20'>
      <BrandCard />
      <ProductsSection />
    </div>
  );
}
