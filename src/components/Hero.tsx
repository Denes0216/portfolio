export default function Hero() {
  const goToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 m-0 text-center p-4 gap-10">
      <h1 className="text-4xl font-bold mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards]">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg animate-[appearFromBottom_1.5s_ease-out_forwards] text-gray-400">
        Hi! I'm Denes Orban, a passionate developer specializing in building
        amazing web applications.
      </p>
      <div className="flex space-x-4 mt-6">
        <button className="mt-6 px-6 bg-gray-500 border border-gray-700 text-white py-2 rounded-3xl hover:bg-gray-700">
          Get in Touch
        </button>
        <button className="mt-6 px-6 bg-gray-50 border border-gray-300 text-gray-700 py-2 rounded-3xl hover:bg-gray-200 ">
          View My Work
        </button>
      </div>
      <i
        className="mt-28 text-4xl text-gray-700 animate-bounce cursor-pointer"
        onClick={goToAbout}
      >
        ↓
      </i>
    </section>
  );
}
