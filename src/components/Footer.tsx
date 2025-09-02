import { Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-4">
                <span className="gradient-text">WoW</span>
                <span className="text-foreground">Animations</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                We are a cutting-edge 3D animation studio dedicated to bringing dreams to life 
                through stunning visual storytelling and technical excellence.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                hello@wowanimations.com
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                Los Angeles, CA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Connect With Us</h3>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>

            <div className="glass rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get the latest updates on our projects and industry insights.
              </p>
              <button className="w-full bg-gradient-to-r from-primary to-accent text-background text-sm font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} WoWAnimations. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">
                Made with passion for 3D animation ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;