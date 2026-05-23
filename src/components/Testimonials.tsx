import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Manomay Global Solutions completely transformed our operations. Their expertise in Odoo implementation helped us reduce manual work by 60% within the first three months. The team was responsive, knowledgeable, and delivered on time.",
      author: "Sarah Jenkins",
      role: "Operations Director",
      company: "TechFlow Industries",
      rating: 5
    },
    {
      id: 2,
      quote: "The NetSuite deployment was seamless. With Manomay's strategic approach, we gained complete visibility across our multi-entity financials. They truly understand enterprise business needs.",
      author: "David Chen",
      role: "Chief Financial Officer",
      company: "Nordic Retail Group",
      rating: 5
    },
    {
      id: 3,
      quote: "We were struggling with disconnected systems before partnering with Manomay. They built a unified ecosystem that scales with our rapid growth. Highly recommend their consulting and implementation services.",
      author: "Emily Vasquez",
      role: "CEO",
      company: "Nova Health Solutions",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-[#0a051a] relative overflow-hidden" id="testimonials">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-center mb-20 text-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-black tracking-[0.4em] text-brand uppercase mb-6 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-brand"></span> Client Success
              </h2>
              <h3 className="text-2xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight font-jakarta">
                Success stories from <span className="font-display italic font-normal text-brand text-2xl sm:text-5xl lg:text-5xl">industry pioneers.</span>
              </h3>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Accent Glow */}
              <div className="absolute inset-0 bg-brand/10 rounded-[3rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-[3rem] p-10 border border-white/5 group-hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
                
                <div className="flex gap-1.5 mb-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-300 leading-tight tracking-tight font-jakarta mb-12 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center font-black text-brand text-xl border border-brand/30 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-white tracking-tight">{testimonial.author}</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
