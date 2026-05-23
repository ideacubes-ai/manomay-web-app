import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import EfficiencyGrid from "../components/EfficiencyGrid";
import Industries from "../components/Industries";
import OdooModules from "../components/OdooModules";
import Advantage from "../components/Advantage";
import AboutUs from "../components/AboutUs";
import SavingsCalculator from "../components/SavingsCalculator";
import Testimonials from "../components/Testimonials";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO 
        title="Manomay Global Solutions - Leading ERP & IT Consulting" 
        description="Empowering businesses with custom ERP implementations using Odoo and NetSuite. Discover how our strategic IT consulting drives efficiency and growth." 
      />
      <Hero />
      <TrustBar />
      <AboutUs />
      <EfficiencyGrid />
      <Industries />
      <OdooModules />
      <Advantage />
      <Testimonials />
      <SavingsCalculator />
    </main>
  );
}
