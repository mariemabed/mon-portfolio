import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Mail, Phone, FileText, CheckCircle, AlertCircle, Loader } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_bba24yn";
const EMAILJS_TEMPLATE_ID = "template_vk7gkg5";
const EMAILJS_PUBLIC_KEY = "We16MGB2KXA5d2SFx";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition">
            <Mail className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">Email</p>
            <p className="text-xs text-gray-500">abedmariem24@gmail.com</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition">
            <Phone className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">Téléphone</p>
            <p className="text-xs text-gray-500">+216 25 028 150</p>
          </div>
          <a
            href="https://www.linkedin.com/in/mariem-abed-81b738245"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl transition block"
          >
            <Linkedin className="mx-auto text-[#6D28D9]" />
            <p className="mt-2 text-sm text-gray-700">LinkedIn</p>
            <p className="text-xs text-gray-500">Profil</p>
          </a>
          <a
            href="/images/CV.pdf"
            download="Mariem_Abed_CV.pdf"
            className="bg-[#6D28D9] text-white p-5 rounded-2xl shadow-md text-center hover:bg-[#5B21B6] transition block"
          >
            <FileText className="mx-auto" />
            <p className="mt-2 text-sm">CV</p>
            <p className="text-xs text-white/80">Télécharger</p>
          </a>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5"
        >
          <div>
            <label className="text-sm text-gray-700">Nom</label>
            <input
              type="text"
              name="from_name"           
              placeholder="Votre nom"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"          
              placeholder="votre@email.com"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows={5}
              name="message"             
              placeholder="Votre message..."
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none resize-none"
            />
          </div>

          {/* Feedback messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg text-sm">
              <CheckCircle size={16} />
              Message envoyé avec succès ! Je vous répondrai bientôt.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
              <AlertCircle size={16} />
              Une erreur s'est produite. Veuillez réessayer ou m'écrire directement.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#6D28D9] text-white py-3 rounded-lg font-medium hover:bg-[#5B21B6] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader size={16} className="animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer"
            )}
          </button>
        </form>

      </div>
    </section>
  );
}