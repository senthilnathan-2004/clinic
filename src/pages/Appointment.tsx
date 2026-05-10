import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, Stethoscope, MessageSquare, ArrowRight, Activity } from "lucide-react"

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const SuccessPopup = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-card w-full max-w-lg rounded-[3rem] p-12 text-center shadow-2xl border border-border">
        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold mb-4">Appointment Confirmed!</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Thank you, {formData.name}. Your appointment for {formData.service} has been successfully booked. We've sent a confirmation email to {formData.email}.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
          }}
          className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
        >
          Close
        </button>
      </div>
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 relative"
    >
      <AnimatePresence>
        {submitted && <SuccessPopup />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Book Your Visit</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule your consultation with our premium medical team. Fill in the details, and we'll handle the rest.
            </p>
          </div>

          <div className="space-y-8">
            <InfoItem icon={<Clock />} title="Flexible Scheduling" desc="Choose a time that works best for your busy lifestyle." />
            <InfoItem icon={<Stethoscope />} title="Expert Diagnosis" desc="Get consultation from world-renowned medical specialists." />
            <InfoItem icon={<CheckCircle2 />} title="Instant Confirmation" desc="Receive immediate booking confirmation via email and SMS." />
          </div>

          <div className="p-8 bg-muted/30 rounded-[2.5rem] border border-border">
            <p className="font-bold mb-2">Need Help Booking?</p>
            <p className="text-muted-foreground">Call our dedicated concierge line for personalized assistance.</p>
            <p className="text-2xl font-bold text-primary mt-4">+1 (555) 000-1234</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-card p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Full Name" icon={<User size={18} />} placeholder="John Doe" value={formData.name} onChange={(v: string) => setFormData({...formData, name: v})} />
              <InputGroup label="Phone Number" icon={<Phone size={18} />} placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} />
            </div>

            <InputGroup label="Email Address" icon={<Mail size={18} />} type="email" placeholder="john@example.com" value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectGroup
                label="Select Doctor"
                icon={<Stethoscope size={18} />}
                options={["Dr. Sarah Mitchell", "Dr. James Wilson", "Dr. Emily Chen"]}
                value={formData.doctor}
                onChange={(v: string) => setFormData({...formData, doctor: v})}
              />
              <SelectGroup
                label="Service Required"
                icon={<Activity size={18} />}
                options={["General Consultation", "Dental Care", "Skin Treatment", "Pediatrics"]}
                value={formData.service}
                onChange={(v: string) => setFormData({...formData, service: v})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Date" icon={<Calendar size={18} />} type="date" value={formData.date} onChange={(v: string) => setFormData({...formData, date: v})} />
              <InputGroup label="Preferred Time" icon={<Clock size={18} />} type="time" value={formData.time} onChange={(v: string) => setFormData({...formData, time: v})} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1 flex items-center gap-2">
                <MessageSquare size={16} /> Additional Message
              </label>
              <textarea
                placeholder="How can we help you?"
                className="w-full bg-muted/30 border border-border rounded-2xl p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group active:scale-95"
            >
              Confirm Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

function InfoItem({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function InputGroup({ label, icon, placeholder, value, onChange, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-muted/30 border border-border rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  )
}

function SelectGroup({ label, icon, options, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <select
        className="w-full bg-muted/30 border border-border rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        <option value="">Select an option</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )
}
