import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Directors from "./Directors";
import Commissioners from "./Commissioners";
import CorporateSecretary from "./CorporateSecretary";
import CodeOfEthics from "./CodeOfEthics";
import WhistleblowingPolicy from "./WhistleblowingPolicy";
import GovernanceInformation from "./GovernanceInformation";
import BudgetDocument from "./budgetDocument";

const Governance = () => {
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
    <main>
      {/* HERO */}
      {/* HERO */}
      <section className="relative pt-40 pb-28 bg-[#BEC5A4] text-black overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-95"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            {t("governance")}
          </h1>

          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>

          {/* 🔥 TAMBAHAN PENJELASAN */}
          <p className="mt-8 text-gray-600 leading-relaxed text-base md:text-lg">
            {t("governanceHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= REAL SECTIONS ================= */}

      <Directors />
      <Commissioners />
      <CorporateSecretary />
      <CodeOfEthics />
      <WhistleblowingPolicy />
      <GovernanceInformation />
      <BudgetDocument />
    </main>
  );
};

export default Governance;
