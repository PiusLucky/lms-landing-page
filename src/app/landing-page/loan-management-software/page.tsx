"use client";

import LandingPageLayout from "@/layouts/LandingPageLayout";
import LMSAboutSection from "@/sections/LMSAboutSection";
import LMSBenefitSection from "@/sections/LMSBenefitSection";
import LMSHeroSection from "@/sections/LMSHeroSection";
import LMSKeyFeatureSection from "@/sections/LMSKeyFeatureSection";
import { motion } from "framer-motion";

export default function LoanManagementSoftwarePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <LandingPageLayout>
      <div className="">
        <LMSHeroSection />
        <div className="px-4 md:px-[100px] py-[50px] md:py-[100px] flex flex-col md:gap-[100px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <LMSAboutSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <LMSKeyFeatureSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <LMSBenefitSection />
          </motion.div>
        </div>
      </div>
    </LandingPageLayout>
  );
}
