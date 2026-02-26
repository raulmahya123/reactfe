import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Financial from "./Financial";
import Annual from "./Annual";
import Quarterly from "./Quarterly";
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
    <main className="bg-white">
      {/* HERO */}
      <section className="relative pt-40 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Investor Relations
          </h1>

          <div className="w-24 h-1 bg-[#B59D55] mx-auto mt-8 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Informasi keuangan, laporan tahunan, paparan publik, dan data
            saham PT Andalan Artha Primanusa sebagai bentuk transparansi
            kepada pemegang saham dan investor.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-gray-50 space-y-32">

      <div id="prospectus" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Prospectus />
        </div>

        <div id="financial" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Financial />
        </div>

        <div id="annual" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Annual />
        </div>

        <div id="quarterly" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Quarterly />
        </div>

        <div id="rups" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <GeneralMeeting />
        </div>

        <div id="expose" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Expose />
        </div>

        <div id="dividend" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Dividend />
        </div>

        <div id="stock" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Stock />
        </div>

        <div id="corporate-action" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <CorporateAction />
        </div>

        <div id="material" className="max-w-6xl mx-auto px-6 scroll-mt-40">
          <Material />
        </div>

      </section>
    </main>
  );
};

export default Investor;