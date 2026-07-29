import { CheckCircle } from "lucide-react";
import { useLang } from '../components/LanguageContext';

const t = {
  fr: {
    title: "À propos de moi",
    card1: "Jeune diplômée en Technologie de l'Informatique, spécialisée en Développement des Systèmes d'Information à l'ISET Sousse. Actuellement en Master en Cloud Computing et Développement des Applications Distribuées.",
    card2: "Passionnée par la création de solutions innovantes, je m'adapte rapidement aux environnements techniques et je m'investis dans des projets à forte valeur ajoutée.",
    highlights: ["Esprit d'analyse", "Travail en équipe", "Adaptabilité rapide", "Passion pour l'innovation"],
  },
  en: {
    title: "About me",
    card1: "Recent graduate in Information Technology, specialized in Information Systems Development at ISET Sousse. Currently pursuing a Master's in Cloud Computing and Distributed Application Development.",
    card2: "Passionate about creating innovative solutions, I adapt quickly to technical environments and commit to high-impact projects.",
    highlights: ["Analytical mindset", "Teamwork", "Quick adaptability", "Passion for innovation"],
  },
};

export default function About() {
  const { lang } = useLang();
  const content = t[lang];

  return (
    <section id="about" className="w-full px-8 lg:px-20 py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
          {content.title}
          <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
        </h2>
        <div className="space-y-8">
          {[content.card1, content.card2].map((text, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/0 to-[#6D28D9]/0 group-hover:from-[#6D28D9]/10 group-hover:to-purple-100/40 transition-all duration-300"></div>
              <p className="relative text-gray-700 leading-relaxed text-lg text-center">{text}</p>
            </div>
          ))}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {content.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-100 hover:border-[#6D28D9]/30 hover:bg-[#6D28D9]/5 transition">
                <CheckCircle size={18} className="text-[#6D28D9]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}