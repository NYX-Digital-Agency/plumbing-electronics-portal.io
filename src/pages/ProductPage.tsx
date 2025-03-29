
import { useParams } from "react-router-dom";
import { ArrowLeft, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

const ProductPage = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();

  // Mock product data
  const product = {
    id: productId,
    name: `${productId} - MANICOTTO`,
    image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
    technicalDrawing: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
    description: "Descrizione prodotto breve ed esplicativa...",
    category,
  };

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
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            to={`/catalogo/${category}`}
            className="inline-flex items-center text-idel-blue hover:underline"
          >
            <ArrowLeft size={16} className="mr-1" />
            Torna a {getCategoryName(category || "")}
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-idel-dark mb-8 border-b pb-4">
          {product.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border rounded-lg p-6 bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
            <div className="mt-4">
              <Button variant="primary" size="lg" className="w-full">
                <FileDown size={18} className="mr-2" />
                Scarica scheda tecnica
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="border rounded-lg p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Descrizione</h2>
                  <p>{product.description}</p>
                </div>
                <div>
                  <img
                    src={product.technicalDrawing}
                    alt="Disegno tecnico"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Specifiche Tecniche</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Materiale:</p>
                  <p>Polipropilene</p>
                </div>
                <div>
                  <p className="font-medium">Dimensioni:</p>
                  <p>10 x 5 x 2 cm</p>
                </div>
                <div>
                  <p className="font-medium">Temperatura Max:</p>
                  <p>80°C</p>
                </div>
                <div>
                  <p className="font-medium">Pressione Max:</p>
                  <p>16 bar</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">Prodotti Correlati</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <Link 
                    key={item}
                    to={`/catalogo/${category}/${7010 + item}`}
                    className="border rounded p-2 flex flex-col items-center hover:shadow-sm"
                  >
                    <img
                      src={product.image}
                      alt="Prodotto correlato"
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-sm text-center mt-2">Manicotto {7010 + item}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
