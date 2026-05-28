import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import EfficiencyGrid from "../components/EfficiencyGrid";
import Industries from "../components/Industries";
import OdooModules from "../components/OdooModules";
import Advantage from "../components/Advantage";
import AboutUs from "../components/AboutUs";
import SavingsCalculator from "../components/SavingsCalculator";
import Testimonials from "../components/Testimonials";
import EEATSection from "../components/EEATSection";
import FAQSection from "../components/FAQSection";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Manomay Global Solutions",
    "image": "https://manomayglobalsolutions.com/Manomay_Logo_Favicon.png",
    "@id": "https://manomayglobalsolutions.com",
    "url": "https://manomayglobalsolutions.com",
    "telePhone": "+1 (888) 466-2666",
    "email": "info@manomayglobalsolutions.com",
    "description": "Global ERP Implementation & Consulting Partner specializing in NetSuite and Odoo.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/manomay-global"
    ]
  };

  return (
    <main>
      <SEO 
        title="Manomay Global Solutions - Leading ERP & IT Consulting" 
        description="Empowering businesses with custom ERP implementations using Odoo and NetSuite. Discover how our strategic IT consulting drives efficiency and growth." 
      />
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Helmet>
      <Hero />
      <TrustBar />
      <AboutUs />
      <EEATSection />
      <EfficiencyGrid />
      <Industries />
      <OdooModules />
      <Advantage />
      <Testimonials />
      <FAQSection />
      <SavingsCalculator />
    </main>
  );
}
