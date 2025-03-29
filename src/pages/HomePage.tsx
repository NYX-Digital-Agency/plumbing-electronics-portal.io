
import { BookOpen, Tool, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Button from "@/components/Button";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/lovable-uploads/1bf09bfe-3c4b-4a5f-afaa-698b72c7d3e9.png"
          alt="Background"
          className="w-full h-[70vh] object-cover"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
          }}
        />
        <div className="absolute inset-0 bg-idel-dark bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">ID.EL. SYSTEMS s.r.l.s.</h1>
            <div className="bg-white bg-opacity-90 text-idel-dark p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                Le nuove tecnologie stanno trasformando il settore, creando
                opportunità ma anche nuove sfide.
              </p>
              <p className="text-2xl font-bold mb-4">
                La tua azienda è pronta a evolversi?
              </p>
              <p className="mb-2">
                Offriamo soluzioni elettriche e idrauliche innovative per un futuro
                sicuro, efficiente e competitivo!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Servizi"
              icon={<Tool size={48} />}
              link="/servizi"
            />
            <Card
              title="Catalogo"
              icon={<BookOpen size={48} />}
              link="/catalogo"
            />
            <Card
              title="Preventivi"
              icon={<MessageCircle size={48} />}
              link="/contatti"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
