// "use client";
//
// import Sidebar from "@/components/Sidebar";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import MobileMenu from "@/components/MobileMenu";
//
// export default function Home() {
//   return (
//     <main className="bg-[#0a192f] text-gray-300 min-h-screen flex justify-center">
//
//       <MobileMenu />
//
//       {/* CONTENEDOR CENTRADO REAL */}
//       <div className="w-full max-w-7xl px-6 flex gap-10">
//
//         {/* SIDEBAR */}
//         <aside className="hidden md:block w-1/4">
//           <Sidebar />
//         </aside>
//
//         {/* CONTENIDO PRINCIPAL */}
//         <section className="flex-1">
//           <Experience />
//           <Projects />
//         </section>
//
//       </div>
//     </main>
//   );
// }


"use client";

import Sidebar from "@/components/Sidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
    return (
        // <main className="bg-[#0a192f] text-gray-300 min-h-screen flex justify-center">
        <main className="bg-[#0a192f] text-gray-300 min-h-screen">
            <MobileMenu/>
            {/* 🔥 CONTENEDOR GLOBAL CENTRADO */}
            {/*<div className="w-full max-w-[1200px] flex">*/}
            <Sidebar/>
            {/* CONTENIDO DERECHO */}
            <div className="w-full max-w-[1200px] mx-auto px-6 pt-28 lg:pt-20">
        {/*        <div className="*/}
        {/*  w-full*/}
        {/*  px-6*/}
        {/*  pt-28*/}
        {/*  lg:pt-20*/}
        {/*  flex justify-center*/}
        {/*">*/}

                    {/* CONTENIDO INTERNO */}
                    <div className="w-full max-w-2xl">
                        {/* ABOUT */}
                        <section id="about" className="mb-24 scroll-mt-24">
                            <p className="leading-relaxed text-slate-400">
                                Soy desarrollador backend con experiencia en APIs, automatización
                                y sistemas escalables. Me enfoco en construir software limpio,
                                eficiente y mantenible.
                            </p>
                        </section>
                        <Experience/>
                        <Projects/>
                    </div>
            </div>
        </main>
    );
}