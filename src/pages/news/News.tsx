import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PressRelease from "./PressRelease";
import MediaCoverage from "./MediaCoverage";
import CorporateActions from "./CorporateActions";

const News = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const element = document.getElementById(section);

      if (element) {
        const navbarHeight = 120;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="pt-40 pb-28 bg-[#F4F6F3]">
        <div className="max-w-4xl mx-auto px-6">
          {/* TITLE */}
          <h1 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("newsHero.title")}
          </h1>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          {/* SUBTITLE */}
          <p className="mt-10 text-lg text-[#2F3E34] font-medium leading-relaxed text-justify">
            {t("newsHero.subtitle")}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 leading-loose text-justify">
            {t("newsHero.description")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 space-y-16 max-w-6xl mx-auto px-6">
        <PressRelease />
        <MediaCoverage />
        <CorporateActions />
      </section>
    </main>
  );
};

export default News;
