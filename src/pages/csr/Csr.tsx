import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CSRSection from "./CSRSection";

const CSR = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.split("/")[2];

    if (section) {
      const element = document.getElementById(section);

      if (element) {
        const navbarHeight = 120; // sesuaikan tinggi navbar kamu
        const y =
          element.getBoundingClientRect().top +
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
      {/* pt-28 supaya aman dari navbar saat load biasa */}
      <CSRSection />
    </main>
  );
};

export default CSR;