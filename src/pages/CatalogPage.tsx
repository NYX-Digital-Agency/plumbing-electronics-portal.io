
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "compressione",
    name: "Compressione",
    image: "/lovable-uploads/0c01488b-3745-4474-9b81-c6431cf2ee98.png",
  },
  {
    id: "elettronica",
    name: "Elettronica",
    image: "/lovable-uploads/ba73e964-d863-4601-8ff5-3714096914ad.png",
  },
  {
    id: "valvole",
    name: "Valvole",
    image: "/lovable-uploads/5d882ca1-174e-4ebb-9da1-b0e38e049de4.png",
  },
  {
    id: "chiavi",
    name: "Chiavi",
    image: "/lovable-uploads/0c01488b-3745-4474-9b81-c6431cf2ee98.png",
  },
  {
    id: "pvc",
    name: "PVC",
    image: "/lovable-uploads/ba73e964-d863-4601-8ff5-3714096914ad.png",
  },
];

const CatalogPage = () => {
  return (
    <div>
      <Hero title="Categoria Prodotto" bgColor="bg-white" textColor="text-idel-dark" />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/catalogo/${category.id}`}
                className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-center font-medium text-idel-dark mb-4">{category.name}</h3>
                <button className="bg-idel-dark text-white px-4 py-2 rounded text-sm">
                  Scopri di più
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
