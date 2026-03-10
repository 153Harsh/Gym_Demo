import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tighter">
                FITZONE <span className="text-primary">GYM</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience the best in fitness. We provide state-of-the-art facilities, expert trainers, and a supportive community to help you reach your goals.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Class Schedule</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Fitness Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Fitness St, Muscle City, MC 90210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>hello@fitzonegym.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© 2026 FitZone Gym. All rights reserved. Built for champions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;