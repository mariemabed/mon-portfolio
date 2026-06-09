export default function Education() {
    const education = [
        {
            degree: "Baccalauréat en Sciences Thechniques",
            status: "Admise",
            icon: "📚",
            gradient: "from-[#6D28D9] to-[#4C1D95]",
            badgeColor: "bg-purple-100 text-purple-700",
        },
        {
            degree: "Licence en Développement des Systèmes d'Information",
            status: "Diplômée",
            icon: "🎓",
            gradient: "from-[#6D28D9] to-[#4C1D95]",
            badgeColor: "bg-purple-100 text-purple-700",
        },
        {
            degree: "Master en Cloud Computing et Développement des Applications Distribuées",
            status: "En cours",
            icon: "☁️",
            gradient: "from-[#7C3AED] to-[#6D28D9]",
            badgeColor: "bg-yellow-100 text-yellow-700",
        },
    ];

    return (
        <section id="education" className="w-full px-8 lg:px-20 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
                    Formation
                    <div className="w-24 h-1 bg-[#6D28D9] mx-auto mt-3 rounded-full"></div>
                </h2>

                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="absolute transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6D28D9] to-[#4C1D95] rounded-full hidden md:block" />

                    <div className="flex flex-col gap-12">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center gap-6"
                            >
                                {/* Point central */}
                                <div className="hidden md:flex w-2/12 justify-center">
                                    <div className="w-5 h-5 rounded-full bg-[#6D28D9] border-4 border-white shadow-lg z-10" />
                                </div>

                                {/* Card toujours à droite */}
                                <div className="w-full md:w-10/12">
                                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
                                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} text-lg shadow-md shrink-0`}>
                                        {item.icon}
                                        </div>
                                        <div>
                                        <h3 className="text-base font-bold text-gray-900 leading-snug">
                                            {item.degree}
                                        </h3>
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