import React, { useEffect } from "react";
import portfolio from "../../assets/zulqarnain (3).png";

import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Happy Clients", value: "30+" },
    ];

    const skills = [
        "React.js", "JavaScript", "Tailwind CSS",
        "Redux", "Next.js", "Firebase", "Git", "REST APIs"
    ];

    return (
        <section className="py-24 bg-[#0B1120] text-white overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div data-aos="fade-down" className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Glow & Border Design */}
                    <div data-aos="fade-right" className="relative flex justify-center lg:justify-start">
                        <div className="relative z-10 group">
                            
                            {/* Outer Decorative Box */}
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500/30 rounded-2xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/20 bg-[#161e2c] p-3 shadow-2xl">
                                <img
                                    src={portfolio}
                                    alt="About Zulqarnain"
                                    className="w-140 h-130 rounded-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover scale-105 hover:scale-100"
                                />
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px] -z-10"></div>
                        </div>
                    </div>

                    {/* Right: Content Section */}
                    <div data-aos="fade-left" className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                                Crafting Exceptional Digital Experiences
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                I am a <span className="text-blue-400 font-semibold">Senior Frontend Developer</span> with
                                a passion for building interactive and scalable web applications. With 3+ years of experience,
                                I specialize in turning complex designs into <span className="text-blue-400">Pixel-Perfect</span> code.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                My approach focuses on performance, accessibility, and clean architecture.
                                I thrive in environments where I can push the boundaries of what's possible with React and Modern CSS.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-[#111827] p-4 md:p-5 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
                                    <h4 className="text-2xl md:text-3xl font-extrabold text-blue-500 group-hover:scale-110 transition-transform">
                                        {stat.value}
                                    </h4>
                                    <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack List */}
                        <div className="pt-4 space-y-6">
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="h-[2px] w-10 bg-blue-600"></span> Technical Expertise
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-[#1e293b] border border-gray-700 text-gray-300 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 cursor-default shadow-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-wider">
                                    Hire Me
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-blue-500/50 hover:border-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-500/10 active:scale-95 text-sm uppercase tracking-wider">
                                    View Projects
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Aboutsection;