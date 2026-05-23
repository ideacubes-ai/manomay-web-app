import { motion } from "motion/react";
import { 
  Award, 
  LayoutDashboard, 
  Layers, 
  DollarSign, 
  GraduationCap, 
  HeartHandshake, 
  Globe,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const features = [
  {
    title: "Certified Odoo Partner",
    description: "Manomay is a certified Odoo implementation partner — meaning our team has passed Odoo's technical and functional assessments. You are not getting someone learning on your project.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Implementation, not just installation",
    description: "Any reseller can install Odoo. Manomay implements it — meaning we understand your business first, design the configuration around your workflows, and deliver a system your team can actually use.",
    icon: <LayoutDashboard className="w-8 h-8" />
  },
  {
    title: "Industry-specific playbooks",
    description: "We have delivered Odoo across Retail, Manufacturing, IT Services, and CRM-driven businesses. We bring pre-built configurations, tested workflows, and lessons learned from real deployments — not a blank canvas.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Fixed-scope, transparent pricing",
    description: "No surprise invoices. Manomay scopes every implementation clearly upfront — with defined deliverables, timelines, and costs — so you know exactly what you are getting before you sign.",
    icon: <DollarSign className="w-8 h-8" />
  },
  {
    title: "Training as a core deliverable",
    description: "Every Manomay implementation includes structured, role-specific training for every user — not a 30-minute overview and a user manual. We measure success by adoption, not just go-live.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Dedicated post-launch support",
    description: "Manomay offers ongoing support contracts after implementation — including system updates, new module additions, and a dedicated point of contact who knows your setup.",
    icon: <HeartHandshake className="w-8 h-8" />
  },
  {
    title: "Global Market Expertise",
    description: "We understand global business practices — Sales Tax/VAT compliance, international logistics, and multi-region operations — and implement Odoo to match how your business actually runs.",
    icon: <Globe className="w-8 h-8" />
  }
];

const targetSegments = [
  {
    title: "Startups",
    desc: "Agile implementations that scale as you grow. We help you build the right foundation from day one.",
    icon: <Rocket className="w-6 h-6 text-brand" />
  },
  {
    title: "New Companies",
    desc: "Setting up your first ERP? We handle the complexity so you can focus on launching your business.",
    icon: <Target className="w-6 h-6 text-brand" />
  },
  {
    title: "SMBs",
    desc: "Small and mid-sized businesses need efficiency. We automate your manual workflows to save time and money.",
    icon: <Users className="w-6 h-6 text-brand" />
  }
];

export default function WhyManomay() {
  return (
    <div className="bg-white">
      <SEO 
        title="Why Choose Manomay | Expertise & Value" 
        description="Discover why businesses trust Manomay Global Solutions for their ERP implementation, technical expertise, and continuous value creation." 
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-brand/5"></div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand/10 border border-brand/20 text-white text-[13px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-brand/20">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
              The Manomay Difference
            </div>
            <h1 className="text-3xl lg:text-6xl font-black mb-8 leading-[1.1] font-jakarta tracking-tight">
              Why Choose <span className="font-display italic font-normal text-violet-400 text-3xl lg:text-6xl px-1">Manomay</span> as Your Odoo Partner?
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl">
              Odoo is a powerful platform, but success depends on the partner who implements it. We specialize in perfect implementation and post-implementation services for growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Dedicated to Your Scale</h2>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight font-jakarta">The Ideal Partner For</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {targetSegments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand/5 group-hover:text-brand transition-colors"
                >
                  {segment.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">{segment.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">{segment.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                className="grid lg:grid-cols-12 gap-12 py-16 items-center hover:bg-slate-50/80 transition-all duration-500 p-8 rounded-[2rem] group cursor-default"
              >
                <div className="lg:col-span-1">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-16 h-16 bg-brand text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:shadow-brand/40 transition-all duration-500"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors duration-500">
                    {feature.title}
                  </h4>
                  <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl group-hover:text-slate-900 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-8 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-6">Our Commitment</h2>
              <h3 className="text-3xl lg:text-[50px] lg:leading-[53.8px] font-black mb-8 font-jakarta tracking-tight">
                Perfect Implementation. <br />
                <span className="text-brand italic font-display font-normal lg:text-[50px]">Unmatched Service.</span>
              </h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                We don't just deliver a piece of software; we deliver a business transformation. From the first discovery meeting to years after you've gone live, Manomay is by your side.
              </p>
              <div className="space-y-6">
                {[
                  "Proactive System Monitoring",
                  "Monthly Health Checks",
                  "Continuous User Upskilling",
                  "Version Upgrade Roadmap"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center group/check">
                      <CheckCircle2 className="w-4 h-4 text-brand transform group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand/30 group-hover:scale-125 transition-all duration-1000"></div>
              <ShieldCheck className="w-16 h-16 text-brand mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
              <h4 className="text-3xl font-bold mb-6">Post-Implementation Peace of Mind</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Our support isn't a call center; it's a dedicated team of experts who understand your specific configuration and business logic.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 group"
              >
                Schedule a Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 font-jakarta">Ready for a partner who cares about your success?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 flex items-center justify-center gap-3 group"
            >
              Book Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
