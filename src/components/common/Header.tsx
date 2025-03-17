import React from "react";
import { cn, mulishFont } from "@/lib/utils";

function Header({
  title,
  description,
  extraDescription,
}: {
  title: string;
  description: string;
  extraDescription?: string;
}) {
  return (
    <div className="text-center">
      <div className="border border-primary rounded-[89px] p-[12px] text-primary inline-block">
        {title}
      </div>
      <p
        className={cn(
          mulishFont.className,
          "text-black text-[24px] py-3 md:text-[40px] font-medium",
          extraDescription ? "mt-4" : ""
        )}
      >
        {description}
      </p>
      {extraDescription && (
        <p className="text-textPrimary text-[20px] font-medium">
          {extraDescription}
        </p>
      )}
    </div>
  );
}

export default Header;
