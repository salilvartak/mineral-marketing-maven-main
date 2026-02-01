import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Package, Beaker, Layers, Factory } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// Product data with full technical specifications
const productsData: Record<string, {
  name: string;
  purity: string;
  image: string;
  description: string;
  rawMaterial: string;
  productionCapacity: string;
  whatIs: string;
  how: string;
  physicalProperties: { property: string; value: string }[];
  chemicalProperties: { property: string; value: string }[];
  particleSizes: string[];
  packaging: string[];
  applications: { industry: string; uses: string[] }[];
}> = {
  "calcite-powder": {
    name: "Calcite Powder",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "High purity calcium carbonate (CaCO3) for diverse industrial applications",
    rawMaterial: "Natural calcite sourced from Rajasthan mines with strict quality control",
    productionCapacity: "1,500+ MT per month",
    whatIs: "Calcite Powder is a natural form of calcium carbonate (CaCO3) characterized by its high brightness, whiteness, and purity. It is one of the most versatile industrial minerals used as a filler, extender, and pigment across various industries.",
    how:"We source top premium grade of Calcite lumps (CaCO3) containing high calcium carbonate from all across Rajasthan  and manufacture High Quality Calcite Powder with purity up to ____% under the best manufacturing process to maintain the highest standards of quality. Total production of Calcite powder _______MT per month. Our Calcite powder availed at the most affordable prices.",
    physicalProperties: [
      { property: "Color", value: "White to off-white" },
      { property: "Specific Gravity", value: "2.7 g/cm³" },
      { property: "Hardness (Mohs)", value: "3" },
      { property: "Brightness", value: "94-96%" },
      { property: "Oil Absorption", value: "18-22 g/100g" },
      { property: "Moisture", value: "<0.5%" },
    ],
    chemicalProperties: [
      { property: "CaCO3", value: "≥98%" },
      { property: "MgCO3", value: "<1.5%" },
      { property: "SiO2", value: "<0.5%" },
      { property: "Fe2O3", value: "<0.05%" },
      { property: "Al2O3", value: "<0.2%" },
      { property: "Loss on Ignition", value: "42-44%" },
    ],
    particleSizes: ["2 Micron", "5 Micron", "10 Micron", "20 Micron", "40 Micron", "100 Mesh", "200 Mesh", "300 Mesh", "500 Mesh"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags", "Customized packaging available"],
    applications: [
      { industry: "Paints & Coatings", uses: ["Improves opacity and brightness", "Acts as extender pigment", "Enhances durability"] },
      { industry: "Paper Manufacturing", uses: ["Coating pigment", "Filler for smoothness", "Brightness enhancement"] },
      { industry: "Plastics", uses: ["Cost-effective filler", "Improves dimensional stability", "Surface finish enhancement"] },
      { industry: "Rubber", uses: ["Reinforcing filler", "Improves tensile strength", "Cost reduction"] },
      { industry: "Glass Industry", uses: ["Flux material", "Stabilizer", "Quality improvement"] },
    ],
  },
  "dolomite-powder": {
    name: "Dolomite Powder",
    purity: "97%+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    description: "Premium CaMg(CO3)2 with high calcium and magnesium content",
    rawMaterial: "High-grade dolomite from Rajasthan mineral deposits",
    productionCapacity: "1,200+ MT per month",
    whatIs: "Dolomite Powder is a double carbonate of calcium and magnesium CaMg(CO3)2. It offers excellent thermal stability, high compression strength, and weather resistance, making it ideal for construction, glass, ceramics, and agricultural applications.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White to light grey" },
      { property: "Specific Gravity", value: "2.85 g/cm³" },
      { property: "Hardness (Mohs)", value: "3.5-4" },
      { property: "Brightness", value: "90-94%" },
      { property: "Oil Absorption", value: "20-25 g/100g" },
      { property: "Moisture", value: "<0.5%" },
    ],
    chemicalProperties: [
      { property: "CaCO3", value: "54-56%" },
      { property: "MgCO3", value: "40-44%" },
      { property: "SiO2", value: "<1.0%" },
      { property: "Fe2O3", value: "<0.1%" },
      { property: "Al2O3", value: "<0.3%" },
      { property: "Loss on Ignition", value: "45-47%" },
    ],
    particleSizes: ["10 Micron", "20 Micron", "40 Micron", "100 Mesh", "200 Mesh", "300 Mesh"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Glass & Ceramics", uses: ["Flux material", "Thermal stability", "Durability enhancement"] },
      { industry: "Agriculture", uses: ["Soil conditioning", "pH correction", "Magnesium supplement for crops"] },
      { industry: "Construction", uses: ["Building materials", "Cement additive", "Road construction"] },
      { industry: "Steel Industry", uses: ["Flux in iron making", "Slag formation", "Sulfur removal"] },
    ],
  },
  "quartz-powder": {
    name: "Quartz Powder",
    purity: "99%+",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    description: "Ultra-fine silica (SiO2) for construction and industrial use",
    rawMaterial: "Premium quality quartz crystals from Rajasthan",
    productionCapacity: "800+ MT per month",
    whatIs: "Quartz Powder is ultra-fine silicon dioxide (SiO2) known for its high purity, excellent hardness, and chemical resistance. It is essential for slab manufacturing, glass production, construction, and various industrial applications requiring high silica content.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White" },
      { property: "Specific Gravity", value: "2.65 g/cm³" },
      { property: "Hardness (Mohs)", value: "7" },
      { property: "Brightness", value: "92-96%" },
      { property: "Oil Absorption", value: "15-20 g/100g" },
      { property: "Moisture", value: "<0.5%" },
    ],
    chemicalProperties: [
      { property: "SiO2", value: "≥99%" },
      { property: "Fe2O3", value: "<0.02%" },
      { property: "Al2O3", value: "<0.5%" },
      { property: "CaO", value: "<0.1%" },
      { property: "MgO", value: "<0.05%" },
      { property: "Loss on Ignition", value: "<0.5%" },
    ],
    particleSizes: ["5 Micron", "10 Micron", "20 Micron", "40 Micron", "100 Mesh", "200 Mesh", "300 Mesh", "500 Mesh"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Slab Manufacturing", uses: ["Quartz slabs", "Engineered stone", "Countertops"] },
      { industry: "Glass Industry", uses: ["Container glass", "Flat glass", "Specialty glass"] },
      { industry: "Construction", uses: ["Concrete additive", "Flooring", "Tiles"] },
      { industry: "Paints", uses: ["Functional filler", "Abrasion resistance", "Durability"] },
    ],
  },
  "quartz-grits": {
    name: "Quartz Grits",
    purity: "99%+",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    description: "Graded silica grits for filtration and surface finishing",
    rawMaterial: "Selected quartz lumps processed for uniform sizing",
    productionCapacity: "600+ MT per month",
    whatIs: "Quartz Grits are uniformly graded particles of silicon dioxide available in various mesh sizes. Known for their high silica content, durability, and uniform grading, they are essential for water filtration, surface finishing, and abrasive applications.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White to off-white" },
      { property: "Specific Gravity", value: "2.65 g/cm³" },
      { property: "Hardness (Mohs)", value: "7" },
      { property: "Sphericity", value: "High" },
      { property: "Friability", value: "Low" },
      { property: "Moisture", value: "<0.5%" },
    ],
    chemicalProperties: [
      { property: "SiO2", value: "≥99%" },
      { property: "Fe2O3", value: "<0.02%" },
      { property: "Al2O3", value: "<0.5%" },
      { property: "CaO", value: "<0.1%" },
      { property: "Acid Solubility", value: "<2%" },
    ],
    particleSizes: ["8-16 Mesh", "16-30 Mesh", "30-60 Mesh", "60-100 Mesh", "100-200 Mesh"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Water Filtration", uses: ["Swimming pools", "Water treatment plants", "Industrial filtration"] },
      { industry: "Surface Finishing", uses: ["Sandblasting", "Surface preparation", "Cleaning"] },
      { industry: "Abrasives", uses: ["Grinding wheels", "Polishing compounds", "Cutting tools"] },
      { industry: "Construction", uses: ["Flooring", "Anti-skid surfaces", "Decorative aggregates"] },
    ],
  },
  "talc-powder": {
    name: "Talc Powder",
    purity: "96%+",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
    description: "Finest talc for pharmaceuticals, cosmetics and rubber",
    rawMaterial: "High-grade talc ore from Rajasthan deposits",
    productionCapacity: "500+ MT per month",
    whatIs: "Talc Powder is a hydrated magnesium silicate known for its soft texture, high lubricity, and chemical inertness. It is the softest mineral (Mohs hardness 1) and is widely used in pharmaceuticals, cosmetics, rubber, plastics, and paper industries.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White to light grey" },
      { property: "Specific Gravity", value: "2.7-2.8 g/cm³" },
      { property: "Hardness (Mohs)", value: "1" },
      { property: "Brightness", value: "88-92%" },
      { property: "Oil Absorption", value: "35-45 g/100g" },
      { property: "Moisture", value: "<0.5%" },
    ],
    chemicalProperties: [
      { property: "MgO", value: "28-32%" },
      { property: "SiO2", value: "58-62%" },
      { property: "CaO", value: "<2%" },
      { property: "Fe2O3", value: "<1%" },
      { property: "Al2O3", value: "<1%" },
      { property: "Loss on Ignition", value: "4-6%" },
    ],
    particleSizes: ["2 Micron", "5 Micron", "10 Micron", "20 Micron", "200 Mesh", "300 Mesh", "500 Mesh"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Pharmaceuticals", uses: ["Tablet filler", "Anti-caking agent", "Lubricant"] },
      { industry: "Cosmetics", uses: ["Talcum powder", "Face powder", "Body powder"] },
      { industry: "Rubber", uses: ["Reinforcing filler", "Processing aid", "Cost reduction"] },
      { industry: "Plastics", uses: ["Stiffness improvement", "Dimensional stability", "Surface quality"] },
      { industry: "Paper", uses: ["Filler", "Coating pigment", "Pitch control"] },
    ],
  },
  "coated-calcite": {
    name: "Coated Calcite",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=800&h=600&fit=crop",
    description: "Stearic acid coated calcium carbonate for enhanced polymer compatibility",
    rawMaterial: "Premium calcite powder with stearic acid surface treatment",
    productionCapacity: "400+ MT per month",
    whatIs: "Coated Calcite is calcium carbonate that has been surface-treated with stearic acid or other fatty acids. This coating improves dispersion, reduces moisture absorption, and enhances compatibility with polymer matrices, making it ideal for PVC, cables, and masterbatch applications.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White" },
      { property: "Specific Gravity", value: "2.65 g/cm³" },
      { property: "Coating Level", value: "1-2%" },
      { property: "Brightness", value: "94-96%" },
      { property: "Moisture", value: "<0.3%" },
      { property: "Activation Level", value: "≥95%" },
    ],
    chemicalProperties: [
      { property: "CaCO3", value: "≥96%" },
      { property: "Stearic Acid", value: "1-2%" },
      { property: "MgCO3", value: "<1.5%" },
      { property: "SiO2", value: "<0.5%" },
      { property: "Fe2O3", value: "<0.05%" },
    ],
    particleSizes: ["2 Micron", "5 Micron", "10 Micron", "20 Micron"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "PVC Industry", uses: ["Pipes & fittings", "Profiles", "Films & sheets"] },
      { industry: "Cable Compounds", uses: ["Insulation", "Sheathing", "Filler"] },
      { industry: "Masterbatch", uses: ["White masterbatch", "Filler masterbatch", "Carrier"] },
      { industry: "Polymers", uses: ["PP", "PE", "Engineering plastics"] },
    ],
  },
  "coated-dolomite": {
    name: "Coated Dolomite",
    purity: "97%+",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    description: "Surface-treated dolomite for specialized polymer applications",
    rawMaterial: "Premium dolomite with surface modification treatment",
    productionCapacity: "300+ MT per month",
    whatIs: "Coated Dolomite is dolomite powder that has been surface-treated for enhanced compatibility with polymers. The coating reduces moisture absorption, improves dispersion, and provides better mechanical properties in rubber and plastic applications.",
    how:"",
    physicalProperties: [
      { property: "Color", value: "White to light grey" },
      { property: "Specific Gravity", value: "2.80 g/cm³" },
      { property: "Coating Level", value: "1-2%" },
      { property: "Brightness", value: "88-92%" },
      { property: "Moisture", value: "<0.3%" },
      { property: "Activation Level", value: "≥90%" },
    ],
    chemicalProperties: [
      { property: "CaCO3", value: "52-54%" },
      { property: "MgCO3", value: "38-42%" },
      { property: "Stearic Acid", value: "1-2%" },
      { property: "SiO2", value: "<1.0%" },
      { property: "Fe2O3", value: "<0.1%" },
    ],
    particleSizes: ["10 Micron", "20 Micron", "40 Micron"],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Plastics", uses: ["PP compounds", "PE compounds", "Filler applications"] },
      { industry: "Rubber Compounding", uses: ["Tire industry", "Industrial rubber", "Footwear"] },
      { industry: "Adhesives", uses: ["Sealants", "Caulks", "Construction adhesives"] },
      { industry: "Sealants", uses: ["Silicone sealants", "PU sealants", "Acrylic sealants"] },
    ],
  },
};

