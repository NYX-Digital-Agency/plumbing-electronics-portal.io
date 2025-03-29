
import { Lightbulb, BookOpen, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const AboutPage = () => {
  return (
    <div>
      <Hero title="Chi siamo" bgColor="bg-idel-dark" />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-idel-dark mb-4">
                Crediamo nel valore del nostro lavoro e nell'impatto che può avere.
              </p>
              <p className="mb-4">
                Ogni giorno mettiamo <span className="font-bold">competenza e passione</span> al 
                servizio di aziende e professionisti, offrendo 
                <span className="font-bold italic"> soluzioni elettriche e idrauliche su misura</span>.
              </p>
              <p className="mb-4">
                Ci impegniamo a garantire efficienza, sicurezza e
                sostenibilità attraverso <span className="font-bold">tecnologie innovative</span> e un
                <span className="font-bold"> servizio affidabile</span>.
              </p>
              <p>
                Il nostro obiettivo è fare la differenza, creando
                <span className="font-bold"> soluzioni che durano nel tempo</span>.
              </p>
            </div>
            <div>
              <img
                src="/lovable-uploads/6a17fd14-e17b-4927-b210-02ebf187e0cd.png"
                alt="Tecnico al lavoro"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card
              title="Tecnologia e Innovazione"
              icon={<Lightbulb size={32} />}
              description="Investiamo in impianti di ultima generazione per ottimizzare la produzione e migliorare il controllo qualità, garantendo elevati standard su tutti i nostri prodotti e servizi."
              className="h-full"
            />
            <Card
              title="Vasta gamma di prodotti"
              icon={<BookOpen size={32} />}
              description="Grazie all'esperienza e a un team specializzato e all'innovazione tecnologica, offriamo un'ampia selezione di soluzioni per l'utilizzo, l'irrigazione e l'alimentazione. Le nostre soluzioni si adattano a ogni esigenza."
              className="h-full"
            />
            <Card
              title="Sicurezza e Protezione"
              icon={<ShieldCheck size={32} />}
              description="Per garantirvi impianti affidabili e durevoli, adottiamo soluzioni avanzate per la protezione di installazioni e cablaggi elettrici, assicurando massima sicurezza nel lungo periodo."
              className="h-full"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-idel-dark">Certificazioni</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Certificato 1</li>
              <li>Certificato 2</li>
              <li>Certificato 3</li>
              <li>Certificato 4</li>
              <li>Certificato 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
