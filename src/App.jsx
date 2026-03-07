import React from "react";
// import Hero from "./component/Homecomponent/Sectionhero";
import Navbar from "./page/navbar";
import Home1 from "./page/Home";
import About1 from "./page/About";
import Services1 from "./page/Services";
import Project1 from "./page/Project";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section id="home" className="h-auto">
        <Home1/>
      </section>
      <section id="about" className="h-auto">
        <About1/>
      </section>
      <section id="services" className="h-auto">
         <Services1/>
      </section>
      <section id="projects" className="h-auto">
        <Project1/>
      </section>
      <section id="contact" className="h-auto">
        <h1>Contact Section</h1>
      </section>

    </div>
  );
}