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
    <main className="bg-white text-gray-800">
      <CSRSection />
    </main>
  );
};

export default CSR;