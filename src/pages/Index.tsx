import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import WhyDifferent from "@/components/WhyDifferent";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ForWho />
      <Benefits />
      <WhyDifferent />
      <About />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
