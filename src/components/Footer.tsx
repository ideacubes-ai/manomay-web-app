import { Mail, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Architecting high-performance ERP ecosystems for global enterprises. Official Odoo & NetSuite Implementation Partner.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/manomay-global" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-brand hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter Profile" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-brand hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              {["Agile Implementation", "Financial Orchestration", "Supply Chain Velocity", "Custom Development", "Global Support"].map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-slate-500 hover:text-brand text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Industries", "Modules", "Advantage"].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(" ", "")}`} className="text-slate-500 hover:text-brand text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
              <li>
                <Link to="/solutions/odoo-pos" className="text-slate-500 hover:text-brand text-sm transition-colors font-bold">Odoo POS Solutions</Link>
              </li>
              <li>
                <a href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand text-sm transition-colors font-bold">Odoo Price Calculator</a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-brand text-sm transition-colors font-bold">Free Consultation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm font-bold">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                info@manomayglobalsolutions.com
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm font-bold">
                <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (888) 466-2666<br />
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm font-bold">
                <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong>Headquarters:</strong><br />
                  Texas, USA
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-bold pt-2">
                <Linkedin className="w-5 h-5 text-brand" />
                <a href="https://www.linkedin.com/company/manomay-global" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">LinkedIn Profile</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm font-medium">
            © {(new Date()).getFullYear()} Manomay Global Solutions. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-brand text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-brand text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
