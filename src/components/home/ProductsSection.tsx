import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
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
    id: "dolomite-grits",
    name: "Dolomite Grits",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=400&h=300&fit=crop",
  },
  {
    id: "coated-calcite",
    name: "Coated Calcite Powder",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=400&h=300&fit=crop",
  },
  {
    id: "coated-dolomite",
    name: "Coated Dolomite Powder",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=400&h=300&fit=crop",
  },

  
  
  {
    id: "pebbles",
    name: "Pebbles",
    purity: "98%+",
    image: "https://images.unsplash.com/photo-1533907650686-70576141c030?w=400&h=300&fit=crop",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">
              Premium Collection
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
              Industrial Grade <br className="hidden md:block" />
              <span className="text-primary/80">Mineral Fillers & Extenders</span>
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex group border-accent text-accent hover:bg-accent hover:text-white" asChild>
            <Link to="/products">
              Explore Catalog
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Optimized Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm active:scale-[0.98] md:hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                {/* Gradient Overlay - more visible on mobile for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 md:opacity-60 md:group-hover:opacity-80 transition-opacity" />
                
                {/* Purity Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-sm">
                  {product.purity} Purity
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white md:translate-y-2 md:group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 mb-1">
                    <BadgeCheck className="h-4 w-4 text-accent" />
                    <span className="text-[10px] uppercase tracking-widest text-white/80">Certified Quality</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-3 flex items-center text-accent text-sm font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    View Specs <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-10 md:hidden">
          <Button variant="cta" size="lg" className="w-full" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};