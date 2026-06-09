import ProjectCard from "./ProjectCard";
interface ProjectsProps {
  showTitle?: boolean;
}
export default function Projects({ showTitle = true }: ProjectsProps) {
  const projects = [
    {
      title: "Plateforme EyeOtech",
      description:
        "Plateforme intelligente de recrutement avec analyse des candidatures. Frontend Next.js + backend Express.js.",
      imageUrl:
        "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3",
      tech: ["Next.js", "Express.js", "AI"],
    },
    {
      title: "Restaurant Yummy",
      description:
        "Application de gestion de restaurant : menu, commandes et réservation en ligne.",
      imageUrl:
        "https://images.unsplash.com/photo-1760888549280-4aef010720bd",
      tech: ["Symfony (Full Stack)"],
    },
    {
      title: "Library Management",
      description:
        "Gestion complète d'une bibliothèque avec Angular et Spring Boot.",
      imageUrl:
        "https://images.unsplash.com/photo-1593791784695-8f7dc5472703",
      tech: ["Angular", "Spring Boot"],
    },
    {
      title: "Social Network",
      description:
        "Réseau social complet avec fil d'actualité, messagerie en temps réel, système d'amis et partage de médias.",
      imageUrl: "/images/socialnetwork.png",
      tech: ["React", "Spring Boot"],
    },
  ];
  return (
    <section id="projects" className="w-full px-8 lg:px-20 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
            Projets
            <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
          </h2>
        )}
        {/* Grid principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}