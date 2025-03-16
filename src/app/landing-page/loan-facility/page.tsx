import LandingPageLayout from "@/layouts/LandingPageLayout";
import HowItWorksSection from "@/sections/HowItWorksSection";
import LoanFacilityHeroSection from "@/sections/LoanFacilityHeroSection";
import OurLoanFacilitySection from "@/sections/OurLoanFacilitySection";

export default function LoanFacilityPage() {
  return (
    <LandingPageLayout>
      <div className="">
        <LoanFacilityHeroSection />
        <div className="px-4 md:px-[100px] py-[50px] md:py-[100px]">
          <OurLoanFacilitySection />
          <HowItWorksSection />
        </div>
      </div>
    </LandingPageLayout>
  );
}
