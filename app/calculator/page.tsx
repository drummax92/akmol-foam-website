import { SiteLayout } from "../../components/layout/SiteLayout";
import { CalculatorSection } from "../../components/sections/CalculatorSection";
import { OrderStepsSection } from "../../components/sections/OrderStepsSection";

type CalculatorPageProps = {
  searchParams: Promise<{
    material?: string;
  }>;
};

export default async function CalculatorPage({
  searchParams,
}: CalculatorPageProps) {
  const { material } = await searchParams;

  return (
    <SiteLayout>
      <CalculatorSection initialMaterial={material} />
      <OrderStepsSection />
    </SiteLayout>
  );
}
