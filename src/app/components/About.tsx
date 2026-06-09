import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Esprit d'analyse",
    "Travail en équipe",
    "Adaptabilité rapide",
    "Passion pour l’innovation",
  ];

  return (
    <section
      id="about"
      className="w-full px-8 lg:px-20 py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
          À propos de moi
          <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}
          <div className="space-y-6">

            {/* Card 1 */}
            <div className="group relative p-6 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* violet glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/0 to-[#6D28D9]/0 group-hover:from-[#6D28D9]/10 group-hover:to-purple-100/40 transition-all duration-300"></div>

              <p className="relative text-gray-700 leading-relaxed text-base">
                Jeune diplômée en Technologie de l'Informatique, spécialisée en Développement des Systèmes d'Information
                à l'ISET Sousse. Actuellement en Master en Cloud Computing et Développement des Applications Distribuées.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* violet glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/0 to-[#6D28D9]/0 group-hover:from-[#6D28D9]/10 group-hover:to-purple-100/40 transition-all duration-300"></div>

              <p className="relative text-gray-700 leading-relaxed text-base">
                Passionnée par la création de solutions innovantes, je m’adapte rapidement aux environnements techniques
                et je m’investis dans des projets à forte valeur ajoutée.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:border-[#6D28D9]/30 hover:bg-[#6D28D9]/5 transition"
                >
                  <CheckCircle size={16} className="text-[#6D28D9]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">

              {/* glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9] to-purple-300 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

              {/* image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6D28D9] rounded-full transform scale-110"></div>
                  <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <ImageWithFallback
                      src="/images/image_linkedin_cut.png"
                      alt="Mariem EL ABED"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}              