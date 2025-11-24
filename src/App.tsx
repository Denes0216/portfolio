import "./App.css";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <Hero />
        <About />
        <Projects />
      </div>
      <BackToTop />
    </>
  );
}

export default App;
