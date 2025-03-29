
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Chi siamo", path: "/chi-siamo" },
    { title: "I nostri servizi", path: "/servizi" },
    { title: "Catalogo", path: "/catalogo" },
    { title: "Contatti", path: "/contatti" },
  ];

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/1bf09bfe-3c4b-4a5f-afaa-698b72c7d3e9.png"
            alt="ID.EL Systems Logo"
            className="h-12"
          />
          <span className="text-idel-dark ml-2 text-sm font-medium">Id.el.systems</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-idel-dark hover:text-idel-blue transition-colors duration-200 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-5 right-5"
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-idel-dark hover:text-idel-blue py-2 text-lg font-medium border-b border-gray-100"
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
