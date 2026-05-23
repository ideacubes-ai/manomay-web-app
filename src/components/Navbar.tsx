import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronRight, ChevronDown,
  Layers, Store, Settings, Calculator,
  ShoppingBag, Factory, Briefcase, LifeBuoy,
  Sparkles, Layout
} from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedMobile(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about", isAnchor: true },
    { 
      name: "Solutions", 
      path: "/#solutions", 
      isAnchor: true,
      subLinks: [
        { 
          name: "Odoo Implementations", 
          path: "/odoo-implementations",
          icon: <Layers className="w-5 h-5" />,
          description: "Full-scale ERP deployment for scaling enterprises."
        },
        { 
          name: "NetSuite Implementations", 
          path: "/netsuite-implementations",
          icon: <Settings className="w-5 h-5" />,
          description: "Premium Oracle NetSuite integrations for complex ops."
        },
        { 
          name: "Odoo Pricing", 
          path: "https://www.odoo.com/pricing", 
          isExternal: true,
          icon: <Calculator className="w-5 h-5" />,
          description: "Transparent cost analysis for your architecture."
        }
      ]
    },
    { 
      name: "Industries", 
      path: "/#industries", 
      isAnchor: true,
      subLinks: [
        { 
          name: "Retail & E-commerce", 
          path: "/industries/retail-ecommerce",
          icon: <ShoppingBag className="w-5 h-5" />,
          description: "Omnichannel growth for high-volume storefronts."
        },
        { 
          name: "Odoo POS Solutions", 
          path: "/solutions/odoo-pos",
          icon: <Store className="w-5 h-5" />,
          description: "Unified retail & restaurant management across channels."
        },
        { 
          name: "Manufacturing", 
          path: "/industries/manufacturing",
          icon: <Factory className="w-5 h-5" />,
          description: "Lean production systems & floor intelligence."
        },
        { 
          name: "IT & Professional Services", 
          path: "/industries/it-professional-services",
          icon: <Briefcase className="w-5 h-5" />,
          description: "Streamlined resources & project profitability."
        },
        { 
          name: "CRM & HelpDesk", 
          path: "/industries/crm-helpdesk",
          icon: <LifeBuoy className="w-5 h-5" />,
          description: "Enterprise-grade relationship & support ecosystems."
        }
      ]
    },
    { 
      name: "Modules", 
      path: "/#modules", 
      isAnchor: true,
      subLinks: [
        { 
          name: "Odoo Modules Explorer", 
          path: "/odoo-modules",
          icon: <Layout className="w-5 h-5" />,
          description: "Complete list of Odoo modules deeply explained."
        }
      ]
    },
  ];

  const isActive = (path: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const hash = path.substring(path.indexOf('#'));
      return location.hash === hash;
    }
    return location.pathname === path && location.hash === '';
  };

  const toggleMobileExpanded = (name: string) => {
    setExpandedMobile(expandedMobile === name ? null : name);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200"}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative py-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.isAnchor ? (
                  <a 
                    href={link.path} 
                    className={`text-base font-bold transition-colors flex items-center gap-1.5 group/link ${isActive(link.path, link.isAnchor) ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
                  >
                    {link.name}
                    {link.subLinks && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${isActive(link.path, link.isAnchor) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`text-base font-bold transition-colors group/link ${isActive(link.path, link.isAnchor) ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${isActive(link.path, link.isAnchor) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                  </Link>
                )}
                
                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full -left-12 pt-2 z-50"
                    >
                      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-3 w-[450px] grid grid-cols-1 gap-1 relative">
                        <div className="absolute top-0 left-12 w-4 h-4 bg-white border-l border-t border-slate-100 -rotate-45 -translate-y-2"></div>
                        {link.subLinks.map((sub, idx) => {
                          const Content = (
                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group/item">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-brand/10 group-hover/item:text-brand transition-colors">
                                {sub.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-slate-900 group-hover/item:text-brand transition-colors flex items-center justify-between">
                                  {sub.name}
                                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                </h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                          );

                          return sub.isExternal ? (
                            <a 
                              key={sub.name}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {Content}
                            </a>
                          ) : (
                            <Link 
                              key={sub.name}
                              to={sub.path} 
                              onClick={() => setActiveDropdown(null)}
                            >
                              {Content}
                            </Link>
                          );
                        })}
                        
                        <div className="mt-2 p-4 bg-slate-50 rounded-2xl flex items-center justify-between group/advice cursor-pointer" onClick={() => setActiveDropdown(null)}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">Needs architecture advice?</span>
                          </div>
                          <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-brand group-hover/advice:translate-x-1 transition-transform">
                            Talk to Expert
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link to="/contact" className="bg-brand text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 text-center active:scale-95 group">
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-brand transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white overflow-y-auto"
          >
            <div className="flex flex-col h-full min-h-screen">
              <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
                <Logo />
                <button 
                  className="p-2 text-slate-600 hover:text-brand transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4 border-b border-slate-100 pb-4 last:border-0">
                    {link.subLinks ? (
                      <button 
                        className="text-2xl font-bold text-slate-900 flex items-center justify-between w-full text-left focus:outline-none"
                        onClick={() => toggleMobileExpanded(link.name)}
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedMobile === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    ) : link.isAnchor ? (
                      <a 
                        href={link.path} 
                        className="text-2xl font-bold text-slate-900 flex items-center justify-between"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        className="text-2xl font-bold text-slate-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                    
                    <AnimatePresence>
                      {link.subLinks && expandedMobile === link.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-2 pl-4 mt-2">
                            {link.subLinks.map((sub) => (
                              <div key={sub.name}>
                                {sub.isExternal ? (
                                  <a 
                                    href={sub.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand group-hover:bg-brand/10 transition-colors">
                                      {sub.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-lg font-bold text-slate-700 flex items-center justify-between">
                                        {sub.name}
                                        <ChevronRight size={16} />
                                      </div>
                                    </div>
                                  </a>
                                ) : (
                                  <Link 
                                    to={sub.path} 
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand group-hover:bg-brand/10 transition-colors">
                                      {sub.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-lg font-bold text-slate-700 flex items-center justify-between">
                                        {sub.name}
                                        <ChevronRight size={16} />
                                      </div>
                                    </div>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block bg-brand text-white text-center px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-brand/20 transition-all active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Free Consultation
                  </Link>
                </div>

                <div className="mt-auto py-8 text-center border-t border-slate-100">
                  <p className="text-slate-400 text-sm">© {(new Date()).getFullYear()} Manomay Global Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
