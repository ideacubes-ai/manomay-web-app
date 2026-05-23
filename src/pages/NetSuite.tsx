import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Code, 
  Database,
  Link as LinkIcon, 
  LineChart, 
  LifeBuoy,
  FileText,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Clock,
  Search,
  ChevronDown,
  Layers,
  Cloud
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NetSuite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-sky-500" />,
      title: "NetSuite Implementation",
      description: "End-to-end deployment aligned with your business structure, financial workflows, and reporting needs."
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Customization (SuiteScript & SuiteFlow)",
      description: "Tailored dashboards, workflows, and automation to match your exact business logic."
    },
    {
      icon: <Database className="w-8 h-8 text-sky-500" />,
      title: "Data Migration",
      description: "Secure and accurate migration from legacy systems, ERPs, or spreadsheets."
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-indigo-500" />,
      title: "Integrations",
      description: "Seamless integration with CRMs, eCommerce platforms, banking systems, and third-party tools."
    },
    {
      icon: <LineChart className="w-8 h-8 text-sky-500" />,
      title: "Financial & Business Consulting",
      description: "Align your ERP with accounting standards, compliance, and operational efficiency."
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-indigo-500" />,
      title: "Support & Optimization",
      description: "Continuous improvement, upgrades, and system health monitoring."
    }
  ];

  const industries = [
    "SaaS & Technology Companies",
    "Manufacturing & Distribution",
    "eCommerce & Retail",
    "Financial Services",
    "Healthcare & Pharma",
    "Professional Services"
  ];

  const processSteps = [
    { title: "Business & Financial Discovery", num: "01", desc: "Understanding your current state and financial requirements." },
    { title: "Solution Architecture & Planning", num: "02", desc: "Designing a scalable NetSuite structure for your operations." },
    { title: "Configuration & Customization", num: "03", desc: "Building and tailoring the system to your exact workflows." },
    { title: "Data Migration & Validation", num: "04", desc: "Securely transferring and validating your entire data history." },
    { title: "User Acceptance Testing (UAT)", num: "05", desc: "Rigorous testing to ensure everything works flawlessly." },
    { title: "Go-Live & Hypercare Support", num: "06", desc: "Smooth launch followed by intensive post-go-live care." }
  ];

  const outcomes = [
    { icon: <FileText className="w-6 h-6 text-sky-600" />, text: "Real-Time Financial Reporting" },
    { icon: <ShieldCheck className="w-6 h-6 text-sky-600" />, text: "Stronger Internal Controls & Compliance" },
    { icon: <RefreshCw className="w-6 h-6 text-sky-600" />, text: "Streamlined Operations Across Departments" },
    { icon: <TrendingUp className="w-6 h-6 text-sky-600" />, text: "Scalable Infrastructure for Growth" },
    { icon: <Clock className="w-6 h-6 text-sky-600" />, text: "Faster Month-End Close" },
    { icon: <Search className="w-6 h-6 text-sky-600" />, text: "360° Business Visibility" }
  ];

  const faqs = [
    {
      q: "How long does NetSuite implementation take?",
      a: "Typically 8–16 weeks depending on business complexity."
    },
    {
      q: "Is NetSuite suitable for growing businesses?",
      a: "Yes, especially for companies scaling rapidly or managing multiple entities."
    },
    {
      q: "Do you support post-implementation optimization?",
      a: "Absolutely. Continuous improvement is key to maximizing ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-sky-500/20">
      <SEO 
        title="Oracle NetSuite Implementation | Manomay Global Solutions" 
        description="Expert Oracle NetSuite implementations tailored to your business needs by Manomay Global Solutions. Enhance your operations with cloud ERP excellence." 
      />
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/10 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-slate-200 text-brand text-sm font-bold uppercase tracking-widest mb-10 shadow-sm justify-center">
                 <Cloud className="w-4 h-4 text-brand" /> Enterprise ERP Solutions
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-slate-900 mb-6 tracking-tight leading-tight lg:leading-[1] font-jakarta">
                Scale Smarter with <br className="hidden md:block"/>
                <span className="font-display italic font-normal text-brand text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] px-1">Oracle NetSuite</span>
                <br className="hidden md:block"/> Implementation
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Unify finance, operations, and growth on a powerful cloud ERP—implemented right the first time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 group active:scale-95">
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-slate-200 pt-8 flex-wrap items-center justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    <span className="font-semibold text-slate-700 text-base">Certified NetSuite Consultants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    <span className="font-semibold text-slate-700 text-base">Enterprise-Grade Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    <span className="font-semibold text-slate-700 text-base">End-to-End Implementation</span>
                  </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                    alt="NetSuite dashboard" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating elements to add life */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Visibility</div>
                    <div className="text-lg font-bold text-slate-900">Real-Time Data</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-8 bottom-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Enterprise</div>
                    <div className="text-lg font-bold text-slate-900">100% Unified</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-brand"></div> What We Do
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight font-jakarta">
                Unified <span className="font-display italic font-normal text-brand">Enterprise</span> Intelligence.
              </h3>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We help growing businesses implement Oracle NetSuite, a leading cloud ERP platform designed for scalability, financial control, and real-time visibility.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
                If you're dealing with multiple systems, reporting delays, or lack of control—we bring everything into one intelligent system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Our NetSuite Services</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Comprehensive <span className="font-display italic font-normal text-brand">Implementations.</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries & Why Choose Us Split */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative rounded-[3rem] mx-4 sm:mx-8 shadow-2xl">
        <div className="absolute inset-0 bg-sky-900/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Industries We Serve</h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-white font-jakarta">
                Digital <span className="font-display italic font-normal text-brand">Growth</span> Verticals.
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    <span className="font-bold text-slate-200">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Why Choose Us?</h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight leading-tight text-white font-jakarta">High-Stakes <span className="font-display italic font-normal text-brand">Strategic</span> Partners.</h3>
              <ul className="space-y-5">
                {[
                  "CFO-Focused Implementation Approach",
                  "Deep Expertise in Financial Modules",
                  "Scalable Architecture Design",
                  "Risk-Minimized Deployment Strategy",
                  "Transparent Timeline & Cost Control",
                  "Dedicated NetSuite Experts"
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                    <div className="bg-sky-500/20 p-2 rounded-full shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-slate-200 font-bold">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Our Implementation Methodology</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Strategic <span className="font-display italic font-normal text-brand">Deployment.</span>
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-500/20 transition-all duration-300 group"
            >
              <div className="text-6xl font-black text-slate-100 group-hover:text-sky-500/10 transition-colors mb-4">{step.num}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                 <div className="w-8 h-px bg-brand"></div> Key Business Outcomes
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-8 font-jakarta">
                Measuring <span className="font-display italic font-normal text-brand">Success.</span>
              </h3>
              <div className="space-y-4">
                {outcomes.map((result, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                      {result.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-700">{result.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                 <div className="w-8 h-px bg-brand"></div> Client Success Snapshot
              </h2>
              <div className="space-y-6">
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group"
                >
                  <div className="text-6xl text-slate-200 font-serif absolute -top-4 -left-2 group-hover:text-sky-500/20 transition-colors">"</div>
                  <p className="text-xl text-slate-700 font-medium relative z-10 italic mb-6 leading-relaxed">
                    “We reduced our financial closing cycle by 50% after NetSuite implementation.”
                  </p>
                  <footer className="font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-1 bg-sky-600 rounded-full"></div>
                    SaaS Company
                  </footer>
                </motion.blockquote>
                
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative shadow-slate-900/20"
                >
                  <div className="text-6xl text-white/20 font-serif absolute -top-4 -left-2">"</div>
                  <p className="text-xl font-medium relative z-10 italic mb-6 leading-relaxed">
                    “Complete control over multi-entity operations and reporting.”
                  </p>
                  <footer className="font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-1 bg-sky-500 rounded-full"></div>
                    Distribution Business
                  </footer>
                </motion.blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Support & Guidance</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-jakarta text-center">Expert <span className="font-display italic font-normal text-brand">Insights.</span></h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-slate-300 transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg text-slate-900"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-sky-500/10 text-sky-600' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 px-8 pb-6' : 'max-h-0 opacity-0 px-8'}`}
                >
                  <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand/20 opacity-50 blur-3xl rounded-[100%] scale-150 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight font-jakarta text-center">
              Scalable <span className="font-display italic font-normal text-brand">Enterprise</span> Growth.
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
              Let’s implement NetSuite the right way—strategically, securely, and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 group active:scale-95">
                Book Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 text-slate-400 font-medium italic">
              Spreadsheets can’t scale. Disconnected systems slow you down. <br className="hidden sm:block" />
              <span className="text-white font-bold not-italic">NetSuite gives you control—We make it work for you.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
