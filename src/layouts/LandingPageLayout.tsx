import NavBar from "@/components/common/NavBar";
import TestimonialSection from "@/sections/TestimonialSection";
import FaqSection from "@/sections/FaqSection";
import MockupSection from "@/sections/MockupSection";
import FooterSection from "@/sections/FooterSection";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-[100px]">{children}</div>

      <div className="bg-white flex flex-col gap-[50px] md:gap-[100px] px-4 md:px-[100px] ">
        <TestimonialSection />
        <FaqSection />
        <MockupSection />
      </div>
      <div className="mt-[50px] md:mt-[100px] ">
        <FooterSection />
      </div>
    </div>
  );
}

export default LandingPageLayout;
