import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

import Domains from "@/components/Domains";
import WhyChooseMe from "@/components/WhyChooseMe";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <Domains />
    <WhyChooseMe />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Index;
