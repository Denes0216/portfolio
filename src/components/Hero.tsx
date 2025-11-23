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
      className="relative m-0 flex min-h-screen animate-[bgPan_15s_ease-in-out_infinite] flex-col items-center justify-center gap-10 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 text-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "150% auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="relative z-10 mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards] text-7xl font-bold text-white">
        Welcome to My Portfolio
      </h1>
      <p className="relative z-10 max-w-xl animate-[appearFromBottom_1.5s_ease-out_forwards] text-lg text-white">
        Hi! I'm Denes Orban, a passionate developer specializing in building
        amazing web applications.
      </p>
      <div className="relative z-10 mt-6 flex space-x-4">
        <button className="mt-6 rounded-3xl border border-gray-700 bg-gray-500 px-6 py-2 text-white hover:bg-gray-700">
          Get in Touch
        </button>
        <button
          className="mt-6 rounded-3xl border border-gray-300 bg-gray-50 px-6 py-2 text-gray-700 hover:bg-gray-200"
          onClick={goToSection.bind(null, "projects")}
        >
          View My Work
        </button>
      </div>
      <i
        className="absolute bottom-10 animate-bounce cursor-pointer text-4xl text-white"
        onClick={goToSection.bind(null, "about")}
      >
        ↓
      </i>
    </section>
  );
}
