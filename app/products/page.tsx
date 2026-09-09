import { SiteLayout } from "../../components/layout/SiteLayout";
import { PricesSection } from "../../components/sections/PricesSection";
import { ProductsSection } from "../../components/sections/ProductsSection";

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsSection />
      <PricesSection />
    </SiteLayout>
  );
}
