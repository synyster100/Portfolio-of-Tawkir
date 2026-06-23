import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import ExperienceGrid from "@/components/ExperienceGrid";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <About />
        <Metrics />
        <ExperienceGrid />
        <WorkGrid />
        <Process />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
