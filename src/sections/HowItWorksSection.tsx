import Header from "@/components/common/Header";
import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function HowItWorksSection() {
  const data = [
    {
      number: "1",
      title: "Apply Online",
      description:
        "Create an account with us and give us some details on the kind of loan you need and how you'll use it. We'll process your request and within seconds, you're set.",
    },
    {
      number: "2",
      title: "Upload Your Information",
      description:
        "This works just like shopping for a flight. Provide us with basic information that will enable you to access the loan.",
    },
    {
      number: "3",
      title: "Accept Your Offer",
      description:
        "Our team of experts will review your application and assess the risk and you are good to go!",
    },
  ];
  return (
    <div>
      <div>
        <Header
          title="How it works"
          description="Simple 3-Step Process to get started"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-[100px] justify-center items-center mt-5 md:mt-[50px]">
        <div>
          <img src="/images/mockup_2.png" alt="how_it_works" />
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <HowItWorksCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const HowItWorksCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="bg-primary text-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
        {number}
      </div>
      <div>
        <p className={cn(mulishFont.className, "text-[24px] font-bold")}>
          {title}
        </p>
        <p className="text-[16px] text-textPrimary max-w-[429px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
