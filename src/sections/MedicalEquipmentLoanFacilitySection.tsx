import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function MedicalEquipmentLoanFacilitySection() {
  const data = [
    {
      title: "Affordable Repayment Plans",
      description: "Spread costs over time to reduce financial strain.",
      icon: "/images/card_icon.svg",
      backgroundColor: "bg-[#F2F7FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Access to Modern Equipment ",
      description: "Invest in cutting-edge technology.",
      icon: "/images/access_icon.svg",
      backgroundColor: "bg-[#F2F2FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Minimal Paperwork, Quick Processing",
      description: "Fast and hassle-free financing.",
      icon: "/images/paperwork_icon.svg",
      backgroundColor: "bg-[#F9F2FF]",
      iconBackgroundColor: "bg-white",
    },
  ];
  return (
    <div>
      <div>
        <Header title="Our Loan facility" description="Why Choose MBPL?" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {data.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MedicalEquipmentLoanFacilitySection;
