import { motion } from "framer-motion"
import { services } from "../../data/mockData"
import { Service } from "../../types"
import { Stethoscope, Activity, Sparkles, Baby, Ambulance, Microscope, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const iconMap: any = {
  Stethoscope,
  Activity,
  Sparkles,
  Baby,
  Ambulance,
  Microscope,
}

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Specialized Services</h2>
            <p className="text-muted-foreground max-w-xl">
              From general wellness to advanced specialized treatments, we offer a wide range of medical services tailored to your needs.
            </p>
          </div>
          <Link
            to="/services"
            className="group flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Explore All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service: Service, index: number) => {
            const Icon = iconMap[service.icon] || Activity
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
