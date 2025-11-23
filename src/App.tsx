import "./App.css";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import CursorOrb from "./components/CursorOrb";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <CursorOrb />
      <Hero />
      <About />
      <Projects />
      <BackToTop />
    </>
  );
}

export default App;
