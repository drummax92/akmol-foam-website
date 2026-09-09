import { SiteLayout } from "../../components/layout/SiteLayout";
import { ContactsSection } from "../../components/sections/ContactsSection";
import { DeliverySection } from "../../components/sections/DeliverySection";

export default function DeliveryPage() {
  return (
    <SiteLayout>
      <DeliverySection />
      <ContactsSection />
    </SiteLayout>
  );
}
