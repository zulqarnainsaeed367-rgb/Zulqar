import React, { useEffect } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import k8 from "../../assets/k8.png";
import k7 from "../../assets/k7.png";
import k6 from "../../assets/k6.png";
import k4 from "../../assets/k4.png";
import k5 from "../../assets/k5.png";
import k9 from "../../assets/k9.png";

const projects = [
  {
    title: "ZS Store Website",
    category: "Frontend",
    desc: "A responsive e-commerce website for ZS Store, featuring product listings, shopping cart, and a modern user-friendly interface.",
    img: k8,
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "https://zs-store-ten.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Code Thinker Website",
    category: "Frontend",
    desc: "A responsive website for Code Thinker, showcasing programming tutorials, projects, and tech resources.",
    img: k7,
    tags: ["React", "Framer Motion", "Tailwind"],
    liveLink: "https://codes-thinker.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Al-Huda Online Quran Academy Website",
    category: "Frontend",
    desc: "A responsive and interactive website for Al-Huda Online Quran Academy, featuring course details, teacher information, student registration, and contact pages.",
    img: k6,
    tags: ["React", "Chart.js", "Redux"],
    liveLink: "https://al-huda-weld.vercel.app/",
    codeLink: "#",
  },
  {
    title: "SaaS Landing Page",
    category: "Frontend",
    desc: "Modern landing page for a SaaS startup with optimized SEO, accessibility standards, and high-conversion UI elements.",
    img: k4,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Fintech App UI",
    category: "Frontend",
    desc: "Clean and minimalist financial application interface focusing on user experience and data clarity.",
    img: k5,
    tags: ["React Native", "Firebase", "UI/UX"],
    liveLink: "https://project-mu-flax.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Learn Skill",
    category: "Frontend",
    desc: "Clean and minimalist financial application interface focusing on user experience and data clarity.",
    img: k9,
    tags: ["React Native", "Firebase", "UI/UX"],
    liveLink: "https://ism-institude.vercel.app/",
    codeLink: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="py-24 bg-[#050b1a] text-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className="text-center mb-20"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1b66ff] animate-pulse"></span>
            <span className="text-[#1b66ff] font-bold tracking-[0.2em] uppercase text-[10px]">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1b66ff] to-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(27,102,255,0.4)]"></div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my portfolio of innovative digital solutions, demonstrating expertise in React, responsive design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-[#0a1125]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:border-[#1b66ff]/50 hover:-translate-y-3 shadow-2xl overflow-hidden"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              {/* Blurred Background Image Layer */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-125"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(50px) brightness(0.15) saturate(1.5)",
                  opacity: "0.6",
                }}
              />

              {/* Project Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="relative group-hover:p-2 transition-all duration-500">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-[2.5rem] group-hover:rounded-[2rem] border-b border-white/10 transition-all duration-500">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#050b1a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#1b66ff] rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_20px_rgba(27,102,255,0.6)]">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#1b66ff] transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase font-black text-[#1b66ff] bg-[#1b66ff]/10 border border-[#1b66ff]/20 px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.liveLink}
                      className="flex-[2] bg-[#1b66ff] hover:bg-[#1554d1] text-white text-[10px] font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_10px_20px_rgba(27,102,255,0.2)] uppercase tracking-widest"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-widest"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-15 flex text-center justify-center"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          <button className="bg-[#1b66ff] hover:bg-[#1554d1] text-white text-[10px] font-black py-4 px-4 rounded-2xl transition-all active:scale-95 shadow-[0_10px_20px_rgba(27,102,255,0.2)] uppercase tracking-widest">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;