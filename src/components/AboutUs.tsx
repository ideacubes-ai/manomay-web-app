import { motion } from "motion/react";
import { CheckCircle2, Users, Globe, Award, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden border border-[#4c1d95]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Our Company</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-8 font-jakarta">
              Empowering Growth Through <span className="lg:block"></span>
              <span className="font-display italic font-normal text-brand text-3xl sm:text-4xl lg:text-5xl">Digital Excellence.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Are you a new business owner or a small to mid-sized company looking to establish or enhance your business operations? 
              Manomay Global Solutions specializes in Odoo and Oracle NetSuite ERP implementations, offering customized solutions for businesses in retail, manufacturing, IT, and e-commerce.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              We optimize operations and drive productivity to help companies achieve sustainable growth. Our team of experts brings years of experience in architecting high-performance digital ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Tailored Solutions For Your Business Needs",
                "End-to-End Implementation & Strategy",
                "Seamless Data Migration & Integration",
                "Custom Module Development & Automation",
                "Industry-Specific Workflows & Best Practices",
                "Comprehensive User Training & Change Management",
                "24/7 Post-Go-Live Global Support",
                "Scalable Cloud Infrastructure & Security"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-slate-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link 
                to="/why-manomay" 
                className="group inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 translate-y-0 hover:-translate-y-1"
              >
                Know More
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-10"
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -z-10" />
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-[#703bc3] p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#703bc3] flex flex-col justify-between h-64"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2 tracking-tight leading-[1.2]">Happy<br />Customers</div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Across Countries</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#4b1c93] p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between min-h-[256px] h-auto lg:mt-12 border border-[#4b1c93]"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2 tracking-tight leading-[1.2]">Seamless<br />Integration</div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mt-1">Flawless Execution</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-brand p-8 rounded-[2.5rem] shadow-2xl shadow-brand/30 flex flex-col justify-between min-h-[256px] h-auto lg:-mt-12"
              >
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2 tracking-tight leading-[1.2]">Perfect<br />Implementation</div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mt-1">Solid Backend Team</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#703bc3] p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#703bc3] flex flex-col justify-between h-64"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2 tracking-tight leading-[1.2]">Post Implementation<br />Support</div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Client Retention</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
