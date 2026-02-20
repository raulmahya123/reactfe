import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Slide1 from "../assets/hero1.png";
import Slide2 from "../assets/hero2.png";
import Slide3 from "../assets/hero2.png";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [Slide1, Slide2, Slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Mining Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LEFT MAROON BOX */}
      <div className="absolute left-0 top-0 h-full w-full md:w-1/2 bg-[#4A0404] z-10 flex flex-col justify-center px-12 md:px-20">

        {/* Yellow Accent Line */}
        <div className="w-24 h-1 bg-yellow-400 mb-8"></div>

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          {t("heroTitle")}
        </h1>

        <p className="text-white/80 mt-6 text-lg md:text-xl max-w-xl">
          {t("heroSubtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <a
            href="#annual-report"
            className="px-8 py-3 bg-white text-[#4A0404] font-semibold rounded-md hover:bg-gray-200 transition"
          >
            {t("viewAnnualReport")}
          </a>

          <a
            href="#investor"
            className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#4A0404] transition"
          >
            {t("investorRelations")}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* CAREER BOX (MAROON + DIAGONAL CUT) */}
      <div className="absolute bottom-10 right-10 z-30">
        <a
          href="#career"
          className="flex items-center gap-4 px-10 py-6 text-white font-semibold tracking-wider shadow-xl transition duration-300 hover:scale-105"
          style={{
            backgroundColor: "#4A0404",
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7V6a3 3 0 013-3h0a3 3 0 013 3v1m-9 0h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z"
            />
          </svg>

          CAREER
        </a>
      </div>

    </section>
  );
};

export default Hero;