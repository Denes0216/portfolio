import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goToTop}
      className="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 animate-[appearFromBottom_0.5s_ease-out_forwards] hover:cursor-pointer z-50"
    >
      ↑
    </button>
  );
}
