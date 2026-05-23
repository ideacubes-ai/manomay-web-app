import { motion } from "motion/react";
import { Wallet, Truck, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Agile Implementation",
    hook: "40% faster time-to-value.",
    description: "End-to-end Odoo & NetSuite implementation for Retail, Manufacturing, and E-commerce. We optimize operations from day one.",
    icon: Zap,
    metric: "Rapid Deployment",
  },
  {
    title: "Financial Orchestration",
    hook: "Real-time P&L and multi-currency clarity.",
    description: "Automated Compliance: Multi-currency, GAAP, and IFRS ready. Specialized in complex accounting workflows.",
    icon: Wallet,
    metric: "99.9% Accuracy",
  },
  {
    title: "Supply Chain Velocity",
    hook: "Automated Inventory & Logistics.",
    description: "End-to-end visibility for manufacturing and retail. Real-time tracking from procurement to delivery.",
    icon: Truck,
    metric: "30% Faster",
  },
  {
    title: "Custom Development",
    hook: "Scalable Architecture.",
    description: "Bespoke Odoo & NetSuite modules tailored to your unique business logic and high-performance requirements.",
    icon: Shield,
    metric: "Enterprise Grade",
  },
  {
    title: "Global Support",
    hook: "24/7 Hypercare.",
    description: "Continuous support and optimization to ensure zero-downtime during critical business cycles.",
    icon: Users,
    metric: "Zero Downtime",
  },
];

export default function EfficiencyGrid() {
  return (
    <section id="solutions" className="py-32 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Strategic Pillars</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 font-jakarta">
            Enterprise Solutions for <br className="hidden sm:block" />
            <span className="font-display italic font-normal text-brand text-3xl lg:text-5xl">Global Operations.</span>
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            We architect high-performance Odoo & Oracle NetSuite ecosystems that replace fragmented software with unified enterprise intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/50">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 group hover:bg-slate-50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand group-hover:h-full transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-brand transition-colors">
                  {item.metric}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <div className="text-brand font-semibold text-xs mb-6 uppercase tracking-widest">
                {item.hook}
              </div>
              <p className="text-slate-500 text-[17px] leading-[21.75px] mb-8">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:gap-4 transition-all cursor-pointer">
                Learn More
                <ArrowRight className="w-5 h-5 text-brand" />
              </div>
            </motion.div>
          ))}
          
          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group"
          >
            <Link
              to="/contact"
              className="bg-brand p-10 flex flex-col justify-between h-full text-white group cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
              <div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">Ready for a <br />Free Consultation?</h3>
                <p className="text-white/80 text-[17px] leading-[21.75px] relative z-10">
                  Let our experts analyze your current ERP landscape and design a high-performance roadmap for Odoo & NetSuite.
                </p>
              </div>
              <div className="flex items-center gap-3 font-bold relative z-10 group-hover:gap-5 transition-all">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
