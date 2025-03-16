import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, syneFont } from "@/lib/utils";

function TestimonialCard({
  review,
  image,
  name,
  designation,
}: {
  review: string;
  image: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="shadow-lg rounded-[20px] p-[29px]">
      <div className="flex justify-end">
        <img src="/images/quote_icon.svg" />
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={image} width={54} height={54} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p
            className={cn(
              syneFont.className,
              "text-[18.23px] text-[#1C1C1C] font-medium"
            )}
          >
            {name}
          </p>
          <p className="text-[16px] pr-1 text-[#3E3E59]">{designation}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[16.41px] text-[#3E3E59]">{review}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
