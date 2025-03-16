import { cn, mulishFont } from "@/lib/utils";
import React from "react";

function MedicalEquipmentRepaymentPlanSection() {
  const data = [
    {
      title: "Low-Interest Rates",
      description: "Competitive rates with no hidden charges",
    },
    {
      title: "Grace Period",
      description:
        "Optional 1-3 months before the first payment (subject to approval).",
    },
    {
      title: "Early Repayment Benefits",
      description: "Pay off early with reduced interest.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-5 md:mt-[50px]">
      <div className="text-left md:w-[50%]">
        <div className="border border-primary rounded-[89px] p-[12px] text-primary inline-block">
          Repayment plan
        </div>
        <p
          className={cn(
            mulishFont.className,
            "text-black text-[24px] py-3 md:text-[40px] font-medium mt-4"
          )}
        >
          Medical Equipment Financing (MBPL) – Repayment Plan
        </p>

        <p className="text-textPrimary text-[20px] font-medium">
          We provide flexible and structured repayment plans to help healthcare
          providers acquire essential medical equipment without financial
          strain. Choose from monthly installments (6–36 months), quarterly
          payments for seasonal revenue cycles, or custom schedules tailored to
          your cash flow.
        </p>

        <p className="text-textPrimary text-[20px] py-3 font-[600] mt-4">
          Key features:
        </p>

        <div className="grid-cols-1">
          {data.map((item) => (
            <KeyFeaturesCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="md:w-[50%]">
        <img
          src="/images/doctor_on_monitor.jpg"
          alt="medical_equipment_repayment_plan"
          className="rounded-[12px]"
        />
      </div>
    </div>
  );
}

const KeyFeaturesCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex  gap-4 items-center mb-6">
      <div className="">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.6754 10.7375C16.0827 10.3644 16.1105 9.73188 15.7375 9.3246C15.3644 8.91732 14.7319 8.88954 14.3246 9.26255L10.6325 12.644L9.6754 11.7674C9.26812 11.3944 8.63557 11.4221 8.26255 11.8294C7.88954 12.2367 7.91732 12.8693 8.3246 13.2423L9.95712 14.7374C10.3393 15.0875 10.9257 15.0875 11.3079 14.7374L15.6754 10.7375Z"
            fill="#007AFF"
            fillOpacity="0.65"
          />
        </svg>
      </div>
      <div className="flex gap-3 md:items-center flex-col md:flex-row">
        <p className="text-[18px] font-bold">{title} - </p>
        <p className="text-[16px] text-textPrimary max-w-[429px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MedicalEquipmentRepaymentPlanSection;
