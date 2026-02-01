import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Mountain, FlaskConical, Warehouse, MapPin, Cog } from "lucide-react";

const mineLocations = [
  { name: "Kotadi, Dariba", minerals: "Quartz, Calcite" },
  { name: "Amet, Rajsamand", minerals: "Dolomite, Calcite" },
  { name: "Makrana", minerals: "Marble, Calcite" },
];

const plants = [
  { name: "Adv Techno Mine and Minerals", location: "Nasirabad" },
  { name: "RD Microns LLP", location: "Nasirabad" },
  { name: "Stonex Enterprises", location: "Nasirabad" },
  { name: "RRR Microns", location: "Nasirabad" },
  { name: "RR Global Industries", location: "Nasirabad" },
];

const machinery = [
  "Ball Mills",
  "Raymond Mills",
  "Micronizer",
  "28 Roller with Classifier",
  "Multi Grain Sorting Machine",
  "Gitti Sorting Machine",
  "Automatic Powder Coating Machines",
];

const Infrastructure = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Our Infrastructure
              </h1>
              <p className="text-xl text-primary-foreground/90">
                World-class facilities and advanced machinery for premium mineral processing
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Scale & Capability
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With multiple strategically located mines, state-of-the-art manufacturing plants, in-house quality control laboratory, and efficient warehousing, Stonex Enterprises has the infrastructure to meet the demands of industries across India and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">3+</div>
                <p className="text-muted-foreground">Mine Locations</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">5+</div>
                <p className="text-muted-foreground">Manufacturing Plants</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">2</div>
                <p className="text-muted-foreground">Warehouse Locations</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">50K+ MT</div>
                <p className="text-muted-foreground">Annual Capacity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mines Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mountain className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">Our Mines</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                {mineLocations.map((mine) => (
                  <div key={mine.name} className="bg-card p-5 rounded-lg shadow-sm flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{mine.name}</h4>
                      <p className="text-muted-foreground text-sm">Minerals: {mine.minerals}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Mining Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Plants & Machinery */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Plants */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Factory className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Manufacturing Plants</h2>
                </div>
                <div className="space-y-3">
                  {plants.map((plant) => (
                    <div key={plant.name} className="bg-card p-4 rounded-lg shadow-sm flex items-center justify-between">
                      <span className="font-medium text-foreground">{plant.name}</span>
                      <span className="text-muted-foreground text-sm">{plant.location}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machinery */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Cog className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Machinery</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {machinery.map((item) => (
                    <div key={item} className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Plant Image */}
            <div className="mt-12 aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=500&fit=crop"
                alt="Manufacturing Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Laboratory */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Quality Control Laboratory</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our in-house laboratory is equipped with advanced testing equipment for rigorous quality control at every production stage. We test for physical properties, chemical composition, particle size distribution, and other critical parameters.
                </p>
                <ul className="space-y-3">
                  {["Particle Size Analysis", "Chemical Composition Testing", "Brightness & Whiteness Testing", "Moisture Content Analysis", "Oil Absorption Testing"].map((test) => (
                    <li key={test} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
                  alt="Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Warehouse className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Warehousing</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Large-capacity warehousing facilities strategically located for efficient storage and distribution across India.
                </p>
                <div className="space-y-4">
                  <div className="bg-card p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h4 className="font-heading font-semibold text-foreground">Nashik, Maharashtra</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">Strategic location for West India distribution</p>
                  </div>
                  <div className="bg-card p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h4 className="font-heading font-semibold text-foreground">Baroda, Nasirabad</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">Central warehouse near manufacturing plants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">Facility Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
              ].map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img}
                    alt={`Facility ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Google Map */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Visit Our Locations</h2>
              <p className="text-muted-foreground">
                Find us at our strategic locations across Rajasthan
              </p>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.9876543210!2d74.7661!3d26.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE5JzQ2LjkiTiA3NMKwNDUnNTcuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stonex Enterprises Location"
              />
            </div>
            <div className="text-center mt-8">
              <Button variant="cta" size="lg" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
