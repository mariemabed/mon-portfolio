import { Code, Layers, Monitor } from "lucide-react";
import { useLang } from '../components/LanguageContext';

const t = {
  fr: {
    title: "Compétences",
    categories: ["Langages de programmation", "Frameworks", "Systèmes d'exploitation"],
  },
  en: {
    title: "Skills",
    categories: ["Programming Languages", "Frameworks", "Operating Systems"],
  },
};

export default function Skills() {
  const { lang } = useLang();
  const content = t[lang];

  const skills = [
    { title: content.categories[0], icon: <Code size={24} />, items: ["Java", "Python", "JavaScript", "PHP"] },
    { title: content.categories[1], icon: <Layers size={24} />, items: ["Angular", "React.js", "Symfony", "Spring Boot", "Express.js", "Flutter"] },
    { title: content.categories[2], icon: <Monitor size={24} />, items: ["Windows", "Linux"] },
  ];

  return (
    <section id="competences" className="w-full px-8 lg:px-20 py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
          {content.title}
          <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 text-[#6D28D9] group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{skill.title}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="px-4 py-1.5 text-sm bg-[#6D28D9]/10 text-[#6D28D9] rounded-full font-medium hover:bg-[#6D28D9] hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6D28D9]/0 to-[#6D28D9]/0 group-hover:from-[#6D28D9]/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}