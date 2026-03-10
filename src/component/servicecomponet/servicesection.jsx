import React, { useEffect } from "react";
import { Layout, Paintbrush, Smartphone, Zap, Search, Monitor, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 1. Updated data array with illustrative image URLs (Replace these with your actual image paths)
const services = [
  {
    icon: <Layout size={24} />,
    title: "React Development",
    desc: "Building high-performance, component-based web applications with seamless state management.",
    tags: ["React", "JavaScript", "Redux"],
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop", 
  },
  {
    icon: <Paintbrush size={24} />,
    title: "UI / UX Design",
    desc: "Crafting minimalist, high-tech interfaces that prioritize user intuition and visual clarity.",
    tags: ["Figma", "Web Design", "UI"],
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive Solutions",
    desc: "Ensuring flawless aesthetics across all screen sizes using mobile-first strategies.",
    tags: ["Tailwind", "Mobile", "Flex"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Tuning",
    desc: "Optimizing assets and code delivery to achieve perfect Lighthouse scores.",
    tags: ["Vitals", "Speed", "Clean"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Monitor size={24} />,
    title: "Frontend Architecture",
    desc: "Engineering scalable project structures using modern frameworks and TypeScript.",
    tags: ["Next.js", "TS", "Scalable"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Search size={24} />,
    title: "SEO & Accessibility",
    desc: "Implementing semantic structures and A11y standards to maximize reach.",
    tags: ["SEO", "A11y", "HTML"],
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=600&auto=format&fit=crop",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="py-24 bg-[#0B1120] text-white relative overflow-hidden"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1b66ff]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20" data-aos="fade-down" data-aos-duration="1500">
          <span className="text-[#1b66ff] font-bold tracking-[0.3em] uppercase text-[10px] bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight">
            My Services
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1b66ff] to-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(27,102,255,0.6)]"></div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Specialized in crafting pixel-perfect frontends and high-performance digital interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-gradient-to-b from-[#0a1125] to-[#050b1a] border border-white/5 p-8 rounded-[2rem] transition-all duration-500 hover:border-[#1b66ff]/50 hover:-translate-y-3 shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1500"
            >
              {/* Blurred Background Image */}
              <div 
                className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(20px) brightness(0.7) saturate(0.8)',
                  opacity: '0.6'
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.05)_0%,_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] z-1"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 text-[#1b66ff] bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-[#1b66ff] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(27,102,255,0.4)]">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#1b66ff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-widest font-extrabold text-[#1b66ff] bg-[#1b66ff]/5 border border-[#1b66ff]/10 px-3 py-1.5 rounded-lg group-hover:bg-[#1b66ff]/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center justify-between w-full bg-white/5 hover:bg-[#1b66ff] text-white text-xs font-bold py-4 px-6 rounded-xl transition-all duration-300 group/btn shadow-lg">
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;