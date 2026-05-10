import { motion } from "framer-motion"
import { doctors } from "../../data/mockData"
import { Doctor } from "../../types"
import { ArrowRight, Calendar, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function DoctorsPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Meet Our Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of expert physicians is dedicated to providing you with the highest quality medical care in a compassionate environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor: Doctor, index: number) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" />
                  4.9 Rating
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.specialization}</p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Experience</span>
                    <span className="font-bold">{doctor.experience}</span>
                  </div>
                  <Link
                    to="/appointment"
                    className="bg-primary text-white p-3 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    <Calendar size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            View All Doctors
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
