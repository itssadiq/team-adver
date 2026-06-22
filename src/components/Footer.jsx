"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

// Custom component to apply the "FlipText" vertical slide effect to Social Icons
const FlipIcon = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden flex items-center justify-center p-1 text-agency-grey/70 hover:text-agency-grey transition-colors cursor-pointer"
    >
      <motion.div
        variants={{ initial: { y: 0 }, hovered: { y: "-150%" } }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ initial: { y: "150%" }, hovered: { y: 0 } }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default function Footer() {
  return (
    <footer className="relative bg-agency-light w-full pt-20 md:pt-32 pb-8 px-5 md:px-12 overflow-hidden selection:bg-agency-blue selection:text-agency-grey">

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">
        {/* TOP SECTION: Call to Action & Stacked Images */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 lg:gap-10">
          {/* Massive Heading + Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <h2 className="font-anton text-[65px] sm:text-[90px] md:text-[110px] leading-[0.9] uppercase tracking-[-0.02em] text-agency-grey">
              Let's Create
              <br />
              <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-0">
                Together
                {/* Premium Arrow Button */}
                <Link
                  href="#contact"
                  className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border-[1.5px] border-agency-grey/30 rounded-lg overflow-hidden group hover:border-agency-grey hover:bg-agency-grey/10 transition-all duration-300 -mt-1 md:-mt-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-agency-grey transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute text-agency-grey -translate-x-8 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </h2>
          </motion.div>

          {/* 3D Stacked Image Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-[340px] md:max-w-[440px] aspect-[16/9] mr-auto lg:ml-auto lg:mr-8 mt-4 lg:mt-0"
          >
            <div className="absolute inset-0 bg-[#d0d7e1] rounded-2xl md:rounded-[2rem] border border-black/5 translate-x-[-12%] translate-y-[15%]" />
            <div className="absolute inset-0 bg-[#e2e8f0]/80 rounded-2xl md:rounded-[2rem] border border-black/5 translate-x-[-6%] translate-y-[7.5%] backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-black/10 z-10 bg-black/10">
              <Image
                src="/footer.jpg"
                alt="Creative Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Info Columns & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-28 md:mt-40 gap-10 md:gap-0">
          {/* Info Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-32">
            {/* Visit Us */}
            <div className="flex flex-col">
              <span className="font-satoshi font-bold text-[16px] md:text-[18px] text-agency-grey mb-3 md:mb-4">
                Visit Us
              </span>
              <p className="font-satoshi text-[15px] md:text-[16px] text-agency-grey/80 font-medium max-w-[220px] leading-relaxed">
                Office#406 Indigo Business Center Bahadurabad,
                <br />
                Karachi, Pakistan
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col">
              <span className="font-satoshi font-bold text-[16px] md:text-[18px] text-agency-grey mb-3 md:mb-4">
                Contact Us
              </span>
              {/* Sliding Underline Email */}
              <a
                href="mailto:haider@teamadver.com"
                className="group w-fit font-satoshi text-[15px] md:text-[16px] text-agency-grey/80 font-medium hover:text-agency-grey transition-colors mb-2"
              >
                <span className="relative overflow-hidden inline-flex pb-[2px]">
                  haider@teamadver.com
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-grey -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
              </a>
              {/* Sliding Underline Phone */}
              <a
                href="https://wa.me/+923331374637"
                className="group w-fit font-satoshi text-[15px] md:text-[16px] text-agency-grey/80 font-medium hover:text-agency-grey transition-colors"
              >
                <span className="relative overflow-hidden inline-flex pb-[2px]">
                  +92 333 1374637
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-grey -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
              </a>
            </div>
          </div>

          {/* Social Icons (Using FlipIcon Component) */}
          <div className="flex items-center gap-4">
            <FlipIcon href="https://www.instagram.com/teamadver/">
              <FiInstagram size={22} strokeWidth={1.5} />
            </FlipIcon>
            <FlipIcon href="https://www.facebook.com/share/14fQNGKhb5C/">
              <FiFacebook size={22} strokeWidth={1.5} />
            </FlipIcon>
            <FlipIcon href="https://www.linkedin.com/company/team-adver/">
              <FiLinkedin size={22} strokeWidth={1.5} />
            </FlipIcon>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-agency-grey/20 my-8 md:my-10" />

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex justify-center items-center w-full">
          {/* Copyright */}
          <div className="font-satoshi font-medium text-[13px] md:text-[14px] text-agency-grey/80 tracking-wide text-center">
            © 2026 TeamAdver - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
