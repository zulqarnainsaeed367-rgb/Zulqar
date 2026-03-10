import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Heart } from "lucide-react";
import g1 from "../assets/g1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
  const services = [
    "Responsive Web Design",
    "React Development",
    "UI/UX Implementation",
    "Performance Optimization",
    "Interactive Animations",
  ];

  return (
    <footer className="bg-[#0B1120] pt-20 pb-10 border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Me Section */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">About Me</h3>
            {/* Logo Placeholder - Matches your "ZS Developer" brand */}
            <div className="flex items-center gap-2 group cursor-default">
               <div className="h-20 w-30  rounded-lg flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(27,102,255,0.3)]">
                 <img src={g1} alt="Logo" className="h-full w-full object-contain" />
               </div>
               
            </div>
            <p className="text-sm leading-relaxed">
              Passionate frontend developer crafting elegant, high-performance web apps with React, Tailwind, and modern animations. I focus on pixel-perfect, responsive designs that feel alive.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Framer Motion"].map((tag) => (
                <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest font-bold text-[#1b66ff]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-[#1b66ff] transition-colors text-sm flex items-center gap-2 group">
                    <span className="h-1 w-1 bg-[#1b66ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#1b66ff] rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="h-9 w-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#1b66ff]/20 transition-colors">
                  <MapPin size={18} className="text-[#1b66ff]" />
                </div>
                <span className="text-sm">Bahawalpur, Pakistan</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-9 w-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#1b66ff]/20 transition-colors">
                  <Phone size={18} className="text-[#1b66ff]" />
                </div>
                <span className="text-sm">+92 329 2466406</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-9 w-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#1b66ff]/20 transition-colors">
                  <Mail size={18} className="text-[#1b66ff]" />
                </div>
                <span className="text-sm">zulqarnainsaeed367@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: <Facebook size={20} />, link: "#" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/zulqarnain-saeed-77756b39b/" },
            { icon: <Github size={20} />, link: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1b66ff] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wide">
            © {currentYear} <span className="text-white font-bold">Zulqarnain</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs tracking-wide">
            Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> using 
            <span className="text-white font-semibold"> React</span> & 
            <span className="text-white font-semibold"> Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;