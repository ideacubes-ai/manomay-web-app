import { motion, AnimatePresence } from "motion/react";
import { 
  Users, ShoppingCart, Package, Factory, Calculator, 
  Globe, Layout, Smartphone, BarChart3, Settings,
  Clock, Briefcase, HeartHandshake, ShieldCheck, ArrowRight,
  Search, Mail, Megaphone, Calendar, FileText, 
  PieChart, Rocket, Microscope, Server, Boxes,
  ChevronRight, Sparkles, Zap, MessageSquare, StickyNote,
  LifeBuoy
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";

const categories = [
  {
    id: "sales",
    name: "Sales & CRM",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-500",
    description: "Build relationships, track leads, and close deals with precision.",
    tips: "Success in CRM depends on clean data. Automated lead scoring minimizes manual vetting while ensuring your top reps focus on high-priority deals.",
    modules: [
      { 
        name: "CRM", 
        desc: "Track leads, close opportunities, and get accurate forecasts.", 
        icon: <HeartHandshake className="w-5 h-5" />,
        features: [
          "Lead Scoring & Automated Nurturing",
          "Pipeline Management with Kanban View",
          "Real-time Revenue Forecasts",
          "Email Integration & Activity Tracking"
        ]
      },
      { 
        name: "Sales", 
        desc: "From quotations to invoices. Send professional quotes with e-Sign.", 
        icon: <FileText className="w-5 h-5" />,
        features: [
          "Quotations to Orders in One Click",
          "Integrated Electronic Signatures",
          "Online Payments & Credit Card Support",
          "Product Variants & Pricelists"
        ]
      },
      { 
        name: "POS", 
        desc: "A Point of Sale that works online and offline. Perfect for retail & restaurants.", 
        icon: <ShoppingCart className="w-5 h-5" />,
        features: [
          "Works Offline & Online",
          "Unified Multi-channel Management",
          "Kitchen Display System for Restaurants",
          "Customer Loyalty Programs"
        ]
      },
      { 
        name: "Subscriptions", 
        desc: "Automate recurring billing and manage renewals effortlessly.", 
        icon: <RefreshCw className="w-5 h-5" />,
        features: [
          "Automated Recurring Invoicing",
          "Churn Analysis & Renewal Tracking",
          "Self-service Portal for Customers",
          "Subscription-based Revenue Analysis"
        ]
      },
      { 
        name: "Rental", 
        desc: "Manage your rental business: availability, scheduling, and billing.", 
        icon: <Clock className="w-5 h-5" />,
        features: [
          "Gantt Schedule Management",
          "Availability & Stock Tracking",
          "Late Return Penalties & Invoicing",
          "Product Condition Tracking"
        ]
      },
      { 
        name: "Amazon Connector", 
        desc: "Synchronize your Amazon orders and inventory with Odoo.", 
        icon: <ShoppingCart className="w-5 h-5" />,
        features: [
          "Bi-directional Inventory Sync",
          "Automated Order Import",
          "FBA & FBM Fulfillment Support",
          "Seamless Centralized Accounting"
        ]
      }
    ]
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-emerald-500",
    description: "Real-time financial visibility and automated bookkeeping.",
    tips: "Automation is key here. By syncing bank feeds directly, you can achieve daily reconciliation and close your month-end faster than ever before.",
    modules: [
      { 
        name: "Accounting", 
        desc: "A stunning interface, automated sync, and fast reconciliation.", 
        icon: <Calculator className="w-5 h-5" />,
        features: [
          "Bank Synchronization & Smart Matching",
          "Dynamic Financial Reports (P&L, Balance Sheet)",
          "Automated Follow-ups for Unpaid Invoices",
          "Multi-currency & Multi-company Support"
        ]
      },
      { 
        name: "Invoicing", 
        desc: "Create professional invoices and get paid faster with online payments.", 
        icon: <FileText className="w-5 h-5" />,
        features: [
          "Batch Invoicing & Recurring Payments",
          "Integrated Tax & VAT Calculation",
          "Direct Email Delivery & Status Tracking",
          "Online Payment Portal Integration"
        ]
      },
      { 
        name: "Expenses", 
        desc: "Employee expenses managed easily. Snap a photo, upload, and approve.", 
        icon: <Zap className="w-5 h-5" />,
        features: [
          "OCR Receipt Scanning via Mobile App",
          "Automated Approval Workflows",
          "Seamless Re-invoicing to Clients",
          "Integration with Fleet Management"
        ]
      },
      { 
        name: "Spreadsheet", 
        desc: "Collaborative BI tools built directly into your Odoo database.", 
        icon: <PieChart className="w-5 h-5" />,
        features: [
          "Live Data Sync with ERP records",
          "Collaborative Editing in Real-time",
          "Advanced Pivot Table Integration",
          "Formulae & Conditional Formatting"
        ]
      },
      { 
        name: "Documents", 
        desc: "Go paperless. Manage your document lifecycle with AI automation.", 
        icon: <Server className="w-5 h-5" />,
        features: [
          "AI Document Recognition (OCR)",
          "Centralized File Management",
          "Custom Document Workflows",
          "Full-text Search Capability"
        ]
      },
      { 
        name: "Consolidation", 
        desc: "Consolidate your financial statements across multi-companies.", 
        icon: <BarChart3 className="w-5 h-5" />,
        features: [
          "Automated Elimination Entries",
          "Currency Translation & Adjustments",
          "Real-time Global Financial View",
          "Compliance Tracking for Consolidated Records"
        ]
      },
      { 
        name: "Planning", 
        desc: "Manage resource allocation and project forecasts accurately.", 
        icon: <Calendar className="w-5 h-5" />,
        features: [
          "Gantt Drag-and-drop Scheduling",
          "Capacity & Over-allocation Checks",
          "Shift Management & Conflict Detection",
          "Seamless Integration with Time Off"
        ]
      }
    ]
  },
  {
    id: "inventory",
    name: "Inventory & Logistics",
    icon: <Package className="w-6 h-6" />,
    color: "bg-orange-500",
    description: "Max-efficiency supply chain and warehouse management.",
    tips: "Leverage mobile barcodes to reduce picking errors by up to 90%. Real-time tracking across multi-step routes ensures you never lose a pallet again.",
    modules: [
      { 
        name: "Inventory", 
        desc: "Double-entry inventory with no stock loss. Track every move.", 
        icon: <Package className="w-5 h-5" />,
        features: [
          "Double-entry Inventory System",
          "Multi-warehouse & Multi-step Routing",
          "Real-time Inventory Valuation",
          "Traceability (Lots & Serials)"
        ]
      },
      { 
        name: "Purchase", 
        desc: "Automate your supply chain. Send RFQs and track incoming stock.", 
        icon: <ShoppingCart className="w-5 h-5" />,
        features: [
          "Automated RFQs based on Stock Levels",
          "Vendor Price Monitoring",
          "Purchase Agreement Management",
          "Automated Reordering Rules"
        ]
      },
      { 
        name: "Barcode", 
        desc: "Scan and manage your warehouse from any mobile device.", 
        icon: <Smartphone className="w-5 h-5" />,
        features: [
          "Mobile Inventory Scanning",
          "Picking, Packing & Shipping Automation",
          "Standard & Custom Barcode Support",
          "Instant Stock Adjustments"
        ]
      },
      { 
        name: "Shipping", 
        desc: "Integration with UPS, FedEx, DHL, and local carriers.", 
        icon: <Globe className="w-5 h-5" />,
        features: [
          "Real-time Shipping Rate Computation",
          "Label Printing & Tracking Info",
          "Carrier-specific Packaging Support",
          "Integrated Returns Management"
        ]
      },
      { 
        name: "Landed Costs", 
        desc: "Calculate true cost including shipping, insurance, and duties.", 
        icon: <Calculator className="w-5 h-5" />,
        features: [
          "Cost Allocation (Value, Weight, Volume)",
          "Purchase Order Integration",
          "Accurate Margin Calculations",
          "Automated Accounting Postings"
        ]
      }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing (Material Requirements Planning)",
    icon: <Factory className="w-6 h-6" />,
    color: "bg-indigo-500",
    description: "From Bill of Materials to Work Orders. Production floor intelligence.",
    tips: "Use PLM for version control to ensure the production floor is always working with the latest engineering specs, avoiding costly re-work.",
    modules: [
      { 
        name: "Material Requirements Planning", 
        desc: "Manage manufacturing orders, BoMs, and work centers.", 
        icon: <Settings className="w-5 h-5" />,
        features: [
          "Multi-level Bills of Materials (BoM)",
          "Work Center & Routing Management",
          "Master Production Schedule (MPS)",
          "Capacity Planning & Scheduling"
        ]
      },
      { 
        name: "PLM", 
        desc: "Product Lifecycle Management. Manage versions and engineering changes.", 
        icon: <Rocket className="w-5 h-5" />,
        features: [
          "Engineering Change Orders (ECO)",
          "Version Control for BoMs",
          "Collaborative Product Design",
          "Document Management for Engineering"
        ]
      },
      { 
        name: "Maintenance", 
        desc: "Preventive and corrective maintenance for your equipment.", 
        icon: <Settings className="w-5 h-5" />,
        features: [
          "Preventive Maintenance Scheduling",
          "Corrective Maintenance Requests",
          "MTBF & MTTR Analytics",
          "Work Center Downtime Tracking"
        ]
      },
      { 
        name: "Quality", 
        desc: "Define quality control points and track alerts on the production floor.", 
        icon: <Microscope className="w-5 h-5" />,
        features: [
          "Quality Control Points (QCP)",
          "Statistical Process Control (SPC)",
          "Automated Quality Alerts",
          "Root Cause Analysis Tracking"
        ]
      },
      { 
        name: "IoT", 
        desc: "Connect your machines and workstations to Odoo via IoT box.", 
        icon: <Server className="w-5 h-5" />,
        features: [
          "Direct Machine Integration",
          "Real-time Data Capture",
          "Automated Measure recording",
          "Support for Barcodes, Scales, Footswitches"
        ]
      }
    ]
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "bg-rose-500",
    description: "Manage your most valuable asset—your people.",
    tips: "Centralizing employee data reduces administrative overhead. Combine Payroll with Attendances for automated, worry-free salary calculation.",
    modules: [
      { 
        name: "Employees", 
        desc: "Centralized employee database with hierarchies and documents.", 
        icon: <Users className="w-5 h-5" />,
        features: [
          "Centralized Employee Profiles",
          "Organization Charting",
          "Skill & Contract Management",
          "Departmental Hierarchy Visualization"
        ]
      },
      { 
        name: "Recruitment", 
        desc: "Build a talent pipeline. Post jobs and manage candidates effortlessly.", 
        icon: <Briefcase className="w-5 h-5" />,
        features: [
          "Job Board Posting & Management",
          "Applicant Tracking System (ATS)",
          "Automated Email Communication",
          "Collaborative Hiring Evaluation"
        ]
      },
      { 
        name: "Payroll", 
        desc: "Manage localized payroll, contracts, and salary structures.", 
        icon: <Calculator className="w-5 h-5" />,
        features: [
          "Localized Salary Structures",
          "Tax & Contribution Calculation",
          "Payslip Batch Generation",
          "Accounting Integration for Payments"
        ]
      },
      { 
        name: "Time Off", 
        desc: "Manage absences and vacation requests with simple approval workflows.", 
        icon: <Calendar className="w-5 h-5" />,
        features: [
          "Custom Leave Type Allocation",
          "Calendar View of Absences",
          "Multi-level Approval Workflows",
          "Accrual Plans & Balance Tracking"
        ]
      },
      { 
        name: "Appraisals", 
        desc: "Create a culture of constant feedback with automated appraisals.", 
        icon: <Sparkles className="w-5 h-5" />,
        features: [
          "Automated Performance Reviews",
          "360-degree Feedback Support",
          "Goal Tracking (OKRs)",
          "Custom Evaluation Forms"
        ]
      },
      { 
        name: "Fleet", 
        desc: "Manage your company vehicles, fuel logs, and contracts.", 
        icon: <Settings className="w-5 h-5" />,
        features: [
          "Vehicle Lifecycle Management",
          "Fuel consumption Tracking",
          "Lease Contract Management",
          "Driver Assignment History"
        ]
      },
      { 
        name: "Attendances", 
        desc: "Track employee check-ins and check-outs via PIN or badge.", 
        icon: <Clock className="w-5 h-5" />,
        features: [
          "PIN or Badge check-ins",
          "Real-time Presence Dashboard",
          "Kiosk Mode for Reception",
          "Timesheet Synchronization"
        ]
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Growth",
    icon: <Megaphone className="w-6 h-6" />,
    color: "bg-violet-500",
    description: "Automate your outreach and build lasting customer loyalty.",
    tips: "Focus on segmentation. Marketing Automation allows you to send the right message to the right person based on their real behavior in your ERP.",
    modules: [
      { 
        name: "Marketing Automation", 
        desc: "Build automated marketing journeys for your leads.", 
        icon: <Zap className="w-5 h-5" />,
        features: [
          "Visual Campaign Builder",
          "Behavior-based Triggers",
          "Lead Scoring & Segmentation",
          "Automated Multi-channel Flows"
        ]
      },
      { 
        name: "Email Marketing", 
        desc: "Design stunning campaigns with drag-and-drop tools.", 
        icon: <Mail className="w-5 h-5" />,
        features: [
          "Drag-and-drop Template Editor",
          "A/B Testing for Subject Lines",
          "Contact List Management",
          "Real-time Tracking (Open/Click rates)"
        ]
      },
      { 
        name: "Social Marketing", 
        desc: "Manage your social presence from a single dashboard.", 
        icon: <MessageSquare className="w-5 h-5" />,
        features: [
          "Multi-platform Publishing",
          "Social Connection Monitoring",
          "Unified Message Dashboard",
          "Campaign Performance Analysis"
        ]
      },
      { 
        name: "Events", 
        desc: "Organize events, sell tickets, and manage attendees.", 
        icon: <Calendar className="w-5 h-5" />,
        features: [
          "Event Website Creation",
          "Online Ticket Sales & Registration",
          "Sponsor & Speaker Management",
          "Mobile Check-in Application"
        ]
      },
      { 
        name: "SMS Marketing", 
        desc: "Send targeted mobile campaigns directly to your customers.", 
        icon: <Smartphone className="w-5 h-5" />,
        features: [
          "Direct SMS Delivery Integration",
          "Batch Sending for Promotions",
          "Automated Opt-out Management",
          "Short Link Tracking & Analytics"
        ]
      },
      { 
        name: "Surveys", 
        desc: "Create engaging surveys and gather feedback from your audience.", 
        icon: <BarChart3 className="w-5 h-5" />,
        features: [
          "Visual Survey Designer",
          "Multiple Question Types",
          "Automated invitations & Reminders",
          "Real-time Result Analysis"
        ]
      }
    ]
  },
  {
    id: "website",
    name: "Website & eCommerce",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-cyan-500",
    description: "Build stunning websites that convert visitors into customers.",
    tips: "With Odoo, your website is your database. Orders placed online flow directly into Inventory and Accounting without manual entry.",
    modules: [
      { 
        name: "Website Builder", 
        desc: "What you see is what you get. No code required.", 
        icon: <Layout className="w-5 h-5" />,
        features: [
          "Intuitive Drag-and-drop Designer",
          "Fully Responsive Layouts",
          "Built-in SEO Tools",
          "Professional Blocks & Templates"
        ]
      },
      { 
        name: "eCommerce", 
        desc: "An integrated online store with payment and shipping readiness.", 
        icon: <ShoppingCart className="w-5 h-5" />,
        features: [
          "Dynamic Product Pages",
          "Secure Checkout Integration",
          "Automated Inventory Sync",
          "Cross-selling & Upselling Tools"
        ]
      },
      { 
        name: "Blog", 
        desc: "Modern, SEO-optimized blogging platform with interactive tools.", 
        icon: <FileText className="w-5 h-5" />,
        features: [
          "Clean Writing Interface",
          "Comment System Integration",
          "Social Media Sharing Tools",
          "Advanced SEO Configuration"
        ]
      },
      { 
        name: "Live Chat", 
        desc: "Engage with your website visitors in real-time.", 
        icon: <MessageSquare className="w-5 h-5" />,
        features: [
          "Instant Messaging for visitors",
          "Canned Responses for Speed",
          "Automated Chatbot Workflows",
          "Rating & Feedback Collection"
        ]
      },
      { 
        name: "Forum", 
        desc: "Build a community around your products and services.", 
        icon: <MessageSquare className="w-5 h-5" />,
        features: [
          "Question & Answer Format",
          "Gamification & Reputation Points",
          "Content Moderation Tools",
          "Post Up-voting & Sorting"
        ]
      },
      { 
        name: "eLearning", 
        desc: "Create and sell online courses with quizzes and certificates.", 
        icon: <GraduationCap className="w-5 h-5" />,
        features: [
          "Online Course Management",
          "Video & Content Hosting",
          "Quizzes & Certification",
          "Student Progress Tracking"
        ]
      }
    ]
  },
  {
    id: "services",
    name: "Services & Projects",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-amber-500",
    description: "Track work, manage resources, and ensure project success.",
    tips: "Integrated timesheets are the standard here. Track time directly on tasks to get real-time profitability reports on every single project.",
    modules: [
      { 
        name: "Project", 
        desc: "Agile, Gantt, and Kanban views to manage your team's success.", 
        icon: <Briefcase className="w-5 h-5" />,
        features: [
          "Agile Project Management",
          "Task Kanban & Gantt Views",
          "Timesheet & Cost Tracking",
          "Collaborative Project Portals"
        ]
      },
      { 
        name: "Timesheets", 
        desc: "The fastest way to track time. Simple, mobile, and accurate.", 
        icon: <Clock className="w-5 h-5" />,
        features: [
          "One-click Timer Recording",
          "Mobile App for Field Tracking",
          "Manager Approval Workflows",
          "Reporting by project or employee"
        ]
      },
      { 
        name: "Field Service", 
        desc: "Schedule appointments, track tasks, and invoice on site.", 
        icon: <Smartphone className="w-5 h-5" />,
        features: [
          "Appointment Scheduling & Dispatch",
          "Mobile Task Execution",
          "On-site Signature Capture",
          "Instant Invoicing for Labor & Parts"
        ]
      },
      { 
        name: "Helpdesk", 
        desc: "Agile ticket management with SLA, automation, and live chat.", 
        icon: <LifeBuoy className="w-5 h-5" />,
        features: [
          "SLA Management & Tracking",
          "Multi-channel Ticket Input",
          "Automated Ticket Assignment",
          "Customer Satisfaction Surveys"
        ]
      },
      { 
        name: "Appointments", 
        desc: "Self-service booking system for your customers.", 
        icon: <Calendar className="w-5 h-5" />,
        features: [
          "Self-service Booking Portal",
          "Sync with Google/Outlook Calendars",
          "Automated Reminders & Notifications",
          "Staff Availability Management"
        ]
      },
      { 
        name: "Planning", 
        desc: "Organize employee schedules and manage resource forecasts.", 
        icon: <Clock className="w-5 h-5" />,
        features: [
          "Shift Management & Scheduling",
          "Resource Capacity Planning",
          "Conflict & Over-load Warnings",
          "Integration with Timesheets"
        ]
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-slate-500",
    description: "Tools to keep your team aligned and focused.",
    tips: "Knowledge and Discuss bridge the gap between static docs and real-time chat. Keep your tribal knowledge accessible to all.",
    modules: [
      { 
        name: "Studio", 
        desc: "Build your own custom Odoo apps without writing code.", 
        icon: <Layout className="w-5 h-5" />,
        features: [
          "Visual View Designer",
          "Automated Workflows & Actions",
          "Custom Field Creation",
          "Integrated Report Designer"
        ]
      },
      { 
        name: "Discuss", 
        desc: "Internal chat, video calls, and document collaboration.", 
        icon: <MessageSquare className="w-5 h-5" />,
        features: [
          "Real-time Team Chat",
          "Integrated Video Calls",
          "File Sharing & Reactions",
          "Channel & Private Group Support"
        ]
      },
      { 
        name: "Knowledge", 
        desc: "Modern document management and internal wiki for teams.", 
        icon: <FileText className="w-5 h-5" />,
        features: [
          "Collaborative Wiki Pages",
          "Article Templates & hierarchy",
          "Powerful Global Search",
          "Access Control for Documentation"
        ]
      },
      { 
        name: "Dashboards", 
        desc: "Custom BI dashboards for real-time business insights.", 
        icon: <PieChart className="w-5 h-5" />,
        features: [
          "Visual Data Analysis",
          "Dynamic KPI Tracking",
          "Customizable Drill-down Views",
          "Real-time Data Updates"
        ]
      },
      { 
        name: "Sign", 
        desc: "Send, sign, and approve documents online anywhere.", 
        icon: <ShieldCheck className="w-5 h-5" />,
        features: [
          "Secure E-Signature Workflows",
          "PDF Template Preparation",
          "Signature Order Management",
          "History Tracking for Signed Files"
        ]
      },
      { 
        name: "Notes", 
        desc: "Personal and shared organization tools for your ideas.", 
        icon: <StickyNote className="w-5 h-5" />,
        features: [
          "Kanban Organized Notes",
          "Shared Collaborative Notebooks",
          "Formatted Text & Checklist Support",
          "Quick Search & Labeling"
        ]
      },
      { 
        name: "WhatsApp", 
        desc: "Direct integration for sending WhatsApp messages via Odoo.", 
        icon: <MessageSquare className="w-5 h-5" />,
        features: [
          "Direct WhatsApp Communication",
          "Approved Message Templates",
          "Full Chat History in ERP",
          "Integration with CRM & Sales"
        ]
      }
    ]
  }
];

// Helper icon for missing ones
function RefreshCw(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

export default function OdooModulesExplorer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catId);
    }
    setSearchParams(searchParams);
  };

  const activeCategoryData = useMemo(() => 
    categories.find(c => c.id === selectedCategory), 
  [selectedCategory]);

  const filteredCategories = useMemo(() => {
    let base = categories;
    if (selectedCategory !== "all") {
      base = categories.filter(c => c.id === selectedCategory);
    }
    
    if (searchQuery) {
      return base.map(cat => ({
        ...cat,
        modules: cat.modules.filter(m => 
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          m.desc.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.modules.length > 0);
    }
    
    return base;
  }, [selectedCategory, searchQuery]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 selection:bg-brand/20 pt-28 pb-20 ${selectedCategory === 'all' ? 'bg-slate-50' : 'bg-slate-50/50'}`}>
      <SEO 
        title="Explore Odoo Modules | Manomay Global Solutions" 
        description="Browse the comprehensive suite of Odoo modules. Find the perfect apps to power your sales, finance, inventory, and operations." 
      />
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            opacity: selectedCategory !== 'all' ? 0.4 : 0,
            backgroundColor: activeCategoryData?.color?.replace('bg-', 'var(--') || 'transparent' 
          }}
          className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full blur-[180px] opacity-20"
          style={{ backgroundColor: activeCategoryData ? `rgb(from ${activeCategoryData.color.replace('bg-', '')} r g b / 0.1)` : 'transparent' }}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 mb-12 relative overflow-hidden pt-12 pb-12 lg:pt-20 lg:pb-28">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          
          {/* Mesh Gradients */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-brand/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-blue-400/5 rounded-full blur-[100px]"></div>
          
          {/* Floating Abstract Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[15%] w-12 h-12 border-2 border-brand/10 rounded-xl rotate-12 hidden lg:block"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-[10%] w-16 h-16 bg-brand/5 rounded-full hidden lg:block"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2.5 h-2.5 rounded-full bg-brand"
              ></motion.div>
              Odoo Ecosystem Explorer
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-slate-900 mb-8 leading-tight tracking-tight font-jakarta">
              Every Module <br/>
              <span className="relative inline-block">
                <span className="font-display italic font-normal text-brand px-1">Simply Explained</span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
              Discover the complete Odoo module list. From core ERP functions to industry-specific apps, explore how each component builds your unified business architecture.
            </p>
            
            <div className="relative group max-w-xl mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-blue-400/20 rounded-[2.1rem] blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-brand transition-all duration-300" />
                <input 
                  type="text" 
                  placeholder="Search for a module (e.g. CRM, Inventory, Studio)..." 
                  className="w-full pl-15 pr-6 py-6 bg-white border border-slate-200 rounded-[2rem] text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand/5 focus:border-brand transition-all shadow-sm group-focus-within:shadow-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Hero Visual Element (Right Side) */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white shadow-2xl rounded-3xl border border-white/50 flex items-center justify-center overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-blue-400/5"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 w-full relative z-10">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-slate-50/50 backdrop-blur-sm rounded-2xl border border-white flex items-center justify-center shadow-inner group/box"
                    >
                      <div className={`w-1/2 h-1/2 rounded-lg opacity-40 group-hover/box:opacity-80 transition-all duration-500 ${i === 1 ? 'bg-brand' : i === 2 ? 'bg-emerald-400' : i === 3 ? 'bg-orange-400' : 'bg-indigo-400'}`}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative Rings */}
              <div className="absolute -inset-12 border border-brand/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-24 border border-brand/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-slate-50 z-20"
              >
                <HeartHandshake className="text-brand w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-10 -left-6 w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-slate-50 z-20"
              >
                <Package className="text-orange-500 w-10 h-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Sidebar & Results */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 space-y-4">
            <div className="lg:sticky lg:top-32 relative z-20 bg-slate-50/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl lg:rounded-none">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Categories</h4>
              <nav className="space-y-2">
                <motion.button 
                  whileHover={{ x: 5, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold flex items-center justify-between transition-all text-lg ${selectedCategory === "all" ? 'bg-brand text-white shadow-xl shadow-brand/40 scale-[1.02]' : 'bg-white border border-slate-100 text-slate-600 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50'}`}
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" /> All Modules
                  </span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedCategory === "all" ? 'rotate-90' : ''}`} />
                </motion.button>
                {categories.map((cat) => (
                  <motion.button 
                    key={cat.id}
                    whileHover={{ x: 5, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-5 py-4 rounded-2xl font-bold flex items-center justify-between transition-all border-l-4 text-lg ${selectedCategory === cat.id ? `bg-white border-brand text-brand shadow-xl shadow-slate-200/50 scale-[1.02]` : 'bg-white border-transparent text-slate-600 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50'}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`${cat.color} ${selectedCategory === cat.id ? 'text-white' : 'bg-opacity-10 text-brand'} w-10 h-10 rounded-lg flex items-center justify-center transition-colors`}>
                        {cat.icon}
                      </span>
                      {cat.name}
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${selectedCategory === cat.id ? 'rotate-90' : ''}`} />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative group">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <h5 className="text-xl font-bold mb-4 relative z-10">Custom Needed?</h5>
                <p className="text-slate-400 text-sm mb-6 relative z-10 font-medium">We develop bespoke Odoo modules for specific business logic that doesn't fit standard apps.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-wider text-xs hover:gap-4 transition-all relative z-10">
                  Talk to Architects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="lg:col-span-9 space-y-20">
            <AnimatePresence mode="popLayout">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <motion.div
                    key={cat.id}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                    className="space-y-10"
                  >
                    <motion.div variants={itemVariants} className="flex items-end gap-6 border-b border-slate-200 pb-10">
                      <motion.div 
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`w-20 h-20 ${cat.color} text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-slate-200`}
                      >
                        {cat.icon}
                      </motion.div>
                      <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-2">{cat.name}</h2>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mb-6">{cat.description}</p>
                        
                        {(cat as any).tips && (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="bg-slate-50 border-l-4 border-brand p-4 text-sm text-slate-600 font-medium italic rounded-r-xl max-w-xl"
                            >
                              <span className="font-black text-brand uppercase text-xs block mb-1 tracking-widest">Industry Insight</span>
                              "{(cat as any).tips}"
                            </motion.div>
                        )}
                      </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {cat.modules.map((mod, midx) => (
                        <motion.div
                          key={mod.name}
                          variants={itemVariants}
                          whileHover={{ 
                            y: -12,
                            borderColor: "rgba(244, 63, 94, 0.3)",
                            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.1), 0 0 20px rgba(244, 63, 94, 0.05)"
                          }}
                          className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm transition-all duration-500 group relative overflow-hidden"
                        >
                          {/* Inner glow effect */}
                          <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 ${cat.color}`}></div>
                          
                          <motion.div 
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:bg-brand/10 group-hover:text-brand transition-colors duration-500"
                          >
                            {mod.icon}
                          </motion.div>
                          
                          <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">{mod.name}</h4>
                          <p className="text-slate-600 leading-relaxed font-medium mb-6 group-hover:text-slate-800 transition-colors">
                            {mod.desc}
                          </p>

                          {mod.features && (
                            <ul className="space-y-3 mb-8">
                              {mod.features.map((feature, fidx) => (
                                <li key={fidx} className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand/40 shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand/40 group-hover:text-brand group-hover:scale-110 transition-all">
                              <Zap className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand transition-colors">
                              Ready for Implementation
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
                    <Search className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">No modules found</h3>
                  <p className="text-slate-500 text-lg">Try searching for something else or clearing filters.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setSelectedCategory("all")}}
                    className="mt-8 px-8 py-4 bg-brand/10 text-brand rounded-full font-bold hover:bg-brand hover:text-white transition-all active:scale-95"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mt-40 max-w-7xl mx-auto px-6">
        <div className="bg-brand rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-[0.05] mix-blend-overlay"></div>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Unsure where to start?</h3>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
              Implementing the wrong module at the wrong time can lead to unnecessary complexity. Talk to our implementation consultants for a tailored roadmap.
            </p>
            <Link to="/contact" className="bg-white text-brand px-12 py-6 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-2xl active:scale-95 inline-flex items-center gap-4 group">
              Book Free Consultation 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

