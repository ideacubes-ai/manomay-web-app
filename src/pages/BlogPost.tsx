import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, User, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">It seems this insight doesn't exist or has been moved.</p>
        <Link to="/blog" className="px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      `https://manomayglobalsolutions.com${post.imageUrl}`
    ],
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "author": [{
      "@type": "Person",
      "name": post.author
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Manomay Global Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://manomayglobalsolutions.com/Manomay_Logo_Favicon.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <main className="w-full relative bg-white pb-24">
      <SEO 
        title={`${post.title} | Manomay Insights`}
        description={post.excerpt}
        type="article"
        image={`https://manomayglobalsolutions.com${post.imageUrl}`}
        schema={articleSchema}
      />

      {/* Hero Header */}
      <section className="relative pt-48 pb-20 overflow-hidden bg-[#4C0099] text-white min-h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4C0099] via-[#4C0099]/80 to-[#4C0099]"></div>
        </div>
        
        <div className="max-w-[1000px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group font-medium">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-brand uppercase tracking-widest mb-6">
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-sans font-bold mb-8 leading-[1.15] tracking-tight drop-shadow-lg text-white">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 font-medium">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-300" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-300" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-10 z-20">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 lg:p-16 border border-slate-100"
          >
            <div className="markdown-body">
              <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </div>
          </motion.article>

          {/* Share / Author Bio */}
          <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
               <User className="w-8 h-8 text-slate-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Written by {post.author}</h4>
              <p className="text-slate-600 mb-4">Implementation specialists and enterprise architects dedicated to guiding startups and enterprises through complex digital transformation journeys.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 max-w-[1200px] mx-auto px-6">
        <div className="bg-slate-900 rounded-[2rem] p-12 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[100px] opacity-70 mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl lg:text-4xl font-sans font-bold text-white mb-6 leading-tight">
              Ready to unify your operations?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Discuss your specific architecture needs with our experts. Get a custom ERP strategy tailored for your startup's growth trajectory.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand hover:text-white transition-all duration-300 shadow-xl">
              Book a Strategy Session
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
