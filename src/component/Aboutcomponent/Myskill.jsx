import React, { useEffect, useState, useRef } from "react";
import portfolio from "../../assets/zulqarnain (3).png";

const Myskill = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const education = [
        {
            year: "2024 - 2028",
            degree: "B.S Information Technology",
            institute: "The Islamia University of Bahawalpur",
            desc: "Focused on Information Technology, including programming, web development, databases, and modern software technologies."
        },
        {
            degree: "Frontend Certification",
            year: "2023",
            institute: " Code's Thinker",
            desc: "React, Next.js & modern JavaScript."
        }
    ];

    const skills = [
        { name: "HTML5", percentage: 99 },
        { name: "CSS3", percentage: 99 },
        { name: "React.js / Next.js", percentage: 98 },
        { name: "JavaScript (ES6+)", percentage: 95 },
        { name: "Tailwind CSS", percentage: 100 },
        { name: "Firebase ", percentage: 85 },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 bg-[#0B1120] text-white overflow-hidden" id="skills">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        My <span className="text-blue-500">Expertise</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: Education */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-600/10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-blue-600/30 ml-4 pl-8 space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#0B1120] border-2 border-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

                                    <span className="text-blue-500 font-bold text-sm tracking-widest">{edu.year}</span>
                                    <h4 className="text-xl font-bold text-white mt-1">{edu.degree}</h4>
                                    <p className="text-blue-400 text-sm font-medium">{edu.institute}</p>
                                    <p className="text-gray-400 mt-3 leading-relaxed">{edu.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Skills */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-600/10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">Professional Skills</h3>
                        </div>

                        <div className="space-y-7 bg-[#111827]/50 p-8 rounded-3xl border border-gray-800 shadow-xl">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <span className="text-base font-bold text-gray-200 tracking-wide">{skill.name}</span>
                                        <span className="text-blue-500 font-extrabold">{isVisible ? skill.percentage : 0}%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 transition-all duration-1000 ease-out relative"
                                            style={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                                        >
                                            {/* Glow Effect on Bar Tip */}
                                            <div className="absolute right-0 top-0 h-full w-2 bg-white/20 blur-[2px]"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(37,99,235,0.4)] active:scale-95">
                                Download CV
                            </button>
                            <button className="px-8 py-3 border-2 border-blue-500/50 hover:border-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-500/10 active:scale-95">
                                Hire Me
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Myskill;