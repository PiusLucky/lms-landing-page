"use client";

import LandingPageLayout from "@/layouts/LandingPageLayout";
import HeroSection from "@/sections/HeroSection";
import OurProductSection from "@/sections/OurProductSection";
import UseCaseSection from "@/sections/UseCaseSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import { motion } from "framer-motion";

export default function Home() {
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
        <HeroSection />
        <div className="px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <OurProductSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <WhyChooseUsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <UseCaseSection />
          </motion.div>
        </div>
      </div>
    </LandingPageLayout>
  );
}
