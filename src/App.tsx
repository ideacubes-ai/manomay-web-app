/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NetSuite from "./pages/NetSuite";
import Odoo from "./pages/Odoo";
import OdooPOS from "./pages/OdooPOS";
import Contact from "./pages/Contact";
import RetailEcommerce from "./pages/RetailEcommerce";
import Manufacturing from "./pages/Manufacturing";
import ITProfessionalServices from "./pages/ITProfessionalServices";
import CRMHelpDesk from "./pages/CRMHelpDesk";
import WhyManomay from "./pages/WhyManomay";
import OdooModulesExplorer from "./pages/OdooModulesExplorer";
import ThankYou from "./pages/ThankYou";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netsuite-implementations" element={<NetSuite />} />
          <Route path="/odoo-implementations" element={<Odoo />} />
          <Route path="/odoo-modules" element={<OdooModulesExplorer />} />
          <Route path="/solutions/odoo-pos" element={<OdooPOS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/it-professional-services" element={<ITProfessionalServices />} />
          <Route path="/industries/crm-helpdesk" element={<CRMHelpDesk />} />
          <Route path="/why-manomay" element={<WhyManomay />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
