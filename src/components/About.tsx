import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.1 }
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
      className="flex items-center justify-center min-h-screen bg-white m-0 text-center p-4 gap-10"
    >
      <div>
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-6 mx-auto"></div>
      </div>
      <div>
        <h2
          className={`text-3xl font-bold mb-4 ${
            isVisible
              ? "animate-[appearFromLeft_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg text-gray-400 max-w-2xl ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          I'm Denes Orban, a dedicated developer with a passion for creating
          innovative web applications. With a strong foundation in both
          front-end and back-end technologies, I strive to build seamless user
          experiences and efficient solutions.
        </p>
      </div>
    </section>
  );
}
