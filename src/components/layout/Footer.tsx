import { Link } from "react-router-dom"
import { HeartPulse, Mail, Phone, MapPin, MessageCircle, Share2, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <HeartPulse size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Lumina<span className="text-primary">Health</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Experience world-class healthcare in a luxury environment. We combine advanced medical technology with personalized care to ensure your well-being.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<MessageCircle size={20} />} href="#" />
              <SocialLink icon={<Share2 size={20} />} href="#" />
              <SocialLink icon={<Globe size={20} />} href="#" />
              <SocialLink icon={<HeartPulse size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Our Services</FooterLink>
              <FooterLink to="/doctors">Our Doctors</FooterLink>
              <FooterLink to="/appointment">Book Appointment</FooterLink>
              <FooterLink to="/blog">Health Tips</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>123 Medical Plaza, Luxury District,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contact@luminahealth.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get latest health tips and clinic updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-background border border-border rounded-xl px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="button"
                className="bg-primary text-white px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 LuminaHealth. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
    >
      {icon}
    </a>
  )
}
