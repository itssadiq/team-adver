"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// 1. Reusable Flip Text component brought in from the Hero section
const FlipText = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="flex">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{ initial: { y: 0 }, hovered: { y: "-120%" } }}
            transition={{
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.015,
            }}
            className="inline-block whitespace-pre"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-center">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{ initial: { y: "120%" }, hovered: { y: 0 } }}
            transition={{
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.015,
            }}
            className="inline-block whitespace-pre"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Custom SVG Checkmark Icon for selected radio buttons
const CheckCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[22px] h-[22px] text-agency-blue"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M7 12.5L10.5 16L17 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactForm() {
  const [budget, setBudget] = useState("<$5,000");

  const budgetOptions = ["<$5,000", "<$10,000", ">$10,000"];

  // Animation variants for smooth page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    // We use min-h-screen and pt-32 to account for your navbar height
    <main className="relative min-h-screen bg-agency-light pt-28 md:pt-40 pb-20 px-5 md:px-12 selection:bg-agency-blue selection:text-agency-grey overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-start">
        {/* LEFT COLUMN: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start pt-4"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-1 not-italic max-md:text-[55px] max-md:leading-[0.95] mb-6"
          >
            Let's Build
            <br />
            Something
            <br />
            Together.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-satoshi text-agency-grey text-[18px] md:text-[20px] font-medium leading-[1.4] max-w-[420px]"
          >
            Have a project or need help? Fill out the form, and we'll get back
            to you soon.
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 24,
            delay: 0.2,
          }}
          className="w-full bg-agency-grey rounded-[2rem] p-8 md:p-12 shadow-2xl"
        >
          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-satoshi font-bold text-[15px] text-agency-light"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-black/15 border border-white/20 rounded-xl px-4 py-3.5 font-satoshi text-agency-light placeholder:text-agency-light/40 focus:outline-none focus:border-agency-blue transition-colors duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-satoshi font-bold text-[15px] text-agency-light"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full bg-black/15 border border-white/20 rounded-xl px-4 py-3.5 font-satoshi text-agency-light placeholder:text-agency-light/40 focus:outline-none focus:border-agency-blue transition-colors duration-300"
              />
            </div>

            {/* Budget Custom Radio Group */}
            <div className="flex flex-col gap-3 mt-2">
              <label className="font-satoshi font-bold text-[15px] text-agency-light mb-1">
                Your Budget
              </label>
              <div className="flex flex-col gap-3">
                {budgetOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => setBudget(option)}
                    className="flex items-center gap-3 cursor-pointer group w-fit"
                  >
                    <div className="flex items-center justify-center w-[22px] h-[22px]">
                      {budget === option ? (
                        <CheckCircleIcon />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
                      )}
                    </div>
                    <span className="font-satoshi text-agency-light text-[15px] font-medium tracking-wide">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2 mt-2">
              <label
                htmlFor="project"
                className="font-satoshi font-bold text-[15px] text-agency-light"
              >
                Your Project
              </label>
              <textarea
                id="project"
                placeholder="Tell us about your project"
                className="w-full h-[140px] md:h-[160px] resize-none bg-black/15 border border-white/20 rounded-xl px-4 py-3.5 font-satoshi text-agency-light placeholder:text-agency-light/40 focus:outline-none focus:border-agency-blue transition-colors duration-300"
              />
            </div>

            {/* 2. Updated Submit Button with FlipText */}
            <motion.button
              type="submit"
              initial="initial"
              whileHover="hovered"
              whileTap={{ scale: 0.98 }}
              // Combined variants to handle both the button scaling and the child FlipText animation
              variants={{
                initial: { scale: 1, backgroundColor: "#ace4f8" },
              }}
              className="w-full text-agency-grey font-satoshi font-bold text-[17px] md:text-[18px] py-4 rounded-full mt-4 cursor-pointer"
            >
              <FlipText>Submit</FlipText>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
