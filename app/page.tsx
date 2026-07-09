"use client";

import Sidebar from "@/components/Sidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
    return (
        // <main className="bg-[#0a192f] text-gray-300 min-h-screen">
        <main className="bg-gradient-to-br from-[#0a192f] via-[#0f223f] to-[#020c1b] text-gray-300 min-h-screen">
            <MobileMenu/>
            <Sidebar/>
            {/* Glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div
                    className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full"/>
            </div>
            {/* Grid */}
            <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"/>
            </div>
            <div className="w-full px-6 pt-28 lg:pt-20 lg:ml-[300px] flex justify-center">
                <div className="w-full max-w-4xl">
                    {/* ABOUT */}
                    <section id="about" className="mb-24 scroll-mt-24">
                        <p className="leading-relaxed text-slate-400 mt-4 text-justify">
                            This is a space where I share a bit about myself, the projects I’ve worked on, and the things I enjoy outside of code.
                        </p>
                        <p className="leading-relaxed text-slate-400 mt-4 text-justify">
                            I was born in Mexico City where I spent much of my childhood helping my family
                            selling clothes at local flea markets, which taught me the value of hard work and
                            perseverance.
                            When I was 10 years old, my aunt gave me my first computer. I was incredibly
                            excited—especially when I discovered PowerPoint slides. I still remember staying up until
                            almost 2 a.m. fascinated by what I could create. LOL.
                        </p>
                        <p className="leading-relaxed text-slate-400 mt-4 text-justify">
                            From a young age, I’ve always been curious about how technology works and how it improve our
                            life.
                            That curiosity eventually led me to pursue a career in software engineering, which I began
                            in 2017.
                            Since then, I’ve worked on a variety of projects and technologies, constantly seeking
                            opportunities to grow my skills and expand my knowledge.
                        </p>
                        <p className="leading-relaxed text-slate-400 mt-4 text-justify">
                            Outside of technology, sports are a big part of who I am. I enjoy swimming,
                            basketball, and soccer, but what I value most is the teamwork and energy they bring.
                            I also manage a local team, and every weekend we get together to play, compete,
                            and have a great time on the field.
                        </p>
                    </section>
                    <Experience/>
                    <Projects/>
                </div>
            </div>
        </main>
    );
}

// export default function Home() {
//     return (
//         <main className="background-color=white text-gray-300 min-h-screen">
//             <MobileMenu/>
//             <div className="max-w-[1400px] mx-auto flex">
//                 <Sidebar/>
//                 <div className="flex-1 flex justify-center px-6 pt-28 lg:pt-20">
//                     <div className="w-full max-w-4xl">
//                         <section id="about" className="mb-24 scroll-mt-24">
//
//                         </section>
//                         <Experience/>
//                         <Projects/>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }