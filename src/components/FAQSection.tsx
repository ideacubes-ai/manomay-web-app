import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What industries does Manomay serve?",
    answer: "We primarily serve the retail, e-commerce, manufacturing, IT & professional services, and CRM/Helpdesk sectors. We also have a very strong footprint in the global insurance space (InsurTech) across the Caribbean, US, and other markets.",
  },
  {
    question: "How long does an Odoo implementation take?",
    answer: "Depending on the complexity and the level of custom module development or hardware integration needed, a standard Odoo implementation takes between 3 to 6 months for mid-size enterprises.",
  },
  {
    question: "Do you provide hardware integrations like Datalogic scales for POS?",
    answer: "Yes, we are experts in hardware-to-software bridging and offer our highly-rated om_datalogic module to integrate the Magellan 9400i series via IoT boxes perfectly with Odoo.",
  },
  {
    question: "What is your main technology stack for enterprise solutions?",
    answer: "We specialize in end-to-end implementations of Odoo ERP and Oracle NetSuite. Our team is also highly proficient in building modern scalable applications, custom modules, and ensuring robust AI and data architecture aligned with business goals.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-jakarta mb-4">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Find quick answers about our ERP implementation process and industry expertise.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                <span className="text-brand shrink-0">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
