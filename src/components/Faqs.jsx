"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// FAQ Data (Updated to match your exact screenshot)
const faqs = [
  {
    question: "Is this really a free template?",
    answer:
      "Yes! This template is 100% free to use. You can duplicate it, customize it, and publish it — no hidden fees.",
  },
  {
    question: "Can I customize it without code?",
    answer:
      "While this specific version is built with code (React/Tailwind), the clean architecture makes it incredibly straightforward to modify if you have basic development knowledge.",
  },
  {
    question: "Is it mobile responsive?",
    answer:
      "Every single component is meticulously crafted and rigorously tested to ensure a pixel-perfect experience across all devices and screen sizes.",
  },
  {
    question: "Can I use it for client work?",
    answer:
      "Yes, you are fully permitted to use this template as a foundation for your paid client projects without any attribution required.",
  },
  {
    question: "Do I need a Framer account to use it?",
    answer:
      "No. Even though we utilize Framer Motion for the seamless animations, this is a standard React/Next.js application. No Framer subscription is needed.",
  },
];

// Individual Accordion Component
const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    // The background now wraps the entire component to match your new screenshot
    <div className="w-full bg-black/15 hover:bg-black/25 transition-colors duration-300 rounded-[1rem] md:rounded-[1.25rem] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 md:py-6 cursor-pointer text-left"
      >
        <span className="font-satoshi text-[16px] md:text-[18px] font-medium text-agency-light tracking-wide pr-4">
          {faq.question}
        </span>

        {/* Dynamic Plus / Cross Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-300 relative ${
            isOpen
              ? "bg-agency-blue text-agency-dark"
              : "border border-white/20 text-agency-light"
          }`}
        >
          {/* Vertical Line */}
          <span className="absolute w-[1.5px] h-3 bg-current rounded-full" />
          {/* Horizontal Line */}
          <span className="absolute w-3 h-[1.5px] bg-current rounded-full" />
        </motion.div>
      </button>

      {/* Expandable Content - Hardware accelerated to prevent lag */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }} // Snappier, lighter easing
            className="overflow-hidden transform-gpu"
          >
            <div className="px-6 pb-6 pt-0 font-satoshi text-[15px] md:text-[16px] text-agency-light/80 leading-relaxed max-w-[90%]">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Set to 0 so the first one is open by default like the screenshot

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-agency-grey w-full px-5 md:px-12 py-20 md:py-32 overflow-hidden selection:bg-agency-blue selection:text-agency-grey"
    >
      {/* 
        ANTI-LAG FIX: 
        By making the height extremely large (3000px) instead of 100%, 
        the SVG element does not resize when the accordion opens/closes. 
        This prevents the browser from constantly redrawing the feTurbulence filter!
      */}
      <div
        className="absolute top-0 left-0 w-full h-[3000px] z-0 opacity-[0.04] pointer-events-none transform-gpu"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20">
          {/* LEFT COLUMN: Headings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start"
          >
            <span className="font-satoshi font-bold text-agency-light text-[13px] md:text-[14px] uppercase tracking-wider mb-3">
              FAQs
            </span>
            <h2 className="heading-2 !text-agency-light not-italic max-md:text-[55px] max-md:leading-[0.95]">
              Have
              <br />
              Questions?
            </h2>
          </motion.div>

          {/* RIGHT COLUMN: Accordion & Contact Link */}
          <div className="flex flex-col w-full">
            {/* FAQ List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-3 md:gap-4 w-full"
            >
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </motion.div>

            {/* Bottom Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="flex flex-row items-center justify-between w-full mt-6 md:mt-8 px-2"
            >
              <span className="font-satoshi font-medium text-[13px] md:text-[15px] text-agency-light/80">
                Can't find what you're looking for?
              </span>

              {/* Contact Us Animated Link */}
              <Link
                href="#contact"
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-satoshi font-bold text-[14px] md:text-[15px] !text-agency-light relative overflow-hidden">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-light -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>

                <div className="relative border border-agency-light/40 rounded-md p-1.5 overflow-hidden transition-colors duration-300 group-hover:border-agency-light group-hover:bg-agency-light/10">
                  {/* Primary Arrow */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FAFAFA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  {/* Secondary Hover Arrow */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FAFAFA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute top-1.5 left-1.5 -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
