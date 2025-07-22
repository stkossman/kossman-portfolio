import {Link} from "react-router-dom";
import {GoArrowUpRight, GoChevronLeft} from "react-icons/go";
import {FadeInTop} from "../components/animations/FadeInTop.jsx";

export const Experience = () => {

    return (
        <div className="w-screen h-screen overflow-y-auto dark-scrollbar flex justify-center bg-black text-white pt-20 px-4">
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

                {/* annotation */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-2 text-white/90">Annotation</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <p className="text-sm leading-relaxed text-white/80">
                            Unfortunately, I have not had the opportunity to work in a professional environment yet.
                            However, I have been working as a freelancer.
                        </p>
                    </FadeInTop>
                </div>

                {/* experience */}
                <div>
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-white/90">Work Experience</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2023 – present</p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-white">
                                        Graphic Designer – Freelance
                                    </p>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Creating visual content (graphics, infographics) to enhance user engagement.
                                        Web content analysis, optimization, and basic debugging for improved UX.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        Adobe Photoshop • UI/UX Prototyping • Advanced photo editing • Photo retouching
                                    </p>
                                </div>
                            </div>

                            {/* <div className="flex items-start gap-6">
                              <p className="text-sm text-white/50 w-[80px] flex-shrink-0">... – ...</p>
                              <div className="space-y-2">
                                <p className="text-sm font-semibold text-white">Role – Company</p>
                                <p className="text-sm text-white/80 leading-relaxed">Description</p>
                                <p className="text-xs text-white/50 pt-1">Skills • Skills</p>
                              </div>
                            </div> */}
                        </div>
                    </FadeInTop>

                </div>

                {/* pet projects */}
                <div className="pb-20">
                    <FadeInTop delay={0.1}>
                        <h2 className="text-md font-bold mb-4 text-white/90">Pet Projects</h2>
                    </FadeInTop>

                    <FadeInTop delay={0.4}>
                        <div className="space-y-8">

                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2025</p>
                                <div className="space-y-2">
                                    <a
                                        href="https://github.com/stkossman/sociopathic-unstable-vaccine"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white hover:underline">
                                        sociopathic-unstable-vaccine
                                    </a>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        A merchandise website created showcasing a variety of unique and edgy products.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        TailwindCSS • JavaScript
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2025</p>
                                <div className="space-y-2">
                                    <a
                                        href="https://github.com/tosentai/CreepStat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white hover:underline">
                                        Creepstat.gg
                                    </a>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        A web interface for casual gamers of game Dota 2 to browse through the collected data.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        ASP.NET • TailwindCSS • API Integration
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2025</p>
                                <div className="space-y-2">
                                    <a
                                        href="https://github.com/stkossman/random-data-api"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white hover:underline">
                                        Random Data API
                                    </a>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        This API provides various endpoints to generate random data, useful for testing, mocking, or just for fun.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        Ruby • Ruby on Rails • API
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2025</p>
                                <div className="space-y-2">
                                    <a
                                        href="https://github.com/stkossman/human_file_size"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white hover:underline">
                                        Human File Size (Ruby Gem)
                                    </a>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Human File Size is a simple Gem for formatting file sizes into a human-readable format.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        Ruby • Ruby Gem
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <p className="text-sm text-white/50 w-[80px] flex-shrink-0">2025</p>
                                <div className="space-y-2">
                                    <a
                                        href="https://github.com/stkossman/ukraine_phone_formatter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white hover:underline">
                                        Ukraine Phone Formatter (Ruby Gem & Python Library)
                                    </a>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        Ukraine Phone Formatter is a simple Ruby gem that formats Ukrainian phone numbers into a readable and standardized format.
                                    </p>
                                    <p className="text-xs text-white/50 pt-1">
                                        Ruby • Ruby Gem • Python
                                    </p>
                                </div>
                            </div>

                        </div>
                    </FadeInTop>
                </div>

            </div>
        </div>
    )
}