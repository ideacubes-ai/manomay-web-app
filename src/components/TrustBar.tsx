import { motion } from "motion/react";
import { ShieldCheck, Globe, Clock, Trophy } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { 
      label: "Odoo & NetSuite ERP", 
      value: "Implementation Specialist",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    { 
      label: "Across Globe", 
      value: "Happy Customers",
      icon: <Globe className="w-5 h-5" />
    },
    { 
      label: "Worry Free Support", 
      value: "100% Dedicated",
      icon: <Trophy className="w-5 h-5" />
    },
    { 
      label: "Uptime guarantee", 
      value: "Zero-Downtime",
      icon: <Clock className="w-5 h-5" />
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#1a0b45] border-y border-violet-800/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="relative flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-violet-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-violet-900/40 transition-all group w-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/20 flex items-center justify-center text-violet-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white tracking-tight leading-none mb-1.5 group-hover:text-violet-300 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-200/60 group-hover:text-violet-200 transition-colors">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-violet-700/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
