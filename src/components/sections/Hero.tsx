import { motion } from "framer-motion"
import { ArrowRight, Star, ShieldCheck, Activity } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-50" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
          >
            <ShieldCheck size={16} />
            World-Class Luxury Healthcare
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Your Health, Our <span className="text-primary">Masterpiece</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Experience a new standard of personalized medical excellence. LuminaHealth combines cutting-edge technology with premium comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/appointment"
              className="group bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
            >
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-muted px-8 py-4 rounded-2xl font-bold text-lg hover:bg-muted/80 transition-all active:scale-95"
            >
              View Services
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted">
                  <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="Patient" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-muted-foreground">15k+ Satisfied Patients</p>
            </div>
          </motion.div>
        </div>

        {/* Right Visuals */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating UI Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -right-8 top-12 z-20 glass-morphism p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center">
                <Activity size={20} />
              </div>
              <span className="font-bold text-sm">Vital Stats</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-green-500"
                />
              </div>
              <span className="text-[10px] text-muted-foreground">Pulse: 72 BPM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-12 bottom-12 z-20 glass-morphism p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <Star fill="currentColor" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expert Care</p>
                <p className="font-bold">Highly Rated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
