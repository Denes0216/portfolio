import "./App.css";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div id="scroll-container" className="h-screen overflow-y-scroll">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
