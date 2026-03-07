import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import k8 from "../../assets/k8.png";
import k7 from "../../assets/k7.png";
import k6 from "../../assets/k6.png";
import k4 from "../../assets/k4.png";
import k5 from "../../assets/k5.png";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Forentend",
    desc: "A high-performance online store featuring seamless product filtering, shopping cart logic, and a clean minimalist checkout UI.",
    img: k8,
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "",
    codeLink: "#",
  },
  {
    title: "Personal Portfolio",
    category: "Frontend",
    desc: "Interactive portfolio showcasing interactive UI components, smooth scroll animations, and a high-tech dark mode aesthetic.",
    img: k7,
    tags: ["React", "Framer Motion", "Tailwind"],
    liveLink: "https://codes-thinker.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Admin Dashboard",
    category: "Frontend",
    desc: "A comprehensive dashboard for data visualization, featuring real-time charts, user management, and responsive layouts.",
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
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-[#050b1a] text-white relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
             <span className="w-2 h-2 rounded-full bg-[#1b66ff] animate-pulse"></span>
             <span className="text-[#1b66ff] font-bold tracking-[0.2em] uppercase text-[10px]">My Work</span>
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
            >
              
              {/* Blurred Background Image Layer */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-125"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(50px) brightness(0.15) saturate(1.5)',
                  opacity: '0.6'
                }}
              />

              {/* Project Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Project Image Preview */}
                <div className="relative group-hover:p-2 transition-all duration-500">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-[2.5rem] group-hover:rounded-[2rem] border-b border-white/10 transition-all duration-500">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
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

                  {/* Tech Tags */}
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

                  {/* Links */}
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
      </div>
    </section>
  );
};

export default Projects;