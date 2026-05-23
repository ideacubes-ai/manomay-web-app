import React from "react";
import { motion } from "motion/react";
import { 
  Factory, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Settings,
  Zap,
  BarChart3,
  Users,
  ShieldCheck,
  ChevronRight,
  ClipboardCheck,
  Activity,
  History,
  Cpu,
  Boxes
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Manufacturing() {
  const challenges = [
    {
      title: "Production planning on guesswork",
      description: "Without automated Material Requirements Planning, planners rely on spreadsheets and experience—leading to material shortages and idle time."
    },
    {
      title: "No real-time shop floor visibility",
      description: "Managers don't know what's happening until the end of the day—by which time problems have already compounded."
    },
    {
      title: "Quality defects found too late",
      description: "Without built-in checkpoints, defects travel through production and reach customers, multiplying failure costs."
    },
    {
      title: "True production cost is unknown",
      description: "Planned vs. actual costs rarely match, and the gap is only discovered after the fact without live tracking."
    },
    {
      title: "Complex BoMs managed manually",
      description: "Multi-level Bills of Materials with variants and routing changes are nearly impossible to manage accurately in Excel."
    }
  ];

  const solutions = [
    {
      title: "Automated Material Requirements Planning",
      description: "Automatically generate production and purchase orders based on real demand, ensuring materials arrive just in time.",
      icon: <Cpu className="w-8 h-8 text-brand" />
    },
    {
      title: "Live Shop Floor Tracking",
      description: "Operators log work directly on tablets or scanners, giving managers instant visibility into every production step.",
      icon: <Activity className="w-8 h-8 text-brand" />
    },
    {
      title: "Built-in Quality Control",
      description: "Define inspection points at any stage with automatic flags and non-conformance reports when standards aren't met.",
      icon: <ClipboardCheck className="w-8 h-8 text-brand" />
    },
    {
      title: "Full Traceability",
      description: "Follow every component from supplier to finished product—including lots, serial numbers, and expiry dates.",
      icon: <History className="w-8 h-8 text-brand" />
    }
  ];

  const advantages = [
    {
      title: "Process Mapping First",
      desc: "We document your BoMs, routing, and work centres so Odoo mirrors your real factory floor, not a generic template.",
      icon: <Settings className="w-6 h-6 text-brand" />
    },
    {
      title: "Material Requirements Planning Fine-Tuning",
      desc: "We configure reorder rules and lead times specific to your supplier base and production cycles, not out-of-the-box defaults.",
      icon: <Zap className="w-6 h-6 text-brand" />
    },
    {
      title: "Shop Floor Change Management",
      desc: "We train operators, supervisors, and planners separately to ensure software adoption at every factory level.",
      icon: <Users className="w-6 h-6 text-brand" />
    },
    {
      title: "Standards-Based Quality",
      desc: "Whether ISO or internal QC, we configure quality plans that match your actual compliance and reporting needs.",
      icon: <ShieldCheck className="w-6 h-6 text-brand" />
    },
    {
      title: "Post-Go-Live Support",
      desc: "Manomay remains actively involved for the first 90 days to optimize configurations based on real production data.",
      icon: <Boxes className="w-6 h-6 text-brand" />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <SEO 
        title="Manufacturing ERP Solutions | Manomay Global Solutions" 
        description="Streamline production, manage supply chains, and gain real-time visibility with our customized manufacturing ERP implementations." 
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
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-white text-sm font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-violet-900/50"
              >
                 <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                 Production Floor Excellence
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white mb-8 tracking-tighter leading-[0.9] font-jakarta">
                Manufacturing <br />
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
                Advanced Material Requirements Planning and quality control systems that <span className="text-white font-medium">eliminate shop floor chaos</span> and maximize production efficiency.
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
                  <div className="absolute inset-0 bg-indigo-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[12px] border-white z-10">
                    <img 
                      src="/Manufacturing_ERP_Support.jpeg" 
                      alt="Manufacturing ERP Support" 
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
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-1.5 bg-gradient-to-r from-brand to-indigo-500 rounded-full"></div> Operational Reality
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight font-jakarta">
              Unforgiving margins <br className="hidden md:block"/> <span className="font-display italic font-normal text-brand">No room for error.</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Every hour your production line sits idle costs money. Every defect caught too late costs customers. Every missed delivery costs a relationship.
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
                Most manufacturers accept these losses because they don't have a system that prevents them. Yet running on legacy ERPs and paper-based shop floors was never built for real-time visibility. A single delayed raw material can shut down your entire production.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-xl text-slate-900 font-bold italic leading-relaxed">
                   "Legacy systems were built for accounting, not for the factory floor. The modern manufacturer needs live execution data."
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand/30 transition-all group">
                  <div className="text-brand font-black text-base mb-2 uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Challenge 0{i+1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{c.title}</h4>
                  <p className="text-base text-slate-500 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Odoo Solves This */}
      <section className="py-24 bg-indigo-50 text-slate-900 overflow-hidden relative rounded-[4rem] mx-4 sm:mx-8 border border-indigo-100 shadow-xl shadow-indigo-200/40">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-indigo-600"></div> Unified Manufacturing
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-slate-900 font-jakarta">
                How Odoo <span className="font-display italic font-normal text-brand">Connects Operations.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Connect planning, production, procurement, quality, and costing in one system. The Material Requirements Planning engine handles the math so your team can focus on production.
              </p>
              
              <div className="space-y-4">
                {[
                  "Material Requirements Planning generates production orders from sales forecasts.",
                  "Operators log work orders directly on shop floor tablets.",
                  "Quality checkpoints defined at any production stage.",
                  "Actual material & labor tracked against planned costs."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm transition-transform hover:translate-x-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="font-semibold text-slate-700">{text}</span>
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
                  className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-sm group hover:shadow-xl hover:shadow-indigo-200/20 hover:border-indigo-300 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:scale-110 transition-all shadow-sm">
                    {React.cloneElement(s.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 transition-colors">{s.title}</h4>
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
          <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 font-jakarta">Why Manomay?</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Technical <span className="font-display italic font-normal text-brand">Factory Partners.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
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
              <h4 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h4>
              <p className="text-slate-500 font-medium text-base leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
          
          <div className="bg-indigo-600 p-8 rounded-3xl flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div>
              <h4 className="text-2xl mb-4 tracking-tighter font-jakarta">
                <span className="font-bold">Ready to</span> <span className="font-display italic font-normal">Optimize?</span>
              </h4>
              <p className="text-white/80 text-base font-medium leading-relaxed">
                Connect your floor to your office. Get your production floor roadmap and eliminate the guesswork.
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
            Stop the <span className="font-display italic font-normal text-brand">Production Guesswork.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            Your factory deserves a system that tracks reality in real time. Let's build your unified manufacturing backbone.
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
