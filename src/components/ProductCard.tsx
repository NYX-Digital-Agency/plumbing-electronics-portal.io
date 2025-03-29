
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
    <div className={cn("bg-white rounded-xl overflow-hidden flex flex-col items-center", className)}>
      <Link to={`/catalogo/${category}/${id}`} className="w-full p-4 flex flex-col items-center">
        <div className="w-full h-32 flex items-center justify-center mb-2">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-center text-idel-dark font-bold mb-4">{name}</h3>
        <Button 
          variant="primary" 
          size="sm" 
          className="w-full rounded-md text-xs"
        >
          Scopri di più
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
