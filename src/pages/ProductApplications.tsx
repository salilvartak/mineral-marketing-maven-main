import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          "Used as a Filler to provide Brightness, Opacity, Whiteness and reduce costs.",
          "Improves flow Characteristics, covering strength and texture.",
          "Enhances durability, water resistance, and scrub resistance of the paint film.",
          "Can reduce the need for dispersion and prevent settling in Latex paints.",
        ],
      },
      {
        title: "Paper Manufacturing",
        image: "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg",
        points: [
          "A bright white Calcium Carbonate added to paper pulp as a filler in alkaline papers or applied as a coating pigment.",
          "Calcite powder is an ideal component for producing writing, printing, and packaging grade paper.",
          "Improve Brightness and Opacity and Smoothness and reduces the use of costly wood pulp.",
          "It is a type of mineral filler that brings down the overall production cost of manufacturing paper.",
        ],
      },
      {
        title: "Plastics and Polymers",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          "Is a primary filler in various polymers (PVC, PE, PP) to reduce production costs, improve dimensional stability, enhance rigidity, and provide a smooth surface finish.",
          "Increase Humidity retention and consistency in plastic.",
          "It is used in products like pipes, automotive parts, furniture, film and packaging materials.",
        ],
      },
      {
        title: "Glass and Ceramics",
        image: "https://www.olmec.co.uk/wp-content/uploads/2020/08/glass_ceramics-1.jpg",
        points: [
          "Calcite powder is an important component in glass making and is used as a stabilizer which improves the mechanical properties and physical appearance of the glass.",
          "In Ceramics it helps control shrinkage during firing and acts as a flux in glazes to lower melting points.",
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp",
        points: [
          "In Rubber industries Calcite Powder is one of the prominent mineral due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Act as a volume enhancer and stabilizer in Rubber.",
        ],
      },
      {
        title: "Agriculture and Feed",
        image: "https://www.innovationnewsnetwork.com/wp-content/uploads/2025/06/shutterstock_1925688962.jpg",
        points: [
          "Function as a Soil Conditioner to neutralize acidic soil and provide calcium to plants.",
          "Used in Livestock to provide essential calcium for healthy growth and metabolism.",
        ],
      },
      {
        title: "Adhesives and Sealants",
        image: "https://parsonadhesives.in/wp-content/uploads/2023/10/505813c81f.jpeg",
        points: [
          "Calcite powder improve viscosity and enhance physical strength.",
          "Cost effective.",
        ],
      },
    ],
  },
  "dolomite-powder": {
    name: "Dolomite Powder",
    sections: [
      {
        title: "Paint and Coating",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          "Use as a Filler to provide Brightness, Opacity, Whiteness and reduce costs.",
          "Dolomite Powder provides excellent weather resistance for outdoor paints.",
          "Micronized Dolomite Powder is readily soluble in water. Hence, it is used as an extender in water based paints like emulsions, distemper.",
          "Due to its Brightness and Whiteness properties it use in Primer and Putties.",
          "Its low oil absorption capacity helps maintain a balanced PH value and reduces the amount of binder needed in the formulation."
        ],
      },
      {
        title: "Paper Manufacturing",
        image: "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg",
        points: [
          "Its natural pure white color increases the whiteness of the paper, significantly reducing the need for expensive optical brighteners.",
          "Use as a filler that imparts smoothness, luster, and gloss to printing paper.",
          "Dolomite conserves less water and increases the volume of water extracted from the pulp, which speeds up the overall output.",
          "It helps maintain the moisture and pH levels of the pulp.",
          "It is highly cost-effective, helping manufacturers decrease overall production costs by substituting for more expensive raw materials."
        ],
      },
      {
        title: "Glass and Ceramics",
        image: "https://www.olmec.co.uk/wp-content/uploads/2020/08/glass_ceramics-1.jpg",
        points: [
          "Dolomite Powder use as a Stabilizer and Flux in glass making.",
          "Calcium and Magnesium both elements improve glass quality, hardness and durability.",
          "Magnesia (MgO) in the dolomite reduces unwanted crystallization (devitrification) during the cooling process, which is essential for producing high-quality transparent glass.",
          "Its low thermal expansion and lack of reactivity with other substances makes it a popular choice for adding strength and durability to ceramic items.",
          "Dolomite use in Ceramics as a Flux, strength enhancer and glaze component.",
          "Calcium and Magnesium to improve mechanical strength, durability, and surface finish in tiles, sanitary ware, and pottery."
        ],
      },
      {
        title: "Agriculture",
        image: "https://images.stockcake.com/public/8/c/7/8c7936bc-2068-4f27-8387-6b7e617c6b8c_large/agriculture-meets-industry-stockcake.jpg",
        points: [
          "Dolomite Powder widely used in Agriculture for soil conditioning.",
          "Both Calcium and Magnesium are beneficial to soil for providing essential plant nutrients.",
          "Dolomite neutralize the Acidic Soil or Ph level and improve soil fertility.",
          "It Improve the efficiency of fertilizer by adding Dolomite powder in fertilizer."
        ],
      },
      {
        title: "Construction",
        image: "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb",
        points: [
          "Dolomite powder is a versatile and essential material in the construction industry, where it is primarily used as an aggregate, a filler, and an additive to enhance the strength, durability, water resistance and work ability of various materials.",
          "Used as a flux in steel production to improve the strength and hardness of the material.",
          "Due to its unique chemical & physical properties Dolomite Powder use in Concrete, Asphalt, Wall putty, Plaster, Cement."
        ],
      },
      {
        title: "Plastics and Polymers",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          "Dolomite Powder is a primary filler in various polymers (PVC, PE, PP) to reduce production costs, improve dimensional stability, enhance rigidity, and provide a smooth surface finish.",
          "Increase Humidity retention and consistency in plastic.",
          "It is used in products like pipes, automotive parts, furniture, film and packaging materials."
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp",
        points: [
          "In Rubber industries Dolomite Powder is one of the prominent mineral due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Act as a volume enhancer and stabilizer in Rubber."
        ],
      },
    ],
  },
  "dolomite-grits": {
    name: "Dolomite Grits",
    sections: [
      {
        title: "Construction",
        image: "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb",
        points: [
          "Dolomite Grits is a versatile and essential material in the construction industry, where it is primarily used as an aggregate, a filler, and an additive to enhance the strength, durability, water resistance and work ability of various materials.",
          "Due to its unique chemical & physical properties Dolomite Powder use in Concrete, Asphalt, Wall putty, Plaster, Cement",
          "Dolomite is a standard aggregate in concrete mixes and asphalt for roads, bridges, and buildings, helping to reduce cracking and maintain stability under heavy loads."
        ],
      },
      {
        title: "Agriculture",
        image: "https://images.stockcake.com/public/8/c/7/8c7936bc-2068-4f27-8387-6b7e617c6b8c_large/agriculture-meets-industry-stockcake.jpg",
        points: [
          "Dolomite neutralizes acidic soils, increasing pH to levels that enhance nutrient availability and microbial activity.",
          "Dolomite is a rich source of Calcium and Magnesium which are beneficial to soil for providing essential plant nutrients.",
          "It Improve the efficiency of fertilizer by adding Dolomite powder in fertilizer."
        ],
      },
      {
        title: "Glass",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          "Dolomite use as a Stabilizer and Flux in glass making.",
          "Calcium and Magnesium both elements improve glass quality, hardness and durability.",
          "Magnesia (MgO) in the dolomite reduces unwanted crystallization (devitrification) during the cooling process, which is essential for producing high-quality transparent glass."
        ],
      },
      {
        title: "Iron & Steel Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIasWdt9AwAjORhjiaTPtXswFPuurmTQR9A&s",
        points: [
          "Dolomite extensively use in Iron & Steel industry because of their chemical properties.",
          "Dolomite act as a metallurgical fluxing agent to remove impurities like silica and phosphorus and stabilize the molten metal during the sintering process.",
          "Dolomite is also used to produce refractory bricks for furnace linings due to its high heat resistance."
        ],
      },
    ],
  },
  "quartz-powder": {
    name: "Quartz Powder",
    sections: [
      {
        title: "Countertops/Slabs",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359646957/UV/UL/DL/69656835/kitchen-countertop-granite-slab.jpg",
        points: [
          "Quartz countertops are tops composed of agglomerates of resins and quartz powders, available in various colors.",
          "Quartz countertops are capable of giving elegance and prestige to the kitchen, but also because it is extremely convenient in terms of resistance, versatility and durability."
        ],
      },
      {
        title: "Glass Manufacturing",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          "Quartz is an important mineral for the glass industry because glass is made using silica dioxide which is colourless quartz.",
          "As the main component of glass, high-purity quartz powder is essential for producing flat glass, container glass, and specialty items like optical glass and laboratory ware (lenses, telescopes, microscopes, and electronic sensors), enhancing clarity and heat resistance."
        ],
      },
      {
        title: "Paint and Coating",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          "Quartz powder is used as a filler and extender in the paints and coatings industry to enhance the texture and finish of the products",
          "Due to its high hardness (7 on the Mohs scale), Quartz powder acts as a strengthening agent, making the paint film resistant to physical damage like abrasion, scratching, impact, and general wear and tear.",
          "Due to its Superior Weather Resistance it prevents premature fading, cracking, and peeling.",
          "Due to its Chemical and Stain Resistance of Quartz makes paints and coatings highly resistant to corrosive media such as acids, alkalis, solvents, and chemicals.",
          "Quartz powder is a versatile and valuable additive that significantly boosts the performance, longevity, and appearance of paints and coatings."
        ],
      },
      {
        title: "Ceramics",
        image: "https://b2bindustry.net/wp-content/uploads/ceramics-industry.jpg",
        points: [
          "Quartz powder plays an essential role in the production of different ceramic products such as tiles, sanitary ware, porcelain.",
          "While using Quartz Powder in Ceramic Industry used to provide Structural Integrity, enhance Strength and Durability, Reduces Shrinkage, Improve Thermal Stability.",
          "Quartz powder leads to a smooth surface finish."
        ],
      },
      {
        title: "Industrial Abrasives",
        image: "https://binicabrasive.com/wp-content/uploads/2025/09/industrial-abrasive-tools.webp",
        points: [
          "Quartz powder is used as an abrasive material in different industrial applications due to its Inherent Hardness, Durability, High Melting Point, Gritty texture, and Chemical Stability.",
          "Quartz Powder use in Sand Blasting, Grinding, Polishing, Stone Cutting, Sandpaper, Abrasive Cloths, Scouring Cleaners."
        ],
      },
      {
        title: "Foundry Application",
        image: "https://chromitesand.net/wp-content/uploads/2024/06/foundry.jpg",
        points: [
          "Quartz powder is extensively used in foundry applications. manufacture of molds and cores to be used in metal casting.",
          "Quartz powder has a high melting point and low thermal expansion, which means it's possible to make a various types of mold.",
          "It provides a better finish and more accuracy of dimension in castings, due to its fine size in particle form."
        ],
      },
      {
        title: "Electronic Application",
        image: "https://www.open.edu/openlearn/pluginfile.php/2481055/tool_ocwmanage/image/0/t312_OLHP_786x400.jpg",
        points: [
          "Due to their piezoelectric properties (generating an electric charge under mechanical stress), quartz crystals and grains are essential for manufacturing oscillators, resonators, and filters used in watches, radios, computers, and mobile phones.",
          "High-purity quartz is also used to produce silicon chips for semiconductors and solar panels."
        ],
      },
    ],
  },
  "quartz-grits": {
    name: "Quartz Grits",
    sections: [
      {
        title: "Countertops/Slabs",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359646957/UV/UL/DL/69656835/kitchen-countertop-granite-slab.jpg",
        points: [
          "Quartz countertops are tops composed of agglomerates of resins and quartz powders, available in various colors.",
          "Quartz countertops are capable of giving elegance and prestige to the kitchen, but also because it is extremely convenient in terms of resistance, versatility and durability."
        ],
      },
      {
        title: "Glass Manufacturing",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          "Quartz is an important mineral for the glass industry because glass is made using silica dioxide which is colourless quartz.",
          "As the main component of glass, high-purity Quartz Grits is essential for producing flat glass, container glass, and specialty items like optical glass and laboratory ware (lenses, telescopes, microscopes, and electronic sensors), enhancing clarity and heat resistance."
        ],
      },
      {
        title: "Electronic Application",
        image: "https://www.open.edu/openlearn/pluginfile.php/2481055/tool_ocwmanage/image/0/t312_OLHP_786x400.jpg",
        points: [
          "Due to their piezoelectric properties (generating an electric charge under mechanical stress), quartz crystals and grains are essential for manufacturing oscillators, resonators, and filters used in watches, radios, computers, and mobile phones.",
          "High-purity quartz is also used to produce silicon chips for semiconductors and solar panels."
        ],
      },
      {
        title: "Industrial Abrasives",
        image: "https://binicabrasive.com/wp-content/uploads/2025/09/industrial-abrasive-tools.webp",
        points: [
          "Quartz is used as an abrasive material in different industrial applications due to its Inherent Hardness, Durability, High Melting Point, Gritty texture, and Chemical Stability.",
          "Quartz use in Sand Blasting, Grinding, Polishing, Stone Cutting, Sandpaper, Abrasive Cloths, Scouring Cleaners."
        ],
      },
      {
        title: "Paint and Coating",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          "Quartz is used as a filler and extender in the paints and coatings industry to enhance the texture and finish of the products",
          "Due to its high hardness (7 on the Mohs scale), Quartz powder acts as a strengthening agent, making the paint film resistant to physical damage like abrasion, scratching, impact, and general wear and tear.",
          "Due to its Superior Weather Resistance it prevents premature fading, cracking, and peeling.",
          "Due to its Chemical and Stain Resistance of Quartz makes paints and coatings highly resistant to corrosive media such as acids, alkalis, solvents, and chemicals.",
          "Quartz powder is a versatile and valuable additive that significantly boosts the performance, longevity, and appearance of paints and coatings."
        ],
      },
      {
        title: "Ceramics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOe_bmMn3gxPdqZGqEM6Grz-EeGAxEKv2zA&s",
        points: [
          "Quartz plays an essential role in the production of different ceramic products such as tiles, sanitary ware, porcelain.",
          "While using Quartz in Ceramic Industry used to provide Structural Integrity, enhance Strength and Durability, Reduces Shrinkage, Improve Thermal Stability.",
          "Quartz powder leads to a smooth surface finish."
        ],
      },
      {
        title: "Foundry Application",
        image: "https://chromitesand.net/wp-content/uploads/2024/06/foundry.jpg",
        points: [
          "In metal casting, quartz sand is used to create molds and cores due to its high heat resistance and thermal stability, which ensures the accuracy and quality of the cast products."
        ],
      },
      {
        title: "Construction Materials",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        points: [
          "Quartz grains are a vital aggregate in cement, concrete, mortar, and asphalt, where they enhance strength, durability, and resistance to weathering.",
          "They are also used in manufacturing artificial marble and quartz slabs for countertop's and flooring."
        ],
      },
    ],
  },
  "coated-calcite": {
    name: "Coated Calcite Powder",
    sections: [
      {
        title: "Plastics and Polymers",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          "It acts as an economical filler that improves the mechanical properties (stiffness, impact resistance), dimensional stability, and heat stability of the final plastic products, while also reducing overall production costs.",
          "Due to excellent properties Coated Calcite powder widely use in PVC pipes, films, automotive parts electrical component and plastics sheets."
        ],
      },
      {
        title: "Paint and Coating",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          "In Paint and Coating Coated Calcite powder is used as an extender pigment to enhance the opacity, brightness, and durability of paints.",
          "Coated Calcite powder reduce coat by replacing more expensive pigments like Titanium Dioxide.",
          "The coating improves weather resistance and provides better rheological (flow) properties for the paint."
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjMqzAkLghu9rpC8FqEmV6GlfKbtv1Sn3Jw&s",
        points: [
          "In Rubber industries Coated Calcite Powder is one of the prominent mineral due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Act as a volume enhancer and stabilizer in Rubber."
        ],
      },
      {
        title: "Paper Manufacturing",
        image: "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg",
        points: [
          "Coated Calcite powder is an ideal component for producing writing, printing, and packaging grade paper.",
          "Improve Brightness and Opacity and Smoothness and reduces the use of costly wood pulp.",
          "It is a type of mineral filler that brings down the overall production cost of manufacturing paper."
        ],
      },
      {
        title: "Adhesives and Sealants",
        image: "https://www.tech-masters.com/files/5c/a5bfd1b5dc0e27a81e726fbef1ce4d/Adhesives%20%26%20Sealants%20Kopie_2000x900_10.jpg",
        points: [
          "It is incorporated to improve bonding strength, control viscosity, reduce shrinkage, and act as a functional filler in various adhesive and sealant formulations."
        ],
      },
    ],
  },
  "coated-dolomite": {
    name: "Coated Dolomite Powder",
    sections: [
      {
        title: "Plastics and Polymers",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          "It acts as an economical filler that improves the mechanical properties (stiffness, impact resistance), dimensional stability, and heat stability of the final plastic products, while also reducing overall production costs.",
          "Due to excellent properties Coated Dolomite powder widely use in PVC pipes, films, automotive parts electrical component and plastics sheets."
        ],
      },
      {
        title: "Paint and Coating",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
        points: [
          "In Paint and Coating Coated Dolomite powder is used as an extender pigment to enhance the opacity, brightness, and durability of paints.",
          "The coating improves weather resistance and provides better rheological (flow) properties for the paint."
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjMqzAkLghu9rpC8FqEmV6GlfKbtv1Sn3Jw&s",
        points: [
          "In Rubber industries Coated Dolomite Powder is one of the prominent mineral due its performance factor.",
          "It is used as a reinforcing filler to improve flexibility, durability, tear resistance, and overall mechanical performance while reducing the amount of expensive rubber required.",
          "Act as a volume enhancer and stabilizer in Rubber."
        ],
      },
      {
        title: "Adhesives and Sealants",
        image: "https://www.tech-masters.com/files/5c/a5bfd1b5dc0e27a81e726fbef1ce4d/Adhesives%20%26%20Sealants%20Kopie_2000x900_10.jpg",
        points: [
          "It is incorporated to improve bonding strength, control viscosity, reduce shrinkage, and act as a functional filler in various adhesive and sealant formulations."
        ],
      },
    ],
  },
  "pebble": {
    name: "Pebble",
    sections: [
      {
        title: "Uses in Landscaping",
        image: "https://cdn.shopify.com/s/files/1/0717/5271/2479/files/Gardening-stones-on-pathway_75a2af72-baf5-4986-b2b0-b3e3e9ca79b1_1024x1024.jpg?v=1679737218",
        points: [
          "Garden Borders: Pebbles are a great way to cover garden soil, providing a polished look while helping to retain moisture and prevent weeds.",
          "Pathways: Pebble stone pathways create a natural, inviting look in gardens or entryways, offering a soft and comfortable walking surface that complements plants and other landscaping elements.",
          "Water Features: Whether it's a pond, fountain, or waterfall, adding pebbles enhances water features by adding texture and colour, creating a serene, spa-like ambiance.",
          "Driveways and Patios: Pebbles can be used to cover entire surfaces or to accentuate design elements in driveways and patios, bringing depth and sophistication to these areas.",
          "Zen and Rock Gardens: Inspired by traditional Japanese gardens, pebbles are essential in creating minimalist and peaceful rock gardens or Zen spaces. Their clean look and neutral colours foster relaxation and simplicity.",
          "Planters and Flower Pots: Small pebbles are great for topping soil in pots, adding aesthetic value while helping with drainage. They're also ideal for creating succulent and cactus arrangements."
        ],
      },
      {
        title: "Health Benefits",
        image: "https://vital-wellbeing.com/wp-content/uploads/2019/09/walking-on-stones-proprioception-shutterstock_211023196-188575_1080x675.jpg",
        points: [
          "Stimulates Acupressure Points: The soles of the feet contain numerous nerve endings and acupressure points connected to various organs and systems in the body. Stimulating these points can improve energy flow and circulation.",
          "Enhances Blood Circulation: Applying pressure to the feet encourages better blood flow throughout the body, delivering more oxygen and nutrients to tissues.",
          "Reduces Stress and Anxiety: The meditative nature of focusing on foot placement while walking on pebbles, combined with the sensory experience, can help calm the mind and lower stress levels.",
          "Improves Sleep Quality: The calming effect and nerve stimulation may contribute to better relaxation and more restful sleep, making it helpful for those with insomnia."
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