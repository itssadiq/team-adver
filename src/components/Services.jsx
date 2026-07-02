"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    title: "Digital\nMarketing",
    desc: "Grow your brand faster with strategic social media marketing tailored to your goals. We combine creative content, audience insights, and data-driven strategies to increase reach, engagement, and conversions.",
    img: "/digital-marketing.jpg",
    alt: "Brand identity design workspace showcasing logo creation, color palettes, and visual branding elements for memorable corporate identities",
  },
  {
    title: "Design & \nAnimation",
    desc: "From logo design and complete brand identity systems to motion graphics, video editing, and immersive 2D/3D animations, we create creative assets that help your business stand out in a crowded digital space.",
    img: "/design-animation.jpg",
    alt: "Powerful visuals are the foundation of strong brand communication. From logo design and complete brand identity systems to motion graphics, video editing, and immersive 2D/3D animations, we create creative assets that help your business stand out in a crowded digital space.",
  },
  {
    title: "Content\nCreation",
    desc: "Exceptional content is what turns attention into engagement and engagement into growth. We create premium branded graphics, short-form videos, and high-impact carousel posts designed to elevate your brand.",
    img: "/content-creation.jpg",
    alt: "Exceptional content is what turns attention into engagement and engagement into growth. We create premium branded graphics, short-form videos, and high-impact carousel posts designed to elevate your brand.",
  },
  {
    title: "Website\nDevelopment",
    desc: "We build fast, responsive websites and e-commerce platforms designed for performance, user experience, and conversions.",
    img: "/web-dev.jpg",
    alt: "We create SEO-friendly, fully responsive websites that combine modern design with powerful development expertise. Whether you need a custom-coded solution in React, Next.js, or MERN stack, a scalable WordPress website, or a robust e-commerce platform, we deliver websites built for speed, user experience, and conversions.",
  },
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Improve rankings, increase organic traffic, and grow your brand with data-driven SEO strategies tailored for long-term results.",
    img: "/seo.jpg",
    alt: "Our SEO services are designed to improve your search rankings, increase qualified traffic, and position your brand ahead of the competition. From technical SEO and on-page optimization to keyword strategy and performance tracking, we create growth-focused strategies that drive sustainable results.",
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
      aria-labelledby="services-heading"
      className="bg-agency-grey px-2 md:px-5 pb-4 md:pb-5 pt-10 md:pt-20"
    >
      <div className="relative bg-agency-light rounded-[2rem] md:rounded-[3rem] w-full max-w-7xl mx-auto p-6 md:p-16 overflow-hidden">


        <div className="relative z-10 w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full">
            <header className="flex flex-col items-start">
              <span className="font-satoshi font-bold text-agency-grey text-[13px] md:text-[15px] uppercase tracking-wider mb-3">
                Our Services
              </span>
              <h2
                id="services-heading"
                className="heading-2 not-italic max-md:text-[50px] max-md:leading-[0.95]"
              >
                How We Elevate
                <br />
                Your Brand
              </h2>
            </header>

            {/* NEW Button Hover Effect: Premium sliding arrows */}
            <div className="mt-6 md:mt-0 self-end md:mb-4">
              <Link
                href="/contact"
                aria-label="Start a new project with our creative agency"
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-satoshi font-bold text-[16px] text-agency-grey relative overflow-hidden">
                  {/* Subtle text underline reveal on hover */}
                  Start a Project
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-agency-grey -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>

                <div className="relative border border-agency-grey rounded-md p-1.5 overflow-hidden bg-transparent transition-colors duration-300 group-hover:bg-agency-grey/5">
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
                    className="text-agency-grey transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                    aria-hidden="true"
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
                    className="absolute top-1.5 left-1.5 text-agency-grey -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Cards Container - Switched from Grid to Flexbox Wrap for perfect centering */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 md:mt-16 flex flex-wrap justify-center gap-5 md:gap-6 list-none p-0"
          >
            {servicesData.map((service, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                // Width math: Mobile=100%, Tablet=50% (minus gaps), Desktop=33.3% (minus gaps)
                // Height: Reduced from 480px to 400px on desktop
                className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[320px] md:h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-black/10 shadow-lg"
              >
                {/* Background Image - Replaced with Next.js Image for optimization */}
                <Image
                  src={service.img}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80"
                  aria-hidden="true"
                />

                <article className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  <h3 className="heading-4 !text-agency-light not-italic whitespace-pre-line max-md:text-[34px] max-md:leading-tight">
                    {service.title}
                  </h3>

                  <p className="body-16-medium !text-agency-light not-italic opacity-90 max-w-[280px]">
                    {service.desc}
                  </p>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
