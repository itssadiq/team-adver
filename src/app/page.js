import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-agency-light flex flex-col overflow-hidden selection:bg-agency-blue selection:text-agency-grey">

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
