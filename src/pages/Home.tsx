import { motion } from "framer-motion"
import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import ServicesPreview from "@/components/sections/ServicesPreview"
import DoctorsPreview from "@/components/sections/DoctorsPreview"
import TestimonialsPreview from "@/components/sections/TestimonialsPreview"
import FAQPreview from "@/components/sections/FAQPreview"
import ContactCTA from "@/components/sections/ContactCTA"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <Stats />
      <WhyChooseUs />
      <ServicesPreview />
      <DoctorsPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <ContactCTA />
    </motion.div>
  )
}
