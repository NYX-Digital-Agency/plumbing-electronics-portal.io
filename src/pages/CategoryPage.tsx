
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  // Mock products for demonstration
  const products = [
    {
      id: "7010",
      name: "Manicotto",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7011",
      name: "Compressore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7012",
      name: "Raccordo",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7013",
      name: "Valvola",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7014",
      name: "Giunto",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7015",
      name: "Tubo",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7016",
      name: "Adattatore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7017",
      name: "Flangia",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7018",
      name: "Connettore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7019",
      name: "Collettore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
  ];

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const getCategoryName = (categoryId: string) => {
    const categories: Record<string, string> = {
      compressione: "Compressione",
      elettronica: "Elettronica",
      valvole: "Valvole",
      chiavi: "Chiavi",
      pvc: "PVC",
    };
    return categories[categoryId] || categoryId;
  };

  return (
    <div>
      <div className="border-b border-gray-300">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-idel-dark">{getCategoryName(category || "")}</h1>
        </div>
      </div>

      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                category={category || ""}
                className="bg-white border-2 border-gray-200 rounded-xl hover:shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
