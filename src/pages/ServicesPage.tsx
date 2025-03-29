
import { Zap, Droplet } from "lucide-react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Button from "@/components/Button";

const ServicesPage = () => {
  return (
    <div>
      <Hero title="I nostri sevizi" bgColor="bg-idel-dark" />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="/lovable-uploads/b3b97ff8-50d7-4992-81db-ef3aeebc8275.png"
                alt="Tecnico al lavoro"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="mb-4">
                Offriamo <span className="font-bold italic">soluzioni elettriche e idrauliche
                su misura</span>, combinando innovazione, efficienza e sostenibilità.
              </p>
              <p className="mb-4">
                Dalla <span className="font-bold">progettazione all'installazione</span>,
                fino alla <span className="font-bold">manutenzione</span>, garantiamo
                impianti sicuri, affidabili e performanti per
                aziende e professionisti.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card
              title="Elettronica"
              icon={<Zap size={48} />}
              description="Progettiamo e realizziamo impianti elettrici sicuri, efficienti e sostenibili, garantendo soluzioni su misura per aziende e professionisti. Dall'installazione alla manutenzione, assicuriamo affidabilità e innovazione."
              link="/servizi/elettronica"
              className="h-full"
            />
            <Card
              title="Idraulica"
              icon={<Droplet size={48} />}
              description="Offriamo impianti idraulici avanzati per ogni esigenza, combinando efficienza, sostenibilità e durata nel tempo. Dalla distribuzione dell'acqua al riscaldamento, realizziamo soluzioni su misura per ogni contesto."
              link="/servizi/idraulica"
              className="h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-idel-dark py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Troviamo insieme la soluzione giusta per la tua azienda!</h2>
          <p className="mb-6">
            Parlaci delle tue esigenze e scopri come ottimizzare i tuoi impianti con
            soluzioni su misura, efficienti e sostenibili!
          </p>
          <Button href="/contatti" variant="primary" size="lg">
            Richiedi un preventivo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