// Collapsible section component for mobile
const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border border-border rounded-lg overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-heading font-semibold text-foreground">{title}</h3>
        </div>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 bg-background">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const isQuartzGrits = productId === "quartz-grits";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="pt-40 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Hero - Image + Name */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold">
                  {product.purity} Pure
                </div>
              </div>
              <div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    Enquire Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing & Raw Material */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Raw Material Sourcing</h3>
                <p className="text-muted-foreground">{product.rawMaterial}</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Production Capacity</h3>
                <p className="text-muted-foreground">{product.productionCapacity}</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Quartz Grits: Size & Grade Table First */}
        {isQuartzGrits && (
          <section className="py-12 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Available Sizes & Grades</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-lg shadow-md">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Mesh Size</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Particle Size (mm)</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">8-16 Mesh</td>
                      <td className="p-4 text-muted-foreground">1.18 - 2.36 mm</td>
                      <td className="p-4 text-muted-foreground">Water filtration, Decorative</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">16-30 Mesh</td>
                      <td className="p-4 text-muted-foreground">0.60 - 1.18 mm</td>
                      <td className="p-4 text-muted-foreground">Filtration, Sandblasting</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">30-60 Mesh</td>
                      <td className="p-4 text-muted-foreground">0.25 - 0.60 mm</td>
                      <td className="p-4 text-muted-foreground">Fine filtration, Abrasives</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">60-100 Mesh</td>
                      <td className="p-4 text-muted-foreground">0.15 - 0.25 mm</td>
                      <td className="p-4 text-muted-foreground">Industrial, Construction</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">100-200 Mesh</td>
                      <td className="p-4 text-muted-foreground">0.075 - 0.15 mm</td>
                      <td className="p-4 text-muted-foreground">Fine applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* What Is Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">What is {product.name}?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
          
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">How We Make {product.name}?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.how}</p>
          </div>
        </section>

        {/* Desktop: Tables Side by Side | Mobile: Collapsible 
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            {/* Desktop View 
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {/* Physical Properties 
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Physical Properties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-card rounded-lg shadow-md">
                    <tbody>
                      {product.physicalProperties.map((prop, index) => (
                        <tr key={prop.property} className={index < product.physicalProperties.length - 1 ? "border-b border-border/50" : ""}>
                          <td className="p-4 font-medium text-foreground">{prop.property}</td>
                          <td className="p-4 text-muted-foreground">{prop.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Chemical Properties 
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Chemical Properties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-card rounded-lg shadow-md">
                    <tbody>
                      {product.chemicalProperties.map((prop, index) => (
                        <tr key={prop.property} className={index < product.chemicalProperties.length - 1 ? "border-b border-border/50" : ""}>
                          <td className="p-4 font-medium text-foreground">{prop.property}</td>
                          <td className="p-4 text-muted-foreground">{prop.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile View - Collapsible 
            <div className="md:hidden space-y-4">
              <CollapsibleSection title="Physical Properties" icon={Beaker}>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full min-w-[300px]">
                    <tbody>
                      {product.physicalProperties.map((prop, index) => (
                        <tr key={prop.property} className={index < product.physicalProperties.length - 1 ? "border-b border-border/50" : ""}>
                          <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{prop.property}</td>
                          <td className="py-3 text-muted-foreground">{prop.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Chemical Properties" icon={Beaker}>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full min-w-[300px]">
                    <tbody>
                      {product.chemicalProperties.map((prop, index) => (
                        <tr key={prop.property} className={index < product.chemicalProperties.length - 1 ? "border-b border-border/50" : ""}>
                          <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{prop.property}</td>
                          <td className="py-3 text-muted-foreground">{prop.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </section>*/}

        {/* Particle Sizes */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Available Particle Sizes</h2>
            <div className="flex flex-wrap gap-3">
              {product.particleSizes.map((size) => (
                <span key={size} className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="hidden md:block">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Packaging Options</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {product.packaging.map((pack) => (
                  <div key={pack} className="bg-card p-4 rounded-lg shadow-sm text-center">
                    <Package className="h-8 w-8 text-accent mx-auto mb-3" />
                    <span className="text-foreground font-medium">{pack}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile - Collapsible */}
            <div className="md:hidden">
              <CollapsibleSection title="Packaging Options" icon={Package}>
                <div className="grid grid-cols-2 gap-3">
                  {product.packaging.map((pack) => (
                    <div key={pack} className="bg-muted p-3 rounded-lg text-center">
                      <span className="text-foreground text-sm">{pack}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Applications by Industry */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Industry Applications</h2>
            
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((app) => (
                <div key={app.industry} className="bg-card p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Factory className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{app.industry}</h3>
                  </div>
                  <ul className="space-y-2">
                    {app.uses.map((use) => (
                      <li key={use} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile View - Collapsible */}
            <div className="md:hidden space-y-3">
              {product.applications.map((app) => (
                <CollapsibleSection key={app.industry} title={app.industry} icon={Factory}>
                  <ul className="space-y-2">
                    {app.uses.map((use) => (
                      <li key={use} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-6">
              Interested in {product.name}?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products" className="gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
