import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VisionMission from "./VisionMission";
import Milestones from "./Milestones";
import Management from "./Management";
import StrukturOrganisasi from "./StruktuOrganisasi";
import StrukturKepelikan from "./StrukturKepelikan";
import ProfessionalSupport from "./ProfessionalSupport";

const About = () => {
  const { t } = useTranslation();
  const location = useLocation();

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
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 bg-[#F8F9F4]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-[#2F3E34] uppercase">
            {t("companyProfile")}
          </h1>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6 mb-8"></div>

          <p className="text-lg leading-relaxed text-gray-700 text-justify max-w-3xl mx-auto">
            {t("companyDescription")}
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section id="vision" className="scroll-mt-24">
        <VisionMission />
      </section>

      <section id="milestones" className="scroll-mt-24">
        <Milestones />
      </section>

      <section id="management" className="scroll-mt-24">
        <Management />
      </section>

      <section id="strukturOrganisasi" className="scroll-mt-24">
        <StrukturOrganisasi />
      </section>

      <section id="strukturKepemilikan" className="scroll-mt-24">
        <StrukturKepelikan />
      </section>

      <section id="professionalSupport" className="scroll-mt-24">
        <ProfessionalSupport />
      </section>

    </main>
  );
};

export default About;