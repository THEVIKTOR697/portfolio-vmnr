"use client";

import clsx from "clsx";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
];

export default function Sidebar() {
    const active = useScrollSpy(sections.map((s) => s.id));

    return (
        <div className="
          fixed left-0 top-0 h-screen
          w-[420px]
          px-16 py-20
          hidden lg:flex flex-col justify-between
        ">
            {/* TOP */}
            <div className="flex flex-col items-start">
                <h1 className="text-5xl font-bold text-slate-200">
                    Víctor Navarrete
                </h1>

                <h2 className="text-slate-300 mt-3">
                    Backend Engineer
                </h2>

                <p className="mt-4 text-slate-400 max-w-xs leading-relaxed">
                    Construyo soluciones backend y automatizaciones escalables.
                </p>

                {/* NAV */}
                <nav className="mt-16 space-y-6 w-full">
                    {sections.map((sec) => (
                        <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className="group flex items-center justify-start"
                        >
                            <span
                                className={clsx(
                                    "mr-4 h-px transition-all duration-300",
                                    active === sec.id
                                        ? "w-16 bg-slate-200"
                                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300"
                                )}
                            />

                            <span
                                className={clsx(
                                    "text-xs uppercase tracking-widest",
                                    active === sec.id
                                        ? "text-slate-200"
                                        : "text-slate-500 group-hover:text-slate-300"
                                )}
                            >
                                {sec.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 text-slate-400 text-sm">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
    );
}
