import { Download } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="w-full px-8 lg:px-20 py-6 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-gray-900">Mariem EL ABED</div>
      <div className="flex items-center gap-8">
        <div className="flex gap-8">
          <a href="#accueil" className="text-gray-700 hover:text-[#6D28D9] transition-colors">Accueil</a>
          <a href="#about" className="text-gray-700 hover:text-[#6D28D9] transition-colors">À propos</a>
          <a href="#competences" className="text-gray-700 hover:text-[#6D28D9] transition-colors">Compétences</a>
          <a href="#education" className="text-gray-700 hover:text-[#6D28D9] transition-colors">Éducations</a>
          <a href="#projects" className="text-gray-700 hover:text-[#6D28D9] transition-colors">Projets</a>
          <a href="#contact" className="text-gray-700 hover:text-[#6D28D9] transition-colors">Contact</a>
        </div>
        <a
          href="/src/public/CV.pdf"
          download="Mariem_Abed_CV.pdf"
          type="application/pdf"
          className="flex items-center gap-2 px-6 py-2 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium ml-4"
        >
          <Download size={18} />
          Télécharger CV
        </a>
      </div>
    </nav>
  );
}
