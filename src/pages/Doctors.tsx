import { useState } from "react"
import { motion } from "framer-motion"
import { doctors } from "../data/mockData"
import { Doctor } from "../types"
import { Search, Filter, Calendar, Star, MessageCircle, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDoctors = doctors.filter((doctor) => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">Our Expert Doctors</h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Meet our team of world-class specialists dedicated to your health and well-being.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-muted border border-border font-bold hover:bg-muted/80 transition-all">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDoctors.map((doctor: Doctor, index: number) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-[3rem] border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-3 mb-4">
                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                      <MessageCircle size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                      <Calendar size={20} />
                    </button>
                  </div>
                </div>
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-md ${
                  doctor.availability === "Available" ? "bg-green-500/20 text-green-500 border border-green-500/30" : "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                }`}>
                  {doctor.availability}
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-semibold flex items-center gap-2">
                    {doctor.specialization}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Experience</p>
                    <p className="font-bold">{doctor.experience}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Rating</p>
                    <div className="flex items-center gap-1 font-bold">
                      <Star size={14} fill="currentColor" className="text-amber-400" /> 4.9
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>Main Hospital, Floor 3</span>
                </div>

                <Link
                  to="/appointment"
                  className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
