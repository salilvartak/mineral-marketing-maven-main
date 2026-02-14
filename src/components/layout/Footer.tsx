import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">Stonex</span>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">Enterprises</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              India's leading manufacturer and supplier of premium quality mineral fillers and extenders since 2011.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Infrastructure", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                { name: "Calcite Powder", id: "calcite-powder" },
                { name: "Dolomite Powder", id: "dolomite-powder" },
                { name: "Quartz Powder", id: "quartz-powder" },
                { name: "Quartz Gritz", id: "quartz-grits" },
                { name: "Dolomite Gritz", id: "dolomite-gritz"},
                { name: "Coated Dolomite Powder", id: "coted-dolomite"},
                
                { name: "Coated Calcite Powder", id: "coated-calcite" },
                { name: "Pebbles", id: "coated-calcite" },
              ].map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  Kotdi, Dariba, Railmagra<br />
                  Dist-Rajsamand, Rajasthan 313211, India
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+91 9928157991</span>
                  <span>+91 9929702991</span>
                  <span>+91 8112290501</span>
                  <span>+91 9414503816</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@stonexenterprises.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>Stonex.enterprises8801@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Stonex Enterprises. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
