import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function UseCaseSection() {
  const data = [
    {
      title: "Pharmacies Expanding Medication Inventory",
      description:
        "With Vittas Loan Facility, the pharmacy secures fast and flexible funding to stock up on medications without financial strain.",
      icon: "/images/heart_icon.png",
      backgroundColor: "bg-[#F2FFF3]",
      iconBackgroundColor: "bg-white",
    },

    {
      title: "Hospitals Upgrading Medical Equipment",
      description:
        "Medical Equipment Financing (MBPL) enables structured, flexible payments for essential equipment.",
      icon: "/images/heart_icon.png",
      backgroundColor: "bg-[#F9F2FF]",
      iconBackgroundColor: "bg-white",
    },

    {
      title: "Fintechs & Lenders Managing Loan Portfolios",
      description:
        "Loan Management Software (LMS) automates loan processing, tracks repayments, and provides real-time analytics.",
      icon: "/images/heart_icon.png",
      backgroundColor: "bg-[#F2F7FF]",
      iconBackgroundColor: "bg-white",
    },
  ];
  return (
    <div>
      <div>
        <Header
          title="Use Cases"
          description="How Vittas Transforms Businesses"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-[50px] pb-[100px]">
        {data.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default UseCaseSection;
