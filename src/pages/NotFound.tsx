
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-idel-dark mb-4">404</h1>
        <p className="text-xl text-idel-gray mb-8">Pagina non trovata</p>
        <p className="mb-8">La pagina che stai cercando non esiste o è stata spostata.</p>
        <Button href="/" variant="primary" size="lg">
          Torna alla Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
