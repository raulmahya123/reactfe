import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CSRSection from "./CSRSection";

const CSR = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // 🔥 Auto scroll based on URL (/csr/policy, dll)
  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-32 bg-white text-black overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            {t("csrHero.title")}
          </h1>

          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>

          {/* 🔥 INTRODUCTION */}
          <p className="mt-10 text-lg text-gray-600 leading-relaxed">
            {t("csrHero.introduction")}
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      <CSRSection />
    </main>
  );
};

export default CSR;