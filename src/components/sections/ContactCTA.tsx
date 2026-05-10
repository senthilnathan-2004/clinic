import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Phone, MessageSquare } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-20 text-white text-center md:text-left">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Ready to Experience Premium Healthcare?
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Join thousands of patients who trust LuminaHealth for their medical needs. Your well-being is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  to="/appointment"
                  className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-xl shadow-black/10"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </Link>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold">+1 (555) 000-1234</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block w-80 h-80 bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-8"
            >
              <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare size={80} className="text-white/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
