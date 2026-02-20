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
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-[#4A0404]"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 py-5 flex items-center">
        
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-6">
          <img
            src={CompanyLogo}
            alt="PT Andalan Artha Primanusa Tbk"
            className="h-12 w-auto"
          />

          <div className="flex flex-col leading-tight">
            <span
              className={`text-[14px] font-bold tracking-[0.15em] ${
                scrolled ? "text-[#8B0000]" : "text-white"
              }`}
            >
              PT ANDALAN ARTHA
            </span>
            <span
              className={`text-[12px] tracking-[0.2em] ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              PRIMANUSA TBK
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden xl:flex items-center gap-12 ml-auto">

          {/* MENU */}
          <div className="flex items-center gap-10 text-[14px] font-medium uppercase tracking-[0.08em]">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={`transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#8B0000]"
                    : "text-white hover:text-white/80"
                }`}
              >
                {t(section)}
              </button>
            ))}
          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => changeLanguage("id")}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language === "id"
                  ? scrolled
                    ? "bg-[#8B0000] text-white"
                    : "bg-white text-[#8B0000]"
                  : scrolled
                  ? "text-gray-700 hover:text-[#8B0000]"
                  : "text-white hover:text-white/80"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language.startsWith("en")
                  ? scrolled
                    ? "bg-[#8B0000] text-white"
                    : "bg-white text-[#8B0000]"
                  : scrolled
                  ? "text-gray-700 hover:text-[#8B0000]"
                  : "text-white hover:text-white/80"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`xl:hidden ml-auto text-2xl ${
            scrolled ? "text-[#8B0000]" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="xl:hidden bg-white shadow-lg px-8 py-6 space-y-5">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="block w-full text-left uppercase text-sm font-medium text-gray-700 hover:text-[#8B0000]"
            >
              {t(section)}
            </button>
          ))}

          <div className="pt-4 border-t flex gap-4">
            <button
              onClick={() => changeLanguage("id")}
              className="px-3 py-1 text-xs font-semibold text-gray-700"
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="px-3 py-1 text-xs font-semibold text-gray-700"
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;