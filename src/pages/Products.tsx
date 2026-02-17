import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "calcite-powder",
    name: "Calcite Powder",
    purity: "98%+",
    image: "src/assets/images/calcite-powder.png",
  },
  {
    id: "dolomite-powder",
    name: "Dolomite Powder",
    purity: "97%+",
    image: "src/assets/images/dolomite-powder.jpeg",
  },
  {
    id: "quartz-powder",
    name: "Quartz Powder",
    purity: "99%+",
    image: "src/assets/images/quartz-powder.jpeg",
  },
  {
    id: "quartz-grits",
    name: "Quartz Grits",
    purity: "99%+",
    image: "src/assets/images/quartz-grits.jpeg",
  },
  
  {
    id: "dolomite-grits",
    name: "Dolomite Grits",
    purity: "98%+",
    image: "src/assets/images/dolomite-grits.jpeg",
  },
  {
    id: "coated-calcite",
    name: "Coated Calcite Powder",
    purity: "97%+",
    image: "src/assets/images/coated-calcite.jpeg",
  },
  {
    id: "coated-dolomite",
    name: "Coated Dolomite Powder",
    purity: "97%+",
    image: "src/assets/images/Coated-dolomite.jpeg",
  },
  {
    id: "pebble",
    name: "Pebble",
    purity: "97%+",
    image: "src/assets/images/pebble.png",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Our Products
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Premium quality mineral industrial   fillers and extenders for diverse industrial applications
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid - Index Only */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-lift"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold flex items-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    
                  </div>
                  
                  {/* Product Name */}
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
