import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { HiSun, HiMoon } from "react-icons/hi2";
import { FadeInTop } from "../components/animations/FadeInTop.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";

export const Experience = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="w-screen h-screen overflow-y-auto dark-scrollbar flex justify-center bg-white dark:bg-black text-black dark:text-white pt-20 px-4 transition-colors duration-300 ease-in-out">
            {/* home arrow */}
            <Link
                to="/"
                className="fixed top-5 left-5 flex items-center gap-2 text-black dark:text-white group transition duration-300"
            >
                <GoChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Go Home
                </span>
            </Link>

            {/* theme btn */}
            <button
                onClick={toggleTheme}
                className="fixed top-5 right-5 text-black dark:text-white bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-200 p-2 sm:p-2.5 rounded-full"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? (
                    <HiMoon className="h-5 w-5 sm:w-6 sm:h-6" />
                ) : (
                    <HiSun className="h-5 w-5 sm:w-6 sm:h-6" />
                )}
            </button>

            {/* content */}
            <div className="max-w-[500px] w-full font-sans space-y-10">
                {/* avatar+name */}
                <FadeInTop delay={0.1}>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/170632168?v=4"
                            alt="Avatar"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-xl font-semibold">Andrii Stavskyi</h1>
                            <p className="text-sm text-black/60 dark:text-white/70">Full-Stack Developer</p>
                        </div>
                    </div>
                </FadeInTop>

                {/* annotation */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-2 text-black/80 dark:text-white/90">Annotation</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <p className="text-sm leading-relaxed text-black/70 dark:text-white/80">
                            Unfortunately, I have not had the opportunity to work in a professional environment yet.
                            However, I have been working as a freelancer.
                        </p>
                    </FadeInTop>
                </div>

                {/* experience */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-black/80 dark:text-white/90">Work Experience</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <p className="text-sm text-black/50 dark:text-white/50 w-[80px] flex-shrink-0">2023 – present</p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">Graphic Designer – Freelance</p>
                                    <p className="text-sm text-black/70 dark:text-white/80 leading-relaxed">
                                        Creating visual content (graphics, infographics) to enhance user engagement.
                                        Web content analysis, optimization, and basic debugging for improved UX.
                                    </p>
                                    <p className="text-xs text-black/50 dark:text-white/50 pt-1">
                                        Adobe Photoshop • UI/UX Prototyping • Advanced photo editing • Photo retouching
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInTop>
                </div>

                {/* pet projects */}
                <div className="pb-20">
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-black/80 dark:text-white/90">Pet Projects</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <div className="space-y-8">
                            {[
                                {
                                    year: "2025",
                                    title: "sociopathic-unstable-vaccine",
                                    url: "https://github.com/stkossman/sociopathic-unstable-vaccine",
                                    description: "A merchandise website showcasing a variety of unique and edgy products.",
                                    tech: "TailwindCSS • JavaScript"
                                },
                                {
                                    year: "2025",
                                    title: "Creepstat.gg",
                                    url: "https://github.com/tosentai/CreepStat",
                                    description: "A web interface for casual gamers of Dota 2 to browse collected data.",
                                    tech: "ASP.NET • TailwindCSS • API Integration"
                                },
                                {
                                    year: "2025",
                                    title: "Random Data API",
                                    url: "https://github.com/stkossman/random-data-api",
                                    description: "API for generating random data, useful for testing or mocking.",
                                    tech: "Ruby • Ruby on Rails • API"
                                },
                                {
                                    year: "2025",
                                    title: "Human File Size (Ruby Gem)",
                                    url: "https://github.com/stkossman/human_file_size",
                                    description: "Gem for formatting file sizes into human-readable format.",
                                    tech: "Ruby • Ruby Gem"
                                },
                                {
                                    year: "2025",
                                    title: "Ukraine Phone Formatter",
                                    url: "https://github.com/stkossman/ukraine_phone_formatter",
                                    description: "Formats Ukrainian phone numbers into standardized format.",
                                    tech: "Ruby • Ruby Gem • Python"
                                }
                            ].map((proj, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    <p className="text-sm text-black/50 dark:text-white/50 w-[80px] flex-shrink-0">{proj.year}</p>
                                    <div className="space-y-2">
                                        <a
                                            href={proj.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold hover:underline"
                                        >
                                            {proj.title}
                                        </a>
                                        <p className="text-sm text-black/70 dark:text-white/80 leading-relaxed">
                                            {proj.description}
                                        </p>
                                        <p className="text-xs text-black/50 dark:text-white/50 pt-1">
                                            {proj.tech}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeInTop>
                </div>
            </div>
        </div>
    );
};
