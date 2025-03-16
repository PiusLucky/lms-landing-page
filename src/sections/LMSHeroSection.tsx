import MainButton from "@/components/common/MainButton";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function LMSHeroSection() {
  return (
    <div className="flex flex-col justify-center items-center hero-section pt-32">
      <div className=" px-4 md:px-8 mb-[100px] ">
        <div>
          <p
            className={cn(
              mulishFont.className,
              "text-[35px] md:text-[55px] text-center leading-[40px] md:leading-[70px] font-[800]"
            )}
          >
            Seamlessly manage your Loan <br /> Operations with Our LMS
          </p>
        </div>

        <p className="py-[25px] text-center text-[#333333] text-[21px] font-[400] max-w-[841px]">
          Powerful, automated loan management for fintech lenders and financial
          institutions. Track, automate, and optimize loan processes – all in
          one place.
        </p>
        <div className="flex justify-center items-center">
          <MainButton
            text="Request Demo"
            classes="border border-primary bg-unset hover:bg-white rounded-[89px] p-[12px] text-primary"
            width="185px"
          />
        </div>
      </div>

      <div className="mt-[59px]">
        <img src="/images/lms_mockup.png" alt="lms_hero_image" />
      </div>
    </div>
  );
}

export default LMSHeroSection;
