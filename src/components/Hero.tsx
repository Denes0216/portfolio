import heroBackground from "../assets/hero_background.png";

export default function Hero() {
  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100 m-0 text-center p-4 gap-10 overflow-hidden animate-[bgPan_20s_ease-in-out_infinite]"
      style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: '120%', backgroundPosition: 'center' }}
    >
      <h1 className="relative z-10 text-7xl text-white font-bold mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards]">
        Welcome to My Portfolio
      </h1>
      <p className="relative z-10 text-lg animate-[appearFromBottom_1.5s_ease-out_forwards] text-white max-w-xl">
        Hi! I'm Denes Orban, a passionate developer specializing in building
        amazing web applications.
      </p>
      <div className="relative z-10 flex space-x-4 mt-6">
        <button className="mt-6 px-6 bg-gray-500 border border-gray-700 text-white py-2 rounded-3xl hover:bg-gray-700">
          Get in Touch
        </button>
        <button
          className="mt-6 px-6 bg-gray-50 border border-gray-300 text-gray-700 py-2 rounded-3xl hover:bg-gray-200 "
          onClick={goToSection.bind(null, "projects")}
        >
          View My Work
        </button>
      </div>
      <i
        className="absolute bottom-10 text-4xl text-white animate-bounce cursor-pointer"
        onClick={goToSection.bind(null, "about")}
      >
        ↓
      </i>
    </section>
  );
}
