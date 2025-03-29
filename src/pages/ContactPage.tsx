
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message to user
    toast({
      title: "Richiesta inviata",
      description: "Ti contatteremo al più presto!",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div>
      <Hero 
        title="Troviamo insieme la soluzione giusta per la tua azienda!" 
        bgColor="bg-idel-dark"
        subtitle="Parlaci delle tue esigenze e scopri come ottimizzare i tuoi impianti con soluzioni su misura, efficienti e sostenibili!"
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-idel-dark">Richiedi un preventivo</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome e Cognome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-idel-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-idel-blue"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefono *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-idel-blue"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Azienda *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-idel-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-idel-blue"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Richiedi un preventivo
                  </Button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-idel-dark">Contatti</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-3 text-idel-blue" size={24} />
                  <div>
                    <h3 className="font-semibold">Indirizzo</h3>
                    <p>ID.EL. Systems S.r.l.s.</p>
                    <p>Via Fabbriche, 22</p>
                    <p>15069 Serravalle Scrivia (AL)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mt-1 mr-3 text-idel-blue" size={24} />
                  <div>
                    <h3 className="font-semibold">Telefono</h3>
                    <p>+39 0143 60991</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mt-1 mr-3 text-idel-blue" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@idel-systems.com</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Servizio Clienti</h3>
                  <p>+39 0143 609920</p>
                  <p>sales@plasson.it</p>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-3">Ufficio Tecnico</h3>
                  <p>+39 0143 609930</p>
                  <p>tecnico@plasson.it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
