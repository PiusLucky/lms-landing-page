import React from "react";
import { mulishFont } from "@/lib/utils";
import { cn } from "@/lib/utils";

function MockupSection() {
  return (
    <div className="bg-[#C4D6BD] pb-8 lg:pb-0 px-3 md:px-[61px] pt-[81px] rounded-[30px] flex justify-between items-center">
      <div>
        <p
          className={cn(
            mulishFont.className,
            "text-black text-center md:text-left text-[24px] md:text-[30px] font-bold"
          )}
        >
          Manage Loans, Track Payments, and Access Financing – Anytime,
          Anywhere.
        </p>

        <p className="text-textPrimary text-center md:text-left text-[20px] pt-8 md:pt-2">
          Seamlessly apply for loans, monitor disbursements, and manage
          repayments with the Vittas International mobile app.
        </p>
        <div className="flex justify-center md:justify-start">
          <div className="inline-flex md:flex  flex-col md:flex-row gap-6 pt-[44px]">
            <StoreButton type="google" />
            <StoreButton type="apple" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="/images/vittas_hand_mockup.png" />
      </div>
    </div>
  );
}

const StoreButton = ({ type }: { type: "google" | "apple" }) => {
  return (
    <div className="bg-black cursor-pointer hover:bg-black/80 transition-all duration-300 rounded-[20px] px-8 py-3 flex items-center gap-2">
      <div>
        <img
          src={
            type === "google"
              ? "/images/google_icon.svg"
              : "/images/apple_icon.svg"
          }
          width={30}
          height={30}
        />
      </div>
      <div>
        <p className="text-white text-[14px] font-semibold">
          {type === "google" ? "GET IT ON" : "Download on the"}
        </p>
        <p className="text-white text-[18px] font-bold">
          {type === "google" ? "Google Play" : "App Store"}
        </p>
      </div>
    </div>
  );
};

export default MockupSection;
