import { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCopy,
  FaCheck,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const email = "orban.denes1199@gmail.com";

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
      id="contact"
      ref={sectionRef}
      className={`relative z-30 m-0 flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100 p-4 text-center transition-colors duration-300 sm:gap-10 sm:p-6 dark:bg-gray-800 ${""}`}
    >
      <div className="mb-4">
        <h2
          className={`mb-2 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl lg:text-5xl dark:from-gray-200 dark:to-gray-400 ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          Get In Touch
        </h2>
        <div
          className={`mx-auto h-1 w-24 rounded-full bg-linear-to-r from-gray-600 to-gray-400 ${
            isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
          }`}
        ></div>
      </div>

      <div
        className={`mx-auto max-w-2xl px-4 ${
          isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
        }`}
      >
        <p className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
          I'm always interested in hearing about new opportunities and
          collaborations. Whether you have a question or just want to say hi,
          feel free to reach out
        </p>

        <div className="mb-8 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={`mailto:${email}`}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-gray-800 to-gray-600 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl sm:flex-1"
            >
              <FaEnvelope className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold">{email}</span>
            </a>
            <button
              onClick={copyToClipboard}
              className={`group hidden items-center justify-center rounded-xl border-2 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 sm:flex ${
                copied
                  ? "border-green-500 bg-green-50 text-green-600 dark:border-green-400 dark:bg-green-900/30 dark:text-green-400"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-600"
              }`}
              title="Copy email to clipboard"
            >
              <span
                className={`transition-all duration-300 ${
                  copied
                    ? "absolute scale-0 opacity-0"
                    : "scale-100 opacity-100"
                }`}
              >
                <FaCopy className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              </span>
              <span
                className={`transition-all duration-300 ${
                  copied
                    ? "scale-100 opacity-100"
                    : "absolute scale-0 opacity-0"
                }`}
              >
                <FaCheck className="text-xl" />
              </span>
              <span
                className={`overflow-hidden transition-all duration-300 ${
                  copied ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                Copied!
              </span>
            </button>
          </div>

          <a
            href="/resume.pdf"
            download
            className="group flex items-center justify-center gap-3 rounded-xl border-2 border-gray-700 bg-gray-100 px-8 py-4 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:text-white hover:shadow-xl dark:border-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            <FaDownload className="text-xl transition-transform duration-300 group-hover:translate-y-1" />
            <span className="font-semibold">Download Resume</span>
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-600"
            >
              <FaGithub className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-600"
            >
              <FaLinkedin className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-600"
            >
              <FaTwitter className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
