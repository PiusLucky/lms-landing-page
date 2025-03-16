import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function OurProductSection() {
  return (
    <div>
      <Header
        title="Our Products"
        description="Flexible financing solutions for healthcare and fintech businesses."
      />

      <div className="flex items-center gap-[20px] justify-center">
        <div className="bg-white inline-flex p-[14px] item-center  text-primary rounded-[89px] shadow-md">
          Loan Facility
        </div>
        <div className="text-[#666666]">Medical Equipment Leasing (BNPL)</div>
        <div className="text-[#666666]">Loan Management Software (LMS)</div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-[50%]">
          <p className={cn(mulishFont.className, "text-[48px] font-bold")}>
            Loan Facility
          </p>
          <p className="text-textPrimary py-2 max-w-[549px]">
            Vittas provides fast and flexible loan solutions to healthcare
            businesses, ensuring seamless procurement of medications and other
            essential medical supplies. Our financing options help hospitals,
            pharmacies, and clinics maintain a steady supply of critical
            inventory without financial strain.
          </p>

          <div className="flex justify-start mt-[44px]">
            <MainButton text="Apply for a Loan" width="183px" />
          </div>
        </div>
        <div>
          <img src="/images/card_illustration.png" alt="loan_facility" />
        </div>
      </div>
    </div>
  );
}

export default OurProductSection;
