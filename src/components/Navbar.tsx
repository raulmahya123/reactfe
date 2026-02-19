import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CompanyLogo from "../assets/logo-andalan.png";

const sections = [
  "home",
  "about",
  "investor",
  "governance",
  "csr",
  "news",
  "contact",
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  // Scroll detect + active spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <img
            src={CompanyLogo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* CENTER - MENU */}
        <div className="hidden xl:flex justify-center gap-8 text-[13px] font-medium uppercase tracking-[0.08em]">

          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className={`relative transition ${
                active === section
                  ? "text-[#7a0000] font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#7a0000]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {t(section)}

              {active === section && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#7a0000]"></span>
              )}
            </button>
          ))}

        </div>

        {/* RIGHT - LANGUAGE */}
        <div className="hidden xl:flex justify-end">
          <div
            className={`flex items-center p-1 rounded-md border transition ${
              scrolled
                ? "bg-white border-gray-300"
                : "bg-black/40 border-white/20"
            }`}
          >
            <button
              onClick={() => changeLanguage("id")}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                i18n.language === "id"
                  ? "bg-[#7a0000] text-white"
                  : scrolled
                  ? "text-gray-600 hover:text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                i18n.language.startsWith("en")
                  ? "bg-[#7a0000] text-white"
                  : scrolled
                  ? "text-gray-600 hover:text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
