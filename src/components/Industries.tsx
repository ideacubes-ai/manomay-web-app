import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShoppingBag, Factory, Laptop, Users, Store } from "lucide-react";

const industries = [
  {
    name: "Retail & E-commerce",
    description: "Omnichannel solutions integrating POS, inventory, and online sales for seamless customer experiences.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    link: "/industries/retail-ecommerce"
  },
  {
    name: "Odoo POS Solutions",
    description: "Unified retail & restaurant management across channels with real-time inventory and customer analytics.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "/solutions/odoo-pos"
  },
  {
    name: "Manufacturing",
    description: "Advanced Material Requirements Planning, PLM, and quality control systems to optimize production floor efficiency and supply chain.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    link: "/industries/manufacturing"
  },
  {
    name: "IT & Professional Services",
    description: "Project management, timesheets, and automated billing to maximize billable hours and resource allocation.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    link: "/industries/it-professional-services"
  },
  {
    name: "CRM & HelpDesk",
    description: "Personalized customer journeys and rapid ticket resolution systems to build long-term brand loyalty.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    link: "/industries/crm-helpdesk"
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Specialization</span>
            <div className="h-px w-12 bg-brand" />
          </div>
          <h2 className="text-2xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 font-jakarta">
            Industries We <span className="font-display italic font-normal text-brand text-2xl sm:text-5xl lg:text-5xl">Transform.</span>
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            Deep domain expertise across sectors where operational complexity meets high-growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, i) => {
            const isLastOdd = i === industries.length - 1 && industries.length % 2 !== 0;
            return (
            <Link 
              key={i} 
              to={industry.link}
              className={isLastOdd ? "md:col-span-2 mx-auto w-full md:w-[calc(50%-16px)] block" : "block"}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="w-12 h-12 bg-brand/20 backdrop-blur-md rounded-xl flex items-center justify-center text-brand mb-6 border border-brand/30">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="text-white/90 text-[19px] leading-[25px] max-w-md">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
