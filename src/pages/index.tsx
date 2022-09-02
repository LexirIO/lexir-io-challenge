import { AsideComponent } from "@components/proudcts/aside";
import { LayoutComponent } from "@components/Layout";
import ProductsComponent from "@components/proudcts";

export default function Home() {
  return (
    <LayoutComponent>
      <AsideComponent />
      <ProductsComponent />
    </LayoutComponent>
  );
}
