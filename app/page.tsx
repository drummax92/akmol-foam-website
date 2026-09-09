import { SiteLayout } from "../components/layout/SiteLayout";
import { FAQSection } from "../components/sections/FAQSection";
import { HeroSection } from "../components/sections/HeroSection";
import { HomeAboutSection } from "../components/sections/HomeAboutSection";
import { HomeLinksSection } from "../components/sections/HomeLinksSection";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <HomeAboutSection />
      <FAQSection />
      <HomeLinksSection />
    </SiteLayout>
  );
}
