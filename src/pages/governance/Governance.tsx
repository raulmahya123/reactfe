import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Directors from "./Directors";
import Commissioners from "./Commissioners";
import Committees from "./Committees";
import AuditCommittee from "./AuditCommittee";
import RiskManagement from "./RiskManagement";
import CorporateSecretary from "./CorporateSecretary";
import CodeOfConduct from "./CodeOfConduct";
import WhistleblowingSystem from "./WhistleblowingSystem";
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
      <section className="relative pt-40 pb-28 bg-[#BEC5A4] text-black overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-95"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            {t("governance")}
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mx-auto mt-8"></div>
        </div>
      </section>

      {/* ================= REAL SECTIONS ================= */}

      <Directors />
      <Commissioners />
      <Committees />
      <AuditCommittee />
      <RiskManagement />
      <CorporateSecretary />
      <CodeOfConduct />
      <WhistleblowingSystem />
      <GovernanceInformation />
      <BudgetDocument />

    </main>
  );
};

export default Governance;