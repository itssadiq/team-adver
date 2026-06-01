"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom component to handle the professional "Flip Wave" text animation
const FlipLink = ({ children, href, onClick, className }) => {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        // Subtle background color shift on hover
        variants={{
          initial: { backgroundColor: "#FAFAFA" },
          hovered: { backgroundColor: "#e5e5e5" },
        }}
        className={`relative overflow-hidden text-agency-green rounded-full font-satoshi font-medium text-[15px] cursor-pointer ${className}`}
      >
        <div className="relative flex items-center justify-center">
          <div className="flex">
            {children.split("").map((l, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-120%" },
                }}
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
                variants={{
                  initial: { y: "120%" },
                  hovered: { y: 0 },
                }}
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
      </motion.div>
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About Us", "Works", "Blog", "Contact"];

  return (
    <motion.div
      className="fixed top-6 left-0 w-full flex flex-col items-center z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
    >
      {/* Main Navbar */}
      <nav className="bg-agency-green rounded-full px-2 flex items-center justify-between w-[80%] md:w-fit shadow-lg transition-all duration-300">
        {/* --- CUSTOM LOGO SECTION --- */}
        <Link href="/" className="ml-2 md:ml-3 shrink-0 flex items-center">
          {/* 
            SOLUTION: 
            1. We restrict the height (h-10) to keep the navbar thin and tight.
            2. We give it width (w-32 to w-40) so a horizontal logo has room.
            3. We use scale-[1.35] (or adjust to 1.5 etc.) to make it visually pop out 
               without physically stretching the green navbar background.
          */}
          <div className="relative w-32 h-20 flex items-center">
            <img
              src="/Logo.png"
              alt="Company Logo"
              // object-left anchors it nicely to the left side as it scales
              className="w-full h-full object-contain object-left scale-[1.35] origin-left"
            />
          </div>
        </Link>
        {/* --------------------------- */}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 ml-4 mr-1">
          {navLinks.map((item) => (
            <FlipLink
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2"
            >
              {item}
            </FlipLink>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 mr-1 cursor-pointer"
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.85 }}
        >
          {isOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FAFAFA"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5 items-center justify-center">
              <div className="w-5 h-[1.5px] bg-agency-light rounded-full"></div>
              <div className="w-5 h-[1.5px] bg-agency-light rounded-full"></div>
            </div>
          )}
        </motion.button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-3 w-[70%] bg-agency-green rounded-[1.5rem] p-5 flex flex-col items-start gap-3 shadow-xl origin-top"
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {navLinks.map((item) => (
              <FlipLink
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 w-fit"
              >
                {item}
              </FlipLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
