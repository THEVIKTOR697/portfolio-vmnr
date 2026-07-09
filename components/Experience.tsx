"use client";

import {motion} from "framer-motion";

const desc1= "Backend developer supporting legacy applications for National Healthcare Association developing APIs, " +
            "webhooks implementation, pipeline maintainance, release deployments and incident support."
const desc2 = "Backend developer working on migration of legacy applications by developing new API's using " +
            "Java, SpringBoot, AWS. Involved with Continuos Integration/Continuous Deployment methods."
const desc3 = "Application development using AUTODESK REVIT API and C# for" +
            " structural modeling platform for monetary materials estimates QTOs"
const desc4 = "Web services analysis and massive orders monitoring for SKY TV America. Reports for code " +
            "improvements and solutions implementation."
const desc5 = "Corporate website development and check-in system maintainance. Support to company IT operations including internal network\n" +
            "structured cabling, workstations and videosurveillance setup"

const jobs = [
    {
        year: "2023 — Present",
        title: "Software Engineer III · People Thrust",
        desc: [desc1, "https://www.nhanow.com/"],
        tech: ["Python", "AWS", "PostgreSQL", "Docker", "Turbogears"],
    },
    {
        year: "2021 — 2023",
        title: "Software Engineer · Tata Consultancy Services",
        desc: [desc2, "https://www.libertymutual.com/"],
        tech: ["AWS", "SpringBoot", "Java", "Docker", "MSSQL"],
    },
    {
        year: "2021 — 2021",
        title: "BIM Developer · SEDENA",
        desc: [desc3, "https://www.gob.mx/defensa"],
        tech: ["C#", ".NET", "MSSQL", "Revit"],
    },
    {
        year: "2018 — 2019",
        title: "SOA Engineer · BWR Mexico",
        desc: [desc4, "https://www.bwr.mx/"],
        tech: ["Oracle Suite", "Java", "SOAP"],
    },
        {
        year: "2015 — 2018",
        title: "Systems Technician · DIFASIGN",
        desc: [desc5],
        tech: ["Java", "MSSQL", "PHP", "HTML", "CSS"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-100 mb-10">
                Professional Experience
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
                                    {typeof d === "string" && d.startsWith("http") ? (
                                        <a
                                            href={d}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-400 hover:underline"
                                        >
                                            {d}
                                        </a>
                                    ) : (d)
                                    }
                                </li>
                            ))}
                        </ul>

                        {/* TECH */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {job.tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs border border-green-400/40 text-green-400 px-2 py-1 rounded-full group-hover:border-green-400 group-hover:bg-green-400/10 transition">{t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
