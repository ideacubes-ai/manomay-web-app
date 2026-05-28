import { motion } from "motion/react";
import { MapPin, Building, Star, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function EEATSection() {
  return (
    <section className="py-24 bg-brand text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6 font-jakarta">
              Proven Experience & Expertise
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Manomay Global Solutions has spent over a decade architecting high-performance digital ecosystems. We combine deep domain knowledge in InsurTech, Retail, and Manufacturing with elite technological execution.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Official Odoo & NetSuite Partners</h4>
                  <p className="text-white/70 mt-1">Certified implementation specialists ensuring secure, scalable, and tailored ERP solutions.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Global Footprint</h4>
                  <p className="text-white/70 mt-1">Headquartered in Texas, USA, serving clients globally.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Trusted by Enterprises</h4>
                  <p className="text-white/70 mt-1">10+ years of flawless execution and long-term client retention in complex digital transformations.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md"
          >
            <h3 className="font-bold text-2xl mb-8 flex items-center gap-3">
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              Why We Stand Out
            </h3>
            
            <ul className="space-y-5">
              {[
                "10+ Years of Business & Technical Excellence",
                "Specialized Hardware Integration (IoT & POS)",
                "Elite InsurTech & Digital Transformation Strategies",
                "End-to-End Execution — From Strategy to Deployment",
                "Proven Track Record in the Caribbean & US Markets"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-lg font-medium text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
