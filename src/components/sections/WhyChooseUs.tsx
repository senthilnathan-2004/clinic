import { motion } from "framer-motion"
import { Award, Clock, Heart, ShieldCheck, Zap, UserCheck } from "lucide-react"

const features = [
  {
    title: "Expert Medical Team",
    description: "Our doctors are world-renowned specialists with decades of experience in their respective fields.",
    icon: <UserCheck className="w-8 h-8" />,
    size: "lg",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "24/7 Availability",
    description: "Always here when you need us most.",
    icon: <Clock className="w-6 h-6" />,
    size: "sm",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Advanced Technology",
    description: "Latest diagnostic tools for accurate results.",
    icon: <Zap className="w-6 h-6" />,
    size: "sm",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Personalized Care Plans",
    description: "We believe every patient is unique. Our treatment plans are tailored specifically to your needs and lifestyle for the best outcomes.",
    icon: <Heart className="w-8 h-8" />,
    size: "lg",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Premium Facilities",
    description: "Luxury rooms and comfortable waiting areas.",
    icon: <Award className="w-6 h-6" />,
    size: "sm",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Certified Safety",
    description: "Highest standards of clinical hygiene.",
    icon: <ShieldCheck className="w-6 h-6" />,
    size: "sm",
    color: "bg-cyan-500/10 text-cyan-500",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Why Choose LuminaHealth?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a unique blend of medical expertise and luxury hospitality to ensure your journey to health is comfortable and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2rem] border border-border bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${
                feature.size === "lg" ? "md:col-span-2" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="w-24 h-24 bg-primary rounded-full blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
