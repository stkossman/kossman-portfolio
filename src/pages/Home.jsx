import Dither from "../blocks/Backgrounds/Dither/Dither.jsx";
import { GoArrowUpRight } from "react-icons/go";
import { HiSun, HiMoon } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FadeInTop } from '../components/animations/FadeInTop';
import { useTheme } from '../contexts/ThemeContext';

export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen relative flex flex-col">
            {/* bg */}
            <div className="fixed inset-0 z-0">
                <Dither
                    waveSpeed={0.08}
                    waveFrequency={2.5}
                    waveAmplitude={0.4}
                    waveColor={theme === 'light' ? [0.7, 0.7, 0.7] : [0.3, 0.3, 0.3]}
                    colorNum={9}
                    pixelSize={2}
                    enableMouseInteraction={true}
                    mouseRadius={0.8}
                />
                <div className="absolute inset-0 backdrop-blur-xs"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* header */}
                <FadeInTop delay={0.1}>
                    <div className="flex items-center justify-center pt-4 sm:pt-8 px-3 sm:px-4">
                        <div className="flex items-center justify-between w-full" style={{ maxWidth: '1400px', width: '90vw' }}>
                            <a
                                className="text-sm sm:text-lg font-medium italic font-mono text-white bg-black/40 px-3 sm:px-6 py-2 rounded-lg hover:text-gray-300 hover:bg-black/50 transition-all duration-200 cursor-pointer"
                            >
                                <span className="hidden sm:inline">Andrii Stavskyi</span>
                                <span className="sm:hidden">A. Stavskyi</span>
                            </a>

                            <button
                                onClick={toggleTheme}
                                className="ml-4 text-white bg-black/40 hover:bg-black/50 transition-all duration-200 p-2 sm:p-2.5 rounded-full"
                                aria-label="Toggle theme"
                            >
                                {theme ==='light' ? (
                                    <HiMoon className="h-5 w-5 sm:w-6 sm:h-6" />
                                ) : (
                                    <HiSun className="h-5 w-5 sm:w-6 sm:h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </FadeInTop>

                {/* main content section */}
                <FadeInTop
                    delay={0.3}
                    className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8 sm:py-0 font-grotesk"
                >
                    <div>
                        <div className="text-center px-4 sm:px-8">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                                Full-Stack Developer <br />
                                <span className="text-white/95 text-2xl sm:text-5xl md:text-7xl leading-tight block mt-2 sm:mt-0">who loves crafting sleek web interfaces</span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-8 sm:mb-12 px-2 sm:px-0">
                                Bridging frontend elegance with backend robustness to deliver scalable web solutions
                            </p>

                            {/* pages */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                                <Link to="/about" className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-4 border border-white/30 w-fit hover:scale-105 transition">
                                    <span className="text-white text-xs sm:text-sm font-medium drop-shadow-sm whitespace-nowrap dark">About</span><GoArrowUpRight className="text-white" />
                                </Link>
                                <Link to="/experience" className="flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-4 border border-white/30 w-fit hover:scale-105 transition">
                                    <span className="text-white text-xs sm:text-sm font-medium drop-shadow-sm whitespace-nowrap">Pro Experience</span><GoArrowUpRight className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeInTop>
            </div>
        </div>
    );
};