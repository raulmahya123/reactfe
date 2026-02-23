import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import CompanyLogo from "../assets/logo-andalan.png";

const menuItems = [
  {
    name: "about",
    path: "/about",
    submenu: [
      { name: "visionMission", path: "/about#vision" },
      { name: "milestones", path: "/about#milestones" },
      { name: "management", path: "/about#management" },
      { name: "businessActivities", path: "/about#business" },
    ],
  },
  {
    name: "investor",
    path: "/investor",
    submenu: [
      { name: "financialStatements", path: "/investor/financial" },
       { name: "annualReportsMenu", path: "/investor/annual" }, // ✅ BENAR
      { name: "quarterlyReports", path: "/investor/quarterly" },
      { name: "publicExpose", path: "/investor/expose" },
      { name: "dividendInformation", path: "/investor/dividend" },
      { name: "stockPerformance", path: "/investor/stock" },
      { name: "materialInformation", path: "/investor/material" },
    ],
  },
  {
    name: "governance",
    path: "/governance",
    submenu: [
      { name: "boardOfDirectors", path: "/governance/directors" },
      { name: "boardOfCommissioners", path: "/governance/commissioners" },
      { name: "committees", path: "/governance/committees" },
      { name: "auditCommittee", path: "/governance/audit" },
      { name: "riskManagement", path: "/governance/risk" },
      { name: "corporateSecretary", path: "/governance/secretary" },
      { name: "codeOfConduct", path: "/governance/code" },
      { name: "whistleblowingSystem", path: "/governance/wbs" },
      { name: "governanceInformation", path: "/governance/information" },
      { name: "budgetDocument", path: "/governance/budget" },
    ],
  },
  {
    name: "csr",
    path: "/csr",
    submenu: [
      { name: "policy", path: "/csr/policy" },
      { name: "communityDevelopment", path: "/csr/community" },
      { name: "environment", path: "/csr/environment" },
      { name: "sustainabilityReport", path: "/csr/sustainability" },
      { name: "esgCommitment", path: "/csr/esg" },
      { name: "csrInformation", path: "/csr/information" },
    ],
  },
  {
    name: "news",
    path: "/news",
    submenu: [
      { name: "pressRelease", path: "/news/press" },
      { name: "mediaCoverage", path: "/news/media" },
      { name: "corporateActions", path: "/news/actions" },
    ],
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

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
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-[#4A0404]"
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
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    location.pathname.startsWith(item.path)
                      ? "text-[#C6A75E] font-semibold"
                      : scrolled
                      ? "text-gray-700 hover:text-[#8B0000]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {t(item.name)}
                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {/* SUBMENU */}
                {item.submenu && (
                  <div
                    className="absolute left-0 top-full mt-6 w-72
                    bg-gradient-to-r from-[#C6A75E] to-[#D4B76A]
                    shadow-xl rounded-md
                    opacity-0 invisible translate-y-3
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 z-50"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-sm text-white hover:bg-[#B8954F] transition"
                      >
                        {t(sub.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* LANGUAGE SWITCH */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => changeLanguage("id")}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language === "id"
                  ? "bg-[#8B0000] text-white"
                  : "text-gray-700 hover:text-[#8B0000]"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language.startsWith("en")
                  ? "bg-[#8B0000] text-white"
                  : "text-gray-700 hover:text-[#8B0000]"
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
        <div className="xl:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="block font-semibold text-gray-800 mb-2"
              >
                {t(item.name)}
              </Link>

              {item.submenu && (
                <div className="ml-4 space-y-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block text-gray-600 text-sm"
                    >
                      {t(sub.name)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;