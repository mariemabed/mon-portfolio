import { Linkedin, Github, Mail, Phone, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-8 lg:px-20 py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
          Contactez-moi
          <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
        </h2>

        {/* INFO CARDS (TOP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* Email */}
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition">
            <Mail className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">Email</p>
            <p className="text-xs text-gray-500">abedmariem24@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition">
            <Phone className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">Téléphone</p>
            <p className="text-xs text-gray-500">+216 25 028 150</p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mariem-abed-81b738245"
            target="_blank"
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition block"
          >
            <Linkedin className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">LinkedIn</p>
            <p className="text-xs text-gray-500">Profil</p>
          </a>

          {/* CV */}
          <a
            href="/images/CV.pdf"
            download="Mariem_Abed_CV.pdf"
            type="application/pdf"
            className="bg-[#6D28D9] text-white p-5 rounded-2xl shadow-md text-center hover:bg-[#5B21B6] transition block"
          >
            <FileText className="mx-auto" />
            <p className="mt-2 text-sm">CV</p>
            <p className="text-xs text-white/80">Télécharger</p>
          </a>

        </div>

        {/* FORM (BOTTOM) */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5">

          <div>
            <label className="text-sm text-gray-700">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Votre message..."
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6D28D9] text-white py-3 rounded-lg font-medium hover:bg-[#5B21B6] transition"
          >
            Envoyer
          </button>
        </form>

      </div>
    </section>
  );
}