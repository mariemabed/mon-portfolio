import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin } from "lucide-react";
import { useLang } from '../components/LanguageContext';

const t = {
  fr: {
    greeting: "Bonjour, je m'appelle",
    subtitle: "Diplômée en Développement des Systèmes d'Information",
    desc: "Actuellement étudiante en Master en Cloud Computing et Développement des Applications Distribuées",
    projects: "Projets",
  },
  en: {
    greeting: "Hi, my name is",
    subtitle: "Graduate in Information Systems Development",
    desc: "Currently pursuing a Master's in Cloud Computing and Distributed Application Development",
    projects: "Projects",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const content = t[lang];

  return (
    <section id="accueil" className="w-full px-8 lg:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            {content.greeting}<br />Mariem El Abed
          </h1>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
          <p className="text-gray-600 leading-relaxed max-w-lg">{content.desc}</p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors">
              {content.projects}
            </a>
            <a href="https://www.linkedin.com/in/mariem-abed-81b738245" target="_blank" rel="noopener noreferrer"
              className="group px-8 py-3 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg hover:bg-[#6D28D9] hover:text-white transition-all flex items-center gap-2">
              <Linkedin size={22} className="group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9] to-purple-300 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#6D28D9] rounded-full transform scale-110"></div>
              <div className="relative z-10 w-96 h-96 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <ImageWithFallback src="/images/image_linkedin_cut.png" alt="Mariem EL ABED" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}