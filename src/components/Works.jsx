"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { worksData } from "../app/data/worksData"; // <-- Adjust path as needed

// Reusable Flip Text component for the Discover More button
const FlipText = ({ children }) => (
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

// Animated Link Component
const ProjectLink = ({ text, className }) => (
  <Link
    href="#project"
    className={`flex items-center gap-2 group cursor-pointer w-fit ${className}`}
  >
    <span className="font-satoshi font-bold text-[14px] md:text-[15px] !text-agency-light relative overflow-hidden">
      {text}
      <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-light -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </span>
    <div className="relative border border-agency-light/40 rounded-md p-1.5 overflow-hidden transition-colors duration-300 group-hover:border-agency-light group-hover:bg-agency-light/10">
      <svg
        width="14"
        height="14"
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
      <svg
        width="14"
        height="14"
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
);

const ProjectCard = ({ project }) => {
  const isRightAligned = project.align === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className={`flex flex-col md:grid gap-6 md:gap-16 items-stretch ${
        isRightAligned ? "md:grid-cols-[1.4fr_1fr]" : "md:grid-cols-[1fr_1.4fr]"
      }`}
    >
      {/* TEXT COLUMN */}
      <div
        className={`flex flex-col w-full order-1 md:h-[400px] lg:h-[480px] md:justify-between py-1 ${isRightAligned ? "md:order-2 md:items-end md:text-right" : "md:order-1 items-start"}`}
      >
        <div
          className={`flex flex-col ${isRightAligned ? "md:items-end" : "md:items-start"} mb-4 md:mb-0`}
        >
          <div
            className={`flex items-center gap-2 font-satoshi font-bold text-[11px] md:text-[12px] text-agency-light tracking-widest uppercase mb-3 md:mb-4 ${isRightAligned ? "md:flex-row-reverse" : ""}`}
          >
            <span>{project.date}</span>
            <span className="text-agency-blue text-[16px] leading-none">
              •
            </span>
            <span>{project.category}</span>
          </div>
          <h3 className="heading-3 !text-agency-light not-italic max-md:text-[40px] leading-[0.9]">
            {project.title}
          </h3>
        </div>
        <div
          className={`flex flex-col ${isRightAligned ? "md:items-end" : "md:items-start"}`}
        >
          <p
            className={`body-16-medium !text-agency-light not-italic opacity-90 max-w-[340px] mb-8 md:mb-6 ${isRightAligned ? "md:ml-auto" : ""}`}
          >
            {project.desc}
          </p>
          <ProjectLink text="See Project" className="hidden md:flex" />
        </div>
      </div>

      {/* IMAGE COLUMN (Thumbnails Removed) */}
      <div
        className={`relative w-full order-2 ${isRightAligned ? "md:order-1" : "md:order-2"}`}
      >
        <motion.div
          initial={{ opacity: 0.5, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-[240px] md:h-[400px] lg:h-[480px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl bg-black/5 border border-black/5"
        >
          <Image
            src={project.mainImg}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="flex justify-end w-full mt-5 md:hidden">
          <ProjectLink text="Learn More" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Works() {
  // ONLY SHOW 3 PROJECTS ON HOMEPAGE
  const displayedWorks = worksData.slice(0, 3);

  return (
    <section
      id="works"
      className="relative bg-agency-grey w-full px-5 md:px-12 py-20 md:py-32 overflow-hidden selection:bg-agency-blue selection:text-agency-grey"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center max-md:items-start mb-16 md:mb-28"
        >
          <span className="font-satoshi font-bold text-agency-light text-[13px] md:text-[14px] uppercase tracking-wider mb-2 md:mb-3">
            Selected Works
          </span>
          <h2 className="heading-2 !text-agency-light not-italic text-center max-md:text-left max-md:text-[50px] max-md:leading-[0.95]">
            Our Brightest creations
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          {displayedWorks.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* NEW DISCOVER MORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-20 md:mt-32"
        >
          <Link href="/works">
            <motion.button
              initial="initial"
              whileHover="hovered"
              whileTap={{ scale: 0.95 }}
              variants={{
                initial: { scale: 1, backgroundColor: "#ace4f8" },
              }}
              className="text-agency-grey border border-agency-blue rounded-full px-8 py-3.5 font-satoshi font-bold text-[16px] md:text-[18px] cursor-pointer"
            >
              <FlipText>Discover More</FlipText>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
