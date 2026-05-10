import { Service, Doctor, Testimonial, Stat, FAQ, BlogPost } from "../types"
import doctor1 from "../assets/doctor-1.png"
import doctor2 from "../assets/doctor-2.png"
import doctor3 from "../assets/doctor-3.png"
import blog1 from "../assets/blog-1.jpg"
import blog2 from "../assets/blog-2.jpg"
import test1 from "../assets/testimonial-1.jpg"
import test2 from "../assets/testimonial-2.jpg"

export const services: Service[] = [
  {
    id: "1",
    title: "General Consultation",
    description: "Comprehensive health check-ups and medical advice from our expert general practitioners.",
    icon: "Stethoscope",
    category: "General",
  },
  {
    id: "2",
    title: "Dental Care",
    description: "Advanced dental treatments including cleaning, whitening, and restorative procedures.",
    icon: "Activity",
    category: "Specialized",
  },
  {
    id: "3",
    title: "Skin Treatment",
    description: "Premium dermatological services for healthy, glowing skin using the latest technology.",
    icon: "Sparkles",
    category: "Aesthetics",
  },
  {
    id: "4",
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents in a friendly environment.",
    icon: "Baby",
    category: "General",
  },
  {
    id: "5",
    title: "Emergency Care",
    description: "24/7 urgent medical assistance for critical health situations with rapid response.",
    icon: "Ambulance",
    category: "Urgent",
  },
  {
    id: "6",
    title: "Diagnostics",
    description: "State-of-the-art laboratory and imaging services for accurate medical diagnosis.",
    icon: "Microscope",
    category: "Specialized",
  },
]

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    specialization: "Chief Cardiologist",
    experience: "15+ Years",
    image: doctor1,
    availability: "Available",
    timing: "Mon - Fri, 09:00 - 17:00",
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    specialization: "Senior Dermatologist",
    experience: "12+ Years",
    image: doctor2,
    availability: "Available",
    timing: "Tue - Sat, 10:00 - 18:00",
  },
  {
    id: "3",
    name: "Dr. Emily Chen",
    specialization: "Pediatric Specialist",
    experience: "10+ Years",
    image: doctor3,
    availability: "Busy",
    timing: "Mon - Thu, 08:00 - 16:00",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Anderson",
    role: "Patient",
    content: "The level of care and professionalism at this clinic is unmatched. The luxury environment makes a huge difference in the healing process.",
    rating: 5,
    image: test1,
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Patient",
    content: "I've never felt so comfortable in a hospital setting. The staff is incredibly attentive and the facilities are world-class.",
    rating: 5,
    image: test2,
  },
]

export const stats: Stat[] = [
  { label: "Patients Treated", value: 15000, suffix: "+" },
  { label: "Expert Doctors", value: 45, suffix: "" },
  { label: "Years Experience", value: 20, suffix: "+" },
  { label: "Positive Reviews", value: 98, suffix: "%" },
]

export const faqs: FAQ[] = [
  {
    question: "What are your operating hours?",
    answer: "We are open 24/7 for emergency services. Our general consultation hours are Monday to Saturday, 8:00 AM to 8:00 PM.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website's appointment page or by calling our reception desk directly.",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Importance of Regular Health Screenings",
    excerpt: "Learn why preventive care is the cornerstone of a long and healthy life.",
    date: "May 10, 2026",
    image: blog1,
    category: "Health Tips",
  },
  {
    id: "2",
    title: "Advanced Skin Care Routines for 2026",
    excerpt: "Discover the latest dermatological breakthroughs for perfect skin.",
    date: "May 05, 2026",
    image: blog2,
    category: "Skincare",
  },
]
