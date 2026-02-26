import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProyekActivities from "./Proyek";
import ResourcesSection from "./ResourcesSection";
import StrategySection from "./StrategySection";

const ProyekAll = () => {
  const location = useLocation();

  // AUTO SCROLL BASED ON URL
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
      {/* KEGIATAN USAHA */}
      <ProyekActivities />

      {/* SUMBER DAYA */}
      <ResourcesSection />

      {/* STRATEGI & KEUNGGULAN */}
      <StrategySection />
    </main>
  );
};

export default ProyekAll;