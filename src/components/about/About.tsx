import { useEffect, useRef, useState } from "react";
import AboutTabs from "./AboutTabs";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative z-10 m-0 flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100 p-6 text-center transition-colors duration-300 lg:flex-row lg:gap-16 lg:p-12 dark:bg-gray-800 ${""}`}
    >
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div
          className={`relative h-80 w-80 overflow-hidden rounded-xl bg-linear-to-br from-gray-300 to-gray-400 shadow-2xl transition-all duration-500 dark:from-gray-700 dark:to-gray-600 ${
            isVisible
              ? "animate-[floatFromLeft_1.5s_ease-out_forwards] hover:scale-105 hover:rotate-2"
              : "opacity-0"
          }`}
        >
          <div className="flex h-full w-full items-center justify-center text-6xl text-white/20">
            <span>👤</span>
          </div>
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gray-500/30 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gray-600/30 blur-2xl"></div>
        </div>
      </div>

      <div className="flex w-full max-w-3xl flex-col items-center justify-center">
        <div className="mb-6">
          <h2
            className={`mb-2 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl lg:text-5xl dark:from-gray-200 dark:to-gray-400 ${
              isVisible
                ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
                : "opacity-0"
            }`}
          >
            About Me
          </h2>
          <div
            className={`mx-auto h-1 w-24 rounded-full bg-linear-to-r from-gray-600 to-gray-400 ${
              isVisible
                ? "animate-[appearFromBottom_1.5s_ease-out_forwards] opacity-100"
                : "opacity-0"
            }`}
          ></div>
        </div>
        <div
          className={`w-full text-base sm:text-lg ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <AboutTabs />
        </div>
      </div>
    </section>
  );
}
