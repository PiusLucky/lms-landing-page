import React from "react";
import { mulishFont, cn } from "@/lib/utils";

function BenefitCard({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full object-cover h-[505px] rounded-[20px]"
      />
      <div className="absolute top-0 left-0  bg-white/10 rounded-[30.2px] p-[44px]">
        <p className="text-white opacity-10 text-[64px] font-bold">{number}</p>
      </div>

      <div className="absolute bottom-[3rem] left-5">
        <div
          className={cn(
            mulishFont.className,
            "text-white text-[24px] leading-[30px] font-bold"
          )}
        >
          {title}
        </div>
        <div className="pt-4">
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BenefitCard;
