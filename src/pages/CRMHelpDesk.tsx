import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Layers,
  LifeBuoy,
  Target,
  BarChart3,
  Mail,
  XCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";

const CRMHelpDesk = () => {
  const challenges = [
    "Sales and support work in silos: When support can't see what was promised or bought, every interaction starts from zero and the customer pays.",
    "Follow-ups fall through the cracks: Without automated reminders, leads go cold and open tickets age past deadlines.",
    "SLA breaches go unnoticed: Without live tracking, tickets exceed response deadlines before anyone knows — the customer finds out first.",
    "No single view of the customer: Call notes, emails, and tickets are scattered across systems, preventing a complete relationship picture.",
    "Performance is unmeasurable: Impossible to know where the team is strong and where it's losing customers without unified reporting."
  ];

  const results = [
    {
      title: "360° Customer Record",
      desc: "Every interaction — sales, support, email, call — in one place, visible to any team member who needs it.",
      icon: <Users className="w-6 h-6 text-brand" />
    },
    {
      title: "Automated SLA Enforcement",
      desc: "Set resolution deadlines, escalate automatically when breached, and report on compliance in real time.",
      icon: <Clock className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Self-Running Pipeline",
      desc: "Automated follow-up sequences and activity reminders ensure no opportunity is ever neglected.",
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Customer Self-Service",
      desc: "Portal allows customers to track their own tickets, reducing inbound volume and increasing transparency.",
      icon: <LifeBuoy className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Unified Reporting",
      desc: "Track CSAT, response times, and conversion rates across sales and support in one dashboard.",
      icon: <BarChart3 className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Proactive Retention",
      desc: "Segment customers to identify churn risks and trigger re-engagement sequences automatically.",
      icon: <Heart className="w-6 h-6 text-rose-500" />
    }
  ];

  const advisorAdvantage = [
    {
      title: "Journey Mapping",
      desc: "We map your actual sales stages and support categories before configuration to match your real-world flow.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "SLA Design Logic",
      desc: "We define realistic targets and escalation chains, then configure them precisely in Odoo Helpdesk.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Adoption Training",
      desc: "We run hands-on sales training with real pipeline scenarios to ensure the team actually uses the tools.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Omnichannel Setup",
      desc: "Integrated Gmail, Outlook, WhatsApp, and Live Chat so no customer interaction is ever lost.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <SEO 
        title="CRM & Helpdesk Solutions | Manomay Global Solutions" 
        description="Drive customer retention and streamline support operations with our unified CRM and Helpdesk implementations." 
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
                 Relationship Management
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white mb-8 tracking-tighter leading-[0.9] font-jakarta">
                Relationships, <br/>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="font-display italic font-normal text-white inline-block text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem]"
                >
                  Not Just Records.
                </motion.span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl">
                Personalized customer journeys and rapid ticket resolution systems that <span className="text-white font-medium">build long-term brand loyalty</span> and eliminate silos.
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
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=1200" 
                    alt="Customer Support Excellence" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">The Trust Gap</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight font-jakarta">
                Winning is Hard. <br/>
                <span className="font-display italic font-normal text-brand">Keeping is Harder.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                Your customers don't care about your internal departments. They want to be known and helped. When sales and support work in silos, the customer feels like a stranger every time they reach out.
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
              <h4 className="text-2xl font-bold mb-6 font-jakarta text-brand">The Odoo Unifier</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Odoo bridges the gap between sales and support with a shared customer record. Every agent sees purchase history, promises made, and previous issues instantly.
              </p>
              <div className="space-y-4">
                {[
                  "Visual pipeline management",
                  "Automatic ticket routing & SLAs",
                  "Escalation rules for sensitive accounts",
                  "Omnichannel communication history"
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
          <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Strategic Outcomes</h2>
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
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">The Manomay Advantage</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-8 font-jakarta">
                Engineered for <br/> <span className="font-display italic font-normal text-brand">Adoption.</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                We don't just configure software; we map the human interactions that define your brand. From SLA design to hands-on sales team training, we ensure your tools serve your strategy.
              </p>
              <Link to="/contact" className="text-brand font-bold flex items-center gap-2 group text-lg">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand/5 text-slate-900 rounded-[3rem] mx-4 sm:mx-8 mb-12 border border-brand/10 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 font-jakarta leading-tight">
            Stop losing customers to <br/> <span className="font-display italic font-normal text-brand">internal silos.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 font-light">
            Ready to deliver the seamless, personalized experience your customers expect?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 group flex items-center justify-center gap-3">
              Book Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMHelpDesk;
