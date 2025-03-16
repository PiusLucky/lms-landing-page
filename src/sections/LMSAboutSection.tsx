import FeatureCard from "@/cards/FeatureCard";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function LMSAboutSection() {
  const data = [
    {
      title: "Automate Loan Processes ",
      description: "Eliminate manual work and reduce errors",
      icon: "/images/card_icon.svg",
      backgroundColor: "bg-[#F2F7FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Real-Time Tracking & Insights",
      description: "Monitor loan performance and manage risks effectively.",
      icon: "/images/location_icon.svg",
      backgroundColor: "bg-[#F9F2FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Scalable & Secure ",
      description: "Designed for financial institutions of all sizes.",
      icon: "/images/shield_icon.svg",
      backgroundColor: "bg-[#F2F2FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Seamless Customer Experience",
      description: "Provide borrowers with a smooth, digital lending journey.",
      icon: "/images/user_icon.svg",
      backgroundColor: "bg-[#F2FFF3]",
      iconBackgroundColor: "bg-white",
    },
  ];

  return (
    <div>
      <div className="text-left">
        <div className="border border-primary rounded-[89px] p-[12px] text-primary inline-block">
          Our LMS
        </div>
        <p
          className={cn(
            mulishFont.className,
            "text-black text-[24px] py-3 md:text-[40px] font-medium mt-4"
          )}
        >
          Why Choose Our LMS?
        </p>

        <p className="text-textPrimary text-[20px] font-medium max-w-[608px]">
          We provide flexible and structured repayment plans to help healthcare
          providers acquire essential medical equipment without financial
          strain.
        </p>
      </div>

      <div className="mt-[42px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LMSAboutSection;
