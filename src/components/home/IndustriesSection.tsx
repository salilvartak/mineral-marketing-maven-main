import { Palette, Pipette, CircleDot, GlassWater, Tractor, Building2, FileText, Pill } from "lucide-react";

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
    icon: CircleDot,
    name: "Rubber Industry",
    description: "Reinforcing filler for flexibility & durability",
  },
  {
    icon: GlassWater,
    name: "Glass & Ceramics",
    description: "Stabilizer & flux for quality improvement",
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
    icon: FileText,
    name: "Paper Industry",
    description: "Coating pigment for brightness & smoothness",
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
            Our premium mineral products find applications across a wide range of industries, delivering quality and consistency.
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
