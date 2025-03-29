
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  className?: string;
}

const ProductCard = ({ id, name, image, category, className }: ProductCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 overflow-hidden", className)}>
      <Link to={`/catalogo/${category}/${id}`} className="block">
        <div className="p-4 flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-contain mb-4"
          />
          <h3 className="text-center text-idel-dark font-medium">{name}</h3>
          <div className="mt-4">
            <Button variant="primary" size="sm">
              Scopri di più
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
