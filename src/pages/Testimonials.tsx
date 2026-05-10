import { motion } from "framer-motion"
import { testimonials } from "../data/mockData"
import { Testimonial } from "../types"
import { Quote, Star, CheckCircle } from "lucide-react"

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Patient Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from patients who have trusted us with their health. We take pride in every success story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.concat(testimonials).map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-[3rem] border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all relative group"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full shadow-lg border-2 border-background">
                    <CheckCircle size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Verified Patient</p>
                </div>
              </div>

              <div className="flex text-amber-400 gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-8 pt-8 border-t border-border flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Treatment: {index % 2 === 0 ? "Cardiology" : "Dermatology"}</span>
                <span>2 weeks ago</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="mt-32 p-12 md:p-20 bg-muted/30 rounded-[4rem] border border-border text-center space-y-8">
          <h2 className="text-4xl font-bold">Video Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-video bg-background rounded-[2.5rem] border border-border overflow-hidden relative group cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800`} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  alt="Video thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
