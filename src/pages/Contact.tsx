import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const COUNTRIES = [
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+91", name: "IND", flag: "🇮🇳" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+61", name: "AUS", flag: "🇦🇺" },
  { code: "+1", name: "CAN", flag: "🇨🇦" },
  { code: "+65", name: "SGP", flag: "🇸🇬" },
  { code: "+49", name: "GER", flag: "🇩🇪" },
  { code: "+33", name: "FRA", flag: "🇫🇷" },
  { code: "+31", name: "NLD", flag: "🇳🇱" },
  { code: "+39", name: "ITA", flag: "🇮🇹" },
  { code: "+34", name: "ESP", flag: "🇪🇸" },
  { code: "+41", name: "CHE", flag: "🇨🇭" },
  { code: "+81", name: "JPN", flag: "🇯🇵" },
  { code: "+82", name: "KOR", flag: "🇰🇷" },
  { code: "+60", name: "MYS", flag: "🇲🇾" },
  { code: "+63", name: "PHL", flag: "🇵🇭" },
  { code: "+64", name: "NZL", flag: "🇳🇿" },
  { code: "+27", name: "ZAF", flag: "🇿🇦" },
  { code: "+55", name: "BRA", flag: "🇧🇷" },
  { code: "+52", name: "MEX", flag: "🇲🇽" },
  { code: "+966", name: "SAU", flag: "🇸🇦" },
  { code: "+974", name: "QAT", flag: "🇶🇦" },
  { code: "+965", name: "KWT", flag: "🇰🇼" },
  { code: "+968", name: "OMN", flag: "🇴🇲" },
].sort((a, b) => a.name.localeCompare(b.name));

const INDUSTRIES = [
  "Manufacturing",
  "Retail & E-commerce",
  "Wholesale & Distribution",
  "Professional Services",
  "Healthcare",
  "Construction & Real Estate",
  "Education",
  "Food & Beverage",
  "Technology & IT",
  "Agriculture",
  "Non-Profit",
  "Logistics & Supply Chain",
  "Other"
];

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    requestType: "Book Free Consultation",
    erpPreference: "Odoo",
    firstName: "",
    lastName: "",
    countryCode: "+1",
    countryFlag: "🇺🇸",
    mobile: "",
    email: "",
    companyName: "",
    industry: "",
    companyAddress: "",
    businessNeeds: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct submission to Web3Forms so you don't need backend environment variables
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "3c8d12ca-985c-449e-8eb3-cec4944e54a4",
          subject: `New ERP Lead: ${formData.firstName} ${formData.lastName} - ${formData.companyName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          replyto: formData.email,
          First_Name: formData.firstName,
          Last_Name: formData.lastName,
          Email: formData.email,
          Mobile: `${formData.countryCode} ${formData.mobile}`,
          Company: formData.companyName,
          Industry: formData.industry,
          Location: formData.companyAddress,
          Request_Type: formData.requestType,
          ERP_Preference: formData.erpPreference,
          Business_Needs: formData.businessNeeds || 'N/A'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        navigate('/thank-you');
      } else {
        console.error("Failed to submit form.");
        alert("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      <SEO 
        title="Contact Us | Manomay Global Solutions" 
        description="Book a free consultation with our ERP experts at Manomay Global Solutions. Let's discuss your next NetSuite or Odoo implementation project." 
      />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-50 border border-slate-200 text-brand text-sm sm:text-base font-bold uppercase tracking-widest mb-8 sm:mb-10 shadow-sm">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] font-jakarta break-words">
              Your Journey to Efficiency <br />
              <span className="font-display italic font-normal text-brand text-3xl sm:text-5xl lg:text-6xl">Starts with a Conversation.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed max-w-lg">
              Book a free consultation with our ERP experts. We'll help you define your roadmap, optimize your workflows, and choose the right solutions for your growth.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 shadow-sm text-brand">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 pr-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 break-words">sales@manomayglobalsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 shadow-sm text-brand">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest mb-1">Follow Us</h3>
                  <a href="https://www.linkedin.com/company/manomay-global" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg md:text-xl font-bold text-slate-900 hover:text-brand transition-colors">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Dropdown */}
              <div>
                <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">I want to...</label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none font-medium text-sm sm:text-base"
                >
                  <option>Book Free Consultation</option>
                  <option>Consult with an expert</option>
                  <option>Schedule a Demo</option>
                </select>
              </div>

              {/* ERP Preference Radio */}
              <div>
                <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-3">Preferred ERP</label>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {["Odoo", "NetSuite"].map((erp) => (
                    <label key={erp} className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="erpPreference"
                        value={erp}
                        checked={formData.erpPreference === erp}
                        onChange={handleChange}
                        className="w-5 h-5 sm:w-6 sm:h-6 text-brand border-slate-300 focus:ring-brand"
                      />
                      <span className={`text-base sm:text-lg font-bold transition-colors ${formData.erpPreference === erp ? 'text-brand' : 'text-slate-500 group-hover:text-slate-700'}`}>
                        {erp}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Mobile Number</label>
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-auto min-w-[70px] sm:min-w-[90px] bg-white border border-slate-200 rounded-xl px-2 sm:px-3 py-3 sm:py-4 text-slate-900 flex items-center justify-between gap-1 sm:gap-2 hover:border-brand/40 transition-all focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <span className="flex items-center gap-1 sm:gap-2">
                        <span className="text-sm sm:text-base">{formData.countryFlag}</span>
                        <span className="font-bold text-sm sm:text-base">{formData.countryCode}</span>
                      </span>
                      <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-400 transition-transform flex-shrink-0 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isCountryDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsCountryDropdownOpen(false)} />
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl z-20 py-2 max-h-64 overflow-y-auto">
                          {COUNTRIES.map((country, idx) => (
                            <button
                              key={`${country.name}-${idx}`}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, countryCode: country.code, countryFlag: country.flag }));
                                setIsCountryDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 hover:bg-slate-50 flex items-center gap-3 text-left transition-colors"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm font-semibold text-slate-700 w-12">{country.code}</span>
                              <span className="text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="000-000-0000"
                    className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg"
                />
              </div>

              {/* Company Info */}
              <div className="space-y-4 sm:space-y-6 pt-2">
                <div>
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enterprises Ltd."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Industry</label>
                  <div className="relative">
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg appearance-none"
                    >
                      <option value="" disabled>Select Industry</option>
                      {INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Company Address</label>
                  <textarea
                    name="companyAddress"
                    required
                    rows={3}
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Street, City, State, ZIP"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2">Business Needs / Introduction (Optional)</label>
                  <textarea
                    name="businessNeeds"
                    rows={4}
                    value={formData.businessNeeds}
                    onChange={handleChange}
                    placeholder="Briefly describe your business needs or provide an introduction..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all font-medium text-sm sm:text-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white py-5 rounded-xl font-bold text-lg hover:bg-brand/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Inquiry Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Submit Inquiry
                  </span>
                )}
              </button>
              
              <p className="text-center text-sm font-medium text-slate-400">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
