import { useLang } from '../components/LanguageContext';

const t = {
  fr: {
    title: "Formation",
    items: [
      { degree: "Baccalauréat en Sciences Techniques", status: "Admise", icon: "📚", badgeColor: "bg-purple-100 text-purple-700" },
      { degree: "Licence en Développement des Systèmes d'Information", status: "Diplômée", icon: "🎓", badgeColor: "bg-purple-100 text-purple-700" },
      { degree: "Master en Cloud Computing et Développement des Applications Distribuées", status: "En cours", icon: "☁️", badgeColor: "bg-yellow-100 text-yellow-700" },
    ],
  },
  en: {
    title: "Education",
    items: [
      { degree: "Baccalaureate in Technical Sciences", status: "Passed", icon: "📚", badgeColor: "bg-purple-100 text-purple-700" },
      { degree: "Bachelor's in Information Systems Development", status: "Graduated", icon: "🎓", badgeColor: "bg-purple-100 text-purple-700" },
      { degree: "Master's in Cloud Computing and Distributed Application Development", status: "In progress", icon: "☁️", badgeColor: "bg-yellow-100 text-yellow-700" },
    ],
  },
};

export default function Education() {
  const { lang } = useLang();
  const content = t[lang];

  return (
    <section id="education" className="w-full px-8 lg:px-20 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
          {content.title}
          <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
        </h2>
        <div className="relative">
          <div className="absolute transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] rounded-full hidden md:block" />
          <div className="flex flex-col gap-12">
            {content.items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#6D28D9] border-4 border-white shadow-lg z-10" />
                </div>
                <div className="w-full md:w-10/12">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] text-lg shadow-md shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">{item.degree}</h3>
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-2 ${item.badgeColor}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}