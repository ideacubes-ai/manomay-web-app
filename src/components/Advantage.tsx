import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Advantage() {
  const points = [
    "Customized Technology Solutions for Enterprise Scale",
    "Client-Focused Approach with Tangible Business Results",
    "Expertise in Innovation & Digital Transformation",
    "Continuous Support and Performance Optimization",
    "Global Business Growth & Scalability",
    "Seamless Integration of Complex Workflows"
  ];

  return (
    <section id="advantage" className="py-24 bg-brand text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight font-jakarta">
              The Manomay <span className="font-display italic font-normal text-white text-3xl lg:text-5xl">Advantage.</span>
            </h2>
            <p className="text-white/70 text-[19px] leading-[27px] mb-12">
              Why leading enterprises migrate to our solutions from legacy ERPs. We don't just implement software; we architect business outcomes.
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-white">{point}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to="/contact" className="mt-12 inline-flex items-center justify-center bg-white text-brand px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-2xl shadow-black/10 active:scale-95 group">
              Explore Our Methodology
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white/20 to-transparent rounded-full absolute -top-20 -right-20 w-[120%] blur-3xl opacity-50" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-sm font-mono text-white/80 mb-4 tracking-widest uppercase">Client Success Story</div>
              <div className="text-3xl font-bold mb-6">"Our entire operation became transparent, streamlined, and ready to scale globally."</div>
              <div className="h-px bg-white/20 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Enhanced</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest">Data Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Maximized</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest">Operational Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
