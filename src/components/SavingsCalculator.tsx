import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function SavingsCalculator() {
  const [revenue, setRevenue] = useState(50); // In Millions
  const [efficiency, setEfficiency] = useState(15); // Percentage

  const annualSavings = (revenue * 1000000 * (efficiency / 100) * 0.12).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-jakarta tracking-tight text-center">
            ROI <span className="font-display italic font-normal text-brand text-3xl sm:text-4xl lg:text-5xl ml-2">Calculator.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how much you could save by automating manual tasks, eliminating double data entry, and unifying your operations with a modern ERP implementation.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">
                  <span>Annual Company Revenue</span>
                  <span className="text-brand text-lg">${revenue}M</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={revenue}
                  onChange={(e) => setRevenue(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <p className="text-xs text-slate-400 mt-2">Adjust to match your estimated yearly revenue.</p>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">
                  <span>Expected Efficiency Gain</span>
                  <span className="text-brand text-lg">{efficiency}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={efficiency}
                  onChange={(e) => setEfficiency(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <p className="text-xs text-slate-400 mt-2">Average time saved through system automation.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              <div className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">Projected Annual Savings</div>
              <motion.div
                key={annualSavings}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 overflow-hidden text-ellipsis whitespace-nowrap px-1"
              >
                ${annualSavings}
              </motion.div>
              <div className="text-brand font-semibold text-sm mb-8">from reduced operational costs</div>
              
                  <Link to="/contact" className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 active:scale-95">
                    <Calculator className="w-5 h-5" />
                    Get a Detailed Estimate
                  </Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-start gap-4 text-slate-500 text-sm">
            <RefreshCw className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              * This is a simplified estimate. Actual savings often come from multiple areas: lowering IT maintenance costs, reducing inventory holding costs, improving invoice collection speed, and avoiding headcount additions through automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
