import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProyekActivities from "./Proyek";
import ResourcesSection from "./ResourcesSection";
import StrategySection from "./StrategySection";

const ProyekAll = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const el = document.getElementById(section);

      if (el) {
        const navbarHeight = 120; // sesuaikan dengan tinggi navbar kamu
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
    <main className="bg-white text-gray-800 pt-28">
      {/* Tambahan padding top biar aman dari navbar */}
      <ProyekActivities />
      <ResourcesSection />
      <StrategySection />
    </main>
  );
};

export default ProyekAll;