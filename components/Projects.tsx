"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "SICOE",
        desc: "Academic Control System for school registration, manage schedules, setup exams and generate reports.",
        tech: ["Asyncio", "Tailwind", "Next.js", "Fast API", "Celery(Redis)"],
        image: "/img/sicoe.png",
        url: "https://www.google.com"
    },
    {
        title: "Garra Xaguar",
        desc: "Traditional mezcal sales from the mountains of Guerrero.",
        tech: ["Mexcal", "Traditional"],
        image: "/img/mezcalxaguar.png",
        url: "https://www.facebook.com/profile.php?id=61586879647366"
    },
    {
        title: "Virtual Assistant",
        desc: "Chatbot for dental offices.",
        tech: ["Fast API", "Twilio", "OpenAI"],
        image: "/img/spoti.png",
        url: "https://www.google.com"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-3xl mt-24">
            <h2 className="text-2xl font-bold text-gray-100 mb-10">
                Personal Projects
            </h2>

            <div className="space-y-6">
                {projects.map((p, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <a href={p.url}>
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.2}}
                            className="group relative flex gap-5 p-5 rounded-lg transition-all duration-300
                             hover:-translate-y-2 hover:bg-[#112240] hover:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
                        >
                            <Image src={p.image}
                                    alt={p.title}
                                    width={128}
                                    height={80}
                                    className="rounded-md flex-shrink-0 object-cover group-hover:scale-105 transition"
                            />

                            {/* CONTENT */}
                            <div>
                                <h3 className="text-lg text-gray-100 group-hover:text-green-400 transition">
                                    {p.title}
                                </h3>

                                <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition">
                                    {p.desc}
                                </p>

                                {/* TECH */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs border border-green-400/40 text-green-400 px-2 py-1 rounded-full
                                             group-hover:border-green-400 group-hover:bg-green-400/10 transition"> {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* OVERLAY LINK EFFECT */}
                            <div className="absolute inset-0 border border-transparent rounded-lg
                                group-hover:border-green-400/30 transition pointer-events-none"/>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
}
// export default function Projects() {
//     return (
//         <section id="projects" className="scroll-mt-24">
//             <h2 className="text-lg font-semibold text-slate-200 mb-10">
//                 Projects
//             </h2>
//
//             <div className="space-y-10">
//
//                 <div className="group">
//                     <h3 className="text-slate-200 group-hover:text-slate-100">
//                         Sistema de Facturación
//                     </h3>
//                     <p className="text-slate-400 mt-2">
//                         Generación automática de facturas con integración de APIs.
//                     </p>
//                 </div>
//
//                 <div className="group">
//                     <h3 className="text-slate-200 group-hover:text-slate-100">
//                         Automatización con n8n
//                     </h3>
//                     <p className="text-slate-400 mt-2">
//                         Flujos automatizados con IA para procesamiento de datos.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }