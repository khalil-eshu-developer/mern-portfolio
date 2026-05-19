import { useState, useEffect } from "react";

import CSS from "./styles/styles";
import ThreeCanvas from "./components/ThreeCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Inject CSS once
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Scroll & cursor listeners
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onMouse = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="kk-root">
      {/* Custom Cursor */}
      <div className="kk-cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="kk-cursor-dot" style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* 3D Background */}
      <ThreeCanvas />

      {/* Particle Badge */}
      <div className="kk-particle-badge">✦ Interactive 3D Particles</div>

      {/* Components */}
      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
