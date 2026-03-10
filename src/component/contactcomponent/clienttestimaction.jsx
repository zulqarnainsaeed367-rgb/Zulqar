import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  { name: "Ahmed Raza", role: "Project Manager", text: "The frontend architecture Zulqarnain implemented was top-tier. By optimizing our React components and refining the rendering logic, our Lighthouse scores jumped from 60 to 98. Truly a performance specialist.", tags: ["Performance", "React"] },
  { name: "Sara Khan", role: "UI/UX Lead", text: "Working with a developer who understands design is rare. He translated our complex Figma prototypes into pixel-perfect interfaces with flawlessly smooth Framer Motion transitions.", tags: ["UI/UX", "Motion"] },
  { name: "Ali Hassan", role: "Startup Founder", text: "He didn't just write code; he helped shape the product. The interactive 3D elements and dark-themed dashboard gave our MVP the high-tech edge we needed to impress investors.", tags: ["3D Web", "SaaS"] },
  { name: "Usman Tariq", role: "Tech Lead", text: "Clean, scalable, and highly maintainable code. The way he structured the Tailwind utility classes and component hierarchy made it incredibly easy for our internal team to scale.", tags: ["Architecture", "Clean Code"] },
  { name: "Hassan Ali", role: "Agency Owner", text: "Consistent communication and early delivery. Zulqarnain handled the entire frontend of our international academy platform, ensuring it was responsive across all mobile devices.", tags: ["Responsive", "Scale"] },
  { name: "Ayesha Noor", role: "Product Designer", text: "His mastery of CSS and modern frameworks is evident. He implemented a complex design system that was both beautiful and accessible, following all the latest WCAG standards.", tags: ["Design System", "A11y"] },
  { name: "Bilal Ahmed", role: "CTO", text: "Outstanding technical depth in web performance and modern frontend stacks.", tags: ["Optimization", "Next.js"] },
  { name: "Danish Khan", role: "Entrepreneur", text: "The most reliable frontend developer I've worked with. He brings solutions, not just problems.", tags: ["Product", "Dev"] },
  { name: "Fatima Zahra", role: "UX Researcher", text: "The micro-interactions he added improved our user engagement metrics by 25%.", tags: ["UX", "Interactions"] },
  { name: "Ali Raza", role: "Lead Dev", text: "Excellent grasp of state management and API integration. A true professional.", tags: ["State", "APIs"] },
  { name: "Hamza Malik", role: "Marketing Dir", text: "He built a high-converting landing page that works perfectly on every single browser.", tags: ["Conversion", "Web"] },
  { name: "Saad Ahmed", role: "Founder", text: "A creative developer who knows how to make a brand shine through high-tech visuals.", tags: ["Branding", "UI"] },
];

const TestimonialCard = ({ item }) => (
  <div
    className="group relative bg-[#0a1125]/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-[#1b66ff]/40 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden"
    data-aos="fade-up"
    data-aos-delay="150"
  >
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1b66ff]/5 blur-[80px] group-hover:bg-[#1b66ff]/15 transition-all duration-500"></div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="flex text-amber-400/80 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" stroke="none" />
          ))}
        </div>
        <Quote className="text-white/10 group-hover:text-[#1b66ff]/20 transition-colors" size={28} />
      </div>

      <p className="text-gray-400 text-[14px] leading-relaxed mb-8 font-medium italic">
        "{item.text}"
      </p>
    </div>

    <div className="relative z-10">
      <div className="flex gap-2 mb-6">
        {item.tags?.map((tag, i) => (
          <span key={i} className="text-[9px] font-bold tracking-widest uppercase bg-[#1b66ff]/10 text-[#1b66ff] px-2 py-1 rounded-md border border-[#1b66ff]/20">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#1b66ff] to-[#00d2ff] flex items-center justify-center text-white font-bold shadow-lg shadow-[#1b66ff]/20">
          {item.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white text-sm font-bold group-hover:text-[#1b66ff] transition-colors">{item.name}</h4>
          <p className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase">{item.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8" data-aos="fade-down">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#1b66ff]"></span>
              <span className="text-[#1b66ff] text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Trusted by <span className="text-[#1b66ff]">Innovators.</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#1b66ff] mt-6 rounded-full shadow-[0_0_15px_rgba(27,102,255,0.5)]"></div>
          </div>

          <p className="text-gray-400 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-6" data-aos="fade-left">
            A track record of delivering high-performance interfaces and modern digital experiences for clients worldwide.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-20 custom-swiper"
        >
          {[0, 1, 2, 3].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonialData
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 4px;
          background: #ffffff20;
          border-radius: 2px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          width: 40px;
          background: #1b66ff;
          box-shadow: 0 0 10px #1b66ff80;
        }
        .custom-swiper .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;