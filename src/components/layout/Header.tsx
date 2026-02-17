import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Product list for the dropdown
const productLinks = [
  { name: "Calcite Powder", slug: "calcite-powder" },
  { name: "Dolomite Powder", slug: "dolomite-powder" },
  { name: "Quartz Powder", slug: "quartz-powder" },
  { name: "Quartz Grits", slug: "quartz-grits" },
  { name: "Talc Powder", slug: "talc-powder" },
  { name: "Coated Calcite", slug: "coated-calcite" },
  { name: "Coated Dolomite", slug: "coated-dolomite" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileAppOpen, setIsMobileAppOpen] = useState(false); // State for mobile accordion
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path: string) => location.pathname === path;
  // Helper to check if any application page is active
  const isAppActive = location.pathname.includes("/applications");

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@stonexenterprises.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@stonexenterprises.com</span>
            </a>
          </div>
          <p className="text-primary-foreground/80">India's Trusted Mineral Manufacturer Since 2011</p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#0d293f] backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="https://i.ibb.co/PvKQSV65/STONEX-NEW-BLUE-1.png" alt="StoneX Enterprises Logo" className="h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className={cn("font-medium transition-colors relative py-2", isActive("/") ? "text-accent" : "text-white hover:text-accent")}>
                Home
              </Link>
              
              <Link to="/about" className={cn("font-medium transition-colors relative py-2", isActive("/about") ? "text-accent" : "text-white hover:text-accent")}>
                About Us
              </Link>

              <Link to="/products" className={cn("font-medium transition-colors relative py-2", isActive("/products") ? "text-accent" : "text-white hover:text-accent")}>
                Products
              </Link>

              {/* APPLICATIONS DROPDOWN */}
              <div className="relative group h-full flex items-center">
                <button 
                  className={cn(
                    "flex items-center gap-1 font-medium transition-colors py-2 focus:outline-none",
                    isAppActive ? "text-accent" : "text-white hover:text-accent"
                  )}
                >
                  Applications
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px]">
                  <div className="bg-white rounded-lg shadow-xl border border-border/10 overflow-hidden py-2">
                    {productLinks.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}/applications`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/infrastructure" className={cn("font-medium transition-colors relative py-2", isActive("/infrastructure") ? "text-accent" : "text-white hover:text-accent")}>
                Infrastructure
              </Link>

              <Link to="/contact" className={cn("font-medium transition-colors relative py-2", isActive("/contact") ? "text-accent" : "text-white hover:text-accent")}>
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={cn("block py-3 font-medium border-b border-border/50", isActive("/") ? "text-accent" : "text-foreground")}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={cn("block py-3 font-medium border-b border-border/50", isActive("/about") ? "text-accent" : "text-foreground")}>
                About Us
              </Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className={cn("block py-3 font-medium border-b border-border/50", isActive("/products") ? "text-accent" : "text-foreground")}>
                Products
              </Link>

              {/* Mobile Applications Accordion */}
              <div className="border-b border-border/50">
                <button 
                  onClick={() => setIsMobileAppOpen(!isMobileAppOpen)}
                  className={cn("flex w-full items-center justify-between py-3 font-medium", isAppActive ? "text-accent" : "text-foreground")}
                >
                  Applications
                  <ChevronDown className={cn("h-5 w-5 transition-transform", isMobileAppOpen ? "rotate-180" : "")} />
                </button>
                
                {isMobileAppOpen && (
                  <div className="bg-muted/30 rounded-lg mb-3 overflow-hidden">
                    {productLinks.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}/applications`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-accent border-l-2 border-transparent hover:border-accent hover:bg-accent/5 transition-all"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/infrastructure" onClick={() => setIsMenuOpen(false)} className={cn("block py-3 font-medium border-b border-border/50", isActive("/infrastructure") ? "text-accent" : "text-foreground")}>
                Infrastructure
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={cn("block py-3 font-medium border-b border-border/50", isActive("/contact") ? "text-accent" : "text-foreground")}>
                Contact Us
              </Link>

              <div className="pt-4">
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};