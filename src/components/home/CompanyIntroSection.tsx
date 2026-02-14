import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CompanyIntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
              About Stonex Enterprises
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Manufacturing Excellence Since 2011
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="font-bold">STONEX ENTERPRISES</span> is India's leading Manufacturer and Supplier of Premium Quality Mineral Filler and Extender such as Quartz Powder, Quartz Grits, Calcite Powder, Dolomite Powder and Dolomite Grits, which are widely use in key industries such as Slab (Countertop), Paints, Plastic (Pipes ,PVC, Cables), Rubber, Detergents, Polymers, Agriculture, Glass, Ceramic, Pharmaceutical and Construction for their Excellent Physico-Mechanical Properties. We also manufacturing Coated Dolomite Powder and Coated Calcite Powder with Stearic acid coating for enhancing Minerals Properties (Moisture Resistance and Polymer Compatibility) and various type of Pebble’s.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
              alt="Stonex manufacturing facility"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
