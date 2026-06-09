import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tech?: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tech = [],
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#6D28D9]/40">

      {/* 💜 Violet glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/0 via-[#6D28D9]/0 to-[#6D28D9]/0 group-hover:from-[#6D28D9]/10 group-hover:via-[#6D28D9]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      {/* 🖼 Image */}
      <div className="h-40 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* 📄 Content */}
      <div className="relative p-4 space-y-3">

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-s leading-relaxed">
          {description}
        </p>

        {/* 🏷 Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 bg-[#6D28D9]/10 text-[#6D28D9] rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔗 Button */}
        <button className="mt-2 flex items-center gap-1 text-white bg-[#6D28D9] px-4 py-1.5 text-sm rounded-md hover:bg-[#5B21B6] transition-colors">
          <ExternalLink size={14} />
          Voir le projet
        </button>

      </div>
    </div>
  );
}