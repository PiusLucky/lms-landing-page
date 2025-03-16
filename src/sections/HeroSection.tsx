import React from "react";
import { cn } from "@/lib/utils";
import { mulishFont } from "@/lib/utils";
import MainButton from "@/components/common/MainButton";

function HeroSection() {
  const data = [
    {
      imageUrl: "/images/person_1.jpg",
      rotate: "-rotate-[2deg]",
    },
    {
      imageUrl: "/images/person_2.jpg",
      rotate: "rotate-[2deg]",
    },
    {
      imageUrl: "/images/person_3.jpg",
      rotate: "-rotate-[3deg]",
    },
    {
      imageUrl: "/images/person_4.jpg",
      rotate: "rotate-[1deg]",
    },
  ];
  return (
    <div className="flex px-4 md:px-8 mb-[100px] flex-col justify-center items-center hero-section h-screen pt-32">
      <div>
        <p
          className={cn(
            mulishFont.className,
            "text-[45px] md:text-[65px] text-center leading-[55px] md:leading-[70px] font-[800]"
          )}
        >
          Empowering Healthcare with Tailored{" "}
          <span className=" inlineblock md:hidden text-primary">Solutions</span>
        </p>
        <div className=" justify-center items-center hidden md:flex">
          <div className="relative">
            <p
              className={cn(
                mulishFont.className,
                "text-[40px] font-bold text-primary"
              )}
            >
              Solutions.
            </p>
            <div className="absolute -bottom-1 left-0">
              <img src="/images/fat_underline.svg" className="w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <p className="py-[25px] text-center text-[#333333] text-[21px] font-[400]">
        Customized financing options for healthcare professionals, fintech
        operators, and medical businesses.
      </p>

      <MainButton
        text="Get Started Now!"
        classes="border border-primary bg-unset hover:bg-white rounded-[89px] p-[12px] text-primary"
        width="185px"
      />

      <div className="flex gap-4 items-center py-[100px]">
        {data.map((item, index) => (
          <ImageRotate key={index} image={item.imageUrl} rotate={item.rotate} />
        ))}
      </div>
    </div>
  );
}

function ImageRotate({ image, rotate }: { image: string; rotate: string }) {
  return (
    <div className="relative ">
      <img
        src={image}
        className={cn("w-full rounded-[16.82px]", rotate ? rotate : "")}
      />
    </div>
  );
}

export default HeroSection;
