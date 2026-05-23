import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  id: string;
  tag: string;
  title: string;
  highlightPrefix?: string;
  highlight: string;
  description: string;
  cta1: string;
  cta1Link: string;
  cta2: string;
  cta2Link: string;
  image: string;
  imageAlt: string;
  overlayTitle: string;
  overlayDesc: string;
  floatingTopLabel: string;
  floatingTopValue: string;
  floatingBottomLabel: string;
  floatingBottomValue: string;
  themeBg: string; // Sophisticated background theme
}

const slides: Slide[] = [
  {
    id: "main",
    tag: "Top-Notch Odoo & NetSuite Implementation Experts",
    title: "Embrace the future",
    highlight: "of business transformation",
    description: "Our expert ERP implementations empower your organization to achieve new heights of efficiency and success. Manomay Global Solutions is the trusted partner for small and mid-sized companies across retail, manufacturing, IT, and e-commerce sectors.",
    cta1: "Book Free Consultation",
    cta1Link: "/contact",
    cta2: "",
    cta2Link: "",
    image: "/hero-implementation.jpeg",
    imageAlt: "Odoo and NetSuite Implementation Partner Workspace",
    overlayTitle: "Official Partner",
    overlayDesc: "Odoo & Oracle NetSuite Certified Experts",
    floatingTopLabel: "Worry Free Implementations",
    floatingTopValue: "100% Dedicated Implementations",
    floatingBottomLabel: "Certified Experts",
    floatingBottomValue: "Odoo & NetSuite",
    themeBg: "bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"
  },
  {
    id: "odoo",
    tag: "Dedicated Odoo Implementation Partner",
    title: "Unify your business",
    highlight: "with powerful Odoo solutions",
    description: "Streamline your entire business with Odoo's fully integrated, highly customizable suite of applications. We deliver scalable architectures designed to adapt effortlessly as your company grows.",
    cta1: "Book Free Consultation",
    cta1Link: "/contact",
    cta2: "",
    cta2Link: "",
    image: "/Happ_CFO_With_Odoo.jpeg",
    imageAlt: "Successful CFO using Odoo ERP solution",
    overlayTitle: "Odoo Excellence",
    overlayDesc: "End-to-end solutions for modern enterprises.",
    floatingTopLabel: "System Integration",
    floatingTopValue: "Seamless Workflows",
    floatingBottomLabel: "Odoo Experts",
    floatingBottomValue: "Custom Development",
    themeBg: "bg-gradient-to-br from-brand/5 via-white to-brand/10"
  },
  {
    id: "netsuite",
    tag: "Dedicated NetSuite Implementation",
    title: "Scale your enterprise",
    highlight: "with expert NetSuite solutions",
    description: "Unlock visibility and control. Our NetSuite implementations provide world-class financial management, CRM, and ecommerce capabilities for ambitious mid-market to enterprise organizations.",
    cta1: "Book Free Consultation",
    cta1Link: "/contact",
    cta2: "",
    cta2Link: "",
    image: "/Happy_NetSuite_Office.jpeg",
    imageAlt: "Modern NetSuite implementation office environment",
    overlayTitle: "NetSuite Mastery",
    overlayDesc: "Unrivaled cloud business management.",
    floatingTopLabel: "Financial Clarity",
    floatingTopValue: "Real-time Insights",
    floatingBottomLabel: "NetSuite Alliance",
    floatingBottomValue: "Proven Results",
    themeBg: "bg-gradient-to-br from-sky-50 via-white to-indigo-50"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className={`relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center transition-colors duration-1000 ${slide.themeBg}`}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${slide.themeBg}`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand/5 border border-brand/10 text-brand text-sm font-bold uppercase tracking-widest mb-10">
                {slide.tag}
              </div>
              <h1 className="text-4xl lg:text-[45px] font-black text-slate-900 leading-tight lg:leading-[1] tracking-tight mb-8 font-jakarta">
                <span className="block mb-2 text-4xl lg:text-[45px]">{slide.title}</span>
                <span className="font-display italic font-normal text-brand text-3xl sm:text-4xl lg:text-[45px]">
                  {slide.highlightPrefix && <span className="mr-3">{slide.highlightPrefix}</span>}
                  {slide.highlight}
                </span>
              </h1>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl min-h-[auto] lg:min-h-[120px]">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                {slide.cta1Link.startsWith('http') ? (
                  <a 
                    href={slide.cta1Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 group active:scale-95"
                  >
                    {slide.cta1}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    to={slide.cta1Link}
                    className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 group active:scale-95"
                  >
                    {slide.cta1}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                )}
              </div>
              
              {/* Slider Controls */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevSlide} 
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-brand" : "w-2 bg-slate-200"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide} 
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Image */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-[0_20px_60px_rgba(76,29,149,0.15)] border-4 sm:border-8 border-white">
                  <img 
                    src={slide.image} 
                    alt={slide.imageAlt}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Image Overlay Content */}
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                    <div className="text-white">
                      <h3 className="font-bold text-xl sm:text-2xl mb-1">{slide.overlayTitle}</h3>
                      <p className="text-white/80 text-[10px] sm:text-sm">{slide.overlayDesc}</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stat Badge */}
                <div className="absolute -left-4 xl:-left-16 top-16 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-5 rounded-2xl flex-col gap-1 hidden xl:flex animate-bounce-slow max-w-[200px]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{slide.floatingTopLabel}</div>
                  <div className="text-xl font-bold text-brand leading-tight">{slide.floatingTopValue}</div>
                </div>

                {/* Floating Certification Badge */}
                <div className="absolute -right-4 xl:-right-8 bottom-24 bg-white/95 backdrop-blur shadow-2xl shadow-brand/10 border border-slate-100 p-4 rounded-2xl items-center gap-4 hidden lg:flex">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{slide.floatingBottomLabel}</div>
                    <div className="text-sm font-bold text-slate-900">{slide.floatingBottomValue}</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full -z-20 border-dashed" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
