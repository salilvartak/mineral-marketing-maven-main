import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// --- Data Structure ---
// Ideally, this should be in a separate data file, but I'll keep it here for the example.
const applicationsData: Record<string, {
  name: string;
  sections: {
    title: string;
    image: string;
    points: string[];
  }[];
}> = {
  "calcite-powder": {
    name: "Calcite Powder",
    sections: [
      {
        title: "Paints and Coatings",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", // Paint bucket/wall
        points: [
          "Used as a Filler to provide Brightness, Opacity, Whiteness and reduce costs.",
          "Improves flow Characteristics, covering strength and texture.",
          "Enhances durability, water resistance, and scrub resistance of the paint film.",
          "Can reduce the need for dispersion and prevent settling in Latex paints.",
        ],
      },
      {
        title: "Paper Manufacturing",
        image: "https://images.unsplash.com/photo-1603842602330-9b3780360492?w=800&q=80", // Paper rolls
        points: [
          "A bright white Calcium Carbonate added to paper pulp as a filler in alkaline papers or applied as a coating pigment.",
          "Calcite powder is an ideal component for producing writing, printing, and packaging grade paper.",
          "Improves Brightness, Opacity, and Smoothness while reducing the use of costly wood pulp.",
          "It is a type of mineral filler that brings down the overall production cost of manufacturing paper.",
        ],
      },
      {
        title: "Plastics and Polymers",
        image: "https://images.unsplash.com/photo-1622329775330-9b3780360492?w=800&q=80", // Plastic pipes/granules (Placeholder)
        points: [
          "Is a primary filler in various polymers (PVC, PE, PP) to reduce production costs, improve dimensional stability, enhance rigidity, and provide a smooth surface finish.",
          "Increases humidity retention and consistency in plastic.",
          "It is used in products like pipes, automotive parts, furniture, film, and packaging materials.",
        ],
      },
      {
        title: "Glass and Ceramics",
        image: "https://images.unsplash.com/photo-1590422946252-87063467669d?w=800&q=80", // Glass/Ceramics
        points: [
          "Calcite powder is an important component in glass making and is used as a stabilizer which improves the mechanical properties and physical appearance of the glass.",
          "In Ceramics it helps control shrinkage during firing and acts as a flux in glazes to lower melting points.",
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://images.unsplash.com/photo-1552353617-66a9829f7f45?w=800&q=80", // Rubber tires
        points: [
          "In Rubber industries Calcite Powder is one of the prominent minerals due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Acts as a volume enhancer and stabilizer in Rubber.",
        ],
      },
      {
        title: "Agriculture and Feed",
        image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?w=800&q=80", // Farming
        points: [
          "Functions as a Soil Conditioner to neutralize acidic soil and provide calcium to plants.",
          "Used in Livestock to provide essential calcium for healthy growth and metabolism.",
        ],
      },
      {
        title: "Adhesives and Sealants",
        image: "https://images.unsplash.com/photo-1581092921461-eab6245b0262?w=800&q=80", // Industrial glue/sealant
        points: [
          "Calcite powder improves viscosity and enhances physical strength.",
          "Cost effective filler material.",
        ],
      },
    ],
  },
  // Add other products here with their specific data...
  // For now, if a product isn't found, we can fallback or show a 'Coming Soon'
};

const ProductApplications = () => {
  const { productId } = useParams<{ productId: string }>();
  // Default to calcite if specific data is missing for the demo, 
  // or handle the error gracefully.
  const product = productId && applicationsData[productId] 
    ? applicationsData[productId] 
    : null;

  if (!product) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center pt-20">
                <h1 className="text-2xl font-bold mb-4">Content coming soon for {productId}</h1>
                <Button asChild><Link to="/products">Back to Products</Link></Button>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-16 text-center">
            <div className="inline-block mb-4">
                <Link to={`/products/${productId}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Product Details
                </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Applications of <span className="text-accent">{product.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the versatile industrial uses and technical benefits of our premium {product.name}.
            </p>
        </section>

        {/* Applications List */}
        <div className="container mx-auto px-4 space-y-24">
          {product.sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-foreground border-l-4 border-accent pl-4">
                  {section.title}
                </h2>
                
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-lg leading-relaxed">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="container mx-auto px-4 mt-24">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need technical specifications?</h3>
                <p className="text-muted-foreground mb-8">View the full technical data sheet and chemical composition.</p>
                <Button variant="default" size="lg" asChild>
                    <Link to={`/products/${productId}`}>View Product Details</Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductApplications;