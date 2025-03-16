import Link from "next/link";
import React from "react";
import { mulishFont, cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

function FooterSection() {
  const footerLinks = {
    Products: [
      {
        name: "Loan Facility",
        link: "/loan-facility",
      },
      {
        name: "Medical Equipment Financing",
        link: "/medical-equipment-financing",
      },
      {
        name: "Loan Management Software",
        link: "/loan-management-software",
      },
    ],
    Company: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms and Conditions",
        link: "/terms-and-conditions",
      },
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
    ],
  };
  return (
    <div className="bg-primary py-16 pb-[100px] px-3 md:px-[61px] grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <div>
          <img src="/images/logo_footer.png" />
        </div>
        <p className="text-white md:text-center md:text-left text-[20px] py-[24px]">
          By providing tailored funding options and advanced loan management
          tools, we aim to enhance the quality of healthcare services,
          streamline financial operations, and drive growth across the industry.
        </p>

        <div className="flex gap-4 items-center">
          <div>
            <img src="/images/facebook_logo.png" />
          </div>
          <div>
            <img src="/images/linkedin_logo.png" />
          </div>

          <div>
            <img src="/images/instagram_logo.png" />
          </div>

          <div>
            <img src="/images/x_logo.png" />
          </div>

          <div>
            <img src="/images/youtube_logo.png" />
          </div>
        </div>
      </div>
      {Object.keys(footerLinks).map((key) => (
        <div>
          <p
            className={cn(
              mulishFont.className,
              "text-white text-[20px] font-bold mb-3"
            )}
          >
            {key}
          </p>
          <div className="flex flex-col gap-2">
            {footerLinks[key as keyof typeof footerLinks].map((item) => (
              <Link
                href={item.link}
                className={cn(
                  mulishFont.className,
                  "text-white text-[18px] hover:opacity-80 transition-all duration-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div>
        <p
          className={cn(
            mulishFont.className,
            "text-white text-[20px] font-bold mb-3"
          )}
        >
          Newsletter
        </p>

        <p className={cn(mulishFont.className, "text-white text-[18px] py-3")}>
          Subscribe to get the latest news from us
        </p>

        <div className="relative">
          <Input type="email" placeholder="Email" className="h-[68px]" />
          <div className="absolute right-4 top-7 hover:cursor-pointer">
            <img src="/images/right_arrow_icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
