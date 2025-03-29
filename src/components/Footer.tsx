
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium">ID.EL. Systems S.r.l.s.</p>
            <p>Via Fabbriche, 22 - 15069 Serravalle Scrivia (AL)</p>
            <p>00956750103</p>
            <p>+39 0143 60991</p>
          </div>
          <div className="md:text-center">
            <p>{new Date().getFullYear()} ID.EL. Systems All Rights Reserved</p>
          </div>
          <div className="md:text-right">
            <div>
              <p className="font-medium">Servizio Clienti</p>
              <p>+39 0143 609920</p>
              <p>sales@plasson.it</p>
            </div>
            <div className="mt-2">
              <p className="font-medium">Ufficio Tecnico</p>
              <p>+39 0143 609930</p>
              <p>tecnico@plasson.it</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
