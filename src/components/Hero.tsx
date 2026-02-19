import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Slide1 from "../assets/hero1.png";
import Slide2 from "../assets/hero2.png";
import Slide3 from "../assets/hero2.png";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [Slide1, Slide2, Slide3];
  const [current, setCurrent] = useState(0);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
          {t("heroTitle")}
        </h1>

        <p className="text-white/80 mt-6 text-lg md:text-xl max-w-2xl">
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

      {/* Navigation Buttons */}
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
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
