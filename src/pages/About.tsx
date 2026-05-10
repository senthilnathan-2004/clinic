import { motion } from "framer-motion"
import { Shield, Target, Eye } from "lucide-react"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Legacy of Care</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2010, LuminaHealth has been at the forefront of medical innovation, providing world-class healthcare with a human touch.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">A Vision for Better Living</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey started with a simple belief: that healthcare should be as comfortable as it is effective. We've spent over a decade building a sanctuary where patients can receive the highest level of medical care in an environment that promotes peace and healing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, LuminaHealth is recognized globally for its excellence in specialized treatments and its commitment to patient-centric care.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Awards Won</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Patient Focus</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Clinic Story" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-morphism p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-2xl font-bold text-primary mb-1">2010</p>
              <p className="text-muted-foreground font-medium">Year Established</p>
            </div>
          </motion.div>
        </div>

        {/* Mission/Vision/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <ValueCard
            icon={<Target className="w-8 h-8 text-primary" />}
            title="Our Mission"
            description="To provide exceptional clinical care through innovative technology and compassionate service."
          />
          <ValueCard
            icon={<Eye className="w-8 h-8 text-primary" />}
            title="Our Vision"
            description="To be the global benchmark for luxury healthcare and personalized medical excellence."
          />
          <ValueCard
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="Our Values"
            description="Integrity, excellence, and patient well-being are at the core of everything we do."
          />
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2 space-y-12 pb-12">
            <TimelineItem year="2010" title="Clinic Founded" description="Started with a small team of 5 expert doctors." />
            <TimelineItem year="2015" title="International Recognition" description="Awarded for excellence in surgical procedures." />
            <TimelineItem year="2020" title="Digital Transformation" description="Implemented AI-driven diagnostic systems." />
            <TimelineItem year="2026" title="Leading Healthcare Hub" description="Trusted by over 15,000 satisfied patients." />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ValueCard({ icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:shadow-xl transition-all text-center space-y-4">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function TimelineItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="relative pl-12 md:pl-0">
      <div className="absolute left-[-9px] md:left-[-9px] top-0 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
      <div className="md:w-1/2 md:ml-auto md:pl-12">
        <div className="p-8 rounded-3xl bg-muted/30 border border-border">
          <span className="text-primary font-bold text-lg mb-2 block">{year}</span>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
