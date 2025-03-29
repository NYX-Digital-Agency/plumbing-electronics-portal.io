
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  link?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = ({
  title,
  icon,
  description,
  link,
  linkText = "Scopri di più",
  className,
  children,
  onClick,
}: CardProps) => {
  const cardContent = (
    <>
      <div className="flex flex-col items-center text-center p-6">
        {icon && <div className="mb-4 text-idel-blue">{icon}</div>}
        <h3 className="text-xl font-bold mb-3 text-idel-dark">{title}</h3>
        {description && <p className="text-idel-gray mb-4">{description}</p>}
        {children}
        {link && linkText && (
          <div className="mt-4">
            <span className="inline-flex items-center justify-center rounded-md bg-idel-dark text-white px-4 py-2 text-sm font-medium hover:bg-idel-blue transition-colors">
              {linkText}
            </span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
        className
      )}
    >
      {link ? (
        <Link to={link} className="block h-full">
          {cardContent}
        </Link>
      ) : onClick ? (
        <button onClick={onClick} className="w-full text-left">
          {cardContent}
        </button>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default Card;
