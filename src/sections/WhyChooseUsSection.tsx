import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function WhyChooseUsSection() {
  const data = [
    {
      title: "Industry-Specific Expertise",
      description:
        "We specialize in financing solutions tailored for the healthcare and fintech sectors.",
      icon: "/images/pen_icon.png",
      backgroundColor: "bg-[#F9F9F9]",
      iconBackgroundColor: "bg-white",
    },
    {
      title: "Fast & Flexible Funding",
      description:
        "Quick approvals with structured repayment plans that align with your cash flow.",
      icon: "/images/pen_icon.png",
      backgroundColor: "bg-white",
      iconBackgroundColor: "bg-[#F9F9F9]",
    },
    {
      title: "Technology-Driven Approach",
      description:
        "Data-powered loan assessments ensure transparency and efficiency.",
      icon: "/images/pen_icon.png",
      backgroundColor: "bg-white",
      iconBackgroundColor: "bg-[#F9F9F9]",
    },
    {
      title: "Seamless Loan Management",
      description:
        "Our Loan Management Software (LMS) simplifies lending operations for fintechs and financial organizations.",
      icon: "/images/pen_icon.png",
      backgroundColor: "bg-[#F9F9F9]",
      iconBackgroundColor: "bg-white",
    },
  ];
  return (
    <div>
      <div>
        <Header
          title="Why Choose Vittas?"
          description="Reliable Financing Solutions for Healthcare & Fintech Businesses"
          extraDescription="Empowering Everyday People with seamless operation"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-[70px]">
        {data.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
