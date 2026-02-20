import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/logo-andalan.png";

const menuItems = [
  {
    name: "about",
    path: "/about",
    submenu: [
      { name: "visionMission", path: "/about#vision" },
      { name: "milestones", path: "/about#milestones" },
      { name: "management", path: "/about#management" },
    ],
  },
  {
    name: "investor",
    path: "/investor",
    submenu: [
      { name: "financialStatements", path: "/investor/financial" },
      { name: "annualReports", path: "/investor/annual" },
      { name: "stockPerformance", path: "/investor/stock" },
    ],
  },
  {
    name: "governance",
    path: "/governance",
    submenu: [
      { name: "committees", path: "/governance/committees" },
      { name: "corporateSecretary", path: "/governance/secretary" },
      { name: "governanceInformation", path: "/governance/information" }, // ← TAMBAHAN
      { name: "budgetDocument", path: "/governance/budget" }, // ← TAMBAHAN BARU
    
    ],
  },
  {
    name: "csr",
    path: "/csr",
    submenu: [
      { name: "policy", path: "/csr/policy" },
      { name: "communityDevelopment", path: "/csr/community" },
      { name: "environment", path: "/csr/environment" },
    ],
  },
  {
    name: "news",
    path: "/news",
  },
  {
    name: "contact",
    path: "/contact",
  },
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-[#4A0404]"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 py-5 flex items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-6">
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
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-12 ml-auto">
          <div className="flex items-center gap-10 text-[14px] font-medium uppercase tracking-[0.08em]">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-[#8B0000]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {t(item.name)}
                </Link>

                {/* SUBMENU */}
                {item.submenu && (
                  <div
                    className="absolute left-0 top-full mt-6 w-64 
                    bg-gradient-to-r from-[#C6A75E] to-[#D4B76A]
                    shadow-xl rounded-md
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300 z-50"
                  >
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.path}
                        className="block px-6 py-3 text-sm text-white hover:bg-[#B8954F] transition"
                      >
                        {t(sub.name)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
    </nav>
  );
};

export default Navbar;
