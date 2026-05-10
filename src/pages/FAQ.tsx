import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Search, MessageCircle } from "lucide-react"
import { faqs } from "../data/mockData"

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">How Can We Help?</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services, appointments, and hospital policies.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-border rounded-[2rem] overflow-hidden bg-card hover:border-primary/30 transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between group"
                >
                  <span className="text-xl font-bold pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? "bg-primary text-white" : "bg-muted group-hover:bg-primary/10 group-hover:text-primary"}`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 text-lg text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-[3rem] border border-dashed border-border">
              <p className="text-xl text-muted-foreground">No matching questions found.</p>
              <button onClick={() => setSearchQuery("")} className="mt-4 text-primary font-bold">Clear Search</button>
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Still have questions?</h2>
            <p className="text-primary-foreground/80 text-lg">Can't find the answer you're looking for? Please chat with our team.</p>
          </div>
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-xl">
            <MessageCircle size={24} />
            Contact Support
          </button>
        </div>
      </div>
    </motion.div>
  )
}
