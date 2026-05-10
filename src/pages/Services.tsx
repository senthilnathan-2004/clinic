import { useState } from "react"
import { motion } from "framer-motion"
import { services } from "../data/mockData"
import { Service } from "../types"
import { Search, Stethoscope, Activity, Sparkles, Baby, Ambulance, Microscope, ArrowRight } from "lucide-react"

const iconMap: any = {
  Stethoscope,
  Activity,
  Sparkles,
  Baby,
  Ambulance,
  Microscope,
}

const categories = ["All", "General", "Specialized", "Aesthetics", "Urgent"]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Our Premium Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a comprehensive range of medical solutions designed for your health and comfort.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-muted/30 p-8 rounded-[2.5rem] border border-border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-background border border-border hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service: Service, index: number) => {
              const Icon = iconMap[service.icon] || Activity
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Premium Equipment", "Expert Doctors", "Careful Diagnosis"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    Learn More <ArrowRight size={20} />
                  </button>
                </motion.div>
              )
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-muted-foreground">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
