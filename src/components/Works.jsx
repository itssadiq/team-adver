"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const worksData = [
  {
    id: 1,
    date: "Jun 2024",
    category: "PACKAGING",
    title: "Velocity Motors",
    desc: "A high-performance brand crafted for a new era of electric sports cars, fast and emotionally charged.",
    mainImg:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop", // Sleek blurred car
    thumb1:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=400&auto=format&fit=crop",
    thumb2:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop",
    align: "left", // Text on left, Image on right
  },
  {
    id: 2,
    date: "Feb 2025",
    category: "BRANDING",
    title: "Lumen Atelier",
    desc: "A high-performance brand crafted for a new era of electric sports cars, fast and emotionally charged.",
    mainImg:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop", // Abstract people/orange light
    thumb1:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
    thumb2:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    align: "right", // Image on left, Text on right
  },
];

// Reusable animated Link/Button component
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
      {/* Primary Arrow */}
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
      {/* Secondary Hover Arrow */}
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

// Individual Project Card (Manages its own image swapping state)
const ProjectCard = ({ project }) => {
  const isRightAligned = project.align === "right";

  // State for image swapping
  const [mainImg, setMainImg] = useState(project.mainImg);
  const [thumbs, setThumbs] = useState([project.thumb1, project.thumb2]);

  // Handle clicking a thumbnail
  const handleSwap = (index) => {
    const clickedThumb = thumbs[index];
    setMainImg(clickedThumb); // Set clicked image as main

    // Replace the clicked thumbnail's slot with the old main image
    const newThumbs = [...thumbs];
    newThumbs[index] = mainImg;
    setThumbs(newThumbs);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      // Responsive grid: properly gives the image column more space depending on alignment
      className={`flex flex-col md:grid gap-6 md:gap-16 items-stretch ${
        isRightAligned ? "md:grid-cols-[1.4fr_1fr]" : "md:grid-cols-[1fr_1.4fr]"
      }`}
    >
      {/* TEXT COLUMN */}
      <div
        className={`flex flex-col w-full order-1 md:h-[400px] lg:h-[480px] md:justify-between py-1 ${
          isRightAligned
            ? "md:order-2 md:items-end md:text-right"
            : "md:order-1 items-start"
        }`}
      >
        {/* Top Block: Date & Title */}
        <div
          className={`flex flex-col ${isRightAligned ? "md:items-end" : "md:items-start"} mb-4 md:mb-0`}
        >
          <div
            className={`flex items-center gap-2 font-satoshi font-bold text-[11px] md:text-[12px] text-agency-light tracking-widest uppercase mb-3 md:mb-4 ${
              isRightAligned ? "md:flex-row-reverse" : ""
            }`}
          >
            <span>{project.date}</span>
            <span className="text-agency-yellow text-[16px] leading-none">
              •
            </span>
            <span>{project.category}</span>
          </div>

          <h3 className="heading-3 !text-agency-light not-italic max-md:text-[40px] leading-[0.9]">
            {project.title}
          </h3>
        </div>

        {/* Bottom Block: Description & Button */}
        <div
          className={`flex flex-col ${isRightAligned ? "md:items-end" : "md:items-start"}`}
        >
          <p
            className={`body-16-medium !text-agency-light not-italic opacity-90 max-w-[340px] mb-8 md:mb-6 ${
              isRightAligned ? "md:ml-auto" : ""
            }`}
          >
            {project.desc}
          </p>
          <ProjectLink text="See Project" className="hidden md:flex" />
        </div>
      </div>

      {/* IMAGE & THUMBNAILS COLUMN */}
      <div
        className={`relative w-full order-2 ${isRightAligned ? "md:order-1" : "md:order-2"}`}
      >
        {/* Thumbnails */}
        {/* Mobile: Above image right-aligned. Desktop: Floating outside at the bottom corner */}
        <div
          className={`flex gap-3 mb-4 md:mb-0 justify-end md:absolute md:flex-col z-20 md:bottom-8 md:top-auto md:-translate-y-0 ${
            isRightAligned ? "md:-right-6 lg:-right-8" : "md:-left-6 lg:-left-8"
          }`}
        >
          {thumbs.map((img, i) => (
            <div
              key={i}
              onClick={() => handleSwap(i)}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer bg-black/50 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        {/* Using key={mainImg} triggers Framer Motion to smoothly blur/fade the new image in when swapped */}
        <div className="relative w-full h-[240px] md:h-[400px] lg:h-[480px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-black/20 border border-white/10">
          <motion.img
            key={mainImg}
            initial={{ opacity: 0.5, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={mainImg}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Link (Hidden on Desktop) */}
        <div className="flex justify-end w-full mt-5 md:hidden">
          <ProjectLink text="Learn More" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Works() {
  return (
    <section
      id="works"
      className="relative bg-agency-green w-full px-5 md:px-12 py-20 md:py-32 overflow-hidden selection:bg-agency-yellow selection:text-agency-green"
    >
      {/* Subtle Noise Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center max-md:items-start mb-16 md:mb-28"
        >
          <span className="font-satoshi font-bold text-agency-yellow text-[13px] md:text-[14px] uppercase tracking-wider mb-2 md:mb-3">
            Selected Works
          </span>
          <h2 className="heading-2 !text-agency-light not-italic text-center max-md:text-left max-md:text-[50px] max-md:leading-[0.95]">
            Our Brightest creations
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {worksData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
