import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            India's Leading <span className="text-accent">Manufacturer & Supplier</span>{" "}
            of Premium Mineral Fillers & Extenders
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium quality Quartz Powder, Quartz Grits, Calcite Powder, Dolomite Powder and Dolomite Grits for Slab, Paint, Plastic, Rubber, Glass, Agriculture & Construction Industries. Serving excellence from Rajasthan. We also manufacturing Coated Dolomite Powder and Coated Calcite Powder & Pebble’s.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" asChild>
              <Link to="/infrastructure" className="gap-2">
                <MapPin className="h-5 w-5" />
                Direct Location
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products" className="gap-2">
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
