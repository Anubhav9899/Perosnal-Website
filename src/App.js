import React, { useEffect } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    let scrollAnimationFrame;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;

      document.getElementById("progress-bar").style.width = `${scrollPercent}%`;
    };

    const onScroll = () => {
      // Only execute handleScroll when the browser is ready to render the next frame
      if (!scrollAnimationFrame) {
        scrollAnimationFrame = requestAnimationFrame(() => {
          handleScroll();
          scrollAnimationFrame = null;
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollAnimationFrame) {
        cancelAnimationFrame(scrollAnimationFrame);
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Horizontal Scroll Progress Bar */}
      <div id="progress-bar"></div>

      <Cursor />
      <Header />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
