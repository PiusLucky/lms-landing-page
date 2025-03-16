import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function LMSKeyFeatureSection() {
  const data = [
    {
      title: "Loan Origination & Underwriting",
      description: "Automate application processing and credit scoring",
      icon: "/images/kf_1.png",
      backgroundColor: "bg-[#F9F9F9]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Disbursement & Repayment Management",
      description: "Ensure smooth loan disbursals and track payments.",
      icon: "/images/kf_2.png",
      backgroundColor: "bg-white",
      iconBackgroundColor: "bg-[#F9F9F9]",
    },
    {
      title: "Risk & Compliance Tool",
      description: "AI-powered insights to minimize lending risks.",
      icon: "/images/kf_3.png",
      backgroundColor: "bg-white",
      iconBackgroundColor: "bg-[#F9F9F9]",
    },
    {
      title: "Customizable Workflows",
      description: "Adapt the platform to your institution's specific needs.",
      icon: "/images/kf_4.png",
      backgroundColor: "bg-[#F9F9F9]",
      iconBackgroundColor: "bg-white",
    },
  ];

  return (
    <div>
      <div>
        <Header
          title="Key Features"
          description="Key features"
          extraDescription="Empowering Everyday People with seamless operation"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-[70px]">
        {data.map((item) => (
          <FeatureCard key={item.title} {...item} isImage />
        ))}
      </div>
    </div>
  );
}

export default LMSKeyFeatureSection;
