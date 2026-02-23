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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* FLOATING HERO BOX (SMALL & PREMIUM) */}
      <div
        className="
        absolute 
        left-6 md:left-20 
        top-1/2 -translate-y-1/2
        w-[90%] md:w-[520px]
        bg-[#4A0404]/95 backdrop-blur-md
        px-8 md:px-12 py-12 md:py-16
        rounded-xl shadow-2xl
        border-l-4 border-yellow-400
        z-20
        "
      >
        {/* Accent Line */}
        <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          {t("heroTitle")}
        </h1>

        <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
          {t("heroSubtitle")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#annual-report"
            className="px-6 py-3 bg-white text-[#4A0404] font-semibold rounded-md hover:bg-gray-200 transition"
          >
            {t("viewAnnualReport")}
          </a>

          <a
            href="#investor"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#4A0404] transition"
          >
            {t("investorRelations")}
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:scale-110 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:scale-110 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* CAREER FLOATING BUTTON */}
      <div className="absolute bottom-10 right-10 z-30">
        <a
          href="#career"
          className="
            flex items-center gap-3
            px-8 py-4
            text-white font-semibold tracking-wider
            shadow-xl
            transition duration-300 hover:scale-105
            bg-[#4A0404]
          "
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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