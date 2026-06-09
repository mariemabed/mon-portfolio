import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#education", label: "Éducation" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full px-8 lg:px-20 py-6 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">Mariem EL ABED</div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/images/CV.pdf"
          download="Mariem_Abed_CV.pdf"
          className="flex items-center gap-2 px-6 py-2 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium ml-4"
        >
          <Download size={18} />
          Télécharger CV
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden text-gray-700 hover:text-[#6D28D9] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col px-8 py-6 gap-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/images/CV.pdf"
            download="Mariem_Abed_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium w-fit mt-2"
          >
            <Download size={18} />
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}