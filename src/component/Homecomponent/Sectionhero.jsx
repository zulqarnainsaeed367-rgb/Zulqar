import React from "react";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../../assets/zulqarnain (3).png";
import { FaClock } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0B1120] pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-blue-500">Zulqarnain</span>
          </h1>

          {/* Typing Animation Container */}
          <div className="text-2xl md:text-3xl font-semibold text-blue-400 mt-4 h-[40px] flex items-center">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React.js Specialist",
                2000,
                "UI / UX Designer",
                2000,
                "MERN Stack Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg">
           "I specialize in building high-performance, scalable, and visually stunning web applications
            using React, Tailwind CSS, and Modern JavaScript. My focus is on transforming complex ideas 
            into seamless, user-centric digital experiences that look great on any device.
            From clean code to smooth animations, I ensure every pixel serves a purpose."
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Hire Me
            </button>

            <button className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Background Glow Effect */}
          <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>

          <div className="relative group">
            <img
              src={portfolio}
              alt="Zulqarnain - Frontend Developer"
              className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-blue-500/50 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-2 -right-4 flex  items-center gap-3 bg-blue-600 text-white px-5 py-2.5 rounded-2xl shadow-xl text-sm font-bold border border-blue-400 animate-bounce">
               <FaClock/>
               <p>3+ Years Exp.</p> 
            </div>
            
            {/* Small Tech Indicator */}
            <div className="absolute top-10 -left-6 bg-[#161e2c] border border-gray-700 p-3 rounded-xl shadow-lg">
              <span className="text-blue-400 font-bold">React.js</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;