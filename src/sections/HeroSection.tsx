import React from "react";
import { cn } from "@/lib/utils";
import { mulishFont } from "@/lib/utils";
import MainButton from "@/components/common/MainButton";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imagesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7,
      },
    },
  };

  const imageVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex px-4 md:px-8 mb-[100px] flex-col justify-center items-center hero-section h-screen pt-32"
    >
      <motion.div variants={itemVariants}>
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
            <motion.div
              className="absolute -bottom-1 left-0"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <img src="/images/fat_underline.svg" className="w-[200px]" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="py-[25px] text-center text-[#333333] text-[21px] font-[400]"
      >
        Customized financing options for healthcare professionals, fintech
        operators, and medical businesses.
      </motion.p>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <MainButton
          text="Get Started Now!"
          classes="border border-primary bg-unset hover:bg-white rounded-[89px] p-[12px] text-primary"
          width="185px"
        />
      </motion.div>

      <motion.div
        variants={imagesContainerVariants}
        className="flex gap-4 items-center py-[100px]"
      >
        {data.map((item, index) => (
          <ImageRotate
            key={index}
            image={item.imageUrl}
            rotate={item.rotate}
            variants={imageVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function ImageRotate({
  image,
  rotate,
  variants,
}: {
  image: string;
  rotate: string;
  variants?: any;
}) {
  return (
    <motion.div
      className="relative"
      variants={variants}
      whileHover={{
        scale: 1.1,
        rotate: rotate.includes("-") ? "2deg" : "-2deg",
        transition: { duration: 0.3 },
      }}
    >
      <img
        src={image}
        className={cn("w-full rounded-[16.82px]", rotate ? rotate : "")}
      />
    </motion.div>
  );
}

export default HeroSection;
