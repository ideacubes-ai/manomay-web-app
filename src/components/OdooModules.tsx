import { motion } from "motion/react";
import { 
  Users, ShoppingCart, Package, Factory, Calculator, 
  Globe, Layout, Smartphone, BarChart3, Settings,
  Clock, Briefcase, HeartHandshake, ShieldCheck, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const moduleCategories = [
  {
    category: "Sales & CRM",
    icon: Users,
    desc: "Empower your sales team to track leads, close deals faster, and nurture customer relationships."
  },
  {
    category: "Finance",
    icon: Calculator,
    desc: "Achieve financial transparency with automated accounting, invoicing, and real-time reporting."
  },
  {
    category: "Operations",
    icon: Package,
    desc: "Optimize your supply chain with double-entry inventory, smart purchasing, and Material Requirements Planning."
  },
  {
    category: "Manufacturing",
    icon: Factory,
    desc: "From BoMs to work orders, manage every aspect of your production floor with ease."
  },
  {
    category: "HR & People",
    icon: HeartHandshake,
    desc: "Manage your most valuable assets with centralized profiles, payroll, and recruitment."
  },
  {
    category: "Marketing",
    icon: BarChart3,
    desc: "Grow your audience through automated campaigns, social media, and targeted outreach."
  },
  {
    category: "Website",
    icon: Globe,
    desc: "Create professional websites and integrated eCommerce stores with no code required."
  },
  {
    category: "Services",
    icon: Briefcase,
    desc: "Deliver projects on time with agile task management, timesheets, and field services."
  }
];

export default function OdooModules() {
  return (
    <section id="modules" className="py-24 bg-[#030712] text-white overflow-hidden relative">
      {/* High-Energy Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Active Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", 
            backgroundSize: "60px 60px" 
          }}>
        </div>
        
        {/* Interactive Mesh Vibe */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[70%] h-[80%] bg-brand/30 rounded-full blur-[140px]"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[15%] -right-[5%] w-[60%] h-[70%] bg-brand/10 rounded-full blur-[120px]"
        ></motion.div>

        {/* Central Energy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.05)_0%,transparent_70%)]"></div>
        
        {/* Floating Digital Fragments */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-32 h-32 bg-brand/5 rounded-3xl border border-white/5 rotate-12 hidden xl:block backdrop-blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-violet-400">A Unified Platform</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 font-jakarta text-white">
              Every Module is <br className="hidden sm:block" />
              <span className="text-violet-400 italic font-display font-normal">Deeply Integrated.</span>
            </h2>
            <p className="text-slate-400 text-[19px] leading-[28.25px]">
              Odoo's modular approach allows you to start with what you need and scale as you grow, with every app communicating perfectly with the rest.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <div className="text-6xl font-bold text-[#664d98] mb-2">50+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connected Apps</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moduleCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-brand/10 hover:border-brand/30 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <cat.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand transition-colors">{cat.category}</h3>
                <p className="text-slate-400 text-[18px] leading-[21.75px] group-hover:text-slate-300 transition-colors">
                  {cat.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4 text-white/5 group-hover:text-brand/10 transition-colors">
                <cat.icon className="w-12 h-12" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Link 
              to="/odoo-modules" 
              className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 translate-y-0 hover:-translate-y-1"
            >
              Explore Odoo Modules
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
          <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder for partner logos */}
            <span className="text-2xl font-bold">RETAIL</span>
            <span className="text-2xl font-bold">MANUFACTURING</span>
            <span className="text-2xl font-bold">LOGISTICS</span>
            <span className="text-2xl font-bold">FINANCE</span>
            <span className="text-2xl font-bold">HEALTHCARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
