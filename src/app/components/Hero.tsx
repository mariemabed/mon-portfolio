import { ImageWithFallback } from './figma/ImageWithFallback';

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
              className="px-8 py-3 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg hover:bg-[#6D28D9] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#6D28D9] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse"></div>
          <div className="relative z-10 p-8">
            <ImageWithFallback
              src="/src/public/images/image_linkedin_cut.png"
              alt="Mariem El Abed"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
