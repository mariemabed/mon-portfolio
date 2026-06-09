import { Download } from 'lucide-react';

export default function CV() {
  return (
    <section id="cv" className="w-full px-8 lg:px-20 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          CV
          <div className="w-32 h-1 bg-[#6D28D9] mt-2"></div>
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Téléchargez mon CV pour en savoir plus sur mon parcours professionnel et mes compétences.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#6D28D9] text-white rounded-lg hover:bg-[#5B21B6] transition-colors font-medium">
            <Download size={20} />
            Télécharger mon CV
          </button>
        </div>
      </div>
    </section>
  );
}
