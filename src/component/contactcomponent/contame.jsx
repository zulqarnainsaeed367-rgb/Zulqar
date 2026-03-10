import React from 'react';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Contactme = () => {
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
            <span className="text-[#1b66ff] font-bold tracking-[0.2em] uppercase text-[10px]">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Contact <span className="text-[#1b66ff]">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1b66ff] to-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(27,102,255,0.4)]"></div>
          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-[#0a1125]/40 backdrop-blur-md border border-white/5 p-8 rounded-[2.5rem] hover:border-[#1b66ff]/50 transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-8 group-hover:text-[#1b66ff] transition-colors">Contact Information</h3>

              <div className="space-y-8">
                {[
                  { icon: <MapPin />, label: "Location", value: "Bahawalpur, Pakistan" },
                  { icon: <Mail />, label: "Email", value: "zulqarnainsaeed367@gmail.com" },
                  { icon: <Phone />, label: "Phone", value: "+923292466406" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#1b66ff]/10 text-[#1b66ff] rounded-2xl flex items-center justify-center border border-[#1b66ff]/20 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-medium text-gray-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map UI */}
              <div className="mt-10 rounded-[2rem] overflow-hidden border border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 h-48">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.73033521952!2d71.69001209999999!3d29.376940299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1772876897725!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#0a1125]/40 backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] hover:border-[#1b66ff]/50 transition-all duration-500 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Your Name</label>
                  <input type="text" placeholder="zulqarnain" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#1b66ff] focus:ring-1 focus:ring-[#1b66ff] transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Email Address</label>
                  <input type="email" placeholder="zulqarnainsaeed367@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#1b66ff] focus:ring-1 focus:ring-[#1b66ff] transition-all text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-gray-500 ml-4 tracking-widest">Your Message</label>
                <textarea rows="5" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#1b66ff] focus:ring-1 focus:ring-[#1b66ff] transition-all text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1b66ff] hover:bg-[#1554d1] text-white text-[11px] font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_10px_20px_rgba(27,102,255,0.2)] uppercase tracking-[0.2em]">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923292466406"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#1ebe57] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
  data-aos="fade-up"
>
  {/* Pulse Wave Effect */}
  <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/30 animate-ping"></span>

  {/* WhatsApp Icon */}
  <FaWhatsapp className="text-white w-7 h-7 relative z-10" />

  {/* Tooltip */}
  <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    WhatsApp Me
  </span>
</a>
    </section>
  );
};

export default Contactme;