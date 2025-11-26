import heroBackground from "../assets/hero_background.png";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-background relative m-0 flex min-h-screen animate-[bgPan_15s_ease-in-out_infinite] flex-col items-center justify-center gap-6 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 text-center sm:gap-10 sm:p-6"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="relative z-10 mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards] px-4 text-3xl font-bold text-white sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to My Portfolio
      </h1>
      <p className="relative z-10 max-w-xl animate-[appearFromBottom_1.5s_ease-out_forwards] px-6 text-base text-white sm:text-lg">
        Hi! I'm Denes Orban, a passionate developer specializing in building
        amazing web applications.
      </p>
      <div className="relative z-10 mt-4 flex w-full max-w-xs flex-col items-center justify-center gap-4 px-4 sm:mt-6 sm:max-w-none sm:flex-row sm:gap-6 md:gap-8">
        <button className="group relative mt-2 w-full overflow-hidden rounded-full bg-linear-to-r from-gray-800 to-gray-600 px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:mt-6 sm:w-auto">
          <span className="absolute inset-0 bg-linear-to-r from-gray-600 to-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative flex items-center justify-center gap-2 font-semibold">
            <FaEnvelope className="transition-transform duration-300 group-hover:rotate-12" />
            Get in Touch
          </span>
        </button>
        <button
          className="group relative mt-2 w-full overflow-hidden rounded-full border-2 border-white/80 bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl sm:mt-6 sm:w-auto"
          onClick={goToSection.bind(null, "projects")}
        >
          <span className="relative flex items-center justify-center gap-2 font-semibold">
            View My Work
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
      <i
        className="absolute bottom-6 animate-bounce cursor-pointer text-3xl text-white sm:bottom-10 sm:text-4xl"
        onClick={goToSection.bind(null, "about")}
      >
        ↓
      </i>
    </section>
  );
}
