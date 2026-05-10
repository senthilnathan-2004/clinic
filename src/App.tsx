import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/hooks/use-theme"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Doctors from "@/pages/Doctors"
import Appointment from "@/pages/Appointment"
import Testimonials from "@/pages/Testimonials"
import FAQ from "@/pages/FAQ"
import Contact from "@/pages/Contact"
import Blog from "@/pages/Blog"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="clinic-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
