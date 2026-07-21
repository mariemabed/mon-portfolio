import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="w-full px-8 lg:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Bonjour, je m'appelle<br />
            Mariem El Abed
          </h1>
          <p className="text-xl text-gray-600">
            Diplômée en Développement des Systèmes d’Information
          </p>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            Actuellement étudiante en Master en Cloud Computing et Développement des Applications Distribuées
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors"
            >
              Projets
            </a>
            <a
              href="https://www.linkedin.com/in/mariem-abed-81b738245"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg hover:bg-[#6D28D9] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={22} className="group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </div>
        </div>
        {/* IMAGE SIDE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">

            {/* glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9] to-purple-300 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

            {/* image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#6D28D9] rounded-full transform scale-110"></div>

              {/* Photo augmentée */}
              <div className="relative z-10 w-96 h-96 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-8 border-white shadow-2xl">
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
    </section>
  );
}
