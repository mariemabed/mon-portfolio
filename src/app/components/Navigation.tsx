import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLang } from '../components/LanguageContext';

const t = {
  fr: {
    links: [
      { href: "#accueil", label: "Accueil" },
      { href: "#about", label: "À propos" },
      { href: "#competences", label: "Compétences" },
      { href: "#education", label: "Éducation" },
      { href: "#projects", label: "Projets" },
      { href: "#contact", label: "Contact" },
    ],
    cv: "Télécharger CV",
  },
  en: {
    links: [
      { href: "#accueil", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#competences", label: "Skills" },
      { href: "#education", label: "Education" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    cv: "Download CV",
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const content = t[lang];

  return (
    <nav className="w-full px-8 lg:px-20 py-6 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-bold text-gray-900">Mariem EL ABED</div>

      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-8">
          {content.links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-[#6D28D9] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggleLang}
          className="px-3 py-1.5 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg text-sm font-bold hover:bg-[#6D28D9] hover:text-white transition-colors"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
        <a href="/images/CV.pdf" download="Mariem_Abed_CV.pdf"
          className="flex items-center gap-2 px-6 py-2 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium">
          <Download size={18} />
          {content.cv}
        </a>
      </div>

      <button className="lg:hidden text-gray-700 hover:text-[#6D28D9]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col px-8 py-6 gap-4 lg:hidden">
          {content.links.map((link) => (
            <a key={link.href} href={link.href}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors text-lg"
              onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <button onClick={toggleLang}
              className="px-3 py-1.5 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg text-sm font-bold hover:bg-[#6D28D9] hover:text-white transition-colors">
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <a href="/images/CV.pdf" download="Mariem_Abed_CV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium">
              <Download size={18} />
              {content.cv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}