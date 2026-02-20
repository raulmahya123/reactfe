import { useTranslation } from "react-i18next";
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
    <footer className="bg-[#4A0404] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Gold Accent Line */}
        <div className="w-20 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mb-12"></div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">

          {/* COMPANY PROFILE */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-white">
              {t("companyProfile")}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/about#vision" className="hover:text-[#C6A75E] transition">
                  {t("visionMission")}
                </a>
              </li>
              <li>
                <a href="/about#milestones" className="hover:text-[#C6A75E] transition">
                  {t("milestones")}
                </a>
              </li>
              <li>
                <a href="/about#management" className="hover:text-[#C6A75E] transition">
                  {t("management")}
                </a>
              </li>
            </ul>
          </div>

          {/* INVESTOR RELATIONS */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("investorRelations")}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/investor/financial" className="hover:text-[#C6A75E] transition">
                  {t("financialStatements")}
                </a>
              </li>
              <li>
                <a href="/investor/annual" className="hover:text-[#C6A75E] transition">
                  {t("annualReportsTitle")}
                </a>
              </li>
              <li>
                <a href="/investor/stock" className="hover:text-[#C6A75E] transition">
                  {t("stockPerformance")}
                </a>
              </li>
            </ul>
          </div>

          {/* GCG */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("goodCorporateGovernance")}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/governance/committees" className="hover:text-[#C6A75E] transition">
                  {t("committees")}
                </a>
              </li>
              <li>
                <a href="/governance/secretary" className="hover:text-[#C6A75E] transition">
                  {t("corporateSecretary")}
                </a>
              </li>
            </ul>
          </div>

          {/* SUSTAINABILITY */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("sustainability")}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/csr/policy" className="hover:text-[#C6A75E] transition">
                  {t("policy")}
                </a>
              </li>
              <li>
                <a href="/csr/community" className="hover:text-[#C6A75E] transition">
                  {t("communityDevelopment")}
                </a>
              </li>
              <li>
                <a href="/csr/environment" className="hover:text-[#C6A75E] transition">
                  {t("environment")}
                </a>
              </li>
            </ul>
          </div>

          {/* NEWS */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("newsDisclosure")}
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/news" className="hover:text-[#C6A75E] transition">
                  {t("news")}
                </a>
              </li>
              <li>
                <a href="/announcement" className="hover:text-[#C6A75E] transition">
                  {t("announcement")}
                </a>
              </li>
              <li>
                <a href="/presentation" className="hover:text-[#C6A75E] transition">
                  {t("presentation")}
                </a>
              </li>
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

            <p className="text-sm text-white/80 mt-6">
              {t("telephone")}: +62 21 1234 5678
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6 text-lg">
              <a href="#" className="hover:text-[#C6A75E] transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#C6A75E] mt-16 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} PT Andalan Artha Primanusa Tbk.{" "}
            {t("allRightsReserved")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;