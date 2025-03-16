"use client";

import { motion } from "framer-motion";

type LoadingIndicatorProps = {
  isLoading: boolean;
};

const LoadingIndicator = ({ isLoading }: LoadingIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#f2f5ff] z-50 ${
        !isLoading ? "pointer-events-none" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isLoading ? 1 : 0,
          y: isLoading ? 0 : 20,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col items-center gap-8"
      >
        {/* Vittas Logo SVG with Animation */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-72 relative"
        >
          <svg
            width="100%"
            viewBox="0 0 240 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Adjusted V */}
            <motion.path
              d="M20 20L40 60L60 20"
              stroke="#0076FF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            />

            {/* I */}
            <motion.path
              d="M70 20H78V60H70V20Z"
              fill="#0076FF"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            />
            {/* T */}
            <motion.path
              d="M82 20H106V28H99V60H89V28H82V20Z"
              fill="#0076FF"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            />
            {/* T */}
            <motion.path
              d="M114 20H138V28H131V60H121V28H114V20Z"
              fill="#0076FF"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeInOut" }}
            />
            {/* A */}
            <motion.path
              d="M158 60L149 35L140 60H130L146 20H152L168 60H158Z"
              fill="#9370DB"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
            />
            {/* S */}
            <motion.path
              d="M180 20C173 20 168 24 168 30C168 45 193 40 193 49C193 52 190 55 185 55C180 55 176 52 176 47H168C168 56 175 62 185 62C194 62 201 56 201 49C201 33 176 38 176 30C176 26 179 23 184 23C189 23 192 26 192 31H200C200 24 193 20 180 20Z"
              fill="#0076FF"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.7, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          className="relative h-1 w-52 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingIndicator;
