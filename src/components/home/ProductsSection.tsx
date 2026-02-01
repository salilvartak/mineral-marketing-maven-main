import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "calcite-powder",
    name: "Calcite Powder",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: "dolomite-powder",
    name: "Dolomite Powder",
    purity: "97%+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: "quartz-powder",
    name: "Quartz Powder",
    purity: "99%+",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
  },
  {
    id: "quartz-grits",
    name: "Quartz Grits",
    purity: "99%+",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
  },
  
  {
    id: "coated-calcite",
    name: "Coated Calcite",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=400&h=300&fit=crop",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Our Products</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Premium Mineral Fillers & Extenders
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on any product to view detailed specifications
          </p>
        </div>

        {/* Products Grid - Simplified for discovery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {product.purity}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
