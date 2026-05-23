import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  Wifi, 
  Database, 
  Store, 
  Utensils, 
  BarChart3, 
  ShieldCheck, 
  Zap,
  Layers,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function OdooPOS() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-brand" />,
      title: "Web-Based Interface",
      description: "Designed for speed and ease of use, Odoo POS works in any web browser and functions like a local application."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand" />,
      title: "Multi-Device Support",
      description: "Compatible with any device—tablets, laptops, or industrial touchscreens. No special hardware required."
    },
    {
      icon: <Wifi className="w-8 h-8 text-brand" />,
      title: "Offline Reliability",
      description: "Keep selling even when your internet goes down. Odoo POS automatically syncs data when the connection returns."
    },
    {
      icon: <Database className="w-8 h-8 text-brand" />,
      title: "Full Odoo Integration",
      description: "Seamlessly connected to Inventory, Sales, Accounting, and CRM for a truly unified business ecosystem."
    }
  ];

  const industrySolutions = [
    {
      id: "retail",
      category: "POS for Retail",
      icon: <Store className="w-8 h-8 text-brand" />,
      intro: "Smart Point of Sale for supermarkets, fashion stores, electronics retailers, and every store in between.",
      quote: "Your cashier is the last impression your customer has before they leave. If that moment is slow, error-prone, or disconnected from your inventory — you are losing sales, trust, and repeat visits without realising it.",
      description: "Retail POS is no longer just a billing machine. Today's retailers need a POS that knows what's in stock before the customer asks, applies the right discount automatically, accepts any payment method without friction, and updates inventory in real time the moment a sale happens. Whether you run a single supermarket, a chain of fashion outlets, or an electronics store with high-value SKUs — the cost of a poor POS system shows up in shrinkage, billing errors, long queues, and customers who don't come back.\n\nOdoo POS was built for modern retail. It runs on any device — tablet, laptop, or dedicated terminal — works even when the internet goes down, and connects natively to your inventory, pricing, loyalty programme, and accounting. No middleware, no integrations to maintain, no data mismatch between what was sold and what was billed.",
      challenges: [
        { title: "Slow checkout creating long queues", desc: "A POS that takes too long to load products, apply discounts, or process payments turns a good shopping experience into a frustrating one — and customers notice." },
        { title: "Inventory not updated in real time", desc: "When a sale at the counter doesn't immediately reduce stock, your team makes promises to customers based on wrong numbers — leading to overselling and embarrassing stockouts." },
        { title: "Discount and pricing errors at checkout", desc: "Manual discount application, expired offer codes, and pricing inconsistencies between the shelf and the billing counter erode customer trust and margin simultaneously." },
        { title: "Offline dependency causing business stoppage", desc: "Internet outages that halt billing operations are unacceptable. A POS that can't work offline is a liability during network issues." },
        { title: "No visibility across multiple store locations", desc: "Retail chains running separate POS systems at each outlet have no consolidated view of sales, stock, or performance — making management decisions slow and reactive." },
        { title: "Loyalty and promotions not integrated", desc: "When loyalty programmes run on a separate system from the POS, cashiers can't apply points or rewards automatically — and customers experience friction at the moment that matters most." },
        { title: "End-of-day reconciliation is manual and slow", desc: "Manually tallying cash, card, and digital payments against POS records at close of business wastes time and introduces human error into financial reporting." }
      ],
      solutionsIntro: "Odoo POS is a browser-based, device-agnostic point of sale system that works seamlessly online and offline. Every sale made on the POS instantly updates inventory across all warehouses and locations. Pricing rules, discount structures, and promotional offers are configured centrally and applied automatically at checkout — no manual intervention needed. The cashier interface is clean and fast, designed to minimise training time and maximise throughput during peak hours.\n\nFor retail chains, Odoo gives head office a live view of sales, stock levels, and cashier performance across every outlet in one dashboard. Loyalty programmes, gift cards, and customer accounts are all native — the cashier simply scans a loyalty card or enters a phone number and rewards are applied instantly. End-of-day closing is automated, with cash register reconciliation and financial entries posted directly to accounting without any manual steps.",
      solutions: [
        { title: "Works offline, syncs instantly", desc: "Sales continue uninterrupted during internet outages and sync automatically when connectivity returns — no lost transactions, no manual reconciliation." },
        { title: "Real-time inventory sync", desc: "Every sale updates stock levels across all locations instantly — preventing overselling and giving accurate availability to every team member." },
        { title: "Automated pricing and promotions", desc: "Discounts, bundle offers, and time-limited promotions are configured once and applied automatically at checkout — eliminating cashier errors." },
        { title: "Built-in loyalty and gift cards", desc: "Customers earn and redeem points natively at the POS — no separate app, no manual tracking, no friction at checkout." },
        { title: "Multi-store management from one dashboard", desc: "Sales, stock, and cashier performance across every outlet visible in real time — giving management instant clarity without visiting each store." },
        { title: "Automated end-of-day closing", desc: "Cash reconciliation and accounting entries are generated automatically at session close — saving hours of manual work and eliminating errors." }
      ]
    },
    {
      id: "restaurant",
      category: "POS for Restaurant",
      icon: <Utensils className="w-8 h-8 text-brand" />,
      intro: "Complete restaurant management — from table orders and KOT to billing, kitchen display, and delivery — all in one system.",
      quote: "A table that waits too long to order loses patience. An order that reaches the kitchen wrong loses food cost. A bill that takes five minutes to arrive loses the tip — and sometimes the customer. Every minute of friction in your restaurant is money walking out the door.",
      description: "Running a restaurant is unlike any other retail operation. You are managing tables, kitchen queues, delivery orders, staff shifts, ingredient stock, and customer experience — all simultaneously, all in real time. A POS built for a clothing store cannot handle a restaurant. You need a system that understands table management, kitchen order tickets, modifier-based ordering, split bills, and home delivery — natively.\n\nWhether you run a quick service counter, a fine dining establishment, a cafe, or a cloud kitchen, Odoo Restaurant POS is designed for the pace and complexity of food service. It connects the front of house to the kitchen, tracks ingredient consumption against each recipe, and gives managers live visibility into table status, order flow, and daily revenue — all from one screen.",
      challenges: [
        { title: "Order errors between front of house and kitchen", desc: "Handwritten KOTs and verbal order communication lead to wrong dishes, missing modifiers, and frustrated customers — especially during peak service." },
        { title: "No real-time table status visibility", desc: "Without a live floor map, staff don't know which tables are available, occupied, or waiting for billing — causing seating delays and poor table turn management." },
        { title: "Slow billing at peak hours", desc: "Manually calculating bills, applying discounts, and splitting payments during a busy dinner service creates bottlenecks that frustrate customers at the moment they are ready to leave." },
        { title: "Ingredient stock not tracked against recipes", desc: "Without recipe-level inventory deduction, restaurants over-purchase, waste ingredients, and run out of items mid-service without warning — damaging both margin and customer experience." },
        { title: "No integration between delivery and dine-in orders", desc: "Managing Swiggy, Zomato, and direct orders on separate systems alongside dine-in creates chaos in the kitchen — no unified order queue, no accurate wait times." },
        { title: "Staff shifts and tip management is manual", desc: "Tracking which waiter handled which table, managing split tips, and reconciling cash against covers at shift end is time-consuming and error-prone without system support." },
        { title: "Menu changes are slow and inconsistent", desc: "Updating prices, removing unavailable items, or launching new dishes across all terminals and delivery platforms manually takes too long and creates inconsistencies." }
      ],
      solutionsIntro: "Odoo Restaurant POS brings together table management, kitchen order ticketing, delivery integration, and billing into one connected system. Waiters take orders on a tablet using a floor map that shows live table status — occupied, available, or waiting for bill. Orders are sent directly to the kitchen display or KOT printer the moment they are placed, with modifiers, special instructions, and course sequencing included. No paper notes, no shouting across the pass.\n\nIngredient stock is deducted automatically based on recipes — so when a margherita pizza is sold, flour, tomato, and cheese are reduced from inventory in the right quantities. Managers can see which items are running low before service begins. For delivery, Odoo integrates with third-party platforms so all orders — dine-in, takeaway, and delivery — arrive in one kitchen queue with no duplication. Billing supports split bills, partial payments, room charges for hotels, and GST-compliant receipts — all in seconds.",
      solutions: [
        { title: "Live floor map and table management", desc: "Visual floor plan shows real-time table status — seated, ordering, waiting for bill — so staff manage covers and turns efficiently." },
        { title: "Instant KOT to kitchen", desc: "Orders appear on the kitchen display screen or KOT printer the moment they are placed — with modifiers, notes, and course order included." },
        { title: "Recipe-based inventory deduction", desc: "Each dish sold automatically reduces ingredient stock based on its recipe — giving real-time visibility into what will run out before service ends." },
        { title: "Unified order queue for all channels", desc: "Dine-in, takeaway, and delivery orders arrive in one kitchen queue — no separate tablets, no missed orders, no confusion during peak service." },
        { title: "Fast, flexible billing", desc: "Split bills by item or guest, accept multiple payment methods in one transaction, and generate GST-compliant receipts in seconds." },
        { title: "Live sales and menu performance reports", desc: "See which dishes sell, which don't, peak service hours, and average cover value — updated in real time so managers make informed daily decisions." }
      ]
    }
  ];

  const manomayAdvantage = {
    retail: [
      { title: "Hardware + software setup", desc: "Manomay handles not just the Odoo configuration but the full POS hardware setup — receipt printers, barcode scanners, cash drawers, and payment terminals — so everything works together from day one." },
      { title: "Product catalogue and pricing migration", desc: "We migrate your existing product catalogue, pricing tiers, and promotional structures into Odoo accurately — so your team isn't re-entering thousands of SKUs manually." },
      { title: "Cashier training with real scenarios", desc: "We train your cashiers with your actual products, your discount workflows, and your customer scenarios — not generic software demos. Average cashier proficiency in under two hours." },
      { title: "Multi-location rollout expertise", desc: "Manomay has experience rolling out Odoo POS across retail chains with multiple outlets — with a phased approach that minimises business disruption at each location." },
      { title: "Payment gateway integration", desc: "We integrate your preferred payment gateways and UPI/card terminals with Odoo POS — so digital and cash payments reconcile automatically without manual entries." },
      { title: "Ongoing seasonal support", desc: "Peak seasons like Diwali, end-of-season sales, and festive promotions need POS configurations updated quickly. Manomay provides fast-turnaround support so your promotions are live when you need them." }
    ],
    restaurant: [
      { title: "Restaurant workflow mapping before setup", desc: "Manomay maps your service flow — number of floors, table layout, kitchen sections, and service sequence — before configuring Odoo. The system is built around your restaurant, not the other way around." },
      { title: "Recipe and menu engineering in Odoo", desc: "We enter your full menu with recipes, modifiers, variants, and combo offers into Odoo — including ingredient quantities for accurate stock deduction from day one." },
      { title: "Kitchen display and KOT hardware setup", desc: "Manomay handles the full kitchen hardware setup — KOT printers per section, kitchen display screens, and bump bar configuration — so the kitchen team is ready without any technical learning curve." },
      { title: "Delivery platform integration", desc: "We integrate Swiggy, Zomato, and direct online ordering with Odoo so all orders land in one kitchen queue — eliminating the chaos of managing multiple tablets during service." },
      { title: "Staff training by role", desc: "Waiters, cashiers, kitchen staff, and managers each receive separate, role-specific training. Your floor team learns the order flow. Your manager learns reporting and menu management. No one is overwhelmed." },
      { title: "GST and compliance setup", desc: "Manomay configures GST rates, FSSAI compliance, and receipt formats specific to restaurant billing requirements — so you are compliant from the first bill printed." }
    ]
  };

  const whyManomayFeatures = [
    { title: "End-to-end POS partner", desc: "Manomay doesn't just configure software. We scope your hardware needs, set up devices, integrate payment terminals, and train your team — everything under one engagement." },
    { title: "Go-live in days, not months", desc: "A well-scoped POS implementation doesn't need to take months. Manomay's industry-specific playbooks for retail and restaurant mean we move fast without cutting corners." },
    { title: "Works the way your business works", desc: "Every retail store and restaurant has unique workflows — different pricing structures, different kitchen setups, different customer flows. Manomay configures Odoo to match your operation exactly." },
    { title: "Training until adoption, not just go-live", desc: "We stay with your team until they are genuinely comfortable — not just until the software is installed. Real adoption means your investment delivers real returns." },
    { title: "Ongoing menu and catalogue updates", desc: "Menus change. Prices change. Products are added and discontinued. Manomay offers fast-turnaround support for ongoing changes so your team is never stuck waiting for updates." },
    { title: "Transparent, fixed-scope pricing", desc: "You know exactly what Manomay will deliver, by when, and for what cost — before you commit. No surprise invoices, no scope creep billed at daily rates." }
  ];

  const [activeTab, setActiveTab] = useState("retail");

  const benefits = [
    {
      title: "Reduction of Errors",
      desc: "Manual entry errors are eradicated with automatic synchronization and barcode integration.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand" />
    },
    {
      title: "Data-Driven Decisions",
      desc: "Real-time analytics and reporting allow you to monitor sales trends and staff performance instantly.",
      icon: <BarChart3 className="w-6 h-6 text-brand" />
    },
    {
      title: "Scalability",
      desc: "Easily add new stores or points of sale as your business grows without infrastructure headaches.",
      icon: <Zap className="w-6 h-6 text-brand" />
    }
  ];

  const faqs = [
    {
      q: "Does Odoo POS require a constant internet connection?",
      a: "No. Odoo Point of Sale remains functional even when your connection drops. All transactions are stored locally in the browser's storage and automatically synchronized with the database once the connection is restored. This ensures zero downtime during busy hours."
    },
    {
      q: "Can we use our existing hardware or do we need to buy new equipment?",
      a: "Odoo POS is highly flexible. Since it's web-based, it runs on standard browsers. You can use tablets (iPad/Android), laptops, or industrial touchscreens. For peripherals like printers and scanners, Odoo supports most industry-standard hardware through the IoT Box or direct USB/Network connections."
    },
    {
      q: "How does it handle multiple branches and inventory?",
      a: "Odoo POS is designed for multi-company and multi-store environments. You can manage centralized inventory with real-time updates across all branches. When a sale is made, stock is automatically reduced from the specific location's inventory, and accounting entries are generated instantly."
    },
    {
      q: "Does it support complex pricing and loyalty programs?",
      a: "Yes! You can manage multiple price lists (B2B vs B2C, seasonal discounts, or member-only pricing), gift cards, and points-based loyalty programs. These are fully integrated with your CRM, allowing you to track customer behavior across all touchpoints."
    },
    {
      q: "Can we manage table bookings and kitchen orders for restaurants?",
      a: "Absolutely. Odoo POS includes a specialized 'Restaurant' mode with floor plan mapping, kitchen order printing (KOS), staging for courses, and bill splitting capabilities. It's built to handle high-volume service environments with speed."
    },
    {
      q: "What kind of reporting and analytics are available?",
      a: "You get real-time dashboards showing sales by product, salesperson, or category. Since it's part of the wider Odoo ecosystem, you can also generate deep financial reports, tax summaries, and profitability analyses without manual data entry."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <SEO 
        title="Odoo Point of Sale (POS) Solutions | Manomay Global Solutions" 
        description="Modernize your retail operations with a robust, offline-capable Odoo POS system seamlessly integrated with inventory and accounting." 
      />
      {/* Creative Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#240b45] text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand/40 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-violet-500/30 blur-[180px] rounded-full"></div>
          <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-white text-sm font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-violet-900/50"
              >
                 <Store className="w-4 h-4 text-brand" /> Odoo Point of Sale
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white mb-8 tracking-tighter leading-[0.9] font-jakarta">
                Optimize Your <br className="hidden md:block"/>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="font-display italic font-normal text-white inline-block text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] px-1"
                >
                  Points of Sale
                </motion.span>
                <br className="hidden md:block"/> With Odoo.
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                A fast, reliable, and user-friendly interface that works on any device. Scale your retail or restaurant operations with ease.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all shadow-2xl shadow-brand/40 flex items-center justify-center gap-3 group active:scale-95">
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-white/10 pt-8 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <span className="font-semibold text-white/90">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span className="font-semibold text-white/90">Offline Capability</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-brand rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[12px] border-white z-10">
                    <img 
                      src="/POS_ERP_Support.jpeg" 
                      alt="Odoo POS Hero" 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Manomay Helps Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-brand"></div> Our Expertise
              </h2>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8 tracking-tight font-jakarta">
                How Manomay Global Solutions <br/>
                <span className="font-display italic font-normal text-brand">Can help you implement Odoo POS.</span>
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Implementing a POS system is more than just installing software. We provide a comprehensive service that ensures your transition is smooth, your hardware is integrated, and your staff is ready.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Monitor className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Free Consultation</h4>
                      <p className="text-base text-slate-500">We analyze your current store setup and design a custom Odoo architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Hardware Setup</h4>
                      <p className="text-base text-slate-500">Integration with printers, scanners, and terminals for a plug-and-play experience.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Migration & Sync</h4>
                      <p className="text-base text-slate-500">Seamless migration of products, prices, and customer data from your old system.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Staff Training</h4>
                      <p className="text-base text-slate-500">Hands-on training sessions to ensure your team is proficient from day one.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-50"></div>
               <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 italic text-slate-600 font-light text-xl leading-relaxed">
                 <div className="absolute top-6 left-6 text-brand/20 text-8xl font-serif">“</div>
                 <p className="relative z-10 pt-8 pb-4">
                   Manomay didn't just give us a software; they gave us a complete retail operating system. Our checkout times decreased by 40% in just two weeks.
                 </p>
                 <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Retail Manager</div>
                      <div className="text-base text-slate-500">Fast-Track Fashion</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special About Odoo POS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-brand"></div> Innovation in Retail
              </h2>
              <h3 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight font-jakarta">What makes Odoo POS <span className="font-display italic font-normal text-brand">Special?</span></h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Odoo Point of Sale is a web-based interface that combines the power of a standard desktop application with the flexibility of the cloud.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand/10 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals Section - Premium Light Design */}
      <section className="py-32 bg-white relative overflow-hidden text-slate-800">
        {/* Subtle background patterns */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-brand font-black uppercase tracking-[0.5em] text-sm mb-6 flex items-center justify-center gap-6">
              <div className="w-8 h-px bg-brand/40"></div> 
              Sector Specifics
              <div className="w-8 h-px bg-brand/40"></div>
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight font-jakarta">
              Specialized Depth. <br className="hidden md:block"/>
              <span className="font-display italic font-normal text-brand">Frictionless Scale.</span>
            </h3>
          </div>

          {/* Elegant Tabs */}
          <div className="flex justify-center mb-16 px-4">
            <div className="flex flex-col sm:flex-row bg-slate-50/50 backdrop-blur-md rounded-3xl sm:rounded-full p-2 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] w-full sm:w-auto">
              {industrySolutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl sm:rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 w-full sm:w-auto ${
                    activeTab === sol.id 
                      ? 'bg-white text-brand shadow-md scale-[1.02] sm:scale-105 border border-slate-100/50' 
                      : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                  }`}
                >
                  <span className={activeTab === sol.id ? 'text-brand' : ''}>{sol.icon}</span>
                  {sol.id}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[600px]">
            {industrySolutions.map((sol) => (
              activeTab === sol.id && (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  <div className="grid lg:grid-cols-12">
                    
                    {/* Left Column: Context & Inspiration */}
                    <div className="lg:col-span-5 bg-slate-50 p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                      {/* Decorative Element */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand mb-10 border border-slate-100">
                           {sol.icon}
                        </div>
                        <h4 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 font-jakarta tracking-tight">
                          {sol.category}
                        </h4>
                        <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                          {sol.intro}
                        </p>
                        <p className="text-base text-slate-500 leading-relaxed font-light mb-12">
                          {sol.description.split('\n\n')[0]}
                        </p>
                      </div>

                      <div className="relative z-10 mt-10">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] relative">
                          <div className="absolute -top-4 -left-4 text-brand/20">
                            <Zap className="w-8 h-8" />
                          </div>
                          <p className="text-lg italic text-slate-700 font-medium leading-relaxed relative z-10">
                            "{sol.quote}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Challenges & Solutions */}
                    <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-between">
                      
                      {/* The Pain Points */}
                      <div className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-8 h-px bg-red-200"></div>
                           <h5 className="text-xs font-black text-red-400 uppercase tracking-widest">Operational Risks</h5>
                           <div className="flex-1 h-px bg-slate-50"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          {sol.challenges.slice(0, 4).map((c, i) => (
                            <div key={i} className="flex gap-4 group">
                              <div className="mt-1 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-300 group-hover:bg-red-400 group-hover:scale-150 transition-all"></div>
                              </div>
                              <div>
                                <h6 className="font-bold text-slate-900 text-[15px] mb-1">{c.title}</h6>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{c.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* The Blueprint */}
                      <div className="mt-auto">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-8 h-px bg-brand/30"></div>
                           <h5 className="text-xs font-black text-brand uppercase tracking-widest">The Solution Blueprint</h5>
                           <div className="flex-1 h-px bg-slate-50"></div>
                        </div>
                        <div className="bg-brand/[0.02] border border-brand/5 p-8 lg:p-10 rounded-[2rem]">
                           <p className="text-sm text-slate-600 mb-8 max-w-2xl leading-relaxed">
                             {sol.solutionsIntro.split('\n\n')[0]}
                           </p>
                           <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                             {sol.solutions.map((s, i) => (
                               <div key={i} className="flex gap-4 group">
                                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                                  <div>
                                    <h6 className="font-bold text-slate-900 text-[15px] mb-1">{s.title}</h6>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">{s.desc}</p>
                                  </div>
                               </div>
                             ))}
                           </div>
                        </div>
                        
                        {/* Action */}
                        <div className="mt-10 flex justify-end">
                          <Link to="/contact" className="inline-flex items-center gap-3 py-3.5 px-8 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand transition-colors hover:shadow-lg hover:shadow-brand/20">
                            Start Consultation
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>


      {/* Why Manomay Section - Clean Vertical Design */}
      <section className="bg-[#4c1d95] py-24 overflow-hidden relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
              <h2 className="text-white/60 font-bold uppercase tracking-[0.4em] text-sm mb-6 flex items-center gap-6">
                <div className="w-12 h-px bg-white/30"></div> 
                The Partner Advantage
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 leading-[1] tracking-tight">
                Why <br/>
                <span className="text-white/80 font-display italic font-normal text-4xl lg:text-5xl">Manomay?</span>
              </h3>
              <p className="text-lg text-purple-100 font-light leading-relaxed max-w-sm">
                A POS system is only as good as the team that sets it up. We ensure your investment delivers real returns through deep domain expertise.
              </p>
            </div>

            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
              {whyManomayFeatures.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 group hover:border-white/30 transition-all hover:bg-white/[0.08]"
                >
                  <div className="text-white font-black text-sm mb-8 flex items-center gap-4">
                    <span className="opacity-40">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-white transition-colors">{feat.title}</h4>
                  <p className="text-purple-100 font-light leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                  <div className="w-8 h-px bg-brand"></div> Transparent Licensing
                </h2>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight font-jakarta">
                  Simple Pricing. <br/>
                  <span className="font-display italic font-normal text-brand">No Surprises.</span>
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                  Odoo offers a unique "One Price for All Apps" model. This means your POS system comes with the full power of Inventory, CRM, and Accounting at no extra license cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.odoo.com/pricing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand text-white px-10 py-5 rounded-full font-bold hover:bg-brand/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand/20 group text-xl active:scale-95"
                  >
                    Use Odoo Price Calculator
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all text-center text-xl active:scale-95">
                    Get Implementation Quote
                  </Link>
                </div>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">One Fixed Price</div>
                      <div className="text-base text-slate-500">Access all Odoo apps with one license</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Unlimited Support</div>
                      <div className="text-base text-slate-500">Official Odoo support included</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Cloud Hosting</div>
                      <div className="text-base text-slate-500">Odoo.sh or Odoo Online options</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 p-6 bg-slate-50 rounded-2xl text-center">
                  <p className="text-base text-slate-500 font-medium italic">"The most cost-effective ERP & POS ecosystem on the market today."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">Why Odoo POS?</h2>
            <h3 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tight font-jakarta">
              Benefits Turned into <span className="font-display italic font-normal text-brand">Results.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-brand/5 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Smart Investment & Continuous Improvement */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand/5 p-12 rounded-[3rem] border border-brand/10"
            >
              <h4 className="text-2xl font-black text-slate-900 mb-6 font-jakarta flex items-center gap-3">
                <Store className="w-8 h-8 text-brand" /> Smart Investment with Odoo
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6 lg:text-[17px]">
                Hardware costs are often a barrier for many businesses. Odoo POS is designed for a low Total Cost of Ownership (TCO). Since it is web-based, you can run it on tablets, laptops, or even industrial touchscreens you already own.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span className="lg:text-[17px]">Works on any modern browser</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span className="lg:text-[17px]">No proprietary expensive hardware locking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 rounded-[3rem] text-white"
            >
              <h4 className="text-2xl font-black mb-6 font-jakarta flex items-center gap-3">
                <Zap className="w-8 h-8 text-brand" /> Continuous Improvement
              </h4>
              <p className="text-slate-300 leading-relaxed mb-6 lg:text-[17px]">
                Odoo is constantly evolving. As an implementation partner, we ensure you always have access to the latest features, from advanced mobile payments to improved AI-driven sales forecasting.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span className="lg:text-[17px]">Automatic updates and security patches</span>
                </li>
                <li className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span className="lg:text-[17px]">Driven by a massive global community</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold tracking-widest text-brand uppercase mb-4">FAQ</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-jakarta">Everything You <span className="font-display italic font-normal text-brand">Need to Know.</span></h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg text-slate-900"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-brand' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-8 pb-6 text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="bg-brand rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight font-jakarta text-center">
                  Ready to Upgrade Your <br className="hidden sm:block" />
                  <span className="font-display italic text-[#af9dd4] text-4xl md:text-5xl lg:text-6xl font-bold mt-2 inline-block">Business?</span>
                </h3>
            <p className="text-xl text-white/90 mb-12 font-light leading-relaxed">
              Don't let legacy POS systems hold you back. Experience the power of unified retail and restaurant operations with Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-brand px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group">
                Book Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
