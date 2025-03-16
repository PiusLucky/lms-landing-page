import MainButton from "@/components/common/MainButton";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function MedicalEquipmentHeroSection() {
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
            Upgrade Your Medical Equipment with Flexible Financing
          </p>
          <p className="text-textPrimary py-2 max-w-[549px]">
            Access state-of-the-art medical technology with structured payment
            plans tailored for hospitals and healthcare providers.
          </p>

          <div className="flex justify-start mt-[44px]">
            <MainButton
              text="Explore Financing Options"
              width="264px"
              classes="bg-transparent border border-primary text-primary hover:text-white"
            />
          </div>
        </div>
        <div className="mb-[-3.1rem]">
          <img
            src="/images/doctor.jpg"
            alt="loan_facility"
            className="rounded-t-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MedicalEquipmentHeroSection;
