import LandingPageLayout from "@/layouts/LandingPageLayout";
import HeroSection from "@/sections/HeroSection";
import OurProductSection from "@/sections/OurProductSection";

export default function Home() {
  return (
    <LandingPageLayout>
      <div className="">
        <HeroSection />
        <OurProductSection />
      </div>
    </LandingPageLayout>
  );
}
