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
        const navbarHeight = 120; // sesuaikan tinggi navbar kamu
        const y =
          el.getBoundingClientRect().top +
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
      <section className="pt-36 pb-24 bg-[#F4F6F3]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("governance")}
          </h1>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("governanceHeroDesc")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
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