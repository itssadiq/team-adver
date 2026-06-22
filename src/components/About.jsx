"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // Staggered animation for the left text column
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    // ID matched exactly to the Navbar href "#about-us"
    // "bg-agency-grey" with overflow-hidden to keep the layout tight
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="relative w-full bg-agency-grey overflow-hidden selection:bg-agency-blue selection:text-agency-grey"
    >


      {/* Main Container - Constrained for Mobile "One Go" Fit */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-12 py-20 md:py-32 min-h-[100dvh] md:min-h-0 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          {/* Left Column: Text */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
            className="flex flex-col items-start mt-8 md:mt-0"
          >
            {/* Small Blue Subheading */}
            <motion.span
              variants={textItemVariants}
              className="font-satoshi font-bold text-agency-light text-[14px] md:text-[16px] uppercase tracking-wider mb-3"
            >
              About Us
            </motion.span>

            {/* Main Heading 
                Overriding the default dark color to light text with !text-agency-light 
                Using not-italic because your design screenshot shows upright text */}
            <motion.h2
              id="about-heading"
              variants={textItemVariants}
              className="heading-2 !text-agency-light not-italic max-md:text-[55px] max-md:leading-[0.95] mb-5 md:mb-6"
            >
              Ideas Crafted
              <br className="hidden md:block" /> Into Impact
            </motion.h2>

            {/* Paragraph Text */}
            <motion.p
              variants={textItemVariants}
              className="body-16-medium !text-agency-light not-italic max-w-[480px] max-md:text-[15px] opacity-90"
            >
              At Team Adver, we’re not just a marketing agency but your digital
              growth partners. With a passion for creativity and a knack for
              data-driven strategies, we bring your brand’s unique story to
              life.
            </motion.p>
          </motion.div>

          {/* Right Column: Imagery & Blue Sparks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="relative w-full flex justify-center items-center h-[260px] md:h-[450px]"
          >
            {/* Image Wrapper - Removed Hover as requested, rotated slightly */}
            <motion.figure
              initial={{ rotate: 0, scale: 0.9 }}
              whileInView={{ rotate: 4, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.3,
                delay: 0.2,
              }}
              className="relative w-[90%] md:w-[85%] h-full rounded-2xl md:rounded-[2rem] overflow-hidden border-[1px] border-white/20 shadow-2xl z-10 bg-agency-dark"
            >
              <Image
                src="/about4.jpg"
                alt="Vibrant red and orange light tunnel symbolizing Damas Creative agency turning bold ideas into impactful brand expressions"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 42vw, 540px"
                className="object-cover"
              />
            </motion.figure>

            {/* Blue Hand-Drawn Sparks / Sunbeams */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-2 md:-top-10 md:-right-6 w-20 h-20 md:w-28 md:h-28 text-agency-blue z-0"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-full h-full drop-shadow-md"
              >
                <path
                  d="M20,80 Q25,45 15,10"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M45,85 Q65,55 85,25"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M60,95 Q85,85 105,75"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
