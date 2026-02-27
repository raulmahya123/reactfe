import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Financial from "./Financial";
import Annual from "./Annual";
import Expose from "./Expose";
import Dividend from "./Dividend";
import Stock from "./Stock";
import Material from "./Material";
import GeneralMeeting from "./GeneralMeeting";
import CorporateAction from "./CorporateAction";
import Prospectus from "./Prospectus";

const Investor = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 bg-[#F4F6F3]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            Investor Relations
          </h1>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            Informasi keuangan, laporan tahunan, paparan publik, dan data
            saham PT Andalan Artha Primanusa sebagai bentuk transparansi
            kepada pemegang saham dan investor.
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white space-y-20">

        <div id="prospectus" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Prospectus />
        </div>

        <div id="financial" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Financial />
        </div>

        <div id="annual" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Annual />
        </div>

        <div id="rups" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <GeneralMeeting />
        </div>

        <div id="expose" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Expose />
        </div>

        <div id="dividend" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Dividend />
        </div>

        <div id="stock" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Stock />
        </div>

        <div id="corporate-action" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <CorporateAction />
        </div>

        <div id="material" className="max-w-6xl mx-auto px-6 scroll-mt-24">
          <Material />
        </div>

      </section>

    </main>
  );
};

export default Investor;