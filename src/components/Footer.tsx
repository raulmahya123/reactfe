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
    <footer className="bg-[#4A0404] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Accent Line */}
        <div className="w-20 h-1 bg-yellow-400 mb-12"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">

          {/* COMPANY PROFILE */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("companyProfile")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/about#vision" className="hover:text-yellow-400 transition">
                  {t("visionMission")}
                </Link>
              </li>
              <li>
                <Link to="/about#milestones" className="hover:text-yellow-400 transition">
                  {t("milestones")}
                </Link>
              </li>
              <li>
                <Link to="/about#management" className="hover:text-yellow-400 transition">
                  {t("management")}
                </Link>
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
                <Link to="/investor/financial" className="hover:text-yellow-400 transition">
                  {t("financialStatements")}
                </Link>
              </li>
              <li>
                <Link to="/investor/annual" className="hover:text-yellow-400 transition">
                  {t("annualReports")}
                </Link>
              </li>
              <li>
                <Link to="/investor/stock" className="hover:text-yellow-400 transition">
                  {t("stockPerformance")}
                </Link>
              </li>
            </ul>
          </div>

          {/* GOOD CORPORATE GOVERNANCE */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("goodCorporateGovernance")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/governance/committees" className="hover:text-yellow-400 transition">
                  {t("committees")}
                </Link>
              </li>
              <li>
                <Link to="/governance/secretary" className="hover:text-yellow-400 transition">
                  {t("corporateSecretary")}
                </Link>
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
                <Link to="/csr/policy" className="hover:text-yellow-400 transition">
                  {t("policy")}
                </Link>
              </li>
              <li>
                <Link to="/csr/community" className="hover:text-yellow-400 transition">
                  {t("communityDevelopment")}
                </Link>
              </li>
              <li>
                <Link to="/csr/environment" className="hover:text-yellow-400 transition">
                  {t("environment")}
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWS & DISCLOSURE */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("newsDisclosure")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/news" className="hover:text-yellow-400 transition">
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link to="/announcement" className="hover:text-yellow-400 transition">
                  {t("announcement")}
                </Link>
              </li>
              <li>
                <Link to="/presentation" className="hover:text-yellow-400 transition">
                  {t("presentation")}
                </Link>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-yellow-400 mt-16 pt-8 text-center">
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