"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const servicesData = [
  {
    title: "Brand\nIdentity",
    desc: "Crafting memorable identities that express the heart of your brand.",
    img: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Brand\nStrategy",
    desc: "Defining your brand's direction, voice, and positioning for long lasting impact.",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Creative\nDirection",
    desc: "Guiding the visual story and ensuring every detail aligns with your mission.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 24 },
    },
  };

  return (
    <section
      id="services"
      className="bg-agency-green px-2 md:px-5 pb-4 md:pb-5 pt-10 md:pt-20"
    >
      <div className="relative bg-agency-light rounded-[2rem] md:rounded-[3rem] w-full max-w-7xl mx-auto p-6 md:p-16 overflow-hidden">
        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full">
            <div className="flex flex-col items-start">
              <span className="font-satoshi font-bold text-agency-green text-[13px] md:text-[15px] uppercase tracking-wider mb-3">
                Our Services
              </span>
              <h2 className="heading-2 not-italic max-md:text-[50px] max-md:leading-[0.95]">
                How We Elevate
                <br />
                Your Brand
              </h2>
            </div>

            {/* NEW Button Hover Effect: Premium sliding arrows */}
            <div className="mt-6 md:mt-0 self-end md:mb-4">
              <Link
                href="#contact"
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-satoshi font-bold text-[16px] text-agency-green relative overflow-hidden">
                  {/* Subtle text underline reveal on hover */}
                  Start a Project
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-green -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>

                <div className="relative border border-agency-green rounded-md p-1.5 overflow-hidden bg-transparent transition-colors duration-300 group-hover:bg-agency-green/5">
                  {/* Arrow 1 (Original - slides out top right) */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-agency-green transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>

                  {/* Arrow 2 (Hidden - slides in from bottom left) */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute top-1.5 left-1.5 text-agency-green -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Cards Container - Switched from Grid to Flexbox Wrap for perfect centering */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 md:mt-16 flex flex-wrap justify-center gap-5 md:gap-6"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                // Width math: Mobile=100%, Tablet=50% (minus gaps), Desktop=33.3% (minus gaps)
                // Height: Reduced from 480px to 400px on desktop
                className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[320px] md:h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-black/10 shadow-lg"
              >
                {/* Background Image (Hover zoom removed) */}
                <img
                  src={service.img}
                  alt={service.title.replace("\n", " ")}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  <h3 className="heading-4 !text-agency-light not-italic whitespace-pre-line max-md:text-[34px] max-md:leading-tight">
                    {service.title}
                  </h3>

                  <p className="body-16-medium !text-agency-light not-italic opacity-90 max-w-[280px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
