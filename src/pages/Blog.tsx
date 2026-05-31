import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Enterprise ERP Insights & Digital Transformation Blog",
    "description": "Thought leadership, implementation case studies, and digital strategy insights from Manomay Global Solutions' expert consultants.",
    "url": "https://manomayglobalsolutions.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Manomay Global Solutions"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date, // Note: standard format should ideally be ISO8601 but keeping as is for simplicity
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://manomayglobalsolutions.com/blog/${post.id}`
    }))
  };

  return (
    <main className="w-full relative bg-white">
      <SEO 
        title="Enterprise ERP Insights & Digital Transformation Blog"
        description="Thought leadership, implementation case studies, and digital strategy insights from Manomay Global Solutions' expert consultants."
        schema={blogSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-900 text-white flex items-center justify-center min-h-[60vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Enterprise Technology" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-brand/20 mix-blend-multiply"></div>
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-white">Manomay Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-sans font-bold mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-300 to-white">ERP Insights</span> &<br /> 
              Digital Transformation.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed drop-shadow">
              Deep-dive articles, implementation case studies, and actionable architecture advice from our elite network of ERP consultants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-brand/5 hover:border-brand/30 transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="overflow-hidden relative h-64">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand uppercase tracking-wider">
                    {post.category}
                  </div>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-900">{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="flex items-center justify-center w-10 h-10 rounded-full bg-brand group-hover:bg-brand/90 text-white shadow-md shadow-brand/20 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Empty State / Coming Soon */}
          <div className="mt-16 p-12 rounded-3xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center relative overflow-hidden">
             <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">More Insights Coming Soon</h3>
             <p className="text-slate-600 max-w-lg mb-8">Subscribe to our enterprise newsletter to get notified when new case studies and teardowns drop.</p>
             
             <div className="flex w-full max-w-md gap-2">
                <input type="email" placeholder="Enter your work email" className="flex-1 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" />
                <button className="px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20">Subscribe</button>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[100px] opacity-50 mix-blend-screen"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                  Ready to optimize your<br />enterprise ecosystem?
                </h2>
                <p className="text-xl text-white/70 max-w-lg">
                  Let’s talk architecture. Schedule a free deep-dive session with our implementation specialists.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-start lg:justify-end">
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-full text-lg font-bold hover:bg-brand hover:text-white transition-all duration-300 shadow-2xl hover:scale-105">
                  Book Consultation Review
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
