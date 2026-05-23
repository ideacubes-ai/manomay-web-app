import React from "react";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  AlertTriangle, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  Package,
  Zap,
  BarChart3,
  Users,
  TrendingUp,
  Globe,
  Database,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  HeartHandshake,
  Layers,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function RetailEcommerce() {
  const challenges = [
    {
      title: "Inventory chaos across channels",
      description: "Stock numbers differ between store, website, and warehouse. No single source of truth leading to overselling and stockouts."
    },
    {
      title: "Slow, manual order processing",
      description: "Orders placed online require manual steps to fulfill and invoice — creating delays, errors, and a team buried in admin."
    },
    {
      title: "Zero visibility into profitability",
      description: "Without consolidated reporting, you can't see which products, locations, or channels are actually making money."
    },
    {
      title: "Disconnected customer data",
      description: "Purchase history and loyalty points sit in separate tools, making it impossible to personalize the customer experience."
    },
    {
      title: "Scaling breaks operations",
      description: "Adding new products or locations multiplies complexity, requiring more headcount just to manage the disconnect."
    }
  ];

  const solutions = [
    {
      title: "Unified Inventory",
      description: "One stock count updated in real time across every channel. No more emergency reorders or customer disappointment.",
      icon: <Package className="w-8 h-8 text-brand" />
    },
    {
      title: "Automated Order-to-Cash",
      description: "From order to delivery to invoice, the entire flow is autonomous, cutting fulfilment time and billing errors.",
      icon: <Zap className="w-8 h-8 text-brand" />
    },
    {
      title: "Built-in CRM & Loyalty",
      description: "Customer history and rewards are native to the system—no integrations needed to reward your best buyers.",
      icon: <HeartHandshake className="w-8 h-8 text-brand" />
    },
    {
      title: "Live Profitability Reports",
      description: "Know exactly which products make money in real time, no waiting for monthly manual spreadsheet updates.",
      icon: <BarChart3 className="w-8 h-8 text-brand" />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <SEO 
        title="Retail & eCommerce ERP Solutions | Manomay Global Solutions" 
        description="Empower your omnichannel retail and eCommerce business with unified ERP solutions that integrate POS, inventory, shipping, and financials." 
      />
      {/* Creative Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#240b45] text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand/40 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-violet-500/30 blur-[180px] rounded-full"></div>
          <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-white text-[13px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-violet-900/50"
              >
                 <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                 Retail Future Ready
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white mb-8 tracking-tighter leading-[0.9] font-jakarta">
                Retail & <br />
                E-commerce <br />
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="font-display italic font-normal text-white inline-block text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem]"
                >
                  Optimization.
                </motion.span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl">
                We design <span className="text-white font-medium">high-velocity omnichannel ecosystems</span> that turn inventory into profit across every touchpoint.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/40 flex items-center justify-center gap-3 group active:scale-95">
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-brand rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[12px] border-white z-10">
                    <img 
                      src="/Retail_ERP_Support.jpeg" 
                      alt="Retail Transformation" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-1.5 bg-gradient-to-r from-brand to-violet-500 rounded-full"></div> The Reality Check
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight font-jakarta">
              Spreadsheets are <br className="hidden md:block"/> <span className="font-display italic font-normal text-brand">Silent Profit Killers.</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              If your inventory lives in a spreadsheet, your POS is one system, and your online store is another — you are losing money every single day without knowing it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Retailers today don't just compete on price. They compete on speed, accuracy, and experience. A customer who finds a product out of stock online, or receives the wrong item, or waits three days for an invoice — leaves and doesn't come back. 
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-xl text-slate-900 font-bold italic leading-relaxed">
                  "The businesses winning in retail right now are the ones where every system talks to every other system in real time."
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.slice(0, 4).map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand/30 transition-all group">
                  <div className="text-brand font-black text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Issue 0{i+1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">{c.title}</h4>
                  <p className="text-base text-slate-500 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Odoo Solves This */}
      <section className="py-24 bg-violet-50 text-slate-900 overflow-hidden relative rounded-[4rem] mx-4 sm:mx-8 border border-violet-100 shadow-xl shadow-violet-200/40">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-bold tracking-widest text-violet-600 uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-violet-600"></div> Unified Commerce
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-slate-900 font-jakarta">
                How Odoo <span className="font-display italic font-normal text-brand">Solves Complexity.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Odoo connects your physical store, online shop, warehouse, and accounts into one real-time platform. No more manual syncs, no more guessing game.
              </p>
              
              <div className="space-y-4">
                {[
                  "A sale in-store instantly adjusts online inventory.",
                  "Low stock triggers automatic purchase orders.",
                  "Shipped orders auto-generate invoices and update books.",
                  "Real-time visibility across physical & digital stores."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-violet-100 shadow-sm transition-transform hover:translate-x-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span className="font-bold text-slate-700 text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-violet-100 shadow-sm group hover:shadow-xl hover:shadow-violet-200/20 hover:border-violet-300 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:scale-110 transition-all shadow-sm">
                    {React.cloneElement(s.icon as React.ReactElement, { className: "w-6 h-6 text-violet-600 group-hover:text-white transition-colors" })}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 transition-colors">{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed transition-colors">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Manomay Advantage */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 font-jakarta">Why Manomay?</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Strategic <span className="font-display italic font-normal text-brand">Retail Partners.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Retail-Specific Implementation",
              desc: "We don't do generic ERP rollouts. We map your specific product catalogue, pricing rules, and fulfilment workflow before touching any configuration.",
              icon: <Layers className="w-6 h-6 text-brand" />
            },
            {
              title: "POS & e-Commerce Mastery",
              desc: "Manomay handles the full technical integration between your physical store, Odoo POS, and online storefront — including payment gateways and shipping carriers.",
              icon: <Smartphone className="w-6 h-6 text-brand" />
            },
            {
              title: "Staff Training Built-In",
              desc: "Your cashiers, warehouse team, and managers all receive role-specific training so the system gets used properly from day one.",
              icon: <Users className="w-6 h-6 text-brand" />
            },
            {
              title: "Ongoing Support, Not Just Launch",
              desc: "Most implementation partners disappear after go-live. Manomay stays — with dedicated support to handle updates, new features, and growing pains.",
              icon: <LifeBuoy className="w-6 h-6 text-brand" />
            },
            {
              title: "Global Market Expertise",
              desc: "We understand global business practices — Sales Tax/VAT compliance, international logistics, and multi-region operations — and implement Odoo to match how your business actually runs.",
              icon: <Globe className="w-6 h-6 text-brand" />
            }
          ].map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:border-brand/20 transition-all group"
            >
              <div className="w-12 h-12 bg-brand/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{adv.title}</h4>
              <p className="text-slate-600 font-bold text-base leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
          
          <div className="bg-violet-600 p-8 rounded-3xl flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div>
              <h4 className="text-2xl mb-4 tracking-tighter font-jakarta">
                <span className="font-bold">Ready to</span> <span className="font-display italic font-normal">Scale?</span>
              </h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Stop managing complexity and start managing growth. Get your high-performance retail roadmap today.
              </p>
            </div>
            <Link to="/contact" className="mt-8 flex items-center justify-between font-black text-xl hover:translate-x-2 transition-transform">
              Start Now <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12 bg-slate-50 rounded-[4rem] mb-24 mx-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight font-jakarta">
            Ditch the <span className="font-display italic font-normal text-brand">Manual Chaos.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            Your retail business deserves a system that works for you, not against you. Let's build a smarter omnichannel foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-brand/40 active:scale-95">
              Book Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const LifeBuoy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m4.93 4.93 4.24 4.24" />
    <path d="m14.83 14.83 4.24 4.24" />
    <path d="m14.83 9.17 4.24-4.24" />
    <path d="m4.93 19.07 4.24-4.24" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
