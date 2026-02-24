import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Policy from "./Policy";
import Community from "./Community";
import Environment from "./Environment";
import Sustainability from "./Sustainability";
import ESG from "./ESG";

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
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-28 bg-[#FFFFFF] text-black overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            {t("csr")}
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      <section className="py-24 space-y-32">

        <div id="policy" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <Policy />
        </div>

        <div id="community" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <Community />
        </div>

        <div id="environment" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <Environment />
        </div>

        <div id="sustainability" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <Sustainability />
        </div>

        <div id="esg" className="max-w-6xl mx-auto px-6 scroll-mt-32">
          <ESG />
        </div>
      </section>
    </main>
  );
};

export default CSR;