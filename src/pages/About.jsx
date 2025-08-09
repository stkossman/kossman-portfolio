import { Link } from "react-router-dom";
import { GoArrowUpRight, GoChevronLeft } from "react-icons/go";
import { HiSun, HiMoon } from "react-icons/hi2";
import { FadeInTop } from '../components/animations/FadeInTop';
import { useTheme } from "../contexts/ThemeContext.jsx";

export const About = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="w-full h-screen overflow-y-auto dark-scrollbar bg-white dark:bg-black transition-colors duration-300 flex items-start justify-center py-20 px-4 relative">
            {/* home arrow */}
            <Link
                to="/"
                className="fixed top-5 left-5 flex items-center gap-2 text-black dark:text-white group transition duration-300 z-20"
            >
                <GoChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Go Home
                </span>
            </Link>

            {/* theme btn */}
            <button
                onClick={toggleTheme}
                className="fixed top-5 right-5 z-20 text-black dark:text-white bg-white/60 dark:bg-black/40 hover:bg-white/70 dark:hover:bg-black/50 transition-all duration-200 p-2 sm:p-2.5 rounded-full"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? (
                    <HiMoon className="h-5 w-5 sm:w-6 sm:h-6" />
                ) : (
                    <HiSun className="h-5 w-5 sm:w-6 sm:h-6" />
                )}
            </button>

            {/* content */}
            <div className="max-w-[500px] w-full text-black dark:text-white font-sans space-y-10">

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

                {/* about */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-2 text-black dark:text-white/90">About</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                        <p className="text-sm leading-relaxed text-black/70 dark:text-white/80">
                            I'm Andrii, a passionate developer who loves turning ideas into working
                            interfaces. I care deeply about performance and design systems.
                            Always learning, always shipping.
                        </p>
                    </FadeInTop>
                </div>

                {/* skills */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-black dark:text-white/90">Skills</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'HTML', 'CSS', 'TailwindCSS', 'React',
                                'JavaScript', 'C#', 'C++', 'Python',
                                'ASP.NET', 'Ruby', 'Ruby on Rails', 'MySQL',
                                'MSSQL', 'PostgreSQL', 'GIT', 'Github'
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-black/5 dark:bg-white/10 text-black dark:text-white text-sm px-4 py-2 rounded-md border border-black/10 dark:border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 ease-in-out cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </FadeInTop>
                </div>

                {/* links */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-black dark:text-white/90">Links</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                        <div className="space-y-6">
                            {[
                                {
                                    label: 'Github',
                                    href: 'https://github.com/stkossman',
                                    description: 'All my open-source projects and contributions.'
                                },
                                {
                                    label: 'LinkedIn',
                                    href: 'https://www.linkedin.com/in/andriistavskyi/',
                                    description: 'Connect with me on LinkedIn to see my professional journey and network.'
                                },
                                {
                                    label: 'Resume',
                                    href: 'https://rxresu.me/stkossman/cv-en',
                                    description: 'View my resume to see my skills, experience, and projects.'
                                }
                            ].map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-md p-4 transition-all duration-300 ease-in-out
                                               hover:outline hover:outline-1 hover:outline-dashed
                                               hover:outline-black/30 dark:hover:outline-white/40"
                                >
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-semibold">{link.label}</p>
                                        <GoArrowUpRight className="text-black dark:text-white" />
                                    </div>
                                    <p className="text-sm text-black/70 dark:text-white/80 mt-1">
                                        {link.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </FadeInTop>
                </div>
            </div>
        </div>
    );
};
