import MainButton from "@/components/common/MainButton";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function LoanFacilityHeroSection() {
  return (
    <div className="hero-section pt-32 px-4 md:px-8 pb-[50px]">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="md:w-[50%]">
          <p
            className={cn(
              mulishFont.className,
              "text-[32px] md:text-[48px] font-[600]"
            )}
          >
            Fast, flexible loans to restock medical supplies and grow your
            practice.
          </p>
          <p className="text-textPrimary py-2 max-w-[549px]">
            Quick Approvals | Competitive Rates | Tailored Repayment Plans
          </p>

          <div className="flex justify-start mt-[44px]">
            <MainButton
              text="Apply for a Loan Now"
              width="183px"
              classes="bg-transparent border border-primary text-primary hover:text-white"
            />
          </div>
        </div>
        <div>
          <img src="/images/vittas_loan_facility_mockup.png" alt="loan_facility" />
        </div>
      </div>
    </div>
  );
}

export default LoanFacilityHeroSection;
