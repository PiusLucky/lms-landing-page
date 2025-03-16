import BenefitCard from "@/cards/BenefitCard";
import FeatureCard from "@/cards/FeatureCard";
import Header from "@/components/common/Header";
import React from "react";

function LMSBenefitSection() {
  const data = [
    {
      number: "1",
      title: "Fintech Lenders",
      description: "Scale operations and enhance efficiency.",
      image: "/images/wcb_1.jpg",
    },
    {
      number: "2",
      title: "Banks & Microfinance Institutions",
      description: "Streamline loan processing and risk management.",
      image: "/images/wcb_2.jpg",
    },
    {
      number: "3",
      title: "SME & Consumer Loan Providers",
      description: "Improve customer experience with digital lending.",
      image: "/images/person_3.jpg",
    },
  ];

  return (
    <div>
      <div>
        <Header
          title="Who can benefit"
          description="Who Can Benefit?"
          extraDescription="Empowering Everyday People with seamless operation"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-[70px] gap-[20px]">
        {data.map((item) => (
          <BenefitCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default LMSBenefitSection;
