import { motion } from "framer-motion"
import { testimonials } from "../../data/mockData"
import { Testimonial } from "../../types"
import { Quote, Star } from "lucide-react"

export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Voices of Trust</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read what our patients have to say about their experience with LuminaHealth's premium medical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism p-10 rounded-[2.5rem] relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex text-amber-400 gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg leading-relaxed italic text-foreground/80">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
