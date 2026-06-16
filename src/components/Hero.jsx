"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Reusable Flip Text component for the Button
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

export default function Hero() {
  // Staggered animation configuration for left column text
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
    <section
      aria-label="Hero Introduction"
      className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-12 pt-28 pb-10 md:pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-center flex-grow"
    >
      {/* Left Column: Text & CTA */}
      <motion.header
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start mt-4 lg:mt-0"
      >
        <motion.h1
          variants={textItemVariants}
          className="heading-1 uppercase mb-6 max-md:text-[60px] max-md:leading-[0.9]]"
        >
          Bringing Your
          <br />
          Vision To Life.
        </motion.h1>

        <motion.p
          variants={textItemVariants}
          className="body-18-bold not-italic mb-6"
        >
          Where imagination, strategy, and storytelling collide to build
          unforgettable brand experiences that move people and grow businesses.
        </motion.p>

        {/* CTA Button wrapped in Link */}
        <motion.div variants={textItemVariants}>
          <Link
            href="/contact"
            aria-label="Start a collaboration with our creative agency"
          >
            <motion.button
              initial="initial"
              whileHover="hovered"
              whileTap={{ scale: 0.95 }}
              className="bg-agency-yellow text-agency-green border border-agency-green rounded-full px-6 py-3 font-satoshi font-bold text-[18px] shadow-[0_4px_14px_0_rgba(252,215,24,0.39)] cursor-pointer"
            >
              <FlipText>Let's Collab!</FlipText>
            </motion.button>
          </Link>
        </motion.div>
      </motion.header>

      {/* Right Column: Imagery & Graphics */}
      <div
        className="relative w-full h-[320px] md:h-[600px] flex items-center justify-center mt-2 lg:mt-0"
        role="presentation"
      >
        {/* Back Image (Abstract) */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1, y: 0, rotate: 12 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
            delay: 0.2,
          }}
          className="absolute right-0 md:right-10 top-0 md:top-12 w-[240px] md:w-[420px] h-[160px] md:h-[280px] rounded-2xl md:rounded-[2rem] overflow-hidden border-[1px] border-gray-200 shadow-xl"
        >
          <Image
            src="/hero2.png"
            alt="Abstract neon light trails representing creative brand strategy and digital innovation"
            fill
            sizes="(max-width: 768px) 240px, 420px"
            className="object-cover"
          />
        </motion.figure>

        {/* Front Image (Portrait blurred motion) - LCP Element */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: -6 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
            delay: 0.4,
          }}
          className="absolute left-2 md:left-8 bottom-6 md:bottom-20 w-[260px] md:w-[480px] h-[180px] md:h-[330px] rounded-xl md:rounded-2xl overflow-hidden border-[1.5px] border-[#0066FF] shadow-2xl z-10 bg-gray-200"
        >
          <Image
            src="/hero1.png"
            alt="Dynamic motion portrait showcasing storytelling and brand experience design"
            fill
            sizes="(max-width: 768px) 260px, 480px"
            priority
            className="object-cover grayscale-[30%]"
          />
        </motion.figure>
      </div>
    </section>
  );
}
