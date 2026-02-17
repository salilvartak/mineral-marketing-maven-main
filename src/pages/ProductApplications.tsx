import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// --- Data Structure ---
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
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
        points: [
          "Used as a Filler to provide Brightness, Opacity, Whiteness and reduce costs.",
          "Improves flow Characteristics, covering strength and texture.",
          "Enhances durability, water resistance, and scrub resistance of the paint film.",
          "Can reduce the need for dispersion and prevent settling in Latex paints.",
        ],
      },
      {
        title: "Paper Manufacturing",
        image: "https://images.unsplash.com/photo-1603842602330-9b3780360492?w=800&q=80",
        points: [
          "A bright white Calcium Carbonate added to paper pulp as a filler in alkaline papers or applied as a coating pigment.",
          "Calcite powder is an ideal component for producing writing, printing, and packaging grade paper.",
          "Improves Brightness, Opacity, and Smoothness while reducing the use of costly wood pulp.",
          "It is a type of mineral filler that brings down the overall production cost of manufacturing paper.",
        ],
      },
      {
        title: "Plastics and Polymers",
        image: "https://images.unsplash.com/photo-1622329775330-9b3780360492?w=800&q=80",
        points: [
          "Is a primary filler in various polymers (PVC, PE, PP) to reduce production costs, improve dimensional stability, enhance rigidity, and provide a smooth surface finish.",
          "Increases humidity retention and consistency in plastic.",
          "It is used in products like pipes, automotive parts, furniture, film, and packaging materials.",
        ],
      },
      {
        title: "Glass and Ceramics",
        image: "https://images.unsplash.com/photo-1590422946252-87063467669d?w=800&q=80",
        points: [
          "Calcite powder is an important component in glass making and is used as a stabilizer which improves the mechanical properties and physical appearance of the glass.",
          "In Ceramics it helps control shrinkage during firing and acts as a flux in glazes to lower melting points.",
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://images.unsplash.com/photo-1552353617-66a9829f7f45?w=800&q=80",
        points: [
          "In Rubber industries Calcite Powder is one of the prominent minerals due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Acts as a volume enhancer and stabilizer in Rubber.",
        ],
      },
    ],
  },
  "dolomite-powder": {
    name: "Dolomite Powder",
    sections: [
      {
        title: "Glass & Ceramics",
        image: "https://images.unsplash.com/photo-1565610261709-67d93d56d10c?w=800&q=80",
        points: [
          "Acts as a flux material to lower melting points in glass production.",
          "Enhances thermal stability and durability of the final product.",
          "Improves the mechanical properties of ceramic bodies.",
        ],
      },
      {
        title: "Agriculture",
        image: "https://images.unsplash.com/photo-1625246333195-58197bd47d26?w=800&q=80",
        points: [
          "Used for soil conditioning to neutralize acidity (pH correction).",
          "Provides an essential magnesium supplement for crops.",
          "Improves soil structure and nutrient absorption.",
        ],
      },
      {
        title: "Construction",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        points: [
          "Key ingredient in building materials and cement additives.",
          "Used in road construction for stability and durability.",
          "Acts as a filler in concrete and asphalt mixtures.",
        ],
      },
      {
        title: "Steel Industry",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
        points: [
          "Used as a flux in iron making to lower impurities.",
          "Assists in slag formation and sulfur removal.",
          "Refractory material for lining furnaces.",
        ],
      },
    ],
  },
  "quartz-powder": {
    name: "Quartz Powder",
    sections: [
      {
        title: "Slab Manufacturing",
        image: "https://images.unsplash.com/photo-1581093583449-ed2521344463?w=800&q=80",
        points: [
          "Primary raw material for Quartz slabs and Engineered stone.",
          "Provides extreme hardness and durability to countertops.",
          "Ensures consistent color and texture in artificial stone.",
        ],
      },
      {
        title: "Glass Industry",
        image: "https://images.unsplash.com/photo-1506720456291-38317fb661c9?w=800&q=80",
        points: [
          "Essential silica source for container glass and flat glass.",
          "Improves clarity and thermal shock resistance.",
          "Used in specialty glass manufacturing.",
        ],
      },
      {
        title: "Construction & Paints",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
        points: [
          "Functional filler in paints for abrasion resistance.",
          "Used in concrete additives and flooring solutions.",
          "Enhances the durability of exterior coatings.",
        ],
      },
    ],
  },
  "quartz-grits": {
    name: "Quartz Grits",
    sections: [
      {
        title: "Water Filtration",
        image: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=800&q=80",
        points: [
          "Standard media for swimming pool filters and water treatment plants.",
          "High silica content ensures effective removal of impurities.",
          "Durable particles resist degradation during backwashing.",
        ],
      },
      {
        title: "Surface Finishing",
        image: "https://images.unsplash.com/photo-1590059599723-b6d31846152b?w=800&q=80",
        points: [
          "Used in sandblasting for surface preparation and cleaning.",
          "Provides uniform texturing on metals and stone.",
          "Effective for rust removal and paint stripping.",
        ],
      },
      {
        title: "Construction & Decor",
        image: "https://images.unsplash.com/photo-1518118029519-86641887dc74?w=800&q=80",
        points: [
          "Used in epoxy flooring for anti-skid surfaces.",
          "Decorative aggregates for landscaping and aquariums.",
          "Texture additive for specialized plasters.",
        ],
      },
    ],
  },
  "talc-powder": {
    name: "Talc Powder",
    sections: [
      {
        title: "Pharmaceuticals & Cosmetics",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
        points: [
          "Lubricant and filler in tablet manufacturing.",
          "Base for talcum powder, face powder, and body powders.",
          "Provides soft texture and prevents caking in cosmetics.",
        ],
      },
      {
        title: "Rubber & Plastics",
        image: "https://images.unsplash.com/photo-1523293836414-90ab390ea659?w=800&q=80",
        points: [
          "Reinforcing filler that improves stiffness and dimensional stability.",
          "Acts as a processing aid to reduce viscosity.",
          "Enhances surface quality and heat resistance.",
        ],
      },
    ],
  },
  "coated-calcite": {
    name: "Coated Calcite",
    sections: [
      {
        title: "PVC & Polymers",
        image: "https://images.unsplash.com/photo-1622329775330-9b3780360492?w=800&q=80",
        points: [
          "Essential for PVC pipes, fittings, and profiles.",
          "Stearic acid coating improves dispersion in polymer matrices.",
          "Reduces processing torque and wear on machinery.",
        ],
      },
      {
        title: "Cable Compounds",
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80",
        points: [
          "Used in insulation and sheathing for electrical cables.",
          "Lowers moisture absorption compared to uncoated fillers.",
          "Maintains electrical properties and flexibility.",
        ],
      },
    ],
  },
  "coated-dolomite": {
    name: "Coated Dolomite",
    sections: [
      {
        title: "Plastics & Rubber",
        image: "https://images.unsplash.com/photo-1605307374020-f5a6b0c61980?w=800&q=80",
        points: [
          "Surface-treated for compatibility with PP and PE compounds.",
          "Used in tire industry and industrial rubber goods.",
          "Provides better impact strength and stiffness balance.",
        ],
      },
      {
        title: "Adhesives & Sealants",
        image: "https://images.unsplash.com/photo-1581092921461-eab6245b0262?w=800&q=80",
        points: [
          "Filler for silicone and PU sealants.",
          "Low moisture content ensures longer shelf life of sealants.",
          "Cost-effective alternative to other functional fillers.",
        ],
      },
    ],
  },
};

const ProductApplications = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = productId && applicationsData[productId] 
    ? applicationsData[productId] 
    : null;

  if (!product) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center pt-20">
                <h1 className="text-2xl font-bold mb-4 text-foreground">Application data not found for {productId}</h1>
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Applications of <span className="text-primary">{product.name}</span>
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
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    {/* Standard dark overlay for better text contrast if needed, currently transparent on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4">
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
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
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
            <div className="bg-muted rounded-3xl p-8 md:p-12 text-center">
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