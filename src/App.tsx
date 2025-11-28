import "./App.css";
import About from "./components/about/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <div
        id="scroll-container"
        className="h-screen overflow-y-scroll bg-gray-50 dark:bg-gray-900"
      >
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
