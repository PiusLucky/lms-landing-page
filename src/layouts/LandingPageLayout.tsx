"use client";

import NavBar from "@/components/common/NavBar";
import TestimonialSection from "@/sections/TestimonialSection";
import FaqSection from "@/sections/FaqSection";
import MockupSection from "@/sections/MockupSection";
import FooterSection from "@/sections/FooterSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/common/LoadingIndicator";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Enable smooth scrolling behavior and handle loading state
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        // Only start animations after loading is complete
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <LoadingIndicator isLoading={isLoading} />

      <NavBar />

      <motion.div
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={staggerContainer}
        className="flex flex-col gap-[100px]"
      >
        {children}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="bg-white flex flex-col gap-[50px] md:gap-[100px] px-4 md:px-[100px]"
      >
        <motion.div variants={fadeIn}>
          <TestimonialSection />
        </motion.div>

        <motion.div variants={fadeIn}>
          <FaqSection />
        </motion.div>

        <motion.div variants={fadeIn}>
          <MockupSection />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-[50px] md:mt-[100px]"
      >
        <FooterSection />
      </motion.div>
    </div>
  );
}

export default LandingPageLayout;
