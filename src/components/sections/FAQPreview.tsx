import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { faqs } from "../../data/mockData"
import { FAQ } from "../../types"

export default function FAQPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about our medical services and procedures.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? "bg-primary text-white" : "bg-muted"}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
