import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VisionMission from "./VisionMission";
import Milestones from "./Milestones";
import Management from "./Management";
import StrukturOrganisasi from "./StruktuOrganisasi";
import StrukturKepelikan from "./StrukturKepelikan";

const About = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Scroll otomatis berdasarkan URL /about/vision dll
  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-28 bg-[#BEC5A4] text-black overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-95"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            {t("companyProfile")}
          </h1>

          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section id="vision" className="scroll-mt-32">
        <VisionMission />
      </section>

      <section id="milestones" className="scroll-mt-32">
        <Milestones />
      </section>

      <section id="management" className="scroll-mt-32">
        <Management />
      </section>

      <section id="strukturOrganisasi" className="scroll-mt-32">
        <StrukturOrganisasi />
      </section>

      <section id="strukturKepemilikan" className="scroll-mt-32">
        <StrukturKepelikan  />
      </section>

    </main>
  );
};

export default About;