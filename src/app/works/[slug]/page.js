import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { worksData } from "../../data/worksData";

export async function generateStaticParams() {
  return worksData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = worksData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative bg-agency-light min-h-screen w-full px-5 md:px-12 pt-32 pb-20 md:pb-32 overflow-hidden selection:bg-agency-blue selection:text-agency-grey">
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-20">
          
          {/* Banner Image */}
          <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
            <Image
              src={project.mainImg}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-8 md:gap-16">
            
            {/* Header section */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 font-satoshi font-bold text-[12px] md:text-[14px] text-agency-grey/70 tracking-widest uppercase">
                <span>{project.date}</span>
                <span className="text-agency-blue text-[18px] leading-none">•</span>
                <span>{project.category}</span>
              </div>
              <h1 className="heading-1 not-italic uppercase max-md:text-[50px] max-md:leading-[0.9]">
                {project.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Paragraph */}
              <div>
                <h2 className="heading-4 mb-6">About the Project</h2>
                <p className="font-satoshi text-[18px] md:text-[20px] font-medium text-agency-grey/80 leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Listicles */}
              <div>
                <h2 className="heading-4 mb-6">Key Deliverables</h2>
                <ul className="flex flex-col gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-agency-blue flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#101818" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-satoshi text-[18px] md:text-[20px] font-medium text-agency-grey/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
