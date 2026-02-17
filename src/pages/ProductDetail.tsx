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
  MeshSizes?: string[];
  MicronSizes?: string[];
  SizeLine?: string[];
  packaging: string[];
  applications: { industry: string; uses: string[] }[];
}> = {
  "calcite-powder": {
    name: "Calcite Powder",
    purity: "98.5%+",
    image: "https://i.ibb.co/pHbVhwp/calcite-powder.png",
    description: "High purity calcium carbonate (CaCO3) for diverse industrial applications",
    rawMaterial: "Natural calcite sourced from Rajasthan mines with strict quality control",
    productionCapacity: "1,500+ MT per month",
    whatIs: "Calcite is the one of the most common minerals on earth. Calcite powder is the finely ground mineral form of calcium carbonate (CaCO3). It is an abundant, purity, extremely high whiteness, smooth texture , free-flowing powder and super chemical properties. Due to its Excellent Physico-Mechanical Properties widely used across various industries as a cost-effective filler, coating agent and an additive to enhance product properties.",
    how:"We source top premium grade of Calcite lumps (CaCO3) containing high calcium carbonate from all across Rajasthan  and manufacture High Quality Calcite Powder with purity >98.5% under the best manufacturing process to maintain the highest standards of quality. Total production of Calcite powder is 5000 MT per month",
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
    MeshSizes: ["200", "300", "500", "1000"],
    MicronSizes: ["2 Micron to 74 Micron"],
    SizeLine: ["Our Calcite powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
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
    purity: "98%+",
    image: "https://i.ibb.co/XfxJ9GLw/dolomite-powder.jpg",
    description: "Premium CaMg(CO3)2 with high calcium and magnesium content",
    rawMaterial: "High-grade dolomite from Rajasthan mineral deposits",
    productionCapacity: "1,200+ MT per month",
    whatIs: "Dolomite is one of the carbonate minerals composed of Calcium and Magnesium Carbonate CaMg(CO3)2 with a crystalline structure. Dolomite commonly forms through dolomitization in sedimentary environments, where magnesium replaces some calcium in existing rock. Dolomite powder is the finely ground mineral form of Dolomite. Dolomite has high purity level, good compression strength, unique wettability level, super chemical and thermal properties, strength-enhancing properties and cost-effectiveness. Due to unique properties Dolomite powder used across various industries as a cost-effective filler, coating agent and an additive to enhance product properties.",
    how:"We source top premium grade of Dolomite lumps CaMg(CO3)2 containing high Calcium and Magnesium carbonate from all across Rajasthan and manufacture High Quality Dolomite Powder with purity >98% under the best manufacturing process to maintain the highest standards of quality. Total production of Dolomite powder & Dolomite Gritz is 6000 MT per month",
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
    MeshSizes: ["200", "300", "500"],
    MicronSizes: ["2 Micron to 74 Micron"],
    SizeLine: ["Our Dolomite powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
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
    image: "https://i.ibb.co/JjBZkrPH/quartz-powder.jpg",
    description: "Ultra-fine silica (SiO2) for construction and industrial use",
    rawMaterial: "Premium quality quartz crystals from Rajasthan",
    productionCapacity: "800+ MT per month",
    whatIs: "Quartz is the one of the hard and durable minerals on earth. Quartz chemical name is Silicon Dioxide (SiO2). Quartz powder is the finely ground mineral form of Quartz. Quartz is one of the main elements that make up many types of rocks, namely igneous, sedimentary and metamorphic ones. Quartz crystals have the unique property of piezoelectricity, meaning they generate an electric charge or potential difference when subjected to mechanical stress or pressure. Quartz has high hardness of 7 (Mohs scale), Super Chemical and Thermal stability. In its purest state, quartz crystallizes into a colourless, clear, extremely hard, and glass-like structure. Quartz occurs in virtually every colour. Colored varieties of quartz are common and include citrine, rose quartz, amethyst, smoky quartz, milky quartz. Due to unique properties Quartz powder used across various industries.",
    how:"We source top premium grade of Quartz lumps (SiO2) contain high amount of Silica from all across Rajasthan and manufacture High Quality Quartz Powder with purity of > 99% under the best manufacturing process to maintain the highest standards of quality. Total production of Quartz powder and Quartz Gritz 6000 MT per month. ",
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
    MeshSizes: ["200", "300", "500", "1000"],
    MicronSizes: ["10 Micron to 74 Micron"],
    SizeLine: ["Our Quartz Powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
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
    image: "https://i.ibb.co/vxPXqNc9/quartz-grits.jpg",
    description: "Graded silica grits for filtration and surface finishing",
    rawMaterial: "Selected quartz lumps processed for uniform sizing",
    productionCapacity: "600+ MT per month",
    whatIs: "Quartz Grits are made by crushing High Quality Quartz stone. Through crushing them into smaller pieces using crushers and mills, and then processing to achieve desired sizes and purity, often involving washing, magnetic separation and automatic gritz colour shorting treatments to remove impurities, resulting in fine grains which use in various industries.",
    how:"We source top premium grade of Quartz lumps (SiO2) contain high amount of Silica from all across Rajasthan and manufacture High Quality Quartz Grits in various sizes with purity of  > 99% under the best manufacturing process to maintain the highest standards of quality. ",
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
    MeshSizes: ["200", "300", "500", "1000"],
    MicronSizes: ["2 Micron to 74 Micron"],
      SizeLine: ["Our Quartz Grits available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Water Filtration", uses: ["Swimming pools", "Water treatment plants", "Industrial filtration"] },
      { industry: "Surface Finishing", uses: ["Sandblasting", "Surface preparation", "Cleaning"] },
      { industry: "Abrasives", uses: ["Grinding wheels", "Polishing compounds", "Cutting tools"] },
      { industry: "Construction", uses: ["Flooring", "Anti-skid surfaces", "Decorative aggregates"] },
    ],
  },
  "dolomite-grits": {
    name: "Dolomite Grits",
    purity: "98%+",
    image: "https://i.ibb.co/Ym90GcQ/dolomite-grits.jpg",
    description: "Graded silica grits for filtration and surface finishing",
    rawMaterial: "Selected dolomite lumps processed for uniform sizing",
    productionCapacity: "600+ MT per month",
    whatIs: "Dolomite Grits are made by crushing High Quality Dolomite stone. Through crushing them into smaller pieces using crushers and mills, and then processing to achieve desired sizes and purity, often involving washing, magnetic separation and automatic grits colour shorting treatments to remove impurities, resulting in fine grains which use in various industries.",
    how:"We source top premium grade of Dolomite lumps CaMg (CO3)2 contain high amount of Calcium and Magnesium Carbonate from all across Rajasthan and manufacture High Quality Dolomite Grits in various sizes with purity of  > 98% under the best manufacturing process to maintain the highest standards of quality. ",
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
    MeshSizes: ["200", "300", "500", "1000"],
    MicronSizes: ["2 Micron to 74 Micron"],
      SizeLine: ["Our Quartz Grits available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "Water Filtration", uses: ["Swimming pools", "Water treatment plants", "Industrial filtration"] },
      { industry: "Surface Finishing", uses: ["Sandblasting", "Surface preparation", "Cleaning"] },
      { industry: "Abrasives", uses: ["Grinding wheels", "Polishing compounds", "Cutting tools"] },
      { industry: "Construction", uses: ["Flooring", "Anti-skid surfaces", "Decorative aggregates"] },
    ],
  },
  "pebble": {
    name: "Pebble",
    purity: "96%+",
    image: "https://i.ibb.co/vx7nXVZv/pebble.png",
    description: "Finest talc for pharmaceuticals, cosmetics and rubber",
    rawMaterial: "High-grade talc ore from Rajasthan deposits",
    productionCapacity: "500+ MT per month",
    whatIs: "Pebbles are highly versatile natural stones used extensively for landscaping, decoration, functional drainage and also have health benefits. They serve as durable, lowmaintenance garden mulch to suppress weeds and retain soil moisture.",
    how:"Pebbles are sourced from mines (or more commonly, quarries) through a process of extraction and refinement that transforms large, raw, angular rock into small, smooth, rounded stones.",
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
    MeshSizes: ["200", "300", "500", "1000"],
    MicronSizes: ["2 Micron to 74 Micron"],
      SizeLine: ["Our Talc powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
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
    name: "Coated Calcite Powder",
    purity: "98%+",
    image: "https://i.ibb.co/xTs0rBc/coated-calcite.jpg",
    description: "Stearic acid coated calcium carbonate for enhanced polymer compatibility",
    rawMaterial: "Premium calcite powder with stearic acid surface treatment",
    productionCapacity: "400+ MT per month",
    whatIs: "Coated Calcite powder is a form of fine ground  Calcium Carbonate (CaCO3) that has been surface-treated with substances like Stearic acid. The coating make the powder Hydrophobic (water-repellent) which improves its compatibility, dispersion and performance when used as a filler or additive in industrial applications, particularly in polymer-based materials. Due to unique properties Coated Calcite powder used across various industries.",
    how:"We are the leading Manufacture and Supplier of High Quality Coated Calcite Powder   under the best manufacturing process to maintain the highest standards of quality",
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
    MeshSizes: ["200", "300", "500", "700"],
    MicronSizes: ["2 Micron to 74 Micron"],
      SizeLine: ["Our Coated Calcite powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
    packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
    applications: [
      { industry: "PVC Industry", uses: ["Pipes & fittings", "Profiles", "Films & sheets"] },
      { industry: "Cable Compounds", uses: ["Insulation", "Sheathing", "Filler"] },
      { industry: "Masterbatch", uses: ["White masterbatch", "Filler masterbatch", "Carrier"] },
      { industry: "Polymers", uses: ["PP", "PE", "Engineering plastics"] },
    ],
  },
  "coated-dolomite": {
    name: "Coated Dolomite Powder",
    purity: "97%+",
    image: "https://i.ibb.co/GfJ4gPQ0/Coated-dolomite.jpg",
    description: "Surface-treated dolomite for specialized polymer applications",
    rawMaterial: "Premium dolomite with surface modification treatment",
    productionCapacity: "300+ MT per month",
    whatIs: "Coated Dolomite powder is a form of fine ground  Calcium Magnesium Carbonate (CaMg(CO3)2 that has been surface-treated with substances like Stearic acid. The coating make the powder Hydrophobic (water-repellent) which improves its compatibility, dispersion, and performance when used as a filler or additive in industrial applications, particularly in polymer-based materials. Due to unique properties Coated Dolomite powder used across various industries",
    how:"We are the leading Manufacture and Supplier of High Quality Coated Dolomite Powder with purity of  under the best manufacturing process to maintain the highest standards of quality. ",
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
    MeshSizes: ["200", "300","400", "500"],
    MicronSizes: ["10 Micron to 74 Micron"],
      SizeLine: ["Our Coated Dolomite powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: "],
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
  const isPebble = productId === "pebble";
  const isCoated = productId === "coated-calcite" || productId === "coated-dolomite";

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
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Serial No</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Size (mm)</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Grade</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Whiteness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">1</td>
                      <td className="p-4 text-muted-foreground">0.1mm - 0.4mm</td>
                      <td className="p-4 text-muted-foreground">Snow White Quartz</td>
                      <td className="p-4 text-muted-foreground">98%+</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">2</td>
                      <td className="p-4 text-muted-foreground">0.3mm - 0.7mm</td>
                      <td className="p-4 text-muted-foreground">Milky White Quartz</td>
                      <td className="p-4 text-muted-foreground">98%+</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">3</td>
                      <td className="p-4 text-muted-foreground">0.6mm - 1.2mm</td>
                      <td className="p-4 text-muted-foreground">Glassy Quartz</td>
                      <td className="p-4 text-muted-foreground">98%+</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">4</td>
                      <td className="p-4 text-muted-foreground">1.2mm - 2.5mm</td>
                      <td className="p-4 text-muted-foreground">Semi Grade Quartz</td>
                      <td className="p-4 text-muted-foreground">98%+</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">5</td>
                      <td className="p-4 text-muted-foreground">2.5mm - 4mm</td>
                      <td className="p-4 text-muted-foreground">Semi Grade Quartz</td>
                      <td className="p-4 text-muted-foreground">97%+</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        <section className="py-12 ">
          <div className="container mx-auto px-4 bg-accent/10 p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground text-lg leading-relaxed">{product.how}</p>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">What is {product.name}?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Pebble Types Section */}
        {isPebble && (
          <section className="py-12 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Types of Pebble Stones</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Marble Pebbles</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These polished stones come in white and other light colors. They bring a sense of elegance
                    and are often used in upscale landscapes and indoor spaces.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Polished Pebbles</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manually polished to give them a shiny finish, these pebbles add a luxurious touch and
                    are perfect for both decorative and functional uses in interiors and exteriors.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">River Pebbles</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    They naturally acquire a smooth and rounded shape as they continue to flow in rivers and
                    gradually wear away at the edges. Available in a variety of sizes and colours, they are
                    often used in water features, pathways and garden beds.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Coated Benefits Section */}
        {isCoated && (
          <section className="py-12 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Key benefits of the Coating</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Improved Dispersion",
                    desc: "The treatment helps the powder mix uniformly into various matrices, preventing clumping."
                  },
                  {
                    title: "Reduced Moisture Absorption",
                    desc: "The coating forms a protective barrier, reducing moisture absorption."
                  },
                  {
                    title: "Enhanced Mechanical Properties",
                    desc: "It improves impact strength, stiffness, flow rate, and dimensional stability."
                  },
                  {
                    title: "Better Aesthetics",
                    desc: "It can enhance whiteness, gloss, and opacity in paints and powder coatings."
                  },
                  {
                    title: "Hydrophobic Surface",
                    desc: "Reduces moisture absorption and improves stability."
                  },
                  {
                    title: "Cost-Effectiveness",
                    desc: "Reduces raw material costs in formulations."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-md border-l-4 border-accent">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Particle Sizes */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground ">Available Particle Sizes</h2>
            <p className="text-muted-foreground mb-4">{product.SizeLine}</p>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Micron Sizes</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {product.MicronSizes?.map((size) => (
                <span key={size} className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                  {size}
                </span>
              ))}
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Mesh Sizes</h3>
            <div className="flex flex-wrap gap-3">
              {product.MeshSizes?.map((size) => (
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

        {/* Industry Applications Button Section */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Industry Applications
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Discover the diverse range of industries and specialized use cases where our {product.name} excels.
            </p>
            
            <Button size="lg" className="group" asChild>
              <Link to={`/products/${productId}/applications`}>
                View Applications
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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