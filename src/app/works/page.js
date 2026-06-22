// app/works/page.jsx (or pages/works.jsx)

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


// --- Adjust these import paths based on your folder structure ---
import { worksData } from "../data/worksData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Adapted Link Component for the Light Theme
const ProjectLinkLight = ({ text, className }) => (
  <Link
    href="#project"
    className={`flex items-center gap-2 group cursor-pointer w-fit ${className}`}
  >
    <span className="font-satoshi font-bold text-[14px] md:text-[15px] !text-agency-grey relative overflow-hidden">
      {text}
      <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-grey -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </span>
    <div className="relative border border-agency-grey/30 rounded-md p-1.5 overflow-hidden transition-colors duration-300 group-hover:border-agency-grey group-hover:bg-agency-grey/10">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#101818"
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
        stroke="#101818"
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

// 2. Adapted ProjectCard for Light Theme (Dark text, dark borders)
const ProjectCardLight = ({ project }) => {
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
            className={`flex items-center gap-2 font-satoshi font-bold text-[11px] md:text-[12px] text-agency-grey/70 tracking-widest uppercase mb-3 md:mb-4 ${isRightAligned ? "md:flex-row-reverse" : ""}`}
          >
            <span>{project.date}</span>
            <span className="text-agency-blue text-[16px] leading-none">
              •
            </span>
            <span>{project.category}</span>
          </div>
          <h3 className="heading-3 not-italic max-md:text-[40px] leading-[0.9]">
            {project.title}
          </h3>
        </div>

        <div
          className={`flex flex-col ${isRightAligned ? "md:items-end" : "md:items-start"}`}
        >
          <p
            className={`font-satoshi text-[16px] font-medium text-agency-grey/80 max-w-[340px] mb-8 md:mb-6 ${isRightAligned ? "md:ml-auto" : ""}`}
          >
            {project.desc}
          </p>
          <ProjectLinkLight text="See Project" className="hidden md:flex" />
        </div>
      </div>

      {/* IMAGE & THUMBNAILS COLUMN */}
      <div
        className={`relative w-full order-2 ${isRightAligned ? "md:order-1" : "md:order-2"}`}
      >
        <motion.div
          initial={{ opacity: 0.5, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
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
          <ProjectLinkLight text="Learn More" />
        </div>
      </div>
    </motion.div>
  );
};

// 3. Main Page Component
export default function WorksPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-agency-light min-h-screen w-full px-5 md:px-12 pt-32 pb-20 md:pb-32 overflow-hidden selection:bg-agency-blue selection:text-agency-grey">

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="flex flex-col items-start mb-16 md:mb-28 pt-4"
          >
            <h1 className="heading-1 not-italic uppercase mb-4 max-md:text-[60px] max-md:leading-[0.9]">
              Our Work.
            </h1>
            <p className="font-satoshi text-agency-grey text-[18px] md:text-[20px] font-medium leading-[1.4] max-w-[500px]">
              A collection of our finest brand identities, digital experiences,
              and creative strategies built for modern businesses.
            </p>
          </motion.div>

          {/* ALL Projects List */}
          <div className="flex flex-col gap-24 md:gap-40">
            {worksData.map((project) => (
              <ProjectCardLight key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
