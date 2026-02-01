import { Check, Cog, Shield, Clock, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Advanced Technology",
    description: "State-of-the-art Ball Mills, Raymond Mills, Micronizers & 28 Roller Machines",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Strict quality control with in-house laboratory testing at every stage",
  },
  {
    icon: Award,
    title: "Custom Micron Sizes",
    description: "Ultra-fine to coarse grades available as per customer requirements",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient logistics ensuring on-time delivery across India",
  },
  {
    icon: Truck,
    title: "Competitive Pricing",
    description: "Best value for premium quality products with flexible payment terms",
  },
  {
    icon: Check,
    title: "15+ Years Experience",
    description: "Trusted expertise in mineral grinding and quality standards",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Industrial manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-heading font-bold mb-1">15+</div>
              <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Why Choose Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Your Trusted Partner in Mineral Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Stonex Enterprises, we combine decades of expertise with modern technology to deliver the finest mineral products that meet your exact specifications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
