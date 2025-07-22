import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { FadeInTop } from '../components/animations/FadeInTop';

export const About = () => {
    return (

        <div className="w-full h-screen overflow-y-auto dark-scrollbar bg-black flex items-start justify-center py-20 px-4">
            {/* home arrow */}
            <Link
                    to="/"
                    className="fixed top-5 left-5 flex items-center gap-2 text-white group transition duration-300"
                >
                    <GoChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Go Home
                    </span>
            </Link>


            <div className="max-w-[500px] w-full text-white font-sans space-y-10">

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
                            <p className="text-sm text-white/70">Full-Stack Developer</p>
                        </div>
                    </div>
                </FadeInTop>

                {/* about */}
                <div>
                    <FadeInTop delay={0.1}>
                    <h2 className="text-md font-bold mb-2 text-white/90">About</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                    <p className="text-sm leading-relaxed text-white/80">
                        I'm Andrii, a passionate developer who loves turning ideas into working
                        interfaces. I care deeply about performance and design systems.
                        Always learning, always shipping.
                    </p>
                    </FadeInTop>
                </div>

                {/* skills */}
                <div>
                    <FadeInTop delay={0.1}>
                    <h2 className="text-md font-bold mb-4 text-white/90">Skills</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                    <div className="flex flex-wrap gap-3">
                        {[
                            'HTML', 'CSS', 'TailwindCSS', 'React',
                            'JavaScript', 'C#', 'C++', 'Python',
                            'ASP.NET', 'Ruby', 'Ruby on Rails', 'MySQL',
                            'MSSQL', 'PostgreSQL','GIT' ,'Github'
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/10 text-white text-sm px-4 py-2 rounded-md border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 ease-in-out cursor-default"
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
                    <h2 className="text-md font-bold mb-4 text-white/90">Links</h2>
                    </FadeInTop>
                    <FadeInTop delay={0.4}>
                    <div className="space-y-6">
                        <a
                            href="https://github.com/stkossman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-md p-4 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-dashed hover:outline-white/40"
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold">Github</p>
                                <GoArrowUpRight className="text-white" />
                            </div>
                            <p className="text-sm text-white/80 mt-1">
                                All my open-source projects and contributions.
                            </p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/andriistavskyi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-md p-4 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-dashed hover:outline-white/40"
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold">LinkedIn</p>
                                <GoArrowUpRight className="text-white" />
                            </div>
                            <p className="text-sm text-white/80 mt-1">
                                Connect with me on LinkedIn to see my professional journey and network.
                            </p>
                        </a>

                        <a
                            href="https://rxresu.me/stkossman/cv-en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-md p-4 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-dashed hover:outline-white/40"
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold">Resume</p>
                                <GoArrowUpRight className="text-white" />
                            </div>
                            <p className="text-sm text-white/80 mt-1">
                                View my resume to see my skills, experience, and projects.
                            </p>
                        </a>
                    </div>
                    </FadeInTop>

                </div>
            </div>
        </div>
    );
};
