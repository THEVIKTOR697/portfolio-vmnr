"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const sections = ["about", "experience", "projects"];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* TOP BAR */}
            <div
                className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
                <h1 className="text-gray-100 font-bold">VN</h1>

                {/* HAMBURGER */}
                <button onClick={() => setOpen(true)}>
                    <div className="space-y-1">
                        <span className="block w-6 h-[2px] bg-gray-300"/>
                        <span className="block w-6 h-[2px] bg-gray-300"/>
                        <span className="block w-6 h-[2px] bg-gray-300"/>
                    </div>
                </button>
            </div>

            {/* DRAWER */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* MENU PANEL */}
                        <motion.div
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{type: "tween", duration: 0.3}}
                            className="fixed top-0 right-0 h-full w-3/4 bg-[#0a192f] z-50 p-10 flex flex-col"
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpen(false)}
                                className="self-end text-gray-400 text-2xl"
                            >
                                ✕
                            </button>

                            {/* NAV LINKS */}
                            <div className="mt-16 flex flex-col space-y-8 text-center">
                                {sections.map((sec, i) => (
                                    <a
                                        key={sec}
                                        href={`#${sec}`}
                                        onClick={() => setOpen(false)}
                                        className="text-2xl text-gray-300 hover:text-green-400 transition"
                                    >
                    <span className="text-green-400 mr-2">
                      0{i + 1}.
                    </span>
                                        {sec}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}