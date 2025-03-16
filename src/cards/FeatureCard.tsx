import { cn } from "@/lib/utils";
import { mulishFont } from "@/lib/utils";
import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  iconBackgroundColor: string;
  isImage?: boolean;
};

function FeatureCard({
  title,
  description,
  icon,
  backgroundColor,
  iconBackgroundColor,
  isImage = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col py-[30px] md:py-[71px] px-[44px] rounded-[15px]",
        backgroundColor
      )}
    >
      {isImage ? (
        <div>
          <img
            src={icon}
            alt={title}
            className="w-full h-[350px] object-contain"
          />
        </div>
      ) : (
        <div className="pb-[30px] md:pb-[90px]">
          <div
            className={cn(
              "w-[70px] h-[70px] rounded-full flex items-center justify-center",
              iconBackgroundColor
            )}
          >
            <img src={icon} alt={title} className="w-[46px] h-[46px]" />
          </div>
        </div>
      )}

      <div>
        <p
          className={cn(
            mulishFont.className,
            "text-[24px] leading-[30px] mb-2 font-bold"
          )}
        >
          {title}
        </p>
        <p className="text-textPrimary">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
