"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-agency-light w-full pt-20 md:pt-32 pb-8 px-5 md:px-12 overflow-hidden selection:bg-agency-yellow selection:text-agency-green">
      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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
            <h2 className="font-anton text-[65px] sm:text-[90px] md:text-[110px] leading-[0.9] uppercase tracking-[-0.02em] text-agency-green">
              Let's Create
              <br />
              <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-0">
                Together
                {/* Premium Arrow Button */}
                <Link
                  href="#contact"
                  className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border-[1.5px] border-agency-green/30 rounded-lg overflow-hidden group hover:border-agency-green hover:bg-agency-green/10 transition-all duration-300 -mt-1 md:-mt-3"
                >
                  {/* Primary Arrow */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-agency-green transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  {/* Secondary Hover Arrow */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute text-agency-green -translate-x-8 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
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
            {/* Back Layer */}
            <div className="absolute inset-0 bg-[#d0d7e1] rounded-2xl md:rounded-[2rem] border border-black/5 translate-x-[-12%] translate-y-[15%]" />
            {/* Middle Layer */}
            <div className="absolute inset-0 bg-[#e2e8f0]/80 rounded-2xl md:rounded-[2rem] border border-black/5 translate-x-[-6%] translate-y-[7.5%] backdrop-blur-sm" />
            {/* Front Image Layer */}
            <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-black/10 z-10 bg-black/10">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop" // Replacing with similar blurry aesthetic man walking
                alt="Creative Collaboration"
                className="w-full h-full object-cover"
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
              <span className="font-satoshi font-bold text-[16px] md:text-[18px] text-agency-green mb-3 md:mb-4">
                Visit Us
              </span>
              <p className="font-satoshi text-[15px] md:text-[16px] text-agency-green/80 font-medium max-w-[220px] leading-relaxed">
                7814 Harrison Blvd. Wilmington,
                <br />
                19804 United States
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col">
              <span className="font-satoshi font-bold text-[16px] md:text-[18px] text-agency-green mb-3 md:mb-4">
                Contact Us
              </span>
              <a
                href="mailto:hello@framer.com"
                className="font-satoshi text-[15px] md:text-[16px] text-agency-green/80 font-medium hover:text-agency-green transition-colors mb-1.5"
              >
                hello@framer.com
              </a>
              <a
                href="tel:+12345678910"
                className="font-satoshi text-[15px] md:text-[16px] text-agency-green/80 font-medium hover:text-agency-green transition-colors"
              >
                +1 (234) 567-8910
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-agency-green/70">
            {/* Instagram */}
            <a
              href="#"
              className="hover:text-agency-green transition-colors p-1"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Dribbble */}
            <a
              href="#"
              className="hover:text-agency-green transition-colors p-1"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-agency-green transition-colors p-1"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="hover:text-agency-green transition-colors p-1"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-agency-green/20 my-8 md:my-10" />

        {/* BOTTOM SECTION: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          {/* Copyright (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="order-2 md:order-1 font-satoshi font-medium text-[13px] md:text-[14px] text-agency-green/80 tracking-wide">
            © 2025 Templyo - All right reserved
          </div>

          {/* Policies (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="order-1 md:order-2 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 font-satoshi font-medium text-[13px] md:text-[14px] text-agency-green/80">
            <Link
              href="#"
              className="hover:text-agency-green transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="hidden md:inline text-agency-green/40">•</span>
            <Link
              href="#"
              className="hover:text-agency-green transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline text-agency-green/40">•</span>
            <Link
              href="#"
              className="hover:text-agency-green transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
