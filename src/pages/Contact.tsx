import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageCircle, Share2 } from "lucide-react"

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to assist you with any inquiries. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <ContactInfoCard
            icon={<Phone className="text-primary" />}
            title="Call Us"
            details={["+1 (555) 000-1234", "+1 (555) 000-5678"]}
          />
          <ContactInfoCard
            icon={<Mail className="text-primary" />}
            title="Email Us"
            details={["contact@luminahealth.com", "support@luminahealth.com"]}
          />
          <ContactInfoCard
            icon={<MapPin className="text-primary" />}
            title="Visit Us"
            details={["123 Medical Plaza, Luxury District", "New York, NY 10001"]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-10 md:p-16 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
             
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-muted/30 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-muted/30 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-muted/30 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full bg-muted/30 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea placeholder="Your message here..." className="w-full bg-muted/30 border border-border rounded-2xl p-4 min-h-[150px] focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Map and Hours */}
          <div className="space-y-8">
            <div className="h-[400px] bg-muted rounded-[3rem] border border-border overflow-hidden relative group">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1652165000000!5m2!1sen!2sin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Globe size={18} />
                  <span>Interactive Map</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-10 rounded-[3rem] border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="text-primary" /> Operating Hours
              </h3>
              <div className="space-y-4">
                <HourRow day="Monday - Friday" time="08:00 AM - 08:00 PM" />
                <HourRow day="Saturday" time="09:00 AM - 05:00 PM" />
                <HourRow day="Sunday" time="Emergency Only" isSpecial />
              </div>
              
              <div className="mt-10 pt-10 border-t border-border">
                <p className="font-bold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <SocialIcon icon={<MessageCircle />} />
                  <SocialIcon icon={<Share2 />} />
                  <SocialIcon icon={<Globe />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ContactInfoCard({ icon, title, details }: { icon: any; title: string; details: string[] }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-card border border-border text-center space-y-4 hover:shadow-xl transition-all">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-2">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, i) => (
          <p key={i} className="text-muted-foreground font-medium">{detail}</p>
        ))}
      </div>
    </div>
  )
}

function HourRow({ day, time, isSpecial }: { day: string; time: string; isSpecial?: boolean }) {
  return (
    <div className="flex justify-between items-center text-lg">
      <span className="font-medium">{day}</span>
      <span className={isSpecial ? "text-primary font-bold" : "text-muted-foreground"}>{time}</span>
    </div>
  )
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
      {icon}
    </div>
  )
}
