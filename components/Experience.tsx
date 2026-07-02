"use client";

import {motion} from "framer-motion";

const jobs = [
    {
        year: "2024 — Presente",
        title: "Backend Developer · Empresa Actual",
        desc: [
            "Desarrollo de APIs con Python y FastAPI",
            "Integración con múltiples servicios",
            "Automatización de procesos",
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
        year: "2022 — 2024",
        title: "Backend Developer · Empresa Anterior",
        desc: [
            "Construcción de microservicios",
            "Autenticación y autorización",
            "Trabajo con Scrum",
        ],
        tech: ["Django", "Redis", "Docker"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-100 mb-10">
                Experiencia
            </h2>

            <div className="space-y-8 border-l border-gray-800 pl-6">

                {jobs.map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: i * 0.2}}
                        className="group relative p-5 rounded-lg transition-all duration-300
                       hover:-translate-y-2 hover:bg-[#112240]
                       hover:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
                    >
                        {/* DOT */}
                        <div className="absolute -left-[11px] top-6 w-3 h-3 bg-green-400 rounded-full
                            group-hover:scale-125 transition"/>

                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition">
                            {job.year}
                        </p>

                        <h3 className="text-lg text-gray-100 mt-1 group-hover:text-green-400 transition">
                            {job.title}
                        </h3>

                        <ul className="mt-3 text-gray-400 list-disc list-inside space-y-1">
                            {job.desc.map((d, idx) => (
                                <li key={idx} className="group-hover:text-gray-300 transition">
                                    {d}
                                </li>
                            ))}
                        </ul>

                        {/* TECH */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {job.tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs border border-green-400/40 text-green-400 px-2 py-1 rounded-full
                             group-hover:border-green-400 group-hover:bg-green-400/10 transition"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
