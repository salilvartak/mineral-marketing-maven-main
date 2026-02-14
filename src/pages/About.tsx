import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, Award, Users, Factory, Cog, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const machinery = [
  { category: "Grinding Mills", items: ["Ball Mills","Micronizer","28 Roller with Classifier"] },
  { category: "Processing Equipment", items: [ "Gitti Sorting Machine", "Automatic Grits Colour Shorter Machine","Magnetic Shorting Machine"] },
  { category: "Coating Equipment", items: ["Automatic Powder Coating Machines", "Surface Treatment Units"] },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Welcome Message */}
        <section className="pt-40 pb-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Welcome to Stonex Enterprises
              </h1>
              <p className="text-xl text-primary-foreground/90">
                India's leading manufacturer of premium mineral Fillers & Extenders with over 15 years of expertise
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Company Overview</span>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Pioneering Quality Since 2011
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  We are one of the leading Manufacturer and Supplier of Premium Quality Minerals Filler and Extender like Quartz Powder, Quartz Grits, Calcite Powder, Dolomite Powder, Dolomite Grits, Coated Calcite and Coated Dolomite powder  in Rajasthan, India.Our product’s serve in various Industries such as Paints, Plastic (Pipes ,PVC, Cables), Rubber, Detergents, Polymers, Agriculture, Glass, Ceramic, Slab (Countertop), Construction and Fertilizer.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-card rounded-full overflow-hidden shadow-xl mx-auto">
                  <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                    <img src="https://i.ibb.co/1JXrYjVZ/Founder.jpg"></img>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-xl">
                  <div className="text-sm font-semibold text-center">15+ Years Experience</div>
                </div>
              </div>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Our Founder</span>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Mr. Rajesh Doot
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founder & Managing Director
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our Company was established by RAJESH DOOT in 2011, over 15 years of experience in various industrial minerals as well as expertise in mineral grinding, mining and maintaining high quality standard of product. We operate multiple factories across Rajasthan. For achieving High Quality Standard we operate advance production unit equipped with Ball Mills, Micronizer, 28 Roller with Classifier Machine, Automatic Grits Colour Shorter Machine, Gitti Shorting Machine,
Magnetic Shorting Machine, Powder Coating Machine, and Pebbles Machine. Our success can be largely credited to our skilled, disciplined & motivated employees, who continuously & collectively strive to deliver the best. Today we have a production capacity of more than 180000 MT per Annum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be India's most trusted and preferred industrial mineral solutions provider, known for quality, innovation, and customer satisfaction across diverse industries.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Cog className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver consistent, high-quality industrial mineral products through advanced technology, sustainable practices, and a commitment to meeting our customers' unique requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Our Equipment</span>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">State-of-the-Art Machinery</h2>
              <p className="text-muted-foreground">
                We utilize the latest indigenous and imported machinery to ensure consistent quality
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {machinery.map((group) => (
                <div key={group.category} className="bg-card p-6 rounded-lg shadow-md">
                  <h4 className="font-heading font-bold text-lg text-foreground mb-4 pb-4 border-b border-border">
                    {group.category}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Production Capacity */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  180,000+ MT
                </div>
                <p className="text-primary-foreground/70">Annual Production</p>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  8
                </div>
                <p className="text-primary-foreground/70">Plants</p>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  2
                </div>
                <p className="text-primary-foreground/70">Mines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Proof */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Facilities</h2>
              <p className="text-muted-foreground">
                A glimpse of our plants, warehouses, and mining operations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="Manufacturing Plant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Warehouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Mining Operations"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {["Quality Excellence", "Customer Focus", "Innovation", "Sustainability", "Integrity"].map((value) => (
                <div key={value} className="bg-card p-6 rounded-lg text-center shadow-md hover-lift">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">{value}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-6">
              Want to know more about our facilities?
            </h2>
            <Button variant="cta" size="lg" asChild>
              <Link to="/infrastructure">View Infrastructure</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
