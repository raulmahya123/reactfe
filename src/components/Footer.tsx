import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-[#BEC5A4] text-white pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Accent Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mb-12"></div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">

            {/* COMPANY PROFILE */}
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("about")}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/about#vision" className="hover:text-[#C6A75E] transition">{t("visionMission")}</Link></li>
                <li><Link to="/about#milestones" className="hover:text-[#C6A75E] transition">{t("milestones")}</Link></li>
                <li><Link to="/about#management" className="hover:text-[#C6A75E] transition">{t("management")}</Link></li>
                <li><Link to="/about/structure" className="hover:text-[#C6A75E] transition">{t("organizationStructure")}</Link></li>
              </ul>
            </div>

            {/* INVESTOR RELATIONS */}
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("investor")}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/investor/financial" className="hover:text-[#C6A75E] transition">{t("financialStatements")}</Link></li>
                <li><Link to="/investor/annual" className="hover:text-[#C6A75E] transition">{t("annualReportsTitle")}</Link></li>
                <li><Link to="/investor/quarterly" className="hover:text-[#C6A75E] transition">{t("financialInfo")}</Link></li>
                <li><Link to="/investor/stock" className="hover:text-[#C6A75E] transition">{t("stockPerformance")}</Link></li>
                <li><Link to="/investor/material" className="hover:text-[#C6A75E] transition">{t("materialInformation")}</Link></li>
              </ul>
            </div>

            {/* GOVERNANCE */}
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("governance")}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/governance/directors" className="hover:text-[#C6A75E] transition">{t("boardOfDirectors")}</Link></li>
                <li><Link to="/governance/commissioners" className="hover:text-[#C6A75E] transition">{t("boardOfCommissioners")}</Link></li>
                <li><Link to="/governance/committees" className="hover:text-[#C6A75E] transition">{t("committees")}</Link></li>
                <li><Link to="/governance/secretary" className="hover:text-[#C6A75E] transition">{t("corporateSecretary")}</Link></li>
                <li><Link to="/governance/wbs" className="hover:text-[#C6A75E] transition">{t("whistleblowingSystem")}</Link></li>
              </ul>
            </div>

            {/* SUSTAINABILITY */}
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("sustainability")}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/csr/policy" className="hover:text-[#C6A75E] transition">{t("policy")}</Link></li>
                <li><Link to="/csr/community" className="hover:text-[#C6A75E] transition">{t("communityDevelopment")}</Link></li>
                <li><Link to="/csr/environment" className="hover:text-[#C6A75E] transition">{t("environment")}</Link></li>
                <li><Link to="/csr/sustainability" className="hover:text-[#C6A75E] transition">{t("sustainabilityReport")}</Link></li>
              </ul>
            </div>

            {/* NEWS */}
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("newsDisclosure")}
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/news" className="hover:text-[#C6A75E] transition">{t("news")}</Link></li>
                <li><Link to="/announcement" className="hover:text-[#C6A75E] transition">{t("announcement")}</Link></li>
                <li><Link to="/presentation" className="hover:text-[#C6A75E] transition">{t("presentation")}</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="lg:border-l lg:border-white/20 lg:pl-8">
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                {t("contact")}
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                {t("addressLine1")} <br />
                {t("addressLine2")} <br />
                {t("addressCountry")}
              </p>
              <p className="text-sm text-white/80 mt-6">{t("telephone")}</p>

              <div className="flex gap-4 mt-6 text-lg">
                <a href="#" className="hover:text-[#C6A75E] transition"><FaInstagram /></a>
                <a href="#" className="hover:text-[#C6A75E] transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-[#C6A75E] transition"><FaTwitter /></a>
                <a href="#" className="hover:text-[#C6A75E] transition"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-[#C6A75E] transition"><FaYoutube /></a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-[#C6A75E] mt-16 pt-8 text-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} PT Andalan Artha Primanusa Tbk. {t("allRightsReserved")}
            </p>
          </div>

        </div>
      </footer>

{/* RUNNING FRAUD WARNING BAR */}
<div className="bg-black py-2 overflow-hidden">
  <div
    className="whitespace-nowrap text-xs text-white font-medium"
    style={{
      display: "inline-block",
      paddingLeft: "100%",
      animation: "marquee 25s linear infinite",
    }}
  >
    ⚠️ Hati-hati terhadap penipuan yang mengatasnamakan PT Andalan Artha Primanusa Tbk.
    Perusahaan tidak pernah meminta pembayaran dalam bentuk apapun di luar komunikasi resmi.
    Beware of fraud conducted under the name of PT Andalan Artha Primanusa Tbk.
    The Company never requests any form of payment outside official communication channels.
  </div>

  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</div>
    </>
  );
};

export default Footer;