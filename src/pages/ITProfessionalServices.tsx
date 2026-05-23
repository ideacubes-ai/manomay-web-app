import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Zap, 
  ShieldCheck, 
  Layers,
  FileText,
  CreditCard,
  Briefcase,
  TrendingUp,
  AlertCircle,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";

const ITProfessionalServices = () => {
  const challenges = [
    "Billable hours leaking through the cracks: When timesheets and billing run on separate systems, hours get lost, miscategorized, or forgotten.",
    "Projects running over budget silently: Without real-time budget tracking, teams don't know a project is in trouble until it's already over.",
    "Resource allocation is invisible: Managers can't easily see who is overloaded or where the next bottleneck will appear until it hits delivery.",
    "Billing is slow and error-prone: Manually compiling timesheets into invoices every month takes hours and introduces errors.",
    "Sales and delivery are disconnected: When a deal closes in CRM, the delivery team often receives a handover document instead of integrated context."
  ];

  const results = [
    {
      title: "Zero Revenue Leakage",
      desc: "Every logged hour flows automatically into billing — nothing is lost between timesheet and invoice.",
      icon: <Clock className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Real-time Profitability",
      desc: "Track budget vs. actual costs on every project as work happens — not at month end.",
      icon: <TrendingUp className="w-6 h-6 text-brand" />
    },
    {
      title: "One-click Invoicing",
      desc: "Approved timesheets convert to client invoices instantly, cutting billing cycles from days to minutes.",
      icon: <CreditCard className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Global Resource Planning",
      desc: "See team availability and workload across every engagement — balance delivery proactively.",
      icon: <Users className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "CRM-to-Project Flow",
      desc: "Win a deal and launch the project immediately with budget, scope, and team already linked.",
      icon: <Zap className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Scalable Infrastructure",
      desc: "As you add consultants and clients, your systems grow with you — with role-based access and global reporting.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    }
  ];

  const advisorAdvantage = [
    {
      title: "Billing Model Configuration",
      desc: "We configure Odoo to match your specific model — fixed price, time & material, retainer, or milestones.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Timesheet Adoption Strategy",
      desc: "We build adoption plans and approval workflows that make timesheet discipline stick for your consultants.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "CRM-to-Project Workflow",
      desc: "We design handover processes so commitments and budget are transferred automatically, not via email.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Multi-Client Reporting",
      desc: "Principals get dashboards showing profitability, utilization, and pipeline across all clients in one view.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <SEO 
        title="IT & Professional Services ERP | Manomay Global Solutions" 
        description="Optimize resource allocation, project tracking, and billing with specialized ERP solutions for IT and Professional Services." 
      />
      {/* Creative Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#240b45] text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand/40 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-brand/20 blur-[180px] rounded-full"></div>
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
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand/10 border border-brand/20 text-white text-sm font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-brand/20"
              >
                 <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                 Service Delivery Excellence
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white mb-8 tracking-tighter leading-[0.9] font-jakarta">
                Maximize Every <br/>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="font-display italic font-normal text-white inline-block text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem]"
                >
                  Billable Hour.
                </motion.span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl">
                Project management and automated billing systems that <span className="text-white font-medium">stop resource leaks</span> and maximize revenue.
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
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-brand rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[12px] border-white z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Professional Services Team" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">The Brutal Reality</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight font-jakarta">
                Work Earned vs. <span className="font-display italic font-normal text-brand">Collected.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                For most services firms, the tragedy isn't bad work—it's bad systems. Project tools don't talk to timesheets. Timesheets don't connect to billing. Revenue leaks through every gap.
              </p>
              <ul className="space-y-6">
                {challenges.map((challenge, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <XCircle className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors leading-relaxed">
                      {challenge}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full"></div>
              <h4 className="text-2xl font-bold mb-6 font-jakarta">The Solution: One Unbroken Flow</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Odoo connects the entire delivery lifecycle—from winning a deal in CRM, to launching the project, logging time, and generating the invoice in one click.
              </p>
              <div className="space-y-4">
                {[
                  "Timesheets auto-queue for billing",
                  "Approved time instantly hits budget trackers",
                  "One-click formatting & invoice sending",
                  "Consolidated utilization dashboards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-sm font-medium text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Quantifiable Impact</h2>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-jakarta">
            What Odoo <span className="font-display italic font-normal text-brand">Delivers</span>
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {result.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{result.title}</h4>
                <p className="text-slate-500 text-base leading-relaxed">{result.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor Advantage */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advisorAdvantage.map((adv, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <div className="text-brand mb-4">{adv.icon}</div>
                    <h5 className="font-bold text-slate-900 mb-2 text-base">{adv.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">The Advisor Advantage</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-8 font-jakarta">
                Why Partner <br/> with <span className="font-display italic font-normal text-brand">Manomay?</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                We don't just install software; we design adoption strategies. From complex billing model configuration to timesheet discipline plans, we ensure your Odoo setup scales with your client base.
              </p>
              <Link to="/contact" className="text-brand font-bold flex items-center gap-2 group text-lg">
                Book a Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-violet-50 text-slate-900 rounded-[3rem] mx-4 sm:mx-8 mb-12 border border-violet-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 font-jakarta max-w-3xl mx-auto leading-tight text-slate-900 text-center">
            Ready to turn your hard work <br/> into <span className="font-display italic font-normal text-brand">collected revenue?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITProfessionalServices;
