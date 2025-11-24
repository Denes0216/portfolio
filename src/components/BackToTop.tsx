import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const handleScroll = () => {
      if (container && container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  const goToTop = () => {
    const container = document.getElementById("scroll-container");
    container?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goToTop}
      className="fixed right-4 bottom-4 z-50 animate-[appearFromBottom_0.5s_ease-out_forwards] rounded-full bg-gray-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-700"
    >
      ↑
    </button>
  );
}
