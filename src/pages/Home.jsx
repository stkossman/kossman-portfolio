import Dither from "../blocks/Backgrounds/Dither/Dither.jsx";

export const Home = () => {
    const scrollingText = " Frontend — Backend — API Design — Testing — Collaboration | Frontend — Backend — API Design — Testing — Collaboration | \b";
    const scrollingText2 = " Clean Code — Performance — Scalability | User Experience — Security — Reliability | Clean Code — Performance — Scalability | \b";

    return (
        <div className="min-h-screen relative flex flex-col">
            {/* bg */}
            <div className="fixed inset-0 z-0">
                <Dither
                    waveSpeed={0.08}
                    waveFrequency={2.5}
                    waveAmplitude={0.4}
                    waveColor={[0.5, 0.5, 0.5]}
                    colorNum={6}
                    pixelSize={3}
                    enableMouseInteraction={true}
                    mouseRadius={0.8}
                />
                <div className="absolute inset-0 backdrop-blur-xs"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* header */}
                <div className="flex items-center justify-center pt-4 sm:pt-8 px-3 sm:px-4">
                    <div className="flex items-center justify-between w-full" style={{ maxWidth: '1400px', width: '90vw' }}>
                        <a
                            className="text-sm sm:text-lg font-medium italic font-mono text-white bg-black/40 backdrop-blur-md px-3 sm:px-6 py-2 rounded-lg hover:text-gray-300 hover:bg-black/50 transition-all duration-200 cursor-pointer drop-shadow-xl border border-white/20"
                        >
                            <span className="hidden sm:inline">Andrii Stavskyi</span>
                            <span className="sm:hidden">A. Stavskyi</span>
                        </a>
                        <div className="flex items-center gap-1 sm:gap-3 font-mono">

                            <a
                                href="https://rxresu.me/stkossman/cv-en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative cursor-pointer py-2 px-3 sm:px-6 text-center inline-flex justify-center text-xs sm:text-sm text-white bg-white/10 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group overflow-hidden border border-white/30 hover:border-white/50 hover:bg-white/20"
                            >
                                <span className="relative z-20">Resume</span>
                                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-sm group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-tl-lg border-l border-t top-0 left-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute group-hover:h-[80%] h-[40%] rounded-tr-lg border-r border-t top-0 right-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[40%] group-hover:h-[80%] rounded-bl-lg border-l border-b left-0 bottom-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-br-lg border-r border-b right-0 bottom-0"></span>
                            </a>
                            <a
                                href="https://github.com/stkossman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative cursor-pointer py-2 px-3 sm:px-6 text-center inline-flex justify-center text-xs sm:text-sm text-white bg-white/10 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group overflow-hidden border border-white/30 hover:border-white/50 hover:bg-white/20"
                            >
                                <span className="relative z-20">Github</span>
                                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-sm group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-tl-lg border-l border-t top-0 left-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute group-hover:h-[80%] h-[40%] rounded-tr-lg border-r border-t top-0 right-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[40%] group-hover:h-[80%] rounded-bl-lg border-l border-b left-0 bottom-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-br-lg border-r border-b right-0 bottom-0"></span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andriistavskyi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative cursor-pointer py-2 px-2 sm:px-6 text-center inline-flex justify-center text-xs sm:text-sm text-white bg-white/10 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group overflow-hidden border border-white/30 hover:border-white/50 hover:bg-white/20"
                            >
                                <span className="relative z-20">
                                    <span className="hidden sm:inline">LinkedIn</span>
                                    <span className="sm:hidden">In</span>
                                </span>
                                <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-sm group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-tl-lg border-l border-t top-0 left-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute group-hover:h-[80%] h-[40%] rounded-tr-lg border-r border-t top-0 right-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[40%] group-hover:h-[80%] rounded-bl-lg border-l border-b left-0 bottom-0"></span>
                                <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-br-lg border-r border-b right-0 bottom-0"></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* first infinite text */}
                <div className="bg-black/30 backdrop-blur-sm py-3 sm:py-4 overflow-hidden relative mt-6 sm:mt-8">
                    <div className="flex animate-scroll">
                        <div className="flex whitespace-nowrap">
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText}
                            </span>
                        </div>
                    </div>
                </div>

                {/* main content section */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 sm:py-0">
                    <div className="text-center px-4 sm:px-8">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                            Full-Stack Developer <br />
                            <span className="text-white/95 text-2xl sm:text-5xl md:text-7xl leading-tight block mt-2 sm:mt-0">who loves crafting sleek web interfaces</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-8 sm:mb-12 px-2 sm:px-0">
                            Bridging frontend elegance with backend robustness to deliver scalable web solutions
                        </p>

                        {/* location and uni */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                            <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-4 border border-white/30 w-fit">
                                <div className="w-2 h-2 bg-white rounded-full shadow-sm flex-shrink-0"></div>
                                <span className="text-white text-xs sm:text-sm font-medium drop-shadow-sm whitespace-nowrap">Ukraine, Zviahel</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-4 border border-white/30 w-fit">
                                <div className="w-2 h-2 bg-white rounded-full shadow-sm flex-shrink-0"></div>
                                <span className="text-white text-xs sm:text-sm font-medium drop-shadow-sm whitespace-nowrap">Ostroh Academy</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second infinite text */}
                <div className="bg-black/30 backdrop-blur-sm py-3 sm:py-4 overflow-hidden relative">
                    <div className="flex animate-scroll-reverse">
                        <div className="flex whitespace-nowrap">
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText2}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText2}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText2}
                            </span>
                            <span className="inline-block text-white/80 text-xs sm:text-sm font-mono">
                                {scrollingText2}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-25%);
                    }
                }

                @keyframes scroll-reverse {
                    0% {
                        transform: translateX(-25%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                .animate-scroll-reverse {
                    animation: scroll-reverse 20s linear infinite;
                }

                @media (max-width: 640px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }

                    .animate-scroll-reverse {
                        animation: scroll-reverse 30s linear infinite;
                    }
                }
            `}</style>
        </div>
    );
};