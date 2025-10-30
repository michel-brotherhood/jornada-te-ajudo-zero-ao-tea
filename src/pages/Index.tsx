import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import WhyDifferent from "@/components/WhyDifferent";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ForWho />
      <Benefits />
      <WhyDifferent />
      <About />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
