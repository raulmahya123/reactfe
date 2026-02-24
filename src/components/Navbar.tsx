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
      { name: "visionMission", path: "/about/vision" },
      { name: "milestones", path: "/about/milestones" },
      { name: "management", path: "/about/management" },
      { name: "businessActivities", path: "/about/business" },
    ],
  },
  {
    name: "investor",
    path: "/investor",
    submenu: [
      { name: "financialStatements", path: "/investor/financial" },
      { name: "annualReportsMenu", path: "/investor/annual" },
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
          : "bg-[#BEC5A4]"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
<Link to="/" className="flex items-center">
  <div className="h-20 md:h-24 flex items-center overflow-hidden">
    <img
      src={CompanyLogo}
      alt="PT Andalan Artha Primanusa Tbk"
      className="h-full w-auto object-contain scale-[2.1]"
    />
  </div>
</Link>
        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-8">
          
          {/* MENU ITEMS */}
          <div className="flex items-center gap-6 text-[11px] font-normal uppercase tracking-[0.1em]">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    location.pathname.startsWith(item.path)
                      ? "text-[#B59D55] font-semibold"
                      : scrolled
                      ? "text-gray-700 hover:text-[#B59D55]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {t(item.name)}
                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {item.submenu && (
                  <div
                    className="absolute left-0 top-full mt-4 w-64
                    bg-[#B59D55]
                    shadow-xl rounded-md
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 z-50"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-5 py-2.5 text-sm text-white hover:bg-[#a68d4a] transition"
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage("id")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language === "id"
                  ? "bg-[#B59D55] text-white"
                  : "text-[#B59D55] hover:bg-[#B59D55] hover:text-white"
              }`}
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                i18n.language.startsWith("en")
                  ? "bg-[#B59D55] text-white"
                  : "text-[#B59D55] hover:bg-[#B59D55] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`xl:hidden text-2xl ${
            scrolled ? "text-[#B59D55]" : "text-white"
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