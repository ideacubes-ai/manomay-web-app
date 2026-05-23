import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ThankYou() {
  return (
    <div className="bg-[#240b45] min-h-[85vh] flex flex-col justify-center items-center px-6 relative overflow-hidden pt-32 pb-24">
      <SEO 
        title="Thank You | Manomay Global Solutions" 
        description="Thank you for contacting Manomay Global Solutions. We will be in touch shortly." 
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand/40 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-violet-500/30 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-white text-sm font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-violet-900/50"
        >
          <Sparkles className="w-4 h-4 text-brand" /> Message Received
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter font-jakarta leading-tight"
        >
          Thank You!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-white/80 mb-12 font-light leading-relaxed max-w-lg mx-auto"
        >
          Our Support team will connect with you soon. A dedicated expert will review your requirements and reach out typically within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-2xl group active:scale-95 border border-transparent"
          >
            Back to Homepage
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
