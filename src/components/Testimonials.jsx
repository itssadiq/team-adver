"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const reviewsData = [
  {
    id: 1,
    quote:
      '"Damas elevated our brand far beyond expectations. The campaign they crafted felt authentic, fresh, and exactly what our audience needed."',
    name: "Yakoub Kashmiri",
    role: "Marketing Director",
    company: "StyleStack",
  },
  {
    id: 2,
    quote:
      '"Their strategic vision was game-changing. We saw an immediate increase in engagement and a total transformation of our brand identity across all channels."',
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Vertex",
  },
  {
    id: 3,
    quote:
      '"A truly collaborative experience. They didn’t just design a brand; they helped us discover our true voice in a crowded industry and built a system that scales."',
    name: "David Chen",
    role: "Head of Product",
    company: "Quantum",
  },
];

// Clean Image-Only Logo Data
const clientLogos = [
  {
    src: "/3rd-beat.png",
    alt: "3rd Beat Logo",
  },
  {
    src: "/transdata.png",
    alt: "Transdata logo",
  },
  {
    src: "/ukmc.png",
    alt: "UKMC Logo",
  },
  {
    src: "/Bigbaat-logo.png",
    alt: "Bigbaat Logo",
  },
  {
    src: "/Unibridge.png",
    alt: "StitchnStyle Logo",
  },
  {
    src: "/Rofam.png",
    alt: "Rofam Logo",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="bg-agency-green px-2 md:px-5 pb-10 md:pb-20 pt-10 md:pt-20"
    >
      <div className="relative bg-agency-light rounded-[2rem] md:rounded-[3rem] w-full max-w-7xl mx-auto p-6 md:p-16 lg:p-20 overflow-hidden">
        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 w-full">
          {/* Header Row */}
          <div className="flex flex-col items-start md:items-center w-full mb-12 md:mb-20">
            <span className="font-satoshi font-bold text-agency-green text-[12px] md:text-[14px] uppercase tracking-wider mb-2 md:mb-3">
              Testimonials
            </span>
            <h2 className="heading-2 not-italic text-left md:text-center max-md:text-[45px] max-md:leading-[1]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center w-full">
            {/* LEFT COLUMN: Quote & Navigation */}
            <div className="flex flex-col w-full h-full justify-center">
              <div className="min-h-[220px] md:min-h-[240px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-start gap-6 md:gap-8"
                  >
                    <p className="font-satoshi text-[18px] md:text-[22px] font-medium leading-[1.5] text-agency-green max-w-[500px]">
                      {reviewsData[currentIndex].quote}
                    </p>

                    <div className="flex flex-col items-start">
                      <span className="font-satoshi font-bold text-[16px] md:text-[18px] text-agency-green">
                        {reviewsData[currentIndex].name}
                      </span>
                      <span className="font-satoshi font-medium text-[14px] md:text-[15px] text-agency-green/70 mt-0.5">
                        {reviewsData[currentIndex].role} —{" "}
                        {reviewsData[currentIndex].company}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Buttons Area */}
              <div className="flex flex-wrap items-center gap-6 mt-8 md:mt-10">
                <Link
                  href="#contact"
                  className="flex items-center gap-2 group cursor-pointer w-fit"
                >
                  <span className="font-satoshi font-bold text-[14px] md:text-[15px] text-agency-green relative overflow-hidden">
                    Start a Project
                    <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-green -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </span>

                  <div className="relative border border-agency-green/40 rounded-md p-1.5 overflow-hidden transition-colors duration-300 group-hover:border-agency-green group-hover:bg-agency-green/10">
                    <svg
                      width="14"
                      height="14"
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
                    <svg
                      width="14"
                      height="14"
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

                <div className="w-[1px] h-6 bg-agency-green/20 hidden md:block"></div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-md border border-agency-green/40 hover:bg-agency-green/10 transition-colors cursor-pointer group"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-agency-green group-hover:-translate-x-0.5 transition-transform"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-md border border-agency-green/40 hover:bg-agency-green/10 transition-colors cursor-pointer group"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-agency-green group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Logos Grid */}
            <div className="relative w-full">
              <div className="w-full bg-white rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px] md:min-h-[380px]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-20 w-full justify-items-center">
                  {clientLogos.map((client, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <div className="relative w-[110px] h-[50px] md:w-[150px] md:h-[80px]">
                        <Image
                          src={client.src}
                          alt={client.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
