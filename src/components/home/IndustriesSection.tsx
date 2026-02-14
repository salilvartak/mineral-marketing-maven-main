import { Description } from "@radix-ui/react-toast";
import { Palette, Pipette, CircleDot, GlassWater, Tractor, Building2, FileText, Pill, icons } from "lucide-react";

const industries = [
  {
    icon: Palette,
    name: "Paints & Coatings",
    description: "Brightness, opacity & durability enhancement",
  },
  {
    icon: Pipette,
    name: "Plastics & Polymers",
    description: "PVC, PE, PP filler for cost reduction",
  },
  {
    icon: Palette,
    name: "Slabs(Countertop)",
    description: ""
  },
  {
    icon: GlassWater,
    name: "Glass",
    description: "Stabilizer & flux for quality improvement",
  },
  {
    icon: GlassWater,
    name: "Ceramics",
    description: "Stabilizer & flux for quality improvement",
  },
  {
    icon: CircleDot,
    name: "Rubber Industry",
    description: "Reinforcing filler for flexibility & durability",
  },
  {
    icon: FileText,
    name: "Paper Industry",
    description: "Coating pigment for brightness & smoothness",
  },
  
  {
    icon: Tractor,
    name: "Agriculture",
    description: "Soil conditioning & fertilizer enhancement",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Building materials & cement additives",
  },
  
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "High purity filler for medical applications",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Industries We Serve</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Powering Diverse Industries
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="font-bold">Stonex Enterprises</span> is a leading Manufacturer and Supplier of Premium Quality Minerals Filler and Extender. We deliver excellent quality products with the use of latest technology and timely delivering to them.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="bg-card p-6 rounded-lg text-center hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
