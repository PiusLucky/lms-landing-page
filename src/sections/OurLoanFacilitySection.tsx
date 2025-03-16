import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function OurLoanFacilitySection() {
  const data = [
    {
      title: "Designed for Healthcare Businesses",
      description: "Custom financing for pharmacies, hospitals, and clinics.",
      icon: "/images/heart_icon.png",
      backgroundColor: "bg-[#F4F2FF]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Fast & Hassle-Free Approvals ",
      description: "Get access to funds quickly with minimal paperwork.",
      icon: "/images/pen_icon.png",
      backgroundColor: "bg-[#F2FFF3]",
      iconBackgroundColor: "bg-white  ",
    },
    {
      title: "Flexible Repayment Plans",
      description: "Pay back with terms that match your cash flow.",
      icon: "/images/card_icon.svg",
      backgroundColor: "bg-[#F2F7FF]",
      iconBackgroundColor: "bg-white",
    },
  ];
  return (
    <div>
      <div>
        <Header
          title="Our Loan facility"
          description="Why Choose Our Loan Facility"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {data.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OurLoanFacilitySection;
