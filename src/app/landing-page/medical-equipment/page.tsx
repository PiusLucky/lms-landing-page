import LandingPageLayout from "@/layouts/LandingPageLayout";
import MedicalEquipmentHeroSection from "@/sections/MedicalEquipmentHeroSection";
import MedicalEquipmentHowItWorksSection from "@/sections/MedicalEquipmentHowItWorksSection";
import MedicalEquipmentLoanFacilitySection from "@/sections/MedicalEquipmentLoanFacilitySection";
import MedicalEquipmentRepaymentPlanSection from "@/sections/MedicalEquipmentRepaymentPlanSection";

export default function MedicalEquipmentPage() {
  return (
    <LandingPageLayout>
      <div className="">
        <MedicalEquipmentHeroSection />
        <div className="px-4 md:px-[100px] py-[50px] md:py-[100px] flex flex-col gap-[100px]">
          <MedicalEquipmentLoanFacilitySection />
          <MedicalEquipmentRepaymentPlanSection />
          <MedicalEquipmentHowItWorksSection />
        </div>
      </div>
    </LandingPageLayout>
  );
}
